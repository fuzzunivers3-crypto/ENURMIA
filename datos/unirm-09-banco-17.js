/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE RELACION MEDICO-PACIENTE (2/2)
   Continua unirm-09-banco-16.js. Amplia Relacion Medico-Paciente
   de 1 a 50 preguntas. Esta parte cubre entrevista clinica
   centrada en el paciente, manejo del paciente dificil y trabajo
   en equipo de salud (temas 5-7).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U9-RM-Q30', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Entrevista clínica centrada en el paciente', sub:'Pregunta abierta vs. cerrada al inicio',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se recomienda empezar la entrevista clínica con preguntas abiertas, reservando las cerradas para después?',
  ops:[
    'Porque suele revelar información que una entrevista completamente dirigida desde el inicio pasaría por alto',
    'Las preguntas abiertas siempre son más rápidas de responder que las preguntas cerradas', 'Las preguntas cerradas deben usarse siempre primero, antes de cualquier pregunta abierta', 'No existe ninguna diferencia real en la información obtenida entre empezar con preguntas abiertas o cerradas'],
  ok:0,
  clave:'Suele revelar información que una entrevista completamente dirigida desde el inicio pasaría por alto.',
  exp:'Empezar la entrevista clínica con preguntas abiertas ("cuénteme qué le está pasando"), y reservar las preguntas cerradas ("¿el dolor es punzante o sordo?") para completar detalles específicos después, suele revelar información que una entrevista completamente dirigida desde el inicio pasaría por alto -el paciente, dejado hablar libremente, a veces menciona un dato que el médico ni siquiera había pensado en preguntar directamente.',
  no:{
    1:'Las preguntas abiertas no son necesariamente más rápidas; de hecho, pueden requerir más tiempo, pero aportan un valor informativo distinto.',
    2:'Es precisamente lo contrario: se recomienda empezar con preguntas ABIERTAS, reservando las cerradas para completar detalles específicos después.',
    3:'Sí existe una diferencia real: las preguntas abiertas pueden revelar información que una entrevista dirigida desde el inicio pasaría por alto.'
  },
  trampa:'Invertir el orden recomendado (abiertas primero, cerradas después) o subestimar el valor informativo de las preguntas abiertas al inicio.',
  obj:'Explicar por qué se recomienda empezar la entrevista clínica con preguntas abiertas.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 1.',
  tags:['pregunta abierta','entrevista clínica','orden de las preguntas']
},
{
  id:'U9-RM-Q31', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Entrevista clínica centrada en el paciente', sub:'Reflejar lo entendido',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple, más allá de una técnica de comunicación, reflejar de vuelta al paciente lo que el médico entendió de su relato?',
  ops:[
    'Sirve como verificación activa, permitiendo que el paciente corrija cualquier malentendido antes de que la entrevista avance sobre una base incorrecta',
    'Reflejar lo entendido no tiene ninguna función práctica real más allá de parecer atento durante la consulta', 'Esta técnica solo sirve para alargar innecesariamente la duración de la entrevista clínica', 'Reflejar lo entendido siempre debe hacerse de forma idéntica, palabra por palabra, a lo que dijo el paciente'],
  ok:0,
  clave:'Sirve como verificación activa, permitiendo que el paciente corrija cualquier malentendido antes de que la entrevista avance sobre una base incorrecta.',
  exp:'Reflejar lo entendido ("entonces, si le comprendo bien, el dolor empezó hace tres días y ha ido empeorando") no es solo una técnica de comunicación: también sirve como verificación activa, permitiendo que el paciente corrija cualquier malentendido antes de que la entrevista avance sobre una base incorrecta, evitando errores acumulados en el resto de la consulta.',
  no:{
    1:'Tiene una función práctica real y central: verificar activamente la comprensión correcta antes de continuar con la entrevista.',
    2:'Reflejar lo entendido tiene un propósito funcional (verificación), no solo alarga la entrevista sin ningún beneficio real.',
    3:'No requiere repetir palabra por palabra; se trata de resumir y confirmar la comprensión general, no una repetición literal exacta.'
  },
  trampa:'Reducir la técnica de reflejar lo entendido a un gesto de cortesía, sin reconocer su función real de verificación activa de la comprensión.',
  obj:'Explicar la función de verificación activa al reflejar lo entendido durante la entrevista clínica.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 1.',
  tags:['escucha activa','reflejar lo entendido','verificación de comprensión']
},
{
  id:'U9-RM-Q32', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Entrevista clínica centrada en el paciente', sub:'Permitir silencios en la entrevista',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la escucha activa incluye permitir silencios y pausas durante la entrevista, sin apresurarse a llenarlos?',
  ops:[
    'Porque el paciente, con frecuencia, necesita ese espacio para organizar y terminar de expresar algo importante que le cuesta poner en palabras',
    'Los silencios durante una entrevista clínica siempre indican que el paciente no tiene nada más relevante que decir', 'Permitir silencios nunca aporta ningún valor real a la calidad de la información obtenida en la entrevista', 'Se debe llenar cualquier silencio de inmediato con una nueva pregunta, para no perder tiempo de la consulta'],
  ok:0,
  clave:'El paciente, con frecuencia, necesita ese espacio para organizar y terminar de expresar algo importante que le cuesta poner en palabras.',
  exp:'La escucha activa implica permitir silencios y pausas sin apresurarse a llenarlos: el paciente, con frecuencia, necesita ese espacio para organizar y terminar de expresar algo importante que le cuesta poner en palabras -interrumpir ese silencio con una nueva pregunta puede cortar precisamente el momento en que el paciente estaba por compartir información relevante.',
  no:{
    1:'Un silencio no siempre indica ausencia de información relevante; con frecuencia precede a algo importante que el paciente está organizando para decir.',
    2:'Permitir silencios sí aporta valor real, al dar espacio para que el paciente complete su relato con información que de otra forma podría perderse.',
    3:'Llenar el silencio de inmediato puede cortar el proceso del paciente para organizar y expresar información relevante todavía no dicha.'
  },
  trampa:'Interpretar el silencio del paciente como ausencia de información relevante, en vez de reconocerlo como parte necesaria del proceso de expresión.',
  obj:'Explicar por qué permitir silencios durante la entrevista clínica es parte de la escucha activa.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 1.',
  tags:['silencios en la entrevista','escucha activa','espacio para el paciente']
},
{
  id:'U9-RM-Q33', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Entrevista clínica centrada en el paciente', sub:'Interrumpir demasiado pronto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué muestran los estudios sobre el momento en que los profesionales de salud suelen interrumpir a un paciente al inicio de la entrevista clínica?',
  ops:[
    'Que ocurre, en promedio, en segundos desde que el paciente empieza a hablar, no en minutos',
    'Que los profesionales de salud, en promedio, nunca interrumpen a sus pacientes durante la entrevista clínica', 'Que la interrupción ocurre, en promedio, varios minutos después de que el paciente comienza a hablar', 'Los estudios no han investigado en ningún momento este aspecto específico de la entrevista clínica'],
  ok:0,
  clave:'Ocurre, en promedio, en segundos desde que el paciente empieza a hablar, no en minutos.',
  exp:'Interrumpir al paciente demasiado pronto en la entrevista -los estudios sobre esto muestran que ocurre, en promedio, en segundos, no en minutos, desde que el paciente empieza a hablar- es uno de los errores más comunes y más fáciles de corregir en la práctica clínica cotidiana, aunque con frecuencia el profesional ni siquiera es consciente de estarlo haciendo.',
  no:{
    1:'Los estudios documentan un patrón real: la interrupción suele ocurrir muy rápidamente, no de forma tardía tras varios minutos.',
    2:'Es precisamente lo contrario: los estudios muestran que la interrupción SÍ ocurre con frecuencia, y de forma muy temprana.',
    3:'Sí existe evidencia documentada sobre este patrón específico de interrupción temprana en la práctica clínica.'
  },
  trampa:'Subestimar la rapidez con la que ocurre la interrupción temprana en la práctica clínica, un error documentado y frecuente.',
  obj:'Recordar el hallazgo sobre la rapidez con que suele ocurrir la interrupción temprana al paciente en la entrevista clínica.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 1.',
  tags:['interrupción temprana','error frecuente','entrevista clínica']
},
{
  id:'U9-RM-Q34', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Entrevista clínica centrada en el paciente', sub:'Conexión con la anamnesis de Semiología Clínica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre una entrevista centrada en la enfermedad y una centrada en el paciente, según la conexión que este tema hace con la anamnesis de Semiología Clínica?',
  ops:[
    'La diferencia no está en QUÉ preguntas se hacen, sino en CÓMO se hacen y qué espacio se le da a la respuesta del paciente',
    'La diferencia está exclusivamente en la cantidad total de preguntas realizadas durante la entrevista', 'No existe ninguna diferencia real entre ambos enfoques de entrevista clínica', 'La diferencia está en si la entrevista se realiza de pie o sentado frente al paciente'],
  ok:0,
  clave:'La diferencia no está en QUÉ preguntas se hacen, sino en CÓMO se hacen y qué espacio se le da a la respuesta del paciente.',
  exp:'Este tema retoma, desde la comunicación, la misma anamnesis ya vista en Semiología Clínica: la diferencia entre una entrevista centrada en la enfermedad y una centrada en el paciente no está en QUÉ preguntas se hacen, sino en CÓMO se hacen y qué espacio se le da a la respuesta -el mismo contenido clínico puede recogerse de una forma que centra al paciente o de una que lo reduce a una fuente de datos.',
  no:{
    1:'La cantidad total de preguntas no es el factor determinante; lo central es el estilo y el espacio dado a la respuesta del paciente.',
    2:'Sí existe una diferencia real y bien documentada entre ambos enfoques de entrevista, relacionada con el estilo de comunicación, no con el contenido.',
    3:'La posición física del entrevistador no es el factor central que distingue una entrevista centrada en la enfermedad de una centrada en el paciente.'
  },
  trampa:'Buscar la diferencia entre ambos enfoques en el contenido de las preguntas o en aspectos superficiales, en vez del estilo de comunicación y el espacio dado al paciente.',
  obj:'Explicar la diferencia real entre una entrevista centrada en la enfermedad y una centrada en el paciente.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 1.',
  tags:['entrevista centrada en el paciente','anamnesis','estilo de comunicación']
},
{
  id:'U9-RM-Q35', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Entrevista clínica centrada en el paciente', sub:'Costo clínico de la interrupción temprana',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico interrumpe a un paciente pocos segundos después de que empezó a relatar su motivo de consulta, dirigiendo de inmediato con preguntas cerradas específicas.',
  enunciado:'¿Qué costo clínico real puede tener esta interrupción temprana, más allá de la frustración del paciente?',
  ops:[
    'Corta la narrativa espontánea justo cuando podría estar por revelar información relevante que una pregunta dirigida no habría capturado de la misma forma',
    'La interrupción temprana nunca tiene ningún costo clínico real, solo afecta la percepción subjetiva del paciente sobre el trato recibido', 'Interrumpir temprano siempre mejora la eficiencia de la consulta sin ningún costo en la calidad de la información obtenida', 'El único efecto de interrumpir temprano es alargar innecesariamente la duración total de la consulta'],
  ok:0,
  clave:'Corta la narrativa espontánea justo cuando podría estar por revelar información relevante que una pregunta dirigida no habría capturado de la misma forma.',
  exp:'Esta interrupción temprana no solo frustra al paciente; también tiene un costo clínico real, porque corta la narrativa espontánea justo cuando podría estar por revelar información relevante que una pregunta dirigida no habría capturado de la misma forma -un dato que, dirigido por preguntas cerradas desde el inicio, quizás nunca surja en la entrevista.',
  no:{
    1:'El costo va más allá de la percepción subjetiva del paciente; existe un costo clínico real sobre la calidad y completitud de la información obtenida.',
    2:'Interrumpir temprano puede, de hecho, reducir la calidad de la información obtenida, no mejorar la eficiencia sin costo alguno.',
    3:'El efecto principal no es solo la duración de la consulta; el costo central es la pérdida potencial de información clínica relevante.'
  },
  trampa:'Reducir el costo de la interrupción temprana a una simple cuestión de percepción o cortesía, sin reconocer el costo clínico real sobre la información obtenida.',
  obj:'Explicar el costo clínico real de interrumpir demasiado pronto la narrativa espontánea del paciente.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 1.',
  tags:['costo clínico','interrupción temprana','narrativa espontánea']
},
{
  id:'U9-RM-Q36', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Entrevista clínica centrada en el paciente', sub:'La escucha activa como conjunto de prácticas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tres elementos componen la escucha activa dentro de la entrevista clínica centrada en el paciente?',
  ops:[
    'Prestar atención completa a lo que el paciente dice (y no dice), reflejar de vuelta lo entendido, y permitir silencios y pausas sin apresurarse a llenarlos',
    'La escucha activa consiste únicamente en no hablar mientras el paciente relata su motivo de consulta', 'La escucha activa se limita a tomar notas detalladas de todo lo que dice el paciente, sin ninguna otra acción', 'La escucha activa consiste en repetir exactamente, palabra por palabra, cada frase que dice el paciente'],
  ok:0,
  clave:'Prestar atención completa a lo que el paciente dice (y no dice), reflejar de vuelta lo entendido, y permitir silencios y pausas sin apresurarse a llenarlos.',
  exp:'La escucha activa implica prestar atención completa a lo que el paciente dice (y a lo que no dice, o dice con dudas), reflejar de vuelta lo entendido para confirmar que se comprendió correctamente, y permitir silencios y pausas sin apresurarse a llenarlos -tres elementos que van mucho más allá de simplemente guardar silencio o tomar notas.',
  no:{
    1:'La escucha activa incluye elementos adicionales más allá de solo no hablar, como reflejar lo entendido y prestar atención a lo no dicho.',
    2:'Tomar notas es una acción distinta y complementaria, no equivalente a los elementos reales que componen la escucha activa descrita.',
    3:'Reflejar lo entendido no requiere repetición literal palabra por palabra; se trata de resumir y confirmar la comprensión general del mensaje.'
  },
  trampa:'Reducir la escucha activa a una sola acción (guardar silencio, tomar notas, o repetir literalmente), en vez de reconocer sus tres componentes reales.',
  obj:'Identificar los tres elementos que componen la escucha activa en la entrevista clínica centrada en el paciente.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 1.',
  tags:['escucha activa','componentes','entrevista clínica']
},
{
  id:'U9-RM-Q37', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Manejo del paciente difícil', sub:'La conducta difícil como manifestación visible',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un paciente "difícil" casi nunca lo es por capricho, según el enfoque central de este tema?',
  ops:[
    'Porque la dificultad en la interacción es, con frecuencia, la manifestación visible de miedo, dolor no controlado, o una barrera de comunicación resoluble',
    'Un paciente difícil siempre actúa así de forma completamente arbitraria, sin ninguna causa subyacente identificable', 'La conducta difícil de un paciente nunca tiene ninguna relación con experiencias previas negativas con el sistema de salud', 'Todos los pacientes catalogados como difíciles comparten exactamente la misma causa subyacente en todos los casos'],
  ok:0,
  clave:'Porque la dificultad en la interacción es, con frecuencia, la manifestación visible de miedo, dolor no controlado, o una barrera de comunicación resoluble.',
  exp:'Un paciente "difícil" casi nunca lo es por capricho: con frecuencia, la dificultad en la interacción es la manifestación visible de miedo (a un diagnóstico grave, a perder el control de la situación), dolor no controlado, una mala experiencia previa con el sistema de salud, o una barrera de comunicación que el propio profesional puede ayudar a resolver.',
  no:{
    1:'La conducta difícil suele tener una causa subyacente identificable, no es simplemente arbitraria sin ninguna explicación posible.',
    2:'Las experiencias previas negativas con el sistema de salud son precisamente una de las causas frecuentes reconocidas de la conducta difícil.',
    3:'Las causas subyacentes pueden variar de un paciente a otro (miedo, dolor, desconfianza), no son idénticas en todos los casos.'
  },
  trampa:'Asumir que la conducta difícil de un paciente es siempre arbitraria o sin causa, en vez de buscar activamente la razón subyacente específica.',
  obj:'Explicar por qué la conducta difícil de un paciente suele ser la manifestación visible de una causa subyacente identificable.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 8.',
  tags:['paciente conflictivo','causa subyacente','manifestación visible']
},
{
  id:'U9-RM-Q38', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Manejo del paciente difícil', sub:'Riesgo de reaccionar solo a la conducta visible',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué reaccionar solo a la conducta visible de un paciente conflictivo, sin buscar su causa, suele empeorar la interacción?',
  ops:[
    'Porque convierte un problema resoluble en una confrontación que no beneficia a nadie, en vez de abordar la causa subyacente real',
    'Reaccionar solo a la conducta visible siempre resuelve el problema de forma más rápida y eficiente que buscar su causa', 'La conducta visible de un paciente nunca tiene relación con ninguna causa subyacente que valga la pena explorar', 'Buscar la causa subyacente de la conducta difícil siempre empeora, en vez de mejorar, la interacción con el paciente'],
  ok:0,
  clave:'Convierte un problema resoluble en una confrontación que no beneficia a nadie, en vez de abordar la causa subyacente real.',
  exp:'Un paciente conflictivo genera, de forma natural, una respuesta defensiva en el profesional de salud, pero reaccionar solo a la conducta visible sin buscar su causa suele empeorar la interacción, convirtiendo un problema resoluble en una confrontación que no beneficia a nadie -identificar la causa subyacente cambia por completo cómo abordar la situación.',
  no:{
    1:'Reaccionar solo a la conducta visible, sin explorar la causa, tiende a escalar la confrontación en vez de resolver el problema de fondo.',
    2:'La conducta visible frecuentemente sí tiene una relación directa con una causa subyacente identificable, como miedo o dolor no controlado.',
    3:'Es precisamente lo contrario: buscar la causa subyacente suele MEJORAR, no empeorar, la calidad de la interacción con el paciente.'
  },
  trampa:'Asumir que reaccionar directamente a la conducta visible es más eficiente que investigar la causa subyacente de la dificultad.',
  obj:'Explicar por qué reaccionar solo a la conducta visible de un paciente conflictivo suele empeorar la interacción.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 8.',
  tags:['respuesta defensiva','causa subyacente','confrontación evitable']
},
{
  id:'U9-RM-Q39', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Manejo del paciente difícil', sub:'Validar la emoción antes de corregir la conducta',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente frustrado por una larga espera se muestra hostil con el personal de salud. Un profesional le dice primero "entiendo que esta espera lo tiene muy frustrado" antes de explicar por qué la espera fue necesaria.',
  enunciado:'¿Qué técnica de desescalada verbal ilustra esta respuesta, y por qué suele ser más efectiva que justificar la espera de inmediato?',
  ops:[
    'Validar la emoción antes de abordar la conducta, lo que suele reducir la tensión mucho más eficazmente que saltar directamente a la justificación',
    'Esta respuesta no corresponde a ninguna técnica reconocida de desescalada verbal', 'Justificar la espera de inmediato, sin validar la emoción primero, siempre es más efectivo para reducir la tensión', 'Validar la emoción del paciente en esta situación siempre empeora la tensión de la interacción'],
  ok:0,
  clave:'Validar la emoción antes de abordar la conducta, lo que suele reducir la tensión mucho más eficazmente que saltar directamente a la justificación.',
  exp:'Validar la emoción antes de abordar la conducta -"entiendo que esta espera lo tiene muy frustrado" antes de explicar por qué la espera es necesaria- suele reducir la tensión mucho más eficazmente que ignorar la emoción y saltar directamente a la justificación o la corrección de la conducta, una técnica central de la desescalada verbal.',
  no:{
    1:'Esta respuesta sí corresponde a una técnica reconocida de desescalada verbal: validar la emoción antes de abordar la conducta.',
    2:'Es precisamente lo contrario: saltar directamente a la justificación, sin validar la emoción primero, suele ser MENOS efectivo para reducir la tensión.',
    3:'Validar la emoción del paciente tiende a REDUCIR (no empeorar) la tensión de la interacción, siendo precisamente su propósito.'
  },
  trampa:'Asumir que justificar directamente la situación (sin validar primero la emoción) es la forma más efectiva de reducir la tensión de un paciente frustrado.',
  obj:'Identificar la técnica de validar la emoción antes de corregir la conducta como parte de la desescalada verbal.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 8.',
  tags:['desescalada verbal','validar la emoción','reducción de tensión']
},
{
  id:'U9-RM-Q40', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Manejo del paciente difícil', sub:'Entrevista motivacional y resistencia al cambio',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente muestra clara resistencia a dejar de fumar, pese a conocer los riesgos, y rechaza cualquier recomendación directa del médico al respecto.',
  enunciado:'¿Qué enfoque propone la entrevista motivacional para abordar esta resistencia, en vez de imponer directamente la recomendación?',
  ops:[
    'Explorar la propia ambivalencia del paciente y ayudarlo a encontrar SUS propias razones para el cambio',
    'Repetir la recomendación médica con mayor firmeza e insistencia hasta que el paciente finalmente acceda', 'Ignorar por completo la resistencia del paciente y proceder directamente con el plan de tratamiento recomendado', 'La entrevista motivacional no tiene ninguna utilidad específica en casos de resistencia al cambio de comportamiento'],
  ok:0,
  clave:'Explorar la propia ambivalencia del paciente y ayudarlo a encontrar SUS propias razones para el cambio.',
  exp:'La entrevista motivacional es una técnica útil sobre todo cuando el paciente muestra resistencia a un cambio de comportamiento necesario: en vez de imponer directamente la recomendación, explora la propia ambivalencia del paciente y le ayuda a encontrar SUS propias razones para el cambio, retomando el concepto ya visto de que solo informar rara vez basta para cambiar un comportamiento.',
  no:{
    1:'Insistir con mayor firmeza en la misma recomendación directa no es el enfoque de la entrevista motivacional, que busca explorar la ambivalencia del propio paciente.',
    2:'Ignorar la resistencia del paciente no aborda la causa de fondo; la entrevista motivacional propone explorarla activamente, no ignorarla.',
    3:'La entrevista motivacional es precisamente una técnica diseñada para situaciones de resistencia al cambio de comportamiento.'
  },
  trampa:'Asumir que repetir la recomendación con más firmeza es más efectivo que explorar la ambivalencia del paciente según el enfoque de la entrevista motivacional.',
  obj:'Explicar el enfoque de la entrevista motivacional ante la resistencia de un paciente a un cambio de comportamiento.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 8.',
  tags:['entrevista motivacional','resistencia al cambio','ambivalencia del paciente']
},
{
  id:'U9-RM-Q41', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Manejo del paciente difícil', sub:'Antes de etiquetar a un paciente como no cooperador',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente no está siguiendo las indicaciones de su tratamiento, y el equipo médico está considerando etiquetarlo como "no cooperador".',
  enunciado:'¿Qué se debería investigar antes de aplicar esa etiqueta, según el enfoque de este tema?',
  ops:[
    'Si el paciente entendió bien las indicaciones, si tiene los recursos para seguirlas, o si hay una razón de fondo no explorada todavía',
    'No es necesario investigar nada adicional; la falta de adherencia siempre indica falta de voluntad del paciente', 'Solo se debe investigar si el paciente tiene un diagnóstico psiquiátrico que explique su falta de cooperación', 'La etiqueta de "no cooperador" debe aplicarse de inmediato, sin ninguna investigación adicional previa'],
  ok:0,
  clave:'Si el paciente entendió bien las indicaciones, si tiene los recursos para seguirlas, o si hay una razón de fondo no explorada todavía.',
  exp:'Un paciente que parece "no cooperar" con su tratamiento, antes de etiquetarlo como difícil, merece que se investigue si entendió bien las indicaciones, si tiene los recursos para seguirlas (retomando los determinantes sociales de la salud), o si hay una razón de fondo no explorada todavía -etiquetar sin investigar puede pasar por alto una barrera real y resoluble.',
  no:{
    1:'La falta de adherencia no siempre indica falta de voluntad; puede deberse a falta de comprensión, de recursos, o a una barrera no explorada.',
    2:'La investigación debe ser más amplia que buscar exclusivamente un diagnóstico psiquiátrico; incluye comprensión, recursos y otras barreras.',
    3:'Etiquetar sin investigar primero contradice el enfoque recomendado de explorar la causa subyacente antes de emitir un juicio sobre el paciente.'
  },
  trampa:'Asumir que la falta de adherencia a un tratamiento siempre refleja falta de voluntad del paciente, sin investigar comprensión, recursos o barreras reales.',
  obj:'Explicar qué se debe investigar antes de etiquetar a un paciente como "no cooperador".',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 8.',
  tags:['adherencia al tratamiento','investigación previa','etiqueta de paciente difícil']
},
{
  id:'U9-RM-Q42', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Manejo del paciente difícil', sub:'Elementos de la desescalada verbal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué elementos incluye típicamente la desescalada verbal como técnica de comunicación?',
  ops:[
    'Tono de voz calmado, validar la emoción del paciente antes de intentar corregir su conducta, y ofrecer opciones dentro de lo posible',
    'La desescalada verbal consiste únicamente en elevar el tono de voz para imponer autoridad sobre el paciente', 'La desescalada verbal se basa exclusivamente en ignorar por completo cualquier expresión emocional del paciente', 'La desescalada verbal requiere siempre ceder completamente a cualquier demanda del paciente, sin ninguna limitación'],
  ok:0,
  clave:'Tono de voz calmado, validar la emoción del paciente antes de intentar corregir su conducta, y ofrecer opciones dentro de lo posible.',
  exp:'La desescalada verbal es un conjunto de técnicas de comunicación (tono de voz calmado, validar la emoción del paciente antes de intentar corregir su conducta, ofrecer opciones dentro de lo posible) diseñadas para reducir la tensión de una interacción difícil, sin recurrir a la confrontación ni a la sumisión pasiva.',
  no:{
    1:'Elevar el tono de voz para imponer autoridad tiende a escalar, no reducir, la tensión; es lo opuesto a la técnica de desescalada verbal.',
    2:'Ignorar la expresión emocional del paciente contradice directamente uno de los elementos centrales de la desescalada verbal (validar la emoción).',
    3:'La desescalada verbal busca un punto medio entre confrontación y sumisión pasiva, no ceder incondicionalmente a cualquier demanda.'
  },
  trampa:'Confundir la desescalada verbal con la confrontación (imponer autoridad) o con la sumisión pasiva (ceder sin límites), en vez de un enfoque intermedio equilibrado.',
  obj:'Identificar los elementos que componen la técnica de desescalada verbal.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 8.',
  tags:['desescalada verbal','elementos de la técnica','reducción de tensión']
},
{
  id:'U9-RM-Q43', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Manejo del paciente difícil', sub:'Diferencia entre desescalada verbal y entrevista motivacional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué contexto se aplica más específicamente la entrevista motivacional, en comparación con la desescalada verbal?',
  ops:[
    'Cuando el paciente muestra resistencia a un cambio de comportamiento necesario, más que en una interacción tensa o de conflicto inmediato',
    'Ambas técnicas se aplican exactamente en el mismo contexto, sin ninguna diferencia de uso entre ellas', 'La entrevista motivacional se usa exclusivamente en situaciones de conflicto verbal inmediato con el paciente', 'La desescalada verbal se reserva exclusivamente para casos de resistencia a un cambio de comportamiento'],
  ok:0,
  clave:'Cuando el paciente muestra resistencia a un cambio de comportamiento necesario, más que en una interacción tensa o de conflicto inmediato.',
  exp:'La desescalada verbal reduce la tensión de una interacción difícil en el momento (un paciente hostil o exigente), mientras que la entrevista motivacional es una técnica más específica, útil sobre todo cuando el paciente muestra resistencia a un cambio de comportamiento necesario (dejar de fumar, adherirse a un tratamiento), un contexto distinto aunque relacionado.',
  no:{
    1:'Ambas técnicas, aunque relacionadas, tienen contextos de aplicación distintos: una para tensión inmediata, otra para resistencia al cambio.',
    2:'Es precisamente lo contrario: la entrevista motivacional se enfoca en la resistencia al CAMBIO DE COMPORTAMIENTO, no en el conflicto verbal inmediato.',
    3:'La desescalada verbal se aplica más ampliamente a interacciones tensas en general, no exclusivamente a la resistencia al cambio de comportamiento.'
  },
  trampa:'Confundir el contexto de aplicación de la desescalada verbal (tensión inmediata) con el de la entrevista motivacional (resistencia al cambio de comportamiento).',
  obj:'Distinguir el contexto de aplicación de la entrevista motivacional frente a la desescalada verbal.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 8.',
  tags:['entrevista motivacional','desescalada verbal','contexto de aplicación']
},
{
  id:'U9-RM-Q44', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Trabajo en equipo de salud', sub:'Composición del equipo multidisciplinario',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza a un equipo multidisciplinario en la atención de un paciente?',
  ops:[
    'Involucra a médicos de distintas especialidades, enfermería, personal de laboratorio y otros profesionales, cada uno aportando una perspectiva distinta pero coordinada',
    'Un equipo multidisciplinario está compuesto exclusivamente por médicos de la misma especialidad', 'La atención de un paciente complejo nunca requiere la participación de más de un profesional de salud', 'Cada miembro del equipo multidisciplinario trabaja de forma completamente independiente, sin ninguna coordinación'],
  ok:0,
  clave:'Involucra a médicos de distintas especialidades, enfermería, personal de laboratorio y otros profesionales, cada uno aportando una perspectiva distinta pero coordinada.',
  exp:'La atención de un paciente, especialmente en un caso complejo o en un entorno hospitalario, involucra típicamente a un equipo multidisciplinario: médicos de distintas especialidades, enfermería, personal de laboratorio y otros profesionales de salud, cada uno aportando una perspectiva y una función distinta, pero coordinada hacia un mismo objetivo de atención para ese paciente.',
  no:{
    1:'Un equipo multidisciplinario incluye profesionales de DISTINTAS disciplinas y especialidades, no exclusivamente médicos de la misma especialidad.',
    2:'Un caso complejo, precisamente, suele requerir la participación coordinada de múltiples profesionales de salud, no de uno solo.',
    3:'La coordinación entre los miembros del equipo es central para su funcionamiento; no trabajan de forma completamente independiente sin conexión.'
  },
  trampa:'Reducir el concepto de equipo multidisciplinario a un grupo de la misma especialidad, o asumir que trabajan sin ninguna coordinación real.',
  obj:'Describir la composición y el funcionamiento coordinado de un equipo multidisciplinario de salud.',
  ref:'OMS, Marco de competencias para la práctica interprofesional.',
  tags:['equipo multidisciplinario','coordinación','profesionales de salud']
},
{
  id:'U9-RM-Q45', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Trabajo en equipo de salud', sub:'Estructuras explícitas de coordinación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la coordinación entre los miembros de un equipo de salud requiere estructuras explícitas, y no puede depender solo de la buena voluntad individual?',
  ops:[
    'Porque estructuras como rondas conjuntas y formatos compartidos de registro permiten que la información relevante fluya sin depender de la iniciativa individual de cada profesional',
    'La coordinación entre profesionales de salud siempre ocurre de forma automática, sin necesitar ninguna estructura explícita', 'Depender de la buena voluntad individual de cada profesional siempre es más eficaz que cualquier estructura formal de coordinación', 'Las estructuras explícitas de coordinación no tienen ninguna relación real con la seguridad del paciente'],
  ok:0,
  clave:'Estructuras como rondas conjuntas y formatos compartidos de registro permiten que la información relevante fluya sin depender de la iniciativa individual de cada profesional.',
  exp:'Esta coordinación no ocurre de forma automática: requiere estructuras explícitas (rondas conjuntas, formatos compartidos de registro, canales claros de comunicación) que permitan que la información relevante fluya entre los distintos miembros del equipo sin depender de la buena voluntad individual de cada uno, que puede fallar bajo presión de tiempo o carga de trabajo.',
  no:{
    1:'La coordinación NO ocurre de forma automática; requiere estructuras explícitas deliberadamente diseñadas para funcionar de forma consistente.',
    2:'Depender solo de la buena voluntad individual es menos confiable que contar con estructuras explícitas, precisamente el punto central de esta pregunta.',
    3:'Las estructuras explícitas de coordinación tienen una relación directa con la seguridad del paciente, al reducir el riesgo de que la información se pierda.'
  },
  trampa:'Asumir que la coordinación entre profesionales de salud ocurre naturalmente sin necesitar estructuras explícitas de comunicación.',
  obj:'Explicar por qué la coordinación del equipo de salud requiere estructuras explícitas, no solo buena voluntad individual.',
  ref:'OMS, Marco de competencias para la práctica interprofesional.',
  tags:['estructuras de coordinación','rondas conjuntas','comunicación interprofesional']
},
{
  id:'U9-RM-Q46', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Trabajo en equipo de salud', sub:'Comunicación deficiente como causa de errores',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de fallas en la comunicación interprofesional se reconocen como causa evitable de errores médicos?',
  ops:[
    'Una indicación mal transmitida entre turnos, una nota clínica ambigua, o una duda no aclarada por jerarquía o falta de tiempo',
    'Los errores médicos nunca se relacionan con fallas de comunicación entre profesionales del equipo de salud', 'Solo los errores de medicación directa, nunca los de comunicación, son reconocidos como evitables en la práctica clínica', 'La comunicación interprofesional deficiente no tiene ninguna relación documentada con la seguridad del paciente'],
  ok:0,
  clave:'Una indicación mal transmitida entre turnos, una nota clínica ambigua, o una duda no aclarada por jerarquía o falta de tiempo.',
  exp:'La comunicación interprofesional deficiente -una indicación mal transmitida entre un turno y otro, una nota clínica ambigua, una duda no aclarada por jerarquía o por falta de tiempo- es una causa reconocida y evitable de errores médicos, afectando directamente la seguridad del paciente.',
  no:{
    1:'Los errores médicos sí se relacionan de forma documentada con fallas de comunicación interprofesional, precisamente el punto central de este tema.',
    2:'Las fallas de comunicación interprofesional también son reconocidas como causa evitable de errores médicos, no solo los errores directos de medicación.',
    3:'La comunicación interprofesional deficiente tiene una relación bien documentada y directa con la seguridad del paciente.'
  },
  trampa:'Subestimar el papel de las fallas de comunicación interprofesional como causa real y evitable de errores médicos.',
  obj:'Identificar los tipos de fallas de comunicación interprofesional reconocidas como causa evitable de errores médicos.',
  ref:'OMS, Marco de competencias para la práctica interprofesional.',
  tags:['comunicación interprofesional','causa de errores médicos','seguridad del paciente']
},
{
  id:'U9-RM-Q47', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Trabajo en equipo de salud', sub:'Herramientas estructuradas de transferencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Para qué se diseñan las herramientas estructuradas de comunicación, como los formatos estandarizados para transferir información entre turnos?',
  ops:[
    'Para asegurar que la información crítica no se pierda en la transición de un profesional a otro',
    'Estas herramientas se diseñan únicamente para cumplir requisitos administrativos, sin ningún propósito clínico real', 'Los formatos estandarizados de transferencia nunca han demostrado ningún beneficio real sobre la seguridad del paciente', 'Estas herramientas buscan reducir la cantidad total de información que se comparte entre turnos'],
  ok:0,
  clave:'Para asegurar que la información crítica no se pierda en la transición de un profesional a otro.',
  exp:'Herramientas estructuradas de comunicación (como formatos estandarizados para transferir información entre turnos o entre profesionales) buscan reducir precisamente el tipo de error causado por comunicación deficiente, asegurando que la información crítica no se pierda en la transición de un profesional a otro -un problema tan frecuente que ha generado protocolos específicos diseñados solo para prevenirlo.',
  no:{
    1:'Estas herramientas tienen un propósito clínico real y central: prevenir la pérdida de información crítica, no solo cumplir requisitos administrativos.',
    2:'Los formatos estandarizados de transferencia sí buscan mejorar la seguridad del paciente, siendo su propósito principal documentado.',
    3:'El objetivo no es reducir la cantidad de información compartida, sino asegurar que la información CRÍTICA se transmita de forma completa y clara.'
  },
  trampa:'Reducir el propósito de las herramientas estructuradas de comunicación a un requisito administrativo, sin reconocer su función clínica real de prevenir pérdida de información.',
  obj:'Explicar el propósito de las herramientas estructuradas de comunicación para la transferencia de información entre profesionales.',
  ref:'OMS, Marco de competencias para la práctica interprofesional.',
  tags:['formatos estandarizados','transferencia de información','prevención de errores']
},
{
  id:'U9-RM-Q48', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Trabajo en equipo de salud', sub:'El trabajo en equipo como parte de la ética del cuidado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se dice que la calidad del trabajo en equipo es, en sí misma, parte de la ética del cuidado, y no solo un aspecto logístico separado?',
  ops:[
    'Porque un profesional puede ser excelente individualmente en su relación con cada paciente, y aun así comprometer su seguridad si su comunicación con el equipo es deficiente',
    'El trabajo en equipo es exclusivamente un aspecto administrativo, sin ninguna relación real con la ética clínica', 'La ética del cuidado se agota completamente en la relación directa entre el médico y su paciente individual', 'La calidad del trabajo en equipo nunca tiene ningún impacto real sobre la seguridad del paciente'],
  ok:0,
  clave:'Un profesional puede ser excelente individualmente en su relación con cada paciente, y aun así comprometer su seguridad si su comunicación con el equipo es deficiente.',
  exp:'Reconocer que la calidad del trabajo en equipo es parte de la ética del cuidado tiene una implicación práctica: un profesional puede ser excelente individualmente en su relación con cada paciente, y aun así comprometer la seguridad de esos mismos pacientes si su comunicación con el resto del equipo es deficiente -la ética del cuidado no se agota en la díada médico-paciente.',
  no:{
    1:'El trabajo en equipo tiene una relación directa con la ética clínica, no es un aspecto puramente administrativo separado de ella.',
    2:'Es precisamente lo contrario: la ética del cuidado NO se agota en la relación individual médico-paciente; incluye la comunicación con el equipo completo.',
    3:'La calidad del trabajo en equipo sí tiene un impacto real y documentado sobre la seguridad del paciente, como muestra este mismo tema.'
  },
  trampa:'Reducir la ética del cuidado exclusivamente a la relación individual médico-paciente, sin reconocer que el trabajo en equipo también forma parte de ella.',
  obj:'Explicar por qué la calidad del trabajo en equipo es, en sí misma, parte de la ética del cuidado.',
  ref:'OMS, Marco de competencias para la práctica interprofesional.',
  tags:['ética del cuidado','trabajo en equipo','seguridad del paciente']
},
{
  id:'U9-RM-Q49', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Trabajo en equipo de salud', sub:'Cierre del bloque completo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo cierra este tema el bloque completo de Relación Médico-Paciente?',
  ops:[
    'Ampliando el enfoque: todo lo visto en el bloque -consentimiento, confidencialidad, bioética, malas noticias, paciente difícil- ocurre dentro de un sistema de atención en equipo',
    'Este tema no tiene ninguna relación real con los demás temas del bloque de Relación Médico-Paciente', 'Este tema contradice y anula por completo todo lo aprendido en los temas anteriores del bloque', 'El tema de trabajo en equipo reemplaza por completo la necesidad de una buena relación individual médico-paciente'],
  ok:0,
  clave:'Ampliando el enfoque: todo lo visto en el bloque ocurre dentro de un sistema de atención en equipo.',
  exp:'Este tema cierra el bloque completo de Relación Médico-Paciente ampliando su enfoque: todo lo visto -consentimiento informado, confidencialidad, bioética, comunicación de malas noticias, manejo de un paciente difícil- ocurre dentro de un sistema de atención en equipo, y la calidad de ese trabajo en equipo es, en sí misma, parte de la ética del cuidado.',
  no:{
    1:'Este tema tiene una relación explícita y de cierre con todos los demás temas del bloque, ampliando su enfoque hacia el contexto de equipo.',
    2:'Este tema no contradice lo anterior; lo complementa, mostrando que ocurre dentro de un contexto de atención en equipo más amplio.',
    3:'El trabajo en equipo complementa, no reemplaza, la importancia de la relación individual médico-paciente desarrollada en los temas anteriores.'
  },
  trampa:'No reconocer la función de cierre y ampliación de enfoque que este tema cumple respecto a todos los demás temas del bloque.',
  obj:'Explicar cómo el tema de trabajo en equipo cierra el bloque completo de Relación Médico-Paciente.',
  ref:'OMS, Marco de competencias para la práctica interprofesional.',
  tags:['cierre del bloque','sistema de atención en equipo','ampliación de enfoque']
},
{
  id:'U9-RM-Q50', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Trabajo en equipo de salud', sub:'La relación médico-paciente no ocurre en aislamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué idea central introduce este tema respecto a cómo ocurre, en la práctica real, la relación médico-paciente?',
  ops:[
    'Que la relación médico-paciente, aunque central, no ocurre en aislamiento: la atención real de un paciente casi siempre involucra a un equipo completo',
    'Que la relación médico-paciente es siempre exclusivamente entre un único médico y su paciente, sin ninguna otra persona involucrada', 'Que la comunicación dentro del equipo de salud nunca es tan determinante como la comunicación directa con el paciente', 'Que el trabajo en equipo de salud es un tema completamente ajeno a la relación médico-paciente'],
  ok:0,
  clave:'La relación médico-paciente, aunque central, no ocurre en aislamiento: la atención real de un paciente casi siempre involucra a un equipo completo.',
  exp:'Este último tema del bloque cierra recordando que la relación médico-paciente, aunque central, no ocurre en aislamiento: la atención real de un paciente casi siempre involucra a un equipo completo, y la comunicación DENTRO de ese equipo puede ser tan determinante para la seguridad del paciente como la comunicación con él.',
  no:{
    1:'Es precisamente lo contrario: la atención real casi siempre involucra a un EQUIPO completo, no exclusivamente a un único médico aislado.',
    2:'La comunicación dentro del equipo puede ser TAN determinante como la comunicación directa con el paciente, no menos importante.',
    3:'El trabajo en equipo está directamente relacionado con la relación médico-paciente, siendo el contexto real en que esta ocurre en la práctica.'
  },
  trampa:'Asumir que la relación médico-paciente ocurre de forma aislada, sin reconocer que la atención real involucra casi siempre a un equipo completo.',
  obj:'Explicar la idea central de que la relación médico-paciente ocurre dentro de un contexto de equipo, no en aislamiento.',
  ref:'OMS, Marco de competencias para la práctica interprofesional.',
  tags:['relación médico-paciente','contexto de equipo','no aislamiento']
}

]);
