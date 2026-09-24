/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 14)
   AMPLIACIÓN de Fisiología I, segunda parte: músculo liso y
   cardíaco, sangre y hemostasia, sistema nervioso autónomo,
   introducción cardiovascular y potenciales postsinápticos.
   Mismas claves de objeto que los apuntes originales (se
   sobrescriben con Object.assign); el campo `tema` no cambia.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'musculo-liso-cardiaco': {
  tema:'Músculo liso y cardíaco',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:14,
  idea:'El músculo liso y el cardíaco trabajan sin que tengas que pensarlo, pero lo hacen con maquinarias distintas a la del esquelético. Sus diferencias explican por qué el corazón no se tetaniza, por qué el nodo sinusal manda el ritmo y por qué tantos fármacos de uso diario actúan sobre el calcio.',
  claves:['músculo liso','músculo cardíaco','automatismo','unión en hendidura'],
  sigue:'sangre-elementos-formes-hemostasia',
  secciones:[
    {
      t:'Músculo liso: contracción lenta, sostenida y económica',
      p:[
        'El músculo liso forma la pared de los vasos, los bronquios, el tubo digestivo, la vejiga y el útero. Sus células son fusiformes y tienen un solo núcleo. No presentan sarcómeros ni bandas, por eso no se ve estriado: los filamentos de actina se anclan en *cuerpos densos* repartidos por el citoplasma, y los de miosina se intercalan entre ellos. Al contraerse, tiran de los cuerpos densos y la célula se acorta en todas direcciones.',
        'Se distinguen dos tipos funcionales. El músculo liso *unitario* (visceral), como el del intestino y el útero, tiene células unidas por uniones en hendidura y se contrae como una sola unidad, con frecuencia de forma espontánea y rítmica. El músculo liso *multiunitario*, como el del iris y el de los conductos deferentes, tiene fibras que funcionan de forma independiente y responden a la inervación de cada una.',
        'A diferencia del esquelético, no tiene troponina. El calcio, que entra desde el exterior o se libera del retículo, se une a la *calmodulina*; el complejo activa la *cinasa de la cadena ligera de miosina*, que fosforila la miosina y permite que interactúe con la actina. La relajación exige que una *fosfatasa* retire ese fosfato. Como la miosina del liso hidroliza ATP muy lentamente, puede mantener una contracción sostenida —el llamado *estado de cerrojo*— con un gasto energético mínimo, algo esencial para conservar el tono de los vasos sin agotarse.',
        'La contracción del liso se regula por muchas vías: nerviosa (autónoma), hormonal (adrenalina, angiotensina II, oxitocina) y local (falta de oxígeno, exceso de CO2, adenosina, óxido nítrico), lo que le da una enorme flexibilidad. El estiramiento por sí solo también puede activarlo, por ejemplo cuando el aumento de presión hace que una arteriola se contraiga (respuesta miogénica).'
      ],
      foco:[
        'Comparación de examen: esquelético = calcio + troponina C, contracción rápida, estriado. Liso = calcio + calmodulina + cinasa de cadena ligera de miosina, contracción lenta y sostenida, sin estriaciones.'
      ]
    },
    {
      t:'Músculo cardíaco: un sincitio de fibras que se activan en bloque',
      p:[
        'Las células del miocardio son estriadas, como las esqueléticas, pero más cortas, con un solo núcleo (a veces dos) y ramificadas. Se unen extremo con extremo por los *discos intercalares*, que contienen dos estructuras: los desmosomas, que sujetan mecánicamente a las células entre sí, y las *uniones en hendidura*, canales que permiten el paso directo de iones de una célula a otra. Gracias a ellas, el potencial de acción se propaga de una célula a la siguiente sin interrupción y el miocardio se comporta como un *sincitio funcional*: o se activa todo o no se activa nada.',
        'El acoplamiento excitación-contracción del corazón tiene una particularidad: depende del calcio del exterior. Durante la meseta del potencial de acción, el calcio entra por canales tipo L, y esa pequeña entrada activa los canales de rianodina del retículo sarcoplásmico, que liberan mucho más calcio: es la *liberación de calcio inducida por calcio*. El calcio se une a la troponina C y el resto es igual que en el esquelético. Para relajarse, el calcio vuelve al retículo por la SERCA y sale de la célula por el intercambiador sodio-calcio.',
        'El corazón consume mucha energía y casi todo su ATP proviene del metabolismo oxidativo: sus células tienen abundantes mitocondrias, cerca del 35 % del volumen celular. Por eso es tan sensible a la falta de oxígeno: a los pocos segundos de una isquemia, la contractilidad cae, y a los pocos minutos aparece daño irreversible.'
      ],
      foco:[
        'Si la fuerza del latido depende del calcio, todo lo que cambie el calcio cambia la contractilidad: la digoxina y la noradrenalina lo aumentan; los calcioantagonistas (verapamilo, diltiazem) lo reducen.'
      ]
    },
    {
      t:'El potencial de acción cardíaco y el automatismo',
      p:[
        'El potencial de acción de un miocito ventricular dura unos 250-300 ms, mucho más que el de una neurona (1-2 ms). Tiene cinco fases. En la fase 0, la despolarización rápida, entra sodio. En la fase 1, una breve repolarización parcial por salida de potasio. En la fase 2, la *meseta*, entra calcio por canales tipo L y sale potasio, equilibrándose las corrientes. En la fase 3, la repolarización, predomina la salida de potasio. Y en la fase 4, el reposo, el potencial vuelve a −90 mV.',
        'La meseta tiene una consecuencia fisiológica decisiva: el periodo refractario dura casi lo mismo que la contracción, de manera que el músculo no puede reactivarse hasta que ya se ha relajado. Así se garantiza que el corazón bombee en ciclos, con tiempo para llenarse, y que no pueda tetanizarse. Una contracción tetánica del corazón sería incompatible con la vida.',
        'El corazón late solo porque algunas de sus células son *autoexcitables*: en la fase 4 se despolarizan lentamente por sí solas, sin que nadie las estimule, gracias a una corriente de entrada de sodio llamada corriente "funny" y a la entrada de calcio, hasta alcanzar el umbral. El *nodo sinusal* es la zona con la despolarización más rápida, por eso marca el ritmo (60-100 latidos por minuto). Si falla, el nodo auriculoventricular toma el mando (40-60 lpm); si este también falla, el sistema de His-Purkinje (20-40 lpm). El sistema nervioso autónomo solo modula el ritmo: el simpático acelera la despolarización de la fase 4; el vago, mediante acetilcolina, la enlentece.',
        'La señal recorre un camino ordenado: nodo sinusal, aurículas, nodo auriculoventricular (donde se retrasa unos 0,1 s, para que las aurículas terminen de vaciarse antes de la contracción ventricular), haz de His, ramas y fibras de Purkinje, que reparten el impulso a los ventrículos y logran que se contraigan de forma casi simultánea desde el ápex hacia la base.'
      ],
      foco:[
        'Meseta larga = refractario largo = el corazón no se tetaniza. Nodo sinusal = fase 4 más rápida = marcapasos. Las dos ideas explican el ritmo cardíaco normal.'
      ]
    },
    {
      t:'Aplicaciones clínicas',
      p:[
        '*Consideración clínica*: un corazón trasplantado no tiene inervación autónoma, y late a unos 100 lpm en reposo, porque sin el freno vagal se manifiesta el ritmo intrínseco del nodo sinusal. Tampoco acelera de inmediato con el ejercicio: depende de la adrenalina circulante, que llega más lentamente que el impulso nervioso. Es un experimento natural que demuestra el automatismo y la modulación autónoma.',
        'En el músculo liso vascular, los nitratos liberan óxido nítrico, que relaja el músculo y dilata las venas y las coronarias; por eso alivian la angina. Los calcioantagonistas dilatan las arteriolas y reducen la presión arterial. En los bronquios, los agonistas beta-2 (salbutamol) relajan el músculo liso y abren la vía aérea en el asma. Los bloqueos auriculoventriculares aparecen cuando el nodo AV no conduce bien; en el bloqueo completo, los ventrículos se contraen a su propio ritmo lento (20-40 lpm), y suele requerir un marcapasos artificial.',
        'Ejemplo trabajado: una mujer con hiperpotasemia grave por insuficiencia renal presenta un ECG con ondas T altas y QRS ancho. El potasio extracelular alto despolariza el miocardio, inactiva los canales de sodio y enlentece la conducción. Se administra calcio intravenoso para estabilizar la membrana cardíaca, e insulina con glucosa para meter potasio en las células. Cada paso del tratamiento sale de conocer el potencial de acción cardíaco.'
      ],
      foco:[
        'Cuando veas un fármaco cardiovascular, pregunta qué canal o receptor modifica y sobre qué fase del potencial de acción o sobre qué proteína contráctil actúa. Casi siempre lo puedes deducir.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 8, 9 y 10.'
},

'sangre-elementos-formes-hemostasia': {
  tema:'Sangre: elementos formes y hemostasia',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:16,
  idea:'La sangre es un tejido líquido que transporta gases, nutrientes, hormonas y defensas, y que además tiene un sistema propio para sellarse cuando se rompe un vaso. Comprender cómo se fabrican y funcionan sus células y cómo se coagula es imprescindible para interpretar un hemograma y unas pruebas de coagulación.',
  claves:['eritrocito','hematocrito','plaqueta','coagulación','hemoglobina'],
  sigue:'sna-fisiologia-i',
  secciones:[
    {
      t:'Composición de la sangre: plasma y elementos formes',
      p:[
        'La sangre de un adulto suma unos 5 litros y se compone de dos fracciones. El *plasma*, cerca del 55 %, es una solución acuosa (91 % agua) con proteínas, iones, nutrientes y desechos. Los *elementos formes*, cerca del 45 %, son los eritrocitos, los leucocitos y las plaquetas. La proporción de volumen que ocupan los glóbulos rojos se llama *hematocrito*: normalmente 40-54 % en el hombre y 36-48 % en la mujer.',
        'Las proteínas plasmáticas tienen cada una una función distinta. La *albúmina*, la más abundante, es la principal responsable de la presión oncótica, que retiene el agua dentro de los vasos y transporta hormonas y fármacos. Las *globulinas* incluyen las inmunoglobulinas (defensa) y proteínas de transporte. El *fibrinógeno* es el precursor de la fibrina en la coagulación. Cuando falta albúmina (por ejemplo, en la cirrosis o en el síndrome nefrótico), baja la presión oncótica y aparece edema.',
        'Conviene distinguir *plasma* y *suero*. El plasma es la parte líquida de la sangre sin coagular, y conserva todos sus factores de coagulación. El suero es lo que queda cuando la sangre ya se ha coagulado: es plasma sin fibrinógeno ni otros factores consumidos en el coágulo.'
      ],
      foco:[
        'Plasma = sangre sin células, con fibrinógeno. Suero = plasma sin fibrinógeno (ya coaguló). Es una pregunta de examen recurrente por lo fácil que es confundirlos.'
      ]
    },
    {
      t:'Eritrocitos y hemoglobina: transportar oxígeno',
      p:[
        'El eritrocito es un disco bicóncavo, sin núcleo ni mitocondrias, lleno de hemoglobina. La forma bicóncava aumenta la superficie para el intercambio de gases y le da flexibilidad para deformarse en los capilares más finos. Vive unos 120 días; luego los macrófagos del bazo y del hígado lo destruyen, reciclan el hierro y convierten el grupo hemo en bilirrubina.',
        'La *eritropoyesis* ocurre en la médula ósea y está regulada por la *eritropoyetina*, una hormona que produce el riñón cuando detecta hipoxia. Para fabricar glóbulos rojos se necesitan además hierro (para el grupo hemo), vitamina B12 y ácido fólico (para la síntesis de ADN). Su deficiencia produce anemias: por falta de hierro, glóbulos pequeños y pálidos (microcíticos, hipocrómicos); por falta de B12 o folato, glóbulos grandes (macrocíticos, megaloblásticos).',
        'La *hemoglobina* está formada por cuatro cadenas, cada una con un grupo hemo que contiene hierro y une una molécula de oxígeno. Su unión con el oxígeno es cooperativa: cuando une la primera molécula, aumenta la afinidad por las siguientes. Eso da a la curva de disociación su forma de S. Un gramo de hemoglobina transporta unos 1,34 mL de oxígeno, y la cantidad de hemoglobina es el determinante principal del contenido de oxígeno de la sangre.',
        'La afinidad de la hemoglobina por el oxígeno varía con el ambiente. El aumento de CO2, de protones (acidez), de temperatura y de 2,3-bisfosfoglicerato desplaza la curva hacia la derecha: la hemoglobina suelta el oxígeno con más facilidad, justo en los tejidos activos. Es el *efecto Bohr*. En los pulmones ocurre lo contrario y la hemoglobina se carga de oxígeno con facilidad.'
      ],
      foco:[
        'Curva a la derecha = menos afinidad = más entrega de oxígeno a los tejidos (ejercicio, acidosis, fiebre, altitud). Curva a la izquierda = más afinidad = el oxígeno se queda pegado a la hemoglobina (alcalosis, frío, monóxido de carbono).'
      ]
    },
    {
      t:'Leucocitos y plaquetas',
      p:[
        'Los *leucocitos* son las células de defensa. Los neutrófilos son los más numerosos (50-70 %) y los primeros en llegar a una infección bacteriana. Los linfocitos (20-40 %) dirigen la respuesta inmunitaria específica. Los monocitos maduran a macrófagos en los tejidos. Los eosinófilos participan en parasitosis y alergias, y los basófilos liberan histamina y heparina. Todos nacen de la célula madre hematopoyética de la médula ósea.',
        'Las *plaquetas* son fragmentos de citoplasma, sin núcleo, desprendidos de los megacariocitos de la médula ósea bajo la influencia de la trombopoyetina. Su recuento normal es de 150.000 a 400.000 por microlitro y viven unos 8-10 días. Contienen gránulos con ADP, serotonina y factores de coagulación, y una membrana rica en receptores. Son las protagonistas de la hemostasia primaria.'
      ],
      foco:[
        'Un hemograma es una radiografía de la médula ósea: glóbulos rojos (transporte), leucocitos (defensa) y plaquetas (hemostasia). Cuando una línea celular falla, pregúntate en qué paso de su producción o de su destrucción ocurre.'
      ]
    },
    {
      t:'Hemostasia: cuatro pasos para cerrar una herida',
      p:[
        'La *hemostasia* es el conjunto de mecanismos que detienen el sangrado. Ocurre en pasos sucesivos. Primero, la *vasoconstricción*: el vaso lesionado se contrae de inmediato y reduce el flujo. Segundo, el *tapón plaquetario* (hemostasia primaria): al quedar expuesto el colágeno, las plaquetas se adhieren a él con ayuda del factor de von Willebrand, se activan, liberan ADP y tromboxano A2, y se agregan unas con otras uniéndose mediante fibrinógeno a través del receptor GP IIb/IIIa. Tercero, la *coagulación* (hemostasia secundaria) refuerza el tapón con una malla de fibrina. Y cuarto, la *fibrinólisis* disuelve el coágulo cuando el vaso ya se ha reparado.',
        'La coagulación es una cascada de factores que se activan en serie y culminan en la formación de trombina, la enzima que convierte el fibrinógeno soluble en fibrina insoluble. La *vía extrínseca* se inicia cuando el tejido lesionado expone el factor tisular, que activa al factor VII. La *vía intrínseca* se inicia con el contacto de la sangre con superficies dañadas (factores XII, XI, IX y VIII). Ambas convergen en la *vía común*: el factor X activado (con el factor V) convierte la protrombina (II) en trombina, y esta transforma el fibrinógeno (I) en fibrina, que el factor XIII entrecruza y estabiliza.',
        'Los factores II, VII, IX y X necesitan vitamina K para funcionar; por eso los déficits de vitamina K (mala absorción, antibióticos prolongados, recién nacidos) y el tratamiento con warfarina prolongan los tiempos de coagulación. El sistema tiene sus propios frenos: la antitrombina (que potencia la heparina) y las proteínas C y S inactivan a los factores activados, y la plasmina, generada a partir del plasminógeno, degrada la fibrina.',
        'Dos pruebas resumen la cascada. El *tiempo de protrombina* (TP, expresado como INR) evalúa la vía extrínseca y la común y se prolonga con warfarina y déficit de vitamina K. El *tiempo de tromboplastina parcial activada* (TTPa) evalúa la vía intrínseca y la común y se prolonga con heparina y con hemofilias. Un truco: el TP se altera con lo que altera la vía del factor VII (que tiene la vida media más corta, por eso es el primero en caer con un déficit de vitamina K).'
      ],
      foco:[
        'Sangrado superficial (petequias, epistaxis, encías) = problema de plaquetas o vasos. Sangrado profundo (hemartros, hematomas musculares) = problema de factores de coagulación. Es la manera más rápida de orientar el diagnóstico.'
      ]
    },
    {
      t:'Cuando falla la hemostasia',
      p:[
        '*Consideración clínica*: la hemofilia A es un déficit del factor VIII, de herencia ligada al cromosoma X, y por eso afecta casi siempre a varones. Provoca sangrado prolongado, hematomas profundos y hemartros de repetición, con TTPa alargado y TP y plaquetas normales. Se trata con reposición del factor. La enfermedad de von Willebrand, mucho más frecuente y más leve, altera la adhesión de las plaquetas y se manifiesta con sangrado de mucosas.',
        'La trombocitopenia (plaquetas bajas) produce petequias, equimosis y sangrado de mucosas, con un riesgo alto de hemorragia grave cuando el recuento baja de 10.000-20.000. La trombosis es el problema inverso: un coágulo que se forma donde no debe. Los anticoagulantes actúan sobre distintos puntos de la cascada: la heparina potencia la antitrombina, la warfarina bloquea la síntesis de factores dependientes de vitamina K y los nuevos anticoagulantes orales inhiben directamente el factor Xa o la trombina. Los antiagregantes, como la aspirina, bloquean la producción de tromboxano A2 en las plaquetas.',
        'Ejemplo trabajado: una mujer que toma warfarina por una fibrilación auricular empieza un antibiótico y aparece con hematomas y un INR de 6. El antibiótico eliminó parte de la flora intestinal que produce vitamina K y, además, interactúa con el metabolismo de la warfarina. La respuesta, de nuevo, sale de conocer la cascada: se suspende el anticoagulante y se administra vitamina K.'
      ],
      foco:[
        'Anticoagulante, ¿dónde actúa? Heparina: antitrombina (TTPa). Warfarina: vitamina K (TP/INR). Aspirina: plaquetas (tromboxano). Repite el trío hasta que salga solo.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 32, 33, 36 y 37.'
},

'sna-fisiologia-i': {
  tema:'Fisiología del sistema nervioso autónomo',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:14,
  idea:'El sistema nervioso autónomo regula, sin que intervenga la voluntad, la frecuencia cardíaca, la presión arterial, la digestión, la pupila y la temperatura. Sus dos ramas trabajan de forma coordinada y opuesta, y casi todos los fármacos cardiovasculares y respiratorios actúan sobre sus receptores.',
  claves:['simpático','parasimpático','adrenérgico','colinérgico','receptor'],
  sigue:'fisiologia-cardiovascular-intro',
  secciones:[
    {
      t:'Organización: dos neuronas y dos ramas',
      p:[
        'A diferencia de la vía motora somática, que llega al músculo con una sola neurona, la vía autónoma usa *dos neuronas en serie*. La neurona *preganglionar* nace en el sistema nervioso central y hace sinapsis en un ganglio con la neurona *posganglionar*, que llega hasta el órgano efector. Todas las fibras preganglionares, tanto simpáticas como parasimpáticas, liberan acetilcolina.',
        'El sistema *simpático* tiene su origen en las astas laterales de la médula toracolumbar (T1-L2). Sus ganglios se sitúan cerca de la columna, en la cadena paravertebral y en los ganglios prevertebrales, de manera que la fibra preganglionar es corta y la posganglionar es larga; además, una preganglionar hace sinapsis con muchas posganglionares, lo que explica que la respuesta simpática sea *difusa*, y afecte a muchos órganos a la vez. La médula suprarrenal funciona como un ganglio simpático modificado: sus células, inervadas por fibras preganglionares, liberan adrenalina (80 %) y noradrenalina (20 %) directamente a la sangre.',
        'El sistema *parasimpático* nace en el tronco encefálico (pares craneales III, VII, IX y X) y en los segmentos sacros S2-S4. Sus ganglios están cerca o dentro del órgano, así que la fibra preganglionar es larga y la posganglionar es corta, y cada preganglionar hace sinapsis con pocas posganglionares: su acción es más *localizada*. El nervio vago (X) transporta cerca del 75 % de toda la actividad parasimpática hacia el corazón, los pulmones y el aparato digestivo.'
      ],
      foco:[
        'Simpático = toracolumbar, fibra preganglionar corta, respuesta difusa. Parasimpático = craneosacro, fibra preganglionar larga, respuesta localizada. Ambos usan acetilcolina en el ganglio.'
      ]
    },
    {
      t:'Neurotransmisores y receptores',
      p:[
        'La diferencia decisiva se encuentra en la terminación posganglionar. En el *parasimpático*, la neurona posganglionar libera acetilcolina, que actúa sobre *receptores muscarínicos* (M1 a M5, acoplados a proteínas G). En el *simpático*, la posganglionar libera casi siempre *noradrenalina*, que actúa sobre receptores adrenérgicos: alfa-1, alfa-2, beta-1 y beta-2. Los receptores nicotínicos se sitúan en los ganglios de ambas ramas y en la unión neuromuscular.',
        'Cada tipo de receptor tiene un efecto característico. Los *alfa-1* producen vasoconstricción, midriasis y contracción de los esfínteres. Los *beta-1*, en el corazón, aumentan la frecuencia y la contractilidad. Los *beta-2* relajan el músculo liso bronquial y el de los vasos del músculo esquelético. Entre los muscarínicos, los *M2* enlentecen el corazón y los *M3* contraen el músculo liso del tubo digestivo y de los bronquios, aumentan las secreciones y contraen la pupila (miosis).',
        'Hay excepciones que se repiten en los exámenes. Las glándulas sudoríparas están inervadas por fibras simpáticas cuya posganglionar libera acetilcolina (receptores muscarínicos). Los vasos del músculo esquelético tienen receptores beta-2 y responden a la adrenalina con vasodilatación. Y la médula suprarrenal libera sus hormonas a la circulación, no a una sinapsis. La noradrenalina termina su acción sobre todo por recaptación en el terminal, y también por las enzimas MAO y COMT; la acetilcolina, por la acetilcolinesterasa.'
      ],
      foco:[
        'Sudoración = simpático que usa acetilcolina y receptores muscarínicos. Si te lo preguntan como "excepción", es esa. Y ojo: un anticolinérgico como la atropina reduce la sudoración por eso mismo.'
      ]
    },
    {
      t:'Los efectos por órgano y la lógica de conjunto',
      p:[
        'El simpático prepara al cuerpo para la *lucha o la huida*: acelera el corazón y aumenta su fuerza, contrae los vasos de la piel y las vísceras y dilata los del músculo, abre los bronquios, dilata la pupila, frena la digestión, moviliza la glucosa y estimula la sudoración. El parasimpático favorece el *reposo y la digestión*: enlentece el corazón, contrae la pupila, aumenta la salivación y el peristaltismo, estimula la secreción gástrica y la contracción de la vejiga.',
        'La mayoría de los órganos recibe inervación de ambas ramas, y ambas mantienen un *tono basal* constante: es el equilibrio entre ellas lo que determina el estado del órgano. En el corazón en reposo predomina el tono vagal (por eso un corazón denervado late a unos 100 lpm, y no a los 70 habituales). En la mayoría de los vasos, en cambio, solo hay inervación simpática, y el tono vasoconstrictor basal se modula subiendo o bajando la descarga.',
        'Ejemplo trabajado: una persona se levanta bruscamente de la cama. La presión cae por un instante al desplazarse la sangre hacia las piernas; los barorreceptores lo detectan, el centro vasomotor aumenta la descarga simpática y reduce el tono vagal, el corazón se acelera y los vasos se contraen, y la presión se recupera en pocos segundos. Si esa respuesta falla, como ocurre en la neuropatía autonómica diabética, aparece hipotensión ortostática y mareo al ponerse de pie.'
      ],
      foco:[
        'Para recordar el efecto de cada rama, pregúntate qué necesita el cuerpo. Correr para salvarse (simpático): más gasto cardíaco, más aire, más glucosa. Comer y descansar (parasimpático): más jugos digestivos, más motilidad, corazón lento.'
      ]
    },
    {
      t:'Fármacos y aplicaciones clínicas',
      p:[
        '*Consideración clínica*: la atropina bloquea los receptores muscarínicos y produce un cuadro anticolinérgico —boca seca, midriasis, taquicardia, piel enrojecida y seca, retención urinaria—; se emplea para tratar la bradicardia y las intoxicaciones por organofosforados. Los agonistas beta-2, como el salbutamol, dilatan los bronquios en el asma. Los betabloqueantes (propranolol, metoprolol, atenolol) reducen la frecuencia y la contractilidad, y se usan en la hipertensión, la angina y la insuficiencia cardíaca; los no selectivos pueden desencadenar broncoespasmo. Los alfa-1 bloqueantes, como la tamsulosina, relajan el cuello vesical y ayudan en la hiperplasia prostática.',
        'La noradrenalina en infusión, por su efecto alfa-1 sobre los vasos, se emplea para elevar la presión en el choque séptico. La adrenalina actúa sobre todos los receptores adrenérgicos, y por eso es el fármaco de elección en la anafilaxia: relaja los bronquios (beta-2), sostiene la presión (alfa-1) y aumenta el gasto cardíaco (beta-1).',
        'Comprender esta farmacología es más fácil de lo que parece: si sabes qué receptor produce cada efecto y qué fármaco lo activa o lo bloquea, puedes predecir los efectos secundarios sin memorizarlos. Un betabloqueante, por ejemplo, causa bradicardia y broncoespasmo porque bloquea beta-1 y beta-2.'
      ],
      foco:[
        'Regla para el examen: primero identifica el receptor (alfa-1, beta-1, beta-2, M2, M3), después el efecto fisiológico que produce, y por último si el fármaco lo activa o lo bloquea. Nunca memorices el fármaco sin el receptor.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 60.'
},

'fisiologia-cardiovascular-intro': {
  tema:'Introducción a la fisiología cardiovascular',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:14,
  idea:'La circulación es un circuito cerrado cuyo objetivo es llevar sangre a cada tejido en la cantidad que necesita. Con solo tres conceptos —gasto cardíaco, presión y resistencia— se puede razonar casi cualquier problema hemodinámico, desde una hemorragia hasta la insuficiencia cardíaca.',
  claves:['gasto cardíaco','precarga','poscarga','presión arterial','resistencia periférica'],
  sigue:'potenciales-postsinapticos',
  secciones:[
    {
      t:'Un circuito en serie con dos bombas',
      p:[
        'El corazón es en realidad dos bombas dispuestas en serie. El corazón derecho recibe la sangre venosa y la envía a los pulmones por la *circulación pulmonar*, un circuito de baja presión. El corazón izquierdo recibe la sangre oxigenada y la envía al resto del cuerpo por la *circulación sistémica*, de alta presión. Como ambas están en serie, el gasto de un lado debe igualar al del otro; si no, la sangre se acumularía en uno de los circuitos.',
        'La sangre no se reparte de manera uniforme. Cerca del 64 % del volumen sanguíneo está en las venas y vénulas, el 13 % en las arterias, el 7 % en los capilares, el 9 % en la circulación pulmonar y el 7 % en el corazón. Las venas, por su gran distensibilidad, funcionan como un *reservorio*, y al contraerse por acción del simpático devuelven sangre al corazón: es un mecanismo de reserva en la hemorragia y en el ejercicio.',
        'Los vasos cumplen funciones distintas según su calibre. Las arterias distribuyen la sangre y amortiguan los picos de presión. Las *arteriolas*, con su gruesa capa de músculo liso, son los vasos de *resistencia* que regulan el flujo hacia cada tejido. Los *capilares*, de pared finísima, son el sitio del intercambio de gases y nutrientes. Las venas devuelven la sangre y almacenan volumen.'
      ],
      foco:[
        'Arteriolas = resistencia. Capilares = intercambio. Venas = capacitancia (reservorio). Cada función determina qué ocurre cuando un vaso se contrae o se dilata.'
      ]
    },
    {
      t:'El gasto cardíaco y sus determinantes',
      p:[
        'El *gasto cardíaco* (GC) es el volumen de sangre que expulsa cada ventrículo por minuto. Es el producto de la frecuencia cardíaca por el volumen sistólico: GC = FC × VS. En un adulto en reposo, con 70-75 latidos por minuto y un volumen sistólico de unos 70 mL, el gasto ronda los 5 L/min, y puede multiplicarse por cuatro o cinco en un deportista durante el ejercicio máximo. El volumen sistólico es la diferencia entre el volumen telediastólico (al final del llenado) y el telesistólico (después de la expulsión); su cociente con el volumen telediastólico es la *fracción de eyección*, normalmente superior al 55 %.',
        'La frecuencia depende del equilibrio autonómico: el simpático la acelera y el vago la frena. El volumen sistólico depende de tres factores. La *precarga* es el grado de estiramiento de las fibras al final de la diástole, es decir, el volumen telediastólico, y depende sobre todo del retorno venoso. La *poscarga* es la resistencia que debe vencer el ventrículo para expulsar la sangre, relacionada con la presión aórtica y la resistencia periférica. La *contractilidad* es la fuerza intrínseca de contracción, independiente de la precarga, y aumenta con la estimulación simpática y con la digoxina.',
        'La *ley de Frank-Starling* relaciona precarga y fuerza: dentro de ciertos límites, cuanto más se llena el ventrículo en la diástole, con más fuerza se contrae y más sangre expulsa. Gracias a ello, el corazón iguala automáticamente su gasto al retorno venoso y mantiene en equilibrio a los dos ventrículos. Se basa en la relación longitud-tensión del sarcómero.'
      ],
      foco:[
        'Un ventrículo en insuficiencia tiene la contractilidad reducida, así que su curva de Frank-Starling se desplaza hacia abajo: con la misma precarga, expulsa menos sangre. Este es el fundamento de la congestión de la insuficiencia cardíaca.'
      ]
    },
    {
      t:'Presión, flujo y resistencia',
      p:[
        'La hemodinámica se resume en una versión de la ley de Ohm: el flujo es directamente proporcional a la diferencia de presión e inversamente proporcional a la resistencia. Aplicada a la circulación sistémica, la presión arterial media es el producto del gasto cardíaco por la resistencia periférica total: PAM = GC × RVP. Por eso la presión arterial puede subir porque aumenta el gasto (más volumen, más frecuencia) o porque aumenta la resistencia (vasoconstricción), y los tratamientos antihipertensivos actúan sobre uno u otro.',
        'La resistencia de un vaso depende mucho de su radio: según la ley de Poiseuille, es inversamente proporcional a la cuarta potencia del radio. Eso significa que una pequeña reducción del calibre tiene un efecto enorme: si el radio se reduce a la mitad, la resistencia se multiplica por 16. Por eso las arteriolas, con su capacidad de cambiar de calibre, son las grandes reguladoras de la presión y del flujo hacia cada órgano.',
        'La presión arterial se describe con dos valores. La *presión sistólica* (unos 120 mmHg) es la máxima, durante la eyección. La *presión diastólica* (unos 80 mmHg) es la mínima, durante el llenado. La diferencia es la *presión de pulso* (unos 40 mmHg). La *presión arterial media* no es el promedio simple: como la diástole dura más que la sístole, se calcula como la presión diastólica más un tercio de la presión de pulso, unos 93 mmHg en este ejemplo.',
        'Ejemplo trabajado: un paciente tiene un gasto cardíaco de 5 L/min y una presión arterial media de 100 mmHg (la presión venosa central es casi 0). Su resistencia periférica es 100/5 = 20 mmHg·min/L. Si, con el mismo gasto, la presión media sube a 140 mmHg, la resistencia es de 28: una vasoconstricción sostenida explica la hipertensión. Si el gasto baja a 2,5 L/min con la misma presión, la resistencia se duplica: el cuerpo está compensando un gasto bajo con vasoconstricción, como en el choque.'
      ],
      foco:[
        'PAM = GC × RVP. Si te dan dos de las tres cantidades, calculas la tercera. Es la fórmula más útil del capítulo y aparece en problemas numéricos de examen.'
      ]
    },
    {
      t:'La regulación y la clínica',
      p:[
        'La presión arterial se regula a corto plazo con el reflejo *barorreceptor*: los receptores de estiramiento del seno carotídeo y del arco aórtico detectan cambios de presión y modifican en segundos la descarga simpática y vagal. A largo plazo la controla el riñón, que ajusta el volumen de sangre con el sistema renina-angiotensina-aldosterona y la ADH.',
        '*Consideración clínica*: en la hemorragia, el volumen y el retorno venoso caen, la precarga disminuye, y el gasto cardíaco baja (ley de Frank-Starling). El cuerpo compensa con taquicardia y vasoconstricción para mantener la presión; por eso un paciente joven con una pérdida importante de sangre puede tener la presión normal, pero con taquicardia, piel fría y sudorosa. En la estenosis aórtica aumenta la poscarga, y el ventrículo se hipertrofia. En la insuficiencia cardíaca cae la contractilidad, y el gasto es insuficiente para las necesidades del cuerpo. En la hipertensión crónica, la resistencia elevada aumenta la poscarga y obliga al corazón a trabajar más.',
        'Con estos cuatro conceptos —gasto, precarga, poscarga y resistencia— puedes razonar cualquier situación. Cuando estudies fisiopatología y farmacología, los diuréticos disminuirán la precarga; los vasodilatadores, la poscarga; los inotrópicos, la contractilidad, y los betabloqueantes, la frecuencia. Todo encaja en el mismo esquema.'
      ],
      foco:[
        'Para cada situación clínica pregúntate: ¿qué pasó con la precarga, la poscarga, la contractilidad y la frecuencia? La respuesta te dice qué le ocurre al gasto cardíaco y a la presión.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 9, 14, 15 y 20.'
},

'potenciales-postsinapticos': {
  tema:'Potenciales postsinápticos excitatorios e inhibitorios',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:13,
  idea:'Una neurona recibe miles de señales al mismo tiempo, unas que la excitan y otras que la inhiben, y decide en cada instante si dispara o no un potencial de acción. Comprender cómo se suman esas señales explica el funcionamiento del cerebro y la acción de los sedantes y los anticonvulsivantes.',
  claves:['PPSE','PPSI','sumación espacial','sumación temporal','inhibición presináptica'],
  sigue:'reflejos-espinales',
  secciones:[
    {
      t:'PPSE y PPSI: los cambios graduados de la membrana postsináptica',
      p:[
        'Cuando un neurotransmisor se une a su receptor en la membrana postsináptica, cambia el voltaje de esa membrana, y ese cambio se llama *potencial postsináptico*. Si el cambio es una despolarización que acerca la membrana al umbral, se trata de un *potencial postsináptico excitatorio* (PPSE). Lo produce, por ejemplo, el glutamato al abrir canales que dejan entrar sodio y calcio. Si el cambio es una hiperpolarización que aleja la membrana del umbral, es un *potencial postsináptico inhibitorio* (PPSI). Lo producen el GABA y la glicina al abrir canales de cloruro, o la salida de potasio.',
        'Estos potenciales son muy distintos al potencial de acción. Son *graduados*: su amplitud depende de cuánto neurotransmisor se libera, y no cumplen la ley del todo o nada. Son *locales* y *decrementales*: se debilitan a medida que se alejan del punto de origen, porque la membrana del cuerpo neuronal y de las dendritas casi no tiene canales de sodio dependientes de voltaje para regenerarlos. Y son *sumables*: se pueden acumular. Un solo PPSE, de menos de 1 mV, no llega jamás al umbral; hace falta que muchos coincidan.'
      ],
      foco:[
        'PPSE = despolariza (Na⁺ entra). PPSI = hiperpolariza (Cl⁻ entra o K⁺ sale). Ambos son graduados y decrementales, a diferencia del potencial de acción.'
      ]
    },
    {
      t:'La integración: sumación espacial y temporal',
      p:[
        'Como cada potencial postsináptico es pequeño, la neurona los integra sumándolos. En la *sumación espacial*, varias sinapsis distintas se activan al mismo tiempo y sus efectos se acumulan. En la *sumación temporal*, una misma sinapsis se activa repetidamente en una sucesión rápida, de modo que cada nuevo potencial llega antes de que el anterior desaparezca y se suma a él. En la neurona real ocurren las dos a la vez: cientos de entradas, excitatorias e inhibitorias, con distintos ritmos.',
        'El resultado de esa suma se evalúa en el *cono axónico* o segmento inicial del axón. Allí la densidad de canales de sodio dependientes de voltaje es mucho mayor y el umbral es más bajo que en el resto de la neurona, de modo que es el sitio natural donde se dispara el potencial de acción. Si la suma de todos los PPSE y PPSI alcanza el umbral en ese punto, la neurona dispara; si no, permanece en silencio.',
        'Las sinapsis inhibitorias tienen un peso especial cuando se sitúan cerca del cono axónico o en el mismo cuerpo neuronal: un PPSI ahí "pisa" a varios PPSE que llegan desde las dendritas. La localización de una sinapsis es, por tanto, tan importante como su fuerza.'
      ],
      foco:[
        'Espacial = distintos lugares, mismo momento. Temporal = mismo lugar, momentos seguidos. La decisión de disparar se toma en el cono axónico.'
      ]
    },
    {
      t:'Tipos de inhibición en el sistema nervioso',
      p:[
        'La inhibición no es un accesorio: sin ella el sistema nervioso se sobreexcitaría. Existen varios tipos. La *inhibición postsináptica*, la más frecuente, produce un PPSI en la célula receptora, y la ejercen neuronas que liberan GABA (cerebro) o glicina (médula). La *inhibición presináptica* ocurre cuando una neurona inhibitoria hace sinapsis sobre el terminal de otra, y reduce la cantidad de neurotransmisor que este libera; es muy selectiva, porque inhibe solo una entrada concreta sin afectar a las demás de la misma neurona.',
        'Hay además circuitos que utilizan la inhibición para regular la actividad. En la *inhibición por retroalimentación*, una neurona excita una interneurona inhibitoria que, a su vez, la frena a ella misma; el ejemplo es la célula de Renshaw, que limita la descarga de las motoneuronas alfa. En la *inhibición lateral*, las neuronas más activas inhiben a sus vecinas, lo cual aumenta el contraste y afina la percepción sensorial.'
      ],
      foco:[
        'Postsináptica = cambia el voltaje de la célula receptora. Presináptica = reduce la liberación de transmisor desde el terminal. Es una diferencia de examen muy frecuente.'
      ]
    },
    {
      t:'Aplicaciones: fármacos, toxinas y enfermedad',
      p:[
        '*Consideración clínica*: la excitabilidad del cerebro depende de un balance entre excitación (glutamato) e inhibición (GABA). Las benzodiazepinas y los barbitúricos potencian el receptor GABA-A: las primeras aumentan la frecuencia de apertura del canal de cloruro y los segundos su tiempo de apertura, de modo que aumenta la inhibición y aparecen sedación, ansiolisis y efecto anticonvulsivante. El alcohol actúa también sobre este sistema, y por eso se potencia peligrosamente con los sedantes. En la epilepsia hay un desequilibrio a favor de la excitación que produce descargas sincronizadas.',
        'La estricnina bloquea los receptores de glicina y elimina la inhibición de la médula: los estímulos más pequeños desencadenan contracciones musculares violentas y convulsiones. La toxina del tétanos impide la liberación de GABA y glicina en las interneuronas, y produce un cuadro parecido: espasmo mantenido, trismo y "risa sardónica". Ambos ejemplos demuestran que, si desaparece la inhibición, el sistema nervioso se descontrola.',
        'Ejemplo trabajado: un paciente con ansiedad grave recibe una benzodiazepina intravenosa. Se calma y se adormece. Con el receptor GABA-A potenciado, entra más cloruro por cada molécula de GABA, la neurona se hiperpolariza y necesita mucho más estímulo para llegar al umbral. Cuando la dosis es excesiva, la inhibición alcanza a los centros respiratorios y aparece depresión respiratoria; el antídoto, el flumazenilo, bloquea el sitio de unión de las benzodiazepinas.'
      ],
      foco:[
        'Antes de un examen de farmacología del sistema nervioso, revisa este tema: casi todos los sedantes, anticonvulsivantes y anestésicos generales modifican el balance entre excitación (glutamato) e inhibición (GABA, glicina).'
      ]
    }
  ],
  ref:'Kandel, Principios de Neurociencia, cap. 12. Guyton y Hall, Tratado de Fisiología Médica, cap. 45.'
}

});
