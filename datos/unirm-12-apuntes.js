/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 12 (lote 1)
   Cubre OBSTETRICIA II al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Primera materia del
   cuatrimestre 12 (4 creditos, 13 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== OBSTETRICIA II ==================== */
'parto-distocico-causas': {
  tema:'Parto distócico y sus causas',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'Cuando el trabajo de parto se desvía del progreso esperado ya vista en Obstetricia I, el término distocia agrupa las distintas causas posibles de esa falla, y reconocer cuál de ellas está presente determina el manejo apropiado.',
  claves:['distocia del trabajo de parto','desproporción cefalopélvica','falla en el progreso del parto'],
  sigue:'distocias-presentacion-fetal',
  secciones:[
    {
      t:'Qué es una distocia y su clasificación clásica',
      p:[
        'Una *distocia del trabajo de parto* es cualquier dificultad o anomalía que impide el progreso normal del parto, clasificada clásicamente según su origen en tres grandes categorías: distocias de la potencia (contracciones uterinas inadecuadas, ya sea en frecuencia, intensidad o duración), distocias del pasajero (relacionadas con el feto, como su tamaño, presentación o posición), y distocias del canal (relacionadas con la pelvis materna o los tejidos blandos del canal del parto).',
        'Esta clasificación en tres categorías retoma directamente la lógica ya vista sobre el mecanismo del parto en Obstetricia I: si ese mecanismo depende de la interacción entre la fuerza de las contracciones, las características del feto, y las dimensiones del canal del parto, entonces una distocia es, por definición, una falla en alguno de esos mismos tres elementos.'
      ]
    },
    {
      t:'La desproporción cefalopélvica como ejemplo de distocia del canal',
      p:[
        'La *desproporción cefalopélvica* es la incompatibilidad entre el tamaño de la cabeza fetal y las dimensiones de la pelvis materna, de forma que el feto no puede descender adecuadamente a través del canal del parto, sin importar la calidad de las contracciones uterinas -un ejemplo claro de distocia del canal, distinta de una distocia de la potencia donde el problema seria, en cambio, contracciones insuficientes.',
        'Distinguir la desproporción cefalopélvica de una distocia de la potencia tiene implicaciones directas de manejo: aumentar la actividad uterina (por ejemplo, con oxitocina, tema que se desarrolla más adelante en este bloque) puede ser apropiado ante una distocia de la potencia, pero resulta inútil, e incluso riesgoso, ante una verdadera desproporción cefalopélvica, donde el problema no es la fuerza de las contracciones sino el espacio físico disponible.'
      ]
    },
    {
      t:'Reconocer la falla en el progreso mediante el partograma',
      p:[
        'La *falla en el progreso del parto* se identifica precisamente mediante la misma herramienta ya vista en Obstetricia I: el partograma, cuya trayectoria esperada, cuando se desvía de forma significativa y sostenida, es la señal objetiva de que algo no está progresando como debería -retomando la lógica ya vista de comparar una trayectoria real contra un patrón esperado en el tiempo, más que depender de una sola evaluación aislada.',
        'Ante una falla en el progreso confirmada por partograma, el siguiente paso es precisamente identificar cuál de las tres categorías de distocia está presente, ya que el manejo apropiado -desde intervenciones para mejorar la actividad uterina hasta la consideración de una cesárea, tema que se desarrolla más adelante en este bloque- depende directamente de esa distinción.'
      ],
      foco:[
        '*Consideración clínica*: distinguir entre las tres categorías de distocia (potencia, pasajero, canal) determina directamente el manejo apropiado; intervenciones que ayudan ante una distocia de la potencia pueden ser inútiles o riesgosas ante una distocia del canal como la desproporción cefalopélvica.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 23.'
},

'distocias-presentacion-fetal': {
  tema:'Distocias de la presentación fetal',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'La presentación cefálica ya vista en Obstetricia I como la más favorable para el parto vaginal tiene, precisamente por contraste, presentaciones alternativas que representan distocias del pasajero, cada una con su propio riesgo y manejo específico.',
  claves:['presentación podálica','presentación de cara','situación transversa'],
  sigue:'cesarea-indicaciones-tecnica',
  secciones:[
    {
      t:'Presentación podálica: cuando los pies o las nalgas van primero',
      p:[
        'La *presentación podálica* es aquella en la que las nalgas o los pies del feto se presentan primero hacia el canal del parto, en vez de la cabeza -a diferencia de la presentación cefálica ya vista como la más favorable en Obstetricia I, la presentación podálica conlleva mayor riesgo durante el parto vaginal, particularmente el riesgo de que la cabeza fetal (la parte de mayor diámetro) quede retenida después de que el cuerpo ya ha salido.',
        'Por este riesgo particular, el manejo de la presentación podálica con frecuencia se orienta hacia la cesárea en muchos contextos actuales, aunque el parto vaginal en podálica puede considerarse en circunstancias específicas y con criterios cuidadosamente seleccionados -esta decisión retoma directamente el balance de riesgos y beneficios ya visto repetidamente en este pensum, aplicado ahora a esta presentación específica.'
      ]
    },
    {
      t:'Presentación de cara: una variante de la presentación cefálica',
      p:[
        'La *presentación de cara* es una variante de la presentación cefálica donde, a diferencia de la flexión completa de la cabeza fetal ya vista como parte del mecanismo normal del parto, el cuello fetal se extiende completamente, de forma que la cara -no el vértice de la cabeza- se presenta primero hacia el canal del parto.',
        'El pronóstico de un parto vaginal en presentación de cara depende críticamente de la posición específica del mentón fetal: una posición mento-anterior puede permitir un parto vaginal exitoso siguiendo un mecanismo adaptado, mientras una posición mento-posterior persistente generalmente hace imposible el parto vaginal, retomando la importancia ya vista de la posición fetal específica, no solo el tipo general de presentación.'
      ]
    },
    {
      t:'Situación transversa: cuando el eje fetal no es longitudinal',
      p:[
        'La *situación transversa* ocurre cuando el eje longitudinal del feto es perpendicular al eje longitudinal del útero materno, de forma que ni la cabeza ni las nalgas se presentan hacia el canal del parto, sino el hombro u otra parte del cuerpo fetal -esta situación hace que un parto vaginal sea imposible en su forma actual, representando una indicación clara de cesárea, tema que se desarrolla en el siguiente tema de este bloque.',
        'Reconocer una situación transversa antes del inicio del trabajo de parto, mediante el examen físico obstétrico y la ecografía ya vista en Obstetricia I, permite planificar la vía de nacimiento con anticipación, en vez de descubrir esta situación de forma inesperada ya avanzado el trabajo de parto, cuando las opciones de manejo son más limitadas y el riesgo, considerablemente mayor.'
      ],
      foco:[
        '*Consideración clínica*: reconocer una presentación o situación fetal anómala antes del inicio del trabajo de parto, mediante el examen obstétrico y la ecografía, permite planificar la vía de nacimiento con anticipación, en vez de enfrentar la situación de forma inesperada durante un trabajo de parto ya avanzado.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 24.'
},

'cesarea-indicaciones-tecnica': {
  tema:'Cesárea: indicaciones y técnica',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'La cesárea, como cualquier intervención quirúrgica, exige una indicación clara que justifique sus riesgos frente a los de un parto vaginal, y entender esa lógica de indicación es más relevante clínicamente que memorizar la técnica quirúrgica en sí misma.',
  claves:['indicaciones de cesárea','cesárea de emergencia','cesárea electiva'],
  sigue:'induccion-conduccion-trabajo-parto',
  secciones:[
    {
      t:'Las indicaciones de cesárea como aplicación de lo ya visto',
      p:[
        'Las *indicaciones de cesárea* integran directamente varios de los conceptos ya vistos en este bloque y en Obstetricia I: distocias del canal como la desproporción cefalopélvica, distocias de la presentación como la situación transversa, así como condiciones ya vistas en Obstetricia I como la placenta previa o el sufrimiento fetal agudo, entre muchas otras situaciones donde el parto vaginal representaría un riesgo mayor que la cirugía.',
        'Reconocer que la cesárea no es una intervención aislada, sino la consecuencia lógica de identificar correctamente una de estas condiciones ya estudiadas, retoma la importancia de dominar el diagnóstico diferencial obstétrico como base indispensable antes de decidir la vía de nacimiento más apropiada para cada gestante específica.'
      ]
    },
    {
      t:'Cesárea de emergencia: cuando el tiempo es crítico',
      p:[
        'La *cesárea de emergencia* se indica ante una condición donde la demora representa un riesgo inmediato para la madre, el feto, o ambos -retomando directamente la categoría de urgencia obstétrica ya vista en Pre Internado de Gineco-Obstetricia (11vo)- exigiendo que el equipo quirúrgico esté preparado para actuar con la mayor rapidez posible una vez tomada la decisión.',
        'La velocidad de respuesta ante una cesárea de emergencia depende de la coordinación previa del equipo y de la institución completa, retomando la lógica ya vista sobre trabajo en equipo coordinado (Pre Internado de Gineco-Obstetricia) y sobre indicadores de gestión hospitalaria (Gerencia en Salud, 10mo): una institución que ha planificado y practicado su respuesta ante esta emergencia específica logra tiempos de respuesta considerablemente más cortos que una que improvisa cada vez.'
      ]
    },
    {
      t:'Cesárea electiva: la decisión planificada con anticipación',
      p:[
        'La *cesárea electiva* es aquella planificada con anticipación, antes del inicio del trabajo de parto, ante una indicación ya identificada durante el control prenatal -como una situación transversa persistente cerca del término, o una placenta previa confirmada- permitiendo programar el procedimiento en condiciones óptimas, sin la presión de tiempo propia de una emergencia.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum: anticipar una complicación mediante el control prenatal sistemático y planificar la conducta apropiada con tiempo, cuando es posible, generalmente ofrece mejores condiciones y menor riesgo que enfrentar la misma situación de forma no anticipada y urgente.'
      ],
      foco:[
        '*Consideración clínica*: la velocidad de respuesta ante una cesárea de emergencia depende de la coordinación previa del equipo y de la institución completa, no solo de la habilidad técnica individual del cirujano en el momento.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 30.'
},

'induccion-conduccion-trabajo-parto': {
  tema:'Inducción y conducción del trabajo de parto',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'Distinguir entre inducir un trabajo de parto que aún no ha comenzado y conducir uno que ya está en curso pero progresa lentamente es una distinción conceptual simple pero clínicamente importante, con implicaciones distintas sobre el manejo apropiado.',
  claves:['inducción del parto','maduración cervical','oxitocina en el trabajo de parto'],
  sigue:'ruptura-prematura-membranas-pretermino',
  secciones:[
    {
      t:'La inducción del parto y sus indicaciones',
      p:[
        'La *inducción del parto* es el conjunto de intervenciones destinadas a iniciar artificialmente el trabajo de parto antes de que comience de forma espontánea, indicada cuando los beneficios de finalizar el embarazo superan los riesgos de continuarlo -por ejemplo, ante un embarazo postérmino (tema que se desarrolla más adelante en este bloque) o ciertos trastornos hipertensivos del embarazo ya vistos en Obstetricia I que no mejoran con manejo expectante.',
        'Esta decisión retoma directamente el mismo principio de balance de riesgo-beneficio ya visto repetidamente en este pensum: inducir el parto no es una decisión neutral, sino una intervención activa que debe justificarse porque el riesgo de continuar el embarazo supera al riesgo de la inducción misma en ese momento específico.'
      ]
    },
    {
      t:'La maduración cervical como paso previo necesario',
      p:[
        'La *maduración cervical* es el proceso mediante el cual el cuello uterino se ablanda, se acorta y comienza a dilatarse, condiciones necesarias para que una inducción del parto tenga probabilidad razonable de éxito -un cuello uterino desfavorable (cerrado, largo, firme) tiene mucha menor probabilidad de responder exitosamente a la inducción que uno ya parcialmente maduro, por lo que en muchos casos se utilizan métodos específicos para favorecer esta maduración antes de iniciar la inducción propiamente dicha.',
        'Evaluar las condiciones cervicales antes de decidir el método de inducción retoma la importancia ya vista sobre individualizar la conducta clínica según las condiciones específicas de cada paciente: iniciar directamente con oxitocina en un cuello completamente desfavorable, sin maduración previa, tiene una probabilidad de éxito considerablemente menor que hacerlo tras favorecer primero esa maduración cervical.'
      ]
    },
    {
      t:'La oxitocina y la conducción del trabajo de parto ya iniciado',
      p:[
        'La *oxitocina en el trabajo de parto* se utiliza tanto para la inducción como para la conducción -este segundo escenario ocurre cuando el trabajo de parto ya comenzó de forma espontánea pero progresa más lentamente de lo esperado, situación distinta a la inducción, donde el trabajo de parto todavía no había comenzado en absoluto.',
        'Esta distinción entre inducción (iniciar algo que no existía) y conducción (acelerar algo que ya está en curso pero progresa lentamente) retoma la misma lógica ya vista sobre reconocer distintos escenarios clínicos que, aunque compartan una herramienta de manejo similar (la oxitocina en este caso), representan situaciones conceptualmente distintas que ameritan ser identificadas con precisión antes de decidir la intervención apropiada.'
      ],
      foco:[
        '*Consideración clínica*: evaluar las condiciones cervicales antes de decidir el método de inducción es indispensable, ya que un cuello uterino desfavorable sin maduración previa reduce considerablemente la probabilidad de éxito de la inducción.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 26.'
},

'ruptura-prematura-membranas-pretermino': {
  tema:'Ruptura prematura de membranas pretérmino',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'Cuando las membranas se rompen antes del inicio del trabajo de parto y, además, antes de que el embarazo llegue a término, el manejo debe equilibrar cuidadosamente el riesgo de infección con el riesgo de la prematurez, dos amenazas que compiten entre sí.',
  claves:['ruptura prematura de membranas','manejo expectante en RPM','corioamnionitis'],
  sigue:'embarazo-multiple',
  secciones:[
    {
      t:'Qué distingue a esta condición de una ruptura de membranas normal',
      p:[
        'La *ruptura prematura de membranas* pretérmino es la ruptura de las membranas amnióticas antes del inicio del trabajo de parto y antes de las 37 semanas de gestación, distinta de la ruptura de membranas que ocurre normalmente durante el trabajo de parto ya a término -esta condición representa un reto clínico particular precisamente porque combina dos riesgos que se contraponen: el riesgo de infección ascendente una vez rotas las membranas, y el riesgo asociado a la prematurez si el embarazo se finaliza de inmediato.',
        'Este tema retoma directamente la conexión con el tema ya visto de sepsis en Patología Infecciosa (11vo): una vez rotas las membranas, se pierde la barrera física que normalmente protege al feto de la flora vaginal materna, aumentando progresivamente el riesgo de infección conforme pasa el tiempo desde la ruptura.'
      ]
    },
    {
      t:'El manejo expectante como estrategia central',
      p:[
        'El *manejo expectante en RPM* -vigilar de cerca a la gestante sin finalizar el embarazo de inmediato, siempre que no existan signos de infección o compromiso fetal- es la estrategia central en la mayoría de los casos, particularmente cuando el embarazo está considerablemente lejos del término, buscando ganar el mayor tiempo posible de maduración fetal antes del nacimiento, mientras se vigila activamente cualquier signo de que el balance de riesgos ha cambiado.',
        'Esta estrategia retoma la misma lógica ya vista sobre balance de riesgo-beneficio: el manejo expectante no es simplemente "esperar sin hacer nada", sino una decisión activa de aceptar el riesgo de infección, cuidadosamente vigilado, a cambio del beneficio de mayor maduración fetal -un balance que se reevalúa constantemente conforme avanza el tiempo desde la ruptura.'
      ]
    },
    {
      t:'La corioamnionitis como señal de que el balance ha cambiado',
      p:[
        'La *corioamnionitis* es la infección de las membranas amnióticas y el líquido amniótico, la complicación temida del manejo expectante prolongado, que se manifiesta con fiebre materna, taquicardia materna o fetal, y sensibilidad uterina, entre otros hallazgos -su aparición cambia radicalmente la conducta: una vez presente, el manejo expectante ya no es apropiado, y el embarazo debe finalizarse sin más demora, independientemente de la edad gestacional.',
        'Este cambio de conducta ante la corioamnionitis retoma directamente la lógica ya vista repetidamente sobre reconocer cuándo una situación deja de ser manejable de forma expectante y exige intervención activa e inmediata: el riesgo de continuar el embarazo en presencia de una infección activa supera, en este punto, cualquier beneficio adicional de prolongar la gestación.'
      ],
      foco:[
        '*Consideración clínica*: el manejo expectante en la ruptura prematura de membranas pretérmino es apropiado solo mientras no existan signos de corioamnionitis; su aparición cambia la conducta hacia la finalización inmediata del embarazo, sin importar la edad gestacional.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 42.'
},

'embarazo-multiple': {
  tema:'Embarazo múltiple',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'El embarazo múltiple no es simplemente "el doble" de un embarazo único: introduce complicaciones específicas propias de la relación entre los fetos y de la mayor demanda fisiológica sobre el cuerpo materno.',
  claves:['embarazo gemelar','gemelos monocoriónicos y bicoriónicos','síndrome de transfusión feto-fetal'],
  sigue:'restriccion-crecimiento-intrauterino',
  secciones:[
    {
      t:'El embarazo gemelar y su mayor riesgo general',
      p:[
        'El *embarazo gemelar* -y el embarazo múltiple en general- conlleva mayor riesgo de prácticamente todas las complicaciones ya vistas en Obstetricia I y en este bloque: mayor riesgo de parto pretérmino, de trastornos hipertensivos del embarazo, de restricción del crecimiento fetal, y de hemorragia posparto, entre otras, simplemente por la mayor demanda fisiológica que representa gestar más de un feto simultáneamente.',
        'Reconocer esta mayor vulnerabilidad general orienta un control prenatal más frecuente y cercano que el de un embarazo único de bajo riesgo, retomando directamente la lógica ya vista sobre concentrar la vigilancia donde el riesgo real es mayor, ya introducida en el calendario de controles prenatales de Obstetricia I.'
      ]
    },
    {
      t:'Gemelos monocoriónicos y bicoriónicos: una distinción con implicaciones directas',
      p:[
        'La distinción entre *gemelos monocoriónicos y bicoriónicos* -según si los gemelos comparten una sola placenta (monocoriónicos) o cada uno tiene su propia placenta (bicoriónicos)- tiene implicaciones clínicas directas: los gemelos monocoriónicos, al compartir circulación placentaria, tienen riesgo de complicaciones específicas de esa conexión vascular compartida que los gemelos bicoriónicos, con circulaciones completamente separadas, no tienen.',
        'Determinar la corionicidad idealmente se realiza mediante ecografía en el primer trimestre, ya vista en Obstetricia I como el momento de mayor precisión para ciertas determinaciones -retomando la importancia de la evaluación temprana, ya que esta distinción se vuelve más difícil de establecer con precisión conforme avanza el embarazo.'
      ]
    },
    {
      t:'El síndrome de transfusión feto-fetal: la complicación específica de los monocoriónicos',
      p:[
        'El *síndrome de transfusión feto-fetal* es una complicación específica y grave de los embarazos gemelares monocoriónicos, donde conexiones vasculares anormales dentro de la placenta compartida generan un flujo sanguíneo desequilibrado entre ambos fetos: uno recibe un exceso de flujo (desarrollando exceso de líquido amniótico), mientras el otro recibe un flujo insuficiente (desarrollando restricción de crecimiento y disminución del líquido amniótico).',
        'Este tema cierra ilustrando por qué la determinación de la corionicidad, ya vista en el tema anterior, es clínicamente indispensable: sin saber que se trata de gemelos monocoriónicos, el equipo de salud no anticiparía el riesgo específico de este síndrome ni establecería la vigilancia ecográfica seriada necesaria para detectarlo tempranamente, cuando la intervención todavía puede ser efectiva.'
      ],
      foco:[
        '*Consideración clínica*: determinar la corionicidad del embarazo gemelar, idealmente mediante ecografía del primer trimestre, es indispensable porque orienta directamente hacia el riesgo específico de complicaciones como el síndrome de transfusión feto-fetal, exclusivo de los gemelos monocoriónicos.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 45.'
},

'restriccion-crecimiento-intrauterino': {
  tema:'Restricción del crecimiento intrauterino',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'Un feto que no está creciendo según lo esperado retoma directamente la lógica ya vista sobre trayectoria de crecimiento, ahora aplicada al feto en vez del niño ya nacido, con la particularidad de que aquí la vigilancia se realiza completamente por medios indirectos.',
  claves:['restricción del crecimiento fetal','insuficiencia placentaria','doppler obstétrico'],
  sigue:'embarazo-postermino',
  secciones:[
    {
      t:'La restricción del crecimiento fetal como desviación de la trayectoria esperada',
      p:[
        'La *restricción del crecimiento fetal* es la incapacidad del feto de alcanzar su potencial de crecimiento genéticamente determinado, identificada mediante biometría fetal seriada ya vista en Obstetricia I -retomando directamente la misma lógica ya vista sobre las curvas de crecimiento en Pediatría I y sobre la trayectoria de crecimiento fetal en la biometría: lo que más importa no es una sola medición aislada, sino una desaceleración progresiva de la trayectoria de crecimiento esperada a lo largo del embarazo.',
        'Distinguir un feto genéticamente pequeño pero saludable (que crece de forma constante en su propio percentil bajo, sin desacelerar) de un feto con restricción real de crecimiento (que se desvía progresivamente de su trayectoria esperada) retoma exactamente el mismo principio ya visto en las curvas de crecimiento pediátrico: la trayectoria en el tiempo, no un percentil aislado, es lo que distingue lo normal de lo patológico.'
      ]
    },
    {
      t:'La insuficiencia placentaria como causa más frecuente',
      p:[
        'La *insuficiencia placentaria* -el funcionamiento inadecuado de la placenta para transferir oxígeno y nutrientes al feto en desarrollo- es la causa más frecuente de restricción del crecimiento fetal, frecuentemente asociada a condiciones maternas ya vistas en este pensum como los trastornos hipertensivos del embarazo (Obstetricia I), que comparten con la restricción de crecimiento una fisiopatología vascular placentaria común.',
        'Esta conexión fisiopatológica compartida explica por qué una gestante con preeclampsia, por ejemplo, requiere vigilancia adicional del crecimiento fetal: el mismo proceso vascular anormal que genera la elevación de la presión arterial materna puede simultáneamente comprometer el funcionamiento placentario y, con ello, el crecimiento fetal.'
      ]
    },
    {
      t:'El doppler obstétrico como herramienta de vigilancia específica',
      p:[
        'El *doppler obstétrico* es una modalidad ecográfica que evalúa el flujo sanguíneo en vasos específicos (particularmente en la arteria umbilical) permitiendo detectar alteraciones del flujo placentario incluso antes de que se manifieste un cambio evidente en el peso fetal estimado -esta herramienta retoma directamente los principios del ultrasonido ya vistos en Imagenología (11vo), aplicados ahora a una pregunta clínica específica: cómo está funcionando la circulación placentaria en este momento particular del embarazo.',
        'Este tema cierra reconociendo que la vigilancia de un feto con sospecha de restricción de crecimiento combina, de forma integrada, la biometría fetal seriada (para evaluar el tamaño), el doppler obstétrico (para evaluar la función placentaria), y en casos avanzados, otras pruebas de bienestar fetal -un ejemplo más de cómo distintas herramientas de imagen, ya vistas en distintos momentos de este pensum, se complementan para responder una pregunta clínica que ninguna por sí sola resolvería completamente.'
      ],
      foco:[
        '*Consideración clínica*: distinguir un feto genéticamente pequeño pero saludable de uno con restricción real de crecimiento depende de la trayectoria de crecimiento en el tiempo, no de un percentil aislado -el mismo principio ya visto en las curvas de crecimiento pediátrico, aplicado ahora al feto.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 44.'
},

'embarazo-postermino': {
  tema:'Embarazo postérmino',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:12,
  idea:'Un embarazo que se prolonga más allá de la fecha esperada de parto no es simplemente "esperar un poco más": conlleva un riesgo específico que aumenta progresivamente cuanto más se prolonga, retomando la importancia ya vista de la edad gestacional precisa.',
  claves:['embarazo prolongado','manejo del embarazo postérmino','riesgo de insuficiencia placentaria tardía'],
  sigue:'isoinmunizacion-rh',
  secciones:[
    {
      t:'El embarazo prolongado y por qué importa la precisión de la edad gestacional',
      p:[
        'El *embarazo prolongado* (o postérmino) es aquel que se extiende más allá de las 42 semanas de gestación, una definición que depende críticamente de contar con una estimación precisa de la edad gestacional -retomando directamente la importancia ya vista en Obstetricia I sobre establecer esta edad con precisión desde el inicio del embarazo: sin una fecha confiable, no es posible diagnosticar correctamente esta condición ni distinguirla de un embarazo simplemente mal fechado.',
        'Este tema retoma de forma directa el principio ya visto de que un error en la estimación inicial de la edad gestacional puede generar consecuencias en cascada: un embarazo que en realidad no es postérmino, pero que se clasifica erróneamente como tal por una fecha imprecisa, podría someterse a intervenciones (como la inducción ya vista en este bloque) sin la indicación real que las justificaría.'
      ]
    },
    {
      t:'El riesgo de insuficiencia placentaria tardía',
      p:[
        'El *riesgo de insuficiencia placentaria tardía* aumenta progresivamente conforme el embarazo se prolonga más allá del término, ya que la placenta, con el paso del tiempo más allá de su función esperada, puede comenzar a mostrar signos de envejecimiento funcional que comprometen su capacidad de sostener adecuadamente al feto -retomando directamente la conexión con la insuficiencia placentaria ya vista en el tema anterior de restricción del crecimiento fetal.',
        'Este riesgo progresivo es la base fisiopatológica que justifica la vigilancia más cercana, y eventualmente la consideración de finalizar el embarazo, conforme este se acerca y supera las 42 semanas -un ejemplo más del principio ya visto sobre concentrar la vigilancia donde el riesgo aumenta progresivamente con el tiempo.'
      ]
    },
    {
      t:'El manejo del embarazo postérmino como aplicación de principios ya vistos',
      p:[
        'El *manejo del embarazo postérmino* combina la vigilancia fetal cercana (biometría, doppler ya vistos en el tema anterior) con la consideración activa de la inducción del parto ya vista en este bloque, una vez que el riesgo de continuar el embarazo supera al riesgo asociado a la inducción misma -retomando una vez más el principio de balance de riesgo-beneficio que atraviesa la toma de decisiones obstétricas en todo este pensum.',
        'Este tema cierra retomando la conexión directa con el control prenatal ya vista en Obstetricia I: un embarazo con seguimiento sistemático y regular tiene mayor probabilidad de detectar tempranamente que se aproxima al término esperado, permitiendo una planificación anticipada de la conducta, en vez de enfrentar esta decisión de forma tardía y con menos opciones disponibles.'
      ],
      foco:[
        '*Consideración clínica*: la precisión de la edad gestacional, establecida idealmente desde el inicio del embarazo, es indispensable para diagnosticar correctamente un embarazo postérmino y evitar tanto intervenciones innecesarias como demoras en un manejo que sí es necesario.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 43.'
},

'isoinmunizacion-rh': {
  tema:'Isoinmunización Rh',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'La isoinmunización Rh es un ejemplo notable de cómo la prevención, aplicada de forma sistemática, ha transformado una complicación que antes era relativamente frecuente y grave en una condición hoy en día mucho menos común.',
  claves:['isoinmunización materno-fetal','enfermedad hemolítica del recién nacido','coombs indirecto'],
  sigue:'muerte-fetal-intrauterina',
  secciones:[
    {
      t:'La isoinmunización materno-fetal y su mecanismo',
      p:[
        'La *isoinmunización materno-fetal* Rh ocurre cuando una mujer Rh negativo desarrolla anticuerpos contra el antígeno Rh positivo, típicamente tras la exposición a sangre fetal Rh positiva (de un feto que heredó el Rh positivo del padre) durante el embarazo, el parto, o eventos previos como un aborto o un procedimiento invasivo -una vez sensibilizada, estos anticuerpos maternos pueden atravesar la placenta y atacar los glóbulos rojos de un feto Rh positivo en un embarazo posterior.',
        'Este mecanismo retoma la lógica general de una respuesta inmune, pero aplicada en un contexto obstétrico particular: el sistema inmune materno, al reconocer el antígeno Rh fetal como extraño, genera una respuesta que, en embarazos subsecuentes, representa una amenaza directa para el feto, no para la madre misma, un matiz importante que distingue esta condición de una reacción alérgica o autoinmune convencional.'
      ]
    },
    {
      t:'La enfermedad hemolítica del recién nacido como consecuencia',
      p:[
        'La *enfermedad hemolítica del recién nacido* es la consecuencia clínica de la isoinmunización Rh no prevenida ni tratada: los anticuerpos maternos que atraviesan la placenta destruyen los glóbulos rojos fetales, generando anemia fetal que, en su forma más grave, puede progresar hacia hidropesía fetal (acumulación generalizada de líquido) y muerte fetal, mientras en el recién nacido puede generar ictericia significativa que retoma la conexión con la ictericia neonatal ya vista en el contexto pediátrico.',
        'La severidad de esta enfermedad varía según el grado de sensibilización materna y el momento del embarazo en que ocurre, lo que retoma la importancia ya vista de la vigilancia seriada -mediante doppler obstétrico, ya visto en el tema de restricción del crecimiento fetal, que también permite detectar signos indirectos de anemia fetal grave.'
      ]
    },
    {
      t:'El Coombs indirecto y la prevención con inmunoglobulina anti-D',
      p:[
        'El *Coombs indirecto* es la prueba que detecta la presencia de anticuerpos maternos contra antígenos de glóbulos rojos, incluido el Rh, y su realización sistemática durante el control prenatal en mujeres Rh negativo permite identificar tempranamente si ya existe sensibilización -retomando directamente la lógica de tamizaje sistemático ya vista repetidamente en este pensum.',
        'La prevención mediante la administración de inmunoglobulina anti-D a mujeres Rh negativo no sensibilizadas, en momentos específicos del embarazo y después del parto, es uno de los ejemplos más claros de prevención primaria efectiva en toda la obstetricia: al neutralizar los glóbulos rojos fetales Rh positivos que pudieran haber entrado a la circulación materna, antes de que el sistema inmune materno logre generar una respuesta de sensibilización completa, esta intervención ha reducido dramáticamente la incidencia de esta condición donde se aplica de forma sistemática.'
      ],
      foco:[
        '*Consideración clínica*: la prevención con inmunoglobulina anti-D en mujeres Rh negativo no sensibilizadas es una de las intervenciones de prevención primaria más efectivas de toda la obstetricia, y su aplicación sistemática ha reducido dramáticamente la incidencia de esta condición.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 15.'
},

'muerte-fetal-intrauterina': {
  tema:'Muerte fetal intrauterina',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'La muerte fetal intrauterina es, entre todas las complicaciones obstétricas ya vistas en este pensum, una de las más devastadoras para la familia, y su manejo exige combinar el rigor clínico con una sensibilidad particular hacia el duelo de los padres.',
  claves:['óbito fetal','muerte fetal tardía','manejo tras muerte fetal'],
  sigue:'hemorragia-posparto-manejo-avanzado',
  secciones:[
    {
      t:'El óbito fetal y sus posibles causas',
      p:[
        'El *óbito fetal* es la muerte del feto dentro del útero materno, cuyas causas son heterogéneas y en una proporción significativa de los casos no llegan a identificarse con certeza a pesar de una investigación completa -entre las causas identificables se incluyen muchas condiciones ya vistas en este pensum: insuficiencia placentaria grave (ya vista en restricción del crecimiento fetal), complicaciones del cordón umbilical, malformaciones congénitas mayores, e infecciones fetales, entre otras.',
        'Investigar las posibles causas de un óbito fetal, cuando es clínicamente posible hacerlo, tiene relevancia tanto inmediata (para el manejo de ese embarazo específico) como futura (para orientar la vigilancia y el manejo de un embarazo posterior de la misma mujer), retomando la importancia ya vista de un antecedente obstétrico previo sobre el riesgo en embarazos futuros.'
      ]
    },
    {
      t:'La muerte fetal tardía y su distinción de otras pérdidas gestacionales',
      p:[
        'La *muerte fetal tardía* se distingue de las pérdidas gestacionales más tempranas ya vistas en Obstetricia I (como el aborto espontáneo del primer trimestre) tanto por criterios de edad gestacional específicos como por implicaciones clínicas y emocionales distintas: una pérdida más avanzada en el embarazo, con frecuencia después de que los padres ya han experimentado movimientos fetales y han desarrollado un vínculo más establecido con el embarazo, conlleva un impacto emocional particularmente significativo.',
        'Reconocer esta diferencia retoma la importancia ya vista sobre adaptar la comunicación clínica según el contexto específico de cada situación, un principio general de este pensum que aquí adquiere una relevancia particular: el mismo diagnóstico técnico (pérdida del embarazo) exige un abordaje comunicativo distinto según el momento del embarazo en que ocurre.'
      ]
    },
    {
      t:'El manejo tras muerte fetal: técnico y humano a la vez',
      p:[
        'El *manejo tras muerte fetal* combina aspectos técnicos (la finalización del embarazo mediante el método más apropiado según las circunstancias específicas, y en muchos casos la investigación de la causa) con aspectos humanos indispensables: acompañar a la familia en su duelo, respetar sus decisiones sobre cómo desean procesar esta pérdida, y ofrecer la información con la sensibilidad que la situación exige, sin minimizar el impacto emocional de lo ocurrido.',
        'Este tema cierra el bloque retomando un principio general ya visto repetidamente en este pensum, ahora en su expresión más delicada: la atención médica de calidad combina siempre el rigor técnico con la comunicación humana apropiada al contexto, y en ninguna situación esta combinación es más necesaria que ante la pérdida de un embarazo, donde el manejo puramente técnico, sin la dimensión humana, sería una atención incompleta.'
      ],
      foco:[
        '*Consideración clínica*: el manejo tras una muerte fetal exige combinar el rigor técnico con una sensibilidad particular hacia el duelo de los padres, respetando sus decisiones sobre cómo desean procesar la pérdida, sin minimizar en ningún momento el impacto emocional de lo ocurrido.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 35.'
},

'hemorragia-posparto-manejo-avanzado': {
  tema:'Hemorragia posparto: manejo avanzado',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:14,
  idea:'La hemorragia posparto ya introducida como riesgo del puerperio inmediato en Obstetricia I se retoma aquí con mayor profundidad, desarrollando el manejo escalonado que se requiere cuando las medidas iniciales no logran controlar el sangrado.',
  claves:['atonía uterina','manejo escalonado de la hemorragia posparto','histerectomía obstétrica'],
  sigue:'infeccion-puerperal',
  secciones:[
    {
      t:'La atonía uterina como causa más frecuente',
      p:[
        'La *atonía uterina* -la incapacidad del útero de contraerse adecuadamente después del nacimiento- es la causa más frecuente de hemorragia posparto, retomando directamente la importancia ya vista sobre el manejo activo del alumbramiento en Obstetricia I: precisamente porque un útero mal contraído no logra comprimir de forma efectiva los vasos sanguíneos que quedan expuestos tras el desprendimiento de la placenta.',
        'Reconocer la atonía como causa más frecuente no significa que sea la única: otras causas de hemorragia posparto incluyen retención de restos placentarios, laceraciones del canal del parto, y trastornos de la coagulación, cada una con un manejo específico distinto -por lo que, ante una hemorragia posparto, identificar la causa específica es tan importante como iniciar el manejo general inmediato.'
      ]
    },
    {
      t:'El manejo escalonado de la hemorragia posparto',
      p:[
        'El *manejo escalonado de la hemorragia posparto* retoma directamente el mismo principio ya visto repetidamente en este pensum sobre escalonar la intervención según la severidad y la respuesta a las medidas iniciales: comenzando con medidas menos invasivas (masaje uterino, medicamentos uterotónicos adicionales a los ya administrados en el manejo activo del alumbramiento), y avanzando hacia intervenciones progresivamente más invasivas (taponamiento uterino, procedimientos quirúrgicos conservadores) si el sangrado persiste a pesar de las medidas previas.',
        'Este enfoque escalonado exige una reevaluación constante de la respuesta a cada medida aplicada, en vez de asumir que una sola intervención resolverá necesariamente la situación -retomando la importancia ya vista sobre vigilar la trayectoria de una respuesta clínica en el tiempo, no solo aplicar una intervención y esperar pasivamente sin verificar activamente si está siendo efectiva.'
      ]
    },
    {
      t:'La histerectomía obstétrica como último recurso',
      p:[
        'La *histerectomía obstétrica* -la extirpación del útero realizada como parte del manejo de una hemorragia posparto que no responde a ninguna medida previa- representa el último escalón de este manejo progresivo, reservada para cuando todas las medidas menos invasivas han fracasado y la vida de la madre está en riesgo inmediato por la hemorragia persistente.',
        'Este tema cierra retomando la misma lógica ya vista sobre escalonar toda intervención médica, incluidas las más drásticas: la histerectomía obstétrica no es la primera opción ante ninguna hemorragia posparto, sino el recurso final cuando el manejo escalonado completo, aplicado de forma oportuna y sistemática, no ha logrado controlar una hemorragia que pone en riesgo inmediato la vida materna.'
      ],
      foco:[
        '*Consideración clínica*: el manejo escalonado de la hemorragia posparto exige reevaluar constantemente la respuesta a cada medida aplicada, avanzando al siguiente escalón sin demora si la medida previa no logra controlar el sangrado, en vez de persistir con una intervención que ya demostró ser insuficiente.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 41.'
},

'infeccion-puerperal': {
  tema:'Infección puerperal',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'La infección puerperal retoma directamente la vigilancia del puerperio ya vista en Obstetricia I, ahora profundizando en la complicación infecciosa específica que puede desarrollarse durante este periodo posterior al parto.',
  claves:['endometritis puerperal','fiebre puerperal','sepsis puerperal'],
  sigue:'medicina-materno-fetal-conceptos-basicos',
  secciones:[
    {
      t:'La endometritis puerperal como forma más frecuente',
      p:[
        'La *endometritis puerperal* -la infección del revestimiento uterino durante el puerperio- es la forma más frecuente de infección puerperal, con mayor riesgo tras una cesárea que tras un parto vaginal, y se presenta característicamente con fiebre, dolor uterino a la palpación, y loquios de mal olor -retomando directamente la evolución esperada de los loquios ya vista en Obstetricia I, cuyo mal olor, ya identificado entonces como señal de alarma, se confirma aquí como un hallazgo característico de esta complicación específica.',
        'Reconocer estos hallazgos como parte de la vigilancia sistemática del puerperio ya establecida en Obstetricia I permite un diagnóstico oportuno: un útero que no involuciona según lo esperado, combinado con fiebre y loquios malolientes, orienta directamente hacia esta complicación, retomando el mismo principio ya visto de comparar la evolución real contra el patrón esperado en el tiempo.'
      ]
    },
    {
      t:'La fiebre puerperal como signo de alarma que exige investigación',
      p:[
        'La *fiebre puerperal* -fiebre que ocurre durante el puerperio, más allá de las primeras 24 horas normales tras el parto- nunca debe considerarse un hallazgo esperado o trivial, sino una señal que exige investigar activamente su causa, retomando la lógica general ya vista repetidamente sobre signos de alarma que cambian la conducta clínica: aunque la endometritis es la causa más frecuente, otras causas (infección urinaria, mastitis, infección de la herida quirúrgica en una cesárea) también deben considerarse en el diagnóstico diferencial.',
        'Esta necesidad de investigar activamente, en vez de asumir automáticamente la causa más frecuente, retoma un principio general de razonamiento clínico ya visto en distintos contextos de este pensum: la frecuencia estadística de una causa no exime de la responsabilidad de confirmarla mediante la evaluación clínica apropiada, en vez de tratar empíricamente sin verificar el diagnóstico específico.'
      ]
    },
    {
      t:'La sepsis puerperal como progresión más grave',
      p:[
        'La *sepsis puerperal* es la progresión de una infección puerperal no controlada hacia una disfunción orgánica sistémica, retomando directamente el concepto de sepsis ya desarrollado en profundidad en Patología Infecciosa (11vo): la misma lógica de reconocimiento temprano mediante herramientas como los criterios de qSOFA, y de manejo urgente con antimicrobianos apropiados, se aplica aquí al contexto específico de una infección de origen obstétrico.',
        'Este tema cierra el bloque de Obstetricia II retomando el hilo conductor de todo el bloque: cada complicación obstétrica específica desarrollada aquí -distocias, cesárea, ruptura de membranas, embarazo múltiple, restricción de crecimiento, isoinmunización, muerte fetal, hemorragia posparto, e infección puerperal- se entiende mejor a la luz de los principios generales ya establecidos en Obstetricia I y en otros bloques de este pensum, aplicados ahora a escenarios clínicos más específicos y complejos.'
      ],
      foco:[
        '*Consideración clínica*: la fiebre puerperal, más allá de las primeras 24 horas normales tras el parto, siempre exige investigar activamente su causa específica, sin asumir automáticamente que se trata de endometritis sin confirmarlo mediante la evaluación clínica correspondiente.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 37.'
},

'medicina-materno-fetal-conceptos-basicos': {
  tema:'Medicina materno-fetal: conceptos básicos',
  bloque:'Obstetricia II', programa:'unirm', cuatri:12, min:13,
  idea:'Este último tema cierra el bloque de Obstetricia II presentando la medicina materno-fetal como la subespecialidad que integra, de forma sistemática, todo el conocimiento ya desarrollado sobre el embarazo de alto riesgo en este pensum.',
  claves:['embarazo de alto riesgo','unidad de medicina materno-fetal','vigilancia fetal anteparto'],
  sigue:'cardiopatias-congenitas-nino',
  secciones:[
    {
      t:'El embarazo de alto riesgo como concepto integrador',
      p:[
        'Un *embarazo de alto riesgo* es aquel donde la madre, el feto, o ambos, tienen una probabilidad mayor de lo habitual de experimentar un resultado adverso, ya sea por condiciones maternas preexistentes, por complicaciones desarrolladas durante el embarazo (muchas de ellas ya vistas en Obstetricia I y en este bloque), o por características específicas del embarazo mismo como el ya visto embarazo múltiple.',
        'Este concepto integra prácticamente todo el contenido de ambos bloques de obstetricia de este pensum: cada complicación específica estudiada -desde los trastornos hipertensivos hasta las distocias, pasando por la restricción de crecimiento y la isoinmunización- es, en esencia, una de las muchas formas en que un embarazo puede clasificarse como de alto riesgo, ameritando una vigilancia y un manejo diferenciados del embarazo de bajo riesgo.'
      ]
    },
    {
      t:'La unidad de medicina materno-fetal como nivel de atención especializado',
      p:[
        'La *unidad de medicina materno-fetal* es un nivel de atención especializado, con recursos y experiencia específicos para el manejo de embarazos de alto riesgo particularmente complejos, retomando directamente la lógica ya vista sobre cuándo referir a una gestante (Pre Internado de Gineco-Obstetricia, 11vo): reconocer que una situación específica excede la capacidad resolutiva del nivel de atención actual, y que existe un nivel superior con mayor capacidad para manejarla, es una decisión clínica tan importante como el diagnóstico mismo.',
        'Esta referencia oportuna hacia un nivel especializado no representa un fracaso del manejo inicial, sino precisamente la aplicación correcta del principio ya visto de reconocer los límites de la propia capacidad de manejo -un embarazo con múltiples factores de alto riesgo superpuestos con frecuencia se beneficia de la experiencia acumulada y los recursos específicos de un equipo especializado en medicina materno-fetal.'
      ]
    },
    {
      t:'La vigilancia fetal anteparto como síntesis de herramientas ya vistas',
      p:[
        'La *vigilancia fetal anteparto*, en un embarazo de alto riesgo, integra de forma sistemática las herramientas ya desarrolladas a lo largo de ambos bloques de obstetricia: biometría fetal seriada, doppler obstétrico, y otras pruebas de bienestar fetal, aplicadas con una frecuencia y una intensidad ajustadas al nivel específico de riesgo identificado en cada caso particular.',
        'Este tema, y con él todo el bloque de Obstetricia II, cierra retomando el hilo conductor completo que ha atravesado ambos bloques de obstetricia de este pensum: desde la fisiología normal del embarazo hasta las complicaciones más específicas y complejas aquí desarrolladas, cada pieza de conocimiento se integra en la capacidad de reconocer cuándo un embarazo se desvía de lo esperado, y de aplicar la vigilancia y el manejo apropiados según el nivel de riesgo identificado en cada caso.'
      ],
      foco:[
        '*Consideración clínica*: reconocer cuándo un embarazo de alto riesgo excede la capacidad resolutiva del nivel de atención actual, y referir oportunamente hacia una unidad de medicina materno-fetal especializada, es una aplicación directa y valiosa del principio de reconocer los límites de la propia capacidad de manejo.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 1.'
}

});
