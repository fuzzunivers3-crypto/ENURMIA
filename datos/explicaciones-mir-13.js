/* ============================================================
   EXPLICACIONES — lote 13  (55 casos clínicos)
   Años 2018 a 2020. Todas las preguntas de estos años tienen
   4 opciones, así que cada bloque no:{} lleva 3 distractores.
   Las 55 respuestas oficiales verificadas una a una y correctas.
   Muchas entradas reasignan ademas especialidad y tema.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ==================== EPIDEMIOLOGÍA Y BIOESTADÍSTICA ==================== */
'MIR-2018-M130': {
  esp:'Epidemiología', tema:'Pruebas diagnósticas', sub:'Sesgo de verificación',
  clave:'Si solo se confirma con el patrón oro a los que dan positivo, el sesgo es de VERIFICACIÓN o de trabajo diagnóstico.',
  exp:'El sesgo de verificación aparece cuando la decisión de aplicar la *prueba de referencia* depende del resultado de la prueba que se está evaluando. Al confirmar más a los positivos que a los negativos, los *falsos negativos quedan sin detectar*, porque a esos pacientes nunca se les hizo el patrón oro; el resultado es una *sensibilidad artificialmente alta* y una especificidad habitualmente subestimada. Es un problema de *validez interna* muy frecuente en los estudios retrospectivos hechos a partir de historias clínicas, precisamente porque en la práctica real nadie somete a una coronariografía o a una biopsia a quien dio negativo en el cribado. La forma de evitarlo es diseñar el estudio de manera *prospectiva*, aplicando el patrón oro a *todos* los participantes con independencia del resultado de la prueba en evaluación, o bien recurrir a métodos estadísticos de corrección cuando eso no es posible.',
  no:{0:'El sesgo de atrición se debe a las pérdidas de seguimiento, y afecta sobre todo a estudios longitudinales.',1:'El sesgo de Berkson es un sesgo de selección propio de los estudios hechos solo con pacientes hospitalizados.',2:'La clasificación incorrecta diferencial se refiere a errores de medida distintos entre grupos, no a decidir a quién se le aplica el patrón oro.'},
  trampa:'Se confunde con un problema de medición. Aquí el error no está en cómo se mide, sino en A QUIÉN se decide medir.',
  dx:[],
  obj:'Identificar el sesgo de verificación en la evaluación de pruebas diagnósticas.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Sackett, Medicina Basada en la Evidencia.'
},
'MIR-2018-M131': {
  esp:'Epidemiología', tema:'Pruebas diagnósticas', sub:'Valores predictivos',
  clave:'De 214 positivos en ELISA, 16 eran falsos: VPP igual a 198 entre 214, es decir 92,5%.',
  exp:'Conviene reconstruir la tabla completa antes de responder. Hubo *214 positivos* en el ELISA y en *16* se descartó después la infección, de modo que hay *198 verdaderos positivos* y *16 falsos positivos*; el valor predictivo positivo es 198 entre 214, o sea *92,5%*. Por el otro lado, de los 786 negativos hubo *2 falsos negativos*, luego 784 verdaderos negativos: la sensibilidad es 198 entre 200, es decir 99%, y la especificidad 784 entre 800, un 98%. De paso se desmontan los otros enunciados. La *sensibilidad y la especificidad son propiedades de la prueba* y no cambian con la prevalencia; lo que sí depende de ella son los *valores predictivos*, y por eso un VPP calculado en una población de reclusos, con prevalencia alta, no puede trasladarse a la población general. Y respecto a la última afirmación, cuando no diagnosticar puede ser fatal lo que hace falta es una prueba muy *sensible*, que apenas deje escapar enfermos, no muy específica.',
  no:{0:'La sensibilidad NO depende de la prevalencia: es una característica intrínseca de la prueba.',2:'La especificidad es 784 entre 800, es decir un 98%, no un 90%.',3:'Cuando no diagnosticar es fatal se necesita una prueba muy SENSIBLE; la especificidad alta sirve para confirmar, no para descartar.'},
  trampa:'Se calcula el VPP olvidando restar los falsos positivos, o se confunde con la sensibilidad. Conviene dibujar siempre la tabla de dos por dos completa.',
  dx:[],
  obj:'Calcular valores predictivos y distinguirlos de sensibilidad y especificidad.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Sackett, Medicina Basada en la Evidencia.'
},
'MIR-2019-M30': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Estudio de cohortes',
  clave:'Clasificar por EXPOSICIÓN y seguir en el tiempo para contar casos nuevos: estudio de cohortes.',
  exp:'La estructura es la de una cohorte de manual: se parte de un grupo de sujetos, se les clasifica según *tomen o no aspirina* —esa es la exposición— y se les *sigue cinco años* para contar los casos *nuevos* de hipertensión, es decir, la incidencia en cada grupo. Como el investigador no asigna el fármaco sino que se limita a registrar quién lo toma, el estudio es *observacional*, no un ensayo; y lo que permite calcular es el *riesgo relativo* y el riesgo atribuible, que son las medidas propias de las cohortes. Merece la pena fijarse en que el hecho de que la exposición sea un fármaco no convierte al estudio en ensayo clínico: lo que define al ensayo es la *asignación deliberada* de la intervención por parte del investigador, habitualmente de forma aleatoria. Sin asignación no hay experimento, por mucho que se estudie un medicamento.',
  no:{0:'No es un ensayo: nadie asigna quién toma aspirina, solo se observa.',1:'El estudio ecológico usa datos agregados de poblaciones; aquí el dato es individual y hay seguimiento.',2:'En un caso-control los casos serían los HIPERTENSOS, no los que toman aspirina; los grupos se definen por la enfermedad, no por la exposición.'},
  trampa:'Se responde ensayo clínico porque aparece un fármaco. El diseño lo define quién decide la exposición, no qué se estudia.',
  dx:[],
  obj:'Reconocer el estudio de cohortes y diferenciarlo del ensayo clínico.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Hernández-Aguado, Manual de Epidemiología y Salud Pública.'
},
'MIR-2020-M48': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Estudio de cohortes',
  clave:'Se mide la adherencia a la dieta al inicio y se sigue cinco años contando infartos: cohorte, no transversal.',
  exp:'El diseño repite el esquema clásico: los sujetos se clasifican según su *grado de adherencia a la dieta mediterránea*, que es la exposición, y después se les *sigue durante cinco años* para identificar los casos nuevos de infarto. Eso es una cohorte y permite calcular *incidencia* y riesgo relativo. La opción que más engaña es la que llama transversal al estudio porque la exposición se mide en un momento concreto. Es un razonamiento incorrecto: en *todas* las cohortes la exposición se mide en el momento basal, y lo que define el diseño no es cuándo se mide la exposición sino que exista *seguimiento posterior* para registrar la aparición de la enfermedad. Un transversal se agotaría en esa primera medición, valorando dieta e infarto a la vez y sin poder establecer qué vino antes. Tampoco es un ensayo: nadie asigna la dieta, solo se observa quién la sigue.',
  no:{0:'La utilidad clínica de un estudio no determina su diseño; sigue siendo observacional porque nadie asigna la dieta.',2:'El ecológico trabaja con datos agregados de poblaciones, no con el seguimiento de individuos.',3:'Que la exposición se mida al inicio es propio de TODA cohorte; lo transversal exigiría no tener seguimiento.'},
  trampa:'Se responde transversal porque la exposición se mide una sola vez. El seguimiento posterior es lo que convierte el estudio en cohorte.',
  dx:[],
  obj:'Distinguir cohorte de estudio transversal por la existencia de seguimiento.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Fletcher, Epidemiología Clínica, 5.ª ed.'
},
'MIR-2020-M52': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Número necesario a tratar',
  clave:'RAR igual a 5,2% menos 2,2%, o sea 3%. El NNT es su inverso: 100 entre 3, es decir 33,3.',
  exp:'El cálculo tiene dos pasos y ambos son sencillos si no se confunden las escalas. Primero la *reducción absoluta del riesgo*: se resta el riesgo con tratamiento del riesgo sin él, 5,2% menos 2,2%, lo que da un *3%*, o expresado en proporción, 0,03. Después el *número necesario a tratar*, que es simplemente el inverso de esa cifra: 1 dividido entre 0,03, es decir *33,3*. La interpretación es directa y muy útil para explicárselo al paciente: hay que anticoagular a unas 33 personas como ella durante el periodo del estudio para evitar un ictus. Conviene además ponerlo en contexto: el NNT nunca se lee solo, sino frente al *NNH*, el número necesario para dañar, que en la anticoagulación viene dado por el riesgo de hemorragia mayor. Cuando el NNT es claramente menor que el NNH, como aquí, el balance favorece tratar, y por eso una paciente de 86 años con CHADS2 de 3 tiene indicación de anticoagulación pese a su edad.',
  no:{0:'3 es la reducción absoluta expresada en porcentaje, no el número de pacientes a tratar.',1:'19,2 no corresponde a ninguna de las operaciones posibles con estos datos.',3:'49,5 tampoco se obtiene de estos riesgos; sería el inverso de un 2%, que no es la diferencia.'},
  trampa:'Se divide el inverso de un riesgo relativo o se olvida pasar de porcentaje a proporción. El NNT siempre sale de la DIFERENCIA de riesgos, nunca del cociente.',
  dx:[],
  obj:'Calcular el número necesario a tratar a partir de dos riesgos absolutos.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Sackett, Medicina Basada en la Evidencia.'
},

/* ==================== BIOÉTICA Y GERIATRÍA ==================== */
'MIR-2018-M216': {
  esp:'Bioética', tema:'Final de la vida', sub:'Últimas horas de vida',
  clave:'En agonía NO se hacen cambios posturales rutinarios para prevenir úlceras: molestan y ya no van a evitar nada.',
  exp:'Cuando se diagnostica la situación de *últimas horas o días de vida* —debilidad extrema, cese de la ingesta, respiración de Cheyne-Stokes con apneas, estertores— el objetivo terapéutico cambia por completo: ya no se trata de prevenir complicaciones futuras sino de *no añadir sufrimiento*. Los cambios posturales sistemáticos cada pocas horas dejan de tener sentido porque la úlcera por presión ya no va a modificar el pronóstico y la movilización es *dolorosa* en un paciente con caquexia y piel frágil; se sustituyen por posturas de confort, colchón antiescaras y movilizaciones solo si el paciente está incómodo. En cambio, el resto de medidas son plenamente apropiadas: los *cuidados de la boca* con humidificación, lubricante labial y lágrimas artificiales alivian una de las molestias más constantes; la *escopolamina o el butilbromuro* secan las secreciones que producen los estertores, que angustian sobre todo a la familia; y *explicar a los cuidadores* lo que está ocurriendo es una intervención terapéutica en sí misma, porque la respiración agónica y la falta de ingesta se interpretan como sufrimiento cuando no lo son.',
  no:{0:'El cuidado de la boca y de los ojos alivia molestias muy frecuentes y está indicado.',1:'La escopolamina reduce los estertores por secreciones y es una medida estándar.',2:'Informar y acompañar a la familia es parte esencial de la atención en la agonía.'},
  trampa:'Se aplica el protocolo de prevención de úlceras por inercia. En la agonía el criterio cambia: se hace lo que da confort, no lo que previene.',
  dx:[],
  obj:'Adecuar los cuidados a los objetivos de confort en la situación de últimos días.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías SECPAL de cuidados paliativos.'
},
'MIR-2018-M220': {
  esp:'Bioética', tema:'Autonomía del paciente', sub:'Titular del derecho a la información',
  clave:'La titular de la información es la PACIENTE. Una demencia leve no anula la capacidad: se informa adaptando el lenguaje.',
  exp:'La ley es explícita: el titular del derecho a la información asistencial es *el propio paciente*, y los allegados solo son informados en la medida en que él lo permita de forma expresa o tácita, o cuando su capacidad esté anulada. Aquí la paciente tiene 92 años y una *demencia leve*, pero *no está incapacitada legalmente*, es *independiente*, *mantiene la conversación sin problemas* y está *orientada*: hay motivos sobrados para considerarla capaz para esta decisión. Por eso lo correcto es informarle a ella, *adaptando la explicación a su capacidad de comprensión* —lenguaje sencillo, ritmo pausado, comprobar que entiende, apoyo de la familia si ella lo desea—. Las otras opciones vulneran principios básicos: delegar la información en la hija ignora a la titular del derecho; decidir por ella es paternalismo puro; y pactar con la familia ocultarle el diagnóstico configura una *conspiración del silencio*, que además la ley solo permitiría bajo el estrecho supuesto del *privilegio terapéutico*, cuando conocer la información fuera a causarle un perjuicio grave demostrable, y siempre dejándolo razonado en la historia.',
  no:{0:'La hija no es la titular del derecho a la información: no le corresponde a ella comunicar el diagnóstico.',2:'La paciente sí es capaz de comprender, y aunque no lo fuera, la decisión no sería exclusivamente del médico.',3:'Pactar con la familia ocultar la información es una conspiración del silencio y vulnera el derecho de la paciente.'},
  trampa:'La edad avanzada y la palabra "demencia" hacen presuponer incapacidad. La capacidad se evalúa para cada decisión concreta, no se deduce del diagnóstico.',
  dx:[],
  obj:'Identificar al paciente como titular del derecho a la información aunque tenga deterioro cognitivo leve.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la Ley 41/2002 de autonomía del paciente.'
},
'MIR-2018-M210': {
  esp:'Farmacología', tema:'Farmacología geriátrica', sub:'Criterios STOPP/START',
  clave:'Los antihistamínicos problemáticos en el anciano son los de PRIMERA generación. Los de segunda apenas sedan ni son anticolinérgicos.',
  exp:'Los criterios *STOPP* señalan prescripciones potencialmente inadecuadas en el anciano y los *START* señalan omisiones de tratamientos indicados. La afirmación que no se ajusta a un STOPP es la de los *antihistamínicos de segunda generación* —cetirizina, loratadina, bilastina, ebastina—, que fueron diseñados precisamente para *no atravesar la barrera hematoencefálica* y carecen prácticamente de efecto sedante y anticolinérgico; son de hecho los recomendados en el anciano. Los que sí figuran en los criterios son los de *primera generación*, como difenhidramina, clorfeniramina o hidroxicina, por su carga anticolinérgica y su sedación. Las otras tres opciones son criterios STOPP reales y responden a la misma lógica de riesgo: las *benzodiacepinas de vida media larga* por sedación prolongada, confusión y caídas; los *antidepresivos tricíclicos* en el prostatismo por retención urinaria, dado su efecto anticolinérgico; y los *neurolépticos* en el parkinsonismo por bloqueo dopaminérgico y agravamiento del cuadro extrapiramidal.',
  no:{1:'Las benzodiacepinas de vida media larga son un criterio STOPP clásico por caídas y confusión.',2:'Los tricíclicos en el prostatismo son criterio STOPP por su efecto anticolinérgico y el riesgo de retención urinaria.',3:'Los neurolépticos en el parkinsonismo son criterio STOPP por agravamiento de los síntomas extrapiramidales.'},
  trampa:'Se agrupan todos los antihistamínicos. La distinción entre primera y segunda generación es justo lo que se pregunta.',
  dx:[],
  obj:'Aplicar los criterios STOPP/START a la prescripción en el anciano.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con los criterios STOPP/START versión 2 y los criterios de Beers.'
},

