/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 11, TANDA DE IMAGENOLOGÍA Y
   MEDICINA NUCLEAR (2/2)
   Continua el prefijo U11-IMG- desde Q29. Cubre los ultimos 3
   temas: tomografia computarizada, resonancia magnetica, y
   medicina nuclear basica (Q29-Q50).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U11-IMG-Q29', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Tomografía computarizada', sub:'Escenarios donde se indica la tomografía',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué escenarios se indica típicamente la tomografía computarizada?',
  ops:[
    'Evaluación de trauma significativo, sospecha de patología intracraneal aguda, estudio de masas no bien caracterizadas, y planificación quirúrgica detallada', 'La tomografía computarizada nunca tiene ninguna indicación clínica específica reconocida en la práctica médica', 'Únicamente para evaluar embarazos normales, sin ninguna otra indicación relevante en la práctica clínica', 'Solo para el seguimiento rutinario de pacientes sanos, sin ninguna relación con trauma o patología aguda'],
  ok:0,
  clave:'Evaluación de trauma significativo, sospecha de patología intracraneal aguda, estudio de masas no bien caracterizadas, y planificación quirúrgica detallada.',
  exp:'Las indicaciones de la tomografía computarizada incluyen: evaluación de trauma significativo, sospecha de patología intracraneal aguda, estudio de masas no bien caracterizadas por otros estudios, y planificación quirúrgica detallada.',
  no:{
    1:'La tomografía computarizada sí tiene indicaciones clínicas específicas bien reconocidas en la práctica médica.',
    2:'El seguimiento de embarazos normales utiliza principalmente ecografía, no tomografía, por el principio ALARA ya visto.',
    3:'La tomografía no es para seguimiento rutinario de pacientes sanos; se indica ante trauma o sospecha de patología aguda.'
  },
  trampa:'Asumir que la tomografía computarizada se indica de forma rutinaria o para el seguimiento de embarazos, en vez de escenarios específicos de mayor complejidad.',
  obj:'Identificar los escenarios donde se indica típicamente la tomografía computarizada.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['indicaciones de la tomografía computarizada','escenarios de indicación']
},
{
  id:'U11-IMG-Q30', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Tomografía computarizada', sub:'Justificación necesaria dado el uso de radiación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la indicación de una tomografía computarizada debe justificarse por una necesidad diagnóstica real?',
  ops:[
    'Porque utiliza radiación ionizante en dosis considerablemente mayores que una radiografía convencional, retomando el principio ALARA', 'La tomografía computarizada nunca utiliza ningún tipo de radiación ionizante en su funcionamiento habitual', 'La dosis de radiación de la tomografía computarizada siempre es exactamente igual a la de una radiografía convencional', 'No existe ninguna razón real para justificar clínicamente la indicación de una tomografía computarizada'],
  ok:0,
  clave:'Porque utiliza radiación ionizante en dosis considerablemente mayores que una radiografía convencional, retomando el principio ALARA.',
  exp:'Dado que la tomografía computarizada utiliza radiación ionizante en dosis considerablemente mayores que una radiografía convencional, su indicación debe justificarse por una necesidad diagnóstica real, retomando directamente el principio ALARA.',
  no:{
    1:'Es precisamente lo contrario: la tomografía SÍ utiliza radiación ionizante, en dosis considerablemente mayores que la radiografía.',
    2:'La dosis de radiación de la tomografía es considerablemente MAYOR, no igual, a la de una radiografía convencional.',
    3:'Sí existe una razón real y central para justificar clínicamente cada indicación de tomografía computarizada.'
  },
  trampa:'Subestimar la dosis de radiación de la tomografía computarizada, asumiendo que es equivalente a la de una radiografía simple.',
  obj:'Explicar por qué la indicación de una tomografía computarizada debe justificarse clínicamente, retomando el principio ALARA.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['indicaciones de la tomografía computarizada','conexión con principio ALARA']
},
{
  id:'U11-IMG-Q31', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Tomografía computarizada', sub:'Precauciones antes de administrar contraste yodado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué precauciones deben considerarse antes de administrar contraste yodado en un estudio de tomografía computarizada?',
  ops:[
    'La función renal del paciente y el antecedente de reacciones alérgicas previas al contraste', 'El contraste yodado nunca requiere ninguna precaución previa antes de su administración intravenosa', 'Únicamente la edad del paciente, sin ninguna relación con la función renal ni las reacciones alérgicas previas', 'Solo el peso corporal del paciente, sin ninguna consideración sobre función renal o alergias'],
  ok:0,
  clave:'La función renal del paciente y el antecedente de reacciones alérgicas previas al contraste.',
  exp:'El uso de contraste yodado requiere considerar la función renal del paciente y el antecedente de reacciones alérgicas previas al contraste, dos consideraciones que deben evaluarse antes de administrar el contraste.',
  no:{
    1:'Es precisamente lo contrario: el contraste yodado SÍ requiere precauciones previas específicas antes de su administración.',
    2:'La edad no es la precaución central; la función renal y las alergias previas son las consideraciones específicas relevantes.',
    3:'El peso corporal no es la precaución central destacada; la función renal y las alergias previas sí lo son.'
  },
  trampa:'Omitir la verificación de función renal o antecedentes alérgicos antes de administrar contraste yodado, asumiendo que no requiere ninguna precaución.',
  obj:'Identificar las precauciones necesarias antes de administrar contraste yodado en una tomografía.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['contraste yodado','precauciones previas']
},
{
  id:'U11-IMG-Q32', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Tomografía computarizada', sub:'Diferencia entre ventana ósea y de partes blandas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la ventana ósea y la ventana de partes blandas en un estudio de tomografía computarizada?',
  ops:[
    'La ventana ósea optimiza la visualización de estructuras óseas (útil para fracturas); la ventana de partes blandas optimiza la visualización de órganos y tejidos blandos', 'Ambas ventanas muestran exactamente la misma información, sin ninguna diferencia real en su visualización', 'La ventana ósea optimiza la visualización de órganos, y la ventana de partes blandas optimiza la visualización de huesos', 'Estas ventanas corresponden a estudios de tomografía completamente distintos, no a la misma imagen original'],
  ok:0,
  clave:'La ventana ósea optimiza la visualización de estructuras óseas (útil para fracturas); la ventana de partes blandas optimiza la visualización de órganos y tejidos blandos.',
  exp:'La ventana ósea optimiza la visualización de estructuras óseas (útil para detectar fracturas), mientras la ventana de partes blandas optimiza la visualización de órganos y tejidos blandos, permitiendo distinguir mejor sus contornos.',
  no:{
    1:'Son configuraciones con propósitos distintos, cada una optimizada para un tipo específico de tejido.',
    2:'Está invertido: la ventana ÓSEA optimiza huesos, y la de PARTES BLANDAS optimiza órganos, no al revés.',
    3:'Ambas ventanas son distintas configuraciones de visualización de la MISMA imagen tomográfica original, no estudios distintos.'
  },
  trampa:'Invertir el propósito de la ventana ósea y la de partes blandas, o asumir que corresponden a estudios completamente distintos.',
  obj:'Distinguir la ventana ósea de la ventana de partes blandas en un estudio de tomografía computarizada.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['ventana ósea y de partes blandas','diferencia de propósito']
},
{
  id:'U11-IMG-Q33', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Tomografía computarizada', sub:'Por qué revisar ambas ventanas de un mismo estudio',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico revisa únicamente la ventana de partes blandas de un estudio de tomografía, sin revisar también la ventana ósea del mismo estudio.',
  enunciado:'¿Qué riesgo conlleva esta conducta, según lo visto en este tema?',
  ops:[
    'Pasar por alto un hallazgo relevante que solo se hace evidente en la configuración de visualización no revisada, como una fractura', 'Esta conducta no conlleva ningún riesgo real, ya que ambas ventanas muestran exactamente la misma información relevante', 'Revisar solo una ventana siempre es suficiente para detectar cualquier hallazgo relevante presente en el estudio completo', 'Las ventanas ósea y de partes blandas nunca revelan hallazgos distintos entre sí en un mismo estudio de tomografía'],
  ok:0,
  clave:'Pasar por alto un hallazgo relevante que solo se hace evidente en la configuración de visualización no revisada, como una fractura.',
  exp:'Un mismo estudio se revisa habitualmente en ambas ventanas, ya que un hallazgo relevante puede ser mucho más evidente en una configuración que en la otra -revisar solo una ventana puede llevar a pasar por alto un hallazgo relevante.',
  no:{
    1:'Esta conducta sí conlleva un riesgo real, similar al error ya visto en la lectura sistemática incompleta de radiografías.',
    2:'Es precisamente lo contrario: cada ventana resalta información distinta, no exactamente la misma en ambas configuraciones.',
    3:'Revisar solo una ventana NO siempre es suficiente; un hallazgo puede ser más evidente en la ventana no revisada.'
  },
  trampa:'Revisar solo una de las dos ventanas de un estudio de tomografía, asumiendo que ambas muestran la misma información relevante.',
  obj:'Aplicar el riesgo de revisar solo una ventana de un estudio de tomografía computarizada.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['ventana ósea y de partes blandas','riesgo de revisión incompleta']
},
{
  id:'U11-IMG-Q34', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Tomografía computarizada', sub:'Propósito del contraste yodado',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Para qué se administra el contraste yodado en un estudio de tomografía computarizada?',
  ops:[
    'Para mejorar la visualización de estructuras vasculares y realzar el contraste entre distintos tejidos', 'El contraste yodado se administra exclusivamente para reducir la dosis total de radiación recibida por el paciente', 'El contraste yodado no tiene ningún propósito específico reconocido dentro de un estudio de tomografía computarizada', 'El contraste yodado se administra únicamente para mejorar la comodidad del paciente durante el estudio'],
  ok:0,
  clave:'Para mejorar la visualización de estructuras vasculares y realzar el contraste entre distintos tejidos.',
  exp:'El contraste yodado se administra por vía intravenosa para mejorar la visualización de estructuras vasculares y realzar el contraste entre distintos tejidos, particularmente útil para caracterizar lesiones.',
  no:{
    1:'El contraste yodado no reduce la dosis de radiación; su propósito es mejorar la visualización de estructuras específicas.',
    2:'El contraste yodado sí tiene un propósito específico y bien reconocido: mejorar la visualización vascular y tisular.',
    3:'El propósito del contraste yodado es diagnóstico (mejorar visualización), no relacionado con la comodidad del paciente.'
  },
  trampa:'Confundir el propósito del contraste yodado (mejorar visualización) con otros efectos no relacionados como reducir radiación o mejorar comodidad.',
  obj:'Explicar el propósito de administrar contraste yodado en un estudio de tomografía computarizada.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['contraste yodado','propósito de administración']
},
{
  id:'U11-IMG-Q35', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Tomografía computarizada', sub:'Cuándo la tomografía es preferible a un estudio de menor dosis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuándo se justifica indicar una tomografía computarizada en vez de un estudio de menor dosis de radiación como la ecografía?',
  ops:[
    'Cuando existe una necesidad diagnóstica real que no pueda resolverse igualmente bien con un estudio de menor dosis de radiación', 'La tomografía computarizada siempre debe preferirse sobre la ecografía, sin importar la necesidad diagnóstica específica', 'La ecografía siempre es preferible a la tomografía computarizada, sin ninguna excepción clínica posible', 'Esta decisión nunca depende de la necesidad diagnóstica específica del paciente evaluado en cada caso'],
  ok:0,
  clave:'Cuando existe una necesidad diagnóstica real que no pueda resolverse igualmente bien con un estudio de menor dosis de radiación.',
  exp:'Su indicación debe justificarse por una necesidad diagnóstica real que no pueda resolverse igualmente bien con un estudio de menor dosis de radiación (como la ecografía), retomando el principio ALARA ya introducido al inicio de este bloque.',
  no:{
    1:'Es precisamente lo contrario: la tomografía NO siempre debe preferirse; depende de la necesidad diagnóstica específica.',
    2:'Es precisamente lo contrario: la ecografía no siempre es preferible; depende de si responde a la necesidad diagnóstica específica.',
    3:'Esta decisión sí depende directamente de la necesidad diagnóstica específica de cada paciente evaluado.'
  },
  trampa:'Asumir que un estudio (tomografía o ecografía) siempre es preferible al otro, sin considerar la necesidad diagnóstica específica de cada caso.',
  obj:'Explicar cuándo se justifica indicar una tomografía computarizada en vez de un estudio de menor dosis de radiación.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['indicaciones de la tomografía computarizada','justificación frente a estudio de menor dosis']
},
{
  id:'U11-IMG-Q36', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Resonancia magnética', sub:'Aplicaciones donde la resonancia es particularmente útil',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué escenarios aprovecha la resonancia magnética su resolución superior de tejidos blandos?',
  ops:[
    'Sistema nervioso central y periférico, estructuras musculoesqueléticas (ligamentos, meniscos, cartílago), y patologías donde la caracterización precisa del tejido blando es indispensable', 'La resonancia magnética nunca tiene ninguna aplicación específica útil relacionada con tejidos blandos del organismo', 'Únicamente para evaluar estructuras óseas finas, siendo esta su aplicación principal y más destacada', 'Solo para escenarios de urgencia donde se requiere la mayor rapidez posible en la obtención del estudio'],
  ok:0,
  clave:'Sistema nervioso central y periférico, estructuras musculoesqueléticas (ligamentos, meniscos, cartílago), y patologías donde la caracterización precisa del tejido blando es indispensable.',
  exp:'Las indicaciones de la resonancia magnética aprovechan su resolución superior de tejidos blandos, particularmente útil para el sistema nervioso central y periférico, estructuras musculoesqueléticas, y patologías que requieren caracterización precisa del tejido blando.',
  no:{
    1:'La resonancia magnética sí tiene aplicaciones específicas y valiosas relacionadas con la evaluación de tejidos blandos.',
    2:'Es precisamente lo contrario: la tomografía suele ser SUPERIOR para estructuras óseas finas, no la resonancia magnética.',
    3:'Es precisamente lo contrario: la resonancia tiene un papel MENOS práctico en urgencias por su mayor tiempo de adquisición.'
  },
  trampa:'Confundir las aplicaciones de la resonancia magnética (tejidos blandos) con las de la tomografía (estructuras óseas, urgencias rápidas).',
  obj:'Identificar los escenarios donde la resonancia magnética aprovecha su resolución superior de tejidos blandos.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['indicaciones de la resonancia magnética','resolución de tejidos blandos']
},
{
  id:'U11-IMG-Q37', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Resonancia magnética', sub:'Limitaciones prácticas de la resonancia magnética',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la resonancia magnética no reemplaza universalmente a los demás estudios de imagen ya vistos en este bloque?',
  ops:[
    'Porque tiene un papel más limitado en la evaluación de estructuras óseas finas y en escenarios de urgencia, donde su mayor tiempo de adquisición la hace menos práctica', 'La resonancia magnética siempre reemplaza completamente a cualquier otro estudio de imagen en cualquier escenario clínico', 'La resonancia magnética no tiene ninguna limitación real frente a los demás estudios de imagen ya vistos en este bloque', 'El tiempo de adquisición de la resonancia magnética nunca influye realmente en su utilidad práctica en urgencias'],
  ok:0,
  clave:'Porque tiene un papel más limitado en la evaluación de estructuras óseas finas y en escenarios de urgencia, donde su mayor tiempo de adquisición la hace menos práctica.',
  exp:'A pesar de su resolución superior, la resonancia magnética no reemplaza universalmente a los demás estudios: tiene un papel más limitado en estructuras óseas finas (donde la tomografía suele ser superior) y en urgencias, donde su mayor tiempo de adquisición la hace menos práctica.',
  no:{
    1:'Es precisamente lo contrario: la resonancia NO reemplaza universalmente; tiene limitaciones específicas reales.',
    2:'La resonancia magnética sí tiene limitaciones reales frente a otros estudios en ciertos escenarios específicos.',
    3:'El tiempo de adquisición sí influye realmente en la utilidad práctica de la resonancia en escenarios de urgencia.'
  },
  trampa:'Asumir que la resonancia magnética, por su resolución superior de tejidos blandos, es siempre el estudio de imagen preferible en cualquier escenario.',
  obj:'Explicar por qué la resonancia magnética no reemplaza universalmente a los demás estudios de imagen.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['indicaciones de la resonancia magnética','limitaciones prácticas']
},
{
  id:'U11-IMG-Q38', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Resonancia magnética', sub:'Origen de las contraindicaciones de la resonancia magnética',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De qué derivan directamente las contraindicaciones de la resonancia magnética?',
  ops:[
    'De su principio físico, al utilizar un campo magnético intenso que representa un riesgo real ante cualquier material ferromagnético dentro o cerca del paciente', 'Las contraindicaciones de la resonancia magnética nunca tienen ninguna relación real con su principio físico de funcionamiento', 'La resonancia magnética no tiene ninguna contraindicación real reconocida en la práctica clínica actual', 'Las contraindicaciones de la resonancia magnética derivan exclusivamente del uso de contraste yodado, igual que en tomografía'],
  ok:0,
  clave:'De su principio físico, al utilizar un campo magnético intenso que representa un riesgo real ante cualquier material ferromagnético dentro o cerca del paciente.',
  exp:'Las contraindicaciones de la resonancia magnética derivan directamente de su principio físico: al utilizar un campo magnético intenso, cualquier material ferromagnético dentro o cerca del paciente representa un riesgo real.',
  no:{
    1:'Las contraindicaciones sí tienen una relación directa con el principio físico del campo magnético de la resonancia.',
    2:'La resonancia magnética sí tiene contraindicaciones reales y bien reconocidas, relacionadas con su campo magnético.',
    3:'Las contraindicaciones derivan del campo magnético, no del contraste yodado, que corresponde a la tomografía, no a la resonancia.'
  },
  trampa:'Confundir el origen de las contraindicaciones de la resonancia magnética (campo magnético) con las del contraste yodado propio de la tomografía.',
  obj:'Explicar el origen de las contraindicaciones de la resonancia magnética a partir de su principio físico.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['contraindicaciones de la resonancia magnética','origen en el campo magnético']
},
{
  id:'U11-IMG-Q39', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Resonancia magnética', sub:'Importancia de verificar contraindicaciones antes del estudio',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente será sometido a una resonancia magnética, y el personal técnico omite verificar mediante un cuestionario estructurado si tiene algún dispositivo implantado no compatible con este estudio.',
  enunciado:'¿Qué riesgo conlleva esta omisión, según lo visto en este tema?',
  ops:[
    'Un riesgo real de seguridad para el paciente, dado que ciertos dispositivos implantados no compatibles representan un peligro real dentro del campo magnético', 'Esta omisión no conlleva ningún riesgo real, ya que verificar contraindicaciones es solo un trámite administrativo opcional', 'La verificación de contraindicaciones antes de una resonancia magnética nunca tiene ninguna relevancia real de seguridad', 'Cualquier dispositivo implantado siempre es completamente seguro dentro del campo magnético de una resonancia magnética'],
  ok:0,
  clave:'Un riesgo real de seguridad para el paciente, dado que ciertos dispositivos implantados no compatibles representan un peligro real dentro del campo magnético.',
  exp:'Verificar activamente estas contraindicaciones antes de realizar el estudio es un paso indispensable de seguridad, no un trámite administrativo que pueda omitirse -ciertos dispositivos implantados no compatibles representan un riesgo real dentro del campo magnético.',
  no:{
    1:'Esta omisión sí conlleva un riesgo real de seguridad, dado el peligro que representan ciertos dispositivos no compatibles.',
    2:'Es precisamente lo contrario: verificar contraindicaciones es un paso INDISPENSABLE de seguridad, no un trámite opcional.',
    3:'No todo dispositivo implantado es seguro; algunos son incompatibles y representan un riesgo real dentro del campo magnético.'
  },
  trampa:'Tratar la verificación de contraindicaciones de la resonancia magnética como un trámite administrativo opcional sin relevancia real de seguridad.',
  obj:'Aplicar la importancia de verificar activamente las contraindicaciones antes de un estudio de resonancia magnética.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['contraindicaciones de la resonancia magnética','importancia de la verificación previa']
},
{
  id:'U11-IMG-Q40', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Resonancia magnética', sub:'Propósito del contraste con gadolinio',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el propósito general del contraste con gadolinio en la resonancia magnética?',
  ops:[
    'Mejorar la visualización de ciertas estructuras, de forma análoga en su propósito general al contraste yodado de la tomografía computarizada', 'El contraste con gadolinio se utiliza exclusivamente para reducir el tiempo de adquisición del estudio de resonancia magnética', 'El contraste con gadolinio no tiene ningún propósito específico reconocido dentro de un estudio de resonancia magnética', 'El contraste con gadolinio se utiliza únicamente para reemplazar por completo la necesidad de un campo magnético'],
  ok:0,
  clave:'Mejorar la visualización de ciertas estructuras, de forma análoga en su propósito general al contraste yodado de la tomografía computarizada.',
  exp:'El contraste con gadolinio es la sustancia utilizada en algunos estudios de resonancia magnética para mejorar la visualización de ciertas estructuras, de forma análoga en su propósito general al contraste yodado ya visto en tomografía.',
  no:{
    1:'El contraste con gadolinio no reduce el tiempo de adquisición; su propósito es mejorar la visualización de estructuras.',
    2:'El contraste con gadolinio sí tiene un propósito específico reconocido: mejorar la visualización de ciertas estructuras.',
    3:'El contraste con gadolinio no reemplaza el campo magnético; se usa junto con él para mejorar la visualización.'
  },
  trampa:'Confundir el propósito del contraste con gadolinio con otros efectos no relacionados, como reducir tiempo de adquisición.',
  obj:'Explicar el propósito general del contraste con gadolinio en la resonancia magnética.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['contraste con gadolinio','propósito general']
},
{
  id:'U11-IMG-Q41', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Resonancia magnética', sub:'Principio general del balance entre estudios',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio general, aplicable a la tomografía y la resonancia magnética, cierra el análisis de estos dos estudios avanzados?',
  ops:[
    'Que la elección apropiada entre ellos depende de la pregunta clínica concreta que se busca responder, no de asumir que "el estudio más avanzado" es siempre la mejor opción', 'El estudio más avanzado tecnológicamente siempre es la mejor opción disponible, sin importar la pregunta clínica específica', 'La elección entre tomografía y resonancia magnética nunca depende de la pregunta clínica específica que se busca responder', 'Ambos estudios son exactamente intercambiables entre sí, sin ninguna diferencia real en sus indicaciones o limitaciones'],
  ok:0,
  clave:'Que la elección apropiada entre ellos depende de la pregunta clínica concreta que se busca responder, no de asumir que "el estudio más avanzado" es siempre la mejor opción.',
  exp:'Cada estudio tiene su propio balance de ventajas, limitaciones, y consideraciones de seguridad específicas, y la elección apropiada depende de la pregunta clínica concreta, no de asumir que "el estudio más avanzado" es siempre la mejor opción disponible.',
  no:{
    1:'Es precisamente lo contrario: el estudio "más avanzado" NO siempre es la mejor opción; depende de la pregunta clínica.',
    2:'Es precisamente lo contrario: la elección SÍ depende directamente de la pregunta clínica específica que se busca responder.',
    3:'Ambos estudios NO son intercambiables; cada uno tiene indicaciones y limitaciones específicas distintas entre sí.'
  },
  trampa:'Asumir que el estudio de imagen más avanzado tecnológicamente (como la resonancia) es siempre preferible, sin considerar la pregunta clínica específica.',
  obj:'Explicar el principio general que guía la elección apropiada entre tomografía y resonancia magnética.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['contraste con gadolinio','principio de elección según pregunta clínica']
},
{
  id:'U11-IMG-Q42', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Resonancia magnética', sub:'Ejemplos de dispositivos que representan contraindicación',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de elementos representan una contraindicación real para realizar una resonancia magnética?',
  ops:[
    'Ciertos dispositivos médicos implantados no compatibles (algunos marcapasos, ciertos clips quirúrgicos) y objetos metálicos sueltos que podrían convertirse en proyectiles', 'Ningún dispositivo médico implantado representa jamás una contraindicación real para realizar una resonancia magnética', 'Únicamente los dispositivos electrónicos externos, sin ninguna relación con dispositivos implantados dentro del cuerpo', 'Solo la ropa del paciente, sin ninguna relación con dispositivos implantados ni objetos metálicos sueltos'],
  ok:0,
  clave:'Ciertos dispositivos médicos implantados no compatibles (algunos marcapasos, ciertos clips quirúrgicos) y objetos metálicos sueltos que podrían convertirse en proyectiles.',
  exp:'Las contraindicaciones incluyen ciertos dispositivos médicos implantados no compatibles con resonancia magnética (algunos marcapasos, ciertos clips quirúrgicos) y objetos metálicos sueltos que podrían convertirse en proyectiles dentro del campo magnético.',
  no:{
    1:'Sí existen dispositivos implantados específicos que representan una contraindicación real para este estudio.',
    2:'Las contraindicaciones incluyen específicamente dispositivos implantados, no solo dispositivos electrónicos externos.',
    3:'La ropa no es la contraindicación central destacada; los dispositivos implantados y objetos metálicos sueltos sí lo son.'
  },
  trampa:'Subestimar el riesgo de dispositivos implantados no compatibles, asumiendo que ningún dispositivo médico representa una contraindicación real.',
  obj:'Identificar ejemplos de dispositivos y objetos que representan contraindicación para la resonancia magnética.',
  ref:'Novelline, Fundamentos de Radiología, cap. 2.',
  tags:['contraindicaciones de la resonancia magnética','ejemplos de dispositivos']
},
{
  id:'U11-IMG-Q43', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Medicina nuclear básica', sub:'Principio distintivo de la medicina nuclear',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue principalmente a la medicina nuclear de los demás estudios de imagen ya vistos en este bloque?',
  ops:[
    'Evalúa principalmente la función de un órgano o tejido, no solo su estructura anatómica', 'La medicina nuclear evalúa exclusivamente la estructura anatómica, igual que la radiografía o la tomografía computarizada', 'No existe ninguna diferencia real entre la medicina nuclear y los demás estudios de imagen ya vistos en este bloque', 'La medicina nuclear nunca puede complementar la información de otros estudios de imagen ya vistos en este bloque'],
  ok:0,
  clave:'Evalúa principalmente la función de un órgano o tejido, no solo su estructura anatómica.',
  exp:'A diferencia de todos los estudios ya vistos en este bloque, que evalúan principalmente la estructura anatómica, la medicina nuclear evalúa principalmente la función de un órgano o tejido.',
  no:{
    1:'Es precisamente lo contrario: la medicina nuclear evalúa principalmente FUNCIÓN, no exclusivamente estructura anatómica.',
    2:'Sí existe una diferencia real y central: la medicina nuclear se centra en función, a diferencia de los demás estudios estructurales.',
    3:'La medicina nuclear sí puede complementar valiosamente la información de los demás estudios estructurales ya vistos.'
  },
  trampa:'Asumir que la medicina nuclear evalúa lo mismo (estructura anatómica) que la radiografía, la ecografía, la tomografía o la resonancia.',
  obj:'Explicar el principio distintivo de la medicina nuclear frente a los demás estudios de imagen.',
  ref:'Novelline, Fundamentos de Radiología, cap. 22.',
  tags:['medicina nuclear básica','principio distintivo funcional']
},
{
  id:'U11-IMG-Q44', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Medicina nuclear básica', sub:'Qué es un radiofármaco',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es un radiofármaco?',
  ops:[
    'Una sustancia que combina un componente farmacológico específico, dirigido selectivamente hacia el órgano de interés, con un componente radiactivo detectable', 'Un radiofármaco es exclusivamente un medicamento sin ningún componente radiactivo asociado a su composición', 'Un radiofármaco es únicamente el equipo detector utilizado en un estudio de medicina nuclear, sin ninguna sustancia administrada', 'Un radiofármaco no tiene ninguna aplicación real dentro de los estudios de medicina nuclear'],
  ok:0,
  clave:'Una sustancia que combina un componente farmacológico específico, dirigido selectivamente hacia el órgano de interés, con un componente radiactivo detectable.',
  exp:'Un radiofármaco combina un componente farmacológico específico, que se dirige selectivamente hacia el órgano o proceso de interés, con un componente radiactivo detectable, permitiendo visualizar procesos fisiológicos activos.',
  no:{
    1:'Es precisamente lo contrario: un radiofármaco SÍ incluye un componente radiactivo, junto con el componente farmacológico.',
    2:'El radiofármaco es la sustancia administrada, distinto del equipo detector que capta la radiación emitida.',
    3:'El radiofármaco sí tiene una aplicación central y fundamental dentro de los estudios de medicina nuclear.'
  },
  trampa:'Confundir el radiofármaco (la sustancia administrada) con el equipo detector, o asumir que no tiene componente radiactivo.',
  obj:'Definir qué es un radiofármaco y su composición general.',
  ref:'Novelline, Fundamentos de Radiología, cap. 22.',
  tags:['radiofármaco','definición y composición']
},
{
  id:'U11-IMG-Q45', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Medicina nuclear básica', sub:'Estudio de medicina nuclear más frecuente',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el estudio de medicina nuclear más frecuente en la práctica clínica general?',
  ops:[
    'La gammagrafía', 'La tomografía por emisión de positrones, siendo este el estudio de medicina nuclear más frecuente en la práctica general', 'La resonancia magnética, siendo esta considerada un estudio de medicina nuclear frecuente en la práctica clínica', 'Ningún estudio de medicina nuclear se considera más frecuente que otro en la práctica clínica general'],
  ok:0,
  clave:'La gammagrafía.',
  exp:'La gammagrafía es el estudio de medicina nuclear más frecuente en la práctica clínica general, utilizada para evaluar la función de diversos órganos según el radiofármaco específico administrado.',
  no:{
    1:'La tomografía por emisión de positrones es un estudio más avanzado y menos frecuente que la gammagrafía en la práctica general.',
    2:'La resonancia magnética no es un estudio de medicina nuclear; no utiliza radiofármacos ni evalúa función mediante este principio.',
    3:'Sí existe un estudio de medicina nuclear más frecuente reconocido en la práctica clínica general: la gammagrafía.'
  },
  trampa:'Confundir la gammagrafía (más frecuente) con la tomografía por emisión de positrones (más avanzada, menos frecuente), o incluir la resonancia como estudio de medicina nuclear.',
  obj:'Identificar el estudio de medicina nuclear más frecuente en la práctica clínica general.',
  ref:'Novelline, Fundamentos de Radiología, cap. 22.',
  tags:['gammagrafía','estudio más frecuente']
},
{
  id:'U11-IMG-Q46', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Medicina nuclear básica', sub:'Interpretación de hipercaptación e hipocaptación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significan los patrones de hipercaptación e hipocaptación en la interpretación de una gammagrafía?',
  ops:[
    'La hipercaptación puede indicar mayor actividad metabólica en esa zona; la hipocaptación puede indicar tejido no funcional o ausente', 'Ambos patrones significan exactamente lo mismo en la interpretación de una gammagrafía, sin ninguna diferencia real', 'La hipercaptación siempre indica tejido no funcional, y la hipocaptación siempre indica mayor actividad metabólica', 'Los patrones de captación del radiofármaco nunca tienen ninguna relevancia real para la interpretación de una gammagrafía'],
  ok:0,
  clave:'La hipercaptación puede indicar mayor actividad metabólica en esa zona; la hipocaptación puede indicar tejido no funcional o ausente.',
  exp:'La interpretación depende de reconocer patrones de captación anormal: zonas de mayor captación ("hipercaptación", que puede indicar mayor actividad metabólica) o de menor captación ("hipocaptación", que puede indicar tejido no funcional o ausente).',
  no:{
    1:'Son patrones con significados distintos y complementarios en la interpretación de una gammagrafía.',
    2:'Está invertido: la HIPERCAPTACIÓN indica mayor actividad metabólica, y la HIPOCAPTACIÓN indica tejido no funcional, no al revés.',
    3:'Los patrones de captación sí tienen una relevancia central para la interpretación diagnóstica de una gammagrafía.'
  },
  trampa:'Invertir el significado de hipercaptación (mayor actividad) e hipocaptación (tejido no funcional) en la interpretación de una gammagrafía.',
  obj:'Explicar el significado de los patrones de hipercaptación e hipocaptación en una gammagrafía.',
  ref:'Novelline, Fundamentos de Radiología, cap. 22.',
  tags:['gammagrafía','interpretación de patrones de captación']
},
{
  id:'U11-IMG-Q47', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Medicina nuclear básica', sub:'Aplicación oncológica de la PET',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la tomografía por emisión de positrones (PET) es particularmente utilizada en oncología?',
  ops:[
    'Porque los tejidos con mayor actividad metabólica, como muchos tumores malignos, captan de forma característica mayor cantidad del radiofármaco utilizado en este estudio', 'La PET nunca tiene ninguna aplicación real ni utilidad particular dentro del campo de la oncología clínica', 'Los tumores malignos siempre captan menos radiofármaco que el tejido normal circundante en un estudio de PET', 'La actividad metabólica de un tejido nunca tiene ninguna relación real con la captación del radiofármaco utilizado en PET'],
  ok:0,
  clave:'Porque los tejidos con mayor actividad metabólica, como muchos tumores malignos, captan de forma característica mayor cantidad del radiofármaco utilizado en este estudio.',
  exp:'La PET es particularmente utilizada en oncología para evaluar la actividad metabólica de tejidos: los tejidos con mayor actividad metabólica, como muchos tumores malignos, captan de forma característica mayor cantidad del radiofármaco.',
  no:{
    1:'La PET sí tiene una aplicación real y valiosa en oncología, precisamente por esta relación con la actividad metabólica.',
    2:'Es precisamente lo contrario: los tumores malignos suelen captar MÁS radiofármaco, no menos, que el tejido normal circundante.',
    3:'La actividad metabólica de un tejido sí tiene una relación directa con la cantidad de radiofármaco captado en un estudio de PET.'
  },
  trampa:'Invertir la relación entre actividad metabólica tumoral y captación del radiofármaco en un estudio de PET.',
  obj:'Explicar por qué la tomografía por emisión de positrones es particularmente útil en oncología.',
  ref:'Novelline, Fundamentos de Radiología, cap. 22.',
  tags:['tomografía por emisión de positrones','aplicación oncológica']
},
{
  id:'U11-IMG-Q48', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Medicina nuclear básica', sub:'Por qué combinar PET con tomografía computarizada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la tomografía por emisión de positrones con frecuencia se combina con una tomografía computarizada en el mismo equipo?',
  ops:[
    'Para superponer la información funcional (de la PET) sobre la información anatómica (de la tomografía computarizada)', 'Esta combinación nunca aporta ninguna ventaja real frente a realizar ambos estudios de forma completamente separada', 'La tomografía computarizada reemplaza por completo la necesidad de realizar el estudio de PET en este equipo combinado', 'La combinación de PET con tomografía computarizada nunca ha sido una práctica reconocida en la medicina nuclear moderna'],
  ok:0,
  clave:'Para superponer la información funcional (de la PET) sobre la información anatómica (de la tomografía computarizada).',
  exp:'Esta combinación permite superponer la información funcional ya vista en este tema con la información estructural ya vista en los temas anteriores del bloque, ilustrando cómo los distintos estudios de imagen con frecuencia se complementan.',
  no:{
    1:'Esta combinación sí aporta una ventaja real: integra información funcional y anatómica en un solo estudio complementario.',
    2:'La tomografía computarizada no reemplaza a la PET en este equipo combinado; ambas aportan información complementaria distinta.',
    3:'Esta combinación (PET/TC) sí es una práctica reconocida y ampliamente utilizada en la medicina nuclear moderna.'
  },
  trampa:'Asumir que combinar PET con tomografía computarizada es redundante, sin reconocer el valor de integrar información funcional y anatómica.',
  obj:'Explicar por qué la PET con frecuencia se combina con una tomografía computarizada en el mismo equipo.',
  ref:'Novelline, Fundamentos de Radiología, cap. 22.',
  tags:['tomografía por emisión de positrones','combinación con tomografía computarizada']
},
{
  id:'U11-IMG-Q49', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Medicina nuclear básica', sub:'Cuándo un estudio de medicina nuclear puede aportar información adicional',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta una sospecha clínica persistente de disfunción de un órgano, a pesar de que los estudios estructurales (tomografía y resonancia) previamente realizados muestran una anatomía aparentemente normal de ese órgano.',
  enunciado:'¿Qué opción diagnóstica adicional podría aportar información relevante en este caso, según lo visto en este tema?',
  ops:[
    'Un estudio de medicina nuclear, que puede revelar una alteración funcional que los estudios puramente estructurales no logran detectar', 'Ningún estudio adicional podría aportar información relevante, ya que los estudios estructurales ya descartaron por completo cualquier problema', 'Repetir exactamente los mismos estudios estructurales ya realizados es la única opción diagnóstica razonable en este caso', 'La sospecha clínica persistente debería descartarse sin ninguna evaluación adicional, dado que la anatomía es normal'],
  ok:0,
  clave:'Un estudio de medicina nuclear, que puede revelar una alteración funcional que los estudios puramente estructurales no logran detectar.',
  exp:'Cuando la estructura anatómica parece normal en los estudios ya vistos en este bloque, pero persiste una sospecha clínica de disfunción, un estudio de medicina nuclear puede revelar una alteración funcional que los estudios puramente estructurales no logran detectar.',
  no:{
    1:'Un órgano puede tener una apariencia estructural normal mientras un estudio funcional revela una alteración real presente.',
    2:'Repetir los mismos estudios estructurales no aportaría información nueva; un estudio funcional distinto sí podría hacerlo.',
    3:'La sospecha clínica persistente no debería descartarse sin evaluación adicional, dado que existe una opción diagnóstica complementaria.'
  },
  trampa:'Asumir que una anatomía normal en estudios estructurales descarta por completo cualquier problema, sin considerar una evaluación funcional complementaria.',
  obj:'Aplicar el valor de un estudio de medicina nuclear ante una sospecha clínica persistente con estudios estructurales normales.',
  ref:'Novelline, Fundamentos de Radiología, cap. 22.',
  tags:['medicina nuclear básica','valor complementario ante sospecha persistente']
},
{
  id:'U11-IMG-Q50', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Medicina nuclear básica', sub:'Cierre integrador del bloque completo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué idea cierra el bloque completo de Imagenología y Medicina Nuclear, integrando la información estructural y funcional?',
  ops:[
    'Que los distintos estudios de imagen, lejos de ser mutuamente excluyentes, con frecuencia se complementan para responder preguntas clínicas que ningún estudio aislado podría resolver por sí solo', 'Los distintos estudios de imagen de este bloque son siempre completamente excluyentes entre sí, sin ninguna posibilidad real de complementarse', 'Este tema no tiene ninguna relación real con los demás estudios de imagen ya vistos previamente en el bloque completo', 'El bloque de Imagenología y Medicina Nuclear no tiene ningún hilo conductor identificable entre sus distintos temas'],
  ok:0,
  clave:'Que los distintos estudios de imagen, lejos de ser mutuamente excluyentes, con frecuencia se complementan para responder preguntas clínicas que ningún estudio aislado podría resolver por sí solo.',
  exp:'Esta combinación de PET con tomografía computarizada cierra el bloque completo de forma integradora, ilustrando cómo los distintos estudios de imagen, lejos de ser mutuamente excluyentes, con frecuencia se complementan para responder preguntas clínicas.',
  no:{
    1:'Es precisamente lo contrario: los estudios de imagen NO son mutuamente excluyentes; con frecuencia se complementan entre sí.',
    2:'Este tema sí tiene una relación conceptual directa de cierre con todos los demás estudios ya vistos en el bloque.',
    3:'El bloque sí tiene un hilo conductor identificable, desde la estructura hasta la función, cerrando con esta integración.'
  },
  trampa:'No reconocer el rol de cierre integrador de este último tema, tratando los estudios de imagen como mutuamente excluyentes entre sí.',
  obj:'Explicar el rol de cierre integrador del tema de medicina nuclear dentro del bloque completo de imagenología.',
  ref:'Novelline, Fundamentos de Radiología, cap. 22.',
  tags:['medicina nuclear básica','cierre integrador del bloque']
}

]);
