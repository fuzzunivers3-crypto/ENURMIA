/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE FARMACOTERAPEUTICA (2/2)
   Continua unirm-10-banco-3.js. Prefijo U10-FT-. Esta parte
   cubre gastrointestinal, psiquiatrica basica, farmacovigilancia,
   interacciones, ajuste de dosis renal/hepatico y embarazo/
   lactancia (temas 7-12).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U10-FT-Q26', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica gastrointestinal', sub:'Riesgos del uso prolongado de IBP',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué riesgos se han asociado con el uso prolongado e innecesario de inhibidores de bomba de protones?',
  ops:[
    'Mayor riesgo de ciertas infecciones intestinales, alteración de la absorción de algunos nutrientes, y posible impacto en la densidad ósea',
    'El uso prolongado de inhibidores de bomba de protones no tiene ningún riesgo documentado, sin importar la duración del tratamiento', 'Los inhibidores de bomba de protones solo tienen riesgos a corto plazo, nunca a largo plazo', 'El único riesgo del uso prolongado de inhibidores de bomba de protones es un costo económico elevado'],
  ok:0,
  clave:'Mayor riesgo de ciertas infecciones intestinales, alteración de la absorción de algunos nutrientes, y posible impacto en la densidad ósea.',
  exp:'El uso prolongado e innecesario de inhibidores de bomba de protones se ha asociado con riesgos que solo se hacen evidentes a largo plazo: mayor riesgo de ciertas infecciones intestinales, alteración de la absorción de algunos nutrientes, y posible impacto en la densidad ósea.',
  no:{
    1:'Sí existen riesgos documentados asociados al uso prolongado, aunque el perfil de seguridad a corto plazo sea favorable.',
    2:'Es precisamente lo contrario: los riesgos documentados se hacen evidentes principalmente a LARGO plazo, no a corto plazo.',
    3:'Los riesgos documentados son clínicos (infecciones, nutrientes, densidad ósea), no exclusivamente económicos.'
  },
  trampa:'Asumir que el buen perfil de seguridad a corto plazo de los IBP se mantiene indefinidamente sin ningún riesgo a largo plazo.',
  obj:'Identificar los riesgos asociados al uso prolongado e innecesario de inhibidores de bomba de protones.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 62.',
  tags:['inhibidores de bomba de protones','uso prolongado','riesgos a largo plazo']
},
{
  id:'U10-FT-Q27', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica gastrointestinal', sub:'Revisar la necesidad continuada del tratamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio, ya visto en prevención cuaternaria, se aplica a la revisión periódica de un inhibidor de bomba de protones prescrito hace años?',
  ops:[
    'Que a veces la mejor conducta médica es suspender un tratamiento que ya no aporta beneficio neto, no simplemente mantenerlo por inercia',
    'Este principio no tiene ninguna relación real con la prevención cuaternaria vista anteriormente en el pensum', 'Un tratamiento, una vez iniciado, siempre debe mantenerse indefinidamente sin ninguna revisión posterior', 'La prevención cuaternaria solo aplica a estudios diagnósticos, nunca a tratamientos farmacológicos ya iniciados'],
  ok:0,
  clave:'Que a veces la mejor conducta médica es suspender un tratamiento que ya no aporta beneficio neto, no simplemente mantenerlo por inercia.',
  exp:'Un ejemplo del mismo principio ya visto en prevención cuaternaria: a veces la mejor conducta médica es suspender un tratamiento que ya no aporta beneficio neto, no simplemente mantenerlo por inercia. Revisar periódicamente la necesidad continuada de un inhibidor de bomba de protones es una práctica de farmacoterapia racional cada vez más reconocida.',
  no:{
    1:'Sí existe una relación conceptual directa: el mismo principio de evitar el exceso de intervención se aplica aquí a un tratamiento farmacológico prolongado.',
    2:'Es precisamente lo contrario: un tratamiento sí debe revisarse periódicamente, no mantenerse indefinidamente por inercia.',
    3:'La prevención cuaternaria también aplica a tratamientos farmacológicos prolongados, no exclusivamente a estudios diagnósticos.'
  },
  trampa:'No reconocer la extensión del principio de prevención cuaternaria (evitar el exceso de intervención) a la revisión de tratamientos farmacológicos prolongados.',
  obj:'Aplicar el principio de prevención cuaternaria a la revisión periódica de un tratamiento farmacológico prolongado.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 62.',
  tags:['prevención cuaternaria','revisión de tratamiento','suspensión apropiada']
},
{
  id:'U10-FT-Q28', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica gastrointestinal', sub:'Elección del antiemético según mecanismo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué usar el mismo antiemético para cualquier causa de náuseas, sin considerar el mecanismo probable, reduce la probabilidad de un alivio efectivo?',
  ops:[
    'Porque los antieméticos actúan sobre distintos mecanismos (dopamina, serotonina, sistema vestibular), y elegir el correcto depende de identificar cuál predomina en cada caso',
    'Todos los antieméticos, sin importar su mecanismo, son exactamente igual de efectivos para cualquier causa de náuseas', 'Las náuseas siempre tienen el mismo mecanismo subyacente, sin importar su causa específica', 'El mecanismo de acción del antiemético nunca tiene relación con su efectividad clínica real'],
  ok:0,
  clave:'Los antieméticos actúan sobre distintos mecanismos (dopamina, serotonina, sistema vestibular), y elegir el correcto depende de identificar cuál predomina en cada caso.',
  exp:'Los antieméticos actúan sobre distintos mecanismos según su tipo -elegir el antiemético correcto depende de identificar cuál es el mecanismo predominante de las náuseas del paciente (por ejemplo, náuseas por quimioterapia responden mejor a un mecanismo distinto que el mareo por movimiento).',
  no:{
    1:'No todos son igual de efectivos para cualquier causa; su efectividad depende de que el mecanismo del fármaco coincida con el mecanismo de las náuseas.',
    2:'Las náuseas pueden tener mecanismos subyacentes distintos según su causa, no un único mecanismo universal.',
    3:'El mecanismo de acción sí tiene una relación directa con la efectividad clínica, siendo central para elegir el antiemético correcto.'
  },
  trampa:'Asumir que cualquier antiemético es igual de efectivo sin importar la causa de las náuseas, ignorando la diversidad de mecanismos involucrados.',
  obj:'Explicar por qué la elección del antiemético debe basarse en el mecanismo probable de las náuseas.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 62.',
  tags:['antieméticos','mecanismo de las náuseas','elección dirigida']
},
{
  id:'U10-FT-Q29', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica gastrointestinal', sub:'Eficacia a corto plazo de los IBP',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los inhibidores de bomba de protones se convirtieron en fármacos de uso extendido, más allá de sus indicaciones claras?',
  ops:[
    'Por su eficacia y perfil de seguridad favorable a corto plazo, que llevaron a un uso extendido más allá de sus indicaciones claras y del tiempo necesario', 'Porque los inhibidores de bomba de protones nunca han demostrado ninguna eficacia real en la enfermedad ácido-péptica', 'Porque no existe ninguna alternativa farmacológica para tratar la enfermedad ácido-péptica', 'Porque su costo es tan elevado que se prescriben deliberadamente por razones exclusivamente económicas'],
  ok:0,
  clave:'Por su eficacia y perfil de seguridad favorable a corto plazo, que llevaron a un uso extendido más allá de sus indicaciones claras y del tiempo necesario.',
  exp:'Los inhibidores de bomba de protones son extremadamente eficaces para tratar la enfermedad ácido-péptica; su eficacia y su perfil de seguridad favorable a corto plazo han llevado, en la práctica clínica, a un uso extendido más allá de sus indicaciones claras y del tiempo necesario.',
  no:{
    1:'Los inhibidores de bomba de protones sí tienen eficacia demostrada y bien documentada en la enfermedad ácido-péptica.',
    2:'Existen otras alternativas farmacológicas para la enfermedad ácido-péptica, aunque los IBP sean particularmente eficaces.',
    3:'La razón del uso extendido es principalmente clínica (eficacia y seguridad percibida), no exclusivamente económica.'
  },
  trampa:'No reconocer que la buena eficacia y seguridad percibida a corto plazo es precisamente lo que llevó al uso extendido más allá de lo necesario.',
  obj:'Explicar por qué los inhibidores de bomba de protones se volvieron fármacos de uso extendido más allá de sus indicaciones claras.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 62.',
  tags:['inhibidores de bomba de protones','uso extendido','indicaciones claras']
},
{
  id:'U10-FT-Q30', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica psiquiátrica básica', sub:'Riesgo de abandono durante la latencia antidepresiva',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente inicia tratamiento con un antidepresivo y, tras dos semanas, experimenta efectos adversos tempranos sin todavía sentir mejoría en su estado de ánimo, por lo que considera abandonar el tratamiento por su cuenta.',
  enunciado:'¿Por qué explicar la latencia del efecto antidepresivo desde el inicio del tratamiento es una intervención que mejora la adherencia real?',
  ops:[
    'Porque el mayor reto de la adherencia ocurre precisamente en el período donde puede haber efectos adversos tempranos sin el beneficio terapéutico completo todavía, el momento donde más pacientes abandonan',
    'Explicar la latencia del efecto antidepresivo no tiene ninguna influencia real sobre la decisión del paciente de continuar o abandonar el tratamiento', 'Los antidepresivos siempre producen su efecto terapéutico completo de forma inmediata, sin ninguna latencia real', 'El abandono del tratamiento antidepresivo nunca ocurre durante las primeras semanas de tratamiento'],
  ok:0,
  clave:'El mayor reto de la adherencia ocurre precisamente en el período donde puede haber efectos adversos tempranos sin el beneficio terapéutico completo todavía, el momento donde más pacientes abandonan.',
  exp:'El mayor reto práctico de la terapéutica psiquiátrica es sostener la adherencia del paciente durante el período de latencia, en el que puede haber efectos adversos tempranos pero todavía no el beneficio terapéutico completo -precisamente el momento donde más pacientes abandonan el tratamiento por su cuenta. Explicar esta latencia con claridad desde el inicio mejora directamente la adherencia real.',
  no:{
    1:'Explicar la latencia sí tiene una influencia real documentada sobre la adherencia, al preparar al paciente para ese período difícil.',
    2:'Los antidepresivos tienen una latencia característica de semanas antes de su efecto terapéutico completo, no un efecto inmediato.',
    3:'El abandono precisamente ocurre con más frecuencia durante las primeras semanas, el período de mayor riesgo de discontinuación.'
  },
  trampa:'Subestimar el impacto de explicar la latencia del efecto antidepresivo sobre la adherencia real del paciente durante el período crítico inicial.',
  obj:'Explicar por qué informar sobre la latencia del efecto antidepresivo mejora la adherencia al tratamiento.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 29-30.',
  tags:['latencia antidepresiva','adherencia al tratamiento','abandono temprano']
},
{
  id:'U10-FT-Q31', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica psiquiátrica básica', sub:'Uso de ansiolíticos por el menor tiempo posible',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se recomienda usar los ansiolíticos (con frecuencia benzodiazepinas) por el menor tiempo posible?',
  ops:[
    'Porque su uso prolongado conlleva riesgo de dependencia y tolerancia, así que se usan como puente mientras un tratamiento de fondo alcanza su efecto completo',
    'Los ansiolíticos no tienen ningún riesgo asociado a su uso prolongado, así que la duración del tratamiento no importa', 'Los ansiolíticos deben usarse de forma indefinida como tratamiento único y permanente de cualquier trastorno de ansiedad', 'El uso prolongado de ansiolíticos siempre mejora, sin ningún riesgo, el control a largo plazo de la ansiedad'],
  ok:0,
  clave:'Su uso prolongado conlleva riesgo de dependencia y tolerancia, así que se usan como puente mientras un tratamiento de fondo alcanza su efecto completo.',
  exp:'Los ansiolíticos son útiles para el alivio rápido de síntomas de ansiedad aguda, pero su uso prolongado conlleva riesgo de dependencia y tolerancia, por lo que la práctica recomendada es usarlos por el menor tiempo posible, como puente mientras un tratamiento de fondo (como un antidepresivo) alcanza su efecto completo.',
  no:{
    1:'Los ansiolíticos sí tienen un riesgo real de dependencia y tolerancia con el uso prolongado, precisamente el motivo de esta recomendación.',
    2:'Es precisamente lo contrario: se recomienda usarlos como PUENTE de corto plazo, no como tratamiento único y permanente.',
    3:'El uso prolongado sin plan de reducción expone al paciente a riesgo de dependencia, sin necesariamente mejorar el control a largo plazo.'
  },
  trampa:'Asumir que los ansiolíticos pueden usarse indefinidamente sin riesgo, en vez de reconocer su rol de puente temporal mientras actúa el tratamiento de fondo.',
  obj:'Explicar por qué se recomienda el uso de ansiolíticos por el menor tiempo posible, como puente temporal.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 29-30.',
  tags:['ansiolíticos','riesgo de dependencia','uso como puente']
},
{
  id:'U10-FT-Q32', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica psiquiátrica básica', sub:'Vigilancia metabólica en antipsicóticos atípicos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es importante la vigilancia metabólica activa en pacientes que reciben ciertos antipsicóticos atípicos, más allá de los síntomas extrapiramidales?',
  ops:[
    'Porque estos fármacos pueden causar efectos metabólicos (aumento de peso, alteración de glucosa y lípidos) que pueden pasar desapercibidos si no se buscan activamente con controles periódicos',
    'Los antipsicóticos atípicos nunca producen ningún efecto metabólico relevante, solo síntomas extrapiramidales', 'Los síntomas extrapiramidales son el único efecto adverso relevante de cualquier antipsicótico, sin excepción', 'La vigilancia metabólica en antipsicóticos atípicos no aporta ninguna información clínica útil'],
  ok:0,
  clave:'Estos fármacos pueden causar efectos metabólicos (aumento de peso, alteración de glucosa y lípidos) que pueden pasar desapercibidos si no se buscan activamente con controles periódicos.',
  exp:'El uso de antipsicóticos requiere vigilancia activa no solo de síntomas extrapiramidales (más frecuentes con los típicos), sino también de efectos metabólicos (aumento de peso, alteración de la glucosa y los lípidos), especialmente frecuentes con algunos antipsicóticos atípicos, que pueden pasar desapercibidos si no se buscan activamente con controles periódicos.',
  no:{
    1:'Los antipsicóticos atípicos sí pueden producir efectos metabólicos relevantes y bien documentados, distintos de los extrapiramidales.',
    2:'Los efectos metabólicos son igual de relevantes que los extrapiramidales, especialmente en algunos antipsicóticos atípicos.',
    3:'La vigilancia metabólica sí aporta información clínica útil, al detectar efectos adversos que de otra forma pasarían desapercibidos.'
  },
  trampa:'Limitar la vigilancia de efectos adversos de los antipsicóticos exclusivamente a los síntomas extrapiramidales, ignorando el riesgo metabólico.',
  obj:'Explicar la importancia de la vigilancia metabólica activa en pacientes con antipsicóticos atípicos.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 29-30.',
  tags:['antipsicóticos atípicos','efectos metabólicos','vigilancia activa']
},
{
  id:'U10-FT-Q33', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica psiquiátrica básica', sub:'Percepción de efectos adversos vs. beneficio de prevenir recaída',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la adherencia al tratamiento antipsicótico de largo plazo es particularmente sensible?',
  ops:[
    'Porque los efectos adversos (sedación, aumento de peso, síntomas motores) son con frecuencia más perceptibles día a día para el paciente que el beneficio de prevenir una recaída futura',
    'La adherencia al tratamiento antipsicótico nunca representa ningún desafío clínico real en la práctica', 'Los efectos adversos de los antipsicóticos siempre son menos perceptibles que el beneficio de prevenir una recaída', 'El beneficio de prevenir una recaída futura es siempre más evidente y perceptible para el paciente que los efectos adversos diarios'],
  ok:0,
  clave:'Los efectos adversos son con frecuencia más perceptibles día a día para el paciente que el beneficio de prevenir una recaída futura.',
  exp:'La adherencia en el tratamiento antipsicótico de largo plazo es particularmente sensible, porque los efectos adversos (sedación, aumento de peso, síntomas motores) son con frecuencia más perceptibles día a día para el paciente que el beneficio de prevenir una recaída futura -un desafío clínico que exige explicar el balance de riesgo-beneficio de forma explícita y repetida.',
  no:{
    1:'La adherencia en este contexto sí representa un desafío clínico real y bien reconocido en la práctica psiquiátrica.',
    2:'Es precisamente lo contrario: los efectos adversos suelen ser MÁS perceptibles cotidianamente que el beneficio preventivo, más abstracto.',
    3:'Es al revés: el beneficio de prevenir una recaída futura es MENOS tangible día a día que los efectos adversos percibidos constantemente.'
  },
  trampa:'Subestimar la asimetría entre efectos adversos tangibles diarios y un beneficio preventivo abstracto y futuro, que explica el desafío de adherencia.',
  obj:'Explicar por qué la adherencia al tratamiento antipsicótico de largo plazo es particularmente sensible.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 29-30.',
  tags:['adherencia antipsicótica','percepción de efectos adversos','prevención de recaída']
},
{
  id:'U10-FT-Q34', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Farmacovigilancia y reacciones adversas', sub:'Qué se debe notificar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es un error asumir que solo se deben notificar las reacciones adversas graves o completamente nuevas?',
  ops:[
    'Porque el sistema depende de que se reporten también reacciones ya conocidas, para poder estimar con precisión su frecuencia real en la práctica clínica más amplia',
    'Solo las reacciones adversas graves y completamente nuevas tienen algún valor real para el sistema de farmacovigilancia', 'Las reacciones adversas ya conocidas nunca deberían notificarse, al no aportar ninguna información adicional', 'El sistema de farmacovigilancia no depende en absoluto de la notificación de reacciones adversas por parte de los profesionales de salud'],
  ok:0,
  clave:'El sistema depende de que se reporten también reacciones ya conocidas, para poder estimar con precisión su frecuencia real en la práctica clínica.',
  exp:'Muchos profesionales asumen erróneamente que solo deben notificar reacciones adversas graves o completamente nuevas, cuando en realidad el sistema depende de que se reporten también reacciones ya conocidas, para poder estimar con precisión su frecuencia real en la práctica clínica más amplia.',
  no:{
    1:'Es precisamente lo contrario: las reacciones YA CONOCIDAS también deben notificarse, para estimar su frecuencia real acumulada.',
    2:'Las reacciones ya conocidas sí aportan información valiosa, al contribuir al patrón poblacional acumulado de frecuencia real.',
    3:'El sistema de farmacovigilancia depende directamente de la notificación activa de los profesionales de salud, siendo su motor principal.'
  },
  trampa:'Asumir que solo las reacciones adversas graves o nuevas ameritan notificación, subestimando el valor de reportar reacciones ya conocidas.',
  obj:'Explicar por qué también deben notificarse las reacciones adversas ya conocidas, no solo las graves o nuevas.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 5.',
  tags:['notificación espontánea','reacciones ya conocidas','farmacovigilancia']
},
{
  id:'U10-FT-Q35', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Farmacovigilancia y reacciones adversas', sub:'Sospecha activa en paciente polimedicado',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente polimedicado desarrolla un síntoma nuevo poco después de iniciar un nuevo fármaco, pero el equipo médico lo atribuye directamente a su enfermedad de base sin considerar otras posibilidades.',
  enunciado:'¿Qué riesgo tiene esta conducta de no mantener la sospecha activa de una reacción adversa?',
  ops:[
    'Que la reacción adversa puede quedar oculta entre las demás explicaciones posibles, si no se considera explícitamente como una de las causas',
    'En un paciente polimedicado nunca existe ninguna posibilidad real de que un síntoma nuevo sea una reacción adversa a un medicamento', 'Atribuir automáticamente cualquier síntoma nuevo a la enfermedad de base siempre es la conducta clínica más acertada', 'La posibilidad farmacológica nunca debería considerarse al evaluar un síntoma nuevo en cualquier paciente'],
  ok:0,
  clave:'La reacción adversa puede quedar oculta entre las demás explicaciones posibles, si no se considera explícitamente como una de las causas.',
  exp:'Esta sospecha activa es particularmente relevante en pacientes polimedicados, donde un síntoma nuevo tiene múltiples explicaciones posibles compitiendo entre sí, y la reacción adversa puede quedar oculta entre las demás posibilidades si no se considera explícitamente.',
  no:{
    1:'En un paciente polimedicado sí existe una posibilidad real y frecuente de que un síntoma nuevo sea una reacción adversa a un medicamento.',
    2:'Atribuir automáticamente a la enfermedad de base, sin considerar la posibilidad farmacológica, puede ocultar una reacción adversa real.',
    3:'La posibilidad farmacológica sí debería mantenerse presente, especialmente si el síntoma apareció tras iniciar o cambiar un tratamiento.'
  },
  trampa:'No reconocer el riesgo de atribuir automáticamente un síntoma nuevo a la enfermedad de base, sin considerar activamente una posible reacción adversa.',
  obj:'Explicar el riesgo de no mantener la sospecha activa de reacción adversa en un paciente polimedicado.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 5.',
  tags:['sospecha activa','paciente polimedicado','síntoma nuevo']
},
{
  id:'U10-FT-Q36', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Farmacovigilancia y reacciones adversas', sub:'Del caso individual al patrón poblacional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una sola notificación de reacción adversa, aislada, puede no significar mucho, mientras que muchas notificaciones independientes de una reacción similar sí revelan un riesgo real?',
  ops:[
    'Porque el patrón acumulado de múltiples notificaciones independientes puede revelar un riesgo real que ningún caso individual, aislado, había detectado',
    'Una sola notificación de reacción adversa siempre es, por sí sola, suficiente para confirmar un riesgo real asociado a un fármaco', 'Las notificaciones acumuladas de distintos profesionales nunca aportan más información que un solo caso aislado', 'El patrón poblacional de reacciones adversas nunca puede detectar riesgos que los ensayos clínicos previos no detectaron'],
  ok:0,
  clave:'El patrón acumulado de múltiples notificaciones independientes puede revelar un riesgo real que ningún caso individual, aislado, había detectado.',
  exp:'Una sola notificación aislada puede no significar mucho -podría ser coincidencia-, pero cuando muchos profesionales notifican de forma independiente una reacción similar asociada al mismo fármaco, ese patrón acumulado puede revelar un riesgo real que ningún ensayo clínico individual había detectado antes de la comercialización.',
  no:{
    1:'Un caso aislado, por sí solo, no suele ser suficiente para confirmar un riesgo real; se requiere el patrón acumulado de varios reportes.',
    2:'Las notificaciones acumuladas sí aportan información adicional valiosa, revelando patrones que un caso aislado no puede mostrar.',
    3:'El patrón poblacional acumulado puede, precisamente, detectar riesgos que los ensayos clínicos previos, más limitados, no habían detectado.'
  },
  trampa:'Sobrestimar el valor de un caso aislado o subestimar el valor del patrón poblacional acumulado de notificaciones independientes.',
  obj:'Explicar por qué el patrón acumulado de notificaciones independientes revela riesgos que un caso aislado no puede detectar.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 5.',
  tags:['patrón poblacional','notificaciones acumuladas','detección de riesgo real']
},
{
  id:'U10-FT-Q37', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Farmacovigilancia y reacciones adversas', sub:'La farmacovigilancia depende de la notificación sistemática',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De qué depende que la farmacovigilancia sea efectiva en la práctica real?',
  ops:[
    'De que cada médico notifique de forma sistemática, no solo cuando sospecha algo "raro" o completamente nuevo',
    'La farmacovigilancia efectiva depende exclusivamente de estudios de laboratorio, sin ninguna relación con la notificación médica', 'La farmacovigilancia solo funciona si los médicos notifican exclusivamente reacciones adversas extremadamente infrecuentes', 'La efectividad de la farmacovigilancia no depende en absoluto de la participación activa de los profesionales de salud'],
  ok:0,
  clave:'De que cada médico notifique de forma sistemática, no solo cuando sospecha algo "raro" o completamente nuevo.',
  exp:'La farmacovigilancia efectiva depende de que cada médico notifique de forma sistemática, no solo cuando sospecha algo "raro" o completamente nuevo -el patrón poblacional se construye con la suma de reportes individuales, incluidos los aparentemente ordinarios.',
  no:{
    1:'La farmacovigilancia depende centralmente de la notificación médica sistemática, no solo de estudios de laboratorio.',
    2:'No se limita a reacciones extremadamente infrecuentes; depende también de la notificación de reacciones más comunes y ya conocidas.',
    3:'La participación activa de los profesionales de salud es, de hecho, el motor central de un sistema de farmacovigilancia efectivo.'
  },
  trampa:'Subestimar el rol de la notificación sistemática regular por parte de cada médico, sin la cual el sistema de farmacovigilancia pierde efectividad.',
  obj:'Explicar de qué depende la efectividad real del sistema de farmacovigilancia.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 5.',
  tags:['farmacovigilancia efectiva','notificación sistemática','participación médica']
},
{
  id:'U10-FT-Q38', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Interacciones medicamentosas clínicamente relevantes', sub:'Revisar la lista completa, no solo el fármaco nuevo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se recomienda revisar la lista completa de medicación de un paciente, y no solo comparar el fármaco nuevo con cada uno de los existentes por separado?',
  ops:[
    'Porque el riesgo de interacción puede depender de combinaciones más complejas entre varios fármacos a la vez, no solo de pares aislados',
    'Comparar el fármaco nuevo con cada medicamento existente por separado siempre es suficiente para detectar cualquier interacción posible', 'El riesgo de interacción nunca depende de combinaciones complejas entre varios fármacos simultáneamente', 'La revisión de la lista completa de medicación no aporta ninguna ventaja real sobre revisar solo el fármaco nuevo'],
  ok:0,
  clave:'El riesgo de interacción puede depender de combinaciones más complejas entre varios fármacos a la vez, no solo de pares aislados.',
  exp:'El riesgo de interacción no depende solo de ese fármaco nuevo con cada uno de los existentes por separado, sino también de combinaciones más complejas entre varios fármacos a la vez -razón por la cual una revisión de medicación completa y sistemática es la práctica recomendada.',
  no:{
    1:'Comparar solo pares aislados puede pasar por alto interacciones más complejas que involucran a varios fármacos simultáneamente.',
    2:'El riesgo sí puede depender de combinaciones complejas de varios fármacos, no solo de interacciones de dos en dos.',
    3:'La revisión completa sí aporta una ventaja real, al detectar interacciones complejas que una revisión parcial pasaría por alto.'
  },
  trampa:'Asumir que revisar el fármaco nuevo contra cada medicamento existente por separado es equivalente a una revisión completa de toda la combinación.',
  obj:'Explicar por qué se recomienda revisar la lista completa de medicación, no solo el fármaco nuevo aisladamente.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.',
  tags:['revisión de medicación','interacciones complejas','revisión sistemática']
},
{
  id:'U10-FT-Q39', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Interacciones medicamentosas clínicamente relevantes', sub:'Interacción con fármaco de margen terapéutico estrecho',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente toma un fármaco de margen terapéutico estrecho, y se le agrega un inhibidor enzimático potente que comparte la misma vía de metabolismo.',
  enunciado:'¿Por qué este escenario tiene un riesgo particularmente serio, más que si el fármaco tuviera un margen terapéutico amplio?',
  ops:[
    'Porque la diferencia entre dosis eficaz y dosis tóxica es pequeña, así que incluso un aumento moderado en la concentración causado por la inhibición enzimática puede tener consecuencias clínicas serias',
    'El margen terapéutico de un fármaco nunca tiene relación real con el riesgo de una interacción por inhibición enzimática', 'Un fármaco de margen terapéutico estrecho es completamente inmune a cualquier efecto de un inhibidor enzimático', 'El riesgo de esta interacción sería exactamente el mismo sin importar si el margen terapéutico es estrecho o amplio'],
  ok:0,
  clave:'La diferencia entre dosis eficaz y dosis tóxica es pequeña, así que incluso un aumento moderado en la concentración puede tener consecuencias clínicas serias.',
  exp:'Un ejemplo clásico es la combinación de un inhibidor enzimático potente con un fármaco de margen terapéutico estrecho: en ese contexto, incluso un aumento moderado en la concentración del segundo fármaco, causado por la inhibición enzimática, puede tener consecuencias clínicas serias.',
  no:{
    1:'El margen terapéutico sí tiene una relación directa con la gravedad potencial de una interacción por inhibición enzimática.',
    2:'Es precisamente lo contrario: un fármaco de margen terapéutico ESTRECHO es particularmente VULNERABLE a este tipo de interacción.',
    3:'El riesgo es mayor con un margen terapéutico estrecho, ya que un pequeño aumento de concentración puede alcanzar niveles tóxicos.'
  },
  trampa:'No reconocer por qué el margen terapéutico estrecho de un fármaco amplifica el riesgo clínico de una interacción por inhibición enzimática.',
  obj:'Explicar por qué una interacción con un fármaco de margen terapéutico estrecho es particularmente riesgosa.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.',
  tags:['margen terapéutico estrecho','inhibidor enzimático','interacción grave']
},
{
  id:'U10-FT-Q40', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Interacciones medicamentosas clínicamente relevantes', sub:'Crecimiento no lineal del riesgo en polifarmacia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo crece el número de combinaciones posibles de interacción a medida que aumenta el número de fármacos que toma un paciente?',
  ops:[
    'Crece de forma exponencial, no lineal, a medida que aumenta el número de fármacos tomados simultáneamente',
    'El número de combinaciones posibles crece de forma lineal y proporcional, sin ninguna aceleración especial', 'El número de combinaciones posibles de interacción nunca cambia, sin importar cuántos fármacos tome el paciente', 'El crecimiento del riesgo de interacción no tiene ninguna relación con el número de fármacos tomados'],
  ok:0,
  clave:'Crece de forma exponencial, no lineal, a medida que aumenta el número de fármacos tomados simultáneamente.',
  exp:'La polifarmacia multiplica exponencialmente el número de combinaciones posibles de interacción, retomando directamente lo ya visto en Farmacología sobre este crecimiento no lineal del riesgo -cuantos más fármacos toma una persona, más rápido crece la cantidad de interacciones posibles entre ellos.',
  no:{
    1:'El crecimiento es EXPONENCIAL, no meramente lineal ni proporcional, un punto central para entender el riesgo real de la polifarmacia.',
    2:'El número de combinaciones sí cambia y crece considerablemente con cada fármaco adicional que se añade a la lista del paciente.',
    3:'El riesgo de interacción tiene una relación directa y creciente con el número de fármacos tomados simultáneamente.'
  },
  trampa:'Subestimar el crecimiento exponencial (no lineal) del número de combinaciones posibles de interacción a medida que aumenta el número de fármacos.',
  obj:'Explicar el crecimiento exponencial del riesgo de interacciones a medida que aumenta el número de fármacos en polifarmacia.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.',
  tags:['polifarmacia','crecimiento exponencial del riesgo','combinaciones posibles']
},
{
  id:'U10-FT-Q41', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Interacciones medicamentosas clínicamente relevantes', sub:'Reducir la lista, no solo agregar con cuidado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué reducir la lista de medicamentos de un paciente polimedicado, cuando es clínicamente apropiado, se considera parte de la farmacoterapia racional?',
  ops:[
    'Porque cada visita clínica es una oportunidad para preguntar explícitamente si cada fármaco sigue siendo necesario, no solo para agregar uno nuevo con cuidado',
    'La farmacoterapia racional solo se enfoca en agregar fármacos nuevos con cuidado, nunca en reducir los ya prescritos', 'Reducir la lista de medicamentos de un paciente polimedicado nunca tiene ninguna relación con la práctica racional de prescripción', 'Un paciente polimedicado siempre debe mantener exactamente la misma lista de medicamentos indefinidamente, sin ninguna revisión'],
  ok:0,
  clave:'Cada visita clínica es una oportunidad para preguntar explícitamente si cada fármaco sigue siendo necesario, no solo para agregar uno nuevo.',
  exp:'En un paciente polimedicado, cada visita clínica es una oportunidad para preguntar explícitamente si cada fármaco de la lista sigue siendo necesario, no solo para agregar uno nuevo -reducir la lista, cuando es clínicamente apropiado, es tan parte de la farmacoterapia racional como elegir bien un fármaco nuevo.',
  no:{
    1:'La farmacoterapia racional incluye tanto elegir bien fármacos nuevos como revisar y, si corresponde, retirar fármacos que ya no son necesarios.',
    2:'Reducir la lista de medicamentos sí tiene una relación directa con la práctica racional, cuando es clínicamente apropiado hacerlo.',
    3:'La lista de medicamentos de un paciente polimedicado sí debería revisarse periódicamente, no mantenerse fija sin ninguna evaluación.'
  },
  trampa:'Limitar la farmacoterapia racional solo al cuidado al agregar fármacos nuevos, sin reconocer el valor igual de importante de reducir la lista cuando corresponde.',
  obj:'Explicar por qué reducir la lista de medicamentos de un paciente polimedicado es parte de la farmacoterapia racional.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.',
  tags:['reducción de la lista','revisión periódica','farmacoterapia racional']
},
{
  id:'U10-FT-Q42', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Ajuste de dosis en insuficiencia renal y hepática', sub:'Estrategias de ajuste renal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estrategias generales se usan para ajustar la dosis de un fármaco de eliminación renal en un paciente con función renal disminuida?',
  ops:[
    'Reducir la dosis administrada, aumentar el intervalo entre dosis, o ambas estrategias combinadas, según las características del fármaco',
    'La única estrategia posible es suspender por completo cualquier fármaco de eliminación renal en un paciente con insuficiencia renal', 'No existe ninguna estrategia real de ajuste de dosis para fármacos de eliminación renal en insuficiencia renal', 'El ajuste de dosis en insuficiencia renal siempre consiste en aumentar la dosis administrada, no en reducirla'],
  ok:0,
  clave:'Reducir la dosis administrada, aumentar el intervalo entre dosis, o ambas estrategias combinadas, según las características del fármaco.',
  exp:'En general, se puede reducir la dosis administrada, aumentar el intervalo entre dosis, o ambas estrategias combinadas, según las características específicas del fármaco, para ajustar la dosis de un fármaco de eliminación predominantemente renal en un paciente con función renal disminuida.',
  no:{
    1:'Suspender por completo no es la única opción; con frecuencia el fármaco puede usarse ajustando la dosis o el intervalo.',
    2:'Sí existen estrategias reales y bien definidas de ajuste (reducir dosis, espaciar intervalo) para este escenario clínico.',
    3:'Es precisamente lo contrario: en insuficiencia renal se REDUCE (no aumenta) la dosis de fármacos de eliminación renal, para evitar acumulación.'
  },
  trampa:'Asumir que la única opción ante insuficiencia renal es suspender el fármaco, o invertir la dirección del ajuste de dosis necesario.',
  obj:'Identificar las estrategias generales de ajuste de dosis para un fármaco de eliminación renal en insuficiencia renal.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3-4.',
  tags:['ajuste de dosis renal','depuración de creatinina','estrategias de ajuste']
},
{
  id:'U10-FT-Q43', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Ajuste de dosis en insuficiencia renal y hepática', sub:'Diferencia entre ajuste renal y hepático',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el ajuste de dosis en insuficiencia hepática se basa con más frecuencia en criterio clínico que en una fórmula exacta, a diferencia del ajuste renal?',
  ops:[
    'Porque la función hepática es más difícil de cuantificar de forma numérica precisa que la función renal, que se estima con relativa precisión mediante la depuración de creatinina',
    'La función hepática se puede cuantificar con exactamente la misma precisión numérica que la función renal', 'El ajuste de dosis en insuficiencia hepática nunca requiere ningún tipo de criterio clínico, solo fórmulas exactas', 'La insuficiencia hepática es menos importante que la renal para el ajuste de dosis de cualquier fármaco'],
  ok:0,
  clave:'La función hepática es más difícil de cuantificar de forma numérica precisa que la función renal, que se estima con relativa precisión mediante la depuración de creatinina.',
  exp:'A diferencia de la función renal (que se estima con relativa precisión mediante la depuración de creatinina), la función hepática es más difícil de cuantificar de forma numérica precisa, así que el ajuste en insuficiencia hepática se basa con frecuencia en criterio clínico y en escalas de severidad, más que en una fórmula exacta.',
  no:{
    1:'Es precisamente lo contrario: la función hepática es MÁS DIFÍCIL de cuantificar numéricamente que la función renal.',
    2:'El criterio clínico y las escalas de severidad sí son necesarios en insuficiencia hepática, complementando (no reemplazando) la evaluación.',
    3:'La insuficiencia hepática es igualmente importante para el ajuste de dosis, aunque su evaluación sea metodológicamente distinta a la renal.'
  },
  trampa:'Asumir que la función hepática se cuantifica con la misma precisión numérica que la función renal, o subestimar su importancia para el ajuste de dosis.',
  obj:'Explicar por qué el ajuste de dosis en insuficiencia hepática se basa más en criterio clínico que en una fórmula exacta.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3-4.',
  tags:['insuficiencia hepática','ajuste de dosis','criterio clínico']
},
{
  id:'U10-FT-Q44', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Ajuste de dosis en insuficiencia renal y hepática', sub:'Compromiso simultáneo renal y hepático',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con enfermedad avanzada presenta compromiso simultáneo de la función renal y hepática, y requiere un fármaco que normalmente se elimina en parte por ambas vías.',
  enunciado:'¿Qué hace particularmente complejo el ajuste de dosis en este escenario?',
  ops:[
    'El fármaco puede acumularse de forma impredecible si ambas rutas de eliminación están comprometidas a la vez, a diferencia de un compromiso de un solo órgano',
    'El compromiso simultáneo de ambos órganos no complica en absoluto el cálculo del ajuste de dosis necesario', 'Cuando ambos órganos están comprometidos, el ajuste de dosis se vuelve automáticamente más sencillo de calcular', 'Este escenario es idéntico, en términos de complejidad, a un compromiso aislado de un solo órgano'],
  ok:0,
  clave:'El fármaco puede acumularse de forma impredecible si ambas rutas de eliminación están comprometidas a la vez, a diferencia de un compromiso de un solo órgano.',
  exp:'En un paciente con compromiso simultáneo de la función renal y hepática, el ajuste de dosis se vuelve considerablemente más complejo, porque un fármaco que normalmente se elimina en parte por cada vía puede acumularse de forma impredecible si ambas rutas de eliminación están comprometidas a la vez.',
  no:{
    1:'El compromiso simultáneo sí complica considerablemente el cálculo, precisamente por la acumulación impredecible en ambas vías afectadas.',
    2:'Es precisamente lo contrario: el ajuste se vuelve MÁS complejo, no más sencillo, cuando ambas vías de eliminación están comprometidas.',
    3:'El escenario de compromiso doble es notablemente MÁS complejo que un compromiso aislado de un solo órgano, no idéntico en complejidad.'
  },
  trampa:'Subestimar la complejidad adicional que representa el compromiso simultáneo de dos vías de eliminación distintas para un mismo fármaco.',
  obj:'Explicar por qué el ajuste de dosis es particularmente complejo cuando hay compromiso simultáneo renal y hepático.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3-4.',
  tags:['compromiso renal y hepático simultáneo','acumulación impredecible','ajuste complejo']
},
{
  id:'U10-FT-Q45', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Ajuste de dosis en insuficiencia renal y hepática', sub:'No asumir seguridad de la dosis estándar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué verificación previa es indispensable antes de prescribir la dosis estándar de un fármaco a un paciente con insuficiencia renal o hepática conocida?',
  ops:[
    'Verificar la vía principal de eliminación del fármaco y calcular el ajuste correspondiente según el grado de compromiso de esa vía',
    'No es necesaria ninguna verificación previa; la dosis estándar siempre es segura, sin importar la función renal o hepática del paciente', 'Basta con reducir arbitrariamente la dosis a la mitad, sin necesidad de calcular nada específico para ese fármaco', 'La vía de eliminación del fármaco nunca tiene relación real con la necesidad de ajustar la dosis en estos pacientes'],
  ok:0,
  clave:'Verificar la vía principal de eliminación del fármaco y calcular el ajuste correspondiente según el grado de compromiso de esa vía.',
  exp:'Nunca asumir que la dosis estándar de un fármaco es segura en un paciente con insuficiencia renal o hepática conocida, sin verificar antes su vía principal de eliminación y calcular el ajuste correspondiente.',
  no:{
    1:'La dosis estándar NO es automáticamente segura en estos pacientes; requiere verificación previa de la vía de eliminación y ajuste correspondiente.',
    2:'Reducir arbitrariamente sin calcular específicamente para ese fármaco no es la práctica correcta; cada fármaco requiere su propio cálculo.',
    3:'La vía de eliminación del fármaco es precisamente el dato central que determina si y cómo debe ajustarse la dosis en estos pacientes.'
  },
  trampa:'Asumir que la dosis estándar es segura sin verificar la vía de eliminación específica del fármaco en un paciente con compromiso de órgano conocido.',
  obj:'Explicar la verificación indispensable antes de prescribir la dosis estándar en un paciente con insuficiencia renal o hepática.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3-4.',
  tags:['dosis estándar','verificación previa','vía de eliminación']
},
{
  id:'U10-FT-Q46', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Farmacoterapia en el embarazo y la lactancia', sub:'Vulnerabilidad teratogénica según el trimestre',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el primer trimestre del embarazo es el período de mayor vulnerabilidad a los efectos teratogénicos de un fármaco?',
  ops:[
    'Porque es cuando se forman los órganos del embrión (organogénesis), el proceso más sensible a la interferencia de sustancias externas',
    'El riesgo teratogénico de un fármaco es exactamente el mismo durante todo el embarazo, sin ninguna variación por trimestre', 'El primer trimestre es, de hecho, el período de MENOR riesgo teratogénico de todo el embarazo', 'La teratogenicidad de un fármaco no tiene ninguna relación con el momento específico del embarazo en que se administra'],
  ok:0,
  clave:'Porque es cuando se forman los órganos del embrión (organogénesis), el proceso más sensible a la interferencia de sustancias externas.',
  exp:'El primer trimestre, cuando se forman los órganos del embrión (organogénesis, ya vista en Embriología), es el período de mayor vulnerabilidad a los efectos teratogénicos, mientras que el mismo fármaco puede tener un perfil de riesgo distinto en etapas más avanzadas del embarazo.',
  no:{
    1:'El riesgo teratogénico SÍ varía considerablemente según el trimestre, siendo el primero el de mayor vulnerabilidad por la organogénesis.',
    2:'Es precisamente lo contrario: el primer trimestre es el de MAYOR riesgo teratogénico, por la formación activa de órganos.',
    3:'La teratogenicidad tiene una relación directa con el momento específico del embarazo, siendo central para evaluar el riesgo real.'
  },
  trampa:'Asumir que el riesgo teratogénico es uniforme durante todo el embarazo, sin reconocer la vulnerabilidad particular del primer trimestre.',
  obj:'Explicar por qué el primer trimestre del embarazo es el período de mayor vulnerabilidad teratogénica.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 59.',
  tags:['teratogenicidad','primer trimestre','organogénesis']
},
{
  id:'U10-FT-Q47', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Farmacoterapia en el embarazo y la lactancia', sub:'Limitaciones de la evidencia sobre riesgo en el embarazo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué muchas categorías de riesgo en el embarazo se basan en evidencia indirecta o en estudios en animales, más que en ensayos clínicos controlados en humanos?',
  ops:[
    'Porque la evidencia en humanos durante el embarazo es, por razones éticas obvias, mucho más limitada que para la población general',
    'Existe abundante evidencia de ensayos clínicos controlados en mujeres embarazadas para prácticamente todos los fármacos disponibles', 'Las categorías de riesgo en el embarazo no tienen ninguna relación real con el tipo de evidencia científica disponible', 'Los estudios en animales nunca se usan como fuente de evidencia para evaluar el riesgo de un fármaco en el embarazo'],
  ok:0,
  clave:'Porque la evidencia en humanos durante el embarazo es, por razones éticas obvias, mucho más limitada que para la población general.',
  exp:'La evidencia en humanos durante el embarazo es, por razones éticas obvias, mucho más limitada que para la población general, así que muchas categorías se basan en evidencia indirecta o en estudios en animales, no en ensayos clínicos controlados en mujeres embarazadas.',
  no:{
    1:'Es precisamente lo contrario: la evidencia de ensayos clínicos controlados en embarazadas es escasa, por limitaciones éticas de investigación en este grupo.',
    2:'Las categorías de riesgo sí dependen directamente del tipo y calidad de evidencia disponible, que es limitada en este contexto específico.',
    3:'Los estudios en animales sí se usan con frecuencia como fuente de evidencia indirecta, dada la limitación de estudios directos en humanos.'
  },
  trampa:'Asumir que existe la misma cantidad de evidencia clínica directa en embarazadas que en la población general, sin considerar las limitaciones éticas de investigación.',
  obj:'Explicar por qué la evidencia sobre riesgo de fármacos en el embarazo suele ser indirecta o basada en estudios en animales.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 59.',
  tags:['limitación de evidencia','categoría de riesgo','ética en investigación']
},
{
  id:'U10-FT-Q48', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Farmacoterapia en el embarazo y la lactancia', sub:'Diferencia entre riesgo en embarazo y en lactancia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué muchos fármacos considerados de riesgo durante el embarazo son, en cambio, relativamente seguros durante la lactancia?',
  ops:[
    'Porque el mecanismo de exposición y la dosis que recibe el bebé a través de la leche materna son muy distintos al de la exposición fetal directa durante el embarazo',
    'El riesgo de un fármaco durante el embarazo y durante la lactancia es exactamente el mismo, sin ninguna diferencia real', 'Ningún fármaco puede pasar a la leche materna, por lo que la lactancia siempre es completamente segura para cualquier medicamento', 'La cantidad de fármaco que recibe el bebé por la leche materna siempre es igual a la que recibiría el feto durante el embarazo'],
  ok:0,
  clave:'El mecanismo de exposición y la dosis que recibe el bebé a través de la leche materna son muy distintos al de la exposición fetal directa durante el embarazo.',
  exp:'La seguridad de un fármaco durante la lactancia depende de un cálculo distinto al del embarazo: qué proporción del fármaco pasa a la leche materna, y qué efecto tendría esa cantidad, generalmente pequeña, sobre el lactante -muchos fármacos considerados de riesgo durante el embarazo son, en cambio, relativamente seguros durante la lactancia, por este mecanismo de exposición distinto.',
  no:{
    1:'El riesgo puede ser considerablemente distinto entre embarazo y lactancia, precisamente por los mecanismos de exposición diferentes.',
    2:'Muchos fármacos sí pasan, en cierta proporción, a la leche materna; no es correcto asumir que ninguno lo hace.',
    3:'La cantidad que recibe el bebé por la leche materna suele ser considerablemente MENOR que la exposición fetal directa durante el embarazo.'
  },
  trampa:'Asumir que el riesgo de un fármaco es idéntico durante el embarazo y la lactancia, sin reconocer los mecanismos de exposición distintos.',
  obj:'Explicar por qué el perfil de riesgo de un fármaco puede diferir considerablemente entre el embarazo y la lactancia.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 59.',
  tags:['riesgo en lactancia','riesgo en embarazo','mecanismo de exposición distinto']
},
{
  id:'U10-FT-Q49', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Farmacoterapia en el embarazo y la lactancia', sub:'Suspensión innecesaria de la lactancia',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una madre en período de lactancia recibe la indicación de suspenderla por precaución, ante un fármaco que en realidad tiene un perfil de seguridad aceptable durante esta etapa.',
  enunciado:'¿Qué consecuencia tiene esta suspensión innecesaria, más allá de la incomodidad para la madre?',
  ops:[
    'Priva al bebé de los beneficios ya conocidos de la lactancia materna sin un beneficio real de seguridad a cambio',
    'La suspensión de la lactancia por precaución excesiva nunca tiene ninguna consecuencia real relevante para el bebé', 'Suspender la lactancia siempre es la conducta más segura y recomendable, sin importar el perfil real del fármaco', 'La lactancia materna no aporta ningún beneficio real documentado que pueda perderse al suspenderla innecesariamente'],
  ok:0,
  clave:'Priva al bebé de los beneficios ya conocidos de la lactancia materna sin un beneficio real de seguridad a cambio.',
  exp:'Con frecuencia se suspende innecesariamente la lactancia por precaución excesiva ante un fármaco que en realidad tiene un perfil de seguridad aceptable durante esta etapa, privando al bebé de los beneficios ya conocidos de la lactancia materna sin un beneficio real de seguridad a cambio.',
  no:{
    1:'Esta suspensión innecesaria sí tiene una consecuencia real: priva al bebé de beneficios documentados de la lactancia sin justificación real.',
    2:'Es precisamente lo contrario: suspender sin justificación real puede ser una decisión desfavorable, no necesariamente la más segura.',
    3:'La lactancia materna sí tiene beneficios bien documentados, cuya pérdida innecesaria es precisamente el costo de esta suspensión injustificada.'
  },
  trampa:'Asumir que suspender la lactancia por precaución siempre es la conducta más segura, sin sopesar el costo real de perder sus beneficios documentados.',
  obj:'Explicar la consecuencia de suspender innecesariamente la lactancia por precaución excesiva ante un fármaco de perfil seguro.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 59.',
  tags:['suspensión innecesaria de lactancia','beneficios de la lactancia','precaución excesiva']
},
{
  id:'U10-FT-Q50', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Farmacoterapia en el embarazo y la lactancia', sub:'Cierre del bloque: dos personas a la vez',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo cierra este tema la idea central que atraviesa todo el bloque de Farmacoterapéutica?',
  ops:[
    'Retomando que la relación beneficio-riesgo nunca es genérica, depende siempre del paciente concreto -y en el embarazo y la lactancia, de dos personas a la vez',
    'Este tema no tiene ninguna relación real con la idea central desarrollada en los demás temas del bloque de Farmacoterapéutica', 'Este tema contradice por completo el principio de individualización desarrollado a lo largo de todo el bloque', 'La relación beneficio-riesgo en el embarazo y la lactancia es la única situación del bloque donde SÍ se aplica una fórmula fija'],
  ok:0,
  clave:'Retomando que la relación beneficio-riesgo nunca es genérica, depende siempre del paciente concreto -y en el embarazo y la lactancia, de dos personas a la vez.',
  exp:'Este tema cierra el bloque de Farmacoterapéutica retomando su idea central desde el inicio: la relación beneficio-riesgo nunca es genérica, depende siempre del paciente concreto -y en el embarazo y la lactancia, de dos personas a la vez, cada una con su propio perfil de riesgo específico.',
  no:{
    1:'Este tema tiene una relación directa y de cierre con la idea central de individualización desarrollada en todo el bloque.',
    2:'Este tema refuerza, no contradice, el principio de individualización, llevándolo a su versión más compleja (dos personas a la vez).',
    3:'Es precisamente lo contrario: el embarazo y la lactancia son el ejemplo MÁS complejo de individualización, no una excepción con fórmula fija.'
  },
  trampa:'No reconocer que el tema del embarazo y la lactancia es el cierre lógico y la aplicación más compleja del principio de individualización de todo el bloque.',
  obj:'Explicar cómo el tema de farmacoterapia en el embarazo y la lactancia cierra la idea central de individualización del bloque completo.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 59.',
  tags:['cierre del bloque','individualización','dos personas a la vez']
}

]);
