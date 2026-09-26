/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 11 (lote 7)
   Cubre PRE INTERNADO DE GINECO-OBSTETRICIA al estandar extenso
   (3 secciones, ~200-300 palabras por seccion, min 12-13).
   Septima y ultima materia del cuatrimestre 11 (1 credito, 4
   temas). Cierra el cuatrimestre 11 al 100%.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== PRE INTERNADO DE GINECO-OBSTETRICIA ==================== */
'rol-estudiante-servicio-gineco-obstetricia': {
  tema:'Rol del estudiante en el servicio de gineco-obstetricia',
  bloque:'Pre Internado de Gineco-Obstetricia', programa:'unirm', cuatri:11, min:13,
  idea:'El servicio de gineco-obstetricia tiene particularidades que exigen adaptar el rol general del estudiante -ya visto de forma amplia en Servicio Hospitalario Pre Clínico (10mo)- a un contexto con su propia dinámica: la sala de partos, la consulta ginecológica, y la particular sensibilidad de ambos entornos.',
  claves:['rol del estudiante en sala de partos','participación supervisada en gineco-obstetricia'],
  sigue:'historia-clinica-obstetrica-ginecologica-completa',
  secciones:[
    {
      t:'El rol del estudiante en la sala de partos',
      p:[
        'El *rol del estudiante en sala de partos* retoma los mismos principios generales ya vistos sobre participación supervisada en Servicio Hospitalario Pre Clínico -observar, participar activamente bajo supervisión, presentar de forma organizada- pero adaptados a un entorno con su propia dinámica particular: los tiempos de la sala de partos no son predecibles como los de una consulta programada, y el estudiante debe aprender a integrarse a ese ritmo sin interferir con la atención del equipo tratante en un momento clínicamente exigente.',
        'La sala de partos combina, de forma particularmente concentrada, varios de los principios ya vistos en distintos bloques de este pensum: la vigilancia sistemática del progreso (partograma, ya visto en Obstetricia I), la atención a signos de alarma que pueden cambiar rápidamente la conducta clínica, y un trabajo en equipo coordinado donde cada miembro, incluido el estudiante, tiene un rol claramente delimitado.'
      ]
    },
    {
      t:'La participación supervisada en gineco-obstetricia',
      p:[
        'La *participación supervisada en gineco-obstetricia* incluye, bajo la guía directa del equipo tratante, la recolección de información clínica (historia obstétrica y ginecológica, tema que se desarrolla en el siguiente tema de este bloque), la observación y eventual participación en procedimientos según el nivel de formación del estudiante, y la presentación organizada de casos siguiendo la misma estructura de comunicación clínica ya vista repetidamente en este pensum.',
        'Esta participación exige una sensibilidad particular, retomando la importancia ya vista sobre consentimiento y comunicación en el contexto del examen pélvico (Ginecología I): la presencia de un estudiante durante un examen ginecológico o un parto es una situación que exige explicar con claridad a la paciente su rol, y respetar su decisión si prefiere no tener un estudiante presente durante su atención.'
      ]
    },
    {
      t:'Por qué este rol exige una adaptación específica, no solo aplicar lo ya conocido',
      p:[
        'Aunque los principios generales del rol del estudiante ya fueron desarrollados con detalle en Servicio Hospitalario Pre Clínico, el contexto de gineco-obstetricia exige una adaptación específica: la naturaleza particularmente íntima y sensible de los exámenes ginecológicos y obstétricos, la posible urgencia impredecible de un parto en curso, y la doble consideración de la salud materna y fetal simultáneamente, son elementos que no están presentes de la misma forma en otros servicios hospitalarios más generales.',
        'Este tema abre el bloque completo de Pre Internado de Gineco-Obstetricia retomando el mismo espíritu ya visto en Servicio Hospitalario Pre Clínico: preparar al estudiante para la práctica clínica real que enfrentará en sus rotaciones, con la orientación específica que cada servicio particular exige antes de sumergirse de lleno en él.'
      ],
      foco:[
        '*Consideración clínica*: la presencia de un estudiante durante un examen ginecológico o un parto exige explicar con claridad su rol a la paciente, y respetar activamente su decisión si prefiere no tener un estudiante presente durante su atención.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 1.'
},

'historia-clinica-obstetrica-ginecologica-completa': {
  tema:'Historia clínica obstétrica y ginecológica completa',
  bloque:'Pre Internado de Gineco-Obstetricia', programa:'unirm', cuatri:11, min:13,
  idea:'Recopilar una historia obstétrica y ginecológica completa exige una estructura específica que va más allá de la anamnesis general ya vista en Ginecología I, integrando de forma organizada toda la información reproductiva relevante de la paciente.',
  claves:['historia obstétrica','fórmula obstétrica','antecedentes gineco-obstétricos'],
  sigue:'signos-alarma-embarazo',
  secciones:[
    {
      t:'La historia obstétrica como componente específico',
      p:[
        'La *historia obstétrica* recopila de forma estructurada la información relacionada con los embarazos previos de la paciente: cuántos ha tenido, cómo culminaron (partos vaginales, cesáreas, abortos), si hubo complicaciones en algún embarazo previo, y las características del embarazo actual si la paciente está gestando en el momento de la evaluación -esta información retoma directamente los conceptos ya vistos en el bloque completo de Obstetricia I, aplicados ahora como parte de una entrevista clínica estructurada.',
        'Recopilar esta información con precisión tiene relevancia clínica directa: un antecedente de una complicación obstétrica previa (como una hemorragia postparto o un trastorno hipertensivo del embarazo, ambos ya vistos en Obstetricia I) aumenta el riesgo de que la misma complicación se repita en un embarazo posterior, orientando una vigilancia más cercana desde el inicio del control prenatal actual.'
      ]
    },
    {
      t:'La fórmula obstétrica como notación estandarizada',
      p:[
        'La *fórmula obstétrica* es una notación estandarizada y abreviada que resume de forma rápida los antecedentes obstétricos de una mujer, típicamente incluyendo el número de embarazos totales (gestaciones), el número de partos (a término y pretérmino), el número de abortos, y el número de hijos actualmente vivos -esta notación permite que cualquier miembro del equipo de salud, con solo revisar esta fórmula abreviada, entienda rápidamente el historial reproductivo esencial de la paciente sin necesidad de leer una narrativa extensa.',
        'Esta fórmula retoma directamente la misma lógica ya vista sobre comunicación estructurada y eficiente en otros contextos de este pensum: condensar información compleja en un formato estandarizado y reconocible por todo el equipo, reduciendo el riesgo de que información relevante se pierda o se malinterprete en la transmisión entre distintos profesionales.'
      ]
    },
    {
      t:'Los antecedentes gineco-obstétricos en conjunto',
      p:[
        'Los *antecedentes gineco-obstétricos* combinan la historia obstétrica ya descrita con los antecedentes ginecológicos más generales ya vistos en la anamnesis ginecológica de Ginecología I (antecedentes menstruales, métodos anticonceptivos utilizados, antecedentes de infecciones o condiciones ginecológicas previas), formando un cuadro completo del historial reproductivo de la paciente, tanto obstétrico como ginecológico.',
        'Este tema retoma e integra directamente el conocimiento ya desarrollado en dos bloques completos de este cuatrimestre -Obstetricia I y Ginecología I- aplicándolo ahora en el formato práctico de una historia clínica estructurada que el estudiante deberá recopilar de forma sistemática en su rotación real, sin omitir ningún componente relevante por premura o desconocimiento de la estructura esperada.'
      ],
      foco:[
        '*Consideración clínica*: un antecedente de complicación obstétrica previa (hemorragia, trastorno hipertensivo) aumenta el riesgo de que la misma complicación se repita, orientando una vigilancia más cercana desde el inicio del control prenatal actual.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 9.'
},

'signos-alarma-embarazo': {
  tema:'Signos de alarma en el embarazo',
  bloque:'Pre Internado de Gineco-Obstetricia', programa:'unirm', cuatri:11, min:13,
  idea:'Reconocer los signos de alarma que indican cuándo una gestante debe ser referida o evaluada de forma urgente integra, en un solo conjunto práctico, las complicaciones obstétricas ya estudiadas de forma individual a lo largo de Obstetricia I.',
  claves:['signos de alarma obstétrica','cuándo referir a una gestante','urgencia obstétrica'],
  sigue:'documentacion-gineco-obstetricia',
  secciones:[
    {
      t:'Los signos de alarma obstétrica como síntesis práctica',
      p:[
        'Los *signos de alarma obstétrica* integran, en un conjunto práctico y memorizable, las manifestaciones clínicas de las principales complicaciones ya estudiadas de forma individual en Obstetricia I: sangrado vaginal (ya sea del primer o del tercer trimestre), cefalea intensa persistente o alteraciones visuales (orientando hacia trastornos hipertensivos del embarazo), disminución marcada de los movimientos fetales, fiebre, y dolor abdominal significativo, entre otros.',
        'Reconocer estos signos como un conjunto integrado, no como hallazgos aislados sin conexión entre sí, retoma la misma lógica ya vista repetidamente en este pensum sobre "banderas rojas" que cambian la conducta clínica de forma inmediata -cualquiera de estos signos, presente en una gestante, amerita una evaluación que va más allá del control prenatal rutinario ya visto en Obstetricia I.'
      ]
    },
    {
      t:'Cuándo referir a una gestante a un nivel de atención superior',
      p:[
        'Saber *cuándo referir a una gestante* a un nivel de atención con mayor capacidad resolutiva es una decisión clínica central en el pre internado, especialmente en contextos donde el primer contacto de la gestante puede ser un centro de salud con recursos limitados -reconocer tempranamente un signo de alarma y decidir la referencia oportuna, en vez de intentar manejar una complicación potencialmente grave sin los recursos apropiados, puede cambiar significativamente el pronóstico tanto materno como fetal.',
        'Esta decisión de referir retoma directamente la misma lógica ya vista sobre reconocer los límites de la propia capacidad de manejo en un contexto determinado, un principio aplicable no solo en obstetricia sino en cualquier escenario clínico de este pensum: reconocer cuándo una situación excede los recursos disponibles en el lugar actual es tan importante como reconocer el signo de alarma en sí mismo.'
      ]
    },
    {
      t:'La urgencia obstétrica como categoría que exige acción inmediata',
      p:[
        'Una *urgencia obstétrica* es una situación donde la vida de la madre, del feto, o de ambos está en riesgo inmediato, exigiendo una respuesta sin demora -hemorragia obstétrica significativa, eclampsia, sufrimiento fetal agudo, entre otras condiciones ya vistas en Obstetricia I, son ejemplos de escenarios que se clasifican dentro de esta categoría de máxima prioridad clínica.',
        'Este tema cierra retomando el principio general ya visto sobre la importancia de la oportunidad temprana: reconocer una urgencia obstétrica a tiempo, y actuar (ya sea manejando directamente si los recursos lo permiten, o refiriendo de forma inmediata si no) sin demoras evitables, es precisamente lo que distingue un pronóstico favorable de uno desfavorable en muchas de estas situaciones de máximo riesgo.'
      ],
      foco:[
        '*Consideración clínica*: reconocer tempranamente un signo de alarma obstétrico y decidir la referencia oportuna a un nivel de atención con mayor capacidad resolutiva, en vez de intentar manejar una complicación grave sin los recursos apropiados, puede cambiar significativamente el pronóstico materno y fetal.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 40.'
},

'documentacion-gineco-obstetricia': {
  tema:'Documentación en gineco-obstetricia',
  bloque:'Pre Internado de Gineco-Obstetricia', programa:'unirm', cuatri:11, min:13,
  idea:'Este último tema cierra el bloque completo de Pre Internado de Gineco-Obstetricia, y con él, todo el cuatrimestre 11, retomando la importancia de la documentación clínica ya vista en Servicio Hospitalario Pre Clínico, ahora aplicada específicamente al contexto obstétrico y ginecológico.',
  claves:['nota de evolución obstétrica','partograma como documento','registro del trabajo de parto'],
  sigue:'parto-distocico-causas',
  secciones:[
    {
      t:'La nota de evolución obstétrica',
      p:[
        'La *nota de evolución obstétrica* sigue la misma lógica estructurada ya vista en la nota de evolución general de Servicio Hospitalario Pre Clínico (formato SOAP), pero incorporando elementos específicos del contexto obstétrico: altura uterina, frecuencia cardíaca fetal, presentación fetal, presencia o ausencia de contracciones, y cualquier signo de alarma obstétrica ya vistos en el tema anterior de este bloque, que deben documentarse de forma sistemática en cada evaluación de una gestante hospitalizada.',
        'Esta adaptación específica del formato general a un contexto particular retoma un principio ya visto repetidamente en este pensum: las herramientas de comunicación estructurada no son rígidas ni genéricas, sino que se adaptan al contexto clínico específico donde se aplican, conservando su estructura general mientras incorporan los elementos particulares relevantes para ese escenario.'
      ]
    },
    {
      t:'El partograma como documento formal, no solo herramienta de vigilancia',
      p:[
        'El *partograma como documento*, ya introducido en Obstetricia I como herramienta de vigilancia del progreso del trabajo de parto, cumple también una función de documentación formal: queda como registro permanente en el expediente de la paciente, permitiendo que, incluso después de finalizado el parto, cualquier revisión posterior del caso pueda reconstruir con precisión cómo progresó el trabajo de parto y qué decisiones se tomaron en cada momento específico.',
        'Esta doble función del partograma -vigilancia en tiempo real y documentación permanente posterior- retoma la misma lógica ya vista sobre el expediente clínico como memoria institucional del caso (Servicio Hospitalario Pre Clínico): un partograma completo y bien llenado no solo ayuda a decidir en el momento, sino que también permite, más adelante, entender con precisión lo que ocurrió durante ese trabajo de parto específico.'
      ]
    },
    {
      t:'El registro del trabajo de parto y el cierre de todo el cuatrimestre',
      p:[
        'El *registro del trabajo de parto* integra, en un documento coherente, toda la información generada durante este proceso: el partograma con la vigilancia del progreso, las notas de evolución periódicas, cualquier intervención realizada, y finalmente el registro completo del nacimiento y del alumbramiento -este registro completo es lo que permite, después del hecho, verificar que la atención brindada siguió los principios ya vistos a lo largo de todo el bloque de Obstetricia I de este mismo cuatrimestre.',
        'Este tema cierra no solo el bloque de Pre Internado de Gineco-Obstetricia, sino el cuatrimestre 11 completo: desde la Pediatría I hasta esta documentación final, cada materia de este cuatrimestre ha desarrollado un aspecto distinto de la atención a la mujer, al niño, y a las condiciones que los afectan, y este último tema recuerda que documentar con precisión cada uno de estos encuentros clínicos es lo que permite que ese conocimiento clínico se traduzca en una atención segura, verificable, y coordinada entre todo el equipo de salud.'
      ],
      foco:[
        '*Consideración clínica*: un partograma y un registro del trabajo de parto completos y bien documentados no solo apoyan la toma de decisiones en el momento, sino que permiten reconstruir con precisión, después del hecho, cómo progresó la atención de esa gestante específica.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 21.'
}

});
