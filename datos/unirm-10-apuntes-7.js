/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 10 (lote 7)
   Cubre SALUD Y COMUNIDAD II al estandar extenso (3 secciones,
   ~200-300 palabras por seccion, min 12-13). Septima materia del
   cuatrimestre 10 (1 credito, 4 temas). Continua Salud y
   Comunidad I de 9no, llevando el diagnostico comunitario hacia
   el diseno y la evaluacion real de programas.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== SALUD Y COMUNIDAD II ==================== */
'programas-salud-comunitaria-avanzados': {
  tema:'Programas de salud comunitaria avanzados',
  bloque:'Salud y Comunidad II', programa:'unirm', cuatri:10, min:12,
  idea:'Salud y Comunidad I enseñó a diagnosticar los problemas de una comunidad; este tema enseña el siguiente paso lógico: diseñar una intervención estructurada capaz de responder a ese diagnóstico de forma sostenida en el tiempo, no como una acción aislada.',
  claves:['diseño de programa comunitario','intervención comunitaria sostenida'],
  sigue:'participacion-comunitaria-empoderamiento',
  secciones:[
    {
      t:'Del diagnóstico a la intervención estructurada',
      p:[
        'Un *programa de salud comunitaria* es un conjunto de actividades planificadas, con objetivos explícitos, un cronograma definido y recursos asignados, diseñado para responder a un problema de salud identificado previamente mediante el diagnóstico comunitario ya visto en Salud y Comunidad I; a diferencia de una jornada de salud puntual, un programa busca sostenerse en el tiempo el suficiente como para generar un cambio medible en el problema que lo originó.',
        'Este diseño retoma directamente la lógica de la planificación estratégica ya vista en Gerencia en Salud: un programa comunitario bien diseñado no parte de "qué actividad podemos hacer", sino de "qué objetivo concreto buscamos lograr, y qué actividades son las más efectivas para lograrlo con los recursos disponibles" -la misma secuencia de anticipación y definición de objetivos medibles aplicada ahora al nivel comunitario.'
      ]
    },
    {
      t:'Componentes de un programa bien diseñado',
      p:[
        'Un programa de salud comunitaria efectivo suele incluir: un objetivo específico y medible (no "mejorar la salud de la comunidad" en abstracto, sino, por ejemplo, "reducir la prevalencia de anemia en niños menores de cinco años del sector"), una población diana claramente definida, un conjunto de actividades concretas con responsables asignados, un cronograma realista, y un mecanismo previsto desde el inicio para evaluar si el programa realmente logró su objetivo -tema que se profundiza más adelante en este bloque.',
        'La *sostenibilidad* de un programa comunitario -su capacidad de continuar funcionando más allá del entusiasmo inicial o de la presencia de un promotor externo puntual- depende en gran medida de que la propia comunidad participe activamente en su diseño y ejecución, no solo como receptora pasiva de una intervención decidida externamente; esta idea se retoma con más profundidad en el siguiente tema.'
      ]
    },
    {
      t:'Errores frecuentes en el diseño de programas comunitarios',
      p:[
        'Un error frecuente es diseñar un programa basado en lo que el equipo de salud asume que la comunidad necesita, sin verificar esa suposición contra el diagnóstico comunitario real -retomando la importancia ya vista de los determinantes sociales y las necesidades percibidas por la propia comunidad, que no siempre coinciden exactamente con la prioridad clínica que un profesional de salud identificaría de forma aislada.',
        'Otro error común es diseñar un programa con un alcance demasiado ambicioso para los recursos reales disponibles, lo que lleva a un abandono temprano cuando la energía inicial se agota; un programa más modesto pero sostenible, con objetivos alcanzables y evaluables, tiende a generar más impacto real que uno ambicioso que colapsa a los pocos meses por falta de recursos.'
      ],
      foco:[
        '*Consideración clínica*: un médico que participa en el diseño de un programa comunitario debe verificar que responda a una necesidad real de la comunidad, no solo a una prioridad clínica asumida desde fuera, y que su alcance sea sostenible con los recursos efectivamente disponibles.'
      ]
    }
  ],
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.'
},

