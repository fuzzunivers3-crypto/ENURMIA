/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 6)
   Termina de cubrir FARMACOLOGIA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'farmacocinetica-metabolismo-excrecion': {
  tema:'Farmacocinética: metabolismo y excreción',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:8,
  idea:'El hígado no siempre "destruye" un fármaco al metabolizarlo: a veces lo activa. Esa distinción, poco intuitiva la primera vez, explica por qué ciertos medicamentos no funcionan igual en todas las personas, incluso con la misma dosis exacta.',
  claves:['citocromo P450','vida media','eliminación renal','metabolito activo'],
  sigue:'farmacodinamia-receptores-mecanismos',
  secciones:[
    {
      t:'El citocromo P450: la maquinaria principal de metabolismo',
      p:[
        'La mayoría de los fármacos se metabolizan, sobre todo en el hígado, por un grupo de enzimas llamado *citocromo P450*, que existe en varias formas (isoenzimas) con distinta capacidad para procesar distintos fármacos. Este metabolismo suele convertir al fármaco en una forma más soluble en agua (facilitando su eliminación) y, en la mayoría de los casos, menos activa que la molécula original —pero no siempre: algunos fármacos se administran precisamente como una forma inactiva (un "profármaco") que el hígado convierte, mediante este mismo sistema, en su *metabolito activo* real.',
        'Ejemplo trabajado: si un fármaco necesita convertirse en su metabolito activo para funcionar, una persona cuyo citocromo P450 metaboliza ese fármaco muy lentamente (por variación genética, retomando la farmacogenética ya vista en Genética Médica) puede no lograr un efecto terapéutico adecuado, incluso con la dosis estándar, porque simplemente no genera suficiente metabolito activo.'
      ]
    },
    {
      t:'Vida media y eliminación renal',
      p:[
        'La *vida media* de un fármaco es el tiempo que tarda su concentración plasmática en reducirse a la mitad, y es el dato que determina, en la práctica, cada cuánto tiempo hay que administrar una dosis para mantener una concentración estable en el cuerpo: un fármaco de vida media corta necesita dosis más frecuentes que uno de vida media larga.',
        'La *eliminación renal* es la otra vía principal (junto con el metabolismo hepático) para sacar un fármaco (o sus metabolitos) del cuerpo, filtrándolo en el glomérulo (retomando la filtración glomerular ya vista en Fisiología II) y, en algunos casos, secretándolo activamente en el túbulo. Un paciente con función renal disminuida elimina más lento los fármacos que dependen principalmente de esta vía, acumulando concentraciones más altas de lo esperado con la dosis estándar —una de las razones más frecuentes por las que se ajusta la dosis de muchos medicamentos en pacientes con enfermedad renal.'
      ],
      foco:[
        'Consideración clínica: antes de dar una dosis estándar de un fármaco eliminado principalmente por el riñón, conviene revisar la función renal del paciente (retomando la creatinina y el aclaramiento ya vistos en Fisiología II), porque la misma dosis puede ser segura en un paciente y tóxica en otro con la función renal comprometida.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 4.'
},

'farmacodinamia-receptores-mecanismos': {
  tema:'Farmacodinamia: receptores y mecanismos de acción',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:8,
  idea:'Mientras la farmacocinética estudia qué le hace el cuerpo al fármaco, la farmacodinamia estudia lo contrario: qué le hace el fármaco al cuerpo, y casi siempre esa respuesta empieza con el fármaco uniéndose a un receptor específico, exactamente como una llave que encaja en una cerradura.',
  claves:['agonista','antagonista','receptor','curva dosis-respuesta'],
  sigue:'interacciones-farmacologicas',
  secciones:[
    {
      t:'Agonistas y antagonistas: activar o bloquear',
      p:[
        'Un *receptor* farmacológico es, casi siempre, la misma proteína que normalmente reconoce a una sustancia natural del cuerpo (un neurotransmisor, una hormona, ya vistos en temas anteriores): el fármaco se une a ese mismo receptor, imitando o bloqueando su función natural. Un *agonista* se une al receptor y lo ACTIVA, produciendo el mismo tipo de efecto que la sustancia natural (o uno similar). Un *antagonista* se une al receptor pero NO lo activa, simplemente ocupa el espacio, impidiendo que el agonista natural (o un fármaco agonista) se una y ejerza su efecto —bloquea la señal, sin producir una señal propia.'
      ]
    },
    {
      t:'La curva dosis-respuesta',
      p:[
        'La *curva dosis-respuesta* representa gráficamente cómo cambia el efecto de un fármaco a medida que aumenta su dosis: típicamente empieza plana (dosis muy bajas, sin efecto detectable), sube de forma pronunciada en un rango intermedio de dosis, y finalmente se aplana de nuevo (efecto máximo, donde aumentar más la dosis ya no aumenta el efecto, porque todos los receptores disponibles ya están ocupados).',
        'Esta curva permite comparar la potencia de distintos fármacos (qué dosis se necesita para lograr un efecto determinado) y su eficacia máxima (el techo de efecto que puede lograr, sin importar cuánto se aumente la dosis) —dos propiedades distintas que a veces se confunden: un fármaco puede ser muy potente (efectivo a dosis bajas) pero con una eficacia máxima menor que otro fármaco menos potente.'
      ],
      foco:[
        'Consideración clínica: que dos fármacos traten la misma condición no significa que sean intercambiables sin ajuste: uno puede necesitar una dosis mucho menor que otro para lograr el mismo efecto (diferencia en potencia), y aun así ambos alcanzar el mismo techo de efecto máximo (misma eficacia).'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 2.'
},

'interacciones-farmacologicas': {
  tema:'Interacciones farmacológicas',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:7,
  idea:'Cuantos más medicamentos toma una persona a la vez, más crece —no de forma lineal, sino exponencial— la cantidad de combinaciones posibles entre ellos, y por eso revisar interacciones no es opcional en un paciente polimedicado.',
  claves:['interacción farmacológica','inductor enzimático','inhibidor enzimático','sinergismo'],
  sigue:'antibioticos-familias-principales',
  secciones:[
    {
      t:'Interacciones a nivel del metabolismo: inducción e inhibición enzimática',
      p:[
        'Una *interacción farmacológica* ocurre cuando el efecto de un fármaco se modifica por la presencia de otro. Un mecanismo muy frecuente ocurre a nivel del citocromo P450 (ya visto): un *inductor enzimático* es un fármaco (u otra sustancia) que AUMENTA la actividad de estas enzimas, acelerando el metabolismo de otros fármacos que comparten la misma vía, y reduciendo así su concentración y su efecto. Un *inhibidor enzimático* hace lo contrario: BLOQUEA la actividad de estas enzimas, enlenteciendo el metabolismo de otros fármacos y aumentando su concentración, con riesgo de toxicidad si la dosis no se ajusta.',
        'Ejemplo trabajado: si un paciente toma un fármaco A de forma estable, y se le agrega un fármaco B que es inhibidor enzimático de la misma vía que metaboliza al fármaco A, la concentración del fármaco A puede subir considerablemente sin haber cambiado su dosis, aumentando el riesgo de efectos adversos —una interacción invisible si no se conoce el mecanismo.'
      ]
    },
    {
      t:'Sinergismo: cuando el efecto combinado es mayor',
      p:[
        'El *sinergismo* ocurre cuando dos fármacos, administrados juntos, producen un efecto combinado mayor que la simple suma de sus efectos individuales —puede ser deseado (combinar dos antihipertensivos con mecanismos distintos para un mejor control de la presión, ya visto en el caso trabajado de hipertensión de Fisiología II) o indeseado (combinar dos sedantes del sistema nervioso central puede deprimir la respiración mucho más de lo que cada uno haría por separado).'
      ],
      foco:[
        'Consideración clínica: en un paciente que toma varios medicamentos a la vez (polifarmacia), revisar sistemáticamente las interacciones potenciales antes de agregar un fármaco nuevo es una parte esencial —y con frecuencia subestimada— de la seguridad del tratamiento.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.'
},

'antibioticos-familias-principales': {
  tema:'Antibióticos: familias principales',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:8,
  idea:'Agrupar los antibióticos por su mecanismo de acción —no por su nombre comercial ni por memorizarlos sueltos— es lo que permite predecir, con lógica, contra qué tipo de bacteria funciona cada familia y por qué.',
  claves:['betalactámico','macrólido','aminoglucósido','quinolona'],
  sigue:'antiinflamatorios-analgesicos',
  secciones:[
    {
      t:'Atacar la pared: los betalactámicos',
      p:[
        'Los *betalactámicos* (penicilinas, cefalosporinas, ya introducidos en Microbiología) bloquean la síntesis de la pared celular bacteriana (el peptidoglicano ya visto), estructura que la célula humana no tiene, lo que explica su relativa seguridad para el paciente. Son más eficaces, en general, contra bacterias en división activa (que están construyendo pared nueva) que contra bacterias en reposo.'
      ]
    },
    {
      t:'Atacar el ribosoma o el ADN: otras tres familias',
      p:[
        'Los *macrólidos* y los *aminoglucósidos* actúan sobre el ribosoma bacteriano (que, aunque cumple la misma función que el ribosoma humano, tiene una estructura suficientemente distinta como para que estos fármacos lo bloqueen de forma selectiva), interrumpiendo la síntesis de proteínas bacterianas necesarias para su supervivencia y multiplicación. Las *quinolonas* actúan sobre enzimas bacterianas necesarias para replicar su ADN (topoisomerasas bacterianas, distintas de las humanas), impidiendo que la bacteria pueda dividirse.',
        'Cada familia tiene, además, un espectro de acción distinto (qué tipos de bacteria cubre mejor) y un perfil distinto de efectos adversos, relacionado en parte con qué tan selectivo es su mecanismo hacia estructuras exclusivamente bacterianas frente a estructuras que, aunque distintas, comparten cierto parecido con las humanas.'
      ],
      foco:[
        'Organizar los antibióticos por mecanismo (pared, ribosoma, ADN) en vez de memorizar cada nombre por separado es lo que permite predecir, con lógica, por qué una familia funciona mejor contra cierto tipo de bacteria y por qué la resistencia (ya vista en Microbiología) a una familia no necesariamente implica resistencia a otra con mecanismo distinto.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 43-45.'
},

'antiinflamatorios-analgesicos': {
  tema:'Antiinflamatorios y analgésicos',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:7,
  idea:'Entender por qué los AINE, aunque tan usados, pueden dañar el estómago no es un dato suelto de memorizar: sale directamente de entender su propio mecanismo de acción, la misma enzima que combate la inflamación también protege la mucosa gástrica.',
  claves:['AINE','inhibidor de la COX','opioide','paracetamol'],
  sigue:'farmacos-cardiovasculares',
  secciones:[
    {
      t:'AINE: un mecanismo, dos efectos opuestos',
      p:[
        'Los *AINE* (antiinflamatorios no esteroideos) son, en su mayoría, *inhibidores de la COX* (ciclooxigenasa), una enzima necesaria para producir prostaglandinas, que a su vez median la inflamación y el dolor (ya vistos en Anatomía Patológica como mediadores inflamatorios). Al bloquear la COX, los AINE reducen la inflamación, el dolor y la fiebre.',
        'El problema es que la misma enzima (o una forma relacionada de ella) también produce prostaglandinas que protegen la mucosa del estómago, reduciendo la producción de ácido y aumentando la de moco protector. Por eso, el mismo mecanismo que hace útil a un AINE contra la inflamación es, precisamente, el que explica su efecto adverso más frecuente: irritación y, con el uso prolongado, úlceras gástricas.'
      ]
    },
    {
      t:'Opioides y paracetamol: otros mecanismos',
      p:[
        'Los *opioides* actúan sobre receptores específicos del sistema nervioso, retomando directamente las vías descendentes moduladoras del dolor ya vistas en Fisiología I: potencian la inhibición natural del dolor a nivel espinal y central, siendo muy eficaces contra el dolor intenso, pero con riesgo de depresión respiratoria (por acción sobre el centro respiratorio, ya visto en Fisiología II) y de dependencia con el uso prolongado.',
        'El *paracetamol* tiene efecto analgésico y antipirético comparable al de los AINE en muchos casos, pero con un mecanismo distinto y todavía no completamente esclarecido (actúa más a nivel central que periférico), y con la ventaja de NO tener el efecto antiinflamatorio significativo ni el riesgo gástrico de los AINE —aunque, a diferencia de estos, su principal riesgo de toxicidad en sobredosis es hepático, no gástrico.'
      ],
      foco:[
        'Consideración clínica: elegir entre AINE, paracetamol u opioide para un dolor determinado no es solo una cuestión de "cuál es más fuerte": depende del tipo de dolor, de si hay un componente inflamatorio relevante, y del perfil de riesgo específico de cada paciente (riesgo gástrico, hepático, respiratorio).'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 36 y 31.'
},

'farmacos-cardiovasculares': {
  tema:'Fármacos cardiovasculares',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:8,
  idea:'Cada familia de antihipertensivos actúa sobre un punto distinto de la misma ecuación ya vista en Fisiología II (gasto cardíaco por resistencia periférica), y entender sobre cuál punto actúa cada una es lo que explica por qué se combinan entre sí en vez de solo subir la dosis de una sola.',
  claves:['betabloqueante','IECA','diurético','bloqueador de canales de calcio'],
  sigue:'farmacos-sistema-nervioso-autonomo',
  secciones:[
    {
      t:'Cuatro familias, cuatro puntos de ataque distintos',
      p:[
        'El *betabloqueante* bloquea los receptores beta-1 adrenérgicos del corazón (ya vistos en Fisiología I), reduciendo la frecuencia cardíaca y la contractilidad, y con ello el gasto cardíaco. El *IECA* (inhibidor de la enzima convertidora de angiotensina) bloquea la formación de angiotensina II (ya vista en Fisiología II y en fisiopatología de la hipertensión), reduciendo tanto la resistencia vascular como la retención de sodio mediada por la aldosterona. El *diurético* aumenta la eliminación renal de sodio y agua, reduciendo el volumen circulante y, con él, la precarga y el gasto cardíaco. El *bloqueador de canales de calcio* relaja directamente el músculo liso vascular (bloqueando la entrada de calcio necesaria para su contracción, retomando el papel del calcio en la contracción muscular ya visto en Fisiología I), reduciendo la resistencia vascular.'
      ]
    },
    {
      t:'Por qué se combinan en vez de usar dosis altas de uno solo',
      p:[
        'Retomando lo ya visto en el caso trabajado de hipertensión: combinar dos fármacos de mecanismos DISTINTOS, a dosis bajas cada uno, suele controlar mejor la presión y con menos efectos adversos que subir al máximo la dosis de un solo fármaco —porque cada familia ataca un punto distinto de la ecuación gasto cardíaco por resistencia periférica, sus efectos se complementan en vez de simplemente sumarse sobre el mismo mecanismo.'
      ],
      foco:[
        'Este tema es la aplicación farmacológica directa de la ecuación de presión arterial ya vista en Fisiología II: cada fármaco, para entenderlo de verdad, hay que ubicarlo en qué parte de esa ecuación actúa, no memorizarlo como un nombre aislado.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11-13.'
},

'farmacos-sistema-nervioso-autonomo': {
  tema:'Fármacos del sistema nervioso autónomo',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:7,
  idea:'Casi todos los fármacos de esta familia se pueden predecir sin memorizarlos uno por uno, si se tiene bien fijo el mapa de neurotransmisores y receptores del sistema nervioso autónomo ya visto en Fisiología I: cada fármaco es, simplemente, un agonista o un antagonista de un punto específico de ese mapa.',
  claves:['agonista adrenérgico','antagonista colinérgico','simpaticomimético'],
  sigue:'reacciones-adversas-toxicidad',
  secciones:[
    {
      t:'Deducir el efecto a partir del mapa autonómico',
      p:[
        'Un *agonista adrenérgico* (o *simpaticomimético*) activa los receptores adrenérgicos, imitando el efecto del sistema simpático ya visto en Fisiología I: según el subtipo de receptor sobre el que actúe (alfa o beta, con sus efectos ya descritos en ese tema), producirá vasoconstricción, broncodilatación, aumento de la frecuencia cardíaca, u otros efectos simpáticos específicos. El betabloqueante ya visto en fármacos cardiovasculares es, en cambio, un antagonista adrenérgico: bloquea ese mismo receptor en vez de activarlo.',
        'Un *antagonista colinérgico* bloquea los receptores muscarínicos que normalmente responde al sistema parasimpático, produciendo efectos que son, en esencia, el "negativo" de lo que haría el parasimpático: taquicardia (al quitar el freno parasimpático sobre el corazón), pupila dilatada, boca seca, y enlentecimiento del tránsito intestinal —exactamente los efectos que ya se predijeron, sin nombrarlos todavía, al describir la atropina en la fisiología autonómica de 7mo cuatrimestre.'
      ]
    },
    {
      t:'Un ejemplo trabajado: predecir sin memorizar',
      p:[
        'Ejemplo trabajado: sabiendo que los receptores beta-2 relajan el músculo liso bronquial y vascular (ya visto en Fisiología I), se puede predecir sin memorizarlo que un agonista beta-2 (como el salbutamol) sirve para tratar el broncoespasmo del asma —el fármaco no inventa un efecto nuevo, simplemente activa con más fuerza un receptor que el cuerpo ya usa naturalmente para ese propósito.'
      ],
      foco:[
        'Este tema es, quizás, el que mejor demuestra por qué vale la pena entender bien la fisiología antes de estudiar farmacología: casi ningún fármaco de esta familia necesita memorizarse aislado si el mapa de receptores y sus efectos ya está claro desde Fisiología I.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 6 y 9.'
},

'reacciones-adversas-toxicidad': {
  tema:'Reacciones adversas y toxicidad',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:6,
  idea:'No toda reacción adversa a un fármaco es igual de predecible: algunas se pueden anticipar sabiendo el mecanismo del fármaco (como el sangrado gástrico de los AINE, ya visto), y otras son, por definición, prácticamente imposibles de predecir en un paciente concreto.',
  claves:['reacción adversa','efecto idiosincrásico','sobredosis','antídoto'],
  sigue:'farmacologia-sistema-nervioso-central',
  secciones:[
    {
      t:'Reacciones predecibles frente a idiosincrásicas',
      p:[
        'La mayoría de las *reacciones adversas* de un fármaco son predecibles a partir de su propio mecanismo de acción (como la sedación de un antihistamínico que también actúa sobre receptores del sistema nervioso central, o el sangrado gástrico de los AINE), y son más probables o más intensas a dosis más altas. Un *efecto idiosincrásico* es, por el contrario, una reacción adversa rara, no relacionada de forma predecible con la dosis ni con el mecanismo principal del fármaco, generalmente explicada por una particularidad genética o inmunológica específica de esa persona (retomando, de nuevo, la farmacogenética ya vista en Genética Médica) —es prácticamente imposible de anticipar antes de que ocurra en un paciente concreto.'
      ]
    },
    {
      t:'Sobredosis y antídotos',
      p:[
        'Una *sobredosis* es una dosis que excede la capacidad del cuerpo de procesar el fármaco de forma segura, produciendo toxicidad que, con frecuencia, es una versión exagerada de sus propios efectos farmacológicos conocidos (por ejemplo, un opioide en sobredosis produce depresión respiratoria severa, una extensión de su efecto sedante normal, ya visto en analgésicos). Un *antídoto* es una sustancia específica capaz de revertir o contrarrestar la toxicidad de un fármaco determinado —no todos los fármacos tienen uno disponible, y cuando existe, suele actuar bloqueando el mismo receptor que el fármaco tóxico activó (un antagonista específico), o acelerando su eliminación o neutralización por otra vía.'
      ],
      foco:[
        'Consideración clínica: ante cualquier sospecha de toxicidad por un fármaco, preguntarse primero si esa reacción es una extensión predecible de su mecanismo conocido (y por tanto tratable revirtiendo ese mecanismo, si hay antídoto) o una reacción idiosincrásica (donde el tratamiento suele ser de soporte general, sin un antídoto específico disponible).'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 5.'
},

'farmacologia-sistema-nervioso-central': {
  tema:'Farmacología del sistema nervioso central',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:7,
  idea:'La mayoría de los fármacos que actúan sobre el estado de ánimo, la ansiedad o el pensamiento trabajan modulando la misma maquinaria de neurotransmisores y sinapsis ya vista en Fisiología I e Histología, solo que aplicada al cerebro en vez de a una neurona aislada.',
  claves:['ansiolítico','benzodiacepina','antidepresivo','antipsicótico'],
  sigue:'farmacologia-endocrina',
  secciones:[
    {
      t:'Las benzodiacepinas: potenciar una inhibición ya existente',
      p:[
        'Las *benzodiacepinas*, un grupo de fármacos *ansiolíticos* (que reducen la ansiedad) muy usados, actúan potenciando el efecto de un neurotransmisor inhibitorio natural del cerebro (el mismo tipo de lógica ya vista con los potenciales postsinápticos inhibitorios de Fisiología I): no crean una señal inhibitoria nueva, sino que hacen que la señal inhibitoria natural del cuerpo sea más efectiva de lo que sería por sí sola. Por eso, entre otros efectos, producen sedación, relajación muscular y, en dosis altas o combinadas con otros depresores, riesgo de depresión respiratoria significativa.'
      ]
    },
    {
      t:'Antidepresivos y antipsicóticos: ajustar neurotransmisores específicos',
      p:[
        'Los *antidepresivos* actúan, en su mayoría, aumentando la disponibilidad de ciertos neurotransmisores en la sinapsis (por ejemplo, bloqueando su recaptación de vuelta hacia la neurona que los liberó, dejándolos más tiempo disponibles para seguir actuando sobre el receptor), aunque su efecto clínico completo suele tardar semanas en manifestarse, más de lo que tardaría el cambio bioquímico inmediato, lo cual sugiere que hay adaptaciones más lentas y complejas involucradas, no solo el cambio agudo de neurotransmisor.',
        'Los *antipsicóticos* actúan, en gran medida, bloqueando receptores de dopamina —retomando la vía dopaminérgica ya vista en Neuroanatomía al hablar de los ganglios basales—, lo cual explica tanto su efecto terapéutico sobre ciertos síntomas como algunos de sus efectos adversos motores, dado que esa misma vía dopaminérgica participa también en el control normal del movimiento.'
      ],
      foco:[
        'Este tema conecta directamente con Neuroanatomía (la vía dopaminérgica de los ganglios basales) y con Fisiología I (sinapsis, neurotransmisores, potenciales postsinápticos): los fármacos del sistema nervioso central no introducen mecanismos nuevos, ajustan mecanismos que el propio cerebro ya usa.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 22 y 30.'
},

'farmacologia-endocrina': {
  tema:'Farmacología endocrina',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:7,
  idea:'Buena parte de la farmacología endocrina consiste, literalmente, en reponer una hormona que falta o en imitar sus efectos, retomando directamente la lógica de exceso-déficit-resistencia ya vista en Fisiopatología.',
  claves:['corticoide','hipoglucemiante oral','insulina exógena','hormona tiroidea'],
  sigue:'uso-racional-antimicrobianos',
  secciones:[
    {
      t:'Reponer lo que falta: insulina y hormona tiroidea',
      p:[
        'La *insulina exógena* (administrada desde afuera, típicamente inyectada) es el tratamiento de reemplazo directo en la diabetes tipo 1 (déficit absoluto de insulina, ya visto en Fisiopatología) y, en ciertas etapas, también se usa en la diabetes tipo 2. La *hormona tiroidea* sintética se usa como reemplazo directo en el hipotiroidismo, cuando la glándula tiroides (ya vista en Anatomía II y semiología endocrina) no produce suficiente hormona por sí misma —en ambos casos, el fármaco no "cura" la causa subyacente, sustituye la función hormonal perdida.'
      ]
    },
    {
      t:'Estimular o modular, en vez de solo reemplazar',
      p:[
        'Los *hipoglucemiantes orales* (usados principalmente en diabetes tipo 2) actúan por mecanismos variados: algunos estimulan al páncreas a producir más insulina, otros mejoran la sensibilidad de los tejidos a la insulina ya presente (atacando directamente la resistencia insulínica ya vista en Fisiopatología), y otros actúan por vías distintas —a diferencia de la insulina exógena, no reemplazan directamente a la hormona, sino que modulan el sistema para que funcione mejor con lo que el cuerpo ya produce.',
        'Los *corticoides* sintéticos imitan el efecto del cortisol natural (ya visto en Bioquímica II e Inmunología), usados en dosis farmacológicas (mucho más altas que las fisiológicas) sobre todo por su potente efecto antiinflamatorio e inmunosupresor, no solo como reemplazo hormonal —una dosis farmacológica de corticoide hace mucho más que lo que el cortisol natural del cuerpo haría en su función habitual.'
      ],
      foco:[
        'Consideración clínica: el uso prolongado de corticoides a dosis altas puede suprimir la producción natural de cortisol del propio cuerpo (por retroalimentación negativa sobre el eje hipotálamo-hipófisis, ya visto en Fisiología II), razón por la cual no se suspenden de golpe tras un uso prolongado, sino que se reducen gradualmente.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 39 y 41.'
},

'uso-racional-antimicrobianos': {
  tema:'Uso racional de antimicrobianos',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:7,
  idea:'Este último tema del bloque cierra la Farmacología conectándola directamente con la resistencia bacteriana ya vista en Microbiología: cada decisión individual de qué antibiótico usar, y por cuánto tiempo, tiene un efecto acumulado sobre un problema de salud pública mucho más grande.',
  claves:['selección de antibiótico','resistencia antimicrobiana','profilaxis antibiótica','espectro'],
  sigue:null,
  secciones:[
    {
      t:'Elegir bien: espectro, sitio de infección y al paciente',
      p:[
        'La *selección de antibiótico* ideal considera varios factores a la vez: el *espectro* de acción (qué tan amplio o dirigido es, retomando las familias ya vistas en el tema correspondiente), si el antibiótico alcanza bien el sitio específico de la infección (por ejemplo, algunos cruzan mal la barrera hematoencefálica, ya vista en Fisiología I, y no sirven para una infección del sistema nervioso central aunque cubran bien al microorganismo causante), y las características del propio paciente (función renal y hepática, para el ajuste de dosis ya visto en farmacocinética; alergias conocidas).',
        'Usar un antibiótico de espectro más amplio de lo necesario "por si acaso" no es una decisión neutra: cubre más microorganismos, pero también ejerce más presión selectiva sobre la flora normal del paciente (retomando la disbiosis ya vista en Microbiología) y sobre la microbiota de la comunidad en general, favoreciendo la selección de bacterias resistentes.'
      ]
    },
    {
      t:'Resistencia antimicrobiana: un problema que trasciende al paciente individual',
      p:[
        'La *resistencia antimicrobiana* (ya vista en su mecanismo molecular en Microbiología) se acelera con cada uso innecesario o mal indicado de un antibiótico: cada vez que se expone a una población bacteriana a un antibiótico sin necesidad real, se favorece la supervivencia selectiva de las pocas bacterias resistentes que ya existían, que luego se multiplican sin la competencia de las bacterias sensibles ya eliminadas. La *profilaxis antibiótica* (usar un antibiótico para PREVENIR una infección, no para tratar una ya establecida, como antes de ciertas cirugías) tiene indicaciones puntuales y bien definidas, precisamente porque su uso indiscriminado contribuye de forma desproporcionada a este problema.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Farmacología con un mensaje que conecta directamente con la salud pública ya vista en Epidemiología: la decisión de prescribir (o no) un antibiótico nunca es solo sobre el paciente que tiene enfrente, tiene consecuencias que se extienden más allá de esa consulta individual.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.'
}

});
