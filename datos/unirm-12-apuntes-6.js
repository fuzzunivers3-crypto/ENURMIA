/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 12 (lote 6)
   Cubre MEDICINA FORENSE al estandar extenso (3 secciones,
   ~200-300 palabras por seccion, min 12-14). Sexta materia
   del cuatrimestre 12 (2 creditos, 7 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== MEDICINA FORENSE ==================== */
'principios-medicina-legal': {
  tema:'Principios de medicina legal',
  bloque:'Medicina Forense', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema abre la materia de Medicina Forense estableciendo un cambio de perspectiva fundamental respecto al resto de este pensum: aquí el médico actúa no solo para diagnosticar y tratar, sino para documentar hallazgos con valor legal ante un sistema de justicia.',
  claves:['medicina legal','peritaje médico','responsabilidad médica'],
  sigue:'certificacion-defuncion',
  secciones:[
    {
      t:'La medicina legal como puente entre la medicina y el derecho',
      p:[
        'La *medicina legal* es la rama de la medicina que aplica conocimientos médicos para resolver cuestiones de naturaleza jurídica, funcionando como un puente entre dos disciplinas con lenguajes, objetivos y estándares de certeza distintos -mientras la medicina clínica busca la mejor decisión posible con la información disponible para beneficiar al paciente, la medicina legal debe producir conclusiones que resistan el escrutinio de un proceso judicial, donde el estándar de evidencia y la forma de documentación son considerablemente más exigentes.',
        'Este cambio de perspectiva retoma, de forma invertida, un principio general ya visto repetidamente en este pensum sobre adaptar la comunicación y el registro clínico al contexto específico de cada situación: aquí el contexto específico es un proceso legal, y esa adaptación implica una documentación mucho más meticulosa, objetiva y defendible que la que suele requerirse en la práctica clínica habitual.'
      ]
    },
    {
      t:'El peritaje médico como función central de esta especialidad',
      p:[
        'El *peritaje médico* es la función mediante la cual un médico, actuando como perito, aporta su conocimiento técnico especializado para ayudar a un tribunal o autoridad a comprender aspectos médicos relevantes para un caso, ya sea mediante un informe escrito o mediante testimonio directo -esta función exige que el médico traduzca conocimiento técnico complejo a un lenguaje comprensible para quienes toman la decisión legal, sin simplificar al punto de distorsionar la realidad médica.',
        'Esta necesidad de traducir conocimiento técnico a un lenguaje comprensible para una audiencia no especializada retoma directamente la importancia ya vista repetidamente en este pensum sobre comunicación clínica de calidad adaptada a la audiencia: de la misma forma que un médico debe explicar un diagnóstico complejo a un paciente sin formación médica, el perito médico debe explicar hallazgos médicos complejos a un juez o jurado sin esa formación, manteniendo siempre el rigor técnico subyacente.'
      ]
    },
    {
      t:'La responsabilidad médica como marco que atraviesa toda la práctica clínica',
      p:[
        'La *responsabilidad médica* -el conjunto de obligaciones legales y éticas que todo profesional de salud asume al ejercer su práctica- establece el marco dentro del cual se evalúa si la actuación de un médico en un caso específico cumplió con el estándar de cuidado esperado, un concepto que atraviesa transversalmente toda la práctica clínica, no solo los casos que eventualmente llegan a un proceso legal.',
        'Este tema cierra estableciendo la base conceptual sobre la que se construirán los 6 temas restantes de esta materia: cada tema específico -certificación de defunción, clasificación de lesiones, agresión sexual, cadena de custodia, autopsia, ética médico-legal- representa una aplicación concreta de estos tres conceptos fundamentales (medicina legal, peritaje, responsabilidad médica) a un escenario clínico particular donde la documentación médica adquiere consecuencias legales directas.'
      ],
      foco:[
        '*Consideración clínica*: la documentación médica en contextos con potencial relevancia legal debe ser considerablemente más meticulosa, objetiva y defendible que la documentación clínica habitual, dado el estándar de evidencia distinto que exige un proceso judicial.'
      ]
    }
  ],
  ref:'Guía de Medicina Legal y Forense, cap. 1.'
},

'certificacion-defuncion': {
  tema:'Certificación de defunción',
  bloque:'Medicina Forense', programa:'unirm', cuatri:12, min:13,
  idea:'La certificación de defunción es, con frecuencia, el primer y más rutinario contacto de cualquier médico con la documentación médico-legal, retomando la importancia ya vista sobre la relevancia de un documento aparentemente administrativo que en realidad tiene consecuencias legales, familiares y de salud pública considerables.',
  claves:['certificado de defunción','causa de muerte','muerte natural y violenta'],
  sigue:'lesiones-clasificacion-medico-legal',
  secciones:[
    {
      t:'El certificado de defunción y sus múltiples funciones',
      p:[
        'El *certificado de defunción* es el documento legal que confirma oficialmente el fallecimiento de una persona, cumpliendo múltiples funciones simultáneas: permite los trámites legales y funerarios de la familia, alimenta las estadísticas de salud pública sobre causas de muerte en la población, y en ciertos casos, constituye el primer documento que puede iniciar una investigación legal si la causa de muerte lo amerita.',
        'Reconocer estas múltiples funciones simultáneas de un documento que, en la práctica clínica diaria, puede sentirse como un trámite administrativo rutinario, retoma la importancia ya vista repetidamente en este pensum sobre no subestimar el valor de la documentación clínica precisa: un certificado de defunción completado con negligencia o imprecisión afecta no solo a la familia inmediata, sino potencialmente a las estadísticas de salud pública y a la posibilidad de una investigación legal apropiada.'
      ]
    },
    {
      t:'La causa de muerte y la importancia de su determinación precisa',
      p:[
        'La *causa de muerte* debe documentarse siguiendo una secuencia lógica que distingue la causa inmediata (el evento final que produjo la muerte) de la causa subyacente (la condición que inició la secuencia de eventos que culminó en el fallecimiento) -esta distinción retoma directamente la importancia ya vista repetidamente en este pensum sobre reconocer una cadena causal completa, no solo el evento final más evidente.',
        'Determinar con precisión esta secuencia causal tiene relevancia que va más allá del caso individual: las estadísticas nacionales de causas de muerte, que orientan políticas de salud pública, dependen directamente de la precisión con la que cada médico documenta esta secuencia en cada certificado individual -un error sistemático y repetido en cómo se documentan las causas de muerte puede distorsionar significativamente estas estadísticas poblacionales.'
      ]
    },
    {
      t:'La distinción entre muerte natural y violenta',
      p:[
        'La *muerte natural y violenta* representan una distinción fundamental que todo médico debe realizar al certificar un fallecimiento: una muerte natural es aquella producida por una enfermedad o proceso fisiológico sin intervención externa, mientras una muerte violenta involucra un mecanismo externo (trauma, intoxicación, asfixia, entre otros), independientemente de si fue accidental, homicida o suicida.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum sobre reconocer cuándo un hallazgo exige investigación adicional en vez de una conclusión automática: ante cualquier sospecha o evidencia de un componente violento en una muerte, el médico no debe certificarla como natural sin la investigación apropiada, ya que esta distinción determina directamente si el caso amerita la intervención de las autoridades legales antes de proceder con los trámites funerarios habituales.'
      ],
      foco:[
        '*Consideración clínica*: ante cualquier sospecha de un componente violento en una muerte, no debe certificarse como natural sin la investigación apropiada, dado que esta distinción determina si el caso amerita intervención de las autoridades legales.'
      ]
    }
  ],
  ref:'Guía de Medicina Legal y Forense, cap. 4.'
},

'lesiones-clasificacion-medico-legal': {
  tema:'Lesiones y su clasificación médico-legal',
  bloque:'Medicina Forense', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema retoma directamente la evaluación de lesiones ya vista en distintos contextos clínicos de este pensum, aplicando ahora un sistema de clasificación específico cuya finalidad no es solo el manejo médico, sino determinar consecuencias legales proporcionales a la gravedad del daño.',
  claves:['clasificación de lesiones','lesión leve y grave','días de incapacidad médico-legal'],
  sigue:'agresion-sexual-abordaje-medico-legal',
  secciones:[
    {
      t:'La clasificación de lesiones con fines médico-legales',
      p:[
        'La *clasificación de lesiones* con fines médico-legales exige una documentación considerablemente más sistemática que la evaluación clínica habitual de una lesión: describir con precisión la localización exacta, el tipo de lesión (retomando la terminología de lesiones elementales ya vista en Dermatología, aunque aplicada aquí a lesiones traumáticas en vez de dermatológicas), el mecanismo probable, y las consecuencias funcionales esperadas.',
        'Esta exigencia de precisión descriptiva retoma directamente la importancia ya vista sobre la documentación meticulosa en contextos con valor legal establecida en el primer tema de este bloque: una descripción vaga o imprecisa de una lesión ("golpe en la cara") tiene mucho menor valor legal que una descripción específica que detalla localización exacta, dimensiones, y características morfológicas de la lesión documentada.'
      ]
    },
    {
      t:'La distinción entre lesión leve y grave',
      p:[
        'La *lesión leve y grave* se distinguen mediante criterios específicos relacionados con el compromiso funcional, el riesgo vital generado, y las secuelas esperadas -una lesión leve típicamente no compromete la función de un órgano ni genera un riesgo significativo para la vida, mientras una lesión grave sí genera alguno de estos compromisos, una distinción con consecuencias legales directamente proporcionales a la severidad del daño causado.',
        'Reconocer esta distinción retoma un principio general ya visto repetidamente en este pensum sobre gradar la severidad de un hallazgo, no limitarse a constatar su presencia: de la misma forma que otras materias de este pensum clasifican la severidad de una condición para determinar su manejo clínico apropiado, la medicina legal clasifica la severidad de una lesión para determinar su consecuencia legal apropiada, un paralelismo entre gradación clínica y gradación legal que ilustra cómo un mismo principio de razonamiento se aplica en contextos distintos.'
      ]
    },
    {
      t:'Los días de incapacidad médico-legal como medida cuantificable',
      p:[
        'Los *días de incapacidad médico-legal* son una estimación del tiempo que una persona requiere para recuperarse funcionalmente de una lesión específica, una medida cuantificable que traduce la gravedad clínica de una lesión a un valor numérico con consecuencias legales directas, ya que a mayor número de días de incapacidad estimados, generalmente mayor es la consecuencia legal asociada a quien causó la lesión.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre traducir hallazgos clínicos a valores cuantificables cuando esto aporta precisión adicional: estimar los días de incapacidad exige un juicio clínico fundamentado en el conocimiento médico sobre los tiempos habituales de recuperación de distintos tipos de lesiones, no una estimación arbitraria, dado el peso legal directo que este número específico tiene sobre el desenlace del caso.'
      ],
      foco:[
        '*Consideración clínica*: la clasificación médico-legal de una lesión (leve o grave) y la estimación de días de incapacidad deben fundamentarse en criterios clínicos objetivos de compromiso funcional y riesgo vital, no en una impresión general de la lesión.'
      ]
    }
  ],
  ref:'Guía de Medicina Legal y Forense, cap. 7.'
},

'agresion-sexual-abordaje-medico-legal': {
  tema:'Agresión sexual: abordaje médico-legal',
  bloque:'Medicina Forense', programa:'unirm', cuatri:12, min:14,
  idea:'Este tema retoma directamente el abordaje de la sobreviviente de violencia ya visto en Ginecología II, ahora enfocado específicamente en las consideraciones médico-legales que deben combinarse cuidadosamente con la atención médica y emocional apropiada de una persona sobreviviente de agresión sexual.',
  claves:['examen médico-legal de agresión sexual','cadena de custodia en agresión sexual','kit de evidencia forense'],
  sigue:'cadena-custodia-prueba-pericial',
  secciones:[
    {
      t:'El examen médico-legal de agresión sexual: doble propósito',
      p:[
        'El *examen médico-legal de agresión sexual* cumple un doble propósito que debe equilibrarse cuidadosamente: la atención médica inmediata de la persona sobreviviente (evaluación y tratamiento de lesiones, profilaxis contra infecciones de transmisión sexual, anticoncepción de emergencia cuando corresponde) y, simultáneamente, la recolección meticulosa de evidencia con valor legal para un eventual proceso judicial.',
        'Este doble propósito exige que el examen se realice con la misma sensibilidad y comunicación empática ya vista en el abordaje de la sobreviviente de violencia de Ginecología II, pero añadiendo ahora una capa de rigor técnico específico en la recolección de evidencia -retomando la importancia ya vista sobre combinar competencia técnica con sensibilidad humana, particularmente crítico en esta situación donde ambas dimensiones deben coexistir sin que ninguna comprometa a la otra.'
      ]
    },
    {
      t:'La cadena de custodia en agresión sexual como garantía de validez legal',
      p:[
        'La *cadena de custodia en agresión sexual* es el registro documentado y continuo de quién ha tenido posesión de cada muestra de evidencia recolectada, desde el momento de su obtención hasta su eventual presentación en un proceso judicial -cualquier interrupción o vacío en esta cadena documentada puede invalidar la evidencia recolectada, sin importar qué tan bien se haya obtenido inicialmente.',
        'Esta exigencia de continuidad documentada retoma directamente la importancia ya vista sobre la documentación meticulosa establecida desde el primer tema de este bloque, llevada aquí a su expresión más estricta: no basta con recolectar evidencia correctamente, cada paso posterior de su manejo debe documentarse sin ninguna interrupción, ya que el valor legal de la evidencia depende tanto de su obtención apropiada como de la integridad demostrable de su cadena de custodia posterior.'
      ]
    },
    {
      t:'El kit de evidencia forense y su uso estandarizado',
      p:[
        'El *kit de evidencia forense* es un conjunto estandarizado de materiales e instrucciones diseñado específicamente para la recolección sistemática de evidencia en casos de agresión sexual, cuya estandarización retoma la importancia ya vista repetidamente en este pensum sobre protocolos sistemáticos que reducen la variabilidad y el error humano en procedimientos críticos, particularmente relevante cuando el profesional que realiza el examen puede no ser un especialista forense dedicado.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: la agresión sexual ilustra de forma particularmente clara cómo la medicina legal exige combinar simultáneamente la atención humana de un paciente vulnerable con el rigor técnico de la documentación y recolección de evidencia con valor legal, dos dimensiones que, lejos de ser contradictorias, deben ejecutarse en conjunto para servir apropiadamente tanto a la salud de la persona sobreviviente como a la posibilidad de justicia legal.'
      ],
      foco:[
        '*Consideración clínica*: cualquier interrupción o vacío en la cadena de custodia de la evidencia recolectada en un caso de agresión sexual puede invalidarla legalmente, sin importar qué tan apropiadamente se haya obtenido inicialmente.'
      ]
    }
  ],
  ref:'Guía de Medicina Legal y Forense, cap. 11.'
},

'cadena-custodia-prueba-pericial': {
  tema:'Cadena de custodia y prueba pericial',
  bloque:'Medicina Forense', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema generaliza el concepto de cadena de custodia ya introducido en el contexto específico de agresión sexual, aplicándolo ahora como principio general a cualquier tipo de evidencia médico-legal, junto con el concepto complementario de prueba pericial.',
  claves:['cadena de custodia','prueba pericial','preservación de evidencia médica'],
  sigue:'autopsia-medico-legal',
  secciones:[
    {
      t:'La cadena de custodia como principio general aplicable a toda evidencia',
      p:[
        'La *cadena de custodia*, ya introducida en el contexto específico de agresión sexual del tema anterior, es en realidad un principio general aplicable a cualquier tipo de evidencia médico-legal: muestras biológicas, objetos recuperados, fotografías de lesiones, o cualquier otro elemento que pueda tener valor probatorio en un proceso judicial requiere el mismo registro documentado y continuo de su manejo desde la recolección hasta su presentación final.',
        'Reconocer que este principio se generaliza más allá del contexto específico donde se introdujo retoma un principio general ya visto repetidamente en este pensum sobre identificar principios subyacentes que trascienden el ejemplo particular donde se aprendieron por primera vez: la cadena de custodia no es una regla exclusiva de los casos de agresión sexual, sino un estándar aplicable a toda evidencia médico-legal, independientemente del tipo de caso.'
      ]
    },
    {
      t:'La prueba pericial como vehículo del conocimiento médico ante un tribunal',
      p:[
        'La *prueba pericial* es el mecanismo formal mediante el cual el conocimiento técnico especializado de un médico, ya introducido como concepto de peritaje en el primer tema de este bloque, se incorpora oficialmente como evidencia dentro de un proceso judicial, ya sea mediante un informe pericial escrito o mediante testimonio directo del médico ante el tribunal.',
        'Esta prueba pericial retoma directamente la importancia ya vista sobre la necesidad de traducir conocimiento técnico complejo a un lenguaje comprensible para una audiencia no especializada: un informe pericial bien elaborado no solo debe ser técnicamente correcto, sino estructurado de forma que un juez o jurado sin formación médica pueda comprender claramente las conclusiones y el razonamiento que las sustenta.'
      ]
    },
    {
      t:'La preservación de evidencia médica y sus condiciones específicas',
      p:[
        'La *preservación de evidencia médica* exige condiciones específicas según el tipo de muestra (temperatura, tiempo máximo antes del deterioro, contenedores apropiados), ya que una muestra biológica mal preservada puede degradarse y perder su valor probatorio incluso si la cadena de custodia documentada se mantuvo impecable en todos los demás aspectos.',
        'Este tema cierra retomando el hilo conductor de todo este bloque: la cadena de custodia, la prueba pericial y la preservación apropiada de evidencia son tres componentes interdependientes de un mismo sistema -fallar en cualquiera de ellos compromete el valor legal completo del proceso, ilustrando cómo en medicina legal, a diferencia de muchos contextos clínicos donde un error puntual puede corregirse posteriormente, ciertos errores de manejo de evidencia son irreversibles una vez cometidos.'
      ],
      foco:[
        '*Consideración clínica*: la cadena de custodia es un principio general aplicable a cualquier tipo de evidencia médico-legal, no una regla exclusiva de los casos de agresión sexual donde suele introducirse por primera vez.'
      ]
    }
  ],
  ref:'Guía de Medicina Legal y Forense, cap. 3.'
},

'autopsia-medico-legal': {
  tema:'Autopsia médico-legal',
  bloque:'Medicina Forense', programa:'unirm', cuatri:12, min:13,
  idea:'La autopsia médico-legal retoma directamente la certificación de defunción ya vista en este bloque, profundizando en el procedimiento formal que se realiza precisamente cuando existe duda o sospecha sobre la causa o circunstancias de una muerte.',
  claves:['autopsia forense','autopsia clínica versus forense','hallazgos de autopsia médico-legal'],
  sigue:'etica-responsabilidad-medica-legal',
  secciones:[
    {
      t:'La autopsia forense y su indicación específica',
      p:[
        'La *autopsia forense* es el examen post mortem realizado específicamente cuando la muerte tiene características que ameritan investigación legal -muerte violenta, sospechosa, súbita e inexplicada, o cualquier circunstancia que retoma directamente la distinción entre muerte natural y violenta ya vista en el tema de certificación de defunción de este mismo bloque- con el objetivo de determinar con precisión la causa y las circunstancias del fallecimiento.',
        'Reconocer cuándo un caso amerita autopsia forense retoma directamente la importancia ya vista sobre no certificar automáticamente una muerte como natural ante cualquier sospecha de componente violento: la decisión de solicitar una autopsia forense, con frecuencia iniciada por la sospecha del médico que certifica inicialmente el fallecimiento, es un ejemplo concreto de cómo ese principio ya establecido se traduce en una acción específica dentro del sistema médico-legal.'
      ]
    },
    {
      t:'La autopsia clínica versus forense: dos propósitos distintos',
      p:[
        'La *autopsia clínica versus forense* representan dos procedimientos con propósitos considerablemente distintos: la autopsia clínica, realizada con el consentimiento familiar, busca principalmente esclarecer la causa de muerte con fines médicos y educativos, mientras la autopsia forense, ordenada por una autoridad legal, busca establecer hallazgos con valor probatorio para un proceso judicial, siguiendo protocolos de documentación considerablemente más estrictos.',
        'Esta distinción de propósito entre ambos tipos de autopsia retoma un principio general ya visto repetidamente en este pensum sobre reconocer cómo el mismo procedimiento técnico puede aplicarse con objetivos distintos según el contexto: el conocimiento anatómico y patológico subyacente es compartido entre ambas, pero el estándar de documentación y las implicaciones legales de los hallazgos difieren considerablemente entre una autopsia clínica y una forense.'
      ]
    },
    {
      t:'Los hallazgos de autopsia médico-legal y su interpretación cuidadosa',
      p:[
        'Los *hallazgos de autopsia médico-legal* deben documentarse e interpretarse con el mismo rigor ya establecido para toda la documentación médico-legal en este bloque, distinguiendo cuidadosamente entre hallazgos que son la causa directa de la muerte, hallazgos incidentales sin relación causal, y hallazgos que podrían generar interpretaciones ambiguas si no se contextualizan apropiadamente dentro del cuadro completo del caso.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre medicina legal: la autopsia médico-legal, como culminación del proceso que puede iniciarse desde una certificación de defunción con sospecha, exige el mismo estándar de documentación meticulosa, objetiva y defendible ante escrutinio judicial que se ha visto repetidamente a lo largo de esta materia, ya que sus conclusiones con frecuencia determinan directamente el curso de una investigación legal.'
      ],
      foco:[
        '*Consideración clínica*: distinguir entre un hallazgo de autopsia que es la causa directa de la muerte y uno incidental sin relación causal es indispensable para evitar interpretaciones ambiguas que podrían distorsionar el curso de una investigación legal.'
      ]
    }
  ],
  ref:'Guía de Medicina Legal y Forense, cap. 9.'
},

'etica-responsabilidad-medica-legal': {
  tema:'Ética y responsabilidad médica legal',
  bloque:'Medicina Forense', programa:'unirm', cuatri:12, min:13,
  idea:'Este último tema cierra el bloque de Medicina Forense retomando la responsabilidad médica ya introducida al inicio de este bloque, profundizando ahora en sus implicaciones éticas y legales específicas para la práctica clínica cotidiana.',
  claves:['mala praxis médica','consentimiento informado y responsabilidad legal','secreto profesional y ley'],
  sigue:'prematurez-complicaciones',
  secciones:[
    {
      t:'La mala praxis médica y sus elementos constitutivos',
      p:[
        'La *mala praxis médica* se configura cuando la actuación de un profesional de salud se desvía del estándar de cuidado esperado para una situación clínica específica, y esa desviación causa un daño demostrable al paciente -esta definición exige tres elementos simultáneos (desviación del estándar, daño real, y relación causal entre ambos), no basta con que exista un mal resultado clínico si el manejo se ajustó al estándar de cuidado apropiado.',
        'Reconocer que un mal resultado clínico no equivale automáticamente a mala praxis retoma un principio general ya visto en distintos contextos de este pensum sobre no confundir el resultado de una intervención con la calidad de la decisión que la originó: un médico puede tomar la decisión clínica correcta según el conocimiento disponible en ese momento y aun así el paciente puede tener un mal desenlace, sin que esto constituya necesariamente mala praxis.'
      ]
    },
    {
      t:'El consentimiento informado y su responsabilidad legal asociada',
      p:[
        'El *consentimiento informado y responsabilidad legal* retoma directamente la importancia del consentimiento informado ya vista en múltiples contextos quirúrgicos de este pensum (histerectomía en Ginecología II, prostatectomía en Urología, entre otros), estableciendo ahora su relevancia como elemento central de la responsabilidad médica legal: un procedimiento realizado sin el consentimiento informado apropiado puede generar responsabilidad legal incluso si el procedimiento en sí mismo se ejecutó técnicamente de forma correcta.',
        'Esta conexión retoma un principio general ya visto repetidamente en este pensum sobre el consentimiento informado como proceso, no como un simple documento firmado: la responsabilidad legal asociada exige que el paciente haya comprendido genuinamente la información relevante (diagnóstico, opciones, riesgos, beneficios) antes de decidir, no solo que exista un papel firmado que registre formalmente ese proceso.'
      ]
    },
    {
      t:'El secreto profesional y su relación con la ley',
      p:[
        'El *secreto profesional y ley* establecen que la información compartida por un paciente en el contexto de la atención médica debe mantenerse confidencial, retomando directamente la importancia de la confidencialidad ya vista en múltiples contextos de este pensum (consulta del adolescente en Pediatría II, consulta ginecológica en Ginecología II), pero reconociendo también que existen excepciones legales específicas donde esta confidencialidad puede o debe romperse, como ciertos casos de reporte obligatorio.',
        'Este tema, y con él todo el bloque de Medicina Forense, cierra retomando el hilo conductor que ha atravesado toda esta materia: la práctica médica ocurre dentro de un marco legal y ético que impone obligaciones específicas -documentar con precisión, obtener consentimiento informado genuino, mantener la confidencialidad salvo excepciones legales reconocidas- cuyo cumplimiento no es un añadido opcional a la buena práctica clínica, sino un componente indispensable e inseparable de ella, tal como se ha ilustrado a través de cada tema específico desarrollado en este bloque.'
      ],
      foco:[
        '*Consideración clínica*: un mal resultado clínico no equivale automáticamente a mala praxis médica; la mala praxis exige demostrar una desviación del estándar de cuidado esperado, un daño real, y una relación causal entre ambos elementos.'
      ]
    }
  ],
  ref:'Guía de Medicina Legal y Forense, cap. 15.'
}

});