/* ==================== URGENCIAS Y TOXICOLOGÍA ==================== */
'MIR-2018-M225': {
  esp:'Emergencias', tema:'Toxicología', sub:'Intoxicación por cianuro',
  clave:'Incendio en espacio cerrado con hollín, estupor y ACIDOSIS LÁCTICA intensa: cianuro. Hidroxocobalamina.',
  exp:'En el humo de un incendio doméstico hay dos venenos, no uno. El *monóxido de carbono* se combate con oxígeno a alta concentración, que acorta drásticamente la vida media de la carboxihemoglobina. Pero el otro, el *cianuro*, procede de la combustión de plásticos, poliuretanos, lanas y sedas, y su marcador clínico es exactamente el que describe el caso: *acidosis metabólica con lactato muy elevado* junto a alteración del nivel de conciencia e inestabilidad hemodinámica. La razón es que el cianuro bloquea la *citocromo c oxidasa* en la cadena respiratoria mitocondrial, impidiendo usar el oxígeno pese a que haya de sobra, lo que fuerza el metabolismo anaerobio; un lactato por encima de 8-10 mmol/L en una víctima de incendio es prácticamente diagnóstico. El antídoto es la *hidroxocobalamina* intravenosa, que capta el cianuro formando cianocobalamina eliminada por la orina —tiñéndola de rojo—, es segura incluso si la sospecha no se confirma y, a diferencia de los nitritos, no genera metahemoglobina, algo esencial en un paciente que además puede tener carboxihemoglobina alta.',
  no:{0:'El bicarbonato corrige el pH pero no la causa: la acidosis persistirá mientras el cianuro bloquee la cadena respiratoria.',2:'La tiamina se administra en la encefalopatía de Wernicke, que aquí no viene al caso, y el paciente no tiene signos de desnutrición.',3:'La naloxona revierte los opiáceos, que no explican la acidosis láctica ni el contexto de incendio.'},
  trampa:'Se trata solo el monóxido con oxígeno y se olvida el cianuro. El lactato muy alto es la firma del segundo, y es el que mata en minutos.',
  dx:['Intoxicación por cianuro','Intoxicación por monóxido de carbono','Lesión por inhalación','Shock hipovolémico'],
  obj:'Sospechar cianuro por la acidosis láctica en el paciente rescatado de un incendio.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Goldfrank, Toxicologic Emergencies.'
},
'MIR-2020-M102': {
  esp:'Emergencias', tema:'Urgencias neurológicas', sub:'Coma de origen desconocido',
  clave:'Coma con frecuencia respiratoria de 7 y glucemia NORMAL: se antagoniza lo que deprime la respiración, naloxona y flumazenilo.',
  exp:'Ante un coma sin causa conocida existe un paquete de medidas empíricas —el llamado coma cóctel— pero hay que aplicar solo lo que la situación justifica. El dato dominante aquí es la *bradipnea de 7 respiraciones por minuto*: una depresión respiratoria de ese calibre apunta a *depresores del sistema nervioso central*, es decir, opiáceos o benzodiacepinas, de modo que corresponde administrar *naloxona* y *flumazenilo* junto al soporte de la vía aérea y la oxigenación. Lo importante es lo que se descarta con los datos que da el enunciado. La *glucemia capilar es de 120*, es decir, normal: administrar glucosa hipertónica no aporta nada y en un paciente que toma empagliflozina puede además enmascarar una cetoacidosis euglucémica que conviene buscar aparte. Y la *tiamina* se administra ante sospecha de encefalopatía de Wernicke, es decir, en alcohólicos o desnutridos, y el enunciado especifica que *no tiene hábitos tóxicos ni signos de desnutrición*. Conviene recordar además que el flumazenilo se usa con precaución si hay sospecha de consumo crónico de benzodiacepinas o de coingesta de tricíclicos, por el riesgo de convulsiones.',
  no:{0:'La tiamina no está indicada: no hay alcoholismo ni desnutrición.',1:'La glucosa hipertónica es innecesaria con una glucemia capilar de 120 mg/dL.',3:'Ni tiamina ni glucosa están indicadas, y además se dejaría sin antagonizar la depresión respiratoria, que es lo urgente.'},
  trampa:'Se administra el "coma cóctel" completo por rutina. El enunciado da glucemia normal y niega alcoholismo justamente para que se descarten dos de los cuatro componentes.',
  dx:['Intoxicación por depresores del SNC','Encefalopatía de Wernicke','Hipoglucemia','Ictus de tronco'],
  obj:'Seleccionar los antídotos del coma según los datos clínicos disponibles.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Goldfrank, Toxicologic Emergencies.'
},
'MIR-2020-M101': {
  esp:'Emergencias', tema:'Shock hemorrágico', sub:'Respondedor transitorio',
  clave:'Mejora con cristaloides y vuelve a deteriorarse: RESPONDEDOR TRANSITORIO. Sigue sangrando y necesita sangre tipo-específica.',
  exp:'La clasificación de la respuesta a la carga inicial de volumen ordena toda la conducta. El *respondedor rápido* se estabiliza y se mantiene: había perdido poco y se controla con cristaloides. El *no respondedor* no mejora en absoluto y requiere sangre O negativa sin esperar y quirófano inmediato. Y el *respondedor transitorio*, que es el caso, *mejora y vuelve a caer*: eso significa que la hemorragia *sigue activa* y que la pérdida ya es importante, en torno al 20-40% de la volemia. Ese paciente necesita *hemoderivados* y localización urgente del foco de sangrado. La elección de la sangre depende del tiempo disponible: la O Rh negativa se reserva para quien no puede esperar ni diez minutos, mientras que la *tipo-específica* —solo con grupo ABO y Rh determinados, sin pruebas cruzadas completas— está disponible en pocos minutos, es más segura y es la indicada en un paciente que, aunque inestable, ha llegado ya al hospital y tolera una espera breve. Las pruebas cruzadas completas tardan demasiado para esta situación.',
  no:{1:'La sangre O negativa se reserva para el paciente que no puede esperar ni siquiera a la determinación del grupo.',2:'Las pruebas cruzadas completas tardan cerca de una hora: demasiado para un respondedor transitorio.',3:'Insistir con cristaloides diluye los factores de coagulación y agrava la coagulopatía; lo que necesita es sangre y control del foco.'},
  trampa:'Se sigue infundiendo suero porque "mejoró la primera vez". Justo esa mejoría transitoria es la señal de que hay una hemorragia activa que no se detiene sola.',
  dx:['Shock hemorrágico con sangrado activo','Shock obstructivo','Shock neurogénico'],
  obj:'Clasificar la respuesta a la fluidoterapia en el trauma y elegir el hemoderivado adecuado.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con el manual ATLS.'
},
'MIR-2018-M82': {
  esp:'Emergencias', tema:'Hemorragia digestiva', sub:'Prioridades de manejo',
  clave:'Melenas con taquicardia de 124 y tensión de 80/40: primero VÍA de grueso calibre y volumen. El diagnóstico viene después.',
  exp:'La paciente está en *shock hipovolémico*: palidez marcada, taquicardia de 124 e hipotensión de 80/40 tras 24 horas de melenas. Cuando la hemodinámica está comprometida, el orden de actuación no lo marca el diagnóstico sino la *estabilización*, siguiendo la secuencia clásica de vía aérea, respiración y circulación. Por eso lo primero es *canalizar al menos una vía periférica de grueso calibre* —idealmente dos, del calibre 14 o 16, que permiten infundir mucho más rápido que una vía central— e iniciar reposición con cristaloides mientras se extraen las analíticas básicas: hemograma, coagulación, bioquímica y, sobre todo, *pruebas cruzadas*, porque va a necesitar transfusión. En paralelo se inicia el inhibidor de la bomba de protones intravenoso. Solo cuando la paciente está estabilizada tiene sentido la *endoscopia*, que se realiza en las primeras 24 horas y que en un paciente inestable resulta peligrosa y de mala calidad por la sangre en la cavidad. La anamnesis detallada y el tacto rectal son útiles, pero no son lo primero cuando hay shock.',
  no:{0:'La anamnesis detallada y el tacto rectal aportan información, pero no pueden anteponerse a la reposición de volumen en una paciente en shock.',1:'La sonda nasogástrica ha caído en desuso: no mejora el pronóstico ni la calidad de la endoscopia y añade molestias.',2:'La endoscopia inmediata en un paciente inestable es peligrosa y de bajo rendimiento; primero se estabiliza.'},
  trampa:'Se corre a la endoscopia porque es lo que resuelve el sangrado. Antes hay que conseguir que la paciente llegue viva y estable a esa endoscopia.',
  dx:['Hemorragia digestiva alta por úlcera péptica','Varices esofágicas','Neoplasia gástrica'],
  obj:'Priorizar la estabilización hemodinámica sobre el diagnóstico en la hemorragia digestiva.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías internacionales de hemorragia digestiva alta no varicosa.'
},
'MIR-2018-M54': {
  esp:'Medicina Interna', tema:'Inmunología', sub:'Angioedema hereditario',
  clave:'Angioedema SIN urticaria ni prurito, recurrente y con historia familiar: hereditario por déficit de C1 inhibidor. Icatibant o concentrado de C1-INH.',
  exp:'Tres datos separan este cuadro de la anafilaxia y son decisivos porque cambian por completo el tratamiento. El angioedema es *no pruriginoso* y *sin urticaria*, mientras que el alérgico casi siempre se acompaña de habones y picor. Es *recurrente* desde hace dos años, con episodios autolimitados. Y hay *antecedentes familiares*, coherentes con una herencia *autosómica dominante*. El mecanismo no es la histamina sino la *bradicinina*: el déficit de *C1 inhibidor* desinhibe la vía del contacto y genera bradicinina en exceso, que produce vasodilatación y extravasación. De ahí que los antihistamínicos, los corticoides y la adrenalina *no funcionen*, porque actúan sobre otra vía. El tratamiento del episodio agudo es el *concentrado de C1 inhibidor* o el *icatibant*, antagonista del receptor B2 de la bradicinina, y como alternativa el ecalantida o el plasma fresco si no se dispone de nada más. El edema de glotis con saturación del 91% obliga además a asegurar la vía aérea de forma prioritaria.',
  no:{0:'Los corticoides son ineficaces: el mediador es la bradicinina, no la histamina.',1:'La adrenalina puede dar una mejoría mínima y transitoria, pero no revierte el angioedema bradicinérgico.',3:'El omalizumab es un anti-IgE indicado en urticaria crónica y asma alérgico, no en el angioedema hereditario ni en la urgencia.'},
  trampa:'Se trata como una anafilaxia. La ausencia de urticaria y prurito más la historia familiar cambian el mediador y, con él, todo el tratamiento.',
  dx:['Angioedema hereditario','Anafilaxia','Angioedema por IECA','Urticaria aguda'],
  obj:'Distinguir el angioedema bradicinérgico del histaminérgico y elegir su tratamiento.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías WAO/EAACI sobre angioedema hereditario.'
},