'participacion-comunitaria-empoderamiento': {
  tema:'Participación comunitaria y empoderamiento',
  bloque:'Salud y Comunidad II', programa:'unirm', cuatri:10, min:12,
  idea:'Un programa impuesto desde fuera, sin participación real de la comunidad, tiende a fracasar cuando el promotor externo se retira; la participación comunitaria busca precisamente evitar esa dependencia.',
  claves:['participación comunitaria','empoderamiento en salud'],
  sigue:'evaluacion-programas-salud-comunitaria',
  secciones:[
    {
      t:'Qué es la participación comunitaria real',
      p:[
        'La *participación comunitaria* en salud es el proceso mediante el cual los miembros de una comunidad toman parte activa en identificar sus propios problemas de salud, diseñar las intervenciones para abordarlos, y evaluar si esas intervenciones realmente funcionaron -un rol muy distinto al de receptor pasivo de una intervención decidida y ejecutada completamente por agentes externos.',
        'Existen distintos niveles de participación, desde la más superficial (informar a la comunidad sobre una decisión ya tomada) hasta la más profunda (la comunidad participa en cada etapa: diagnóstico, diseño, ejecución y evaluación); un programa que solo informa, sin involucrar realmente a la comunidad en las decisiones, tiende a generar mucho menos compromiso sostenido que uno con participación genuina en cada etapa.'
      ]
    },
    {
      t:'Empoderamiento: de receptor a agente de cambio',
      p:[
        'El *empoderamiento en salud* es el proceso mediante el cual una comunidad desarrolla la capacidad, el conocimiento y la confianza necesarios para identificar y resolver sus propios problemas de salud, cada vez con menos dependencia de un agente externo -un objetivo de largo plazo que va más allá de la ejecución exitosa de un programa puntual.',
        'Una comunidad empoderada no solo participa en un programa diseñado por otros: desarrolla la capacidad de identificar nuevos problemas de salud por sí misma en el futuro, de organizarse para exigir los recursos necesarios, y de sostener soluciones sin depender indefinidamente de la presencia de un equipo de salud externo -retomando la lógica de sostenibilidad ya vista en el tema anterior.'
      ]
    },
    {
      t:'El rol del profesional de salud como facilitador, no protagonista',
      p:[
        'Un profesional de salud que trabaja con una comunidad hacia el empoderamiento cumple un rol de facilitador -aporta conocimiento técnico, organiza el proceso, conecta a la comunidad con recursos- pero evita convertirse en el protagonista indispensable del proceso, precisamente para no generar la misma dependencia que la participación comunitaria busca evitar.',
        'Este matiz retoma directamente la lógica ya vista sobre el liderazgo en Gerencia en Salud: así como un buen líder directivo busca desarrollar la capacidad de su equipo en vez de concentrar todas las decisiones en sí mismo, un buen facilitador comunitario busca desarrollar la capacidad de la comunidad en vez de concentrar en sí mismo el conocimiento y la ejecución del programa.'
      ],
      foco:[
        '*Consideración clínica*: un médico que promueve un programa comunitario debe evaluar constantemente si está facilitando el desarrollo de capacidad real en la comunidad, o si, sin darse cuenta, está generando una dependencia de su propia presencia que comprometerá la sostenibilidad del programa cuando él ya no esté.'
      ]
    }
  ],
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.'
},

'evaluacion-programas-salud-comunitaria': {
  tema:'Evaluación de programas de salud comunitaria',
  bloque:'Salud y Comunidad II', programa:'unirm', cuatri:10, min:13,
  idea:'Un programa comunitario sin evaluación no permite saber si realmente funcionó, retomando directamente la lógica ya vista de los indicadores de gestión hospitalaria: lo que no se mide, no se puede saber si mejoró.',
  claves:['evaluación de impacto comunitario','indicador de proceso y de resultado'],
  sigue:'salud-comunitaria-poblaciones-vulnerables',
  secciones:[
    {
      t:'Por qué evaluar un programa comunitario',
      p:[
        'La *evaluación de un programa comunitario* permite responder una pregunta que, sin datos objetivos, quedaría respondida solo por impresión subjetiva: ¿el programa realmente logró el objetivo para el que fue diseñado? -retomando directamente la lógica ya vista sobre indicadores de gestión hospitalaria: sin medición objetiva, las decisiones sobre continuar, ajustar o descontinuar un programa terminan basándose en percepciones, no en evidencia.',
        'Un programa que parece exitoso desde la percepción de quienes lo ejecutan -alta asistencia a las actividades, buena recepción de la comunidad- puede, sin embargo, no haber logrado ningún cambio medible en el problema de salud original; la evaluación formal es la única forma confiable de distinguir un programa que genera actividad de uno que genera impacto real.'
      ]
    },
    {
      t:'Indicadores de proceso y de resultado',
      p:[
        'Los *indicadores de proceso* miden si las actividades planificadas del programa efectivamente se ejecutaron como se diseñaron (número de charlas realizadas, número de familias visitadas, porcentaje de la población diana alcanzada), mientras que los *indicadores de resultado* miden si esas actividades generaron el cambio esperado en el problema de salud original (por ejemplo, si la prevalencia de anemia infantil efectivamente bajó tras el programa).',
        'Ambos tipos de indicador son necesarios y se complementan: un programa puede tener excelentes indicadores de proceso -todas las actividades se ejecutaron según lo planificado- pero indicadores de resultado decepcionantes, lo que señala que las actividades elegidas no eran las más efectivas para lograr el objetivo, más que un problema de ejecución.'
      ]
    },
    {
      t:'Evaluar desde el diseño, no al final',
      p:[
        'Un error frecuente es diseñar el mecanismo de evaluación solo al final del programa, cuando ya es tarde para recolectar datos de línea base con los cuales comparar los resultados; la evaluación efectiva se planifica desde el diseño inicial del programa, definiendo qué indicadores se medirán, con qué frecuencia, y contra qué valor inicial se compararán los resultados obtenidos.',
        'Los resultados de la evaluación, retomando el ciclo gerencial de planificar-controlar ya visto en Gerencia en Salud, deben retroalimentar el ajuste del programa o de futuros programas similares -una evaluación que se archiva sin generar ningún ajuste real pierde gran parte de su valor práctico, sin importar cuán rigurosa haya sido su metodología.'
      ],
      foco:[
        '*Consideración clínica*: un médico que participa en un programa comunitario debe insistir en definir indicadores de proceso y de resultado desde el diseño inicial, con datos de línea base, para poder evaluar honestamente si el programa funcionó y no solo si generó actividad.'
      ]
    }
  ],
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.'
},

