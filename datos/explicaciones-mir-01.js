/* ============================================================
   EXPLICACIONES — lote 01  (60 casos clínicos)
   Capa de enriquecimiento sobre el banco extendido MIR.
   Se fusiona por id al arrancar la app: los archivos
   banco-mir-*.js son autogenerados y no se tocan.
   Cada entrada añade dato clave, explicación, por qué falla
   cada distractor, la trampa, diferenciales y bibliografía.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ---------------------- NEUROLOGÍA ---------------------- */
'MIR-2015-M133': {
  clave:'La frente está afectada: eso sitúa la lesión por debajo del núcleo facial, es decir, periférica.',
  exp:'Es una parálisis facial periférica idiopática, o parálisis de Bell. La musculatura frontal recibe inervación cortical bilateral, así que en una lesión central la frente se conserva; aquí no se conserva. La disgeusia, la hiperacusia y el dolor mastoideo confirman el nivel: el facial lleva fibras gustativas de los dos tercios anteriores de la lengua y la rama del músculo del estribo. El tratamiento con corticoides orales iniciado en las primeras 72 horas mejora de forma significativa la recuperación completa.',
  no:{0:'Una placa desmielinizante protuberancial produciría parálisis facial nuclear, pero se acompañaría de otros signos de tronco y no explica la disgeusia ni la hiperacusia de forma aislada en una paciente sin ningún otro déficit.',2:'La fibrinólisis se plantea en el ictus isquémico. Una parálisis facial periférica aislada no es un ictus y trombolizarla solo añade riesgo hemorrágico.',3:'El pronóstico es justamente el contrario: entre el 70 y el 85% de las parálisis de Bell se recuperan por completo, y más aún con corticoides precoces.'},
  trampa:'"Debilidad de media cara" dispara el reflejo del ictus. El estado de la frente es el dato que separa central de periférico en cinco segundos, y aquí está tomada.',
  dx:['Parálisis de Bell','Ictus de tronco','Síndrome de Ramsay Hunt','Neuroborreliosis','Tumor de ángulo pontocerebeloso'],
  obj:'Localizar la lesión del nervio facial por la afectación de la frente e indicar corticoides precoces.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Explicación contrastada con Harrison 21.ª ed., trastornos de los pares craneales, y con las guías de la American Academy of Otolaryngology sobre parálisis de Bell.'
},
'MIR-2015-M135': {
  clave:'Síndrome de Horner (ptosis y miosis) más ataxia tras un esfuerzo deportivo con dolor cervical: disección arterial.',
  exp:'El dolor cervical y ocular brusco durante el ejercicio, seguido de Horner ipsilateral e inestabilidad de la marcha, es el cuadro de una disección arterial cervical con isquemia del bulbo raquídeo lateral. El síndrome bulbar lateral, o de Wallenberg, combina Horner ipsilateral, ataxia y alteración sensitiva disociada, y se produce por compromiso de la arteria vertebral o de la cerebelosa posteroinferior. La agudeza visual conservada descarta afectación de la vía óptica.',
  no:{0:'La lesión del III par cursa con ptosis pero con midriasis, no miosis, y con limitación de la motilidad ocular. Aquí la pupila afectada es la pequeña.',1:'El quiasma óptico produce hemianopsia bitemporal, no ptosis ni anisocoria, y la agudeza visual está conservada.',2:'La lesión del ganglio cervical superior daría Horner, pero no explica la ataxia ni la inestabilidad de la marcha, que exigen compromiso de tronco o cerebelo.'},
  trampa:'Ver ptosis y pensar en III par. La clave está en el tamaño pupilar: miosis apunta a vía simpática (Horner); midriasis, a III par.',
  dx:['Disección de arteria vertebral','Síndrome de Wallenberg','Parálisis del III par','Síndrome de Horner por otra causa'],
  obj:'Reconocer el Horner doloroso postesfuerzo como disección arterial hasta demostrar lo contrario.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., enfermedad cerebrovascular, y Snell, Neuroanatomía Clínica.'
},
'MIR-2015-M105': {
  clave:'Meningitis con signos de gravedad: el antibiótico no puede esperar a ninguna prueba de imagen.',
  exp:'Ante una meningitis bacteriana con coma e inestabilidad hemodinámica, la secuencia correcta es extraer hemocultivos, iniciar reanimación con volumen y administrar de inmediato dexametasona junto con antibiótico empírico de amplio espectro. La cobertura debe incluir cefalosporina de tercera generación más vancomicina, y ampicilina por la edad mayor de 50 años, que añade riesgo de Listeria. Solo después se realiza la tomografía y, si no está contraindicada, la punción lumbar. El retraso del antibiótico se asocia de forma directa a mayor mortalidad.',
  no:{1:'Esperar la tomografía, el fondo de ojo y el Gram del líquido antes de tratar retrasa horas un tratamiento que se mide en minutos.',2:'Estabilizar primero y tratar después invierte las prioridades: la sepsis meningocócica o neumocócica no se estabiliza sin antibiótico.',3:'La ceftazidima no es de elección en meningitis comunitaria y esa combinación deja sin cubrir a Listeria, que es justamente el motivo de añadir ampicilina en el mayor de 50 años.'},
  trampa:'La regla mal aprendida de "siempre TAC antes de punción lumbar" hace que el antibiótico se retrase. El antibiótico nunca espera; lo que espera es la punción.',
  dx:['Meningitis bacteriana','Sepsis meningocócica','Encefalitis herpética','Hemorragia subaracnoidea'],
  obj:'Ordenar hemocultivos, dexametasona y antibiótico antes que cualquier imagen en la meningitis grave.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía de la IDSA sobre meningitis bacteriana y Harrison 21.ª ed.'
},
'MIR-2015-M128': {
  clave:'Cefalea que aparece al incorporarse y desaparece al tumbarse, veinte horas después de una punción lumbar.',
  exp:'La cefalea pospunción lumbar es de carácter ortostático: empeora en bipedestación y cede en decúbito. Se debe a la fuga de líquido cefalorraquídeo por el orificio dural, con descenso de la presión intracraneal y tracción de estructuras sensibles al dolor. Aparece en las primeras 24 a 48 horas y es autolimitada; si es incapacitante se trata con hidratación, cafeína y, en casos rebeldes, parche hemático epidural.',
  no:{0:'La cefalea de la meningitis es continua y no cambia con la postura; además la fiebre y los vómitos ya han cedido.',2:'El patrón descrito es exactamente el típico del síndrome pospunción: postural, precoz y reversible al tumbarse.',3:'En la hemorragia subaracnoidea la cefalea es explosiva desde el inicio y no mejora al acostarse.'},
  trampa:'Se atribuye toda cefalea nueva a la enfermedad de base. El carácter postural es el dato que identifica la causa iatrogénica.',
  dx:['Cefalea pospunción lumbar','Meningitis persistente','Trombosis de senos venosos','Hemorragia subaracnoidea'],
  obj:'Reconocer la cefalea ortostática como complicación de la punción lumbar.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., cefaleas, y la clasificación internacional de cefaleas (ICHD-3).'
},
'MIR-2015-M130': {
  clave:'La crisis empieza focal —movimientos de un hemicuerpo— y después se pierde la conciencia; hay lesión estructural demostrada.',
  exp:'La crisis nace en un punto concreto de la corteza, de ahí el inicio focal con movimientos limitados a los miembros izquierdos por una lesión frontal derecha. Cuando la descarga se propaga a ambos hemisferios se pierde la conciencia: eso la convierte en secundariamente generalizada. Y se llama sintomática porque existe una causa estructural identificada, el glioma. Los tres calificativos son necesarios y describen tres cosas distintas: dónde empieza, hasta dónde llega y por qué ocurre.',
  no:{0:'Generalizada significa que la descarga es bilateral desde el inicio, sin fase focal. Aquí hay un comienzo claramente lateralizado.',1:'Parcial sola describiría la crisis si no hubiera pérdida de conciencia por propagación.',2:'Criptogénica significa de causa desconocida; aquí la causa está identificada en la resonancia.'},
  trampa:'Quedarse en "parcial" y olvidar que la pérdida de conciencia posterior obliga a añadir "secundariamente generalizada", o llamarla criptogénica cuando la lesión ya está vista.',
  dx:['Epilepsia estructural frontal','Crisis generalizada primaria','Crisis psicógena'],
  obj:'Clasificar una crisis por su inicio, su propagación y su causa.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la clasificación de crisis epilépticas de la ILAE y Harrison 21.ª ed.'
},
'MIR-2015-M131': {
  clave:'Fenómeno de miembro alienígena con parkinsonismo asimétrico y mioclonías.',
  exp:'La degeneración corticobasal combina signos corticales —apraxia, mano alienígena, mioclonías— con parkinsonismo rígido-acinético marcadamente asimétrico y mala respuesta a levodopa. El fenómeno de la mano extraña, en el que el miembro actúa de forma aparentemente autónoma, es prácticamente distintivo de esta entidad dentro de los parkinsonismos atípicos.',
  no:{0:'La enfermedad de Parkinson cursa con temblor de reposo, buena respuesta a levodopa y no produce apraxia del habla ni fenómeno de miembro extraño.',2:'La enfermedad de Alzheimer debuta con amnesia episódica, no con apraxia del habla y parkinsonismo asimétrico.',3:'La enfermedad de Huntington cursa con corea, deterioro cognitivo y trastorno conductual, con antecedente familiar autosómico dominante.'},
  trampa:'Se etiqueta como Parkinson cualquier parkinsonismo. La asimetría marcada, la apraxia y la mala respuesta a levodopa son las banderas rojas de los parkinsonismos atípicos.',
  dx:['Degeneración corticobasal','Enfermedad de Parkinson','Parálisis supranuclear progresiva','Atrofia multisistémica'],
  obj:'Identificar las banderas rojas que descartan enfermedad de Parkinson idiopática.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., trastornos del movimiento.'
},
'MIR-2015-M172': {
  clave:'Pródromo de mareo y palidez, recuperación en menos de un minuto con orientación inmediata, y episodio previo idéntico.',
  exp:'Es un síncope vasovagal con movimientos convulsivos breves, lo que se conoce como síncope convulsivo. La privación de sueño y la bipedestación son desencadenantes clásicos. Los datos que lo identifican son el pródromo, la palidez, la brevedad y sobre todo la recuperación inmediata de la orientación. La relajación de esfínteres y unas sacudidas de segundos no lo convierten en epilepsia. Con exploración normal y episodio previo similar no hacen falta más estudios.',
  no:{1:'No hay criterios de crisis epiléptica: sin período postcrítico, sin desorientación prolongada y con pródromo típico. Iniciar antiepilépticos aquí es sobretratar.',2:'La analítica y la derivación al neurólogo no aportan en un síncope vasovagal típico y recurrente con exploración normal.',3:'La intoxicación etílica no produce recuperación completa en un minuto, y la punción lumbar no tiene ninguna indicación en este cuadro.'},
  trampa:'"Convulsionó y se orinó, luego es epilepsia". Ambos signos aparecen en el síncope; lo que distingue es el pródromo y la velocidad de recuperación.',
  dx:['Síncope vasovagal','Crisis epiléptica','Síncope cardiogénico','Crisis psicógena'],
  obj:'Diferenciar síncope convulsivo de crisis epiléptica por el pródromo y la recuperación.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía ESC de síncope y Harrison 21.ª ed.'
},
'MIR-2016-M156': {
  clave:'Mioclonías matutinas en un adolescente, desencadenadas por privación de sueño y alcohol, con antecedente familiar.',
  exp:'La epilepsia mioclónica juvenil es un síndrome epiléptico generalizado genético que debuta en la adolescencia. Se define por la tríada de mioclonías matutinas al despertar, crisis tónico-clónicas generalizadas y, en un tercio de los casos, ausencias. Los desencadenantes clásicos son la privación de sueño, el alcohol y la fotoestimulación. Responde bien al valproato, aunque en mujeres en edad fértil se prefieren alternativas, y suele requerir tratamiento de por vida.',
  no:{1:'El síndrome de Lennox-Gastaut aparece en la infancia temprana, con discapacidad intelectual, crisis tónicas nocturnas y patrón electroencefalográfico de punta-onda lenta.',2:'La epilepsia del lóbulo temporal mesial produce crisis focales con automatismos, pero no mioclonías matutinas bilaterales ni tiene este perfil familiar.',3:'El consumo de drogas no explica un cuadro de meses de mioclonías matutinas estereotipadas con antecedentes familiares.'},
  trampa:'Las mioclonías al despertar se confunden con torpeza o nerviosismo y no se preguntan. Sin esa pregunta, el diagnóstico se pierde durante años.',
  dx:['Epilepsia mioclónica juvenil','Epilepsia de ausencias juvenil','Epilepsia focal','Mioclonías fisiológicas del sueño'],
  obj:'Reconocer la tríada de la epilepsia mioclónica juvenil y sus desencadenantes.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la clasificación de síndromes epilépticos de la ILAE y Harrison 21.ª ed.'
},

