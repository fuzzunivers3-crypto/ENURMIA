/* ============================================================
   UNIRMIA — TEMARIO DEL CUATRIMESTRE 12
   Continua el ciclo clinico del pensum de Medicina de UCATECI.
   21 creditos en ocho asignaturas (fuente de nombres y
   creditos: pensumvirtual.tech, ver nota en asignaturas-unirm.js).

   Igual que en cuatrimestres 10 y 11, no existe un temario
   oficial de topicos publicado para este cuatrimestre -solo el
   nombre de cada materia-, asi que los temas de cada bloque son
   de elaboracion propia, con el mismo criterio clinico ya usado
   en el resto de UNIRMIA: lo que realmente se examina y se
   necesita saber en esa rotacion.

   Verificado antes de escribir: ninguno de los titulos de tema
   de este archivo coincide letra por letra con ningun tema ya
   existente en datos/apuntes-0N-*.js (ENURM).

   El orden de los bloques sigue el peso en creditos.
   ============================================================ */
window.TEMARIO = (window.TEMARIO || []).concat([

{
  bloque:'Obstetricia II', em:'🤰', color:'rosa', programa:'unirm', cuatri:12,
  nota:'Cuatro créditos. Continúa Obstetricia I: el embarazo y el parto cuando algo se desvía de lo normal, y las complicaciones que exigen un manejo más especializado.',
  temas:[
    {t:'Parto distócico y sus causas', claves:['distocia del trabajo de parto','desproporción cefalopélvica','falla en el progreso del parto']},
    {t:'Distocias de la presentación fetal', claves:['presentación podálica','presentación de cara','situación transversa']},
    {t:'Cesárea: indicaciones y técnica', claves:['indicaciones de cesárea','cesárea de emergencia','cesárea electiva']},
    {t:'Inducción y conducción del trabajo de parto', claves:['inducción del parto','maduración cervical','oxitocina en el trabajo de parto']},
    {t:'Ruptura prematura de membranas pretérmino', claves:['ruptura prematura de membranas','manejo expectante en RPM','corioamnionitis']},
    {t:'Embarazo múltiple', claves:['embarazo gemelar','gemelos monocoriónicos y bicoriónicos','síndrome de transfusión feto-fetal']},
    {t:'Restricción del crecimiento intrauterino', claves:['restricción del crecimiento fetal','insuficiencia placentaria','doppler obstétrico']},
    {t:'Embarazo postérmino', claves:['embarazo prolongado','manejo del embarazo postérmino','riesgo de insuficiencia placentaria tardía']},
    {t:'Isoinmunización Rh', claves:['isoinmunización materno-fetal','enfermedad hemolítica del recién nacido','coombs indirecto']},
    {t:'Muerte fetal intrauterina', claves:['óbito fetal','muerte fetal tardía','manejo tras muerte fetal']},
    {t:'Hemorragia posparto: manejo avanzado', claves:['atonía uterina','manejo escalonado de la hemorragia posparto','histerectomía obstétrica']},
    {t:'Infección puerperal', claves:['endometritis puerperal','fiebre puerperal','sepsis puerperal']},
    {t:'Medicina materno-fetal: conceptos básicos', claves:['embarazo de alto riesgo','unidad de medicina materno-fetal','vigilancia fetal anteparto']}
  ]
},

{
  bloque:'Pediatría II', em:'🧒', color:'yodo', programa:'unirm', cuatri:12,
  nota:'Cuatro créditos. Continúa Pediatría I hacia patologías pediátricas más específicas por sistema, complementando lo ya visto sobre infecciones y nutrición del niño.',
  temas:[
    {t:'Cardiopatías congénitas en el niño', claves:['cardiopatía congénita cianótica','cardiopatía congénita acianótica','soplo cardíaco en el niño']},
    {t:'Enfermedades endocrinológicas pediátricas', claves:['diabetes mellitus tipo 1 en el niño','hipotiroidismo congénito','talla baja en el niño']},
    {t:'Trastornos hematológicos pediátricos', claves:['anemia hemolítica en el niño','púrpura trombocitopénica','trastornos de la coagulación en el niño']},
    {t:'Enfermedades reumatológicas pediátricas', claves:['artritis idiopática juvenil','fiebre reumática','enfermedad de Kawasaki']},
    {t:'Trastornos neurológicos pediátricos no convulsivos', claves:['cefalea en el niño','parálisis cerebral infantil','hipotonía en el lactante']},
    {t:'Patología nefrourológica pediátrica', claves:['reflujo vesicoureteral','síndrome nefrótico en el niño','criptorquidia']},
    {t:'Patología gastrointestinal pediátrica crónica', claves:['enfermedad celíaca en el niño','estreñimiento crónico infantil','reflujo gastroesofágico del lactante']},
    {t:'Trastornos del desarrollo y la conducta', claves:['trastorno del espectro autista','trastorno por déficit de atención','retraso global del desarrollo']},
    {t:'Medicina del adolescente', claves:['pubertad y desarrollo puberal','confidencialidad en la consulta del adolescente','conductas de riesgo en la adolescencia']},
    {t:'Oncología pediátrica: generalidades', claves:['leucemia aguda infantil','tumor de Wilms','signos de alarma de cáncer en el niño']},
    {t:'Patología ortopédica pediátrica', claves:['displasia del desarrollo de la cadera','pie equinovaro','escoliosis idiopática del adolescente']},
    {t:'Urgencias pediátricas avanzadas', claves:['shock en el niño','reanimación cardiopulmonar pediátrica avanzada','estado epiléptico en el niño']},
    {t:'Genética clínica pediátrica', claves:['síndrome de Down','tamizaje genético neonatal','asesoramiento genético en pediatría']}
  ]
},

{
  bloque:'Ginecología II', em:'🌸', color:'lila', programa:'unirm', cuatri:12,
  nota:'Tres créditos. Continúa Ginecología I hacia la oncología ginecológica, la uroginecología y otros aspectos avanzados de la salud de la mujer fuera del embarazo.',
  temas:[
    {t:'Cáncer de ovario', claves:['masa ovárica sospechosa','marcador tumoral CA-125','estadificación del cáncer de ovario']},
    {t:'Cáncer de endometrio', claves:['sangrado posmenopáusico y cáncer','hiperplasia endometrial','biopsia de endometrio']},
    {t:'Cáncer de cérvix invasivo', claves:['cáncer cervicouterino invasivo','estadificación del cáncer de cérvix','tratamiento del cáncer cervical']},
    {t:'Infertilidad: estudio básico de la pareja', claves:['estudio de infertilidad','factor tuboperitoneal','reserva ovárica']},
    {t:'Incontinencia urinaria femenina', claves:['incontinencia urinaria de esfuerzo','incontinencia de urgencia','evaluación urodinámica básica']},
    {t:'Prolapso de órganos pélvicos', claves:['prolapso uterino','cistocele y rectocele','manejo del prolapso pélvico']},
    {t:'Quistes ováricos funcionales', claves:['quiste folicular','quiste del cuerpo lúteo','manejo expectante del quiste ovárico']},
    {t:'Patología vulvar', claves:['liquen escleroso vulvar','bartolinitis','lesiones vulvares premalignas']},
    {t:'Violencia de género en la consulta ginecológica', claves:['violencia de género','tamizaje de violencia intrafamiliar','abordaje de la sobreviviente de violencia']},
    {t:'Cirugía ginecológica: indicaciones de histerectomía', claves:['indicaciones de histerectomía','histerectomía abdominal y vaginal','complicaciones de la histerectomía']},
    {t:'Reproducción asistida: conceptos básicos', claves:['fecundación in vitro','inseminación intrauterina','inducción de la ovulación']},
    {t:'Salud sexual femenina', claves:['disfunción sexual femenina','dispareunia','consejería en salud sexual']}
  ]
},

{
  bloque:'Urología', em:'🚹', color:'suero', programa:'unirm', cuatri:12,
  nota:'Tres créditos. El aparato urinario y genital masculino, con especial atención a las condiciones que se presentan como urgencia y a las neoplasias urológicas más frecuentes.',
  temas:[
    {t:'Anatomía y fisiología del aparato urinario masculino', claves:['anatomía del tracto urinario','fisiología de la micción','anatomía prostática']},
    {t:'Infección del tracto urinario en el adulto', claves:['cistitis del adulto','pielonefritis aguda','infección urinaria complicada']},
    {t:'Litiasis urinaria', claves:['cólico renoureteral','cálculo urinario','manejo de la litiasis según tamaño']},
    {t:'Hiperplasia prostática benigna', claves:['hiperplasia prostática benigna','síntomas del tracto urinario inferior','antígeno prostático específico']},
    {t:'Cáncer de próstata', claves:['tamizaje de cáncer de próstata','biopsia de próstata','estadificación del cáncer prostático']},
    {t:'Cáncer renal y vesical', claves:['hematuria y cáncer urológico','masa renal sospechosa','cáncer de vejiga']},
    {t:'Disfunción eréctil', claves:['disfunción eréctil','causas vasculares de disfunción eréctil','evaluación de la disfunción eréctil']},
    {t:'Incontinencia urinaria masculina', claves:['incontinencia urinaria posprostatectomía','vejiga hiperactiva masculina','evaluación de la incontinencia masculina']},
    {t:'Trauma genitourinario', claves:['trauma renal','trauma vesical','trauma uretral']},
    {t:'Escroto agudo', claves:['torsión testicular','epididimitis aguda','diagnóstico diferencial del escroto agudo']},
    {t:'Retención urinaria aguda', claves:['retención urinaria aguda','sondaje vesical de urgencia','causas de retención urinaria']},
    {t:'Infertilidad masculina', claves:['estudio del factor masculino de infertilidad','varicocele','espermatograma']}
  ]
},

{
  bloque:'Dermatología', em:'🧴', color:'verde', programa:'unirm', cuatri:12,
  nota:'Dos créditos. Reconocer las lesiones elementales de la piel como lenguaje básico, y las condiciones dermatológicas más frecuentes en la consulta general.',
  temas:[
    {t:'Lesiones elementales de la piel', claves:['mácula y pápula','vesícula y ampolla','lesiones elementales dermatológicas']},
    {t:'Dermatitis e infecciones cutáneas comunes', claves:['dermatitis atópica','dermatitis de contacto','impétigo']},
    {t:'Micosis cutáneas', claves:['tiña corporal','pitiriasis versicolor','onicomicosis']},
    {t:'Cáncer de piel', claves:['carcinoma basocelular','carcinoma espinocelular','melanoma cutáneo']},
    {t:'Enfermedades ampollosas y autoinmunes de la piel', claves:['pénfigo','psoriasis','vitíligo']},
    {t:'Acné y trastornos de anexos cutáneos', claves:['acné vulgar','alopecia','hidradenitis supurativa']},
    {t:'Urgencias dermatológicas', claves:['síndrome de Stevens-Johnson','necrólisis epidérmica tóxica','celulitis y fascitis necrotizante']}
  ]
},

{
  bloque:'Medicina Forense', em:'⚖️', color:'carbon', programa:'unirm', cuatri:12,
  nota:'Dos créditos. La intersección entre la práctica médica y el sistema legal: documentar, certificar y peritar con el rigor que ambos sistemas exigen.',
  temas:[
    {t:'Principios de medicina legal', claves:['medicina legal','peritaje médico','responsabilidad médica']},
    {t:'Certificación de defunción', claves:['certificado de defunción','causa de muerte','muerte natural y violenta']},
    {t:'Lesiones y su clasificación médico-legal', claves:['clasificación de lesiones','lesión leve y grave','días de incapacidad médico-legal']},
    {t:'Agresión sexual: abordaje médico-legal', claves:['examen médico-legal de agresión sexual','cadena de custodia en agresión sexual','kit de evidencia forense']},
    {t:'Cadena de custodia y prueba pericial', claves:['cadena de custodia','prueba pericial','preservación de evidencia médica']},
    {t:'Autopsia médico-legal', claves:['autopsia forense','autopsia clínica versus forense','hallazgos de autopsia médico-legal']},
    {t:'Ética y responsabilidad médica legal', claves:['mala praxis médica','consentimiento informado y responsabilidad legal','secreto profesional y ley']}
  ]
},

{
  bloque:'Neonatología', em:'👶', color:'yodo', programa:'unirm', cuatri:12,
  nota:'Dos créditos. Más allá de la atención al recién nacido normal ya vista en otros bloques: el recién nacido de alto riesgo y sus complicaciones más frecuentes.',
  temas:[
    {t:'Prematurez y sus complicaciones', claves:['recién nacido prematuro','complicaciones de la prematurez','edad gestacional y prematurez']},
    {t:'Síndrome de dificultad respiratoria del recién nacido', claves:['enfermedad de membrana hialina','surfactante pulmonar neonatal','dificultad respiratoria neonatal']},
    {t:'Sepsis neonatal', claves:['sepsis neonatal temprana','sepsis neonatal tardía','factores de riesgo de sepsis neonatal']},
    {t:'Enterocolitis necrotizante', claves:['enterocolitis necrotizante','neumatosis intestinal','manejo de la enterocolitis del prematuro']},
    {t:'Asfixia perinatal', claves:['asfixia perinatal','encefalopatía hipóxico-isquémica neonatal','puntaje de Apgar bajo persistente']},
    {t:'Malformaciones congénitas frecuentes en el recién nacido', claves:['malformación congénita mayor','defecto del tubo neural en el recién nacido','atresia esofágica']},
    {t:'Cuidados del recién nacido de alto riesgo', claves:['unidad de cuidados intensivos neonatales','recién nacido de bajo peso al nacer','seguimiento del neonato de alto riesgo']}
  ]
},

{
  bloque:'Pre-Internado de Pediatría', em:'🏥', color:'sangria', programa:'unirm', cuatri:12,
  nota:'Un crédito. La orientación práctica antes de rotar de lleno por el servicio de pediatría, con el mismo espíritu ya visto en los pre internados de cuatrimestres anteriores.',
  temas:[
    {t:'Rol del estudiante en el servicio de pediatría', claves:['rol del estudiante en pediatría','participación supervisada en sala pediátrica']},
    {t:'Historia clínica pediátrica completa', claves:['historia clínica pediátrica','antecedentes perinatales','antecedentes del desarrollo en la historia pediátrica']},
    {t:'Signos de alarma en el niño hospitalizado', claves:['signos de alarma en pediatría hospitalizada','deterioro clínico del niño hospitalizado','cuándo alertar al equipo tratante en pediatría']},
    {t:'Documentación en pediatría', claves:['nota de evolución pediátrica','registro de crecimiento en el expediente','documentación de la alimentación en pediatría']}
  ]
}

]);
