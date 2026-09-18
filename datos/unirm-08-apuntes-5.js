/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 5)
   Termina de cubrir BIOQUIMICA II por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'gluconeogenesis-regulacion-glucemia': {
  tema:'Gluconeogénesis y regulación de la glucemia',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:7,
  idea:'Mantener la glucosa sanguínea estable no depende de una sola hormona: depende del balance constante entre dos hormonas con efectos opuestos, y entender ese balance es entender por qué la diabetes se puede romper por exceso de una o por resistencia a la otra.',
  claves:['gluconeogénesis','piruvato carboxilasa','glucagón','insulina','ayuno'],
  sigue:'via-pentosas-fosfato',
  secciones:[
    {
      t:'La gluconeogénesis en detalle: fabricar glucosa desde cero',
      p:[
        'Como se vio en el caso trabajado del glucógeno, cuando las reservas hepáticas se agotan (después de 12 a 24 horas de ayuno), el hígado activa la *gluconeogénesis*: fabrica glucosa nueva a partir de lactato, glicerol (de la grasa) y, sobre todo, aminoácidos (principalmente alanina, liberada por el músculo). El primer paso clave de esta vía, y uno de sus puntos de control, es la conversión de piruvato en oxaloacetato por la enzima *piruvato carboxilasa*, un paso que la glucólisis no tiene en su dirección inversa (recordando que ambas vías, aunque relacionadas, usan enzimas propias en los pasos clave para poder regularse por separado).'
      ]
    },
    {
      t:'Insulina y glucagón: las dos hormonas que deciden qué vía domina',
      p:[
        'La *insulina*, liberada cuando la glucosa sube (después de comer), favorece que las células capten glucosa, que el hígado la almacene como glucógeno, e inhibe la gluconeogénesis: es la señal de "hay glucosa de sobra, guárdala y úsala". El *glucagón*, liberado cuando la glucosa baja (en *ayuno*), hace exactamente lo contrario: activa la glucogenólisis y la gluconeogénesis en el hígado, para liberar más glucosa hacia la sangre: es la señal de "falta glucosa, fabrícala y libérala".',
        'Estas dos hormonas trabajan en un balance constante y opuesto, ajustando la glucemia latido a latido según la disponibilidad de glucosa. La diabetes tipo 1 rompe este balance por falta absoluta de insulina; la diabetes tipo 2, principalmente por resistencia de las células a la insulina (la hormona está presente, pero las células responden menos de lo que deberían), lo que también deja al glucagón relativamente "sin oposición" y contribuye a la hiperglucemia.'
      ],
      foco:[
        'Consideración clínica: la alanina liberada por el músculo durante el ayuno prolongado, y transportada al hígado para la gluconeogénesis, es parte de por qué un ayuno muy prolongado termina consumiendo masa muscular, no solo grasa: el cuerpo necesita esos aminoácidos como materia prima para seguir fabricando glucosa.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 19.'
},

'via-pentosas-fosfato': {
  tema:'Vía de las pentosas fosfato',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:6,
  idea:'Esta vía no produce ATP directamente, y por eso se subestima: pero sin ella, la célula no tendría materia prima para fabricar ADN nuevo ni suficiente poder reductor para protegerse del daño oxidativo, dos trabajos silenciosos pero indispensables.',
  claves:['pentosas fosfato','NADPH','glucosa-6-fosfato deshidrogenasa','ribosa'],
  sigue:'beta-oxidacion-cuerpos-cetonicos',
  secciones:[
    {
      t:'Dos productos, no energía',
      p:[
        'La *vía de las pentosas fosfato* toma glucosa-6-fosfato (el mismo punto de partida que la glucólisis, pero desviado hacia otra ruta) y produce dos cosas que la célula necesita constantemente y que la glucólisis o el ciclo de Krebs no aportan: *NADPH* y *ribosa* (un azúcar de 5 carbonos). La enzima clave y reguladora de esta vía es la *glucosa-6-fosfato deshidrogenasa*, que cataliza el primer paso, comprometido e irreversible, hacia esta ruta.'
      ]
    },
    {
      t:'Para qué sirve cada producto',
      p:[
        'La *ribosa* es un componente estructural esencial de los nucleótidos (como se vio en el tema de ácidos nucleicos): cualquier célula que necesite fabricar ADN o ARN nuevo (por ejemplo, para dividirse) necesita ribosa disponible, y esta vía es su fuente principal.',
        'El *NADPH*, a diferencia del NADH (que alimenta la cadena respiratoria para producir ATP), se usa como "poder reductor" en reacciones de síntesis (como la síntesis de ácidos grasos, que se verá en el siguiente tema) y, de forma clínicamente muy relevante, para regenerar glutatión reducido, una molécula que protege a la célula del daño oxidativo causado por radicales libres. El glóbulo rojo, que no tiene mitocondrias ni puede regenerar sus proteínas dañadas fabricando otras nuevas, depende especialmente de esta vía para mantenerse protegido.'
      ],
      foco:[
        'Consideración clínica: la deficiencia de glucosa-6-fosfato deshidrogenasa (una enfermedad genética relativamente frecuente) deja al glóbulo rojo sin suficiente NADPH para protegerse del estrés oxidativo, y ciertos fármacos o alimentos (como las habas) pueden desencadenar una hemólisis aguda en estas personas, precisamente porque el glóbulo rojo no logra defenderse del daño oxidativo que esas sustancias provocan.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 20.'
},

'beta-oxidacion-cuerpos-cetonicos': {
  tema:'Beta-oxidación y cuerpos cetónicos',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:7,
  idea:'Cuando el ayuno se prolonga más allá de un día, el cuerpo empieza a usar la grasa como combustible principal, y una parte de esa grasa se convierte en una fuente de energía alternativa capaz de alimentar incluso al cerebro, que normalmente solo usa glucosa.',
  claves:['beta-oxidación','carnitina','acetil-CoA','cuerpo cetónico','cetogénesis'],
  sigue:'sintesis-acidos-grasos-colesterol',
  secciones:[
    {
      t:'Beta-oxidación: desarmar la grasa, dos carbonos a la vez',
      p:[
        'La *beta-oxidación* es el proceso mitocondrial que va cortando un ácido graso largo en fragmentos de dos carbonos, convirtiendo cada fragmento en *acetil-CoA*, que después entra al ciclo de Krebs igual que el acetil-CoA proveniente de la glucosa. Para que un ácido graso pueda entrar a la mitocondria (donde ocurre esta vía), necesita un transportador específico: la *carnitina*, que lo acompaña a través de la membrana mitocondrial interna. Sin suficiente carnitina, los ácidos grasos no pueden entrar a oxidarse, aunque estén disponibles en abundancia.'
      ]
    },
    {
      t:'Cuerpos cetónicos: un combustible alternativo para el ayuno prolongado',
      p:[
        'Cuando la beta-oxidación produce acetil-CoA a un ritmo mayor del que el ciclo de Krebs puede procesar (algo que ocurre típicamente durante el ayuno prolongado, cuando además hay poco oxaloacetato disponible porque el hígado lo está desviando hacia la gluconeogénesis), el hígado convierte ese exceso de acetil-CoA en *cuerpos cetónicos* (acetoacetato y beta-hidroxibutirato), un proceso llamado *cetogénesis*.',
        'Estos cuerpos cetónicos se liberan a la sangre y pueden ser usados como combustible por varios tejidos, incluido —de forma notable— el cerebro, que en un ayuno muy prolongado llega a cubrir una parte importante de su gasto energético con cuerpos cetónicos, reduciendo así su dependencia exclusiva de la glucosa (y con ella, la necesidad de seguir consumiendo tanta proteína muscular para la gluconeogénesis, ya mencionada en el tema anterior).'
      ],
      foco:[
        'Consideración clínica: en la diabetes tipo 1 no controlada, la falta casi total de insulina imita, en cierto sentido, un estado de "ayuno" permanente a nivel celular (las células no pueden usar la glucosa disponible), lo que dispara una cetogénesis excesiva y descontrolada: es el mecanismo detrás de la cetoacidosis diabética, ya mencionada en el tema de fisiopatología del equilibrio ácido-base.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 22.'
},

'sintesis-acidos-grasos-colesterol': {
  tema:'Síntesis de ácidos grasos y colesterol',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:7,
  idea:'El cuerpo no solo degrada grasa: también la fabrica activamente cuando hay exceso de energía disponible, en una vía que es, en varios sentidos, la imagen especular de la beta-oxidación, hasta en dónde ocurre dentro de la célula.',
  claves:['lipogénesis','acetil-CoA carboxilasa','HMG-CoA reductasa','colesterol','malonil-CoA'],
  sigue:'metabolismo-aminoacidos-urea',
  secciones:[
    {
      t:'Lipogénesis: construir ácidos grasos a partir del exceso de energía',
      p:[
        'Cuando hay exceso de energía disponible (después de una comida abundante en carbohidratos, por ejemplo), el cuerpo puede convertir ese excedente en grasa para almacenarla, en un proceso llamado *lipogénesis*, que ocurre en el citosol (a diferencia de la beta-oxidación, que ocurre en la mitocondria: es literalmente la vía opuesta, en un compartimento celular distinto, lo cual permite que ambas puedan estar reguladas de forma independiente sin interferirse).',
        'El paso limitante y más regulado de esta vía es la conversión de acetil-CoA en *malonil-CoA*, catalizada por la *acetil-CoA carboxilasa*: esta enzima se activa cuando hay abundante insulina y energía disponible, y se inhibe durante el ayuno (cuando el glucagón domina), asegurando que el cuerpo no intente fabricar grasa nueva al mismo tiempo que está degradando grasa para obtener energía.'
      ]
    },
    {
      t:'La síntesis de colesterol y su enzima reguladora',
      p:[
        'El *colesterol*, además de obtenerse de la dieta, se sintetiza en el hígado (y en menor medida en otros tejidos) a partir de acetil-CoA, en una vía cuyo paso limitante está controlado por la enzima *HMG-CoA reductasa*. Esta enzima es, precisamente, el blanco farmacológico de las estatinas, uno de los grupos de fármacos más usados en el mundo para reducir el colesterol: al inhibir esta enzima, se reduce la síntesis hepática de colesterol, lo que además hace que el hígado capte más colesterol circulante de la sangre para compensar, bajando el colesterol total en el organismo.'
      ],
      foco:[
        'Consideración clínica: entender que las estatinas actúan sobre una enzima específica de la vía de síntesis del colesterol (no sobre la absorción intestinal ni sobre otro mecanismo) explica por qué se toman de forma continua: si se suspenden, la síntesis hepática de colesterol se reactiva sin ningún freno adicional.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 21 y 26.'
},

'metabolismo-aminoacidos-urea': {
  tema:'Metabolismo de aminoácidos y ciclo de la urea',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:7,
  idea:'El nitrógeno de los aminoácidos que el cuerpo no necesita no se puede simplemente descartar como CO2 (como el carbono de la glucosa): se convierte en amoniaco, una sustancia tóxica para el cerebro, y el hígado tiene que neutralizarlo activamente antes de que llegue a la circulación general.',
  claves:['transaminación','desaminación','amoniaco','ciclo de la urea','glutamina'],
  sigue:'metabolismo-nucleotidos',
  secciones:[
    {
      t:'Separar el nitrógeno del esqueleto de carbono',
      p:[
        'Cuando el cuerpo necesita usar un aminoácido como fuente de energía (o convertirlo en glucosa, vía gluconeogénesis), primero tiene que quitarle su grupo amino, porque el resto de las vías metabólicas (ciclo de Krebs, gluconeogénesis) no saben qué hacer con el nitrógeno. La *transaminación* transfiere el grupo amino de un aminoácido a otra molécula, sin liberar amoniaco libre todavía; la *desaminación* sí libera el grupo amino como *amoniaco* (NH3), una molécula pequeña, muy soluble, pero tóxica para el sistema nervioso central en concentraciones elevadas.'
      ]
    },
    {
      t:'El ciclo de la urea: convertir amoniaco tóxico en urea inofensiva',
      p:[
        'El hígado neutraliza ese amoniaco mediante el *ciclo de la urea*, una secuencia de reacciones que lo convierte en urea, una molécula mucho menos tóxica, soluble en agua, que viaja por la sangre hasta el riñón y se elimina en la orina —es, de hecho, el principal producto de desecho nitrogenado del cuerpo humano.',
        'La *glutamina* cumple un papel especial en este sistema: actúa como transportador seguro de amoniaco entre tejidos (por ejemplo, del músculo hacia el hígado o el riñón), llevando el nitrógeno de forma no tóxica hasta el lugar donde se puede procesar de forma segura, evitando que el amoniaco libre circule sin control por el cuerpo.'
      ],
      foco:[
        'Consideración clínica: cuando el hígado falla gravemente (insuficiencia hepática), pierde su capacidad de convertir amoniaco en urea, y el amoniaco se acumula en sangre y puede llegar al cerebro, produciendo confusión y alteración del estado de conciencia: es el mecanismo central de la encefalopatía hepática, ya mencionada en Fisiopatología.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 28-29.'
},

'metabolismo-nucleotidos': {
  tema:'Metabolismo de nucleótidos',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:6,
  idea:'La gota, una enfermedad conocida desde la antigüedad, tiene una explicación bioquímica precisa: un producto de desecho del metabolismo de nucleótidos que, en exceso, se cristaliza literalmente dentro de las articulaciones.',
  claves:['purina','pirimidina','ácido úrico','salvamento','gota'],
  sigue:'integracion-metabolica-hormonas',
  secciones:[
    {
      t:'Dos familias de bases, dos destinos de degradación distintos',
      p:[
        'Las bases nitrogenadas que forman los nucleótidos (ya vistas en el tema de ácidos nucleicos de Bioquímica I) se dividen en dos familias: las *purinas* (adenina y guanina) y las *pirimidinas* (citosina, timina, uracilo). El cuerpo puede fabricarlas desde cero (síntesis de novo) o reciclar bases ya existentes de la degradación de ácidos nucleicos viejos, mediante vías de *salvamento*, que son energéticamente mucho más económicas que fabricarlas desde cero.',
        'Cuando las purinas se degradan por completo (no se reciclan), su producto final en el ser humano es el *ácido úrico*, una molécula relativamente poco soluble en agua comparada con los productos de desecho de las pirimidinas.'
      ]
    },
    {
      t:'Cuando el ácido úrico se acumula: la gota',
      p:[
        'Si se produce demasiado ácido úrico (por degradación excesiva de purinas, por ejemplo en ciertas enfermedades o por dietas muy ricas en purinas) o si el riñón no logra eliminarlo con suficiente eficacia, el ácido úrico se acumula en la sangre (hiperuricemia). Por su baja solubilidad, puede llegar a cristalizar dentro de las articulaciones —con preferencia por articulaciones más frías y periféricas, como la del dedo gordo del pie—, desencadenando una inflamación aguda muy dolorosa: la *gota*.'
      ],
      foco:[
        'Consideración clínica: esta es la explicación bioquímica de por qué las dietas ricas en purinas (ciertas carnes, mariscos, alcohol) se asocian a crisis de gota: aportan más materia prima de la que el cuerpo puede procesar y eliminar sin acumular ácido úrico.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 33.'
},

'integracion-metabolica-hormonas': {
  tema:'Integración metabólica y hormonas',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:7,
  idea:'Ningún órgano metaboliza de forma aislada: el hígado, el músculo y el tejido adiposo se comunican constantemente entre sí, a través de la sangre y de señales hormonales, ajustando qué vía usa cada uno según el estado general del cuerpo.',
  claves:['integración metabólica','insulina','glucagón','cortisol','estado alimentado'],
  sigue:'vitaminas-coenzimas',
  secciones:[
    {
      t:'Dos estados metabólicos generales del cuerpo',
      p:[
        'En el *estado alimentado* (poco después de comer), la insulina domina: el hígado almacena glucosa como glucógeno y fabrica ácidos grasos con el excedente; el músculo capta glucosa y aminoácidos para reponer sus reservas; el tejido adiposo capta ácidos grasos y los almacena como triglicéridos. Todo el cuerpo está en modo de "guardar", coordinado por la misma hormona.',
        'En el estado de ayuno, el glucagón (y, si el ayuno se prolonga o hay estrés, también el cortisol) toma el control: el hígado libera glucosa por glucogenólisis y después por gluconeogénesis, el tejido adiposo libera ácidos grasos por lipólisis, y el músculo puede liberar aminoácidos si el ayuno se prolonga. Todo el cuerpo cambia a modo de "liberar reservas", coordinado por señales hormonales opuestas a las del estado alimentado.'
      ]
    },
    {
      t:'El cortisol: la hormona del estrés metabólico prolongado',
      p:[
        'El *cortisol*, liberado en situaciones de ayuno prolongado o estrés físico sostenido, refuerza en la misma dirección que el glucagón: favorece la gluconeogénesis hepática, promueve la liberación de aminoácidos desde el músculo (materia prima para esa gluconeogénesis) y de ácidos grasos desde el tejido adiposo. A diferencia del glucagón (que actúa en minutos y responde a la glucemia directamente), el cortisol actúa más lento y de forma más sostenida, ajustado al estrés general del cuerpo, no solo al nivel puntual de glucosa.'
      ],
      foco:[
        'Este tema conecta directamente todo lo aprendido en los temas anteriores de Bioquímica II: glucógeno, gluconeogénesis, beta-oxidación y cetogénesis no son vías aisladas, son piezas de un sistema único que las hormonas encienden o apagan según el estado nutricional del momento.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 34.'
},

'vitaminas-coenzimas': {
  tema:'Vitaminas y coenzimas',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:6,
  idea:'La mayoría de las vitaminas no hacen nada por sí solas de forma directamente visible: trabajan como piezas auxiliares indispensables de enzimas que sí hacen el trabajo metabólico grande, y su falta se nota precisamente donde esa enzima ya no puede funcionar sin ellas.',
  claves:['vitamina','coenzima','hidrosoluble','liposoluble','deficiencia'],
  sigue:'metabolismo-hemo-bilirrubina',
  secciones:[
    {
      t:'Vitaminas como coenzimas: la pieza que la enzima no puede fabricar sola',
      p:[
        'Muchas vitaminas, sobre todo las del complejo B, funcionan como *coenzimas*: moléculas pequeñas y no proteicas que una enzima necesita unir para poder catalizar su reacción, aportando una función química que la propia estructura de aminoácidos de la enzima no puede cumplir por sí sola. El cuerpo humano no puede fabricar la mayoría de las vitaminas (por eso son, por definición, esenciales de la dieta), a diferencia de otras coenzimas que sí puede sintetizar desde cero.',
        'Ejemplo trabajado: varias vitaminas del complejo B actúan precisamente como coenzimas en pasos clave del metabolismo energético ya estudiado —en la descarboxilación del piruvato antes del ciclo de Krebs, y dentro del propio ciclo de Krebs—, lo que explica por qué una deficiencia de estas vitaminas puede comprometer directamente la capacidad de la célula de producir energía, con síntomas que afectan sobre todo a los tejidos con mayor demanda energética, como el sistema nervioso y el corazón.'
      ]
    },
    {
      t:'Hidrosolubles y liposolubles: dos comportamientos muy distintos',
      p:[
        'Las vitaminas *hidrosolubles* (el complejo B y la vitamina C) se disuelven en agua, no se almacenan en grandes cantidades en el cuerpo, y su exceso se elimina fácilmente por la orina: por eso su *deficiencia* puede aparecer relativamente rápido si la dieta es insuficiente, pero también es raro que se acumulen hasta niveles tóxicos. Las vitaminas *liposolubles* (A, D, E, K) se disuelven en grasa, se almacenan en el tejido adiposo y el hígado en cantidades apreciables, y por eso tardan más en manifestar una deficiencia (hay reserva de la cual tirar), pero también tienen mayor riesgo de acumularse hasta niveles tóxicos si se consumen en exceso, algo que casi nunca ocurre con las hidrosolubles.'
      ],
      foco:[
        'Consideración clínica: la vitamina K es necesaria para activar varios factores de coagulación en el hígado (recordando el tema de hemostasia de Fisiología I); su deficiencia, o el bloqueo de su función por ciertos fármacos anticoagulantes, altera directamente la capacidad de formar coágulos estables.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 44-45.'
},

'metabolismo-hemo-bilirrubina': {
  tema:'Metabolismo del hemo y bilirrubina',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:7,
  idea:'La ictericia que se ve en un recién nacido, en un paciente con hepatitis o en alguien con cálculos biliares tiene, en los tres casos, el mismo pigmento amarillo de fondo, pero por razones bioquímicas completamente distintas: distinguir esas razones es exactamente lo que hace útil medir la bilirrubina en el laboratorio.',
  claves:['hemo','bilirrubina indirecta','bilirrubina directa','ictericia','porfiria'],
  sigue:'lipoproteinas-transporte-lipidos',
  secciones:[
    {
      t:'De la hemoglobina vieja a la bilirrubina',
      p:[
        'Cuando un glóbulo rojo envejecido se destruye (algo que ocurre de forma normal y constante, ya que los eritrocitos viven aproximadamente 120 días), su hemoglobina se degrada, y el grupo *hemo* se convierte en bilirrubina. Esta primera bilirrubina, llamada *bilirrubina indirecta* (o no conjugada), no es soluble en agua, así que viaja por la sangre unida a la albúmina hasta llegar al hígado.',
        'En el hígado, una enzima le añade un grupo que la hace soluble en agua, convirtiéndola en *bilirrubina directa* (o conjugada), que ya puede excretarse hacia la bilis y, desde ahí, hacia el intestino (y es, de hecho, uno de los pigmentos responsables del color característico de las heces normales).'
      ]
    },
    {
      t:'Por qué la ictericia se puede originar en tres puntos distintos',
      p:[
        'La *ictericia* (coloración amarillenta de piel y mucosas) aparece cuando la bilirrubina se acumula en sangre por encima de lo normal, y puede originarse en tres puntos distintos de esta vía, cada uno con implicaciones clínicas diferentes: ANTES del hígado (por ejemplo, una hemólisis exagerada que produce más bilirrubina indirecta de la que el hígado puede procesar a tiempo), DENTRO del hígado (una enfermedad hepática que impide conjugar bien la bilirrubina, como una hepatitis), o DESPUÉS del hígado (una obstrucción de la vía biliar, como un cálculo en el colédoco, que impide que la bilirrubina ya conjugada salga hacia el intestino, y se acumule de vuelta en la sangre).',
        'Medir si la bilirrubina elevada es predominantemente indirecta o predominantemente directa es, precisamente, la forma de laboratorio más directa de distinguir entre estos tres orígenes, sin necesitar todavía ningún estudio de imagen.'
      ],
      foco:[
        'La *porfiria* es un grupo de enfermedades genéticas distintas, que afectan pasos anteriores de la síntesis del hemo (no su degradación): se acumulan precursores tóxicos del hemo, con síntomas muy variados, entre ellos dolor abdominal intenso y síntomas neuropsiquiátricos.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 31.'
},

'lipoproteinas-transporte-lipidos': {
  tema:'Lipoproteínas y transporte de lípidos',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:7,
  idea:'El colesterol y los triglicéridos no se disuelven en la sangre por sí solos, así que el cuerpo los empaqueta en partículas especiales que sí pueden viajar en un medio acuoso, y esas mismas partículas —LDL y HDL— son las que se miden de rutina en cualquier perfil lipídico.',
  claves:['quilomicrón','LDL','HDL','VLDL','apolipoproteína'],
  sigue:'metabolismo-etanol',
  secciones:[
    {
      t:'Por qué los lípidos necesitan un transportador especial',
      p:[
        'El colesterol y los triglicéridos son hidrofóbicos (como se vio en Bioquímica I), así que no pueden viajar disueltos libremente en el plasma sanguíneo, que es un medio acuoso. Para resolver esto, el cuerpo los empaqueta dentro de *lipoproteínas*: partículas esféricas con un núcleo de lípidos hidrofóbicos, rodeado de una capa externa de fosfolípidos (con su parte hidrofílica hacia afuera, en contacto con el agua) y proteínas específicas llamadas *apolipoproteínas*, que además sirven para que distintos tejidos reconozcan qué tipo de lipoproteína es y qué hacer con ella.'
      ]
    },
    {
      t:'Las principales lipoproteínas y su función',
      p:[
        'El *quilomicrón* transporta la grasa recién absorbida de la dieta, desde el intestino hacia los tejidos. La *VLDL*, fabricada por el hígado, transporta triglicéridos sintetizados por el propio hígado hacia los tejidos periféricos. A medida que la VLDL va entregando sus triglicéridos, se va transformando en *LDL*, que queda cargada principalmente de colesterol y lo transporta hacia los tejidos periféricos (incluidas las arterias, donde su exceso puede depositarse y contribuir a la aterosclerosis, por eso se la llama coloquialmente "colesterol malo"). La *HDL*, en cambio, recoge el colesterol sobrante de los tejidos periféricos y lo devuelve al hígado para su eliminación o reciclaje, un proceso llamado transporte reverso de colesterol (por eso se la llama "colesterol bueno").'
      ],
      foco:[
        'Consideración clínica: un perfil lipídico "favorable" no es solo tener colesterol total bajo: es tener LDL relativamente bajo (menos colesterol yendo hacia los tejidos y las arterias) y HDL relativamente alto (más colesterol siendo retirado activamente de los tejidos), dos direcciones de tráfico distintas dentro del mismo sistema.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 25.'
},

'metabolismo-etanol': {
  tema:'Metabolismo del etanol',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:6,
  idea:'El hígado trata al alcohol como una sustancia que hay que eliminar cuanto antes, y en el proceso genera un desequilibrio químico que, indirectamente, puede dejar a una persona con hipoglucemia, aunque el alcohol en sí no tenga nada que ver directamente con el azúcar.',
  claves:['alcohol deshidrogenasa','acetaldehído','NADH hepático','hipoglucemia por alcohol'],
  sigue:null,
  secciones:[
    {
      t:'Dos pasos de oxidación, con un intermediario tóxico',
      p:[
        'El hígado metaboliza la mayor parte del alcohol (etanol) que se consume. El primer paso, catalizado por la *alcohol deshidrogenasa*, convierte el etanol en *acetaldehído*, una molécula considerablemente más tóxica que el propio etanol, responsable de buena parte de los síntomas desagradables asociados al consumo excesivo (y de la "resaca"). Un segundo paso convierte rápidamente el acetaldehído en acetato, mucho menos tóxico, que finalmente se puede usar como fuente de energía o convertirse en acetil-CoA.'
      ]
    },
    {
      t:'El efecto colateral sobre el metabolismo de la glucosa',
      p:[
        'Ambos pasos de esta oxidación del etanol generan una gran cantidad de *NADH hepático*, desequilibrando drásticamente la proporción normal de NADH frente a NAD+ dentro de la célula hepática. Ese exceso de NADH inhibe indirectamente la gluconeogénesis, porque varias de las reacciones de esa vía necesitan NAD+ disponible (no NADH) para funcionar bien.',
        'Ejemplo trabajado, consideración clínica: en una persona que ha bebido una cantidad considerable de alcohol y no ha comido (agotando así su glucógeno hepático, la otra fuente de glucosa), el hígado queda con su gluconeogénesis inhibida por el exceso de NADH generado al metabolizar el alcohol, justo en el momento en que más necesitaría esa vía para mantener la glucosa sanguínea. El resultado es una *hipoglucemia por alcohol*, un cuadro real y potencialmente grave, más frecuente de lo que se suele asumir, y que puede confundirse con la simple "borrachera" si no se piensa en ella activamente.'
      ],
      foco:[
        'Este tema cierra el bloque de Bioquímica II conectando dos ideas ya vistas: el glucógeno como reserva de corto plazo y la gluconeogénesis como respaldo de más largo plazo; el alcohol, indirectamente, puede dejar a ambas vías comprometidas a la vez.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 24.'
}

});