/* ---------------------- CARDIOLOGÍA ---------------------- */
'MIR-2015-M57': {
  clave:'Infarto con elevación del ST y shock cardiogénico con edema agudo de pulmón.',
  exp:'El paciente tiene un infarto anterior extenso complicado con shock cardiogénico. En esta situación la angioplastia primaria es la estrategia de reperfusión de elección, y su indicación es aún más firme que en el infarto no complicado: la revascularización precoz es la única medida que ha demostrado reducir la mortalidad del shock cardiogénico postinfarto. El traslado a un centro con hemodinámica es prioritario aunque implique demora.',
  no:{0:'Los nitratos están contraindicados con presión sistólica de 68 mmHg: profundizarían el colapso hemodinámico.',1:'La fibrinólisis es claramente inferior a la angioplastia en el shock cardiogénico y es la opción de rescate solo si la angioplastia no está disponible en tiempo razonable.',3:'La furosemida trata la congestión pero no la causa, y en un paciente hipotenso puede reducir aún más el gasto cardíaco.'},
  trampa:'El edema agudo de pulmón empuja a dar diurético y nitratos. Con hipotensión grave ambos son peligrosos: lo que hay que abrir es la arteria.',
  dx:['Shock cardiogénico postinfarto','Edema agudo de pulmón','Complicación mecánica del infarto'],
  obj:'Priorizar la revascularización sobre el tratamiento sintomático en el shock cardiogénico.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía ESC 2023 de síndromes coronarios agudos.'
},
'MIR-2015-M55': {
  clave:'La pregunta es por la rotura de pared libre, que produce hemopericardio y taponamiento, no una comunicación entre cavidades.',
  exp:'La rotura de pared libre del ventrículo vierte sangre al pericardio y provoca taponamiento y disociación electromecánica. Como no existe comunicación entre cavidades, no hay flujo turbulento entre ellas y por tanto no hay frémito palpable. El derrame pericárdico visto en la ecocardiografía apoya justamente ese mecanismo. El frémito es propio de la comunicación interventricular postinfarto, donde sí hay un chorro de alta velocidad entre ventrículos.',
  no:{0:'La mortalidad de las complicaciones mecánicas con tratamiento médico exclusivo es muy superior al 20%: sin cirugía es prácticamente universal.',1:'El salto oximétrico en el ventrículo derecho es el hallazgo de la comunicación interventricular, no de la rotura de pared libre.',3:'Las complicaciones mecánicas aparecen característicamente entre el segundo y el séptimo día, no en el primero, coincidiendo con el reblandecimiento del tejido necrótico.'},
  trampa:'Se mezclan las tres complicaciones mecánicas. Conviene separarlas por el hallazgo físico: soplo con frémito y salto oximétrico en la comunicación interventricular; soplo sin frémito e insuficiencia mitral aguda en la rotura de músculo papilar; taponamiento sin soplo en la rotura de pared libre.',
  dx:['Rotura de pared libre','Comunicación interventricular postinfarto','Rotura de músculo papilar','Pseudoaneurisma'],
  obj:'Diferenciar las complicaciones mecánicas del infarto por su mecanismo y su hallazgo exploratorio.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., complicaciones del infarto agudo de miocardio.'
},
'MIR-2015-M227': {
  clave:'Se pide la afirmación FALSA: la ablación no es el tratamiento inicial de un primer episodio de fibrilación auricular.',
  exp:'La ablación con catéter se reserva para la fibrilación auricular sintomática recurrente que no responde a fármacos antiarrítmicos, o como primera línea en pacientes jóvenes muy seleccionados con fibrilación paroxística. Un primer episodio en un paciente de 76 años con hipertensión y diabetes se maneja con control de frecuencia, anticoagulación y valoración de cardioversión, no con ablación.',
  no:{0:'Es cierta: con esa edad, hipertensión y diabetes, la puntuación CHA₂DS₂-VASc obliga a anticoagular de por vida salvo contraindicación.',1:'Es cierta: con más de 48 horas de evolución, o duración incierta, hay que descartar trombo con ecocardiografía transesofágica antes de cardiovertir, o anticoagular tres semanas previas.',3:'Es cierta: los betabloqueantes son de primera línea para el control de la frecuencia ventricular.'},
  trampa:'En las preguntas de "señale la falsa" es fácil marcar la primera afirmación que suene correcta. Hay que verificar las cuatro y quedarse con la que no encaja.',
  dx:['Fibrilación auricular de reciente diagnóstico'],
  obj:'Situar correctamente la ablación dentro del algoritmo de la fibrilación auricular.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía ESC 2024 de fibrilación auricular.'
},
'MIR-2015-M60': {
  clave:'Se pide la INCORRECTA. En la insuficiencia cardíaca con fracción de eyección preservada el ventrículo es rígido y depende de la precarga.',
  exp:'En la insuficiencia cardíaca con fracción de eyección preservada el problema es de llenado: un ventrículo poco distensible necesita una precarga adecuada para mantener el gasto. Los diuréticos son necesarios para aliviar la congestión, pero deben usarse en la dosis mínima eficaz y con ajuste cuidadoso: una depleción excesiva reduce el llenado y provoca hipotensión y deterioro renal. Iniciarlos a dosis altas es, por tanto, la afirmación incorrecta.',
  no:{0:'Es correcta: el pilar del tratamiento en esta forma de insuficiencia cardíaca es controlar lo que la causa, sobre todo hipertensión, fibrilación auricular, isquemia y obesidad.',2:'Es correcta: los nitratos deben iniciarse con prudencia por el mismo motivo, la dependencia de precarga.',3:'Es correcta como estrategia general de reducción de la activación neurohormonal en el paciente hipertenso con insuficiencia cardíaca.'},
  trampa:'Se aplica automáticamente el esquema de la fracción de eyección reducida. La fisiología es distinta: aquí el enemigo no es solo la congestión, también lo es la depleción.',
  dx:['Insuficiencia cardíaca con fracción de eyección preservada'],
  obj:'Entender la dependencia de precarga en la insuficiencia cardíaca con fracción preservada.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía ESC de insuficiencia cardíaca y Harrison 21.ª ed.'
},
'MIR-2016-M227': {
  clave:'Se pide la FALSA: la pericarditis idiopática recurre en torno al 15-30% de los casos, no en más del 75%.',
  exp:'La recurrencia es la complicación más frecuente de la pericarditis aguda idiopática, pero su frecuencia se sitúa entre el 15 y el 30% tras un primer episodio sin tratamiento con colchicina, y se reduce aproximadamente a la mitad cuando se añade colchicina. Afirmar que recurre en más del 75% de los pacientes exagera muy por encima de lo documentado.',
  no:{0:'Es cierta: no existe una prueba específica y el diagnóstico se apoya en criterios clínicos, electrocardiográficos y ecocardiográficos, tras excluir otras causas.',1:'Es cierta: el riesgo teórico de transformación hemorrágica del derrame hace que se evite la anticoagulación salvo indicación imperiosa por otra causa.',2:'Es cierta: el tratamiento se basa en antiinflamatorios, restricción de actividad física y colchicina para prevenir recurrencias.'},
  trampa:'Las cifras exageradas son un patrón habitual del distractor correcto en las preguntas de "señale la falsa". Un porcentaje llamativamente alto merece sospecha.',
  dx:['Pericarditis aguda idiopática','Pericarditis recurrente','Síndrome coronario agudo'],
  obj:'Conocer la tasa real de recurrencia de la pericarditis y el papel preventivo de la colchicina.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la guía ESC de enfermedades del pericardio.'
},
'MIR-2016-M217': {
  clave:'El médico explora la disposición al cambio, identifica ambivalencia y negocia un plan con el paciente.',
  exp:'Eso es exactamente la entrevista motivacional: un estilo de comunicación centrado en el paciente que trabaja sobre su ambivalencia para reforzar la motivación intrínseca al cambio. No informa ni convence desde fuera; ayuda a que el propio paciente construya sus razones. Es la técnica con mayor respaldo en conductas adictivas y cambio de hábitos.',
  no:{0:'La entrevista semiológica busca datos para el diagnóstico: recoge síntomas, no trabaja la motivación.',1:'La entrevista informativa transmite información al paciente en un sentido, sin explorar su ambivalencia.',3:'La entrevista operativa se orienta a resolver una tarea concreta, no a movilizar el cambio conductual.'},
  trampa:'Se elige "informativa" porque el médico habla del tabaco. Lo que define la técnica no es el tema, es que se exploran los puntos de vista del paciente y se negocia con él.',
  dx:[],
  obj:'Identificar la entrevista motivacional por sus elementos: explorar ambivalencia y negociar el plan.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Miller y Rollnick, Entrevista Motivacional, y las recomendaciones de la OMS sobre cesación tabáquica.'
},

