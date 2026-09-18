/* ============================================================
   UNIRMIA — TEMARIO DEL CUATRIMESTRE 7
   Ciclo de Ciencias Basicas del pensum MED-R1-2014.

   El orden de los bloques sigue el peso en creditos del pensum,
   que es lo que de verdad indica cuanto tiempo va a ocupar cada
   asignatura: Anatomia I son 6 de 28 creditos, Estadistica I
   son 3. Estudiar las siete a partes iguales seria repartir mal
   el tiempo.

   Cada tema lleva `claves`: las palabras con las que se enlaza
   con las preguntas y las flashcards, para poder medir cobertura
   real y estudiar tema por tema.

   AMPLIADO 18/09/2026: se agregaron temas reales del pensum que
   faltaban (mano, pie, cadera, dermatomas, etc.). No se toco
   ningun tema existente, solo se sumaron al final de cada bloque.
   ============================================================ */
window.TEMARIO = (window.TEMARIO || []).concat([

{
  programa:'unirm', cuatri:7,
  bloque:'Anatomía I', em:'🦴', color:'sangria',
  nota:'Seis créditos de veintiocho: es la asignatura que más tiempo te va a pedir. Se aprueba con repetición espaciada, no con maratones.',
  temas:[
    {t:'Generalidades y términos de posición', claves:['plano sagital','plano frontal','proximal','distal','decúbito','posición anatómica']},
    {t:'Osteología general', claves:['hueso largo','diáfisis','epífisis','metáfisis','periostio','osificación']},
    {t:'Columna vertebral', claves:['vértebra','cervical','lumbar','apófisis','disco intervertebral','curvatura']},
    {t:'Tórax óseo y pared torácica', claves:['costilla','esternón','manubrio','espacio intercostal','paquete intercostal']},
    {t:'Miembro superior: huesos', claves:['clavícula','escápula','húmero','radio','cúbito','carpo','cuello quirúrgico']},
    {t:'Miembro superior: músculos y movimientos', claves:['deltoides','manguito rotador','bíceps','supinador','pronador']},
    {t:'Plexo braquial y nervios del brazo', claves:['plexo braquial','nervio radial','nervio mediano','nervio cubital','nervio axilar','mano péndula']},
    {t:'Miembro inferior: huesos', claves:['fémur','tibia','peroné','coxal','tarso','cuello femoral']},
    {t:'Miembro inferior: músculos y nervios', claves:['cuádriceps','isquiotibiales','nervio ciático','nervio femoral','pie caído']},
    {t:'Articulaciones: clasificación y biomecánica', claves:['sinovial','sínfisis','sinartrosis','cápsula articular','ligamento']},
    {t:'Vascularización de los miembros', claves:['arteria axilar','arteria braquial','arteria femoral','pulso','anastomosis']},
    {t:'Huesos del cráneo y articulaciones craneofaciales', claves:['cráneo','sutura','fontanela','hueso frontal','hueso temporal','mandíbula']},
    {t:'Cintura escapular y articulación del hombro', claves:['articulación glenohumeral','luxación de hombro','rodete glenoideo','acromion']},
    {t:'Cintura pélvica y articulación de la cadera', claves:['acetábulo','ligamento redondo','necrosis de cabeza femoral','ángulo cervicodiafisario']},
    {t:'Rodilla: anatomía articular y meniscos', claves:['menisco','ligamento cruzado anterior','ligamento colateral','articulación femorotibial']},
    {t:'Mano: huesos, articulaciones y arcos', claves:['carpo','falange','túnel carpiano','arco palmar','oponente del pulgar']},
    {t:'Pie: huesos, articulaciones y arcos plantares', claves:['astrágalo','calcáneo','arco longitudinal','tobillo','esguince']},
    {t:'Dermatomas y miotomas', claves:['dermatoma','miotoma','nivel radicular','distribución sensitiva']},
    {t:'Sistema linfático de los miembros', claves:['ganglio linfático','vaso linfático','drenaje linfático','linfedema']},
    {t:'Anatomía de superficie y puntos de referencia clínicos', claves:['punto de referencia óseo','anatomía de superficie','palpación ósea']}
  ]
},

{
  programa:'unirm', cuatri:7,
  bloque:'Fisiología I', em:'⚡', color:'yodo',
  nota:'Cinco créditos. Es la asignatura que más rinde entender y menos rinde memorizar: si comprendes el mecanismo, la mitad de las preguntas se contestan solas.',
  temas:[
    {t:'Homeostasis y medio interno', claves:['homeostasis','medio interno','retroalimentación negativa','compartimento']},
    {t:'Membrana celular y transporte', claves:['difusión','osmosis','transporte activo','bomba sodio potasio','gradiente']},
    {t:'Potencial de membrana y potencial de acción', claves:['potencial de reposo','despolarización','repolarización','periodo refractario','umbral']},
    {t:'Sinapsis y transmisión neuromuscular', claves:['sinapsis','acetilcolina','placa motora','neurotransmisor','vesícula']},
    {t:'Contracción del músculo esquelético', claves:['actina','miosina','puente cruzado','retículo sarcoplásmico','troponina','calcio']},
    {t:'Músculo liso y cardíaco', claves:['músculo liso','músculo cardíaco','automatismo','unión en hendidura']},
    {t:'Sangre: elementos formes y hemostasia', claves:['eritrocito','hematocrito','plaqueta','coagulación','hemoglobina']},
    {t:'Fisiología del sistema nervioso autónomo', claves:['simpático','parasimpático','adrenérgico','colinérgico','receptor']},
    {t:'Introducción a la fisiología cardiovascular', claves:['gasto cardíaco','precarga','poscarga','presión arterial','resistencia periférica']},
    {t:'Potenciales postsinápticos excitatorios e inhibitorios', claves:['PPSE','PPSI','sumación espacial','sumación temporal','inhibición presináptica']},
    {t:'Reflejos espinales', claves:['arco reflejo','reflejo miotático','reflejo de estiramiento','huso muscular','órgano tendinoso de Golgi']},
    {t:'Unidad motora y reclutamiento', claves:['unidad motora','reclutamiento','fibra tipo I','fibra tipo II','fatiga muscular']},
    {t:'Fisiología del dolor y nocicepción', claves:['nociceptor','fibra A delta','fibra C','sustancia gelatinosa','vía del dolor']},
    {t:'Regulación de la temperatura corporal', claves:['termorregulación','centro termorregulador','vasoconstricción cutánea','escalofrío','punto de ajuste']},
    {t:'Fisiología del líquido cefalorraquídeo', claves:['líquido cefalorraquídeo','plexo coroideo','presión intracraneal','barrera hematoencefálica']}
  ]
},

{
  programa:'unirm', cuatri:7,
  bloque:'Histología', em:'🔬', color:'rosa',
  nota:'Cuatro créditos. Se examina reconociendo: lo que no sepas describir en palabras tampoco lo vas a reconocer en la lámina.',
  temas:[
    {t:'Técnica histológica y tinciones', claves:['hematoxilina','eosina','fijación','inclusión','PAS','basófilo','acidófilo']},
    {t:'Epitelios de revestimiento', claves:['epitelio simple','estratificado','cilíndrico','cúbico','plano','transición']},
    {t:'Epitelios glandulares', claves:['glándula exocrina','endocrina','acino','merocrina','holocrina']},
    {t:'Tejido conectivo', claves:['fibroblasto','colágeno','elastina','matriz extracelular','sustancia fundamental']},
    {t:'Tejido adiposo, cartílago y hueso', claves:['adipocito','condrocito','osteocito','osteoblasto','osteoclasto','laguna']},
    {t:'Tejido muscular', claves:['sarcómero','banda A','banda I','disco intercalar','estriado']},
    {t:'Tejido nervioso', claves:['neurona','astrocito','oligodendrocito','microglía','célula de Schwann','mielina']},
    {t:'Sangre y hematopoyesis', claves:['frotis','neutrófilo','linfocito','eosinófilo','médula ósea','serie mieloide']},
    {t:'Membrana basal y uniones celulares', claves:['membrana basal','desmosoma','unión estrecha','unión en hendidura','hemidesmosoma']},
    {t:'Ciclo celular y división celular', claves:['ciclo celular','mitosis','interfase','huso mitótico','cromátida']},
    {t:'Piel y anexos cutáneos', claves:['epidermis','dermis','folículo piloso','glándula sebácea','glándula sudorípara','melanocito']},
    {t:'Histología del sistema cardiovascular', claves:['endotelio','túnica íntima','túnica media','túnica adventicia','capilar']},
    {t:'Tejido linfoide', claves:['folículo linfoide','centro germinal','timo','amígdala','tejido linfoide asociado a mucosas']}
  ]
},

{
  programa:'unirm', cuatri:7,
  bloque:'Bioquímica I', em:'🧪', color:'verde',
  nota:'Cuatro créditos. Aquí las rutas se aprenden por su lógica y por sus puntos de control, no recitando intermediarios en orden.',
  temas:[
    {t:'Agua, pH y amortiguadores', claves:['pH','pKa','amortiguador','Henderson-Hasselbalch','bicarbonato']},
    {t:'Aminoácidos y péptidos', claves:['aminoácido','esencial','punto isoeléctrico','enlace peptídico']},
    {t:'Estructura y función de las proteínas', claves:['estructura primaria','secundaria','terciaria','desnaturalización','hemoglobina','alfa hélice']},
    {t:'Enzimas y cinética enzimática', claves:['Michaelis','Km','Vmax','inhibidor competitivo','cofactor','alostérico']},
    {t:'Carbohidratos: estructura', claves:['monosacárido','glucosa','glucógeno','enlace glucosídico','almidón']},
    {t:'Glucólisis y gluconeogénesis', claves:['glucólisis','hexoquinasa','fosfofructoquinasa','piruvato','gluconeogénesis','lactato']},
    {t:'Ciclo de Krebs', claves:['ciclo de Krebs','acetil-CoA','citrato','NADH','ácido cítrico']},
    {t:'Cadena respiratoria y fosforilación oxidativa', claves:['cadena respiratoria','ATP sintasa','citocromo','gradiente de protones','quimiosmótica']},
    {t:'Lípidos: estructura y membranas', claves:['ácido graso','triglicérido','fosfolípido','colesterol','saturado']},
    {t:'Ácidos nucleicos: estructura del ADN y ARN', claves:['doble hélice','base nitrogenada','nucleótido','enlace fosfodiéster','ARN mensajero']},
    {t:'Termodinámica bioquímica y energía libre', claves:['energía libre de Gibbs','reacción exergónica','reacción endergónica','ATP como moneda energética']},
    {t:'Regulación alostérica y covalente de enzimas', claves:['regulación alostérica','fosforilación de enzimas','isoenzima','retroalimentación negativa enzimática']},
    {t:'Técnicas bioquímicas básicas', claves:['espectrofotometría','electroforesis','cromatografía','centrifugación']}
  ]
},

{
  programa:'unirm', cuatri:7,
  bloque:'Embriología', em:'🌱', color:'yodo',
  nota:'Tres créditos. Todo se ordena por semanas: si tienes clara la línea de tiempo, las malformaciones se deducen.',
  temas:[
    {t:'Gametogénesis', claves:['espermatogénesis','ovogénesis','meiosis','haploide','folículo']},
    {t:'Fecundación y primera semana', claves:['fecundación','cigoto','mórula','blastocisto','zona pelúcida']},
    {t:'Segunda semana: implantación', claves:['implantación','sincitiotrofoblasto','citotrofoblasto','disco bilaminar','hCG']},
    {t:'Tercera semana: gastrulación', claves:['gastrulación','línea primitiva','ectodermo','mesodermo','endodermo','notocorda']},
    {t:'Cuarta a octava semana: organogénesis', claves:['organogénesis','somita','plegamiento','periodo crítico','teratógeno']},
    {t:'Desarrollo del sistema nervioso', claves:['tubo neural','cresta neural','neuroporo','espina bífida','anencefalia']},
    {t:'Anexos embrionarios y placenta', claves:['placenta','amnios','cordón umbilical','saco vitelino','corion']},
    {t:'Malformaciones congénitas frecuentes', claves:['malformación','ácido fólico','labio hendido','onfalocele','gastrosquisis']},
    {t:'Desarrollo del sistema cardiovascular', claves:['tubo cardíaco','tabicación cardíaca','foramen oval','conducto arterioso']},
    {t:'Desarrollo del aparato digestivo', claves:['intestino primitivo','rotación intestinal','hernia umbilical fisiológica','páncreas embrionario']},
    {t:'Desarrollo del aparato genitourinario', claves:['pronefros','mesonefros','metanefros','conducto de Wolff','conducto de Müller']},
    {t:'Desarrollo de los miembros', claves:['yema del miembro','cresta ectodérmica apical','ectrodactilia','focomelia']},
    {t:'Gemelaridad y placentación múltiple', claves:['gemelos monocigóticos','gemelos dicigóticos','placenta monocorial','placenta bicorial']}
  ]
},

{
  programa:'unirm', cuatri:7,
  bloque:'Microbiología Médica', em:'🦠', color:'carbon',
  nota:'Tres créditos. Se estudia por pares que se confunden: grampositivo contra gramnegativo, catalasa contra coagulasa.',
  temas:[
    {t:'Estructura bacteriana y tinción de Gram', claves:['gram','peptidoglicano','cápsula','flagelo','pared celular','endospora']},
    {t:'Crecimiento bacteriano y medios de cultivo', claves:['agar sangre','MacConkey','aerobio','anaerobio','fase logarítmica']},
    {t:'Cocos grampositivos', claves:['Staphylococcus','Streptococcus','catalasa','coagulasa','hemólisis','aureus']},
    {t:'Bacilos gramnegativos', claves:['Escherichia coli','Salmonella','Pseudomonas','lactosa','enterobacteria']},
    {t:'Mecanismos de patogenicidad', claves:['exotoxina','endotoxina','lipopolisacárido','adhesina','virulencia']},
    {t:'Antibióticos: mecanismos y resistencia', claves:['betalactámico','betalactamasa','resistencia','antibiograma','concentración mínima inhibitoria']},
    {t:'Introducción a la virología', claves:['virus','cápside','envoltura','replicación viral','retrovirus']},
    {t:'Introducción a la micología', claves:['hongo','levadura','hifa','Candida','dimórfico']},
    {t:'Genética bacteriana', claves:['plásmido','transferencia horizontal','conjugación','transducción','transformación bacteriana']},
    {t:'Espiroquetas', claves:['Treponema pallidum','Leptospira','Borrelia','sífilis','enfermedad de Lyme']},
    {t:'Micobacterias', claves:['Mycobacterium tuberculosis','bacilo ácido alcohol resistente','Ziehl-Neelsen','tuberculosis']},
    {t:'Diagnóstico microbiológico', claves:['cultivo','tinción','prueba rápida','hemocultivo','antibiograma']},
    {t:'Flora normal y microbiota', claves:['microbiota','flora normal','disbiosis','colonización']}
  ]
},

{
  programa:'unirm', cuatri:7,
  bloque:'Estadística I', em:'📐', color:'verde',
  nota:'Tres créditos y la asignatura que más se subestima. Es la que después te deja leer un artículo sin creerte lo que te digan.',
  temas:[
    {t:'Tipos de variables y escalas de medición', claves:['cualitativa','cuantitativa','nominal','ordinal','discreta','continua']},
    {t:'Medidas de tendencia central', claves:['media','mediana','moda','asimetría']},
    {t:'Medidas de dispersión', claves:['desviación estándar','varianza','rango','coeficiente de variación']},
    {t:'Presentación de datos: tablas y gráficos', claves:['histograma','frecuencia','gráfico de barras','diagrama de caja']},
    {t:'Probabilidad básica', claves:['probabilidad','independencia','regla de la suma','regla del producto']},
    {t:'Distribución normal', claves:['distribución normal','campana','puntuación z','percentil','desviaciones']},
    {t:'Muestreo y tipos de muestra', claves:['muestra','aleatorio simple','estratificado','sesgo de selección','representatividad']},
    {t:'Relación entre variables: tablas de contingencia', claves:['tabla de contingencia','variable dependiente','variable independiente','frecuencia esperada']},
    {t:'Errores de medición, validez y confiabilidad', claves:['validez','confiabilidad','error sistemático','error aleatorio','reproducibilidad']},
    {t:'Fuentes de datos en salud', claves:['censo','registro vital','estadística vital','sistema de información en salud']}
  ]
}

]);
