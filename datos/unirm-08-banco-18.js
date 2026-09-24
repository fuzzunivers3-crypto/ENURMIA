/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE ANATOMIA II (2/2)
   Completa Anatomia II a 50 preguntas junto con banco-17.js.
   Cubre retroperitoneo (cierre), pelvis/perine (cierre), cabeza
   y cuello, pares craneales, sistema nervioso autonomo, mama,
   genitales femeninos y masculinos, diafragma, grandes vasos
   retroperitoneales y drenaje linfatico visceral (temas 8-18).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ANATOMIA II ===================== */
{
  id:'U8-A-Q29', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Glándula suprarrenal', sub:'Drenaje venoso asimétrico',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'En un cateterismo selectivo de venas suprarrenales para localizar el origen de un hiperaldosteronismo primario, ¿por qué canalizar la vena suprarrenal derecha suele ser técnicamente más difícil que la izquierda?',
  ops:[
    'Porque la vena suprarrenal derecha no existe',
    'Porque la vena suprarrenal derecha drena directamente y con un trayecto corto a la vena cava inferior, a diferencia de la izquierda, que drena primero a la vena renal izquierda con un trayecto más largo y accesible',
    'Porque la glándula suprarrenal derecha está fuera del abdomen',
    'Porque solo la glándula suprarrenal izquierda tiene irrigación arterial'
  ],
  ok:1,
  clave:'La vena suprarrenal derecha drena directo y corto a la cava, un trayecto más difícil de canalizar selectivamente que el de la izquierda.',
  exp:'El drenaje venoso de las glándulas suprarrenales es asimétrico: la vena suprarrenal derecha drena directamente y de forma corta a la vena cava inferior, mientras que la vena suprarrenal izquierda drena primero a la vena renal izquierda, un trayecto más largo. Esta asimetría hace que canalizar selectivamente la vena suprarrenal derecha sea técnicamente más difícil en un cateterismo selectivo, precisamente por su trayecto corto y directo a la cava, que ofrece menos margen para la canalización selectiva comparado con el trayecto más largo del lado izquierdo.',
  no:{
    0:'La vena suprarrenal derecha sí existe; es parte normal del drenaje venoso de la glándula.',
    2:'Ambas glándulas suprarrenales se ubican en el abdomen, en el polo superior de cada riñón; ninguna está fuera de la cavidad abdominal.',
    3:'Ambas glándulas suprarrenales tienen irrigación arterial (de la aorta, la arteria renal y la arteria frénica inferior); la asimetría relevante es venosa, no arterial.'
  },
  trampa:'No reconocer la asimetría venosa (no arterial) entre ambas glándulas suprarrenales como la causa de la dificultad técnica descrita.',
  obj:'Explicar la asimetría del drenaje venoso suprarrenal y su relevancia en procedimientos diagnósticos.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['glándula suprarrenal','vena suprarrenal derecha','cateterismo selectivo','hiperaldosteronismo primario']
},
{
  id:'U8-A-Q30', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Próstata', sub:'Tacto rectal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué relación anatómica hace posible palpar la próstata mediante un tacto rectal?',
  ops:[
    'La próstata se encuentra dentro del recto',
    'El recto está inmediatamente por detrás de la próstata, separados solo por una fascia delgada, lo que permite palpar la cara posterior de la próstata a través de la pared rectal anterior',
    'No existe relación anatómica; el tacto rectal es solo una tradición sin fundamento anatómico',
    'La próstata solo puede evaluarse por vía abdominal externa'
  ],
  ok:1,
  clave:'El recto está justo detrás de la próstata, separados por una fascia delgada, lo que permite palparla desde la pared rectal anterior.',
  exp:'La próstata rodea la uretra prostática, con el recto situado inmediatamente por detrás de ella, separados solo por una delgada fascia (fascia rectovesical o de Denonvilliers). Esta estrecha relación anatómica es la base del tacto rectal: al introducir el dedo en el recto, la pared anterior del recto permite palpar directamente la cara posterior de la próstata, evaluando su tamaño, consistencia y la presencia de nódulos sugestivos de patología.',
  no:{
    0:'La próstata no se encuentra dentro del recto; son órganos distintos, adyacentes entre sí, separados por una fascia delgada.',
    2:'Sí existe un fundamento anatómico claro y bien establecido para el tacto rectal, basado en la vecindad directa entre el recto y la próstata.',
    3:'La palpación externa abdominal no permite evaluar la próstata; su exploración clínica directa depende precisamente de la vía rectal, por la vecindad anatómica descrita.'
  },
  trampa:'No identificar la base anatómica precisa (vecindad directa, separados por fascia delgada) que hace posible el tacto rectal como método de exploración prostática.',
  obj:'Explicar la base anatómica del tacto rectal como método de exploración de la próstata.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['próstata','tacto rectal','fascia de Denonvilliers','recto']
},
{
  id:'U8-A-Q31', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Periné', sub:'Triángulos urogenital y anal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura delimita convencionalmente la división del periné en triángulo urogenital (anterior) y triángulo anal (posterior)?',
  ops:[
    'El músculo elevador del ano', 'Una línea imaginaria entre ambas tuberosidades isquiáticas', 'La sínfisis del pubis', 'El cóccix'],
  ok:1,
  clave:'Una línea imaginaria entre ambas tuberosidades isquiáticas divide al periné en triángulo urogenital y triángulo anal.',
  exp:'El periné, delimitado en su conjunto por el rombo óseo formado por la sínfisis del pubis, ambas tuberosidades isquiáticas y el cóccix, se divide convencionalmente en dos triángulos mediante una línea imaginaria trazada entre las dos tuberosidades isquiáticas: el triángulo urogenital (anterior a esa línea, que contiene los genitales externos) y el triángulo anal (posterior a esa línea, que contiene el conducto anal y el esfínter anal externo).',
  no:{
    0:'El elevador del ano es el componente muscular principal del suelo pélvico (una estructura más profunda), no el límite que divide al periné en sus dos triángulos superficiales.',
    2:'La sínfisis del pubis es uno de los vértices del rombo perineal completo, no la línea divisoria entre los dos triángulos.',
    3:'El cóccix es otro de los vértices del rombo perineal completo, tampoco la línea divisoria entre ambos triángulos.'
  },
  trampa:'Confundir los vértices del rombo perineal completo (pubis, tuberosidades isquiáticas, cóccix) con la línea específica que divide al periné en sus dos triángulos.',
  obj:'Identificar la línea que divide al periné en triángulo urogenital y triángulo anal.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['periné','triángulo urogenital','triángulo anal','tuberosidades isquiáticas']
},
{
  id:'U8-A-Q32', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Cuello', sub:'Triángulos cervicales',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura muscular divide a cada mitad del cuello en un triángulo anterior y uno posterior?',
  ops:['El músculo trapecio', 'El músculo esternocleidomastoideo', 'El músculo digástrico', 'El músculo platisma'],
  ok:1,
  clave:'El esternocleidomastoideo es el punto de referencia que divide al cuello en triángulo anterior y posterior.',
  exp:'El músculo esternocleidomastoideo es el punto de referencia central que divide a cada mitad del cuello en un triángulo anterior (medial al músculo, entre él y la línea media, que contiene estructuras viscerales y el paquete vascular carotídeo-yugular) y un triángulo posterior (posterior al músculo, entre él y el borde anterior del trapecio, que contiene al nervio accesorio espinal, ganglios linfáticos y el plexo braquial proximal).',
  no:{
    0:'El trapecio forma el límite posterior del triángulo posterior del cuello, pero no es el músculo que divide al cuello en sus dos triángulos principales; ese papel corresponde al esternocleidomastoideo.',
    2:'El digástrico es un músculo relevante para subdivisiones más pequeñas del triángulo anterior, no el divisor principal del cuello en sus dos grandes triángulos.',
    3:'El platisma es un músculo superficial de la región cervical, sin el papel de límite estructural entre los triángulos anterior y posterior.'
  },
  trampa:'Confundir el papel del esternocleidomastoideo (divisor principal) con el de otros músculos cervicales que participan en subdivisiones menores o límites secundarios.',
  obj:'Identificar el músculo esternocleidomastoideo como divisor de los triángulos cervicales.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['esternocleidomastoideo','triángulo anterior del cuello','triángulo posterior del cuello','anatomía cervical']
},
{
  id:'U8-A-Q33', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Tiroides', sub:'Nervio laríngeo recurrente en cirugía',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una paciente desarrolla disfonía persistente tras una tiroidectomía total.',
  enunciado:'¿Qué complicación quirúrgica explica este hallazgo, dada la vecindad anatómica de la tiroides con una estructura nerviosa específica?',
  ops:[
    'Lesión del nervio laríngeo recurrente, por su trayecto muy cercano a la glándula tiroides',
    'Lesión del nervio hipogloso, sin relación anatómica con la tiroides',
    'Es un hallazgo esperado en toda tiroidectomía, sin relación con ninguna estructura nerviosa',
    'Lesión del nervio facial, por su cercanía a la región cervical'
  ],
  ok:0,
  clave:'Los nervios laríngeos recurrentes pasan muy cerca de la cápsula tiroidea; su lesión durante la tiroidectomía causa parálisis de cuerda vocal y disfonía.',
  exp:'Los nervios laríngeos recurrentes ascienden por el surco entre la tráquea y el esófago hasta entrar a la laringe, con frecuencia pasando muy cerca de la cápsula tiroidea o de la arteria tiroidea inferior. Esta vecindad tan estrecha es la razón por la que la lesión del nervio laríngeo recurrente (con la consecuente parálisis de cuerda vocal y disfonía) es una de las complicaciones más temidas y bien reconocidas de la tiroidectomía, lo que hace que su identificación intraoperatoria cuidadosa sea un paso estándar de seguridad en esta cirugía.',
  no:{
    1:'El nervio hipogloso inerva la musculatura de la lengua, sin relación anatómica relevante con la glándula tiroides ni con la producción de la voz.',
    2:'No es un hallazgo "esperado" o inevitable de toda tiroidectomía; es una complicación reconocida que la técnica quirúrgica busca activamente prevenir mediante la identificación del nervio.',
    3:'El nervio facial inerva los músculos de la expresión facial y está relacionado con la glándula parótida, no con la tiroides ni con la producción de la voz.'
  },
  trampa:'Atribuir la disfonía postquirúrgica a un nervio craneal sin relación anatómica real con la región tiroidea, en vez del nervio laríngeo recurrente específicamente.',
  obj:'Relacionar la disfonía postiroidectomía con la lesión del nervio laríngeo recurrente por su vecindad anatómica con la tiroides.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['tiroidectomía','nervio laríngeo recurrente','disfonía','complicación quirúrgica']
},
{
  id:'U8-A-Q34', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Glándula parótida', sub:'Nervio facial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la cirugía de la glándula parótida (parotidectomía) conlleva un riesgo particular de lesión del nervio facial?',
  ops:[
    'Porque el nervio facial está muy alejado de la glándula parótida',
    'Porque el nervio facial atraviesa y se ramifica DENTRO del tejido de la propia glándula parótida antes de emerger hacia los músculos faciales',
    'Porque la parótida no tiene ninguna relación con nervios craneales',
    'Porque el nervio facial solo pasa cerca de la parótida en algunas personas'
  ],
  ok:1,
  clave:'El nervio facial atraviesa y se ramifica dentro de la propia glándula parótida, no simplemente cerca de ella.',
  exp:'La glándula parótida tiene la particularidad de ser atravesada de lado a lado por el nervio facial (par craneal VII), que se divide dentro de la propia glándula en sus ramas terminales (temporal, cigomática, bucal, mandibular y cervical) antes de emerger hacia los músculos de la expresión facial que inerva. Esta relación tan íntima -un nervio motor importante atravesando literalmente el tejido glandular- es la razón por la que la parotidectomía conlleva un riesgo real de lesionar alguna rama del nervio facial.',
  no:{
    0:'Es justamente lo contrario: el nervio facial está anatómicamente MUY cerca, atravesando el tejido de la glándula, no alejado de ella.',
    2:'La parótida sí tiene una relación anatómica muy directa y constante con el nervio facial, que la atraviesa de forma predecible en su trayecto.',
    3:'Esta relación es constante y predecible en la anatomía humana normal, no una variante anatómica infrecuente presente solo en algunas personas.'
  },
  trampa:'Subestimar la proximidad anatómica entre el nervio facial y la glándula parótida, cuando en realidad el nervio atraviesa literalmente su tejido.',
  obj:'Explicar el riesgo quirúrgico de lesión del nervio facial en la parotidectomía por su trayecto intraglandular.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['glándula parótida','nervio facial','parotidectomía','ramas del nervio facial']
},
{
  id:'U8-A-Q35', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Pares craneales', sub:'Clasificación funcional',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de los siguientes pares craneales es puramente MOTOR, sin componente sensitivo asociado?',
  ops:['Trigémino (V)', 'Facial (VII)', 'Hipogloso (XII)', 'Vago (X)'],
  ok:2,
  clave:'El hipogloso (XII) es un par craneal puramente motor, sin componente sensitivo.',
  exp:'El nervio hipogloso (par XII) es puramente motor, inervando a los músculos de la lengua, sin componente sensitivo asociado -su lesión produce debilidad de la lengua sin pérdida de sensibilidad en ella. El trigémino (V), el facial (VII) y el vago (X) son, en cambio, pares craneales mixtos, con componentes tanto sensitivos como motores: el trigémino tiene la sensibilidad facial y la motricidad de la masticación; el facial tiene la motricidad de la expresión facial y componentes sensitivos/gustativos; el vago tiene componentes motores viscerales y sensitivos amplios.',
  no:{
    0:'El trigémino es un par craneal MIXTO: tiene componente sensitivo (sensibilidad facial) y motor (músculos de la masticación en su rama mandibular).',
    1:'El facial es un par craneal MIXTO: tiene componente motor (expresión facial) y sensitivo/gustativo (sabor en los dos tercios anteriores de la lengua, entre otros).',
    3:'El vago es un par craneal MIXTO, con amplios componentes tanto motores como sensitivos y parasimpáticos.'
  },
  trampa:'Confundir un par craneal mixto con uno puramente motor, sin recordar la clasificación funcional específica de cada uno.',
  obj:'Clasificar correctamente al nervio hipogloso como par craneal puramente motor.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['hipogloso','par craneal motor','clasificación funcional','pares craneales mixtos']
},
{
  id:'U8-A-Q36', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Reflejo corneal', sub:'Trigémino y facial',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Al explorar el reflejo corneal de un paciente (tocando suavemente la córnea con un hisopo), no se observa parpadeo en ningún ojo al estimular la córnea derecha, pero sí se observa parpadeo bilateral al estimular la córnea izquierda.',
  enunciado:'¿Qué componente del arco reflejo corneal está más probablemente afectado del lado derecho?',
  ops:[
    'La vía motora eferente (nervio facial derecho), porque el problema aparece solo al estimular ese lado y no se observa ningún parpadeo, ni siquiera contralateral, al estimular la córnea afectada',
    'No puede determinarse nada con esta información',
    'La vía sensitiva aferente (nervio trigémino derecho), porque el estímulo en la córnea derecha no genera parpadeo en ningún lado, sugiriendo que la señal sensitiva nunca llega al centro del reflejo',
    'El reflejo corneal no depende de ningún par craneal específico'
  ],
  ok:2,
  clave:'Si estimular la córnea derecha no produce parpadeo en NINGÚN ojo, el problema está en la vía sensitiva aferente de ese lado (trigémino derecho).',
  exp:'El reflejo corneal depende de una vía aferente sensitiva (trigémino, rama oftálmica) que lleva la señal del estímulo corneal al tronco encefálico, y una vía eferente motora (facial) que, desde ahí, cierra AMBOS párpados (respuesta bilateral normal, incluso ante un estímulo unilateral). Si al estimular la córnea DERECHA no hay parpadeo en NINGÚN ojo (ni siquiera el contralateral), el problema está en que la señal sensitiva nunca llegó al centro reflejo: la vía aferente (trigémino derecho) está afectada. Si el problema fuera del nervio facial de un lado, se esperaría que ESE ojo no cerrara pero el contralateral sí, ante estímulo en cualquiera de las dos córneas.',
  no:{
    0:'Si el problema fuera del nervio facial derecho (vía eferente), se esperaría que el ojo DERECHO no cerrara pero el izquierdo sí, sin importar cuál córnea se estimule -no el patrón descrito, donde estimular la derecha no produce ningún parpadeo en absoluto.',
    1:'Sí puede determinarse: el patrón descrito (ausencia total de parpadeo solo al estimular un lado específico) es característico de un problema en la vía aferente de ESE lado.',
    3:'El reflejo corneal sí depende de pares craneales específicos y bien identificados: el trigémino como vía aferente y el facial como vía eferente.'
  },
  trampa:'No distinguir el patrón de respuesta esperado según si el defecto está en la vía aferente (trigémino) o en la eferente (facial), que producen patrones de ausencia de parpadeo distintos entre sí.',
  obj:'Localizar el componente afectado del arco reflejo corneal según el patrón de respuesta observado.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['reflejo corneal','trigémino','nervio facial','arco reflejo']
},
{
  id:'U8-A-Q37', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Nervio vago', sub:'Territorio abdominal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Hasta qué punto del tubo digestivo llega la inervación parasimpática del nervio vago?',
  ops:[
    'Solo hasta el estómago',
    'Aproximadamente hasta los dos tercios proximales del colon transverso',
    'Hasta el recto',
    'El vago no inerva ninguna porción del tubo digestivo'
  ],
  ok:1,
  clave:'El vago inerva por vía parasimpática hasta aproximadamente los dos tercios proximales del colon transverso, el límite del intestino medio embrionario.',
  exp:'El nervio vago (X par) inerva por vía parasimpática buena parte del tubo digestivo, desde el esófago hasta aproximadamente los dos tercios proximales del colon transverso -el mismo límite anatómico que marca el "intestino medio" del desarrollo embrionario. Más allá de ese punto (el tercio distal del colon transverso, el colon descendente, el sigmoide y el recto, correspondientes al "intestino posterior" embrionario), la inervación parasimpática proviene de los nervios esplácnicos pélvicos (S2-S4), no del vago.',
  no:{
    0:'El territorio vagal se extiende mucho más allá del estómago, cubriendo todo el intestino medio hasta el colon transverso proximal.',
    2:'El recto recibe inervación parasimpática de los nervios esplácnicos pélvicos (S2-S4), no del vago, que se detiene en el colon transverso proximal.',
    3:'El vago sí inerva una porción extensa del tubo digestivo, desde el esófago hasta el colon transverso proximal.'
  },
  trampa:'Extender o limitar incorrectamente el territorio de inervación vagal del tubo digestivo, sin ubicar con precisión su límite exacto en el colon transverso.',
  obj:'Ubicar el límite de la inervación parasimpática vagal del tubo digestivo.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['nervio vago','inervación parasimpática','intestino medio','colon transverso']
},
{
  id:'U8-A-Q38', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Sistema nervioso autónomo', sub:'Origen simpático vs. parasimpático',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el origen medular/troncoencefálico del sistema nervioso simpático, en contraste con el parasimpático?',
  ops:[
    'Simpático: craneosacro. Parasimpático: toracolumbar',
    'Simpático: toracolumbar (T1-L2). Parasimpático: craneosacro (pares craneales III, VII, IX, X + S2-S4)',
    'Ambos tienen exactamente el mismo origen',
    'Ninguno de los dos sistemas tiene un origen anatómico definido'
  ],
  ok:1,
  clave:'Simpático = toracolumbar (T1-L2). Parasimpático = craneosacro (pares III, VII, IX, X más S2-S4).',
  exp:'El sistema nervioso simpático se origina en la médula espinal a nivel toracolumbar (aproximadamente de T1 a L2), desde donde las fibras preganglionares salen hacia los ganglios de la cadena simpática paravertebral o hacia ganglios prevertebrales. El sistema parasimpático se origina en dos regiones distintas: craneal (a través de los pares craneales III, VII, IX y, sobre todo, X) y sacra (S2-S4). Esta organización toracolumbar contra craneosacra es una diferencia anatómica fundamental y opuesta entre ambos sistemas.',
  no:{
    0:'Está invertido: el simpático es toracolumbar, y el parasimpático es craneosacro, no al revés.',
    2:'Ambos sistemas tienen orígenes anatómicos claramente distintos y opuestos, no el mismo origen.',
    3:'Ambos sistemas tienen orígenes anatómicos bien definidos y ampliamente documentados, no indefinidos.'
  },
  trampa:'Invertir el origen toracolumbar (simpático) con el craneosacro (parasimpático), una confusión frecuente al estudiar el sistema nervioso autónomo.',
  obj:'Distinguir el origen anatómico toracolumbar del simpático frente al craneosacro del parasimpático.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['sistema nervioso simpático','sistema nervioso parasimpático','origen toracolumbar','origen craneosacro']
},
{
  id:'U8-A-Q39', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Síndrome de Horner', sub:'Cadena simpática cervical',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente fumador con un tumor del vértice pulmonar (tumor de Pancoast) presenta, del mismo lado del tumor, ptosis palpebral parcial, miosis y ausencia de sudoración facial.',
  enunciado:'¿Qué estructura anatómica está siendo invadida por el tumor para producir esta tríada clínica?',
  ops:[
    'El nervio vago',
    'La cadena simpática cervical',
    'El nervio laríngeo recurrente',
    'El plexo braquial exclusivamente, sin afectar ninguna otra estructura'
  ],
  ok:1,
  clave:'La tríada de Horner (ptosis, miosis, anhidrosis) resulta de la lesión de la cadena simpática cervical, invadida por el tumor de Pancoast.',
  exp:'La tríada descrita -ptosis (caída parcial del párpado, por pérdida de la inervación simpática del músculo tarsal), miosis (pupila contraída, por pérdida de la inervación simpática del músculo dilatador de la pupila) y anhidrosis facial (falta de sudoración)- constituye el síndrome de Horner, resultado de la lesión de la cadena simpática cervical. Un tumor del vértice pulmonar (tumor de Pancoast) puede invadir localmente esta cadena simpática por su vecindad anatómica, produciendo esta tríada clásica del mismo lado de la lesión.',
  no:{
    0:'La lesión del nervio vago no produce la tríada de Horner; se asocia más bien a alteraciones de la frecuencia cardíaca, la voz (vía el laríngeo recurrente) o la motilidad digestiva.',
    2:'La lesión aislada del nervio laríngeo recurrente produce disfonía por parálisis de cuerda vocal, no la tríada de Horner completa, aunque ambas estructuras pueden lesionarse juntas en algunos contextos de tumores del vértice pulmonar.',
    3:'El tumor de Pancoast también puede afectar al plexo braquial (produciendo dolor y debilidad del miembro superior), pero la tríada específica descrita en el caso corresponde a la cadena simpática, no exclusivamente al plexo braquial.'
  },
  trampa:'No reconocer la tríada clásica del síndrome de Horner ni su asociación anatómica específica con la invasión de la cadena simpática cervical por un tumor de vértice pulmonar.',
  obj:'Reconocer el síndrome de Horner y su causa anatómica por invasión de la cadena simpática cervical.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['síndrome de Horner','cadena simpática cervical','tumor de Pancoast','tríada de Horner']
},
{
  id:'U8-A-Q40', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Plexo celíaco', sub:'Bloqueo anestésico',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el bloqueo anestésico del plexo celíaco es un procedimiento usado en el control del dolor visceral abdominal severo, como en el cáncer de páncreas avanzado?',
  ops:[
    'Porque el plexo celíaco distribuye inervación autónoma a la mayoría de las vísceras abdominales superiores, incluido el páncreas',
    'Porque el plexo celíaco solo inerva a la piel del abdomen',
    'Porque bloquear el plexo celíaco elimina toda sensibilidad de los miembros inferiores',
    'El plexo celíaco no tiene relación con el dolor visceral'
  ],
  ok:0,
  clave:'El plexo celíaco distribuye inervación autónoma a la mayoría de las vísceras abdominales superiores, incluido el páncreas, y su bloqueo controla el dolor visceral de esa región.',
  exp:'El plexo celíaco es el plexo autónomo más grande del abdomen, situado alrededor del origen del tronco celíaco, y distribuye inervación autónoma a la mayoría de las vísceras abdominales superiores -estómago, hígado, páncreas, bazo, intestino delgado y buena parte del colon-. Por su papel central en la transmisión del dolor visceral de estos órganos, es el sitio de bloqueo anestésico usado para el control del dolor visceral abdominal severo, como en el cáncer de páncreas avanzado, donde el dolor puede ser particularmente intenso y difícil de controlar con analgesia convencional.',
  no:{
    1:'El plexo celíaco inerva vísceras abdominales profundas, no la piel del abdomen, cuya sensibilidad depende de nervios somáticos distintos.',
    2:'El bloqueo del plexo celíaco es específico para el dolor visceral abdominal superior; no afecta la sensibilidad de los miembros inferiores, cuya inervación proviene de estructuras distintas.',
    3:'El plexo celíaco sí tiene una relación directa y bien establecida con la transmisión del dolor visceral de las vísceras abdominales superiores.'
  },
  trampa:'No reconocer el papel específico del plexo celíaco en la inervación autónoma (y por tanto en la transmisión del dolor visceral) de los órganos abdominales superiores.',
  obj:'Explicar la base anatómica del bloqueo del plexo celíaco para el control del dolor visceral abdominal.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['plexo celíaco','bloqueo anestésico','dolor visceral','cáncer de páncreas']
},
{
  id:'U8-A-Q41', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Mama', sub:'Drenaje linfático axilar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué proporción aproximada del drenaje linfático de la mama va hacia los ganglios axilares, y qué relevancia tiene este dato para el cáncer de mama?',
  ops:[
    'Aproximadamente el 10%; los ganglios axilares no son relevantes en el cáncer de mama',
    'Aproximadamente el 75%; es la razón anatómica de que el cáncer de mama se disemine con mayor frecuencia hacia la axila, base de la técnica del ganglio centinela',
    'El 100%; ningún otro grupo ganglionar recibe drenaje de la mama',
    'La mama no tiene drenaje linfático'
  ],
  ok:1,
  clave:'Aproximadamente el 75% del drenaje linfático mamario va a la axila, la base anatómica de la diseminación axilar del cáncer de mama.',
  exp:'Aproximadamente el 75% del drenaje linfático de la mama va hacia los ganglios axilares, con el resto drenando principalmente hacia los ganglios paraesternales y, en menor proporción, hacia otras regiones. Este patrón de drenaje predominantemente axilar es la razón anatómica directa de por qué el cáncer de mama, al diseminarse por vía linfática, afecta con mayor frecuencia a los ganglios axilares antes que a otras cadenas ganglionares, y es la base de la técnica del ganglio centinela para predecir la diseminación sin necesidad de vaciar toda la axila.',
  no:{
    0:'La proporción real es mucho mayor (aproximadamente 75%, no 10%), y los ganglios axilares son, de hecho, el sitio prioritario de estudio en el cáncer de mama.',
    2:'No es el 100%: una porción del drenaje (menor pero real) va hacia los ganglios paraesternales y otras regiones, no exclusivamente hacia la axila.',
    3:'La mama sí tiene un drenaje linfático bien caracterizado, predominantemente hacia la axila.'
  },
  trampa:'Subestimar o sobreestimar la proporción real del drenaje linfático mamario hacia la axila, un dato clave para entender el patrón de diseminación del cáncer de mama.',
  obj:'Explicar la proporción y relevancia clínica del drenaje linfático axilar de la mama.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['drenaje linfático de la mama','ganglios axilares','ganglio centinela','cáncer de mama']
},
{
  id:'U8-A-Q42', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Mama', sub:'Ligamentos de Cooper',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una paciente presenta un nódulo mamario palpable con una hendidura o retracción visible de la piel suprayacente al inclinarse hacia adelante.',
  enunciado:'¿Qué estructura anatómica infiltrada por el tumor explica esta retracción cutánea?',
  ops:[
    'La glándula tiroides, sin relación con la mama',
    'Los ligamentos suspensorios de Cooper, que al ser infiltrados y acortados por el tumor producen la retracción de la piel suprayacente',
    'El músculo pectoral mayor exclusivamente',
    'Ningún tejido conectivo real sostiene a la mama'
  ],
  ok:1,
  clave:'Los ligamentos de Cooper, al ser infiltrados y acortados por el tumor, producen la retracción cutánea característica.',
  exp:'Los ligamentos suspensorios de Cooper son bandas fibrosas que atraviesan el tejido mamario, desde la fascia profunda hasta la dermis de la piel suprayacente, dándole soporte estructural a la mama. Cuando un tumor mamario infiltra y acorta estos ligamentos, produce una retracción visible de la piel suprayacente (el signo clásico de hendidura o "piel de naranja"), un hallazgo del examen físico que, aunque no es exclusivo del cáncer, siempre obliga a descartarlo activamente.',
  no:{
    0:'La glándula tiroides se ubica en el cuello, sin relación anatómica con la mama ni con este signo clínico.',
    2:'El músculo pectoral mayor es una estructura muscular subyacente a la mama, distinta de los ligamentos de Cooper, que son el tejido conectivo específicamente responsable de este signo.',
    3:'La mama sí está sostenida por tejido conectivo real, precisamente los ligamentos de Cooper, que dan soporte estructural contra la gravedad.'
  },
  trampa:'No identificar los ligamentos de Cooper como la estructura específica cuya infiltración tumoral produce la retracción cutánea característica del examen mamario.',
  obj:'Explicar el mecanismo anatómico de la retracción cutánea en el cáncer de mama por infiltración de los ligamentos de Cooper.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['ligamentos de Cooper','retracción cutánea','cáncer de mama','examen mamario']
},
{
  id:'U8-A-Q43', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Trompa uterina', sub:'Fecundación y discontinuidad con el ovario',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica anatómica particular existe entre el extremo distal de la trompa uterina (fimbrias) y el ovario?',
  ops:[
    'Están directamente fusionados, formando un conducto continuo y cerrado',
    'Existe una discontinuidad anatómica real: las fimbrias se aproximan al ovario sin estar directamente unidas a él, y deben "captar" activamente al ovocito liberado',
    'La trompa uterina no tiene ninguna relación anatómica con el ovario',
    'El ovario está dentro de la luz de la trompa uterina'
  ],
  ok:1,
  clave:'Las fimbrias se aproximan al ovario sin unión directa; el ovocito debe ser captado activamente, no pasa por un conducto cerrado.',
  exp:'La trompa uterina termina en fimbrias, que se aproximan al ovario sin estar directamente unidas a él: hay una discontinuidad anatómica real entre el extremo distal de la trompa y el ovario. El ovocito liberado en la ovulación debe ser "captado" activamente por las fimbrias hacia el interior de la trompa, un proceso que puede fallar, lo cual es parte de la explicación de ciertos casos de infertilidad de causa tuboovárica y es relevante también para entender el embarazo ectópico.',
  no:{
    0:'No hay fusión directa ni un conducto continuo y cerrado entre la trompa y el ovario; existe precisamente la discontinuidad anatómica descrita.',
    2:'Sí existe una relación anatómica directa, aunque sin continuidad estructural completa: las fimbrias se aproximan mucho al ovario para captar al ovocito.',
    3:'El ovario no está dentro de la luz de la trompa uterina; permanece como un órgano separado, próximo a las fimbrias pero no contenido dentro de ellas.'
  },
  trampa:'Asumir que la trompa uterina y el ovario forman un conducto anatómicamente continuo y cerrado, cuando en realidad existe una discontinuidad real entre ambos.',
  obj:'Explicar la discontinuidad anatómica entre la trompa uterina y el ovario y su relevancia clínica.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['trompa uterina','fimbrias','ovario','captación del ovocito']
},
{
  id:'U8-A-Q44', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Ligamento ancho', sub:'Función real',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función real del ligamento ancho del útero, a pesar de lo que su nombre podría sugerir?',
  ops:[
    'Es el principal soporte mecánico del útero, sosteniéndolo contra la gravedad',
    'Es un pliegue peritoneal que envuelve y organiza estructuras (trompas, ligamentos propio y redondo del ovario, vasos), aportando relativamente poco sostén mecánico real',
    'Conecta directamente el útero con el recto',
    'Es un músculo, no un pliegue peritoneal'
  ],
  ok:1,
  clave:'El ligamento ancho es un pliegue peritoneal que envuelve estructuras; el sostén mecánico real proviene de otros ligamentos.',
  exp:'El ligamento ancho es, en realidad, un amplio pliegue de peritoneo que se extiende desde los lados del útero hasta la pared lateral de la pelvis, envolviendo dentro de sus dos hojas a las trompas uterinas, los ligamentos propio del ovario y redondo del útero, y vasos y nervios en su trayecto. Pese a su nombre, aporta relativamente poco sostén mecánico real al útero -el verdadero soporte proviene principalmente de los ligamentos cardinales y uterosacros, junto con el suelo pélvico muscular. Confundir el ligamento ancho con una estructura de soporte mecánico real es un error conceptual frecuente.',
  no:{
    0:'Es precisamente el error conceptual que el tema busca corregir: el ligamento ancho NO es el principal soporte mecánico; ese papel corresponde a los ligamentos cardinales y uterosacros.',
    2:'El ligamento ancho no conecta el útero con el recto; su relación es con las trompas uterinas, los ovarios y la pared pélvica lateral.',
    3:'El ligamento ancho es un pliegue peritoneal, no un músculo; carece de la capacidad contráctil que tendría una estructura muscular.'
  },
  trampa:'Asumir, guiado por el nombre "ligamento ancho", que se trata del principal elemento de soporte mecánico del útero, cuando en realidad su función es más bien de envoltura peritoneal.',
  obj:'Explicar la función real del ligamento ancho, distinguiéndola de los verdaderos ligamentos de soporte del útero.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['ligamento ancho','ligamentos cardinales','ligamentos uterosacros','soporte uterino']
},
{
  id:'U8-A-Q45', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Vesículas seminales', sub:'Función real',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función real de las vesículas seminales, y qué error conceptual sugiere su nombre?',
  ops:[
    'Almacenan espermatozoides, tal como sugiere su nombre',
    'Producen la mayor parte del volumen del líquido seminal (rico en fructosa y prostaglandinas); NO almacenan espermatozoides, a pesar de lo que su nombre podría sugerir',
    'Son idénticas a los testículos en su función',
    'No tienen ninguna función real, son estructuras vestigiales'
  ],
  ok:1,
  clave:'Las vesículas seminales producen la mayor parte del líquido seminal; no almacenan espermatozoides, pese a lo que sugiere su nombre.',
  exp:'Las vesículas seminales no almacenan espermatozoides -un error conceptual frecuente sugerido por su nombre- sino que producen la mayor parte del volumen del líquido seminal, rico en fructosa (la principal fuente de energía para los espermatozoides eyaculados) y prostaglandinas. Esta distinción explica por qué la vasectomía (que solo secciona el conducto deferente) apenas cambia el volumen de la eyaculación: las vesículas seminales y la próstata siguen produciendo la mayor parte del líquido seminal, solo que ya sin espermatozoides.',
  no:{
    0:'Es precisamente el error conceptual que sugiere su nombre; su función real es la producción de líquido seminal, no el almacenamiento de espermatozoides.',
    2:'Las vesículas seminales tienen una función glandular secretora, distinta de la función productora de espermatozoides propia de los testículos.',
    3:'Sí tienen una función real y clínicamente relevante: la producción de la mayor parte del volumen del líquido seminal.'
  },
  trampa:'Asumir, guiado por el nombre "vesícula seminal", que su función es almacenar espermatozoides, cuando en realidad son glándulas secretoras de líquido seminal.',
  obj:'Explicar la función real de las vesículas seminales y su relevancia para entender el efecto de la vasectomía.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['vesículas seminales','líquido seminal','vasectomía','fructosa']
},
{
  id:'U8-A-Q46', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Próstata', sub:'Zonas glandulares',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre de 65 años presenta síntomas urinarios obstructivos progresivos (dificultad para iniciar la micción, chorro urinario débil), y se le diagnostica hiperplasia prostática benigna. En otro paciente, se detecta un nódulo prostático duro en el tacto rectal, asintomático, que resulta ser cáncer de próstata.',
  enunciado:'¿Qué diferencia de localización zonal dentro de la próstata explica el distinto comportamiento clínico de ambas condiciones?',
  ops:[
    'Ambas se originan siempre en la misma zona de la próstata',
    'La hiperplasia benigna se origina típicamente en la zona de transición (que rodea la uretra, dando síntomas obstructivos tempranos); el cáncer se origina típicamente en la zona periférica (más alejada de la uretra, con frecuencia asintomático hasta etapas avanzadas)',
    'La hiperplasia benigna se origina en la zona periférica; el cáncer en la zona de transición',
    'La localización zonal no tiene ninguna relevancia clínica'
  ],
  ok:1,
  clave:'Hiperplasia benigna → zona de transición (rodea la uretra, obstrucción temprana). Cáncer → zona periférica (palpable, con frecuencia silente hasta etapas avanzadas).',
  exp:'La próstata se organiza en zonas glandulares con comportamiento clínico distinto: la zona de transición rodea directamente a la uretra prostática, y es el sitio característico de la hiperplasia prostática benigna, que por crecer justo alrededor de la uretra produce síntomas urinarios obstructivos con relativa facilidad, incluso siendo una condición benigna. La zona periférica, la porción más grande y palpable en el tacto rectal, es el sitio de origen de la gran mayoría de los cánceres de próstata, que al estar más alejados de la uretra pueden crecer de forma silente durante mucho tiempo sin producir síntomas urinarios tempranos.',
  no:{
    0:'No se originan en la misma zona; precisamente la diferencia de zona de origen explica el distinto comportamiento clínico de ambas condiciones.',
    2:'Está invertido: la hiperplasia benigna se origina en la zona de TRANSICIÓN, y el cáncer típicamente en la zona PERIFÉRICA, no al revés.',
    3:'La localización zonal tiene relevancia clínica directa: explica por qué una condición benigna da síntomas tempranos y una maligna puede ser silente por más tiempo.'
  },
  trampa:'Invertir las zonas glandulares asociadas a cada condición, o no reconocer la relevancia clínica de la organización zonal de la próstata.',
  obj:'Relacionar la zona glandular de origen con el comportamiento clínico distinto de la hiperplasia prostática benigna y el cáncer de próstata.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['zona de transición','zona periférica','hiperplasia prostática benigna','cáncer de próstata']
},
{
  id:'U8-A-Q47', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Diafragma', sub:'Orificios y altura vertebral',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'De los tres orificios principales del diafragma, ¿cuál se encuentra a la altura vertebral más ALTA?',
  ops:['El hiato aórtico (T12)', 'El hiato esofágico (T10)', 'El orificio de la vena cava inferior (T8)', 'Los tres están exactamente a la misma altura'],
  ok:2,
  clave:'El orificio de la vena cava inferior, a nivel T8, es el más alto de los tres orificios diafragmáticos principales.',
  exp:'Los tres orificios principales del diafragma se sitúan a alturas vertebrales distintas: el orificio de la vena cava inferior es el más alto (a nivel de T8), seguido del hiato esofágico (a nivel de T10, junto con los troncos vagales), y finalmente el hiato aórtico, el más bajo de los tres (a nivel de T12, junto con el conducto torácico y la vena ácigos). Este orden vertical de arriba hacia abajo (cava-esófago-aorta) es un dato anatómico frecuentemente evaluado.',
  no:{
    0:'El hiato aórtico, a nivel T12, es el más BAJO de los tres orificios, no el más alto.',
    1:'El hiato esofágico, a nivel T10, ocupa una posición intermedia entre los otros dos orificios, no la más alta.',
    3:'Los tres orificios se sitúan a alturas vertebrales claramente distintas entre sí (T8, T10 y T12), no a la misma altura.'
  },
  trampa:'No recordar el orden vertical específico de los tres orificios diafragmáticos, confundiendo cuál es el más alto, el intermedio y el más bajo.',
  obj:'Ordenar los tres orificios diafragmáticos principales según su altura vertebral.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['orificio de la vena cava','hiato esofágico','hiato aórtico','altura vertebral']
},
{
  id:'U8-A-Q48', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Diafragma', sub:'Hiato aórtico no contráctil',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el hiato aórtico, a diferencia del hiato esofágico, NO se comprime ni se mueve significativamente con la contracción diafragmática durante la respiración?',
  ops:[
    'Porque el hiato aórtico está formado por tejido fibromuscular que se sitúa detrás del cuerpo muscular contráctil del diafragma, casi a nivel de la columna vertebral',
    'Porque la aorta no atraviesa realmente el diafragma',
    'Porque el hiato esofágico tampoco es funcionalmente contráctil',
    'No existe ninguna diferencia funcional entre ambos hiatos'
  ],
  ok:0,
  clave:'El hiato aórtico se sitúa detrás del cuerpo muscular contráctil del diafragma, casi a nivel vertebral, por lo que no se comprime con la respiración.',
  exp:'El hiato aórtico está formado por los pilares musculares del diafragma, pero se sitúa técnicamente POR DETRÁS del cuerpo muscular contráctil del diafragma, casi a nivel de la columna vertebral. Por eso, a diferencia de los otros dos orificios, no se comprime ni se moviliza significativamente con la contracción diafragmática durante la respiración -lo cual tiene sentido fisiológico, porque sería indeseable que la aorta, un vaso de alto flujo y presión, se comprimiera rítmicamente con cada respiración. El hiato esofágico, en cambio, sí está formado por fibras verdaderamente contráctiles, que contribuyen a prevenir el reflujo gastroesofágico.',
  no:{
    1:'La aorta sí atraviesa el diafragma, a través del hiato aórtico; lo particular es que ese hiato no se comprime con la respiración por su posición anatómica específica.',
    2:'Es justo lo contrario: el hiato esofágico SÍ es funcionalmente contráctil, a diferencia del hiato aórtico.',
    3:'Sí existe una diferencia funcional real y con sentido fisiológico entre ambos hiatos, relacionada con su posición anatómica exacta respecto al cuerpo contráctil del diafragma.'
  },
  trampa:'No distinguir la posición anatómica específica del hiato aórtico (detrás del cuerpo contráctil) de la del hiato esofágico (dentro del tejido verdaderamente contráctil).',
  obj:'Explicar por qué el hiato aórtico no se comprime con la respiración, a diferencia del hiato esofágico.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['hiato aórtico','hiato esofágico','pilares diafragmáticos','reflujo gastroesofágico']
},
{
  id:'U8-A-Q49', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Aorta abdominal', sub:'Ramas viscerales y embriología',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué orden vertical siguen las tres grandes ramas viscerales impares de la aorta abdominal, y por qué ese orden "tiene sentido"?',
  ops:[
    'Tronco celíaco → mesentérica superior → mesentérica inferior, reproduciendo exactamente el orden embriológico de intestino anterior → medio → posterior',
    'Mesentérica inferior → mesentérica superior → tronco celíaco, sin relación con la embriología',
    'Las tres ramas nacen al mismo nivel exacto de la aorta',
    'El orden es aleatorio y no tiene relación con el desarrollo embrionario'
  ],
  ok:0,
  clave:'El orden tronco celíaco → mesentérica superior → mesentérica inferior reproduce exactamente la secuencia embriológica intestino anterior-medio-posterior.',
  exp:'La aorta abdominal da origen, en orden vertical descendente, a sus tres grandes ramas viscerales impares: el tronco celíaco (el más alto, irriga el intestino anterior embrionario), la arteria mesentérica superior (irriga el intestino medio embrionario) y la arteria mesentérica inferior (la más baja, irriga el intestino posterior embrionario). Este orden vertical reproduce fielmente la lógica embriológica de la irrigación del intestino primitivo, lo que convierte a la anatomía vascular adulta en un reflejo directo y coherente del desarrollo embrionario, en lugar de una lista de datos aislados para memorizar.',
  no:{
    1:'El orden real es el inverso al descrito en esta opción, y sí tiene una relación directa y coherente con la secuencia embriológica del intestino primitivo.',
    2:'Las tres ramas nacen a alturas distintas y consecutivas de la aorta abdominal, no al mismo nivel.',
    3:'El orden no es aleatorio: reproduce de forma precisa y consistente la secuencia embriológica de las tres divisiones del intestino primitivo.'
  },
  trampa:'Tratar el orden de las ramas viscerales de la aorta como un dato arbitrario para memorizar, sin conectar con la lógica embriológica que lo explica y facilita recordarlo.',
  obj:'Relacionar el orden vertical de las ramas viscerales de la aorta abdominal con la secuencia embriológica del intestino primitivo.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['tronco celíaco','arteria mesentérica superior','arteria mesentérica inferior','intestino primitivo']
},
{
  id:'U8-A-Q50', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Drenaje linfático abdominal', sub:'Cisterna del quilo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué recibe la cisterna del quilo, y hacia dónde continúa el drenaje linfático desde ahí?',
  ops:[
    'Recibe solo la linfa del miembro superior derecho, y drena hacia el conducto linfático derecho',
    'Recibe los troncos linfáticos lumbares y el tronco intestinal (linfa de abdomen y miembros inferiores), y da origen al conducto torácico, que asciende hacia la unión yugulo-subclavia izquierda',
    'Es el punto final del sistema linfático, sin continuidad hacia el sistema venoso',
    'Recibe únicamente la linfa de la cabeza y el cuello'
  ],
  ok:1,
  clave:'La cisterna del quilo recibe la linfa de abdomen y miembros inferiores, y da origen al conducto torácico.',
  exp:'La cisterna del quilo (o cisterna de Pecquet) es un reservorio dilatado situado por delante de las primeras vértebras lumbares, que recibe los troncos linfáticos lumbares (de los miembros inferiores y la pelvis) y el tronco intestinal (de las vísceras abdominales). Desde ahí nace el conducto torácico, que atraviesa el hiato aórtico para ascender por el tórax y finalmente desembocar en la unión de la vena subclavia izquierda con la vena yugular interna izquierda, reincorporando así la linfa a la circulación venosa sistémica.',
  no:{
    0:'La cisterna del quilo no recibe la linfa del miembro superior derecho, que sigue una vía distinta (conducto linfático derecho); recibe la linfa del abdomen y los miembros inferiores.',
    2:'El sistema linfático sí tiene continuidad con el sistema venoso: el conducto torácico, que nace de la cisterna del quilo, desemboca finalmente en la circulación venosa.',
    3:'La cisterna del quilo no recibe linfa de la cabeza y el cuello; su contenido proviene del abdomen y los miembros inferiores.'
  },
  trampa:'Confundir el territorio de origen de la linfa que llega a la cisterna del quilo, o no reconocer su continuidad hacia el conducto torácico y finalmente hacia el sistema venoso.',
  obj:'Describir qué recibe la cisterna del quilo y su continuidad con el conducto torácico.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['cisterna del quilo','conducto torácico','drenaje linfático abdominal','unión yugulo-subclavia']
}

]);
