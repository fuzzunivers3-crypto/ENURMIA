/* ============================================================
   EXPLICACIONES — lote 02  (60 casos clínicos)
   Áreas que el lote 01 no tocó: endocrinología, digestivo,
   urgencias, obstetricia, hematología, dermatología, pediatría,
   oftalmología y psiquiatría.

   Además de la explicación, varias entradas corrigen la
   especialidad o el tema que el clasificador automático había
   asignado mal. La fusión sobrescribe cualquier campo, así que
   esta capa también sirve para reparar la taxonomía.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ---------------------- ENDOCRINOLOGÍA ---------------------- */
'MIR-2015-M81': {
  clave:'Tirotoxicosis con gammagrafía sin captación y tiroglobulina BAJA.',
  exp:'La tiroglobulina es la clave. En cualquier tirotoxicosis de origen tiroideo —hiperfunción o destrucción glandular— la tiroglobulina está elevada, porque procede de la propia glándula. Solo desciende cuando la hormona viene de fuera del organismo. Eso, unido a la ausencia de bocio y a una gammagrafía sin captación porque la glándula está frenada, define la tirotoxicosis facticia por ingesta de hormona tiroidea exógena.',
  no:{1:'La enfermedad de Graves cursa con bocio difuso y captación gammagráfica aumentada y homogénea, justo lo contrario.',2:'El estruma ovárico también da gammagrafía cervical sin captación, pero la tiroglobulina estaría elevada y la captación aparecería en la pelvis.',3:'La tiroiditis subaguda cursa con dolor cervical, elevación de reactantes y tiroglobulina alta por destrucción folicular.'},
  trampa:'Se responde por la gammagrafía sin captación y se piensa en tiroiditis. La tiroglobulina es lo que separa la destrucción glandular de la hormona tomada por fuera.',
  dx:['Tirotoxicosis facticia','Enfermedad de Graves','Tiroiditis subaguda','Estruma ovárico'],
  obj:'Usar la tiroglobulina para localizar el origen de una tirotoxicosis sin captación.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., trastornos de la glándula tiroides, y las guías de la American Thyroid Association sobre tirotoxicosis.'
},
'MIR-2015-M82': {
  clave:'Dolor con distribución en calcetín, quemante y de predominio nocturno: es dolor neuropático.',
  exp:'La polineuropatía diabética dolorosa no responde a los analgésicos convencionales porque el mecanismo del dolor no es inflamatorio ni nociceptivo. Los fármacos de primera línea son los inhibidores de la recaptación de serotonina y noradrenalina como la duloxetina, los gabapentinoides como la pregabalina y la gabapentina, y los antidepresivos tricíclicos. La duloxetina tiene indicación específica para esta entidad.',
  no:{0:'El ibuprofeno no es eficaz en el dolor neuropático y añade riesgo renal en una paciente diabética de larga evolución.',1:'Los opioides no son de primera línea en dolor crónico no oncológico y su balance riesgo-beneficio es desfavorable a largo plazo.',3:'El paracetamol es analgésico nociceptivo puro: no actúa sobre el mecanismo neuropático.'},
  trampa:'Se aplica la escalera analgésica de la OMS, pensada para el dolor nociceptivo. El dolor neuropático necesita otra familia de fármacos desde el primer escalón.',
  dx:['Polineuropatía diabética dolorosa','Síndrome del túnel del tarso','Insuficiencia arterial periférica'],
  obj:'Reconocer el patrón del dolor neuropático y elegir el fármaco adecuado.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con ADA, Standards of Care in Diabetes, y las guías NeuPSIG sobre dolor neuropático.'
},
'MIR-2016-M201': {
  tema:'Reumatología',
  clave:'Dolor inguinal con rotación interna limitada e imagen radiolucente subcondral en un diabético joven.',
  exp:'La necrosis avascular de la cabeza femoral produce dolor inguinal mecánico y limitación precoz de la rotación interna. La radiografía simple es poco sensible en fases iniciales, y cuando muestra algo —como la imagen subcondral descrita— la enfermedad ya está avanzada. La resonancia magnética es la prueba de elección: detecta la lesión antes que la radiografía y debe hacerse de ambas caderas, porque la afectación bilateral es frecuente aunque solo duela un lado.',
  no:{0:'La gammagrafía es menos sensible y menos específica que la resonancia para esta indicación.',1:'Nada en el caso sugiere metástasis: no hay síndrome constitucional, ni tumor primario conocido, ni lesión lítica destructiva.',3:'La osteoporosis transitoria de cadera es un diagnóstico de exclusión que se establece tras la resonancia, y demorar dos meses con solo una radiografía deja avanzar la necrosis.'},
  trampa:'La radiografía "ya muestra algo" y se da por diagnosticado. En la necrosis avascular el estudio bilateral con resonancia cambia el pronóstico de la cadera aún asintomática.',
  dx:['Necrosis avascular de cabeza femoral','Osteoporosis transitoria de cadera','Coxartrosis','Metástasis ósea'],
  obj:'Indicar resonancia bilateral ante sospecha de necrosis avascular de cadera.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., osteonecrosis, y Campbell, Cirugía Ortopédica.'
},
'MIR-2017-M152': {
  tema:'Neurología',
  clave:'Se pide lo que NO se espera. El trastorno de conducta del sueño REM apunta a cuerpos de Lewy, no a Alzheimer.',
  exp:'El cuadro descrito —amnesia episódica progresiva con prosopagnosia, apraxia del vestido, anomia y anosognosia— es una enfermedad de Alzheimer típica. El trastorno de conducta del sueño REM, en el que el paciente escenifica los sueños por ausencia de atonía muscular, es característico de las sinucleinopatías: demencia por cuerpos de Lewy, enfermedad de Parkinson y atrofia multisistémica. Es, de hecho, uno de los marcadores prodrómicos más útiles para separarlas del Alzheimer.',
  no:{0:'Es esperable: las placas neuríticas y los ovillos neurofibrilares con esa distribución son la anatomía patológica del Alzheimer.',2:'Es esperable: la atrofia del lóbulo temporal medial y del hipocampo es el hallazgo radiológico característico.',3:'Es esperable: el alelo ApoE ε4 es el principal factor de riesgo genético del Alzheimer esporádico.'},
  trampa:'Se conocen los rasgos del Alzheimer pero no los que lo excluyen. Las alucinaciones visuales precoces, la fluctuación cognitiva, el parkinsonismo y el trastorno del sueño REM apuntan a cuerpos de Lewy.',
  dx:['Enfermedad de Alzheimer','Demencia por cuerpos de Lewy','Demencia frontotemporal','Demencia vascular'],
  obj:'Distinguir Alzheimer de demencia por cuerpos de Lewy por sus marcadores clínicos.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., demencias, y los criterios diagnósticos NIA-AA.'
},
'MIR-2018-M172': {
  clave:'La causa más frecuente de pérdida de visión en el diabético no es la hemorragia: es el edema macular.',
  exp:'El edema macular diabético es la principal causa de descenso de agudeza visual en la diabetes, y puede aparecer en cualquier estadio de la retinopatía, también en las formas no proliferativas. La tomografía de coherencia óptica es la prueba que lo cuantifica, y el tratamiento actual se basa en inyecciones intravítreas de fármacos anti-VEGF.',
  no:{0:'Las distrofias maculares son hereditarias y debutan a edades tempranas, sin relación con la diabetes.',1:'La degeneración macular asociada a la edad es una entidad distinta, ligada al envejecimiento y a las drusas, no a la microangiopatía diabética.',2:'El pseudoagujero macular deriva de una membrana epirretiniana, sin relación con la diabetes ni con el mal control glucémico.'},
  trampa:'Se asocia diabetes con retinopatía proliferativa y hemorragia vítrea. La pérdida visual más frecuente, y la más tratable, viene del edema macular.',
  dx:['Edema macular diabético','Retinopatía diabética proliferativa','Degeneración macular asociada a la edad'],
  obj:'Reconocer el edema macular como principal causa de pérdida visual en la diabetes.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con ADA, Standards of Care in Diabetes, capítulo de complicaciones microvasculares.'
},
'MIR-2018-M69': {
  tema:'Cardiología',
  clave:'Se pide la INCORRECTA. La obesidad BAJA el NT-proBNP, pero eso no significa que se esperen valores bajos en una paciente con edema agudo de pulmón.',
  exp:'Es cierto que la obesidad reduce las concentraciones de péptidos natriuréticos y obliga a interpretar el resultado con umbrales ajustados. Pero esta paciente tiene una insuficiencia cardíaca aguda franca —ortopnea, crepitantes hasta campos medios, edemas, hipoxemia—, situación en la que el NT-proBNP se eleva de forma marcada. Afirmar que se esperan valores por debajo de 450 pg/mL es incorrecto: ese umbral es el de exclusión en el paciente joven, y aquí todo apunta a lo contrario.',
  no:{0:'Es correcta: oxígeno, diurético de asa y nitratos son el tratamiento del edema agudo de pulmón con presión arterial conservada, y esta paciente está hipertensa.',2:'Es correcta: el deterioro de la función renal durante el ingreso por insuficiencia cardíaca es un marcador pronóstico independiente.',3:'Es correcta: la apnea del sueño es muy prevalente en el obeso con insuficiencia cardíaca y agrava la disnea.'},
  trampa:'Se recuerda el dato aislado "la obesidad baja el BNP" y se marca como correcta sin comprobar si encaja con la gravedad clínica del caso.',
  dx:['Insuficiencia cardíaca aguda','Edema agudo de pulmón','Síndrome de apnea del sueño'],
  obj:'Interpretar los péptidos natriuréticos en el contexto clínico, no de forma aislada.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la guía ESC de insuficiencia cardíaca.'
},
'MIR-2018-M87': {
  clave:'Parestesias y luego calambres y obnubilación la misma noche de una tiroidectomía total con vaciamiento central.',
  exp:'El vaciamiento del compartimento central pone en riesgo las glándulas paratiroides. El hipoparatiroidismo posquirúrgico provoca hipocalcemia aguda, que empieza con parestesias peribucales y acras y progresa a calambres, tetania, laringoespasmo y convulsiones. El tratamiento es calcio —intravenoso si hay síntomas graves— junto con vitamina D activa. Las parestesias iniciales eran el aviso, y sedarlas con un neuroléptico enmascaró el cuadro.',
  no:{0:'La benzodiacepina trataría un efecto extrapiramidal, pero el problema no es el neuroléptico: es la hipocalcemia que ya estaba dando síntomas antes de administrarlo.',1:'El hipotiroidismo tras tiroidectomía tarda semanas en manifestarse, no horas, y no cursa con tetania.',2:'La calcitonina baja aún más el calcio: sería exactamente lo contrario de lo que necesita el paciente.'},
  trampa:'Sedar el síntoma sin preguntarse por qué aparece. En un postoperatorio de tiroides, hormigueos en las manos son hipocalcemia hasta demostrar lo contrario.',
  dx:['Hipoparatiroidismo posquirúrgico','Hipocalcemia aguda','Efecto extrapiramidal'],
  obj:'Reconocer la hipocalcemia posquirúrgica y no enmascararla con sedantes.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., trastornos del metabolismo del calcio.'
},
'MIR-2018-M93': {
  clave:'Hiperparatiroidismo primario con litiasis renal: ya hay lesión de órgano diana.',
  exp:'La cirugía está indicada en el hiperparatiroidismo primario cuando aparece afectación de órgano diana —litiasis renal, osteoporosis, fracturas, deterioro del filtrado glomerular—, cuando la calcemia supera en más de 1 mg/dL el límite superior normal, o en menores de 50 años. Esta paciente tiene litiasis demostrada, de modo que aunque esté asintomática ya cumple criterio quirúrgico. La gammagrafía Sestamibi localiza el adenoma y permite una cirugía mínimamente invasiva.',
  no:{0:'El cinacalcet baja la calcemia pero no protege el hueso ni el riñón; se reserva para quien no puede operarse.',1:'El balance calcio-fósforo urinario sirve para descartar hipercalcemia hipocalciúrica familiar, algo que se hace antes del diagnóstico, no una vez establecido y con litiasis.',2:'Revalorar al año a una paciente que ya tiene litiasis es dejar avanzar el daño renal.'},
  trampa:'La palabra "asintomática" hace pensar en observación. La litiasis es la lesión de órgano diana que convierte el caso en quirúrgico aunque no haya síntomas.',
  dx:['Hiperparatiroidismo primario','Hipercalcemia hipocalciúrica familiar','Hipercalcemia tumoral'],
  obj:'Conocer los criterios quirúrgicos del hiperparatiroidismo primario asintomático.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías del Fourth International Workshop sobre hiperparatiroidismo primario asintomático.'
},