'salud-comunitaria-poblaciones-vulnerables': {
  tema:'Salud comunitaria en poblaciones vulnerables',
  bloque:'Salud y Comunidad II', programa:'unirm', cuatri:10, min:12,
  idea:'Un programa comunitario diseñado con el "promedio" de una comunidad en mente puede, sin proponérselo, excluir precisamente a los subgrupos con mayor necesidad, si no incorpora una mirada específica hacia la vulnerabilidad.',
  claves:['población vulnerable','equidad en salud comunitaria'],
  sigue:'estructura-funcionamiento-hospital',
  secciones:[
    {
      t:'Qué hace a una población vulnerable en salud comunitaria',
      p:[
        'Una *población vulnerable*, en el contexto de la salud comunitaria, es un subgrupo dentro de la comunidad que enfrenta un riesgo desproporcionadamente mayor de problemas de salud, o mayores barreras de acceso a los servicios existentes, debido a una combinación de determinantes sociales adversos -pobreza extrema, aislamiento geográfico, discapacidad, edad avanzada, pertenencia a un grupo étnico marginado, entre otros ya vistos en el bloque de determinantes sociales.',
        'Estos subgrupos con frecuencia quedan invisibles en un diagnóstico comunitario que solo reporta promedios generales de la comunidad: una comunidad puede tener indicadores de salud aceptables "en promedio" mientras un subgrupo específico dentro de ella enfrenta una situación considerablemente peor, oculta precisamente por ese promedio general.'
      ]
    },
    {
      t:'Equidad, no solo igualdad, en el diseño de programas',
      p:[
        'La *equidad en salud comunitaria* implica que un programa no debe simplemente ofrecer el mismo servicio a toda la comunidad por igual (igualdad), sino ajustar la intervención según la necesidad diferenciada de cada subgrupo, dando más recursos o adaptaciones específicas a quienes enfrentan mayores barreras (equidad) -un principio que retoma directamente la lógica ya vista sobre determinantes sociales de la salud: tratar igual a quienes parten de condiciones desiguales perpetúa, en vez de reducir, la brecha existente.',
        'En la práctica, esto significa que un programa comunitario bien diseñado identifica de forma explícita a los subgrupos vulnerables dentro de la comunidad desde la etapa de diagnóstico, y diseña estrategias específicas para alcanzarlos -por ejemplo, visitas domiciliarias para quienes no pueden desplazarse, o materiales adaptados para quienes tienen barreras de alfabetización- en vez de asumir que una estrategia única funcionará igual de bien para toda la comunidad.'
      ]
    },
    {
      t:'El riesgo de un programa que profundiza la brecha sin proponérselo',
      p:[
        'Un programa comunitario que exige, por ejemplo, desplazarse a un punto de encuentro central en un horario fijo, puede sin proponérselo excluir precisamente a quienes tienen menor movilidad o menor flexibilidad horaria -con frecuencia, los mismos subgrupos más vulnerables que más se beneficiarían del programa- mientras es aprovechado principalmente por quienes ya cuentan con más recursos y flexibilidad para participar.',
        'Este cierre conecta con el bloque completo: un programa de salud comunitaria bien diseñado (primer tema), con participación genuina de todos los subgrupos, no solo de los más visibles o accesibles (segundo tema), y evaluado con indicadores que reporten resultados desagregados por subgrupo, no solo promedios generales (tercer tema), es la forma más efectiva de asegurar que el programa efectivamente alcanza a quienes más lo necesitan.'
      ],
      foco:[
        '*Consideración clínica*: un médico que diseña o participa en un programa comunitario debe preguntarse explícitamente quién dentro de la comunidad podría quedar excluido por el diseño elegido, y ajustar la estrategia para alcanzar específicamente a los subgrupos más vulnerables, no solo a quienes participan con mayor facilidad.'
      ]
    }
  ],
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.'
}

});
