/* ============================================================
   EXPLICACIONES — lote 04  (56 casos clínicos)
   Años 2016 y 2018-2021. El MIR 2017 queda excluido: está en
   cuarentena de cohorte (ver revision-mir.js).

   Se leyeron los 56 y ninguna respuesta oficial resultó
   sospechosa, lo que respalda que el defecto estaba acotado a 2017.

   Varias entradas corrigen además la especialidad o el tema que
   el clasificador automático había asignado mal.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ---------------------- INFECTOLOGÍA ---------------------- */
'MIR-2016-M102': {
  tema:'Infectología',
  clave:'Uretritis sin muestra: hay que cubrir gonococo Y clamidia a la vez.',
  exp:'La uretritis se trata de forma sindrómica cuando no se puede tomar muestra, porque la coinfección por Neisseria gonorrhoeae y Chlamydia trachomatis es muy frecuente y no se distinguen con fiabilidad por la clínica. Se combina una cefalosporina —cefixima oral o, mejor, ceftriaxona intramuscular— para el gonococo, con doxiciclina o azitromicina para la clamidia. Cubrir solo uno de los dos deja la mitad del problema sin tratar.',
  no:{0:'La penicilina benzatina trata la sífilis, no la uretritis gonocócica, frente a la que el gonococo es resistente.',2:'La clindamicina no cubre clamidia y la espectinomicina es una alternativa antigua y poco disponible.',3:'El metronidazol cubriría Trichomonas, pero deja sin tratar la clamidia, que es la coinfección clásica.'},
  trampa:'Elegir un solo antibiótico. En la uretritis la regla es cubrir siempre los dos agentes, aunque solo se sospeche uno.',
  dx:['Uretritis gonocócica','Uretritis por Chlamydia','Uretritis por Trichomonas','Uretritis por Mycoplasma genitalium'],
  obj:'Aplicar el tratamiento sindrómico doble de la uretritis.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de los CDC sobre infecciones de transmisión sexual.'
},
'MIR-2016-M114': {
  tema:'Otorrinolaringología',
  clave:'Otorrea fétida crónica con perforación ática y erosión ósea del techo: colesteatoma.',
  exp:'La perforación ática con otorrea fétida de años y erosión del tegmen timpánico define un colesteatoma, que destruye hueso por crecimiento y presión. La resonancia magnética con secuencias de difusión no eco-planares es la técnica que lo identifica: el colesteatoma restringe la difusión y se distingue del tejido inflamatorio o de la fibrosis, algo que la tomografía no puede hacer.',
  no:{1:'La timpanotomía exploradora es una intervención quirúrgica: no se opera para diagnosticar cuando existe una prueba de imagen que lo resuelve.',2:'El cultivo identificaría el germen sobreinfectante, pero no cambia el diagnóstico ni la indicación quirúrgica.',3:'La gammagrafía ósea es inespecífica y no diferencia colesteatoma de inflamación.'},
  trampa:'La tomografía ya mostró la erosión y parece suficiente. Muestra el daño óseo, pero no distingue qué tejido lo está causando.',
  dx:['Colesteatoma','Otitis media crónica simple','Granuloma de colesterol','Neoplasia del oído medio'],
  obj:'Elegir la resonancia con difusión para caracterizar el colesteatoma.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la European Academy of Otology sobre colesteatoma.'
},
'MIR-2018-M105': {
  clave:'Sífilis con UVEÍTIS: la afectación ocular se trata como neurosífilis.',
  exp:'La uveítis sifilítica se considera una manifestación de neurosífilis, porque el ojo comparte compartimento con el sistema nervioso central. Eso obliga a tratar con penicilina G acuosa intravenosa en dosis altas durante 10 a 14 días, no con la pauta intramuscular de la sífilis precoz. La penicilina benzatina no alcanza concentraciones treponemicidas en líquido cefalorraquídeo ni en el ojo.',
  no:{0:'Esa es la pauta de la sífilis primaria, secundaria o latente precoz sin afectación neurológica ni ocular.',1:'Las tres dosis semanales corresponden a la sífilis latente tardía o de duración desconocida, también sin afectación ocular.',3:'La punción lumbar puede realizarse, pero no debe retrasar el tratamiento: la afectación ocular ya define por sí sola la conducta.'},
  trampa:'Se estadifica la sífilis por el tiempo transcurrido y se olvida que la afectación ocular o neurológica cambia la pauta con independencia del estadio.',
  dx:['Neurosífilis ocular','Sífilis secundaria','Uveítis autoinmune','Toxoplasmosis ocular'],
  obj:'Tratar la sífilis ocular con la pauta de neurosífilis.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías de los CDC sobre sífilis.'
},
'MIR-2018-M174': {
  clave:'Catéter central con nutrición parenteral, fiebre y pérdida brusca de visión: candidemia con siembra ocular.',
  exp:'La nutrición parenteral por vía central es el factor de riesgo clásico de candidemia. Candida tiene tropismo por la coroides y la retina, y produce endoftalmitis en una proporción relevante de los casos. Por eso ante toda candidemia se recomienda exploración oftalmológica: la afectación ocular obliga a prolongar el tratamiento antifúngico y a elegir fármacos con penetración vítrea.',
  no:{1:'La retinitis por citomegalovirus aparece en inmunodeprimidos graves, sobre todo con VIH y CD4 muy bajos, y su curso es subagudo.',2:'Las micobacterias no producen este cuadro agudo asociado a catéter.',3:'Pseudomonas puede causar bacteriemia por catéter, pero la siembra ocular es característica de Candida.'},
  trampa:'La pérdida de visión se estudia por separado, como un problema oftalmológico aislado, sin relacionarla con la fiebre y el catéter.',
  dx:['Candidemia con endoftalmitis','Bacteriemia por catéter','Retinitis por citomegalovirus','Endocarditis con embolia séptica'],
  obj:'Asociar candidemia por catéter con endoftalmitis y explorar el fondo de ojo.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías IDSA sobre candidiasis.'
},
'MIR-2018-M180': {
  esp:'Pediatría', tema:'Infectología',
  clave:'Abscesos por enterobacterias, nocardiosis, tuberculosis y granulomas intestinales, con anticuerpos normales.',
  exp:'La enfermedad granulomatosa crónica es un defecto de la NADPH oxidasa del fagocito: la célula engulle al germen pero no puede destruirlo. Eso explica el patrón de infecciones por catalasa positivos —Staphylococcus, Serratia, Nocardia, Aspergillus— y la formación de granulomas, que pueden producir un cuadro intestinal indistinguible de una enfermedad de Crohn, con fístula perianal incluida. La respuesta vacunal conservada descarta un defecto humoral. Se diagnostica con la prueba de dihidrorrodamina.',
  no:{1:'La inmunodeficiencia variable común cursa con hipogammaglobulinemia y mala respuesta vacunal, y aquí la respuesta a las vacunas es adecuada.',2:'La ataxia-telangiectasia asocia ataxia cerebelosa y telangiectasias oculocutáneas, ausentes en la exploración.',3:'Ese síndrome no explica el patrón de infecciones por catalasa positivos.'},
  trampa:'La diarrea con fístula perianal y los ASCA positivos empujan hacia un Crohn puro. La historia infecciosa previa es lo que revela el defecto inmunitario de base.',
  dx:['Enfermedad granulomatosa crónica','Enfermedad de Crohn','Inmunodeficiencia común variable','Déficit de adhesión leucocitaria'],
  obj:'Reconocer el patrón infeccioso de la enfermedad granulomatosa crónica.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., inmunodeficiencias primarias.'
},
'MIR-2018-M176': {
  esp:'Pediatría', tema:'Alergia',
  clave:'Los síntomas empiezan a los 30 minutos del PRIMER biberón, en un lactante con lactancia materna exclusiva hasta hoy.',
  exp:'La relación temporal lo resuelve: vómitos, eritema generalizado, irritabilidad y decaimiento media hora después de la primera exposición a proteína de leche de vaca. Es una reacción mediada por IgE frente a las proteínas lácteas, que aparece en la primera toma porque el lactante ya se había sensibilizado a través de la leche materna. La conducta es retirar la fórmula, volver a lactancia materna exclusiva o pasar a un hidrolizado extenso, y derivar a alergología.',
  no:{0:'Una viriasis no empieza treinta minutos después de un biberón ni produce eritema generalizado de golpe.',1:'La invaginación cursa con dolor cólico intermitente y heces en jalea de grosella, no con eritema cutáneo.',2:'Un golpe de calor no se desencadena con una toma ni produce eritema generalizado con vómitos en media hora; además el niño no tiene exposición térmica descrita.'},
  trampa:'El verano y los vómitos empujan hacia el golpe de calor o la gastroenteritis. El dato que manda es que fue la PRIMERA toma de fórmula y que los síntomas llegaron en minutos.',
  dx:['Alergia a proteínas de leche de vaca mediada por IgE','Gastroenteritis aguda','Golpe de calor','Invaginación intestinal'],
  obj:'Leer la relación temporal entre la exposición alimentaria y el inicio de los síntomas.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed. y las guías ESPGHAN sobre alergia a proteínas de leche de vaca.'
},

