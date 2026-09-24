/* ============================================================
   UNIRMIA — BANCO 5, CUATRIMESTRE 7 — FISIOLOGÍA I (ampliación)
   Primer lote de 16 preguntas (U7-F-Q15 a Q30). Con el banco 6
   llevan la materia de 14 a 50 preguntas y cubren los 15 temas del
   temario. Mismo estándar que el resto: dato clave, explicación de
   por qué falla cada opción, trampa y bibliografía.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ---------- Homeostasis y medio interno ---------- */
{
  id:'U7-F-Q15', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Homeostasis y medio interno', sub:'Retroalimentación positiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de los siguientes procesos es un ejemplo de retroalimentación positiva?',
  ops:['Las contracciones uterinas que estimulan más liberación de oxitocina durante el parto','La secreción de insulina cuando sube la glucosa en sangre','La sudoración cuando aumenta la temperatura corporal','La vasoconstricción refleja cuando baja la presión arterial'],
  ok:0,
  clave:'Retroalimentación positiva = el cambio se amplifica hasta un desenlace. Parto y cascada de coagulación.',
  exp:'En el parto, la contracción del útero presiona la cabeza fetal contra el cuello uterino; ese estiramiento envía señales al hipotálamo que aumentan la liberación de oxitocina, y la oxitocina produce contracciones más fuertes. El estímulo se amplifica a sí mismo hasta que nace el bebé, que es el punto donde el ciclo termina. La retroalimentación positiva es rara en fisiología porque, sin un desenlace que la corte, un sistema así se descontrola.',
  no:{
    1:'La insulina baja la glucosa, o sea, revierte el cambio que la provocó. Eso es retroalimentación negativa.',
    2:'La sudoración enfría el cuerpo y así corrige el aumento de temperatura que la desencadenó: retroalimentación negativa.',
    3:'La vasoconstricción refleja sube la presión que había bajado, oponiéndose al cambio inicial: retroalimentación negativa.'
  },
  trampa:'Creer que "positiva" significa "buena". Se llama así porque suma al cambio inicial en lugar de oponerse a él, no porque sea beneficiosa.',
  obj:'Distinguir retroalimentación negativa y positiva y dar un ejemplo de cada una.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 1.',
  tags:['retroalimentación negativa','retroalimentación positiva','homeostasis','oxitocina']
},
{
  id:'U7-F-Q16', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Homeostasis y medio interno', sub:'Compartimentos líquidos',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'En un adulto sano de 70 kg, el agua corporal total es aproximadamente el 60 % del peso. ¿Cuál es el volumen aproximado del líquido intracelular?',
  ops:['28 litros','14 litros','42 litros','3 litros'],
  ok:0,
  clave:'70 kg × 60 % = 42 L de agua. Dos tercios intracelular (28 L), un tercio extracelular (14 L).',
  exp:'El agua corporal total de este adulto es 70 × 0,60 = 42 L. De ellos, dos tercios están dentro de las células, es decir unos 28 L de líquido intracelular, y un tercio, unos 14 L, fuera de ellas (líquido extracelular). A su vez, el extracelular se reparte en unos 11 L de líquido intersticial y unos 3 L de plasma. Estas proporciones sirven para calcular cuánto líquido se redistribuye cuando se administra suero por vía intravenosa.',
  no:{
    1:'14 L es el volumen del compartimento extracelular completo, no del intracelular.',
    2:'42 L es el agua corporal total, la suma de los dos compartimentos.',
    3:'3 L es aproximadamente el volumen del plasma, apenas una fracción del compartimento extracelular.'
  },
  trampa:'Confundir el agua corporal total con el volumen intracelular. Hay que hacer dos pasos: primero el 60 % del peso, después dos tercios de ese resultado.',
  obj:'Calcular el volumen de cada compartimento líquido a partir del peso corporal.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 25.',
  tags:['compartimento','líquido intracelular','líquido extracelular','agua corporal total']
},
{
  id:'U7-F-Q17', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Homeostasis y medio interno', sub:'Regulación de la osmolaridad',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un corredor entrena una hora bajo el sol sin beber agua. Ha sudado mucho y su osmolaridad plasmática ha subido ligeramente.',
  enunciado:'¿Qué respuesta homeostática cabe esperar como consecuencia de ese aumento de la osmolaridad?',
  ops:['Menos hormona antidiurética (ADH) y orina abundante y diluida','Más ADH y orina abundante y diluida','Más ADH, orina concentrada y aumento de la sed','No hay respuesta, porque el cambio de osmolaridad es demasiado pequeño para detectarlo'],
  ok:2,
  clave:'↑ osmolaridad → osmorreceptores hipotalámicos → ↑ ADH y sed → se retiene agua → baja la osmolaridad.',
  exp:'Los osmorreceptores del hipotálamo detectan incluso variaciones del 1 % en la osmolaridad. Al subir, se libera más ADH desde la neurohipófisis, los riñones reabsorben más agua y la orina se concentra, y a la vez aumenta la sensación de sed para que la persona beba. Es un bucle de retroalimentación negativa: el estímulo (osmolaridad alta) desencadena una respuesta que la devuelve al rango normal.',
  no:{
    0:'Menos ADH ocurre cuando la osmolaridad baja, y produce justo lo contrario: orina diluida para eliminar el exceso de agua.',
    1:'Es contradictorio: la ADH concentra la orina, no la diluye.',
    3:'Los osmorreceptores son muy sensibles; una variación de apenas 1-2 % ya provoca respuesta.'
  },
  trampa:'Recordar solo que la ADH "retiene agua" y aplicarla al revés. La pregunta correcta es qué cambió: ¿sobra agua o falta agua?',
  obj:'Explicar cómo la ADH y la sed regulan la osmolaridad plasmática por retroalimentación negativa.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 29.',
  tags:['homeostasis','osmolaridad','ADH','retroalimentación negativa','medio interno']
},