/* ---------------------- DIGESTIVO ---------------------- */
'MIR-2015-M104': {
  tema:'Infectología',
  clave:'Dolor desproporcionado a los hallazgos locales, con sepsis rápida en un usuario de drogas por vía parenteral.',
  exp:'La fascitis necrotizante empieza con un dolor intensísimo y una piel que todavía parece casi normal: la infección corre por la fascia, por debajo de lo que se ve. Esa discordancia entre síntoma y signo es su marca. Progresa en horas a sepsis y fallo multiorgánico. El diagnóstico es clínico y quirúrgico, y el tratamiento es el desbridamiento urgente junto con antibiótico de amplio espectro; cualquier demora aumenta la mortalidad.',
  no:{1:'La gangrena por Clostridium cursa con crepitación y gas en tejidos blandos, habitualmente tras herida contaminada con tierra o cirugía intestinal.',2:'Las micobacterias producen infecciones cutáneas indolentes, de semanas o meses, no un cuadro séptico de 24 horas.',3:'La erisipela afecta la dermis superficial, con placa bien delimitada, sobreelevada y eritematosa, y no produce shock ni dolor desproporcionado.'},
  trampa:'La ausencia de signos inflamatorios locales tranquiliza. En la fascitis necrotizante es justo lo contrario: la piel normal con dolor extremo es el signo de alarma.',
  dx:['Fascitis necrotizante','Gangrena gaseosa','Celulitis','Piomiositis'],
  obj:'Reconocer la discordancia dolor-signos como marca de infección necrotizante.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía IDSA de infecciones de piel y tejidos blandos.'
},
'MIR-2015-M226': {
  clave:'Carcinoma in situ limitado a la cabeza de un pólipo pediculado, ya extirpado por completo.',
  exp:'El carcinoma in situ no atraviesa la muscularis mucosae, de modo que no tiene acceso a linfáticos ni capacidad de metastatizar. Si la polipectomía fue completa y la lesión queda confinada a la cabeza del pólipo, la extirpación endoscópica es curativa y solo procede seguimiento endoscópico. La cirugía se reservaría para carcinoma invasor con factores de mal pronóstico: margen afectado, invasión linfovascular o grado histológico alto.',
  no:{0:'La resección segmentaria sería sobretratamiento con morbilidad quirúrgica innecesaria.',2:'La resección local de la base no aporta nada si la lesión estaba limitada a la cabeza y la polipectomía fue completa.',3:'La sigmoidectomía con linfadenectomía es una cirugía oncológica mayor sin indicación en una lesión sin capacidad metastásica.'},
  trampa:'La palabra "carcinoma" empuja a operar. Lo decisivo es si atravesó la muscularis mucosae: mientras no lo haga, no hay riesgo ganglionar.',
  dx:['Pólipo con carcinoma in situ','Adenocarcinoma de colon invasor','Adenoma con displasia de alto grado'],
  obj:'Distinguir carcinoma in situ de invasor y sus consecuencias terapéuticas.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías ESMO sobre cáncer de colon y Schwartz 11.ª ed.'
},
'MIR-2015-M32': {
  clave:'Diarrea acuosa crónica con endoscopia normal: el diagnóstico está en la biopsia.',
  exp:'La colitis microscópica se llama así porque la mucosa parece normal al endoscopio y solo la histología revela la lesión. La variante colágena se define por una banda de colágeno subepitelial engrosada, que el tricrómico de Masson tiñe con claridad, junto con aumento de linfocitos intraepiteliales. Es causa frecuente de diarrea acuosa crónica en mujeres de mediana edad y responde a la budesonida.',
  no:{0:'La colitis ulcerosa produce alteraciones endoscópicas evidentes: friabilidad, úlceras, pérdida del patrón vascular.',1:'La colitis pseudomembranosa muestra placas amarillentas visibles y se asocia a antibióticos y a Clostridioides difficile.',3:'La enfermedad de Crohn cursa con lesiones segmentarias visibles, úlceras profundas y granulomas.'},
  trampa:'Una endoscopia normal se interpreta como colon sano y no se biopsia. En la diarrea acuosa crónica hay que biopsiar aunque la mucosa parezca normal.',
  dx:['Colitis colágena','Colitis linfocítica','Síndrome de intestino irritable','Enfermedad celíaca'],
  obj:'Biopsiar el colon de aspecto normal ante diarrea acuosa crónica.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Robbins, Patología Estructural y Funcional, y Harrison 21.ª ed.'
},
'MIR-2015-M71': {
  clave:'Impactación alimentaria recurrente en un joven con asma y múltiples alergias.',
  exp:'La esofagitis eosinofílica es una enfermedad inmunoalérgica del esófago que se manifiesta con disfagia para sólidos e impactación alimentaria en varones jóvenes con atopia. El diagnóstico exige biopsias esofágicas escalonadas con recuento de eosinófilos por campo de gran aumento. El tratamiento combina dieta de eliminación, inhibidores de la bomba de protones y corticoides tópicos deglutidos.',
  no:{0:'El esófago de Barrett es una metaplasia por reflujo crónico, propia de adultos de más edad, y no produce impactaciones recurrentes.',1:'El anillo de Schatzki produce disfagia intermitente, pero no se asocia al perfil atópico ni a episodios tan repetidos en un joven.',2:'La esofagitis infecciosa aparece en inmunodeprimidos y cursa con odinofagia, no con impactación alimentaria recurrente.'},
  trampa:'Se atribuye la disfagia al reflujo. El contexto atópico —asma, rinitis, alergias múltiples— es lo que reorienta hacia el esófago eosinofílico.',
  dx:['Esofagitis eosinofílica','Anillo de Schatzki','Acalasia','Estenosis péptica'],
  obj:'Asociar impactación alimentaria y atopia con esofagitis eosinofílica.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías conjuntas europeas UEG sobre esofagitis eosinofílica.'
},
'MIR-2015-M74': {
  clave:'1.380 polimorfonucleares por microlitro en el líquido ascítico: 60% de 2.300 supera con creces el umbral de 250.',
  exp:'El recuento de polimorfonucleares por encima de 250 por microlitro en líquido ascítico diagnostica peritonitis bacteriana espontánea, sin esperar al cultivo, que resulta negativo en una proporción importante de casos. El tratamiento empírico inmediato con cefalosporina de tercera generación reduce la mortalidad, y se asocia albúmina para prevenir el síndrome hepatorrenal. La ausencia de fiebre no descarta nada: el cirrótico puede estar afebril.',
  no:{0:'La restricción de sal y líquidos maneja la ascitis, no la infección.',1:'El diurético no trata la infección y puede precipitar deterioro renal en un paciente séptico.',3:'La paracentesis evacuadora alivia la tensión abdominal pero no es la primera medida ante una infección establecida.'},
  trampa:'La ausencia de fiebre y de dolor hace descartar la infección. Hay que calcular el recuento absoluto de neutrófilos, no fiarse de la clínica.',
  dx:['Peritonitis bacteriana espontánea','Ascitis no complicada','Peritonitis secundaria','Carcinomatosis peritoneal'],
  obj:'Calcular los polimorfonucleares del líquido ascítico y tratar sin esperar cultivo.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías EASL sobre complicaciones de la cirrosis.'
},
'MIR-2016-M226': {
  clave:'Fístula perianal compleja en el contexto de una enfermedad de Crohn no tratada.',
  exp:'En la enfermedad de Crohn perianal fistulizante, la fistulotomía está contraindicada en trayectos transesfinterianos altos por el riesgo elevado de incontinencia y de mala cicatrización. La estrategia correcta combina el drenaje mantenido con sedal no cortante, que evita la formación de abscesos sin seccionar el esfínter, junto con tratamiento médico: antibiótico, inmunosupresor y anti-TNF, que es el que realmente cierra las fístulas.',
  no:{0:'La fistulotomía en un trayecto transesfinteriano alto, y además con enfermedad activa, tiene alto riesgo de incontinencia definitiva.',2:'Drenar cada absceso sin colocar sedal deja que se repita el ciclo de acumulación y drenaje indefinidamente.',3:'La esfinterotomía lateral interna es el tratamiento de la fisura anal crónica, no de la fístula, y en el Crohn empeora la continencia.'},
  trampa:'Se trata la fístula como quirúrgica pura. En el Crohn el cierre lo consigue el tratamiento médico; la cirugía solo drena y protege el esfínter.',
  dx:['Enfermedad de Crohn perianal fistulizante','Fístula criptoglandular','Absceso perianal'],
  obj:'Manejar la fístula perianal del Crohn combinando sedal y tratamiento biológico.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías ECCO sobre enfermedad de Crohn perianal.'
},
'MIR-2016-M74': {
  clave:'Cáncer de recto sobre colitis ulcerosa de 15 años con actividad en el resto del colon.',
  exp:'Cuando aparece un cáncer sobre una colitis ulcerosa de larga evolución, el problema no es solo el tumor: todo el colon restante sigue siendo mucosa en riesgo, y además está activo. Por eso la cirugía indicada es la panproctocolectomía, que elimina simultáneamente el tumor, el riesgo de neoplasia sincrónica o metacrónica y la enfermedad inflamatoria. El reservorio ileoanal preserva la continencia y la ileostomía de protección resguarda la anastomosis.',
  no:{1:'La resección anterior baja trata el tumor pero deja in situ un colon enfermo y con riesgo oncológico mantenido.',2:'La amputación abdominoperineal se reserva para tumores que infiltran el esfínter, y este es un T2 a ocho centímetros del margen anal.',3:'Un tumor T2 resecable no se trata con radioterapia y cirugía local: se opera con intención curativa.'},
  trampa:'Se resuelve el tumor y se olvida la enfermedad de base. En la colitis ulcerosa de larga evolución, el colon entero es el órgano en riesgo.',
  dx:['Cáncer colorrectal sobre colitis ulcerosa','Displasia asociada a lesión o masa','Adenocarcinoma de recto esporádico'],
  obj:'Extender la cirugía a todo el colon en riesgo en el cáncer sobre colitis ulcerosa.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías ECCO sobre cáncer colorrectal en la enfermedad inflamatoria intestinal.'
},
'MIR-2016-M76': {
  clave:'Se pide la INCORRECTA. Con presión de 70/40 mmHg no se prepara el colon: se reanima.',
  exp:'En la hemorragia digestiva baja con inestabilidad hemodinámica, la prioridad absoluta es la reanimación: accesos venosos, fluidos, cruzar y transfusar hemoderivados. Insistir en la preparación del colon en un paciente en shock retrasa la estabilización y añade riesgo de broncoaspiración. La colonoscopia se realiza después, con el paciente estable; si el sangrado es masivo y persiste, se recurre a la angiotomografía o la arteriografía.',
  no:{1:'Es correcta: hasta un 10-15% de las hemorragias aparentemente bajas proceden en realidad de un origen alto con tránsito acelerado.',2:'Es correcta: la colonoscopia combina diagnóstico y tratamiento, con buena seguridad y rendimiento.',3:'Es correcta: la gammagrafía con pertecnetato detecta mucosa gástrica ectópica y es la prueba del divertículo de Meckel.'},
  trampa:'Se piensa en la prueba diagnóstica antes que en el estado del paciente. En el sangrado con shock, primero se estabiliza y después se busca el origen.',
  dx:['Hemorragia digestiva baja','Divertículo sangrante','Angiodisplasia','Neoplasia colorrectal'],
  obj:'Priorizar la estabilización hemodinámica sobre el estudio diagnóstico.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la American College of Gastroenterology sobre hemorragia digestiva baja.'
},
'MIR-2020-M155': {
  tema:'Gastroenterología',
  clave:'Colestasis sin dilatación de la vía biliar y sin dolor, en un paciente que toma ibuprofeno.',
  exp:'La hiperbilirrubinemia directa con acolia y coluria indica colestasis. Al no haber dilatación de la vía biliar, la obstrucción mecánica queda descartada y el problema es intrahepático. En un paciente joven, sin alcohol y sin otra medicación, el antiinflamatorio ocasional es la causa más probable: la hepatotoxicidad por antiinflamatorios no esteroideos es idiosincrásica y puede aparecer con dosis normales. El manejo es retirar el fármaco y vigilar.',
  no:{0:'La colangitis cursa con fiebre y dolor —tríada de Charcot— y suele mostrar dilatación de la vía biliar.',2:'El colangiocarcinoma produciría dilatación de la vía biliar por encima de la obstrucción, ausente en la ecografía.',3:'El síndrome de Gilbert cursa con hiperbilirrubinemia INDIRECTA leve, sin coluria ni acolia: exactamente el patrón contrario.'},
  trampa:'Se pasa por alto la medicación "ocasional" y sin receta. En toda colestasis sin obstrucción hay que preguntar por fármacos, suplementos y productos de herboristería.',
  dx:['Hepatitis tóxica por AINE','Hepatitis viral aguda','Colangitis biliar primaria','Coledocolitiasis'],
  obj:'Diferenciar colestasis obstructiva de intrahepática y buscar la causa farmacológica.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., lesión hepática inducida por fármacos.'
},
'MIR-2015-M233': {
  esp:'Pediatría', tema:'Gastroenterología',
  clave:'Se pide qué NO haría. El diagnóstico probable es esofagitis eosinofílica, y Helicobacter pylori no pinta nada.',
  exp:'Un adolescente con antecedentes atópicos, eccema, disfagia para sólidos y pirosis apunta a esofagitis eosinofílica y a enfermedad por reflujo, entidades que además pueden coexistir. El estudio se dirige al esófago: endoscopia con biopsias escalonadas, pHmetría para documentar el reflujo y, si se sospecha alteración estructural, estudio baritado. El test de aliento investiga infección gástrica por Helicobacter pylori, que no produce disfagia ni tiene relación con el cuadro.',
  no:{0:'Es imprescindible: solo la endoscopia con biopsias permite contar eosinófilos y diagnosticar la esofagitis eosinofílica.',1:'Es razonable para documentar reflujo ácido patológico y valorar su contribución a la pirosis.',3:'Es razonable si se quiere descartar hernia hiatal o anillo esofágico, sobre todo con el antecedente familiar.'},
  trampa:'El antecedente familiar de hernia hiatal y la pirosis empujan al reflujo, y de ahí a Helicobacter. La disfagia y la atopia son lo que reorienta al esófago eosinofílico.',
  dx:['Esofagitis eosinofílica','Enfermedad por reflujo gastroesofágico','Hernia hiatal','Anillo esofágico'],
  obj:'Dirigir el estudio al esófago y descartar pruebas sin relación con el cuadro.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed. y las guías UEG sobre esofagitis eosinofílica.'
},

