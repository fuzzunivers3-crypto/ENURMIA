/* ============================================================
   CASOS CLINICOS INTERACTIVOS y PACIENTES VIRTUALES
   - CASOS: arbol de decisiones. Cada eleccion cambia la historia.
   - PACIENTES: interrogatorio libre por palabras clave, examen
     fisico y estudios. Funciona sin conexion.
   ============================================================ */

window.CASOS = [
{
  id:'CL-01',
  titulo:'Dolor torácico a las 3 de la madrugada',
  esp:'Emergencias', dif:3,
  resumen:'Hombre de 56 años, llega caminando a emergencias con dolor en el pecho.',
  paciente:{ edad:56, sexo:'Masculino', motivo:'"Me duele el pecho desde hace como una hora"' },
  vitales:{ TA:'148/88', FC:'96', FR:'20', T:'36.8 °C', Sat:'97%' },
  nodos:{
    inicio:{
      texto:'El paciente está sentado, pálido y sudoroso. Refiere dolor opresivo retroesternal que comenzó hace una hora mientras dormía. ¿Qué haces primero?',
      opciones:[
        { txt:'Electrocardiograma de 12 derivaciones', sig:'ecg', pts:25, retro:'Correcto. El ECG en los primeros 10 minutos es el paso que define todo lo demás.' },
        { txt:'Radiografía de tórax', sig:'rx', pts:5, retro:'No es incorrecto pedirla, pero no debe ir antes del ECG en un dolor torácico isquémico.' },
        { txt:'Analgesia con morfina y reevaluar en 30 minutos', sig:'morfina', pts:-10, retro:'Quitar el dolor sin saber su causa apaga la señal que te está guiando.' },
        { txt:'Enviarlo a casa con omeprazol por probable reflujo', sig:'alta', pts:-30, retro:'Con este perfil de riesgo y estas características del dolor, dar de alta es peligroso.' }
      ]
    },
    ecg:{
      texto:'El ECG muestra elevación del segmento ST de 3 mm en DII, DIII y aVF, con descenso especular en DI y aVL. La tensión arterial baja a 88/54 mmHg. ¿Cuál es tu siguiente paso?',
      opciones:[
        { txt:'Solicitar derivaciones derechas (V4R)', sig:'v4r', pts:25, retro:'Excelente. Un infarto inferior con hipotensión obliga a buscar compromiso del ventrículo derecho.' },
        { txt:'Administrar nitroglicerina sublingual para el dolor', sig:'nitro', pts:-25, retro:'Peligroso: si hay infarto de ventrículo derecho, el nitrato puede colapsar la presión.' },
        { txt:'Activar reperfusión y trasladar sin más evaluación', sig:'reperfusion', pts:10, retro:'La reperfusión es correcta y urgente, pero te saltaste la evaluación del ventrículo derecho.' }
      ]
    },
    v4r:{
      texto:'V4R muestra elevación del ST: hay infarto de ventrículo derecho. El paciente sigue hipotenso, con yugulares ingurgitadas y pulmones limpios. ¿Qué haces?',
      opciones:[
        { txt:'Carga de volumen con solución salina y activar reperfusión', sig:'final_bueno', pts:30, retro:'Exacto. El ventrículo derecho infartado depende de la precarga.' },
        { txt:'Furosemida por la ingurgitación yugular', sig:'final_malo', pts:-30, retro:'La ingurgitación aquí es falla derecha, no sobrecarga. El diurético empeora el gasto.' },
        { txt:'Dopamina antes de dar volumen', sig:'final_regular', pts:5, retro:'Los inotrópicos vienen después de optimizar el volumen, no antes.' }
      ]
    },
    nitro:{
      texto:'Tras la nitroglicerina la presión cae a 68/40 mmHg y el paciente se torna somnoliento. ¿Cómo lo corriges?',
      opciones:[
        { txt:'Suspender el nitrato y cargar volumen rápidamente', sig:'final_recuperado', pts:15, retro:'Buena recuperación. Reconociste el error y lo revertiste.' },
        { txt:'Añadir un segundo antihipertensivo', sig:'final_malo', pts:-30, retro:'Estás profundizando la hipotensión.' }
      ]
    },
    rx:{
      texto:'La radiografía no muestra alteraciones significativas. Han pasado 18 minutos. El paciente continúa con dolor.',
      opciones:[
        { txt:'Electrocardiograma ahora', sig:'ecg', pts:10, retro:'Llegaste al paso correcto, con retraso.' },
        { txt:'Solicitar troponinas y esperar el resultado', sig:'final_regular', pts:-15, retro:'Esperar troponinas antes del ECG retrasa la reperfusión: una troponina normal precoz no descarta nada.' }
      ]
    },
    morfina:{
      texto:'El dolor mejora, pero 25 minutos después el paciente presenta bradicardia e hipotensión. ¿Qué haces?',
      opciones:[
        { txt:'Electrocardiograma inmediato', sig:'ecg', pts:10, retro:'Correcto, aunque perdiste tiempo valioso.' },
        { txt:'Repetir dosis de morfina', sig:'final_malo', pts:-30, retro:'El paciente se está deteriorando y sigues sin diagnóstico.' }
      ]
    },
    alta:{
      texto:'Cuarenta minutos después el paciente regresa en paro cardiorrespiratorio traído por sus familiares.',
      opciones:[ { txt:'Ver el análisis del caso', sig:'final_malo', pts:0, retro:'' } ]
    },
    reperfusion:{
      texto:'Se activa la reperfusión. Durante el traslado el paciente se hipotensa aún más, porque no se identificó el compromiso del ventrículo derecho.',
      opciones:[
        { txt:'Cargar volumen ahora', sig:'final_recuperado', pts:15, retro:'Rescataste la situación.' },
        { txt:'Continuar el traslado sin cambios', sig:'final_regular', pts:0, retro:'El paciente llega en peores condiciones de las necesarias.' }
      ]
    },
    final_bueno:{ final:true, nivel:'excelente',
      texto:'El paciente estabiliza la presión con volumen y llega a la sala de hemodinamia con perfusión adecuada. Angioplastia primaria exitosa de la coronaria derecha.',
      dx:'Infarto agudo de miocardio inferior con extensión al ventrículo derecho',
      ensena:'El infarto inferior con hipotensión, yugulares ingurgitadas y pulmones limpios es ventrículo derecho hasta demostrar lo contrario. Se maneja con volumen y sin reductores de precarga.' },
    final_recuperado:{ final:true, nivel:'aceptable',
      texto:'El paciente se recupera tras corregir la conducta, pero pasó por un periodo de hipoperfusión evitable.',
      dx:'Infarto agudo de miocardio inferior con extensión al ventrículo derecho',
      ensena:'Reconocer el error a tiempo salva al paciente. Aun así, anticiparse habría evitado el episodio.' },
    final_regular:{ final:true, nivel:'mejorable',
      texto:'El paciente sobrevive, pero con más tiempo de isquemia del necesario.',
      dx:'Infarto agudo de miocardio inferior',
      ensena:'En el infarto el tiempo es músculo. Cada paso que no aporta información que cambie la conducta cuesta miocardio.' },
    final_malo:{ final:true, nivel:'grave',
      texto:'El paciente evoluciona a shock cardiogénico.',
      dx:'Infarto agudo de miocardio inferior con extensión al ventrículo derecho',
      ensena:'Dos reglas: el ECG va primero en todo dolor torácico isquémico, y en el infarto de ventrículo derecho los nitratos y diuréticos están contraindicados.' }
  }
},
{
  id:'CL-02',
  titulo:'Fiebre al quinto día',
  esp:'Infectología', dif:3,
  resumen:'Mujer de 28 años, quinto día de fiebre, hoy amaneció sin fiebre pero se siente peor.',
  paciente:{ edad:28, sexo:'Femenino', motivo:'"La fiebre se me quitó, pero me duele mucho el estómago"' },
  vitales:{ TA:'104/68', FC:'104', FR:'20', T:'37.1 °C', Sat:'98%' },
  nodos:{
    inicio:{
      texto:'Refiere cinco días de fiebre alta, dolor retroocular y mialgias. Hoy la fiebre cedió, pero comenzó con dolor abdominal intenso y ha vomitado cuatro veces. ¿Qué haces primero?',
      opciones:[
        { txt:'Hemograma con hematocrito y plaquetas', sig:'labs', pts:25, retro:'Correcto. La hemoconcentración y la caída de plaquetas definen la fase crítica.' },
        { txt:'Dar de alta con acetaminofén, ya que la fiebre cedió', sig:'alta', pts:-30, retro:'La defervescencia en dengue marca el inicio de la fase crítica, no la mejoría.' },
        { txt:'Iniciar antibiótico por posible infección abdominal', sig:'antibiotico', pts:-10, retro:'No hay foco bacteriano. El cuadro tiene un patrón viral con signos de alarma.' },
        { txt:'Solicitar tomografía abdominal', sig:'tac', pts:-5, retro:'El dolor abdominal aquí es un signo de alarma del dengue, no un abdomen quirúrgico.' }
      ]
    },
    labs:{
      texto:'Hematocrito 47% (previo 39%), plaquetas 74,000/mm³, leucocitos 3,200/mm³. NS1 positivo. ¿Cuál es tu conducta?',
      opciones:[
        { txt:'Hospitalizar e iniciar hidratación intravenosa con cristaloides', sig:'final_bueno', pts:30, retro:'Correcto. Dengue con signos de alarma: hospitalización e hidratación intravenosa.' },
        { txt:'Transfundir plaquetas por la trombocitopenia', sig:'final_malo', pts:-25, retro:'No se transfunde por la cifra: se transfunde por sangrado grave activo.' },
        { txt:'Manejo ambulatorio con sales de rehidratación oral', sig:'final_regular', pts:-15, retro:'Los signos de alarma excluyen el manejo ambulatorio.' }
      ]
    },
    alta:{
      texto:'Diez horas después la paciente regresa con extremidades frías, pulso filiforme y presión de 80/60 mmHg.',
      opciones:[
        { txt:'Reanimación con cristaloides y hospitalizar', sig:'final_recuperado', pts:10, retro:'Se rescató, pero llegó a choque por una decisión evitable.' },
        { txt:'Observación 6 horas más', sig:'final_malo', pts:-30, retro:'El choque por dengue avanza rápido.' }
      ]
    },
    antibiotico:{
      texto:'Sin cambios tras el antibiótico. La paciente continúa vomitando y aparece sangrado gingival.',
      opciones:[ { txt:'Solicitar hemograma y reevaluar', sig:'labs', pts:5, retro:'Volviste al camino correcto.' } ]
    },
    tac:{
      texto:'La tomografía muestra líquido libre perihepático y engrosamiento de la pared vesicular, hallazgos compatibles con extravasación de plasma.',
      opciones:[ { txt:'Solicitar hemograma y hospitalizar', sig:'labs', pts:10, retro:'La imagen apuntaba a fuga capilar, no a cirugía.' } ]
    },
    final_bueno:{ final:true, nivel:'excelente',
      texto:'Con hidratación controlada y vigilancia horaria la paciente atraviesa la fase crítica sin choque. A las 48 horas inicia la fase de recuperación.',
      dx:'Dengue con signos de alarma',
      ensena:'En dengue, la caída de la fiebre abre la fase crítica. Los signos de alarma —dolor abdominal intenso, vómitos persistentes, hemoconcentración— obligan a hospitalizar e hidratar por vía intravenosa.' },
    final_recuperado:{ final:true, nivel:'aceptable',
      texto:'La paciente sale del choque tras la reanimación, con estancia prolongada.',
      dx:'Dengue grave (choque por dengue)',
      ensena:'El choque era evitable. La clave estaba en no interpretar la defervescencia como mejoría.' },
    final_regular:{ final:true, nivel:'mejorable',
      texto:'La paciente regresa en 12 horas con deterioro y requiere ingreso urgente.',
      dx:'Dengue con signos de alarma',
      ensena:'Los signos de alarma no son sugerencias: son criterio de hospitalización.' },
    final_malo:{ final:true, nivel:'grave',
      texto:'La paciente evoluciona a choque prolongado con disfunción orgánica.',
      dx:'Dengue grave',
      ensena:'Ni la transfusión profiláctica de plaquetas ni la observación pasiva sustituyen la hidratación temprana y controlada.' }
  }
},
{
  id:'CL-03',
  titulo:'Una convulsión en el embarazo',
  esp:'Ginecología y Obstetricia', dif:4,
  resumen:'Primigesta de 22 años, 35 semanas, llega convulsionando.',
  paciente:{ edad:22, sexo:'Femenino', motivo:'Traída por familiares tras una convulsión en casa' },
  vitales:{ TA:'175/115', FC:'110', FR:'22', T:'36.9 °C', Sat:'95%' },
  nodos:{
    inicio:{
      texto:'La paciente acaba de convulsionar y está postictal. Embarazo de 35 semanas, sin control prenatal. Edema en manos y cara. ¿Cuál es tu primera acción?',
      opciones:[
        { txt:'Proteger la vía aérea, colocar en decúbito lateral izquierdo y administrar oxígeno', sig:'via', pts:25, retro:'Correcto. Primero se asegura a la madre; la posición lateral izquierda mejora el retorno venoso.' },
        { txt:'Cesárea de urgencia inmediata', sig:'cesarea', pts:-15, retro:'El nacimiento es el tratamiento definitivo, pero primero hay que estabilizar a la madre.' },
        { txt:'Diazepam intravenoso para prevenir nuevas convulsiones', sig:'diazepam', pts:-10, retro:'En eclampsia el fármaco de elección es el sulfato de magnesio, no las benzodiacepinas.' }
      ]
    },
    via:{
      texto:'La paciente está estable en decúbito lateral con oxígeno. ¿Cuál es el fármaco prioritario?',
      opciones:[
        { txt:'Sulfato de magnesio en dosis de carga y mantenimiento', sig:'magnesio', pts:30, retro:'Correcto. Es superior a cualquier otro anticonvulsivo en eclampsia.' },
        { txt:'Fenitoína en carga', sig:'final_regular', pts:-10, retro:'Inferior al sulfato de magnesio en esta indicación.' },
        { txt:'Nifedipino como única medida', sig:'final_regular', pts:0, retro:'Controlar la presión es necesario, pero no previene nuevas convulsiones.' }
      ]
    },
    magnesio:{
      texto:'Se administra sulfato de magnesio. La presión persiste en 172/112 mmHg. Una hora después notas que los reflejos rotulianos están ausentes y la frecuencia respiratoria bajó a 10 por minuto.',
      opciones:[
        { txt:'Suspender el magnesio y administrar gluconato de calcio', sig:'final_bueno', pts:30, retro:'Correcto: es intoxicación por magnesio y el calcio es su antídoto.' },
        { txt:'Aumentar la infusión de magnesio porque la presión sigue alta', sig:'final_malo', pts:-30, retro:'La arreflexia y la depresión respiratoria son signos de toxicidad por magnesio.' },
        { txt:'Administrar naloxona', sig:'final_malo', pts:-20, retro:'No hay opioides implicados.' }
      ]
    },
    cesarea:{
      texto:'En quirófano la paciente convulsiona nuevamente durante la inducción anestésica, sin haber recibido sulfato de magnesio.',
      opciones:[ { txt:'Administrar sulfato de magnesio ahora', sig:'magnesio', pts:10, retro:'Corregiste el orden, con riesgo añadido.' } ]
    },
    diazepam:{
      texto:'La convulsión cede, pero la paciente queda más somnolienta y la presión sigue en 178/116 mmHg.',
      opciones:[ { txt:'Iniciar sulfato de magnesio y antihipertensivo', sig:'magnesio', pts:10, retro:'Ese era el camino desde el inicio.' } ]
    },
    final_bueno:{ final:true, nivel:'excelente',
      texto:'Se revierte la toxicidad, se controla la presión y se programa el nacimiento con la paciente estable. Madre y recién nacido evolucionan bien.',
      dx:'Eclampsia',
      ensena:'Secuencia en eclampsia: estabilizar a la madre, sulfato de magnesio, control de la presión y luego el nacimiento. Vigilar siempre reflejos, frecuencia respiratoria y diuresis: son el monitor de la toxicidad por magnesio.' },
    final_regular:{ final:true, nivel:'mejorable',
      texto:'La paciente presenta una segunda convulsión antes de recibir el tratamiento adecuado.',
      dx:'Eclampsia',
      ensena:'El sulfato de magnesio no es intercambiable con otros anticonvulsivos: es el estándar demostrado en eclampsia.' },
    final_malo:{ final:true, nivel:'grave',
      texto:'La paciente presenta paro respiratorio por toxicidad de magnesio y requiere ventilación mecánica.',
      dx:'Eclampsia con intoxicación por sulfato de magnesio',
      ensena:'La arreflexia rotuliana precede a la depresión respiratoria. Es el signo que se vigila en cada ronda, y el antídoto es el gluconato de calcio.' }
  }
}
];