/* ==================== INFECTOLOGÍA ==================== */
'MIR-2018-M61': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Bacteriemia por Pseudomonas',
  clave:'Pseudomonas aeruginosa: la cefotaxima NO la cubre. Hay que cambiar a un betalactámico antipseudomónico como piperacilina-tazobactam.',
  exp:'Aunque falte el antibiograma, la identificación del germen ya obliga a actuar, porque hay un dato de resistencia *intrínseca* que no depende del laboratorio: *Pseudomonas aeruginosa* es resistente a la *cefotaxima* y a la ceftriaxona, las cefalosporinas de tercera generación no antipseudomónicas. Mantener ese tratamiento en un paciente con bacteriemia sería dejarlo sin cobertura. Los betalactámicos activos frente a Pseudomonas son un grupo corto que conviene memorizar: *piperacilina-tazobactam*, *ceftazidima* y *cefepima*, los carbapenémicos *meropenem* e *imipenem*, y el *aztreonam*; a ellos se añaden ciprofloxacino, los aminoglucósidos y la colistina. Por tanto la conducta correcta es *cambiar a piperacilina-tazobactam* y ajustar después según el antibiograma. Y hay una excepción muy preguntada dentro de los carbapenémicos: el *ertapenem*, a diferencia de sus hermanos, *no cubre Pseudomonas*.',
  no:{0:'Pseudomonas es intrínsecamente resistente a cefotaxima: esperar el antibiograma sería dejar al paciente sin tratamiento eficaz.',1:'El ertapenem es el único carbapenémico que NO tiene actividad antipseudomónica.',3:'El cotrimoxazol no es activo frente a Pseudomonas y añadirlo no aporta sinergia alguna.'},
  trampa:'Se asume que "cefalosporina de amplio espectro" incluye Pseudomonas. Solo la ceftazidima y la cefepima la cubren.',
  dx:['Bacteriemia por Pseudomonas aeruginosa','Infección urinaria complicada','Bacteriemia por enterobacterias'],
  obj:'Conocer los betalactámicos con actividad antipseudomónica y sus excepciones.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Mandell, Enfermedades Infecciosas.'
},
'MIR-2018-M62': {
  esp:'Medicina Interna', tema:'Infectología', sub:'SARM y gen mecA',
  clave:'El gen mecA define al SARM: resistencia a TODOS los betalactámicos, incluidos carbapenémicos. Solo escapa la ceftarolina.',
  exp:'Hay que distinguir dos mecanismos de resistencia que se confunden constantemente. El primero es la *betalactamasa*, una enzima que *destruye* el anillo betalactámico y que se neutraliza añadiendo un inhibidor como el clavulánico o el tazobactam. El segundo, el que informa el laboratorio aquí, es el *gen mecA*, que codifica una proteína fijadora de penicilina alternativa, la *PBP2a*, con *baja afinidad* por todos los betalactámicos. Como el antibiótico ya no puede unirse a su diana, ningún inhibidor de betalactamasas sirve de nada: la resistencia abarca *penicilinas, cefalosporinas y carbapenémicos por igual*. Eso es exactamente lo que define al *Staphylococcus aureus resistente a meticilina*. La única excepción son las cefalosporinas de quinta generación, *ceftarolina* y ceftobiprol, diseñadas para unirse a la PBP2a. En la práctica, una bacteriemia por SARM asociada a catéter se trata con *vancomicina* o *daptomicina*, se retira el catéter y se descarta endocarditis con ecocardiograma.',
  no:{0:'El mecA no codifica una betalactamasa sino una PBP alterada: añadir un inhibidor no resuelve nada.',2:'La amoxicilina-clavulánico es inútil frente al SARM por el mismo motivo.',3:'El meropenem, pese a su amplio espectro, tampoco es activo: la resistencia del SARM alcanza a los carbapenémicos.'},
  trampa:'Se piensa que un antibiótico más potente vencerá la resistencia. Cuando el problema es la diana y no la enzima, subir de escalón betalactámico no sirve.',
  dx:['Bacteriemia por SARM asociada a catéter','Bacteriemia por estafilococo coagulasa negativo','Endocarditis'],
  obj:'Interpretar el gen mecA y sus consecuencias terapéuticas.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías IDSA sobre infecciones por SARM.'
},
'MIR-2018-M83': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Diarrea del viajero',
  clave:'La quinolona en la diarrea del viajero solo ACORTA la duración: no salva vidas ni previene complicaciones.',
  exp:'La diarrea del viajero es un cuadro *autolimitado*, causado en la mayoría de los casos por *Escherichia coli enterotoxigénica* y otras bacterias enteroinvasivas, que se resuelve solo en tres a cinco días. El pilar del tratamiento es siempre la *rehidratación oral*. El antibiótico —quinolona, o azitromicina en el sudeste asiático por las resistencias de Campylobacter, o rifaximina en las formas no invasivas— tiene un beneficio real pero *modesto y bien acotado*: reduce la duración del cuadro de unos tres días a alrededor de uno, lo que en un viajero puede significar salvar el viaje. No reduce la mortalidad, porque prácticamente no la hay en un adulto sano; no previene complicaciones intraabdominales, que no son propias de este cuadro; y no evita la diseminación séptica, que es excepcional. Conviene además reservarlo para las formas moderadas o graves —más de cuatro deposiciones al día, fiebre, sangre en heces o incapacidad funcional—, porque el uso indiscriminado favorece resistencias y la colonización por enterobacterias productoras de betalactamasas de espectro extendido.',
  no:{1:'La mortalidad de la diarrea del viajero en un adulto sano es prácticamente nula: no hay margen de reducción.',2:'Las complicaciones intraabdominales no son propias de este cuadro.',3:'La diseminación séptica es excepcional y no es el motivo de prescribir el antibiótico.'},
  trampa:'Se justifica el antibiótico con argumentos de gravedad. El beneficio es de comodidad y duración, y eso hay que saber explicarlo al paciente.',
  dx:['Diarrea del viajero','Giardiasis','Cólera','Gastroenteritis vírica'],
  obj:'Conocer el beneficio real y limitado del antibiótico en la diarrea del viajero.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías IDSA sobre diarrea infecciosa.'
},
'MIR-2019-M159': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Reinicio del tratamiento antirretroviral',
  clave:'Adherencia dudosa: se elige el régimen con mayor BARRERA GENÉTICA, un inhibidor de proteasa potenciado.',
  exp:'La decisión gira en torno a la *barrera genética*, es decir, cuántas mutaciones necesita el virus para escapar de un fármaco. Este paciente abandonó el tratamiento por motivos personales y por efectos adversos, lo que anticipa una adherencia frágil, y ya presenta *deterioro inmunológico* con herpes zóster. En ese escenario se prefiere una pauta que *perdone* olvidos, y los *inhibidores de proteasa potenciados con ritonavir o cobicistat* son los que tienen la barrera genética más alta: hacen falta múltiples mutaciones acumuladas para perder eficacia, de modo que una adherencia imperfecta rara vez genera resistencia. Los otros enunciados fallan por motivos concretos. *No tratar nunca es opción*: el beneficio individual y la prevención de la transmisión superan cualquier riesgo teórico de resistencia, y hoy se trata a todo paciente con VIH. El *estudio de resistencias* hecho tras dos años sin tratamiento tiene poco rendimiento, porque al desaparecer la presión farmacológica reemerge el virus salvaje y las mutaciones quedan archivadas y no se detectan. Y la *biterapia* exige un escenario favorable y adherencia asegurada, justo lo que aquí no se tiene.',
  no:{0:'Hoy se trata a todo paciente con VIH: no tratar aumenta la morbimortalidad y la transmisión. La adherencia se trabaja, no se usa como excusa.',1:'Tras dos años sin tratamiento reemerge el virus salvaje y las resistencias archivadas no se detectan: el estudio tendría escaso rendimiento.',2:'La biterapia requiere buena adherencia y ausencia de resistencias previas; en este paciente no es la opción más segura.'},
  trampa:'Se elige la pauta más cómoda o con menos efectos adversos. Con adherencia incierta lo que manda es la barrera genética.',
  dx:[],
  obj:'Elegir el régimen antirretroviral según la barrera genética cuando la adherencia es dudosa.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con el documento de consenso GeSIDA sobre tratamiento antirretroviral.'
},
'MIR-2020-M123': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Síndrome de reconstitución inmune',
  clave:'CD4 subiendo y carga viral cayendo, y aparece una tuberculosis ganglionar: eso es reconstitución inmune, no fracaso terapéutico.',
  exp:'El *síndrome inflamatorio de reconstitución inmune* aparece semanas o meses después de iniciar el tratamiento antirretroviral en pacientes que partían de una inmunodepresión profunda —aquí *45 CD4* y medio millón de copias— y que responden bien. Al recuperarse la inmunidad celular, el sistema inmune *reacciona por fin* contra antígenos que estaban presentes pero no producían inflamación, y esa respuesta es la que genera la clínica: adenopatías, fiebre, empeoramiento paradójico de lesiones conocidas. Hay dos formas: la *desenmascarada*, cuando aflora una infección que estaba latente y no diagnosticada —como esta tuberculosis ganglionar—, y la *paradójica*, cuando empeora una infección ya en tratamiento. La clave para no confundirlo con un fracaso es mirar los números: los *CD4 suben* de 45 a 80 y la *carga viral cae* de 500.000 a 25.000, es decir, el tratamiento está funcionando. Por eso *no se suspende el antirretroviral*: se trata la infección subyacente y se añaden corticoides si la inflamación es grave. Y conviene recordar que un *Mantoux negativo* en un paciente con 45 CD4 no descarta nada, porque es una prueba de hipersensibilidad retardada que requiere inmunidad celular conservada.',
  no:{0:'La recuperación inmunológica no es incompleta sino incipiente, y precisamente es esa recuperación la que desencadena el cuadro.',1:'No hay fracaso terapéutico: la carga viral ha bajado veinte veces y los CD4 han subido.',3:'Un Mantoux negativo con 45 CD4 es una anergia esperable y no descarta la tuberculosis.'},
  trampa:'Se interpreta el empeoramiento clínico como fallo del tratamiento y se suspende. Los números dicen lo contrario: es la inmunidad que vuelve.',
  dx:['Síndrome de reconstitución inmune','Fracaso virológico','Tuberculosis ganglionar','Linfoma'],
  obj:'Reconocer el síndrome de reconstitución inmune y no suspender el tratamiento antirretroviral.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Mandell, Enfermedades Infecciosas, y el documento GeSIDA.'
},

/* ==================== DIGESTIVO ==================== */
'MIR-2018-M76': {
  esp:'Cirugía', tema:'Cirugía digestiva', sub:'Colangitis con coledocolitiasis',
  clave:'Dolor, fiebre e ictericia con vía biliar dilatada: colangitis. Se drena con CPRE y esfinterotomía antes de operar la vesícula.',
  exp:'La tríada de *Charcot* —dolor en hipocondrio derecho, fiebre e ictericia— sobre una vía biliar principal dilatada por coledocolitiasis define una *colangitis aguda*, y ese diagnóstico manda sobre la colecistitis que también existe. El principio es que la colangitis es una infección *dentro de un conducto obstruido a presión*, y mientras no se descomprima los antibióticos no bastan y el paciente puede evolucionar a sepsis grave. Por eso lo primero es el *drenaje biliar*, y la vía más eficaz y menos agresiva es la *CPRE con esfinterotomía*, que además extrae el cálculo y resuelve la causa. La colecistectomía laparoscópica se hace *después*, preferiblemente en el mismo ingreso, una vez resuelto el episodio agudo. Las pruebas de imagen adicionales no aportan: la ecografía ya ha demostrado la dilatación y los cálculos, y la colangiorresonancia o la TC solo retrasarían un tratamiento que además es diagnóstico.',
  no:{0:'La cirugía urgente en un paciente séptico con colangitis tiene mucha más morbimortalidad que el drenaje endoscópico.',1:'La colangiorresonancia es una prueba diagnóstica que no drena nada; aquí el diagnóstico ya está hecho.',2:'La TC tampoco resuelve la obstrucción y retrasa el tratamiento.'},
  trampa:'Se piensa en operar la vesícula porque hay colecistitis. Lo que amenaza la vida es el colédoco obstruido, y eso se drena primero.',
  dx:['Colangitis aguda con coledocolitiasis','Colecistitis aguda','Pancreatitis biliar'],
  obj:'Priorizar el drenaje biliar endoscópico en la colangitis aguda.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías de Tokio para colangitis aguda.'
},
'MIR-2018-M81': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Carcinoides gástricos tipo 1',
  clave:'Gastritis atrófica corporal con microcarcinoides: tipo 1, secundarios a HIPERgastrinemia. Si hay que operar, la gastrectomía DISTAL quita el estímulo.',
  exp:'El cuadro es una *gastritis crónica atrófica autoinmune*, con atrofia del cuerpo y del fundus y metaplasia intestinal, sobre la que han aparecido *microcarcinoides* múltiples. El mecanismo encadena todo el caso: la destrucción de las células parietales suprime la producción de ácido, la *aclorhidria* elimina la retroalimentación negativa sobre las células G del *antro*, y estas responden con una *hipergastrinemia mantenida*; la gastrina es trófica para las células enterocromafines del cuerpo y del fundus, que proliferan hasta formar carcinoides. Son los *tipo 1*, los más frecuentes, múltiples, pequeños y de comportamiento *indolente*, con muy buen pronóstico. Por eso el manejo habitual es la resección endoscópica y la vigilancia. Y cuando se indica cirugía, lo lógico es una *antrectomía o gastrectomía distal*: al quitar el antro se elimina la fuente de gastrina y los carcinoides del cuerpo *regresan*, lo cual es una elegante lección de fisiopatología aplicada.',
  no:{0:'Cursan con HIPERgastrinemia, no con hipogastrinemia: es justamente el motor de la enfermedad.',1:'La metaplasia intestinal aumenta el riesgo de adenocarcinoma pero no justifica una gastrectomía: se vigila endoscópicamente.',3:'Los análogos de somatostatina se reservan para casos seleccionados con carga tumoral significativa, no como tratamiento estándar del tipo 1.'},
  trampa:'Se opera el órgano donde están los tumores. Aquí el tratamiento quirúrgico consiste en quitar el ANTRO, que es donde está la causa.',
  dx:['Carcinoides gástricos tipo 1','Gastrinoma','Adenocarcinoma gástrico'],
  obj:'Explicar la fisiopatología del carcinoide gástrico tipo 1 y el fundamento de la antrectomía.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías ENETS sobre tumores neuroendocrinos gástricos.'
},
'MIR-2019-M168': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Pancreatitis aguda',
  clave:'Pancreatitis aguda no complicada: NO hace falta TC urgente. A lo sumo ecografía para buscar litiasis.',
  exp:'El diagnóstico de pancreatitis aguda es *clínico y analítico*: basta con dos de estos tres criterios —dolor epigástrico irradiado a espalda, amilasa o lipasa por encima de tres veces el límite normal, y hallazgos de imagen—, y aquí se cumplen los dos primeros de sobra. Por eso *no hace falta ninguna prueba de imagen para diagnosticar*. La *TC con contraste* tiene indicaciones concretas: duda diagnóstica, sospecha de complicación local, o valoración de necrosis, y para esto último debe hacerse *pasadas 48 a 72 horas*, porque antes la necrosis todavía no se ha delimitado y una TC precoz infraestima la gravedad y expone innecesariamente a contraste. Lo que sí es útil de entrada es la *ecografía abdominal*, no para diagnosticar la pancreatitis sino para buscar su causa más frecuente, la *litiasis biliar*, lo que condiciona el manejo posterior. El paciente está además afebril, estable y con analítica sin criterios de gravedad —calcio, LDH y triglicéridos normales—, lo que apoya una pancreatitis leve.',
  no:{0:'No hay colangitis: falta la ictericia y la bilirrubina es normal, así que la tríada de Charcot no se cumple.',1:'La isquemia mesentérica cursa con dolor desproporcionado, acidosis láctica y deterioro rápido, no con amilasa de 3.000.',3:'La TC urgente no está indicada: no aporta al diagnóstico y realizada tan precozmente infraestima la necrosis.'},
  trampa:'Se pide una TC para "ver cómo está el páncreas". En las primeras 48 horas esa imagen engaña, y el diagnóstico ya está hecho con la clínica y la amilasa.',
  dx:['Pancreatitis aguda','Colangitis','Úlcera perforada','Isquemia mesentérica'],
  obj:'Diagnosticar la pancreatitis aguda sin imagen y conocer cuándo está indicada la TC.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con los criterios de Atlanta revisados y guías de la AGA.'
},
'MIR-2019-M98': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Hígado graso no alcohólico',
  clave:'En el hígado graso metabólico lo que importa es cuánta FIBROSIS hay. La elastografía la mide sin biopsia.',
  exp:'El paciente reúne el perfil completo de la *enfermedad hepática grasa metabólica*: obesidad, diabetes tipo 2, dislipemia, consumo mínimo de alcohol, esteatosis ecográfica e hipertransaminasemia leve, con serologías víricas y autoinmunidad negativas y ferritina normal. Establecido eso, la pregunta clínica que realmente importa no es si hay grasa sino *cuánta fibrosis*, porque el estadio de fibrosis es el *único predictor sólido* de cirrosis, hepatocarcinoma y mortalidad hepática. La *elastografía de transición* mide la rigidez hepática de forma no invasiva, reproducible y en pocos minutos, y se combina en la práctica con índices analíticos como el FIB-4 o el NAFLD fibrosis score; la biopsia queda para los casos con resultados discordantes o con duda diagnóstica real. Es importante desmontar también la primera opción: la esteatosis metabólica *sí puede progresar* a esteatohepatitis, cirrosis y hepatocarcinoma, y de hecho es hoy una de las principales causas de trasplante hepático. El tratamiento es la pérdida de peso —un descenso del 7-10% mejora la histología— y el control metabólico.',
  no:{0:'La esteatosis metabólica SÍ puede evolucionar a esteatohepatitis, cirrosis y hepatocarcinoma: no es una condición benigna.',1:'La autoinmunidad es negativa y no hay ningún dato que sugiera hepatitis autoinmune.',3:'La pioglitazona puede mejorar la histología en casos seleccionados, pero no sustituye a la metformina, que aporta beneficio metabólico y cardiovascular.'},
  trampa:'Se tranquiliza al paciente porque "solo es hígado graso". Sin conocer el grado de fibrosis no se puede estimar su riesgo.',
  dx:['Enfermedad hepática grasa metabólica','Hepatitis autoinmune','Hemocromatosis','Hepatitis vírica crónica'],
  obj:'Estadificar la fibrosis con métodos no invasivos en el hígado graso metabólico.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con guías EASL-EASD-EASO sobre enfermedad hepática grasa.'
},

