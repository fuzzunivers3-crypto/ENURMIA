/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 13 (lote 2)
   Cubre NEFROLOGÍA al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Segunda materia del
   cuatrimestre 13 (3 creditos, 12 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== NEFROLOGÍA ==================== */
'anatomia-fisiologia-renal': {
  tema:'Anatomía y fisiología renal',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema abre la materia de Nefrología estableciendo las bases fisiológicas sobre las que se construirán los 11 temas restantes: cada condición renal específica se explicará en relación directa con la función normal del riñón como filtro y regulador del medio interno.',
  claves:['nefrona','filtración glomerular','tasa de filtración glomerular estimada'],
  sigue:'enfermedad-renal-cronica-manejo-especializado',
  secciones:[
    {
      t:'La nefrona como unidad funcional del riñón',
      p:[
        'La *nefrona* es la unidad funcional básica del riñón, compuesta por el glomérulo (donde ocurre la filtración inicial de la sangre) y un sistema de túbulos que modifican progresivamente ese filtrado inicial mediante reabsorción y secreción selectivas, hasta producir la orina final -cada riñón contiene aproximadamente un millón de estas unidades funcionales, y comprender su estructura básica es indispensable para entender dónde específicamente falla cada condición renal que se desarrollará en este bloque.',
        'Reconocer que la nefrona tiene componentes anatómicos distintos con funciones específicas distintas -el glomérulo filtra, los túbulos reabsorben y secretan- retoma la importancia ya vista repetidamente en este pensum sobre descomponer una estructura compleja en sus componentes funcionales antes de razonar sobre sus alteraciones: una enfermedad que afecta primariamente el glomérulo (como la glomerulonefritis, tema posterior de este bloque) tiene manifestaciones distintas de una que afecta primariamente los túbulos.'
      ]
    },
    {
      t:'La filtración glomerular como primer paso de la formación de orina',
      p:[
        'La *filtración glomerular* es el proceso mediante el cual la sangre que llega al glomérulo se filtra a través de una barrera especializada que retiene las células sanguíneas y las proteínas grandes, pero permite el paso de agua y solutos pequeños hacia el espacio tubular -esta barrera de filtración selectiva es precisamente la que se altera en el síndrome nefrótico, tema que se desarrollará más adelante en este bloque, permitiendo el paso anormal de proteínas hacia la orina.',
        'Comprender la filtración glomerular como un proceso de barrera selectiva, no como un simple colador pasivo, retoma un principio general ya visto repetidamente en este pensum sobre entender el mecanismo fisiológico preciso antes de razonar sobre sus alteraciones patológicas: cuando esta barrera se daña por distintos mecanismos inmunológicos o estructurales, las consecuencias clínicas dependen directamente de qué componente específico de la barrera se vio comprometido.'
      ]
    },
    {
      t:'La tasa de filtración glomerular estimada como medida cuantitativa de la función renal',
      p:[
        'La *tasa de filtración glomerular estimada* es el parámetro cuantitativo más utilizado en la práctica clínica para evaluar la función renal global, calculado a partir de la creatinina sérica junto con la edad, el sexo, y otros factores del paciente, permitiendo clasificar el grado de función renal preservada o perdida de forma numérica y comparable entre distintos pacientes y momentos de seguimiento.',
        'Este tema cierra estableciendo la base cuantitativa sobre la que se construirán los temas siguientes de este bloque: la enfermedad renal crónica y la lesión renal aguda, que se desarrollarán en los próximos dos temas, se definen y clasifican precisamente en términos de esta tasa de filtración glomerular, retomando la importancia ya vista repetidamente en este pensum sobre traducir una función fisiológica compleja a un valor numérico cuantificable que permite seguimiento objetivo en el tiempo.'
      ],
      foco:[
        '*Consideración clínica*: la tasa de filtración glomerular estimada es el parámetro cuantitativo central para evaluar y clasificar la función renal, calculado a partir de la creatinina sérica y otros factores del paciente.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 1.'
},

'enfermedad-renal-cronica-manejo-especializado': {
  tema:'Enfermedad renal crónica: manejo especializado',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la tasa de filtración glomerular ya vista, aplicándola ahora a la clasificación y el manejo especializado de la pérdida progresiva e irreversible de la función renal a lo largo del tiempo.',
  claves:['estadificación de la enfermedad renal crónica','progresión de la enfermedad renal crónica','manejo nefroprotector'],
  sigue:'lesion-renal-aguda-manejo-especializado',
  secciones:[
    {
      t:'La estadificación de la enfermedad renal crónica según la función preservada',
      p:[
        'La *estadificación de la enfermedad renal crónica* clasifica la severidad de la pérdida de función renal en estadios progresivos, basados directamente en la tasa de filtración glomerular estimada ya vista en el tema anterior, desde una función renal levemente disminuida hasta la insuficiencia renal terminal que requiere terapia de reemplazo renal, tema que se desarrollará más adelante en este bloque.',
        'Reconocer esta estadificación numérica retoma un principio general ya visto repetidamente en este pensum sobre gradar la severidad de una condición crónica para orientar tanto el pronóstico como las decisiones de manejo apropiadas para cada etapa específica: un paciente en un estadio temprano requiere un enfoque de manejo considerablemente distinto de uno en un estadio avanzado, aunque ambos compartan el mismo diagnóstico general de enfermedad renal crónica.'
      ]
    },
    {
      t:'La progresión de la enfermedad renal crónica y sus factores acelerantes',
      p:[
        'La *progresión de la enfermedad renal crónica* no es uniforme entre todos los pacientes: ciertos factores, como la hipertensión arterial mal controlada (ya vista en Cardiología de este mismo cuatrimestre) y la proteinuria persistente, aceleran significativamente la velocidad de pérdida de función renal, mientras su control apropiado puede enlentecer considerablemente esa progresión.',
        'Esta relación entre el control de factores modificables y la velocidad de progresión retoma directamente la importancia ya vista sobre el daño a órgano blanco por hipertensión en Cardiología: el riñón es precisamente uno de los órganos blanco más relevantes de la hipertensión arterial no controlada, y esta conexión entre ambas materias del mismo cuatrimestre ilustra cómo el control cardiovascular y el control nefrológico están íntimamente interconectados en la práctica clínica real.'
      ]
    },
    {
      t:'El manejo nefroprotector como estrategia central de esta condición',
      p:[
        'El *manejo nefroprotector* combina el control estricto de los factores que aceleran la progresión -presión arterial, proteinuria, glucemia en el paciente diabético- con medidas específicas dirigidas a preservar la función renal remanente el mayor tiempo posible, retomando un principio general ya visto repetidamente en este pensum sobre intervenir activamente sobre factores modificables para enlentecer la progresión de una condición crónica, en vez de esperar pasivamente su evolución natural.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre el seguimiento estructurado y a largo plazo de una condición crónica progresiva: el manejo nefroprotector no es una intervención puntual, sino un acompañamiento continuo que ajusta el enfoque terapéutico conforme el paciente avanza por los distintos estadios de la enfermedad renal crónica ya vistos, con el objetivo de retrasar el momento en que se requiera terapia de reemplazo renal.'
      ],
      foco:[
        '*Consideración clínica*: el control estricto de la presión arterial y la proteinuria son las intervenciones nefroprotectoras con mayor impacto demostrado en enlentecer la progresión de la enfermedad renal crónica.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 49.'
},

'lesion-renal-aguda-manejo-especializado': {
  tema:'Lesión renal aguda: manejo especializado',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la enfermedad renal crónica ya vista, contrastando ahora una pérdida de función renal aguda y potencialmente reversible con la pérdida progresiva e irreversible ya desarrollada en el tema anterior.',
  claves:['lesión renal aguda prerrenal','lesión renal aguda intrínseca','lesión renal aguda posrenal'],
  sigue:'sindrome-nefrotico-adulto',
  secciones:[
    {
      t:'La lesión renal aguda prerrenal como problema de perfusión, no del riñón mismo',
      p:[
        'La *lesión renal aguda prerrenal* ocurre cuando el riñón, estructuralmente sano, recibe un flujo sanguíneo insuficiente para funcionar apropiadamente -causada típicamente por deshidratación severa, hemorragia, o estados de shock ya vistos en otros contextos de este pensum- de forma que corregir la causa de la perfusión insuficiente, con frecuencia mediante reposición de volumen, revierte completamente la disfunción renal sin dejar daño estructural permanente.',
        'Reconocer que en esta forma prerrenal el riñón mismo no está dañado, sino que responde apropiadamente a una perfusión insuficiente, retoma directamente la importancia ya vista sobre el gasto cardíaco y la perfusión de órganos en Cardiología de este mismo cuatrimestre: el riñón es uno de los órganos más sensibles a las variaciones del gasto cardíaco y la volemia, funcionando en cierto sentido como un "sensor" temprano de problemas de perfusión sistémica.'
      ]
    },
    {
      t:'La lesión renal aguda intrínseca como daño estructural directo del riñón',
      p:[
        'La *lesión renal aguda intrínseca* representa daño estructural directo al parénquima renal mismo -a los glomérulos, los túbulos, el intersticio, o los vasos sanguíneos intrarrenales- causado por mecanismos como la necrosis tubular aguda (con frecuencia secundaria a un episodio prerrenal prolongado sin corrección oportuna), toxinas, o procesos inflamatorios específicos del riñón.',
        'Esta conexión entre una lesión prerrenal prolongada sin corrección y su progresión hacia daño intrínseco retoma un principio general ya visto repetidamente en este pensum sobre cómo una condición inicialmente funcional y reversible puede convertirse en estructural e irreversible si no se corrige oportunamente: el mismo problema de perfusión insuficiente, si se prolonga sin tratamiento, transforma una lesión prerrenal reversible en un daño tubular intrínseco considerablemente más difícil de revertir.'
      ]
    },
    {
      t:'La lesión renal aguda posrenal como obstrucción del flujo urinario',
      p:[
        'La *lesión renal aguda posrenal* ocurre cuando existe una obstrucción del flujo urinario en algún punto desde los cálices renales hasta la uretra -retomando directamente la importancia ya vista sobre la retención urinaria aguda y sus causas en Urología del cuatrimestre anterior- generando presión retrógrada que compromete la función renal si la obstrucción no se resuelve oportunamente.',
        'Este tema cierra retomando el hilo conductor de las tres categorías de lesión renal aguda desarrolladas: prerrenal (problema antes del riñón, de perfusión), intrínseca (problema dentro del riñón, estructural), y posrenal (problema después del riñón, obstructivo) -esta clasificación anatómica en tres categorías retoma un principio general ya visto repetidamente en este pensum sobre localizar sistemáticamente dónde ocurre un problema fisiopatológico como primer paso indispensable para determinar su manejo apropiado.'
      ],
      foco:[
        '*Consideración clínica*: distinguir si una lesión renal aguda es prerrenal, intrínseca, o posrenal es el primer paso diagnóstico indispensable, ya que cada categoría tiene una causa y un manejo específico completamente distintos.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 30.'
},

'sindrome-nefrotico-adulto': {
  tema:'Síndrome nefrótico del adulto',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la barrera de filtración glomerular ya vista al inicio de este bloque, mostrando qué ocurre clínicamente cuando esa barrera se daña de forma que permite el paso anormal de proteínas hacia la orina.',
  claves:['proteinuria en rango nefrótico','edema nefrótico','hipoalbuminemia por síndrome nefrótico'],
  sigue:'sindrome-nefritico-adulto',
  secciones:[
    {
      t:'La proteinuria en rango nefrótico como hallazgo definitorio',
      p:[
        'La *proteinuria en rango nefrótico* -una pérdida urinaria de proteínas que supera un umbral cuantitativo específico y considerablemente elevado en 24 horas- es el hallazgo que define y da nombre al síndrome nefrótico, reflejando directamente el daño de la barrera de filtración glomerular ya vista al inicio de este bloque, que normalmente retiene las proteínas plasmáticas dentro de la circulación.',
        'Reconocer que este umbral cuantitativo específico, no cualquier grado de proteinuria, es lo que define el síndrome nefrótico retoma la importancia ya vista repetidamente en este pensum sobre establecer puntos de corte cuantitativos precisos que distinguen una condición clínica específica de un hallazgo similar pero de menor magnitud, con implicaciones diagnósticas y pronósticas distintas.'
      ]
    },
    {
      t:'El edema nefrótico y su mecanismo fisiopatológico',
      p:[
        'El *edema nefrótico* -la acumulación de líquido en los tejidos, característicamente periorbitario y en miembros inferiores- se relaciona directamente con la pérdida masiva de proteínas plasmáticas hacia la orina: al disminuir la concentración de proteínas en la sangre, disminuye también la presión oncótica que normalmente retiene el líquido dentro de los vasos sanguíneos, favoreciendo su salida hacia el espacio intersticial.',
        'Comprender este mecanismo fisiopatológico específico del edema nefrótico, distinto del edema por sobrecarga de volumen visto en otros contextos como la insuficiencia cardíaca de Cardiología de este mismo cuatrimestre, retoma un principio general ya visto repetidamente en este pensum sobre reconocer que un mismo signo clínico (edema) puede tener mecanismos fisiopatológicos completamente distintos según la condición subyacente específica que lo genera.'
      ]
    },
    {
      t:'La hipoalbuminemia por síndrome nefrótico y su relación con la proteinuria',
      p:[
        'La *hipoalbuminemia por síndrome nefrótico* es la consecuencia directa y cuantificable de la pérdida urinaria masiva de proteínas ya vista en este mismo tema, completando junto con la proteinuria en rango nefrótico y el edema nefrótico la tríada clásica que define esta condición: proteinuria masiva, hipoalbuminemia consecuente, y edema resultante de la disminución de la presión oncótica.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre comprender la fisiología renal normal como base para entender sus alteraciones: la tríada del síndrome nefrótico -proteinuria, hipoalbuminemia, edema- es, en esencia, una cadena causal directa que comienza con el daño de la barrera de filtración glomerular ya establecida en el primer tema de este bloque, ilustrando cómo una alteración anatómica específica genera, de forma predecible y secuencial, cada uno de los hallazgos clínicos característicos de este síndrome.'
      ],
      foco:[
        '*Consideración clínica*: la tríada del síndrome nefrótico -proteinuria masiva, hipoalbuminemia consecuente, y edema resultante- es una cadena causal directa que comienza con el daño de la barrera de filtración glomerular.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 32.'
},

'sindrome-nefritico-adulto': {
  tema:'Síndrome nefrítico del adulto',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente el síndrome nefrótico ya visto, contrastando ahora un mecanismo de daño glomerular distinto: en vez de una barrera de filtración que se vuelve excesivamente permeable a las proteínas, una inflamación glomerular que compromete la filtración misma y permite el paso anormal de células sanguíneas.',
  claves:['hematuria glomerular','hipertensión por síndrome nefrítico','glomerulonefritis aguda'],
  sigue:'trastornos-electroliticos-sodio-potasio',
  secciones:[
    {
      t:'La hematuria glomerular como hallazgo distintivo del síndrome nefrítico',
      p:[
        'La *hematuria glomerular* -la presencia de sangre en la orina de origen glomerular, con frecuencia reconocible por la deformación característica de los glóbulos rojos al pasar a través de la barrera de filtración dañada- es el hallazgo distintivo que diferencia al síndrome nefrítico del síndrome nefrótico ya visto en el tema anterior, donde predomina la pérdida de proteínas sobre la de células sanguíneas.',
        'Distinguir el origen glomerular de una hematuria del origen urológico ya visto en otros contextos de este pensum (como el cáncer de vejiga de Urología del cuatrimestre anterior) retoma un principio general ya visto repetidamente en este pensum sobre localizar sistemáticamente el origen anatómico de un mismo hallazgo clínico (en este caso, sangre en la orina), ya que ese origen determina completamente el diagnóstico diferencial y el manejo apropiado subsecuente.'
      ]
    },
    {
      t:'La hipertensión por síndrome nefrítico y su mecanismo',
      p:[
        'La *hipertensión por síndrome nefrítico* se desarrolla porque la inflamación glomerular compromete la filtración y genera retención de sodio y agua, expandiendo el volumen circulante y elevando la presión arterial -este mecanismo retoma directamente la importancia ya vista sobre la relación entre el riñón y la regulación de la presión arterial sistémica, ahora aplicada específicamente al contexto agudo de una inflamación glomerular activa.',
        'Esta hipertensión de origen renal, generada por retención de volumen más que por los mecanismos vasculares ya vistos en la hipertensión arterial primaria de Cardiología, retoma un principio general ya visto repetidamente en este pensum sobre reconocer que un mismo hallazgo clínico (hipertensión) puede tener mecanismos causales completamente distintos según el contexto clínico en que se presenta, con implicaciones directas sobre el manejo más apropiado en cada caso.'
      ]
    },
    {
      t:'La glomerulonefritis aguda como causa subyacente del síndrome nefrítico',
      p:[
        'La *glomerulonefritis aguda* es la inflamación aguda de los glomérulos que constituye la causa subyacente del síndrome nefrítico, con múltiples causas posibles específicas que se desarrollarán en detalle en el tema de glomerulonefritis más adelante en este bloque, retomando la relación ya establecida entre esta materia y su desarrollo progresivo desde conceptos generales hacia entidades específicas.',
        'Este tema cierra retomando el hilo conductor de todo este bloque de Nefrología: la tríada del síndrome nefrítico -hematuria glomerular, hipertensión de origen renal, y la inflamación glomerular subyacente- contrasta directamente con la tríada del síndrome nefrótico ya vista en el tema anterior, ilustrando cómo dos mecanismos distintos de daño a la misma estructura (el glomérulo) generan dos síndromes clínicos reconociblemente diferentes entre sí.'
      ],
      foco:[
        '*Consideración clínica*: distinguir el origen glomerular de una hematuria (con hematíes deformados característicos) de un origen urológico más distal es indispensable para orientar el diagnóstico diferencial apropiado.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 31.'
},

'trastornos-electroliticos-sodio-potasio': {
  tema:'Trastornos electrolíticos: sodio y potasio',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la función reguladora del riñón ya mencionada en el primer tema de este bloque, ahora aplicada específicamente a su papel central en mantener las concentraciones apropiadas de dos electrolitos fundamentales para la fisiología de prácticamente todos los órganos del cuerpo.',
  claves:['hiponatremia','hiperpotasemia','hipopotasemia'],
  sigue:'trastornos-equilibrio-acido-base',
  secciones:[
    {
      t:'La hiponatremia como trastorno más frecuente del sodio',
      p:[
        'La *hiponatremia* -una concentración de sodio en sangre por debajo de lo normal- es el trastorno electrolítico más frecuente en la práctica clínica, con múltiples causas posibles que incluyen desde un exceso relativo de agua libre hasta una pérdida real de sodio, exigiendo un enfoque diagnóstico sistemático que evalúe el estado de volumen del paciente (deshidratado, euvolémico, o con sobrecarga de volumen) para orientar la causa más probable.',
        'Reconocer que la hiponatremia no tiene una única causa, sino que exige clasificar al paciente según su estado de volumen antes de determinar el manejo apropiado, retoma un principio general ya visto repetidamente en este pensum sobre sistematizar el diagnóstico diferencial de un hallazgo de laboratorio mediante una clasificación clínica estructurada, en vez de aplicar el mismo manejo genérico a toda hiponatremia sin importar su mecanismo subyacente específico.'
      ]
    },
    {
      t:'La hiperpotasemia como trastorno con riesgo cardíaco directo',
      p:[
        'La *hiperpotasemia* -una concentración de potasio en sangre por encima de lo normal, con frecuencia relacionada con la enfermedad renal crónica o la lesión renal aguda ya vistas en este bloque, dado que el riñón es el principal órgano encargado de excretar el exceso de potasio- es particularmente relevante clínicamente porque el potasio elevado altera directamente la excitabilidad eléctrica del corazón, retomando la importancia ya vista sobre el sistema de conducción cardíaco en Cardiología de este mismo cuatrimestre.',
        'Esta conexión directa entre un trastorno electrolítico renal y el riesgo de arritmias cardíacas graves retoma un principio general ya visto repetidamente en este pensum sobre reconocer interconexiones fisiológicas entre sistemas de órganos aparentemente distintos: un trastorno primariamente renal (la incapacidad de excretar potasio apropiadamente) puede generar una consecuencia potencialmente fatal en un órgano distante (el corazón), reforzando por qué la hiperpotasemia se maneja como una urgencia médica real.'
      ]
    },
    {
      t:'La hipopotasemia como trastorno opuesto con sus propias consecuencias',
      p:[
        'La *hipopotasemia* -una concentración de potasio por debajo de lo normal, con causas que incluyen pérdidas digestivas o renales excesivas, o el uso de ciertos diuréticos- también genera alteraciones de la excitabilidad cardíaca, aunque de un patrón distinto al de la hiperpotasemia, además de debilidad muscular generalizada por el papel del potasio en la función neuromuscular.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre la función reguladora del riñón: tanto la hiponatremia como la hiperpotasemia y la hipopotasemia ilustran cómo el riñón, al fallar en su función reguladora normal (ya sea por enfermedad renal crónica, lesión renal aguda, u otros mecanismos), genera consecuencias sistémicas que se extienden considerablemente más allá del propio sistema urinario, afectando de forma directa y potencialmente grave a órganos distantes como el corazón y el sistema neuromuscular.'
      ],
      foco:[
        '*Consideración clínica*: la hiperpotasemia se maneja como una urgencia médica real dado su riesgo directo de generar arritmias cardíacas potencialmente fatales, particularmente relevante en pacientes con enfermedad renal crónica o lesión renal aguda.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 17.'
},

'trastornos-equilibrio-acido-base': {
  tema:'Trastornos del equilibrio ácido-base',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la función reguladora renal ya vista en los trastornos electrolíticos del tema anterior, ahora aplicada al mantenimiento del pH sanguíneo dentro de un rango extremadamente estrecho compatible con la función normal de todas las enzimas y procesos celulares del organismo.',
  claves:['acidosis metabólica','alcalosis metabólica','brecha aniónica'],
  sigue:'glomerulonefritis',
  secciones:[
    {
      t:'La acidosis metabólica y el papel del riñón en su compensación',
      p:[
        'La *acidosis metabólica* es la disminución del pH sanguíneo por un exceso de ácido o una pérdida de la capacidad amortiguadora del organismo, con el riñón cumpliendo un papel central tanto como posible causa (cuando la enfermedad renal crónica ya vista en este bloque compromete la excreción normal de ácido) como en la compensación de acidosis de origen no renal, mediante la excreción aumentada de ácido y la regeneración de bicarbonato.',
        'Reconocer este doble papel del riñón -como posible causa de acidosis cuando está enfermo, y como mecanismo compensador cuando la acidosis se origina en otro sistema- retoma un principio general ya visto repetidamente en este pensum sobre reconocer que un mismo órgano puede participar tanto en la génesis como en la respuesta compensatoria de una misma alteración fisiológica, según el contexto clínico específico.'
      ]
    },
    {
      t:'La alcalosis metabólica como trastorno opuesto',
      p:[
        'La *alcalosis metabólica* es el aumento del pH sanguíneo por una pérdida excesiva de ácido o una ganancia excesiva de bicarbonato, con causas frecuentes que incluyen el vómito prolongado (con pérdida de ácido gástrico) o el uso de ciertos diuréticos, y con el riñón nuevamente participando en su compensación mediante ajustes en la excreción de bicarbonato.',
        'Comprender la acidosis y la alcalosis metabólica como un espectro de desviación del pH normal en direcciones opuestas, ambas con el riñón como órgano compensador central, retoma la importancia ya vista repetidamente en este pensum sobre reconocer espectros de alteración fisiológica en direcciones opuestas de un mismo parámetro central, un patrón ya aplicado a otros contextos como las valvulopatías de estenosis versus insuficiencia en Cardiología de este mismo cuatrimestre.'
      ]
    },
    {
      t:'La brecha aniónica como herramienta diagnóstica para clasificar la acidosis metabólica',
      p:[
        'La *brecha aniónica* es un cálculo derivado de los electrolitos séricos que permite clasificar la acidosis metabólica según su causa probable: una brecha aniónica elevada sugiere la acumulación de un ácido no medido directamente (como en la cetoacidosis o la acidosis láctica), mientras una brecha aniónica normal sugiere una pérdida directa de bicarbonato o una incapacidad renal de excretar ácido apropiadamente.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre el riñón como órgano regulador central del medio interno: la brecha aniónica, como herramienta diagnóstica que orienta hacia la causa específica de una acidosis metabólica, ilustra cómo un cálculo relativamente simple a partir de electrolitos de rutina puede orientar sistemáticamente un diagnóstico diferencial amplio, retomando la importancia ya vista repetidamente en este pensum sobre traducir hallazgos de laboratorio a razonamiento clínico estructurado.'
      ],
      foco:[
        '*Consideración clínica*: la brecha aniónica clasifica sistemáticamente la acidosis metabólica según su causa probable, distinguiendo entre acumulación de un ácido no medido y pérdida directa de bicarbonato o falla renal en la excreción de ácido.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 18.'
},

'glomerulonefritis': {
  tema:'Glomerulonefritis',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente el síndrome nefrítico ya visto, profundizando ahora en las causas específicas de inflamación glomerular que subyacen a ese síndrome, cada una con un mecanismo inmunológico y un curso clínico particular.',
  claves:['glomerulonefritis membranosa','glomerulonefritis por IgA','glomerulonefritis rápidamente progresiva'],
  sigue:'nefropatia-diabetica',
  secciones:[
    {
      t:'La glomerulonefritis membranosa como causa frecuente de síndrome nefrótico del adulto',
      p:[
        'La *glomerulonefritis membranosa* es una causa reconocida de síndrome nefrótico en el adulto, ya visto en otro tema de este bloque, caracterizada por el depósito de complejos inmunológicos en la membrana basal glomerular que engrosa esta estructura y altera su función de barrera de filtración normal, sin la inflamación celular intensa característica de otras formas de glomerulonefritis.',
        'Esta conexión directa entre una causa específica (la glomerulonefritis membranosa) y el síndrome clínico ya vista en otro tema (el síndrome nefrótico) retoma un principio general ya visto repetidamente en este pensum sobre cómo un síndrome clínico general puede tener múltiples causas histológicas específicas subyacentes, cada una con implicaciones pronósticas y de tratamiento distintas, aunque compartan la misma manifestación clínica inicial.'
      ]
    },
    {
      t:'La glomerulonefritis por IgA como causa frecuente de hematuria recurrente',
      p:[
        'La *glomerulonefritis por IgA* es una de las causas más frecuentes de glomerulonefritis a nivel global, caracterizada por el depósito de inmunoglobulina A en el mesangio glomerular, presentándose con frecuencia con episodios recurrentes de hematuria macroscópica, con frecuencia coincidiendo temporalmente con infecciones respiratorias altas.',
        'Esta relación temporal entre infecciones respiratorias y episodios de hematuria retoma la importancia ya vista repetidamente en este pensum sobre reconocer patrones temporales específicos que orientan hacia un diagnóstico particular: la coincidencia repetida entre un desencadenante infeccioso y la aparición de hematuria macroscópica es un patrón clínico reconocible que orienta directamente hacia esta causa específica de glomerulonefritis, distinguiéndola de otras causas sin este patrón temporal característico.'
      ]
    },
    {
      t:'La glomerulonefritis rápidamente progresiva como urgencia nefrológica',
      p:[
        'La *glomerulonefritis rápidamente progresiva* es una forma de inflamación glomerular particularmente agresiva que, sin tratamiento oportuno, puede generar pérdida irreversible de la función renal en cuestión de semanas, retomando directamente la importancia ya vista sobre reconocer urgencias con ventana de tiempo limitada, un principio ya aplicado repetidamente en distintos contextos de este pensum.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre las glomerulonefritis: las tres formas desarrolladas -membranosa, por IgA, y rápidamente progresiva- ilustran un espectro de severidad y urgencia clínica considerablemente distinto entre sí, desde formas de curso más indolente hasta una verdadera urgencia nefrológica, reforzando que el diagnóstico histológico específico, no solo el síndrome clínico general, determina directamente la urgencia y la intensidad del tratamiento requerido.'
      ],
      foco:[
        '*Consideración clínica*: la glomerulonefritis rápidamente progresiva es una verdadera urgencia nefrológica que, sin tratamiento oportuno, puede generar pérdida irreversible de la función renal en cuestión de semanas.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 31.'
},

'nefropatia-diabetica': {
  tema:'Nefropatía diabética',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la enfermedad renal crónica ya vista, mostrando ahora la causa más frecuente de esta condición a nivel global: el daño renal progresivo generado por la diabetes mellitus no controlada apropiadamente a lo largo del tiempo.',
  claves:['nefropatía diabética','microalbuminuria','control glucémico y función renal'],
  sigue:'terapia-reemplazo-renal-dialisis',
  secciones:[
    {
      t:'La nefropatía diabética como causa más frecuente de enfermedad renal crónica',
      p:[
        'La *nefropatía diabética* es la causa más frecuente de enfermedad renal crónica terminal a nivel global, generada por el daño progresivo que la hiperglucemia crónica ejerce sobre los glomérulos y los vasos sanguíneos intrarrenales a lo largo de años de exposición, retomando directamente la importancia ya vista sobre la enfermedad renal crónica y su estadificación en un tema anterior de este bloque, ahora aplicada a su causa etiológica más común.',
        'Reconocer la diabetes mellitus como la causa etiológica más frecuente de enfermedad renal crónica a nivel poblacional retoma un principio general ya visto repetidamente en este pensum sobre identificar las causas más prevalentes de una condición en la población general, información que orienta directamente las prioridades de tamizaje y vigilancia en la práctica clínica cotidiana.'
      ]
    },
    {
      t:'La microalbuminuria como signo más temprano de daño renal diabético',
      p:[
        'La *microalbuminuria* -una pérdida urinaria de albúmina en cantidades pequeñas, por debajo del umbral de la proteinuria en rango nefrótico ya vista en otro tema de este bloque, pero por encima de lo normal- es el signo más temprano y detectable de daño renal en el paciente diabético, apareciendo años antes de que se desarrolle una pérdida significativa de la tasa de filtración glomerular.',
        'Esta relevancia de un hallazgo temprano y sutil, detectable mucho antes de que la función renal se vea comprometida de forma medible, retoma directamente la importancia ya vista repetidamente en este pensum sobre el tamizaje sistemático como herramienta de detección temprana: la búsqueda activa de microalbuminuria en todo paciente diabético, incluso asintomático y sin alteración de la función renal medible, permite identificar el daño renal en su etapa más temprana y potencialmente más modificable.'
      ]
    },
    {
      t:'El control glucémico y su relación con la progresión de la función renal',
      p:[
        'El *control glucémico y función renal* están directamente relacionados: mantener niveles de glucosa dentro de metas apropiadas retrasa significativamente la aparición y progresión de la nefropatía diabética, retomando directamente la importancia ya vista sobre el manejo nefroprotector de la enfermedad renal crónica en general, ahora aplicado específicamente al control de la causa etiológica subyacente en el paciente diabético.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre la prevención y el enlentecimiento de la progresión de la enfermedad renal crónica: de la misma forma que el control de la presión arterial es nefroprotector en general, el control glucémico apropiado es la intervención nefroprotectora específica más relevante en el paciente diabético, reforzando que las estrategias de prevención deben dirigirse específicamente a la causa etiológica subyacente de cada paciente individual.'
      ],
      foco:[
        '*Consideración clínica*: la búsqueda activa de microalbuminuria en todo paciente diabético, incluso asintomático, permite detectar el daño renal en su etapa más temprana y potencialmente más modificable, años antes de que la función renal se vea comprometida de forma medible.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 37.'
},

'terapia-reemplazo-renal-dialisis': {
  tema:'Terapia de reemplazo renal: diálisis',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la enfermedad renal crónica y la lesión renal aguda ya vistas en este bloque, mostrando ahora las opciones terapéuticas disponibles cuando la función renal, ya sea de forma temporal o permanente, ya no es suficiente para mantener la vida sin apoyo externo.',
  claves:['hemodiálisis','diálisis peritoneal','indicaciones de diálisis urgente'],
  sigue:'trasplante-renal-conceptos-basicos',
  secciones:[
    {
      t:'La hemodiálisis como forma de depuración sanguínea extracorpórea',
      p:[
        'La *hemodiálisis* es una técnica de reemplazo renal que extrae la sangre del paciente, la hace pasar a través de un filtro artificial que remueve solutos en exceso y líquido acumulado, y la retorna al paciente, retomando directamente la función de filtración glomerular ya vista al inicio de este bloque, ahora realizada de forma artificial y extracorpórea cuando el riñón propio ya no puede cumplir esta función.',
        'Reconocer la hemodiálisis como una función de filtración externalizada, que reemplaza artificialmente lo que la nefrona ya vista al inicio de este bloque hacía de forma natural, retoma un principio general ya visto repetidamente en este pensum sobre cómo la medicina moderna puede sustituir artificialmente funciones fisiológicas específicas cuando el órgano correspondiente ya no puede cumplirlas de forma autónoma.'
      ]
    },
    {
      t:'La diálisis peritoneal como alternativa que aprovecha una membrana natural',
      p:[
        'La *diálisis peritoneal* utiliza el peritoneo del propio paciente como membrana de filtración natural, introduciendo un líquido de diálisis dentro de la cavidad abdominal que absorbe solutos y líquido en exceso a través de esta membrana, para luego drenarse y eliminarse, ofreciendo una alternativa a la hemodiálisis que el paciente puede realizar en su domicilio con mayor flexibilidad de horario.',
        'Comparar estas dos modalidades de terapia de reemplazo renal -una que utiliza un filtro artificial externo, otra que aprovecha una membrana natural del propio paciente- retoma un principio general ya visto repetidamente en este pensum sobre reconocer que un mismo objetivo terapéutico (en este caso, depurar la sangre de solutos y líquido en exceso) puede lograrse mediante mecanismos técnicos considerablemente distintos, cada uno con ventajas y consideraciones prácticas propias para el paciente específico.'
      ]
    },
    {
      t:'Las indicaciones de diálisis urgente ante complicaciones agudas graves',
      p:[
        'Las *indicaciones de diálisis urgente* incluyen complicaciones agudas y graves de la insuficiencia renal que no responden a manejo médico conservador: hiperpotasemia severa ya vista en otro tema de este bloque, sobrecarga de volumen refractaria, acidosis metabólica severa, o síntomas urémicos significativos, situaciones donde la diálisis se convierte en una intervención de urgencia y no en una terapia electiva programada.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: reconocer estas indicaciones urgentes retoma directamente la importancia ya vista repetidamente en este pensum sobre identificar cuándo una intervención pasa de ser electiva y programada a ser una urgencia inmediata que no admite demora, el mismo principio de reconocimiento de urgencias con ventana de tiempo limitada ya aplicado en múltiples contextos a lo largo de este pensum, ahora aplicado a las complicaciones agudas de la falla renal.'
      ],
      foco:[
        '*Consideración clínica*: la hiperpotasemia severa, la sobrecarga de volumen refractaria, y la acidosis metabólica severa son indicaciones de diálisis urgente, situaciones donde esta intervención deja de ser electiva para convertirse en una urgencia inmediata.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 60.'
},

'trasplante-renal-conceptos-basicos': {
  tema:'Trasplante renal: conceptos básicos',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la terapia de reemplazo renal ya vista, presentando ahora la opción que, a diferencia de la diálisis, no sustituye artificialmente la función renal de forma continua, sino que restaura esa función mediante un órgano funcional nuevo.',
  claves:['trasplante renal','rechazo del injerto renal','inmunosupresión postrasplante'],
  sigue:'nefrolitiasis-manejo-nefrologico',
  secciones:[
    {
      t:'El trasplante renal como opción que restaura la función en vez de sustituirla artificialmente',
      p:[
        'El *trasplante renal* consiste en implantar un riñón funcional, proveniente de un donante vivo o fallecido, en un paciente con enfermedad renal terminal, ofreciendo generalmente una mejor calidad de vida y supervivencia a largo plazo en comparación con la diálisis crónica ya vista en el tema anterior, al restaurar una función renal real en vez de sustituirla artificialmente de forma continua.',
        'Esta distinción entre restaurar la función (trasplante) y sustituirla artificialmente (diálisis) retoma directamente la comparación ya establecida en el tema anterior sobre las dos modalidades de terapia de reemplazo renal: mientras la hemodiálisis y la diálisis peritoneal requieren sesiones repetidas de por vida, el trasplante renal, cuando es exitoso, ofrece una función renal continua sin necesidad de esas sesiones repetidas.'
      ]
    },
    {
      t:'El rechazo del injerto renal como riesgo inmunológico central',
      p:[
        'El *rechazo del injerto renal* es la respuesta inmunológica del receptor contra el órgano trasplantado, reconocido por el sistema inmunológico como tejido extraño a pesar de la compatibilidad buscada entre donante y receptor -este riesgo inmunológico es el principal desafío del trasplante renal, exigiendo un manejo inmunosupresor cuidadoso que se desarrollará en el siguiente apartado de este tema.',
        'Reconocer el rechazo como una respuesta inmunológica normal del organismo ante tejido extraño, no como una falla técnica del procedimiento quirúrgico en sí mismo, retoma un principio general ya visto repetidamente en este pensum sobre comprender mecanismos inmunológicos como respuestas fisiológicas del organismo, aplicadas aquí a un contexto donde esa misma respuesta normal se convierte en un problema clínico que debe manejarse activamente.'
      ]
    },
    {
      t:'La inmunosupresión postrasplante como manejo del riesgo de rechazo',
      p:[
        'La *inmunosupresión postrasplante* -el uso de medicamentos que reducen la actividad del sistema inmunológico del receptor, de por vida tras el trasplante- busca prevenir el rechazo del injerto ya visto en el apartado anterior, aunque a costa de un riesgo aumentado de infecciones y ciertas neoplasias, exigiendo un balance cuidadoso entre suficiente inmunosupresión para proteger el injerto y no tanta como para generar complicaciones significativas por la inmunidad reducida.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum sobre el balance riesgo-beneficio de una intervención terapéutica con efectos secundarios propios: de la misma forma que la anticoagulación en fibrilación auricular de Cardiología se individualiza balanceando riesgo embólico contra riesgo de sangrado, la inmunosupresión postrasplante se individualiza y ajusta continuamente balanceando el riesgo de rechazo contra el riesgo de complicaciones infecciosas y oncológicas asociadas a la inmunidad reducida.'
      ],
      foco:[
        '*Consideración clínica*: la inmunosupresión postrasplante exige un balance cuidadoso y continuo entre suficiente protección contra el rechazo del injerto y el riesgo aumentado de infecciones y neoplasias asociado a la inmunidad reducida.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 65.'
},

'nefrolitiasis-manejo-nefrologico': {
  tema:'Nefrolitiasis: manejo nefrológico',
  bloque:'Nefrología', programa:'unirm', cuatri:13, min:13,
  idea:'Este último tema cierra el bloque de Nefrología retomando directamente la litiasis urinaria ya vista desde la perspectiva urológica en el cuatrimestre anterior, ahora enfocándose en el papel específico del nefrólogo en la prevención de la recurrencia y el manejo de las complicaciones metabólicas asociadas.',
  claves:['prevención metabólica de litiasis renal','estudio metabólico del litiásico recurrente','nefrolitiasis complicada'],
  sigue:'anatomia-fisiologia-respiratoria',
  secciones:[
    {
      t:'La prevención metabólica de litiasis renal como complemento del manejo urológico',
      p:[
        'La *prevención metabólica de litiasis renal* retoma directamente el manejo de la litiasis urinaria ya vista desde la perspectiva urológica en Urología del cuatrimestre anterior, aportando ahora la perspectiva nefrológica complementaria: mientras la urología se enfoca en resolver el cálculo agudo ya formado, la nefrología se enfoca en identificar y corregir las alteraciones metabólicas subyacentes que favorecen la formación recurrente de nuevos cálculos.',
        'Esta división complementaria entre el manejo urológico agudo y la prevención nefrológica a largo plazo retoma directamente el principio ya visto sobre hidratación adecuada como medida preventiva simple de la litiasis urinaria en Urología, profundizando ahora en medidas preventivas más específicas dirigidas a la composición particular del cálculo y las alteraciones metabólicas individuales de cada paciente.'
      ]
    },
    {
      t:'El estudio metabólico del litiásico recurrente',
      p:[
        'El *estudio metabólico del litiásico recurrente* -indicado en pacientes con episodios repetidos de litiasis urinaria, retomando la importancia ya vista sobre investigar causas subyacentes ante un patrón que se repite, en vez de tratar cada episodio de forma aislada- evalúa factores como la composición del cálculo, los niveles urinarios de calcio, oxalato, ácido úrico, y citrato, buscando identificar la alteración metabólica específica que explica la recurrencia.',
        'Reconocer que este estudio se reserva específicamente para pacientes con recurrencia, no para todo episodio aislado de litiasis, retoma un principio general ya visto repetidamente en este pensum sobre dirigir estudios diagnósticos más extensos hacia los casos que realmente lo justifican por su patrón clínico específico, en vez de aplicarlos de forma indiscriminada a toda presentación inicial y aislada de una condición.'
      ]
    },
    {
      t:'La nefrolitiasis complicada y su relevancia nefrológica',
      p:[
        'La *nefrolitiasis complicada* -cuando la litiasis urinaria genera obstrucción persistente, infección asociada, o deterioro progresivo de la función renal- retoma directamente la lesión renal aguda posrenal ya vista en este mismo bloque, ilustrando cómo una condición inicialmente considerada primariamente urológica puede generar consecuencias nefrológicas directas cuando no se resuelve oportunamente.',
        'Este tema, y con él todo el bloque de Nefrología, cierra retomando el hilo conductor completo de toda esta materia: desde la fisiología renal normal del primer tema hasta esta nefrolitiasis complicada final, cada condición desarrollada -enfermedad renal crónica, lesión renal aguda, síndromes nefrótico y nefrítico, trastornos electrolíticos y ácido-base, glomerulonefritis, nefropatía diabética, terapia de reemplazo renal, trasplante, y ahora litiasis- ilustra cómo comprender la función renal normal como filtro y regulador del medio interno es indispensable para entender cualquiera de sus alteraciones específicas, el mismo principio que atravesó transversalmente toda esta materia.'
      ],
      foco:[
        '*Consideración clínica*: el estudio metabólico extenso se reserva para el paciente con litiasis urinaria recurrente, no para todo episodio aislado, buscando identificar la alteración metabólica específica que explica la recurrencia y orienta la prevención dirigida.'
      ]
    }
  ],
  ref:'Brenner y Rector, El Riñón, cap. 45.'
}

});
