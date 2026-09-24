/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 7, TANDA DE MICROBIOLOGIA (2/2)
   Completa Microbiologia Medica a 50 preguntas junto con
   banco-13.js. Cubre el resto de antibioticos, virologia,
   micologia, genetica bacteriana, espiroquetas, micobacterias,
   diagnostico y flora normal (temas 6-13).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== MICROBIOLOGIA MEDICA ===================== */
{
  id:'U7-M-Q30', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Vancomicina', sub:'Mecanismo alternativo',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la vancomicina sigue siendo eficaz contra bacterias como SARM, cuyas proteínas de unión a penicilina (PBP) ya están alteradas?',
  ops:[
    'Porque también inhibe las PBP, pero con mayor afinidad que los betalactámicos',
    'Porque actúa uniéndose directamente a un precursor de la pared (D-Ala-D-Ala), sin depender de las PBP',
    'Porque destruye la membrana externa bacteriana',
    'Porque inhibe la síntesis de ácido fólico bacteriano'
  ],
  ok:1,
  clave:'La vancomicina se une al precursor D-Ala-D-Ala de la pared, un blanco distinto de las PBP.',
  exp:'La vancomicina inhibe la síntesis de la pared celular bacteriana, pero por un mecanismo distinto al de los betalactámicos: se une directamente a un precursor de la pared, la secuencia D-Ala-D-Ala, impidiendo su incorporación a la cadena de peptidoglicano en formación. Como este mecanismo no depende de la unión a las PBP, sigue siendo eficaz en bacterias como SARM, donde las PBP están alteradas y ya no responden a los betalactámicos. Por eso la vancomicina se reserva como alternativa importante frente a infecciones graves por grampositivos resistentes.',
  no:{
    0:'La vancomicina no actúa sobre las PBP en absoluto; su mecanismo es distinto, sobre el precursor de la pared.',
    2:'La vancomicina no actúa sobre la membrana externa (una estructura, además, exclusiva de gramnegativas, contra las que la vancomicina no es eficaz por no poder atravesarla).',
    3:'La inhibición de la síntesis de folato es el mecanismo de las sulfonamidas y el trimetoprim, no de la vancomicina.'
  },
  trampa:'Asumir que cualquier antibiótico que actúa "sobre la pared" tiene que depender de las PBP, cuando la vancomicina usa un blanco distinto en la misma vía.',
  obj:'Explicar por qué la vancomicina conserva eficacia frente a bacterias con PBP alterada.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['vancomicina','pared celular','SARM','D-Ala-D-Ala']
},
{
  id:'U7-M-Q31', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Ciclo de replicación viral', sub:'Tropismo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué determina el tropismo de un virus, es decir, por qué infecta cierto tipo de célula y no otro?',
  ops:[
    'El tamaño del virus comparado con el de la célula',
    'La especificidad de la proteína viral de superficie por un receptor determinado en la célula huésped',
    'La temperatura corporal del sitio infectado, exclusivamente',
    'El tipo de ácido nucleico que porta el virus (ADN o ARN)'
  ],
  ok:1,
  clave:'El tropismo depende de la especificidad de unión entre la proteína viral de superficie y el receptor celular.',
  exp:'El primer paso del ciclo de replicación viral es la adsorción: la unión de una proteína viral de superficie a un receptor específico presente en la membrana de la célula huésped. Esta especificidad de unión es la que determina el tropismo del virus -qué tipo de célula puede infectar-, porque solo las células que expresan el receptor adecuado permiten esa unión inicial. El ejemplo clásico es el VIH, que infecta preferentemente linfocitos CD4 porque su glicoproteína de superficie (gp120) se une específicamente al receptor CD4 (y a un correceptor) presente en esas células.',
  no:{
    0:'El tamaño relativo del virus no determina qué célula puede infectar; el mecanismo es de reconocimiento molecular específico, no de compatibilidad de tamaño.',
    2:'Aunque la temperatura puede influir en algunos virus, no es el factor determinante general del tropismo, que depende principalmente de receptores específicos.',
    3:'El tipo de ácido nucleico define otras propiedades del virus (cómo se replica, si necesita transcriptasa inversa), pero no es lo que determina directamente a qué célula se puede unir.'
  },
  trampa:'Buscar la explicación del tropismo en propiedades generales del virus en vez de en la especificidad molecular de unión al receptor.',
  obj:'Explicar el mecanismo molecular que determina el tropismo celular de un virus.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['tropismo viral','receptor','adsorción','VIH']
},
{
  id:'U7-M-Q32', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Antifúngicos', sub:'Ergosterol',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es más difícil diseñar antifúngicos selectivos que antibióticos, y cuál es el principal blanco farmacológico aprovechado en las infecciones fúngicas?',
  ops:[
    'Los hongos son procariotas como las bacterias; el blanco es el peptidoglicano',
    'Los hongos son eucariotas, con muchas estructuras similares a las células humanas; el blanco principal es el ergosterol de su membrana',
    'Los hongos no tienen membrana celular; el blanco es su pared externa',
    'No hay diferencia real en la dificultad de diseñar antibióticos y antifúngicos'
  ],
  ok:1,
  clave:'Los hongos son eucariotas (cercanos evolutivamente al humano); el ergosterol de su membrana es el blanco principal.',
  exp:'A diferencia de las bacterias (procariotas, con estructuras muy distintas a las humanas), los hongos son organismos eucariotas: tienen núcleo verdadero y ribosomas 80S, como las células humanas. Esta cercanía evolutiva dificulta encontrar blancos verdaderamente selectivos. El más aprovechado es el ergosterol, un lípido de la membrana celular fúngica equivalente funcionalmente al colesterol humano pero químicamente distinto: los azoles inhiben su síntesis y la anfotericina B se une a él directamente, aunque esta última conserva cierta afinidad por el colesterol humano, lo que explica su toxicidad renal característica.',
  no:{
    0:'Los hongos son eucariotas, no procariotas; y no tienen peptidoglicano, que es una estructura bacteriana.',
    2:'Los hongos sí tienen membrana celular (con ergosterol); de hecho, es el blanco principal de los antifúngicos más usados.',
    3:'Sí hay una diferencia real: la cercanía evolutiva entre hongo y célula humana hace más difícil lograr selectividad que en el caso de las bacterias.'
  },
  trampa:'Aplicar a los hongos la misma lógica de selectividad que a las bacterias, sin considerar que los hongos son eucariotas y comparten mucha más estructura con las células humanas.',
  obj:'Explicar por qué el desarrollo de antifúngicos selectivos es más difícil que el de antibióticos.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['antifúngicos','ergosterol','eucariota','anfotericina B']
},
{
  id:'U7-M-Q33', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Hongos dimórficos', sub:'Cambio según temperatura',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica define a un hongo dimórfico como Histoplasma capsulatum?',
  ops:[
    'Crece siempre como levadura, tanto en el ambiente como dentro del cuerpo',
    'Cambia de forma según la temperatura: moho a temperatura ambiente, levadura a 37°C dentro del huésped',
    'Solo puede infectar la piel, nunca los pulmones',
    'No forma esporas en ninguna de sus fases'
  ],
  ok:1,
  clave:'Dimórfico = cambia de moho (ambiente) a levadura (37°C, dentro del huésped).',
  exp:'Los hongos dimórficos, entre ellos Histoplasma capsulatum, Blastomyces dermatitidis y Coccidioides, tienen la particularidad de cambiar de forma según la temperatura: crecen como moho (filamentoso, con hifas) a temperatura ambiente, en su hábitat natural en el suelo o material orgánico, y cambian a forma de levadura (unicelular) a la temperatura corporal (37°C), una vez que infectan al huésped. Estas infecciones se adquieren típicamente por inhalación de esporas desde el ambiente, y pueden causar infección respiratoria que va de asintomática a diseminada grave, sobre todo en inmunosuprimidos.',
  no:{
    0:'Precisamente lo que define al dimorfismo es el CAMBIO de forma según la temperatura, no mantener una sola forma constante.',
    2:'La infección típica de los hongos dimórficos es por vía respiratoria (inhalación de esporas), afectando principalmente los pulmones, no exclusivamente la piel.',
    3:'La forma de moho (a temperatura ambiente) sí produce esporas, que son precisamente la forma infectante que se inhala.'
  },
  trampa:'No captar que el rasgo definitorio es el cambio de forma dependiente de temperatura, y no una característica fija de la especie.',
  obj:'Definir el concepto de hongo dimórfico y su relevancia en la vía de infección.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['hongo dimórfico','Histoplasma','moho','levadura']
},
{
  id:'U7-M-Q34', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Candida', sub:'Patógeno oportunista',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente termina un curso de antibióticos de amplio espectro por una infección respiratoria y días después desarrolla placas blanquecinas dolorosas en la boca.',
  enunciado:'¿Qué mecanismo explica mejor la aparición de esta candidiasis oral tras el tratamiento antibiótico?',
  ops:[
    'El antibiótico causó una reacción alérgica que favorece hongos',
    'El antibiótico eliminó parte de la flora bacteriana normal que competía con Candida, permitiendo su sobrecrecimiento',
    'El antibiótico debilitó directamente el sistema inmune del paciente de forma permanente',
    'Candida se transmitió de otra persona durante el tratamiento'
  ],
  ok:1,
  clave:'La eliminación de la flora competidora por el antibiótico permite el sobrecrecimiento de Candida, un patógeno oportunista.',
  exp:'Candida albicans forma parte de la flora normal de las mucosas (boca, tracto digestivo, vagina) en equilibrio con el resto de la microbiota, que compite con ella por espacio y nutrientes y limita su crecimiento. El uso de antibióticos de amplio espectro elimina buena parte de esa flora bacteriana competidora, sin afectar a Candida (que no es sensible a antibióticos, al ser un hongo), lo que le permite proliferar sin control y producir manifestaciones clínicas como la candidiasis oral. Este es el ejemplo clásico de disbiosis facilitando el sobrecrecimiento de un patógeno oportunista.',
  no:{
    0:'No se trata de una reacción alérgica; el mecanismo es la alteración del equilibrio de la flora normal por eliminación de la competencia bacteriana.',
    2:'El antibiótico no debilita directamente al sistema inmune de forma permanente; su efecto relevante aquí es sobre la composición de la flora bacteriana normal.',
    3:'Candida ya estaba presente como parte de la flora normal del propio paciente; no se requiere transmisión de otra persona para que aparezca esta candidiasis.'
  },
  trampa:'Buscar una causa externa (alergia, transmisión, inmunosupresión directa) en vez del mecanismo de disbiosis por pérdida de competencia bacteriana.',
  obj:'Explicar el mecanismo de disbiosis que favorece el sobrecrecimiento oportunista de Candida tras antibioticoterapia.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['Candida albicans','disbiosis','patógeno oportunista','antibióticos de amplio espectro']
},
{
  id:'U7-M-Q35', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Plásmidos', sub:'Resistencia múltiple',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la resistencia a antibióticos mediada por plásmidos se propaga tan rápidamente, incluso entre bacterias de especies distintas?',
  ops:[
    'Porque los plásmidos solo se transmiten de forma vertical, de madre a hija, dentro de la misma especie',
    'Porque un solo plásmido puede portar genes de resistencia a varios antibióticos a la vez y transferirse entre especies distintas por conjugación',
    'Porque los plásmidos son parte obligatoria del cromosoma bacteriano',
    'Porque solo existe un tipo de plásmido en la naturaleza'
  ],
  ok:1,
  clave:'Un plásmido puede portar resistencia múltiple y transferirse entre especies por conjugación, acelerando la propagación.',
  exp:'Los plásmidos son moléculas de ADN extracromosómico que se replican de forma independiente del cromosoma bacteriano y que pueden transferirse entre bacterias mediante conjugación, incluso entre especies diferentes. Un solo plásmido de resistencia (plásmido R) puede portar simultáneamente genes de resistencia a varios antibióticos distintos, así que su transferencia disemina resistencia múltiple de una sola vez, mucho más rápido de lo que ocurriría solo por mutación y selección independiente dentro de cada especie.',
  no:{
    0:'Los plásmidos también se transmiten de forma HORIZONTAL, entre bacterias ya formadas y entre especies distintas, no solo verticalmente dentro de la misma especie.',
    2:'Los plásmidos son elementos extracromosómicos, independientes del cromosoma principal, no una parte obligatoria de él.',
    3:'Existen muchísimos tipos distintos de plásmidos, con diferentes genes y capacidades, no un único tipo.'
  },
  trampa:'Limitar la transferencia de plásmidos a la herencia vertical dentro de la misma especie, ignorando la transferencia horizontal entre especies distintas.',
  obj:'Explicar por qué los plásmidos aceleran la propagación de resistencia a antibióticos entre especies bacterianas distintas.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['plásmidos','resistencia múltiple','transferencia horizontal','conjugación']
},
{
  id:'U7-M-Q36', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Transferencia horizontal', sub:'Tres mecanismos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mecanismo de transferencia horizontal de genes bacterianos está mediado por un bacteriófago que empaqueta por error ADN bacteriano en lugar de (o además de) ADN viral?',
  ops:['Conjugación', 'Transformación', 'Transducción', 'Replicación plasmídica'],
  ok:2,
  clave:'La transducción es la transferencia de ADN bacteriano mediada por un bacteriófago.',
  exp:'La transducción ocurre cuando un bacteriófago (virus que infecta bacterias), durante el ensamblaje de nuevas partículas virales dentro de una bacteria infectada, empaqueta por error ADN bacteriano en lugar de -o junto con- su propio ADN viral. Cuando ese fago infecta después a una nueva bacteria, transfiere ese fragmento de ADN de la bacteria anterior a la nueva. Es distinto de la conjugación (que requiere contacto físico directo vía pilus) y de la transformación (captación de ADN libre del ambiente por una bacteria naturalmente competente).',
  no:{
    0:'La conjugación requiere contacto físico directo entre dos bacterias mediante un pilus, sin intervención de un virus.',
    1:'La transformación consiste en captar ADN libre del ambiente, liberado por otra bacteria que murió, sin la intervención de un bacteriófago.',
    3:'La replicación plasmídica es simplemente la copia del plásmido dentro de una misma bacteria, no un mecanismo de transferencia entre bacterias distintas.'
  },
  trampa:'Confundir los tres mecanismos de transferencia horizontal entre sí, en particular no identificar cuál de ellos depende específicamente de un virus bacteriano.',
  obj:'Identificar la transducción como el mecanismo de transferencia horizontal mediado por bacteriófagos.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['transducción','bacteriófago','transferencia horizontal','conjugación']
},
{
  id:'U7-M-Q37', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Bacterias naturalmente competentes', sub:'Transformación',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes bacterias es un ejemplo clásico de organismo naturalmente competente para captar ADN libre del ambiente (transformación)?',
  ops:['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Pseudomonas aeruginosa', 'Mycobacterium tuberculosis'],
  ok:1,
  clave:'Streptococcus pneumoniae es uno de los ejemplos clásicos de bacteria naturalmente competente para la transformación.',
  exp:'La transformación consiste en que una bacteria capta directamente ADN libre presente en el medio (liberado por otra bacteria que murió y se lisó) y lo incorpora a su propio genoma. No todas las bacterias son capaces de hacer esto de forma natural -se necesita un estado fisiológico especial llamado competencia-, pero Streptococcus pneumoniae y Neisseria son ejemplos clásicos de géneros naturalmente competentes, un fenómeno históricamente importante porque los experimentos de transformación con neumococo (Griffith y luego Avery) fueron los que demostraron por primera vez que el ADN era el material genético.',
  no:{
    0:'Staphylococcus aureus no es un ejemplo clásico de bacteria naturalmente competente para la transformación.',
    2:'Pseudomonas aeruginosa no se destaca como organismo naturalmente competente en este contexto.',
    3:'Mycobacterium tuberculosis tampoco es el ejemplo clásico utilizado para ilustrar la transformación bacteriana natural.'
  },
  trampa:'Asumir que la competencia natural para la transformación es una propiedad general de todas las bacterias, en vez de una característica limitada a ciertos géneros.',
  obj:'Identificar un ejemplo clásico de bacteria naturalmente competente para la transformación.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['transformación bacteriana','Streptococcus pneumoniae','competencia natural','Neisseria']
},
{
  id:'U7-M-Q38', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Sífilis', sub:'Etapas clínicas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta una erupción cutánea que afecta característicamente palmas y plantas, junto con lesiones húmedas muy infecciosas en la región perianal, varias semanas después de una úlcera genital indolora que se resolvió sola.',
  enunciado:'¿A qué etapa de la sífilis corresponde este cuadro?',
  ops:['Sífilis primaria', 'Sífilis secundaria', 'Sífilis latente', 'Sífilis terciaria'],
  ok:1,
  clave:'Erupción palmoplantar y condilomas planos, semanas después del chancro: sífilis secundaria.',
  exp:'La sífilis secundaria aparece semanas a meses después de la resolución espontánea del chancro (la úlcera indolora de la sífilis primaria), por diseminación hematógena del Treponema pallidum. Su manifestación característica es una erupción cutánea que afecta de forma distintiva palmas y plantas, junto con condilomas planos (lesiones húmedas, muy infecciosas, en zonas genitales o perianales) y linfadenopatía generalizada. Reconocer esta etapa es importante porque estas lesiones son altamente infecciosas y porque, sin tratamiento, la infección progresará hacia la fase latente y eventualmente, en algunos pacientes, hacia la sífilis terciaria.',
  no:{
    0:'La sífilis primaria corresponde a la etapa del chancro (la úlcera genital indolora), que en este caso ya se resolvió; el cuadro descrito es posterior a esa etapa.',
    2:'La sífilis latente es asintomática por definición; el caso describe manifestaciones clínicas activas y características.',
    3:'La sífilis terciaria se manifiesta con afectación cardiovascular y neurológica, años después, no con erupción cutánea ni condilomas planos.'
  },
  trampa:'Confundir la etapa por no relacionar el tiempo transcurrido desde el chancro con la aparición típica de la erupción palmoplantar de la fase secundaria.',
  obj:'Identificar la sífilis secundaria por sus manifestaciones clínicas características.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['sífilis secundaria','erupción palmoplantar','condilomas planos','Treponema pallidum']
},
{
  id:'U7-M-Q39', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Pruebas serológicas de sífilis', sub:'No treponémicas vs. treponémicas',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Un paciente tratado con éxito por sífilis hace dos años tiene una prueba de FTA-ABS positiva en un control rutinario, sin síntomas. ¿Cómo debe interpretarse este resultado?',
  ops:[
    'Indica que el tratamiento falló y la infección sigue activa',
    'Es esperable: las pruebas treponémicas como FTA-ABS permanecen positivas de por vida tras la infección, incluso con tratamiento exitoso, y no sirven para monitorear la respuesta',
    'Indica una reinfección reciente',
    'Es un resultado falso positivo que siempre debe descartarse'
  ],
  ok:1,
  clave:'FTA-ABS permanece positiva de por vida tras la infección, incluso curada; no sirve para monitorear respuesta al tratamiento.',
  exp:'Las pruebas treponémicas específicas (como FTA-ABS) confirman que hubo infección por Treponema pallidum, pero una vez positivas suelen permanecer así de por vida, independientemente de si el tratamiento fue exitoso o no. Por eso no son útiles para monitorear la respuesta al tratamiento: para eso se usan las pruebas no treponémicas (VDRL o RPR), cuyos títulos sí bajan tras un tratamiento eficaz y pueden usarse para seguimiento. Un FTA-ABS positivo en un paciente ya tratado con éxito, sin síntomas, es exactamente el resultado esperado, no una señal de fallo terapéutico ni de reinfección.',
  no:{
    0:'El fallo del tratamiento se evaluaría con las pruebas no treponémicas (títulos de VDRL/RPR), no con la persistencia de una prueba treponémica, que se espera que quede positiva de por vida.',
    2:'Nada en el caso sugiere reinfección; el dato de FTA-ABS positivo persistente es compatible simplemente con el antecedente de la infección ya tratada.',
    3:'No es un falso positivo que deba descartarse de rutina; es el comportamiento esperado de esta prueba tras cualquier infección treponémica, tratada o no.'
  },
  trampa:'Interpretar cualquier prueba positiva como señal de infección activa, sin distinguir entre una prueba que confirma el antecedente (treponémica) y una que sirve para seguimiento de actividad (no treponémica).',
  obj:'Distinguir la utilidad clínica de las pruebas treponémicas y no treponémicas en el seguimiento de la sífilis.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['FTA-ABS','VDRL','sífilis','pruebas treponémicas']
},
{
  id:'U7-M-Q40', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Enfermedad de Lyme', sub:'Eritema migratorio',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una persona que regresó de una caminata en zona boscosa hace diez días presenta una lesión cutánea que se ha expandido gradualmente, con un aspecto de "diana": clara en el centro y con un anillo rojo periférico.',
  enunciado:'¿Qué agente y qué vector deben sospecharse con más fuerza?',
  ops:[
    'Leptospira, transmitida por agua contaminada',
    'Borrelia burgdorferi, transmitida por garrapatas del género Ixodes',
    'Treponema pallidum, transmitida por contacto sexual',
    'Rickettsia, transmitida por piojos'
  ],
  ok:1,
  clave:'El eritema migratorio en "diana" tras exposición en zona boscosa apunta a Borrelia burgdorferi por picadura de garrapata.',
  exp:'El eritema migratorio -una lesión cutánea expansiva con aspecto característico de "diana" o "ojo de buey"- es la manifestación inicial típica de la enfermedad de Lyme, causada por Borrelia burgdorferi y transmitida por la picadura de garrapatas del género Ixodes, típicamente en zonas boscosas de clima templado. El antecedente de actividad al aire libre en ese tipo de ambiente, junto con la morfología característica de la lesión, es prácticamente diagnóstico en el contexto clínico adecuado.',
  no:{
    0:'Leptospira se transmite por contacto con agua o suelo contaminados por orina animal, no produce una lesión cutánea en diana, y no está vinculada a caminatas en bosque per se.',
    2:'Treponema pallidum se transmite por contacto sexual (o vertical) y su lesión característica inicial es el chancro, no una lesión expansiva en diana.',
    3:'Rickettsia se transmite por otros vectores (piojos, pulgas, garrapatas según la especie) y produce cuadros distintos, sin la lesión característica descrita aquí.'
  },
  trampa:'No asociar el patrón visual específico de la lesión (diana/ojo de buey) con la enfermedad y el vector que lo produce de forma característica.',
  obj:'Reconocer el eritema migratorio como signo clínico distintivo de la enfermedad de Lyme.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['enfermedad de Lyme','eritema migratorio','Borrelia burgdorferi','Ixodes']
},
{
  id:'U7-M-Q41', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Micobacterias', sub:'Tinción ácido-alcohol resistente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué Mycobacterium tuberculosis se identifica con la tinción de Ziehl-Neelsen en lugar de la tinción de Gram?',
  ops:[
    'Porque carece de pared celular, como Mycoplasma',
    'Porque su pared, rica en ácidos micólicos, es impermeable a los colorantes acuosos del Gram, pero retiene la fucsina fenicada incluso tras el tratamiento con ácido-alcohol',
    'Porque es un virus y no una bacteria verdadera',
    'Porque no se puede visualizar con ninguna técnica de microscopía óptica'
  ],
  ok:1,
  clave:'La pared con ácidos micólicos es impermeable al Gram, pero retiene la fucsina fenicada pese al ácido-alcohol: de ahí "ácido-alcohol resistente".',
  exp:'Mycobacterium tuberculosis tiene una pared celular con un contenido excepcionalmente alto de ácidos micólicos, lípidos de cadena larga que la hacen impermeable a los colorantes acuosos comunes, incluido el cristal violeta del Gram. La tinción de Ziehl-Neelsen usa fucsina fenicada con calor, que sí logra penetrar esa pared cerosa, y luego intenta decolorar con ácido-alcohol: la mayoría de las bacterias pierden el colorante con este tratamiento agresivo, pero las micobacterias lo retienen por su pared lipídica, de ahí el término "bacilo ácido-alcohol resistente" (BAAR).',
  no:{
    0:'La ausencia de pared celular es característica de Mycoplasma, un género completamente distinto; las micobacterias sí tienen pared, solo que muy particular.',
    2:'Mycobacterium tuberculosis es una bacteria verdadera, no un virus; tiene su propia maquinaria metabólica y estructura celular procariota.',
    3:'Sí puede visualizarse con microscopía óptica, precisamente mediante la tinción de Ziehl-Neelsen (u otras técnicas ácido-alcohol resistentes como la de auramina-rodamina para fluorescencia).'
  },
  trampa:'Confundir la resistencia a la decoloración ácido-alcohólica (que define a las micobacterias) con la ausencia total de pared celular (que define a Mycoplasma), dos conceptos distintos.',
  obj:'Explicar el fundamento de la tinción ácido-alcohol resistente de las micobacterias.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['Ziehl-Neelsen','ácido-alcohol resistente','ácidos micólicos','Mycobacterium tuberculosis']
},
{
  id:'U7-M-Q42', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Tuberculosis latente', sub:'Reactivación',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con infección por VIH avanzada, previamente asintomático respecto a tuberculosis, desarrolla ahora tos crónica, fiebre, sudoración nocturna y pérdida de peso, con una lesión cavitada en el lóbulo superior derecho.',
  enunciado:'¿Qué proceso explica mejor la aparición de este cuadro en este momento?',
  ops:[
    'Una infección primaria nueva, adquirida recientemente por primera vez',
    'La reactivación de bacilos de Mycobacterium tuberculosis que permanecían latentes desde una infección primaria contenida previamente, favorecida por la inmunosupresión',
    'Una reacción alérgica a la vacuna BCG',
    'Una infección por el complejo Mycobacterium avium, no por M. tuberculosis'
  ],
  ok:1,
  clave:'La inmunosupresión por VIH permite la reactivación de bacilos latentes contenidos previamente en un granuloma.',
  exp:'En la infección primaria por tuberculosis, el sistema inmune del huésped suele contener al bacilo formando un granuloma (complejo de Ghon), sin erradicarlo por completo: queda viable en estado latente, potencialmente durante toda la vida, sin causar síntomas. Cuando el sistema inmune se debilita significativamente -como ocurre en el VIH avanzado-, se pierde el control sobre esos bacilos latentes, que retoman su replicación activa, típicamente en los lóbulos superiores del pulmón, y producen la enfermedad activa, con los síntomas clásicos descritos (tos crónica, fiebre, sudoración nocturna, pérdida de peso) y lesiones cavitadas visibles en imagen.',
  no:{
    0:'El cuadro es más consistente con reactivación de una infección previa latente que con una infección primaria completamente nueva, dado el contexto de inmunosupresión progresiva.',
    2:'No hay elementos en el caso que sugieran una reacción alérgica a la vacuna; el cuadro clínico e imagenológico es característico de tuberculosis activa.',
    3:'El complejo M. avium es relevante en VIH avanzado, pero produce típicamente infección diseminada, no la presentación pulmonar cavitada clásica descrita, que es más propia de M. tuberculosis.'
  },
  trampa:'No conectar el contexto de inmunosupresión progresiva con el concepto de reactivación de una infección latente previa, en vez de asumir una infección completamente nueva.',
  obj:'Explicar el mecanismo de reactivación de la tuberculosis latente en el contexto de inmunosupresión.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['tuberculosis latente','reactivación','VIH','complejo de Ghon']
},
{
  id:'U7-M-Q43', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Mycobacterium leprae', sub:'Espectro clínico',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica distingue a Mycobacterium leprae de la mayoría de las demás bacterias clínicamente relevantes en cuanto a su estudio en el laboratorio?',
  ops:[
    'No puede cultivarse en medios artificiales de laboratorio',
    'Crece más rápido que cualquier otra bacteria conocida',
    'Solo puede identificarse por serología, nunca por tinción',
    'No causa ninguna forma de enfermedad en humanos'
  ],
  ok:0,
  clave:'M. leprae es una de las pocas bacterias clínicamente relevantes que no puede cultivarse en medios artificiales.',
  exp:'Mycobacterium leprae, causante de la lepra (enfermedad de Hansen), tiene la particularidad de no poder cultivarse en medios artificiales de laboratorio convencionales, a diferencia de la gran mayoría de las bacterias de relevancia clínica. Esta limitación ha dificultado históricamente su estudio y el desarrollo de pruebas diagnósticas basadas en cultivo. La lepra presenta un espectro clínico que va desde la forma tuberculoide (respuesta inmune fuerte, pocas lesiones, baja carga bacilar) hasta la forma lepromatosa (respuesta inmune débil, lesiones difusas, alta carga bacilar y mayor contagiosidad).',
  no:{
    1:'M. leprae no se caracteriza por un crecimiento rápido; de hecho, su imposibilidad de cultivo en laboratorio es justamente lo contrario de una característica de crecimiento veloz.',
    2:'Sí puede identificarse por otras técnicas, como la biopsia con tinción específica de las lesiones, no exclusivamente por serología.',
    3:'M. leprae sí causa enfermedad humana (la lepra), con un espectro clínico bien caracterizado que afecta piel y nervios periféricos.'
  },
  trampa:'Asumir que todas las bacterias clínicamente relevantes pueden cultivarse en el laboratorio; M. leprae es una excepción importante a esa regla general.',
  obj:'Reconocer la incapacidad de cultivo de Mycobacterium leprae como una característica distintiva.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['Mycobacterium leprae','lepra','cultivo','espectro clínico']
},
{
  id:'U7-M-Q44', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Hemocultivo', sub:'Técnica de toma',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Se toma un único hemocultivo a un paciente febril hospitalizado, antes de iniciar antibióticos, y crece Staphylococcus epidermidis.',
  enunciado:'¿Cómo debe interpretarse este resultado, considerando que se tomó un solo hemocultivo?',
  ops:[
    'Es diagnóstico inequívoco de bacteriemia verdadera por S. epidermidis',
    'Es más sugerente de contaminación de la piel durante la toma de la muestra que de infección real, y se recomienda repetir con al menos dos sitios de punción distintos',
    'Descarta cualquier infección bacteriana en este paciente',
    'Indica que el paciente debe recibir vancomicina de inmediato sin más estudios'
  ],
  ok:1,
  clave:'Un solo hemocultivo positivo para un organismo típico de piel es más sugerente de contaminación; se recomiendan al menos dos sitios distintos.',
  exp:'El rendimiento e interpretación del hemocultivo depende críticamente de la técnica de toma: se recomienda obtener muestras de al menos dos sitios de punción distintos antes de iniciar antibióticos, precisamente para poder distinguir una bacteriemia verdadera de una contaminación de la piel durante la punción. Staphylococcus epidermidis es un organismo típico de la flora normal de la piel, así que un único hemocultivo positivo para este organismo es más sugerente de contaminación que de infección real -si creciera en dos o más sitios distintos, la sospecha de infección verdadera aumentaría considerablemente.',
  no:{
    0:'Con un solo hemocultivo positivo para un organismo de flora cutánea normal, no puede afirmarse con certeza que se trate de bacteriemia verdadera; es más consistente con contaminación.',
    2:'Un resultado de contaminación probable no equivale a descartar toda infección bacteriana; simplemente no confirma bacteriemia por ese hallazgo específico.',
    3:'No está indicado iniciar tratamiento dirigido de inmediato basado en un solo hemocultivo con un organismo típico de contaminación, sin antes repetir la toma con la técnica adecuada.'
  },
  trampa:'Interpretar cualquier hemocultivo positivo como bacteriemia verdadera sin considerar el número de muestras tomadas ni el organismo identificado.',
  obj:'Interpretar correctamente un hemocultivo positivo considerando el número de sitios de toma y el organismo aislado.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['hemocultivo','contaminación','Staphylococcus epidermidis','bacteriemia']
},
{
  id:'U7-M-Q45', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Ventana serológica', sub:'Falso negativo temprano',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una persona con una exposición de riesgo hace cinco días solicita una prueba serológica para descartar una infección, y el resultado es negativo.',
  enunciado:'¿Cómo debe interpretarse este resultado negativo tan temprano tras la exposición?',
  ops:[
    'Descarta con certeza absoluta la infección, sin necesidad de repetir la prueba',
    'Puede ser un falso negativo por estar dentro de la ventana serológica, el tiempo que tarda el sistema inmune en generar anticuerpos detectables; conviene repetir la prueba más adelante si la sospecha clínica persiste',
    'Indica que la persona nunca podrá infectarse por esa exposición',
    'Significa que la prueba serológica utilizada no es válida para ningún momento'
  ],
  ok:1,
  clave:'A los pocos días de la exposición, un resultado negativo puede deberse a la ventana serológica, no a ausencia real de infección.',
  exp:'La serología detecta anticuerpos generados por el sistema inmune del huésped contra un patógeno, no al patógeno directamente. Existe un periodo, la ventana serológica, entre la exposición y el momento en que el sistema inmune genera anticuerpos en cantidad detectable (típicamente días a semanas), durante el cual una prueba serológica puede ser falsamente negativa aunque la infección ya esté presente. Por eso, ante una exposición muy reciente con sospecha clínica alta, un resultado negativo no descarta la infección de forma definitiva, y se recomienda repetir la prueba pasado un tiempo prudencial.',
  no:{
    0:'Precisamente por el fenómeno de la ventana serológica, un resultado negativo tan temprano no tiene la certeza absoluta que se plantea en esta opción.',
    2:'El resultado negativo temprano no tiene ninguna relación con una supuesta inmunidad futura frente a esa exposición; es simplemente una limitación temporal de la prueba.',
    3:'La prueba sí es válida, pero en un momento posterior, una vez pasada la ventana serológica; no es que la prueba en sí carezca de validez en general.'
  },
  trampa:'Tomar un resultado serológico negativo como definitivo sin considerar el tiempo transcurrido desde la exposición y el concepto de ventana serológica.',
  obj:'Explicar el concepto de ventana serológica y su implicación en la interpretación de un resultado negativo temprano.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['ventana serológica','serología','falso negativo','anticuerpos']
},
{
  id:'U7-M-Q46', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'PCR diagnóstica', sub:'Ventajas sobre el cultivo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la principal ventaja de una prueba de PCR frente al cultivo tradicional para diagnosticar una infección por un organismo de crecimiento muy lento, como Mycobacterium tuberculosis?',
  ops:[
    'La PCR siempre reemplaza por completo la necesidad de un antibiograma',
    'La PCR detecta el material genético del organismo directamente, con alta sensibilidad y en mucho menos tiempo que esperar semanas de cultivo',
    'La PCR no requiere ningún tipo de muestra biológica del paciente',
    'La PCR es menos sensible que el cultivo para organismos de crecimiento lento'
  ],
  ok:1,
  clave:'La PCR detecta el material genético directamente, con alta sensibilidad, sin esperar el crecimiento lento del cultivo.',
  exp:'Las técnicas moleculares como la PCR amplifican y detectan secuencias específicas de ácido nucleico del patógeno, sin necesidad de que el organismo crezca en cultivo. Esto es especialmente ventajoso para organismos de crecimiento muy lento en cultivo, como Mycobacterium tuberculosis (que puede tardar semanas en dar resultado por cultivo), porque la PCR puede dar un resultado con alta sensibilidad en cuestión de horas. Sin embargo, la PCR detecta la presencia del material genético, no necesariamente la sensibilidad a antibióticos específicos del organismo, así que no reemplaza completamente al antibiograma, que sigue requiriendo, en general, un cultivo viable.',
  no:{
    0:'La PCR no reemplaza por completo al antibiograma, que sigue siendo necesario para determinar sensibilidad a antibióticos específicos en la mayoría de los casos.',
    2:'La PCR sí requiere una muestra biológica del paciente, de la cual se extrae el material genético a amplificar.',
    3:'La PCR es, en general, MÁS sensible que el cultivo para detectar organismos de crecimiento lento o difícil, no menos sensible.'
  },
  trampa:'Asumir que la PCR reemplaza completamente al cultivo y al antibiograma, cuando en realidad responde una pregunta distinta (presencia del organismo) y no siempre sustituye la necesidad de determinar sensibilidad a antibióticos.',
  obj:'Explicar la ventaja de la PCR sobre el cultivo tradicional para organismos de crecimiento lento.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['PCR','diagnóstico molecular','Mycobacterium tuberculosis','sensibilidad']
},
{
  id:'U7-M-Q47', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Flora normal', sub:'Distribución por sitio',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de los siguientes sitios del cuerpo humano es normalmente ESTÉRIL, de modo que encontrar cualquier bacteria en él es, por definición, anormal?',
  ops:['Colon', 'Boca', 'Líquido cefalorraquídeo', 'Piel'],
  ok:2,
  clave:'El líquido cefalorraquídeo es normalmente estéril; cualquier bacteria encontrada ahí es anormal.',
  exp:'La distribución de la flora normal no es uniforme en el cuerpo: es abundante en el colon (el sitio con mayor concentración de microorganismos), moderada en boca, piel y vagina, y prácticamente ausente en sitios normalmente protegidos, como la sangre, el líquido cefalorraquídeo, las articulaciones y la vejiga urinaria en ausencia de infección. Encontrar cualquier bacteria en el líquido cefalorraquídeo, por tanto, es siempre un hallazgo anormal que sugiere infección (meningitis), y no puede interpretarse como flora normal ni como contaminación benigna de la misma manera que ocurriría en un cultivo de piel.',
  no:{
    0:'El colon es, de hecho, el sitio con la mayor concentración y diversidad de flora normal de todo el cuerpo, no un sitio estéril.',
    1:'La boca tiene una flora normal moderada y diversa, no es un sitio estéril.',
    3:'La piel tiene flora normal residente (como Staphylococcus epidermidis), no es un sitio estéril.'
  },
  trampa:'Asumir que todos los sitios del cuerpo tienen algún grado de flora normal, sin reconocer que existen sitios que normalmente son completamente estériles.',
  obj:'Identificar los sitios del cuerpo humano que son normalmente estériles.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['flora normal','líquido cefalorraquídeo','sitio estéril','microbiota']
},
{
  id:'U7-M-Q48', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Colonización vs. infección', sub:'Definiciones',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia fundamental entre colonización e infección?',
  ops:[
    'La colonización siempre requiere tratamiento antibiótico; la infección nunca',
    'La colonización es presencia del microorganismo sin invasión de tejido ni respuesta inflamatoria; la infección implica invasión y respuesta del huésped',
    'No existe diferencia real entre ambos términos',
    'La colonización solo ocurre en pacientes inmunosuprimidos'
  ],
  ok:1,
  clave:'Colonización = presencia sin invasión ni respuesta. Infección = invasión + respuesta inflamatoria del huésped.',
  exp:'Colonización es la presencia de un microorganismo en o sobre el cuerpo sin que invada tejidos ni provoque una respuesta inflamatoria del huésped: es una convivencia sin daño. Infección implica que el microorganismo invade tejido, se multiplica de forma patológica y provoca una respuesta del huésped, con inflamación y síntomas. La misma especie bacteriana puede estar en cualquiera de los dos estados según el contexto: Staphylococcus aureus coloniza las fosas nasales de muchas personas sanas sin causar problema alguno, pero puede causar infección grave si accede a un sitio estéril por una puerta de entrada.',
  no:{
    0:'La colonización, por definición, no suele requerir tratamiento antibiótico (no hay infección activa que tratar); es la infección la que puede requerirlo según el caso.',
    2:'Sí existe una diferencia conceptual clara y clínicamente relevante entre ambos términos, con implicaciones directas sobre la necesidad de tratamiento.',
    3:'La colonización ocurre de forma normal y constante en personas sanas, no exclusivamente en inmunosuprimidos.'
  },
  trampa:'Tratar "colonización" e "infección" como sinónimos, cuando la distinción entre ambos es justamente lo que determina si un hallazgo microbiológico requiere tratamiento.',
  obj:'Distinguir conceptualmente colonización de infección.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['colonización','infección','patógeno oportunista','flora normal']
},
{
  id:'U7-M-Q49', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Disbiosis', sub:'Colitis por Clostridioides difficile',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente hospitalizado desarrolla diarrea abundante durante un curso prolongado de antibióticos de amplio espectro administrados por una infección respiratoria.',
  enunciado:'¿Qué mecanismo explica mejor esta diarrea, más allá de un simple efecto adverso gastrointestinal del antibiótico?',
  ops:[
    'El antibiótico dañó directamente la mucosa intestinal por toxicidad química',
    'La eliminación de la flora intestinal normal por el antibiótico permitió el sobrecrecimiento de Clostridioides difficile, naturalmente resistente a muchos de esos antibióticos, y la producción de sus toxinas',
    'Es una reacción alérgica sistémica al antibiótico',
    'Es una coincidencia sin relación con el tratamiento antibiótico'
  ],
  ok:1,
  clave:'La disbiosis por eliminación de flora competidora permite el sobrecrecimiento de C. difficile, resistente a esos antibióticos.',
  exp:'La colitis por Clostridioides difficile es el ejemplo clásico de disbiosis por sobrecrecimiento: el uso de antibióticos de amplio espectro elimina buena parte de la flora intestinal normal que compite con C. difficile por espacio y nutrientes, dejando espacio para que esta bacteria -naturalmente resistente a muchos de esos antibióticos- prolifere sin competencia y produzca sus toxinas, causando diarrea que puede ser desde leve hasta grave (colitis pseudomembranosa). Es importante distinguir este mecanismo de un simple efecto adverso gastrointestinal directo del fármaco, porque el manejo es distinto: puede requerir un antibiótico específico dirigido contra C. difficile, no solo suspender el causante.',
  no:{
    0:'No se trata de toxicidad química directa sobre la mucosa; el mecanismo es indirecto, a través de la alteración del equilibrio de la flora intestinal.',
    2:'No es una reacción alérgica sistémica; es un fenómeno de disbiosis con sobrecrecimiento de un organismo específico.',
    3:'La relación temporal con el uso de antibióticos de amplio espectro es justamente la clave para sospechar este mecanismo, no una coincidencia sin relación.'
  },
  trampa:'Atribuir la diarrea a un efecto adverso genérico del antibiótico sin considerar el mecanismo específico de disbiosis y sobrecrecimiento de un patógeno resistente.',
  obj:'Explicar el mecanismo de disbiosis que subyace a la colitis por Clostridioides difficile asociada a antibióticos.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['Clostridioides difficile','disbiosis','antibióticos de amplio espectro','colitis']
},
{
  id:'U7-M-Q50', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Patógeno oportunista', sub:'Concepto general',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué define a un microorganismo como "patógeno oportunista"?',
  ops:[
    'Es un organismo que siempre causa enfermedad grave en cualquier huésped',
    'Es un organismo, a menudo parte de la flora normal o de baja virulencia intrínseca, que solo causa enfermedad cuando las defensas del huésped están comprometidas o accede a un sitio que normalmente no habita',
    'Es exclusivamente un virus que solo infecta a personas sanas',
    'Es un organismo que nunca forma parte de la flora normal'
  ],
  ok:1,
  clave:'Patógeno oportunista = organismo de baja virulencia o de la flora normal que enferma solo en contexto favorable (huésped comprometido o sitio anormal).',
  exp:'Un patógeno oportunista es un microorganismo -con frecuencia parte de la flora normal del cuerpo, o de baja virulencia intrínseca- que solo causa enfermedad cuando cambian las condiciones habituales: cuando las defensas del huésped están comprometidas (inmunosupresión, neutropenia, dispositivos médicos que rompen barreras naturales) o cuando el organismo accede a un sitio del cuerpo que normalmente no coloniza (por ejemplo, un sitio estéril). Candida albicans (flora normal de mucosas) y Staphylococcus epidermidis (flora normal de piel) son ejemplos clásicos: en el huésped sano y en su sitio habitual no causan problema, pero sí lo hacen en el contexto adecuado.',
  no:{
    0:'Un patógeno oportunista no causa enfermedad de forma indiscriminada en cualquier huésped; su capacidad de enfermar depende específicamente del contexto del huésped o del sitio de acceso.',
    2:'El concepto de patógeno oportunista no se limita a virus ni implica que afecte preferentemente a personas sanas; de hecho, ocurre lo contrario: afecta preferentemente a huéspedes comprometidos.',
    3:'Muchos patógenos oportunistas SÍ forman parte de la flora normal en condiciones habituales; esa es, de hecho, una característica frecuente de este grupo.'
  },
  trampa:'Definir "patógeno oportunista" como sinónimo de "muy virulento" o "ajeno al cuerpo", cuando el concepto central es la dependencia del contexto del huésped para causar enfermedad.',
  obj:'Definir el concepto de patógeno oportunista y reconocer ejemplos característicos.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['patógeno oportunista','flora normal','huésped comprometido','Candida']
}

]);
