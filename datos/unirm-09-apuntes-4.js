/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 4)
   Termina de cubrir FISIOPATOLOGIA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'fisiopatologia-liquidos-electrolitos': {
  tema:'Fisiopatología de líquidos y electrolitos',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:8,
  idea:'El sodio en sangre no mide, en el fondo, cuánto sodio tiene el cuerpo: mide la relación entre sodio y agua. Esa distinción, aunque contraintuitiva la primera vez que se explica, es la clave para entender casi todos los trastornos del sodio en la práctica clínica.',
  claves:['hiponatremia','hiperkalemia','deshidratación','tercer espacio'],
  sigue:'fisiopatologia-fiebre-sirs',
  secciones:[
    {
      t:'Por qué el sodio en sangre refleja agua, no solo sal',
      p:[
        'La *hiponatremia* (sodio bajo en sangre) casi nunca significa que el cuerpo tenga poco sodio total: la mayoría de las veces significa que el cuerpo tiene relativamente DEMASIADA AGUA respecto al sodio que tiene, diluyendo su concentración. Por eso, antes de tratar una hiponatremia, hay que preguntarse cómo está el volumen del paciente (deshidratado, normal, o con exceso de líquido), no simplemente "reponer sodio" sin pensar en el agua.',
        'La *deshidratación* es la pérdida de agua corporal (con frecuencia acompañada de pérdida de electrolitos también), y sus manifestaciones —sequedad de mucosas, disminución de la turgencia de la piel, cambios en la presión arterial— reflejan directamente la reducción del volumen circulante ya visto en la fisiología cardiovascular de 8vo cuatrimestre.'
      ]
    },
    {
      t:'Potasio y el tercer espacio',
      p:[
        'La *hiperkalemia* (potasio alto en sangre) es particularmente peligrosa porque el potasio es central para el potencial de membrana en reposo (ya visto en Fisiología I): un potasio muy elevado altera directamente la excitabilidad de las células cardíacas, pudiendo producir arritmias graves antes que cualquier otro síntoma visible —una de las pocas alteraciones electrolíticas que puede matar en minutos si no se reconoce a tiempo.',
        'El *tercer espacio* es un concepto útil para entender por qué un paciente puede estar clínicamente deshidratado (con signos de bajo volumen circulante efectivo) mientras acumula líquido en algún lugar del cuerpo (como ascitis, ya vista en Anatomía Patológica y semiología abdominal): ese líquido "atrapado" fuera del compartimento vascular normal no está disponible para la circulación, aunque el cuerpo, en total, no haya perdido agua.'
      ],
      foco:[
        'Consideración clínica: nunca se corrige un trastorno de sodio o potasio solo mirando el número de laboratorio; siempre hay que interpretar ese número junto con el estado clínico de volumen del paciente, exactamente como se insistió en el tema de fisiopatología ácido-base sobre no tratar un número aislado.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 33.'
},

'fisiopatologia-fiebre-sirs': {
  tema:'Fisiopatología de la fiebre y la respuesta inflamatoria sistémica',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:7,
  idea:'Este tema conecta directamente dos bloques ya vistos: la regulación de la temperatura de Fisiología I, y la inflamación aguda de Anatomía Patológica — juntas explican por qué una infección local puede, si se descontrola, terminar afectando a todo el cuerpo a la vez.',
  claves:['pirógeno','fiebre','SIRS','citocina'],
  sigue:'fisiopatologia-insuficiencia-cardiaca',
  secciones:[
    {
      t:'Del pirógeno al nuevo punto de ajuste',
      p:[
        'Un *pirógeno* es cualquier sustancia capaz de producir fiebre, ya sea externa (como el lipopolisacárido de bacterias gramnegativas, ya visto en Microbiología) o interna (*citocinas* inflamatorias que el propio cuerpo libera durante una infección o inflamación, retomando lo ya visto en Inmunología y en inflamación aguda). Estas sustancias actúan sobre el hipotálamo, elevando el punto de ajuste de temperatura, exactamente el mecanismo ya explicado con detalle en el tema de regulación de la temperatura de Fisiología I.'
      ]
    },
    {
      t:'Cuando la respuesta inflamatoria se vuelve sistémica',
      p:[
        'El *SIRS* (síndrome de respuesta inflamatoria sistémica) es lo que ocurre cuando la liberación de citocinas inflamatorias, normalmente contenida en el sitio local de una infección o lesión (como en la inflamación aguda ya vista), se vuelve tan intensa que se derrama hacia la circulación general y afecta a todo el cuerpo a la vez: fiebre (o hipotermia paradójica en casos severos), taquicardia, taquipnea y alteraciones en el conteo de glóbulos blancos son sus manifestaciones típicas, ya introducidas en el tema de interpretación de signos vitales de Semiología Clínica.',
        'Cuando el SIRS se debe específicamente a una infección, se habla de sepsis; y si progresa hasta comprometer la función de otros órganos por la caída de la presión arterial y la mala perfusión tisular generalizada, se llega al shock séptico ya visto en Anatomía Patológica.'
      ],
      foco:[
        'Este tema muestra un patrón que se repite en Fisiopatología: un mecanismo de defensa normal y útil (la inflamación local) se vuelve peligroso precisamente cuando pierde su contención y se generaliza a todo el cuerpo.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 11.'
},

'fisiopatologia-insuficiencia-cardiaca': {
  tema:'Fisiopatología de la insuficiencia cardíaca',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:8,
  idea:'La insuficiencia cardíaca no es "el corazón que se detiene": es el corazón que ya no puede bombear lo suficiente para las necesidades del cuerpo, y buena parte de sus síntomas vienen, paradójicamente, de los propios mecanismos compensadores del cuerpo intentando corregir ese déficit.',
  claves:['insuficiencia cardíaca','precarga','fracción de eyección','remodelado cardíaco'],
  sigue:'fisiopatologia-hipertension-arterial',
  secciones:[
    {
      t:'Cuando el corazón bombea menos de lo necesario',
      p:[
        'La *insuficiencia cardíaca* ocurre cuando el corazón no logra bombear suficiente sangre para satisfacer las demandas metabólicas del cuerpo, o solo puede hacerlo a costa de presiones de llenado anormalmente altas. La *fracción de eyección* (el porcentaje de sangre que el ventrículo izquierdo expulsa en cada latido, respecto al volumen que tenía al final del llenado) es la medida más usada para clasificarla: una fracción de eyección reducida refleja un problema de contractilidad (ya visto en Fisiología II); una fracción de eyección conservada, pero con síntomas de insuficiencia cardíaca de todos modos, sugiere un problema de RELAJACIÓN del ventrículo (que se llena mal, aunque se contraiga con normalidad).'
      ]
    },
    {
      t:'Los mecanismos compensadores, y por qué terminan siendo parte del problema',
      p:[
        'Ante un gasto cardíaco insuficiente, el cuerpo activa varios mecanismos compensadores: el sistema renina-angiotensina-aldosterona (ya visto en Fisiología II) retiene sodio y agua, aumentando la *precarga* (según la ley de Frank-Starling, ya vista, más precarga debería dar más fuerza de contracción); el sistema simpático aumenta la frecuencia cardíaca y la contractilidad; y el corazón sufre *remodelado cardíaco* (cambios estructurales, incluida cierta hipertrofia, ya vista en Anatomía Patológica, como adaptación al esfuerzo sostenido).',
        'El problema es que estos mecanismos, útiles a corto plazo, se vuelven perjudiciales si se mantienen activados de forma crónica: la retención de agua y sodio termina produciendo la congestión (edema, congestión pulmonar) característica de la insuficiencia cardíaca descompensada, y la activación simpática y hormonal sostenida acelera el deterioro del propio músculo cardíaco con el tiempo.'
      ],
      foco:[
        'Consideración clínica: esta es la lógica detrás de por qué muchos tratamientos de la insuficiencia cardíaca crónica (IECA, betabloqueantes) buscan precisamente BLOQUEAR estos mecanismos compensadores, en vez de estimularlos: a largo plazo, hacen más daño que beneficio.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 23.'
},

'fisiopatologia-hipertension-arterial': {
  tema:'Fisiopatología de la hipertensión arterial',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:7,
  idea:'La inmensa mayoría de los casos de hipertensión arterial no tienen una causa única identificable, y ese hecho, lejos de ser una limitación del conocimiento médico, refleja que la presión arterial depende de múltiples sistemas regulatorios trabajando (o fallando) juntos a la vez.',
  claves:['hipertensión arterial','sistema renina angiotensina','resistencia vascular'],
  sigue:'fisiopatologia-respiratoria-hipoxemia-hipercapnia',
  secciones:[
    {
      t:'Retomando la ecuación: gasto cardíaco por resistencia',
      p:[
        'Como se vio en Fisiología II, la presión arterial depende del gasto cardíaco y de la *resistencia vascular* periférica. La hipertensión arterial esencial (sin una causa única identificable, la forma más frecuente con diferencia) resulta de la interacción de múltiples factores que, en conjunto, elevan alguno de estos dos componentes: predisposición genética, exceso de sodio en la dieta (que aumenta el volumen circulante, y con él, el gasto cardíaco a largo plazo), activación crónica del *sistema renina angiotensina* (ya visto, que aumenta tanto la resistencia vascular directamente como la retención de sodio), y activación simpática sostenida.'
      ]
    },
    {
      t:'El daño de órgano diana, consecuencia directa de la presión sostenida',
      p:[
        'Con el tiempo, la presión elevada sostenida daña progresivamente a los llamados "órganos diana": acelera la aterosclerosis (contribuyendo a enfermedad coronaria e ictus), sobrecarga al corazón (favoreciendo el remodelado cardíaco y, eventualmente, la insuficiencia cardíaca ya vista), daña las arteriolas pequeñas del riñón (contribuyendo a enfermedad renal crónica) y de la retina (retinopatía hipertensiva).',
        'Esta lista de órganos diana no es aleatoria: son, precisamente, los órganos con lechos vasculares particularmente sensibles a la presión sostenida, ya sea por su alto flujo (riñón), su fragilidad vascular (retina, cerebro) o su dependencia de una perfusión constante y eficiente (corazón).'
      ],
      foco:[
        'Este tema retoma directamente la fisiología cardiovascular de 8vo cuatrimestre: entender la hipertensión como una falla del sistema de control de presión (barorreceptores, renina-angiotensina) ya estudiado, no como una enfermedad aislada y nueva, es lo que permite predecir tanto sus causas como sus complicaciones.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 24.'
},

'fisiopatologia-respiratoria-hipoxemia-hipercapnia': {
  tema:'Fisiopatología respiratoria: hipoxemia e hipercapnia',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:8,
  idea:'Que a un paciente le falte oxígeno y que le sobre CO2 no son, necesariamente, el mismo problema: pueden ocurrir juntos, o cada uno por separado, y distinguir el mecanismo exacto es lo que orienta el tratamiento correcto.',
  claves:['hipoxemia','hipercapnia','shunt','efecto espacio muerto'],
  sigue:'fisiopatologia-renal-nefrotico-nefritico',
  secciones:[
    {
      t:'Cuatro mecanismos de hipoxemia',
      p:[
        'La *hipoxemia* (oxígeno bajo en sangre arterial) puede deberse a varios mecanismos, retomando directamente el tema de relación ventilación-perfusión ya visto en Fisiología II. El desajuste ventilación-perfusión (áreas del pulmón ventiladas pero mal perfundidas, o perfundidas pero mal ventiladas) es la causa más frecuente en la práctica clínica. El *shunt* es un caso extremo de ese desajuste: sangre que pasa por el pulmón SIN ventilación alguna en esa zona (por ejemplo, un alvéolo completamente colapsado o lleno de líquido), de modo que ni siquiera aumentando el oxígeno inspirado se corrige del todo, porque esa sangre nunca tuvo contacto con aire.',
        'La hipoventilación general (que reduce el oxígeno disponible en todos los alvéolos a la vez) y la alteración de la difusión (cuando la barrera alvéolo-capilar, ya vista en Fisiología II, está engrosada o dañada, dificultando el paso del oxígeno) completan los mecanismos principales.'
      ]
    },
    {
      t:'Hipercapnia: casi siempre un problema de ventilación',
      p:[
        'La *hipercapnia* (CO2 elevado en sangre) refleja, casi siempre, que la ventilación alveolar total es insuficiente para eliminar el CO2 que el cuerpo produce —a diferencia de la hipoxemia, que tiene varios mecanismos posibles, la hipercapnia apunta de forma bastante directa hacia un problema de ventilación (retomando el control de la respiración ya visto en Fisiología II).',
        'El *efecto espacio muerto* (ya introducido en Fisiología II) agrava específicamente la hipercapnia: si una parte del aire que se mueve con cada respiración va a zonas sin buen riego sanguíneo, ese aire no participa realmente en eliminar CO2, aunque el volumen total movido por minuto parezca adecuado.'
      ],
      foco:[
        'Regla práctica: un paciente puede tener hipoxemia SIN hipercapnia (los mecanismos de desajuste ventilación-perfusión o shunt pueden bajar el oxígeno sin necesariamente subir mucho el CO2, sobre todo al inicio), pero la hipercapnia casi siempre indica que la ventilación global ya es insuficiente, un dato más tardío y más preocupante en la evolución de una insuficiencia respiratoria.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 21.'
},

'fisiopatologia-renal-nefrotico-nefritico': {
  tema:'Fisiopatología renal: síndrome nefrótico y nefrítico',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:8,
  idea:'Estos dos síndromes se confunden con frecuencia por sus nombres tan parecidos, pero reflejan daños distintos a la misma estructura —el filtro glomerular ya visto en Fisiología II— y por eso se manifiestan de forma casi opuesta en varios aspectos.',
  claves:['síndrome nefrótico','síndrome nefrítico','proteinuria','hematuria'],
  sigue:'fisiopatologia-insuficiencia-hepatica',
  secciones:[
    {
      t:'Síndrome nefrótico: la barrera de filtración pierde su selectividad',
      p:[
        'El *síndrome nefrótico* ocurre cuando la barrera de filtración glomerular (ya vista en Fisiología II: endotelio, membrana basal, podocitos) se daña de una forma que compromete principalmente su capacidad de RETENER proteínas grandes, dejándolas escapar hacia la orina en cantidad masiva: *proteinuria* severa, que a su vez reduce la proteína (albúmina) en la sangre, bajando la presión oncótica del plasma (retomando el concepto ya visto en la filtración glomerular y en edema de Anatomía Patológica) y produciendo edema generalizado, a veces muy marcado.',
        'La hematuria, si aparece, es leve o está ausente en el síndrome nefrótico puro: el daño de esta barrera afecta sobre todo el tamaño de lo que se filtra (deja pasar proteínas), no necesariamente rompe los capilares lo suficiente como para dejar pasar glóbulos rojos.'
      ]
    },
    {
      t:'Síndrome nefrítico: inflamación con ruptura de capilares',
      p:[
        'El *síndrome nefrítico*, en cambio, es un proceso predominantemente inflamatorio del glomérulo (retomando la inflamación aguda o crónica ya vistas en Anatomía Patológica), que daña físicamente los capilares glomerulares lo suficiente como para dejar escapar glóbulos rojos hacia la orina: *hematuria*, con frecuencia visible (orina de color oscuro, "como Coca-Cola"), acompañada de hipertensión arterial (por retención de sodio y agua, dado que la inflamación reduce la tasa de filtración glomerular) y proteinuria generalmente más modesta que en el síndrome nefrótico.'
      ],
      foco:[
        'Regla de contraste para no confundirlos: nefrótico → proteinuria masiva, edema marcado, poca sangre en orina (predomina la pérdida de proteínas). Nefrítico → hematuria prominente, hipertensión, proteinuria más leve (predomina la inflamación con ruptura capilar).'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 26.'
},

'fisiopatologia-insuficiencia-hepatica': {
  tema:'Fisiopatología de la insuficiencia hepática',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:8,
  idea:'El hígado hace tantos trabajos distintos a la vez —metaboliza, fabrica proteínas, filtra la sangre que viene del intestino, produce bilis— que cuando falla, sus consecuencias se manifiestan en casi todos los sistemas del cuerpo a la vez, no en uno solo.',
  claves:['insuficiencia hepática','hipertensión portal','encefalopatía hepática','ascitis'],
  sigue:'fisiopatologia-endocrina-basica',
  secciones:[
    {
      t:'Consecuencias de perder las funciones metabólicas del hígado',
      p:[
        'La *insuficiencia hepática* compromete varias funciones a la vez, retomando temas ya vistos en Bioquímica II: la producción de urea a partir del amoniaco (ciclo de la urea) se reduce, dejando que el amoniaco se acumule en sangre y llegue al cerebro, produciendo la *encefalopatía hepática*: confusión, alteración del nivel de conciencia, y en casos severos coma. La conjugación de bilirrubina también se compromete (retomando el metabolismo del hemo y la bilirrubina), contribuyendo a la ictericia ya vista. La síntesis de proteínas plasmáticas (incluidos los factores de coagulación, ya vistos en Fisiología I) disminuye, aumentando el riesgo de sangrado.'
      ]
    },
    {
      t:'Hipertensión portal y ascitis',
      p:[
        'Cuando el daño hepático es crónico (como en la cirrosis), el tejido cicatricial (fibrosis, ya vista en Anatomía Patológica) reemplaza progresivamente al tejido hepático funcional y distorsiona la arquitectura vascular del hígado, aumentando la resistencia al flujo de sangre que llega desde el intestino por la vena porta: *hipertensión portal*. Esa presión elevada empuja líquido hacia la cavidad peritoneal, contribuyendo a la *ascitis* (ya mencionada en Anatomía Patológica y en semiología abdominal), y además abre rutas venosas alternativas (várices, como las esofágicas) para desviar la sangre, evitando el hígado obstruido —rutas que, al estar bajo presión anormalmente alta, tienen riesgo de romperse y sangrar de forma grave.'
      ],
      foco:[
        'Este tema conecta directamente Bioquímica II (metabolismo del amoniaco, la bilirrubina, las proteínas plasmáticas) con la Anatomía Patológica (fibrosis) y la semiología (ascitis, ictericia): la insuficiencia hepática es, en gran medida, la suma de perder todas esas funciones bioquímicas a la vez.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 30.'
},

'fisiopatologia-endocrina-basica': {
  tema:'Fisiopatología endocrina básica',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:6,
  idea:'La mayoría de las enfermedades endocrinas se pueden clasificar respondiendo a una sola pregunta: ¿el problema es que hay demasiada hormona, muy poca, o hay hormona suficiente pero el tejido diana no responde a ella?',
  claves:['retroalimentación hormonal','hipotálamo hipófisis','resistencia a la insulina'],
  sigue:'fisiopatologia-dolor-cronico',
  secciones:[
    {
      t:'Tres categorías generales de disfunción endocrina',
      p:[
        'Retomando el eje hipotálamo-hipófisis y la *retroalimentación hormonal* ya vistos en Fisiología II, una enfermedad endocrina generalmente encaja en una de tres categorías: producción EXCESIVA de una hormona (por ejemplo, un tumor de una glándula que secreta sin responder a la retroalimentación normal), producción INSUFICIENTE (por destrucción de la glándula, o de la estructura que la controla en el eje hipotálamo-hipófisis), o RESISTENCIA del tejido diana a una hormona que sí está presente en cantidad normal o incluso elevada.'
      ]
    },
    {
      t:'Resistencia a la insulina como ejemplo central',
      p:[
        'La *resistencia a la insulina* es el ejemplo más citado de esta tercera categoría: las células del cuerpo responden menos de lo normal a la insulina circulante (retomando el receptor hormonal ya visto en Fisiología II), así que necesitan concentraciones más altas de insulina para lograr el mismo efecto sobre la captación de glucosa. Inicialmente, el páncreas compensa produciendo más insulina (hiperinsulinemia compensatoria); con el tiempo, si esa compensación no basta, la glucemia empieza a subir, un proceso central en el desarrollo de la diabetes tipo 2, que se verá con más detalle en un tema posterior de este mismo bloque.'
      ],
      foco:[
        'Consideración práctica: ante cualquier trastorno endocrino nuevo, preguntarse primero en cuál de las tres categorías encaja (exceso, déficit, o resistencia) ayuda a organizar el razonamiento antes de profundizar en la glándula específica involucrada.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 31.'
},

'fisiopatologia-dolor-cronico': {
  tema:'Fisiopatología del dolor crónico',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:7,
  idea:'El dolor crónico no es, simplemente, "el dolor agudo que no se ha curado todavía": en muchos casos, el propio sistema nervioso se reorganiza y empieza a generar o amplificar dolor por sí mismo, incluso cuando el daño tisular original ya sanó por completo.',
  claves:['dolor crónico','sensibilización central','dolor neuropático','hiperalgesia'],
  sigue:'fisiopatologia-anemia',
  secciones:[
    {
      t:'Sensibilización central: el sistema nervioso se vuelve más sensible',
      p:[
        'La *sensibilización central* es un cambio funcional (y a veces estructural) en las neuronas de la médula espinal y el cerebro que procesan el dolor (retomando la vía del dolor ya vista en Fisiología I), tras una exposición prolongada o intensa a señales dolorosas: esas neuronas se vuelven más excitables, amplificando la señal de dolor incluso ante estímulos que antes no dolían tanto, o que normalmente ni siquiera deberían doler. Este cambio explica por qué el dolor crónico puede persistir, e incluso empeorar, después de que el daño tisular original ya haya sanado por completo: el problema ya no está en el tejido, está en cómo el sistema nervioso está procesando la señal.'
      ]
    },
    {
      t:'Dolor neuropático e hiperalgesia',
      p:[
        'El *dolor neuropático* se origina por daño o disfunción directa del propio sistema nervioso (un nervio periférico dañado, una lesión de la médula espinal), a diferencia del dolor nociceptivo habitual, que se origina por la activación normal de nociceptores frente a un daño tisular real. Suele describirse con calidades distintas (quemante, como choques eléctricos, hormigueo) y responde de forma diferente a los analgésicos habituales, retomando el mecanismo ya visto sobre las vías descendentes moduladoras del dolor en Fisiología I.',
        'La *hiperalgesia* es una respuesta de dolor exagerada frente a un estímulo que normalmente sí sería doloroso, pero de intensidad menor a la que se percibe; la alodinia (un concepto relacionado) es sentir dolor ante un estímulo que normalmente NO debería doler en absoluto (como el simple roce de la ropa). Ambas son manifestaciones típicas de la sensibilización central ya descrita.'
      ],
      foco:[
        'Consideración clínica: reconocer que el dolor crónico puede tener un componente de sensibilización central (no solo el daño tisular original) es importante porque cambia el enfoque terapéutico: tratar solo la causa original, si ya sanó, puede no aliviar un dolor que ahora se sostiene, en parte, por el propio sistema nervioso central.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 35.'
},

'fisiopatologia-anemia': {
  tema:'Fisiopatología de la anemia',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:7,
  idea:'El cuerpo tiene solo tres formas posibles de terminar con anemia —producir menos glóbulos rojos, destruirlos más rápido de lo normal, o perderlos por sangrado— y clasificar cualquier anemia según cuál de estas tres vías aplica es el primer paso de cualquier estudio.',
  claves:['anemia','hipoxia tisular','eritropoyetina','mecanismo compensador cardiovascular'],
  sigue:'fisiopatologia-diabetes-mellitus',
  secciones:[
    {
      t:'Tres mecanismos posibles, un mismo resultado final',
      p:[
        'La *anemia* (déficit de hemoglobina o de eritrocitos funcionales, ya vistos en Fisiología I e Histología) puede deberse a producción insuficiente en la médula ósea (por falta de hierro, vitamina B12, o por enfermedad de la propia médula), destrucción acelerada de glóbulos rojos ya formados (hemólisis, por ejemplo en la deficiencia de glucosa-6-fosfato deshidrogenasa ya vista en Bioquímica II), o pérdida de sangre (hemorragia aguda o crónica). Sin importar el mecanismo, el resultado final compartido es el mismo: menos capacidad de transportar oxígeno a los tejidos, *hipoxia tisular*.'
      ]
    },
    {
      t:'Cómo responde el cuerpo: eritropoyetina y compensación cardiovascular',
      p:[
        'Ante la hipoxia tisular, el riñón detecta la falta de oxígeno y aumenta la producción de *eritropoyetina*, la hormona que estimula a la médula ósea a producir más glóbulos rojos (retomando directamente el estímulo primario de la eritropoyesis ya estudiado en el banco de ENURM sobre este tema). Esta respuesta, sin embargo, tarda días a semanas en aumentar significativamente el conteo de glóbulos rojos, así que no sirve como compensación inmediata.',
        'Mientras tanto, el cuerpo activa un *mecanismo compensador cardiovascular* más rápido: aumenta el gasto cardíaco (mayor frecuencia y volumen sistólico, ya vistos en Fisiología II) para hacer circular más rápido la sangre disponible, aunque tenga menos capacidad de transportar oxígeno por unidad de volumen —es la razón por la que un paciente con anemia significativa suele presentar taquicardia, incluso en reposo, y puede sentir palpitaciones con esfuerzos que antes no le causaban ningún síntoma.'
      ],
      foco:[
        'Consideración clínica: una anemia de instauración GRADUAL (como la ferropénica crónica) suele tolerarse mejor, con menos síntomas, que una del mismo grado pero de instauración AGUDA (como una hemorragia súbita), porque el cuerpo tiene tiempo de activar sus mecanismos compensadores de forma progresiva en el primer caso, no en el segundo.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 15.'
},

'fisiopatologia-diabetes-mellitus': {
  tema:'Fisiopatología de la diabetes mellitus',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:8,
  idea:'Este tema reúne, en una sola enfermedad, casi todo lo visto en Bioquímica II sobre la regulación de la glucosa: entender bien la diabetes exige recordar exactamente qué hace la insulina, y qué pasa cuando falta o cuando el cuerpo deja de responderle.',
  claves:['resistencia a la insulina','hiperglucemia crónica','cetoacidosis diabética','glucotoxicidad'],
  sigue:'sindrome-metabolico',
  secciones:[
    {
      t:'Dos caminos distintos hacia la misma hiperglucemia',
      p:[
        'La diabetes mellitus tipo 1 resulta de una destrucción autoinmune (retomando la autoinmunidad ya vista en Inmunología) de las células del páncreas que producen insulina, resultando en un déficit ABSOLUTO de esta hormona. La diabetes tipo 2 resulta, principalmente, de *resistencia a la insulina* (ya introducida en el tema de fisiopatología endocrina de este mismo bloque) combinada con una capacidad pancreática insuficiente para compensar esa resistencia con más producción de insulina a largo plazo.',
        'En ambos casos, el resultado es *hiperglucemia crónica*: la glucosa se acumula en la sangre porque las células no pueden captarla eficientemente (sin insulina, o sin respuesta a ella), retomando directamente el rol de la insulina en la captación de glucosa ya visto en Bioquímica II.'
      ]
    },
    {
      t:'Complicaciones agudas y crónicas',
      p:[
        'La *cetoacidosis diabética*, ya mencionada en el tema de beta-oxidación y cuerpos cetónicos de Bioquímica II y en el de fisiopatología ácido-base, ocurre casi exclusivamente cuando falta insulina de forma casi absoluta (típico de la diabetes tipo 1 no tratada): las células, sin poder usar la glucosa disponible, activan una cetogénesis descontrolada, produciendo una acidosis metabólica grave.',
        'La *glucotoxicidad* describe el daño acumulado que la hiperglucemia crónica y sostenida (no la aguda) va causando en distintos tejidos con el tiempo: los vasos sanguíneos pequeños (retinopatía, nefropatía, ya vistas en el contexto de la hipertensión), los nervios periféricos (neuropatía), y los vasos grandes (acelerando la aterosclerosis). Este daño progresivo y silencioso es, en gran medida, la razón por la que el control glucémico sostenido a largo plazo —no solo evitar una crisis aguda puntual— es el objetivo central del tratamiento de la diabetes.'
      ],
      foco:[
        'Este tema conecta de forma muy directa Bioquímica II (insulina, glucagón, cetogénesis), Genética Médica (predisposición y herencia multifactorial), Inmunología (autoinmunidad en tipo 1) y Fisiopatología (resistencia a la insulina, glucotoxicidad): es, quizás, el mejor ejemplo de todo el programa de cómo distintos bloques convergen en una sola enfermedad real.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 42.'
},

'sindrome-metabolico': {
  tema:'Síndrome metabólico',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:7,
  idea:'Este último tema del bloque de Fisiopatología cierra mostrando cómo varios factores de riesgo, que podrían parecer independientes entre sí, en realidad comparten un mismo mecanismo subyacente central: la resistencia a la insulina.',
  claves:['síndrome metabólico','obesidad central','dislipidemia','resistencia insulínica'],
  sigue:null,
  secciones:[
    {
      t:'Un conjunto de factores que tienden a presentarse juntos',
      p:[
        'El *síndrome metabólico* se define por la presencia conjunta de varios factores de riesgo cardiovascular en la misma persona: *obesidad central* (grasa acumulada preferentemente en el abdomen, medida clínicamente con la circunferencia de la cintura), presión arterial elevada (retomando la hipertensión ya vista en este bloque), glucosa elevada en ayunas (reflejando ya cierto grado de resistencia a la insulina, aunque todavía sin llegar al umbral diagnóstico de diabetes), y *dislipidemia* característica: triglicéridos elevados y colesterol HDL bajo (retomando las lipoproteínas ya vistas en Bioquímica II).'
      ]
    },
    {
      t:'La resistencia insulínica como hilo conductor',
      p:[
        'La *resistencia insulínica*, ya vista como mecanismo central de la diabetes tipo 2, es considerada el factor subyacente que conecta a la mayoría de estos componentes: la obesidad central (especialmente la grasa visceral, alrededor de los órganos abdominales) contribuye directamente a la resistencia a la insulina, que a su vez favorece tanto la elevación de la glucosa como alteraciones específicas en el metabolismo de los lípidos y, por mecanismos adicionales, contribuye también a la elevación de la presión arterial.',
        'Tener síndrome metabólico no es tener varias enfermedades separadas por coincidencia: es tener un único desequilibrio metabólico central (la resistencia a la insulina, potenciada por la obesidad central) que se manifiesta simultáneamente en varios sistemas del cuerpo a la vez, y que aumenta de forma significativa el riesgo de desarrollar tanto diabetes tipo 2 franca como enfermedad cardiovascular.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Fisiopatología con un mensaje central que atraviesa casi todos los temas anteriores: muchas enfermedades que parecen distintas entre sí (hipertensión, diabetes, dislipidemia, insuficiencia cardíaca) comparten mecanismos fisiopatológicos comunes, y entender esos mecanismos compartidos es más útil que memorizar cada enfermedad como un compartimento aislado.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 42.'
}

});
