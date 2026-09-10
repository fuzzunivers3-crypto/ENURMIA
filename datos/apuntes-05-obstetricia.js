/* ============================================================
   APUNTES 05 — Obstetricia
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================================================== */
'control-prenatal': {
  tema:'Control prenatal',
  bloque:'Ginecología y Obstetricia',
  min:6,
  idea:'Casi todas las muertes maternas son evitables con atención oportuna. El control prenatal existe para detectar a tiempo y para que la mujer sepa cuándo consultar.',
  claves:['control prenatal','ácido fólico','atención prenatal','captación','tamizaje gestacional'],
  sigue:'cambios-fisiologicos-del-embarazo',
  secciones:[
    {
      t:'Qué se hace y cuándo',
      p:[
        'La OMS recomienda al menos *ocho contactos* prenatales: uno en el primer trimestre, dos en el segundo y cinco en el tercero. La palabra contacto no es casual: subraya que cada visita tiene un contenido definido y no es un simple trámite.',
        'La primera consulta incluye la historia completa, el cálculo de la edad gestacional y el perfil básico: grupo sanguíneo y factor Rh con Coombs indirecto, hemograma, glucemia, examen de orina con urocultivo —porque la bacteriuria asintomática se trata siempre en el embarazo—, y serologías de sífilis, VIH y hepatitis B, a las que se añaden toxoplasma y rubéola según el contexto. La ecografía del primer trimestre es el método más fiable para datar.',
        'Después, cada contacto controla presión arterial, peso, altura uterina, latido y movimientos fetales, y suma los cribados de su momento: el de diabetes gestacional entre las semanas 24 y 28, el de estreptococo del grupo B entre las 35 y 37, y la vacunación con Tdap entre las 27 y 36 semanas, que protege al recién nacido de la tosferina antes de que pueda vacunarse.'
      ],
      foco:[
        'El ácido fólico se inicia *antes* de la concepción: el tubo neural se cierra hacia el día 28, cuando muchas mujeres aún no saben que están embarazadas.',
        'La aspirina a dosis baja, iniciada antes de la semana 16, previene la preeclampsia en gestantes de alto riesgo.'
      ]
    },
    {
      t:'Lo que la mujer tiene que saber',
      p:[
        'Enseñar los *signos de alarma* es una de las intervenciones más costo-efectivas de todo el control prenatal, y hay que repetirlos en cada contacto, no solo en el primero.',
        'Son: sangrado vaginal, pérdida de líquido, cefalea intensa con visión borrosa o luces —que sugiere preeclampsia—, dolor abdominal intenso, fiebre, edema brusco de cara y manos, vómitos incoercibles y *disminución de los movimientos fetales*. Ante cualquiera de ellos hay que acudir de inmediato.',
        'La fecha probable de parto se calcula con la regla de *Naegele*: al primer día de la última menstruación se le suman siete días y se le restan tres meses. Asume ciclos regulares de 28 días; si no lo son, manda la ecografía precoz.'
      ],
      alarma:[
        'Disminución de movimientos fetales: nunca es un motivo menor de consulta.',
        'Cefalea con alteraciones visuales en el tercer trimestre: descarta preeclampsia hoy, no mañana.'
      ]
    }
  ],
  recordar:[
    'Al menos *ocho contactos*, con contenido definido en cada uno.',
    'Ácido fólico *preconcepcional*; aspirina antes de la semana 16 si hay riesgo.',
    'Cribados: diabetes *24-28*, estreptococo B *35-37*, Tdap *27-36*.',
    'Bacteriuria asintomática: se trata *siempre*.',
    'Signos de alarma explicados en *cada* visita.'
  ],
  ref:'OMS, recomendaciones sobre atención prenatal; Williams Obstetricia, 26.ª ed.'
},

