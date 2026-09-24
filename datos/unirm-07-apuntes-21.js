/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 21)
   AMPLIACIÓN de Bioquímica I, tercera parte: termodinámica y
   energía libre, regulación de enzimas y técnicas bioquímicas.
   Cierra la materia. `sigue` de la última entrada se mantiene
   hacia Embriología, como estaba. Mismas claves de objeto que los
   apuntes originales; el campo `tema` no cambia.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'termodinamica-bioquimica': {
  tema:'Termodinámica bioquímica y energía libre',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:13,
  idea:'La energía libre indica si una reacción puede ocurrir por sí sola y cuánto trabajo útil puede rendir. Con este concepto se entiende por qué el ATP funciona como moneda de energía, cómo se impulsan las reacciones desfavorables y por qué el metabolismo está organizado en vías acopladas.',
  claves:['energía libre de Gibbs','reacción exergónica','reacción endergónica','ATP como moneda energética'],
  sigue:'regulacion-enzimatica-alosterica',
  secciones:[
    {
      t:'Las leyes de la termodinámica en la célula',
      p:[
        'La *primera ley* establece que la energía no se crea ni se destruye, solo se transforma: la energía química de los alimentos se convierte en trabajo, en calor y en energía almacenada en ATP. La *segunda ley* establece que, en un proceso espontáneo, la *entropía* total del universo aumenta: los sistemas tienden al desorden. Un ser vivo es un sistema muy ordenado (con baja entropía), y solo mantiene ese orden a costa de aumentar el desorden de su entorno: libera calor y productos de desecho, y consume energía de forma continua.',
        'La *energía libre de Gibbs* (G) combina ambas leyes y expresa la energía disponible para hacer trabajo a temperatura y presión constantes: ΔG = ΔH − TΔS, donde ΔH es el cambio de entalpía (calor), T la temperatura absoluta y ΔS el cambio de entropía. Su signo indica el sentido: si ΔG es *negativo*, la reacción es *exergónica* y ocurre de manera espontánea, liberando energía. Si es *positivo*, es *endergónica* y necesita un aporte de energía. Si es *cero*, el sistema está en equilibrio y no hay cambio neto.',
        'Es importante distinguir espontaneidad de velocidad. Que una reacción tenga un ΔG negativo no quiere decir que sea rápida: la glucosa podría oxidarse con oxígeno en una reacción muy exergónica, pero no lo hace a temperatura corporal sin las enzimas. Las enzimas aceleran las reacciones, pero no cambian el ΔG ni el equilibrio.'
      ],
      foco:[
        'ΔG < 0: exergónica, espontánea. ΔG > 0: endergónica, requiere energía. ΔG = 0: equilibrio. La enzima acelera, pero no modifica el ΔG.'
      ]
    },
    {
      t:'ΔG°′, ΔG real y equilibrio',
      p:[
        'El *ΔG°′* (ΔG en condiciones estándar bioquímicas: 1 M de reactivos y productos, pH 7, 25 °C) es una constante propia de cada reacción, que se relaciona con su constante de equilibrio: ΔG°′ = −RT ln Keq. Una reacción con Keq mayor que 1 tiene un ΔG°′ negativo, y favorece la formación de productos.',
        'Pero lo que decide el sentido en la célula es el *ΔG real*, que depende de las concentraciones: ΔG = ΔG°′ + RT ln([productos]/[reactivos]). Como en la célula las concentraciones no son las estándar, una reacción con ΔG°′ positivo puede tener un ΔG real negativo si sus productos se consumen con rapidez. Es lo que ocurre con varias reacciones de la glucólisis: por ejemplo, la ruptura de la fructosa-1,6-bisfosfato tiene un ΔG°′ de +23,8 kJ/mol, pero en la célula, donde los productos se retiran de forma continua, su ΔG real es casi cero o negativo. El estado normal de una célula es un *estado estacionario* lejos del equilibrio: llegar al equilibrio equivale a morir.',
        'Los valores de ΔG son *aditivos*. Si dos reacciones se acoplan y comparten un intermediario, el ΔG global es la suma de ambos. Es lo que permite que una reacción desfavorable ocurra si va unida a otra muy favorable.'
      ],
      foco:[
        'ΔG°′ = condiciones estándar (una constante). ΔG = condiciones reales (decide el sentido). Una reacción con ΔG°′ positivo puede ser espontánea si se retiran los productos.'
      ]
    },
    {
      t:'El ATP y las reacciones acopladas',
      p:[
        'El *ATP* (adenosina trifosfato) es la moneda energética de la célula. Contiene dos enlaces fosfoanhídrido "de alta energía", y su hidrólisis a ADP y fosfato inorgánico tiene un ΔG°′ de unos *−30,5 kJ/mol* (unos −7,3 kcal/mol), y en las condiciones celulares es aún más negativo (cercano a −50 kJ/mol). El ATP no es una reserva: se consume y se regenera constantemente, de modo que una persona en reposo recicla al día una cantidad de ATP similar a su peso corporal, aunque solo tiene unos 50 gramos en un momento dado.',
        'El ATP impulsa las reacciones endergónicas por *acoplamiento*. Ejemplo: la fosforilación de la glucosa (glucosa + Pi → glucosa-6-fosfato) tiene un ΔG°′ de +13,8 kJ/mol y no ocurre sola. La hexoquinasa la acopla con la hidrólisis del ATP (−30,5 kJ/mol): el ΔG global es de −16,7 kJ/mol, y la reacción es espontánea. El ATP participa en el trabajo mecánico (contracción muscular), en el transporte activo (bomba sodio-potasio) y en la biosíntesis.',
        'Otros compuestos tienen incluso más energía de hidrólisis que el ATP: el fosfoenolpiruvato (−61,9 kJ/mol), el 1,3-bisfosfoglicerato (−49,3 kJ/mol) y la fosfocreatina (−43,1 kJ/mol). Por eso pueden transferir su fosfato al ADP y regenerar ATP: es la fosforilación a nivel de sustrato. La fosfocreatina es el "amortiguador de energía" del músculo, y su reserva mantiene el esfuerzo máximo durante unos 10 segundos.'
      ],
      foco:[
        'ATP → ADP + Pi: ΔG°′ ≈ −30,5 kJ/mol. Glucosa + Pi: +13,8. Acopladas: −16,7. Los ΔG se suman, y esa es la clave del acoplamiento.'
      ]
    },
    {
      t:'Transportadores de electrones y aplicaciones',
      p:[
        'Además del ATP, la célula utiliza coenzimas como transportadores de poder reductor. El *NAD⁺* acepta electrones en las reacciones de oxidación del catabolismo (glucólisis, ciclo de Krebs) y se convierte en NADH, que entrega sus electrones a la cadena respiratoria. El *FAD* funciona de forma parecida y se convierte en FADH₂. El *NADPH*, en cambio, es el reductor de las biosíntesis (ácidos grasos, colesterol) y de la defensa antioxidante (glutatión), y lo suministra la vía de las pentosas fosfato. Los electrones fluyen a favor de un gradiente de potencial de reducción, y la energía liberada es proporcional a la diferencia de potenciales: ΔG°′ = −nFΔE°′.',
        '*Consideración clínica*: el equilibrio entre catabolismo (que libera energía y acumula ATP y poder reductor) y anabolismo (que la consume) se ajusta a las necesidades de cada tejido. Los desacoplantes de la fosforilación oxidativa disipan la energía como calor: son la base de la termogénesis del tejido adiposo pardo y de la toxicidad de fármacos como el 2,4-dinitrofenol. La fiebre y el hipertiroidismo aumentan el consumo de energía y el metabolismo basal.',
        'Ejemplo trabajado: se quiere saber si una reacción con ΔG°′ de +7 kJ/mol puede ocurrir en la célula. Si el producto se consume con rapidez en la siguiente reacción de la vía y su concentración es mucho menor que la del sustrato, el término RT ln([P]/[S]) es lo bastante negativo como para que el ΔG real resulte negativo. Si, en cambio, se acopla a la hidrólisis de un ATP (−30,5), el ΔG global es −23,5 kJ/mol: espontánea sin necesidad de retirar el producto.'
      ],
      foco:[
        'NADH y FADH₂ = poder reductor del catabolismo (hacia la cadena respiratoria). NADPH = poder reductor de las biosíntesis y antioxidante. No los confundas.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 13. Harper, Bioquímica Ilustrada, cap. 11 y 12.'
},

'regulacion-enzimatica-alosterica': {
  tema:'Regulación alostérica y covalente de enzimas',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:12,
  idea:'Las células ajustan de forma continua la actividad de sus enzimas para adaptarse a lo que necesitan. Los mecanismos alostéricos y covalentes permiten cambios rápidos, en segundos, y son los que las hormonas utilizan para coordinar el metabolismo de todo el organismo.',
  claves:['regulación alostérica','fosforilación de enzimas','isoenzima','retroalimentación negativa enzimática'],
  sigue:'tecnicas-bioquimicas-basicas',
  secciones:[
    {
      t:'Niveles de regulación de una enzima',
      p:[
        'La actividad de una vía metabólica puede modificarse de varias maneras, con distinta rapidez. Cambiar la *cantidad* de enzima, mediante la regulación de la transcripción del gen o de la degradación de la proteína, es un mecanismo lento (horas o días), típico de adaptaciones a largo plazo: la insulina induce las enzimas de la glucólisis y de la síntesis de grasas, y el ayuno induce las de la gluconeogénesis. Cambiar la *actividad* de la enzima ya existente es rápido (segundos o minutos), y se logra por regulación alostérica, por modificación covalente o por proteólisis parcial.',
        'La regulación no afecta por igual a todas las enzimas de una vía. Se concentra en las enzimas que catalizan las reacciones irreversibles, las que están lejos del equilibrio y que actúan como "válvulas" del flujo, como la hexoquinasa, la fosfofructoquinasa-1 y la piruvato quinasa en la glucólisis. Es el mismo principio que regula el tráfico: se controla en los cruces clave, y no en cada calle.'
      ],
      foco:[
        'Rápida = actividad (alostérica, covalente). Lenta = cantidad de enzima (transcripción y degradación). Y se controlan las enzimas de reacciones irreversibles.'
      ]
    },
    {
      t:'Regulación alostérica',
      p:[
        'Las enzimas *alostéricas* tienen, además del sitio activo, uno o más *sitios reguladores* a los que se unen moléculas pequeñas, los moduladores, y con ello cambia la conformación de la enzima y su actividad. Suelen ser proteínas con varias subunidades que muestran *cooperatividad*: la unión del sustrato a una subunidad facilita la unión a las demás. Por eso su curva de velocidad frente a la concentración de sustrato es *sigmoidea*, y no hiperbólica, y es mucho más sensible a pequeños cambios de concentración. Se habla de estados T (tenso, poca actividad) y R (relajado, activo), y los activadores favorecen el R y los inhibidores, el T.',
        'El ejemplo clásico es la *fosfofructoquinasa-1* de la glucólisis. Se inhibe por ATP y por citrato (señales de que hay abundante energía) y se activa por AMP y por fructosa-2,6-bisfosfato (señales de que hace falta). Otro ejemplo de una vía de biosíntesis es la inhibición por *retroalimentación negativa*: el producto final de una vía inhibe la primera enzima exclusiva de esa vía, de modo que no se sintetiza más de lo necesario. Así, la isoleucina inhibe la primera enzima de su propia síntesis, y el CTP inhibe la aspartato transcarbamoilasa, la primera enzima de la síntesis de pirimidinas.'
      ],
      foco:[
        'Alostérica = sitio regulador distinto del activo + curva sigmoidea + moduladores activadores o inhibidores. Retroalimentación = el producto final inhibe la primera enzima de la vía.'
      ]
    },
    {
      t:'Regulación covalente y activación por proteólisis',
      p:[
        'En la *modificación covalente*, un grupo químico se une a la enzima o se separa de ella. La forma más frecuente es la *fosforilación*: las *proteínas cinasas* añaden un fosfato (con ATP) a residuos de serina, treonina o tirosina, y las *fosfatasas* lo retiran. Según la enzima, la fosforilación la activa o la inhibe. En el metabolismo del glucógeno, la adrenalina y el glucagón aumentan el AMP cíclico y activan la proteína cinasa A, que por una cascada fosforila y activa la *glucógeno fosforilasa* (que degrada el glucógeno) y fosforila e inactiva la *glucógeno sintasa* (que lo sintetiza). La insulina activa fosfatasas que revierten estos cambios. Así, una sola señal hormonal activa una vía y apaga la opuesta, y evita un ciclo inútil.',
        'La cascada de fosforilaciones *amplifica* la señal: una molécula de hormona activa muchas cinasas, cada una de las cuales activa muchas enzimas, de modo que una señal pequeña provoca una respuesta enorme. Otras modificaciones covalentes son la acetilación, la metilación y la glucosilación.',
        'Un tercer mecanismo es la *activación por proteólisis*. Muchas enzimas digestivas y de la coagulación se sintetizan como *zimógenos* inactivos, que se activan solo cuando se corta un fragmento de su cadena, en el sitio donde deben actuar. Es el caso del tripsinógeno, que se activa en el intestino por la enteropeptidasa, y de los factores de la coagulación. Es un mecanismo irreversible, que protege al tejido de una autodigestión.'
      ],
      foco:[
        'Adrenalina/glucagón → AMPc → PKA → fosforila: activa la fosforilasa (degrada glucógeno) e inactiva la sintasa (sintetiza). Insulina → fosfatasas → lo contrario.'
      ]
    },
    {
      t:'Isoenzimas y enzimas en el diagnóstico',
      p:[
        'Las *isoenzimas* son formas distintas de una misma enzima, que catalizan la misma reacción pero difieren en su estructura, en sus propiedades cinéticas y en su distribución por los tejidos. Un ejemplo es la lactato deshidrogenasa (LDH), un tetrámero de subunidades H y M con cinco isoenzimas: la LDH-1 (H₄) predomina en el corazón y los eritrocitos, y la LDH-5 (M₄), en el hígado y el músculo esquelético. Otro es la creatina cinasa (CK), un dímero de subunidades M y B: la CK-MM es muscular, la CK-MB es cardíaca y la CK-BB es cerebral.',
        '*Consideración clínica*: cuando las células se lesionan, sus enzimas pasan a la sangre, y su medida sirve para diagnosticar y localizar el daño. Tras un infarto de miocardio, la CK-MB aumenta a las 4-6 horas y alcanza un máximo hacia las 24; hoy se prefiere la *troponina*, más sensible y específica. Las transaminasas (ALT y AST) se elevan en las hepatitis, y la ALT es más específica del hígado. La amilasa y la lipasa aumentan en la pancreatitis aguda. La fosfatasa alcalina, en la colestasis y en las enfermedades óseas con recambio elevado. La CK total, en la rabdomiólisis y en las miopatías.',
        'Ejemplo trabajado: un paciente con dolor torácico tiene una CK total de 900 U/L, con un 60 % de CK-MM y un 8 % de CK-MB. Una fracción MB por encima del 5-6 % del total apunta a un origen cardíaco. Se confirma con la troponina y con el electrocardiograma. La distribución tisular de las isoenzimas permite decidir qué órgano ha sufrido el daño.'
      ],
      foco:[
        'Isoenzima = misma reacción, distinta proteína y distinto tejido. CK-MB (corazón), CK-MM (músculo), CK-BB (cerebro). LDH-1 (corazón), LDH-5 (hígado y músculo).'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 6 y 15. Harper, Bioquímica Ilustrada, cap. 9 y 10.'
},

'tecnicas-bioquimicas-basicas': {
  tema:'Técnicas bioquímicas básicas',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:12,
  idea:'La bioquímica se estudia separando y midiendo: se aíslan las moléculas, se analizan por su tamaño, su carga o su afinidad y se cuantifican con la luz. Conocer estas técnicas permite interpretar los resultados de un laboratorio clínico y entender de dónde salen los diagnósticos.',
  claves:['espectrofotometría','electroforesis','cromatografía','centrifugación'],
  sigue:'embrio-gametogenesis',
  secciones:[
    {
      t:'Espectrofotometría: medir con luz',
      p:[
        'La *espectrofotometría* mide cuánta luz de una longitud de onda determinada absorbe una solución. La *ley de Beer-Lambert* dice que la absorbancia es proporcional a la concentración de la sustancia absorbente y a la longitud del paso de luz: A = ε · c · l, donde ε es el coeficiente de extinción, una constante propia de cada molécula y longitud de onda. Por eso, a partir de la absorbancia se puede calcular la concentración, usando una curva de calibración con concentraciones conocidas.',
        'Cada tipo de molécula tiene longitudes de onda características. Las *proteínas* absorben a 280 nm, por sus aminoácidos aromáticos (triptófano y tirosina). Los *ácidos nucleicos* absorben a 260 nm, por sus bases; la relación A₂₆₀/A₂₈₀ de un ADN puro es de aproximadamente 1,8, y sirve para detectar contaminación con proteínas. El *NADH* absorbe a 340 nm, mientras que el NAD⁺ no. Eso permite seguir las reacciones de las deshidrogenasas: si la absorbancia a 340 nm aumenta con el tiempo, se está formando NADH, y la pendiente mide la velocidad de la enzima. Muchos análisis clínicos (glucosa, colesterol, creatinina, enzimas) se basan en reacciones que producen un color medible.'
      ],
      foco:[
        'Proteínas: 280 nm. Ácidos nucleicos: 260 nm. NADH: 340 nm (y NAD⁺ no). Y la absorbancia es directamente proporcional a la concentración.'
      ]
    },
    {
      t:'Centrifugación: separar por densidad y tamaño',
      p:[
        'La *centrifugación* separa los componentes de una mezcla aplicando una fuerza centrífuga muy superior a la de la gravedad. Las partículas más grandes y densas sedimentan primero. La velocidad de sedimentación de una partícula se expresa en unidades Svedberg (S), y depende de su masa, de su forma y de la densidad del medio.',
        'En la *centrifugación diferencial* se aumenta poco a poco la velocidad: primero sedimentan los núcleos y las células enteras, luego las mitocondrias y los lisosomas, después los microsomas (fragmentos del retículo endoplasmático) y, en la ultracentrifugación, los ribosomas y las macromoléculas. Es la técnica clásica para aislar los orgánulos celulares. En la *centrifugación en gradiente de densidad*, las partículas migran hasta la zona del gradiente que iguala su propia densidad, y así se separan las lipoproteínas (quilomicrones, VLDL, LDL, HDL) según su densidad.',
        'En clínica, la centrifugación es cotidiana: se separa el plasma o el suero de las células sanguíneas, y el *hematocrito* se mide centrifugando una muestra de sangre en un capilar: el volumen ocupado por los eritrocitos, en relación con el total, es el hematocrito.'
      ],
      foco:[
        'Centrifugación diferencial: sedimentan en este orden núcleos, mitocondrias, microsomas y ribosomas. Y las lipoproteínas se separan por su densidad: los quilomicrones son los menos densos, y las HDL, los más densos.'
      ]
    },
    {
      t:'Cromatografía: separar por afinidad',
      p:[
        'La *cromatografía* separa los componentes de una mezcla al hacerla pasar por un soporte, la *fase estacionaria*, arrastrada por un solvente, la *fase móvil*. Cada componente se retrasa de forma distinta según su interacción con la fase estacionaria, y sale de la columna en momentos diferentes. Existen varios tipos según la propiedad que se aproveche. En la *cromatografía de intercambio iónico*, la fase estacionaria tiene carga y retiene las moléculas de carga opuesta: separa aminoácidos y proteínas según su carga neta. En la *cromatografía de exclusión molecular* (filtración en gel), la fase estacionaria son esferas porosas: las moléculas grandes no entran en los poros y salen antes, y las pequeñas, que recorren un camino más largo, salen después. En la *cromatografía de afinidad*, la fase estacionaria lleva un ligando específico (un anticuerpo, un sustrato) y solo retiene la molécula que se une a él, con una gran pureza.',
        'La *cromatografía líquida de alta resolución* (HPLC) utiliza presiones altas para lograr separaciones rápidas y precisas, y se emplea para medir la hemoglobina glucosilada (HbA1c), vitaminas y fármacos. Acoplada a la *espectrometría de masas*, permite identificar y cuantificar moléculas muy pequeñas, y es la técnica de elección del cribado neonatal de errores congénitos del metabolismo, como la fenilcetonuria.'
      ],
      foco:[
        'Intercambio iónico = por carga. Exclusión molecular = por tamaño (las grandes salen primero). Afinidad = por unión específica. Tres propiedades, tres tipos.'
      ]
    },
    {
      t:'Electroforesis y otras técnicas de análisis',
      p:[
        'La *electroforesis* separa moléculas cargadas en un campo eléctrico, a través de un gel o de otro soporte. Las moléculas migran hacia el electrodo de signo opuesto a su carga, y la velocidad depende de la carga, del tamaño y de la forma. Para proteínas, el detergente SDS las recubre de carga negativa y las desnaturaliza, y en ese caso (SDS-PAGE) se separan solo por su tamaño: las más pequeñas avanzan más rápido. En el *isoelectroenfoque*, las proteínas migran en un gradiente de pH hasta que alcanzan su punto isoeléctrico, donde su carga neta es cero, y se detienen. El *western blot* combina la electroforesis con anticuerpos para detectar una proteína concreta.',
        '*Consideración clínica*: la electroforesis de las proteínas del suero separa la albúmina y las globulinas (α₁, α₂, β y γ); un pico estrecho en la zona γ indica una proliferación monoclonal de células plasmáticas, como en el mieloma múltiple. La electroforesis de hemoglobina distingue HbA, HbS y HbC: a pH alcalino, la HbS, con una valina en lugar de un glutamato, tiene menos carga negativa y migra más lentamente hacia el ánodo que la HbA. La electroforesis de los fragmentos de ADN separa por tamaño y se utiliza en el diagnóstico genético y en la medicina forense.',
        'Otras técnicas frecuentes son el *ELISA* (ensayo inmunoenzimático, que detecta antígenos o anticuerpos mediante una reacción enzimática coloreada, como en las pruebas de VIH y de embarazo) y la *reacción en cadena de la polimerasa* (PCR), que amplifica millones de veces un fragmento de ADN mediante ciclos de desnaturalización, hibridación y extensión, y se emplea para detectar microorganismos y mutaciones. Ejemplo trabajado: ante una sospecha de anemia falciforme, la electroforesis de hemoglobina muestra una banda anómala de la HbS; se confirma con el estudio genético mediante PCR. Cada técnica responde a una pregunta: ¿qué carga tiene?, ¿qué tamaño?, ¿cuánto hay?'
      ],
      foco:[
        'SDS-PAGE separa solo por tamaño. Isoelectroenfoque separa por punto isoeléctrico. Electroforesis de Hb: la HbS migra más despacio que la HbA por su menor carga negativa.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 3 y 5. Harper, Bioquímica Ilustrada, cap. 4.'
}

});