'MIR-2018-M222': {
  tema:'Urgencias',
  clave:'Se pide la FALSA. En la intoxicación por Amanita phalloides los síntomas ceden y vuelven: es la fase de latencia.',
  exp:'La intoxicación por amatoxinas tiene un periodo de incubación LARGO, de más de 6 horas, seguido de una fase gastrointestinal intensa y después de una fase de aparente mejoría de 24 a 48 horas. Durante esa calma engañosa la toxina está destruyendo el hepatocito, y después aparece el fallo hepático fulminante. Que los síntomas hayan desaparecido no descarta nada: es exactamente lo que se espera.',
  no:{0:'Es cierta: el hábitat y el tipo de bosque orientan a las especies posibles.',1:'Es cierta: la cantidad de amatoxina ingerida se relaciona con la gravedad.',3:'Es cierta y es la regla clave: los síndromes de latencia CORTA, menos de 6 horas, son en general leves; los de latencia LARGA son los potencialmente letales.'},
  trampa:'La mejoría clínica tranquiliza y el paciente se va a casa. Es la trampa central de esta intoxicación y la razón de su mortalidad.',
  dx:['Intoxicación por amatoxinas','Síndrome gastrointestinal por setas','Gastroenteritis aguda'],
  obj:'Interpretar el periodo de latencia como marcador de gravedad en la intoxicación por setas.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Goldfrank, Toxicologic Emergencies.'
},

/* ---------------------- NEFROLOGÍA Y UROLOGÍA ---------------------- */
'MIR-2018-M135': {
  clave:'Fracaso renal agudo al mes de empezar un ARA-II, con riñones ASIMÉTRICOS.',
  exp:'La diferencia de tamaño entre ambos riñones en un arterioso con claudicación intermitente apunta a estenosis de arteria renal. En ese contexto el filtrado glomerular depende de la vasoconstricción de la arteriola eferente mediada por angiotensina II; al bloquearla con un ARA-II o un IECA, la presión de filtración se desploma y aparece fracaso renal agudo. La conducta es suspender el bloqueador del eje, sustituirlo por un antihipertensivo que no dependa de él, tratar la hiperpotasemia y confirmar con eco-doppler renal.',
  no:{0:'SUBIR el valsartán es exactamente lo contrario de lo indicado: profundizaría el fracaso renal.',2:'Mismo error: mantener o subir el ARA-II ante una estenosis de arteria renal.',3:'El captopril sublingual es también un bloqueador del eje y agravaría el cuadro; además la diálisis urgente no está justificada de entrada.'},
  trampa:'Se ve la presión de 215/105 y el reflejo es subir el antihipertensivo. Precisamente ese fármaco es el que ha provocado el fracaso renal.',
  dx:['Estenosis de arteria renal','Nefroangiosclerosis','Nefropatía isquémica','Glomerulonefritis'],
  obj:'Reconocer el fracaso renal por bloqueo del eje en la estenosis de arteria renal.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., hipertensión renovascular.'
},
'MIR-2018-M136': {
  clave:'Se pide la EXCEPCIÓN. El salbutamol es un broncodilatador inhalado, sin nefrotoxicidad intersticial descrita.',
  exp:'La nefritis tubulointersticial aguda es una reacción de hipersensibilidad, no un efecto dosis-dependiente. Los fármacos implicados con más frecuencia son los antiinflamatorios no esteroideos, los betalactámicos, las sulfamidas, los inhibidores de la bomba de protones, la rifampicina y el alopurinol. El salbutamol inhalado no figura entre ellos: su acción es local sobre el receptor beta-2 bronquial, con absorción sistémica escasa.',
  no:{0:'Los antiinflamatorios no esteroideos son una de las causas más frecuentes.',2:'Las sulfamidas son un desencadenante clásico de nefritis intersticial alérgica.',3:'El alopurinol puede producir reacciones de hipersensibilidad graves, incluida la nefritis intersticial.'},
  trampa:'Se busca el fármaco "más peligroso" en abstracto en vez de recordar la lista concreta de los que producen esta reacción.',
  dx:['Nefritis tubulointersticial aguda medicamentosa'],
  obj:'Conocer los fármacos que causan nefritis intersticial aguda.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., enfermedades tubulointersticiales.'
},
'MIR-2018-M143': {
  tema:'Urología',
  clave:'Pielonefritis de repetición con hidronefrosis: hay que demostrar el reflujo, y eso solo lo hace la cistografía.',
  exp:'La cistouretrografía miccional seriada es la prueba de referencia para diagnosticar y graduar el reflujo vesicoureteral: se llena la vejiga con contraste y se obtienen imágenes durante la micción, que es cuando el reflujo se produce. Ninguna otra prueba lo demuestra de forma directa. La ecografía sugiere la sospecha al mostrar la dilatación, pero no confirma el reflujo.',
  no:{0:'La resonancia informa de la anatomía pero no del flujo retrógrado durante la micción.',2:'La radiografía simple solo mostraría cálculos radiopacos.',3:'La cistoscopia visualiza los meatos ureterales pero no documenta el reflujo.'},
  trampa:'Se piensa en la prueba más moderna o más completa. El reflujo es un fenómeno dinámico y necesita una prueba dinámica.',
  dx:['Reflujo vesicoureteral','Estenosis de la unión pieloureteral','Vejiga neurógena','Infección urinaria recurrente'],
  obj:'Elegir la cistouretrografía miccional para documentar el reflujo vesicoureteral.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías de la European Association of Urology sobre urología pediátrica.'
},
'MIR-2018-M144': {
  tema:'Urología',
  clave:'Se pide lo que NO se aconseja. Restringir el calcio de la dieta AUMENTA la litiasis de oxalato.',
  exp:'Parece contraintuitivo, pero está bien establecido: el calcio de la dieta se une al oxalato en la luz intestinal y forma un complejo que se elimina con las heces. Si se restringe el calcio, queda más oxalato libre para absorberse, aumenta la oxaluria y se forman más cálculos. La recomendación es mantener una ingesta normal de calcio y actuar sobre lo que sí ayuda: mucho líquido, menos sal, menos proteína animal y pérdida de peso.',
  no:{0:'Bajar de peso es adecuado: la obesidad se asocia a hipercalciuria y a orina más ácida.',1:'La diuresis superior a 2 litros al día es la medida individual más eficaz para prevenir recidivas.',3:'Limitar la proteína animal reduce la carga ácida, la calciuria y la uricosuria.'},
  trampa:'Es el error más extendido en la litiasis cálcica: quitar el calcio de la dieta. Consigue exactamente lo contrario de lo que se busca.',
  dx:['Litiasis cálcica de oxalato','Hipercalciuria idiopática','Hiperoxaluria entérica'],
  obj:'Entender por qué el calcio de la dieta protege frente a la litiasis de oxalato.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías de la European Association of Urology sobre urolitiasis.'
},
'MIR-2018-M155': {
  tema:'Neumología',
  clave:'Tromboembolia pulmonar con hipotensión y necesidad de vasopresor: es de ALTO RIESGO.',
  exp:'La tromboembolia de alto riesgo se define por inestabilidad hemodinámica, y es la única situación en que la fibrinólisis sistémica está indicada de entrada: disuelve el trombo con rapidez, descarga el ventrículo derecho y mejora la hemodinámica en horas. La heparina sola es demasiado lenta en este escenario, porque no lisa el trombo ya formado, solo impide que crezca.',
  no:{0:'La heparina es el tratamiento del paciente estable y debe administrarse, pero por sí sola no revierte con rapidez el shock obstructivo.',1:'La tromboendarterectomía quirúrgica corresponde a la hipertensión pulmonar tromboembólica crónica, no a la fase aguda.',3:'El filtro de vena cava previene nuevos émbolos pero no actúa sobre el trombo que ya está causando el shock.'},
  trampa:'Se elige anticoagular porque es lo habitual. Con inestabilidad hemodinámica hay que ir un escalón más allá: lisar.',
  dx:['Tromboembolia pulmonar de alto riesgo','Taponamiento cardíaco','Shock cardiogénico','Neumotórax a tensión'],
  obj:'Indicar fibrinólisis en la tromboembolia pulmonar con inestabilidad hemodinámica.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la guía ESC de tromboembolia pulmonar aguda.'
},