/* ==================================================== */
'cambios-fisiologicos-del-embarazo': {
  tema:'Cambios fisiológicos del embarazo',
  bloque:'Ginecología y Obstetricia',
  min:5,
  idea:'Saber qué es normal en el embarazo evita dos errores: alarmarse por lo fisiológico y tranquilizarse por lo patológico.',
  claves:['cambios fisiológicos','volumen plasmático','anemia dilucional','embarazo normal'],
  sigue:'maniobras-de-leopold',
  secciones:[
    {
      t:'Cardiovascular y hematológico',
      p:[
        'El gasto cardíaco aumenta entre un 30 y un 50%, y las resistencias periféricas *disminuyen* por vasodilatación. El resultado es que la presión arterial baja y alcanza su punto más bajo hacia la mitad del segundo trimestre, recuperándose al final. Esto tiene una consecuencia práctica importante: una gestante hipertensa crónica puede parecer normotensa justo en ese periodo, y una cifra "normal" entonces puede estar enmascarando el problema.',
        'El volumen plasmático crece un 40-50% mientras la masa eritrocitaria lo hace un 20-30%: la sangre se diluye y aparece la *anemia fisiológica* del embarazo, que alcanza su mínimo hacia las 28-32 semanas. Es útil, porque reduce la viscosidad y limita la pérdida de hematíes en el parto. Aun así, la ferropenia verdadera es muy frecuente y se define con hemoglobina por debajo de 11 g/dL, con suplementación rutinaria de hierro y folato.',
        'La gestación es además un estado *protrombótico* fisiológico: aumentan los factores de coagulación y disminuye la fibrinólisis, como preparación para la hemorragia del parto. Sumado a la estasis venosa por compresión uterina y al daño endotelial del parto, completa la tríada de Virchow, y por eso la enfermedad tromboembólica es una causa principal de muerte materna, con máximo riesgo en el puerperio.'
      ],
      foco:[
        'La trombosis en la gestante afecta con más frecuencia a la pierna *izquierda* y al territorio iliofemoral.',
        'En decúbito supino, el útero comprime la cava y produce hipotensión: explora y traslada en *decúbito lateral izquierdo*.'
      ]
    },
    {
      t:'Respiratorio, renal y digestivo',
      p:[
        'La progesterona estimula el centro respiratorio y produce hiperventilación, con una alcalosis respiratoria compensada que es normal en la gestante: una pCO2 de 30 mmHg no debe alarmar. La disnea fisiológica es frecuente.',
        'El filtrado glomerular aumenta en torno a un 50%, de modo que la creatinina y la urea *bajan*: una creatinina de 1,0 mg/dL, normal fuera del embarazo, puede indicar deterioro renal en una gestante. También aparece glucosuria fisiológica por saturación tubular.',
        'En el aparato digestivo, la relajación del esfínter esofágico inferior explica el reflujo, y la lentificación del tránsito, el estreñimiento y la mayor litogenicidad biliar.'
      ]
    }
  ],
  recordar:[
    'Gasto *sube*, resistencias *bajan*: la presión es mínima en el 2.º trimestre.',
    'Anemia *dilucional*: umbral de anemia 11 g/dL.',
    'Estado *protrombótico*: riesgo máximo en el puerperio.',
    'Creatinina y urea *bajan*: valores "normales" pueden ser patológicos.',
    'Decúbito *lateral izquierdo* siempre en el tercer trimestre.'
  ],
  ref:'Williams Obstetricia, 26.ª ed., adaptaciones maternas al embarazo.'
},