/* ==================== ONCOLOGÍA ==================== */
'MIR-2018-M227': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Cáncer de páncreas',
  clave:'Masa en cabeza de páncreas: la primera prueba es la TC toracoabdominopélvica con contraste, que diagnostica Y estadifica a la vez.',
  exp:'Ante una *ictericia indolora* con lesión en cabeza pancreática, la sospecha principal es un adenocarcinoma, y lo que decide todo el manejo posterior es una sola pregunta: *si es resecable o no*. La prueba que la responde es la *TC con contraste en fase pancreática y protocolo toracoabdominopélvico*, porque en un solo estudio evalúa el tamaño y la localización del tumor, la *relación con los vasos* —tronco celíaco, arteria mesentérica superior, vena porta y confluente esplenoportal, que es lo que separa el tumor resecable del localmente avanzado— y la presencia de *metástasis* hepáticas, peritoneales o pulmonares. Las demás pruebas tienen su lugar, pero después: la *ecoendoscopia* es excelente para lesiones pequeñas y sobre todo para obtener *citología por punción*, que se necesita si va a darse tratamiento neoadyuvante o paliativo; la *CPRE* es terapéutica, para drenar la vía biliar si hay colangitis o si la cirugía se va a demorar; y el *PET-TC* solo aclara dudas puntuales sobre enfermedad a distancia. Un principio importante: si el tumor es claramente resecable, la biopsia previa no es imprescindible.',
  no:{0:'El PET-TC no es la primera prueba: no define la relación con los vasos, que es lo que determina la resecabilidad.',1:'La ecoendoscopia es muy útil para la punción, pero no evalúa la enfermedad a distancia.',3:'La CPRE es un procedimiento terapéutico de drenaje, no una prueba de estadificación.'},
  trampa:'Se busca primero la confirmación histológica. En el páncreas la secuencia es al revés: primero se decide si se puede operar y a menudo se opera sin biopsia previa.',
  dx:['Adenocarcinoma de páncreas','Colangiocarcinoma distal','Pancreatitis autoinmune','Ampuloma'],
  obj:'Elegir la TC con contraste como primera prueba diagnóstica y de estadificación en el cáncer de páncreas.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías NCCN de cáncer de páncreas.'
},
'MIR-2018-M85': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Diabetes y cáncer de páncreas',
  clave:'Una diabetes de INICIO RECIENTE en un adulto mayor puede ser el primer síntoma de un cáncer de páncreas: aparece en un tercio de los casos.',
  exp:'La relación entre diabetes y cáncer de páncreas es *bidireccional*, y ahí está la sutileza. Por un lado, la diabetes de larga evolución es un *factor de riesgo modesto*, que aproximadamente duplica el riesgo, muy lejos de ese 50% que propone uno de los distractores. Por otro —y esto es lo clínicamente útil— *el propio tumor produce diabetes*: alrededor de un tercio de los pacientes con cáncer de páncreas avanzado son diabéticos y en muchos de ellos la diabetes es de *aparición reciente*, en los dos años previos al diagnóstico, por un efecto paraneoplásico sobre la sensibilidad a la insulina más que por destrucción del parénquima. De ahí la regla práctica: una diabetes de nueva aparición en un mayor de 50 años, sobre todo si se acompaña de *pérdida de peso* sin causa clara o de mal control inesperado, debe hacer pensar en un tumor pancreático oculto. Es una de las pocas ventanas de sospecha precoz que existen en un tumor que se diagnostica casi siempre tarde.',
  no:{0:'La diabetes de larga evolución aproximadamente duplica el riesgo; hablar de más del 50% es una exageración enorme.',2:'La diabetes suele preceder a la ictericia, a menudo en meses o años, y es precisamente por eso por lo que sirve como señal de alarma.',3:'La diabetes puede mejorar tras la resección en algunos casos, pero no desaparece de forma sistemática, y menos si se reseca parénquima.'},
  trampa:'Se piensa solo en la diabetes como causa. Aquí lo importante es lo contrario: la diabetes como primer SÍNTOMA del tumor.',
  dx:['Adenocarcinoma de páncreas','Diabetes tipo 2','Pancreatitis crónica'],
  obj:'Reconocer la diabetes de inicio reciente como posible manifestación precoz del cáncer de páncreas.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías NCCN y Harrison, 21.ª ed.'
},
'MIR-2019-M127': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Tumor de Pancoast',
  clave:'Pancoast resecable: quimiorradioterapia NEOADYUVANTE y después cirugía. Nunca operar de entrada.',
  exp:'El caso describe un *tumor del sulcus superior*: fumador importante con masa en lóbulo superior izquierdo, *dolor en el borde cubital del brazo* por afectación de las raíces C8 y T1 del plexo braquial, *ptosis* como parte del síndrome de Horner por lesión del simpático cervical, e *invasión de la segunda costilla*, es decir, un T3 o T4 por invasión de la pared torácica. El esquema de tratamiento establecido para un Pancoast potencialmente resecable, sin metástasis y sin afectación mediastínica, es la *quimiorradioterapia concurrente de inducción seguida de cirugía*. Ese orden no es arbitrario: la localización apical, encajonada entre vértebras, vasos subclavios y plexo, hace que operar de entrada dé con mucha frecuencia márgenes positivos, mientras que la inducción *reduce el volumen tumoral*, esteriliza los bordes y aumenta de forma marcada la tasa de resecciones completas y la supervivencia. Antes de decidir hay que estadificar bien el mediastino y descartar metástasis, en particular cerebrales.',
  no:{1:'Renunciar a la cirugía en un tumor resecable pierde la opción con intención curativa.',2:'Operar de entrada un Pancoast conlleva un porcentaje elevado de márgenes positivos.',3:'La radioterapia sola como inducción es inferior a la quimiorradioterapia concurrente.'},
  trampa:'Se opera primero porque parece localizado. En el vértice torácico la anatomía impide una resección limpia sin reducir antes el tumor.',
  dx:['Tumor de Pancoast','Metástasis apical','Cervicobraquialgia','Tuberculosis apical'],
  obj:'Aplicar el esquema de inducción seguida de cirugía en el tumor del sulcus superior.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con guías NCCN de cáncer de pulmón no microcítico.'
},
'MIR-2019-M129': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Cáncer de esófago',
  clave:'Epidermoide de esófago torácico localmente avanzado: quimiorradioterapia PREOPERATORIA y después valorar cirugía.',
  exp:'El tumor está a *30 cm de la arcada dentaria*, es decir, en el esófago torácico medio, es *epidermoide* y resulta *parcialmente estenosante*, lo que implica que ya invade más allá de la submucosa: se trata de un tumor *localmente avanzado*, aunque el PET-TC y la ecoendoscopia no muestren adenopatías. El estándar en esa situación es la *quimiorradioterapia preoperatoria*, esquema avalado por el ensayo CROSS, que aumenta de forma significativa la tasa de resecciones completas y la supervivencia frente a la cirugía sola. Hay además un matiz propio del epidermoide: es especialmente *radiosensible*, hasta el punto de que un porcentaje relevante alcanza respuesta completa y, sobre todo en tumores del tercio superior o en pacientes no operables, la quimiorradioterapia definitiva sin cirugía es una alternativa válida. La quimioterapia de inducción sin radioterapia es más propia del adenocarcinoma de la unión esofagogástrica, y operar de entrada un tumor localmente avanzado da malos resultados oncológicos con una cirugía de elevada morbilidad.',
  no:{0:'La esofaguectomía transhiatal de entrada no está indicada en un tumor localmente avanzado.',1:'La técnica de Ivor-Lewis es una vía de abordaje quirúrgico, pero la cuestión es qué hacer ANTES de operar.',3:'La quimioterapia sola de inducción es el esquema del adenocarcinoma de la unión; en el epidermoide se combina con radioterapia.'},
  trampa:'La ausencia de adenopatías hace pensar en enfermedad precoz. Un tumor que ya estenosa la luz no es un T1: es localmente avanzado.',
  dx:['Carcinoma epidermoide de esófago','Adenocarcinoma de esófago','Acalasia','Estenosis péptica'],
  obj:'Indicar quimiorradioterapia preoperatoria en el cáncer de esófago localmente avanzado.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con guías ESMO de cáncer de esófago y el ensayo CROSS.'
},
'MIR-2019-M64': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Cáncer de mama triple negativo',
  clave:'Triple negativo: no hay diana. Quimioterapia y radioterapia, sin hormonoterapia ni trastuzumab.',
  exp:'El perfil del tumor decide el tratamiento con una lógica muy directa: *receptores de estrógeno y progesterona al 0%* significa que la hormonoterapia no tiene diana sobre la que actuar, y *HER2 negativo* significa que el trastuzumab tampoco. Es por tanto un *triple negativo*, y aunque mide solo 11 milímetros y los ganglios centinela son negativos, se trata de un tumor de *alto riesgo*: grado histológico III y *Ki-67 del 70%*, es decir, altísima proliferación. Ese perfil biológico justifica *quimioterapia adyuvante* basada en antraciclinas y taxanos pese al tamaño pequeño, porque el triple negativo recae pronto y de forma agresiva, sobre todo en los tres primeros años. Y como se ha hecho *cirugía conservadora*, la *radioterapia sobre la mama restante* es obligada, ya que reduce a la mitad el riesgo de recidiva local. Añadir tamoxifeno, inhibidores de aromatasa o trastuzumab a este tumor sería exponer a la paciente a toxicidad sin ninguna posibilidad de beneficio.',
  no:{0:'El trastuzumab solo beneficia a los tumores HER2 positivos, y este es negativo.',1:'El tamoxifeno requiere receptores hormonales positivos, que aquí están al 0%.',3:'Los inhibidores de aromatasa también necesitan receptores hormonales; ser postmenopáusica no basta.'},
  trampa:'Se añade hormonoterapia por rutina en el cáncer de mama. Sin receptores no hay diana, y el fármaco solo aporta efectos adversos.',
  dx:['Carcinoma ductal infiltrante triple negativo','Carcinoma luminal','Carcinoma HER2 positivo'],
  obj:'Adecuar el tratamiento adyuvante del cáncer de mama al perfil de receptores.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con guías ESMO de cáncer de mama precoz.'
},
'MIR-2019-M65': {
  esp:'Ginecología y Obstetricia', tema:'Patología mamaria', sub:'Nódulo mamario en mujer joven',
  clave:'Nódulo palpable en menor de 35 años: la primera prueba de imagen es la ECOGRAFÍA, no la mamografía.',
  exp:'La elección de la prueba depende de la *densidad mamaria*, que a su vez depende de la edad. En la mujer joven la mama es *densa*, con predominio de tejido fibroglandular, y en una mamografía ese tejido aparece blanco, igual que una lesión, de modo que la sensibilidad cae mucho: la mamografía puede no ver un tumor rodeado de mama densa. La *ecografía*, en cambio, distingue perfectamente entre lesión *sólida y quística* en ese tipo de mama, no irradia y permite dirigir una punción en el mismo acto. Por eso en menores de 35 a 40 años con un nódulo palpable la primera prueba es la ecografía, mientras que a partir de esa edad se hace mamografía, generalmente complementada con ecografía. Y hay un punto que la pregunta subraya: *un nódulo palpable nuevo nunca se vigila sin estudiar*, aunque la paciente sea joven y aunque los bordes parezcan regulares. La resonancia se reserva para el cribado de alto riesgo genético o para estadificar, y aquí una abuela con cáncer de mama no constituye criterio de alto riesgo.',
  no:{1:'La mamografía es el patrón oro en el CRIBADO poblacional, pero pierde sensibilidad en la mama densa de la mujer joven.',2:'La resonancia se reserva para el alto riesgo genético o la estadificación; una abuela afectada no cumple ese criterio.',3:'Un nódulo palpable de reciente aparición debe estudiarse siempre, con independencia de la edad.'},
  trampa:'Se pide mamografía porque es "la prueba del cáncer de mama". En la mama densa la ecografía ve lo que la mamografía esconde.',
  dx:['Fibroadenoma','Quiste mamario','Carcinoma','Tumor phyllodes'],
  obj:'Elegir la ecografía como primera imagen ante un nódulo mamario en la mujer joven.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con guías de la SEGO y de la Academia Americana de Radiología.'
},
'MIR-2019-M71': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Tumor germinal extragonadal',
  clave:'La ALFAFETOPROTEÍNA elevada excluye el seminoma puro: es un tumor germinal NO seminomatoso.',
  exp:'El caso reúne los rasgos del *tumor germinal extragonadal de línea media*: varón joven, masa *mediastínica* y metástasis hepática, con elevación de *LDH*, *beta-hCG* y *alfafetoproteína*. La clave que resuelve la pregunta es una regla sin excepciones prácticas: el *seminoma puro NO produce alfafetoproteína*. Puede elevar discretamente la beta-hCG, por la presencia de células sincitiotrofoblásticas, y suele elevar la LDH como marcador de masa tumoral, pero si la alfafetoproteína está alta el tumor debe tratarse como *no seminomatoso* aunque la histología informe seminoma, porque significa que hay un componente no seminomatoso —seno endodérmico o carcinoma embrionario— que la biopsia no ha muestreado. Esto tiene consecuencias terapéuticas directas, ya que ambos grupos se tratan de forma distinta. Es obligado además explorar los testículos y hacer ecografía escrotal para descartar un primario oculto, y conviene recordar que este tipo de tumores, pese a estar diseminados, son *potencialmente curables* con quimioterapia basada en cisplatino.',
  no:{0:'El hepatocarcinoma eleva la alfafetoproteína pero NO la beta-hCG, y no se presenta como masa mediastínica en un varón de 40 años.',1:'El seminoma puro nunca eleva la alfafetoproteína: su presencia lo descarta por definición.',2:'El linfoma mediastínico eleva la LDH pero no produce beta-hCG ni alfafetoproteína.'},
  trampa:'Se responde seminoma porque es el tumor germinal más frecuente. La alfafetoproteína es el dato que lo excluye de forma tajante.',
  dx:['Tumor germinal no seminomatoso extragonadal','Seminoma','Linfoma mediastínico','Timoma'],
  obj:'Usar los marcadores tumorales para clasificar los tumores germinales.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con guías ESMO de tumores germinales.'
},

