/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE SOPORTE VITAL (2/2)
   Continua unirm-09-banco-14.js. Amplia Soporte Vital Basico y
   Avanzado de 1 a 50 preguntas. Esta parte cubre obstruccion de
   via aerea por cuerpo extrano, RCP pediatrica y evaluacion
   inicial del trauma (temas 5-7).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U9-SV-Q30', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Obstrucción de vía aérea por cuerpo extraño', sub:'Obstrucción leve vs. severa',
  dif:1, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una persona se atraganta durante la comida, pero puede toser con fuerza y hablar entrecortadamente.',
  enunciado:'¿Qué conducta es la correcta ante esta obstrucción?',
  ops:[
    'Animarla a seguir tosiendo, sin intervenir físicamente, porque es una obstrucción leve donde el aire todavía pasa parcialmente',
    'Aplicar de inmediato la maniobra de Heimlich, sin esperar a ver si la tos resuelve la obstrucción por sí sola', 'Golpear la espalda con fuerza de inmediato, antes de evaluar si la persona puede toser', 'No hacer nada y esperar a que llegue ayuda especializada, sin animar a la persona a toser'],
  ok:0,
  clave:'Animarla a seguir tosiendo, porque es una obstrucción leve donde el aire todavía pasa parcialmente y la tos es el mecanismo más eficaz.',
  exp:'Si la persona puede toser con fuerza y hablar, se trata de una obstrucción leve (el flujo de aire todavía pasa parcialmente alrededor del cuerpo extraño); en ese caso se anima a la persona a seguir tosiendo, que es el mecanismo natural más eficaz para expulsar el cuerpo extraño, generando una presión mucho mayor que cualquier maniobra externa. Intervenir físicamente en ese momento puede convertir una obstrucción parcial en una completa.',
  no:{
    1:'Aplicar la maniobra de Heimlich está reservado para la obstrucción SEVERA, no la leve; intervenir en este momento puede empeorar la obstrucción.',
    2:'Golpear la espalda sin evaluar primero si la persona puede toser efectivamente puede convertir una obstrucción parcial en una completa.',
    3:'Animar activamente a la persona a toser es la conducta correcta en una obstrucción leve, no la pasividad total.'
  },
  trampa:'Intervenir físicamente ante una obstrucción leve, cuando la conducta correcta es animar a la persona a resolverla ella misma con la tos.',
  obj:'Aplicar el criterio de la tos para distinguir una obstrucción leve de una severa y decidir la conducta correcta.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['obstrucción leve','tos efectiva','atragantamiento']
},
{
  id:'U9-SV-Q31', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Obstrucción de vía aérea por cuerpo extraño', sub:'Signo universal de atragantamiento',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el signo universal que indica una obstrucción severa de la vía aérea por cuerpo extraño?',
  ops:['Llevarse las manos al cuello, sin poder emitir sonido ni toser de forma efectiva', 'Toser repetidamente con fuerza mientras se puede hablar con normalidad', 'Presentar una coloración de la piel completamente normal, sin ningún otro signo', 'Respirar con normalidad, sin ninguna dificultad aparente'],
  ok:0,
  clave:'Llevarse las manos al cuello, sin poder emitir sonido ni toser de forma efectiva, es el signo universal de obstrucción severa.',
  exp:'Cuando la persona no puede emitir sonido ni toser de forma efectiva, llevándose las manos al cuello -el signo universal de atragantamiento-, se trata de una obstrucción severa, donde el flujo de aire está prácticamente bloqueado por completo, y se requiere intervención inmediata con la maniobra de Heimlich.',
  no:{
    1:'Toser con fuerza mientras se puede hablar es, precisamente, el signo de una obstrucción LEVE, no severa.',
    2:'Una obstrucción severa de la vía aérea típicamente se acompaña de signos de hipoxia progresiva, no de una coloración de piel completamente normal.',
    3:'Una obstrucción severa se caracteriza precisamente por la incapacidad de respirar con normalidad, no por la ausencia de dificultad.'
  },
  trampa:'Confundir el signo de obstrucción severa (manos al cuello, sin sonido) con el de obstrucción leve (tos efectiva, puede hablar).',
  obj:'Identificar el signo universal de una obstrucción severa de la vía aérea por cuerpo extraño.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['signo universal de atragantamiento','obstrucción severa']
},
{
  id:'U9-SV-Q32', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Obstrucción de vía aérea por cuerpo extraño', sub:'Mecanismo de la maniobra de Heimlich',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo logra la maniobra de Heimlich expulsar un cuerpo extraño de la vía aérea?',
  ops:[
    'Genera un aumento súbito de la presión dentro del abdomen y el tórax, empujando el aire residual de los pulmones hacia arriba con fuerza suficiente para expulsar el cuerpo extraño',
    'Introduce aire nuevo directamente hacia los pulmones del paciente, similar a una ventilación con bolsa mascarilla', 'Extrae físicamente el cuerpo extraño con los dedos del reanimador, sin generar ningún cambio de presión', 'Reduce la presión dentro del tórax, generando un vacío que succiona el cuerpo extraño hacia afuera'],
  ok:0,
  clave:'Genera un aumento súbito de la presión dentro del abdomen y el tórax, empujando el aire residual de los pulmones hacia arriba con fuerza suficiente para expulsar el cuerpo extraño.',
  exp:'La maniobra de Heimlich (compresiones abdominales) genera un aumento súbito de la presión dentro del abdomen y el tórax, empujando el aire residual de los pulmones hacia arriba con fuerza suficiente para expulsar el cuerpo extraño, de forma similar a un golpe de tos artificial y forzado, aprovechando el aire que ya está dentro de los pulmones en vez de intentar introducir aire nuevo.',
  no:{
    1:'La maniobra de Heimlich no introduce aire nuevo; aprovecha el aire RESIDUAL ya presente en los pulmones, empujándolo hacia arriba.',
    2:'La maniobra genera un cambio de presión que expulsa el cuerpo extraño con el aire residual; no es una extracción manual directa con los dedos.',
    3:'Es precisamente lo contrario: la maniobra AUMENTA (no reduce) la presión dentro del abdomen y el tórax, empujando el aire hacia arriba.'
  },
  trampa:'Confundir el mecanismo de la maniobra de Heimlich (aumento de presión que empuja aire residual) con una ventilación o una extracción manual directa.',
  obj:'Explicar el mecanismo fisiológico por el cual la maniobra de Heimlich expulsa un cuerpo extraño de la vía aérea.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['maniobra de Heimlich','presión abdominal','aire residual']
},
{
  id:'U9-SV-Q33', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Obstrucción de vía aérea por cuerpo extraño', sub:'Posición correcta de la maniobra de Heimlich',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Dónde se colocan los puños entrelazados del reanimador al aplicar la maniobra de Heimlich en un adulto consciente?',
  ops:['Justo por encima del ombligo y por debajo del esternón', 'Directamente sobre el esternón, en el centro del pecho', 'En la espalda, entre los omóplatos del paciente', 'Justo debajo del ombligo, sobre la pelvis del paciente'],
  ok:0,
  clave:'Los puños se colocan justo por encima del ombligo y por debajo del esternón.',
  exp:'Se coloca al reanimador detrás de la persona, con los puños entrelazados justo por encima del ombligo y por debajo del esternón, aplicando compresiones firmes y rápidas hacia adentro y hacia arriba, repitiendo la maniobra hasta que el objeto sea expulsado o la persona pierda el conocimiento.',
  no:{
    1:'El centro del pecho (sobre el esternón) es el punto de las compresiones torácicas de la RCP, no de la maniobra de Heimlich.',
    2:'La posición en la espalda corresponde a los golpes interescapulares, una técnica distinta, no la posición estándar de la maniobra de Heimlich en un adulto consciente.',
    3:'Colocar los puños debajo del ombligo, sobre la pelvis, no genera el mismo efecto de presión hacia el tórax que la posición correcta por encima del ombligo.'
  },
  trampa:'Confundir la posición de la maniobra de Heimlich con la de las compresiones torácicas de la RCP, dos técnicas con puntos de aplicación distintos.',
  obj:'Recordar la posición correcta de las manos al aplicar la maniobra de Heimlich en un adulto consciente.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['maniobra de Heimlich','posición de las manos','técnica correcta']
},
{
  id:'U9-SV-Q34', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Obstrucción de vía aérea por cuerpo extraño', sub:'Transición a RCP básica tras pérdida de conciencia',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una persona con obstrucción severa de la vía aérea pierde el conocimiento mientras se le aplicaba la maniobra de Heimlich.',
  enunciado:'¿Qué conducta se sigue a partir de este momento, y con qué particularidad respecto a la RCP básica estándar?',
  ops:[
    'Se pasa directamente a la secuencia de RCP básica, revisando la boca antes de cada intento de ventilación, buscando el objeto que causó la obstrucción, si se hizo visible',
    'Se debe suspender toda intervención, ya que la pérdida de conocimiento indica que ya no hay nada que hacer por la persona', 'Se continúa exclusivamente con la maniobra de Heimlich, sin pasar en ningún momento a la secuencia de RCP básica', 'Se inicia la RCP básica exactamente igual que en cualquier otro paciente, sin ninguna particularidad adicional'],
  ok:0,
  clave:'Se pasa a la secuencia de RCP básica, revisando la boca antes de cada intento de ventilación, buscando el objeto que causó la obstrucción.',
  exp:'Si la persona pierde el conocimiento durante una obstrucción severa, se pasa directamente a la secuencia de RCP básica ya vista, con una particularidad importante: revisar la boca antes de cada intento de ventilación, buscando el objeto que causó la obstrucción, si se hizo visible durante las compresiones -las compresiones torácicas de la RCP, de hecho, pueden generar suficiente presión para desplazar el cuerpo extraño hacia una posición más visible o incluso expulsarlo.',
  no:{
    1:'La pérdida de conocimiento no significa que ya no haya nada que hacer; se pasa activamente a la secuencia de RCP básica.',
    2:'La maniobra de Heimlich es específica para un paciente CONSCIENTE; al perder el conocimiento se cambia a la secuencia de RCP básica.',
    3:'Existe una particularidad específica en este escenario: revisar la boca antes de cada ventilación, buscando el objeto causante, algo no presente en la RCP básica estándar sin sospecha de cuerpo extraño.'
  },
  trampa:'No reconocer la particularidad específica (revisar la boca buscando el objeto) que distingue esta transición de una RCP básica estándar sin sospecha de cuerpo extraño.',
  obj:'Explicar la conducta y la particularidad al pasar de la maniobra de Heimlich a la RCP básica tras la pérdida de conciencia.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['transición a RCP básica','pérdida de conocimiento','revisión de la boca']
},
{
  id:'U9-SV-Q35', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Obstrucción de vía aérea por cuerpo extraño', sub:'Riesgo de intervenir en obstrucción leve',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué intervenir físicamente (por ejemplo, con golpes en la espalda) durante una obstrucción LEVE puede empeorar la situación?',
  ops:[
    'Puede convertir una obstrucción parcial (donde el aire todavía pasa) en una completa, al desplazar el objeto hacia una posición que bloquee por completo la vía aérea',
    'Intervenir físicamente durante una obstrucción leve siempre mejora la situación, sin ningún riesgo asociado', 'La tos natural de la persona nunca es más efectiva que una intervención física externa para expulsar el cuerpo extraño', 'No existe ninguna diferencia real de riesgo entre intervenir en una obstrucción leve o en una severa'],
  ok:0,
  clave:'Puede convertir una obstrucción parcial en una completa, al desplazar el objeto hacia una posición que bloquee por completo la vía aérea.',
  exp:'Intervenir físicamente durante una obstrucción leve -mientras la persona todavía tose con fuerza y el aire pasa parcialmente- puede convertir una obstrucción parcial en una completa, empujando el objeto más profundamente en vez de expulsarlo; la tos natural genera una presión mucho mayor y más controlada que cualquier maniobra externa, por lo que se prefiere dejar que la persona la use como mecanismo de resolución antes de intervenir.',
  no:{
    1:'Intervenir en una obstrucción leve conlleva un riesgo real de empeorar la situación, precisamente el punto central de esta pregunta.',
    2:'Es precisamente lo contrario: la tos natural genera una presión MAYOR y más efectiva que una intervención externa en una obstrucción leve.',
    3:'Sí existe una diferencia real de riesgo: intervenir en una obstrucción leve puede empeorarla, mientras que en una severa la intervención es necesaria y correcta.'
  },
  trampa:'No reconocer el riesgo real de convertir una obstrucción parcial en completa al intervenir físicamente cuando la persona todavía puede toser efectivamente.',
  obj:'Explicar el riesgo de intervenir físicamente durante una obstrucción leve de la vía aérea.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['riesgo de intervención','obstrucción parcial a completa','tos natural']
},
{
  id:'U9-SV-Q36', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Obstrucción de vía aérea por cuerpo extraño', sub:'Conexión entre temas del bloque',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ilustra la transición de la maniobra de Heimlich a la RCP básica sobre cómo se relacionan los distintos temas de este bloque?',
  ops:[
    'Que no son protocolos aislados, sino una secuencia continua que se adapta según cómo evoluciona el estado del paciente frente al reanimador',
    'Que cada tema del bloque de Soporte Vital debe aplicarse de forma completamente aislada, sin ninguna relación con los demás', 'Que la maniobra de Heimlich siempre reemplaza por completo a la RCP básica, sin ninguna transición posible entre ambas', 'Que los temas del bloque de Soporte Vital no tienen ninguna aplicación práctica combinada en un mismo paciente'],
  ok:0,
  clave:'Que no son protocolos aislados, sino una secuencia continua que se adapta según cómo evoluciona el estado del paciente frente al reanimador.',
  exp:'Esta transición de la maniobra de Heimlich a la RCP básica es un buen ejemplo de cómo los distintos temas del bloque se conectan en la práctica real: no son protocolos aislados, sino una secuencia continua que se adapta según cómo evoluciona el estado del paciente frente al reanimador -el mismo principio de secuencia adaptativa que atraviesa todo el bloque de Soporte Vital.',
  no:{
    1:'Precisamente lo contrario: los temas del bloque están interconectados y se aplican de forma secuencial según evoluciona el paciente, no de forma aislada.',
    2:'Existe una transición real y bien definida entre ambos protocolos, según el estado de conciencia del paciente; uno no reemplaza automáticamente al otro sin transición.',
    3:'Los temas del bloque sí tienen una aplicación práctica combinada, como ilustra precisamente este ejemplo de transición entre dos protocolos.'
  },
  trampa:'No reconocer que los distintos temas del bloque de Soporte Vital forman una secuencia adaptativa continua, en vez de protocolos completamente aislados.',
  obj:'Explicar cómo la transición entre la maniobra de Heimlich y la RCP básica ilustra la interconexión de los temas del bloque.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['interconexión de temas','secuencia adaptativa','protocolos de reanimación']
},
{
  id:'U9-SV-Q37', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Reanimación cardiopulmonar pediátrica', sub:'Causa más frecuente del paro pediátrico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la causa más frecuente de paro cardíaco en un niño, a diferencia de lo que ocurre típicamente en un adulto?',
  ops:[
    'Una falla RESPIRATORIA que progresa hasta el paro cardíaco, no un problema cardíaco primario como en el adulto',
    'Un problema cardíaco primario, como una arritmia por enfermedad coronaria, igual que en el adulto', 'El paro pediátrico nunca tiene una causa identificable con mayor frecuencia que otra', 'Una causa genética congénita es, con mucho, la causa más frecuente de paro en niños sanos'],
  ok:0,
  clave:'Una falla respiratoria que progresa hasta el paro cardíaco, a diferencia del problema cardíaco primario típico del adulto.',
  exp:'El paro pediátrico casi nunca se origina, como en el adulto, por un problema cardíaco primario (una arritmia por enfermedad coronaria, por ejemplo, poco frecuente en niños sanos): con mucha más frecuencia se origina por una falla RESPIRATORIA que progresa hasta el paro cardíaco -por asfixia, por una enfermedad respiratoria severa, retomando la insuficiencia respiratoria ya vista en Fisiopatología-, así que en un niño el corazón suele fallar como consecuencia final de la falta de oxígeno, no como el problema inicial.',
  no:{
    1:'Es precisamente lo contrario: en el niño, un problema cardíaco primario como una arritmia coronaria es mucho MENOS frecuente que en el adulto.',
    2:'El paro pediátrico sí tiene una causa más frecuente identificable: la falla respiratoria que progresa hasta el paro, no la ausencia de un patrón predominante.',
    3:'Una causa genética congénita puede ocurrir, pero la causa más frecuente del paro pediátrico es la falla respiratoria progresiva, no una causa genética.'
  },
  trampa:'Asumir que el paro pediátrico se origina, como en el adulto, principalmente por un problema cardíaco primario, ignorando el origen respiratorio predominante en niños.',
  obj:'Identificar la falla respiratoria como la causa más frecuente del paro cardíaco pediátrico, a diferencia del adulto.',
  ref:'American Heart Association, Guías de RCP y ACE Pediátrico.',
  tags:['paro pediátrico','causa respiratoria','diferencia con el adulto']
},
{
  id:'U9-SV-Q38', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Reanimación cardiopulmonar pediátrica', sub:'Por qué la ventilación pesa más en niños',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las guías de RCP pediátrica dan más peso relativo a la ventilación que las guías del adulto?',
  ops:[
    'Porque corregir la causa respiratoria de fondo es, en este grupo de edad, más determinante para la sobrevida que en el adulto',
    'La ventilación no tiene ninguna relevancia particular en la RCP pediátrica, igual que en el adulto', 'Las guías de RCP pediátrica y las del adulto dan exactamente el mismo peso relativo a la ventilación', 'En el adulto, las guías actuales dan más peso a la ventilación que en el niño'],
  ok:0,
  clave:'Corregir la causa respiratoria de fondo es, en este grupo de edad, más determinante para la sobrevida que en el adulto.',
  exp:'Precisamente por el origen respiratorio más frecuente del paro pediátrico, las guías de RCP pediátrica dan más peso relativo a la ventilación -a diferencia del adulto, donde las guías actuales priorizan las compresiones continuas incluso por encima de la ventilación-: la relación compresión ventilación en niños incluye ventilaciones de rescate de forma más prominente, porque corregir la causa respiratoria de fondo es, en este grupo de edad, más determinante para la sobrevida que en el adulto.',
  no:{
    1:'La ventilación sí tiene una relevancia particular y documentada en la RCP pediátrica, precisamente por el origen respiratorio predominante del paro en niños.',
    2:'Es precisamente lo contrario: las guías pediátricas dan MÁS peso a la ventilación que las del adulto, no el mismo peso.',
    3:'Es al revés: en el ADULTO se priorizan las compresiones continuas por encima de la ventilación, mientras que en el niño la ventilación pesa más.'
  },
  trampa:'Invertir la comparación entre el peso relativo de la ventilación en la RCP pediátrica frente a la del adulto.',
  obj:'Explicar por qué las guías de RCP pediátrica dan más peso relativo a la ventilación que las del adulto.',
  ref:'American Heart Association, Guías de RCP y ACE Pediátrico.',
  tags:['RCP pediátrica','peso de la ventilación','relación compresión ventilación']
},
{
  id:'U9-SV-Q39', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Reanimación cardiopulmonar pediátrica', sub:'Ajuste técnico de las compresiones en niños',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia técnica adicional tiene la RCP pediátrica respecto a la del adulto, más allá del peso relativo de la ventilación?',
  ops:[
    'Se ajusta tanto la profundidad como el punto de aplicación de las compresiones según el tamaño corporal del niño',
    'La técnica de las compresiones torácicas es exactamente idéntica en niños y adultos, sin ningún ajuste necesario', 'En niños nunca se aplican compresiones torácicas, solo ventilaciones de rescate', 'La profundidad de las compresiones en niños siempre debe ser mayor que en un adulto, sin importar el tamaño corporal'],
  ok:0,
  clave:'Se ajusta tanto la profundidad como el punto de aplicación de las compresiones según el tamaño corporal del niño.',
  exp:'Esta diferencia también se refleja en la técnica de las compresiones: en lactantes y niños pequeños se ajusta tanto la profundidad como el punto de aplicación de las compresiones según el tamaño corporal, algo que en el adulto es mucho más estandarizado, dado el rango de tamaños corporales mucho más variable entre un lactante y un adolescente.',
  no:{
    1:'La técnica de las compresiones sí requiere ajustes específicos en niños, según su tamaño corporal, a diferencia del adulto donde está más estandarizada.',
    2:'Las compresiones torácicas sí se aplican en niños, ajustadas a su tamaño; no se limita la RCP pediátrica solo a ventilaciones.',
    3:'La profundidad de las compresiones en niños se ajusta según su tamaño corporal específico, no es uniformemente mayor que en un adulto en todos los casos.'
  },
  trampa:'Asumir que la técnica de las compresiones torácicas es idéntica entre niños y adultos, o que la RCP pediátrica prescinde de las compresiones.',
  obj:'Explicar el ajuste técnico de las compresiones torácicas según el tamaño corporal en la RCP pediátrica.',
  ref:'American Heart Association, Guías de RCP y ACE Pediátrico.',
  tags:['ajuste técnico','tamaño corporal','compresiones en niños']
},
{
  id:'U9-SV-Q40', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Reanimación cardiopulmonar pediátrica', sub:'La ventana antes del paro completo',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es especialmente importante reconocer los signos de deterioro respiratorio en un niño ANTES de que progrese a un paro completo?',
  ops:[
    'Porque intervenir en esa ventana, antes del paro cardíaco, tiene un pronóstico considerablemente mejor que esperar a que el corazón ya haya fallado por completo',
    'Reconocer el deterioro respiratorio temprano no tiene ninguna ventaja real sobre esperar a que ocurra el paro completo', 'En un niño, el corazón siempre falla antes de que aparezca cualquier signo de dificultad respiratoria', 'El pronóstico de un niño es exactamente el mismo, se intervenga antes o después del paro cardíaco completo'],
  ok:0,
  clave:'Intervenir en esa ventana, antes del paro cardíaco, tiene un pronóstico considerablemente mejor que esperar a que el corazón ya haya fallado por completo.',
  exp:'En un niño, hay con frecuencia una ventana de tiempo donde la falla respiratoria ya es evidente (dificultad para respirar, coloración anormal de la piel, disminución del nivel de alerta) pero el corazón todavía no ha fallado -intervenir en esa ventana, antes del paro cardíaco, tiene un pronóstico considerablemente mejor que esperar a que el corazón ya haya fallado por completo, justificando que buena parte del entrenamiento en reanimación pediátrica se enfoque en reconocer ese deterioro temprano.',
  no:{
    1:'Reconocer el deterioro respiratorio temprano sí ofrece una ventaja pronóstica real y documentada, precisamente el punto central de esta pregunta.',
    2:'Existe una ventana de tiempo donde la falla respiratoria ya es evidente pero el corazón todavía no ha fallado; no ocurren simultáneamente.',
    3:'El pronóstico es considerablemente MEJOR si se interviene antes del paro completo, durante la ventana de deterioro respiratorio evidente.'
  },
  trampa:'Subestimar el valor pronóstico de intervenir durante la ventana de deterioro respiratorio, antes de que progrese al paro cardíaco completo.',
  obj:'Explicar por qué reconocer el deterioro respiratorio antes del paro completo mejora el pronóstico en un niño.',
  ref:'American Heart Association, Guías de RCP y ACE Pediátrico.',
  tags:['deterioro respiratorio temprano','ventana de intervención','pronóstico pediátrico']
},
{
  id:'U9-SV-Q41', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Reanimación cardiopulmonar pediátrica', sub:'Enfoque del entrenamiento pediátrico vs. adulto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencia el enfoque del entrenamiento en reanimación pediátrica respecto al entrenamiento centrado en adultos?',
  ops:[
    'El entrenamiento pediátrico se enfoca tanto en reconocer el deterioro temprano como en la reanimación del paro ya establecido, mientras que el del adulto está más centrado en el paro ya ocurrido',
    'El entrenamiento en reanimación pediátrica y el centrado en adultos son exactamente idénticos en su enfoque y contenido', 'El entrenamiento pediátrico nunca incluye contenido sobre reconocimiento temprano de deterioro, solo sobre el paro ya establecido', 'El entrenamiento centrado en adultos incluye más contenido sobre reconocimiento temprano que el entrenamiento pediátrico'],
  ok:0,
  clave:'El entrenamiento pediátrico se enfoca tanto en reconocer el deterioro temprano como en la reanimación del paro ya establecido, mientras que el del adulto está más centrado en el paro ya ocurrido.',
  exp:'Esto justifica que buena parte del entrenamiento en reanimación pediátrica se enfoque tanto en reconocer el deterioro temprano como en la reanimación del paro ya establecido, a diferencia del entrenamiento en adultos, más centrado en el manejo del paro cardíaco ya ocurrido -una diferencia de enfoque que refleja directamente la diferencia de causa predominante entre ambos grupos de edad.',
  no:{
    1:'Existe una diferencia real de enfoque entre ambos entrenamientos, relacionada directamente con la diferencia de causa predominante del paro en cada grupo de edad.',
    2:'El entrenamiento pediátrico sí incluye de forma prominente el reconocimiento temprano del deterioro, a diferencia del entrenamiento centrado en adultos.',
    3:'Es precisamente lo contrario: el entrenamiento PEDIÁTRICO incluye más contenido sobre reconocimiento temprano que el centrado en adultos.'
  },
  trampa:'Asumir que el entrenamiento en reanimación pediátrica y el del adulto tienen exactamente el mismo enfoque, sin reconocer la diferencia relacionada con la causa predominante del paro en cada grupo.',
  obj:'Explicar la diferencia de enfoque entre el entrenamiento en reanimación pediátrica y el centrado en adultos.',
  ref:'American Heart Association, Guías de RCP y ACE Pediátrico.',
  tags:['entrenamiento pediátrico','reconocimiento temprano','diferencia de enfoque']
},
{
  id:'U9-SV-Q42', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Reanimación cardiopulmonar pediátrica', sub:'El corazón como consecuencia final, no causa inicial',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño presenta una insuficiencia respiratoria severa progresiva, sin ninguna alteración cardíaca inicial, que eventualmente lleva a un paro cardíaco si no se corrige a tiempo.',
  enunciado:'¿Qué principio de la RCP pediátrica ilustra este caso?',
  ops:[
    'Que en un niño el corazón suele fallar como consecuencia FINAL de la falta de oxígeno prolongada, no como el problema inicial del cuadro',
    'Que en los niños, igual que en los adultos, el corazón casi siempre falla como problema inicial, antes que la respiración', 'Este caso no ilustra ningún principio particular de la reanimación pediátrica', 'Que la insuficiencia respiratoria en niños nunca puede progresar hasta un paro cardíaco'],
  ok:0,
  clave:'Que en un niño el corazón suele fallar como consecuencia FINAL de la falta de oxígeno prolongada, no como el problema inicial del cuadro.',
  exp:'Este caso ilustra directamente el principio central de la RCP pediátrica: en un niño, el corazón suele fallar como consecuencia FINAL de la falta de oxígeno prolongada, no como el problema inicial -una diferencia fundamental que cambia por completo la prioridad del manejo desde el primer momento de la reanimación pediátrica, dando más peso a corregir la causa respiratoria de fondo.',
  no:{
    1:'Es precisamente lo contrario: en el ADULTO el corazón suele fallar como problema inicial (una arritmia, por ejemplo); en el niño, la falla respiratoria precede al fallo cardíaco.',
    2:'Este caso ilustra exactamente el principio central que distingue el origen del paro pediátrico del origen del paro en el adulto.',
    3:'La insuficiencia respiratoria progresiva SÍ puede llevar a un paro cardíaco en un niño si no se corrige a tiempo, precisamente el mecanismo descrito en este caso.'
  },
  trampa:'No reconocer que este caso es un ejemplo directo del origen respiratorio predominante del paro pediátrico, con el corazón fallando de forma secundaria y tardía.',
  obj:'Aplicar el principio de que el corazón falla como consecuencia final, no como causa inicial, en el paro pediátrico.',
  ref:'American Heart Association, Guías de RCP y ACE Pediátrico.',
  tags:['falla respiratoria progresiva','consecuencia final','paro pediátrico']
},
{
  id:'U9-SV-Q43', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Reanimación cardiopulmonar pediátrica', sub:'No es solo "la técnica del adulto, más suave"',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es incorrecto pensar en la reanimación pediátrica simplemente como "la misma técnica del adulto, pero más suave"?',
  ops:[
    'Porque la causa más frecuente de paro es distinta (respiratoria en el niño, cardíaca en el adulto), y esa diferencia cambia por completo qué se prioriza',
    'La reanimación pediátrica es, de hecho, exactamente igual a la del adulto en todos sus aspectos técnicos y de prioridad', 'La única diferencia real entre la reanimación pediátrica y la del adulto es la fuerza física aplicada, nada más', 'No existe ninguna diferencia conceptual relevante entre reanimar a un niño y a un adulto'],
  ok:0,
  clave:'Porque la causa más frecuente de paro es distinta (respiratoria en el niño, cardíaca en el adulto), y esa diferencia cambia por completo qué se prioriza.',
  exp:'La reanimación en niños no es simplemente "la misma técnica del adulto, pero más suave": la causa más frecuente de paro es distinta (respiratoria en el niño, cardíaca en el adulto), y esa diferencia cambia por completo qué se prioriza en los primeros minutos -desde el peso relativo de la ventilación hasta el enfoque del entrenamiento, pasando por el ajuste técnico de las compresiones según el tamaño corporal.',
  no:{
    1:'Existen diferencias reales y bien documentadas más allá de la técnica, relacionadas con la causa predominante distinta del paro en cada grupo de edad.',
    2:'La diferencia va mucho más allá de la fuerza física aplicada; incluye el peso relativo de la ventilación, el enfoque del entrenamiento y la prioridad clínica inicial.',
    3:'Sí existe una diferencia conceptual central y bien fundamentada: el origen predominantemente respiratorio del paro pediátrico frente al cardíaco del adulto.'
  },
  trampa:'Reducir las diferencias entre la reanimación pediátrica y la del adulto a solo un ajuste de fuerza física, ignorando la diferencia conceptual de fondo sobre la causa del paro.',
  obj:'Explicar por qué la reanimación pediátrica no es simplemente una versión "más suave" de la técnica del adulto.',
  ref:'American Heart Association, Guías de RCP y ACE Pediátrico.',
  tags:['diferencia conceptual','causa del paro','reanimación pediátrica vs. adulto']
},
{
  id:'U9-SV-Q44', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Evaluación inicial del trauma (ABCDE)', sub:'Los cinco pasos del ABCDE',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa cada letra del ABCDE en la evaluación primaria del trauma?',
  ops:[
    'A: vía Aérea, B: Buena ventilación/respiración, C: Circulación, D: Déficit neurológico, E: Exposición',
    'A: Analgesia, B: Biopsia, C: Cirugía, D: Diagnóstico, E: Egreso', 'A: Antibióticos, B: Broncodilatador, C: Cardioversión, D: Desfibrilación, E: Epinefrina', 'A: Anamnesis, B: Balance hídrico, C: Consentimiento, D: Diagnóstico diferencial, E: Estudios de imagen'],
  ok:0,
  clave:'A: vía Aérea, B: Buena ventilación/respiración, C: Circulación, D: Déficit neurológico, E: Exposición.',
  exp:'El ABCDE organiza la evaluación primaria del trauma en un orden deliberado: A (vía Aérea, con control simultáneo de la columna cervical), B (Buena ventilación/respiración), C (Circulación, con control de hemorragia externa como prioridad inmediata), D (Déficit neurológico, una evaluación rápida del nivel de conciencia), y E (Exposición del paciente para buscar lesiones no evidentes, con control simultáneo de la temperatura corporal).',
  no:{
    1:'Esta secuencia no corresponde al ABCDE de la evaluación primaria del trauma, que sigue el orden vía aérea, ventilación, circulación, déficit neurológico, exposición.',
    2:'Esta secuencia no corresponde al ABCDE; mezcla intervenciones específicas de otros contextos (soporte vital avanzado) con el orden real de la evaluación primaria.',
    3:'Esta secuencia no corresponde al ABCDE de la evaluación primaria del trauma, que es un orden clínico específico y estandarizado.'
  },
  trampa:'Confundir el ABCDE de la evaluación primaria del trauma con otras secuencias o siglas usadas en distintos contextos clínicos.',
  obj:'Recordar el significado de cada letra del ABCDE en la evaluación primaria del trauma.',
  ref:'American College of Surgeons, Soporte Vital Avanzado en Trauma (ATLS).',
  tags:['ABCDE','evaluación primaria del trauma','secuencia estandarizada']
},
{
  id:'U9-SV-Q45', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Evaluación inicial del trauma (ABCDE)', sub:'Por qué el orden no es alfabético por casualidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué refleja el orden específico de los pasos del ABCDE en la evaluación del trauma?',
  ops:[
    'La urgencia relativa de cada problema: una vía aérea obstruida mata en minutos, mientras que un déficit neurológico generalmente da algo más de margen relativo de tiempo',
    'El orden del ABCDE es puramente alfabético, sin ninguna relación con la urgencia clínica de cada problema', 'Todos los pasos del ABCDE tienen exactamente la misma urgencia clínica, sin ninguna jerarquía entre ellos', 'El orden del ABCDE se basa exclusivamente en la facilidad técnica de realizar cada evaluación, sin relación con la urgencia'],
  ok:0,
  clave:'La urgencia relativa de cada problema: una vía aérea obstruida mata en minutos, mientras que un déficit neurológico generalmente da algo más de margen relativo de tiempo.',
  exp:'El orden del ABCDE no es alfabético por casualidad: refleja, de forma deliberada, la urgencia relativa de cada problema -una vía aérea obstruida mata en minutos; una hemorragia externa no controlada puede matar en minutos también, pero se aborda después de asegurar que el aire pueda entrar; un déficit neurológico, aunque grave, generalmente da algo más de margen de tiempo relativo que los tres primeros pasos.',
  no:{
    1:'El orden refleja precisamente la urgencia clínica relativa de cada problema, no es una coincidencia alfabética sin fundamento clínico.',
    2:'Los pasos del ABCDE tienen distinta urgencia clínica relativa; por eso existe una jerarquía deliberada en su orden, no son equivalentes.',
    3:'El orden se basa en la urgencia clínica de cada problema (qué mata más rápido), no en la facilidad técnica de realizar cada evaluación.'
  },
  trampa:'Asumir que el orden del ABCDE es una coincidencia alfabética o que todos los pasos tienen la misma urgencia clínica, sin reconocer la jerarquía deliberada.',
  obj:'Explicar que el orden del ABCDE refleja la urgencia relativa de cada problema, no es una coincidencia alfabética.',
  ref:'American College of Surgeons, Soporte Vital Avanzado en Trauma (ATLS).',
  tags:['orden del ABCDE','urgencia relativa','jerarquía clínica']
},
{
  id:'U9-SV-Q46', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Evaluación inicial del trauma (ABCDE)', sub:'No avanzar sin resolver el paso anterior',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Durante la evaluación de un paciente con trauma, el equipo detecta que la vía aérea todavía está parcialmente obstruida, pero decide avanzar a evaluar la circulación con detalle antes de resolver ese problema.',
  enunciado:'¿Por qué esta conducta contradice un principio central de la evaluación ABCDE?',
  ops:[
    'Porque un principio central es no avanzar al siguiente paso hasta resolver (o al menos estabilizar) el problema identificado en el paso anterior',
    'No existe ningún principio en el ABCDE sobre el orden en que deben resolverse los problemas identificados', 'Evaluar la circulación antes de resolver la vía aérea siempre es la conducta correcta y recomendada', 'El ABCDE permite evaluar todos los pasos simultáneamente, sin ninguna secuencia obligatoria'],
  ok:0,
  clave:'Un principio central es no avanzar al siguiente paso hasta resolver (o al menos estabilizar) el problema identificado en el paso anterior.',
  exp:'Un principio central de esta evaluación es no avanzar al siguiente paso hasta resolver (o al menos estabilizar) el problema identificado en el paso anterior: de nada sirve evaluar la circulación con detalle si la vía aérea sigue obstruida, porque el paciente puede morir por ese problema antes de que el segundo llegue siquiera a importar en la práctica -la conducta descrita en el caso contradice directamente ese principio.',
  no:{
    1:'Sí existe un principio central bien definido sobre el orden de resolución, precisamente el que esta conducta contradice.',
    2:'Es precisamente lo contrario: avanzar a evaluar la circulación sin resolver primero la vía aérea contradice el principio central del ABCDE.',
    3:'El ABCDE sigue una secuencia deliberada donde cada paso se resuelve antes de avanzar al siguiente, no se evalúan todos simultáneamente sin orden.'
  },
  trampa:'No reconocer que avanzar a un paso posterior sin resolver el problema del paso anterior contradice el principio central de la evaluación ABCDE.',
  obj:'Explicar el principio de resolver cada paso del ABCDE antes de avanzar al siguiente.',
  ref:'American College of Surgeons, Soporte Vital Avanzado en Trauma (ATLS).',
  tags:['secuencia del ABCDE','resolver antes de avanzar','disciplina clínica']
},
{
  id:'U9-SV-Q47', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Evaluación inicial del trauma (ABCDE)', sub:'Lo más visible no siempre es la prioridad real',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con trauma presenta una herida sangrante y aparatosa en el brazo, y al mismo tiempo tiene la vía aérea parcialmente comprometida, algo mucho menos visible a primera vista.',
  enunciado:'¿Cuál debe ser la prioridad real de atención según la lógica del ABCDE, y por qué?',
  ops:[
    'La vía aérea, porque si está comprometida el paciente puede morir por ese problema antes de que la herida sangrante, por dramática que parezca, llegue a importar',
    'La herida sangrante, porque es la más visible y aparatosa, y por tanto debe tratarse primero sin importar el estado de la vía aérea', 'Ambos problemas deben tratarse exactamente al mismo tiempo, sin ninguna prioridad entre ellos', 'Ninguno de los dos problemas debe priorizarse; se debe esperar una evaluación hospitalaria completa antes de actuar'],
  ok:0,
  clave:'La vía aérea, porque si está comprometida el paciente puede morir por ese problema antes de que la herida sangrante llegue a importar.',
  exp:'Este caso ilustra directamente la disciplina de "resolver antes de avanzar" que distingue una evaluación sistemática de trauma de una evaluación desordenada guiada por lo más visible: una herida sangrante y aparatosa puede captar toda la atención inicial, pero si la vía aérea del paciente está comprometida, esa herida -por dramática que parezca- no es la prioridad real en ese momento, según el orden del ABCDE.',
  no:{
    1:'Priorizar lo más visible (la herida) sobre la vía aérea comprometida contradice directamente la lógica del ABCDE, que prioriza según urgencia real, no apariencia.',
    2:'El ABCDE establece una secuencia priorizada, no una atención simultánea de todos los problemas sin ningún orden de urgencia.',
    3:'Esperar una evaluación hospitalaria completa retrasaría intervenciones urgentes; el ABCDE está diseñado precisamente para actuar de inmediato según la prioridad correcta.'
  },
  trampa:'Priorizar el problema más visible y aparatoso (la herida sangrante) sobre un problema menos visible pero más urgente (la vía aérea comprometida).',
  obj:'Aplicar la lógica del ABCDE para priorizar correctamente entre un problema visible y uno menos visible pero más urgente.',
  ref:'American College of Surgeons, Soporte Vital Avanzado en Trauma (ATLS).',
  tags:['prioridad clínica real','lo visible vs. lo urgente','vía aérea comprometida']
},
{
  id:'U9-SV-Q48', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Evaluación inicial del trauma (ABCDE)', sub:'Conexión con el primer tema del bloque',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué idea central comparte la evaluación ABCDE con la cadena de supervivencia, el primer tema de este bloque?',
  ops:[
    'Que el orden y la rapidez de las acciones -no solo saber técnicamente qué hacer- es lo que determina si la persona sobrevive a una emergencia médica',
    'No existe ninguna conexión conceptual real entre la evaluación ABCDE y la cadena de supervivencia', 'Ambos temas se centran exclusivamente en el manejo de la vía aérea, sin relación con ningún otro aspecto', 'La cadena de supervivencia y el ABCDE son protocolos idénticos, con exactamente los mismos pasos'],
  ok:0,
  clave:'Que el orden y la rapidez de las acciones -no solo saber técnicamente qué hacer- es lo que determina si la persona sobrevive a una emergencia médica.',
  exp:'Este tema conecta directamente con el primer tema del bloque, la cadena de supervivencia: ambos comparten la misma lógica de fondo, que el orden y la rapidez de las acciones -no solo saber técnicamente qué hacer- es lo que determina si la persona sobrevive a una emergencia médica, cerrando el bloque completo de Soporte Vital con la misma idea central que lo abrió.',
  no:{
    1:'Sí existe una conexión conceptual central y explícita entre ambos temas: la importancia del orden y la rapidez de las acciones.',
    2:'Ambos temas abarcan más que solo la vía aérea; incluyen circulación, ventilación, desfibrilación y otros aspectos del manejo de emergencias.',
    3:'Son protocolos distintos con pasos específicos diferentes (uno para el paro cardíaco, otro para el trauma), aunque comparten la misma lógica de fondo sobre el orden y la rapidez.'
  },
  trampa:'No reconocer la conexión conceptual central entre la cadena de supervivencia y el ABCDE, pese a ser protocolos técnicamente distintos.',
  obj:'Explicar la conexión conceptual entre la evaluación ABCDE y la cadena de supervivencia.',
  ref:'American College of Surgeons, Soporte Vital Avanzado en Trauma (ATLS).',
  tags:['conexión conceptual','cadena de supervivencia','orden y rapidez']
},
{
  id:'U9-SV-Q49', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Evaluación inicial del trauma (ABCDE)', sub:'Control de hemorragia externa dentro del paso C',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el control de hemorragia externa se ubica como prioridad inmediata dentro del paso C (Circulación), y no antes, en los pasos A o B?',
  ops:[
    'Porque el orden del ABCDE prioriza primero asegurar que el aire pueda entrar (A y B) antes de abordar la circulación, aunque la hemorragia también sea urgente',
    'El control de hemorragia externa no tiene ninguna relación real con el paso C (Circulación) del ABCDE', 'El control de hemorragia externa siempre debe realizarse antes que cualquier evaluación de la vía aérea', 'La ubicación del control de hemorragia dentro del ABCDE es completamente arbitraria, sin ninguna lógica clínica'],
  ok:0,
  clave:'El orden del ABCDE prioriza primero asegurar que el aire pueda entrar (A y B) antes de abordar la circulación, aunque la hemorragia también sea urgente.',
  exp:'Una hemorragia externa no controlada puede matar en minutos, pero se aborda después de asegurar que el aire pueda entrar (pasos A y B); el control de hemorragia externa se ubica como prioridad inmediata dentro del paso C, porque aunque es urgente, el orden del ABCDE prioriza primero la vía aérea y la ventilación, ya que sin aire entrando a los pulmones, ninguna cantidad de sangre circulante sirve de nada.',
  no:{
    1:'El control de hemorragia externa sí tiene una relación directa y bien definida con el paso C del ABCDE, siendo su prioridad inmediata dentro de ese paso.',
    2:'Según la lógica del ABCDE, la vía aérea (A) y la ventilación (B) se abordan ANTES que la circulación (C), incluyendo el control de hemorragia.',
    3:'La ubicación tiene una lógica clínica deliberada: sin vía aérea ni ventilación aseguradas, la circulación no tiene ningún propósito útil.'
  },
  trampa:'Asumir que la hemorragia externa, por su urgencia, debería tratarse antes que la vía aérea, sin reconocer la lógica de priorización del ABCDE.',
  obj:'Explicar por qué el control de hemorragia externa se ubica dentro del paso C, después de la vía aérea y la ventilación.',
  ref:'American College of Surgeons, Soporte Vital Avanzado en Trauma (ATLS).',
  tags:['control de hemorragia externa','paso C circulación','priorización clínica']
},
{
  id:'U9-SV-Q50', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Evaluación inicial del trauma (ABCDE)', sub:'El paso E: exposición y control de temperatura',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué dos objetivos combina el paso E (Exposición) de la evaluación ABCDE?',
  ops:[
    'Buscar lesiones no evidentes a primera vista, con control simultáneo de la temperatura corporal del paciente para evitar la hipotermia',
    'El paso E se limita exclusivamente a retirar la ropa del paciente, sin ningún otro objetivo clínico adicional', 'El paso E consiste únicamente en evaluar el nivel de conciencia del paciente, igual que el paso D', 'El paso E no tiene ninguna relación con la temperatura corporal del paciente, solo con buscar lesiones'],
  ok:0,
  clave:'Buscar lesiones no evidentes a primera vista, con control simultáneo de la temperatura corporal del paciente para evitar la hipotermia.',
  exp:'El paso E (Exposición) combina dos objetivos: exponer al paciente para buscar lesiones no evidentes a primera vista (que podrían pasar desapercibidas si el paciente permanece completamente cubierto), con control simultáneo de la temperatura corporal, para evitar la hipotermia que la propia exposición prolongada podría causar, especialmente en un paciente ya comprometido por el trauma.',
  no:{
    1:'El paso E tiene un objetivo clínico adicional central más allá de retirar la ropa: buscar activamente lesiones no evidentes y controlar la temperatura.',
    2:'El paso D (Déficit neurológico) es el que evalúa el nivel de conciencia; el paso E tiene un objetivo distinto, centrado en la exposición y la búsqueda de lesiones.',
    3:'El paso E incluye explícitamente el control de la temperatura corporal como parte de su objetivo, junto con la búsqueda de lesiones no evidentes.'
  },
  trampa:'Confundir el paso E (Exposición) con el paso D (Déficit neurológico), o reducirlo solo a retirar la ropa sin reconocer el control de temperatura como objetivo adicional.',
  obj:'Explicar los dos objetivos combinados del paso E (Exposición) de la evaluación ABCDE.',
  ref:'American College of Surgeons, Soporte Vital Avanzado en Trauma (ATLS).',
  tags:['paso E exposición','control de temperatura','búsqueda de lesiones no evidentes']
}

]);
