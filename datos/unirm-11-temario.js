/* ============================================================
   UNIRMIA — TEMARIO DEL CUATRIMESTRE 11
   Continua el ciclo clinico del pensum de Medicina de UCATECI.
   23 creditos en siete asignaturas (fuente de nombres y
   creditos: pensumvirtual.tech, ver nota en asignaturas-unirm.js).

   Igual que en cuatrimestre 10, no existe un temario oficial de
   topicos publicado para este cuatrimestre -solo el nombre de
   cada materia-, asi que los temas de cada bloque son de
   elaboracion propia, con el mismo criterio clinico ya usado en
   el resto de UNIRMIA: lo que realmente se examina y se necesita
   saber en esa rotacion.

   El orden de los bloques sigue el peso en creditos.
   ============================================================ */
window.TEMARIO = (window.TEMARIO || []).concat([

{
  bloque:'Pediatría I', em:'🧒', color:'yodo', programa:'unirm', cuatri:11,
  nota:'Seis créditos, la materia de mayor peso del cuatrimestre. Primer contacto formal con la pediatría: crecimiento y desarrollo normal, control de niño sano, y los motivos de consulta pediátrica más frecuentes.',
  temas:[
    {t:'Crecimiento y desarrollo normal', claves:['curva de crecimiento','hitos del desarrollo','percentil de peso y talla']},
    {t:'Evaluación del recién nacido normal', claves:['test de Apgar','examen físico del recién nacido','reflejos primitivos']},
    {t:'Lactancia materna y alimentación complementaria', claves:['lactancia materna exclusiva','ablactación','alimentación complementaria']},
    {t:'Esquema de vacunación infantil', claves:['esquema nacional de vacunación','vacuna pentavalente','cadena de frío']},
    {t:'Control de niño sano', claves:['consulta de niño sano','tamizaje neonatal','anticipación de riesgos']},
    {t:'Fiebre en el niño', claves:['fiebre sin foco','manejo de la fiebre pediátrica','signos de alarma en fiebre']},
    {t:'Infecciones respiratorias agudas en pediatría', claves:['bronquiolitis','neumonía en el niño','crup laríngeo']},
    {t:'Enfermedad diarreica aguda en pediatría', claves:['deshidratación por diarrea','plan A B C de hidratación','diarrea aguda infantil']},
    {t:'Desnutrición infantil', claves:['desnutrición aguda','desnutrición crónica','marasmo y kwashiorkor']},
    {t:'Anemia en la infancia', claves:['anemia ferropénica infantil','suplementación con hierro','anemia en el lactante']},
    {t:'Enfermedades exantemáticas', claves:['sarampión','varicela','exantema súbito']},
    {t:'Asma en la infancia', claves:['sibilancias recurrentes','crisis asmática pediátrica','inhalador con espaciador']},
    {t:'Convulsión febril', claves:['convulsión febril simple','convulsión febril compleja','manejo de la convulsión en el niño']},
    {t:'Maltrato infantil', claves:['maltrato físico infantil','negligencia infantil','notificación obligatoria de maltrato']},
    {t:'Trastornos del desarrollo psicomotor', claves:['retraso del desarrollo psicomotor','tamizaje del desarrollo','signos de alarma del desarrollo']},
    {t:'Deshidratación en pediatría', claves:['grados de deshidratación','rehidratación oral','rehidratación intravenosa pediátrica']},
    {t:'Dolor abdominal en el niño', claves:['dolor abdominal recurrente infantil','abdomen agudo pediátrico','cólico del lactante']},
    {t:'Urgencias pediátricas comunes', claves:['cuerpo extraño en vía aérea infantil','intoxicación pediátrica','trauma pediátrico']}
  ]
},

{
  bloque:'Obstetricia I', em:'🤰', color:'rosa', programa:'unirm', cuatri:11,
  nota:'Cinco créditos. El embarazo normal de principio a fin: control prenatal, trabajo de parto y las complicaciones obstétricas más frecuentes.',
  temas:[
    {t:'Fisiología del embarazo normal', claves:['cambios fisiológicos del embarazo','duración del embarazo','edad gestacional']},
    {t:'Control prenatal de la gestante', claves:['control prenatal','consulta prenatal de bajo riesgo','calendario de controles']},
    {t:'Diagnóstico de embarazo', claves:['prueba de embarazo','beta-hCG','signos de presunción y probabilidad']},
    {t:'Cambios anatómicos y fisiológicos del embarazo', claves:['cambios cardiovasculares del embarazo','cambios respiratorios del embarazo','cambios renales del embarazo']},
    {t:'Nutrición en el embarazo', claves:['ganancia de peso en el embarazo','ácido fólico','suplementación en el embarazo']},
    {t:'Ecografía obstétrica básica', claves:['ecografía del primer trimestre','biometría fetal','ecografía obstétrica de rutina']},
    {t:'Trabajo de parto normal', claves:['fases del trabajo de parto','contracciones uterinas efectivas','partograma']},
    {t:'Mecanismo del parto', claves:['mecanismo del parto','presentación cefálica','encajamiento fetal']},
    {t:'Atención del parto eutócico', claves:['atención del parto vaginal','episiotomía','alumbramiento']},
    {t:'Puerperio normal', claves:['puerperio inmediato','involución uterina','loquios']},
    {t:'Hemorragia obstétrica del primer trimestre', claves:['aborto espontáneo','embarazo ectópico','enfermedad trofoblástica gestacional']},
    {t:'Hemorragia obstétrica del tercer trimestre', claves:['placenta previa','desprendimiento prematuro de placenta','rotura uterina']},
    {t:'Trastornos hipertensivos del embarazo', claves:['preeclampsia','eclampsia','hipertensión gestacional']},
    {t:'Diabetes gestacional en el embarazo', claves:['tamizaje de diabetes gestacional','prueba de tolerancia a la glucosa','control glucémico en el embarazo']},
    {t:'Infecciones en el embarazo', claves:['infección urinaria en el embarazo','sífilis gestacional','toxoplasmosis congénita']}
  ]
},

{
  bloque:'Ginecología I', em:'🌸', color:'lila', programa:'unirm', cuatri:11,
  nota:'Cuatro créditos. La consulta ginecológica fuera del embarazo: ciclo menstrual, anticoncepción y la patología ginecológica benigna más frecuente.',
  temas:[
    {t:'Anatomía y fisiología del aparato reproductor femenino', claves:['anatomía pélvica femenina','eje hipotálamo-hipófisis-ovario','fisiología reproductiva femenina']},
    {t:'Ciclo menstrual normal', claves:['fase folicular','fase lútea','ovulación']},
    {t:'Historia clínica ginecológica', claves:['anamnesis ginecológica','examen pélvico','especuloscopia']},
    {t:'Trastornos menstruales', claves:['amenorrea','sangrado uterino anormal','dismenorrea']},
    {t:'Anticoncepción', claves:['métodos anticonceptivos hormonales','dispositivo intrauterino','anticoncepción de emergencia']},
    {t:'Infecciones de transmisión sexual en la mujer', claves:['infección de transmisión sexual','clamidia','gonorrea']},
    {t:'Enfermedad pélvica inflamatoria', claves:['enfermedad pélvica inflamatoria','absceso tuboovárico','secuelas de la EPI']},
    {t:'Vulvovaginitis', claves:['vaginosis bacteriana','candidiasis vulvovaginal','tricomoniasis']},
    {t:'Climaterio y menopausia', claves:['menopausia','síndrome climatérico','terapia hormonal de la menopausia']},
    {t:'Patología benigna de mama', claves:['fibroadenoma mamario','mastalgia','nódulo mamario benigno']},
    {t:'Tamizaje de cáncer cervicouterino', claves:['citología cervical','prueba de VPH','colposcopia']},
    {t:'Miomatosis uterina', claves:['mioma uterino','leiomioma sintomático','manejo del mioma']},
    {t:'Dolor pélvico crónico', claves:['dolor pélvico crónico','endometriosis','evaluación del dolor pélvico']}
  ]
},

{
  bloque:'Patología Infecciosa', em:'🦠', color:'verde', programa:'unirm', cuatri:11,
  nota:'Tres créditos. Las enfermedades infecciosas más relevantes en la práctica clínica dominicana, desde el síndrome febril hasta las arbovirosis endémicas.',
  temas:[
    {t:'Principios de enfermedades infecciosas', claves:['tríada epidemiológica','cadena de transmisión de infecciones','huésped agente y ambiente']},
    {t:'Síndrome febril de origen desconocido', claves:['fiebre de origen desconocido','abordaje del síndrome febril','causas de fiebre prolongada']},
    {t:'Infecciones bacterianas comunes', claves:['infección estreptocócica','infección estafilocócica','celulitis bacteriana']},
    {t:'Infecciones virales comunes', claves:['infección viral respiratoria','mononucleosis infecciosa','infección por herpesvirus']},
    {t:'Tuberculosis en la práctica clínica', claves:['tuberculosis pulmonar','baciloscopia','esquema de tratamiento antituberculoso']},
    {t:'VIH/SIDA', claves:['infección por VIH','conteo de CD4','terapia antirretroviral']},
    {t:'Dengue, zika y chikungunya', claves:['dengue','signos de alarma del dengue','arbovirosis']},
    {t:'Enfermedades parasitarias', claves:['parasitosis intestinal','malaria','helmintiasis']},
    {t:'Infecciones micóticas', claves:['micosis superficial','micosis sistémica','candidiasis invasiva']},
    {t:'Sepsis', claves:['sepsis','choque séptico','criterios de qSOFA']},
    {t:'Uso apropiado de antimicrobianos en enfermedad infecciosa', claves:['terapia antimicrobiana empírica','resistencia antimicrobiana','desescalamiento antibiótico']},
    {t:'Enfermedades de notificación obligatoria en República Dominicana', claves:['vigilancia epidemiológica','enfermedad de notificación obligatoria','brote epidémico']}
  ]
},

{
  bloque:'Imagenología y Medicina Nuclear', em:'🩻', color:'suero', programa:'unirm', cuatri:11,
  nota:'Dos créditos. Cómo interpretar los estudios de imagen más frecuentes en la práctica clínica, y cuándo pedir cada uno.',
  temas:[
    {t:'Principios de radiología', claves:['formación de la imagen radiológica','densidades radiológicas','principio ALARA']},
    {t:'Radiografía de tórax', claves:['lectura sistemática de radiografía de tórax','infiltrado pulmonar','derrame pleural en radiografía']},
    {t:'Radiografía de abdomen', claves:['radiografía simple de abdomen','niveles hidroaéreos','neumoperitoneo']},
    {t:'Ecografía general', claves:['principios del ultrasonido','ecografía abdominal','ecografía a pie de cama']},
    {t:'Tomografía computarizada', claves:['indicaciones de la tomografía computarizada','contraste yodado','ventana ósea y de partes blandas']},
    {t:'Resonancia magnética', claves:['indicaciones de la resonancia magnética','contraindicaciones de la resonancia magnética','contraste con gadolinio']},
    {t:'Medicina nuclear básica', claves:['gammagrafía','tomografía por emisión de positrones','radiofármaco']}
  ]
},

{
  bloque:'Nutrición', em:'🥗', color:'verde', programa:'unirm', cuatri:11,
  nota:'Dos créditos. La evaluación nutricional como parte de cualquier consulta médica, y el manejo de la malnutrición en sus dos extremos.',
  temas:[
    {t:'Evaluación del estado nutricional', claves:['índice de masa corporal','evaluación antropométrica','historia dietética']},
    {t:'Macronutrientes y micronutrientes', claves:['requerimiento calórico','macronutrientes','micronutrientes esenciales']},
    {t:'Desnutrición y malnutrición', claves:['desnutrición proteico-calórica','malnutrición en el adulto','déficit de micronutrientes']},
    {t:'Obesidad', claves:['obesidad','síndrome metabólico y obesidad','manejo del sobrepeso']},
    {t:'Nutrición en situaciones especiales', claves:['nutrición en el embarazo','nutrición en el adulto mayor','nutrición en la enfermedad crónica']},
    {t:'Soporte nutricional', claves:['nutrición enteral','nutrición parenteral','indicaciones de soporte nutricional']},
    {t:'Educación nutricional', claves:['consejería nutricional','plato saludable','cambio de hábito alimentario']}
  ]
},

{
  bloque:'Pre Internado de Gineco-Obstetricia', em:'🏥', color:'sangria', programa:'unirm', cuatri:11,
  nota:'Un crédito. La orientación práctica antes de rotar de lleno por el servicio de gineco-obstetricia, con el mismo espíritu del Servicio Hospitalario Pre Clínico de 10mo, ahora aplicado a esta especialidad concreta.',
  temas:[
    {t:'Rol del estudiante en el servicio de gineco-obstetricia', claves:['rol del estudiante en sala de partos','participación supervisada en gineco-obstetricia']},
    {t:'Historia clínica obstétrica y ginecológica completa', claves:['historia obstétrica','fórmula obstétrica','antecedentes gineco-obstétricos']},
    {t:'Signos de alarma en el embarazo', claves:['signos de alarma obstétrica','cuándo referir a una gestante','urgencia obstétrica']},
    {t:'Documentación en gineco-obstetricia', claves:['nota de evolución obstétrica','partograma como documento','registro del trabajo de parto']}
  ]
}

]);
