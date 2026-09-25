/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE SALUD Y COMUNIDAD I (2/2)
   Continua unirm-09-banco-18.js. Amplia Salud y Comunidad I de 1
   a 50 preguntas. Prefijo U9-SYC-. Esta parte cubre epidemiologia
   comunitaria aplicada y sistema de salud dominicano (temas 3-4).
   Con este archivo se completa el CUATRIMESTRE 9 al 100% y TODO
   el pensum de UNIRMIA cubierto por esta serie (7mo, 8vo y 9no).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U9-SYC-Q27', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Qué describe el perfil epidemiológico local',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué describe el perfil epidemiológico local de una comunidad específica?',
  ops:[
    'Qué enfermedades son más frecuentes, qué grupos de edad están más afectados, y qué factores de riesgo predominan en ese contexto particular',
    'El perfil epidemiológico local se limita exclusivamente a contar el número total de habitantes de esa comunidad', 'El perfil epidemiológico local describe únicamente el presupuesto asignado al sistema de salud de esa comunidad', 'El perfil epidemiológico local no tiene ninguna relación con las medidas de frecuencia ya vistas en Epidemiología'],
  ok:0,
  clave:'Qué enfermedades son más frecuentes, qué grupos de edad están más afectados, y qué factores de riesgo predominan en ese contexto particular.',
  exp:'El perfil epidemiológico local describe, para una comunidad específica, qué enfermedades son más frecuentes, qué grupos de edad están más afectados, y qué factores de riesgo predominan en ese contexto particular -retomando directamente las medidas de frecuencia (prevalencia, incidencia) ya vistas en Epidemiología, pero aplicadas a la escala de esa comunidad concreta.',
  no:{
    1:'El perfil epidemiológico local va mucho más allá del conteo de habitantes; describe patrones de enfermedad, edad y factores de riesgo.',
    2:'El perfil epidemiológico local no se centra en el presupuesto; describe patrones de salud y enfermedad de la comunidad.',
    3:'El perfil epidemiológico local retoma directamente las medidas de frecuencia (prevalencia, incidencia) ya vistas en Epidemiología, aplicadas a escala local.'
  },
  trampa:'Confundir el perfil epidemiológico local con datos demográficos o presupuestarios simples, sin reconocer su base en medidas de frecuencia epidemiológicas.',
  obj:'Definir qué describe el perfil epidemiológico local de una comunidad.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['perfil epidemiológico local','medidas de frecuencia','escala comunitaria']
},
{
  id:'U9-SYC-Q28', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Ventaja de la escala local sobre la nacional',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja práctica tiene calcular un perfil epidemiológico a escala local, en vez de usar solo el promedio nacional?',
  ops:[
    'Permite dirigir recursos e intervenciones hacia los problemas reales de esa comunidad en particular, que pueden ser muy distintos del promedio nacional',
    'El perfil epidemiológico nacional siempre es más preciso y útil que cualquier perfil calculado a escala local', 'No existe ninguna diferencia práctica real entre usar un perfil epidemiológico nacional o uno calculado a escala local', 'Un perfil epidemiológico local nunca puede diferir significativamente del promedio nacional agregado'],
  ok:0,
  clave:'Permite dirigir recursos e intervenciones hacia los problemas reales de esa comunidad en particular, que pueden ser muy distintos del promedio nacional.',
  exp:'Esta escala local tiene una ventaja práctica concreta: un perfil epidemiológico calculado para toda una nación puede ocultar variaciones importantes entre comunidades específicas, mientras que el perfil local permite dirigir recursos e intervenciones hacia los problemas reales de esa comunidad en particular, que pueden ser muy distintos del promedio nacional.',
  no:{
    1:'El perfil nacional puede ocultar variaciones importantes entre comunidades; el perfil local aporta información más precisa para esa comunidad específica.',
    2:'Sí existe una diferencia práctica real: el perfil local permite intervenciones más dirigidas y efectivas para esa comunidad concreta.',
    3:'Un perfil epidemiológico local SÍ puede diferir significativamente del promedio nacional, precisamente la razón de su utilidad práctica.'
  },
  trampa:'Asumir que el promedio nacional siempre representa adecuadamente la situación de cualquier comunidad específica, sin reconocer variaciones locales importantes.',
  obj:'Explicar la ventaja práctica de calcular un perfil epidemiológico a escala local frente al promedio nacional.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['escala local vs. nacional','variación comunitaria','dirección de recursos']
},
{
  id:'U9-SYC-Q29', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Función de un indicador de salud comunitario',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Para qué sirve un indicador de salud comunitario, como la cobertura de vacunación local?',
  ops:[
    'Permite medir, de forma concreta y periódica, si las intervenciones de salud en esa comunidad están teniendo el efecto esperado',
    'Un indicador de salud comunitario no tiene ninguna utilidad práctica real para evaluar programas de salud', 'Los indicadores de salud comunitarios solo sirven para cumplir requisitos administrativos, sin ningún valor de evaluación real', 'Un indicador de salud comunitario se mide una sola vez, sin ninguna necesidad de repetir la medición periódicamente'],
  ok:0,
  clave:'Permite medir, de forma concreta y periódica, si las intervenciones de salud en esa comunidad están teniendo el efecto esperado.',
  exp:'Un indicador de salud comunitario (como la cobertura de vacunación local, o la proporción de embarazos con control prenatal completo) permite medir, de forma concreta y periódica, si las intervenciones de salud en esa comunidad están teniendo el efecto esperado, sirviendo como retroalimentación objetiva para ajustar los programas en marcha.',
  no:{
    1:'Los indicadores de salud comunitarios sí tienen una utilidad práctica central: evaluar objetivamente el efecto real de las intervenciones aplicadas.',
    2:'Los indicadores tienen un valor de evaluación real, más allá de cumplir un requisito administrativo; permiten ajustar programas según su desempeño.',
    3:'La medición periódica (no única) es precisamente lo que permite evaluar tendencias y ajustar los programas con el tiempo.'
  },
  trampa:'Reducir el propósito de un indicador de salud comunitario a un requisito administrativo, sin reconocer su función real de evaluación y retroalimentación.',
  obj:'Explicar la función de un indicador de salud comunitario en la evaluación de intervenciones.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['indicador de salud','evaluación de intervenciones','medición periódica']
},
{
  id:'U9-SYC-Q30', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Actor adicional de la vigilancia comunitaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué actor adicional clave incorpora la vigilancia comunitaria, respecto a la vigilancia epidemiológica ya vista en Epidemiología?',
  ops:[
    'Los propios promotores comunitarios y trabajadores de salud local, que por su cercanía detectan a menudo anomalías antes que las estadísticas oficiales agregadas',
    'La vigilancia comunitaria no incorpora ningún actor adicional distinto de los ya presentes en la vigilancia epidemiológica nacional', 'El actor adicional clave de la vigilancia comunitaria es exclusivamente el gobierno central, sin ninguna participación local', 'La vigilancia comunitaria depende únicamente de reportes automatizados de laboratorios, sin ninguna participación humana local'],
  ok:0,
  clave:'Los propios promotores comunitarios y trabajadores de salud local, que por su cercanía detectan a menudo anomalías antes que las estadísticas oficiales agregadas.',
  exp:'La vigilancia comunitaria aplica la misma lógica de la vigilancia epidemiológica ya vista en Epidemiología, pero con un actor adicional clave: los propios promotores comunitarios y trabajadores de salud local, que por su cercanía y conocimiento del terreno, con frecuencia detectan un aumento inusual de casos antes de que ese aumento sea evidente en las estadísticas oficiales agregadas a nivel nacional.',
  no:{
    1:'La vigilancia comunitaria sí incorpora un actor adicional clave y distintivo: los promotores comunitarios y trabajadores de salud local.',
    2:'El actor adicional clave es local (promotores comunitarios), no exclusivamente el gobierno central sin participación de la comunidad.',
    3:'La vigilancia comunitaria depende precisamente de la participación humana local (promotores, trabajadores de salud), no solo de reportes automatizados.'
  },
  trampa:'No reconocer el rol clave de los promotores comunitarios y trabajadores de salud local como actor adicional de la vigilancia comunitaria.',
  obj:'Identificar el actor adicional clave que incorpora la vigilancia comunitaria respecto a la vigilancia epidemiológica nacional.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['vigilancia comunitaria','promotores comunitarios','detección temprana de brotes']
},
{
  id:'U9-SYC-Q31', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Detección temprana antes que las estadísticas nacionales',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un trabajador de salud local nota un aumento inusual de casos de una enfermedad respiratoria en su comunidad, varias semanas antes de que ese aumento aparezca reflejado en las estadísticas oficiales nacionales.',
  enunciado:'¿Por qué puede ocurrir esta diferencia de tiempo entre la detección local y las estadísticas nacionales?',
  ops:[
    'Porque las estadísticas oficiales agregadas a nivel nacional tardan más en consolidarse y reportarse que la observación directa de alguien cercano al terreno',
    'Las estadísticas nacionales siempre detectan cualquier aumento de casos antes que cualquier trabajador de salud local en el terreno', 'No existe ninguna diferencia real de tiempo entre la detección local y la aparición de datos en las estadísticas nacionales', 'Esta diferencia de tiempo nunca tiene ninguna relevancia práctica para el control de un posible brote'],
  ok:0,
  clave:'Las estadísticas oficiales agregadas a nivel nacional tardan más en consolidarse y reportarse que la observación directa de alguien cercano al terreno.',
  exp:'Los propios promotores comunitarios y trabajadores de salud local, por su cercanía y conocimiento del terreno, con frecuencia detectan un aumento inusual de casos (un posible brote) antes de que ese aumento sea evidente en las estadísticas oficiales agregadas a nivel nacional, que tardan más en consolidarse y reportarse -esta detección temprana puede marcar una diferencia real en el control de un brote.',
  no:{
    1:'Es precisamente lo contrario: la detección LOCAL suele ocurrir ANTES que las estadísticas nacionales agregadas, no al revés.',
    2:'Sí existe una diferencia real de tiempo, documentada y relevante, entre la detección local temprana y la consolidación de estadísticas nacionales.',
    3:'Esta diferencia de tiempo sí tiene relevancia práctica central: cuanto antes se detecte, más rápido se puede intervenir para controlar el brote.'
  },
  trampa:'Asumir que las estadísticas nacionales siempre detectan cambios antes que la observación local directa, invirtiendo la relación temporal real.',
  obj:'Explicar por qué la detección local de un aumento de casos suele ocurrir antes que su reflejo en las estadísticas nacionales.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['detección temprana local','estadísticas nacionales','control de brote']
},
{
  id:'U9-SYC-Q32', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Conexión con Epidemiología de 8vo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se relaciona este tema con el bloque completo de Epidemiología ya visto en 8vo cuatrimestre?',
  ops:[
    'Aplica los mismos conceptos -incidencia, prevalencia, vigilancia, brote- a una escala más pequeña y con actores distintos, pero con la misma lógica de fondo',
    'Este tema no tiene ninguna relación conceptual real con el bloque de Epidemiología ya visto en 8vo', 'Este tema introduce conceptos epidemiológicos completamente nuevos, sin ninguna conexión con lo ya visto en Epidemiología', 'Los conceptos de Epidemiología de 8vo dejan de ser válidos al aplicarse a la escala comunitaria de este tema'],
  ok:0,
  clave:'Aplica los mismos conceptos -incidencia, prevalencia, vigilancia, brote- a una escala más pequeña y con actores distintos, pero con la misma lógica de fondo.',
  exp:'Este tema conecta de forma directa el bloque completo de Epidemiología de 8vo con la práctica comunitaria: los mismos conceptos -incidencia, prevalencia, vigilancia, brote- se aplican aquí a una escala más pequeña y con actores distintos, pero con la misma lógica de fondo, cerrando el círculo entre la teoría epidemiológica general y su aplicación práctica a nivel local.',
  no:{
    1:'Existe una conexión conceptual directa y explícita, aplicando los mismos conceptos de Epidemiología a una escala más pequeña.',
    2:'Este tema no introduce conceptos completamente nuevos; retoma y aplica los ya vistos en Epidemiología de 8vo a una escala distinta.',
    3:'Los conceptos de Epidemiología siguen siendo plenamente válidos a escala comunitaria; solo cambia la escala de aplicación, no la lógica de fondo.'
  },
  trampa:'No reconocer la conexión explícita entre este tema y el bloque de Epidemiología de 8vo, asumiendo que son cuerpos de conocimiento independientes.',
  obj:'Explicar la conexión entre epidemiología comunitaria aplicada y el bloque de Epidemiología ya visto en 8vo.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['conexión con Epidemiología','escala comunitaria','conceptos compartidos']
},
{
  id:'U9-SYC-Q33', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Retroalimentación para ajustar programas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurriría con una intervención de salud comunitaria si no se midieran indicadores de forma sistemática?',
  ops:[
    'Funcionaría "a ciegas", sin poder distinguir si realmente está generando el impacto esperado o si necesita ajustarse',
    'La intervención funcionaría exactamente igual de bien, sin ninguna necesidad real de medir indicadores de forma sistemática', 'Medir indicadores de forma sistemática nunca aporta ninguna información útil para ajustar un programa en marcha', 'Sin medición de indicadores, la intervención automáticamente se detiene por completo, sin poder continuar en absoluto'],
  ok:0,
  clave:'Funcionaría "a ciegas", sin poder distinguir si realmente está generando el impacto esperado o si necesita ajustarse.',
  exp:'Sin indicadores medidos de forma sistemática, cualquier intervención de salud comunitaria funcionaría "a ciegas", sin poder distinguir si realmente está generando el impacto esperado o si necesita ajustarse -la medición periódica es lo que convierte una intervención en un programa evaluable y mejorable con el tiempo.',
  no:{
    1:'Sin medición sistemática, no habría forma de saber si la intervención realmente funciona; la medición es esencial para evaluar su efectividad.',
    2:'Medir indicadores de forma sistemática sí aporta información útil y necesaria para evaluar y ajustar un programa en marcha.',
    3:'La falta de medición no detiene automáticamente la intervención; simplemente impide evaluar objetivamente si está funcionando o no.'
  },
  trampa:'Subestimar la importancia de la medición sistemática de indicadores para evaluar si una intervención de salud comunitaria realmente está funcionando.',
  obj:'Explicar la consecuencia de no medir indicadores de forma sistemática en una intervención de salud comunitaria.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['medición sistemática','evaluación de programas','retroalimentación objetiva']
},
{
  id:'U9-SYC-Q34', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Ejemplo de indicador ya visto en Medicina Preventiva',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de los siguientes es un ejemplo de indicador de salud comunitario que retoma directamente un concepto ya visto en Medicina Preventiva?',
  ops:[
    'La proporción de embarazos con control prenatal completo', 'El número total de camas disponibles en un hospital de tercer nivel', 'El presupuesto anual destinado a investigación farmacéutica en el país', 'El número de publicaciones científicas producidas por el sistema de salud'],
  ok:0,
  clave:'La proporción de embarazos con control prenatal completo, un indicador que retoma directamente el control prenatal ya visto en Medicina Preventiva.',
  exp:'Un indicador de salud comunitario, como la proporción de embarazos con control prenatal completo, ya visto en Medicina Preventiva, permite medir de forma concreta y periódica si las intervenciones de salud en esa comunidad están teniendo el efecto esperado -conectando directamente con el concepto de programas nacionales de salud preventiva estudiado antes.',
  no:{
    1:'El número de camas hospitalarias es un indicador de infraestructura, no uno que retome directamente un concepto de Medicina Preventiva como el control prenatal.',
    2:'El presupuesto de investigación farmacéutica no es un indicador de salud comunitaria relacionado con Medicina Preventiva.',
    3:'El número de publicaciones científicas no es un indicador de salud comunitaria vinculado a los conceptos de Medicina Preventiva.'
  },
  trampa:'Confundir un indicador de salud comunitaria relevante con otros datos del sistema de salud que no retoman directamente conceptos ya vistos en Medicina Preventiva.',
  obj:'Identificar un ejemplo de indicador de salud comunitario que retoma un concepto ya visto en Medicina Preventiva.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['control prenatal','indicador de salud','conexión con Medicina Preventiva']
},
{
  id:'U9-SYC-Q35', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Aplicación a escala pequeña, no un concepto nuevo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la idea central que este tema aplica a la escala de una sola comunidad?',
  ops:[
    'Todo lo ya visto en el bloque completo de Epidemiología de 8vo: los mismos conceptos de medidas de frecuencia y vigilancia, ajustados a un tamaño de población más pequeño',
    'Este tema introduce un cuerpo de conocimiento epidemiológico completamente distinto e independiente del ya estudiado en 8vo cuatrimestre', 'La epidemiología comunitaria aplicada no tiene ninguna relación con las medidas de frecuencia ya estudiadas previamente', 'Este tema se centra exclusivamente en aspectos administrativos de la comunidad, sin ninguna relación con la epidemiología'],
  ok:0,
  clave:'Todo lo ya visto en el bloque completo de Epidemiología de 8vo: los mismos conceptos de medidas de frecuencia y vigilancia, ajustados a un tamaño de población más pequeño.',
  exp:'Este tema aplica, a la escala de una sola comunidad, todo lo ya visto en el bloque completo de Epidemiología de 8vo: los mismos conceptos de medidas de frecuencia y vigilancia, pero ajustados a un tamaño de población mucho más pequeño y cercano -no es un cuerpo de conocimiento nuevo, sino una aplicación práctica de lo ya estudiado.',
  no:{
    1:'No introduce un cuerpo de conocimiento independiente; aplica los mismos conceptos de Epidemiología ya vistos, a una escala distinta.',
    2:'La epidemiología comunitaria aplicada retoma directamente las medidas de frecuencia (prevalencia, incidencia) ya vistas en Epidemiología.',
    3:'Este tema se centra en conceptos epidemiológicos aplicados a la comunidad, no en aspectos puramente administrativos sin relación epidemiológica.'
  },
  trampa:'Asumir que este tema introduce conceptos epidemiológicos completamente nuevos, en vez de reconocer que aplica los ya vistos a una escala más pequeña.',
  obj:'Explicar la idea central de aplicar los conceptos de Epidemiología de 8vo a la escala de una comunidad específica.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['aplicación a escala pequeña','medidas de frecuencia','vigilancia epidemiológica']
},
{
  id:'U9-SYC-Q36', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Grupos de edad más afectados en el perfil local',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'El perfil epidemiológico local de una comunidad específica revela que los adultos mayores son el grupo de edad más afectado por enfermedades respiratorias crónicas en esa zona, un patrón distinto al promedio nacional.',
  enunciado:'¿Qué debería hacer un equipo de salud comunitario con esta información específica del perfil local?',
  ops:[
    'Dirigir recursos e intervenciones específicas hacia los adultos mayores de esa comunidad, en vez de replicar automáticamente un programa diseñado para el promedio nacional',
    'Ignorar completamente esta información local y aplicar exactamente el mismo programa diseñado para el promedio nacional, sin ningún ajuste', 'Esta información del perfil epidemiológico local no tiene ninguna utilidad real para diseñar intervenciones específicas', 'El equipo de salud comunitario no debería considerar ningún dato específico de la comunidad al diseñar sus intervenciones'],
  ok:0,
  clave:'Dirigir recursos e intervenciones específicas hacia los adultos mayores de esa comunidad, en vez de replicar automáticamente un programa diseñado para el promedio nacional.',
  exp:'El perfil epidemiológico local permite dirigir recursos e intervenciones hacia los problemas reales de esa comunidad en particular, que pueden ser muy distintos del promedio nacional -en este caso, el hallazgo específico sobre adultos mayores y enfermedades respiratorias crónicas debería guiar directamente el diseño de una intervención dirigida a ese grupo, en vez de aplicar un programa genérico nacional que no refleje esa realidad local.',
  no:{
    1:'Ignorar la información local específica desperdicia precisamente la ventaja del perfil epidemiológico local: dirigir recursos según la realidad de esa comunidad.',
    2:'Esta información sí tiene una utilidad práctica central: guiar el diseño de intervenciones dirigidas a los problemas reales de esa comunidad específica.',
    3:'El equipo de salud comunitario debería, precisamente, considerar los datos específicos del perfil epidemiológico local al diseñar sus intervenciones.'
  },
  trampa:'Aplicar automáticamente un programa nacional genérico sin ajustar la intervención según el perfil epidemiológico local específico de esa comunidad.',
  obj:'Aplicar el concepto de perfil epidemiológico local para dirigir intervenciones específicas según la realidad de una comunidad.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['perfil epidemiológico local','intervención dirigida','adultos mayores']
},
{
  id:'U9-SYC-Q37', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Utilidad de detectar un brote temprano',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la detección temprana a nivel comunitario puede marcar una diferencia real en el control de un brote?',
  ops:[
    'Cuanto antes se detecte el aumento inusual de casos, más rápido se puede intervenir, antes de que el problema se propague más allá de esa comunidad inicial',
    'La detección temprana de un brote nunca tiene ninguna influencia real sobre su propagación posterior', 'Detectar un brote temprano o tardíamente siempre tiene exactamente el mismo resultado final en su control', 'La propagación de un brote no depende en absoluto de qué tan rápido se detecte inicialmente'],
  ok:0,
  clave:'Cuanto antes se detecte el aumento inusual de casos, más rápido se puede intervenir, antes de que el problema se propague más allá de esa comunidad inicial.',
  exp:'Esta detección temprana a nivel comunitario puede marcar una diferencia real en el control de un brote: cuanto antes se detecte el aumento inusual de casos, más rápido se puede intervenir, antes de que el problema se propague más allá de esa comunidad inicial -un principio general de control de brotes que conecta directamente con lo ya visto en Epidemiología.',
  no:{
    1:'La detección temprana sí tiene una influencia real y documentada sobre la capacidad de controlar la propagación de un brote.',
    2:'El momento de la detección sí afecta el resultado del control del brote; detectar temprano permite intervenir antes de mayor propagación.',
    3:'La propagación de un brote sí depende, en parte, de qué tan rápido se detecte y se intervenga sobre él inicialmente.'
  },
  trampa:'Subestimar el impacto real de la rapidez de detección sobre la capacidad de controlar la propagación de un brote a tiempo.',
  obj:'Explicar por qué la detección temprana a nivel comunitario mejora el control de un brote.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['detección temprana de brote','propagación','control epidemiológico']
},
{
  id:'U9-SYC-Q38', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Epidemiología comunitaria aplicada', sub:'Diferencia entre perfil epidemiológico e indicador',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencia el perfil epidemiológico local de un indicador de salud comunitario?',
  ops:[
    'El perfil epidemiológico describe el panorama general de enfermedades, edades y factores de riesgo de una comunidad; el indicador mide algo específico y medible para evaluar si una intervención está funcionando',
    'Ambos términos son exactamente sinónimos, sin ninguna diferencia conceptual real entre ellos', 'El perfil epidemiológico solo se usa a nivel nacional, mientras que los indicadores solo se usan a nivel comunitario', 'Un indicador de salud comunitario siempre describe el panorama general completo de una comunidad, igual que el perfil epidemiológico'],
  ok:0,
  clave:'El perfil epidemiológico describe el panorama general de enfermedades, edades y factores de riesgo; el indicador mide algo específico y medible para evaluar una intervención.',
  exp:'El perfil epidemiológico local describe, de forma amplia, qué enfermedades son más frecuentes, qué grupos de edad están más afectados y qué factores de riesgo predominan; un indicador de salud comunitario, en cambio, mide algo específico y medible (como la cobertura de vacunación) de forma periódica, sirviendo para evaluar si una intervención concreta está teniendo el efecto esperado -son conceptos complementarios, pero con un alcance distinto.',
  no:{
    1:'Son conceptos relacionados pero distintos: uno describe un panorama amplio, el otro mide algo específico y periódico para evaluación.',
    2:'Ambos conceptos se aplican a escala comunitaria en este tema; la diferencia no está en el nivel (nacional vs. comunitario) sino en su alcance y propósito.',
    3:'Un indicador específico no describe el panorama general completo; se centra en medir un aspecto concreto y medible de la salud comunitaria.'
  },
  trampa:'Confundir el perfil epidemiológico (panorama general) con un indicador de salud (medición específica), tratándolos como sinónimos.',
  obj:'Distinguir el perfil epidemiológico local de un indicador de salud comunitario.',
  ref:'Gordis, Epidemiología, cap. 16.',
  tags:['perfil epidemiológico','indicador de salud','diferencia conceptual']
},
{
  id:'U9-SYC-Q39', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Los tres niveles de atención',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los tres niveles de atención que organiza el sistema nacional de salud?',
  ops:[
    'Primer nivel (atención primaria), segundo nivel (especialidades básicas y hospitalización general) y tercer nivel (centros de alta complejidad)',
    'Nivel público, nivel privado y nivel mixto, según quién financia la atención recibida', 'Nivel urbano, nivel rural y nivel fronterizo, según la ubicación geográfica del centro de salud', 'Nivel preventivo, nivel curativo y nivel paliativo, según el tipo de intervención realizada'],
  ok:0,
  clave:'Primer nivel (atención primaria), segundo nivel (especialidades básicas y hospitalización general) y tercer nivel (centros de alta complejidad).',
  exp:'El sistema nacional de salud organiza la atención en niveles de atención: un primer nivel (atención primaria, la puerta de entrada habitual, resolviendo la mayoría de los problemas de salud comunes), un segundo nivel (con especialidades básicas y capacidad de hospitalización general), y un tercer nivel (centros de alta complejidad, para casos que requieren tecnología o subespecialidades no disponibles en los niveles anteriores).',
  no:{
    1:'La organización por niveles de atención no se basa en quién financia (público/privado/mixto), sino en la complejidad de la atención ofrecida.',
    2:'Los niveles de atención no se definen por ubicación geográfica (urbano/rural/fronterizo), sino por la complejidad de los servicios disponibles.',
    3:'Los niveles de atención no se organizan según tipo de intervención (preventivo/curativo/paliativo), sino según la complejidad de los servicios del centro.'
  },
  trampa:'Confundir la organización real por niveles de atención (complejidad de los servicios) con otras clasificaciones posibles (financiamiento, ubicación, tipo de intervención).',
  obj:'Identificar los tres niveles de atención que organiza el sistema nacional de salud.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['niveles de atención','primer nivel','sistema nacional de salud']
},
{
  id:'U9-SYC-Q40', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Sistema de referencia y contrarreferencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el sistema de salud funciona mejor cuando los pacientes se mueven entre niveles a través de un sistema de referencia y contrarreferencia ordenado?',
  ops:[
    'Porque acudir directamente a un nivel de alta complejidad para problemas que el primer nivel podría resolver satura recursos escasos y suele significar una atención menos eficiente',
    'El sistema de referencia y contrarreferencia no tiene ninguna relación real con la eficiencia del sistema de salud', 'Acudir directamente a un nivel de alta complejidad siempre es más eficiente que pasar primero por el primer nivel de atención', 'El orden en que un paciente se mueve entre los niveles de atención nunca afecta el funcionamiento general del sistema de salud'],
  ok:0,
  clave:'Acudir directamente a un nivel de alta complejidad para problemas que el primer nivel podría resolver satura recursos escasos y suele significar una atención menos eficiente.',
  exp:'El sistema funciona mejor cuando los pacientes se mueven entre niveles a través de un sistema de referencia y contrarreferencia ordenado, en vez de acudir directamente a un nivel de alta complejidad para problemas que el primer nivel podría resolver -acudir directamente a un tercer nivel para un problema simple no solo satura recursos escasos, sino que suele significar una atención más costosa y menos eficiente para ese mismo problema.',
  no:{
    1:'El sistema de referencia y contrarreferencia tiene una relación directa y central con la eficiencia general del sistema de salud.',
    2:'Es precisamente lo contrario: acudir directamente a un nivel de alta complejidad para un problema simple es MENOS eficiente, no más.',
    3:'El orden de movimiento entre niveles sí afecta el funcionamiento general del sistema, siendo precisamente el punto central de esta pregunta.'
  },
  trampa:'Asumir que acudir directamente al nivel de mayor complejidad siempre es preferible, sin reconocer el costo de saturación de recursos que esto genera.',
  obj:'Explicar por qué el sistema de referencia y contrarreferencia ordenado mejora el funcionamiento del sistema de salud.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['referencia y contrarreferencia','saturación de recursos','eficiencia del sistema']
},
{
  id:'U9-SYC-Q41', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Función del seguro familiar de salud',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple el seguro familiar de salud dentro del sistema de salud?',
  ops:[
    'Es el mecanismo de financiamiento y aseguramiento que organiza cómo se paga la atención dentro del sistema, buscando dar cobertura amplia a la población',
    'El seguro familiar de salud se limita exclusivamente a definir la infraestructura física de los hospitales del sistema', 'El seguro familiar de salud no tiene ninguna relación real con el financiamiento de la atención médica', 'El seguro familiar de salud determina exclusivamente qué medicamentos existen en el mercado nacional'],
  ok:0,
  clave:'Es el mecanismo de financiamiento y aseguramiento que organiza cómo se paga la atención dentro del sistema, buscando dar cobertura amplia a la población.',
  exp:'El seguro familiar de salud es el mecanismo de financiamiento y aseguramiento que organiza cómo se paga la atención dentro del sistema, buscando dar cobertura amplia a la población, con distintos regímenes según la situación laboral y económica de cada persona (contributivo para quienes tienen empleo formal, subsidiado para quienes no tienen capacidad de pago).',
  no:{
    1:'El seguro familiar de salud se centra en el financiamiento y aseguramiento de la atención, no en la infraestructura física de los hospitales.',
    2:'El seguro familiar de salud tiene una relación directa y central con el financiamiento de la atención médica dentro del sistema.',
    3:'El seguro familiar de salud se relaciona con el financiamiento de la atención, no con qué medicamentos existen en el mercado nacional.'
  },
  trampa:'Confundir la función del seguro familiar de salud (financiamiento y aseguramiento) con otros aspectos del sistema (infraestructura, disponibilidad de medicamentos).',
  obj:'Explicar la función central del seguro familiar de salud dentro del sistema de salud.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['seguro familiar de salud','financiamiento','aseguramiento']
},
{
  id:'U9-SYC-Q42', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Régimen contributivo vs. subsidiado',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el régimen contributivo y el régimen subsidiado del seguro familiar de salud?',
  ops:[
    'El contributivo aplica a quienes tienen empleo formal, y el subsidiado a quienes no tienen capacidad de pago',
    'Ambos regímenes son exactamente idénticos, sin ninguna diferencia real en cómo se financian', 'El régimen contributivo aplica exclusivamente a personas sin empleo formal, y el subsidiado a quienes sí tienen empleo formal', 'La diferencia entre ambos regímenes se basa únicamente en la edad de la persona, sin relación con su situación laboral'],
  ok:0,
  clave:'El contributivo aplica a quienes tienen empleo formal, y el subsidiado a quienes no tienen capacidad de pago.',
  exp:'El seguro familiar de salud tiene distintos regímenes según la situación laboral y económica de cada persona: contributivo para quienes tienen empleo formal (que contribuyen directamente al financiamiento), subsidiado para quienes no tienen capacidad de pago, entre otras modalidades según el diseño específico del sistema -un diseño que busca equilibrar sostenibilidad financiera con acceso equitativo.',
  no:{
    1:'Ambos regímenes financian de forma distinta según la situación laboral de la persona; no son idénticos en su mecanismo de financiamiento.',
    2:'Es al revés: el régimen CONTRIBUTIVO aplica a quienes SÍ tienen empleo formal, y el SUBSIDIADO a quienes no tienen capacidad de pago.',
    3:'La diferencia entre ambos regímenes se basa en la situación laboral y económica de la persona, no en su edad.'
  },
  trampa:'Invertir a quién aplica cada régimen (contributivo vs. subsidiado), o asumir que la diferencia se basa en un criterio distinto a la situación laboral.',
  obj:'Distinguir el régimen contributivo del subsidiado dentro del seguro familiar de salud.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['régimen contributivo','régimen subsidiado','seguro familiar de salud']
},
{
  id:'U9-SYC-Q43', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Equilibrio entre sostenibilidad y acceso',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué dos objetivos busca equilibrar el diseño de regímenes distintos según la capacidad de pago dentro del seguro familiar de salud?',
  ops:[
    'Mantener la sostenibilidad financiera del sistema (que necesita ingresos de quienes pueden contribuir) y garantizar el acceso a quienes, sin subsidio, quedarían excluidos',
    'El diseño de regímenes distintos no busca equilibrar ningún objetivo real; es una decisión completamente arbitraria del sistema', 'El único objetivo del diseño de regímenes distintos es maximizar las ganancias del sistema de salud, sin considerar el acceso', 'El diseño de regímenes distintos busca exclusivamente reducir el número total de personas cubiertas por el sistema'],
  ok:0,
  clave:'Mantener la sostenibilidad financiera del sistema (que necesita ingresos de quienes pueden contribuir) y garantizar el acceso a quienes, sin subsidio, quedarían excluidos.',
  exp:'Este diseño de regímenes distintos según la capacidad de pago busca equilibrar dos objetivos que, de otra forma, entrarían en tensión: mantener la sostenibilidad financiera del sistema (que necesita ingresos de quienes pueden contribuir) y garantizar el acceso a quienes, sin ese mecanismo subsidiado, quedarían completamente excluidos de la atención formal.',
  no:{
    1:'El diseño de regímenes distintos responde a una lógica deliberada de equilibrio entre sostenibilidad financiera y acceso equitativo, no es arbitrario.',
    2:'El objetivo no es maximizar ganancias; busca equilibrar sostenibilidad financiera con acceso equitativo a la atención de salud.',
    3:'El objetivo es garantizar cobertura amplia, no reducir el número de personas cubiertas; el régimen subsidiado busca precisamente incluir a más personas.'
  },
  trampa:'No reconocer la lógica deliberada de equilibrio entre sostenibilidad financiera y acceso equitativo detrás del diseño de regímenes distintos.',
  obj:'Explicar los dos objetivos que busca equilibrar el diseño de regímenes distintos del seguro familiar de salud.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['sostenibilidad financiera','acceso equitativo','equilibrio de objetivos']
},
{
  id:'U9-SYC-Q44', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'La atención primaria como puerta de entrada habitual',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se describe al primer nivel de atención como "la puerta de entrada habitual" del sistema de salud?',
  ops:[
    'Porque es el nivel donde se resuelven la mayoría de los problemas de salud comunes, siendo el punto de contacto inicial esperado antes de recurrir a niveles más complejos',
    'La descripción de "puerta de entrada" no tiene ninguna relación real con la función práctica del primer nivel de atención', 'El primer nivel de atención nunca resuelve ningún problema de salud por sí solo, siempre requiere referencia inmediata', 'La "puerta de entrada" se refiere exclusivamente a la entrada física de un hospital de tercer nivel'],
  ok:0,
  clave:'Es el nivel donde se resuelven la mayoría de los problemas de salud comunes, siendo el punto de contacto inicial esperado antes de recurrir a niveles más complejos.',
  exp:'El primer nivel de atención (atención primaria) se describe como la puerta de entrada habitual, resolviendo la mayoría de los problemas de salud comunes -es el punto de contacto inicial esperado del sistema, desde donde se refiere a niveles más complejos solo cuando es realmente necesario, siguiendo el sistema de referencia y contrarreferencia.',
  no:{
    1:'La descripción de "puerta de entrada" tiene una relación directa con la función práctica real del primer nivel dentro del sistema de salud.',
    2:'El primer nivel sí resuelve la mayoría de los problemas de salud comunes por sí solo, sin necesidad de referencia inmediata en la mayoría de los casos.',
    3:'La "puerta de entrada" se refiere al primer nivel de atención primaria, no a la entrada física de un hospital de tercer nivel.'
  },
  trampa:'Confundir la función del primer nivel como "puerta de entrada" con un simple punto físico de acceso a un hospital de alta complejidad.',
  obj:'Explicar por qué el primer nivel de atención se describe como la puerta de entrada habitual del sistema de salud.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['puerta de entrada','primer nivel','punto de contacto inicial']
},
{
  id:'U9-SYC-Q45', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Por qué este tema cierra todo el cuatrimestre',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué este tema, más allá de cerrar el bloque de Salud y Comunidad I, cierra también todo el cuatrimestre 9 de una forma particular?',
  ops:[
    'Porque conecta explícitamente el conocimiento clínico y comunitario ya acumulado con el marco institucional concreto en el que ese conocimiento se aplicará en la práctica profesional real',
    'Este tema no tiene ninguna función particular de cierre; es un tema aislado sin ninguna relación con los demás bloques del cuatrimestre', 'Este tema introduce contenido completamente nuevo y desconectado de todo lo estudiado antes en el cuatrimestre 9', 'El cierre de este tema se debe únicamente a que aparece último en el orden alfabético de las materias del cuatrimestre'],
  ok:0,
  clave:'Conecta explícitamente el conocimiento clínico y comunitario ya acumulado con el marco institucional concreto en el que ese conocimiento se aplicará en la práctica profesional real.',
  exp:'Este último tema, precisamente por cerrar tanto el bloque de Salud y Comunidad I como el cuatrimestre 9 completo, cumple una función distinta a la de los demás: no introduce un concepto nuevo aislado, sino que conecta explícitamente el conocimiento clínico y comunitario ya acumulado con el marco institucional concreto en el que ese conocimiento se aplicará en la práctica profesional real.',
  no:{
    1:'Este tema sí tiene una función particular de cierre, conectando explícitamente todo el conocimiento acumulado con el marco institucional real.',
    2:'Este tema no introduce contenido desconectado; conecta explícitamente lo ya estudiado con el marco institucional concreto de la práctica real.',
    3:'El orden de este tema responde a su función lógica de cierre del pensum, retomando lo estudiado, no a un criterio alfabético arbitrario.'
  },
  trampa:'No reconocer la función particular de cierre de este tema, que conecta el conocimiento acumulado con el marco institucional real de la práctica profesional.',
  obj:'Explicar la función particular de cierre que cumple el tema de sistema de salud dominicano respecto a todo el cuatrimestre 9.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['función de cierre','marco institucional','práctica profesional real']
},
{
  id:'U9-SYC-Q46', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Cuándo acudir directamente a un nivel superior',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con un problema de salud simple, que el primer nivel de atención podría resolver sin dificultad, decide acudir directamente a un centro de tercer nivel de alta complejidad.',
  enunciado:'¿Qué consecuencia tiene esta decisión para el sistema de salud en su conjunto, según la lógica de los niveles de atención?',
  ops:[
    'Satura recursos escasos de alta complejidad y suele significar una atención más costosa e ineficiente para un problema que el primer nivel podría haber resuelto',
    'Esta decisión nunca tiene ninguna consecuencia negativa real para el funcionamiento del sistema de salud en su conjunto', 'Acudir directamente a un nivel de alta complejidad siempre mejora la eficiencia general del sistema de salud', 'El nivel de atención elegido por el paciente nunca afecta el costo real de resolver su problema de salud'],
  ok:0,
  clave:'Satura recursos escasos de alta complejidad y suele significar una atención más costosa e ineficiente para un problema que el primer nivel podría haber resuelto.',
  exp:'Acudir directamente a un nivel de alta complejidad para un problema simple que el primer nivel podría resolver no solo satura recursos escasos, sino que suele significar una atención más costosa y menos eficiente para ese mismo problema -por eso el sistema funciona mejor cuando los pacientes se mueven entre niveles a través de un sistema de referencia y contrarreferencia ordenado.',
  no:{
    1:'Esta decisión sí tiene una consecuencia negativa real y documentada: saturación de recursos escasos y mayor costo para el sistema.',
    2:'Es precisamente lo contrario: acudir directamente a un nivel de alta complejidad para un problema simple REDUCE la eficiencia general del sistema.',
    3:'El nivel de atención elegido sí afecta el costo real de resolver el problema; un nivel de mayor complejidad suele ser más costoso para problemas simples.'
  },
  trampa:'Subestimar el impacto negativo real, en términos de saturación de recursos y costo, de acudir directamente a un nivel de alta complejidad para un problema simple.',
  obj:'Explicar la consecuencia de acudir directamente a un nivel de alta complejidad para un problema resoluble en el primer nivel.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['saturación de recursos','elección de nivel','ineficiencia del sistema']
},
{
  id:'U9-SYC-Q47', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Conexión con programas nacionales de salud preventiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué lógica ya vista en el tema de programas nacionales de salud preventiva retoma directamente la organización por niveles de atención del sistema de salud?',
  ops:[
    'La lógica de que la atención primaria es, generalmente, el nivel del sistema donde se implementan la mayoría de los programas preventivos, por ser el más cercano y accesible',
    'Esta organización por niveles no tiene ninguna relación real con lo ya visto en el tema de programas nacionales de salud preventiva', 'Los programas nacionales de salud preventiva nunca se relacionan con la organización por niveles de atención del sistema', 'La organización por niveles de atención contradice directamente todo lo aprendido sobre programas nacionales de salud preventiva'],
  ok:0,
  clave:'La lógica de que la atención primaria es, generalmente, el nivel del sistema donde se implementan la mayoría de los programas preventivos, por ser el más cercano y accesible.',
  exp:'El sistema nacional de salud organiza la atención en niveles de atención, retomando directamente la lógica ya vista en el tema de programas nacionales de salud preventiva: la atención primaria como el nivel más cercano y accesible, donde se implementan la mayoría de las intervenciones preventivas antes de necesitar niveles más especializados.',
  no:{
    1:'Sí existe una conexión conceptual directa y explícita entre ambos temas, retomando la centralidad de la atención primaria.',
    2:'Los programas nacionales de salud preventiva sí se relacionan directamente con la organización por niveles de atención, especialmente el primer nivel.',
    3:'La organización por niveles complementa, no contradice, lo aprendido sobre programas nacionales de salud preventiva; ambos comparten la misma lógica de fondo.'
  },
  trampa:'No reconocer la conexión explícita entre la organización por niveles de atención y la lógica ya vista sobre programas nacionales de salud preventiva.',
  obj:'Explicar la conexión entre la organización por niveles de atención y lo ya visto sobre programas nacionales de salud preventiva.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['conexión con Medicina Preventiva','niveles de atención','atención primaria']
},
{
  id:'U9-SYC-Q48', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Toda la teoría traducida en atención efectiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué entender la estructura del sistema de salud real es lo que permite que toda la teoría estudiada a lo largo de la carrera se traduzca en atención efectiva?',
  ops:[
    'Porque conocer los niveles, el financiamiento y las puertas de entrada del sistema real permite aplicar el conocimiento clínico dentro del marco concreto donde realmente se ejercerá la profesión',
    'La estructura del sistema de salud real no tiene ninguna relación con la capacidad de aplicar el conocimiento clínico teórico aprendido', 'El conocimiento teórico de prevención, semiología y farmacología puede aplicarse igual de bien sin entender la estructura real del sistema', 'Entender la estructura del sistema de salud es relevante únicamente para quienes trabajarán en gestión administrativa, no para la práctica clínica'],
  ok:0,
  clave:'Conocer los niveles, el financiamiento y las puertas de entrada del sistema real permite aplicar el conocimiento clínico dentro del marco concreto donde realmente se ejercerá la profesión.',
  exp:'Entender la estructura del sistema de salud real donde se va a ejercer -sus niveles, su financiamiento, sus puertas de entrada- es lo que permite que toda la teoría de prevención, semiología, fisiopatología, farmacología y ética estudiada a lo largo de la carrera se traduzca, en la práctica, en atención efectiva dentro de ese sistema concreto, no en un vacío teórico desconectado de cómo realmente funciona la atención médica en el país.',
  no:{
    1:'La estructura del sistema real tiene una relación directa con la capacidad de aplicar efectivamente el conocimiento clínico en la práctica.',
    2:'Sin entender la estructura real del sistema, el conocimiento teórico corre el riesgo de quedar desconectado de cómo realmente funciona la atención en el país.',
    3:'Entender la estructura del sistema es relevante para cualquier profesional clínico, no exclusivamente para quienes trabajarán en gestión administrativa.'
  },
  trampa:'Asumir que el conocimiento clínico teórico puede aplicarse igual de bien sin entender la estructura institucional real donde se ejercerá la profesión.',
  obj:'Explicar por qué entender la estructura del sistema de salud real es necesario para traducir la teoría estudiada en atención efectiva.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['teoría a la práctica','estructura del sistema real','atención efectiva']
},
{
  id:'U9-SYC-Q49', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Centros de tercer nivel y subespecialidades',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza al tercer nivel de atención dentro del sistema de salud?',
  ops:[
    'Centros de alta complejidad, para casos que requieren tecnología o subespecialidades no disponibles en los niveles anteriores', 'Es el nivel donde se resuelve la mayoría de los problemas de salud comunes de la población general', 'Es el nivel destinado exclusivamente a la vacunación y el control prenatal de rutina', 'Es el nivel donde trabajan exclusivamente los promotores comunitarios de salud, sin ningún médico especialista'],
  ok:0,
  clave:'Centros de alta complejidad, para casos que requieren tecnología o subespecialidades no disponibles en los niveles anteriores.',
  exp:'El tercer nivel de atención corresponde a centros de alta complejidad, para casos que requieren tecnología o subespecialidades no disponibles en los niveles anteriores -a diferencia del primer nivel (atención primaria, problemas comunes) y el segundo nivel (especialidades básicas y hospitalización general).',
  no:{
    1:'Resolver la mayoría de los problemas de salud comunes es función del PRIMER nivel de atención, no del tercer nivel de alta complejidad.',
    2:'La vacunación y el control prenatal de rutina se realizan típicamente en el primer nivel, no exclusivamente en el tercer nivel de alta complejidad.',
    3:'El tercer nivel involucra médicos especialistas y subespecialistas de alta complejidad, no exclusivamente promotores comunitarios de salud.'
  },
  trampa:'Confundir las funciones del tercer nivel (alta complejidad, subespecialidades) con las del primer nivel (atención primaria, problemas comunes).',
  obj:'Identificar las características del tercer nivel de atención dentro del sistema de salud.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['tercer nivel de atención','alta complejidad','subespecialidades']
},
{
  id:'U9-SYC-Q50', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Sistema de salud dominicano', sub:'Cierre de todo el pensum de UNIRMIA',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función distinta cumple este tema, como último de todo el cuatrimestre 9, respecto a los demás temas del pensum?',
  ops:[
    'No introduce un concepto nuevo aislado, sino que conecta explícitamente el conocimiento ya acumulado a lo largo de la carrera con el marco institucional donde se aplicará en la práctica',
    'Este tema cumple exactamente la misma función que cualquier otro tema individual del pensum, sin ninguna diferencia real', 'Este tema invalida y reemplaza por completo todo el conocimiento clínico acumulado en los cuatrimestres anteriores', 'La función de este tema es exclusivamente memorística, sin ninguna conexión real con la práctica profesional futura'],
  ok:0,
  clave:'No introduce un concepto nuevo aislado, sino que conecta explícitamente el conocimiento ya acumulado a lo largo de la carrera con el marco institucional donde se aplicará en la práctica.',
  exp:'Este último tema, precisamente por cerrar tanto el bloque de Salud y Comunidad I como el cuatrimestre 9 completo, cumple una función distinta a la de los demás: no introduce un concepto nuevo aislado, sino que conecta explícitamente el conocimiento clínico y comunitario ya acumulado con el marco institucional concreto en el que ese conocimiento se aplicará en la práctica profesional real.',
  no:{
    1:'Este tema cumple una función distinta y de cierre, no la misma que cualquier tema individual aislado del pensum.',
    2:'Este tema no invalida el conocimiento previo; lo conecta explícitamente con el marco institucional real de la práctica profesional.',
    3:'La función de este tema va más allá de lo memorístico; conecta activamente el conocimiento acumulado con su aplicación práctica real.'
  },
  trampa:'No reconocer la función particular de cierre y conexión que cumple este último tema respecto a todo el conocimiento acumulado en el pensum de UNIRMIA.',
  obj:'Explicar la función distinta de cierre que cumple el tema de sistema de salud dominicano como último del cuatrimestre 9.',
  ref:'Ley 87-01, Sistema Dominicano de Seguridad Social.',
  tags:['cierre del pensum','función de conexión','último tema del cuatrimestre']
}

]);
