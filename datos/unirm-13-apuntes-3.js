/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 13 (lote 3)
   Cubre NEUMOLOGÍA al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Tercera materia del
   cuatrimestre 13 (3 creditos, 12 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== NEUMOLOGÍA ==================== */
'anatomia-fisiologia-respiratoria': {
  tema:'Anatomía y fisiología respiratoria',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema abre la materia de Neumología estableciendo las bases fisiológicas sobre las que se construirán los 11 temas restantes: cada condición respiratoria específica se explicará en relación directa con la mecánica ventilatoria y el intercambio gaseoso normales.',
  claves:['mecánica ventilatoria','intercambio gaseoso pulmonar','espirometría básica'],
  sigue:'asma-adulto',
  secciones:[
    {
      t:'La mecánica ventilatoria como proceso de movimiento de aire',
      p:[
        'La *mecánica ventilatoria* es el proceso mediante el cual el aire entra y sale de los pulmones, dependiente de cambios de presión generados por la contracción y relajación del diafragma y los músculos accesorios de la respiración, junto con las propiedades elásticas del propio tejido pulmonar -comprender esta mecánica normal es indispensable para entender por qué distintas condiciones respiratorias, ya sea obstructivas o restrictivas, alteran este proceso de formas específicas y reconocibles.',
        'Reconocer que la ventilación depende tanto de la función muscular como de las propiedades elásticas del pulmón mismo retoma un principio general ya visto repetidamente en este pensum sobre descomponer un proceso fisiológico complejo en sus componentes antes de razonar sobre sus alteraciones: una enfermedad que afecta primariamente los músculos respiratorios genera un patrón distinto de una que afecta primariamente el tejido pulmonar elástico.'
      ]
    },
    {
      t:'El intercambio gaseoso pulmonar como objetivo final de la ventilación',
      p:[
        'El *intercambio gaseoso pulmonar* es el proceso mediante el cual el oxígeno pasa desde los alvéolos hacia la sangre y el dióxido de carbono pasa desde la sangre hacia los alvéolos para ser exhalado, ocurriendo a través de una membrana alveolocapilar extremadamente delgada que permite este intercambio eficiente -este proceso retoma directamente la importancia ya vista sobre el intercambio gaseoso en la asfixia perinatal de Neonatología en un cuatrimestre anterior, ahora aplicado a la fisiología respiratoria normal del adulto.',
        'Comprender que la ventilación (mover aire) y el intercambio gaseoso (transferir oxígeno y dióxido de carbono) son procesos relacionados pero distintos retoma un principio general ya visto repetidamente en este pensum sobre no confundir un proceso mecánico con su objetivo fisiológico final: un paciente puede tener una ventilación aparentemente adecuada pero un intercambio gaseoso comprometido si la membrana alveolocapilar está dañada, una distinción relevante para varios temas posteriores de este bloque.'
      ]
    },
    {
      t:'La espirometría básica como herramienta de evaluación funcional',
      p:[
        'La *espirometría básica* mide los volúmenes y flujos de aire que un paciente puede mover durante una respiración forzada, permitiendo clasificar objetivamente un patrón funcional como obstructivo (dificultad para exhalar el aire, característico de la enfermedad pulmonar obstructiva crónica y el asma que se desarrollarán en los siguientes temas) o restrictivo (dificultad para expandir los pulmones completamente, característico de la enfermedad pulmonar intersticial más adelante en este bloque).',
        'Este tema cierra estableciendo la base cuantitativa sobre la que se construirán los temas siguientes de este bloque: distinguir un patrón obstructivo de uno restrictivo mediante la espirometría retoma un principio general ya visto repetidamente en este pensum sobre clasificar sistemáticamente un hallazgo funcional mediante una herramienta cuantitativa objetiva, orientando directamente hacia el grupo de enfermedades más probable antes de profundizar en el diagnóstico específico.'
      ],
      foco:[
        '*Consideración clínica*: la espirometría distingue objetivamente un patrón obstructivo (dificultad para exhalar) de uno restrictivo (dificultad para expandir los pulmones), orientando directamente hacia el grupo de enfermedades respiratorias más probable.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 1.'
},

'asma-adulto': {
  tema:'Asma del adulto',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente el patrón obstructivo ya visto en la espirometría del tema anterior, desarrollando ahora la condición respiratoria obstructiva más frecuente y con frecuencia reversible en el adulto.',
  claves:['asma bronquial del adulto','clasificación de severidad del asma','broncodilatadores en el asma'],
  sigue:'enfermedad-pulmonar-obstructiva-cronica',
  secciones:[
    {
      t:'El asma bronquial del adulto como inflamación crónica reversible de la vía aérea',
      p:[
        'El *asma bronquial del adulto* es una enfermedad inflamatoria crónica de las vías aéreas que genera episodios recurrentes de sibilancias, dificultad respiratoria, opresión torácica, y tos, con una característica clave que la distingue de otras condiciones obstructivas que se verán en este bloque: la obstrucción del flujo aéreo es, al menos parcialmente, reversible, ya sea espontáneamente o con tratamiento broncodilatador.',
        'Esta reversibilidad, confirmable mediante espirometría antes y después de administrar un broncodilatador, retoma directamente la herramienta ya vista en el tema anterior de este bloque: demostrar una mejoría significativa del flujo aéreo tras el broncodilatador es un criterio diagnóstico central del asma, distinguiéndola de condiciones obstructivas con menor reversibilidad que se desarrollarán en el siguiente tema.'
      ]
    },
    {
      t:'La clasificación de severidad del asma como guía terapéutica',
      p:[
        'La *clasificación de severidad del asma* gradúa la enfermedad según la frecuencia de los síntomas, su impacto en las actividades diarias y el sueño, y el grado de limitación del flujo aéreo medido por espirometría, desde formas intermitentes leves hasta formas persistentes graves, retomando un principio general ya visto repetidamente en este pensum sobre gradar la severidad de una condición crónica para orientar el manejo escalonado apropiado.',
        'Reconocer esta clasificación como base del manejo escalonado retoma directamente la importancia ya vista en otros contextos de este pensum sobre no aplicar el mismo tratamiento a toda presentación de una enfermedad, sino ajustar la intensidad terapéutica según la severidad específica de cada paciente, incrementando o disminuyendo el tratamiento conforme el control de los síntomas lo permita.'
      ]
    },
    {
      t:'Los broncodilatadores en el asma y su mecanismo de acción',
      p:[
        'Los *broncodilatadores en el asma* actúan relajando el músculo liso que rodea las vías aéreas, revirtiendo la broncoconstricción característica de un episodio agudo, y se dividen en formulaciones de acción rápida (para alivio inmediato de síntomas agudos) y de acción prolongada (para control mantenido, generalmente combinados con antiinflamatorios inhalados).',
        'Este tema cierra retomando el hilo conductor de todo este bloque: comprender que el asma involucra tanto un componente inflamatorio crónico como un componente de broncoconstricción reversible aguda explica por qué su manejo combina típicamente antiinflamatorios (dirigidos a la inflamación crónica subyacente) con broncodilatadores (dirigidos al alivio sintomático agudo), dos mecanismos terapéuticos complementarios dirigidos a los dos componentes fisiopatológicos distintos de la misma enfermedad.'
      ],
      foco:[
        '*Consideración clínica*: demostrar una mejoría significativa del flujo aéreo tras administrar un broncodilatador es un criterio diagnóstico central del asma, reflejando la reversibilidad característica de esta condición obstructiva.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 41.'
},

'enfermedad-pulmonar-obstructiva-cronica': {
  tema:'Enfermedad pulmonar obstructiva crónica',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente el asma ya vista, contrastando ahora otra condición obstructiva frecuente pero con una característica clave distinta: una obstrucción del flujo aéreo considerablemente menos reversible y progresiva en el tiempo.',
  claves:['enfermedad pulmonar obstructiva crónica','enfisema pulmonar','bronquitis crónica'],
  sigue:'neumonia-adquirida-comunidad-manejo-especializado',
  secciones:[
    {
      t:'La enfermedad pulmonar obstructiva crónica y su relación con la exposición prolongada',
      p:[
        'La *enfermedad pulmonar obstructiva crónica* es una condición respiratoria progresiva, relacionada de forma predominante con la exposición prolongada al humo del tabaco, que genera una obstrucción del flujo aéreo considerablemente menos reversible que la del asma ya vista en el tema anterior, retomando directamente la distinción de reversibilidad ya establecida como criterio diferenciador entre estas dos condiciones obstructivas.',
        'Reconocer esta menor reversibilidad, confirmable también mediante espirometría con broncodilatador ya vista al inicio de este bloque, retoma un principio general ya visto repetidamente en este pensum sobre usar la misma herramienta diagnóstica para distinguir entre dos condiciones con presentación superficialmente similar: un paciente con obstrucción que mejora poco tras el broncodilatador orienta hacia esta condición, más que hacia el asma.'
      ]
    },
    {
      t:'El enfisema pulmonar como destrucción del tejido alveolar',
      p:[
        'El *enfisema pulmonar* es uno de los dos componentes fenotípicos clásicos de la enfermedad pulmonar obstructiva crónica, caracterizado por la destrucción progresiva de las paredes alveolares, que reduce la superficie disponible para el intercambio gaseoso ya visto en el primer tema de este bloque, además de disminuir la retracción elástica normal del pulmón que ayuda a exhalar el aire.',
        'Esta conexión directa con el intercambio gaseoso ya establecido retoma un principio general ya visto repetidamente en este pensum sobre entender cómo un cambio estructural específico (la destrucción de las paredes alveolares) compromete directamente una función fisiológica ya conocida (el intercambio gaseoso), permitiendo predecir las consecuencias clínicas esperadas a partir del mecanismo anatómico subyacente.'
      ]
    },
    {
      t:'La bronquitis crónica como el otro componente fenotípico clásico',
      p:[
        'La *bronquitis crónica* es el segundo componente fenotípico clásico de la enfermedad pulmonar obstructiva crónica, definida clínicamente por tos productiva persistente durante al menos tres meses al año, en al menos dos años consecutivos, reflejando inflamación crónica de las vías aéreas con producción excesiva de moco que contribuye a la obstrucción del flujo aéreo.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: reconocer que el enfisema (destrucción alveolar, afecta el intercambio gaseoso) y la bronquitis crónica (inflamación de la vía aérea con exceso de moco, afecta el flujo) son dos mecanismos fisiopatológicos distintos que con frecuencia coexisten en proporciones variables en el mismo paciente con enfermedad pulmonar obstructiva crónica, retomando la importancia ya vista repetidamente en este pensum sobre reconocer que una misma condición clínica puede tener componentes fisiopatológicos múltiples y superpuestos.'
      ],
      foco:[
        '*Consideración clínica*: un paciente cuya obstrucción del flujo aéreo mejora poco tras el broncodilatador, a diferencia del asma, orienta hacia enfermedad pulmonar obstructiva crónica, particularmente con antecedente de exposición prolongada al tabaco.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 44.'
},

'neumonia-adquirida-comunidad-manejo-especializado': {
  tema:'Neumonía adquirida en la comunidad: manejo especializado',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente el intercambio gaseoso ya visto al inicio de este bloque, mostrando cómo una infección del parénquima pulmonar compromete ese intercambio al llenar los espacios alveolares con material inflamatorio en vez de aire.',
  claves:['neumonía adquirida en la comunidad','escala de severidad de neumonía','neumonía grave'],
  sigue:'tuberculosis-pulmonar-adulto',
  secciones:[
    {
      t:'La neumonía adquirida en la comunidad como infección aguda del parénquima pulmonar',
      p:[
        'La *neumonía adquirida en la comunidad* es la infección aguda del parénquima pulmonar adquirida fuera del ámbito hospitalario, generando la clásica combinación de fiebre, tos, dificultad respiratoria, y hallazgos radiológicos de consolidación -esta consolidación radiológica retoma directamente la importancia ya vista sobre el intercambio gaseoso al inicio de este bloque: el material inflamatorio que llena los alvéolos infectados desplaza el aire normalmente presente, comprometiendo directamente ese intercambio.',
        'Reconocer la neumonía como una condición donde la infección compromete directamente la función respiratoria normal, no solo genera síntomas sistémicos como la fiebre, retoma un principio general ya visto repetidamente en este pensum sobre distinguir las manifestaciones sistémicas de una infección de su impacto funcional directo sobre el órgano afectado, ambos relevantes pero con implicaciones clínicas distintas.'
      ]
    },
    {
      t:'La escala de severidad de neumonía como herramienta de decisión sobre el sitio de manejo',
      p:[
        'La *escala de severidad de neumonía* combina variables clínicas, de laboratorio, y radiológicas para estratificar el riesgo del paciente y orientar sistemáticamente la decisión sobre el sitio de manejo apropiado -ambulatorio, hospitalización en sala general, u hospitalización en cuidados intensivos- retomando un principio general ya visto repetidamente en este pensum sobre usar herramientas cuantitativas estructuradas para tomar decisiones clínicas objetivas en vez de basarse únicamente en impresión clínica subjetiva.',
        'Esta sistematización de la decisión sobre el sitio de manejo retoma directamente la importancia ya vista sobre escalas de riesgo estructuradas en otros contextos de este pensum, como las escalas de riesgo de anticoagulación en fibrilación auricular de Cardiología de este mismo cuatrimestre: en ambos casos, una escala validada orienta una decisión clínica de alto impacto de forma más consistente y reproducible que el juicio clínico aislado.'
      ]
    },
    {
      t:'La neumonía grave y sus implicaciones de manejo',
      p:[
        'La *neumonía grave* -identificada mediante la escala de severidad ya vista, o por criterios clínicos específicos como insuficiencia respiratoria significativa o inestabilidad hemodinámica- exige manejo hospitalario intensivo, con frecuencia en una unidad de cuidados intensivos, retomando directamente la importancia ya vista sobre reconocer signos de gravedad que determinan un nivel de cuidado más intensivo, un principio ya aplicado repetidamente en distintos contextos de este pensum.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre reconocer la severidad de una condición respiratoria para orientar el manejo apropiado: de la misma forma que la espirometría clasifica objetivamente el patrón funcional al inicio de este bloque, la escala de severidad de neumonía clasifica objetivamente el riesgo del paciente infectado, ambas herramientas cumpliendo la misma función general de traducir una evaluación clínica compleja en una decisión de manejo estructurada y reproducible.'
      ],
      foco:[
        '*Consideración clínica*: la escala de severidad de neumonía orienta sistemáticamente la decisión sobre el sitio de manejo apropiado, reduciendo la variabilidad de esta decisión de alto impacto respecto al juicio clínico aislado.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 32.'
},

'tuberculosis-pulmonar-adulto': {
  tema:'Tuberculosis pulmonar del adulto',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la neumonía ya vista, contrastando ahora una infección pulmonar de curso considerablemente más crónico e insidioso, con implicaciones de salud pública que van más allá del paciente individual.',
  claves:['tuberculosis pulmonar activa','esquema de tratamiento antituberculoso','tuberculosis multirresistente'],
  sigue:'derrame-pleural-enfoque-diagnostico',
  secciones:[
    {
      t:'La tuberculosis pulmonar activa como infección de curso crónico',
      p:[
        'La *tuberculosis pulmonar activa* es una infección de curso considerablemente más crónico e insidioso que la neumonía bacteriana ya vista en el tema anterior, presentándose característicamente con tos prolongada, fiebre de predominio vespertino, sudoración nocturna, y pérdida de peso, un patrón sintomático que retoma directamente la importancia ya vista sobre principios de enfermedades infecciosas y síndrome febril de origen desconocido en otros cuatrimestres de este pensum.',
        'Reconocer que este patrón crónico e insidioso contrasta directamente con la presentación más aguda de la neumonía adquirida en la comunidad retoma un principio general ya visto repetidamente en este pensum sobre usar el curso temporal de una infección (aguda versus crónica) como característica diagnóstica diferencial relevante, no solo la localización anatómica del compromiso.'
      ]
    },
    {
      t:'El esquema de tratamiento antituberculoso y su duración prolongada',
      p:[
        'El *esquema de tratamiento antituberculoso* combina múltiples fármacos administrados durante un período considerablemente más prolongado que el tratamiento típico de una neumonía bacteriana, una duración extendida necesaria precisamente por la naturaleza de crecimiento lento del microorganismo causal y por el riesgo de desarrollo de resistencia si se usa un solo fármaco o un curso demasiado corto.',
        'Esta combinación de múltiples fármacos, en vez de uno solo, retoma un principio general ya visto repetidamente en este pensum sobre combinar mecanismos de acción distintos para reducir el riesgo de resistencia, un principio farmacológico aplicable más allá de la tuberculosis, pero particularmente crítico en esta condición dado el curso prolongado del tratamiento y las consecuencias graves si se desarrolla resistencia durante ese curso.'
      ]
    },
    {
      t:'La tuberculosis multirresistente como consecuencia de un tratamiento inadecuado',
      p:[
        'La *tuberculosis multirresistente* -resistente a los fármacos de primera línea del esquema estándar- se desarrolla con frecuencia como consecuencia de un tratamiento inicial inadecuado, ya sea por adherencia incompleta del paciente o por un esquema mal indicado, retomando directamente la importancia ya vista repetidamente en este pensum sobre la adherencia terapéutica como determinante directo del éxito de un tratamiento prolongado.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: la tuberculosis multirresistente exige esquemas de tratamiento considerablemente más prolongados, tóxicos, y costosos que la tuberculosis sensible, ilustrando de forma concreta por qué completar apropiadamente el esquema de tratamiento inicial, ya visto en el apartado anterior de este tema, no es solo relevante para el paciente individual, sino que su incumplimiento genera consecuencias de salud pública al favorecer la aparición y transmisión de cepas resistentes.'
      ],
      foco:[
        '*Consideración clínica*: la adherencia incompleta al esquema de tratamiento antituberculoso inicial es una causa reconocida del desarrollo de tuberculosis multirresistente, con consecuencias que trascienden al paciente individual hacia la salud pública.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 33.'
},

'derrame-pleural-enfoque-diagnostico': {
  tema:'Derrame pleural: enfoque diagnóstico',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente las condiciones respiratorias ya vistas en este bloque, mostrando ahora cómo la acumulación anormal de líquido en el espacio pleural puede ser consecuencia de múltiples condiciones subyacentes distintas, exigiendo un enfoque diagnóstico sistemático para distinguirlas.',
  claves:['toracocentesis diagnóstica','criterios de Light','derrame pleural exudativo'],
  sigue:'neumotorax',
  secciones:[
    {
      t:'La toracocentesis diagnóstica como paso inicial de evaluación',
      p:[
        'La *toracocentesis diagnóstica* es el procedimiento mediante el cual se extrae una muestra de líquido pleural para su análisis, un paso indispensable ante todo derrame pleural de causa no evidente, retomando la importancia ya vista repetidamente en este pensum sobre obtener una muestra directa para análisis en vez de basarse exclusivamente en hallazgos indirectos de imagen para determinar la causa subyacente de una acumulación anormal de líquido.',
        'Este procedimiento relativamente sencillo permite iniciar el proceso de clasificación del derrame, retomando un principio general ya visto repetidamente en este pensum sobre priorizar un procedimiento diagnóstico accesible y de bajo riesgo relativo antes de recurrir a estudios más invasivos o complejos, siempre que aporte suficiente información para orientar el manejo posterior.'
      ]
    },
    {
      t:'Los criterios de Light como herramienta de clasificación del derrame',
      p:[
        'Los *criterios de Light* son un conjunto de parámetros bioquímicos del líquido pleural, comparados con los correspondientes valores séricos del paciente, que permiten clasificar sistemáticamente un derrame pleural en exudativo o trasudativo -esta clasificación bioquímica retoma directamente la importancia ya vista repetidamente en este pensum sobre usar herramientas cuantitativas estructuradas para clasificar sistemáticamente un hallazgo clínico, en vez de basarse en una impresión subjetiva del aspecto del líquido.',
        'Reconocer que estos criterios comparan el líquido pleural con la sangre del mismo paciente, no con un valor absoluto fijo, retoma un principio general ya visto repetidamente en este pensum sobre interpretar un hallazgo de laboratorio en relación con el contexto específico del paciente individual, no en aislamiento, un enfoque de interpretación relativa que mejora la precisión diagnóstica de la clasificación resultante.'
      ]
    },
    {
      t:'El derrame pleural exudativo y su amplio diagnóstico diferencial',
      p:[
        'El *derrame pleural exudativo* -aquel con niveles elevados de proteínas y lactato deshidrogenasa en relación con los valores séricos- sugiere un proceso local que altera la permeabilidad de la pleura, como infección (retomando directamente la neumonía ya vista en este bloque, que puede complicarse con un derrame paraneumónico), malignidad, o inflamación, a diferencia del derrame trasudativo, que típicamente refleja un problema sistémico como la insuficiencia cardíaca ya vista en Cardiología de este mismo cuatrimestre.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre clasificar sistemáticamente antes de profundizar en el diagnóstico específico: distinguir un derrame exudativo de uno trasudativo mediante los criterios de Light orienta directamente hacia un grupo de causas probables completamente distinto -local versus sistémico- antes de investigar la causa específica exacta dentro de cada categoría, el mismo principio de clasificación sistemática ya aplicado repetidamente en distintos contextos de este pensum.'
      ],
      foco:[
        '*Consideración clínica*: distinguir un derrame pleural exudativo (proceso local) de uno trasudativo (problema sistémico) mediante los criterios de Light orienta directamente hacia un grupo de causas probables completamente distinto.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 76.'
},

'neumotorax': {
  tema:'Neumotórax',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la mecánica ventilatoria ya vista al inicio de este bloque, mostrando qué ocurre cuando aire, en vez de líquido como en el derrame pleural ya visto, se acumula anormalmente en el espacio pleural.',
  claves:['neumotórax espontáneo','neumotórax a tensión','manejo del neumotórax'],
  sigue:'tromboembolismo-pulmonar',
  secciones:[
    {
      t:'El neumotórax espontáneo como acumulación de aire sin trauma evidente',
      p:[
        'El *neumotórax espontáneo* es la acumulación de aire en el espacio pleural sin un trauma evidente que lo explique, típicamente por la ruptura de una pequeña bulla o ampolla subpleural, generando colapso parcial o completo del pulmón afectado -esta entrada de aire hacia un espacio que normalmente está a presión negativa retoma directamente la importancia ya vista sobre la mecánica ventilatoria del primer tema de este bloque, donde esa presión negativa pleural es precisamente lo que mantiene el pulmón expandido.',
        'Reconocer que el neumotórax espontáneo ocurre característicamente en personas jóvenes, altas y delgadas, con frecuencia sin ningún antecedente pulmonar previo, retoma un principio general ya visto repetidamente en este pensum sobre reconocer perfiles demográficos característicos que orientan la sospecha clínica hacia una condición específica, en este caso distinta del perfil típico de otras condiciones pulmonares crónicas ya vistas en este bloque.'
      ]
    },
    {
      t:'El neumotórax a tensión como emergencia con mecanismo de válvula unidireccional',
      p:[
        'El *neumotórax a tensión* es una forma particularmente grave donde un mecanismo de válvula unidireccional permite que el aire entre al espacio pleural durante la inspiración pero no pueda salir durante la espiración, acumulando progresivamente presión que no solo colapsa el pulmón afectado, sino que desplaza las estructuras mediastínicas y compromete el retorno venoso hacia el corazón, retomando directamente la importancia ya vista sobre el gasto cardíaco en Cardiología de este mismo cuatrimestre.',
        'Esta capacidad del neumotórax a tensión de comprometer directamente la función cardiovascular, no solo la respiratoria, retoma un principio general ya visto repetidamente en este pensum sobre reconocer que una condición primariamente respiratoria puede tener consecuencias sistémicas graves que comprometen otros sistemas de órganos, exigiendo reconocimiento y manejo inmediato como la verdadera emergencia médica que representa.'
      ]
    },
    {
      t:'El manejo del neumotórax según su severidad y mecanismo',
      p:[
        'El *manejo del neumotórax* varía según su tamaño y severidad: desde observación en casos pequeños y asintomáticos, hasta la colocación de un tubo torácico para evacuar el aire acumulado en casos más significativos, mientras el neumotórax a tensión exige descompresión inmediata, sin demora para estudios de imagen confirmatorios, dado su compromiso hemodinámico agudo ya visto en el apartado anterior.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: reconocer que el manejo se escalona según la severidad -principio ya visto repetidamente en distintas condiciones de este pensum- pero que el neumotórax a tensión constituye una excepción donde no hay tiempo para ese escalonamiento habitual, exigiendo intervención inmediata basada en la sospecha clínica antes de cualquier confirmación por imagen, el mismo principio de actuar ante la urgencia con ventana de tiempo limitada ya aplicado repetidamente a lo largo de este pensum.'
      ],
      foco:[
        '*Consideración clínica*: el neumotórax a tensión exige descompresión inmediata basada en la sospecha clínica, sin esperar confirmación por estudios de imagen, dado su compromiso hemodinámico agudo potencialmente fatal.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 76.'
},

'tromboembolismo-pulmonar': {
  tema:'Tromboembolismo pulmonar',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:14,
  idea:'Este tema retoma directamente el intercambio gaseoso ya visto al inicio de este bloque, mostrando cómo la obstrucción súbita de la circulación pulmonar por un trombo compromete ese intercambio de una forma completamente distinta a las condiciones ya vistas hasta ahora en este bloque.',
  claves:['embolia pulmonar aguda','trombosis venosa profunda','anticoagulación en tromboembolismo pulmonar'],
  sigue:'enfermedad-pulmonar-intersticial',
  secciones:[
    {
      t:'La embolia pulmonar aguda como obstrucción vascular súbita',
      p:[
        'La *embolia pulmonar aguda* es la obstrucción súbita de una o más arterias pulmonares por un trombo, típicamente originado en las venas profundas de los miembros inferiores, que compromete directamente el flujo sanguíneo hacia el territorio pulmonar afectado -a diferencia de las condiciones ya vistas en este bloque que afectan primariamente la vía aérea o el espacio pleural, la embolia pulmonar es fundamentalmente un problema vascular que compromete el intercambio gaseoso por un mecanismo distinto: sangre sin oxigenar apropiadamente por falta de perfusión al territorio afectado, no por obstrucción de la vía aérea misma.',
        'Reconocer este mecanismo vascular, distinto de los mecanismos ya vistos de obstrucción de vía aérea (asma, enfermedad pulmonar obstructiva crónica) o de ocupación alveolar (neumonía), retoma un principio general ya visto repetidamente en este pensum sobre reconocer que un mismo órgano puede fallar por mecanismos fisiopatológicos completamente distintos, cada uno exigiendo un abordaje diagnóstico y terapéutico específico.'
      ]
    },
    {
      t:'La trombosis venosa profunda como origen frecuente del émbolo',
      p:[
        'La *trombosis venosa profunda* -la formación de un trombo dentro de las venas profundas, con mayor frecuencia de los miembros inferiores- es el origen más frecuente del émbolo que causa la embolia pulmonar aguda, retomando directamente la importancia ya vista sobre reconocer la relación causal entre dos condiciones aparentemente en órganos distintos: un trombo formado en la pierna puede desprenderse y viajar hasta comprometer la circulación pulmonar.',
        'Esta relación causal directa retoma un principio general ya visto repetidamente en este pensum sobre reconocer riesgos embólicos a distancia desde un sitio de formación de trombo, un principio ya aplicado en el contexto de la fibrilación auricular de Cardiología (donde el trombo se forma en la aurícula) y ahora aplicado a este contexto venoso periférico, ambos ilustrando cómo un trombo formado en un sitio puede generar consecuencias graves en un órgano completamente distinto.'
      ]
    },
    {
      t:'La anticoagulación en tromboembolismo pulmonar como pilar del tratamiento',
      p:[
        'La *anticoagulación en tromboembolismo pulmonar* es el pilar central del tratamiento, buscando prevenir la formación de nuevos trombos y permitir que el sistema fibrinolítico natural del organismo disuelva gradualmente el trombo ya formado, retomando directamente la importancia ya vista sobre la anticoagulación en fibrilación auricular de Cardiología de este mismo cuatrimestre, aunque aplicada aquí a un contexto y una urgencia clínica distintos.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: el tromboembolismo pulmonar ilustra cómo una condición que se origina completamente fuera del sistema respiratorio (una trombosis venosa de los miembros inferiores) puede generar una de las urgencias respiratorias más graves y potencialmente fatales, reforzando la importancia de un enfoque clínico que no limite el razonamiento diagnóstico exclusivamente al órgano donde se manifiestan los síntomas principales, sino que considere sistemáticamente causas originadas en sistemas de órganos distantes.'
      ],
      foco:[
        '*Consideración clínica*: la embolia pulmonar aguda debe sospecharse activamente ante dificultad respiratoria súbita, particularmente en presencia de factores de riesgo de trombosis venosa profunda, incluso sin hallazgos evidentes en la vía aérea o el parénquima pulmonar.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 52.'
},

'enfermedad-pulmonar-intersticial': {
  tema:'Enfermedad pulmonar intersticial',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente el patrón restrictivo ya mencionado en la espirometría del primer tema de este bloque, desarrollando ahora el grupo de enfermedades que afectan primariamente el intersticio pulmonar en vez de la vía aérea o el espacio pleural ya vistos en temas anteriores.',
  claves:['fibrosis pulmonar','neumopatía intersticial difusa','patrón en vidrio esmerilado'],
  sigue:'insuficiencia-respiratoria-aguda',
  secciones:[
    {
      t:'La fibrosis pulmonar como cicatrización progresiva del tejido pulmonar',
      p:[
        'La *fibrosis pulmonar* es la cicatrización progresiva e irreversible del tejido intersticial pulmonar, engrosando la membrana alveolocapilar ya vista al inicio de este bloque y comprometiendo directamente el intercambio gaseoso, generando un patrón restrictivo en la espirometría -a diferencia de las condiciones obstructivas ya vistas (asma, enfermedad pulmonar obstructiva crónica), donde el problema es exhalar el aire, aquí el problema es la dificultad para expandir completamente unos pulmones progresivamente más rígidos.',
        'Reconocer este mecanismo restrictivo, contrastado directamente con el mecanismo obstructivo ya visto en otros temas de este bloque, retoma la importancia ya vista repetidamente en este pensum sobre distinguir mecanismos fisiopatológicos opuestos (obstructivo versus restrictivo) que pueden generar síntomas superficialmente similares (dificultad respiratoria) pero que exigen un enfoque diagnóstico y terapéutico completamente distinto.'
      ]
    },
    {
      t:'La neumopatía intersticial difusa como término general para un grupo heterogéneo',
      p:[
        'La *neumopatía intersticial difusa* es un término general que engloba un grupo heterogéneo de más de doscientas condiciones distintas que afectan el intersticio pulmonar, con causas que van desde exposiciones ambientales u ocupacionales específicas hasta enfermedades autoinmunes sistémicas (retomando la importancia ya vista sobre condiciones reumatológicas de otra materia de este cuatrimestre) hasta formas de causa desconocida.',
        'Reconocer esta heterogeneidad de causas retoma un principio general ya visto repetidamente en este pensum sobre no tratar un término diagnóstico general como una entidad única y uniforme: de la misma forma que otras categorías generales ya vistas en este pensum (como la neumopatía intersticial difusa) engloban múltiples entidades específicas con pronósticos y tratamientos distintos, el diagnóstico específico dentro de esta categoría amplia determina directamente el manejo apropiado para cada paciente.'
      ]
    },
    {
      t:'El patrón en vidrio esmerilado como hallazgo radiológico característico',
      p:[
        'El *patrón en vidrio esmerilado* es un hallazgo característico en la tomografía computarizada de tórax de alta resolución, que aparece como una opacidad pulmonar tenue que no borra completamente las estructuras vasculares y bronquiales subyacentes, orientando hacia un proceso intersticial activo, aunque no específico de una única causa, exigiendo correlación con el contexto clínico completo del paciente.',
        'Este tema cierra el bloque de enfermedad pulmonar intersticial retomando el hilo conductor de todo este bloque de Neumología: la enfermedad pulmonar intersticial, con su mecanismo restrictivo, su heterogeneidad de causas, y sus hallazgos radiológicos característicos, completa el panorama de los principales patrones fisiopatológicos respiratorios -obstructivo, infeccioso, vascular, y ahora restrictivo- que un médico general debe reconocer y diferenciar sistemáticamente.'
      ],
      foco:[
        '*Consideración clínica*: la enfermedad pulmonar intersticial engloba un grupo heterogéneo de más de doscientas condiciones distintas, por lo que el diagnóstico específico dentro de esta categoría general determina directamente el manejo apropiado para cada paciente.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 66.'
},

'insuficiencia-respiratoria-aguda': {
  tema:'Insuficiencia respiratoria aguda',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente todas las condiciones respiratorias ya vistas en este bloque como posibles causas subyacentes, mostrando ahora la vía final común hacia la que pueden progresar si no se reconocen y manejan oportunamente: la incapacidad del sistema respiratorio de mantener un intercambio gaseoso adecuado.',
  claves:['insuficiencia respiratoria hipoxémica','insuficiencia respiratoria hipercápnica','ventilación mecánica no invasiva'],
  sigue:'sindrome-apnea-obstructiva-sueno',
  secciones:[
    {
      t:'La insuficiencia respiratoria hipoxémica como falla del intercambio de oxígeno',
      p:[
        'La *insuficiencia respiratoria hipoxémica* refleja una falla predominante en la oxigenación de la sangre, con niveles de oxígeno insuficientes a pesar de una ventilación relativamente preservada, causada típicamente por condiciones que comprometen directamente el intercambio gaseoso ya visto al inicio de este bloque, como la neumonía, el tromboembolismo pulmonar, o la enfermedad pulmonar intersticial, todas ya desarrolladas en temas anteriores de esta materia.',
        'Reconocer que múltiples condiciones ya vistas en este bloque convergen en este mismo tipo de insuficiencia respiratoria retoma un principio general ya visto repetidamente en este pensum sobre reconocer una vía final común hacia la que distintas causas pueden converger, un patrón ya aplicado en otros contextos de este pensum sobre síndromes clínicos con múltiples etiologías posibles subyacentes.'
      ]
    },
    {
      t:'La insuficiencia respiratoria hipercápnica como falla de la ventilación',
      p:[
        'La *insuficiencia respiratoria hipercápnica* refleja primariamente una falla de la ventilación misma, con acumulación de dióxido de carbono por incapacidad de eliminarlo apropiadamente, causada típicamente por condiciones que comprometen la mecánica ventilatoria ya vista al inicio de este bloque, como una exacerbación severa de la enfermedad pulmonar obstructiva crónica o una debilidad significativa de los músculos respiratorios.',
        'Esta distinción entre falla de oxigenación (hipoxémica) y falla de ventilación (hipercápnica) retoma directamente la importancia ya vista sobre no confundir la ventilación con el intercambio gaseoso como procesos relacionados pero distintos, establecida en el primer tema de este bloque: reconocer cuál de estos dos mecanismos predomina en cada paciente orienta directamente hacia el manejo respiratorio más apropiado.'
      ]
    },
    {
      t:'La ventilación mecánica no invasiva como opción de soporte respiratorio',
      p:[
        'La *ventilación mecánica no invasiva* proporciona soporte respiratorio mediante una máscara ajustada, sin necesidad de intubación endotraqueal, apropiada para ciertos casos de insuficiencia respiratoria, particularmente útil en la insuficiencia hipercápnica por exacerbación de enfermedad pulmonar obstructiva crónica ya vista en este mismo bloque, reduciendo la necesidad de ventilación invasiva en casos apropiadamente seleccionados.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: la insuficiencia respiratoria aguda representa el desenlace común hacia el que pueden converger prácticamente todas las condiciones respiratorias ya vistas -obstructivas, infecciosas, vasculares, restrictivas- si no se reconocen y manejan oportunamente, reforzando la importancia de comprender cada condición específica precisamente para prevenir su progresión hacia esta vía final común potencialmente grave.'
      ],
      foco:[
        '*Consideración clínica*: distinguir si una insuficiencia respiratoria es predominantemente hipoxémica (falla de oxigenación) o hipercápnica (falla de ventilación) orienta directamente hacia el manejo respiratorio más apropiado para cada paciente.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 105.'
},

'sindrome-apnea-obstructiva-sueno': {
  tema:'Síndrome de apnea obstructiva del sueño',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la mecánica ventilatoria ya vista al inicio de este bloque, mostrando ahora una condición donde esa mecánica se compromete específicamente durante el sueño, por un mecanismo obstructivo distinto de los ya vistos en la vía aérea inferior.',
  claves:['apnea obstructiva del sueño','polisomnografía','presión positiva continua en la vía aérea'],
  sigue:'cancer-pulmon',
  secciones:[
    {
      t:'La apnea obstructiva del sueño como colapso repetido de la vía aérea superior',
      p:[
        'La *apnea obstructiva del sueño* es el colapso repetido de la vía aérea superior durante el sueño, generando pausas respiratorias que interrumpen el sueño normal y comprometen la oxigenación de forma intermitente -a diferencia de las condiciones ya vistas en este bloque que afectan la vía aérea inferior (asma, enfermedad pulmonar obstructiva crónica) o el parénquima pulmonar, esta condición ocurre específicamente en la vía aérea superior y específicamente durante el sueño, cuando la relajación normal de los músculos faríngeos favorece este colapso.',
        'Reconocer esta localización anatómica específica -vía aérea superior, no inferior- y esta temporalidad específica -durante el sueño- retoma un principio general ya visto repetidamente en este pensum sobre localizar sistemáticamente dónde y cuándo ocurre un problema fisiopatológico como paso indispensable para comprender su mecanismo y manejo apropiado, distinguiendo esta condición de las demás ya vistas en este bloque de Neumología.'
      ]
    },
    {
      t:'La polisomnografía como estudio diagnóstico de referencia',
      p:[
        'La *polisomnografía* es el estudio diagnóstico de referencia para confirmar la apnea obstructiva del sueño, monitorizando múltiples parámetros durante una noche de sueño -incluyendo el flujo respiratorio, el esfuerzo respiratorio, la saturación de oxígeno, y la actividad cerebral- para cuantificar objetivamente el número de eventos de apnea o hipopnea por hora de sueño, retomando un principio general ya visto repetidamente en este pensum sobre cuantificar objetivamente un hallazgo clínico mediante una herramienta diagnóstica específica.',
        'Esta cuantificación objetiva mediante un índice numérico de eventos por hora, en vez de basarse únicamente en el reporte subjetivo del paciente o su acompañante sobre la calidad del sueño, retoma directamente la importancia ya vista repetidamente en este pensum sobre gradar objetivamente la severidad de una condición mediante una medición cuantitativa reproducible, orientando el manejo apropiado según esa severidad específica.'
      ]
    },
    {
      t:'La presión positiva continua en la vía aérea como tratamiento de referencia',
      p:[
        'La *presión positiva continua en la vía aérea* es el tratamiento de referencia para la apnea obstructiva del sueño moderada a severa, proporcionando un flujo de aire a presión constante a través de una máscara durante el sueño que mantiene la vía aérea superior abierta, previniendo mecánicamente el colapso repetido ya visto en el primer apartado de este tema.',
        'Este tema cierra el bloque de Neumología retomando el hilo conductor completo de toda esta materia: desde la fisiología ventilatoria normal del primer tema hasta esta condición final, cada tema desarrollado -obstructivo, infeccioso, vascular, restrictivo, y ahora un trastorno específico del sueño- ilustra cómo comprender la mecánica ventilatoria y el intercambio gaseoso normales, establecidos desde el inicio de este bloque, es indispensable para entender cualquiera de sus alteraciones específicas a lo largo de toda esta materia, principio que se retomará ahora al pasar al último tema sobre cáncer de pulmón.'
      ],
      foco:[
        '*Consideración clínica*: la presión positiva continua en la vía aérea previene mecánicamente el colapso repetido de la vía aérea superior durante el sueño, siendo el tratamiento de referencia para la apnea obstructiva moderada a severa.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 98.'
},

'cancer-pulmon': {
  tema:'Cáncer de pulmón',
  bloque:'Neumología', programa:'unirm', cuatri:13, min:14,
  idea:'Este último tema cierra el bloque de Neumología retomando directamente múltiples conceptos ya vistos en esta materia -el patrón radiológico, la relación con el tabaquismo, y la relevancia de la detección oportuna- aplicados ahora a la neoplasia pulmonar más frecuente y de mayor mortalidad global.',
  claves:['cáncer de pulmón de células no pequeñas','cáncer de pulmón de células pequeñas','nódulo pulmonar solitario'],
  sigue:'abdomen-agudo-quirurgico',
  secciones:[
    {
      t:'El cáncer de pulmón de células no pequeñas como forma histológica más frecuente',
      p:[
        'El *cáncer de pulmón de células no pequeñas* es la forma histológica más frecuente de cáncer pulmonar, englobando varios subtipos específicos, con un comportamiento biológico generalmente menos agresivo que la forma de células pequeñas que se desarrollará en el siguiente apartado, y con opciones de tratamiento que incluyen cirugía en etapas tempranas, a diferencia de otras neoplasias ya vistas en este pensum que rara vez son candidatas quirúrgicas.',
        'Retomando directamente la relación ya vista repetidamente en este pensum entre la exposición al tabaco y distintas condiciones respiratorias (la enfermedad pulmonar obstructiva crónica ya vista en este mismo bloque, entre otras), el tabaquismo es también el factor de riesgo más importante para el desarrollo de cáncer de pulmón en ambas formas histológicas, reforzando por qué la prevención del tabaquismo tiene un impacto que se extiende a múltiples condiciones respiratorias distintas, no solo a una.'
      ]
    },
    {
      t:'El cáncer de pulmón de células pequeñas como forma de comportamiento más agresivo',
      p:[
        'El *cáncer de pulmón de células pequeñas* es una forma histológica menos frecuente pero de comportamiento considerablemente más agresivo, con crecimiento rápido y alta propensión a la diseminación metastásica temprana, por lo que la cirugía rara vez es una opción de tratamiento apropiada, a diferencia de la forma de células no pequeñas ya vista en el apartado anterior, y el manejo se basa predominantemente en quimioterapia y radioterapia.',
        'Esta distinción de comportamiento biológico entre las dos formas histológicas principales retoma un principio general ya visto repetidamente en este pensum, incluyendo en el bloque de Cardiología de este mismo cuatrimestre respecto a los distintos tipos de cáncer de piel, sobre reconocer que el subtipo histológico específico de una neoplasia determina directamente tanto el pronóstico como las opciones de tratamiento apropiadas, no debiendo tratarse todas las formas de una misma categoría general de cáncer como equivalentes entre sí.'
      ]
    },
    {
      t:'El nódulo pulmonar solitario y su detección con frecuencia incidental',
      p:[
        'El *nódulo pulmonar solitario* -una lesión redondeada, generalmente pequeña, rodeada de tejido pulmonar normal- con frecuencia se detecta de forma incidental en estudios de imagen realizados por otro motivo, retomando directamente el patrón de detección incidental ya visto repetidamente en este pensum para otras neoplasias, como el cáncer renal de Urología de este mismo cuatrimestre, exigiendo una evaluación sistemática del riesgo de malignidad según características como el tamaño, los bordes, y los antecedentes del paciente.',
        'Este tema, y con él todo el bloque de Neumología, cierra retomando el hilo conductor completo de toda esta materia: desde la fisiología respiratoria normal del primer tema hasta este cáncer de pulmón final, comprender la mecánica ventilatoria y el intercambio gaseoso normales establecidos desde el inicio, junto con las herramientas diagnósticas sistemáticas desarrolladas a lo largo de todo este bloque -espirometría, escalas de severidad, criterios bioquímicos, estudios de imagen- proporciona el marco de razonamiento clínico necesario para abordar cualquier condición respiratoria, desde las más frecuentes hasta esta neoplasia de mayor mortalidad global.'
      ],
      foco:[
        '*Consideración clínica*: un nódulo pulmonar solitario detectado incidentalmente exige una evaluación sistemática del riesgo de malignidad según sus características radiológicas y los antecedentes del paciente, no debe descartarse por ser un hallazgo asintomático.'
      ]
    }
  ],
  ref:'Murray y Nadel, Tratado de Medicina Respiratoria, cap. 47.'
}

});