/* ==================================================== */
'maniobras-de-leopold': {
  tema:'Maniobras de Leopold',
  bloque:'Ginecología y Obstetricia',
  min:3,
  idea:'Cuatro maniobras en orden que responden cuatro preguntas: qué hay arriba, hacia dónde mira el dorso, qué se presenta y cuánto ha bajado.',
  claves:['Leopold','situación fetal','presentación','posición fetal'],
  sigue:'parto',
  secciones:[
    {
      t:'Las cuatro, en orden',
      p:[
        'La *primera* palpa el fondo uterino e identifica qué polo lo ocupa: la nalga es voluminosa, irregular y se mueve con el cuerpo; la cabeza es dura, redondeada y pelotea.',
        'La *segunda* recorre los flancos con ambas manos y determina la situación y hacia dónde mira el dorso fetal: se palpa como una superficie lisa y continua de un lado, y las partes pequeñas, irregulares, del otro. Es la que orienta dónde auscultar el latido.',
        'La *tercera*, o maniobra de Pawlik, toma con una mano el polo situado sobre el estrecho superior de la pelvis y define la presentación, comprobando si todavía pelotea —no encajada— o si ya está fija.',
        'La *cuarta* se realiza mirando hacia los pies de la gestante, con ambas manos descendiendo por los lados del segmento inferior, y valora el grado de encajamiento y la actitud de la cabeza.'
      ],
      foco:[
        'La tercera se hace mirando a la cara de la paciente; la cuarta, mirando a sus pies. Esa es la diferencia que más se confunde.',
        'La exploración se hace con la vejiga vacía y el útero relajado, o los hallazgos no valen.'
      ]
    }
  ],
  recordar:[
    '1.ª fondo uterino · 2.ª dorso y situación · 3.ª presentación (*Pawlik*) · 4.ª encajamiento.',
    'La 2.ª dice dónde auscultar el latido.',
    'La 3.ª comprueba si la presentación *pelotea* o está fija.',
    'Vejiga vacía y útero relajado.'
  ],
  ref:'Williams Obstetricia, 26.ª ed., exploración obstétrica.'
},

/* ==================================================== */
'parto': {
  tema:'Parto',
  bloque:'Ginecología y Obstetricia',
  min:7,
  idea:'Tres periodos, tres variables que vigilar —las tres P— y un tercer periodo cuyo manejo activo previene la primera causa de muerte materna.',
  claves:['trabajo de parto','dilatación','período expulsivo','alumbramiento','partograma'],
  sigue:'hemorragias-del-primer-trimestre',
  secciones:[
    {
      t:'Los periodos',
      p:[
        'El *primer periodo* es la dilatación, con una fase latente lenta y una fase activa que hoy se considera iniciada a partir de los 6 centímetros. El *segundo* es el expulsivo, desde la dilatación completa hasta el nacimiento. El *tercero* es el alumbramiento, la expulsión de la placenta. Muchos autores describen un cuarto periodo: las dos primeras horas de vigilancia posparto, donde ocurre la mayoría de las hemorragias.',
        'El progreso se registra en el partograma con dos datos que hay que anotar juntos: la *dilatación* y el *descenso* de la presentación, medido por planos de Hodge o estaciones de De Lee. Registrar solo la dilatación impide detectar la desproporción y la detención del expulsivo.'
      ]
    },
    {
      t:'Cuando el parto no progresa',
      p:[
        'La detención de la dilatación en fase activa, con contracciones adecuadas y sin progreso durante cuatro horas o más, obliga a reevaluar las *tres P*: el *poder* de las contracciones, el *pasajero* —tamaño, presentación y actitud fetal— y el *pasaje*, es decir, la pelvis.',
        'Antes de indicar una cesárea por detención hay que comprobar que la dinámica sea realmente adecuada: muchas detenciones se resuelven optimizando las contracciones con amniotomía u oxitocina. Los criterios actuales son más permisivos que los clásicos, precisamente para reducir cesáreas evitables, pero exigen vigilancia estrecha del bienestar fetal.',
        'Ese bienestar se monitoriza con el registro cardiotocográfico. Las desaceleraciones *precoces* son espejo de la contracción y reflejan compresión de la cabeza: benignas. Las *variables* son irregulares y sugieren compresión del cordón. Las *tardías* comienzan después del pico de la contracción e indican insuficiencia uteroplacentaria: si son repetidas y con variabilidad disminuida, hay que actuar. Y la *variabilidad* de la línea de base es el mejor indicador del estado del sistema nervioso fetal.'
      ],
      foco:[
        'Antes de una cesárea por detención: ¿es adecuada la dinámica?',
        'Desaceleraciones tardías repetidas con variabilidad disminuida: lateralizar, oxígeno, suspender oxitocina, corregir hipotensión y valorar finalizar.'
      ]
    },
    {
      t:'El alumbramiento activo',
      p:[
        'El manejo activo del tercer periodo reduce de forma significativa la hemorragia posparto, que es la principal causa de muerte materna en el mundo. Consiste en administrar un uterotónico —*oxitocina* de elección— inmediatamente tras el nacimiento, tracción controlada del cordón con contratracción suprapúbica, y valoración del tono uterino con masaje.',
        'Se aplica a todos los partos, no solo a los de riesgo, porque la mayoría de las hemorragias ocurren en mujeres sin ningún factor identificable. Y en el recién nacido vigoroso, el pinzamiento del cordón es tardío, entre uno y tres minutos, lo que mejora sus depósitos de hierro.'
      ],
      alarma:[
        'Tracción enérgica sin contratracción: riesgo de inversión uterina.',
        'Tras el alumbramiento, palpar el útero: si está blando, es atonía.'
      ]
    }
  ],
  recordar:[
    'Tres periodos: *dilatación, expulsivo, alumbramiento*. Fase activa desde 6 cm.',
    'Registra dilatación *y descenso*.',
    'Detención: revisa las *tres P* y la dinámica antes de la cesárea.',
    'Desaceleraciones *tardías* = insuficiencia uteroplacentaria.',
    'Manejo activo con *oxitocina* en todos los partos.'
  ],
  ref:'Williams Obstetricia, 26.ª ed.; OMS, recomendaciones para los cuidados durante el parto y sobre hemorragia posparto.'
},