/* ---------------------- NEUROLOGÍA ---------------------- */
'MIR-2018-M158': {
  clave:'Alucinaciones en un parkinsoniano: hace falta un antipsicótico que NO bloquee el estriado.',
  exp:'La psicosis del Parkinson obliga a un equilibrio delicado: cualquier antipsicótico que bloquee con fuerza los receptores D2 empeora el parkinsonismo. La quetiapina tiene afinidad D2 baja y transitoria y es la opción práctica de primera línea; la clozapina es la que cuenta con mejor evidencia, pero exige controles hematológicos por el riesgo de agranulocitosis. Antes de añadir fármaco se revisa la medicación antiparkinsoniana, aunque aquí reducirla empeoró la motricidad.',
  no:{1:'El haloperidol es un bloqueante D2 potente: agravaría de forma grave el parkinsonismo.',2:'La risperidona también bloquea D2 con fuerza y produce parkinsonismo farmacológico.',3:'El lorazepam sedaría al paciente sin tratar las alucinaciones, y en el anciano aumenta el riesgo de caídas y confusión.'},
  trampa:'Se elige el antipsicótico más conocido. En el Parkinson la elección se rige por lo poco que bloquee el receptor D2, no por su potencia.',
  dx:['Psicosis asociada a la enfermedad de Parkinson','Demencia por cuerpos de Lewy','Delirium'],
  obj:'Elegir el antipsicótico adecuado en el paciente parkinsoniano.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., trastornos del movimiento.'
},
'MIR-2018-M173': {
  tema:'Oftalmología',
  clave:'El tapón rojo identifica un colirio MIDRIÁTICO: dilatar la pupila cerró el ángulo.',
  exp:'Los envases de colirio están codificados por color y el rojo corresponde a los midriáticos. En un ojo con ángulo estrecho, la midriasis farmacológica empuja el iris contra la malla trabecular, bloquea el drenaje del humor acuoso y desencadena una crisis de glaucoma agudo de ángulo cerrado: dolor intensísimo, ojo rojo, pérdida de visión, córnea edematosa y pupila en midriasis media arreactiva. Es una urgencia oftalmológica.',
  no:{0:'La queratitis traumática requiere un traumatismo y no produce esta pérdida brusca de visión con dolor tan intenso.',2:'La uveítis anterior cursa con miosis, no midriasis, y su dolor es más sordo.',3:'La conjuntivitis no produce dolor intenso ni pérdida de visión.'},
  trampa:'Se pasa por alto el detalle del tapón rojo, que es el que explica todo el mecanismo. En oftalmología, saber qué se instiló es media exploración.',
  dx:['Glaucoma agudo de ángulo cerrado','Uveítis anterior','Queratitis','Escleritis'],
  obj:'Relacionar la midriasis farmacológica con el cierre angular.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Kanski, Oftalmología Clínica.'
},
'MIR-2018-M189': {
  esp:'Psiquiatría', tema:'Psiquiatría general',
  clave:'Lo que separa delirium de demencia no es qué falla, sino que el fallo FLUCTÚA.',
  exp:'El delirium se define por inicio agudo, alteración de la ATENCIÓN y curso fluctuante: el paciente pasa de la agitación a la somnolencia en el mismo día, como aquí. La demencia es de instauración lenta y curso estable a lo largo del día. Las alucinaciones visuales, los déficits cognitivos y la agitación aparecen en ambas y por tanto no discriminan; la fluctuación sí.',
  no:{0:'Las alucinaciones visuales aparecen también en la demencia por cuerpos de Lewy, de modo que no distinguen.',2:'Los síntomas cognitivos son comunes a las dos entidades.',3:'La agitación psicomotriz puede darse en la demencia avanzada y en el delirium hiperactivo.'},
  trampa:'Se elige el síntoma más llamativo —las alucinaciones— en vez del que realmente discrimina, que es el patrón temporal.',
  dx:['Delirium','Demencia','Demencia con delirium sobreañadido','Psicosis tardía'],
  obj:'Usar la fluctuación y la inatención como criterio diferencial del delirium.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR y las guías NICE sobre delirium.'
},
'MIR-2019-M160': {
  tema:'Infectología',
  clave:'Parálisis facial BILATERAL en alguien que hace deportes en el campo.',
  exp:'La parálisis facial bilateral es rara y su diferencial es corto: enfermedad de Lyme, sarcoidosis, síndrome de Guillain-Barré y VIH. El antecedente de un cuadro pseudogripal prolongado semanas antes, la exposición a garrapatas por deportes de aventura y la persistencia de artralgias apuntan a neuroborreliosis por Borrelia burgdorferi, que se manifiesta con parálisis de pares craneales, meningitis linfocitaria y radiculoneuritis.',
  no:{0:'El Guillain-Barré cursa con debilidad ascendente y ARREFLEXIA, y aquí los reflejos están presentes y simétricos.',1:'La leptospirosis produce un cuadro febril agudo con ictericia y fracaso renal, no parálisis facial bilateral diferida.',2:'La sarcoidosis es un diferencial legítimo, pero la radiografía de tórax es normal y no hay adenopatías hiliares.'},
  trampa:'Una parálisis facial se atribuye a Bell por defecto. Que sea BILATERAL cambia por completo el diferencial y obliga a buscar causa sistémica.',
  dx:['Neuroborreliosis de Lyme','Síndrome de Guillain-Barré','Sarcoidosis','Infección por VIH'],
  obj:'Reconocer la parálisis facial bilateral como signo de enfermedad sistémica.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías IDSA sobre enfermedad de Lyme.'
},
'MIR-2019-M162': {
  tema:'Endocrinología',
  clave:'Descompensación neurológica desencadenada por un proceso intercurrente, con hepatopatía crónica: sospechar hiperamoniemia.',
  exp:'Los trastornos del ciclo de la urea de presentación tardía cursan con síntomas neuropsiquiátricos crónicos y disfunción hepática, y se descompensan con el estrés catabólico —una infección, el ayuno, una sobrecarga proteica— desencadenando crisis hiperamoniémicas con vómitos, somnolencia y edema cerebral. El manejo urgente es suspender el aporte de proteínas, administrar glucosa para frenar el catabolismo, medir amonio y preparar quelantes como el benzoato sódico. Fíjate además en que las otras tres opciones proponen dar el alta o un tratamiento improcedente: aunque el diagnóstico sonara plausible, la conducta las invalida.',
  no:{0:'La enfermedad de Wilson es un diferencial razonable por la hepatopatía y el trastorno del movimiento, pero dar de alta a un paciente con Glasgow 11 y pupilas poco reactivas es inaceptable.',1:'La paraparesia espástica tropical no explica el deterioro agudo de conciencia, y la conducta propuesta vuelve a ser el alta.',3:'El déficit de alfa-1 antitripsina no produce este cuadro neurológico, y el manejo propuesto no corresponde.'},
  trampa:'En las preguntas que emparejan diagnóstico y tratamiento, una opción puede caer por el tratamiento aunque el diagnóstico parezca defendible. Hay que leer la frase entera.',
  dx:['Trastorno del ciclo de la urea','Enfermedad de Wilson','Encefalopatía hepática','Encefalitis'],
  obj:'Sospechar hiperamoniemia ante descompensación neurológica con desencadenante catabólico.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., errores congénitos del metabolismo.'
},

/* ---------------------- CARDIOLOGÍA ---------------------- */
'MIR-2018-M207': {
  clave:'Dolor torácico con cortejo vegetativo en una hipertensa de 51 años: primero el ECG, aunque el desencadenante sea emocional.',
  exp:'Un dolor centrotorácico con náuseas y sudoración en una paciente con factor de riesgo cardiovascular exige un electrocardiograma antes de atribuirlo a la ansiedad. El estrés emocional intenso no descarta el infarto: al contrario, puede desencadenarlo, y además es el disparador típico del síndrome de takotsubo, que se presenta exactamente así en mujeres de esta edad.',
  no:{0:'Tranquilizar y dar un ansiolítico sin ECG es el error que hace que se escapen infartos en mujeres.',1:'La troponina es necesaria, pero el ECG va primero: es inmediato y detecta la elevación del ST que exige reperfusión urgente.',3:'La radiografía no es la prueba prioritaria ante un dolor torácico de perfil isquémico.'},
  trampa:'El desencadenante emocional invita a etiquetar el cuadro de crisis de ansiedad. Es un sesgo bien documentado y una causa conocida de infradiagnóstico del infarto en mujeres.',
  dx:['Síndrome coronario agudo','Síndrome de takotsubo','Crisis de ansiedad','Disección aórtica'],
  obj:'Hacer ECG ante dolor torácico con perfil de riesgo aunque el desencadenante parezca emocional.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la guía ESC 2023 de síndromes coronarios agudos.'
},
'MIR-2018-M65': {
  clave:'Se pide la MENOS probable. El alcohol produce miocardiopatía DILATADA, no engrosamiento parietal.',
  exp:'El cuadro describe una miocardiopatía restrictiva o infiltrativa: paredes muy engrosadas con volúmenes y función sistólica normales, gasto bajo y presiones telediastólicas elevadas en ambos ventrículos. Ese patrón corresponde a enfermedades por depósito o infiltración —amiloidosis, hemocromatosis, endocarditis de Loeffler, sarcoidosis—. La miocardiopatía alcohólica es dilatada: ventrículo grande y función sistólica deprimida, justo lo contrario.',
  no:{0:'La amiloidosis es la causa más típica de miocardiopatía restrictiva con engrosamiento parietal.',1:'La endocarditis de Loeffler es la forma eosinofílica de miocardiopatía restrictiva.',3:'La hemocromatosis deposita hierro en el miocardio y puede dar patrón restrictivo.'},
  trampa:'Se asocia alcohol con daño cardíaco de forma genérica. La pregunta exige saber QUÉ tipo de daño produce: dilatación, no engrosamiento.',
  dx:['Miocardiopatía restrictiva','Amiloidosis cardíaca','Miocardiopatía hipertrófica','Miocardiopatía alcohólica'],
  obj:'Distinguir el patrón restrictivo del dilatado y sus causas.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la guía ESC de miocardiopatías.'
},
'MIR-2018-M66': {
  clave:'Se pide lo que NO se hace. En un SCACEST no se espera a la troponina para reperfundir.',
  exp:'La elevación del ST en cara inferior con descenso especular es diagnóstica por sí sola: activa la reperfusión inmediata. La troponina tarda horas en elevarse y puede ser normal en las primeras fases del infarto, de modo que esperarla solo retrasa la angioplastia y aumenta la necrosis. Se extrae, pero no condiciona la decisión.',
  no:{0:'Es correcta: la doble antiagregación con ticagrelor en dosis de carga forma parte del tratamiento previo a la angioplastia primaria.',2:'Es correcta: la aspirina en dosis de carga se administra cuanto antes.',3:'Es correcta: el oxígeno solo se administra si hay hipoxemia; darlo de rutina al paciente normoxémico puede ser perjudicial.'},
  trampa:'La costumbre de confirmar todo con analítica. En el SCACEST el electrocardiograma manda y el laboratorio llega tarde.',
  dx:['SCACEST inferior','SCASEST','Pericarditis'],
  obj:'Reperfundir el SCACEST por criterio electrocardiográfico, sin esperar biomarcadores.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la guía ESC 2023 de síndromes coronarios agudos.'
},
'MIR-2019-M126': {
  tema:'Cirugía vascular',
  clave:'Se pide la FALSA. Con parálisis rígida y sin señal Doppler la extremidad es INVIABLE: no se estudia, se amputa.',
  exp:'La isquemia arterial aguda se clasifica por la exploración. Cuando ya hay rigidez muscular, anestesia profunda y ausencia de señal Doppler tanto arterial como venosa, la extremidad es irreversible: intentar revascularizarla libera potasio, mioglobina y ácido láctico a la circulación y provoca síndrome de reperfusión con riesgo vital. La conducta es la amputación primaria, no una arteriografía.',
  no:{0:'Es cierta: el infarto reciente con posible trombo mural hace muy probable el origen embólico.',1:'Es cierta: la parálisis es un signo tardío que marca urgencia máxima mientras la extremidad siga siendo viable.',2:'Es cierta: la embolectomía con sonda de Fogarty por vía femoral es el tratamiento del émbolo femoral.'},
  trampa:'Se asume que siempre hay que revascularizar. Existe un punto sin retorno en el que revascularizar mata al paciente para salvar una pierna ya perdida.',
  dx:['Isquemia arterial aguda embólica','Trombosis arterial aguda','Flegmasía cerúlea dolens'],
  obj:'Clasificar la viabilidad de la extremidad antes de decidir revascularizar.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con la clasificación de Rutherford y las guías ESVS sobre isquemia aguda de miembros.'
},
'MIR-2019-M156': {
  clave:'Ondas v prominentes en el yugular y soplo que AUMENTA con la inspiración: lado derecho.',
  exp:'La onda v del pulso venoso yugular corresponde al llenado auricular; se hace prominente cuando la sangre regurgita del ventrículo derecho a la aurícula durante la sístole, es decir, en la insuficiencia tricuspídea. El signo de Rivero-Carvallo —el soplo aumenta con la inspiración profunda— confirma el origen derecho, porque la inspiración incrementa el retorno venoso y con él el flujo regurgitante.',
  no:{0:'La insuficiencia mitral produce soplo holosistólico en ápex irradiado a axila, sin ondas v yugulares ni aumento inspiratorio.',1:'La insuficiencia pulmonar da soplo DIASTÓLICO.',3:'La estenosis aórtica produce soplo sistólico eyectivo en foco aórtico irradiado a carótidas.'},
  trampa:'Todo soplo holosistólico se atribuye a insuficiencia mitral. La localización xifoidea y el aumento con la inspiración lo sitúan a la derecha.',
  dx:['Insuficiencia tricuspídea','Insuficiencia mitral','Comunicación interventricular'],
  obj:'Usar el signo de Rivero-Carvallo para lateralizar un soplo holosistólico.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., exploración cardiovascular.'
},

