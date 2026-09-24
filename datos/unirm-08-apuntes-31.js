/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 31)
   INMUNOLOGIA reescrita al estandar extenso. Mismas 10 claves de
   objeto que ya existian, repartidas en tres archivos distintos
   (apuntes.js, apuntes-2.js, apuntes-12.js): 'innata-y-adaptativa',
   'celulas-organos-sistema-inmunitario', 'antigeno-anticuerpo-mhc',
   'complemento', 'respuesta-humoral-celular',
   'hipersensibilidad-autoinmunidad', 'inmunizacion',
   'inmunodeficiencias-primarias', 'trasplante-inmunologia-rechazo',
   'tolerancia-inmunologica'. Object.assign las sobrescribe sin
   romper "Leer el tema".

   Se repara un bug real de la cadena `sigue`: 'innata-y-adaptativa'
   (primer tema) apuntaba a 'cromosomopatias', una clave de
   Genetica Medica que no tiene nada que ver -residuo de una edicion
   anterior del temario. Ahora apunta a
   'celulas-organos-sistema-inmunitario', el tema 2 real. Ademas,
   'inmunizacion', 'inmunodeficiencias-primarias' y
   'trasplante-inmunologia-rechazo' tenian los tres `sigue:null`,
   cortando la cadena a partir de la mitad del bloque -ahora siguen
   el orden exacto del Temario. Esta es la ULTIMA materia de
   cuatrimestre 8: 'tolerancia-inmunologica' (ultimo tema) ahora
   encadena hacia 'historia-clinica-anamnesis', primer tema de
   Semiologia Clinica en cuatrimestre 9, cerrando el cruce entre
   cuatrimestres igual que ya se hizo entre el 7 y el 8. Con esto,
   la cadena "Leer el tema" queda continua a lo largo de TODO
   cuatrimestre 7 y 8.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'innata-y-adaptativa': {
  tema:'Inmunidad innata y adaptativa',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:13,
  idea:'La inmunidad innata y la adaptativa no son dos sistemas paralelos que actúan por separado: la innata es la que decide, en cada infección, si la adaptativa se activa y en qué dirección lo hace -entender ese reparto de trabajo es la puerta de entrada a todo el bloque de Inmunología.',
  claves:['inmunidad innata','adaptativa','barrera','memoria','especificidad'],
  sigue:'celulas-organos-sistema-inmunitario',
  secciones:[
    {
      t:'Inmunidad innata: rápida, inespecífica, sin memoria',
      p:[
        'La inmunidad innata es la primera línea de defensa del cuerpo, y está formada por barreras físicas y químicas (piel, mucosas, pH ácido gástrico, lisozima en secreciones), células fagocíticas (macrófagos, neutrófilos), células NK (natural killer), el sistema del complemento y la respuesta inflamatoria. Actúa en minutos u horas -mucho más rápido que la adaptativa- y no necesita exposición previa al patógeno para funcionar: responde con la misma intensidad y velocidad la primera vez que se enfrenta a un microorganismo que la centésima. Su reconocimiento es de PATRONES generales compartidos por familias enteras de microorganismos (como ciertas estructuras de la pared bacteriana), no de antígenos individuales específicos -por eso es rápida, pero también es la razón por la que, a diferencia de la adaptativa, NO deja memoria inmunológica: no "aprende" de una exposición para responder mejor en la siguiente.'
      ],
      foco:[
        'Inmunidad innata = rápida (minutos-horas), reconocimiento de patrones generales, SIN memoria. Responde igual en la primera exposición que en la centésima -esa es precisamente su limitación frente a la adaptativa.'
      ]
    },
    {
      t:'Inmunidad adaptativa: lenta la primera vez, específica y con memoria',
      p:[
        'La inmunidad adaptativa la ejecutan los linfocitos (B y T, que se estudiarán con más detalle en el tema de respuesta humoral y celular). A diferencia de la innata, tarda DÍAS en montar una respuesta efectiva durante la primera exposición a un antígeno, porque necesita seleccionar y expandir específicamente los pocos clones de linfocitos capaces de reconocer ese antígeno particular entre millones de clones distintos disponibles. Pero a cambio de esa lentitud inicial, ofrece dos ventajas que la innata no tiene: especificidad (reconoce antígenos concretos, no solo patrones generales) y memoria inmunológica (una parte de los linfocitos activados persiste después de resolverse la infección, permitiendo que una segunda exposición al mismo antígeno genere una respuesta mucho más rápida, más intensa y de mejor calidad que la primera). Toda la lógica de la vacunación, que se estudiará más adelante en este bloque, se apoya directamente en esta propiedad de memoria.'
      ],
      foco:[
        'Inmunidad adaptativa = lenta la primera vez (días), pero ESPECÍFICA y con MEMORIA -la segunda exposición al mismo antígeno genera una respuesta mucho más rápida y potente. Este principio es la base biológica de toda vacuna.'
      ]
    },
    {
      t:'La innata instruye a la adaptativa: no son sistemas independientes',
      p:[
        'Un error conceptual frecuente es imaginar la inmunidad innata y la adaptativa como dos sistemas paralelos e independientes que simplemente actúan en secuencia. En realidad, la innata INSTRUYE a la adaptativa: las células presentadoras de antígeno (especialmente las células dendríticas, parte del sistema innato) capturan el antígeno en el tejido periférico donde ocurrió la infección, lo procesan, migran hacia el ganglio linfático más cercano, y ahí lo presentan a los linfocitos T vírgenes junto con señales adicionales de contexto -sin esta presentación previa, la respuesta adaptativa simplemente no se pone en marcha, sin importar qué tan peligroso sea el patógeno. Esta conexión explica por qué muchas estrategias médicas (como los adyuvantes en las vacunas, sustancias que estimulan la respuesta innata) buscan potenciar deliberadamente la señal innata inicial, precisamente para lograr una mejor respuesta adaptativa después.'
      ],
      foco:[
        '*Consideración clínica*: la innata no es solo una barrera previa a la adaptativa, es quien "da la orden" de activarla -las células dendríticas (parte del sistema innato) son el puente obligatorio que conecta ambos sistemas, capturando y presentando el antígeno en el ganglio.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular. Janeway, Inmunobiología.'
},

'celulas-organos-sistema-inmunitario': {
  tema:'Células y órganos del sistema inmunitario',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:13,
  idea:'Un paciente al que le quitaron el bazo tiene un riesgo real y bien documentado de infecciones graves por ciertas bacterias, y entender por qué exige saber qué hace exactamente el bazo dentro del sistema inmunitario, no solo dónde está.',
  claves:['linfocito','macrófago','timo','ganglio','célula presentadora'],
  sigue:'antigeno-anticuerpo-mhc',
  secciones:[
    {
      t:'Órganos linfoides primarios: donde las células nacen y maduran',
      p:[
        'Los órganos linfoides primarios son los sitios donde las células del sistema inmunitario se GENERAN y MADURAN hasta volverse funcionalmente competentes, antes de salir a circular por el cuerpo. La médula ósea es el primero: ahí nacen todas las células sanguíneas, incluidos los linfocitos B, que además maduran ahí mismo, sin necesidad de trasladarse a otro órgano. El timo es el segundo: ahí maduran específicamente los linfocitos T, que nacen en la médula ósea (como todas las células sanguíneas) pero deben viajar al timo para completar un proceso de entrenamiento y selección, del cual depende directamente la tolerancia central que se estudiará más adelante en este bloque -un linfocito T que no complete correctamente su maduración en el timo, o que reaccione peligrosamente contra lo propio, es eliminado ahí mismo, antes de salir a circular.'
      ],
      foco:[
        'Médula ósea = nacen TODAS las células sanguíneas, y ahí mismo maduran los linfocitos B. Timo = maduran específicamente los linfocitos T (nacidos en médula ósea, pero entrenados en el timo).'
      ]
    },
    {
      t:'Órganos linfoides secundarios: donde ocurre el encuentro con el antígeno',
      p:[
        'Los órganos linfoides secundarios son los sitios donde las células inmunitarias YA maduras se ENCUENTRAN con el antígeno y montan la respuesta inmunitaria propiamente dicha. Los ganglios linfáticos filtran la linfa proveniente de una región específica del cuerpo, y son el sitio típico donde las células dendríticas (ya mencionadas en el tema anterior) presentan el antígeno capturado en los tejidos periféricos a los linfocitos T. El bazo, en cambio, filtra la SANGRE, no la linfa -es el órgano linfoide secundario especializado en responder a antígenos que circulan directamente en el torrente sanguíneo. El tejido linfoide asociado a mucosas (en el intestino, las vías respiratorias, y otras superficies mucosas) es el tercer tipo de órgano secundario, especializado en la vigilancia inmunitaria de las superficies del cuerpo más expuestas a microorganismos del ambiente.'
      ],
      foco:[
        'Ganglios linfáticos = filtran LINFA de una región. Bazo = filtra SANGRE. Tejido linfoide de mucosas = vigilancia en superficies mucosas. Cada uno especializado según qué fluido o superficie vigila.'
      ]
    },
    {
      t:'Por qué el bazo importa tanto contra las bacterias encapsuladas',
      p:[
        'El bazo tiene una función que ningún otro órgano reemplaza del todo: al filtrar la sangre, es el sitio principal donde el sistema inmunitario reconoce y responde eficazmente a bacterias que tienen una cápsula polisacárida gruesa -como el neumococo, el meningococo y Haemophilus influenzae tipo B-, generando anticuerpos contra esa cápsula, especialmente durante las primeras exposiciones a ese microorganismo. Un paciente esplenectomizado (sin bazo, por trauma o por cirugía) pierde buena parte de esa capacidad específica, quedando con un riesgo aumentado y bien documentado de infecciones fulminantes por bacterias encapsuladas -un cuadro clínico grave conocido como sepsis post-esplenectomía. Por esta razón bien establecida, a los pacientes esplenectomizados se les vacuna específicamente contra neumococo, meningococo y Haemophilus antes de una cirugía electiva (o lo antes posible después, si la esplenectomía fue una urgencia).'
      ],
      foco:[
        '*Consideración clínica*: un paciente sin bazo (esplenectomizado) tiene riesgo aumentado de sepsis fulminante específicamente por bacterias ENCAPSULADAS (neumococo, meningococo, Haemophilus) -se le debe vacunar contra estos tres microorganismos, idealmente antes de la cirugía.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1-2.'
},

'antigeno-anticuerpo-mhc': {
  tema:'Antígeno, anticuerpo y complejo mayor de histocompatibilidad',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:14,
  idea:'El sistema inmunitario no "ve" microbios directamente: ve fragmentos de proteínas presentados sobre una plataforma molecular única de cada persona, y esa plataforma -el MHC- es, precisamente, la razón molecular directa por la que un trasplante de órgano puede ser rechazado.',
  claves:['antígeno','anticuerpo','inmunoglobulina','MHC','presentación'],
  sigue:'complemento',
  secciones:[
    {
      t:'Antígeno y anticuerpo: la llave y la cerradura',
      p:[
        'Un antígeno es cualquier molécula capaz de ser reconocida específicamente por el sistema inmunitario adaptativo, disparando una respuesta inmunitaria dirigida contra ella. Un anticuerpo (también llamado inmunoglobulina) es una proteína producida por los linfocitos B -que se estudiarán con más detalle en el tema de respuesta humoral y celular- capaz de unirse de forma muy específica a un antígeno concreto, de manera análoga a una llave que encaja en una sola cerradura, marcándolo para su destrucción o neutralizándolo directamente. La inmunoglobulina tiene una estructura característica en forma de Y, con una región que varía enormemente de un anticuerpo a otro (dándole su especificidad exclusiva por un antígeno particular) y una región constante que determina su función efectora, es decir, cómo actúa una vez que ya está unida al antígeno.'
      ],
      foco:[
        'Antígeno = lo que se reconoce. Anticuerpo (inmunoglobulina) = la proteína que reconoce, producida por los linfocitos B, con una región variable (especificidad) y una región constante (función efectora).'
      ]
    },
    {
      t:'El MHC: la plataforma de presentación, única de cada persona',
      p:[
        'El complejo mayor de histocompatibilidad (MHC) es un conjunto de proteínas de superficie celular, extremadamente variable de una persona a otra, cuya función es exhibir fragmentos de proteínas (propias o extrañas) en la superficie de la célula, para que los linfocitos T puedan inspeccionarlos -este proceso se llama presentación de antígeno. El MHC de clase I está presente en prácticamente todas las células nucleadas del cuerpo, y presenta fragmentos de proteínas producidas DENTRO de la propia célula -útil para detectar, por ejemplo, una célula infectada por un virus, que produce proteínas virales en su interior. El MHC de clase II, en cambio, está presente solo en células especializadas (las células presentadoras de antígeno "profesionales": células dendríticas, macrófagos y linfocitos B), y presenta fragmentos de proteínas capturadas DESDE AFUERA de la célula.'
      ],
      foco:[
        'MHC clase I: en casi todas las células nucleadas, presenta lo producido DENTRO. MHC clase II: solo en células presentadoras profesionales, presenta lo capturado DESDE AFUERA.'
      ]
    },
    {
      t:'MHC y HLA: el mismo sistema, y su relevancia directa en el trasplante',
      p:[
        'En el ser humano, el MHC tiene otro nombre muy usado en la práctica clínica: HLA (antígeno leucocitario humano) -"MHC" y "HLA" se refieren, en humanos, exactamente al mismo sistema molecular. Como el MHC/HLA es tan variable entre personas (salvo entre gemelos idénticos, que comparten el mismo MHC por ser genéticamente idénticos), el sistema inmunitario de un receptor de trasplante reconoce el MHC de las células del órgano donado como "extraño" si no coincide con el propio, disparando una respuesta de rechazo -esta es la razón molecular directa y bien establecida detrás de la necesidad de evaluar la compatibilidad de tejidos antes de un trasplante, y de la necesidad de inmunosupresión después de él, un tema que se retomará con más detalle en el tema de trasplante e inmunología del rechazo, más adelante en este mismo bloque.'
      ],
      foco:[
        '*Consideración clínica*: "MHC" y "HLA" son el mismo sistema en humanos. Su enorme variabilidad entre personas (salvo gemelos idénticos) es la razón molecular directa del rechazo de trasplantes -tema que se retoma en detalle más adelante en este bloque.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 3 y 6.'
},

'complemento': {
  tema:'Complemento',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:13,
  idea:'El sistema del complemento es, en esencia, una cascada de proteínas plasmáticas que se activan una tras otra, como fichas de dominó, y que termina -literalmente- perforando la membrana de un microorganismo hasta destruirlo.',
  claves:['complemento','vía clásica','vía alterna','C3','opsonización','MAC'],
  sigue:'respuesta-humoral-celular',
  secciones:[
    {
      t:'Dos vías de activación, un mismo punto de encuentro',
      p:[
        'El sistema del complemento es un conjunto de proteínas plasmáticas que circulan de forma inactiva y se activan en cascada, cada una activando a la siguiente en una secuencia ordenada. La vía clásica se activa cuando una proteína del complemento se une a un anticuerpo que ya está unido a su antígeno específico -conectando, de esta manera, el sistema inmunitario adaptativo (que generó ese anticuerpo) con el innato (al cual pertenece el complemento). La vía alterna, en cambio, se activa directamente sobre la superficie de ciertos microorganismos, sin necesitar la presencia previa de un anticuerpo específico, formando parte de la respuesta innata más inmediata, disponible desde el primer contacto con el patógeno.'
      ],
      foco:[
        'Vía clásica: necesita anticuerpo previo (conecta adaptativa con innata). Vía alterna: se activa directamente sobre el microorganismo, sin necesitar anticuerpo (innata pura, inmediata).'
      ]
    },
    {
      t:'C3: el punto de convergencia central de todo el sistema',
      p:[
        'Ambas vías de activación -clásica y alterna, además de una tercera vía menos mencionada en el pregrado, la vía de las lectinas- convergen en la activación de C3, la proteína central de todo el sistema del complemento. Al activarse, C3 se divide en dos fragmentos con funciones distintas: uno de ellos queda pegado directamente a la superficie del microorganismo (marca de fundamental importancia para lo que se explica en la siguiente sección), y el otro continúa la cascada hacia el paso final de activación del complemento.'
      ],
      foco:[
        'C3 es el punto de convergencia de todas las vías de activación del complemento -da igual cuál vía inicial se activó, todas terminan pasando por la activación de C3, la proteína central del sistema.'
      ]
    },
    {
      t:'Tres efectos de la activación: opsonización, inflamación y lisis directa',
      p:[
        'La activación completa del complemento produce tres efectos principales sobre el microorganismo atacado. Primero, la opsonización: el fragmento de C3 que queda pegado a la superficie del microorganismo actúa como una "etiqueta" que los fagocitos (macrófagos, neutrófilos) reconocen fácilmente mediante receptores específicos, facilitando enormemente la fagocitosis. Segundo, la liberación de fragmentos del complemento que atraen y activan a células inflamatorias adicionales hacia el sitio de la infección. Y tercero, al final de la cascada, la formación del complejo de ataque a la membrana (MAC): un conjunto de proteínas del complemento que se ensamblan directamente sobre la membrana del microorganismo, formando literalmente un poro que causa su lisis (destrucción física directa por entrada masiva de agua y salida de contenido celular).'
      ],
      foco:[
        '*Consideración clínica*: las bacterias con cápsula gruesa (como el neumococo, ya mencionado en el tema del bazo) son particularmente difíciles de destruir solo por el MAC, y dependen más de la opsonización y la fagocitosis para ser eliminadas -una razón adicional de por qué la esplenectomía es tan riesgosa frente a estos microorganismos específicos.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 5.'
},

'respuesta-humoral-celular': {
  tema:'Respuesta humoral y celular',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:14,
  idea:'El sistema inmunitario adaptativo se divide, en el fondo, en dos brazos con especialidades bien definidas y complementarias: uno bueno contra lo que está FUERA de las células (bacterias circulando en la sangre), el otro bueno contra lo que se esconde DENTRO de ellas (virus).',
  claves:['linfocito B','linfocito T','CD4','CD8','citocina','memoria inmunitaria'],
  sigue:'hipersensibilidad-autoinmunidad',
  secciones:[
    {
      t:'Respuesta humoral: linfocitos B, células plasmáticas y anticuerpos',
      p:[
        'La respuesta humoral está protagonizada por los linfocitos B, que al activarse -habitualmente con ayuda de linfocitos T, como se explica en la siguiente sección- se transforman en células plasmáticas: fábricas celulares especializadas en producir anticuerpos que se liberan hacia la sangre y otros fluidos corporales (de donde viene el nombre "humoral", de los antiguos "humores" del cuerpo). Esta rama es la más eficaz contra patógenos EXTRACELULARES: bacterias circulando libremente en la sangre o los tejidos, sus toxinas, y parásitos que circulan en fluidos corporales -en general, cualquier cosa que un anticuerpo circulante pueda alcanzar directamente en el espacio extracelular, fuera de las células del cuerpo.'
      ],
      foco:[
        'Respuesta humoral = linfocitos B → células plasmáticas → anticuerpos. Eficaz contra patógenos EXTRACELULARES (bacterias en sangre/tejidos, toxinas, parásitos circulantes).'
      ]
    },
    {
      t:'Respuesta celular: CD4 coordina, CD8 destruye directamente',
      p:[
        'La respuesta celular está protagonizada por los linfocitos T, divididos en dos poblaciones principales según una proteína de superficie que las distingue. Los linfocitos T CD4 (colaboradores o "helper") reconocen antígenos presentados por MHC clase II (ya visto en el tema anterior), y su trabajo principal no es destruir directamente, sino COORDINAR y potenciar al resto del sistema inmunitario: liberan citocinas (moléculas de señalización entre células inmunitarias) que activan a los linfocitos B para que produzcan mejores anticuerpos, activan a los macrófagos para que completen la destrucción de lo que ya fagocitaron, y sostienen la actividad de los propios linfocitos T CD8. Los linfocitos T CD8 (citotóxicos) reconocen antígenos presentados por MHC clase I, y su trabajo es destruir DIRECTAMENTE a las células infectadas que detectan -son la rama más eficaz contra patógenos INTRACELULARES, sobre todo virus, que se esconden dentro de las propias células del cuerpo y quedan fuera del alcance directo de un anticuerpo circulante.'
      ],
      foco:[
        'CD4 (helper, MHC II) = COORDINA mediante citocinas, no destruye directamente. CD8 (citotóxico, MHC I) = DESTRUYE directamente células infectadas. CD8 es la rama eficaz contra virus (intracelulares).'
      ]
    },
    {
      t:'Memoria inmunitaria: el fundamento biológico de la vacunación',
      p:[
        'Tras resolverse una infección, una parte de los linfocitos B y T que se activaron durante la respuesta no muere: persiste en el cuerpo como células de memoria inmunitaria, capaces de reconocer al mismo antígeno mucho más rápido y con mayor fuerza si vuelve a presentarse en el futuro -es el fundamento biológico tanto de la inmunidad natural que sigue a una infección pasada como del principio central detrás de toda vacunación, que se estudiará con más detalle en el tema de inmunización, más adelante en este bloque. Un ejemplo clínico particularmente relevante de por qué el CD4 importa más de lo que su falta de "acción destructora directa" podría sugerir: el virus de la inmunodeficiencia humana (VIH) infecta preferentemente a los linfocitos T CD4, y su destrucción progresiva es la razón central por la que, sin tratamiento, la infección avanza hacia un estado de inmunodeficiencia severa -se pierde precisamente la célula que coordina a todo el resto del sistema inmunitario adaptativo.'
      ],
      foco:[
        '*Consideración clínica*: el VIH infecta preferentemente a los linfocitos T CD4; su destrucción progresiva explica por qué, sin tratamiento, se pierde la capacidad de coordinar tanto la respuesta humoral como la celular, no solo una de las dos ramas.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1, 9 y 10.'
},

'hipersensibilidad-autoinmunidad': {
  tema:'Hipersensibilidad y autoinmunidad',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:13,
  idea:'El mismo sistema inmunitario que protege también puede dañar: una hipersensibilidad es una respuesta inmunitaria exagerada contra algo externo que, en realidad, es inofensivo; una autoinmunidad es una respuesta dirigida, por error, contra el propio cuerpo.',
  claves:['hipersensibilidad','tipo I','anafilaxia','autoinmunidad','tolerancia'],
  sigue:'inmunizacion',
  secciones:[
    {
      t:'Hipersensibilidad tipo I: la reacción alérgica inmediata',
      p:[
        'Una hipersensibilidad es una respuesta inmunitaria excesiva o inapropiada frente a un antígeno que, por sí mismo, no representa un peligro real para el cuerpo. La hipersensibilidad tipo I (inmediata) es la más conocida en la práctica clínica cotidiana: ocurre cuando el sistema inmunitario produce un tipo específico de anticuerpo contra un alérgeno inofensivo (polen, ciertos alimentos, veneno de insecto), y una exposición POSTERIOR a ese mismo alérgeno dispara la liberación masiva y rápida de mediadores inflamatorios (como la histamina) desde células ya sensibilizadas previamente, produciendo síntomas que van desde una reacción alérgica leve (picazón, estornudos) hasta la anafilaxia.'
      ],
      foco:[
        'Hipersensibilidad tipo I = requiere sensibilización PREVIA (primera exposición sin síntomas graves) y luego reacción rápida y a veces grave en una exposición POSTERIOR al mismo alérgeno.'
      ]
    },
    {
      t:'Anafilaxia: una emergencia médica que no admite demora',
      p:[
        'La anafilaxia es la forma más grave de hipersensibilidad tipo I: una reacción sistémica (que afecta a todo el cuerpo, no solo al sitio de contacto con el alérgeno) potencialmente mortal, con caída de la presión arterial, compromiso de la vía aérea (por hinchazón) y compromiso respiratorio, que requiere tratamiento de emergencia inmediato con epinefrina -no toda reacción alérgica progresa a anafilaxia, pero reconocer sus signos de alarma tempranos (dificultad respiratoria, hinchazón de labios o garganta, caída súbita de la presión arterial) es clínicamente fundamental, porque la anafilaxia puede progresar en cuestión de minutos y el retraso en el tratamiento aumenta considerablemente el riesgo de un desenlace fatal.'
      ],
      foco:[
        '*Consideración clínica*: la anafilaxia progresa en MINUTOS -el tratamiento (epinefrina intramuscular) no admite demora ni debe esperarse a completar el cuadro clínico clásico completo para administrarlo ante una sospecha razonable.'
      ]
    },
    {
      t:'Autoinmunidad: cuando la tolerancia hacia lo propio se pierde',
      p:[
        'La autoinmunidad ocurre cuando el sistema inmunitario pierde la tolerancia hacia los propios tejidos del cuerpo -un concepto que se desarrollará en profundidad en el último tema de este bloque, tolerancia inmunológica- y empieza a atacarlos como si fueran material extraño, produciendo una enfermedad autoinmune. El daño puede estar dirigido a un solo órgano específico (como en algunas enfermedades tiroideas autoinmunes, donde el ataque se limita a la glándula tiroides) o puede ser sistémico, afectando simultáneamente a múltiples tejidos y órganos distintos del cuerpo a la vez, dependiendo de qué antígeno propio específico dejó de ser tolerado por el sistema inmunitario.'
      ],
      foco:[
        'La autoinmunidad = pérdida de tolerancia hacia lo propio. Puede ser específica de un órgano (ataque limitado) o sistémica (ataque a múltiples tejidos) -depende de qué antígeno propio específico se dejó de tolerar.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 11 y 20.'
},

'inmunizacion': {
  tema:'Inmunización',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:12,
  idea:'Vacunar es, en esencia, engañar de forma segura al sistema inmunitario adaptativo para que genere memoria inmunitaria contra un patógeno específico, sin que la persona tenga que pasar por la enfermedad real y sus posibles complicaciones.',
  claves:['vacuna','inmunidad pasiva','activa','toxoide','esquema'],
  sigue:'inmunodeficiencias-primarias',
  secciones:[
    {
      t:'Inmunidad activa: lenta en establecerse, pero duradera',
      p:[
        'La inmunidad activa es la que el propio cuerpo genera por sí mismo, produciendo sus propios anticuerpos y células de memoria, ya sea por haber pasado la infección natural o por haber recibido una vacuna. Es más lenta en establecerse -necesita típicamente días o semanas desde la exposición inicial- porque depende de todo el proceso de activación y expansión de linfocitos específicos ya visto en el tema de respuesta humoral y celular, pero a cambio es duradera, gracias precisamente a la memoria inmunitaria que deja establecida.'
      ],
      foco:[
        'Inmunidad activa = el propio cuerpo genera anticuerpos y memoria (por infección natural o por vacuna). Lenta en establecerse (días-semanas), pero duradera.'
      ]
    },
    {
      t:'Inmunidad pasiva: inmediata, pero temporal',
      p:[
        'La inmunidad pasiva consiste en recibir anticuerpos YA HECHOS, producidos por otra persona o por un animal -como los anticuerpos maternos que cruzan la placenta hacia el feto (o que llegan al lactante a través de la leche materna), o una inyección de inmunoglobulina específica administrada después de una exposición de riesgo conocida-. Es inmediata en su efecto protector, porque los anticuerpos ya están listos desde el momento de la administración, sin necesidad de esperar días a que el propio cuerpo los produzca. Pero es TEMPORAL, porque esos anticuerpos "prestados" se degradan con el tiempo (en semanas o meses), y el receptor nunca llegó a generar su propia memoria inmunitaria contra ese antígeno, así que la protección desaparece por completo una vez que esos anticuerpos se degradan.'
      ],
      foco:[
        'Inmunidad pasiva = anticuerpos YA HECHOS, recibidos de otra fuente (materna, inmunoglobulina). Inmediata, pero TEMPORAL -sin memoria propia generada, la protección desaparece cuando esos anticuerpos se degradan.'
      ]
    },
    {
      t:'La vacuna y el esquema: inmunología aplicada a la salud pública',
      p:[
        'Una vacuna expone al sistema inmunitario a una versión modificada y segura del antígeno -el microorganismo debilitado o inactivado, solo un fragmento específico de él, o, en el caso de un toxoide, una toxina bacteriana modificada químicamente para conservar su capacidad de generar anticuerpos protectores pero perder por completo su capacidad de causar daño real-, disparando una respuesta activa y memoria inmunitaria duradera, sin exponer a la persona a la enfermedad real ni a sus posibles complicaciones. El esquema de vacunación (cuántas dosis se requieren, con qué espaciamiento entre ellas) responde a la biología particular de cada vacuna: algunas necesitan varias dosis iniciales para establecer una memoria inmunitaria robusta, y refuerzos periódicos después, porque el nivel de anticuerpos circulantes o de células de memoria puede ir disminuyendo con el tiempo si no se refuerza deliberadamente.'
      ],
      foco:[
        '*Consideración clínica*: este tema conecta directamente con la prevención primaria -la vacunación es, en esencia, inmunología aplicada a la salud pública, usando el mismo principio de memoria inmunitaria de forma deliberada y segura.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 16.'
},

'inmunodeficiencias-primarias': {
  tema:'Inmunodeficiencias primarias',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:12,
  idea:'Cuando una pieza específica del sistema inmunitario falta desde el nacimiento por un defecto genético, el tipo de infecciones que sufre esa persona es, casi siempre, una pista clínica directa de CUÁL pieza específica es la que falta.',
  claves:['inmunodeficiencia primaria','agammaglobulinemia','inmunodeficiencia combinada grave'],
  sigue:'trasplante-inmunologia-rechazo',
  secciones:[
    {
      t:'Un defecto congénito en un componente específico del sistema',
      p:[
        'Una inmunodeficiencia primaria es un defecto genético, presente desde el nacimiento, que compromete a algún componente específico del sistema inmunitario -los linfocitos B, los linfocitos T, el complemento, o las células fagocíticas-, a diferencia de una inmunodeficiencia SECUNDARIA (adquirida después del nacimiento, por ejemplo por la infección por VIH ya mencionada en el tema de respuesta humoral y celular, o por ciertos tratamientos médicos inmunosupresores). La agammaglobulinemia es un ejemplo bien caracterizado de defecto específico de los linfocitos B: estos no logran madurar correctamente, y la persona queda sin capacidad de producir anticuerpos de ningún tipo, resultando particularmente vulnerable a infecciones BACTERIANAS recurrentes -precisamente el tipo de patógeno que la respuesta humoral, ya vista, combate con más eficacia en condiciones normales.'
      ],
      foco:[
        'Agammaglobulinemia = defecto de linfocitos B → sin anticuerpos → infecciones BACTERIANAS recurrentes (falla la rama humoral, que es la que combate mejor las bacterias extracelulares).'
      ]
    },
    {
      t:'Inmunodeficiencia combinada grave: cuando fallan varias ramas a la vez',
      p:[
        'La inmunodeficiencia combinada grave (SCID, por sus siglas en inglés) es, como su nombre indica, mucho más severa que un defecto aislado: afecta tanto a los linfocitos T como a los B (o afecta a los T de forma tan central que compromete indirectamente también a los B, que dependen de la ayuda de los linfocitos T CD4 ya vista en el tema de respuesta humoral y celular), dejando a la persona prácticamente sin defensa adaptativa alguna. Esto la vuelve vulnerable a prácticamente cualquier tipo de infección, incluidas infecciones oportunistas que normalmente no causarían enfermedad en una persona con inmunidad adaptativa intacta. Sin tratamiento (como un trasplante de médula ósea, que reemplaza el sistema hematopoyético e inmunitario defectuoso), la SCID es habitualmente mortal durante la infancia temprana.'
      ],
      foco:[
        'SCID = afecta simultáneamente a linfocitos T y B (defensa adaptativa prácticamente ausente) → vulnerable a CUALQUIER infección, incluidas oportunistas. Sin trasplante de médula ósea, habitualmente mortal en la infancia temprana.'
      ]
    },
    {
      t:'El patrón de infecciones como primera pista diagnóstica',
      p:[
        'En la práctica clínica, el patrón específico de infecciones que presenta un paciente es con frecuencia la primera pista diagnóstica hacia el tipo de inmunodeficiencia primaria subyacente, incluso antes de contar con estudios de laboratorio especializados. Infecciones bacterianas recurrentes (sobre todo por bacterias encapsuladas, ya vistas en el tema del bazo) sugieren un problema predominantemente de la rama humoral: linfocitos B o complemento defectuosos. Infecciones virales recurrentes, fúngicas, o por microorganismos oportunistas que normalmente no causarían enfermedad, sugieren en cambio un problema predominantemente de la inmunidad celular: linfocitos T defectuosos -el mismo principio de correlación entre la rama comprometida y el tipo de patógeno que predomina, ya visto de forma general en el tema de respuesta humoral y celular.'
      ],
      foco:[
        '*Consideración clínica*: infecciones bacterianas recurrentes → sospechar defecto HUMORAL (B/complemento). Infecciones virales, fúngicas u oportunistas recurrentes → sospechar defecto CELULAR (T). El patrón de infección orienta directamente hacia qué rama está fallando.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 21.'
},

'trasplante-inmunologia-rechazo': {
  tema:'Trasplante e inmunología del rechazo',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:13,
  idea:'Este tema retoma directamente el MHC ya visto: el rechazo de un trasplante no es un fallo del sistema inmunitario, es el sistema inmunitario haciendo exactamente lo que está diseñado para hacer -reconocer y atacar tejido genéticamente distinto al propio.',
  claves:['rechazo de trasplante','histocompatibilidad','inmunosupresor','enfermedad de injerto contra hospedero'],
  sigue:'tolerancia-inmunologica',
  secciones:[
    {
      t:'Por qué el cuerpo rechaza un órgano trasplantado',
      p:[
        'El rechazo de trasplante ocurre porque el sistema inmunitario del receptor reconoce las moléculas de MHC de las células del órgano donado -distintas a las propias, salvo entre gemelos idénticos, como ya se explicó en el tema de antígeno, anticuerpo y MHC- como material extraño, y monta una respuesta inmunitaria en su contra, con linfocitos T citotóxicos (CD8, ya vistos) atacando directamente al tejido trasplantado. Por esta razón, antes de realizar un trasplante se evalúa cuidadosamente la histocompatibilidad entre donante y receptor: cuanto más parecidas sean sus moléculas de MHC, menor será el riesgo de un rechazo particularmente agresivo, aunque ese riesgo nunca desaparece por completo, salvo entre gemelos idénticos genéticamente.'
      ],
      foco:[
        'El rechazo de trasplante = el MHC/HLA del órgano donado, distinto al del receptor, es reconocido como extraño → ataque por linfocitos T citotóxicos. La histocompatibilidad (similitud de MHC) reduce, pero no elimina, ese riesgo.'
      ]
    },
    {
      t:'Inmunosupresión: el costo necesario de reducir el rechazo',
      p:[
        'Para reducir el riesgo de rechazo, el receptor de un trasplante recibe tratamiento con fármacos inmunosupresores, que atenúan la respuesta inmunitaria en general -no solo la respuesta específicamente dirigida contra el órgano trasplantado-. Este beneficio tiene un costo real y bien conocido: esa misma atenuación general deja al paciente más vulnerable a infecciones de todo tipo, y a largo plazo, también a un riesgo aumentado de ciertos tipos de cáncer que el sistema inmunitario normalmente ayuda a vigilar y controlar mediante un proceso de vigilancia inmunológica continua contra células anómalas.'
      ],
      foco:[
        '*Consideración clínica*: la inmunosupresión reduce el rechazo, pero al atenuar la respuesta inmunitaria en general (no solo la dirigida contra el injerto), aumenta el riesgo de infecciones y de ciertos cánceres a largo plazo -un balance de riesgos que acompaña a todo trasplante.'
      ]
    },
    {
      t:'Enfermedad de injerto contra hospedero: el ataque en la dirección contraria',
      p:[
        'La enfermedad de injerto contra hospedero es la situación inversa al rechazo clásico, y ocurre específicamente en trasplantes que incluyen células inmunitarias vivas provenientes del donante -como un trasplante de médula ósea-. En vez de que el sistema inmunitario del RECEPTOR ataque al tejido trasplantado (rechazo clásico), son las células inmunitarias TRASPLANTADAS (provenientes del donante) las que reconocen al cuerpo completo del receptor como material extraño y lo atacan, pudiendo dañar seriamente la piel, el hígado y el tracto digestivo del receptor. Esta es la razón exacta por la que un trasplante de médula ósea (que trae consigo células inmunitarias vivas y funcionales del donante) tiene un riesgo particular -esta enfermedad específica- que un trasplante de un órgano sólido (como un riñón, sin ese componente inmunitario significativo incluido en el injerto) generalmente no tiene.'
      ],
      foco:[
        'Rechazo clásico = el receptor ataca al injerto. Enfermedad de injerto contra hospedero = las células del injerto (donante) atacan al receptor -riesgo específico de trasplantes que incluyen células inmunitarias vivas, como el de médula ósea.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 17.'
},

'tolerancia-inmunologica': {
  tema:'Tolerancia inmunológica',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:13,
  idea:'Este tema cierra el bloque de Inmunología explicando el mecanismo que, en circunstancias normales, evita que el sistema inmunitario más poderoso del cuerpo -capaz de destruir bacterias, virus y hasta órganos trasplantados enteros- termine atacando a los propios tejidos sanos.',
  claves:['tolerancia central','tolerancia periférica','selección negativa','anergia'],
  sigue:'historia-clinica-anamnesis',
  secciones:[
    {
      t:'Tolerancia central: eliminar lo peligroso antes de que salga a circular',
      p:[
        'La tolerancia central ocurre durante la maduración de los linfocitos, dentro de los órganos linfoides primarios (el timo para los linfocitos T, la médula ósea para los linfocitos B, ya vistos en el tema de células y órganos del sistema inmunitario). Ahí, mediante un proceso llamado selección negativa, los linfocitos inmaduros que reaccionan con demasiada fuerza contra antígenos propios del cuerpo son eliminados -o inactivados de forma permanente- ANTES de completar su maduración y salir a circular por el organismo. Es, en esencia, un control de calidad interno que descarta a las células potencialmente más peligrosas para el propio cuerpo antes de que puedan causar cualquier daño real, un filtro que ocurre completamente "detrás de escena", sin que el resto del sistema inmunitario llegue siquiera a enterarse de que existieron esos clones peligrosos.'
      ],
      foco:[
        'Tolerancia central = selección negativa, ocurre en órganos linfoides PRIMARIOS (timo para T, médula ósea para B), elimina linfocitos autorreactivos ANTES de que salgan a circular.'
      ]
    },
    {
      t:'Tolerancia periférica: la segunda línea de seguridad, fuera del timo y la médula',
      p:[
        'Ningún sistema de selección es absolutamente perfecto: inevitablemente, algunos linfocitos autorreactivos logran escapar de la selección negativa central y sí llegan a circular libremente por el cuerpo. La tolerancia periférica es el conjunto de mecanismos de respaldo que mantienen controlados a esos linfocitos ya "escapados", una vez que están fuera de los órganos linfoides primarios. Uno de esos mecanismos es la anergia: un estado de inactivación funcional en el que el linfocito reconoce correctamente a su antígeno propio, pero no logra activarse por completo porque le falta una segunda señal de activación necesaria -quedando así efectivamente neutralizado, sin necesidad de ser eliminado físicamente como ocurre en la selección negativa central.'
      ],
      foco:[
        'Tolerancia periférica = mecanismos de respaldo (como la anergia) que controlan a los linfocitos autorreactivos que escaparon de la selección negativa central y ya circulan por el cuerpo.'
      ]
    },
    {
      t:'Cuando la tolerancia falla: la autoinmunidad como consecuencia directa',
      p:[
        'Cuando estos mecanismos de tolerancia -tanto la central como la periférica- fallan de forma clínicamente relevante, el resultado directo es precisamente la autoinmunidad ya estudiada en el tema de hipersensibilidad y autoinmunidad: linfocitos autorreactivos que lograron escapar de todos los controles de seguridad y sí consiguieron activarse plenamente contra los propios tejidos del cuerpo. Este tema conecta, en un solo concepto unificador, buena parte de lo estudiado a lo largo de todo el bloque de Inmunología: cuando la tolerancia funciona correctamente, el sistema distingue con precisión lo propio de lo extraño; cuando falla, aparece la autoinmunidad; y cuando se induce deliberadamente mediante fármacos inmunosupresores (como ya se vio en el tema de trasplante), se logra que un órgano genéticamente distinto -un trasplante- pueda sobrevivir en el cuerpo del receptor sin ser destruido.'
      ],
      foco:[
        '*Consideración clínica*: la tolerancia funcionando bien = distingue propio de extraño. Tolerancia fallando = autoinmunidad. Tolerancia inducida deliberadamente con fármacos = permite que sobreviva un trasplante -un mismo concepto explica los tres escenarios.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 15.'
}

});
