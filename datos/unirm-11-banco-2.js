/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 11, TANDA DE PEDIATRÍA I (2/2)
   Continua el prefijo U11-PED1- desde Q28. Cubre los ultimos 9
   temas: anemia, enfermedades exantematicas, asma, convulsion
   febril, maltrato infantil, trastornos del desarrollo
   psicomotor, deshidratacion, dolor abdominal y urgencias
   pediatricas comunes (Q28-Q50).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U11-PED1-Q28', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Anemia en la infancia', sub:'Ventana de mayor riesgo de anemia ferropénica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el riesgo de anemia ferropénica aumenta particularmente entre los seis y los veinticuatro meses de edad?',
  ops:[
    'Porque las reservas de hierro con las que nace el niño se agotan en este periodo, mientras las demandas de hierro aumentan por el crecimiento acelerado propio de esta etapa', 'El riesgo de anemia ferropénica es exactamente el mismo en cualquier edad de la infancia, sin ninguna ventana de mayor vulnerabilidad', 'Las reservas de hierro con las que nace el niño nunca se agotan durante la infancia, independientemente de la alimentación recibida', 'Las demandas de hierro del niño disminuyen significativamente durante el periodo de crecimiento acelerado de esta etapa'],
  ok:0,
  clave:'Porque las reservas de hierro con las que nace el niño se agotan en este periodo, mientras las demandas de hierro aumentan por el crecimiento acelerado propio de esta etapa.',
  exp:'El riesgo aumenta particularmente entre los seis y los veinticuatro meses de edad, un periodo donde las reservas de hierro con las que nace el niño se agotan, mientras las demandas de hierro aumentan por el crecimiento acelerado propio de esta etapa.',
  no:{
    1:'Sí existe una ventana de mayor vulnerabilidad, entre los seis y los veinticuatro meses, por la combinación de factores descrita.',
    2:'Las reservas de hierro con las que nace el niño sí se agotan progresivamente, siendo un factor central en el riesgo de anemia.',
    3:'Las demandas de hierro AUMENTAN, no disminuyen, durante el periodo de crecimiento acelerado de esta etapa.'
  },
  trampa:'Asumir que el riesgo de anemia ferropénica es uniforme en toda la infancia, sin reconocer la ventana particular de mayor vulnerabilidad.',
  obj:'Explicar por qué el riesgo de anemia ferropénica aumenta entre los seis y los veinticuatro meses de edad.',
  ref:'Nelson, Tratado de Pediatría, cap. 15.',
  tags:['anemia ferropénica infantil','ventana de mayor riesgo']
},
{
  id:'U11-PED1-Q29', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Anemia en la infancia', sub:'Consecuencias de la anemia más allá del laboratorio',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la relevancia clínica de la anemia ferropénica infantil va más allá de la cifra de hemoglobina en el laboratorio?',
  ops:[
    'Porque existe evidencia consistente de que la deficiencia de hierro se asocia con alteraciones documentadas en el desarrollo cognitivo y motor, algunas de las cuales pueden no revertirse completamente', 'La anemia ferropénica infantil nunca tiene ninguna consecuencia real más allá del hallazgo aislado de laboratorio', 'Corregir la anemia ferropénica siempre revierte por completo cualquier alteración del desarrollo, sin ninguna excepción', 'La deficiencia de hierro en el lactante nunca tiene ninguna relación real con el desarrollo cognitivo o motor del niño'],
  ok:0,
  clave:'Porque existe evidencia consistente de que la deficiencia de hierro se asocia con alteraciones documentadas en el desarrollo cognitivo y motor, algunas de las cuales pueden no revertirse completamente.',
  exp:'Existe evidencia consistente de que la deficiencia de hierro, particularmente en los primeros dos años de vida, se asocia con alteraciones documentadas en el desarrollo cognitivo y motor, algunas de las cuales pueden no revertirse completamente incluso después de corregir la anemia.',
  no:{
    1:'La anemia ferropénica sí tiene consecuencias reales documentadas más allá del hallazgo aislado de laboratorio.',
    2:'Es precisamente lo contrario: algunas alteraciones del desarrollo pueden NO revertirse completamente incluso tras corregir la anemia.',
    3:'La deficiencia de hierro sí tiene una relación documentada con el desarrollo cognitivo y motor del niño.'
  },
  trampa:'Reducir la anemia ferropénica a un simple hallazgo de laboratorio a corregir, sin reconocer su impacto potencial sobre el desarrollo.',
  obj:'Explicar por qué la anemia ferropénica infantil tiene consecuencias clínicas más allá del laboratorio.',
  ref:'Nelson, Tratado de Pediatría, cap. 15.',
  tags:['anemia en el lactante','consecuencias sobre el desarrollo']
},
{
  id:'U11-PED1-Q30', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Anemia en la infancia', sub:'Suplementación con hierro como prevención primaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la suplementación con hierro se considera más valiosa como intervención preventiva que esperar a detectar la anemia por laboratorio?',
  ops:[
    'Porque previene el desarrollo de la anemia durante la ventana de mayor riesgo, evitando el riesgo de consecuencias sobre el desarrollo que la corrección tardía no siempre revierte del todo', 'La suplementación con hierro nunca ha demostrado ninguna ventaja real frente a esperar la detección de la anemia por laboratorio', 'Detectar la anemia por laboratorio y tratarla después siempre es igual de efectivo que prevenirla mediante suplementación', 'La suplementación con hierro solo es apropiada una vez que la anemia ya fue confirmada mediante estudios de laboratorio'],
  ok:0,
  clave:'Porque previene el desarrollo de la anemia durante la ventana de mayor riesgo, evitando el riesgo de consecuencias sobre el desarrollo que la corrección tardía no siempre revierte del todo.',
  exp:'Suplementar con hierro antes de que se desarrolle la anemia (prevención primaria) es clínicamente más valioso que esperar a detectarla por laboratorio y tratarla después (prevención secundaria), por el riesgo de consecuencias sobre el desarrollo que la corrección tardía no siempre revierte del todo.',
  no:{
    1:'La suplementación preventiva sí ha demostrado una ventaja real frente a la detección tardía por laboratorio.',
    2:'Es precisamente lo contrario: la prevención primaria es más valiosa que la detección y tratamiento tardío (prevención secundaria).',
    3:'La suplementación también puede ser preventiva, dirigida a poblaciones o lactantes de riesgo, no solo tras confirmar la anemia.'
  },
  trampa:'Asumir que detectar y tratar la anemia después de confirmada por laboratorio es igual de efectivo que prevenirla mediante suplementación oportuna.',
  obj:'Explicar por qué la suplementación preventiva con hierro es más valiosa que esperar la detección tardía por laboratorio.',
  ref:'Nelson, Tratado de Pediatría, cap. 15.',
  tags:['suplementación con hierro','prevención primaria']
},
{
  id:'U11-PED1-Q31', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Enfermedades exantemáticas', sub:'Manchas de Koplik y el diagnóstico de sarampión',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué relevancia clínica tienen las manchas de Koplik en el diagnóstico del sarampión?',
  ops:[
    'Son un hallazgo precoz y muy específico que puede preceder al exantema característico de la enfermedad', 'Las manchas de Koplik nunca tienen ninguna relevancia clínica real para el diagnóstico del sarampión', 'Las manchas de Koplik solo aparecen después de que el exantema maculopapular ya está completamente establecido', 'Las manchas de Koplik son un hallazgo inespecífico, presente por igual en la mayoría de las enfermedades exantemáticas'],
  ok:0,
  clave:'Son un hallazgo precoz y muy específico que puede preceder al exantema característico de la enfermedad.',
  exp:'Las manchas de Koplik (pequeñas manchas blanquecinas en la mucosa oral) son un hallazgo precoz y muy específico que puede preceder al exantema maculopapular característico del sarampión.',
  no:{
    1:'Estas manchas sí tienen una relevancia clínica real y específica para el diagnóstico precoz del sarampión.',
    2:'Es precisamente lo contrario: las manchas de Koplik pueden PRECEDER al exantema, no aparecer después de él.',
    3:'Las manchas de Koplik son un hallazgo específico del sarampión, no un hallazgo inespecífico común a otras enfermedades exantemáticas.'
  },
  trampa:'Subestimar el valor diagnóstico precoz de las manchas de Koplik, o confundirlas con un hallazgo tardío o inespecífico.',
  obj:'Explicar la relevancia clínica de las manchas de Koplik en el diagnóstico precoz del sarampión.',
  ref:'Nelson, Tratado de Pediatría, cap. 22.',
  tags:['sarampión','manchas de Koplik']
},
{
  id:'U11-PED1-Q32', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Enfermedades exantemáticas', sub:'El patrón "cielo estrellado" de la varicela',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica distintiva del exantema de la varicela se conoce como patrón "cielo estrellado"?',
  ops:[
    'La presencia simultánea de lesiones en distintas etapas de evolución (mácula, pápula, vesícula, costra) en la misma zona del cuerpo', 'Que todas las lesiones cutáneas de la varicela se encuentran siempre en exactamente la misma etapa de evolución', 'Que el exantema de la varicela nunca presenta ningún patrón distintivo reconocible en su evolución clínica', 'Que las lesiones de la varicela aparecen exclusivamente en el rostro, sin diseminarse a ninguna otra zona corporal'],
  ok:0,
  clave:'La presencia simultánea de lesiones en distintas etapas de evolución (mácula, pápula, vesícula, costra) en la misma zona del cuerpo.',
  exp:'La varicela se caracteriza por un exantema vesicular pruriginoso que evoluciona en varias etapas, con la particularidad de que, en un momento dado, pueden observarse lesiones en distintas etapas simultáneamente en la misma zona -el patrón "cielo estrellado".',
  no:{
    1:'Es precisamente lo contrario: el patrón "cielo estrellado" implica lesiones en DISTINTAS etapas simultáneas, no en la misma etapa.',
    2:'La varicela sí presenta un patrón distintivo reconocible, precisamente el patrón "cielo estrellado" descrito.',
    3:'Las lesiones de la varicela no se limitan al rostro; se diseminan por distintas zonas del cuerpo.'
  },
  trampa:'Invertir la característica distintiva del patrón "cielo estrellado" (lesiones en distintas etapas simultáneas) con lesiones uniformes en la misma etapa.',
  obj:'Explicar qué caracteriza al patrón "cielo estrellado" del exantema de la varicela.',
  ref:'Nelson, Tratado de Pediatría, cap. 22.',
  tags:['varicela','patrón cielo estrellado']
},
{
  id:'U11-PED1-Q33', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Enfermedades exantemáticas', sub:'El patrón temporal del exantema súbito',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un lactante de diez meses presenta varios días de fiebre alta, con buen estado general. La fiebre cede súbitamente, y en ese momento aparece un exantema maculopapular rosado en el tronco.',
  enunciado:'¿Qué diagnóstico es más probable según este patrón temporal descrito?',
  ops:[
    'Exantema súbito (roséola), por la secuencia característica de fiebre alta que cede justo cuando aparece el exantema', 'Sarampión, ya que la fiebre alta seguida de exantema es un patrón exclusivo de esta enfermedad exantemática', 'Varicela, ya que el exantema maculopapular rosado descrito corresponde exactamente al patrón típico de esta enfermedad', 'No es posible orientar el diagnóstico hacia ninguna enfermedad exantemática específica basándose en este patrón temporal'],
  ok:0,
  clave:'Exantema súbito (roséola), por la secuencia característica de fiebre alta que cede justo cuando aparece el exantema.',
  exp:'El exantema súbito sigue un patrón temporal distintivo: varios días de fiebre alta, con un niño por lo demás en buen estado general, seguidos de la desaparición súbita de la fiebre coincidiendo con la aparición del exantema maculopapular rosado -exactamente lo descrito en este caso.',
  no:{
    1:'El sarampión no sigue este patrón temporal específico; además, típicamente se acompaña de tos, coriza y conjuntivitis, no descritos aquí.',
    2:'La varicela se caracteriza por un exantema vesicular en distintas etapas ("cielo estrellado"), no maculopapular rosado como el descrito.',
    3:'Sí es posible orientar el diagnóstico hacia el exantema súbito, precisamente por el patrón temporal característico descrito.'
  },
  trampa:'No reconocer el patrón temporal característico del exantema súbito (fiebre que cede al aparecer el exantema), confundiéndolo con otras enfermedades exantemáticas.',
  obj:'Aplicar el reconocimiento del patrón temporal característico del exantema súbito en un caso clínico.',
  ref:'Nelson, Tratado de Pediatría, cap. 22.',
  tags:['exantema súbito','patrón temporal característico']
},
{
  id:'U11-PED1-Q34', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Asma en la infancia', sub:'Sibilancias recurrentes vs. episodio aislado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las sibilancias recurrentes, y no un único episodio aislado, son el dato clínico central que orienta hacia el diagnóstico de asma?',
  ops:[
    'Porque un episodio aislado de sibilancias asociado a una infección viral es más característico de bronquiolitis, mientras la recurrencia orienta hacia una condición crónica subyacente', 'Un único episodio aislado de sibilancias siempre es tan significativo como episodios recurrentes para el diagnóstico de asma', 'El diagnóstico de asma nunca depende de si las sibilancias son recurrentes o si se trata de un episodio aislado', 'Las sibilancias recurrentes son menos relevantes clínicamente que un único episodio grave y aislado de sibilancias'],
  ok:0,
  clave:'Porque un episodio aislado de sibilancias asociado a una infección viral es más característico de bronquiolitis, mientras la recurrencia orienta hacia una condición crónica subyacente.',
  exp:'Las sibilancias recurrentes -no un único episodio aislado asociado a una infección viral- son el dato clínico central que orienta hacia el diagnóstico de asma, retomando la distinción ya vista con la bronquiolitis, característica de un primer episodio en un lactante pequeño.',
  no:{
    1:'Un episodio aislado, especialmente en un lactante pequeño con cuadro viral, orienta más hacia bronquiolitis que hacia asma.',
    2:'Es precisamente lo contrario: el diagnóstico de asma sí depende centralmente de si las sibilancias son recurrentes o no.',
    3:'Las sibilancias recurrentes son, de hecho, más relevantes para el diagnóstico de asma que un único episodio aislado.'
  },
  trampa:'Confundir un episodio aislado de sibilancias (más característico de bronquiolitis) con sibilancias recurrentes (más características de asma).',
  obj:'Explicar por qué las sibilancias recurrentes, y no un episodio aislado, orientan hacia el diagnóstico de asma.',
  ref:'Nelson, Tratado de Pediatría, cap. 25.',
  tags:['sibilancias recurrentes','diferencia con episodio aislado']
},
{
  id:'U11-PED1-Q35', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Asma en la infancia', sub:'Evaluación de severidad de la crisis asmática',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué signos permiten evaluar la severidad de una crisis asmática pediátrica?',
  ops:[
    'Dificultad respiratoria, uso de músculos accesorios, capacidad de hablar en frases completas o solo en palabras sueltas, y saturación de oxígeno', 'Únicamente la presencia o ausencia de tos, sin ninguna otra consideración clínica relevante para evaluar la severidad', 'Solo el color de la piel del niño, sin ninguna relación con la dificultad respiratoria o el uso de músculos accesorios', 'La severidad de una crisis asmática nunca puede evaluarse clínicamente mediante signos observables en el niño'],
  ok:0,
  clave:'Dificultad respiratoria, uso de músculos accesorios, capacidad de hablar en frases completas o solo en palabras sueltas, y saturación de oxígeno.',
  exp:'La crisis asmática pediátrica se evalúa por signos como la dificultad respiratoria, el uso de músculos accesorios de la respiración, la capacidad de hablar en frases completas o solo en palabras sueltas, y la saturación de oxígeno.',
  no:{
    1:'La presencia de tos por sí sola no es el criterio central; existen múltiples signos específicos para evaluar la severidad.',
    2:'El color de la piel es solo un elemento parcial; existen otros signos más específicos para evaluar la severidad de la crisis.',
    3:'La severidad sí puede y debe evaluarse clínicamente mediante signos observables específicos, como los descritos en este tema.'
  },
  trampa:'Reducir la evaluación de severidad de una crisis asmática a un solo signo aislado, sin reconocer el conjunto de signos relevantes.',
  obj:'Identificar los signos que permiten evaluar la severidad de una crisis asmática pediátrica.',
  ref:'Nelson, Tratado de Pediatría, cap. 25.',
  tags:['crisis asmática pediátrica','evaluación de severidad']
},
{
  id:'U11-PED1-Q36', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Asma en la infancia', sub:'Por qué el espaciador mejora la administración del inhalador',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el uso de un espaciador mejora la efectividad del tratamiento con inhalador en niños pequeños?',
  ops:[
    'Porque un niño pequeño con frecuencia no logra coordinar la inhalación con la activación del inhalador, y el espaciador resuelve ese problema técnico, mejorando la cantidad de medicamento que llega a la vía aérea', 'El uso de un espaciador nunca tiene ninguna relación real con la cantidad de medicamento que llega efectivamente a la vía aérea', 'Un niño pequeño siempre logra coordinar perfectamente la inhalación con la activación del inhalador, sin ninguna dificultad técnica', 'El espaciador es un accesorio opcional sin ningún beneficio real comprobado sobre la administración del medicamento inhalado'],
  ok:0,
  clave:'Porque un niño pequeño con frecuencia no logra coordinar la inhalación con la activación del inhalador, y el espaciador resuelve ese problema técnico, mejorando la cantidad de medicamento que llega a la vía aérea.',
  exp:'El espaciador mejora significativamente la cantidad de medicamento que realmente llega a la vía aérea, porque un niño pequeño con frecuencia no logra coordinar la inhalación con la activación del inhalador, un problema técnico que el espaciador resuelve.',
  no:{
    1:'El espaciador sí tiene una relación directa y comprobada con la cantidad de medicamento que llega efectivamente a la vía aérea.',
    2:'Es precisamente lo contrario: un niño pequeño con frecuencia NO logra coordinar bien la inhalación con la activación del inhalador.',
    3:'El espaciador tiene un beneficio real y comprobado, no es un accesorio meramente opcional sin efecto clínico documentado.'
  },
  trampa:'Subestimar la importancia técnica del espaciador, asumiendo que cualquier niño puede usar el inhalador solo con la misma efectividad.',
  obj:'Explicar por qué el uso del espaciador mejora la efectividad del tratamiento con inhalador en niños pequeños.',
  ref:'Nelson, Tratado de Pediatría, cap. 25.',
  tags:['inhalador con espaciador','técnica inhalatoria']
},
{
  id:'U11-PED1-Q37', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Convulsión febril', sub:'Características de la convulsión febril simple',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué características definen a una convulsión febril simple?',
  ops:[
    'Generalizada, de duración breve (menos de quince minutos), que no se repite dentro de las siguientes 24 horas, en ausencia de causa neurológica identificable', 'Focal, de duración mayor a quince minutos, con recurrencia frecuente dentro de las siguientes 24 horas', 'Cualquier convulsión asociada a fiebre se considera automáticamente simple, sin ninguna otra característica adicional a evaluar', 'La convulsión febril simple no tiene ninguna característica específica que la distinga de la convulsión febril compleja'],
  ok:0,
  clave:'Generalizada, de duración breve (menos de quince minutos), que no se repite dentro de las siguientes 24 horas, en ausencia de causa neurológica identificable.',
  exp:'La convulsión febril simple es una convulsión generalizada, de duración breve (menos de quince minutos), que no se repite dentro de las siguientes 24 horas, asociada a fiebre pero sin evidencia de infección del sistema nervioso central u otra causa neurológica identificable.',
  no:{
    1:'Estas características (focal, prolongada, recurrente) corresponden a la convulsión febril COMPLEJA, no a la simple.',
    2:'No toda convulsión asociada a fiebre es simple; existen características específicas que la distinguen de la forma compleja.',
    3:'Sí existen características específicas bien definidas que distinguen la convulsión febril simple de la compleja.'
  },
  trampa:'Confundir las características de la convulsión febril simple con las de la compleja, o asumir que toda convulsión con fiebre es simple.',
  obj:'Identificar las características que definen a la convulsión febril simple.',
  ref:'Nelson, Tratado de Pediatría, cap. 30.',
  tags:['convulsión febril simple','características definitorias']
},
{
  id:'U11-PED1-Q38', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Convulsión febril', sub:'Cuándo una convulsión febril se clasifica como compleja',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño de dos años presenta una convulsión asociada a fiebre que compromete únicamente el lado derecho de su cuerpo, sin generalizarse.',
  enunciado:'¿Cómo debe clasificarse esta convulsión, y qué implica esta clasificación para el manejo?',
  ops:[
    'Convulsión febril compleja, por ser focal en vez de generalizada, lo que amerita una evaluación más profunda para descartar una causa neurológica subyacente', 'Convulsión febril simple, ya que cualquier convulsión asociada a fiebre en un niño de esta edad se clasifica automáticamente como simple', 'Esta presentación no corresponde a ninguna categoría reconocida de convulsión febril descrita en este tema', 'La focalidad de una convulsión asociada a fiebre nunca tiene ninguna relación real con la necesidad de estudio adicional'],
  ok:0,
  clave:'Convulsión febril compleja, por ser focal en vez de generalizada, lo que amerita una evaluación más profunda para descartar una causa neurológica subyacente.',
  exp:'La convulsión febril compleja se distingue de la simple por tener al menos una característica como el compromiso de solo una parte del cuerpo (focal) -como en este caso-, lo que amerita una evaluación más profunda para descartar una causa neurológica subyacente distinta de la simple fiebre.',
  no:{
    1:'No toda convulsión con fiebre es simple; la focalidad descrita en este caso la clasifica como compleja, no simple.',
    2:'Esta presentación sí corresponde a una categoría reconocida: la convulsión febril compleja, por su característica focal.',
    3:'La focalidad sí tiene una relación directa con la necesidad de un estudio adicional más profundo en este tipo de convulsión.'
  },
  trampa:'Clasificar automáticamente cualquier convulsión asociada a fiebre como simple, sin evaluar características específicas como la focalidad.',
  obj:'Aplicar la clasificación correcta de una convulsión febril focal como compleja, y su implicación para el manejo.',
  ref:'Nelson, Tratado de Pediatría, cap. 30.',
  tags:['convulsión febril compleja','focalidad como criterio']
},
{
  id:'U11-PED1-Q39', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Convulsión febril', sub:'Manejo inmediato de una convulsión en curso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué prioriza el manejo inmediato de una convulsión en el niño en el momento agudo del evento?',
  ops:[
    'Proteger al niño de lesiones (superficie segura, de lado, sin restringir movimientos ni introducir objetos en la boca) y cronometrar la duración del evento', 'Restringir físicamente todos los movimientos del niño durante la convulsión para evitar cualquier lesión posible', 'Introducir un objeto en la boca del niño para evitar que se muerda la lengua durante el episodio convulsivo', 'El manejo inmediato de una convulsión no requiere ninguna acción específica más allá de simplemente observar al niño'],
  ok:0,
  clave:'Proteger al niño de lesiones (superficie segura, de lado, sin restringir movimientos ni introducir objetos en la boca) y cronometrar la duración del evento.',
  exp:'El manejo de la convulsión en el niño, en el momento agudo, prioriza proteger al niño de lesiones (superficie segura, de lado, sin restringir sus movimientos ni introducir objetos en la boca) y cronometrar la duración del evento.',
  no:{
    1:'Restringir los movimientos del niño no es la conducta apropiada; puede incluso generar lesiones adicionales durante el evento.',
    2:'Introducir un objeto en la boca es una práctica desaconsejada e incorrecta, que puede generar lesiones adicionales al niño.',
    3:'El manejo inmediato sí requiere acciones específicas: proteger de lesiones y cronometrar la duración del evento convulsivo.'
  },
  trampa:'Restringir físicamente al niño o introducir objetos en su boca durante la convulsión, prácticas incorrectas y potencialmente dañinas.',
  obj:'Explicar las acciones apropiadas del manejo inmediato de una convulsión en el niño.',
  ref:'Nelson, Tratado de Pediatría, cap. 30.',
  tags:['manejo de la convulsión en el niño','protección durante el evento']
},
{
  id:'U11-PED1-Q40', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Maltrato infantil', sub:'La inconsistencia como dato central de sospecha',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un lactante de cuatro meses, que todavía no tiene la capacidad motora de girarse ni desplazarse, es llevado a consulta con una fractura, y el cuidador refiere que el niño "se cayó rodando de la cama".',
  enunciado:'¿Qué dato de este caso debe generar mayor sospecha de maltrato físico infantil?',
  ops:[
    'La inconsistencia entre el mecanismo relatado y el desarrollo motor esperado para la edad del niño, que todavía no tiene la capacidad de generar ese mecanismo', 'Ninguno de los datos de este caso amerita ninguna sospecha real de maltrato físico infantil', 'La presencia de una fractura en un lactante siempre es un hallazgo esperado y sin ninguna relevancia clínica adicional', 'El hecho de que el cuidador haya proporcionado una explicación sobre el mecanismo de la lesión descarta cualquier sospecha de maltrato'],
  ok:0,
  clave:'La inconsistencia entre el mecanismo relatado y el desarrollo motor esperado para la edad del niño, que todavía no tiene la capacidad de generar ese mecanismo.',
  exp:'El dato de la inconsistencia entre la historia relatada y el hallazgo físico es la señal más importante: atribuir una fractura a una caída en un lactante que todavía no tiene la capacidad motora de generar ese mecanismo es un ejemplo clásico de esta inconsistencia.',
  no:{
    1:'Este caso sí presenta un dato que amerita sospecha real: la inconsistencia entre el mecanismo relatado y el desarrollo motor esperado.',
    2:'Una fractura en un lactante de esta edad, sin un mecanismo consistente que la explique, sí es un hallazgo clínicamente relevante.',
    3:'Proporcionar una explicación no descarta la sospecha si esa explicación es inconsistente con el desarrollo motor esperado del niño.'
  },
  trampa:'Aceptar sin cuestionar una explicación proporcionada por el cuidador, sin verificar si es consistente con el desarrollo motor esperado del niño.',
  obj:'Aplicar el reconocimiento de la inconsistencia entre historia y desarrollo motor como dato central de sospecha de maltrato.',
  ref:'Nelson, Tratado de Pediatría, cap. 4.',
  tags:['maltrato físico infantil','inconsistencia como señal de alarma']
},
{
  id:'U11-PED1-Q41', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Maltrato infantil', sub:'Negligencia infantil como maltrato por omisión',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue a la negligencia infantil del maltrato físico, según lo visto en este tema?',
  ops:[
    'La negligencia es una forma de maltrato por omisión (falta de provisión de necesidades básicas de forma sostenida), mientras el maltrato físico es una acción directa', 'Ambas formas de maltrato son exactamente idénticas en su presentación clínica y en su forma de identificarse', 'La negligencia infantil siempre es más fácil de detectar en un único examen físico que el maltrato físico directo', 'La negligencia infantil nunca tiene consecuencias reales sobre el crecimiento o el desarrollo del niño afectado'],
  ok:0,
  clave:'La negligencia es una forma de maltrato por omisión (falta de provisión de necesidades básicas de forma sostenida), mientras el maltrato físico es una acción directa.',
  exp:'La negligencia infantil es la falta de provisión de las necesidades básicas del niño de forma sostenida, una forma de maltrato por omisión, con frecuencia menos visible en un examen físico único, a diferencia del maltrato físico que es una acción directa.',
  no:{
    1:'Son formas distintas de maltrato, con presentaciones y formas de identificación diferentes entre sí.',
    2:'Es precisamente lo contrario: la negligencia es MENOS visible en un examen físico único que el maltrato físico directo.',
    3:'La negligencia infantil sí tiene consecuencias reales acumulativas sobre el crecimiento y el desarrollo del niño.'
  },
  trampa:'Confundir la negligencia (omisión sostenida) con el maltrato físico (acción directa), o asumir que ambas se detectan de la misma forma.',
  obj:'Distinguir la negligencia infantil del maltrato físico como formas distintas de maltrato.',
  ref:'Nelson, Tratado de Pediatría, cap. 4.',
  tags:['negligencia infantil','maltrato por omisión']
},
{
  id:'U11-PED1-Q42', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Maltrato infantil', sub:'El umbral para la notificación obligatoria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el umbral apropiado para que un profesional de salud notifique una sospecha de maltrato infantil?',
  ops:[
    'La sospecha razonable basada en los hallazgos, no la certeza absoluta del maltrato', 'El profesional de salud debe esperar a tener una certeza absoluta del maltrato antes de notificar cualquier sospecha', 'La notificación de maltrato infantil nunca es responsabilidad legal ni ética del profesional de salud que lo atiende', 'Solo debe notificarse cuando el propio cuidador confiesa espontáneamente haber cometido el maltrato'],
  ok:0,
  clave:'La sospecha razonable basada en los hallazgos, no la certeza absoluta del maltrato.',
  exp:'El umbral para notificar no es la certeza del maltrato, sino la sospecha razonable basada en los hallazgos, precisamente porque esperar una certeza total antes de actuar puede significar una demora que ponga al niño en mayor riesgo.',
  no:{
    1:'Es precisamente lo contrario: esperar la certeza absoluta retrasa la notificación y puede poner al niño en mayor riesgo.',
    2:'La notificación de maltrato infantil sí es una responsabilidad legal y ética central del profesional de salud.',
    3:'La notificación no depende de una confesión del cuidador; se basa en la sospecha razonable derivada de los hallazgos clínicos.'
  },
  trampa:'Esperar una certeza absoluta del maltrato antes de notificar, retrasando una acción que debería basarse solo en sospecha razonable.',
  obj:'Explicar el umbral apropiado (sospecha razonable, no certeza absoluta) para la notificación obligatoria de maltrato infantil.',
  ref:'Nelson, Tratado de Pediatría, cap. 4.',
  tags:['notificación obligatoria de maltrato','umbral de sospecha razonable']
},
{
  id:'U11-PED1-Q43', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Trastornos del desarrollo psicomotor', sub:'La regresión del desarrollo como signo de alarma',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la pérdida de una habilidad del desarrollo ya adquirida (regresión) se considera un signo de alarma particularmente preocupante?',
  ops:[
    'Porque es distinta de un simple retraso en la adquisición de un hito nuevo, y siempre amerita evaluación urgente', 'La pérdida de una habilidad ya adquirida nunca tiene ninguna relevancia clínica real distinta de un simple retraso del desarrollo', 'La regresión del desarrollo es un hallazgo esperado y normal en cualquier etapa del crecimiento infantil', 'Un retraso en la adquisición de un hito nuevo siempre es clínicamente más preocupante que la pérdida de una habilidad ya adquirida'],
  ok:0,
  clave:'Porque es distinta de un simple retraso en la adquisición de un hito nuevo, y siempre amerita evaluación urgente.',
  exp:'La pérdida de una habilidad ya adquirida (regresión del desarrollo) es un hallazgo particularmente preocupante que siempre amerita evaluación urgente, distinto de un simple retraso en la adquisición de un hito nuevo.',
  no:{
    1:'Es precisamente lo contrario: la regresión SÍ tiene una relevancia clínica particular y distinta de un simple retraso.',
    2:'La regresión del desarrollo NO es un hallazgo esperado ni normal; es un signo de alarma que amerita evaluación urgente.',
    3:'Es precisamente lo contrario: la regresión (pérdida de habilidad) es MÁS preocupante que un simple retraso en adquirir un hito nuevo.'
  },
  trampa:'Equiparar la regresión del desarrollo (pérdida de habilidad ya adquirida) con un simple retraso en adquirir un hito nuevo, sin reconocer su mayor gravedad.',
  obj:'Explicar por qué la regresión del desarrollo es un signo de alarma más preocupante que un simple retraso.',
  ref:'Nelson, Tratado de Pediatría, cap. 2.',
  tags:['retraso del desarrollo psicomotor','regresión del desarrollo']
},
{
  id:'U11-PED1-Q44', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Trastornos del desarrollo psicomotor', sub:'Por qué usar herramientas de tamizaje estandarizadas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es preferible usar herramientas de tamizaje del desarrollo estandarizadas, en vez de depender únicamente de la impresión clínica subjetiva?',
  ops:[
    'Porque un retraso del desarrollo, especialmente en sus formas más leves, puede no ser evidente en una evaluación clínica breve y no estructurada', 'Las herramientas de tamizaje estandarizadas nunca aportan ninguna ventaja real frente a la impresión clínica subjetiva del profesional', 'La impresión subjetiva del profesional siempre detecta con la misma precisión un retraso del desarrollo, sin importar su severidad', 'El tamizaje estandarizado del desarrollo es un procedimiento innecesario que no aporta ningún valor clínico adicional real'],
  ok:0,
  clave:'Porque un retraso del desarrollo, especialmente en sus formas más leves, puede no ser evidente en una evaluación clínica breve y no estructurada.',
  exp:'Las herramientas de tamizaje estandarizadas reducen la probabilidad de que un retraso real pase desapercibido simplemente porque el niño "se veía bien" en una impresión general poco sistemática, especialmente en las formas más leves de retraso.',
  no:{
    1:'Estas herramientas sí aportan una ventaja real, detectando retrasos que podrían pasar desapercibidos en una evaluación no estructurada.',
    2:'Es precisamente lo contrario: la impresión subjetiva puede NO detectar retrasos leves que sí detecta el tamizaje estandarizado.',
    3:'El tamizaje estandarizado sí aporta un valor clínico real, especialmente para detectar retrasos leves del desarrollo.'
  },
  trampa:'Confiar exclusivamente en la impresión clínica subjetiva para evaluar el desarrollo, sin reconocer el valor de las herramientas de tamizaje estandarizadas.',
  obj:'Explicar por qué el tamizaje estandarizado del desarrollo es preferible a la impresión clínica subjetiva no estructurada.',
  ref:'Nelson, Tratado de Pediatría, cap. 2.',
  tags:['tamizaje del desarrollo','herramientas estandarizadas']
},
{
  id:'U11-PED1-Q45', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Deshidratación en pediatría', sub:'Causas de deshidratación más allá de la diarrea',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la evaluación por grados de deshidratación no es exclusiva de los cuadros de diarrea aguda?',
  ops:[
    'Porque cualquier condición que genere una pérdida significativa de líquidos (vómitos persistentes, fiebre alta sostenida, ingesta oral insuficiente) puede llevar a distintos grados de deshidratación', 'La deshidratación en pediatría únicamente puede ser causada por cuadros de diarrea aguda, sin ninguna otra causa posible', 'Los vómitos persistentes o la fiebre alta sostenida nunca tienen ninguna relación real con el desarrollo de deshidratación', 'La evaluación clínica por grados de deshidratación solo es aplicable específicamente a los cuadros de diarrea aguda infantil'],
  ok:0,
  clave:'Porque cualquier condición que genere una pérdida significativa de líquidos (vómitos persistentes, fiebre alta sostenida, ingesta oral insuficiente) puede llevar a distintos grados de deshidratación.',
  exp:'Esta evaluación por grados no es exclusiva de la diarrea: cualquier condición que genere una pérdida significativa de líquidos puede llevar a distintos grados de deshidratación, y la misma lógica de evaluación clínica sistemática aplica sin importar la causa subyacente específica.',
  no:{
    1:'La deshidratación puede tener múltiples causas más allá de la diarrea aguda, como vómitos persistentes o ingesta insuficiente.',
    2:'Los vómitos persistentes y la fiebre alta sostenida sí tienen una relación directa con el desarrollo de deshidratación en el niño.',
    3:'La evaluación por grados de deshidratación aplica a cualquier causa, no exclusivamente a los cuadros de diarrea aguda infantil.'
  },
  trampa:'Asumir que la deshidratación en pediatría solo puede ser causada por diarrea aguda, sin reconocer otras causas posibles de pérdida de líquidos.',
  obj:'Explicar por qué la evaluación por grados de deshidratación aplica a múltiples causas, no solo a la diarrea aguda.',
  ref:'Nelson, Tratado de Pediatría, cap. 27.',
  tags:['grados de deshidratación','causas más allá de la diarrea']
},
{
  id:'U11-PED1-Q46', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Deshidratación en pediatría', sub:'Cuándo la rehidratación intravenosa es necesaria',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño con deshidratación leve a moderada por diarrea recibe rehidratación oral, pero presenta vómitos persistentes que impiden tolerar adecuadamente la vía oral, sin lograr corregir el déficit.',
  enunciado:'¿Qué conducta es apropiada ante este escenario, según lo visto en este tema?',
  ops:[
    'Considerar la rehidratación intravenosa, ya que la rehidratación oral ya intentada ha fracasado en corregir el déficit', 'Continuar insistiendo exclusivamente con la rehidratación oral, sin ninguna otra alternativa posible ante el fracaso observado', 'Suspender por completo cualquier intento de rehidratación, ya que el fracaso de la vía oral indica que no hay manejo posible', 'La vía intravenosa nunca está indicada en un niño con deshidratación clasificada inicialmente como leve a moderada'],
  ok:0,
  clave:'Considerar la rehidratación intravenosa, ya que la rehidratación oral ya intentada ha fracasado en corregir el déficit.',
  exp:'La rehidratación intravenosa está indicada quando la rehidratación oral ya intentada ha fracasado en corregir el déficit, o cuando el niño no tolera la vía oral por vómitos persistentes -exactamente el escenario descrito en este caso.',
  no:{
    1:'Insistir exclusivamente con la vía oral, ante un fracaso ya comprobado, retrasa una intervención que el niño necesita de forma más urgente.',
    2:'Suspender cualquier intento de rehidratación no es apropiado; existe una alternativa clara (la vía intravenosa) ante este escenario.',
    3:'La vía intravenosa sí puede estar indicada incluso en deshidratación leve a moderada, cuando la vía oral fracasa comprobadamente.'
  },
  trampa:'Insistir con la rehidratación oral incluso después de un fracaso comprobado, sin considerar la vía intravenosa como alternativa apropiada.',
  obj:'Aplicar la decisión de escalar a rehidratación intravenosa ante el fracaso comprobado de la rehidratación oral.',
  ref:'Nelson, Tratado de Pediatría, cap. 27.',
  tags:['rehidratación intravenosa pediátrica','fracaso de la vía oral']
},
{
  id:'U11-PED1-Q47', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Dolor abdominal en el niño', sub:'Cuándo considerar el dolor abdominal como funcional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Bajo qué condición es apropiado diagnosticar dolor abdominal recurrente infantil como un cuadro funcional?',
  ops:[
    'Solo después de descartar razonablemente causas orgánicas mediante la historia clínica y el examen físico, buscando activamente signos de alarma', 'El diagnóstico de dolor abdominal funcional siempre puede establecerse de inmediato, sin necesidad de descartar ninguna causa orgánica', 'Cualquier dolor abdominal recurrente en un niño en edad escolar debe considerarse automáticamente de origen funcional', 'El diagnóstico funcional nunca requiere ninguna evaluación clínica previa antes de establecerse con seguridad'],
  ok:0,
  clave:'Solo después de descartar razonablemente causas orgánicas mediante la historia clínica y el examen físico, buscando activamente signos de alarma.',
  exp:'Este diagnóstico funcional debe hacerse solo después de descartar razonablemente causas orgánicas mediante la historia clínica y el examen físico, buscando activamente signos de alarma que orientarían hacia una causa orgánica que requiere estudio adicional.',
  no:{
    1:'Es precisamente lo contrario: el diagnóstico funcional requiere descartar razonablemente causas orgánicas primero, no establecerse de inmediato.',
    2:'No todo dolor abdominal recurrente en edad escolar es automáticamente funcional; se requiere descartar causas orgánicas primero.',
    3:'El diagnóstico funcional sí requiere una evaluación clínica previa que descarte razonablemente signos de alarma orgánicos.'
  },
  trampa:'Diagnosticar dolor abdominal funcional de forma automática, sin buscar activamente signos de alarma que orienten hacia una causa orgánica.',
  obj:'Explicar la condición apropiada (descartar causas orgánicas primero) para diagnosticar dolor abdominal funcional.',
  ref:'Nelson, Tratado de Pediatría, cap. 28.',
  tags:['dolor abdominal recurrente infantil','descartar causa orgánica primero']
},
{
  id:'U11-PED1-Q48', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Dolor abdominal en el niño', sub:'Dificultad diagnóstica del abdomen agudo en niños pequeños',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el diagnóstico de abdomen agudo pediátrico puede ser más difícil en niños pequeños que en niños mayores?',
  ops:[
    'Porque los niños pequeños con frecuencia no logran describir con precisión la localización o las características del dolor', 'El diagnóstico de abdomen agudo es siempre igual de fácil en niños pequeños que en niños mayores, sin ninguna diferencia real', 'Los niños pequeños siempre describen con total precisión la localización exacta de cualquier dolor abdominal que experimentan', 'La dificultad diagnóstica del abdomen agudo nunca tiene ninguna relación real con la edad del paciente pediátrico evaluado'],
  ok:0,
  clave:'Porque los niños pequeños con frecuencia no logran describir con precisión la localización o las características del dolor.',
  exp:'El diagnóstico puede ser más difícil en niños pequeños, que con frecuencia no logran describir con precisión la localización o las características del dolor, retomando la importancia de adaptar la evaluación clínica a la edad del paciente.',
  no:{
    1:'Es precisamente lo contrario: el diagnóstico ES más difícil en niños pequeños, precisamente por esta limitación descriptiva.',
    2:'Los niños pequeños con frecuencia NO logran describir con precisión la localización exacta del dolor que experimentan.',
    3:'La dificultad diagnóstica sí tiene una relación directa con la edad del paciente, siendo mayor en niños más pequeños.'
  },
  trampa:'Asumir que un niño pequeño puede describir su dolor abdominal con la misma precisión que un niño mayor o un adulto.',
  obj:'Explicar por qué el diagnóstico de abdomen agudo es más difícil en niños pequeños que en niños mayores.',
  ref:'Nelson, Tratado de Pediatría, cap. 28.',
  tags:['abdomen agudo pediátrico','dificultad diagnóstica por edad']
},
{
  id:'U11-PED1-Q49', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Dolor abdominal en el niño', sub:'Distinguir el cólico del lactante de otras causas de llanto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De qué depende distinguir el cólico del lactante de otras causas de llanto persistente que sí requieren evaluación más profunda?',
  ops:[
    'De una evaluación clínica cuidadosa que confirme que el lactante está sano y creciendo adecuadamente entre los episodios de llanto', 'El cólico del lactante nunca requiere ninguna distinción real frente a otras causas de llanto persistente en este grupo de edad', 'Cualquier llanto excesivo e inconsolable en un lactante debe considerarse automáticamente como cólico del lactante, sin evaluación adicional', 'Distinguir el cólico del lactante de otras causas de llanto no tiene ninguna relación real con el crecimiento del niño'],
  ok:0,
  clave:'De una evaluación clínica cuidadosa que confirme que el lactante está sano y creciendo adecuadamente entre los episodios de llanto.',
  exp:'Distinguir el cólico del lactante de otras causas de llanto persistente -que sí requieren evaluación más profunda- depende de una evaluación clínica cuidadosa que confirme que el lactante está sano y creciendo adecuadamente entre los episodios de llanto.',
  no:{
    1:'Sí es necesaria esta distinción, ya que otras causas de llanto persistente sí requieren una evaluación más profunda.',
    2:'No todo llanto excesivo debe asumirse automáticamente como cólico; requiere confirmar que el lactante está sano y creciendo bien.',
    3:'Esta distinción sí tiene una relación directa con el crecimiento del niño, usado como referencia tranquilizadora entre episodios.'
  },
  trampa:'Asumir automáticamente que cualquier llanto excesivo e inconsolable en un lactante corresponde a cólico del lactante, sin evaluación clínica adicional.',
  obj:'Explicar de qué depende distinguir el cólico del lactante de otras causas de llanto persistente que requieren evaluación.',
  ref:'Nelson, Tratado de Pediatría, cap. 28.',
  tags:['cólico del lactante','distinción de otras causas de llanto']
},
{
  id:'U11-PED1-Q50', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Urgencias pediátricas comunes', sub:'Manejo según el grado de obstrucción por cuerpo extraño',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño de dos años presenta un episodio de atragantamiento con un trozo de alimento. Todavía puede toser con fuerza y emitir algún sonido, aunque con dificultad evidente.',
  enunciado:'¿Qué conducta es apropiada ante este grado de obstrucción de la vía aérea, según lo visto en este tema?',
  ops:[
    'Permitir que el propio reflejo de tos intente expulsar el objeto, sin realizar maniobras que puedan empeorar la situación', 'Realizar de inmediato maniobras de desobstrucción de emergencia, sin importar que el niño todavía pueda toser y emitir sonido', 'Introducir los dedos en la boca del niño para intentar extraer manualmente el objeto que causa la obstrucción', 'No existe ninguna diferencia en el manejo entre una obstrucción completa y una obstrucción parcial de la vía aérea'],
  ok:0,
  clave:'Permitir que el propio reflejo de tos intente expulsar el objeto, sin realizar maniobras que puedan empeorar la situación.',
  exp:'Si la obstrucción es parcial (el niño todavía puede toser o emitir algún sonido), se debe permitir que el propio reflejo de tos intente expulsar el objeto, sin maniobras que puedan empeorar la situación -a diferencia de la obstrucción completa, que sí requiere maniobras de desobstrucción inmediatas.',
  no:{
    1:'Realizar maniobras de emergencia en una obstrucción PARCIAL, donde el niño aún tose, puede empeorar la situación innecesariamente.',
    2:'Introducir los dedos a ciegas en la boca del niño es una maniobra desaconsejada, que puede empujar el objeto más profundamente.',
    3:'Sí existe una diferencia clara en el manejo: obstrucción completa requiere maniobras inmediatas, la parcial permite el reflejo de tos.'
  },
  trampa:'Aplicar maniobras de desobstrucción de emergencia en un caso de obstrucción parcial, donde el niño todavía puede toser y emitir sonido.',
  obj:'Aplicar el manejo correcto según el grado de obstrucción (completa vs. parcial) de la vía aérea por cuerpo extraño en el niño.',
  ref:'Nelson, Tratado de Pediatría, cap. 31.',
  tags:['cuerpo extraño en vía aérea infantil','obstrucción parcial vs. completa']
}

]);
