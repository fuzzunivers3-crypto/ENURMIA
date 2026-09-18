/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 2)
   Termina de cubrir SEMIOLOGIA CLINICA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'examen-fisico-general': {
  tema:'Examen físico general',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:7,
  idea:'Antes de escuchar el corazón o palpar el abdomen, existen cuatro técnicas básicas que se repiten en cada parte del examen físico, y el orden en que se aplican no es arbitrario: cada una puede alterar lo que la siguiente encuentra.',
  claves:['inspección','palpación','percusión','auscultación','signos vitales'],
  sigue:'semiologia-dolor',
  secciones:[
    {
      t:'Las cuatro técnicas, y por qué el orden importa',
      p:[
        'El examen físico se construye sobre cuatro técnicas básicas: *inspección* (observar, antes de tocar nada), *palpación* (usar las manos para sentir textura, temperatura, tamaño, sensibilidad), *percusión* (golpear suavemente para generar un sonido que revela si hay aire, líquido o tejido sólido debajo) y *auscultación* (escuchar, generalmente con estetoscopio, los sonidos internos del cuerpo).',
        'El orden habitual es inspección, palpación, percusión y auscultación —salvo en el abdomen, donde la auscultación se hace ANTES de palpar o percutir, porque tocar el abdomen puede alterar artificialmente los ruidos intestinales que se quieren escuchar. Esta excepción, lejos de ser un capricho, ilustra la regla general: el orden de las técnicas busca no contaminar lo que la siguiente técnica va a medir.'
      ]
    },
    {
      t:'Los signos vitales: el primer dato objetivo de cualquier examen',
      p:[
        'Los *signos vitales* (frecuencia cardíaca, frecuencia respiratoria, presión arterial, temperatura, y con frecuencia la saturación de oxígeno) son, casi siempre, el primer dato objetivo que se recoge en cualquier evaluación clínica, precisamente porque dan una idea rápida de qué tan estable está el paciente antes de continuar con un examen más detallado.'
      ],
      foco:[
        'Consideración clínica: un examen físico "completo" no significa examinar todo el cuerpo con el mismo nivel de detalle en cada consulta: se ajusta según el motivo de consulta, pero los signos vitales casi nunca se omiten, porque orientan de inmediato sobre la urgencia del caso.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 2.'
},

'semiologia-dolor': {
  tema:'Semiología del dolor',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:7,
  idea:'Este tema retoma, desde la clínica, lo ya visto en Fisiología I sobre nocicepción: entender que el dolor visceral y el somático viajan por vías distintas explica directamente por qué un dolor puede sentirse en un sitio distinto de donde realmente está el problema.',
  claves:['dolor somático','dolor visceral','irradiación','escala de dolor','dolor referido'],
  sigue:'semiologia-respiratoria',
  secciones:[
    {
      t:'Dolor somático y visceral: dos calidades distintas',
      p:[
        'El *dolor somático* proviene de estructuras como la piel, los músculos o las articulaciones, inervadas densamente: suele ser bien localizado, agudo o punzante, y el paciente puede señalar con precisión dónde le duele. El *dolor visceral* proviene de los órganos internos, con una inervación sensitiva mucho menos densa y precisa: suele ser difuso, sordo, difícil de localizar con exactitud, y a menudo se acompaña de síntomas autonómicos (náuseas, sudoración), reflejando la inervación autonómica de las vísceras ya vista en Anatomía II.'
      ]
    },
    {
      t:'Irradiación y dolor referido',
      p:[
        'La *irradiación* es cuando el dolor se extiende desde su origen hacia otra zona siguiendo, generalmente, el trayecto de un nervio (como el dolor de una hernia discal lumbar que se irradia por la pierna, ya visto en el tema de dermatomas). El *dolor referido* es distinto y más sutil: el dolor se SIENTE en una zona alejada del órgano realmente afectado, porque las fibras sensitivas de ese órgano y las de la piel de esa zona convergen en el mismo segmento de la médula espinal, y el cerebro no logra distinguir con precisión de cuál de las dos viene la señal.',
        'Ejemplo trabajado: el dolor de un infarto del corazón puede sentirse en el brazo izquierdo o la mandíbula, no solo en el pecho, porque las fibras sensitivas del corazón convergen en la médula con las fibras sensitivas de esas zonas de piel, aunque el corazón mismo esté físicamente lejos de ahí.'
      ],
      foco:[
        'La *escala de dolor* (típicamente de 0 a 10) es una herramienta simple pero clínicamente útil para cuantificar la intensidad subjetiva del dolor y, sobre todo, para vigilar objetivamente si un tratamiento lo está reduciendo con el tiempo.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 3.'
},

'semiologia-respiratoria': {
  tema:'Semiología respiratoria',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:8,
  idea:'Cada sonido anormal que se escucha con el estetoscopio sobre el pulmón tiene un mecanismo físico preciso detrás, y reconocer ese mecanismo —no solo el nombre del sonido— es lo que permite deducir qué está pasando dentro del pulmón sin necesitar todavía una radiografía.',
  claves:['disnea','tos','estertores','sibilancias','matidez','murmullo vesicular'],
  sigue:'semiologia-cardiovascular',
  secciones:[
    {
      t:'Los síntomas: disnea y tos',
      p:[
        'La *disnea* es la sensación subjetiva de falta de aire o dificultad para respirar, y puede tener origen respiratorio, cardíaco o de otro sistema, así que por sí sola no localiza el problema; su forma de aparecer (en reposo, con el esfuerzo, al acostarse) sí orienta más. La *tos* es un reflejo de defensa de la vía aérea; su carácter (seca o productiva, es decir con expectoración) y su duración (aguda o crónica) ayudan a orientar la causa.'
      ]
    },
    {
      t:'Los signos: lo que se escucha y lo que se percute',
      p:[
        'El *murmullo vesicular* es el sonido respiratorio normal, suave y continuo, que se ausculta sobre el pulmón sano. Los *estertores* (crepitantes) son sonidos discontinuos, como el crujido de un celofán o de pelo frotado cerca del oído, producidos cuando el aire abre bruscamente pequeñas vías aéreas o alvéolos que estaban colapsados o llenos de líquido —típicos, por ejemplo, de una neumonía o de líquido acumulado en el pulmón. Las *sibilancias* son sonidos continuos, musicales, de tono agudo, producidos cuando el aire pasa forzado a través de una vía aérea estrechada —el sonido característico del asma o de una obstrucción bronquial.',
        'La *matidez* a la percusión (un sonido apagado, en vez del sonido resonante normal del pulmón con aire) sugiere que hay algo sólido o líquido en el lugar donde debería haber aire —como líquido acumulado en el espacio pleural (derrame pleural, retomando la anatomía de la pleura ya vista en Anatomía II) o una consolidación pulmonar por neumonía.'
      ],
      foco:[
        'Consideración clínica: estertores sugieren líquido o colapso alveolar (neumonía, edema pulmonar); sibilancias sugieren vía aérea estrechada (asma, broncoespasmo). Distinguir uno de otro por el sonido, antes de cualquier estudio, ya estrecha bastante las posibilidades diagnósticas.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 15.'
},

'semiologia-cardiovascular': {
  tema:'Semiología cardiovascular',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:8,
  idea:'Un soplo cardíaco no es, por sí solo, sinónimo de enfermedad grave: es simplemente turbulencia audible en el flujo de sangre, y puede ser tan inocente como el ruido del agua al pasar rápido por una tubería ancha, o señalar una válvula realmente dañada.',
  claves:['soplo cardíaco','pulso','ingurgitación yugular','edema','ruidos cardíacos'],
  sigue:'semiologia-abdominal',
  secciones:[
    {
      t:'Los ruidos cardíacos normales y el soplo',
      p:[
        'Los *ruidos cardíacos* normales (el primero y el segundo, correspondientes al cierre de las válvulas auriculoventriculares y semilunares respectivamente, ya vistas en Anatomía II y Fisiología II) forman el "lub-dub" característico de cada latido. Un *soplo cardíaco* es un sonido adicional, más prolongado, causado por flujo turbulento de sangre —puede deberse a una válvula estrecha (que dificulta el paso de sangre hacia adelante) o insuficiente (que deja retroceder sangre hacia atrás), pero también puede ser un soplo "inocente" o funcional, sin ninguna anormalidad estructural, frecuente sobre todo en niños y en estados de flujo aumentado (como el embarazo o la fiebre).'
      ]
    },
    {
      t:'Signos periféricos: pulso, yugulares y edema',
      p:[
        'El *pulso* (palpado en las arterias ya vistas en Anatomía I: radial, femoral, entre otras) informa sobre la frecuencia, el ritmo y la amplitud del latido cardíaco transmitido a la periferia. La *ingurgitación yugular* (la distensión visible de la vena yugular en el cuello, ya vista en Anatomía II) es un signo indirecto y útil para estimar la presión venosa central: cuando el corazón derecho no logra bombear con eficacia la sangre que le llega, esta se acumula hacia atrás y distiende las venas del cuello, visibles incluso sin ningún instrumento.',
        'El *edema* (acumulación de líquido en los tejidos, típicamente visible primero en las piernas por efecto de la gravedad) puede tener múltiples causas, pero en el contexto cardiovascular sugiere que el corazón no está bombeando con la eficacia suficiente para mantener la presión y el volumen circulante en equilibrio, un signo clásico de insuficiencia cardíaca ya vista en Fisiopatología.'
      ],
      foco:[
        'Estos tres signos periféricos (ingurgitación yugular, edema, y ciertos hallazgos pulmonares como los estertores ya vistos) juntos son la base del examen físico que orienta hacia insuficiencia cardíaca, incluso antes de cualquier estudio de imagen o laboratorio.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 13.'
},

'semiologia-abdominal': {
  tema:'Semiología abdominal',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:8,
  idea:'El signo de rebote es, probablemente, la maniobra más temida por cualquier estudiante en su primer examen abdominal, y con razón: es la forma clásica de detectar, con solo las manos, que el peritoneo está inflamado.',
  claves:['ruidos hidroaéreos','defensa abdominal','signo de rebote','hepatomegalia','ascitis'],
  sigue:'semiologia-neurologica-basica',
  secciones:[
    {
      t:'Auscultar primero: los ruidos hidroaéreos',
      p:[
        'Como ya se mencionó en el examen físico general, el abdomen se ausculta ANTES de palpar, escuchando los *ruidos hidroaéreos*: los sonidos normales del peristaltismo intestinal (ya visto en Fisiología II) moviendo aire y líquido por el tubo digestivo. Su ausencia sugiere que el intestino dejó de moverse (íleo); su aumento marcado puede sugerir una obstrucción intestinal con el intestino tratando de vencerla.'
      ]
    },
    {
      t:'Signos de irritación peritoneal',
      p:[
        'La *defensa abdominal* es la contracción involuntaria de los músculos de la pared abdominal cuando se palpa, un reflejo protector frente a un peritoneo inflamado o irritado debajo. El *signo de rebote* (o de Blumberg) se busca presionando lentamente el abdomen y soltando de golpe: si el dolor es MÁS intenso al soltar que al presionar, eso sugiere irritación peritoneal (peritonitis) —el peritoneo, al moverse bruscamente con la descompresión súbita, duele más que con la presión sostenida.'
      ]
    },
    {
      t:'Palpar órganos y detectar líquido',
      p:[
        'La *hepatomegalia* es el aumento de tamaño del hígado, detectable por palpación cuando su borde se extiende más allá del reborde costal de lo esperado. La *ascitis* es la acumulación anormal de líquido dentro de la cavidad peritoneal, que se puede sospechar por la distensión abdominal generalizada y confirmar con maniobras específicas de percusión (matidez desplazable con los cambios de posición del paciente).'
      ],
      foco:[
        'Consideración clínica: el signo de rebote positivo, junto con defensa abdominal marcada y dolor intenso, es uno de los hallazgos que más urgentemente orienta hacia la necesidad de una evaluación quirúrgica: sugiere que el peritoneo está inflamado, y muchas causas de eso (como una apendicitis perforada) no admiten demora.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 17.'
},

'semiologia-neurologica-basica': {
  tema:'Semiología neurológica básica',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:8,
  idea:'Cada uno de los hallazgos de este examen —reflejos, fuerza, un signo de Babinski— tiene su explicación completa en la Neuroanatomía que se estudia en paralelo este mismo cuatrimestre: la semiología neurológica es, en gran medida, aplicar esa anatomía con las manos.',
  claves:['pares craneales','reflejos osteotendinosos','fuerza muscular','signo de Babinski','marcha'],
  sigue:'semiologia-osteoarticular',
  secciones:[
    {
      t:'Pares craneales, fuerza y reflejos',
      p:[
        'El examen neurológico básico evalúa, de forma sistemática, los doce *pares craneales* (ya vistos en Anatomía II), la *fuerza muscular* (graduada habitualmente en una escala de 0 a 5, donde 5 es fuerza normal y 0 es ausencia total de contracción), y los *reflejos osteotendinosos* (como el reflejo rotuliano, el reflejo miotático ya visto en Fisiología I), que exploran la integridad del arco reflejo espinal correspondiente a cada nivel.',
        'Un reflejo AUSENTE o disminuido sugiere un problema en alguna parte del arco reflejo (el nervio periférico, la raíz, o la médula en ese nivel). Un reflejo EXALTADO (más intenso de lo normal) sugiere, paradójicamente, un problema distinto: la pérdida de la inhibición normal que ejercen las vías descendentes del cerebro sobre ese reflejo, típico de una lesión de la neurona motora superior.'
      ]
    },
    {
      t:'El signo de Babinski y la evaluación de la marcha',
      p:[
        'El *signo de Babinski* se obtiene al estimular el borde externo de la planta del pie: normalmente, en un adulto, los dedos se flexionan hacia abajo; si en cambio el dedo gordo se extiende hacia arriba (con los demás dedos abriéndose en abanico), eso es un signo de Babinski positivo, y sugiere una lesión de la vía piramidal (la vía corticoespinal ya vista en Neuroanatomía) —es normal, en cambio, en el lactante, cuya vía piramidal todavía no ha terminado de mielinizarse por completo.',
        'La evaluación de la *marcha* (cómo camina el paciente) es, con frecuencia, la parte más subestimada y a la vez más reveladora del examen neurológico: distintos patrones de marcha anormal (arrastrando el pie, con pasos cortos y rígidos, tambaleante) apuntan hacia problemas en sistemas neurológicos muy distintos entre sí —desde el cerebelo hasta la médula espinal o los propios nervios periféricos.'
      ],
      foco:[
        'El signo de Babinski positivo en un adulto es uno de los pocos hallazgos del examen físico que casi siempre significa lo mismo (lesión de la vía piramidal) sin importar demasiado la causa exacta: es un signo muy específico, aunque no diga por sí solo dónde está la lesión.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 20.'
},

'semiologia-osteoarticular': {
  tema:'Semiología osteoarticular',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:6,
  idea:'Examinar una articulación bien hecha sigue la misma lógica que examinar cualquier otro sistema: primero ver, después tocar, y solo entonces mover, buscando siempre comparar con el lado sano del propio paciente como referencia.',
  claves:['rango de movimiento','derrame articular','signo de Tinel','deformidad','crepitación'],
  sigue:'piel-faneras',
  secciones:[
    {
      t:'Rango de movimiento y signos de inflamación articular',
      p:[
        'El *rango de movimiento* de una articulación se evalúa tanto de forma activa (el paciente mueve la articulación por sí mismo) como pasiva (el examinador la mueve), comparando siempre con el lado contralateral sano del mismo paciente, que sirve de referencia individual más confiable que un rango "normal" genérico de libro. Un *derrame articular* (líquido acumulado dentro de la cápsula articular, ya vista en Anatomía I) se detecta por aumento de volumen, a veces con sensación de fluctuación a la palpación, y puede acompañar a una inflamación, una infección o un traumatismo articular.',
        'Una *deformidad* visible (un eje anormal, una articulación desplazada de su posición habitual) y la *crepitación* (una sensación o sonido de roce, como arena entre dos superficies, al mover la articulación, típica del desgaste del cartílago articular ya visto en Histología) completan la evaluación básica de cualquier articulación.'
      ]
    },
    {
      t:'Una maniobra específica: el signo de Tinel',
      p:[
        'El *signo de Tinel* es una maniobra de provocación específica: se percute suavemente sobre el trayecto de un nervio en un punto de posible compresión (el ejemplo clásico es sobre el nervio mediano en la muñeca, en el túnel carpiano ya visto en Anatomía I), y si eso reproduce una sensación de hormigueo hacia la zona que ese nervio inerva, el signo es positivo, sugiriendo compresión de ese nervio en ese punto.'
      ],
      foco:[
        'Consideración práctica: en cualquier examen osteoarticular, comparar siempre con el lado sano del mismo paciente es más confiable que compararlo contra un "rango normal" de referencia general, porque la movilidad basal varía mucho de una persona a otra.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 21.'
},

'piel-faneras': {
  tema:'Piel y faneras',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:7,
  idea:'Describir una lesión de piel con precisión —no solo "una mancha"— es lo que permite comunicar un hallazgo entre colegas sin necesitar una foto, siguiendo la misma lógica de vocabulario preciso ya vista en la anatomía de superficie.',
  claves:['lesión primaria','lesión secundaria','ictericia','cianosis','palidez'],
  sigue:'semiologia-ganglionar-adenopatias',
  secciones:[
    {
      t:'Lesiones primarias y secundarias',
      p:[
        'Una *lesión primaria* es la que aparece directamente por el proceso patológico, sin haber sido modificada: una mácula (cambio de color plano, sin relieve), una pápula (elevación pequeña y sólida), una vesícula (elevación pequeña llena de líquido claro), entre otras. Una *lesión secundaria* es el resultado de la evolución de una lesión primaria, o de manipularla: una costra (tras romperse una vesícula), una escama (piel que se descama), una úlcera (pérdida de tejido más profunda).',
        'Describir correctamente si una lesión es primaria o secundaria, junto con su tamaño, color, forma y distribución sobre el cuerpo, es lo que permite a otro clínico "ver" la lesión sin haberla examinado directamente, una habilidad especialmente central en dermatología pero útil en cualquier examen de piel.'
      ]
    },
    {
      t:'Cambios de color de toda la piel',
      p:[
        'La *ictericia* (ya vista en Bioquímica II, al hablar del metabolismo de la bilirrubina), la *cianosis* (coloración azulada, típicamente de labios y dedos, por hemoglobina insuficientemente oxigenada, retomando la curva de disociación de la hemoglobina de Fisiología II) y la *palidez* (por anemia o por vasoconstricción, retomando el tema de sangre y hemostasia) son tres cambios de coloración generalizada de la piel, cada uno con una explicación fisiológica o bioquímica ya estudiada en otro bloque, que aquí se aplica directamente a la exploración clínica.'
      ],
      foco:[
        'Este tema es un buen ejemplo de cómo la semiología no es un bloque aislado: cada signo que se describe aquí (ictericia, cianosis, palidez) tiene un mecanismo completo explicado en Bioquímica o Fisiología, y entender ese mecanismo es lo que convierte "veo una mancha amarilla" en "sospecho un problema con la bilirrubina".'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 5.'
},

'semiologia-ganglionar-adenopatias': {
  tema:'Semiología ganglionar y adenopatías',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:6,
  idea:'Las características físicas de un ganglio agrandado —no solo el hecho de estar agrandado— son, en la práctica, lo que más orienta entre una causa benigna (una infección cercana) y una que preocupa más (un proceso maligno).',
  claves:['adenopatía','ganglio duro','ganglio doloroso','cadena ganglionar'],
  sigue:'registro-historia-clinica-problemas',
  secciones:[
    {
      t:'Qué características describir en una adenopatía',
      p:[
        'Una *adenopatía* es un ganglio linfático (ya visto en Anatomía I y en el sistema linfático) que aumenta de tamaño de forma perceptible al examen físico. Al describirla, importa mucho más que solo su tamaño: su consistencia (blando, firme o *duro* como piedra), si es *doloroso* o no a la palpación, si está adherido a estructuras vecinas o se mueve libremente bajo la piel, y si es único o forma parte de varios ganglios agrandados en la misma zona.',
        'Un patrón clásico y útil: un ganglio blando, doloroso y móvil sugiere más frecuentemente una causa inflamatoria o infecciosa reciente (el ganglio está reaccionando activamente, filtrando la infección, como se vio en Inmunología); un ganglio duro, no doloroso, fijo a planos profundos, sugiere más preocupación por un proceso maligno (infiltración tumoral, ya sea un cáncer del propio ganglio o metástasis de otro sitio).'
      ]
    },
    {
      t:'Localización: qué drena cada cadena',
      p:[
        'La *cadena ganglionar* donde se encuentra la adenopatía orienta directamente hacia el territorio que esa cadena drena: una adenopatía axilar apunta hacia el brazo o la mama (ya visto en Anatomía II); una cervical, hacia la cabeza, el cuello o la faringe; una inguinal, hacia el miembro inferior o los genitales.'
      ],
      foco:[
        'Este tema retoma directamente el drenaje linfático ya estudiado en Anatomía I y II: examinar una adenopatía sin pensar en qué territorio drena esa cadena es perder la mitad de la información que ese hallazgo puede ofrecer.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 8.'
},

'registro-historia-clinica-problemas': {
  tema:'Registro e historia clínica orientada por problemas',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:6,
  idea:'Este tema cierra el bloque de Semiología Clínica mostrando cómo se ORGANIZA, por escrito, todo lo recogido en la anamnesis y el examen físico ya vistos, de una forma que cualquier otro miembro del equipo de salud pueda seguir sin ambigüedad.',
  claves:['SOAP','historia orientada por problemas','evolución clínica','nota de ingreso'],
  sigue:null,
  secciones:[
    {
      t:'El formato SOAP',
      p:[
        'El formato *SOAP* organiza cada nota clínica en cuatro partes: Subjetivo (lo que el paciente cuenta, retomando la anamnesis ya vista), Objetivo (los hallazgos del examen físico y de los estudios, ya vistos en todos los temas anteriores de este bloque), Análisis (o Assessment: la interpretación clínica de esos datos, el diagnóstico o la lista de diagnósticos diferenciales considerados) y Plan (qué se va a hacer: más estudios, tratamiento, seguimiento). Este formato se repite, de forma abreviada, en cada *evolución clínica* diaria de un paciente hospitalizado, dando continuidad y trazabilidad a su atención.'
      ]
    },
    {
      t:'Historia orientada por problemas',
      p:[
        'La *historia orientada por problemas* organiza el expediente completo de un paciente alrededor de una lista explícita de sus problemas de salud (activos y resueltos), en vez de organizarlo cronológicamente sin más: cada nota puede referirse a un problema específico de esa lista, lo que facilita seguir la evolución de cada condición por separado en un paciente con varias enfermedades a la vez.',
        'La *nota de ingreso* es el documento inicial y más completo, escrito al momento de hospitalizar a un paciente, que reúne la anamnesis completa, el examen físico completo, y el plan inicial, sirviendo de punto de referencia para todas las evoluciones diarias que se escribirán después.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Semiología Clínica devolviéndolo a su propósito final: toda la anamnesis, el examen físico y los signos que se estudiaron en los temas anteriores solo tienen valor real si quedan registrados de una forma clara, organizada y que otro profesional de salud pueda entender e interpretar sin ambigüedad.'
      ]
    }
  ],
  ref:'Argente y Álvarez, Semiología Médica, cap. 2.'
},

'semiologia-urinaria': {
  tema:'Semiología urinaria',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:6,
  idea:'Los síntomas urinarios suelen describirse con palabras técnicas muy parecidas entre sí (disuria, poliuria, oliguria), y confundirlas en la práctica es un error frecuente que puede orientar mal el diagnóstico desde el principio.',
  claves:['disuria','hematuria','poliuria','oliguria','puñopercusión renal'],
  sigue:null,
  secciones:[
    {
      t:'Síntomas urinarios: distinguir bien los términos',
      p:[
        'La *disuria* es dolor o ardor al orinar, típicamente por irritación o infección de la vía urinaria baja (uretra, vejiga). La *hematuria* es la presencia de sangre en la orina, visible a simple vista (macroscópica) o detectable solo por laboratorio (microscópica), y su origen puede estar en cualquier punto del tracto urinario, desde el riñón hasta la uretra. La *poliuria* es un volumen de orina anormalmente AUMENTADO en 24 horas; la *oliguria* es un volumen anormalmente DISMINUIDO —son términos opuestos, y confundirlos invierte por completo la interpretación clínica del caso.'
      ]
    },
    {
      t:'Una maniobra específica: la puñopercusión renal',
      p:[
        'La *puñopercusión renal* es una maniobra del examen físico donde se golpea suavemente con el puño la zona lumbar, sobre la localización del riñón (ya vista en Anatomía II): si esto provoca dolor intenso, sugiere un proceso inflamatorio o infeccioso que compromete al riñón o a su cápsula (como una pielonefritis), a diferencia de una infección urinaria baja limitada a la vejiga, que típicamente no da ese dolor específico.'
      ],
      foco:[
        'Consideración clínica: distinguir por la clínica una infección urinaria baja (disuria, sin fiebre alta, puñopercusión negativa) de una alta (con fiebre, dolor lumbar, puñopercusión positiva) cambia directamente la conducta, porque la segunda compromete al riñón y generalmente requiere un manejo más agresivo.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 18.'
},

'semiologia-endocrina': {
  tema:'Semiología endocrina',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:6,
  idea:'Muchos signos endocrinos son visibles a simple vista, sin necesitar ningún instrumento, porque las hormonas afectan estructuras muy expuestas —la piel, los ojos, la distribución de la grasa corporal— antes incluso de pedir un solo análisis de laboratorio.',
  claves:['bocio','exoftalmos','mixedema','acantosis nigricans','hábito cushingoide'],
  sigue:null,
  secciones:[
    {
      t:'Signos tiroideos: bocio, exoftalmos y mixedema',
      p:[
        'El *bocio* es el aumento visible de tamaño de la glándula tiroides (ya vista en Anatomía II), que puede acompañar tanto a un exceso como a un déficit de hormona tiroidea, o incluso ocurrir con función tiroidea normal, según la causa. El *exoftalmos* (protrusión anormal de los globos oculares hacia afuera) es un signo específico asociado a ciertas formas de hipertiroidismo autoinmune, por inflamación de los tejidos detrás del ojo. El *mixedema* es una hinchazón particular de la piel, de consistencia pastosa y que no deja fóvea al presionar (a diferencia del edema común ya visto en semiología cardiovascular), típica del hipotiroidismo severo, por acumulación de sustancias específicas en la dermis.'
      ]
    },
    {
      t:'Otros signos endocrinos visibles',
      p:[
        'La *acantosis nigricans* es un oscurecimiento y engrosamiento aterciopelado de la piel, típicamente en el cuello y las axilas, asociado con frecuencia a resistencia a la insulina (retomando el tema ya visto en Fisiopatología de la diabetes mellitus). El *hábito cushingoide* describe un conjunto de cambios corporales característicos del exceso crónico de cortisol (ya visto en Bioquímica II): redistribución de la grasa hacia la cara (cara "de luna llena") y el tronco, con adelgazamiento relativo de los brazos y piernas, entre otros rasgos.'
      ],
      foco:[
        'Este tema muestra, de forma muy directa, cómo la inspección simple —sin ningún instrumento— puede orientar hacia un trastorno hormonal específico, siempre que se sepa qué buscar y por qué aparece cada signo.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 6.'
},

'interpretacion-signos-vitales': {
  tema:'Interpretación de signos vitales',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:7,
  idea:'Un signo vital anormal aislado dice poco; el patrón COMBINADO de varios signos vitales es lo que realmente cuenta una historia clínica coherente sobre lo que le está pasando al paciente en ese momento.',
  claves:['taquicardia','bradicardia','taquipnea','hipertensión','fiebre'],
  sigue:null,
  secciones:[
    {
      t:'Cada signo vital, su rango normal y sus desviaciones',
      p:[
        'La *taquicardia* (frecuencia cardíaca por encima de lo normal) y la *bradicardia* (por debajo) reflejan, entre otras causas, la actividad del sistema nervioso autónomo sobre el corazón, ya visto en Fisiología I y II. La *taquipnea* (frecuencia respiratoria aumentada) puede reflejar tanto un problema respiratorio directo como una respuesta compensatoria (por ejemplo, ante una acidosis metabólica, retomando la fisiopatología del equilibrio ácido-base ya vista). La *hipertensión* (presión arterial elevada, ya vista en Fisiología II) y la *fiebre* (ya vista en el tema de regulación de la temperatura corporal) completan el conjunto habitual de signos vitales.'
      ]
    },
    {
      t:'Leer el patrón combinado, no cada signo por separado',
      p:[
        'Ejemplo trabajado: un paciente con fiebre, taquicardia y taquipnea juntas sugiere, de forma coherente, un cuadro infeccioso con respuesta inflamatoria sistémica (retomando el SIRS ya visto en Fisiopatología) —cada signo por separado podría tener otras explicaciones, pero la combinación de los tres, presentándose juntos, cuenta una historia mucho más específica que cualquiera de ellos de forma aislada.',
        'Este tema conecta directamente el examen físico general (donde se introdujeron los signos vitales) con toda la fisiología y fisiopatología ya estudiadas: interpretar bien un signo vital anormal exige entender el mecanismo fisiológico detrás de ese número, no solo memorizar el rango normal.'
      ],
      foco:[
        'Regla práctica: ante cualquier combinación de signos vitales anormales, preguntarse primero qué mecanismo fisiológico único podría explicar TODOS a la vez, en vez de buscar una explicación separada para cada uno.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 2.'
},

'historia-clinica-situaciones-especiales': {
  tema:'Historia clínica en situaciones especiales',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:6,
  idea:'Todo lo aprendido en este bloque asume que el paciente puede hablar y responder con claridad. Este último tema aborda qué hacer cuando esa condición básica no se cumple.',
  claves:['paciente inconsciente','entrevista en urgencias','heteroanamnesis'],
  sigue:null,
  secciones:[
    {
      t:'Cuando el paciente no puede contar su propia historia',
      p:[
        'Ante un *paciente inconsciente*, la anamnesis tradicional (ya vista al inicio de este bloque) simplemente no es posible, y la evaluación tiene que apoyarse mucho más en el examen físico objetivo y en fuentes de información alternativas: la *heteroanamnesis* es, precisamente, obtener la historia clínica a través de un tercero (un familiar, un acompañante, personal de emergencias que trasladó al paciente), en vez de directamente del paciente mismo.',
        'En estas situaciones, ciertos datos básicos se vuelven prioritarios y se buscan de forma activa: identificación del paciente, medicamentos que usa, alergias conocidas, y las circunstancias en que fue encontrado —información que, aunque limitada, puede ser decisiva para el manejo inmediato.'
      ]
    },
    {
      t:'La entrevista en un contexto de urgencia',
      p:[
        'La *entrevista en urgencias* tiene un ritmo distinto al de una consulta programada: prioriza obtener rápidamente la información que cambia el manejo inmediato (el motivo de consulta y los datos de mayor riesgo) por encima de la exploración exhaustiva y ordenada de cada antecedente, que puede completarse después, una vez que la situación esté estabilizada.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Semiología Clínica recordando algo que atraviesa a todos los temas anteriores: la estructura ideal de la historia clínica (anamnesis completa, examen físico sistemático) es el punto de partida, pero la práctica real exige adaptarla según la situación, sin perder de vista la información esencial.'
      ]
    }
  ],
  ref:'Argente y Álvarez, Semiología Médica, cap. 3.'
}

});
