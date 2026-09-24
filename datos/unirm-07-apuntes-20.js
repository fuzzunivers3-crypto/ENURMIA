/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 20)
   AMPLIACIÓN de Bioquímica I, segunda parte: glucólisis y
   gluconeogénesis, ciclo de Krebs, cadena respiratoria, lípidos y
   ácidos nucleicos. Mismas claves de objeto que los apuntes
   originales (se sobrescriben con Object.assign); el campo `tema`
   no cambia.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'glucolisis-gluconeogenesis': {
  tema:'Glucólisis y gluconeogénesis',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:15,
  idea:'La glucólisis rompe la glucosa para obtener energía; la gluconeogénesis la fabrica cuando falta. Son dos vías opuestas que comparten enzimas pero se regulan de forma recíproca, y de ese equilibrio depende la glucemia entre comidas, durante el ayuno y en el esfuerzo.',
  claves:['glucólisis','hexoquinasa','fosfofructoquinasa','piruvato','gluconeogénesis','lactato'],
  sigue:'ciclo-krebs',
  secciones:[
    {
      t:'La glucólisis: de una glucosa a dos piruvatos',
      p:[
        'La *glucólisis* es una vía de diez reacciones que ocurre en el citoplasma de todas las células y convierte una molécula de glucosa (seis carbonos) en dos de piruvato (tres carbonos). Se divide en dos fases. En la *fase preparatoria* (reacciones 1 a 5) se invierten dos moléculas de ATP: la glucosa se fosforila a glucosa-6-fosfato, se isomeriza a fructosa-6-fosfato, se fosforila de nuevo a fructosa-1,6-bisfosfato y se rompe en dos triosas fosfato. En la *fase de rendimiento* (reacciones 6 a 10), cada triosa se oxida, con formación de NADH, y produce dos ATP.',
        'El balance neto por molécula de glucosa es de *2 ATP* (se producen 4 y se consumen 2), *2 NADH* y *2 piruvato*. El ATP se obtiene por *fosforilación a nivel de sustrato*: el fosfato pasa directamente desde un intermediario rico en energía (el 1,3-bisfosfoglicerato y el fosfoenolpiruvato) al ADP, sin necesidad de oxígeno ni de mitocondrias. Por eso es la única fuente de ATP de los eritrocitos, y la que sostiene a los músculos cuando el oxígeno escasea.',
        'Tres reacciones son *irreversibles* y se regulan: la de la *hexoquinasa* (glucosa → glucosa-6-fosfato), la de la *fosfofructoquinasa-1* (PFK-1, fructosa-6-fosfato → fructosa-1,6-bisfosfato) y la de la *piruvato quinasa* (fosfoenolpiruvato → piruvato). La PFK-1 es el principal punto de control: la inhiben el ATP y el citrato (abundancia de energía) y la activan el AMP y, sobre todo, la fructosa-2,6-bisfosfato. La hexoquinasa se inhibe por su producto, la glucosa-6-fosfato; en el hígado actúa la *glucoquinasa*, con una Km alta y sin esa inhibición, que capta glucosa solo cuando abunda en la sangre.'
      ],
      foco:[
        'Glucólisis: 2 ATP invertidos, 4 producidos, neto 2; más 2 NADH y 2 piruvato. Tres pasos irreversibles: hexoquinasa, PFK-1 (el principal control) y piruvato quinasa.'
      ]
    },
    {
      t:'El destino del piruvato',
      p:[
        'Lo que ocurre con el piruvato depende de si hay oxígeno. En *aerobiosis*, entra en la mitocondria y la piruvato deshidrogenasa lo convierte en acetil-CoA, que se oxida en el ciclo de Krebs; el NADH citoplasmático cede sus electrones a la cadena respiratoria mediante lanzaderas. En *anaerobiosis* (músculo en esfuerzo intenso, eritrocitos, tejidos con isquemia), la lactato deshidrogenasa reduce el piruvato a *lactato*, y oxida el NADH a NAD⁺. Esa es la verdadera función de la fermentación láctica: regenerar el NAD⁺ para que la glucólisis pueda continuar produciendo ATP, sin necesidad de oxígeno. En las levaduras, el piruvato se convierte en etanol.',
        'El lactato no es un desecho inútil. Se libera a la sangre y el hígado lo capta y lo convierte en glucosa por gluconeogénesis, que puede volver al músculo: es el *ciclo de Cori*. Muchos tumores, incluso con oxígeno disponible, obtienen su energía sobre todo por la glucólisis (efecto Warburg), y por eso captan mucha glucosa; la tomografía PET con fluorodesoxiglucosa aprovecha esa avidez para detectarlos.',
        '*Consideración clínica*: en el eritrocito, un déficit de piruvato quinasa reduce el ATP disponible; las bombas iónicas fallan, la membrana se daña y aparece una anemia hemolítica. La acidosis láctica aparece cuando la producción de lactato supera su eliminación, por hipoxia tisular (shock, isquemia), por déficit de tiamina o por fármacos como la metformina en dosis tóxicas.'
      ],
      foco:[
        'Piruvato → lactato NO es para producir lactato: es para regenerar NAD⁺ y que la glucólisis siga funcionando sin oxígeno.'
      ]
    },
    {
      t:'La gluconeogénesis: fabricar glucosa',
      p:[
        'La *gluconeogénesis* sintetiza glucosa a partir de precursores que no son carbohidratos, y ocurre sobre todo en el hígado y, en menor medida, en el riñón. Es esencial durante el ayuno, porque el cerebro y los eritrocitos necesitan glucosa y las reservas de glucógeno hepático se agotan en unas 24 horas. Los sustratos son el *lactato* (ciclo de Cori), los *aminoácidos* glucogénicos, sobre todo la alanina (ciclo de la glucosa-alanina), y el *glicerol* de los triglicéridos. Los ácidos grasos de cadena par no pueden convertirse en glucosa de forma neta, porque el acetil-CoA no puede transformarse en oxaloacetato.',
        'La vía es casi la inversa de la glucólisis, con siete reacciones compartidas y tres que la glucólisis hace irreversibles y que deben *rodearse* con enzimas distintas. Del piruvato al fosfoenolpiruvato: la piruvato carboxilasa (mitocondrial, requiere biotina y se activa con acetil-CoA) y la fosfoenolpiruvato carboxicinasa. De la fructosa-1,6-bisfosfato a fructosa-6-fosfato: la fructosa-1,6-bisfosfatasa. De la glucosa-6-fosfato a glucosa: la *glucosa-6-fosfatasa*, que solo existe en el hígado y en el riñón. Es una vía costosa: gasta 6 enlaces de alta energía (4 ATP y 2 GTP) por glucosa, que se obtienen de la oxidación de las grasas.',
        'La regulación es *recíproca*: lo que activa a una vía inhibe a la otra, para evitar un ciclo inútil. La fructosa-2,6-bisfosfato activa la PFK-1 e inhibe la fructosa-1,6-bisfosfatasa. La *insulina* la aumenta y favorece la glucólisis; el *glucagón* la reduce, mediante el AMP cíclico, y favorece la gluconeogénesis. El acetil-CoA, abundante en el ayuno por la oxidación de las grasas, activa la piruvato carboxilasa e impulsa la vía.'
      ],
      foco:[
        'Sustratos: lactato, alanina, glicerol (no los ácidos grasos pares). Tres bypass: piruvato carboxilasa + PEPCK, fructosa-1,6-bisfosfatasa y glucosa-6-fosfatasa. Solo hígado y riñón hacen glucosa libre.'
      ]
    },
    {
      t:'Regulación y clínica: ayuno, alcohol y glucogenosis',
      p:[
        '*Consideración clínica*: el alcohol es una causa clásica de hipoglucemia. En el hígado, el etanol se oxida con NAD⁺ a acetaldehído y luego a acetato, y produce gran cantidad de NADH. Con la relación NADH/NAD⁺ elevada, el lactato no puede convertirse en piruvato (la lactato deshidrogenasa trabaja en sentido inverso) y el oxaloacetato se desvía a malato, con lo que la gluconeogénesis se bloquea. Un alcohólico que no ha comido en dos días llega con hipoglucemia y acidosis láctica.',
        'En la *enfermedad de von Gierke*, la ausencia de glucosa-6-fosfatasa impide liberar glucosa desde el glucógeno y desde la gluconeogénesis: hipoglucemia en ayunas, hepatomegalia, acidosis láctica y aumento del ácido úrico. La *metformina*, un antidiabético, actúa en buena parte inhibiendo la gluconeogénesis hepática. En la *cetoacidosis diabética*, la falta de insulina y el exceso de glucagón activan la gluconeogénesis y la lipólisis, con hiperglucemia y producción de cetoácidos.',
        'Ejemplo trabajado: un deportista corre un sprint de 100 m. El músculo consume glucosa y glucógeno por la glucólisis anaerobia, y el piruvato se convierte en lactato para regenerar el NAD⁺. Después, el lactato viaja al hígado, se transforma en glucosa (a costa de ATP) y la glucosa vuelve al músculo. Lo que parecía un "desecho" es un intermediario que el cuerpo recicla.'
      ],
      foco:[
        'Alcohol → NADH alto → sin gluconeogénesis → hipoglucemia en ayuno + acidosis láctica. Y la glucosa-6-fosfatasa hepática es el paso final común del glucógeno y de la gluconeogénesis.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 14 y 15. Harper, Bioquímica Ilustrada, cap. 17 y 19.'
},

'ciclo-krebs': {
  tema:'Ciclo de Krebs',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:13,
  idea:'El ciclo de Krebs, o del ácido cítrico, es la vía central del metabolismo aerobio: oxida el acetil-CoA que viene de los carbohidratos, las grasas y las proteínas y entrega electrones, en forma de NADH y FADH₂, a la cadena respiratoria. Es además fuente de precursores para muchas biosíntesis.',
  claves:['ciclo de Krebs','acetil-CoA','citrato','NADH','ácido cítrico'],
  sigue:'cadena-respiratoria-fosforilacion',
  secciones:[
    {
      t:'De la glucólisis al ciclo: la piruvato deshidrogenasa',
      p:[
        'El piruvato producido por la glucólisis no entra directamente en el ciclo: primero se transforma en acetil-CoA en la matriz mitocondrial, mediante el *complejo de la piruvato deshidrogenasa* (PDH), una descarboxilación oxidativa irreversible: piruvato + CoA + NAD⁺ → acetil-CoA + CO₂ + NADH. Como es irreversible, los ácidos grasos, que dan acetil-CoA, no pueden convertirse en glucosa.',
        'El complejo utiliza cinco cofactores: pirofosfato de tiamina (vitamina B1), lipoato, coenzima A (ácido pantoténico), FAD (riboflavina) y NAD⁺ (niacina). Por eso la carencia de tiamina, en el alcoholismo y en la dieta a base de arroz pulido, bloquea la PDH y produce acidosis láctica y alteraciones neurológicas; el arsénico también la inhibe, al unirse al lipoato. La PDH se regula: la inhiben el acetil-CoA, el NADH y el ATP (y una cinasa que la fosforila), y la activan la insulina y el ADP.'
      ],
      foco:[
        'PDH: irreversible, cinco cofactores (B1, lipoato, B5, B2, B3). Es el paso que impide convertir grasa en glucosa y el que se bloquea en el déficit de tiamina.'
      ]
    },
    {
      t:'Las reacciones del ciclo',
      p:[
        'El ciclo ocurre en la matriz mitocondrial y comienza cuando el acetil-CoA (2 carbonos) se condensa con el oxaloacetato (4 carbonos), en la reacción de la *citrato sintasa*, para formar citrato (6 carbonos). La aconitasa lo convierte en isocitrato. La *isocitrato deshidrogenasa* lo oxida a α-cetoglutarato, con formación de NADH y la primera liberación de CO₂; es el principal punto de control del ciclo. La *α-cetoglutarato deshidrogenasa*, un complejo similar a la PDH, produce succinil-CoA, con otro NADH y otro CO₂.',
        'La *succinil-CoA sintetasa* convierte el succinil-CoA en succinato y forma un GTP por fosforilación a nivel de sustrato. La *succinato deshidrogenasa* oxida el succinato a fumarato y produce FADH₂; es la única enzima del ciclo unida a la membrana interna mitocondrial, y forma el complejo II de la cadena respiratoria. La fumarasa hidrata el fumarato a malato, y la *malato deshidrogenasa* oxida el malato a oxaloacetato, con un tercer NADH, con lo que el ciclo se cierra.',
        'El balance por cada acetil-CoA que entra es: *3 NADH*, *1 FADH₂*, *1 GTP* (equivalente a un ATP) y *2 CO₂*. Los dos carbonos que entran como acetilo no son los mismos que salen como CO₂ en esa vuelta, pero en conjunto todo el carbono del acetil-CoA se oxida a CO₂. Como cada NADH rinde unos 2,5 ATP en la cadena respiratoria y cada FADH₂ unos 1,5, cada vuelta equivale a unos 10 ATP.'
      ],
      foco:[
        'Por cada acetil-CoA: 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂ ≈ 10 ATP. Dos pasos desprenden CO₂ (isocitrato DH y α-cetoglutarato DH).'
      ]
    },
    {
      t:'Regulación, carácter anfibólico y anaplerosis',
      p:[
        'El ciclo se regula por la disponibilidad de sustratos y por el estado energético. Las enzimas que se controlan son la citrato sintasa, la isocitrato deshidrogenasa y la α-cetoglutarato deshidrogenasa: el ATP y el NADH las inhiben, y el ADP y el calcio las activan. Así, el ciclo se acelera cuando la célula necesita energía y se frena cuando hay abundancia. Y, como el ciclo necesita reoxidar el NADH y el FADH₂ en la cadena respiratoria, que exige oxígeno, solo funciona en aerobiosis aunque no consuma oxígeno directamente.',
        'El ciclo es *anfibólico*: además de oxidar el acetil-CoA (catabolismo), sus intermediarios se utilizan como precursores en el anabolismo. El citrato sale de la mitocondria para sintetizar ácidos grasos y colesterol; el α-cetoglutarato y el oxaloacetato dan glutamato y aspartato, y de ahí otros aminoácidos y nucleótidos; el succinil-CoA interviene en la síntesis del grupo hemo; y el oxaloacetato inicia la gluconeogénesis. Cuando se extraen intermediarios, deben reponerse mediante *reacciones anapleróticas*, sobre todo la carboxilación del piruvato a oxaloacetato por la piruvato carboxilasa (con biotina), que se activa con acetil-CoA.'
      ],
      foco:[
        'Anfibólico = catabólico (oxida acetil-CoA) + anabólico (da precursores). Sin anaplerosis, el ciclo se quedaría sin oxaloacetato al desviar intermediarios.'
      ]
    },
    {
      t:'Rendimiento total y aplicaciones clínicas',
      p:[
        'Con el ciclo se puede completar el balance de la oxidación total de una glucosa. En la glucólisis se obtienen 2 ATP netos y 2 NADH citoplásmicos (unos 3-5 ATP, según la lanzadera). La PDH da 2 NADH (unos 5 ATP). Y el ciclo, que gira dos veces por glucosa, da 2 × 10 = 20 ATP. En total, la oxidación completa de una glucosa rinde unos *30-32 ATP*, frente a los 2 ATP de la glucólisis anaerobia: la aerobiosis multiplica por 15 el rendimiento energético.',
        '*Consideración clínica*: los defectos de las enzimas del ciclo son raros, pero graves. El fluoroacetato, una toxina de plantas y de algunos raticidas, se convierte en fluorocitrato y bloquea la aconitasa. Las mutaciones de la succinato deshidrogenasa y de la fumarasa se asocian a tumores (paragangliomas, cáncer renal). En las mitocondriopatías, el metabolismo aerobio falla y se acumula lactato, sobre todo en los tejidos más dependientes de la energía: cerebro, músculo y corazón.',
        'Ejemplo trabajado: un paciente alcohólico y desnutrido llega con confusión y acidosis láctica. Sin tiamina, la PDH y la α-cetoglutarato deshidrogenasa no funcionan: el piruvato no entra en el ciclo y se acumula como lactato, y el cerebro, que depende de la oxidación de la glucosa, se queda sin energía. Por eso se administra tiamina antes que glucosa, porque la glucosa, al aumentar el flujo por la glucólisis, agravaría el bloqueo.'
      ],
      foco:[
        'Rendimiento: glucólisis anaerobia = 2 ATP; oxidación completa = unos 30-32 ATP. Y ante un alcohólico con confusión, tiamina antes que glucosa.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 16. Harper, Bioquímica Ilustrada, cap. 17 y 18.'
},

'cadena-respiratoria-fosforilacion': {
  tema:'Cadena respiratoria y fosforilación oxidativa',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:14,
  idea:'La cadena respiratoria convierte la energía de los electrones del NADH y del FADH₂ en un gradiente de protones, y la ATP sintasa usa ese gradiente para fabricar la mayor parte del ATP. Es donde se consume el oxígeno, y su bloqueo, por un veneno o por una enfermedad mitocondrial, es incompatible con la vida.',
  claves:['cadena respiratoria','ATP sintasa','citocromo','gradiente de protones','quimiosmótica'],
  sigue:'lipidos-estructura-membranas',
  secciones:[
    {
      t:'Los complejos de la cadena',
      p:[
        'La *cadena respiratoria* se encuentra en la membrana mitocondrial interna. Está formada por cuatro complejos proteicos y dos transportadores móviles. El *complejo I* (NADH deshidrogenasa) recibe electrones del NADH y los pasa a la *coenzima Q* (ubiquinona), un transportador liposoluble; bombea 4 protones. El *complejo II* (succinato deshidrogenasa, la misma enzima del ciclo de Krebs) recibe electrones del FADH₂ y los pasa a la coenzima Q, pero no bombea protones. El *complejo III* (citocromo bc₁) pasa los electrones de la coenzima Q al *citocromo c*, otro transportador móvil, y bombea 4 protones. El *complejo IV* (citocromo c oxidasa) transfiere los electrones al oxígeno, que se reduce a agua, y bombea 2 protones.',
        'Los electrones fluyen a favor de un gradiente de potencial de reducción, del NADH (muy reductor) al oxígeno (muy oxidante), y liberan energía en cada paso. Esa energía no se pierde en forma de calor: se utiliza para bombear protones desde la matriz hasta el espacio intermembrana. Los transportadores contienen grupos redox como flavinas, centros hierro-azufre, hemos (citocromos) y cobre.'
      ],
      foco:[
        'Camino de los electrones: NADH → I → CoQ → III → citocromo c → IV → O₂. FADH₂ entra por II (no bombea). Bombean protones: I, III y IV.'
      ]
    },
    {
      t:'La teoría quimiosmótica y la ATP sintasa',
      p:[
        'Según la *teoría quimiosmótica* de Mitchell, el bombeo de protones crea un *gradiente electroquímico* a través de la membrana interna: el espacio intermembrana queda más ácido y con carga positiva, y la matriz, más alcalina y con carga negativa. Ese gradiente es una forma de energía almacenada, la *fuerza protomotriz*, y la utiliza la *ATP sintasa* (complejo V) para fabricar ATP.',
        'La ATP sintasa tiene dos partes. El componente *F₀* es un canal de protones incrustado en la membrana; cuando los protones regresan a la matriz por él, hacen girar una parte de la enzima. El componente *F₁*, en la matriz, contiene los sitios catalíticos: el giro provoca cambios de conformación que unen ADP y fosfato y liberan el ATP. Se necesitan unos 4 protones por cada ATP. Como resultado, cada NADH aporta unos *2,5 ATP* y cada FADH₂, unos *1,5 ATP*, porque el FADH₂ entra por el complejo II, que no bombea protones.',
        'La fosforilación oxidativa está *acoplada* a la respiración: normalmente, sin ADP disponible, el gradiente no se disipa y la cadena se frena. Cuando aumenta la demanda de ATP, sube el ADP, los protones fluyen por la ATP sintasa y la respiración se acelera: es el *control respiratorio*. Así, el consumo de oxígeno se ajusta a las necesidades de energía de la célula.'
      ],
      foco:[
        'El ATP no se forma en los complejos I a IV, sino en la ATP sintasa, impulsada por el flujo de protones. Sin ADP, la respiración se frena (control respiratorio).'
      ]
    },
    {
      t:'Inhibidores y desacoplantes',
      p:[
        'Los venenos de la cadena se clasifican por su sitio de acción. Los *inhibidores del transporte de electrones* detienen el flujo y, con él, el bombeo de protones y la síntesis de ATP: la *rotenona* y algunos barbitúricos inhiben el complejo I; la *antimicina A*, el complejo III; el *cianuro*, el *monóxido de carbono* y la azida, el complejo IV. La *oligomicina* inhibe la ATP sintasa (el componente F₀) y bloquea el retorno de protones, con lo que también el flujo de electrones se detiene.',
        'Los *desacoplantes* separan la respiración de la síntesis de ATP: son moléculas liposolubles que transportan protones a través de la membrana y disipan el gradiente sin pasar por la ATP sintasa. La cadena sigue funcionando (incluso más deprisa), se consume oxígeno, pero no se produce ATP, y la energía se libera en forma de calor. Un ejemplo es el 2,4-dinitrofenol, que se usó como adelgazante y provocó muertes por hipertermia. Uno fisiológico es la *termogenina* (UCP1) del tejido adiposo pardo, que genera calor en el recién nacido. En la intoxicación por salicilatos (aspirina) hay también un efecto desacoplante, con fiebre y aumento de la respiración.',
        '*Consideración clínica*: en la intoxicación por cianuro (incendios, combustión de plásticos, algunos alimentos como la yuca mal procesada), el complejo IV se bloquea: las células no pueden usar el oxígeno, se detiene la producción de ATP y se acumula lactato. La sangre venosa sigue siendo roja brillante, porque el oxígeno no se consume. Se trata con hidroxocobalamina, que capta el cianuro.'
      ],
      foco:[
        'Inhibidor: se detiene el consumo de O₂ y no se hace ATP. Desacoplante: aumenta el consumo de O₂, no se hace ATP y se produce calor. Es una pregunta clásica de comparación.'
      ]
    },
    {
      t:'Radicales libres y enfermedades mitocondriales',
      p:[
        'Aunque la mayor parte de los electrones llega hasta el oxígeno y forma agua, entre el 1 y el 2 % se escapa y forma *especies reactivas de oxígeno*, como el radical superóxido, que dañan lípidos, proteínas y ADN. La célula se defiende con enzimas antioxidantes: la *superóxido dismutasa* convierte el superóxido en peróxido de hidrógeno; la *catalasa* y la *glutatión peroxidasa* lo transforman en agua. El glutatión, que se regenera con NADPH, es el principal antioxidante celular. El estrés oxidativo se asocia al envejecimiento, la isquemia-reperfusión y muchas enfermedades degenerativas.',
        'Las mitocondrias tienen su propio ADN, circular, que codifica 13 proteínas de la cadena respiratoria y que se hereda solo de la madre. Las mutaciones dan lugar a las *enfermedades mitocondriales*, de herencia materna: la neuropatía óptica de Leber (pérdida de visión) o el síndrome MELAS (encefalopatía, acidosis láctica y episodios parecidos a un ictus). Afectan sobre todo a los órganos más dependientes de la energía —cerebro, músculo, ojo, corazón— y cursan con lactato elevado.',
        'Ejemplo trabajado: se comparan dos sustancias añadidas a mitocondrias aisladas con oxígeno y sustrato. Con oligomicina, el consumo de oxígeno cae, porque el gradiente ya no puede disiparse. Con 2,4-dinitrofenol, el consumo de oxígeno se dispara, pero el ATP no se sintetiza. Ver cómo cambia el consumo de oxígeno permite deducir el sitio de acción de cada agente.'
      ],
      foco:[
        'El ADN mitocondrial es materno, circular y codifica proteínas de la cadena respiratoria. Las enfermedades mitocondriales afectan a los tejidos con más demanda de energía y elevan el lactato.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 19. Harper, Bioquímica Ilustrada, cap. 13.'
},

'lipidos-estructura-membranas': {
  tema:'Lípidos: estructura y membranas',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:14,
  idea:'Los lípidos son moléculas insolubles en agua que cumplen funciones muy distintas: almacenan energía, forman las membranas y actúan como hormonas y mensajeros. Su estructura, y en especial su carácter anfipático, explica por qué existen las membranas biológicas y cómo se transportan en la sangre.',
  claves:['ácido graso','triglicérido','fosfolípido','colesterol','saturado'],
  sigue:'acidos-nucleicos-estructura',
  secciones:[
    {
      t:'Ácidos grasos: saturados, insaturados y esenciales',
      p:[
        'Los *ácidos grasos* son cadenas hidrocarbonadas con un grupo carboxilo en un extremo, casi siempre con un número par de carbonos (entre 14 y 22 en los humanos). Se indican con dos números: los carbonos y los dobles enlaces (C16:0, el ácido palmítico; C18:1, el oleico). Los *saturados* no tienen dobles enlaces, tienen cadenas rectas que se empaquetan bien y son sólidos a temperatura ambiente (grasas animales). Los *insaturados* tienen uno o más dobles enlaces, casi siempre en configuración *cis*, que doblan la cadena, impiden el empaquetamiento y hacen que sean líquidos (aceites vegetales y de pescado). Los ácidos grasos *trans*, que se forman en la hidrogenación industrial, tienen la cadena recta y se comportan como los saturados: aumentan el colesterol LDL y el riesgo cardiovascular.',
        'El organismo no puede sintetizar los ácidos grasos con dobles enlaces más allá del carbono 9. Por eso son *esenciales* el *linoleico* (ω-6) y el *α-linolénico* (ω-3), que deben venir de la dieta. Los ω-3 (EPA y DHA, del pescado azul) tienen efectos antiinflamatorios y reducen los triglicéridos. El *ácido araquidónico* (ω-6, 20:4) es el precursor de los *eicosanoides*: las prostaglandinas y los tromboxanos (por la vía de la ciclooxigenasa, que inhiben la aspirina y los antiinflamatorios no esteroideos) y los leucotrienos (por la lipooxigenasa).'
      ],
      foco:[
        'Cis = doblado, más fluido, aceites. Trans = recto, se parece a los saturados y es aterogénico. Esenciales: linoleico (ω-6) y linolénico (ω-3). Araquidónico → eicosanoides (diana de los AINE).'
      ]
    },
    {
      t:'Triglicéridos: la reserva de energía',
      p:[
        'Los *triglicéridos* son ésteres de tres ácidos grasos con el glicerol. Como son apolares, se almacenan sin agua en las gotas lipídicas de los adipocitos, y por eso rinden muchísima energía por gramo: unas 9 kcal/g, más del doble que los carbohidratos o las proteínas (unas 4 kcal/g), que además se almacenan hidratados. Un adulto delgado tiene reservas de grasa para semanas de ayuno, pero de glucógeno solo para un día.',
        'En el intestino, las lipasas pancreáticas los hidrolizan a ácidos grasos y monoglicéridos, con ayuda de las sales biliares que los emulsionan; en los enterocitos se vuelven a formar triglicéridos y se empaquetan en *quilomicrones*. En el tejido adiposo, la lipasa sensible a hormonas los hidroliza cuando hay glucagón o adrenalina (lipólisis), y libera ácidos grasos, que van a la sangre unidos a la albúmina, y glicerol, que va al hígado.'
      ],
      foco:[
        'Triglicérido = glicerol + 3 ácidos grasos. 9 kcal/g y sin agua: es la forma de reserva más eficiente.'
      ]
    },
    {
      t:'Lípidos de membrana: fosfolípidos, esfingolípidos y colesterol',
      p:[
        'Los lípidos de membrana son *anfipáticos*: tienen una cabeza polar y colas apolares. Los *glicerofosfolípidos* (fosfatidilcolina, fosfatidiletanolamina, fosfatidilserina, fosfatidilinositol) tienen glicerol, dos ácidos grasos y un grupo fosfato con un alcohol. La fosfatidilserina se ubica en la cara interna de la membrana y se expone en la externa durante la apoptosis, lo que marca a la célula para su eliminación. El fosfatidilinositol es el precursor de los mensajeros IP₃ y DAG. Los *esfingolípidos* (esfingomielina, cerebrósidos, gangliósidos) derivan de la esfingosina; la esfingomielina forma parte de la vaina de mielina.',
        'En agua, los fosfolípidos se ordenan espontáneamente en una *bicapa*, con las colas hacia dentro y las cabezas hacia el agua, por el efecto hidrofóbico. En el *modelo del mosaico fluido*, las proteínas flotan en esa bicapa y pueden desplazarse lateralmente. El *colesterol* se intercala entre los fosfolípidos: a temperatura corporal disminuye la fluidez y aumenta la rigidez, y a baja temperatura impide que la membrana se solidifique, de modo que actúa como amortiguador de la fluidez. Además, el colesterol es precursor de las hormonas esteroideas, de las sales biliares y de la vitamina D.',
        '*Consideración clínica*: un fosfolípido, la dipalmitoilfosfatidilcolina, es el componente principal del *surfactante pulmonar*, que reduce la tensión superficial de los alvéolos; su déficit en el prematuro causa el síndrome de dificultad respiratoria. Los déficits de las enzimas lisosómicas que degradan los esfingolípidos producen *enfermedades de depósito*: en la enfermedad de Tay-Sachs falta la hexosaminidasa A y se acumula el gangliósido GM2 en las neuronas (deterioro neurológico y mancha rojo cereza en la retina); en la de Gaucher se acumula glucocerebrósido (hepatoesplenomegalia); en la de Niemann-Pick, esfingomielina.'
      ],
      foco:[
        'Fosfolípido = anfipático → bicapa. Colesterol = regula la fluidez (rigidiza en caliente, fluidifica en frío). Tay-Sachs = GM2, hexosaminidasa A, mancha rojo cereza.'
      ]
    },
    {
      t:'Lipoproteínas: transportar lípidos en la sangre',
      p:[
        'Como los lípidos no se disuelven en el plasma, viajan en partículas llamadas *lipoproteínas*, con un núcleo de triglicéridos y ésteres de colesterol y una cubierta de fosfolípidos, colesterol libre y proteínas (apolipoproteínas). Se clasifican por su densidad, que aumenta a medida que disminuye su proporción de lípidos. Los *quilomicrones* transportan los triglicéridos de la dieta desde el intestino. Las *VLDL* transportan los triglicéridos que sintetiza el hígado. Las *IDL* y las *LDL* son derivadas de las VLDL: las LDL llevan el colesterol a los tejidos. Las *HDL* recogen el exceso de colesterol de los tejidos y lo llevan al hígado (transporte inverso).',
        'Las apolipoproteínas dirigen su destino: la apoB-100 de las LDL es reconocida por el *receptor de LDL* del hígado y de otras células, que las capta por endocitosis; la apoC-II de los quilomicrones y las VLDL activa la lipoproteína lipasa de los capilares, que libera ácidos grasos de los triglicéridos. Cuando el colesterol LDL está elevado, se deposita en la pared arterial y favorece la aterosclerosis; el colesterol HDL alto es protector.',
        '*Consideración clínica*: en la *hipercolesterolemia familiar*, un defecto del receptor de LDL impide captar las LDL y el colesterol se acumula en la sangre, con xantomas y enfermedad coronaria precoz. Las *estatinas* inhiben la HMG-CoA reductasa, la enzima limitante de la síntesis de colesterol; al bajar el colesterol hepático, aumenta el número de receptores de LDL y desciende el colesterol en sangre. Un plasma lechoso con triglicéridos muy altos indica exceso de quilomicrones, con riesgo de pancreatitis.'
      ],
      foco:[
        'Quilomicrón = grasa de la dieta. VLDL = triglicéridos del hígado. LDL = colesterol hacia los tejidos ("malo"). HDL = colesterol de vuelta al hígado ("bueno").'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 10, 11 y 21. Harper, Bioquímica Ilustrada, cap. 14, 15 y 25.'
},

'acidos-nucleicos-estructura': {
  tema:'Ácidos nucleicos: estructura del ADN y ARN',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:14,
  idea:'El ADN guarda la información genética y el ARN la transmite y la ejecuta. Su estructura, con bases que se aparean de forma específica, explica cómo se copia la información y cómo se traduce a proteínas, y las alteraciones de su metabolismo dan lugar a enfermedades como la gota.',
  claves:['doble hélice','base nitrogenada','nucleótido','enlace fosfodiéster','ARN mensajero'],
  sigue:'termodinamica-bioquimica',
  secciones:[
    {
      t:'Nucleótidos: los bloques de construcción',
      p:[
        'Un *nucleótido* está formado por tres componentes: una *base nitrogenada*, un azúcar de cinco carbonos (pentosa) y uno o más grupos fosfato. Sin el fosfato, la unión de la base con el azúcar se llama *nucleósido*. Las bases son de dos tipos: las *purinas*, de dos anillos (adenina y guanina), y las *pirimidinas*, de un anillo (citosina, timina y uracilo). El ADN contiene adenina, guanina, citosina y timina, con desoxirribosa; el ARN, adenina, guanina, citosina y uracilo, con ribosa.',
        'Los nucleótidos cumplen otras funciones además de formar ácidos nucleicos. El *ATP* es la moneda energética de la célula. El *GTP* participa en la síntesis de proteínas y en las proteínas G. El *AMP cíclico* es un segundo mensajero de muchas hormonas. El NAD⁺, el FAD y la coenzima A contienen adenosina. Y los nucleótidos activados sirven como transportadores de azúcares (UDP-glucosa) en la síntesis de glucógeno.',
        'Los nucleótidos se unen entre sí por *enlaces fosfodiéster* entre el hidroxilo del carbono 3′ de un nucleótido y el fosfato del carbono 5′ del siguiente. La cadena tiene una polaridad: un extremo 5′ (con un fosfato libre) y otro 3′ (con un hidroxilo libre), y por convención la secuencia se escribe de 5′ a 3′. El esqueleto de azúcar y fosfato es hidrofílico y tiene carga negativa, y las bases se proyectan hacia el interior.'
      ],
      foco:[
        'Nucleósido = base + azúcar. Nucleótido = base + azúcar + fosfato. Purinas: A y G (dos anillos). Pirimidinas: C, T y U (un anillo). Truco en inglés: "CUT the PY": Citosina, Uracilo y Timina son las PYrimidinas.'
      ]
    },
    {
      t:'La doble hélice del ADN',
      p:[
        'En 1953, Watson y Crick, basándose en las reglas de Chargaff y en la difracción de rayos X de Franklin y Wilkins, propusieron que el ADN es una *doble hélice*. Consta de dos cadenas *antiparalelas* (una va de 5′ a 3′ y la otra, de 3′ a 5′) enrolladas alrededor de un eje común, con el esqueleto azúcar-fosfato por fuera y las bases apiladas en el interior. Las bases se aparean de forma específica: la adenina con la timina (dos puentes de hidrógeno) y la guanina con la citosina (tres puentes de hidrógeno). Por eso, en cualquier ADN de doble cadena, A = T y G = C (reglas de Chargaff), y una cadena es complementaria de la otra.',
        'La forma más frecuente, la *forma B*, da una vuelta cada 10,5 pares de bases (unos 3,4 nm) y presenta dos surcos, el mayor y el menor, por donde las proteínas reguladoras reconocen la secuencia sin abrir la hélice. La estabilidad depende de los puentes de hidrógeno y sobre todo del apilamiento de las bases; las regiones ricas en G-C son más estables que las ricas en A-T. El calor o un pH extremo *desnaturalizan* el ADN y separan las cadenas (la temperatura a la que la mitad está separada, la Tm, es más alta cuanto más G-C contiene); al enfriarlo lentamente se *renaturaliza*. Este principio es la base de la PCR.',
        'El ADN humano, de casi dos metros por célula, se compacta enrollándose alrededor de proteínas básicas, las *histonas*, y forma los *nucleosomas*, que se agrupan en la *cromatina* y, durante la división, en los cromosomas. El ADN también está en las mitocondrias, en forma circular, y se hereda por vía materna.'
      ],
      foco:[
        'Si A = 30 %, entonces T = 30 %, y G + C = 40 %, es decir, G = 20 % y C = 20 %. Un cálculo de examen muy frecuente con las reglas de Chargaff.'
      ]
    },
    {
      t:'El ARN: tipos y diferencias con el ADN',
      p:[
        'El ARN se diferencia del ADN en tres aspectos: su azúcar es la ribosa (con un hidroxilo en el carbono 2′), contiene uracilo en lugar de timina y suele ser monocatenario. El hidroxilo 2′ hace que sea químicamente más inestable, sobre todo en medio alcalino, y por eso el ADN es mejor para almacenar información a largo plazo, mientras que el ARN, más lábil, es adecuado para mensajes temporales. Aunque es monocatenario, se pliega sobre sí mismo formando regiones de doble hebra y estructuras tridimensionales complejas.',
        'Existen varios tipos. El *ARN mensajero* (ARNm) lleva la información de un gen a los ribosomas; en eucariotas se procesa con una caperuza en el extremo 5′, una cola de poli-A en el 3′ y la eliminación de los intrones (empalme). El *ARN de transferencia* (ARNt) transporta los aminoácidos, con una estructura en forma de hoja de trébol y un anticodón que reconoce el codón del ARNm. El *ARN ribosómico* (ARNr) es el componente principal de los ribosomas y actúa como ribozima, catalizando la formación del enlace peptídico. Otros ARN no codificantes, como los microARN y los ARN interferentes pequeños, regulan la expresión de los genes.'
      ],
      foco:[
        'ARN = ribosa + uracilo + monocatenario + más inestable. ARNm lleva el mensaje, ARNt lleva los aminoácidos, ARNr forma el ribosoma y cataliza el enlace peptídico.'
      ]
    },
    {
      t:'Metabolismo de nucleótidos y clínica',
      p:[
        'Los nucleótidos se sintetizan por una vía *de novo*, a partir de moléculas sencillas, y por una vía de *recuperación*, que reutiliza las bases libres. En la vía de recuperación de las purinas participa la enzima HGPRT: su déficit total causa el *síndrome de Lesch-Nyhan* (herencia ligada al X), con producción excesiva de ácido úrico, gota, discapacidad intelectual y automutilación. El déficit de adenosina desaminasa produce una inmunodeficiencia combinada grave (SCID).',
        'El catabolismo de las *purinas* culmina en el *ácido úrico*: la adenina y la guanina se degradan a hipoxantina y xantina, y la xantina oxidasa las convierte en ácido úrico, que se elimina por la orina. Si se produce en exceso o se elimina poco, sus cristales de urato monosódico se depositan en las articulaciones y provocan la *gota* (dolor intenso, típicamente en el dedo gordo del pie, con cristales birrefringentes negativos en forma de aguja). Se trata con alopurinol o febuxostat, que inhiben la xantina oxidasa. Las *pirimidinas*, en cambio, se degradan a productos solubles (β-alanina y β-aminoisobutirato).',
        '*Consideración clínica*: muchos fármacos son análogos de nucleótidos o bloquean su síntesis. El 5-fluorouracilo y el metotrexato inhiben la síntesis de timidilato y detienen la división de las células tumorales. El aciclovir, análogo de la guanosina, detiene la replicación de los virus del herpes. El azatioprina y la 6-mercaptopurina son análogos de purinas, que se emplean como inmunosupresores.',
        'Ejemplo trabajado: un hombre de 50 años, obeso y bebedor, despierta con dolor intenso, calor y enrojecimiento del dedo gordo del pie. La punción articular muestra cristales de urato. El ácido úrico deriva de las purinas, por lo que se recomienda reducir el alcohol, la carne roja y las vísceras (ricos en purinas), y, si hay crisis repetidas, alopurinol para frenar la producción de urato.'
      ],
      foco:[
        'Purinas → ácido úrico → gota (alopurinol inhibe la xantina oxidasa). No confundir ácido úrico (purinas) con urea (aminoácidos).'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 8 y 22. Harper, Bioquímica Ilustrada, cap. 32 y 33.'
}

});