/* ---------- Membrana celular y transporte ---------- */
{
  id:'U7-F-Q18', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Membrana celular y transporte', sub:'Difusión simple',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes moléculas atraviesa con más facilidad la bicapa lipídica por difusión simple, sin necesidad de proteínas transportadoras?',
  ops:['El ion sodio','La glucosa','El aminoácido glicina','El oxígeno'],
  ok:3,
  clave:'Difusión simple: moléculas pequeñas, apolares y liposolubles (O₂, CO₂, hormonas esteroideas).',
  exp:'La bicapa lipídica es un medio hidrofóbico: deja pasar con facilidad las moléculas pequeñas y apolares, como el oxígeno, el dióxido de carbono y las hormonas esteroideas. La velocidad de difusión depende del gradiente de concentración, de la superficie disponible y de qué tan liposoluble sea la molécula (ley de Fick). Los iones y las moléculas polares grandes necesitan canales o transportadores.',
  no:{
    0:'El sodio es un ion cargado; la bicapa lo repele y necesita canales o bombas.',
    1:'La glucosa es polar y demasiado grande para atravesar la membrana sola; entra por transportadores GLUT o por cotransporte sodio-glucosa.',
    2:'Los aminoácidos son polares y cargados a pH fisiológico, y requieren transportadores específicos.'
  },
  trampa:'Pensar que "pequeña" basta. La glucosa no es enorme, pero al ser polar no puede disolverse en la parte lipídica de la membrana.',
  obj:'Reconocer qué moléculas cruzan la membrana por difusión simple y por qué.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 4.',
  tags:['difusión','bicapa lipídica','liposolubilidad','oxígeno','gradiente']
},
{
  id:'U7-F-Q19', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Membrana celular y transporte', sub:'Ósmosis y tonicidad',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En el laboratorio se colocan glóbulos rojos en una solución de cloruro de sodio al 0,45 %, mientras que el plasma equivale a una solución al 0,9 %.',
  enunciado:'¿Qué ocurrirá con los glóbulos rojos?',
  ops:['Se hincharán por entrada de agua y pueden llegar a romperse (hemólisis)','Se encogerán y adquirirán forma crenada porque pierden agua','No cambiarán de volumen porque la solución contiene sal','Perderán sodio hasta igualar la concentración externa'],
  ok:0,
  clave:'Solución hipotónica → el agua entra a la célula → hinchazón y posible lisis.',
  exp:'La solución al 0,45 % tiene menos solutos que el interior del glóbulo rojo, así que es hipotónica. El agua se mueve por ósmosis hacia el lado con mayor concentración de solutos, es decir, hacia el interior de la célula. El eritrocito se hincha y, si la entrada de agua es suficiente, la membrana se rompe: hemólisis. Por eso los sueros que se administran por vena son isotónicos, y la hipotónica en exceso es peligrosa.',
  no:{
    1:'La crenación (célula encogida) ocurre en soluciones hipertónicas, donde el agua sale de la célula.',
    2:'Lo que importa es la concentración de solutos impermeables, no la presencia de sal. Esta solución tiene la mitad que el plasma.',
    3:'La membrana del glóbulo rojo no dejaría equilibrar el sodio de esa forma, y el movimiento dominante es el del agua, no el del sodio.'
  },
  trampa:'Invertir el sentido del movimiento del agua. Regla: el agua va hacia donde hay MÁS solutos.',
  obj:'Predecir el cambio de volumen celular en soluciones isotónicas, hipotónicas e hipertónicas.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 4.',
  tags:['osmosis','hipotónica','hemólisis','tonicidad','eritrocito']
},
{
  id:'U7-F-Q20', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Membrana celular y transporte', sub:'Bomba sodio-potasio',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con insuficiencia cardíaca recibe digoxina, un fármaco que inhibe la bomba sodio-potasio ATPasa de la membrana de los miocitos.',
  enunciado:'¿Qué cambio inmediato produce el fármaco en el interior de la célula cardíaca?',
  ops:['Disminuye el sodio intracelular y aumenta el potasio intracelular','Aumenta el calcio extracelular y baja el calcio intracelular','Aumenta el sodio intracelular y disminuye el potasio intracelular','No cambia la concentración de ningún ion, solo se gasta menos ATP'],
  ok:2,
  clave:'La bomba saca 3 Na⁺ y mete 2 K⁺ con gasto de ATP. Al inhibirla, el Na⁺ se acumula dentro y el K⁺ se pierde.',
  exp:'La bomba sodio-potasio expulsa tres iones sodio y mete dos de potasio en cada ciclo, contra gradiente y consumiendo ATP. Si se inhibe, el sodio se acumula dentro de la célula y el potasio sale. En el miocardio, el aumento del sodio intracelular reduce el gradiente que mueve el intercambiador sodio-calcio, de modo que se expulsa menos calcio y queda más disponible para la contracción: por eso la digoxina aumenta la fuerza del latido.',
  no:{
    0:'Es el sentido inverso: la bomba funcionando es la que mantiene bajo el sodio y alto el potasio dentro de la célula.',
    1:'El efecto sobre el calcio es en dirección opuesta: sube el calcio intracelular, no baja.',
    3:'Sí cambian las concentraciones; la bomba es precisamente la responsable de mantenerlas.'
  },
  trampa:'Memorizar solo "la bomba consume ATP" y olvidar el sentido de los iones. Sodio hacia afuera, potasio hacia adentro; sin la bomba se pierde esa asimetría.',
  obj:'Describir la estequiometría de la bomba sodio-potasio y las consecuencias de inhibirla.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 4.',
  tags:['bomba sodio potasio','transporte activo','digoxina','gradiente']
},