/* ---------------------- NEUMOLOGÍA ---------------------- */
'MIR-2015-M106': {
  clave:'Exudado pleural con predominio linfocitario y citología negativa en un paciente joven de zona endémica.',
  exp:'El líquido cumple criterios de exudado, es linfocitario y no muestra células malignas. En ese contexto la tuberculosis pleural es el primer diagnóstico, y la adenosina desaminasa es la prueba con mejor rendimiento inmediato: valores elevados en un exudado linfocitario tienen alta sensibilidad y especificidad para tuberculosis pleural en zonas de prevalencia intermedia o alta. La baciloscopia del líquido es poco sensible y el cultivo tarda semanas.',
  no:{0:'La tomografía caracteriza mejor el derrame y el parénquima, pero no aporta el diagnóstico etiológico.',1:'El pH es útil para decidir si un derrame paraneumónico necesita drenaje, no para diagnosticar la causa de un exudado linfocitario.',3:'La tuberculina informa de contacto previo con el bacilo, pero no distingue infección latente de enfermedad activa y puede ser negativa en la enfermedad.'},
  trampa:'Pedir más imagen cuando el líquido ya está en la mano. El análisis del líquido pleural es lo que orienta la causa; la imagen describe, no diagnostica.',
  dx:['Tuberculosis pleural','Derrame paraneumónico','Derrame neoplásico','Linfoma'],
  obj:'Usar la adenosina desaminasa ante un exudado pleural linfocitario.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., enfermedades de la pleura, y las guías de la British Thoracic Society.'
},
'MIR-2015-M119': {
  clave:'Clínica compatible con asma pero espirometría normal y prueba broncodilatadora negativa.',
  exp:'Cuando la sospecha clínica de asma es alta y la espirometría con prueba broncodilatadora resulta normal, el paso siguiente es demostrar hiperreactividad bronquial mediante una prueba de provocación con metacolina. Su gran valor está en el resultado negativo: una metacolina negativa hace muy improbable el asma. El asma es una enfermedad variable, y una espirometría normal en un momento puntual no la descarta.',
  no:{0:'La radiografía de senos investiga sinusitis como causa de tos, pero no confirma ni descarta asma.',1:'La tomografía torácica se reserva para sospecha de bronquiectasias o enfermedad intersticial, no para el asma con radiografía normal.',3:'El prick-test identifica sensibilización alérgica, dato útil para el fenotipo, pero no diagnostica asma ni sustituye a la demostración de hiperreactividad.'},
  trampa:'Una espirometría normal se lee como "no tiene asma". En el asma leve o intermitente lo normal es que la espirometría sea normal entre episodios.',
  dx:['Asma bronquial','Tos por goteo posnasal','Reflujo gastroesofágico','Bronquitis eosinofílica'],
  obj:'Saber que la prueba de metacolina se usa para descartar asma cuando la espirometría es normal.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con GINA, estrategia global para el manejo del asma.'
},
'MIR-2015-M122': {
  clave:'Se pregunta qué NO es recomendable. Los corticoides orales prolongados no tienen papel en la EPOC estable.',
  exp:'El tratamiento con glucocorticoides sistémicos en la EPOC se limita a ciclos cortos durante las exacerbaciones, habitualmente de cinco días. Mantenerlos seis meses no reduce las exacerbaciones y expone al paciente a osteoporosis, miopatía, diabetes, hipertensión e inmunosupresión. En este paciente, con cardiopatía isquémica y arteriopatía periférica, el perjuicio sería aún mayor.',
  no:{0:'Es recomendable: la doble broncodilatación de larga duración con corticoide inhalado está indicada en el paciente con exacerbaciones repetidas.',2:'Es recomendable y a menudo se olvida: una técnica inhalatoria incorrecta explica muchos fracasos terapéuticos aparentes.',3:'Es recomendable: con saturación del 88% procede evaluar oxigenoterapia crónica domiciliaria, una de las pocas medidas que aumenta la supervivencia en la EPOC.'},
  trampa:'Confundir el corticoide inhalado, que sí tiene indicación en el paciente exacerbador, con el corticoide sistémico prolongado, que no la tiene.',
  dx:['EPOC grave exacerbadora'],
  obj:'Distinguir el papel del corticoide inhalado del sistémico en la EPOC.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con el informe GOLD vigente.'
},
'MIR-2016-M231': {
  clave:'Derrame pleural febril con leucocitosis y neutrofilia: hay que analizar el líquido antes de decidir nada.',
  exp:'Ante un derrame paraneumónico que no responde al antibiótico, la toracocentesis diagnóstica es el paso obligado. El análisis del líquido —pH, glucosa, lactato deshidrogenasa, Gram y cultivo— es lo que distingue un derrame paraneumónico simple, que se resuelve con antibiótico, de uno complicado o un empiema, que exige drenaje. Sin esos datos no se puede decidir si hace falta tubo de tórax.',
  no:{0:'La videotoracoscopia es un procedimiento de segunda línea, para el derrame tabicado o el fracaso del drenaje: no se salta el paso diagnóstico simple.',2:'Cambiar el antibiótico a ciegas sin saber si hay empiema retrasa el drenaje, que es lo que resuelve estos casos.',3:'Colocar un drenaje sin analizar el líquido puede ser innecesario en un derrame paraneumónico simple, que solo requiere antibiótico.'},
  trampa:'La tentación es actuar —drenar o cambiar antibiótico— cuando el paso que ordena toda la conducta es un procedimiento sencillo con una aguja.',
  dx:['Derrame paraneumónico complicado','Empiema','Derrame paraneumónico simple','Derrame neoplásico'],
  obj:'Analizar el líquido pleural antes de decidir drenaje en el derrame paraneumónico.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la British Thoracic Society sobre infección pleural.'
},
'MIR-2016-M34': {
  clave:'Heterogeneidad temporal y espacial, focos fibroblásticos y distribución subpleural.',
  exp:'Ese trío histológico define el patrón de neumonía intersticial usual, el sustrato de la fibrosis pulmonar idiopática. La heterogeneidad —áreas sanas junto a áreas fibrosadas— y los focos fibroblásticos, que representan fibrosis activa reciente, son los rasgos que la separan de los demás patrones intersticiales. La distribución subpleural y basal completa el cuadro.',
  no:{0:'La histiocitosis de células de Langerhans muestra nódulos y quistes de predominio en lóbulos superiores, con células de Langerhans CD1a positivas.',2:'La alveolitis alérgica extrínseca cursa con granulomas mal formados, bronquiolocentrismo y predominio en lóbulos superiores.',3:'La proteinosis alveolar se caracteriza por material PAS positivo dentro de los alvéolos, sin fibrosis septal ni focos fibroblásticos.'},
  trampa:'Se memoriza "fibrosis pulmonar" sin los descriptores histológicos. La heterogeneidad y los focos fibroblásticos son las dos palabras que cierran el diagnóstico.',
  dx:['Fibrosis pulmonar idiopática','Alveolitis alérgica extrínseca crónica','Neumonía intersticial no específica','Asbestosis'],
  obj:'Reconocer el patrón histológico de neumonía intersticial usual.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la guía ATS/ERS sobre fibrosis pulmonar idiopática y Robbins, Patología Estructural y Funcional.'
},
'MIR-2015-M195': {
  clave:'Se incluyeron costes de transporte y de pérdida de productividad: eso ya no es solo del sistema sanitario.',
  exp:'La perspectiva de un análisis farmacoeconómico la define quién soporta los costes que se contabilizan. Al incluir costes indirectos como el transporte del paciente y la productividad laboral perdida, el estudio sale del ámbito del sistema sanitario y adopta la perspectiva de la sociedad, que es la más amplia posible.',
  no:{0:'La perspectiva hospitalaria contabilizaría solo los costes generados dentro del hospital.',1:'La perspectiva del sistema nacional de salud incluiría los costes sanitarios directos, pero no la productividad perdida ni el transporte del paciente.',2:'La perspectiva extrahospitalaria no es una categoría estándar en evaluación económica.'},
  trampa:'Se identifica la perspectiva por el escenario clínico —hospital, atención primaria— en lugar de por el tipo de costes incluidos, que es lo que realmente la define.',
  dx:[],
  obj:'Determinar la perspectiva de un estudio farmacoeconómico por los costes contabilizados.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Drummond, Methods for the Economic Evaluation of Health Care Programmes.'
},