/* ---------------------- ONCOLOGÍA ---------------------- */
'MIR-2016-M219': {
  esp:'Bioética', tema:'Bioética',
  clave:'Un paciente competente puede rechazar tratamiento aunque el rechazo le cueste la vida.',
  exp:'Nada en el caso sugiere que el paciente haya perdido la capacidad de decidir. La enfermedad terminal no anula la autonomía. El deber del médico es informar con claridad de las consecuencias, asegurarse de que la decisión es comprendida y voluntaria, documentarla, y respetarla, garantizando siempre el tratamiento del sufrimiento aunque se rechacen las medidas de soporte.',
  no:{0:'Tratar contra la voluntad de un paciente competente constituye una agresión, no un deber.',1:'Ni la familia ni el representante sustituyen la voluntad de un paciente con capacidad conservada.',3:'Dar por hecho que solo procede sedación prejuzga la decisión del paciente y renuncia a ofrecerle opciones.'},
  trampa:'La gravedad del cuadro hace pensar que la urgencia justifica actuar sin consentimiento. La urgencia solo lo justifica cuando el paciente NO puede decidir.',
  dx:[],
  obj:'Respetar el rechazo informado de tratamiento en el paciente competente.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Beauchamp y Childress, Principios de Ética Biomédica.'
},
'MIR-2016-M90': {
  tema:'Endocrinología',
  clave:'La acromegalia multiplica los pólipos y el cáncer de colon.',
  exp:'El exceso mantenido de hormona de crecimiento y de IGF-1 estimula la proliferación del epitelio colónico, de modo que los pacientes con acromegalia tienen mayor prevalencia de pólipos adenomatosos y de carcinoma colorrectal. Por eso se recomienda colonoscopia al diagnóstico y seguimiento periódico, con intervalos que dependen de los hallazgos y del control de la enfermedad.',
  no:{0:'Los meningiomas se relacionan con la radioterapia craneal previa, no con la acromegalia en sí.',1:'El carcinoma medular de tiroides se asocia a la neoplasia endocrina múltiple tipo 2.',2:'El carcinoma microcítico pulmonar se relaciona con el tabaco, no con el exceso de hormona de crecimiento.'},
  trampa:'Se piensa en tumores endocrinos por tratarse de una enfermedad hipofisaria. El riesgo real está en un órgano no endocrino: el colon.',
  dx:['Acromegalia','Pólipos adenomatosos de colon','Carcinoma colorrectal'],
  obj:'Recordar el cribado colónico en la acromegalia.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la Endocrine Society sobre acromegalia.'
},
'MIR-2016-M91': {
  tema:'Endocrinología',
  clave:'Gastrinoma más hipercalcemia: dos de las tres pes.',
  exp:'La neoplasia endocrina múltiple tipo 1 se recuerda por las tres pes: paratiroides, páncreas e hipófisis. Aquí hay un tumor de células de los islotes con hipergastrinemia —un gastrinoma, causa del síndrome de Zollinger-Ellison— y una hipercalcemia que apunta a hiperparatiroidismo primario, que es la manifestación más frecuente y suele ser la primera. La combinación en un paciente joven obliga a estudiar el gen MEN1 y a cribar a la familia.',
  no:{1:'El síndrome de McCune-Albright asocia displasia fibrosa, manchas café con leche y pubertad precoz.',2:'El complejo de Carney cursa con mixomas, lentiginosis y tumores endocrinos, pero no con este patrón.',3:'El síndrome poliglandular autoinmune tipo I combina candidiasis, hipoparatiroidismo e insuficiencia suprarrenal: el calcio estaría BAJO, no alto.'},
  trampa:'Se ve el gastrinoma y se cierra el caso ahí. La hipercalcemia es el segundo dato que convierte un tumor aislado en un síndrome hereditario con implicaciones familiares.',
  dx:['MEN1','Síndrome de Zollinger-Ellison esporádico','MEN2A','Hiperparatiroidismo primario aislado'],
  obj:'Reconocer la asociación de tumores que define la MEN1.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., neoplasias endocrinas múltiples.'
},
'MIR-2018-M114': {
  tema:'Otorrinolaringología',
  clave:'Adenopatía cervical alta dura y adherida, con obstrucción nasal unilateral y taponamiento ótico del mismo lado.',
  exp:'Esa combinación describe el carcinoma de nasofaringe. El tumor crece en la fosa de Rosenmüller, obstruye la fosa nasal, invade la trompa de Eustaquio y produce otitis media serosa unilateral, y metastatiza precozmente a los ganglios cervicales altos. Una otitis serosa unilateral en un adulto obliga siempre a explorar el cavum: es el signo que más veces se pasa por alto.',
  no:{0:'La granulomatosis con poliangeítis produce lesiones destructivas nasales con costras y afectación pulmonar y renal.',2:'El linfoma de Hodgkin da adenopatías elásticas y móviles, con síntomas B, no obstrucción nasal unilateral.',3:'La tuberculosis ganglionar produce adenopatías blandas que fistulizan, sin este cuadro rinológico.'},
  trampa:'Los tres síntomas se estudian por separado —el ganglio por un lado, el oído por otro— sin unirlos en un solo diagnóstico anatómico.',
  dx:['Carcinoma de nasofaringe','Linfoma','Metástasis de primario desconocido','Tuberculosis ganglionar'],
  obj:'Explorar el cavum ante otitis serosa unilateral del adulto con adenopatía cervical.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías ESMO sobre cáncer de cabeza y cuello.'
},
'MIR-2018-M124': {
  tema:'Epidemiología',
  clave:'El resultado viene en años de vida ajustados por calidad: es coste-utilidad.',
  exp:'La unidad en que se expresa el desenlace define el tipo de análisis. El AVAC integra cantidad y calidad de vida en una sola medida, lo que permite comparar intervenciones de áreas distintas, y el análisis que lo usa se denomina de coste-utilidad. La cifra obtenida se contrasta con el umbral de disposición a pagar de cada sistema sanitario.',
  no:{0:'La minimización de costes exige demostrar antes que la eficacia de las dos opciones es equivalente.',2:'El coste-beneficio expresa los resultados de salud en unidades monetarias.',3:'El coste-efectividad usa unidades clínicas naturales, como años de vida ganados sin ajustar por calidad.'},
  trampa:'Coste-efectividad y coste-utilidad se confunden constantemente. Si aparece la palabra AVAC, es coste-utilidad.',
  dx:[],
  obj:'Clasificar el análisis farmacoeconómico por la unidad del resultado.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Drummond, Methods for the Economic Evaluation of Health Care Programmes.'
},