/* ---------- Potencial de membrana y potencial de acción ---------- */
{
  id:'U7-F-Q21', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Potencial de membrana y potencial de acción', sub:'Potencial de reposo e hiperpotasemia',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con insuficiencia renal grave tiene un potasio sérico de 7,0 mEq/L (normal: 3,5-5,0). El electrocardiograma muestra alteraciones de la conducción.',
  enunciado:'¿Cómo se modifica el potencial de reposo de sus células excitables?',
  ops:['Se hace más negativo (hiperpolarización) porque hay más potasio en el exterior','Se hace menos negativo (despolarización parcial) porque disminuye el gradiente de potasio','No cambia, porque el potencial de reposo depende solo del sodio','Se invierte y pasa a ser positivo'],
  ok:1,
  clave:'↑ K⁺ extracelular → el potencial de equilibrio del K⁺ se hace menos negativo → reposo despolarizado.',
  exp:'El potencial de reposo se acerca al potencial de equilibrio del potasio, que depende del cociente entre potasio interno y externo (ecuación de Nernst). Si el potasio externo sube, ese cociente baja y el potencial de equilibrio se hace menos negativo, así que la membrana queda parcialmente despolarizada. Con la despolarización sostenida, los canales de sodio se inactivan y la célula se vuelve menos excitable, lo que explica las arritmias y el bloqueo de la conducción en la hiperpotasemia grave.',
  no:{
    0:'Más potasio fuera reduce, no aumenta, la tendencia del potasio a salir; la membrana se despolariza, no se hiperpolariza.',
    2:'El reposo depende sobre todo del potasio, porque la membrana en reposo es mucho más permeable a él que al sodio.',
    3:'Aumentos de potasio en el rango clínico despolarizan la célula unos milivoltios, pero nunca invierten la polaridad.'
  },
  trampa:'Pensar que como el potasio sale de la célula, tener más potasio afuera "empuja" hacia hiperpolarizar. Lo que cuenta es el gradiente: menos diferencia, menos salida y menos negatividad.',
  obj:'Relacionar el potasio extracelular con el potencial de reposo y la excitabilidad.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 5.',
  tags:['potencial de reposo','hiperpotasemia','Nernst','despolarización','umbral']
},
{
  id:'U7-F-Q22', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Potencial de membrana y potencial de acción', sub:'Fases del potencial de acción',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Después de la repolarización, el potencial de membrana de una neurona baja brevemente por debajo del potencial de reposo (pospotencial hiperpolarizante). ¿Cuál es la causa?',
  ops:['Los canales de sodio permanecen abiertos más tiempo del necesario','La bomba sodio-potasio expulsa demasiado sodio en ese momento','Los canales de calcio se abren y hiperpolarizan la membrana','Los canales de potasio dependientes de voltaje cierran con retraso y el potasio sigue saliendo'],
  ok:3,
  clave:'Hiperpolarización tardía = canales de K⁺ que cierran despacio; el potencial se acerca al de equilibrio del K⁺ (−90 mV).',
  exp:'Los canales de potasio dependientes de voltaje se abren con retraso respecto a los de sodio y también se cierran con lentitud. Cuando el potencial ya volvió al nivel de reposo, aún quedan canales abiertos y el potasio sigue saliendo, arrastrando la membrana hacia el potencial de equilibrio del potasio, más negativo que el de reposo. Al cerrarse esos canales, el potencial regresa al reposo.',
  no:{
    0:'Sodio abierto despolariza, no hiperpolariza; además los canales de sodio se inactivan rápido durante la repolarización.',
    1:'La bomba es electrogénica pero su contribución en milisegundos es mínima frente al efecto de los canales.',
    2:'La entrada de calcio despolariza, tal como ocurre con el sodio.'
  },
  trampa:'Atribuirlo a la bomba sodio-potasio porque "ella restablece el reposo". La bomba actúa a largo plazo; el pospotencial se explica por canales de potasio y ocurre en milisegundos.',
  obj:'Explicar la secuencia de canales iónicos en cada fase del potencial de acción.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 5.',
  tags:['repolarización','despolarización','canales de potasio','hiperpolarización','potencial de acción']
},
{
  id:'U7-F-Q23', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Potencial de membrana y potencial de acción', sub:'Conducción y mielina',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer de 28 años presenta episodios de visión borrosa y debilidad en las piernas. La resonancia muestra placas de desmielinización en la sustancia blanca. Sus axones están intactos, pero las señales viajan mucho más despacio.',
  enunciado:'¿Por qué la pérdida de mielina enlentece la conducción?',
  ops:['Porque el axón pierde sus canales de potasio','Porque disminuye la cantidad de neurotransmisor en la sinapsis','Porque se pierde la conducción saltatoria y la corriente se dispersa por la membrana descubierta','Porque el potencial de reposo se hace más positivo'],
  ok:2,
  clave:'Mielina → aislante que permite conducción saltatoria entre nódulos de Ranvier. Sin ella, la señal es lenta o se pierde.',
  exp:'En un axón mielinizado, los canales de sodio se concentran en los nódulos de Ranvier y el potencial de acción "salta" de nódulo en nódulo, porque la mielina aísla el tramo intermedio e impide que la corriente se fugue. Cuando la mielina se pierde, la corriente se dispersa por la membrana descubierta, se necesita despolarizar toda la longitud del axón y la velocidad cae; en casos graves la señal ni siquiera alcanza el siguiente punto. Es lo que ocurre en la esclerosis múltiple.',
  no:{
    0:'Los canales de potasio no desaparecen; el problema es de aislamiento, no de canales.',
    1:'La sinapsis no está afectada en la desmielinización; el problema está en el axón, antes de llegar a ella.',
    3:'La mielina no modifica el potencial de reposo; modifica cómo se propaga el potencial de acción.'
  },
  trampa:'Confundir la conducción saltatoria con "más rápida por más canales". Lo que la acelera es el aislamiento y la concentración de canales en los nódulos.',
  obj:'Explicar el papel de la mielina en la velocidad de conducción.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 5.',
  tags:['mielina','conducción saltatoria','nódulo de Ranvier','potencial de acción','umbral']
},