/* ==================================================== */
'hemorragias-del-primer-trimestre': {
  tema:'Hemorragias del primer trimestre',
  bloque:'Ginecología y Obstetricia',
  min:6,
  idea:'Dos datos clasifican casi todo: cómo está el orificio cervical y si el embrión está vivo. Y siempre hay que descartar el ectópico.',
  claves:['aborto','amenaza de aborto','embarazo ectópico','beta-hCG','mola'],
  sigue:'hemorragias-del-tercer-trimestre',
  secciones:[
    {
      t:'Clasificar el aborto',
      p:[
        'La clasificación se apoya en dos variables: el estado del *orificio cervical interno* y la *viabilidad embrionaria*.',
        'Cuello *cerrado* con embrión vivo es una *amenaza de aborto*, y más de la mitad evolucionan bien: conducta expectante y control. Cuello *abierto* con embrión vivo es aborto inminente o en curso. Cuello abierto con restos es *incompleto*, y requiere evacuación. Ausencia de latido con cuello cerrado es *aborto diferido*, que se maneja con tratamiento médico o evacuación.',
        'La causa más frecuente del aborto precoz son las *anomalías cromosómicas* del embrión, sobre todo trisomías, y su frecuencia aumenta con la edad materna. Decirlo tiene valor clínico y humano: alivia la culpa de la mujer, que casi siempre atribuye la pérdida a algo que hizo, y evita recomendaciones sin fundamento como el reposo absoluto, que no previene nada.'
      ]
    },
    {
      t:'Embarazo ectópico: el que no se puede pasar por alto',
      p:[
        'Toda mujer en edad fértil con dolor pélvico o sangrado necesita una prueba de embarazo. Si es positiva y la ecografía transvaginal no muestra saco intrauterino, la clave es la *zona discriminatoria*: por encima de una beta-hCG de aproximadamente 1.500-2.000 mUI/mL debería verse la gestación intrauterina. Si no se ve, hay que sospechar ectópico.',
        'El seguimiento combina beta-hCG seriada cada 48 horas —en la gestación normal precoz asciende al menos un 50%— con ecografía. El tratamiento puede ser expectante, médico con metotrexato en casos seleccionados, o quirúrgico. La rotura tubárica, con dolor intenso, inestabilidad y signos de hemoperitoneo, es una urgencia quirúrgica.',
        'Y hay dos cuadros más que reconocer. La *mola hidatiforme*: útero mayor de lo esperado, beta-hCG desproporcionadamente alta, hiperémesis y ecografía en copos de nieve sin embrión; requiere evacuación y seguimiento con beta-hCG seriada para detectar la neoplasia trofoblástica persistente. Y la *isoinmunización*: toda gestante Rh negativa no sensibilizada con sangrado, aborto o ectópico debe recibir inmunoglobulina anti-D.'
      ],
      alarma:[
        'Dolor pélvico en mujer en edad fértil: prueba de embarazo *siempre*.',
        'Beta-hCG por encima de la zona discriminatoria sin saco intrauterino: ectópico hasta que se demuestre lo contrario.',
        'Rh negativa con sangrado: anti-D.'
      ]
    }
  ],
  recordar:[
    'Clasifica por *cuello* + *viabilidad*.',
    'Cerrado con embrión vivo = amenaza → expectante.',
    'Causa principal del aborto precoz: *cromosómica*. El reposo no lo evita.',
    'Sin saco intrauterino con beta-hCG alta = *ectópico*.',
    'Mola: útero grande, beta-hCG altísima, *copos de nieve*, seguimiento obligado.'
  ],
  ref:'Boletines del ACOG sobre pérdida gestacional temprana, embarazo tubárico y enfermedad trofoblástica; Williams Obstetricia, 26.ª ed.'
},

