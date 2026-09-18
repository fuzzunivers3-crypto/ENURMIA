/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 3)
   Termina de cubrir ANATOMIA II por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'corazon-pericardio': {
  tema:'Corazón y pericardio',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:8,
  idea:'El corazón vive dentro de su propia bolsa protectora, con una pequeña cantidad de líquido lubricante entre las dos capas de esa bolsa; cuando ese espacio se llena de más líquido del debido, el corazón queda literalmente comprimido desde afuera.',
  claves:['corazón','pericardio','válvula','aurícula','ventrículo','coronaria'],
  sigue:'pulmones-arbol-bronquial',
  secciones:[
    {
      t:'El pericardio: la bolsa que envuelve al corazón',
      p:[
        'El *pericardio* tiene dos capas: una capa fibrosa externa, resistente, que ancla al corazón dentro del mediastino y limita cuánto puede dilatarse de golpe; y una capa serosa interna, que a su vez tiene dos hojas (una pegada al propio corazón, la visceral, y otra que tapiza por dentro la capa fibrosa, la parietal), con una fina película de líquido entre ambas que permite que el corazón se mueva y lata sin fricción contra las estructuras vecinas —exactamente el mismo principio que la pleura alrededor del pulmón, ya visto.',
        'Cada latido reparte la sangre en un circuito con cuatro cámaras: dos *aurículas* (que reciben sangre) y dos *ventrículos* (que la expulsan). El lado derecho del corazón recibe sangre pobre en oxígeno de todo el cuerpo y la manda a los pulmones; el lado izquierdo recibe sangre ya oxigenada de los pulmones y la manda a todo el cuerpo. Cuatro *válvulas* (dos auriculoventriculares, mitral y tricúspide; y dos semilunares, aórtica y pulmonar) aseguran que la sangre fluya en una sola dirección, sin retroceder.'
      ]
    },
    {
      t:'Las arterias coronarias: el corazón se alimenta a sí mismo',
      p:[
        'El propio músculo cardíaco necesita su propio riego sanguíneo, que recibe de las arterias *coronarias*, las primeras ramas que salen de la aorta, justo después de la válvula aórtica. La coronaria derecha y la coronaria izquierda (que rápidamente se divide en dos ramas principales) se distribuyen por la superficie del corazón e irrigan distintos territorios: el conocimiento de qué arteria irriga qué región es, precisamente, lo que permite predecir qué parte del corazón se afecta según cuál arteria coronaria se obstruye en un infarto.'
      ],
      foco:[
        'Consideración clínica: si el espacio entre las dos hojas del pericardio seroso se llena de líquido en exceso (derrame pericárdico) de forma rápida, la capa fibrosa externa —poco distensible— no permite que el saco se expanda para acomodarlo, y el líquido termina comprimiendo al corazón desde afuera, dificultando su llenado: esto es el taponamiento cardíaco, una urgencia médica real.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 4.'
},

'pulmones-arbol-bronquial': {
  tema:'Pulmones y árbol bronquial',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:6,
  idea:'El árbol bronquial se llama así con razón: desde la tráquea hasta el último bronquiolo, cada división se parece a las ramas de un árbol haciéndose cada vez más finas, y esa arquitectura repetida es lo que multiplica enormemente la superficie disponible para el intercambio de gases.',
  claves:['pulmón','bronquio','lóbulo','segmento broncopulmonar','tráquea'],
  sigue:'grandes-vasos-circulacion',
  secciones:[
    {
      t:'De la tráquea a los bronquios principales',
      p:[
        'La *tráquea* se divide, a la altura aproximada de la cuarta vértebra torácica, en el bronquio principal derecho y el izquierdo, uno para cada pulmón. El bronquio principal derecho es más corto, más ancho y más vertical que el izquierdo (que tiene que desviarse para rodear al corazón, que ocupa más espacio hacia la izquierda del tórax): esa diferencia anatómica explica por qué un cuerpo extraño aspirado tiene más probabilidad de caer en el bronquio derecho que en el izquierdo, simplemente por la trayectoria más directa.'
      ]
    },
    {
      t:'Lóbulos y segmentos: una división organizada, no al azar',
      p:[
        'El pulmón derecho tiene tres *lóbulos* (superior, medio e inferior), separados por cisuras; el pulmón izquierdo tiene solo dos (superior e inferior), porque cede espacio al corazón. Cada lóbulo, a su vez, se divide en *segmentos broncopulmonares*, unidades más pequeñas, cada una con su propio bronquio segmentario y su propio riego arterial independiente, funcionando casi como una unidad quirúrgica y funcional separada dentro del pulmón.',
        'Esta organización en segmentos independientes no es solo anatómica: tiene relevancia clínica directa, porque permite que una enfermedad (una neumonía, por ejemplo) quede limitada a un solo segmento sin comprometer necesariamente al resto del lóbulo o del pulmón, y también permite que un cirujano pueda, en teoría, extirpar un segmento enfermo sin tener que sacrificar todo el lóbulo.'
      ],
      foco:[
        'El árbol bronquial sigue dividiéndose, más allá de los segmentos, en bronquios cada vez más pequeños y finalmente en bronquiolos, que terminan en los alvéolos: el sitio real donde ocurre el intercambio de gases, ya estudiado en Fisiología.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 4.'
},

'grandes-vasos-circulacion': {
  tema:'Grandes vasos y circulación',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:6,
  idea:'Los grandes vasos del tórax son, en esencia, las cuatro o cinco "autopistas principales" por donde circula toda la sangre del cuerpo, y conocer su trayecto explica de inmediato por qué ciertas lesiones torácicas son catastróficas y otras no.',
  claves:['aorta','vena cava','arteria pulmonar','cayado','conducto torácico'],
  sigue:'pared-abdominal-inguinal',
  secciones:[
    {
      t:'La aorta: tres segmentos torácicos',
      p:[
        'La *aorta*, la arteria más grande del cuerpo, sale del ventrículo izquierdo y describe un recorrido característico dentro del tórax: la aorta ascendente (de donde salen las coronarias, como ya se vio), el *cayado* aórtico o arco aórtico (que se curva hacia atrás y hacia la izquierda, y de donde salen las arterias que irrigan la cabeza, el cuello y los miembros superiores), y la aorta torácica descendente (que baja pegada a la columna vertebral, hasta atravesar el diafragma y continuar como aorta abdominal).',
        'La *arteria pulmonar*, a diferencia de casi cualquier otra arteria del cuerpo, lleva sangre POBRE en oxígeno: sale del ventrículo derecho directamente hacia los pulmones, para que se oxigene ahí. Es la excepción que confirma que el nombre "arteria" se define por la dirección del flujo (sale del corazón), no por el contenido de oxígeno —el mismo principio ya visto con los vasos umbilicales en Embriología.'
      ]
    },
    {
      t:'Retorno venoso y drenaje linfático',
      p:[
        'Las dos *venas cavas* devuelven la sangre al corazón: la vena cava superior recoge la sangre de la cabeza, el cuello y los miembros superiores; la vena cava inferior recoge la del resto del cuerpo, por debajo del diafragma. Ambas desembocan en la aurícula derecha.',
        'El *conducto torácico* es el vaso linfático más grande del cuerpo: recoge la linfa de casi todo el cuerpo (excepto el lado superior derecho) y la devuelve a la circulación venosa cerca de la unión de la vena subclavia izquierda con la vena yugular interna izquierda, en la base del cuello. Es el punto final donde todo el sistema linfático, ya visto en el bloque de Anatomía I, finalmente se reincorpora a la sangre.'
      ],
      foco:[
        'Consideración clínica: una lesión que rompa el cayado aórtico o la aorta torácica (típicamente por un traumatismo de alta energía, como un accidente automovilístico con desaceleración brusca) es una de las causas de muerte casi inmediata en trauma torácico, precisamente porque es el vaso que transporta toda la sangre que sale del corazón hacia el cuerpo.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 4.'
},

'esofago-estomago-intestino': {
  tema:'Esófago, estómago e intestino',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:8,
  idea:'El tracto digestivo es, en esencia, un tubo continuo de la boca al ano, pero cada segmento tiene un nombre, una forma y una posición distinta, adaptada exactamente a la función que le toca cumplir en la digestión.',
  claves:['esófago','estómago','duodeno','yeyuno','íleon','colon','mesenterio'],
  sigue:'higado-via-biliar-pancreas-bazo',
  secciones:[
    {
      t:'Del esófago al estómago',
      p:[
        'El *esófago* es un tubo muscular que conecta la faringe con el estómago, atravesando el tórax (por el mediastino posterior, como se vio en el tema del mediastino) y cruzando el diafragma a través del hiato esofágico antes de llegar al abdomen. El *estómago* recibe el alimento, lo mezcla con jugo gástrico y lo convierte en una mezcla semilíquida (quimo); tiene varias regiones (cardias, fondo, cuerpo, antro, píloro) y una curvatura mayor y una menor, que sirven de referencia anatómica en estudios de imagen y en cirugía.'
      ]
    },
    {
      t:'El intestino delgado: tres segmentos con roles distintos',
      p:[
        'El intestino delgado tiene tres partes. El *duodeno*, la primera y más corta, recibe la bilis y el jugo pancreático a través de conductos que desembocan directamente en su pared (como se verá en el siguiente tema), y es donde ocurre buena parte de la digestión química. El *yeyuno* y el *íleon* forman el resto del intestino delgado, suspendidos dentro de la cavidad abdominal por el *mesenterio* (un pliegue de peritoneo que los ancla a la pared posterior del abdomen y que, dentro de sí, lleva los vasos sanguíneos, linfáticos y nervios que los irrigan e inervan), y son el sitio principal de absorción de nutrientes.',
        'El intestino grueso (*colon*), que sigue al intestino delgado, tiene una disposición característica en forma de marco alrededor de la cavidad abdominal (ascendente, transverso, descendente, sigmoide), reflejando directamente la rotación intestinal que ya se estudió en Embriología: la posición final de cada segmento del colon es, literalmente, el resultado de esa rotación de 270 grados que ocurrió durante el desarrollo fetal.'
      ],
      foco:[
        'El yeyuno y el íleon no tienen un límite anatómico nítido entre sí (no hay una válvula ni un cambio brusco): se distinguen más bien por un cambio gradual de características (el yeyuno tiene una pared algo más gruesa y vascularizada que el íleon), y en la práctica clínica se habla de "intestino delgado proximal" y "distal" con esa misma idea en mente.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 2.'
},

'higado-via-biliar-pancreas-bazo': {
  tema:'Hígado, vía biliar, páncreas y bazo',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:8,
  idea:'Estos cuatro órganos comparten vecindad en el abdomen superior, y tres de ellos —hígado, vía biliar y páncreas— están además conectados funcionalmente por un mismo punto de encuentro: el lugar exacto donde la bilis y el jugo pancreático se vierten juntos hacia el duodeno.',
  claves:['hígado','vesícula biliar','colédoco','páncreas','bazo','triángulo de Calot'],
  sigue:'retroperitoneo-rinon-suprarrenal',
  secciones:[
    {
      t:'El hígado y su sistema de drenaje biliar',
      p:[
        'El *hígado* es el órgano visceral más grande del cuerpo, ubicado en el cuadrante superior derecho del abdomen, protegido en gran parte por las últimas costillas. Produce bilis de forma continua, que se almacena y concentra en la *vesícula biliar* entre comidas, y se libera hacia el duodeno cuando llega alimento graso, a través de un sistema de conductos: el conducto cístico (de la vesícula) se une al conducto hepático común (del hígado) para formar el *colédoco*, que desemboca finalmente en el duodeno.',
        'El *triángulo de Calot* es un espacio anatómico pequeño pero clínicamente muy relevante, delimitado por el conducto cístico, el conducto hepático común y el borde inferior del hígado: dentro de ese triángulo se encuentra típicamente la arteria cística, y su correcta identificación es uno de los pasos más importantes (y más delicados) durante la extirpación quirúrgica de la vesícula biliar, precisamente para no lesionar por error otras estructuras cercanas.'
      ]
    },
    {
      t:'Páncreas y bazo: vecinos, funciones distintas',
      p:[
        'El *páncreas*, ya mencionado en Histología por su doble función exocrina y endocrina, se ubica de forma retroperitoneal (por detrás del peritoneo, a diferencia del estómago y del intestino delgado, que son intraperitoneales), detrás del estómago, y su conducto principal se une al colédoco cerca de su entrada al duodeno —por eso una obstrucción cerca de ese punto de unión (por un cálculo biliar, por ejemplo) puede afectar tanto el drenaje de bilis como el de jugo pancreático a la vez.',
        'El *bazo*, ya estudiado en Inmunología por su función inmunitaria (filtrar la sangre y responder a bacterias encapsuladas), se ubica en el cuadrante superior izquierdo, protegido parcialmente por las costillas inferiores, y es un órgano muy vascularizado y frágil: un traumatismo abdominal contuso (como el de un accidente de tránsito) puede romperlo con relativa facilidad, causando una hemorragia interna significativa.'
      ],
      foco:[
        'Consideración clínica: la ictericia (coloración amarillenta de piel y mucosas por acumulación de bilirrubina) puede tener un origen "obstructivo" cuando algo bloquea el flujo normal de bilis por este sistema de conductos —por ejemplo, un cálculo alojado en el colédoco—, distinto de una ictericia por sobreproducción de bilirrubina (como en una hemólisis exagerada) o por falla del propio hígado para procesarla.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 2.'
},

'retroperitoneo-rinon-suprarrenal': {
  tema:'Retroperitoneo: riñón y suprarrenal',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:6,
  idea:'Los riñones no flotan dentro de la cavidad abdominal como el estómago o el intestino: están fijados por detrás del peritoneo, contra la pared posterior del abdomen, una posición protegida que también explica por qué el dolor de origen renal se siente típicamente en la espalda, no en el frente.',
  claves:['riñón','uréter','suprarrenal','retroperitoneo','pelvis renal'],
  sigue:'pelvis-perine',
  secciones:[
    {
      t:'Una posición protegida, por detrás del peritoneo',
      p:[
        'Los *riñones* son órganos *retroperitoneales*: se ubican por detrás del peritoneo, pegados a la pared posterior del abdomen, aproximadamente a la altura de las últimas vértebras torácicas y las primeras lumbares (el riñón derecho suele estar ligeramente más bajo que el izquierdo, porque el hígado, justo encima de él, le quita espacio). Esta posición retroperitoneal los protege parcialmente de traumatismos anteriores directos, aunque no de golpes en la espalda o el flanco.',
        'Dentro del riñón, la orina formada se recoge en la *pelvis renal*, una estructura en forma de embudo que la canaliza hacia el *uréter*, un conducto muscular largo que transporta la orina, mediante contracciones peristálticas activas (no solo por gravedad), desde cada riñón hasta la vejiga.'
      ]
    },
    {
      t:'La glándula suprarrenal: un vecino con función completamente distinta',
      p:[
        'Sobre el polo superior de cada riñón se asienta la glándula *suprarrenal*, también retroperitoneal, pero con una función completamente distinta al riñón que tiene debajo: no filtra sangre ni produce orina, sino que produce hormonas —la médula suprarrenal (que, como se vio en Fisiología I, es esencialmente una neurona simpática modificada) produce adrenalina; la corteza suprarrenal produce cortisol, aldosterona y hormonas sexuales en menor cantidad. Su cercanía anatómica al riñón es una simple vecindad de posición, no una relación funcional directa.'
      ],
      foco:[
        'Consideración clínica: el dolor de un cálculo renal (litiasis) que se mueve desde la pelvis renal hacia la vejiga a través del uréter, es un dolor típicamente muy intenso, de tipo cólico, que se irradia desde el flanco hacia la ingle, siguiendo aproximadamente el propio trayecto anatómico del uréter.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 2.'
},

'pelvis-perine': {
  tema:'Pelvis y periné',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:7,
  idea:'La pelvis ósea forma un contenedor firme para las vísceras pélvicas, y el suelo pélvico —un conjunto de músculos, no de hueso— es lo único que impide que esas vísceras caigan literalmente hacia afuera por efecto de la gravedad y de la presión abdominal.',
  claves:['pelvis','periné','vejiga','recto','útero','próstata','suelo pélvico'],
  sigue:'cabeza-cuello-triangulos-glandulas',
  secciones:[
    {
      t:'Las vísceras contenidas dentro de la pelvis ósea',
      p:[
        'Dentro de la cavidad *pelvis* se alojan, de adelante hacia atrás: la *vejiga* urinaria; en la mujer, el útero y la vagina entre la vejiga y el recto; en el hombre, la *próstata* justo debajo de la vejiga, rodeando la primera porción de la uretra; y, en ambos sexos, el *recto*, la porción final del tubo digestivo, justo por delante del sacro y el cóccix.'
      ]
    },
    {
      t:'El suelo pélvico: la base muscular que sostiene todo eso',
      p:[
        'El *suelo pélvico* (o periné, en su definición más amplia) es un conjunto de músculos (entre ellos, de forma destacada, el músculo elevador del ano) que forman una especie de hamaca en la base de la pelvis, sosteniendo el peso de las vísceras pélvicas contra la fuerza de gravedad y contra los aumentos de presión abdominal (al toser, al levantar peso, durante el parto). Está atravesado por tres estructuras que necesitan pasar hacia el exterior: la uretra, el recto (y el ano), y en la mujer, la vagina.',
        'Ejemplo trabajado, consideración clínica: el suelo pélvico puede debilitarse —con la edad, tras partos vaginales múltiples, o por aumentos crónicos de presión abdominal— y perder su capacidad de sostén, lo que puede resultar en un prolapso de órganos pélvicos (el útero, la vejiga o el recto descienden más de lo normal, incluso protruyendo hacia afuera en casos severos) o en incontinencia urinaria de esfuerzo, cuando la presión abdominal (al toser o reír) supera la capacidad del suelo pélvico debilitado para mantener cerrada la salida de la vejiga.'
      ],
      foco:[
        'El término "periné" se usa en dos sentidos: en sentido amplio, como sinónimo de todo el suelo pélvico; en sentido más estrecho y quirúrgico, como la región superficial entre el ano y los genitales externos, la que se lesiona (o se corta deliberadamente, en una episiotomía) durante el parto vaginal.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 3.'
},

'cabeza-cuello-triangulos-glandulas': {
  tema:'Cabeza y cuello: triángulos y glándulas',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:7,
  idea:'El cuello es una zona anatómicamente muy comprimida: en un espacio relativamente pequeño pasan la vía aérea, la vía digestiva, los grandes vasos que van al cerebro y varias glándulas importantes, todo empaquetado y organizado por regiones bien definidas.',
  claves:['triángulo cervical','tiroides','parótida','carótida','yugular'],
  sigue:'pares-craneales',
  secciones:[
    {
      t:'Los triángulos del cuello: un mapa para organizar el espacio',
      p:[
        'El músculo esternocleidomastoideo divide a cada lado del cuello en dos grandes *triángulos cervicales*: el triángulo anterior (hacia la línea media) y el triángulo posterior (hacia atrás). Esta división no es solo descriptiva: cada triángulo, y sus subdivisiones más pequeñas, contiene estructuras características y predecibles, lo que hace que ubicar una masa o una estructura "en el triángulo tal" ya oriente bastante sobre qué podría ser, antes de cualquier estudio de imagen.',
        'Dentro del cuello corren, entre otras estructuras, la arteria *carótida* (que lleva sangre hacia la cabeza, y cuyo pulso se palpa fácilmente a un lado de la tráquea) y la vena *yugular* (que devuelve la sangre de la cabeza hacia el corazón, y cuya distensión visible en el cuello es un signo clínico usado para estimar indirectamente la presión venosa central).'
      ]
    },
    {
      t:'Dos glándulas importantes: tiroides y parótida',
      p:[
        'La glándula *tiroides*, ya conocida por su función hormonal, se ubica en la línea media-anterior del cuello, justo debajo del cartílago tiroides (la "manzana de Adán"), y su crecimiento anormal (bocio) es visible y palpable precisamente por esa posición superficial. La glándula *parótida*, la mayor de las glándulas salivales, se ubica por delante y debajo de la oreja, y su cercanía con el nervio facial (que la atraviesa) es clínicamente relevante: una cirugía o una inflamación de la parótida (como la parotiditis, causada por el virus de las paperas) puede comprometer ese nervio y afectar la movilidad de los músculos de la cara.'
      ],
      foco:[
        'Consideración clínica: palpar ganglios linfáticos cervicales aumentados de tamaño es parte rutinaria del examen físico, y su localización dentro de estos triángulos ayuda a orientar el origen probable de la infección o el proceso que los está afectando, según qué territorio drena cada grupo ganglionar.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 8.'
},

'pares-craneales': {
  tema:'Pares craneales',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:8,
  idea:'Los doce pares craneales son, en el fondo, una lista de "cables" muy específicos que conectan el cerebro directamente con la cabeza y el cuello, cada uno con un trabajo muy concreto: examinarlos uno por uno es, en la práctica, una de las formas más precisas de localizar una lesión neurológica.',
  claves:['par craneal','trigémino','facial','vago','oculomotor','hipogloso'],
  sigue:null,
  secciones:[
    {
      t:'Doce pares, con funciones sensitivas, motoras o mixtas',
      p:[
        'A diferencia de los nervios espinales (que salen todos de la médula y siguen un patrón repetido de raíces), los doce *pares craneales* salen directamente del encéfalo (sobre todo del tronco encefálico) y cada uno tiene un nombre y una función particular, algunos puramente sensitivos (como el olfatorio o el óptico), otros puramente motores (como el *hipogloso*, que mueve la lengua) y otros mixtos, con ambas fibras.',
        'El *trigémino* (V par) es el principal nervio sensitivo de la cara, dividido en tres ramas (oftálmica, maxilar, mandibular), y además tiene una porción motora que inerva los músculos de la masticación. El *oculomotor* (III par) controla la mayoría de los músculos que mueven el ojo, además de la constricción de la pupila —su parálisis produce un ojo desviado hacia afuera y hacia abajo, con una pupila dilatada que no responde a la luz.'
      ]
    },
    {
      t:'Dos pares con importancia clínica particular',
      p:[
        'El *facial* (VII par) controla los músculos de la expresión facial (fruncir el ceño, sonreír, cerrar los ojos con fuerza), además de llevar fibras del gusto de los dos tercios anteriores de la lengua. Su parálisis (como en la parálisis de Bell) produce debilidad de toda la mitad de la cara del mismo lado, incluida la frente —un dato clínico importante, porque en una lesión CENTRAL (en el cerebro, no en el propio nervio facial) la frente suele conservar algo de movimiento, gracias a que esa porción recibe inervación de ambos hemisferios cerebrales.',
        'El *vago* (X par) es el nervio craneal con el territorio más extenso de todos, llevando fibras parasimpáticas (ya vistas en Fisiología I) hacia el corazón, los pulmones y la mayor parte del tracto digestivo, además de fibras motoras hacia la laringe y la faringe: su lesión puede afectar desde la frecuencia cardíaca hasta la voz (por afectar las cuerdas vocales) y la capacidad de tragar.'
      ],
      foco:[
        'Distinguir una parálisis facial CENTRAL de una PERIFÉRICA por si respeta o no la frente es uno de los signos localizadores más citados en todo el examen neurológico, y es un buen ejemplo de cómo la anatomía precisa de un nervio craneal explica directamente un hallazgo clínico.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 8. Snell, Neuroanatomía Clínica, cap. 9.'
}

});
