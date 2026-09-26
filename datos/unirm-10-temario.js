/* ============================================================
   UNIRMIA — TEMARIO DEL CUATRIMESTRE 10
   Inicio del ciclo clinico real del pensum de Medicina de
   UCATECI. 20 creditos en ocho asignaturas (fuente de nombres y
   creditos: pensumvirtual.tech, ver nota en asignaturas-unirm.js).

   A diferencia de 7no/8vo/9no, aqui no existe un temario oficial
   de topicos publicado -solo el nombre de cada materia-, asi que
   los temas de cada bloque son de elaboracion propia, con el
   mismo criterio clinico ya usado en el resto de UNIRMIA: lo que
   realmente se examina y se necesita saber en esa rotacion.

   El orden de los bloques sigue el peso en creditos.
   ============================================================ */
window.TEMARIO = (window.TEMARIO || []).concat([

{
  bloque:'Anatomía Patológica II', em:'🔬', color:'carbon', programa:'unirm', cuatri:10,
  nota:'Cuatro créditos. Continúa la Anatomía Patológica I de 9no, pero organizada por sistema en vez de por proceso general: aquí cada órgano tiene su propia patología característica.',
  temas:[
    {t:'Patología cardiovascular', claves:['aterosclerosis','infarto de miocardio','miocardiopatía','endocarditis']},
    {t:'Patología respiratoria', claves:['neumonía','enfisema','carcinoma pulmonar','fibrosis pulmonar']},
    {t:'Patología del tracto gastrointestinal', claves:['gastritis','enfermedad inflamatoria intestinal','pólipo colónico','carcinoma colorrectal']},
    {t:'Patología hepática y de vías biliares', claves:['cirrosis hepática','hepatitis','colelitiasis','carcinoma hepatocelular']},
    {t:'Patología renal y de vías urinarias', claves:['glomerulonefritis','pielonefritis','carcinoma renal','nefropatía diabética']},
    {t:'Patología del sistema endocrino', claves:['bocio','adenoma tiroideo','carcinoma tiroideo','tumor hipofisario']},
    {t:'Patología de mama', claves:['fibroadenoma','carcinoma de mama','mastopatía fibroquística','biopsia de mama']},
    {t:'Patología ginecológica', claves:['leiomioma uterino','carcinoma de cérvix','endometriosis','quiste ovárico']},
    {t:'Patología testicular y prostática', claves:['hiperplasia prostática benigna','carcinoma de próstata','tumor testicular','criptorquidia']},
    {t:'Patología del sistema nervioso central', claves:['tumor cerebral','enfermedad de Alzheimer','ictus isquémico','hemorragia cerebral']},
    {t:'Patología osteoarticular', claves:['osteoartritis','osteoporosis','osteosarcoma','artritis reumatoide']},
    {t:'Patología hematológica y ganglionar', claves:['linfoma','leucemia','anemia','adenopatía']},
    {t:'Patología cutánea', claves:['melanoma','carcinoma basocelular','psoriasis','dermatitis']}
  ]
},

{
  bloque:'Farmacoterapéutica', em:'💊', color:'yodo', programa:'unirm', cuatri:10,
  nota:'Tres créditos. Retoma la Farmacología de 9no, pero organizada por escenario clínico: no "qué hace el fármaco", sino "qué fármaco elijo para este paciente concreto".',
  temas:[
    {t:'Principios de farmacoterapia racional', claves:['farmacoterapia racional','selección del fármaco','relación beneficio-riesgo']},
    {t:'Terapéutica del dolor y analgesia escalonada', claves:['escalera analgésica','dolor agudo','dolor crónico','opioides']},
    {t:'Terapéutica antimicrobiana dirigida', claves:['antibiograma','terapia empírica','terapia dirigida','desescalamiento antibiótico']},
    {t:'Terapéutica cardiovascular', claves:['hipertensión arterial','insuficiencia cardíaca','antihipertensivos','anticoagulación']},
    {t:'Terapéutica de la diabetes mellitus', claves:['hipoglucemiantes orales','insulina','metas glucémicas','diabetes tipo 2']},
    {t:'Terapéutica respiratoria', claves:['asma','EPOC','broncodilatadores','corticoides inhalados']},
    {t:'Terapéutica gastrointestinal', claves:['enfermedad ácido-péptica','inhibidores de bomba de protones','antieméticos']},
    {t:'Terapéutica psiquiátrica básica', claves:['antidepresivos','ansiolíticos','antipsicóticos','adherencia al tratamiento psiquiátrico']},
    {t:'Farmacovigilancia y reacciones adversas', claves:['farmacovigilancia','reacción adversa a medicamento','notificación espontánea']},
    {t:'Interacciones medicamentosas clínicamente relevantes', claves:['interacción farmacológica grave','polifarmacia','revisión de medicación']},
    {t:'Ajuste de dosis en insuficiencia renal y hepática', claves:['ajuste de dosis','depuración de creatinina','insuficiencia hepática']},
    {t:'Farmacoterapia en el embarazo y la lactancia', claves:['categoría de riesgo en el embarazo','fármacos seguros en lactancia','teratogenicidad']}
  ]
},

{
  bloque:'Medicina Familiar', em:'🏠', color:'sangria', programa:'unirm', cuatri:10,
  nota:'Tres créditos. Cambia la pregunta de "qué tiene el paciente" a "quién es este paciente, en qué familia y en qué contexto vive" — el eje de toda la especialidad.',
  temas:[
    {t:'Principios de la medicina familiar', claves:['atención centrada en la persona','continuidad del cuidado','primer contacto']},
    {t:'La familia como unidad de atención', claves:['familia como paciente','dinámica familiar','apoyo familiar']},
    {t:'Ciclo vital familiar', claves:['ciclo vital familiar','etapas de la familia','crisis normativas']},
    {t:'Genograma y evaluación familiar', claves:['genograma','ecomapa','evaluación familiar estructurada']},
    {t:'Atención longitudinal y continuidad del cuidado', claves:['atención longitudinal','historia clínica longitudinal','seguimiento a largo plazo']},
    {t:'Manejo de la multimorbilidad', claves:['multimorbilidad','paciente polipatológico','carga de tratamiento']},
    {t:'Visita domiciliaria', claves:['visita domiciliaria','atención en el hogar','paciente postrado']},
    {t:'Promoción de la salud en el consultorio familiar', claves:['consejería breve','cambio de comportamiento en consulta']},
    {t:'Medicina familiar basada en evidencia', claves:['medicina basada en evidencia en atención primaria','guías de práctica clínica']},
    {t:'Coordinación con especialistas y referencia', claves:['referencia y contrarreferencia','coordinación del cuidado']},
    {t:'Cuidados paliativos en atención primaria', claves:['cuidados paliativos','control de síntomas','paciente terminal en el hogar']},
    {t:'El médico de familia y la comunidad', claves:['medicina familiar y comunidad','abogacía por el paciente']}
  ]
},

{
  bloque:'Salud Mental y Sociedad', em:'🧠', color:'verde', programa:'unirm', cuatri:10,
  nota:'Tres créditos. No es psiquiatría clínica de diagnóstico fino: es entender los trastornos mentales más frecuentes en su contexto social, con el mismo enfoque comunitario del resto de UNIRMIA.',
  temas:[
    {t:'Determinantes sociales de la salud mental', claves:['determinantes sociales de la salud mental','pobreza y salud mental','desigualdad y salud mental']},
    {t:'Trastornos del estado de ánimo', claves:['depresión mayor','trastorno bipolar','episodio depresivo']},
    {t:'Trastornos de ansiedad', claves:['trastorno de ansiedad generalizada','trastorno de pánico','fobia']},
    {t:'Trastornos psicóticos', claves:['esquizofrenia','síntomas psicóticos positivos y negativos','primer episodio psicótico']},
    {t:'Trastornos relacionados con sustancias', claves:['trastorno por uso de sustancias','dependencia','abstinencia']},
    {t:'Estigma y salud mental', claves:['estigma en salud mental','discriminación por enfermedad mental']},
    {t:'Salud mental comunitaria', claves:['modelo comunitario de salud mental','desinstitucionalización']},
    {t:'Evaluación del riesgo suicida', claves:['ideación suicida','evaluación del riesgo suicida','plan de seguridad']},
    {t:'Violencia y salud mental', claves:['violencia intrafamiliar','trauma psicológico','violencia de género']},
    {t:'Salud mental infantil y adolescente', claves:['trastorno del desarrollo','salud mental en la adolescencia']},
    {t:'Psicofarmacología básica aplicada', claves:['psicofármaco de primera línea','efectos adversos psiquiátricos']},
    {t:'Modelos de atención en salud mental', claves:['modelo biopsicosocial','integración de salud mental en atención primaria']}
  ]
},

{
  bloque:'Semiología Quirúrgica', em:'🔪', color:'sangria', programa:'unirm', cuatri:10,
  nota:'Tres créditos. Retoma la Semiología Clínica de 9no aplicada al paciente quirúrgico: los mismos principios de examen físico, pero buscando signos que cambian la decisión de operar.',
  temas:[
    {t:'Historia clínica quirúrgica', claves:['historia clínica quirúrgica','antecedentes quirúrgicos','riesgo anestésico']},
    {t:'Semiología del abdomen agudo', claves:['abdomen agudo','dolor abdominal quirúrgico','signo de rebote']},
    {t:'Semiología de masas y tumores', claves:['masa palpable','características semiológicas de un tumor']},
    {t:'Semiología de heridas y cicatrización', claves:['cicatrización por primera y segunda intención','herida quirúrgica']},
    {t:'Evaluación preoperatoria', claves:['evaluación preoperatoria','riesgo quirúrgico','clasificación ASA']},
    {t:'Semiología de la ictericia quirúrgica', claves:['ictericia obstructiva','coledocolitiasis','signo de Courvoisier']},
    {t:'Semiología vascular periférica', claves:['pulsos periféricos','insuficiencia venosa','isquemia de miembro']},
    {t:'Semiología de la hernia', claves:['hernia inguinal','hernia reducible e irreducible','hernia estrangulada']},
    {t:'Signos de irritación peritoneal', claves:['irritación peritoneal','defensa abdominal','signo de Blumberg']},
    {t:'Semiología del trauma', claves:['evaluación del trauma','mecanismo de lesión','trauma penetrante']},
    {t:'Drenajes y sondas quirúrgicas', claves:['drenaje quirúrgico','sonda nasogástrica','sonda vesical']},
    {t:'Complicaciones postoperatorias tempranas', claves:['dehiscencia de herida','infección de sitio quirúrgico','íleo postoperatorio']}
  ]
},

{
  bloque:'Gerencia en Salud', em:'📋', color:'yodo', programa:'unirm', cuatri:10,
  nota:'Dos créditos. La cara administrativa de la medicina: entender cómo se organiza y se gestiona una institución de salud, no solo cómo se trata a un paciente dentro de ella.',
  temas:[
    {t:'Principios de administración en salud', claves:['administración en salud','funciones gerenciales','organización hospitalaria']},
    {t:'Planificación estratégica en instituciones de salud', claves:['planificación estratégica','misión y visión institucional']},
    {t:'Gestión de calidad y seguridad del paciente', claves:['gestión de calidad','seguridad del paciente','evento adverso prevenible']},
    {t:'Gestión de recursos humanos en salud', claves:['recursos humanos en salud','clima laboral','burnout del personal de salud']},
    {t:'Indicadores de gestión hospitalaria', claves:['indicador de gestión hospitalaria','ocupación de camas','estancia media']},
    {t:'Gestión financiera básica en salud', claves:['presupuesto en salud','costo por proceso hospitalario']},
    {t:'Liderazgo y trabajo en equipo directivo', claves:['liderazgo en salud','toma de decisiones gerenciales']}
  ]
},

{
  bloque:'Salud y Comunidad II', em:'🏘️', color:'verde', programa:'unirm', cuatri:10,
  nota:'Un crédito. Continúa Salud y Comunidad I de 9no, llevando el diagnóstico comunitario hacia el diseño y la evaluación real de programas, no solo su descripción.',
  temas:[
    {t:'Programas de salud comunitaria avanzados', claves:['diseño de programa comunitario','intervención comunitaria sostenida']},
    {t:'Participación comunitaria y empoderamiento', claves:['participación comunitaria','empoderamiento en salud']},
    {t:'Evaluación de programas de salud comunitaria', claves:['evaluación de impacto comunitario','indicador de proceso y de resultado']},
    {t:'Salud comunitaria en poblaciones vulnerables', claves:['población vulnerable','equidad en salud comunitaria']}
  ]
},

{
  bloque:'Servicio Hospitalario Pre Clínico', em:'🏥', color:'carbon', programa:'unirm', cuatri:10,
  nota:'Un crédito. La orientación práctica antes de entrar de lleno a las rotaciones clínicas: cómo funciona un hospital por dentro y qué se espera del estudiante ahí.',
  temas:[
    {t:'Estructura y funcionamiento del hospital', claves:['estructura hospitalaria','servicios hospitalarios','flujo del paciente hospitalizado']},
    {t:'Rol del estudiante en el servicio hospitalario', claves:['rol del estudiante de medicina','presentación de caso clínico en ronda']},
    {t:'Bioseguridad y prevención de infecciones intrahospitalarias', claves:['bioseguridad hospitalaria','infección asociada a la atención de salud','precauciones estándar']},
    {t:'Documentación clínica hospitalaria', claves:['nota de evolución','expediente clínico hospitalario','orden médica']}
  ]
}

]);