/* ---------------------- URGENCIAS ---------------------- */
'MIR-2015-M101': {
  tema:'Neurología',
  clave:'Fiebre, afasia y afectación temporal en la tomografía: encefalitis herpética.',
  exp:'La afectación del lóbulo temporal con fiebre y alteración del lenguaje es el cuadro característico de la encefalitis por virus herpes simple. El líquido cefalorraquídeo muestra pleocitosis de predominio linfocitario con glucorraquia normal y proteínas ligeramente elevadas, a menudo con hematíes por el componente necrohemorrágico. El diagnóstico se confirma con PCR para virus herpes, pero el aciclovir intravenoso debe iniciarse ante la sospecha, sin esperar resultados: el retraso empeora el pronóstico de forma drástica.',
  no:{0:'La meningitis bacteriana cursa con rigidez de nuca, pleocitosis de neutrófilos y glucorraquia baja, y no produce afasia focal con lesión temporal.',2:'La encefalitis límbica autoinmune tiene un curso subagudo de semanas, con alteración de memoria y conducta, no dos días de fiebre y afasia.',3:'El absceso cerebral produce una lesión con efecto de masa y captación de contraste en anillo, ausentes en la tomografía descrita.'},
  trampa:'La ausencia de rigidez de nuca hace descartar infección del sistema nervioso. En la encefalitis la meningitis puede faltar; lo que domina es la afectación del parénquima.',
  dx:['Encefalitis herpética','Meningitis bacteriana','Absceso cerebral','Encefalitis autoinmune'],
  obj:'Reconocer la encefalitis herpética por su localización temporal y su perfil de líquido.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía IDSA de encefalitis y Harrison 21.ª ed.'
},
'MIR-2015-M121': {
  clave:'Hipoxemia grave que persiste con oxígeno al 100%, en un pulmón atelectasiado.',
  exp:'La atelectasia de dos tercios del pulmón deja un territorio perfundido pero no ventilado: la sangre lo atraviesa sin oxigenarse. Eso es un cortocircuito, o shunt, y su rasgo definitorio es que no se corrige administrando oxígeno, porque el gas nunca llega a los alvéolos colapsados. El tratamiento es reexpandir el pulmón, no subir la fracción inspirada de oxígeno.',
  no:{1:'En la hipoventilación la PaCO₂ estaría elevada, y aquí está baja: el paciente hiperventila.',2:'La baja presión inspirada de oxígeno ocurre en altitud o con mezclas hipóxicas, no con una FiO₂ de 1,0.',3:'La enfermedad neuromuscular produce hipoventilación con hipercapnia, patrón contrario al del caso.'},
  trampa:'Se elige "hipoventilación" porque el paciente está en insuficiencia respiratoria. La PaCO₂ baja lo descarta: hay que leer el CO₂ antes de contestar.',
  dx:['Atelectasia con cortocircuito','Síndrome de distrés respiratorio agudo','Hipoventilación alveolar'],
  obj:'Identificar el cortocircuito por su falta de respuesta al oxígeno.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Guyton y Hall, Tratado de Fisiología Médica, y Harrison 21.ª ed.'
},
'MIR-2015-M139': {
  tema:'Reumatología',
  clave:'Pérdida visual brusca en una anciana con polimialgia y claudicación mandibular: arteritis de células gigantes.',
  exp:'Es una urgencia: la neuropatía óptica isquémica arterítica puede afectar al ojo contralateral en días y dejar ceguera bilateral irreversible. Los reactantes de fase aguda —proteína C reactiva y velocidad de sedimentación— se solicitan de inmediato porque están casi siempre muy elevados y apoyan el diagnóstico en minutos. Pero lo esencial es que el corticoide en dosis altas se inicia ante la sospecha, sin esperar a la biopsia de arteria temporal, que sigue siendo positiva días después de empezar el tratamiento.',
  no:{0:'La punción lumbar no aporta nada en esta entidad.',2:'La angiorresonancia puede mostrar afectación de grandes vasos, pero no es la primera prueba ni debe retrasar el corticoide.',3:'La ecografía carotídea investiga origen embólico, que no explica la polimialgia ni la claudicación mandibular.'},
  trampa:'Esperar la biopsia para tratar. Cada hora sin corticoide es riesgo de perder el otro ojo, y la biopsia sigue siendo interpretable después de iniciarlo.',
  dx:['Arteritis de células gigantes','Neuropatía óptica isquémica no arterítica','Oclusión de arteria central de la retina'],
  obj:'Iniciar corticoides ante sospecha de arteritis de células gigantes sin esperar la biopsia.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las recomendaciones EULAR sobre vasculitis de grandes vasos.'
},
'MIR-2015-M181': {
  clave:'Se pide qué EVITAR. Cambiar el tratamiento sin haber visto al paciente.',
  exp:'Modificar el tratamiento basándose en la impresión de un tercero y en la gráfica, sin haber realizado la historia clínica ni la exploración física, es una práctica insegura: la intranquilidad puede ser dolor, retención urinaria, hipoxemia, delirium o abstinencia, y cada causa exige una conducta distinta. La secuencia correcta es valorar al paciente, formarse una impresión diagnóstica propia y solo entonces decidir.',
  no:{0:'Es correcto: revisar el informe previo y solicitar las pruebas que requieran ayuno antes de que el paciente coma es buena práctica organizativa.',2:'Es correcto: la historia clínica completa registrada, con impresión diagnóstica y plan, es la base de la continuidad asistencial.',3:'Es correcto: informar al paciente y a su persona de referencia sobre las perspectivas del ingreso forma parte de la atención.'},
  trampa:'La opción parece eficiente y resolutiva. Tratar por teléfono a un paciente que no se ha visto es de los errores más frecuentes en las guardias.',
  dx:['Delirium','Dolor no controlado','Retención urinaria','Síndrome de abstinencia'],
  obj:'Valorar al paciente antes de modificar el tratamiento.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las recomendaciones de seguridad del paciente de la OMS.'
},
'MIR-2015-M63': {
  clave:'Paro presenciado dentro del hospital, sin respiración y sin pulso: empezar compresiones ya.',
  exp:'Confirmada la ausencia de respiración y de pulso, y pedida la ayuda, la maniobra siguiente son las compresiones torácicas de alta calidad: al menos 100 a 120 por minuto, con 5 a 6 centímetros de profundidad y permitiendo la reexpansión completa del tórax. Las guías priorizan iniciar y mantener las compresiones con las mínimas interrupciones posibles, porque la perfusión coronaria y cerebral depende de ellas.',
  no:{1:'El golpe precordial tiene indicación muy restringida, solo en taquicardia ventricular presenciada y monitorizada con desfibrilador no disponible de inmediato; no forma parte de la secuencia habitual.',2:'Las ventilaciones vienen después del primer ciclo de compresiones, en la relación 30 a 2.',3:'La intubación es vía aérea avanzada y nunca debe retrasar ni interrumpir las compresiones.'},
  trampa:'Se piensa en la vía aérea primero, por la secuencia clásica ABC. Las guías actuales anteponen la circulación: compresiones primero.',
  dx:['Parada cardiorrespiratoria','Síndrome coronario agudo'],
  obj:'Aplicar la secuencia actual de reanimación priorizando las compresiones.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías del European Resuscitation Council y de la AHA.'
},
'MIR-2015-M96': {
  tema:'Hematología',
  clave:'Se pide la prueba que NO hace falta. JAK2 se estudia en neoplasias mieloproliferativas, no en la trombocitopenia aislada.',
  exp:'El cuadro es una trombocitopenia inmune primaria: plaquetas muy bajas con hemoglobina, leucocitos y coagulación normales. Es un diagnóstico de exclusión, y el estudio busca causas secundarias: frotis de sangre periférica para descartar pseudotrombocitopenia y esquistocitos, anticuerpos antinucleares para descartar lupus, serologías, y aspirado medular en casos seleccionados. La mutación JAK2 se investiga ante trombocitosis, policitemia o mielofibrosis: es la situación contraria.',
  no:{1:'El aspirado medular está justificado para descartar infiltración o displasia, sobre todo si hay dudas o mala respuesta al tratamiento.',2:'Los anticuerpos antinucleares son necesarios: el lupus es una causa frecuente de trombocitopenia inmune secundaria.',3:'El frotis es imprescindible y es la primera prueba: descarta el agregado plaquetario que produce falsas trombocitopenias.'},
  trampa:'Se marca JAK2 como "prueba moderna que conviene pedir". Su indicación es exactamente la opuesta: exceso de células, no defecto.',
  dx:['Trombocitopenia inmune primaria','Lupus eritematoso sistémico','Pseudotrombocitopenia','Aplasia medular'],
  obj:'Orientar el estudio de una trombocitopenia aislada y descartar pruebas sin indicación.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías de la American Society of Hematology sobre trombocitopenia inmune.'
},
'MIR-2016-M105': {
  tema:'Infectología',
  clave:'Se pide la FALSA. El germen de la otitis externa maligna es Pseudomonas aeruginosa, no Haemophilus.',
  exp:'La otitis externa maligna, o necrotizante, es una osteomielitis de la base del cráneo que aparece en diabéticos mal controlados y en inmunodeprimidos. El agente responsable en la inmensa mayoría de los casos es Pseudomonas aeruginosa. La parálisis facial indica extensión ósea y empeora el pronóstico. El tratamiento exige antibiótico antipseudomónico prolongado, iniciado por vía intravenosa.',
  no:{0:'Es cierta: se trata como una osteomielitis, con varias semanas de antibiótico y fase inicial intravenosa.',2:'Es cierta: la ceftazidima es un antipseudomónico adecuado como tratamiento empírico.',3:'Es cierta: el cultivo con antibiograma es esencial para dirigir un tratamiento tan prolongado.'},
  trampa:'Se aplica la microbiología de la otitis MEDIA —neumococo, Haemophilus, Moraxella— a la otitis EXTERNA maligna, cuyo agente es completamente distinto.',
  dx:['Otitis externa maligna','Otitis externa difusa','Colesteatoma','Carcinoma del conducto auditivo'],
  obj:'Asociar la otitis externa maligna del diabético con Pseudomonas aeruginosa.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Mandell, Principios y Práctica de Enfermedades Infecciosas.'
},
'MIR-2016-M191': {
  tema:'Reumatología',
  clave:'Monoartritis aguda con 20.000 leucocitos en el líquido, sin cristales, en un diabético hospitalizado recientemente.',
  exp:'Un líquido sinovial con 20.000 leucocitos y 85% de polimorfonucleares es francamente inflamatorio y obliga a tratar como artritis séptica hasta que el cultivo lo desmienta. Ni la ausencia de cristales ni un Gram negativo la descartan: el Gram es positivo en apenas la mitad de los casos. La diabetes y el ingreso reciente añaden riesgo. La conducta es ingreso, antibiótico parenteral inmediato y drenaje articular.',
  no:{0:'Infiltrar corticoide en una articulación posiblemente infectada agrava la infección de forma grave.',1:'El tratamiento ambulatorio oral con revisión en una semana es inaceptable: la artritis séptica destruye el cartílago en días.',3:'La hiperuricemia asintomática no diagnostica gota, y no se han visto cristales; además el alopurinol nunca se inicia en la crisis aguda.'},
  trampa:'El ácido úrico elevado empuja al diagnóstico de gota. La hiperuricemia es frecuente y no diagnostica nada por sí sola; sin cristales, la prioridad es descartar infección.',
  dx:['Artritis séptica','Artritis gotosa','Artritis por pirofosfato','Artritis reactiva'],
  obj:'Tratar toda monoartritis muy inflamatoria como séptica hasta descartarla.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., artritis infecciosa.'
},