/* ==================== CARDIOLOGÍA ==================== */
'MIR-2018-M228': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Insuficiencia cardiaca con FE reducida',
  clave:'Sigue en clase III con IECA y betabloqueante a dosis plenas, con potasio y creatinina buenos: toca añadir espironolactona.',
  exp:'El tratamiento de la insuficiencia cardiaca con fracción de eyección reducida sigue una secuencia establecida por su efecto sobre la *mortalidad*. Este paciente ya lleva los dos primeros escalones y a dosis adecuadas: *carvedilol 25 mg cada 12 horas*, que es la dosis diana, y *enalapril 20 mg*, también máxima; la frecuencia de 65 y la tensión de 110/60 confirman que no hay margen para subir más. Sigue sintomático en *clase funcional III*, de modo que corresponde añadir el tercer fármaco pronóstico: un *antagonista del receptor mineralocorticoide*, espironolactona o eplerenona, que reduce mortalidad y hospitalizaciones. Y las condiciones de seguridad se cumplen, que es lo que hay que comprobar siempre antes: *potasio de 3,9*, por debajo de 5, y *creatinina de 1,3*, con filtrado suficiente. Después habrá que vigilar ambos a la semana y al mes. Conviene tener presente que en las guías actuales este escalón convive con los inhibidores de SGLT2 y con la sustitución del IECA por sacubitrilo-valsartán, que ha demostrado superioridad.',
  no:{0:'La ivabradina se indica en ritmo sinusal con frecuencia igual o superior a 70 lpm pese al betabloqueante; aquí está en 65.',1:'El enalapril ya está a dosis máxima de 20 mg al día: no hay margen para subir.',2:'Los inotrópicos intermitentes no mejoran la supervivencia y se reservan para la insuficiencia cardiaca avanzada refractaria.'},
  trampa:'Se intenta subir dosis de lo que ya se toma. Antes de añadir un fármaco hay que verificar que los previos están a dosis diana, y aquí ya lo están.',
  dx:[],
  obj:'Ordenar la secuencia de fármacos con beneficio pronóstico en la insuficiencia cardiaca.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías ESC de insuficiencia cardiaca.'
},
'MIR-2020-M126': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Hipertensión enmascarada',
  clave:'Normal en la consulta y alta en casa: hipertensión ENMASCARADA. La bata blanca es justo lo contrario.',
  exp:'Hay cuatro combinaciones posibles al cruzar la medida en consulta con la ambulatoria y conviene tenerlas ordenadas. Si ambas son normales, el paciente es *normotenso*; si ambas son altas, tiene *hipertensión sostenida*. Si la consulta da cifras altas pero fuera están normales, es la *hipertensión clínica aislada o de bata blanca*. Y si ocurre lo contrario —*normal en la consulta y elevada en el domicilio*, como aquí— se trata de *hipertensión enmascarada*. Es la más peligrosa de las dos formas discordantes precisamente porque *pasa desapercibida*: el paciente no recibe tratamiento y, sin embargo, su riesgo cardiovascular y su daño de órgano diana son comparables a los de la hipertensión sostenida. Se sospecha ante lesión de órgano diana sin hipertensión conocida, en jóvenes, fumadores, obesos y consumidores de alcohol, y se confirma con MAPA o automedida domiciliaria correctamente realizada, que es lo que la paciente ha traído.',
  no:{0:'Nada sugiere causa secundaria: no hay hipopotasemia, ni crisis, ni deterioro renal, ni datos de apnea del sueño.',2:'La hipertensión clínica aislada o de bata blanca es la situación inversa: alta en consulta y normal fuera.',3:'La hipertensión refractaria exige cifras altas pese a tres fármacos, uno de ellos diurético, y esta paciente no toma ninguno.'},
  trampa:'Se confunden bata blanca y enmascarada. Regla: la bata blanca sube la tensión EN la consulta; la enmascarada la esconde en ella.',
  dx:['Hipertensión enmascarada','Hipertensión de bata blanca','Hipertensión sostenida'],
  obj:'Clasificar los fenotipos de hipertensión según la medida clínica y ambulatoria.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con guías ESC/ESH de hipertensión arterial.'
},
'MIR-2020-M129': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Válvula aórtica bicúspide',
  clave:'Estenosis aórtica a los 40 años más RAÍZ DE AORTA DILATADA: válvula bicúspide, la cardiopatía congénita más frecuente.',
  exp:'Dos datos hacen el diagnóstico. El primero es la *edad*: una estenosis aórtica sintomática a los 40 años es demasiado precoz para ser degenerativa —esa aparece a partir de los 70— y demasiado tardía y sin antecedente para una etiología reumática, que además casi siempre acompaña de afectación mitral. La causa habitual de estenosis aórtica entre los 40 y los 65 años es la *válvula bicúspide*, la cardiopatía congénita más frecuente, presente en cerca del 1-2% de la población, que se estenosa antes porque su geometría anómala somete a las valvas a un estrés mecánico continuo. El segundo dato es la *dilatación de la raíz aórtica*, que no es una consecuencia hemodinámica sino la expresión de una *aortopatía asociada*: la bicúspide se acompaña de una alteración intrínseca de la pared aórtica, con riesgo de aneurisma y de disección, y por eso obliga a vigilar la aorta ascendente aunque la válvula se corrija. La clínica es la típica: disnea de esfuerzo progresiva, soplo sistólico rudo irradiado a carótidas y ápex, e hipertrofia ventricular en el electrocardiograma.',
  no:{1:'La comunicación interventricular produce un soplo HOLOSISTÓLICO en borde esternal izquierdo bajo, no un soplo eyectivo irradiado a carótidas.',2:'La insuficiencia aórtica daría un soplo DIASTÓLICO y presión diferencial amplia, no un soplo sistólico rudo.',3:'La miocardiopatía restrictiva cursa con signos de congestión e insuficiencia cardiaca con fracción conservada, sin soplo eyectivo ni raíz aórtica dilatada.'},
  trampa:'Se atribuye la dilatación de la aorta a la estenosis, como si fuera solo dilatación postestenótica. En la bicúspide hay además una enfermedad propia de la pared aórtica.',
  dx:['Válvula aórtica bicúspide estenótica','Estenosis aórtica degenerativa','Estenosis aórtica reumática','Miocardiopatía hipertrófica'],
  obj:'Sospechar válvula bicúspide ante estenosis aórtica precoz con dilatación de la raíz aórtica.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con guías ESC/EACTS de valvulopatías.'
},

