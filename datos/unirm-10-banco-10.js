/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE SEMIOLOGIA QUIRURGICA (2/2)
   Continua unirm-10-banco-9.js. Prefijo U10-SQ-. Esta parte
   cubre semiologia vascular periferica, hernia, signos de
   irritacion peritoneal, trauma, drenajes/sondas y complicaciones
   postoperatorias tempranas (temas 7-12).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U10-SQ-Q26', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología vascular periférica', sub:'Interpretación de pulsos periféricos comparativos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué comparar los pulsos periféricos entre ambos lados del cuerpo es más informativo que evaluar un solo lado?',
  ops:[
    'Un pulso débil en una sola extremidad, comparado con un pulso normal en la contralateral, es mucho más sugestivo de patología localizada que un pulso débil bilateral y simétrico',
    'La comparación entre ambos lados del cuerpo nunca aporta ninguna información clínica adicional relevante', 'Un pulso débil bilateral y simétrico siempre sugiere patología localizada en una sola extremidad específica', 'Evaluar un solo lado del cuerpo siempre es suficiente para descartar cualquier patología vascular relevante'],
  ok:0,
  clave:'Un pulso débil en una sola extremidad, comparado con un pulso normal en la contralateral, es mucho más sugestivo de patología localizada que un pulso débil bilateral y simétrico.',
  exp:'Esta comparación entre ambos lados del cuerpo es clínicamente central: un pulso débil en una sola extremidad, comparado con un pulso normal en la contralateral, es mucho más sugestivo de patología localizada que un pulso débil bilateral y simétrico, que podría reflejar más bien un problema sistémico.',
  no:{
    1:'La comparación bilateral sí aporta información clínica relevante, distinguiendo patología localizada de un problema sistémico.',
    2:'Es precisamente lo contrario: un pulso débil BILATERAL y simétrico sugiere más bien un problema sistémico, no localizado.',
    3:'Evaluar solo un lado puede pasar por alto la comparación relevante que distingue patología localizada de un problema sistémico.'
  },
  trampa:'No reconocer el valor diagnóstico de comparar pulsos periféricos entre ambos lados del cuerpo para distinguir patología localizada de sistémica.',
  obj:'Explicar el valor de comparar pulsos periféricos entre ambos lados del cuerpo en el examen vascular.',
  ref:'Sabiston, Tratado de Cirugía, cap. 23.',
  tags:['pulsos periféricos','comparación bilateral','patología localizada vs. sistémica']
},
{
  id:'U10-SQ-Q27', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología vascular periférica', sub:'Las cinco P de la isquemia aguda de miembro',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los signos clásicos descritos como las "cinco P" de la isquemia aguda de miembro?',
  ops:[
    'Dolor (pain), palidez, ausencia de pulso (pulselessness), parestesias, y parálisis', 'Presión arterial, pulso, perfusión, piel y peso corporal del paciente', 'Palpitaciones, palidez, presión, pulso y postración generalizada', 'Pirexia, palidez, pulso, peristalsis y presión venosa central'],
  ok:0,
  clave:'Dolor (pain), palidez, ausencia de pulso (pulselessness), parestesias, y parálisis.',
  exp:'La isquemia de miembro aguda se manifiesta clásicamente con los signos descritos como las "cinco P": dolor (pain), palidez, ausencia de pulso (pulselessness), parestesias, y parálisis, en un cuadro que progresa rápidamente si no se restablece el flujo a tiempo.',
  no:{
    1:'Esta combinación no corresponde a las "cinco P" clásicas de la isquemia aguda de miembro.',
    2:'Esta combinación no corresponde a las "cinco P" clásicas de la isquemia aguda de miembro.',
    3:'Esta combinación no corresponde a las "cinco P" clásicas de la isquemia aguda de miembro.'
  },
  trampa:'Confundir las "cinco P" clásicas de la isquemia aguda de miembro con otros conjuntos de signos no relacionados directamente con este cuadro.',
  obj:'Recordar los signos clásicos de las "cinco P" de la isquemia aguda de miembro.',
  ref:'Sabiston, Tratado de Cirugía, cap. 23.',
  tags:['isquemia de miembro','cinco P','signos clásicos']
},
{
  id:'U10-SQ-Q28', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología vascular periférica', sub:'Distinguir problema arterial de venoso',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta una extremidad inferior con edema y cambios de coloración por estasis, pero con pulsos periféricos conservados y normales.',
  enunciado:'¿Qué tipo de patología sugiere este hallazgo, y por qué es clínicamente relevante distinguirla de un problema arterial?',
  ops:[
    'Sugiere insuficiencia venosa, no un problema arterial; su manejo, urgencia y pronóstico son completamente distintos a los de una isquemia arterial',
    'Este hallazgo sugiere isquemia arterial aguda, una emergencia quirúrgica idéntica en urgencia a la insuficiencia venosa', 'Los pulsos conservados no aportan ninguna información útil para distinguir entre un problema arterial y uno venoso', 'La insuficiencia venosa y la isquemia arterial aguda requieren exactamente el mismo manejo clínico urgente'],
  ok:0,
  clave:'Sugiere insuficiencia venosa, no un problema arterial; su manejo, urgencia y pronóstico son completamente distintos a los de una isquemia arterial.',
  exp:'Distinguir clínicamente entre un problema arterial (pulsos disminuidos, extremidad fría y pálida) y uno venoso (pulsos conservados, extremidad con edema y cambios de coloración por estasis) es fundamental, porque su manejo, su urgencia y su pronóstico son completamente distintos entre sí.',
  no:{
    1:'Los pulsos conservados son precisamente el dato que distingue este cuadro venoso de una isquemia arterial, donde los pulsos estarían disminuidos.',
    2:'La isquemia arterial aguda característicamente cursa con pulso AUSENTE o disminuido, no conservado como en este caso.',
    3:'Tienen manejos y urgencias claramente distintos: la insuficiencia venosa no tiene la amenaza inmediata de pérdida de extremidad.'
  },
  trampa:'Confundir un problema venoso crónico (pulsos conservados) con una isquemia arterial aguda (pulsos disminuidos o ausentes), ambos con urgencia muy distinta.',
  obj:'Distinguir clínicamente un problema venoso de uno arterial mediante la evaluación de pulsos periféricos.',
  ref:'Sabiston, Tratado de Cirugía, cap. 23.',
  tags:['insuficiencia venosa','distinción arterial vs. venoso','pulsos conservados']
},
{
  id:'U10-SQ-Q29', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología vascular periférica', sub:'Urgencia de la isquemia aguda de miembro',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la isquemia aguda de miembro se considera una verdadera emergencia quirúrgica, similar en lógica a la isquemia cerebral?',
  ops:[
    'El tejido privado de oxígeno tiene una ventana de tiempo limitada antes de que el daño se vuelva irreversible',
    'La isquemia aguda de miembro nunca representa ninguna urgencia real, pudiendo esperar una evaluación electiva programada', 'El tejido de una extremidad nunca sufre ningún daño irreversible por falta de flujo sanguíneo, sin importar el tiempo transcurrido', 'Esta condición no tiene ninguna relación real con el concepto de ventana de tiempo ya visto para la isquemia cerebral'],
  ok:0,
  clave:'El tejido privado de oxígeno tiene una ventana de tiempo limitada antes de que el daño se vuelva irreversible.',
  exp:'Esta condición comparte una lógica clínica directa con la isquemia cerebral ya vista en Anatomía Patológica II: el tejido privado de oxígeno tiene una ventana de tiempo limitada antes de que el daño se vuelva irreversible, lo que convierte a la isquemia aguda de miembro en una verdadera emergencia quirúrgica.',
  no:{
    1:'Es precisamente lo contrario: esta condición SÍ representa una urgencia real que no puede esperar una evaluación electiva.',
    2:'El tejido sí puede sufrir daño irreversible por falta de flujo sanguíneo prolongado, similar al mecanismo ya visto en isquemia cerebral.',
    3:'Comparte precisamente la misma lógica de ventana de tiempo limitada ya vista para la isquemia cerebral en Anatomía Patológica II.'
  },
  trampa:'Subestimar la urgencia real de la isquemia aguda de miembro, sin reconocer el mismo mecanismo de ventana de tiempo limitada ya visto en isquemia cerebral.',
  obj:'Explicar por qué la isquemia aguda de miembro se considera una emergencia quirúrgica, con lógica similar a la isquemia cerebral.',
  ref:'Sabiston, Tratado de Cirugía, cap. 23.',
  tags:['isquemia aguda de miembro','ventana de tiempo limitada','emergencia quirúrgica']
},
{
  id:'U10-SQ-Q30', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de la hernia', sub:'Distinción entre hernia reducible e irreducible',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue a una hernia reducible de una irreducible?',
  ops:[
    'La reducible es aquella cuyo contenido puede regresar manualmente a la cavidad abdominal con presión suave; la irreducible es aquella cuyo contenido queda atrapado sin poder regresar',
    'Ambos tipos de hernia son exactamente idénticos, sin ninguna diferencia clínica real entre ellos', 'La hernia irreducible es aquella que siempre puede regresar espontáneamente sin ninguna maniobra manual', 'La hernia reducible es la que queda atrapada permanentemente fuera de la cavidad abdominal'],
  ok:0,
  clave:'La reducible es aquella cuyo contenido puede regresar manualmente a la cavidad abdominal con presión suave; la irreducible es aquella cuyo contenido queda atrapado sin poder regresar.',
  exp:'Una hernia reducible es aquella cuyo contenido puede regresar manualmente a la cavidad abdominal con una presión suave, mientras que una hernia irreducible (o incarcerada) es aquella cuyo contenido queda atrapado fuera de la cavidad, sin poder regresar espontáneamente ni con maniobra manual.',
  no:{
    1:'Son tipos claramente distintos, con implicaciones clínicas diferentes según si el contenido puede o no regresar a la cavidad.',
    2:'Está invertido: la hernia IRREDUCIBLE es la que NO puede regresar espontáneamente, no la que sí puede.',
    3:'Es precisamente lo contrario: la REDUCIBLE es la que puede regresar (manualmente), y la IRREDUCIBLE es la que queda atrapada.'
  },
  trampa:'Invertir las definiciones de hernia reducible (puede regresar) e irreducible (queda atrapada), un error frecuente de terminología.',
  obj:'Distinguir una hernia reducible de una irreducible.',
  ref:'Sabiston, Tratado de Cirugía, cap. 44.',
  tags:['hernia reducible','hernia irreducible','primer paso clínico']
},
{
  id:'U10-SQ-Q31', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de la hernia', sub:'Mecanismo de la hernia estrangulada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurre en una hernia estrangulada, y con qué mecanismo ya visto en otro tema se relaciona directamente?',
  ops:[
    'El contenido atrapado pierde su aporte sanguíneo, retomando directamente el mecanismo de isquemia ya visto en semiología vascular periférica',
    'La hernia estrangulada describe simplemente una hernia de gran tamaño, sin ninguna relación con el aporte sanguíneo del contenido', 'Este mecanismo no tiene ninguna relación real con la isquemia ya vista en otros temas del bloque', 'Una hernia estrangulada siempre puede reducirse fácilmente con una maniobra manual suave, sin ninguna urgencia'],
  ok:0,
  clave:'El contenido atrapado pierde su aporte sanguíneo, retomando directamente el mecanismo de isquemia ya visto en semiología vascular periférica.',
  exp:'Una hernia estrangulada ocurre cuando el contenido atrapado de una hernia irreducible pierde su aporte sanguíneo, retomando directamente el mecanismo de isquemia ya visto en el tema anterior: el tejido comprometido comienza a sufrir daño isquémico progresivo.',
  no:{
    1:'El tamaño de la hernia no es el criterio definitorio; la estrangulación se define por la pérdida del aporte sanguíneo del contenido atrapado.',
    2:'Existe una relación directa y explícita con el mecanismo de isquemia ya visto en el tema de semiología vascular periférica.',
    3:'Es precisamente lo contrario: una hernia estrangulada NO puede reducirse fácilmente; requiere manejo quirúrgico urgente.'
  },
  trampa:'Confundir el mecanismo de estrangulación (pérdida de aporte sanguíneo) con el simple tamaño de la hernia, o asumir que puede reducirse fácilmente.',
  obj:'Explicar el mecanismo de la hernia estrangulada y su conexión con el concepto de isquemia ya visto.',
  ref:'Sabiston, Tratado de Cirugía, cap. 44.',
  tags:['hernia estrangulada','pérdida de aporte sanguíneo','conexión con isquemia']
},
{
  id:'U10-SQ-Q32', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de la hernia', sub:'Signos de alarma de estrangulamiento',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con una hernia inguinal irreducible presenta dolor intenso y progresivo sobre la hernia, cambios de coloración de la piel suprayacente, fiebre y signos sistémicos de toxicidad.',
  enunciado:'¿Qué conducta clínica requiere este cuadro?',
  ops:[
    'Requiere manejo quirúrgico urgente, sin el mismo margen de observación que una hernia simplemente irreducible sin estos signos de alarma',
    'Este cuadro puede manejarse de forma completamente ambulatoria y electiva, sin ninguna urgencia real', 'Los signos descritos nunca indican estrangulamiento, siendo simplemente una hernia irreducible sin complicaciones', 'Se debe esperar varios días de observación antes de considerar cualquier intervención quirúrgica en este caso'],
  ok:0,
  clave:'Requiere manejo quirúrgico urgente, sin el mismo margen de observación que una hernia simplemente irreducible sin estos signos de alarma.',
  exp:'Los signos de alarma que sugieren estrangulamiento -dolor intenso y progresivo, cambios de coloración de la piel suprayacente, fiebre, y signos sistémicos de toxicidad- convierten a esta condición en una emergencia quirúrgica verdadera, que no admite el mismo margen de observación que una hernia simplemente irreducible sin estos signos.',
  no:{
    1:'Este cuadro con signos de alarma requiere manejo urgente, no un abordaje ambulatorio y electivo sin urgencia.',
    2:'Estos signos son precisamente los que sugieren estrangulamiento, una complicación grave que requiere manejo inmediato.',
    3:'Esperar días de observación con estos signos de alarma retrasaría peligrosamente un manejo quirúrgico urgente necesario.'
  },
  trampa:'No reconocer los signos de alarma de estrangulamiento como indicación de manejo quirúrgico urgente, retrasando innecesariamente la intervención.',
  obj:'Identificar los signos de alarma de estrangulamiento herniaria y su implicación sobre la urgencia del manejo.',
  ref:'Sabiston, Tratado de Cirugía, cap. 44.',
  tags:['signos de alarma','estrangulamiento herniario','manejo quirúrgico urgente']
},
{
  id:'U10-SQ-Q33', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de la hernia', sub:'Pregunta clínica que determina la urgencia real',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la pregunta clínica que determina la urgencia real de cualquier hernia, más allá de su tamaño?',
  ops:[
    '¿Es reducible, y si no lo es, hay signos de compromiso del aporte sanguíneo del contenido atrapado?',
    'La única pregunta relevante ante cualquier hernia es determinar su tamaño exacto en centímetros', 'El tamaño de una hernia siempre determina por completo su urgencia clínica real, sin ningún otro factor', 'No existe ninguna pregunta clínica específica que determine la urgencia real de una hernia'],
  ok:0,
  clave:'¿Es reducible, y si no lo es, hay signos de compromiso del aporte sanguíneo del contenido atrapado?',
  exp:'Ante cualquier hernia, la pregunta clínica que determina la urgencia real no es "¿qué tan grande es?", sino "¿es reducible, y si no lo es, hay signos de compromiso del aporte sanguíneo del contenido atrapado?".',
  no:{
    1:'El tamaño no es la pregunta central; la pregunta clave es sobre reducibilidad y compromiso del aporte sanguíneo.',
    2:'Es precisamente lo contrario: el tamaño NO determina por completo la urgencia; la reducibilidad y el compromiso vascular sí lo hacen.',
    3:'Sí existe una pregunta clínica específica y bien definida que orienta la urgencia real de cualquier hernia.'
  },
  trampa:'Asumir que el tamaño de la hernia es el factor determinante de su urgencia clínica, en vez de la reducibilidad y el compromiso vascular.',
  obj:'Explicar la pregunta clínica central que determina la urgencia real de cualquier hernia.',
  ref:'Sabiston, Tratado de Cirugía, cap. 44.',
  tags:['pregunta clínica central','urgencia de la hernia','compromiso vascular']
},
{
  id:'U10-SQ-Q34', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Signos de irritación peritoneal', sub:'Valor de reconocer el patrón sin causa específica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es clínicamente valioso reconocer el patrón general de irritación peritoneal, sin necesitar todavía identificar la causa exacta?',
  ops:[
    'Orienta de inmediato hacia la necesidad de evaluación quirúrgica urgente, antes de tener un diagnóstico específico completo',
    'Reconocer el patrón general de irritación peritoneal nunca tiene ninguna utilidad clínica sin conocer la causa exacta primero', 'Es necesario identificar siempre la causa específica exacta antes de considerar cualquier evaluación quirúrgica urgente', 'El patrón de irritación peritoneal es completamente distinto según cada causa específica, sin ningún elemento común reconocible'],
  ok:0,
  clave:'Orienta de inmediato hacia la necesidad de evaluación quirúrgica urgente, antes de tener un diagnóstico específico completo.',
  exp:'Reconocer este patrón general de irritación peritoneal, sin necesitar todavía identificar la causa exacta, es clínicamente valioso porque orienta de inmediato hacia la necesidad de evaluación quirúrgica urgente, retomando el mismo principio ya visto en el abdomen agudo.',
  no:{
    1:'Es precisamente lo contrario: reconocer el patrón general SÍ tiene utilidad clínica inmediata, sin necesitar la causa exacta primero.',
    2:'La decisión de evaluación quirúrgica urgente puede y debe tomarse antes de tener un diagnóstico específico completo.',
    3:'El patrón general es reconocible independientemente de la causa específica subyacente, precisamente su valor clínico central.'
  },
  trampa:'Asumir que se necesita conocer la causa específica exacta antes de poder actuar clínicamente ante signos de irritación peritoneal.',
  obj:'Explicar el valor clínico de reconocer el patrón general de irritación peritoneal sin conocer la causa específica.',
  ref:'Sabiston, Tratado de Cirugía, cap. 46.',
  tags:['patrón general reconocible','valor clínico independiente de causa','evaluación quirúrgica urgente']
},
{
  id:'U10-SQ-Q35', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Signos de irritación peritoneal', sub:'Defensa voluntaria vs. involuntaria',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué distinguir la defensa abdominal voluntaria de la involuntaria requiere técnica y experiencia clínica?',
  ops:[
    'Porque solo la defensa involuntaria verdadera es un signo confiable de irritación peritoneal real, mientras que la voluntaria puede confundir el examen',
    'Ambos tipos de defensa abdominal tienen exactamente el mismo valor diagnóstico, sin ninguna diferencia real entre ellas', 'La defensa abdominal voluntaria siempre es un signo más confiable que la involuntaria para diagnosticar irritación peritoneal', 'Distinguir entre ambos tipos de defensa nunca requiere ninguna técnica especial por parte del examinador'],
  ok:0,
  clave:'Solo la defensa involuntaria verdadera es un signo confiable de irritación peritoneal real, mientras que la voluntaria puede confundir el examen.',
  exp:'Esta defensa puede ser voluntaria (el paciente contrae conscientemente los músculos por miedo al dolor, lo que puede confundir el examen) o involuntaria (un reflejo verdadero); distinguir entre ambas requiere técnica y experiencia, porque solo la defensa involuntaria verdadera es un signo confiable de irritación peritoneal real.',
  no:{
    1:'Tienen un valor diagnóstico claramente distinto: solo la involuntaria es un signo confiable de irritación peritoneal real.',
    2:'Es precisamente lo contrario: la defensa INVOLUNTARIA es el signo más confiable, no la voluntaria, que puede confundir el examen.',
    3:'Distinguir entre ambos tipos sí requiere técnica específica y experiencia clínica por parte del examinador para ser confiable.'
  },
  trampa:'Confundir la defensa abdominal voluntaria (por miedo, poco confiable) con la involuntaria (reflejo real, confiable), o asumir que son equivalentes.',
  obj:'Explicar la diferencia de valor diagnóstico entre la defensa abdominal voluntaria e involuntaria.',
  ref:'Sabiston, Tratado de Cirugía, cap. 46.',
  tags:['defensa abdominal','voluntaria vs. involuntaria','confiabilidad diagnóstica']
},
{
  id:'U10-SQ-Q36', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Signos de irritación peritoneal', sub:'Mecanismo del signo de Blumberg',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el mecanismo por el cual el signo de Blumberg produce dolor al retirar la mano, más que durante la palpación misma?',
  ops:[
    'El movimiento súbito del peritoneo inflamado, al soltar la presión, genera un estímulo doloroso mayor que la compresión sostenida',
    'Este signo no tiene ningún mecanismo fisiológico conocido que explique por qué el dolor ocurre al retirar la mano', 'El dolor durante la compresión sostenida siempre es mayor que el dolor al retirar la mano en este signo', 'El signo de Blumberg y el signo de rebote son fenómenos completamente distintos y sin ninguna relación entre sí'],
  ok:0,
  clave:'El movimiento súbito del peritoneo inflamado, al soltar la presión, genera un estímulo doloroso mayor que la compresión sostenida.',
  exp:'El signo de Blumberg es el nombre técnico del signo de rebote: el mecanismo detrás de este signo es que el movimiento súbito del peritoneo inflamado, al soltar la presión, genera un estímulo doloroso mayor que la compresión sostenida.',
  no:{
    1:'Sí existe un mecanismo fisiológico bien establecido que explica este fenómeno del signo de Blumberg.',
    2:'Es precisamente lo contrario: el dolor AL RETIRAR la mano (rebote) suele ser mayor que durante la compresión sostenida.',
    3:'El signo de Blumberg es, de hecho, el nombre técnico del mismo signo de rebote ya introducido en el abdomen agudo, no un fenómeno distinto.'
  },
  trampa:'Confundir el signo de Blumberg con un fenómeno distinto al signo de rebote, o invertir el momento en que ocurre el dolor característico.',
  obj:'Explicar el mecanismo fisiológico detrás del signo de Blumberg.',
  ref:'Sabiston, Tratado de Cirugía, cap. 46.',
  tags:['signo de Blumberg','mecanismo fisiológico','signo de rebote']
},
{
  id:'U10-SQ-Q37', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Signos de irritación peritoneal', sub:'Valor del conjunto semiológico completo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el conjunto de signos de irritación peritoneal (defensa involuntaria, signo de Blumberg, patrón de dolor con el movimiento) tiene más valor predictivo tomado en su totalidad que cada signo por separado?',
  ops:[
    'Porque tomado en su totalidad tiene un valor predictivo considerable para identificar la necesidad de evaluación quirúrgica urgente, más allá de lo que cualquier signo aislado aportaría',
    'Cada signo individual, evaluado por separado, siempre tiene exactamente el mismo valor predictivo que el conjunto completo', 'El conjunto de signos de irritación peritoneal nunca aporta ningún valor predictivo adicional sobre un signo aislado', 'Solo el signo de Blumberg, sin ningún otro signo adicional, es suficiente para predecir la necesidad de cirugía'],
  ok:0,
  clave:'Tomado en su totalidad tiene un valor predictivo considerable para identificar la necesidad de evaluación quirúrgica urgente, más allá de lo que cualquier signo aislado aportaría.',
  exp:'Este signo, junto con la defensa abdominal involuntaria y el patrón general de dolor que empeora con el movimiento, forma un conjunto semiológico reconocible que, tomado en su totalidad, tiene un valor predictivo considerable, más allá de lo que cualquiera de estos signos aportaría de forma aislada.',
  no:{
    1:'El conjunto completo de signos tiene un valor predictivo mayor que cada signo individual evaluado de forma aislada.',
    2:'El conjunto completo sí aporta un valor predictivo adicional considerable sobre la evaluación de un solo signo aislado.',
    3:'Ningún signo aislado, incluido el de Blumberg, es por sí solo suficiente; el valor predictivo mejora al considerar el conjunto completo.'
  },
  trampa:'Asumir que un solo signo aislado (como el de Blumberg) es suficiente por sí solo, sin reconocer el valor adicional del conjunto semiológico completo.',
  obj:'Explicar el mayor valor predictivo del conjunto de signos de irritación peritoneal sobre cada signo aislado.',
  ref:'Sabiston, Tratado de Cirugía, cap. 46.',
  tags:['conjunto semiológico','valor predictivo combinado','irritación peritoneal']
},
{
  id:'U10-SQ-Q38', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología del trauma', sub:'Valor predictivo del mecanismo de lesión',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué información aporta el mecanismo de lesión, incluso antes de completar el examen físico del paciente traumatizado?',
  ops:[
    'Información predictiva real sobre qué tipo de lesiones internas es más probable encontrar, según la velocidad del impacto, la dirección de la fuerza y el tipo de objeto involucrado',
    'El mecanismo de lesión nunca aporta ninguna información útil sobre el tipo de lesiones internas que podría tener el paciente', 'Solo el examen físico directo, sin ninguna consideración del mecanismo de lesión, determina el manejo del paciente traumatizado', 'El mecanismo de lesión es relevante únicamente si el paciente presenta lesiones externas visibles evidentes'],
  ok:0,
  clave:'Información predictiva real sobre qué tipo de lesiones internas es más probable encontrar, según la velocidad del impacto, la dirección de la fuerza y el tipo de objeto involucrado.',
  exp:'El mecanismo de lesión aporta información predictiva real sobre qué tipo de lesiones internas es más probable encontrar, incluso antes de completar el examen físico: un impacto de alta energía sugiere la posibilidad de lesiones internas graves aunque la superficie externa luzca relativamente intacta.',
  no:{
    1:'El mecanismo de lesión sí aporta información predictiva real y valiosa, complementando directamente el examen físico.',
    2:'El mecanismo de lesión complementa el examen físico, aportando información predictiva que este por sí solo podría no capturar.',
    3:'El mecanismo de lesión es relevante incluso SIN lesiones externas visibles evidentes, precisamente porque puede predecir daño interno oculto.'
  },
  trampa:'Subestimar el valor predictivo del mecanismo de lesión, asumiendo que solo el examen físico directo determina el manejo del paciente.',
  obj:'Explicar el valor predictivo del mecanismo de lesión en la evaluación de un paciente traumatizado.',
  ref:'Sabiston, Tratado de Cirugía, cap. 7.',
  tags:['mecanismo de lesión','valor predictivo','evaluación del trauma']
},
{
  id:'U10-SQ-Q39', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología del trauma', sub:'Trayectoria en trauma penetrante',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué en el trauma penetrante es importante razonar sobre la trayectoria probable del objeto, no solo sobre el punto de entrada visible?',
  ops:[
    'Porque estructuras vitales pueden estar comprometidas aunque el punto de entrada externo parezca pequeño y poco alarmante',
    'En el trauma penetrante, solo el punto de entrada visible importa clínicamente, sin ninguna relevancia de la trayectoria interna', 'El tamaño del punto de entrada siempre predice con exactitud la gravedad real del daño interno causado', 'La trayectoria del objeto nunca puede estimarse razonablemente a partir del punto de entrada y el mecanismo descrito'],
  ok:0,
  clave:'Porque estructuras vitales pueden estar comprometidas aunque el punto de entrada externo parezca pequeño y poco alarmante.',
  exp:'El trauma penetrante exige razonar no solo sobre el punto de entrada visible, sino sobre la trayectoria probable que siguió el objeto dentro del cuerpo, porque estructuras vitales pueden estar comprometidas aunque el punto de entrada externo parezca pequeño y poco alarmante.',
  no:{
    1:'El punto de entrada visible no es suficiente por sí solo; la trayectoria interna estimada también es clínicamente relevante.',
    2:'Es precisamente lo contrario: un punto de entrada pequeño puede ocultar un daño interno grave, sin relación proporcional directa.',
    3:'La trayectoria sí puede estimarse razonablemente combinando la localización del punto de entrada con el mecanismo descrito del trauma.'
  },
  trampa:'Asumir que el tamaño del punto de entrada visible predice de forma confiable la gravedad del daño interno en trauma penetrante.',
  obj:'Explicar por qué razonar sobre la trayectoria probable es importante en la evaluación del trauma penetrante.',
  ref:'Sabiston, Tratado de Cirugía, cap. 7.',
  tags:['trauma penetrante','trayectoria del objeto','punto de entrada engañoso']
},
{
  id:'U10-SQ-Q40', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología del trauma', sub:'Discordancia entre apariencia externa y daño interno',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente involucrado en una colisión vehicular de alta energía llega al servicio de urgencias luciendo estable, sin hallazgos externos alarmantes evidentes.',
  enunciado:'¿Qué principio de la semiología del trauma debe guiar la conducta clínica ante este paciente?',
  ops:[
    'El mecanismo de alta energía debe hacer sospechar lesiones internas significativas incluso si el paciente inicialmente luce estable y sin hallazgos externos alarmantes',
    'Si el paciente luce estable y sin hallazgos externos alarmantes, se puede descartar con seguridad cualquier lesión interna significativa', 'El mecanismo de lesión de alta energía pierde toda su relevancia clínica si el examen físico inicial es tranquilizador', 'Solo se debe investigar más allá del examen físico inicial si el paciente presenta síntomas evidentes desde el primer momento'],
  ok:0,
  clave:'El mecanismo de alta energía debe hacer sospechar lesiones internas significativas incluso si el paciente inicialmente luce estable y sin hallazgos externos alarmantes.',
  exp:'Esta discordancia posible entre apariencia externa y daño interno real es la razón por la cual el mecanismo de lesión se considera información clínica valiosa por derecho propio: un mecanismo de alta energía debe hacer sospechar lesiones internas significativas incluso si el paciente inicialmente luce estable.',
  no:{
    1:'No se puede descartar con seguridad una lesión interna significativa solo porque el paciente luce estable inicialmente.',
    2:'El mecanismo de alta energía mantiene su relevancia clínica incluso con un examen físico inicial tranquilizador.',
    3:'La sospecha de lesión interna, ante un mecanismo de alta energía, debe mantenerse activa aunque no haya síntomas evidentes de inmediato.'
  },
  trampa:'Descartar la posibilidad de lesión interna significativa solo porque el examen físico inicial y la apariencia del paciente son tranquilizadores.',
  obj:'Aplicar el principio de sospecha activa de lesión interna ante un mecanismo de alta energía, pese a apariencia externa estable.',
  ref:'Sabiston, Tratado de Cirugía, cap. 7.',
  tags:['discordancia apariencia-daño interno','mecanismo de alta energía','sospecha activa']
},
{
  id:'U10-SQ-Q41', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología del trauma', sub:'Fuentes de información sobre el mecanismo de lesión',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿De qué fuentes se obtiene idealmente la información sobre el mecanismo de lesión de un paciente traumatizado?',
  ops:[
    'Del propio paciente, de testigos, o del personal de emergencias que trasladó al paciente', 'Únicamente del propio paciente, sin ninguna otra fuente de información posible o relevante', 'Exclusivamente de los estudios de imagen realizados, sin ninguna información verbal previa', 'El mecanismo de lesión nunca puede obtenerse de ninguna fuente confiable en la práctica clínica real'],
  ok:0,
  clave:'Del propio paciente, de testigos, o del personal de emergencias que trasladó al paciente.',
  exp:'Esta información, obtenida idealmente del propio paciente, de testigos, o del personal de emergencias que trasladó al paciente, complementa directamente la evaluación del trauma sistemática ya vista en el ABCDE de Soporte Vital.',
  no:{
    1:'Existen múltiples fuentes posibles además del propio paciente: testigos y personal de emergencias también aportan esta información.',
    2:'Los estudios de imagen no son la fuente primaria de esta información; la información verbal previa complementa la evaluación.',
    3:'Sí existen fuentes confiables y habituales para obtener esta información en la práctica clínica real del trauma.'
  },
  trampa:'Limitar las fuentes de información sobre el mecanismo de lesión únicamente al paciente, ignorando testigos y personal de emergencias.',
  obj:'Identificar las fuentes desde las cuales se obtiene idealmente la información sobre el mecanismo de lesión.',
  ref:'Sabiston, Tratado de Cirugía, cap. 7.',
  tags:['fuentes de información','mecanismo de lesión','personal de emergencias']
},
{
  id:'U10-SQ-Q42', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Drenajes y sondas quirúrgicas', sub:'El drenaje como ventana de vigilancia clínica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple un drenaje quirúrgico, más allá de simplemente evacuar líquido de un espacio interno?',
  ops:[
    'Funciona como una ventana de vigilancia clínica: la cantidad, color y consistencia de lo que produce aporta información diagnóstica activa sobre la evolución del paciente',
    'Un drenaje quirúrgico cumple únicamente la función de evacuar líquido, sin ningún valor de vigilancia clínica adicional', 'La cantidad y características de lo que drena un dispositivo quirúrgico nunca aportan ninguna información clínica útil', 'Un drenaje solo debe revisarse al momento de retirarlo, sin ninguna vigilancia activa durante su permanencia'],
  ok:0,
  clave:'Funciona como una ventana de vigilancia clínica: la cantidad, color y consistencia de lo que produce aporta información diagnóstica activa sobre la evolución del paciente.',
  exp:'Más allá de su función evacuadora, un drenaje también funciona como una ventana de vigilancia clínica: la cantidad, el color y la consistencia de lo que produce a lo largo del tiempo aportan información diagnóstica activa sobre la evolución del paciente.',
  no:{
    1:'Un drenaje cumple una función dual: evacuadora y de vigilancia clínica activa, no solo la primera.',
    2:'Estas características sí aportan información clínica útil y activa sobre la evolución del paciente en el postoperatorio.',
    3:'Un drenaje requiere vigilancia activa continua durante su permanencia, no solo revisión al momento de retirarlo.'
  },
  trampa:'Reducir la función de un drenaje quirúrgico exclusivamente a la evacuación de líquido, sin reconocer su valor como herramienta de vigilancia clínica.',
  obj:'Explicar la función de vigilancia clínica que cumple un drenaje quirúrgico, más allá de la evacuación.',
  ref:'Sabiston, Tratado de Cirugía, cap. 13.',
  tags:['drenaje quirúrgico','ventana de vigilancia','información diagnóstica activa']
},
{
  id:'U10-SQ-Q43', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Drenajes y sondas quirúrgicas', sub:'Interpretación del débito de una sonda nasogástrica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué sugiere un débito por sonda nasogástrica que se mantiene persistente o en aumento en un paciente con obstrucción intestinal?',
  ops:[
    'Sugiere que la obstrucción sigue activa, a diferencia de un débito que disminuye progresivamente, que sugeriría resolución del cuadro',
    'Un débito persistente o en aumento siempre indica resolución exitosa de la obstrucción intestinal del paciente', 'El débito de una sonda nasogástrica nunca aporta ninguna información útil sobre la evolución de una obstrucción intestinal', 'Un débito en aumento y uno en disminución tienen exactamente el mismo significado clínico en este contexto'],
  ok:0,
  clave:'Sugiere que la obstrucción sigue activa, a diferencia de un débito que disminuye progresivamente, que sugeriría resolución del cuadro.',
  exp:'El volumen y las características de lo que drena por una sonda nasogástrica orientan directamente sobre la evolución clínica: un débito que disminuye progresivamente en un paciente con obstrucción intestinal sugiere resolución del cuadro, mientras que un débito persistente o en aumento sugiere que la obstrucción sigue activa.',
  no:{
    1:'Es precisamente lo contrario: un débito persistente o en aumento sugiere que la obstrucción SIGUE activa, no que se resolvió.',
    2:'El débito de una sonda nasogástrica sí aporta información clínica valiosa sobre la evolución de una obstrucción intestinal.',
    3:'Tienen significados claramente distintos: uno sugiere resolución (disminución), el otro sugiere persistencia (aumento) de la obstrucción.'
  },
  trampa:'Invertir el significado clínico del débito de una sonda nasogástrica, asumiendo que un aumento sugiere resolución en vez de persistencia.',
  obj:'Interpretar correctamente el débito de una sonda nasogástrica en un paciente con obstrucción intestinal.',
  ref:'Sabiston, Tratado de Cirugía, cap. 13.',
  tags:['sonda nasogástrica','débito persistente','evolución de la obstrucción']
},
{
  id:'U10-SQ-Q44', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Drenajes y sondas quirúrgicas', sub:'Valor de la sonda vesical en el postoperatorio',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la producción horaria de orina, medida por sonda vesical, es un dato clínico especialmente valioso en el postoperatorio inmediato?',
  ops:[
    'Refleja indirectamente el estado de perfusión renal y, por extensión, del estado circulatorio general del paciente, pudiendo alertar tempranamente sobre un problema en desarrollo',
    'La producción de orina medida por sonda vesical nunca tiene ninguna relación real con el estado circulatorio del paciente', 'Este dato clínico solo es relevante para evaluar la función renal, sin ninguna relación con el estado circulatorio general', 'La producción horaria de orina nunca precede a cambios en los signos vitales convencionales en un problema circulatorio'],
  ok:0,
  clave:'Refleja indirectamente el estado de perfusión renal y, por extensión, del estado circulatorio general del paciente, pudiendo alertar tempranamente sobre un problema en desarrollo.',
  exp:'La producción horaria de orina refleja indirectamente el estado de perfusión renal y, por extensión, del estado circulatorio general del paciente. Una disminución significativa puede ser, en el contexto postoperatorio, una de las primeras señales de alarma de un problema circulatorio en desarrollo, precediendo con frecuencia a cambios más evidentes en los signos vitales convencionales.',
  no:{
    1:'Este dato sí tiene una relación directa con el estado circulatorio general, no solo con la función renal aislada.',
    2:'Este dato refleja tanto la función renal como, indirectamente, el estado circulatorio general más amplio del paciente.',
    3:'La producción de orina con frecuencia PRECEDE a cambios más evidentes en los signos vitales convencionales, siendo una alerta temprana.'
  },
  trampa:'Limitar el valor de la producción urinaria por sonda vesical a la función renal aislada, sin reconocer su valor como alerta temprana circulatoria.',
  obj:'Explicar por qué la producción horaria de orina es un dato clínico valioso en el postoperatorio inmediato.',
  ref:'Sabiston, Tratado de Cirugía, cap. 13.',
  tags:['sonda vesical','producción horaria de orina','alerta temprana circulatoria']
},
{
  id:'U10-SQ-Q45', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Drenajes y sondas quirúrgicas', sub:'Detección temprana de un drenaje con sangre franca',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un drenaje quirúrgico que previamente producía un líquido seroso de poca cantidad comienza súbitamente a producir sangre franca en cantidad significativa.',
  enunciado:'¿Qué alerta este cambio en la producción del drenaje?',
  ops:[
    'Alerta sobre un posible sangrado postoperatorio activo, antes de que otros signos clínicos se hagan evidentes',
    'Este cambio en la producción del drenaje nunca tiene ninguna relación real con un posible sangrado postoperatorio', 'Un cambio en la producción de un drenaje siempre debe ignorarse hasta que aparezcan otros signos clínicos evidentes', 'La producción de sangre franca por un drenaje es siempre un hallazgo esperado y sin ninguna relevancia clínica'],
  ok:0,
  clave:'Alerta sobre un posible sangrado postoperatorio activo, antes de que otros signos clínicos se hagan evidentes.',
  exp:'Un drenaje que de pronto produce sangre franca en cantidad significativa alerta sobre un posible sangrado postoperatorio activo antes de que otros signos clínicos se hagan evidentes -precisamente el valor del drenaje como ventana de vigilancia clínica activa.',
  no:{
    1:'Este cambio sí tiene una relación directa y relevante con la posibilidad de un sangrado postoperatorio activo en desarrollo.',
    2:'Este cambio debe atenderse de inmediato, no ignorarse hasta que aparezcan otros signos clínicos más evidentes y tardíos.',
    3:'Un cambio súbito de líquido seroso a sangre franca en cantidad significativa es un hallazgo de alarma, no un hallazgo esperado normal.'
  },
  trampa:'Ignorar un cambio súbito en la producción de un drenaje, esperando a que aparezcan otros signos clínicos más evidentes de sangrado.',
  obj:'Reconocer un cambio en la producción de un drenaje como alerta temprana de sangrado postoperatorio activo.',
  ref:'Sabiston, Tratado de Cirugía, cap. 13.',
  tags:['cambio en el drenaje','sangrado postoperatorio','alerta temprana']
},
{
  id:'U10-SQ-Q46', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Complicaciones postoperatorias tempranas', sub:'Patrón temporal de la infección de sitio quirúrgico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué período postoperatorio típicamente aparecen los signos de infección de sitio quirúrgico?',
  ops:[
    'Entre el tercer y el séptimo día postoperatorio, un patrón temporal que ayuda a distinguirla de otras complicaciones tempranas', 'En las primeras horas inmediatamente después de finalizada la cirugía, nunca después', 'Los signos de infección de sitio quirúrgico nunca siguen ningún patrón temporal reconocible', 'Solo después de varios meses de finalizada la cirugía, nunca en la primera semana postoperatoria'],
  ok:0,
  clave:'Entre el tercer y el séptimo día postoperatorio, un patrón temporal que ayuda a distinguirla de otras complicaciones tempranas.',
  exp:'Los signos de infección de sitio quirúrgico típicamente aparecen entre el tercer y el séptimo día postoperatorio, un patrón temporal que ayuda a distinguirla de otras complicaciones tempranas con un curso temporal distinto.',
  no:{
    1:'Los signos de infección típicamente NO aparecen en las primeras horas; siguen un patrón temporal más tardío (día 3-7).',
    2:'Sí existe un patrón temporal reconocible y clínicamente útil para la infección de sitio quirúrgico.',
    3:'Este patrón corresponde a la primera semana postoperatoria, no a varios meses después de la cirugía.'
  },
  trampa:'Confundir el patrón temporal característico de la infección de sitio quirúrgico (días 3-7) con otro momento postoperatorio distinto.',
  obj:'Identificar el patrón temporal característico de aparición de la infección de sitio quirúrgico.',
  ref:'Sabiston, Tratado de Cirugía, cap. 13.',
  tags:['infección de sitio quirúrgico','patrón temporal','días 3-7 postoperatorios']
},
{
  id:'U10-SQ-Q47', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Complicaciones postoperatorias tempranas', sub:'Dehiscencia completa vs. parcial',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta una dehiscencia completa de una herida abdominal, con exposición del contenido intestinal.',
  enunciado:'¿Qué conducta clínica requiere este escenario, comparado con una dehiscencia parcial y superficial?',
  ops:[
    'Es una emergencia quirúrgica real que requiere manejo inmediato, a diferencia de una dehiscencia parcial y superficial, que puede manejarse de forma más conservadora',
    'Ambos tipos de dehiscencia (completa y parcial) requieren exactamente el mismo manejo clínico, sin ninguna diferencia real', 'Una dehiscencia completa con exposición intestinal nunca representa ninguna urgencia real que requiera manejo inmediato', 'Se debe manejar de forma conservadora, sin ninguna intervención quirúrgica, incluso con exposición de contenido intestinal'],
  ok:0,
  clave:'Es una emergencia quirúrgica real que requiere manejo inmediato, a diferencia de una dehiscencia parcial y superficial, que puede manejarse de forma más conservadora.',
  exp:'Una dehiscencia completa, especialmente en una herida abdominal donde puede exponerse el contenido intestinal, es una emergencia quirúrgica real que requiere manejo inmediato, mientras que una dehiscencia parcial y superficial puede, en ocasiones, manejarse de forma más conservadora.',
  no:{
    1:'Tienen manejos claramente distintos según su gravedad: la completa con exposición intestinal requiere manejo urgente inmediato.',
    2:'Es precisamente lo contrario: una dehiscencia completa con exposición intestinal SÍ representa una urgencia real inmediata.',
    3:'Este escenario con exposición de contenido intestinal requiere intervención quirúrgica, no manejo puramente conservador.'
  },
  trampa:'Tratar una dehiscencia completa con exposición intestinal con el mismo manejo conservador que sería apropiado para una dehiscencia parcial superficial.',
  obj:'Distinguir el manejo clínico requerido entre una dehiscencia completa con exposición intestinal y una parcial superficial.',
  ref:'Sabiston, Tratado de Cirugía, cap. 13.',
  tags:['dehiscencia completa','emergencia quirúrgica','manejo diferenciado']
},
{
  id:'U10-SQ-Q48', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Complicaciones postoperatorias tempranas', sub:'Mecanismo del íleo postoperatorio',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué combinación de factores explica el íleo postoperatorio esperado tras una cirugía abdominal?',
  ops:[
    'La propia manipulación quirúrgica del intestino, los efectos de la anestesia, y el uso de opioides para el control del dolor postoperatorio',
    'El íleo postoperatorio se debe exclusivamente a una infección activa del intestino, sin ninguna relación con la cirugía o la anestesia', 'Los opioides nunca tienen ninguna relación real con la disminución de la motilidad intestinal en el postoperatorio', 'El íleo postoperatorio ocurre únicamente por errores en la técnica quirúrgica, sin ningún otro factor contribuyente'],
  ok:0,
  clave:'La propia manipulación quirúrgica del intestino, los efectos de la anestesia, y el uso de opioides para el control del dolor postoperatorio.',
  exp:'El íleo postoperatorio es la disminución transitoria y esperable de la motilidad intestinal normal tras cualquier cirugía, especialmente abdominal, causada por una combinación de la propia manipulación quirúrgica del intestino, los efectos de la anestesia, y el uso de opioides, retomando directamente el efecto de los opioides sobre la motilidad gastrointestinal ya visto en Farmacoterapéutica.',
  no:{
    1:'El íleo postoperatorio no se debe a una infección; es un fenómeno esperado por la combinación de manipulación quirúrgica, anestesia y opioides.',
    2:'Los opioides sí tienen una relación directa y bien documentada con la disminución de la motilidad intestinal, ya vista en Farmacoterapéutica.',
    3:'El íleo postoperatorio es esperado incluso con una técnica quirúrgica correcta, por los otros factores combinados que lo explican.'
  },
  trampa:'Confundir el íleo postoperatorio esperado con una complicación infecciosa o de técnica quirúrgica, ignorando los factores combinados reales.',
  obj:'Explicar la combinación de factores que causa el íleo postoperatorio esperado tras una cirugía abdominal.',
  ref:'Sabiston, Tratado de Cirugía, cap. 13.',
  tags:['íleo postoperatorio','manipulación quirúrgica','efecto de opioides']
},
{
  id:'U10-SQ-Q49', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Complicaciones postoperatorias tempranas', sub:'Distinguir íleo de obstrucción mecánica real',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué distinguir un íleo postoperatorio normal de una obstrucción intestinal mecánica real es un reto clínico frecuente?',
  ops:[
    'Exige vigilar la evolución en el tiempo, no solo el hallazgo aislado en un momento dado, ya que el íleo se resuelve progresivamente mientras que la obstrucción mecánica no lo hace espontáneamente',
    'Un íleo postoperatorio y una obstrucción intestinal mecánica real son exactamente el mismo fenómeno, sin ninguna diferencia clínica', 'Esta distinción nunca requiere vigilar la evolución del paciente en el tiempo, se determina en un único momento aislado', 'La obstrucción intestinal mecánica siempre se resuelve espontáneamente igual de rápido que un íleo postoperatorio normal'],
  ok:0,
  clave:'Exige vigilar la evolución en el tiempo, no solo el hallazgo aislado, ya que el íleo se resuelve progresivamente mientras que la obstrucción mecánica no lo hace espontáneamente.',
  exp:'Distinguir un íleo postoperatorio normal y esperado (que se resuelve progresivamente en los días siguientes) de una obstrucción intestinal mecánica real (que no se resuelve espontáneamente y puede requerir reintervención) es un reto clínico frecuente, que exige vigilar la evolución en el tiempo, no solo el hallazgo aislado en un momento dado.',
  no:{
    1:'Son fenómenos distintos: el íleo se resuelve progresivamente, mientras que la obstrucción mecánica real no lo hace espontáneamente.',
    2:'Esta distinción sí requiere vigilar la evolución del paciente en el tiempo, no puede determinarse en un único momento aislado.',
    3:'Es precisamente lo contrario: la obstrucción mecánica real NO se resuelve espontáneamente, a diferencia del íleo postoperatorio esperado.'
  },
  trampa:'Confundir el íleo postoperatorio esperado con una obstrucción mecánica real, sin reconocer que la distinción requiere vigilancia evolutiva en el tiempo.',
  obj:'Explicar por qué distinguir el íleo postoperatorio de una obstrucción mecánica real requiere vigilancia evolutiva en el tiempo.',
  ref:'Sabiston, Tratado de Cirugía, cap. 13.',
  tags:['íleo vs. obstrucción mecánica','vigilancia evolutiva','reto clínico frecuente']
},
{
  id:'U10-SQ-Q50', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Complicaciones postoperatorias tempranas', sub:'Cierre del bloque: reconocer a tiempo un patrón anormal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué idea central cierra el bloque completo de Semiología Quirúrgica a través de este tema?',
  ops:[
    'Reconocer a tiempo un patrón clínico anormal -en el abdomen agudo inicial o en una complicación postoperatoria- es tan determinante para el pronóstico como la técnica quirúrgica en sí misma',
    'Este tema no tiene ninguna relación real con la idea central desarrollada en los demás temas del bloque de Semiología Quirúrgica', 'La técnica quirúrgica es siempre el único factor determinante del pronóstico, sin ninguna relación con el reconocimiento clínico temprano', 'Reconocer complicaciones postoperatorias tempranas nunca tiene ninguna relación con la evaluación inicial del abdomen agudo'],
  ok:0,
  clave:'Reconocer a tiempo un patrón clínico anormal -en el abdomen agudo inicial o en una complicación postoperatoria- es tan determinante para el pronóstico como la técnica quirúrgica en sí misma.',
  exp:'Este tema cierra el bloque completo de Semiología Quirúrgica retomando su idea central: reconocer a tiempo un patrón clínico anormal -ya sea en el abdomen agudo inicial o en una complicación postoperatoria- es tan determinante para el pronóstico del paciente como la técnica quirúrgica en sí misma.',
  no:{
    1:'Este tema tiene una relación directa y de cierre con la idea central desarrollada consistentemente a lo largo de todo el bloque.',
    2:'La técnica quirúrgica es importante, pero el reconocimiento clínico temprano es igualmente determinante para el pronóstico del paciente.',
    3:'Sí existe una relación directa: ambos (abdomen agudo inicial y complicación postoperatoria) comparten la misma lógica de reconocimiento temprano.'
  },
  trampa:'No reconocer la conexión que este tema final establece entre el reconocimiento temprano en el abdomen agudo inicial y en las complicaciones postoperatorias.',
  obj:'Explicar la idea central que cierra el bloque de Semiología Quirúrgica sobre el reconocimiento temprano de patrones clínicos anormales.',
  ref:'Sabiston, Tratado de Cirugía, cap. 13.',
  tags:['cierre del bloque','reconocimiento temprano','determinante del pronóstico']
}

]);
