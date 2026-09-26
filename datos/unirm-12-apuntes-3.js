/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 12 (lote 3)
   Cubre GINECOLOGÍA II al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Tercera materia del
   cuatrimestre 12 (3 creditos, 12 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== GINECOLOGÍA II ==================== */
'cancer-ovario': {
  tema:'Cáncer de ovario',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'El cáncer de ovario retoma directamente la importancia ya vista sobre masas anexiales en Ginecología I, profundizando ahora en el reto específico de este tumor: la ausencia de un método de tamizaje eficaz hace que la mayoría de los casos se diagnostiquen en etapas avanzadas.',
  claves:['masa ovárica sospechosa','marcador tumoral CA-125','estadificación del cáncer de ovario'],
  sigue:'cancer-endometrio',
  secciones:[
    {
      t:'La masa ovárica sospechosa: características que orientan hacia malignidad',
      p:[
        'Una *masa ovárica sospechosa* se distingue de un quiste ovárico funcional (ya visto en Ginecología I) por características ecográficas específicas -tamaño considerable, componente sólido en vez de puramente líquido, septos gruesos, vascularización interna aumentada, y persistencia más allá del tiempo esperado para la resolución espontánea de un quiste funcional- que en conjunto elevan la sospecha de un proceso neoplásico en vez de una variante fisiológica.',
        'Reconocer estas características retoma directamente el mismo principio ya visto repetidamente en este pensum sobre distinguir lo funcional de lo orgánico: mientras un quiste funcional típico se resuelve espontáneamente en pocos ciclos menstruales, una masa con estas características sospechosas amerita evaluación adicional específica, incluyendo marcadores tumorales, antes de asumir un origen benigno.'
      ]
    },
    {
      t:'El marcador tumoral CA-125 y sus limitaciones',
      p:[
        'El *marcador tumoral CA-125* es una proteína cuya elevación en sangre se asocia con el cáncer de ovario epitelial, pero su utilidad clínica real tiene limitaciones importantes: puede estar elevado también en condiciones benignas frecuentes (endometriosis, miomatosis uterina, enfermedad pélvica inflamatoria, ya vistas en distintos contextos de este pensum), y puede ser normal incluso en presencia de cáncer de ovario en etapas tempranas -razones por las que no se recomienda como prueba de tamizaje poblacional.',
        'Esta limitación retoma directamente un principio general ya visto sobre pruebas diagnósticas en distintos contextos de este pensum: un marcador con baja especificidad es más útil para el seguimiento de una masa ya identificada como sospechosa, o para monitorizar la respuesta al tratamiento en un caso ya diagnosticado, que como herramienta aislada de detección temprana en la población general.'
      ]
    },
    {
      t:'La estadificación del cáncer de ovario y su relevancia pronóstica',
      p:[
        'La *estadificación del cáncer de ovario* determina la extensión de la enfermedad (confinada al ovario, extendida a la pelvis, diseminada al abdomen, o con metástasis a distancia) y es el factor pronóstico más determinante -precisamente por la ausencia de un método de tamizaje eficaz, una proporción considerable de los casos se diagnostican en etapas avanzadas, lo que explica en parte por qué el pronóstico general del cáncer de ovario es menos favorable que el de otros cánceres ginecológicos que sí cuentan con tamizaje establecido (como el cáncer cervicouterino).',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum: la ausencia de una herramienta de detección temprana eficaz tiene un impacto directo y medible sobre el pronóstico poblacional de una enfermedad, reforzando la importancia de mantener alta sospecha clínica ante síntomas inespecíficos persistentes (distensión abdominal, saciedad temprana, dolor pélvico) en vez de esperar a que la enfermedad se manifieste de forma más evidente.'
      ],
      foco:[
        '*Consideración clínica*: el CA-125 tiene baja especificidad y no se recomienda como tamizaje poblacional; es más útil para seguimiento de una masa ya sospechosa o de un caso ya diagnosticado que como herramienta aislada de detección temprana.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 35.'
},

'cancer-endometrio': {
  tema:'Cáncer de endometrio',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'A diferencia del cáncer de ovario, el cáncer de endometrio tiene la ventaja de un síntoma de alarma temprano y reconocible, lo que retoma directamente la importancia ya vista sobre síntomas de alarma que orientan hacia un diagnóstico oportuno.',
  claves:['sangrado posmenopáusico y cáncer','hiperplasia endometrial','biopsia de endometrio'],
  sigue:'cancer-cervix-invasivo',
  secciones:[
    {
      t:'El sangrado posmenopáusico como signo de alarma que exige investigación',
      p:[
        'El *sangrado posmenopáusico y cáncer* tienen una relación clínicamente relevante: cualquier sangrado vaginal que ocurra después de establecida la menopausia (ya vista en el contexto de climaterio en Ginecología I) debe considerarse cáncer de endometrio hasta demostrar lo contrario, dado que este es el síntoma de presentación más frecuente de esta neoplasia, y a diferencia del cáncer de ovario, ocurre tempranamente en el curso de la enfermedad, no tardíamente.',
        'Esta regla retoma directamente el principio ya visto sobre síntomas de alarma en distintos contextos de este pensum: un síntoma inicialmente inespecífico en apariencia (sangrado vaginal) adquiere una relevancia diagnóstica completamente distinta según el contexto específico en que ocurre -en este caso, su aparición después de la menopausia, un periodo donde no debería haber ningún sangrado uterino en absoluto.'
      ]
    },
    {
      t:'La hiperplasia endometrial como lesión precursora',
      p:[
        'La *hiperplasia endometrial* es un engrosamiento anormal del endometrio, causado con frecuencia por una exposición prolongada a estrógeno sin la oposición adecuada de progesterona, que en su forma con atipia representa una lesión precursora reconocida del cáncer de endometrio -reconocer y tratar esta condición precursora, antes de que progrese hacia una neoplasia franca, es un ejemplo más de prevención secundaria ya vista en otros contextos de este pensum.',
        'Los mismos factores de riesgo que favorecen la hiperplasia endometrial (obesidad, anovulación crónica, terapia estrogénica sin oposición) son, en gran medida, los mismos factores de riesgo reconocidos para el cáncer de endometrio -esta continuidad de factores de riesgo entre una condición precursora y su neoplasia asociada retoma la lógica ya vista sobre el espectro progresivo de ciertas enfermedades, en vez de tratarlas como entidades completamente independientes.'
      ]
    },
    {
      t:'La biopsia de endometrio como estudio confirmatorio',
      p:[
        'La *biopsia de endometrio* es el estudio que confirma o descarta la presencia de hiperplasia o cáncer ante un sangrado posmenopáusico sospechoso, obteniendo una muestra de tejido endometrial mediante un procedimiento ambulatorio relativamente sencillo, que debe realizarse sin demora ante este síntoma de alarma específico, dado que el pronóstico del cáncer de endometrio mejora considerablemente cuando se detecta en etapas tempranas.',
        'Este tema cierra retomando la comparación implícita con el cáncer de ovario del tema anterior: mientras aquel carece de un síntoma de alarma temprano confiable, el cáncer de endometrio sí lo tiene (el sangrado posmenopáusico), lo que explica por qué, en términos generales, se diagnostica en etapas más tempranas y tiene mejor pronóstico global -otro ejemplo de cómo la presencia o ausencia de un signo de alarma reconocible determina directamente el momento habitual del diagnóstico.'
      ],
      foco:[
        '*Consideración clínica*: todo sangrado vaginal que ocurra después de establecida la menopausia debe considerarse cáncer de endometrio hasta demostrar lo contrario, y amerita biopsia de endometrio sin demora.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 33.'
},

'cancer-cervix-invasivo': {
  tema:'Cáncer de cérvix invasivo',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema retoma directamente el tamizaje de cáncer cervicouterino ya visto en Ginecología I, ahora abordando la enfermedad ya establecida en su forma invasiva, un escenario que representa, en gran medida, una falla o ausencia del tamizaje preventivo.',
  claves:['cáncer cervicouterino invasivo','estadificación del cáncer de cérvix','tratamiento del cáncer cervical'],
  sigue:'infertilidad-estudio-basico-pareja',
  secciones:[
    {
      t:'El cáncer cervicouterino invasivo como resultado de una progresión prevenible',
      p:[
        'El *cáncer cervicouterino invasivo* representa la etapa final de una progresión que, en la gran mayoría de los casos, comenzó como una infección persistente por virus del papiloma humano y avanzó a través de lesiones precancerosas detectables -precisamente el proceso que el tamizaje sistemático ya visto en Ginecología I está diseñado para interrumpir antes de que llegue a esta etapa invasiva.',
        'Reconocer que la enfermedad invasiva representa, en un sentido real, una oportunidad perdida de prevención secundaria retoma directamente la importancia ya vista sobre el tamizaje de cáncer cervicouterino: la mayoría de los casos de cáncer cervical invasivo ocurren en mujeres que nunca se realizaron tamizaje, o que lo abandonaron por un periodo prolongado, no en mujeres con seguimiento regular y adecuado.'
      ]
    },
    {
      t:'La estadificación del cáncer de cérvix',
      p:[
        'La *estadificación del cáncer de cérvix* -a diferencia de muchos otros cánceres ginecológicos que se estadifican principalmente por hallazgos quirúrgicos- se basa tradicionalmente en la evaluación clínica y de imágenes, determinando la extensión local (confinada al cérvix, extendida a estructuras vecinas) y a distancia, un factor que orienta directamente hacia el tipo de tratamiento más apropiado para cada caso específico.',
        'Esta base predominantemente clínica de la estadificación retoma la importancia ya vista repetidamente en este pensum sobre la exploración física sistemática y cuidadosa: en el cáncer de cérvix, a diferencia de otras neoplasias ginecológicas, un examen pélvico meticuloso sigue siendo un componente central e insustituible de la evaluación de extensión de la enfermedad.'
      ]
    },
    {
      t:'El tratamiento del cáncer cervical según la etapa',
      p:[
        'El *tratamiento del cáncer cervical* varía considerablemente según la etapa: las lesiones más tempranas pueden manejarse con cirugía conservadora o histerectomía, mientras las etapas más avanzadas requieren típicamente una combinación de radioterapia y quimioterapia -esta variación según la etapa retoma directamente la importancia ya vista sobre la estadificación como determinante central de las decisiones terapéuticas en oncología.',
        'Este tema cierra retomando el hilo conductor de todo el bloque: el cáncer cervicouterino invasivo, a diferencia del cáncer de ovario (sin tamizaje eficaz) y de forma similar al cáncer de endometrio (con signo de alarma reconocible), es una enfermedad en gran medida prevenible mediante tamizaje sistemático -su presencia en etapa invasiva refleja, con mayor frecuencia que en otros cánceres, una falla en el acceso o la adherencia al sistema de salud preventivo, no una limitación inherente de las herramientas diagnósticas disponibles.'
      ],
      foco:[
        '*Consideración clínica*: la mayoría de los casos de cáncer cervical invasivo ocurren en mujeres sin tamizaje regular; esto refuerza la importancia del tamizaje sistemático como la intervención más costo-efectiva contra esta enfermedad específica.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 30.'
},

'infertilidad-estudio-basico-pareja': {
  tema:'Infertilidad: estudio básico de la pareja',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'La infertilidad se define como la incapacidad de lograr un embarazo tras un periodo determinado de relaciones sexuales regulares sin protección, y su estudio exige un enfoque de pareja, no solo de la mujer, retomando la importancia ya vista sobre no asumir automáticamente dónde reside una causa antes de investigarla.',
  claves:['estudio de infertilidad','factor tuboperitoneal','reserva ovárica'],
  sigue:'incontinencia-urinaria-femenina',
  secciones:[
    {
      t:'El estudio de infertilidad como evaluación de pareja, no solo femenina',
      p:[
        'El *estudio de infertilidad* debe abordar simultáneamente factores masculinos y femeninos, ya que aproximadamente la mitad de los casos de infertilidad de pareja involucran un componente masculino significativo -asumir automáticamente que la causa reside exclusivamente en la mujer, sin evaluar también al varón mediante estudios básicos como el espermatograma (ya visto en el contexto de infertilidad masculina de otras materias de este cuatrimestre), retrasa innecesariamente el diagnóstico correcto.',
        'Este enfoque de pareja retoma directamente un principio general ya visto repetidamente en este pensum: no asumir dónde reside la causa de un problema clínico antes de investigarlo sistemáticamente en todas las direcciones relevantes, evitando el sesgo de atribuir automáticamente la infertilidad a la mujer simplemente porque es ella quien, en la práctica, acude primero a consulta.'
      ]
    },
    {
      t:'El factor tuboperitoneal como causa femenina relevante',
      p:[
        'El *factor tuboperitoneal* -obstrucción o daño de las trompas de Falopio, o adherencias pélvicas que interfieren con la captación del óvulo- es una causa femenina significativa de infertilidad, con frecuencia secundaria a episodios previos de enfermedad pélvica inflamatoria (ya vista en Ginecología I) o a endometriosis, ambas condiciones que pueden generar cicatrización y distorsión de la anatomía pélvica normal.',
        'Esta conexión retoma directamente la importancia ya vista sobre las consecuencias a largo plazo de la enfermedad pélvica inflamatoria no tratada oportunamente: el factor tuboperitoneal es precisamente una de esas consecuencias tardías, lo que refuerza por qué el tratamiento oportuno de las infecciones pélvicas, más allá de resolver el episodio agudo, también protege la fertilidad futura.'
      ]
    },
    {
      t:'La reserva ovárica y su relevancia en el estudio de la mujer',
      p:[
        'La *reserva ovárica* -el número y calidad de óvulos disponibles, que disminuye progresivamente con la edad- es un factor central en el estudio de infertilidad femenina, evaluado mediante marcadores específicos, y explica por qué la edad materna avanzada es uno de los factores pronósticos más determinantes en el estudio y manejo de la infertilidad de pareja.',
        'Este tema cierra retomando un principio ya visto en otros contextos de este pensum sobre ventanas biológicas de oportunidad: a diferencia de otros factores de infertilidad que pueden corregirse o tratarse, la disminución de la reserva ovárica relacionada con la edad es progresiva e irreversible, lo que hace que el momento de la consulta y el estudio oportuno sean particularmente relevantes en mujeres de mayor edad reproductiva.'
      ],
      foco:[
        '*Consideración clínica*: el estudio de infertilidad debe evaluar simultáneamente a ambos miembros de la pareja desde el inicio, evitando el sesgo de atribuir automáticamente la causa a la mujer.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 20.'
},

'incontinencia-urinaria-femenina': {
  tema:'Incontinencia urinaria femenina',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'La incontinencia urinaria femenina, aunque frecuente y con frecuencia minimizada por las propias pacientes como parte normal del envejecimiento o de la maternidad, tiene tipos específicos con mecanismos y manejos distintos entre sí.',
  claves:['incontinencia urinaria de esfuerzo','incontinencia de urgencia','evaluación urodinámica básica'],
  sigue:'prolapso-organos-pelvicos',
  secciones:[
    {
      t:'La incontinencia urinaria de esfuerzo: un problema de soporte anatómico',
      p:[
        'La *incontinencia urinaria de esfuerzo* es la pérdida involuntaria de orina asociada a actividades que aumentan la presión intraabdominal (toser, estornudar, reír, hacer ejercicio), causada típicamente por debilidad del soporte anatómico de la uretra y la vejiga -una consecuencia reconocida del parto vaginal y del envejecimiento, que retoma directamente la importancia ya vista sobre los cambios anatómicos asociados al puerperio en Obstetricia I.',
        'Reconocer este mecanismo específico -debilidad del soporte anatómico, no una alteración de la función vesical en sí misma- orienta directamente hacia el tipo de manejo más apropiado, que con frecuencia incluye ejercicios de fortalecimiento del piso pélvico como primera línea, retomando la lógica ya vista sobre intervenciones menos invasivas como manejo inicial antes de considerar opciones quirúrgicas.'
      ]
    },
    {
      t:'La incontinencia de urgencia: un problema de la función vesical',
      p:[
        'La *incontinencia de urgencia* -pérdida involuntaria de orina asociada a un deseo súbito e intenso de orinar, difícil de posponer- refleja un mecanismo fisiopatológico distinto: contracciones involuntarias del músculo detrusor de la vejiga, en vez de una debilidad del soporte anatómico como en la incontinencia de esfuerzo, lo que exige un manejo dirigido específicamente a modular esa actividad vesical anormal.',
        'Esta distinción de mecanismo entre los dos tipos principales de incontinencia retoma un principio general ya visto repetidamente en este pensum: síntomas superficialmente similares (ambos son "pérdida involuntaria de orina") pueden tener mecanismos fisiopatológicos completamente distintos, y reconocer cuál mecanismo predomina en cada caso específico -mediante una historia clínica dirigida que identifique el patrón desencadenante- orienta directamente el manejo apropiado.'
      ]
    },
    {
      t:'La evaluación urodinámica básica cuando el diagnóstico clínico no es claro',
      p:[
        'La *evaluación urodinámica básica* es un conjunto de estudios que miden la función vesical y uretral de forma objetiva, reservada para los casos donde la historia clínica y el examen físico no permiten distinguir con claridad el tipo de incontinencia predominante, o donde existe una combinación de ambos mecanismos (incontinencia mixta), antes de definir un manejo específico.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre no minimizar un síntoma frecuente sin evaluarlo apropiadamente: la incontinencia urinaria femenina, aunque común, no debe descartarse como una parte inevitable del envejecimiento o la maternidad sin ofrecer a la paciente una evaluación apropiada del mecanismo específico y las opciones de manejo disponibles.'
      ],
      foco:[
        '*Consideración clínica*: distinguir el mecanismo predominante (esfuerzo versus urgencia) mediante una historia clínica dirigida orienta directamente el manejo inicial apropiado, antes de recurrir a estudios urodinámicos más complejos.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 24.'
},

'prolapso-organos-pelvicos': {
  tema:'Prolapso de órganos pélvicos',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'El prolapso de órganos pélvicos retoma directamente el concepto de soporte anatómico pélvico ya introducido en el tema anterior sobre incontinencia de esfuerzo, aplicándolo ahora al descenso de los propios órganos pélvicos en vez de solo a la función urinaria.',
  claves:['prolapso uterino','cistocele y rectocele','manejo del prolapso pélvico'],
  sigue:'quistes-ovaricos-funcionales',
  secciones:[
    {
      t:'El prolapso uterino y sus grados de severidad',
      p:[
        'El *prolapso uterino* es el descenso del útero desde su posición anatómica normal hacia o a través del canal vaginal, secundario a la debilidad del mismo sistema de soporte pélvico ya mencionado en el tema anterior -su severidad se clasifica en grados progresivos, desde un descenso leve que permanece dentro de la vagina hasta la exteriorización completa del útero, lo que orienta directamente hacia la urgencia y el tipo de manejo apropiado.',
        'Reconocer el grado de severidad retoma la importancia ya vista repetidamente en este pensum sobre clasificar la magnitud de un hallazgo clínico, más que simplemente constatar su presencia: un prolapso leve y asintomático puede manejarse de forma expectante o con medidas conservadoras, mientras uno de mayor grado, sintomático, amerita una intervención más definitiva.'
      ]
    },
    {
      t:'El cistocele y el rectocele como formas específicas de prolapso',
      p:[
        'El *cistocele* (descenso de la vejiga hacia la pared vaginal anterior) y el *rectocele* (descenso del recto hacia la pared vaginal posterior) son formas específicas de prolapso de órganos pélvicos que, aunque comparten el mismo mecanismo general de debilidad del soporte pélvico ya visto, afectan estructuras distintas y generan síntomas característicos diferentes -dificultad para vaciar completamente la vejiga en el cistocele, dificultad para la evacuación completa en el rectocele.',
        'Distinguir estas dos entidades específicas, junto con el prolapso uterino ya visto, retoma la importancia ya vista sobre reconocer que un mecanismo fisiopatológico compartido (en este caso, la debilidad del soporte pélvico) puede manifestarse de formas clínicas distintas según la estructura anatómica específica más afectada en cada caso.'
      ]
    },
    {
      t:'El manejo del prolapso pélvico según su impacto funcional',
      p:[
        'El *manejo del prolapso pélvico* incluye desde medidas conservadoras (ejercicios de fortalecimiento del piso pélvico, uso de un pesario vaginal como dispositivo de soporte) hasta corrección quirúrgica definitiva, con la elección determinada principalmente por el grado del prolapso, el impacto funcional sobre la calidad de vida de la paciente, y su deseo de preservar la fertilidad o evitar cirugía.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum: la decisión de intervenir, y con qué grado de invasividad, depende del impacto funcional real sobre la paciente y no únicamente de la presencia objetiva del hallazgo -un prolapso leve y bien tolerado no amerita necesariamente el mismo manejo que uno de mayor grado que interfiere significativamente con las actividades diarias.'
      ],
      foco:[
        '*Consideración clínica*: la decisión de manejo del prolapso pélvico depende del impacto funcional sobre la calidad de vida de la paciente, no únicamente del grado anatómico del descenso.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 24.'
},

'quistes-ovaricos-funcionales': {
  tema:'Quistes ováricos funcionales',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:12,
  idea:'Este tema retoma directamente el ciclo menstrual normal ya visto en Ginecología I, explicando ahora cómo variaciones de ese mismo proceso fisiológico normal pueden generar quistes ováricos benignos y autolimitados, distintos de la masa ovárica sospechosa ya vista al inicio de este bloque.',
  claves:['quiste folicular','quiste del cuerpo lúteo','manejo expectante del quiste ovárico'],
  sigue:'patologia-vulvar',
  secciones:[
    {
      t:'El quiste folicular como variante del proceso ovulatorio normal',
      p:[
        'El *quiste folicular* se forma cuando un folículo ovárico, en vez de romperse y liberar el óvulo durante la ovulación normal (ya vista en el ciclo menstrual de Ginecología I), continúa creciendo sin romperse -es el tipo más frecuente de quiste ovárico funcional, generalmente asintomático o con síntomas leves, y con una tendencia natural a resolverse espontáneamente en el transcurso de uno o pocos ciclos menstruales.',
        'Reconocer que este quiste representa una variación del proceso fisiológico normal, no una enfermedad en sí misma, retoma directamente el principio ya visto sobre distinguir lo funcional de lo orgánico: la mayoría de los quistes foliculares no requieren ninguna intervención específica más allá de la observación, a diferencia de una masa ovárica sospechosa que sí amerita evaluación adicional.'
      ]
    },
    {
      t:'El quiste del cuerpo lúteo y su relación con la segunda fase del ciclo',
      p:[
        'El *quiste del cuerpo lúteo* se forma cuando el cuerpo lúteo -la estructura que se forma tras la ovulación y produce progesterona durante la segunda fase del ciclo menstrual, ya vista en Ginecología I- persiste o se llena de líquido o sangre en vez de involucionar de la forma esperada, y al igual que el quiste folicular, con frecuencia se resuelve espontáneamente.',
        'Una consideración clínica relevante de este tipo específico de quiste es su ocasional presentación con dolor pélvico agudo si se rompe o sangra, lo que retoma la importancia ya vista sobre el diagnóstico diferencial de dolor pélvico agudo en la mujer, donde un quiste de cuerpo lúteo roto es una de las causas benignas a considerar junto a otras entidades potencialmente más graves.'
      ]
    },
    {
      t:'El manejo expectante del quiste ovárico funcional',
      p:[
        'El *manejo expectante del quiste ovárico* -observación con seguimiento ecográfico periódico, sin intervención inmediata- es apropiado para la mayoría de los quistes funcionales, dado su alta tasa de resolución espontánea en el transcurso de algunos ciclos menstruales, reservando una evaluación o intervención más activa solo para quistes que persisten más allá del tiempo esperado, crecen, o presentan características sospechosas ya vistas en el tema del cáncer de ovario.',
        'Este tema cierra retomando el hilo conductor de todo este bloque de patología benigna versus maligna: distinguir un quiste funcional autolimitado de una masa ovárica sospechosa, mediante características ecográficas y el seguimiento de su evolución en el tiempo, es lo que permite ofrecer manejo expectante apropiado a la mayoría de las pacientes sin someterlas a intervenciones innecesarias.'
      ],
      foco:[
        '*Consideración clínica*: la mayoría de los quistes ováricos funcionales se resuelven espontáneamente y ameritan manejo expectante; solo la persistencia, el crecimiento, o características ecográficas sospechosas justifican una evaluación más activa.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 15.'
},

'patologia-vulvar': {
  tema:'Patología vulvar',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'La patología vulvar, con frecuencia menos discutida que otras condiciones ginecológicas por el pudor que genera en muchas pacientes, incluye desde condiciones inflamatorias crónicas hasta lesiones que ameritan vigilancia por su potencial de malignización.',
  claves:['liquen escleroso vulvar','bartolinitis','lesiones vulvares premalignas'],
  sigue:'violencia-genero-consulta-ginecologica',
  secciones:[
    {
      t:'El liquen escleroso vulvar como condición crónica frecuentemente subdiagnosticada',
      p:[
        'El *liquen escleroso vulvar* es una condición inflamatoria crónica de la piel vulvar, que genera adelgazamiento, cambios de coloración blanquecina, y prurito persistente, con frecuencia subdiagnosticada porque las pacientes, por pudor o por atribuir los síntomas a otras causas, retrasan la consulta -retomando la importancia ya vista sobre el impacto de la incomodidad o el estigma en la búsqueda oportuna de atención médica en distintos contextos de este pensum.',
        'Reconocer esta condición tempranamente es relevante no solo por el alivio sintomático que el tratamiento apropiado ofrece, sino porque el liquen escleroso vulvar no tratado se asocia a un riesgo aumentado, aunque no mayoritario, de desarrollar carcinoma vulvar a largo plazo -otro ejemplo de por qué una condición aparentemente benigna amerita seguimiento y manejo apropiado, no solo tranquilización.'
      ]
    },
    {
      t:'La bartolinitis como infección de una glándula vulvar específica',
      p:[
        'La *bartolinitis* es la inflamación o infección de las glándulas de Bartolino, ubicadas en la porción posterior de la vulva, que puede generar un absceso doloroso que requiere drenaje además de manejo antibiótico -a diferencia del liquen escleroso, de curso crónico, la bartolinitis con frecuencia se presenta de forma aguda con dolor localizado significativo.',
        'Esta distinción entre una condición crónica (liquen escleroso) y una aguda (bartolinitis), ambas dentro de la patología vulvar, retoma un principio general ya visto repetidamente en este pensum sobre reconocer el curso temporal de una condición como parte esencial de su caracterización clínica, no solo su localización anatómica.'
      ]
    },
    {
      t:'Las lesiones vulvares premalignas y la importancia de su vigilancia',
      p:[
        'Las *lesiones vulvares premalignas* -cambios celulares anormales de la piel vulvar que preceden al desarrollo de un carcinoma vulvar invasivo, con frecuencia relacionadas con infección persistente por virus del papiloma humano, ya vista en el contexto del cáncer cervicouterino- ameritan biopsia ante cualquier lesión vulvar persistente, de aspecto atípico, o que no responde al tratamiento inicial esperado.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: reconocer una lesión premaligna a tiempo, ya sea vulvar, endometrial (hiperplasia, ya vista) o cervical, permite intervenir antes de que progrese hacia una neoplasia invasiva -el mismo principio de prevención secundaria aplicado ahora a la vulva, completando el recorrido por las distintas localizaciones ginecológicas donde este principio es clínicamente relevante.'
      ],
      foco:[
        '*Consideración clínica*: cualquier lesión vulvar persistente, de aspecto atípico, o que no responde al tratamiento esperado amerita biopsia para descartar una lesión premaligna, dado el potencial de progresión hacia carcinoma vulvar invasivo.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 4.'
},

'violencia-genero-consulta-ginecologica': {
  tema:'Violencia de género en la consulta ginecológica',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'La consulta ginecológica es, con frecuencia, uno de los espacios donde una mujer que sufre violencia de género tiene mayor probabilidad de revelarlo, lo que exige que el profesional de salud esté preparado para reconocer signos de alarma y responder de forma apropiada.',
  claves:['violencia de género','tamizaje de violencia intrafamiliar','abordaje de la sobreviviente de violencia'],
  sigue:'cirugia-ginecologica-indicaciones-histerectomia',
  secciones:[
    {
      t:'La violencia de género y su impacto en la salud ginecológica',
      p:[
        'La *violencia de género* tiene consecuencias directas sobre la salud ginecológica de quien la sufre, desde lesiones físicas evidentes hasta consecuencias menos visibles como el embarazo no deseado, las infecciones de transmisión sexual, el dolor pélvico crónico sin causa orgánica clara, y el impacto significativo sobre la salud mental -reconocer esta relación retoma la importancia ya vista sobre la comunicación empática en la consulta médica, particularmente relevante cuando el motivo de consulta visible puede ocultar una causa subyacente más profunda.',
        'Esta relación entre violencia de género y presentaciones ginecológicas aparentemente inespecíficas retoma un principio general ya visto repetidamente en este pensum: un síntoma o patrón de consulta recurrente, sin una causa orgánica claramente identificable, amerita considerar activamente causas menos evidentes pero clínicamente relevantes, en vez de limitarse a tratar el síntoma superficial de forma repetida sin investigar más allá.'
      ]
    },
    {
      t:'El tamizaje de violencia intrafamiliar en la consulta rutinaria',
      p:[
        'El *tamizaje de violencia intrafamiliar* -preguntar de forma sistemática y en un espacio de privacidad y confidencialidad apropiado sobre la posibilidad de violencia, en vez de esperar a que la paciente lo revele espontáneamente- aumenta significativamente la probabilidad de detección, retomando directamente la importancia ya vista sobre la confidencialidad en la consulta del adolescente (Pediatría II) como principio aplicable también a la consulta ginecológica de la mujer adulta.',
        'Este tamizaje sistemático, incorporado como parte rutinaria de la consulta ginecológica y no reservado únicamente para casos con sospecha evidente, retoma la misma lógica ya vista sobre herramientas de tamizaje sistemático en otros contextos de este pensum: la detección temprana depende de preguntar activamente, no de esperar pasivamente a que el hallazgo se presente por sí solo.'
      ]
    },
    {
      t:'El abordaje de la sobreviviente de violencia',
      p:[
        'El *abordaje de la sobreviviente de violencia* combina atención médica apropiada de las consecuencias físicas y psicológicas con la conexión activa hacia recursos de apoyo especializados (legales, sociales, de protección), evitando revictimizar a la paciente mediante preguntas repetitivas innecesarias o actitudes de juicio, y respetando su autonomía sobre las decisiones que tome respecto a su situación.',
        'Este tema cierra el bloque de Ginecología II retomando el principio general de comunicación clínica de calidad ya visto repetidamente en este pensum: combinar competencia técnica con sensibilidad humana es particularmente crítico en esta situación específica, donde la forma en que se aborda a la paciente puede determinar si busca ayuda nuevamente en el futuro o evita el sistema de salud por temor a una respuesta inadecuada.'
      ],
      foco:[
        '*Consideración clínica*: el tamizaje sistemático de violencia de género, incorporado como parte rutinaria de la consulta ginecológica, aumenta significativamente la detección en comparación con esperar a que la paciente lo revele espontáneamente.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 5.'
},

'cirugia-ginecologica-indicaciones-histerectomia': {
  tema:'Cirugía ginecológica: indicaciones de histerectomía',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'La histerectomía, uno de los procedimientos quirúrgicos ginecológicos más frecuentes, retoma y conecta directamente múltiples condiciones ya vistas a lo largo de este pensum como sus indicaciones más comunes.',
  claves:['indicaciones de histerectomía','histerectomía abdominal y vaginal','complicaciones de la histerectomía'],
  sigue:'reproduccion-asistida-conceptos-basicos',
  secciones:[
    {
      t:'Las indicaciones de histerectomía como síntesis de condiciones ya vistas',
      p:[
        'Las *indicaciones de histerectomía* -la extirpación quirúrgica del útero- incluyen condiciones ya desarrolladas extensamente a lo largo de este pensum: miomatosis uterina sintomática (Ginecología I), hemorragia posparto refractaria a otras medidas (Obstetricia II), prolapso uterino de mayor grado (tema anterior de este mismo bloque), y cáncer de endometrio o de cérvix ya vistos, entre otras indicaciones benignas y oncológicas.',
        'Esta síntesis de indicaciones retoma directamente el hilo conductor de todo el pensum de ginecología y obstetricia: comprender profundamente cada condición individual (su fisiopatología, su presentación, su manejo escalonado) es lo que permite reconocer, en el momento apropiado, cuándo esas medidas menos invasivas ya se agotaron y la histerectomía se convierte en la opción de manejo más apropiada para una paciente específica.'
      ]
    },
    {
      t:'La histerectomía abdominal y vaginal: dos abordajes según el caso',
      p:[
        'La *histerectomía abdominal y vaginal* representan dos abordajes quirúrgicos distintos para el mismo procedimiento fundamental, con la elección determinada por factores como el tamaño uterino, la necesidad de evaluar otras estructuras pélvicas simultáneamente, y la experiencia del cirujano -en términos generales, el abordaje vaginal (y su variante laparoscópica) se asocia a una recuperación más rápida que el abordaje abdominal, cuando es técnicamente factible.',
        'Esta preferencia por un abordaje menos invasivo cuando es técnicamente posible retoma un principio general ya visto repetidamente en este pensum: elegir el abordaje que logre el objetivo terapéutico con la menor invasividad posible para la paciente específica, sin que esto signifique que el abordaje abdominal sea inapropiado cuando las circunstancias clínicas específicas lo requieren.'
      ]
    },
    {
      t:'Las complicaciones de la histerectomía',
      p:[
        'Las *complicaciones de la histerectomía* incluyen, entre otras, sangrado, infección, lesión de estructuras vecinas (vejiga, uréteres, intestino, dada su proximidad anatómica al útero), y las consecuencias esperadas de la pérdida de la capacidad reproductiva y, si se retiran también los ovarios, de la función hormonal ovárica -conocer estas complicaciones permite un consentimiento informado apropiado antes del procedimiento.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre el consentimiento informado: una paciente que comprende claramente las indicaciones, los abordajes posibles, y las complicaciones potenciales de la histerectomía está en mejor posición para participar activamente en la decisión sobre su propio tratamiento, un principio aplicable a cualquier procedimiento quirúrgico mayor, no solo a este específico.'
      ],
      foco:[
        '*Consideración clínica*: la elección entre abordaje abdominal y vaginal para la histerectomía prioriza, cuando es técnicamente factible, el abordaje menos invasivo, sin que esto excluya el abordaje abdominal cuando las circunstancias clínicas específicas lo requieren.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 42.'
},

'reproduccion-asistida-conceptos-basicos': {
  tema:'Reproducción asistida: conceptos básicos',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema retoma directamente el estudio de infertilidad ya visto en este mismo bloque, presentando ahora las opciones de tratamiento disponibles cuando el estudio identifica una causa que no se resuelve con medidas más simples.',
  claves:['fecundación in vitro','inseminación intrauterina','inducción de la ovulación'],
  sigue:'salud-sexual-femenina',
  secciones:[
    {
      t:'La fecundación in vitro como técnica de mayor complejidad',
      p:[
        'La *fecundación in vitro* es la técnica de reproducción asistida de mayor complejidad, donde la fecundación del óvulo por el espermatozoide ocurre fuera del cuerpo, en laboratorio, y el embrión resultante se transfiere posteriormente al útero -reservada típicamente para casos donde otras técnicas menos complejas no son apropiadas o ya fracasaron, como el factor tuboperitoneal severo ya visto en el estudio de infertilidad de este mismo bloque.',
        'Esta reserva de la técnica más compleja para los casos que lo requieren específicamente retoma un principio general ya visto repetidamente en este pensum: escalonar las intervenciones desde las menos hasta las más complejas, ofreciendo primero las opciones menos invasivas y reservando las de mayor complejidad para cuando estén específicamente indicadas, no como primera línea universal para toda infertilidad.'
      ]
    },
    {
      t:'La inseminación intrauterina como técnica de menor complejidad',
      p:[
        'La *inseminación intrauterina* es una técnica de menor complejidad que la fecundación in vitro, donde el semen procesado se introduce directamente en la cavidad uterina cerca del momento de la ovulación, apropiada para casos de infertilidad de causa masculina leve, o de causa inexplicada, donde las trompas de Falopio son permeables y funcionales.',
        'Esta técnica retoma directamente la importancia ya vista sobre el factor tuboperitoneal en el estudio de infertilidad: la inseminación intrauterina depende de que el óvulo fecundado pueda desplazarse normalmente a través de una trompa funcional, por lo que no es una opción apropiada cuando existe una obstrucción tubárica significativa ya identificada durante el estudio.'
      ]
    },
    {
      t:'La inducción de la ovulación en mujeres con trastornos ovulatorios',
      p:[
        'La *inducción de la ovulación* mediante medicamentos específicos es apropiada para mujeres con trastornos ovulatorios (como los ya vistos en el contexto de trastornos menstruales de Ginecología I) que desean concebir, estimulando el desarrollo y liberación de uno o más óvulos en mujeres que no ovulan de forma regular por sí mismas.',
        'Este tema cierra retomando el hilo conductor de todo el bloque de infertilidad: cada técnica de reproducción asistida -inducción de la ovulación, inseminación intrauterina, fecundación in vitro- se dirige a un mecanismo causal específico identificado durante el estudio de infertilidad ya visto anteriormente, reforzando la importancia de ese estudio inicial completo como base para elegir el tratamiento más apropiado para cada pareja específica, en vez de aplicar la misma técnica de forma indiscriminada a todos los casos.'
      ],
      foco:[
        '*Consideración clínica*: la elección de la técnica de reproducción asistida depende directamente de la causa específica identificada durante el estudio de infertilidad, escalonando desde las técnicas menos hasta las más complejas según lo que cada caso requiera.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 20.'
},

'salud-sexual-femenina': {
  tema:'Salud sexual femenina',
  bloque:'Ginecología II', programa:'unirm', cuatri:12, min:13,
  idea:'Este último tema cierra el bloque de Ginecología II reconociendo la salud sexual como un componente legítimo e importante de la salud integral de la mujer, que con frecuencia no se aborda de forma proactiva en la consulta ginecológica rutinaria.',
  claves:['disfunción sexual femenina','dispareunia','consejería en salud sexual'],
  sigue:'anatomia-fisiologia-aparato-urinario-masculino',
  secciones:[
    {
      t:'La disfunción sexual femenina como condición multifactorial',
      p:[
        'La *disfunción sexual femenina* -que puede manifestarse como disminución del deseo, dificultad para la excitación, o dificultad para alcanzar el orgasmo- tiene con frecuencia un origen multifactorial que combina causas físicas (hormonales, relacionadas con condiciones ya vistas en este pensum como el climaterio o ciertas cirugías ginecológicas), psicológicas, y relacionales, lo que exige un abordaje que no se limite a una sola dimensión del problema.',
        'Reconocer este origen multifactorial retoma un principio general ya visto repetidamente en este pensum sobre no asumir automáticamente una única causa para un síntoma complejo: abordar la disfunción sexual femenina exclusivamente desde lo hormonal, sin considerar los componentes psicológicos y relacionales igualmente relevantes, ofrece una solución incompleta a la paciente.'
      ]
    },
    {
      t:'La dispareunia y la importancia de identificar su origen específico',
      p:[
        'La *dispareunia* -dolor durante las relaciones sexuales- puede originarse en múltiples condiciones ya vistas a lo largo de este pensum: atrofia vaginal relacionada con el climaterio, endometriosis, vulvovaginitis, liquen escleroso vulvar (tema ya visto en este mismo bloque), o factores psicológicos asociados a experiencias previas -identificar el origen específico mediante una historia clínica y examen físico dirigidos es indispensable antes de ofrecer un manejo apropiado.',
        'Esta necesidad de identificar el origen específico, en vez de tratar el síntoma de forma genérica, retoma directamente el principio general de razonamiento clínico ya visto repetidamente en este pensum: un síntoma (en este caso, dolor durante las relaciones sexuales) puede tener múltiples causas subyacentes distintas, cada una con un manejo específico distinto, por lo que la evaluación dirigida hacia la causa es indispensable antes de intervenir.'
      ]
    },
    {
      t:'La consejería en salud sexual como parte de la atención integral',
      p:[
        'La *consejería en salud sexual* -crear un espacio de conversación abierta, sin juicio, donde la paciente pueda expresar preocupaciones sobre su función sexual- retoma directamente la importancia ya vista sobre la comunicación clínica de calidad y la confidencialidad apropiada, ahora aplicada específicamente a un aspecto de la salud que muchas pacientes dudan en mencionar espontáneamente por pudor o por asumir que no es un tema legítimo de consulta médica.',
        'Este tema, y con él todo el bloque de Ginecología II, cierra retomando el hilo conductor que ha atravesado toda esta materia: desde el cáncer de ovario hasta la salud sexual, pasando por la infertilidad, la incontinencia, el prolapso y la violencia de género, cada tema retomó y aplicó principios generales de razonamiento clínico ya establecidos en este pensum -reconocer signos de alarma, distinguir lo funcional de lo orgánico, escalonar intervenciones, y comunicar con calidad técnica y humana- ahora aplicados específicamente a la salud integral de la mujer más allá del embarazo y el parto.'
      ],
      foco:[
        '*Consideración clínica*: preguntar activamente sobre la salud sexual como parte de la consulta ginecológica integral, en un espacio sin juicio, permite identificar preocupaciones que la paciente rara vez menciona espontáneamente por sí misma.'
      ]
    }
  ],
  ref:'Williams, Ginecología, cap. 13.'
}

});