/* ==================================================== */
'hemorragias-del-tercer-trimestre': {
  tema:'Hemorragias del segundo y tercer trimestre',
  bloque:'Ginecología y Obstetricia',
  min:5,
  idea:'Con dolor o sin dolor: esa es la primera pregunta. Y ante sangrado del tercer trimestre, el tacto vaginal está prohibido hasta descartar placenta previa.',
  claves:['placenta previa','desprendimiento','vasa previa','rotura uterina','metrorragia del tercer trimestre'],
  sigue:'preeclampsia-y-eclampsia',
  secciones:[
    {
      t:'Los cuatro cuadros',
      p:[
        'La *placenta previa* sangra en rojo brillante, de forma indolora y súbita, con útero blando y relajado, y el estado fetal suele conservarse al principio. El tacto vaginal está formalmente contraindicado: puede desgarrar la placenta y desencadenar una hemorragia masiva. Se confirma con ecografía, incluida la transvaginal, que es segura.',
        'El *desprendimiento prematuro de placenta normoinserta* duele: dolor brusco, útero hipertónico y doloroso, sangre oscura y a menudo escasa —porque buena parte queda retenida detrás de la placenta— y afectación fetal precoz. Sus factores de riesgo son la hipertensión, el traumatismo, el consumo de cocaína y la edad materna avanzada. La cantidad de sangre visible no mide la gravedad.',
        'La *rotura uterina* cursa con dolor intenso, pérdida de la estática fetal, cese de las contracciones y deterioro materno y fetal; el antecedente de cesárea es el factor de riesgo principal. Y la *vasa previa* produce un sangrado de origen *fetal* al romperse las membranas, con deterioro fulminante del feto pese a una pérdida pequeña para la madre.'
      ],
      foco:[
        'Regla de oro: sangrado del tercer trimestre → *ecografía antes que tacto*.',
        'Sangre oscura y escasa con útero duro y doloroso = desprendimiento, aunque se vea poca sangre.'
      ],
      alarma:[
        'Registro fetal alterado con sangrado: extracción urgente.',
        'Placenta previa: nunca tacto vaginal.'
      ]
    }
  ],
  recordar:[
    'Previa: *indolora*, roja, útero blando. Desprendimiento: *doloroso*, oscura, útero duro.',
    'Nunca tacto vaginal antes de la ecografía.',
    'La sangre visible *no* mide la pérdida real en el desprendimiento.',
    'Vasa previa: sangrado *fetal*, deterioro fulminante.'
  ],
  ref:'Williams Obstetricia, 26.ª ed., hemorragia obstétrica; boletines del ACOG.'
},