/* ==================== NEUROLOGÍA Y PSIQUIATRÍA ==================== */
'MIR-2018-M234': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Brote de esclerosis múltiple',
  clave:'Brote agudo e incapacitante de esclerosis múltiple: corticoides intravenosos a dosis altas. Los demás son tratamientos de fondo.',
  exp:'Hay que separar dos cosas que se confunden a menudo. El *tratamiento del brote* busca acortar el episodio agudo y acelerar la recuperación, y consiste en *metilprednisolona intravenosa a dosis altas*, típicamente un gramo al día durante tres a cinco días; se indica cuando el brote es incapacitante, como esta ataxia de cuatro días de evolución, y si no responde se recurre a la plasmaféresis. El *tratamiento modificador de la enfermedad* es otra cosa: se administra de forma crónica para reducir la frecuencia de brotes y la progresión, y ahí entran el interferón beta, el acetato de glatirámero, el *fingolimod*, la teriflunomida, el dimetilfumarato, el natalizumab o el ocrelizumab. Ninguno de ellos actúa sobre el episodio agudo, así que iniciarlos en urgencias no resuelve nada, aunque después haya que replantear el tratamiento de fondo si el paciente está teniendo brotes. Las inmunoglobulinas no tienen papel en el brote de esclerosis múltiple, a diferencia de lo que ocurre en el Guillain-Barré.',
  no:{0:'Las inmunoglobulinas no están indicadas en el brote agudo de esclerosis múltiple.',2:'El fingolimod es un modificador de la enfermedad de administración crónica, sin efecto sobre el brote actual.',3:'El interferón beta también es tratamiento de fondo, no del episodio agudo.'},
  trampa:'Se elige el fármaco "de la esclerosis múltiple" sin distinguir agudo de crónico. La pregunta era qué hacer HOY en urgencias.',
  dx:['Brote de esclerosis múltiple','Ataxia cerebelosa aguda','Ictus de fosa posterior'],
  obj:'Distinguir el tratamiento del brote del tratamiento modificador de la enfermedad.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías ECTRIMS/EAN sobre esclerosis múltiple.'
},
'MIR-2019-M120': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Angiopatía amiloide cerebral',
  clave:'Hematomas LOBARES y MÚLTIPLES en un anciano con deterioro cognitivo: angiopatía amiloide, no hipertensiva.',
  exp:'La *localización* del sangrado es lo que orienta la causa, y es un par que conviene fijar. La hemorragia *hipertensiva* asienta en estructuras *profundas* —putamen, tálamo, protuberancia y cerebelo— porque afecta a las arterias perforantes sometidas a alta presión, y suele ser única. La *angiopatía amiloide* deposita beta-amiloide en la pared de las arterias *leptomeníngeas y corticales*, de modo que sus hemorragias son *lobares*, superficiales, de predominio en lóbulos occipitales y parietales, con frecuencia *múltiples y recurrentes*, y en un paciente *anciano*. Aquí hay *dos hematomas lobares simultáneos*, frontal y occipital, en un hombre de 79 años con *deterioro cognitivo* previo, asociación esperable porque la angiopatía amiloide comparte mecanismo con la enfermedad de Alzheimer. La cifra tensional de 190/85 en el momento agudo es reactiva y no debe hacer cambiar el razonamiento. La resonancia con secuencias de susceptibilidad magnética muestra los microsangrados corticales característicos, y el diagnóstico tiene una consecuencia práctica importante: la anticoagulación queda desaconsejada por el alto riesgo de resangrado.',
  no:{0:'La hemorragia hipertensiva es típicamente ÚNICA y de localización profunda; la tensión alta aquí es reactiva al sangrado.',2:'Un tumor sangrante daría una lesión única con edema desproporcionado y realce tras contraste.',3:'Las malformaciones arteriovenosas sangran en pacientes jóvenes y no producen hematomas lobares múltiples y simultáneos en un anciano.'},
  trampa:'La tensión de 190/85 empuja hacia la causa hipertensiva. En la fase aguda de cualquier hemorragia la tensión sube: lo que decide es dónde está el hematoma.',
  dx:['Angiopatía amiloide cerebral','Hemorragia hipertensiva','Tumor sangrante','Malformación arteriovenosa'],
  obj:'Diferenciar la hemorragia lobar amiloide de la hemorragia profunda hipertensiva.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con los criterios de Boston modificados y Harrison, 21.ª ed.'
},
'MIR-2019-M135': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Síndrome de Guillain-Barré',
  clave:'En el Guillain-Barré los CORTICOIDES NO son eficaces. El tratamiento es inmunoglobulina intravenosa o plasmaféresis.',
  exp:'El caso es un Guillain-Barré de libro: debilidad ascendente de tres días con *arreflexia global* y una punción lumbar con *disociación albuminocitológica* —proteínas de 97 con solo 3 células—, que es el hallazgo característico. Los tres primeros enunciados son ciertos y merecen repasarse: el cuadro es efectivamente una *polirradiculoneuropatía autoinmune* postinfecciosa; la *parálisis facial*, a menudo bilateral, aparece en un porcentaje muy alto de los casos, en torno a la mitad; y la *disautonomía* —arritmias, oscilaciones tensionales, retención urinaria, íleo— es frecuente en las formas graves y una de las principales causas de muerte junto con el fallo respiratorio. La afirmación falsa es la del tratamiento: los *corticoides no han demostrado eficacia* en el Guillain-Barré, ni orales ni intravenosos, a diferencia de lo que ocurre en la forma crónica, la polirradiculoneuropatía desmielinizante inflamatoria crónica, donde sí funcionan. El tratamiento son las *inmunoglobulinas intravenosas* o la *plasmaféresis*, equivalentes en eficacia y no combinables, junto con la vigilancia estrecha de la capacidad vital.',
  no:{0:'Es cierto: se trata de una polirradiculoneuropatía autoinmune desmielinizante aguda.',1:'Es cierto: la parálisis facial, con frecuencia bilateral, aparece en alrededor de la mitad de los casos.',2:'Es cierto: la disautonomía es frecuente en las formas graves y contribuye a la mortalidad.'},
  trampa:'Se asume que todo lo autoinmune responde a corticoides. Es la excepción clásica: en el Guillain-Barré agudo no sirven, en su forma crónica sí.',
  dx:['Síndrome de Guillain-Barré','Mielitis transversa','Miastenia gravis','Botulismo'],
  obj:'Recordar que los corticoides no son eficaces en el Guillain-Barré agudo.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con revisiones Cochrane sobre Guillain-Barré.'
},
'MIR-2019-M92': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Neuropatía femoral',
  clave:'Fallo para flexionar la cadera Y extender la rodilla, con disestesias en cara ANTERIOR del muslo: nervio femoral.',
  exp:'La exploración localiza el nervio con precisión. El *nervio femoral*, que nace de L2, L3 y L4, inerva el *psoas ilíaco* —flexor de la cadera— y el *cuádriceps* —extensor de la rodilla—, y recoge la sensibilidad de la cara *anterior del muslo* y, a través del safeno, de la cara medial de la pierna. La combinación de esos tres déficits solo la produce una lesión femoral. El contexto también encaja: es una complicación conocida de la *cirugía ginecológica y pélvica*, por compresión del nervio con los separadores autoestáticos contra la pared pélvica, o por la posición de litotomía forzada y prolongada, con la cadera en flexión, abducción y rotación externa. Clínicamente el paciente refiere que *la pierna le falla al apoyar*, porque sin cuádriceps la rodilla se vence, y el reflejo rotuliano está abolido. El pronóstico suele ser bueno con fisioterapia, aunque la recuperación puede llevar meses.',
  no:{1:'La meralgia parestésica del femorocutáneo es puramente SENSITIVA, afecta a la cara lateral del muslo y no produce debilidad.',2:'El nervio obturador inerva los aductores y da sensibilidad en la cara MEDIAL del muslo, no la anterior.',3:'El nervio ciático produce déficit distal, en pierna y pie, con afectación de la dorsiflexión o la flexión plantar.'},
  trampa:'Se piensa en meralgia parestésica por ser la complicación de decúbito más conocida. Pero la meralgia no da debilidad, y aquí hay pérdida de fuerza clara.',
  dx:['Neuropatía femoral','Meralgia parestésica','Radiculopatía L4','Plexopatía lumbar'],
  obj:'Localizar la lesión del nervio femoral por su patrón motor y sensitivo.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y textos de neurología periférica.'
},
'MIR-2019-M85': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Delirium frente a demencia',
  clave:'Lo que separa el delirium de la demencia es la FLUCTUACIÓN del nivel de alerta a lo largo del día.',
  exp:'El delirium y la demencia comparten muchos síntomas —desorientación, fallos de memoria, agitación e incluso alucinaciones visuales— y por eso hay que apoyarse en lo que *no comparten*. El rasgo definitorio del delirium es la *alteración fluctuante de la atención y del nivel de conciencia*: el paciente pasa de estar agitado a estar somnoliento y desatento en cuestión de horas, con empeoramiento vespertino, exactamente como se describe. La demencia, en cambio, cursa con el *nivel de alerta conservado* y un deterioro estable y lentamente progresivo. Los otros dos criterios que completan el diagnóstico son el *inicio agudo*, en horas o días, y la existencia de una *causa orgánica* —infección, fármacos, deshidratación, dolor, retención urinaria, alteraciones metabólicas—, que hay que buscar siempre porque el delirium es un síntoma, no un diagnóstico final. Las alucinaciones visuales son frecuentes en el delirium pero también en la demencia por cuerpos de Lewy, así que no discriminan; y la agitación puede darse en ambos, sin olvidar que existe una forma *hipoactiva*, más frecuente y peor detectada.',
  no:{0:'Las alucinaciones visuales aparecen también en la demencia por cuerpos de Lewy: no separan un cuadro del otro.',1:'Los síntomas cognitivos están presentes en ambos: es lo que hace difícil el diagnóstico diferencial.',2:'La agitación puede darse en ambos, y de hecho existe un delirium hipoactivo sin agitación alguna.'},
  trampa:'Se busca el síntoma más llamativo. El diagnóstico se apoya en la atención y el nivel de alerta, que son justo lo que hay que explorar de forma seriada.',
  dx:['Delirium','Demencia','Demencia por cuerpos de Lewy','Trastorno psicótico'],
  obj:'Usar la fluctuación de la atención y del nivel de alerta para diagnosticar el delirium.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con los criterios DSM-5-TR y el método CAM.'
},
'MIR-2018-M232': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Agorafobia',
  clave:'Miedo a un lugar del que no se puede escapar o donde nadie podría ayudarle si le pasa algo: agorafobia.',
  exp:'El núcleo de la agorafobia no es el metro en sí, sino *el temor a quedar atrapado o desamparado* en una situación de la que sería difícil escapar o donde no habría ayuda disponible si apareciera un síntoma incapacitante. Eso es exactamente lo que verbaliza el paciente: teme que le repita el episodio vasovagal *y que nadie pueda ayudarle*. Las situaciones típicas son el transporte público, los espacios abiertos o cerrados, las colas y multitudes, y estar solo fuera de casa. El cuadro suele desencadenarse, como aquí, tras un *episodio inicial* —una crisis de pánico o un síncope— y se mantiene por la *evitación*, que alivia a corto plazo pero refuerza el miedo. El paciente conserva la *conciencia de que el miedo es desproporcionado*, rasgo que separa la fobia del delirio. El tratamiento de elección es la *terapia cognitivo-conductual con exposición gradual*, apoyada si hace falta con un ISRS.',
  no:{0:'No hay trastorno psicótico: el paciente reconoce que su miedo no está justificado, es decir, mantiene el juicio de realidad.',1:'La ansiedad generalizada es una preocupación difusa y persistente sobre múltiples ámbitos, no un miedo circunscrito a una situación concreta.',3:'En la fobia social el temor es al escrutinio y a la evaluación negativa por parte de otros, no a no poder escapar ni recibir ayuda.'},
  trampa:'Se traduce agorafobia como "miedo a los espacios abiertos". Su verdadero núcleo es el miedo a no poder escapar ni ser socorrido.',
  dx:['Agorafobia','Trastorno de pánico','Fobia específica','Fobia social'],
  obj:'Definir la agorafobia por el temor a no poder escapar o recibir ayuda.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con los criterios DSM-5-TR.'
},

/* ==================== HEMATOLOGÍA Y REUMATOLOGÍA ==================== */
'MIR-2018-M96': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Esferocitosis hereditaria',
  clave:'Hemólisis con CHCM ALTA (38): esferocitosis hereditaria. Es la única anemia que sube la concentración de hemoglobina corpuscular.',
  exp:'El dato que resuelve el caso pasa desapercibido con facilidad: una *CHCM de 38 g/dL*, es decir, elevada. La concentración corpuscular media de hemoglobina casi nunca sube; solo lo hace cuando el hematíe *pierde membrana y se deshidrata*, concentrando su hemoglobina en un volumen menor, que es precisamente lo que ocurre en la *esferocitosis hereditaria* por defecto de las proteínas del citoesqueleto —espectrina, anquirina, banda 3—. El resto encaja perfectamente: *hemólisis* con reticulocitos del 10%, LDH de 500 y bilirrubina indirecta alta; *esplenomegalia*, porque el bazo es donde se destruyen los esferocitos; y sobre todo *colelitiasis a los 40 años*, ya que la hemólisis crónica genera cálculos de bilirrubinato desde joven y es a menudo la forma de presentación. Se confirma con la prueba de fragilidad osmótica o con la citometría de unión a eosina-5-maleimida, y el tratamiento de las formas moderadas o graves es la esplenectomía, con vacunación previa frente a gérmenes encapsulados.',
  no:{1:'La drepanocitosis cursa con crisis vasooclusivas dolorosas y drepanocitos en el frotis, no con CHCM elevada aislada.',2:'La anemia hemolítica autoinmune tendría Coombs positivo y no eleva la CHCM.',3:'La anemia sideroblástica es hipocroma con sideroblastos en anillo: no es hemolítica y no cursa con reticulocitosis.'},
  trampa:'Se pasa por alto la CHCM porque casi nunca se mira. Es el único parámetro del hemograma que apunta directamente a la esferocitosis.',
  dx:['Esferocitosis hereditaria','Anemia hemolítica autoinmune','Déficit de G6PD','Talasemia'],
  obj:'Reconocer la CHCM elevada como marcador de esferocitosis hereditaria.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2019-M107': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Trombocitopenia inmune primaria',
  clave:'Trombopenia AISLADA con plaquetas grandes, sin anemia ni esquistocitos y con coagulación normal: trombocitopenia inmune primaria.',
  exp:'Lo que define a la trombocitopenia inmune primaria es que la alteración está *aislada*: las plaquetas son de 6.000 pero la *hemoglobina y los leucocitos son normales*, la *coagulación es normal* y no hay esplenomegalia. El frotis aporta la confirmación morfológica: las *plaquetas son de tamaño aumentado*, porque la médula responde produciendo plaquetas jóvenes y grandes mientras el bazo destruye las circulantes recubiertas de autoanticuerpos frente a la glicoproteína IIb/IIIa. La clínica es puramente *mucocutánea* —epistaxis y equimosis—, como corresponde a un defecto de la hemostasia primaria. Es un *diagnóstico de exclusión*: hay que descartar fármacos, VIH, virus C, Helicobacter, lupus y síndromes linfoproliferativos. Y una idea clave para el tratamiento: la decisión de tratar depende del *sangrado* más que de la cifra, aunque plaquetas por debajo de 20.000 o 30.000 con hemorragia activa indican corticoides o inmunoglobulinas; el aspirado medular no es necesario en un paciente joven con presentación típica.',
  no:{0:'La púrpura trombótica trombocitopénica cursa con anemia hemolítica microangiopática, esquistocitos y clínica neurológica, ausentes aquí.',1:'La coagulación intravascular diseminada altera las pruebas de coagulación y consume fibrinógeno; aquí la coagulación es normal.',2:'La trombocitopenia asociada a infección requeriría un contexto infeccioso, y el paciente está afebril y sin antecedentes.'},
  trampa:'Se buscan causas graves ante una cifra tan baja. Cuando la trombopenia es aislada y las plaquetas son grandes, lo más probable es lo inmune.',
  dx:['Trombocitopenia inmune primaria','Púrpura trombótica trombocitopénica','Leucemia aguda','Pseudotrombopenia por EDTA'],
  obj:'Diagnosticar la trombocitopenia inmune primaria por exclusión y por el frotis.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con guías ASH sobre trombocitopenia inmune.'
},
'MIR-2019-M157': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Anemia hemolítica en el lupus',
  clave:'Para decidir HOY qué hacer con una anemia de 6 con LDH alta hace falta el test de Coombs: si es positiva, corticoides ya.',
  exp:'La pregunta pide el dato que permite tomar la *decisión inmediata*, y eso obliga a fijarse en la urgencia: hemoglobina de *6 g/dL* con taquicardia y palidez, es decir, una anemia grave y sintomática. El perfil es de *hemólisis*: macrocitosis de 105 explicable por reticulocitosis, *LDH de 490* y descenso rápido en tres semanas. El contexto sugiere un *lupus* —artralgias en las manos, rash fotosensible en el escote, leucopenia con linfopenia—, y la anemia hemolítica autoinmune es uno de sus criterios clasificatorios. Ahora bien, los *ANA* y los *anti-DNA* servirán para confirmar y clasificar la enfermedad de base, pero *no cambian lo que hay que hacer esta tarde*. El *test de Coombs directo*, en cambio, sí: si es positivo confirma el mecanismo autoinmune e indica iniciar *corticoides a dosis altas* de inmediato, y además obliga a advertir al banco de sangre, porque los autoanticuerpos dificultan las pruebas cruzadas. Es una prueba rápida, barata y decisiva.',
  no:{0:'La B12 se pediría ante una anemia macrocítica ARREGENERATIVA; aquí la macrocitosis se explica por reticulocitosis y hay datos claros de hemólisis.',1:'Los ANA confirmarán el lupus, pero no determinan el tratamiento urgente de la anemia.',3:'Los anti-DNA sirven para clasificar y para valorar el riesgo de nefritis, no para decidir la conducta inmediata.'},
  trampa:'Se persigue el diagnóstico de la enfermedad de base. La pregunta era qué prueba cambia la conducta INMEDIATA, y esa es el Coombs.',
  dx:['Anemia hemolítica autoinmune','Lupus eritematoso sistémico','Anemia megaloblástica','Microangiopatía trombótica'],
  obj:'Priorizar el test de Coombs ante una anemia hemolítica grave que requiere decisión inmediata.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con los criterios EULAR/ACR de lupus y Harrison, 21.ª ed.'
},