/* ---------------------- NEFROLOGÍA ---------------------- */
'MIR-2016-M135': {
  clave:'Espículas con tinción de plata más anticuerpos anti-receptor de fosfolipasa A2 tipo M.',
  exp:'El engrosamiento uniforme de la pared capilar con espículas y depósitos granulares subepiteliales de IgG y C3 define la nefropatía membranosa. Los anticuerpos anti-PLA2R están presentes en cerca del 70-80% de las formas primarias y son prácticamente específicos, hasta el punto de que su detección permite diagnosticar sin biopsia en casos seleccionados. Es la causa más frecuente de síndrome nefrótico en el adulto no diabético.',
  no:{0:'La enfermedad de cambios mínimos tiene microscopía óptica normal y solo muestra fusión pedicelar en microscopía electrónica.',1:'La glomeruloesclerosis focal y segmentaria afecta a algunos glomérulos y solo a parte del ovillo, sin espículas ni depósitos difusos de IgG.',3:'La nefropatía IgA cursa con depósitos mesangiales de IgA y se presenta típicamente con hematuria, no con síndrome nefrótico puro.'},
  trampa:'Se contesta por el síndrome —nefrótico— en lugar de por la histología. Las espículas y el anti-PLA2R son la firma que no comparte ninguna otra entidad.',
  dx:['Nefropatía membranosa primaria','Enfermedad de cambios mínimos','Glomeruloesclerosis focal y segmentaria','Nefropatía diabética'],
  obj:'Asociar el patrón histológico y el anti-PLA2R con la nefropatía membranosa.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la guía KDIGO de glomerulonefritis y Harrison 21.ª ed.'
},
'MIR-2016-M136': {
  clave:'Fiebre, fracaso renal y eosinófilos en el sedimento, en una paciente que recibía amoxicilina.',
  exp:'Es una nefritis intersticial aguda por hipersensibilidad. La tríada clásica de fiebre, exantema y eosinofilia no siempre está completa, pero la eosinofiluria en un paciente expuesto a un fármaco —betalactámicos, antiinflamatorios no esteroideos, inhibidores de la bomba de protones— es muy orientadora. El complemento normal descarta las glomerulonefritis que lo consumen, y la reversibilidad tras retirar el fármaco confirma el mecanismo.',
  no:{1:'La glomerulonefritis postinfecciosa consume complemento: el C3 estaría bajo, y aquí es normal.',2:'La glomerulonefritis mesangiocapilar tipo II cursa con hipocomplementemia persistente y curso crónico, no con resolución completa.',3:'El ateroembolismo de colesterol aparece tras manipulación vascular, con livedo reticularis y eosinofilia, pero el deterioro renal suele ser progresivo y no reversible.'},
  trampa:'Los hematíes dismórficos empujan hacia una glomerulonefritis. El complemento normal, los eosinófilos y la exposición al antibiótico reorientan hacia el intersticio.',
  dx:['Nefritis intersticial aguda','Glomerulonefritis postinfecciosa','Ateroembolismo de colesterol','Necrosis tubular aguda'],
  obj:'Reconocer la nefritis intersticial por fármacos y el valor del complemento normal.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., enfermedades tubulointersticiales.'
},
'MIR-2016-M139': {
  clave:'Se pide el que NO es factor de progresión. La hipocalcemia es consecuencia de la enfermedad renal, no motor de su avance.',
  exp:'Los factores que aceleran la progresión de la nefropatía diabética son la hipertensión mal controlada, la proteinuria, el mal control glucémico, el tabaquismo y la obesidad. La hipocalcemia aparece como consecuencia del déficit de calcitriol en la enfermedad renal crónica avanzada: es un marcador del daño, no una causa de que progrese.',
  no:{0:'La hipertensión mal controlada es el factor de progresión modificable de mayor peso.',1:'La proteinuria no solo marca daño: es tóxica para el túbulo y acelera la fibrosis intersticial.',3:'El mal control glucémico mantiene activo el mecanismo lesional de la nefropatía diabética.'},
  trampa:'Se confunde una alteración que acompaña a la enfermedad con una que la empuja. La pregunta separa causa de consecuencia.',
  dx:['Nefropatía diabética','Enfermedad renal crónica estadio 3b'],
  obj:'Distinguir factores de progresión de la enfermedad renal de sus consecuencias metabólicas.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la guía KDIGO de enfermedad renal crónica.'
},
'MIR-2016-M145': {
  clave:'Macrófagos espumosos en la orina con masa renal, fiebre prolongada y anemia.',
  exp:'La pielonefritis xantogranulomatosa es una infección renal crónica destructiva, habitualmente asociada a litiasis y obstrucción, en la que el parénquima se sustituye por macrófagos cargados de lípidos —las células espumosas—. Clínicamente simula una neoplasia: síndrome constitucional, fiebre, anemia y velocidad de sedimentación muy elevada. El tratamiento suele ser la nefrectomía.',
  no:{0:'La tuberculosis renal cursa con piuria estéril y hematuria, sin macrófagos espumosos, y suele acompañarse de alteraciones en la vía urinaria.',2:'El absceso renal daría una colección bien delimitada y un cuadro séptico más agudo, no cuatro meses de evolución.',3:'El adenocarcinoma renal entra en el diferencial por la masa y el síndrome constitucional, pero no produce macrófagos espumosos ni leucocituria.'},
  trampa:'El cuadro imita un cáncer renal tan bien que la histología es la única forma de separarlos. La citología con macrófagos espumosos es el detalle que lo delata.',
  dx:['Pielonefritis xantogranulomatosa','Carcinoma renal','Tuberculosis renal','Absceso renal'],
  obj:'Reconocer la pielonefritis xantogranulomatosa como imitadora de neoplasia.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Campbell-Walsh, Urología, y Robbins, Patología Estructural y Funcional.'
},
'MIR-2016-M101': {
  clave:'Mieloma múltiple en un paciente de 72 años: la edad lo excluye del trasplante autólogo.',
  exp:'El paciente tiene un mieloma múltiple sintomático con anemia, insuficiencia renal y proteinuria de cadenas ligeras. El umbral habitual para el trasplante autólogo se sitúa en torno a los 65-70 años y depende además de la comorbilidad; a los 72 años, con insuficiencia renal, no es candidato. En el paciente no trasplantable el esquema de inducción combina tres fármacos, y el bortezomib es especialmente adecuado porque no requiere ajuste por función renal y mejora rápidamente el daño renal por cadenas ligeras.',
  no:{0:'La citogenética estratifica el riesgo y aporta pronóstico, pero no determina por sí sola el esquema de inducción inicial.',1:'La edad de 72 años, sumada a la insuficiencia renal, excluye habitualmente el trasplante autólogo.',3:'La lenalidomida se elimina por vía renal y exige ajuste de dosis en insuficiencia renal, de modo que no es la elección obligada en este paciente.'},
  trampa:'Se responde por el fármaco de moda sin comprobar la función renal, que es justamente lo que condiciona la elección en el mieloma.',
  dx:['Mieloma múltiple','Amiloidosis AL','Gammapatía monoclonal de significado incierto'],
  obj:'Elegir el esquema de mieloma según candidatura a trasplante y función renal.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías del International Myeloma Working Group y Harrison 21.ª ed.'
},
'MIR-2016-M181': {
  clave:'Reflujo vesicoureteral bilateral grado III en una lactante que ya tuvo una pielonefritis.',
  exp:'El reflujo de grado intermedio en un lactante tiene alta probabilidad de resolución espontánea, por lo que la conducta inicial es conservadora, pero no pasiva: se indica profilaxis antibiótica para prevenir nuevas pielonefritis y se solicita gammagrafía renal con DMSA para valorar si ya existe cicatriz renal, que es lo que determina el pronóstico a largo plazo. El objetivo no es corregir el reflujo, es proteger el parénquima.',
  no:{0:'Es cierto que puede resolverse solo, pero la paciente ya tuvo una pielonefritis: no hacer nada la expone a nuevas infecciones y a cicatrices renales.',1:'El tratamiento endoscópico se reserva para grados altos, fracaso de la profilaxis o infecciones recurrentes pese a ella.',2:'La gammagrafía es correcta, pero el urocultivo mensual en una niña asintomática no está indicado y detectar bacteriuria asintomática llevaría a tratamientos innecesarios.'},
  trampa:'Se elige entre operar o no hacer nada, cuando la respuesta está en el medio: proteger mientras se espera la resolución espontánea.',
  dx:['Reflujo vesicoureteral','Nefropatía por reflujo','Pielonefritis aguda'],
  obj:'Manejar el reflujo vesicoureteral de grado intermedio en el lactante.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed. y las guías de la European Association of Urology sobre urología pediátrica.'
},