/* ==================================================== */
'preeclampsia-y-eclampsia': {
  tema:'Preeclampsia y eclampsia',
  bloque:'Ginecología y Obstetricia',
  min:7,
  idea:'Ya no hace falta proteinuria para diagnosticarla. El sulfato de magnesio previene la convulsión, los antihipertensivos protegen a la madre, y lo único curativo es finalizar la gestación.',
  claves:['preeclampsia','eclampsia','sulfato de magnesio','proteinuria','HELLP'],
  sigue:'sindrome-hellp',
  secciones:[
    {
      t:'La definición cambió',
      p:[
        'La preeclampsia es hipertensión de nueva aparición *después de la semana 20* acompañada de proteinuria o, en su ausencia, de cualquier signo de disfunción orgánica: trombocitopenia por debajo de 100.000, transaminasas elevadas, creatinina superior a 1,1 mg/dL o el doble de la basal, edema pulmonar, o síntomas neurológicos o visuales de nueva aparición.',
        'Ese cambio importa porque antes se exigía proteinuria y se infradiagnosticaban formas graves que no la tenían. Hoy, una gestante con hipertensión y plaquetas bajas o dolor epigástrico es una preeclampsia aunque la tira de orina sea negativa.',
        'Hay que distinguirla de la *hipertensión crónica*, previa a la semana 20, y de la *hipertensión gestacional*, que aparece después de la semana 20 sin criterios de preeclampsia y puede evolucionar a ella.'
      ],
      foco:[
        'Cefalea intensa, alteraciones visuales, dolor epigástrico o en hipocondrio derecho e hiperreflexia son *criterios de gravedad*, no molestias.'
      ]
    },
    {
      t:'Tratar: tres frentes a la vez',
      p:[
        'El primero es *prevenir la convulsión* con sulfato de magnesio, que es superior a la fenitoína y al diazepam. Durante su administración hay que vigilar tres cosas: los reflejos osteotendinosos, que desaparecen antes de que aparezca la depresión respiratoria; la frecuencia respiratoria; y la diuresis, porque se elimina por vía renal y se acumula si esta cae. El antídoto ante intoxicación es el *gluconato cálcico*.',
        'El segundo es *controlar la presión arterial* con antihipertensivos intravenosos —labetalol, hidralazina, nifedipino—, cuyo objetivo es proteger a la madre del ictus. Conviene tener claro que bajar la presión no previene la convulsión: son dos objetivos distintos y simultáneos.',
        'El tercero es *finalizar la gestación*, que es el único tratamiento curativo. El momento se decide balanceando la gravedad materna contra la prematuridad fetal, administrando corticoides si procede.',
        'Ante la *eclampsia*, el orden es: estabilizar a la madre —vía aérea, oxígeno, decúbito lateral izquierdo, prevención de traumatismos, sulfato de magnesio, control de la presión— y después finalizar. Correr al quirófano durante la convulsión pone en riesgo a ambos.'
      ],
      alarma:[
        'Preeclampsia con criterios de gravedad: no es para tratar en casa.',
        'La prevención en gestantes de alto riesgo es *aspirina a dosis baja antes de la semana 16*.'
      ]
    }
  ],
  recordar:[
    'Hipertensión tras la *semana 20* + proteinuria *o* daño de órgano.',
    '*Sulfato de magnesio* previene la convulsión; el antídoto es *gluconato cálcico*.',
    'Vigilar reflejos, respiración y *diuresis* durante el magnesio.',
    'Lo curativo es *finalizar la gestación*.',
    'Prevención: aspirina antes de la semana 16 en alto riesgo.'
  ],
  ref:'Boletines del ACOG sobre trastornos hipertensivos del embarazo; OMS; ISSHP.'
},

