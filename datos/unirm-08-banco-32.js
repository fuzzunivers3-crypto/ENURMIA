/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE INMUNOLOGIA (2/2)
   Completa la ampliacion de Inmunologia a 50 preguntas junto con
   banco-31.js. Esta parte cubre hipersensibilidad y autoinmunidad,
   inmunizacion, inmunodeficiencias primarias, trasplante e
   inmunologia del rechazo, y tolerancia inmunologica (temas 6-10).
   Con esto, CUATRIMESTRE 8 QUEDA COMPLETO AL 100%.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== INMUNOLOGIA ===================== */
{
  id:'U8-I-Q27', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Hipersensibilidad y autoinmunidad', sub:'Hipersensibilidad tipo I',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la hipersensibilidad tipo I requiere una sensibilización PREVIA antes de que ocurra una reacción alérgica visible?',
  ops:[
    'Porque la primera exposición al alérgeno genera el anticuerpo específico sin producir síntomas graves; es la exposición POSTERIOR al mismo alérgeno la que dispara la liberación masiva de mediadores inflamatorios',
    'La hipersensibilidad tipo I ocurre siempre en la primera exposición a cualquier alérgeno',
    'La sensibilización previa no tiene ninguna relación con la hipersensibilidad tipo I',
    'La hipersensibilidad tipo I no requiere ningún anticuerpo específico'
  ],
  ok:0,
  clave:'La primera exposición genera el anticuerpo sin síntomas graves; la exposición posterior dispara la reacción alérgica visible.',
  exp:'En la hipersensibilidad tipo I, la primera exposición a un alérgeno inofensivo genera la producción de un anticuerpo específico contra él, sin producir necesariamente síntomas graves visibles -este es el proceso de sensibilización-. Es la exposición POSTERIOR a ese mismo alérgeno la que, al encontrar el anticuerpo ya presente, dispara la liberación masiva y rápida de mediadores inflamatorios (como la histamina), produciendo los síntomas característicos de la reacción alérgica, que pueden ir desde leves hasta la anafilaxia.',
  no:{
    1:'La hipersensibilidad tipo I típicamente NO ocurre en la primera exposición (sensibilización), sino en una exposición posterior al mismo alérgeno.',
    2:'La sensibilización previa es un componente central del mecanismo de la hipersensibilidad tipo I, no algo sin relación con ella.',
    3:'La hipersensibilidad tipo I sí requiere un anticuerpo específico generado durante la sensibilización previa, que después dispara la reacción en una exposición posterior.'
  },
  trampa:'No reconocer la necesidad de una sensibilización previa (primera exposición sin síntomas graves) antes de que ocurra la reacción alérgica visible en una exposición posterior.',
  obj:'Explicar el mecanismo de sensibilización previa en la hipersensibilidad tipo I.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 11 y 20.',
  tags:['hipersensibilidad tipo I','sensibilización','alérgeno','histamina']
},
{
  id:'U8-I-Q28', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Hipersensibilidad y autoinmunidad', sub:'Anafilaxia: emergencia médica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta, minutos después de ser picado por una avispa, dificultad respiratoria progresiva, hinchazón de labios y garganta, y una caída notable de la presión arterial.',
  enunciado:'¿Cuál es la conducta correcta ante este cuadro clínico?',
  ops:[
    'Reconocerlo como anafilaxia y administrar epinefrina intramuscular de inmediato, sin esperar a que el cuadro clínico se complete o empeore más',
    'Esperar unos 30-60 minutos para confirmar el diagnóstico antes de administrar cualquier tratamiento',
    'La anafilaxia no requiere ningún tratamiento de emergencia específico',
    'Administrar únicamente un antihistamínico oral, sin ningún otro tratamiento'
  ],
  ok:0,
  clave:'Ante anafilaxia, administrar epinefrina intramuscular de inmediato, sin demora.',
  exp:'Este cuadro (dificultad respiratoria, hinchazón de vía aérea, caída de presión arterial, tras exposición a un alérgeno conocido como el veneno de un insecto) es característico de anafilaxia, la forma más grave de hipersensibilidad tipo I -una emergencia médica que progresa en cuestión de minutos. El tratamiento correcto es la administración INMEDIATA de epinefrina intramuscular, sin esperar a que el cuadro se complete o empeore, porque el retraso en el tratamiento aumenta considerablemente el riesgo de un desenlace fatal.',
  no:{
    1:'Esperar para "confirmar" el diagnóstico es peligroso e incorrecto; la anafilaxia progresa en minutos y el retraso en el tratamiento aumenta el riesgo de muerte.',
    2:'La anafilaxia sí requiere tratamiento de emergencia específico e inmediato: la epinefrina intramuscular.',
    3:'Un antihistamínico oral solo no es suficiente ni de acción suficientemente rápida para tratar una anafilaxia en curso; se requiere epinefrina intramuscular como tratamiento de primera línea.'
  },
  trampa:'Retrasar el tratamiento de una anafilaxia esperando "confirmación" completa del cuadro, o subestimar la urgencia de administrar epinefrina de inmediato.',
  obj:'Reconocer la anafilaxia como emergencia médica y la epinefrina intramuscular como tratamiento inmediato correcto.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 11 y 20.',
  tags:['anafilaxia','epinefrina','emergencia médica','hipersensibilidad tipo I']
},
{
  id:'U8-I-Q29', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Hipersensibilidad y autoinmunidad', sub:'Autoinmunidad: órgano específica vs. sistémica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué determina si una enfermedad autoinmune es específica de un órgano o sistémica, afectando a múltiples tejidos?',
  ops:[
    'Depende de qué antígeno propio específico dejó de ser tolerado por el sistema inmunitario -si es exclusivo de un órgano, el ataque se limita a él; si está presente en múltiples tejidos, el ataque puede ser sistémico',
    'Todas las enfermedades autoinmunes son siempre sistémicas, sin ninguna excepción',
    'Todas las enfermedades autoinmunes son siempre específicas de un solo órgano',
    'La extensión del ataque autoinmune no depende de ningún factor identificable'
  ],
  ok:0,
  clave:'Depende de qué antígeno propio específico se dejó de tolerar: si es exclusivo de un órgano, el ataque se limita a él; si está en varios tejidos, puede ser sistémico.',
  exp:'El daño autoinmune puede estar dirigido a un solo órgano específico (como en algunas enfermedades tiroideas autoinmunes, donde el ataque se limita a la glándula tiroides porque el antígeno blanco es específico de ese tejido) o puede ser sistémico, afectando simultáneamente a múltiples tejidos y órganos distintos, dependiendo de si el antígeno propio que dejó de ser tolerado está presente ampliamente en el cuerpo o restringido a un solo tipo de tejido.',
  no:{
    1:'No todas son sistémicas; muchas enfermedades autoinmunes son específicas de un solo órgano, dependiendo del antígeno blanco involucrado.',
    2:'No todas son específicas de un órgano; algunas son sistémicas, dependiendo de la distribución del antígeno propio afectado.',
    3:'Sí existe un factor identificable que determina la extensión del ataque autoinmune: la distribución del antígeno propio específico que se dejó de tolerar.'
  },
  trampa:'Asumir que todas las enfermedades autoinmunes son de un solo tipo (todas sistémicas o todas específicas de un órgano), sin reconocer que depende del antígeno blanco específico.',
  obj:'Explicar qué determina si una enfermedad autoinmune es específica de un órgano o sistémica.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 11 y 20.',
  tags:['autoinmunidad','enfermedad específica de órgano','enfermedad sistémica','antígeno propio']
},
{
  id:'U8-I-Q30', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunización', sub:'Inmunidad activa vs. pasiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la inmunidad activa y la inmunidad pasiva, en cuanto a velocidad de protección y duración?',
  ops:[
    'La activa es LENTA en establecerse pero DURADERA (el cuerpo genera su propia memoria); la pasiva es INMEDIATA pero TEMPORAL (se reciben anticuerpos ya hechos, sin memoria propia)',
    'Ambas tienen exactamente la misma velocidad de protección y la misma duración',
    'La pasiva es lenta pero duradera y la activa es inmediata pero temporal',
    'Ninguna de las dos formas de inmunidad ofrece ninguna protección real'
  ],
  ok:0,
  clave:'La activa es lenta pero duradera (memoria propia); la pasiva es inmediata pero temporal (anticuerpos prestados, sin memoria).',
  exp:'La inmunidad activa es la que el propio cuerpo genera, produciendo sus propios anticuerpos y células de memoria -es más lenta en establecerse (días o semanas), pero duradera, gracias a la memoria inmunitaria que deja. La inmunidad pasiva consiste en recibir anticuerpos ya hechos, producidos por otra persona o animal -es inmediata en su efecto protector, pero temporal, porque esos anticuerpos prestados se degradan con el tiempo y el receptor no generó su propia memoria inmunitaria.',
  no:{
    1:'No tienen la misma velocidad ni duración; esa es precisamente la diferencia clave entre ambos tipos de inmunidad.',
    2:'Está invertido: la ACTIVA es lenta pero duradera, y la PASIVA es inmediata pero temporal, no al revés.',
    3:'Ambas formas de inmunidad sí ofrecen protección real, aunque con perfiles distintos de velocidad y duración.'
  },
  trampa:'Invertir cuál tipo de inmunidad (activa o pasiva) es rápida pero temporal, y cuál es lenta pero duradera.',
  obj:'Distinguir la inmunidad activa de la pasiva según velocidad de protección y duración.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 16.',
  tags:['inmunidad activa','inmunidad pasiva','anticuerpos maternos','memoria inmunitaria']
},
{
  id:'U8-I-Q31', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunización', sub:'Toxoide',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es un toxoide, y por qué es útil como componente de una vacuna?',
  ops:[
    'Es una toxina bacteriana modificada químicamente para conservar su capacidad de generar anticuerpos protectores, pero perder por completo su capacidad de causar daño real',
    'Es un anticuerpo específico contra una toxina, administrado directamente al paciente',
    'Es una toxina bacteriana sin ninguna modificación, administrada en su forma original y activa',
    'El toxoide no tiene ninguna relación con la fabricación de vacunas'
  ],
  ok:0,
  clave:'Un toxoide es una toxina bacteriana modificada para conservar su inmunogenicidad pero perder su capacidad de causar daño.',
  exp:'Un toxoide es una toxina bacteriana modificada químicamente de forma deliberada, para conservar su capacidad de generar anticuerpos protectores (su inmunogenicidad) pero perder por completo su capacidad de causar daño real al organismo. Se usa como componente de ciertas vacunas (como las dirigidas contra el tétanos o la difteria, enfermedades causadas principalmente por el efecto de una toxina bacteriana), disparando una respuesta inmunitaria protectora sin exponer a la persona al efecto tóxico real de la toxina original.',
  no:{
    1:'Un toxoide es una toxina modificada, administrada para generar una respuesta inmunitaria; no es un anticuerpo administrado directamente (eso sería inmunidad pasiva).',
    2:'Un toxoide es precisamente una toxina MODIFICADA para perder su capacidad de dañar, no la toxina original sin modificar (que sería peligrosa de administrar).',
    3:'El toxoide sí tiene una relación directa y bien establecida con la fabricación de ciertas vacunas, como las de tétanos y difteria.'
  },
  trampa:'Confundir el toxoide (toxina modificada, componente de vacuna) con un anticuerpo administrado directamente (inmunidad pasiva) o con la toxina original sin modificar.',
  obj:'Definir el toxoide y explicar su utilidad como componente de una vacuna.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 16.',
  tags:['toxoide','vacuna','tétanos','difteria']
},
{
  id:'U8-I-Q32', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunización', sub:'Esquema de vacunación y refuerzos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué algunas vacunas requieren dosis de refuerzo periódicas, en vez de una sola dosis inicial?',
  ops:[
    'Porque el nivel de anticuerpos circulantes o de células de memoria puede ir disminuyendo con el tiempo, así que un refuerzo reactiva y consolida la memoria inmunitaria ya establecida',
    'Las dosis de refuerzo no tienen ningún fundamento inmunológico real',
    'Todas las vacunas requieren exactamente el mismo número de dosis, sin ninguna diferencia entre ellas',
    'Las dosis de refuerzo reemplazan por completo a la dosis inicial, que deja de ser necesaria'
  ],
  ok:0,
  clave:'El nivel de anticuerpos/memoria puede disminuir con el tiempo; el refuerzo reactiva y consolida la memoria ya establecida.',
  exp:'El esquema de vacunación (cuántas dosis se requieren, con qué espaciamiento) responde a la biología particular de cada vacuna: algunas necesitan varias dosis iniciales para establecer una memoria inmunitaria robusta, y refuerzos periódicos después, porque el nivel de anticuerpos circulantes o de células de memoria puede ir disminuyendo con el tiempo si no se refuerza deliberadamente -el refuerzo reactiva y consolida esa memoria ya establecida, restaurando un nivel de protección más alto.',
  no:{
    1:'Las dosis de refuerzo sí tienen un fundamento inmunológico real y bien establecido: mantener un nivel adecuado de memoria inmunitaria protectora.',
    2:'No todas las vacunas requieren el mismo número de dosis; el esquema varía según la biología específica de cada vacuna particular.',
    3:'Las dosis de refuerzo complementan a la dosis inicial, reactivando la memoria que esa dosis inicial ya estableció; no la reemplazan.'
  },
  trampa:'No reconocer que el fundamento de los refuerzos vacunales es mantener o reactivar un nivel adecuado de memoria inmunitaria que puede disminuir con el tiempo.',
  obj:'Explicar el fundamento inmunológico de las dosis de refuerzo en un esquema de vacunación.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 16.',
  tags:['esquema de vacunación','dosis de refuerzo','memoria inmunitaria','inmunidad activa']
},
{
  id:'U8-I-Q33', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunodeficiencias primarias', sub:'Primaria vs. secundaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre una inmunodeficiencia primaria y una secundaria?',
  ops:[
    'La primaria es un defecto GENÉTICO presente desde el nacimiento; la secundaria es ADQUIRIDA después del nacimiento (por ejemplo, por VIH o por tratamientos inmunosupresores)',
    'Ambos términos son exactamente sinónimos',
    'La primaria siempre es adquirida y la secundaria siempre es genética',
    'Ninguna de las dos formas de inmunodeficiencia tiene relación con el sistema inmunitario'
  ],
  ok:0,
  clave:'La primaria es un defecto genético congénito; la secundaria es adquirida después del nacimiento.',
  exp:'Una inmunodeficiencia primaria es un defecto GENÉTICO, presente desde el nacimiento, que compromete a algún componente específico del sistema inmunitario -linfocitos B, T, complemento, o células fagocíticas-. Una inmunodeficiencia SECUNDARIA, en cambio, es ADQUIRIDA después del nacimiento, por ejemplo por la infección por VIH (que destruye progresivamente linfocitos T CD4) o por ciertos tratamientos médicos inmunosupresores (como los usados tras un trasplante).',
  no:{
    1:'Son conceptos claramente distintos según el origen del defecto (genético congénito frente a adquirido después del nacimiento).',
    2:'Está invertido: la primaria es GENÉTICA (congénita) y la secundaria es ADQUIRIDA, no al revés.',
    3:'Ambas formas de inmunodeficiencia están directamente relacionadas con defectos del sistema inmunitario, ya sea de origen genético o adquirido.'
  },
  trampa:'Invertir cuál tipo de inmunodeficiencia (primaria o secundaria) es genética/congénita y cuál es adquirida después del nacimiento.',
  obj:'Distinguir la inmunodeficiencia primaria de la secundaria según su origen.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 21.',
  tags:['inmunodeficiencia primaria','inmunodeficiencia secundaria','VIH','defecto genético']
},
{
  id:'U8-I-Q34', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunodeficiencias primarias', sub:'Inmunodeficiencia combinada grave',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la inmunodeficiencia combinada grave (SCID) es considerablemente más severa que un defecto aislado de linfocitos B, como la agammaglobulinemia?',
  ops:[
    'Porque la SCID afecta tanto a los linfocitos T como a los B, dejando a la persona prácticamente sin defensa adaptativa alguna, vulnerable a prácticamente cualquier tipo de infección, incluidas oportunistas',
    'La SCID y la agammaglobulinemia tienen exactamente la misma gravedad clínica',
    'La SCID afecta solo a los linfocitos B, igual que la agammaglobulinemia',
    'La agammaglobulinemia es más grave que la SCID'
  ],
  ok:0,
  clave:'La SCID afecta tanto a T como a B, dejando prácticamente sin defensa adaptativa, vulnerable a cualquier infección incluidas oportunistas.',
  exp:'La inmunodeficiencia combinada grave (SCID) afecta tanto a los linfocitos T como a los B (o afecta a los T de forma tan central que compromete indirectamente también a los B, que dependen de la ayuda de los CD4), dejando a la persona prácticamente sin defensa adaptativa alguna -vulnerable a prácticamente cualquier tipo de infección, incluidas infecciones oportunistas que normalmente no causarían enfermedad. La agammaglobulinemia, en cambio, es un defecto AISLADO de los linfocitos B, que compromete solo la producción de anticuerpos, dejando intacta la rama celular (linfocitos T).',
  no:{
    1:'No tienen la misma gravedad; la SCID, al afectar múltiples ramas simultáneamente, es considerablemente más grave que un defecto aislado como la agammaglobulinemia.',
    2:'La SCID afecta tanto a T como a B (o a T de forma central), no solo a los B como en la agammaglobulinemia.',
    3:'Es al revés: la SCID es más grave que la agammaglobulinemia, precisamente por afectar a múltiples ramas del sistema adaptativo simultáneamente.'
  },
  trampa:'No reconocer por qué afectar a múltiples ramas del sistema adaptativo simultáneamente (como en la SCID) es considerablemente más grave que un defecto aislado de una sola rama.',
  obj:'Explicar por qué la SCID es más severa que un defecto aislado de linfocitos B.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 21.',
  tags:['inmunodeficiencia combinada grave','SCID','agammaglobulinemia','trasplante de médula ósea']
},
{
  id:'U8-I-Q35', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunodeficiencias primarias', sub:'Patrón de infecciones como pista diagnóstica',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño de 3 años presenta episodios recurrentes de infecciones VIRALES, FÚNGICAS y por microorganismos oportunistas, sin infecciones bacterianas particularmente frecuentes.',
  enunciado:'¿Qué rama del sistema inmunitario está probablemente comprometida en este paciente, según el patrón de infecciones descrito?',
  ops:[
    'La rama CELULAR (linfocitos T), ya que las infecciones virales, fúngicas y oportunistas sugieren un defecto predominantemente de esta rama',
    'La rama humoral (linfocitos B o complemento), ya que ese patrón siempre indica un defecto de anticuerpos',
    'El patrón de infecciones no aporta ninguna pista sobre qué rama del sistema inmunitario está comprometida',
    'Este patrón de infecciones es normal en cualquier niño sano de esa edad'
  ],
  ok:0,
  clave:'Infecciones virales, fúngicas y oportunistas sugieren un defecto predominantemente de la rama celular (linfocitos T).',
  exp:'El patrón específico de infecciones que presenta un paciente es con frecuencia la primera pista diagnóstica hacia el tipo de inmunodeficiencia primaria subyacente. Infecciones VIRALES, FÚNGICAS o por microorganismos OPORTUNISTAS recurrentes -como las descritas en este caso- sugieren un problema predominantemente de la inmunidad CELULAR: linfocitos T defectuosos. En cambio, infecciones bacterianas recurrentes (sobre todo por bacterias encapsuladas) sugerirían más bien un problema predominantemente humoral (linfocitos B o complemento) -patrón distinto al descrito en este caso.',
  no:{
    1:'Ese patrón (infecciones bacterianas recurrentes) correspondería más bien a un defecto HUMORAL, no al patrón viral/fúngico/oportunista descrito en este caso, que sugiere un defecto celular.',
    2:'El patrón de infecciones sí aporta una pista diagnóstica clínicamente valiosa sobre qué rama del sistema inmunitario está probablemente comprometida.',
    3:'Este patrón de infecciones recurrentes NO es normal ni esperado en un niño con sistema inmunitario íntegro; sugiere una posible inmunodeficiencia subyacente que amerita evaluación.'
  },
  trampa:'Invertir qué patrón de infección (bacteriano vs. viral/fúngico/oportunista) corresponde a un defecto humoral y cuál corresponde a un defecto celular.',
  obj:'Aplicar el patrón de infecciones descrito para identificar la rama del sistema inmunitario probablemente comprometida.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 21.',
  tags:['inmunodeficiencia primaria','patrón de infecciones','inmunidad celular','infecciones oportunistas']
},
{
  id:'U8-I-Q36', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Trasplante e inmunología del rechazo', sub:'Histocompatibilidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se evalúa la histocompatibilidad entre donante y receptor antes de realizar un trasplante?',
  ops:[
    'Porque cuanto más parecidas sean las moléculas de MHC entre donante y receptor, menor será el riesgo de un rechazo particularmente agresivo, aunque ese riesgo nunca desaparece del todo (salvo entre gemelos idénticos)',
    'La histocompatibilidad no tiene ninguna relación con el riesgo de rechazo de un trasplante',
    'Evaluar la histocompatibilidad elimina por completo cualquier riesgo futuro de rechazo',
    'La histocompatibilidad solo es relevante en trasplantes de médula ósea, nunca en órganos sólidos'
  ],
  ok:0,
  clave:'Cuanto más parecido el MHC entre donante y receptor, menor el riesgo de rechazo agresivo, aunque nunca desaparece del todo salvo entre gemelos idénticos.',
  exp:'Antes de realizar un trasplante se evalúa cuidadosamente la histocompatibilidad entre donante y receptor: cuanto más parecidas sean sus moléculas de MHC, menor será el riesgo de un rechazo particularmente agresivo, aunque ese riesgo nunca desaparece por completo, salvo entre gemelos idénticos genéticamente (que comparten exactamente el mismo MHC). Esta evaluación es relevante en cualquier tipo de trasplante que involucre tejido con MHC distinto, no solo en trasplantes de médula ósea.',
  no:{
    1:'La histocompatibilidad sí tiene una relación directa y central con el riesgo de rechazo, siendo precisamente el fundamento de su evaluación previa al trasplante.',
    2:'Evaluar la histocompatibilidad reduce, pero no elimina por completo, el riesgo de rechazo, salvo en el caso específico de gemelos idénticos.',
    3:'La histocompatibilidad es relevante en cualquier tipo de trasplante de tejido con MHC distinto, incluyendo órganos sólidos, no solo médula ósea.'
  },
  trampa:'Sobrestimar la capacidad de la histocompatibilidad para eliminar completamente el riesgo de rechazo, en vez de solo reducirlo.',
  obj:'Explicar el propósito y la limitación de evaluar la histocompatibilidad antes de un trasplante.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 17.',
  tags:['histocompatibilidad','rechazo de trasplante','MHC','gemelos idénticos']
},
{
  id:'U8-I-Q37', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Trasplante e inmunología del rechazo', sub:'Costo de la inmunosupresión',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el costo real y bien conocido de los fármacos inmunosupresores usados para reducir el rechazo de un trasplante?',
  ops:[
    'Al atenuar la respuesta inmunitaria en general (no solo la dirigida contra el injerto), aumentan el riesgo de infecciones y, a largo plazo, de ciertos tipos de cáncer',
    'Los fármacos inmunosupresores no tienen ningún efecto adverso relevante',
    'Los fármacos inmunosupresores solo afectan la respuesta dirigida específicamente contra el órgano trasplantado, sin ningún efecto general',
    'Los fármacos inmunosupresores eliminan por completo cualquier riesgo de infección'
  ],
  ok:0,
  clave:'La inmunosupresión atenúa la respuesta inmunitaria en general, aumentando el riesgo de infecciones y de ciertos cánceres a largo plazo.',
  exp:'Los fármacos inmunosupresores atenúan la respuesta inmunitaria en GENERAL, no solo la respuesta específicamente dirigida contra el órgano trasplantado. Este beneficio (reducir el rechazo) tiene un costo real y bien conocido: esa misma atenuación general deja al paciente más vulnerable a infecciones de todo tipo, y a largo plazo, también a un riesgo aumentado de ciertos tipos de cáncer que el sistema inmunitario normalmente ayuda a vigilar y controlar mediante un proceso continuo de vigilancia inmunológica contra células anómalas.',
  no:{
    1:'Los fármacos inmunosupresores sí tienen efectos adversos relevantes y bien documentados, precisamente relacionados con la atenuación general de la respuesta inmunitaria.',
    2:'Al contrario, atenúan la respuesta inmunitaria de forma GENERAL, no solo la dirigida específicamente contra el injerto -por eso tienen efectos adversos amplios.',
    3:'Los fármacos inmunosupresores, al contrario, AUMENTAN el riesgo de infecciones, precisamente por atenuar la respuesta inmunitaria en general.'
  },
  trampa:'Subestimar que la inmunosupresión atenúa la respuesta inmunitaria de forma general (no específica contra el injerto), lo que explica su costo en riesgo de infección y cáncer.',
  obj:'Explicar el costo de la inmunosupresión general usada para reducir el rechazo de trasplante.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 17.',
  tags:['inmunosupresores','riesgo de infección','riesgo de cáncer','trasplante']
},
{
  id:'U8-I-Q38', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Trasplante e inmunología del rechazo', sub:'Enfermedad de injerto contra hospedero',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente recibe un trasplante de médula ósea. Semanas después, desarrolla lesiones cutáneas, alteración de la función hepática y síntomas digestivos.',
  enunciado:'¿Qué complicación inmunológica específica de este tipo de trasplante explica mejor este cuadro clínico?',
  ops:[
    'Enfermedad de injerto contra hospedero: las células inmunitarias TRASPLANTADAS (del donante) reconocen al cuerpo del receptor como extraño y lo atacan',
    'Rechazo clásico del injerto por el receptor, igual que en cualquier trasplante de órgano sólido',
    'Esta complicación no tiene ninguna relación con el sistema inmunitario',
    'Se trata de una hipersensibilidad tipo I clásica al medicamento inmunosupresor'
  ],
  ok:0,
  clave:'La enfermedad de injerto contra hospedero: las células inmunitarias del donante atacan al receptor, afectando piel, hígado y tracto digestivo.',
  exp:'La enfermedad de injerto contra hospedero ocurre específicamente en trasplantes que incluyen células inmunitarias vivas del donante, como un trasplante de médula ósea: en vez de que el receptor ataque al injerto (rechazo clásico), son las células inmunitarias TRASPLANTADAS (del donante) las que reconocen al cuerpo del receptor como material extraño y lo atacan, pudiendo dañar la piel, el hígado y el tracto digestivo -exactamente el patrón clínico descrito en este caso. Esta es la razón por la que un trasplante de médula ósea tiene este riesgo específico, que un trasplante de órgano sólido (sin ese componente inmunitario significativo) generalmente no tiene.',
  no:{
    1:'El rechazo clásico es la dirección OPUESTA (el receptor ataca al injerto); el patrón clínico descrito (piel, hígado, digestivo) es característico de la enfermedad de injerto contra hospedero, no del rechazo clásico.',
    2:'Este cuadro sí tiene una relación directa y bien establecida con el sistema inmunitario, específicamente con las células trasplantadas del donante.',
    3:'El patrón clínico descrito (piel, hígado, digestivo, tras trasplante de médula ósea) es característico de la enfermedad de injerto contra hospedero, no de una hipersensibilidad tipo I a un medicamento.'
  },
  trampa:'Confundir la enfermedad de injerto contra hospedero (células del donante atacan al receptor) con el rechazo clásico (receptor ataca al injerto), que son direcciones opuestas del ataque inmunitario.',
  obj:'Identificar la enfermedad de injerto contra hospedero a partir de un cuadro clínico característico tras trasplante de médula ósea.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 17.',
  tags:['enfermedad de injerto contra hospedero','trasplante de médula ósea','rechazo clásico']
},
{
  id:'U8-I-Q39', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Tolerancia inmunológica', sub:'Tolerancia central',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Dónde ocurre la tolerancia central, y qué proceso específico la caracteriza?',
  ops:[
    'Ocurre en los órganos linfoides PRIMARIOS (timo para T, médula ósea para B), mediante el proceso de selección negativa, que elimina linfocitos autorreactivos ANTES de que salgan a circular',
    'Ocurre en los órganos linfoides secundarios, mediante un proceso llamado anergia',
    'La tolerancia central no tiene relación con ningún órgano linfoide específico',
    'Ocurre después de que los linfocitos ya están circulando por el cuerpo'
  ],
  ok:0,
  clave:'La tolerancia central ocurre en órganos linfoides primarios mediante selección negativa, eliminando linfocitos autorreactivos antes de circular.',
  exp:'La tolerancia central ocurre durante la maduración de los linfocitos, dentro de los órganos linfoides PRIMARIOS (el timo para los linfocitos T, la médula ósea para los linfocitos B). Ahí, mediante un proceso llamado selección negativa, los linfocitos inmaduros que reaccionan con demasiada fuerza contra antígenos propios del cuerpo son eliminados -o inactivados de forma permanente- ANTES de completar su maduración y salir a circular por el organismo.',
  no:{
    1:'La tolerancia CENTRAL ocurre en órganos linfoides primarios mediante selección negativa; la anergia es un mecanismo de tolerancia PERIFÉRICA, no central.',
    2:'La tolerancia central sí está directamente relacionada con órganos linfoides primarios específicos: el timo y la médula ósea.',
    3:'La tolerancia central ocurre ANTES de que los linfocitos salgan a circular, durante su maduración en los órganos linfoides primarios, no después.'
  },
  trampa:'Confundir la tolerancia central (en órganos primarios, mediante selección negativa) con la tolerancia periférica (fuera de los órganos primarios, mediante anergia).',
  obj:'Explicar dónde ocurre la tolerancia central y qué proceso la caracteriza.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 15.',
  tags:['tolerancia central','selección negativa','timo','médula ósea']
},
{
  id:'U8-I-Q40', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Tolerancia inmunológica', sub:'Tolerancia periférica y anergia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la anergia, y por qué es necesaria como mecanismo de tolerancia periférica?',
  ops:[
    'Es un estado de inactivación funcional en el que un linfocito reconoce su antígeno propio pero no logra activarse por completo (falta una segunda señal); es necesaria porque algunos linfocitos autorreactivos escapan de la selección negativa central',
    'La anergia es un proceso que ocurre exclusivamente en el timo, antes de que los linfocitos salgan a circular',
    'La anergia elimina físicamente al linfocito autorreactivo, igual que la selección negativa',
    'La anergia no tiene ninguna relación con el control de linfocitos autorreactivos'
  ],
  ok:0,
  clave:'La anergia es inactivación funcional de un linfocito autorreactivo (sin segunda señal); necesaria porque algunos escapan de la selección negativa central.',
  exp:'Ningún sistema de selección es absolutamente perfecto: algunos linfocitos autorreactivos logran escapar de la selección negativa central y llegan a circular libremente por el cuerpo. La anergia es uno de los mecanismos de tolerancia PERIFÉRICA que controla a esos linfocitos ya escapados: es un estado de inactivación funcional en el que el linfocito reconoce correctamente a su antígeno propio, pero no logra activarse por completo porque le falta una segunda señal de activación necesaria -quedando efectivamente neutralizado, sin necesidad de ser eliminado físicamente.',
  no:{
    1:'La anergia ocurre en la PERIFERIA (fuera de los órganos linfoides primarios), no exclusivamente en el timo; la selección negativa es el proceso que ocurre en el timo.',
    2:'La anergia NO elimina físicamente al linfocito; lo inactiva funcionalmente, a diferencia de la selección negativa central, que sí elimina físicamente a las células.',
    3:'La anergia sí tiene una relación directa con el control de linfocitos autorreactivos, siendo precisamente uno de los mecanismos de tolerancia periférica para ese propósito.'
  },
  trampa:'Confundir la anergia (inactivación funcional periférica) con la selección negativa (eliminación física central), que son mecanismos distintos de tolerancia.',
  obj:'Explicar el mecanismo de la anergia como forma de tolerancia periférica.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 15.',
  tags:['anergia','tolerancia periférica','linfocitos autorreactivos','segunda señal']
},
{
  id:'U8-I-Q41', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Tolerancia inmunológica', sub:'Fallo de tolerancia y autoinmunidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurre cuando fallan de forma relevante tanto la tolerancia central como la periférica?',
  ops:[
    'El resultado directo es la autoinmunidad: linfocitos autorreactivos que escaparon de todos los controles de seguridad logran activarse plenamente contra los propios tejidos',
    'No ocurre ninguna consecuencia clínica relevante',
    'El sistema inmunitario deja de funcionar por completo contra cualquier patógeno externo',
    'El fallo de tolerancia siempre resulta en inmunodeficiencia, nunca en autoinmunidad'
  ],
  ok:0,
  clave:'El fallo de tolerancia central y periférica resulta en autoinmunidad: linfocitos autorreactivos escapados logran atacar tejidos propios.',
  exp:'Cuando los mecanismos de tolerancia -tanto la central (selección negativa en órganos primarios) como la periférica (como la anergia)- fallan de forma clínicamente relevante, el resultado directo es la autoinmunidad: linfocitos autorreactivos que lograron escapar de todos los controles de seguridad establecidos consiguen activarse plenamente y atacar a los propios tejidos del cuerpo, produciendo una enfermedad autoinmune.',
  no:{
    1:'Sí ocurre una consecuencia clínica relevante y bien establecida: la aparición de enfermedad autoinmune.',
    2:'El fallo de tolerancia no implica necesariamente que el sistema deje de responder a patógenos externos; el problema específico es el ataque contra lo propio, no la pérdida de defensa contra lo externo.',
    3:'El fallo de tolerancia resulta específicamente en AUTOINMUNIDAD (ataque contra lo propio), un fenómeno conceptualmente distinto de la inmunodeficiencia (falta de defensa).'
  },
  trampa:'Confundir el fallo de tolerancia (que produce autoinmunidad) con una inmunodeficiencia (falta de defensa contra patógenos externos), que son fenómenos distintos.',
  obj:'Explicar la relación entre el fallo de los mecanismos de tolerancia y la aparición de autoinmunidad.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 15.',
  tags:['tolerancia inmunológica','autoinmunidad','linfocitos autorreactivos','fallo de tolerancia']
},
{
  id:'U8-I-Q42', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Tolerancia inmunológica', sub:'Tolerancia inducida farmacológicamente',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se relaciona el concepto de tolerancia inmunológica con el uso de fármacos inmunosupresores en un paciente trasplantado?',
  ops:[
    'Los fármacos inmunosupresores inducen deliberadamente un estado de tolerancia (o al menos de atenuación de la respuesta) hacia el órgano trasplantado, permitiendo que sobreviva en el cuerpo del receptor sin ser destruido',
    'Los fármacos inmunosupresores no tienen ninguna relación conceptual con la tolerancia inmunológica',
    'La tolerancia inmunológica solo puede ocurrir de forma natural, nunca inducida artificialmente',
    'Los fármacos inmunosupresores eliminan por completo la necesidad de cualquier mecanismo de tolerancia'
  ],
  ok:0,
  clave:'Los inmunosupresores inducen deliberadamente tolerancia (o atenuación) hacia el órgano trasplantado, permitiendo su supervivencia.',
  exp:'Cuando la tolerancia se induce DELIBERADAMENTE mediante fármacos inmunosupresores (como en un paciente trasplantado), se logra que un órgano genéticamente distinto -el injerto- pueda sobrevivir en el cuerpo del receptor sin ser destruido por una respuesta de rechazo, imitando artificialmente el efecto protector que la tolerancia natural (central y periférica) ejerce sobre los tejidos propios del cuerpo. Es el mismo concepto de tolerancia, aplicado de forma inducida y farmacológica en vez de natural.',
  no:{
    1:'Los fármacos inmunosupresores sí tienen una relación conceptual directa con la tolerancia inmunológica, al inducir artificialmente un efecto protector similar sobre el injerto.',
    2:'La tolerancia inmunológica puede ser tanto natural (central y periférica) como inducida artificialmente mediante fármacos, como en el caso de un trasplante.',
    3:'Los fármacos inmunosupresores no eliminan la necesidad de mecanismos de tolerancia; más bien, buscan imitar o inducir artificialmente ese efecto protector sobre el injerto.'
  },
  trampa:'No conectar el uso de fármacos inmunosupresores en un trasplante con el concepto general de tolerancia inmunológica, tratándolos como fenómenos sin relación.',
  obj:'Conectar el concepto de tolerancia inmunológica con la inmunosupresión farmacológica en un trasplante.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 15.',
  tags:['tolerancia inducida','inmunosupresores','trasplante','tolerancia inmunológica']
},
{
  id:'U8-I-Q43', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Hipersensibilidad y autoinmunidad', sub:'Definición general de hipersensibilidad',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se define, de forma general, una reacción de hipersensibilidad?',
  ops:[
    'Una respuesta inmunitaria excesiva o inapropiada frente a un antígeno que, por sí mismo, no representa un peligro real para el cuerpo',
    'Una respuesta inmunitaria completamente ausente frente a cualquier antígeno',
    'Una respuesta inmunitaria proporcional y apropiada frente a un patógeno peligroso',
    'La hipersensibilidad es sinónimo exacto de inmunodeficiencia'
  ],
  ok:0,
  clave:'La hipersensibilidad es una respuesta inmunitaria excesiva o inapropiada frente a un antígeno inofensivo en sí mismo.',
  exp:'Una hipersensibilidad es una respuesta inmunitaria EXCESIVA o INAPROPIADA frente a un antígeno que, por sí mismo, no representa un peligro real para el cuerpo -a diferencia de una respuesta inmunitaria normal y proporcional frente a un patógeno genuinamente peligroso. La hipersensibilidad tipo I (alergia inmediata) es el ejemplo más conocido en la práctica clínica cotidiana, pero existen otros tipos de hipersensibilidad con mecanismos distintos.',
  no:{
    1:'La hipersensibilidad es precisamente una respuesta EXCESIVA, no una ausencia de respuesta; una ausencia de respuesta correspondería más bien a una inmunodeficiencia.',
    2:'Una respuesta proporcional frente a un patógeno peligroso es una respuesta inmunitaria NORMAL, no una hipersensibilidad, que por definición es excesiva o inapropiada.',
    3:'Hipersensibilidad e inmunodeficiencia son conceptos opuestos: una es una respuesta excesiva, la otra es una respuesta insuficiente o ausente.'
  },
  trampa:'Confundir la hipersensibilidad (respuesta excesiva) con la inmunodeficiencia (respuesta insuficiente), que son fenómenos conceptualmente opuestos.',
  obj:'Definir de forma general el concepto de hipersensibilidad inmunitaria.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 11 y 20.',
  tags:['hipersensibilidad','respuesta inmunitaria excesiva','definición','alérgeno']
},
{
  id:'U8-I-Q44', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Antígeno, anticuerpo y complejo mayor de histocompatibilidad', sub:'Definición de antígeno',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se define un antígeno dentro del sistema inmunitario adaptativo?',
  ops:[
    'Cualquier molécula capaz de ser reconocida específicamente por el sistema inmunitario adaptativo, disparando una respuesta dirigida contra ella',
    'Únicamente una proteína producida por los linfocitos B',
    'Un antígeno es sinónimo exacto de anticuerpo',
    'Solo los microorganismos completos pueden actuar como antígenos, nunca fragmentos de proteínas'
  ],
  ok:0,
  clave:'Un antígeno es cualquier molécula reconocida específicamente por la inmunidad adaptativa, disparando una respuesta contra ella.',
  exp:'Un antígeno es cualquier molécula capaz de ser reconocida específicamente por el sistema inmunitario adaptativo, disparando una respuesta inmunitaria dirigida contra ella -puede ser una proteína completa, un fragmento de proteína, un polisacárido de una cápsula bacteriana, o cualquier otra molécula con las características estructurales necesarias para ser reconocida específicamente por un receptor de linfocito o por un anticuerpo.',
  no:{
    1:'Esa descripción corresponde al ANTICUERPO (producido por linfocitos B), no al antígeno, que es la molécula reconocida, no la que reconoce.',
    2:'Antígeno y anticuerpo son conceptos claramente distintos: el antígeno es lo reconocido, el anticuerpo es la proteína que lo reconoce.',
    3:'Un antígeno puede ser un fragmento de proteína (como los presentados por el MHC), no necesariamente un microorganismo completo.'
  },
  trampa:'Confundir el antígeno (lo que se reconoce) con el anticuerpo (lo que reconoce), invirtiendo sus roles.',
  obj:'Definir el concepto de antígeno dentro del sistema inmunitario adaptativo.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 3 y 6.',
  tags:['antígeno','definición','sistema inmunitario adaptativo']
},
{
  id:'U8-I-Q45', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Complemento', sub:'Definición general del sistema',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se define, de forma general, el sistema del complemento?',
  ops:[
    'Un conjunto de proteínas plasmáticas que circulan de forma inactiva y se activan en cascada, cada una activando a la siguiente',
    'Un tipo específico de linfocito T especializado en destruir bacterias',
    'Un conjunto de anticuerpos producidos exclusivamente contra virus',
    'El complemento no tiene ninguna relación con la inmunidad innata'
  ],
  ok:0,
  clave:'El complemento es un conjunto de proteínas plasmáticas inactivas que se activan en cascada, una activando a la siguiente.',
  exp:'El sistema del complemento es un conjunto de proteínas PLASMÁTICAS que circulan de forma inactiva por la sangre, y se activan en CASCADA, cada proteína activando a la siguiente en una secuencia ordenada -ya sea por la vía clásica (que requiere un anticuerpo previo) o por la vía alterna (que se activa directamente sobre el microorganismo). Es un componente fundamental de la inmunidad innata, aunque puede conectarse con la adaptativa a través de la vía clásica.',
  no:{
    1:'El complemento no es un tipo de célula (como un linfocito T); es un conjunto de proteínas plasmáticas que circulan de forma soluble en la sangre.',
    2:'El complemento no son anticuerpos; son proteínas plasmáticas distintas, aunque la vía clásica de su activación puede requerir la presencia previa de un anticuerpo.',
    3:'El complemento sí tiene una relación directa y central con la inmunidad innata, siendo uno de sus componentes principales (junto con fagocitos, células NK, barreras físicas).'
  },
  trampa:'Confundir el sistema del complemento (proteínas plasmáticas solubles) con células inmunitarias o con anticuerpos, que son componentes distintos del sistema inmunitario.',
  obj:'Definir de forma general el sistema del complemento como conjunto de proteínas plasmáticas activadas en cascada.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 5.',
  tags:['complemento','proteínas plasmáticas','cascada','definición']
},
{
  id:'U8-I-Q46', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Respuesta humoral y celular', sub:'Citocinas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué son las citocinas, y qué papel juegan en la coordinación de la respuesta inmunitaria mediada por linfocitos T CD4?',
  ops:[
    'Son moléculas de señalización entre células inmunitarias, liberadas por los CD4 para activar a linfocitos B, macrófagos y a los propios linfocitos T CD8',
    'Las citocinas son un tipo de anticuerpo producido por los linfocitos B',
    'Las citocinas destruyen directamente a las células infectadas, igual que los linfocitos CD8',
    'Las citocinas no tienen ninguna función de comunicación entre células inmunitarias'
  ],
  ok:0,
  clave:'Las citocinas son moléculas de señalización liberadas por CD4 para activar a linfocitos B, macrófagos y CD8.',
  exp:'Las citocinas son moléculas de SEÑALIZACIÓN entre células inmunitarias -los linfocitos T CD4 las liberan como su principal herramienta de coordinación: activan a los linfocitos B (ayudándolos a producir anticuerpos de mejor calidad), activan a los macrófagos (para que completen la destrucción de lo que fagocitaron) y sostienen la actividad de los propios linfocitos T CD8. Es precisamente a través de las citocinas que el CD4 cumple su función coordinadora central, sin necesitar destruir nada directamente él mismo.',
  no:{
    1:'Las citocinas no son anticuerpos; son moléculas de señalización distintas, aunque ambas puedan ser producidas por células del sistema inmunitario adaptativo.',
    2:'Las citocinas no destruyen directamente; su función es de señalización y coordinación, distinta del mecanismo citotóxico directo de los linfocitos CD8.',
    3:'Las citocinas sí tienen una función central de comunicación entre células inmunitarias, siendo la principal herramienta de coordinación de los linfocitos T CD4.'
  },
  trampa:'Confundir las citocinas (moléculas de señalización) con anticuerpos o con un mecanismo de destrucción directa, en vez de reconocerlas como herramientas de comunicación celular.',
  obj:'Explicar el papel de las citocinas en la coordinación de la respuesta inmunitaria mediada por CD4.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1, 9 y 10.',
  tags:['citocinas','CD4','señalización celular','coordinación inmunitaria']
},
{
  id:'U8-I-Q47', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunización', sub:'Vacunas de microorganismo debilitado vs. inactivado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tienen en común las distintas formas de una vacuna (microorganismo debilitado, inactivado, o solo un fragmento de él) en cuanto a su objetivo inmunológico?',
  ops:[
    'Todas exponen al sistema inmunitario a una versión segura del antígeno, disparando una respuesta activa y memoria inmunitaria sin exponer a la persona a la enfermedad real ni sus complicaciones',
    'No tienen ningún objetivo en común, cada forma de vacuna busca algo completamente distinto',
    'Todas buscan generar inmunidad pasiva, no activa',
    'Ninguna forma de vacuna genera memoria inmunitaria'
  ],
  ok:0,
  clave:'Todas las formas de vacuna exponen a una versión segura del antígeno para generar respuesta activa y memoria, sin la enfermedad real.',
  exp:'Ya sea mediante un microorganismo debilitado, inactivado, o solo un fragmento de él (o, en el caso de un toxoide, una toxina modificada), todas las formas de vacuna comparten el mismo objetivo inmunológico fundamental: exponer al sistema inmunitario a una versión SEGURA del antígeno, disparando una respuesta ACTIVA y memoria inmunitaria duradera, sin exponer a la persona a la enfermedad real ni a sus posibles complicaciones -la diferencia entre las distintas formas está en CÓMO se logra esa seguridad, no en el objetivo inmunológico final que persiguen.',
  no:{
    1:'Sí tienen un objetivo común claro: generar una respuesta activa y memoria inmunitaria protectora, de forma segura, independientemente de la forma específica del antígeno vacunal usado.',
    2:'Las vacunas buscan generar inmunidad ACTIVA (memoria propia), no inmunidad pasiva (anticuerpos prestados de otra fuente).',
    3:'Todas las formas de vacuna buscan precisamente generar memoria inmunitaria duradera; ese es su objetivo inmunológico central.'
  },
  trampa:'No reconocer el objetivo inmunológico común (generar respuesta activa y memoria de forma segura) que comparten las distintas formas de antígeno vacunal.',
  obj:'Explicar el objetivo inmunológico común de las distintas formas de antígeno usadas en una vacuna.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 16.',
  tags:['vacuna','microorganismo debilitado','microorganismo inactivado','inmunidad activa']
},
{
  id:'U8-I-Q48', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunidad innata y adaptativa', sub:'MHC I/CD8 y MHC II/CD4',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Usando la regla mnemotécnica "8×1 y 2×2", ¿qué combinación de MHC y linfocito T es correcta?',
  ops:[
    'MHC clase I presenta a linfocitos T CD8 (8×1); MHC clase II presenta a linfocitos T CD4 (2×2)',
    'MHC clase I presenta a linfocitos T CD4; MHC clase II presenta a linfocitos T CD8',
    'La regla mnemotécnica no tiene ninguna aplicación real en inmunología',
    'MHC clase I y clase II presentan siempre al mismo tipo de linfocito T'
  ],
  ok:0,
  clave:'MHC I presenta a CD8 (8×1=8); MHC II presenta a CD4 (2×2=4... la regla asocia el número de la clase multiplicado por el CD correspondiente).',
  exp:'La regla mnemotécnica clásica funciona así: el MHC de clase I presenta antígenos del interior de la célula específicamente a los linfocitos T CD8 (8 × 1 = 8), y lo expresan todas las células nucleadas, porque cualquiera puede infectarse. El MHC de clase II presenta antígenos capturados del exterior específicamente a los linfocitos T CD4 (2 × 2 = 4), y lo expresan solo las células presentadoras de antígeno profesionales. Esta regla ayuda a recordar rápidamente qué clase de MHC corresponde a cada tipo de linfocito T sin tener que memorizar ambas asociaciones por separado.',
  no:{
    1:'Está invertido: MHC I corresponde a CD8, y MHC II corresponde a CD4, no al revés -la regla mnemotécnica "8×1, 2×2" ayuda precisamente a recordar esta asociación correcta.',
    2:'La regla mnemotécnica sí tiene una aplicación práctica real y es ampliamente usada para recordar la asociación correcta entre clase de MHC y tipo de linfocito T.',
    3:'MHC I y MHC II presentan a tipos DISTINTOS de linfocito T (CD8 y CD4 respectivamente), no al mismo tipo en ambos casos.'
  },
  trampa:'Invertir la asociación entre MHC clase I/CD8 y MHC clase II/CD4, olvidando la regla mnemotécnica que ayuda a recordar la combinación correcta.',
  obj:'Aplicar correctamente la asociación entre clase de MHC y tipo de linfocito T que presenta.',
  ref:'Abbas, Inmunología Celular y Molecular. Janeway, Inmunobiología.',
  tags:['MHC clase I','MHC clase II','CD4','CD8']
},
{
  id:'U8-I-Q49', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Hipersensibilidad y autoinmunidad', sub:'Tolerancia y autoinmunidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué relación conceptual existe entre la pérdida de tolerancia inmunológica y el desarrollo de una enfermedad autoinmune?',
  ops:[
    'La autoinmunidad ocurre precisamente cuando el sistema inmunitario pierde la tolerancia hacia los propios tejidos y empieza a atacarlos como si fueran material extraño',
    'La tolerancia inmunológica y la autoinmunidad no tienen ninguna relación conceptual entre sí',
    'La autoinmunidad ocurre cuando el sistema inmunitario tiene DEMASIADA tolerancia hacia lo propio',
    'La pérdida de tolerancia siempre resulta en inmunodeficiencia, nunca en autoinmunidad'
  ],
  ok:0,
  clave:'La autoinmunidad ocurre cuando el sistema inmunitario pierde la tolerancia hacia lo propio y lo ataca como si fuera extraño.',
  exp:'La autoinmunidad ocurre cuando el sistema inmunitario pierde la tolerancia hacia los propios tejidos del cuerpo -un concepto que se desarrolla en profundidad en el tema de tolerancia inmunológica, el último de este bloque- y empieza a atacarlos como si fueran material extraño, produciendo una enfermedad autoinmune. Es, en esencia, la consecuencia clínica directa de un fallo en los mecanismos de tolerancia central y/o periférica.',
  no:{
    1:'Sí tienen una relación conceptual directa y fundamental: la autoinmunidad es, precisamente, la consecuencia de un fallo de tolerancia.',
    2:'Es al revés: la autoinmunidad ocurre por MENOS tolerancia (pérdida de tolerancia) hacia lo propio, no por exceso de ella.',
    3:'La pérdida de tolerancia resulta específicamente en AUTOINMUNIDAD (ataque contra lo propio), no en inmunodeficiencia (falta de defensa contra lo externo).'
  },
  trampa:'Invertir la relación entre tolerancia y autoinmunidad, o confundir la pérdida de tolerancia con una inmunodeficiencia.',
  obj:'Explicar la relación conceptual entre la pérdida de tolerancia inmunológica y el desarrollo de autoinmunidad.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 11, 15 y 20.',
  tags:['tolerancia inmunológica','autoinmunidad','pérdida de tolerancia']
},
{
  id:'U8-I-Q50', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Trasplante e inmunología del rechazo', sub:'El rechazo como función normal del sistema',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se dice que el rechazo de un trasplante "no es un fallo del sistema inmunitario", sino el sistema haciendo exactamente lo que está diseñado para hacer?',
  ops:[
    'Porque el sistema inmunitario está diseñado precisamente para reconocer y atacar tejido genéticamente distinto al propio, y el MHC del injerto es, biológicamente, tejido extraño',
    'El rechazo de trasplante siempre representa un fallo o mal funcionamiento del sistema inmunitario',
    'El sistema inmunitario nunca reacciona ante tejido genéticamente distinto',
    'El rechazo de trasplante no tiene ninguna base biológica real'
  ],
  ok:0,
  clave:'El sistema inmunitario está diseñado para reconocer y atacar tejido genéticamente distinto; el MHC del injerto es, biológicamente, tejido extraño.',
  exp:'El sistema inmunitario está diseñado, precisamente, para reconocer y atacar cualquier tejido genéticamente distinto al propio, identificándolo mediante el reconocimiento de moléculas de MHC diferentes a las del propio cuerpo. Un órgano trasplantado (salvo entre gemelos idénticos) tiene, biológicamente, un MHC distinto al del receptor -desde la perspectiva del sistema inmunitario, es indistinguible de cualquier otro tejido "extraño" peligroso, y por eso lo ataca exactamente como está diseñado para hacerlo. El "problema" del rechazo no es un mal funcionamiento del sistema, sino una consecuencia esperada y biológicamente coherente de su función normal, aplicada a una situación (el trasplante) que la evolución no "previó".',
  no:{
    1:'El rechazo no representa un fallo del sistema inmunitario; representa su función NORMAL y esperada, aplicada a la situación específica de un trasplante.',
    2:'El sistema inmunitario sí reacciona, de forma predecible y bien caracterizada, ante tejido genéticamente distinto, como el de un órgano trasplantado no compatible.',
    3:'El rechazo de trasplante sí tiene una base biológica real y bien establecida: el reconocimiento del MHC extraño del injerto por el sistema inmunitario del receptor.'
  },
  trampa:'Interpretar el rechazo de trasplante como una anomalía o mal funcionamiento del sistema inmunitario, en vez de reconocerlo como su función normal aplicada a una situación biológicamente nueva.',
  obj:'Explicar por qué el rechazo de trasplante representa la función normal del sistema inmunitario, no un fallo de este.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 17.',
  tags:['rechazo de trasplante','MHC','función normal del sistema inmunitario','histocompatibilidad']
}

]);