'MIR-2019-M158': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Hipertensión pulmonar en esclerodermia',
  clave:'Esclerodermia LIMITADA con anticentrómero y disnea con auscultación NORMAL: hipertensión arterial pulmonar.',
  exp:'El perfil del paciente lo dice casi todo antes de mirar la clínica: *Raynaud de larga evolución*, telangiectasias, esclerodactilia, reflujo y *anticuerpos anticentrómero* dibujan una *esclerodermia limitada*, la antigua forma CREST. Y cada subtipo de esclerodermia tiene su complicación característica: la *limitada con anticentrómero* se complica con *hipertensión arterial pulmonar*, mientras que la *difusa con anti-Scl-70* se complica con *enfermedad pulmonar intersticial*, y la que lleva *anti-RNA polimerasa III* con crisis renal. Aquí, además, la clínica encaja: disnea progresiva de meses con *auscultación cardiaca y respiratoria completamente normal* y *proBNP elevado*. Esa discordancia es muy característica: no hay crepitantes que sugieran fibrosis, ni ortopnea, ni edemas, ni signos de fallo izquierdo, y sin embargo el ventrículo derecho está sufriendo, y eso lo delata el péptido natriurético. El cribado se hace con *ecocardiograma* y el diagnóstico se confirma con *cateterismo cardiaco derecho*, que es imprescindible antes de tratar con vasodilatadores pulmonares específicos.',
  no:{0:'La enfermedad intersticial daría crepitantes secos en velcro en las bases y se asocia a la forma DIFUSA con anti-Scl-70.',2:'La insuficiencia cardiaca izquierda cursaría con ortopnea, disnea paroxística nocturna, edemas y crepitantes, todos ausentes.',3:'El tromboembolismo es de instauración aguda o subaguda, no de tres meses de progresión lenta.'},
  trampa:'Se piensa en fibrosis pulmonar por ser lo más conocido de la esclerodermia. El anticuerpo y la auscultación normal apuntan al vaso, no al parénquima.',
  dx:['Hipertensión arterial pulmonar','Enfermedad pulmonar intersticial','Insuficiencia cardiaca','Tromboembolismo pulmonar'],
  obj:'Asociar cada subtipo de esclerodermia con su complicación característica.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con guías ESC/ERS de hipertensión pulmonar.'
},
'MIR-2019-M161': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Granulomatosis con poliangeítis',
  clave:'Nódulos pulmonares CAVITADOS con glomerulonefritis: granulomatosis con poliangeítis. El rituximab induce remisión igual que la ciclofosfamida.',
  exp:'El cuadro es un síndrome renopulmonar con un matiz que orienta a la etiología: los *nódulos pulmonares cavitados* son característicos de la *granulomatosis con poliangeítis*, antes llamada de Wegener, y la diferencian de la poliangeítis microscópica, que da hemorragia alveolar difusa sin nódulos. Se acompaña de *glomerulonefritis* con microhematuria y proteinuria, y de un síndrome constitucional con velocidad de sedimentación muy alta. Sobre el tratamiento, la afirmación correcta refleja un cambio importante: el ensayo RAVE demostró que el *rituximab no es inferior a la ciclofosfamida* para inducir la remisión de las formas generalizadas con afectación renal, y es preferible en pacientes jóvenes por preservar la fertilidad y en las recaídas. Los demás enunciados se desmontan así: la *eosinofilia intensa* es propia de la granulomatosis eosinofílica con poliangeítis, la antigua Churg-Strauss, no de esta; *sin tratamiento la mortalidad supera el 80% al año*, de modo que hablar de evolución favorable es lo contrario de la verdad; y en la granulomatosis con poliangeítis los ANCA son mayoritariamente *anti-proteinasa 3 con patrón citoplásmico*, mientras que los anti-mieloperoxidasa dominan en la poliangeítis microscópica.',
  no:{0:'La eosinofilia intensa caracteriza a la granulomatosis eosinofílica con poliangeítis, no a esta entidad.',1:'Sin tratamiento la mortalidad al año supera el 80%: es una enfermedad rápidamente letal.',3:'En la granulomatosis con poliangeítis predominan los ANCA anti-PROTEINASA 3, no los anti-mieloperoxidasa.'},
  trampa:'Se mezclan las tres vasculitis ANCA. Regla útil: nódulos cavitados y PR3 para la granulomatosis; hemorragia alveolar y MPO para la microscópica; asma y eosinofilia para la eosinofílica.',
  dx:['Granulomatosis con poliangeítis','Poliangeítis microscópica','Síndrome de Goodpasture','Tuberculosis'],
  obj:'Reconocer la granulomatosis con poliangeítis y el papel del rituximab en la inducción.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con el ensayo RAVE y las recomendaciones EULAR sobre vasculitis ANCA.'
},
'MIR-2020-M110': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Crisis renal esclerodérmica',
  clave:'Crisis renal esclerodérmica tras corticoides: el anticuerpo asociado es el anti-RNA polimerasa III.',
  exp:'El cuadro es una *crisis renal esclerodérmica*: hipertensión maligna de aparición brusca —200/110 con cefalea intensa— y *deterioro rápido de la función renal* con creatinina de 2,5, en una paciente con esclerodermia incipiente, con Raynaud y con induración cutánea de manos y brazos. Y hay un desencadenante evidente: la *prednisona a 20 mg al día* prescrita poco antes, ya que dosis iguales o superiores a unos 15 mg multiplican el riesgo de esta complicación. El anticuerpo que se asocia de forma más estrecha a la crisis renal es el *anti-RNA polimerasa III*, presente sobre todo en la esclerodermia *difusa* de progresión cutánea rápida, que es justo el perfil de esta paciente; su presencia obliga además a vigilar la tensión arterial de forma estrecha y a buscar neoplasias ocultas, con las que también se ha relacionado. El tratamiento es el *IECA*, captopril de elección, introducido y titulado con rapidez aunque la creatinina empeore inicialmente.',
  no:{1:'Los anticentrómero se asocian a la esclerodermia LIMITADA y a la hipertensión pulmonar, y de hecho tienen menor riesgo de crisis renal.',2:'Los anti-proteinasa 3 corresponden a la granulomatosis con poliangeítis, no a la esclerodermia.',3:'Los anti-PM-Scl se asocian al síndrome de solapamiento con miositis, no a la crisis renal.'},
  trampa:'Se olvida que los corticoides son el desencadenante. En la esclerodermia difusa la prednisona a dosis moderadas no es un tratamiento inocuo.',
  dx:['Crisis renal esclerodérmica','Hipertensión maligna esencial','Vasculitis ANCA','Microangiopatía trombótica'],
  obj:'Asociar el anti-RNA polimerasa III con la crisis renal esclerodérmica.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con recomendaciones EULAR sobre esclerosis sistémica.'
},
'MIR-2020-M121': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Autoanticuerpos en el lupus',
  clave:'Los anti-ADN bicatenario se correlacionan con la NEFRITIS y con la actividad de la enfermedad.',
  exp:'Conviene tener ordenado el mapa de autoanticuerpos del lupus porque cada uno responde a una pregunta distinta. Los *ANA* son el test de *cribado*: aparecen en más del 95% de los pacientes, de modo que un ANA negativo prácticamente descarta el diagnóstico, pero son poco específicos y aparecen en muchas otras situaciones. Los *anti-Sm* son los más *específicos* —casi patognomónicos— aunque poco sensibles, ya que solo los tiene alrededor de un tercio de los pacientes. Y los *anti-ADN bicatenario o nativo* son los que marcan *actividad*: sus títulos suben en los brotes, se asocian a *consumo de complemento* y se correlacionan estrechamente con la *nefritis lúpica*, hasta el punto de que sirven para monitorizar la enfermedad a lo largo del tiempo. En esta paciente, joven, de raza negra y con edemas, oliguria y creatinina de 3, la sospecha de nefritis es alta y el anti-ADN es el anticuerpo que la respalda. Los anticentrómero, por su parte, no pertenecen al lupus sino a la esclerodermia limitada.',
  no:{0:'Los anti-Sm son, precisamente, los MÁS específicos del lupus.',1:'Los anticentrómero son propios de la esclerodermia limitada, no del lupus.',2:'Los ANA se detectan en más del 95% de los pacientes con lupus, no en el 50%.'},
  trampa:'Se confunde especificidad con utilidad. Los anti-Sm confirman el diagnóstico; los anti-ADN son los que dicen cómo va la enfermedad y si el riñón está en riesgo.',
  dx:['Nefritis lúpica','Glomerulonefritis postinfecciosa','Vasculitis ANCA','Microangiopatía trombótica'],
  obj:'Ordenar los autoanticuerpos del lupus según cribado, especificidad y actividad.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con los criterios EULAR/ACR de lupus y Harrison, 21.ª ed.'
},
'MIR-2020-M122': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Arteritis de células gigantes',
  clave:'Arteritis de la temporal: corticoides SIN DEMORA, y el tocilizumab reduce recidivas y dosis acumulada de prednisona.',
  exp:'El diagnóstico es inequívoco: varón mayor de 50 años con *cefalea bitemporal*, *claudicación mandibular* —el síntoma más específico—, *arteria temporal engrosada y sin pulso*, anemia y VSG de 92, y ya con *amaurosis fugaz*, es decir, isquemia ocular incipiente. Ante esa clínica visual hay una regla que no admite excepción: se administran *glucocorticoides a dosis altas de inmediato*, habitualmente bolos intravenosos de metilprednisolona seguidos de prednisona a 1 mg/kg, *sin esperar a la biopsia de la arteria temporal*, que seguirá siendo informativa durante una o dos semanas. El riesgo que se previene es la *ceguera irreversible* por neuropatía óptica isquémica anterior, que puede instaurarse en horas y afectar después al otro ojo. Sobre el resto del tratamiento, la afirmación correcta recoge una novedad consolidada: el *tocilizumab*, un anti-receptor de IL-6, ha demostrado en el ensayo GiACTA que reduce las recidivas y permite ahorrar una cantidad importante de corticoide, lo que importa mucho en pacientes ancianos que de otro modo acumulan meses de prednisona.',
  no:{0:'Los glucocorticoides siguen siendo el tratamiento de primera línea e insustituible en el episodio agudo; el rituximab no tiene papel aquí.',2:'Con clínica isquémica se requieren dosis ALTAS de glucocorticoides, incluso en bolos: limitarlas condenaría al paciente a la ceguera.',3:'El infliximab no ha demostrado eficacia en la arteritis de células gigantes.'},
  trampa:'Se espera a la biopsia para tratar. La biopsia sigue siendo positiva días después del inicio del corticoide; la retina, en cambio, no espera.',
  dx:['Arteritis de células gigantes','Polimialgia reumática','Neuropatía óptica isquémica','Cefalea tensional'],
  obj:'Tratar de inmediato la arteritis de células gigantes y conocer el papel del tocilizumab.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con el ensayo GiACTA y las recomendaciones EULAR.'
},

/* ==================== NEFROLOGÍA Y ENDOCRINOLOGÍA ==================== */
'MIR-2019-M111': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Pielonefritis que no responde',
  clave:'Pielonefritis que no mejora a las 72 horas: hay que buscar obstrucción o absceso, y la primera imagen es la ECOGRAFÍA.',
  exp:'Una pielonefritis no complicada debe mejorar en las primeras *48 a 72 horas* de antibiótico adecuado. Cuando no lo hace —y aquí además la leucocitosis aumenta y la función renal se deteriora— hay que asumir una *complicación*: obstrucción de la vía urinaria con pionefrosis, absceso renal o perirrenal, o pielonefritis enfisematosa. La primera prueba es la *ecografía renal y de vías urinarias*, y las razones son tres: detecta con fiabilidad la *dilatación de la vía*, que es lo urgente porque una obstrucción infectada exige *drenaje inmediato* mediante nefrostomía o catéter doble jota; está disponible de forma rápida y a la cabecera; y, sobre todo, *no requiere contraste yodado*, algo determinante en un paciente cuya creatinina está empeorando. La *TC con contraste* es más sensible para abscesos pequeños y para la extensión perirrenal, y se reserva para cuando la ecografía no aclara la situación o hay sospecha de complicación no drenable por vía percutánea.',
  no:{0:'La TC con contraste es más sensible, pero expone a nefrotoxicidad justo cuando la función renal se está deteriorando.',1:'La urografía intravenosa está en desuso y también emplea contraste yodado.',2:'La resonancia no aporta ventajas en la fase aguda y es menos accesible.'},
  trampa:'Se pide directamente una TC por ser más sensible. En un paciente con creatinina en ascenso, la primera imagen debe ser la que no dañe el riñón.',
  dx:['Pielonefritis complicada','Absceso renal','Obstrucción con pionefrosis','Pielonefritis enfisematosa'],
  obj:'Elegir la ecografía como primera imagen en la pielonefritis que no responde.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con guías IDSA sobre infección urinaria complicada.'
},
'MIR-2019-M153': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Hematuria macroscópica',
  clave:'Hematuria macroscópica INDOLORA en mayor de 50 años: se estudia siempre, y la primera prueba es la ecografía.',
  exp:'La *hematuria macroscópica indolora* en un varón mayor de 50 años es un tumor urotelial mientras no se demuestre lo contrario, y por tanto exige estudio completo aunque haya sido un episodio único y la orina vuelva a ser clara —de hecho la hematuria tumoral es característicamente *intermitente*, y ese respiro engaña—. La secuencia inicial combina *citología urinaria*, *imagen* y, después, *cistoscopia*, que es imprescindible porque la vejiga es la localización más frecuente y las lesiones planas o pequeñas pueden no verse en ninguna imagen. Como primera prueba de imagen se elige la *ecografía renal y vesical*: es inocua, no irradia, no usa contraste y detecta bien masas renales, dilatación de la vía y lesiones vesicales de cierto tamaño. Si la sospecha persiste o la ecografía no aclara, se pasa a la *uro-TC*, que es más sensible sobre todo para el urotelio alto. La urografía intravenosa ha quedado desplazada por la TC y la radiografía simple no aporta prácticamente nada.',
  no:{0:'La urografía intravenosa está desplazada por la uro-TC, más sensible y sin sus limitaciones.',1:'La radiografía simple solo detecta cálculos radiopacos y no valora el urotelio.',3:'La TC es más sensible pero irradia y usa contraste: se reserva como segundo escalón o ante alta sospecha.'},
  trampa:'Se resta importancia porque la orina ya está clara. La hematuria tumoral es intermitente por naturaleza: el episodio hay que estudiarlo igual.',
  dx:['Carcinoma urotelial','Litiasis','Carcinoma renal','Hematuria glomerular'],
  obj:'Estudiar toda hematuria macroscópica indolora y ordenar las pruebas de imagen.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con guías EAU sobre cáncer de vejiga.'
},
'MIR-2018-M94': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Hiperaldosteronismo primario',
  clave:'Cribado positivo con cociente alto e hipopotasemia: se CONFIRMA con sobrecarga salina. Si la aldosterona NO se suprime, es hiperaldosteronismo.',
  exp:'El estudio del hiperaldosteronismo primario tiene tres pasos que no deben saltarse. El *cribado* es el cociente aldosterona/actividad de renina plasmática, que aquí es de 30 y resulta positivo en un contexto muy sugestivo: hipertensión en un varón *joven*, sin antecedentes familiares y con *hipopotasemia* de 2,9. El segundo paso es la *confirmación bioquímica*, porque el cociente por sí solo tiene falsos positivos; se hace con una prueba de supresión, siendo la más habitual la *sobrecarga salina*: en una persona sana la expansión de volumen frena el eje renina-angiotensina y la aldosterona *cae*, mientras que si la secreción es autónoma la aldosterona *no se suprime*, y eso confirma el diagnóstico. El tercer paso, y solo entonces, es la *imagen* con TC suprarrenal, complementada en muchos casos con *cateterismo de venas suprarrenales* para saber si la producción es unilateral —adenoma, tributario de suprarrenalectomía— o bilateral —hiperplasia, tributaria de espironolactona—. Hacer la TC antes de confirmar lleva a operar incidentalomas sin función.',
  no:{0:'Saltar directamente a la TC lleva a decisiones erróneas: los incidentalomas suprarrenales son frecuentes y no siempre son la causa.',1:'Está invertido: en el hiperaldosteronismo la aldosterona NO se suprime con la sobrecarga salina; si se suprimiera, se descartaría.',3:'En la estenosis de arteria renal hay hiperaldosteronismo SECUNDARIO con renina ALTA, de modo que el cociente sería bajo, no de 30.'},
  trampa:'Se confunde el sentido de la prueba de supresión. La lógica es la misma que en cualquier eje: lo autónomo no obedece, y por eso no se suprime.',
  dx:['Hiperaldosteronismo primario','Estenosis de arteria renal','Feocromocitoma','Síndrome de Cushing'],
  obj:'Ordenar cribado, confirmación e imagen en el estudio del hiperaldosteronismo primario.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías de la Endocrine Society.'
},
'MIR-2018-M89': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Hiperlipemia familiar combinada',
  clave:'Hiperlipemia MIXTA, agregación familiar con fenotipos variables, apoB alta y SIN xantomas: hiperlipemia familiar combinada.',
  exp:'Cada dislipemia hereditaria tiene una firma reconocible y aquí conviene compararlas. Este paciente tiene una *hiperlipemia mixta* —colesterol de 276 con LDL de 167 y *triglicéridos de 278*—, *apoB muy elevada* de 180, *sin xantomas* y con una historia familiar de hiperlipemia *mixta* y eventos cardiovasculares en varios miembros. Eso es una *hiperlipemia familiar combinada*, la dislipemia hereditaria más frecuente, cuyo rasgo característico es la *variabilidad de fenotipo* dentro de la misma familia e incluso en el mismo paciente a lo largo del tiempo, con sobreproducción hepática de partículas VLDL ricas en apoB. La *hipercolesterolemia familiar heterocigota* daría un LDL mucho más alto, típicamente por encima de 250 o 300, con triglicéridos normales y *xantomas tendinosos* y arco corneal. La *disbetalipoproteinemia*, ligada al genotipo E2/E2, elevaría colesterol y triglicéridos de forma paralela y produce xantomas palmares estriados, muy característicos. Y el *síndrome metabólico* exigiría más criterios: la tensión es normal y el índice de masa corporal apenas de 27. Lo relevante en la práctica es que ya ha tenido un infarto a los 38 años, de modo que es prevención secundaria y necesita estatina de alta potencia con objetivos de LDL muy exigentes.',
  no:{0:'La hipercolesterolemia familiar heterocigota cursa con LDL mucho más alto, triglicéridos normales y xantomas tendinosos.',1:'La disbetalipoproteinemia eleva colesterol y triglicéridos de forma paralela y produce xantomas palmares estriados.',3:'El síndrome metabólico exigiría más criterios: aquí la tensión es normal y el IMC de 27 es limítrofe.'},
  trampa:'Se responde hipercolesterolemia familiar por el infarto precoz. La presencia de triglicéridos altos y la ausencia de xantomas la descartan.',
  dx:['Hiperlipemia familiar combinada','Hipercolesterolemia familiar','Disbetalipoproteinemia','Síndrome metabólico'],
  obj:'Diferenciar las dislipemias hereditarias por su fenotipo lipídico y sus signos cutáneos.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías ESC/EAS sobre dislipemias.'
},

