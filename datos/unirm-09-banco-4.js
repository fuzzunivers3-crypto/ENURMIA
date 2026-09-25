/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE ANATOMIA PATOLOGICA I (1/2)
   Amplia Anatomia Patologica I de 5 a 50 preguntas junto con
   unirm-09-banco-5.js. Esta parte cubre lesion celular, necrosis,
   apoptosis, inflamacion aguda y cronica, alteraciones hemodinamicas
   y edema/congestion/shock (temas 1-7).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ANATOMIA PATOLOGICA I ===================== */
{
  id:'U9-AP-Q06', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Lesión celular reversible e irreversible', sub:'Degeneración hidrópica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mecanismo explica la degeneración hidrópica (tumefacción celular), el hallazgo más temprano de la lesión celular reversible?',
  ops:[
    'La falla de la bomba sodio-potasio por falta de ATP permite que el sodio se acumule dentro de la célula, arrastrando agua por ósmosis',
    'Una entrada masiva de calcio que activa enzimas destructivas irreversibles',
    'La degeneración hidrópica no tiene relación con ningún mecanismo de membrana',
    'Es exclusivamente un artefacto de la técnica de laboratorio, sin significado biológico real'
  ],
  ok:0,
  clave:'La falla de la bomba sodio-potasio (por falta de ATP) permite acumulación de sodio y agua dentro de la célula.',
  exp:'La degeneración hidrópica es el hallazgo morfológico más temprano de la lesión celular reversible: al fallar la bomba sodio-potasio por falta de ATP (consecuencia de la hipoxia y el fallo de la fosforilación oxidativa), el sodio se acumula dentro de la célula, arrastrando agua consigo por ósmosis, y la célula se hincha visiblemente. Es completamente reversible si el factor causante se corrige a tiempo.',
  no:{
    1:'La entrada masiva de calcio y la activación de enzimas destructivas ocurre en etapas MÁS avanzadas, ya cerca o después del punto de no retorno, no en la degeneración hidrópica temprana.',
    2:'La degeneración hidrópica sí tiene un mecanismo de membrana claro y bien establecido: la falla de la bomba sodio-potasio dependiente de ATP.',
    3:'La degeneración hidrópica es un hallazgo biológico real y reproducible, no un artefacto técnico.'
  },
  trampa:'Confundir el mecanismo temprano y reversible (falla de bomba sodio-potasio) con los mecanismos tardíos e irreversibles (entrada masiva de calcio).',
  obj:'Explicar el mecanismo de la degeneración hidrópica en la lesión celular reversible.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 1.',
  tags:['degeneración hidrópica','bomba sodio-potasio','lesión celular reversible']
},
{
  id:'U9-AP-Q07', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Lesión celular reversible e irreversible', sub:'Hipoxia y ATP',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la hipoxia compromete la producción de ATP y, con ello, el funcionamiento de las bombas de membrana celular?',
  ops:[
    'Sin oxígeno suficiente, la fosforilación oxidativa mitocondrial se ve comprometida, forzando a la célula a depender de la glucólisis anaerobia, mucho menos eficiente en producir ATP',
    'La hipoxia no tiene ninguna relación con la producción de ATP celular',
    'La hipoxia aumenta directamente la producción de ATP mitocondrial',
    'Las bombas de membrana no requieren ATP para funcionar'
  ],
  ok:0,
  clave:'La hipoxia compromete la fosforilación oxidativa mitocondrial, forzando a depender de la glucólisis anaerobia, menos eficiente en ATP.',
  exp:'Sin oxígeno suficiente, la célula no puede producir ATP de forma eficiente mediante la fosforilación oxidativa mitocondrial, y recurre a la glucólisis anaerobia como alternativa -pero esta produce mucho menos ATP y genera ácido láctico, bajando el pH intracelular. Sin suficiente ATP, las bombas de membrana dependientes de energía (como la bomba sodio-potasio) fallan.',
  no:{
    1:'La hipoxia sí tiene una relación directa y fundamental con la producción de ATP, siendo la causa más frecuente de lesión celular por esta vía.',
    2:'Es al revés: la hipoxia DISMINUYE la producción de ATP mitocondrial, no la aumenta.',
    3:'Las bombas de membrana, como la bomba sodio-potasio, sí requieren ATP directamente para funcionar; por eso fallan cuando el ATP escasea.'
  },
  trampa:'No conectar la cadena causal completa: hipoxia → menor fosforilación oxidativa → menor ATP → falla de bombas de membrana dependientes de ATP.',
  obj:'Explicar cómo la hipoxia compromete la producción de ATP y el funcionamiento de las bombas de membrana.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 1.',
  tags:['hipoxia','ATP','fosforilación oxidativa','glucólisis anaerobia']
},
{
  id:'U9-AP-Q08', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Lesión celular reversible e irreversible', sub:'Punto de no retorno',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un modelo de isquemia, un tejido restaura su flujo sanguíneo poco después de iniciada la falta de oxígeno, y las células recuperan su función normal sin secuelas.',
  enunciado:'¿Qué indica este resultado sobre el estado de la lesión celular en ese momento?',
  ops:[
    'La lesión celular todavía era reversible; no se había cruzado el punto de no retorno',
    'La lesión celular ya era irreversible, pero las células lograron regenerarse por completo',
    'No hubo ninguna lesión celular real en este escenario',
    'El punto de no retorno no tiene relación con la restauración del flujo sanguíneo'
  ],
  ok:0,
  clave:'La recuperación completa indica que la lesión seguía siendo reversible (no se cruzó el punto de no retorno).',
  exp:'Que las células recuperen su función normal sin secuelas tras restaurar el flujo indica que la lesión celular todavía era reversible en ese momento -no se había cruzado el punto de no retorno, el umbral a partir del cual ocurren cambios estructurales (daño masivo de membranas, entrada masiva de calcio) que ya no pueden repararse.',
  no:{
    1:'Si la lesión fuera irreversible, las células habrían muerto (por necrosis), no se habrían regenerado por completo sin secuelas -la recuperación completa indica reversibilidad, no regeneración desde un daño irreversible.',
    2:'Sí hubo lesión celular real (por la hipoxia inicial), solo que se corrigió a tiempo, dentro de la ventana de reversibilidad.',
    3:'El punto de no retorno está directamente relacionado con el tiempo disponible para restaurar el flujo sanguíneo antes de que el daño se vuelva irreparable.'
  },
  trampa:'Confundir la recuperación completa sin secuelas con una supuesta regeneración desde un daño ya irreversible, en vez de reconocerla como evidencia de que la lesión seguía siendo reversible.',
  obj:'Interpretar la recuperación celular completa como evidencia de que la lesión no cruzó el punto de no retorno.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 1.',
  tags:['punto de no retorno','isquemia','reversibilidad de la lesión celular']
},
{
  id:'U9-AP-Q09', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Lesión celular reversible e irreversible', sub:'Consecuencia clínica del punto de no retorno',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es clínicamente crítico saber si el tejido de un infarto todavía está en la fase reversible o ya cruzó el punto de no retorno?',
  ops:[
    'Porque restaurar el flujo sanguíneo ANTES de ese punto puede salvar el tejido; después de cruzado, ya no importa qué tan rápido se restaure el flujo, el tejido está condenado a morir',
    'El punto de no retorno no tiene ninguna relevancia para las decisiones clínicas de tratamiento',
    'Restaurar el flujo sanguíneo siempre salva el tejido, sin importar cuánto tiempo haya pasado',
    'El tejido en fase reversible ya no puede beneficiarse de ninguna intervención'
  ],
  ok:0,
  clave:'Restaurar el flujo antes del punto de no retorno puede salvar el tejido; después, el tejido está condenado sin importar la intervención.',
  exp:'Distinguir clínicamente si una lesión todavía es reversible o ya cruzó el punto de no retorno es, con frecuencia, la diferencia entre un tejido que puede salvarse con una intervención oportuna (como restaurar el flujo sanguíneo rápidamente en un infarto) y uno que ya está condenado a morir sin importar qué se haga después -de ahí la urgencia de actuar rápido ante un infarto agudo.',
  no:{
    1:'El punto de no retorno es precisamente central para las decisiones clínicas de urgencia, como el tiempo disponible para reperfundir un infarto.',
    2:'No siempre salva el tejido; si ya se cruzó el punto de no retorno, restaurar el flujo no revierte el daño ya establecido.',
    3:'Es al contrario: el tejido en fase reversible SÍ puede beneficiarse de una intervención oportuna, precisamente porque el daño aún no es definitivo.'
  },
  trampa:'No reconocer la urgencia temporal implícita en el concepto de punto de no retorno para las decisiones clínicas de reperfusión.',
  obj:'Explicar la relevancia clínica de identificar si un tejido está antes o después del punto de no retorno.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 1.',
  tags:['punto de no retorno','infarto','reperfusión','urgencia clínica']
},
{
  id:'U9-AP-Q10', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Necrosis: tipos', sub:'Necrosis licuefactiva en SNC',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el sistema nervioso central sufre típicamente necrosis licuefactiva tras un infarto cerebral, en vez de necrosis coagulativa como la mayoría de órganos sólidos?',
  ops:[
    'Porque tiene poco tejido conectivo de soporte y mucha grasa, más susceptible a la digestión enzimática que deja el tejido convertido en un material líquido',
    'El sistema nervioso central nunca sufre ningún tipo de necrosis',
    'La necrosis licuefactiva es exclusiva de infecciones bacterianas, nunca de un infarto',
    'El sistema nervioso central tiene más tejido conectivo que cualquier otro órgano del cuerpo'
  ],
  ok:0,
  clave:'El SNC tiene poco tejido conectivo y mucha grasa, más susceptible a digestión enzimática, resultando en necrosis licuefactiva.',
  exp:'La necrosis licuefactiva ocurre típicamente en el sistema nervioso central (que tiene poco tejido conectivo de soporte y mucha grasa, más susceptible a digestión enzimática) tras un infarto cerebral. Las enzimas digestivas permanecen activas y digieren completamente el tejido muerto, dejándolo convertido en un material líquido y viscoso -a diferencia de la mayoría de órganos sólidos, donde la necrosis coagulativa preserva la arquitectura tisular.',
  no:{
    1:'El sistema nervioso central sí puede sufrir necrosis, específicamente de tipo licuefactivo tras un infarto cerebral.',
    2:'La necrosis licuefactiva también ocurre en infecciones bacterianas con pus, pero NO es exclusiva de ellas; también ocurre en infartos del sistema nervioso central.',
    3:'Es al revés: el sistema nervioso central tiene POCO tejido conectivo de soporte comparado con otros órganos, lo que explica su susceptibilidad a la necrosis licuefactiva.'
  },
  trampa:'No reconocer la característica estructural específica del sistema nervioso central (poco tejido conectivo, mucha grasa) que explica su patrón particular de necrosis.',
  obj:'Explicar por qué el sistema nervioso central sufre típicamente necrosis licuefactiva.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.',
  tags:['necrosis licuefactiva','sistema nervioso central','infarto cerebral']
},
{
  id:'U9-AP-Q11', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Necrosis: tipos', sub:'Necrosis grasa',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con pancreatitis aguda severa desarrolla depósitos blanquecinos visibles en el tejido adiposo peripancreático.',
  enunciado:'¿Qué tipo de necrosis explica este hallazgo, y cuál es su mecanismo?',
  ops:[
    'Necrosis grasa: las lipasas pancreáticas liberadas digieren el tejido adiposo, liberando ácidos grasos que se combinan con calcio formando esos depósitos blanquecinos',
    'Necrosis caseosa, típica de tuberculosis', 'Necrosis fibrinoide, típica de vasculitis autoinmune', 'Necrosis coagulativa, típica de isquemia en órganos sólidos'],
  ok:0,
  clave:'Necrosis grasa: las lipasas pancreáticas digieren el tejido adiposo, y los ácidos grasos liberados se combinan con calcio formando depósitos blanquecinos.',
  exp:'La necrosis grasa ocurre cuando enzimas (típicamente las lipasas pancreáticas liberadas en una pancreatitis aguda) digieren directamente el tejido adiposo, liberando ácidos grasos que se combinan con calcio formando depósitos blanquecinos visibles -exactamente el mecanismo y el escenario clínico descrito en este caso.',
  no:{
    1:'La necrosis caseosa es el patrón clásico de la tuberculosis, sin relación con las lipasas pancreáticas de este caso.',
    2:'La necrosis fibrinoide se ve en la pared de vasos sanguíneos en enfermedades autoinmunes, no en el tejido adiposo peripancreático.',
    3:'La necrosis coagulativa preserva la arquitectura tisular en órganos sólidos por isquemia, un mecanismo distinto al de la digestión enzimática del tejido graso descrita aquí.'
  },
  trampa:'Confundir la necrosis grasa con otros patrones de necrosis que no corresponden al mecanismo enzimático de digestión del tejido adiposo.',
  obj:'Identificar la necrosis grasa y su mecanismo en el contexto de una pancreatitis aguda.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.',
  tags:['necrosis grasa','pancreatitis aguda','lipasas pancreáticas']
},
{
  id:'U9-AP-Q12', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Necrosis: tipos', sub:'Necrosis fibrinoide',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Dónde se observa típicamente la necrosis fibrinoide, y con qué tipo de enfermedad se asocia?',
  ops:[
    'En la pared de los vasos sanguíneos, típica de ciertas enfermedades autoinmunes con daño vascular (vasculitis)',
    'Exclusivamente en el tejido pulmonar, sin relación con vasos sanguíneos',
    'Es sinónimo exacto de necrosis caseosa',
    'Solo ocurre en el sistema nervioso central'
  ],
  ok:0,
  clave:'La necrosis fibrinoide se observa en la pared de los vasos sanguíneos, típica de vasculitis autoinmune.',
  exp:'La necrosis fibrinoide es un patrón especializado que se ve en la pared de los vasos sanguíneos, típica de ciertas enfermedades autoinmunes con daño vascular (vasculitis), donde el depósito de complejos inmunitarios y proteínas plasmáticas le da a la pared del vaso un aspecto homogéneo y rosado, parecido a la fibrina, al microscopio.',
  no:{
    1:'No es exclusiva del tejido pulmonar; se observa específicamente en la pared de vasos sanguíneos de cualquier localización afectada por vasculitis.',
    2:'La necrosis fibrinoide y la caseosa son patrones distintos, con mecanismos y localizaciones diferentes (vasos sanguíneos frente a granulomas tuberculosos).',
    3:'La necrosis fibrinoide no es exclusiva del sistema nervioso central; se relaciona con la pared vascular en el contexto de vasculitis.'
  },
  trampa:'Confundir la necrosis fibrinoide con otros patrones de necrosis o asignarle una localización incorrecta.',
  obj:'Identificar la localización y asociación clínica de la necrosis fibrinoide.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.',
  tags:['necrosis fibrinoide','vasculitis','pared vascular']
},
{
  id:'U9-AP-Q13', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Apoptosis', sub:'Ausencia de inflamación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la apoptosis, a diferencia de la necrosis, no dispara una respuesta inflamatoria?',
  ops:[
    'Porque los cuerpos apoptóticos son rápidamente fagocitados por células vecinas o macrófagos, sin que el contenido celular se derrame hacia el espacio extracelular',
    'La apoptosis siempre dispara una inflamación aún más intensa que la necrosis',
    'La apoptosis no involucra ningún cambio en la membrana celular',
    'La ausencia de inflamación en la apoptosis no tiene ninguna explicación conocida'
  ],
  ok:0,
  clave:'Los cuerpos apoptóticos son fagocitados rápidamente sin derramar contenido celular, evitando la inflamación.',
  exp:'En la apoptosis, la célula se desintegra en pequeños fragmentos rodeados de membrana llamados cuerpos apoptóticos, que son rápidamente reconocidos y fagocitados por células vecinas o macrófagos, sin que su contenido se derrame hacia el espacio extracelular -por eso, a diferencia de la necrosis (donde el contenido celular potencialmente irritante escapa de forma descontrolada), la apoptosis NO dispara inflamación.',
  no:{
    1:'Es precisamente lo contrario: la apoptosis NO dispara inflamación, mientras que la necrosis sí lo hace casi siempre.',
    2:'La apoptosis sí involucra cambios de membrana, incluyendo la formación de los cuerpos apoptóticos rodeados de membrana.',
    3:'La ausencia de inflamación en la apoptosis tiene una explicación mecanística clara y bien establecida: la fagocitosis limpia de los cuerpos apoptóticos.'
  },
  trampa:'No reconocer el mecanismo específico (fagocitosis limpia de cuerpos apoptóticos) que explica por qué la apoptosis no dispara inflamación, a diferencia de la necrosis.',
  obj:'Explicar por qué la apoptosis no dispara una respuesta inflamatoria.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.',
  tags:['apoptosis','cuerpos apoptóticos','ausencia de inflamación']
},
{
  id:'U9-AP-Q14', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Apoptosis', sub:'Caspasas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué son las caspasas, y qué función cumplen en la apoptosis?',
  ops:[
    'Una familia de enzimas que se activan en cascada y cortan proteínas clave dentro de la célula, desmantelándola de forma ordenada',
    'Son las mismas proteínas del sistema del complemento estudiadas en Inmunología',
    'Son receptores de membrana que impiden la fagocitosis de la célula', 'Las caspasas no tienen ninguna función en la apoptosis'],
  ok:0,
  clave:'Las caspasas son enzimas que se activan en cascada y desmantelan la célula de forma ordenada durante la apoptosis.',
  exp:'El proceso de apoptosis está ejecutado por las caspasas, una familia de enzimas que se activan en cascada (parecido, en su lógica de amplificación escalonada, a la cascada del complemento ya vista en Inmunología, aunque son proteínas distintas) y que cortan proteínas clave dentro de la célula, desmantelándola de forma ordenada desde adentro.',
  no:{
    1:'Las caspasas y las proteínas del complemento son familias distintas de proteínas; solo comparten la lógica de activación en cascada, no su identidad molecular.',
    2:'Las caspasas no son receptores de membrana; son enzimas intracelulares que ejecutan el desmantelamiento de la célula.',
    3:'Las caspasas cumplen la función central y ejecutora de todo el proceso de apoptosis.'
  },
  trampa:'Confundir las caspasas con las proteínas del complemento, solo por compartir la lógica de activación en cascada, cuando son familias moleculares distintas.',
  obj:'Definir las caspasas y su función en la ejecución de la apoptosis.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.',
  tags:['caspasas','apoptosis','cascada enzimática']
},
{
  id:'U9-AP-Q15', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Apoptosis', sub:'Apoptosis en el desarrollo embrionario',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la separación de los dedos durante el desarrollo embrionario es un ejemplo de apoptosis fisiológica normal?',
  ops:[
    'Porque las células que originalmente conectaban los dedos mueren de forma programada una vez que cumplieron su función durante el desarrollo, sin dañar el tejido circundante',
    'La separación de los dedos ocurre exclusivamente por necrosis, no por apoptosis',
    'La apoptosis en el desarrollo embrionario siempre representa una enfermedad grave',
    'Las células de los dedos nunca mueren durante el desarrollo embrionario'
  ],
  ok:0,
  clave:'Las células que conectaban los dedos mueren de forma programada tras cumplir su función, sin dañar el tejido circundante -ejemplo de apoptosis fisiológica.',
  exp:'La apoptosis no es un fallo ni una enfermedad: es un proceso NORMAL y necesario, activo constantemente en el cuerpo sano, incluyendo el desarrollo embrionario. Elimina células que ya cumplieron su función, como las células que separaban los dedos durante el desarrollo embrionario -un ejemplo clásico de apoptosis fisiológica, sin daño al tejido circundante precisamente porque no dispara inflamación.',
  no:{
    1:'Es precisamente lo contrario: la separación de los dedos ocurre por apoptosis, no por necrosis, y por eso no daña el tejido circundante.',
    2:'La apoptosis en el desarrollo embrionario es un proceso fisiológico completamente normal, no una enfermedad.',
    3:'Las células de los dedos sí mueren durante el desarrollo, precisamente por apoptosis programada, para permitir la separación normal de los dedos.'
  },
  trampa:'Confundir la apoptosis fisiológica del desarrollo con un proceso patológico, o asumir que la separación de dedos ocurre por necrosis en vez de apoptosis.',
  obj:'Explicar la apoptosis fisiológica en el contexto del desarrollo embrionario.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.',
  tags:['apoptosis fisiológica','desarrollo embrionario','muerte celular programada']
},
{
  id:'U9-AP-Q16', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Apoptosis', sub:'Apoptosis en quimioterapia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el fundamento de que muchos fármacos de quimioterapia busquen inducir apoptosis en las células cancerosas?',
  ops:[
    'Aprovechar el mecanismo natural de muerte celular programada para eliminar de forma controlada a las células cancerosas, idealmente sin dañar tejido sano circundante ni disparar inflamación excesiva',
    'La quimioterapia nunca tiene relación con la apoptosis, actúa por mecanismos completamente distintos',
    'Inducir apoptosis siempre daña masivamente el tejido sano circundante, igual que la necrosis',
    'La apoptosis inducida por quimioterapia siempre dispara una fuerte respuesta inflamatoria'
  ],
  ok:0,
  clave:'Se aprovecha el mecanismo natural de apoptosis para eliminar células cancerosas de forma controlada, sin la inflamación asociada a la necrosis.',
  exp:'Muchos fármacos de quimioterapia buscan, precisamente, inducir apoptosis en las células cancerosas, aprovechando el mecanismo natural de muerte celular programada -esto permite eliminar las células tumorales de forma relativamente controlada, sin el daño colateral e inflamación que produciría una muerte celular masiva por necrosis.',
  no:{
    1:'La quimioterapia sí tiene una relación directa y bien documentada con la inducción de apoptosis en células cancerosas.',
    2:'Precisamente lo contrario: inducir apoptosis (en vez de necrosis) busca minimizar el daño al tejido sano circundante, gracias a su naturaleza limpia y no inflamatoria.',
    3:'La apoptosis, por su mecanismo de fagocitosis limpia de los cuerpos apoptóticos, NO dispara una respuesta inflamatoria fuerte, a diferencia de la necrosis.'
  },
  trampa:'No reconocer la ventaja específica de inducir apoptosis (en vez de necrosis) en el contexto de la quimioterapia: menor daño colateral e inflamación.',
  obj:'Explicar el fundamento de inducir apoptosis como estrategia terapéutica en quimioterapia.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.',
  tags:['apoptosis','quimioterapia','muerte celular controlada']
},
{
  id:'U9-AP-Q17', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Inflamación aguda', sub:'Mecanismo del calor y rubor',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué cambio vascular explica el calor y el rubor (enrojecimiento) en la inflamación aguda?',
  ops:['Vasodilatación local, que aumenta el flujo de sangre hacia la zona afectada', 'Vasoconstricción generalizada de toda la circulación', 'La formación de un trombo en el sitio de la lesión', 'La migración de neutrófilos hacia el tejido dañado'],
  ok:0,
  clave:'La vasodilatación local aumenta el flujo de sangre hacia la zona, explicando el calor y el rubor.',
  exp:'La inflamación aguda comienza con vasodilatación local, aumentando el flujo de sangre hacia la zona, lo que explica el calor y el rubor o enrojecimiento. Este cambio vascular, junto con el aumento de la permeabilidad vascular (que explica el tumor o hinchazón), forma parte de la respuesta vascular temprana de la inflamación aguda.',
  no:{
    1:'Es al revés: es la VASODILATACIÓN (no la vasoconstricción) la que explica el calor y el rubor en la inflamación aguda.',
    2:'La formación de un trombo no es el mecanismo que explica el calor y el rubor de la inflamación aguda.',
    3:'La migración de neutrófilos es un cambio CELULAR (quimiotaxis), no el cambio vascular que explica específicamente el calor y el rubor.'
  },
  trampa:'Confundir vasodilatación con vasoconstricción, o atribuir el calor y el rubor a un cambio celular en vez del cambio vascular correcto.',
  obj:'Explicar el mecanismo vascular del calor y el rubor en la inflamación aguda.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.',
  tags:['vasodilatación','calor','rubor','inflamación aguda']
},
{
  id:'U9-AP-Q18', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Inflamación aguda', sub:'Quimiotaxis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la quimiotaxis, en el contexto de la inflamación aguda?',
  ops:[
    'El proceso por el cual las células de defensa siguen un gradiente químico de concentración creciente hacia el origen del estímulo inflamatorio',
    'La formación de un coágulo dentro de un vaso sanguíneo', 'El proceso de desnaturalización de proteínas por calor', 'Un tipo específico de necrosis tisular'],
  ok:0,
  clave:'La quimiotaxis es el proceso por el cual las células siguen un gradiente químico creciente hacia el sitio de la lesión.',
  exp:'Los mediadores inflamatorios atraen activamente a las células de defensa hacia el sitio dañado, un proceso llamado quimiotaxis: las células siguen un gradiente químico de concentración creciente hacia el origen del estímulo. Es un mecanismo central de reclutamiento celular en la inflamación aguda, complementario a los cambios vasculares.',
  no:{
    1:'La formación de un coágulo intravascular corresponde a la trombosis, un concepto distinto de la quimiotaxis.',
    2:'La desnaturalización de proteínas por calor es un mecanismo de lesión celular, no de reclutamiento celular en la inflamación.',
    3:'La quimiotaxis no es un tipo de necrosis; es un proceso de migración celular dirigida por un gradiente químico.'
  },
  trampa:'Confundir la quimiotaxis con otros procesos de la patología, como la trombosis o la necrosis, que no describen el reclutamiento celular dirigido.',
  obj:'Definir la quimiotaxis en el contexto de la inflamación aguda.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.',
  tags:['quimiotaxis','gradiente químico','reclutamiento celular']
},
{
  id:'U9-AP-Q19', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Inflamación aguda', sub:'El neutrófilo como primera célula',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la primera célula en llegar al sitio de una inflamación aguda, y cuál es su función principal?',
  ops:['El neutrófilo, cuyo trabajo principal es fagocitar y destruir microorganismos', 'El macrófago, cuyo trabajo es formar granulomas', 'El linfocito B, cuyo trabajo es producir anticuerpos', 'Las plaquetas, cuyo trabajo es formar cicatrices'],
  ok:0,
  clave:'El neutrófilo es la primera célula en llegar en la inflamación aguda, y su función principal es fagocitar y destruir microorganismos.',
  exp:'El neutrófilo es la primera célula en llegar en la inflamación aguda (llega en minutos u horas, mucho antes que otras células inmunitarias), y su trabajo principal es fagocitar y destruir microorganismos. Los macrófagos, en cambio, predominan más en la inflamación crónica, un proceso más prolongado.',
  no:{
    1:'El macrófago predomina en la inflamación CRÓNICA, no como primera célula en la inflamación aguda; la formación de granulomas es un fenómeno de inflamación crónica.',
    2:'Los linfocitos B y la producción de anticuerpos corresponden a la respuesta inmunitaria adaptativa, no a la primera línea celular de la inflamación aguda.',
    3:'Las plaquetas participan en la hemostasia y la coagulación, no son la primera célula reclutada en la respuesta inflamatoria aguda.'
  },
  trampa:'Confundir el neutrófilo (primera célula en inflamación aguda) con el macrófago (predominante en inflamación crónica), invirtiendo su orden temporal de aparición.',
  obj:'Identificar al neutrófilo como la primera célula en la inflamación aguda y su función principal.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.',
  tags:['neutrófilo','inflamación aguda','fagocitosis']
},
{
  id:'U9-AP-Q20', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Inflamación crónica y granulomas', sub:'Granuloma tuberculoso',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una biopsia de ganglio linfático muestra un granuloma con necrosis caseosa en su centro, rodeado de macrófagos, células gigantes multinucleadas y linfocitos.',
  enunciado:'¿Qué diagnóstico sugiere fuertemente este patrón histológico combinado?',
  ops:[
    'Tuberculosis, ya que el granuloma con necrosis caseosa central es su patrón histológico clásico y muy específico',
    'Una neoplasia benigna sin ninguna relación con infección', 'Necrosis licuefactiva pura, sin componente inflamatorio crónico', 'Este patrón no tiene ningún significado diagnóstico específico'],
  ok:0,
  clave:'El granuloma con necrosis caseosa central es el patrón histológico clásico y muy específico de la tuberculosis.',
  exp:'La tuberculosis es el ejemplo clásico de esta combinación: el granuloma tuberculoso tiene típicamente necrosis caseosa en su centro, rodeada de macrófagos, células gigantes y linfocitos -un ejemplo perfecto de cómo la necrosis caseosa y la inflamación crónica con formación de granulomas confluyen en una sola lesión característica y altamente específica.',
  no:{
    1:'Este patrón (granuloma con necrosis caseosa) es característico de un proceso infeccioso específico (tuberculosis), no de una neoplasia benigna.',
    2:'La necrosis caseosa es un patrón distinto de la necrosis licuefactiva pura, y aquí se acompaña de un componente inflamatorio crónico organizado (el granuloma).',
    3:'Este patrón sí tiene un significado diagnóstico muy específico: es casi sinónimo de tuberculosis (u otras infecciones granulomatosas relacionadas).'
  },
  trampa:'No reconocer la combinación específica de necrosis caseosa central + granuloma como el patrón histológico prácticamente diagnóstico de tuberculosis.',
  obj:'Identificar el patrón histológico del granuloma tuberculoso con necrosis caseosa central.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.',
  tags:['granuloma','necrosis caseosa','tuberculosis','célula gigante']
},
{
  id:'U9-AP-Q21', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Inflamación crónica y granulomas', sub:'Cambio de protagonista celular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué cambio de protagonista celular ocurre al pasar de la inflamación aguda a la crónica?',
  ops:[
    'De neutrófilos (predominantes en la aguda) a macrófagos y linfocitos (predominantes en la crónica)',
    'De macrófagos a neutrófilos', 'No hay ningún cambio celular entre inflamación aguda y crónica', 'De linfocitos B a linfocitos T exclusivamente'],
  ok:0,
  clave:'El protagonista celular cambia de neutrófilos (aguda) a macrófagos y linfocitos (crónica).',
  exp:'Cuando el estímulo lesivo persiste más allá de lo que dura la respuesta aguda, la inflamación crónica aparece, y el protagonista celular cambia: en vez de neutrófilos (predominantes en la fase aguda), predominan los macrófagos, junto con linfocitos, en un proceso mucho más prolongado.',
  no:{
    1:'Es al revés: el cambio va de neutrófilos (aguda) hacia macrófagos y linfocitos (crónica), no en la dirección opuesta.',
    2:'Sí hay un cambio celular claro y bien caracterizado entre la fase aguda y la crónica de la inflamación.',
    3:'El cambio celular predominante es de neutrófilos hacia macrófagos y linfocitos en general, no específicamente entre subtipos de linfocitos.'
  },
  trampa:'Invertir el orden del cambio celular entre inflamación aguda (neutrófilos) y crónica (macrófagos y linfocitos).',
  obj:'Explicar el cambio de protagonista celular entre inflamación aguda y crónica.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.',
  tags:['inflamación crónica','macrófagos','neutrófilos','cambio celular']
},
{
  id:'U9-AP-Q22', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Inflamación crónica y granulomas', sub:'Propósito del granuloma',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el propósito biológico de la formación de un granuloma?',
  ops:[
    'Encerrar físicamente un agente persistente que el cuerpo no logra eliminar completamente, aislándolo del resto del tejido sano',
    'Destruir completamente y de forma inmediata cualquier agente infeccioso presente',
    'El granuloma no tiene ningún propósito biológico, es solo un hallazgo incidental',
    'El granuloma se forma exclusivamente en respuesta a traumatismos mecánicos, nunca a infecciones'
  ],
  ok:0,
  clave:'El granuloma encierra físicamente un agente persistente que el cuerpo no puede eliminar, aislándolo del tejido sano.',
  exp:'Un granuloma es una forma especializada y organizada de inflamación crónica que se forma cuando el cuerpo no logra eliminar completamente un agente persistente y en vez de eso lo "encierra" físicamente, aislándolo del resto del tejido sano -no lo elimina por completo, pero limita su capacidad de causar daño adicional mientras persiste esa contención.',
  no:{
    1:'Precisamente el granuloma se forma porque el cuerpo NO logra destruir completamente al agente; por eso opta por encerrarlo en vez de eliminarlo.',
    2:'El granuloma sí tiene un propósito biológico claro: contener un agente persistente que no puede eliminarse por completo.',
    3:'El granuloma se forma típicamente en respuesta a agentes persistentes como ciertas infecciones (tuberculosis) o cuerpos extraños, no exclusivamente traumatismos mecánicos.'
  },
  trampa:'No reconocer el propósito de contención (no de eliminación completa) que cumple la formación de un granuloma.',
  obj:'Explicar el propósito biológico de la formación de un granuloma.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.',
  tags:['granuloma','contención','agente persistente']
},
{
  id:'U9-AP-Q23', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Alteraciones hemodinámicas: trombosis y embolia', sub:'Componentes de la tríada de Virchow',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los tres componentes de la tríada de Virchow, que agrupan los mecanismos favorecedores de la formación de un trombo?',
  ops:[
    'Daño del endotelio vascular, estasis o flujo sanguíneo anormal, e hipercoagulabilidad',
    'Vasodilatación, quimiotaxis y fagocitosis', 'Necrosis, apoptosis e inflamación', 'Hipertrofia, hiperplasia y atrofia'],
  ok:0,
  clave:'La tríada de Virchow: daño endotelial, estasis/flujo anormal, e hipercoagulabilidad.',
  exp:'La tríada de Virchow agrupa los tres mecanismos que favorecen la formación de un trombo: daño del endotelio vascular, estasis o flujo sanguíneo anormal (turbulento o enlentecido), e hipercoagulabilidad (un estado de la sangre con mayor tendencia a coagular). Cualquier factor de riesgo de trombosis conocido encaja, casi siempre, en una o más de estas tres categorías.',
  no:{
    1:'Vasodilatación, quimiotaxis y fagocitosis son conceptos de la inflamación aguda, no de la tríada de Virchow relacionada con trombosis.',
    2:'Necrosis, apoptosis e inflamación son procesos distintos de patología general, no los componentes de la tríada de Virchow.',
    3:'Hipertrofia, hiperplasia y atrofia son adaptaciones celulares, un tema distinto de la tríada de Virchow.'
  },
  trampa:'Confundir los componentes de la tríada de Virchow con conceptos de otros temas de patología general (inflamación, adaptaciones celulares).',
  obj:'Recordar los tres componentes de la tríada de Virchow.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['tríada de Virchow','trombo','hipercoagulabilidad']
},
{
  id:'U9-AP-Q24', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Alteraciones hemodinámicas: trombosis y embolia', sub:'Trombosis venosa profunda y embolia pulmonar',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente hospitalizado por reposo prolongado desarrolla una trombosis venosa profunda en la pierna. Días después, presenta dificultad respiratoria súbita.',
  enunciado:'¿Qué complicación grave debe sospecharse, y cuál es el mecanismo que la explica?',
  ops:[
    'Embolia pulmonar: un fragmento del trombo venoso se desprendió, viajó hasta el corazón derecho y se alojó en la circulación pulmonar',
    'Un infarto de miocardio, sin relación con la trombosis venosa previa', 'Una necrosis caseosa pulmonar, típica de tuberculosis', 'La dificultad respiratoria no tiene relación con la trombosis venosa profunda'],
  ok:0,
  clave:'Embolia pulmonar: un fragmento del trombo venoso se desprende y se aloja en la circulación pulmonar.',
  exp:'La trombosis venosa (típicamente en las venas profundas de la pierna) es clínicamente relevante porque un fragmento de ese trombo puede desprenderse y viajar, a través del sistema venoso, hasta el corazón derecho y de ahí hacia la circulación pulmonar, donde puede alojarse como una embolia pulmonar, potencialmente grave -exactamente el cuadro descrito en este caso, con dificultad respiratoria súbita tras un factor de riesgo claro (reposo prolongado, causante de estasis venosa).',
  no:{
    1:'Un infarto de miocardio no es la complicación típica de una trombosis venosa profunda; la complicación clásica es la embolia pulmonar.',
    2:'La necrosis caseosa pulmonar es típica de tuberculosis, sin relación con el mecanismo de trombosis venosa y embolización descrito.',
    3:'La dificultad respiratoria sí tiene una relación directa y bien establecida con la trombosis venosa profunda, a través del mecanismo de embolia pulmonar.'
  },
  trampa:'No conectar la trombosis venosa profunda previa con la dificultad respiratoria súbita posterior, perdiendo el mecanismo de embolia pulmonar.',
  obj:'Identificar la embolia pulmonar como complicación de una trombosis venosa profunda.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['trombosis venosa profunda','embolia pulmonar','reposo prolongado']
},
{
  id:'U9-AP-Q25', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Alteraciones hemodinámicas: trombosis y embolia', sub:'Infarto por embolia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué circunstancia una embolia que obstruye un vaso sanguíneo conduce a un infarto (muerte del tejido)?',
  ops:[
    'Cuando el vaso obstruido no tiene circulación colateral suficiente para compensar la falta de riego',
    'Siempre que ocurre una embolia, sin ninguna excepción, se produce infarto inmediato', 'Solo si la embolia ocurre en el sistema nervioso central', 'La circulación colateral nunca influye en el resultado de una embolia'],
  ok:0,
  clave:'El infarto ocurre cuando el vaso obstruido no tiene circulación colateral suficiente para compensar.',
  exp:'Si el vaso obstruido por una embolia no tiene circulación colateral suficiente para compensar, el tejido que irrigaba sufre isquemia y, si se prolonga, infarto (muerte del tejido por falta de riego). La presencia de circulación colateral adecuada puede evitar o limitar el daño, incluso con una obstrucción vascular presente.',
  no:{
    1:'No toda embolia produce infarto inmediato; depende de si existe circulación colateral suficiente para compensar la obstrucción.',
    2:'El mecanismo (obstrucción sin circulación colateral suficiente) aplica a cualquier órgano, no exclusivamente al sistema nervioso central.',
    3:'La circulación colateral sí influye directamente en si una embolia resulta en infarto o el tejido logra mantenerse viable pese a la obstrucción.'
  },
  trampa:'Asumir que toda embolia produce infarto automáticamente, sin considerar el papel protector de la circulación colateral.',
  obj:'Explicar el papel de la circulación colateral en determinar si una embolia produce infarto.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['embolia','infarto','circulación colateral']
},
{
  id:'U9-AP-Q26', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Edema, congestión y shock', sub:'Causas de edema',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los tres mecanismos principales que pueden causar edema (acumulación anormal de líquido intersticial)?',
  ops:[
    'Aumento de la presión hidrostática vascular, disminución de la presión oncótica del plasma, y aumento de la permeabilidad vascular',
    'Exclusivamente la disminución de la temperatura corporal', 'Solo la acumulación de sangre dentro de los vasos, sin relación con líquido intersticial', 'El edema tiene una única causa posible, sin variación mecanística'],
  ok:0,
  clave:'Aumento de presión hidrostática, disminución de presión oncótica, y aumento de permeabilidad vascular son los tres mecanismos principales del edema.',
  exp:'El edema tiene múltiples causas posibles: aumento de la presión hidrostática dentro de los vasos (como en la insuficiencia cardíaca), disminución de la presión oncótica del plasma (por ejemplo, por falta de proteínas), o aumento de la permeabilidad vascular (como en la inflamación aguda). Reconocer estos tres mecanismos ayuda a entender por qué el edema puede tener causas clínicas muy distintas.',
  no:{
    1:'La temperatura corporal no es uno de los mecanismos principales que causan edema.',
    2:'La acumulación de sangre dentro de los vasos (sin salir al intersticio) corresponde a la congestión pasiva, un concepto distinto del edema.',
    3:'El edema tiene múltiples mecanismos posibles y bien diferenciados, no una única causa fija.'
  },
  trampa:'Reducir las causas del edema a un solo mecanismo, sin reconocer los tres factores principales (presión hidrostática, presión oncótica, permeabilidad vascular).',
  obj:'Identificar los tres mecanismos principales que pueden causar edema.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['edema','presión hidrostática','presión oncótica','permeabilidad vascular']
},
{
  id:'U9-AP-Q27', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Edema, congestión y shock', sub:'Shock hipovolémico vs. séptico',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia fundamental hay entre el shock hipovolémico y el shock séptico en cuanto al estado inicial del volumen circulante?',
  ops:[
    'El hipovolémico ocurre por pérdida real de volumen circulante; el séptico ocurre por vasodilatación generalizada descontrolada, pudiendo el volumen de sangre estar relativamente conservado al inicio',
    'Ambos tipos de shock tienen exactamente el mismo mecanismo subyacente',
    'El shock séptico siempre implica una pérdida real y masiva de volumen sanguíneo, igual que el hipovolémico',
    'El shock hipovolémico ocurre exclusivamente por infecciones graves'
  ],
  ok:0,
  clave:'El hipovolémico implica pérdida real de volumen; el séptico implica vasodilatación descontrolada con volumen inicialmente conservado.',
  exp:'El shock hipovolémico ocurre por pérdida real de volumen circulante (una hemorragia severa, deshidratación extrema); el shock séptico ocurre en el contexto de una infección grave, donde mediadores inflamatorios liberados en exceso provocan una vasodilatación generalizada y descontrolada, con caída de la presión arterial pese a que, a diferencia del hipovolémico, el volumen de sangre en sí puede estar relativamente conservado al inicio.',
  no:{
    1:'Tienen mecanismos claramente distintos: pérdida real de volumen frente a vasodilatación descontrolada con volumen inicialmente conservado.',
    2:'Es precisamente lo contrario: el shock séptico NO implica necesariamente pérdida real de volumen al inicio, a diferencia del hipovolémico.',
    3:'El shock hipovolémico ocurre por pérdida de volumen (hemorragia, deshidratación), no específicamente por infecciones graves, que corresponden al shock séptico.'
  },
  trampa:'Asumir que todo tipo de shock implica pérdida real de volumen circulante, sin distinguir el mecanismo vasodilatador del shock séptico.',
  obj:'Distinguir el mecanismo del shock hipovolémico del shock séptico.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['shock hipovolémico','shock séptico','vasodilatación','volumen circulante']
},
{
  id:'U9-AP-Q28', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Edema, congestión y shock', sub:'Congestión pasiva hepática',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con insuficiencia cardíaca derecha presenta un hígado aumentado de tamaño y congestivo.',
  enunciado:'¿Qué mecanismo explica este hallazgo hepático?',
  ops:[
    'Congestión pasiva: acumulación de sangre en el hígado por dificultad en el retorno venoso, secundaria a la falla del corazón derecho',
    'Necrosis caseosa hepática, típica de tuberculosis', 'Una neoplasia maligna primaria del hígado', 'El hallazgo no tiene ninguna relación con la función cardíaca'],
  ok:0,
  clave:'La congestión pasiva hepática se debe a acumulación de sangre por dificultad en el retorno venoso, secundaria a la falla del corazón derecho.',
  exp:'La congestión pasiva es la acumulación de SANGRE (no solo líquido) dentro de un tejido, por dificultad en el retorno venoso -el hígado congestivo de una insuficiencia cardíaca derecha es un ejemplo clásico: cuando el corazón derecho no bombea eficazmente, la sangre se represa hacia atrás en las venas que drenan hacia él, incluyendo las hepáticas, congestionando el hígado.',
  no:{
    1:'La necrosis caseosa es típica de tuberculosis, sin relación con el mecanismo de congestión venosa por insuficiencia cardíaca descrito en este caso.',
    2:'El hallazgo descrito (hígado congestivo en el contexto de insuficiencia cardíaca derecha) corresponde a congestión pasiva, no a una neoplasia.',
    3:'El hallazgo tiene una relación directa y bien establecida con la función cardíaca, específicamente con la insuficiencia del lado derecho del corazón.'
  },
  trampa:'No conectar la insuficiencia cardíaca derecha con el mecanismo de congestión pasiva hepática por dificultad en el retorno venoso.',
  obj:'Explicar la congestión pasiva hepática en el contexto de insuficiencia cardíaca derecha.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['congestión pasiva','insuficiencia cardíaca derecha','hígado congestivo']
},
{
  id:'U9-AP-Q29', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Edema, congestión y shock', sub:'Consecuencia sistémica del shock',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el shock, sin importar su causa específica, representa una emergencia médica grave?',
  ops:[
    'Porque el aporte de sangre y oxígeno a los tejidos deja de ser suficiente para sus necesidades metabólicas, con riesgo de lesión celular extendida en múltiples órganos si no se corrige a tiempo',
    'El shock nunca representa una emergencia médica real', 'El shock solo afecta a un único órgano específico, nunca de forma generalizada', 'El shock no tiene relación con el aporte de oxígeno a los tejidos'],
  ok:0,
  clave:'El shock compromete el aporte de sangre y oxígeno a los tejidos de forma generalizada, con riesgo de lesión celular en múltiples órganos.',
  exp:'El shock es una falla circulatoria generalizada y grave, en la que el aporte de sangre (y con ella, de oxígeno) a los tejidos deja de ser suficiente para sus necesidades metabólicas, con riesgo de lesión celular extendida en múltiples órganos si no se corrige a tiempo -por esta naturaleza generalizada y progresiva es que constituye una emergencia médica, sin importar cuál sea su causa específica (hipovolémico, séptico, u otro tipo).',
  no:{
    1:'El shock sí representa una emergencia médica grave, precisamente por el riesgo de lesión celular extendida en múltiples órganos.',
    2:'Es precisamente lo contrario: el shock afecta de forma GENERALIZADA a múltiples órganos, no a uno solo de forma aislada.',
    3:'El shock tiene una relación directa y central con el aporte de oxígeno a los tejidos, que es precisamente lo que se compromete.'
  },
  trampa:'Subestimar la naturaleza generalizada y multiorgánica del shock, tratándolo como un problema limitado a un solo órgano o sin urgencia real.',
  obj:'Explicar por qué el shock representa una emergencia médica generalizada.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['shock','falla circulatoria generalizada','emergencia médica']
},
{
  id:'U9-AP-Q30', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Edema, congestión y shock', sub:'Congestión vs. edema',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia fundamental hay entre la congestión pasiva y el edema?',
  ops:[
    'La congestión pasiva es acumulación de SANGRE dentro del lecho vascular de un tejido; el edema es acumulación de LÍQUIDO en el espacio intersticial, fuera de los vasos',
    'Ambos términos son exactamente sinónimos', 'La congestión pasiva ocurre exclusivamente en el corazón, y el edema exclusivamente en el hígado', 'El edema siempre implica sangre, nunca líquido'],
  ok:0,
  clave:'Congestión pasiva = sangre acumulada dentro del lecho vascular. Edema = líquido acumulado en el espacio intersticial, fuera de los vasos.',
  exp:'La congestión pasiva es la acumulación de SANGRE (no solo líquido) dentro de un tejido, por dificultad en el retorno venoso -la sangre permanece dentro del lecho vascular del órgano-. El edema, en cambio, es la acumulación anormal de LÍQUIDO en el espacio intersticial, fuera de los vasos sanguíneos -son conceptos relacionados pero mecanísticamente distintos.',
  no:{
    1:'Son conceptos distintos: uno implica sangre retenida dentro de los vasos, el otro implica líquido que salió al espacio intersticial.',
    2:'Ninguno de los dos términos está limitado a un solo órgano específico; ambos pueden ocurrir en distintos tejidos según la causa subyacente.',
    3:'Es al revés: la congestión pasiva implica sangre, y el edema implica líquido (que puede ser el componente líquido de la sangre extravasado, no sangre completa).'
  },
  trampa:'Tratar congestión pasiva y edema como sinónimos, sin distinguir si el fluido acumulado está dentro del lecho vascular (congestión) o en el espacio intersticial (edema).',
  obj:'Distinguir la congestión pasiva del edema según la localización del fluido acumulado.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['congestión pasiva','edema','espacio intersticial']
}

]);
