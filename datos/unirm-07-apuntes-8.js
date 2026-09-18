/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 8)
   Termina de cubrir BIOQUIMICA I por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'aminoacidos-peptidos': {
  tema:'Aminoácidos y péptidos',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:6,
  idea:'Las veinte piezas de Lego con las que se construye cada proteína del cuerpo comparten un mismo armazón químico, y lo único que las distingue entre sí —una sola pieza variable, la cadena lateral— es justo lo que le da a cada proteína su forma y su función.',
  claves:['aminoácido','esencial','punto isoeléctrico','enlace peptídico'],
  sigue:'estructura-funcion-proteinas',
  secciones:[
    {
      t:'Un armazón común, una parte variable',
      p:[
        'Los 20 *aminoácidos* que forman las proteínas del cuerpo comparten la misma estructura básica: un carbono central unido a un grupo amino, un grupo carboxilo, un hidrógeno, y una cadena lateral (el grupo "R") que es lo único que cambia de un aminoácido a otro. Esa cadena lateral puede ser pequeña o grande, con carga positiva, negativa, o sin carga, hidrofóbica o hidrofílica —y es precisamente esa variabilidad la que, cuando muchos aminoácidos distintos se combinan en una cadena, termina dándole a cada proteína su forma tridimensional única y, con ella, su función específica.',
        'De esos 20 aminoácidos, algunos son *esenciales*: el cuerpo no puede sintetizarlos y deben obtenerse obligatoriamente de la dieta. Los no esenciales, el cuerpo puede fabricarlos a partir de otras moléculas si hace falta.'
      ]
    },
    {
      t:'Cómo se unen: el enlace peptídico',
      p:[
        'Los aminoácidos se unen entre sí mediante un *enlace peptídico*, un enlace covalente entre el grupo carboxilo de un aminoácido y el grupo amino del siguiente, liberando una molécula de agua en el proceso. Una cadena corta de aminoácidos unidos así se llama péptido; una cadena larga se llama proteína (el límite entre ambos es más una convención práctica que una regla estricta).',
        'El *punto isoeléctrico* de un aminoácido (o de una proteína) es el pH específico en el que su carga eléctrica neta es cero: por debajo de ese pH, la molécula tiende a tener carga positiva; por encima, negativa. Esta propiedad es la base de varias técnicas de laboratorio que separan proteínas según su carga a un pH determinado, como la electroforesis, ya mencionada en el tema de técnicas bioquímicas.'
      ],
      foco:[
        'Consideración clínica: algunas enfermedades genéticas alteran un solo aminoácido de una proteína, cambiando drásticamente su función; el ejemplo más citado es la anemia falciforme, donde un único aminoácido cambiado en la hemoglobina altera su forma y su comportamiento bajo baja concentración de oxígeno.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 3.'
},

'estructura-funcion-proteinas': {
  tema:'Estructura y función de las proteínas',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:7,
  idea:'La forma tridimensional de una proteína no es un detalle estético: ES su función. Una proteína perfectamente compuesta de los aminoácidos correctos, pero plegada mal, simplemente no funciona, aunque su composición química sea idéntica a la normal.',
  claves:['estructura primaria','secundaria','terciaria','desnaturalización','hemoglobina','alfa hélice'],
  sigue:'carbohidratos-estructura',
  secciones:[
    {
      t:'Cuatro niveles de organización',
      p:[
        'La *estructura primaria* es simplemente la secuencia lineal de aminoácidos, uno detrás de otro, como las letras de una palabra. La *estructura secundaria* es el plegamiento local, repetitivo, que forma ciertos segmentos de esa cadena, sostenido por puentes de hidrógeno: los dos patrones más comunes son la *alfa hélice* (la cadena se enrolla como un resorte) y la lámina beta plegada (segmentos de la cadena se alinean uno junto a otro, como un acordeón).',
        'La *estructura terciaria* es el plegamiento tridimensional COMPLETO de toda la cadena, la forma final de una proteína formada por una sola cadena, estabilizada por interacciones entre las cadenas laterales de aminoácidos que pueden estar muy lejos entre sí en la secuencia primaria pero terminan quedando cerca en el espacio. La estructura cuaternaria, cuando existe, es la unión de varias cadenas (subunidades) independientes para formar una proteína funcional completa.'
      ]
    },
    {
      t:'La hemoglobina como ejemplo de los cuatro niveles a la vez',
      p:[
        'La *hemoglobina* ilustra bien los cuatro niveles: su estructura primaria es la secuencia de aminoácidos de cada una de sus cadenas (tiene dos cadenas alfa y dos cadenas beta, distintas entre sí); cada cadena tiene regiones de estructura secundaria en alfa hélice; cada cadena se pliega en su propia estructura terciaria; y las cuatro cadenas juntas forman la estructura cuaternaria, la molécula de hemoglobina funcional, capaz de transportar oxígeno.',
        'Cuando una proteína pierde su estructura tridimensional normal —por calor extremo, por un pH muy alejado de lo normal, por ciertos químicos— sin romper los enlaces que unen los aminoácidos entre sí (el enlace peptídico se mantiene intacto), se dice que sufre *desnaturalización*: pierde su forma, y con ella, casi siempre, su función. Ejemplo cotidiano: cocinar un huevo desnaturaliza sus proteínas (por el calor) de forma irreversible, cambiando su textura de líquida a sólida, sin cambiar su composición química básica.'
      ],
      foco:[
        'Consideración clínica: la fiebre alta sostenida puede, en teoría, desestabilizar algunas proteínas del cuerpo; es una de las razones (aunque no la única) por las que temperaturas corporales extremas son peligrosas para el funcionamiento celular normal.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 4.'
},

'carbohidratos-estructura': {
  tema:'Carbohidratos: estructura',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:6,
  idea:'La glucosa es una sola molécula, pero según cómo se una a otras glucosas puede convertirse en almidón (la reserva energética de las plantas), en glucógeno (la reserva del cuerpo humano) o en celulosa (que ni siquiera podemos digerir): el tipo de enlace, no la molécula en sí, decide el destino.',
  claves:['monosacárido','glucosa','glucógeno','enlace glucosídico','almidón'],
  sigue:'glucolisis-gluconeogenesis',
  secciones:[
    {
      t:'De monosacárido a polisacárido',
      p:[
        'Un *monosacárido* es la unidad más simple de carbohidrato, un solo azúcar que no se puede descomponer en azúcares más pequeños: la *glucosa* es el más importante desde el punto de vista energético, el combustible preferido de la mayoría de las células del cuerpo (y el único que el cerebro puede usar de forma eficiente en condiciones normales). Otros monosacáridos comunes son la fructosa y la galactosa.',
        'Cuando muchos monosacáridos se unen entre sí mediante *enlaces glucosídicos*, forman un polisacárido. El *glucógeno* es el polisacárido de reserva del ser humano y otros animales, formado por miles de unidades de glucosa muy ramificadas (esa ramificación permite liberar glucosa rápido desde múltiples puntos a la vez, algo importante en una emergencia energética, como ya se vio en el tema de metabolismo del glucógeno). El *almidón* es el equivalente en las plantas —la forma en que ellas almacenan glucosa—, y es la principal fuente de carbohidratos complejos en la dieta humana.'
      ]
    },
    {
      t:'Por qué el tipo de enlace importa tanto',
      p:[
        'La celulosa, como el almidón y el glucógeno, también está formada por unidades de glucosa repetidas —pero unidas por un tipo distinto de enlace glucosídico. Ese solo cambio en el TIPO de enlace hace que las enzimas digestivas humanas (que sí pueden romper el enlace del almidón) sean incapaces de romper el enlace de la celulosa. Por eso comemos y digerimos el almidón de la papa, pero no podemos digerir la fibra vegetal (celulosa) que comemos junto con ella; esa fibra pasa intacta por el tracto digestivo humano, lo cual —lejos de ser inútil— cumple funciones importantes en el tránsito intestinal.'
      ],
      foco:[
        'La lactosa (el azúcar de la leche) es un disacárido (dos monosacáridos unidos: glucosa y galactosa) que necesita una enzima específica, la lactasa, para separarse y absorberse; su deficiencia es la causa de la intolerancia a la lactosa.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 7.'
},

'glucolisis-gluconeogenesis': {
  tema:'Glucólisis y gluconeogénesis',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:8,
  idea:'La glucólisis es la vía más antigua, evolutivamente hablando, para obtener energía de la glucosa: funciona con o sin oxígeno, es rápida, y es literalmente el primer paso obligatorio antes de que cualquier otra vía metabólica de la glucosa pueda continuar.',
  claves:['glucólisis','hexoquinasa','fosfofructoquinasa','piruvato','gluconeogénesis','lactato'],
  sigue:'ciclo-krebs',
  secciones:[
    {
      t:'Glucólisis: diez pasos, una ganancia neta pequeña pero rápida',
      p:[
        'La *glucólisis* es la secuencia de diez reacciones enzimáticas que convierte una molécula de glucosa (6 carbonos) en dos moléculas de piruvato (3 carbonos cada una), generando una ganancia neta de 2 ATP y 2 NADH por cada glucosa procesada. Ocurre en el citosol de la célula, sin necesitar oxígeno para funcionar (aunque el destino final del piruvato sí depende de si hay oxígeno disponible, como se vio en el caso práctico de la glucólisis anaeróbica en el músculo).',
        'Tres enzimas de esta vía son reguladoras clave, controlando la velocidad de toda la vía: la *hexoquinasa* (o glucoquinasa en el hígado), que atrapa la glucosa dentro de la célula fosforilándola nada más entrar; y sobre todo la *fosfofructoquinasa-1*, considerada el paso limitante y más regulado de toda la glucólisis, inhibida cuando la célula ya tiene suficiente energía (ATP alto) y activada cuando la necesita.'
      ]
    },
    {
      t:'Gluconeogénesis: el camino inverso, pero no idéntico',
      p:[
        'La *gluconeogénesis* es la vía que fabrica glucosa NUEVA a partir de precursores no glucídicos: lactato, aminoácidos (sobre todo alanina) y glicerol. Ocurre principalmente en el hígado, y es fundamental durante el ayuno prolongado (cuando ya se agotó el glucógeno hepático, como se vio en el tema de metabolismo del glucógeno) para mantener la glucosa sanguínea disponible, sobre todo para el cerebro.',
        'La gluconeogénesis NO es simplemente la glucólisis "al revés": comparte varios pasos con la glucólisis, pero rodea (con enzimas distintas) los tres pasos que la glucólisis hace prácticamente irreversibles, incluido el paso de la fosfofructoquinasa. Esto tiene una lógica regulatoria importante: si ambas vías usaran exactamente las mismas enzimas en ambas direcciones, la célula gastaría energía corriendo las dos vías a la vez sin lograr nada neto (lo que se llama un ciclo fútil); al usar enzimas distintas en los pasos clave, el cuerpo puede activar una vía e inhibir la otra según lo que necesite en cada momento.'
      ],
      foco:[
        'El lactato producido en el músculo durante el ejercicio intenso viaja al hígado y sirve como uno de los precursores principales de la gluconeogénesis: es el mismo ciclo de Cori ya mencionado en el caso trabajado de la glucólisis anaeróbica.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 14 y 15.'
},

'ciclo-krebs': {
  tema:'Ciclo de Krebs',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:7,
  idea:'El ciclo de Krebs no es solo "la vía que sigue después de la glucólisis": es el cruce central de casi todo el metabolismo energético del cuerpo, donde confluyen los productos de degradar carbohidratos, grasas y proteínas por igual.',
  claves:['ciclo de Krebs','acetil-CoA','citrato','NADH','ácido cítrico'],
  sigue:'cadena-respiratoria-fosforilacion',
  secciones:[
    {
      t:'Dónde ocurre y cómo entra el combustible',
      p:[
        'El *ciclo de Krebs* (también llamado ciclo del ácido cítrico o ciclo de los ácidos tricarboxílicos) ocurre dentro de la mitocondria, a diferencia de la glucólisis, que ocurre en el citosol. Su combustible de entrada es el *acetil-CoA*, una molécula de 2 carbonos unida a la coenzima A, que puede provenir de la degradación de carbohidratos (vía el piruvato, después de la glucólisis), de grasas (vía la beta-oxidación de ácidos grasos) o de ciertos aminoácidos. Esa convergencia es lo que hace del ciclo de Krebs el punto de encuentro metabólico de las tres grandes fuentes de energía del cuerpo.',
        'El acetil-CoA se une a una molécula de 4 carbonos (oxaloacetato) para formar *citrato* (de 6 carbonos), y a partir de ahí una serie de ocho reacciones va liberando ese carbono de a poco (en forma de CO2) y regenerando, al final del ciclo, la misma molécula de oxaloacetato con la que empezó, lista para recibir otra molécula de acetil-CoA y comenzar de nuevo.'
      ]
    },
    {
      t:'Lo que realmente produce el ciclo',
      p:[
        'Por cada vuelta del ciclo (por cada acetil-CoA que entra), se producen 2 moléculas de CO2 (que se exhalan por los pulmones: el CO2 que expiramos viene, en gran parte, precisamente de aquí), 3 NADH, 1 FADH2, y 1 GTP (equivalente a ATP). El ciclo de Krebs, por sí solo, produce relativamente poco ATP directo; su verdadero valor está en generar NADH y FADH2, los transportadores de electrones que alimentan a la cadena respiratoria, donde se produce la gran mayoría del ATP celular.'
      ],
      foco:[
        'El ciclo de Krebs es literalmente un CICLO (no una vía lineal con principio y fin): la molécula con la que termina cada vuelta es la misma con la que empieza la siguiente, lo que permite que funcione de forma continua mientras haya suministro de acetil-CoA.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 16.'
},

'cadena-respiratoria-fosforilacion': {
  tema:'Cadena respiratoria y fosforilación oxidativa',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:8,
  idea:'Aquí es, literalmente, donde se produce la mayor parte del ATP del cuerpo, y el mecanismo es casi una obra de ingeniería: la célula usa el flujo de electrones para bombear protones y crear una diferencia de carga que después aprovecha, como una represa hidroeléctrica en miniatura dentro de cada mitocondria.',
  claves:['cadena respiratoria','ATP sintasa','citocromo','gradiente de protones','quimiosmótica'],
  sigue:'lipidos-estructura-membranas',
  secciones:[
    {
      t:'De electrones a un gradiente de protones',
      p:[
        'La *cadena respiratoria* es una serie de complejos proteicos (que incluyen *citocromos*, proteínas con un grupo hemo capaz de transferir electrones) ubicados en la membrana mitocondrial interna. Recibe los electrones de alta energía que trae el NADH y el FADH2 (producidos en la glucólisis, en la beta-oxidación y, sobre todo, en el ciclo de Krebs) y los va pasando de complejo en complejo, en una secuencia de reacciones de oxidación-reducción, hasta que finalmente esos electrones se combinan con oxígeno molecular para formar agua —es la razón última por la que el cuerpo necesita respirar oxígeno: sin un aceptor final de electrones, toda la cadena se detendría.',
        'Al pasar los electrones de un complejo a otro, se libera energía, y varios de esos complejos usan esa energía para bombear activamente protones (H+) desde la matriz mitocondrial hacia el espacio entre las dos membranas de la mitocondria, creando ahí una concentración de protones mucho mayor que dentro de la matriz: un *gradiente de protones*.'
      ]
    },
    {
      t:'La ATP sintasa: aprovechar el gradiente para hacer ATP',
      p:[
        'Ese gradiente de protones representa energía potencial acumulada, como el agua detenida detrás de una represa. La *ATP sintasa*, otra proteína de la membrana mitocondrial interna, funciona como una turbina: deja pasar a los protones de vuelta hacia la matriz (a favor de su gradiente, liberando esa energía almacenada) y usa esa energía para unir ADP con fosfato y formar ATP. Este mecanismo completo —usar un gradiente de protones, generado por el transporte de electrones, para producir ATP— se llama teoría *quimiosmótica*, y es el mecanismo central de la *fosforilación oxidativa*, responsable de la gran mayoría del ATP que produce una célula.'
      ],
      foco:[
        'Consideración clínica: algunos venenos (como el cianuro) matan precisamente bloqueando el último complejo de la cadena respiratoria, impidiendo que los electrones lleguen al oxígeno; sin ese aceptor final funcionando, toda la cadena se detiene, el gradiente de protones colapsa, deja de producirse ATP, y la célula muere por falta de energía en minutos, aun con oxígeno circulando normalmente en la sangre.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 19.'
},

'lipidos-estructura-membranas': {
  tema:'Lípidos: estructura y membranas',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:6,
  idea:'Que la membrana celular sea "fluida y selectiva" al mismo tiempo no es una contradicción: es el resultado directo de estar hecha de moléculas que odian el agua por un lado y la aman por el otro, organizadas de la única forma que resuelve ese conflicto.',
  claves:['ácido graso','triglicérido','fosfolípido','colesterol','saturado'],
  sigue:'acidos-nucleicos-estructura',
  secciones:[
    {
      t:'Ácidos grasos: saturados e insaturados',
      p:[
        'Un *ácido graso* es una cadena larga de carbonos con un grupo carboxilo en un extremo. Se llama *saturado* cuando todos sus enlaces entre carbonos son simples (sin dobles enlaces), lo que le permite empaquetarse de forma muy ordenada y compacta —por eso las grasas saturadas suelen ser sólidas a temperatura ambiente. Se llama insaturado cuando tiene uno o más dobles enlaces, que introducen un "doblez" en la cadena y le impiden empaquetarse tan ordenadamente —por eso las grasas insaturadas suelen ser líquidas (aceites) a temperatura ambiente.',
        'Tres moléculas de ácido graso unidas a una molécula de glicerol forman un *triglicérido*, la forma principal en que el cuerpo almacena energía a largo plazo (en el tejido adiposo, ya visto en Histología), porque empaqueta mucha más energía por gramo que el glucógeno.'
      ]
    },
    {
      t:'Fosfolípidos: la molécula que hace posible la membrana celular',
      p:[
        'Un *fosfolípido* tiene una estructura distinta y clave: una "cabeza" que contiene fosfato (hidrofílica, que "ama" el agua) y dos "colas" de ácido graso (hidrofóbicas, que "odian" el agua). Esta doble naturaleza (anfipática) hace que, en un ambiente acuoso como el del cuerpo, los fosfolípidos se organicen espontáneamente en una bicapa: dos capas de fosfolípidos con las colas hidrofóbicas mirándose entre sí (escondidas del agua) y las cabezas hidrofílicas mirando hacia afuera, en contacto con el medio acuoso a ambos lados. Esa bicapa es, exactamente, la estructura básica de toda membrana celular.',
        'El *colesterol*, intercalado entre los fosfolípidos de la membrana, modula su fluidez: a temperatura corporal normal, tiende a hacer la membrana un poco más rígida y menos permeable de lo que sería sin él, un efecto que ayuda a estabilizar la membrana frente a cambios de temperatura.'
      ],
      foco:[
        'La naturaleza anfipática del fosfolípido —parte que ama el agua, parte que la odia— es la única razón física por la que una membrana celular se forma sola, sin necesitar ninguna maquinaria activa: es la disposición más estable termodinámicamente en un ambiente acuoso.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 10 y 11.'
},

'acidos-nucleicos-estructura': {
  tema:'Ácidos nucleicos: estructura del ADN y ARN',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:6,
  idea:'Toda la información genética del cuerpo se guarda con solo cuatro "letras" químicas distintas, repetidas en un orden específico a lo largo de millones de posiciones. Este tema es la base química de todo lo que viene después en Genética Médica.',
  claves:['doble hélice','base nitrogenada','nucleótido','enlace fosfodiéster','ARN mensajero'],
  sigue:'termodinamica-bioquimica',
  secciones:[
    {
      t:'El nucleótido: la unidad básica',
      p:[
        'Un *nucleótido* tiene tres partes: un azúcar de 5 carbonos (desoxirribosa en el ADN, ribosa en el ARN), un grupo fosfato, y una *base nitrogenada*. En el ADN hay cuatro bases: adenina, timina, citosina y guanina; en el ARN, la timina se sustituye por el uracilo. Los nucleótidos se unen entre sí mediante *enlaces fosfodiéster*, formando una larga cadena donde el fosfato de un nucleótido se une al azúcar del siguiente.'
      ]
    },
    {
      t:'La doble hélice y el apareamiento de bases',
      p:[
        'El ADN forma una *doble hélice*: dos cadenas de nucleótidos enrolladas entre sí, unidas por puentes de hidrógeno entre bases complementarias de cadenas opuestas —siempre adenina con timina, y siempre citosina con guanina—, nunca de otra forma. Esa complementariedad estricta es lo que permite que, cuando la célula necesita duplicar su ADN (como se vio en el ciclo celular), cada cadena sirva de molde exacto para reconstruir su pareja, garantizando que la copia sea fiel al original.',
        'El ARN, a diferencia del ADN, es generalmente de una sola cadena, y cumple funciones más variadas y transitorias: el *ARN mensajero* lleva la información genética copiada del ADN hacia el lugar donde se fabrican las proteínas, un paso que se estudiará con más detalle en Genética Médica al hablar de transcripción y traducción.'
      ],
      foco:[
        'Consideración clínica: el hecho de que el ADN sea de doble cadena, con una cadena que "respalda" a la otra, es parte de por qué es una molécula relativamente estable y reparable: si una cadena se daña, la célula puede usar la otra cadena intacta como referencia para corregir el error.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 8.'
},

'termodinamica-bioquimica': {
  tema:'Termodinámica bioquímica y energía libre',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:6,
  idea:'El ATP no es "energía pura": es una molécula concreta cuya hidrólisis libera energía de forma predecible y utilizable, y el cuerpo la usa como una especie de moneda energética común para pagar reacciones que, por sí solas, no ocurrirían.',
  claves:['energía libre de Gibbs','reacción exergónica','reacción endergónica','ATP como moneda energética'],
  sigue:'regulacion-enzimatica-alosterica',
  secciones:[
    {
      t:'Reacciones que liberan energía y reacciones que la requieren',
      p:[
        'La *energía libre de Gibbs* (ΔG) de una reacción indica si esa reacción puede ocurrir espontáneamente o no. Una *reacción exergónica* tiene un ΔG negativo: libera energía y ocurre espontáneamente (aunque a veces necesite un empujón inicial, como una enzima que baje la barrera de activación). Una *reacción endergónica* tiene un ΔG positivo: requiere un aporte de energía externo para ocurrir, no sucede por sí sola.',
        'Muchas reacciones necesarias para la vida (construir una proteína, transportar una sustancia en contra de su gradiente, contraer un músculo) son endergónicas por sí mismas. La célula las hace posibles "acoplándolas" a una reacción muy exergónica: la hidrólisis del ATP.'
      ]
    },
    {
      t:'El ATP como moneda energética común',
      p:[
        'La hidrólisis del ATP (romper el enlace entre su segundo y tercer fosfato, liberando ADP y fosfato inorgánico) es muy exergónica: libera una cantidad de energía considerable y predecible. La célula acopla esa reacción exergónica a reacciones endergónicas que necesita realizar, de modo que la energía liberada por un proceso "paga" el costo energético del otro, y el resultado neto de ambas reacciones juntas termina siendo favorable.',
        'Ejemplo trabajado, ya visto en otros temas sin llamarlo por su nombre: la bomba sodio-potasio mueve sodio y potasio en contra de sus gradientes (endergónico) acoplando ese movimiento a la hidrólisis de ATP (exergónico); los puentes cruzados de miosina se despegan de la actina gastando ATP; la síntesis de una proteína a partir de aminoácidos sueltos requiere ATP para formar cada enlace peptídico. En los tres casos, sin ATP disponible, el proceso simplemente no ocurre, sin importar qué tan "necesario" sea para la célula.'
      ],
      foco:[
        'El ATP se regenera constantemente (la célula no tiene una reserva grande): se produce sobre todo en la cadena respiratoria y se consume casi tan rápido como se produce, en un ciclo continuo de producción y gasto.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 13.'
},

'regulacion-enzimatica-alosterica': {
  tema:'Regulación alostérica y covalente de enzimas',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:6,
  idea:'Una célula no puede darse el lujo de tener todas sus enzimas trabajando al máximo todo el tiempo: eso sería un caos metabólico. Necesita formas rápidas de acelerar o frenar una enzima específica según lo que la célula necesite en ese momento exacto.',
  claves:['regulación alostérica','fosforilación de enzimas','isoenzima','retroalimentación negativa enzimática'],
  sigue:'tecnicas-bioquimicas-basicas',
  secciones:[
    {
      t:'Regulación alostérica: una señal cambia la forma de la enzima',
      p:[
        'Una enzima *alostérica* tiene, además del sitio activo (donde ocurre la reacción), otro sitio distinto donde se puede unir una molécula reguladora. Cuando esa molécula se une, cambia ligeramente la forma tridimensional de toda la enzima, lo que puede aumentar (activador alostérico) o disminuir (inhibidor alostérico) su actividad en el sitio activo, sin que la molécula reguladora participe directamente en la reacción química.',
        'Un patrón regulatorio muy frecuente en el metabolismo es la *retroalimentación negativa enzimática*: el producto FINAL de una vía metabólica larga actúa como inhibidor alostérico de una enzima temprana en esa misma vía. Así, cuando ya hay suficiente producto final acumulado, la propia vía se frena a sí misma automáticamente, sin necesitar una señal externa —es exactamente la misma lógica de retroalimentación negativa vista en Fisiología I, aplicada ahora a nivel de una sola vía bioquímica.'
      ]
    },
    {
      t:'Regulación covalente: modificar químicamente la enzima',
      p:[
        'Otra forma de regular una enzima es modificarla químicamente de forma reversible, siendo la *fosforilación* (agregar un grupo fosfato, típicamente en respuesta a una señal hormonal) la más común: según la enzima, la fosforilación puede activarla o inactivarla, y quitarle ese fosfato (desfosforilación) revierte el efecto. Es un mecanismo de regulación más lento que el alostérico, pero que permite que una hormona (como la insulina o el glucagón) cambie de golpe la actividad de muchas enzimas metabólicas a la vez en todo el cuerpo.',
        'Una *isoenzima* es una versión ligeramente distinta de la misma enzima (catalizan la misma reacción), producida por genes distintos y expresada en tejidos diferentes, a veces con propiedades regulatorias distintas ajustadas a las necesidades de ese tejido en particular.'
      ],
      foco:[
        'Consideración clínica: medir isoenzimas específicas en sangre puede ayudar a saber de qué tejido viene un daño; por ejemplo, distintas isoenzimas de una misma enzima pueden predominar en el corazón, el hígado o el músculo esquelético, y su elevación en sangre orienta hacia cuál de esos tejidos está dañado.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 6.'
},

'tecnicas-bioquimicas-basicas': {
  tema:'Técnicas bioquímicas básicas',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:5,
  idea:'Todo lo que se sabe sobre estructura de proteínas, vías metabólicas y ADN se descubrió con un puñado de técnicas de laboratorio relativamente simples en su principio, y reconocerlas ayuda a entender de dónde sale la evidencia detrás de cada dato bioquímico que se estudia.',
  claves:['espectrofotometría','electroforesis','cromatografía','centrifugación'],
  sigue:'embrio-gametogenesis',
  secciones:[
    {
      t:'Separar mezclas: centrifugación, electroforesis y cromatografía',
      p:[
        'La *centrifugación* separa componentes de una mezcla según su densidad y tamaño, haciéndolos girar a alta velocidad: los componentes más densos se sedimentan hacia el fondo del tubo primero. Es la técnica básica para separar, por ejemplo, las distintas partes de una célula rota (núcleo, mitocondrias, citosol) o los componentes de la sangre (plasma, glóbulos rojos, capa leucocitaria).',
        'La *electroforesis* separa moléculas (proteínas o ácidos nucleicos) según su tamaño y su carga eléctrica, haciéndolas migrar a través de un gel bajo un campo eléctrico: las moléculas más pequeñas migran más rápido y más lejos que las grandes. La *cromatografía* separa componentes de una mezcla según su distinta afinidad por dos fases (una fija y una móvil): algunas sustancias se quedan más "pegadas" a la fase fija y avanzan más lento, otras avanzan casi con la fase móvil.'
      ]
    },
    {
      t:'Medir concentración: la espectrofotometría',
      p:[
        'La *espectrofotometría* mide cuánta luz de una longitud de onda específica absorbe una solución, y esa cantidad de luz absorbida es proporcional a la concentración de la sustancia que se está midiendo. Es, en el fondo, la técnica detrás de gran parte de los análisis de laboratorio clínico habituales: medir la concentración de glucosa, de colesterol, o de casi cualquier sustancia en una muestra de sangre, comparando cuánta luz absorbe la muestra contra estándares de concentración conocida.'
      ],
      foco:[
        'Estas cuatro técnicas no son exclusivas de la bioquímica de laboratorio de investigación: son, en una versión automatizada, la base de la mayoría de los análisis clínicos de rutina que se piden en cualquier consulta médica.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 3.'
}

});