/* ---------------------- INFECTOLOGÍA ---------------------- */
'MIR-2015-M56': {
  clave:'Endocarditis con bloqueo auriculoventricular completo e insuficiencia cardíaca refractaria: dos indicaciones quirúrgicas simultáneas.',
  exp:'La endocarditis por Streptococcus gallolyticus sobre válvula aórtica ha producido insuficiencia valvular grave con insuficiencia cardíaca refractaria al tratamiento médico, que es la indicación quirúrgica más urgente. Además, el bloqueo auriculoventricular completo indica extensión perivalvular con absceso del septo, otra indicación de cirugía. Ninguna de las dos se resuelve con antibiótico ni con marcapasos: hay que sustituir la válvula y desbridar el absceso. Conviene recordar que este germen obliga a buscar neoplasia de colon.',
  no:{1:'El balón de contrapulsación y el marcapasos transitorio son medidas de sostén; no corrigen la regurgitación ni el absceso, y retrasar tres semanas la cirugía en una insuficiencia cardíaca refractaria es inaceptable.',2:'El implante percutáneo de válvula está contraindicado en la endocarditis activa: se colocaría una prótesis sobre un lecho infectado.',3:'Un marcapasos definitivo sobre un absceso perivalvular activo se infectaría, y no resuelve la insuficiencia cardíaca.'},
  trampa:'El bloqueo llama a poner un marcapasos. Pero el bloqueo aquí es un síntoma del absceso: tratar el síntoma y dejar el absceso es dejar la enfermedad intacta.',
  dx:['Endocarditis infecciosa complicada','Absceso perivalvular','Insuficiencia aórtica aguda'],
  obj:'Reconocer las indicaciones de cirugía urgente en la endocarditis infecciosa.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía ESC de endocarditis infecciosa.'
},
'MIR-2015-M75': {
  clave:'HBsAg positivo con IgM anti-HBc negativa e IgG anti-HBc positiva: la infección lleva más de seis meses.',
  exp:'El antígeno de superficie positivo indica infección activa. Lo que fecha el cuadro es el anti-HBc: la IgM marca infección aguda y aquí es negativa, mientras que la IgG positiva indica infección antigua. Con HBsAg persistente y ADN viral detectable se trata de una infección crónica. El patrón HBeAg negativo con anti-HBe positivo corresponde a la fase de portador con menor replicación, aunque el ADN detectable obliga a seguimiento.',
  no:{0:'En la infección aguda la IgM anti-HBc sería positiva; aquí es negativa.',2:'El paciente vacunado presenta anti-HBs aislado positivo, sin HBsAg ni anti-HBc.',3:'El término portador asintomático es menos preciso y hoy se evita; además el ADN viral detectable implica replicación activa que requiere seguimiento.'},
  trampa:'Se lee solo el HBsAg y se decide agudo o crónico al azar. El marcador que fecha la infección es la clase de inmunoglobulina del anti-HBc.',
  dx:['Hepatitis B crónica','Hepatitis B aguda','Inmunidad vacunal','Infección resuelta'],
  obj:'Interpretar el perfil serológico completo de la hepatitis B.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., hepatitis viral, y las guías de la OMS sobre hepatitis B.'
},
'MIR-2015-M53': {
  clave:'Cistitis hemorrágica en el paciente hematológico, sobre todo tras trasplante de progenitores.',
  exp:'El poliomavirus BK permanece latente en el urotelio y se reactiva con la inmunosupresión profunda, causando cistitis hemorrágica en receptores de trasplante de progenitores hematopoyéticos y nefropatía en el trasplante renal. Es la causa viral más frecuente en este escenario, junto con el adenovirus. La otra causa clásica de cistitis hemorrágica en estos pacientes no es infecciosa, sino la ciclofosfamida.',
  no:{1:'El herpes simple tipo 2 causa lesiones genitales y, rara vez, cistitis; no es la causa habitual en el paciente hematológico.',2:'Los poxvirus producen lesiones cutáneas como el molusco contagioso, sin tropismo urotelial.',3:'El enterovirus 71 se asocia a enfermedad mano-pie-boca y a complicaciones neurológicas.'},
  trampa:'Olvidar que en este contexto la causa puede ser también farmacológica: siempre hay que revisar si el paciente recibió ciclofosfamida.',
  dx:['Cistitis hemorrágica por poliomavirus BK','Cistitis por adenovirus','Cistitis por ciclofosfamida'],
  obj:'Asociar el poliomavirus BK con la cistitis hemorrágica del inmunodeprimido.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Mandell, Principios y Práctica de Enfermedades Infecciosas.'
},
'MIR-2015-M232': {
  clave:'Adenopatías inguinales pequeñas, blandas, móviles e indoloras, sin lesión ni síntoma acompañante.',
  exp:'Las adenopatías inguinales de hasta 1 a 1,5 cm, blandas, móviles e indoloras son un hallazgo normal en adultos sanos: la región inguinal drena la piel de los miembros inferiores y el periné, sometidos a agresiones menores constantes. Sin síntomas, sin lesión cutánea, sin conducta de riesgo y sin adenopatías en otros territorios, no está indicado ningún estudio complementario. La conducta correcta es explicar y observar.',
  no:{0:'La sífilis primaria cursa con chancro indoloro, y no se ha encontrado ninguna lesión en genitales, ano ni periné; además no hay datos de riesgo.',1:'El cáncer de ovario no drena a los ganglios inguinales, sino a los pélvicos y paraaórticos.',3:'La mononucleosis produce adenopatías cervicales, faringitis y síndrome general, ausentes en el caso.'},
  trampa:'La palabra "adenopatía" activa el reflejo de estudiar. Reconocer un ganglio normal y no hacer nada también es una decisión clínica, y evita una cascada de pruebas.',
  dx:['Adenopatías inguinales fisiológicas','Sífilis primaria','Linfoma','Infección de miembros inferiores'],
  obj:'Reconocer las características de un ganglio inguinal normal y evitar el sobrediagnóstico.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., adenopatías y esplenomegalia.'
},
'MIR-2015-M235': {
  clave:'Se pide la afirmación FALSA sobre la tos ferina: ni la enfermedad ni la vacuna dan inmunidad de por vida.',
  exp:'El cuadro es una tos ferina en un lactante demasiado pequeño para estar completamente inmunizado. La inmunidad frente a Bordetella pertussis, tanto la natural como la vacunal, disminuye con los años: por eso se recomiendan dosis de refuerzo y la estrategia de vacunar al entorno del lactante, incluida la embarazada en el tercer trimestre. Afirmar que la inmunidad es permanente es lo incorrecto.',
  no:{0:'Es cierta: se administra combinada con toxoide diftérico y tetánico.',1:'Es cierta: es la estrategia de nido o capullo, vacunar a los convivientes para proteger al lactante que aún no está inmunizado.',3:'Es cierta para la vacuna de células enteras, preparada a partir de bacterias inactivadas; la acelular usa componentes purificados.'},
  trampa:'Se asume que "vacunado es igual a protegido para siempre". En la tos ferina la inmunidad decae, y ese es precisamente el motivo de los brotes en lactantes.',
  dx:['Tos ferina','Bronquiolitis','Neumonía por Chlamydia trachomatis','Cuerpo extraño'],
  obj:'Reconocer la tos ferina en el lactante y entender la pérdida de inmunidad con el tiempo.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed. y las recomendaciones de la OMS sobre vacunación frente a tos ferina.'
},
'MIR-2016-M100': {
  clave:'El rituximab depleciona linfocitos B: el daño esperable es humoral, no fagocítico.',
  exp:'Se pregunta cuál es la prueba MENOS útil. El anticuerpo anti-CD20 elimina linfocitos B y produce hipogammaglobulinemia secundaria, que explica las infecciones respiratorias de repetición. El estudio debe dirigirse al compartimento humoral: concentración de inmunoglobulinas, poblaciones linfocitarias y respuesta a la vacunación con anticuerpos específicos. La función bactericida de los fagocitos evalúa un compartimento que este tratamiento no afecta.',
  no:{0:'Es muy útil: la hipogammaglobulinemia secundaria es la alteración esperada y puede requerir sustitución con inmunoglobulinas.',2:'Es útil: cuantifica la depleción B y descarta linfopenia T asociada a la quimioterapia.',3:'Es útil: la respuesta a la vacuna antineumocócica mide la capacidad funcional de producir anticuerpos, no solo la cantidad basal.'},
  trampa:'Se elige la prueba "más completa" en lugar de razonar qué compartimento inmunitario dañó el tratamiento recibido.',
  dx:['Hipogammaglobulinemia secundaria a rituximab','Inmunodeficiencia común variable','Neutropenia'],
  obj:'Dirigir el estudio de inmunodeficiencia según el mecanismo del fármaco recibido.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., inmunodeficiencias secundarias.'
},
'MIR-2015-M213': {
  clave:'Tríada de artritis, conjuntivitis y uretritis con lesiones psoriasiformes en palmas y plantas, tres semanas tras un contacto de riesgo.',
  exp:'Es una artritis reactiva, antes llamada síndrome de Reiter. Aparece días o semanas después de una infección genitourinaria por Chlamydia trachomatis o de una gastroenteritis, y combina oligoartritis asimétrica, conjuntivitis y uretritis. Las lesiones cutáneas descritas corresponden a la queratodermia blenorrágica en palmas y plantas y a la balanitis circinada del glande, ambas muy características.',
  no:{0:'La primoinfección por VIH da un síndrome mononucleósico con fiebre, faringitis y exantema, pero no esta combinación articular, ocular y genital.',1:'La sífilis secundaria produce exantema palmoplantar, lo que la hace tentadora, pero no cursa con artritis asimétrica ni conjuntivitis, y las lesiones del glande serían distintas.',3:'El eritema multiforme se manifiesta con lesiones en diana y afectación mucosa, sin artritis ni uretritis.'},
  trampa:'El exantema palmoplantar arrastra hacia la sífilis secundaria. La artritis y la conjuntivitis son los datos que la sífilis no explica.',
  dx:['Artritis reactiva','Sífilis secundaria','Psoriasis pustulosa','Artritis gonocócica'],
  obj:'Reconocer la tríada de la artritis reactiva y sus lesiones cutáneas características.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., espondiloartritis.'
},