/* ---------------------- NEUMOLOGÍA ---------------------- */
'MIR-2016-M150': {
  tema:'Neumología',
  clave:'Hipoxemia con hipercapnia y gradiente alveolo-arterial NORMAL: el pulmón está sano.',
  exp:'El gradiente alveolo-arterial de oxígeno distingue dónde está el problema. Si está normal, el intercambio pulmonar funciona y la hipoxemia se debe simplemente a que llega poco aire: es hipoventilación pura. Sus causas son extrapulmonares —enfermedad neuromuscular, depresión del centro respiratorio, obesidad-hipoventilación, deformidad de la caja torácica—. En cualquier enfermedad del parénquima o vascular el gradiente estaría aumentado.',
  no:{0:'En la EPOC el gradiente está elevado por la alteración de la relación ventilación-perfusión.',1:'La fibrosis pulmonar eleva el gradiente por trastorno de difusión, y cursa con hipocapnia, no hipercapnia.',2:'La tromboembolia eleva el gradiente y produce hipocapnia por hiperventilación.'},
  trampa:'Se leen solo la PaO₂ y la PaCO₂ y se piensa en EPOC por costumbre. El gradiente es el dato que separa el pulmón enfermo del pulmón que no recibe aire.',
  dx:['Hipoventilación alveolar','Enfermedad neuromuscular','EPOC','Síndrome de obesidad-hipoventilación'],
  obj:'Usar el gradiente alveolo-arterial para localizar la causa de la hipoxemia.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Guyton y Hall y Harrison 21.ª ed., insuficiencia respiratoria.'
},
'MIR-2018-M88': {
  tema:'Endocrinología',
  clave:'Paciente agudo hospitalizado: fuera antidiabéticos orales, dentro insulina.',
  exp:'Durante la enfermedad aguda la glucemia se descontrola por el estrés y por los fármacos, y los antidiabéticos orales pierden manejabilidad. La metformina además debe suspenderse ante hipoxemia, sepsis o riesgo de deterioro renal, por el riesgo de acidosis láctica. La pauta recomendada en planta es insulina basal-bolo con corrección, que permite ajustar día a día. El buen control previo no cambia la conducta: cambian las circunstancias.',
  no:{1:'Mantener metformina en dosis altas con insuficiencia respiratoria aguda es precisamente lo que se debe evitar.',2:'La vildagliptina tiene potencia limitada y no permite el ajuste rápido que exige el paciente agudo.',3:'Mantener el mismo tratamiento ignora que el estrés de la enfermedad aguda altera por completo el control glucémico.'},
  trampa:'La HbA1c de 6,8% tranquiliza y hace pensar que no hay que tocar nada. Refleja los meses previos, no lo que va a pasar durante el ingreso.',
  dx:['Hiperglucemia de estrés','Diabetes tipo 2 hospitalizada','Acidosis láctica por metformina'],
  obj:'Sustituir antidiabéticos orales por insulina en el paciente hospitalizado agudo.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con ADA, Standards of Care, capítulo de atención hospitalaria.'
},
'MIR-2019-M115': {
  clave:'Exudado linfocítico con ADA de 59 U/L en una mujer joven.',
  exp:'La adenosina desaminasa elevada por encima de 40 U/L en un exudado pleural de predominio linfocitario tiene alto valor predictivo para tuberculosis pleural en zonas de prevalencia intermedia. El perfil se completa con pH ligeramente bajo, glucosa relativamente conservada y ausencia de células malignas. El cultivo del líquido es poco sensible, por lo que a menudo el diagnóstico se apoya en ADA más contexto clínico, con biopsia pleural si persiste la duda.',
  no:{0:'La insuficiencia cardíaca produce TRASUDADO, no exudado.',1:'El síndrome de Meigs asocia tumor ovárico benigno con ascitis y derrame pleural, habitualmente trasudado, y no eleva la ADA.',2:'El quilotórax tiene aspecto lechoso y triglicéridos altos, no este perfil.'},
  trampa:'Se pide más pruebas cuando la ADA ya orienta con fuerza en el contexto adecuado: mujer joven, fiebre y exudado linfocitario.',
  dx:['Tuberculosis pleural','Derrame paraneoplásico','Derrame paraneumónico','Linfoma'],
  obj:'Interpretar la ADA en el exudado pleural linfocitario.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías de la British Thoracic Society sobre derrame pleural.'
},
'MIR-2019-M118': {
  clave:'Acidosis respiratoria que NO mejora tras una hora de tratamiento óptimo, con paciente alerta.',
  exp:'La ventilación no invasiva está indicada en la exacerbación de EPOC con acidosis respiratoria persistente pese al tratamiento médico correcto. Reduce la necesidad de intubación, las complicaciones infecciosas, la estancia y la mortalidad. El paciente cumple la condición esencial para tolerarla: está alerta y colabora. Que la PaO₂ haya mejorado con oxígeno no resuelve nada, porque el problema es de ventilación, no de oxigenación.',
  no:{1:'La intubación se reserva para el fracaso de la ventilación no invasiva, el deterioro de conciencia o la incapacidad de proteger la vía aérea.',2:'Saturar al 99% en un retenedor crónico agrava la hipercapnia por varios mecanismos, incluido el efecto Haldane.',3:'Las benzodiacepinas deprimen el centro respiratorio: en un paciente hipercápnico son peligrosas.'},
  trampa:'La PaO₂ mejoró de 51 a 62 y parece que el paciente va bien. La PaCO₂ subió y el pH bajó: está peor.',
  dx:['Exacerbación de EPOC con acidosis respiratoria','Insuficiencia respiratoria hipercápnica'],
  obj:'Indicar ventilación no invasiva por el pH y la PaCO₂, no por la oxigenación.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con el informe GOLD y las guías ERS/ATS sobre ventilación no invasiva.'
},
'MIR-2019-M133': {
  clave:'La sospecha de empiema es CLÍNICA: fiebre y leucocitosis que no ceden con antibiótico.',
  exp:'Ante un derrame paraneumónico, lo que hace sospechar complicación es la evolución: persistencia de fiebre y leucocitosis pese al tratamiento correcto. Eso obliga a toracocentesis. El diagnóstico de derrame complicado o empiema se establece con el análisis del líquido —pH menor de 7,20, glucosa baja, LDH alta, o pus franco— o con Gram o cultivo positivos, pero el cultivo es negativo en una proporción importante y no es requisito.',
  no:{0:'Un pH de 7,40 es normal y va EN CONTRA de derrame complicado; el umbral de drenaje está por debajo de 7,20.',1:'Exigir cultivo positivo dejaría sin diagnosticar muchos empiemas, porque el cultivo falla con frecuencia.',3:'La mera presencia de derrame no indica empiema: la mayoría de los paraneumónicos son simples y se resuelven con antibiótico.'},
  trampa:'Se drena todo derrame que acompaña a una neumonía. La mayoría no lo necesita; lo que decide es la evolución y el análisis del líquido.',
  dx:['Derrame paraneumónico simple','Derrame paraneumónico complicado','Empiema'],
  obj:'Reconocer cuándo sospechar y cómo confirmar el empiema.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías de la British Thoracic Society sobre infección pleural.'
},
'MIR-2019-M134': {
  clave:'Traumatismo con hipofonesis y TIMPANISMO: hay aire, no sangre.',
  exp:'La percusión es lo que separa las dos grandes complicaciones pleurales del trauma torácico: el timpanismo indica aire —neumotórax— y la matidez indica líquido —hemotórax—. Con taquipnea de 35, taquicardia y desaturación, el cuadro es un neumotórax a tensión, que es diagnóstico clínico y exige descompresión inmediata sin esperar radiografía.',
  no:{0:'El taponamiento cursa con tonos cardíacos apagados e ingurgitación yugular, sin timpanismo unilateral.',2:'El hemotórax masivo daría MATIDEZ a la percusión, no timpanismo.',3:'La contusión pulmonar no produce hipofonesis con timpanismo ni desviación mediastínica.'},
  trampa:'Se pasa por alto la percusión, que muchas veces ni se hace. Es un gesto de dos segundos que aquí decide el diagnóstico y el tratamiento.',
  dx:['Neumotórax a tensión','Hemotórax masivo','Taponamiento cardíaco','Contusión pulmonar'],
  obj:'Usar la percusión para diferenciar aire de líquido en el trauma torácico.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con ATLS, manejo del trauma torácico.'
},

