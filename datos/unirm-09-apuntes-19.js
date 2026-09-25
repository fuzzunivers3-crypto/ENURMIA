/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 19)
   Reescribe SALUD Y COMUNIDAD I al estandar extenso (3 secciones,
   ~200-300 palabras por seccion, min 13-14). Sustituye el
   contenido corto de los mismos 4 temas en unirm-09-apuntes.js y
   unirm-09-apuntes-10.js (mismas claves, no se agregan temas
   nuevos). Es la ULTIMA materia de la serie: sistema-salud-
   dominicano cierra el cuatrimestre 9 y todo el pensum de UNIRMIA
   cubierto por esta serie (7mo, 8vo y 9no), sigue:null se
   mantiene correcto.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'determinantes-sociales-salud': {
  tema:'Determinantes sociales de la salud',
  bloque:'Salud y Comunidad I', programa:'unirm', cuatri:9, min:13,
  idea:'Dos personas con el mismo diagnóstico y el mismo tratamiento pueden tener desenlaces muy distintos si una tiene agua potable, transporte para llegar a sus citas y dinero para comprar el medicamento, y la otra no. Eso -lo que rodea a la enfermedad, no la enfermedad en sí- es lo que estudian los determinantes sociales.',
  claves:['determinante social','inequidad en salud','acceso a servicios de salud'],
  sigue:'salud-comunitaria-atencion-primaria',
  secciones:[
    {
      t:'Más allá del sistema de salud',
      p:[
        'Los determinantes sociales de la salud son las condiciones en las que las personas nacen, crecen, viven, trabajan y envejecen, y que influyen directamente en su estado de salud: el ingreso económico, la educación, la vivienda, el acceso a agua potable y saneamiento, las condiciones de trabajo, el entorno social y el acceso a los propios servicios de salud. La evidencia acumulada en salud pública muestra, de forma consistente, que estos factores explican una proporción mayor de la salud de una población que la atención médica por sí sola.',
        'Ejemplo trabajado: una persona con diabetes que vive en una zona sin acceso regular a alimentos frescos (lo que se llama, en la literatura, un "desierto alimentario"), sin dinero estable para comprar su insulina todos los meses, y sin transporte confiable para llegar a sus citas de control, tiene un riesgo mucho mayor de complicaciones que otra persona con el MISMO diagnóstico pero con ingresos estables, buen acceso a alimentos y transporte propio, incluso si ambas reciben, en teoría, la misma indicación médica.'
      ]
    },
    {
      t:'Inequidad, no solo diferencia',
      p:[
        'No toda diferencia en salud es una inequidad. Una inequidad en salud es una diferencia que además es evitable, injusta y sistemática: se repite de forma predecible según el grupo social al que pertenece una persona (su ingreso, su zona de residencia, su nivel educativo), y no responde solo al azar biológico.',
        'Distinguir una diferencia de una inequidad tiene una implicación práctica importante: una diferencia biológica aleatoria no exige, por sí sola, una intervención de política pública, mientras que una inequidad sistemática sí -porque su patrón predecible según el grupo social sugiere una causa estructural corregible, no solo variabilidad natural entre individuos.'
      ]
    },
    {
      t:'Preguntar por las condiciones, no darlas por sentadas',
      p:[
        'Reconocer un determinante social relevante en un paciente concreto cambia, en la práctica, cómo se plantea un plan de tratamiento: de poco sirve indicar un medicamento costoso a diario si la persona no tiene forma sostenida de pagarlo, y un buen clínico -tanto como uno que trabaja en salud comunitaria- tiene que preguntar por esas condiciones, no darlas por sentadas.',
        'Esta pregunta activa por las condiciones de vida del paciente no es un desvío de la práctica clínica; es parte integral de diseñar un plan de tratamiento realista, que tenga alguna posibilidad real de cumplirse fuera del consultorio, en la vida cotidiana concreta de esa persona.'
      ],
      foco:[
        '*Consideración clínica*: preguntar de rutina "¿tienes forma de conseguir este medicamento todos los meses?" o "¿tienes cómo llegar a tu próxima cita?" no es salirse del rol médico: es parte de un plan de tratamiento realista.'
      ]
    }
  ],
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.'
},