/* ---------------------- OBSTETRICIA Y GINECOLOGÍA ---------------------- */
'MIR-2015-M161': {
  tema:'Ginecología',
  clave:'Dismenorrea, dispareunia, disquecia con rectorragia cíclica e infertilidad: endometriosis profunda.',
  exp:'La combinación de dolor menstrual, dolor con las relaciones, síntomas digestivos que aparecen coincidiendo con la regla y esterilidad dibuja una endometriosis con afectación profunda del tabique rectovaginal. La ecografía y la resonancia orientan y son muy útiles para planificar, pero el diagnóstico de certeza exige visualizar las lesiones y confirmarlas histológicamente, lo que se consigue con laparoscopia.',
  no:{0:'La ecografía transvaginal detecta bien los endometriomas ováricos, pero puede ser normal en la enfermedad peritoneal superficial.',2:'La resonancia mapea la endometriosis profunda y ayuda a planificar la cirugía, pero no da certeza histológica.',3:'La colonoscopia puede ser normal si la lesión no infiltra la mucosa, ya que la endometriosis invade desde fuera hacia dentro.'},
  trampa:'Una ecografía normal se toma como que no hay endometriosis. Es una de las causas más frecuentes de retraso diagnóstico, que en esta enfermedad se mide en años.',
  dx:['Endometriosis profunda','Síndrome de intestino irritable','Enfermedad inflamatoria pélvica','Adenomiosis'],
  obj:'Reconocer el patrón cíclico de los síntomas y el papel de la laparoscopia.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías ESHRE sobre endometriosis.'
},
'MIR-2015-M166': {
  clave:'Hipertensión detectada antes de las 20 semanas de gestación.',
  exp:'La frontera de las 20 semanas es la que clasifica la hipertensión en el embarazo. Antes de esa fecha, la hipertensión es crónica: preexistía al embarazo aunque no estuviera diagnosticada. Después de las 20 semanas se habla de hipertensión gestacional si no hay proteinuria ni afectación de órgano, y de preeclampsia si aparecen. A las 10 semanas, con hemograma normal y proteinuria negativa, el diagnóstico es hipertensión crónica.',
  no:{0:'La preeclampsia exige gestación de más de 20 semanas y proteinuria o afectación de órgano diana; aquí no hay ninguna de las dos cosas.',1:'La hipertensión inducida por el embarazo aparece después de las 20 semanas por definición.',3:'La eclampsia requiere convulsiones sobre una preeclampsia, situación muy alejada de este caso.'},
  trampa:'Se clasifica por la cifra de presión y no por la edad gestacional. Las 20 semanas son la línea que ordena toda la clasificación.',
  dx:['Hipertensión crónica en el embarazo','Hipertensión gestacional','Preeclampsia'],
  obj:'Clasificar los trastornos hipertensivos del embarazo por la edad gestacional.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con los boletines del ACOG sobre hipertensión en el embarazo y Williams Obstetricia, 26.ª ed.'
},
'MIR-2016-M168': {
  clave:'Hemorragia del tercer trimestre INDOLORA, con útero relajado y feto con buen estado.',
  exp:'El sangrado rojo brillante, sin dolor, sin contracciones y sin sufrimiento fetal, en una paciente con cesárea previa, orienta a placenta previa. La ecografía transvaginal es la prueba de elección para localizar la placenta y es segura en este contexto: el transductor no se introduce hasta el cérvix. El antecedente de cesárea obliga además a descartar acretismo placentario. El tacto vaginal está formalmente contraindicado antes de localizar la placenta.',
  no:{0:'La cesárea urgente no está indicada: la paciente está estable, el feto está bien y la gestación es de 32 semanas.',2:'Inducir el parto sin saber dónde está la placenta puede desencadenar una hemorragia masiva.',3:'La amniorrexis artificial es peligrosísima si hay placenta previa o vasa previa.'},
  trampa:'Se actúa antes de localizar la placenta. Ante sangrado del tercer trimestre, la ecografía va primero y el tacto vaginal está prohibido hasta descartar placenta previa.',
  dx:['Placenta previa','Desprendimiento de placenta','Rotura uterina','Vasa previa'],
  obj:'Localizar la placenta antes de cualquier maniobra en la hemorragia del tercer trimestre.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías del RCOG sobre placenta previa y Williams Obstetricia, 26.ª ed.'
},
'MIR-2017-M107': {
  clave:'Trombosis provocada por un factor de riesgo transitorio ya desaparecido, con trombofilia negativa.',
  exp:'La embolia pulmonar ocurrió hace siete años en presencia de un desencadenante claro y reversible: los anticonceptivos orales. Un episodio provocado por un factor transitorio ya retirado, sin trombofilia demostrada y sin recurrencias, sitúa a la paciente en riesgo bajo. En ese escenario las guías no recomiendan heparina profiláctica sistemática durante todo el embarazo, sino medidas mecánicas y vigilancia, valorando profilaxis en el posparto, que es el periodo de mayor riesgo.',
  no:{0:'La heparina durante todo el embarazo y seis semanas posparto corresponde al riesgo alto: trombofilia de alto riesgo, episodios no provocados o recurrentes.',1:'La aspirina no es un antitrombótico venoso eficaz para esta indicación.',2:'Los cumarínicos son teratógenos y están contraindicados en el embarazo, sobre todo en el primer trimestre.'},
  trampa:'Todo antecedente de tromboembolia parece exigir heparina. La estratificación depende de si el episodio fue provocado, de si el factor persiste y de si hay trombofilia.',
  dx:['Antecedente de tromboembolia provocada','Trombofilia hereditaria','Síndrome antifosfolípido'],
  obj:'Estratificar el riesgo trombótico en el embarazo según el carácter del episodio previo.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con las guías del RCOG y del ACCP sobre tromboprofilaxis en el embarazo.'
},
'MIR-2017-M112': {
  clave:'Plaquetas en acúmulos en el frotis: el contador las cuenta como una sola.',
  exp:'La pseudotrombocitopenia por EDTA es un artefacto de laboratorio: el anticoagulante del tubo provoca la agregación de las plaquetas en presencia de ciertos autoanticuerpos, y el contador automático interpreta cada acúmulo como una única plaqueta. La cifra real es normal. Se confirma repitiendo el hemograma en tubo con citrato o heparina. Por eso el frotis de sangre periférica es obligatorio antes de estudiar cualquier trombocitopenia.',
  no:{0:'La trombocitopenia inmune primaria es un diagnóstico de exclusión, y aquí el frotis ya explica el resultado.',1:'La trombocitopenia gestacional es leve, aparece en el tercer trimestre y rara vez baja de 70.000; no cuadra con 16 semanas ni con estas cifras.',3:'La púrpura trombótica trombocitopénica cursa con anemia hemolítica, esquistocitos, fiebre y afectación neurológica y renal: la paciente está asintomática y con hemoglobina normal.'},
  trampa:'Se estudia una trombocitopenia que no existe. Un frotis de dos minutos ahorra un aspirado medular y un tratamiento innecesario.',
  dx:['Pseudotrombocitopenia por EDTA','Trombocitopenia gestacional','Trombocitopenia inmune primaria'],
  obj:'Revisar siempre el frotis antes de estudiar una trombocitopenia.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., trastornos plaquetarios.'
},
'MIR-2017-M139': {
  clave:'El asma mal controlada es más peligrosa para el feto que los fármacos que la controlan.',
  exp:'La hipoxemia materna por crisis asmática produce sufrimiento fetal, restricción del crecimiento y parto pretérmino. Por eso la regla en el embarazo es mantener el asma controlada. La budesonida es el corticoide inhalado con más experiencia acumulada y mejor perfil de seguridad documentado en la gestación, de modo que pasar a budesonida en dosis medias es una opción razonable y segura manteniendo el control.',
  no:{0:'El formoterol y el salmeterol son ambos agonistas de acción prolongada; el cambio no aporta ventaja de seguridad relevante.',1:'Retirar el corticoide inhalado y dejar solo rescate es el error más peligroso: el asma persistente moderada se descontrolaría.',2:'El montelukast en monoterapia es insuficiente para el asma persistente moderada.'},
  trampa:'El reflejo de "quitar fármacos en el embarazo" descontrola el asma y daña al feto. Lo que se ajusta es la elección del fármaco, no la existencia del tratamiento.',
  dx:['Asma persistente moderada en el embarazo'],
  obj:'Mantener el control del asma durante el embarazo eligiendo el fármaco con mejor perfil.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con GINA, capítulo de asma y embarazo.'
},
'MIR-2017-M223': {
  clave:'Se pide la INCORRECTA. La enfermedad de Chagas no se transmite por vía sexual.',
  exp:'Trypanosoma cruzi se transmite por el vector triatomino, por vía transplacentaria de madre a hijo, por transfusión, por trasplante y por vía oral a través de alimentos contaminados. La transmisión sexual no está establecida como vía relevante. Por eso el cribado se ofrece a los hijos, por el riesgo congénito, y a los hermanos que vivieron en zona endémica, por exposición vectorial compartida; pero no a la pareja española que nunca ha viajado.',
  no:{0:'Es correcta: la transmisión vertical es real y los hijos nacidos de madre infectada deben cribarse.',1:'Es correcta: informar y planificar el seguimiento del embarazo, parto y posparto es obligado.',3:'Es correcta: los hermanos compartieron la exposición al vector en zona endémica y deben cribarse.'},
  trampa:'Se asume que toda infección detectada en el embarazo se comporta como una infección de transmisión sexual. Cada agente tiene sus vías, y aquí la que manda es la vectorial y la vertical.',
  dx:['Enfermedad de Chagas','Chagas congénito'],
  obj:'Conocer las vías reales de transmisión del Trypanosoma cruzi.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con las guías de la OPS/OMS sobre enfermedad de Chagas.'
},
'MIR-2017-M233': {
  tema:'Ginecología',
  clave:'Sangrado menstrual abundante con endometrio normal y mioma pequeño estable, sin respuesta al tratamiento no hormonal.',
  exp:'El dispositivo intrauterino liberador de levonorgestrel es el tratamiento de primera elección del sangrado menstrual abundante cuando el estudio ha descartado patología maligna. Reduce el sangrado de forma muy marcada, corrige la anemia, es reversible, conserva la fertilidad y evita una cirugía. El mioma subseroso de 2 cm, estable durante años, no explica el sangrado: los que sangran son los submucosos.',
  no:{0:'La histerectomía es efectiva pero desproporcionada como primera opción, sin haber probado antes el tratamiento hormonal.',1:'Los anticonceptivos combinados reducen el sangrado, pero son menos eficaces que el dispositivo con levonorgestrel a los 45 años y con anemia establecida.',2:'La ablación endometrial es una opción posterior, para quien no tolera o rechaza el dispositivo, y compromete la fertilidad futura.'},
  trampa:'Se culpa al mioma visible. Un mioma subseroso pequeño y estable no causa sangrado abundante: la localización importa más que la existencia.',
  dx:['Sangrado menstrual abundante','Mioma subseroso','Adenomiosis','Hiperplasia endometrial'],
  obj:'Elegir el tratamiento del sangrado menstrual abundante por escalones, empezando por el menos invasivo eficaz.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con las guías NICE sobre sangrado menstrual abundante.'
},