/* ---------------------- CIRUGÍA ---------------------- */
'MIR-2018-M104': {
  tema:'Hematología',
  clave:'Aumento de peso, ascitis, hepatomegalia dolorosa e hiperbilirrubinemia en el día 14 tras un trasplante con busulfán.',
  exp:'Esa tríada en las primeras tres semanas postrasplante define el síndrome de obstrucción sinusoidal, antes llamado enfermedad venooclusiva hepática: el acondicionamiento daña el endotelio sinusoidal y obstruye el flujo de salida hepático. El busulfán es un factor de riesgo conocido. El defibrotide es el único tratamiento con eficacia demostrada y su beneficio depende de la precocidad.',
  no:{0:'La enfermedad injerto contra huésped hepática aguda cursa con colestasis pero no con la retención hídrica, la ascitis y la hepatomegalia dolorosa de este cuadro; y suele aparecer algo más tarde.',1:'La ausencia de fiebre y el patrón clínico no apuntan a infección.',3:'Esperar es peligroso: el síndrome de obstrucción sinusoidal grave tiene mortalidad muy elevada y el tratamiento precoz es lo que la modifica.'},
  trampa:'Toda ictericia postrasplante se atribuye a enfermedad injerto contra huésped. El aumento de peso y la ascitis son los datos que apuntan al endotelio hepático.',
  dx:['Síndrome de obstrucción sinusoidal','Enfermedad injerto contra huésped hepática','Colestasis séptica','Toxicidad farmacológica'],
  obj:'Reconocer el síndrome de obstrucción sinusoidal postrasplante.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con los criterios EBMT sobre síndrome de obstrucción sinusoidal.'
},
'MIR-2018-M140': {
  tema:'Nefrología',
  clave:'Se pide el MENOS probable. El poliomavirus BK no da la cara a los 10 días: necesita meses de inmunosupresión.',
  exp:'La nefropatía por poliomavirus BK aparece característicamente entre los 3 y los 12 meses postrasplante, cuando la inmunosupresión acumulada permite la reactivación viral. A los diez días de un trasplante con función inicial buena, el deterioro agudo debe hacer pensar en rechazo agudo, obstrucción de la vía urinaria, problema vascular o toxicidad por anticalcineurínicos, que son las causas de este periodo.',
  no:{0:'El rechazo agudo es la causa más típica de deterioro en las primeras semanas.',1:'La uropatía obstructiva por linfocele, coágulo o estenosis ureteral es frecuente en el postoperatorio inmediato y siempre debe descartarse con ecografía.',3:'La toxicidad por tacrolimus es habitual en este periodo y depende de niveles.'},
  trampa:'Se responde por lo que se ha oído nombrar en trasplante sin situarlo en el tiempo. En trasplante la cronología es el primer filtro diagnóstico.',
  dx:['Rechazo agudo','Uropatía obstructiva','Toxicidad por anticalcineurínicos','Nefropatía por BK'],
  obj:'Ordenar las complicaciones del trasplante renal por su cronología.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías KDIGO sobre trasplante renal.'
},
'MIR-2018-M150': {
  tema:'Neumología',
  clave:'La cirugía de reducción de volumen exige enfisema HETEROGÉNEO y de predominio en lóbulos superiores.',
  exp:'La operación funciona resecando las zonas más destruidas, que están hiperinsufladas y no participan en el intercambio, para que el pulmón sano restante recupere mecánica ventilatoria. Si el enfisema es difuso y homogéneo no hay zona diana que quitar, el beneficio desaparece y la mortalidad quirúrgica aumenta. El ensayo NETT demostró además que la combinación de enfisema no de lóbulos superiores con alta capacidad de ejercicio identifica al subgrupo de mayor mortalidad.',
  no:{0:'El predominio en lóbulos superiores es precisamente el criterio que SELECCIONA a los buenos candidatos.',1:'Un FEV1 bajo forma parte del perfil de gravedad esperable en estos pacientes.',3:'La baja capacidad de esfuerzo tras rehabilitación identifica al subgrupo que más se beneficia.'},
  trampa:'Se piensa que a mayor gravedad, más indicación. Lo que decide no es cuánta enfermedad hay, sino cómo está distribuida.',
  dx:['Enfisema pulmonar','EPOC grave'],
  obj:'Conocer los criterios de selección para la cirugía de reducción de volumen.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con el ensayo NETT y el informe GOLD.'
},
'MIR-2018-M43': {
  tema:'Farmacología', esp:'Farmacología',
  clave:'La codeína es un profármaco: el CYP2D6 la convierte en morfina.',
  exp:'La codeína carece prácticamente de actividad analgésica propia; su efecto depende de que el citocromo CYP2D6 la transforme en morfina. Los metabolizadores ultrarrápidos, que portan duplicaciones del gen, generan una cantidad desproporcionada de morfina con dosis normales y presentan toxicidad opioide: miosis, somnolencia y depresión respiratoria. Por eso la codeína está contraindicada en niños tras amigdalectomía y en la lactancia.',
  no:{0:'El zumo de pomelo inhibe el CYP3A4, que no es la vía principal de activación de la codeína.',1:'Un metabolizador lento produciría POCA morfina: tendría fallo analgésico, no toxicidad.',2:'Carecer de alelos funcionantes de CYP2D6 impide activar la codeína: tampoco produciría toxicidad.'},
  trampa:'Se razona que "metaboliza rápido, luego elimina rápido, luego menos efecto". Con un profármaco es al revés: metabolizar rápido significa MÁS fármaco activo.',
  dx:['Toxicidad opioide por codeína','Sobredosificación','Reacción idiosincrásica'],
  obj:'Entender el efecto del polimorfismo del CYP2D6 sobre un profármaco.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman y las alertas de la EMA y la FDA sobre codeína.'
},
'MIR-2018-M72': {
  clave:'Se pide la INCORRECTA. Las prótesis mecánicas son para los JÓVENES, no para los mayores de 70.',
  exp:'La elección de prótesis enfrenta durabilidad contra anticoagulación. La mecánica dura toda la vida pero obliga a anticoagulación permanente con antivitamina K; la biológica evita la anticoagulación pero se degenera en 10 a 20 años. Por eso la mecánica se prefiere en el paciente joven, que sobreviviría a varias biológicas, y la biológica en el mayor de 65-70 años, cuya expectativa de vida se acerca a la durabilidad de la prótesis y en quien la anticoagulación añade riesgo de sangrado.',
  no:{0:'Es correcta: la anticoagulación permanente es la contrapartida de la prótesis mecánica.',2:'Es correcta: la biológica dura menos, ese es su inconveniente principal.',3:'Es correcta: la biológica es menos trombogénica, y por eso no requiere anticoagulación indefinida.'},
  trampa:'Se memoriza que la mecánica es "mejor" por durar más y se olvida que en el anciano esa ventaja no se aprovecha y el precio en sangrado sí se paga.',
  dx:['Estenosis aórtica grave sintomática'],
  obj:'Elegir el tipo de prótesis valvular según la edad y la expectativa de vida.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la guía ESC/EACTS de valvulopatías.'
},

/* ---------------------- GINECOLOGÍA ---------------------- */
'MIR-2018-M162': {
  tema:'Neurología',
  clave:'Trombosis venosa cerebral: se anticoagula AUNQUE haya hematoma.',
  exp:'Es la excepción que sorprende. En la trombosis de senos venosos el hematoma es consecuencia del infarto venoso y de la hipertensión venosa retrógrada; el tratamiento es anticoagular para repermeabilizar el seno y frenar el mecanismo que está produciendo el sangrado. La presencia de hemorragia no contraindica la heparina. Los anticonceptivos orales son un factor de riesgo clásico y deben suspenderse.',
  no:{1:'La fibrinólisis sistémica no es el tratamiento estándar y aumenta el riesgo hemorrágico.',2:'La antiagregación es insuficiente para una trombosis venosa establecida.',3:'La evacuación quirúrgica se plantea solo ante efecto de masa con deterioro neurológico, y no trata la causa.'},
  trampa:'Ver sangre en la resonancia y descartar la anticoagulación por reflejo. Aquí es justo lo contrario de lo que dicta la intuición.',
  dx:['Trombosis de senos venosos cerebrales','Hemorragia intraparenquimatosa','Ictus arterial','Hipertensión intracraneal idiopática'],
  obj:'Anticoagular la trombosis venosa cerebral aunque exista hemorragia.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías EAN y AHA/ASA sobre trombosis venosa cerebral.'
},
'MIR-2018-M163': {
  clave:'CIN 1 en una mujer joven: la mayoría regresa sola.',
  exp:'La lesión intraepitelial de bajo grado refleja una infección productiva por el virus del papiloma humano, no una lesión precursora establecida. En mujeres jóvenes regresa espontáneamente en la mayoría de los casos en un plazo de dos años. La conducta es observar con control citológico y colposcópico a los 6-12 meses; tratar de entrada expondría a una conización innecesaria, que no es inocua: aumenta el riesgo de parto pretérmino en gestaciones futuras.',
  no:{0:'La determinación del virus no cambia la conducta cuando ya existe confirmación histológica de CIN 1.',1:'La conización es sobretratamiento en una nuligesta de 26 años con CIN 1, con consecuencias obstétricas.',3:'El aciclovir trata el herpes; el virus del papiloma no responde a antivirales.'},
  trampa:'La palabra "neoplasia" en CIN empuja a tratar. El grado es lo que decide, y el bajo grado se vigila.',
  dx:['CIN 1','CIN 2-3','Infección transitoria por VPH'],
  obj:'Vigilar y no tratar el CIN 1 en la mujer joven.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías ASCCP sobre manejo de anomalías cervicales.'
},
'MIR-2018-M167': {
  clave:'39 años con reserva ovárica baja pero AÚN presente: se usan sus propios ovocitos, y con prisa.',
  exp:'La hormona antimülleriana está en el límite bajo y el recuento de folículos antrales es reducido, lo que anticipa una respuesta pobre a la estimulación, pero todavía hay reserva. Con 39 años, un año de esterilidad y endometriosis operada, no hay tiempo para métodos de baja complejidad: se indica fecundación in vitro con ovocitos propios sin demora. La donación se reserva para el fallo ovárico o tras fracasos repetidos.',
  no:{0:'La donación de ovocitos es prematura: la paciente conserva reserva y no ha intentado ningún ciclo.',2:'La inseminación artificial tiene tasas bajas y es inadecuada con reserva disminuida a los 39 años: consumiría meses valiosos.',3:'Los análogos de GnRH durante tres meses retrasarían el tratamiento y agravarían la caída de la reserva ovárica.'},
  trampa:'Se plantea escalar desde lo menos invasivo. Con edad avanzada y reserva baja, escalar lentamente es perder la ventana.',
  dx:['Esterilidad por baja reserva ovárica','Endometriosis','Esterilidad de origen masculino'],
  obj:'Ajustar la estrategia reproductiva a la edad y la reserva ovárica.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías ESHRE sobre reproducción asistida.'
},
'MIR-2018-M170': {
  clave:'51 años con amenorrea de dos meses: primero descartar embarazo, siempre.',
  exp:'La perimenopausia no equivale a esterilidad: la ovulación es errática pero existe hasta un año después de la última regla. Ante metrorragia con amenorrea previa, la gonadotropina coriónica es la primera prueba, porque un embarazo —incluido el ectópico o la enfermedad trofoblástica— cambia por completo el manejo y contraindica maniobras como el legrado. La imagen endometrial descrita también encajaría con restos gestacionales.',
  no:{1:'La histeroscopia es la prueba adecuada para estudiar el endometrio engrosado, pero después de descartar gestación.',2:'Realizar un legrado sin descartar embarazo puede tener consecuencias graves.',3:'El estudio hormonal no aporta nada en la urgencia.'},
  trampa:'La edad hace asumir que ya no puede quedarse embarazada. Es un error clásico y con consecuencias.',
  dx:['Gestación','Hiperplasia endometrial','Pólipo endometrial','Enfermedad trofoblástica'],
  obj:'Descartar gestación antes de cualquier maniobra ginecológica en la perimenopausia.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con los boletines de práctica del ACOG.'
},
'MIR-2018-M171': {
  clave:'BRCA: mama y ovario. Endometrio es de Lynch, no de BRCA.',
  exp:'Las mutaciones de BRCA1 y BRCA2 elevan de forma marcada el riesgo de cáncer de mama y de ovario, incluidos el de trompa y el peritoneal primario. BRCA2 añade además riesgo de cáncer de páncreas, próstata y melanoma. El cáncer de endometrio pertenece a otro síndrome, el de Lynch, ligado a genes reparadores del ADN. El manejo incluye vigilancia intensiva y salpingooforectomía reductora de riesgo tras cumplir el deseo genésico.',
  no:{0:'El endometrio no forma parte del espectro BRCA.',2:'Mismo error respecto al endometrio.',3:'El cáncer de cuello uterino depende del virus del papiloma, no de BRCA.'},
  trampa:'Se agrupan todos los cánceres ginecológicos bajo el mismo síndrome hereditario. Cada síndrome tiene su espectro concreto.',
  dx:['Síndrome de cáncer de mama y ovario hereditario','Síndrome de Lynch'],
  obj:'Delimitar el espectro tumoral de BRCA frente al de Lynch.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías NCCN sobre evaluación genética del riesgo oncológico.'
},

