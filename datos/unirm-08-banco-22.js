/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE BIOQUIMICA II (2/2)
   Completa Bioquimica II a 50 preguntas junto con banco-21.js.
   Cubre el resto de nucleotidos, integracion metabolica,
   vitaminas y coenzimas, metabolismo del hemo/bilirrubina,
   lipoproteinas y metabolismo del etanol (temas 3, 5, 7-12).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== BIOQUIMICA II ===================== */
{
  id:'U8-B-Q23', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Vía de las pentosas fosfato', sub:'Flexibilidad metabólica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica de la vía de las pentosas fosfato le permite adaptarse a las necesidades cambiantes de la célula?',
  ops:[
    'Produce siempre exactamente la misma proporción de NADPH y ribosa-5-fosfato, sin variación',
    'Puede regularse para producir predominantemente NADPH, predominantemente ribosa, o ambos en proporción equilibrada, según las necesidades de cada célula',
    'Solo puede producir NADPH, nunca ribosa',
    'Solo puede producir ribosa, nunca NADPH'
  ],
  ok:1,
  clave:'La vía puede ajustar su producción hacia predominio de NADPH, de ribosa, o de ambos, según la demanda celular.',
  exp:'Según las necesidades de cada célula en un momento dado, la vía de las pentosas fosfato puede regularse para producir predominantemente NADPH (por ejemplo, en el eritrocito, que necesita defensa antioxidante constante), predominantemente ribosa-5-fosfato (en una célula que se divide activamente y necesita sintetizar ácidos nucleicos), o ambos en proporción equilibrada -tiene una flexibilidad metabólica considerable, ajustándose a la demanda relativa de cada producto según el tipo celular y su estado.',
  no:{
    0:'No produce siempre la misma proporción fija; su regulación es precisamente flexible según las necesidades celulares.',
    2:'También puede producir predominantemente ribosa-5-fosfato cuando la célula necesita sintetizar ácidos nucleicos, no solo NADPH.',
    3:'También puede producir predominantemente NADPH cuando la célula necesita defensa antioxidante o biosíntesis reductora, no solo ribosa.'
  },
  trampa:'Asumir que la vía de las pentosas fosfato tiene una salida fija, sin reconocer su capacidad de ajustar la proporción relativa de sus dos productos según la demanda celular.',
  obj:'Explicar la flexibilidad regulatoria de la vía de las pentosas fosfato para ajustar su producción de NADPH y ribosa.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['vía de las pentosas fosfato','flexibilidad metabólica','NADPH','ribosa-5-fosfato']
},
{
  id:'U8-B-Q24', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Regulación de la síntesis de colesterol', sub:'Retroalimentación negativa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo regula el propio colesterol intracelular la actividad de la HMG-CoA reductasa?',
  ops:[
    'El colesterol intracelular alto activa a la HMG-CoA reductasa, aumentando aún más la síntesis',
    'El colesterol intracelular alto inhibe a la HMG-CoA reductasa (y acelera su degradación), reduciendo la síntesis cuando ya hay suficiente colesterol disponible',
    'El colesterol no tiene ningún efecto regulatorio sobre esta enzima',
    'La HMG-CoA reductasa se regula únicamente por la dieta, sin regulación intracelular'
  ],
  ok:1,
  clave:'El colesterol intracelular alto inhibe y acelera la degradación de la HMG-CoA reductasa, un mecanismo de retroalimentación negativa.',
  exp:'La HMG-CoA reductasa está regulada por retroalimentación negativa por el propio colesterol: cuando los niveles intracelulares de colesterol son altos, la enzima se inhibe y además se degrada más rápidamente, reduciendo la síntesis de colesterol cuando ya hay suficiente disponible. Este mecanismo de retroalimentación es análogo a otros ejemplos de regulación metabólica ya vistos, donde el producto final de una vía inhibe a la enzima limitante que la inicia.',
  no:{
    0:'Es al revés: el colesterol alto INHIBE (no activa) a la enzima, como mecanismo de retroalimentación negativa que evita una síntesis excesiva.',
    2:'El colesterol sí tiene un efecto regulatorio directo y bien establecido sobre esta enzima, mediante retroalimentación negativa.',
    3:'Aunque la dieta también influye en los niveles de colesterol disponibles, existe una regulación intracelular directa mediada por el propio colesterol sobre la actividad y estabilidad de la enzima.'
  },
  trampa:'Invertir el sentido de la retroalimentación, asumiendo que el colesterol alto estimula (en vez de inhibir) su propia síntesis.',
  obj:'Explicar el mecanismo de retroalimentación negativa del colesterol sobre la HMG-CoA reductasa.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['HMG-CoA reductasa','retroalimentación negativa','colesterol intracelular','regulación enzimática']
},
{
  id:'U8-B-Q25', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Metabolismo de nucleótidos', sub:'Gota',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el exceso de recambio de PURINAS puede causar gota, mientras que el exceso de recambio de PIRIMIDINAS no?',
  ops:[
    'Porque las purinas se degradan a ácido úrico, poco soluble y capaz de precipitar en articulaciones; las pirimidinas se degradan a productos solubles distintos, sin generar ácido úrico',
    'Porque las pirimidinas nunca se degradan en el cuerpo humano',
    'Porque las purinas y las pirimidinas se degradan exactamente por la misma vía metabólica',
    'Porque la gota no tiene relación con el metabolismo de nucleótidos'
  ],
  ok:0,
  clave:'Solo las purinas se degradan a ácido úrico (poco soluble, causa gota); las pirimidinas se degradan a productos solubles distintos.',
  exp:'La degradación de las purinas (adenina y guanina) termina en ácido úrico, una molécula poco soluble en agua que, en concentraciones elevadas, puede precipitar en forma de cristales en articulaciones periféricas (gota) o en el riñón (nefrolitiasis úrica). La degradación de las pirimidinas sigue una vía metabólica completamente distinta, que termina en productos solubles (beta-alanina y beta-aminoisobutirato), sin generar ácido úrico ni ningún producto de baja solubilidad equivalente -por eso el exceso de recambio de pirimidinas nunca produce gota.',
  no:{
    1:'Las pirimidinas sí se degradan normalmente en el cuerpo, solo que por una vía distinta que no genera ácido úrico.',
    2:'Purinas y pirimidinas se degradan por vías metabólicas completamente distintas, con productos finales diferentes -esa diferencia es precisamente la explicación de por qué solo una de las dos se asocia a gota.',
    3:'La gota tiene una relación directa y bien establecida con el metabolismo (específicamente la degradación) de las purinas.'
  },
  trampa:'Asumir que purinas y pirimidinas siguen la misma vía de degradación, sin reconocer la asimetría metabólica real entre ambas que explica la especificidad de la gota por las purinas.',
  obj:'Explicar por qué solo el exceso de purinas, no de pirimidinas, produce gota.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['gota','ácido úrico','purinas','pirimidinas']
},
{
  id:'U8-B-Q26', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Síndrome de Lesch-Nyhan', sub:'Deficiencia de HGPRT',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño con deficiencia completa de hipoxantina-guanina fosforribosiltransferasa (HGPRT) presenta hiperuricemia grave desde la infancia, junto con automutilación y coreoatetosis.',
  enunciado:'¿Qué mecanismo bioquímico explica la hiperuricemia en este síndrome?',
  ops:[
    'Sin HGPRT, la vía de salvamento de purinas falla, forzando una dependencia excesiva de la vía de novo (mucho más costosa) y acumulando un exceso de precursores que terminan degradándose a ácido úrico',
    'La HGPRT no tiene ninguna relación con el metabolismo de las purinas',
    'El exceso de HGPRT es lo que causa la hiperuricemia',
    'La hiperuricemia en este síndrome no tiene relación con el metabolismo de purinas'
  ],
  ok:0,
  clave:'La deficiencia de HGPRT fuerza dependencia de la vía de novo y genera exceso de precursores que se degradan a ácido úrico.',
  exp:'La HGPRT es la enzima clave de la vía de salvamento de purinas. Su deficiencia completa (síndrome de Lesch-Nyhan) obliga a las células a depender excesivamente de la vía de novo, mucho más costosa en energía, y además hace que se acumule un exceso de precursores purínicos que terminan degradándose a ácido úrico, produciendo hiperuricemia grave desde la infancia. Las manifestaciones neurológicas (automutilación, coreoatetosis, discapacidad intelectual) reflejan la importancia adicional de esta vía en el metabolismo purínico del sistema nervioso central.',
  no:{
    1:'La HGPRT tiene una relación directa y central con el metabolismo de purinas, siendo la enzima clave de su vía de salvamento.',
    2:'Es la DEFICIENCIA (no el exceso) de HGPRT la que causa este síndrome y su hiperuricemia característica.',
    3:'La hiperuricemia de este síndrome tiene una relación directa y bien establecida con el metabolismo alterado de las purinas por la deficiencia enzimática.'
  },
  trampa:'No conectar la falla de la vía de salvamento con la acumulación de precursores purínicos que terminan degradándose a ácido úrico, produciendo la hiperuricemia característica.',
  obj:'Explicar el mecanismo de hiperuricemia en el síndrome de Lesch-Nyhan por deficiencia de HGPRT.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['síndrome de Lesch-Nyhan','HGPRT','hiperuricemia','vía de salvamento']
},
{
  id:'U8-B-Q27', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Integración metabólica', sub:'Estado alimentado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En el estado alimentado (glucemia elevada, insulina alta), ¿qué patrón general de vías metabólicas se activa?',
  ops:[
    'Se activan simultáneamente las vías catabólicas (glucogenólisis, gluconeogénesis, beta-oxidación)',
    'Se activan de forma coordinada las vías anabólicas (glucogenogénesis, lipogénesis, síntesis de proteínas), mientras se reprimen las catabólicas',
    'No hay ningún patrón coordinado; cada vía actúa de forma completamente independiente',
    'Solo se activa la síntesis de proteínas, sin afectar al metabolismo de carbohidratos ni lípidos'
  ],
  ok:1,
  clave:'El estado alimentado activa coordinadamente las vías anabólicas (glucogenogénesis, lipogénesis, síntesis de proteínas) y reprime las catabólicas.',
  exp:'En el estado alimentado, con la insulina dominando el panorama hormonal, se activan de forma coordinada las vías anabólicas: captación de glucosa, glucogenogénesis, lipogénesis y síntesis de proteínas, mientras se reprimen simultáneamente las vías catabólicas: glucogenólisis, gluconeogénesis, beta-oxidación y proteólisis. Es un programa metabólico coherente de "almacenar el excedente", donde todas las vías de construcción se activan a la vez y todas las de degradación se reprimen a la vez.',
  no:{
    0:'Es al revés: en el estado alimentado se reprimen las vías catabólicas, que predominan en el ayuno, no en el estado alimentado.',
    2:'Sí existe un patrón coordinado bien definido, gobernado principalmente por el balance entre insulina y glucagón, no una independencia total entre vías.',
    3:'El estado alimentado afecta de forma coordinada al metabolismo de carbohidratos, lípidos Y proteínas simultáneamente, no solo a la síntesis proteica de forma aislada.'
  },
  trampa:'No reconocer el patrón coordinado de activación/represión simultánea de múltiples vías metabólicas según el estado hormonal predominante.',
  obj:'Describir el patrón coordinado de activación de vías anabólicas en el estado alimentado.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['estado alimentado','insulina','anabolismo','integración metabólica']
},
{
  id:'U8-B-Q28', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Integración metabólica', sub:'Cetoacidosis diabética',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con diabetes tipo 1 sin tratamiento presenta hiperglucemia, cetosis y acidosis metabólica, pese a tener glucosa circulante elevada y estar comiendo con normalidad.',
  enunciado:'¿Cómo se explica, en términos de integración metabólica, que el cuerpo active un programa catabólico pese a tener glucosa disponible?',
  ops:[
    'La ausencia casi total de insulina simula metabólicamente un "ayuno perpetuo": el cuerpo activa sin control el programa catabólico completo (lipólisis, cetogénesis) porque las células no pueden "percibir" ni usar la glucosa disponible sin la señal de la insulina',
    'La glucosa elevada por sí sola siempre activa un programa anabólico, sin excepciones',
    'Este cuadro no tiene ninguna relación con la regulación hormonal del metabolismo',
    'La cetoacidosis diabética ocurre solo cuando hay hipoglucemia real'
  ],
  ok:0,
  clave:'Sin insulina, aunque haya glucosa en sangre, el cuerpo activa el programa catabólico como si estuviera en ayuno, produciendo cetoacidosis.',
  exp:'En la diabetes tipo 1 sin tratamiento, la ausencia casi total de insulina simula metabólicamente un "ayuno perpetuo" incluso con el paciente comiendo con normalidad: sin la señal de la insulina, el cuerpo activa de forma descontrolada el programa catabólico completo -glucogenólisis, gluconeogénesis, lipólisis, cetogénesis excesiva- pese a que hay glucosa disponible en la sangre, porque las células no pueden captarla ni usarla eficientemente sin insulina. Este es el mecanismo metabólico central de la cetoacidosis diabética: hiperglucemia (la glucosa se acumula en sangre sin poder entrar a las células) coexistiendo con un estado catabólico generalizado.',
  no:{
    1:'Precisamente el caso descrito demuestra que la glucosa elevada por sí sola NO activa un programa anabólico si falta la señal de la insulina.',
    2:'Sí tiene una relación directa: es precisamente el desequilibrio hormonal (ausencia de insulina) lo que explica este patrón metabólico aparentemente paradójico.',
    3:'La cetoacidosis diabética ocurre típicamente con hiperglucemia (glucosa alta), no con hipoglucemia; el problema no es la falta de glucosa, sino la incapacidad de usarla sin insulina.'
  },
  trampa:'Asumir que la presencia de glucosa en sangre es suficiente para activar el anabolismo, sin considerar que la señal hormonal (insulina) es indispensable para que las células puedan usarla.',
  obj:'Explicar el mecanismo de integración metabólica detrás de la cetoacidosis diabética.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['cetoacidosis diabética','diabetes tipo 1','insulina','integración metabólica']
},
{
  id:'U8-B-Q29', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Integración metabólica', sub:'Cortisol en el ayuno prolongado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué papel adicional cumple el cortisol en el ayuno prolongado, más allá del glucagón?',
  ops:[
    'El cortisol inhibe por completo la gluconeogénesis',
    'El cortisol promueve la proteólisis muscular, liberando aminoácidos como sustrato adicional para la gluconeogénesis, y potencia algunos efectos del glucagón',
    'El cortisol solo actúa en situaciones de estrés agudo, nunca en el ayuno metabólico',
    'El cortisol y la insulina tienen exactamente el mismo efecto sobre el metabolismo'
  ],
  ok:1,
  clave:'En el ayuno prolongado, el cortisol promueve la proteólisis muscular y potencia algunos efectos del glucagón.',
  exp:'En el ayuno más prolongado, el cortisol (una hormona de estrés metabólico, no solo de estrés agudo) se suma al panorama hormonal dominado por el glucagón, promoviendo la proteólisis muscular -liberando aminoácidos como sustrato adicional para la gluconeogénesis- y potenciando algunos de los efectos del glucagón sobre el metabolismo hepático, reflejando la gravedad creciente de la situación metabólica a medida que se prolonga la falta de ingesta.',
  no:{
    0:'El cortisol no inhibe la gluconeogénesis; al contrario, contribuye a sostenerla aportando aminoácidos adicionales vía proteólisis muscular.',
    2:'El cortisol también actúa como hormona de estrés metabólico crónico, no solo en situaciones de estrés agudo; su papel en el ayuno prolongado es un ejemplo de esta función.',
    3:'El cortisol y la insulina tienen efectos metabólicos opuestos en muchos aspectos; el cortisol favorece el catabolismo (especialmente proteico) mientras la insulina favorece el anabolismo.'
  },
  trampa:'Subestimar el papel específico del cortisol en el ayuno prolongado, o confundirlo con hormonas de efecto opuesto.',
  obj:'Explicar el papel del cortisol en el ayuno prolongado y su relación con la proteólisis muscular.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['cortisol','ayuno prolongado','proteólisis muscular','gluconeogénesis']
},
{
  id:'U8-B-Q30', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Integración metabólica', sub:'Programas hormonales opuestos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es útil pensar en el metabolismo como dos "programas" hormonales coordinados (alimentado y ayuno) en vez de memorizar cada vía de forma aislada?',
  ops:[
    'Porque permite predecir el comportamiento de una vía nueva con solo saber si es anabólica o catabólica, y si el contexto es alimentado o de ayuno',
    'Porque en realidad no existe ninguna coordinación entre las distintas vías metabólicas',
    'Porque todas las vías metabólicas se comportan exactamente igual, sin importar el estado hormonal',
    'Porque esta perspectiva no tiene ninguna aplicación clínica práctica'
  ],
  ok:0,
  clave:'Pensar en programas coordinados permite predecir el comportamiento de vías nuevas según sean anabólicas/catabólicas y el contexto hormonal.',
  exp:'Entender el metabolismo como dos programas hormonales coordinados y antagónicos permite predecir el comportamiento de cualquier vía nueva con solo saber si ocurre en estado alimentado o en ayuno: si es una vía anabólica (de síntesis), estará activada por insulina y reprimida por glucagón; si es catabólica (de degradación), al revés. Esta perspectiva integrada también explica estados patológicos, como se vio con la cetoacidosis diabética, donde la ausencia de insulina simula un "ayuno perpetuo" metabólico.',
  no:{
    1:'Sí existe una coordinación real y bien documentada entre las distintas vías metabólicas, gobernada principalmente por el balance hormonal insulina-glucagón.',
    2:'Las vías metabólicas se comportan de forma opuesta según el estado hormonal (anabólicas activadas en el estado alimentado, catabólicas en el ayuno), no de la misma manera siempre.',
    3:'Esta perspectiva tiene aplicaciones clínicas directas, como la comprensión de la cetoacidosis diabética o la interpretación de estados metabólicos alterados.'
  },
  trampa:'Subestimar el valor práctico de pensar en programas metabólicos coordinados en vez de memorizar cada vía de forma aislada y desconectada.',
  obj:'Justificar la utilidad de entender el metabolismo como programas hormonales coordinados.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['integración metabólica','programas hormonales','anabolismo','catabolismo']
},
{
  id:'U8-B-Q31', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Vitaminas', sub:'Hidrosolubles vs. liposolubles',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia farmacocinética fundamental hay entre las vitaminas hidrosolubles y las liposolubles?',
  ops:[
    'Las hidrosolubles se almacenan en grandes cantidades en el tejido adiposo, mientras las liposolubles se eliminan rápidamente por la orina',
    'Las hidrosolubles no se almacenan significativamente (con la excepción parcial de la B12) y se eliminan por la orina; las liposolubles sí se almacenan en el tejido adiposo y el hígado',
    'Ambos tipos de vitaminas se comportan exactamente igual en el organismo',
    'Ninguna vitamina liposoluble puede causar toxicidad por exceso'
  ],
  ok:1,
  clave:'Las hidrosolubles no se almacenan significativamente y se eliminan por orina; las liposolubles sí se almacenan, con riesgo de toxicidad por exceso.',
  exp:'Las vitaminas hidrosolubles (complejo B y vitamina C) no se almacenan en cantidades significativas en el cuerpo (con la excepción parcial de la B12), y su exceso se elimina fácilmente por la orina, así que la toxicidad por exceso es rara. Las vitaminas liposolubles (A, D, E, K) sí se almacenan en el tejido adiposo y el hígado en cantidades considerables, así que el riesgo de toxicidad por exceso (hipervitaminosis) es real y clínicamente relevante, especialmente con suplementación excesiva y sostenida.',
  no:{
    0:'Es al revés: son las liposolubles las que se almacenan en el tejido adiposo, y las hidrosolubles las que se eliminan rápidamente por la orina.',
    2:'Tienen comportamientos farmacocinéticos claramente distintos, con implicaciones clínicas diferentes en cuanto a velocidad de deficiencia y riesgo de toxicidad.',
    3:'Las vitaminas liposolubles SÍ pueden causar toxicidad real por exceso, precisamente por su capacidad de almacenarse en cantidades significativas.'
  },
  trampa:'Invertir el patrón de almacenamiento y eliminación entre vitaminas hidrosolubles y liposolubles.',
  obj:'Describir la diferencia farmacocinética entre vitaminas hidrosolubles y liposolubles.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['vitaminas hidrosolubles','vitaminas liposolubles','almacenamiento','toxicidad por exceso']
},
{
  id:'U8-B-Q32', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Deficiencia de B12 vs. folato', sub:'Manifestaciones neurológicas',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con anemia megaloblástica es tratado empíricamente con folato, sin haberse descartado antes una deficiencia de vitamina B12. La anemia mejora, pero meses después el paciente desarrolla parestesias progresivas y alteración de la marcha.',
  enunciado:'¿Qué error se cometió en el manejo inicial de este paciente?',
  ops:[
    'Ningún error: el folato siempre es el tratamiento correcto para cualquier anemia megaloblástica',
    'Se trató la anemia con folato sin descartar antes la deficiencia de B12; el folato corrigió la anemia pero "enmascaró" el diagnóstico, mientras el daño neurológico de la deficiencia real de B12 seguía progresando sin tratamiento',
    'El folato nunca corrige ningún tipo de anemia megaloblástica',
    'Las manifestaciones neurológicas no tienen ninguna relación con la deficiencia de B12'
  ],
  ok:1,
  clave:'Tratar con folato sin descartar B12 corrige la anemia pero enmascara una deficiencia real de B12, permitiendo que el daño neurológico progrese sin tratamiento.',
  exp:'Tanto la deficiencia de B12 como la de folato producen el mismo tipo de anemia megaloblástica, indistinguible solo con el hemograma. Sin embargo, solo la deficiencia de B12 produce manifestaciones neurológicas (por su función adicional en el metabolismo de la mielina, independiente del folato). Tratar empíricamente con folato sin descartar B12 corrige la anemia (porque el folato sí participa en la síntesis de ADN) pero "enmascara" el diagnóstico, mientras el daño neurológico de una deficiencia real de B12 no tratada continúa progresando -exactamente lo que le ocurrió a este paciente.',
  no:{
    0:'Sí hubo un error: no descartar B12 antes de tratar con folato es precisamente el error clásico que puede enmascarar una deficiencia neurológicamente peligrosa.',
    2:'El folato sí corrige la anemia megaloblástica (de cualquier causa, B12 o folato), lo cual es parte del problema: corrige el hallazgo hematológico sin abordar la causa neurológica real si esta era B12.',
    3:'Las manifestaciones neurológicas tienen una relación directa y bien establecida con la deficiencia específica de B12, no con la de folato.'
  },
  trampa:'No reconocer el riesgo específico de tratar empíricamente con folato sin haber descartado antes una deficiencia real de B12.',
  obj:'Explicar el riesgo clínico de tratar una anemia megaloblástica con folato sin descartar deficiencia de B12.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['deficiencia de B12','deficiencia de folato','anemia megaloblástica','manifestaciones neurológicas']
},
{
  id:'U8-B-Q33', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Tiamina', sub:'Wernicke-Korsakoff',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con alcoholismo crónico y mala nutrición desarrolla confusión, ataxia y alteraciones oculomotoras.',
  enunciado:'¿Qué deficiencia vitamínica debe sospecharse con más fuerza, y por qué es más frecuente en este contexto?',
  ops:[
    'Deficiencia de vitamina C, sin relación con el alcoholismo',
    'Deficiencia de tiamina (B1), frecuente en el alcoholismo crónico por mala nutrición y porque el propio metabolismo del etanol consume tiamina',
    'Deficiencia de vitamina D, causante directa de este cuadro neurológico agudo',
    'Deficiencia de vitamina K, sin relación con el sistema nervioso'
  ],
  ok:1,
  clave:'La deficiencia de tiamina, frecuente en el alcoholismo, causa el síndrome de Wernicke-Korsakoff con ese cuadro clínico característico.',
  exp:'La tiamina (B1) es coenzima de reacciones de descarboxilación oxidativa esenciales para el metabolismo energético cerebral. Su deficiencia produce el síndrome de Wernicke-Korsakoff, caracterizado por confusión, ataxia y alteraciones oculomotoras (oftalmoplejía), particularmente frecuente en el alcoholismo crónico, tanto por la mala nutrición asociada como porque el propio metabolismo del etanol consume tiamina, agravando una deficiencia que ya podría estar presente por la dieta deficiente.',
  no:{
    0:'La deficiencia de vitamina C se asocia a escorbuto, un cuadro clínico distinto, sin la asociación característica con el alcoholismo y el cuadro neurológico descrito.',
    2:'La deficiencia de vitamina D se asocia principalmente a problemas óseos (raquitismo, osteomalacia), no al cuadro neurológico agudo descrito en este caso.',
    3:'La deficiencia de vitamina K se asocia a problemas de coagulación, sin relación con el cuadro neurológico descrito ni con esta asociación específica al alcoholismo.'
  },
  trampa:'No reconocer el cuadro clínico característico del síndrome de Wernicke-Korsakoff ni su fuerte asociación con el alcoholismo crónico y la deficiencia de tiamina.',
  obj:'Reconocer el síndrome de Wernicke-Korsakoff como manifestación de deficiencia de tiamina en el alcoholismo crónico.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['tiamina','Wernicke-Korsakoff','alcoholismo crónico','deficiencia vitamínica']
},
{
  id:'U8-B-Q34', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Niacina', sub:'Pelagra',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la tríada clásica de manifestaciones de la deficiencia severa de niacina (pelagra)?',
  ops:['Ptosis, miosis, anhidrosis', 'Dermatitis, diarrea, demencia', 'Ictericia, ascitis, edema', 'Fiebre, tos, disnea'],
  ok:1,
  clave:'La tríada clásica de la pelagra es dermatitis, diarrea y demencia.',
  exp:'La niacina (B3) forma parte de NAD+ y NADP+, cofactores centrales del metabolismo energético y de la biosíntesis reductora. Su deficiencia severa produce pelagra, con la clásica tríada de dermatitis (en zonas expuestas al sol), diarrea y demencia -un cuadro históricamente asociado a dietas basadas casi exclusivamente en maíz sin procesar adecuadamente, deficientes en niacina y en triptófano (el aminoácido precursor que puede convertirse parcialmente en niacina).',
  no:{
    0:'Ptosis, miosis y anhidrosis corresponden al síndrome de Horner (por lesión de la cadena simpática cervical), no a la pelagra.',
    2:'Ictericia, ascitis y edema son manifestaciones más características de enfermedad hepática avanzada, no de la deficiencia de niacina.',
    3:'Fiebre, tos y disnea son manifestaciones de un cuadro respiratorio, sin relación con la deficiencia de niacina.'
  },
  trampa:'Confundir la tríada de la pelagra con la de otros síndromes clínicos de nombre o presentación similar.',
  obj:'Identificar la tríada clásica de manifestaciones de la pelagra por deficiencia de niacina.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['niacina','pelagra','dermatitis','NAD+']
},
{
  id:'U8-B-Q35', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Piridoxina', sub:'Coenzima de transaminación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De qué tipo de reacción es coenzima esencial la piridoxina (B6)?',
  ops:['Descarboxilación oxidativa del piruvato', 'Reacciones de transaminación', 'Síntesis de ADN', 'Regeneración de glutatión reducido'],
  ok:1,
  clave:'La piridoxina (B6) es coenzima esencial de las reacciones de transaminación.',
  exp:'La piridoxina (B6) es coenzima esencial de las reacciones de transaminación, el mismo tipo de reacción catalizada por ALT y AST, ya visto en el metabolismo de aminoácidos. Su deficiencia puede producir anemia sideroblástica (por alteración de la síntesis del grupo hemo, que también depende de esta coenzima en un paso específico) y neuropatía periférica.',
  no:{
    0:'La descarboxilación oxidativa del piruvato depende principalmente de tiamina (B1), no de piridoxina.',
    2:'La síntesis de ADN depende principalmente de folato y B12, no directamente de piridoxina.',
    3:'La regeneración de glutatión reducido depende del NADPH, producto de la vía de las pentosas fosfato, no directamente de piridoxina.'
  },
  trampa:'Confundir las funciones específicas de distintas vitaminas del complejo B entre sí, atribuyendo a la piridoxina una función que corresponde a otra vitamina.',
  obj:'Identificar la transaminación como la reacción de la que la piridoxina es coenzima esencial.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['piridoxina','transaminación','anemia sideroblástica','coenzima']
},
{
  id:'U8-B-Q36', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Bilirrubina', sub:'Indirecta y kernícterus',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un recién nacido con ictericia marcada y bilirrubina indirecta muy elevada no recibe tratamiento oportuno, y desarrolla posteriormente signos de daño neurológico.',
  enunciado:'¿Qué propiedad química de la bilirrubina indirecta explica el riesgo de daño neurológico (kernícterus) en este caso?',
  ops:[
    'La bilirrubina indirecta es hidrosoluble y se excreta fácilmente por la orina',
    'La bilirrubina indirecta es liposoluble, viaja unida a albúmina, y puede atravesar la barrera hematoencefálica cuando está muy elevada, depositándose en los núcleos basales',
    'La bilirrubina indirecta nunca puede alcanzar niveles peligrosos en el recién nacido',
    'La bilirrubina directa es la responsable del kernícterus, no la indirecta'
  ],
  ok:1,
  clave:'La bilirrubina indirecta es liposoluble y puede cruzar la barrera hematoencefálica cuando está muy elevada, causando kernícterus.',
  exp:'La bilirrubina indirecta (no conjugada) es liposoluble y prácticamente insoluble en agua, por lo que viaja unida a la albúmina en la sangre. Precisamente por ser liposoluble, puede atravesar la barrera hematoencefálica cuando está muy elevada, depositándose en los núcleos basales del cerebro y causando kernícterus -daño neurológico grave, potencialmente irreversible, que es la razón por la que la ictericia neonatal con bilirrubina indirecta muy elevada requiere tratamiento oportuno (fototerapia o, en casos graves, exanguinotransfusión).',
  no:{
    0:'Es al revés: la bilirrubina indirecta es LIPOSOLUBLE, no hidrosoluble; la que es hidrosoluble y se excreta más fácilmente es la bilirrubina directa (conjugada).',
    2:'La bilirrubina indirecta sí puede alcanzar niveles peligrosos en el recién nacido, especialmente cuando hay hemólisis aumentada o inmadurez de la conjugación hepática.',
    3:'Es la bilirrubina INDIRECTA (liposoluble) la responsable del riesgo de kernícterus, no la directa, que es hidrosoluble y no cruza la barrera hematoencefálica con la misma facilidad.'
  },
  trampa:'Confundir las propiedades de solubilidad de la bilirrubina indirecta y la directa, invirtiendo cuál de las dos representa el riesgo neurológico.',
  obj:'Explicar por qué la bilirrubina indirecta, no la directa, representa el riesgo de kernícterus en el recién nacido.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['bilirrubina indirecta','kernícterus','ictericia neonatal','barrera hematoencefálica']
},
{
  id:'U8-B-Q37', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Ictericia', sub:'Perfil de bilirrubinas',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con ictericia tiene predominio de bilirrubina DIRECTA en sus estudios de laboratorio, junto con heces pálidas (acólicas) y orina oscura.',
  enunciado:'¿Qué mecanismo general de ictericia sugiere este patrón de bilirrubinas?',
  ops:[
    'Un problema prehepático, como hemólisis excesiva',
    'Un problema posthepático (obstrucción del flujo biliar) o hepatocelular con falla de excreción, porque el hígado ya conjugó la bilirrubina pero no logra excretarla eficientemente hacia el intestino',
    'Una falla exclusiva de la conjugación hepática, sin ningún componente obstructivo',
    'El perfil de bilirrubinas no aporta ninguna información útil para clasificar una ictericia'
  ],
  ok:1,
  clave:'El predominio de bilirrubina directa sugiere un problema posthepático (obstrucción) o de excreción hepatocelular.',
  exp:'El predominio de bilirrubina DIRECTA sugiere un problema POSTHEPÁTICO (obstrucción del flujo biliar, como un cálculo en el colédoco) o hepatocelular con falla de excreción, porque el hígado ya conjugó la bilirrubina (convirtiéndola en directa) pero no logra excretarla eficientemente hacia el intestino. Las heces pálidas (acólicas) reflejan la ausencia de bilirrubina llegando al intestino (y por tanto de estercobilina, que da color a las heces), y la orina oscura refleja el exceso de bilirrubina directa (hidrosoluble) siendo excretada por el riñón -un patrón clínico coherente con obstrucción del flujo biliar.',
  no:{
    0:'Un problema prehepático (hemólisis) produciría predominio de bilirrubina INDIRECTA, no directa, porque el hígado aún no ha tenido oportunidad de conjugarla.',
    2:'Una falla exclusiva de conjugación produciría predominio de bilirrubina INDIRECTA (como en el síndrome de Gilbert), no directa; el predominio directo sugiere que la conjugación sí ocurrió, pero la excreción falló.',
    3:'El perfil de bilirrubinas (predominio indirecto o directo) sí aporta información valiosa para orientar el mecanismo y localización del problema causante de la ictericia.'
  },
  trampa:'Invertir el significado del predominio de bilirrubina directa frente al de indirecta al clasificar el mecanismo de una ictericia.',
  obj:'Interpretar el predominio de bilirrubina directa como sugestivo de un problema posthepático u obstructivo.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['perfil de bilirrubinas','ictericia obstructiva','bilirrubina directa','heces acólicas']
},
{
  id:'U8-B-Q38', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Síndrome de Gilbert', sub:'Condición benigna',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza al síndrome de Gilbert, y por qué es importante reconocerlo como una condición benigna?',
  ops:[
    'Es una obstrucción biliar grave que requiere cirugía urgente',
    'Es una actividad reducida (no ausente) de la UDP-glucuroniltransferasa, produciendo elevaciones leves e intermitentes de bilirrubina indirecta, sin consecuencias clínicas significativas más allá de ictericia leve ocasional',
    'Es una deficiencia completa de la conjugación hepática, incompatible con la vida',
    'Siempre requiere trasplante hepático'
  ],
  ok:1,
  clave:'El síndrome de Gilbert es una reducción leve de la conjugación hepática, benigna, sin consecuencias clínicas significativas.',
  exp:'El síndrome de Gilbert, una condición benigna y relativamente frecuente, se debe a una actividad REDUCIDA (no ausente) de la UDP-glucuroniltransferasa, la enzima que conjuga la bilirrubina en el hígado. Produce elevaciones leves e intermitentes de bilirrubina indirecta, típicamente exacerbadas por ayuno o estrés, sin ninguna consecuencia clínica significativa más allá de la ictericia leve ocasional. Es importante reconocerlo como benigno para no sobreinvestigar innecesariamente a estos pacientes con estudios invasivos o costosos.',
  no:{
    0:'El síndrome de Gilbert no es una obstrucción biliar ni requiere cirugía; es un problema leve de conjugación hepática, completamente benigno.',
    2:'No es una deficiencia completa; es una actividad reducida pero no ausente, lo que explica por qué las elevaciones de bilirrubina son leves e intermitentes, no severas.',
    3:'El síndrome de Gilbert nunca requiere trasplante hepático; es una condición benigna que no compromete la función hepática de forma significativa.'
  },
  trampa:'Confundir el síndrome de Gilbert (benigno, actividad reducida) con condiciones más graves de falla completa de conjugación o de obstrucción biliar.',
  obj:'Reconocer el síndrome de Gilbert como una condición benigna de actividad reducida de la conjugación hepática.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['síndrome de Gilbert','UDP-glucuroniltransferasa','bilirrubina indirecta','condición benigna']
},
{
  id:'U8-B-Q39', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Lipoproteínas', sub:'Densidad y contenido de triglicéridos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se relaciona la densidad de una lipoproteína con su contenido de triglicéridos?',
  ops:[
    'Son directamente proporcionales: más triglicéridos, mayor densidad',
    'Son inversamente proporcionales: a mayor contenido de triglicéridos, MENOR densidad (los quilomicrones, con más grasa, son los menos densos; la HDL, con más proteína, es la más densa)',
    'No existe ninguna relación entre densidad y contenido de triglicéridos',
    'Todas las lipoproteínas tienen exactamente la misma densidad'
  ],
  ok:1,
  clave:'La densidad es inversamente proporcional al contenido de triglicéridos: quilomicrones (más grasa) son los menos densos; HDL (más proteína) es la más densa.',
  exp:'La densidad de una lipoproteína es inversamente proporcional a su contenido de triglicéridos respecto a proteína: los quilomicrones (la menos densa, con más triglicéridos, de origen intestinal) hasta la HDL (la más densa, con más proteína, de origen hepático e intestinal), pasando por VLDL y LDL en un gradiente intermedio. Esta relación inversa es la base del propio nombre y clasificación de las distintas lipoproteínas según su densidad.',
  no:{
    0:'Es al revés: a MÁS triglicéridos corresponde MENOR densidad, no mayor, como ocurre con los quilomicrones.',
    2:'Sí existe una relación clara e inversa entre ambas variables, que es precisamente la base de la clasificación de las lipoproteínas por densidad.',
    3:'Las distintas lipoproteínas (quilomicrones, VLDL, LDL, HDL) tienen densidades claramente distintas entre sí, reflejando su composición relativa de lípidos y proteína.'
  },
  trampa:'Invertir la relación entre densidad y contenido de triglicéridos, asumiendo que son directamente proporcionales cuando en realidad son inversamente proporcionales.',
  obj:'Explicar la relación inversa entre la densidad de una lipoproteína y su contenido de triglicéridos.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['lipoproteínas','densidad','quilomicrones','HDL']
},
{
  id:'U8-B-Q40', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Quilomicrones', sub:'Vía linfática',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica distingue a los quilomicrones de las demás lipoproteínas en cuanto a su vía de entrada a la circulación?',
  ops:[
    'Entran directamente a la sangre desde el enterocito, sin pasar por ningún otro sistema',
    'Viajan primero por el sistema linfático (a diferencia de la mayoría de los nutrientes absorbidos) y entran a la circulación sanguínea a través del conducto torácico',
    'Se forman directamente en el hígado, igual que la VLDL',
    'No tienen ninguna vía de transporte específica'
  ],
  ok:1,
  clave:'Los quilomicrones viajan primero por el sistema linfático, entrando a la sangre por el conducto torácico -único entre las lipoproteínas.',
  exp:'Los quilomicrones se forman en el enterocito a partir de la grasa absorbida de la dieta, y viajan primero por el sistema linfático (no directamente por la sangre, a diferencia de la mayoría de los nutrientes absorbidos), entrando a la circulación sanguínea a través del conducto torácico. Esta es una característica distintiva de los quilomicrones, reflejo directo de su origen en la absorción intestinal de grasa dietética, a diferencia de otras lipoproteínas como la VLDL, de origen hepático, que entran directamente a la sangre.',
  no:{
    0:'Los quilomicrones NO entran directamente a la sangre desde el enterocito; su vía inicial es específicamente el sistema linfático.',
    2:'Los quilomicrones se forman en el enterocito intestinal, no en el hígado; es la VLDL la que se forma en el hígado.',
    3:'Los quilomicrones sí tienen una vía de transporte específica y bien caracterizada, distinta de las demás lipoproteínas.'
  },
  trampa:'No reconocer la vía linfática inicial como una característica distintiva y específica de los quilomicrones frente a las demás lipoproteínas.',
  obj:'Describir la vía linfática de entrada de los quilomicrones a la circulación.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['quilomicrones','sistema linfático','conducto torácico','grasa dietética']
},
{
  id:'U8-B-Q41', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Lipoproteína lipasa', sub:'Apolipoproteína C-II',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué papel cumple la apolipoproteína C-II en el metabolismo de los quilomicrones?',
  ops:[
    'Activa a la enzima lipoproteína lipasa en los capilares periféricos, permitiendo la hidrólisis de los triglicéridos del quilomicrón',
    'Inhibe por completo la degradación de los quilomicrones',
    'No tiene ninguna función real en el metabolismo lipídico',
    'Es la responsable de transportar el quilomicrón por el sistema linfático'
  ],
  ok:0,
  clave:'La apolipoproteína C-II activa a la lipoproteína lipasa, permitiendo que se hidrolicen los triglicéridos del quilomicrón en los capilares periféricos.',
  exp:'En los capilares de tejidos periféricos (especialmente músculo y tejido adiposo), la enzima lipoproteína lipasa, activada por la apolipoproteína C-II presente en la superficie del quilomicrón, hidroliza los triglicéridos que este transporta, liberando ácidos grasos para ser captados y usados o almacenados por esos tejidos. Sin esta activación específica por la apolipoproteína C-II, la lipoproteína lipasa no podría actuar eficientemente sobre los triglicéridos del quilomicrón circulante.',
  no:{
    1:'La apolipoproteína C-II ACTIVA (no inhibe) la degradación de los triglicéridos del quilomicrón, al activar a la lipoproteína lipasa.',
    2:'Sí tiene una función real y específica: activar a la lipoproteína lipasa para permitir la hidrólisis de los triglicéridos del quilomicrón.',
    3:'El transporte por el sistema linfático es una característica estructural/anatómica del quilomicrón como partícula, no una función específica de la apolipoproteína C-II.'
  },
  trampa:'Confundir la función específica de activación enzimática de la apolipoproteína C-II con otras funciones no relacionadas del quilomicrón.',
  obj:'Explicar el papel de la apolipoproteína C-II en la activación de la lipoproteína lipasa.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['apolipoproteína C-II','lipoproteína lipasa','quilomicrones','hidrólisis de triglicéridos']
},
{
  id:'U8-B-Q42', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'HDL', sub:'Transporte reverso de colesterol',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se considera a la HDL como el colesterol "bueno"?',
  ops:[
    'Porque transporta colesterol desde el hígado hacia los tejidos periféricos',
    'Porque recoge el colesterol excedente de los tejidos periféricos y lo transporta de vuelta al hígado (transporte reverso), donde puede eliminarse por la bilis',
    'Porque la HDL nunca contiene colesterol',
    'Porque la HDL y la LDL cumplen exactamente la misma función'
  ],
  ok:1,
  clave:'La HDL recoge colesterol de los tejidos y lo lleva de vuelta al hígado (transporte reverso), lo que se asocia a menor riesgo cardiovascular.',
  exp:'La HDL hace el recorrido inverso al de la LDL: recoge el colesterol excedente de los tejidos periféricos y lo transporta de vuelta al hígado (el llamado transporte reverso de colesterol), donde puede eliminarse por la bilis. Por eso se le llama coloquialmente colesterol "bueno", y niveles más altos de HDL se asocian a menor riesgo cardiovascular -la dirección de este transporte (retirando colesterol de los tejidos, en vez de llevándolo hacia ellos) es lo que la hace protectora.',
  no:{
    0:'Esa es la función de la LDL (transportar colesterol del hígado hacia los tejidos), no de la HDL, que hace el recorrido inverso.',
    2:'La HDL sí contiene colesterol, tanto libre como esterificado, que transporta desde los tejidos hacia el hígado.',
    3:'La HDL y la LDL cumplen funciones opuestas en cuanto a la dirección del transporte de colesterol, no la misma función.'
  },
  trampa:'Confundir la dirección del transporte de colesterol de la HDL con la de la LDL, que son funcionalmente opuestas.',
  obj:'Explicar el mecanismo de transporte reverso de colesterol de la HDL.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['HDL','transporte reverso de colesterol','colesterol bueno','riesgo cardiovascular']
},
{
  id:'U8-B-Q43', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'LDL', sub:'Receptor de LDL y apolipoproteína B-100',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué apolipoproteína permite que la LDL sea reconocida por su receptor específico en los tejidos periféricos?',
  ops:['Apolipoproteína C-II', 'Apolipoproteína B-100', 'Apolipoproteína A-I', 'Ninguna, la LDL no tiene apolipoproteínas'],
  ok:1,
  clave:'La apolipoproteína B-100 es la que permite el reconocimiento de la LDL por su receptor específico.',
  exp:'La LDL es reconocida por el receptor de LDL en la superficie celular a través de su apolipoproteína B-100, que actúa como la "llave" que permite ese reconocimiento específico. Este mecanismo es el que permite la captación de LDL, tanto por los tejidos periféricos que necesitan colesterol como por el hígado, y es precisamente el mecanismo que las estatinas aprovechan indirectamente al aumentar la expresión de estos receptores hepáticos.',
  no:{
    0:'La apolipoproteína C-II es la que activa a la lipoproteína lipasa en los quilomicrones y la VLDL, no la que permite el reconocimiento de la LDL por su receptor.',
    2:'La apolipoproteína A-I está asociada principalmente a la HDL, no a la LDL.',
    3:'La LDL sí tiene una apolipoproteína específica (B-100) que es esencial para su reconocimiento por el receptor de LDL.'
  },
  trampa:'Confundir las distintas apolipoproteínas asociadas a cada tipo de lipoproteína, atribuyendo a la LDL una apolipoproteína que corresponde a otra partícula.',
  obj:'Identificar la apolipoproteína B-100 como la responsable del reconocimiento de la LDL por su receptor.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['apolipoproteína B-100','receptor de LDL','LDL','reconocimiento celular']
},
{
  id:'U8-B-Q44', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Metabolismo del etanol', sub:'Vía de oxidación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los dos pasos oxidativos sucesivos del metabolismo hepático del etanol, y qué producen?',
  ops:[
    'Alcohol deshidrogenasa (etanol → acetaldehído) y aldehído deshidrogenasa (acetaldehído → acetato)',
    'Solo un paso: etanol directamente a CO2 y agua',
    'Glucógeno fosforilasa y glucógeno sintasa',
    'El etanol no se metaboliza mediante ninguna vía enzimática'
  ],
  ok:0,
  clave:'Alcohol deshidrogenasa convierte etanol en acetaldehído; aldehído deshidrogenasa convierte acetaldehído en acetato.',
  exp:'El etanol se metaboliza principalmente en el hígado en dos pasos oxidativos sucesivos: la alcohol deshidrogenasa lo convierte en acetaldehído (una molécula tóxica y reactiva), y la aldehído deshidrogenasa convierte al acetaldehído en acetato (mucho menos tóxico), que luego se activa a acetil-CoA y puede metabolizarse en el ciclo de Krebs o usarse para la síntesis de ácidos grasos. Ambas reacciones consumen NAD+ y generan grandes cantidades de NADH.',
  no:{
    1:'El metabolismo del etanol requiere dos pasos enzimáticos sucesivos, no una conversión directa en un solo paso.',
    2:'La glucógeno fosforilasa y la glucógeno sintasa son enzimas del metabolismo del glucógeno, sin relación directa con el metabolismo del etanol.',
    3:'El etanol sí se metaboliza mediante una vía enzimática bien definida, principalmente en el hígado, con dos enzimas clave.'
  },
  trampa:'Confundir las enzimas del metabolismo del etanol con enzimas de otras vías metabólicas no relacionadas.',
  obj:'Describir los dos pasos oxidativos del metabolismo hepático del etanol.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['alcohol deshidrogenasa','aldehído deshidrogenasa','acetaldehído','metabolismo del etanol']
},
{
  id:'U8-B-Q45', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Hipoglucemia por alcohol', sub:'Inhibición de la gluconeogénesis',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una persona con reservas de glucógeno ya agotadas por ayuno prolongado consume alcohol sin comer durante horas, y desarrolla hipoglucemia significativa.',
  enunciado:'¿Qué mecanismo bioquímico explica esta hipoglucemia inducida por alcohol?',
  ops:[
    'El alcohol destruye directamente el páncreas, deteniendo la producción de glucagón',
    'El exceso de NADH generado por el metabolismo del etanol desplaza el equilibrio de reacciones necesarias para la gluconeogénesis (como malato a oxalacetato), inhibiéndola justo cuando el glucógeno ya no puede compensar',
    'El alcohol aumenta directamente la producción de insulina, causando hipoglucemia',
    'No existe ninguna relación entre el consumo de alcohol y la hipoglucemia'
  ],
  ok:1,
  clave:'El exceso de NADH por el metabolismo del etanol bloquea la gluconeogénesis, precisamente cuando el glucógeno ya está agotado.',
  exp:'El exceso masivo de NADH generado por el metabolismo del etanol desplaza el equilibrio de varias reacciones que dependen del cociente NADH/NAD+, entre ellas la conversión de malato a oxalacetato, un intermediario esencial de la gluconeogénesis. Con el equilibrio desplazado hacia la acumulación de malato (en vez de oxalacetato), la gluconeogénesis hepática se inhibe significativamente. En una persona con glucógeno ya agotado, que bebe sin comer durante horas, esta inhibición de la gluconeogénesis puede producir hipoglucemia significativa, precisamente porque la vía de "fabricar glucosa nueva" queda bloqueada justo cuando más se necesita.',
  no:{
    0:'El mecanismo no es una destrucción directa del páncreas; es una interferencia bioquímica específica del metabolismo del etanol con la vía de la gluconeogénesis.',
    2:'El alcohol no aumenta directamente la producción de insulina como mecanismo central de esta hipoglucemia; el mecanismo es la inhibición de la gluconeogénesis por el exceso de NADH.',
    3:'Existe una relación bioquímica bien establecida y directa entre el metabolismo del etanol y la hipoglucemia, mediada por el desequilibrio redox que genera.'
  },
  trampa:'Buscar la explicación en un efecto directo sobre el páncreas o la insulina, en vez del mecanismo bioquímico real: el desplazamiento del balance redox por el exceso de NADH, que bloquea la gluconeogénesis.',
  obj:'Explicar el mecanismo de hipoglucemia inducida por alcohol mediante la inhibición de la gluconeogénesis.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['hipoglucemia por alcohol','NADH','gluconeogénesis','metabolismo del etanol']
},
{
  id:'U8-B-Q46', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Esteatosis hepática alcohólica', sub:'Mecanismo bioquímico',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mecanismo bioquímico explica la acumulación de triglicéridos en el hígado (esteatosis) por consumo crónico de alcohol?',
  ops:[
    'El exceso de NADH y acetil-CoA generado por el metabolismo del etanol favorece la síntesis de ácidos grasos y su acumulación como triglicéridos, en lugar de oxidarse normalmente',
    'El alcohol destruye directamente las membranas de los hepatocitos, sin relación con el metabolismo lipídico',
    'La esteatosis hepática alcohólica es siempre irreversible desde su primera aparición',
    'El consumo de alcohol reduce la síntesis de triglicéridos en el hígado'
  ],
  ok:0,
  clave:'El exceso de NADH y acetil-CoA por el metabolismo del etanol favorece la síntesis y acumulación de triglicéridos en el hepatocito.',
  exp:'El exceso de acetil-CoA generado por la oxidación del etanol (y la menor disponibilidad de oxalacetato, desviado por el desequilibrio redox ya explicado) favorece la síntesis de ácidos grasos y su acumulación como triglicéridos dentro del propio hepatocito, en lugar de oxidarse normalmente por beta-oxidación (que también está relativamente inhibida por el exceso de NADH). Este es el mecanismo bioquímico central de la esteatosis hepática alcohólica (hígado graso), la manifestación más temprana y común del daño hepático por consumo crónico de alcohol, potencialmente reversible con la abstinencia si se detecta a tiempo.',
  no:{
    1:'El mecanismo de la esteatosis no es una destrucción directa de membranas; es una alteración bioquímica específica del balance entre síntesis y oxidación de ácidos grasos en el hepatocito.',
    2:'La esteatosis hepática alcohólica temprana es potencialmente REVERSIBLE con la abstinencia, si se detecta antes de progresar a hepatitis alcohólica o cirrosis.',
    3:'El consumo de alcohol AUMENTA (no reduce) la síntesis y acumulación de triglicéridos en el hígado, precisamente por el mecanismo bioquímico descrito.'
  },
  trampa:'Buscar la explicación de la esteatosis en un daño estructural directo en vez del mecanismo bioquímico específico (desequilibrio redox que favorece la síntesis sobre la oxidación de ácidos grasos).',
  obj:'Explicar el mecanismo bioquímico de la esteatosis hepática alcohólica.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['esteatosis hepática alcohólica','hígado graso','NADH','acetil-CoA']
},
{
  id:'U8-B-Q47', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Metabolismo del etanol', sub:'Acidosis láctica asociada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el metabolismo del etanol puede contribuir a la acidosis láctica en la intoxicación alcohólica aguda?',
  ops:[
    'El exceso de NADH generado favorece la conversión de piruvato en lactato, en vez de hacia la gluconeogénesis o el ciclo de Krebs',
    'El etanol nunca afecta el metabolismo del piruvato',
    'El etanol reduce directamente la producción de lactato',
    'La acidosis láctica no tiene ninguna relación con el metabolismo del etanol'
  ],
  ok:0,
  clave:'El exceso de NADH desplaza el equilibrio hacia la conversión de piruvato en lactato, contribuyendo a la acidosis láctica.',
  exp:'El mismo desplazamiento del balance redox causado por el exceso de NADH del metabolismo del etanol favorece la conversión de piruvato en lactato (en vez de hacia la gluconeogénesis o el ciclo de Krebs), contribuyendo a la acidosis láctica que puede acompañar a la intoxicación alcohólica aguda. Es otra consecuencia más del mismo mecanismo central -el desequilibrio NADH/NAD+- que también explica la hipoglucemia por alcohol y la esteatosis hepática alcohólica.',
  no:{
    1:'El etanol sí afecta significativamente el metabolismo del piruvato, precisamente a través del desequilibrio redox que genera su propio metabolismo.',
    2:'El etanol AUMENTA (no reduce) la producción de lactato, al desplazar el equilibrio hacia esa dirección por el exceso de NADH.',
    3:'Existe una relación bioquímica directa y bien establecida entre el metabolismo del etanol y la acidosis láctica, mediada por el exceso de NADH.'
  },
  trampa:'No conectar el mismo mecanismo central del exceso de NADH con esta consecuencia adicional (acidosis láctica), tratándola como un fenómeno aislado sin relación con las demás consecuencias metabólicas del alcohol.',
  obj:'Explicar la contribución del metabolismo del etanol a la acidosis láctica.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['acidosis láctica','metabolismo del etanol','NADH','piruvato']
},
{
  id:'U8-B-Q48', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Vitaminas liposolubles', sub:'Riesgo de toxicidad',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente que toma suplementos de vitamina A en dosis muy altas durante meses desarrolla síntomas de toxicidad (hipervitaminosis A).',
  enunciado:'¿Qué característica de las vitaminas liposolubles explica que este tipo de toxicidad sea posible, a diferencia de lo que ocurriría con una vitamina hidrosoluble?',
  ops:[
    'Las vitaminas liposolubles se almacenan en el tejido adiposo y el hígado en cantidades considerables, permitiendo que se acumulen hasta niveles tóxicos con suplementación excesiva y sostenida',
    'Las vitaminas hidrosolubles tienen el mismo riesgo de toxicidad que las liposolubles',
    'La vitamina A no es una vitamina liposoluble',
    'Ninguna vitamina puede causar toxicidad por exceso'
  ],
  ok:0,
  clave:'Las vitaminas liposolubles se almacenan en cantidades considerables, permitiendo acumulación tóxica con suplementación excesiva.',
  exp:'Las vitaminas liposolubles (A, D, E, K) se almacenan en el tejido adiposo y el hígado en cantidades considerables, a diferencia de las hidrosolubles, que se eliminan fácilmente por la orina sin acumularse significativamente. Esta capacidad de almacenamiento es la que permite que la suplementación excesiva y sostenida de una vitamina liposoluble, como la vitamina A en este caso, alcance niveles tóxicos en el organismo (hipervitaminosis), un riesgo mucho menor con las vitaminas hidrosolubles.',
  no:{
    1:'Las vitaminas hidrosolubles tienen un riesgo de toxicidad mucho MENOR que las liposolubles, precisamente porque no se almacenan significativamente.',
    2:'La vitamina A es, de hecho, una de las cuatro vitaminas liposolubles clásicas (A, D, E, K).',
    3:'Las vitaminas liposolubles sí pueden causar toxicidad real por exceso, precisamente por su capacidad de almacenamiento significativo.'
  },
  trampa:'No conectar la capacidad de almacenamiento de las vitaminas liposolubles con su riesgo específico de toxicidad por exceso, a diferencia de las hidrosolubles.',
  obj:'Explicar por qué las vitaminas liposolubles tienen mayor riesgo de toxicidad por exceso que las hidrosolubles.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['vitamina A','hipervitaminosis','vitaminas liposolubles','almacenamiento']
},
{
  id:'U8-B-Q49', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Coenzimas', sub:'NAD+/NADP+ vs. NADH/NADPH',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencian funcionalmente el NADH y el NADPH, dos coenzimas reducidas estructuralmente muy similares?',
  ops:[
    'Son exactamente lo mismo, sin ninguna diferencia funcional',
    'El NADH se usa principalmente para generar ATP (vía la cadena respiratoria); el NADPH se usa principalmente para reacciones de biosíntesis reductora y defensa antioxidante',
    'El NADPH se usa exclusivamente para generar ATP, igual que el NADH',
    'El NADH se usa exclusivamente para la síntesis de ácidos grasos'
  ],
  ok:1,
  clave:'NADH se usa para generar ATP vía cadena respiratoria; NADPH se usa para biosíntesis reductora y defensa antioxidante.',
  exp:'Aunque el NADH y el NADPH son estructuralmente muy similares (el NADPH tiene un grupo fosfato adicional), tienen roles funcionales distintos en la célula: el NADH, generado principalmente por la glucólisis y el ciclo de Krebs, se usa principalmente para generar ATP a través de la cadena respiratoria mitocondrial. El NADPH, generado principalmente por la vía de las pentosas fosfato, se usa principalmente como poder reductor para reacciones de biosíntesis (como la síntesis de ácidos grasos y colesterol) y para la defensa antioxidante (regenerando glutatión reducido). Esta separación funcional, pese a la similitud estructural, evita que ambos procesos "compitan" por el mismo pool de cofactor reducido.',
  no:{
    0:'Aunque estructuralmente similares, tienen roles funcionales claramente distintos en la célula, no son intercambiables en la práctica.',
    2:'El NADPH no se usa principalmente para generar ATP; su función principal es la biosíntesis reductora y la defensa antioxidante, un rol distinto al del NADH.',
    3:'El NADH no se usa exclusivamente para la síntesis de ácidos grasos; esa es más bien una función asociada al NADPH, no al NADH.'
  },
  trampa:'Tratar al NADH y al NADPH como intercambiables solo por su similitud estructural, sin reconocer la separación funcional deliberada entre ambos.',
  obj:'Distinguir las funciones del NADH y el NADPH en el metabolismo celular.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['NADH','NADPH','cadena respiratoria','biosíntesis reductora']
},
{
  id:'U8-B-Q50', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Metabolismo del hemo', sub:'Origen de la bilirrubina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De qué proceso fisiológico normal deriva la producción diaria de bilirrubina?',
  ops:[
    'De la síntesis de nuevas proteínas plasmáticas',
    'De la degradación de eritrocitos envejecidos (principalmente en el bazo), liberando el grupo hemo de la hemoglobina, que se convierte en biliverdina y luego en bilirrubina',
    'De la digestión de las grasas de la dieta',
    'La bilirrubina no tiene ningún origen fisiológico normal, solo aparece en enfermedad'
  ],
  ok:1,
  clave:'La bilirrubina se origina de la degradación fisiológica normal de eritrocitos envejecidos y su hemoglobina.',
  exp:'Cuando los eritrocitos envejecidos se degradan de forma fisiológica normal (principalmente en el bazo, al final de su vida útil de aproximadamente 120 días), el grupo hemo de la hemoglobina se libera y se convierte, mediante la enzima hemo oxigenasa, en biliverdina, y luego en bilirrubina no conjugada. Este es un proceso fisiológico constante y normal, no exclusivo de estados de enfermedad -la producción de bilirrubina ocurre todos los días como parte del recambio normal de eritrocitos.',
  no:{
    0:'La síntesis de proteínas plasmáticas no genera bilirrubina; ese proceso no está relacionado con el origen de esta molécula.',
    2:'La digestión de grasas no genera bilirrubina; aunque la bilis (que contiene bilirrubina ya procesada) participa en la digestión de grasas, el origen de la bilirrubina es la degradación del hemo, no la digestión lipídica en sí.',
    3:'La bilirrubina se produce de forma fisiológica normal y constante, como parte del recambio habitual de eritrocitos, no solo en estados de enfermedad.'
  },
  trampa:'No reconocer que la producción de bilirrubina es un proceso fisiológico normal y constante, en vez de un fenómeno exclusivamente patológico.',
  obj:'Describir el origen fisiológico normal de la bilirrubina a partir de la degradación de eritrocitos envejecidos.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['bilirrubina','degradación de eritrocitos','hemo oxigenasa','biliverdina']
}

]);