'salud-comunitaria-atencion-primaria': {
  tema:'Salud comunitaria y atención primaria',
  bloque:'Salud y Comunidad I', programa:'unirm', cuatri:9, min:13,
  idea:'La salud comunitaria invierte la lógica habitual de la consulta médica: en vez de esperar a que la persona enferma llegue al consultorio, sale a buscar a la comunidad entera, sana y enferma por igual, en el lugar donde vive.',
  claves:['atención primaria de salud','promotor comunitario','diagnóstico comunitario'],
  sigue:'epidemiologia-comunitaria-aplicada',
  secciones:[
    {
      t:'La atención primaria como estrategia, no solo como nivel de atención',
      p:[
        'La atención primaria de salud, ya introducida en Medicina Preventiva como el nivel del sistema donde se implementan los programas preventivos, es también una estrategia más amplia: busca resolver la mayoría de los problemas de salud de una comunidad en el nivel más cercano y accesible posible, integrando prevención, promoción y tratamiento básico, antes de necesitar niveles de atención más especializados y costosos.',
        'Esta doble naturaleza -nivel del sistema y estrategia general- explica por qué la atención primaria aparece repetidamente a lo largo del pensum: no es solo el lugar físico donde ocurre la primera consulta, sino una forma completa de organizar la atención de salud alrededor de las necesidades reales de la comunidad.'
      ]
    },
    {
      t:'El promotor comunitario: puente entre la comunidad y el sistema',
      p:[
        'El promotor comunitario de salud es, con frecuencia, un miembro de la propia comunidad, entrenado para realizar actividades básicas de promoción y detección temprana, y para servir de puente entre la comunidad y el sistema de salud formal -su ventaja central es la confianza y el conocimiento local que ya tiene, algo que un profesional externo a la comunidad tarda mucho más en construir.',
        'Esta ventaja no es menor: un promotor que ya conoce a las familias, habla el mismo idioma cultural de la comunidad y comparte su contexto de vida puede detectar problemas y generar confianza de una forma que ningún profesional externo, por más capacitado que esté técnicamente, lograría en el mismo tiempo.'
      ]
    },
    {
      t:'El diagnóstico comunitario: la anamnesis aplicada a una población',
      p:[
        'El diagnóstico comunitario aplica la misma lógica de la historia clínica individual (ya vista en Semiología Clínica), pero a una comunidad entera como "paciente": identifica sus principales problemas de salud, sus recursos disponibles y sus determinantes sociales (ya vistos en el tema anterior de este bloque), como paso previo a diseñar cualquier intervención de salud comunitaria bien dirigida.',
        'Un diagnóstico comunitario mal hecho -basado en suposiciones externas, sin involucrar a la propia comunidad- lleva con frecuencia a programas de salud que no responden a las necesidades reales percibidas por esa comunidad, y que por eso tienen baja participación y bajo impacto, sin importar qué tan bien intencionados o técnicamente sólidos parezcan en el diseño.'
      ],
      foco:[
        '*Consideración clínica*: un diagnóstico comunitario mal hecho, sin involucrar a la propia comunidad, lleva con frecuencia a programas de salud que no responden a las necesidades reales, con baja participación y bajo impacto.'
      ]
    }
  ],
  ref:'OPS, Renovación de la Atención Primaria de Salud.'
},