/* ---------------------- REUMATOLOGÍA Y TRAUMATOLOGÍA ---------------------- */
'MIR-2018-M191': {
  tema:'Infectología',
  clave:'Se pide la INCORRECTA. En la brucelosis los hemocultivos SÍ son rentables.',
  exp:'La brucelosis es una infección bacteriémica: el hemocultivo es positivo en una proporción alta de los casos agudos, sobre todo con medios adecuados y periodos de incubación prolongados. Decir que aportan escaso rendimiento es falso. El cuadro es característico: veterinario con fiebre ondulante, orquiepididimitis, sacroileítis y monoartritis. El tratamiento combina doxiciclina con estreptomicina o gentamicina, o con rifampicina.',
  no:{1:'Es cierta: la rosa de Bengala es una prueba de cribado rápida y útil en la brucelosis aguda.',2:'Es cierta: la artritis brucelar es no destructiva en fases iniciales y la radiografía solo muestra tumefacción de partes blandas.',3:'Es cierta: doxiciclina 45 días más un aminoglucósido es una pauta aceptada.'},
  trampa:'Se asume que en las zoonosis el diagnóstico es siempre serológico. En la brucelosis el hemocultivo sigue siendo muy útil, y hay que avisar al laboratorio para prolongar la incubación.',
  dx:['Brucelosis','Artritis séptica','Espondilodiscitis','Fiebre Q'],
  obj:'Reconocer la brucelosis y el papel del hemocultivo.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Mandell, Principios y Práctica de Enfermedades Infecciosas.'
},
'MIR-2019-M122': {
  clave:'Dolor lumbar inflamatorio con febrícula y radiografía NORMAL: descartar infección con resonancia.',
  exp:'La espondilodiscitis piógena debuta con dolor de ritmo inflamatorio, rigidez marcada y febrícula, en un paciente de edad avanzada. La radiografía simple tarda dos o tres semanas en mostrar alteraciones, así que una radiografía normal no descarta nada. La resonancia magnética es la prueba de elección: detecta el edema óseo y la afectación discal desde fases muy precoces y define si hay absceso epidural.',
  no:{0:'El aplastamiento vertebral se vería en la radiografía simple y no cursa con fiebre.',1:'La gammagrafía es sensible pero inespecífica, y la sospecha aquí no es de metástasis sino de infección.',2:'La hiperostosis anquilosante es un hallazgo radiológico crónico y asintomático, incompatible con este cuadro agudo febril.'},
  trampa:'La radiografía normal tranquiliza. En la espondilodiscitis la radiografía va siempre por detrás de la clínica.',
  dx:['Espondilodiscitis piógena','Absceso epidural','Metástasis vertebral','Fractura osteoporótica'],
  obj:'Pedir resonancia ante sospecha de espondilodiscitis con radiografía normal.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías IDSA sobre osteomielitis vertebral.'
},
'MIR-2019-M142': {
  tema:'Traumatología',
  clave:'Pseudoartrosis INFECTADA: mientras el material siga dentro, no cura.',
  exp:'La supuración a los once meses sobre una fractura abierta indica infección del implante. Las bacterias forman biofilm sobre el metal, donde los antibióticos no penetran, de modo que ningún tratamiento antibiótico erradica la infección con el clavo puesto. La secuencia obligada es retirar el material, desbridar el foco, estabilizar con fijación externa —que aleja el metal del foco infectado— y ajustar el antibiótico a los cultivos. La consolidación se aborda después, ya sin infección.',
  no:{0:'Retirar solo los cerrojos deja el clavo, y con él el biofilm.',1:'La actitud expectante con quinolonas no resuelve una infección sobre implante.',2:'Aportar injerto y factores de crecimiento sobre un foco infectado está condenado al fracaso: primero se erradica la infección.'},
  trampa:'Se trata la pseudoartrosis como un problema de consolidación. Con supuración, el problema es infeccioso, y el orden importa.',
  dx:['Pseudoartrosis séptica','Osteomielitis crónica','Pseudoartrosis atrófica aséptica'],
  obj:'Retirar el implante antes de intentar la consolidación en la pseudoartrosis infectada.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Campbell, Cirugía Ortopédica, y las guías IDSA sobre infección de material de osteosíntesis.'
},
'MIR-2020-M120': {
  esp:'Pediatría', tema:'Reumatología',
  clave:'Lupus neonatal: los anticuerpos son de la MADRE, no del niño.',
  exp:'El lupus neonatal lo causan anticuerpos maternos anti-Ro/SSA y anti-La/SSB que atraviesan la placenta. La madre puede estar asintomática o, como aquí, tener molestias inespecíficas. En el recién nacido produce lesiones cutáneas fotosensibles anulares que desaparecen al aclararse los anticuerpos maternos hacia los 6-8 meses, y la complicación grave y permanente es el bloqueo auriculoventricular congénito. Por eso hay que estudiar a la madre y hacer electrocardiograma al niño.',
  no:{0:'Los anti-DNA no son los responsables de la transmisión placentaria de este síndrome.',1:'Los ANCA no tienen relación con el lupus neonatal.',3:'Los anti-Sm son específicos del lupus del adulto, pero no median el lupus neonatal.'},
  trampa:'Se estudia al recién nacido, que es quien tiene las lesiones. La clave está en la madre, que a menudo no está diagnosticada y se entera por su hijo.',
  dx:['Lupus neonatal','Bloqueo AV congénito','Urticaria','Eritema anular'],
  obj:'Buscar los anticuerpos maternos ante lesiones cutáneas fotosensibles neonatales.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., enfermedades autoinmunes del recién nacido.'
},
'MIR-2020-M132': {
  tema:'Cirugía vascular',
  clave:'Se pide la FALSA. Esto es isquemia mesentérica CRÓNICA: no hay émbolo que sacar.',
  exp:'La angina intestinal se debe a estenosis ateroscleróticas progresivas de los troncos viscerales, no a un émbolo. La tríada es dolor posprandial, miedo a comer y pérdida de peso. El tratamiento es la revascularización de las estenosis, hoy preferentemente por vía endovascular con stent. La sonda de Fogarty es el instrumento de la isquemia AGUDA embólica, un cuadro completamente distinto.',
  no:{0:'Es cierta: la desnutrición y el soplo abdominal son hallazgos frecuentes.',2:'Es cierta: el eco-doppler es una buena herramienta de cribado no invasiva.',3:'Es cierta: la angioplastia con stent tiene alta tasa de éxito técnico inicial.'},
  trampa:'Se mezcla la isquemia mesentérica aguda con la crónica. Comparten nombre y arterias, pero mecanismo, clínica y tratamiento son distintos.',
  dx:['Isquemia mesentérica crónica','Isquemia mesentérica aguda','Neoplasia digestiva'],
  obj:'Diferenciar isquemia mesentérica aguda de crónica y su tratamiento.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con las guías ESVS sobre enfermedad arterial mesentérica.'
},