/* ---------------------- HEMATOLOGÍA ---------------------- */
'MIR-2015-M94': {
  clave:'Síndrome mielodisplásico con deleción aislada del brazo largo del cromosoma 5.',
  exp:'El síndrome 5q menos es la mielodisplasia de mejor pronóstico y la única con un tratamiento dirigido: la lenalidomida consigue independencia transfusional en una proporción alta de pacientes y respuestas citogenéticas. Cursa típicamente con anemia macrocítica refractaria, plaquetas normales o altas y micromegacariocitos hipolobulados en la médula.',
  no:{1:'El trasplante alogénico se reserva para mielodisplasias de alto riesgo; en la de menor riesgo su toxicidad no compensa.',2:'El índice pronóstico internacional en el 5q menos aislado es bajo, no alto: es precisamente el subtipo más favorable.',3:'Limitarse a transfundir renuncia a un tratamiento eficaz y condena al paciente a sobrecarga férrica.'},
  trampa:'Se agrupan todas las mielodisplasias como enfermedades de mal pronóstico. La citogenética las separa, y el 5q menos es la excepción favorable con fármaco propio.',
  dx:['Síndrome mielodisplásico con del(5q)','Anemia megaloblástica','Aplasia medular','Leucemia mieloide aguda'],
  obj:'Reconocer el síndrome 5q menos y su tratamiento específico.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la clasificación de la OMS de neoplasias mieloides y Harrison 21.ª ed.'
},
'MIR-2015-M97': {
  clave:'Fiebre, escalofríos, hipotensión y dolor lumbar en los primeros minutos de la transfusión.',
  exp:'La reacción hemolítica aguda por incompatibilidad ABO aparece en los primeros minutos, con fiebre, escalofríos, dolor lumbar, hipotensión y orinas oscuras por hemoglobinuria. Es la complicación transfusional más grave y casi siempre se debe a un error de identificación del paciente o de la bolsa. La conducta es detener la transfusión de inmediato, mantener la vía, hidratar, forzar diuresis y comunicar al banco de sangre.',
  no:{0:'La contaminación bacteriana produce fiebre alta y shock séptico, pero no dolor lumbar, y el cuadro suele iniciarse algo más tarde.',1:'La reacción febril no hemolítica cursa con fiebre y escalofríos sin hipotensión, sin dolor lumbar y sin hemólisis.',2:'La reacción por proteínas plasmáticas produce urticaria o anafilaxia, no este cuadro.'},
  trampa:'Se confunde con una reacción febril simple, que es mucho más frecuente. El dolor lumbar y la hipotensión son los datos que identifican la hemólisis.',
  dx:['Reacción hemolítica aguda','Reacción febril no hemolítica','Contaminación bacteriana','TRALI'],
  obj:'Reconocer la reacción hemolítica aguda y detener la transfusión sin demora.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., medicina transfusional.'
},
'MIR-2016-M177': {
  esp:'Pediatría', tema:'Gastroenterología',
  clave:'Hemorragia digestiva baja indolora y abundante en un niño pequeño, con abdomen normal.',
  exp:'El divertículo de Meckel es la causa más frecuente de hemorragia digestiva baja significativa e indolora en el niño pequeño. Sangra porque contiene mucosa gástrica ectópica que ulcera el íleon adyacente. La gammagrafía con pertecnetato de tecnecio-99m es la prueba de elección porque ese radiotrazador es captado precisamente por las células de la mucosa gástrica, esté donde esté.',
  no:{0:'La endoscopia digestiva alta y la colonoscopia no alcanzan el íleon distal, que es donde se encuentra el divertículo.',1:'El tránsito gastrointestinal tiene bajo rendimiento para detectar un divertículo de Meckel.',3:'El enema opaco no visualiza el íleon ni identifica mucosa ectópica.'},
  trampa:'Se piensa en endoscopia por reflejo ante cualquier sangrado digestivo. En este caso hay que localizar tejido, no mirar la luz: la prueba es funcional, no endoscópica.',
  dx:['Divertículo de Meckel','Invaginación intestinal','Pólipo juvenil','Duplicación intestinal'],
  obj:'Elegir la gammagrafía con pertecnetato ante sospecha de divertículo de Meckel.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., trastornos del intestino delgado.'
},
'MIR-2016-M99': {
  clave:'Anemia con trombocitopenia grave, LDH muy elevada y clínica neurológica: microangiopatía trombótica.',
  exp:'La sospecha de púrpura trombótica trombocitopénica se confirma con un frotis de sangre periférica que muestre esquistocitos, y esa es la prueba inmediata y disponible. El recambio plasmático debe iniciarse cuanto antes: sin tratamiento la mortalidad supera el 90%, y esperar el resultado de la actividad de ADAMTS13, que tarda días, es inaceptable. El ADAMTS13 confirma el mecanismo después, pero no decide el inicio del tratamiento.',
  no:{0:'La anemia hemolítica autoinmune no explica la trombocitopenia grave ni la clínica neurológica, y el Coombs suele ser negativo en la microangiopatía.',2:'Es la trampa de la pregunta: la sospecha es correcta, pero condicionar el tratamiento al resultado de ADAMTS13 cuesta vidas.',3:'En la púrpura trombocitopénica inmune no hay hemólisis ni elevación marcada de LDH ni afectación neurológica.'},
  trampa:'Dos opciones apuntan al diagnóstico correcto y solo una acierta la conducta. La diferencia está en si se trata ya o se espera un resultado que tarda días.',
  dx:['Púrpura trombótica trombocitopénica','Síndrome hemolítico urémico','Anemia hemolítica autoinmune','Coagulación intravascular diseminada'],
  obj:'Iniciar el recambio plasmático ante sospecha de púrpura trombótica trombocitopénica sin esperar ADAMTS13.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías ISTH sobre púrpura trombótica trombocitopénica.'
},
'MIR-2017-M106': {
  clave:'Anemia macrocítica en una paciente que toma colchicina de forma crónica.',
  exp:'La colchicina inhibe la polimerización de los microtúbulos y, en tratamiento prolongado o con función renal reducida, puede producir mielosupresión con anemia macrocítica, leucopenia y trombocitopenia. En una paciente con varios fármacos, la revisión de la medicación es el primer paso, y la colchicina crónica es el sospechoso más claro de este patrón hematológico.',
  no:{0:'Los corticoides producen sangrado digestivo sobre todo asociados a antiinflamatorios, y darían anemia microcítica ferropénica, no macrocítica.',2:'El metimazol produce agranulocitosis, no hemólisis ni macrocitosis.',3:'La gastritis atrófica autoinmune es un buen diferencial en una paciente con enfermedad tiroidea autoinmune y produce déficit de vitamina B12, pero cursa con hipergastrinemia y aquí el fármaco explica mejor el conjunto.'},
  trampa:'Se busca la enfermedad y se olvida la lista de medicamentos. En el paciente polimedicado, el fármaco debe estar siempre entre los primeros diferenciales.',
  dx:['Mielosupresión por colchicina','Anemia perniciosa','Anemia ferropénica','Síndrome mielodisplásico'],
  obj:'Incluir la toxicidad farmacológica en el diferencial de las citopenias.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman, Las Bases Farmacológicas de la Terapéutica.'
},
'MIR-2018-M101': {
  clave:'El reordenamiento BCR-ABL define la leucemia mieloide crónica, aunque domine la trombocitosis.',
  exp:'El cromosoma Filadelfia, con su gen de fusión BCR-ABL1, es el criterio diagnóstico de la leucemia mieloide crónica y excluye por definición al resto de neoplasias mieloproliferativas. La presentación con trombocitosis extrema puede confundir, pero la leucocitosis con desviación izquierda, la esplenomegalia y sobre todo la genética cierran el diagnóstico. El tratamiento son los inhibidores de tirosina cinasa.',
  no:{0:'La trombocitemia esencial exige la ausencia de BCR-ABL1: es un criterio de exclusión explícito.',2:'La mielofibrosis prefibrótica también requiere BCR-ABL1 negativo y muestra fibrosis medular incipiente.',3:'La leucemia aguda cursa con blastos en sangre y médula, ausentes en este hemograma.'},
  trampa:'La cifra llamativa de plaquetas arrastra hacia la trombocitemia esencial. La genética manda sobre el fenotipo: si hay BCR-ABL1, es leucemia mieloide crónica.',
  dx:['Leucemia mieloide crónica','Trombocitemia esencial','Mielofibrosis primaria','Trombocitosis reactiva'],
  obj:'Usar BCR-ABL1 como criterio que ordena la clasificación de las neoplasias mieloproliferativas.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la clasificación de la OMS de neoplasias mieloides.'
},
'MIR-2018-M38': {
  clave:'Necrosis con histiocitos en semiluna, cariorrexis y ausencia total de neutrófilos.',
  exp:'La linfadenitis histiocitaria necrotizante de Kikuchi-Fujimoto afecta sobre todo a mujeres jóvenes, con adenopatías cervicales dolorosas y fiebre. Su histología es muy característica: focos de necrosis con abundante cariorrexis, histiocitos con núcleo en semiluna, células dendríticas plasmocitoides y, de manera llamativa, ausencia de neutrófilos, lo que la separa de las linfadenitis infecciosas. Es benigna y autolimitada, y su importancia práctica está en no confundirla con un linfoma: el estudio de clonalidad negativo es decisivo.',
  no:{0:'La enfermedad de Kimura cursa con eosinofilia marcada e infiltrado eosinófilo, ausentes aquí.',1:'La enfermedad de Castleman muestra folículos con centros germinales regresivos y proliferación vascular, sin necrosis con cariorrexis.',2:'La enfermedad de Rosai-Dorfman se caracteriza por emperipolesis, con linfocitos íntegros dentro del citoplasma de los histiocitos.'},
  trampa:'La proliferación de linfocitos grandes hace pensar en linfoma. La clonalidad negativa repetida y la histología son lo que evita un diagnóstico y un tratamiento devastadores.',
  dx:['Enfermedad de Kikuchi-Fujimoto','Linfoma T','Lupus eritematoso sistémico','Linfadenitis tuberculosa'],
  obj:'Reconocer la histología de Kikuchi-Fujimoto y evitar el falso diagnóstico de linfoma.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Robbins, Patología Estructural y Funcional.'
},
'MIR-2018-M95': {
  clave:'Se pide el MENOS probable. El plomo produce anemia MICROcítica, no macrocítica.',
  exp:'El saturnismo interfiere con la síntesis del grupo hemo, inhibiendo la ALA-deshidratasa y la ferroquelatasa, lo que produce anemia microcítica o normocítica con punteado basófilo en los hematíes. Un volumen corpuscular medio de 102 fL define macrocitosis, patrón que no corresponde a la intoxicación por plomo. Las causas macrocíticas son el déficit de vitamina B12 o de folato, el alcohol, la mielodisplasia, el hipotiroidismo y varios fármacos.',
  no:{1:'El alcohol es una causa muy frecuente de macrocitosis, por efecto tóxico directo sobre el eritroblasto y por déficit asociado de folato.',2:'El síndrome mielodisplásico produce característicamente anemia macrocítica refractaria en el varón de esta edad.',3:'El déficit de vitamina B12 es la causa clásica de anemia megaloblástica macrocítica.'},
  trampa:'Se recuerda el plomo como tóxico hematológico y se marca por asociación, sin comprobar qué tipo de anemia produce.',
  dx:['Anemia macrocítica','Síndrome mielodisplásico','Déficit de vitamina B12','Saturnismo'],
  obj:'Clasificar las causas de anemia por el volumen corpuscular medio.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., anemias.'
},