'epidemiologia-comunitaria-aplicada': {
  tema:'Epidemiología comunitaria aplicada',
  bloque:'Salud y Comunidad I', programa:'unirm', cuatri:9, min:13,
  idea:'Este tema aplica, a la escala de una sola comunidad, todo lo ya visto en el bloque completo de Epidemiología de 8vo: los mismos conceptos de medidas de frecuencia y vigilancia, pero ajustados a un tamaño de población mucho más pequeño y cercano.',
  claves:['perfil epidemiológico local','vigilancia comunitaria','indicador de salud'],
  sigue:'sistema-salud-dominicano',
  secciones:[
    {
      t:'Adaptar la epidemiología a la escala local',
      p:[
        'El perfil epidemiológico local describe, para una comunidad específica, qué enfermedades son más frecuentes, qué grupos de edad están más afectados, y qué factores de riesgo predominan en ese contexto particular -retomando directamente las medidas de frecuencia (prevalencia, incidencia) ya vistas en Epidemiología, pero calculadas y aplicadas a la escala de esa comunidad concreta, en vez de a una población nacional entera.',
        'Esta escala local tiene una ventaja práctica concreta: un perfil epidemiológico calculado para toda una nación puede ocultar variaciones importantes entre comunidades específicas, mientras que el perfil local permite dirigir recursos e intervenciones hacia los problemas reales de esa comunidad en particular, que pueden ser muy distintos del promedio nacional.'
      ]
    },
    {
      t:'Indicadores de salud comunitarios',
      p:[
        'Un indicador de salud comunitario (como la cobertura de vacunación local, o la proporción de embarazos con control prenatal completo, ya visto en Medicina Preventiva) permite medir, de forma concreta y periódica, si las intervenciones de salud en esa comunidad están teniendo el efecto esperado, sirviendo como retroalimentación objetiva para ajustar los programas en marcha.',
        'Sin estos indicadores medidos de forma sistemática, cualquier intervención de salud comunitaria funcionaría "a ciegas", sin poder distinguir si realmente está generando el impacto esperado o si necesita ajustarse -la medición periódica es lo que convierte una intervención en un programa evaluable y mejorable con el tiempo.'
      ]
    },
    {
      t:'La vigilancia a escala comunitaria',
      p:[
        'La vigilancia comunitaria aplica la misma lógica de la vigilancia epidemiológica ya vista en Epidemiología (recolección continua de datos para detectar anomalías a tiempo), pero con un actor adicional clave: los propios promotores comunitarios y trabajadores de salud local, que por su cercanía y conocimiento del terreno, con frecuencia detectan un aumento inusual de casos (un posible brote, ya visto en Epidemiología) antes de que ese aumento sea evidente en las estadísticas oficiales agregadas a nivel nacional, que tardan más en consolidarse y reportarse.',
        'Esta detección temprana a nivel comunitario puede marcar una diferencia real en el control de un brote: cuanto antes se detecte el aumento inusual de casos, más rápido se puede intervenir, antes de que el problema se propague más allá de esa comunidad inicial.'
      ],
      foco:[
        'Este tema conecta de forma directa el bloque completo de Epidemiología de 8vo con la práctica comunitaria: los mismos conceptos -incidencia, prevalencia, vigilancia, brote- se aplican aquí a una escala más pequeña y con actores distintos, pero con la misma lógica de fondo.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 16.'
},

'sistema-salud-dominicano': {
  tema:'Sistema de salud dominicano',
  bloque:'Salud y Comunidad I', programa:'unirm', cuatri:9, min:14,
  idea:'Este último tema del bloque -y de todo el cuatrimestre 9- cierra aterrizando toda la teoría de niveles de prevención, atención primaria y epidemiología comunitaria en la organización concreta del sistema de salud dentro del cual, en la práctica, se ejercerá la profesión.',
  claves:['niveles de atención','sistema nacional de salud','seguro familiar de salud'],
  sigue:null,
  secciones:[
    {
      t:'Niveles de atención: la puerta de entrada y las referencias',
      p:[
        'El sistema nacional de salud organiza la atención en niveles de atención, retomando directamente la lógica ya vista en el tema de programas nacionales de salud preventiva: un primer nivel (atención primaria, la puerta de entrada habitual, resolviendo la mayoría de los problemas de salud comunes), un segundo nivel (con especialidades básicas y capacidad de hospitalización general), y un tercer nivel (centros de alta complejidad, para casos que requieren tecnología o subespecialidades no disponibles en los niveles anteriores).',
        'El sistema funciona mejor cuando los pacientes se mueven entre niveles a través de un sistema de referencia y contrarreferencia ordenado, en vez de acudir directamente a un nivel de alta complejidad para problemas que el primer nivel podría resolver -acudir directamente a un tercer nivel para un problema simple no solo satura recursos escasos, sino que suele significar una atención más costosa y menos eficiente para ese mismo problema.'
      ]
    },
    {
      t:'El financiamiento: el Seguro Familiar de Salud',
      p:[
        'El seguro familiar de salud es el mecanismo de financiamiento y aseguramiento que organiza cómo se paga la atención dentro del sistema, buscando dar cobertura amplia a la población, con distintos regímenes según la situación laboral y económica de cada persona (contributivo para quienes tienen empleo formal, subsidiado para quienes no tienen capacidad de pago, entre otras modalidades según el diseño específico del sistema).',
        'Este diseño de regímenes distintos según la capacidad de pago busca equilibrar dos objetivos que, de otra forma, entrarían en tensión: mantener la sostenibilidad financiera del sistema (que necesita ingresos de quienes pueden contribuir) y garantizar el acceso a quienes, sin ese mecanismo subsidiado, quedarían completamente excluidos de la atención formal.'
      ]
    },
    {
      t:'El cierre de todo el pensum: de la teoría a la práctica concreta',
      p:[
        'Entender la estructura del sistema de salud real donde se va a ejercer -sus niveles, su financiamiento, sus puertas de entrada- es lo que permite que toda la teoría de prevención, semiología, fisiopatología, farmacología y ética estudiada a lo largo de la carrera se traduzca, en la práctica, en atención efectiva dentro de ese sistema concreto, no en un vacío teórico desconectado de cómo realmente funciona la atención médica en el país.',
        'Este último tema, precisamente por cerrar tanto el bloque de Salud y Comunidad I como el cuatrimestre 9 completo, cumple una función distinta a la de los demás: no introduce un concepto nuevo aislado, sino que conecta explícitamente el conocimiento clínico y comunitario ya acumulado con el marco institucional concreto en el que ese conocimiento se aplicará en la práctica profesional real.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Salud y Comunidad I, y con él, todo el cuatrimestre 9: entender la estructura del sistema de salud real donde se va a ejercer es lo que permite que toda la teoría estudiada se traduzca, en la práctica, en atención efectiva.'
      ]
    }
  ],
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.'
}

});
