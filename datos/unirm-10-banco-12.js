/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE GERENCIA EN SALUD (2/2)
   Continua el prefijo U10-GS- desde Q31. Cubre indicadores de
   gestion hospitalaria, gestion financiera basica en salud y
   liderazgo/trabajo en equipo directivo (temas 5-7, ultimos de
   la materia).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U10-GS-Q31', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Indicadores de gestión hospitalaria', sub:'Por qué medir es indispensable para gestionar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la frase "lo que no se mide, no se puede gestionar" resume la lógica de los indicadores de gestión hospitalaria?',
  ops:[
    'Porque sin datos objetivos, las decisiones institucionales terminan basándose en percepciones o anécdotas, en vez de evidencia verificable',
    'Es posible gestionar una institución de salud de forma efectiva sin ningún tipo de medición objetiva de su desempeño', 'Los indicadores de gestión hospitalaria nunca tienen ninguna relación real con la calidad de las decisiones institucionales', 'Las percepciones y anécdotas siempre son una base tan sólida como los datos objetivos para gestionar una institución'],
  ok:0,
  clave:'Porque sin datos objetivos, las decisiones institucionales terminan basándose en percepciones o anécdotas, en vez de evidencia verificable.',
  exp:'Los indicadores de gestión hospitalaria retoman la lógica ya vista en Salud y Comunidad I sobre el uso de datos para la toma de decisiones: sin datos objetivos, las decisiones institucionales terminan basándose en percepciones o anécdotas, en vez de evidencia verificable.',
  no:{
    1:'Es precisamente lo contrario: sin medición objetiva, la gestión efectiva de una institución se vuelve mucho más difícil y riesgosa.',
    2:'Los indicadores de gestión sí tienen una relación directa con la calidad de las decisiones institucionales tomadas.',
    3:'Las percepciones y anécdotas son una base mucho menos confiable que los datos objetivos para gestionar una institución.'
  },
  trampa:'Asumir que la gestión institucional puede ser efectiva basándose solo en percepciones subjetivas, sin necesidad de indicadores objetivos.',
  obj:'Explicar por qué la medición mediante indicadores es indispensable para la gestión hospitalaria.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 10.',
  tags:['indicador de gestión hospitalaria','medición objetiva','datos para decisiones']
},
{
  id:'U10-GS-Q32', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Indicadores de gestión hospitalaria', sub:'Qué mide la ocupación de camas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué mide el indicador de ocupación de camas en un hospital?',
  ops:[
    'El porcentaje de camas disponibles que están efectivamente ocupadas en un periodo determinado', 'El número total de camas físicas instaladas en el hospital, sin importar si están ocupadas', 'El tiempo promedio que un paciente permanece hospitalizado desde su ingreso hasta su egreso', 'El costo económico total asociado a mantener cada cama hospitalaria disponible'],
  ok:0,
  clave:'El porcentaje de camas disponibles que están efectivamente ocupadas en un periodo determinado.',
  exp:'La ocupación de camas mide el porcentaje de camas disponibles que están efectivamente ocupadas en un periodo determinado -un indicador clave para entender si la capacidad instalada del hospital se está usando de forma eficiente.',
  no:{
    1:'Esta descripción corresponde al número total de camas instaladas, no al indicador de ocupación de camas.',
    2:'Esta descripción corresponde a la estancia media, un indicador distinto al de ocupación de camas.',
    3:'Esta descripción corresponde a un indicador de costos, no al indicador de ocupación de camas.'
  },
  trampa:'Confundir el indicador de ocupación de camas con otros indicadores relacionados como la estancia media o el número total de camas.',
  obj:'Definir qué mide específicamente el indicador de ocupación de camas.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 10.',
  tags:['ocupación de camas','indicador de capacidad instalada','uso eficiente de recursos']
},
{
  id:'U10-GS-Q33', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Indicadores de gestión hospitalaria', sub:'Qué mide la estancia media',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué mide el indicador de estancia media hospitalaria?',
  ops:[
    'El tiempo promedio que un paciente permanece hospitalizado desde su ingreso hasta su egreso', 'El porcentaje de camas disponibles que están efectivamente ocupadas en un periodo determinado', 'El número total de pacientes atendidos en el servicio de emergencia durante un mes', 'El costo económico total asociado a cada proceso hospitalario específico realizado'],
  ok:0,
  clave:'El tiempo promedio que un paciente permanece hospitalizado desde su ingreso hasta su egreso.',
  exp:'La estancia media mide el tiempo promedio que un paciente permanece hospitalizado desde su ingreso hasta su egreso -una estancia media prolongada sin justificación clínica puede señalar ineficiencias en los procesos de atención o de alta.',
  no:{
    1:'Esta descripción corresponde a la ocupación de camas, un indicador distinto al de estancia media.',
    2:'Esta descripción corresponde a un indicador de volumen de atención en emergencia, no a la estancia media.',
    3:'Esta descripción corresponde a un indicador de costo por proceso, no a la estancia media hospitalaria.'
  },
  trampa:'Confundir el indicador de estancia media con otros indicadores relacionados como la ocupación de camas o el volumen de atención.',
  obj:'Definir qué mide específicamente el indicador de estancia media hospitalaria.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 10.',
  tags:['estancia media','tiempo de hospitalización','indicador de eficiencia de procesos']
},
{
  id:'U10-GS-Q34', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Indicadores de gestión hospitalaria', sub:'Estancia media prolongada sin justificación clínica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hospital detecta que su estancia media hospitalaria ha aumentado de forma sostenida en los últimos meses, sin que exista un cambio en la complejidad clínica de los pacientes atendidos.',
  enunciado:'¿Qué interpretación es más apropiada frente a este hallazgo?',
  ops:[
    'Puede señalar ineficiencias en los procesos de atención o de alta que ameritan revisión institucional', 'Este hallazgo nunca tiene ninguna relación real con la eficiencia de los procesos institucionales de alta', 'Una estancia media prolongada siempre indica exclusivamente mayor complejidad clínica de los pacientes, sin otra explicación posible', 'Este dato no amerita ninguna acción institucional, ya que la estancia media nunca es relevante para la gestión hospitalaria'],
  ok:0,
  clave:'Puede señalar ineficiencias en los procesos de atención o de alta que ameritan revisión institucional.',
  exp:'Una estancia media prolongada sin justificación clínica -como en este caso, donde la complejidad de los pacientes no cambió- puede señalar ineficiencias en los procesos de atención o de alta, lo que amerita una revisión institucional de esos procesos.',
  no:{
    1:'Este hallazgo sí tiene una relación real con la eficiencia de los procesos institucionales, siendo una señal de alerta relevante.',
    2:'En este caso específico, la complejidad clínica NO cambió, por lo que otra explicación (ineficiencia de procesos) es más apropiada.',
    3:'Este dato sí amerita acción institucional, siendo la estancia media un indicador clave de eficiencia hospitalaria.'
  },
  trampa:'Atribuir automáticamente cualquier estancia media prolongada a mayor complejidad clínica, sin considerar ineficiencias de proceso como explicación alternativa.',
  obj:'Aplicar la interpretación apropiada ante una estancia media prolongada sin justificación clínica evidente.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 10.',
  tags:['estancia media prolongada','ineficiencia de procesos','revisión institucional']
},
{
  id:'U10-GS-Q35', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Indicadores de gestión hospitalaria', sub:'Indicadores de calidad y seguridad como parte del sistema',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de indicadores, ya vistos en el tema de gestión de calidad, también forman parte del sistema de indicadores de gestión hospitalaria?',
  ops:[
    'Tasas de eventos adversos prevenibles, tasas de infecciones asociadas a la atención en salud, y tasas de reingreso hospitalario no planificado', 'Los indicadores de gestión hospitalaria nunca incluyen ningún indicador relacionado con la calidad o seguridad del paciente', 'Solo los indicadores financieros son parte del sistema de indicadores de gestión hospitalaria, sin ninguna relación con la calidad clínica', 'Los indicadores de calidad y seguridad del paciente son completamente independientes del sistema de indicadores de gestión hospitalaria'],
  ok:0,
  clave:'Tasas de eventos adversos prevenibles, tasas de infecciones asociadas a la atención en salud, y tasas de reingreso hospitalario no planificado.',
  exp:'El sistema de indicadores de gestión hospitalaria también incluye indicadores de calidad y seguridad, retomando el tema anterior: tasas de eventos adversos prevenibles, tasas de infecciones asociadas a la atención en salud, y tasas de reingreso hospitalario no planificado.',
  no:{
    1:'Es precisamente lo contrario: el sistema de indicadores SÍ incluye indicadores de calidad y seguridad del paciente.',
    2:'El sistema de indicadores de gestión hospitalaria incluye indicadores financieros y también de calidad/seguridad clínica.',
    3:'Los indicadores de calidad y seguridad están integrados como parte del mismo sistema de indicadores de gestión hospitalaria.'
  },
  trampa:'Asumir que los indicadores de gestión hospitalaria son exclusivamente financieros u operativos, sin incluir indicadores de calidad y seguridad clínica.',
  obj:'Identificar los indicadores de calidad y seguridad que forman parte del sistema de indicadores de gestión hospitalaria.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 10.',
  tags:['tasa de eventos adversos','tasa de reingreso','indicadores de calidad integrados']
},
{
  id:'U10-GS-Q36', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Indicadores de gestión hospitalaria', sub:'Indicadores como herramienta de mejora continua',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los indicadores de gestión hospitalaria funcionan como herramienta de mejora continua, más allá de solo describir el estado actual?',
  ops:[
    'Permiten comparar el desempeño en el tiempo, identificar tendencias, y evaluar si las intervenciones institucionales realmente generan el efecto esperado',
    'Los indicadores de gestión hospitalaria únicamente describen el estado actual de la institución, sin ninguna utilidad para el seguimiento futuro', 'Comparar el desempeño institucional en el tiempo nunca aporta ninguna información útil para la mejora continua', 'Una institución no puede evaluar si sus intervenciones generan el efecto esperado usando indicadores de gestión'],
  ok:0,
  clave:'Permiten comparar el desempeño en el tiempo, identificar tendencias, y evaluar si las intervenciones institucionales realmente generan el efecto esperado.',
  exp:'Los indicadores de gestión hospitalaria no solo describen el estado actual: permiten comparar el desempeño en el tiempo, identificar tendencias, y evaluar si las intervenciones institucionales realmente generan el efecto esperado, cerrando el ciclo gerencial de planificar-controlar.',
  no:{
    1:'Es precisamente lo contrario: los indicadores sí permiten un seguimiento útil más allá de la descripción del estado actual.',
    2:'Comparar el desempeño institucional en el tiempo sí aporta información valiosa y central para la mejora continua.',
    3:'Los indicadores de gestión sí permiten evaluar si las intervenciones institucionales generan el efecto esperado en el tiempo.'
  },
  trampa:'Reducir los indicadores de gestión a una simple fotografía del estado actual, sin reconocer su utilidad para el seguimiento y la mejora continua.',
  obj:'Explicar por qué los indicadores de gestión hospitalaria funcionan como herramienta de mejora continua.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 10.',
  tags:['mejora continua','seguimiento de tendencias','cierre del ciclo gerencial']
},
{
  id:'U10-GS-Q37', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Indicadores de gestión hospitalaria', sub:'Riesgo de interpretar un indicador de forma aislada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué interpretar un solo indicador de gestión hospitalaria de forma aislada puede llevar a conclusiones equivocadas?',
  ops:[
    'Porque un cambio en un indicador puede tener múltiples causas posibles, y una interpretación completa suele requerir considerar varios indicadores en conjunto',
    'Interpretar un solo indicador de forma aislada siempre lleva exactamente a la misma conclusión correcta, sin ningún riesgo real', 'Los indicadores de gestión hospitalaria nunca deben considerarse en conjunto con otros indicadores relacionados', 'Un cambio en un indicador de gestión hospitalaria siempre tiene una única causa posible, fácilmente identificable'],
  ok:0,
  clave:'Porque un cambio en un indicador puede tener múltiples causas posibles, y una interpretación completa suele requerir considerar varios indicadores en conjunto.',
  exp:'Interpretar un solo indicador de forma aislada puede llevar a conclusiones equivocadas, porque un cambio en un indicador puede tener múltiples causas posibles -por ejemplo, una estancia media que baja podría reflejar mayor eficiencia o, en cambio, altas prematuras que después generan reingresos.',
  no:{
    1:'Es precisamente lo contrario: interpretar un indicador aislado sí conlleva un riesgo real de conclusiones equivocadas.',
    2:'Es recomendable considerar varios indicadores en conjunto, precisamente para evitar interpretaciones equivocadas aisladas.',
    3:'Un mismo cambio en un indicador puede tener múltiples causas posibles, no una única causa fácilmente identificable.'
  },
  trampa:'Interpretar un indicador de gestión hospitalaria de forma aislada, sin considerar otros indicadores relacionados que podrían cambiar la conclusión.',
  obj:'Explicar el riesgo de interpretar un indicador de gestión hospitalaria de forma aislada, sin contexto de otros indicadores.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 10.',
  tags:['interpretación conjunta de indicadores','riesgo de conclusión aislada','múltiples causas posibles']
},
{
  id:'U10-GS-Q38', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión financiera básica en salud', sub:'Por qué un médico clínico se beneficia de nociones financieras básicas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un médico que ejerce clínicamente igual se beneficia de entender nociones financieras básicas de una institución de salud?',
  ops:[
    'Porque le permite comprender por qué ciertas decisiones institucionales sobre recursos disponibles responden a restricciones presupuestarias reales, no a arbitrariedad',
    'Un médico que ejerce clínicamente nunca se beneficia realmente de entender ninguna noción financiera básica institucional', 'Las restricciones presupuestarias de una institución de salud nunca tienen ninguna relación real con las decisiones clínicas disponibles', 'Entender nociones financieras básicas es relevante únicamente para quienes ocupan cargos administrativos formales'],
  ok:0,
  clave:'Porque le permite comprender por qué ciertas decisiones institucionales sobre recursos disponibles responden a restricciones presupuestarias reales, no a arbitrariedad.',
  exp:'La gestión financiera básica en salud no busca formar administradores financieros, sino dar herramientas conceptuales para entender por qué ciertas decisiones institucionales sobre recursos disponibles responden a restricciones presupuestarias reales, retomando la lógica ya vista en el tema de principios de administración.',
  no:{
    1:'Un médico clínico sí se beneficia de esta comprensión, aunque no vaya a gestionar el presupuesto directamente.',
    2:'Las restricciones presupuestarias sí tienen una relación real y directa con los recursos clínicos disponibles en la práctica diaria.',
    3:'Esta comprensión es relevante para cualquier médico, no exclusivamente para quienes ocupan cargos administrativos formales.'
  },
  trampa:'Asumir que las nociones financieras básicas solo son relevantes para quienes gestionan formalmente el presupuesto institucional.',
  obj:'Explicar por qué un médico clínico se beneficia de entender nociones financieras básicas institucionales.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 12.',
  tags:['gestión financiera básica en salud','beneficio para el médico clínico','restricciones presupuestarias']
},
{
  id:'U10-GS-Q39', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión financiera básica en salud', sub:'Qué es el presupuesto en salud',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el presupuesto en una institución de salud?',
  ops:[
    'Un plan financiero que estima los ingresos y gastos esperados en un periodo determinado, y que refleja en cifras las prioridades ya definidas en la planificación estratégica', 'Un documento que únicamente registra los gastos ya realizados por la institución, sin ninguna proyección hacia el futuro', 'Un registro exclusivo de los ingresos históricos de la institución, sin ninguna relación con los gastos futuros esperados', 'Un instrumento legal que no tiene ninguna relación real con las prioridades definidas en la planificación estratégica institucional'],
  ok:0,
  clave:'Un plan financiero que estima los ingresos y gastos esperados en un periodo determinado, y que refleja en cifras las prioridades ya definidas en la planificación estratégica.',
  exp:'El presupuesto es un plan financiero que estima los ingresos y gastos esperados en un periodo determinado -no es un documento puramente contable, sino que refleja en cifras concretas las prioridades ya definidas en la planificación estratégica de la institución.',
  no:{
    1:'El presupuesto es un plan hacia el FUTURO, no solo un registro de gastos ya realizados en el pasado.',
    2:'El presupuesto incluye tanto ingresos como gastos proyectados, no exclusivamente un registro histórico de ingresos.',
    3:'El presupuesto sí tiene una relación directa con las prioridades definidas en la planificación estratégica institucional.'
  },
  trampa:'Reducir el presupuesto a un documento puramente contable retrospectivo, sin reconocer su función como reflejo de las prioridades estratégicas.',
  obj:'Definir qué es el presupuesto en una institución de salud y su relación con la planificación estratégica.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 12.',
  tags:['presupuesto en salud','plan financiero','reflejo de prioridades estratégicas']
},
{
  id:'U10-GS-Q40', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión financiera básica en salud', sub:'Qué mide el costo por proceso hospitalario',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa el costo por proceso hospitalario, y por qué es relevante conocerlo?',
  ops:[
    'Representa el gasto total asociado a un proceso específico de atención, y permite identificar oportunidades de eficiencia sin comprometer la calidad',
    'El costo por proceso hospitalario nunca tiene ninguna relación real con las oportunidades de mejora en la eficiencia institucional', 'Conocer el costo por proceso hospitalario siempre implica automáticamente reducir la calidad de la atención brindada', 'El costo por proceso hospitalario únicamente es relevante para el departamento de contabilidad, sin ninguna relación clínica'],
  ok:0,
  clave:'Representa el gasto total asociado a un proceso específico de atención, y permite identificar oportunidades de eficiencia sin comprometer la calidad.',
  exp:'El costo por proceso hospitalario representa el gasto total asociado a un proceso específico de atención -por ejemplo, una cirugía de determinado tipo- y permite identificar oportunidades de eficiencia sin comprometer la calidad de la atención brindada al paciente.',
  no:{
    1:'El costo por proceso hospitalario sí tiene una relación directa con la identificación de oportunidades de mejora en eficiencia.',
    2:'Es precisamente lo contrario: conocer este costo busca identificar eficiencias SIN comprometer la calidad de la atención.',
    3:'Este indicador tiene relevancia más allá de contabilidad, conectándose con decisiones clínicas y de gestión de calidad.'
  },
  trampa:'Asumir que buscar eficiencia en el costo por proceso hospitalario implica necesariamente sacrificar la calidad de la atención.',
  obj:'Explicar qué representa el costo por proceso hospitalario y su relevancia para la eficiencia institucional.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 12.',
  tags:['costo por proceso hospitalario','eficiencia sin comprometer calidad','gasto asociado a atención']
},
{
  id:'U10-GS-Q41', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión financiera básica en salud', sub:'Decisiones clínicas con implicación financiera institucional',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico debe elegir, entre dos opciones terapéuticas con eficacia clínica equivalente y bien documentada, cuál prescribir de forma rutinaria en su institución.',
  enunciado:'¿Qué consideración adicional, propia de la gestión financiera básica, es razonable que el médico tenga presente ante esta decisión?',
  ops:[
    'El costo relativo de cada opción para la institución, siempre que la eficacia clínica sea verdaderamente equivalente entre ambas alternativas',
    'La consideración del costo institucional nunca es apropiada en ninguna decisión clínica tomada por un médico', 'El médico debe siempre elegir la opción de mayor costo posible, sin importar la eficacia clínica relativa entre ambas', 'Las nociones de gestión financiera básica nunca tienen ninguna aplicación real en decisiones clínicas de prescripción rutinaria'],
  ok:0,
  clave:'El costo relativo de cada opción para la institución, siempre que la eficacia clínica sea verdaderamente equivalente entre ambas alternativas.',
  exp:'Cuando la eficacia clínica es verdaderamente equivalente entre dos alternativas, considerar el costo relativo de cada opción para la institución es una aplicación razonable de la gestión financiera básica, sin que esto comprometa en ningún momento la calidad de la atención al paciente individual.',
  no:{
    1:'Es precisamente lo contrario: sí es apropiado considerar el costo institucional cuando la eficacia clínica es equivalente.',
    2:'No existe ninguna razón para preferir sistemáticamente la opción de mayor costo cuando la eficacia clínica es equivalente.',
    3:'Estas nociones sí tienen una aplicación práctica razonable en decisiones clínicas rutinarias con alternativas equivalentes.'
  },
  trampa:'Asumir que cualquier consideración de costo institucional en una decisión clínica compromete automáticamente la calidad de la atención al paciente.',
  obj:'Aplicar una consideración financiera básica razonable ante una decisión clínica con alternativas de eficacia equivalente.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 12.',
  tags:['decisión clínica con costo equivalente','consideración financiera razonable','eficacia clínica equivalente']
},
{
  id:'U10-GS-Q42', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión financiera básica en salud', sub:'Sostenibilidad financiera como condición de continuidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la sostenibilidad financiera de una institución de salud es una condición necesaria para que pueda seguir cumpliendo su misión en el tiempo?',
  ops:[
    'Porque una institución que no logra equilibrar sus ingresos y gastos de forma sostenida eventualmente pierde la capacidad de brindar la atención que su misión declara',
    'La sostenibilidad financiera de una institución de salud nunca tiene ninguna relación real con su capacidad de cumplir su misión', 'Una institución de salud puede operar indefinidamente sin ningún equilibrio real entre sus ingresos y gastos', 'La misión institucional declarada nunca depende, en ningún grado, de la situación financiera real de la institución'],
  ok:0,
  clave:'Porque una institución que no logra equilibrar sus ingresos y gastos de forma sostenida eventualmente pierde la capacidad de brindar la atención que su misión declara.',
  exp:'La sostenibilidad financiera es una condición necesaria para que la institución pueda seguir cumpliendo su misión en el tiempo, retomando la conexión ya vista entre planificación estratégica y presupuesto: una institución sin equilibrio financiero sostenido eventualmente pierde su capacidad operativa.',
  no:{
    1:'La sostenibilidad financiera sí tiene una relación directa y crítica con la capacidad institucional de cumplir su misión.',
    2:'Es precisamente lo contrario: una institución sin equilibrio financiero sostenido eventualmente pierde capacidad operativa real.',
    3:'La misión institucional declarada sí depende, en un grado importante, de contar con una situación financiera sostenible real.'
  },
  trampa:'Separar la misión institucional declarada de la situación financiera real, sin reconocer que ambas están directamente interconectadas.',
  obj:'Explicar por qué la sostenibilidad financiera es condición necesaria para el cumplimiento sostenido de la misión institucional.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 12.',
  tags:['sostenibilidad financiera','condición para cumplir la misión','equilibrio de ingresos y gastos']
},
{
  id:'U10-GS-Q43', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión financiera básica en salud', sub:'Conexión con la planificación estratégica ya vista',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se conecta el presupuesto con la planificación estratégica institucional ya vista previamente en este bloque?',
  ops:[
    'El presupuesto traduce en cifras concretas las prioridades ya definidas en la planificación estratégica, cerrando el ciclo entre lo estratégico y lo operativo', 'El presupuesto y la planificación estratégica son procesos completamente independientes, sin ninguna relación real entre ambos', 'La planificación estratégica siempre se define después de elaborar el presupuesto, y nunca antes de este proceso', 'El presupuesto institucional nunca refleja de ninguna forma real las prioridades definidas en la planificación estratégica'],
  ok:0,
  clave:'El presupuesto traduce en cifras concretas las prioridades ya definidas en la planificación estratégica, cerrando el ciclo entre lo estratégico y lo operativo.',
  exp:'El presupuesto no es un documento puramente contable: traduce en cifras concretas las prioridades ya definidas en la planificación estratégica, cerrando el ciclo entre lo estratégico (hacia dónde se dirige la institución) y lo operativo (cómo se financia ese camino).',
  no:{
    1:'Son procesos claramente conectados, no independientes: el presupuesto traduce las prioridades estratégicas en cifras concretas.',
    2:'La planificación estratégica típicamente precede al presupuesto, orientando qué prioridades financiar, no al revés.',
    3:'El presupuesto sí refleja de forma real y directa las prioridades definidas previamente en la planificación estratégica.'
  },
  trampa:'Tratar el presupuesto y la planificación estratégica como procesos aislados, sin reconocer que el primero traduce al segundo en cifras concretas.',
  obj:'Explicar la conexión entre el presupuesto y la planificación estratégica institucional.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 12.',
  tags:['conexión con planificación estratégica','de lo estratégico a lo operativo','presupuesto como traducción de prioridades']
},
{
  id:'U10-GS-Q44', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión financiera básica en salud', sub:'Riesgo de decisiones financieras desconectadas de la calidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué riesgo institucional conlleva tomar decisiones financieras sin considerar su impacto sobre la calidad y seguridad de la atención?',
  ops:[
    'Puede generar ahorros de corto plazo que, a mediano plazo, aumenten los eventos adversos prevenibles y terminen costando más a la institución',
    'Las decisiones financieras nunca tienen ninguna relación real con la calidad o seguridad de la atención brindada al paciente', 'Tomar decisiones financieras sin considerar la calidad de la atención nunca conlleva ningún riesgo institucional real', 'Cualquier ahorro financiero de corto plazo siempre es beneficioso para la institución, sin ningún riesgo asociado a mediano plazo'],
  ok:0,
  clave:'Puede generar ahorros de corto plazo que, a mediano plazo, aumenten los eventos adversos prevenibles y terminen costando más a la institución.',
  exp:'Tomar decisiones financieras sin considerar su impacto sobre la calidad y seguridad, retomando el tema de gestión de calidad, puede generar ahorros de corto plazo que, a mediano plazo, aumenten los eventos adversos prevenibles y terminen costando más a la institución, tanto en términos financieros como reputacionales.',
  no:{
    1:'Las decisiones financieras sí tienen una relación real y documentada con la calidad y seguridad de la atención brindada.',
    2:'Es precisamente lo contrario: sí existe un riesgo institucional real al desconectar las decisiones financieras de la calidad.',
    3:'Un ahorro de corto plazo puede generar mayores costos a mediano plazo si compromete la calidad y aumenta eventos adversos.'
  },
  trampa:'Asumir que cualquier ahorro financiero de corto plazo es siempre beneficioso, sin considerar su posible impacto negativo sobre la calidad a mediano plazo.',
  obj:'Explicar el riesgo institucional de tomar decisiones financieras desconectadas de la calidad y seguridad de la atención.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 12.',
  tags:['riesgo de decisión financiera aislada','ahorro de corto plazo vs. costo a mediano plazo','conexión con calidad y seguridad']
},
{
  id:'U10-GS-Q45', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Liderazgo y trabajo en equipo directivo', sub:'Por qué el liderazgo en salud no depende de un cargo formal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el liderazgo en una institución de salud no depende exclusivamente de ocupar un cargo jerárquico formal?',
  ops:[
    'Porque el liderazgo efectivo puede ejercerse desde cualquier posición, influyendo positivamente en el equipo y en los resultados de la atención sin necesidad de autoridad formal',
    'El liderazgo en una institución de salud siempre depende exclusivamente de ocupar el cargo jerárquico más alto disponible', 'Solo quienes ocupan cargos jerárquicos formales pueden ejercer algún tipo de influencia positiva sobre el equipo de trabajo', 'No existe ninguna diferencia real entre ocupar un cargo jerárquico formal y ejercer liderazgo efectivo dentro de un equipo'],
  ok:0,
  clave:'Porque el liderazgo efectivo puede ejercerse desde cualquier posición, influyendo positivamente en el equipo y en los resultados de la atención sin necesidad de autoridad formal.',
  exp:'El liderazgo en salud no depende exclusivamente de un cargo jerárquico formal, porque el liderazgo efectivo puede ejercerse desde cualquier posición del equipo, influyendo positivamente en la dinámica de trabajo y en los resultados de la atención, incluso sin autoridad formal.',
  no:{
    1:'Es precisamente lo contrario: el liderazgo puede ejercerse desde cualquier posición, no exclusivamente desde el cargo más alto.',
    2:'Cualquier miembro del equipo, sin importar su cargo formal, puede ejercer algún grado de influencia positiva real.',
    3:'Sí existe una diferencia real: un cargo jerárquico formal otorga autoridad, mientras que el liderazgo efectivo es una influencia distinta.'
  },
  trampa:'Confundir el liderazgo efectivo con la autoridad formal de un cargo jerárquico, sin reconocer que ambos son conceptos distintos.',
  obj:'Explicar por qué el liderazgo efectivo en salud no depende exclusivamente de un cargo jerárquico formal.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 14.',
  tags:['liderazgo en salud','independencia del cargo formal','influencia sin autoridad formal']
},
{
  id:'U10-GS-Q46', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Liderazgo y trabajo en equipo directivo', sub:'Toma de decisiones gerenciales bajo incertidumbre',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la toma de decisiones gerenciales en salud frecuentemente ocurre bajo condiciones de incertidumbre e información incompleta?',
  ops:[
    'Porque un directivo institucional rara vez cuenta con toda la información perfecta antes de decidir, a diferencia del ideal teórico de una decisión completamente informada',
    'Un directivo institucional siempre cuenta con toda la información perfecta y completa antes de tomar cualquier decisión gerencial', 'Las decisiones gerenciales en salud nunca ocurren bajo ninguna condición real de incertidumbre o información incompleta', 'La incertidumbre en la toma de decisiones gerenciales es exclusiva del sector salud, sin presentarse en ningún otro contexto organizativo'],
  ok:0,
  clave:'Porque un directivo institucional rara vez cuenta con toda la información perfecta antes de decidir, a diferencia del ideal teórico de una decisión completamente informada.',
  exp:'La toma de decisiones gerenciales frecuentemente ocurre bajo condiciones de incertidumbre e información incompleta, porque un directivo institucional rara vez cuenta con toda la información perfecta antes de decidir, a diferencia del ideal teórico de una decisión completamente informada.',
  no:{
    1:'Es precisamente lo contrario: un directivo institucional rara vez cuenta con información completa y perfecta al decidir.',
    2:'Las decisiones gerenciales en salud sí ocurren frecuentemente bajo condiciones reales de incertidumbre e información incompleta.',
    3:'La incertidumbre en la toma de decisiones gerenciales es un fenómeno general, presente también en otros contextos organizativos.'
  },
  trampa:'Asumir que un directivo institucional siempre cuenta con información completa y perfecta antes de tomar decisiones gerenciales.',
  obj:'Explicar por qué la toma de decisiones gerenciales en salud ocurre frecuentemente bajo incertidumbre e información incompleta.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 14.',
  tags:['toma de decisiones bajo incertidumbre','información incompleta','realidad del directivo institucional']
},
{
  id:'U10-GS-Q47', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Liderazgo y trabajo en equipo directivo', sub:'Trabajo en equipo directivo como aplicación de comunicación estructurada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué concepto ya visto en Relación Médico-Paciente se conecta directamente el trabajo en equipo directivo eficaz?',
  ops:[
    'Las herramientas de comunicación estructurada, que también permiten que un equipo directivo tome decisiones coordinadas y evite fallas de coordinación', 'El trabajo en equipo directivo no tiene ninguna relación real con ningún concepto ya visto sobre comunicación estructurada', 'La escala de Glasgow ya vista en Neurología, sin ninguna relación real con el trabajo en equipo directivo institucional', 'El consentimiento informado ya visto en Relación Médico-Paciente, sin ninguna relación real con el trabajo en equipo directivo'],
  ok:0,
  clave:'Las herramientas de comunicación estructurada, que también permiten que un equipo directivo tome decisiones coordinadas y evite fallas de coordinación.',
  exp:'El trabajo en equipo directivo eficaz retoma las mismas herramientas de comunicación estructurada ya vistas en Relación Médico-Paciente y en gestión de calidad, que permiten que un equipo -clínico o directivo- tome decisiones coordinadas y evite fallas de coordinación evitables.',
  no:{
    1:'Sí existe una conexión conceptual directa con las herramientas de comunicación estructurada ya vistas previamente.',
    2:'La escala de Glasgow es una herramienta de evaluación neurológica distinta, sin relación conceptual directa con el liderazgo directivo.',
    3:'El consentimiento informado es un concepto distinto de relación médico-paciente, sin relación conceptual directa con el trabajo directivo.'
  },
  trampa:'No reconocer la conexión correcta con las herramientas de comunicación estructurada, confundiéndola con otros conceptos ya vistos sin relación directa.',
  obj:'Identificar la conexión entre el trabajo en equipo directivo eficaz y las herramientas de comunicación estructurada ya vistas.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 14.',
  tags:['trabajo en equipo directivo','comunicación estructurada aplicada','coordinación de decisiones']
},
{
  id:'U10-GS-Q48', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Liderazgo y trabajo en equipo directivo', sub:'Cierre del bloque: del recurso individual al sistema completo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué recorrido conceptual completo cierra el tema de liderazgo y trabajo en equipo directivo, como último tema del bloque de Gerencia en Salud?',
  ops:[
    'El recorrido desde los principios generales de administración, pasando por la planificación, la calidad, el recurso humano, los indicadores y las finanzas, hasta la capacidad humana de dirigir todo ese sistema de forma coordinada',
    'Este tema no tiene ninguna relación real con los demás temas ya vistos previamente en el bloque de Gerencia en Salud', 'El bloque de Gerencia en Salud no sigue ningún recorrido conceptual coherente entre sus distintos temas', 'El liderazgo y trabajo en equipo directivo es un tema completamente aislado, sin ninguna conexión con la administración de sistemas de salud'],
  ok:0,
  clave:'El recorrido desde los principios generales de administración, pasando por la planificación, la calidad, el recurso humano, los indicadores y las finanzas, hasta la capacidad humana de dirigir todo ese sistema de forma coordinada.',
  exp:'Como último tema del bloque, liderazgo y trabajo en equipo directivo cierra el recorrido conceptual completo: desde los principios generales de administración, pasando por la planificación, la calidad, el recurso humano, los indicadores y las finanzas, hasta la capacidad humana de dirigir todo ese sistema de forma coordinada.',
  no:{
    1:'Este tema sí tiene una relación conceptual directa de cierre con todos los demás temas ya vistos en el bloque.',
    2:'El bloque de Gerencia en Salud sí sigue un recorrido conceptual coherente, del principio general hasta el liderazgo humano final.',
    3:'Este tema es precisamente el cierre conceptual de todo el bloque, no un tema aislado sin conexión con lo demás.'
  },
  trampa:'No reconocer el rol de cierre conceptual que cumple este último tema respecto al recorrido completo del bloque de Gerencia en Salud.',
  obj:'Explicar el rol de cierre conceptual que cumple el tema de liderazgo dentro del recorrido completo del bloque.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 14.',
  tags:['cierre del bloque gerencial','recorrido conceptual completo','liderazgo como síntesis']
},
{
  id:'U10-GS-Q49', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Liderazgo y trabajo en equipo directivo', sub:'Diferencia entre gestionar y liderar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué matiz distingue a "liderar" de simplemente "gestionar" dentro de una institución de salud?',
  ops:[
    'Gestionar se enfoca en administrar recursos y procesos existentes de forma eficiente; liderar implica además inspirar y movilizar al equipo hacia un propósito compartido',
    'Gestionar y liderar son exactamente el mismo concepto, sin ninguna diferencia real que amerite distinguirlos en una institución de salud', 'Liderar se limita exclusivamente a administrar recursos financieros, sin ninguna relación con inspirar o movilizar al equipo', 'Gestionar siempre implica inspirar al equipo hacia un propósito compartido, mientras que liderar se limita a procesos administrativos'],
  ok:0,
  clave:'Gestionar se enfoca en administrar recursos y procesos existentes de forma eficiente; liderar implica además inspirar y movilizar al equipo hacia un propósito compartido.',
  exp:'Gestionar se enfoca en administrar recursos y procesos existentes de forma eficiente -las funciones gerenciales clásicas ya vistas-, mientras que liderar implica además inspirar y movilizar al equipo hacia un propósito compartido, un matiz humano que complementa la función puramente administrativa.',
  no:{
    1:'Son conceptos relacionados pero distintos, con un matiz humano adicional en el liderazgo respecto a la gestión pura.',
    2:'Liderar va más allá de lo financiero; incluye la dimensión de inspirar y movilizar al equipo hacia un propósito compartido.',
    3:'Está invertido: GESTIONAR se enfoca en procesos administrativos, y LIDERAR añade la dimensión de inspirar al equipo, no al revés.'
  },
  trampa:'Confundir "gestionar" y "liderar" como sinónimos exactos, sin reconocer el matiz humano e inspiracional adicional que aporta el liderazgo.',
  obj:'Distinguir el matiz conceptual entre gestionar y liderar dentro de una institución de salud.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 14.',
  tags:['gestionar vs. liderar','matiz humano del liderazgo','propósito compartido del equipo']
},
{
  id:'U10-GS-Q50', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Liderazgo y trabajo en equipo directivo', sub:'Aplicación del liderazgo ante un conflicto de equipo directivo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Dos miembros de un equipo directivo hospitalario sostienen posiciones opuestas y firmes sobre cómo distribuir un presupuesto limitado entre dos servicios igualmente prioritarios según la planificación estratégica vigente.',
  enunciado:'¿Qué conducta de liderazgo es más apropiada para manejar esta situación?',
  ops:[
    'Facilitar una discusión estructurada que permita evaluar ambas posiciones a la luz de los objetivos estratégicos y los datos disponibles, buscando una decisión coordinada',
    'Imponer de forma unilateral la posición de mayor jerarquía formal dentro del equipo, sin ninguna discusión adicional sobre el fondo del conflicto', 'Evitar completamente abordar el conflicto entre ambos miembros, dejando que la decisión se postergue indefinidamente sin resolución', 'Elegir la opción que resulte más fácil de justificar en el corto plazo, sin ninguna consideración real de los objetivos estratégicos'],
  ok:0,
  clave:'Facilitar una discusión estructurada que permita evaluar ambas posiciones a la luz de los objetivos estratégicos y los datos disponibles, buscando una decisión coordinada.',
  exp:'Ante un conflicto de posiciones firmes dentro de un equipo directivo, facilitar una discusión estructurada que evalúe ambas posiciones a la luz de los objetivos estratégicos y los datos disponibles -retomando la planificación estratégica y los indicadores ya vistos- es la conducta de liderazgo más apropiada para lograr una decisión coordinada.',
  no:{
    1:'Imponer unilateralmente sin discusión contradice el principio de trabajo en equipo coordinado propio del liderazgo efectivo.',
    2:'Evitar el conflicto y postergar indefinidamente la decisión no resuelve el problema y puede afectar negativamente a ambos servicios.',
    3:'Elegir la opción más fácil sin considerar los objetivos estratégicos contradice la lógica de decisión basada en evidencia ya vista.'
  },
  trampa:'Imponer una decisión unilateral basada solo en jerarquía formal, sin facilitar una discusión estructurada basada en objetivos y datos.',
  obj:'Aplicar una conducta de liderazgo apropiada ante un conflicto de equipo directivo sobre distribución de recursos limitados.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 14.',
  tags:['conflicto de equipo directivo','discusión estructurada','decisión coordinada basada en datos']
}

]);