/* ==================================================== */
'sindrome-hellp': {
  tema:'Síndrome HELLP',
  bloque:'Ginecología y Obstetricia',
  min:4,
  idea:'Puede cursar con hipertensión leve o sin proteinuria, y aun así ser gravísimo. El dolor epigástrico es la señal que precede al desastre.',
  claves:['HELLP','hemólisis','plaquetopenia','transaminasas','epigastralgia'],
  sigue:'diabetes-gestacional',
  secciones:[
    {
      t:'Las tres letras',
      p:[
        'HELLP resume sus tres componentes: *H*emólisis, con esquistocitos, LDH elevada y bilirrubina indirecta alta; *EL*evación de las enzimas hepáticas; y *LP*, plaquetas bajas. Es una forma grave de enfermedad hipertensiva del embarazo.',
        'Su peligro está en que puede aparecer con hipertensión poco llamativa y sin proteinuria marcada, lo que retrasa el reconocimiento. El *dolor en epigastrio o en hipocondrio derecho* es un signo de alarma que puede preceder al hematoma subcapsular hepático y a su rotura, que es catastrófica.',
        'El tratamiento es el mismo esquema: sulfato de magnesio, control de la presión y, sobre todo, *finalización de la gestación*, que aquí no admite demoras largas. Los corticoides se usan para maduración pulmonar fetal, no para tratar el síndrome.'
      ],
      alarma:[
        'Dolor epigástrico en una gestante hipertensa: pide plaquetas y transaminasas ya.',
        'Deterioro brusco con dolor abdominal e hipotensión: sospecha rotura hepática.'
      ]
    }
  ],
  recordar:[
    '*H*emólisis + *EL* enzimas hepáticas + *LP* plaquetas bajas.',
    'Puede cursar *sin* hipertensión marcada ni proteinuria.',
    'Epigastralgia = señal de alarma.',
    'Tratamiento: magnesio, control tensional y *finalizar*.'
  ],
  ref:'Boletines del ACOG; Williams Obstetricia, 26.ª ed.'
},

/* ==================================================== */
'diabetes-gestacional': {
  tema:'Diabetes gestacional',
  bloque:'Ginecología y Obstetricia',
  min:5,
  idea:'Se criba a todas entre las 24 y 28 semanas. Y el hijo de madre mal controlada nace grande y hace hipoglucemia, por una razón que conviene entender.',
  claves:['diabetes gestacional','sobrecarga oral','macrosomía','insulina','hipoglucemia neonatal'],
  sigue:'ruptura-prematura-de-membranas',
  secciones:[
    {
      t:'Cribado y diagnóstico',
      p:[
        'El cribado es *universal* y se realiza entre las semanas 24 y 28, que es cuando el lactógeno placentario lleva la resistencia a la insulina a su máximo. Se hace con sobrecarga oral de glucosa, en uno o dos pasos según el protocolo local.',
        'En gestantes con factores de riesgo —obesidad, antecedente de diabetes gestacional, macrosomía previa, antecedentes familiares— se adelanta a la primera consulta y, si es normal, se repite en la ventana habitual. Un error frecuente es creer que sin factores de riesgo no hace falta cribar: la mayoría de los casos aparecen en gestantes sin ningún factor identificable.',
        'La hemoglobina glucosilada no es la prueba de elección en el embarazo, porque refleja los meses previos y se altera con los cambios hematológicos de la gestación.'
      ]
    },
    {
      t:'Tratamiento y consecuencias en el hijo',
      p:[
        'Se empieza con dieta y ejercicio supervisados. Si no se alcanzan los objetivos, el fármaco de elección es la *insulina*: eficaz, ajustable y no atraviesa la placenta. La metformina se usa como alternativa en casos seleccionados, aunque sí atraviesa la placenta.',
        'La fisiopatología del recién nacido merece entenderse porque explica todo lo demás: la glucosa materna atraviesa libremente la placenta, pero la insulina no. El feto responde a la hiperglucemia produciendo insulina en exceso, y esa insulina actúa como hormona de crecimiento: de ahí la *macrosomía* y la organomegalia. Al nacer se corta bruscamente el aporte de glucosa mientras el hiperinsulinismo persiste horas, y aparece la *hipoglucemia neonatal*. Se asocian además policitemia, hipocalcemia, ictericia y mayor riesgo de dificultad respiratoria.',
        'La macrosomía aumenta el riesgo de distocia de hombros y de trauma obstétrico. Y tras el parto hay que reclasificar a la madre, porque la diabetes gestacional predice diabetes tipo 2 futura.'
      ],
      alarma:[
        'Hijo de madre diabética: mide la glucemia, aunque esté asintomático.',
        'No dar el alta sin plan de reclasificación materna posparto.'
      ]
    }
  ],
  recordar:[
    'Cribado *universal* entre las *24 y 28* semanas con sobrecarga oral.',
    'Fármaco de elección: *insulina*.',
    'La glucosa pasa la placenta, la insulina *no* → hiperinsulinismo fetal → macrosomía e hipoglucemia neonatal.',
    'Reclasificar a la madre tras el parto.'
  ],
  ref:'American Diabetes Association, manejo de la diabetes en el embarazo; boletines del ACOG.'
},

