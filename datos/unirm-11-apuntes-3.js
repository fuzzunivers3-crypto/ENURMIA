/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 11 (lote 3)
   Cubre GINECOLOGÍA I al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Tercera materia del
   cuatrimestre 11 (4 creditos, 13 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== GINECOLOGÍA I ==================== */
'anatomia-fisiologia-aparato-reproductor-femenino': {
  tema:'Anatomía y fisiología del aparato reproductor femenino',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:13,
  idea:'Mientras Obstetricia I se centró en el embarazo, Ginecología I retoma el aparato reproductor femenino en su funcionamiento habitual fuera del embarazo -un punto de partida indispensable antes de abordar cualquier patología ginecológica específica.',
  claves:['anatomía pélvica femenina','eje hipotálamo-hipófisis-ovario','fisiología reproductiva femenina'],
  sigue:'ciclo-menstrual-normal',
  secciones:[
    {
      t:'La anatomía pélvica femenina como base de la exploración ginecológica',
      p:[
        'La *anatomía pélvica femenina* incluye los órganos genitales externos (vulva), la vagina, el útero (cuerpo y cuello), las trompas de Falopio, y los ovarios, cada uno con una relación anatómica específica con los órganos vecinos (vejiga, recto, estructuras vasculares y nerviosas pélvicas) que resulta relevante tanto para la exploración física ginecológica como para entender la presentación clínica de distintas condiciones.',
        'Un dominio claro de esta anatomía es la base indispensable antes de abordar cualquier patología ginecológica específica: sin entender la relación normal entre estos órganos, resulta difícil interpretar correctamente un hallazgo durante el examen físico o localizar con precisión el origen probable de un síntoma como el dolor pélvico, tema que se retoma con detalle al cierre de este bloque.'
      ]
    },
    {
      t:'El eje hipotálamo-hipófisis-ovario',
      p:[
        'El *eje hipotálamo-hipófisis-ovario* es el sistema de comunicación hormonal que regula la función reproductiva femenina: el hipotálamo libera la hormona liberadora de gonadotropinas (GnRH), que estimula a la hipófisis para liberar la hormona folículo-estimulante (FSH) y la hormona luteinizante (LH), las cuales a su vez actúan sobre el ovario para regular el desarrollo folicular, la ovulación, y la producción de estrógenos y progesterona.',
        'Este eje funciona mediante un sistema de retroalimentación: los niveles de hormonas ováricas (estrógenos, progesterona) influyen de vuelta sobre el hipotálamo y la hipófisis, ajustando la liberación de GnRH, FSH y LH según la fase del ciclo -este mismo eje es la base fisiológica sobre la que actúan la mayoría de los métodos anticonceptivos hormonales, tema que se desarrolla más adelante en este bloque.'
      ]
    },
    {
      t:'Por qué entender esta fisiología es la base de toda la ginecología',
      p:[
        'Prácticamente toda la patología ginecológica que se estudia en este bloque -desde los trastornos menstruales hasta el climaterio- se entiende mejor a la luz de este eje hormonal y de la anatomía pélvica normal: un trastorno menstrual, por ejemplo, puede tener su origen en una disfunción de cualquier nivel de este eje (hipotalámico, hipofisario u ovárico), y reconocer esta posibilidad orienta el abordaje diagnóstico apropiado.',
        'Este tema, como punto de partida del bloque, cumple la misma función que fisiología del embarazo normal cumplió al inicio de Obstetricia I: establecer el marco de referencia de lo fisiológicamente normal, sobre el cual se construye después el reconocimiento de cualquier desviación patológica.'
      ],
      foco:[
        '*Consideración clínica*: entender el eje hipotálamo-hipófisis-ovario como sistema de retroalimentación ayuda a interpretar por qué una disfunción en cualquiera de sus niveles puede manifestarse clínicamente como un trastorno menstrual, un tema que se desarrolla con más detalle a continuación.'
      ]
    }
  ],
  ref:'Speroff, Endocrinología Ginecológica Clínica, cap. 1.'
},

'ciclo-menstrual-normal': {
  tema:'Ciclo menstrual normal',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:13,
  idea:'El ciclo menstrual normal, con su alternancia predecible entre la fase folicular y la fase lútea, es el resultado visible del funcionamiento coordinado del eje hipotálamo-hipófisis-ovario ya visto en el tema anterior -entenderlo es indispensable para reconocer después cualquier trastorno menstrual.',
  claves:['fase folicular','fase lútea','ovulación'],
  sigue:'historia-clinica-ginecologica',
  secciones:[
    {
      t:'La fase folicular: del inicio del sangrado a la ovulación',
      p:[
        'La *fase folicular* es la primera mitad del ciclo menstrual, desde el primer día del sangrado menstrual hasta la ovulación, caracterizada por el crecimiento de un grupo de folículos ováricos bajo la influencia de la FSH, de los cuales generalmente uno se convierte en el folículo dominante que eventualmente liberará el óvulo, mientras el estrógeno producido por este folículo en desarrollo estimula el engrosamiento del revestimiento uterino (endometrio).',
        'La duración de la fase folicular es la porción más variable del ciclo menstrual entre distintas mujeres, y también entre distintos ciclos en la misma mujer -esta variabilidad es la razón principal por la que la duración total del ciclo menstrual puede variar considerablemente entre mujeres, aunque la fase lútea, como se ve a continuación, tiende a ser mucho más constante.'
      ]
    },
    {
      t:'La ovulación: el punto de inflexión del ciclo',
      p:[
        'La *ovulación* es la liberación del óvulo maduro desde el folículo dominante, desencadenada por un pico brusco de LH (el llamado pico de LH), que ocurre generalmente alrededor de la mitad del ciclo -este evento marca la transición entre la fase folicular y la fase lútea, y es el momento de mayor probabilidad de concepción si ocurre relación sexual sin protección anticonceptiva en los días cercanos.',
        'Reconocer el momento aproximado de la ovulación tiene relevancia clínica práctica tanto para la planificación de un embarazo deseado como, en sentido inverso, para entender la base fisiológica de ciertos métodos anticonceptivos que buscan evitar precisamente la fecundación durante esta ventana fértil.'
      ]
    },
    {
      t:'La fase lútea: la constancia después de la ovulación',
      p:[
        'La *fase lútea* es la segunda mitad del ciclo menstrual, desde la ovulación hasta el inicio del siguiente sangrado menstrual, dominada por la progesterona producida por el cuerpo lúteo (la estructura que queda tras la liberación del óvulo), que prepara y mantiene el endometrio en condiciones receptivas para una posible implantación.',
        'A diferencia de la fase folicular, la duración de la fase lútea es notablemente más constante entre mujeres, generalmente alrededor de 14 días -si no ocurre implantación de un embarazo, el cuerpo lúteo deja de producir progesterona, el endometrio pierde su soporte hormonal, y ocurre el sangrado menstrual que marca el inicio de un nuevo ciclo, cerrando así la secuencia completa que retoma directamente al inicio de la fase folicular.'
      ],
      foco:[
        '*Consideración clínica*: la fase lútea tiene una duración mucho más constante que la fase folicular entre distintas mujeres; esta constancia es una herramienta práctica útil al estimar retrospectivamente el momento aproximado de la ovulación en un ciclo dado.'
      ]
    }
  ],
  ref:'Speroff, Endocrinología Ginecológica Clínica, cap. 3.'
},

'historia-clinica-ginecologica': {
  tema:'Historia clínica ginecológica',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:13,
  idea:'La historia clínica ginecológica, junto con el examen pélvico y la especuloscopia, forma la base de la evaluación ginecológica sistemática, aplicando principios ya vistos sobre entrevista clínica adaptados a un contexto que exige particular sensibilidad.',
  claves:['anamnesis ginecológica','examen pélvico','especuloscopia'],
  sigue:'trastornos-menstruales',
  secciones:[
    {
      t:'La anamnesis ginecológica y sus componentes específicos',
      p:[
        'La *anamnesis ginecológica* incluye, además de los componentes generales de cualquier historia clínica, elementos específicos de este contexto: antecedentes menstruales (edad de la primera menstruación, características del ciclo, fecha de la última menstruación), antecedentes obstétricos (número de embarazos, partos, abortos), antecedentes de métodos anticonceptivos utilizados, actividad sexual (relevante para evaluar riesgo de infecciones de transmisión sexual y necesidades anticonceptivas), y antecedentes de tamizajes ginecológicos previos.',
        'Esta información retoma directamente los conceptos ya vistos en Obstetricia I (edad gestacional, fases del ciclo) y en el tema anterior de este bloque (fase folicular, ovulación, fase lútea), aplicándolos ahora como preguntas estructuradas dentro de la entrevista clínica ginecológica sistemática.'
      ]
    },
    {
      t:'El examen pélvico como parte central de la evaluación ginecológica',
      p:[
        'El *examen pélvico* incluye la inspección de los genitales externos, la exploración vaginal y del cuello uterino mediante espéculo (especuloscopia, que se desarrolla a continuación), y el examen bimanual (palpación combinada abdominal y vaginal) para evaluar el tamaño, la forma y la movilidad del útero y los anexos (trompas y ovarios).',
        'Retomando la misma lógica ya vista repetidamente sobre comunicación estructurada y consentimiento informado en Relación Médico-Paciente (9no), el examen pélvico exige una explicación clara previa de lo que se va a realizar y por qué, junto con el consentimiento explícito de la paciente -un contexto de examen físico particularmente sensible donde esta comunicación clara es especialmente relevante.'
      ]
    },
    {
      t:'La especuloscopia y su papel diagnóstico',
      p:[
        'La *especuloscopia* es la visualización directa de la vagina y el cuello uterino mediante un espéculo, un instrumento que permite separar las paredes vaginales para una inspección directa -permite evaluar el aspecto del cuello uterino, detectar signos de infección o inflamación, y es el paso previo indispensable para tomar muestras como la citología cervical, herramienta central del tamizaje de cáncer cervicouterino que se desarrolla más adelante en este bloque.',
        'Este tema cierra con un principio general que retoma la práctica de este pensum: cada componente de la evaluación ginecológica (anamnesis, examen pélvico, especuloscopia) tiene un propósito específico dentro de una evaluación integral, y omitir alguno de ellos sin una razón clínica clara compromete la calidad diagnóstica del proceso completo.'
      ],
      foco:[
        '*Consideración clínica*: el examen pélvico, dada su particular sensibilidad, exige explicar con claridad a la paciente qué se va a realizar y obtener su consentimiento explícito antes de proceder, retomando la importancia ya vista de la comunicación estructurada en contextos clínicos delicados.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 8.'
},

'trastornos-menstruales': {
  tema:'Trastornos menstruales',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:13,
  idea:'Los trastornos menstruales son uno de los motivos de consulta ginecológica más frecuentes, y su evaluación sistemática exige distinguir entre distintos patrones de alteración, cada uno con un diagnóstico diferencial propio.',
  claves:['amenorrea','sangrado uterino anormal','dismenorrea'],
  sigue:'anticoncepcion',
  secciones:[
    {
      t:'Amenorrea: la ausencia de menstruación',
      p:[
        'La *amenorrea* es la ausencia de menstruación, clasificada convencionalmente en primaria (cuando la menstruación nunca se ha presentado a una edad en que ya debería haber ocurrido) y secundaria (cuando la menstruación, previamente presente y regular, cesa durante un periodo prolongado) -esta distinción orienta considerablemente el diagnóstico diferencial: la amenorrea primaria sugiere con mayor frecuencia una alteración estructural o del desarrollo, mientras la secundaria sugiere con mayor frecuencia una disfunción del eje hipotálamo-hipófisis-ovario ya visto al inicio de este bloque, o condiciones como el embarazo, que siempre debe descartarse primero.',
        'Descartar un embarazo como primera consideración ante una amenorrea secundaria en una mujer en edad reproductiva es un principio clínico básico pero frecuentemente subestimado -retomando la lógica ya vista sobre diagnóstico de embarazo en Obstetricia I, un embarazo no sospechado puede confundirse con otros trastornos menstruales si no se descarta activamente desde el inicio de la evaluación.'
      ]
    },
    {
      t:'Sangrado uterino anormal: cuando el patrón se desvía de lo esperado',
      p:[
        'El *sangrado uterino anormal* engloba cualquier desviación del patrón menstrual esperado en cuanto a frecuencia, duración, regularidad o cantidad -incluye sangrado excesivamente abundante, sangrado entre periodos menstruales, ciclos excesivamente frecuentes o infrecuentes, y sangrado posterior a la menopausia (este último considerado siempre anormal y que amerita evaluación, un principio que se retoma en el tema de climaterio y menopausia más adelante).',
        'Las causas del sangrado uterino anormal son heterogéneas y varían según la edad de la mujer: en la edad reproductiva son más frecuentes causas estructurales (como la miomatosis uterina, tema que se desarrolla más adelante en este bloque) o disfuncionales relacionadas con el ciclo ovulatorio, mientras después de la menopausia cualquier sangrado amerita descartar activamente una patología maligna hasta demostrar lo contrario.'
      ]
    },
    {
      t:'Dismenorrea: el dolor asociado a la menstruación',
      p:[
        'La *dismenorrea* es el dolor pélvico asociado a la menstruación, clasificada en primaria (dolor sin una patología pélvica estructural identificable, relacionado con la producción excesiva de prostaglandinas durante la menstruación) y secundaria (dolor asociado a una condición identificable subyacente, como la endometriosis, tema que se retoma con detalle en el tema de dolor pélvico crónico al cierre de este bloque).',
        'Esta distinción entre dismenorrea primaria y secundaria retoma el mismo principio ya visto repetidamente en este pensum de diferenciar una condición funcional (sin causa estructural identificable) de una orgánica (con una causa estructural específica): un dolor menstrual que aparece por primera vez años después de la menarquia, o que empeora progresivamente con el tiempo, orienta más hacia una causa secundaria que amerita investigación adicional.'
      ],
      foco:[
        '*Consideración clínica*: ante cualquier amenorrea secundaria en una mujer en edad reproductiva, descartar un embarazo debe ser siempre el primer paso de la evaluación, antes de considerar otras causas del trastorno menstrual.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 15.'
},

'anticoncepcion': {
  tema:'Anticoncepción',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:14,
  idea:'La elección de un método anticonceptivo no es una decisión única y universal, sino una recomendación que debe individualizarse según las necesidades, preferencias y condiciones de salud particulares de cada mujer.',
  claves:['métodos anticonceptivos hormonales','dispositivo intrauterino','anticoncepción de emergencia'],
  sigue:'infecciones-transmision-sexual',
  secciones:[
    {
      t:'Métodos anticonceptivos hormonales: actuando sobre el eje ya visto',
      p:[
        'Los *métodos anticonceptivos hormonales* -anticonceptivos orales combinados, solo de progestina, inyectables, implantes subdérmicos, entre otros- actúan principalmente suprimiendo la ovulación mediante la modificación del eje hipotálamo-hipófisis-ovario ya visto al inicio de este bloque, además de espesar el moco cervical y modificar el endometrio, dificultando adicionalmente la fecundación e implantación.',
        'La elección entre las distintas presentaciones hormonales disponibles (oral, inyectable, implante) depende de factores individuales como la preferencia de la mujer respecto a la frecuencia de administración, contraindicaciones específicas (ciertas condiciones médicas contraindican los métodos que contienen estrógeno, por ejemplo), y el acceso real disponible en su contexto -otra aplicación del principio de individualización que atraviesa toda la atención clínica de calidad.'
      ]
    },
    {
      t:'El dispositivo intrauterino: un método de acción prolongada y reversible',
      p:[
        'El *dispositivo intrauterino* es un método anticonceptivo colocado directamente dentro de la cavidad uterina, disponible en presentaciones hormonales (que liberan progestina de forma local) y no hormonales (de cobre, que genera un ambiente localmente tóxico para los espermatozoides), caracterizado por una alta efectividad, una duración prolongada (varios años según el tipo), y la reversibilidad inmediata de su efecto anticonceptivo una vez retirado.',
        'Este tipo de método pertenece a la categoría de anticonceptivos reversibles de acción prolongada, cuya principal ventaja práctica frente a métodos que requieren uso diario o frecuente (como los anticonceptivos orales) es que no depende de la adherencia constante de la usuaria una vez colocado, reduciendo considerablemente el riesgo de un embarazo no planificado por olvido o uso incorrecto.'
      ]
    },
    {
      t:'Anticoncepción de emergencia: la ventana de acción posterior',
      p:[
        'La *anticoncepción de emergencia* es un método utilizado después de una relación sexual sin protección o con falla del método habitual, diseñado para prevenir el embarazo principalmente retrasando o inhibiendo la ovulación -su efectividad es mayor cuanto antes se administre después de la relación sexual, dentro de una ventana de tiempo limitada, lo que retoma la importancia de la oportunidad temprana ya vista repetidamente en distintos contextos clínicos de este pensum.',
        'Es importante aclarar, dada la confusión frecuente en la población general, que la anticoncepción de emergencia actúa antes de la implantación, no interrumpe un embarazo ya establecido -esta distinción tiene relevancia clínica y ética que amerita ser comunicada con claridad a cualquier mujer que consulte sobre este método.'
      ],
      foco:[
        '*Consideración clínica*: la elección del método anticonceptivo debe individualizarse según las necesidades, preferencias y condiciones de salud de cada mujer, sin asumir que un único método es universalmente el más apropiado para todas.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 13.'
},

'infecciones-transmision-sexual': {
  tema:'Infecciones de transmisión sexual en la mujer',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:13,
  idea:'Las infecciones de transmisión sexual son un grupo de condiciones donde la detección temprana no solo protege a la paciente evaluada, sino también a su pareja o parejas sexuales, retomando el enfoque de salud pública ya visto en otros bloques de este pensum.',
  claves:['infección de transmisión sexual','clamidia','gonorrea'],
  sigue:'enfermedad-pelvica-inflamatoria',
  secciones:[
    {
      t:'Principios generales de las infecciones de transmisión sexual',
      p:[
        'Una *infección de transmisión sexual* es una infección que se transmite principalmente a través del contacto sexual, con un espectro de presentaciones que va desde infecciones completamente asintomáticas hasta cuadros clínicos evidentes -esta variabilidad en la presentación es precisamente lo que hace que el tamizaje activo, no solo la evaluación reactiva ante síntomas, sea una parte central del manejo de estas condiciones en la población sexualmente activa.',
        'Retomando la lógica ya vista sobre tamizaje sistemático en varios bloques de este pensum, muchas infecciones de transmisión sexual se detectan precisamente porque se buscan de forma activa en poblaciones de riesgo, no porque la paciente consulte espontáneamente por síntomas evidentes -una infección asintomática, sin tamizaje, puede persistir sin diagnóstico durante un tiempo considerable, con riesgo de complicaciones y de transmisión continuada a otras personas.'
      ]
    },
    {
      t:'Clamidia: la infección bacteriana frecuentemente asintomática',
      p:[
        'La *clamidia* (infección por Chlamydia trachomatis) es una de las infecciones de transmisión sexual bacterianas más frecuentes, caracterizada por presentarse de forma asintomática en una proporción considerable de los casos, particularmente en mujeres, lo que la convierte en un ejemplo especialmente relevante de por qué el tamizaje activo es indispensable en esta condición.',
        'Sin tratamiento, la clamidia no diagnosticada puede ascender desde el cuello uterino hacia el tracto genital superior, con riesgo de generar enfermedad pélvica inflamatoria, tema que se desarrolla en el siguiente tema de este bloque -esta progresión silenciosa es precisamente la razón por la que el tamizaje sistemático en poblaciones de riesgo cambia sustancialmente el pronóstico frente a esperar la aparición de síntomas evidentes.'
      ]
    },
    {
      t:'Gonorrea: otra infección bacteriana con relevancia similar',
      p:[
        'La *gonorrea* (infección por Neisseria gonorrhoeae) comparte con la clamidia varias características clínicamente relevantes: puede presentarse de forma asintomática, particularmente en mujeres, y sin tratamiento oportuno también conlleva riesgo de ascender hacia el tracto genital superior y generar enfermedad pélvica inflamatoria -de hecho, la coinfección con clamidia es relativamente frecuente, por lo que su evaluación y tratamiento con frecuencia se consideran de forma conjunta.',
        'Un principio clínicamente relevante en el manejo de las infecciones de transmisión sexual es la necesidad de tratar también a la pareja o parejas sexuales de la paciente diagnosticada, incluso si estas no presentan síntomas evidentes -sin este manejo conjunto, la paciente tratada corre el riesgo de una reinfección inmediata por su propia pareja no tratada, un ciclo que compromete la efectividad del tratamiento individual aislado.'
      ],
      foco:[
        '*Consideración clínica*: el tratamiento de una infección de transmisión sexual diagnosticada debe extenderse a la pareja o parejas sexuales de la paciente, sin importar si estas presentan síntomas, para evitar el ciclo de reinfección.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 17.'
},

'enfermedad-pelvica-inflamatoria': {
  tema:'Enfermedad pélvica inflamatoria',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:13,
  idea:'La enfermedad pélvica inflamatoria ilustra de forma directa la consecuencia clínica de una infección de transmisión sexual no tratada oportunamente: una complicación que puede tener secuelas permanentes sobre la fertilidad de la mujer afectada.',
  claves:['enfermedad pélvica inflamatoria','absceso tuboovárico','secuelas de la EPI'],
  sigue:'vulvovaginitis',
  secciones:[
    {
      t:'Qué es la enfermedad pélvica inflamatoria y cómo se origina',
      p:[
        'La *enfermedad pélvica inflamatoria* es la infección e inflamación del tracto genital superior femenino (útero, trompas de Falopio, ovarios, y estructuras pélvicas adyacentes), originada con mayor frecuencia por el ascenso de una infección de transmisión sexual no tratada -como la clamidia o la gonorrea ya vistas en el tema anterior- desde el cuello uterino hacia estas estructuras superiores.',
        'La presentación clínica es variable, desde dolor pélvico leve hasta cuadros de dolor abdominal significativo con fiebre y compromiso del estado general, lo que puede dificultar el diagnóstico oportuno en presentaciones más leves -retomando el principio ya visto sobre la importancia de mantener una sospecha activa incluso ante presentaciones clínicas menos evidentes.'
      ]
    },
    {
      t:'El absceso tuboovárico como complicación local grave',
      p:[
        'El *absceso tuboovárico* es una colección de material purulento que involucra la trompa de Falopio y el ovario, una complicación más avanzada y grave de la enfermedad pélvica inflamatoria no tratada oportunamente, que puede requerir manejo hospitalario y, en casos de ruptura, representa una verdadera emergencia quirúrgica por el riesgo de peritonitis generalizada.',
        'Esta progresión -de una infección de transmisión sexual asintomática, hacia una enfermedad pélvica inflamatoria, hacia potencialmente un absceso tuboovárico- ilustra de forma concreta por qué el tamizaje y tratamiento tempranos de las infecciones de transmisión sexual, ya vistos en el tema anterior, tienen un impacto que va mucho más allá de tratar la infección inicial en sí misma.'
      ]
    },
    {
      t:'Las secuelas de la EPI: el impacto sobre la fertilidad futura',
      p:[
        'Las *secuelas de la EPI* incluyen, de forma particularmente relevante, el riesgo de infertilidad por daño tubárico (cicatrización y obstrucción de las trompas de Falopio), embarazo ectópico en embarazos futuros (por el mismo daño tubárico que dificulta el tránsito normal del óvulo fecundado hacia el útero, retomando el tema ya visto en Obstetricia I), y dolor pélvico crónico, tema que se desarrolla al cierre de este bloque.',
        'Estas secuelas, con frecuencia permanentes incluso después de tratar exitosamente el episodio agudo de infección, son la razón principal por la que la prevención mediante detección y tratamiento temprano de las infecciones de transmisión sexual es tan valorada en la ginecología preventiva -un ejemplo más de cómo, en medicina, prevenir con frecuencia protege contra consecuencias que el tratamiento posterior ya no puede revertir por completo.'
      ],
      foco:[
        '*Consideración clínica*: las secuelas de la enfermedad pélvica inflamatoria sobre la fertilidad futura -infertilidad, riesgo de embarazo ectópico, dolor pélvico crónico- son con frecuencia permanentes, lo que refuerza la importancia de tratar oportunamente cualquier infección de transmisión sexual identificada.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 17.'
},

'vulvovaginitis': {
  tema:'Vulvovaginitis',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:13,
  idea:'La vulvovaginitis es uno de los motivos de consulta ginecológica más frecuentes en la práctica clínica diaria, y distinguir entre sus tres causas principales es una habilidad de alto rendimiento clínico, ya que orienta directamente el tratamiento apropiado.',
  claves:['vaginosis bacteriana','candidiasis vulvovaginal','tricomoniasis'],
  sigue:'climaterio-menopausia',
  secciones:[
    {
      t:'Vaginosis bacteriana: el desequilibrio de la flora vaginal normal',
      p:[
        'La *vaginosis bacteriana* no es propiamente una infección de transmisión sexual, sino un desequilibrio de la flora vaginal normal, con disminución de los lactobacilos protectores y sobrecrecimiento de otras bacterias, característicamente presentándose con una secreción vaginal de olor desagradable (con frecuencia descrito como olor a pescado, particularmente notable después de las relaciones sexuales), generalmente sin inflamación significativa asociada -de ahí el término "vaginosis" en vez de "vaginitis" propiamente dicha.',
        'Esta distinción entre desequilibrio de la flora normal e infección propiamente dicha tiene implicaciones prácticas: la vaginosis bacteriana no requiere tratamiento de la pareja sexual de la mujer, a diferencia de lo ya visto sobre infecciones de transmisión sexual en el tema correspondiente de este bloque.'
      ]
    },
    {
      t:'Candidiasis vulvovaginal: la infección fúngica más frecuente',
      p:[
        'La *candidiasis vulvovaginal* es la infección por el hongo Candida (con mayor frecuencia Candida albicans), caracterizada típicamente por una secreción vaginal espesa y blanquecina (con frecuencia descrita con la comparación a "requesón"), acompañada de prurito vulvovaginal significativo y, con frecuencia, enrojecimiento e irritación local -a diferencia de la vaginosis bacteriana, esta condición sí involucra una verdadera inflamación de los tejidos afectados.',
        'Ciertos factores predisponen a un episodio de candidiasis vulvovaginal, incluyendo el uso reciente de antibióticos (que altera el equilibrio de la flora vaginal normal, favoreciendo el sobrecrecimiento fúngico), la diabetes mal controlada, y estados de inmunosupresión -reconocer estos factores predisponentes ayuda a entender por qué ciertas mujeres experimentan episodios recurrentes de esta condición.'
      ]
    },
    {
      t:'Tricomoniasis: la única de las tres que sí es de transmisión sexual',
      p:[
        'La *tricomoniasis* (infección por el parásito Trichomonas vaginalis) es, de las tres causas principales de vulvovaginitis vistas en este tema, la única que se considera propiamente una infección de transmisión sexual, presentándose con una secreción vaginal característicamente abundante, de color amarillo-verdoso, con frecuencia acompañada de mal olor y de síntomas irritativos vulvovaginales significativos.',
        'Precisamente por su naturaleza de transmisión sexual, y a diferencia de la vaginosis bacteriana y la candidiasis vulvovaginal, el tratamiento de la tricomoniasis sí debe extenderse a la pareja sexual de la mujer afectada, retomando directamente el mismo principio ya visto en el tema de infecciones de transmisión sexual: sin este manejo conjunto, el riesgo de reinfección inmediata compromete la efectividad del tratamiento.'
      ],
      foco:[
        '*Consideración clínica*: de las tres causas principales de vulvovaginitis, solo la tricomoniasis requiere tratamiento de la pareja sexual; distinguir correctamente entre las tres condiciones evita tanto un tratamiento innecesario de la pareja como omitirlo cuando sí es necesario.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 16.'
},

'climaterio-menopausia': {
  tema:'Climaterio y menopausia',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:13,
  idea:'El climaterio y la menopausia representan una transición fisiológica normal en la vida reproductiva de la mujer, no una enfermedad, aunque los cambios hormonales asociados generan síntomas que con frecuencia ameritan atención clínica.',
  claves:['menopausia','síndrome climatérico','terapia hormonal de la menopausia'],
  sigue:'patologia-benigna-mama',
  secciones:[
    {
      t:'Menopausia: la definición retrospectiva',
      p:[
        'La *menopausia* se define, de forma retrospectiva, como el cese permanente de la menstruación, confirmado tras doce meses consecutivos de amenorrea sin otra causa que lo explique, reflejando el agotamiento de la reserva folicular ovárica y la consecuente disminución significativa en la producción de estrógenos -este declive hormonal es la base fisiológica de la mayoría de los síntomas asociados a esta transición.',
        'El *climaterio* es el periodo de transición más amplio que rodea a la menopausia, incluyendo tanto los años previos (perimenopausia, con ciclos menstruales cada vez más irregulares) como los años posteriores, durante el cual el cuerpo se adapta progresivamente al nuevo estado hormonal de baja producción estrogénica sostenida.'
      ]
    },
    {
      t:'El síndrome climatérico y sus manifestaciones',
      p:[
        'El *síndrome climatérico* engloba el conjunto de síntomas asociados a la disminución de estrógenos durante esta transición: bochornos (sensación súbita de calor, con frecuencia acompañada de sudoración y enrojecimiento), sequedad vaginal, alteraciones del sueño, cambios del estado de ánimo, y a más largo plazo, mayor riesgo de osteoporosis (retomando la conexión con osteoporosis ya vista en otros bloques del pensum) y de ciertas condiciones cardiovasculares.',
        'La intensidad y el impacto de estos síntomas varían considerablemente entre mujeres -algunas experimentan síntomas mínimos que no requieren ninguna intervención específica, mientras otras experimentan síntomas suficientemente intensos como para afectar significativamente su calidad de vida, lo que orienta la decisión sobre si una intervención terapéutica específica es apropiada para una mujer en particular.'
      ]
    },
    {
      t:'La terapia hormonal de la menopausia: beneficios y consideraciones',
      p:[
        'La *terapia hormonal de la menopausia* consiste en la administración de estrógenos (con o sin progestágeno, según si la mujer conserva o no el útero) para aliviar los síntomas del síndrome climatérico y reducir el riesgo de osteoporosis asociado a la deficiencia estrogénica -su indicación se individualiza según la severidad de los síntomas, el tiempo transcurrido desde la menopausia, y la presencia de contraindicaciones específicas en cada mujer.',
        'Esta individualización retoma directamente el mismo principio ya visto sobre anticoncepción, más atrás en este bloque: una intervención hormonal no es universalmente apropiada para toda mujer en la misma situación fisiológica, sino que debe evaluarse considerando el balance específico de beneficios y riesgos para cada paciente individual, no como una recomendación estandarizada aplicada sin distinción.'
      ],
      foco:[
        '*Consideración clínica*: un sangrado vaginal que ocurre después de confirmada la menopausia (tras doce meses de amenorrea) siempre se considera anormal y amerita evaluación, retomando el principio ya visto en el tema de trastornos menstruales.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 14.'
},

'patologia-benigna-mama': {
  tema:'Patología benigna de mama',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:13,
  idea:'La gran mayoría de los hallazgos mamarios que llevan a una mujer a consultar corresponden a condiciones benignas, pero distinguir con confianza una condición benigna de una que amerita mayor investigación es una habilidad clínica indispensable, dada la relevancia del cáncer de mama como diagnóstico a descartar.',
  claves:['fibroadenoma mamario','mastalgia','nódulo mamario benigno'],
  sigue:'tamizaje-cancer-cervicouterino',
  secciones:[
    {
      t:'Fibroadenoma mamario: la masa benigna más frecuente en mujeres jóvenes',
      p:[
        'El *fibroadenoma mamario* es un tumor benigno de tejido glandular y fibroso, la masa mamaria palpable más frecuente en mujeres jóvenes (típicamente entre la adolescencia y los treinta años), caracterizado clínicamente por ser una masa bien delimitada, de consistencia firme pero elástica, móvil con respecto al tejido circundante, y generalmente indolora.',
        'Estas características clínicas -bordes bien definidos, movilidad conservada, consistencia elástica- son precisamente los hallazgos que, en conjunto, orientan hacia un origen benigno, en contraste con las características que orientan hacia una lesión maligna (bordes irregulares, fijación al tejido circundante, consistencia dura), una distinción que se retoma con más profundidad en bloques posteriores de este pensum dedicados a la patología mamaria maligna.'
      ]
    },
    {
      t:'Mastalgia: el dolor mamario y su relación con el ciclo',
      p:[
        'La *mastalgia* es el dolor mamario, clasificado en cíclica (relacionada con las fluctuaciones hormonales del ciclo menstrual, típicamente más intensa en los días previos a la menstruación, y que afecta con frecuencia ambas mamas de forma simétrica) y no cíclica (sin relación clara con el ciclo menstrual, con frecuencia localizada en un área específica de una sola mama).',
        'Reconocer esta relación con el ciclo menstrual -retomando directamente los conceptos de fase folicular y fase lútea ya vistos en este bloque- ayuda a orientar tanto el pronóstico (la mastalgia cíclica generalmente tiene un curso benigno y autolimitado) como el manejo apropiado, que puede incluir desde tranquilización y medidas generales hasta, en casos más intensos, intervenciones específicas.'
      ]
    },
    {
      t:'Nódulo mamario benigno: cuándo tranquilizar y cuándo investigar más',
      p:[
        'Un *nódulo mamario benigno* engloba diversas condiciones no malignas que pueden presentarse como una masa palpable (además del fibroadenoma ya visto, quistes mamarios simples, entre otros), y la evaluación de cualquier nódulo mamario nuevo combina la exploración clínica con estudios de imagen apropiados según la edad de la mujer y las características del hallazgo, retomando la conexión directa con la imagenología que se desarrolla en el bloque correspondiente de este mismo cuatrimestre.',
        'Un principio clínico central en la evaluación de cualquier nódulo mamario es que las características clínicas por sí solas, aunque orientadoras, no son suficientes para confirmar con total certeza la naturaleza benigna de un hallazgo -la correlación con estudios de imagen, y en casos de duda persistente, con biopsia, es lo que permite una tranquilización genuinamente fundamentada, en vez de una suposición sin verificación adecuada.'
      ],
      foco:[
        '*Consideración clínica*: aunque la gran mayoría de los hallazgos mamarios son benignos, ninguna característica clínica aislada es suficiente por sí sola para confirmar esa benignidad con total certeza sin la correlación de estudios de imagen apropiados.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 12.'
},

'tamizaje-cancer-cervicouterino': {
  tema:'Tamizaje de cáncer cervicouterino',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:13,
  idea:'El cáncer cervicouterino es una de las neoplasias ginecológicas con mayor potencial de prevención real, precisamente porque su desarrollo pasa por una fase precancerosa detectable y tratable mediante un tamizaje sistemático bien establecido.',
  claves:['citología cervical','prueba de VPH','colposcopia'],
  sigue:'miomatosis-uterina',
  secciones:[
    {
      t:'La citología cervical como pilar histórico del tamizaje',
      p:[
        'La *citología cervical* (Papanicolaou) es la prueba de tamizaje tradicional que examina células del cuello uterino, obtenidas durante la especuloscopia ya vista en el tema de historia clínica ginecológica, para detectar cambios celulares anormales que podrían representar una lesión precancerosa o, con menor frecuencia, un cáncer ya establecido.',
        'La lógica de este tamizaje retoma directamente el mismo principio ya visto repetidamente en este pensum sobre niveles de prevención: detectar cambios celulares anormales en una fase precancerosa, antes de que progresen hacia un cáncer invasivo, permite un tratamiento mucho más efectivo y menos invasivo que el que requeriría un cáncer ya establecido.'
      ]
    },
    {
      t:'La prueba de VPH y su relación causal con el cáncer cervicouterino',
      p:[
        'La *prueba de VPH* (virus del papiloma humano) detecta directamente la presencia de los tipos de VPH de alto riesgo oncogénico, responsables de prácticamente la totalidad de los casos de cáncer cervicouterino -a diferencia de la citología, que busca cambios celulares ya presentes, esta prueba identifica la infección causal subyacente, lo que en muchos protocolos actuales de tamizaje complementa o incluso sustituye a la citología tradicional según la edad de la mujer.',
        'Esta relación causal bien establecida entre el VPH y el cáncer cervicouterino es también la base de la vacunación contra el VPH, una estrategia de prevención primaria que actúa antes de que ocurra la infección misma, complementando el tamizaje (prevención secundaria) que detecta cambios ya presentes -otra aplicación concreta de los niveles de prevención ya vistos en Medicina Preventiva (9no).'
      ]
    },
    {
      t:'La colposcopia como paso siguiente ante un tamizaje anormal',
      p:[
        'La *colposcopia* es la evaluación del cuello uterino mediante un instrumento con magnificación óptica, indicada cuando un resultado de citología o de prueba de VPH resulta anormal, que permite visualizar con mayor detalle las áreas sospechosas y dirigir la toma de biopsia dirigida hacia el sitio específico que amerita confirmación histológica.',
        'Este flujo escalonado -tamizaje inicial (citología o VPH), seguido de colposcopia ante un resultado anormal, seguido de biopsia dirigida si la colposcopia identifica un área sospechosa- retoma directamente el mismo principio ya visto sobre escalonar la intervención diagnóstica según la necesidad real, en vez de someter a toda mujer a un procedimiento más invasivo desde el inicio, sin una indicación previa que lo justifique.'
      ],
      foco:[
        '*Consideración clínica*: el tamizaje sistemático de cáncer cervicouterino, complementado con la vacunación contra el VPH, hace de esta neoplasia una de las más prevenibles dentro de toda la oncología ginecológica -un ejemplo concreto del valor de la prevención en dos niveles combinados.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 29.'
},

'miomatosis-uterina': {
  tema:'Miomatosis uterina',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:12,
  idea:'El mioma uterino es la condición estructural benigna más frecuente del útero, y su relevancia clínica varía enormemente según su tamaño, localización y si genera o no síntomas, desde un hallazgo incidental sin ninguna consecuencia hasta una causa significativa de sangrado uterino anormal o dolor pélvico.',
  claves:['mioma uterino','leiomioma sintomático','manejo del mioma'],
  sigue:'dolor-pelvico-cronico',
  secciones:[
    {
      t:'Qué es un mioma uterino y por qué es tan frecuente',
      p:[
        'El *mioma uterino* (también llamado leiomioma) es un tumor benigno del músculo liso del útero, extremadamente frecuente en mujeres en edad reproductiva, con un crecimiento que depende en gran medida de los estrógenos -esta dependencia hormonal explica por qué los miomas tienden a crecer durante el embarazo (estado de alto estrógeno) y a reducirse después de la menopausia (estado de bajo estrógeno), retomando directamente la fisiología hormonal ya vista al inicio de este bloque.',
        'Los miomas se clasifican según su localización dentro del útero (submucosos, hacia la cavidad uterina; intramurales, dentro de la pared muscular; subserosos, hacia la superficie externa del útero), y esta localización, más que el tamaño absoluto, es con frecuencia el factor que determina si un mioma genera síntomas significativos o permanece como un hallazgo incidental sin ninguna repercusión clínica.'
      ]
    },
    {
      t:'El leiomioma sintomático: cuándo el mioma genera un problema real',
      p:[
        'Un *leiomioma sintomático* es aquel que genera manifestaciones clínicas relevantes: sangrado uterino anormal (particularmente los miomas submucosos, por su proximidad directa a la cavidad uterina, retomando el tema ya visto de sangrado uterino anormal), dolor o presión pélvica, síntomas de compresión sobre estructuras vecinas (como la vejiga, generando síntomas urinarios) según el tamaño y la localización del mioma, y en ocasiones dificultades relacionadas con la fertilidad, particularmente los miomas que distorsionan la cavidad uterina.',
        'Reconocer que no todo mioma es necesariamente sintomático es clínicamente relevante: muchos miomas se descubren de forma incidental durante una ecografía realizada por otro motivo, sin generar ningún síntoma real, y esta distinción entre mioma incidental y sintomático es la que orienta la necesidad, o no, de una intervención terapéutica.'
      ]
    },
    {
      t:'El manejo del mioma: escalonado según los síntomas y las metas de la paciente',
      p:[
        'El *manejo del mioma* sigue un enfoque escalonado similar al ya visto repetidamente en este pensum: un mioma asintomático generalmente solo requiere vigilancia periódica sin intervención activa; un mioma sintomático puede manejarse inicialmente con tratamiento médico dirigido a controlar el síntoma predominante (por ejemplo, el sangrado), reservando intervenciones más invasivas (procedimientos que preservan el útero, o en casos seleccionados, la histerectomía) para cuando el tratamiento médico no logra un control adecuado.',
        'Un factor central en la decisión de manejo, particularmente relevante en mujeres en edad reproductiva, es el deseo de preservar la fertilidad futura: esta consideración individual influye directamente en qué opciones de manejo son apropiadas ofrecer, retomando una vez más el principio ya visto de individualizar la conducta clínica según las metas y circunstancias específicas de cada paciente, no aplicar una única conducta estandarizada.'
      ],
      foco:[
        '*Consideración clínica*: no todo mioma uterino requiere intervención activa; la decisión de manejo depende de si el mioma es sintomático, y en mujeres en edad reproductiva, del deseo de preservar la fertilidad futura.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 19.'
},

'dolor-pelvico-cronico': {
  tema:'Dolor pélvico crónico',
  bloque:'Ginecología I', programa:'unirm', cuatri:11, min:14,
  idea:'Este tema cierra el bloque de Ginecología I integrando prácticamente todos los conceptos ya vistos -anatomía pélvica, trastornos menstruales, infecciones y sus secuelas, miomatosis- en el contexto de uno de los motivos de consulta ginecológica más complejos de abordar: el dolor pélvico que persiste en el tiempo.',
  claves:['dolor pélvico crónico','endometriosis','evaluación del dolor pélvico'],
  sigue:'principios-enfermedades-infecciosas',
  secciones:[
    {
      t:'Qué define al dolor pélvico crónico',
      p:[
        'El *dolor pélvico crónico* se define generalmente como un dolor localizado en la pelvis, con una duración de al menos seis meses, que puede ser continuo o intermitente, y que con frecuencia tiene un impacto significativo sobre la calidad de vida y el funcionamiento diario de la mujer afectada -a diferencia del dolor agudo, cuyo diagnóstico diferencial ya vino cubierto en otros bloques de este pensum, el dolor crónico exige un abordaje más amplio que considere múltiples causas potenciales, incluso superpuestas entre sí.',
        'Retomando la importancia ya vista de la anatomía pélvica femenina al inicio de este bloque, el origen del dolor pélvico crónico puede involucrar al aparato reproductor (útero, ovarios, trompas), pero también a estructuras vecinas no ginecológicas (intestino, vejiga, musculoesquelético), lo que hace de esta evaluación un ejercicio genuinamente multidisciplinario en muchos casos.'
      ]
    },
    {
      t:'Endometriosis: una de las causas ginecológicas más relevantes',
      p:[
        'La *endometriosis* es la presencia de tejido similar al endometrio fuera de la cavidad uterina (con mayor frecuencia en los ovarios, el peritoneo pélvico, y otras estructuras pélvicas), un tejido que responde a las fluctuaciones hormonales del ciclo menstrual de forma similar al endometrio normal, generando inflamación local, adherencias, y dolor -retomando directamente el concepto de dismenorrea secundaria ya visto en el tema de trastornos menstruales, la endometriosis es una de sus causas más frecuentes y clínicamente relevantes.',
        'Un reto clínico particular de la endometriosis es que con frecuencia existe un retraso considerable entre el inicio de los síntomas y el diagnóstico definitivo, en parte porque el dolor menstrual intenso a veces se normaliza erróneamente como parte esperada de la menstruación, en vez de reconocerse como un síntoma que amerita investigación -un ejemplo más de por qué distinguir dismenorrea primaria de secundaria, ya visto anteriormente, tiene relevancia clínica real.'
      ]
    },
    {
      t:'La evaluación del dolor pélvico como cierre integrador del bloque',
      p:[
        'La *evaluación del dolor pélvico crónico* combina, de forma integrada, prácticamente todas las herramientas ya vistas en este bloque: una anamnesis ginecológica detallada (incluyendo la relación del dolor con el ciclo menstrual), un examen pélvico completo, la consideración activa de infecciones de transmisión sexual no tratadas y sus secuelas (como la enfermedad pélvica inflamatoria), la evaluación de condiciones estructurales como la miomatosis uterina, y estudios de imagen complementarios según los hallazgos.',
        'Este tema cierra el bloque completo de Ginecología I retomando el hilo conductor iniciado desde la anatomía y fisiología del aparato reproductor femenino: entender la fisiología normal, reconocer los patrones de trastorno menstrual, identificar infecciones y sus consecuencias, y evaluar condiciones estructurales, son las piezas que, integradas, permiten abordar con criterio clínico sólido incluso el motivo de consulta más complejo de este bloque.'
      ],
      foco:[
        '*Consideración clínica*: un dolor menstrual intenso que se asume erróneamente como "normal" retrasa el diagnóstico de condiciones como la endometriosis; investigar activamente cualquier dismenorrea que empeora o que interfiere significativamente con la vida diaria es una conducta clínicamente prudente.'
      ]
    }
  ],
  ref:'Berek y Novak, Ginecología, cap. 18.'
}

});
