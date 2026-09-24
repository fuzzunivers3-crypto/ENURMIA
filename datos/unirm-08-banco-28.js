/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE PARASITOLOGIA (2/2)
   Completa Parasitologia Medica a 50 preguntas junto con
   banco-27.js. Cubre cestodos, trematodos, diagnostico
   parasitologico, ectoparasitos, artropodos de importancia medica
   y control/prevencion de parasitosis (temas 7-12).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== PARASITOLOGIA MEDICA ===================== */
{
  id:'U8-P-Q27', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Taenia solium', sub:'Teniasis vs. cisticercosis',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente que trabaja en una porqueriza desarrolla convulsiones de inicio en la edad adulta. Una tomografía cerebral muestra múltiples lesiones quísticas.',
  enunciado:'¿Qué mecanismo de infección explica este cuadro neurológico, y en qué se diferencia del mecanismo que produce la teniasis intestinal simple?',
  ops:[
    'Ingestión de HUEVOS de Taenia solium (por contaminación fecal-oral), que produce cisticercosis (incluida la neurocisticercosis); es distinto de ingerir carne de cerdo con cisticercos, que produce solo teniasis intestinal',
    'Ambos mecanismos (ingerir carne o huevos) producen exactamente el mismo cuadro clínico',
    'Las convulsiones no tienen ninguna relación con Taenia solium',
    'La teniasis intestinal siempre progresa automáticamente a neurocisticercosis'
  ],
  ok:0,
  clave:'Ingerir huevos de Taenia solium (no carne con cisticercos) produce cisticercosis, incluida la neurocisticercosis, causa frecuente de epilepsia de inicio adulto.',
  exp:'Si un humano ingiere HUEVOS de Taenia solium (por contaminación fecal-oral), esos huevos eclosionan en el intestino y las larvas migran por vía sanguínea hacia distintos tejidos, incluido el sistema nervioso central (neurocisticercosis), una de las causas más frecuentes de epilepsia de inicio en la edad adulta en regiones endémicas. Esto es distinto de ingerir carne de cerdo con cisticercos, que produce solo teniasis intestinal (el gusano adulto en el intestino, generalmente leve). Son dos enfermedades distintas causadas por la misma especie, según qué forma se ingiera.',
  no:{
    1:'Los dos mecanismos producen enfermedades completamente distintas: teniasis intestinal leve (por ingerir carne con cisticercos) frente a cisticercosis tisular, potencialmente grave (por ingerir huevos).',
    2:'Las convulsiones sí tienen una relación directa con Taenia solium, específicamente a través de la neurocisticercosis, cuando los cisticercos se alojan en el sistema nervioso central.',
    3:'La teniasis intestinal no progresa automáticamente a neurocisticercosis; son dos vías de infección distintas (carne contra huevos), no una progresión secuencial de la misma vía.'
  },
  trampa:'No distinguir los dos mecanismos de infección por Taenia solium (ingestión de carne con cisticercos vs. ingestión de huevos), que producen enfermedades completamente distintas en gravedad y localización.',
  obj:'Explicar la distinción entre teniasis y cisticercosis según la forma ingerida de Taenia solium.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Taenia solium','neurocisticercosis','teniasis','cisticercosis']
},
{
  id:'U8-P-Q28', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Cestodos', sub:'Anatomía básica',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura de un cestodo se fija a la pared intestinal del hospedero definitivo mediante ventosas (y a veces ganchos)?',
  ops:['El proglótide grávido', 'El escólex', 'La cercaria', 'El esquizonte'],
  ok:1,
  clave:'El escólex es la región anterior del cestodo que se fija a la pared intestinal mediante ventosas.',
  exp:'El escólex es la región anterior de un cestodo, con ventosas (y, en algunas especies, ganchos), que se fija a la pared intestinal del hospedero definitivo. El estróbilo (el cuerpo del gusano) está formado por proglótides, segmentos reproductivos que se forman cerca del escólex y maduran a medida que se alejan de él, hasta desprenderse los grávidos con huevos.',
  no:{
    0:'El proglótide grávido es el segmento distal que se desprende cargado de huevos, no la estructura de fijación a la pared intestinal.',
    2:'La cercaria es la forma infectante de los trematodos, liberada por el caracol, sin relación con la fijación de los cestodos.',
    3:'El esquizonte es una forma del ciclo de Plasmodium (malaria), sin relación con la anatomía de los cestodos.'
  },
  trampa:'Confundir el escólex con otras estructuras del cestodo o con formas de otros grupos de parásitos.',
  obj:'Identificar el escólex como la estructura de fijación de un cestodo a la pared intestinal.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['escólex','cestodos','anatomía parasitaria','fijación intestinal']
},
{
  id:'U8-P-Q29', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Hymenolepis nana', sub:'Ciclo directo excepcional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica hace a Hymenolepis nana excepcional entre los cestodos de relevancia médica?',
  ops:[
    'Puede completar su ciclo de vida completo dentro de un único hospedero humano, sin necesidad de un hospedero intermediario',
    'Es el único cestodo que nunca infecta a niños',
    'Requiere obligatoriamente al cerdo como hospedero intermediario',
    'No puede transmitirse de persona a persona'
  ],
  ok:0,
  clave:'Hymenolepis nana puede completar su ciclo completo dentro de un único hospedero humano, sin necesidad de hospedero intermediario.',
  exp:'Hymenolepis nana es peculiar entre los cestodos de relevancia médica porque puede completar su ciclo de vida COMPLETO dentro de un único hospedero humano, sin necesidad de un hospedero intermediario -a diferencia de Taenia, que requiere al cerdo (o a la res) como hospedero intermediario. Esto le permite tener también un mecanismo de autoinfección, lo que explica por qué es el cestodo intestinal más frecuente en niños en muchas regiones, con transmisión fácil por vía fecal-oral directa entre personas.',
  no:{
    1:'Hymenolepis nana es, de hecho, el cestodo intestinal MÁS FRECUENTE en niños en muchas regiones, no uno que nunca los infecta.',
    2:'Hymenolepis nana no requiere obligatoriamente al cerdo; su característica distintiva es precisamente que NO necesita hospedero intermediario en absoluto.',
    3:'Hymenolepis nana sí se transmite fácilmente de persona a persona, por vía fecal-oral directa, gracias a su ciclo directo y capacidad de autoinfección.'
  },
  trampa:'Confundir a Hymenolepis nana con Taenia solium en cuanto a la necesidad de un hospedero intermediario, o subestimar su frecuencia en niños.',
  obj:'Explicar la característica excepcional del ciclo directo de Hymenolepis nana entre los cestodos.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Hymenolepis nana','ciclo directo','cestodo en niños','autoinfección']
},
{
  id:'U8-P-Q30', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Trematodos', sub:'Hospedero intermediario obligado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué hospedero intermediario requieren OBLIGATORIAMENTE todos los trematodos de relevancia médica humana?',
  ops:['El cerdo', 'Un caracol de agua dulce', 'El mosquito', 'Ningún trematodo requiere hospedero intermediario'],
  ok:1,
  clave:'Todos los trematodos de relevancia médica requieren obligatoriamente un caracol de agua dulce como hospedero intermediario.',
  exp:'Todos los trematodos (gusanos planos no segmentados, "duelas") de relevancia médica humana requieren un caracol de agua dulce específico como hospedero intermediario, dentro del cual el parásito se multiplica asexualmente y produce la cercaria, la forma infectante que sale del caracol hacia el agua. Esta dependencia estricta explica por qué estas parasitosis se concentran geográficamente en regiones con cuerpos de agua dulce donde existe la especie de caracol adecuada.',
  no:{
    0:'El cerdo es el hospedero intermediario de Taenia solium (un cestodo), no de los trematodos, que requieren específicamente un caracol de agua dulce.',
    2:'El mosquito es el vector de Plasmodium (malaria), no el hospedero intermediario de los trematodos.',
    3:'Todos los trematodos de relevancia médica requieren obligatoriamente un caracol de agua dulce; no hay excepción a esta dependencia en el grupo.'
  },
  trampa:'Confundir el hospedero intermediario de los trematodos con el de otros grupos de parásitos (cestodos, protozoos hemáticos).',
  obj:'Identificar al caracol de agua dulce como el hospedero intermediario obligado de todos los trematodos de relevancia médica.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['trematodos','caracol de agua dulce','hospedero intermediario obligado','cercaria']
},
{
  id:'U8-P-Q31', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Schistosoma', sub:'Vía de infección',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un viajero que nadó en un lago de agua dulce en una zona endémica para esquistosomiasis desarrolla, semanas después, hematuria y hallazgos sugestivos de afectación de la vejiga.',
  enunciado:'¿Por qué vía se infectó este paciente, considerando que no ingirió agua del lago de forma consciente?',
  ops:[
    'Por ingestión de agua contaminada durante la natación',
    'Por penetración cutánea activa de la cercaria a través de la piel intacta durante el contacto con el agua',
    'Por picadura de un mosquito presente en el lago',
    'Esquistosomiasis no puede adquirirse por contacto con agua dulce'
  ],
  ok:1,
  clave:'Schistosoma se adquiere por penetración cutánea activa de la cercaria al contacto con agua dulce contaminada, no por ingestión.',
  exp:'Schistosoma tiene una vía de infección particular entre los trematodos: la cercaria liberada por el caracol PENETRA ACTIVAMENTE la piel humana intacta al contacto con agua dulce contaminada (al bañarse, nadar o trabajar en el agua), sin necesidad de ser ingerida. Tras la penetración cutánea, los parásitos migran hasta alojarse en las venas del plexo venoso vesical (en la forma urinaria), donde los huevos depositados producen hematuria y otros hallazgos, como el descrito en el caso.',
  no:{
    0:'No es necesaria la ingestión de agua; la vía de infección de Schistosoma es específicamente la penetración cutánea activa de la cercaria, no la ingestión.',
    2:'Schistosoma no se transmite por picadura de mosquito; su vector intermediario es un caracol de agua dulce, y la infección ocurre por penetración cutánea directa, no por un vector que pica.',
    3:'La esquistosomiasis sí se adquiere por contacto con agua dulce contaminada, precisamente por la penetración cutánea de la cercaria durante ese contacto.'
  },
  trampa:'Asumir que la infección por Schistosoma requiere ingestión de agua, cuando en realidad la vía de entrada es la penetración cutánea directa.',
  obj:'Explicar la vía de infección por penetración cutánea de Schistosoma al contacto con agua dulce contaminada.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Schistosoma','penetración cutánea','esquistosomiasis urinaria','hematuria']
},
{
  id:'U8-P-Q32', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Fasciola hepatica', sub:'Vía digestiva',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente que consume habitualmente berros silvestres crudos, recolectados de un arroyo cerca de un área de pastoreo de ganado, presenta dolor en hipocondrio derecho, fiebre y eosinofilia marcada.',
  enunciado:'¿Qué parásito debe sospecharse, y por qué vía se adquirió la infección?',
  ops:[
    'Schistosoma, por penetración cutánea',
    'Fasciola hepatica, por vía DIGESTIVA, al ingerir metacercarias adheridas a vegetales acuáticos crudos contaminados',
    'Plasmodium, por picadura de mosquito',
    'Enterobius vermicularis, por autoinfección perianal'
  ],
  ok:1,
  clave:'Fasciola hepatica se adquiere por vía digestiva, al ingerir metacercarias en vegetales acuáticos crudos como el berro contaminado.',
  exp:'Fasciola hepatica se adquiere por vía DIGESTIVA: el humano se infecta al ingerir metacercarias adheridas a vegetales acuáticos crudos, típicamente berros silvestres crecidos en agua dulce contaminada por heces de ganado (su hospedero definitivo natural). Tras la ingestión, las larvas migran hacia el hígado, produciendo en su fase aguda dolor en hipocondrio derecho, fiebre y eosinofilia marcada, antes de alojarse finalmente en los conductos biliares -exactamente el cuadro y el antecedente epidemiológico descritos en el caso.',
  no:{
    0:'Schistosoma se adquiere por penetración cutánea, no es el mecanismo descrito en este caso, que corresponde a una exposición alimentaria (ingestión de berros).',
    2:'Plasmodium se transmite por picadura de mosquito, sin relación con el consumo de vegetales acuáticos contaminados descrito en el caso.',
    3:'Enterobius vermicularis se transmite por autoinfección perianal y contacto fecal-oral directo, sin relación con el consumo de vegetales acuáticos ni con el cuadro hepático descrito.'
  },
  trampa:'Confundir la vía digestiva de Fasciola hepatica (por vegetales acuáticos contaminados) con la vía cutánea de Schistosoma, ambos trematodos pero con mecanismos de infección distintos.',
  obj:'Reconocer la infección por Fasciola hepatica a partir del antecedente de consumo de vegetales acuáticos crudos contaminados.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Fasciola hepatica','vía digestiva','berros contaminados','migración hepática']
},
{
  id:'U8-P-Q33', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Diagnóstico parasitológico', sub:'Muestras seriadas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con sospecha clínica alta de parasitosis intestinal tiene un coprológico directo único que resulta negativo.',
  enunciado:'¿Qué conducta es la más apropiada antes de descartar la parasitosis intestinal sospechada?',
  ops:[
    'Descartar definitivamente la parasitosis con ese único resultado negativo',
    'Solicitar muestras coprológicas seriadas (típicamente tres, en días distintos), por la eliminación intermitente de huevos o quistes en las heces',
    'No hacer nada más, ya que el coprológico directo siempre es 100% sensible',
    'Solicitar directamente una biopsia intestinal sin ningún estudio adicional no invasivo primero'
  ],
  ok:1,
  clave:'Ante sospecha clínica persistente con coprológico único negativo, se recomiendan muestras seriadas, por la eliminación intermitente de huevos/quistes.',
  exp:'Como la eliminación de huevos o quistes en las heces puede ser intermitente (no constante día a día), un coprológico directo único negativo NO descarta una parasitosis intestinal cuando la sospecha clínica persiste. Se recomienda examinar varias muestras seriadas (típicamente tres, en días distintos) antes de descartar la infección, y si persiste la sospecha, recurrir a técnicas de concentración que aumentan la sensibilidad.',
  no:{
    0:'Un único coprológico negativo no es suficiente para descartar la parasitosis, precisamente por la eliminación intermitente de los elementos parasitarios en las heces.',
    2:'El coprológico directo simple tiene una sensibilidad LIMITADA, especialmente con baja carga parasitaria, no es 100% sensible.',
    3:'La biopsia intestinal es un procedimiento invasivo que no es el paso inicial apropiado; primero se agotan las opciones no invasivas, como las muestras seriadas y las técnicas de concentración.'
  },
  trampa:'Descartar una parasitosis intestinal basándose en un único coprológico negativo, sin considerar la eliminación intermitente de elementos parasitarios en las heces.',
  obj:'Aplicar la recomendación de muestras coprológicas seriadas ante sospecha clínica persistente con un coprológico único negativo.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['muestras seriadas','coprológico','eliminación intermitente','sensibilidad diagnóstica']
},
{
  id:'U8-P-Q34', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Serología parasitológica', sub:'Uso apropiado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué contexto es especialmente útil la serología para el diagnóstico de una parasitosis?',
  ops:[
    'Cuando el parásito es fácilmente visible en un coprológico directo simple',
    'Cuando el parásito es tisular profundo o de difícil visualización directa en una muestra accesible, como en toxoplasmosis, cisticercosis o Chagas crónico',
    'La serología nunca es útil en parasitología',
    'Solo se usa para diagnosticar malaria'
  ],
  ok:1,
  clave:'La serología es especialmente útil cuando el parásito es tisular profundo o difícil de visualizar directamente.',
  exp:'La serología es especialmente útil en parasitosis donde el parásito es difícil de visualizar directamente en una muestra accesible, o cuando la infección es tisular profunda sin salida fácil de formas parasitarias hacia una muestra examinable de rutina -por ejemplo, toxoplasmosis, cisticercosis o enfermedad de Chagas crónica (donde la parasitemia circulante ya es muy baja o indetectable directamente). Su limitación general es que no siempre distingue con precisión infección activa de una infección pasada ya resuelta.',
  no:{
    0:'Cuando el parásito es fácilmente visible en un coprológico directo, ese es el método diagnóstico preferido; la serología es más útil cuando la visualización directa es difícil o imposible.',
    2:'La serología sí tiene aplicaciones útiles y bien establecidas en parasitología, precisamente en los contextos de parásitos tisulares profundos o de difícil visualización.',
    3:'El diagnóstico de malaria se hace principalmente con gota gruesa y frotis fino, no con serología; la serología se usa más bien en otras parasitosis como las mencionadas.'
  },
  trampa:'No reconocer el contexto específico (parásitos tisulares profundos, de difícil visualización directa) donde la serología tiene mayor utilidad diagnóstica en parasitología.',
  obj:'Identificar el contexto apropiado de uso de la serología en el diagnóstico parasitológico.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['serología parasitológica','toxoplasmosis','cisticercosis','Chagas crónico']
},
{
  id:'U8-P-Q35', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Pediculosis', sub:'Localización y transmisión',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las variedades de piojo humano vive en la ROPA (no directamente sobre la piel) y es capaz de transmitir enfermedades infecciosas graves como el tifus epidémico?',
  ops:['Pediculus humanus capitis', 'Pediculus humanus corporis', 'Pthirus pubis', 'Ninguna variedad de piojo vive en la ropa'],
  ok:1,
  clave:'Pediculus humanus corporis vive en la ropa y es el único piojo capaz de transmitir enfermedades graves como el tifus epidémico.',
  exp:'Pediculus humanus corporis (piojo del cuerpo) vive en la ropa (no directamente sobre la piel, a diferencia del piojo de la cabeza) y se asocia a condiciones de hacinamiento y falta de higiene, siendo además el único de los piojos capaz de transmitir enfermedades infecciosas graves, como el tifus epidémico. Es distinto de Pediculus capitis (cabeza, niños) y de Pthirus pubis (vello púbico, transmisión sexual).',
  no:{
    0:'Pediculus capitis vive en el cuero cabelludo, no en la ropa, y no tiene la misma relevancia como transmisor de enfermedades infecciosas graves.',
    2:'Pthirus pubis afecta el vello púbico, con transmisión típicamente sexual, no vive en la ropa ni transmite enfermedades como el tifus.',
    3:'Sí existe una variedad de piojo que vive específicamente en la ropa: Pediculus humanus corporis.'
  },
  trampa:'Confundir las tres variedades de piojo humano entre sí en cuanto a su localización habitual y su relevancia como vector de enfermedades.',
  obj:'Identificar a Pediculus corporis como la variedad de piojo que vive en la ropa y transmite enfermedades graves.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Pediculus corporis','tifus epidémico','pediculosis','hacinamiento']
},
{
  id:'U8-P-Q36', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Sarna', sub:'Prurito nocturno y convivientes',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Varios miembros de una misma familia presentan, casi al mismo tiempo, prurito intenso que empeora claramente por la noche, con lesiones en los espacios interdigitales de las manos y las muñecas.',
  enunciado:'¿Qué diagnóstico es el más probable, y qué dato del caso lo hace especialmente sugestivo?',
  ops:[
    'Pediculosis capitis, por la localización de las lesiones',
    'Sarna (escabiosis), sugerida por el prurito de predominio NOCTURNO y por afectar a VARIOS convivientes de la misma casa casi simultáneamente',
    'Larva migrans cutánea, por el prurito intenso',
    'Ninguna parasitosis produce prurito que afecte a varios convivientes a la vez'
  ],
  ok:1,
  clave:'El prurito nocturno que afecta a varios convivientes simultáneamente, con lesiones interdigitales, es muy sugestivo de sarna.',
  exp:'El síntoma más distintivo de la sarna es el prurito intenso, característicamente PEOR POR LA NOCHE, que además, a diferencia de muchas otras dermatosis, puede afectar a VARIOS miembros de la misma familia o convivientes al mismo tiempo, por su alta transmisibilidad mediante contacto piel con piel prolongado. Las localizaciones típicas incluyen los espacios interdigitales de las manos y las muñecas, exactamente el patrón descrito en el caso.',
  no:{
    0:'La pediculosis capitis afecta el cuero cabelludo, no los espacios interdigitales de las manos ni las muñecas, localizaciones descritas en este caso.',
    2:'La larva migrans cutánea produce un trayecto serpiginoso individual, no típicamente un cuadro que afecte simultáneamente a varios convivientes de una misma casa.',
    3:'La sarna es precisamente la parasitosis que se caracteriza por afectar a varios convivientes casi simultáneamente, por su alta transmisibilidad por contacto piel con piel.'
  },
  trampa:'No reconocer la combinación específica de datos (prurito nocturno + varios convivientes afectados + localización interdigital) como muy sugestiva de sarna.',
  obj:'Reconocer el cuadro clínico característico de la sarna, incluyendo su patrón de afectación familiar.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['sarna','Sarcoptes scabiei','prurito nocturno','afectación familiar']
},
{
  id:'U8-P-Q37', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Artrópodos vectores', sub:'Aedes vs. Anopheles',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un viajero que regresa de una zona con transmisión activa de dengue desarrolla fiebre. Recuerda haber sido picado por mosquitos principalmente durante el día.',
  enunciado:'¿Qué dato del caso es consistente con el vector típico del dengue?',
  ops:[
    'El horario diurno de las picaduras, consistente con los hábitos de Aedes aegypti, el vector del dengue',
    'El horario diurno es más consistente con Anopheles, el vector de la malaria',
    'El horario de picadura no aporta ninguna información útil para orientar la sospecha diagnóstica',
    'Aedes aegypti pica exclusivamente de noche'
  ],
  ok:0,
  clave:'Aedes aegypti, vector del dengue, tiene hábitos de picadura predominantemente diurnos, a diferencia de Anopheles.',
  exp:'Aedes aegypti (y Aedes albopictus) transmite dengue, zika, chikungunya y fiebre amarilla urbana, con hábitos de picadura predominantemente DIURNOS, a diferencia de Anopheles (vector de la malaria), que es predominantemente nocturno. El antecedente de picaduras durante el día, en un viajero proveniente de zona con transmisión activa de dengue, es consistente con la exposición al vector típico de esta enfermedad.',
  no:{
    1:'Es al revés: el horario diurno es más consistente con Aedes aegypti (dengue), mientras que Anopheles (malaria) es predominantemente nocturno.',
    2:'El horario de picadura sí aporta información útil para orientar la sospecha diagnóstica, según los hábitos característicos de cada género de mosquito vector.',
    3:'Aedes aegypti pica predominantemente de DÍA, no exclusivamente de noche; es precisamente lo opuesto de lo que se afirma en esta opción.'
  },
  trampa:'Invertir los hábitos horarios de picadura de Aedes aegypti (diurno) y Anopheles (nocturno), un dato útil para orientar la sospecha diagnóstica.',
  obj:'Relacionar el horario de picadura con el vector típico del dengue (Aedes aegypti, diurno).',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Aedes aegypti','dengue','horario de picadura','Anopheles']
},
{
  id:'U8-P-Q38', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Garrapatas', sub:'Tiempo de adherencia y transmisión',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la remoción pronta de una garrapata adherida puede reducir significativamente el riesgo de transmisión de enfermedades como la enfermedad de Lyme?',
  ops:[
    'Las garrapatas transmiten el patógeno en segundos, igual que los mosquitos, así que la remoción pronta no cambia nada',
    'Las garrapatas típicamente requieren un tiempo de adherencia prolongado (con frecuencia muchas horas) antes de transmitir eficazmente al patógeno que portan',
    'Las garrapatas nunca transmiten enfermedades a los humanos',
    'La remoción de garrapatas siempre debe hacerse con las manos desnudas, sin ninguna precaución'
  ],
  ok:1,
  clave:'Las garrapatas requieren un tiempo de adherencia prolongado (horas) antes de transmitir eficazmente al patógeno, a diferencia de los mosquitos.',
  exp:'A diferencia de los mosquitos, que transmiten el patógeno en segundos durante la picadura, las garrapatas típicamente requieren un tiempo de adherencia prolongado (con frecuencia muchas horas) antes de transmitir eficazmente al patógeno que portan. Por eso la remoción pronta de una garrapata adherida, antes de que transcurra ese tiempo, puede reducir significativamente el riesgo de transmisión efectiva de enfermedades como la enfermedad de Lyme.',
  no:{
    0:'Es precisamente lo contrario: las garrapatas, a diferencia de los mosquitos, requieren un tiempo de adherencia prolongado antes de transmitir eficazmente, por lo que la remoción pronta sí es una medida de prevención efectiva.',
    2:'Las garrapatas sí transmiten enfermedades relevantes a los humanos, como la enfermedad de Lyme, la fiebre manchada de las Montañas Rocosas y la ehrlichiosis.',
    3:'La remoción de garrapatas debe hacerse con técnica adecuada (pinzas, tracción firme y constante), no con las manos desnudas sin precaución, para evitar dejar partes de la garrapata incrustadas o aumentar el riesgo de exposición.'
  },
  trampa:'Aplicar a las garrapatas la misma lógica de transmisión inmediata que a los mosquitos, sin reconocer que requieren un tiempo de adherencia prolongado.',
  obj:'Explicar por qué el tiempo de adherencia de una garrapata influye en el riesgo de transmisión de patógenos.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['garrapatas','tiempo de adherencia','enfermedad de Lyme','remoción de garrapatas']
},
{
  id:'U8-P-Q39', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Daño directo vs. vectorial', sub:'Distinción conceptual',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el daño DIRECTO y la transmisión VECTORIAL producidos por un artrópodo?',
  ops:[
    'El daño directo es producido por la propia picadura o veneno del artrópodo; la transmisión vectorial es cuando el artrópodo transporta a OTRO patógeno distinto de sí mismo',
    'Ambos términos son exactamente sinónimos',
    'Un artrópodo nunca puede producir ambos tipos de daño en el mismo episodio',
    'La transmisión vectorial es siempre menos grave que el daño directo'
  ],
  ok:0,
  clave:'El daño directo lo produce el propio artrópodo (picadura/veneno); la transmisión vectorial es cuando transporta a otro patógeno distinto.',
  exp:'El daño DIRECTO es el producido por la propia picadura, mordedura o veneno del artrópodo (reacciones locales, envenenamiento), sin que medie ningún otro patógeno. La transmisión VECTORIAL es cuando el artrópodo actúa como vehículo de transmisión de OTRO organismo patógeno distinto de sí mismo. Un mismo artrópodo puede, en el mismo episodio, producir ambos tipos de daño: la picadura en sí produce una reacción local (daño directo), independientemente de si además transmitió o no un patógeno.',
  no:{
    1:'Son conceptos claramente distintos: uno se refiere al daño causado por el propio artrópodo, el otro a su papel como transportador de otro patógeno.',
    2:'Un mismo artrópodo SÍ puede producir ambos tipos de daño en el mismo episodio de picadura: la reacción local directa y, además, la transmisión de un patógeno.',
    3:'La gravedad relativa no está determinada por si el daño es directo o vectorial; depende del artrópodo, el veneno o el patógeno específico involucrado en cada caso.'
  },
  trampa:'Tratar el daño directo y la transmisión vectorial como sinónimos, sin reconocer que son dos mecanismos distintos que pueden coexistir en el mismo episodio.',
  obj:'Distinguir el daño directo de la transmisión vectorial producidos por un artrópodo.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['daño directo','transmisión vectorial','artrópodos de importancia médica','mecanismo de daño']
},
{
  id:'U8-P-Q40', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Desparasitación masiva', sub:'Justificación de la estrategia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se justifica la desparasitación masiva (sin diagnóstico individual previo) en poblaciones con alta prevalencia de geohelmintiasis?',
  ops:[
    'Porque el diagnóstico y tratamiento individual caso por caso es poco costo-efectivo cuando la prevalencia comunitaria es alta, y reducir la carga parasitaria general reduce también la contaminación ambiental',
    'Porque la desparasitación masiva nunca tiene ningún fundamento científico',
    'Porque siempre es preferible el diagnóstico individual, incluso con alta prevalencia comunitaria',
    'La desparasitación masiva solo se usa para malaria, nunca para geohelmintos'
  ],
  ok:0,
  clave:'Con alta prevalencia comunitaria, el diagnóstico individual es poco costo-efectivo; la desparasitación masiva reduce también la contaminación ambiental general.',
  exp:'La desparasitación masiva se justifica porque, en parasitosis de transmisión fecal-oral o por penetración cutánea desde suelo contaminado con alta prevalencia comunitaria, el diagnóstico y tratamiento individual caso por caso es poco costo-efectivo, y porque reducir la carga parasitaria general de la comunidad reduce también la contaminación ambiental (menos huevos eliminados al suelo), beneficiando indirectamente incluso a quienes no participaron directamente en la desparasitación.',
  no:{
    1:'La desparasitación masiva sí tiene un fundamento epidemiológico y de costo-efectividad bien establecido en contextos de alta prevalencia comunitaria.',
    2:'Con alta prevalencia comunitaria, el diagnóstico individual caso por caso es precisamente poco costo-efectivo, lo que justifica la estrategia poblacional en su lugar.',
    3:'La desparasitación masiva se usa principalmente para geohelmintos (Ascaris, Trichuris, uncinarias) y esquistosomiasis, no para malaria, que tiene estrategias de control distintas.'
  },
  trampa:'No reconocer la justificación de costo-efectividad y de reducción de contaminación ambiental que sostiene la estrategia de desparasitación masiva.',
  obj:'Explicar la justificación de la desparasitación masiva en poblaciones con alta prevalencia de geohelmintiasis.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['desparasitación masiva','geohelmintiasis','costo-efectividad','contaminación ambiental']
},
{
  id:'U8-P-Q41', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Saneamiento ambiental', sub:'Impacto a largo plazo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una comunidad recibe desparasitación masiva anual contra geohelmintos, pero sin ninguna mejora en el acceso a agua potable ni en la disposición de excretas, y la prevalencia de la parasitosis vuelve a niveles altos pocos meses después de cada campaña.',
  enunciado:'¿Qué explica esta reinfección rápida y repetida pese a la desparasitación regular?',
  ops:[
    'La desparasitación masiva sin mejoras simultáneas en el saneamiento ambiental no interrumpe el ciclo del parásito en el punto de contacto con el ambiente contaminado, que sigue intacto',
    'La desparasitación masiva nunca es efectiva bajo ninguna circunstancia',
    'El saneamiento ambiental no tiene ninguna relación con la transmisión de geohelmintos',
    'Este patrón de reinfección es imposible si se hizo la desparasitación correctamente'
  ],
  ok:0,
  clave:'Sin mejora del saneamiento ambiental, el ciclo de transmisión sigue intacto y la reinfección tras la desparasitación es esperable.',
  exp:'La desparasitación masiva, sin mejoras simultáneas en el saneamiento (agua potable, disposición de excretas), tiende a producir reinfecciones repetidas relativamente rápidas, porque el ambiente contaminado que originó la infección sigue intacto -el tratamiento elimina a los parásitos ya presentes, pero no evita la reexposición al mismo ambiente contaminado. Por eso las estrategias más efectivas combinan tratamiento y saneamiento, no dependen de una sola intervención.',
  no:{
    1:'La desparasitación masiva sí es efectiva como parte de una estrategia combinada; el problema en este caso es la ausencia de la otra intervención necesaria (saneamiento), no que el tratamiento en sí no funcione.',
    2:'El saneamiento ambiental tiene una relación directa y central con la transmisión de geohelmintos, precisamente porque estos se transmiten por contaminación fecal-oral o cutánea del ambiente.',
    3:'Este patrón de reinfección rápida es precisamente lo esperable cuando la desparasitación no se acompaña de mejoras en el saneamiento ambiental, un fenómeno bien documentado.'
  },
  trampa:'Atribuir la reinfección a un fallo de la desparasitación en sí, sin reconocer que el problema real es la ausencia de intervención sobre el ambiente contaminado que sostiene la transmisión.',
  obj:'Explicar por qué la desparasitación masiva sin saneamiento ambiental produce reinfecciones repetidas.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['saneamiento ambiental','reinfección','desparasitación masiva','ciclo de transmisión']
},
{
  id:'U8-P-Q42', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Malaria', sub:'Definición de esquizonte',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es un esquizonte en el ciclo de vida de Plasmodium?',
  ops:[
    'La forma infectante que inocula el mosquito',
    'La forma con múltiples núcleos, resultado de la división múltiple del parásito dentro del eritrocito, cuya ruptura libera nuevos merozoítos',
    'La forma latente hepática exclusiva de todas las especies de Plasmodium',
    'Un tipo de mosquito vector de la malaria'
  ],
  ok:1,
  clave:'El esquizonte es la forma con múltiples núcleos dentro del eritrocito, cuya ruptura libera nuevos merozoítos.',
  exp:'Dentro del eritrocito, el parásito se desarrolla progresivamente: trofozoíto joven, trofozoíto maduro, y esquizonte -la forma con múltiples núcleos, resultado de la división múltiple del parásito dentro del eritrocito-, hasta que el eritrocito se rompe, liberando nuevos merozoítos que invaden más eritrocitos, repitiendo el ciclo. Es precisamente esta ruptura sincronizada la que produce los episodios característicos de fiebre.',
  no:{
    0:'La forma infectante que inocula el mosquito es el esporozoíto, no el esquizonte, que es una forma posterior del ciclo eritrocítico.',
    2:'El hipnozoíto es la forma latente hepática, y es exclusiva de Plasmodium vivax y Plasmodium ovale, no de todas las especies ni corresponde al esquizonte.',
    3:'El esquizonte es una forma del parásito dentro del ciclo, no un tipo de mosquito vector.'
  },
  trampa:'Confundir el esquizonte con otras formas del ciclo de Plasmodium (esporozoíto, hipnozoíto, merozoíto) o con el mosquito vector.',
  obj:'Definir correctamente el esquizonte dentro del ciclo eritrocítico de Plasmodium.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['esquizonte','ciclo eritrocítico','Plasmodium','merozoíto']
},
{
  id:'U8-P-Q43', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Cestodos', sub:'Proglótides grávidos',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumplen los proglótides grávidos de un cestodo?',
  ops:[
    'Se desprenden y salen con las heces, cargados de huevos, completando la eliminación de huevos al ambiente',
    'Se fijan a la pared intestinal, igual que el escólex',
    'Son la forma infectante que penetra la piel',
    'Los proglótides grávidos no tienen ninguna función reproductiva'
  ],
  ok:0,
  clave:'Los proglótides grávidos, cargados de huevos, se desprenden y salen con las heces, completando la eliminación de huevos al ambiente.',
  exp:'Los proglótides son los segmentos reproductivos del estróbilo de un cestodo, que se forman continuamente cerca del escólex y maduran progresivamente a medida que se alejan de él. Los proglótides grávidos (los más distales, cargados de huevos) se desprenden y salen con las heces, completando así la eliminación de huevos al ambiente, sin necesidad de que el gusano entero se desprenda.',
  no:{
    1:'La fijación a la pared intestinal es función del escólex, no de los proglótides grávidos, que son los segmentos reproductivos distales.',
    2:'Los proglótides grávidos no son la forma infectante que penetra la piel; esa función corresponde, en otros parásitos, a formas como las larvas filariformes de las uncinarias o Strongyloides.',
    3:'Los proglótides grávidos sí tienen una función reproductiva central: contienen los huevos que se eliminan al ambiente para continuar el ciclo de vida del parásito.'
  },
  trampa:'Confundir la función de los proglótides grávidos con la del escólex o con formas infectantes de otros grupos de parásitos.',
  obj:'Describir la función de los proglótides grávidos en la eliminación de huevos de un cestodo.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['proglótides grávidos','eliminación de huevos','cestodos','estróbilo']
},
{
  id:'U8-P-Q44', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Vectores biológicos', sub:'Ejemplo del mosquito Anopheles',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el mosquito Anopheles se clasifica como vector BIOLÓGICO de Plasmodium, y no como vector mecánico?',
  ops:[
    'Porque Plasmodium se desarrolla y realiza parte de su ciclo (incluida reproducción sexual) dentro del mosquito, no solo es transportado por él',
    'Porque Anopheles solo transporta al parásito de forma pasiva, sin ningún desarrollo dentro de él',
    'Porque Anopheles nunca pica a humanos',
    'La clasificación de vector biológico no aplica a ningún mosquito'
  ],
  ok:0,
  clave:'Plasmodium se desarrolla y realiza parte de su ciclo sexual dentro del mosquito Anopheles, lo que lo clasifica como vector biológico.',
  exp:'Anopheles es un vector biológico de Plasmodium porque el parásito se desarrolla y realiza parte de su ciclo de vida (incluyendo el ciclo sexual, o esporogónico) dentro del mosquito, no solo es transportado de forma pasiva -esto lo distingue de un vector mecánico, que simplemente transportaría al parásito sin que ocurra ningún desarrollo dentro de él. Esta relación biológica estrecha es la que hace posible que el mosquito, tras un periodo de incubación extrínseca, se vuelva infectante para picar a un nuevo hospedero.',
  no:{
    1:'Es precisamente lo contrario de lo que define a Anopheles como vector biológico: el parásito SÍ se desarrolla activamente dentro de él, no solo es transportado pasivamente.',
    2:'Anopheles sí pica a humanos; de hecho, es precisamente durante esa picadura que transmite los esporozoítos infectantes tras completar el desarrollo del parásito dentro de él.',
    3:'La clasificación de vector biológico sí aplica a Anopheles (y a otros mosquitos con relaciones similares con otros patógenos), precisamente por el desarrollo del parásito dentro de él.'
  },
  trampa:'No reconocer el desarrollo activo del parásito dentro del mosquito como el criterio que define a Anopheles como vector biológico, no mecánico.',
  obj:'Explicar por qué Anopheles se clasifica como vector biológico de Plasmodium.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['vector biológico','Anopheles','Plasmodium','desarrollo del parásito en el vector']
},
{
  id:'U8-P-Q45', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Toxoplasma gondii', sub:'Reactivación en inmunosuprimidos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con VIH avanzado desarrolla una lesión cerebral con efecto de masa, y se sospecha reactivación de una infección latente.',
  enunciado:'¿Qué parásito es una de las causas más frecuentes de lesión cerebral con efecto de masa en este contexto de inmunosupresión avanzada?',
  ops:['Entamoeba histolytica', 'Toxoplasma gondii, por reactivación de quistes tisulares latentes en el sistema nervioso central', 'Enterobius vermicularis', 'Trichuris trichiura'],
  ok:1,
  clave:'Toxoplasma gondii, por reactivación de quistes latentes, es una causa frecuente de lesión cerebral con efecto de masa en VIH avanzado.',
  exp:'En el paciente inmunosuprimido (especialmente VIH avanzado), los quistes tisulares latentes de Toxoplasma gondii (formados tras la infección primaria, que suele ser asintomática en el inmunocompetente) pueden reactivarse y causar encefalitis toxoplásmica, una de las causas más frecuentes de lesión cerebral con efecto de masa en este grupo de pacientes -exactamente el contexto clínico descrito en el caso.',
  no:{
    0:'Entamoeba histolytica se disemina principalmente hacia el hígado (absceso hepático), no es una causa característica de lesión cerebral con efecto de masa en inmunosuprimidos.',
    2:'Enterobius vermicularis no tiene relevancia como causa de lesión cerebral ni se relaciona con la inmunosupresión de esta forma.',
    3:'Trichuris trichiura es un nematodo intestinal sin relevancia como causa de lesión cerebral en el paciente inmunosuprimido.'
  },
  trampa:'No reconocer a Toxoplasma gondii como la causa parasitaria más característica de lesión cerebral con efecto de masa en el paciente con VIH avanzado.',
  obj:'Reconocer la encefalitis toxoplásmica como causa frecuente de lesión cerebral en el paciente inmunosuprimido.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Toxoplasma gondii','encefalitis toxoplásmica','VIH avanzado','reactivación de quistes latentes']
},
{
  id:'U8-P-Q46', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Trematodos', sub:'Cercaria',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la cercaria en el ciclo de vida de un trematodo?',
  ops:[
    'La forma adulta que vive en el hospedero definitivo',
    'La forma infectante liberada por el caracol hacia el agua',
    'Un tipo de huevo no embrionado',
    'La forma de resistencia de los protozoos intestinales'
  ],
  ok:1,
  clave:'La cercaria es la forma infectante de los trematodos, liberada por el caracol hospedero intermediario hacia el agua.',
  exp:'La cercaria es la forma infectante producida dentro del caracol de agua dulce (hospedero intermediario) tras la multiplicación asexual del trematodo, y es liberada por el caracol hacia el agua, desde donde puede infectar a un nuevo hospedero (por penetración cutánea, como en Schistosoma, o siendo ingerida adherida a vegetales, como metacercaria enquistada en el caso de Fasciola).',
  no:{
    0:'La forma adulta que vive en el hospedero definitivo es una etapa posterior del ciclo, distinta de la cercaria, que es la forma infectante liberada por el caracol.',
    2:'La cercaria no es un huevo; es una forma larvaria móvil, resultado de la multiplicación asexual dentro del caracol.',
    3:'El quiste es la forma de resistencia de los protozoos intestinales, un concepto distinto de la cercaria, que es específica de los trematodos.'
  },
  trampa:'Confundir la cercaria con otras formas del ciclo de vida parasitario (forma adulta, huevo, quiste de protozoos).',
  obj:'Definir la cercaria como la forma infectante de los trematodos liberada por el caracol.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['cercaria','trematodos','forma infectante','caracol de agua dulce']
},
{
  id:'U8-P-Q47', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Enfermedad de Chagas', sub:'Mecanismo de transmisión',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se transmite realmente Trypanosoma cruzi a través del insecto triatomino, más allá de la simple picadura?',
  ops:[
    'El insecto inyecta directamente al parásito con su picadura, como un mosquito',
    'El parásito se transmite por la contaminación de la herida de la picadura (o de mucosas) con las heces del insecto, que defeca cerca del sitio mientras se alimenta',
    'La transmisión ocurre exclusivamente por vía oral, al ingerir al insecto completo',
    'Trypanosoma cruzi no se transmite por ningún insecto'
  ],
  ok:1,
  clave:'La transmisión de Chagas ocurre por contaminación de la herida de la picadura con las heces del triatomino, no por inyección directa como en un mosquito.',
  exp:'Trypanosoma cruzi se transmite por la picadura del insecto triatomino, pero el mecanismo real es la contaminación de la herida de la picadura (o de mucosas, al rascarse) con las HECES del insecto, que defeca cerca del sitio de la picadura mientras se alimenta -a diferencia de un mosquito, que inyecta directamente al parásito con su saliva durante la picadura misma. Esta diferencia de mecanismo es relevante para entender por qué el rascado tras la picadura del triatomino facilita la transmisión, al introducir las heces contaminadas en la piel lesionada.',
  no:{
    0:'A diferencia de un mosquito, el triatomino no inyecta directamente al parásito con la picadura; la transmisión ocurre por contaminación fecal de la herida.',
    2:'La transmisión no ocurre por ingerir al insecto completo; el mecanismo habitual es la contaminación cutánea o mucosa con las heces del insecto tras la picadura.',
    3:'Trypanosoma cruzi sí se transmite por un insecto vector, el triatomino, aunque por un mecanismo distinto al de la inyección directa de otros vectores como el mosquito.'
  },
  trampa:'Asumir que el triatomino transmite el parásito de la misma forma que un mosquito (inyección directa con la picadura), sin reconocer el mecanismo específico de contaminación fecal.',
  obj:'Explicar el mecanismo de transmisión de Trypanosoma cruzi por contaminación fecal del triatomino.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Trypanosoma cruzi','triatomino','mecanismo de transmisión','contaminación fecal']
},
{
  id:'U8-P-Q48', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Control de parasitosis', sub:'Prevención de cisticercosis',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué medida de control es más directamente efectiva para reducir el riesgo de cisticercosis en una comunidad, más allá de tratar a los humanos ya infectados con teniasis?',
  ops:[
    'Ninguna medida adicional es necesaria, basta con tratar la teniasis en humanos',
    'Control veterinario de la cadena alimentaria (inspección de carne de cerdo para detectar cisticercos, cocción adecuada) y mejora del saneamiento para reducir la contaminación fecal del ambiente donde pastan los cerdos',
    'Control exclusivo de mosquitos',
    'Vacunación humana contra Taenia solium, ampliamente disponible'
  ],
  ok:1,
  clave:'El control veterinario de la cadena alimentaria y el saneamiento ambiental son las medidas directamente efectivas para reducir el riesgo de cisticercosis.',
  exp:'Para reducir el riesgo de cisticercosis, se requiere control veterinario de la cadena alimentaria (inspección de carne de cerdo para detectar cisticercos, cocción adecuada de la carne) y mejora del saneamiento ambiental, para reducir la contaminación fecal humana del ambiente donde pastan los cerdos (que es como el cerdo se infecta con huevos de Taenia solium, cerrando el ciclo). Tratar solo la teniasis en humanos no es suficiente, porque no interrumpe completamente el ciclo entre humano y cerdo.',
  no:{
    0:'Tratar solo la teniasis humana no es suficiente; el ciclo completo requiere intervenir también en la cadena alimentaria y el saneamiento ambiental que conecta al humano con el cerdo.',
    2:'El control de mosquitos no tiene relación con el ciclo de Taenia solium, que involucra al cerdo como hospedero intermediario, no a un vector artrópodo.',
    3:'No existe una vacuna humana ampliamente disponible contra Taenia solium; el control se basa en medidas de saneamiento, control veterinario y tratamiento de casos, no en vacunación.'
  },
  trampa:'Asumir que tratar solo a los humanos con teniasis es suficiente para controlar la cisticercosis, sin considerar el ciclo completo que involucra al cerdo y al ambiente.',
  obj:'Explicar las medidas de control efectivas para reducir el riesgo de cisticercosis en una comunidad.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['control de cisticercosis','cadena alimentaria','saneamiento ambiental','ciclo humano-cerdo']
},
{
  id:'U8-P-Q49', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Protozoos tisulares', sub:'Taquizoíto',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa el taquizoíto en la infección por Toxoplasma gondii?',
  ops:[
    'La forma de multiplicación rápida y activa, responsable de la diseminación aguda, incluida la transmisión transplacentaria',
    'La forma quística latente que persiste de por vida sin replicarse',
    'El hospedero definitivo de Toxoplasma',
    'Una forma exclusiva de Plasmodium, no de Toxoplasma'
  ],
  ok:0,
  clave:'El taquizoíto es la forma de multiplicación rápida y activa de Toxoplasma, responsable de la diseminación aguda, incluida la vía transplacentaria.',
  exp:'El taquizoíto es la forma de multiplicación rápida y activa de Toxoplasma gondii, responsable de la diseminación durante la infección aguda -incluyendo la capacidad de cruzar la placenta si la primoinfección materna ocurre durante el embarazo. Es distinto del quiste tisular (la forma latente, de multiplicación lenta, que persiste de por vida en tejidos como el sistema nervioso central y el músculo, y que puede reactivarse en el inmunosuprimido).',
  no:{
    1:'Esa descripción corresponde al quiste tisular, no al taquizoíto, que es precisamente la forma de multiplicación RÁPIDA, no la latente.',
    2:'El gato es el hospedero definitivo de Toxoplasma (donde ocurre la reproducción sexual); el taquizoíto es una forma del parásito, no un hospedero.',
    3:'El taquizoíto es una forma específica de Toxoplasma gondii, no de Plasmodium, que tiene su propia terminología de ciclo de vida distinta (esporozoíto, merozoíto, esquizonte).'
  },
  trampa:'Confundir el taquizoíto (forma activa de multiplicación rápida) con el quiste tisular (forma latente), o con terminología de otros parásitos.',
  obj:'Definir el taquizoíto como la forma de multiplicación rápida y activa de Toxoplasma gondii.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['taquizoíto','Toxoplasma gondii','forma activa','quiste tisular']
},
{
  id:'U8-P-Q50', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Trematodos', sub:'Esquistosomiasis y fibrosis',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mecanismo explica el daño tisular crónico (fibrosis, hipertensión portal) en la esquistosomiasis intestinal/hepática?',
  ops:[
    'El gusano adulto destruye directamente el tejido hepático al alimentarse',
    'Los huevos depositados por las hembras deben atravesar la pared del intestino para salir con las heces, y este proceso, junto con los huevos que quedan atrapados, produce una reacción inflamatoria granulomatosa crónica',
    'La esquistosomiasis nunca produce daño hepático crónico',
    'El daño se debe exclusivamente a la penetración cutánea inicial de la cercaria'
  ],
  ok:1,
  clave:'El paso de los huevos a través de la pared del órgano, y los que quedan atrapados, producen la reacción granulomatosa crónica responsable del daño tisular.',
  exp:'Las hembras adultas de Schistosoma depositan huevos que deben atravesar la pared del intestino (o de la vejiga, según la especie) para salir con las heces o la orina, completando el ciclo. Ese paso de los huevos a través de la pared del órgano -y los huevos que no logran atravesarla y quedan atrapados en el tejido- es precisamente lo que produce buena parte del daño tisular crónico: fibrosis, hematuria en la forma urinaria, e hipertensión portal en la forma intestinal/hepática, por la reacción inflamatoria granulomatosa que el sistema inmune monta alrededor de los huevos atrapados.',
  no:{
    0:'El gusano adulto en sí no es la causa principal del daño tisular crónico; el mecanismo central es la reacción inflamatoria alrededor de los huevos, no la alimentación del gusano adulto.',
    2:'La esquistosomiasis sí produce daño hepático crónico significativo, incluyendo hipertensión portal, precisamente por el mecanismo de los huevos atrapados y la reacción granulomatosa.',
    3:'La penetración cutánea inicial es solo el mecanismo de entrada; el daño tisular crónico se debe principalmente al paso y atrapamiento de los huevos años después, no a esa penetración inicial.'
  },
  trampa:'Atribuir el daño crónico de la esquistosomiasis al gusano adulto o a la penetración cutánea inicial, en vez de al mecanismo real: la reacción inflamatoria granulomatosa alrededor de los huevos atrapados en el tejido.',
  obj:'Explicar el mecanismo de daño tisular crónico por reacción granulomatosa a los huevos de Schistosoma.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['esquistosomiasis','reacción granulomatosa','fibrosis','hipertensión portal']
}

]);