/* ---------- Sinapsis y transmisión neuromuscular ---------- */
{
  id:'U7-F-Q24', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Sinapsis y transmisión neuromuscular', sub:'Miastenia gravis',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer de 32 años refiere que los párpados se le caen al final del día y que, al mantener la mirada hacia arriba, aparece visión doble. Se le cansan los brazos al peinarse, pero mejoran tras descansar. Tiene anticuerpos contra el receptor nicotínico de acetilcolina.',
  enunciado:'¿Qué explica sus síntomas y qué fármaco mejora su cuadro?',
  ops:['Falta de acetilcolina en el terminal; se corrige con más precursores de colina','Un exceso de acetilcolinesterasa; mejora con un bloqueador de los receptores','Menos receptores funcionales en la placa motora; mejora con un inhibidor de la acetilcolinesterasa','Una lesión de la neurona motora superior; mejora con relajantes musculares'],
  ok:2,
  clave:'Miastenia gravis: anticuerpos contra el receptor nicotínico → debilidad que empeora con el esfuerzo. Tratamiento: piridostigmina.',
  exp:'En la miastenia gravis los anticuerpos destruyen o bloquean los receptores nicotínicos de la placa motora. Con menos receptores, cada liberación de acetilcolina produce un potencial de placa insuficiente, sobre todo cuando el terminal libera menos transmisor tras el uso repetido, y por eso la debilidad aparece con el esfuerzo y mejora con el descanso. Los inhibidores de la acetilcolinesterasa, como la piridostigmina, prolongan la acción de la acetilcolina en la hendidura y compensan la pérdida de receptores.',
  no:{
    0:'El terminal presináptico está intacto; el defecto está en el receptor. Es el síndrome de Lambert-Eaton el que afecta la liberación.',
    1:'El exceso de acetilcolinesterasa empeoraría la debilidad, y un bloqueador de receptores agravaría el cuadro.',
    3:'En la lesión de neurona motora superior hay espasticidad e hiperreflexia, no fatiga que se recupera con el reposo.'
  },
  trampa:'Ubicar el defecto en el nervio. Aquí el nervio libera bien la acetilcolina; lo que falla es la recepción en el músculo.',
  obj:'Relacionar la fisiopatología de la miastenia gravis con la unión neuromuscular.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 7.',
  tags:['placa motora','acetilcolina','miastenia gravis','sinapsis','receptor nicotínico']
},
{
  id:'U7-F-Q25', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Sinapsis y transmisión neuromuscular', sub:'Toxina botulínica',
  dif:3, hab:'Comprensión', tipo:'caso', verificado:true,
  caso:'Un lactante de 4 meses, alimentado con una papilla que incluía miel, presenta estreñimiento, llanto débil, pérdida del tono muscular y dificultad para succionar. Se diagnostica botulismo del lactante.',
  enunciado:'¿Cuál es el mecanismo por el cual la toxina produce esta parálisis flácida?',
  ops:['Bloquea los receptores nicotínicos en la placa motora','Inhibe la acetilcolinesterasa y provoca acumulación de acetilcolina','Impide la entrada de sodio en el axón motor','Rompe las proteínas SNARE e impide la liberación de acetilcolina desde el terminal'],
  ok:3,
  clave:'Toxina botulínica → escinde SNARE → no hay exocitosis de acetilcolina → parálisis flácida.',
  exp:'La toxina botulínica es una proteasa que entra en el terminal presináptico y corta las proteínas SNARE, que permiten que las vesículas de acetilcolina se fusionen con la membrana. Sin fusión no hay liberación, la placa motora no recibe señal y el músculo queda paralizado de forma flácida. El mismo mecanismo se emplea en medicina, con dosis mínimas, para tratar el espasmo muscular y la distonía.',
  no:{
    0:'El bloqueo competitivo del receptor nicotínico es el mecanismo del curare, no de la toxina botulínica.',
    1:'Inhibir la acetilcolinesterasa produciría exceso de acetilcolina y cuadro colinérgico (fasciculaciones), como en los organofosforados.',
    2:'El bloqueo de los canales de sodio del axón corresponde a otras toxinas, como la tetrodotoxina; la botulínica actúa en el terminal, no en el axón.'
  },
  trampa:'Confundir los tres sitios donde se puede bloquear la placa: liberación (botulínica), receptor (curare) y degradación (organofosforados, anticolinesterásicos).',
  obj:'Ubicar el sitio de acción de las toxinas que afectan la unión neuromuscular.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 7.',
  tags:['acetilcolina','vesícula','toxina botulínica','sinapsis','neurotransmisor']
},

