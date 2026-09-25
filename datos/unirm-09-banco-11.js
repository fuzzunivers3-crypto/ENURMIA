/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE FARMACOLOGIA (2/2)
   Continua unirm-09-banco-10.js. Amplia Farmacologia de 5 a 50
   preguntas. Esta parte cubre farmacos cardiovasculares, sistema
   nervioso autonomo, reacciones adversas/toxicidad, sistema
   nervioso central, endocrina y uso racional de antimicrobianos
   (temas 7-12).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U9-FA-Q28', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Fármacos cardiovasculares', sub:'IECA: efecto adverso característico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los IECA producen tos seca como efecto adverso característico?',
  ops:[
    'Porque, al inhibir la enzima convertidora de angiotensina, también reducen la degradación de la bradicinina, que se acumula y puede irritar la vía aérea',
    'Los IECA no tienen ningún efecto adverso conocido relacionado con la vía respiratoria', 'La tos seca de los IECA no tiene ninguna relación con su mecanismo de acción', 'Los IECA producen tos por un efecto directo sobre el músculo cardíaco, sin relación con la vía aérea'],
  ok:0,
  clave:'Al inhibir la ECA, los IECA también reducen la degradación de la bradicinina, que se acumula e irrita la vía aérea, causando tos seca.',
  exp:'Los IECA (inhibidores de la enzima convertidora de angiotensina) bloquean la conversión de angiotensina I a angiotensina II, reduciendo la presión arterial, pero la misma enzima que convierten también participa en la degradación de la bradicinina; al inhibirla, la bradicinina se acumula y puede irritar la vía aérea, produciendo tos seca -uno de los efectos adversos más característicos y frecuentes de este grupo.',
  no:{
    1:'La tos seca es precisamente un efecto adverso bien conocido y característico de los IECA, relacionado con la acumulación de bradicinina.',
    2:'La tos seca tiene una relación directa y bien establecida con el mecanismo de acción de los IECA (acumulación de bradicinina).',
    3:'El mecanismo de la tos no es cardíaco directo, sino respiratorio, por irritación de la vía aérea debida a la bradicinina acumulada.'
  },
  trampa:'No reconocer la acumulación de bradicinina como el mecanismo que explica la tos seca característica de los IECA.',
  obj:'Explicar el mecanismo de la tos seca como efecto adverso característico de los IECA.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11 y 17.',
  tags:['IECA','bradicinina','tos seca']
},
{
  id:'U9-FA-Q29', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Fármacos cardiovasculares', sub:'Betabloqueadores y contraindicación en asma',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con asma bronquial mal controlada requiere tratamiento antihipertensivo, y se considera prescribir un betabloqueador no selectivo.',
  enunciado:'¿Por qué esta elección requiere especial precaución en este paciente?',
  ops:[
    'Porque un betabloqueador no selectivo también bloquea receptores beta-2 en el músculo bronquial, pudiendo precipitar broncoespasmo',
    'Los betabloqueadores no tienen ninguna relación con la función respiratoria', 'Todos los betabloqueadores, selectivos o no, son igualmente seguros en pacientes con asma', 'El asma bronquial no tiene ninguna relación con la elección de un antihipertensivo'],
  ok:0,
  clave:'Un betabloqueador no selectivo bloquea también receptores beta-2 bronquiales, pudiendo precipitar broncoespasmo en un paciente asmático.',
  exp:'Los betabloqueadores no selectivos bloquean tanto receptores beta-1 (cardíacos, el objetivo terapéutico deseado) como beta-2 (presentes también en el músculo bronquial, donde normalmente median broncodilatación); en un paciente con asma, este bloqueo beta-2 puede precipitar broncoespasmo, por eso se prefieren betabloqueadores cardioselectivos (beta-1 selectivos) o evitar el grupo por completo si el asma está mal controlada.',
  no:{
    1:'Los betabloqueadores sí tienen una relación directa con la función respiratoria, precisamente por el bloqueo beta-2 en el músculo bronquial.',
    2:'Los betabloqueadores CARDIOSELECTIVOS (beta-1 selectivos) tienen menor riesgo de broncoespasmo que los NO selectivos; no son igualmente seguros.',
    3:'El asma bronquial sí es un factor clínico relevante para la elección del tipo de betabloqueador en un paciente hipertenso.'
  },
  trampa:'No reconocer el riesgo de broncoespasmo por bloqueo beta-2 de un betabloqueador no selectivo en un paciente asmático.',
  obj:'Explicar la precaución al usar betabloqueadores no selectivos en un paciente con asma bronquial.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11 y 17.',
  tags:['betabloqueadores','asma bronquial','receptores beta-2']
},
{
  id:'U9-FA-Q30', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Fármacos cardiovasculares', sub:'Diuréticos de asa y desequilibrio electrolítico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué desequilibrio electrolítico es más característico del uso de diuréticos de asa (como la furosemida)?',
  ops:[
    'Hipopotasemia, por el aumento de la excreción urinaria de potasio', 'Los diuréticos de asa nunca producen ningún desequilibrio electrolítico', 'Hiperpotasemia, por retención de potasio', 'Los diuréticos de asa afectan exclusivamente el metabolismo de la glucosa, sin ningún efecto electrolítico'],
  ok:0,
  clave:'La hipopotasemia es el desequilibrio electrolítico más característico de los diuréticos de asa, por aumento de la excreción urinaria de potasio.',
  exp:'Los diuréticos de asa (como la furosemida) inhiben la reabsorción de sodio, potasio y cloro en el asa de Henle, aumentando la excreción urinaria de estos electrolitos; el resultado más característico es la hipopotasemia, que puede requerir suplementación o monitorización estrecha, especialmente en pacientes que también toman digoxina (donde la hipopotasemia aumenta el riesgo de toxicidad).',
  no:{
    1:'Los diuréticos de asa sí producen un desequilibrio electrolítico bien caracterizado y clínicamente relevante: la hipopotasemia.',
    2:'Es al revés: los diuréticos de asa AUMENTAN la excreción de potasio, produciendo hipopotasemia, no hiperpotasemia por retención.',
    3:'Los diuréticos de asa tienen un efecto primario sobre el balance electrolítico renal, no sobre el metabolismo de la glucosa.'
  },
  trampa:'Invertir el desequilibrio electrolítico característico de los diuréticos de asa (hipopotasemia por pérdida, no hiperpotasemia por retención).',
  obj:'Identificar la hipopotasemia como el desequilibrio electrolítico característico de los diuréticos de asa.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11 y 17.',
  tags:['diuréticos de asa','hipopotasemia','furosemida']
},
{
  id:'U9-FA-Q31', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Fármacos del sistema nervioso autónomo', sub:'Efecto de un agonista beta-2',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué efecto produce un agonista beta-2, como el salbutamol, y por qué es útil en el asma?',
  ops:[
    'Broncodilatación, al relajar el músculo liso bronquial, aliviando el broncoespasmo', 'Broncoconstricción, empeorando el broncoespasmo del asma', 'Un agonista beta-2 no tiene ningún efecto sobre el músculo liso bronquial', 'Un agonista beta-2 produce exactamente el mismo efecto que un antagonista beta-2'],
  ok:0,
  clave:'Un agonista beta-2 produce broncodilatación, al relajar el músculo liso bronquial, aliviando el broncoespasmo del asma.',
  exp:'Un agonista beta-2, como el salbutamol, activa los receptores beta-2 del músculo liso bronquial, produciendo broncodilatación (relajación del músculo liso), lo que alivia el broncoespasmo característico de una crisis asmática -por eso es uno de los fármacos de primera línea para el alivio rápido de síntomas en el asma.',
  no:{
    1:'Es precisamente lo contrario: un agonista beta-2 produce BRONCODILATACIÓN, no broncoconstricción, aliviando (no empeorando) el broncoespasmo.',
    2:'Un agonista beta-2 sí tiene un efecto bien caracterizado y clínicamente relevante sobre el músculo liso bronquial: la broncodilatación.',
    3:'Un agonista (que activa el receptor) y un antagonista (que lo bloquea) producen efectos opuestos, no el mismo efecto.'
  },
  trampa:'Confundir el efecto de un agonista beta-2 (broncodilatación) con el de un antagonista, o invertir su efecto sobre el músculo liso bronquial.',
  obj:'Explicar el mecanismo de broncodilatación de un agonista beta-2 y su utilidad en el asma.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 6-9.',
  tags:['agonista beta-2','broncodilatación','asma','agonista adrenérgico','simpaticomimético']
},
{
  id:'U9-FA-Q32', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Fármacos del sistema nervioso autónomo', sub:'Efectos de un anticolinérgico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué efectos característicos produce un fármaco anticolinérgico (bloqueador de receptores muscarínicos)?',
  ops:[
    'Sequedad de boca, visión borrosa, taquicardia y retención urinaria, al bloquear la acción de la acetilcolina sobre receptores muscarínicos',
    'Un anticolinérgico no tiene ningún efecto conocido sobre el cuerpo', 'Salivación excesiva y bradicardia, exactamente lo opuesto de lo esperado', 'Un anticolinérgico produce exclusivamente efectos sobre el sistema respiratorio, sin ningún otro efecto sistémico'],
  ok:0,
  clave:'Un anticolinérgico produce sequedad de boca, visión borrosa, taquicardia y retención urinaria, al bloquear receptores muscarínicos.',
  exp:'Un fármaco anticolinérgico bloquea la acción de la acetilcolina sobre receptores muscarínicos, presentes en múltiples órganos: esto produce un conjunto característico de efectos -sequedad de boca (menor salivación), visión borrosa (afecta la acomodación ocular), taquicardia (menor freno vagal sobre el corazón) y retención urinaria (relajación del músculo detrusor de la vejiga)- un patrón útil de recordar como "seco, caliente, rojo, loco y ciego" en toxicidad severa.',
  no:{
    1:'Un anticolinérgico sí tiene un conjunto de efectos bien caracterizado y clínicamente reconocible sobre múltiples órganos.',
    2:'Es precisamente lo contrario: un anticolinérgico produce SEQUEDAD de boca (no salivación excesiva) y TAQUICARDIA (no bradicardia).',
    3:'Los efectos de un anticolinérgico son sistémicos, afectando múltiples órganos (ojo, corazón, vejiga, glándulas salivales), no exclusivamente el sistema respiratorio.'
  },
  trampa:'Invertir los efectos característicos de un anticolinérgico (sequedad y taquicardia, no salivación y bradicardia) o subestimar su alcance sistémico.',
  obj:'Describir el conjunto de efectos característicos de un fármaco anticolinérgico.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 6-9.',
  tags:['anticolinérgico','receptores muscarínicos','efectos sistémicos','antagonista colinérgico']
},
{
  id:'U9-FA-Q33', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Fármacos del sistema nervioso autónomo', sub:'Epinefrina en anafilaxia',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta un cuadro de anafilaxia con hipotensión y broncoespasmo severo tras la picadura de un insecto.',
  enunciado:'¿Por qué la epinefrina es el fármaco de primera línea en este cuadro, más allá de cualquier otro tratamiento de soporte?',
  ops:[
    'Porque actúa simultáneamente sobre receptores alfa (vasoconstricción, revirtiendo la hipotensión) y beta-2 (broncodilatación, revirtiendo el broncoespasmo), atacando ambos problemas a la vez',
    'La epinefrina no tiene ningún efecto sobre la presión arterial ni sobre la vía aérea', 'La epinefrina solo actúa sobre receptores beta-2, sin ningún efecto sobre la presión arterial', 'Cualquier antihistamínico es igual de eficaz que la epinefrina para revertir la anafilaxia'],
  ok:0,
  clave:'La epinefrina actúa sobre receptores alfa (vasoconstricción) y beta-2 (broncodilatación) simultáneamente, revirtiendo ambos problemas de la anafilaxia.',
  exp:'La epinefrina es el fármaco de primera línea en anafilaxia porque actúa simultáneamente sobre receptores alfa (produciendo vasoconstricción, que revierte la hipotensión) y sobre receptores beta-2 (produciendo broncodilatación, que revierte el broncoespasmo) -ataca los dos problemas potencialmente mortales del cuadro a la vez, de forma rápida, algo que ningún otro fármaco de soporte (como un antihistamínico) logra por sí solo.',
  no:{
    1:'La epinefrina sí tiene un efecto directo y potente tanto sobre la presión arterial (vasoconstricción alfa) como sobre la vía aérea (broncodilatación beta-2).',
    2:'La epinefrina también actúa sobre receptores ALFA (vasoconstricción), no exclusivamente sobre beta-2; ese doble mecanismo es justamente lo que la hace de primera línea.',
    3:'Un antihistamínico no revierte la hipotensión ni el broncoespasmo severo con la rapidez y potencia de la epinefrina; no es igual de eficaz en anafilaxia.'
  },
  trampa:'No reconocer el doble mecanismo (alfa y beta-2) que hace a la epinefrina única para tratar simultáneamente la hipotensión y el broncoespasmo de la anafilaxia.',
  obj:'Explicar por qué la epinefrina es el fármaco de primera línea en anafilaxia.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 6-9.',
  tags:['epinefrina','anafilaxia','receptores alfa y beta','agonista adrenérgico','simpaticomimético']
},
{
  id:'U9-FA-Q34', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Fármacos del sistema nervioso autónomo', sub:'Organización del sistema autónomo por receptor',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué predecir el efecto de un fármaco del sistema nervioso autónomo a partir del tipo de receptor que activa o bloquea es más útil que memorizar cada fármaco por separado?',
  ops:[
    'Porque los mismos receptores (alfa, beta, muscarínicos) se repiten en distintos órganos, así que conocer el efecto general del receptor permite predecir el efecto de cualquier fármaco nuevo que actúe sobre él',
    'Cada fármaco del sistema nervioso autónomo tiene un mecanismo completamente único, sin relación con ningún receptor conocido', 'Los receptores del sistema nervioso autónomo no se repiten entre distintos órganos', 'Memorizar cada fármaco por separado es siempre más eficiente que entender los receptores comunes'],
  ok:0,
  clave:'Los mismos receptores se repiten en distintos órganos; conocer el efecto del receptor permite predecir el efecto de cualquier fármaco que actúe sobre él.',
  exp:'Los mismos tipos de receptores (alfa, beta-1, beta-2, muscarínicos) se repiten en distintos órganos del cuerpo, con efectos consistentes según el tipo de receptor (por ejemplo, beta-2 siempre relaja músculo liso, ya sea bronquial o vascular). Por eso, entender el efecto general de cada tipo de receptor permite predecir el efecto de cualquier fármaco nuevo que actúe sobre él, en vez de memorizar cada nombre comercial por separado como un dato aislado.',
  no:{
    1:'Los fármacos del sistema nervioso autónomo sí comparten mecanismos comunes, basados en un número limitado de tipos de receptores repetidos en distintos órganos.',
    2:'Es precisamente lo contrario: los mismos tipos de receptores SÍ se repiten en distintos órganos, lo que permite generalizar su efecto.',
    3:'Entender los receptores comunes permite predecir el efecto de fármacos nuevos, siendo más eficiente y generalizable que memorizar cada nombre por separado.'
  },
  trampa:'No reconocer la ventaja de organizar el sistema nervioso autónomo por tipo de receptor en vez de memorizar cada fármaco como un dato aislado.',
  obj:'Explicar la ventaja de predecir el efecto de fármacos autónomos según el tipo de receptor que activan o bloquean.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 6-9.',
  tags:['sistema nervioso autónomo','tipos de receptores','razonamiento farmacológico']
},
{
  id:'U9-FA-Q35', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Reacciones adversas y toxicidad', sub:'Antídotos específicos',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué antídoto específico se usa para revertir la sobredosis de opioides?',
  ops:['Naloxona', 'Flumazenilo', 'N-acetilcisteína', 'Ningún fármaco tiene un antídoto específico conocido para la sobredosis de opioides'],
  ok:0,
  clave:'La naloxona es el antídoto específico usado para revertir la sobredosis de opioides.',
  exp:'La naloxona es un antagonista de receptores opioides que revierte rápidamente la depresión respiratoria y el resto de los efectos de una sobredosis de opioides, al desplazar al opioide de su receptor sin activarlo -un ejemplo clásico de antídoto específico basado en el mismo tipo de receptor que causó la toxicidad.',
  no:{
    1:'El flumazenilo es el antídoto específico de las benzodiazepinas, no de los opioides.',
    2:'La N-acetilcisteína es el antídoto específico de la toxicidad por paracetamol, no de los opioides.',
    3:'La sobredosis de opioides sí tiene un antídoto específico bien establecido y ampliamente usado: la naloxona.'
  },
  trampa:'Confundir el antídoto de los opioides (naloxona) con el de las benzodiazepinas (flumazenilo) o el del paracetamol (N-acetilcisteína).',
  obj:'Identificar la naloxona como el antídoto específico de la sobredosis de opioides.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 58 y 31.',
  tags:['naloxona','antídoto','sobredosis de opioides']
},
{
  id:'U9-FA-Q36', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Reacciones adversas y toxicidad', sub:'Reacción alérgica vs. efecto adverso predecible',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre una reacción alérgica a un fármaco y un efecto adverso predecible (relacionado con su mecanismo de acción)?',
  ops:[
    'La reacción alérgica involucra al sistema inmunitario y no depende de la dosis (puede ocurrir con cantidades mínimas); el efecto adverso predecible se relaciona directamente con el mecanismo de acción y suele ser dosis-dependiente',
    'Ambos términos son exactamente sinónimos, sin ninguna diferencia real', 'Una reacción alérgica siempre requiere una dosis mucho más alta que un efecto adverso predecible', 'El sistema inmunitario nunca participa en ninguna reacción adversa a un fármaco'],
  ok:0,
  clave:'La reacción alérgica involucra al sistema inmunitario y no depende de la dosis; el efecto adverso predecible se relaciona con el mecanismo y suele ser dosis-dependiente.',
  exp:'Una reacción alérgica a un fármaco involucra al sistema inmunitario (el cuerpo reconoce al fármaco, o a un metabolito, como una amenaza) y no depende de la dosis -puede ocurrir incluso con cantidades mínimas en una persona sensibilizada. Un efecto adverso predecible, en cambio, se relaciona directamente con el mecanismo de acción del fármaco (como la tos por bradicinina de los IECA) y suele ser dosis-dependiente: a mayor dosis, mayor probabilidad e intensidad del efecto.',
  no:{
    1:'Son conceptos claramente distintos: uno involucra al sistema inmunitario y es independiente de dosis, el otro se relaciona con el mecanismo y suele depender de la dosis.',
    2:'Es precisamente lo contrario: una reacción alérgica NO depende necesariamente de una dosis alta, puede ocurrir con cantidades mínimas.',
    3:'El sistema inmunitario sí participa activamente en las reacciones alérgicas a fármacos, siendo precisamente el mecanismo que las distingue de los efectos adversos predecibles.'
  },
  trampa:'Confundir una reacción alérgica (inmunitaria, independiente de dosis) con un efecto adverso predecible (mecanismo conocido, dosis-dependiente).',
  obj:'Distinguir una reacción alérgica de un efecto adverso predecible relacionado con el mecanismo de acción.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 58 y 31.',
  tags:['reacción alérgica','efecto adverso predecible','dosis-dependencia']
},
{
  id:'U9-FA-Q37', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Reacciones adversas y toxicidad', sub:'Notificación de reacciones adversas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es importante notificar formalmente las reacciones adversas a fármacos observadas en la práctica clínica, incluso cuando ya son "conocidas"?',
  ops:[
    'Porque la farmacovigilancia depende de estos reportes acumulados para detectar patrones de seguridad que no siempre fueron evidentes durante los ensayos clínicos previos a la comercialización',
    'La notificación de reacciones adversas no tiene ninguna utilidad práctica real', 'Solo deben notificarse las reacciones adversas completamente nuevas, nunca las ya conocidas', 'Los ensayos clínicos previos a la comercialización siempre detectan absolutamente todas las reacciones adversas posibles de un fármaco'],
  ok:0,
  clave:'La farmacovigilancia depende de reportes acumulados para detectar patrones de seguridad no siempre evidentes en los ensayos clínicos previos a la comercialización.',
  exp:'Notificar reacciones adversas, incluso las ya "conocidas", es esencial porque la farmacovigilancia depende de estos reportes acumulados para detectar patrones de seguridad -como una frecuencia inesperadamente alta en cierto grupo de pacientes, o una interacción no descrita antes- que no siempre fueron evidentes durante los ensayos clínicos previos a la comercialización, generalmente realizados con muestras de tamaño limitado y bajo condiciones controladas distintas de la práctica clínica real.',
  no:{
    1:'La notificación de reacciones adversas tiene una utilidad práctica central: alimentar el sistema de farmacovigilancia que detecta patrones de seguridad tras la comercialización.',
    2:'También es valioso notificar reacciones adversas ya conocidas, porque contribuyen a estimar su frecuencia real y detectar patrones emergentes.',
    3:'Los ensayos clínicos previos a la comercialización tienen limitaciones (muestras limitadas, condiciones controladas) que no siempre revelan todas las reacciones adversas posibles.'
  },
  trampa:'Subestimar el valor de notificar reacciones adversas ya conocidas para la farmacovigilancia acumulada, o sobrestimar la capacidad de los ensayos clínicos previos de detectar todo.',
  obj:'Explicar la importancia de la notificación formal de reacciones adversas para la farmacovigilancia.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 58 y 31.',
  tags:['farmacovigilancia','notificación de reacciones adversas','seguridad del medicamento']
},
{
  id:'U9-FA-Q38', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacología del sistema nervioso central', sub:'Mecanismo de las benzodiazepinas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Sobre qué sistema de neurotransmisión actúan las benzodiazepinas, y qué efecto produce ese mecanismo?',
  ops:[
    'Potencian la acción del GABA (el principal neurotransmisor inhibidor del sistema nervioso central), produciendo un efecto sedante, ansiolítico y anticonvulsivante',
    'Las benzodiazepinas actúan exclusivamente sobre receptores dopaminérgicos, sin ninguna relación con el GABA', 'Las benzodiazepinas bloquean por completo la acción del GABA, produciendo excitación del sistema nervioso central', 'Las benzodiazepinas no tienen ningún mecanismo de acción conocido sobre el sistema nervioso central'],
  ok:0,
  clave:'Las benzodiazepinas potencian la acción del GABA, el principal neurotransmisor inhibidor, produciendo efecto sedante, ansiolítico y anticonvulsivante.',
  exp:'Las benzodiazepinas actúan potenciando la acción del GABA (el principal neurotransmisor inhibidor del sistema nervioso central), al unirse a un sitio específico del receptor GABA-A que aumenta la frecuencia con la que este se abre en presencia de GABA -esto produce un efecto sedante, ansiolítico, relajante muscular y anticonvulsivante, y explica también su riesgo de depresión del sistema nervioso central en sobredosis o combinadas con otros depresores.',
  no:{
    1:'Las benzodiazepinas actúan principalmente sobre el sistema GABAérgico, no sobre receptores dopaminérgicos.',
    2:'Es precisamente lo contrario: las benzodiazepinas POTENCIAN (no bloquean) la acción del GABA, produciendo INHIBICIÓN (no excitación) del sistema nervioso central.',
    3:'Las benzodiazepinas sí tienen un mecanismo de acción bien caracterizado: la potenciación del sistema GABAérgico.'
  },
  trampa:'Invertir el efecto de las benzodiazepinas sobre el GABA (potenciación, no bloqueo), o confundir el sistema de neurotransmisión implicado.',
  obj:'Explicar el mecanismo de acción de las benzodiazepinas sobre el sistema GABAérgico.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 22.',
  tags:['benzodiazepinas','GABA','sedación']
},
{
  id:'U9-FA-Q39', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacología del sistema nervioso central', sub:'Riesgo de combinar benzodiazepinas y opioides',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente recibe simultáneamente una benzodiazepina para ansiedad y un opioide para dolor crónico.',
  enunciado:'¿Por qué esta combinación tiene un riesgo particularmente alto de depresión respiratoria severa?',
  ops:[
    'Porque ambos fármacos deprimen el sistema nervioso central por mecanismos distintos pero complementarios (GABA y receptores opioides), potenciando su efecto depresor combinado más allá de la suma de cada uno por separado',
    'Las benzodiazepinas y los opioides actúan sobre exactamente el mismo receptor, sin ningún riesgo adicional al combinarlos', 'Esta combinación nunca representa ningún riesgo clínico relevante', 'El riesgo de esta combinación es exclusivamente gástrico, no respiratorio'],
  ok:0,
  clave:'Ambos deprimen el SNC por mecanismos distintos pero complementarios (GABA y opioides), potenciando el efecto depresor combinado por sinergismo.',
  exp:'Las benzodiazepinas (vía GABA) y los opioides (vía receptores opioides) deprimen el sistema nervioso central por mecanismos distintos pero complementarios; al combinarlos, el efecto depresor combinado -incluyendo sobre el centro respiratorio- puede ser mucho mayor que la simple suma de cada uno por separado (sinergismo), lo que explica el riesgo particularmente alto de depresión respiratoria severa con esta combinación, una de las más peligrosas en la práctica clínica.',
  no:{
    1:'Actúan sobre receptores DISTINTOS (GABA-A frente a receptores opioides); el riesgo surge precisamente de la potenciación de dos mecanismos depresores complementarios, no del mismo receptor.',
    2:'Esta combinación sí representa un riesgo clínico bien documentado y particularmente peligroso: la depresión respiratoria severa por sinergismo.',
    3:'El riesgo principal de esta combinación es RESPIRATORIO (depresión del centro respiratorio), no gástrico.'
  },
  trampa:'No reconocer el sinergismo entre dos mecanismos depresores distintos (GABA y opioides) como la causa del riesgo particularmente alto de esta combinación.',
  obj:'Explicar el riesgo de depresión respiratoria severa al combinar benzodiazepinas y opioides.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 22.',
  tags:['benzodiazepinas','opioides','sinergismo depresor']
},
{
  id:'U9-FA-Q40', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacología del sistema nervioso central', sub:'ISRS y latencia del efecto terapéutico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el efecto antidepresivo completo de un ISRS (inhibidor selectivo de la recaptación de serotonina) tarda varias semanas en manifestarse, a diferencia del aumento inmediato de serotonina en la sinapsis?',
  ops:[
    'Porque el efecto terapéutico depende de cambios adaptativos más lentos en los receptores y en la señalización neuronal, no solo del aumento inicial de serotonina disponible',
    'El ISRS no produce ningún efecto antidepresivo en absoluto', 'El aumento de serotonina en la sinapsis y el efecto antidepresivo completo ocurren siempre exactamente al mismo tiempo', 'Los ISRS no tienen ninguna relación con el sistema serotoninérgico'],
  ok:0,
  clave:'El efecto terapéutico depende de cambios adaptativos más lentos en receptores y señalización neuronal, no solo del aumento inicial de serotonina.',
  exp:'Aunque un ISRS aumenta la serotonina disponible en la sinapsis casi de inmediato (al bloquear su recaptación), el efecto antidepresivo completo tarda varias semanas en manifestarse porque depende de cambios adaptativos más lentos en los receptores postsinápticos y en la señalización neuronal (como cambios en la sensibilidad y densidad de ciertos receptores) -una razón importante para explicar a un paciente por qué debe continuar el tratamiento incluso si no siente mejoría inmediata.',
  no:{
    1:'Los ISRS sí producen un efecto antidepresivo bien documentado, aunque con una latencia característica de varias semanas.',
    2:'Es precisamente la disociación entre estos dos tiempos (aumento inmediato de serotonina, efecto terapéutico tardío) lo que explica la latencia característica de los ISRS.',
    3:'Los ISRS actúan directamente sobre el sistema serotoninérgico, siendo esa su relación central y definitoria como grupo farmacológico.'
  },
  trampa:'No reconocer la disociación temporal entre el aumento inmediato de serotonina y el efecto antidepresivo completo, que depende de cambios adaptativos más lentos.',
  obj:'Explicar por qué el efecto antidepresivo completo de un ISRS tarda varias semanas en manifestarse.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 30.',
  tags:['ISRS','serotonina','latencia del efecto antidepresivo']
},
{
  id:'U9-FA-Q41', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacología del sistema nervioso central', sub:'Antipsicóticos y síntomas extrapiramidales',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los antipsicóticos típicos (de primera generación) tienen mayor riesgo de producir síntomas extrapiramidales (como rigidez o temblor) que muchos antipsicóticos atípicos?',
  ops:[
    'Porque bloquean de forma más intensa y menos selectiva los receptores dopaminérgicos, incluyendo la vía nigroestriatal, que regula el control motor',
    'Los antipsicóticos típicos no tienen ningún efecto sobre receptores dopaminérgicos', 'Los antipsicóticos atípicos tienen exactamente el mismo perfil de bloqueo dopaminérgico que los típicos', 'Los síntomas extrapiramidales no tienen ninguna relación con el mecanismo de acción de los antipsicóticos'],
  ok:0,
  clave:'Los antipsicóticos típicos bloquean de forma más intensa y menos selectiva los receptores dopaminérgicos, incluyendo la vía nigroestriatal del control motor.',
  exp:'Los antipsicóticos actúan bloqueando receptores dopaminérgicos, lo que ayuda a controlar los síntomas psicóticos al actuar sobre la vía mesolímbica, pero los antipsicóticos típicos bloquean de forma más intensa y menos selectiva estos receptores, incluyendo la vía nigroestriatal (que regula el control motor), lo que explica su mayor riesgo de síntomas extrapiramidales; muchos antipsicóticos atípicos tienen un perfil de bloqueo más selectivo o combinado con otros receptores, reduciendo (aunque no eliminando) este riesgo.',
  no:{
    1:'Los antipsicóticos típicos sí tienen un efecto bien caracterizado sobre receptores dopaminérgicos, precisamente el mecanismo detrás de su eficacia y de sus efectos extrapiramidales.',
    2:'Los antipsicóticos atípicos suelen tener un perfil de bloqueo dopaminérgico más selectivo (o combinado con otros receptores) que reduce el riesgo extrapiramidal frente a los típicos.',
    3:'Los síntomas extrapiramidales sí tienen una relación directa con el mecanismo de acción de los antipsicóticos, específicamente el bloqueo de la vía dopaminérgica nigroestriatal.'
  },
  trampa:'No reconocer la vía nigroestriatal como la responsable de los síntomas extrapiramidales, o asumir que todos los antipsicóticos tienen el mismo perfil de riesgo.',
  obj:'Explicar por qué los antipsicóticos típicos tienen mayor riesgo de síntomas extrapiramidales que muchos atípicos.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 29.',
  tags:['antipsicóticos típicos','síntomas extrapiramidales','vía nigroestriatal']
},
{
  id:'U9-FA-Q42', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacología del sistema nervioso central', sub:'Anticonvulsivantes y estabilización de membrana',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es uno de los mecanismos generales compartidos por varios anticonvulsivantes para prevenir las crisis?',
  ops:[
    'Estabilizar los canales de sodio dependientes de voltaje en su estado inactivo, dificultando la generación de descargas neuronales repetitivas excesivas',
    'Los anticonvulsivantes no comparten ningún mecanismo general entre sí', 'Todos los anticonvulsivantes actúan exclusivamente aumentando los canales de sodio, favoreciendo más descargas neuronales', 'Los anticonvulsivantes actúan únicamente sobre el sistema cardiovascular, sin ningún efecto neuronal'],
  ok:0,
  clave:'Varios anticonvulsivantes estabilizan los canales de sodio dependientes de voltaje en su estado inactivo, dificultando descargas neuronales repetitivas excesivas.',
  exp:'Uno de los mecanismos generales compartidos por varios anticonvulsivantes (como la fenitoína y la carbamazepina) es estabilizar los canales de sodio dependientes de voltaje en su estado inactivo, dificultando que la neurona genere las descargas repetitivas y excesivas que caracterizan una crisis convulsiva -otros mecanismos incluyen potenciar el GABA (similar a las benzodiazepinas) o modular canales de calcio, según el fármaco específico.',
  no:{
    1:'Sí existen mecanismos generales compartidos entre varios anticonvulsivantes, como la estabilización de canales de sodio, aunque no todos actúan exactamente igual.',
    2:'Es precisamente lo contrario: estabilizar los canales de sodio DIFICULTA (no favorece) las descargas neuronales repetitivas excesivas.',
    3:'Los anticonvulsivantes actúan sobre el sistema nervioso (canales iónicos, neurotransmisión), no exclusivamente sobre el sistema cardiovascular.'
  },
  trampa:'Invertir el efecto de la estabilización de canales de sodio (dificulta, no favorece, las descargas neuronales) o desconocer que varios anticonvulsivantes comparten mecanismos generales.',
  obj:'Explicar el mecanismo de estabilización de canales de sodio compartido por varios anticonvulsivantes.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 24.',
  tags:['anticonvulsivantes','canales de sodio','crisis convulsiva']
},
{
  id:'U9-FA-Q43', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacología endocrina', sub:'Riesgo de suspensión abrupta de corticoides',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente ha tomado corticoides orales en dosis altas durante varias semanas, y decide suspenderlos abruptamente por su cuenta.',
  enunciado:'¿Qué riesgo específico corre este paciente, y por qué?',
  ops:[
    'Insuficiencia suprarrenal aguda, porque el uso prolongado de corticoides exógenos suprime el eje hipotálamo-hipófisis-suprarrenal, y las glándulas suprarrenales no pueden retomar de inmediato su producción normal de cortisol',
    'Ningún riesgo especial; los corticoides orales pueden suspenderse abruptamente sin ninguna consecuencia, sin importar la dosis ni la duración del tratamiento', 'El uso prolongado de corticoides siempre aumenta la producción suprarrenal propia, sin ningún riesgo de suspensión', 'Este riesgo solo aplicaría a corticoides administrados por vía intravenosa, nunca por vía oral'],
  ok:0,
  clave:'Riesgo de insuficiencia suprarrenal aguda, porque el uso prolongado de corticoides exógenos suprime el eje hipotálamo-hipófisis-suprarrenal.',
  exp:'El uso prolongado de corticoides exógenos en dosis altas suprime el eje hipotálamo-hipófisis-suprarrenal, reduciendo la producción propia de cortisol por las glándulas suprarrenales; si se suspenden abruptamente, estas glándulas no pueden retomar de inmediato su producción normal, y el paciente puede desarrollar insuficiencia suprarrenal aguda -por eso los corticoides en tratamientos prolongados se reducen de forma gradual ("descenso escalonado"), nunca se suspenden de golpe.',
  no:{
    1:'La suspensión abrupta de corticoides tras uso prolongado sí representa un riesgo bien documentado: la insuficiencia suprarrenal aguda.',
    2:'Es precisamente lo contrario: el uso prolongado de corticoides exógenos SUPRIME (no aumenta) la producción suprarrenal propia.',
    3:'El riesgo de supresión del eje hipotálamo-hipófisis-suprarrenal aplica a corticoides sistémicos en general (orales o intravenosos), no exclusivamente a la vía intravenosa.'
  },
  trampa:'No reconocer la supresión del eje hipotálamo-hipófisis-suprarrenal como el mecanismo detrás del riesgo de suspender abruptamente corticoides tras un uso prolongado.',
  obj:'Explicar el riesgo de insuficiencia suprarrenal aguda al suspender abruptamente corticoides tras uso prolongado.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 39.',
  tags:['corticoides','eje hipotálamo-hipófisis-suprarrenal','insuficiencia suprarrenal aguda']
},
{
  id:'U9-FA-Q44', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacología endocrina', sub:'Metformina como primera línea en diabetes tipo 2',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la metformina es habitualmente el fármaco de primera línea en la diabetes tipo 2, más allá de su eficacia para reducir la glucosa?',
  ops:[
    'Porque, a diferencia de otros hipoglucemiantes, tiene bajo riesgo de causar hipoglucemia por sí sola y se asocia con estabilidad o incluso pérdida de peso',
    'La metformina no tiene ningún efecto conocido sobre los niveles de glucosa en sangre', 'La metformina produce hipoglucemia grave con mucha más frecuencia que cualquier otro hipoglucemiante', 'La elección de la metformina como primera línea no tiene ninguna relación con su perfil de seguridad'],
  ok:0,
  clave:'La metformina tiene bajo riesgo de hipoglucemia por sí sola y se asocia con estabilidad o pérdida de peso, a diferencia de otros hipoglucemiantes.',
  exp:'La metformina es habitualmente el fármaco de primera línea en diabetes tipo 2 no solo por su eficacia para reducir la glucosa (principalmente al reducir la producción hepática de glucosa y mejorar la sensibilidad a la insulina), sino también por su perfil de seguridad favorable: a diferencia de fármacos que estimulan directamente la secreción de insulina, tiene bajo riesgo de causar hipoglucemia por sí sola, y se asocia con estabilidad o incluso pérdida de peso, en vez del aumento de peso que producen otros hipoglucemiantes.',
  no:{
    1:'La metformina sí tiene un efecto bien establecido y central sobre los niveles de glucosa, siendo precisamente su indicación principal.',
    2:'Es precisamente lo contrario: la metformina tiene BAJO riesgo de hipoglucemia por sí sola, a diferencia de otros hipoglucemiantes con mayor riesgo.',
    3:'El perfil de seguridad (bajo riesgo de hipoglucemia, efecto neutro o favorable sobre el peso) es una razón central para su elección como primera línea.'
  },
  trampa:'No reconocer el perfil de seguridad favorable de la metformina (bajo riesgo de hipoglucemia, efecto sobre el peso) como razón adicional de su elección como primera línea.',
  obj:'Explicar por qué la metformina es habitualmente el fármaco de primera línea en diabetes tipo 2.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 41.',
  tags:['metformina','diabetes tipo 2','perfil de seguridad']
},
{
  id:'U9-FA-Q45', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacología endocrina', sub:'Levotiroxina y monitorización de dosis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se requiere monitorización periódica (habitualmente con TSH) al ajustar la dosis de levotiroxina en un paciente con hipotiroidismo?',
  ops:[
    'Porque tanto una dosis insuficiente (hipotiroidismo persistente) como una dosis excesiva (hipertiroidismo iatrogénico, con riesgo cardiovascular) tienen consecuencias clínicas relevantes, y el margen entre ambas puede ser estrecho para cada paciente',
    'La levotiroxina no requiere ningún tipo de monitorización una vez iniciado el tratamiento', 'Cualquier dosis de levotiroxina, sin importar cuál sea, produce exactamente el mismo efecto clínico', 'La monitorización de la levotiroxina no tiene ninguna relación con los niveles de TSH'],
  ok:0,
  clave:'Tanto la dosis insuficiente como la excesiva de levotiroxina tienen consecuencias clínicas relevantes, y el margen entre ambas puede ser estrecho.',
  exp:'La levotiroxina reemplaza la hormona tiroidea deficiente en el hipotiroidismo, pero tanto una dosis insuficiente (que deja al paciente con hipotiroidismo persistente, con sus síntomas y riesgos) como una dosis excesiva (que produce hipertiroidismo iatrogénico, con riesgo cardiovascular como arritmias y pérdida de masa ósea) tienen consecuencias clínicas relevantes -el margen entre ambas puede ser estrecho para cada paciente, por eso se requiere monitorización periódica, habitualmente con niveles de TSH, para ajustar la dosis con precisión.',
  no:{
    1:'La levotiroxina sí requiere monitorización periódica bien establecida, precisamente para ajustar la dosis dentro de un margen terapéutico estrecho.',
    2:'Distintas dosis de levotiroxina sí producen efectos clínicos distintos (desde hipotiroidismo persistente hasta hipertiroidismo iatrogénico), no el mismo efecto en todos los casos.',
    3:'La monitorización de la levotiroxina se basa precisamente en los niveles de TSH, que reflejan si la dosis está siendo insuficiente, adecuada o excesiva.'
  },
  trampa:'No reconocer el margen terapéutico estrecho de la levotiroxina y el riesgo tanto de dosis insuficiente como excesiva, que justifica la monitorización periódica.',
  obj:'Explicar por qué se requiere monitorización periódica al ajustar la dosis de levotiroxina.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 38.',
  tags:['levotiroxina','hipotiroidismo','monitorización con TSH']
},
{
  id:'U9-FA-Q46', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacología endocrina', sub:'Anticonceptivos hormonales combinados y riesgo trombótico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una paciente fumadora mayor de 35 años solicita iniciar un anticonceptivo hormonal combinado (estrógeno y progestágeno).',
  enunciado:'¿Por qué esta combinación de factores requiere especial precaución en la elección del anticonceptivo?',
  ops:[
    'Porque el componente estrogénico de los anticonceptivos combinados aumenta el riesgo trombótico, y este riesgo se potencia considerablemente con el tabaquismo y la edad mayor de 35 años',
    'El tabaquismo no tiene ninguna relación con el riesgo de los anticonceptivos hormonales', 'Los anticonceptivos hormonales combinados no tienen ningún riesgo trombótico conocido', 'La edad de la paciente no tiene ninguna relevancia para la elección de un anticonceptivo hormonal'],
  ok:0,
  clave:'El componente estrogénico aumenta el riesgo trombótico, potenciado considerablemente por el tabaquismo y la edad mayor de 35 años.',
  exp:'El componente estrogénico de los anticonceptivos hormonales combinados aumenta el riesgo trombótico (trombosis venosa profunda, embolia pulmonar, y en menor medida eventos arteriales), un riesgo que se potencia considerablemente con factores adicionales como el tabaquismo y la edad mayor de 35 años; en una paciente con esta combinación de factores, suele preferirse un método anticonceptivo sin estrógeno (como uno solo con progestágeno, o un método no hormonal).',
  no:{
    1:'El tabaquismo sí tiene una relación bien establecida con el aumento del riesgo trombótico asociado a los anticonceptivos hormonales combinados.',
    2:'Los anticonceptivos hormonales combinados sí tienen un riesgo trombótico conocido, relacionado con su componente estrogénico.',
    3:'La edad mayor de 35 años sí es un factor de riesgo adicional relevante para la elección de un anticonceptivo hormonal, especialmente combinado con otros factores como el tabaquismo.'
  },
  trampa:'No reconocer el riesgo trombótico del componente estrogénico y cómo se potencia con el tabaquismo y la edad, un patrón clásico de precaución clínica.',
  obj:'Explicar la precaución al elegir un anticonceptivo hormonal combinado en una paciente fumadora mayor de 35 años.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 40.',
  tags:['anticonceptivos hormonales combinados','riesgo trombótico','tabaquismo']
},
{
  id:'U9-FA-Q47', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Uso racional de antimicrobianos', sub:'Antibiótico de amplio espectro innecesario',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con una infección leve, de la que ya se conoce el germen causante y su sensibilidad a un antibiótico de espectro reducido, recibe en su lugar un antibiótico de amplio espectro "por seguridad".',
  enunciado:'¿Por qué esta elección no es la más racional, aunque el amplio espectro también cubriría al germen identificado?',
  ops:[
    'Porque el uso innecesario de antibióticos de amplio espectro favorece la presión selectiva hacia la resistencia antimicrobiana, sin ningún beneficio clínico adicional cuando ya se conoce el germen y su sensibilidad',
    'El uso de antibióticos de amplio espectro nunca tiene ninguna consecuencia negativa, sin importar la situación clínica', 'Un antibiótico de espectro reducido siempre es menos eficaz que uno de amplio espectro contra el mismo germen', 'La elección entre espectro reducido y amplio nunca tiene ninguna relación con la resistencia antimicrobiana'],
  ok:0,
  clave:'El uso innecesario de antibióticos de amplio espectro favorece la resistencia antimicrobiana, sin beneficio clínico adicional cuando ya se conoce el germen y su sensibilidad.',
  exp:'El uso racional de antimicrobianos implica elegir, siempre que sea posible, el antibiótico de espectro más reducido que cubra eficazmente al germen identificado: usar uno de amplio espectro quo cuando ya se conoce el germen y su sensibilidad a una opción más específica no aporta ningún beneficio clínico adicional, pero sí favorece la presión selectiva hacia la resistencia antimicrobiana, al exponer innecesariamente a más bacterias (incluida la flora normal del paciente) a un antibiótico de mayor espectro.',
  no:{
    1:'El uso innecesario de antibióticos de amplio espectro sí tiene una consecuencia negativa bien documentada: favorecer la resistencia antimicrobiana.',
    2:'Cuando el germen es sensible a ambos, un antibiótico de espectro reducido puede ser igual de eficaz clínicamente que uno de amplio espectro contra ese germen específico.',
    3:'La elección entre espectro reducido y amplio tiene una relación directa y bien establecida con la presión selectiva hacia la resistencia antimicrobiana.'
  },
  trampa:'No reconocer que usar un antibiótico de amplio espectro innecesariamente favorece la resistencia antimicrobiana sin aportar beneficio clínico adicional cuando ya se conoce el germen.',
  obj:'Explicar por qué usar un antibiótico de amplio espectro innecesariamente no es la elección más racional.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.',
  tags:['uso racional de antimicrobianos','espectro reducido','resistencia antimicrobiana']
},
{
  id:'U9-FA-Q48', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Uso racional de antimicrobianos', sub:'Completar el curso completo del antibiótico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es importante completar el curso completo de antibiótico prescrito, aunque el paciente se sienta mejor antes de terminarlo?',
  ops:[
    'Porque suspenderlo antes de tiempo puede dejar sobrevivientes bacterianos parcialmente expuestos al antibiótico, favoreciendo la selección de cepas más resistentes y el riesgo de recaída',
    'Completar el curso completo del antibiótico no tiene ninguna relación con el riesgo de resistencia bacteriana', 'Sentirse mejor siempre significa que todas las bacterias causantes de la infección ya fueron eliminadas por completo', 'La duración del tratamiento antibiótico nunca tiene ninguna relevancia clínica una vez que los síntomas mejoran'],
  ok:0,
  clave:'Suspender antes de tiempo puede dejar sobrevivientes bacterianos parcialmente expuestos, favoreciendo cepas más resistentes y el riesgo de recaída.',
  exp:'Sentirse mejor no siempre significa que todas las bacterias causantes de la infección ya fueron eliminadas: suspender el antibiótico antes de completar el curso prescrito puede dejar sobrevivientes bacterianos que estuvieron parcialmente expuestos al fármaco (justo las cepas con mayor capacidad de resistir), favoreciendo la selección de bacterias más resistentes y aumentando el riesgo de que la infección recaiga, potencialmente siendo más difícil de tratar la segunda vez.',
  no:{
    1:'Completar el curso completo sí tiene una relación directa con reducir el riesgo de selección de resistencia bacteriana.',
    2:'La mejoría sintomática no garantiza la eliminación completa de todas las bacterias causantes; algunas pueden sobrevivir aunque los síntomas ya hayan mejorado.',
    3:'La duración completa del tratamiento sí es clínicamente relevante, incluso después de la mejoría de los síntomas, precisamente para evitar recaída y resistencia.'
  },
  trampa:'Asumir que la mejoría de los síntomas equivale a la eliminación completa de la infección, ignorando el riesgo de sobrevivientes bacterianos parcialmente resistentes.',
  obj:'Explicar por qué es importante completar el curso completo de un antibiótico prescrito.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.',
  tags:['curso completo de antibiótico','resistencia bacteriana','recaída']
},
{
  id:'U9-FA-Q49', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Uso racional de antimicrobianos', sub:'Antibiótico empírico vs. dirigido',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia entre un tratamiento antibiótico "empírico" y uno "dirigido"?',
  ops:[
    'El empírico se elige antes de conocer el germen exacto, basado en la probabilidad clínica más frecuente para ese cuadro; el dirigido se ajusta una vez se conoce el germen y su sensibilidad, habitualmente por cultivo',
    'Ambos términos son exactamente sinónimos, sin ninguna diferencia real', 'El tratamiento dirigido siempre se elige antes que el empírico, nunca después', 'Un tratamiento empírico nunca puede cambiarse una vez iniciado, sin importar los resultados de cultivo posteriores'],
  ok:0,
  clave:'El empírico se elige antes de conocer el germen, según la probabilidad clínica; el dirigido se ajusta al conocer el germen y su sensibilidad, habitualmente por cultivo.',
  exp:'Un tratamiento antibiótico empírico se elige antes de conocer el germen exacto causante de la infección, basado en la probabilidad clínica más frecuente para ese cuadro (por ejemplo, los gérmenes más comunes en una neumonía adquirida en la comunidad); un tratamiento dirigido se ajusta una vez se conoce el germen específico y su sensibilidad, habitualmente por cultivo, permitiendo afinar hacia un antibiótico más específico y de espectro más reducido -el uso racional de antimicrobianos favorece pasar de empírico a dirigido tan pronto como sea posible.',
  no:{
    1:'Son conceptos claramente distintos: uno se basa en probabilidad clínica sin conocer el germen, el otro se ajusta con el germen ya identificado.',
    2:'Es al revés: el tratamiento EMPÍRICO se elige ANTES (no después) que el dirigido, cuando aún no se conoce el germen específico.',
    3:'Un tratamiento empírico sí puede (y suele) ajustarse hacia un tratamiento dirigido una vez se conocen los resultados del cultivo.'
  },
  trampa:'Confundir el orden temporal entre tratamiento empírico (primero) y dirigido (después de conocer el germen), o asumir que un empírico nunca puede ajustarse.',
  obj:'Distinguir el tratamiento antibiótico empírico del dirigido.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.',
  tags:['antibiótico empírico','antibiótico dirigido','cultivo microbiológico']
},
{
  id:'U9-FA-Q50', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Uso racional de antimicrobianos', sub:'Consecuencia colectiva de la resistencia antimicrobiana',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la resistencia antimicrobiana se considera un problema de salud pública, más allá de su efecto en un paciente individual?',
  ops:[
    'Porque una cepa bacteriana resistente que surge en un paciente puede transmitirse a otras personas, y las decisiones de prescripción individuales, sumadas a gran escala, determinan qué tan eficaces siguen siendo los antibióticos disponibles para toda la población',
    'La resistencia antimicrobiana afecta exclusivamente al paciente en el que se originó, sin ninguna posibilidad de transmisión a otras personas', 'El uso racional de antimicrobianos por parte de un solo médico no tiene ningún impacto real a nivel poblacional', 'La resistencia antimicrobiana es un fenómeno completamente aleatorio, sin ninguna relación con los patrones de prescripción de antibióticos'],
  ok:0,
  clave:'Una cepa resistente puede transmitirse a otras personas; las decisiones de prescripción individuales, sumadas a gran escala, determinan la eficacia de los antibióticos para toda la población.',
  exp:'La resistencia antimicrobiana se considera un problema de salud pública porque una cepa bacteriana resistente que surge en un paciente puede transmitirse a otras personas (directamente, o a través del ambiente), y porque las decisiones de prescripción individuales, sumadas a gran escala en toda una población a lo largo del tiempo, determinan qué tan eficaces siguen siendo los antibióticos disponibles para todos -por eso el uso racional de antimicrobianos no es solo una cuestión de buena práctica individual, sino una responsabilidad colectiva con impacto en la salud de toda la comunidad.',
  no:{
    1:'Una cepa resistente sí puede transmitirse a otras personas, siendo precisamente esa transmisibilidad la que convierte la resistencia en un problema colectivo, no solo individual.',
    2:'El uso racional de antimicrobianos por parte de cada médico sí contribuye, sumado a gran escala, al impacto poblacional sobre la resistencia antimicrobiana.',
    3:'Los patrones de prescripción y uso de antibióticos tienen una relación directa y bien documentada con la presión selectiva que favorece la resistencia antimicrobiana.'
  },
  trampa:'No reconocer la dimensión colectiva y transmisible de la resistencia antimicrobiana, reduciéndola erróneamente a un problema exclusivamente individual.',
  obj:'Explicar por qué la resistencia antimicrobiana se considera un problema de salud pública.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.',
  tags:['resistencia antimicrobiana','salud pública','uso racional de antimicrobianos']
}

]);
