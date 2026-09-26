/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE ANATOMIA PATOLOGICA II (1/2)
   Primer banco del cuatrimestre 10. Prefijo U10-AP2-. Esta parte
   cubre patologia cardiovascular, respiratoria, gastrointestinal,
   hepatobiliar, renal, endocrina y de mama (temas 1-7).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ANATOMIA PATOLOGICA II ===================== */
{
  id:'U10-AP2-Q01', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología cardiovascular', sub:'Mecanismo del infarto agudo de miocardio',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué evento desencadena típicamente un infarto agudo de miocardio, más allá del estrechamiento gradual de la arteria coronaria?',
  ops:[
    'La ruptura de la cápsula fibrosa de una placa ateromatosa, exponiendo su contenido trombogénico y formando un trombo que ocluye la luz de forma súbita',
    'El infarto de miocardio ocurre siempre por un estrechamiento progresivo y gradual, sin ningún evento súbito desencadenante', 'La ruptura de la placa ateromatosa nunca tiene relación con la formación de un trombo oclusivo', 'El infarto de miocardio se debe exclusivamente a un espasmo arterial sin ninguna placa ateromatosa subyacente'],
  ok:0,
  clave:'La ruptura de la cápsula fibrosa de la placa expone su contenido trombogénico, formando un trombo que ocluye la luz de forma súbita.',
  exp:'Si la cápsula fibrosa de una placa ateromatosa se rompe, el contenido lipídico trombogénico queda expuesto a la sangre, formando un trombo que puede ocluir la luz del vaso de forma súbita -el mecanismo detrás de la mayoría de los infartos agudos, no un estrechamiento gradual y silencioso como suele imaginarse.',
  no:{
    1:'Es precisamente lo contrario: el infarto agudo típicamente ocurre por un evento súbito (ruptura de placa), no por un estrechamiento puramente gradual.',
    2:'La ruptura de la placa sí tiene una relación causal directa y bien establecida con la formación del trombo oclusivo que causa el infarto.',
    3:'Aunque el espasmo arterial puede contribuir en algunos casos, el mecanismo predominante del infarto es la ruptura de placa con trombosis, no espasmo aislado.'
  },
  trampa:'Asumir que el infarto ocurre por un estrechamiento puramente progresivo y silencioso, sin reconocer el evento súbito de ruptura de placa como mecanismo predominante.',
  obj:'Explicar el mecanismo de ruptura de placa como desencadenante del infarto agudo de miocardio.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 11-12.',
  tags:['infarto de miocardio','ruptura de placa','aterosclerosis']
},
{
  id:'U10-AP2-Q02', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología cardiovascular', sub:'Miocardiopatía hipertrófica vs. dilatada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencia la miocardiopatía hipertrófica de la dilatada?',
  ops:[
    'En la hipertrófica el músculo se engrosa de forma anormal, a veces obstruyendo el flujo de salida; en la dilatada el corazón se agranda y bombea débilmente',
    'Ambas miocardiopatías son exactamente el mismo proceso, solo con nombres distintos', 'En la hipertrófica el corazón se agranda y bombea débilmente; en la dilatada el músculo se engrosa de forma anormal', 'Ninguna de las dos miocardiopatías puede progresar hacia insuficiencia cardíaca'],
  ok:0,
  clave:'En la hipertrófica el músculo se engrosa de forma anormal, a veces obstruyendo el flujo de salida; en la dilatada el corazón se agranda y bombea débilmente.',
  exp:'Las miocardiopatías son enfermedades del músculo cardíaco en sí: la dilatada (el corazón se agranda y bombea débilmente), la hipertrófica (el músculo se engrosa de forma anormal, a veces obstruyendo el flujo de salida) y la restrictiva (el músculo se vuelve rígido, dificultando el llenado) tienen mecanismos y pronósticos distintos, aunque las tres puedan terminar en insuficiencia cardíaca.',
  no:{
    1:'Son procesos distintos con mecanismos y pronósticos diferentes, no el mismo proceso con nombres intercambiables.',
    2:'Está invertido: la HIPERTRÓFICA engrosa el músculo, y la DILATADA agranda el corazón con bombeo débil, no al revés.',
    3:'Las tres miocardiopatías (dilatada, hipertrófica, restrictiva) pueden, de hecho, terminar en insuficiencia cardíaca, aunque por mecanismos distintos.'
  },
  trampa:'Invertir las características de la miocardiopatía hipertrófica y la dilatada, o asumir que son el mismo proceso.',
  obj:'Distinguir la miocardiopatía hipertrófica de la dilatada.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 11-12.',
  tags:['miocardiopatía hipertrófica','miocardiopatía dilatada','insuficiencia cardíaca']
},
{
  id:'U10-AP2-Q03', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología cardiovascular', sub:'Endocarditis y émbolos sépticos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con antecedente de uso de drogas intravenosas presenta fiebre prolongada, un soplo cardíaco nuevo y lesiones cutáneas dolorosas en las yemas de los dedos.',
  enunciado:'¿Qué mecanismo explica que las vegetaciones de la endocarditis puedan producir manifestaciones en órganos distantes del corazón?',
  ops:[
    'Fragmentos de la vegetación (fibrina, plaquetas y microorganismos) pueden desprenderse y viajar como émbolos sépticos hacia otros órganos',
    'Las vegetaciones de la endocarditis nunca pueden desprenderse ni causar ningún efecto fuera del corazón', 'Las manifestaciones cutáneas en la endocarditis no tienen ninguna relación con el proceso infeccioso cardíaco', 'La endocarditis solo afecta al corazón, sin ninguna posibilidad de diseminación a distancia'],
  ok:0,
  clave:'Fragmentos de la vegetación pueden desprenderse y viajar como émbolos sépticos hacia otros órganos, incluida la piel.',
  exp:'La endocarditis es la infección del endocardio, formando vegetaciones (masas de fibrina, plaquetas y microorganismos) que pueden destruir la válvula o desprenderse como émbolos sépticos hacia otros órganos -el mecanismo detrás de manifestaciones cutáneas y de otros órganos, como las descritas en este caso, en un paciente con fiebre y soplo cardíaco nuevo.',
  no:{
    1:'Las vegetaciones sí pueden desprenderse como émbolos sépticos, precisamente el mecanismo que explica manifestaciones a distancia del corazón.',
    2:'Las manifestaciones cutáneas en la endocarditis sí tienen una relación causal directa con el proceso infeccioso, vía émbolos sépticos.',
    3:'La endocarditis puede diseminarse a distancia precisamente mediante émbolos que se desprenden de las vegetaciones cardíacas.'
  },
  trampa:'No reconocer el mecanismo de embolización séptica como explicación de manifestaciones extracardíacas de la endocarditis.',
  obj:'Explicar el mecanismo por el cual la endocarditis puede producir manifestaciones a distancia del corazón.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 11-12.',
  tags:['endocarditis','émbolo séptico','vegetación']
},
{
  id:'U10-AP2-Q04', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología cardiovascular', sub:'Aterosclerosis como proceso multiterritorial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un paciente con enfermedad coronaria significativa tiene alta probabilidad de tener aterosclerosis avanzando también en otros territorios vasculares?',
  ops:[
    'Porque la aterosclerosis es un proceso sistémico que rara vez afecta un solo territorio vascular de forma aislada',
    'La aterosclerosis siempre afecta exclusivamente a las arterias coronarias, sin ningún riesgo para otros territorios', 'No existe ninguna relación entre la enfermedad coronaria y la aterosclerosis en otros territorios vasculares', 'La aterosclerosis coronaria y la de otros territorios son procesos biológicos completamente independientes entre sí'],
  ok:0,
  clave:'La aterosclerosis es un proceso sistémico que rara vez afecta un solo territorio vascular de forma aislada.',
  exp:'La aterosclerosis rara vez afecta un solo territorio vascular; un paciente con enfermedad coronaria significativa tiene, con alta probabilidad, el mismo proceso avanzando en sus arterias cerebrales y periféricas, aunque todavía no haya dado síntomas ahí -los mismos factores de riesgo sistémicos (tabaquismo, hipertensión, diabetes, dislipidemia) actúan sobre todo el árbol arterial, no sobre un solo vaso.',
  no:{
    1:'Es precisamente lo contrario: la aterosclerosis coronaria frecuentemente coexiste con aterosclerosis en otros territorios vasculares.',
    2:'Sí existe una relación real: los mismos factores de riesgo sistémicos afectan simultáneamente a múltiples territorios vasculares.',
    3:'Son manifestaciones del MISMO proceso sistémico subyacente, no procesos biológicos independientes entre sí.'
  },
  trampa:'Asumir que la aterosclerosis es un proceso localizado a un solo vaso o territorio, sin reconocer su naturaleza sistémica.',
  obj:'Explicar por qué la aterosclerosis coronaria sugiere un proceso similar en otros territorios vasculares.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 11-12.',
  tags:['aterosclerosis sistémica','factores de riesgo compartidos','multiterritorial']
},
{
  id:'U10-AP2-Q05', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología respiratoria', sub:'Patrón lobar vs. bronconeumónico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el patrón lobar y el patrón bronconeumónico de una neumonía?',
  ops:[
    'El lobar consolida un lóbulo pulmonar entero; el bronconeumónico forma parches dispersos alrededor de los bronquios',
    'Ambos patrones son exactamente el mismo, solo con nombres distintos según el hospital donde se describan', 'El patrón lobar forma parches dispersos, y el bronconeumónico consolida un lóbulo entero', 'Ninguno de los dos patrones tiene relación con el tipo de microorganismo causante de la neumonía'],
  ok:0,
  clave:'El lobar consolida un lóbulo pulmonar entero; el bronconeumónico forma parches dispersos alrededor de los bronquios.',
  exp:'La neumonía puede seguir un patrón lobar (consolidación de un lóbulo entero, clásicamente por neumococo) o bronconeumónico (parches dispersos alrededor de los bronquios), una distinción que retoma directamente la clasificación de neumonía ya vista en Microbiología Médica.',
  no:{
    1:'Son patrones anatómicos distintos, no nombres intercambiables para el mismo proceso.',
    2:'Está invertido: el patrón LOBAR consolida un lóbulo entero, y el BRONCONEUMÓNICO forma parches dispersos, no al revés.',
    3:'El patrón sí puede sugerir, aunque no de forma absoluta, el tipo de microorganismo causante más probable (el lobar clásicamente asociado a neumococo).'
  },
  trampa:'Invertir las características del patrón lobar y bronconeumónico, o asumir que son sinónimos.',
  obj:'Distinguir el patrón lobar del bronconeumónico en la neumonía.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 15.',
  tags:['neumonía lobar','bronconeumonía','patrón anatómico']
},
{
  id:'U10-AP2-Q06', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología respiratoria', sub:'Mecanismo del atrapamiento aéreo en enfisema',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el enfisema produce atrapamiento de aire durante la espiración?',
  ops:[
    'Porque la pérdida del soporte elástico normal, destruido junto con las paredes alveolares, hace que las vías aéreas pequeñas colapsen prematuramente durante la espiración',
    'El atrapamiento de aire en el enfisema no tiene ninguna relación con la pérdida de soporte elástico del tejido pulmonar', 'El enfisema produce atrapamiento aéreo por un exceso de tejido fibroso, no por destrucción de tejido', 'El atrapamiento de aire ocurre exclusivamente durante la inspiración, nunca durante la espiración'],
  ok:0,
  clave:'La pérdida del soporte elástico, destruido junto con las paredes alveolares, hace que las vías aéreas pequeñas colapsen prematuramente durante la espiración.',
  exp:'Al perderse el soporte elástico que mantiene abiertas las vías aéreas pequeñas durante la espiración, el enfisema atrapa aire -el mecanismo detrás de la hiperinsuflación característica del enfisema, distinto del mecanismo puramente inflamatorio de la neumonía.',
  no:{
    1:'La pérdida de soporte elástico tiene una relación causal directa y central con el atrapamiento aéreo característico del enfisema.',
    2:'Es precisamente lo contrario: el enfisema es un proceso de DESTRUCCIÓN de tejido, no de exceso de tejido fibroso (eso describiría más bien la fibrosis pulmonar).',
    3:'El atrapamiento de aire en el enfisema ocurre característicamente durante la ESPIRACIÓN, no la inspiración.'
  },
  trampa:'Confundir el mecanismo del enfisema (destrucción, pérdida de soporte elástico) con el de la fibrosis (exceso de tejido), o invertir la fase respiratoria afectada.',
  obj:'Explicar el mecanismo del atrapamiento aéreo en el enfisema.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 15.',
  tags:['enfisema','atrapamiento aéreo','pérdida de soporte elástico']
},
{
  id:'U10-AP2-Q07', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología respiratoria', sub:'Patrón obstructivo vs. restrictivo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia central entre un patrón obstructivo (enfisema) y uno restrictivo (fibrosis pulmonar)?',
  ops:[
    'En el obstructivo el aire entra pero cuesta salir; en el restrictivo el pulmón simplemente no se expande bien',
    'Ambos patrones producen exactamente el mismo problema funcional, sin ninguna diferencia real', 'En el obstructivo el pulmón no se expande bien; en el restrictivo el aire entra pero cuesta salir', 'Ninguno de los dos patrones afecta realmente el intercambio gaseoso pulmonar'],
  ok:0,
  clave:'En el obstructivo el aire entra pero cuesta salir; en el restrictivo el pulmón simplemente no se expande bien.',
  exp:'Distinguir un patrón obstructivo (enfisema, donde el aire entra pero cuesta salir) de uno restrictivo (fibrosis, donde el pulmón simplemente no se expande bien) es la primera pregunta ante cualquier prueba de función pulmonar anormal, antes de buscar la causa específica.',
  no:{
    1:'Son patrones funcionales claramente distintos, con mecanismos e implicaciones diagnósticas diferentes.',
    2:'Está invertido: el OBSTRUCTIVO dificulta la salida del aire, y el RESTRICTIVO dificulta la expansión pulmonar, no al revés.',
    3:'Ambos patrones sí afectan el intercambio gaseoso, aunque por mecanismos distintos (pérdida de superficie en el enfisema, rigidez en la fibrosis).'
  },
  trampa:'Invertir las características del patrón obstructivo y restrictivo, o asumir que ambos son funcionalmente equivalentes.',
  obj:'Distinguir el patrón obstructivo del restrictivo en la patología pulmonar.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 15.',
  tags:['patrón obstructivo','patrón restrictivo','función pulmonar']
},
{
  id:'U10-AP2-Q08', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología respiratoria', sub:'Carcinoma de células pequeñas vs. no pequeñas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia general de comportamiento hay entre el carcinoma pulmonar de células pequeñas y el de células no pequeñas?',
  ops:[
    'El de células pequeñas es de crecimiento agresivo y con frecuencia ya diseminado al diagnóstico; el de células no pequeñas tiene un crecimiento relativamente más lento',
    'Ambos tipos de carcinoma pulmonar tienen exactamente el mismo comportamiento clínico y pronóstico', 'El de células pequeñas tiene un crecimiento más lento, y el de células no pequeñas es más agresivo', 'Ninguno de los dos tipos de carcinoma pulmonar se asocia con el tabaquismo'],
  ok:0,
  clave:'El de células pequeñas es de crecimiento agresivo y con frecuencia ya diseminado al diagnóstico; el de células no pequeñas tiene un crecimiento relativamente más lento.',
  exp:'El carcinoma pulmonar se clasifica en dos grandes grupos: el de células no pequeñas (adenocarcinoma, epidermoide, de células grandes), de crecimiento relativamente más lento, y el de células pequeñas, de crecimiento agresivo y con frecuencia ya diseminado al momento del diagnóstico. El tabaquismo es el factor de riesgo más determinante para ambos grupos.',
  no:{
    1:'Tienen comportamientos y pronósticos claramente distintos, no equivalentes entre sí.',
    2:'Está invertido: el de CÉLULAS PEQUEÑAS es el más agresivo, y el de CÉLULAS NO PEQUEÑAS tiene crecimiento más lento, no al revés.',
    3:'Ambos tipos se asocian fuertemente con el tabaquismo, siendo este el factor de riesgo más determinante para los dos grupos.'
  },
  trampa:'Invertir el comportamiento relativo entre el carcinoma de células pequeñas (más agresivo) y el de células no pequeñas (más lento).',
  obj:'Distinguir el comportamiento del carcinoma pulmonar de células pequeñas frente al de células no pequeñas.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 15.',
  tags:['carcinoma pulmonar','células pequeñas','tabaquismo']
},
{
  id:'U10-AP2-Q09', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del tracto gastrointestinal', sub:'Helicobacter pylori y su progresión',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la erradicación de Helicobacter pylori tiene un impacto que va más allá de aliviar los síntomas de gastritis?',
  ops:[
    'Su persistencia a largo plazo se asocia con un riesgo aumentado de úlcera péptica y, en un subgrupo de pacientes, de carcinoma gástrico',
    'Helicobacter pylori solo produce síntomas leves y transitorios, sin ningún riesgo a largo plazo asociado', 'La erradicación de Helicobacter pylori no tiene ningún impacto real sobre el riesgo de cáncer gástrico', 'Helicobacter pylori es una bacteria completamente inofensiva que nunca requiere tratamiento'],
  ok:0,
  clave:'Su persistencia a largo plazo se asocia con un riesgo aumentado de úlcera péptica y, en un subgrupo de pacientes, de carcinoma gástrico.',
  exp:'La infección por Helicobacter pylori es la causa más frecuente de gastritis crónica, y su persistencia a largo plazo se asocia con un riesgo aumentado de úlcera péptica y, en un subgrupo de pacientes, de carcinoma gástrico -una progresión que hace de la erradicación de esta bacteria una intervención con impacto real sobre el riesgo oncológico, no solo sintomático.',
  no:{
    1:'Su persistencia crónica sí se asocia con riesgos a largo plazo bien documentados, más allá de síntomas leves y transitorios.',
    2:'La erradicación sí tiene un impacto real sobre el riesgo de cáncer gástrico, al reducir la inflamación crónica que favorece esa progresión.',
    3:'Helicobacter pylori es la causa más frecuente de gastritis crónica y tiene riesgos asociados bien establecidos que justifican su tratamiento.'
  },
  trampa:'Subestimar el impacto de Helicobacter pylori a largo plazo, reduciéndolo a una infección leve sin consecuencias oncológicas relevantes.',
  obj:'Explicar el impacto de la erradicación de Helicobacter pylori más allá del alivio sintomático.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 17.',
  tags:['Helicobacter pylori','gastritis crónica','carcinoma gástrico']
},
{
  id:'U10-AP2-Q10', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del tracto gastrointestinal', sub:'Crohn vs. colitis ulcerosa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia de patrón anatómico distingue a la enfermedad de Crohn de la colitis ulcerosa?',
  ops:[
    'El Crohn afecta cualquier segmento del tracto digestivo de forma discontinua con inflamación transmural; la colitis ulcerosa se limita al colon con afectación continua de la mucosa',
    'Ambas enfermedades tienen exactamente el mismo patrón anatómico, solo con nombres distintos', 'El Crohn se limita al colon con afectación continua; la colitis ulcerosa afecta cualquier segmento de forma discontinua', 'Ninguna de las dos enfermedades puede causar fístulas ni estenosis intestinales'],
  ok:0,
  clave:'El Crohn afecta cualquier segmento del tracto digestivo de forma discontinua con inflamación transmural; la colitis ulcerosa se limita al colon con afectación continua de la mucosa.',
  exp:'La enfermedad de Crohn puede afectar cualquier segmento del tracto digestivo de forma discontinua ("en parches") con inflamación transmural; la colitis ulcerosa se limita al colon y afecta la mucosa de forma continua, empezando siempre en el recto y extendiéndose proximalmente sin zonas sanas intermedias.',
  no:{
    1:'Tienen patrones anatómicos claramente distintos, no son el mismo proceso con nombres intercambiables.',
    2:'Está invertido: el CROHN afecta cualquier segmento de forma discontinua, y la COLITIS ULCEROSA se limita al colon de forma continua, no al revés.',
    3:'El Crohn, precisamente por su inflamación transmural, sí puede causar fístulas y estenosis, a diferencia de la colitis ulcerosa limitada a la mucosa.'
  },
  trampa:'Invertir los patrones anatómicos del Crohn y la colitis ulcerosa, o asumir que ambas enfermedades tienen exactamente el mismo comportamiento.',
  obj:'Distinguir el patrón anatómico de la enfermedad de Crohn frente a la colitis ulcerosa.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 17.',
  tags:['enfermedad de Crohn','colitis ulcerosa','patrón anatómico','enfermedad inflamatoria intestinal']
},
{
  id:'U10-AP2-Q11', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del tracto gastrointestinal', sub:'Secuencia adenoma-carcinoma',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué fundamento biológico justifica el programa de tamizaje colonoscópico para prevenir el cáncer colorrectal?',
  ops:[
    'La mayoría de los carcinomas colorrectales se desarrollan siguiendo la secuencia adenoma-carcinoma, permitiendo detectar y extirpar pólipos adenomatosos antes de que se transformen en cáncer invasivo',
    'El cáncer colorrectal siempre aparece de forma súbita, sin ninguna fase previa detectable mediante colonoscopia', 'Los pólipos adenomatosos nunca tienen relación con el desarrollo posterior de un carcinoma colorrectal', 'La colonoscopia de tamizaje no tiene ningún fundamento biológico real que la justifique'],
  ok:0,
  clave:'La mayoría de los carcinomas colorrectales se desarrollan siguiendo la secuencia adenoma-carcinoma, permitiendo detectar y extirpar pólipos antes de que progresen.',
  exp:'El carcinoma colorrectal se desarrolla, en la gran mayoría de los casos, siguiendo la secuencia adenoma-carcinoma: mutaciones acumuladas transforman progresivamente un pólipo adenomatoso benigno en un carcinoma invasivo a lo largo de años -el fundamento biológico que justifica los programas de tamizaje colonoscópico, que buscan y extirpan pólipos adenomatosos antes de que completen esa transformación.',
  no:{
    1:'El cáncer colorrectal típicamente sí pasa primero por una fase de pólipo adenomatoso detectable, no aparece de forma completamente súbita.',
    2:'Los pólipos adenomatosos sí tienen una relación causal bien establecida con el desarrollo posterior de carcinoma colorrectal.',
    3:'La colonoscopia de tamizaje sí tiene un fundamento biológico sólido: la secuencia adenoma-carcinoma conocida y bien documentada.'
  },
  trampa:'No reconocer la secuencia adenoma-carcinoma como el fundamento biológico que justifica el tamizaje colonoscópico como prevención secundaria efectiva.',
  obj:'Explicar el fundamento biológico del tamizaje colonoscópico basado en la secuencia adenoma-carcinoma.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 17.',
  tags:['secuencia adenoma-carcinoma','tamizaje colonoscópico','pólipo adenomatoso','carcinoma colorrectal','pólipo colónico']
},
{
  id:'U10-AP2-Q12', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del tracto gastrointestinal', sub:'Pólipo hiperplásico vs. adenomatoso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia de riesgo hay entre un pólipo hiperplásico y uno adenomatoso del colon?',
  ops:[
    'Los pólipos hiperplásicos son generalmente benignos sin potencial maligno relevante, mientras que los adenomatosos sí tienen potencial de progresar hacia cáncer',
    'Ambos tipos de pólipo tienen exactamente el mismo riesgo de progresar hacia cáncer colorrectal', 'Los pólipos hiperplásicos tienen mayor riesgo de progresar a cáncer que los adenomatosos', 'Ningún tipo de pólipo colónico tiene relación real con el desarrollo de cáncer colorrectal'],
  ok:0,
  clave:'Los pólipos hiperplásicos son generalmente benignos sin potencial maligno relevante, mientras que los adenomatosos sí tienen potencial de progresar hacia cáncer.',
  exp:'No todos los pólipos tienen el mismo riesgo: los pólipos hiperplásicos son generalmente benignos sin potencial maligno relevante, mientras que los pólipos adenomatosos sí tienen potencial de progresar hacia cáncer, especialmente si son grandes o tienen ciertas características histológicas.',
  no:{
    1:'Tienen riesgos claramente distintos: los hiperplásicos son de bajo riesgo, los adenomatosos tienen riesgo real de progresión maligna.',
    2:'Es precisamente lo contrario: los ADENOMATOSOS tienen mayor riesgo de progresión maligna que los HIPERPLÁSICOS, no al revés.',
    3:'Los pólipos adenomatosos sí tienen una relación real y bien documentada con el desarrollo posterior de cáncer colorrectal.'
  },
  trampa:'Invertir el riesgo relativo entre pólipos hiperplásicos (bajo riesgo) y adenomatosos (mayor riesgo de progresión maligna).',
  obj:'Distinguir el riesgo de malignización entre un pólipo hiperplásico y uno adenomatoso.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 17.',
  tags:['pólipo hiperplásico','pólipo adenomatoso','riesgo de malignización','pólipo colónico']
},
{
  id:'U10-AP2-Q13', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología hepática y de vías biliares', sub:'Cronicidad de hepatitis viral',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el tamizaje de hepatitis B y C en poblaciones de riesgo tiene valor clínico real?',
  ops:[
    'Porque estas hepatitis tienen un riesgo relevante de volverse crónicas y mantener la inflamación activa durante años sin que el paciente lo perciba con claridad',
    'Las hepatitis B y C siempre son autolimitadas y se resuelven espontáneamente sin ninguna necesidad de tamizaje', 'El tamizaje de hepatitis B y C no tiene ningún valor clínico real, sin importar el riesgo de cronicidad', 'Todas las hepatitis virales (A a E) tienen exactamente el mismo riesgo de volverse crónicas'],
  ok:0,
  clave:'Estas hepatitis tienen un riesgo relevante de volverse crónicas y mantener la inflamación activa durante años sin que el paciente lo perciba con claridad.',
  exp:'Las hepatitis A y E son típicamente autolimitadas, mientras que las hepatitis B y C tienen un riesgo relevante de volverse crónicas, manteniendo la inflamación activa durante años sin que el paciente lo perciba con claridad -razón por la cual el tamizaje de hepatitis B y C en poblaciones de riesgo tiene valor real.',
  no:{
    1:'Es precisamente lo contrario: las hepatitis B y C tienen un riesgo relevante de CRONICIDAD, a diferencia de la A y la E, típicamente autolimitadas.',
    2:'El tamizaje sí tiene valor clínico real, precisamente por el carácter silencioso y el riesgo de cronicidad de estas hepatitis.',
    3:'No todas las hepatitis tienen el mismo riesgo de cronicidad; la A y la E son típicamente autolimitadas, a diferencia de la B y la C.'
  },
  trampa:'Asumir que todas las hepatitis virales tienen el mismo riesgo de cronicidad, sin distinguir el comportamiento particular de B y C.',
  obj:'Explicar por qué el tamizaje de hepatitis B y C tiene valor clínico real, dado su riesgo de cronicidad silenciosa.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 18.',
  tags:['hepatitis crónica','hepatitis B y C','tamizaje']
},
{
  id:'U10-AP2-Q14', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología hepática y de vías biliares', sub:'Hipertensión portal en cirrosis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la cirrosis hepática produce hipertensión portal?',
  ops:[
    'Los nódulos de regeneración rodeados de fibrosis distorsionan la arquitectura hepática, oponiendo resistencia al flujo sanguíneo que pasa a través del hígado',
    'La hipertensión portal en la cirrosis no tiene ninguna relación con la distorsión de la arquitectura hepática', 'La cirrosis hepática nunca produce ningún grado de hipertensión portal', 'La hipertensión portal se debe exclusivamente a la pérdida de función de síntesis del hígado, no a un problema mecánico'],
  ok:0,
  clave:'Los nódulos de regeneración rodeados de fibrosis distorsionan la arquitectura hepática, oponiendo resistencia al flujo sanguíneo que pasa a través del hígado.',
  exp:'La cirrosis hepática es el reemplazo difuso del tejido hepático normal por nódulos de regeneración rodeados de fibrosis; esta arquitectura distorsionada causa hipertensión portal, por la resistencia que los nódulos fibrosos oponen al flujo sanguíneo a través del hígado -un mecanismo mecánico distinto de la pérdida de función hepática en sí.',
  no:{
    1:'La distorsión de la arquitectura hepática tiene una relación causal directa y central con la hipertensión portal de la cirrosis.',
    2:'La cirrosis avanzada sí produce hipertensión portal de forma característica y bien documentada.',
    3:'La hipertensión portal es un mecanismo MECÁNICO (resistencia al flujo), distinto de la pérdida de función de síntesis, aunque ambos coexistan en la cirrosis.'
  },
  trampa:'Confundir el mecanismo mecánico de la hipertensión portal (resistencia al flujo por arquitectura distorsionada) con la pérdida de función hepática.',
  obj:'Explicar el mecanismo por el cual la cirrosis hepática produce hipertensión portal.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 18.',
  tags:['cirrosis hepática','hipertensión portal','arquitectura distorsionada']
},
{
  id:'U10-AP2-Q15', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología hepática y de vías biliares', sub:'Carcinoma hepatocelular sobre hígado cirrótico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con cirrosis hepática conocida, de causa viral, presenta un deterioro clínico nuevo y un hallazgo hepático nuevo en un estudio de imagen.',
  enunciado:'¿Qué diagnóstico debe considerarse activamente ante este hallazgo, y por qué?',
  ops:[
    'Carcinoma hepatocelular, porque se desarrolla predominantemente sobre un hígado ya dañado por cirrosis, sin importar la causa original de esa cirrosis',
    'Este hallazgo nunca debería generar sospecha de ningún proceso maligno en un paciente con cirrosis conocida', 'El carcinoma hepatocelular solo puede desarrollarse en hígados completamente sanos, nunca sobre cirrosis', 'Cualquier hallazgo nuevo en un paciente cirrótico debe asumirse automáticamente como progresión esperada de la cirrosis, sin más estudio'],
  ok:0,
  clave:'Carcinoma hepatocelular, porque se desarrolla predominantemente sobre un hígado ya dañado por cirrosis, sin importar la causa original de esa cirrosis.',
  exp:'El carcinoma hepatocelular es el tumor primario más frecuente del hígado, y se desarrolla predominantemente sobre un hígado ya dañado por cirrosis: en un paciente con cirrosis conocida, cualquier deterioro clínico nuevo o hallazgo hepático nuevo en imagen debe hacer pensar en carcinoma hepatocelular, no asumirse automáticamente como progresión de la enfermedad de base.',
  no:{
    1:'Este hallazgo sí debería generar sospecha activa de carcinoma hepatocelular, dado el riesgo elevado en un hígado cirrótico.',
    2:'El carcinoma hepatocelular se desarrolla precisamente con mayor frecuencia sobre un hígado ya dañado por cirrosis, no sobre hígados sanos.',
    3:'Asumir automáticamente progresión de la cirrosis, sin investigar activamente carcinoma hepatocelular, puede retrasar un diagnóstico oncológico importante.'
  },
  trampa:'Asumir automáticamente que cualquier hallazgo nuevo en un paciente cirrótico es solo progresión de la enfermedad de base, sin considerar activamente el carcinoma hepatocelular.',
  obj:'Aplicar el riesgo de carcinoma hepatocelular ante un hallazgo nuevo en un paciente con cirrosis conocida.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 18.',
  tags:['carcinoma hepatocelular','cirrosis','vigilancia oncológica']
},
{
  id:'U10-AP2-Q16', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología hepática y de vías biliares', sub:'Formación de colelitiasis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué desequilibrio explica típicamente la formación de cálculos biliares (colelitiasis)?',
  ops:[
    'Un exceso de colesterol relativo a las sales biliares y la lecitina que normalmente lo mantienen en solución',
    'La colelitiasis se forma exclusivamente por un exceso de sales biliares, sin ninguna relación con el colesterol', 'Los cálculos biliares nunca se relacionan con ningún desequilibrio en la composición de la bilis', 'La colelitiasis se forma únicamente por una infección bacteriana directa de la vesícula biliar'],
  ok:0,
  clave:'Un exceso de colesterol relativo a las sales biliares y la lecitina que normalmente lo mantienen en solución.',
  exp:'La colelitiasis se forma típicamente por un desequilibrio en la composición de la bilis, con exceso de colesterol relativo a las sales biliares y la lecitina que normalmente lo mantienen en solución, precipitando el colesterol y formando cálculos.',
  no:{
    1:'El desequilibrio predominante es un exceso de COLESTEROL relativo a las sales biliares, no un exceso de sales biliares en sí.',
    2:'Los cálculos biliares sí se relacionan directamente con un desequilibrio en la composición de la bilis, precisamente el mecanismo central de su formación.',
    3:'La colelitiasis se forma por un desequilibrio bioquímico en la bilis, no por una infección bacteriana directa como mecanismo primario.'
  },
  trampa:'Confundir el mecanismo bioquímico de la colelitiasis (exceso de colesterol) con otros mecanismos como infección directa o exceso de sales biliares.',
  obj:'Explicar el mecanismo bioquímico detrás de la formación de cálculos biliares.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 18.',
  tags:['colelitiasis','composición de la bilis','colesterol']
},
{
  id:'U10-AP2-Q17', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología renal y de vías urinarias', sub:'Síndrome nefrítico vs. nefrótico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue clínicamente al síndrome nefrítico del síndrome nefrótico?',
  ops:[
    'El nefrítico se caracteriza por hematuria, hipertensión y cierto grado de disminución de la filtración; el nefrótico por proteinuria masiva, edema e hipoalbuminemia',
    'Ambos síndromes tienen exactamente las mismas manifestaciones clínicas, sin ninguna diferencia real', 'El nefrítico se caracteriza por proteinuria masiva; el nefrótico por hematuria e hipertensión', 'Ninguno de los dos síndromes se relaciona con un daño glomerular subyacente'],
  ok:0,
  clave:'El nefrítico se caracteriza por hematuria, hipertensión y cierto grado de disminución de la filtración; el nefrótico por proteinuria masiva, edema e hipoalbuminemia.',
  exp:'Clínicamente, el daño glomerular se traduce en dos grandes síndromes: el nefrítico (hematuria, hipertensión, cierto grado de disminución de la filtración) cuando predomina la inflamación aguda, y el nefrótico (proteinuria masiva, edema, hipoalbuminemia) cuando predomina el daño a la barrera de filtración de proteínas.',
  no:{
    1:'Son síndromes con manifestaciones clínicas claramente distintas, relacionadas con mecanismos de daño glomerular diferentes.',
    2:'Está invertido: el NEFRÍTICO se asocia con hematuria e hipertensión, y el NEFRÓTICO con proteinuria masiva, no al revés.',
    3:'Ambos síndromes se relacionan directamente con distintos tipos de daño glomerular, la unidad de filtración renal.'
  },
  trampa:'Invertir las características del síndrome nefrítico y el nefrótico, o asumir que son manifestaciones idénticas.',
  obj:'Distinguir el síndrome nefrítico del síndrome nefrótico.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 14.',
  tags:['síndrome nefrítico','síndrome nefrótico','glomerulonefritis']
},
{
  id:'U10-AP2-Q18', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología renal y de vías urinarias', sub:'Mecanismo ascendente de la pielonefritis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la pielonefritis se presenta con un cuadro clínico distinto al de la glomerulonefritis?',
  ops:[
    'Porque la pielonefritis es una infección que asciende desde la vejiga, presentándose con fiebre, dolor en el flanco y síntomas urinarios bajos previos, un mecanismo distinto al de la glomerulonefritis',
    'La pielonefritis y la glomerulonefritis tienen exactamente el mismo mecanismo y la misma presentación clínica', 'La pielonefritis nunca se relaciona con síntomas urinarios bajos previos ni con fiebre', 'La glomerulonefritis es, en la mayoría de los casos, de origen infeccioso ascendente igual que la pielonefritis'],
  ok:0,
  clave:'La pielonefritis es una infección que asciende desde la vejiga, presentándose con fiebre, dolor en el flanco y síntomas urinarios bajos previos, un mecanismo distinto al de la glomerulonefritis.',
  exp:'La pielonefritis es la infección del parénquima renal y del sistema colector, típicamente por bacterias que ascienden desde la vejiga a través del uréter -un mecanismo ascendente, a diferencia de la glomerulonefritis, que casi nunca es infecciosa directa. Esto explica por qué la pielonefritis se presenta con fiebre, dolor en el flanco y síntomas urinarios bajos previos.',
  no:{
    1:'Tienen mecanismos y presentaciones clínicas claramente distintos, no son equivalentes entre sí.',
    2:'La pielonefritis sí se presenta característicamente con fiebre y síntomas urinarios bajos previos, precisamente por su mecanismo ascendente.',
    3:'Es precisamente lo contrario: la glomerulonefritis CASI NUNCA es infecciosa directa, a diferencia de la pielonefritis, que sí lo es.'
  },
  trampa:'Confundir el mecanismo ascendente e infeccioso de la pielonefritis con el mecanismo predominantemente no infeccioso de la glomerulonefritis.',
  obj:'Explicar el mecanismo ascendente de la pielonefritis y su diferencia con la glomerulonefritis.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 14.',
  tags:['pielonefritis','mecanismo ascendente','infección urinaria']
},
{
  id:'U10-AP2-Q19', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología renal y de vías urinarias', sub:'Presentación silenciosa del carcinoma renal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la tríada clásica de dolor en el flanco, masa palpable y hematuria es poco frecuente en la práctica real del carcinoma renal?',
  ops:[
    'Porque el tumor puede crecer de forma silenciosa durante mucho tiempo, siendo descubierto con frecuencia de forma incidental en un estudio de imagen por otra razón',
    'El carcinoma renal siempre se presenta con la tríada clásica completa, sin ninguna excepción en la práctica real', 'El carcinoma renal nunca puede detectarse de forma incidental mediante estudios de imagen', 'La presentación silenciosa del carcinoma renal no tiene ninguna relevancia clínica real'],
  ok:0,
  clave:'El tumor puede crecer de forma silenciosa durante mucho tiempo, siendo descubierto con frecuencia de forma incidental en un estudio de imagen por otra razón.',
  exp:'El carcinoma renal con frecuencia se descubre de forma incidental en un estudio de imagen realizado por otra razón, precisamente porque puede crecer de forma silenciosa durante mucho tiempo antes de dar la tríada clásica (pero poco frecuente en la práctica) de dolor en el flanco, masa palpable y hematuria -un recordatorio de que la presentación "de libro" no siempre es la más común en la práctica real.',
  no:{
    1:'La tríada clásica completa es, de hecho, POCO frecuente en la práctica real; el hallazgo incidental es más común.',
    2:'El carcinoma renal sí puede detectarse de forma incidental, siendo esta una vía de detección frecuente en la práctica clínica.',
    3:'La presentación silenciosa sí tiene relevancia clínica real, al explicar por qué muchos casos se diagnostican de forma incidental y no por síntomas clásicos.'
  },
  trampa:'Asumir que la tríada clásica del carcinoma renal es la forma de presentación más frecuente, en vez del hallazgo incidental.',
  obj:'Explicar por qué el carcinoma renal frecuentemente se detecta de forma incidental, no por su tríada clásica.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 14.',
  tags:['carcinoma renal','tríada clásica','hallazgo incidental']
},
{
  id:'U10-AP2-Q20', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología renal y de vías urinarias', sub:'Nefropatía diabética como causa de enfermedad renal terminal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se justifica la vigilancia renal sistemática en todo paciente diabético?',
  ops:[
    'Porque la nefropatía diabética es una de las causas más frecuentes de enfermedad renal crónica terminal a nivel mundial',
    'La diabetes mellitus nunca tiene ninguna relación real con el desarrollo de enfermedad renal crónica', 'La nefropatía diabética es una complicación extremadamente rara, sin justificación real para la vigilancia sistemática', 'La vigilancia renal solo se justifica en pacientes con diabetes tipo 1, nunca en diabetes tipo 2'],
  ok:0,
  clave:'La nefropatía diabética es una de las causas más frecuentes de enfermedad renal crónica terminal a nivel mundial.',
  exp:'La nefropatía diabética es la complicación renal crónica de la diabetes mellitus: el daño microvascular sostenido por la hiperglucemia crónica afecta progresivamente al glomérulo, siendo una de las causas más frecuentes de enfermedad renal crónica terminal a nivel mundial, lo que justifica la vigilancia renal sistemática en todo paciente diabético.',
  no:{
    1:'La diabetes mellitus sí tiene una relación causal bien documentada con el desarrollo de enfermedad renal crónica, vía nefropatía diabética.',
    2:'La nefropatía diabética es, de hecho, una complicación frecuente y una causa importante de enfermedad renal crónica terminal, no rara.',
    3:'La vigilancia renal se justifica en ambos tipos de diabetes, no exclusivamente en la tipo 1; la nefropatía diabética puede ocurrir en ambos.'
  },
  trampa:'Subestimar la frecuencia y relevancia de la nefropatía diabética como causa de enfermedad renal crónica terminal.',
  obj:'Explicar por qué se justifica la vigilancia renal sistemática en todo paciente diabético.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 14.',
  tags:['nefropatía diabética','enfermedad renal crónica terminal','vigilancia renal']
},
{
  id:'U10-AP2-Q21', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del sistema endocrino', sub:'Mecanismo del bocio por deficiencia de yodo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la deficiencia de yodo produce bocio, es decir, agrandamiento de la glándula tiroides?',
  ops:[
    'La deficiencia de yodo reduce la síntesis de hormona tiroidea, elevando la TSH por retroalimentación negativa, y esa TSH elevada estimula el crecimiento glandular como intento compensatorio',
    'La deficiencia de yodo no tiene ninguna relación real con el tamaño de la glándula tiroides', 'La deficiencia de yodo siempre produce hipertiroidismo, nunca bocio ni hipotiroidismo', 'El bocio por deficiencia de yodo ocurre sin ninguna participación de la TSH ni de la hipófisis'],
  ok:0,
  clave:'La deficiencia de yodo reduce la síntesis de hormona tiroidea, elevando la TSH por retroalimentación negativa, y esa TSH elevada estimula el crecimiento glandular.',
  exp:'La deficiencia de yodo actúa reduciendo la síntesis de hormona tiroidea, lo que eleva la TSH por retroalimentación negativa (ya vista en Fisiología II) y esa TSH elevada estimula el crecimiento glandular como intento compensatorio -el bocio, en este caso, es la consecuencia visible de un intento fallido de mantener niveles hormonales normales.',
  no:{
    1:'La deficiencia de yodo sí tiene una relación causal directa con el tamaño de la glándula, vía el mecanismo de retroalimentación con la TSH.',
    2:'La deficiencia de yodo característicamente produce HIPOTIROIDISMO relativo (con bocio compensatorio), no hipertiroidismo.',
    3:'El mecanismo del bocio por deficiencia de yodo depende directamente de la elevación de TSH, mediada por la hipófisis.'
  },
  trampa:'No reconocer el mecanismo de retroalimentación negativa vía TSH que explica el bocio compensatorio por deficiencia de yodo.',
  obj:'Explicar el mecanismo por el cual la deficiencia de yodo produce bocio.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 20.',
  tags:['bocio','deficiencia de yodo','retroalimentación con TSH']
},
{
  id:'U10-AP2-Q22', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del sistema endocrino', sub:'Pronóstico variable del carcinoma tiroideo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es incorrecto hablar de "cáncer de tiroides" como una sola entidad con un único pronóstico?',
  ops:[
    'Porque sus subtipos tienen comportamientos muy distintos: el papilar generalmente tiene un pronóstico excelente, mientras que el anaplásico es poco frecuente pero extremadamente agresivo',
    'Todos los subtipos de carcinoma tiroideo tienen exactamente el mismo pronóstico y comportamiento clínico', 'El carcinoma tiroideo papilar es el subtipo más agresivo y de peor pronóstico entre todos', 'El carcinoma tiroideo anaplásico es el subtipo más frecuente y de mejor pronóstico'],
  ok:0,
  clave:'Sus subtipos tienen comportamientos muy distintos: el papilar generalmente tiene un pronóstico excelente, mientras que el anaplásico es poco frecuente pero extremadamente agresivo.',
  exp:'El carcinoma tiroideo tiene varios subtipos con comportamiento muy distinto: el papilar, el más frecuente, tiene generalmente un pronóstico excelente pese a diseminarse con frecuencia a ganglios linfáticos cercanos; el anaplásico, poco frecuente pero extremadamente agresivo, contrasta radicalmente con el buen pronóstico del papilar.',
  no:{
    1:'Los subtipos tienen pronósticos claramente distintos, desde excelente (papilar) hasta muy agresivo (anaplásico).',
    2:'Es precisamente lo contrario: el PAPILAR tiene generalmente buen pronóstico, a diferencia del anaplásico, mucho más agresivo.',
    3:'Está invertido: el anaplásico es POCO frecuente y de PEOR pronóstico, no el más frecuente ni de mejor pronóstico.'
  },
  trampa:'Asumir que todos los subtipos de carcinoma tiroideo comparten el mismo pronóstico, o invertir las características del papilar y el anaplásico.',
  obj:'Explicar por qué el carcinoma tiroideo no debe tratarse como una entidad única con un solo pronóstico.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 20.',
  tags:['carcinoma tiroideo','carcinoma papilar','carcinoma anaplásico']
},
{
  id:'U10-AP2-Q23', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del sistema endocrino', sub:'Efectos locales vs. sistémicos de un tumor hipofisario',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta un tumor hipofisario pequeño que produce un exceso de hormona de crecimiento, manifestándose con crecimiento óseo y de tejidos blandos en todo el cuerpo.',
  enunciado:'¿Cómo se explica que un tumor relativamente pequeño, localizado en la hipófisis, produzca efectos en órganos distantes del cuerpo?',
  ops:[
    'El tumor secreta una hormona hipofisaria en exceso, que actúa sistémicamente sobre órganos distantes que responden a esa hormona',
    'Este escenario es imposible; un tumor hipofisario pequeño nunca puede producir efectos fuera de la región craneal', 'Los tumores hipofisarios solo pueden producir efectos por compresión local, nunca por secreción hormonal excesiva', 'Un tumor hipofisario pequeño no tiene ninguna capacidad de secretar hormonas en exceso'],
  ok:0,
  clave:'El tumor secreta una hormona hipofisaria en exceso, que actúa sistémicamente sobre órganos distantes que responden a esa hormona.',
  exp:'Un tumor hipofisario puede causar efectos hormonales sistémicos a distancia, si el tumor secreta una hormona hipofisaria en exceso: un exceso de hormona de crecimiento produce acromegalia (crecimiento óseo y de tejidos blandos en todo el cuerpo) -el tumor está en la hipófisis, pero sus efectos se manifiestan en órganos distantes que responden a esa hormona.',
  no:{
    1:'Este escenario es real y bien documentado: un tumor hipofisario secretor puede producir efectos sistémicos importantes pese a su tamaño pequeño.',
    2:'Los tumores hipofisarios pueden causar tanto efectos por compresión local como efectos hormonales sistémicos, según sean o no secretores.',
    3:'Un tumor hipofisario pequeño sí puede ser funcionalmente activo y secretar hormona en exceso, precisamente el mecanismo de este caso.'
  },
  trampa:'Asumir que un tumor hipofisario pequeño solo puede causar efectos por compresión local, sin reconocer el mecanismo de secreción hormonal sistémica.',
  obj:'Explicar el mecanismo por el cual un tumor hipofisario pequeño puede producir efectos hormonales sistémicos a distancia.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 20.',
  tags:['tumor hipofisario','acromegalia','efecto hormonal sistémico']
},
{
  id:'U10-AP2-Q24', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del sistema endocrino', sub:'Adenoma tiroideo funcionalmente autónomo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo puede un adenoma tiroideo, siendo histológicamente benigno, causar hipertiroidismo?',
  ops:[
    'Puede producir hormona tiroidea en exceso de forma autónoma, independiente del control hipofisario normal, funcionando como un "nódulo caliente"',
    'Un adenoma tiroideo benigno nunca puede producir ningún grado de hipertiroidismo', 'El hipertiroidismo causado por un adenoma tiroideo siempre indica que en realidad se trata de un carcinoma', 'Los adenomas tiroideos son siempre funcionalmente silenciosos, sin ninguna excepción posible'],
  ok:0,
  clave:'Puede producir hormona tiroidea en exceso de forma autónoma, independiente del control hipofisario normal, funcionando como un "nódulo caliente".',
  exp:'El adenoma tiroideo puede ser funcionalmente silencioso o, con menor frecuencia, producir hormona tiroidea en exceso de forma autónoma (un "nódulo caliente" independiente del control hipofisario), causando hipertiroidismo pese a ser histológicamente benigno.',
  no:{
    1:'Un adenoma benigno sí puede causar hipertiroidismo, precisamente mediante producción hormonal autónoma como "nódulo caliente".',
    2:'El hipertiroidismo por un adenoma tiroideo no implica malignidad; puede ocurrir con un tumor histológicamente benigno.',
    3:'Los adenomas tiroideos pueden ser funcionalmente silenciosos O, con menor frecuencia, hormonalmente activos, no siempre silenciosos.'
  },
  trampa:'Asumir que un tumor benigno nunca puede tener actividad hormonal significativa, o confundir hipertiroidismo con malignidad automática.',
  obj:'Explicar cómo un adenoma tiroideo benigno puede causar hipertiroidismo mediante producción hormonal autónoma.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 20.',
  tags:['adenoma tiroideo','nódulo caliente','hipertiroidismo']
},
{
  id:'U10-AP2-Q25', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología de mama', sub:'Características semiológicas del fibroadenoma',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué características semiológicas sugieren fuertemente que una masa mamaria es un fibroadenoma benigno?',
  ops:[
    'Masa firme, móvil, de bordes bien definidos, que no se adhiere a los tejidos circundantes', 'Masa dura, fija a planos profundos, de bordes irregulares, con retracción de la piel', 'Masa blanda, dolorosa, que aumenta de tamaño rápidamente en cuestión de horas', 'Masa que solo aparece en mujeres mayores de 70 años, nunca en mujeres jóvenes'],
  ok:0,
  clave:'Masa firme, móvil, de bordes bien definidos, que no se adhiere a los tejidos circundantes.',
  exp:'El fibroadenoma se presenta como una masa firme, móvil, de bordes bien definidos, que no se adhiere a los tejidos circundantes -características semiológicas que, en conjunto, sugieren fuertemente benignidad, aunque la confirmación definitiva siempre requiere estudio histológico si hay cualquier duda clínica.',
  no:{
    1:'Estas características (dura, fija, bordes irregulares, retracción de piel) sugieren malignidad, no un fibroadenoma benigno.',
    2:'El fibroadenoma no se caracteriza típicamente por dolor ni crecimiento rápido en horas; su presentación es más estable en el tiempo.',
    3:'El fibroadenoma es, de hecho, el tumor benigno más frecuente en mujeres JÓVENES, no exclusivamente en mujeres mayores de 70 años.'
  },
  trampa:'Confundir las características semiológicas benignas del fibroadenoma con las sugestivas de malignidad, o asociarlo erróneamente con edad avanzada.',
  obj:'Identificar las características semiológicas típicas de un fibroadenoma mamario benigno.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 23.',
  tags:['fibroadenoma','características semiológicas','masa benigna']
},
{
  id:'U10-AP2-Q26', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología de mama', sub:'Carcinoma in situ vs. invasivo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la distinción entre carcinoma de mama in situ e invasivo tiene una implicación pronóstica directa?',
  ops:[
    'El in situ no ha atravesado la membrana basal y no tiene capacidad de dar metástasis mientras permanezca así, mientras que el invasivo sí tiene acceso a vasos y capacidad real de diseminarse',
    'Ambos tipos tienen exactamente el mismo pronóstico y capacidad de diseminación, sin ninguna diferencia real', 'El carcinoma in situ tiene mayor capacidad de diseminarse que el invasivo', 'La distinción entre in situ e invasivo no tiene ninguna relevancia real para el pronóstico de la paciente'],
  ok:0,
  clave:'El in situ no ha atravesado la membrana basal y no tiene capacidad de dar metástasis mientras permanezca así, mientras que el invasivo sí tiene acceso a vasos y capacidad real de diseminarse.',
  exp:'El carcinoma in situ está confinado dentro del conducto o lobulillo, sin capacidad de dar metástasis mientras permanezca así, y el carcinoma invasivo ya atravesó la membrana basal, con acceso a vasos linfáticos y sanguíneos y capacidad real de diseminarse -esta distinción tiene una implicación pronóstica y terapéutica directa.',
  no:{
    1:'Tienen pronósticos claramente distintos, precisamente por su diferente capacidad de acceso a vasos y de diseminación.',
    2:'Es precisamente lo contrario: el IN SITU no tiene capacidad de diseminarse mientras permanezca confinado, a diferencia del invasivo.',
    3:'Esta distinción sí tiene una relevancia pronóstica y terapéutica directa y central en el manejo del cáncer de mama.'
  },
  trampa:'Invertir la capacidad de diseminación entre el carcinoma in situ (confinado) y el invasivo (con acceso a vasos), o negar su relevancia pronóstica.',
  obj:'Explicar la implicación pronóstica de la distinción entre carcinoma de mama in situ e invasivo.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 23.',
  tags:['carcinoma in situ','carcinoma invasivo','membrana basal']
},
{
  id:'U10-AP2-Q27', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología de mama', sub:'Por qué la biopsia es indispensable',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué ni la palpación ni la imagen, por sí solas, permiten confirmar con certeza la naturaleza de una masa mamaria?',
  ops:[
    'Porque ninguna de las dos permite distinguir con certeza absoluta entre una masa benigna y una maligna, sin importar qué tan típica parezca su apariencia clínica o radiológica',
    'La palpación y la imagen siempre son suficientes por sí solas para confirmar con total certeza la naturaleza de cualquier masa mamaria', 'La biopsia de mama nunca aporta ninguna información adicional más allá de lo que ya muestran la palpación y la imagen', 'Solo la imagen, sin necesidad de biopsia, es suficiente para confirmar definitivamente el diagnóstico de una masa mamaria'],
  ok:0,
  clave:'Ninguna de las dos permite distinguir con certeza absoluta entre una masa benigna y una maligna, sin importar qué tan típica parezca su apariencia clínica o radiológica.',
  exp:'La biopsia de mama es indispensable antes de cualquier decisión terapéutica definitiva: ni la palpación ni la imagen, por sí solas, permiten distinguir con certeza absoluta entre una masa benigna y una maligna, sin importar qué tan típica parezca su apariencia clínica o radiológica.',
  no:{
    1:'Es precisamente lo contrario: ninguna de las dos es suficiente por sí sola para confirmar con certeza absoluta la naturaleza de la masa.',
    2:'La biopsia sí aporta información adicional esencial, incluida la caracterización molecular que determina el tratamiento específico.',
    3:'La imagen sola no es suficiente para confirmar definitivamente el diagnóstico; se requiere confirmación histológica mediante biopsia.'
  },
  trampa:'Asumir que la palpación o la imagen, por sí solas, son suficientes para confirmar con certeza el diagnóstico sin necesidad de biopsia.',
  obj:'Explicar por qué la biopsia es indispensable para confirmar el diagnóstico de una masa mamaria.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 23.',
  tags:['biopsia de mama','confirmación diagnóstica','caracterización molecular']
},
{
  id:'U10-AP2-Q28', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología de mama', sub:'Patrón temporal de la mastopatía fibroquística',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una paciente refiere dolor y nodularidad mamaria que varía claramente con las distintas fases de su ciclo menstrual, empeorando antes de la menstruación y mejorando después.',
  enunciado:'¿Qué condición sugiere este patrón temporal característico?',
  ops:[
    'Mastopatía fibroquística, un conjunto de cambios benignos relacionados con las fluctuaciones hormonales del ciclo menstrual',
    'Este patrón temporal sugiere fuertemente un carcinoma de mama invasivo en progresión activa', 'El patrón cíclico de los síntomas no tiene ninguna relación con las fluctuaciones hormonales del ciclo menstrual', 'Este patrón es exclusivo de un fibroadenoma, nunca se relaciona con mastopatía fibroquística'],
  ok:0,
  clave:'Mastopatía fibroquística, un conjunto de cambios benignos relacionados con las fluctuaciones hormonales del ciclo menstrual.',
  exp:'La mastopatía fibroquística produce con frecuencia dolor y nodularidad que varía con el ciclo, relacionado con las fluctuaciones hormonales del ciclo menstrual -un patrón temporal que ayuda a distinguirla clínicamente de una masa más preocupante que no cambia con el ciclo.',
  no:{
    1:'Un carcinoma de mama típicamente NO varía con el ciclo menstrual de esta forma cíclica y predecible; esta variación sugiere un proceso benigno.',
    2:'El patrón cíclico de los síntomas sí tiene una relación directa con las fluctuaciones hormonales, precisamente el mecanismo de la mastopatía fibroquística.',
    3:'El fibroadenoma no se caracteriza típicamente por esta variación cíclica marcada; este patrón es más característico de la mastopatía fibroquística.'
  },
  trampa:'Confundir el patrón cíclico benigno de la mastopatía fibroquística con un signo de alarma sugestivo de malignidad.',
  obj:'Reconocer el patrón temporal cíclico característico de la mastopatía fibroquística.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 23.',
  tags:['mastopatía fibroquística','patrón cíclico','fluctuación hormonal']
}

]);