/* ---------------------- REUMATOLOGÍA ---------------------- */
'MIR-2015-M136': {
  clave:'Se pide la INCORRECTA. Un Gram negativo no descarta artritis séptica: su sensibilidad ronda el 50%.',
  exp:'En la artritis séptica la tinción de Gram es positiva en aproximadamente la mitad de los casos, y menos aún en infecciones por gonococo. Con 40.000 leucocitos por microlitro, 85% de neutrófilos y glucosa baja, el líquido es francamente inflamatorio y obliga a tratar como séptica hasta que el cultivo diga lo contrario. Descartar la infección por un Gram negativo es el error que puede costar la articulación.',
  no:{0:'Es correcta: se cubre empíricamente estafilococo y estreptococo, y se amplía según el contexto, mientras se espera el cultivo.',1:'Es correcta: el drenaje repetido del líquido purulento forma parte del tratamiento y reduce el daño del cartílago.',2:'Es correcta: el antecedente de diarrea dos semanas antes y un cultivo negativo apuntarían a artritis reactiva.'},
  trampa:'El antecedente de diarrea invita a diagnosticar artritis reactiva y relajarse. Con ese recuento celular hay que tratar como séptica primero y reclasificar después.',
  dx:['Artritis séptica','Artritis reactiva','Artritis por microcristales','Artritis gonocócica'],
  obj:'Conocer la sensibilidad limitada del Gram en el líquido sinovial.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., artritis infecciosa.'
},
'MIR-2015-M138': {
  clave:'Lupus con afectación articular y serositis leve, sin compromiso renal ni neurológico.',
  exp:'La actividad lúpica limitada a piel, articulaciones y serosas se trata con antiinflamatorios no esteroideos y antipalúdicos. La hidroxicloroquina debe indicarse a todos los pacientes con lupus, tengan o no manifestaciones graves: reduce brotes, protege frente a daño acumulado y mejora la supervivencia. Los corticoides en dosis bajas pueden añadirse puntualmente, pero no son la primera elección en un cuadro leve.',
  no:{0:'Los corticoides en dosis altas se reservan para manifestaciones graves: nefritis, afectación del sistema nervioso central, citopenias severas.',1:'La combinación de corticoides con micofenolato corresponde a la nefritis lúpica, ausente aquí.',3:'El lupus es una enfermedad crónica que requiere tratamiento; no tratarlo expone a daño orgánico acumulado.'},
  trampa:'Se sobretrata por miedo a la palabra "lupus". La intensidad del tratamiento debe ajustarse al órgano afectado, no al nombre de la enfermedad.',
  dx:['Lupus eritematoso sistémico','Artritis reumatoide','Enfermedad mixta del tejido conectivo'],
  obj:'Ajustar el tratamiento del lupus a la gravedad del compromiso orgánico.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las recomendaciones EULAR para el manejo del lupus eritematoso sistémico.'
},
'MIR-2015-M141': {
  clave:'Dolor lumbar inflamatorio en un joven, con talalgia, rigidez matutina prolongada y diarrea con pérdida de peso.',
  exp:'El dolor lumbar de ritmo inflamatorio —que mejora con el movimiento, empeora con el reposo y cursa con más de 30 minutos de rigidez matutina— en un varón joven orienta a espondiloartritis. La talalgia refleja entesitis, muy característica del grupo. La diarrea con pérdida de peso obliga a descartar enfermedad inflamatoria intestinal, que es una de las espondiloartritis asociadas y cambia por completo el tratamiento.',
  no:{0:'La lumbalgia inespecífica tiene ritmo mecánico: mejora con el reposo y no cursa con rigidez matutina de una hora ni con entesitis.',1:'Un tumor no explica el patrón inflamatorio del dolor ni la talalgia bilateral, y sería excepcional a los 20 años.',3:'La hernia discal produce dolor mecánico y radicular, no rigidez matutina prolongada ni afectación entesítica.'},
  trampa:'Se tratan los dos problemas por separado: la espalda por un lado y la diarrea por otro. La respuesta correcta es justamente verlos como una sola enfermedad.',
  dx:['Espondiloartritis asociada a enfermedad inflamatoria intestinal','Espondilitis anquilosante','Lumbalgia mecánica','Artritis reactiva'],
  obj:'Reconocer el ritmo inflamatorio del dolor lumbar y buscar la enfermedad asociada.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con los criterios ASAS de espondiloartritis y Harrison 21.ª ed.'
},
'MIR-2016-M193': {
  clave:'Dolor lumbar y glúteo alternante de predominio nocturno, dactilitis y reactantes elevados con factor reumatoide negativo.',
  exp:'La inflamación de todo un dedo, o dactilitis, junto con dolor lumbar inflamatorio y factor reumatoide negativo, define una espondiloartritis. Dentro del grupo, la artritis psoriásica es la primera a considerar, por lo que preguntar por psoriasis personal y familiar es obligatorio: puede haber afectación articular con lesiones cutáneas mínimas o ausentes. El HLA-B27 apoya el diagnóstico en el contexto adecuado, aunque ni lo confirma ni lo descarta por sí solo.',
  no:{0:'La gota produce artritis aguda monoarticular, típicamente del primer dedo del pie, no dolor lumbar inflamatorio de meses.',2:'La hernia discal da dolor mecánico y no eleva la proteína C reactiva ni produce dactilitis.',3:'El metotrexato no ha demostrado eficacia sobre la afectación axial de las espondiloartritis; iniciarlo sin diagnóstico es doblemente incorrecto.'},
  trampa:'Se busca la psoriasis en la piel visible. Hay que preguntar por antecedentes familiares y explorar cuero cabelludo, ombligo, pliegue interglúteo y uñas.',
  dx:['Artritis psoriásica','Espondilitis anquilosante','Artritis reactiva','Gota'],
  obj:'Reconocer la dactilitis como signo de espondiloartritis y buscar la psoriasis oculta.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con los criterios CASPAR y las recomendaciones EULAR sobre artritis psoriásica.'
},
'MIR-2015-M174': {
  clave:'Hipertensión que se descontrola en un paciente que toma 1.800 mg diarios de ibuprofeno.',
  exp:'Los antiinflamatorios no esteroideos inhiben la síntesis de prostaglandinas renales, favorecen la retención de sodio y agua y antagonizan el efecto de los inhibidores de la enzima convertidora y de los diuréticos. En un anciano con perindopril y tiazida, el ibuprofeno crónico es la causa más probable de la pérdida de control tensional, y además añade riesgo de deterioro renal y de sangrado digestivo. Retirarlo y sustituirlo por paracetamol corrige la causa en lugar de añadir un fármaco más.',
  no:{0:'Añadir un calcioantagonista trata la cifra sin retirar lo que la eleva, y aumenta la polifarmacia en un paciente de 87 años.',1:'Subir la tiazida en un anciano incrementa el riesgo de hiponatremia y de hipopotasemia, y sigue sin abordar la causa.',3:'El bloqueante alfa es un antihipertensivo de baja prioridad y en el anciano favorece la hipotensión ortostática y las caídas.'},
  trampa:'Ante una presión mal controlada el reflejo es añadir otro antihipertensivo. Antes hay que revisar qué está tomando el paciente que se opone al tratamiento.',
  dx:['Hipertensión arterial resistente por fármacos','Hipertensión esencial mal controlada'],
  obj:'Revisar la medicación concomitante antes de escalar el tratamiento antihipertensivo.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía ESC/ESH de hipertensión arterial y los criterios de prescripción inadecuada en el anciano.'
},
'MIR-2016-M125': {
  clave:'La medida del resultado es el año de vida ajustado por calidad.',
  exp:'Cuando el desenlace de una evaluación económica se expresa en años de vida ajustados por calidad, el análisis es de coste-utilidad. Es un subtipo del análisis coste-efectividad que permite comparar intervenciones de áreas distintas al usar una unidad común que integra cantidad y calidad de vida.',
  no:{0:'La minimización de costes exige haber demostrado previamente que la eficacia de ambas opciones es equivalente, y entonces solo se comparan precios.',1:'El coste-efectividad expresa el resultado en unidades clínicas naturales: años de vida ganados, milímetros de mercurio, episodios evitados.',2:'El coste-beneficio traduce los resultados de salud a unidades monetarias.'},
  trampa:'Coste-efectividad y coste-utilidad se confunden constantemente. La palabra que decide es AVAC: si aparece, es coste-utilidad.',
  dx:[],
  obj:'Clasificar los análisis farmacoeconómicos por la unidad en que se mide el resultado.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Drummond, Methods for the Economic Evaluation of Health Care Programmes.'
},
'MIR-2015-M144': {
  clave:'ANCA positivo sin ninguna manifestación clínica ni analítica de actividad.',
  exp:'La reaparición del ANCA anti-proteinasa 3 en un paciente asintomático se asocia a mayor riesgo de recaída, pero no la define. La conducta recomendada es intensificar la vigilancia clínica y analítica, no reiniciar inmunosupresión: tratar solo por el título expondría al paciente a toxicidad sin beneficio demostrado. El tratamiento se inicia cuando aparece actividad clínica.',
  no:{0:'Los corticoides sin actividad de enfermedad suponen toxicidad garantizada y beneficio no demostrado.',1:'La ciclofosfamida se reserva para inducción de formas graves con compromiso orgánico, situación muy alejada de este paciente asintomático.',2:'El micofenolato se emplea en mantenimiento tras una inducción, no para tratar un cambio serológico aislado.'},
  trampa:'Tratar el análisis en lugar del paciente. La serología orienta el riesgo; la decisión terapéutica la marca la clínica.',
  dx:['Granulomatosis con poliangeítis en remisión','Recaída de vasculitis ANCA'],
  obj:'Diferenciar recaída serológica de recaída clínica en las vasculitis ANCA.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las recomendaciones EULAR/ERA-EDTA sobre vasculitis asociadas a ANCA.'
},

/* ---------------------- ONCOLOGÍA ---------------------- */
'MIR-2015-M125': {
  clave:'Acropaquias de aparición reciente en un exfumador con EPOC.',
  exp:'La EPOC por sí sola no produce acropaquias. Cuando aparecen en un paciente con este perfil hay que descartar carcinoma broncogénico, del que son un signo paraneoplásico clásico, en ocasiones formando parte de la osteoartropatía hipertrófica. Su aparición reciente en un exfumador obliga a estudio de imagen torácica sin demora.',
  no:{1:'Las bronquiectasias sí producen acropaquias, pero cursan con broncorrea crónica abundante e infecciones repetidas, no descritas aquí.',2:'La fibrosis pulmonar también las produce, pero daría disnea progresiva y crepitantes secos, no el cuadro de un EPOC estable en revisión.',3:'La cardiopatía cianótica se manifiesta desde edades tempranas y no aparece de novo a esta edad.'},
  trampa:'Atribuir cualquier hallazgo nuevo a la enfermedad de base ya conocida. Un signo que no encaja con la EPOC obliga a buscar otra causa.',
  dx:['Carcinoma broncogénico','Bronquiectasias','Fibrosis pulmonar','Osteoartropatía hipertrófica'],
  obj:'Reconocer las acropaquias de aparición reciente como bandera roja de neoplasia pulmonar.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., síndromes paraneoplásicos y neoplasias de pulmón.'
},
'MIR-2015-M127': {
  clave:'Disfonía por parálisis recurrencial izquierda con ocupación de la ventana aortopulmonar.',
  exp:'El nervio laríngeo recurrente izquierdo rodea el arco aórtico y asciende por la ventana aortopulmonar. Una masa en esa localización lo comprime y produce disfonía por parálisis de la cuerda vocal izquierda. Asociado a síndrome constitucional y a una condensación en lóbulo superior izquierdo, el diagnóstico es neoplasia pulmonar con extensión mediastínica, aunque la broncoscopia no vea tumor endobronquial.',
  no:{1:'La sarcoidosis produce adenopatías hiliares bilaterales simétricas y rara vez parálisis recurrencial.',2:'La silicosis requiere exposición ocupacional y da un patrón nodular con adenopatías en cáscara de huevo.',3:'La tuberculosis podría dar condensación en lóbulo superior, pero no explica la parálisis recurrencial ni la ocupación de la ventana aortopulmonar.'},
  trampa:'Una broncoscopia sin tumor visible tranquiliza. El tumor puede ser extrabronquial y comprimir desde fuera: la anatomía explica el síntoma.',
  dx:['Carcinoma broncogénico','Linfoma mediastínico','Sarcoidosis','Tuberculosis'],
  obj:'Relacionar la disfonía con el trayecto del nervio laríngeo recurrente izquierdo.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., neoplasias de pulmón, y Snell, Anatomía Clínica.'
},
'MIR-2015-M120': {
  clave:'Masa dura de la pared torácica anterior adherida a planos profundos.',
  exp:'Los tumores primarios de la pared torácica anterior, en la unión condrocostal, son con más frecuencia de estirpe condroide, y el condrosarcoma es el maligno más habitual en esa localización. Una masa dura, de crecimiento progresivo y fija a planos profundos, obliga a estudio de imagen y biopsia con planificación quirúrgica, no a observación.',
  no:{0:'La ausencia de dolor no orienta a benignidad: muchos tumores malignos de pared torácica son indoloros al inicio.',2:'La biopsia es necesaria; lo que exige cuidado es su planificación, de modo que el trayecto pueda resecarse después en bloque.',3:'La actitud expectante ante una masa dura, fija y creciente retrasa el diagnóstico de un tumor potencialmente resecable.'},
  trampa:'Se usa la ausencia de dolor como criterio de benignidad. En oncología el dolor es un signo tardío, no un criterio diagnóstico.',
  dx:['Condrosarcoma de pared torácica','Condroma','Metástasis costal','Tumor desmoide'],
  obj:'Reconocer el origen condroide de los tumores de pared torácica anterior.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Schwartz, Principios de Cirugía, 11.ª ed., pared torácica.'
},
'MIR-2015-M178': {
  clave:'Dolor lancinante con parestesias que no responde a los opioides de rescate: es dolor neuropático.',
  exp:'El dolor neuropático responde mal a los opioides en monoterapia y requiere fármacos coadyuvantes: antidepresivos tricíclicos como la amitriptilina o anticonvulsivantes como la gabapentina y la pregabalina. En el paciente oncológico se añade dexametasona, que reduce el edema perineural y el componente inflamatorio. Ajustar además la dosis de opioide es correcto porque el dolor no está controlado.',
  no:{0:'La imagen puede ser razonable para descartar compresión, pero por sí sola no es "el manejo": el paciente necesita tratamiento del dolor ahora.',1:'Los procedimientos neurolíticos se reservan para el fracaso del tratamiento farmacológico escalonado, que aquí ni siquiera se ha intentado.',2:'Reducir la morfina en un paciente con dolor no controlado empeora el cuadro; el opioide es insuficiente, no perjudicial.'},
  trampa:'Se sube el opioide una y otra vez sin reconocer el componente neuropático. El descriptor "lancinante" con parestesias es la señal de que hace falta otra familia de fármacos.',
  dx:['Dolor neuropático oncológico','Compresión radicular','Plexopatía neoplásica'],
  obj:'Identificar el dolor neuropático y añadir coadyuvantes al opioide.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías de la OMS sobre tratamiento del dolor oncológico y Harrison 21.ª ed.'
},
'MIR-2015-M177': {
  clave:'Metástasis hepática única, resecable, sin enfermedad extrahepática en tomografía ni PET.',
  exp:'La metástasis hepática aislada de cáncer colorrectal no es sinónimo de enfermedad incurable. Si es resecable con margen y no hay enfermedad a distancia, la cirugía ofrece supervivencias prolongadas e incluso curación en una proporción relevante de pacientes, habitualmente combinada con quimioterapia perioperatoria. Por eso el paso correcto es la valoración por cirugía hepática.',
  no:{0:'La quimioterapia paliativa se reserva para la enfermedad no resecable; aplicarla aquí renunciaría a una opción con intención curativa.',1:'La monoquimioterapia es aún menos apropiada en un paciente con buen estado general y lesión resecable.',3:'La radioterapia hepática no es el tratamiento estándar de una metástasis única resecable.'},
  trampa:'La palabra "metástasis" hace pensar automáticamente en tratamiento paliativo. En el cáncer colorrectal la metástasis hepática resecable se opera con intención curativa.',
  dx:['Metástasis hepática de cáncer colorrectal','Recidiva local','Segundo primario hepático'],
  obj:'Plantear cirugía con intención curativa en la metástasis hepática colorrectal resecable.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías ESMO sobre cáncer colorrectal metastásico.'
},
'MIR-2015-M180': {
  clave:'La paciente es competente: la titularidad de la información es suya, no de sus hijos.',
  exp:'Ante un conflicto entre la familia y el derecho del paciente, la salida correcta no es elegir bando sino devolver la decisión a quien le corresponde. Preguntar a la paciente cuánta información desea recibir y a quién quiere que se informe respeta su autonomía sin imponerle un diagnóstico que quizá no quiera conocer. El derecho a no saber también forma parte de la autonomía, pero solo el paciente puede ejercerlo.',
  no:{1:'Ocultar el diagnóstico a una paciente competente por decisión de terceros vulnera su autonomía y su derecho a la información.',2:'Es cierto que existe el deber de informar, pero enfrentarse a los hijos sin haber consultado antes a la paciente se salta el paso esencial.',3:'Organizar la comunicación con los hijos presentes presupone que la paciente quiere que estén, sin habérselo preguntado.'},
  trampa:'La opción de "explicar a los hijos que estamos obligados" suena valiente y correcta, pero sigue decidiendo por la paciente. La respuesta es preguntarle a ella.',
  dx:[],
  obj:'Resolver el conflicto de información respetando la autonomía y el derecho a no saber.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Beauchamp y Childress, Principios de Ética Biomédica.'
},
'MIR-2015-M231': {
  clave:'Déficit neurológico de 45 minutos de evolución: la ventana está abierta y la edad no la cierra.',
  exp:'La edad avanzada no es por sí sola contraindicación de trombólisis. En un paciente de 88 años previamente autónomo, con ictus de inicio claro hace 45 minutos, la conducta es realizar tomografía craneal urgente y, descartada hemorragia y sin otras contraindicaciones, trombolizar. El antecedente de fibrilación auricular antiagregada, no anticoagulada, refuerza el origen cardioembólico.',
  no:{1:'Anticoagular en la fase aguda de un ictus isquémico aumenta el riesgo de transformación hemorrágica y no está indicado en las primeras horas.',2:'La actitud sí difiere radicalmente según sea isquémico o hemorrágico: esa es precisamente la razón de hacer la tomografía.',3:'Nunca se puede prescindir de la neuroimagen: sin ella no se distingue isquemia de hemorragia.'},
  trampa:'La edad se usa como argumento para no tratar. Lo que decide es la situación funcional previa y la ventana temporal, no el número de años.',
  dx:['Ictus isquémico cardioembólico','Hemorragia intracerebral','Crisis con parálisis de Todd'],
  obj:'No excluir la trombólisis por la edad cuando la situación funcional previa es buena.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía AHA/ASA de ictus isquémico agudo.'
},

