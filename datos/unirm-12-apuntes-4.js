/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 12 (lote 4)
   Cubre UROLOGÍA al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Cuarta materia del
   cuatrimestre 12 (3 creditos, 12 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== UROLOGÍA ==================== */
'anatomia-fisiologia-aparato-urinario-masculino': {
  tema:'Anatomía y fisiología del aparato urinario masculino',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema abre la materia de Urología retomando y ampliando las bases anatómicas y fisiológicas del sistema urinario ya vistas en otros contextos de este pensum, incorporando ahora las estructuras específicas del aparato genitourinario masculino.',
  claves:['anatomía del tracto urinario','fisiología de la micción','anatomía prostática'],
  sigue:'infeccion-tracto-urinario-adulto',
  secciones:[
    {
      t:'La anatomía del tracto urinario como base de todo razonamiento urológico',
      p:[
        'La *anatomía del tracto urinario* -riñones, uréteres, vejiga y uretra- comparte su estructura básica entre hombres y mujeres, pero el hombre presenta una uretra considerablemente más larga y estructuras anexas específicas (próstata, vesículas seminales) que introducen consideraciones clínicas propias, ausentes en la anatomía femenina ya vista en el contexto de patología nefrourológica pediátrica y ginecológica de otras materias de este pensum.',
        'Comprender esta anatomía específica del varón es la base sobre la que se construye todo el razonamiento clínico de esta materia: la longitud de la uretra masculina, por ejemplo, explica en parte por qué las infecciones urinarias son considerablemente menos frecuentes en el hombre que en la mujer, mientras la presencia de la próstata introduce un órgano completamente ausente en la anatomía femenina que será protagonista de varios temas posteriores de este bloque.'
      ]
    },
    {
      t:'La fisiología de la micción como proceso coordinado',
      p:[
        'La *fisiología de la micción* depende de una coordinación precisa entre la contracción del músculo detrusor de la vejiga y la relajación simultánea del esfínter uretral, un proceso controlado por el sistema nervioso a múltiples niveles -cualquier alteración de esta coordinación, ya sea por una obstrucción anatómica, una alteración neurológica, o un problema de la propia musculatura vesical, puede generar los distintos síndromes urológicos que se desarrollarán a lo largo de este bloque.',
        'Comprender este proceso coordinado retoma directamente la importancia ya vista repetidamente en este pensum sobre entender el mecanismo fisiológico normal antes de estudiar sus alteraciones: reconocer que la micción normal requiere tanto una vía urinaria sin obstrucción como un control neuromuscular apropiado permite anticipar, ante cada síndrome urológico específico que se estudiará después, en cuál de estos dos componentes probablemente reside la alteración.'
      ]
    },
    {
      t:'La anatomía prostática y su relevancia clínica',
      p:[
        'La *anatomía prostática* -una glándula que rodea la uretra en su porción proximal, inmediatamente por debajo de la vejiga- explica directamente por qué el crecimiento de esta glándula, ya sea benigno o maligno, puede comprometer el flujo urinario al comprimir la uretra que atraviesa su interior, un mecanismo que se retomará en detalle en los temas de hiperplasia prostática benigna y cáncer de próstata más adelante en este mismo bloque.',
        'Este tema cierra estableciendo la base anatómica y fisiológica sobre la que se construirán los 11 temas restantes de esta materia: cada síndrome urológico específico -infección, litiasis, hiperplasia, cáncer, disfunción eréctil, incontinencia, trauma, escroto agudo, retención urinaria, infertilidad- se explicará en relación directa con la anatomía y fisiología normal establecida en este tema introductorio, retomando la lógica ya vista repetidamente en este pensum de construir el razonamiento clínico sobre una base fisiológica sólida.'
      ],
      foco:[
        '*Consideración clínica*: la longitud de la uretra masculina explica en parte por qué las infecciones urinarias son menos frecuentes en el hombre que en la mujer, mientras la posición de la próstata rodeando la uretra explica por qué su crecimiento puede comprometer el flujo urinario.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 1.'
},

'infeccion-tracto-urinario-adulto': {
  tema:'Infección del tracto urinario en el adulto',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'La infección del tracto urinario en el adulto retoma directamente la anatomía ya vista en el tema anterior para explicar por qué su frecuencia y presentación difieren considerablemente entre hombres y mujeres.',
  claves:['cistitis del adulto','pielonefritis aguda','infección urinaria complicada'],
  sigue:'litiasis-urinaria',
  secciones:[
    {
      t:'La cistitis del adulto como infección limitada a la vejiga',
      p:[
        'La *cistitis del adulto* es la infección limitada a la vejiga, que se presenta característicamente con disuria (dolor al orinar), urgencia y frecuencia miccional aumentada, sin síntomas sistémicos significativos como fiebre alta -mucho más frecuente en la mujer que en el hombre, precisamente por la diferencia anatómica de longitud uretral ya vista en el tema anterior, que facilita el ascenso de bacterias desde la región perineal hacia la vejiga.',
        'Reconocer que la cistitis en el hombre es relativamente infrecuente en ausencia de un factor predisponente (una anomalía anatómica, un procedimiento urológico reciente, o una obstrucción como la que se verá en hiperplasia prostática benigna) retoma un principio general ya visto repetidamente en este pensum: un hallazgo clínico que ocurre con una frecuencia inusual para el contexto demográfico del paciente amerita investigar activamente un factor predisponente subyacente, en vez de asumir automáticamente la misma explicación que aplicaría en el contexto habitual.'
      ]
    },
    {
      t:'La pielonefritis aguda como infección que compromete el riñón',
      p:[
        'La *pielonefritis aguda* es la infección que asciende desde la vejiga hasta comprometer el riñón, presentándose con fiebre, dolor en el flanco, y frecuentemente síntomas de cistitis asociados -a diferencia de la cistitis simple, la pielonefritis representa una infección más grave que puede generar complicaciones sistémicas y requiere, en muchos casos, un manejo antibiótico más prolongado o incluso hospitalización según la severidad del cuadro.',
        'Esta distinción entre una infección limitada a la vejiga y una que compromete el riñón retoma directamente el principio ya visto sobre reconocer la extensión anatómica de un proceso infeccioso como determinante de su severidad y manejo: los mismos microorganismos causales pueden generar un cuadro leve y ambulatorio (cistitis) o uno considerablemente más grave (pielonefritis) según qué tan lejos hayan ascendido en el tracto urinario.'
      ]
    },
    {
      t:'La infección urinaria complicada y sus implicaciones de manejo',
      p:[
        'La *infección urinaria complicada* es aquella que ocurre en presencia de una anomalía estructural o funcional del tracto urinario, en un hombre, en el contexto de un catéter urinario, o en un paciente con un sistema inmunológico comprometido -esta categoría es clínicamente relevante porque, a diferencia de una infección urinaria simple en una mujer joven por lo demás sana, exige investigar y tratar el factor complicante subyacente, no solo el episodio infeccioso agudo.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: prácticamente cualquier infección urinaria en un hombre adulto se considera complicada por definición, precisamente por la infrecuencia esperada de esta condición en ausencia de un factor predisponente ya mencionado -esto retoma directamente la importancia de investigar la causa subyacente en vez de limitarse a tratar el episodio agudo de forma aislada, un principio que se aplicará repetidamente en los temas siguientes de este bloque.'
      ],
      foco:[
        '*Consideración clínica*: prácticamente cualquier infección urinaria en un hombre adulto se considera complicada por definición, dada su infrecuencia esperada en ausencia de un factor predisponente, y amerita investigar ese factor subyacente.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 14.'
},

'litiasis-urinaria': {
  tema:'Litiasis urinaria',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'La litiasis urinaria es una de las causas más frecuentes de dolor agudo intenso en la práctica clínica, y su reconocimiento retoma la importancia ya vista sobre patrones de dolor característicos que orientan directamente hacia el diagnóstico.',
  claves:['cólico renoureteral','cálculo urinario','manejo de la litiasis según tamaño'],
  sigue:'hiperplasia-prostatica-benigna',
  secciones:[
    {
      t:'El cólico renoureteral: un dolor con patrón característico',
      p:[
        'El *cólico renoureteral* es el dolor intenso, de tipo cólico (que aumenta y disminuye en oleadas), que se origina cuando un cálculo obstruye el flujo urinario a nivel del uréter, típicamente irradiado desde el flanco hacia la ingle, siguiendo el trayecto anatómico del uréter -este patrón de irradiación específico retoma la importancia ya vista repetidamente en este pensum sobre reconocer patrones de dolor característicos que orientan directamente hacia el órgano y el mecanismo involucrados.',
        'La intensidad del dolor en el cólico renoureteral, con frecuencia descrita como una de las más severas experimentadas por los pacientes, contrasta con el hecho de que la obstrucción en sí misma no representa necesariamente una amenaza inmediata para la vida -esta aparente desproporción entre la intensidad del síntoma y la gravedad médica real es un patrón que también se ha visto en otros contextos de dolor agudo a lo largo de este pensum, y no debe confundirse con la urgencia médica de la causa subyacente.'
      ]
    },
    {
      t:'El cálculo urinario y los factores que favorecen su formación',
      p:[
        'El *cálculo urinario* se forma cuando ciertas sustancias disueltas en la orina (con mayor frecuencia calcio, oxalato, o ácido úrico) precipitan y cristalizan, favorecido por factores como la hidratación insuficiente, ciertas dietas, y predisposiciones metabólicas individuales -comprender esta formación retoma la importancia ya vista sobre identificar factores de riesgo modificables, ya que la hidratación adecuada es una de las medidas preventivas más simples y efectivas contra la recurrencia.',
        'Reconocer que la mayoría de los pacientes que ya formaron un cálculo tienen un riesgo aumentado de formar otro en el futuro retoma un principio general ya visto en otros contextos de este pensum sobre la importancia del seguimiento y la prevención secundaria: un episodio de litiasis urinaria no debe considerarse un evento aislado y resuelto, sino una oportunidad para identificar y modificar los factores de riesgo que favorecieron su formación.'
      ]
    },
    {
      t:'El manejo de la litiasis según el tamaño del cálculo',
      p:[
        'El *manejo de la litiasis según tamaño* determina directamente la conducta apropiada: los cálculos pequeños tienen una probabilidad considerable de expulsarse espontáneamente con manejo médico de soporte (analgesia, hidratación, y en ocasiones medicamentos que facilitan el paso del cálculo), mientras los cálculos de mayor tamaño, o aquellos que generan complicaciones como obstrucción persistente o infección asociada, requieren intervención urológica activa.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum: escalonar el manejo según la severidad y las características específicas del caso, ofreciendo primero las opciones menos invasivas cuando son razonablemente efectivas, y reservando la intervención activa para los casos donde el manejo conservador no es apropiado o ya falló, el mismo principio de escalonamiento terapéutico aplicado en múltiples contextos a lo largo de todo este pensum.'
      ],
      foco:[
        '*Consideración clínica*: el dolor del cólico renoureteral, aunque extremadamente intenso, no siempre refleja una amenaza inmediata para la vida; distinguir la intensidad del síntoma de la gravedad médica real de su causa es clínicamente relevante.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 16.'
},

'hiperplasia-prostatica-benigna': {
  tema:'Hiperplasia prostática benigna',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'La hiperplasia prostática benigna retoma directamente la anatomía prostática ya vista al inicio de este bloque, explicando cómo el crecimiento benigno de esta glándula compromete progresivamente el flujo urinario en el hombre que envejece.',
  claves:['hiperplasia prostática benigna','síntomas del tracto urinario inferior','antígeno prostático específico'],
  sigue:'cancer-prostata',
  secciones:[
    {
      t:'La hiperplasia prostática benigna como proceso relacionado con el envejecimiento',
      p:[
        'La *hiperplasia prostática benigna* es el crecimiento no canceroso de la glándula prostática, un proceso extremadamente frecuente conforme el hombre envejece, que retoma directamente la anatomía ya vista: al crecer, la próstata comprime progresivamente la uretra que atraviesa su interior, generando una obstrucción gradual y progresiva del flujo urinario.',
        'Reconocer que esta condición es benigna, a pesar de generar síntomas urinarios significativos, retoma un principio general ya visto repetidamente en este pensum sobre distinguir una condición benigna pero sintomática de una maligna: la hiperplasia prostática benigna no representa por sí misma un riesgo oncológico, aunque debe distinguirse cuidadosamente del cáncer de próstata, tema que se desarrollará inmediatamente después de este.'
      ]
    },
    {
      t:'Los síntomas del tracto urinario inferior como manifestación característica',
      p:[
        'Los *síntomas del tracto urinario inferior* asociados a la hiperplasia prostática benigna incluyen síntomas obstructivos (chorro urinario débil, dificultad para iniciar la micción, sensación de vaciado incompleto) y síntomas irritativos (frecuencia aumentada, urgencia, nicturia) -esta combinación de dos tipos de síntomas retoma la importancia ya vista sobre la fisiología de la micción del primer tema de este bloque, donde tanto la obstrucción mecánica como la respuesta vesical a esa obstrucción contribuyen al cuadro clínico completo.',
        'Reconocer esta combinación de síntomas obstructivos e irritativos, en vez de un patrón único, retoma un principio general ya visto en otros contextos de este pensum sobre reconocer que una sola condición puede generar manifestaciones clínicas de mecanismos distintos y aparentemente contradictorios: la obstrucción mecánica directa (síntomas obstructivos) y la respuesta compensatoria de la vejiga ante esa obstrucción crónica (síntomas irritativos) coexisten en el mismo paciente.'
      ]
    },
    {
      t:'El antígeno prostático específico y su interpretación cuidadosa',
      p:[
        'El *antígeno prostático específico* es una proteína producida por el tejido prostático, tanto benigno como maligno, cuya elevación puede reflejar hiperplasia prostática benigna, cáncer de próstata, o incluso una infección prostática, lo que exige una interpretación cuidadosa en el contexto clínico completo del paciente, no como una prueba aislada y definitiva.',
        'Este tema cierra retomando la misma limitación ya vista con el CA-125 en el contexto ginecológico de otra materia de este mismo cuatrimestre: un marcador que se eleva en múltiples condiciones, tanto benignas como malignas, exige interpretarse en conjunto con otros hallazgos clínicos, y su elevación por sí sola no distingue automáticamente entre hiperplasia prostática benigna y cáncer de próstata, tema que se desarrollará en el siguiente apartado de este bloque.'
      ],
      foco:[
        '*Consideración clínica*: el antígeno prostático específico se eleva tanto en hiperplasia prostática benigna como en cáncer de próstata e infección prostática, por lo que su interpretación exige el contexto clínico completo, no un valor aislado.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 24.'
},

'cancer-prostata': {
  tema:'Cáncer de próstata',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema retoma directamente la hiperplasia prostática benigna ya vista, estableciendo ahora las diferencias clínicas relevantes que permiten distinguirla del cáncer de próstata, la neoplasia maligna más frecuente en el hombre en muchas poblaciones.',
  claves:['tamizaje de cáncer de próstata','biopsia de próstata','estadificación del cáncer prostático'],
  sigue:'cancer-renal-vesical',
  secciones:[
    {
      t:'El tamizaje de cáncer de próstata y su naturaleza controvertida',
      p:[
        'El *tamizaje de cáncer de próstata*, mediante el antígeno prostático específico ya visto en el tema anterior combinado con el examen digital rectal, es un tema clínicamente controvertido: a diferencia de otros tamizajes oncológicos con beneficio bien establecido (como el cáncer cervicouterino ya visto en otra materia), el balance entre detectar cánceres clínicamente relevantes y sobrediagnosticar cánceres de crecimiento lento que nunca habrían causado síntomas es más complejo en este caso específico.',
        'Esta controversia retoma un principio general ya visto en otros contextos de este pensum sobre pruebas diagnósticas: no toda herramienta de detección temprana ofrece un beneficio neto claro, y las decisiones de tamizaje deben individualizarse considerando la edad del paciente, sus preferencias, y una conversación informada sobre los beneficios y riesgos potenciales, en vez de aplicar la misma recomendación de forma universal.'
      ]
    },
    {
      t:'La biopsia de próstata como estudio confirmatorio',
      p:[
        'La *biopsia de próstata* es el estudio que confirma histológicamente la presencia de cáncer ante un antígeno prostático específico elevado o un examen digital rectal anormal, obteniendo muestras de tejido prostático para su análisis microscópico -este paso confirmatorio retoma la importancia ya vista repetidamente en este pensum sobre no basar un diagnóstico oncológico definitivo únicamente en marcadores o hallazgos indirectos, sino confirmar mediante estudio histológico directo.',
        'Reconocer la necesidad de este paso confirmatorio antes de iniciar cualquier tratamiento oncológico retoma un principio general ya visto en múltiples contextos oncológicos de este pensum: el diagnóstico definitivo de cáncer requiere confirmación histológica, no solo hallazgos clínicos o de laboratorio sugestivos, por importantes que estos sean para orientar la sospecha inicial.'
      ]
    },
    {
      t:'La estadificación del cáncer prostático y su relevancia pronóstica',
      p:[
        'La *estadificación del cáncer prostático* determina la extensión de la enfermedad (confinada a la próstata, extendida localmente, o con metástasis a distancia) y, junto con el grado histológico del tumor, orienta directamente hacia las opciones de tratamiento apropiadas, que van desde la vigilancia activa en tumores de bajo riesgo hasta tratamientos definitivos más agresivos en casos de mayor riesgo.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum sobre oncología: el cáncer de próstata ilustra particularmente bien la importancia de individualizar el manejo según el riesgo específico de cada caso, ya que, a diferencia de otros cánceres donde el tratamiento activo inmediato es casi siempre la conducta apropiada, ciertos casos de bajo riesgo pueden manejarse con vigilancia activa sin tratamiento inmediato, dado su comportamiento con frecuencia indolente.'
      ],
      foco:[
        '*Consideración clínica*: el tamizaje de cáncer de próstata debe individualizarse mediante una conversación informada sobre beneficios y riesgos, dado que, a diferencia de otros tamizajes oncológicos, su beneficio neto poblacional es más controvertido.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 23.'
},

'cancer-renal-vesical': {
  tema:'Cáncer renal y vesical',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema aborda dos neoplasias malignas del tracto urinario -renal y vesical- que comparten un signo de alarma común capaz de orientar tempranamente hacia su diagnóstico.',
  claves:['hematuria y cáncer urológico','masa renal sospechosa','cáncer de vejiga'],
  sigue:'disfuncion-erectil',
  secciones:[
    {
      t:'La hematuria como signo de alarma común a ambas neoplasias',
      p:[
        'La *hematuria y cáncer urológico* tienen una relación clínicamente relevante: la presencia de sangre en la orina, particularmente cuando es indolora y macroscópica (visible a simple vista), debe considerarse un signo de alarma que exige investigación urológica completa en un adulto, especialmente si es mayor de cierta edad o tiene factores de riesgo como el tabaquismo, hasta descartar una neoplasia del tracto urinario.',
        'Esta regla retoma directamente el mismo principio ya visto sobre signos de alarma en distintos contextos de este pensum: un síntoma que podría atribuirse erróneamente a una causa benigna más frecuente (como una infección urinaria) no debe descartar automáticamente una causa más grave sin la evaluación apropiada, particularmente cuando el síntoma es indoloro, un patrón que con frecuencia se asocia a procesos neoplásicos más que a procesos inflamatorios o infecciosos agudos, que típicamente sí generan dolor.'
      ]
    },
    {
      t:'La masa renal sospechosa y su hallazgo con frecuencia incidental',
      p:[
        'Una *masa renal sospechosa* con frecuencia se detecta de forma incidental durante estudios de imagen realizados por otras razones, dado que el cáncer renal en etapas tempranas frecuentemente no genera síntomas específicos -este patrón de detección incidental retoma la importancia ya vista sobre el tumor de Wilms en Pediatría II, otro ejemplo de neoplasia genitourinaria que con frecuencia se detecta como hallazgo incidental en un paciente por lo demás asintomático.',
        'Reconocer este patrón de presentación silenciosa en etapas tempranas refuerza la importancia ya vista repetidamente en este pensum sobre no descartar un hallazgo incidental como irrelevante solo porque el paciente está asintomático: una masa renal detectada incidentalmente amerita la misma evaluación cuidadosa que si hubiera generado síntomas, dado que la ausencia de síntomas no descarta malignidad en etapas tempranas de esta neoplasia específica.'
      ]
    },
    {
      t:'El cáncer de vejiga y su relación con la hematuria indolora',
      p:[
        'El *cáncer de vejiga* es la neoplasia del tracto urinario que con mayor frecuencia se presenta específicamente con hematuria macroscópica indolora como primer síntoma, lo que retoma directamente el principio ya establecido al inicio de este tema: este patrón de presentación específico es lo que justifica que toda hematuria indolora en el adulto, sin otra explicación evidente, amerite una evaluación urológica completa que incluya la posibilidad de esta neoplasia.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre distinguir condiciones benignas de malignas mediante patrones de presentación específicos: mientras la cistitis (ya vista) genera dolor y síntomas irritativos, el cáncer de vejiga con frecuencia se presenta sin dolor asociado -esta ausencia de dolor, paradójicamente, es lo que debe elevar la sospecha hacia la causa más grave, en vez de tranquilizar al paciente o al clínico.'
      ],
      foco:[
        '*Consideración clínica*: la hematuria macroscópica indolora en el adulto debe considerarse un signo de alarma de neoplasia del tracto urinario hasta demostrar lo contrario, precisamente porque la ausencia de dolor no descarta, sino que orienta hacia, un origen neoplásico.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 22.'
},

'disfuncion-erectil': {
  tema:'Disfunción eréctil',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'La disfunción eréctil, con frecuencia minimizada o no discutida abiertamente por pudor, tiene causas multifactoriales que retoman directamente principios de razonamiento clínico ya vistos en otros contextos de este pensum.',
  claves:['disfunción eréctil','causas vasculares de disfunción eréctil','evaluación de la disfunción eréctil'],
  sigue:'incontinencia-urinaria-masculina',
  secciones:[
    {
      t:'La disfunción eréctil como condición multifactorial',
      p:[
        'La *disfunción eréctil* -la incapacidad persistente de lograr o mantener una erección suficiente para la actividad sexual- retoma directamente el mismo principio ya visto sobre la disfunción sexual femenina en otra materia de este cuatrimestre: su origen combina con frecuencia factores físicos, psicológicos, y relacionales, exigiendo un abordaje que no se limite a una sola dimensión del problema.',
        'Reconocer este origen multifactorial es particularmente relevante en la práctica clínica porque, con frecuencia, la disfunción eréctil es el primer signo clínicamente evidente de una condición vascular o metabólica sistémica subyacente que el paciente aún no conoce -retomando la importancia ya vista sobre reconocer un síntoma aparentemente aislado como una posible ventana hacia una condición sistémica más amplia.'
      ]
    },
    {
      t:'Las causas vasculares de disfunción eréctil y su relevancia sistémica',
      p:[
        'Las *causas vasculares de disfunción eréctil* son particularmente relevantes porque la erección depende de un flujo sanguíneo adecuado hacia el tejido eréctil, un proceso que puede verse comprometido por la misma enfermedad vascular aterosclerótica que afecta otros territorios vasculares del cuerpo -esto explica por qué la disfunción eréctil de origen vascular con frecuencia precede clínicamente al diagnóstico de enfermedad cardiovascular sistémica en el mismo paciente.',
        'Esta conexión retoma directamente un principio general ya visto en otros contextos de este pensum sobre reconocer manifestaciones tempranas de una enfermedad sistémica antes de que se manifieste en su forma más grave: la disfunción eréctil de causa vascular puede funcionar como una señal de alarma temprana que justifica evaluar activamente el riesgo cardiovascular del paciente, no solo tratar el síntoma sexual de forma aislada.'
      ]
    },
    {
      t:'La evaluación de la disfunción eréctil',
      p:[
        'La *evaluación de la disfunción eréctil* debe incluir una historia clínica dirigida que explore factores vasculares, metabólicos (como la diabetes), neurológicos, hormonales, psicológicos, y farmacológicos (ciertos medicamentos pueden causarla como efecto adverso), reconociendo que múltiples de estas causas pueden coexistir en el mismo paciente.',
        'Este tema cierra retomando el principio general ya visto repetidamente en este pensum sobre no limitar la evaluación de un síntoma a la dimensión más evidente o menos incómoda de discutir: abordar la disfunción eréctil con la misma seriedad clínica que cualquier otro síntoma, investigando activamente sus causas subyacentes, incluyendo el riesgo cardiovascular, ofrece a el paciente una evaluación más completa que limitarse a un manejo sintomático sin investigación adicional.'
      ],
      foco:[
        '*Consideración clínica*: la disfunción eréctil de origen vascular puede preceder clínicamente al diagnóstico de enfermedad cardiovascular sistémica, por lo que su evaluación debe incluir la investigación activa del riesgo cardiovascular del paciente.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 32.'
},

'incontinencia-urinaria-masculina': {
  tema:'Incontinencia urinaria masculina',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema retoma directamente la incontinencia urinaria femenina ya vista en otra materia de este cuatrimestre, mostrando cómo el mismo síntoma general tiene, en el hombre, causas específicas distintas relacionadas con la anatomía prostática ya vista al inicio de este bloque.',
  claves:['incontinencia urinaria posprostatectomía','vejiga hiperactiva masculina','evaluación de la incontinencia masculina'],
  sigue:'trauma-genitourinario',
  secciones:[
    {
      t:'La incontinencia urinaria posprostatectomía como consecuencia quirúrgica reconocida',
      p:[
        'La *incontinencia urinaria posprostatectomía* es una consecuencia reconocida de la cirugía de extirpación de la próstata (con frecuencia realizada como tratamiento del cáncer de próstata ya visto en este mismo bloque), secundaria a la proximidad anatómica entre la próstata y los mecanismos de continencia urinaria, que pueden verse afectados durante el procedimiento quirúrgico.',
        'Reconocer esta posible complicación retoma directamente la importancia ya vista repetidamente en este pensum sobre el consentimiento informado antes de un procedimiento quirúrgico mayor: un paciente que va a someterse a una prostatectomía debe comprender este riesgo específico como parte de la conversación previa al procedimiento, no descubrirlo únicamente después de presentarlo.'
      ]
    },
    {
      t:'La vejiga hiperactiva masculina como mecanismo distinto',
      p:[
        'La *vejiga hiperactiva masculina* -contracciones involuntarias del músculo detrusor que generan urgencia miccional y, en ocasiones, incontinencia de urgencia- retoma directamente el mismo mecanismo ya visto en la incontinencia de urgencia femenina de otra materia de este cuatrimestre, mostrando que este mecanismo fisiopatológico específico no es exclusivo de un sexo, aunque su frecuencia relativa y sus causas asociadas puedan diferir.',
        'En el hombre, la vejiga hiperactiva con frecuencia coexiste con la obstrucción generada por la hiperplasia prostática benigna ya vista en este bloque, ya que la vejiga responde a la obstrucción crónica desarrollando, con el tiempo, un patrón de contracciones involuntarias -esta coexistencia retoma la importancia ya vista sobre reconocer que dos mecanismos fisiopatológicos distintos pueden coexistir y contribuir simultáneamente al mismo cuadro clínico en un mismo paciente.'
      ]
    },
    {
      t:'La evaluación de la incontinencia masculina',
      p:[
        'La *evaluación de la incontinencia masculina* debe identificar el mecanismo predominante (relacionado con cirugía prostática previa, con obstrucción por hiperplasia, con vejiga hiperactiva, o con una combinación de estos) mediante una historia clínica dirigida que incluya el antecedente quirúrgico relevante, retomando el mismo principio ya visto sobre la evaluación de incontinencia femenina de identificar el mecanismo específico antes de definir el manejo.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: comprender la anatomía prostática y su relación con los mecanismos de continencia urinaria, ya establecida al inicio de esta materia, es lo que permite entender por qué la incontinencia urinaria masculina tiene causas específicas distintas de las de la mujer, aunque ambas compartan mecanismos fisiopatológicos generales similares como la vejiga hiperactiva.'
      ],
      foco:[
        '*Consideración clínica*: la incontinencia urinaria posprostatectomía es un riesgo reconocido que debe discutirse como parte del consentimiento informado antes de una prostatectomía, no descubrirse únicamente después del procedimiento.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 31.'
},

'trauma-genitourinario': {
  tema:'Trauma genitourinario',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'El trauma genitourinario retoma directamente los principios generales de evaluación del paciente traumatizado ya vistos en otros contextos de este pensum, aplicándolos ahora específicamente a las estructuras del aparato genitourinario.',
  claves:['trauma renal','trauma vesical','trauma uretral'],
  sigue:'escroto-agudo',
  secciones:[
    {
      t:'El trauma renal y la importancia de sospecharlo ante mecanismos específicos',
      p:[
        'El *trauma renal* debe sospecharse ante mecanismos de trauma que involucren impacto directo sobre el flanco o el abdomen (accidentes de tránsito, caídas de altura, trauma penetrante en esa región), presentándose con hematuria (que retoma directamente la importancia ya vista sobre este signo en el contexto oncológico de este mismo bloque, ahora en un contexto traumático distinto) y dolor en el flanco correspondiente.',
        'Reconocer que la hematuria en el contexto de un trauma reciente tiene una interpretación completamente distinta a la hematuria espontánea ya vista en el tema de cáncer renal y vesical retoma un principio general ya visto repetidamente en este pensum: un mismo signo clínico (hematuria) requiere una interpretación completamente distinta según el contexto en que se presenta, orientando en un caso hacia una neoplasia y en otro hacia una lesión traumática aguda.'
      ]
    },
    {
      t:'El trauma vesical y su relación con fracturas pélvicas',
      p:[
        'El *trauma vesical* -lesión de la vejiga urinaria- se asocia con frecuencia a fracturas pélvicas significativas, dada la proximidad anatómica entre estas estructuras, por lo que ante todo paciente con fractura pélvica de cierta severidad debe considerarse activamente la posibilidad de lesión vesical asociada, incluso en ausencia de síntomas urinarios inmediatamente evidentes.',
        'Esta asociación retoma directamente la importancia ya vista repetidamente en este pensum sobre reconocer lesiones asociadas por proximidad anatómica: de la misma forma que se investiga activamente la lesión de estructuras vecinas en otros contextos quirúrgicos ya vistos (como en las complicaciones de la histerectomía de otra materia de este cuatrimestre), la evaluación del trauma pélvico debe incluir sistemáticamente la posibilidad de lesión vesical asociada.'
      ]
    },
    {
      t:'El trauma uretral y un signo de alarma específico',
      p:[
        'El *trauma uretral* -más frecuente en el hombre por la mayor longitud de su uretra ya vista al inicio de este bloque- tiene un signo de alarma clásico y específico: la presencia de sangre en el meato uretral tras un trauma pélvico o perineal, un hallazgo que debe hacer evitar la colocación de una sonda urinaria sin antes descartar una lesión uretral completa, ya que introducir una sonda a través de una uretra lesionada puede empeorar significativamente el daño.',
        'Este tema cierra el bloque de trauma genitourinario retomando un principio general ya visto repetidamente en este pensum sobre reconocer contraindicaciones específicas antes de realizar un procedimiento aparentemente rutinario: un signo de alarma específico (sangre en el meato uretral) debe modificar directamente la conducta clínica inmediata, evitando un procedimiento que en otro contexto sería considerado de rutina y sin riesgo significativo.'
      ],
      foco:[
        '*Consideración clínica*: la presencia de sangre en el meato uretral tras un trauma pélvico o perineal contraindica la colocación de una sonda urinaria hasta descartar una lesión uretral completa, dado el riesgo de empeorar el daño existente.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 17.'
},

'escroto-agudo': {
  tema:'Escroto agudo',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'El escroto agudo es un síndrome urológico donde el diagnóstico diferencial oportuno tiene consecuencias directas sobre la viabilidad de un órgano, retomando la importancia ya vista sobre reconocer urgencias verdaderas dentro de un cuadro clínico similar en apariencia.',
  claves:['torsión testicular','epididimitis aguda','diagnóstico diferencial del escroto agudo'],
  sigue:'retencion-urinaria-aguda',
  secciones:[
    {
      t:'La torsión testicular como urgencia quirúrgica verdadera',
      p:[
        'La *torsión testicular* es la rotación del testículo sobre su propio cordón espermático, comprometiendo el flujo sanguíneo hacia el órgano, y constituye una verdadera urgencia quirúrgica: el tiempo transcurrido desde el inicio de los síntomas hasta la corrección quirúrgica determina directamente la viabilidad del testículo, con una ventana de tiempo limitada más allá de la cual el daño se vuelve irreversible.',
        'Esta relación directa entre tiempo transcurrido y viabilidad del órgano retoma un principio general ya visto repetidamente en este pensum sobre ventanas críticas de intervención: de la misma forma que ciertas urgencias ya vistas en otros contextos (como el estado epiléptico o la reanimación pediátrica) dependen del tiempo hasta la intervención, la torsión testicular exige reconocimiento y manejo quirúrgico inmediato, sin demoras diagnósticas innecesarias.'
      ]
    },
    {
      t:'La epididimitis aguda como diagnóstico diferencial más frecuente',
      p:[
        'La *epididimitis aguda* -inflamación o infección del epidídimo, la estructura adyacente al testículo- es el diagnóstico diferencial más frecuente de la torsión testicular, presentándose también con dolor escrotal, pero típicamente de instalación más gradual, con frecuencia acompañada de síntomas urinarios asociados, y sin el mismo grado de urgencia temporal que la torsión.',
        'Distinguir estas dos condiciones con presentaciones superficialmente similares pero implicaciones completamente distintas retoma directamente el principio general ya visto repetidamente en este pensum sobre reconocer que un mismo síntoma (dolor escrotal agudo) puede reflejar mecanismos de urgencia completamente distinta, exigiendo una evaluación clínica cuidadosa que no asuma automáticamente la causa menos grave.'
      ]
    },
    {
      t:'El diagnóstico diferencial del escroto agudo: cuando la duda exige actuar',
      p:[
        'El *diagnóstico diferencial del escroto agudo* debe considerar, además de la torsión testicular y la epididimitis, otras causas como la torsión de un apéndice testicular o un trauma escrotal, pero la regla clínica fundamental es que, ante la duda razonable entre torsión testicular y otra causa, la exploración quirúrgica no debe retrasarse esperando estudios diagnósticos adicionales que consuman tiempo valioso dentro de la ventana crítica ya mencionada.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum sobre el manejo de la incertidumbre diagnóstica ante una urgencia con ventana de tiempo limitada: cuando la consecuencia de un retraso diagnóstico es la pérdida irreversible de un órgano, y el costo de una exploración quirúrgica ante una sospecha razonable pero no confirmada es considerablemente menor que el costo de esperar, la conducta apropiada es actuar sobre la sospecha clínica, no esperar una certeza diagnóstica completa.'
      ],
      foco:[
        '*Consideración clínica*: ante la duda razonable entre torsión testicular y otra causa de escroto agudo, la exploración quirúrgica no debe retrasarse esperando estudios adicionales, dada la ventana de tiempo limitada para preservar la viabilidad testicular.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 19.'
},

'retencion-urinaria-aguda': {
  tema:'Retención urinaria aguda',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'La retención urinaria aguda retoma directamente múltiples temas ya vistos a lo largo de este bloque como sus causas más frecuentes, mostrando cómo distintas condiciones urológicas pueden converger en la misma manifestación final.',
  claves:['retención urinaria aguda','sondaje vesical de urgencia','causas de retención urinaria'],
  sigue:'infertilidad-masculina',
  secciones:[
    {
      t:'La retención urinaria aguda como incapacidad súbita para orinar',
      p:[
        'La *retención urinaria aguda* es la incapacidad súbita y completa para orinar a pesar de una vejiga llena, generando distensión vesical dolorosa que exige alivio inmediato -esta condición retoma directamente la fisiología de la micción ya vista al inicio de este bloque: representa una falla completa del proceso de vaciado vesical normal, ya sea por obstrucción mecánica o por alteración de la función neuromuscular necesaria para la micción.',
        'Reconocer la urgencia de esta condición, dada la distensión vesical dolorosa y el riesgo de daño renal si la obstrucción se prolonga sin alivio, retoma un principio general ya visto repetidamente en este pensum sobre reconocer signos de alarma que exigen intervención inmediata, en este caso el alivio urgente de la retención antes de investigar exhaustivamente su causa subyacente.'
      ]
    },
    {
      t:'El sondaje vesical de urgencia como medida inmediata',
      p:[
        'El *sondaje vesical de urgencia* -la colocación de una sonda para drenar la vejiga distendida- es la medida inmediata ante una retención urinaria aguda, aliviando tanto el dolor como el riesgo de daño renal asociado a la distensión prolongada, aunque, retomando la importancia ya vista en el tema de trauma uretral de este mismo bloque, debe evitarse si existe sospecha de lesión uretral traumática asociada.',
        'Esta excepción retoma directamente la conexión con el tema anterior sobre trauma genitourinario: el sondaje vesical, apropiado como medida de urgencia en la mayoría de los casos de retención, se convierte en contraindicado específicamente cuando hay sospecha de lesión uretral, ilustrando cómo el contexto clínico completo -no solo el síntoma aislado- determina la conducta apropiada ante una misma presentación clínica.'
      ]
    },
    {
      t:'Las causas de retención urinaria como síntesis de este bloque',
      p:[
        'Las *causas de retención urinaria* incluyen la hiperplasia prostática benigna (la causa más frecuente en el hombre mayor, ya vista en este bloque), ciertos medicamentos con efectos anticolinérgicos, causas neurológicas que interrumpen el control normal de la micción, y, en el contexto ya mencionado, el trauma uretral -esta lista retoma y sintetiza directamente múltiples temas ya vistos a lo largo de esta materia como posibles causas convergentes de la misma manifestación final.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: comprender la fisiología normal de la micción, establecida desde el primer tema de esta materia, es lo que permite entender cómo condiciones tan diversas -obstructivas, farmacológicas, neurológicas, traumáticas- pueden converger todas en la misma manifestación clínica final de retención urinaria aguda, reforzando la importancia de investigar la causa específica en cada paciente, no asumir automáticamente la causa más frecuente sin considerar el contexto clínico individual.'
      ],
      foco:[
        '*Consideración clínica*: el sondaje vesical de urgencia, apropiado en la mayoría de los casos de retención urinaria aguda, debe evitarse específicamente cuando existe sospecha de lesión uretral traumática asociada.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 24.'
},

'infertilidad-masculina': {
  tema:'Infertilidad masculina',
  bloque:'Urología', programa:'unirm', cuatri:12, min:13,
  idea:'Este último tema cierra el bloque de Urología retomando directamente el estudio de infertilidad de pareja ya visto en Ginecología II, profundizando ahora específicamente en el factor masculino que aproximadamente la mitad de los casos involucra.',
  claves:['estudio del factor masculino de infertilidad','varicocele','espermatograma'],
  sigue:'lesiones-elementales-piel',
  secciones:[
    {
      t:'El estudio del factor masculino de infertilidad',
      p:[
        'El *estudio del factor masculino de infertilidad* retoma directamente la importancia ya vista en el estudio de infertilidad de pareja de Ginecología II: dado que aproximadamente la mitad de los casos de infertilidad de pareja involucran un componente masculino significativo, este estudio debe realizarse de forma sistemática y simultánea al estudio femenino, no como una consideración secundaria o tardía.',
        'Este estudio incluye una historia clínica dirigida (antecedentes de criptorquidia ya vista en Pediatría II, infecciones genitourinarias previas, exposiciones ambientales u ocupacionales relevantes) y un examen físico específico, retomando el mismo principio ya visto repetidamente en este pensum sobre la importancia de una evaluación clínica completa antes de recurrir directamente a estudios de laboratorio o de imagen.'
      ]
    },
    {
      t:'El varicocele como causa corregible de infertilidad masculina',
      p:[
        'El *varicocele* -la dilatación anormal de las venas del plexo venoso que drena el testículo, similar en concepto a las várices de otras localizaciones del cuerpo- es una de las causas corregibles más frecuentes de infertilidad masculina, ya que la dilatación venosa puede alterar la temperatura testicular normal necesaria para una producción espermática apropiada.',
        'Reconocer que esta es una causa corregible, con frecuencia mediante un procedimiento relativamente sencillo, retoma la importancia ya vista repetidamente en este pensum sobre identificar causas tratables dentro del estudio de una condición compleja: no toda infertilidad masculina requiere técnicas de reproducción asistida de alta complejidad, ya vistas en Ginecología II, si la causa subyacente específica, como el varicocele, es corregible de forma directa.'
      ]
    },
    {
      t:'El espermatograma como estudio básico fundamental',
      p:[
        'El *espermatograma* es el estudio básico fundamental que evalúa la cantidad, movilidad y morfología de los espermatozoides, y su resultado orienta directamente hacia el siguiente paso del estudio: un resultado normal redirige la atención hacia el estudio femenino con mayor énfasis, mientras un resultado anormal justifica profundizar en la evaluación del factor masculino, incluyendo la búsqueda de un varicocele u otras causas corregibles ya mencionadas.',
        'Este tema, y con él todo el bloque de Urología, cierra retomando el hilo conductor que ha atravesado toda esta materia: desde la anatomía y fisiología básicas del primer tema hasta la infertilidad masculina de este último, cada condición urológica específica -infecciosa, litiásica, prostática, oncológica, funcional, traumática, y ahora reproductiva- se explicó en relación directa con los principios fisiológicos y anatómicos establecidos desde el inicio, reforzando que comprender la base normal es indispensable para entender cualquiera de sus alteraciones específicas.'
      ],
      foco:[
        '*Consideración clínica*: el espermatograma, como estudio básico inicial, orienta directamente el siguiente paso del estudio de infertilidad de pareja, y un resultado anormal justifica investigar causas corregibles como el varicocele antes de considerar técnicas de reproducción asistida más complejas.'
      ]
    }
  ],
  ref:'Smith y Tanagho, Urología General, cap. 44.'
}

});
