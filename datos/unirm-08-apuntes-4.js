/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 4)
   Termina de cubrir FISIOLOGIA II por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'introduccion-endocrinologia': {
  tema:'Introducción a la endocrinología',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:7,
  idea:'Comparado con el sistema nervioso (rápido, señales eléctricas, efectos de milisegundos), el sistema endocrino es su contraparte lenta y duradera: hormonas que viajan por la sangre y actúan en minutos u horas, pero cuyo efecto suele sostenerse mucho más tiempo.',
  claves:['hormona','eje hipotálamo hipófisis','retroalimentación','receptor hormonal'],
  sigue:'hemodinamica-regulacion-presion',
  secciones:[
    {
      t:'Una hormona necesita un receptor para actuar',
      p:[
        'Una *hormona* es una molécula secretada por una glándula endocrina (ya vistas en Histología) hacia la sangre, que viaja por todo el cuerpo pero solo afecta a las células que tienen el *receptor hormonal* específico para ella —una célula sin ese receptor simplemente ignora la hormona, aunque esté bañada en ella. Esto explica por qué una misma hormona circulando en la misma concentración puede tener efectos completamente distintos, o ningún efecto, según el tejido: lo que cambia no es la hormona, es qué receptores tiene cada célula.',
        'Según su naturaleza química, las hormonas actúan de forma distinta: las hormonas proteicas (como la insulina) no pueden atravesar la membrana celular y actúan sobre receptores en la superficie de la célula, disparando una cascada de señales internas; las hormonas esteroideas (como el cortisol) sí son liposolubles y pueden atravesar la membrana, actuando directamente sobre receptores dentro de la célula, muchas veces regulando qué genes se activan.'
      ]
    },
    {
      t:'El eje hipotálamo-hipófisis: el centro de control de buena parte del sistema',
      p:[
        'Buena parte del sistema endocrino está organizado de forma jerárquica alrededor del *eje hipotálamo-hipófisis*: el hipotálamo (que además conecta al sistema endocrino con el sistema nervioso, integrando ambos) libera hormonas que controlan a la hipófisis, y la hipófisis, a su vez, libera hormonas que controlan a otras glándulas periféricas (tiroides, suprarrenales, gónadas), que finalmente producen el efecto hormonal final en el resto del cuerpo.',
        'Este arreglo en cadena permite un control muy preciso por *retroalimentación*: cuando la glándula periférica final produce suficiente hormona, esa misma hormona viaja de regreso y frena la liberación de las hormonas de control en el hipotálamo y la hipófisis, cerrando el circuito —la misma lógica de retroalimentación negativa ya vista repetidamente en Fisiología I, aplicada ahora a cascadas hormonales de varios niveles en vez de a una sola variable.'
      ],
      foco:[
        'Consideración clínica: este diseño en cascada permite, además, LOCALIZAR el origen de un problema hormonal: si una hormona periférica está baja, medir también las hormonas de control de la hipófisis ayuda a distinguir si el problema está en la propia glándula periférica, o más arriba, en el eje que la controla.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 74.'
},

'hemodinamica-regulacion-presion': {
  tema:'Hemodinámica y regulación de la presión',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:8,
  idea:'La presión arterial no se mide y se olvida: el cuerpo la vigila constantemente, segundo a segundo, con sensores que detectan cualquier caída y disparan una respuesta correctora casi de inmediato, mucho antes de que el riñón (más lento) tenga tiempo de intervenir.',
  claves:['presión arterial','resistencia periférica','barorreceptor','renina','angiotensina'],
  sigue:'ventilacion-mecanica-respiratoria',
  secciones:[
    {
      t:'Los barorreceptores: control rápido, minuto a minuto',
      p:[
        'Los *barorreceptores*, ubicados en el arco aórtico y en el seno carotídeo, detectan el estiramiento de la pared arterial (que aumenta cuando sube la presión) y mandan esa información al tronco encefálico. Si la presión sube, disparan una respuesta que reduce la actividad simpática y aumenta la parasimpática (bajando la frecuencia cardíaca y la resistencia vascular); si la presión baja, ocurre lo contrario. Es un mecanismo de retroalimentación negativa rápido, que actúa en segundos, pero que se "reajusta" a un nuevo punto de referencia si la presión se mantiene alta o baja de forma sostenida durante días —por eso no sirve, por sí solo, como control a largo plazo de la hipertensión crónica.'
      ]
    },
    {
      t:'El sistema renina-angiotensina: control lento, pero más potente',
      p:[
        'Cuando el riñón detecta una caída de la presión de perfusión (o de sodio), libera *renina*, una enzima que inicia una cascada: convierte una proteína plasmática (angiotensinógeno) en angiotensina I, que después se convierte en *angiotensina* II (por una enzima que abunda sobre todo en el pulmón). La angiotensina II es un vasoconstrictor potente (sube directamente la resistencia periférica) y además estimula la liberación de aldosterona, que hace que el riñón retenga más sodio y agua, aumentando el volumen circulante.',
        'Este sistema es más lento que el reflejo barorreceptor (actúa en minutos a horas, no en segundos), pero es mucho más importante para el control de la presión a largo plazo —y es, precisamente, el sistema sobre el que actúan directamente los IECA y los ARA II, dos de las familias de antihipertensivos más usadas.'
      ],
      foco:[
        'Consideración clínica: esta es la explicación fisiológica detrás de por qué los IECA (que bloquean la formación de angiotensina II) son especialmente útiles en pacientes con activación crónica de este sistema, como en la insuficiencia cardíaca o la enfermedad renal.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 18-19.'
},

'ventilacion-mecanica-respiratoria': {
  tema:'Ventilación y mecánica respiratoria',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:7,
  idea:'Respirar no es empujar aire hacia adentro: es crear, dentro del tórax, una presión más baja que la del ambiente, para que el aire entre solo por diferencia de presión, de forma parecida a cómo se llena de aire un fuelle al expandirlo.',
  claves:['ventilación','distensibilidad','surfactante','espacio muerto','volumen corriente'],
  sigue:'intercambio-transporte-gases',
  secciones:[
    {
      t:'Cómo entra y sale el aire: presión negativa, no positiva',
      p:[
        'Durante la inspiración, el diafragma se contrae y desciende, y los músculos intercostales expanden la caja torácica; ese aumento de volumen del tórax reduce la presión dentro de los pulmones por debajo de la presión atmosférica, y el aire entra siguiendo ese gradiente de presión, sin que nada lo "empuje" activamente hacia adentro. La espiración normal, en reposo, es un proceso mayormente pasivo: los pulmones y la caja torácica, que se habían estirado, simplemente regresan a su posición de reposo por su propia elasticidad, expulsando el aire.',
        'La *distensibilidad* pulmonar mide qué tan fácil es expandir el pulmón con un cambio dado de presión: un pulmón muy distensible se expande con poco esfuerzo (como ocurre, por ejemplo, en el enfisema, donde el tejido pulmonar pierde elasticidad); un pulmón poco distensible (como en la fibrosis pulmonar) necesita mucho más esfuerzo para expandirse la misma cantidad.'
      ]
    },
    {
      t:'El surfactante y el espacio muerto',
      p:[
        'El *surfactante*, una sustancia producida por células especializadas del alvéolo, reduce la tensión superficial dentro de los alvéolos, evitando que colapsen entre respiración y respiración (sin él, los alvéolos más pequeños tenderían a colapsarse y vaciar su aire hacia los más grandes, según la física de la tensión superficial). Su producción es insuficiente en el prematuro, lo que explica el síndrome de dificultad respiratoria del recién nacido prematuro, una de las razones prácticas más citadas para entender la importancia de esta sustancia.',
        'El *espacio muerto* es el volumen de aire que se mueve con cada respiración pero que NO participa en el intercambio de gases: el aire que se queda en la tráquea y los bronquios grandes (espacio muerto anatómico), donde no hay alvéolos, y en menor medida el aire que llega a alvéolos que, por alguna razón, no tienen buen riego sanguíneo (espacio muerto fisiológico). No todo el *volumen corriente* (el aire que entra y sale en una respiración normal) llega efectivamente a intercambiarse.'
      ],
      foco:[
        'Consideración clínica: en una respiración muy superficial y rápida (como puede pasar en dolor torácico intenso, cuando respirar hondo duele), una proporción mayor de cada respiración se queda en el espacio muerto, reduciendo la ventilación alveolar EFECTIVA aunque el volumen total de aire movido por minuto no cambie mucho.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 37-38.'
},

'intercambio-transporte-gases': {
  tema:'Intercambio y transporte de gases',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:8,
  idea:'La hemoglobina no transporta oxígeno de forma pasiva: cambia su afinidad por él según las condiciones del tejido que atraviesa, soltando más oxígeno precisamente donde y cuando más se necesita, sin que nadie tenga que "decidirlo".',
  claves:['difusión alveolar','hemoglobina','curva de disociación','ventilación perfusión','2,3-DPG'],
  sigue:'control-respiracion',
  secciones:[
    {
      t:'Por qué el gas cruza tan rápido en el alvéolo',
      p:[
        'El oxígeno y el CO2 cruzan la delgadísima barrera entre el alvéolo y el capilar pulmonar por *difusión* simple, a favor de su gradiente de presión parcial: el oxígeno, más concentrado en el aire alveolar que en la sangre venosa que llega, difunde hacia la sangre; el CO2, más concentrado en la sangre venosa que en el aire alveolar, difunde hacia el alvéolo para ser exhalado. Este intercambio es extremadamente eficiente porque la distancia a cruzar es mínima (una sola capa de células a cada lado) y la superficie total disponible (sumando todos los alvéolos) es enorme.',
        'Para que este intercambio funcione bien, hace falta que el aire que llega a un alvéolo (ventilación) y la sangre que llega a ese mismo alvéolo (perfusión) estén razonablemente equilibrados: la relación *ventilación-perfusión* es uno de los conceptos que más se usa para explicar por qué ciertas enfermedades pulmonares producen hipoxemia (un área bien ventilada pero mal perfundida, o bien perfundida pero mal ventilada, desperdicia parte de su capacidad de intercambio).'
      ]
    },
    {
      t:'La curva de disociación de la hemoglobina: soltar oxígeno donde hace falta',
      p:[
        'La mayor parte del oxígeno en sangre viaja unido a la *hemoglobina*, no disuelto libremente en el plasma. La relación entre la presión de oxígeno y cuánto oxígeno se une a la hemoglobina no es una línea recta: es una curva en forma de S, la *curva de disociación* de la hemoglobina, y su forma tiene sentido fisiológico —en el pulmón (presión de oxígeno alta), la hemoglobina se satura casi por completo; en los tejidos periféricos (presión de oxígeno más baja), suelta una parte importante de ese oxígeno, precisamente donde se necesita.',
        'Esta curva se puede desplazar: ciertas condiciones (temperatura elevada, acidosis, aumento del CO2, aumento del *2,3-DPG*, una molécula que se acumula en el glóbulo rojo) desplazan la curva hacia la derecha, reduciendo la afinidad de la hemoglobina por el oxígeno y facilitando que lo suelte más fácilmente. Tiene una lógica biológica elegante: un tejido que está trabajando mucho (músculo en ejercicio, por ejemplo) genera más calor, más CO2 y más acidez local, y esas mismas condiciones son la señal que le dice a la hemoglobina "suelta más oxígeno aquí, que aquí hace falta".'
      ],
      foco:[
        'Consideración clínica: el monóxido de carbono se une a la hemoglobina con una afinidad mucho mayor que el oxígeno, desplazándolo y además impidiendo que la hemoglobina suelte bien el poco oxígeno que sí lleva: es la base de por qué la intoxicación por monóxido de carbono es tan peligrosa, aun cuando el pulmón esté ventilando con normalidad.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 40-41.'
},

'control-respiracion': {
  tema:'Control de la respiración',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:6,
  idea:'Respirar es automático la mayor parte del tiempo, pero el estímulo principal que controla ese automatismo no es, como mucha gente asume, la falta de oxígeno: es la acumulación de CO2, un dato que cambia por completo cómo se entiende la insuficiencia respiratoria crónica.',
  claves:['centro respiratorio','quimiorreceptor','PaCO2','hipoxemia'],
  sigue:'filtracion-glomerular',
  secciones:[
    {
      t:'El centro respiratorio y su estímulo principal',
      p:[
        'El ritmo respiratorio basal se genera en el *centro respiratorio*, un grupo de neuronas en el bulbo raquídeo y la protuberancia, que dispara de forma automática y rítmica, sin necesitar una orden consciente (aunque sí se puede modificar voluntariamente, hasta cierto punto, como al contener la respiración). Ese centro recibe información constante de *quimiorreceptores* que vigilan la composición química de la sangre.',
        'Contra la intuición común, el estímulo más potente y constante para ajustar la ventilación NO es el nivel de oxígeno, sino el nivel de CO2 (medido como *PaCO2*, la presión parcial de CO2 en sangre arterial): pequeños aumentos del CO2 disparan un aumento notable de la ventilación, detectados sobre todo por quimiorreceptores centrales en el propio tronco encefálico, sensibles a los cambios de pH que el CO2 produce en el líquido cefalorraquídeo.'
      ]
    },
    {
      t:'Cuando el estímulo cambia: la retención crónica de CO2',
      p:[
        'Existen también quimiorreceptores periféricos (en el cuerpo carotídeo y aórtico) que sí responden directamente a la caída del oxígeno (*hipoxemia*), pero normalmente son un estímulo secundario, mucho menos sensible que el del CO2, y solo se vuelven dominantes cuando la hipoxemia es bastante marcada.',
        'Ejemplo trabajado, consideración clínica clásica: en un paciente con retención CRÓNICA de CO2 (como en algunas enfermedades pulmonares avanzadas), el centro respiratorio puede, con el tiempo, volverse menos sensible a niveles altos y sostenidos de CO2 —se "acostumbra" a ese CO2 elevado como su nueva normalidad—, y el estímulo hipóxico periférico pasa a ser, en esos pacientes específicos, el principal impulso que mantiene la ventilación. Es la base fisiológica (aunque con matices importantes en su aplicación práctica) de la precaución clásica de no corregir de forma demasiado agresiva y rápida el oxígeno en estos pacientes concretos, sin vigilancia adecuada.'
      ],
      foco:[
        'No confundir: en la inmensa mayoría de las personas y de las situaciones clínicas agudas, el oxígeno se administra sin restricción cuando hace falta; la excepción de la retención crónica de CO2 es una situación específica, no la regla general.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 42.'
},

'manejo-tubular-concentracion-orina': {
  tema:'Manejo tubular y concentración de orina',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:7,
  idea:'El riñón no decide qué eliminar filtrando selectivamente: filtra casi todo sin distinción, y la verdadera selección ocurre después, en los túbulos, reabsorbiendo activamente lo que el cuerpo quiere conservar y dejando pasar lo que quiere eliminar.',
  claves:['túbulo proximal','asa de Henle','contracorriente','ADH','aldosterona'],
  sigue:'fisiologia-digestiva',
  secciones:[
    {
      t:'El túbulo proximal: reabsorción masiva y poco selectiva',
      p:[
        'El *túbulo proximal*, la primera parte del sistema tubular después del glomérulo, reabsorbe la mayor parte del filtrado: cerca de dos tercios del agua y del sodio filtrados, y prácticamente toda la glucosa y los aminoácidos filtrados (en condiciones normales), regresándolos a la sangre. Esta reabsorción temprana y masiva es poco selectiva en el sentido de que ocurre en una proporción bastante fija, no ajustada minuto a minuto según las necesidades del cuerpo —ese ajuste fino ocurre más adelante en el trayecto tubular.'
      ]
    },
    {
      t:'El asa de Henle y la capacidad de concentrar la orina',
      p:[
        'El *asa de Henle* tiene una arquitectura particular (una rama descendente y una ascendente, en forma de horquilla) que genera, mediante un mecanismo llamado multiplicación por *contracorriente*, un gradiente de concentración muy alto en el tejido profundo del riñón (la médula renal). Este gradiente es lo que permite, más adelante, concentrar la orina cuando hace falta ahorrar agua.',
        'La hormona *ADH* (antidiurética, también llamada vasopresina) actúa sobre los túbulos distales y colectores, haciéndolos más permeables al agua: cuando hay ADH, el agua sale del túbulo hacia ese gradiente concentrado de la médula renal (reabsorbiéndose de vuelta a la sangre), y la orina final queda concentrada. Sin ADH (por ejemplo, tras beber mucha agua, cuando el cuerpo no necesita retenerla), esos túbulos son poco permeables al agua, y la orina final queda diluida. La *aldosterona*, ya mencionada en el sistema renina-angiotensina, actúa en una zona similar, pero regulando específicamente la reabsorción de sodio (y, junto con ella, la secreción de potasio).'
      ],
      foco:[
        'Consideración clínica: la capacidad del riñón de producir una orina muy concentrada o muy diluida, según haga falta, es lo que permite mantener estable la osmolaridad de la sangre pese a variaciones grandes en cuánta agua se bebe o se pierde en un día.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 28-29.'
},

'fisiologia-digestiva': {
  tema:'Fisiología digestiva',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:7,
  idea:'El tracto digestivo no procesa el alimento de forma pasiva: cada segmento produce secreciones específicas, activadas en el momento preciso, ajustadas al tipo de alimento que va llegando —un sistema coordinado de arriba abajo, no una simple cadena de montaje mecánica.',
  claves:['secreción gástrica','bilis','peristaltismo','absorción','enzimas pancreáticas'],
  sigue:'motilidad-gastrointestinal-esfinteres',
  secciones:[
    {
      t:'Secreciones: gástrica, biliar y pancreática, cada una con su rol',
      p:[
        'La *secreción gástrica* incluye ácido clorhídrico (que activa enzimas digestivas y destruye buena parte de los microorganismos ingeridos con la comida) y pepsina (que empieza a degradar las proteínas), además de factor intrínseco, necesario para la absorción de vitamina B12 más adelante en el intestino. La *bilis*, producida en el hígado y almacenada en la vesícula (como se vio en Anatomía II), no contiene enzimas digestivas: su función es emulsionar las grasas, rompiéndolas en gotas más pequeñas para que las *enzimas pancreáticas* (que sí digieren activamente proteínas, carbohidratos y grasas) puedan actuar sobre una superficie mucho mayor.'
      ]
    },
    {
      t:'Peristaltismo y absorción: mover el contenido y aprovecharlo',
      p:[
        'El *peristaltismo* son ondas de contracción muscular coordinadas que impulsan el contenido a lo largo del tracto digestivo, en una sola dirección, gracias a la organización de la musculatura lisa (recordando lo visto en Fisiología I sobre uniones en hendidura y automatismo del músculo liso). La *absorción* de nutrientes ocurre principalmente en el intestino delgado, cuya superficie interna está enormemente aumentada por pliegues, vellosidades y microvellosidades, permitiendo absorber una cantidad de nutrientes que, sobre una superficie lisa, sería imposible en el espacio disponible.'
      ],
      foco:[
        'Consideración clínica: una enfermedad que dañe la superficie absortiva del intestino delgado (como la enfermedad celíaca, que aplana las vellosidades) puede causar malabsorción generalizada de nutrientes, aunque la digestión enzimática en sí esté funcionando con normalidad: el problema no es descomponer el alimento, es absorber lo ya descompuesto.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 65-66.'
},

'motilidad-gastrointestinal-esfinteres': {
  tema:'Motilidad gastrointestinal y esfínteres',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:6,
  idea:'A lo largo del tracto digestivo hay varios puntos de control —esfínteres— que se abren y cierran en el momento justo, evitando que el contenido avance demasiado rápido o retroceda hacia donde no debería.',
  claves:['esfínter esofágico','esfínter pilórico','complejo motor migratorio','reflejo gastrocólico'],
  sigue:'miccion-funcion-vesical',
  secciones:[
    {
      t:'Los esfínteres: puertas que se abren en el momento correcto',
      p:[
        'Un *esfínter* es un anillo de músculo que permanece contraído (cerrado) la mayor parte del tiempo y se relaja (abre) solo cuando hace falta dejar pasar contenido. El *esfínter esofágico* inferior permanece cerrado la mayor parte del tiempo, evitando que el contenido ácido del estómago regrese hacia el esófago (que no tiene la misma protección mucosa que el estómago frente al ácido), y se relaja al tragar, para dejar pasar el alimento hacia el estómago. El *esfínter pilórico*, entre el estómago y el duodeno, regula cuánto quimo pasa hacia el intestino delgado a la vez, ajustando la velocidad para no sobrecargar al duodeno de golpe.',
        'Ejemplo trabajado, consideración clínica: cuando el esfínter esofágico inferior no cierra bien, el contenido ácido gástrico refluye hacia el esófago, produciendo el síntoma de acidez o pirosis, y con el tiempo puede dañar la mucosa esofágica —es el mecanismo básico de la enfermedad por reflujo gastroesofágico.'
      ]
    },
    {
      t:'Dos patrones de motilidad menos conocidos',
      p:[
        'El *complejo motor migratorio* es un patrón de ondas de contracción fuertes que recorren el intestino delgado durante los periodos de ayuno (entre comidas), funcionando como un "barrendero" que limpia el intestino de residuos y bacterias que podrían haberse acumulado, evitando su sobrecrecimiento excesivo. El *reflejo gastrocólico* es el aumento de la motilidad del colon que ocurre poco después de comer, disparado por la llegada de alimento al estómago —es la explicación fisiológica de por qué muchas personas sienten la necesidad de defecar poco después de una comida, especialmente notorio después del desayuno.'
      ],
      foco:[
        'Estos dos reflejos (complejo motor migratorio y gastrocólico) muestran que la motilidad intestinal no depende solo de lo que hay dentro del intestino en ese momento: responde a señales de todo el tracto digestivo, incluso de eventos distantes como comer.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 65.'
},

'miccion-funcion-vesical': {
  tema:'Micción y función vesical',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:6,
  idea:'Orinar es uno de los pocos actos del cuerpo que combina control involuntario y voluntario a la vez: la vejiga se llena y manda la señal de urgencia de forma automática, pero la decisión final de cuándo vaciarla —dentro de ciertos límites— queda bajo control consciente.',
  claves:['reflejo miccional','vejiga','esfínter uretral','control voluntario de la micción'],
  sigue:null,
  secciones:[
    {
      t:'El reflejo miccional: automático, pero modulable',
      p:[
        'A medida que la *vejiga* se llena de orina, su pared se distiende y receptores de estiramiento en la propia pared mandan esa señal a la médula espinal, disparando el *reflejo miccional*: una contracción del músculo de la pared vesical (el detrusor) junto con la relajación del esfínter uretral interno (involuntario), que en conjunto empujan la orina hacia afuera. Este reflejo, por sí solo, es completamente automático —es exactamente lo que ocurre en un bebé, que todavía no tiene control voluntario sobre la micción.',
        'Lo que distingue a un adulto es la capacidad de MODULAR ese reflejo automático: el cerebro puede inhibir voluntariamente la contracción del detrusor y mantener contraído el *esfínter uretral* externo (este sí, bajo control voluntario, a diferencia del interno), posponiendo la micción hasta un momento y un lugar apropiados, dentro de ciertos límites de capacidad vesical.'
      ]
    },
    {
      t:'El control voluntario como un freno aprendido',
      p:[
        'El control voluntario de la micción no es innato: se desarrolla durante la infancia, a medida que las vías nerviosas que conectan la corteza cerebral con el centro medular del reflejo miccional maduran lo suficiente como para inhibir ese reflejo de forma efectiva —es la base fisiológica real detrás del proceso de "aprender a controlar esfínteres" en la niñez, no simplemente un hábito que se enseña sin base biológica.'
      ],
      foco:[
        'Consideración clínica: una lesión de la médula espinal por encima del centro medular de la micción puede interrumpir la comunicación entre el cerebro y ese reflejo, produciendo una vejiga que se vacía de forma refleja e involuntaria (sin el control voluntario normal), un cuadro distinto de una lesión que dañe directamente el propio centro medular o los nervios periféricos de la vejiga.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 27.'
},

'curva-funcion-ventricular': {
  tema:'Curva de función ventricular y contractilidad',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:7,
  idea:'El corazón tiene una propiedad casi mágica a primera vista: cuanto más se estira antes de contraerse, con más fuerza se contrae después, dentro de ciertos límites. Esa propiedad es la que le permite ajustar automáticamente su bombeo al volumen de sangre que le llega, sin necesitar una orden nerviosa para cada ajuste.',
  claves:['contractilidad','curva de Frank-Starling','inotropismo','ley del corazón'],
  sigue:'circulacion-coronaria-regional',
  secciones:[
    {
      t:'La ley de Frank-Starling: el corazón se autoajusta',
      p:[
        'La *curva de Frank-Starling* (o ley del corazón) describe una relación fundamental: dentro de un rango fisiológico, cuanto más se llena el ventrículo antes de contraerse (más precarga, ya visto en el tema introductorio de fisiología cardiovascular), más se estiran sus fibras musculares, y ese mayor estiramiento hace que el ventrículo se contraiga con MÁS fuerza y expulse MÁS volumen de sangre en el siguiente latido. Es, en esencia, un mecanismo intrínseco del propio músculo cardíaco, que no depende de señales nerviosas externas para funcionar.',
        'Este mecanismo tiene un propósito claro: permite que los dos ventrículos (derecho e izquierdo), que están en serie dentro de un circuito cerrado, mantengan automáticamente el mismo gasto cardíaco entre sí, latido a latido, sin necesitar un control nervioso central constante que los sincronice; si por algún motivo llega más sangre a un lado, ese lado se estira más y bombea más, igualando la salida a la entrada.'
      ]
    },
    {
      t:'Contractilidad: el otro factor, independiente del estiramiento',
      p:[
        'La *contractilidad* (o inotropismo) es la fuerza de contracción del corazón para un grado de estiramiento DADO, independiente de la precarga: dos corazones estirados exactamente igual pueden contraerse con fuerza distinta si su contractilidad intrínseca es diferente. La activación simpática (adrenalina, noradrenalina) aumenta la contractilidad (efecto inotrópico positivo); ciertas enfermedades del músculo cardíaco, o la falta de oxígeno, la disminuyen (inotropismo negativo).',
        'Ejemplo trabajado: en la insuficiencia cardíaca, el corazón suele tener contractilidad reducida —para un mismo grado de estiramiento (precarga), se contrae con menos fuerza que un corazón sano—, lo cual desplaza toda la curva de Frank-Starling hacia abajo y hacia la derecha: necesita más precarga para lograr el mismo volumen de bombeo que antes, y aun así, en las formas más avanzadas, el bombeo total queda por debajo de lo normal.'
      ],
      foco:[
        'Precarga y contractilidad NO son lo mismo, aunque ambas aumenten el volumen expulsado: la precarga actúa por estiramiento (mecanismo de Frank-Starling); la contractilidad actúa cambiando la fuerza de contracción para un mismo estiramiento.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 9 y 22.'
},

'circulacion-coronaria-regional': {
  tema:'Circulación coronaria y regional',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:6,
  idea:'El músculo cardíaco tiene una particularidad que ningún otro tejido comparte del todo: recibe la mayor parte de su riego sanguíneo durante la DIÁSTOLIS (cuando está relajado), no durante la sístole, porque cuando se contrae con fuerza, literalmente comprime sus propios vasos desde adentro.',
  claves:['circulación coronaria','autorregulación del flujo','reserva coronaria','flujo regional'],
  sigue:'volumenes-capacidades-pulmonares',
  secciones:[
    {
      t:'Por qué el corazón se riega principalmente en diástole',
      p:[
        'Durante la sístole, la contracción del músculo ventricular comprime los vasos coronarios que lo atraviesan, dificultando el flujo de sangre a través de ellos, especialmente en el ventrículo izquierdo (el de pared más gruesa y más fuerza de contracción). Durante la diástole, con el músculo relajado, esa compresión desaparece y el flujo coronario aumenta notablemente: la mayor parte del riego del ventrículo izquierdo ocurre, entonces, durante la diástole, no durante la sístole —lo contrario de lo que se podría asumir intuitivamente.',
        'Esto tiene una consecuencia clínica importante: una frecuencia cardíaca muy alta acorta desproporcionadamente el tiempo de diástole (más que el de sístole), reduciendo el tiempo disponible para el riego coronario en cada ciclo, lo que puede comprometer el aporte de oxígeno al propio músculo cardíaco precisamente cuando más lo necesita, como durante un esfuerzo intenso o una taquiarritmia.'
      ]
    },
    {
      t:'Autorregulación y reserva coronaria',
      p:[
        'La circulación coronaria tiene una capacidad notable de *autorregulación*: ajusta su propio flujo según la demanda metabólica local del músculo cardíaco, independientemente de cambios moderados en la presión arterial general, dilatándose cuando el corazón trabaja más (y consume más oxígeno) y constriñéndose cuando trabaja menos. La *reserva coronaria* es la capacidad de aumentar el flujo coronario por encima del nivel basal cuando la demanda sube (como en el ejercicio); una obstrucción parcial de una arteria coronaria puede no dar síntomas en reposo (el flujo basal todavía alcanza) pero sí durante el esfuerzo, cuando la demanda supera lo que esa arteria estrechada puede aportar —es la base fisiológica de la angina de esfuerzo.'
      ],
      foco:[
        'Consideración clínica: esta es la razón por la que una prueba de esfuerzo (hacer que el corazón trabaje más, bajo vigilancia) puede revelar una obstrucción coronaria que en reposo no daría ningún síntoma ni cambio detectable.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 21.'
},

'volumenes-capacidades-pulmonares': {
  tema:'Volúmenes y capacidades pulmonares',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:6,
  idea:'Los pulmones nunca se vacían por completo, ni siquiera con la espiración más forzada posible: siempre queda un volumen de aire residual, y entender por qué ese volumen existe (y por qué es necesario) evita confundir "vaciar del todo" con "espirar normalmente".',
  claves:['volumen corriente','capacidad vital','volumen residual','espirometría'],
  sigue:'fisiologia-ejercicio',
  secciones:[
    {
      t:'Cuatro volúmenes básicos',
      p:[
        'El *volumen corriente*, ya mencionado, es el aire que entra y sale en una respiración normal y tranquila (aproximadamente 500 mL en un adulto). Más allá de eso, existe un volumen de reserva inspiratoria (el aire adicional que se puede inhalar con un esfuerzo máximo, después de una inspiración normal) y un volumen de reserva espiratoria (el aire adicional que se puede exhalar con esfuerzo, después de una espiración normal). El *volumen residual* es el aire que queda en los pulmones incluso después de la espiración más forzada posible: nunca llega a cero, porque las vías aéreas pequeñas tienden a colapsarse antes de que el pulmón se vacíe por completo.'
      ]
    },
    {
      t:'Combinaciones de volúmenes: las capacidades',
      p:[
        'Una *capacidad* pulmonar es la suma de dos o más volúmenes. La *capacidad vital* es la suma del volumen corriente más las dos reservas (inspiratoria y espiratoria): es el máximo volumen de aire que se puede mover en un solo ciclo respiratorio completo, desde una inspiración máxima hasta una espiración máxima. La capacidad pulmonar total es la capacidad vital más el volumen residual: literalmente todo el aire que cabe en los pulmones.',
        'La *espirometría* es la prueba que mide estos volúmenes (excepto el volumen residual y los que lo incluyen, que necesitan otras técnicas), y es la herramienta básica para evaluar la función pulmonar: por ejemplo, distingue entre patrones obstructivos (donde el problema principal es sacar el aire, como en el asma) y patrones restrictivos (donde el problema principal es la capacidad total de expandir el pulmón, como en la fibrosis pulmonar), cada uno con un patrón característico y distinto en estas mediciones.'
      ],
      foco:[
        'El volumen residual no se puede medir con una espirometría simple (porque, por definición, ese aire nunca sale): se necesitan técnicas indirectas, como la dilución de un gas trazador, para estimarlo.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 37.'
},

'fisiologia-ejercicio': {
  tema:'Fisiología del ejercicio',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:6,
  idea:'El ejercicio pone a prueba, todos a la vez, casi todos los sistemas ya estudiados en Fisiología I y II: cardiovascular, respiratorio, muscular y metabólico tienen que coordinarse en segundos para multiplicar varias veces el aporte de oxígeno al músculo que está trabajando.',
  claves:['adaptación cardiovascular al ejercicio','consumo de oxígeno máximo','umbral anaeróbico'],
  sigue:'motilidad-gastrointestinal-esfinteres',
  secciones:[
    {
      t:'Una respuesta cardiovascular coordinada',
      p:[
        'Al empezar el ejercicio, se activa el sistema simpático, que aumenta la frecuencia cardíaca y la contractilidad (ya vistas en el tema de curva de función ventricular), aumentando así el gasto cardíaco. A la vez, la resistencia vascular se redistribuye: los vasos del músculo esquelético en actividad se dilatan (por autorregulación local, aumentando el flujo justo donde se necesita), mientras que el flujo hacia órganos menos prioritarios en ese momento (como el tracto digestivo) se reduce relativamente. El resultado neto es que el corazón bombea mucho más sangre por minuto, y esa sangre extra se dirige preferentemente hacia el músculo que está trabajando.'
      ]
    },
    {
      t:'El consumo máximo de oxígeno y el umbral anaeróbico',
      p:[
        'El *consumo de oxígeno máximo* (VO2 máx) es la mayor cantidad de oxígeno que el cuerpo puede consumir por minuto durante un esfuerzo máximo, y refleja, en conjunto, la capacidad del sistema cardiovascular para transportar oxígeno y la capacidad del músculo para usarlo: es una de las medidas más usadas para cuantificar la capacidad aeróbica de una persona.',
        'El *umbral anaeróbico* es la intensidad de ejercicio por encima de la cual el aporte de oxígeno ya no alcanza para cubrir toda la demanda energética del músculo por la vía aeróbica, y el cuerpo empieza a depender cada vez más de la glucólisis anaeróbica (ya vista en el caso trabajado de bioquímica), con producción creciente de lactato. Por debajo de ese umbral, el ejercicio se puede sostener durante mucho tiempo; por encima, la fatiga aparece mucho más rápido, precisamente porque el metabolismo anaeróbico no es sostenible indefinidamente.'
      ],
      foco:[
        'Consideración clínica: el entrenamiento físico regular mejora el VO2 máx y desplaza el umbral anaeróbico hacia intensidades más altas, un efecto medible que se usa tanto en medicina deportiva como en la rehabilitación cardíaca de pacientes tras un evento cardiovascular.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 84.'
}

});