/* ---------------------- CIRUGÍA ---------------------- */
'MIR-2015-M173': {
  clave:'Quemadura eléctrica circunferencial con mano en flexión, pálida y sin pulsos.',
  exp:'La escara rígida de una quemadura profunda actúa como un torniquete: al no ceder, la presión bajo ella aumenta y compromete la perfusión distal. La escarotomía descompresiva, que consiste en incidir la escara hasta liberar la constricción, es la medida urgente que restaura el flujo. En las quemaduras eléctricas de alto voltaje el daño muscular profundo es habitual y puede requerir además fasciotomía.',
  no:{0:'El bloqueo axilar controla el dolor pero no libera la constricción ni restaura la perfusión.',2:'Monitorizar la presión intracompartimental documenta el problema, pero con ausencia de pulsos y palidez ya hay indicación clínica de descomprimir: medir retrasa.',3:'La escarectomía consiste en extirpar el tejido quemado y se realiza más adelante, en quirófano; no es la maniobra urgente para restaurar el flujo.'},
  trampa:'Se confunde escarotomía con escarectomía. Una incide para liberar y es urgente; la otra extirpa y es diferida.',
  dx:['Síndrome compartimental por quemadura','Quemadura eléctrica de alto voltaje','Rabdomiólisis'],
  obj:'Indicar la escarotomía urgente ante compromiso vascular por escara constrictiva.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con ATLS, lesiones térmicas, y Schwartz 11.ª ed., quemaduras.'
},
'MIR-2015-M207': {
  clave:'Diplopía al mirar hacia arriba con limitación de la elevación tras traumatismo orbitario.',
  exp:'El suelo de la órbita es una pared muy delgada que se fractura con facilidad ante un impacto directo, en la llamada fractura por estallido. El músculo recto inferior o la grasa periorbitaria quedan atrapados en el trazo, lo que impide la elevación del globo y produce diplopía en la mirada superior. Se completa con tomografía y puede requerir liberación quirúrgica.',
  no:{1:'La fractura del arco cigomático produce hundimiento malar y limitación de la apertura bucal, no diplopía vertical.',2:'Si el atrapamiento fuera del recto superior, la limitación sería para mirar hacia abajo, no hacia arriba.',3:'La fractura dentoalveolar afecta al maxilar y a los dientes, sin repercusión sobre la motilidad ocular.'},
  trampa:'Se razona que si falla la mirada superior el músculo lesionado es el elevador. Es al revés: el recto inferior atrapado tira hacia abajo e impide subir.',
  dx:['Fractura por estallido del suelo orbitario','Fractura del arco cigomático','Hematoma retrobulbar'],
  obj:'Deducir el músculo atrapado a partir de la dirección de la limitación ocular.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Schwartz 11.ª ed., traumatismos maxilofaciales.'
},
'MIR-2015-M126': {
  clave:'Se pide el elemento que NO aporta riesgo. La osteoporosis no es factor de riesgo tromboembólico.',
  exp:'La escala de Wells para tromboembolia pulmonar valora, entre otros, el cáncer activo, la inmovilización o cirugía reciente y los signos clínicos de trombosis venosa profunda. La osteoporosis es una enfermedad ósea metabólica: predispone a fracturas, y son la fractura y la inmovilización posterior las que generan riesgo trombótico, no la osteoporosis en sí.',
  no:{0:'El cáncer activo o tratado en los seis meses previos es un factor de riesgo reconocido y puntúa en la escala.',2:'La inmovilización de más de tres días o la cirugía reciente puntúan directamente.',3:'El edema unilateral con dolor a la palpación de la pantorrilla es el signo clínico de trombosis venosa profunda, el ítem de mayor peso.'},
  trampa:'Se confunde una enfermedad que aumenta el riesgo indirectamente, a través de la fractura, con un factor de riesgo directo de la escala.',
  dx:['Tromboembolia pulmonar','Trombosis venosa profunda','Neumonía'],
  obj:'Conocer los ítems de la escala de Wells y distinguir riesgo directo de indirecto.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía ESC de tromboembolia pulmonar aguda.'
},
'MIR-2015-M140': {
  clave:'Coxartrosis con dolor intermitente pocos días al mes y sin limitación funcional relevante.',
  exp:'El tratamiento inicial de la artrosis de cadera combina analgesia simple, ejercicio, control del peso y educación sobre el curso variable de la enfermedad. La indicación de prótesis no la marca la radiografía, sino el dolor incapacitante y la pérdida de función que no responden al tratamiento conservador. Este paciente tiene síntomas leves e intermitentes.',
  no:{0:'La imagen no indica cirugía por sí sola: hay radiografías muy alteradas en pacientes con pocos síntomas y viceversa.',1:'Ningún analgésico ha demostrado detener la progresión de la artrosis, y los opioides son especialmente desaconsejables en dolor crónico no oncológico.',3:'La resonancia no aporta información que cambie la conducta cuando la radiografía ya muestra artrosis establecida.'},
  trampa:'Operar la imagen en lugar del paciente. La discordancia entre hallazgos radiológicos y síntomas es la regla en artrosis.',
  dx:['Coxartrosis','Necrosis avascular de cabeza femoral','Bursitis trocantérea','Dolor irradiado lumbar'],
  obj:'Basar la indicación quirúrgica en la función y el dolor, no en la radiografía.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las recomendaciones OARSI y EULAR sobre artrosis.'
},
'MIR-2015-M170': {
  clave:'Capacidad funcional conservada: hace una hora diaria de ejercicio sin síntomas.',
  exp:'La evaluación preoperatoria se decide por el riesgo del procedimiento y la capacidad funcional del paciente. Una colecistectomía laparoscópica es cirugía de riesgo bajo o intermedio, y un paciente que camina y nada una hora al día supera holgadamente los 4 equivalentes metabólicos. En esa situación no está indicada ninguna prueba de estrés: basta el electrocardiograma basal. Pedir pruebas adicionales solo genera hallazgos incidentales, retrasos y más pruebas.',
  no:{0:'La prueba de esfuerzo se indica cuando la capacidad funcional es mala o desconocida y la cirugía es de riesgo elevado.',1:'La ecocardiografía se reserva para sospecha de valvulopatía o disfunción ventricular, ausentes aquí: no hay soplos ni síntomas.',2:'La gammagrafía con talio y dipiridamol es una prueba de estrés farmacológico para pacientes que no pueden hacer ejercicio, justo lo contrario de este caso.'},
  trampa:'La edad de 80 años empuja a pedir pruebas. La capacidad funcional pesa más que la edad, y este paciente la tiene excelente.',
  dx:['Riesgo cardiovascular perioperatorio bajo'],
  obj:'Usar la capacidad funcional para decidir qué pruebas preoperatorias son necesarias.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías ACC/AHA y ESC de evaluación cardiovascular preoperatoria.'
},
'MIR-2015-M90': {
  clave:'Carcinoma papilar de 2,3 cm, variante de células altas, con invasión capsular y tiroglobulina de 14 tras la cirugía.',
  exp:'La variante de células altas es una forma agresiva del carcinoma papilar. Con un tumor mayor de 2 cm, invasión capsular y tiroglobulina posquirúrgica detectable, el paciente entra en categoría de riesgo intermedio-alto y se indica ablación con yodo radiactivo. Para que el yodo sea captado por el tejido remanente hace falta TSH elevada, de modo que la levotiroxina supresora se retrasa hasta después de la dosis ablativa.',
  no:{0:'No hay evidencia de afectación ganglionar laterocervical que justifique reintervenir.',1:'Iniciar levotiroxina supresora ahora frenaría la TSH e impediría la captación del yodo radiactivo: es exactamente lo que no debe hacerse antes de la ablación.',2:'El PET-TC tiene escaso rendimiento en el carcinoma diferenciado de tiroides, que capta yodo; se reserva para tumores desdiferenciados que no lo captan.'},
  trampa:'Se inicia la levotiroxina por reflejo tras una tiroidectomía. En este escenario el orden importa: primero el yodo, después la supresión.',
  dx:['Carcinoma papilar de tiroides variante células altas','Carcinoma folicular','Carcinoma medular'],
  obj:'Ordenar correctamente ablación con yodo y supresión con levotiroxina.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías de la American Thyroid Association sobre cáncer diferenciado de tiroides.'
},
'MIR-2015-M93': {
  clave:'Necrosis cutánea que aparece justo al iniciar el anticoagulante oral.',
  exp:'La proteína C es un anticoagulante natural dependiente de vitamina K y tiene una vida media muy corta. Al iniciar acenocumarol o warfarina, su concentración cae antes que la de los factores procoagulantes II, IX y X, lo que genera un estado transitoriamente protrombótico. En pacientes con déficit previo de proteína C esa caída provoca trombosis de la microcirculación dérmica y necrosis cutánea. Se previene solapando heparina durante los primeros días.',
  no:{0:'El déficit de antitrombina produce trombosis y resistencia a la heparina, no necrosis cutánea al iniciar cumarínicos.',1:'El factor V Leiden es la trombofilia hereditaria más frecuente, pero no se asocia a este cuadro concreto.',2:'La hiperhomocisteinemia aumenta el riesgo trombótico global sin relación con el inicio del anticoagulante oral.'},
  trampa:'Se piensa en el fármaco como causante de una reacción cutánea alérgica. El mecanismo es trombótico y depende de una trombofilia previa.',
  dx:['Necrosis cutánea por cumarínicos','Déficit de proteína C','Púrpura fulminante','Reacción cutánea medicamentosa'],
  obj:'Explicar la necrosis cutánea por cumarínicos desde la vida media de la proteína C.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., trastornos de la coagulación.'
},

