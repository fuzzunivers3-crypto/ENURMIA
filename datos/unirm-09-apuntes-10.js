/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 10)
   Termina de cubrir SALUD Y COMUNIDAD I por completo. Con esto,
   CUATRIMESTRE 9 QUEDA COMPLETO — las 294 temas de las 24
   materias de UNIRMIA (7mo, 8vo y 9no) tienen apunte.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'salud-comunitaria-atencion-primaria': {
  tema:'Salud comunitaria y atención primaria',
  bloque:'Salud y Comunidad I', programa:'unirm', cuatri:9, min:7,
  idea:'La salud comunitaria invierte la lógica habitual de la consulta médica: en vez de esperar a que la persona enferma llegue al consultorio, sale a buscar a la comunidad entera, sana y enferma por igual, en el lugar donde vive.',
  claves:['atención primaria de salud','promotor comunitario','diagnóstico comunitario'],
  sigue:'epidemiologia-comunitaria-aplicada',
  secciones:[
    {
      t:'La atención primaria como estrategia, no solo como nivel de atención',
      p:[
        'La *atención primaria de salud*, ya introducida en Medicina Preventiva como el nivel del sistema donde se implementan los programas preventivos, es también una estrategia más amplia: busca resolver la mayoría de los problemas de salud de una comunidad en el nivel más cercano y accesible posible, integrando prevención, promoción y tratamiento básico, antes de necesitar niveles de atención más especializados y costosos.'
      ]
    },
    {
      t:'El promotor comunitario y el diagnóstico comunitario',
      p:[
        'El *promotor comunitario* de salud es, con frecuencia, un miembro de la propia comunidad, entrenado para realizar actividades básicas de promoción y detección temprana, y para servir de puente entre la comunidad y el sistema de salud formal —su ventaja central es la confianza y el conocimiento local que ya tiene, algo que un profesional externo a la comunidad tarda mucho más en construir.',
        'El *diagnóstico comunitario* aplica la misma lógica de la historia clínica individual (ya vista en Semiología Clínica), pero a una comunidad entera como "paciente": identifica sus principales problemas de salud, sus recursos disponibles y sus determinantes sociales (ya vistos en el tema anterior de este bloque), como paso previo a diseñar cualquier intervención de salud comunitaria bien dirigida.'
      ],
      foco:[
        'Consideración práctica: un diagnóstico comunitario mal hecho (basado en suposiciones externas, sin involucrar a la propia comunidad) lleva con frecuencia a programas de salud que no responden a las necesidades reales percibidas por esa comunidad, y que por eso tienen baja participación y bajo impacto.'
      ]
    }
  ],
  ref:'OPS, Renovación de la Atención Primaria de Salud.'
},

'epidemiologia-comunitaria-aplicada': {
  tema:'Epidemiología comunitaria aplicada',
  bloque:'Salud y Comunidad I', programa:'unirm', cuatri:9, min:7,
  idea:'Este tema aplica, a la escala de una sola comunidad, todo lo ya visto en el bloque completo de Epidemiología de 8vo: los mismos conceptos de medidas de frecuencia y vigilancia, pero ajustados a un tamaño de población mucho más pequeño y cercano.',
  claves:['perfil epidemiológico local','vigilancia comunitaria','indicador de salud'],
  sigue:'sistema-salud-dominicano',
  secciones:[
    {
      t:'Adaptar la epidemiología a la escala local',
      p:[
        'El *perfil epidemiológico local* describe, para una comunidad específica, qué enfermedades son más frecuentes, qué grupos de edad están más afectados, y qué factores de riesgo predominan en ese contexto particular —retomando directamente las medidas de frecuencia (prevalencia, incidencia) ya vistas en Epidemiología, pero calculadas y aplicadas a la escala de esa comunidad concreta, en vez de a una población nacional entera.',
        'Un *indicador de salud* comunitario (como la cobertura de vacunación local, o la proporción de embarazos con control prenatal completo, ya visto en Medicina Preventiva) permite medir, de forma concreta y periódica, si las intervenciones de salud en esa comunidad están teniendo el efecto esperado.'
      ]
    },
    {
      t:'La vigilancia a escala comunitaria',
      p:[
        'La *vigilancia comunitaria* aplica la misma lógica de la vigilancia epidemiológica ya vista en Epidemiología (recolección continua de datos para detectar anomalías a tiempo), pero con un actor adicional clave: los propios promotores comunitarios y trabajadores de salud local, que por su cercanía y conocimiento del terreno, con frecuencia detectan un aumento inusual de casos (un posible brote, ya visto en Epidemiología) antes de que ese aumento sea evidente en las estadísticas oficiales agregadas a nivel nacional, que tardan más en consolidarse y reportarse.'
      ],
      foco:[
        'Este tema conecta de forma directa el bloque completo de Epidemiología de 8vo con la práctica comunitaria: los mismos conceptos —incidencia, prevalencia, vigilancia, brote— se aplican aquí a una escala más pequeña y con actores distintos, pero con la misma lógica de fondo.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 16.'
},

'sistema-salud-dominicano': {
  tema:'Sistema de salud dominicano',
  bloque:'Salud y Comunidad I', programa:'unirm', cuatri:9, min:6,
  idea:'Este último tema del bloque —y de todo el cuatrimestre 9— cierra aterrizando toda la teoría de niveles de prevención, atención primaria y epidemiología comunitaria en la organización concreta del sistema de salud dentro del cual, en la práctica, se ejercerá la profesión.',
  claves:['niveles de atención','sistema nacional de salud','seguro familiar de salud'],
  sigue:null,
  secciones:[
    {
      t:'Niveles de atención: la puerta de entrada y las referencias',
      p:[
        'El *sistema nacional de salud* organiza la atención en *niveles de atención*, retomando directamente la lógica ya vista en el tema de programas nacionales de salud preventiva: un primer nivel (atención primaria, la puerta de entrada habitual, resolviendo la mayoría de los problemas de salud comunes), un segundo nivel (con especialidades básicas y capacidad de hospitalización general), y un tercer nivel (centros de alta complejidad, para casos que requieren tecnología o subespecialidades no disponibles en los niveles anteriores). El sistema funciona mejor cuando los pacientes se mueven entre niveles a través de un sistema de referencia y contrarreferencia ordenado, en vez de acudir directamente a un nivel de alta complejidad para problemas que el primer nivel podría resolver.'
      ]
    },
    {
      t:'El financiamiento: el Seguro Familiar de Salud',
      p:[
        'El *seguro familiar de salud* es el mecanismo de financiamiento y aseguramiento que organiza cómo se paga la atención dentro del sistema, buscando dar cobertura amplia a la población, con distintos regímenes según la situación laboral y económica de cada persona (contributivo para quienes tienen empleo formal, subsidiado para quienes no tienen capacidad de pago, entre otras modalidades según el diseño específico del sistema).'
      ],
      foco:[
        'Este tema cierra el bloque completo de Salud y Comunidad I, y con él, todo el cuatrimestre 9: entender la estructura del sistema de salud real donde se va a ejercer —sus niveles, su financiamiento, sus puertas de entrada— es lo que permite que toda la teoría de prevención, semiología, fisiopatología, farmacología y ética estudiada a lo largo de la carrera se traduzca, en la práctica, en atención efectiva dentro de ese sistema concreto.'
      ]
    }
  ],
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.'
}

});