/* ==================================================== */
'ruptura-prematura-de-membranas': {
  tema:'Ruptura prematura de membranas',
  bloque:'Ginecología y Obstetricia',
  min:5,
  idea:'Se diagnostica con espéculo, no con los dedos. Cada tacto acorta el embarazo y acerca la corioamnionitis.',
  claves:['ruptura prematura de membranas','RPM','corioamnionitis','especuloscopia','latencia'],
  sigue:'infecciones-de-transmision-sexual',
  secciones:[
    {
      t:'Confirmar sin dañar',
      p:[
        'El diagnóstico se hace con *especuloscopia*, observando la salida de líquido amniótico por el orificio cervical, y se complementa si hace falta con pruebas bioquímicas. El *tacto vaginal digital está contraindicado* mientras no haya trabajo de parto establecido: cada tacto introduce gérmenes, acorta el periodo de latencia y aumenta el riesgo de corioamnionitis, que es la complicación que más condiciona el pronóstico.',
        'Una vez confirmada, hay que precisar la edad gestacional, valorar el bienestar fetal y buscar signos de infección: fiebre materna, taquicardia materna y fetal, útero doloroso, líquido maloliente y elevación de reactantes.'
      ]
    },
    {
      t:'Qué hacer según la edad gestacional',
      p:[
        'A *término*, la conducta es finalizar la gestación, con inducción si no se desencadena el parto, porque prolongar aumenta la infección sin ningún beneficio.',
        'En el *pretérmino* sin infección, sin trabajo de parto y con bienestar fetal conservado, el manejo es expectante y hospitalario, para ganar madurez: corticoides para maduración pulmonar, antibióticos que prolongan el periodo de latencia y reducen la morbilidad infecciosa neonatal, y sulfato de magnesio como neuroprotector por debajo de las 32 semanas.',
        'La vigilancia es estrecha, y cualquier signo de *corioamnionitis* cambia la conducta: antibiótico intravenoso de amplio espectro y finalización sin demora. La infección no se resuelve mientras el foco permanece dentro.'
      ],
      alarma:[
        'Fiebre, taquicardia fetal o líquido maloliente: corioamnionitis, hay que finalizar.',
        'Prolapso de cordón: riesgo aumentado tras la rotura, sobre todo si la presentación no está encajada.'
      ]
    }
  ],
  recordar:[
    'Diagnóstico con *espéculo*; nada de tacto digital.',
    'A término: finalizar. Pretérmino sin infección: *expectante* con corticoides y antibiótico.',
    'Magnesio neuroprotector por debajo de *32 semanas*.',
    'Corioamnionitis → antibiótico y *finalizar ya*.'
  ],
  ref:'Boletines del ACOG sobre rotura prematura de membranas pretérmino; Williams Obstetricia, 26.ª ed.'
}

});