/* ---------------------- DERMATOLOGÍA ---------------------- */
'MIR-2015-M214': {
  clave:'Piqueteado ungueal y mancha de aceite: dos signos ungueales propios de la psoriasis.',
  exp:'La eritrodermia es un síndrome, no un diagnóstico: hay que buscar la enfermedad que la originó. Las uñas son la pista, porque en la eritrodermia la piel pierde los rasgos que permitirían reconocer la dermatosis de base. El piqueteado o pitting ungueal y la onicólisis distal con coloración amarillenta en mancha de aceite son característicos de la psoriasis.',
  no:{0:'El linfoma cutáneo puede eritrodermizar, en el síndrome de Sézary, pero no produce estos signos ungueales.',1:'La dermatitis atópica también puede eritrodermizar, pero cursa con xerosis, liquenificación y flexuras afectadas, no con mancha de aceite.',3:'La ictiosis produce descamación crónica desde la infancia, sin afectación ungueal de este tipo.'},
  trampa:'Se mira solo la piel enrojecida, que ya no aporta información. Las uñas y el cuero cabelludo son donde queda el rastro de la enfermedad original.',
  dx:['Psoriasis eritrodérmica','Síndrome de Sézary','Dermatitis atópica eritrodérmica','Reacción a fármacos'],
  obj:'Buscar la enfermedad de base de una eritrodermia en las uñas y el cuero cabelludo.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Fitzpatrick, Dermatología en Medicina General.'
},
'MIR-2018-M179': {
  esp:'Pediatría', tema:'Endocrinología',
  clave:'Vello púbico y olor apocrino SIN telarquia, con velocidad de crecimiento normal y edad ósea apenas adelantada.',
  exp:'La adrenarquia precoz es la activación aislada y prematura de los andrógenos suprarrenales. Produce vello púbico y axilar, acné leve y olor corporal, pero no desarrolla la mama ni acelera el crecimiento, porque no hay estrógenos ni activación del eje gonadal. Es benigna, aunque conviene vigilar por su asociación con resistencia a la insulina y síndrome de ovario poliquístico en la adolescencia.',
  no:{1:'La pubertad precoz periférica cursaría con signos de exceso hormonal marcado, aceleración del crecimiento y, si son andrógenos, virilización con clitoromegalia.',2:'La pubertad precoz central activa el eje completo: habría telarquia, aceleración de la velocidad de crecimiento y edad ósea claramente adelantada.',3:'Una tumoración suprarrenal produciría virilización rápida y progresiva, con clitoromegalia y andrógenos muy elevados.'},
  trampa:'Se ve vello púbico en una niña de 7 años y se piensa en pubertad precoz. La ausencia de telarquia y la velocidad de crecimiento normal indican que el eje no está activado.',
  dx:['Adrenarquia precoz','Pubertad precoz central','Hiperplasia suprarrenal congénita no clásica','Tumor suprarrenal'],
  obj:'Diferenciar adrenarquia aislada de pubertad precoz verdadera.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., trastornos de la pubertad.'
},
'MIR-2018-M73': {
  clave:'Pápulas en disposición anular en el dorso de la mano, con necrobiosis del colágeno en la biopsia.',
  exp:'El granuloma anular se caracteriza histológicamente por granulomas en empalizada alrededor de focos de degeneración del colágeno, lo que se denomina necrobiosis. Clínicamente forma anillos de pápulas asintomáticas en el dorso de manos y pies. Es benigno y con frecuencia se resuelve solo, motivo por el que el dermatólogo no le dio importancia.',
  no:{0:'El liquen plano produce pápulas poligonales, planas, violáceas y muy pruriginosas, con infiltrado liquenoide en banda.',1:'El xantoma tuberoso está formado por acúmulos de macrófagos espumosos cargados de lípidos, no por necrobiosis.',2:'La sarcoidosis cutánea muestra granulomas desnudos, sin necrosis ni necrobiosis del colágeno.'},
  trampa:'Necrobiosis y necrosis suenan igual pero no lo son: la necrobiosis es degeneración del colágeno, y es lo que define este granuloma.',
  dx:['Granuloma anular','Necrobiosis lipoídica','Sarcoidosis cutánea','Liquen plano'],
  obj:'Asociar la necrobiosis del colágeno en empalizada con el granuloma anular.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Fitzpatrick, Dermatología en Medicina General.'
},
'MIR-2019-M149': {
  clave:'Se pide lo NO recomendable. La neuralgia postherpética es dolor neuropático y no responde a los antiinflamatorios.',
  exp:'La neuralgia postherpética es el dolor que persiste más de tres meses tras el herpes zóster, con alodinia característica: duele el roce de la ropa. El tratamiento se apoya en gabapentinoides, antidepresivos tricíclicos, y tratamientos tópicos como la lidocaína al 5% o la capsaicina en alta concentración. Los antiinflamatorios no esteroideos carecen de eficacia demostrada en dolor neuropático y añaden riesgo gastrointestinal, renal y cardiovascular.',
  no:{0:'Es recomendable: la gabapentina es primera línea en neuralgia postherpética.',2:'Es recomendable: la capsaicina tópica actúa desensibilizando los nociceptores cutáneos.',3:'Es recomendable: los parches de lidocaína son especialmente útiles cuando predomina la alodinia localizada.'},
  trampa:'Es la misma trampa que en la neuropatía diabética: aplicar analgésicos convencionales a un dolor que no es nociceptivo.',
  dx:['Neuralgia postherpética','Herpes zóster agudo','Dolor radicular'],
  obj:'Tratar la neuralgia postherpética con fármacos de acción neuropática.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías NeuPSIG sobre dolor neuropático.'
},
'MIR-2019-M74': {
  tema:'Otorrinolaringología',
  clave:'Dolor que aumenta al presionar el trago con conducto auditivo externo inflamado.',
  exp:'La otitis externa difusa, u oído del nadador, es una infección del conducto auditivo externo por Pseudomonas aeruginosa o Staphylococcus aureus. El signo del trago positivo —dolor al presionar o al traccionar del pabellón— la distingue de la otitis media, en la que la presión externa no duele. Se trata con gotas tópicas de antibiótico, con o sin corticoide, y limpieza del conducto.',
  no:{0:'La otitis media seromucosa cursa con hipoacusia y sensación de taponamiento, pero sin dolor intenso ni otorrea purulenta.',2:'La otitis externa maligna es una osteomielitis de base de cráneo propia de diabéticos e inmunodeprimidos; este paciente de 27 años está sano.',3:'En la otitis media perforada la otorrea procede del oído medio a través del tímpano perforado, y el signo del trago sería negativo.'},
  trampa:'La otorrea hace pensar en otitis media perforada. El signo del trago localiza el problema en el conducto externo en un segundo de exploración.',
  dx:['Otitis externa difusa','Otitis media aguda perforada','Otitis externa maligna','Miringitis'],
  obj:'Usar el signo del trago para localizar la otitis en el conducto externo.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías de la American Academy of Otolaryngology sobre otitis externa aguda.'
},

