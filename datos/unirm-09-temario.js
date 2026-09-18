/* ============================================================
   UNIRMIA — TEMARIO DEL CUATRIMESTRE 9
   Puente a clinica del pensum MED-R1-2014. 26 creditos en nueve
   asignaturas.

   Diferencia con el 7 y el 8: aqui ya se puede preguntar con
   paciente delante. Semiologia, fisiopatologia, farmacologia y
   anatomia patologica piden razonamiento clinico de verdad, no
   solo estructura o mecanismo. Las cinco restantes (medicina
   preventiva, soporte vital, relacion medico-paciente, salud y
   comunidad) son mas conceptuales: se examinan por protocolo y
   por criterio, no por caso.

   El orden de los bloques sigue el peso en creditos.

   AMPLIADO 18/09/2026: se agregaron temas reales del pensum que
   faltaban. No se toco ningun tema existente, solo se sumaron al
   final de cada bloque.
   ============================================================ */
window.TEMARIO = (window.TEMARIO || []).concat([

{
  programa:'unirm', cuatri:9,
  bloque:'Semiología Clínica', em:'🩺', color:'sangria',
  nota:'Seis créditos de veintiséis: la asignatura que más pesa este cuatrimestre. Es la primera vez que el examen se parece a lo que vas a hacer toda la carrera: interrogar y explorar.',
  temas:[
    {t:'Historia clínica: anamnesis', claves:['anamnesis','motivo de consulta','enfermedad actual','antecedentes','interrogatorio dirigido']},
    {t:'Examen físico general', claves:['inspección','palpación','percusión','auscultación','signos vitales']},
    {t:'Semiología del dolor', claves:['dolor somático','dolor visceral','irradiación','escala de dolor','dolor referido']},
    {t:'Semiología respiratoria', claves:['disnea','tos','estertores','sibilancias','matidez','murmullo vesicular']},
    {t:'Semiología cardiovascular', claves:['soplo cardíaco','pulso','ingurgitación yugular','edema','ruidos cardíacos']},
    {t:'Semiología abdominal', claves:['ruidos hidroaéreos','defensa abdominal','signo de rebote','hepatomegalia','ascitis']},
    {t:'Semiología neurológica básica', claves:['pares craneales','reflejos osteotendinosos','fuerza muscular','signo de Babinski','marcha']},
    {t:'Semiología osteoarticular', claves:['rango de movimiento','derrame articular','signo de Tinel','deformidad','crepitación']},
    {t:'Piel y faneras', claves:['lesión primaria','lesión secundaria','ictericia','cianosis','palidez']},
    {t:'Semiología ganglionar y adenopatías', claves:['adenopatía','ganglio duro','ganglio doloroso','cadena ganglionar']},
    {t:'Registro e historia clínica orientada por problemas', claves:['SOAP','historia orientada por problemas','evolución clínica','nota de ingreso']},
    {t:'Semiología urinaria', claves:['disuria','hematuria','poliuria','oliguria','puñopercusión renal']},
    {t:'Semiología endocrina', claves:['bocio','exoftalmos','mixedema','acantosis nigricans','hábito cushingoide']},
    {t:'Interpretación de signos vitales', claves:['taquicardia','bradicardia','taquipnea','hipertensión','fiebre']},
    {t:'Historia clínica en situaciones especiales', claves:['paciente inconsciente','entrevista en urgencias','heteroanamnesis']}
  ]
},

{
  programa:'unirm', cuatri:9,
  bloque:'Anatomía Patológica I', em:'🔬', color:'carbon',
  nota:'Cuatro créditos. Se examina reconociendo el mecanismo detrás de la lesión, no solo el nombre: por qué se necrosa, por qué se inflama, por qué prolifera.',
  temas:[
    {t:'Lesión celular reversible e irreversible', claves:['lesión celular','hipoxia','degeneración hidrópica','punto de no retorno']},
    {t:'Necrosis: tipos', claves:['necrosis coagulativa','necrosis licuefactiva','necrosis caseosa','necrosis grasa','necrosis fibrinoide']},
    {t:'Apoptosis', claves:['apoptosis','cuerpo apoptótico','caspasa','muerte celular programada']},
    {t:'Inflamación aguda', claves:['inflamación aguda','vasodilatación','quimiotaxis','neutrófilo','mediador inflamatorio']},
    {t:'Inflamación crónica y granulomas', claves:['inflamación crónica','granuloma','célula gigante','macrófago','fibrosis']},
    {t:'Alteraciones hemodinámicas: trombosis y embolia', claves:['trombo','tríada de Virchow','embolia','infarto','trombosis venosa']},
    {t:'Edema, congestión y shock', claves:['edema','congestión pasiva','shock hipovolémico','shock séptico']},
    {t:'Adaptaciones celulares', claves:['hipertrofia','hiperplasia','atrofia','metaplasia','displasia']},
    {t:'Neoplasias: conceptos generales', claves:['neoplasia benigna','neoplasia maligna','anaplasia','invasión','metástasis']},
    {t:'Carcinogénesis', claves:['oncogén','gen supresor tumoral','carcinógeno','mutación somática']},
    {t:'Reparación tisular: regeneración y fibrosis', claves:['regeneración tisular','cicatrización','tejido de granulación','fibrosis reparativa']},
    {t:'Amiloidosis', claves:['amiloide','depósito extracelular','rojo Congo','amiloidosis sistémica']},
    {t:'Patología ambiental', claves:['lesión por agentes físicos','lesión por agentes químicos','quemadura','radiación']}
  ]
},

{
  programa:'unirm', cuatri:9,
  bloque:'Fisiopatología', em:'⚙️', color:'yodo',
  nota:'Tres créditos, pero es la bisagra del cuatrimestre: conecta lo que aprendiste en fisiología con lo que vas a diagnosticar en clínica. Si entiendes el mecanismo roto, la pregunta se contesta sola.',
  temas:[
    {t:'Fisiopatología del equilibrio ácido-base', claves:['acidosis metabólica','alcalosis respiratoria','anion gap','compensación']},
    {t:'Fisiopatología de líquidos y electrolitos', claves:['hiponatremia','hiperkalemia','deshidratación','tercer espacio']},
    {t:'Fisiopatología de la fiebre y la respuesta inflamatoria sistémica', claves:['pirógeno','fiebre','SIRS','citocina']},
    {t:'Fisiopatología de la insuficiencia cardíaca', claves:['insuficiencia cardíaca','precarga','fracción de eyección','remodelado cardíaco']},
    {t:'Fisiopatología de la hipertensión arterial', claves:['hipertensión arterial','sistema renina angiotensina','resistencia vascular']},
    {t:'Fisiopatología respiratoria: hipoxemia e hipercapnia', claves:['hipoxemia','hipercapnia','shunt','efecto espacio muerto']},
    {t:'Fisiopatología renal: síndrome nefrótico y nefrítico', claves:['síndrome nefrótico','síndrome nefrítico','proteinuria','hematuria']},
    {t:'Fisiopatología de la insuficiencia hepática', claves:['insuficiencia hepática','hipertensión portal','encefalopatía hepática','ascitis']},
    {t:'Fisiopatología endocrina básica', claves:['retroalimentación hormonal','hipotálamo hipófisis','resistencia a la insulina']},
    {t:'Fisiopatología del dolor crónico', claves:['dolor crónico','sensibilización central','dolor neuropático','hiperalgesia']},
    {t:'Fisiopatología de la anemia', claves:['anemia','hipoxia tisular','eritropoyetina','mecanismo compensador cardiovascular']},
    {t:'Fisiopatología de la diabetes mellitus', claves:['resistencia a la insulina','hiperglucemia crónica','cetoacidosis diabética','glucotoxicidad']},
    {t:'Síndrome metabólico', claves:['síndrome metabólico','obesidad central','dislipidemia','resistencia insulínica']}
  ]
},

{
  programa:'unirm', cuatri:9,
  bloque:'Neuroanatomía', em:'🧠', color:'rosa',
  nota:'Tres créditos. Se estudia por vías y por niveles: si sabes dónde cruza cada vía, la localización de la lesión se deduce del déficit.',
  temas:[
    {t:'Organización general del sistema nervioso', claves:['sustancia gris','sustancia blanca','sistema nervioso central','sistema nervioso periférico']},
    {t:'Médula espinal: organización y vías largas', claves:['haz corticoespinal','haz espinotalámico','cordones posteriores','decusación']},
    {t:'Tronco encefálico y pares craneales', claves:['bulbo raquídeo','protuberancia','mesencéfalo','núcleo de par craneal']},
    {t:'Cerebelo', claves:['cerebelo','ataxia','dismetría','coordinación motora']},
    {t:'Ganglios basales y control motor', claves:['ganglios basales','sustancia negra','vía dopaminérgica','movimiento involuntario']},
    {t:'Tálamo e hipotálamo', claves:['tálamo','hipotálamo','relevo sensitivo','homeostasis']},
    {t:'Corteza cerebral: áreas funcionales', claves:['área de Broca','área de Wernicke','corteza motora','corteza somatosensorial']},
    {t:'Irrigación cerebral', claves:['arteria cerebral media','polígono de Willis','territorio vascular','accidente cerebrovascular']},
    {t:'Vías sensitivas y motoras', claves:['vía piramidal','vía lemniscal','neurona motora superior','neurona motora inferior']},
    {t:'Sistema límbico', claves:['hipocampo','amígdala cerebral','circuito de Papez','memoria y emoción']},
    {t:'Líquido cefalorraquídeo y sistema ventricular', claves:['ventrículo lateral','acueducto de Silvio','hidrocefalia','plexo coroideo']},
    {t:'Meninges y espacios meníngeos', claves:['duramadre','aracnoides','piamadre','espacio subaracnoideo','hematoma epidural']}
  ]
},

{
  programa:'unirm', cuatri:9,
  bloque:'Farmacología', em:'💊', color:'verde',
  nota:'Tres créditos. Las preguntas premian entender mecanismo de acción y efecto adverso relacionado, no memorizar listas de nombres comerciales.',
  temas:[
    {t:'Farmacocinética: absorción y distribución', claves:['biodisponibilidad','unión a proteínas plasmáticas','volumen de distribución','primer paso hepático']},
    {t:'Farmacocinética: metabolismo y excreción', claves:['citocromo P450','vida media','eliminación renal','metabolito activo']},
    {t:'Farmacodinamia: receptores y mecanismos de acción', claves:['agonista','antagonista','receptor','curva dosis-respuesta']},
    {t:'Interacciones farmacológicas', claves:['interacción farmacológica','inductor enzimático','inhibidor enzimático','sinergismo']},
    {t:'Antibióticos: familias principales', claves:['betalactámico','macrólido','aminoglucósido','quinolona']},
    {t:'Antiinflamatorios y analgésicos', claves:['AINE','inhibidor de la COX','opioide','paracetamol']},
    {t:'Fármacos cardiovasculares', claves:['betabloqueante','IECA','diurético','bloqueador de canales de calcio']},
    {t:'Fármacos del sistema nervioso autónomo', claves:['agonista adrenérgico','antagonista colinérgico','simpaticomimético']},
    {t:'Reacciones adversas y toxicidad', claves:['reacción adversa','efecto idiosincrásico','sobredosis','antídoto']},
    {t:'Farmacología del sistema nervioso central', claves:['ansiolítico','benzodiacepina','antidepresivo','antipsicótico']},
    {t:'Farmacología endocrina', claves:['corticoide','hipoglucemiante oral','insulina exógena','hormona tiroidea']},
    {t:'Uso racional de antimicrobianos', claves:['selección de antibiótico','resistencia antimicrobiana','profilaxis antibiótica','espectro']}
  ]
},

{
  programa:'unirm', cuatri:9,
  bloque:'Medicina Preventiva', em:'🛡️', color:'yodo',
  nota:'Dos créditos. Se examina por niveles de prevención y por programa: qué se hace antes de que exista la enfermedad, y qué se hace para que no avance.',
  temas:[
    {t:'Niveles de prevención', claves:['prevención primaria','prevención secundaria','prevención terciaria','promoción de la salud']},
    {t:'Inmunizaciones y esquema de vacunación', claves:['esquema de vacunación','inmunidad de rebaño','vacuna viva atenuada','cold chain']},
    {t:'Tamizaje y detección temprana', claves:['tamizaje','sensibilidad','especificidad','valor predictivo']},
    {t:'Prevención de enfermedades crónicas no transmisibles', claves:['factor de riesgo','enfermedad crónica no transmisible','estilo de vida']},
    {t:'Programas nacionales de salud preventiva', claves:['programa de salud','atención primaria','control prenatal','tamizaje neonatal']},
    {t:'Educación para la salud', claves:['educación para la salud','cambio de comportamiento','promoción comunitaria']},
    {t:'Prevención cuaternaria', claves:['prevención cuaternaria','sobrediagnóstico','sobretratamiento','daño iatrogénico evitable']}
  ]
},

{
  programa:'unirm', cuatri:9,
  bloque:'Soporte Vital Básico y Avanzado', em:'🚑', color:'sangria',
  nota:'Dos créditos, pero de los que se examinan por secuencia exacta: el orden de los pasos importa tanto como el paso en sí.',
  temas:[
    {t:'Cadena de supervivencia y RCP básica', claves:['cadena de supervivencia','compresiones torácicas','RCP','desfibrilación']},
    {t:'Vía aérea y ventilación', claves:['vía aérea','maniobra frente-mentón','cánula orofaríngea','ventilación con bolsa mascarilla']},
    {t:'Ritmos de paro y desfibrilación', claves:['fibrilación ventricular','taquicardia ventricular sin pulso','asistolia','actividad eléctrica sin pulso']},
    {t:'Soporte vital avanzado: fármacos y algoritmo', claves:['epinefrina','amiodarona','algoritmo de paro','vía intravenosa']},
    {t:'Obstrucción de vía aérea por cuerpo extraño', claves:['maniobra de Heimlich','atragantamiento','obstrucción de vía aérea']},
    {t:'Reanimación cardiopulmonar pediátrica', claves:['RCP pediátrica','relación compresión ventilación en niños','paro pediátrico']},
    {t:'Evaluación inicial del trauma (ABCDE)', claves:['ABCDE','evaluación primaria del trauma','control de hemorragia externa']}
  ]
},

{
  programa:'unirm', cuatri:9,
  bloque:'Relación Médico-Paciente', em:'🤝', color:'rosa',
  nota:'Dos créditos. Se examina con casos de comunicación y ética aplicada, no con teoría abstracta.',
  temas:[
    {t:'Consentimiento informado', claves:['consentimiento informado','autonomía del paciente','capacidad para decidir']},
    {t:'Comunicación de malas noticias', claves:['malas noticias','protocolo SPIKES','empatía clínica']},
    {t:'Confidencialidad y secreto profesional', claves:['confidencialidad','secreto profesional','ruptura justificada']},
    {t:'Principios de bioética médica', claves:['autonomía','beneficencia','no maleficencia','justicia']},
    {t:'Entrevista clínica centrada en el paciente', claves:['entrevista clínica','escucha activa','pregunta abierta']},
    {t:'Manejo del paciente difícil', claves:['paciente conflictivo','desescalada verbal','entrevista motivacional']},
    {t:'Trabajo en equipo de salud', claves:['equipo multidisciplinario','comunicación interprofesional','seguridad del paciente']}
  ]
},

{
  programa:'unirm', cuatri:9,
  bloque:'Salud y Comunidad I', em:'🏘️', color:'verde',
  nota:'Un crédito, el más bajo del cuatrimestre, pero no el más fácil de descuidar: entra en el examen igual que cualquier otra asignatura.',
  temas:[
    {t:'Determinantes sociales de la salud', claves:['determinante social','inequidad en salud','acceso a servicios de salud']},
    {t:'Salud comunitaria y atención primaria', claves:['atención primaria de salud','promotor comunitario','diagnóstico comunitario']},
    {t:'Epidemiología comunitaria aplicada', claves:['perfil epidemiológico local','vigilancia comunitaria','indicador de salud']},
    {t:'Sistema de salud dominicano', claves:['niveles de atención','sistema nacional de salud','seguro familiar de salud']}
  ]
}

]);
