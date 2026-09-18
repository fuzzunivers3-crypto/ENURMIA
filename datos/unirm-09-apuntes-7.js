/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 7)
   Termina de cubrir MEDICINA PREVENTIVA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'inmunizaciones-esquema-vacunacion': {
  tema:'Inmunizaciones y esquema de vacunación',
  bloque:'Medicina Preventiva', programa:'unirm', cuatri:9, min:7,
  idea:'Un esquema de vacunación no es una lista arbitraria de fechas: cada dosis y cada intervalo responde a cuándo el sistema inmunitario del niño está listo para responder bien, y a cuánto dura la protección de cada dosis previa.',
  claves:['esquema de vacunación','inmunidad de rebaño','vacuna viva atenuada','cold chain'],
  sigue:'tamizaje-deteccion-temprana',
  secciones:[
    {
      t:'El esquema: por qué varias dosis y por qué ese orden',
      p:[
        'El *esquema de vacunación*, ya introducido en Inmunología, se organiza cuidando dos cosas: la edad mínima a la que el sistema inmunitario del niño responde bien a cada vacuna (algunas necesitan que el sistema inmunitario esté algo más maduro), y el intervalo mínimo entre dosis para que la memoria inmunitaria (ya vista en Inmunología) se establezca correctamente. Las *vacunas vivas atenuadas* (microorganismo debilitado, pero todavía vivo) generan una respuesta inmunitaria más robusta y duradera, pero no se pueden dar en ciertos pacientes inmunocomprometidos (retomando las inmunodeficiencias ya vistas), a diferencia de las vacunas inactivadas.'
      ]
    },
    {
      t:'La cadena de frío y la inmunidad de rebaño',
      p:[
        'La *cold chain* (cadena de frío) es el sistema logístico que mantiene a las vacunas dentro de un rango de temperatura específico desde su fabricación hasta el momento de aplicarlas: muchas vacunas pierden su eficacia (o se degradan por completo) si se exponen a temperaturas fuera de ese rango, así que una vacuna administrada tras una falla en la cadena de frío puede no proteger, aunque parezca haberse aplicado con normalidad.',
        'La *inmunidad de rebaño* (o inmunidad colectiva) ocurre cuando una proporción suficientemente alta de una población está vacunada (o inmune por infección previa), dificultando tanto la circulación del agente infeccioso que incluso las personas NO vacunadas (por edad, por contraindicación médica) quedan indirectamente protegidas, porque el agente ya no encuentra suficientes huéspedes susceptibles cerca para propagarse con facilidad.'
      ],
      foco:[
        'Consideración de salud pública: la inmunidad de rebaño explica por qué la cobertura de vacunación de una comunidad entera importa, no solo la decisión individual de cada familia: proteger a quienes no pueden vacunarse depende, en parte, de que la mayoría del resto sí lo haga.'
      ]
    }
  ],
  ref:'OMS, Manual de Vacunación. Restrepo y Málaga, Promoción de la Salud.'
},