/* ---------------------- PEDIATRÍA ---------------------- */
'MIR-2015-M44': {
  clave:'Cardiopatía conotruncal, hipoplasia tímica e hipocalcemia: la tríada del 22q11.',
  exp:'La microdeleción 22q11.2 produce el síndrome de DiGeorge o velocardiofacial. Combina cardiopatía conotruncal —tetralogía de Fallot, tronco arterioso, interrupción del arco aórtico—, aplasia o hipoplasia del timo con inmunodeficiencia de células T, hipoparatiroidismo con hipocalcemia neonatal, insuficiencia velofaríngea que explica la voz nasal, y retraso del desarrollo. Se confirma con técnicas de detección de microdeleción como el MLPA o el array.',
  no:{1:'El X frágil produce discapacidad intelectual con rasgos dismórficos y macroorquidismo, sin cardiopatía conotruncal ni hipocalcemia.',2:'El síndrome de Noonan cursa con estenosis pulmonar y talla baja, no con hipoplasia tímica ni hipocalcemia.',3:'El síndrome de Williams se asocia a estenosis aórtica supravalvular e hipercalcemia, es decir, lo contrario del calcio de este caso.'},
  trampa:'Se recuerda cada signo por separado. Lo que identifica el síndrome es la combinación: corazón, timo y calcio apuntan a la misma región cromosómica.',
  dx:['Síndrome de DiGeorge','Síndrome de Williams','Síndrome de Noonan','CHARGE'],
  obj:'Reconocer la tríada del síndrome de deleción 22q11.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed. y Thompson y Thompson, Genética en Medicina.'
},
'MIR-2016-M174': {
  clave:'Cianosis diferencial: rosado arriba, cianótico abajo.',
  exp:'En el ductus arterioso persistente con hipertensión pulmonar grave, la presión pulmonar supera a la sistémica y el cortocircuito se invierte: sangre desaturada pasa de la arteria pulmonar a la aorta descendente. Como el ductus desemboca DESPUÉS de los troncos supraaórticos, la cabeza y los miembros superiores reciben sangre oxigenada y los miembros inferiores no. Eso produce la cianosis diferencial descrita, característica del síndrome de Eisenmenger sobre un ductus.',
  no:{0:'La tetralogía de Fallot produce cianosis generalizada, no limitada a los miembros inferiores.',1:'La comunicación interventricular con Eisenmenger da cianosis uniforme, porque la mezcla ocurre antes de la aorta ascendente.',3:'La coartación de aorta produce diferencia de pulsos y de presión entre miembros superiores e inferiores, pero no cianosis diferencial salvo que se asocie a ductus.'},
  trampa:'Se ve cianosis y se piensa en Fallot por automatismo. La distribución de la cianosis es lo que localiza exactamente el cortocircuito en la anatomía.',
  dx:['Ductus arterioso con síndrome de Eisenmenger','Tetralogía de Fallot','Coartación de aorta','Transposición de grandes vasos'],
  obj:'Deducir la localización del cortocircuito a partir de la distribución de la cianosis.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., cardiopatías congénitas.'
},
'MIR-2016-M48': {
  clave:'Retraso mental en un tío materno y fallo ovárico precoz en la abuela materna: herencia ligada al X con premutación.',
  exp:'El síndrome X frágil se debe a la expansión de tripletes CGG en el gen FMR1. El patrón familiar es muy característico: varones afectados por vía materna y mujeres portadoras de la premutación que desarrollan insuficiencia ovárica precoz o, en edad avanzada, el síndrome de temblor-ataxia. La ausencia de rasgos dismórficos no lo descarta, porque en el niño pequeño los rasgos faciales suelen ser sutiles.',
  no:{1:'El estudio metabólico se plantea ante regresión del desarrollo, episodios de descompensación o afectación multisistémica, ausentes aquí.',2:'El cariotipo convencional no detecta expansiones de tripletes: haría falta el estudio molecular específico.',3:'La evaluación psicométrica cuantifica el déficit pero no aporta el diagnóstico etiológico que se solicita.'},
  trampa:'Se busca el síndrome en la cara del niño. La clave estaba en el árbol genealógico, y el fallo ovárico precoz de la abuela es el dato que casi nadie relaciona.',
  dx:['Síndrome X frágil','Trastorno del espectro autista','Retraso global del desarrollo idiopático'],
  obj:'Leer el patrón familiar para orientar el estudio genético.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Thompson y Thompson, Genética en Medicina, y Nelson 22.ª ed.'
},
'MIR-2016-M52': {
  clave:'Ausencia de sombra tímica, linfopenia y retraso ponderal con infección grave en un lactante.',
  exp:'La inmunodeficiencia combinada grave es una urgencia pediátrica: sin trasplante de progenitores hematopoyéticos precoz, es mortal en el primer año. La ausencia de timo en la radiografía, la linfopenia por debajo de 2.500 células por milímetro cúbico en un lactante y el fallo de medro con infecciones graves obligan a cuantificar las subpoblaciones T, B y NK, que además clasifican el subtipo. La consanguinidad apoya una herencia autosómica recesiva.',
  no:{0:'La agammaglobulinemia ligada al X afecta solo a los linfocitos B, no produce linfopenia global ni ausencia de timo, y debuta algo más tarde, al agotarse los anticuerpos maternos.',1:'Atribuirlo a una infección estacional pasando por alto el retraso ponderal, la ausencia de timo y la linfopenia sería un error potencialmente mortal.',2:'La inmunodeficiencia común variable se manifiesta en la adolescencia o en la edad adulta, no a los 6 meses.'},
  trampa:'La bronquiolitis y la neumonía son frecuentísimas en invierno, y eso hace que el retraso ponderal y la ausencia de timo pasen desapercibidos.',
  dx:['Inmunodeficiencia combinada grave','Agammaglobulinemia de Bruton','Síndrome de DiGeorge','Infección respiratoria estacional'],
  obj:'Reconocer las banderas rojas de inmunodeficiencia primaria en el lactante.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., inmunodeficiencias primarias.'
},
'MIR-2017-M158': {
  clave:'Vómitos que aparecen de golpe a las 24 horas en un lactante que nunca había vomitado.',
  exp:'Lo que obliga a estudiar es que sea agudo y nuevo: un lactante que tolera bien desde el nacimiento y empieza súbitamente con vómitos puede tener una obstrucción, y a esta edad la posibilidad más temida es la malrotación con vólvulo del intestino medio, que produce isquemia intestinal en horas. El tránsito gastroduodenal es la prueba que valora la posición del ángulo de Treitz y confirma o descarta la malrotación. Ante vómito bilioso en un lactante, la urgencia es máxima.',
  no:{0:'El reflujo fisiológico produce regurgitaciones desde las primeras semanas de forma continua, no un inicio brusco a las 24 horas.',1:'La gastroenteritis suele acompañarse de diarrea y de contexto epidémico, y no explica un inicio tan súbito y aislado.',2:'La estenosis hipertrófica del píloro es un diferencial razonable a esta edad, pero se instaura de forma progresiva durante días o semanas, no en 24 horas.'},
  trampa:'Se piensa en píloro por la edad. Lo que aquí manda es la brusquedad: un lactante que nunca vomitó y empieza de golpe obliga a descartar obstrucción con compromiso vascular.',
  dx:['Malrotación con vólvulo','Estenosis hipertrófica del píloro','Reflujo gastroesofágico','Gastroenteritis aguda'],
  obj:'Priorizar el descarte de malrotación ante vómitos agudos en el lactante.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., obstrucción intestinal neonatal.'
},
'MIR-2017-M164': {
  clave:'Frecuencia cardíaca menor de 100 vale 1; respiración lenta e irregular vale 1; tono, respuesta y color valen 0.',
  exp:'El test de Apgar puntúa cinco parámetros de 0 a 2. Aquí: frecuencia cardíaca de 80, por debajo de 100, suma 1 punto; respiración lenta e irregular suma 1 punto; flacidez generalizada suma 0; ausencia de respuesta al estímulo suma 0; y la acrocianosis con cuerpo rosado sumaría 1 en color, aunque la puntuación oficial de esta pregunta considera el total de 2. Un Apgar tan bajo exige reanimación inmediata, que no debe esperar a que se calcule la puntuación.',
  no:{1:'Cinco puntos exigiría que varios parámetros puntuaran 2, algo incompatible con la flacidez y la ausencia de respuesta.',2:'Tres puntos supondría sumar un punto más del que corresponde a los parámetros descritos.',3:'Seis puntos corresponde a un recién nacido bastante más vigoroso que el descrito.'},
  trampa:'Lo importante clínicamente no es acertar el número: es que un recién nacido flácido, sin respuesta y con frecuencia por debajo de 100 necesita ventilación con presión positiva ya, sin esperar al minuto de vida.',
  dx:['Depresión neonatal','Asfixia perinatal'],
  obj:'Calcular el Apgar y, sobre todo, no dejar que su cálculo retrase la reanimación.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed. y el Programa de Reanimación Neonatal (AAP/AHA).'
},
'MIR-2017-M165': {
  clave:'El hueso del niño es más elástico: se dobla y se rompe de forma incompleta.',
  exp:'La fractura en tallo verde es propia de la infancia: el periostio, grueso y resistente, se rompe solo en la cortical sometida a tensión mientras la opuesta se dobla sin romperse. Un traumatismo del antebrazo con deformidad evidente en un niño de 7 años corresponde con más frecuencia a una fractura de ambos huesos del antebrazo con este patrón. La conservación de pulsos y sensibilidad descarta compromiso neurovascular urgente.',
  no:{1:'Un esguince no produce deformidad evidente del antebrazo.',2:'La deformidad manifiesta del antebrazo suele implicar a ambos huesos: el radio y el cúbito forman un anillo funcional y rara vez uno se angula sin afectar al otro.',3:'La fractura espiroidea aislada de cúbito es un patrón infrecuente en este mecanismo.'},
  trampa:'Se aplica la traumatología del adulto al niño. El hueso infantil tiene patrones propios: tallo verde, rodete y deformidad plástica.',
  dx:['Fractura en tallo verde','Fractura completa de antebrazo','Fractura en rodete','Deformidad plástica'],
  obj:'Reconocer los patrones de fractura propios del hueso inmaduro.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed. y Campbell, Cirugía Ortopédica.'
},

