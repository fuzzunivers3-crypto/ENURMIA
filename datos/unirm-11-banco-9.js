/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 11, TANDA DE IMAGENOLOGÍA Y
   MEDICINA NUCLEAR (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U11-IMG-. Cubre los primeros 4 temas: principios de
   radiologia, radiografia de torax, radiografia de abdomen, y
   ecografia general (Q01-Q28).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ============= IMAGENOLOGÍA Y MEDICINA NUCLEAR ============= */
{
  id:'U11-IMG-Q01', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Principios de radiología', sub:'Base de la formación de la imagen radiológica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se basa la formación de la imagen en una radiografía convencional?',
  ops:[
    'En que los rayos X son absorbidos en distinto grado según la densidad y composición del tejido que atraviesan', 'En que todos los tejidos del cuerpo absorben exactamente la misma cantidad de radiación, sin ninguna diferencia', 'En la emisión de ondas sonoras de alta frecuencia reflejadas por las distintas interfases de tejido', 'La formación de la imagen radiológica no depende de ningún principio físico específico identificable'],
  ok:0,
  clave:'En que los rayos X son absorbidos en distinto grado según la densidad y composición del tejido que atraviesan.',
  exp:'La formación de la imagen radiológica depende de que los rayos X, al atravesar el cuerpo, sean absorbidos en distinto grado según la densidad y composición del tejido, generando el contraste que se traduce en la imagen final.',
  no:{
    1:'Es precisamente lo contrario: los distintos tejidos absorben la radiación de forma DIFERENTE, generando el contraste de la imagen.',
    2:'Esta descripción corresponde al ultrasonido, no a la formación de la imagen radiológica convencional.',
    3:'La formación de la imagen radiológica sí se basa en un principio físico específico: la absorción diferencial de rayos X.'
  },
  trampa:'Confundir el principio físico de la radiografía (absorción diferencial de rayos X) con el del ultrasonido (reflexión de ondas sonoras).',
  obj:'Explicar el principio básico de la formación de la imagen radiológica.',
  ref:'Novelline, Fundamentos de Radiología, cap. 1.',
  tags:['formación de la imagen radiológica','absorción diferencial de rayos X']
},
{
  id:'U11-IMG-Q02', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Principios de radiología', sub:'Las cinco densidades radiológicas básicas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son las cinco densidades radiológicas clásicas, de mayor a menor capacidad de absorción?',
  ops:[
    'Metal, hueso, tejido blando, grasa, y aire', 'Únicamente hueso y aire, sin ninguna otra densidad radiológica intermedia reconocida clínicamente', 'Solo tejido blando y metal, sin ninguna relación con hueso, grasa o aire', 'No existe ninguna clasificación reconocida de densidades radiológicas en la práctica clínica'],
  ok:0,
  clave:'Metal, hueso, tejido blando, grasa, y aire.',
  exp:'Las densidades radiológicas clásicas, de mayor a menor capacidad de absorción, son: metal (la más densa), hueso, tejido blando, grasa, y aire (la menos densa).',
  no:{
    1:'Existen densidades intermedias reconocidas (tejido blando, grasa) entre el hueso y el aire.',
    2:'Existen densidades adicionales reconocidas (hueso, grasa, aire) más allá de solo tejido blando y metal.',
    3:'Sí existe una clasificación clásica y bien reconocida de cinco densidades radiológicas en la práctica clínica.'
  },
  trampa:'Reducir las densidades radiológicas a solo dos categorías, sin reconocer las cinco densidades clásicas completas.',
  obj:'Identificar las cinco densidades radiológicas clásicas.',
  ref:'Novelline, Fundamentos de Radiología, cap. 1.',
  tags:['densidades radiológicas','cinco densidades clásicas']
},
{
  id:'U11-IMG-Q03', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Principios de radiología', sub:'Qué significa el principio ALARA',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué establece el principio ALARA respecto al uso de estudios con radiación ionizante?',
  ops:[
    'Que cada estudio debe justificarse por una necesidad clínica real, y la dosis de radiación debe minimizarse tanto como sea posible sin comprometer la calidad diagnóstica', 'Que los estudios con radiación ionizante deben solicitarse de forma rutinaria e indiscriminada, sin ninguna justificación clínica específica', 'El principio ALARA establece que la dosis de radiación utilizada nunca debe considerarse al solicitar un estudio de imagen', 'El principio ALARA no tiene ninguna relación real con la justificación clínica de un estudio de imagen'],
  ok:0,
  clave:'Que cada estudio debe justificarse por una necesidad clínica real, y la dosis de radiación debe minimizarse tanto como sea posible sin comprometer la calidad diagnóstica.',
  exp:'El principio ALARA es el principio rector que guía el uso de estudios con radiación ionizante: cada estudio debe justificarse por una necesidad clínica real, y la dosis debe minimizarse tanto como sea posible sin comprometer la calidad diagnóstica necesaria.',
  no:{
    1:'Es precisamente lo contrario: ALARA exige justificación clínica específica, no un uso rutinario e indiscriminado.',
    2:'Es precisamente lo contrario: ALARA exige minimizar la dosis de radiación considerada en cada estudio solicitado.',
    3:'El principio ALARA sí tiene una relación directa y central con la justificación clínica de cada estudio con radiación.'
  },
  trampa:'Asumir que el principio ALARA permite el uso indiscriminado de estudios con radiación, sin considerar la dosis ni la justificación clínica.',
  obj:'Explicar qué establece el principio ALARA respecto al uso de estudios con radiación ionizante.',
  ref:'Novelline, Fundamentos de Radiología, cap. 1.',
  tags:['principio ALARA','justificación clínica y dosis mínima']
},
{
  id:'U11-IMG-Q04', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Principios de radiología', sub:'Reconocimiento de una densidad anormal',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En una radiografía se observa densidad de tejido blando en una zona donde normalmente se esperaría densidad de aire.',
  enunciado:'¿Qué representa este hallazgo, según lo visto en este tema?',
  ops:[
    'El tipo de hallazgo que orienta hacia patología, al no corresponder con la densidad esperada para esa zona anatómica', 'Este hallazgo siempre representa una variante normal, sin ninguna relación real con una posible patología', 'La discordancia entre la densidad observada y la esperada nunca tiene ninguna relevancia clínica en radiología', 'Este hallazgo no puede interpretarse de ninguna forma sin conocer las cinco densidades radiológicas básicas'],
  ok:0,
  clave:'El tipo de hallazgo que orienta hacia patología, al no corresponder con la densidad esperada para esa zona anatómica.',
  exp:'Reconocer una densidad anormal en un sitio donde se esperaría otra densidad distinta es precisamente el tipo de hallazgo que orienta hacia patología, un principio básico que se aplica en cada tema específico de radiografía de este bloque.',
  no:{
    1:'Es precisamente lo contrario: esta discordancia SÍ orienta hacia una posible patología, no es una variante normal esperada.',
    2:'Esta discordancia sí tiene una relevancia clínica real, siendo la base del razonamiento diagnóstico en radiología.',
    3:'Este hallazgo sí puede interpretarse aplicando el conocimiento de las densidades radiológicas básicas ya vistas.'
  },
  trampa:'Interpretar una densidad anormal en una zona específica como una variante normal, sin reconocerla como señal orientadora de patología.',
  obj:'Aplicar el reconocimiento de una densidad radiológica anormal como hallazgo orientador de patología.',
  ref:'Novelline, Fundamentos de Radiología, cap. 1.',
  tags:['densidades radiológicas','reconocimiento de densidad anormal']
},
{
  id:'U11-IMG-Q05', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Principios de radiología', sub:'Poblaciones particularmente relevantes para el principio ALARA',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué poblaciones es particularmente relevante aplicar el principio ALARA de forma estricta?',
  ops:[
    'Niños y gestantes, por su mayor vulnerabilidad a los efectos acumulativos de la radiación', 'El principio ALARA tiene exactamente la misma relevancia en cualquier población, sin ninguna diferencia según edad o condición', 'Únicamente en adultos mayores, sin ninguna relevancia particular en niños o gestantes', 'El principio ALARA nunca tiene ninguna relevancia particular en ninguna población específica identificable'],
  ok:0,
  clave:'Niños y gestantes, por su mayor vulnerabilidad a los efectos acumulativos de la radiación.',
  exp:'El principio ALARA es particularmente relevante en poblaciones donde se busca minimizar la exposición a radiación, como gestantes y niños, por su mayor vulnerabilidad a los efectos acumulativos de la radiación ionizante.',
  no:{
    1:'Sí existe una relevancia particular mayor en ciertas poblaciones (niños, gestantes) más vulnerables a la radiación.',
    2:'Los adultos mayores no son la población de mayor relevancia particular; niños y gestantes lo son específicamente.',
    3:'El principio ALARA sí tiene una relevancia particular reconocida en poblaciones más vulnerables como niños y gestantes.'
  },
  trampa:'Asumir que el principio ALARA se aplica de forma uniforme sin considerar la mayor vulnerabilidad de ciertas poblaciones específicas.',
  obj:'Identificar las poblaciones donde es particularmente relevante aplicar el principio ALARA de forma estricta.',
  ref:'Novelline, Fundamentos de Radiología, cap. 1.',
  tags:['principio ALARA','poblaciones vulnerables']
},
{
  id:'U11-IMG-Q06', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Principios de radiología', sub:'Consecuencia de la ausencia de absorción diferencial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurriría con una radiografía si no existiera absorción diferencial entre los distintos tejidos del cuerpo?',
  ops:[
    'Sería una imagen uniforme sin ningún contraste interpretable, sin importar cuántas estructuras distintas atravesara el haz de rayos X', 'La radiografía seguiría mostrando exactamente el mismo contraste e interpretabilidad, sin ninguna diferencia real', 'La ausencia de absorción diferencial mejoraría significativamente la calidad diagnóstica de la imagen obtenida', 'Este escenario no tiene ninguna relación real con la interpretabilidad final de una imagen radiológica'],
  ok:0,
  clave:'Sería una imagen uniforme sin ningún contraste interpretable, sin importar cuántas estructuras distintas atravesara el haz de rayos X.',
  exp:'Sin esta diferencia de absorción entre tejidos, una radiografía sería una imagen uniforme sin ningún contraste interpretable, sin importar cuántas estructuras distintas atravesara el haz de rayos X.',
  no:{
    1:'Es precisamente lo contrario: sin absorción diferencial, la imagen perdería todo el contraste que la hace interpretable.',
    2:'La ausencia de absorción diferencial EMPEORARÍA, no mejoraría, la calidad diagnóstica de la imagen.',
    3:'Este escenario sí tiene una relación directa con la interpretabilidad final de la imagen radiológica obtenida.'
  },
  trampa:'Subestimar la importancia de la absorción diferencial de rayos X como base indispensable para la interpretabilidad de una radiografía.',
  obj:'Explicar la consecuencia de la ausencia de absorción diferencial sobre la interpretabilidad de una radiografía.',
  ref:'Novelline, Fundamentos de Radiología, cap. 1.',
  tags:['formación de la imagen radiológica','consecuencia de ausencia de contraste']
},
{
  id:'U11-IMG-Q07', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Principios de radiología', sub:'Conexión con el uso apropiado de recursos diagnósticos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué principio ya visto en Obstetricia I se conecta directamente el principio ALARA de este tema?',
  ops:[
    'El uso apropiado de recursos diagnósticos, no repetir ecografías sin indicación clara, aplicado ahora a estudios con radiación ionizante', 'El principio ALARA no tiene ninguna relación real con ningún concepto ya visto en Obstetricia I sobre uso de recursos', 'El signo de Blumberg ya visto en Semiología Quirúrgica, sin ninguna relación real con el principio ALARA', 'La escala de Glasgow ya vista en Neurología, sin ninguna relación real con el principio ALARA de este tema'],
  ok:0,
  clave:'El uso apropiado de recursos diagnósticos, no repetir ecografías sin indicación clara, aplicado ahora a estudios con radiación ionizante.',
  exp:'Este principio retoma directamente la lógica ya vista sobre uso apropiado de recursos diagnósticos en Obstetricia I (no repetir ecografías sin indicación clara): cada estudio debe responder a una necesidad clínica real.',
  no:{
    1:'Sí existe una conexión conceptual directa con el uso apropiado de recursos diagnósticos ya visto en Obstetricia I.',
    2:'El signo de Blumberg es un hallazgo semiológico distinto, sin relación conceptual con el principio ALARA.',
    3:'La escala de Glasgow es una herramienta de evaluación neurológica distinta, sin relación conceptual con el principio ALARA.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre el principio ALARA y el uso apropiado de recursos diagnósticos ya visto en Obstetricia I.',
  obj:'Identificar la conexión entre el principio ALARA y el uso apropiado de recursos diagnósticos ya visto en Obstetricia I.',
  ref:'Novelline, Fundamentos de Radiología, cap. 1.',
  tags:['principio ALARA','conexión con uso apropiado de recursos']
},
{
  id:'U11-IMG-Q08', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de tórax', sub:'Por qué seguir un orden reproducible en la lectura',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué seguir siempre el mismo orden reproducible al leer una radiografía de tórax reduce el riesgo de errores diagnósticos?',
  ops:[
    'Porque reduce el riesgo de pasar por alto un hallazgo relevante por una revisión desorganizada', 'Seguir un orden reproducible nunca tiene ninguna relación real con el riesgo de pasar por alto hallazgos relevantes', 'Una revisión desorganizada siempre detecta exactamente los mismos hallazgos que una lectura sistemática ordenada', 'El orden de lectura de una radiografía de tórax nunca influye realmente en la calidad del diagnóstico obtenido'],
  ok:0,
  clave:'Porque reduce el riesgo de pasar por alto un hallazgo relevante por una revisión desorganizada.',
  exp:'Seguir siempre el mismo orden, sin saltarse pasos, reduce el riesgo de pasar por alto un hallazgo relevante por una revisión desorganizada, retomando la lógica ya vista sobre presentación estructurada de información.',
  no:{
    1:'Seguir un orden reproducible sí tiene una relación directa con reducir el riesgo de pasar por alto hallazgos relevantes.',
    2:'Es precisamente lo contrario: una revisión desorganizada tiene MAYOR riesgo de pasar por alto hallazgos que una sistemática.',
    3:'El orden de lectura sí influye en la calidad del diagnóstico, siendo la base de la lectura sistemática recomendada.'
  },
  trampa:'Subestimar la importancia de un orden sistemático de lectura, asumiendo que una revisión desorganizada detecta los mismos hallazgos.',
  obj:'Explicar por qué la lectura sistemática de la radiografía de tórax reduce el riesgo de errores diagnósticos.',
  ref:'Novelline, Fundamentos de Radiología, cap. 3.',
  tags:['lectura sistemática de radiografía de tórax','reducción de errores']
},
{
  id:'U11-IMG-Q09', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de tórax', sub:'Riesgo de enfocarse solo en el hallazgo más llamativo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudiante, al revisar una radiografía de tórax, se enfoca exclusivamente en un hallazgo llamativo y evidente, sin completar la revisión sistemática del resto de la imagen.',
  enunciado:'¿Qué riesgo conlleva esta conducta, según lo visto en este tema?',
  ops:[
    'Pasar por alto un segundo hallazgo relevante que, sin la disciplina de revisar sistemáticamente cada estructura, queda sin detectar', 'Esta conducta no conlleva ningún riesgo real, ya que el hallazgo más llamativo siempre es el único relevante en cualquier caso', 'Enfocarse en el hallazgo más llamativo siempre garantiza una revisión completa y suficiente de toda la radiografía', 'No existe ningún riesgo de pasar por alto un segundo hallazgo si el primero ya fue identificado correctamente'],
  ok:0,
  clave:'Pasar por alto un segundo hallazgo relevante que, sin la disciplina de revisar sistemáticamente cada estructura, queda sin detectar.',
  exp:'Un error frecuente es enfocar toda la atención en el hallazgo más llamativo, sin completar la revisión sistemática del resto de la radiografía, lo que puede llevar a pasar por alto un segundo hallazgo relevante.',
  no:{
    1:'Esta conducta sí conlleva un riesgo real: puede haber un segundo hallazgo relevante no detectado sin revisión completa.',
    2:'Es precisamente lo contrario: enfocarse solo en el hallazgo más llamativo NO garantiza una revisión completa y suficiente.',
    3:'Sí existe un riesgo real de pasar por alto un segundo hallazgo, incluso habiendo identificado correctamente el primero.'
  },
  trampa:'Asumir que detectar el hallazgo más evidente es suficiente, sin completar la revisión sistemática del resto de la radiografía.',
  obj:'Aplicar el riesgo de enfocarse solo en el hallazgo más llamativo sin completar la lectura sistemática.',
  ref:'Novelline, Fundamentos de Radiología, cap. 3.',
  tags:['lectura sistemática de radiografía de tórax','riesgo de enfoque parcial']
},
{
  id:'U11-IMG-Q10', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de tórax', sub:'Qué es un infiltrado pulmonar',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es un infiltrado pulmonar en la radiografía de tórax?',
  ops:[
    'Una opacidad anormal dentro del parénquima pulmonar', 'Una zona de radiolucidez aumentada dentro del parénquima pulmonar, sin ninguna relación con opacidad', 'El infiltrado pulmonar es exclusivamente un hallazgo relacionado con la silueta cardíaca, no con el parénquima pulmonar', 'Un infiltrado pulmonar nunca corresponde a ningún hallazgo radiológico identificable en el parénquima'],
  ok:0,
  clave:'Una opacidad anormal dentro del parénquima pulmonar.',
  exp:'El infiltrado pulmonar es una opacidad anormal dentro del parénquima pulmonar, que en la práctica clínica con frecuencia se asocia a procesos como la neumonía.',
  no:{
    1:'Es precisamente lo contrario: el infiltrado pulmonar es una zona de OPACIDAD, no de radiolucidez aumentada.',
    2:'El infiltrado pulmonar se relaciona con el parénquima pulmonar, no con la silueta cardíaca.',
    3:'El infiltrado pulmonar sí corresponde a un hallazgo radiológico específico y bien identificable en el parénquima pulmonar.'
  },
  trampa:'Confundir el infiltrado pulmonar (opacidad) con una zona de radiolucidez aumentada, o ubicarlo en una estructura equivocada.',
  obj:'Definir qué es un infiltrado pulmonar en la radiografía de tórax.',
  ref:'Novelline, Fundamentos de Radiología, cap. 3.',
  tags:['infiltrado pulmonar','definición']
},
{
  id:'U11-IMG-Q11', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de tórax', sub:'Qué información aporta la distribución de un infiltrado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué información aporta la localización y distribución de un infiltrado pulmonar al diagnóstico?',
  ops:[
    'Aporta pistas diagnósticas relevantes que, combinadas con el cuadro clínico, orientan hacia una causa probable más específica', 'La localización y distribución de un infiltrado pulmonar nunca aporta ninguna información diagnóstica relevante adicional', 'Cualquier infiltrado pulmonar debe tratarse como un hallazgo genérico, sin ninguna consideración sobre su distribución', 'La distribución de un infiltrado pulmonar nunca debería combinarse con el cuadro clínico del paciente para su interpretación'],
  ok:0,
  clave:'Aporta pistas diagnósticas relevantes que, combinadas con el cuadro clínico, orientan hacia una causa probable más específica.',
  exp:'La localización, la distribución (focal versus difusa), y las características del infiltrado aportan pistas diagnósticas relevantes que, combinadas con el cuadro clínico del paciente, orientan hacia una causa probable más específica.',
  no:{
    1:'La localización y distribución sí aportan información diagnóstica relevante, orientando hacia una causa probable.',
    2:'Es precisamente lo contrario: un infiltrado NO debe tratarse como genérico; su distribución específica orienta el diagnóstico.',
    3:'La distribución del infiltrado sí debe combinarse con el cuadro clínico para una interpretación diagnóstica más específica.'
  },
  trampa:'Tratar cualquier infiltrado pulmonar como un hallazgo genérico sin considerar su localización y distribución específicas.',
  obj:'Explicar la utilidad diagnóstica de la localización y distribución de un infiltrado pulmonar.',
  ref:'Novelline, Fundamentos de Radiología, cap. 3.',
  tags:['infiltrado pulmonar','utilidad de localización y distribución']
},
{
  id:'U11-IMG-Q12', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de tórax', sub:'Manifestación radiológica del derrame pleural',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se manifiesta característicamente el derrame pleural en una radiografía de tórax?',
  ops:[
    'Por la pérdida del ángulo costofrénico normalmente agudo, y en derrames de mayor volumen, por una opacidad homogénea con borde superior cóncavo', 'El derrame pleural nunca genera ningún hallazgo radiológico identificable en una radiografía de tórax convencional', 'Por un aumento de la radiolucidez del ángulo costofrénico, en vez de su pérdida o borramiento', 'El derrame pleural siempre se manifiesta exclusivamente en la silueta cardíaca, sin ninguna relación con los ángulos costofrénicos'],
  ok:0,
  clave:'Por la pérdida del ángulo costofrénico normalmente agudo, y en derrames de mayor volumen, por una opacidad homogénea con borde superior cóncavo.',
  exp:'El derrame pleural se manifiesta característicamente por la pérdida del ángulo costofrénico normalmente agudo, y en derrames de mayor volumen, por una opacidad homogénea que ocupa la base pulmonar con un borde superior cóncavo característico.',
  no:{
    1:'El derrame pleural sí genera un hallazgo radiológico característico y bien identificable en la radiografía de tórax.',
    2:'Es precisamente lo contrario: el derrame pleural genera una PÉRDIDA (borramiento), no un aumento, de la radiolucidez del ángulo.',
    3:'El derrame pleural se manifiesta principalmente en los ángulos costofrénicos y la base pulmonar, no en la silueta cardíaca.'
  },
  trampa:'Confundir la manifestación radiológica del derrame pleural (pérdida del ángulo costofrénico) con otros hallazgos torácicos.',
  obj:'Identificar la manifestación radiológica característica del derrame pleural.',
  ref:'Novelline, Fundamentos de Radiología, cap. 3.',
  tags:['derrame pleural en radiografía','manifestación característica']
},
{
  id:'U11-IMG-Q13', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de tórax', sub:'Limitación de la radiografía para detectar derrames pequeños',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una cantidad relativamente pequeña de líquido pleural puede no ser evidente en una radiografía convencional de pie?',
  ops:[
    'Porque técnicas complementarias específicas o estudios de imagen adicionales, como la ecografía, pueden detectar volúmenes menores que la radiografía simple podría pasar por alto', 'Una radiografía convencional de pie siempre detecta con total precisión cualquier cantidad de líquido pleural, sin ninguna limitación real', 'La ecografía nunca tiene ninguna ventaja real frente a la radiografía convencional para detectar derrames pleurales pequeños', 'La cantidad de líquido pleural nunca influye realmente en si un derrame es o no evidente en la radiografía'],
  ok:0,
  clave:'Porque técnicas complementarias específicas o estudios de imagen adicionales, como la ecografía, pueden detectar volúmenes menores que la radiografía simple podría pasar por alto.',
  exp:'Una cantidad relativamente pequeña de líquido pleural puede no ser evidente en una radiografía convencional de pie, mientras técnicas complementarias o estudios adicionales como la ecografía pueden detectar volúmenes menores que la radiografía simple podría pasar por alto.',
  no:{
    1:'Es precisamente lo contrario: la radiografía convencional SÍ tiene una limitación real para detectar derrames pequeños.',
    2:'Es precisamente lo contrario: la ecografía SÍ tiene una ventaja real para detectar derrames pleurales pequeños.',
    3:'La cantidad de líquido pleural sí influye directamente en si el derrame es o no evidente en la radiografía convencional.'
  },
  trampa:'Asumir que la radiografía convencional detecta con total precisión cualquier cantidad de líquido pleural, sin reconocer su limitación para volúmenes pequeños.',
  obj:'Explicar la limitación de la radiografía convencional para detectar derrames pleurales de pequeño volumen.',
  ref:'Novelline, Fundamentos de Radiología, cap. 3.',
  tags:['derrame pleural en radiografía','limitación para volúmenes pequeños']
},
{
  id:'U11-IMG-Q14', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de tórax', sub:'Elementos revisados en la lectura sistemática',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué elementos revisa la lectura sistemática de la radiografía de tórax?',
  ops:[
    'Calidad técnica, estructuras óseas y de tejidos blandos, silueta cardíaca y mediastínica, campos pulmonares comparativos, ángulos costofrénicos, y diafragma', 'Únicamente los campos pulmonares, sin ninguna otra estructura adicional revisada en la lectura sistemática', 'Solo la silueta cardíaca, sin ninguna relación con los campos pulmonares ni los ángulos costofrénicos', 'La lectura sistemática de la radiografía de tórax no revisa ningún elemento específico reconocido clínicamente'],
  ok:0,
  clave:'Calidad técnica, estructuras óseas y de tejidos blandos, silueta cardíaca y mediastínica, campos pulmonares comparativos, ángulos costofrénicos, y diafragma.',
  exp:'La lectura sistemática revisa: la calidad técnica de la imagen, las estructuras óseas y de tejidos blandos, la silueta cardíaca y mediastínica, los campos pulmonares de forma comparativa, los ángulos costofrénicos, y el diafragma.',
  no:{
    1:'Los campos pulmonares son solo uno de varios elementos revisados en la lectura sistemática completa.',
    2:'La silueta cardíaca es solo uno de varios elementos; también se revisan campos pulmonares y ángulos costofrénicos.',
    3:'La lectura sistemática sí revisa elementos específicos bien reconocidos en un orden reproducible establecido.'
  },
  trampa:'Reducir la lectura sistemática de la radiografía de tórax a un solo elemento aislado, sin reconocer el conjunto completo.',
  obj:'Identificar los elementos que revisa la lectura sistemática de la radiografía de tórax.',
  ref:'Novelline, Fundamentos de Radiología, cap. 3.',
  tags:['lectura sistemática de radiografía de tórax','elementos revisados']
},
{
  id:'U11-IMG-Q15', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de abdomen', sub:'Indicaciones específicas de la radiografía simple de abdomen',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué escenarios específicos conserva utilidad la radiografía simple de abdomen como estudio inicial?',
  ops:[
    'Sospecha de obstrucción intestinal, búsqueda de aire libre en la cavidad peritoneal, y localización de ciertos cuerpos extraños radiopacos', 'La radiografía simple de abdomen no tiene ninguna indicación específica útil en la práctica clínica actual', 'Únicamente para evaluar la función renal del paciente, sin ninguna otra indicación reconocida', 'Solo para evaluar patología hepatobiliar, sin ninguna relación con obstrucción intestinal o aire libre'],
  ok:0,
  clave:'Sospecha de obstrucción intestinal, búsqueda de aire libre en la cavidad peritoneal, y localización de ciertos cuerpos extraños radiopacos.',
  exp:'La radiografía simple de abdomen conserva indicaciones específicas: sospecha de obstrucción intestinal, búsqueda de aire libre en la cavidad peritoneal, y localización de ciertos cuerpos extraños radiopacos.',
  no:{
    1:'La radiografía simple de abdomen sí conserva indicaciones específicas útiles como estudio inicial rápido.',
    2:'La radiografía simple no evalúa función renal; su utilidad está en obstrucción, aire libre y cuerpos extraños.',
    3:'La radiografía simple tiene indicaciones específicas (obstrucción, aire libre) más allá de la patología hepatobiliar.'
  },
  trampa:'Asumir que la radiografía simple de abdomen no tiene ninguna indicación específica útil, o confundir sus indicaciones con las de otros estudios.',
  obj:'Identificar las indicaciones específicas donde la radiografía simple de abdomen conserva utilidad.',
  ref:'Novelline, Fundamentos de Radiología, cap. 8.',
  tags:['radiografía simple de abdomen','indicaciones específicas']
},
{
  id:'U11-IMG-Q16', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de abdomen', sub:'Qué son los niveles hidroaéreos',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué son los niveles hidroaéreos, y qué condición sugieren?',
  ops:[
    'Una interfase horizontal entre líquido y gas dentro de un asa intestinal dilatada, hallazgo característico de la obstrucción intestinal', 'Los niveles hidroaéreos son un hallazgo exclusivo de la patología pulmonar, sin ninguna relación con el abdomen', 'Una interfase vertical entre hueso y tejido blando, sin ninguna relación con obstrucción intestinal', 'Los niveles hidroaéreos no tienen ninguna relación real con ninguna condición abdominal específica identificable'],
  ok:0,
  clave:'Una interfase horizontal entre líquido y gas dentro de un asa intestinal dilatada, hallazgo característico de la obstrucción intestinal.',
  exp:'Los niveles hidroaéreos son el hallazgo radiológico característico de la obstrucción intestinal, visibles como una interfase horizontal entre el líquido y el gas acumulados dentro de un asa intestinal dilatada.',
  no:{
    1:'Los niveles hidroaéreos son un hallazgo abdominal, no pulmonar, característico de la obstrucción intestinal.',
    2:'Los niveles hidroaéreos son una interfase HORIZONTAL entre líquido y gas, no vertical entre hueso y tejido blando.',
    3:'Los niveles hidroaéreos sí tienen una relación directa con una condición abdominal específica: la obstrucción intestinal.'
  },
  trampa:'Confundir los niveles hidroaéreos con hallazgos de otra región anatómica, o describir incorrectamente su orientación y composición.',
  obj:'Definir qué son los niveles hidroaéreos y qué condición sugieren.',
  ref:'Novelline, Fundamentos de Radiología, cap. 8.',
  tags:['niveles hidroaéreos','definición y significado']
},
{
  id:'U11-IMG-Q17', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de abdomen', sub:'Qué es el neumoperitoneo y su implicación clínica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el neumoperitoneo, y qué implicación clínica tiene fuera del postoperatorio inmediato?',
  ops:[
    'Es la presencia de aire libre dentro de la cavidad peritoneal, que en la gran mayoría de los contextos indica una perforación de víscera hueca, una emergencia quirúrgica', 'El neumoperitoneo nunca tiene ninguna implicación clínica real, sin importar el contexto en que se identifique', 'El neumoperitoneo siempre es un hallazgo esperado y normal, sin ninguna relación con una perforación de víscera hueca', 'La presencia de aire libre en la cavidad peritoneal nunca amerita ninguna intervención quirúrgica inmediata'],
  ok:0,
  clave:'Es la presencia de aire libre dentro de la cavidad peritoneal, que en la gran mayoría de los contextos indica una perforación de víscera hueca, una emergencia quirúrgica.',
  exp:'El neumoperitoneo es la presencia de aire libre dentro de la cavidad peritoneal, que en la gran mayoría de los contextos clínicos (fuera del postoperatorio inmediato) indica una perforación de víscera hueca, una verdadera emergencia quirúrgica.',
  no:{
    1:'El neumoperitoneo sí tiene una implicación clínica real y grave, particularmente fuera del contexto postoperatorio.',
    2:'Es precisamente lo contrario: fuera del postoperatorio inmediato, el neumoperitoneo indica una perforación de víscera hueca.',
    3:'Es precisamente lo contrario: el neumoperitoneo sí amerita intervención quirúrgica inmediata en la mayoría de los contextos.'
  },
  trampa:'Normalizar el hallazgo de neumoperitoneo sin considerar el contexto (postoperatorio reciente vs. no) que determina su gravedad.',
  obj:'Definir el neumoperitoneo y su implicación clínica como emergencia quirúrgica fuera del postoperatorio.',
  ref:'Novelline, Fundamentos de Radiología, cap. 8.',
  tags:['neumoperitoneo','implicación clínica de emergencia']
},
{
  id:'U11-IMG-Q18', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de abdomen', sub:'Uso apropiado de la radiografía simple de abdomen',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico solicita una radiografía simple de abdomen de forma genérica ante cualquier paciente con dolor abdominal, sin considerar una pregunta clínica específica.',
  enunciado:'¿Qué principio de este tema cuestiona esta conducta?',
  ops:[
    'Que cada estudio de imagen debe responder a una pregunta clínica concreta, y en muchos escenarios de dolor abdominal, otros estudios aportan mayor rendimiento diagnóstico', 'Esta conducta es completamente apropiada, ya que la radiografía simple de abdomen siempre es el estudio de primera elección ante cualquier dolor abdominal', 'La radiografía simple de abdomen siempre aporta el mayor rendimiento diagnóstico posible frente a cualquier otro estudio de imagen', 'No existe ninguna razón clínica real para cuestionar el uso genérico de la radiografía simple de abdomen'],
  ok:0,
  clave:'Que cada estudio de imagen debe responder a una pregunta clínica concreta, y en muchos escenarios de dolor abdominal, otros estudios aportan mayor rendimiento diagnóstico.',
  exp:'Reconocer las indicaciones específicas, en vez de solicitar una radiografía simple de abdomen de forma genérica, retoma la lógica de uso apropiado de recursos: en muchos escenarios de dolor abdominal, otros estudios aportan mayor rendimiento diagnóstico.',
  no:{
    1:'Esta conducta es cuestionable: la radiografía simple no siempre es la primera elección apropiada ante cualquier dolor abdominal.',
    2:'Es precisamente lo contrario: en muchos escenarios, OTROS estudios (ecografía, tomografía) aportan mayor rendimiento.',
    3:'Sí existe una razón clínica real para cuestionar el uso genérico, indiscriminado, de la radiografía simple de abdomen.'
  },
  trampa:'Solicitar una radiografía simple de abdomen de forma genérica sin considerar si otro estudio aportaría mayor rendimiento diagnóstico.',
  obj:'Aplicar el principio de uso apropiado de recursos diagnósticos ante el dolor abdominal, sin recurrir genéricamente a la radiografía simple.',
  ref:'Novelline, Fundamentos de Radiología, cap. 8.',
  tags:['radiografía simple de abdomen','uso apropiado según indicación']
},
{
  id:'U11-IMG-Q19', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de abdomen', sub:'Conexión con la semiología del abdomen agudo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué concepto ya visto en Semiología Quirúrgica se conecta la distribución de niveles hidroaéreos en una obstrucción intestinal?',
  ops:[
    'La semiología del abdomen agudo, donde este hallazgo radiológico complementa los signos clínicos ya conocidos de esa condición', 'Los niveles hidroaéreos no tienen ninguna relación real con ningún concepto ya visto en Semiología Quirúrgica', 'El signo de Blumberg ya visto en Semiología Quirúrgica es idéntico en mecanismo a los niveles hidroaéreos radiológicos', 'La escala de Glasgow ya vista en Neurología, sin ninguna relación real con los niveles hidroaéreos radiológicos'],
  ok:0,
  clave:'La semiología del abdomen agudo, donde este hallazgo radiológico complementa los signos clínicos ya conocidos de esa condición.',
  exp:'La distribución y el número de asas con niveles hidroaéreos retoma directamente la conexión con la semiología del abdomen agudo ya vista en Semiología Quirúrgica, donde este hallazgo radiológico complementa los signos clínicos ya conocidos.',
  no:{
    1:'Sí existe una conexión conceptual directa con la semiología del abdomen agudo ya vista en Semiología Quirúrgica.',
    2:'El signo de Blumberg es un hallazgo clínico palpatorio distinto, no idéntico en mecanismo a los niveles hidroaéreos radiológicos.',
    3:'La escala de Glasgow es una herramienta de evaluación neurológica distinta, sin relación conceptual con los niveles hidroaéreos.'
  },
  trampa:'No reconocer la conexión correcta entre los niveles hidroaéreos radiológicos y la semiología clínica del abdomen agudo ya vista.',
  obj:'Identificar la conexión entre los niveles hidroaéreos y la semiología del abdomen agudo ya vista en Semiología Quirúrgica.',
  ref:'Novelline, Fundamentos de Radiología, cap. 8.',
  tags:['niveles hidroaéreos','conexión con semiología del abdomen agudo']
},
{
  id:'U11-IMG-Q20', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de abdomen', sub:'Cómo se identifica el neumoperitoneo radiológicamente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se puede identificar el neumoperitoneo en una radiografía de tórax o abdomen tomada con el paciente de pie?',
  ops:[
    'Como una fina línea radiolúcida de aire libre por debajo del diafragma', 'El neumoperitoneo no puede identificarse de ninguna forma específica en una radiografía tomada con el paciente de pie', 'Como una opacidad densa homogénea que ocupa completamente la base pulmonar del paciente evaluado', 'Como una interfase horizontal entre líquido y gas dentro de un asa intestinal dilatada'],
  ok:0,
  clave:'Como una fina línea radiolúcida de aire libre por debajo del diafragma.',
  exp:'El neumoperitoneo se puede identificar en una radiografía de tórax o de abdomen tomada con el paciente de pie, como una fina línea radiolúcida de aire libre por debajo del diafragma.',
  no:{
    1:'El neumoperitoneo sí puede identificarse de forma específica y característica en una radiografía de pie.',
    2:'Esta descripción corresponde al derrame pleural, no al neumoperitoneo.',
    3:'Esta descripción corresponde a los niveles hidroaéreos de la obstrucción intestinal, no al neumoperitoneo.'
  },
  trampa:'Confundir el hallazgo radiológico característico del neumoperitoneo con el del derrame pleural o los niveles hidroaéreos.',
  obj:'Identificar cómo se manifiesta radiológicamente el neumoperitoneo en una radiografía de pie.',
  ref:'Novelline, Fundamentos de Radiología, cap. 8.',
  tags:['neumoperitoneo','identificación radiológica']
},
{
  id:'U11-IMG-Q21', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Radiografía de abdomen', sub:'Posición del paciente para evidenciar niveles hidroaéreos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué posición del paciente se hace más evidente el patrón de niveles hidroaéreos?',
  ops:[
    'De pie o en decúbito lateral', 'Los niveles hidroaéreos son igualmente evidentes en cualquier posición del paciente, sin ninguna diferencia real', 'Exclusivamente en decúbito prono, sin ninguna evidencia posible en otra posición del paciente', 'La posición del paciente nunca influye realmente en la evidencia del patrón de niveles hidroaéreos'],
  ok:0,
  clave:'De pie o en decúbito lateral.',
  exp:'El patrón de niveles hidroaéreos se hace más evidente en una radiografía tomada con el paciente en posición de pie o en decúbito lateral, permitiendo visualizar la interfase horizontal entre líquido y gas.',
  no:{
    1:'La posición del paciente sí influye en la evidencia del patrón; de pie o decúbito lateral lo hacen más visible.',
    2:'El decúbito prono no es la posición característica para evidenciar este patrón; de pie o decúbito lateral lo son.',
    3:'La posición del paciente sí influye directamente en qué tan evidente resulta el patrón de niveles hidroaéreos.'
  },
  trampa:'Asumir que la posición del paciente no influye en la visibilidad del patrón de niveles hidroaéreos.',
  obj:'Identificar la posición del paciente que hace más evidente el patrón de niveles hidroaéreos.',
  ref:'Novelline, Fundamentos de Radiología, cap. 8.',
  tags:['niveles hidroaéreos','posición del paciente']
},
{
  id:'U11-IMG-Q22', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Ecografía general', sub:'Principio físico del ultrasonido',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué se basan los principios del ultrasonido?',
  ops:[
    'En la emisión de ondas sonoras de alta frecuencia que se reflejan en distinto grado al encontrar interfases entre tejidos de diferente densidad acústica', 'En la absorción diferencial de rayos X por distintos tejidos del cuerpo, igual que la radiografía convencional', 'El ultrasonido utiliza radiación ionizante de baja dosis para generar la imagen final obtenida', 'El ultrasonido no se basa en ningún principio físico específico identificable en su funcionamiento'],
  ok:0,
  clave:'En la emisión de ondas sonoras de alta frecuencia que se reflejan en distinto grado al encontrar interfases entre tejidos de diferente densidad acústica.',
  exp:'Los principios del ultrasonido se basan en la emisión de ondas sonoras de alta frecuencia que, al encontrar distintas interfases entre tejidos con diferente densidad acústica, se reflejan en distinto grado, generando la imagen.',
  no:{
    1:'Esta descripción corresponde a la radiografía, no al ultrasonido, que se basa en ondas sonoras, no en rayos X.',
    2:'Es precisamente lo contrario: el ultrasonido NO utiliza radiación ionizante, a diferencia de la radiografía.',
    3:'El ultrasonido sí se basa en un principio físico específico y bien definido: la reflexión de ondas sonoras.'
  },
  trampa:'Confundir el principio físico del ultrasonido (ondas sonoras) con el de la radiografía (rayos X y absorción diferencial).',
  obj:'Explicar el principio físico básico en que se basa el ultrasonido.',
  ref:'Novelline, Fundamentos de Radiología, cap. 14.',
  tags:['principios del ultrasonido','base física']
},
{
  id:'U11-IMG-Q23', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Ecografía general', sub:'Ventaja fundamental del ultrasonido frente a la radiación ionizante',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la ventaja fundamental del ultrasonido frente a la radiografía o la tomografía computarizada?',
  ops:[
    'La ausencia de radiación ionizante, lo que permite repetirlo con seguridad y lo hace particularmente apropiado en poblaciones como gestantes y niños', 'El ultrasonido siempre ofrece una resolución anatómica superior a la de cualquier otro estudio de imagen disponible', 'El ultrasonido utiliza exactamente la misma cantidad de radiación ionizante que la radiografía convencional', 'No existe ninguna ventaja real del ultrasonido frente a otros estudios de imagen que utilizan radiación ionizante'],
  ok:0,
  clave:'La ausencia de radiación ionizante, lo que permite repetirlo con seguridad y lo hace particularmente apropiado en poblaciones como gestantes y niños.',
  exp:'La ausencia de radiación ionizante es la ventaja fundamental del ultrasonido: puede repetirse con seguridad las veces que sea clínicamente necesario, siendo particularmente apropiado en gestantes y niños.',
  no:{
    1:'La resolución anatómica no es la ventaja fundamental destacada; la ausencia de radiación ionizante sí lo es.',
    2:'Es precisamente lo contrario: el ultrasonido NO utiliza radiación ionizante, a diferencia de la radiografía.',
    3:'Sí existe una ventaja real y fundamental del ultrasonido: la ausencia de radiación ionizante.'
  },
  trampa:'Subestimar la ventaja de la ausencia de radiación ionizante del ultrasonido, o asumir que utiliza el mismo tipo de radiación que otros estudios.',
  obj:'Explicar la ventaja fundamental del ultrasonido frente a estudios que utilizan radiación ionizante.',
  ref:'Novelline, Fundamentos de Radiología, cap. 14.',
  tags:['principios del ultrasonido','ausencia de radiación ionizante']
},
{
  id:'U11-IMG-Q24', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Ecografía general', sub:'Aplicaciones de la ecografía abdominal',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué órganos y hallazgos permite evaluar típicamente la ecografía abdominal?',
  ops:[
    'Hígado, vesícula biliar, riñones, bazo, y páncreas con ciertas limitaciones, detectando hallazgos como litiasis biliar o renal', 'Únicamente el páncreas, sin ninguna otra estructura abdominal evaluable mediante ecografía general', 'Solo los riñones, sin ninguna relación con el hígado, la vesícula biliar o el bazo', 'La ecografía abdominal no permite evaluar ningún órgano específico ni detectar ningún hallazgo particular'],
  ok:0,
  clave:'Hígado, vesícula biliar, riñones, bazo, y páncreas con ciertas limitaciones, detectando hallazgos como litiasis biliar o renal.',
  exp:'La ecografía abdominal permite evaluar múltiples órganos sólidos (hígado, vesícula biliar, riñones, bazo, páncreas con ciertas limitaciones técnicas) y detectar hallazgos como litiasis biliar o renal, entre otros.',
  no:{
    1:'El páncreas es solo uno de varios órganos evaluables; también se evalúan hígado, vesícula biliar, riñones y bazo.',
    2:'Los riñones son solo uno de varios órganos evaluables; también se evalúan hígado, vesícula biliar, bazo y páncreas.',
    3:'La ecografía abdominal sí permite evaluar múltiples órganos específicos y detectar hallazgos particulares bien reconocidos.'
  },
  trampa:'Reducir las aplicaciones de la ecografía abdominal a un solo órgano aislado, sin reconocer el conjunto completo de estructuras evaluables.',
  obj:'Identificar los órganos y hallazgos que permite evaluar la ecografía abdominal.',
  ref:'Novelline, Fundamentos de Radiología, cap. 14.',
  tags:['ecografía abdominal','órganos evaluables']
},
{
  id:'U11-IMG-Q25', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Ecografía general', sub:'Limitación técnica de la ecografía dependiente del operador',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es importante reconocer que un resultado ecográfico "no concluyente" no siempre descarta la patología buscada?',
  ops:[
    'Porque la ecografía depende significativamente de la experiencia del operador y de factores del paciente, como el gas intestinal, que pueden limitar la visualización', 'Un resultado ecográfico "no concluyente" siempre confirma con certeza que la patología buscada está definitivamente ausente', 'La ecografía nunca depende de la experiencia del operador ni de factores del paciente para su interpretación', 'El gas intestinal nunca tiene ninguna relación real con la calidad de visualización de un estudio ecográfico'],
  ok:0,
  clave:'Porque la ecografía depende significativamente de la experiencia del operador y de factores del paciente, como el gas intestinal, que pueden limitar la visualización.',
  exp:'Una limitación técnica relevante de la ecografía es su dependencia significativa de la experiencia del operador y de factores del paciente (como gas intestinal excesivo), por lo que un resultado "no concluyente" puede reflejar esta limitación técnica, no necesariamente la ausencia de la patología.',
  no:{
    1:'Es precisamente lo contrario: un resultado "no concluyente" NO confirma con certeza la ausencia de la patología buscada.',
    2:'Es precisamente lo contrario: la ecografía SÍ depende significativamente de la experiencia del operador y de factores del paciente.',
    3:'El gas intestinal sí tiene una relación directa con la calidad de visualización, pudiendo limitarla considerablemente.'
  },
  trampa:'Interpretar un resultado ecográfico "no concluyente" como una confirmación de que la patología buscada está ausente.',
  obj:'Explicar por qué un resultado ecográfico "no concluyente" no siempre descarta la patología buscada.',
  ref:'Novelline, Fundamentos de Radiología, cap. 14.',
  tags:['ecografía abdominal','limitación dependiente del operador']
},
{
  id:'U11-IMG-Q26', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Ecografía general', sub:'Qué es la ecografía a pie de cama',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la ecografía a pie de cama, y qué ventaja aporta?',
  ops:[
    'El uso del ultrasonido directamente donde se encuentra el paciente, por el propio médico tratante, permitiendo responder preguntas clínicas específicas de forma inmediata sin trasladar al paciente', 'La ecografía a pie de cama requiere siempre trasladar al paciente a un departamento de imagenología separado, sin ninguna excepción', 'La ecografía a pie de cama nunca puede realizarla el propio médico tratante, siempre requiere un especialista en imagenología', 'Esta modalidad de ecografía no aporta ninguna ventaja real frente a un estudio formal realizado en otro departamento'],
  ok:0,
  clave:'El uso del ultrasonido directamente donde se encuentra el paciente, por el propio médico tratante, permitiendo responder preguntas clínicas específicas de forma inmediata sin trasladar al paciente.',
  exp:'La ecografía a pie de cama es el uso del ultrasonido directamente en el lugar donde se encuentra el paciente, por el propio médico tratante, para responder preguntas clínicas específicas de forma inmediata, sin necesidad de trasladar al paciente.',
  no:{
    1:'Es precisamente lo contrario: la ecografía a pie de cama evita el traslado del paciente a otro departamento.',
    2:'Es precisamente lo contrario: la ecografía a pie de cama puede realizarla el propio médico tratante, no exclusivamente un especialista.',
    3:'Esta modalidad sí aporta una ventaja real: acelerar decisiones clínicas urgentes sin esperar un estudio formal en otro lugar.'
  },
  trampa:'Asumir que cualquier ecografía requiere trasladar al paciente a un departamento de imagenología separado, sin reconocer la modalidad a pie de cama.',
  obj:'Definir la ecografía a pie de cama y explicar su ventaja práctica principal.',
  ref:'Novelline, Fundamentos de Radiología, cap. 14.',
  tags:['ecografía a pie de cama','ventaja de inmediatez']
},
{
  id:'U11-IMG-Q27', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Ecografía general', sub:'Conexión con la oportunidad temprana en la evaluación clínica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué principio ya visto repetidamente en este pensum se conecta la ecografía a pie de cama?',
  ops:[
    'La importancia de la oportunidad temprana en la evaluación clínica, obteniendo información diagnóstica relevante de forma inmediata sin retraso', 'La ecografía a pie de cama no tiene ninguna relación real con ningún principio ya visto sobre oportunidad clínica temprana', 'Retrasar la obtención de información diagnóstica siempre es preferible a obtenerla de forma inmediata en el punto de atención', 'La oportunidad temprana en la evaluación clínica nunca ha sido un principio relevante en ningún otro bloque de este pensum'],
  ok:0,
  clave:'La importancia de la oportunidad temprana en la evaluación clínica, obteniendo información diagnóstica relevante de forma inmediata sin retraso.',
  exp:'Este enfoque retoma directamente la lógica ya vista sobre la importancia de la oportunidad temprana: obtener información diagnóstica relevante de forma inmediata puede acelerar decisiones clínicas urgentes que, de esperar, sufrirían un retraso potencialmente relevante.',
  no:{
    1:'Sí existe una conexión conceptual directa con la importancia de la oportunidad temprana ya vista repetidamente en este pensum.',
    2:'Es precisamente lo contrario: obtener información inmediata es preferible a retrasarla, especialmente en decisiones urgentes.',
    3:'La oportunidad temprana sí ha sido un principio relevante recurrente en varios bloques ya vistos de este pensum.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre la ecografía a pie de cama y la importancia de la oportunidad temprana ya vista en otros bloques.',
  obj:'Identificar la conexión entre la ecografía a pie de cama y el principio de oportunidad temprana ya visto en el pensum.',
  ref:'Novelline, Fundamentos de Radiología, cap. 14.',
  tags:['ecografía a pie de cama','conexión con oportunidad temprana']
},
{
  id:'U11-IMG-Q28', programa:'unirm', cuatri:11,
  esp:'Imagenología y Medicina Nuclear', tema:'Ecografía general', sub:'Capacidad del ultrasonido de observar movimiento en tiempo real',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué capacidad distintiva del ultrasonido permite observar estructuras en movimiento, como el latido cardíaco fetal ya visto en Obstetricia I?',
  ops:[
    'El equipo capta los ecos reflejados y los traduce en una imagen en tiempo real, permitiendo observar estructuras y, en ciertas configuraciones, incluso movimiento', 'El ultrasonido nunca puede mostrar estructuras en movimiento, siendo exclusivamente capaz de generar imágenes estáticas fijas', 'Esta capacidad de observar movimiento en tiempo real es exclusiva de la tomografía computarizada, no del ultrasonido', 'La capacidad de observar movimiento en tiempo real nunca tiene ninguna relación real con el principio físico del ultrasonido'],
  ok:0,
  clave:'El equipo capta los ecos reflejados y los traduce en una imagen en tiempo real, permitiendo observar estructuras y, en ciertas configuraciones, incluso movimiento.',
  exp:'El equipo capta los ecos reflejados y los traduce en una imagen en tiempo real, permitiendo observar estructuras y, en ciertas configuraciones, incluso movimiento, como el latido cardíaco fetal ya visto en Obstetricia I.',
  no:{
    1:'Es precisamente lo contrario: el ultrasonido SÍ puede mostrar estructuras en movimiento en tiempo real, a diferencia de una imagen estática.',
    2:'Esta capacidad es característica del ultrasonido en tiempo real, no exclusiva de la tomografía computarizada.',
    3:'Esta capacidad sí tiene una relación directa con el principio físico del ultrasonido, que genera imágenes en tiempo real.'
  },
  trampa:'Asumir que el ultrasonido solo genera imágenes estáticas, sin reconocer su capacidad de mostrar movimiento en tiempo real.',
  obj:'Explicar la capacidad del ultrasonido de mostrar estructuras en movimiento en tiempo real.',
  ref:'Novelline, Fundamentos de Radiología, cap. 14.',
  tags:['principios del ultrasonido','imagen en tiempo real']
}

]);