'tamizaje-deteccion-temprana': {
  tema:'Tamizaje y detección temprana',
  bloque:'Medicina Preventiva', programa:'unirm', cuatri:9, min:7,
  idea:'Este tema retoma directamente la validez de una prueba diagnóstica ya vista en Epidemiología: un buen programa de tamizaje no es simplemente "hacer la prueba a todos", es elegir bien a QUIÉN hacérsela, según el equilibrio entre sensibilidad, especificidad y prevalencia ya estudiado.',
  claves:['tamizaje','sensibilidad','especificidad','valor predictivo'],
  sigue:'prevencion-enfermedades-cronicas-no-transmisibles',
  secciones:[
    {
      t:'Qué hace que un tamizaje valga la pena',
      p:[
        'El *tamizaje* (o cribado), ya introducido en el tema de niveles de prevención como ejemplo de prevención secundaria, busca detectar una enfermedad en su fase preclínica (antes de que dé síntomas), en personas asintomáticas. Para que un programa de tamizaje tenga sentido, la enfermedad buscada debe ser suficientemente frecuente y grave, debe existir un tratamiento eficaz si se detecta temprano (detectar algo que no cambia el manejo no aporta beneficio real), y la prueba usada debe tener una *sensibilidad* razonablemente alta (para no dejar pasar muchos casos reales, ya visto en Epidemiología).'
      ]
    },
    {
      t:'A quién hacer el tamizaje: la prevalencia importa',
      p:[
        'Retomando directamente el tema de valores predictivos de Epidemiología: aplicar un tamizaje a una población de muy baja prevalencia para esa enfermedad genera muchos falsos positivos en términos relativos (bajo valor predictivo positivo), con la ansiedad y los estudios adicionales innecesarios que eso conlleva. Por eso los programas de tamizaje bien diseñados dirigen la prueba a grupos con mayor prevalencia esperada (por edad, factores de riesgo, antecedentes familiares), no a la población general indiscriminada.'
      ],
      foco:[
        'Este tema es la aplicación práctica, en salud pública, de toda la teoría sobre *sensibilidad*, *especificidad* y *valor predictivo* ya vista en Epidemiología: diseñar un buen programa de tamizaje exige entender esos conceptos, no solo elegir "la mejor prueba" sin más.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 17.'
},

'prevencion-enfermedades-cronicas-no-transmisibles': {
  tema:'Prevención de enfermedades crónicas no transmisibles',
  bloque:'Medicina Preventiva', programa:'unirm', cuatri:9, min:7,
  idea:'A diferencia de una enfermedad infecciosa, que se puede prevenir bloqueando un solo eslabón de su cadena de transmisión, una enfermedad crónica no transmisible casi siempre tiene múltiples factores de riesgo modificables actuando a la vez, y atacar solo uno rara vez basta.',
  claves:['factor de riesgo','enfermedad crónica no transmisible','estilo de vida'],
  sigue:'programas-nacionales-salud-preventiva',
  secciones:[
    {
      t:'Factores de riesgo compartidos entre varias enfermedades',
      p:[
        'Retomando la epidemiología de enfermedades no transmisibles ya vista, un *factor de riesgo* modificable (tabaquismo, sedentarismo, dieta poco saludable) rara vez se asocia con una sola enfermedad: el mismo *estilo de vida* poco saludable eleva simultáneamente el riesgo de hipertensión, diabetes tipo 2, ciertos cánceres y enfermedad cardiovascular, retomando directamente el síndrome metabólico ya visto en Fisiopatología.',
        'Esto tiene una consecuencia práctica importante para la prevención: una sola intervención (por ejemplo, promover actividad física regular) puede reducir simultáneamente el riesgo de varias enfermedades crónicas distintas, a diferencia de una vacuna, que protege contra un solo agente infeccioso específico.'
      ]
    },
    {
      t:'De lo individual a lo poblacional',
      p:[
        'La prevención de estas enfermedades opera en dos niveles: el individual (consejería médica sobre hábitos, ya vista parcialmente en el próximo tema de educación para la salud) y el poblacional (políticas públicas: impuestos a productos poco saludables, regulación de publicidad, espacios urbanos que faciliten la actividad física) —este segundo nivel suele tener mayor impacto poblacional (retomando el concepto ya visto en Epidemiología), porque no depende de que cada persona, individualmente, decida cambiar su comportamiento.'
      ],
      foco:[
        'Consideración práctica: a diferencia de una enfermedad infecciosa con una causa única identificable, prevenir una enfermedad crónica no transmisible exige actuar sobre varios factores de riesgo a la vez, y sostenidamente en el tiempo, no con una sola intervención puntual.'
      ]
    }
  ],
  ref:'OMS, Informe sobre enfermedades no transmisibles.'
},

'programas-nacionales-salud-preventiva': {
  tema:'Programas nacionales de salud preventiva',
  bloque:'Medicina Preventiva', programa:'unirm', cuatri:9, min:6,
  idea:'Un programa nacional de salud preventiva organiza, a gran escala y de forma sistemática, intervenciones que ya se vieron de forma individual en este bloque (vacunación, tamizaje), asegurando que lleguen de forma constante a toda la población, no solo a quien busca atención por su cuenta.',
  claves:['programa de salud','atención primaria','control prenatal','tamizaje neonatal'],
  sigue:'educacion-salud',
  secciones:[
    {
      t:'Programas que llevan la prevención a toda la población',
      p:[
        'Un *programa de salud* nacional organiza, de forma sistemática y con cobertura amplia, intervenciones preventivas específicas: el esquema de vacunación ya visto, el *control prenatal* (seguimiento sistemático del embarazo, buscando detectar y manejar complicaciones tempranamente, retomando la importancia del ácido fólico preconcepcional ya vista en Embriología), o el *tamizaje neonatal* (pruebas de laboratorio realizadas a todo recién nacido, buscando enfermedades metabólicas o genéticas tratables si se detectan a tiempo, antes incluso de que den síntomas).'
      ]
    },
    {
      t:'La atención primaria como puerta de entrada',
      p:[
        'La *atención primaria* de salud es, generalmente, el nivel del sistema de salud donde se implementan la mayoría de estos programas preventivos: al ser el primer punto de contacto de la población con el sistema de salud, y el más cercano geográficamente, es el nivel más eficiente para ofrecer vacunación, control prenatal y tamizaje de rutina a gran escala, sin necesitar que cada persona busque activamente un especialista.'
      ],
      foco:[
        'Este tema conecta todos los conceptos individuales del bloque (niveles de prevención, vacunación, tamizaje) mostrando cómo se organizan, en la práctica, como programas sistemáticos y sostenidos, no como decisiones aisladas caso por caso.'
      ]
    }
  ],
  ref:'OPS, Renovación de la Atención Primaria de Salud.'
},

'educacion-salud': {
  tema:'Educación para la salud',
  bloque:'Medicina Preventiva', programa:'unirm', cuatri:9, min:6,
  idea:'Dar información correcta no es, por sí sola, suficiente para cambiar un comportamiento: la educación para la salud efectiva trabaja tanto el conocimiento como las habilidades y el entorno que hacen posible ese cambio.',
  claves:['educación para la salud','cambio de comportamiento','promoción comunitaria'],
  sigue:'prevencion-cuaternaria',
  secciones:[
    {
      t:'Más allá de solo informar',
      p:[
        'La *educación para la salud* busca promover el *cambio de comportamiento* hacia hábitos más saludables, pero la evidencia acumulada muestra que solo dar información (por ejemplo, que fumar es dañino, algo que la gran mayoría de fumadores ya sabe) rara vez basta por sí solo para lograr ese cambio: hace falta trabajar también las habilidades prácticas (cómo negarse a una presión social, cómo planificar una dieta saludable con recursos limitados) y el entorno (si el ambiente facilita o dificulta la opción saludable).'
      ]
    },
    {
      t:'De la persona a la comunidad',
      p:[
        'La *promoción comunitaria* extiende la educación para la salud más allá de la consulta individual, trabajando con grupos, escuelas o comunidades enteras, aprovechando la influencia social entre pares (a veces más efectiva que la instrucción de un profesional de salud) y buscando cambios sostenidos en las normas sociales del grupo, no solo en el conocimiento individual de cada persona.'
      ],
      foco:[
        'Consideración práctica: una consulta médica que solo entrega un folleto informativo, sin abordar las barreras prácticas reales del paciente para cambiar su comportamiento, tiene un impacto mucho menor que una que ayuda a planificar pasos concretos y realistas.'
      ]
    }
  ],
  ref:'Restrepo y Málaga, Promoción de la Salud, cap. 3.'
},

'prevencion-cuaternaria': {
  tema:'Prevención cuaternaria',
  bloque:'Medicina Preventiva', programa:'unirm', cuatri:9, min:7,
  idea:'Este último tema del bloque cierra con una idea que, a primera vista, parece contradecir todo lo anterior: a veces, la mejor prevención es prevenir el propio exceso de intervención médica, no hacer más estudios ni más tratamientos.',
  claves:['prevención cuaternaria','sobrediagnóstico','sobretratamiento','daño iatrogénico evitable'],
  sigue:null,
  secciones:[
    {
      t:'Un cuarto nivel, distinto a los tres ya vistos',
      p:[
        'La *prevención cuaternaria* es un concepto más reciente que los tres niveles clásicos ya vistos (primaria, secundaria, terciaria): busca identificar a pacientes en riesgo de recibir intervenciones médicas EXCESIVAS o innecesarias, y protegerlos de un daño médico evitable causado por eso mismo —no por la enfermedad, sino por el exceso de atención médica sobre ella.',
        'El *sobrediagnóstico* ocurre cuando se detecta (por ejemplo, gracias a un tamizaje demasiado sensible o aplicado sin criterio, ya visto en el tema de tamizaje) una condición que nunca habría causado síntomas ni afectado la vida de esa persona si nunca se hubiera buscado, pero que una vez detectada, dispara estudios y tratamientos adicionales, con sus propios riesgos.'
      ]
    },
    {
      t:'Del sobrediagnóstico al daño evitable',
      p:[
        'El *sobretratamiento* es tratar una condición que, aunque real, no habría necesitado tratamiento (por ser demasiado leve, o por resolverse sola), exponiendo al paciente a los riesgos del tratamiento sin un beneficio real que los compense. El *daño iatrogénico evitable* es cualquier daño causado por la propia atención médica que razonablemente se podría haber prevenido, y es, precisamente, lo que la prevención cuaternaria busca reducir.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Medicina Preventiva con un mensaje que equilibra a todos los anteriores: prevenir, tamizar y tratar son herramientas valiosas, pero no están exentas de riesgo, y la buena práctica médica también exige saber cuándo NO intervenir.'
      ]
    }
  ],
  ref:'Gérvas y Pérez Fernández, sobre prevención cuaternaria.'
}

});