/* ---------- Contracción del músculo esquelético ---------- */
{
  id:'U7-F-Q26', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Contracción del músculo esquelético', sub:'Acoplamiento excitación-contracción',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'En el músculo esquelético, ¿a qué proteína se une el calcio liberado por el retículo sarcoplásmico para iniciar la contracción?',
  ops:['A la calmodulina','A la cabeza de la miosina','A la tropomiosina','A la troponina C'],
  ok:3,
  clave:'Ca²⁺ → troponina C → la tropomiosina se desplaza → la actina queda libre para los puentes cruzados.',
  exp:'El potencial de acción viaja por los túbulos T y activa receptores sensibles a dihidropiridina, que abren los canales de rianodina del retículo sarcoplásmico y liberan calcio al citoplasma. El calcio se une a la troponina C, y este cambio desplaza la tropomiosina, dejando expuestos los sitios de unión de la actina. Entonces las cabezas de miosina, ya cargadas de ATP hidrolizado, forman puentes cruzados y tiran del filamento delgado.',
  no:{
    0:'La calmodulina es la proteína que capta el calcio en el músculo liso, no en el esquelético.',
    1:'La miosina se une a la actina y usa ATP, pero no es la que capta el calcio.',
    2:'La tropomiosina es la que bloquea los sitios de la actina; se mueve por el cambio que provoca la troponina, no porque el calcio se una a ella.'
  },
  trampa:'Confundir el sensor del calcio del esquelético (troponina C) con el del músculo liso (calmodulina).',
  obj:'Describir el acoplamiento excitación-contracción y quién capta el calcio.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 6.',
  tags:['troponina','calcio','retículo sarcoplásmico','actina','puente cruzado']
},
{
  id:'U7-F-Q27', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Contracción del músculo esquelético', sub:'Relación longitud-tensión',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Si un sarcómero se estira hasta una longitud excesiva (por ejemplo, 3,6 µm), la fuerza que puede generar disminuye. ¿Cuál es la explicación?',
  ops:['Porque los filamentos de actina y miosina casi no se superponen y hay pocos puentes cruzados posibles','Porque se agota el calcio del retículo sarcoplásmico','Porque la troponina deja de responder al calcio','Porque la miosina se degrada al estirarse'],
  ok:0,
  clave:'La fuerza máxima se logra con solapamiento óptimo de filamentos (≈2,0-2,2 µm). Demasiado estirado = pocos puentes cruzados.',
  exp:'La tensión activa depende de cuántos puentes cruzados pueden formarse entre los filamentos gruesos y delgados. Con una longitud de sarcómero de unos 2,0-2,2 µm el solapamiento es óptimo y se genera la fuerza máxima. Si el sarcómero se estira demasiado, los filamentos se separan y el número de puentes posibles cae; si se acorta demasiado, los filamentos delgados chocan entre sí y también baja la fuerza. Esa relación es la base del mecanismo de Frank-Starling en el corazón.',
  no:{
    1:'El calcio disponible no se modifica por la longitud del sarcómero; el estiramiento pasivo no vacía el retículo.',
    2:'La troponina responde igual al calcio; el problema es mecánico, no de señalización.',
    3:'La miosina no se degrada por estiramiento fisiológico; el cambio es en el solapamiento de los filamentos.'
  },
  trampa:'Buscar una explicación bioquímica cuando la causa es puramente geométrica: cuántos puentes cruzados alcanzan a formarse.',
  obj:'Relacionar la longitud del sarcómero con la fuerza de contracción.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 6.',
  tags:['sarcómero','actina','miosina','puente cruzado','longitud-tensión']
},

