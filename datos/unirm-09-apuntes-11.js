/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 11)
   SEMIOLOGIA CLINICA reescrita al estandar extenso. Mismas 15
   claves de objeto que ya existian, repartidas entre
   unirm-09-apuntes.js (1) y unirm-09-apuntes-2.js (14).
   Object.assign las sobrescribe sin romper "Leer el tema".

   Se repara un bug real de la cadena `sigue`: los temas 11 a 14
   ('registro-historia-clinica-problemas', 'semiologia-urinaria',
   'semiologia-endocrina', 'interpretacion-signos-vitales') tenian
   los cuatro `sigue:null`, cortando la cadena a partir de la mitad
   del bloque. Ahora siguen el orden exacto del Temario. El ultimo
   tema del bloque ('historia-clinica-situaciones-especiales') ahora
   encadena hacia 'lesion-celular-reversible-irreversible', primer
   tema de Anatomia Patologica I, la materia siguiente de este mismo
   cuatrimestre -arrancando asi la cadena "Leer el tema" de todo el
   cuatrimestre 9.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'historia-clinica-anamnesis': {
  tema:'Historia clínica: anamnesis',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:13,
  idea:'La anamnesis bien hecha resuelve, sola, entre el 70 y el 80% de los diagnósticos, antes de tocar al paciente y antes de pedir un solo estudio. Es la herramienta más rentable de toda la medicina y la que menos cuesta usar.',
  claves:['anamnesis','motivo de consulta','enfermedad actual','antecedentes','interrogatorio dirigido'],
  sigue:'examen-fisico-general',
  secciones:[
    {
      t:'La estructura que ordena cualquier entrevista',
      p:[
        'La anamnesis es la parte de la historia clínica que se construye a partir de lo que el paciente cuenta. Tiene una estructura fija que conviene interiorizar hasta que salga sola: primero el motivo de consulta, la razón por la que el paciente vino, idealmente en sus propias palabras ("me duele el pecho", no "posible síndrome coronario agudo" -eso ya es una interpretación de quien entrevista, no lo que el paciente dijo). Después la enfermedad actual (o historia de la enfermedad actual), que es el desarrollo cronológico y detallado de ese motivo de consulta: cuándo empezó, cómo, qué lo alivia, qué lo empeora, qué otros síntomas lo acompañan.',
        'Después vienen los antecedentes: personales patológicos (enfermedades previas, cirugías, alergias, medicamentos), personales no patológicos (hábitos, alimentación, ejercicio) y familiares (enfermedades en la familia, relevantes sobre todo si hay un componente hereditario). Este orden no es un formalismo burocrático: cada bloque responde a una pregunta distinta, y saltarse uno es dejar un hueco real en la información que después puede costar un diagnóstico.'
      ],
      foco:[
        'El motivo de consulta se escribe en las palabras textuales del paciente. La enfermedad actual desarrolla cronológicamente ese motivo. Los antecedentes se dividen en personales patológicos, no patológicos y familiares -cada bloque responde una pregunta distinta.'
      ]
    },
    {
      t:'El interrogatorio dirigido: no dejar que el paciente adivine qué preguntarle',
      p:[
        'Una vez que el paciente cuenta su síntoma principal con sus propias palabras (siempre hay que dejarlo hablar sin interrumpir al inicio), quien entrevista tiene que completar la información con un interrogatorio dirigido: preguntas concretas que buscan las características que el paciente, por sí solo, casi nunca menciona todas de manera espontánea.',
        'Ejemplo trabajado, para un dolor: dónde exactamente (localización), hacia dónde se corre (irradiación), cómo se siente (carácter: opresivo, punzante, urente), qué tan fuerte (intensidad, en una escala de 0 a 10), desde cuándo y cómo empezó (inicio y evolución), qué lo alivia y qué lo agrava, y qué otros síntomas lo acompañan. Si quien entrevista se conforma con "me duele el pecho" y no pregunta el resto, se pierde la información que en realidad decide el diagnóstico diferencial -un dolor torácico opresivo que empeora con el esfuerzo cuenta una historia completamente distinta a uno punzante que empeora con la inspiración profunda.'
      ],
      foco:[
        'El interrogatorio dirigido completa lo que el paciente no menciona por sí solo: localización, irradiación, carácter, intensidad, inicio, factores que alivian o agravan, y síntomas acompañantes. Son estas características, no el síntoma aislado, las que orientan el diagnóstico diferencial.'
      ]
    },
    {
      t:'Por qué escribir las palabras textuales del paciente importa',
      p:[
        'Registrar el motivo de consulta entre comillas, con las palabras exactas del paciente, preserva la información original sin la interpretación prematura de quien entrevista -si un estudiante escribe directamente "dolor torácico de características anginosas" en vez de "me aprieta el pecho", está imponiendo una conclusión diagnóstica antes de haber completado el interrogatorio, y esa conclusión puede sesgar todas las preguntas que vengan después, llevando a buscar solo lo que confirma esa primera impresión en vez de explorar con la mente abierta.'
      ],
      foco:[
        '*Consideración clínica*: escribir el motivo de consulta entre comillas, en las palabras exactas del paciente, evita imponer una interpretación diagnóstica prematura que podría sesgar todo el interrogatorio dirigido que sigue.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 1. Argente y Álvarez, Semiología Médica, cap. 1.'
},

'examen-fisico-general': {
  tema:'Examen físico general',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:13,
  idea:'Antes de escuchar el corazón o palpar el abdomen, existen cuatro técnicas básicas que se repiten en cada parte del examen físico, y el orden en que se aplican no es arbitrario: cada una puede alterar lo que la siguiente encuentra.',
  claves:['inspección','palpación','percusión','auscultación','signos vitales'],
  sigue:'semiologia-dolor',
  secciones:[
    {
      t:'Las cuatro técnicas del examen físico',
      p:[
        'El examen físico se construye sobre cuatro técnicas básicas: inspección (observar, antes de tocar nada), palpación (usar las manos para sentir textura, temperatura, tamaño, sensibilidad), percusión (golpear suavemente para generar un sonido que revela si hay aire, líquido o tejido sólido debajo) y auscultación (escuchar, generalmente con estetoscopio, los sonidos internos del cuerpo). Cada una aporta un tipo de información distinto, y ninguna sustituye completamente a las otras -un hallazgo visible en la inspección puede confirmarse o matizarse con la palpación, y viceversa.'
      ],
      foco:[
        'Cuatro técnicas básicas: inspección (observar), palpación (tocar), percusión (golpear para generar sonido) y auscultación (escuchar con estetoscopio). Cada una aporta información distinta y complementaria.'
      ]
    },
    {
      t:'Por qué el orden importa: la excepción del abdomen',
      p:[
        'El orden habitual es inspección, palpación, percusión y auscultación -salvo en el abdomen, donde la auscultación se hace ANTES de palpar o percutir, porque tocar el abdomen puede alterar artificialmente los ruidos intestinales que se quieren escuchar (el peristaltismo puede acelerarse o inhibirse transitoriamente por la manipulación). Esta excepción, lejos de ser un capricho, ilustra la regla general que ordena todo el examen físico: el orden de las técnicas busca no contaminar lo que la siguiente técnica va a medir.'
      ],
      foco:[
        '*Consideración clínica*: en el abdomen, el orden se altera (auscultar antes de palpar) precisamente para no contaminar los ruidos hidroaéreos con la manipulación previa -el mismo principio que ordena el resto del examen físico, aplicado a una excepción justificada.'
      ]
    },
    {
      t:'Los signos vitales: el primer dato objetivo',
      p:[
        'Los signos vitales (frecuencia cardíaca, frecuencia respiratoria, presión arterial, temperatura, y con frecuencia la saturación de oxígeno) son, casi siempre, el primer dato objetivo que se recoge en cualquier evaluación clínica, precisamente porque dan una idea rápida de qué tan estable está el paciente antes de continuar con un examen más detallado. Un examen físico "completo" no significa examinar todo el cuerpo con el mismo nivel de detalle en cada consulta: se ajusta según el motivo de consulta específico de cada paciente, pero los signos vitales casi nunca se omiten, porque orientan de inmediato sobre la urgencia del caso y pueden cambiar por completo la prioridad de la atención.'
      ],
      foco:[
        'Los signos vitales son casi siempre el primer dato objetivo recogido, porque orientan de inmediato sobre la estabilidad y la urgencia del paciente, antes de continuar con el resto del examen físico.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 2.'
},

'semiologia-dolor': {
  tema:'Semiología del dolor',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:13,
  idea:'Este tema retoma, desde la clínica, lo ya visto en Fisiología I sobre nocicepción: entender que el dolor visceral y el somático viajan por vías distintas explica directamente por qué un dolor puede sentirse en un sitio distinto de donde realmente está el problema.',
  claves:['dolor somático','dolor visceral','irradiación','escala de dolor','dolor referido'],
  sigue:'semiologia-respiratoria',
  secciones:[
    {
      t:'Dolor somático y visceral: dos calidades distintas',
      p:[
        'El dolor somático proviene de estructuras como la piel, los músculos o las articulaciones, inervadas densamente: suele ser bien localizado, agudo o punzante, y el paciente puede señalar con precisión dónde le duele. El dolor visceral proviene de los órganos internos, con una inervación sensitiva mucho menos densa y precisa: suele ser difuso, sordo, difícil de localizar con exactitud, y a menudo se acompaña de síntomas autonómicos (náuseas, sudoración), reflejando la inervación autonómica de las vísceras ya vista en Anatomía II.'
      ],
      foco:[
        'Dolor somático: bien localizado, agudo, señalable con precisión. Dolor visceral: difuso, sordo, difícil de localizar, con frecuencia acompañado de síntomas autonómicos como náuseas o sudoración.'
      ]
    },
    {
      t:'Irradiación: el dolor que se extiende siguiendo un trayecto nervioso',
      p:[
        'La irradiación es cuando el dolor se extiende desde su origen hacia otra zona siguiendo, generalmente, el trayecto de un nervio -como el dolor de una hernia discal lumbar que se irradia por la pierna, ya visto en el tema de dermatomas en Neuroanatomía. A diferencia del dolor referido (que se explica en la siguiente sección), la irradiación tiene una explicación anatómica directa: el nervio comprimido o irritado transmite la sensación a lo largo de todo su trayecto, no solo en el punto exacto de la lesión.'
      ],
      foco:[
        'La irradiación sigue el trayecto anatómico de un nervio específico -a diferencia del dolor referido, que se explica por convergencia de fibras en la médula, no por el trayecto físico de un nervio comprimido.'
      ]
    },
    {
      t:'Dolor referido: cuando el cerebro confunde el origen de la señal',
      p:[
        'El dolor referido es más sutil que la irradiación: el dolor se SIENTE en una zona alejada del órgano realmente afectado, porque las fibras sensitivas de ese órgano y las de la piel de esa zona convergen en el mismo segmento de la médula espinal, y el cerebro no logra distinguir con precisión de cuál de las dos viene la señal. Ejemplo trabajado: el dolor de un infarto del corazón puede sentirse en el brazo izquierdo o la mandíbula, no solo en el pecho, porque las fibras sensitivas del corazón convergen en la médula con las fibras sensitivas de esas zonas de piel, aunque el corazón mismo esté físicamente lejos de ahí. La escala de dolor (típicamente de 0 a 10) es una herramienta simple pero clínicamente útil para cuantificar la intensidad subjetiva del dolor y, sobre todo, para vigilar objetivamente si un tratamiento lo está reduciendo con el tiempo.'
      ],
      foco:[
        '*Consideración clínica*: el dolor referido de un infarto (brazo izquierdo, mandíbula) se explica por convergencia de fibras sensitivas en el mismo segmento medular, no porque el dolor "viaje" físicamente desde el corazón hasta esas zonas.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 3.'
},

'semiologia-respiratoria': {
  tema:'Semiología respiratoria',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:14,
  idea:'Cada sonido anormal que se escucha con el estetoscopio sobre el pulmón tiene un mecanismo físico preciso detrás, y reconocer ese mecanismo -no solo el nombre del sonido- es lo que permite deducir qué está pasando dentro del pulmón sin necesitar todavía una radiografía.',
  claves:['disnea','tos','estertores','sibilancias','matidez','murmullo vesicular'],
  sigue:'semiologia-cardiovascular',
  secciones:[
    {
      t:'Los síntomas: disnea y tos',
      p:[
        'La disnea es la sensación subjetiva de falta de aire o dificultad para respirar, y puede tener origen respiratorio, cardíaco o de otro sistema, así que por sí sola no localiza el problema; su forma de aparecer (en reposo, con el esfuerzo, al acostarse -esta última llamada ortopnea) sí orienta más hacia una causa específica. La tos es un reflejo de defensa de la vía aérea; su carácter (seca o productiva, es decir con expectoración) y su duración (aguda o crónica) ayudan a orientar la causa subyacente.'
      ],
      foco:[
        'La disnea no localiza el problema por sí sola (puede ser respiratoria, cardíaca u otra), pero su forma de aparecer (reposo, esfuerzo, al acostarse) sí orienta. La tos se caracteriza por si es seca o productiva, y por su duración.'
      ]
    },
    {
      t:'Estertores y sibilancias: dos mecanismos físicos distintos',
      p:[
        'El murmullo vesicular es el sonido respiratorio normal, suave y continuo, que se ausculta sobre el pulmón sano. Los estertores (crepitantes) son sonidos discontinuos, como el crujido de un celofán o de pelo frotado cerca del oído, producidos cuando el aire abre bruscamente pequeñas vías aéreas o alvéolos que estaban colapsados o llenos de líquido -típicos, por ejemplo, de una neumonía o de líquido acumulado en el pulmón. Las sibilancias son sonidos continuos, musicales, de tono agudo, producidos cuando el aire pasa forzado a través de una vía aérea estrechada -el sonido característico del asma o de una obstrucción bronquial.'
      ],
      foco:[
        'Estertores: sonidos discontinuos (crujido), por apertura de alvéolos colapsados o con líquido (neumonía, edema pulmonar). Sibilancias: sonidos continuos, musicales, por vía aérea estrechada (asma, broncoespasmo).'
      ]
    },
    {
      t:'Matidez a la percusión: lo sólido o líquido reemplaza al aire',
      p:[
        'La matidez a la percusión (un sonido apagado, en vez del sonido resonante normal del pulmón con aire) sugiere que hay algo sólido o líquido en el lugar donde debería haber aire -como líquido acumulado en el espacio pleural (derrame pleural, retomando la anatomía de la pleura ya vista en Anatomía II) o una consolidación pulmonar por neumonía. Distinguir estertores de sibilancias por el sonido, y complementar con la percusión, ya estrecha bastante las posibilidades diagnósticas antes de cualquier estudio de imagen.'
      ],
      foco:[
        '*Consideración clínica*: la matidez a la percusión reemplaza al sonido resonante normal cuando hay líquido (derrame pleural) o consolidación (neumonía) en vez de aire -un hallazgo físico que orienta directamente hacia esas dos posibilidades.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 15.'
},

'semiologia-cardiovascular': {
  tema:'Semiología cardiovascular',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:14,
  idea:'Un soplo cardíaco no es, por sí solo, sinónimo de enfermedad grave: es simplemente turbulencia audible en el flujo de sangre, y puede ser tan inocente como el ruido del agua al pasar rápido por una tubería ancha, o señalar una válvula realmente dañada.',
  claves:['soplo cardíaco','pulso','ingurgitación yugular','edema','ruidos cardíacos'],
  sigue:'semiologia-abdominal',
  secciones:[
    {
      t:'Los ruidos cardíacos normales y el soplo',
      p:[
        'Los ruidos cardíacos normales (el primero y el segundo, correspondientes al cierre de las válvulas auriculoventriculares y semilunares respectivamente, ya vistas en Anatomía II y Fisiología II) forman el "lub-dub" característico de cada latido. Un soplo cardíaco es un sonido adicional, más prolongado, causado por flujo turbulento de sangre -puede deberse a una válvula estrecha (que dificulta el paso de sangre hacia adelante) o insuficiente (que deja retroceder sangre hacia atrás), pero también puede ser un soplo "inocente" o funcional, sin ninguna anormalidad estructural, frecuente sobre todo en niños y en estados de flujo aumentado (como el embarazo o la fiebre).'
      ],
      foco:[
        'Un soplo puede deberse a una válvula estrecha o insuficiente, pero también puede ser inocente (funcional, sin daño estructural), frecuente en niños y en estados de flujo aumentado.'
      ]
    },
    {
      t:'El pulso periférico',
      p:[
        'El pulso (palpado en las arterias ya vistas en Anatomía I: radial, femoral, entre otras) informa sobre la frecuencia, el ritmo y la amplitud del latido cardíaco transmitido a la periferia. Un pulso irregular puede sugerir una arritmia; una amplitud disminuida puede sugerir bajo gasto cardíaco o una obstrucción en el trayecto de esa arteria específica.'
      ],
      foco:[
        'El pulso periférico informa sobre frecuencia, ritmo y amplitud del latido cardíaco -un pulso irregular sugiere arritmia; una amplitud disminuida sugiere bajo gasto o una obstrucción arterial local.'
      ]
    },
    {
      t:'Ingurgitación yugular y edema: signos de insuficiencia cardíaca',
      p:[
        'La ingurgitación yugular (la distensión visible de la vena yugular en el cuello, ya vista en Anatomía II) es un signo indirecto y útil para estimar la presión venosa central: cuando el corazón derecho no logra bombear con eficacia la sangre que le llega, esta se acumula hacia atrás y distiende las venas del cuello, visibles incluso sin ningún instrumento. El edema (acumulación de líquido en los tejidos, típicamente visible primero en las piernas por efecto de la gravedad) sugiere, en el contexto cardiovascular, que el corazón no está bombeando con la eficacia suficiente para mantener la presión y el volumen circulante en equilibrio, un signo clásico de insuficiencia cardíaca ya vista en Fisiopatología. Estos dos signos periféricos, junto con hallazgos pulmonares como los estertores ya vistos, forman la base del examen físico que orienta hacia insuficiencia cardíaca, incluso antes de cualquier estudio de imagen o laboratorio.'
      ],
      foco:[
        '*Consideración clínica*: ingurgitación yugular, edema en piernas y estertores pulmonares, juntos, orientan hacia insuficiencia cardíaca -tres signos periféricos que, combinados, cuentan una historia más específica que cualquiera de ellos por separado.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 13.'
},

'semiologia-abdominal': {
  tema:'Semiología abdominal',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:14,
  idea:'El signo de rebote es, probablemente, la maniobra más temida por cualquier estudiante en su primer examen abdominal, y con razón: es la forma clásica de detectar, con solo las manos, que el peritoneo está inflamado.',
  claves:['ruidos hidroaéreos','defensa abdominal','signo de rebote','hepatomegalia','ascitis'],
  sigue:'semiologia-neurologica-basica',
  secciones:[
    {
      t:'Auscultar primero: los ruidos hidroaéreos',
      p:[
        'Como ya se mencionó en el examen físico general, el abdomen se ausculta ANTES de palpar, escuchando los ruidos hidroaéreos: los sonidos normales del peristaltismo intestinal (ya visto en Fisiología II) moviendo aire y líquido por el tubo digestivo. Su ausencia sugiere que el intestino dejó de moverse (íleo); su aumento marcado puede sugerir una obstrucción intestinal con el intestino tratando de vencerla mediante contracciones más intensas y frecuentes.'
      ],
      foco:[
        'Ruidos hidroaéreos ausentes sugieren íleo (el intestino dejó de moverse). Ruidos aumentados pueden sugerir obstrucción intestinal, con el intestino intentando vencerla.'
      ]
    },
    {
      t:'Signos de irritación peritoneal',
      p:[
        'La defensa abdominal es la contracción involuntaria de los músculos de la pared abdominal cuando se palpa, un reflejo protector frente a un peritoneo inflamado o irritado debajo. El signo de rebote (o de Blumberg) se busca presionando lentamente el abdomen y soltando de golpe: si el dolor es MÁS intenso al soltar que al presionar, eso sugiere irritación peritoneal (peritonitis) -el peritoneo, al moverse bruscamente con la descompresión súbita, duele más que con la presión sostenida.'
      ],
      foco:[
        'El signo de rebote (Blumberg) es positivo cuando el dolor es MÁS intenso al soltar que al presionar -sugiere irritación peritoneal, no solo dolor abdominal simple.'
      ]
    },
    {
      t:'Palpar órganos y detectar líquido libre',
      p:[
        'La hepatomegalia es el aumento de tamaño del hígado, detectable por palpación cuando su borde se extiende más allá del reborde costal de lo esperado. La ascitis es la acumulación anormal de líquido dentro de la cavidad peritoneal, que se puede sospechar por la distensión abdominal generalizada y confirmar con maniobras específicas de percusión (matidez desplazable con los cambios de posición del paciente). El signo de rebote positivo, junto con defensa abdominal marcada y dolor intenso, es uno de los hallazgos que más urgentemente orienta hacia la necesidad de una evaluación quirúrgica: sugiere que el peritoneo está inflamado, y muchas causas de eso (como una apendicitis perforada) no admiten demora.'
      ],
      foco:[
        '*Consideración clínica*: signo de rebote positivo + defensa abdominal marcada + dolor intenso es una combinación que orienta urgentemente hacia evaluación quirúrgica -el peritoneo inflamado no siempre admite demora.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 17.'
},

'semiologia-neurologica-basica': {
  tema:'Semiología neurológica básica',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:14,
  idea:'Cada uno de los hallazgos de este examen -reflejos, fuerza, un signo de Babinski- tiene su explicación completa en la Neuroanatomía que se estudia en paralelo este mismo cuatrimestre: la semiología neurológica es, en gran medida, aplicar esa anatomía con las manos.',
  claves:['pares craneales','reflejos osteotendinosos','fuerza muscular','signo de Babinski','marcha'],
  sigue:'semiologia-osteoarticular',
  secciones:[
    {
      t:'Pares craneales, fuerza y reflejos',
      p:[
        'El examen neurológico básico evalúa, de forma sistemática, los doce pares craneales (ya vistos en Anatomía II), la fuerza muscular (graduada habitualmente en una escala de 0 a 5, donde 5 es fuerza normal y 0 es ausencia total de contracción), y los reflejos osteotendinosos (como el reflejo rotuliano, el reflejo miotático ya visto en Fisiología I), que exploran la integridad del arco reflejo espinal correspondiente a cada nivel.'
      ],
      foco:[
        'Fuerza muscular: escala 0 (sin contracción) a 5 (normal). Reflejos osteotendinosos: exploran la integridad del arco reflejo espinal en cada nivel correspondiente.'
      ]
    },
    {
      t:'Interpretar un reflejo ausente frente a uno exaltado',
      p:[
        'Un reflejo AUSENTE o disminuido sugiere un problema en alguna parte del arco reflejo (el nervio periférico, la raíz, o la médula en ese nivel). Un reflejo EXALTADO (más intenso de lo normal) sugiere, paradójicamente, un problema distinto: la pérdida de la inhibición normal que ejercen las vías descendentes del cerebro sobre ese reflejo, típico de una lesión de la neurona motora superior -no de un daño en el arco reflejo mismo, sino de la pérdida del control que normalmente lo modera.'
      ],
      foco:[
        'Reflejo ausente/disminuido: problema en el arco reflejo mismo (nervio, raíz, médula). Reflejo exaltado: pérdida de la inhibición descendente del cerebro, típico de lesión de neurona motora superior.'
      ]
    },
    {
      t:'El signo de Babinski y la evaluación de la marcha',
      p:[
        'El signo de Babinski se obtiene al estimular el borde externo de la planta del pie: normalmente, en un adulto, los dedos se flexionan hacia abajo; si en cambio el dedo gordo se extiende hacia arriba (con los demás dedos abriéndose en abanico), eso es un signo de Babinski positivo, y sugiere una lesión de la vía piramidal (la vía corticoespinal ya vista en Neuroanatomía) -es normal, en cambio, en el lactante, cuya vía piramidal todavía no ha terminado de mielinizarse por completo. La evaluación de la marcha es, con frecuencia, la parte más subestimada y a la vez más reveladora del examen neurológico: distintos patrones de marcha anormal (arrastrando el pie, con pasos cortos y rígidos, tambaleante) apuntan hacia problemas en sistemas neurológicos muy distintos entre sí -desde el cerebelo hasta la médula espinal o los propios nervios periféricos.'
      ],
      foco:[
        '*Consideración clínica*: el signo de Babinski positivo en un adulto casi siempre significa lo mismo (lesión de la vía piramidal), aunque no diga por sí solo dónde está la lesión. Es normal en el lactante por mielinización incompleta.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 20.'
},

'semiologia-osteoarticular': {
  tema:'Semiología osteoarticular',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:13,
  idea:'Examinar una articulación bien hecha sigue la misma lógica que examinar cualquier otro sistema: primero ver, después tocar, y solo entonces mover, buscando siempre comparar con el lado sano del propio paciente como referencia.',
  claves:['rango de movimiento','derrame articular','signo de Tinel','deformidad','crepitación'],
  sigue:'piel-faneras',
  secciones:[
    {
      t:'Rango de movimiento: comparar siempre con el lado sano',
      p:[
        'El rango de movimiento de una articulación se evalúa tanto de forma activa (el paciente mueve la articulación por sí mismo) como pasiva (quien examina la mueve), comparando siempre con el lado contralateral sano del mismo paciente, que sirve de referencia individual más confiable que un rango "normal" genérico de libro, porque la movilidad basal varía considerablemente de una persona a otra según edad, condición física y hábitos.'
      ],
      foco:[
        'El rango de movimiento se evalúa de forma activa y pasiva, comparando siempre con el lado sano contralateral del mismo paciente -más confiable que un rango "normal" genérico.'
      ]
    },
    {
      t:'Signos de inflamación articular: derrame, deformidad y crepitación',
      p:[
        'Un derrame articular (líquido acumulado dentro de la cápsula articular, ya vista en Anatomía I) se detecta por aumento de volumen, a veces con sensación de fluctuación a la palpación, y puede acompañar a una inflamación, una infección o un traumatismo articular. Una deformidad visible (un eje anormal, una articulación desplazada de su posición habitual) y la crepitación (una sensación o sonido de roce, como arena entre dos superficies, al mover la articulación, típica del desgaste del cartílago articular ya visto en Histología) completan la evaluación básica de cualquier articulación.'
      ],
      foco:[
        'Derrame articular: aumento de volumen con fluctuación, por inflamación, infección o trauma. Crepitación: sensación de roce al mover, típica de desgaste del cartílago articular.'
      ]
    },
    {
      t:'El signo de Tinel: una maniobra de provocación específica',
      p:[
        'El signo de Tinel es una maniobra de provocación específica: se percute suavemente sobre el trayecto de un nervio en un punto de posible compresión (el ejemplo clásico es sobre el nervio mediano en la muñeca, en el túnel carpiano ya visto en Anatomía I), y si eso reproduce una sensación de hormigueo hacia la zona que ese nervio inerva, el signo es positivo, sugiriendo compresión de ese nervio en ese punto específico.'
      ],
      foco:[
        '*Consideración práctica*: el signo de Tinel positivo (hormigueo al percutir sobre el nervio mediano en la muñeca) sugiere compresión del nervio en el túnel carpiano en ese punto exacto.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 21.'
},

'piel-faneras': {
  tema:'Piel y faneras',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:13,
  idea:'Describir una lesión de piel con precisión -no solo "una mancha"- es lo que permite comunicar un hallazgo entre colegas sin necesitar una foto, siguiendo la misma lógica de vocabulario preciso ya vista en la anatomía de superficie.',
  claves:['lesión primaria','lesión secundaria','ictericia','cianosis','palidez'],
  sigue:'semiologia-ganglionar-adenopatias',
  secciones:[
    {
      t:'Lesiones primarias: el proceso patológico sin modificar',
      p:[
        'Una lesión primaria es la que aparece directamente por el proceso patológico, sin haber sido modificada: una mácula (cambio de color plano, sin relieve), una pápula (elevación pequeña y sólida), una vesícula (elevación pequeña llena de líquido claro), entre otras. Describir correctamente el tipo de lesión primaria, junto con su tamaño, color, forma y distribución sobre el cuerpo, es lo que permite a otro clínico "ver" la lesión sin haberla examinado directamente.'
      ],
      foco:[
        'Lesiones primarias (mácula, pápula, vesícula) aparecen directamente por el proceso patológico, sin modificar. Describir tamaño, color, forma y distribución permite comunicar el hallazgo sin una foto.'
      ]
    },
    {
      t:'Lesiones secundarias: el resultado de la evolución',
      p:[
        'Una lesión secundaria es el resultado de la evolución de una lesión primaria, o de manipularla: una costra (tras romperse una vesícula), una escama (piel que se descama), una úlcera (pérdida de tejido más profunda). Distinguir si una lesión es primaria o secundaria en el momento de la exploración ayuda a reconstruir la cronología del proceso -una úlcera sin lesión primaria visible alrededor sugiere una evolución ya avanzada, mientras que una vesícula intacta sugiere un proceso más reciente.'
      ],
      foco:[
        'Lesiones secundarias (costra, escama, úlcera) resultan de la evolución o manipulación de una lesión primaria -su presencia ayuda a reconstruir la cronología del proceso.'
      ]
    },
    {
      t:'Cambios de color de toda la piel',
      p:[
        'La ictericia (ya vista en Bioquímica II, al hablar del metabolismo de la bilirrubina), la cianosis (coloración azulada, típicamente de labios y dedos, por hemoglobina insuficientemente oxigenada, retomando la curva de disociación de la hemoglobina de Fisiología II) y la palidez (por anemia o por vasoconstricción) son tres cambios de coloración generalizada de la piel, cada uno con una explicación fisiológica o bioquímica ya estudiada en otro bloque, que aquí se aplica directamente a la exploración clínica.'
      ],
      foco:[
        '*Consideración clínica*: cada signo de color de piel (ictericia, cianosis, palidez) tiene un mecanismo bioquímico o fisiológico específico ya estudiado -entender ese mecanismo convierte "veo una mancha amarilla" en "sospecho un problema con la bilirrubina".'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 5.'
},

'semiologia-ganglionar-adenopatias': {
  tema:'Semiología ganglionar y adenopatías',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:12,
  idea:'Las características físicas de un ganglio agrandado -no solo el hecho de estar agrandado- son, en la práctica, lo que más orienta entre una causa benigna (una infección cercana) y una que preocupa más (un proceso maligno).',
  claves:['adenopatía','ganglio duro','ganglio doloroso','cadena ganglionar'],
  sigue:'registro-historia-clinica-problemas',
  secciones:[
    {
      t:'Qué características describir en una adenopatía',
      p:[
        'Una adenopatía es un ganglio linfático (ya visto en Anatomía I y en el sistema linfático) que aumenta de tamaño de forma perceptible al examen físico. Al describirla, importa mucho más que solo su tamaño: su consistencia (blando, firme o duro como piedra), si es doloroso o no a la palpación, si está adherido a estructuras vecinas o se mueve libremente bajo la piel, y si es único o forma parte de varios ganglios agrandados en la misma zona.'
      ],
      foco:[
        'Al describir una adenopatía importa más que el tamaño: consistencia, dolor, movilidad (adherida o libre), y si es única o múltiple.'
      ]
    },
    {
      t:'Un patrón clásico: benigno frente a maligno',
      p:[
        'Un patrón clásico y útil: un ganglio blando, doloroso y móvil sugiere más frecuentemente una causa inflamatoria o infecciosa reciente (el ganglio está reaccionando activamente, filtrando la infección, como se vio en Inmunología); un ganglio duro, no doloroso, fijo a planos profundos, sugiere más preocupación por un proceso maligno (infiltración tumoral, ya sea un cáncer del propio ganglio o metástasis de otro sitio).'
      ],
      foco:[
        'Ganglio blando, doloroso, móvil → sugiere infección reciente. Ganglio duro, indoloro, fijo → sugiere proceso maligno. Este contraste es el patrón más útil en la práctica clínica.'
      ]
    },
    {
      t:'Localización: qué territorio drena cada cadena',
      p:[
        'La cadena ganglionar donde se encuentra la adenopatía orienta directamente hacia el territorio que esa cadena drena: una adenopatía axilar apunta hacia el brazo o la mama (ya visto en Anatomía II); una cervical, hacia la cabeza, el cuello o la faringe; una inguinal, hacia el miembro inferior o los genitales. Examinar una adenopatía sin pensar en qué territorio drena esa cadena es perder la mitad de la información que ese hallazgo puede ofrecer, retomando directamente el drenaje linfático ya estudiado en Anatomía I y II.'
      ],
      foco:[
        '*Consideración clínica*: la cadena ganglionar afectada señala el territorio de drenaje probable del problema (axilar → brazo/mama, cervical → cabeza/cuello/faringe, inguinal → miembro inferior/genitales).'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 8.'
},

'registro-historia-clinica-problemas': {
  tema:'Registro e historia clínica orientada por problemas',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:12,
  idea:'Este tema retoma cómo se ORGANIZA, por escrito, todo lo recogido en la anamnesis y el examen físico ya vistos, de una forma que cualquier otro miembro del equipo de salud pueda seguir sin ambigüedad.',
  claves:['SOAP','historia orientada por problemas','evolución clínica','nota de ingreso'],
  sigue:'semiologia-urinaria',
  secciones:[
    {
      t:'El formato SOAP',
      p:[
        'El formato SOAP organiza cada nota clínica en cuatro partes: Subjetivo (lo que el paciente cuenta, retomando la anamnesis ya vista), Objetivo (los hallazgos del examen físico y de los estudios, ya vistos en todos los temas anteriores de este bloque), Análisis (o Assessment: la interpretación clínica de esos datos, el diagnóstico o la lista de diagnósticos diferenciales considerados) y Plan (qué se va a hacer: más estudios, tratamiento, seguimiento).'
      ],
      foco:[
        'SOAP: Subjetivo (lo que cuenta el paciente), Objetivo (hallazgos del examen), Análisis (interpretación/diagnóstico), Plan (qué se hará a continuación).'
      ]
    },
    {
      t:'La evolución clínica diaria y la nota de ingreso',
      p:[
        'Este formato se repite, de forma abreviada, en cada evolución clínica diaria de un paciente hospitalizado, dando continuidad y trazabilidad a su atención. La nota de ingreso es el documento inicial y más completo, escrito al momento de hospitalizar a un paciente, que reúne la anamnesis completa, el examen físico completo, y el plan inicial, sirviendo de punto de referencia para todas las evoluciones diarias que se escribirán después.'
      ],
      foco:[
        'La nota de ingreso es el documento inicial y más completo (anamnesis + examen físico + plan). Las evoluciones diarias, en formato SOAP abreviado, se refieren siempre a ese punto de partida.'
      ]
    },
    {
      t:'Historia orientada por problemas',
      p:[
        'La historia orientada por problemas organiza el expediente completo de un paciente alrededor de una lista explícita de sus problemas de salud (activos y resueltos), en vez de organizarlo cronológicamente sin más: cada nota puede referirse a un problema específico de esa lista, lo que facilita seguir la evolución de cada condición por separado en un paciente con varias enfermedades a la vez. Toda la anamnesis, el examen físico y los signos que se estudiaron en los temas anteriores solo tienen valor real si quedan registrados de una forma clara, organizada y que otro profesional de salud pueda entender e interpretar sin ambigüedad.'
      ],
      foco:[
        '*Consideración clínica*: la historia orientada por problemas facilita seguir por separado la evolución de cada condición en un paciente con múltiples enfermedades simultáneas, en vez de mezclar todo cronológicamente.'
      ]
    }
  ],
  ref:'Argente y Álvarez, Semiología Médica, cap. 2.'
},

'semiologia-urinaria': {
  tema:'Semiología urinaria',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:12,
  idea:'Los síntomas urinarios suelen describirse con palabras técnicas muy parecidas entre sí (disuria, poliuria, oliguria), y confundirlas en la práctica es un error frecuente que puede orientar mal el diagnóstico desde el principio.',
  claves:['disuria','hematuria','poliuria','oliguria','puñopercusión renal'],
  sigue:'semiologia-endocrina',
  secciones:[
    {
      t:'Disuria y hematuria',
      p:[
        'La disuria es dolor o ardor al orinar, típicamente por irritación o infección de la vía urinaria baja (uretra, vejiga). La hematuria es la presencia de sangre en la orina, visible a simple vista (macroscópica) o detectable solo por laboratorio (microscópica), y su origen puede estar en cualquier punto del tracto urinario, desde el riñón hasta la uretra -a diferencia de la disuria, que orienta específicamente hacia la vía urinaria baja, la hematuria por sí sola no localiza el problema.'
      ],
      foco:[
        'Disuria: dolor/ardor al orinar, orienta hacia vía urinaria baja. Hematuria: sangre en orina (macro o microscópica), puede originarse en cualquier punto del tracto urinario.'
      ]
    },
    {
      t:'Poliuria y oliguria: términos opuestos que no deben confundirse',
      p:[
        'La poliuria es un volumen de orina anormalmente AUMENTADO en 24 horas; la oliguria es un volumen anormalmente DISMINUIDO -son términos opuestos, y confundirlos invierte por completo la interpretación clínica del caso: la poliuria puede orientar hacia diabetes mellitus o insípida, mientras que la oliguria puede orientar hacia deshidratación severa o insuficiencia renal aguda, condiciones con manejos completamente distintos.'
      ],
      foco:[
        'Poliuria = volumen AUMENTADO (puede orientar a diabetes mellitus/insípida). Oliguria = volumen DISMINUIDO (puede orientar a deshidratación o insuficiencia renal aguda). Son opuestos: confundirlos invierte la interpretación.'
      ]
    },
    {
      t:'La puñopercusión renal: distinguir infección alta de baja',
      p:[
        'La puñopercusión renal es una maniobra del examen físico donde se golpea suavemente con el puño la zona lumbar, sobre la localización del riñón (ya vista en Anatomía II): si esto provoca dolor intenso, sugiere un proceso inflamatorio o infeccioso que compromete al riñón o a su cápsula (como una pielonefritis), a diferencia de una infección urinaria baja limitada a la vejiga, que típicamente no da ese dolor específico. Distinguir por la clínica una infección urinaria baja (disuria, sin fiebre alta, puñopercusión negativa) de una alta (con fiebre, dolor lumbar, puñopercusión positiva) cambia directamente la conducta, porque la segunda compromete al riñón y generalmente requiere un manejo más agresivo.'
      ],
      foco:[
        '*Consideración clínica*: puñopercusión renal positiva + fiebre + dolor lumbar sugiere infección urinaria ALTA (pielonefritis), que requiere manejo más agresivo que una infección baja limitada a la vejiga.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 18.'
},

'semiologia-endocrina': {
  tema:'Semiología endocrina',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:12,
  idea:'Muchos signos endocrinos son visibles a simple vista, sin necesitar ningún instrumento, porque las hormonas afectan estructuras muy expuestas -la piel, los ojos, la distribución de la grasa corporal- antes incluso de pedir un solo análisis de laboratorio.',
  claves:['bocio','exoftalmos','mixedema','acantosis nigricans','hábito cushingoide'],
  sigue:'interpretacion-signos-vitales',
  secciones:[
    {
      t:'Bocio y exoftalmos: signos tiroideos visibles',
      p:[
        'El bocio es el aumento visible de tamaño de la glándula tiroides (ya vista en Anatomía II), que puede acompañar tanto a un exceso como a un déficit de hormona tiroidea, o incluso ocurrir con función tiroidea normal, según la causa. El exoftalmos (protrusión anormal de los globos oculares hacia afuera) es un signo específico asociado a ciertas formas de hipertiroidismo autoinmune, por inflamación de los tejidos detrás del ojo.'
      ],
      foco:[
        'Bocio: aumento visible de tiroides, puede acompañar exceso, déficit o función normal. Exoftalmos: protrusión ocular, específico de ciertas formas de hipertiroidismo autoinmune.'
      ]
    },
    {
      t:'Mixedema: una hinchazón particular',
      p:[
        'El mixedema es una hinchazón particular de la piel, de consistencia pastosa y que no deja fóvea al presionar (a diferencia del edema común ya visto en semiología cardiovascular), típica del hipotiroidismo severo, por acumulación de sustancias específicas en la dermis. La ausencia de fóvea es precisamente lo que lo distingue del edema por insuficiencia cardíaca u otras causas más comunes de hinchazón.'
      ],
      foco:[
        'El mixedema NO deja fóvea al presionar (a diferencia del edema común), por acumulación de sustancias específicas en la dermis -típico del hipotiroidismo severo.'
      ]
    },
    {
      t:'Acantosis nigricans y hábito cushingoide',
      p:[
        'La acantosis nigricans es un oscurecimiento y engrosamiento aterciopelado de la piel, típicamente en el cuello y las axilas, asociado con frecuencia a resistencia a la insulina (retomando el tema ya visto en Fisiopatología de la diabetes mellitus). El hábito cushingoide describe un conjunto de cambios corporales característicos del exceso crónico de cortisol (ya visto en Bioquímica II): redistribución de la grasa hacia la cara (cara "de luna llena") y el tronco, con adelgazamiento relativo de los brazos y piernas, entre otros rasgos.'
      ],
      foco:[
        '*Consideración clínica*: la inspección simple -sin ningún instrumento- puede orientar hacia un trastorno hormonal específico (acantosis nigricans → resistencia a la insulina; hábito cushingoide → exceso de cortisol), siempre que se sepa qué buscar y por qué aparece cada signo.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 6.'
},

'interpretacion-signos-vitales': {
  tema:'Interpretación de signos vitales',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:12,
  idea:'Un signo vital anormal aislado dice poco; el patrón COMBINADO de varios signos vitales es lo que realmente cuenta una historia clínica coherente sobre lo que le está pasando al paciente en ese momento.',
  claves:['taquicardia','bradicardia','taquipnea','hipertensión','fiebre'],
  sigue:'historia-clinica-situaciones-especiales',
  secciones:[
    {
      t:'Taquicardia, bradicardia y taquipnea: sus mecanismos',
      p:[
        'La taquicardia (frecuencia cardíaca por encima de lo normal) y la bradicardia (por debajo) reflejan, entre otras causas, la actividad del sistema nervioso autónomo sobre el corazón, ya visto en Fisiología I y II. La taquipnea (frecuencia respiratoria aumentada) puede reflejar tanto un problema respiratorio directo como una respuesta compensatoria (por ejemplo, ante una acidosis metabólica, retomando la fisiopatología del equilibrio ácido-base ya vista).'
      ],
      foco:[
        'Taquicardia/bradicardia reflejan la actividad del sistema nervioso autónomo sobre el corazón. La taquipnea puede ser un problema respiratorio directo o una respuesta compensatoria (por ejemplo, ante acidosis metabólica).'
      ]
    },
    {
      t:'Hipertensión y fiebre',
      p:[
        'La hipertensión (presión arterial elevada, ya vista en Fisiología II) y la fiebre (ya vista en el tema de regulación de la temperatura corporal) completan el conjunto habitual de signos vitales. Cada uno de estos cinco signos vitales tiene, por separado, múltiples causas posibles -es precisamente por eso que interpretarlos de forma aislada rara vez es suficiente.'
      ],
      foco:[
        'La hipertensión y la fiebre, como los demás signos vitales, tienen múltiples causas posibles por separado -de ahí la importancia de leer el patrón combinado, no cada signo aislado.'
      ]
    },
    {
      t:'Leer el patrón combinado, no cada signo por separado',
      p:[
        'Ejemplo trabajado: un paciente con fiebre, taquicardia y taquipnea juntas sugiere, de forma coherente, un cuadro infeccioso con respuesta inflamatoria sistémica (retomando el SIRS ya visto en Fisiopatología) -cada signo por separado podría tener otras explicaciones, pero la combinación de los tres, presentándose juntos, cuenta una historia mucho más específica que cualquiera de ellos de forma aislada. Interpretar bien un signo vital anormal exige entender el mecanismo fisiológico detrás de ese número, no solo memorizar el rango normal.'
      ],
      foco:[
        '*Consideración clínica*: ante cualquier combinación de signos vitales anormales, preguntarse primero qué mecanismo fisiológico único podría explicar TODOS a la vez, en vez de buscar una explicación separada para cada uno.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 2.'
},

'historia-clinica-situaciones-especiales': {
  tema:'Historia clínica en situaciones especiales',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:12,
  idea:'Todo lo aprendido en este bloque asume que el paciente puede hablar y responder con claridad. Este último tema aborda qué hacer cuando esa condición básica no se cumple.',
  claves:['paciente inconsciente','entrevista en urgencias','heteroanamnesis'],
  sigue:'lesion-celular-reversible-irreversible',
  secciones:[
    {
      t:'Cuando el paciente no puede contar su propia historia',
      p:[
        'Ante un paciente inconsciente, la anamnesis tradicional (ya vista al inicio de este bloque) simplemente no es posible, y la evaluación tiene que apoyarse mucho más en el examen físico objetivo y en fuentes de información alternativas: la heteroanamnesis es, precisamente, obtener la historia clínica a través de un tercero (un familiar, un acompañante, personal de emergencias que trasladó al paciente), en vez de directamente del paciente mismo.'
      ],
      foco:[
        'Heteroanamnesis: obtener la historia clínica a través de un tercero (familiar, acompañante, personal de emergencias), cuando el paciente no puede contarla directamente.'
      ]
    },
    {
      t:'Datos prioritarios ante un paciente inconsciente',
      p:[
        'En estas situaciones, ciertos datos básicos se vuelven prioritarios y se buscan de forma activa: identificación del paciente, medicamentos que usa, alergias conocidas, y las circunstancias en que fue encontrado -información que, aunque limitada, puede ser decisiva para el manejo inmediato, especialmente si hay que decidir un tratamiento de urgencia sin poder esperar a que el paciente recupere la conciencia.'
      ],
      foco:[
        'Datos prioritarios ante paciente inconsciente: identificación, medicamentos que usa, alergias conocidas, circunstancias del hallazgo -información limitada pero decisiva para el manejo inmediato.'
      ]
    },
    {
      t:'La entrevista en un contexto de urgencia',
      p:[
        'La entrevista en urgencias tiene un ritmo distinto al de una consulta programada: prioriza obtener rápidamente la información que cambia el manejo inmediato (el motivo de consulta y los datos de mayor riesgo) por encima de la exploración exhaustiva y ordenada de cada antecedente, que puede completarse después, una vez que la situación esté estabilizada. La estructura ideal de la historia clínica (anamnesis completa, examen físico sistemático) es el punto de partida, pero la práctica real exige adaptarla según la situación, sin perder de vista la información esencial.'
      ],
      foco:[
        '*Consideración clínica*: en urgencias, se prioriza la información que cambia el manejo inmediato sobre la exploración exhaustiva y ordenada, que se completa después de estabilizar al paciente.'
      ]
    }
  ],
  ref:'Argente y Álvarez, Semiología Médica, cap. 3.'
}

});
