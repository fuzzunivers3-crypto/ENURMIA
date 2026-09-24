/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 26)
   BIOQUIMICA II reescrita al estandar extenso. Mismas 12 claves
   de objeto que ya existian (en apuntes.js, -2.js y -5.js), asi
   que Object.assign las sobrescribe sin romper "Leer el tema".
   La cadena `sigue` de temas 2-12 YA estaba en el orden correcto
   del Temario -se conserva-, solo se cierra el cabo suelto final:
   'metabolismo-etanol' (ultimo tema de Bioquimica II) tenia
   sigue:null y ahora encadena hacia 'estructura-adn-cromosomas',
   el primer tema de Genetica Medica (la materia siguiente).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'metabolismo-glucogeno': {
  tema:'Metabolismo del glucógeno',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:13,
  idea:'El glucógeno es la forma en que el cuerpo guarda glucosa para usarla en cuestión de horas, y las mismas dos enzimas clave que lo construyen y lo desarman están reguladas hormonalmente de forma exactamente opuesta, para que nunca ocurran ambos procesos a la vez sin control.',
  claves:['glucógeno','glucogenólisis','glucogenogénesis','glucógeno fosforilasa','glucosa-6-fosfato'],
  sigue:'gluconeogenesis-regulacion-glucemia',
  secciones:[
    {
      t:'Glucogenogénesis y glucogenólisis: construir y desarmar',
      p:[
        'La glucogenogénesis es la síntesis de glucógeno a partir de glucosa, un proceso que ocurre principalmente en el hígado y el músculo cuando hay exceso de glucosa disponible (estado alimentado). La enzima clave y reguladora de esta vía es la glucógeno sintasa. La glucogenólisis es el proceso inverso, la degradación del glucógeno almacenado para liberar glucosa cuando el cuerpo la necesita (ayuno, ejercicio), y su enzima clave y reguladora es la glucógeno fosforilasa, que libera unidades de glucosa-1-fosfato del extremo de las cadenas de glucógeno, que luego se convierte en glucosa-6-fosfato.'
      ],
      foco:[
        'Glucogenogénesis (construir) = glucógeno sintasa. Glucogenólisis (desarmar) = glucógeno fosforilasa. Son procesos y enzimas opuestos, reguladas hormonalmente en direcciones opuestas para que nunca ocurran ambos sin control.'
      ]
    },
    {
      t:'Por qué solo el hígado puede liberar glucosa libre a la sangre',
      p:[
        'Tanto el hígado como el músculo almacenan glucógeno, pero solo el hígado puede liberar glucosa LIBRE hacia la sangre para mantener la glucemia sistémica, porque solo el hígado expresa la enzima glucosa-6-fosfatasa, que convierte la glucosa-6-fosfato (producida por la glucogenólisis) en glucosa libre, capaz de salir de la célula hacia la circulación. El músculo carece de esta enzima: su glucógeno almacenado solo puede usarse LOCALMENTE, dentro de la propia fibra muscular, para su propio metabolismo energético durante el ejercicio, pero nunca puede exportarse como glucosa libre para elevar la glucemia de otros tejidos.'
      ],
      foco:[
        '*Consideración clínica*: el glucógeno hepático mantiene la glucemia SISTÉMICA (por la glucosa-6-fosfatasa, ausente en el músculo). El glucógeno muscular es de uso EXCLUSIVAMENTE local, para el propio músculo -nunca contribuye a elevar la glucosa en sangre de otros órganos.'
      ]
    },
    {
      t:'Enfermedades de depósito de glucógeno: cuando falla una enzima específica',
      p:[
        'Las glucogenosis son un grupo de enfermedades hereditarias causadas por deficiencia de una enzima específica del metabolismo del glucógeno, cada una con un patrón clínico característico según el tejido y la función de la enzima faltante. La enfermedad de Von Gierke (deficiencia de glucosa-6-fosfatasa hepática) produce hipoglucemia grave en ayuno, porque el hígado no puede liberar glucosa libre pese a tener glucógeno almacenado en abundancia. La enfermedad de McArdle (deficiencia de glucógeno fosforilasa muscular) produce intolerancia al ejercicio, con calambres y fatiga precoz, porque el músculo no puede movilizar su propio glucógeno almacenado para obtener energía durante el esfuerzo.'
      ],
      foco:[
        'Von Gierke (glucosa-6-fosfatasa hepática) → hipoglucemia grave en ayuno. McArdle (fosforilasa muscular) → intolerancia al ejercicio. Cada glucogenosis refleja el papel específico del tejido donde falta la enzima.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'gluconeogenesis-regulacion-glucemia': {
  tema:'Gluconeogénesis y regulación de la glucemia',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:14,
  idea:'Cuando se agotan las reservas de glucógeno, el cuerpo puede fabricar glucosa nueva desde cero a partir de precursores no glucídicos -un proceso que comparte varios pasos con la glucólisis, pero que no es simplemente esa vía "al revés".',
  claves:['gluconeogénesis','piruvato carboxilasa','glucagón','insulina','ayuno'],
  sigue:'via-pentosas-fosfato',
  secciones:[
    {
      t:'Precursores de la gluconeogénesis',
      p:[
        'La gluconeogénesis sintetiza glucosa nueva a partir de precursores no glucídicos, principalmente en el hígado (y en menor medida el riñón), cuando las reservas de glucógeno se agotan (ayuno prolongado). Los tres precursores principales son: el lactato (producido por el músculo durante el ejercicio anaeróbico o por eritrocitos, que carecen de mitocondrias y siempre hacen glucólisis anaeróbica -el lactato vuelve al hígado y se reconvierte en glucosa, el llamado ciclo de Cori), el glicerol (liberado de la degradación de triglicéridos en el tejido adiposo) y los aminoácidos glucogénicos (liberados principalmente del músculo durante el ayuno prolongado, cuando el cuerpo cataboliza proteína muscular como fuente de esqueletos de carbono para fabricar glucosa).'
      ],
      foco:[
        'Tres precursores gluconeogénicos: lactato (vía ciclo de Cori), glicerol (de triglicéridos) y aminoácidos glucogénicos (de proteína muscular, en ayuno prolongado). Los ácidos grasos NO pueden convertirse en glucosa en el ser humano.'
      ]
    },
    {
      t:'Por qué la gluconeogénesis no es simplemente "glucólisis al revés"',
      p:[
        'Aunque la gluconeogénesis comparte varios pasos enzimáticos con la glucólisis (funcionando en sentido inverso), tres pasos de la glucólisis son irreversibles y requieren enzimas propias, distintas, para rodearlos en la dirección contraria: la conversión de piruvato a fosfoenolpiruvato requiere dos enzimas (piruvato carboxilasa, que convierte piruvato en oxalacetato dentro de la mitocondria, y fosfoenolpiruvato carboxiquinasa, que convierte oxalacetato en fosfoenolpiruvato), la conversión de fructosa-1,6-bisfosfato a fructosa-6-fosfato requiere la fructosa-1,6-bisfosfatasa, y la conversión final de glucosa-6-fosfato a glucosa libre requiere la glucosa-6-fosfatasa (la misma enzima, exclusivamente hepática, ya vista en el metabolismo del glucógeno). Estos "rodeos" enzimáticos son precisamente los puntos de regulación distintos entre ambas vías, lo que permite que la célula active una y reprima simultáneamente la otra, evitando un ciclo fútil de síntesis y degradación simultánea de glucosa.'
      ],
      foco:[
        'Tres pasos irreversibles de la glucólisis necesitan "rodeos" enzimáticos propios en la gluconeogénesis: piruvato→PEP (dos enzimas), fructosa-1,6-bisfosfato→fructosa-6-fosfato, y glucosa-6-fosfato→glucosa. Son los puntos de regulación independiente entre ambas vías.'
      ]
    },
    {
      t:'Glucagón e insulina: las hormonas que deciden entre construir y degradar glucosa',
      p:[
        'El glucagón, liberado por las células alfa del páncreas cuando la glucemia cae (ayuno), estimula tanto la glucogenólisis como la gluconeogénesis hepáticas, elevando la glucosa liberada a la sangre. La insulina, liberada por las células beta cuando la glucemia sube (estado alimentado), tiene el efecto contrario: inhibe la gluconeogénesis y la glucogenólisis, y estimula la glucogenogénesis y la utilización periférica de glucosa. Ambas hormonas actúan de forma antagónica sobre las mismas vías metabólicas, y su balance relativo (no solo el nivel absoluto de cada una) es lo que determina el estado metabólico predominante del hígado en un momento dado.'
      ],
      foco:[
        '*Consideración clínica*: glucagón = "tengo poca glucosa, hay que liberarla y fabricarla" (↑glucogenólisis, ↑gluconeogénesis). Insulina = "tengo suficiente glucosa, a guardarla" (↑glucogenogénesis, ↓gluconeogénesis). Son hormonas antagónicas sobre las mismas vías.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'via-pentosas-fosfato': {
  tema:'Vía de las pentosas fosfato',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:12,
  idea:'La vía de las pentosas fosfato no produce ATP: produce dos moléculas que la célula necesita para tareas completamente distintas -NADPH para defenderse del estrés oxidativo y sintetizar lípidos, y ribosa para fabricar ácidos nucleicos.',
  claves:['pentosas fosfato','NADPH','glucosa-6-fosfato deshidrogenasa','ribosa'],
  sigue:'beta-oxidacion-cuerpos-cetonicos',
  secciones:[
    {
      t:'Dos productos, dos funciones completamente distintas',
      p:[
        'La vía de las pentosas fosfato, una ruta alternativa al metabolismo de la glucosa-6-fosfato (distinta de la glucólisis), tiene una fase oxidativa que produce NADPH (un cofactor reductor usado en biosíntesis y en defensa antioxidante, distinto del NADH generado por la glucólisis y el ciclo de Krebs, que se usa para generar ATP) y una fase no oxidativa que produce ribosa-5-fosfato (el azúcar de cinco carbonos necesario para sintetizar nucleótidos, y por tanto ADN y ARN). Según las necesidades de cada célula en un momento dado, la vía puede regularse para producir predominantemente NADPH, predominantemente ribosa, o ambos en proporción equilibrada -tiene una flexibilidad metabólica considerable en ese sentido.'
      ],
      foco:[
        'NADPH (fase oxidativa) = biosíntesis reductora y defensa antioxidante. Ribosa-5-fosfato (fase no oxidativa) = síntesis de nucleótidos. Son dos productos con funciones completamente distintas, no intercambiables entre sí.'
      ]
    },
    {
      t:'NADPH: el cofactor reductor de la biosíntesis y la defensa antioxidante',
      p:[
        'El NADPH tiene dos usos principales, bioquímicamente relacionados pero clínicamente distintos: como poder reductor para reacciones de biosíntesis (síntesis de ácidos grasos y colesterol, donde se necesitan grandes cantidades de NADPH para las reacciones de reducción), y como cofactor esencial para regenerar el glutatión reducido, el principal sistema de defensa antioxidante intracelular contra el estrés oxidativo, que protege a las proteínas, lípidos y ácido nucleicos del daño oxidativo, y en el eritrocito, específicamente, protege a la membrana celular y a la hemoglobina del daño por especies reactivas de oxígeno.'
      ],
      foco:[
        'El NADPH regenera el glutatión reducido, el principal sistema antioxidante de la célula. En el eritrocito, esto es especialmente crítico porque protege a la membrana y a la hemoglobina del daño oxidativo constante.'
      ]
    },
    {
      t:'Deficiencia de glucosa-6-fosfato deshidrogenasa: hemólisis inducida por oxidantes',
      p:[
        'La glucosa-6-fosfato deshidrogenasa es la enzima limitante y reguladora de la fase oxidativa de la vía de las pentosas fosfato, la que produce NADPH. Su deficiencia (un defecto genético ligado al cromosoma X, relativamente frecuente en ciertas poblaciones, con cierta ventaja selectiva parcial frente a la malaria) reduce la capacidad del eritrocito -una célula que depende casi exclusivamente de esta vía para su NADPH, al carecer de mitocondrias y de otras fuentes alternativas- de regenerar glutatión reducido y defenderse del estrés oxidativo. Ante la exposición a ciertos fármacos oxidantes (como la primaquina o algunas sulfonamidas), infecciones, o incluso la ingesta de habas (favismo), los eritrocitos de estos pacientes sufren daño oxidativo y hemólisis aguda, porque no pueden proteger adecuadamente su membrana y su hemoglobina.'
      ],
      foco:[
        '*Consideración clínica*: la deficiencia de glucosa-6-fosfato deshidrogenasa predispone a hemólisis aguda inducida por oxidantes (fármacos como primaquina, infecciones, habas) precisamente porque el eritrocito depende casi exclusivamente de esta vía para generar el NADPH que lo protege del daño oxidativo.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'beta-oxidacion-cuerpos-cetonicos': {
  tema:'Beta-oxidación y cuerpos cetónicos',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:14,
  idea:'En el ayuno prolongado, el cuerpo convierte el exceso de acetil-CoA derivado de la grasa en cuerpos cetónicos -un combustible alternativo capaz, a diferencia de los ácidos grasos, de cruzar la barrera hematoencefálica y alimentar al cerebro cuando la glucosa escasea.',
  claves:['beta-oxidación','carnitina','acetil-CoA','cuerpo cetónico','cetogénesis'],
  sigue:'sintesis-acidos-grasos-colesterol',
  secciones:[
    {
      t:'La lanzadera de carnitina: cómo entra el ácido graso a la mitocondria',
      p:[
        'La beta-oxidación de los ácidos grasos ocurre dentro de la mitocondria, pero los ácidos grasos de cadena larga no pueden atravesar la membrana mitocondrial interna directamente. Necesitan la lanzadera de carnitina: la carnitina palmitoiltransferasa I (CPT-I), en la membrana mitocondrial externa, transfiere el grupo acilo graso a la carnitina, formando acilcarnitina, que sí puede cruzar hacia la matriz mitocondrial (con ayuda de un transportador específico); una vez dentro, la carnitina palmitoiltransferasa II (CPT-II) revierte la reacción, liberando de nuevo al ácido graso (ahora dentro de la mitocondria) para que comience la beta-oxidación. La CPT-I es el punto de regulación clave de toda la vía: es inhibida por el malonil-CoA, el primer intermediario de la síntesis de ácidos grasos, lo que asegura que la célula no esté simultáneamente sintetizando Y degradando ácidos grasos sin control.'
      ],
      foco:[
        'CPT-I es el paso limitante de la beta-oxidación, inhibida por malonil-CoA (el intermediario inicial de la síntesis de grasa) -un mecanismo elegante que impide que síntesis y degradación de ácidos grasos ocurran a la vez sin control.'
      ]
    },
    {
      t:'Beta-oxidación: acortar la cadena de dos en dos carbonos',
      p:[
        'La beta-oxidación es un ciclo repetitivo de cuatro reacciones que, en cada vuelta, acorta la cadena del ácido graso en dos carbonos, liberando una molécula de acetil-CoA por cada vuelta, además de NADH y FADH2 (que alimentan directamente a la cadena respiratoria para generar ATP). Un ácido graso de cadena larga típica (16 carbonos, como el ácido palmítico) requiere siete vueltas del ciclo para descomponerse completamente en ocho moléculas de acetil-CoA, generando en total una cantidad de ATP considerablemente mayor que la que produce el metabolismo completo de una molécula de glucosa -razón por la que la grasa es el combustible más eficiente en términos de energía almacenada por gramo.'
      ],
      foco:[
        'Cada vuelta de la beta-oxidación acorta la cadena en 2 carbonos y libera 1 acetil-CoA + NADH + FADH2. La grasa rinde mucha más energía por gramo que la glucosa, precisamente por este proceso repetitivo altamente eficiente.'
      ]
    },
    {
      t:'Cetogénesis: qué hace el hígado con el exceso de acetil-CoA en el ayuno',
      p:[
        'Durante el ayuno prolongado, la beta-oxidación hepática genera grandes cantidades de acetil-CoA, más de lo que el ciclo de Krebs puede procesar de inmediato (porque el oxalacetato, necesario para que el acetil-CoA entre al ciclo de Krebs, está siendo desviado hacia la gluconeogénesis, ya vista en el tema anterior). Ese exceso de acetil-CoA se convierte en cuerpos cetónicos (acetoacetato y beta-hidroxibutirato, principalmente) en el hígado, que los libera a la sangre para que otros tejidos los usen como combustible alternativo. La ventaja crucial de los cuerpos cetónicos, a diferencia de los ácidos grasos libres, es que SÍ pueden atravesar la barrera hematoencefálica, así que el cerebro -que normalmente depende casi exclusivamente de glucosa- puede adaptarse a usar cuerpos cetónicos como combustible alternativo durante el ayuno prolongado, reduciendo su demanda de glucosa y, con ella, la necesidad de degradar proteína muscular para la gluconeogénesis.'
      ],
      foco:[
        '*Consideración clínica*: los cuerpos cetónicos (no los ácidos grasos libres) SÍ cruzan la barrera hematoencefálica -esa es la razón evolutiva de su existencia: darle al cerebro un combustible alternativo a la glucosa durante el ayuno prolongado, ahorrando proteína muscular.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'sintesis-acidos-grasos-colesterol': {
  tema:'Síntesis de ácidos grasos y colesterol',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:13,
  idea:'La síntesis de ácidos grasos y de colesterol comparten un patrón regulatorio parecido: cada una tiene un único paso limitante, catalizado por una enzima que es precisamente el blanco de dos de los grupos de fármacos más recetados en medicina.',
  claves:['lipogénesis','acetil-CoA carboxilasa','HMG-CoA reductasa','colesterol','malonil-CoA'],
  sigue:'metabolismo-aminoacidos-urea',
  secciones:[
    {
      t:'Acetil-CoA carboxilasa: el paso limitante de la síntesis de ácidos grasos',
      p:[
        'La síntesis de ácidos grasos (lipogénesis) ocurre en el citosol (a diferencia de la beta-oxidación, que es mitocondrial), a partir de acetil-CoA, y su paso limitante y regulador es la conversión de acetil-CoA a malonil-CoA, catalizada por la acetil-CoA carboxilasa. Esta enzima es activada por la insulina y por la propia acumulación de citrato (que indica abundancia de acetil-CoA y energía celular), e inhibida por el glucagón y por los ácidos grasos de cadena larga (retroalimentación negativa del propio producto final de la vía). El malonil-CoA generado no solo es el precursor directo de la síntesis, sino que, como ya se mencionó, también inhibe a la CPT-I, evitando que la célula sintetice y degrade grasa simultáneamente.'
      ],
      foco:[
        'Acetil-CoA carboxilasa = paso limitante de la síntesis de ácidos grasos, activada por insulina, inhibida por glucagón. Su producto (malonil-CoA) también apaga la beta-oxidación (vía inhibición de CPT-I) -un único intermediario coordinando dos vías opuestas.'
      ]
    },
    {
      t:'HMG-CoA reductasa: el paso limitante de la síntesis de colesterol, y el blanco de las estatinas',
      p:[
        'La síntesis de colesterol comienza también a partir de acetil-CoA, y su paso limitante y regulador es la conversión de HMG-CoA a mevalonato, catalizada por la HMG-CoA reductasa. Esta enzima está regulada por retroalimentación negativa por el propio colesterol (cuando los niveles intracelulares de colesterol son altos, la enzima se inhibe y además se degrada más rápidamente), y es precisamente el blanco farmacológico de las estatinas, que inhiben competitivamente a la HMG-CoA reductasa, reduciendo la síntesis endógena de colesterol y, como consecuencia, aumentando la expresión de receptores de LDL en la superficie hepática (para captar más colesterol de la sangre y compensar la menor síntesis interna), lo que reduce el colesterol LDL circulante -el mecanismo completo detrás de uno de los fármacos más recetados en medicina.'
      ],
      foco:[
        '*Consideración clínica*: las estatinas inhiben la HMG-CoA reductasa, reduciendo la síntesis hepática de colesterol; el hígado compensa aumentando receptores de LDL, lo que baja el colesterol LDL circulante -ese es el mecanismo completo, no solo "bloquean la producción de colesterol".'
      ]
    },
    {
      t:'Coordinación regulatoria: insulina como interruptor maestro de la lipogénesis',
      p:[
        'Tanto la acetil-CoA carboxilasa como (de forma menos directa) la HMG-CoA reductasa están favorecidas por el estado alimentado, cuando la insulina está alta: en ese contexto, el cuerpo tiene exceso de sustratos energéticos (glucosa, acetil-CoA) y "decide" almacenar el excedente como grasa y mantener la producción de colesterol para las necesidades de membrana y síntesis hormonal. En el ayuno, con glucagón predominante, ambas vías de síntesis se reprimen, y el metabolismo se orienta hacia la movilización y oxidación de las reservas ya existentes (beta-oxidación, cetogénesis, gluconeogénesis) en lugar de seguir construyendo nuevas reservas.'
      ],
      foco:[
        'Insulina alta (estado alimentado) = favorece la síntesis de ácidos grasos y colesterol. Glucagón alto (ayuno) = reprime ambas síntesis y favorece la movilización de reservas ya existentes. El mismo patrón hormonal antagónico que regula el glucógeno se repite aquí.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'metabolismo-aminoacidos-urea': {
  tema:'Metabolismo de aminoácidos y ciclo de la urea',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:13,
  idea:'El nitrógeno de los aminoácidos que el cuerpo no necesita se convierte en amoniaco, una sustancia tóxica para el sistema nervioso -y el ciclo de la urea es, en esencia, el mecanismo hepático que lo convierte en una forma segura de eliminar.',
  claves:['transaminación','desaminación','amoniaco','ciclo de la urea','glutamina'],
  sigue:'metabolismo-nucleotidos',
  secciones:[
    {
      t:'Transaminación y desaminación: dos pasos para liberar el grupo amino',
      p:[
        'La transaminación es la transferencia del grupo amino de un aminoácido a un cetoácido (típicamente alfa-cetoglutarato), catalizada por transaminasas (como ALT y AST, ampliamente usadas como marcadores de daño hepático), produciendo un nuevo aminoácido (glutamato, en la mayoría de los casos) y un nuevo cetoácido -este paso, por sí solo, no libera amoniaco libre, solo lo transfiere entre moléculas. La desaminación oxidativa, catalizada principalmente por la glutamato deshidrogenasa (que actúa específicamente sobre el glutamato, el punto de convergencia de la mayoría de las transaminaciones), sí libera amoniaco libre (NH3), junto con la regeneración de alfa-cetoglutarato. La combinación de ambos pasos es lo que permite canalizar el nitrógeno de CUALQUIER aminoácido hacia el glutamato, y de ahí liberarlo como amoniaco en un solo punto de convergencia metabólica.'
      ],
      foco:[
        'Transaminación = transfiere el grupo amino (no libera amoniaco libre). Desaminación oxidativa (de glutamato) = SÍ libera amoniaco libre. Casi todo el nitrógeno de los aminoácidos converge en el glutamato antes de liberarse como amoniaco.'
      ]
    },
    {
      t:'El ciclo de la urea: detoxificar el amoniaco en el hígado',
      p:[
        'El amoniaco es tóxico, especialmente para el sistema nervioso central, así que el hígado lo convierte en urea, una molécula mucho menos tóxica y fácilmente excretable por el riñón, mediante el ciclo de la urea. El paso inicial y limitante del ciclo es la formación de carbamoil fosfato a partir de amoniaco y CO2, catalizada por la carbamoil fosfato sintetasa I (mitocondrial, distinta de la II, que participa en la síntesis de pirimidinas), regulada positivamente por el N-acetilglutamato (que a su vez aumenta cuando hay exceso de aminoácidos disponibles, señalizando que hay más nitrógeno del que hace falta eliminar). El ciclo completo incorpora dos átomos de nitrógeno por cada molécula de urea formada -uno proveniente directamente del amoniaco, y otro proveniente del aspartato, un segundo punto de entrada de nitrógeno al ciclo.'
      ],
      foco:[
        'El ciclo de la urea incorpora DOS átomos de nitrógeno por urea: uno del amoniaco (vía carbamoil fosfato) y otro del aspartato. No es un ciclo que solo procese el amoniaco directamente; el aspartato es una segunda vía de entrada de nitrógeno.'
      ]
    },
    {
      t:'Defectos del ciclo de la urea e hiperamonemia',
      p:[
        'Un defecto genético en cualquiera de las enzimas del ciclo de la urea (la más frecuente es la deficiencia de ornitina transcarbamilasa, con herencia ligada al X) impide la conversión eficiente de amoniaco en urea, produciendo hiperamonemia: acumulación de amoniaco en sangre, con toxicidad principalmente neurológica (letargia, vómitos, convulsiones, coma, en casos graves del recién nacido; y encefalopatía en casos más leves o de aparición tardía). El manejo agudo se orienta a reducir rápidamente el amoniaco circulante (con medidas como restricción proteica, fármacos que proporcionan vías alternativas de eliminación de nitrógeno, y en casos graves diálisis), mientras que el manejo crónico depende de restricción proteica dietética sostenida y suplementación de los aminoácidos esenciales que el ciclo defectuoso ya no puede sintetizar adecuadamente.'
      ],
      foco:[
        '*Consideración clínica*: la hiperamonemia por defecto del ciclo de la urea es una urgencia neurológica en el recién nacido -letargia, vómitos y convulsiones sin causa infecciosa clara obligan a medir amoniaco sérico, sobre todo si empeora con la alimentación proteica.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'metabolismo-nucleotidos': {
  tema:'Metabolismo de nucleótidos',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:12,
  idea:'Purinas y pirimidinas se degradan por vías completamente distintas, y esa diferencia es la razón exacta de por qué solo el exceso de purinas -no de pirimidinas- produce gota.',
  claves:['purina','pirimidina','ácido úrico','salvamento','gota'],
  sigue:'integracion-metabolica-hormonas',
  secciones:[
    {
      t:'Vía de novo contra vía de salvamento',
      p:[
        'Los nucleótidos (las unidades básicas del ADN y el ARN) pueden sintetizarse por dos vías: la vía de novo, que construye las bases purínicas y pirimidínicas desde cero a partir de precursores simples (aminoácidos, CO2, derivados del folato), un proceso metabólicamente costoso en energía; y la vía de salvamento (o recuperación), que reutiliza bases y nucleósidos libres ya existentes (provenientes del recambio normal de ácidos nucleicos celulares), un proceso mucho más económico energéticamente. La enzima clave de la vía de salvamento de purinas es la hipoxantina-guanina fosforribosiltransferasa (HGPRT); su deficiencia completa (síndrome de Lesch-Nyhan, ligado al X) obliga a las células a depender excesivamente de la vía de novo, mucho más costosa, y además hace que se acumule un exceso de precursores que terminan degradándose a ácido úrico, produciendo hiperuricemia grave desde la infancia, junto con manifestaciones neurológicas características (automutilación, coreoatetosis, discapacidad intelectual).'
      ],
      foco:[
        'Vía de novo = síntesis desde cero, costosa en energía. Vía de salvamento (HGPRT para purinas) = reutiliza bases libres, económica. Su deficiencia total (Lesch-Nyhan) fuerza dependencia de la vía de novo Y produce hiperuricemia.'
      ]
    },
    {
      t:'Por qué solo las purinas producen ácido úrico, no las pirimidinas',
      p:[
        'La degradación de las purinas (adenina y guanina) termina en ácido úrico, una molécula poco soluble en agua, que en concentraciones elevadas puede precipitar en forma de cristales, sobre todo en articulaciones periféricas más frías (como el dedo gordo del pie), causando gota, o en el riñón, causando nefrolitiasis úrica. La degradación de las pirimidinas (citosina, timina, uracilo), en cambio, sigue una vía metabólica completamente distinta, que termina en productos solubles como beta-alanina y beta-aminoisobutirato, sin generar ácido úrico ni ningún producto de baja solubilidad equivalente -por eso el exceso de recambio de pirimidinas nunca produce gota, una asimetría metabólica que explica por qué la gota es específicamente una enfermedad del metabolismo purínico.'
      ],
      foco:[
        'Solo las PURINAS se degradan a ácido úrico (poco soluble, causa gota). Las PIRIMIDINAS se degradan a productos solubles distintos, sin relación con la gota. Es una asimetría metabólica real, no una simplificación.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'integracion-metabolica-hormonas': {
  tema:'Integración metabólica y hormonas',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:13,
  idea:'Ninguna vía metabólica funciona aislada: el estado alimentado y el ayuno son dos programas hormonales coordinados que activan un conjunto completo de vías a la vez y reprimen otro conjunto completo, y entender ese patrón de "todo o nada" es más útil que memorizar cada vía por separado.',
  claves:['integración metabólica','insulina','glucagón','cortisol','estado alimentado'],
  sigue:'vitaminas-coenzimas',
  secciones:[
    {
      t:'El estado alimentado: el programa hormonal de la insulina',
      p:[
        'Poco después de una comida, con la glucemia elevada, la insulina domina el panorama hormonal, activando de forma coordinada: la captación de glucosa por el músculo y el tejido adiposo, la glucogenogénesis hepática y muscular, la lipogénesis (síntesis de ácidos grasos, ya vista), la síntesis de proteínas, y reprimiendo simultáneamente la glucogenólisis, la gluconeogénesis, la beta-oxidación y la proteólisis. Es un programa metabólico coherente de "almacenar el excedente": todas las vías anabólicas (de construcción) se activan a la vez, y todas las catabólicas (de degradación) se reprimen a la vez.'
      ],
      foco:[
        'Estado alimentado (insulina alta) = anabolismo generalizado: ↑glucogenogénesis, ↑lipogénesis, ↑síntesis de proteínas, TODO reprimiendo simultáneamente al catabolismo (glucogenólisis, gluconeogénesis, beta-oxidación, proteólisis).'
      ]
    },
    {
      t:'El ayuno: el programa hormonal del glucagón (y, más tarde, el cortisol)',
      p:[
        'En el ayuno, con la glucemia cayendo, el glucagón toma el control, activando la glucogenólisis hepática (las primeras horas), luego la gluconeogénesis (a medida que el glucógeno se agota), la beta-oxidación y la cetogénesis (liberando ácidos grasos del tejido adiposo y generando cuerpos cetónicos), y reprimiendo la lipogénesis y la glucogenogénesis. En el ayuno más prolongado, el cortisol (una hormona de estrés metabólico, no solo de estrés agudo) se suma al panorama, promoviendo la proteólisis muscular (liberando aminoácidos como sustrato adicional para la gluconeogénesis) y potenciando algunos de los efectos del glucagón, reflejando la gravedad creciente de la situación metabólica a medida que se prolonga la falta de ingesta.'
      ],
      foco:[
        'Ayuno (glucagón, y luego cortisol) = catabolismo generalizado: ↑glucogenólisis → ↑gluconeogénesis → ↑beta-oxidación/cetogénesis, con el cortisol sumándose en el ayuno prolongado para aportar aminoácidos musculares vía proteólisis.'
      ]
    },
    {
      t:'Por qué pensar en "programas" completos ayuda más que memorizar vías sueltas',
      p:[
        'Entender el metabolismo como dos programas hormonales coordinados y antagónicos -en vez de una lista de vías aisladas cada una con su propia regulación- permite predecir el comportamiento de cualquier vía nueva con solo saber si ocurre en estado alimentado o en ayuno: si es una vía anabólica (de síntesis), estará activada por insulina y reprimida por glucagón; si es catabólica (de degradación), al revés. Esta perspectiva integrada es también la que explica por qué ciertos estados patológicos (como la diabetes tipo 1, con ausencia casi total de insulina) simulan un estado de "ayuno perpetuo" metabólico incluso con el paciente comiendo con normalidad: sin insulina, el cuerpo activa el programa catabólico de forma descontrolada -glucogenólisis, gluconeogénesis, lipólisis, cetogénesis excesiva- pese a que hay glucosa disponible en la sangre, la causa metabólica de la cetoacidosis diabética.'
      ],
      foco:[
        '*Consideración clínica*: en la diabetes tipo 1 sin tratamiento, la ausencia de insulina simula metabólicamente un "ayuno perpetuo" aunque el paciente esté comiendo -el cuerpo activa sin control el programa catabólico completo (lipólisis, cetogénesis), la base de la cetoacidosis diabética.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'vitaminas-coenzimas': {
  tema:'Vitaminas y coenzimas',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:13,
  idea:'Casi todas las vitaminas hidrosolubles del complejo B funcionan como coenzimas de reacciones metabólicas específicas, y saber qué coenzima falta explica directamente por qué la deficiencia de cada vitamina produce el cuadro clínico particular que produce, en vez de un síntoma genérico de "desnutrición".',
  claves:['vitamina','coenzima','hidrosoluble','liposoluble','deficiencia'],
  sigue:'metabolismo-hemo-bilirrubina',
  secciones:[
    {
      t:'Hidrosolubles contra liposolubles: dos comportamientos farmacocinéticos distintos',
      p:[
        'Las vitaminas hidrosolubles (complejo B y vitamina C) no se almacenan en cantidades significativas en el cuerpo (con la excepción parcial de la B12, almacenada varios años en el hígado): su exceso se elimina fácilmente por la orina, así que la toxicidad por exceso es rara, pero la deficiencia puede desarrollarse relativamente rápido si la ingesta se interrumpe. Las vitaminas liposolubles (A, D, E, K) sí se almacenan en el tejido adiposo y el hígado en cantidades considerables, así que la deficiencia tarda más en manifestarse tras una ingesta insuficiente, pero el riesgo de toxicidad por exceso (hipervitaminosis) es real y clínicamente relevante, especialmente con suplementación excesiva y sostenida.'
      ],
      foco:[
        'Hidrosolubles = poco almacenamiento, deficiencia rápida, toxicidad rara. Liposolubles (A, D, E, K) = almacenamiento significativo, deficiencia lenta, toxicidad real por exceso -comportamientos farmacocinéticos opuestos con implicaciones clínicas distintas.'
      ]
    },
    {
      t:'Coenzimas del complejo B y sus deficiencias características',
      p:[
        'La tiamina (B1) es coenzima de reacciones de descarboxilación oxidativa (como el complejo piruvato deshidrogenasa, el paso que conecta glucólisis con el ciclo de Krebs); su deficiencia produce beriberi y el síndrome de Wernicke-Korsakoff (frecuente en el alcoholismo crónico, por mala nutrición y por el propio metabolismo del etanol, que consume tiamina). La niacina (B3) forma parte de NAD+ y NADP+, cofactores centrales del metabolismo energético y de la biosíntesis reductora; su deficiencia severa produce pelagra, con la clásica tríada de dermatitis, diarrea y demencia. La piridoxina (B6) es coenzima esencial de las reacciones de transaminación (ya vistas en el metabolismo de aminoácidos); su deficiencia puede producir anemia sideroblástica y neuropatía periférica. La cobalamina (B12) y el folato (B9) son ambos necesarios para la síntesis de ADN (vía la regeneración de tetrahidrofolato); su deficiencia produce anemia megaloblástica, aunque solo la deficiencia de B12 produce además manifestaciones neurológicas (degeneración combinada subaguda de la médula espinal), porque la B12 tiene funciones adicionales independientes del folato.'
      ],
      foco:[
        'Tiamina (B1) → beriberi, Wernicke-Korsakoff. Niacina (B3) → pelagra (dermatitis, diarrea, demencia). Piridoxina (B6) → anemia sideroblástica, neuropatía. B12 y folato → anemia megaloblástica, pero SOLO B12 da manifestaciones neurológicas.'
      ]
    },
    {
      t:'Por qué solo la deficiencia de B12 (no de folato) causa síntomas neurológicos',
      p:[
        'Tanto la deficiencia de B12 como la de folato alteran la síntesis de ADN (por su papel compartido en el metabolismo del tetrahidrofolato), produciendo el mismo tipo de anemia megaloblástica, indistinguible entre sí solo con el hemograma. Sin embargo, la B12 tiene una segunda función bioquímica independiente, como coenzima en la conversión de metilmalonil-CoA a succinil-CoA, una reacción necesaria para el metabolismo normal de la mielina; el folato no participa en esta reacción. Por eso, solo la deficiencia de B12 produce manifestaciones neurológicas (por acumulación de metilmalonil-CoA y alteración de la síntesis de mielina), mientras que la deficiencia de folato, aunque produce la misma anemia, no las produce -una distinción clínica relevante, porque tratar erróneamente con folato una deficiencia real de B12 puede corregir la anemia (enmascarando el diagnóstico) mientras el daño neurológico progresa sin tratamiento.'
      ],
      foco:[
        '*Consideración clínica*: nunca tratar una anemia megaloblástica con folato sin haber descartado antes deficiencia de B12 -el folato corrige la anemia y "enmascara" el problema, pero el daño neurológico de la deficiencia de B12 seguiría progresando sin el tratamiento correcto.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'metabolismo-hemo-bilirrubina': {
  tema:'Metabolismo del hemo y bilirrubina',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:13,
  idea:'La bilirrubina cambia de forma química a mitad de camino entre su origen y su eliminación, y saber en qué punto de ese camino se acumula -antes o después del hígado- es lo que permite distinguir, con un simple perfil de bilirrubinas, entre las tres grandes categorías de ictericia.',
  claves:['hemo','bilirrubina indirecta','bilirrubina directa','ictericia','porfiria'],
  sigue:'lipoproteinas-transporte-lipidos',
  secciones:[
    {
      t:'De la degradación del hemo a la bilirrubina indirecta',
      p:[
        'Cuando los eritrocitos envejecidos se degradan (principalmente en el bazo), el grupo hemo de la hemoglobina se libera y se convierte, mediante la enzima hemo oxigenasa, en biliverdina, y luego en bilirrubina no conjugada (también llamada bilirrubina indirecta). Esta forma de bilirrubina es liposoluble y prácticamente insoluble en agua, así que viaja por la sangre unida a la albúmina para poder transportarse hasta el hígado. Precisamente por ser liposoluble, la bilirrubina indirecta puede atravesar la barrera hematoencefálica cuando está muy elevada, lo cual es la base del riesgo de kernícterus (daño neurológico por depósito de bilirrubina indirecta en los núcleos basales) en la ictericia neonatal grave no tratada.'
      ],
      foco:[
        'Bilirrubina INDIRECTA (no conjugada) = liposoluble, viaja unida a albúmina, puede cruzar la barrera hematoencefálica (riesgo de kernícterus si está muy elevada, especialmente en el recién nacido).'
      ]
    },
    {
      t:'Conjugación hepática: de indirecta a directa',
      p:[
        'En el hígado, la enzima UDP-glucuroniltransferasa conjuga a la bilirrubina indirecta con ácido glucurónico, produciendo bilirrubina conjugada (o bilirrubina directa), que ahora sí es hidrosoluble y puede excretarse por la bilis hacia el intestino. En el intestino, las bacterias transforman parte de la bilirrubina en urobilinógeno, del cual una porción se reabsorbe hacia la circulación (y se elimina por el riñón, dándole color a la orina) y otra porción se transforma en estercobilina, que le da a las heces su color característico -de ahí que la obstrucción completa del flujo biliar produzca heces pálidas (acólicas), por ausencia de bilirrubina llegando al intestino.',
        'El síndrome de Gilbert, una condición benigna y relativamente frecuente, se debe a una actividad reducida (no ausente) de la UDP-glucuroniltransferasa, produciendo elevaciones leves e intermitentes de bilirrubina indirecta, típicamente exacerbadas por ayuno o estrés, sin ninguna consecuencia clínica significativa más allá de la ictericia leve ocasional -es importante reconocerlo para no sobreinvestigar innecesariamente a estos pacientes.'
      ],
      foco:[
        'Bilirrubina DIRECTA (conjugada) = hidrosoluble, se excreta por la bilis al intestino. La conjugación (por UDP-glucuroniltransferasa) es el paso que convierte la forma tóxica/liposoluble en la forma segura/hidrosoluble.'
      ]
    },
    {
      t:'Usar el perfil de bilirrubinas para clasificar una ictericia',
      p:[
        'El patrón de elevación de bilirrubina (predominio indirecto o predominio directo) orienta directamente hacia el mecanismo de la ictericia. Predominio de bilirrubina INDIRECTA sugiere un problema PREHEPÁTICO (producción excesiva, como en la hemólisis) o una falla de conjugación hepática (como el síndrome de Gilbert), porque el hígado todavía no ha tenido oportunidad de conjugarla. Predominio de bilirrubina DIRECTA sugiere un problema POSTHEPÁTICO (obstrucción del flujo biliar, como un cálculo en el colédoco) o hepatocelular con falla de excreción, porque el hígado ya conjugó la bilirrubina pero no logra excretarla eficientemente hacia el intestino. Esta simple regla -indirecta apunta hacia atrás del hígado, directa apunta hacia adelante del hígado (o a un problema de excreción)- organiza gran parte del diagnóstico diferencial de la ictericia.'
      ],
      foco:[
        '*Consideración clínica*: predominio de bilirrubina INDIRECTA → causa prehepática (hemólisis) o de conjugación. Predominio de bilirrubina DIRECTA → causa posthepática (obstrucción biliar) o de excreción hepatocelular. El perfil de bilirrubinas localiza el problema antes de pedir más estudios.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'lipoproteinas-transporte-lipidos': {
  tema:'Lipoproteínas y transporte de lípidos',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:13,
  idea:'Los lípidos son insolubles en un medio acuoso como la sangre, así que el cuerpo los empaqueta en partículas especializadas -las lipoproteínas- cuya densidad y composición reflejan directamente su función y su origen, dietético o hepático.',
  claves:['quilomicrón','LDL','HDL','VLDL','apolipoproteína'],
  sigue:'metabolismo-etanol',
  secciones:[
    {
      t:'Por qué existen distintos tipos de lipoproteínas',
      p:[
        'Las lipoproteínas son partículas esféricas con un núcleo hidrofóbico (triglicéridos y ésteres de colesterol) rodeado de una capa externa anfipática (fosfolípidos, colesterol libre y apolipoproteínas específicas), que permite transportar lípidos insolubles a través de un medio acuoso como el plasma. Se clasifican por su densidad, que es inversamente proporcional a su contenido de triglicéridos respecto a proteína: los quilomicrones (la menos densa, con más triglicéridos, de origen intestinal, transportando grasa de la dieta) hasta la HDL (la más densa, con más proteína, de origen hepático e intestinal). Cada tipo de lipoproteína tiene un origen, una función y un destino metabólico distintos, y sus apolipoproteínas específicas funcionan como "etiquetas" que determinan cómo la célula reconoce y procesa a cada partícula.'
      ],
      foco:[
        'La densidad de una lipoproteína es INVERSAMENTE proporcional a su contenido de triglicéridos: quilomicrones (más grasa, menos densos) → VLDL → LDL → HDL (menos grasa, más proteína, más densa).'
      ]
    },
    {
      t:'El recorrido de la grasa dietética: quilomicrones',
      p:[
        'Los quilomicrones se forman en el enterocito a partir de la grasa absorbida de la dieta, viajan primero por el sistema linfático (no directamente por la sangre, a diferencia de la mayoría de los nutrientes absorbidos) y entran a la circulación sanguínea a través del conducto torácico (ya visto en Anatomía II). En los capilares de tejidos periféricos (especialmente músculo y tejido adiposo), la enzima lipoproteína lipasa, activada por la apolipoproteína C-II presente en la superficie del quilomicrón, hidroliza los triglicéridos que transporta, liberando ácidos grasos para ser captados y usados o almacenados por esos tejidos. El quilomicrón remanente (ya con menos triglicéridos) es finalmente captado y eliminado por el hígado.'
      ],
      foco:[
        'Los quilomicrones son la ÚNICA lipoproteína que viaja primero por el sistema linfático antes de entrar a la sangre -reflejo directo de su origen en la absorción intestinal de grasa dietética.'
      ]
    },
    {
      t:'LDL contra HDL: dos direcciones opuestas del transporte de colesterol',
      p:[
        'La LDL (lipoproteína de baja densidad) es el principal transportador de colesterol DESDE el hígado HACIA los tejidos periféricos, reconocida por el receptor de LDL a través de su apolipoproteína B-100; su acumulación excesiva en el plasma (colesterol "malo") se asocia a depósito de colesterol en la pared arterial y aterosclerosis. La HDL (lipoproteína de alta densidad) hace el recorrido inverso: recoge el colesterol excedente de los tejidos periféricos y lo transporta DE VUELTA al hígado (el llamado transporte reverso de colesterol), donde puede eliminarse por la bilis; por eso se le llama coloquialmente colesterol "bueno", y niveles más altos de HDL se asocian a menor riesgo cardiovascular. Ambas lipoproteínas transportan colesterol, pero en direcciones funcionalmente opuestas -esa dirección del transporte, no el colesterol en sí, es lo que determina si es protector o dañino.'
      ],
      foco:[
        '*Consideración clínica*: LDL = colesterol del hígado hacia los tejidos (dirección hacia adelante, riesgo aterogénico). HDL = colesterol de los tejidos de vuelta al hígado (transporte reverso, protector). La diferencia no está en el colesterol en sí, sino en la dirección del transporte.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
},

'metabolismo-etanol': {
  tema:'Metabolismo del etanol',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:12,
  idea:'El metabolismo del etanol satura al hígado con un solo producto -NADH en exceso- que interfiere de rebote con varias vías metabólicas hepáticas distintas, y esa interferencia explica varias consecuencias clínicas del alcoholismo que a primera vista parecen no tener relación entre sí.',
  claves:['alcohol deshidrogenasa','acetaldehído','NADH hepático','hipoglucemia por alcohol'],
  sigue:'estructura-adn-cromosomas',
  secciones:[
    {
      t:'La vía principal de oxidación del etanol',
      p:[
        'El etanol se metaboliza principalmente en el hígado en dos pasos oxidativos sucesivos: la alcohol deshidrogenasa lo convierte en acetaldehído (una molécula tóxica y reactiva, responsable en parte de los síntomas de la resaca), y la aldehído deshidrogenasa convierte al acetaldehído en acetato (mucho menos tóxico, que luego se activa a acetil-CoA y puede metabolizarse en el ciclo de Krebs o usarse para la síntesis de ácidos grasos). Ambas reacciones consumen NAD+ y generan grandes cantidades de NADH, un exceso que altera significativamente el balance redox normal del hepatocito y que es la raíz de varias de las consecuencias metabólicas del consumo de alcohol.'
      ],
      foco:[
        'Etanol → (alcohol deshidrogenasa) → acetaldehído (tóxico) → (aldehído deshidrogenasa) → acetato. Ambos pasos generan grandes cantidades de NADH, alterando el balance redox del hígado -esa es la raíz de las consecuencias metabólicas del alcohol.'
      ]
    },
    {
      t:'Por qué el exceso de NADH bloquea la gluconeogénesis',
      p:[
        'El exceso masivo de NADH generado por el metabolismo del etanol desplaza el equilibrio de varias reacciones que dependen del cociente NADH/NAD+, entre ellas la conversión de lactato a piruvato (necesaria para que el lactato pueda usarse como precursor gluconeogénico) y la de malato a oxalacetato (un intermediario esencial de la gluconeogénesis). Con el equilibrio desplazado hacia la acumulación de lactato y malato (en vez de piruvato y oxalacetato), la gluconeogénesis hepática se inhibe significativamente. En una persona con reservas de glucógeno ya agotadas (por ayuno prolongado, desnutrición, o consumo de alcohol sin comer durante horas), esta inhibición de la gluconeogénesis puede producir hipoglucemia significativa, precisamente porque la vía de "fabricar glucosa nueva" queda bloqueada por el exceso de NADH justo cuando más se necesita.'
      ],
      foco:[
        '*Consideración clínica*: la hipoglucemia por alcohol ocurre típicamente en la persona con glucógeno ya agotado (ayuno prolongado, alcoholismo crónico con mala nutrición) que bebe sin comer -el exceso de NADH bloquea la gluconeogénesis justo cuando el glucógeno ya no puede compensar.'
      ]
    },
    {
      t:'Otras consecuencias metabólicas del exceso de NADH hepático',
      p:[
        'El mismo desplazamiento del balance redox favorece la conversión de piruvato en lactato (en vez de hacia la gluconeogénesis o el ciclo de Krebs), contribuyendo a la acidosis láctica que puede acompañar a la intoxicación alcohólica aguda. Además, el exceso de acetil-CoA generado por la oxidación del etanol (y la menor disponibilidad de oxalacetato, desviado por el desequilibrio redox) favorece la síntesis de ácidos grasos y su acumulación como triglicéridos dentro del propio hepatocito, en lugar de oxidarse normalmente -este es el mecanismo bioquímico central de la esteatosis hepática alcohólica (hígado graso), la manifestación más temprana y común del daño hepático por consumo crónico de alcohol, potencialmente reversible con la abstinencia si se detecta a tiempo, antes de progresar a hepatitis alcohólica o cirrosis.'
      ],
      foco:[
        'El exceso de NADH y acetil-CoA por el metabolismo del etanol favorece la acumulación de triglicéridos en el hepatocito (esteatosis/hígado graso alcohólico) -la manifestación hepática más temprana del consumo crónico, y potencialmente reversible con abstinencia.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.'
}

});
