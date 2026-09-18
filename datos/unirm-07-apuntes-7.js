/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 7)
   Termina de cubrir HISTOLOGIA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'epitelios-glandulares': {
  tema:'Epitelios glandulares',
  bloque:'Histología', programa:'unirm', cuatri:7, min:6,
  idea:'Toda glándula del cuerpo, desde una que produce sudor hasta el páncreas, se puede clasificar respondiendo a dos preguntas simples: ¿a dónde va su producto (a un conducto, o directo a la sangre) y cómo lo libera (sin destruirse, o destruyendo parte de la célula)?',
  claves:['glándula exocrina','endocrina','acino','merocrina','holocrina'],
  sigue:'tejido-conectivo',
  secciones:[
    {
      t:'Exocrinas y endocrinas: a dónde va el producto',
      p:[
        'Una *glándula exocrina* libera su producto (secreción) hacia una superficie corporal o hacia una cavidad, a través de un conducto: las glándulas sudoríparas, las salivales, el páncreas exocrino (que libera enzimas digestivas al duodeno). Una *glándula endocrina* no tiene conducto: libera su producto (una hormona) directamente hacia la sangre, para actuar en órganos distantes: la tiroides, las suprarrenales, el páncreas endocrino (los islotes, que liberan insulina).',
        'Un dato curioso y útil: el páncreas tiene AMBOS tipos de tejido glandular en el mismo órgano —la mayor parte es exocrina (produce enzimas digestivas que van al duodeno por un conducto) y una porción menor, los islotes de Langerhans, es endocrina (produce insulina y glucagón directo a la sangre). Es un buen ejemplo para fijar la diferencia, porque conviven lado a lado en la misma estructura.'
      ]
    },
    {
      t:'Cómo liberan su producto: tres mecanismos',
      p:[
        'Las glándulas exocrinas se clasifican también por cómo liberan su secreción. La secreción *merocrina* (la más común, por ejemplo en la glándula sudorípara ecrina o el páncreas exocrino) libera el producto por exocitosis, sin perder nada de la célula en el proceso: la célula queda intacta y puede seguir secretando. La secreción apocrina pierde una porción del citoplasma apical junto con el producto (la glándula mamaria durante la lactancia es un ejemplo clásico). La secreción *holocrina* es la más extrema: la célula entera se desintegra y se convierte en la secreción, como ocurre en la glándula sebácea de la piel.',
        'El *acino* es la unidad secretora básica de muchas glándulas exocrinas: un grupo de células dispuestas alrededor de una pequeña luz central, hacia donde vierten su secreción antes de que viaje por el sistema de conductos.'
      ],
      foco:[
        'Recordar el orden de "cuánto pierde la célula": merocrina (nada) → apocrina (una parte) → holocrina (toda la célula) ayuda a no confundir los tres mecanismos en un examen.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 4.'
},

'tejido-adiposo-cartilago-hueso': {
  tema:'Tejido adiposo, cartílago y hueso',
  bloque:'Histología', programa:'unirm', cuatri:7, min:7,
  idea:'Estos tres tejidos son, en el fondo, variantes especializadas del mismo tejido conectivo: comparten el mismo origen embrionario y el mismo principio (células rodeadas de matriz), pero cada uno ajustó su matriz para un trabajo completamente distinto: almacenar energía, amortiguar, o dar rigidez estructural.',
  claves:['adipocito','condrocito','osteocito','osteoblasto','osteoclasto','laguna'],
  sigue:'tejido-muscular',
  secciones:[
    {
      t:'Adiposo: la célula que casi no tiene citoplasma visible',
      p:[
        'El tejido adiposo está formado por *adipocitos*, células especializadas en almacenar grasa: en el tejido adiposo blanco (el más abundante en el adulto), cada célula tiene una sola gota gigante de lípido que ocupa casi toda la célula, empujando el núcleo y el citoplasma hacia un borde delgado —al microscopio, se ve como un anillo delgado alrededor de un espacio vacío (la grasa se disuelve durante el procesamiento habitual de la muestra). Además de almacenar energía, funciona como aislante térmico y amortiguador mecánico.'
      ]
    },
    {
      t:'Cartílago y hueso: células dentro de lagunas, en matrices muy distintas',
      p:[
        'El cartílago está formado por *condrocitos*, alojados en pequeños espacios llamados lagunas dentro de una matriz firme pero flexible (rica en colágeno tipo II y proteoglicanos). No tiene vasos sanguíneos propios (es avascular), por lo que se nutre por difusión, lo que explica su capacidad limitada de regenerarse cuando se lesiona.',
        'El hueso está formado por *osteocitos* (también alojados en lagunas), pero en una matriz mucho más rígida, mineralizada con calcio y fosfato. A diferencia del cartílago, el hueso SÍ está muy vascularizado y se remodela constantemente durante toda la vida, gracias a dos células especializadas que trabajan en equilibrio: los *osteoblastos*, que forman hueso nuevo depositando matriz que luego se mineraliza, y los *osteoclastos*, células grandes y multinucleadas que reabsorben (destruyen) hueso viejo. El esqueleto adulto se renueva por completo, poco a poco, gracias a este equilibrio constante entre formación y reabsorción.'
      ],
      foco:[
        'Cuando ese equilibrio se rompe a favor de los osteoclastos (más reabsorción que formación), el resultado es pérdida neta de masa ósea: es el mecanismo central de la osteoporosis.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 8 y 9.'
},

'tejido-muscular': {
  tema:'Tejido muscular',
  bloque:'Histología', programa:'unirm', cuatri:7, min:6,
  idea:'Al microscopio, distinguir los tres tipos de músculo es casi automático si sabes qué buscar: uno tiene rayas muy marcadas y muchos núcleos por célula, otro tiene las mismas rayas pero con discos especiales entre células, y el tercero no tiene rayas en absoluto.',
  claves:['sarcómero','banda A','banda I','disco intercalar','estriado'],
  sigue:'tejido-nervioso',
  secciones:[
    {
      t:'Por qué se ven "estriados" el esquelético y el cardíaco',
      p:[
        'Tanto el músculo esquelético como el cardíaco se llaman *estriados* porque, al microscopio, muestran un patrón repetido de bandas claras y oscuras alternadas a lo largo de la fibra. Ese patrón refleja la organización interna del *sarcómero*, la unidad contráctil básica: la *banda A* (oscura) corresponde a la zona donde están los filamentos gruesos de miosina, y la *banda I* (clara) corresponde a la zona donde solo hay filamentos delgados de actina, sin superposición de miosina.',
        'El músculo liso, en cambio, no tiene esta organización tan ordenada de sus filamentos contráctiles, y por eso no muestra estriaciones al microscopio: se ve homogéneo, sin ese patrón de bandas.'
      ]
    },
    {
      t:'Lo que distingue al cardíaco del esquelético, aun siendo los dos estriados',
      p:[
        'El músculo esquelético tiene fibras largas, cilíndricas, con MUCHOS núcleos por célula (multinucleadas), dispuestos en la periferia de la célula. El músculo cardíaco tiene células más cortas, ramificadas, generalmente con UN solo núcleo (o a veces dos) en el centro de la célula, y una estructura exclusiva del corazón: los *discos intercalares*, uniones especializadas entre una célula cardíaca y la siguiente, que contienen tanto uniones mecánicas fuertes (para no separarse durante la contracción continua) como uniones en hendidura (para la conducción eléctrica rápida entre células, ya visto en Fisiología I).'
      ],
      foco:[
        'Ver discos intercalares en una lámina es diagnóstico inmediato de tejido cardíaco: ningún otro tipo de músculo los tiene.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 10.'
},

'sangre-hematopoyesis': {
  tema:'Sangre y hematopoyesis',
  bloque:'Histología', programa:'unirm', cuatri:7, min:7,
  idea:'Cada célula sanguínea que circula ahora mismo en tu cuerpo nació, hace pocos días o semanas, de una misma célula madre en la médula ósea. Reconocer las distintas etapas de esa producción es la base para interpretar cualquier hemograma más adelante.',
  claves:['frotis','neutrófilo','linfocito','eosinófilo','médula ósea','serie mieloide'],
  sigue:'membrana-basal-uniones-celulares',
  secciones:[
    {
      t:'Un frotis de sangre: reconocer las células por su forma',
      p:[
        'Un *frotis* de sangre periférica, teñido, permite reconocer los distintos tipos de leucocitos por su morfología. El *neutrófilo* (el leucocito más abundante en la sangre del adulto) tiene un núcleo característicamente segmentado en 3 a 5 lóbulos conectados por hebras finas —de ahí su otro nombre, polimorfonuclear. El *linfocito*, más pequeño, tiene un núcleo grande, redondo, que ocupa casi toda la célula, con muy poco citoplasma visible alrededor. El *eosinófilo* tiene un núcleo típicamente bilobulado y gránulos citoplasmáticos grandes que se tiñen intensamente de color rosado-naranja con eosina, dándole su nombre.'
      ]
    },
    {
      t:'De dónde vienen: la hematopoyesis en la médula ósea',
      p:[
        'Todas las células sanguíneas se originan en la *médula ósea* a partir de una misma célula madre hematopoyética, que se va diferenciando en distintas líneas. La *serie mieloide* da origen a los eritrocitos, las plaquetas, y a los granulocitos (neutrófilos, eosinófilos, basófilos) y monocitos. La serie linfoide da origen a los linfocitos (aunque los linfocitos T completan su maduración en el timo, como se vio en Inmunología).',
        'Ejemplo trabajado: en una infección bacteriana, la médula ósea responde aumentando la producción y liberación de neutrófilos (la serie mieloide se activa preferentemente), lo cual se refleja en un hemograma como una neutrofilia; en cambio, una infección parasitaria por gusanos tisulares tiende a elevar específicamente los eosinófilos, como ya se vio en el tema de parasitología.'
      ],
      foco:[
        'En situaciones de demanda muy alta o de enfermedad de la médula ósea, pueden aparecer en sangre periférica formas inmaduras que normalmente no salen de la médula (como los cayados, neutrófilos no completamente segmentados): eso se llama "desviación a la izquierda" y es un dato de laboratorio que sugiere una respuesta medular intensa, típicamente frente a una infección bacteriana significativa.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 12 y 13.'
},

'membrana-basal-uniones-celulares': {
  tema:'Membrana basal y uniones celulares',
  bloque:'Histología', programa:'unirm', cuatri:7, min:6,
  idea:'Un epitelio no es solo una capa de células pegadas por casualidad: está sellado por uniones específicas con funciones muy distintas entre sí, y apoyado sobre una estructura que separa al epitelio del tejido conectivo de abajo.',
  claves:['membrana basal','desmosoma','unión estrecha','unión en hendidura','hemidesmosoma'],
  sigue:'ciclo-celular-division',
  secciones:[
    {
      t:'La membrana basal: el piso sobre el que se apoya el epitelio',
      p:[
        'La *membrana basal* es una capa delgada de matriz extracelular especializada que separa siempre al tejido epitelial del tejido conectivo subyacente, sirviendo de soporte estructural y de filtro selectivo para el paso de moléculas y células entre ambos compartimentos. Ningún epitelio existe sin su membrana basal debajo.'
      ]
    },
    {
      t:'Cuatro uniones, cuatro funciones distintas',
      p:[
        'Entre células epiteliales vecinas existen distintos tipos de unión, cada una con un propósito diferente. La *unión estrecha* (tight junction), cerca de la superficie apical, sella el espacio entre células e impide que las sustancias pasen libremente ENTRE ellas, obligándolas a pasar A TRAVÉS de la célula si es que van a cruzar el epitelio: es lo que hace que un epitelio funcione como una barrera selectiva (como en el intestino, o en la barrera hematoencefálica ya mencionada en Fisiología). El *desmosoma* es un punto de anclaje mecánico muy fuerte entre dos células, como un "botón" que las mantiene unidas frente a fuerzas de tracción; es abundante en epitelios sometidos a estrés mecánico, como la piel.',
        'La *unión en hendidura* (gap junction), ya vista en Fisiología I para el músculo cardíaco y liso, también existe entre muchas células epiteliales: permite el paso directo de iones y moléculas pequeñas de una célula a la vecina. El *hemidesmosoma* es similar al desmosoma, pero en vez de unir dos células entre sí, ancla la célula epitelial a la membrana basal de abajo.'
      ],
      foco:[
        'Consideración clínica: hay enfermedades autoinmunes que atacan específicamente los desmosomas de la piel (como el pénfigo), causando que las células epidérmicas pierdan su adhesión entre sí y se formen ampollas; entender qué estructura falla explica directamente por qué la piel se separa en esa enfermedad.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 4.'
},

'ciclo-celular-division': {
  tema:'Ciclo celular y división celular',
  bloque:'Histología', programa:'unirm', cuatri:7, min:6,
  idea:'Que una célula se divida no es un evento espontáneo: es el resultado de atravesar una secuencia ordenada de fases, con puntos de control que verifican que todo esté en orden antes de dejarla avanzar. Cuando esos controles fallan, el resultado puede ser cáncer.',
  claves:['ciclo celular','mitosis','interfase','huso mitótico','cromátida'],
  sigue:'piel-anexos-cutaneos',
  secciones:[
    {
      t:'La interfase: donde la célula pasa la mayor parte del tiempo',
      p:[
        'El *ciclo celular* tiene dos grandes periodos: la *interfase* (donde la célula crece, funciona normalmente y duplica su ADN) y la fase M o mitosis (donde se divide). La interfase se subdivide en G1 (crecimiento, la célula cumple sus funciones normales), S (síntesis, se duplica todo el ADN, de modo que cada cromosoma queda formado por dos copias idénticas unidas, llamadas *cromátidas* hermanas) y G2 (la célula se prepara para dividirse). La mayoría de las células del cuerpo pasan la mayor parte de su vida en G1, y muchas (como las neuronas maduras) salen del ciclo por completo hacia un estado de reposo llamado G0, sin volver a dividirse.'
      ]
    },
    {
      t:'La mitosis: repartir el material genético en dos',
      p:[
        'La *mitosis* es el proceso por el cual una célula reparte su material genético duplicado en dos células hijas idénticas. De forma simplificada: los cromosomas (ya duplicados en cromátidas) se condensan y se hacen visibles, el *huso mitótico* (una estructura de microtúbulos) se forma y se ancla al centrómero de cada cromosoma, los cromosomas se alinean en el centro de la célula, las cromátidas hermanas se separan y son jaladas hacia polos opuestos, y finalmente la célula se divide en dos, cada una con un juego completo e idéntico de cromosomas.',
        'Ejemplo trabajado, consideración clínica: el cáncer, en su esencia, es una falla en el control de este ciclo: células que pierden la capacidad de detenerse en los puntos de control normales y siguen dividiéndose de forma descontrolada. Muchos fármacos de quimioterapia funcionan precisamente atacando células que están activamente en división (en S o en mitosis), lo que también explica por qué afectan de paso a otras células normales que se dividen rápido, como las de la médula ósea o el epitelio intestinal, causando efectos adversos característicos.'
      ],
      foco:[
        'No confundir mitosis (produce dos células idénticas, diploides, para crecimiento y reparación de tejidos) con meiosis (produce cuatro células con la mitad de cromosomas, para la formación de gametos, ya vista en Embriología).'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 3.'
},

'piel-anexos-cutaneos': {
  tema:'Piel y anexos cutáneos',
  bloque:'Histología', programa:'unirm', cuatri:7, min:7,
  idea:'La piel es el órgano más grande del cuerpo, y no es una capa uniforme: tiene dos capas de origen y estructura completamente distintos, unidas por una membrana basal, cada una con funciones diferentes.',
  claves:['epidermis','dermis','folículo piloso','glándula sebácea','glándula sudorípara','melanocito'],
  sigue:'histologia-sistema-cardiovascular',
  secciones:[
    {
      t:'Epidermis: un epitelio que se renueva constantemente',
      p:[
        'La *epidermis* es un epitelio estratificado plano queratinizado: varias capas de células que, a medida que ascienden desde la capa basal hacia la superficie, se van aplanando, llenando de queratina (una proteína resistente e impermeable) y finalmente mueren, formando la capa más externa de células muertas y compactas que se descaman constantemente. Toda la epidermis se renueva por completo cada pocas semanas, a partir de la división continua de células en su capa más profunda.',
        'Dentro de la epidermis también viven los *melanocitos*, células especializadas en producir melanina, el pigmento que le da color a la piel y que la protege parcialmente del daño por radiación ultravioleta. Curiosamente, la cantidad de melanocitos es similar entre personas de distinto color de piel; lo que varía es la cantidad y el tipo de melanina que producen.'
      ]
    },
    {
      t:'Dermis y los anexos que la atraviesan',
      p:[
        'La *dermis*, debajo de la epidermis, es tejido conectivo, con vasos sanguíneos, nervios, y las estructuras anexas de la piel: el *folículo piloso* (de donde crece cada pelo), la *glándula sebácea* (que vierte su secreción grasa —el sebo— dentro del propio folículo piloso, con secreción de tipo holocrina, ya vista en epitelios glandulares) y las *glándulas sudoríparas* (que producen sudor, con secreción de tipo merocrina en el caso de las glándulas ecrinas, las más numerosas, responsables de la sudoración termorreguladora).',
        'A diferencia de la epidermis (avascular, sin vasos propios, nutrida por difusión desde abajo), la dermis sí está bien vascularizada, y es precisamente esa red de vasos en la dermis la que el hipotálamo dilata o contrae para regular la pérdida de calor, como se vio en el tema de termorregulación.'
      ],
      foco:[
        'Consideración clínica: una quemadura se clasifica, en gran parte, según qué tan profundo llega el daño en estas capas: una quemadura superficial afecta solo la epidermis, una de espesor parcial llega a la dermis (y suele doler mucho, porque ahí están las terminaciones nerviosas), y una de espesor total destruye toda la piel, incluidos folículos y glándulas, por lo que esa piel ya no puede regenerarse por sí sola desde el centro de la herida.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 18.'
},

'histologia-sistema-cardiovascular': {
  tema:'Histología del sistema cardiovascular',
  bloque:'Histología', programa:'unirm', cuatri:7, min:6,
  idea:'Todos los vasos sanguíneos comparten un mismo plan de construcción en tres capas, pero el grosor relativo de cada capa cambia radicalmente según el trabajo que le toca a ese vaso: no es lo mismo resistir la presión de la aorta que dejar pasar oxígeno hacia un tejido.',
  claves:['endotelio','túnica íntima','túnica media','túnica adventicia','capilar'],
  sigue:'tejido-linfoide',
  secciones:[
    {
      t:'Tres capas, presentes (con distinto grosor) en arterias y venas',
      p:[
        'La mayoría de los vasos sanguíneos —arterias y venas de tamaño mediano a grande— comparten la misma estructura de tres capas. La *túnica íntima*, la más interna, está formada por el *endotelio* (una capa única de células planas en contacto directo con la sangre) más una delgada capa de tejido conectivo. La *túnica media* es la capa intermedia, con músculo liso y fibras elásticas en proporción variable; es la capa que regula el calibre del vaso (contrayéndose o relajándose) y que le da a las arterias su capacidad de resistir presión. La *túnica adventicia*, la más externa, es tejido conectivo que ancla el vaso a las estructuras vecinas.',
        'Ejemplo trabajado: la aorta, que recibe la sangre directamente del corazón a alta presión, tiene una túnica media gruesa y rica en fibras elásticas (para poder distenderse con cada latido y luego retraerse, ayudando a mantener el flujo continuo entre latidos); una arteriola pequeña, que regula activamente la resistencia periférica, tiene una túnica media proporcionalmente mucho más gruesa en músculo liso respecto a su diámetro total, para poder contraerse y dilatarse con fuerza.'
      ]
    },
    {
      t:'Los capilares: donde la estructura se simplifica al máximo',
      p:[
        'Los *capilares*, el vaso más pequeño, rompen esta estructura de tres capas: están formados por una sola capa de endotelio, sin túnica media ni adventicia visibles. Esa simplicidad extrema no es un defecto: es precisamente lo que permite el intercambio de oxígeno, nutrientes y desechos entre la sangre y los tejidos, que es la función que cumplen los capilares y que las arterias y venas más gruesas no pueden cumplir por tener paredes demasiado gruesas para ese intercambio.'
      ],
      foco:[
        'El endotelio no es un simple revestimiento pasivo: libera sustancias que regulan el tono del músculo liso vascular (como el óxido nítrico, un vasodilatador) y participa activamente en la coagulación y en la respuesta inflamatoria.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 11.'
},

'tejido-linfoide': {
  tema:'Tejido linfoide',
  bloque:'Histología', programa:'unirm', cuatri:7, min:6,
  idea:'Al microscopio, encontrar una estructura redonda y densa de linfocitos —un folículo linfoide— es la señal histológica de que el sistema inmunitario está, en ese momento, montando una respuesta activa en ese sitio.',
  claves:['folículo linfoide','centro germinal','timo','amígdala','tejido linfoide asociado a mucosas'],
  sigue:null,
  secciones:[
    {
      t:'El folículo linfoide: la unidad organizativa básica',
      p:[
        'El *folículo linfoide* es una agregación redondeada y densa de linfocitos (principalmente linfocitos B), que se encuentra en los ganglios linfáticos, el bazo, las amígdalas y disperso en el tejido conectivo de las mucosas. Cuando un folículo está activamente respondiendo a un antígeno, desarrolla en su centro una zona más clara llamada *centro germinal*, donde los linfocitos B se están dividiendo activamente y madurando su capacidad de producir anticuerpos más específicos —ver un centro germinal prominente al microscopio es evidencia histológica de una respuesta inmunitaria en curso.'
      ]
    },
    {
      t:'Dónde se organiza el tejido linfoide en el cuerpo',
      p:[
        'Además de los órganos linfoides ya vistos en Inmunología (ganglios, bazo, timo), gran parte del tejido linfoide del cuerpo no forma un órgano encapsulado propio, sino que está disperso directamente dentro de las mucosas que están en contacto constante con el ambiente externo: el *tejido linfoide asociado a mucosas* (MALT), presente en el tracto respiratorio, el digestivo y el genitourinario. Las *amígdalas*, en la faringe, son un ejemplo de tejido linfoide bien organizado en ese punto de entrada del tracto respiratorio y digestivo.',
        'Tiene sentido biológico que la mayor concentración de tejido linfoide esté precisamente en las mucosas: son las superficies del cuerpo con más contacto directo con microorganismos externos (lo que se respira, se come, se toca), así que es donde más se necesita vigilancia inmunitaria activa y constante.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 14.'
}

});