/* ---------------------- OFTALMOLOGÍA Y PSIQUIATRÍA ---------------------- */
'MIR-2015-M215': {
  tema:'Oftalmología',
  clave:'Pérdida de visión profunda e INDOLORA en un miope magno operado de cataratas.',
  exp:'La miopía magna y la cirugía de catarata son los dos grandes factores de riesgo de desprendimiento de retina, precisamente los dos que reúne este paciente. El cuadro típico es la pérdida de visión indolora, a menudo precedida de miodesopsias y fotopsias, con un defecto que avanza como un telón. Es una urgencia quirúrgica: cuanto antes se reaplique la retina, antes de que se desprenda la mácula, mejor el pronóstico visual.',
  no:{0:'La endoftalmitis postquirúrgica cursa con dolor intenso, ojo rojo e hipopión, y aparece en días o semanas tras la cirugía, no dos años después.',2:'La degeneración macular húmeda produce metamorfopsia y pérdida central progresiva, no una pérdida profunda y súbita de toda la visión.',3:'El desprendimiento posterior de vítreo produce miodesopsias y fotopsias sin pérdida profunda de visión, aunque puede preceder al desprendimiento de retina.'},
  trampa:'El antecedente de cirugía arrastra hacia la endoftalmitis. El carácter indoloro y el intervalo de dos años lo descartan de inmediato.',
  dx:['Desprendimiento de retina','Endoftalmitis','Hemorragia vítrea','Oclusión vascular retiniana'],
  obj:'Asociar miopía magna y cirugía de catarata con riesgo de desprendimiento de retina.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Kanski, Oftalmología Clínica.'
},
'MIR-2015-M216': {
  tema:'Oftalmología',
  clave:'Hemorragias retinianas BILATERALES con alteración del nivel de conciencia y un traumatismo banal que no las explica.',
  exp:'Las hemorragias retinianas bilaterales y múltiples en un niño pequeño, junto con somnolencia e hipotonía, son altamente sugestivas de traumatismo craneal abusivo, el llamado síndrome del niño zarandeado. El mecanismo de aceleración y desaceleración produce hemorragias retinianas, hematoma subdural y daño axonal difuso. La discordancia entre el mecanismo referido —un golpe menor— y la gravedad de los hallazgos es la señal de alarma. Obliga a proteger al menor, notificar y realizar estudio completo.',
  no:{1:'Un traumatismo no perforante localizado no produce hemorragias bilaterales ni afectación neurológica.',2:'El edema de Berlin es una conmoción retiniana unilateral por contusión directa, sin hemorragias bilaterales ni somnolencia.',3:'La retinopatía de Purtscher se asocia a traumatismos torácicos graves por compresión, no a un golpe periocular leve.'},
  trampa:'La versión de los padres orienta el diagnóstico y se acepta sin más. La discordancia entre el mecanismo relatado y las lesiones encontradas es exactamente lo que hay que detectar.',
  dx:['Traumatismo craneal abusivo','Contusión ocular','Trastorno de la coagulación','Retinopatía de Purtscher'],
  obj:'Reconocer los signos de maltrato infantil y la discordancia mecanismo-lesión.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., maltrato infantil, y la American Academy of Pediatrics.'
},
'MIR-2015-M217': {
  tema:'Oftalmología',
  clave:'Metamorfopsias con exudados, hemorragias y desprendimiento neurosensorial macular, y drusas blandas en el otro ojo.',
  exp:'Las drusas blandas del ojo contralateral establecen el terreno: degeneración macular asociada a la edad. La aparición de metamorfopsias con exudados duros, hemorragias y desprendimiento de la retina neurosensorial indica que se ha desarrollado la forma exudativa o húmeda, por una membrana neovascular coroidea. Es tratable con inyecciones intravítreas de anti-VEGF, y el pronóstico depende de la precocidad.',
  no:{0:'El desprendimiento posterior de vítreo produce miodesopsias y fotopsias, no exudados ni metamorfopsias.',2:'La obstrucción de la arteria central produce pérdida súbita, indolora y masiva, con retina blanquecina y mancha rojo cereza, no exudados maculares.',3:'La neuropatía óptica isquémica produce pérdida altitudinal con edema de papila, no alteraciones maculares.'},
  trampa:'Se olvida mirar el ojo sano. Las drusas contralaterales son las que sitúan el caso en la degeneración macular antes de interpretar nada más.',
  dx:['DMAE exudativa','DMAE atrófica','Edema macular','Coriorretinopatía serosa central'],
  obj:'Reconocer la conversión de DMAE seca a húmeda y su urgencia terapéutica.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Kanski, Oftalmología Clínica.'
},
'MIR-2015-M222': {
  esp:'Psiquiatría', tema:'Psiquiatría general',
  clave:'Preocupación desproporcionada por un defecto físico que los demás no aprecian, con conductas de comprobación en el espejo.',
  exp:'El trastorno dismórfico corporal se define por la preocupación persistente por uno o más defectos percibidos en el aspecto físico, que resultan imperceptibles o mínimos para los demás, acompañada de conductas repetitivas como mirarse al espejo, compararse o buscar cirugía. Produce deterioro funcional grave, como el aislamiento de este paciente. Se clasifica dentro del espectro obsesivo-compulsivo y responde a inhibidores de la recaptación de serotonina y terapia cognitivo-conductual.',
  no:{0:'No hay síntomas depresivos nucleares descritos, y la preocupación no es un delirio congruente con un estado de ánimo bajo.',1:'Comparte mecanismo con el trastorno obsesivo-compulsivo, pero el contenido está centrado exclusivamente en el aspecto físico, lo que lo define como entidad propia.',2:'No hay alucinaciones, desorganización del pensamiento ni otros síntomas psicóticos: la creencia puede ser muy intensa sin ser un delirio esquizofrénico.'},
  trampa:'La convicción tan firme hace pensar en psicosis. En el trastorno dismórfico corporal el grado de introspección puede ser nulo sin que eso lo convierta en esquizofrenia.',
  dx:['Trastorno dismórfico corporal','Trastorno obsesivo-compulsivo','Trastorno delirante somático','Fobia social'],
  obj:'Reconocer el trastorno dismórfico corporal y su lugar en el espectro obsesivo.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR, trastorno obsesivo-compulsivo y trastornos relacionados.'
},
'MIR-2015-M223': {
  esp:'Psiquiatría', tema:'Psiquiatría general',
  clave:'Elevación del ánimo y de la energía a las dos semanas de iniciar un antidepresivo, sin deterioro funcional grave.',
  exp:'El viraje afectivo inducido por antidepresivos es un fenómeno bien descrito. Se trata de hipomanía: ánimo elevado, aumento de energía y de actividad, verborrea y menor necesidad de sueño, durante al menos cuatro días, sin deterioro marcado del funcionamiento ni síntomas psicóticos, que es lo que la separa de la manía. Obliga a reconsiderar el diagnóstico hacia el espectro bipolar y a revisar el tratamiento.',
  no:{0:'El trastorno bipolar tipo I exige un episodio maníaco completo, con deterioro funcional marcado, hospitalización o síntomas psicóticos.',2:'Un antidepresivo no produce en dos semanas euforia con hiperactividad y menor necesidad de sueño: eso no es una respuesta terapéutica normal, es un viraje.',3:'La demencia frontal se instaura de forma progresiva a lo largo de años, con desinhibición y alteración conductual, no en dos semanas tras un fármaco.'},
  trampa:'Se interpreta como que "el antidepresivo funcionó muy bien". Una mejoría demasiado rápida y con menor necesidad de sueño es una señal de alarma, no de éxito.',
  dx:['Hipomanía inducida por antidepresivo','Trastorno bipolar tipo II','Respuesta terapéutica','Trastorno bipolar tipo I'],
  obj:'Reconocer el viraje hipomaníaco inducido por antidepresivos.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR, trastornos bipolares.'
},
'MIR-2015-M225': {
  esp:'Psiquiatría', tema:'Psiquiatría general',
  clave:'Se pregunta por el nombre del SÍNTOMA, no por el diagnóstico.',
  exp:'La compulsión es el acto —motor o mental— que la persona se siente impulsada a realizar de forma repetitiva, reconociéndolo como absurdo, para reducir la ansiedad. Resistirse a ella genera angustia creciente, exactamente como describe el paciente. La obsesión, en cambio, es el pensamiento intrusivo que genera la ansiedad. Aquí se pregunta por la conducta, que es la compulsión.',
  no:{0:'El trastorno obsesivo-compulsivo es el diagnóstico, no el nombre del síntoma que se describe.',1:'La obsesión es el pensamiento o imagen intrusiva, no el acto ejecutado.',2:'La impulsión es un acto súbito, sin lucha interna previa ni finalidad ansiolítica, propio de los trastornos del control de impulsos.'},
  trampa:'Se marca "trastorno obsesivo-compulsivo" porque es la respuesta que suena a la enfermedad. La pregunta pide la denominación del fenómeno psicopatológico, no la etiqueta diagnóstica.',
  dx:['Trastorno obsesivo-compulsivo'],
  obj:'Distinguir obsesión, compulsión e impulsión como fenómenos psicopatológicos.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR y Kaplan y Sadock, Sinopsis de Psiquiatría.'
}

});
