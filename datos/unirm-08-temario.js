/* ============================================================
   UNIRMIA — TEMARIO DEL CUATRIMESTRE 8
   Ciclo de Ciencias Basicas del pensum MED-R1-2014.
   29 creditos repartidos en ocho asignaturas.

   Diferencia con el 7: aqui el cuerpo deja de estudiarse por
   piezas y pasa a estudiarse por sistemas. Anatomia II son
   visceras, Fisiologia II son los aparatos funcionando, y
   aparecen por primera vez tres asignaturas que miran poblaciones
   en vez de pacientes: bioestadistica, epidemiologia y, en su
   propio terreno, la genetica.

   El orden de los bloques sigue el peso en creditos, que es lo
   que de verdad indica cuanto tiempo va a pedir cada una.

   AMPLIADO 18/09/2026: se agregaron temas reales del pensum que
   faltaban. No se toco ningun tema existente, solo se sumaron al
   final de cada bloque.
   ============================================================ */
window.TEMARIO = (window.TEMARIO || []).concat([

{
  programa:'unirm', cuatri:8,
  bloque:'Anatomía II', em:'🫁', color:'sangria',
  nota:'Seis créditos de veintinueve, la más pesada otra vez. Si Anatomía I fue el andamio, esta es lo que va dentro: vísceras, cavidades y sus relaciones.',
  temas:[
    {t:'Generalidades del tórax y mediastino', claves:['mediastino','cavidad torácica','pleura','hilio pulmonar']},
    {t:'Corazón y pericardio', claves:['corazón','pericardio','válvula','aurícula','ventrículo','coronaria']},
    {t:'Pulmones y árbol bronquial', claves:['pulmón','bronquio','lóbulo','segmento broncopulmonar','tráquea']},
    {t:'Grandes vasos y circulación', claves:['aorta','vena cava','arteria pulmonar','cayado','conducto torácico']},
    {t:'Pared abdominal y conducto inguinal', claves:['pared abdominal','conducto inguinal','hernia','recto del abdomen','peritoneo']},
    {t:'Esófago, estómago e intestino', claves:['esófago','estómago','duodeno','yeyuno','íleon','colon','mesenterio']},
    {t:'Hígado, vía biliar, páncreas y bazo', claves:['hígado','vesícula biliar','colédoco','páncreas','bazo','triángulo de Calot']},
    {t:'Retroperitoneo: riñón y suprarrenal', claves:['riñón','uréter','suprarrenal','retroperitoneo','pelvis renal']},
    {t:'Pelvis y periné', claves:['pelvis','periné','vejiga','recto','útero','próstata','suelo pélvico']},
    {t:'Cabeza y cuello: triángulos y glándulas', claves:['triángulo cervical','tiroides','parótida','carótida','yugular']},
    {t:'Pares craneales', claves:['par craneal','trigémino','facial','vago','oculomotor','hipogloso']},
    {t:'Sistema nervioso autónomo: anatomía visceral', claves:['cadena simpática','ganglio paravertebral','nervio vago','plexo celíaco']},
    {t:'Anatomía de la mama', claves:['glándula mamaria','ligamento de Cooper','drenaje linfático de la mama','cuadrante mamario']},
    {t:'Genitales femeninos: anatomía interna', claves:['útero','trompa uterina','ovario','ligamento ancho','vagina']},
    {t:'Genitales masculinos: anatomía interna', claves:['testículo','conducto deferente','vesícula seminal','próstata','epidídimo']},
    {t:'Diafragma y sus orificios', claves:['diafragma','hiato esofágico','orificio de la vena cava','hiato aórtico']},
    {t:'Grandes vasos retroperitoneales', claves:['aorta abdominal','vena cava inferior','arteria mesentérica','tronco celíaco']},
    {t:'Drenaje linfático visceral', claves:['ganglio linfático visceral','cisterna del quilo','conducto torácico','drenaje linfático abdominal']}
  ]
},

{
  programa:'unirm', cuatri:8,
  bloque:'Fisiología II', em:'❤️', color:'yodo',
  nota:'Cinco créditos. Aquí los sistemas se estudian funcionando y, sobre todo, regulándose. Entender el bucle de control vale más que memorizar valores.',
  temas:[
    {t:'Ciclo cardíaco y gasto cardíaco', claves:['ciclo cardíaco','gasto cardíaco','precarga','poscarga','Frank-Starling','volumen sistólico']},
    {t:'Electrofisiología cardíaca y ECG', claves:['nodo sinusal','automatismo','ECG','onda P','QRS','conducción']},
    {t:'Hemodinámica y regulación de la presión', claves:['presión arterial','resistencia periférica','barorreceptor','renina','angiotensina']},
    {t:'Ventilación y mecánica respiratoria', claves:['ventilación','distensibilidad','surfactante','espacio muerto','volumen corriente']},
    {t:'Intercambio y transporte de gases', claves:['difusión alveolar','hemoglobina','curva de disociación','ventilación perfusión','2,3-DPG']},
    {t:'Control de la respiración', claves:['centro respiratorio','quimiorreceptor','PaCO2','hipoxemia']},
    {t:'Filtración glomerular y aclaramiento', claves:['filtración glomerular','aclaramiento','creatinina','nefrona','presión de filtración']},
    {t:'Manejo tubular y concentración de orina', claves:['túbulo proximal','asa de Henle','contracorriente','ADH','aldosterona']},
    {t:'Equilibrio ácido-base', claves:['acidosis','alcalosis','bicarbonato','compensación','anión gap']},
    {t:'Fisiología digestiva', claves:['secreción gástrica','bilis','peristaltismo','absorción','enzimas pancreáticas']},
    {t:'Introducción a la endocrinología', claves:['hormona','eje hipotálamo hipófisis','retroalimentación','receptor hormonal']},
    {t:'Curva de función ventricular y contractilidad', claves:['contractilidad','curva de Frank-Starling','inotropismo','ley del corazón']},
    {t:'Circulación coronaria y regional', claves:['circulación coronaria','autorregulación del flujo','reserva coronaria','flujo regional']},
    {t:'Volúmenes y capacidades pulmonares', claves:['volumen corriente','capacidad vital','volumen residual','espirometría']},
    {t:'Fisiología del ejercicio', claves:['adaptación cardiovascular al ejercicio','consumo de oxígeno máximo','umbral anaeróbico']},
    {t:'Motilidad gastrointestinal y esfínteres', claves:['esfínter esofágico','esfínter pilórico','complejo motor migratorio','reflejo gastrocólico']},
    {t:'Micción y función vesical', claves:['reflejo miccional','vejiga','esfínter uretral','control voluntario de la micción']}
  ]
},

{
  programa:'unirm', cuatri:8,
  bloque:'Bioquímica II', em:'🧪', color:'verde',
  nota:'Cuatro créditos. Si en Bioquímica I se degradaba, aquí se construye y se regula. El hilo conductor es el ayuno y la alimentación.',
  temas:[
    {t:'Metabolismo del glucógeno', claves:['glucógeno','glucogenólisis','glucogenogénesis','glucógeno fosforilasa','glucosa-6-fosfato']},
    {t:'Gluconeogénesis y regulación de la glucemia', claves:['gluconeogénesis','piruvato carboxilasa','glucagón','insulina','ayuno']},
    {t:'Vía de las pentosas fosfato', claves:['pentosas fosfato','NADPH','glucosa-6-fosfato deshidrogenasa','ribosa']},
    {t:'Beta-oxidación y cuerpos cetónicos', claves:['beta-oxidación','carnitina','acetil-CoA','cuerpo cetónico','cetogénesis']},
    {t:'Síntesis de ácidos grasos y colesterol', claves:['lipogénesis','acetil-CoA carboxilasa','HMG-CoA reductasa','colesterol','malonil-CoA']},
    {t:'Metabolismo de aminoácidos y ciclo de la urea', claves:['transaminación','desaminación','amoniaco','ciclo de la urea','glutamina']},
    {t:'Metabolismo de nucleótidos', claves:['purina','pirimidina','ácido úrico','salvamento','gota']},
    {t:'Integración metabólica y hormonas', claves:['integración metabólica','insulina','glucagón','cortisol','estado alimentado']},
    {t:'Vitaminas y coenzimas', claves:['vitamina','coenzima','hidrosoluble','liposoluble','deficiencia']},
    {t:'Metabolismo del hemo y bilirrubina', claves:['hemo','bilirrubina indirecta','bilirrubina directa','ictericia','porfiria']},
    {t:'Lipoproteínas y transporte de lípidos', claves:['quilomicrón','LDL','HDL','VLDL','apolipoproteína']},
    {t:'Metabolismo del etanol', claves:['alcohol deshidrogenasa','acetaldehído','NADH hepático','hipoglucemia por alcohol']}
  ]
},

{
  programa:'unirm', cuatri:8,
  bloque:'Genética Médica', em:'🧬', color:'rosa',
  nota:'Cuatro créditos. La asignatura donde un árbol genealógico bien leído vale más que toda la teoría molecular junta.',
  temas:[
    {t:'Estructura del ADN y cromosomas', claves:['ADN','cromosoma','cromatina','telómero','centrómero','cariotipo']},
    {t:'Replicación, transcripción y traducción', claves:['replicación','transcripción','traducción','ARN mensajero','codón','splicing']},
    {t:'Tipos de mutación y sus consecuencias', claves:['mutación','sin sentido','de cambio de sentido','corrimiento del marco','silenciosa']},
    {t:'Herencia mendeliana: autosómica', claves:['autosómico dominante','autosómico recesivo','penetrancia','expresividad','portador']},
    {t:'Herencia ligada al X y mitocondrial', claves:['ligado al X','herencia mitocondrial','heteroplasmia','portadora','Lyon']},
    {t:'Lectura de árboles genealógicos', claves:['árbol genealógico','pedigrí','consanguinidad','probando','riesgo de recurrencia']},
    {t:'Alteraciones cromosómicas numéricas', claves:['trisomía','monosomía','no disyunción','Down','Turner','Klinefelter']},
    {t:'Alteraciones estructurales y mosaicismo', claves:['translocación','deleción','inversión','mosaicismo','Robertsoniana']},
    {t:'Herencia multifactorial y farmacogenética', claves:['multifactorial','umbral','heredabilidad','farmacogenética']},
    {t:'Diagnóstico genético y consejo', claves:['diagnóstico prenatal','cariotipo','FISH','consejo genético','cribado']},
    {t:'Epigenética básica', claves:['metilación del ADN','acetilación de histonas','herencia epigenética','expresión génica']},
    {t:'Enfermedades por expansión de repeticiones', claves:['tripletes repetidos','Huntington','X frágil','anticipación génica']},
    {t:'Impronta genómica', claves:['impronta genómica','disomía uniparental','Prader-Willi','Angelman']},
    {t:'Genética del cáncer hereditario', claves:['gen supresor tumoral','BRCA','oncogén hereditario','síndrome de cáncer familiar']}
  ]
},

{
  programa:'unirm', cuatri:8,
  bloque:'Bioestadística', em:'📊', color:'verde',
  nota:'Tres créditos, y la continuación natural de Estadística I: aquí se deja de describir y se empieza a inferir.',
  temas:[
    {t:'De la muestra a la población: inferencia', claves:['inferencia','parámetro','estimador','error estándar','población']},
    {t:'Intervalos de confianza', claves:['intervalo de confianza','precisión','95%','amplitud']},
    {t:'Hipótesis nula y valor p', claves:['hipótesis nula','valor p','significación','alfa','error tipo I','error tipo II']},
    {t:'Potencia y tamaño muestral', claves:['potencia','beta','tamaño muestral','efecto']},
    {t:'Pruebas para variables cuantitativas', claves:['t de Student','ANOVA','apareado','normalidad']},
    {t:'Pruebas para variables cualitativas', claves:['chi cuadrado','Fisher','tabla de contingencia','proporciones']},
    {t:'Correlación y regresión', claves:['correlación','Pearson','regresión lineal','coeficiente','causalidad']},
    {t:'Significación estadística frente a relevancia clínica', claves:['relevancia clínica','tamaño del efecto','intervalo','p pequeña']},
    {t:'Regresión logística', claves:['regresión logística','razón de momios','variable binaria','odds ratio ajustado']},
    {t:'Análisis de supervivencia', claves:['Kaplan-Meier','curva de supervivencia','censura','riesgo proporcional']},
    {t:'Meta-análisis y revisión sistemática', claves:['meta-análisis','revisión sistemática','heterogeneidad','forest plot']}
  ]
},

{
  programa:'unirm', cuatri:8,
  bloque:'Parasitología Médica', em:'🪱', color:'carbon',
  nota:'Tres créditos. Se estudia por ciclo de vida: quien tenga claro cómo entra y por dónde sale, tiene la mitad hecha.',
  temas:[
    {t:'Generalidades y clasificación de los parásitos', claves:['parásito','hospedero','vector','ciclo de vida','zoonosis']},
    {t:'Protozoos intestinales', claves:['Entamoeba histolytica','Giardia','quiste','trofozoíto','disentería']},
    {t:'Protozoos tisulares y hemáticos', claves:['Toxoplasma','Trypanosoma','Leishmania','Chagas','taquizoíto']},
    {t:'Malaria', claves:['Plasmodium','Anopheles','falciparum','gota gruesa','esquizonte','fiebre terciana']},
    {t:'Nematodos intestinales', claves:['Ascaris','uncinaria','Trichuris','Enterobius','larva']},
    {t:'Nematodos tisulares', claves:['Strongyloides','filaria','larva migrans','autoinfección']},
    {t:'Cestodos', claves:['Taenia','cisticercosis','Hymenolepis','proglótide','escólex']},
    {t:'Trematodos', claves:['Schistosoma','Fasciola','caracol','cercaria']},
    {t:'Diagnóstico parasitológico', claves:['coprológico','concentración','gota gruesa','serología','técnica de Graham']},
    {t:'Ectoparásitos', claves:['Pediculus','Sarcoptes scabiei','sarna','piojo','prurito nocturno']},
    {t:'Artrópodos de importancia médica', claves:['vector','mosquito','garrapata','transmisión vectorial']},
    {t:'Control y prevención de parasitosis', claves:['desparasitación masiva','saneamiento ambiental','prevención de zoonosis']}
  ]
},

{
  programa:'unirm', cuatri:8,
  bloque:'Epidemiología', em:'🌍', color:'yodo',
  nota:'Tres créditos. La asignatura que enseña a leer un estudio y saber si su conclusión se sostiene o no.',
  temas:[
    {t:'Conceptos y usos de la epidemiología', claves:['epidemiología','determinante','vigilancia','endemia','epidemia','brote']},
    {t:'Medidas de frecuencia', claves:['prevalencia','incidencia','tasa','riesgo','densidad de incidencia']},
    {t:'Medidas de asociación', claves:['riesgo relativo','odds ratio','razón de prevalencias','asociación']},
    {t:'Medidas de impacto', claves:['riesgo atribuible','fracción atribuible','NNT','impacto poblacional']},
    {t:'Estudios descriptivos y transversales', claves:['descriptivo','transversal','serie de casos','prevalencia']},
    {t:'Estudios de casos y controles', claves:['casos y controles','retrospectivo','odds ratio','sesgo de memoria']},
    {t:'Estudios de cohortes', claves:['cohorte','prospectivo','incidencia','pérdida de seguimiento']},
    {t:'Ensayo clínico aleatorizado', claves:['ensayo clínico','aleatorización','cegamiento','intención de tratar','placebo']},
    {t:'Sesgos, confusión e interacción', claves:['sesgo','confusión','interacción','apareamiento','estratificación']},
    {t:'Validez de una prueba diagnóstica', claves:['sensibilidad','especificidad','valor predictivo','curva ROC','cribado']},
    {t:'Causalidad', claves:['causalidad','Bradford Hill','temporalidad','plausibilidad','gradiente']},
    {t:'Vigilancia epidemiológica y notificación', claves:['sistema de vigilancia','enfermedad de notificación obligatoria','investigación de brote']},
    {t:'Epidemiología de enfermedades transmisibles y no transmisibles', claves:['cadena de transmisión','reservorio','transición epidemiológica']}
  ]
},

{
  programa:'unirm', cuatri:8,
  bloque:'Inmunología', em:'🛡️', color:'rosa',
  nota:'Un solo crédito, pero sostiene media patología del resto de la carrera. Conviene no despacharla.',
  temas:[
    {t:'Inmunidad innata y adaptativa', claves:['inmunidad innata','adaptativa','barrera','memoria','especificidad']},
    {t:'Células y órganos del sistema inmunitario', claves:['linfocito','macrófago','timo','ganglio','célula presentadora']},
    {t:'Antígeno, anticuerpo y complejo mayor de histocompatibilidad', claves:['antígeno','anticuerpo','inmunoglobulina','MHC','presentación']},
    {t:'Complemento', claves:['complemento','vía clásica','vía alterna','C3','opsonización','MAC']},
    {t:'Respuesta humoral y celular', claves:['linfocito B','linfocito T','CD4','CD8','citocina','memoria inmunitaria']},
    {t:'Hipersensibilidad y autoinmunidad', claves:['hipersensibilidad','tipo I','anafilaxia','autoinmunidad','tolerancia']},
    {t:'Inmunización', claves:['vacuna','inmunidad pasiva','activa','toxoide','esquema']},
    {t:'Inmunodeficiencias primarias', claves:['inmunodeficiencia primaria','agammaglobulinemia','inmunodeficiencia combinada grave']},
    {t:'Trasplante e inmunología del rechazo', claves:['rechazo de trasplante','histocompatibilidad','inmunosupresor','enfermedad de injerto contra hospedero']},
    {t:'Tolerancia inmunológica', claves:['tolerancia central','tolerancia periférica','selección negativa','anergia']}
  ]
}

]);