/* ==================== CIENCIAS BÁSICAS Y TRAUMATOLOGÍA ==================== */
'MIR-2018-M49': {
  esp:'Ciencias Básicas', tema:'Genética', sub:'Riesgo condicionado en herencia recesiva',
  clave:'Se multiplican las tres probabilidades: 1 (ella es portadora) por 1/30 (él lo sea) por 1/4 (que el hijo herede ambos) igual a 1/120.',
  exp:'El cálculo del riesgo en el consejo genético se hace *multiplicando* la probabilidad de cada eslabón de la cadena. Aquí hay tres. El primero es que la *madre sea portadora*: no es una probabilidad, es un hecho conocido, de modo que vale *1*. El segundo es que el *padre sea portador*, y la prevalencia de portadores de mutaciones de CFTR en población caucásica es de *1/30*. El tercero es que, siendo ambos portadores, el hijo herede *las dos copias mutadas*, lo que en una herencia autosómica recesiva ocurre en *1/4* de las gestaciones. El producto es 1 por 1/30 por 1/4, es decir, *1/120*. Esta lógica es la base del cribado de portadores preconcepcional: si el padre se hiciera el estudio genético y resultara negativo, el riesgo caería drásticamente —aunque nunca a cero, porque los paneles no detectan todas las mutaciones—, y si resultara positivo subiría a 1/4.',
  no:{0:'1/90 saldría de multiplicar por 1/3 en algún punto, y no hay ningún eslabón con esa probabilidad.',2:'1/150 no corresponde a ninguna combinación de estos tres factores.',3:'1/180 supondría un tercer factor de 1/6, que tampoco existe aquí.'},
  trampa:'Se olvida uno de los tres eslabones, casi siempre el 1/4 de la transmisión, o se suman las probabilidades en lugar de multiplicarlas.',
  dx:[],
  obj:'Calcular el riesgo condicionado combinando prevalencia de portadores y probabilidad de transmisión.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Thompson y Thompson, Genética en Medicina.'
},
'MIR-2018-M50': {
  esp:'Ciencias Básicas', tema:'Genética', sub:'Herencia mitocondrial',
  clave:'El ADN mitocondrial se hereda SOLO de la madre. Un varón afecto no transmite la enfermedad a ningún hijo.',
  exp:'La neuropatía óptica hereditaria de Leber se debe a mutaciones del *genoma mitocondrial*, y ese genoma tiene una regla de transmisión única: la mitocondria del cigoto procede *exclusivamente del óvulo*, porque las escasas mitocondrias del espermatozoide se degradan tras la fecundación. La consecuencia es tajante: una madre afecta o portadora transmite la mutación a *todos* sus hijos, varones y mujeres; un *padre afecto no la transmite a ninguno*. En este caso el afecto es el varón, de modo que la información correcta es que *ningún descendiente heredará la enfermedad*. Conviene distinguir esta herencia de otras dos con las que se confunde: la *ligada al X recesiva*, en la que el varón afecto transmite el cromosoma X a todas sus hijas, que serán portadoras, y la *holándrica* o ligada al Y, que va de padre a todos los hijos varones. Dos conceptos más completan el cuadro mitocondrial: la *heteroplasmia*, la mezcla de mitocondrias normales y mutadas dentro de una célula, y el *efecto umbral*, que explica por qué la expresión clínica varía tanto entre familiares con la misma mutación.',
  no:{0:'La herencia holándrica es la ligada al cromosoma Y; el ADN mitocondrial no se transmite por vía paterna.',1:'El 50% independiente del sexo corresponde a la herencia autosómica dominante.',2:'Transmitir a todas las hijas y a ningún hijo es el patrón de la herencia ligada al X del varón afecto, no el mitocondrial.'},
  trampa:'Se confunde la herencia mitocondrial con la ligada al X. Ambas dependen del sexo, pero en la mitocondrial es la MADRE la que siempre transmite.',
  dx:[],
  obj:'Aplicar las reglas de la herencia mitocondrial en el consejo genético.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Thompson y Thompson, Genética en Medicina.'
},
'MIR-2018-M36': {
  esp:'Ciencias Básicas', tema:'Anatomía', sub:'Drenaje torácico',
  clave:'Por delante, en el tercer espacio y línea medioclavicular, el drenaje atraviesa la musculatura PECTORAL y llega a la pleura PARIETAL.',
  exp:'La pregunta se resuelve situando el punto de punción y recorriendo los planos en orden. En el *tercer espacio intercostal sobre la línea medioclavicular*, es decir, en la cara *anterior* del tórax, los planos son: *piel*, *tejido celular subcutáneo*, *musculatura pectoral* —pectoral mayor y menor—, *músculos intercostales* externo, interno e íntimo, *fascia endotorácica* y finalmente *pleura parietal*. Ahí acaba el recorrido: el tubo queda en el *espacio pleural* y por eso la *pleura visceral nunca se atraviesa*, ya que perforarla significaría entrar en el pulmón. Los músculos de las otras opciones están todos en la espalda o en la cara lateral: el *dorsal ancho* y el *infraespinoso* son posteriores y el *serrato anterior* es lateral, y aparecería si la punción fuese en el *quinto espacio en línea axilar media*, que es el llamado triángulo de seguridad y la vía preferida hoy para la mayoría de los drenajes. Además, la aguja debe entrar *rozando el borde superior de la costilla inferior*, para no lesionar el paquete vasculonervioso intercostal, que discurre por el borde inferior de la costilla superior.',
  no:{0:'El dorsal ancho es un músculo de la espalda y, además, nunca se atraviesa la pleura visceral: eso sería entrar en el pulmón.',1:'El serrato anterior es lateral: se atravesaría en el abordaje del quinto espacio en línea axilar media.',3:'El infraespinoso es un músculo de la fosa infraespinosa de la escápula, en la espalda.'},
  trampa:'Se elige la pleura visceral por parecer la más profunda. El drenaje se detiene en la cavidad pleural: pasar de ahí es puncionar el pulmón.',
  dx:[],
  obj:'Recorrer los planos anatómicos del drenaje torácico anterior y evitar el paquete intercostal.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Moore, Anatomía con Orientación Clínica, y guías BTS sobre drenaje pleural.'
},
'MIR-2020-M106': {
  esp:'Cirugía', tema:'Traumatología', sub:'Lesión del nervio axilar',
  clave:'Tras luxación de hombro, abducción imposible con manguito íntegro y disestesia en el MUÑÓN del hombro: nervio axilar.',
  exp:'La combinación de hallazgos localiza la lesión sin margen de duda. El *nervio axilar o circunflejo*, rama del fascículo posterior del plexo braquial procedente de C5 y C6, rodea el cuello quirúrgico del húmero y es el que con más frecuencia se lesiona en la *luxación anterior de hombro*, sobre todo en pacientes mayores. Inerva el *deltoides*, principal abductor a partir de los primeros grados, y el redondo menor, y recoge la sensibilidad de una zona muy característica: la *cara lateral del hombro*, el llamado *muñón del hombro*, que es exactamente la región de disestesia descrita. La resonancia demuestra que el *manguito de los rotadores está indemne*, lo que descarta la otra causa habitual de abducción imposible tras una luxación en esta edad. El pronóstico suele ser bueno, ya que la mayoría son neuroapraxias que se recuperan en semanas o meses, pero conviene explorar siempre el axilar *antes y después* de reducir una luxación de hombro, y dejarlo documentado.',
  no:{0:'El redondo mayor no explica una abducción limitada a 15 grados ni la alteración sensitiva.',1:'La capsulitis adhesiva limitaría la movilidad PASIVA y no produce déficit sensitivo.',2:'El nervio supraescapular inerva supraespinoso e infraespinoso y es puramente motor: no da alteración sensitiva cutánea.'},
  trampa:'Se atribuye la limitación a la inmovilización prolongada. La disestesia en el muñón del hombro es el dato que delata al nervio.',
  dx:['Lesión del nervio axilar','Rotura del manguito rotador','Capsulitis adhesiva','Plexopatía braquial'],
  obj:'Reconocer la lesión del nervio axilar tras una luxación de hombro.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Campbell, Cirugía Ortopédica.'
},
'MIR-2020-M119': {
  esp:'Cirugía', tema:'Traumatología', sub:'Síndrome del piramidal',
  clave:'Dolor en la nalga que empeora sentado, con imagen NORMAL y dolor reproducido por la rotación externa resistida: síndrome del piramidal.',
  exp:'El cuadro reúne los rasgos del *síndrome del músculo piriforme o piramidal*: dolor *glúteo* desencadenado tras una sedestación prolongada —el viaje en coche—, que reaparece al sentarse porque el músculo queda comprimido bajo el peso del cuerpo, y *entumecimiento* del miembro inferior que desaparece al levantarse. El mecanismo es la irritación del *nervio ciático* a su paso por debajo o a través del piramidal, es decir, una compresión *extraespinal*. Dos datos lo confirman por exclusión y por provocación. Por exclusión: la *resonancia y la radiografía son normales*, y la *sensibilidad y los reflejos están conservados*, lo que descarta una radiculopatía lumbar, que daría alteración del reflejo aquíleo y déficit sensitivo en un dermatoma. Por provocación: las maniobras de *rotación externa y abducción resistidas con la cadera en flexión* reproducen el dolor porque contraen selectivamente el piramidal, que es rotador externo y abductor de la cadera flexionada. El tratamiento es estiramiento específico, fisioterapia y, si es refractario, infiltración.',
  no:{0:'El choque femoroacetabular da dolor INGUINAL con la flexión, aducción y rotación interna, y suele mostrar alteraciones morfológicas en la imagen.',1:'El síndrome del tensor de la fascia lata produce dolor en la cara LATERAL del muslo y de la rodilla, no en la nalga.',2:'Una radiculopatía S1 alteraría el reflejo aquíleo y la sensibilidad, y aquí ambos son normales.'},
  trampa:'Se etiqueta de ciática lumbar. La resonancia normal y los reflejos conservados obligan a buscar la compresión fuera de la columna.',
  dx:['Síndrome del piramidal','Radiculopatía S1','Choque femoroacetabular','Bursitis trocantérea'],
  obj:'Diagnosticar el síndrome del piramidal por provocación y por exclusión de radiculopatía.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Campbell, Cirugía Ortopédica.'
}

});