/* ---------- Músculo liso y cardíaco ---------- */
{
  id:'U7-F-Q28', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Músculo liso y cardíaco', sub:'Contracción del músculo liso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia fundamental tiene el mecanismo de contracción del músculo liso respecto al esquelético?',
  ops:['No usa calcio para iniciar la contracción','El calcio se une a la calmodulina, que activa la cinasa de la cadena ligera de miosina','La contracción depende de la troponina, pero es más lenta','No tiene filamentos de actina ni de miosina'],
  ok:1,
  clave:'Liso: Ca²⁺ + calmodulina → MLCK → fosforilación de la miosina. No hay troponina.',
  exp:'El músculo liso no posee troponina. Al aumentar el calcio intracelular, este se une a la calmodulina y el complejo activa la cinasa de la cadena ligera de miosina, que fosforila la miosina y le permite interactuar con la actina. La relajación requiere que una fosfatasa desfosforile la miosina. Por eso el liso puede mantener tono durante largos periodos con poco gasto de energía, algo esencial en los vasos y los bronquios.',
  no:{
    0:'El calcio sigue siendo el desencadenante; lo que cambia es la proteína que lo capta.',
    2:'La troponina es característica del músculo estriado; el liso usa calmodulina.',
    3:'El músculo liso tiene actina y miosina, aunque no organizadas en sarcómeros regulares.'
  },
  trampa:'Creer que "sin troponina" significa "sin calcio". El calcio también manda en el liso, pero por otra vía.',
  obj:'Comparar la regulación de la contracción en músculo liso y esquelético.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 8.',
  tags:['músculo liso','calmodulina','calcio','contracción']
},
{
  id:'U7-F-Q29', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Músculo liso y cardíaco', sub:'Potencial de acción cardíaco',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el músculo cardíaco no puede entrar en tetania como el esquelético?',
  ops:['Porque no tiene túbulos T','Porque sus fibras no se conectan entre sí','Porque su potencial de acción tiene una meseta larga y el periodo refractario dura casi toda la contracción','Porque no usa calcio para contraerse'],
  ok:2,
  clave:'Meseta por entrada de Ca²⁺ (canales tipo L) → refractario largo → el corazón se relaja entre latidos.',
  exp:'En el miocardio, el potencial de acción dura unos 250-300 ms porque, tras la despolarización, los canales de calcio tipo L mantienen una meseta. Durante ese tiempo la fibra es refractaria y no puede activarse de nuevo, de modo que el corazón se contrae y luego se relaja, lo que permite que las cavidades se llenen. Además, los discos intercalares con sus uniones en hendidura conectan eléctricamente a las células y hacen que el miocardio funcione como un sincitio.',
  no:{
    0:'El miocardio sí tiene túbulos T, incluso más anchos que los del esquelético.',
    1:'Todo lo contrario: las células cardíacas se conectan por uniones en hendidura en los discos intercalares.',
    3:'El calcio es esencial en la contracción cardíaca, tanto el que entra como el liberado por el retículo.'
  },
  trampa:'Pensar que el corazón evita la tetania por ser más lento. La razón es la duración del periodo refractario, no la frecuencia.',
  obj:'Explicar por qué el miocardio no se tetaniza.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 9.',
  tags:['músculo cardíaco','unión en hendidura','meseta','periodo refractario']
},
{
  id:'U7-F-Q30', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Músculo liso y cardíaco', sub:'Marcapasos cardíaco',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el nodo sinusal, y no otra región del corazón, marca el ritmo cardíaco normal?',
  ops:['Porque es la única zona con células autoexcitables','Porque está inervado solo por el sistema simpático','Porque su despolarización diastólica espontánea es la más rápida y alcanza el umbral antes que el resto','Porque es la zona con más masa muscular'],
  ok:2,
  clave:'Automatismo: varias zonas son autoexcitables, pero el nodo sinusal es la más rápida (≈60-100 lpm) y "suprime" a las demás.',
  exp:'Las células del nodo sinusal tienen una fase 4 inestable: se despolarizan poco a poco por sí solas gracias a la corriente "funny" y a la entrada de calcio, hasta alcanzar el umbral. Otras zonas, como el nodo auriculoventricular o el sistema de His-Purkinje, también son autoexcitables, pero su ritmo propio es más lento (40-60 y 20-40 lpm). Como el nodo sinusal se dispara primero, la onda despolarizante llega a esas zonas antes de que alcancen su umbral y las "arrastra".',
  no:{
    0:'No es la única zona autoexcitable; el nodo AV y las fibras de Purkinje también lo son, pero a menor frecuencia.',
    1:'Está inervado por ambos sistemas: el simpático acelera su ritmo y el parasimpático (vago) lo frena.',
    3:'La masa muscular no tiene relación con el automatismo; el nodo sinusal es un tejido especializado y pequeño.'
  },
  trampa:'Aprender "el nodo sinusal es el marcapasos" sin saber por qué. Si falla, el siguiente más rápido toma el mando: eso es lo que ocurre en un ritmo de escape.',
  obj:'Explicar el automatismo cardíaco y la jerarquía de marcapasos.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 10.',
  tags:['automatismo','nodo sinusal','músculo cardíaco','despolarización']
}

]);