/* ---------------------- ENDOCRINOLOGÍA Y VARIOS ---------------------- */
'MIR-2020-M163': {
  clave:'Se pide el que ENGORDA. Las glitazonas aumentan peso y retienen líquidos.',
  exp:'En la diabetes tipo 2 con obesidad, el efecto sobre el peso pesa en la elección. La pioglitazona aumenta el peso por adipogénesis y retención hídrica, y por eso se evita en el paciente obeso y está contraindicada en la insuficiencia cardíaca. La metformina es neutra o reduce ligeramente el peso; los inhibidores de SGLT2 y los agonistas de GLP-1 lo reducen de forma clara, y estos últimos son especialmente útiles cuando la obesidad domina el cuadro.',
  no:{0:'La metformina no aumenta el peso y sigue siendo el fármaco inicial.',2:'Los inhibidores de SGLT2 producen pérdida de peso por glucosuria, y además aportan beneficio cardiovascular y renal.',3:'Los agonistas de GLP-1 son de los que más peso reducen.'},
  trampa:'Se elige el antidiabético solo por su potencia sobre la HbA1c. En el paciente obeso el efecto sobre el peso puede ser el criterio decisivo.',
  dx:['Diabetes tipo 2 con obesidad'],
  obj:'Elegir el antidiabético considerando su efecto sobre el peso.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con ADA, Standards of Care in Diabetes.'
},
'MIR-2020-M38': {
  tema:'Farmacología', esp:'Farmacología',
  clave:'Angioedema SIN urticaria: es bradicinina, no histamina.',
  exp:'Los inhibidores de la enzima convertidora impiden la degradación de la bradicinina, que se acumula y produce angioedema. La clave que lo separa del angioedema alérgico es la ausencia de urticaria y de prurito: no hay liberación de histamina, de modo que los antihistamínicos y los corticoides no funcionan. Puede aparecer años después de iniciar el fármaco, lo que despista. El tratamiento es suspender el IECA de por vida y asegurar la vía aérea.',
  no:{1:'Las estatinas producen miopatía y hepatotoxicidad, no angioedema.',2:'Ni la metformina ni la levodopa se asocian a angioedema.',3:'La levodopa no produce angioedema.'},
  trampa:'Se busca una alergia reciente y se descarta el fármaco que el paciente lleva años tomando sin problemas. El angioedema por IECA no respeta ese razonamiento.',
  dx:['Angioedema por IECA','Angioedema hereditario','Angioedema alérgico','Anafilaxia'],
  obj:'Reconocer el angioedema mediado por bradicinina y su falta de respuesta a antihistamínicos.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman y las guías de la EAACI sobre angioedema.'
},
'MIR-2021-M110': {
  tema:'Traumatología',
  clave:'Fractura subcapital DESPLAZADA: la cabeza femoral pierde su irrigación.',
  exp:'La vascularización de la cabeza femoral llega retrógradamente por el cuello, de modo que una fractura subcapital desplazada la interrumpe y condena a necrosis avascular y pseudoartrosis si se intenta osteosíntesis. Por eso en el paciente mayor se sustituye la cabeza: hemiartroplastia. Y se opera pronto, en las primeras 24-48 horas, porque el tratamiento conservador en el anciano multiplica la mortalidad por encamamiento, y esta paciente era independiente.',
  no:{1:'El clavo trocantérico es para las fracturas extracapsulares, pertrocantéreas, donde la vascularización se conserva.',2:'Los tornillos canulados se reservan para fracturas NO desplazadas o para pacientes jóvenes en quienes se intenta preservar la cabeza.',3:'El tratamiento conservador en una anciana previamente independiente tiene mortalidad muy alta y es la peor opción.'},
  trampa:'Los 95 años empujan al tratamiento conservador. La situación funcional previa pesa más que la edad, y aquí era excelente: operar es lo que la devuelve a caminar.',
  dx:['Fractura subcapital de cadera','Fractura pertrocantérea','Necrosis avascular'],
  obj:'Elegir la técnica según el trazo de fractura y su repercusión vascular.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con Campbell, Cirugía Ortopédica, y las guías NICE sobre fractura de cadera.'
},
'MIR-2021-M116': {
  tema:'Traumatología',
  clave:'El dolor aparece al elevar la pierna con la rodilla EXTENDIDA y cede al flexionarla: eso es tensión radicular.',
  exp:'La maniobra descrita es la de Lasègue. Al elevar la extremidad con la rodilla extendida se tracciona del nervio ciático y de las raíces lumbosacras; flexionar la rodilla libera esa tensión y el dolor cede. Ese comportamiento identifica un origen radicular, no articular. La distribución del dolor por nalga, cara lateral del muslo y pierna sigue un trayecto radicular.',
  no:{0:'La gota de cadera es excepcional y produciría inflamación aguda, no dolor de distribución radicular.',1:'La artrosis coxofemoral duele en la ingle y limita la rotación interna; no se modifica al flexionar la rodilla.',3:'La estenosis de canal produce claudicación neurógena que aparece al CAMINAR y cede al sentarse o flexionar el tronco, no con esta maniobra.'},
  trampa:'El dolor en la nalga y el trocánter hace pensar en la cadera. La maniobra que reproduce y alivia el dolor es la que localiza el origen.',
  dx:['Lumbociatalgia radicular','Coxartrosis','Estenosis de canal lumbar','Bursitis trocantérea'],
  obj:'Interpretar la maniobra de Lasègue para distinguir dolor radicular de articular.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., dolor lumbar y cervical.'
},
'MIR-2021-M123': {
  tema:'Cirugía vascular',
  clave:'Aneurisma torácico de 7 cm con trombo mural que está embolizando a los dedos.',
  exp:'El aneurisma de aorta torácica descendente de 7 cm supera con holgura el umbral de reparación, que se sitúa en torno a los 5,5-6 cm, y además ya está dando embolias distales de material del trombo mural, lo que constituye indicación por sí sola. La reparación endovascular con endoprótesis torácica es hoy el tratamiento de elección para este segmento: menor mortalidad y morbilidad que la cirugía abierta.',
  no:{0:'Las estatinas son parte del tratamiento del riesgo cardiovascular, pero no estabilizan un trombo mural ni evitan la rotura.',1:'La angiotomografía ya realizada es suficiente; la aortografía diagnóstica ha quedado desplazada.',2:'El reimplante de troncos supraaórticos corresponde a los aneurismas del arco; este es distal a la subclavia izquierda.'},
  trampa:'Se atiende solo a los dedos azules, buscando una vasculitis o un fenómeno de Raynaud, sin remontar hasta el origen del émbolo.',
  dx:['Aneurisma de aorta torácica descendente','Ateroembolia de colesterol','Vasculitis','Tromboangeítis obliterante'],
  obj:'Reconocer la embolia distal como indicación de reparar un aneurisma torácico.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con las guías ESC sobre enfermedades de la aorta.'
},
'MIR-2018-M214': {
  tema:'Oncología',
  clave:'Hipertensión grave más edema occipital bilateral en una paciente con bevacizumab.',
  exp:'El síndrome de encefalopatía posterior reversible se produce por fallo de la autorregulación cerebral ante una elevación brusca de la presión arterial, con edema vasogénico de predominio parieto-occipital. El bevacizumab, antiangiogénico anti-VEGF, es una causa reconocida: provoca hipertensión y disfunción endotelial. Se manifiesta con cefalea, alteraciones visuales, convulsiones y confusión. Es reversible si se controla la presión y se suspende el fármaco.',
  no:{1:'La meningitis carcinomatosa produce afectación de pares craneales y realce meníngeo, no edema simétrico de sustancia blanca occipital.',2:'La leucoencefalopatía multifocal progresiva aparece en inmunodeprimidos graves, es de curso subagudo y no cursa con hipertensión grave.',3:'La neurotoxicidad por 5-fluorouracilo es infrecuente y produce síndrome cerebeloso o encefalopatía difusa, no este patrón occipital.'},
  trampa:'En un paciente oncológico todo síntoma neurológico se atribuye a metástasis. Aquí la causa es un efecto adverso reversible del tratamiento.',
  dx:['Síndrome de encefalopatía posterior reversible','Metástasis cerebrales','Encefalopatía hipertensiva','Trombosis venosa cerebral'],
  obj:'Reconocer el PRES asociado a antiangiogénicos.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., encefalopatías, y las guías ESMO sobre toxicidad de antiangiogénicos.'
},

/* ---------------------- ESTADÍSTICA ---------------------- */
'MIR-2016-M123': {
  esp:'Epidemiología', tema:'Epidemiología',
  clave:'Variable que NO se distribuye normalmente, dos grupos independientes: prueba no paramétrica.',
  exp:'La t de Student exige normalidad de la variable. Cuando esa condición no se cumple, la alternativa para comparar dos grupos independientes es la U de Mann-Whitney, que no compara medias sino rangos y por eso no necesita ningún supuesto de distribución. Es la prueba no paramétrica equivalente.',
  no:{1:'La t de Student es paramétrica y exige normalidad, que el enunciado descarta expresamente.',2:'El coeficiente de Pearson mide correlación entre dos variables continuas, no compara grupos.',3:'La F de Snedecor se emplea en el análisis de la varianza, para comparar tres o más grupos, y también asume normalidad.'},
  trampa:'Se elige la t de Student por costumbre sin leer que el enunciado ya advierte que la variable no es normal. Esa frase está puesta ahí a propósito.',
  dx:[],
  obj:'Elegir la prueba estadística según la distribución de la variable y el número de grupos.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Altman, Practical Statistics for Medical Research.'
},
'MIR-2016-M131': {
  esp:'Epidemiología', tema:'Epidemiología',
  clave:'Exposición y desenlace se miden EN EL MISMO MOMENTO: no hay secuencia temporal.',
  exp:'En una sola visita se determina simultáneamente si el paciente tiene síndrome metabólico y cuál es su concentración de vitamina D. Eso es un estudio transversal o de prevalencia: mide asociación pero no permite establecer qué vino antes, de modo que no demuestra causalidad. Su medida natural es la prevalencia y la razón de prevalencias.',
  no:{0:'Una cohorte prospectiva requiere partir de personas sin el desenlace y seguirlas en el tiempo.',2:'Casos y controles partiría de los que tienen síndrome metabólico y de un grupo sin él, mirando hacia atrás la exposición.',3:'El diseño caso-cruzado compara periodos del mismo individuo y se usa para exposiciones transitorias con efectos agudos.'},
  trampa:'Que se cite a los pacientes y se les haga una extracción hace pensar en un seguimiento. Lo que define el diseño es cuántos momentos de medición hay, y aquí solo hay uno.',
  dx:[],
  obj:'Identificar el diseño transversal y su limitación causal.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Gordis, Epidemiología.'
}

});
