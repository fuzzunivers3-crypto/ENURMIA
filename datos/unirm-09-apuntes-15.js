/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 15)
   FARMACOLOGIA reescrita al estandar extenso. Mismas 12 claves
   de objeto que ya existian, repartidas entre unirm-09-apuntes.js
   (1) y unirm-09-apuntes-6.js (11). Object.assign las sobrescribe
   sin romper "Leer el tema".

   Igual que en las tres materias anteriores de este cuatrimestre,
   la cadena `sigue` de los 12 temas YA estaba en el orden correcto
   de principio a fin -ningun hueco ni clave rota-. Solo se cierra
   el cabo suelto final: 'uso-racional-antimicrobianos' (ultimo
   tema, sigue:null) ahora encadena hacia 'niveles-prevencion',
   primer tema de Medicina Preventiva, la materia siguiente de
   este cuatrimestre.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'farmacocinetica-absorcion-distribucion': {
  tema:'Farmacocinética: absorción y distribución',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:14,
  idea:'Antes de que un fármaco pueda ejercer cualquier efecto, tiene que llegar hasta su sitio de acción, y ese recorrido -desde que se administra hasta que aparece en la sangre y luego en los tejidos- determina buena parte de qué tan bien funciona una dosis, incluso antes de considerar su mecanismo de acción.',
  claves:['biodisponibilidad','unión a proteínas plasmáticas','volumen de distribución','primer paso hepático'],
  sigue:'farmacocinetica-metabolismo-excrecion',
  secciones:[
    {
      t:'Biodisponibilidad: cuánto del fármaco realmente llega a la circulación',
      p:[
        'La biodisponibilidad es la fracción de una dosis administrada que llega intacta a la circulación sistémica, capaz de ejercer su efecto. Una dosis intravenosa tiene, por definición, biodisponibilidad del 100% (entra directamente a la sangre); una dosis oral casi siempre tiene una biodisponibilidad menor, porque parte del fármaco puede no absorberse completamente en el tubo digestivo, o ser metabolizado antes de alcanzar la circulación general.'
      ],
      foco:[
        'La biodisponibilidad es la fracción de la dosis administrada que llega intacta a la circulación sistémica -la vía intravenosa tiene 100% por definición; la vía oral casi siempre es menor.'
      ]
    },
    {
      t:'El efecto de primer paso hepático',
      p:[
        'El efecto de primer paso hepático es la razón más frecuente por la que un fármaco administrado por vía oral tiene menor biodisponibilidad que el mismo fármaco administrado por otra vía: tras absorberse en el intestino, la sangre pasa primero por el hígado (a través de la circulación portal) antes de llegar a la circulación general, y el hígado puede metabolizar una parte considerable del fármaco en ese primer paso, antes de que tenga oportunidad de ejercer su efecto en el resto del cuerpo.'
      ],
      foco:[
        'El primer paso hepático metaboliza parte del fármaco absorbido por vía oral ANTES de que llegue a la circulación general, reduciendo su biodisponibilidad -algunos fármacos tienen un primer paso tan intenso que se vuelven poco útiles por vía oral.'
      ]
    },
    {
      t:'Unión a proteínas plasmáticas y volumen de distribución',
      p:[
        'La unión a proteínas plasmáticas (con frecuencia a la albúmina) determina qué fracción del fármaco circula "libre" (activa, capaz de actuar sobre su receptor) frente a "unida" (inactiva temporalmente, como una reserva). El volumen de distribución es un parámetro que relaciona la dosis administrada con la concentración plasmática resultante, y refleja indirectamente qué tanto un fármaco sale del torrente sanguíneo hacia los tejidos: un volumen de distribución alto sugiere que el fármaco se distribuye ampliamente fuera de la sangre (por ejemplo, hacia el tejido graso o muscular), mientras que uno bajo sugiere que permanece más confinado al compartimento vascular.'
      ],
      foco:[
        '*Consideración clínica*: un volumen de distribución alto sugiere que el fármaco sale ampliamente de la sangre hacia los tejidos; uno bajo sugiere que permanece confinado principalmente al compartimento vascular.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3.'
},

'farmacocinetica-metabolismo-excrecion': {
  tema:'Farmacocinética: metabolismo y excreción',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:14,
  idea:'El hígado no siempre "destruye" un fármaco al metabolizarlo: a veces lo activa. Esa distinción, poco intuitiva la primera vez, explica por qué ciertos medicamentos no funcionan igual en todas las personas, incluso con la misma dosis exacta.',
  claves:['citocromo P450','vida media','eliminación renal','metabolito activo'],
  sigue:'farmacodinamia-receptores-mecanismos',
  secciones:[
    {
      t:'El citocromo P450: la maquinaria principal de metabolismo',
      p:[
        'La mayoría de los fármacos se metabolizan, sobre todo en el hígado, por un grupo de enzimas llamado citocromo P450, que existe en varias formas (isoenzimas) con distinta capacidad para procesar distintos fármacos. Este metabolismo suele convertir al fármaco en una forma más soluble en agua y, en la mayoría de los casos, menos activa que la molécula original -pero no siempre: algunos fármacos se administran precisamente como una forma inactiva (un "profármaco") que el hígado convierte en su metabolito activo real.'
      ],
      foco:[
        'El citocromo P450 metaboliza la mayoría de los fármacos en el hígado -habitualmente los inactiva, pero algunos "profármacos" requieren esta conversión para producir su metabolito activo.'
      ]
    },
    {
      t:'Cuando la variación genética afecta el metabolismo',
      p:[
        'Si un fármaco necesita convertirse en su metabolito activo para funcionar, una persona cuyo citocromo P450 metaboliza ese fármaco muy lentamente (por variación genética, retomando la farmacogenética ya vista en Genética Médica) puede no lograr un efecto terapéutico adecuado, incluso con la dosis estándar, porque simplemente no genera suficiente metabolito activo.'
      ],
      foco:[
        '*Consideración clínica*: la variación genética en el citocromo P450 puede hacer que un profármaco no alcance su efecto terapéutico con la dosis estándar, si esa persona lo metaboliza muy lentamente hacia su metabolito activo.'
      ]
    },
    {
      t:'Vida media y eliminación renal',
      p:[
        'La vida media de un fármaco es el tiempo que tarda su concentración plasmática en reducirse a la mitad, y determina cada cuánto tiempo hay que administrar una dosis para mantener una concentración estable. La eliminación renal es la otra vía principal (junto con el metabolismo hepático) para sacar un fármaco del cuerpo, filtrándolo en el glomérulo. Un paciente con función renal disminuida elimina más lento los fármacos que dependen principalmente de esta vía, acumulando concentraciones más altas de lo esperado -una de las razones más frecuentes por las que se ajusta la dosis en pacientes con enfermedad renal.'
      ],
      foco:[
        'Vida media corta = dosis más frecuentes. La eliminación renal disminuida (por enfermedad renal) acumula fármacos que dependen de esa vía, requiriendo ajuste de dosis.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 4.'
},

'farmacodinamia-receptores-mecanismos': {
  tema:'Farmacodinamia: receptores y mecanismos de acción',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:14,
  idea:'Mientras la farmacocinética estudia qué le hace el cuerpo al fármaco, la farmacodinamia estudia lo contrario: qué le hace el fármaco al cuerpo, y casi siempre esa respuesta empieza con el fármaco uniéndose a un receptor específico, exactamente como una llave que encaja en una cerradura.',
  claves:['agonista','antagonista','receptor','curva dosis-respuesta'],
  sigue:'interacciones-farmacologicas',
  secciones:[
    {
      t:'Agonistas: activar el receptor',
      p:[
        'Un receptor farmacológico es, casi siempre, la misma proteína que normalmente reconoce a una sustancia natural del cuerpo (un neurotransmisor, una hormona): el fármaco se une a ese mismo receptor, imitando o bloqueando su función natural. Un agonista se une al receptor y lo ACTIVA, produciendo el mismo tipo de efecto que la sustancia natural (o uno similar).'
      ],
      foco:[
        'Un agonista se une al receptor y lo activa, produciendo un efecto similar al de la sustancia natural que normalmente reconoce ese receptor.'
      ]
    },
    {
      t:'Antagonistas: bloquear sin activar',
      p:[
        'Un antagonista se une al receptor pero NO lo activa, simplemente ocupa el espacio, impidiendo que el agonista natural (o un fármaco agonista) se una y ejerza su efecto -bloquea la señal, sin producir una señal propia.'
      ],
      foco:[
        'Un antagonista ocupa el receptor sin activarlo, bloqueando que el agonista natural o farmacológico ejerza su efecto -es un bloqueo, no una señal propia.'
      ]
    },
    {
      t:'La curva dosis-respuesta: potencia frente a eficacia máxima',
      p:[
        'La curva dosis-respuesta representa gráficamente cómo cambia el efecto de un fármaco a medida que aumenta su dosis: típicamente empieza plana, sube de forma pronunciada en un rango intermedio, y finalmente se aplana de nuevo (efecto máximo, donde todos los receptores disponibles ya están ocupados). Esta curva permite comparar la potencia de distintos fármacos (qué dosis se necesita para lograr un efecto determinado) y su eficacia máxima (el techo de efecto, sin importar cuánto se aumente la dosis) -dos propiedades distintas: un fármaco puede ser muy potente pero con eficacia máxima menor que otro menos potente.'
      ],
      foco:[
        '*Consideración clínica*: que dos fármacos traten la misma condición no significa que sean intercambiables sin ajuste -uno puede necesitar una dosis mucho menor (más potente) y aun así alcanzar el mismo techo de efecto (misma eficacia) que otro.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 2.'
},

'interacciones-farmacologicas': {
  tema:'Interacciones farmacológicas',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:13,
  idea:'Cuantos más medicamentos toma una persona a la vez, más crece -no de forma lineal, sino exponencial- la cantidad de combinaciones posibles entre ellos, y por eso revisar interacciones no es opcional en un paciente polimedicado.',
  claves:['interacción farmacológica','inductor enzimático','inhibidor enzimático','sinergismo'],
  sigue:'antibioticos-familias-principales',
  secciones:[
    {
      t:'Inductores enzimáticos: acelerar el metabolismo de otro fármaco',
      p:[
        'Una interacción farmacológica ocurre cuando el efecto de un fármaco se modifica por la presencia de otro. Un mecanismo muy frecuente ocurre a nivel del citocromo P450: un inductor enzimático es un fármaco (u otra sustancia) que AUMENTA la actividad de estas enzimas, acelerando el metabolismo de otros fármacos que comparten la misma vía, y reduciendo así su concentración y su efecto.'
      ],
      foco:[
        'Un inductor enzimático AUMENTA la actividad del citocromo P450, acelerando el metabolismo de otros fármacos y REDUCIENDO su concentración y efecto.'
      ]
    },
    {
      t:'Inhibidores enzimáticos: el riesgo de toxicidad',
      p:[
        'Un inhibidor enzimático hace lo contrario: BLOQUEA la actividad de estas enzimas, enlenteciendo el metabolismo de otros fármacos y aumentando su concentración, con riesgo de toxicidad si la dosis no se ajusta. Si un paciente toma un fármaco A de forma estable, y se le agrega un fármaco B que es inhibidor enzimático de la misma vía que metaboliza al fármaco A, la concentración del fármaco A puede subir considerablemente sin haber cambiado su dosis -una interacción invisible si no se conoce el mecanismo.'
      ],
      foco:[
        'Un inhibidor enzimático BLOQUEA el citocromo P450, enlenteciendo el metabolismo de otros fármacos y AUMENTANDO su concentración, con riesgo de toxicidad.'
      ]
    },
    {
      t:'Sinergismo: cuando el efecto combinado es mayor',
      p:[
        'El sinergismo ocurre cuando dos fármacos, administrados juntos, producen un efecto combinado mayor que la simple suma de sus efectos individuales -puede ser deseado (combinar dos antihipertensivos con mecanismos distintos) o indeseado (combinar dos sedantes del sistema nervioso central puede deprimir la respiración mucho más de lo que cada uno haría por separado). En un paciente polimedicado, revisar sistemáticamente las interacciones potenciales antes de agregar un fármaco nuevo es una parte esencial de la seguridad del tratamiento.'
      ],
      foco:[
        '*Consideración clínica*: el sinergismo indeseado (por ejemplo, combinar dos sedantes del SNC) puede deprimir la respiración mucho más que la suma esperada de cada fármaco por separado.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.'
},

'antibioticos-familias-principales': {
  tema:'Antibióticos: familias principales',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:14,
  idea:'Agrupar los antibióticos por su mecanismo de acción -no por su nombre comercial ni por memorizarlos sueltos- es lo que permite predecir, con lógica, contra qué tipo de bacteria funciona cada familia y por qué.',
  claves:['betalactámico','macrólido','aminoglucósido','quinolona'],
  sigue:'antiinflamatorios-analgesicos',
  secciones:[
    {
      t:'Atacar la pared: los betalactámicos',
      p:[
        'Los betalactámicos (penicilinas, cefalosporinas) bloquean la síntesis de la pared celular bacteriana (el peptidoglicano), estructura que la célula humana no tiene, lo que explica su relativa seguridad para el paciente. Son más eficaces, en general, contra bacterias en división activa (que están construyendo pared nueva) que contra bacterias en reposo.'
      ],
      foco:[
        'Los betalactámicos bloquean la síntesis de la pared bacteriana (peptidoglicano, ausente en células humanas) -más eficaces contra bacterias en división activa.'
      ]
    },
    {
      t:'Atacar el ribosoma: macrólidos y aminoglucósidos',
      p:[
        'Los macrólidos y los aminoglucósidos actúan sobre el ribosoma bacteriano (que, aunque cumple la misma función que el ribosoma humano, tiene una estructura suficientemente distinta como para que estos fármacos lo bloqueen de forma selectiva), interrumpiendo la síntesis de proteínas bacterianas necesarias para su supervivencia y multiplicación.'
      ],
      foco:[
        'Macrólidos y aminoglucósidos bloquean selectivamente el ribosoma bacteriano (distinto estructuralmente del humano), interrumpiendo la síntesis de proteínas necesarias para la bacteria.'
      ]
    },
    {
      t:'Atacar el ADN: las quinolonas',
      p:[
        'Las quinolonas actúan sobre enzimas bacterianas necesarias para replicar su ADN (topoisomerasas bacterianas, distintas de las humanas), impidiendo que la bacteria pueda dividirse. Organizar los antibióticos por mecanismo (pared, ribosoma, ADN) en vez de memorizar cada nombre por separado es lo que permite predecir por qué una familia funciona mejor contra cierto tipo de bacteria y por qué la resistencia a una familia no necesariamente implica resistencia a otra con mecanismo distinto.'
      ],
      foco:[
        '*Consideración clínica*: las quinolonas bloquean topoisomerasas bacterianas (distintas de las humanas), impidiendo la replicación del ADN bacteriano -organizar por mecanismo (pared/ribosoma/ADN) predice mejor el espectro que memorizar nombres sueltos.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 43-45.'
},

'antiinflamatorios-analgesicos': {
  tema:'Antiinflamatorios y analgésicos',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:14,
  idea:'Entender por qué los AINE, aunque tan usados, pueden dañar el estómago no es un dato suelto de memorizar: sale directamente de entender su propio mecanismo de acción, la misma enzima que combate la inflamación también protege la mucosa gástrica.',
  claves:['AINE','inhibidor de la COX','opioide','paracetamol'],
  sigue:'farmacos-cardiovasculares',
  secciones:[
    {
      t:'AINE: un mecanismo, dos efectos opuestos',
      p:[
        'Los AINE (antiinflamatorios no esteroideos) son, en su mayoría, inhibidores de la COX (ciclooxigenasa), una enzima necesaria para producir prostaglandinas, que a su vez median la inflamación y el dolor. Al bloquear la COX, los AINE reducen la inflamación, el dolor y la fiebre. El problema es que la misma enzima (o una forma relacionada) también produce prostaglandinas que protegen la mucosa del estómago -por eso, el mismo mecanismo que hace útil a un AINE contra la inflamación es el que explica su efecto adverso más frecuente: irritación y úlceras gástricas.'
      ],
      foco:[
        'El mismo mecanismo (inhibir la COX) que hace útiles a los AINE contra la inflamación es el que explica su efecto adverso gástrico más frecuente: la COX también protege la mucosa del estómago.'
      ]
    },
    {
      t:'Opioides: eficacia contra el dolor, riesgo de depresión respiratoria',
      p:[
        'Los opioides actúan sobre receptores específicos del sistema nervioso, potenciando la inhibición natural del dolor a nivel espinal y central, siendo muy eficaces contra el dolor intenso, pero con riesgo de depresión respiratoria (por acción sobre el centro respiratorio) y de dependencia con el uso prolongado.'
      ],
      foco:[
        'Los opioides potencian la inhibición natural del dolor, muy eficaces contra dolor intenso, pero con riesgo de depresión respiratoria y dependencia.'
      ]
    },
    {
      t:'Paracetamol: sin el riesgo gástrico, con riesgo hepático',
      p:[
        'El paracetamol tiene efecto analgésico y antipirético comparable al de los AINE en muchos casos, pero con un mecanismo distinto (actúa más a nivel central que periférico), sin el efecto antiinflamatorio significativo ni el riesgo gástrico de los AINE -aunque, a diferencia de estos, su principal riesgo de toxicidad en sobredosis es hepático, no gástrico.'
      ],
      foco:[
        '*Consideración clínica*: elegir entre AINE, paracetamol u opioide depende del tipo de dolor, si hay componente inflamatorio, y el perfil de riesgo del paciente (gástrico, hepático, respiratorio).'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 36 y 31.'
},

'farmacos-cardiovasculares': {
  tema:'Fármacos cardiovasculares',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:14,
  idea:'Cada familia de antihipertensivos actúa sobre un punto distinto de la misma ecuación ya vista en Fisiología II (gasto cardíaco por resistencia periférica), y entender sobre cuál punto actúa cada una es lo que explica por qué se combinan entre sí en vez de solo subir la dosis de una sola.',
  claves:['betabloqueante','IECA','diurético','bloqueador de canales de calcio'],
  sigue:'farmacos-sistema-nervioso-autonomo',
  secciones:[
    {
      t:'Betabloqueante e IECA',
      p:[
        'El betabloqueante bloquea los receptores beta-1 adrenérgicos del corazón, reduciendo la frecuencia cardíaca y la contractilidad, y con ello el gasto cardíaco. El IECA (inhibidor de la enzima convertidora de angiotensina) bloquea la formación de angiotensina II, reduciendo tanto la resistencia vascular como la retención de sodio mediada por la aldosterona.'
      ],
      foco:[
        'Betabloqueante: reduce frecuencia/contractilidad → menor gasto cardíaco. IECA: bloquea angiotensina II → menor resistencia vascular y menor retención de sodio.'
      ]
    },
    {
      t:'Diurético y bloqueador de canales de calcio',
      p:[
        'El diurético aumenta la eliminación renal de sodio y agua, reduciendo el volumen circulante y, con él, la precarga y el gasto cardíaco. El bloqueador de canales de calcio relaja directamente el músculo liso vascular (bloqueando la entrada de calcio necesaria para su contracción), reduciendo la resistencia vascular.'
      ],
      foco:[
        'Diurético: reduce volumen circulante → menor precarga/gasto cardíaco. Bloqueador de canales de calcio: relaja músculo liso vascular → menor resistencia vascular.'
      ]
    },
    {
      t:'Por qué se combinan en vez de usar dosis altas de uno solo',
      p:[
        'Combinar dos fármacos de mecanismos DISTINTOS, a dosis bajas cada uno, suele controlar mejor la presión y con menos efectos adversos que subir al máximo la dosis de un solo fármaco -porque cada familia ataca un punto distinto de la ecuación gasto cardíaco por resistencia periférica, sus efectos se complementan en vez de simplemente sumarse sobre el mismo mecanismo.'
      ],
      foco:[
        '*Consideración clínica*: cada fármaco cardiovascular, para entenderlo de verdad, hay que ubicarlo en qué parte de la ecuación de presión arterial actúa, no memorizarlo como un nombre aislado.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11-13.'
},

'farmacos-sistema-nervioso-autonomo': {
  tema:'Fármacos del sistema nervioso autónomo',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:13,
  idea:'Casi todos los fármacos de esta familia se pueden predecir sin memorizarlos uno por uno, si se tiene bien fijo el mapa de neurotransmisores y receptores del sistema nervioso autónomo ya visto en Fisiología I: cada fármaco es, simplemente, un agonista o un antagonista de un punto específico de ese mapa.',
  claves:['agonista adrenérgico','antagonista colinérgico','simpaticomimético'],
  sigue:'reacciones-adversas-toxicidad',
  secciones:[
    {
      t:'Agonistas adrenérgicos: imitar al simpático',
      p:[
        'Un agonista adrenérgico (o simpaticomimético) activa los receptores adrenérgicos, imitando el efecto del sistema simpático: según el subtipo de receptor sobre el que actúe (alfa o beta), producirá vasoconstricción, broncodilatación, aumento de la frecuencia cardíaca, u otros efectos simpáticos específicos.'
      ],
      foco:[
        'Un agonista adrenérgico (simpaticomimético) activa receptores adrenérgicos, imitando al sistema simpático -el efecto específico depende del subtipo de receptor (alfa o beta).'
      ]
    },
    {
      t:'Antagonistas colinérgicos: el "negativo" del parasimpático',
      p:[
        'Un antagonista colinérgico bloquea los receptores muscarínicos que normalmente responden al sistema parasimpático, produciendo efectos que son, en esencia, el "negativo" de lo que haría el parasimpático: taquicardia (al quitar el freno parasimpático sobre el corazón), pupila dilatada, boca seca, y enlentecimiento del tránsito intestinal.'
      ],
      foco:[
        'Un antagonista colinérgico bloquea receptores muscarínicos, produciendo el "negativo" del parasimpático: taquicardia, pupila dilatada, boca seca, tránsito intestinal enlentecido.'
      ]
    },
    {
      t:'Predecir sin memorizar: el ejemplo del salbutamol',
      p:[
        'Sabiendo que los receptores beta-2 relajan el músculo liso bronquial y vascular, se puede predecir sin memorizarlo que un agonista beta-2 (como el salbutamol) sirve para tratar el broncoespasmo del asma -el fármaco no inventa un efecto nuevo, simplemente activa con más fuerza un receptor que el cuerpo ya usa naturalmente para ese propósito.'
      ],
      foco:[
        '*Consideración clínica*: casi ningún fármaco de esta familia necesita memorizarse aislado si el mapa de receptores autonómicos y sus efectos ya está claro desde Fisiología I.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 6 y 9.'
},

'reacciones-adversas-toxicidad': {
  tema:'Reacciones adversas y toxicidad',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:13,
  idea:'No toda reacción adversa a un fármaco es igual de predecible: algunas se pueden anticipar sabiendo el mecanismo del fármaco (como el sangrado gástrico de los AINE), y otras son, por definición, prácticamente imposibles de predecir en un paciente concreto.',
  claves:['reacción adversa','efecto idiosincrásico','sobredosis','antídoto'],
  sigue:'farmacologia-sistema-nervioso-central',
  secciones:[
    {
      t:'Reacciones predecibles: relacionadas con el mecanismo y la dosis',
      p:[
        'La mayoría de las reacciones adversas de un fármaco son predecibles a partir de su propio mecanismo de acción (como la sedación de un antihistamínico que también actúa sobre receptores del sistema nervioso central, o el sangrado gástrico de los AINE), y son más probables o más intensas a dosis más altas.'
      ],
      foco:[
        'La mayoría de las reacciones adversas son predecibles a partir del mecanismo del fármaco, y más probables/intensas a dosis más altas.'
      ]
    },
    {
      t:'Efecto idiosincrásico: la excepción impredecible',
      p:[
        'Un efecto idiosincrásico es, por el contrario, una reacción adversa rara, no relacionada de forma predecible con la dosis ni con el mecanismo principal del fármaco, generalmente explicada por una particularidad genética o inmunológica específica de esa persona -es prácticamente imposible de anticipar antes de que ocurra en un paciente concreto.'
      ],
      foco:[
        'Un efecto idiosincrásico es raro, no relacionado con la dosis ni el mecanismo principal, por particularidad genética/inmunológica de la persona -prácticamente imposible de anticipar.'
      ]
    },
    {
      t:'Sobredosis y antídotos',
      p:[
        'Una sobredosis es una dosis que excede la capacidad del cuerpo de procesar el fármaco de forma segura, produciendo toxicidad que, con frecuencia, es una versión exagerada de sus propios efectos farmacológicos conocidos. Un antídoto es una sustancia específica capaz de revertir o contrarrestar la toxicidad de un fármaco determinado -no todos los fármacos tienen uno disponible, y cuando existe, suele actuar bloqueando el mismo receptor que el fármaco tóxico activó.'
      ],
      foco:[
        '*Consideración clínica*: ante sospecha de toxicidad, preguntarse primero si es una extensión predecible del mecanismo conocido (tratable revirtiendo ese mecanismo, si hay antídoto) o una reacción idiosincrásica (tratamiento de soporte general).'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 5.'
},

'farmacologia-sistema-nervioso-central': {
  tema:'Farmacología del sistema nervioso central',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:13,
  idea:'La mayoría de los fármacos que actúan sobre el estado de ánimo, la ansiedad o el pensamiento trabajan modulando la misma maquinaria de neurotransmisores y sinapsis ya vista en Fisiología I e Histología, solo que aplicada al cerebro en vez de a una neurona aislada.',
  claves:['ansiolítico','benzodiacepina','antidepresivo','antipsicótico'],
  sigue:'farmacologia-endocrina',
  secciones:[
    {
      t:'Las benzodiacepinas: potenciar una inhibición ya existente',
      p:[
        'Las benzodiacepinas, un grupo de fármacos ansiolíticos muy usados, actúan potenciando el efecto de un neurotransmisor inhibitorio natural del cerebro: no crean una señal inhibitoria nueva, sino que hacen que la señal inhibitoria natural del cuerpo sea más efectiva de lo que sería por sí sola. Por eso producen sedación, relajación muscular y, en dosis altas o combinadas con otros depresores, riesgo de depresión respiratoria significativa.'
      ],
      foco:[
        'Las benzodiacepinas potencian la inhibición natural ya existente (no crean una nueva) -producen sedación, relajación muscular, y riesgo de depresión respiratoria en dosis altas o combinadas.'
      ]
    },
    {
      t:'Antidepresivos: aumentar la disponibilidad de neurotransmisores',
      p:[
        'Los antidepresivos actúan, en su mayoría, aumentando la disponibilidad de ciertos neurotransmisores en la sinapsis (por ejemplo, bloqueando su recaptación de vuelta hacia la neurona que los liberó), aunque su efecto clínico completo suele tardar semanas en manifestarse, más de lo que tardaría el cambio bioquímico inmediato, lo cual sugiere que hay adaptaciones más lentas y complejas involucradas.'
      ],
      foco:[
        'Los antidepresivos aumentan la disponibilidad de neurotransmisores en la sinapsis, pero su efecto clínico tarda semanas -sugiere adaptaciones más lentas que el cambio bioquímico inmediato.'
      ]
    },
    {
      t:'Antipsicóticos: bloquear receptores de dopamina',
      p:[
        'Los antipsicóticos actúan, en gran medida, bloqueando receptores de dopamina -retomando la vía dopaminérgica ya vista en Neuroanatomía al hablar de los ganglios basales-, lo cual explica tanto su efecto terapéutico sobre ciertos síntomas como algunos de sus efectos adversos motores, dado que esa misma vía dopaminérgica participa también en el control normal del movimiento.'
      ],
      foco:[
        '*Consideración clínica*: los antipsicóticos bloquean dopamina, la misma vía de los ganglios basales usada para el control motor -esto explica tanto su efecto terapéutico como sus efectos adversos motores.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 22 y 30.'
},

'farmacologia-endocrina': {
  tema:'Farmacología endocrina',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:13,
  idea:'Buena parte de la farmacología endocrina consiste, literalmente, en reponer una hormona que falta o en imitar sus efectos, retomando directamente la lógica de exceso-déficit-resistencia ya vista en Fisiopatología.',
  claves:['corticoide','hipoglucemiante oral','insulina exógena','hormona tiroidea'],
  sigue:'uso-racional-antimicrobianos',
  secciones:[
    {
      t:'Reponer lo que falta: insulina y hormona tiroidea',
      p:[
        'La insulina exógena es el tratamiento de reemplazo directo en la diabetes tipo 1 (déficit absoluto de insulina) y, en ciertas etapas, también se usa en la diabetes tipo 2. La hormona tiroidea sintética se usa como reemplazo directo en el hipotiroidismo, cuando la glándula tiroides no produce suficiente hormona por sí misma -en ambos casos, el fármaco no "cura" la causa subyacente, sustituye la función hormonal perdida.'
      ],
      foco:[
        'Insulina exógena (diabetes tipo 1) y hormona tiroidea sintética (hipotiroidismo) son reemplazos directos de la hormona faltante, no curan la causa subyacente.'
      ]
    },
    {
      t:'Hipoglucemiantes orales: modular, no solo reemplazar',
      p:[
        'Los hipoglucemiantes orales (usados principalmente en diabetes tipo 2) actúan por mecanismos variados: algunos estimulan al páncreas a producir más insulina, otros mejoran la sensibilidad de los tejidos a la insulina ya presente -a diferencia de la insulina exógena, no reemplazan directamente a la hormona, sino que modulan el sistema para que funcione mejor con lo que el cuerpo ya produce.'
      ],
      foco:[
        'Los hipoglucemiantes orales MODULAN el sistema (estimulan producción propia o mejoran sensibilidad), a diferencia de la insulina exógena, que REEMPLAZA directamente a la hormona.'
      ]
    },
    {
      t:'Corticoides: dosis farmacológica, no solo reemplazo',
      p:[
        'Los corticoides sintéticos imitan el efecto del cortisol natural, usados en dosis farmacológicas (mucho más altas que las fisiológicas) sobre todo por su potente efecto antiinflamatorio e inmunosupresor. El uso prolongado de corticoides a dosis altas puede suprimir la producción natural de cortisol del propio cuerpo, razón por la cual no se suspenden de golpe tras un uso prolongado, sino que se reducen gradualmente.'
      ],
      foco:[
        '*Consideración clínica*: los corticoides a dosis altas y prolongadas suprimen la producción natural de cortisol (retroalimentación negativa) -por eso se retiran gradualmente, nunca de golpe.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 39 y 41.'
},

'uso-racional-antimicrobianos': {
  tema:'Uso racional de antimicrobianos',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:13,
  idea:'Este último tema del bloque cierra la Farmacología conectándola directamente con la resistencia bacteriana ya vista en Microbiología: cada decisión individual de qué antibiótico usar, y por cuánto tiempo, tiene un efecto acumulado sobre un problema de salud pública mucho más grande.',
  claves:['selección de antibiótico','resistencia antimicrobiana','profilaxis antibiótica','espectro'],
  sigue:'niveles-prevencion',
  secciones:[
    {
      t:'Elegir bien: espectro, sitio de infección y el paciente',
      p:[
        'La selección de antibiótico ideal considera varios factores a la vez: el espectro de acción (qué tan amplio o dirigido es), si el antibiótico alcanza bien el sitio específico de la infección (algunos cruzan mal la barrera hematoencefálica y no sirven para una infección del sistema nervioso central), y las características del propio paciente (función renal y hepática, alergias conocidas).'
      ],
      foco:[
        'La selección de antibiótico considera espectro, capacidad de alcanzar el sitio de infección, y características del paciente (función renal/hepática, alergias).'
      ]
    },
    {
      t:'El costo de un espectro más amplio de lo necesario',
      p:[
        'Usar un antibiótico de espectro más amplio de lo necesario "por si acaso" no es una decisión neutra: cubre más microorganismos, pero también ejerce más presión selectiva sobre la flora normal del paciente y sobre la microbiota de la comunidad en general, favoreciendo la selección de bacterias resistentes.'
      ],
      foco:[
        'Un espectro más amplio de lo necesario ejerce más presión selectiva sobre la flora normal y la microbiota comunitaria, favoreciendo la selección de bacterias resistentes.'
      ]
    },
    {
      t:'Resistencia antimicrobiana y profilaxis: un problema de salud pública',
      p:[
        'La resistencia antimicrobiana se acelera con cada uso innecesario o mal indicado de un antibiótico: cada exposición sin necesidad real favorece la supervivencia selectiva de las pocas bacterias resistentes que ya existían. La profilaxis antibiótica (usar un antibiótico para PREVENIR una infección, no para tratar una ya establecida) tiene indicaciones puntuales y bien definidas, precisamente porque su uso indiscriminado contribuye de forma desproporcionada a este problema. La decisión de prescribir (o no) un antibiótico nunca es solo sobre el paciente que tiene enfrente: tiene consecuencias que se extienden más allá de esa consulta individual.'
      ],
      foco:[
        '*Consideración clínica*: este tema cierra el bloque completo de Farmacología conectándolo con la salud pública -cada prescripción de antibiótico tiene consecuencias que trascienden al paciente individual.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.'
}

});
