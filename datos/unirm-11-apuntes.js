/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 11 (lote 1)
   Cubre PEDIATRÍA I al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Primera y mas grande materia
   del cuatrimestre 11 (6 creditos, 18 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== PEDIATRÍA I ==================== */
'crecimiento-desarrollo-normal': {
  tema:'Crecimiento y desarrollo normal',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'La pediatría se distingue de la medicina de adultos en un punto fundamental: el paciente pediátrico no es un adulto pequeño, es un organismo en proceso continuo de cambio, y ese proceso -el crecimiento y el desarrollo- es en sí mismo el signo vital más importante a vigilar.',
  claves:['curva de crecimiento','hitos del desarrollo','percentil de peso y talla'],
  sigue:'evaluacion-recien-nacido-normal',
  secciones:[
    {
      t:'Crecimiento: el cambio medible en tamaño',
      p:[
        'El *crecimiento* es el aumento medible en tamaño corporal -peso, talla, perímetro cefálico- y se evalúa comparando la medición de un niño específico contra una *curva de crecimiento* poblacional de referencia (las curvas de la OMS son el estándar más usado), expresada en *percentiles*: un niño en el percentil 50 de peso está exactamente en la mediana de su grupo de edad y sexo, mientras uno en el percentil 3 está entre los más pequeños de ese grupo.',
        'Lo que más importa clínicamente no es tanto el percentil aislado de una sola medición, sino la *trayectoria* del niño a lo largo del tiempo: un niño que se mantiene consistentemente en el percentil 25 está creciendo de forma normal para su propio patrón, mientras uno que cruza percentiles hacia abajo (por ejemplo, de percentil 50 a percentil 10 en pocos meses) es una señal de alarma que amerita investigación, incluso si el percentil final todavía parece "normal" en términos absolutos.'
      ]
    },
    {
      t:'Desarrollo: la adquisición progresiva de habilidades',
      p:[
        'El *desarrollo* es distinto del crecimiento: se refiere a la adquisición progresiva de habilidades motoras, cognitivas, del lenguaje y sociales, organizadas en *hitos del desarrollo* con una edad esperada aproximada -por ejemplo, sostener la cabeza alrededor de los 3 meses, sentarse sin apoyo alrededor de los 6 meses, caminar sin ayuda alrededor de los 12-15 meses, decir las primeras palabras con significado alrededor de los 12 meses.',
        'Estos hitos no son fechas exactas sino rangos esperados, y existe variación normal entre niños; sin embargo, un hito claramente retrasado más allá del rango esperado, o la pérdida de una habilidad ya adquirida (regresión del desarrollo), son señales que ameritan evaluación más profunda -este tema se retoma con más detalle en el tema de trastornos del desarrollo psicomotor, más adelante en este mismo bloque.'
      ]
    },
    {
      t:'Por qué esta vigilancia es responsabilidad de cada consulta pediátrica',
      p:[
        'A diferencia de la medicina de adultos, donde el peso y la talla se registran pero rara vez son el foco central de la consulta, en pediatría *cada consulta*, sin importar el motivo original, es una oportunidad para verificar que el crecimiento y el desarrollo del niño sigan su curso esperado -un niño que consulta por un resfriado común también debería, en esa misma visita, tener su peso y talla registrados y comparados con su curva.',
        'Esta vigilancia constante retoma la lógica ya vista en la sección de niveles de prevención (Medicina Preventiva, 9no): detectar tempranamente una desviación del crecimiento o del desarrollo -antes de que se vuelva evidente o irreversible- permite una intervención oportuna, mucho más efectiva que esperar a que el problema sea clínicamente obvio.'
      ],
      foco:[
        '*Consideración clínica*: en toda consulta pediátrica, sin importar el motivo de consulta, registrar y comparar peso, talla y perímetro cefálico contra la curva de crecimiento correspondiente es un hábito que no debe omitirse.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 1.'
},

'evaluacion-recien-nacido-normal': {
  tema:'Evaluación del recién nacido normal',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'Los primeros minutos y horas de vida son el momento donde más rápidamente se debe distinguir entre un recién nacido que hace una transición normal a la vida extrauterina y uno que necesita intervención inmediata.',
  claves:['test de Apgar','examen físico del recién nacido','reflejos primitivos'],
  sigue:'lactancia-materna-alimentacion-complementaria',
  secciones:[
    {
      t:'El test de Apgar como primera evaluación estructurada',
      p:[
        'El *test de Apgar* evalúa cinco parámetros (frecuencia cardíaca, esfuerzo respiratorio, tono muscular, irritabilidad refleja, color) al minuto y a los cinco minutos de vida, cada uno puntuado de 0 a 2, para un máximo de 10 puntos -una puntuación de 7 o más generalmente indica una buena transición a la vida extrauterina, mientras una puntuación baja señala la necesidad de reanimación neonatal inmediata.',
        'Es importante entender que el Apgar es una herramienta de evaluación estructurada en el momento, no un predictor definitivo del pronóstico neurológico a largo plazo -un Apgar bajo al minuto que mejora significativamente a los cinco minutos, tras una reanimación efectiva, tiene un pronóstico mucho más favorable que uno que se mantiene bajo de forma persistente.'
      ]
    },
    {
      t:'El examen físico sistemático del recién nacido',
      p:[
        'El *examen físico del recién nacido* sigue una secuencia sistemática que revisa, entre otros elementos: la piel (color, presencia de ictericia, marcas de nacimiento), la cabeza (fontanelas, suturas craneales, posibles caput succedaneum o cefalohematoma), el tórax y la auscultación cardiopulmonar, el abdomen (cordón umbilical, palpación de masas), los genitales, la columna vertebral, y las caderas (maniobra de Barlow y Ortolani para descartar displasia de cadera).',
        'Este examen busca tanto confirmar la normalidad como detectar de forma temprana malformaciones congénitas o signos de patología que, identificados en las primeras horas de vida, permiten una intervención mucho más oportuna que si se detectan semanas o meses después -retomando la misma lógica de detección temprana ya vista en el tema anterior sobre crecimiento y desarrollo.'
      ]
    },
    {
      t:'Los reflejos primitivos como indicador neurológico',
      p:[
        'Los *reflejos primitivos* (reflejo de Moro, reflejo de prensión palmar y plantar, reflejo de búsqueda, reflejo de succión, reflejo tónico-cervical asimétrico) son respuestas automáticas presentes en el recién nacido normal, cuya presencia y simetría son un indicador indirecto de la integridad del sistema nervioso central en ese momento.',
        'Estos reflejos tienen una edad esperada de desaparición conforme el sistema nervioso madura y se desarrolla el control voluntario -su persistencia más allá de esa edad esperada, su ausencia desde el inicio, o una marcada asimetría entre ambos lados del cuerpo, son hallazgos que ameritan evaluación neurológica adicional, no una simple curiosidad exploratoria.'
      ],
      foco:[
        '*Consideración clínica*: un Apgar bajo al minuto que mejora significativamente a los cinco minutos, tras reanimación efectiva, tiene un pronóstico mucho más favorable que uno persistentemente bajo -la tendencia en el tiempo importa tanto como el valor aislado.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 8.'
},

'lactancia-materna-alimentacion-complementaria': {
  tema:'Lactancia materna y alimentación complementaria',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'La forma en que se alimenta a un niño durante sus primeros dos años tiene consecuencias medibles sobre su crecimiento, su desarrollo cognitivo y su riesgo de enfermedad, tanto inmediato como a largo plazo.',
  claves:['lactancia materna exclusiva','ablactación','alimentación complementaria'],
  sigue:'esquema-vacunacion-infantil',
  secciones:[
    {
      t:'La lactancia materna exclusiva y sus beneficios',
      p:[
        'La *lactancia materna exclusiva* -alimentar al lactante únicamente con leche materna, sin agua, fórmula ni otros alimentos- se recomienda durante los primeros seis meses de vida, por múltiples beneficios bien documentados: aporte nutricional completo y adaptado a las necesidades del lactante, transferencia de anticuerpos maternos que reducen el riesgo de infecciones, y beneficios que se extienden más allá de lo nutricional, incluyendo el vínculo afectivo entre madre e hijo.',
        'Estos beneficios no son solo para el lactante: la lactancia materna también se asocia con beneficios para la madre, incluyendo una recuperación uterina más rápida en el puerperio y una reducción del riesgo de ciertos cánceres a largo plazo -retomando la conexión ya vista en el puerperio normal (Obstetricia I) sobre los cambios fisiológicos que continúan después del parto.'
      ]
    },
    {
      t:'La ablactación: el momento de introducir otros alimentos',
      p:[
        'La *ablactación* (o introducción de la alimentación complementaria) es el proceso mediante el cual se comienzan a ofrecer alimentos distintos a la leche materna, recomendado a partir de los seis meses de edad -antes de esa edad, el sistema digestivo del lactante y su desarrollo motor (control de la cabeza, capacidad de tragar alimentos semisólidos) generalmente no están suficientemente maduros para procesar otros alimentos de forma segura.',
        'El momento de la ablactación no es arbitrario: introducirla demasiado temprano se asocia con mayor riesgo de infecciones gastrointestinales y de alergias alimentarias, mientras introducirla demasiado tarde puede comprometer el aporte de hierro y otros nutrientes que la leche materna sola ya no cubre completamente después de los seis meses.'
      ]
    },
    {
      t:'Principios de la alimentación complementaria',
      p:[
        'La *alimentación complementaria* debe seguir principios claros: iniciar con alimentos de consistencia semisólida (purés), incrementar gradualmente la consistencia y variedad conforme el niño madura, introducir un alimento nuevo a la vez para poder identificar reacciones alérgicas, y mantener la lactancia materna junto con los nuevos alimentos, no sustituirla por completo de forma abrupta.',
        'Un error frecuente es introducir alimentos con bajo valor nutricional (jugos azucarados, alimentos ultraprocesados) como parte de la alimentación complementaria temprana, estableciendo preferencias alimentarias poco saludables desde una edad temprana -la calidad nutricional de estos primeros alimentos tiene un impacto que se extiende más allá de la infancia, retomando la conexión con el bloque de Nutrición de este mismo cuatrimestre.'
      ],
      foco:[
        '*Consideración clínica*: la lactancia materna exclusiva hasta los seis meses, seguida de una alimentación complementaria oportuna y de buena calidad nutricional, es una de las intervenciones de mayor impacto y menor costo en toda la pediatría preventiva.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 5.'
},

'esquema-vacunacion-infantil': {
  tema:'Esquema de vacunación infantil',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'La vacunación infantil sistemática es, junto con la lactancia materna y el agua potable, una de las intervenciones de salud pública con mayor impacto documentado en la reducción de la mortalidad infantil.',
  claves:['esquema nacional de vacunación','vacuna pentavalente','cadena de frío'],
  sigue:'control-nino-sano',
  secciones:[
    {
      t:'El esquema nacional de vacunación',
      p:[
        'El *esquema nacional de vacunación* dominicano establece qué vacunas debe recibir un niño y a qué edad, cubriendo enfermedades como la tuberculosis (BCG, al nacer), la poliomielitis, la difteria, el tétanos, la tos ferina, la hepatitis B, el Haemophilus influenzae tipo b, el rotavirus, el neumococo, el sarampión, la rubéola y la parotiditis, entre otras -este esquema retoma directamente el concepto de inmunizaciones ya visto en niveles de prevención (Medicina Preventiva, 9no), aplicándolo ahora con el calendario específico de la infancia.',
        'Seguir el esquema en las edades recomendadas, no solo eventualmente completarlo, es clínicamente relevante: muchas de estas enfermedades representan mayor riesgo precisamente en los primeros meses y años de vida, por lo que un retraso significativo en la vacunación deja al niño vulnerable durante la ventana de mayor riesgo.'
      ]
    },
    {
      t:'La vacuna pentavalente como ejemplo de vacuna combinada',
      p:[
        'La *vacuna pentavalente* combina en una sola inyección la protección contra cinco enfermedades (difteria, tétanos, tos ferina, hepatitis B y Haemophilus influenzae tipo b), un ejemplo de cómo las vacunas combinadas reducen el número de inyecciones necesarias sin comprometer la protección individual contra cada enfermedad -una consideración práctica importante para mejorar la adherencia al esquema completo.',
        'Entender la lógica de las vacunas combinadas ayuda también a responder con evidencia las dudas frecuentes de los padres sobre si "demasiadas vacunas a la vez" podría sobrecargar el sistema inmune del niño: el sistema inmune de un lactante enfrenta, de forma natural, muchísimos más antígenos en su entorno diario que los contenidos en cualquier combinación de vacunas administradas en una sola visita.'
      ]
    },
    {
      t:'La cadena de frío y por qué su ruptura invalida la vacuna',
      p:[
        'La *cadena de frío* es el sistema de almacenamiento y transporte que mantiene las vacunas dentro del rango de temperatura adecuado (generalmente entre 2 y 8 grados Celsius) desde su fabricación hasta el momento de su aplicación; una ruptura de esta cadena -exposición a temperaturas fuera de ese rango- puede inactivar el componente inmunogénico de la vacuna, haciendo que la dosis administrada no genere la protección esperada, aunque el procedimiento de aplicación en sí sea correcto.',
        'Este tema retoma la lógica ya vista sobre gestión de recursos en salud (Gerencia en Salud, 10mo): la eficacia de una vacuna no depende solo de su composición biológica, sino también de todo el sistema logístico que la mantiene en condiciones adecuadas hasta el momento de su uso -un fallo en cualquier eslabón de esa cadena logística puede anular el beneficio clínico esperado.'
      ],
      foco:[
        '*Consideración clínica*: ante la duda de si una vacuna fue almacenada correctamente (por ejemplo, tras un corte de electricidad prolongado en el centro de salud), la conducta prudente es no confiar en la dosis administrada y consultar el protocolo institucional correspondiente, en vez de asumir que la vacuna sigue siendo efectiva.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 12.'
},

'control-nino-sano': {
  tema:'Control de niño sano',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'La consulta de control de niño sano no es una formalidad administrativa: es la estructura organizada mediante la cual se aplican, de forma sistemática y en el momento oportuno, todo lo visto hasta ahora en este bloque -crecimiento, desarrollo, alimentación y vacunación.',
  claves:['consulta de niño sano','tamizaje neonatal','anticipación de riesgos'],
  sigue:'fiebre-en-el-nino',
  secciones:[
    {
      t:'Qué incluye la consulta de niño sano',
      p:[
        'La *consulta de niño sano* es una visita programada, no motivada por una enfermedad aguda, que incluye la evaluación sistemática del crecimiento (peso, talla, perímetro cefálico contra la curva correspondiente), la evaluación del desarrollo según la edad, la revisión y aplicación del esquema de vacunación correspondiente, la evaluación de la alimentación, y un examen físico completo orientado a detectar cualquier hallazgo que amerite seguimiento.',
        'Este formato estructurado integra directamente los cuatro temas anteriores de este bloque en una sola consulta periódica, con una frecuencia más cercana en los primeros meses de vida (donde el cambio es más rápido) y progresivamente más espaciada conforme el niño crece.'
      ]
    },
    {
      t:'El tamizaje neonatal',
      p:[
        'El *tamizaje neonatal* es un conjunto de pruebas realizadas en los primeros días de vida para detectar tempranamente enfermedades metabólicas, endocrinas o genéticas que, sin tratamiento oportuno, pueden causar daño irreversible -por ejemplo, el hipotiroidismo congénito o la fenilcetonuria, condiciones que son tratables si se detectan a tiempo, pero que generan consecuencias graves e irreversibles en el desarrollo si el diagnóstico se retrasa.',
        'Este tamizaje retoma directamente la lógica de detección temprana ya vista en niveles de prevención (Medicina Preventiva, 9no): estas enfermedades, en su fase inicial asintomática, no serían detectadas por un examen físico convencional, y sin un tamizaje sistemático la oportunidad de intervención temprana se perdería.'
      ]
    },
    {
      t:'La anticipación de riesgos como función central de la consulta',
      p:[
        'La *anticipación de riesgos* es la función de la consulta de niño sano que va más allá de detectar problemas ya presentes: consiste en orientar a los padres o cuidadores sobre los riesgos esperables en la siguiente etapa del desarrollo del niño, antes de que ocurran -por ejemplo, advertir sobre la prevención de caídas y de ingestión de objetos pequeños justo antes de la edad en que el niño comienza a gatear y a explorar su entorno con la boca.',
        'Esta anticipación convierte la consulta de niño sano en una herramienta preventiva activa, no solo reactiva: el profesional de salud, al conocer la secuencia esperada del desarrollo, puede adelantarse a los riesgos típicos de cada etapa en vez de simplemente responder a los problemas después de que ya ocurrieron.'
      ],
      foco:[
        '*Consideración clínica*: la consulta de niño sano es el momento estructurado donde se integran crecimiento, desarrollo, alimentación y vacunación en una sola evaluación periódica; omitirla o tratarla como un simple trámite desperdicia la oportunidad preventiva más valiosa de la pediatría.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 3.'
},

'fiebre-en-el-nino': {
  tema:'Fiebre en el niño',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:14,
  idea:'La fiebre es el motivo de consulta pediátrica más frecuente, y su abordaje correcto depende menos de la temperatura exacta registrada y más de la edad del niño, su apariencia general, y la búsqueda sistemática de signos de alarma.',
  claves:['fiebre sin foco','manejo de la fiebre pediátrica','signos de alarma en fiebre'],
  sigue:'infecciones-respiratorias-agudas-pediatria',
  secciones:[
    {
      t:'Fiebre sin foco: el reto diagnóstico según la edad',
      p:[
        'La *fiebre sin foco* es la fiebre en un niño sin que el examen físico ni la historia clínica identifiquen una causa evidente en ese momento -el manejo de este escenario varía dramáticamente según la edad: un lactante menor de tres meses con fiebre sin foco se considera de alto riesgo de infección bacteriana grave y generalmente amerita evaluación y manejo hospitalario, mientras un niño mayor, previamente sano y con buen estado general, puede manejarse de forma ambulatoria con seguimiento cercano.',
        'Esta diferencia por edad no es arbitraria: el sistema inmune de un lactante muy pequeño es menos capaz de contener una infección bacteriana localizada, con mayor riesgo de progresión rápida a sepsis, mientras un niño mayor con un sistema inmune más maduro tiene mayor capacidad de contener la mayoría de infecciones comunes sin progresar a una enfermedad grave.'
      ]
    },
    {
      t:'El manejo de la fiebre: más allá de bajar la temperatura',
      p:[
        'El *manejo de la fiebre pediátrica* debe distinguir entre tratar el malestar que genera la fiebre (con antipiréticos como el paracetamol o el ibuprofeno, en dosis ajustadas al peso del niño) y buscar activamente la causa subyacente -bajar la temperatura no "cura" la enfermedad de base, y un niño que mejora su apariencia general tras el antipirético, aunque siga con fiebre, es un dato clínicamente más tranquilizador que uno que permanece decaído a pesar de la fiebre controlada.',
        'Un error frecuente entre padres, y a veces entre profesionales inexpertos, es enfocarse exclusivamente en el número exacto de la temperatura, cuando la evidencia clínica más útil está en la *apariencia general* del niño: un niño con fiebre alta pero alerta, interactivo y que bebe bien líquidos es clínicamente distinto de uno con fiebre moderada pero decaído, con mala perfusión o poco reactivo.'
      ]
    },
    {
      t:'Signos de alarma que cambian la conducta',
      p:[
        'Los *signos de alarma* ante un niño con fiebre incluyen: apariencia tóxica o muy decaída, dificultad respiratoria, mala perfusión periférica, petequias o púrpura, rigidez de nuca, llanto inconsolable o gemido, letargia marcada, o rechazo completo de líquidos -la presencia de cualquiera de estos signos cambia la conducta de manejo ambulatorio a evaluación urgente, sin importar el valor exacto de la temperatura registrada.',
        'Este enfoque retoma directamente la lógica ya vista de "banderas rojas" en otros bloques clínicos: en pediatría, igual que en la evaluación de cualquier paciente, la búsqueda activa de signos de alarma es lo que realmente determina la urgencia de la situación, no un único parámetro aislado interpretado fuera de contexto.'
      ],
      foco:[
        '*Consideración clínica*: en un lactante menor de tres meses, la fiebre sin foco debe considerarse potencialmente grave hasta demostrar lo contrario, por el mayor riesgo de infección bacteriana grave en ese grupo de edad.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 20.'
},

'infecciones-respiratorias-agudas-pediatria': {
  tema:'Infecciones respiratorias agudas en pediatría',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'Las infecciones respiratorias son el grupo de enfermedades más frecuente en la consulta pediátrica, y distinguir entre las distintas presentaciones -según la edad y la localización de la vía aérea afectada- determina el manejo apropiado.',
  claves:['bronquiolitis','neumonía en el niño','crup laríngeo'],
  sigue:'enfermedad-diarreica-aguda-pediatria',
  secciones:[
    {
      t:'Bronquiolitis: la infección característica del lactante',
      p:[
        'La *bronquiolitis* es una infección viral de la vía aérea inferior, característica de lactantes menores de dos años (con mayor frecuencia en menores de seis meses), causada más comúnmente por el virus sincitial respiratorio, que se presenta con dificultad respiratoria, sibilancias, y con frecuencia un cuadro catarral previo -su manejo es principalmente de soporte (hidratación, oxígeno si es necesario), ya que no existe un tratamiento antiviral específico efectivo para la mayoría de los casos.',
        'Un punto clave de este tema es reconocer que la bronquiolitis, a diferencia del asma, ocurre típicamente en el primer episodio de sibilancias de un lactante muy pequeño, con un cuadro viral evidente, mientras las sibilancias recurrentes en niños mayores orientan más hacia asma -esta distinción se retoma con más profundidad en el tema de asma en la infancia, más adelante en este bloque.'
      ]
    },
    {
      t:'Neumonía en el niño: reconociendo el patrón por edad',
      p:[
        'La *neumonía en el niño* se presenta con fiebre, tos, taquipnea (frecuencia respiratoria elevada para la edad) y con frecuencia dificultad respiratoria -la taquipnea es, de hecho, uno de los signos clínicos más sensibles para sospechar neumonía en un niño con fiebre y tos, incluso antes de contar con una radiografía de tórax, retomando la lectura sistemática de radiografía de tórax que se profundiza en Imagenología de este mismo cuatrimestre.',
        'El agente causal más probable varía según la edad: en los primeros meses de vida predominan los virus, mientras en niños mayores aumenta la proporción de neumonías bacterianas (principalmente neumocócicas) -esta variación por edad influye directamente en la decisión de iniciar o no tratamiento antibiótico empírico, una aplicación directa de la lógica de terapéutica antimicrobiana dirigida ya vista en Farmacoterapéutica (10mo).'
      ]
    },
    {
      t:'Crup laríngeo: el estridor característico',
      p:[
        'El *crup laríngeo* (o laringotraqueítis) es una infección viral que afecta la laringe y la tráquea, característica de niños entre uno y seis años, que se presenta con el hallazgo distintivo de tos "perruna" o tos traqueal, estridor inspiratorio (un sonido áspero y agudo al inhalar, distinto de las sibilancias espiratorias de la bronquiolitis o el asma), y disfonía.',
        'La severidad del crup se evalúa principalmente por la presencia y el grado del estridor: un estridor solo audible con el llanto o la agitación indica un cuadro leve, mientras un estridor presente incluso en reposo señala un compromiso de la vía aérea más significativo que amerita un manejo más cercano -esta distinción por severidad clínica retoma la misma lógica de evaluación sistemática ya vista en otros escenarios de urgencia pediátrica de este bloque.'
      ],
      foco:[
        '*Consideración clínica*: distinguir el sonido respiratorio ayuda al diagnóstico diferencial -sibilancias espiratorias orientan hacia bronquiolitis o asma, mientras estridor inspiratorio orienta hacia crup laríngeo, una distinción clínica simple pero de alto valor diagnóstico.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 24.'
},

'enfermedad-diarreica-aguda-pediatria': {
  tema:'Enfermedad diarreica aguda en pediatría',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'La enfermedad diarreica aguda sigue siendo una causa importante de morbimortalidad infantil en contextos con acceso limitado a agua potable y saneamiento, y su principal riesgo clínico inmediato es la deshidratación, no la diarrea en sí misma.',
  claves:['deshidratación por diarrea','plan A B C de hidratación','diarrea aguda infantil'],
  sigue:'desnutricion-infantil',
  secciones:[
    {
      t:'La diarrea aguda infantil y su causa más frecuente',
      p:[
        'La *diarrea aguda infantil* se define como el aumento en la frecuencia y la disminución en la consistencia de las evacuaciones, con una duración típicamente menor a catorce días; la causa más frecuente en niños es viral (principalmente rotavirus en lactantes no vacunados), seguida de causas bacterianas y parasitarias, retomando la conexión ya vista sobre las enfermedades parasitarias en Patología Infecciosa de este mismo cuatrimestre.',
        'La vacunación contra el rotavirus, ya vista en el esquema de vacunación infantil, ha reducido de forma documentada la incidencia de diarrea grave por esta causa en las poblaciones con buena cobertura vacunal -un ejemplo concreto de cómo la prevención primaria (vacunación) reduce la carga de una enfermedad que, de otra forma, requeriría manejo curativo repetido.'
      ]
    },
    {
      t:'La deshidratación como el verdadero riesgo clínico',
      p:[
        'La *deshidratación por diarrea* es la principal causa de morbimortalidad asociada a este cuadro, no la diarrea en sí misma: la pérdida de líquidos y electrolitos a través de las evacuaciones puede llevar rápidamente a un niño, especialmente un lactante pequeño con menor reserva fisiológica, a un estado de deshidratación clínicamente significativo si no se repone adecuadamente.',
        'Evaluar el grado de deshidratación mediante signos clínicos (elasticidad de la piel, estado de las mucosas, presencia de lágrimas al llorar, nivel de alerta, frecuencia y calidad del pulso) es más práctico y accesible en la mayoría de los entornos que depender de pruebas de laboratorio, y determina directamente el plan de manejo a seguir.'
      ]
    },
    {
      t:'Los planes A, B y C de hidratación',
      p:[
        'El *plan A B C de hidratación* organiza el manejo según el grado de deshidratación evaluado: el Plan A es para un niño sin deshidratación clínica, con manejo domiciliario mediante sales de rehidratación oral y continuación de la alimentación habitual; el Plan B es para deshidratación leve a moderada, con rehidratación oral supervisada en el centro de salud; y el Plan C es para deshidratación grave, que requiere rehidratación intravenosa urgente.',
        'Este esquema retoma directamente la lógica ya vista sobre deshidratación en pediatría, más adelante en este mismo bloque, y aplica un principio general válido en toda la medicina: escalonar la intervención según la severidad real del cuadro, sin sobretratar los casos leves ni subestimar los casos graves.'
      ],
      foco:[
        '*Consideración clínica*: en un niño con diarrea aguda, la evaluación clínica del grado de deshidratación -no la frecuencia o el aspecto de las evacuaciones- es lo que determina el plan de manejo apropiado.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 27.'
},

'desnutricion-infantil': {
  tema:'Desnutrición infantil',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'La desnutrición infantil, especialmente en los primeros dos años de vida, tiene consecuencias que pueden ser irreversibles sobre el desarrollo físico y cognitivo, lo que hace de su detección temprana una prioridad clínica, no solo un hallazgo antropométrico.',
  claves:['desnutrición aguda','desnutrición crónica','marasmo y kwashiorkor'],
  sigue:'anemia-en-la-infancia',
  secciones:[
    {
      t:'Desnutrición aguda: la pérdida reciente de peso',
      p:[
        'La *desnutrición aguda* refleja un déficit reciente de peso en relación con la talla del niño (bajo peso para la talla), generalmente asociado a un evento reciente que limitó el aporte nutricional adecuado (enfermedad aguda, interrupción de la alimentación) -a diferencia de la desnutrición crónica, la desnutrición aguda puede revertirse relativamente rápido con una intervención nutricional oportuna, precisamente porque refleja un déficit reciente y no un daño estructural acumulado.',
        'Identificar la desnutrición aguda a tiempo retoma directamente la lógica de vigilancia continua ya vista en crecimiento y desarrollo normal, al inicio de este bloque: un niño que cruza percentiles de peso hacia abajo de forma acelerada, incluso sin llegar todavía a un percentil extremo, ya está mostrando la trayectoria de una desnutrición aguda en desarrollo.'
      ]
    },
    {
      t:'Desnutrición crónica: el retraso de talla acumulado',
      p:[
        'La *desnutrición crónica* (o talla baja para la edad) refleja un déficit nutricional sostenido en el tiempo, generalmente durante los primeros mil días de vida (desde la concepción hasta los dos años), con consecuencias que incluyen no solo la talla baja definitiva sino también un impacto documentado sobre el desarrollo cognitivo, que a diferencia de la desnutrición aguda, es mucho más difícil de revertir una vez establecido.',
        'Esta ventana de los primeros mil días retoma la importancia ya vista de la lactancia materna y la alimentación complementaria oportuna: intervenir nutricionalmente durante este periodo crítico tiene un impacto mucho mayor sobre el desarrollo definitivo del niño que una intervención equivalente realizada después de esta ventana.'
      ]
    },
    {
      t:'Marasmo y kwashiorkor: las formas graves de desnutrición',
      p:[
        'El *marasmo* es la forma de desnutrición grave por déficit calórico global (proteínas, carbohidratos y grasas), caracterizada por una pérdida severa de masa muscular y de tejido adiposo, dando al niño una apariencia de "piel y huesos", sin edema asociado; el *kwashiorkor* es la forma de desnutrición grave por déficit predominantemente proteico, caracterizada por edema (particularmente notable en la cara y las extremidades), cambios en la piel y el cabello, y distensión abdominal.',
        'Ambas formas representan desnutrición grave y requieren manejo hospitalario especializado, con reintroducción cuidadosa y gradual de la alimentación -una reintroducción demasiado rápida puede precipitar el síndrome de realimentación, una complicación metabólica grave que retoma la importancia de un manejo escalonado, similar a la lógica ya vista en los planes de hidratación del tema anterior.'
      ],
      foco:[
        '*Consideración clínica*: la desnutrición crónica es mucho más difícil de revertir que la desnutrición aguda, precisamente porque refleja un daño acumulado durante la ventana crítica de los primeros mil días de vida -la prevención en esa ventana vale más que la intervención tardía.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 6.'
},

'anemia-en-la-infancia': {
  tema:'Anemia en la infancia',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:12,
  idea:'La anemia por déficit de hierro es la deficiencia nutricional más frecuente en la infancia, y su relevancia va más allá del hallazgo de laboratorio: se asocia con consecuencias documentadas sobre el desarrollo cognitivo del niño si no se corrige oportunamente.',
  claves:['anemia ferropénica infantil','suplementación con hierro','anemia en el lactante'],
  sigue:'enfermedades-exantematicas',
  secciones:[
    {
      t:'La anemia ferropénica infantil y sus causas típicas',
      p:[
        'La *anemia ferropénica infantil* es la deficiencia de hierro suficiente como para afectar la producción normal de hemoglobina, siendo la causa más frecuente de anemia en la infancia -en el lactante, el riesgo aumenta particularmente entre los seis y los veinticuatro meses de edad, un periodo donde las reservas de hierro con las que nace el niño (acumuladas durante el embarazo) se agotan, mientras las demandas de hierro aumentan por el crecimiento acelerado propio de esta etapa.',
        'La introducción tardía o de baja calidad de la alimentación complementaria, ya vista en el tema correspondiente de este bloque, es un factor de riesgo directo: si los alimentos introducidos después de los seis meses no incluyen fuentes adecuadas de hierro, el riesgo de anemia ferropénica aumenta significativamente en este periodo de mayor vulnerabilidad.'
      ]
    },
    {
      t:'Consecuencias que van más allá del laboratorio',
      p:[
        'La relevancia clínica de la anemia ferropénica infantil va más allá de la cifra de hemoglobina en el laboratorio: existe evidencia consistente de que la deficiencia de hierro, particularmente en los primeros dos años de vida, se asocia con alteraciones documentadas en el desarrollo cognitivo y motor, algunas de las cuales pueden no revertirse completamente incluso después de corregir la anemia.',
        'Esta consecuencia retoma directamente la misma lógica de "ventana crítica" ya vista en desnutrición infantil: así como la desnutrición crónica en los primeros mil días tiene un impacto difícil de revertir, la anemia ferropénica no corregida oportunamente en ese mismo periodo puede dejar una huella sobre el desarrollo que la simple corrección posterior de la anemia no necesariamente revierte por completo.'
      ]
    },
    {
      t:'La suplementación con hierro como intervención preventiva',
      p:[
        'La *suplementación con hierro*, ya sea de forma universal en poblaciones de alto riesgo o dirigida a lactantes identificados con factores de riesgo específicos, es una intervención preventiva de bajo costo y alto impacto -el objetivo no es solo tratar la anemia ya establecida, sino prevenir que se desarrolle durante la ventana de mayor riesgo entre los seis y los veinticuatro meses de edad.',
        'Este enfoque preventivo retoma directamente la lógica de niveles de prevención ya vista en Medicina Preventiva (9no): suplementar con hierro antes de que se desarrolle la anemia (prevención primaria) es clínicamente más valioso que esperar a detectarla por laboratorio y tratarla después (prevención secundaria), precisamente por el riesgo de consecuencias sobre el desarrollo que la corrección tardía no siempre revierte del todo.'
      ],
      foco:[
        '*Consideración clínica*: la anemia ferropénica en el lactante no es solo un hallazgo de laboratorio a corregir; su prevención oportuna, mediante una alimentación complementaria adecuada y suplementación cuando corresponda, protege el desarrollo cognitivo del niño en una ventana que después es difícil de recuperar.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 15.'
},

'enfermedades-exantematicas': {
  tema:'Enfermedades exantemáticas',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'Las enfermedades exantemáticas -aquellas que se manifiestan con una erupción cutánea característica- son un grupo clásico de la pediatría donde el patrón visual de la erupción, combinado con el cuadro clínico acompañante, con frecuencia permite un diagnóstico clínico sin necesidad de pruebas de laboratorio.',
  claves:['sarampión','varicela','exantema súbito'],
  sigue:'asma-en-la-infancia',
  secciones:[
    {
      t:'Sarampión: la enfermedad prevenible que puede reaparecer',
      p:[
        'El *sarampión* es una infección viral altamente contagiosa que se presenta con fiebre alta, tos, coriza, conjuntivitis, y un exantema maculopapular característico que típicamente inicia en la cara y se disemina de forma descendente hacia el tronco y las extremidades -las manchas de Koplik (pequeñas manchas blanquecinas en la mucosa oral) son un hallazgo precoz y muy específico que puede preceder al exantema.',
        'El sarampión es prevenible mediante la vacunación incluida en el esquema nacional ya visto en este bloque, y su reaparición en una población -incluso años después de haber sido considerado controlado- generalmente refleja una caída en la cobertura vacunal por debajo del umbral necesario para mantener la inmunidad de rebaño, un concepto que retoma directamente la importancia de sostener las tasas de vacunación altas y consistentes.'
      ]
    },
    {
      t:'Varicela: el exantema en distintas etapas simultáneas',
      p:[
        'La *varicela*, causada por el virus varicela-zóster, se caracteriza por un exantema vesicular pruriginoso que evoluciona en varias etapas (mácula, pápula, vesícula, costra), con la particularidad distintiva de que, en un momento dado, pueden observarse lesiones en distintas etapas simultáneamente en la misma zona del cuerpo -un patrón conocido como "cielo estrellado" que ayuda a diferenciarla de otras erupciones donde todas las lesiones están en la misma etapa.',
        'Aunque generalmente es una enfermedad autolimitada en niños sanos, la varicela puede complicarse con sobreinfección bacteriana de las lesiones cutáneas por el rascado, o de forma menos frecuente con complicaciones más graves; también existe una vacuna disponible contra esta enfermedad, otra aplicación de la prevención primaria ya vista repetidamente en este bloque.'
      ]
    },
    {
      t:'Exantema súbito: la fiebre alta que precede al exantema',
      p:[
        'El *exantema súbito* (o roséola), causado típicamente por el virus del herpes humano tipo 6, es característico de lactantes entre seis meses y dos años, y sigue un patrón temporal distintivo: varios días de fiebre alta, con un niño por lo demás en buen estado general, seguidos de la desaparición súbita de la fiebre coincidiendo con la aparición de un exantema maculopapular rosado, generalmente en el tronco.',
        'Este patrón -fiebre alta que cede justo cuando aparece el exantema- es clínicamente útil de reconocer, porque contrasta con otras enfermedades exantemáticas donde la fiebre y el exantema coexisten desde el inicio; reconocer este patrón evita estudios innecesarios en un lactante que, salvo por la fiebre alta inicial, se mantiene con buen estado general durante todo el cuadro.'
      ],
      foco:[
        '*Consideración clínica*: la secuencia temporal entre la fiebre y la aparición del exantema, junto con la distribución y las características de las lesiones, con frecuencia permite distinguir entre las principales enfermedades exantemáticas sin necesidad de pruebas de laboratorio.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 22.'
},

'asma-en-la-infancia': {
  tema:'Asma en la infancia',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'El asma es la enfermedad crónica más frecuente de la infancia, y su reconocimiento oportuno -distinguiéndola de un episodio aislado de sibilancias virales- permite iniciar un manejo que reduce significativamente las crisis y su impacto en la calidad de vida del niño.',
  claves:['sibilancias recurrentes','crisis asmática pediátrica','inhalador con espaciador'],
  sigue:'convulsion-febril',
  secciones:[
    {
      t:'Sibilancias recurrentes: cuándo sospechar asma',
      p:[
        'Las *sibilancias recurrentes* -episodios repetidos de sibilancias, no un único episodio aislado asociado a una infección viral- son el dato clínico central que orienta hacia el diagnóstico de asma en un niño, especialmente cuando se acompañan de factores como antecedentes familiares de asma o alergias, o síntomas que empeoran con desencadenantes específicos (ejercicio, exposición a alérgenos, cambios de clima).',
        'Esta distinción retoma directamente la comparación ya hecha en el tema de bronquiolitis, más atrás en este bloque: un primer episodio de sibilancias en un lactante muy pequeño con cuadro viral evidente orienta más hacia bronquiolitis, mientras episodios recurrentes en un niño algo mayor, especialmente con los factores de riesgo mencionados, orientan hacia asma como diagnóstico probable.'
      ]
    },
    {
      t:'La crisis asmática y su evaluación de severidad',
      p:[
        'La *crisis asmática pediátrica* es el empeoramiento agudo de los síntomas de asma, evaluado por signos como la dificultad respiratoria, el uso de músculos accesorios de la respiración, la capacidad de hablar en frases completas o solo en palabras sueltas, y la saturación de oxígeno -esta evaluación de severidad determina si el manejo puede realizarse de forma ambulatoria con broncodilatadores o si amerita atención de urgencia.',
        'Reconocer los signos de una crisis grave a tiempo -igual que la búsqueda de signos de alarma ya vista en fiebre en el niño- evita el retraso en un manejo que, cuanto antes se inicie en una crisis significativa, mejor responde: esperar a que el niño esté en franca dificultad respiratoria antes de buscar atención reduce las opciones de manejo disponibles y aumenta el riesgo de una evolución desfavorable.'
      ]
    },
    {
      t:'El inhalador con espaciador como pilar del tratamiento',
      p:[
        'El *inhalador con espaciador* es la forma preferida de administrar broncodilatadores en niños, porque el espaciador (una cámara que se coloca entre el inhalador y la boca del niño) mejora significativamente la cantidad de medicamento que realmente llega a la vía aérea, en comparación con el uso del inhalador solo -un niño pequeño con frecuencia no logra coordinar la inhalación con la activación del inhalador, y el espaciador resuelve ese problema técnico.',
        'Enseñar correctamente la técnica de uso del inhalador con espaciador a los padres o cuidadores es tan importante como prescribir el medicamento correcto: un tratamiento farmacológicamente adecuado pero mal administrado, por una técnica inhalatoria deficiente, con frecuencia se traduce en un control insuficiente de los síntomas, generando la falsa impresión de que "el tratamiento no funciona".'
      ],
      foco:[
        '*Consideración clínica*: ante un niño con sibilancias recurrentes -no un episodio aislado- vale la pena investigar activamente el diagnóstico de asma, ya que un manejo apropiado y una técnica inhalatoria correcta reducen significativamente el impacto de la enfermedad en su calidad de vida.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 25.'
},

'convulsion-febril': {
  tema:'Convulsión febril',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'La convulsión febril, aunque alarmante para cualquier padre que la presencia, es en la mayoría de los casos un evento benigno y autolimitado -la clave clínica está en distinguir correctamente entre la forma simple y la forma compleja, porque el pronóstico y el estudio necesario difieren.',
  claves:['convulsión febril simple','convulsión febril compleja','manejo de la convulsión en el niño'],
  sigue:'maltrato-infantil',
  secciones:[
    {
      t:'La convulsión febril simple: el escenario más frecuente y de mejor pronóstico',
      p:[
        'La *convulsión febril simple* es una convulsión generalizada (compromete todo el cuerpo, no un lado específico), de duración breve (generalmente menos de quince minutos), que no se repite dentro de las siguientes 24 horas, en un niño típicamente entre seis meses y cinco años, asociada a fiebre pero sin evidencia de infección del sistema nervioso central u otra causa neurológica identificable.',
        'Este tipo de convulsión, aunque genera comprensible angustia en los padres al presenciarla, tiene un pronóstico excelente: no se asocia con daño neurológico permanente, y el riesgo de desarrollar epilepsia a largo plazo en estos niños es solo ligeramente mayor que en la población general -información importante para transmitir con claridad a los padres, cuyo nivel de angustia con frecuencia no corresponde al riesgo real.'
      ]
    },
    {
      t:'La convulsión febril compleja: cuándo profundizar el estudio',
      p:[
        'La *convulsión febril compleja* se distingue de la simple por tener al menos una de estas características: duración mayor a quince minutos, compromiso de solo una parte del cuerpo (focal) en vez de generalizada, o recurrencia dentro de las siguientes 24 horas -estas características, a diferencia de la forma simple, ameritan una evaluación más profunda para descartar una causa neurológica subyacente distinta de la simple fiebre.',
        'Esta distinción retoma la misma lógica ya vista repetidamente en este bloque: no todo hallazgo clínico similar en apariencia (en este caso, "una convulsión con fiebre") tiene el mismo significado o pronóstico, y las características específicas del evento -más que la presencia de fiebre en sí misma- son las que determinan si se trata de un evento benigno o de uno que amerita mayor investigación.'
      ]
    },
    {
      t:'El manejo inmediato de la convulsión en el niño',
      p:[
        'El *manejo de la convulsión en el niño*, en el momento agudo, prioriza proteger al niño de lesiones (colocarlo en una superficie segura, de lado, sin restringir sus movimientos ni introducir objetos en la boca) y cronometrar la duración del evento, ya que esa duración es precisamente el dato que ayudará después a clasificar la convulsión como simple o compleja.',
        'Si la convulsión se prolonga más allá de cinco minutos sin ceder espontáneamente, se considera una urgencia que requiere manejo farmacológico para detenerla, retomando la lógica ya vista de reconocer cuándo un evento clínico deja de ser observable de forma expectante y pasa a requerir intervención activa e inmediata.'
      ],
      foco:[
        '*Consideración clínica*: la mayoría de las convulsiones febriles son simples y de excelente pronóstico; explicar esto con claridad a los padres, sin minimizar su angustia, es parte central del manejo -junto con la búsqueda activa de las características que distinguirían una convulsión compleja.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 30.'
},

'maltrato-infantil': {
  tema:'Maltrato infantil',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:14,
  idea:'El maltrato infantil es una causa de morbimortalidad prevenible que exige del profesional de salud una actitud de sospecha activa, porque muchas veces la única oportunidad de intervenir a tiempo depende de que alguien en el sistema de salud lo reconozca antes de que sea demasiado tarde.',
  claves:['maltrato físico infantil','negligencia infantil','notificación obligatoria de maltrato'],
  sigue:'trastornos-desarrollo-psicomotor',
  secciones:[
    {
      t:'Maltrato físico infantil: hallazgos que deben generar sospecha',
      p:[
        'El *maltrato físico infantil* debe sospecharse ante ciertos hallazgos que, aunque no son exclusivos del maltrato, tienen una probabilidad desproporcionadamente alta de estar asociados a este: lesiones en distintas etapas de curación simultáneas (similar en lógica al patrón de la varicela ya visto, pero aquí una señal de alarma, no de benignidad), lesiones en zonas poco habituales para una caída accidental, patrones de lesión con forma reconocible (marcas de objetos específicos), o una historia clínica que no explica de forma consistente el mecanismo de la lesión observada.',
        'El dato de la *inconsistencia* entre la historia relatada y el hallazgo físico es, con frecuencia, la señal más importante: una explicación que cambia entre distintos cuidadores, que no corresponde al desarrollo motor esperado del niño para esa edad (por ejemplo, atribuir una fractura a una caída en un lactante que todavía no tiene la capacidad motora de generar ese mecanismo), o que resulta poco plausible para el tipo de lesión observada.'
      ]
    },
    {
      t:'Negligencia infantil: el maltrato por omisión',
      p:[
        'La *negligencia infantil* es la falta de provisión de las necesidades básicas del niño -alimentación adecuada, atención médica oportuna, supervisión apropiada para su edad, higiene- de forma sostenida, no como un descuido puntual y aislado; a diferencia del maltrato físico, la negligencia es una forma de maltrato por omisión, con frecuencia menos visible en un examen físico único pero con consecuencias acumulativas igualmente serias sobre el crecimiento, el desarrollo y la salud del niño.',
        'Retomando directamente los temas de crecimiento y desarrollo normal, y de desnutrición infantil, ya vistos en este bloque: una desnutrición crónica o un retraso significativo del desarrollo, sin una causa médica que lo explique, debe hacer considerar activamente la negligencia como posible factor contribuyente, no asumir automáticamente que se trata solo de una limitación de recursos familiares sin ninguna intervención posible.'
      ]
    },
    {
      t:'La notificación obligatoria como responsabilidad del profesional de salud',
      p:[
        'La *notificación obligatoria de maltrato* es la responsabilidad legal y ética del profesional de salud de reportar la sospecha razonable de maltrato infantil a las autoridades correspondientes, incluso sin tener una certeza absoluta -el umbral para notificar no es la certeza del maltrato, sino la sospecha razonable basada en los hallazgos, precisamente porque esperar una certeza total antes de actuar puede significar una demora que ponga al niño en mayor riesgo.',
        'Esta responsabilidad de notificar, aunque genere incomodidad o dudas sobre "estar equivocándose", retoma la misma lógica ya vista sobre preguntar cuando hay una duda (Servicio Hospitalario Pre Clínico, 10mo): el sistema de protección infantil está diseñado para investigar y confirmar o descartar la sospecha, un rol que no le corresponde al profesional de salud de forma aislada -su responsabilidad es notificar, no resolver el caso por sí mismo.'
      ],
      foco:[
        '*Consideración clínica*: ante hallazgos inconsistentes con la historia relatada, o ante un patrón de lesiones sugestivo, la conducta apropiada es notificar la sospecha a las autoridades correspondientes, sin necesidad de tener una certeza absoluta antes de hacerlo.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 4.'
},

'trastornos-desarrollo-psicomotor': {
  tema:'Trastornos del desarrollo psicomotor',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'Un retraso en el desarrollo psicomotor, detectado y abordado tempranamente, con frecuencia tiene un pronóstico mucho más favorable que el mismo retraso identificado tardíamente, cuando la ventana de mayor plasticidad neurológica ya se ha reducido.',
  claves:['retraso del desarrollo psicomotor','tamizaje del desarrollo','signos de alarma del desarrollo'],
  sigue:'deshidratacion-en-pediatria',
  secciones:[
    {
      t:'El retraso del desarrollo psicomotor',
      p:[
        'El *retraso del desarrollo psicomotor* es la adquisición significativamente más lenta de lo esperado de los hitos motores, cognitivos, del lenguaje o sociales ya vistos en el tema de crecimiento y desarrollo normal, al inicio de este bloque -puede afectar un área específica del desarrollo (por ejemplo, solo el lenguaje) o ser global, comprometiendo múltiples áreas simultáneamente, una distinción relevante porque orienta hacia causas y pronósticos distintos.',
        'Un principio importante es que el retraso del desarrollo no es un diagnóstico final en sí mismo, sino un hallazgo clínico que amerita investigar la causa subyacente -que puede ir desde condiciones genéticas o congénitas, hasta factores ambientales como la falta de estimulación adecuada o, retomando el tema anterior, la negligencia infantil.'
      ]
    },
    {
      t:'El tamizaje del desarrollo como herramienta sistemática',
      p:[
        'El *tamizaje del desarrollo* utiliza herramientas estandarizadas, aplicadas de forma sistemática en las consultas de niño sano ya vistas en este bloque, para detectar de forma objetiva un posible retraso, en vez de depender únicamente de la impresión subjetiva del profesional o de la preocupación (o falta de ella) de los padres.',
        'Este enfoque sistemático es importante porque un retraso del desarrollo, especialmente en sus formas más leves, puede no ser evidente en una evaluación clínica breve y no estructurada -las herramientas de tamizaje estandarizadas reducen la probabilidad de que un retraso real pase desapercibido simplemente porque el niño "se veía bien" en una impresión general poco sistemática.'
      ]
    },
    {
      t:'Signos de alarma que ameritan evaluación inmediata',
      p:[
        'Los *signos de alarma del desarrollo* incluyen la pérdida de una habilidad ya adquirida (regresión del desarrollo, un hallazgo particularmente preocupante que siempre amerita evaluación urgente), la ausencia completa de un hito clave más allá de un margen razonable de la edad esperada, o una discrepancia marcada entre el desarrollo del niño y el de sus pares de la misma edad.',
        'La intervención temprana ante estos signos de alarma retoma directamente la lógica de la ventana crítica ya vista en desnutrición infantil y en anemia en la infancia: el sistema nervioso central tiene mayor capacidad de adaptación y recuperación (plasticidad neurológica) en los primeros años de vida, por lo que una intervención iniciada tempranamente con frecuencia logra mejores resultados que la misma intervención iniciada años después, cuando esa ventana de mayor plasticidad ya se ha reducido.'
      ],
      foco:[
        '*Consideración clínica*: la pérdida de una habilidad del desarrollo ya adquirida (regresión) es siempre un signo de alarma que amerita evaluación inmediata, distinto de un simple retraso en la adquisición de un hito nuevo.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 2.'
},

'deshidratacion-en-pediatria': {
  tema:'Deshidratación en pediatría',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'La deshidratación en el niño, aunque frecuentemente asociada a la diarrea ya vista en este bloque, puede tener múltiples causas, y su evaluación sistemática por grados es la base para decidir el tratamiento apropiado en cualquier escenario que la genere.',
  claves:['grados de deshidratación','rehidratación oral','rehidratación intravenosa pediátrica'],
  sigue:'dolor-abdominal-en-el-nino',
  secciones:[
    {
      t:'Los grados de deshidratación y su evaluación clínica',
      p:[
        'Los *grados de deshidratación* -generalmente clasificados en ninguna, leve a moderada, y grave- se evalúan mediante signos clínicos ya introducidos en el tema de enfermedad diarreica aguda: elasticidad de la piel (signo del pliegue cutáneo), humedad de las mucosas, presencia de lágrimas, nivel de alerta y actividad del niño, frecuencia cardíaca, y en casos más avanzados, signos de compromiso circulatorio como el llenado capilar prolongado.',
        'Esta evaluación por grados no es exclusiva de la diarrea: cualquier condición que genere una pérdida significativa de líquidos (vómitos persistentes, fiebre alta sostenida sin reposición adecuada, ingesta oral insuficiente por cualquier causa) puede llevar a distintos grados de deshidratación, y la misma lógica de evaluación clínica sistemática aplica sin importar la causa subyacente específica.'
      ]
    },
    {
      t:'La rehidratación oral como primera línea',
      p:[
        'La *rehidratación oral*, mediante sales de rehidratación oral con una composición específica de electrolitos y glucosa, es el tratamiento de elección para la deshidratación leve a moderada, retomando directamente los planes A y B ya vistos en enfermedad diarreica aguda -es una intervención efectiva, de bajo costo, y que evita los riesgos asociados a un procedimiento invasivo como la vía intravenosa cuando no es estrictamente necesaria.',
        'Un error frecuente es subestimar la efectividad de la rehidratación oral bien administrada, recurriendo de forma innecesaria a la vía intravenosa incluso en casos de deshidratación leve a moderada donde la vía oral sería igualmente efectiva -esto retoma la lógica ya vista sobre escalonar la intervención según la severidad real, sin sobretratar los casos que no lo requieren.'
      ]
    },
    {
      t:'Cuándo la rehidratación intravenosa es necesaria',
      p:[
        'La *rehidratación intravenosa pediátrica* está indicada en la deshidratación grave (equivalente al Plan C ya visto), cuando existe compromiso hemodinámico significativo, cuando el niño no tolera la vía oral por vómitos persistentes o alteración del estado de conciencia, o cuando la rehidratación oral ya intentada ha fracasado en corregir el déficit -en estos escenarios, esperar a completar una rehidratación oral que no está funcionando retrasa una intervención que el niño necesita de forma más urgente.',
        'El cálculo del volumen y la velocidad de reposición intravenosa en pediatría debe ajustarse cuidadosamente al peso del niño y al grado de deshidratación estimado, con reevaluación clínica frecuente durante el proceso -un ajuste excesivamente rápido o excesivamente lento de líquidos conlleva riesgos propios, retomando la importancia general de individualizar cualquier intervención terapéutica según la respuesta clínica observada, no solo según un protocolo aplicado de forma rígida.'
      ],
      foco:[
        '*Consideración clínica*: la vía oral, cuando es tolerada y el grado de deshidratación lo permite, es preferible a la vía intravenosa por su menor riesgo y similar efectividad -reservar la vía intravenosa para la deshidratación grave o la falla comprobada de la rehidratación oral.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 27.'
},

'dolor-abdominal-en-el-nino': {
  tema:'Dolor abdominal en el niño',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:13,
  idea:'El dolor abdominal en el niño abarca un espectro amplio, desde causas benignas y autolimitadas hasta un verdadero abdomen agudo quirúrgico, y distinguir entre ambos extremos a tiempo es una de las habilidades clínicas más importantes de la pediatría general.',
  claves:['dolor abdominal recurrente infantil','abdomen agudo pediátrico','cólico del lactante'],
  sigue:'urgencias-pediatricas-comunes',
  secciones:[
    {
      t:'Dolor abdominal recurrente infantil: cuando la causa es funcional',
      p:[
        'El *dolor abdominal recurrente infantil* -episodios repetidos de dolor abdominal durante al menos tres meses, sin una causa orgánica identificable tras una evaluación apropiada- es un diagnóstico frecuente en niños en edad escolar, donde factores como el estrés, la ansiedad, o patrones dietéticos específicos con frecuencia contribuyen al cuadro, sin que exista una enfermedad estructural subyacente.',
        'Un principio clínico importante es que este diagnóstico funcional debe hacerse solo después de descartar razonablemente causas orgánicas mediante la historia clínica y el examen físico, buscando activamente signos de alarma (pérdida de peso, sangrado digestivo, fiebre persistente, dolor que despierta al niño por la noche) que orientarían hacia una causa orgánica que requiere estudio adicional, en vez de asumir directamente que se trata de un cuadro funcional.'
      ]
    },
    {
      t:'El abdomen agudo pediátrico: cuándo pensar en cirugía',
      p:[
        'El *abdomen agudo pediátrico* es el dolor abdominal de inicio agudo que puede corresponder a una condición que requiere intervención quirúrgica urgente -la apendicitis aguda es la causa más frecuente en niños mayores, pero el diagnóstico puede ser más difícil en niños pequeños, que con frecuencia no logran describir con precisión la localización o las características del dolor, retomando la importancia ya vista de adaptar la evaluación clínica a la edad del paciente.',
        'Los hallazgos que orientan hacia un abdomen agudo quirúrgico incluyen dolor progresivo y localizado (con frecuencia migrando hacia la fosa ilíaca derecha en el caso de la apendicitis), signos de irritación peritoneal al examen físico -retomando directamente el tema ya visto en Semiología Quirúrgica (10mo)-, fiebre asociada, y el estado general del niño, que con frecuencia luce claramente afectado, a diferencia del niño con dolor abdominal funcional.'
      ]
    },
    {
      t:'El cólico del lactante: un cuadro distinto en un grupo de edad distinto',
      p:[
        'El *cólico del lactante* es un cuadro distinto, característico de los primeros meses de vida, definido clásicamente por llanto excesivo, inconsolable, sin una causa identificable, que ocurre de forma recurrente (con frecuencia siguiendo la regla de tres: más de tres horas al día, más de tres días a la semana, durante más de tres semanas), en un lactante que por lo demás está sano y con buen crecimiento.',
        'Distinguir el cólico del lactante de otras causas de llanto persistente -que sí requieren evaluación más profunda, como una infección, una obstrucción intestinal o una fisura anal- depende de una evaluación clínica cuidadosa que confirme que el lactante está sano y creciendo adecuadamente entre los episodios de llanto, retomando la vigilancia del crecimiento ya vista al inicio de este bloque como referencia tranquilizadora.'
      ],
      foco:[
        '*Consideración clínica*: ante un niño con dolor abdominal, la búsqueda activa de signos de alarma (fiebre, dolor progresivo y localizado, irritación peritoneal, afectación del estado general) es lo que distingue una causa benigna de una que requiere evaluación quirúrgica urgente.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 28.'
},

'urgencias-pediatricas-comunes': {
  tema:'Urgencias pediátricas comunes',
  bloque:'Pediatría I', programa:'unirm', cuatri:11, min:14,
  idea:'Este tema cierra el bloque de Pediatría I reuniendo tres escenarios de urgencia distintos entre sí, pero unidos por un mismo principio: en el niño pequeño, la curiosidad exploratoria propia de su desarrollo normal es, paradójicamente, la fuente más frecuente de estas urgencias evitables.',
  claves:['cuerpo extraño en vía aérea infantil','intoxicación pediátrica','trauma pediátrico'],
  sigue:'fisiologia-embarazo-normal',
  secciones:[
    {
      t:'Cuerpo extraño en vía aérea infantil',
      p:[
        'El *cuerpo extraño en vía aérea infantil* es una urgencia especialmente frecuente en niños entre uno y tres años, edad en la que la exploración oral del entorno (llevarse objetos pequeños a la boca) coincide con una coordinación deglutoria todavía inmadura -alimentos como frutos secos, uvas enteras o trozos duros de comida, junto con objetos pequeños del entorno, son las causas más frecuentes.',
        'El manejo depende de si la obstrucción es completa (el niño no puede toser, hablar ni respirar, requiriendo maniobras de desobstrucción inmediatas) o parcial (el niño todavía puede toser o emitir algún sonido, situación donde se debe permitir que el propio reflejo de tos intente expulsar el objeto, sin maniobras que puedan empeorar la situación) -esta distinción retoma la misma lógica ya vista sobre obstrucción de vía aérea por cuerpo extraño en Soporte Vital Básico y Avanzado (9no).'
      ]
    },
    {
      t:'Intoxicación pediátrica',
      p:[
        'La *intoxicación pediátrica* ocurre con mayor frecuencia en el mismo grupo de edad de exploración activa, por ingestión accidental de medicamentos, productos de limpieza u otras sustancias del hogar dejadas al alcance del niño -a diferencia de la intoxicación intencional del adulto, la mayoría de las intoxicaciones pediátricas son accidentales, lo que orienta también hacia la importancia de la prevención mediante el almacenamiento seguro de sustancias potencialmente tóxicas.',
        'El manejo inicial depende de identificar qué se ingirió, cuánto, y cuándo, información que con frecuencia debe obtenerse de los padres o cuidadores presentes en el momento -en muchos casos, contactar a un centro de control de intoxicaciones o consultar protocolos específicos según la sustancia es más apropiado que aplicar un manejo genérico, ya que ciertas sustancias tienen antídotos o manejos específicos, mientras para otras el manejo de soporte general es lo indicado.'
      ]
    },
    {
      t:'Trauma pediátrico: el cierre del bloque completo',
      p:[
        'El *trauma pediátrico* -caídas, accidentes de tránsito, entre otras causas- es una de las principales causas de morbimortalidad infantil prevenible, y su evaluación inicial sigue los mismos principios sistemáticos ABCDE ya vistos en la evaluación inicial de trauma (Soporte Vital Básico y Avanzado, 9no), con las adaptaciones necesarias según el tamaño y las particularidades anatómicas y fisiológicas del niño, que no responde de la misma forma que un adulto ante una lesión similar.',
        'Este tema cierra el bloque completo de Pediatría I retomando el hilo conductor que atraviesa toda la materia: el niño no es un adulto pequeño, y cada uno de los temas vistos -desde el crecimiento y desarrollo normal hasta estas urgencias finales- exige adaptar la evaluación y el manejo a las particularidades propias de cada etapa del desarrollo infantil, en vez de aplicar directamente principios pensados originalmente para el paciente adulto.'
      ],
      foco:[
        '*Consideración clínica*: la prevención -almacenamiento seguro de sustancias tóxicas, supervisión apropiada según la edad, alimentos de tamaño y consistencia adecuados- sigue siendo, en las tres urgencias de este tema, más efectiva que el mejor manejo posible una vez que el evento ya ocurrió.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 31.'
}

});
