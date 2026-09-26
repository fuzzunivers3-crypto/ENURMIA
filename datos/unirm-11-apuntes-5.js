/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 11 (lote 5)
   Cubre IMAGENOLOGÍA Y MEDICINA NUCLEAR al estandar extenso (3
   secciones, ~200-300 palabras por seccion, min 12-13). Quinta
   materia del cuatrimestre 11 (2 creditos, 7 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== IMAGENOLOGÍA Y MEDICINA NUCLEAR ==================== */
'principios-radiologia': {
  tema:'Principios de radiología',
  bloque:'Imagenología y Medicina Nuclear', programa:'unirm', cuatri:11, min:13,
  idea:'Antes de aprender a interpretar un estudio de imagen específico, es necesario entender el principio físico común que hace posible verlos: cómo distintos tejidos del cuerpo interactúan de forma diferente con la radiación, generando el contraste que finalmente se traduce en una imagen interpretable.',
  claves:['formación de la imagen radiológica','densidades radiológicas','principio ALARA'],
  sigue:'radiografia-torax',
  secciones:[
    {
      t:'La formación de la imagen radiológica',
      p:[
        'La *formación de la imagen radiológica* en una radiografía convencional depende de que los rayos X, al atravesar el cuerpo, sean absorbidos en distinto grado según la densidad y composición del tejido que atraviesan -los tejidos más densos absorben más radiación (apareciendo más blancos en la imagen final), mientras los menos densos permiten que más radiación los atraviese (apareciendo más oscuros u opacos radiolúcidos en la imagen).',
        'Este principio básico de absorción diferencial es el que hace posible distinguir estructuras distintas dentro de una misma imagen: sin esta diferencia de absorción entre tejidos, una radiografía sería una imagen uniforme sin ningún contraste interpretable, sin importar cuántas estructuras distintas atravesara el haz de rayos X.'
      ]
    },
    {
      t:'Las densidades radiológicas como lenguaje básico de interpretación',
      p:[
        'Las *densidades radiológicas* clásicas, de mayor a menor capacidad de absorción (de más blanco a más oscuro en la imagen), son: metal (la más densa, aparece completamente blanca), hueso, tejido blando (agua, órganos, músculo), grasa, y aire (la menos densa, aparece completamente negra u oscura) -aprender a reconocer estas cinco densidades básicas es el primer paso indispensable para interpretar cualquier radiografía, sin importar la región anatómica específica que se esté evaluando.',
        'Reconocer una densidad anormal en un sitio donde se esperaría otra densidad distinta -por ejemplo, densidad de tejido blando donde se esperaría densidad de aire- es precisamente el tipo de hallazgo que orienta hacia patología, retomando este principio básico en cada uno de los temas específicos de radiografía que se desarrollan más adelante en este bloque.'
      ]
    },
    {
      t:'El principio ALARA y la exposición responsable a la radiación',
      p:[
        'El *principio ALARA* (As Low As Reasonably Achievable, "tan bajo como sea razonablemente posible") es el principio rector que guía el uso de estudios que emplean radiación ionizante: cada estudio debe justificarse por una necesidad clínica real, y la dosis de radiación utilizada debe minimizarse tanto como sea posible sin comprometer la calidad diagnóstica necesaria de la imagen obtenida.',
        'Este principio retoma directamente la lógica ya vista sobre uso apropiado de recursos diagnósticos en Obstetricia I (no repetir ecografías sin indicación clara): solicitar un estudio de imagen con radiación ionizante debe responder siempre a una pregunta clínica específica, no aplicarse de forma rutinaria o indiscriminada, particularmente relevante en poblaciones más vulnerables a los efectos acumulativos de la radiación, como niños y gestantes.'
      ],
      foco:[
        '*Consideración clínica*: reconocer las cinco densidades radiológicas básicas (metal, hueso, tejido blando, grasa, aire) es el fundamento indispensable para interpretar cualquier radiografía, sin importar la región anatómica evaluada.'
      ]
    }
  ],
  ref:'Novelline, Fundamentos de Radiología, cap. 1.'
},

'radiografia-torax': {
  tema:'Radiografía de tórax',
  bloque:'Imagenología y Medicina Nuclear', programa:'unirm', cuatri:11, min:13,
  idea:'La radiografía de tórax es el estudio de imagen más solicitado en la práctica clínica general, y una lectura sistemática -siguiendo siempre el mismo orden- evita pasar por alto hallazgos relevantes por una revisión desorganizada.',
  claves:['lectura sistemática de radiografía de tórax','infiltrado pulmonar','derrame pleural en radiografía'],
  sigue:'radiografia-abdomen',
  secciones:[
    {
      t:'La lectura sistemática como hábito indispensable',
      p:[
        'La *lectura sistemática de radiografía de tórax* sigue un orden reproducible que revisa, entre otros elementos: la calidad técnica de la imagen (posición, exposición adecuada), las estructuras óseas y de tejidos blandos, la silueta cardíaca y mediastínica, los campos pulmonares de forma comparativa entre ambos lados, los ángulos costofrénicos, y el diafragma -seguir siempre el mismo orden, sin saltarse pasos, retomando la lógica ya vista sobre presentación estructurada de información en Servicio Hospitalario Pre Clínico (10mo), reduce el riesgo de pasar por alto un hallazgo relevante por una revisión desorganizada.',
        'Un error frecuente, particularmente en estudiantes con poca experiencia, es enfocar toda la atención en el hallazgo más llamativo de la imagen, sin completar la revisión sistemática del resto de la radiografía -esto puede llevar a pasar por alto un segundo hallazgo relevante que, sin la disciplina de revisar sistemáticamente cada estructura, queda sin detectar.'
      ]
    },
    {
      t:'El infiltrado pulmonar como hallazgo clave',
      p:[
        'El *infiltrado pulmonar* es una opacidad anormal dentro del parénquima pulmonar, que en la práctica clínica con frecuencia se asocia a procesos como la neumonía (retomando directamente la lectura de radiografía de tórax ya mencionada en el tema de infecciones respiratorias agudas de Pediatría I), aunque también puede corresponder a otras causas no infecciosas que requieren un diagnóstico diferencial más amplio según el contexto clínico del paciente.',
        'La localización, la distribución (focal versus difusa), y las características del infiltrado (por ejemplo, si respeta o no los límites de un lóbulo pulmonar específico) aportan pistas diagnósticas relevantes que, combinadas con el cuadro clínico del paciente, orientan hacia una causa probable más específica, en vez de tratar cualquier infiltrado pulmonar como un hallazgo genérico sin mayor especificidad.'
      ]
    },
    {
      t:'El derrame pleural en la radiografía',
      p:[
        'El *derrame pleural en radiografía* se manifiesta característicamente por la pérdida del ángulo costofrénico normalmente agudo (que se vuelve obtuso o se borra por completo cuando hay líquido acumulado suficiente), y en derrames de mayor volumen, por una opacidad homogénea que ocupa la base pulmonar, con un borde superior cóncavo característico -un patrón radiológico distintivo que ayuda a diferenciarlo de otras causas de opacidad de la base pulmonar.',
        'Un principio clínico relevante es que una cantidad relativamente pequeña de líquido pleural puede no ser evidente en una radiografía convencional de pie, mientras técnicas complementarias específicas o estudios de imagen adicionales (como la ecografía, ya desarrollada más adelante en este bloque) pueden detectar volúmenes menores que la radiografía simple podría pasar por alto.'
      ],
      foco:[
        '*Consideración clínica*: seguir siempre el mismo orden sistemático al leer una radiografía de tórax, sin enfocarse prematuramente solo en el hallazgo más llamativo, reduce el riesgo de pasar por alto un segundo hallazgo relevante.'
      ]
    }
  ],
  ref:'Novelline, Fundamentos de Radiología, cap. 3.'
},

'radiografia-abdomen': {
  tema:'Radiografía de abdomen',
  bloque:'Imagenología y Medicina Nuclear', programa:'unirm', cuatri:11, min:13,
  idea:'La radiografía simple de abdomen, aunque menos detallada que otros estudios más avanzados, sigue siendo un estudio inicial valioso en ciertos escenarios de urgencia, particularmente cuando se busca un hallazgo específico y bien reconocible.',
  claves:['radiografía simple de abdomen','niveles hidroaéreos','neumoperitoneo'],
  sigue:'ecografia-general',
  secciones:[
    {
      t:'La radiografía simple de abdomen y sus indicaciones específicas',
      p:[
        'La *radiografía simple de abdomen* tiene un papel más limitado que otros estudios de imagen abdominal más avanzados (como la tomografía computarizada, desarrollada más adelante en este bloque), pero conserva indicaciones específicas donde sigue siendo útil como estudio inicial rápido y de bajo costo: sospecha de obstrucción intestinal, búsqueda de aire libre en la cavidad peritoneal, y localización de ciertos cuerpos extraños radiopacos.',
        'Reconocer estas indicaciones específicas, en vez de solicitar una radiografía simple de abdomen de forma genérica ante cualquier dolor abdominal, retoma la lógica ya vista sobre el uso apropiado de recursos diagnósticos: cada estudio de imagen debe responder a una pregunta clínica concreta, y en muchos escenarios de dolor abdominal, otros estudios (ecografía, tomografía) aportan mayor rendimiento diagnóstico que la radiografía simple.'
      ]
    },
    {
      t:'Los niveles hidroaéreos como signo de obstrucción intestinal',
      p:[
        'Los *niveles hidroaéreos* son el hallazgo radiológico característico de la obstrucción intestinal, visibles como una interfase horizontal entre el líquido (más denso, en la porción inferior) y el gas (menos denso, en la porción superior) acumulados dentro de un asa intestinal dilatada, un patrón que se hace más evidente en una radiografía tomada con el paciente en posición de pie o en decúbito lateral.',
        'La distribución y el número de asas con niveles hidroaéreos, junto con el patrón de dilatación observado, ayudan a orientar entre una obstrucción del intestino delgado y una del intestino grueso -retomando directamente la conexión con la semiología del abdomen agudo ya vista en Semiología Quirúrgica (10mo), donde este hallazgo radiológico complementa los signos clínicos ya conocidos de esa condición.'
      ]
    },
    {
      t:'El neumoperitoneo: un hallazgo que exige acción inmediata',
      p:[
        'El *neumoperitoneo* es la presencia de aire libre dentro de la cavidad peritoneal, un hallazgo que en la gran mayoría de los contextos clínicos (fuera del postoperatorio inmediato de una cirugía abdominal reciente) indica una perforación de una víscera hueca, una verdadera emergencia quirúrgica que exige una intervención inmediata sin demora.',
        'Este hallazgo se puede identificar en una radiografía de tórax o de abdomen tomada con el paciente de pie, como una fina línea radiolúcida de aire libre por debajo del diafragma -reconocerlo con rapidez retoma directamente la importancia ya vista sobre signos de alarma que cambian la conducta clínica de forma inmediata, sin margen para una evaluación expectante adicional.'
      ],
      foco:[
        '*Consideración clínica*: el neumoperitoneo, en la gran mayoría de los contextos fuera del postoperatorio inmediato, indica una perforación de víscera hueca y exige intervención quirúrgica inmediata, sin margen para un manejo expectante.'
      ]
    }
  ],
  ref:'Novelline, Fundamentos de Radiología, cap. 8.'
},

'ecografia-general': {
  tema:'Ecografía general',
  bloque:'Imagenología y Medicina Nuclear', programa:'unirm', cuatri:11, min:13,
  idea:'La ecografía se distingue del resto de los estudios de imagen de este bloque por un principio físico fundamentalmente distinto (ultrasonido, no radiación ionizante), lo que le confiere ventajas prácticas únicas, particularmente su seguridad para su uso repetido y en poblaciones vulnerables.',
  claves:['principios del ultrasonido','ecografía abdominal','ecografía a pie de cama'],
  sigue:'tomografia-computarizada',
  secciones:[
    {
      t:'Los principios del ultrasonido',
      p:[
        'Los *principios del ultrasonido* se basan en la emisión de ondas sonoras de alta frecuencia (no radiación ionizante, a diferencia de los estudios ya vistos en los temas anteriores de este bloque) que, al encontrar distintas interfases entre tejidos con diferente densidad acústica, se reflejan en distinto grado -el equipo capta estos ecos reflejados y los traduce en una imagen en tiempo real, permitiendo observar estructuras y, en ciertas configuraciones, incluso movimiento (como el latido cardíaco fetal ya visto en Obstetricia I).',
        'La ausencia de radiación ionizante es la ventaja fundamental de este método frente a la radiografía o la tomografía ya vistas en este bloque: puede repetirse con seguridad las veces que sea clínicamente necesario, y es particularmente apropiado en poblaciones donde se busca minimizar la exposición a radiación, como gestantes y niños, retomando directamente el principio ALARA ya visto al inicio de este bloque.'
      ]
    },
    {
      t:'La ecografía abdominal como aplicación amplia',
      p:[
        'La *ecografía abdominal* permite evaluar múltiples órganos sólidos (hígado, vesícula biliar, riñones, bazo, páncreas con ciertas limitaciones técnicas) y detectar hallazgos como litiasis biliar o renal, colecciones líquidas anormales, y alteraciones estructurales de estos órganos, siendo particularmente útil como estudio inicial ante dolor abdominal de origen probablemente hepatobiliar o renal.',
        'Una limitación técnica relevante de la ecografía, a diferencia de la radiografía o la tomografía, es su dependencia significativa de la experiencia del operador y de factores del paciente (como la presencia de gas intestinal excesivo, que puede limitar considerablemente la visualización de estructuras profundas) -esta dependencia del operador es una consideración práctica importante al interpretar un resultado ecográfico reportado como no concluyente.'
      ]
    },
    {
      t:'La ecografía a pie de cama: llevando el estudio al paciente',
      p:[
        'La *ecografía a pie de cama* (o ecografía en el punto de atención) es el uso del ultrasonido directamente en el lugar donde se encuentra el paciente -en la sala de urgencias, en cuidados intensivos, o en cualquier otro entorno clínico- por parte del propio médico tratante, para responder preguntas clínicas específicas y focalizadas de forma inmediata, sin necesidad de trasladar al paciente a un departamento de imagenología separado.',
        'Este enfoque retoma directamente la lógica ya vista sobre la importancia de la oportunidad temprana en la evaluación clínica: obtener información diagnóstica relevante de forma inmediata, en el momento y lugar donde se está atendiendo al paciente, puede acelerar decisiones clínicas urgentes que, de esperar un estudio formal en otro departamento, sufrirían un retraso potencialmente relevante para el pronóstico.'
      ],
      foco:[
        '*Consideración clínica*: la dependencia de la ecografía respecto a la experiencia del operador es una limitación técnica real; un resultado ecográfico "no concluyente" no siempre descarta la patología buscada, sino que puede reflejar una limitación técnica del estudio en ese momento específico.'
      ]
    }
  ],
  ref:'Novelline, Fundamentos de Radiología, cap. 14.'
},

'tomografia-computarizada': {
  tema:'Tomografía computarizada',
  bloque:'Imagenología y Medicina Nuclear', programa:'unirm', cuatri:11, min:13,
  idea:'La tomografía computarizada ofrece una resolución anatómica considerablemente mayor que la radiografía simple, a costa de una dosis de radiación significativamente más alta, lo que exige un balance cuidadoso entre el beneficio diagnóstico y el riesgo asociado de cada estudio solicitado.',
  claves:['indicaciones de la tomografía computarizada','contraste yodado','ventana ósea y de partes blandas'],
  sigue:'resonancia-magnetica',
  secciones:[
    {
      t:'Las indicaciones de la tomografía computarizada',
      p:[
        'Las *indicaciones de la tomografía computarizada* incluyen escenarios donde se requiere una resolución anatómica considerablemente mayor que la de la radiografía simple, o donde el diagnóstico diferencial es amplio y complejo -evaluación de trauma significativo, sospecha de patología intracraneal aguda, estudio de masas o lesiones no bien caracterizadas por otros estudios, y planificación quirúrgica detallada, entre otras.',
        'Dado que la tomografía computarizada utiliza radiación ionizante, y en dosis considerablemente mayores que una radiografía convencional, su indicación debe justificarse por una necesidad diagnóstica real que no pueda resolverse igualmente bien con un estudio de menor dosis de radiación (como la ecografía ya vista en el tema anterior) -retomando directamente el principio ALARA ya introducido al inicio de este bloque.'
      ]
    },
    {
      t:'El contraste yodado y sus consideraciones',
      p:[
        'El *contraste yodado* es una sustancia administrada por vía intravenosa en muchos estudios de tomografía computarizada para mejorar la visualización de estructuras vasculares y realzar el contraste entre distintos tejidos, particularmente útil para caracterizar lesiones que de otra forma podrían pasar desapercibidas en un estudio sin contraste.',
        'El uso de contraste yodado requiere considerar ciertas precauciones: la función renal del paciente (el contraste puede, en ciertos contextos, afectar la función renal, particularmente en pacientes con función renal ya comprometida) y el antecedente de reacciones alérgicas previas al contraste, dos consideraciones que deben evaluarse antes de administrar el contraste, no después de haberlo administrado sin esta verificación previa.'
      ]
    },
    {
      t:'Las ventanas ósea y de partes blandas',
      p:[
        'Las *ventanas ósea y de partes blandas* son distintas configuraciones de visualización de la misma imagen tomográfica original, ajustadas para resaltar mejor un tipo de tejido específico: la ventana ósea optimiza la visualización de estructuras óseas (útil para detectar fracturas), mientras la ventana de partes blandas optimiza la visualización de órganos y tejidos blandos, permitiendo distinguir mejor sus contornos y densidades relativas.',
        'Un mismo estudio de tomografía se revisa habitualmente en ambas ventanas, ya que un hallazgo relevante puede ser mucho más evidente en una configuración que en la otra -revisar solo una ventana y omitir la otra, de forma similar al error ya visto sobre lectura sistemática de la radiografía de tórax, puede llevar a pasar por alto un hallazgo que solo se hace evidente en la configuración de visualización no revisada.'
      ],
      foco:[
        '*Consideración clínica*: antes de administrar contraste yodado, verificar la función renal del paciente y el antecedente de reacciones alérgicas previas al contraste es una precaución indispensable, no un paso opcional que pueda omitirse por premura.'
      ]
    }
  ],
  ref:'Novelline, Fundamentos de Radiología, cap. 2.'
},

'resonancia-magnetica': {
  tema:'Resonancia magnética',
  bloque:'Imagenología y Medicina Nuclear', programa:'unirm', cuatri:11, min:13,
  idea:'La resonancia magnética ofrece una resolución de tejidos blandos superior a la de cualquier otro estudio de imagen de este bloque, sin usar radiación ionizante, pero con un conjunto propio de indicaciones, contraindicaciones y limitaciones prácticas que la hacen apropiada para escenarios específicos, no como sustituto universal de los demás estudios.',
  claves:['indicaciones de la resonancia magnética','contraindicaciones de la resonancia magnética','contraste con gadolinio'],
  sigue:'medicina-nuclear-basica',
  secciones:[
    {
      t:'Las indicaciones de la resonancia magnética',
      p:[
        'Las *indicaciones de la resonancia magnética* aprovechan su resolución superior de tejidos blandos, particularmente útil para evaluar el sistema nervioso central y periférico (con mayor detalle que la tomografía computarizada para muchas condiciones neurológicas), estructuras musculoesqueléticas (ligamentos, meniscos, cartílago), y ciertas patologías donde la caracterización precisa del tejido blando afectado es clínicamente indispensable.',
        'A pesar de su resolución superior, la resonancia magnética no reemplaza universalmente a los demás estudios de imagen ya vistos en este bloque: sigue teniendo un papel más limitado en la evaluación de estructuras óseas finas (donde la tomografía suele ser superior) y en escenarios de urgencia donde su mayor tiempo de adquisición la hace menos práctica que una tomografía más rápida.'
      ]
    },
    {
      t:'Las contraindicaciones de la resonancia magnética',
      p:[
        'Las *contraindicaciones de la resonancia magnética* derivan directamente de su principio físico: al utilizar un campo magnético intenso, cualquier material ferromagnético dentro o cerca del paciente representa un riesgo real -ciertos dispositivos médicos implantados no compatibles con resonancia magnética (algunos marcapasos, ciertos clips quirúrgicos, entre otros), y objetos metálicos sueltos que podrían convertirse en proyectiles dentro del campo magnético del equipo.',
        'Verificar activamente estas contraindicaciones antes de realizar el estudio -mediante un cuestionario estructurado de seguridad, retomando la importancia ya vista sobre comunicación estructurada en distintos contextos de este pensum- es un paso indispensable de seguridad, no un trámite administrativo que pueda omitirse por la premura de obtener el estudio.'
      ]
    },
    {
      t:'El contraste con gadolinio',
      p:[
        'El *contraste con gadolinio* es la sustancia utilizada en algunos estudios de resonancia magnética para mejorar la visualización de ciertas estructuras, de forma análoga en su propósito general al contraste yodado ya visto en el tema de tomografía computarizada, aunque con un mecanismo de acción y un perfil de seguridad distintos, propios de este tipo específico de contraste.',
        'Este tema cierra reconociendo un principio general aplicable a los tres estudios de imagen avanzados vistos en este bloque (tomografía, resonancia, y sus respectivos contrastes): cada estudio tiene su propio balance de ventajas, limitaciones, y consideraciones de seguridad específicas, y la elección apropiada entre ellos depende de la pregunta clínica concreta que se busca responder, no de asumir que "el estudio más avanzado" es siempre la mejor opción disponible.'
      ],
      foco:[
        '*Consideración clínica*: verificar activamente las contraindicaciones de la resonancia magnética (dispositivos implantados, objetos metálicos) mediante un cuestionario estructurado de seguridad es un paso indispensable, dado el riesgo real que representa el campo magnético intenso del equipo.'
      ]
    }
  ],
  ref:'Novelline, Fundamentos de Radiología, cap. 2.'
},

'medicina-nuclear-basica': {
  tema:'Medicina nuclear básica',
  bloque:'Imagenología y Medicina Nuclear', programa:'unirm', cuatri:11, min:13,
  idea:'Este último tema cierra el bloque completo retomando un principio distinto a todos los estudios anteriores: la medicina nuclear no evalúa principalmente la anatomía, sino la función de un órgano o tejido, complementando de forma valiosa la información puramente estructural de los demás estudios de este bloque.',
  claves:['gammagrafía','tomografía por emisión de positrones','radiofármaco'],
  sigue:'evaluacion-estado-nutricional',
  secciones:[
    {
      t:'El principio distintivo de la medicina nuclear: evaluar función, no solo estructura',
      p:[
        'A diferencia de todos los estudios de imagen ya vistos en este bloque -que evalúan principalmente la estructura anatómica de un órgano o tejido-, la medicina nuclear evalúa principalmente su función, mediante la administración de un *radiofármaco* (una sustancia que combina un componente farmacológico específico, que se dirige selectivamente hacia el órgano o proceso de interés, con un componente radiactivo detectable) que permite visualizar procesos fisiológicos o metabólicos activos, no solo la forma anatómica del órgano.',
        'Esta capacidad de evaluar función, no solo estructura, hace de la medicina nuclear un complemento valioso a los estudios ya vistos en este bloque: un órgano puede tener una apariencia estructural normal en una tomografía o una resonancia, mientras un estudio de medicina nuclear revela una alteración funcional que esos otros estudios, centrados en la anatomía, no pueden detectar.'
      ]
    },
    {
      t:'La gammagrafía como estudio de medicina nuclear más frecuente',
      p:[
        'La *gammagrafía* es el estudio de medicina nuclear más frecuente en la práctica clínica general, utilizada para evaluar la función de diversos órganos (tiroides, hueso, riñón, entre otros) según el radiofármaco específico administrado, cuya distribución dentro del órgano evaluado se detecta mediante una cámara especializada que capta la radiación emitida desde el interior del cuerpo del paciente.',
        'La interpretación de una gammagrafía depende de reconocer patrones de captación anormal del radiofármaco -zonas de mayor captación de lo esperado ("hipercaptación", que puede indicar mayor actividad metabólica en esa zona) o de menor captación ("hipocaptación", que puede indicar tejido no funcional o ausente)- un principio de interpretación distinto al de reconocer densidades anormales en una radiografía, ya visto al inicio de este bloque.'
      ]
    },
    {
      t:'La tomografía por emisión de positrones y el cierre del bloque',
      p:[
        'La *tomografía por emisión de positrones* (PET, por sus siglas en inglés) es un estudio de medicina nuclear más avanzado, particularmente utilizado en oncología para evaluar la actividad metabólica de tejidos (los tejidos con mayor actividad metabólica, como muchos tumores malignos, captan de forma característica mayor cantidad del radiofármaco utilizado en este estudio), con frecuencia combinado con una tomografía computarizada en el mismo equipo para superponer la información funcional sobre la anatómica.',
        'Esta combinación de PET con tomografía computarizada cierra el bloque completo de Imagenología y Medicina Nuclear de forma integradora: retoma tanto la información estructural ya vista en los temas anteriores del bloque como la información funcional propia de la medicina nuclear, ilustrando cómo los distintos estudios de imagen, lejos de ser mutuamente excluyentes, con frecuencia se complementan para responder preguntas clínicas que ningún estudio aislado podría resolver por sí solo.'
      ],
      foco:[
        '*Consideración clínica*: cuando la estructura anatómica de un órgano parece normal en los estudios ya vistos en este bloque, pero persiste una sospecha clínica de disfunción, un estudio de medicina nuclear puede revelar una alteración funcional que los estudios puramente estructurales no logran detectar.'
      ]
    }
  ],
  ref:'Novelline, Fundamentos de Radiología, cap. 22.'
}

});
