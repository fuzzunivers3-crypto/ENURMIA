/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE SALUD MENTAL Y SOCIEDAD (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U10-SMS-. Esta parte cubre determinantes sociales de la salud
   mental, trastornos del estado de animo, ansiedad, psicoticos,
   por uso de sustancias y estigma (temas 1-6).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== SALUD MENTAL Y SOCIEDAD ===================== */
{
  id:'U10-SMS-Q01', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Determinantes sociales de la salud mental', sub:'Interacción entre biología y contexto social',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significa reconocer la influencia de los determinantes sociales sobre la salud mental, sin negar el componente biológico de los trastornos mentales?',
  ops:[
    'Que la biología interactúa con el contexto social, y que tratar solo el componente biológico sin considerar el contexto social del paciente deja fuera una parte relevante del problema',
    'Reconocer los determinantes sociales implica negar por completo cualquier componente biológico en los trastornos mentales', 'El contexto social nunca tiene ninguna relación real con el componente biológico de un trastorno mental', 'Solo el componente biológico determina completamente el curso de cualquier trastorno mental, sin ninguna influencia social'],
  ok:0,
  clave:'Que la biología interactúa con el contexto social, y que tratar solo el componente biológico sin considerar el contexto social deja fuera una parte relevante del problema.',
  exp:'Reconocer la influencia de los determinantes sociales no niega el componente biológico de los trastornos mentales; significa reconocer que la biología interactúa con el contexto social, y que tratar solo el componente biológico sin considerar el contexto social del paciente deja fuera una parte relevante del problema.',
  no:{
    1:'No implica negar el componente biológico; implica reconocer que ambas dimensiones (biológica y social) interactúan entre sí.',
    2:'El contexto social sí tiene una relación real y documentada con el componente biológico y el curso de los trastornos mentales.',
    3:'El componente biológico no determina por sí solo completamente el curso de un trastorno mental; el contexto social también influye.'
  },
  trampa:'Asumir que reconocer determinantes sociales implica negar la biología, o que la biología por sí sola explica completamente un trastorno mental sin influencia social.',
  obj:'Explicar la interacción entre el componente biológico y el contexto social en los trastornos mentales.',
  ref:'OMS, Determinantes sociales de la salud mental.',
  tags:['determinantes sociales de la salud mental','interacción biopsicosocial']
},
{
  id:'U10-SMS-Q02', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Determinantes sociales de la salud mental', sub:'Relación bidireccional entre pobreza y salud mental',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se describe la relación entre pobreza y salud mental como "bidireccional"?',
  ops:[
    'Porque la pobreza aumenta el riesgo de trastornos mentales, y los trastornos mentales pueden dificultar mantener un empleo o ingresos estables, reforzando el ciclo de pobreza',
    'La relación entre pobreza y salud mental es completamente unidireccional: solo la pobreza afecta a la salud mental, nunca al revés', 'No existe ninguna relación real entre la pobreza y el desarrollo de trastornos mentales', 'Los trastornos mentales nunca afectan la capacidad de una persona de mantener un empleo o ingresos estables'],
  ok:0,
  clave:'La pobreza aumenta el riesgo de trastornos mentales, y los trastornos mentales pueden dificultar mantener un empleo o ingresos estables, reforzando el ciclo de pobreza.',
  exp:'La relación entre pobreza y salud mental funciona en ambas direcciones: la pobreza aumenta el riesgo de desarrollar trastornos mentales, y los trastornos mentales, a su vez, pueden dificultar mantener un empleo estable o sostener ingresos regulares, reforzando el ciclo de pobreza -una trampa bidireccional.',
  no:{
    1:'Es precisamente bidireccional, no unidireccional: ambos factores se influyen mutuamente en un ciclo reforzado.',
    2:'Sí existe una relación real y bien documentada entre la pobreza y el riesgo de desarrollar trastornos mentales.',
    3:'Los trastornos mentales sí pueden afectar la capacidad laboral y económica de una persona, reforzando el ciclo de pobreza.'
  },
  trampa:'Asumir que la relación entre pobreza y salud mental es unidireccional, sin reconocer cómo los trastornos mentales también afectan la situación económica.',
  obj:'Explicar la relación bidireccional entre pobreza y salud mental.',
  ref:'OMS, Determinantes sociales de la salud mental.',
  tags:['pobreza y salud mental','relación bidireccional','ciclo reforzado']
},
{
  id:'U10-SMS-Q03', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Determinantes sociales de la salud mental', sub:'Desigualdad relativa más allá de la pobreza absoluta',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué sugiere la evidencia sobre sociedades con mayor desigualdad relativa, incluso controlando por el ingreso promedio?',
  ops:[
    'Tienden a mostrar peores indicadores de salud mental poblacional, sugiriendo que la comparación social y la percepción de desventaja relativa tienen un peso propio',
    'La desigualdad relativa nunca tiene ninguna relación con los indicadores de salud mental de una sociedad', 'Solo el ingreso promedio absoluto determina completamente los indicadores de salud mental de una población', 'Sociedades con mayor desigualdad relativa siempre muestran mejores indicadores de salud mental poblacional'],
  ok:0,
  clave:'Tienden a mostrar peores indicadores de salud mental poblacional, sugiriendo que la comparación social y la percepción de desventaja relativa tienen un peso propio.',
  exp:'La evidencia muestra que sociedades con mayor desigualdad relativa tienden a mostrar peores indicadores de salud mental poblacional, incluso controlando por el nivel de ingreso promedio -sugiriendo que la comparación social y la percepción de desventaja relativa tienen un peso propio, más allá de la carencia material absoluta.',
  no:{
    1:'La desigualdad relativa sí tiene una relación documentada con los indicadores de salud mental poblacional, independiente del ingreso promedio.',
    2:'El ingreso promedio no es el único factor determinante; la desigualdad relativa también influye de forma independiente.',
    3:'Es precisamente lo contrario: mayor desigualdad relativa se asocia con PEORES, no mejores, indicadores de salud mental poblacional.'
  },
  trampa:'Reducir el impacto de la desigualdad a solo el ingreso promedio absoluto, sin reconocer el peso adicional de la comparación social relativa.',
  obj:'Explicar el impacto de la desigualdad relativa sobre los indicadores de salud mental poblacional, más allá del ingreso promedio.',
  ref:'OMS, Determinantes sociales de la salud mental.',
  tags:['desigualdad y salud mental','comparación social','desventaja relativa']
},
{
  id:'U10-SMS-Q04', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Determinantes sociales de la salud mental', sub:'Preguntar por condiciones sociales no es un desvío del rol clínico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué preguntar por las condiciones sociales de un paciente con un trastorno mental no debe considerarse un desvío del rol clínico?',
  ops:[
    'Porque esas condiciones pueden ser parte de la causa, del obstáculo para la recuperación, o de ambos a la vez',
    'Preguntar por las condiciones sociales de un paciente con trastorno mental es siempre irrelevante para su manejo clínico', 'Las condiciones sociales de un paciente nunca tienen ninguna relación real con su recuperación de un trastorno mental', 'El rol clínico se limita exclusivamente al manejo farmacológico, sin ninguna consideración del contexto social'],
  ok:0,
  clave:'Porque esas condiciones pueden ser parte de la causa, del obstáculo para la recuperación, o de ambos a la vez.',
  exp:'Preguntar por las condiciones sociales de un paciente con un trastorno mental no es un desvío del rol clínico; es reconocer que esas condiciones pueden ser parte de la causa, del obstáculo para la recuperación, o de ambos a la vez.',
  no:{
    1:'Es precisamente relevante para el manejo clínico, al poder ser parte de la causa o del obstáculo para la recuperación.',
    2:'Las condiciones sociales sí tienen una relación real y documentada con la recuperación de un trastorno mental.',
    3:'El rol clínico va más allá del manejo farmacológico; incluye considerar el contexto social relevante del paciente.'
  },
  trampa:'Reducir el rol clínico exclusivamente al manejo farmacológico, sin reconocer la relevancia de las condiciones sociales del paciente.',
  obj:'Explicar por qué preguntar por las condiciones sociales de un paciente es parte legítima del rol clínico en salud mental.',
  ref:'OMS, Determinantes sociales de la salud mental.',
  tags:['condiciones sociales','rol clínico','causa y obstáculo']
},
{
  id:'U10-SMS-Q05', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Determinantes sociales de la salud mental', sub:'Conexión con inequidad en salud',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se conecta la relación entre desigualdad y salud mental con el concepto de inequidad en salud ya visto en Salud y Comunidad I?',
  ops:[
    'Cuando el patrón de desigualdad se repite sistemáticamente según el grupo social, hay una causa estructural detrás que merece atención más allá del caso clínico individual',
    'No existe ninguna conexión real entre la desigualdad en salud mental y el concepto de inequidad ya visto en Salud y Comunidad I', 'Toda diferencia relacionada con desigualdad y salud mental es automáticamente evitable e injusta, sin ninguna excepción', 'El concepto de inequidad en salud no tiene ninguna aplicación relevante en el contexto de la salud mental'],
  ok:0,
  clave:'Cuando el patrón de desigualdad se repite sistemáticamente según el grupo social, hay una causa estructural detrás que merece atención más allá del caso clínico individual.',
  exp:'Esta relación conecta directamente con el concepto de inequidad en salud ya visto en Salud y Comunidad I: no toda diferencia es evitable o injusta, pero cuando el patrón se repite sistemáticamente según el grupo social, hay una causa estructural detrás que merece atención más allá del caso clínico individual.',
  no:{
    1:'Sí existe una conexión conceptual directa entre ambos temas, aplicando el mismo criterio de sistematicidad para identificar inequidad.',
    2:'No toda diferencia es automáticamente inequidad; se requiere que sea sistemática, evitable e injusta, según el criterio ya visto.',
    3:'El concepto de inequidad en salud sí tiene una aplicación relevante y directa en el contexto de la desigualdad y la salud mental.'
  },
  trampa:'No reconocer la conexión conceptual entre la desigualdad en salud mental y el criterio de inequidad sistemática ya visto en Salud y Comunidad I.',
  obj:'Explicar la conexión entre la desigualdad en salud mental y el concepto de inequidad en salud ya visto previamente.',
  ref:'OMS, Determinantes sociales de la salud mental.',
  tags:['inequidad en salud','conexión conceptual','patrón sistemático']
},
{
  id:'U10-SMS-Q06', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos del estado de ánimo', sub:'Diferencia entre tristeza reactiva y episodio depresivo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue clínicamente a un episodio depresivo mayor de una tristeza reactiva pasajera ante una circunstancia difícil?',
  ops:[
    'La tristeza reactiva suele fluctuar y responder al contexto, mientras que el episodio depresivo mayor tiene una persistencia e intensidad sostenida sin necesitar un desencadenante proporcional',
    'Ambos cuadros son clínicamente idénticos, sin ninguna diferencia real en persistencia o intensidad', 'La tristeza reactiva siempre es más persistente e intensa que un episodio depresivo mayor', 'Un episodio depresivo mayor siempre requiere un desencadenante externo proporcional para diagnosticarse'],
  ok:0,
  clave:'La tristeza reactiva suele fluctuar y responder al contexto, mientras que el episodio depresivo mayor tiene una persistencia e intensidad sostenida sin necesitar un desencadenante proporcional.',
  exp:'La tristeza reactiva a un evento adverso concreto, aunque intensa, suele fluctuar y responder al contexto, mientras que el episodio depresivo mayor tiene una persistencia y una intensidad que afecta el funcionamiento de forma más sostenida, sin necesitar un desencadenante externo proporcional.',
  no:{
    1:'Tienen diferencias clínicas claras en persistencia, intensidad y relación con el contexto desencadenante.',
    2:'Es precisamente lo contrario: el episodio depresivo MAYOR tiende a ser más persistente y sostenido que la tristeza reactiva.',
    3:'El episodio depresivo mayor puede ocurrir SIN un desencadenante externo proporcional, a diferencia de la tristeza reactiva.'
  },
  trampa:'Confundir la tristeza reactiva pasajera con un episodio depresivo mayor clínicamente significativo, o invertir sus características distintivas.',
  obj:'Distinguir clínicamente un episodio depresivo mayor de una tristeza reactiva pasajera.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 8.',
  tags:['episodio depresivo mayor','tristeza reactiva','diagnóstico diferencial']
},
{
  id:'U10-SMS-Q07', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos del estado de ánimo', sub:'Riesgo de tratar bipolar solo con antidepresivo',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con trastorno bipolar, cuya historia de episodios de manía previa no se exploró adecuadamente, recibe únicamente un antidepresivo para tratar su episodio depresivo actual, sin estabilizador del ánimo.',
  enunciado:'¿Qué riesgo clínico específico tiene esta conducta terapéutica?',
  ops:[
    'Puede precipitar un episodio maníaco, al tratar solo el componente depresivo sin el estabilizador del ánimo apropiado',
    'Tratar solo con antidepresivo un trastorno bipolar nunca representa ningún riesgo clínico real adicional', 'Un antidepresivo sin estabilizador siempre es igual de seguro en depresión mayor que en trastorno bipolar', 'Este error de tratamiento no tiene ninguna relación con no haber explorado la historia de episodios de manía previa'],
  ok:0,
  clave:'Puede precipitar un episodio maníaco, al tratar solo el componente depresivo sin el estabilizador del ánimo apropiado.',
  exp:'Tratar solo el componente depresivo de un trastorno bipolar con un antidepresivo, sin el estabilizador del ánimo apropiado, puede precipitar un episodio maníaco -razón por la cual reconocer con cuidado la historia de episodios previos de manía o hipomanía es un paso diagnóstico central antes de iniciar cualquier tratamiento.',
  no:{
    1:'Este escenario sí representa un riesgo clínico real y bien documentado: precipitar un episodio maníaco.',
    2:'Es precisamente lo contrario: usar un antidepresivo sin estabilizador es MÁS riesgoso en trastorno bipolar que en depresión mayor simple.',
    3:'Este error tiene una relación directa: no explorar adecuadamente la historia de manía previa es precisamente lo que llevó a este error terapéutico.'
  },
  trampa:'No reconocer el riesgo real de precipitar un episodio maníaco al tratar un trastorno bipolar no diagnosticado solo con antidepresivo.',
  obj:'Explicar el riesgo de tratar un trastorno bipolar no reconocido únicamente con antidepresivo, sin estabilizador del ánimo.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 8.',
  tags:['trastorno bipolar','riesgo de precipitar manía','estabilizador del ánimo']
},
{
  id:'U10-SMS-Q08', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos del estado de ánimo', sub:'Impacto funcional más allá del síntoma',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el deterioro funcional (social, laboral, familiar) es tan relevante para el plan de manejo como la gravedad de los síntomas de un trastorno del estado de ánimo?',
  ops:[
    'Porque dos personas con síntomas similares pueden tener un grado de deterioro funcional muy distinto, y ese deterioro es clínicamente relevante para el manejo',
    'El deterioro funcional nunca debería considerarse al evaluar un trastorno del estado de ánimo, solo la gravedad de los síntomas', 'Dos personas con síntomas similares siempre tienen exactamente el mismo grado de deterioro funcional', 'El impacto sobre las relaciones familiares o laborales no tiene ninguna relación real con el trastorno del estado de ánimo'],
  ok:0,
  clave:'Dos personas con síntomas similares pueden tener un grado de deterioro funcional muy distinto, y ese deterioro es clínicamente relevante para el manejo.',
  exp:'Reconocer este impacto funcional amplio, no solo la presencia de síntomas aislados, es parte de una evaluación clínica completa: dos personas con síntomas similares pueden tener un grado de deterioro funcional muy distinto, y ese deterioro funcional es, con frecuencia, tan relevante para el plan de manejo como la gravedad de los síntomas en sí.',
  no:{
    1:'El deterioro funcional sí debe considerarse activamente, siendo tan relevante como la gravedad de los síntomas para el plan de manejo.',
    2:'Es precisamente lo contrario: dos personas con síntomas similares PUEDEN tener grados de deterioro funcional muy distintos entre sí.',
    3:'El impacto sobre las relaciones familiares y laborales sí tiene una relación directa y relevante con el trastorno del estado de ánimo.'
  },
  trampa:'Evaluar un trastorno del estado de ánimo únicamente por la presencia de síntomas, sin considerar el deterioro funcional real que produce.',
  obj:'Explicar por qué el deterioro funcional es tan relevante como la gravedad de los síntomas en el manejo de un trastorno del estado de ánimo.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 8.',
  tags:['deterioro funcional','evaluación clínica completa','plan de manejo']
},
{
  id:'U10-SMS-Q09', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos del estado de ánimo', sub:'Manía o hipomanía: episodios de polo opuesto',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza a un episodio de manía o hipomanía, dentro del trastorno bipolar?',
  ops:[
    'Ánimo elevado, energía inusual, disminución de la necesidad de sueño, e impulsividad que puede llevar a decisiones riesgosas', 'Ánimo bajo persistente, pérdida de interés y placer, y sentimientos de culpa o inutilidad', 'Ausencia completa de cualquier cambio observable en el ánimo o el comportamiento de la persona', 'Preocupación excesiva y difusa sobre múltiples áreas de la vida, sin ningún cambio en el nivel de energía'],
  ok:0,
  clave:'Ánimo elevado, energía inusual, disminución de la necesidad de sueño, e impulsividad que puede llevar a decisiones riesgosas.',
  exp:'El trastorno bipolar se caracteriza por la alternancia entre episodios depresivos y episodios de manía o hipomanía: períodos de ánimo elevado, energía inusual, disminución de la necesidad de sueño, e impulsividad que puede llevar a decisiones riesgosas.',
  no:{
    1:'Esta descripción corresponde a un episodio depresivo, no a un episodio de manía o hipomanía.',
    2:'Un episodio de manía o hipomanía sí implica cambios observables claros en el ánimo y el comportamiento, no ausencia de cambios.',
    3:'Esta descripción corresponde al trastorno de ansiedad generalizada, no a un episodio de manía o hipomanía.'
  },
  trampa:'Confundir las características de un episodio de manía o hipomanía con las de un episodio depresivo o un trastorno de ansiedad.',
  obj:'Identificar las características clínicas de un episodio de manía o hipomanía.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 8.',
  tags:['manía','hipomanía','trastorno bipolar']
},
{
  id:'U10-SMS-Q10', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos de ansiedad', sub:'Carácter difuso del trastorno de ansiedad generalizada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica distintiva tiene la preocupación del trastorno de ansiedad generalizada, más allá de su intensidad?',
  ops:[
    'Su carácter difuso, sin limitarse a una sola área de preocupación, junto con la dificultad de la persona para controlarla pese a reconocerla con frecuencia como excesiva',
    'La preocupación en este trastorno siempre se limita exclusivamente a una única área específica de la vida de la persona', 'La persona nunca reconoce que su preocupación es excesiva o desproporcionada respecto a la situación real', 'El trastorno de ansiedad generalizada se caracteriza por episodios súbitos e intensos de pocos minutos de duración'],
  ok:0,
  clave:'Su carácter difuso, sin limitarse a una sola área de preocupación, junto con la dificultad de la persona para controlarla pese a reconocerla con frecuencia como excesiva.',
  exp:'La característica distintiva de este trastorno es su carácter difuso -no se limita a una sola área de preocupación- y su desproporción respecto a la amenaza real que la origina, junto con la dificultad de la persona para dejar de preocuparse pese a reconocer, con frecuencia, que la preocupación es excesiva.',
  no:{
    1:'El trastorno de ansiedad generalizada se caracteriza precisamente por abarcar MÚLTIPLES áreas, no limitarse a una sola.',
    2:'La persona con este trastorno con frecuencia SÍ reconoce que su preocupación es excesiva, pese a no poder controlarla.',
    3:'Los episodios súbitos e intensos de pocos minutos son característicos del trastorno de pánico, no del trastorno de ansiedad generalizada.'
  },
  trampa:'Confundir el trastorno de ansiedad generalizada (preocupación difusa y sostenida) con el trastorno de pánico (episodios súbitos) o asumir que la persona no reconoce su preocupación.',
  obj:'Explicar el carácter difuso distintivo del trastorno de ansiedad generalizada.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 9.',
  tags:['trastorno de ansiedad generalizada','preocupación difusa','desproporción']
},
{
  id:'U10-SMS-Q11', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos de ansiedad', sub:'Ataque de pánico como simulador de emergencia médica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente llega a urgencias con palpitaciones intensas, dificultad para respirar, mareo y sensación de muerte inminente, un cuadro compatible tanto con un evento cardíaco agudo como con un ataque de pánico.',
  enunciado:'¿Cuál es la conducta clínica correcta ante este cuadro?',
  ops:[
    'Descartar con criterio las causas médicas reales antes de atribuir el cuadro únicamente a un origen ansioso, sin caer tampoco en estudios excesivos innecesarios una vez el patrón sea claramente reconocible',
    'Asumir automáticamente que se trata de un ataque de pánico, sin ningún estudio médico adicional, dado que los síntomas son típicos de ansiedad', 'Nunca considerar un ataque de pánico como diagnóstico posible ante síntomas físicos intensos de este tipo', 'Realizar estudios médicos extensos e indefinidos, sin límite, incluso después de confirmar razonablemente el patrón ansioso'],
  ok:0,
  clave:'Descartar con criterio las causas médicas reales antes de atribuir el cuadro únicamente a un origen ansioso, sin caer tampoco en estudios excesivos innecesarios una vez el patrón sea claramente reconocible.',
  exp:'Un ataque de pánico puede simular clínicamente una emergencia médica real; distinguir un ataque de pánico de una causa orgánica real requiere descartar con criterio las causas médicas antes de atribuir el cuadro únicamente a un origen ansioso, sin caer tampoco en estudios excesivos innecesarios una vez el patrón ya es claramente reconocible.',
  no:{
    1:'Asumir automáticamente sin ningún estudio médico previo arriesga pasar por alto una emergencia médica real que simula el mismo cuadro.',
    2:'El ataque de pánico sí debe considerarse como diagnóstico diferencial posible, tras descartar razonablemente causas orgánicas.',
    3:'Una vez el patrón ansioso es claramente reconocible, estudios excesivos e indefinidos no son la conducta clínica apropiada.'
  },
  trampa:'Asumir automáticamente el diagnóstico de ataque de pánico sin descartar razonablemente una causa orgánica real, o sobreestudiar indefinidamente un patrón ya claro.',
  obj:'Aplicar el criterio clínico correcto ante un cuadro que puede corresponder tanto a un ataque de pánico como a una emergencia médica real.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 9.',
  tags:['ataque de pánico','diagnóstico diferencial','descartar causa orgánica']
},
{
  id:'U10-SMS-Q12', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos de ansiedad', sub:'Fobia social confundida con timidez',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la fobia social con frecuencia se confunde erróneamente con timidez o introversión?',
  ops:[
    'Porque ambas pueden manifestarse con evitación de situaciones sociales, pero la fobia social es un trastorno tratable con un impacto funcional significativo, no solo un rasgo de personalidad',
    'La fobia social y la timidez son exactamente el mismo fenómeno, sin ninguna diferencia clínica real entre ambas', 'La fobia social nunca tiene ningún impacto funcional real sobre las oportunidades laborales o académicas de la persona', 'La timidez siempre requiere el mismo tratamiento clínico formal que la fobia social diagnosticada'],
  ok:0,
  clave:'Ambas pueden manifestarse con evitación de situaciones sociales, pero la fobia social es un trastorno tratable con un impacto funcional significativo, no solo un rasgo de personalidad.',
  exp:'La fobia social se confunde erróneamente con timidez o introversión, retrasando el reconocimiento de que se trata de un trastorno tratable, con un impacto funcional amplio: el miedo a la evaluación negativa de otros puede limitar seriamente oportunidades laborales, académicas y relacionales.',
  no:{
    1:'Son fenómenos distintos: la fobia social es un trastorno clínico tratable con impacto funcional, la timidez es un rasgo de personalidad.',
    2:'La fobia social sí tiene un impacto funcional significativo, limitando seriamente oportunidades laborales, académicas y relacionales.',
    3:'La timidez, como rasgo de personalidad, no requiere el mismo tratamiento clínico formal que un trastorno diagnosticado como la fobia social.'
  },
  trampa:'Confundir la fobia social (trastorno clínico tratable) con la timidez (rasgo de personalidad), sin reconocer su impacto funcional distinto.',
  obj:'Distinguir la fobia social de la timidez, reconociendo su naturaleza de trastorno tratable con impacto funcional.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 9.',
  tags:['fobia social','confusión con timidez','impacto funcional']
},
{
  id:'U10-SMS-Q13', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos de ansiedad', sub:'Ansiedad adaptativa vs. trastorno de ansiedad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuándo la ansiedad, siendo naturalmente una respuesta adaptativa, se convierte en un trastorno?',
  ops:[
    'Cuando esa respuesta se activa de forma desproporcionada, persistente, o sin una amenaza real que la justifique',
    'La ansiedad nunca puede considerarse un trastorno clínico, sin importar su intensidad o persistencia', 'Cualquier grado de ansiedad, sin importar el contexto, siempre constituye automáticamente un trastorno de ansiedad', 'La ansiedad se convierte en trastorno únicamente cuando existe una amenaza real proporcional que la justifica'],
  ok:0,
  clave:'Cuando esa respuesta se activa de forma desproporcionada, persistente, o sin una amenaza real que la justifique.',
  exp:'La ansiedad, como respuesta natural ante una amenaza real, es adaptativa; el trastorno de ansiedad ocurre cuando esa respuesta se activa de forma desproporcionada, persistente, o sin una amenaza real que la justifique.',
  no:{
    1:'La ansiedad sí puede convertirse en un trastorno clínico real cuando se activa de forma desproporcionada, persistente o injustificada.',
    2:'No cualquier grado de ansiedad constituye un trastorno; la ansiedad adaptativa ante una amenaza real proporcional no lo es.',
    3:'Es precisamente lo contrario: el trastorno ocurre cuando la ansiedad NO responde a una amenaza real proporcional, no cuando sí la hay.'
  },
  trampa:'Confundir la ansiedad adaptativa normal ante una amenaza real con el trastorno de ansiedad, que se define por su desproporción o persistencia injustificada.',
  obj:'Explicar la diferencia entre la ansiedad adaptativa normal y el trastorno de ansiedad.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 9.',
  tags:['ansiedad adaptativa','trastorno de ansiedad','desproporción']
},
{
  id:'U10-SMS-Q14', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos psicóticos', sub:'Síntomas positivos vs. negativos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre los síntomas psicóticos positivos y los negativos de la esquizofrenia?',
  ops:[
    'Los positivos son experiencias añadidas que no debería haber (alucinaciones, delirios); los negativos son la ausencia de funciones que normalmente deberían estar presentes (aplanamiento afectivo, aislamiento)',
    'Los síntomas positivos y negativos son exactamente el mismo tipo de manifestación clínica, solo con nombres distintos', 'Los síntomas negativos son experiencias añadidas como alucinaciones, y los positivos son la ausencia de funciones normales', 'Ninguno de los dos tipos de síntomas tiene relación real con el tratamiento farmacológico de la esquizofrenia'],
  ok:0,
  clave:'Los positivos son experiencias añadidas que no debería haber (alucinaciones, delirios); los negativos son la ausencia de funciones normales (aplanamiento afectivo, aislamiento).',
  exp:'Los síntomas positivos son experiencias añadidas que no debería haber (alucinaciones, delirios, pensamiento desorganizado), mientras que los síntomas negativos son la ausencia de funciones que normalmente deberían estar presentes (aplanamiento afectivo, aislamiento social, falta de motivación).',
  no:{
    1:'Son dos dimensiones clínicas claramente distintas, no el mismo tipo de manifestación con nombres intercambiables.',
    2:'Está invertido: los POSITIVOS son experiencias añadidas (alucinaciones), y los NEGATIVOS son ausencia de funciones normales, no al revés.',
    3:'Ambos tipos de síntomas sí tienen relación con el tratamiento farmacológico, aunque con distinta respuesta a los antipsicóticos.'
  },
  trampa:'Invertir la definición de síntomas positivos (experiencias añadidas) y negativos (ausencia de funciones) de la esquizofrenia.',
  obj:'Distinguir los síntomas psicóticos positivos de los negativos en la esquizofrenia.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 7.',
  tags:['síntomas positivos','síntomas negativos','esquizofrenia']
},
{
  id:'U10-SMS-Q15', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos psicóticos', sub:'Ventana crítica del primer episodio psicótico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué sugiere la evidencia sobre el período de psicosis sin tratamiento y el pronóstico funcional a largo plazo?',
  ops:[
    'Un período más largo de psicosis sin tratamiento se asocia con un peor pronóstico funcional a largo plazo, mientras que la intervención temprana mejora la probabilidad de recuperación',
    'El tiempo transcurrido antes de iniciar tratamiento nunca tiene ninguna relación real con el pronóstico funcional a largo plazo', 'Un período más largo de psicosis sin tratamiento siempre mejora el pronóstico funcional a largo plazo del paciente', 'El primer episodio psicótico nunca representa una ventana particularmente relevante para la intervención clínica'],
  ok:0,
  clave:'Un período más largo de psicosis sin tratamiento se asocia con un peor pronóstico funcional a largo plazo, mientras que la intervención temprana mejora la probabilidad de recuperación.',
  exp:'El primer episodio psicótico representa una ventana crítica para la intervención: la evidencia sugiere que un período más largo de psicosis sin tratamiento se asocia con un peor pronóstico funcional a largo plazo, mientras que la intervención temprana mejora la probabilidad de recuperación funcional.',
  no:{
    1:'El tiempo sin tratamiento sí tiene una relación documentada y relevante con el pronóstico funcional a largo plazo.',
    2:'Es precisamente lo contrario: un período MÁS LARGO sin tratamiento se asocia con un PEOR pronóstico, no mejor.',
    3:'El primer episodio psicótico sí representa una ventana particularmente relevante y crítica para la intervención temprana.'
  },
  trampa:'Invertir la relación entre el tiempo sin tratamiento de un primer episodio psicótico y el pronóstico funcional a largo plazo.',
  obj:'Explicar por qué el primer episodio psicótico representa una ventana crítica para la intervención temprana.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 7.',
  tags:['primer episodio psicótico','ventana crítica','intervención temprana']
},
{
  id:'U10-SMS-Q16', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos psicóticos', sub:'Dificultad de reconocer un primer episodio en adolescentes',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué puede ser clínicamente difícil reconocer un primer episodio psicótico a tiempo en un adolescente?',
  ops:[
    'Porque los síntomas iniciales (aislamiento social progresivo, cambios sutiles en el pensamiento, disminución del rendimiento) pueden confundirse con cambios normales de la adolescencia',
    'Los síntomas de un primer episodio psicótico en adolescentes siempre son idénticos y fácilmente distinguibles de cualquier cambio normal del desarrollo', 'No existe ninguna dificultad real para reconocer un primer episodio psicótico en la adolescencia', 'Los cambios normales de la adolescencia nunca se parecen a los síntomas iniciales de un primer episodio psicótico'],
  ok:0,
  clave:'Los síntomas iniciales (aislamiento social progresivo, cambios sutiles en el pensamiento, disminución del rendimiento) pueden confundirse con cambios normales de la adolescencia.',
  exp:'Reconocer un primer episodio psicótico a tiempo puede ser clínicamente difícil, porque los síntomas iniciales -aislamiento social progresivo, cambios sutiles en el pensamiento, disminución del rendimiento- pueden confundirse con cambios normales de la adolescencia o con otros trastornos.',
  no:{
    1:'No siempre son fácilmente distinguibles; precisamente su similitud con cambios normales dificulta el reconocimiento temprano.',
    2:'Sí existe una dificultad real y documentada para reconocer estos síntomas iniciales en la etapa de la adolescencia.',
    3:'Los cambios normales de la adolescencia sí pueden parecerse superficialmente a los síntomas iniciales de un primer episodio psicótico.'
  },
  trampa:'Subestimar la dificultad real de distinguir los síntomas iniciales de un primer episodio psicótico de los cambios normales de la adolescencia.',
  obj:'Explicar la dificultad de reconocer tempranamente un primer episodio psicótico en un adolescente.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 7.',
  tags:['primer episodio en adolescente','confusión con cambios normales','dificultad diagnóstica']
},
{
  id:'U10-SMS-Q17', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos psicóticos', sub:'Variabilidad del curso de la esquizofrenia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es clínicamente inexacto generalizar de forma uniforme el pronóstico de la esquizofrenia?',
  ops:[
    'Porque el curso varía considerablemente entre personas: algunos logran una recuperación funcional significativa, mientras que otros experimentan un curso más crónico con recaídas recurrentes',
    'El curso de la esquizofrenia es exactamente idéntico en todos los pacientes, sin ninguna variabilidad real entre casos', 'Todos los pacientes con esquizofrenia experimentan siempre un curso crónico sin ninguna posibilidad de recuperación funcional', 'La variabilidad del curso de la esquizofrenia no tiene ninguna relación con el seguimiento individualizado a largo plazo'],
  ok:0,
  clave:'El curso varía considerablemente entre personas: algunos logran una recuperación funcional significativa, mientras que otros experimentan un curso más crónico con recaídas recurrentes.',
  exp:'El curso de la esquizofrenia varía considerablemente entre personas: algunos pacientes logran una recuperación funcional significativa con tratamiento sostenido, mientras que otros experimentan un curso más crónico con recaídas recurrentes -esta variabilidad hace que generalizar el pronóstico de forma uniforme sea clínicamente inexacto.',
  no:{
    1:'El curso NO es idéntico en todos los pacientes; existe una variabilidad real y documentada entre casos.',
    2:'No todos los pacientes tienen un curso crónico sin recuperación; algunos logran una recuperación funcional significativa.',
    3:'La variabilidad del curso justifica precisamente la importancia del seguimiento individualizado a largo plazo para cada paciente.'
  },
  trampa:'Asumir un pronóstico uniforme y fijo para la esquizofrenia, sin reconocer la variabilidad real del curso entre distintos pacientes.',
  obj:'Explicar la variabilidad del curso de la esquizofrenia y su implicación sobre el pronóstico individualizado.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 7.',
  tags:['curso variable','esquizofrenia','pronóstico individualizado']
},
{
  id:'U10-SMS-Q18', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos relacionados con sustancias', sub:'El trastorno como espectro, no punto fijo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se describe el trastorno por uso de sustancias como un espectro, no como una categoría binaria?',
  ops:[
    'Porque existe en distintos grados de severidad (consumo de riesgo, trastorno leve, moderado o severo), y reconocer el punto en ese espectro orienta el pronóstico y la intervención',
    'El trastorno por uso de sustancias siempre es una categoría binaria fija: se tiene o no se tiene, sin ningún grado intermedio', 'No existe ninguna relación real entre el grado de severidad de este trastorno y el tipo de intervención apropiada', 'Todos los pacientes con trastorno por uso de sustancias tienen exactamente el mismo pronóstico, sin importar su severidad'],
  ok:0,
  clave:'Existe en distintos grados de severidad (consumo de riesgo, trastorno leve, moderado o severo), y reconocer el punto en ese espectro orienta el pronóstico y la intervención.',
  exp:'Este trastorno existe en un espectro de severidad, no como una categoría binaria de "tenerlo o no tenerlo": reconocer en qué punto de ese espectro está una persona -consumo de riesgo, trastorno leve, moderado o severo- orienta tanto el pronóstico como el tipo de intervención más apropiada.',
  no:{
    1:'No es una categoría binaria fija; existe en un espectro con distintos grados de severidad reconocibles.',
    2:'El grado de severidad sí tiene una relación directa con el tipo de intervención apropiada para cada caso.',
    3:'El pronóstico puede variar considerablemente según el grado de severidad del trastorno, no es uniforme para todos los casos.'
  },
  trampa:'Tratar el trastorno por uso de sustancias como una categoría binaria fija, sin reconocer su naturaleza de espectro con distintos grados de severidad.',
  obj:'Explicar por qué el trastorno por uso de sustancias se describe como un espectro de severidad.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 11.',
  tags:['espectro de severidad','trastorno por uso de sustancias','consumo de riesgo']
},
{
  id:'U10-SMS-Q19', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos relacionados con sustancias', sub:'Peligro médico de la abstinencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la abstinencia de ciertas sustancias, como el alcohol o las benzodiazepinas, no debe manejarse con una suspensión abrupta sin supervisión médica?',
  ops:[
    'Porque en estas sustancias, la abstinencia puede ser médicamente peligrosa, incluso potencialmente mortal si no se maneja adecuadamente',
    'La abstinencia de cualquier sustancia siempre es completamente inofensiva, sin importar cuál sea o cómo se maneje', 'Suspender abruptamente el consumo de alcohol o benzodiazepinas nunca representa ningún riesgo médico real', 'El manejo supervisado de la abstinencia no aporta ninguna ventaja real sobre la suspensión abrupta sin supervisión'],
  ok:0,
  clave:'En estas sustancias, la abstinencia puede ser médicamente peligrosa, incluso potencialmente mortal si no se maneja adecuadamente.',
  exp:'La abstinencia no es simplemente "sentirse mal": en ciertas sustancias (como el alcohol o las benzodiazepinas), la abstinencia puede ser médicamente peligrosa, incluso potencialmente mortal si no se maneja adecuadamente, lo que exige un manejo clínico supervisado en vez de una suspensión abrupta.',
  no:{
    1:'Es precisamente lo contrario: la abstinencia de ciertas sustancias específicas SÍ puede ser médicamente peligrosa y requerir supervisión.',
    2:'Suspender abruptamente estas sustancias específicas sí representa un riesgo médico real bien documentado.',
    3:'El manejo supervisado sí aporta una ventaja real de seguridad frente a la suspensión abrupta sin supervisión médica.'
  },
  trampa:'Subestimar el riesgo médico real de la abstinencia de sustancias específicas como el alcohol o las benzodiazepinas, asumiendo que suspender es siempre seguro.',
  obj:'Explicar por qué la abstinencia de ciertas sustancias requiere manejo médico supervisado.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 11.',
  tags:['abstinencia peligrosa','manejo supervisado','alcohol y benzodiazepinas']
},
{
  id:'U10-SMS-Q20', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos relacionados con sustancias', sub:'Componente neurobiológico, no solo "falta de voluntad"',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué reducir el trastorno por uso de sustancias a "falta de voluntad" ignora una dimensión real del problema?',
  ops:[
    'Porque el trastorno involucra cambios neurobiológicos reales en los circuitos cerebrales de recompensa, que alteran la capacidad de controlar el impulso de consumir',
    'El trastorno por uso de sustancias nunca involucra ningún cambio neurobiológico real, siendo exclusivamente un problema de disciplina personal', 'La dimensión biológica del trastorno exime por completo a la persona de cualquier responsabilidad sobre su recuperación', 'No existe ninguna similitud entre este error y el de reducir la adherencia terapéutica a un simple problema de disciplina'],
  ok:0,
  clave:'El trastorno involucra cambios neurobiológicos reales en los circuitos cerebrales de recompensa, que alteran la capacidad de controlar el impulso de consumir.',
  exp:'El trastorno por uso de sustancias involucra cambios neurobiológicos reales en los circuitos cerebrales de recompensa, que alteran la capacidad de la persona de controlar el impulso de consumir, incluso cuando reconoce racionalmente las consecuencias negativas -esto explica por qué reducirlo a "falta de voluntad" ignora una dimensión biológica real.',
  no:{
    1:'El trastorno sí involucra cambios neurobiológicos reales y documentados en los circuitos de recompensa cerebral.',
    2:'Reconocer la dimensión biológica no exime completamente de responsabilidad; cambia el enfoque clínico apropiado, no la responsabilidad en sí.',
    3:'Sí existe una similitud directa con el error de reducir la adherencia terapéutica o el sobrepeso a solo disciplina personal, ya visto antes.'
  },
  trampa:'Reducir el trastorno por uso de sustancias exclusivamente a un problema de voluntad, sin reconocer su componente neurobiológico real documentado.',
  obj:'Explicar por qué el trastorno por uso de sustancias no debe reducirse a "falta de voluntad", reconociendo su componente neurobiológico.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 11.',
  tags:['componente neurobiológico','falta de voluntad','circuitos de recompensa']
},
{
  id:'U10-SMS-Q21', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Trastornos relacionados con sustancias', sub:'Definición de trastorno por uso de sustancias',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué define, más allá de "consumir mucho", al trastorno por uso de sustancias?',
  ops:[
    'Un patrón de consumo que causa deterioro o malestar clínicamente significativo, con criterios específicos como pérdida de control, deseo persistente de reducirlo sin lograrlo, y consumo pese a consecuencias evidentes',
    'El trastorno por uso de sustancias se define únicamente por la cantidad absoluta de sustancia consumida por la persona', 'Cualquier consumo ocasional de una sustancia, sin importar la frecuencia, constituye automáticamente un trastorno', 'El trastorno por uso de sustancias no tiene ningún criterio clínico específico bien definido'],
  ok:0,
  clave:'Un patrón de consumo que causa deterioro o malestar clínicamente significativo, con criterios específicos como pérdida de control, deseo persistente de reducirlo sin lograrlo, y consumo pese a consecuencias evidentes.',
  exp:'El trastorno por uso de sustancias describe un patrón de consumo que causa deterioro o malestar clínicamente significativo, manifestado por criterios específicos (pérdida de control, deseo persistente de reducirlo sin lograrlo, tiempo considerable dedicado a la sustancia, consumo pese a consecuencias evidentes) -no es simplemente "consumir mucho".',
  no:{
    1:'No se define únicamente por la cantidad absoluta; se define por el patrón de deterioro funcional y los criterios clínicos específicos.',
    2:'El consumo ocasional, sin cumplir criterios de deterioro significativo, no constituye automáticamente un trastorno clínico.',
    3:'Sí existen criterios clínicos específicos bien definidos que caracterizan este trastorno, más allá de una simple impresión general.'
  },
  trampa:'Reducir la definición del trastorno por uso de sustancias a la cantidad consumida, sin reconocer los criterios clínicos específicos de deterioro funcional.',
  obj:'Definir el trastorno por uso de sustancias según sus criterios clínicos específicos.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 11.',
  tags:['trastorno por uso de sustancias','criterios clínicos','definición']
},
{
  id:'U10-SMS-Q22', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Estigma y salud mental', sub:'Autoestigma',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el autoestigma en el contexto de salud mental?',
  ops:[
    'Es la internalización del estigma social, que genera en la propia persona con el trastorno vergüenza, ocultamiento deliberado de su condición, y una reducción de su autoestima',
    'El autoestigma se refiere exclusivamente a la discriminación que otras personas ejercen abiertamente hacia alguien con un trastorno mental', 'El autoestigma nunca tiene ningún impacto real sobre la vida de una persona con un trastorno mental', 'El autoestigma es un concepto idéntico al estigma social externo, sin ninguna diferencia real entre ambos'],
  ok:0,
  clave:'Es la internalización del estigma social, que genera en la propia persona con el trastorno vergüenza, ocultamiento deliberado de su condición, y una reducción de su autoestima.',
  exp:'El estigma no se limita al entorno social externo: con frecuencia se internaliza, generando en la propia persona con el trastorno vergüenza, ocultamiento deliberado de su condición, y una reducción de su propia autoestima -un fenómeno conocido como autoestigma, que puede ser tan limitante como el estigma proveniente de otros.',
  no:{
    1:'El autoestigma se refiere a la internalización interna, no exclusivamente a la discriminación externa ejercida por otros.',
    2:'El autoestigma sí tiene un impacto real y limitante, comparable en algunos casos al del estigma externo.',
    3:'Son conceptos relacionados pero distintos: el autoestigma es la versión internalizada del estigma social externo, no idéntica a él.'
  },
  trampa:'Confundir el autoestigma (internalización personal) con el estigma social externo (discriminación de otros), asumiendo que son idénticos.',
  obj:'Definir el concepto de autoestigma y distinguirlo del estigma social externo.',
  ref:'OMS, Informe mundial sobre salud mental.',
  tags:['autoestigma','internalización del estigma','vergüenza']
},
{
  id:'U10-SMS-Q23', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Estigma y salud mental', sub:'El estigma como barrera de acceso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo funciona el estigma como una barrera de acceso a la atención de salud mental?',
  ops:[
    'Muchas personas retrasan o evitan por completo buscar atención por temor al estigma asociado, lo que empeora el pronóstico al retrasar una intervención potencialmente efectiva',
    'El estigma nunca influye realmente en la decisión de una persona de buscar o no atención de salud mental', 'El estigma solo afecta a personas que ya están recibiendo tratamiento, nunca a quienes deciden buscarlo por primera vez', 'La barrera del estigma es idéntica en su naturaleza a las barreras económicas o geográficas de acceso'],
  ok:0,
  clave:'Muchas personas retrasan o evitan por completo buscar atención por temor al estigma asociado, lo que empeora el pronóstico al retrasar una intervención potencialmente efectiva.',
  exp:'El estigma tiene una consecuencia clínica directa y medible: muchas personas retrasan o evitan por completo buscar atención de salud mental precisamente por temor al estigma asociado, lo que empeora el pronóstico al retrasar una intervención que, con tratamiento oportuno, podría ser efectiva.',
  no:{
    1:'El estigma sí influye de forma real y documentada en la decisión de buscar o no atención de salud mental.',
    2:'El estigma afecta precisamente también, y de forma central, la decisión inicial de buscar atención por primera vez.',
    3:'El estigma es una barrera de naturaleza distinta (social, no económica ni geográfica), aunque comparta el efecto de limitar el acceso.'
  },
  trampa:'Subestimar el impacto real del estigma sobre la decisión de buscar atención, o confundirlo con las barreras económicas o geográficas típicas.',
  obj:'Explicar cómo el estigma funciona como una barrera real de acceso a la atención de salud mental.',
  ref:'OMS, Informe mundial sobre salud mental.',
  tags:['estigma como barrera','acceso a la atención','retraso en buscar ayuda']
},
{
  id:'U10-SMS-Q24', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Estigma y salud mental', sub:'Lenguaje centrado en la persona',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un profesional de salud se refiere habitualmente a sus pacientes como "el esquizofrénico de la habitación 3" en vez de "la persona con esquizofrenia de la habitación 3".',
  enunciado:'¿Qué problema ilustra este hábito de lenguaje, más allá de una simple cuestión de estilo?',
  ops:[
    'Puede reforzar, sin intención, el estigma hacia el paciente, al reducir su identidad completa a la etiqueta diagnóstica',
    'Este hábito de lenguaje nunca tiene ninguna relación real con el estigma que enfrentan los pacientes con trastornos mentales', 'Ambas formas de referirse al paciente son exactamente equivalentes, sin ninguna diferencia real en su impacto', 'El lenguaje usado por un profesional de salud nunca influye en el estigma social hacia sus pacientes'],
  ok:0,
  clave:'Puede reforzar, sin intención, el estigma hacia el paciente, al reducir su identidad completa a la etiqueta diagnóstica.',
  exp:'El propio profesional de salud puede, sin intención, reforzar el estigma con el lenguaje que usa (referirse a alguien como "un esquizofrénico" en vez de "una persona con esquizofrenia") -un lenguaje centrado en la persona, no en la etiqueta diagnóstica, es una práctica simple que contribuye activamente a reducir el estigma.',
  no:{
    1:'Este hábito sí tiene una relación real con el refuerzo del estigma, aunque sea de forma no intencional por parte del profesional.',
    2:'No son equivalentes: reducir a la persona a su etiqueta diagnóstica tiene un impacto distinto al de un lenguaje centrado en la persona.',
    3:'El lenguaje usado por un profesional de salud sí puede influir, de forma real, en el estigma que enfrenta el paciente.'
  },
  trampa:'Considerar el lenguaje diagnóstico ("el esquizofrénico") como equivalente al lenguaje centrado en la persona ("persona con esquizofrenia"), sin reconocer su impacto real en el estigma.',
  obj:'Explicar cómo el lenguaje usado por un profesional de salud puede reforzar o reducir el estigma hacia el paciente.',
  ref:'OMS, Informe mundial sobre salud mental.',
  tags:['lenguaje centrado en la persona','refuerzo del estigma','práctica clínica']
},
{
  id:'U10-SMS-Q25', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Estigma y salud mental', sub:'Trato diferencial entre síntomas "físicos" y de salud mental',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué tratar con la misma seriedad clínica una crisis de pánico y un evento cardíaco contribuye a reducir el estigma en salud mental?',
  ops:[
    'Porque tratar con menor seriedad los síntomas de salud mental, aunque sea de forma sutil, refuerza la idea social de que estos trastornos son menos reales o menos importantes',
    'No existe ninguna relación real entre cómo un profesional trata clínicamente un síntoma y el estigma social hacia la salud mental', 'Los síntomas de salud mental siempre deberían tratarse con menor urgencia clínica que los síntomas físicos, sin ninguna excepción', 'Tratar con la misma seriedad ambos tipos de síntomas nunca tiene ningún impacto real sobre el estigma social percibido'],
  ok:0,
  clave:'Tratar con menor seriedad los síntomas de salud mental, aunque sea de forma sutil, refuerza la idea social de que estos trastornos son menos reales o menos importantes.',
  exp:'Reducir el estigma en el entorno clínico implica evitar minimizar los síntomas de salud mental frente a los síntomas "físicos" -tratar con la misma seriedad clínica una crisis de pánico que un evento cardíaco- porque esa diferencia de trato, aunque sea sutil, refuerza la idea social de que los trastornos mentales son menos reales o importantes.',
  no:{
    1:'Sí existe una relación real: el trato clínico diferencial puede reforzar activamente el estigma social hacia la salud mental.',
    2:'No hay justificación clínica para tratar sistemáticamente con menor urgencia los síntomas de salud mental frente a los físicos.',
    3:'Tratar con la misma seriedad ambos tipos de síntomas sí tiene un impacto real, contribuyendo activamente a reducir el estigma.'
  },
  trampa:'Asumir que el trato clínico diferencial entre síntomas físicos y de salud mental no tiene ninguna relación con el refuerzo del estigma social.',
  obj:'Explicar por qué tratar con igual seriedad clínica los síntomas de salud mental contribuye a reducir el estigma.',
  ref:'OMS, Informe mundial sobre salud mental.',
  tags:['trato diferencial','seriedad clínica','reducción del estigma']
}

]);
