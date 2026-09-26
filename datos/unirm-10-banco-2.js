/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE ANATOMIA PATOLOGICA II (2/2)
   Continua unirm-10-banco.js. Prefijo U10-AP2-. Esta parte cubre
   patologia ginecologica, testicular/prostatica, sistema nervioso
   central, osteoarticular, hematologica/ganglionar y cutanea
   (temas 8-13).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U10-AP2-Q29', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología ginecológica', sub:'Sensibilidad hormonal del leiomioma uterino',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el leiomioma uterino tiende a crecer durante el embarazo y a reducirse tras la menopausia?',
  ops:[
    'Porque su crecimiento es sensible a las hormonas, respondiendo a los niveles elevados de estas durante el embarazo y a su caída tras la menopausia',
    'El leiomioma uterino no tiene ninguna sensibilidad hormonal real, su tamaño es completamente independiente de las hormonas', 'El leiomioma siempre se reduce durante el embarazo y crece después de la menopausia', 'El tamaño del leiomioma uterino depende exclusivamente de la edad cronológica de la paciente, sin relación hormonal'],
  ok:0,
  clave:'Su crecimiento es sensible a las hormonas, respondiendo a los niveles elevados durante el embarazo y a su caída tras la menopausia.',
  exp:'El leiomioma uterino es sensible a las hormonas: tiende a crecer durante el embarazo (con niveles hormonales elevados) y a reducirse tras la menopausia, cuando esos niveles caen.',
  no:{
    1:'El leiomioma sí tiene una sensibilidad hormonal bien documentada, que explica directamente su comportamiento en el embarazo y la menopausia.',
    2:'Es precisamente lo contrario: el leiomioma tiende a CRECER durante el embarazo y a REDUCIRSE tras la menopausia, no al revés.',
    3:'El tamaño depende de los niveles hormonales, no directamente de la edad cronológica en sí, aunque ambos estén relacionados.'
  },
  trampa:'Invertir el comportamiento del leiomioma frente al embarazo (crecimiento) y la menopausia (reducción), o negar su sensibilidad hormonal.',
  obj:'Explicar la sensibilidad hormonal del leiomioma uterino y su comportamiento en el embarazo y la menopausia.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 22.',
  tags:['leiomioma uterino','sensibilidad hormonal','embarazo y menopausia']
},
{
  id:'U10-AP2-Q30', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología ginecológica', sub:'VPH y progresión del carcinoma de cérvix',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el tamizaje con citología cervical (Papanicolaou) es tan efectivo para prevenir el cáncer de cérvix?',
  ops:[
    'Porque la infección persistente por VPH induce cambios progresivos a lo largo de años, y la citología detecta las lesiones precancerosas mucho antes de que se conviertan en cáncer invasivo',
    'El carcinoma de cérvix siempre aparece de forma súbita, sin ninguna fase precancerosa previa detectable', 'La citología cervical no tiene ninguna capacidad real de detectar cambios precancerosos en el cérvix', 'El virus del papiloma humano no tiene ninguna relación con el desarrollo del carcinoma de cérvix'],
  ok:0,
  clave:'La infección persistente por VPH induce cambios progresivos a lo largo de años, y la citología detecta las lesiones precancerosas mucho antes de que se conviertan en cáncer invasivo.',
  exp:'La infección persistente con VPH de alto riesgo induce cambios progresivos en el epitelio cervical (displasia leve, moderada, severa) que, sin tratamiento, pueden progresar a lo largo de años hacia un carcinoma invasivo -esta progresión lenta y conocida es lo que hace tan efectivo el tamizaje con citología cervical, que detecta las lesiones precancerosas mucho antes de que se conviertan en cáncer invasivo.',
  no:{
    1:'El carcinoma de cérvix típicamente sí pasa por una fase precancerosa detectable a lo largo de años, no aparece de forma súbita.',
    2:'La citología cervical sí tiene una capacidad bien documentada de detectar cambios precancerosos, siendo la base de su efectividad como tamizaje.',
    3:'El VPH de alto riesgo tiene una relación causal bien establecida con el desarrollo del carcinoma de cérvix en la inmensa mayoría de los casos.'
  },
  trampa:'No reconocer la progresión lenta y detectable del VPH al carcinoma de cérvix como el fundamento del éxito del tamizaje citológico.',
  obj:'Explicar por qué el tamizaje con citología cervical es efectivo para prevenir el carcinoma de cérvix.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 22.',
  tags:['VPH','carcinoma de cérvix','tamizaje citológico']
},
{
  id:'U10-AP2-Q31', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología ginecológica', sub:'Mecanismo del dolor en endometriosis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la endometriosis produce dolor pélvico crónico y dismenorrea severa?',
  ops:[
    'El tejido endometrial ectópico responde a los mismos ciclos hormonales que el endometrio normal, sangrando cíclicamente en una ubicación donde ese sangrado no tiene salida',
    'La endometriosis no tiene ninguna relación real con los ciclos hormonales de la paciente', 'El tejido endometrial fuera del útero nunca responde a ningún estímulo hormonal cíclico', 'El dolor de la endometriosis se debe exclusivamente a una infección bacteriana del tejido ectópico'],
  ok:0,
  clave:'El tejido endometrial ectópico responde a los mismos ciclos hormonales que el endometrio normal, sangrando cíclicamente en una ubicación donde ese sangrado no tiene salida.',
  exp:'La endometriosis es la presencia de tejido endometrial funcional fuera de la cavidad uterina, tejido que responde a los mismos ciclos hormonales que el endometrio normal, sangrando cíclicamente en una ubicación donde ese sangrado no tiene salida -el mecanismo detrás del dolor pélvico crónico y la dismenorrea severa asociada a esta condición.',
  no:{
    1:'El tejido ectópico sí responde a los ciclos hormonales, precisamente el mecanismo que explica el dolor cíclico de la endometriosis.',
    2:'Es precisamente lo contrario: el tejido endometrial ectópico SÍ responde a los ciclos hormonales, igual que el endometrio normal.',
    3:'El mecanismo del dolor no es infeccioso; es el sangrado cíclico del tejido ectópico sin salida natural.'
  },
  trampa:'No reconocer que el tejido endometrial ectópico conserva su respuesta hormonal cíclica normal, causando sangrado sin salida.',
  obj:'Explicar el mecanismo hormonal detrás del dolor pélvico crónico en la endometriosis.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 22.',
  tags:['endometriosis','tejido ectópico','dolor pélvico crónico']
},
{
  id:'U10-AP2-Q32', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología ginecológica', sub:'Quiste funcional vs. neoplásico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre un quiste ovárico funcional y uno neoplásico?',
  ops:[
    'El funcional se relaciona con el ciclo ovulatorio normal y generalmente es autolimitado; el neoplásico es un tumor real que no se resuelve espontáneamente',
    'Ambos tipos de quiste ovárico requieren exactamente el mismo manejo clínico, sin ninguna diferencia', 'El quiste funcional es siempre maligno, mientras que el neoplásico es siempre benigno', 'Ningún quiste ovárico puede resolverse espontáneamente sin intervención quirúrgica'],
  ok:0,
  clave:'El funcional se relaciona con el ciclo ovulatorio normal y generalmente es autolimitado; el neoplásico es un tumor real que no se resuelve espontáneamente.',
  exp:'Un quiste ovárico puede ser funcional (relacionado con el ciclo ovulatorio normal, generalmente autolimitado y sin necesidad de intervención) o neoplásico (un tumor real, benigno o maligno, que no se resuelve espontáneamente) -distinguir entre ambos tipos mediante seguimiento clínico y ecográfico evita intervenciones innecesarias y retrasos diagnósticos.',
  no:{
    1:'Tienen manejos clínicos distintos: el funcional suele solo observarse, el neoplásico requiere estudio y posible intervención.',
    2:'El quiste funcional NO es maligno por definición; el neoplásico puede ser benigno o maligno, no todos son malignos.',
    3:'Un quiste funcional sí puede resolverse espontáneamente sin intervención, precisamente su característica distintiva frente al neoplásico.'
  },
  trampa:'Confundir el quiste funcional (autolimitado) con el neoplásico (tumor real que no se resuelve solo), o asumir malignidad automática de uno de los dos.',
  obj:'Distinguir un quiste ovárico funcional de uno neoplásico.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 22.',
  tags:['quiste ovárico funcional','quiste neoplásico','seguimiento ecográfico']
},
{
  id:'U10-AP2-Q33', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología testicular y prostática', sub:'Ubicación de la hiperplasia prostática benigna',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la hiperplasia prostática benigna produce síntomas urinarios obstructivos, más allá de su tamaño absoluto?',
  ops:[
    'Porque ocurre predominantemente en la zona de transición de la glándula, cerca de la uretra, comprimiéndola independientemente del tamaño total de la próstata',
    'La hiperplasia prostática benigna nunca comprime la uretra, sin importar su ubicación o tamaño', 'Los síntomas urinarios obstructivos dependen exclusivamente del tamaño total de la próstata, sin relación con su ubicación', 'La hiperplasia prostática benigna ocurre siempre en la zona periférica de la glándula, lejos de la uretra'],
  ok:0,
  clave:'Ocurre predominantemente en la zona de transición de la glándula, cerca de la uretra, comprimiéndola independientemente del tamaño total de la próstata.',
  exp:'La hiperplasia prostática benigna ocurre predominantemente en la zona de transición de la glándula, cerca de la uretra -su ubicación, más que su tamaño absoluto, explica por qué comprime la uretra y produce los síntomas urinarios obstructivos típicos.',
  no:{
    1:'La hiperplasia prostática benigna sí comprime la uretra, precisamente por su ubicación característica en la zona de transición.',
    2:'La ubicación (zona de transición, cerca de la uretra) es más determinante que el tamaño absoluto para producir síntomas obstructivos.',
    3:'Es precisamente lo contrario: la hiperplasia benigna ocurre en la zona de TRANSICIÓN, cercana a la uretra, no en la zona periférica.'
  },
  trampa:'Confundir la ubicación característica de la hiperplasia prostática benigna (zona de transición) con la del carcinoma de próstata (zona periférica).',
  obj:'Explicar por qué la ubicación de la hiperplasia prostática benigna determina sus síntomas obstructivos.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 21.',
  tags:['hiperplasia prostática benigna','zona de transición','síntomas obstructivos']
},
{
  id:'U10-AP2-Q34', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología testicular y prostática', sub:'Ubicación del carcinoma de próstata',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el carcinoma de próstata puede crecer considerablemente antes de producir síntomas urinarios, a diferencia de la hiperplasia benigna?',
  ops:[
    'Porque se origina característicamente en la zona periférica de la glándula, alejada de la uretra, a diferencia de la hiperplasia benigna que afecta la zona de transición',
    'El carcinoma de próstata siempre produce síntomas urinarios obstructivos idénticos a los de la hiperplasia benigna desde etapas muy tempranas', 'El carcinoma de próstata y la hiperplasia benigna afectan exactamente la misma zona de la glándula', 'El carcinoma de próstata nunca puede detectarse mediante tamizaje antes de producir síntomas'],
  ok:0,
  clave:'Se origina característicamente en la zona periférica de la glándula, alejada de la uretra, a diferencia de la hiperplasia benigna que afecta la zona de transición.',
  exp:'El carcinoma de próstata se origina característicamente en la zona periférica de la glándula, lo que explica por qué puede crecer considerablemente antes de comprimir la uretra y dar síntomas urinarios -muchos casos se detectan por tamizaje (antígeno prostático específico, tacto rectal) antes de que produzcan cualquier síntoma.',
  no:{
    1:'El carcinoma de próstata, por su ubicación periférica, NO produce típicamente síntomas obstructivos tempranos como sí lo hace la hiperplasia benigna.',
    2:'Afectan zonas distintas de la glándula: el carcinoma la zona periférica, la hiperplasia benigna la zona de transición.',
    3:'El carcinoma de próstata sí puede detectarse mediante tamizaje (antígeno prostático específico, tacto rectal) antes de dar síntomas.'
  },
  trampa:'Asumir que el carcinoma de próstata produce síntomas obstructivos tan tempranos como la hiperplasia benigna, sin considerar su distinta ubicación anatómica.',
  obj:'Explicar por qué el carcinoma de próstata suele detectarse por tamizaje antes de producir síntomas urinarios.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 21.',
  tags:['carcinoma de próstata','zona periférica','detección por tamizaje']
},
{
  id:'U10-AP2-Q35', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología testicular y prostática', sub:'Presentación indolora del tumor testicular',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre de 24 años nota una masa en el testículo que no le causa ningún dolor, y por eso decide no consultar de inmediato.',
  enunciado:'¿Por qué esta conducta de esperar es particularmente riesgosa en este caso específico?',
  ops:[
    'Porque la mayoría de los tumores testiculares se presentan precisamente como masas indoloras, y afectan característicamente a hombres jóvenes, siendo altamente curables si se tratan a tiempo',
    'La ausencia de dolor descarta con certeza cualquier posibilidad de que la masa testicular sea un tumor maligno', 'Los tumores testiculares afectan predominantemente a hombres mayores de 60 años, no a hombres jóvenes', 'Los tumores testiculares, a diferencia de otros cánceres, tienen un pronóstico uniformemente malo sin importar cuándo se detecten'],
  ok:0,
  clave:'La mayoría de los tumores testiculares se presentan precisamente como masas indoloras, y afectan característicamente a hombres jóvenes, siendo altamente curables si se tratan a tiempo.',
  exp:'Un tumor testicular afecta predominantemente a hombres jóvenes (entre 15 y 35 años) y se presenta típicamente como una masa testicular indolora -un hallazgo que, precisamente por no doler, con frecuencia se ignora o se retrasa en consultar, pese a que la mayoría de estos tumores son altamente curables si se detectan y tratan a tiempo.',
  no:{
    1:'La ausencia de dolor NO descarta malignidad; de hecho, es precisamente la presentación característica de un tumor testicular.',
    2:'Los tumores testiculares afectan característicamente a hombres JÓVENES (15-35 años), no predominantemente a hombres mayores de 60.',
    3:'Los tumores testiculares son, de hecho, altamente curables si se detectan y tratan a tiempo, a diferencia de muchos otros cánceres.'
  },
  trampa:'Asumir que la ausencia de dolor descarta malignidad, o desconocer que los tumores testiculares afectan característicamente a hombres jóvenes con buen pronóstico si se tratan a tiempo.',
  obj:'Explicar por qué una masa testicular indolora en un hombre joven amerita consulta inmediata, no una espera.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 21.',
  tags:['tumor testicular','masa indolora','hombre joven']
},
{
  id:'U10-AP2-Q36', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología testicular y prostática', sub:'Criptorquidia como factor de riesgo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se recomienda el seguimiento a largo plazo de un paciente con antecedente de criptorquidia, incluso años después de la corrección quirúrgica?',
  ops:[
    'Porque la criptorquidia es un factor de riesgo bien establecido para el desarrollo posterior de un tumor testicular, incluso después de corregida quirúrgicamente',
    'La criptorquidia no tiene ninguna relación real con el riesgo posterior de desarrollar un tumor testicular', 'El riesgo de tumor testicular por criptorquidia desaparece por completo e inmediatamente tras la corrección quirúrgica', 'La criptorquidia solo se relaciona con problemas de fertilidad, nunca con riesgo oncológico'],
  ok:0,
  clave:'La criptorquidia es un factor de riesgo bien establecido para el desarrollo posterior de un tumor testicular, incluso después de corregida quirúrgicamente.',
  exp:'La criptorquidia (testículo que no descendió completamente al escroto) es un factor de riesgo bien establecido para el desarrollo posterior de un tumor testicular, incluso años después de la corrección quirúrgica -esta asociación es la razón por la que se recomienda la corrección temprana y el seguimiento a largo plazo de estos pacientes.',
  no:{
    1:'La criptorquidia sí tiene una relación causal bien documentada con el riesgo posterior de tumor testicular.',
    2:'El riesgo elevado persiste, en cierto grado, incluso después de la corrección quirúrgica, razón por la cual se recomienda seguimiento a largo plazo.',
    3:'La criptorquidia se relaciona tanto con problemas de fertilidad como con un riesgo oncológico elevado, no exclusivamente con uno de los dos.'
  },
  trampa:'Asumir que la corrección quirúrgica de la criptorquidia elimina por completo el riesgo oncológico asociado, sin necesidad de seguimiento posterior.',
  obj:'Explicar por qué se recomienda seguimiento a largo plazo tras la corrección de criptorquidia, dado su riesgo oncológico persistente.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 21.',
  tags:['criptorquidia','factor de riesgo','seguimiento a largo plazo']
},
{
  id:'U10-AP2-Q37', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del sistema nervioso central', sub:'Por qué un tumor cerebral benigno puede ser grave',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un tumor cerebral histológicamente benigno, como un meningioma, puede ser clínicamente grave?',
  ops:[
    'Porque el espacio dentro del cráneo es fijo, así que cualquier masa que crezca eleva la presión intracraneal y puede comprimir estructuras vitales adyacentes',
    'Un tumor cerebral benigno nunca puede tener ninguna consecuencia clínica grave, sin importar su tamaño o ubicación', 'La gravedad de un tumor cerebral depende exclusivamente de su clasificación histológica, sin relación con su ubicación', 'El espacio dentro del cráneo se expande libremente para acomodar cualquier masa que crezca, sin generar presión'],
  ok:0,
  clave:'El espacio dentro del cráneo es fijo, así que cualquier masa que crezca eleva la presión intracraneal y puede comprimir estructuras vitales adyacentes.',
  exp:'A diferencia de otros órganos, en el cerebro incluso un tumor histológicamente benigno puede ser clínicamente grave: el espacio dentro del cráneo es fijo, así que cualquier masa que crezca eleva la presión intracraneal y puede comprimir estructuras vitales adyacentes -"benigno" en histología no equivale a "inofensivo" en ubicación craneal.',
  no:{
    1:'Un tumor cerebral benigno sí puede tener consecuencias clínicas graves, precisamente por el espacio fijo del cráneo y el riesgo de compresión.',
    2:'La gravedad depende tanto de la histología como de la UBICACIÓN, que determina qué estructuras vitales pueden comprimirse.',
    3:'Es precisamente lo contrario: el espacio craneal es FIJO, no se expande, lo que genera aumento de presión ante cualquier masa que crece.'
  },
  trampa:'Asumir que "benigno" en histología equivale automáticamente a "inofensivo" clínicamente, sin considerar la particularidad del espacio craneal fijo.',
  obj:'Explicar por qué un tumor cerebral benigno puede ser clínicamente grave por la naturaleza fija del espacio craneal.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 28.',
  tags:['tumor cerebral benigno','presión intracraneal','espacio craneal fijo']
},
{
  id:'U10-AP2-Q38', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del sistema nervioso central', sub:'Vulnerabilidad neuronal a la isquemia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el daño isquémico en un ictus se vuelve irreversible mucho más rápido que en la mayoría de los demás tejidos del cuerpo?',
  ops:[
    'Las neuronas son extremadamente sensibles a la falta de oxígeno, y el daño isquémico se vuelve irreversible en cuestión de minutos',
    'Las neuronas son de hecho el tipo celular más resistente a la falta de oxígeno de todo el cuerpo', 'El tiempo de isquemia no tiene ninguna relación real con la extensión del daño neuronal', 'Todos los tejidos del cuerpo tienen exactamente la misma sensibilidad a la falta de oxígeno que las neuronas'],
  ok:0,
  clave:'Las neuronas son extremadamente sensibles a la falta de oxígeno, y el daño isquémico se vuelve irreversible en cuestión de minutos.',
  exp:'Las neuronas son extremadamente sensibles a la falta de oxígeno, y el daño isquémico se vuelve irreversible en minutos, mucho más rápido que en la mayoría de los demás tejidos del cuerpo -razón por la cual el tiempo hasta la intervención es tan determinante para el pronóstico funcional en un ictus isquémico.',
  no:{
    1:'Es precisamente lo contrario: las neuronas son de las células MÁS sensibles a la falta de oxígeno, no de las más resistentes.',
    2:'El tiempo de isquemia tiene una relación directa y crítica con la extensión del daño neuronal irreversible.',
    3:'Las neuronas tienen una sensibilidad particularmente alta a la isquemia, distinta (mayor) a la de muchos otros tejidos del cuerpo.'
  },
  trampa:'Subestimar la extrema sensibilidad de las neuronas a la falta de oxígeno, comparándolas erróneamente con la resistencia de otros tejidos.',
  obj:'Explicar la extrema sensibilidad neuronal a la isquemia y su rápida irreversibilidad.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 28.',
  tags:['ictus isquémico','sensibilidad neuronal','irreversibilidad rápida']
},
{
  id:'U10-AP2-Q39', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del sistema nervioso central', sub:'Mecanismo dual de daño en hemorragia cerebral',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencia el mecanismo de daño de una hemorragia cerebral del de un ictus isquémico?',
  ops:[
    'En la hemorragia, el daño no es solo por falta de flujo sino también por el efecto de masa y la presión que ejerce la sangre extravasada sobre el tejido circundante',
    'Ambos tipos de ictus (hemorrágico e isquémico) tienen exactamente el mismo mecanismo de daño, sin ninguna diferencia real', 'La hemorragia cerebral solo causa daño por falta de flujo sanguíneo, igual que el ictus isquémico', 'El ictus isquémico causa daño por efecto de masa, mientras que la hemorragia no genera ningún efecto de presión'],
  ok:0,
  clave:'En la hemorragia, el daño no es solo por falta de flujo sino también por el efecto de masa y la presión que ejerce la sangre extravasada sobre el tejido circundante.',
  exp:'A diferencia del ictus isquémico, en la hemorragia cerebral el daño no es solo por falta de flujo, sino también por el efecto de masa y la presión que ejerce la sangre extravasada sobre el tejido cerebral circundante -un mecanismo dual (isquemia local más compresión) distinto del mecanismo puramente isquémico del ictus.',
  no:{
    1:'Tienen mecanismos de daño claramente distintos: uno predominantemente isquémico, el otro con un componente adicional de efecto de masa.',
    2:'Es precisamente lo contrario: la hemorragia tiene un mecanismo ADICIONAL (efecto de masa) que el ictus isquémico puro no tiene.',
    3:'La hemorragia sí genera un efecto de masa y presión significativo sobre el tejido circundante, un mecanismo central de su daño.'
  },
  trampa:'Asumir que la hemorragia cerebral y el ictus isquémico comparten exactamente el mismo mecanismo de daño, ignorando el componente de efecto de masa.',
  obj:'Explicar el mecanismo dual de daño (isquemia local y efecto de masa) característico de la hemorragia cerebral.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 28.',
  tags:['hemorragia cerebral','efecto de masa','mecanismo dual de daño']
},
{
  id:'U10-AP2-Q40', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología del sistema nervioso central', sub:'Curso agudo vs. crónico progresivo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta un deterioro cognitivo que se ha desarrollado de forma lenta y progresiva a lo largo de varios años, sin ningún evento súbito identificable.',
  enunciado:'¿Qué tipo de proceso sugiere, con mayor probabilidad, este curso temporal, en comparación con un evento vascular?',
  ops:[
    'Un proceso neurodegenerativo, como la enfermedad de Alzheimer, caracterizado por un desarrollo lento y progresivo a lo largo de años',
    'Este curso temporal sugiere con mayor probabilidad un ictus isquémico agudo reciente', 'El curso temporal de los síntomas nunca aporta ninguna información útil para distinguir entre causas vasculares y neurodegenerativas', 'Un deterioro cognitivo lento y progresivo siempre indica una hemorragia cerebral reciente'],
  ok:0,
  clave:'Un proceso neurodegenerativo, como la enfermedad de Alzheimer, caracterizado por un desarrollo lento y progresivo a lo largo de años.',
  exp:'A diferencia del daño súbito de un ictus, el Alzheimer es un proceso lento y progresivo, que se desarrolla a lo largo de años antes de manifestarse clínicamente con deterioro de la memoria -esta diferencia en el curso temporal (agudo vs. crónico progresivo) es, en la práctica clínica, una de las primeras claves para distinguir un evento vascular de un proceso neurodegenerativo.',
  no:{
    1:'Un ictus isquémico agudo se caracteriza por un inicio SÚBITO, no por un deterioro lento y progresivo a lo largo de años como el descrito.',
    2:'El curso temporal (agudo vs. crónico progresivo) sí aporta información clínica útil y central para orientar el diagnóstico diferencial.',
    3:'Una hemorragia cerebral también se presenta de forma SÚBITA, no como un deterioro lento y progresivo a lo largo de años.'
  },
  trampa:'Confundir el curso temporal característico de un proceso neurodegenerativo (lento, progresivo) con el de un evento vascular agudo (súbito).',
  obj:'Aplicar el curso temporal de los síntomas para distinguir un proceso neurodegenerativo de un evento vascular agudo.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 28.',
  tags:['enfermedad de Alzheimer','curso crónico progresivo','diagnóstico diferencial']
},
{
  id:'U10-AP2-Q41', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología osteoarticular', sub:'Naturaleza mecánica de la osteoartritis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la osteoartritis afecta característicamente articulaciones de carga de forma asimétrica, a diferencia de un proceso autoinmune?',
  ops:[
    'Porque es fundamentalmente un problema mecánico y localizado, relacionado con el uso repetido y la carga sobre articulaciones específicas, no un ataque inmunológico sistémico',
    'La osteoartritis es, de hecho, un proceso autoinmune sistémico idéntico a la artritis reumatoide', 'La osteoartritis siempre afecta a todas las articulaciones del cuerpo de forma simétrica y simultánea', 'El patrón de afectación articular en la osteoartritis no tiene ninguna relación con el uso mecánico de la articulación'],
  ok:0,
  clave:'Es fundamentalmente un problema mecánico y localizado, relacionado con el uso repetido y la carga sobre articulaciones específicas, no un ataque inmunológico sistémico.',
  exp:'La osteoartritis es fundamentalmente un problema mecánico y localizado, relacionado con la edad, el uso repetido de la articulación, la obesidad y lesiones previas -por eso afecta característicamente a articulaciones específicas de carga, de forma asimétrica, sin el patrón simétrico y sistémico de un proceso autoinmune como la artritis reumatoide.',
  no:{
    1:'Son procesos claramente distintos: la osteoartritis es mecánica y localizada, la artritis reumatoide es autoinmune y sistémica.',
    2:'Es precisamente lo contrario: la osteoartritis afecta articulaciones de forma ASIMÉTRICA y localizada, no todas simétricamente.',
    3:'El patrón de afectación de la osteoartritis tiene una relación directa con el uso mecánico y la carga sobre articulaciones específicas.'
  },
  trampa:'Confundir el mecanismo mecánico y localizado de la osteoartritis con el mecanismo autoinmune y sistémico de la artritis reumatoide.',
  obj:'Explicar la naturaleza mecánica y localizada de la osteoartritis, distinta de un proceso autoinmune sistémico.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 26.',
  tags:['osteoartritis','mecanismo mecánico','articulaciones de carga']
},
{
  id:'U10-AP2-Q42', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología osteoarticular', sub:'Carácter silencioso de la osteoporosis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se justifica el tamizaje con densitometría ósea en poblaciones de riesgo de osteoporosis?',
  ops:[
    'Porque la osteoporosis no produce dolor ni síntomas hasta que ocurre una fractura, así que el tamizaje permite detectarla antes de su primera complicación grave',
    'La osteoporosis siempre produce síntomas evidentes mucho antes de que ocurra cualquier fractura', 'El tamizaje con densitometría ósea no tiene ninguna utilidad real para prevenir fracturas relacionadas con osteoporosis', 'La osteoporosis solo afecta a hombres jóvenes, nunca a mujeres tras la menopausia'],
  ok:0,
  clave:'La osteoporosis no produce dolor ni síntomas hasta que ocurre una fractura, así que el tamizaje permite detectarla antes de su primera complicación grave.',
  exp:'El carácter silencioso de la osteoporosis -sin dolor ni síntomas hasta que ocurre una fractura- es lo que justifica el tamizaje con densitometría ósea en poblaciones de riesgo, un ejemplo más de prevención secundaria aplicada a una enfermedad que, de otra forma, se detectaría solo tras su primera complicación grave.',
  no:{
    1:'Es precisamente lo contrario: la osteoporosis NO produce síntomas evidentes antes de una fractura, siendo silenciosa hasta ese momento.',
    2:'El tamizaje con densitometría ósea sí tiene una utilidad real bien documentada para detectar la osteoporosis antes de la primera fractura.',
    3:'La osteoporosis afecta particularmente a mujeres tras la menopausia, por la caída de estrógenos, no predominantemente a hombres jóvenes.'
  },
  trampa:'Asumir que la osteoporosis produce síntomas tempranos detectables sin necesidad de tamizaje, o invertir la población de riesgo típica.',
  obj:'Explicar por qué el carácter silencioso de la osteoporosis justifica el tamizaje con densitometría ósea.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 26.',
  tags:['osteoporosis','carácter silencioso','densitometría ósea']
},
{
  id:'U10-AP2-Q43', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología osteoarticular', sub:'Simetría como pista clínica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta dolor e inflamación en las mismas articulaciones de ambas manos de forma simétrica, acompañado de fatiga y fiebre baja persistente.',
  enunciado:'¿Qué tipo de proceso sugiere este patrón clínico, más que una osteoartritis?',
  ops:[
    'Un proceso autoinmune sistémico como la artritis reumatoide, que típicamente afecta de forma simétrica y se acompaña de manifestaciones sistémicas',
    'Este patrón sugiere fuertemente una osteoartritis típica, relacionada con el desgaste mecánico de las articulaciones', 'El patrón de afectación articular (simétrico o asimétrico) nunca aporta ninguna información diagnóstica útil', 'La fiebre baja y la fatiga son manifestaciones típicas y exclusivas de la osteoartritis, no de procesos autoinmunes'],
  ok:0,
  clave:'Un proceso autoinmune sistémico como la artritis reumatoide, que típicamente afecta de forma simétrica y se acompaña de manifestaciones sistémicas.',
  exp:'La artritis reumatoide es una enfermedad autoinmune sistémica que afecta típicamente de forma simétrica y se acompaña de manifestaciones sistémicas (fatiga, fiebre baja) que reflejan su naturaleza autoinmune, no puramente mecánica -un patrón clínico que un patrón simétrico de afectación articular con signos sistémicos sugiere claramente, a diferencia de la osteoartritis.',
  no:{
    1:'La osteoartritis típicamente afecta de forma ASIMÉTRICA y sin manifestaciones sistémicas como fiebre; este patrón no es típico de osteoartritis.',
    2:'El patrón de simetría vs. asimetría sí aporta información diagnóstica central para distinguir un proceso autoinmune de uno mecánico.',
    3:'La fiebre baja y la fatiga son manifestaciones sistémicas típicas de procesos AUTOINMUNES como la artritis reumatoide, no de la osteoartritis.'
  },
  trampa:'Confundir el patrón simétrico con manifestaciones sistémicas (sugestivo de artritis reumatoide) con el patrón típico de la osteoartritis.',
  obj:'Aplicar el patrón de simetría articular y manifestaciones sistémicas para orientar hacia un proceso autoinmune.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 26.',
  tags:['artritis reumatoide','patrón simétrico','manifestaciones sistémicas']
},
{
  id:'U10-AP2-Q44', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología osteoarticular', sub:'Pico de incidencia del osteosarcoma',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué relación sugiere el pico de incidencia del osteosarcoma en adolescentes durante el crecimiento óseo rápido?',
  ops:[
    'Una relación entre la actividad proliferativa intensa del hueso en crecimiento y el riesgo de transformación maligna en ese mismo tejido',
    'El osteosarcoma no tiene ninguna relación con la edad ni con la actividad de crecimiento óseo del paciente', 'El osteosarcoma afecta predominantemente a adultos mayores, con un hueso ya completamente maduro y sin actividad proliferativa', 'La actividad proliferativa del hueso en crecimiento siempre reduce, en vez de aumentar, el riesgo de transformación maligna'],
  ok:0,
  clave:'Una relación entre la actividad proliferativa intensa del hueso en crecimiento y el riesgo de transformación maligna en ese mismo tejido.',
  exp:'El osteosarcoma es el tumor óseo maligno primario más frecuente, con un pico de incidencia característico en adolescentes durante el período de crecimiento óseo rápido -una coincidencia que sugiere una relación entre la actividad proliferativa intensa del hueso en crecimiento y el riesgo de transformación maligna en ese mismo tejido.',
  no:{
    1:'El osteosarcoma sí tiene una relación bien documentada con la edad y la actividad de crecimiento óseo, reflejada en su pico de incidencia en adolescentes.',
    2:'Es precisamente lo contrario: el osteosarcoma tiene su pico de incidencia en ADOLESCENTES con crecimiento óseo activo, no en adultos mayores.',
    3:'La actividad proliferativa intensa se asocia con un riesgo AUMENTADO, no reducido, de transformación maligna en ese tejido.'
  },
  trampa:'Invertir la relación entre actividad proliferativa del hueso en crecimiento y riesgo de transformación maligna, o confundir el grupo etario afectado.',
  obj:'Explicar la relación entre el crecimiento óseo rápido y el pico de incidencia del osteosarcoma en adolescentes.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 26.',
  tags:['osteosarcoma','pico de incidencia','crecimiento óseo rápido']
},
{
  id:'U10-AP2-Q45', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología hematológica y ganglionar', sub:'Tres mecanismos de la anemia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los tres grandes mecanismos posibles que explican una anemia?',
  ops:[
    'Producción insuficiente, pérdida excesiva, o destrucción acelerada de glóbulos rojos', 'La anemia siempre tiene una única causa posible: la deficiencia de hierro en la dieta', 'Los tres mecanismos posibles son exclusivamente genéticos, sin ninguna causa adquirida', 'La anemia nunca puede deberse a un mecanismo de destrucción acelerada de glóbulos rojos'],
  ok:0,
  clave:'Producción insuficiente, pérdida excesiva, o destrucción acelerada de glóbulos rojos.',
  exp:'La anemia es un signo con múltiples causas posibles, clasificables en tres grandes mecanismos: producción insuficiente (por deficiencia de hierro, vitamina B12 o ácido fólico, o por daño de la médula ósea), pérdida excesiva (sangrado agudo o crónico), o destrucción acelerada (hemólisis, intrínseca o por ataque externo).',
  no:{
    1:'La deficiencia de hierro es solo una de varias causas posibles dentro del mecanismo de producción insuficiente, no la única causa de anemia en general.',
    2:'Los tres mecanismos incluyen causas tanto adquiridas (pérdida, deficiencias nutricionales) como algunas genéticas (ciertos tipos de hemólisis).',
    3:'La destrucción acelerada (hemólisis) es precisamente uno de los tres mecanismos reconocidos de anemia, no algo excluido.'
  },
  trampa:'Reducir las causas de anemia a un único mecanismo (deficiencia de hierro), sin reconocer los tres mecanismos generales posibles.',
  obj:'Identificar los tres grandes mecanismos que explican una anemia.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 13.',
  tags:['anemia','mecanismos de anemia','clasificación']
},
{
  id:'U10-AP2-Q46', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología hematológica y ganglionar', sub:'Adenopatía reactiva vs. maligna',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta un ganglio linfático agrandado, duro, fijo a planos profundos, indoloro y de crecimiento progresivo a lo largo de varias semanas.',
  enunciado:'¿Qué características de este ganglio sugieren un origen maligno más que una causa reactiva benigna?',
  ops:[
    'Ser duro, fijo a planos profundos e indoloro, con crecimiento progresivo, a diferencia de un ganglio reactivo que suele ser blando, móvil y doloroso',
    'Ninguna característica semiológica de un ganglio linfático permite distinguir entre una causa reactiva y una maligna', 'El dolor a la palpación es la característica más sugestiva de malignidad en un ganglio linfático agrandado', 'Un ganglio blando y móvil es más sugestivo de malignidad que uno duro y fijo'],
  ok:0,
  clave:'Ser duro, fijo a planos profundos e indoloro, con crecimiento progresivo, a diferencia de un ganglio reactivo que suele ser blando, móvil y doloroso.',
  exp:'Ciertas características clínicas ayudan a distinguir una adenopatía reactiva de una preocupante: un ganglio reactivo suele ser blando, móvil y doloroso a la palpación, mientras que uno de origen maligno tiende a ser duro, fijo a planos profundos, indoloro y de crecimiento progresivo.',
  no:{
    1:'Sí existen características semiológicas bien establecidas que orientan hacia el origen reactivo o maligno de un ganglio agrandado.',
    2:'El dolor a la palpación es, de hecho, más sugestivo de un origen REACTIVO benigno, no de malignidad.',
    3:'Es precisamente lo contrario: un ganglio duro y fijo es más sugestivo de malignidad; uno blando y móvil sugiere causa reactiva benigna.'
  },
  trampa:'Invertir las características semiológicas que distinguen una adenopatía reactiva benigna de una de origen maligno.',
  obj:'Aplicar las características semiológicas que distinguen una adenopatía maligna de una reactiva benigna.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 13.',
  tags:['adenopatía','características semiológicas','origen maligno']
},
{
  id:'U10-AP2-Q47', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología hematológica y ganglionar', sub:'Diferencia entre linfoma y leucemia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencia fundamentalmente un linfoma de una leucemia?',
  ops:[
    'El linfoma forma masas sólidas predominantemente en tejido linfático; la leucemia se origina en la médula ósea y típicamente circula por la sangre periférica',
    'Ambas neoplasias son exactamente el mismo proceso biológico, solo con nombres distintos según el hospital', 'El linfoma circula típicamente por la sangre periférica, mientras que la leucemia forma masas sólidas en tejido linfático', 'Ninguna de las dos neoplasias se origina en el tejido hematopoyético del cuerpo'],
  ok:0,
  clave:'El linfoma forma masas sólidas predominantemente en tejido linfático; la leucemia se origina en la médula ósea y típicamente circula por la sangre periférica.',
  exp:'El linfoma es una neoplasia maligna originada en el tejido linfático, que forma masas sólidas; la leucemia es una neoplasia maligna que se origina en la médula ósea y típicamente circula por la sangre periférica, a diferencia del linfoma, que forma masas sólidas predominantemente en tejido linfático.',
  no:{
    1:'Son neoplasias distintas con orígenes y comportamientos diferentes, no el mismo proceso con nombres intercambiables.',
    2:'Está invertido: el LINFOMA forma masas sólidas, y la LEUCEMIA circula por la sangre periférica, no al revés.',
    3:'Ambas neoplasias se originan en el tejido hematopoyético, precisamente su origen celular común compartido.'
  },
  trampa:'Invertir las características del linfoma (masas sólidas) y la leucemia (circulación en sangre periférica), o asumir que son el mismo proceso.',
  obj:'Distinguir el linfoma de la leucemia según su origen y comportamiento característico.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 13.',
  tags:['linfoma','leucemia','origen hematopoyético']
},
{
  id:'U10-AP2-Q48', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología cutánea', sub:'El criterio de Evolución en el sistema ABCDE',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el criterio de Evolución del sistema ABCDE suele ser, en la práctica, el más sensible para detectar un melanoma?',
  ops:[
    'Porque un lunar que cambia -de tamaño, forma o color- es la señal de alarma que con más frecuencia lleva al diagnóstico temprano',
    'El criterio de Evolución nunca aporta información útil adicional a los otros cuatro criterios del sistema ABCDE', 'Un lunar que permanece completamente estable en el tiempo es la característica más sugestiva de melanoma', 'El sistema ABCDE no incluye ningún criterio relacionado con el cambio a lo largo del tiempo'],
  ok:0,
  clave:'Un lunar que cambia -de tamaño, forma o color- es la señal de alarma que con más frecuencia lleva al diagnóstico temprano.',
  exp:'El sistema ABCDE (Asimetría, Bordes irregulares, Color no uniforme, Diámetro mayor a 6 mm, Evolución) es la herramienta clínica de tamizaje visual más usada; el criterio de Evolución es, en la práctica, frecuentemente el más sensible, porque un lunar que cambia -de tamaño, forma o color- es la señal de alarma que con más frecuencia lleva al diagnóstico temprano.',
  no:{
    1:'El criterio de Evolución sí aporta información particularmente sensible y valiosa, distinta de los otros cuatro criterios estáticos.',
    2:'Es precisamente lo contrario: un lunar que CAMBIA (no que permanece estable) es la característica más sugestiva de melanoma según este criterio.',
    3:'El sistema ABCDE sí incluye explícitamente la Evolución (cambio en el tiempo) como uno de sus cinco criterios.'
  },
  trampa:'Invertir el significado del criterio de Evolución, asumiendo que la estabilidad (no el cambio) es la señal de alarma.',
  obj:'Explicar por qué el criterio de Evolución del sistema ABCDE es frecuentemente el más sensible para detectar melanoma.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 25.',
  tags:['melanoma','sistema ABCDE','criterio de evolución']
},
{
  id:'U10-AP2-Q49', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología cutánea', sub:'Comportamiento del carcinoma basocelular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se describe al carcinoma basocelular como "localmente agresivo pero raramente letal"?',
  ops:[
    'Tiene una capacidad de metástasis extremadamente baja, aunque puede causar daño local considerable si no se trata, al crecer de forma invasiva sobre estructuras adyacentes',
    'El carcinoma basocelular nunca causa ningún daño local, sin importar si se trata o no', 'El carcinoma basocelular tiene una capacidad de metástasis tan alta como el melanoma', 'El carcinoma basocelular es exclusivamente un problema estético, sin ninguna capacidad de daño tisular real'],
  ok:0,
  clave:'Tiene una capacidad de metástasis extremadamente baja, aunque puede causar daño local considerable si no se trata, al crecer de forma invasiva sobre estructuras adyacentes.',
  exp:'El carcinoma basocelular, a diferencia del melanoma, tiene una capacidad de metástasis extremadamente baja, aunque puede causar daño local considerable si no se trata, al crecer de forma invasiva sobre estructuras adyacentes -por eso se describe como "localmente agresivo pero raramente letal".',
  no:{
    1:'El carcinoma basocelular sí puede causar daño local considerable si no se trata, precisamente por su crecimiento invasivo local.',
    2:'Es precisamente lo contrario: el carcinoma basocelular tiene una capacidad de metástasis MUCHO MENOR que el melanoma.',
    3:'El carcinoma basocelular tiene una capacidad real de daño tisular local invasivo, no es solo un problema estético.'
  },
  trampa:'Confundir el bajo potencial de metástasis del carcinoma basocelular con ausencia total de daño, o compararlo erróneamente con el melanoma.',
  obj:'Explicar por qué el carcinoma basocelular se describe como "localmente agresivo pero raramente letal".',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 25.',
  tags:['carcinoma basocelular','bajo potencial metastásico','daño local invasivo']
},
{
  id:'U10-AP2-Q50', programa:'unirm', cuatri:10,
  esp:'Anatomía Patológica II', tema:'Patología cutánea', sub:'Principio general de la patología de órganos',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio general, aplicable a cualquier órgano del cuerpo, cierra el bloque de Anatomía Patológica II a través del tema de patología cutánea?',
  ops:[
    'Que cualquier órgano tiene un repertorio limitado de respuestas (inflamación, proliferación excesiva, transformación maligna), y reconocer cuál de ellas está ocurriendo es más útil que memorizar cada enfermedad como un caso aislado',
    'Que cada órgano del cuerpo tiene un número infinito de respuestas posibles ante una agresión, sin ningún patrón reconocible en común', 'Que la piel es el único órgano del cuerpo cuya patología sigue un patrón de respuestas limitado y reconocible', 'Que no existe ningún principio general aplicable a la patología de distintos órganos del cuerpo'],
  ok:0,
  clave:'Cualquier órgano tiene un repertorio limitado de respuestas (inflamación, proliferación excesiva, transformación maligna), y reconocer cuál está ocurriendo es más útil que memorizar cada enfermedad aislada.',
  exp:'Este tema cierra el bloque de Anatomía Patológica II retomando el mismo principio que atraviesa toda la materia: la piel, igual que cualquier otro órgano, tiene un repertorio limitado de respuestas (inflamación, proliferación excesiva, transformación maligna), y reconocer cuál de ellas está ocurriendo es más útil que memorizar cada enfermedad como un caso aislado.',
  no:{
    1:'Es precisamente lo contrario: el repertorio de respuestas es LIMITADO y reconocible, no infinito y sin patrón, en cualquier órgano.',
    2:'Este principio no es exclusivo de la piel; se aplica de forma general a la patología de cualquier órgano estudiado en el bloque.',
    3:'Sí existe un principio general aplicable, precisamente el que cierra y unifica todo el bloque de Anatomía Patológica II.'
  },
  trampa:'No reconocer el principio general de patrones de respuesta limitados y reconocibles que unifica el estudio de la patología de distintos órganos.',
  obj:'Explicar el principio general que unifica el estudio de la patología de distintos órganos, cerrando el bloque con el ejemplo de la piel.',
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 25.',
  tags:['principio general de patología','repertorio limitado de respuestas','cierre del bloque']
}

]);
