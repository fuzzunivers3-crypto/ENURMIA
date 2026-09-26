/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE SALUD Y COMUNIDAD II
   50 preguntas, prefijo U10-SC2-, distribuidas en 4 temas
   (13/13/12/12). Continua el diagnostico comunitario de Salud y
   Comunidad I (9no) hacia el diseno, la participacion y la
   evaluacion real de programas comunitarios.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== SALUD Y COMUNIDAD II ===================== */
{
  id:'U10-SC2-Q01', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Diferencia entre un programa y una jornada puntual',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia principal existe entre un programa de salud comunitaria y una jornada de salud puntual?',
  ops:[
    'Un programa se sostiene en el tiempo con objetivos explícitos y busca un cambio medible; una jornada es una acción aislada sin esa continuidad',
    'Ambos conceptos son exactamente idénticos, sin ninguna diferencia real que amerite distinguirlos', 'Una jornada de salud puntual siempre logra un impacto medible mayor que cualquier programa comunitario sostenido', 'Un programa de salud comunitaria nunca requiere ningún objetivo explícito ni cronograma definido'],
  ok:0,
  clave:'Un programa se sostiene en el tiempo con objetivos explícitos y busca un cambio medible; una jornada es una acción aislada sin esa continuidad.',
  exp:'Un programa de salud comunitaria es un conjunto de actividades planificadas, con objetivos explícitos, un cronograma definido y recursos asignados; a diferencia de una jornada de salud puntual, un programa busca sostenerse en el tiempo el suficiente como para generar un cambio medible en el problema que lo originó.',
  no:{
    1:'Son conceptos claramente distintos: la continuidad y los objetivos medibles distinguen a un programa de una jornada puntual.',
    2:'Es precisamente lo contrario: un programa sostenido tiende a generar mayor impacto medible que una acción aislada puntual.',
    3:'Un programa comunitario sí requiere objetivos explícitos y un cronograma definido, a diferencia de una jornada puntual.'
  },
  trampa:'Confundir una jornada de salud puntual con un programa comunitario sostenido, sin reconocer la diferencia de continuidad y objetivos.',
  obj:'Distinguir un programa de salud comunitaria de una jornada de salud puntual.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['diseño de programa comunitario','diferencia con jornada puntual']
},
{
  id:'U10-SC2-Q02', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Punto de partida del diseño de un programa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un programa comunitario bien diseñado no debe partir de la pregunta "qué actividad podemos hacer"?',
  ops:[
    'Porque debe partir de "qué objetivo concreto buscamos lograr, y qué actividades son las más efectivas para lograrlo con los recursos disponibles"',
    'Un programa comunitario bien diseñado siempre debe partir exclusivamente de qué actividad es más fácil de ejecutar para el equipo', 'No existe ninguna diferencia real entre partir de un objetivo concreto o partir directamente de una actividad disponible', 'El objetivo de un programa comunitario nunca debe definirse antes de elegir las actividades específicas a realizar'],
  ok:0,
  clave:'Porque debe partir de "qué objetivo concreto buscamos lograr, y qué actividades son las más efectivas para lograrlo con los recursos disponibles".',
  exp:'Este diseño retoma directamente la lógica de la planificación estratégica ya vista en Gerencia en Salud: un programa comunitario bien diseñado no parte de "qué actividad podemos hacer", sino de "qué objetivo concreto buscamos lograr, y qué actividades son las más efectivas para lograrlo".',
  no:{
    1:'Partir de la actividad más fácil, sin definir primero el objetivo, es precisamente el error que este enfoque busca evitar.',
    2:'Sí existe una diferencia real: partir del objetivo concreto orienta mejor la elección de actividades efectivas.',
    3:'El objetivo debe definirse ANTES de elegir las actividades, no al revés, siguiendo la lógica de planificación estratégica.'
  },
  trampa:'Diseñar un programa comunitario partiendo de la actividad disponible en vez de partir primero del objetivo concreto que se busca lograr.',
  obj:'Explicar por qué el diseño de un programa comunitario debe partir del objetivo, no de la actividad.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['diseño de programa comunitario','objetivo antes que actividad']
},
{
  id:'U10-SC2-Q03', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Objetivo específico y medible',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un equipo de salud plantea como objetivo de su programa comunitario "mejorar la salud de la comunidad".',
  enunciado:'¿Qué problema tiene este objetivo, y cómo debería reformularse según lo visto en este tema?',
  ops:[
    'Es demasiado general para ser medible; debería reformularse de forma específica, como "reducir la prevalencia de anemia en niños menores de cinco años del sector"',
    'Este objetivo no tiene ningún problema real y puede usarse tal como está formulado, sin ninguna reformulación necesaria', 'El objetivo debería ampliarse aún más, abarcando todos los problemas de salud posibles de la comunidad a la vez', 'Un objetivo de programa comunitario nunca necesita ser medible para que el programa se considere bien diseñado'],
  ok:0,
  clave:'Es demasiado general para ser medible; debería reformularse de forma específica, como "reducir la prevalencia de anemia en niños menores de cinco años del sector".',
  exp:'Un programa comunitario efectivo requiere un objetivo específico y medible (no "mejorar la salud de la comunidad" en abstracto, sino, por ejemplo, "reducir la prevalencia de anemia en niños menores de cinco años del sector"), que permita después evaluar si realmente se logró.',
  no:{
    1:'Este objetivo sí tiene un problema real: su generalidad impide medir después si el programa realmente lo logró.',
    2:'Ampliar aún más el objetivo lo haría todavía menos medible, en la dirección opuesta a la reformulación necesaria.',
    3:'Un objetivo medible es precisamente necesario para poder evaluar después si el programa comunitario tuvo éxito.'
  },
  trampa:'Aceptar un objetivo de programa comunitario demasiado general y no medible, sin reconocer la necesidad de reformularlo de forma específica.',
  obj:'Aplicar la reformulación de un objetivo general de programa comunitario hacia uno específico y medible.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['objetivo específico y medible','reformulación de objetivo general']
},
{
  id:'U10-SC2-Q04', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Componentes de un programa bien diseñado',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué componentes suele incluir un programa de salud comunitaria bien diseñado?',
  ops:[
    'Objetivo específico y medible, población diana definida, actividades con responsables, cronograma realista, y mecanismo de evaluación', 'Únicamente un cronograma de actividades, sin ninguna necesidad real de definir objetivos ni población diana', 'Solo un objetivo general, sin ninguna necesidad de definir actividades concretas ni mecanismo de evaluación', 'Exclusivamente los recursos financieros disponibles, sin ninguna otra consideración de diseño relevante'],
  ok:0,
  clave:'Objetivo específico y medible, población diana definida, actividades con responsables, cronograma realista, y mecanismo de evaluación.',
  exp:'Un programa de salud comunitaria efectivo suele incluir: un objetivo específico y medible, una población diana claramente definida, un conjunto de actividades concretas con responsables asignados, un cronograma realista, y un mecanismo previsto desde el inicio para evaluar si el programa logró su objetivo.',
  no:{
    1:'Un cronograma aislado no basta; se requieren también objetivos, población diana definida y mecanismo de evaluación.',
    2:'Un objetivo general aislado no basta; se requieren también actividades concretas y un mecanismo de evaluación definido.',
    3:'Los recursos financieros son solo un componente; el diseño requiere también objetivos, población diana y evaluación.'
  },
  trampa:'Reducir el diseño de un programa comunitario a un solo componente aislado, sin reconocer el conjunto completo necesario.',
  obj:'Identificar los componentes que incluye un programa de salud comunitaria bien diseñado.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['componentes de programa comunitario','población diana','cronograma realista']
},
{
  id:'U10-SC2-Q05', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Sostenibilidad de un programa comunitario',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De qué depende en gran medida la sostenibilidad de un programa comunitario más allá del entusiasmo inicial?',
  ops:[
    'De que la propia comunidad participe activamente en su diseño y ejecución, no solo como receptora pasiva', 'La sostenibilidad de un programa comunitario nunca depende realmente de la participación activa de la comunidad', 'Un programa comunitario siempre es sostenible de forma automática, sin importar el grado de participación comunitaria', 'La sostenibilidad depende exclusivamente de la presencia constante de un promotor externo especializado'],
  ok:0,
  clave:'De que la propia comunidad participe activamente en su diseño y ejecución, no solo como receptora pasiva.',
  exp:'La sostenibilidad de un programa comunitario -su capacidad de continuar funcionando más allá del entusiasmo inicial o de la presencia de un promotor externo puntual- depende en gran medida de que la propia comunidad participe activamente en su diseño y ejecución, no solo como receptora pasiva.',
  no:{
    1:'La participación activa de la comunidad sí tiene una relación directa y crítica con la sostenibilidad del programa.',
    2:'Es precisamente lo contrario: la sostenibilidad depende en gran medida del grado real de participación comunitaria activa.',
    3:'Depender exclusivamente de un promotor externo es, de hecho, un riesgo para la sostenibilidad, no su garantía.'
  },
  trampa:'Asumir que la sostenibilidad de un programa comunitario depende principalmente de un promotor externo, en vez de la participación activa de la comunidad.',
  obj:'Explicar de qué depende la sostenibilidad de un programa comunitario más allá del entusiasmo inicial.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['intervención comunitaria sostenida','sostenibilidad del programa']
},
{
  id:'U10-SC2-Q06', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Error de diseñar sin verificar el diagnóstico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un equipo de salud diseña un programa comunitario basándose en lo que ellos asumen que la comunidad necesita, sin contrastarlo contra el diagnóstico comunitario previamente realizado.',
  enunciado:'¿Qué riesgo conlleva este enfoque de diseño?',
  ops:[
    'Que el programa no responda a una necesidad real de la comunidad, ya que las prioridades percibidas por el equipo de salud no siempre coinciden con las de la comunidad', 'Este enfoque de diseño nunca conlleva ningún riesgo real, ya que el criterio del equipo de salud siempre es correcto', 'El diagnóstico comunitario previo nunca tiene ninguna relevancia real para el diseño de un programa posterior', 'Un programa diseñado sin contrastar contra el diagnóstico siempre resulta igual de efectivo que uno que sí lo contrasta'],
  ok:0,
  clave:'Que el programa no responda a una necesidad real de la comunidad, ya que las prioridades percibidas por el equipo de salud no siempre coinciden con las de la comunidad.',
  exp:'Un error frecuente es diseñar un programa basado en lo que el equipo de salud asume que la comunidad necesita, sin verificar esa suposición contra el diagnóstico comunitario real, que no siempre coincide exactamente con la prioridad clínica que un profesional de salud identificaría de forma aislada.',
  no:{
    1:'El criterio del equipo de salud, aislado del diagnóstico comunitario, puede no coincidir con la necesidad real de la comunidad.',
    2:'El diagnóstico comunitario previo sí tiene una relevancia directa y central para diseñar un programa que responda a la realidad.',
    3:'Contrastar contra el diagnóstico comunitario mejora la probabilidad de que el programa responda a una necesidad real.'
  },
  trampa:'Asumir que el criterio del equipo de salud, sin contrastarlo contra el diagnóstico comunitario, es suficiente para diseñar un programa efectivo.',
  obj:'Aplicar el riesgo de diseñar un programa comunitario sin verificar el diagnóstico previo realizado.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['diseño de programa comunitario','verificación del diagnóstico previo']
},
{
  id:'U10-SC2-Q07', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Riesgo de un alcance demasiado ambicioso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un programa comunitario con un alcance demasiado ambicioso para sus recursos reales tiende a fracasar?',
  ops:[
    'Porque lleva a un abandono temprano cuando la energía inicial se agota, ya que los recursos reales no alcanzan para sostener ese alcance', 'Un programa comunitario con alcance ambicioso siempre logra mejores resultados que uno con alcance modesto y sostenible', 'El alcance de un programa comunitario nunca tiene ninguna relación real con los recursos disponibles para ejecutarlo', 'Un programa demasiado ambicioso nunca conlleva ningún riesgo real de abandono, sin importar los recursos disponibles'],
  ok:0,
  clave:'Porque lleva a un abandono temprano cuando la energía inicial se agota, ya que los recursos reales no alcanzan para sostener ese alcance.',
  exp:'Un programa con un alcance demasiado ambicioso para los recursos reales disponibles lleva a un abandono temprano cuando la energía inicial se agota; un programa más modesto pero sostenible tiende a generar más impacto real que uno ambicioso que colapsa a los pocos meses.',
  no:{
    1:'Es precisamente lo contrario: un programa modesto y sostenible tiende a generar MÁS impacto real que uno ambicioso que colapsa.',
    2:'El alcance de un programa sí debe ajustarse de forma realista a los recursos efectivamente disponibles para sostenerlo.',
    3:'Un alcance demasiado ambicioso sí conlleva un riesgo real y documentado de abandono temprano del programa.'
  },
  trampa:'Asumir que un programa comunitario más ambicioso siempre es preferible, sin considerar el riesgo de abandono por falta de recursos sostenibles.',
  obj:'Explicar por qué un alcance demasiado ambicioso para los recursos disponibles pone en riesgo la sostenibilidad de un programa.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['alcance sostenible','abandono temprano del programa']
},
{
  id:'U10-SC2-Q08', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Conexión con planificación estratégica institucional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué concepto ya visto en Gerencia en Salud se conecta directamente el diseño de un programa comunitario bien planificado?',
  ops:[
    'La planificación estratégica, que también parte de anticipar tendencias y definir objetivos medibles antes de definir actividades concretas', 'El diseño de un programa comunitario no tiene ninguna relación real con la planificación estratégica ya vista en Gerencia en Salud', 'La escala de Glasgow ya vista en Neurología, sin ninguna relación real con el diseño de programas comunitarios', 'El consentimiento informado ya visto en Relación Médico-Paciente, sin ninguna relación real con el diseño de programas comunitarios'],
  ok:0,
  clave:'La planificación estratégica, que también parte de anticipar tendencias y definir objetivos medibles antes de definir actividades concretas.',
  exp:'Este diseño retoma directamente la lógica de la planificación estratégica ya vista en Gerencia en Salud: la misma secuencia de anticipación y definición de objetivos medibles, aplicada ahora al nivel comunitario en vez del institucional.',
  no:{
    1:'Sí existe una conexión conceptual directa con la planificación estratégica ya desarrollada en Gerencia en Salud.',
    2:'La escala de Glasgow es una herramienta de evaluación neurológica distinta, sin relación conceptual con el diseño de programas.',
    3:'El consentimiento informado es un concepto distinto de relación médico-paciente, sin relación conceptual con el diseño de programas.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre el diseño de programas comunitarios y la planificación estratégica ya vista.',
  obj:'Identificar la conexión entre el diseño de un programa comunitario y la planificación estratégica institucional ya vista.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['conexión con planificación estratégica','objetivos medibles antes de actividades']
},
{
  id:'U10-SC2-Q09', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Programa vs. actividad aislada sin objetivo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un equipo organiza una serie de charlas sobre nutrición en una comunidad, sin haber definido previamente un objetivo específico y medible ni un mecanismo de evaluación.',
  enunciado:'¿Qué le falta a esta iniciativa para considerarse un programa de salud comunitaria bien diseñado?',
  ops:[
    'Un objetivo específico y medible, y un mecanismo previsto para evaluar si las charlas realmente generaron un cambio', 'Esta iniciativa ya cumple con todos los requisitos de un programa de salud comunitaria bien diseñado, sin faltarle nada', 'Un programa de salud comunitaria nunca requiere ningún objetivo medible ni mecanismo de evaluación para considerarse válido', 'A esta iniciativa solo le falta aumentar el número total de charlas programadas, sin ninguna otra consideración de diseño'],
  ok:0,
  clave:'Un objetivo específico y medible, y un mecanismo previsto para evaluar si las charlas realmente generaron un cambio.',
  exp:'Sin un objetivo específico y medible ni un mecanismo de evaluación previsto desde el inicio, esta serie de charlas es más una actividad aislada que un programa de salud comunitaria bien diseñado, que requiere ambos componentes para poder evaluar después si generó el impacto esperado.',
  no:{
    1:'Esta iniciativa no cumple con los requisitos completos de un programa bien diseñado, faltándole precisamente estos componentes.',
    2:'Un programa de salud comunitaria sí requiere un objetivo medible y un mecanismo de evaluación para considerarse bien diseñado.',
    3:'Aumentar solo el número de charlas no resuelve la falta de objetivo medible ni de mecanismo de evaluación previsto.'
  },
  trampa:'Confundir una serie de actividades sin objetivo medible ni evaluación con un programa de salud comunitaria completo y bien diseñado.',
  obj:'Aplicar los componentes faltantes para que una serie de actividades se considere un programa de salud comunitaria bien diseñado.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['diseño de programa comunitario','actividad aislada vs. programa completo']
},
{
  id:'U10-SC2-Q10', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Población diana en el diseño del programa',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la población diana en el diseño de un programa de salud comunitaria?',
  ops:[
    'El grupo específico dentro de la comunidad al que el programa dirige sus actividades para lograr su objetivo', 'El conjunto total de todos los profesionales de salud que ejecutan el programa comunitario', 'El presupuesto total asignado al programa de salud comunitaria durante su periodo de ejecución', 'El cronograma completo de actividades planificadas dentro del programa de salud comunitaria'],
  ok:0,
  clave:'El grupo específico dentro de la comunidad al que el programa dirige sus actividades para lograr su objetivo.',
  exp:'La población diana es el grupo específico dentro de la comunidad al que el programa dirige sus actividades para lograr su objetivo -por ejemplo, "niños menores de cinco años del sector" en un programa orientado a reducir la anemia infantil.',
  no:{
    1:'Esta descripción corresponde al equipo ejecutor del programa, no a la población diana del mismo.',
    2:'Esta descripción corresponde al presupuesto del programa, no a la población diana del mismo.',
    3:'Esta descripción corresponde al cronograma del programa, no a la población diana del mismo.'
  },
  trampa:'Confundir la población diana con otros componentes del programa como el equipo ejecutor, el presupuesto o el cronograma.',
  obj:'Definir qué es la población diana dentro del diseño de un programa de salud comunitaria.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['población diana','componente del diseño de programa']
},
{
  id:'U10-SC2-Q11', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Continuidad con Salud y Comunidad I',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se conecta el diseño de programas comunitarios con lo ya visto en Salud y Comunidad I sobre diagnóstico comunitario?',
  ops:[
    'El diagnóstico comunitario identifica el problema de salud; el diseño del programa es el siguiente paso lógico para responder a ese problema de forma estructurada y sostenida', 'El diagnóstico comunitario y el diseño de programas son procesos completamente independientes, sin ninguna relación real entre ambos', 'El diseño de un programa comunitario siempre debe realizarse antes de completar el diagnóstico comunitario correspondiente', 'El diagnóstico comunitario ya visto en 9no cuatrimestre nunca tiene ninguna relación real con el diseño de programas'],
  ok:0,
  clave:'El diagnóstico comunitario identifica el problema de salud; el diseño del programa es el siguiente paso lógico para responder a ese problema de forma estructurada y sostenida.',
  exp:'Salud y Comunidad I enseñó a diagnosticar los problemas de una comunidad; este tema enseña el siguiente paso lógico: diseñar una intervención estructurada capaz de responder a ese diagnóstico de forma sostenida en el tiempo, no como una acción aislada.',
  no:{
    1:'Son procesos claramente conectados en secuencia, no independientes: el diagnóstico precede y orienta el diseño del programa.',
    2:'El diagnóstico comunitario debe completarse ANTES del diseño del programa, para que este responda a un problema real identificado.',
    3:'El diagnóstico comunitario de 9no cuatrimestre sí tiene una relación directa y secuencial con el diseño de programas de 10mo.'
  },
  trampa:'Tratar el diagnóstico comunitario y el diseño de programas como procesos aislados sin conexión secuencial entre ambos.',
  obj:'Explicar la conexión secuencial entre el diagnóstico comunitario ya visto y el diseño de programas comunitarios.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['continuidad con salud y comunidad I','secuencia diagnóstico-diseño']
},
{
  id:'U10-SC2-Q12', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Cronograma realista como componente crítico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un cronograma poco realista compromete el diseño de un programa comunitario, incluso si el objetivo está bien definido?',
  ops:[
    'Porque un cronograma que no considera los tiempos reales necesarios para cada actividad genera retrasos o abandono, aunque el objetivo en sí esté bien planteado', 'Un cronograma poco realista nunca tiene ninguna relación real con el éxito o fracaso de un programa comunitario', 'El cronograma de un programa comunitario nunca necesita ajustarse a los tiempos reales disponibles para su ejecución', 'Un objetivo bien definido siempre garantiza el éxito de un programa, sin importar si el cronograma es realista o no'],
  ok:0,
  clave:'Porque un cronograma que no considera los tiempos reales necesarios para cada actividad genera retrasos o abandono, aunque el objetivo en sí esté bien planteado.',
  exp:'Un programa de salud comunitaria efectivo requiere un cronograma realista como uno de sus componentes críticos; un cronograma que no considera los tiempos reales necesarios para cada actividad genera retrasos o abandono, comprometiendo el programa incluso si el objetivo está bien definido.',
  no:{
    1:'Un cronograma poco realista sí tiene una relación directa con el riesgo de retraso o abandono del programa comunitario.',
    2:'El cronograma sí debe ajustarse a los tiempos reales disponibles para que el programa sea ejecutable de forma sostenida.',
    3:'Un objetivo bien definido no basta por sí solo; el cronograma realista es igualmente crítico para el éxito del programa.'
  },
  trampa:'Asumir que un objetivo bien definido garantiza el éxito de un programa comunitario, sin considerar la importancia de un cronograma realista.',
  obj:'Explicar por qué un cronograma realista es un componente crítico del diseño de un programa comunitario.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['cronograma realista','componente crítico del diseño']
},
{
  id:'U10-SC2-Q13', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Programas de salud comunitaria avanzados', sub:'Consideración clínica sobre el diseño de programas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico recién incorporado a un centro de salud comunitario se le pide participar en el diseño de un nuevo programa de salud comunitaria.',
  enunciado:'¿Qué debería verificar antes de contribuir al diseño de este programa, según lo visto en este tema?',
  ops:[
    'Que el programa responda a una necesidad real identificada en el diagnóstico comunitario, y que su alcance sea sostenible con los recursos efectivamente disponibles', 'No es necesario verificar ninguna condición previa; cualquier programa que el equipo proponga siempre será apropiado', 'Debe verificar únicamente que el programa incluya la mayor cantidad posible de actividades, sin ninguna otra consideración', 'Solo debe verificar que el presupuesto del programa sea el más alto posible disponible para la institución'],
  ok:0,
  clave:'Que el programa responda a una necesidad real identificada en el diagnóstico comunitario, y que su alcance sea sostenible con los recursos efectivamente disponibles.',
  exp:'Un médico que participa en el diseño de un programa comunitario debe verificar que responda a una necesidad real de la comunidad, no solo a una prioridad clínica asumida desde fuera, y que su alcance sea sostenible con los recursos efectivamente disponibles.',
  no:{
    1:'Sí es necesario verificar estas condiciones previas antes de contribuir al diseño de un programa comunitario apropiado.',
    2:'Incluir la mayor cantidad de actividades posible, sin verificar sostenibilidad, es precisamente el error de alcance ya discutido.',
    3:'Un presupuesto alto no es la consideración central; lo relevante es la necesidad real y la sostenibilidad del alcance.'
  },
  trampa:'Asumir que cualquier programa propuesto por el equipo es automáticamente apropiado, sin verificar su respuesta a una necesidad real y su sostenibilidad.',
  obj:'Aplicar las verificaciones apropiadas que un médico debe hacer antes de contribuir al diseño de un programa comunitario.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 2.',
  tags:['consideración clínica','verificación antes de diseñar']
},
{
  id:'U10-SC2-Q14', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Qué es la participación comunitaria real',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza a la participación comunitaria real en un programa de salud, más allá de recibir información sobre él?',
  ops:[
    'Que los miembros de la comunidad tomen parte activa en identificar sus problemas, diseñar las intervenciones y evaluar si funcionaron', 'La participación comunitaria real se limita exclusivamente a que la comunidad reciba información sobre decisiones ya tomadas', 'Un rol de receptor pasivo de una intervención decidida externamente siempre constituye participación comunitaria real', 'La participación comunitaria real nunca requiere que la comunidad tome parte en ninguna etapa del proceso del programa'],
  ok:0,
  clave:'Que los miembros de la comunidad tomen parte activa en identificar sus problemas, diseñar las intervenciones y evaluar si funcionaron.',
  exp:'La participación comunitaria en salud es el proceso mediante el cual los miembros de una comunidad toman parte activa en identificar sus propios problemas de salud, diseñar las intervenciones para abordarlos, y evaluar si esas intervenciones realmente funcionaron -un rol muy distinto al de receptor pasivo.',
  no:{
    1:'Recibir información sobre una decisión ya tomada es el nivel más superficial, no la participación comunitaria real completa.',
    2:'Es precisamente lo contrario: el rol de receptor pasivo NO constituye participación comunitaria real según lo definido en este tema.',
    3:'La participación comunitaria real sí requiere que la comunidad tome parte activa en las distintas etapas del proceso.'
  },
  trampa:'Confundir informar a la comunidad sobre una decisión ya tomada con la participación comunitaria real y activa en el proceso completo.',
  obj:'Definir qué caracteriza a la participación comunitaria real en un programa de salud.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['participación comunitaria','rol activo vs. receptor pasivo']
},
{
  id:'U10-SC2-Q15', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Niveles de participación comunitaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el nivel más superficial y el nivel más profundo de participación comunitaria?',
  ops:[
    'El más superficial solo informa sobre una decisión ya tomada; el más profundo involucra a la comunidad en cada etapa: diagnóstico, diseño, ejecución y evaluación', 'Ambos niveles de participación comunitaria son exactamente idénticos, sin ninguna diferencia real entre ellos', 'El nivel más superficial de participación siempre genera más compromiso sostenido que el nivel más profundo', 'No existen distintos niveles de participación comunitaria; la participación siempre ocurre de la misma forma única'],
  ok:0,
  clave:'El más superficial solo informa sobre una decisión ya tomada; el más profundo involucra a la comunidad en cada etapa: diagnóstico, diseño, ejecución y evaluación.',
  exp:'Existen distintos niveles de participación, desde la más superficial (informar a la comunidad sobre una decisión ya tomada) hasta la más profunda (la comunidad participa en cada etapa: diagnóstico, diseño, ejecución y evaluación).',
  no:{
    1:'Son niveles claramente distintos, con diferencias importantes en el grado de involucramiento real de la comunidad.',
    2:'Es precisamente lo contrario: el nivel más PROFUNDO tiende a generar más compromiso sostenido que el más superficial.',
    3:'Sí existen distintos niveles de participación comunitaria, desde el más superficial hasta el más profundo.'
  },
  trampa:'Asumir que informar a la comunidad sobre una decisión ya tomada genera el mismo compromiso que involucrarla en cada etapa del proceso.',
  obj:'Distinguir los niveles de participación comunitaria, desde el más superficial hasta el más profundo.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['niveles de participación','compromiso comunitario sostenido']
},
{
  id:'U10-SC2-Q16', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Definición de empoderamiento en salud',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el empoderamiento en salud, según lo visto en este tema?',
  ops:[
    'El proceso mediante el cual una comunidad desarrolla la capacidad, el conocimiento y la confianza para identificar y resolver sus propios problemas de salud, con menos dependencia externa', 'El empoderamiento en salud es equivalente a que la comunidad ejecute exitosamente un único programa diseñado por un agente externo', 'El empoderamiento en salud nunca tiene ninguna relación real con la capacidad de la comunidad de resolver sus propios problemas', 'El empoderamiento en salud depende exclusivamente de la cantidad de recursos financieros externos que recibe la comunidad'],
  ok:0,
  clave:'El proceso mediante el cual una comunidad desarrolla la capacidad, el conocimiento y la confianza para identificar y resolver sus propios problemas de salud, con menos dependencia externa.',
  exp:'El empoderamiento en salud es el proceso mediante el cual una comunidad desarrolla la capacidad, el conocimiento y la confianza necesarios para identificar y resolver sus propios problemas de salud, cada vez con menos dependencia de un agente externo -un objetivo de largo plazo.',
  no:{
    1:'El empoderamiento va más allá de la ejecución exitosa de un programa puntual; es un objetivo de desarrollo de capacidad de largo plazo.',
    2:'El empoderamiento sí tiene una relación central y directa con la capacidad de la comunidad de resolver sus propios problemas.',
    3:'El empoderamiento depende principalmente del desarrollo de capacidad y conocimiento, no exclusivamente de recursos financieros externos.'
  },
  trampa:'Reducir el empoderamiento en salud a la ejecución exitosa de un solo programa puntual, sin reconocer su naturaleza de objetivo de largo plazo.',
  obj:'Definir el empoderamiento en salud como objetivo de desarrollo de capacidad comunitaria de largo plazo.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['empoderamiento en salud','desarrollo de capacidad comunitaria']
},
{
  id:'U10-SC2-Q17', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Comunidad empoderada frente a nuevos problemas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue a una comunidad empoderada frente a la aparición de un nuevo problema de salud, en comparación con una comunidad que solo participó en un programa puntual?',
  ops:[
    'Una comunidad empoderada desarrolla la capacidad de identificar por sí misma nuevos problemas y organizarse para exigir recursos, sin depender indefinidamente de un agente externo', 'No existe ninguna diferencia real entre una comunidad empoderada y una que solo participó en un programa puntual', 'Una comunidad empoderada siempre depende, en la misma medida, de un agente externo para identificar cualquier nuevo problema', 'Una comunidad que solo participó en un programa puntual siempre logra el mismo nivel de autonomía que una empoderada'],
  ok:0,
  clave:'Una comunidad empoderada desarrolla la capacidad de identificar por sí misma nuevos problemas y organizarse para exigir recursos, sin depender indefinidamente de un agente externo.',
  exp:'Una comunidad empoderada no solo participa en un programa diseñado por otros: desarrolla la capacidad de identificar nuevos problemas de salud por sí misma en el futuro, de organizarse para exigir los recursos necesarios, y de sostener soluciones sin depender indefinidamente de un agente externo.',
  no:{
    1:'Sí existe una diferencia real: la capacidad de autonomía futura distingue a una comunidad empoderada de una que solo participó puntualmente.',
    2:'Es precisamente lo contrario: una comunidad empoderada depende MENOS de un agente externo frente a nuevos problemas.',
    3:'Una comunidad que solo participó puntualmente no necesariamente alcanza el mismo nivel de autonomía que una empoderada.'
  },
  trampa:'Asumir que la participación exitosa en un solo programa puntual equivale automáticamente al empoderamiento sostenido de la comunidad.',
  obj:'Distinguir el nivel de autonomía de una comunidad empoderada frente a una que solo participó en un programa puntual.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['empoderamiento en salud','autonomía frente a nuevos problemas']
},
{
  id:'U10-SC2-Q18', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Rol del profesional de salud como facilitador',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un profesional de salud que trabaja hacia el empoderamiento comunitario evita convertirse en el protagonista indispensable del proceso?',
  ops:[
    'Porque convertirse en protagonista indispensable generaría la misma dependencia que la participación comunitaria busca evitar', 'Un profesional de salud siempre debe convertirse en el protagonista indispensable para que el proceso comunitario sea exitoso', 'Convertirse en protagonista indispensable nunca tiene ninguna relación real con la dependencia que se busca evitar', 'El rol de facilitador y el rol de protagonista indispensable son exactamente equivalentes, sin ninguna diferencia real'],
  ok:0,
  clave:'Porque convertirse en protagonista indispensable generaría la misma dependencia que la participación comunitaria busca evitar.',
  exp:'Un profesional de salud que trabaja hacia el empoderamiento cumple un rol de facilitador -aporta conocimiento técnico, organiza el proceso, conecta con recursos- pero evita convertirse en el protagonista indispensable, precisamente para no generar la misma dependencia que la participación comunitaria busca evitar.',
  no:{
    1:'Es precisamente lo contrario: convertirse en protagonista indispensable generaría una dependencia que compromete el empoderamiento.',
    2:'Convertirse en protagonista indispensable sí tiene una relación directa con generar la dependencia que se busca evitar.',
    3:'Son roles claramente distintos: el facilitador desarrolla capacidad en otros; el protagonista indispensable concentra todo en sí mismo.'
  },
  trampa:'Confundir el rol de facilitador con el de protagonista indispensable del proceso, sin reconocer el riesgo de dependencia que este último genera.',
  obj:'Explicar por qué el profesional de salud evita convertirse en protagonista indispensable del proceso comunitario.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['rol de facilitador','evitar dependencia del profesional externo']
},
{
  id:'U10-SC2-Q19', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Conexión con el liderazgo ya visto en Gerencia en Salud',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué idea ya vista sobre liderazgo en Gerencia en Salud se conecta el rol de facilitador comunitario?',
  ops:[
    'Un buen líder busca desarrollar la capacidad de su equipo en vez de concentrar todas las decisiones en sí mismo, igual que un buen facilitador busca desarrollar la capacidad de la comunidad', 'El rol de facilitador comunitario no tiene ninguna relación real con ninguna idea ya vista sobre liderazgo en Gerencia en Salud', 'Un buen líder siempre debe concentrar todas las decisiones en sí mismo, igual que un facilitador comunitario debería hacerlo', 'La idea de desarrollar capacidad en el equipo, vista en liderazgo, nunca aplica de ninguna forma al contexto comunitario'],
  ok:0,
  clave:'Un buen líder busca desarrollar la capacidad de su equipo en vez de concentrar todas las decisiones en sí mismo, igual que un buen facilitador busca desarrollar la capacidad de la comunidad.',
  exp:'Este matiz retoma directamente la lógica ya vista sobre el liderazgo en Gerencia en Salud: así como un buen líder directivo busca desarrollar la capacidad de su equipo en vez de concentrar todas las decisiones en sí mismo, un buen facilitador comunitario busca desarrollar la capacidad de la comunidad.',
  no:{
    1:'Sí existe una conexión conceptual directa con la idea de liderazgo que desarrolla capacidad en otros, ya vista en Gerencia en Salud.',
    2:'Es precisamente lo contrario: un buen líder evita concentrar todas las decisiones en sí mismo, igual que el facilitador comunitario.',
    3:'Esta idea de desarrollar capacidad sí aplica de forma directa y análoga al contexto del facilitador comunitario.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre el liderazgo que desarrolla capacidad en el equipo y el rol del facilitador comunitario.',
  obj:'Identificar la conexión entre el rol de facilitador comunitario y la idea de liderazgo ya vista en Gerencia en Salud.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['conexión con liderazgo','desarrollo de capacidad en otros']
},
{
  id:'U10-SC2-Q20', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Consideración clínica sobre dependencia generada',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico ha liderado personalmente cada aspecto de un programa comunitario exitoso durante dos años; al evaluar su trabajo, nota que ninguna actividad del programa puede continuar sin su presencia directa.',
  enunciado:'¿Qué debería preocuparle a este médico según lo visto sobre empoderamiento comunitario?',
  ops:[
    'Que, a pesar del éxito aparente, puede haber generado una dependencia de su propia presencia que compromete la sostenibilidad futura del programa', 'No debería preocuparle nada, ya que el éxito del programa durante dos años es el único criterio relevante a considerar', 'Debería preocuparle únicamente que el programa no haya crecido en tamaño durante ese periodo de dos años', 'Que ninguna actividad pueda continuar sin su presencia es, de hecho, la señal más clara de un empoderamiento exitoso'],
  ok:0,
  clave:'Que, a pesar del éxito aparente, puede haber generado una dependencia de su propia presencia que compromete la sostenibilidad futura del programa.',
  exp:'Un médico que promueve un programa comunitario debe evaluar constantemente si está facilitando el desarrollo de capacidad real en la comunidad, o si, sin darse cuenta, está generando una dependencia de su propia presencia que comprometerá la sostenibilidad del programa cuando él ya no esté.',
  no:{
    1:'El éxito aparente durante dos años no descarta el riesgo real de dependencia generada, que sí amerita preocupación.',
    2:'El tamaño del programa no es el problema central señalado; la dependencia de la presencia del médico es la preocupación relevante.',
    3:'Es precisamente lo contrario: que ninguna actividad pueda continuar sin él es señal de dependencia, no de empoderamiento exitoso.'
  },
  trampa:'Confundir el éxito aparente de un programa con el logro real de empoderamiento comunitario, sin evaluar la dependencia generada hacia el profesional externo.',
  obj:'Aplicar la evaluación crítica sobre la dependencia generada hacia un profesional externo en un programa aparentemente exitoso.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['consideración clínica','dependencia del profesional externo']
},
{
  id:'U10-SC2-Q21', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Diferencia entre participación y empoderamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia de alcance temporal existe entre la participación comunitaria en un programa específico y el empoderamiento comunitario?',
  ops:[
    'La participación puede limitarse a un programa puntual; el empoderamiento es un objetivo de más largo plazo que trasciende un solo programa', 'Ambos conceptos tienen exactamente el mismo alcance temporal, sin ninguna diferencia real entre ellos', 'El empoderamiento siempre se limita a la duración de un único programa específico, sin ningún alcance más allá de este', 'La participación comunitaria siempre tiene un alcance temporal mayor que el del empoderamiento comunitario'],
  ok:0,
  clave:'La participación puede limitarse a un programa puntual; el empoderamiento es un objetivo de más largo plazo que trasciende un solo programa.',
  exp:'El empoderamiento en salud es un objetivo de largo plazo que va más allá de la ejecución exitosa de un programa puntual, mientras que la participación comunitaria puede darse, en su forma más básica, dentro del marco de un solo programa específico.',
  no:{
    1:'Son conceptos con alcances temporales distintos: la participación puede ser puntual, mientras el empoderamiento es de largo plazo.',
    2:'Es precisamente lo contrario: el empoderamiento trasciende la duración de un único programa específico, siendo de más largo alcance.',
    3:'Está invertido: el EMPODERAMIENTO tiene un alcance temporal mayor que la participación limitada a un programa puntual, no al revés.'
  },
  trampa:'Confundir el alcance temporal de la participación comunitaria puntual con el del empoderamiento comunitario de largo plazo.',
  obj:'Distinguir el alcance temporal de la participación comunitaria frente al empoderamiento comunitario.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['participación vs. empoderamiento','alcance temporal']
},
{
  id:'U10-SC2-Q41', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Riesgo de participación simulada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué consultar a la comunidad únicamente para validar una decisión que en realidad ya fue tomada de antemano no constituye participación comunitaria real?',
  ops:[
    'Porque la comunidad no tiene ninguna influencia real sobre el resultado final, aunque formalmente parezca haber sido consultada', 'Esta forma de consulta siempre constituye participación comunitaria real y profunda, sin importar si la decisión ya estaba tomada', 'Validar una decisión ya tomada es exactamente equivalente a involucrar a la comunidad desde la etapa de diagnóstico y diseño', 'No existe ninguna diferencia real entre consultar formalmente y permitir una influencia genuina sobre la decisión final'],
  ok:0,
  clave:'Porque la comunidad no tiene ninguna influencia real sobre el resultado final, aunque formalmente parezca haber sido consultada.',
  exp:'Consultar a la comunidad solo para validar una decisión ya tomada es una forma de participación simulada: formalmente parece consulta, pero la comunidad no tiene ninguna influencia real sobre el resultado final, muy distinta de la participación genuina en cada etapa ya descrita en este tema.',
  no:{
    1:'Es precisamente lo contrario: esta forma de consulta simulada NO constituye participación comunitaria real y profunda.',
    2:'Validar una decisión ya tomada es muy distinto de involucrar a la comunidad desde el diagnóstico y diseño, con influencia real.',
    3:'Sí existe una diferencia real e importante entre una consulta formal simulada y una influencia genuina sobre la decisión final.'
  },
  trampa:'Confundir una consulta formal que solo valida una decisión ya tomada con la participación comunitaria real y con influencia genuina.',
  obj:'Explicar por qué una consulta que solo valida una decisión ya tomada no constituye participación comunitaria real.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['participación simulada','consulta sin influencia real']
},
{
  id:'U10-SC2-Q42', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Líderes comunitarios como puente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué rol cumplen los líderes comunitarios reconocidos por la propia comunidad en un proceso de participación genuina?',
  ops:[
    'Funcionan como puente de confianza entre el equipo de salud y la comunidad, facilitando una comunicación y organización más efectivas', 'Los líderes comunitarios nunca tienen ningún rol real relevante dentro de un proceso de participación comunitaria genuina', 'Un proceso de participación comunitaria genuina siempre debe evitar por completo la intervención de cualquier líder comunitario', 'El rol de los líderes comunitarios reconocidos es exactamente equivalente al de un promotor de salud externo al proceso'],
  ok:0,
  clave:'Funcionan como puente de confianza entre el equipo de salud y la comunidad, facilitando una comunicación y organización más efectivas.',
  exp:'Los líderes comunitarios reconocidos por la propia comunidad -no necesariamente con un cargo formal- suelen funcionar como puente de confianza entre el equipo de salud y la comunidad, facilitando una comunicación y una organización más efectivas que las que lograría un agente externo actuando solo.',
  no:{
    1:'Los líderes comunitarios sí cumplen un rol real y valioso como puente de confianza en un proceso de participación genuina.',
    2:'Evitar la intervención de líderes comunitarios reconocidos, en vez de aprovecharla, contradice la lógica de participación genuina.',
    3:'El rol del líder comunitario, con legitimidad propia de la comunidad, es distinto al de un promotor externo sin esa legitimidad.'
  },
  trampa:'Subestimar el valor del líder comunitario reconocido como puente de confianza, tratándolo como equivalente o innecesario frente a un agente externo.',
  obj:'Explicar el rol de los líderes comunitarios reconocidos como puente de confianza en un proceso de participación genuina.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['líder comunitario como puente','confianza entre equipo y comunidad']
},
{
  id:'U10-SC2-Q43', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Empoderamiento y toma de decisiones colectivas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una comunidad, tras dos años de participar en un programa de salud, organiza por iniciativa propia una reunión para solicitar a las autoridades locales la instalación de un punto de agua potable, sin que el equipo de salud haya propuesto esta acción.',
  enunciado:'¿Qué indica esta iniciativa sobre el proceso comunitario, según lo visto en este tema?',
  ops:[
    'Es un indicio de empoderamiento real: la comunidad identificó un problema por sí misma y se organizó para exigir una solución, sin depender del equipo externo', 'Esta iniciativa no tiene ninguna relación real con el concepto de empoderamiento visto en este tema', 'Esta acción debería considerarse preocupante, ya que la comunidad no debería nunca actuar sin la autorización previa del equipo de salud', 'Solicitar recursos a las autoridades locales nunca constituye una forma válida de empoderamiento comunitario'],
  ok:0,
  clave:'Es un indicio de empoderamiento real: la comunidad identificó un problema por sí misma y se organizó para exigir una solución, sin depender del equipo externo.',
  exp:'Una comunidad empoderada desarrolla la capacidad de identificar nuevos problemas de salud por sí misma y de organizarse para exigir los recursos necesarios, sin depender indefinidamente de un agente externo -exactamente lo que ilustra esta iniciativa autónoma de la comunidad.',
  no:{
    1:'Esta iniciativa sí tiene una relación directa con el concepto de empoderamiento, siendo un ejemplo concreto del mismo.',
    2:'Esta acción no debería preocupar; es precisamente el tipo de autonomía que el empoderamiento comunitario busca fomentar.',
    3:'Organizarse para exigir recursos a las autoridades es precisamente una forma válida y esperada de empoderamiento comunitario.'
  },
  trampa:'Interpretar la autonomía de la comunidad como algo preocupante o irrelevante, en vez de reconocerla como el indicio de empoderamiento que representa.',
  obj:'Aplicar el reconocimiento de una iniciativa autónoma de la comunidad como indicio de empoderamiento real.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['iniciativa autónoma comunitaria','indicio de empoderamiento real']
},
{
  id:'U10-SC2-Q44', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Diversidad de voces dentro de la comunidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la participación comunitaria genuina debe buscar incluir voces diversas dentro de la comunidad, y no solo a quienes participan con mayor facilidad o visibilidad?',
  ops:[
    'Porque limitar la participación a las voces más visibles puede excluir las perspectivas de subgrupos con necesidades distintas, comprometiendo la representatividad real del proceso', 'La participación comunitaria genuina siempre debe limitarse exclusivamente a las voces más visibles y fáciles de alcanzar dentro de la comunidad', 'Incluir voces diversas dentro de la comunidad nunca tiene ninguna relación real con la representatividad de un proceso participativo', 'Todas las voces dentro de una comunidad representan exactamente las mismas necesidades y perspectivas, sin ninguna diferencia real'],
  ok:0,
  clave:'Porque limitar la participación a las voces más visibles puede excluir las perspectivas de subgrupos con necesidades distintas, comprometiendo la representatividad real del proceso.',
  exp:'La participación comunitaria genuina debe buscar incluir voces diversas, porque limitarla a quienes participan con mayor facilidad o visibilidad puede excluir las perspectivas de subgrupos con necesidades distintas -una idea que se profundiza en el siguiente tema sobre poblaciones vulnerables.',
  no:{
    1:'Es precisamente lo contrario: limitar la participación a las voces más visibles compromete la representatividad real del proceso.',
    2:'Incluir voces diversas sí tiene una relación directa y central con la representatividad genuina de un proceso participativo.',
    3:'Distintas voces dentro de una comunidad pueden representar necesidades y perspectivas genuinamente diferentes entre sí.'
  },
  trampa:'Asumir que las voces más visibles o fáciles de alcanzar dentro de una comunidad representan adecuadamente a toda la diversidad de necesidades existentes.',
  obj:'Explicar por qué la participación comunitaria genuina debe buscar incluir voces diversas, no solo las más visibles.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['diversidad de voces','representatividad del proceso participativo']
},
{
  id:'U10-SC2-Q45', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Participación comunitaria y empoderamiento', sub:'Empoderamiento no ocurre de forma inmediata',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es razonable esperar que el empoderamiento comunitario se desarrolle de forma gradual, y no como resultado inmediato de un solo programa?',
  ops:[
    'Porque desarrollar capacidad, conocimiento y confianza en una comunidad para resolver sus propios problemas de salud requiere un proceso sostenido en el tiempo, similar a cualquier proceso de aprendizaje real', 'El empoderamiento comunitario siempre ocurre de forma inmediata tras la ejecución exitosa de un único programa comunitario', 'Esperar un desarrollo gradual del empoderamiento comunitario nunca tiene ninguna justificación real o razonable', 'El tiempo que toma desarrollar el empoderamiento comunitario nunca tiene ninguna relación real con el aprendizaje de capacidades'],
  ok:0,
  clave:'Porque desarrollar capacidad, conocimiento y confianza en una comunidad para resolver sus propios problemas de salud requiere un proceso sostenido en el tiempo, similar a cualquier proceso de aprendizaje real.',
  exp:'El empoderamiento en salud es un objetivo de largo plazo, no un resultado inmediato: desarrollar capacidad, conocimiento y confianza en una comunidad requiere un proceso sostenido en el tiempo, similar a cualquier proceso de aprendizaje real, que no se completa con la ejecución de un solo programa.',
  no:{
    1:'Es precisamente lo contrario: el empoderamiento es un objetivo de largo plazo, no un resultado inmediato de un único programa.',
    2:'Esperar un desarrollo gradual sí tiene una justificación razonable, dada la naturaleza de proceso de aprendizaje del empoderamiento.',
    3:'El tiempo necesario para el empoderamiento sí tiene una relación directa con la naturaleza gradual del aprendizaje de capacidades.'
  },
  trampa:'Esperar que el empoderamiento comunitario se logre de forma inmediata tras un solo programa, sin reconocer su naturaleza de proceso gradual sostenido.',
  obj:'Explicar por qué el empoderamiento comunitario se desarrolla de forma gradual y no como resultado inmediato.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 3.',
  tags:['desarrollo gradual del empoderamiento','proceso sostenido de aprendizaje']
},
{
  id:'U10-SC2-Q22', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Por qué evaluar un programa comunitario',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué pregunta permite responder la evaluación de un programa comunitario que, sin datos objetivos, quedaría respondida solo por impresión subjetiva?',
  ops:[
    '¿El programa realmente logró el objetivo para el que fue diseñado?', 'La evaluación de un programa comunitario nunca permite responder ninguna pregunta relevante sobre su funcionamiento real', 'La única pregunta que permite responder la evaluación es cuántas personas asistieron a las actividades del programa', 'La evaluación de un programa comunitario siempre confirma automáticamente que el programa fue exitoso, sin excepción'],
  ok:0,
  clave:'¿El programa realmente logró el objetivo para el que fue diseñado?',
  exp:'La evaluación de un programa comunitario permite responder una pregunta que, sin datos objetivos, quedaría respondida solo por impresión subjetiva: ¿el programa realmente logró el objetivo para el que fue diseñado?, retomando la lógica ya vista sobre indicadores de gestión hospitalaria.',
  no:{
    1:'La evaluación sí permite responder una pregunta central y relevante sobre el logro real del objetivo del programa.',
    2:'La asistencia a actividades es solo un indicador de proceso, no la pregunta central completa que responde la evaluación.',
    3:'La evaluación no confirma automáticamente el éxito; puede revelar que el programa no logró el objetivo esperado.'
  },
  trampa:'Asumir que la evaluación de un programa comunitario solo mide la asistencia a actividades, sin abordar la pregunta central de si se logró el objetivo.',
  obj:'Explicar la pregunta central que permite responder la evaluación de un programa comunitario.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['evaluación de impacto comunitario','pregunta central de la evaluación']
},
{
  id:'U10-SC2-Q23', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Indicador de proceso vs. indicador de resultado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre un indicador de proceso y un indicador de resultado en la evaluación de un programa comunitario?',
  ops:[
    'El de proceso mide si las actividades planificadas se ejecutaron; el de resultado mide si esas actividades generaron el cambio esperado en el problema de salud original', 'Ambos tipos de indicador miden exactamente lo mismo, sin ninguna diferencia real que amerite distinguirlos', 'El indicador de proceso mide el cambio en el problema de salud, y el de resultado mide si las actividades se ejecutaron', 'Solo el indicador de resultado es relevante para evaluar un programa comunitario; el de proceso nunca aporta información útil'],
  ok:0,
  clave:'El de proceso mide si las actividades planificadas se ejecutaron; el de resultado mide si esas actividades generaron el cambio esperado en el problema de salud original.',
  exp:'Los indicadores de proceso miden si las actividades planificadas del programa efectivamente se ejecutaron como se diseñaron, mientras que los indicadores de resultado miden si esas actividades generaron el cambio esperado en el problema de salud original.',
  no:{
    1:'Son tipos de indicador claramente distintos, midiendo aspectos diferentes y complementarios de un programa comunitario.',
    2:'Está invertido: el de PROCESO mide ejecución de actividades, y el de RESULTADO mide el cambio en el problema, no al revés.',
    3:'Ambos tipos de indicador son necesarios y se complementan; el de proceso también aporta información útil relevante.'
  },
  trampa:'Invertir las definiciones de indicador de proceso (ejecución) e indicador de resultado (cambio real), un error frecuente de terminología.',
  obj:'Distinguir el indicador de proceso del indicador de resultado en la evaluación de un programa comunitario.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['indicador de proceso','indicador de resultado']
},
{
  id:'U10-SC2-Q24', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Complementariedad de ambos tipos de indicador',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un programa comunitario reporta excelentes indicadores de proceso -todas las actividades planificadas se ejecutaron según lo previsto-, pero sus indicadores de resultado muestran que el problema de salud original no mejoró de forma significativa.',
  enunciado:'¿Qué señala esta combinación de resultados?',
  ops:[
    'Que las actividades elegidas probablemente no eran las más efectivas para lograr el objetivo, más que un problema de ejecución', 'Esta combinación de resultados nunca aporta ninguna información útil real sobre el diseño o la efectividad del programa', 'Esta combinación siempre indica exclusivamente un problema de ejecución deficiente de las actividades planificadas', 'Un programa con excelentes indicadores de proceso siempre logra automáticamente buenos indicadores de resultado también'],
  ok:0,
  clave:'Que las actividades elegidas probablemente no eran las más efectivas para lograr el objetivo, más que un problema de ejecución.',
  exp:'Un programa puede tener excelentes indicadores de proceso -todas las actividades se ejecutaron según lo planificado- pero indicadores de resultado decepcionantes, lo que señala que las actividades elegidas no eran las más efectivas para lograr el objetivo, más que un problema de ejecución.',
  no:{
    1:'Esta combinación de resultados sí aporta información útil real: señala un problema de efectividad del diseño, no de ejecución.',
    2:'Es precisamente lo contrario: buena ejecución con mal resultado señala un problema de EFECTIVIDAD, no de ejecución deficiente.',
    3:'Este caso demuestra precisamente que buenos indicadores de proceso no garantizan automáticamente buenos indicadores de resultado.'
  },
  trampa:'Atribuir automáticamente un mal resultado a una mala ejecución, sin considerar que las actividades elegidas podrían no ser las más efectivas.',
  obj:'Aplicar la interpretación correcta ante buenos indicadores de proceso combinados con indicadores de resultado decepcionantes.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['interpretación combinada de indicadores','efectividad vs. ejecución']
},
{
  id:'U10-SC2-Q25', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Cuándo planificar la evaluación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué diseñar el mecanismo de evaluación solo al final del programa, y no desde su diseño inicial, es un error frecuente?',
  ops:[
    'Porque para entonces ya es tarde para recolectar datos de línea base con los cuales comparar los resultados obtenidos', 'Diseñar la evaluación al final del programa siempre es igual de efectivo que diseñarla desde el inicio del mismo', 'Los datos de línea base nunca son necesarios para evaluar si un programa comunitario logró su objetivo', 'El momento en que se diseña el mecanismo de evaluación nunca tiene ninguna relación real con la calidad de la evaluación'],
  ok:0,
  clave:'Porque para entonces ya es tarde para recolectar datos de línea base con los cuales comparar los resultados obtenidos.',
  exp:'Un error frecuente es diseñar el mecanismo de evaluación solo al final del programa, cuando ya es tarde para recolectar datos de línea base con los cuales comparar los resultados; la evaluación efectiva se planifica desde el diseño inicial del programa.',
  no:{
    1:'Es precisamente lo contrario: diseñar la evaluación al final impide recolectar los datos de línea base necesarios para comparar.',
    2:'Los datos de línea base sí son necesarios para poder comparar los resultados obtenidos contra el estado inicial del problema.',
    3:'El momento de diseño de la evaluación sí tiene una relación directa y crítica con la calidad de los datos disponibles para comparar.'
  },
  trampa:'Asumir que la evaluación puede diseñarse igual de efectivamente al final del programa que desde su diseño inicial.',
  obj:'Explicar por qué la evaluación de un programa comunitario debe planificarse desde su diseño inicial.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['datos de línea base','evaluación planificada desde el diseño']
},
{
  id:'U10-SC2-Q26', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Retroalimentación de la evaluación al ciclo gerencial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué debe ocurrir con los resultados de una evaluación de programa comunitario para que conserven su valor práctico completo?',
  ops:[
    'Deben retroalimentar el ajuste del programa o de futuros programas similares, retomando el ciclo gerencial de planificar-controlar', 'Los resultados de la evaluación deben archivarse sin generar ningún ajuste real, conservando así su rigor metodológico', 'Una evaluación rigurosa siempre conserva su valor práctico completo, sin importar si genera algún ajuste real o no', 'Los resultados de la evaluación nunca tienen ninguna relación real con el ciclo gerencial de planificar y controlar'],
  ok:0,
  clave:'Deben retroalimentar el ajuste del programa o de futuros programas similares, retomando el ciclo gerencial de planificar-controlar.',
  exp:'Los resultados de la evaluación, retomando el ciclo gerencial de planificar-controlar ya visto en Gerencia en Salud, deben retroalimentar el ajuste del programa o de futuros programas similares -una evaluación que se archiva sin generar ningún ajuste real pierde gran parte de su valor práctico.',
  no:{
    1:'Es precisamente lo contrario: archivar la evaluación sin generar ajuste real le hace PERDER, no conservar, su valor práctico.',
    2:'Una evaluación rigurosa que no genera ningún ajuste real pierde gran parte de su valor práctico, sin importar su rigor metodológico.',
    3:'Los resultados de la evaluación sí tienen una relación directa con el ciclo gerencial de planificar-controlar ya visto.'
  },
  trampa:'Asumir que el rigor metodológico de una evaluación es suficiente por sí solo, sin necesidad de que genere un ajuste real posterior.',
  obj:'Explicar la conexión entre los resultados de una evaluación y el ciclo gerencial de planificar-controlar ya visto.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['retroalimentación de la evaluación','ciclo gerencial planificar-controlar']
},
{
  id:'U10-SC2-Q27', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Actividad vs. impacto real',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la evaluación formal es la única forma confiable de distinguir un programa que genera actividad de uno que genera impacto real?',
  ops:[
    'Porque un programa puede tener alta asistencia y buena recepción de la comunidad sin haber logrado ningún cambio medible en el problema de salud original', 'La evaluación formal nunca es necesaria para distinguir entre un programa que genera actividad y uno que genera impacto real', 'La alta asistencia a las actividades de un programa siempre garantiza automáticamente un impacto real en el problema de salud', 'No existe ninguna diferencia real entre un programa que genera actividad y uno que genera impacto medible en el problema'],
  ok:0,
  clave:'Porque un programa puede tener alta asistencia y buena recepción de la comunidad sin haber logrado ningún cambio medible en el problema de salud original.',
  exp:'Un programa que parece exitoso desde la percepción de quienes lo ejecutan -alta asistencia, buena recepción de la comunidad- puede, sin embargo, no haber logrado ningún cambio medible en el problema de salud original; la evaluación formal es la única forma confiable de distinguir actividad de impacto real.',
  no:{
    1:'Es precisamente lo contrario: la evaluación formal SÍ es necesaria para distinguir confiablemente entre actividad e impacto real.',
    2:'La alta asistencia no garantiza automáticamente el impacto real; puede coexistir con la ausencia de cambio medible en el problema.',
    3:'Sí existe una diferencia real e importante entre un programa que genera actividad y uno que genera impacto medible verificable.'
  },
  trampa:'Asumir que la alta asistencia y la buena recepción de un programa garantizan automáticamente un impacto real en el problema de salud.',
  obj:'Explicar por qué la evaluación formal distingue confiablemente entre un programa que genera actividad y uno con impacto real.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['actividad vs. impacto real','evaluación formal confiable']
},
{
  id:'U10-SC2-Q28', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Consideración clínica sobre indicadores desde el diseño',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico participa en el diseño de un nuevo programa comunitario de control de hipertensión y le proponen definir los indicadores de evaluación una vez que el programa ya esté en marcha, varios meses después de iniciado.',
  enunciado:'¿Qué debería recomendar este médico, según lo visto sobre evaluación de programas comunitarios?',
  ops:[
    'Definir los indicadores de proceso y de resultado desde el diseño inicial del programa, con datos de línea base recolectados antes de iniciar', 'Aceptar la propuesta de definir los indicadores varios meses después, ya que el momento de definirlos nunca afecta la calidad de la evaluación', 'Recomendar que el programa nunca incluya ningún tipo de evaluación formal, confiando únicamente en la percepción del equipo', 'Esperar a que el programa finalice por completo antes de considerar siquiera la posibilidad de definir algún indicador'],
  ok:0,
  clave:'Definir los indicadores de proceso y de resultado desde el diseño inicial del programa, con datos de línea base recolectados antes de iniciar.',
  exp:'Un médico que participa en un programa comunitario debe insistir en definir indicadores de proceso y de resultado desde el diseño inicial, con datos de línea base, para poder evaluar honestamente si el programa funcionó y no solo si generó actividad.',
  no:{
    1:'Aceptar definir los indicadores meses después impide recolectar datos de línea base útiles para la comparación posterior.',
    2:'Un programa sin evaluación formal, confiando solo en percepción, contradice directamente la lógica de evaluación objetiva ya vista.',
    3:'Esperar hasta el final del programa para definir indicadores es precisamente el error ya identificado como frecuente.'
  },
  trampa:'Aceptar definir los indicadores de evaluación después de iniciado el programa, sin reconocer la pérdida de datos de línea base que esto implica.',
  obj:'Aplicar la recomendación apropiada sobre cuándo definir los indicadores de evaluación de un programa comunitario.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['consideración clínica','indicadores desde el diseño inicial']
},
{
  id:'U10-SC2-Q46', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Comparación contra el valor inicial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué comparar los resultados finales de un programa contra un valor de línea base es más informativo que reportar solo el valor final aislado?',
  ops:[
    'Porque el cambio real atribuible al programa solo puede estimarse comparando el estado antes y después, no observando el valor final por sí solo', 'Reportar únicamente el valor final aislado siempre aporta exactamente la misma información que compararlo contra la línea base', 'El valor de línea base nunca tiene ninguna relación real con la interpretación correcta de los resultados finales de un programa', 'Un valor final alto siempre indica éxito del programa, sin importar cuál haya sido el valor de línea base correspondiente'],
  ok:0,
  clave:'Porque el cambio real atribuible al programa solo puede estimarse comparando el estado antes y después, no observando el valor final por sí solo.',
  exp:'El cambio real atribuible a un programa solo puede estimarse comparando el estado antes (línea base) y después (resultado final); un valor final aislado, sin ese punto de comparación, no permite saber si hubo una mejora real ni de qué magnitud.',
  no:{
    1:'Es precisamente lo contrario: el valor final aislado aporta mucha menos información que la comparación contra la línea base.',
    2:'El valor de línea base sí tiene una relación directa y necesaria para interpretar correctamente el significado del resultado final.',
    3:'Un valor final alto no indica éxito por sí solo si la línea base ya era igual de alta, sin cambio real atribuible al programa.'
  },
  trampa:'Interpretar un valor final alto como éxito del programa sin compararlo contra el valor de línea base correspondiente.',
  obj:'Explicar por qué la comparación contra la línea base es más informativa que el valor final aislado.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['comparación contra línea base','cambio real atribuible al programa']
},
{
  id:'U10-SC2-Q47', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Factores externos que afectan el resultado',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Durante la ejecución de un programa comunitario de control de dengue, una campaña nacional independiente de fumigación se realiza simultáneamente en la misma zona.',
  enunciado:'¿Qué consideración es importante al interpretar la evaluación de resultado de este programa comunitario específico?',
  ops:[
    'Que la campaña nacional simultánea pudo haber contribuido también a la mejora observada, complicando atribuir el cambio exclusivamente al programa comunitario', 'La campaña nacional simultánea nunca tiene ninguna relación real con la interpretación de los resultados del programa comunitario', 'Cualquier mejora observada debe atribuirse exclusivamente al programa comunitario, sin considerar ningún otro factor externo', 'Esta situación no amerita ninguna consideración adicional especial al momento de interpretar la evaluación del programa'],
  ok:0,
  clave:'Que la campaña nacional simultánea pudo haber contribuido también a la mejora observada, complicando atribuir el cambio exclusivamente al programa comunitario.',
  exp:'Interpretar un solo indicador o resultado de forma aislada, sin considerar factores externos simultáneos, puede llevar a conclusiones equivocadas: una campaña nacional simultánea pudo haber contribuido también a la mejora observada, complicando atribuir el cambio exclusivamente al programa comunitario evaluado.',
  no:{
    1:'La campaña nacional simultánea sí tiene una relación real con la interpretación correcta de los resultados del programa.',
    2:'Atribuir la mejora exclusivamente al programa, ignorando un factor externo simultáneo relevante, es precisamente el error a evitar.',
    3:'Esta situación sí amerita una consideración adicional especial, dado el riesgo de atribución incorrecta del cambio observado.'
  },
  trampa:'Atribuir automáticamente toda la mejora observada al programa comunitario evaluado, sin considerar factores externos simultáneos relevantes.',
  obj:'Aplicar la consideración de factores externos simultáneos al interpretar la evaluación de resultado de un programa comunitario.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['factor externo simultáneo','atribución del cambio observado']
},
{
  id:'U10-SC2-Q48', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Evaluación como oportunidad de aprendizaje, no solo de rendición de cuentas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la evaluación de un programa comunitario debe entenderse también como una oportunidad de aprendizaje, y no únicamente como un mecanismo de rendición de cuentas?',
  ops:[
    'Porque permite identificar qué funcionó y qué no, generando información valiosa para mejorar el mismo programa o diseñar futuros programas más efectivos', 'La evaluación de un programa comunitario nunca aporta ninguna información útil para el diseño de futuros programas similares', 'Entender la evaluación como oportunidad de aprendizaje contradice directamente su función de rendición de cuentas institucional', 'La única función válida de la evaluación de un programa comunitario es determinar responsabilidades ante un posible fracaso'],
  ok:0,
  clave:'Porque permite identificar qué funcionó y qué no, generando información valiosa para mejorar el mismo programa o diseñar futuros programas más efectivos.',
  exp:'Retomando la idea de que los resultados de la evaluación deben retroalimentar el ajuste del programa, la evaluación cumple una función de aprendizaje institucional: identificar qué funcionó y qué no, generando información valiosa para mejorar el programa actual o diseñar futuros programas más efectivos.',
  no:{
    1:'La evaluación sí aporta información útil y valiosa para el diseño de futuros programas comunitarios similares.',
    2:'Ambas funciones (aprendizaje y rendición de cuentas) pueden coexistir; no son mutuamente contradictorias entre sí.',
    3:'Reducir la evaluación únicamente a determinar responsabilidades ante un fracaso ignora su valioso rol de aprendizaje institucional.'
  },
  trampa:'Reducir la función de la evaluación de un programa comunitario únicamente a la rendición de cuentas, sin reconocer su valor como aprendizaje institucional.',
  obj:'Explicar por qué la evaluación de un programa comunitario debe entenderse también como oportunidad de aprendizaje.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['evaluación como aprendizaje institucional','más allá de la rendición de cuentas']
},
{
  id:'U10-SC2-Q49', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Participación de la comunidad en la propia evaluación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es coherente, según la lógica de participación comunitaria ya vista, involucrar también a la comunidad en la etapa de evaluación de un programa, no solo en su diseño y ejecución?',
  ops:[
    'Porque la participación comunitaria genuina abarca cada etapa del proceso, incluida la evaluación, y la comunidad puede aportar una perspectiva que el equipo externo no capta por sí solo', 'La evaluación de un programa comunitario debe realizarse exclusivamente por el equipo de salud externo, sin ninguna participación real de la comunidad', 'Involucrar a la comunidad en la evaluación contradice directamente la lógica de participación comunitaria genuina ya vista en este bloque', 'La perspectiva de la comunidad nunca aporta ninguna información adicional relevante durante la etapa de evaluación de un programa'],
  ok:0,
  clave:'Porque la participación comunitaria genuina abarca cada etapa del proceso, incluida la evaluación, y la comunidad puede aportar una perspectiva que el equipo externo no capta por sí solo.',
  exp:'La participación comunitaria más profunda involucra a la comunidad en cada etapa: diagnóstico, diseño, ejecución y evaluación; en la etapa de evaluación, la comunidad puede aportar una perspectiva sobre el impacto real percibido que el equipo externo, con solo los indicadores cuantitativos, no siempre capta por sí solo.',
  no:{
    1:'Excluir a la comunidad de la evaluación contradice la lógica de participación en cada etapa ya vista en el tema anterior.',
    2:'Es precisamente lo contrario: involucrar a la comunidad en la evaluación es coherente con la lógica de participación genuina completa.',
    3:'La perspectiva de la comunidad sí puede aportar información relevante adicional que complementa los indicadores cuantitativos.'
  },
  trampa:'Asumir que la evaluación de un programa comunitario es una etapa exclusivamente técnica, sin lugar para la participación de la propia comunidad.',
  obj:'Explicar por qué es coherente involucrar a la comunidad también en la etapa de evaluación de un programa.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['participación en la evaluación','perspectiva comunitaria complementaria']
},
{
  id:'U10-SC2-Q50', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Evaluación de programas de salud comunitaria', sub:'Decisión institucional basada en evaluación',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'La evaluación formal de un programa comunitario, tras un año de ejecución, muestra indicadores de proceso aceptables pero indicadores de resultado claramente por debajo de lo esperado, sin ningún factor externo relevante identificado.',
  enunciado:'¿Qué decisión sería más coherente con la lógica de evaluación vista en este tema?',
  ops:[
    'Revisar y ajustar el diseño de las actividades del programa, ya que la evidencia sugiere que no están siendo efectivas para lograr el objetivo planteado', 'Continuar exactamente con el mismo diseño del programa de forma indefinida, sin realizar ningún ajuste basado en esta evaluación', 'Descontinuar inmediatamente el programa sin ningún análisis adicional sobre qué aspecto específico del diseño podría ajustarse', 'Ignorar por completo los resultados de esta evaluación formal, confiando únicamente en la percepción positiva del equipo ejecutor'],
  ok:0,
  clave:'Revisar y ajustar el diseño de las actividades del programa, ya que la evidencia sugiere que no están siendo efectivas para lograr el objetivo planteado.',
  exp:'Ante indicadores de proceso aceptables pero de resultado insuficientes, sin factor externo relevante, la evidencia señala que las actividades elegidas no son las más efectivas; la decisión coherente es revisar y ajustar su diseño, retroalimentando el ciclo de planificar-controlar ya visto, en vez de continuar sin cambios o descontinuar sin análisis.',
  no:{
    1:'Continuar sin ningún ajuste, a pesar de la evidencia de resultados insuficientes, contradice la lógica de retroalimentación ya vista.',
    2:'Descontinuar sin ningún análisis previo desperdicia la oportunidad de ajustar el diseño antes de abandonar el programa por completo.',
    3:'Ignorar los resultados formales de la evaluación, confiando solo en percepción, contradice directamente la lógica de evaluación objetiva.'
  },
  trampa:'Reaccionar de forma extrema (continuar sin cambios o descontinuar sin análisis) ante una evaluación desfavorable, en vez de ajustar el diseño con base en la evidencia.',
  obj:'Aplicar la decisión institucional coherente ante una evaluación con indicadores de proceso aceptables pero de resultado insuficientes.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 5.',
  tags:['decisión basada en evaluación','ajuste de diseño ante resultado insuficiente']
},
{
  id:'U10-SC2-Q29', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Qué hace a una población vulnerable',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué define a una población vulnerable en el contexto de la salud comunitaria?',
  ops:[
    'Un subgrupo dentro de la comunidad con riesgo desproporcionadamente mayor de problemas de salud o mayores barreras de acceso, debido a determinantes sociales adversos', 'Una población vulnerable es aquella que representa a la mayoría numérica de la comunidad, sin ninguna otra característica relevante', 'Cualquier subgrupo dentro de una comunidad se considera igualmente vulnerable, sin ninguna diferencia real de riesgo entre ellos', 'La vulnerabilidad en salud comunitaria nunca tiene ninguna relación real con los determinantes sociales ya estudiados previamente'],
  ok:0,
  clave:'Un subgrupo dentro de la comunidad con riesgo desproporcionadamente mayor de problemas de salud o mayores barreras de acceso, debido a determinantes sociales adversos.',
  exp:'Una población vulnerable, en el contexto de la salud comunitaria, es un subgrupo dentro de la comunidad que enfrenta un riesgo desproporcionadamente mayor de problemas de salud, o mayores barreras de acceso a los servicios, debido a una combinación de determinantes sociales adversos.',
  no:{
    1:'La vulnerabilidad no depende de ser mayoría numérica, sino del riesgo desproporcionado y las barreras de acceso que enfrenta el subgrupo.',
    2:'No todos los subgrupos enfrentan el mismo riesgo; la vulnerabilidad implica precisamente un riesgo desproporcionadamente mayor.',
    3:'La vulnerabilidad sí tiene una relación directa con los determinantes sociales adversos ya estudiados en bloques previos.'
  },
  trampa:'Confundir vulnerabilidad con tamaño numérico del subgrupo, o asumir que todos los subgrupos enfrentan el mismo nivel de riesgo.',
  obj:'Definir qué caracteriza a una población vulnerable en el contexto de la salud comunitaria.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['población vulnerable','determinantes sociales adversos']
},
{
  id:'U10-SC2-Q30', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Subgrupos invisibles en promedios generales',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un diagnóstico comunitario que solo reporta promedios generales puede ocultar la situación real de una población vulnerable?',
  ops:[
    'Porque una comunidad puede tener indicadores aceptables "en promedio" mientras un subgrupo específico enfrenta una situación considerablemente peor, oculta por ese promedio', 'Un diagnóstico comunitario basado en promedios generales siempre refleja con precisión la situación real de todos los subgrupos', 'Los promedios generales de una comunidad nunca pueden ocultar la situación real de ningún subgrupo específico dentro de ella', 'Las poblaciones vulnerables nunca quedan invisibles en un diagnóstico comunitario, sin importar cómo se reporten los datos'],
  ok:0,
  clave:'Porque una comunidad puede tener indicadores aceptables "en promedio" mientras un subgrupo específico enfrenta una situación considerablemente peor, oculta por ese promedio.',
  exp:'Estos subgrupos con frecuencia quedan invisibles en un diagnóstico comunitario que solo reporta promedios generales: una comunidad puede tener indicadores de salud aceptables "en promedio" mientras un subgrupo específico enfrenta una situación considerablemente peor, oculta precisamente por ese promedio.',
  no:{
    1:'Es precisamente lo contrario: un promedio general puede ocultar la situación considerablemente peor de un subgrupo vulnerable.',
    2:'Los promedios generales sí pueden ocultar la situación real de subgrupos específicos, siendo este el riesgo central señalado.',
    3:'Las poblaciones vulnerables sí pueden quedar invisibles cuando el diagnóstico solo reporta promedios generales sin desagregar.'
  },
  trampa:'Asumir que un diagnóstico comunitario basado en promedios generales refleja adecuadamente la situación de todos los subgrupos, incluidos los vulnerables.',
  obj:'Explicar por qué los promedios generales de un diagnóstico comunitario pueden ocultar la situación de poblaciones vulnerables.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['promedios generales que ocultan','subgrupo vulnerable invisible']
},
{
  id:'U10-SC2-Q31', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Equidad vs. igualdad en el diseño de programas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre igualdad y equidad en el diseño de un programa de salud comunitaria?',
  ops:[
    'La igualdad ofrece el mismo servicio a todos por igual; la equidad ajusta la intervención según la necesidad diferenciada de cada subgrupo, dando más a quienes enfrentan más barreras', 'Igualdad y equidad son exactamente el mismo concepto, sin ninguna diferencia real que amerite distinguirlos en el diseño', 'La equidad siempre implica ofrecer el mismo servicio a toda la comunidad por igual, sin ninguna distinción entre subgrupos', 'La igualdad siempre implica dar más recursos a quienes enfrentan mayores barreras, mientras la equidad ofrece lo mismo a todos'],
  ok:0,
  clave:'La igualdad ofrece el mismo servicio a todos por igual; la equidad ajusta la intervención según la necesidad diferenciada de cada subgrupo, dando más a quienes enfrentan más barreras.',
  exp:'La equidad en salud comunitaria implica que un programa no debe simplemente ofrecer el mismo servicio a toda la comunidad por igual (igualdad), sino ajustar la intervención según la necesidad diferenciada de cada subgrupo, dando más recursos o adaptaciones a quienes enfrentan mayores barreras (equidad).',
  no:{
    1:'Son conceptos claramente distintos, con implicaciones diferentes para el diseño de un programa comunitario equitativo.',
    2:'Es precisamente lo contrario: la EQUIDAD ajusta la intervención según necesidad diferenciada, no ofrece lo mismo a todos por igual.',
    3:'Está invertido: la EQUIDAD da más recursos a quienes enfrentan más barreras; la IGUALDAD ofrece lo mismo a todos, no al revés.'
  },
  trampa:'Confundir igualdad (mismo trato para todos) con equidad (trato diferenciado según necesidad), o invertir sus definiciones.',
  obj:'Distinguir el concepto de igualdad del de equidad en el diseño de un programa de salud comunitaria.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['equidad en salud comunitaria','diferencia con igualdad']
},
{
  id:'U10-SC2-Q32', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Conexión con determinantes sociales ya vistos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué principio ya visto sobre determinantes sociales de la salud se conecta directamente la equidad en el diseño de programas comunitarios?',
  ops:[
    'Que tratar igual a quienes parten de condiciones desiguales perpetúa, en vez de reducir, la brecha existente', 'Los determinantes sociales de la salud nunca tienen ninguna relación real con el principio de equidad en programas comunitarios', 'Tratar igual a quienes parten de condiciones desiguales siempre reduce, sin ninguna excepción, la brecha existente entre ellos', 'El principio de equidad en salud comunitaria es completamente independiente de cualquier idea ya vista sobre determinantes sociales'],
  ok:0,
  clave:'Que tratar igual a quienes parten de condiciones desiguales perpetúa, en vez de reducir, la brecha existente.',
  exp:'Este principio retoma directamente la lógica ya vista sobre determinantes sociales de la salud: tratar igual a quienes parten de condiciones desiguales perpetúa, en vez de reducir, la brecha existente -de ahí la importancia de la equidad, no solo la igualdad, en el diseño de programas.',
  no:{
    1:'Los determinantes sociales sí tienen una relación conceptual directa con el principio de equidad en el diseño de programas.',
    2:'Es precisamente lo contrario: tratar igual a quienes parten de condiciones desiguales PERPETÚA, no reduce, la brecha existente.',
    3:'Sí existe una conexión directa entre el principio de equidad y las ideas ya vistas sobre determinantes sociales de la salud.'
  },
  trampa:'Asumir que tratar a todos por igual siempre reduce las brechas existentes, sin reconocer que puede perpetuarlas cuando se parte de condiciones desiguales.',
  obj:'Identificar la conexión entre la equidad en programas comunitarios y el principio ya visto sobre determinantes sociales.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['conexión con determinantes sociales','brecha perpetuada por igualdad']
},
{
  id:'U10-SC2-Q33', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Estrategias específicas para subgrupos vulnerables',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un programa comunitario identifica, desde la etapa de diagnóstico, que un subgrupo de adultos mayores con movilidad reducida tiene menor acceso a sus actividades presenciales en un punto de encuentro central.',
  enunciado:'¿Qué estrategia sería más coherente con el principio de equidad visto en este tema?',
  ops:[
    'Diseñar visitas domiciliarias específicas para este subgrupo, en vez de asumir que la estrategia general funcionará igual de bien para todos', 'Mantener exactamente la misma estrategia general para toda la comunidad, sin ninguna adaptación específica para este subgrupo', 'Excluir formalmente a este subgrupo del programa, ya que su menor acceso indica que no forma parte de la población diana', 'Aumentar la frecuencia de las actividades en el mismo punto de encuentro central, sin ningún otro ajuste adicional'],
  ok:0,
  clave:'Diseñar visitas domiciliarias específicas para este subgrupo, en vez de asumir que la estrategia general funcionará igual de bien para todos.',
  exp:'Un programa comunitario bien diseñado identifica de forma explícita a los subgrupos vulnerables desde el diagnóstico, y diseña estrategias específicas para alcanzarlos -por ejemplo, visitas domiciliarias para quienes no pueden desplazarse- en vez de asumir que una estrategia única funcionará igual para toda la comunidad.',
  no:{
    1:'Mantener la misma estrategia general, sin adaptación, es precisamente el riesgo de exclusión ya señalado en este tema.',
    2:'Excluir a este subgrupo contradice directamente el principio de equidad, que busca precisamente alcanzar a quienes más lo necesitan.',
    3:'Aumentar la frecuencia en el mismo punto central no resuelve la barrera de movilidad reducida identificada en este subgrupo.'
  },
  trampa:'Mantener una estrategia única para toda la comunidad sin adaptarla a las barreras específicas de un subgrupo vulnerable identificado.',
  obj:'Aplicar una estrategia coherente con el principio de equidad ante un subgrupo vulnerable con barreras de acceso identificadas.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['estrategia específica para subgrupo','equidad aplicada']
},
{
  id:'U10-SC2-Q34', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Riesgo de exclusión no intencional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un programa que exige desplazarse a un punto de encuentro central en horario fijo puede excluir sin proponérselo a los subgrupos más vulnerables?',
  ops:[
    'Porque quienes tienen menor movilidad o menor flexibilidad horaria -con frecuencia los mismos subgrupos más vulnerables- quedan excluidos, mientras el programa es aprovechado por quienes ya tienen más recursos', 'Un programa que exige desplazarse a un punto central nunca genera ningún riesgo real de exclusión de ningún subgrupo específico', 'Los subgrupos más vulnerables siempre tienen la misma facilidad de acceso a un punto de encuentro central que cualquier otro subgrupo', 'Este tipo de diseño de programa siempre alcanza de forma equitativa a todos los subgrupos de la comunidad, sin ninguna excepción'],
  ok:0,
  clave:'Porque quienes tienen menor movilidad o menor flexibilidad horaria -con frecuencia los mismos subgrupos más vulnerables- quedan excluidos, mientras el programa es aprovechado por quienes ya tienen más recursos.',
  exp:'Un programa que exige desplazarse a un punto de encuentro central en horario fijo puede sin proponérselo excluir precisamente a quienes tienen menor movilidad o menor flexibilidad horaria -con frecuencia los mismos subgrupos más vulnerables que más se beneficiarían del programa.',
  no:{
    1:'Este tipo de diseño sí genera un riesgo real de exclusión no intencional de los subgrupos con menor movilidad o flexibilidad.',
    2:'Los subgrupos más vulnerables con frecuencia enfrentan MÁS barreras de acceso, no la misma facilidad, a un punto central fijo.',
    3:'Es precisamente lo contrario: este diseño puede excluir sin proponérselo a los subgrupos más vulnerables de la comunidad.'
  },
  trampa:'Asumir que un diseño de programa aparentemente neutral (punto central, horario fijo) alcanza a todos los subgrupos por igual, sin considerar barreras diferenciadas.',
  obj:'Explicar por qué un diseño de programa aparentemente neutral puede excluir sin proponérselo a los subgrupos vulnerables.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['exclusión no intencional','barrera de movilidad y horario']
},
{
  id:'U10-SC2-Q35', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Síntesis del bloque completo de Salud y Comunidad II',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué recorrido conceptual completo cierra este último tema del bloque de Salud y Comunidad II?',
  ops:[
    'Un programa bien diseñado, con participación genuina de todos los subgrupos, evaluado con indicadores desagregados por subgrupo, es la forma más efectiva de asegurar que alcanza a quienes más lo necesitan', 'Este tema no tiene ninguna relación real con los demás temas ya vistos previamente en el bloque de Salud y Comunidad II', 'El bloque de Salud y Comunidad II no sigue ningún recorrido conceptual coherente entre sus distintos temas', 'La atención a poblaciones vulnerables es un tema completamente aislado, sin ninguna conexión con el diseño o la evaluación de programas'],
  ok:0,
  clave:'Un programa bien diseñado, con participación genuina de todos los subgrupos, evaluado con indicadores desagregados por subgrupo, es la forma más efectiva de asegurar que alcanza a quienes más lo necesitan.',
  exp:'Este cierre conecta con el bloque completo: un programa de salud comunitaria bien diseñado, con participación genuina de todos los subgrupos, y evaluado con indicadores que reporten resultados desagregados por subgrupo, es la forma más efectiva de asegurar que el programa alcanza a quienes más lo necesitan.',
  no:{
    1:'Este tema sí tiene una relación conceptual directa de cierre con todos los demás temas ya vistos en el bloque.',
    2:'El bloque de Salud y Comunidad II sí sigue un recorrido conceptual coherente, del diseño hasta la atención a la vulnerabilidad.',
    3:'Este tema es precisamente el cierre conceptual del bloque, conectado con el diseño, la participación y la evaluación ya vistos.'
  },
  trampa:'No reconocer el rol de cierre conceptual que cumple este último tema respecto al recorrido completo del bloque de Salud y Comunidad II.',
  obj:'Explicar el rol de cierre conceptual que cumple el tema de poblaciones vulnerables dentro del bloque completo.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['síntesis del bloque','cierre conceptual']
},
{
  id:'U10-SC2-Q36', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Determinantes que suelen generar vulnerabilidad',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué combinación de determinantes sociales adversos suele generar mayor vulnerabilidad en un subgrupo comunitario?',
  ops:[
    'Pobreza extrema, aislamiento geográfico, discapacidad, edad avanzada, y pertenencia a un grupo étnico marginado', 'La vulnerabilidad en salud comunitaria nunca se relaciona con ningún determinante social específico identificable', 'Únicamente el nivel educativo formal determina la vulnerabilidad de un subgrupo, sin ninguna otra consideración relevante', 'Solo la edad avanzada determina la vulnerabilidad de un subgrupo dentro de una comunidad, sin ningún otro factor asociado'],
  ok:0,
  clave:'Pobreza extrema, aislamiento geográfico, discapacidad, edad avanzada, y pertenencia a un grupo étnico marginado.',
  exp:'Una población vulnerable enfrenta un riesgo desproporcionadamente mayor debido a una combinación de determinantes sociales adversos -pobreza extrema, aislamiento geográfico, discapacidad, edad avanzada, pertenencia a un grupo étnico marginado, entre otros ya vistos en el bloque de determinantes sociales.',
  no:{
    1:'La vulnerabilidad sí se relaciona con determinantes sociales identificables específicos, no es un concepto sin base identificable.',
    2:'El nivel educativo es solo uno de varios determinantes posibles, no el único factor relevante para la vulnerabilidad.',
    3:'La edad avanzada es solo uno de varios determinantes posibles, no el único factor asociado a la vulnerabilidad de un subgrupo.'
  },
  trampa:'Reducir la vulnerabilidad a un solo determinante aislado, sin reconocer que suele resultar de una combinación de determinantes adversos.',
  obj:'Identificar la combinación de determinantes sociales adversos que suele generar vulnerabilidad en un subgrupo comunitario.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['determinantes sociales adversos','combinación de factores de vulnerabilidad']
},
{
  id:'U10-SC2-Q37', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Consideración clínica final sobre exclusión de subgrupos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico participa en el diseño de un nuevo programa comunitario y, siguiendo lo visto en este tema, se pregunta explícitamente quién dentro de la comunidad podría quedar excluido por el diseño propuesto.',
  enunciado:'¿Qué conducta corresponde a esta pregunta que se plantea el médico?',
  ops:[
    'Ajustar la estrategia del programa para alcanzar específicamente a los subgrupos más vulnerables, no solo a quienes participan con mayor facilidad', 'Esta pregunta no tiene ninguna utilidad práctica real para el diseño de un programa de salud comunitaria efectivo', 'El médico debería ignorar esta pregunta y diseñar el programa exclusivamente para quienes participan con mayor facilidad', 'Plantearse esta pregunta siempre implica, de forma automática, excluir formalmente a la mayoría de la comunidad del programa'],
  ok:0,
  clave:'Ajustar la estrategia del programa para alcanzar específicamente a los subgrupos más vulnerables, no solo a quienes participan con mayor facilidad.',
  exp:'Un médico que diseña o participa en un programa comunitario debe preguntarse explícitamente quién dentro de la comunidad podría quedar excluido por el diseño elegido, y ajustar la estrategia para alcanzar específicamente a los subgrupos más vulnerables, no solo a quienes participan con mayor facilidad.',
  no:{
    1:'Esta pregunta sí tiene una utilidad práctica central: orienta el ajuste de la estrategia hacia una mayor equidad de alcance.',
    2:'Diseñar exclusivamente para quienes participan con mayor facilidad contradice directamente el principio de equidad ya visto.',
    3:'Plantearse esta pregunta busca precisamente incluir a más subgrupos, no excluir formalmente a la mayoría de la comunidad.'
  },
  trampa:'Considerar que preguntarse quién podría quedar excluido es un ejercicio sin utilidad práctica real para el diseño del programa.',
  obj:'Aplicar la conducta apropiada de un médico que se pregunta explícitamente quién podría quedar excluido de un programa comunitario.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['consideración clínica','pregunta sobre exclusión del diseño']
},
{
  id:'U10-SC2-Q38', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Datos desagregados por subgrupo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la evaluación de un programa comunitario debe reportar resultados desagregados por subgrupo, y no solo promedios generales?',
  ops:[
    'Porque un promedio general puede ocultar que el programa no logró ningún impacto real en un subgrupo vulnerable específico, aunque el promedio global mejore', 'Reportar resultados desagregados por subgrupo nunca aporta ninguna información adicional útil más allá del promedio general', 'Un promedio general siempre refleja con precisión el impacto real del programa en cada subgrupo de la comunidad por igual', 'La desagregación de resultados por subgrupo es relevante únicamente para fines administrativos, sin ninguna utilidad clínica real'],
  ok:0,
  clave:'Porque un promedio general puede ocultar que el programa no logró ningún impacto real en un subgrupo vulnerable específico, aunque el promedio global mejore.',
  exp:'Retomando la idea de que los subgrupos vulnerables pueden quedar invisibles en un promedio general, la evaluación de un programa comunitario debe reportar resultados desagregados por subgrupo, para verificar que el programa efectivamente alcanzó y benefició a quienes más lo necesitaban, no solo al promedio.',
  no:{
    1:'Es precisamente lo contrario: la desagregación aporta información adicional crítica que el promedio general puede ocultar.',
    2:'Un promedio general puede mejorar globalmente mientras un subgrupo vulnerable específico no experimenta ningún beneficio real.',
    3:'La desagregación de resultados por subgrupo tiene una utilidad clínica real directa, no solo administrativa, para evaluar equidad.'
  },
  trampa:'Asumir que un promedio general de resultados es suficiente para evaluar si un programa benefició realmente a los subgrupos vulnerables.',
  obj:'Explicar por qué la evaluación de un programa comunitario debe reportar resultados desagregados por subgrupo.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['datos desagregados por subgrupo','ocultamiento en promedio general']
},
{
  id:'U10-SC2-Q39', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Adaptación de materiales para barreras de alfabetización',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un programa comunitario de educación en salud utiliza únicamente materiales escritos extensos para comunicar su mensaje principal a toda la comunidad.',
  enunciado:'¿Qué riesgo de equidad presenta este diseño, y qué ajuste sería coherente con lo visto en este tema?',
  ops:[
    'Puede excluir a quienes tienen barreras de alfabetización; sería coherente adaptar los materiales con formatos accesibles adicionales para ese subgrupo', 'Este diseño no presenta ningún riesgo real de exclusión para ningún subgrupo específico de la comunidad', 'El único ajuste coherente sería eliminar por completo los materiales escritos, sin ofrecer ninguna alternativa adicional', 'Los materiales escritos extensos siempre son igual de accesibles para todos los subgrupos de cualquier comunidad'],
  ok:0,
  clave:'Puede excluir a quienes tienen barreras de alfabetización; sería coherente adaptar los materiales con formatos accesibles adicionales para ese subgrupo.',
  exp:'En la práctica, esto significa diseñar estrategias específicas para subgrupos con barreras particulares -como materiales adaptados para quienes tienen barreras de alfabetización- en vez de asumir que una estrategia única (materiales escritos extensos) funcionará igual de bien para toda la comunidad.',
  no:{
    1:'Este diseño sí presenta un riesgo real de exclusión para quienes tienen barreras de alfabetización dentro de la comunidad.',
    2:'Eliminar los materiales escritos sin ofrecer alternativas no es la solución; adaptar formatos adicionales es la estrategia coherente.',
    3:'Los materiales escritos extensos no son igualmente accesibles para todos; algunos subgrupos enfrentan barreras de alfabetización.'
  },
  trampa:'Asumir que un único formato de comunicación (materiales escritos extensos) alcanza por igual a toda la comunidad, sin considerar barreras de alfabetización.',
  obj:'Aplicar un ajuste de diseño coherente con la equidad ante un riesgo de exclusión por barrera de alfabetización.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['barrera de alfabetización','materiales adaptados']
},
{
  id:'U10-SC2-Q40', programa:'unirm', cuatri:10,
  esp:'Salud y Comunidad II', tema:'Salud comunitaria en poblaciones vulnerables', sub:'Vulnerabilidad como concepto relativo al contexto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la identificación de subgrupos vulnerables debe realizarse específicamente para cada comunidad, en vez de asumir una lista universal fija?',
  ops:[
    'Porque los determinantes sociales adversos relevantes y su combinación específica pueden variar considerablemente de una comunidad a otra', 'Existe una lista universal fija de subgrupos vulnerables que aplica exactamente igual a cualquier comunidad, sin ninguna variación', 'La identificación de subgrupos vulnerables nunca depende del contexto específico de cada comunidad en particular', 'Los determinantes sociales adversos siempre son idénticos entre comunidades, sin ninguna variación relevante entre contextos'],
  ok:0,
  clave:'Porque los determinantes sociales adversos relevantes y su combinación específica pueden variar considerablemente de una comunidad a otra.',
  exp:'La identificación de subgrupos vulnerables debe realizarse específicamente para cada comunidad -retomando el diagnóstico comunitario ya visto en Salud y Comunidad I-, porque los determinantes sociales adversos relevantes y su combinación específica pueden variar considerablemente de un contexto a otro.',
  no:{
    1:'No existe una lista universal fija; la combinación de determinantes relevantes varía según el contexto específico de cada comunidad.',
    2:'La identificación de subgrupos vulnerables sí depende del contexto específico, no puede asumirse de forma genérica y universal.',
    3:'Los determinantes sociales adversos sí pueden variar considerablemente entre comunidades, según su contexto específico particular.'
  },
  trampa:'Asumir que existe una lista universal fija de subgrupos vulnerables aplicable de igual forma a cualquier comunidad, sin considerar el contexto específico.',
  obj:'Explicar por qué la identificación de subgrupos vulnerables debe realizarse específicamente para cada comunidad.',
  ref:'OPS, Manual de Planificación de Programas de Salud Comunitaria, cap. 6.',
  tags:['vulnerabilidad relativa al contexto','diagnóstico específico por comunidad']
}

]);
