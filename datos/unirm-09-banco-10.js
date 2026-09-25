/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE FARMACOLOGIA (1/2)
   Amplia Farmacologia de 5 a 50 preguntas junto con
   unirm-09-banco-11.js. Esta parte cubre farmacocinetica
   (absorcion/distribucion, metabolismo/excrecion), farmacodinamia,
   interacciones, antibioticos y antiinflamatorios/analgesicos
   (temas 1-6).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== FARMACOLOGIA ===================== */
{
  id:'U9-FA-Q06', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacocinética: absorción y distribución', sub:'Biodisponibilidad intravenosa vs. oral',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la biodisponibilidad de una dosis intravenosa es, por definición, del 100%?',
  ops:[
    'Porque entra directamente a la circulación sistémica, sin necesitar absorción ni estar sujeta al efecto de primer paso hepático',
    'La vía intravenosa tiene la misma biodisponibilidad que la vía oral en todos los casos', 'La biodisponibilidad intravenosa nunca puede calcularse', 'La vía intravenosa siempre tiene menor biodisponibilidad que la oral'],
  ok:0,
  clave:'La vía intravenosa entra directamente a la circulación sistémica, sin absorción ni primer paso hepático, por eso su biodisponibilidad es 100%.',
  exp:'Una dosis intravenosa tiene, por definición, biodisponibilidad del 100% (entra directamente a la sangre, sin necesitar absorción a través de una membrana ni pasar primero por el hígado); una dosis oral casi siempre tiene una biodisponibilidad menor, porque parte del fármaco puede no absorberse completamente, o ser metabolizado por el efecto de primer paso antes de alcanzar la circulación general.',
  no:{
    1:'La vía oral casi siempre tiene biodisponibilidad MENOR que la intravenosa, no la misma.',
    2:'La biodisponibilidad intravenosa sí puede definirse claramente: es 100% por la naturaleza directa de esta vía de administración.',
    3:'Es al revés: la vía intravenosa tiene MAYOR biodisponibilidad (100%) que la oral, no menor.'
  },
  trampa:'No reconocer por qué la vía intravenosa evita tanto la barrera de absorción como el efecto de primer paso hepático, dándole biodisponibilidad del 100%.',
  obj:'Explicar por qué la biodisponibilidad de una dosis intravenosa es del 100%.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3.',
  tags:['biodisponibilidad','vía intravenosa','vía oral']
},
{
  id:'U9-FA-Q07', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacocinética: absorción y distribución', sub:'Efecto de primer paso hepático',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el efecto de primer paso hepático, y por qué reduce la biodisponibilidad de un fármaco oral?',
  ops:[
    'Tras absorberse en el intestino, la sangre pasa primero por el hígado (circulación portal), que puede metabolizar una parte considerable del fármaco antes de que llegue a la circulación general',
    'Es un efecto que solo ocurre con fármacos administrados por vía intravenosa', 'El efecto de primer paso siempre aumenta la biodisponibilidad de un fármaco oral', 'El hígado nunca metaboliza un fármaco antes de que llegue a la circulación general'],
  ok:0,
  clave:'La sangre absorbida en el intestino pasa primero por el hígado (circulación portal), que metaboliza parte del fármaco antes de llegar a la circulación general.',
  exp:'El efecto de primer paso hepático es la razón más frecuente por la que un fármaco administrado por vía oral tiene menor biodisponibilidad: tras absorberse en el intestino, la sangre pasa primero por el hígado antes de llegar a la circulación general, y el hígado puede metabolizar una parte considerable del fármaco en ese primer paso, antes de que tenga oportunidad de ejercer su efecto.',
  no:{
    1:'El efecto de primer paso es específico de la vía ORAL (por la circulación portal), no de la vía intravenosa, que evita este paso.',
    2:'El efecto de primer paso REDUCE (no aumenta) la biodisponibilidad, al metabolizar parte del fármaco antes de que llegue a la circulación general.',
    3:'El hígado sí puede metabolizar significativamente un fármaco absorbido por vía oral antes de que alcance la circulación sistémica, precisamente el mecanismo del primer paso.'
  },
  trampa:'Confundir el efecto de primer paso con un fenómeno de la vía intravenosa, o invertir su efecto (reducir en vez de aumentar la biodisponibilidad).',
  obj:'Explicar el mecanismo del efecto de primer paso hepático y su impacto en la biodisponibilidad oral.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3.',
  tags:['primer paso hepático','biodisponibilidad oral','circulación portal']
},
{
  id:'U9-FA-Q08', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacocinética: absorción y distribución', sub:'Volumen de distribución alto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué sugiere un volumen de distribución alto de un fármaco?',
  ops:[
    'Que el fármaco se distribuye ampliamente fuera de la sangre, hacia tejidos como el graso o el muscular',
    'Que el fármaco permanece completamente confinado dentro del compartimento vascular', 'El volumen de distribución no tiene relación con dónde se ubica el fármaco en el cuerpo', 'Un volumen de distribución alto siempre indica que el fármaco no tiene ningún efecto terapéutico'],
  ok:0,
  clave:'Un volumen de distribución alto sugiere que el fármaco se distribuye ampliamente fuera de la sangre, hacia los tejidos.',
  exp:'El volumen de distribución refleja indirectamente qué tanto un fármaco sale del torrente sanguíneo hacia los tejidos: un volumen de distribución alto sugiere que el fármaco se distribuye ampliamente fuera de la sangre (por ejemplo, hacia el tejido graso o muscular), mientras que uno bajo sugiere que permanece más confinado al compartimento vascular.',
  no:{
    1:'Un volumen de distribución BAJO (no alto) sugiere que el fármaco permanece confinado principalmente al compartimento vascular.',
    2:'El volumen de distribución sí tiene una relación directa con la ubicación del fármaco en el cuerpo (sangre frente a tejidos).',
    3:'El volumen de distribución no determina por sí solo si el fármaco tiene efecto terapéutico; es un parámetro farmacocinético distinto de la eficacia.'
  },
  trampa:'Invertir el significado de un volumen de distribución alto (fármaco distribuido ampliamente en tejidos) frente a uno bajo (fármaco confinado a la sangre).',
  obj:'Interpretar qué sugiere un volumen de distribución alto sobre la ubicación del fármaco en el cuerpo.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3.',
  tags:['volumen de distribución','distribución tisular']
},
{
  id:'U9-FA-Q09', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacocinética: absorción y distribución', sub:'Unión a proteínas plasmáticas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué determina la unión a proteínas plasmáticas de un fármaco?',
  ops:[
    'Qué fracción del fármaco circula "libre" (activa, capaz de actuar sobre su receptor) frente a "unida" (inactiva temporalmente, como una reserva)',
    'La unión a proteínas plasmáticas no tiene ninguna relación con la actividad del fármaco', 'Toda la dosis del fármaco siempre circula unida a proteínas plasmáticas, sin ninguna fracción libre', 'La unión a proteínas plasmáticas determina exclusivamente la vía de administración del fármaco'],
  ok:0,
  clave:'La unión a proteínas plasmáticas determina qué fracción del fármaco circula libre (activa) frente a unida (inactiva temporalmente).',
  exp:'La unión a proteínas plasmáticas (con frecuencia a la albúmina) determina qué fracción del fármaco circula "libre" (activa, capaz de actuar sobre su receptor) frente a "unida" (inactiva temporalmente, como una reserva que puede liberarse gradualmente conforme la fracción libre se metaboliza o elimina).',
  no:{
    1:'La unión a proteínas plasmáticas tiene una relación directa con la actividad farmacológica, al determinar qué fracción está disponible para actuar.',
    2:'Existe habitualmente una fracción libre además de la unida; rara vez toda la dosis circula completamente unida sin ninguna fracción libre.',
    3:'La unión a proteínas plasmáticas es un fenómeno de distribución/actividad, no determina la vía de administración del fármaco.'
  },
  trampa:'No reconocer la distinción entre fármaco libre (activo) y unido a proteínas (inactivo temporalmente) como base del concepto de unión a proteínas plasmáticas.',
  obj:'Explicar qué determina la unión a proteínas plasmáticas de un fármaco.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3.',
  tags:['unión a proteínas plasmáticas','fármaco libre','albúmina']
},
{
  id:'U9-FA-Q10', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacocinética: absorción y distribución', sub:'Fármacos con primer paso intenso',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué implicación clínica tiene un fármaco con un efecto de primer paso hepático especialmente intenso?',
  ops:[
    'Puede volverse poco útil por vía oral, porque una gran parte de la dosis se metaboliza antes de llegar a la circulación general, requiriendo dosis orales mucho más altas o el uso de otra vía de administración',
    'Un primer paso intenso no tiene ninguna implicación clínica relevante', 'Un fármaco con primer paso intenso siempre tiene la misma eficacia por vía oral que por vía intravenosa', 'El primer paso hepático intenso solo afecta a fármacos administrados por vía intravenosa'],
  ok:0,
  clave:'Un primer paso intenso puede volver poco útil la vía oral, requiriendo dosis mucho más altas o el uso de otra vía de administración.',
  exp:'Algunos fármacos tienen un primer paso hepático tan intenso que se vuelven poco útiles por vía oral: una gran parte de la dosis administrada se metaboliza antes de llegar a la circulación general, así que se necesitarían dosis orales desproporcionadamente altas para lograr el efecto deseado, o se prefiere usar otra vía de administración que evite este paso (como la intravenosa, la sublingual, o la transdérmica).',
  no:{
    1:'Sí tiene una implicación clínica relevante: puede determinar si un fármaco es viable por vía oral o si requiere otra vía de administración.',
    2:'Un fármaco con primer paso intenso típicamente tiene MENOR eficacia por vía oral que por vía intravenosa (que evita ese primer paso), no la misma.',
    3:'El efecto de primer paso hepático es específico de la vía ORAL (por la circulación portal); no afecta a fármacos administrados por vía intravenosa.'
  },
  trampa:'No reconocer la implicación práctica de un primer paso hepático intenso para la elección de la vía de administración de un fármaco.',
  obj:'Explicar la implicación clínica de un efecto de primer paso hepático especialmente intenso.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3.',
  tags:['primer paso hepático','vía de administración','dosis oral']
},
{
  id:'U9-FA-Q11', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacocinética: metabolismo y excreción', sub:'Profármaco y metabolito activo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un fármaco se administra en una forma inicialmente inactiva, y el hígado la convierte, mediante el citocromo P450, en la forma que realmente ejerce el efecto terapéutico.',
  enunciado:'¿Qué término describe la forma inicial inactiva administrada, y qué ocurre si el paciente metaboliza muy lentamente ese fármaco?',
  ops:[
    'Es un "profármaco"; si el paciente lo metaboliza muy lentamente (por variación genética), puede no lograr un efecto terapéutico adecuado, incluso con la dosis estándar',
    'Es un antídoto, sin ninguna relación con la vía metabólica', 'El metabolismo lento del profármaco siempre aumenta su efecto terapéutico', 'Un profármaco no requiere ningún metabolismo para ejercer su efecto'],
  ok:0,
  clave:'Es un profármaco; si se metaboliza lentamente (variación genética), puede no lograr efecto terapéutico adecuado con la dosis estándar.',
  exp:'Algunos fármacos se administran precisamente como una forma inactiva (un "profármaco") que el hígado convierte, mediante el citocromo P450, en su metabolito activo real. Si un paciente cuyo citocromo P450 metaboliza ese fármaco muy lentamente (por variación genética), puede no lograr un efecto terapéutico adecuado, incluso con la dosis estándar, porque simplemente no genera suficiente metabolito activo.',
  no:{
    1:'Un antídoto es una sustancia que revierte toxicidad, un concepto distinto del profármaco, que requiere metabolismo para activarse.',
    2:'Es al revés: metabolizar LENTAMENTE un profármaco REDUCE (no aumenta) su efecto terapéutico, porque se genera menos metabolito activo.',
    3:'Un profármaco requiere, por definición, ser metabolizado para convertirse en su forma activa y ejercer su efecto.'
  },
  trampa:'Confundir el profármaco con un antídoto, o invertir el efecto de un metabolismo lento sobre la generación del metabolito activo.',
  obj:'Explicar el concepto de profármaco y la consecuencia de un metabolismo lento por variación genética.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 4.',
  tags:['profármaco','metabolito activo','farmacogenética']
},
{
  id:'U9-FA-Q12', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacocinética: metabolismo y excreción', sub:'Vida media y frecuencia de dosis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo determina la vida media de un fármaco la frecuencia con la que debe administrarse una dosis?',
  ops:[
    'Un fármaco de vida media corta necesita dosis más frecuentes que uno de vida media larga, para mantener una concentración estable en el cuerpo',
    'La vida media no tiene ninguna relación con la frecuencia de administración de las dosis', 'Un fármaco de vida media corta necesita dosis MENOS frecuentes que uno de vida media larga', 'Todos los fármacos, sin importar su vida media, se administran exactamente con la misma frecuencia'],
  ok:0,
  clave:'Vida media corta requiere dosis más frecuentes; vida media larga permite dosis más espaciadas, para mantener concentración estable.',
  exp:'La vida media de un fármaco es el tiempo que tarda su concentración plasmática en reducirse a la mitad, y es el dato que determina, en la práctica, cada cuánto tiempo hay que administrar una dosis para mantener una concentración estable en el cuerpo: un fármaco de vida media corta necesita dosis más frecuentes que uno de vida media larga.',
  no:{
    1:'La vida media tiene una relación directa y central con la frecuencia de administración, siendo el parámetro que la determina.',
    2:'Es al revés: la vida media CORTA requiere dosis MÁS frecuentes, no menos, para mantener la concentración estable.',
    3:'La frecuencia de administración varía considerablemente según la vida media específica de cada fármaco, no es uniforme.'
  },
  trampa:'Invertir la relación entre vida media (corta/larga) y frecuencia de dosis (más/menos frecuente).',
  obj:'Explicar cómo la vida media de un fármaco determina la frecuencia de administración de sus dosis.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 4.',
  tags:['vida media','frecuencia de dosis','concentración plasmática estable']
},
{
  id:'U9-FA-Q13', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacocinética: metabolismo y excreción', sub:'Ajuste de dosis en enfermedad renal',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con enfermedad renal crónica avanzada recibe la dosis estándar de un fármaco que se elimina principalmente por vía renal.',
  enunciado:'¿Qué riesgo específico corre este paciente, y por qué?',
  ops:[
    'Acumulación de concentraciones más altas de lo esperado, porque su función renal disminuida elimina más lento el fármaco que depende principalmente de esa vía',
    'Ningún riesgo especial; la función renal no tiene relación con la eliminación de fármacos', 'El paciente eliminará el fármaco más rápido de lo normal por su enfermedad renal', 'Este riesgo solo aplicaría si el fármaco se metabolizara exclusivamente por el hígado'],
  ok:0,
  clave:'El paciente acumula concentraciones más altas de lo esperado, porque su función renal disminuida elimina más lento el fármaco dependiente de esa vía.',
  exp:'Un paciente con función renal disminuida elimina más lento los fármacos que dependen principalmente de la eliminación renal, acumulando concentraciones más altas de lo esperado con la dosis estándar -una de las razones más frecuentes por las que se ajusta la dosis de muchos medicamentos en pacientes con enfermedad renal.',
  no:{
    1:'La función renal disminuida sí representa un riesgo específico de acumulación para fármacos que dependen de esta vía de eliminación.',
    2:'Es al revés: la función renal disminuida hace que el paciente elimine el fármaco MÁS LENTO, no más rápido.',
    3:'El riesgo descrito aplica específicamente a fármacos eliminados por vía RENAL, no a los metabolizados exclusivamente por el hígado, que dependerían de otro parámetro (función hepática).'
  },
  trampa:'No reconocer el riesgo de acumulación por eliminación renal disminuida, o invertir el efecto sobre la velocidad de eliminación del fármaco.',
  obj:'Explicar el riesgo de acumulación de un fármaco de eliminación renal en un paciente con función renal disminuida.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 4.',
  tags:['eliminación renal','enfermedad renal crónica','ajuste de dosis']
},
{
  id:'U9-FA-Q14', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacodinamia: receptores y mecanismos de acción', sub:'Agonista vs. antagonista',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia fundamental entre un agonista y un antagonista farmacológico?',
  ops:[
    'El agonista se une al receptor y lo ACTIVA; el antagonista se une pero NO lo activa, simplemente bloquea que otra sustancia lo active',
    'Ambos términos son exactamente sinónimos', 'El antagonista siempre produce un efecto más potente que el agonista', 'Ni el agonista ni el antagonista se unen a ningún receptor'],
  ok:0,
  clave:'El agonista activa el receptor; el antagonista lo ocupa sin activarlo, bloqueando su activación por otra sustancia.',
  exp:'Un agonista se une al receptor y lo ACTIVA, produciendo el mismo tipo de efecto que la sustancia natural. Un antagonista se une al receptor pero NO lo activa, simplemente ocupa el espacio, impidiendo que el agonista natural (o un fármaco agonista) se una y ejerza su efecto -bloquea la señal, sin producir una señal propia.',
  no:{
    1:'Son conceptos claramente distintos y complementarios: uno activa, el otro bloquea sin activar.',
    2:'No hay una relación general de potencia entre agonistas y antagonistas; depende del fármaco específico y su contexto de uso.',
    3:'Ambos, por definición, se unen a un receptor específico; la diferencia está en si lo activan (agonista) o no (antagonista).'
  },
  trampa:'Confundir el agonista con el antagonista, o asumir que ninguno de los dos se une realmente a un receptor.',
  obj:'Distinguir el agonista del antagonista farmacológico.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 2.',
  tags:['agonista','antagonista','receptor farmacológico']
},
{
  id:'U9-FA-Q15', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacodinamia: receptores y mecanismos de acción', sub:'Potencia vs. eficacia máxima',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué dos fármacos que tratan la misma condición no son necesariamente intercambiables sin ajuste, aunque tengan la misma eficacia máxima?',
  ops:[
    'Porque pueden diferir en potencia: uno puede necesitar una dosis mucho menor que otro para lograr el mismo efecto, aunque ambos alcancen el mismo techo de efecto máximo',
    'Si tienen la misma eficacia máxima, siempre son completamente intercambiables sin ningún ajuste de dosis', 'La potencia y la eficacia máxima son exactamente el mismo concepto', 'Dos fármacos con la misma eficacia máxima nunca pueden tener potencias distintas'],
  ok:0,
  clave:'Pueden diferir en potencia (dosis necesaria para el mismo efecto), aunque compartan la misma eficacia máxima (techo de efecto).',
  exp:'Que dos fármacos traten la misma condición no significa que sean intercambiables sin ajuste: uno puede necesitar una dosis mucho menor que otro para lograr el mismo efecto (diferencia en potencia), y aun así ambos alcanzar el mismo techo de efecto máximo (misma eficacia) -potencia y eficacia máxima son propiedades distintas de la curva dosis-respuesta.',
  no:{
    1:'Precisamente por diferir en potencia, sí pueden requerir un ajuste de dosis distinto, aunque compartan la misma eficacia máxima.',
    2:'Potencia y eficacia máxima son conceptos claramente distintos: uno se refiere a la dosis necesaria, el otro al techo de efecto.',
    3:'Sí pueden tener potencias distintas aunque compartan la misma eficacia máxima; son propiedades independientes de la curva dosis-respuesta.'
  },
  trampa:'Confundir potencia con eficacia máxima, o asumir que fármacos con la misma eficacia máxima siempre son intercambiables sin ajuste de dosis.',
  obj:'Distinguir la potencia de la eficacia máxima como propiedades independientes de un fármaco.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 2.',
  tags:['potencia','eficacia máxima','curva dosis-respuesta']
},
{
  id:'U9-FA-Q16', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacodinamia: receptores y mecanismos de acción', sub:'Meseta de la curva dosis-respuesta',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la curva dosis-respuesta se aplana en su extremo superior, alcanzando un "efecto máximo"?',
  ops:[
    'Porque, en ese punto, todos los receptores disponibles ya están ocupados, así que aumentar más la dosis ya no aumenta el efecto',
    'La curva dosis-respuesta nunca se aplana, sigue subiendo indefinidamente con la dosis', 'El efecto máximo ocurre porque el fármaco deja de tener cualquier efecto en absoluto', 'La meseta de la curva no tiene ninguna relación con la ocupación de receptores'],
  ok:0,
  clave:'La curva se aplana porque todos los receptores disponibles ya están ocupados; aumentar más la dosis no aumenta el efecto.',
  exp:'La curva dosis-respuesta típicamente empieza plana (dosis muy bajas, sin efecto detectable), sube de forma pronunciada en un rango intermedio de dosis, y finalmente se aplana de nuevo (efecto máximo, donde aumentar más la dosis ya no aumenta el efecto, porque todos los receptores disponibles ya están ocupados).',
  no:{
    1:'La curva dosis-respuesta sí se aplana en su extremo superior, alcanzando un efecto máximo, no sigue subiendo indefinidamente.',
    2:'El efecto máximo no significa ausencia de efecto; significa que se alcanzó el techo del efecto posible, con todos los receptores ya ocupados.',
    3:'La meseta de la curva tiene una relación directa con la saturación de receptores disponibles, precisamente el mecanismo que la explica.'
  },
  trampa:'No reconocer la saturación de receptores como el mecanismo que explica la meseta (efecto máximo) de la curva dosis-respuesta.',
  obj:'Explicar el mecanismo por el cual la curva dosis-respuesta alcanza un efecto máximo.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 2.',
  tags:['curva dosis-respuesta','efecto máximo','saturación de receptores']
},
{
  id:'U9-FA-Q17', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Interacciones farmacológicas', sub:'Inductor vs. inhibidor enzimático',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre un inductor enzimático y un inhibidor enzimático, en cuanto a su efecto sobre otros fármacos?',
  ops:[
    'El inductor AUMENTA la actividad enzimática, acelerando el metabolismo de otros fármacos y reduciendo su concentración; el inhibidor BLOQUEA la actividad, enlenteciendo el metabolismo y aumentando la concentración',
    'Ambos términos producen exactamente el mismo efecto sobre otros fármacos', 'El inductor reduce la actividad enzimática, y el inhibidor la aumenta', 'Ni los inductores ni los inhibidores tienen ninguna relación con el citocromo P450'],
  ok:0,
  clave:'El inductor aumenta la actividad enzimática (reduce concentración de otros fármacos); el inhibidor la bloquea (aumenta su concentración).',
  exp:'Un inductor enzimático AUMENTA la actividad de las enzimas del citocromo P450, acelerando el metabolismo de otros fármacos que comparten la misma vía, y reduciendo así su concentración y efecto. Un inhibidor enzimático hace lo contrario: BLOQUEA la actividad de estas enzimas, enlenteciendo el metabolismo de otros fármacos y aumentando su concentración, con riesgo de toxicidad.',
  no:{
    1:'Producen efectos claramente OPUESTOS sobre la concentración de otros fármacos: uno la reduce, el otro la aumenta.',
    2:'Está invertido: el inductor AUMENTA la actividad enzimática, y el inhibidor la REDUCE, no al revés.',
    3:'Ambos tienen una relación directa con el citocromo P450, siendo precisamente sus mecanismos de interacción farmacológica más frecuentes.'
  },
  trampa:'Invertir el efecto del inductor (aumenta actividad, reduce concentración de otros fármacos) y el inhibidor (bloquea actividad, aumenta concentración).',
  obj:'Distinguir el efecto de un inductor enzimático del de un inhibidor enzimático.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.',
  tags:['inductor enzimático','inhibidor enzimático','citocromo P450']
},
{
  id:'U9-FA-Q18', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Interacciones farmacológicas', sub:'Sinergismo indeseado',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente que toma un sedante para dormir empieza a tomar también otro medicamento con efecto depresor del sistema nervioso central, y presenta una depresión respiratoria mucho más marcada de lo que cualquiera de los dos fármacos produciría por separado.',
  enunciado:'¿Qué fenómeno farmacológico explica este resultado?',
  ops:[
    'Sinergismo, donde el efecto combinado es mayor que la simple suma de los efectos individuales de cada fármaco', 'Un efecto idiosincrásico, completamente impredecible y sin relación con el mecanismo de los fármacos', 'Este resultado no tiene ninguna explicación farmacológica conocida', 'Un antagonismo entre los dos fármacos, que debería haber reducido el efecto depresor'],
  ok:0,
  clave:'El sinergismo produce un efecto combinado mayor que la simple suma de los efectos individuales de cada fármaco.',
  exp:'El sinergismo ocurre cuando dos fármacos, administrados juntos, producen un efecto combinado mayor que la simple suma de sus efectos individuales -en este caso, indeseado: combinar dos sedantes del sistema nervioso central puede deprimir la respiración mucho más de lo que cada uno haría por separado, exactamente el escenario descrito en este caso.',
  no:{
    1:'Este es un ejemplo de una interacción PREDECIBLE (sinergismo), relacionada directamente con el mecanismo depresor compartido de ambos fármacos, no un efecto idiosincrásico impredecible.',
    2:'Este resultado sí tiene una explicación farmacológica bien conocida: el sinergismo entre dos depresores del sistema nervioso central.',
    3:'Es precisamente lo contrario del antagonismo: los dos fármacos potenciaron mutuamente su efecto depresor, en vez de reducirlo.'
  },
  trampa:'Confundir el sinergismo con un efecto idiosincrásico impredecible, o con un antagonismo, que produciría el efecto opuesto (reducción, no potenciación).',
  obj:'Identificar el sinergismo indeseado entre dos depresores del sistema nervioso central.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.',
  tags:['sinergismo','depresores del sistema nervioso central','polifarmacia']
},
{
  id:'U9-FA-Q19', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Interacciones farmacológicas', sub:'Interacción invisible por inhibición enzimática',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente toma un fármaco A de forma estable desde hace meses. Se le agrega un fármaco B, inhibidor enzimático de la misma vía metabólica que procesa al fármaco A, sin cambiar la dosis de A.',
  enunciado:'¿Qué puede ocurrir con la concentración del fármaco A, y por qué esta interacción se describe como "invisible" si no se conoce el mecanismo?',
  ops:[
    'La concentración del fármaco A puede subir considerablemente, aumentando el riesgo de efectos adversos, sin que se haya cambiado su dosis -invisible porque nadie ajustó nada, pero el metabolismo alterado cambió el resultado',
    'La concentración del fármaco A no cambiará en absoluto, sin importar el fármaco B agregado', 'El fármaco B siempre reduce la concentración del fármaco A, nunca la aumenta', 'Esta interacción es imposible de que ocurra en la práctica clínica real'],
  ok:0,
  clave:'La concentración de A puede subir considerablemente sin cambio de dosis, por la inhibición enzimática de B -invisible si no se conoce el mecanismo.',
  exp:'Si un paciente toma un fármaco A de forma estable, y se le agrega un fármaco B que es inhibidor enzimático de la misma vía que metaboliza al fármaco A, la concentración del fármaco A puede subir considerablemente sin haber cambiado su dosis, aumentando el riesgo de efectos adversos -una interacción invisible si no se conoce el mecanismo, porque nada en la prescripción (ni la dosis de A) cambió explícitamente, pero el metabolismo alterado por B modificó silenciosamente el resultado clínico.',
  no:{
    1:'La concentración de A SÍ puede cambiar significativamente por la interacción con el fármaco B inhibidor, aunque su dosis no se haya modificado.',
    2:'Un inhibidor enzimático AUMENTA (no reduce) la concentración de otros fármacos que comparten esa vía metabólica.',
    3:'Esta interacción es precisamente un escenario clínico real y frecuente, especialmente relevante en pacientes polimedicados.'
  },
  trampa:'No reconocer cómo una interacción farmacológica puede alterar significativamente la concentración de un fármaco sin que se haya cambiado explícitamente su dosis.',
  obj:'Explicar el mecanismo de una interacción farmacológica "invisible" por inhibición enzimática.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.',
  tags:['inhibidor enzimático','interacción invisible','polifarmacia']
},
{
  id:'U9-FA-Q20', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Interacciones farmacológicas', sub:'Importancia en pacientes polimedicados',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué revisar sistemáticamente las interacciones potenciales antes de agregar un fármaco nuevo es especialmente importante en un paciente polimedicado?',
  ops:[
    'Porque la cantidad de combinaciones posibles entre medicamentos crece de forma exponencial (no lineal) a medida que aumenta el número de fármacos tomados a la vez',
    'Las interacciones farmacológicas solo pueden ocurrir cuando el paciente toma exactamente dos medicamentos, nunca más', 'La revisión de interacciones es opcional y no tiene ninguna relevancia real para la seguridad del tratamiento', 'El número de medicamentos que toma un paciente no tiene ninguna relación con el riesgo de interacciones'],
  ok:0,
  clave:'La cantidad de combinaciones posibles crece exponencialmente (no linealmente) con el número de fármacos, por eso revisar interacciones no es opcional.',
  exp:'Cuantos más medicamentos toma una persona a la vez, más crece -no de forma lineal, sino exponencial- la cantidad de combinaciones posibles entre ellos, y por eso revisar interacciones no es opcional en un paciente polimedicado: revisar sistemáticamente las interacciones potenciales antes de agregar un fármaco nuevo es una parte esencial de la seguridad del tratamiento.',
  no:{
    1:'Las interacciones pueden ocurrir con dos o más fármacos simultáneamente; no están limitadas exclusivamente a combinaciones de exactamente dos medicamentos.',
    2:'La revisión de interacciones es una parte esencial (no opcional) de la seguridad del tratamiento, especialmente en polifarmacia.',
    3:'El número de medicamentos tiene una relación directa y creciente (exponencial) con el riesgo de interacciones potenciales.'
  },
  trampa:'Subestimar el crecimiento exponencial (no lineal) de las combinaciones posibles de interacción a medida que aumenta el número de fármacos.',
  obj:'Explicar por qué la revisión de interacciones es especialmente importante en pacientes polimedicados.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.',
  tags:['polifarmacia','revisión de interacciones','seguridad del tratamiento']
},
{
  id:'U9-FA-Q21', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Antibióticos: familias principales', sub:'Mecanismo de los betalactámicos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los betalactámicos tienen relativa seguridad para el paciente, pese a atacar directamente a la bacteria?',
  ops:[
    'Porque bloquean la síntesis de la pared celular bacteriana (el peptidoglicano), una estructura que la célula humana no tiene',
    'Los betalactámicos actúan sobre estructuras idénticas entre la célula bacteriana y la humana', 'Los betalactámicos no tienen ningún mecanismo de acción conocido', 'La pared celular bacteriana y la membrana celular humana son exactamente la misma estructura'],
  ok:0,
  clave:'Los betalactámicos bloquean la síntesis de la pared celular bacteriana (peptidoglicano), estructura ausente en las células humanas.',
  exp:'Los betalactámicos (penicilinas, cefalosporinas) bloquean la síntesis de la pared celular bacteriana (el peptidoglicano), estructura que la célula humana no tiene, lo que explica su relativa seguridad para el paciente: al atacar una estructura exclusivamente bacteriana, el daño colateral sobre las células humanas es mínimo.',
  no:{
    1:'Precisamente lo contrario: atacan una estructura EXCLUSIVA de la bacteria (peptidoglicano), ausente en las células humanas, lo que explica su seguridad relativa.',
    2:'Los betalactámicos sí tienen un mecanismo de acción bien caracterizado: bloquear la síntesis de la pared celular bacteriana.',
    3:'La pared celular bacteriana (peptidoglicano) y la membrana celular humana son estructuras completamente distintas, no la misma.'
  },
  trampa:'No reconocer que la seguridad relativa de los betalactámicos se debe precisamente a atacar una estructura exclusivamente bacteriana, ausente en el ser humano.',
  obj:'Explicar por qué los betalactámicos tienen relativa seguridad para el paciente.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 43-45.',
  tags:['betalactámicos','pared celular bacteriana','peptidoglicano']
},
{
  id:'U9-FA-Q22', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Antibióticos: familias principales', sub:'Mecanismo de las quinolonas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Sobre qué actúan las quinolonas, y qué consecuencia tiene ese mecanismo para la bacteria?',
  ops:[
    'Actúan sobre enzimas bacterianas necesarias para replicar su ADN (topoisomerasas bacterianas), impidiendo que la bacteria pueda dividirse',
    'Actúan sobre la pared celular bacteriana, igual que los betalactámicos', 'Las quinolonas no tienen ningún mecanismo de acción específico contra bacterias', 'Actúan sobre el ribosoma bacteriano, igual que los macrólidos'],
  ok:0,
  clave:'Las quinolonas actúan sobre topoisomerasas bacterianas, impidiendo la replicación del ADN y, por tanto, la división bacteriana.',
  exp:'Las quinolonas actúan sobre enzimas bacterianas necesarias para replicar su ADN (topoisomerasas bacterianas, distintas de las humanas), impidiendo que la bacteria pueda dividirse -un mecanismo distinto del de los betalactámicos (pared celular) o los macrólidos/aminoglucósidos (ribosoma).',
  no:{
    1:'El mecanismo de las quinolonas (ADN) es distinto del de los betalactámicos (pared celular); no comparten el mismo blanco molecular.',
    2:'Las quinolonas sí tienen un mecanismo de acción específico y bien caracterizado: bloquear las topoisomerasas bacterianas.',
    3:'El mecanismo de las quinolonas (ADN) es distinto del de los macrólidos (ribosoma); no comparten el mismo blanco molecular.'
  },
  trampa:'Confundir el mecanismo de las quinolonas (ADN) con el de otras familias de antibióticos que actúan sobre blancos moleculares distintos (pared, ribosoma).',
  obj:'Explicar el mecanismo de acción de las quinolonas sobre el ADN bacteriano.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 43-45.',
  tags:['quinolonas','topoisomerasas bacterianas','replicación del ADN']
},
{
  id:'U9-FA-Q23', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Antibióticos: familias principales', sub:'Organizar antibióticos por mecanismo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué organizar los antibióticos por su mecanismo de acción (pared, ribosoma, ADN) es más útil que memorizar cada nombre por separado?',
  ops:[
    'Porque permite predecir, con lógica, por qué una familia funciona mejor contra cierto tipo de bacteria y por qué la resistencia a una familia no necesariamente implica resistencia a otra con mecanismo distinto',
    'La organización por mecanismo no tiene ninguna utilidad práctica real', 'Todos los antibióticos, sin importar su mecanismo, son intercambiables entre sí sin ninguna diferencia', 'La resistencia a una familia de antibióticos siempre implica resistencia automática a todas las demás familias'],
  ok:0,
  clave:'Organizar por mecanismo permite predecir el espectro de acción y entender por qué la resistencia a una familia no implica resistencia a otra con mecanismo distinto.',
  exp:'Organizar los antibióticos por mecanismo (pared, ribosoma, ADN) en vez de memorizar cada nombre por separado es lo que permite predecir, con lógica, por qué una familia funciona mejor contra cierto tipo de bacteria y por qué la resistencia a una familia no necesariamente implica resistencia a otra con mecanismo distinto -la resistencia suele ser específica del mecanismo que la bacteria logró evadir o neutralizar.',
  no:{
    1:'La organización por mecanismo tiene una utilidad práctica clara: predecir espectro de acción y patrones de resistencia de forma lógica, no memorística.',
    2:'Los antibióticos NO son intercambiables entre sí; cada familia tiene un espectro y perfil de efectos adversos distinto, relacionado con su mecanismo específico.',
    3:'Es precisamente lo contrario: la resistencia a una familia NO implica automáticamente resistencia a otra con mecanismo distinto, ya que suele ser específica del mecanismo particular.'
  },
  trampa:'No reconocer la ventaja predictiva de organizar los antibióticos por mecanismo de acción, en vez de memorizarlos como una lista suelta de nombres.',
  obj:'Explicar la ventaja de organizar los antibióticos por mecanismo de acción en vez de memorizarlos individualmente.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 43-45.',
  tags:['organización por mecanismo','resistencia antimicrobiana','espectro de acción']
},
{
  id:'U9-FA-Q24', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Antiinflamatorios y analgésicos', sub:'Mecanismo del riesgo gástrico de los AINE',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente que usa AINE de forma prolongada desarrolla una úlcera gástrica.',
  enunciado:'¿Qué explica que el mismo mecanismo que hace útil al AINE contra la inflamación sea también la causa de esta complicación?',
  ops:[
    'La misma enzima (COX) que media la inflamación también produce prostaglandinas que protegen la mucosa gástrica; al bloquear la COX, el AINE reduce tanto la inflamación como esa protección gástrica',
    'La úlcera gástrica no tiene ninguna relación con el mecanismo de acción de los AINE', 'Los AINE dañan el estómago por un mecanismo completamente distinto al de su efecto antiinflamatorio', 'El paracetamol tiene exactamente el mismo riesgo gástrico que los AINE'],
  ok:0,
  clave:'La misma COX que media la inflamación también produce prostaglandinas protectoras de la mucosa gástrica; bloquearla reduce ambas funciones.',
  exp:'Los AINE son inhibidores de la COX, una enzima necesaria para producir prostaglandinas que median la inflamación y el dolor. El problema es que la misma enzima (o una forma relacionada) también produce prostaglandinas que protegen la mucosa del estómago, reduciendo la producción de ácido y aumentando la de moco protector. Por eso, el mismo mecanismo que hace útil a un AINE contra la inflamación es, precisamente, el que explica su efecto adverso más frecuente: irritación y úlceras gástricas.',
  no:{
    1:'La úlcera gástrica tiene una relación directa con el mecanismo de acción de los AINE (inhibición de la COX), no es independiente de él.',
    2:'Es precisamente el MISMO mecanismo (inhibición de la COX) el que explica tanto el efecto antiinflamatorio como el riesgo gástrico, no mecanismos distintos.',
    3:'El paracetamol específicamente NO tiene el mismo riesgo gástrico que los AINE, siendo esa una de sus ventajas comparativas.'
  },
  trampa:'No reconocer que el mismo mecanismo (inhibición de la COX) explica tanto el efecto terapéutico como el efecto adverso gástrico de los AINE.',
  obj:'Explicar por qué el mecanismo antiinflamatorio de los AINE también explica su riesgo gástrico.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 36 y 31.',
  tags:['AINE','inhibidor de la COX','úlcera gástrica']
},
{
  id:'U9-FA-Q25', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Antiinflamatorios y analgésicos', sub:'Riesgo de los opioides',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los opioides tienen riesgo de depresión respiratoria?',
  ops:[
    'Porque actúan sobre el centro respiratorio, potenciando su inhibición de forma excesiva a dosis altas', 'Los opioides nunca tienen ningún efecto sobre la función respiratoria', 'La depresión respiratoria de los opioides no tiene relación con su mecanismo de acción', 'Los opioides actúan exclusivamente sobre el sistema digestivo, sin ningún efecto sobre el sistema respiratorio'],
  ok:0,
  clave:'Los opioides actúan sobre receptores del sistema nervioso, incluyendo el centro respiratorio, con riesgo de depresión respiratoria a dosis altas.',
  exp:'Los opioides actúan sobre receptores específicos del sistema nervioso, potenciando la inhibición natural del dolor a nivel espinal y central, siendo muy eficaces contra el dolor intenso, pero con riesgo de depresión respiratoria (por acción sobre el centro respiratorio) y de dependencia con el uso prolongado.',
  no:{
    1:'Los opioides sí tienen un efecto conocido y clínicamente relevante sobre la función respiratoria, específicamente el riesgo de depresión.',
    2:'La depresión respiratoria de los opioides tiene una relación directa con su mecanismo de acción sobre receptores del sistema nervioso, incluyendo el centro respiratorio.',
    3:'Los opioides actúan sobre el sistema nervioso central, no exclusivamente sobre el sistema digestivo; el riesgo respiratorio es precisamente una consecuencia de esa acción central.'
  },
  trampa:'Subestimar el riesgo de depresión respiratoria de los opioides o desconectarlo de su mecanismo de acción central.',
  obj:'Explicar el mecanismo del riesgo de depresión respiratoria de los opioides.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 36 y 31.',
  tags:['opioides','depresión respiratoria','centro respiratorio']
},
{
  id:'U9-FA-Q26', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Antiinflamatorios y analgésicos', sub:'Perfil de riesgo del paracetamol',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el principal riesgo de toxicidad del paracetamol en sobredosis, a diferencia de los AINE?',
  ops:['Hepático, no gástrico', 'Gástrico, exactamente igual que los AINE', 'Respiratorio, igual que los opioides', 'El paracetamol no tiene ningún riesgo de toxicidad conocido en sobredosis'],
  ok:0,
  clave:'El principal riesgo de toxicidad del paracetamol en sobredosis es hepático, no gástrico.',
  exp:'El paracetamol tiene la ventaja de NO tener el efecto antiinflamatorio significativo ni el riesgo gástrico de los AINE -aunque, a diferencia de estos, su principal riesgo de toxicidad en sobredosis es hepático, no gástrico.',
  no:{
    1:'Es precisamente lo contrario: el paracetamol NO comparte el riesgo gástrico de los AINE; su riesgo principal en sobredosis es hepático.',
    2:'El riesgo respiratorio es característico de los opioides, no del paracetamol.',
    3:'El paracetamol sí tiene un riesgo de toxicidad bien conocido en sobredosis: la toxicidad hepática.'
  },
  trampa:'Confundir el perfil de riesgo del paracetamol (hepático) con el de los AINE (gástrico) o los opioides (respiratorio).',
  obj:'Identificar el riesgo hepático del paracetamol en sobredosis, distinto del riesgo gástrico de los AINE.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 36 y 31.',
  tags:['paracetamol','toxicidad hepática','sobredosis']
},
{
  id:'U9-FA-Q27', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Antiinflamatorios y analgésicos', sub:'Elección clínica de analgésico',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿De qué factores depende, más allá de la simple "fuerza" del fármaco, la elección entre AINE, paracetamol u opioide para tratar un dolor determinado?',
  ops:[
    'Del tipo de dolor, de si hay un componente inflamatorio relevante, y del perfil de riesgo específico de cada paciente (riesgo gástrico, hepático, respiratorio)',
    'Únicamente de qué fármaco es más barato en el mercado', 'La elección entre estos tres tipos de analgésicos nunca depende de ningún factor clínico específico', 'Solo depende de la intensidad numérica del dolor reportada por el paciente, sin ningún otro factor'],
  ok:0,
  clave:'Depende del tipo de dolor, si hay componente inflamatorio, y el perfil de riesgo específico del paciente (gástrico, hepático, respiratorio).',
  exp:'Elegir entre AINE, paracetamol u opioide para un dolor determinado no es solo una cuestión de "cuál es más fuerte": depende del tipo de dolor, de si hay un componente inflamatorio relevante, y del perfil de riesgo específico de cada paciente (riesgo gástrico, hepático, respiratorio).',
  no:{
    1:'El costo puede ser un factor práctico, pero no es el criterio clínico central para esta elección terapéutica.',
    2:'Sí depende de factores clínicos específicos bien identificables: tipo de dolor, componente inflamatorio, y perfil de riesgo del paciente.',
    3:'La intensidad del dolor es solo uno de varios factores relevantes; el componente inflamatorio y el perfil de riesgo del paciente también son centrales para la decisión.'
  },
  trampa:'Reducir la elección de analgésico a un solo criterio (intensidad del dolor o "fuerza" del fármaco), sin considerar el componente inflamatorio y el perfil de riesgo del paciente.',
  obj:'Explicar los factores clínicos que determinan la elección entre AINE, paracetamol y opioide.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 36 y 31.',
  tags:['elección de analgésico','componente inflamatorio','perfil de riesgo']
}

]);