/* ============================================================
   PACIENTES VIRTUALES — interrogatorio libre
   ============================================================ */
window.PACIENTES = [
{
  id:'PV-01',
  titulo:'"Me duele el pecho"',
  edad:45, sexo:'Masculino', esp:'Medicina Interna', dif:3,
  apertura:'Doctor, desde ayer tengo un dolor aquí en el pecho que no se me quita.',
  vitales:{ TA:'138/86', FC:'88', FR:'18', T:'36.6 °C', Sat:'98%' },
  dxCorrecto:'Pericarditis aguda',
  dxOpciones:['Síndrome coronario agudo','Pericarditis aguda','Tromboembolia pulmonar','Reflujo gastroesofágico','Disección aórtica'],
  tratamiento:'Antiinflamatorio no esteroideo más colchicina',
  tratamientoOpciones:['Trombólisis inmediata','Antiinflamatorio no esteroideo más colchicina','Anticoagulación plena','Inhibidor de bomba de protones','Betabloqueante y estatina'],
  interrogatorio:[
    { claves:['cuando','cuánto tiempo','desde','inicio','empezó','comenzo','comenzó'], r:'Empezó ayer en la tarde, poco a poco. No fue de golpe.', valor:'util' },
    { claves:['como es','característica','caracteristica','tipo de dolor','punzante','opresivo','describe'], r:'Es como una punzada. No es un peso, es más bien filoso.', valor:'clave' },
    { claves:['posicion','posición','acostar','sentar','inclinar','mejora','empeora','cambia'], r:'Cuando me acuesto se pone peor. Si me siento y me inclino hacia adelante, mejora bastante.', valor:'clave' },
    { claves:['respira','inspirar','toser','tos'], r:'Sí, cuando respiro hondo me duele más.', valor:'clave' },
    { claves:['irradia','brazo','mandibula','mandíbula','espalda','cuello'], r:'No, se queda aquí en el centro. No se corre al brazo.', valor:'util' },
    { claves:['esfuerzo','caminar','ejercicio','subir'], r:'No tiene que ver con caminar. Me duele igual quieto que moviéndome.', valor:'clave' },
    { claves:['fiebre','gripe','catarro','viral','resfriado','infeccion','infección'], r:'La semana pasada tuve como una gripe, con dolor de garganta y algo de fiebre.', valor:'clave' },
    { claves:['antecedente','enfermedad','diabetes','hipertension','hipertensión','presion','presión'], r:'No me han dicho que tenga nada. Nunca me han encontrado presión alta.', valor:'util' },
    { claves:['fuma','cigarrillo','tabaco','alcohol','droga'], r:'Fumo poco, como tres cigarrillos los fines de semana. Alcohol social nada más.', valor:'util' },
    { claves:['familia','papa','papá','mama','mamá','hereditario'], r:'Mi papá tuvo un infarto a los 70 años.', valor:'util' },
    { claves:['sudor','diaforesis','nausea','náusea','vomito','vómito'], r:'No he sudado frío ni he tenido náuseas.', valor:'util' },
    { claves:['pierna','hinchada','viaje','avion','avión','inmovil','inmóvil','cirugia','cirugía'], r:'No he viajado, no me he operado y no tengo las piernas hinchadas.', valor:'util' },
    { claves:['comida','comer','acidez','ardor','estomago','estómago'], r:'No tiene que ver con la comida. Me duele antes y después de comer igual.', valor:'util' }
  ],
  examen:[
    { claves:['auscultar corazon','corazón','cardiaco','cardíaco','ruidos','soplo','frote'], r:'Se ausculta un frote pericárdico áspero en el borde esternal izquierdo, que se escucha mejor con el paciente inclinado hacia adelante.', valor:'clave' },
    { claves:['pulmon','pulmón','respiratorio','auscultar pulmones','campos'], r:'Murmullo vesicular conservado en ambos campos. No hay estertores ni sibilancias.', valor:'util' },
    { claves:['yugular','ingurgitacion','ingurgitación','cuello'], r:'Yugulares no ingurgitadas con el paciente a 45 grados.', valor:'util' },
    { claves:['pierna','edema','miembros','pantorrilla','homans'], r:'Sin edema ni signos de trombosis venosa profunda en miembros inferiores.', valor:'util' },
    { claves:['presion','presión','ambos brazos','tension','tensión'], r:'Presión arterial simétrica en ambos brazos: 138/86 y 136/84 mmHg.', valor:'util' },
    { claves:['abdomen','palpar abdomen'], r:'Abdomen blando, depresible, sin dolor a la palpación.', valor:'irrelevante' },
    { claves:['pared','presionar el pecho','palpar torax','tórax','costilla'], r:'El dolor no se reproduce del todo al presionar la pared torácica.', valor:'util' }
  ],
  estudios:[
    { id:'ECG', nombre:'Electrocardiograma', r:'Elevación cóncava del ST en derivaciones de casi todo el trazado, con descenso del segmento PR. No hay cambios especulares.', valor:'clave' },
    { id:'TROP', nombre:'Troponina', r:'Ligeramente elevada, sin curva ascendente marcada.', valor:'util' },
    { id:'RX', nombre:'Radiografía de tórax', r:'Silueta cardíaca normal. Campos pulmonares limpios.', valor:'util' },
    { id:'ECO', nombre:'Ecocardiograma', r:'Lámina de derrame pericárdico. Función ventricular conservada, sin alteraciones segmentarias de la contractilidad.', valor:'util' },
    { id:'DD', nombre:'Dímero D', r:'Normal.', valor:'irrelevante' },
    { id:'ANGIO', nombre:'Angiotomografía de tórax', r:'Sin defectos de llenado en arterias pulmonares. Aorta sin disección.', valor:'innecesario' },
    { id:'HEMO', nombre:'Hemograma', r:'Leucocitos 11,200/mm³. Proteína C reactiva elevada.', valor:'util' },
    { id:'CATE', nombre:'Cateterismo cardíaco', r:'Coronarias sin lesiones significativas.', valor:'innecesario' }
  ],
  debiste:[
    'Preguntar cómo cambia el dolor con la posición del cuerpo',
    'Preguntar por un cuadro viral en los días previos',
    'Auscultar buscando frote pericárdico',
    'Solicitar el electrocardiograma'
  ],
  ensena:'La pericarditis se diagnostica al lado de la cama: dolor punzante que empeora al acostarse y mejora al inclinarse hacia adelante, antecedente viral reciente, frote pericárdico y elevación difusa del ST con descenso del PR.'
},
{
  id:'PV-02',
  titulo:'"Me falta el aire"',
  edad:34, sexo:'Femenino', esp:'Neumología', dif:4,
  apertura:'Doctora, desde esta mañana no puedo respirar bien y me duele al inspirar.',
  vitales:{ TA:'118/74', FC:'116', FR:'26', T:'37.2 °C', Sat:'91%' },
  dxCorrecto:'Tromboembolia pulmonar',
  dxOpciones:['Neumonía','Crisis de asma','Tromboembolia pulmonar','Neumotórax espontáneo','Crisis de ansiedad'],
  tratamiento:'Anticoagulación tras confirmar con angiotomografía',
  tratamientoOpciones:['Antibiótico de amplio espectro','Broncodilatador y corticoide','Anticoagulación tras confirmar con angiotomografía','Drenaje torácico','Ansiolítico y observación'],
  interrogatorio:[
    { claves:['cuando','desde','inicio','empezo','empezó','súbito','subito'], r:'De repente, esta mañana al levantarme. Fue de golpe.', valor:'clave' },
    { claves:['viaje','avion','avión','carro','sentada','inmovil','inmóvil','reposo','cama'], r:'Volví hace tres días de un viaje en avión de nueve horas.', valor:'clave' },
    { claves:['anticonceptivo','pastilla','hormona','estrogeno','estrógeno'], r:'Sí, tomo pastillas anticonceptivas desde hace dos años.', valor:'clave' },
    { claves:['pierna','pantorrilla','hinchada','edema','dolor en la pierna'], r:'Ahora que lo menciona, la pierna izquierda la siento hinchada y me duele la pantorrilla.', valor:'clave' },
    { claves:['dolor','duele','pecho','pleuritico','pleurítico'], r:'Me duele el costado derecho cuando respiro hondo.', valor:'util' },
    { claves:['tos','flema','esputo','expectora'], r:'Tos seca, sin flema.', valor:'util' },
    { claves:['fiebre','escalofrio','escalofrío'], r:'Tuve como 37 y medio, nada alto.', valor:'util' },
    { claves:['asma','alergia','sibilancia','pito'], r:'Nunca he tenido asma ni alergias.', valor:'util' },
    { claves:['cirugia','cirugía','operacion','operación','fractura','trauma'], r:'No me han operado ni me he fracturado nada.', valor:'util' },
    { claves:['cancer','cáncer','tumor'], r:'No, gracias a Dios nada de eso.', valor:'util' },
    { claves:['embarazo','regla','menstruacion','menstruación'], r:'No estoy embarazada, mi última regla fue hace dos semanas.', valor:'util' },
    { claves:['ansiedad','nervios','estres','estrés','panico','pánico'], r:'Estoy nerviosa por lo que me pasa, pero esto no me había pasado nunca.', valor:'util' }
  ],
  examen:[
    { claves:['pulmon','pulmón','auscultar','campos','respiratorio'], r:'Murmullo vesicular conservado, sin estertores ni sibilancias. Llama la atención lo poco que se escucha para la disnea que tiene.', valor:'clave' },
    { claves:['pierna','pantorrilla','edema','miembros','homans','trombosis'], r:'Pantorrilla izquierda aumentada de diámetro respecto a la derecha, con dolor a la palpación y aumento de temperatura local.', valor:'clave' },
    { claves:['corazon','corazón','cardiaco','cardíaco','ruidos'], r:'Taquicardia rítmica, sin soplos. Segundo ruido con componente pulmonar acentuado.', valor:'util' },
    { claves:['yugular','cuello','ingurgitacion','ingurgitación'], r:'Yugulares levemente ingurgitadas.', valor:'util' },
    { claves:['percutir','percusion','percusión'], r:'Sonoridad pulmonar conservada y simétrica.', valor:'util' },
    { claves:['garganta','faringe','oido','oído'], r:'Orofaringe sin alteraciones.', valor:'irrelevante' }
  ],
  estudios:[
    { id:'ANGIO', nombre:'Angiotomografía de arterias pulmonares', r:'Defecto de llenado en arteria pulmonar lobar inferior derecha: confirma tromboembolia pulmonar.', valor:'clave' },
    { id:'ECG', nombre:'Electrocardiograma', r:'Taquicardia sinusal. Sin elevación del ST.', valor:'util' },
    { id:'RX', nombre:'Radiografía de tórax', r:'Sin consolidaciones ni neumotórax. Prácticamente normal.', valor:'util' },
    { id:'DD', nombre:'Dímero D', r:'Elevado. Con probabilidad clínica alta, este resultado no aporta para descartar.', valor:'util' },
    { id:'DOPPLER', nombre:'Doppler venoso de miembros inferiores', r:'Trombo en vena femoral izquierda.', valor:'util' },
    { id:'GASO', nombre:'Gasometría arterial', r:'Hipoxemia con hipocapnia y alcalosis respiratoria.', valor:'util' },
    { id:'HEMO', nombre:'Hemograma', r:'Sin leucocitosis significativa.', valor:'util' },
    { id:'CULT', nombre:'Cultivo de esputo', r:'No se obtiene muestra: la tos es seca.', valor:'innecesario' }
  ],
  debiste:[
    'Preguntar por viajes prolongados o inmovilización reciente',
    'Preguntar por anticonceptivos hormonales',
    'Examinar las pantorrillas buscando trombosis venosa profunda',
    'Solicitar la angiotomografía sin detenerse en el dímero D'
  ],
  ensena:'La tromboembolia pulmonar se busca en los factores de riesgo, no en la auscultación. Un pulmón que suena normal en una paciente muy disneica e hipoxémica es un dato a favor, no en contra.'
},
{
  id:'PV-03',
  titulo:'"Mi hijo no quiere comer"',
  edad:2, sexo:'Masculino', esp:'Pediatría', dif:3,
  apertura:'Doctor, el niño lleva tres días con diarrea y hoy no quiere comer nada.',
  vitales:{ TA:'—', FC:'148', FR:'34', T:'37.8 °C', Sat:'97%' },
  dxCorrecto:'Gastroenteritis aguda con deshidratación moderada',
  dxOpciones:['Gastroenteritis aguda con deshidratación moderada','Gastroenteritis sin deshidratación','Choque hipovolémico','Invaginación intestinal','Sepsis'],
  tratamiento:'Sales de rehidratación oral supervisadas más zinc (plan B)',
  tratamientoOpciones:['Líquidos en casa y control (plan A)','Sales de rehidratación oral supervisadas más zinc (plan B)','Hidratación intravenosa rápida (plan C)','Antibiótico y antidiarreico','Ayuno absoluto por 24 horas'],
  interrogatorio:[
    { claves:['diarrea','deposicion','deposición','cuantas','cuántas','veces'], r:'Unas seis u ocho veces al día, aguadas, sin sangre.', valor:'clave' },
    { claves:['sangre','moco','pus'], r:'No, sin sangre ni moco.', valor:'util' },
    { claves:['vomito','vómito','vomita'], r:'Vomitó dos veces ayer, pero hoy no ha vomitado.', valor:'util' },
    { claves:['orina','pañal','pipi','pipí','micción','miccion'], r:'He notado los pañales menos mojados que de costumbre.', valor:'clave' },
    { claves:['bebe','toma','sed','agua','liquido','líquido'], r:'Toma agua con muchas ganas, se toma todo el vaso de una vez.', valor:'clave' },
    { claves:['llora','lagrima','lágrima'], r:'Llora pero casi no le salen lágrimas.', valor:'clave' },
    { claves:['fiebre','temperatura'], r:'Ha tenido fiebre baja, como 37 y medio o 38.', valor:'util' },
    { claves:['dormido','somnoliento','decaido','decaído','activo','juega','irritable'], r:'Está irritable, molesto, pero despierto y pendiente de todo.', valor:'clave' },
    { claves:['vacuna','esquema'], r:'Tiene todas sus vacunas al día.', valor:'util' },
    { claves:['come','apetito','lactancia','pecho','leche'], r:'Come poco, pero acepta el pecho y algunos líquidos.', valor:'util' },
    { claves:['agua','pozo','contaminada','fuente'], r:'Tomamos agua de botellón, pero él estuvo en casa de una tía donde varios niños tuvieron lo mismo.', valor:'util' },
    { claves:['peso','adelgaz'], r:'Lo pesaron hace una semana: 12 kilos. Hoy pesa 11.4.', valor:'clave' }
  ],
  examen:[
    { claves:['pliegue','turgencia','piel'], r:'El pliegue cutáneo se deshace lentamente, en poco menos de dos segundos.', valor:'clave' },
    { claves:['ojos','hundidos','mirada'], r:'Ojos hundidos, mucosas orales secas.', valor:'clave' },
    { claves:['fontanela'], r:'A los 2 años la fontanela anterior ya está cerrada.', valor:'util' },
    { claves:['llenado capilar','perfusion','perfusión','extremidades','frias','frías'], r:'Llenado capilar de 2 segundos. Extremidades tibias.', valor:'clave' },
    { claves:['abdomen','palpar','masa'], r:'Abdomen blando, sin masas ni distensión. Ruidos intestinales aumentados.', valor:'util' },
    { claves:['pulmon','pulmón','auscultar','respiratorio'], r:'Campos pulmonares limpios.', valor:'util' },
    { claves:['conciencia','alerta','responde','neurologico','neurológico'], r:'Alerta, irritable, responde a los estímulos y busca a la madre.', valor:'clave' }
  ],
  estudios:[
    { id:'ELEC', nombre:'Electrolitos séricos', r:'Sodio 138 mEq/L, potasio 3.6 mEq/L. Sin alteraciones que cambien la conducta.', valor:'util' },
    { id:'HEMO', nombre:'Hemograma', r:'Sin leucocitosis significativa.', valor:'util' },
    { id:'COPRO', nombre:'Coprológico', r:'Sin leucocitos fecales ni sangre oculta.', valor:'util' },
    { id:'GLU', nombre:'Glucemia capilar', r:'86 mg/dL.', valor:'util' },
    { id:'ROTA', nombre:'Prueba rápida de rotavirus', r:'Positiva.', valor:'util' },
    { id:'RX', nombre:'Radiografía de abdomen', r:'Sin niveles hidroaéreos ni signos de obstrucción.', valor:'innecesario' },
    { id:'HEMOCU', nombre:'Hemocultivo', r:'Pendiente. No estaba indicado en este cuadro.', valor:'innecesario' }
  ],
  debiste:[
    'Evaluar el estado de conciencia y la avidez por beber',
    'Buscar signo del pliegue, ojos hundidos y lágrimas',
    'Preguntar por la diuresis en los pañales',
    'Comparar el peso actual con el previo'
  ],
  ensena:'La deshidratación en pediatría se clasifica clínicamente, no con laboratorios. Bebe con avidez, irritable, ojos hundidos y pliegue lento equivalen a plan B: sales de rehidratación oral supervisadas más zinc.'
}
];
