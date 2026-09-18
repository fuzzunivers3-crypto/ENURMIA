/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 10)
   Termina de cubrir MICROBIOLOGIA MEDICA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'crecimiento-bacteriano-medios-cultivo': {
  tema:'Crecimiento bacteriano y medios de cultivo',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:6,
  idea:'Cultivar una bacteria es, en el fondo, darle exactamente lo que necesita para reproducirse y quitarle todo lo que necesitaría un competidor: cada medio de cultivo está diseñado con ese doble propósito en mente.',
  claves:['agar sangre','MacConkey','aerobio','anaerobio','fase logarítmica'],
  sigue:'cocos-grampositivos-catalasa-coagulasa',
  secciones:[
    {
      t:'Cómo crece una población bacteriana',
      p:[
        'Cuando se siembran bacterias en un medio con nutrientes, su crecimiento sigue una curva predecible con varias fases: una fase de adaptación (lag), donde las bacterias se ajustan al nuevo medio sin multiplicarse mucho todavía; una *fase logarítmica* (exponencial), donde la población se duplica a intervalos regulares y crece muy rápido; una fase estacionaria, cuando los nutrientes empiezan a agotarse y el crecimiento se frena; y una fase de muerte, cuando los nutrientes se acaban y se acumulan productos de desecho tóxicos.',
        'Según su necesidad de oxígeno, las bacterias se clasifican en *aerobias* (necesitan oxígeno para crecer), *anaerobias* (mueren o no crecen en presencia de oxígeno) y anaerobias facultativas (pueden crecer con o sin oxígeno, ajustando su metabolismo según lo que haya disponible). Esta clasificación no es solo teórica: determina en qué condiciones hay que sembrar una muestra en el laboratorio para lograr aislar al microorganismo sospechoso.'
      ]
    },
    {
      t:'Medios de cultivo diseñados con un propósito',
      p:[
        'El *agar sangre* es un medio enriquecido (contiene sangre de carnero) que permite crecer a la mayoría de las bacterias, y además revela un dato diagnóstico extra: el tipo de hemólisis que produce cada bacteria alrededor de su colonia (destrucción completa de los glóbulos rojos, parcial, o ninguna), un dato que ayuda a diferenciar especies, como se verá con los cocos grampositivos.',
        'El *MacConkey* es un medio selectivo y diferencial: selectivo porque contiene sales biliares que inhiben el crecimiento de bacterias grampositivas, dejando crecer solo gramnegativas (útil, por ejemplo, para aislar enterobacterias de una muestra de heces, sin que la flora grampositiva normal interfiera); diferencial porque además contiene lactosa e indicadores de pH, así que las bacterias que fermentan lactosa forman colonias de un color distinto a las que no la fermentan —una pista bioquímica rápida sobre qué género de bacteria gramnegativa se está viendo, antes de hacer pruebas más específicas.'
      ],
      foco:[
        'Un medio "selectivo" elige QUÉ crece; un medio "diferencial" ayuda a distinguir ENTRE lo que ya creció. El MacConkey hace las dos cosas a la vez, y por eso es tan usado en microbiología clínica.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 3.'
},

'cocos-grampositivos-catalasa-coagulasa': {
  tema:'Cocos grampositivos',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:7,
  idea:'Dos pruebas de laboratorio muy simples —catalasa y coagulasa— bastan para separar, en minutos, a los géneros de cocos grampositivos que más importan en la clínica, mucho antes de tener una identificación completa.',
  claves:['Staphylococcus','Streptococcus','catalasa','coagulasa','hemólisis','aureus'],
  sigue:'mecanismos-patogenicidad',
  secciones:[
    {
      t:'El primer paso: la prueba de la catalasa',
      p:[
        'Ante un coco grampositivo agrupado (visto en el microscopio como racimos, como un ramo de uvas), el primer paso de laboratorio suele ser la prueba de la *catalasa*: se agrega peróxido de hidrógeno a una muestra de la colonia, y si burbujea (la enzima catalasa descompone el peróxido en agua y oxígeno), la prueba es positiva. *Staphylococcus* es catalasa positivo; *Streptococcus* es catalasa negativo. Esta sola prueba ya separa a los dos géneros de cocos grampositivos más importantes en clínica.'
      ]
    },
    {
      t:'Dentro de Staphylococcus: la prueba de la coagulasa',
      p:[
        'Una vez identificado un Staphylococcus (catalasa positivo), la siguiente pregunta es si produce *coagulasa*, una enzima que hace coagular el plasma. *Staphylococcus aureus* es coagulasa positivo, y es la especie más virulenta y clínicamente más importante del género: causa desde infecciones cutáneas hasta neumonía, endocarditis y sepsis, y produce en agar sangre una *hemólisis* completa (beta-hemólisis, la zona alrededor de la colonia queda totalmente clara). Las demás especies de Staphylococcus (como S. epidermidis) son coagulasa negativas, generalmente menos virulentas, aunque relevantes como causa de infección en dispositivos médicos implantados (catéteres, prótesis).',
        'Dentro de Streptococcus, la clasificación clásica se hace, en parte, por el TIPO de hemólisis en agar sangre: la beta-hemólisis completa es típica de Streptococcus pyogenes (el causante de la faringitis estreptocócica y sus complicaciones), mientras que otras especies producen alfa-hemólisis (parcial, deja un halo verdoso) o son no hemolíticas.'
      ],
      foco:[
        'Secuencia mental útil: coco grampositivo en racimos → catalasa (Staph = positiva, Strep = negativa) → si es Staph, coagulasa (aureus = positiva, el resto = negativa) → si es Strep, tipo de hemólisis en agar sangre.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 15 y 17.'
},

'mecanismos-patogenicidad': {
  tema:'Mecanismos de patogenicidad',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:7,
  idea:'Que una bacteria enferme al cuerpo no es automático: necesita adherirse, evitar ser eliminada, y a menudo producir alguna sustancia que directamente dañe al huésped. Entender esos pasos explica por qué unas bacterias son mucho más peligrosas que otras, aunque todas sean, en el fondo, solo bacterias.',
  claves:['exotoxina','endotoxina','lipopolisacárido','adhesina','virulencia'],
  sigue:'antibioticos-mecanismos-resistencia',
  secciones:[
    {
      t:'Primero adherirse, después evitar la defensa',
      p:[
        'Antes de causar daño, una bacteria patógena necesita colonizar al huésped, y eso empieza con *adhesinas*: estructuras en su superficie (como fimbrias o proteínas específicas) que le permiten pegarse a células o superficies específicas del cuerpo, evitando ser arrastrada por el flujo natural de fluidos (orina, moco). Muchas bacterias tienen adhesinas específicas para tejidos específicos, lo que explica en parte por qué ciertas bacterias prefieren infectar un órgano y no otro.',
        'Una vez adherida, la bacteria necesita evadir las defensas del huésped: algunas tienen cápsulas que dificultan la fagocitosis (recordando el tema de inmunología visto en 8vo, y por qué el bazo es tan importante contra bacterias encapsuladas), otras producen enzimas que degradan anticuerpos, y otras varían constantemente sus proteínas de superficie para que el sistema inmunitario no logre "aprender" a reconocerlas de forma estable.'
      ]
    },
    {
      t:'Toxinas: exotoxinas contra endotoxina',
      p:[
        'Las *exotoxinas* son proteínas que la bacteria SECRETA activamente, con un mecanismo de acción específico y a menudo muy potente incluso en cantidades mínimas (algunas de las toxinas biológicas más potentes conocidas son exotoxinas bacterianas, como la del tétanos o el botulismo). Pueden producirlas tanto bacterias grampositivas como gramnegativas.',
        'La *endotoxina* es distinta: no se secreta activamente, es el propio *lipopolisacárido* (LPS) de la membrana externa de las bacterias GRAMNEGATIVAS (ya visto en el tema de estructura bacteriana), que se libera cuando la bacteria muere y su pared se rompe. Al liberarse en cantidad, el LPS dispara una respuesta inflamatoria sistémica muy intensa, con fiebre, caída de la presión arterial y, en casos graves, shock séptico —es la razón principal por la que las infecciones graves por gramnegativos tienen ese potencial de deterioro tan rápido.'
      ],
      foco:[
        'Diferencia clave para examen: la exotoxina es una proteína secretada activamente (se puede neutralizar con una vacuna tipo toxoide, como en el tétanos); la endotoxina es un componente estructural de la pared bacteriana gramnegativa que se libera al morir la bacteria, no algo que la bacteria "decida" secretar.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 9.'
},

'antibioticos-mecanismos-resistencia': {
  tema:'Antibióticos: mecanismos y resistencia',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:7,
  idea:'Un antibiótico funciona atacando algo que la bacteria tiene y la célula humana no (o que es suficientemente distinto en la bacteria), y la resistencia bacteriana es, casi siempre, una forma de esquivar exactamente ese punto de ataque.',
  claves:['betalactámico','betalactamasa','resistencia','antibiograma','concentración mínima inhibitoria'],
  sigue:'introduccion-micologia',
  secciones:[
    {
      t:'Atacar lo que la bacteria tiene y la célula humana no',
      p:[
        'Los antibióticos más usados aprovechan diferencias estructurales entre la célula bacteriana y la célula humana, para dañar a la primera sin dañar (demasiado) a la segunda. El grupo *betalactámico* (que incluye penicilinas y cefalosporinas) ataca la síntesis de la pared bacteriana de peptidoglicano —una estructura que la célula humana simplemente no tiene—, impidiendo que la bacteria pueda construir o reparar su pared, lo que finalmente la hace estallar.'
      ]
    },
    {
      t:'Cómo se hace resistente una bacteria',
      p:[
        'La *resistencia* bacteriana a un antibiótico puede surgir por varios mecanismos: producir una enzima que destruye o modifica el antibiótico antes de que actúe (el ejemplo clásico es la *betalactamasa*, una enzima que muchas bacterias producen para romper el anillo betalactámico de la penicilina, inactivándola); cambiar el sitio donde el antibiótico actuaría, de modo que ya no se una bien; bombear activamente el antibiótico fuera de la célula antes de que alcance concentración suficiente; o volverse impermeable a su entrada.',
        'La *concentración mínima inhibitoria* (CMI) es la concentración más baja de un antibiótico capaz de inhibir el crecimiento visible de una bacteria en el laboratorio, y se usa para decidir, de forma objetiva, si esa bacteria es sensible o resistente a un antibiótico determinado. El *antibiograma* es el estudio de laboratorio que prueba, de forma sistemática, la sensibilidad de una bacteria aislada frente a un panel de antibióticos distintos, guiando la elección del tratamiento con evidencia directa, en vez de solo con la elección empírica inicial.'
      ],
      foco:[
        'Consideración clínica: muchos antibióticos betalactámicos se combinan hoy con un inhibidor de betalactamasa (como el ácido clavulánico junto a la amoxicilina), precisamente para neutralizar ese mecanismo de resistencia específico y devolverle eficacia al antibiótico original.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 20.'
},

'introduccion-micologia': {
  tema:'Introducción a la micología',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:6,
  idea:'Los hongos son organismos eucariotas, mucho más parecidos a las células humanas que las bacterias, y esa cercanía biológica es precisamente lo que hace que tratarlos con fármacos sea más difícil: es más complicado encontrar un blanco que dañe al hongo sin dañar también a la célula humana.',
  claves:['hongo','levadura','hifa','Candida','dimórfico'],
  sigue:'genetica-bacteriana',
  secciones:[
    {
      t:'Dos formas básicas de crecimiento fúngico',
      p:[
        'Los hongos pueden crecer en dos formas principales. Como *levadura*: células individuales, generalmente ovaladas, que se reproducen por gemación (una célula hija brota de la madre). Como moho, formando *hifas*: filamentos largos y ramificados que crecen entrelazados formando una red (el micelio). Algunos hongos son *dimórficos*: pueden crecer como levadura o como moho según la temperatura y las condiciones del ambiente —típicamente como moho a temperatura ambiente y como levadura a la temperatura del cuerpo humano (37°C), un cambio que en varios de ellos está relacionado directamente con su capacidad de causar enfermedad en el ser humano.'
      ]
    },
    {
      t:'Candida: el hongo que más se ve en la práctica clínica habitual',
      p:[
        '*Candida* es una levadura que forma parte de la flora normal de las mucosas humanas (boca, tracto digestivo, vagina) en pequeñas cantidades, sin causar problema. Se convierte en patógena cuando las condiciones locales cambian a su favor —por ejemplo, tras un tratamiento con antibióticos de amplio espectro que elimina la flora bacteriana competidora, dejándole el terreno libre para crecer en exceso—, o cuando el sistema inmunitario del huésped está comprometido.',
        'Ejemplo trabajado: la candidiasis oral (muguet) en un lactante o en un paciente que usa corticoides inhalados, o la candidiasis vaginal tras un ciclo de antibióticos, son ejemplos de infección oportunista por un microorganismo que, en circunstancias normales, convive sin problema con el cuerpo humano.'
      ],
      foco:[
        'Ser dimórfico no es una regla universal de los hongos: muchos hongos son estrictamente levaduras (como Cryptococcus) o estrictamente filamentosos (como Aspergillus), sin cambiar de forma según la temperatura.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 65.'
},

'genetica-bacteriana': {
  tema:'Genética bacteriana',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:7,
  idea:'Las bacterias no solo heredan genes de padres a hijos como los humanos: pueden intercambiar material genético directamente entre bacterias ya adultas, incluso entre especies distintas, y eso es precisamente lo que hace que la resistencia a antibióticos se propague tan rápido entre bacterias que ni siquiera están emparentadas.',
  claves:['plásmido','transferencia horizontal','conjugación','transducción','transformación bacteriana'],
  sigue:'espiroquetas',
  secciones:[
    {
      t:'El plásmido: ADN extra, portátil y compartible',
      p:[
        'Además de su cromosoma principal, muchas bacterias tienen *plásmidos*: pequeñas moléculas circulares de ADN, independientes del cromosoma, que se replican por su cuenta y que a menudo llevan genes útiles pero no esenciales para la supervivencia básica —entre ellos, con mucha frecuencia, genes de resistencia a antibióticos (como la betalactamasa ya mencionada).'
      ]
    },
    {
      t:'Tres formas de transferencia horizontal',
      p:[
        'A diferencia de la herencia normal (de una célula madre a sus células hijas, llamada transferencia vertical), las bacterias pueden intercambiar material genético directamente entre células ya existentes, incluso de especies distintas: es la *transferencia horizontal* de genes, y tiene tres mecanismos principales. La *conjugación* es el más eficiente para propagar resistencia: dos bacterias se conectan mediante un pequeño tubo (pilus sexual) y una transfiere directamente una copia de un plásmido a la otra.',
        'La *transformación* ocurre cuando una bacteria capta directamente ADN libre del ambiente (liberado, por ejemplo, por otra bacteria que murió y se rompió) y lo incorpora a su propio genoma. La *transducción* ocurre cuando un virus bacteriano (un bacteriófago) empaqueta por error un fragmento del ADN de la bacteria que infectó, y al infectar a una segunda bacteria, le transfiere ese fragmento junto con su propio material genético.'
      ],
      foco:[
        'Consideración clínica: la conjugación es el mecanismo principal por el que la resistencia a antibióticos se disemina RÁPIDO entre bacterias de una misma unidad hospitalaria, incluso entre especies distintas, porque un solo plásmido de resistencia puede pasar de una bacteria a otra en cuestión de minutos, sin necesidad de que ninguna de las dos "nazca" con esa resistencia.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 5.'
},

'espiroquetas': {
  tema:'Espiroquetas',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:6,
  idea:'Las espiroquetas tienen una forma tan característica —una espiral fina, casi como un sacacorchos— que su morfología por sí sola ya orienta el diagnóstico, incluso antes de identificar la especie exacta.',
  claves:['Treponema pallidum','Leptospira','Borrelia','sífilis','enfermedad de Lyme'],
  sigue:'micobacterias',
  secciones:[
    {
      t:'Una forma que se ve poco, casi siempre por técnicas especiales',
      p:[
        'Las *espiroquetas* son bacterias con forma de espiral delgada y alargada, tan finas que generalmente no se logran ver bien con la tinción de Gram convencional (por eso, como se mencionó antes, algunas bacterias necesitan técnicas distintas): se visualizan mejor con microscopía de campo oscuro o técnicas de inmunofluorescencia específicas.',
        '*Treponema pallidum* causa la *sífilis*, una infección de transmisión sexual con un curso clásico por etapas: una lesión inicial única e indolora (el chancro, en la etapa primaria), seguida semanas después por manifestaciones sistémicas (erupción cutánea, entre otras, en la etapa secundaria) si no se trata, y finalmente, años después, complicaciones graves y tardías (cardiovasculares, neurológicas) en la etapa terciaria, si nunca se recibió tratamiento.'
      ]
    },
    {
      t:'Dos espiroquetas más, transmitidas por vías distintas',
      p:[
        '*Leptospira* se transmite por contacto con agua o suelo contaminados con orina de animales infectados (roedores, con frecuencia): es relevante en zonas con inundaciones o saneamiento deficiente, y puede causar desde un cuadro leve parecido a una gripe hasta un compromiso multiorgánico grave con ictericia y falla renal en sus formas más severas. *Borrelia* (varias especies) causa la *enfermedad de Lyme*, transmitida por la picadura de garrapatas, con una lesión cutánea inicial característica (eritema migratorio, una mancha rojiza que se expande con un aclaramiento central) seguida, si no se trata, de afectación articular, neurológica o cardíaca semanas o meses después.'
      ],
      foco:[
        'Las tres espiroquetas médicamente importantes comparten la forma, pero tienen vías de transmisión completamente distintas: sífilis por contacto sexual, leptospirosis por agua/orina contaminada, enfermedad de Lyme por garrapata. Confundir la vía de transmisión es un error frecuente si solo se memoriza "son espiroquetas" sin fijar el vector de cada una.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 24-26.'
},

'micobacterias': {
  tema:'Micobacterias',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:7,
  idea:'La pared celular de las micobacterias es tan distinta a la de otras bacterias que rompe casi todas las reglas ya aprendidas: no se tiñe bien con Gram, necesita una tinción especial propia, y esa misma pared es la razón de que la tuberculosis siga siendo, siglos después, una de las infecciones más difíciles de tratar y erradicar.',
  claves:['Mycobacterium tuberculosis','bacilo ácido alcohol resistente','Ziehl-Neelsen','tuberculosis'],
  sigue:'diagnostico-microbiologico',
  secciones:[
    {
      t:'Una pared celular rica en lípidos, no en peptidoglicano típico',
      p:[
        'La pared celular de las *micobacterias* tiene un contenido muy alto de ácidos micólicos (lípidos complejos), lo que le da propiedades únicas: es la razón por la que no se tiñe bien con la tinción de Gram (no se comporta como una grampositiva ni como una gramnegativa típica), y necesita una tinción especial, la de *Ziehl-Neelsen*, que usa calor para forzar la entrada del colorante a través de esa pared tan rica en lípidos. Una vez teñida, esa misma pared resiste la decoloración posterior con una mezcla de ácido y alcohol —de ahí el nombre *bacilo ácido alcohol resistente* (BAAR), la forma en que se reporta un resultado positivo de esta tinción.'
      ]
    },
    {
      t:'Mycobacterium tuberculosis: una infección lenta, de curso prolongado',
      p:[
        '*Mycobacterium tuberculosis*, causante de la *tuberculosis*, es de crecimiento extremadamente lento comparado con la mayoría de las bacterias (un cultivo puede tardar semanas en dar resultado, muy distinto a las horas que toma cultivar una bacteria común), y esa misma lentitud metabólica es parte de por qué el tratamiento requiere varios meses de antibióticos combinados, no unos pocos días como con una infección bacteriana típica.',
        'Una persona infectada no necesariamente desarrolla enfermedad activa de inmediato: el sistema inmunitario puede contener a la bacteria en un estado latente, asintomático, durante años o toda la vida (infección latente), y solo desarrollar tuberculosis activa si las defensas se debilitan más adelante. Esta capacidad de "esperar" dentro del cuerpo humano, protegida en parte por su pared rica en lípidos que dificulta su destrucción incluso dentro de los macrófagos que la fagocitan, es parte de por qué la tuberculosis sigue siendo un problema de salud pública global tan persistente.'
      ],
      foco:[
        'Consideración clínica: el hecho de que la pared micobacteriana resista tan bien la destrucción, incluso dentro del propio macrófago que la fagocitó, es la razón biológica de que el tratamiento de la tuberculosis necesite varios fármacos combinados durante meses, no un solo antibiótico por pocos días.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 22.'
},

'diagnostico-microbiologico': {
  tema:'Diagnóstico microbiológico',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:6,
  idea:'Frente a una sospecha de infección, el laboratorio de microbiología ofrece varias herramientas con distintas velocidades y distintos niveles de certeza, y saber cuál pedir (y cuándo) es tan importante como saber interpretarla.',
  claves:['cultivo','tinción','prueba rápida','hemocultivo','antibiograma'],
  sigue:'flora-normal-microbiota',
  secciones:[
    {
      t:'Rápido pero limitado, o lento pero completo',
      p:[
        'Una *tinción* directa de una muestra (como la tinción de Gram ya vista) da un resultado en minutos, orientando de forma inmediata (bacteria grampositiva o gramnegativa, forma), pero no identifica la especie exacta ni permite probar la sensibilidad a antibióticos. Un *cultivo* toma la muestra y la siembra en un medio adecuado para que el microorganismo crezca lo suficiente como para identificarlo con certeza y, sobre esa colonia ya crecida, hacer un *antibiograma* (ya visto en el tema de resistencia): es más lento (de un día a varias semanas, según el microorganismo, como en el caso extremo de las micobacterias), pero mucho más informativo.',
        'El *hemocultivo* es un cultivo específicamente de una muestra de sangre, y se pide cuando se sospecha que la infección ha entrado al torrente sanguíneo (bacteriemia o sepsis): normalmente la sangre es estéril, así que cualquier crecimiento microbiano en un hemocultivo (descontando alguna contaminación de la piel al tomar la muestra) es un hallazgo clínicamente muy relevante.'
      ]
    },
    {
      t:'Pruebas rápidas: un punto intermedio',
      p:[
        'Las *pruebas rápidas* (basadas en detectar antígenos específicos del microorganismo, o su material genético mediante técnicas moleculares) buscan combinar lo mejor de ambos mundos: dar un resultado en minutos u horas (no en días), con una identificación más específica que una simple tinción, aunque generalmente sin poder ofrecer un antibiograma completo. Son especialmente útiles cuando el tiempo hasta el resultado cambia directamente el manejo inmediato del paciente.'
      ],
      foco:[
        'Regla práctica: cuanto más urgente sea la decisión clínica, más se prioriza la velocidad (tinción, prueba rápida) sobre la certeza absoluta del cultivo; cuanto más importa elegir el antibiótico correcto a largo plazo (una infección grave o que no responde al tratamiento empírico), más vale la pena esperar el cultivo completo con antibiograma.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 4.'
},

'flora-normal-microbiota': {
  tema:'Flora normal y microbiota',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:6,
  idea:'El cuerpo humano no está estéril por dentro y por fuera: convive constantemente con billones de microorganismos que, la mayor parte del tiempo, no solo no hacen daño sino que activamente ayudan al cuerpo a funcionar mejor.',
  claves:['microbiota','flora normal','disbiosis','colonización'],
  sigue:null,
  secciones:[
    {
      t:'Qué es y dónde vive',
      p:[
        'La *flora normal* (o *microbiota*) es el conjunto de microorganismos que colonizan de forma habitual y no patógena distintas superficies del cuerpo en contacto con el exterior: la piel, la boca, el tracto respiratorio superior, el tracto digestivo (sobre todo el colon, donde la concentración es enorme) y la vagina. Estos microorganismos no representan una infección: es una *colonización* estable y, en general, beneficiosa para ambas partes.',
        'La microbiota cumple funciones reales para el huésped: compite por espacio y nutrientes con microorganismos potencialmente patógenos, dificultando que estos últimos se establezcan (un mecanismo llamado resistencia a la colonización); algunas bacterias intestinales producen vitaminas (como parte de la vitamina K); y la microbiota intestinal interactúa constantemente con el sistema inmunitario, ayudando a entrenarlo.'
      ]
    },
    {
      t:'Cuando el equilibrio se rompe',
      p:[
        'La *disbiosis* es un desequilibrio de esa microbiota normal, ya sea porque se reduce drásticamente su cantidad y diversidad (por ejemplo, tras un tratamiento con antibióticos de amplio espectro, que no distinguen entre la bacteria que causa la infección y la flora normal beneficiosa) o porque un microorganismo específico crece de forma desproporcionada aprovechando ese vacío.',
        'Ejemplo trabajado, ya insinuado en el tema de Candida: tras un tratamiento antibiótico prolongado, la reducción de la flora bacteriana normal del intestino o de las mucosas puede dejar espacio libre para que microorganismos oportunistas (como Candida, o bacterias como Clostridioides difficile en el intestino) crezcan sin la competencia habitual que normalmente los mantiene controlados, causando una infección secundaria directamente relacionada con el tratamiento previo.'
      ],
      foco:[
        'Consideración clínica: esta es la lógica detrás de por qué no todo antibiótico de amplio espectro es preferible a uno de espectro más dirigido: cuanto más amplio el espectro, más daño colateral a la flora normal protectora, y mayor riesgo de infecciones oportunistas secundarias.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 8.'
}

});