/* ---------------------- GINECOLOGÍA ---------------------- */
'MIR-2015-M151': {
  clave:'Desarrollo mamario aislado, sin vello, con útero pequeño y edad ósea acorde a la cronológica.',
  exp:'Es una telarquia prematura aislada: desarrollo mamario sin ningún otro signo de activación del eje. Los datos que lo confirman son la ausencia de vello púbico o axilar, el útero prepuberal y, sobre todo, la edad ósea no adelantada. Es una condición benigna y con frecuencia autolimitada; la conducta es vigilancia periódica para detectar si evoluciona hacia pubertad precoz verdadera.',
  no:{1:'La biopsia mamaria en una niña puede lesionar el botón mamario y comprometer el desarrollo posterior: está contraindicada.',2:'La mamografía no tiene ninguna indicación en la infancia.',3:'Los análogos de GnRH tratan la pubertad precoz central, que exige activación del eje con edad ósea adelantada y crecimiento acelerado, ausentes aquí.'},
  trampa:'La palabra "Tanner IV" impresiona y empuja a intervenir. Los datos que mandan son la edad ósea normal y el útero prepuberal: el eje no está activado.',
  dx:['Telarquia prematura aislada','Pubertad precoz central','Tumor productor de estrógenos','Exposición exógena a estrógenos'],
  obj:'Diferenciar telarquia aislada de pubertad precoz verdadera por la edad ósea y el útero.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., trastornos de la pubertad.'
},
'MIR-2015-M159': {
  clave:'Sangrado genital en una mujer posmenopáusica: hay que descartar carcinoma de endometrio.',
  exp:'Toda metrorragia posmenopáusica es cáncer de endometrio hasta demostrar lo contrario, y en esta paciente la obesidad añade riesgo por la producción periférica de estrógenos en el tejido adiposo. El estudio se dirige al endometrio: ecografía transvaginal para medir la línea endometrial y biopsia endometrial, que es la prueba que da el diagnóstico histológico.',
  no:{0:'Prescribir progesterona sin haber descartado malignidad enmascara el sangrado y retrasa el diagnóstico.',2:'La citología cervical aportada es normal y el problema está en el endometrio, no en el cérvix; las biopsias al azar de cérvix no tienen sentido.',3:'El perfil hormonal no aporta nada en una mujer claramente posmenopáusica con sangrado.'},
  trampa:'La citología normal tranquiliza. La citología explora el cérvix, no el endometrio: no descarta lo que hay que descartar.',
  dx:['Carcinoma de endometrio','Hiperplasia endometrial','Pólipo endometrial','Atrofia endometrial'],
  obj:'Dirigir el estudio al endometrio ante toda metrorragia posmenopáusica.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con los boletines de práctica del ACOG y Williams Ginecología, 4.ª ed.'
},
'MIR-2015-M160': {
  clave:'Citología con lesión escamosa intraepitelial de alto grado: la citología cribe, la colposcopia diagnostica.',
  exp:'La citología es una prueba de cribado, no de diagnóstico. Una lesión de alto grado obliga a colposcopia con biopsia dirigida de las áreas sospechosas, que es lo que establece el diagnóstico histológico y el grado real de la lesión. De ese resultado depende el tratamiento, que suele ser una escisión de la zona de transformación.',
  no:{0:'Repetir la citología en un mes retrasa el diagnóstico de una lesión que ya sabemos de alto grado y no aporta información nueva.',2:'La histerectomía es un tratamiento desproporcionado antes de conocer la histología, y en una mujer de 45 años elimina opciones conservadoras.',3:'El legrado fraccionado estudia el endometrio, no el cérvix: es la prueba equivocada para esta lesión.'},
  trampa:'Se salta de la citología al tratamiento definitivo sin la biopsia intermedia. Nunca se trata un cáncer de cérvix sobre la base de una citología.',
  dx:['Lesión intraepitelial de alto grado','Carcinoma in situ','Carcinoma invasor de cérvix'],
  obj:'Encadenar correctamente cribado, diagnóstico y tratamiento en la patología cervical.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías ASCCP y la estrategia de la OMS para eliminar el cáncer cervicouterino.'
},
'MIR-2015-M31': {
  clave:'Tejidos de las tres hojas embrionarias con elementos neuroectodérmicos inmaduros y embrionarios.',
  exp:'La presencia de tejido inmaduro, sobre todo neuroectodérmico embrionario, es lo que define al teratoma inmaduro y lo separa del teratoma quístico maduro. Es un tumor maligno de células germinales, propio de mujeres jóvenes, y su grado depende precisamente de la cantidad de tejido neuroepitelial inmaduro presente.',
  no:{0:'El teratocarcinoma combina teratoma con carcinoma embrionario, componente no descrito en la pieza.',2:'El teratoma quístico maduro, o quiste dermoide, contiene solo tejidos maduros y bien diferenciados: dientes, pelo, piel. Aquí hay elementos embrionarios.',3:'El disgerminoma está formado por células germinales indiferenciadas uniformes, sin diferenciación hacia tejidos de las tres hojas.'},
  trampa:'Los dientes y el pelo hacen pensar de inmediato en quiste dermoide. La palabra que cambia el diagnóstico, y el pronóstico, es "inmaduros".',
  dx:['Teratoma inmaduro','Teratoma quístico maduro','Disgerminoma','Tumor del seno endodérmico'],
  obj:'Distinguir teratoma maduro de inmaduro por la presencia de tejido embrionario.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Robbins, Patología Estructural y Funcional, y Williams Ginecología, 4.ª ed.'
},
'MIR-2015-M224': {
  clave:'Años de síntomas físicos múltiples en varios aparatos, con estudios repetidamente normales.',
  exp:'El trastorno de somatización, hoy denominado trastorno de síntomas somáticos en el DSM-5-TR, se caracteriza por múltiples síntomas físicos persistentes en distintos sistemas, acompañados de pensamientos, emociones y conductas desproporcionadas respecto a ellos, sin enfermedad médica que los explique. Lo distintivo son la multiplicidad de los síntomas y la larga evolución.',
  no:{0:'El trastorno conversivo cursa con déficit neurológico concreto —parálisis, ceguera, crisis no epilépticas— incompatible con la exploración, no con síntomas múltiples y difusos.',1:'En la hipocondría el foco es el miedo a padecer una enfermedad grave, más que los síntomas en sí.',3:'El trastorno disociativo afecta a la memoria, la identidad o la conciencia, no al cuerpo con síntomas físicos múltiples.'},
  trampa:'Se etiqueta como "paciente que exagera". Los síntomas son reales para quien los sufre y el trastorno tiene criterios definidos y tratamiento.',
  dx:['Trastorno de síntomas somáticos','Trastorno conversivo','Hipocondría','Trastorno facticio'],
  obj:'Diferenciar los trastornos somatomorfos por su patrón de síntomas.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR, trastornos de síntomas somáticos.'
},
'MIR-2015-M190': {
  clave:'El límite inferior del intervalo de confianza, −0,15, no cruza el margen de no inferioridad de −0,18.',
  exp:'En un ensayo de no inferioridad se comprueba si el intervalo de confianza del efecto queda por encima del margen prefijado. Aquí el margen es −0,18 y el límite inferior del intervalo es −0,15: todo el intervalo está por encima del margen, de modo que se demuestra la no inferioridad. En cambio, como el intervalo incluye el cero, no puede afirmarse superioridad, aunque la diferencia puntual sea favorable.',
  no:{1:'El ensayo se diseñó para probar la no inferioridad del forbuterol frente a serbuterol, no al revés; la conclusión no es reversible.',2:'No puede afirmarse superioridad porque el intervalo de confianza incluye el cero: la diferencia no es estadísticamente significativa.',3:'Sí es concluyente: el intervalo queda íntegramente por encima del margen de no inferioridad.'},
  trampa:'Mirar la diferencia puntual de +0,26 y concluir que es superior. Lo que decide siempre es dónde cae el intervalo de confianza, no el valor central.',
  dx:[],
  obj:'Interpretar un ensayo de no inferioridad usando el intervalo de confianza y el margen.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la declaración CONSORT para ensayos de no inferioridad y equivalencia.'
}

});
