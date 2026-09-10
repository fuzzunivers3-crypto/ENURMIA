/* ============================================================
   TEMARIO DE ESTUDIO
   Los cinco bloques con los temas que hay que llevar preparados.
   Contrastado con la estructura real del ENURM ya verificada:
   Medicina Interna es el bloque dominante, Ginecología y
   Obstetricia y Pediatría le siguen, y Cirugía pesa menos de lo
   que suele asumirse.

   Cada tema lleva `claves`: las palabras con las que se enlaza
   con las preguntas del banco y con las flashcards, para poder
   medir cobertura real y estudiar tema por tema.
   ============================================================ */
window.TEMARIO = [

{
  bloque:'Medicina Interna', em:'🫀', color:'sangria',
  nota:'El bloque más pesado del examen. Si el tiempo es escaso, aquí es donde más rinde.',
  temas:[
    {t:'Hipertensión arterial', claves:['hipertensi','presión arterial','antihipertensiv','MAPA','bata blanca']},
    {t:'Crisis hipertensiva', claves:['crisis hipertensiva','emergencia hipertensiva','urgencia hipertensiva','edema agudo de pulmón']},
    {t:'Insuficiencia cardíaca', claves:['insuficiencia cardíaca','FEVI','ortopnea','disnea paroxística','péptido natriurético','NT-proBNP']},
    {t:'Síndrome coronario agudo', claves:['síndrome coronario','SCACEST','SCASEST','infarto','troponina','angioplastia','reperfusión']},
    {t:'Angina estable e inestable', claves:['angina','dolor torácico','isquémic','ergometría']},
    {t:'Arritmias', claves:['fibrilación auricular','arritmi','taquicardia','bradicardia','bloqueo AV','marcapasos','CHA']},
    {t:'Interpretación básica del ECG', claves:['electrocardiogram','ECG','segmento ST','onda T','onda Q','QT','QRS']},
    {t:'Neumonía adquirida en la comunidad', claves:['neumonía','CURB','consolidación','amoxicilina','ceftriaxona']},
    {t:'EPOC', claves:['EPOC','enfisema','bronquitis crónica','GOLD','DLCO','ventilación no invasiva']},
    {t:'Asma bronquial', claves:['asma','sibilancia','metacolina','salbutamol','GINA','broncodilatador']},
    {t:'Derrame pleural', claves:['derrame pleural','Light','exudado','trasudado','toracocentesis','empiema','ADA pleural']},
    {t:'Tromboembolia pulmonar', claves:['tromboembolia','TEP','Wells','dímero D','angiotomografía','trombosis venosa']},
    {t:'Tuberculosis', claves:['tuberculosis','baciloscopia','BAAR','tuberculina','contactos','isoniacida']},
    {t:'Cirrosis y sus complicaciones', claves:['cirrosis','ascitis','várices','peritonitis bacteriana espontánea','encefalopatía hepática','hepatorrenal','Child']},
    {t:'Hepatitis virales', claves:['hepatitis','HBsAg','anti-HBc','virus de la hepatitis','transaminasas','ictericia']},
    {t:'Diabetes mellitus: diagnóstico y tratamiento', claves:['diabetes','HbA1c','glucemia','metformina','insulina','SGLT2','GLP-1']},
    {t:'Cetoacidosis diabética', claves:['cetoacidosis','cetonas','anión gap','potasio','insulina en infusión']},
    {t:'Estado hiperosmolar', claves:['hiperosmolar','osmolaridad','hiperglucemia grave','deshidratación']},
    {t:'Hipoglucemia', claves:['hipoglucemia','Whipple','glucagón','sulfonilurea']},
    {t:'Hipotiroidismo e hipertiroidismo', claves:['tiroid','TSH','T4','Graves','Hashimoto','tirotoxicosis','bocio']},
    {t:'Lesión renal aguda', claves:['lesión renal aguda','fracaso renal','prerrenal','necrosis tubular','FeNa','creatinina']},
    {t:'Enfermedad renal crónica', claves:['enfermedad renal crónica','filtrado glomerular','diálisis','KDIGO','nefropatía']},
    {t:'Síndrome nefrótico y nefrítico', claves:['nefrótico','nefrítico','proteinuria','glomerulonefritis','membranosa','cilindros hemáticos']},
    {t:'Hiponatremia', claves:['hiponatremia','sodio bajo','SIADH','osmolaridad plasmática']},
    {t:'Hipernatremia', claves:['hipernatremia','sodio alto','diabetes insípida','déficit de agua']},
    {t:'Hipopotasemia', claves:['hipopotasemia','potasio bajo','onda U']},
    {t:'Hiperpotasemia', claves:['hiperpotasemia','potasio alto','ondas T picudas','gluconato de calcio']},
    {t:'Trastornos ácido-base y gasometría', claves:['acidosis','alcalosis','gasometría','brecha aniónica','anión gap','bicarbonato','pH']},
    {t:'Artritis reumatoide', claves:['artritis reumatoide','factor reumatoide','anti-CCP','metotrexato','sinovitis']},
    {t:'Lupus eritematoso sistémico', claves:['lupus','antinuclear','anti-DNA','complemento','nefritis lúpica','hidroxicloroquina']},
    {t:'Gota', claves:['gota','ácido úrico','urato','colchicina','alopurinol','podagra']},
    {t:'Osteoartritis', claves:['artrosis','osteoartritis','coxartrosis','gonartrosis','osteofito']},
    {t:'Accidente cerebrovascular isquémico y hemorrágico', claves:['ictus','cerebrovascular','trombólisis','hemiparesia','afasia','hemorragia intracerebral','NIHSS']},
    {t:'Crisis convulsivas', claves:['crisis','convulsi','epileps','estado epiléptico','benzodiacepina','levetiracetam']},
    {t:'Meningitis', claves:['meningitis','rigidez de nuca','punción lumbar','dexametasona','líquido cefalorraquídeo']},
    {t:'Encefalitis', claves:['encefalitis','herpes','aciclovir','lóbulo temporal']},
    {t:'Escala de Glasgow', claves:['Glasgow','nivel de conciencia','apertura ocular','respuesta motora']},
    {t:'Shock: hipovolémico, cardiogénico, séptico y anafiláctico', claves:['shock','séptico','cardiogénico','hipovolémico','noradrenalina','lactato','vasopresor']},
    {t:'Paro cardiorrespiratorio y RCP', claves:['parada cardiorrespiratoria','reanimación','compresiones','desfibrila','adrenalina','fibrilación ventricular']},
    {t:'Intoxicaciones frecuentes', claves:['intoxicación','antídoto','paracetamol','organofosforado','N-acetilcisteína','atropina','cianuro','naloxona']},
    {t:'Anafilaxia', claves:['anafilaxia','adrenalina intramuscular','urticaria','angioedema','estridor']}
  ]
},

{
  bloque:'Ginecología y Obstetricia', em:'🤰', color:'lila',
  nota:'Segundo bloque en peso. La obstetricia de urgencia es la que más se pregunta.',
  temas:[
    {t:'Control prenatal', claves:['control prenatal','ácido fólico','atención prenatal','captación','tamizaje gestacional']},
    {t:'Maniobras de Leopold', claves:['Leopold','situación fetal','presentación','posición fetal']},
    {t:'Cambios fisiológicos del embarazo', claves:['cambios fisiológicos','volumen plasmático','anemia dilucional','embarazo normal']},
    {t:'Parto', claves:['trabajo de parto','dilatación','período expulsivo','alumbramiento','partograma']},
    {t:'Hemorragias del primer trimestre', claves:['aborto','ectópico','mola','primer trimestre','gonadotropina']},
    {t:'Hemorragias del segundo y tercer trimestre', claves:['placenta previa','desprendimiento','vasa previa','rotura uterina','hemorragia obstétrica']},
    {t:'Preeclampsia y eclampsia', claves:['preeclampsia','eclampsia','sulfato de magnesio','proteinuria','signos de severidad']},
    {t:'Trastornos hipotensivos del embarazo', claves:['hipotensión','síndrome de vena cava','decúbito lateral izquierdo','shock obstétrico']},
    {t:'Síndrome HELLP', claves:['HELLP','hemólisis','plaquetas bajas','transaminasas elevadas']},
    {t:'Diabetes gestacional', claves:['diabetes gestacional','curva de tolerancia','24 y 28 semanas','macrosomía']},
    {t:'Ruptura prematura de membranas', claves:['rotura prematura de membranas','RPM','corioamnionitis','cristalografía','test de nitrazina']},
    {t:'Métodos anticonceptivos', claves:['anticoncep','DIU','implante','criterios de elegibilidad','estrógeno']},
    {t:'Infecciones de transmisión sexual', claves:['transmisión sexual','sífilis','gonorrea','clamidia','VPH','herpes genital','tricomon']},
    {t:'Ciclo ovárico y ciclo menstrual', claves:['ciclo menstrual','ovulación','fase lútea','estradiol','LH','FSH']},
    {t:'Síndrome de ovario poliquístico', claves:['ovario poliquístico','Rotterdam','hiperandrogenismo','oligoovulación']},
    {t:'Endometriosis', claves:['endometriosis','dismenorrea','dispareunia','laparoscopia diagnóstica']},
    {t:'Amenorrea primaria y secundaria', claves:['amenorrea','menarquia','prolactina','Turner','Asherman']},
    {t:'Anatomía del aparato reproductor femenino', claves:['anatomía reproductor','útero','trompa','ovario','ligamento','fondo de saco']},
    {t:'Enfermedad inflamatoria pélvica', claves:['enfermedad inflamatoria pélvica','EPI','dolor a la movilización cervical','absceso tuboovárico']},
    {t:'Papanicolaou y tamizaje cervical', claves:['citología','Papanicolaou','colposcopia','lesión intraepitelial','cribado cervical']},
    {t:'Cáncer de mama', claves:['cáncer de mama','mamografía','ganglio centinela','BRCA','carcinoma ductal']}
  ]
},

{
  bloque:'Pediatría', em:'👶', color:'suero',
  nota:'AIEPI y neonatología concentran buena parte de las preguntas.',
  temas:[
    {t:'Control prenatal desde pediatría', claves:['control prenatal','riesgo perinatal','tamizaje neonatal']},
    {t:'Atención al recién nacido', claves:['recién nacido','Apgar','pinzamiento','contacto piel con piel','antropometría neonatal']},
    {t:'Profilaxis del recién nacido', claves:['profilaxis','vitamina K','profilaxis ocular','BCG','hepatitis B al nacer']},
    {t:'AIEPI', claves:['AIEPI','signos de peligro','clasificación','atención integrada']},
    {t:'Bronquiolitis', claves:['bronquiolitis','VRS','sibilancias del lactante','soporte']},
    {t:'Neumonía en pediatría', claves:['neumonía','taquipnea','amoxicilina','tiraje']},
    {t:'Lactancia materna', claves:['lactancia','leche materna','alimentación complementaria','destete']},
    {t:'Asma en pediatría', claves:['asma','sibilancia','corticoide inhalado','crisis asmática']},
    {t:'Infecciones urinarias en pediatría', claves:['infección urinaria','urocultivo','reflujo vesicoureteral','pielonefritis']},
    {t:'Programa Ampliado de Inmunizaciones (PAI)', claves:['vacuna','inmunización','esquema','PAI','cadena de frío','contraindicación vacunal']},
    {t:'Diarreas', claves:['diarrea','gastroenteritis','rotavirus','zinc','sales de rehidratación']},
    {t:'Deshidratación', claves:['deshidratación','plan A','plan B','plan C','pliegue cutáneo','signo del pliegue']},
    {t:'Desnutrición', claves:['desnutrición','kwashiorkor','marasmo','realimentación','peso para la talla']},
    {t:'Reanimación neonatal', claves:['reanimación neonatal','ventilación con presión positiva','minuto de oro','frecuencia cardíaca neonatal']},
    {t:'Fiebre en pediatría', claves:['fiebre','fiebre sin foco','lactante febril','convulsión febril']},
    {t:'Ictericia neonatal', claves:['ictericia','bilirrubina','fototerapia','incompatibilidad','Coombs']},
    {t:'Anemia en pediatría', claves:['anemia','ferropénica','hierro','ferritina','VCM']},
    {t:'Parasitosis', claves:['parasit','áscaris','giardia','amebiasis','oxiuros','albendazol','helmint']},
    {t:'Epilepsia en pediatría', claves:['epileps','crisis','ausencia','mioclónica','electroencefalograma']},
    {t:'Cálculo de dosis de medicamentos', claves:['dosis','mg/kg','cálculo','peso','posología pediátrica']}
  ]
},

{
  bloque:'Cirugía', em:'🔪', color:'yodo',
  nota:'Pesa menos que Medicina Interna, pero el abdomen agudo y el trauma se preguntan siempre.',
  temas:[
    {t:'Cuadrantes del abdomen', claves:['cuadrante','fosa ilíaca','hipocondrio','epigastrio','topografía abdominal']},
    {t:'Órganos intraperitoneales y retroperitoneales', claves:['intraperitoneal','retroperitoneal','peritoneo','mesenterio']},
    {t:'Apendicitis', claves:['apendicitis','McBurney','Blumberg','migración del dolor','apendicectomía']},
    {t:'Pancreatitis', claves:['pancreatitis','lipasa','amilasa','Atlanta','hidratación']},
    {t:'Colelitiasis', claves:['colelitiasis','litiasis biliar','cólico biliar','vesícula']},
    {t:'Colecistitis', claves:['colecistitis','Murphy','ecografía biliar','colecistectomía']},
    {t:'Colangitis', claves:['colangitis','Charcot','Reynolds','CPRE','drenaje biliar']},
    {t:'Coledocolitiasis', claves:['coledocolitiasis','colédoco','colestasis','dilatación de vía biliar']},
    {t:'Abdomen agudo', claves:['abdomen agudo','irritación peritoneal','neumoperitoneo','perforación','defensa']},
    {t:'Trauma de abdomen', claves:['trauma abdominal','FAST','laparotomía','lesión esplénica','hepática']},
    {t:'Trauma de tórax', claves:['trauma torácico','tórax inestable','contusión pulmonar','taponamiento']},
    {t:'Neumotórax y hemotórax', claves:['neumotórax','hemotórax','tubo de tórax','timpanismo','matidez','descompresión']},
    {t:'ATLS', claves:['ATLS','ABCDE','vía aérea','politraumatizado','triage','control cervical']},
    {t:'Vólvulo', claves:['vólvulo','sigmoide','grano de café','desvolvulación','malrotación']},
    {t:'Fecaloma', claves:['fecaloma','impactación fecal','estreñimiento','desimpactación']},
    {t:'Hemorragias digestivas', claves:['hemorragia digestiva','melena','hematemesis','hematoquecia','Forrest','endoscopia']},
    {t:'Gastritis', claves:['gastritis','Helicobacter','erradicación','inhibidor de bomba']},
    {t:'Reflujo gastroesofágico', claves:['reflujo','pirosis','Barrett','pHmetría','omeprazol']},
    {t:'Acalasia', claves:['acalasia','manometría','disfagia','esfínter esofágico inferior','pico de pájaro']}
  ]
}

];

/* Los bloques transversales que el examen también evalúa y que ya
   tienen banco propio: Epidemiología, Salud Pública, Bioética,
   Farmacología, Ciencias Básicas y Medicina Familiar. Se estudian
   desde la sección Entrenar filtrando por especialidad. */
window.TEMARIO_TRANSVERSAL = [
  'Epidemiología', 'Salud Pública', 'Bioética',
  'Farmacología', 'Ciencias Básicas', 'Medicina Familiar'
];
