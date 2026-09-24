/* ============================================================
   UNIRMIA — BANCO 10, CUATRIMESTRE 7 — BIOQUÍMICA I (ampliación)
   Segundo lote de 19 preguntas (U7-B-Q32 a Q50). Completa las 50
   de Bioquímica I: gluconeogénesis y alcohol, Krebs, cadena
   respiratoria, lípidos, ácidos nucleicos, termodinámica,
   regulación enzimática y técnicas.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ---------- Glucólisis y gluconeogénesis (cierre) ---------- */
{
  id:'U7-B-Q32', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Glucólisis y gluconeogénesis', sub:'Alcohol y gluconeogénesis',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre con alcoholismo crónico, tras dos días sin comer y con una ingesta importante de alcohol, llega con hipoglucemia y acidosis láctica.',
  enunciado:'¿Cómo explica el metabolismo del etanol esa hipoglucemia?',
  ops:['El etanol eleva la relación NADH/NAD⁺ en el hígado, lo que impide convertir lactato en piruvato y bloquea la gluconeogénesis','El etanol activa la fosfofructoquinasa y consume toda la glucosa','El etanol aumenta la liberación de insulina por el páncreas','El etanol impide la absorción intestinal de glucosa'],
  ok:0,
  clave:'Etanol → acetaldehído: la alcohol y la aldehído deshidrogenasa producen NADH. ↑NADH/NAD⁺ → lactato no pasa a piruvato → sin gluconeogénesis.',
  exp:'Al metabolizarse en el hígado, el etanol genera grandes cantidades de NADH, y la relación NADH/NAD⁺ se eleva. Ese exceso de NADH empuja la lactato deshidrogenasa hacia la formación de lactato y del malato, y así el lactato (sustrato de la gluconeogénesis) y el oxaloacetato no pueden entrar en la vía. En una persona en ayuno, que depende de la gluconeogénesis para mantener la glucemia, el resultado es una hipoglucemia acompañada de acidosis láctica. Es una complicación grave y típica del alcoholismo con mala alimentación.',
  no:{
    1:'El etanol no activa la fosfofructoquinasa; el mecanismo depende del NADH y no de una activación glucolítica.',
    2:'El etanol no estimula la secreción de insulina de forma relevante en este contexto.',
    3:'La absorción de glucosa no se ve alterada; la falla está en la producción hepática.'
  },
  trampa:'Ver solo la falta de comida. El etanol bloquea la gluconeogénesis, por lo que la hipoglucemia aparece con ayunos relativamente cortos.',
  obj:'Explicar la hipoglucemia del alcohol a partir del desequilibrio NADH/NAD⁺.',
  ref:'Lehninger, Principios de Bioquímica, cap. 14 y 23.',
  tags:['gluconeogénesis','lactato','NADH','glucólisis','alcohol']
},

/* ---------- Ciclo de Krebs ---------- */
{
  id:'U7-B-Q33', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Ciclo de Krebs', sub:'Dependencia del oxígeno',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'El ciclo de Krebs no utiliza oxígeno en ninguna de sus reacciones, pero solo funciona en condiciones aerobias. ¿Por qué?',
  ops:['Porque necesita reoxidar el NADH y el FADH₂ que produce, y eso lo hace la cadena respiratoria con el oxígeno como aceptor final','Porque el oxígeno es un sustrato del citrato sintasa','Porque el oxígeno activa la piruvato quinasa','Porque el ciclo ocurre en el citoplasma, donde hay oxígeno libre'],
  ok:0,
  clave:'Krebs → NADH y FADH₂ → cadena respiratoria → O₂. Sin O₂ se acumulan NADH y FADH₂ y se detienen las deshidrogenasas del ciclo.',
  exp:'El ciclo produce por cada acetil-CoA tres NADH, un FADH₂ y un GTP. Para que las deshidrogenasas del ciclo sigan trabajando, el NADH y el FADH₂ deben volver a oxidarse a NAD⁺ y FAD, y eso ocurre en la cadena respiratoria, que necesita oxígeno como aceptor final de electrones. Sin oxígeno, el NADH se acumula, la relación NADH/NAD⁺ sube, y estas enzimas se inhiben. Por eso el ciclo es una vía aerobia por dependencia, aunque no consuma oxígeno directamente.',
  no:{
    1:'El citrato sintasa combina acetil-CoA y oxaloacetato; no usa oxígeno.',
    2:'La piruvato quinasa es una enzima de la glucólisis, y el oxígeno no la activa.',
    3:'El ciclo ocurre en la matriz mitocondrial, y no en el citoplasma.'
  },
  trampa:'Pensar que una reacción es aerobia solo si consume O₂. Puede depender de él de forma indirecta.',
  obj:'Explicar por qué el ciclo de Krebs es dependiente del oxígeno.',
  ref:'Lehninger, Principios de Bioquímica, cap. 16.',
  tags:['ciclo de Krebs','NADH','acetil-CoA','cadena respiratoria']
},
{
  id:'U7-B-Q34', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Ciclo de Krebs', sub:'Vía anfibólica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Se dice que el ciclo de Krebs es una vía anfibólica. ¿Qué significa?',
  ops:['Que participa tanto en el catabolismo (oxidación del acetil-CoA) como en el anabolismo (sus intermediarios sirven de precursores para sintetizar otras moléculas)','Que funciona solo en presencia de oxígeno','Que ocurre en dos compartimentos celulares a la vez','Que solo degrada carbohidratos'],
  ok:0,
  clave:'Anfibólico = catabólico y anabólico. Citrato → ácidos grasos; α-cetoglutarato → glutamato; succinil-CoA → hemo; oxaloacetato → glucosa.',
  exp:'El ciclo de Krebs es el punto de encuentro del metabolismo. Oxida el acetil-CoA procedente de carbohidratos, grasas y proteínas, pero además sus intermediarios se emplean como materia prima: el citrato sale a la síntesis de ácidos grasos y colesterol, el α-cetoglutarato y el oxaloacetato dan lugar a aminoácidos (glutamato y aspartato), el succinil-CoA interviene en la síntesis del grupo hemo y el oxaloacetato se usa en la gluconeogénesis. Cuando se extraen intermediarios, deben reponerse mediante reacciones anapleróticas, como la de la piruvato carboxilasa.',
  no:{
    1:'La dependencia del oxígeno es otra característica, no la que define lo anfibólico.',
    2:'El ciclo ocurre en la matriz mitocondrial; algunas vías anexas tienen partes en el citoplasma, pero no es lo que define el término.',
    3:'Degrada los productos de carbohidratos, grasas y aminoácidos, y no solo carbohidratos.'
  },
  trampa:'Creer que el ciclo es solo una vía de degradación. También suministra bloques para la biosíntesis.',
  obj:'Explicar el carácter anfibólico del ciclo de Krebs.',
  ref:'Lehninger, Principios de Bioquímica, cap. 16.',
  tags:['ciclo de Krebs','citrato','acetil-CoA','oxaloacetato']
},

/* ---------- Cadena respiratoria y fosforilación oxidativa ---------- */
{
  id:'U7-B-Q35', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Cadena respiratoria y fosforilación oxidativa', sub:'NADH y FADH₂',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la oxidación de un FADH₂ produce menos ATP (unos 1,5) que la de un NADH (unos 2,5)?',
  ops:['Porque el FADH₂ cede sus electrones al complejo II, que no bombea protones, mientras que el NADH lo hace al complejo I, que sí los bombea','Porque el FADH₂ tiene menos electrones que el NADH','Porque el FADH₂ no usa la cadena respiratoria','Porque el FADH₂ se oxida fuera de la mitocondria'],
  ok:0,
  clave:'NADH → complejo I (bombea 4 H⁺) → CoQ → III → IV. FADH₂ → complejo II (no bombea) → CoQ → III → IV. Menos protones bombeados = menos ATP.',
  exp:'La energía de la cadena se almacena como gradiente de protones, que después impulsa la ATP sintasa. Los electrones del NADH entran por el complejo I, que bombea protones, y siguen por el III y el IV, que también los bombean. Los del FADH₂ entran por el complejo II (succinato deshidrogenasa) o por otras flavoproteínas, que no bombean protones, y se incorporan a la cadena en la coenzima Q, de modo que se saltan uno de los sitios de bombeo. Con menos protones bombeados, se sintetiza menos ATP.',
  no:{
    1:'Ambos transportan dos electrones; la diferencia está en el punto de entrada.',
    2:'El FADH₂ sí utiliza la cadena respiratoria, por el complejo II.',
    3:'La oxidación del FADH₂ ocurre en la membrana mitocondrial interna, como la del NADH.'
  },
  trampa:'Recordar solo las cifras. El motivo del menor rendimiento es que el complejo II no bombea protones.',
  obj:'Relacionar el punto de entrada de los electrones con el rendimiento de ATP.',
  ref:'Lehninger, Principios de Bioquímica, cap. 19.',
  tags:['cadena respiratoria','citocromo','NADH','gradiente de protones','ATP sintasa']
},
{
  id:'U7-B-Q36', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Cadena respiratoria y fosforilación oxidativa', sub:'Intoxicación por cianuro',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre rescatado de un incendio en un edificio llega inconsciente, con la piel rosada, taquipnea y lactato muy elevado. La sangre venosa tiene un color rojo brillante. Se sospecha intoxicación por cianuro, liberado por la combustión de plásticos.',
  enunciado:'¿Qué complejo bloquea el cianuro y por qué la sangre venosa es tan roja?',
  ops:['El complejo IV (citocromo c oxidasa); las células no pueden usar el oxígeno, y la sangre venosa conserva su oxígeno','El complejo I; las células usan más oxígeno del normal','La ATP sintasa; la hemoglobina no libera el oxígeno','El complejo II; se produce un exceso de oxígeno en las células'],
  ok:0,
  clave:'Cianuro (y CO, azida) → complejo IV. La cadena se detiene, cae el ATP, sube el lactato y las venas conservan el O₂ sin usar.',
  exp:'El cianuro se une al hierro del citocromo c oxidasa (complejo IV) e impide que transfiera los electrones al oxígeno. La cadena respiratoria se detiene, el gradiente de protones se disipa y la síntesis de ATP se hunde; las células pasan a la glucólisis anaerobia y se produce acidosis láctica. Como los tejidos no pueden aprovechar el oxígeno, la sangre venosa vuelve casi tan oxigenada como la arterial, y por eso tiene un color rojo brillante y la piel es rosada. Se trata con hidroxocobalamina, que se une al cianuro.',
  no:{
    1:'El bloqueo del complejo I se produce con rotenona; además, las células no consumirían más oxígeno sino menos.',
    2:'La ATP sintasa se inhibe con oligomicina, y la hemoglobina libera el oxígeno normalmente.',
    3:'El complejo II no es la diana del cianuro, y no hay exceso de oxígeno "producido" sino oxígeno no utilizado.'
  },
  trampa:'Confundir las causas de hipoxia. Aquí el oxígeno llega bien a los tejidos, y el problema es que no se puede utilizar.',
  obj:'Relacionar el bloqueo de la cadena respiratoria con el cuadro clínico de la intoxicación por cianuro.',
  ref:'Lehninger, Principios de Bioquímica, cap. 19.',
  tags:['cadena respiratoria','citocromo','cianuro','ATP sintasa']
},
{
  id:'U7-B-Q37', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Cadena respiratoria y fosforilación oxidativa', sub:'Teoría quimiosmótica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Según la teoría quimiosmótica de Mitchell, ¿qué energía impulsa a la ATP sintasa a producir ATP?',
  ops:['El flujo de protones a favor de su gradiente desde el espacio intermembrana hacia la matriz, a través del componente F₀','La hidrólisis directa de NADH por la enzima','El paso de electrones directamente al ADP','La difusión del oxígeno hacia la matriz'],
  ok:0,
  clave:'La cadena bombea H⁺ al espacio intermembrana; el retorno de H⁺ por F₀ mueve la parte F₁, que sintetiza ATP.',
  exp:'Los complejos I, III y IV bombean protones desde la matriz al espacio intermembrana, y crean un gradiente electroquímico (fuerza protomotriz). La ATP sintasa tiene un canal de protones (F₀) y una cabeza catalítica (F₁): cuando los protones vuelven a la matriz por F₀, hacen girar una parte de la enzima, y ese movimiento provoca los cambios de conformación de F₁ que sintetizan ATP a partir de ADP y fosfato. Los desacoplantes, como el 2,4-dinitrofenol, permiten que los protones regresen sin pasar por la ATP sintasa, y la energía se libera como calor.',
  no:{
    1:'El NADH cede electrones a la cadena, y la ATP sintasa no lo hidroliza.',
    2:'Los electrones no pasan al ADP; van al oxígeno.',
    3:'El oxígeno es el aceptor final de electrones, y su difusión no proporciona la energía para sintetizar ATP.'
  },
  trampa:'Creer que el ATP se forma directamente en los complejos de la cadena. Se forma en la ATP sintasa, movida por el gradiente de protones.',
  obj:'Explicar el mecanismo quimiosmótico de la fosforilación oxidativa.',
  ref:'Lehninger, Principios de Bioquímica, cap. 19.',
  tags:['cadena respiratoria','ATP sintasa','gradiente de protones','quimiosmótica']
},

/* ---------- Lípidos: estructura y membranas ---------- */
{
  id:'U7-B-Q38', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Lípidos: estructura y membranas', sub:'Ácidos grasos saturados e insaturados',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'La grasa de un pescado es líquida a temperatura ambiente, mientras que la grasa de la carne de vaca es sólida. ¿Qué explica esa diferencia?',
  ops:['El pescado contiene más ácidos grasos insaturados cis, cuyas dobles enlaces doblan la cadena e impiden un empaquetamiento apretado','El pescado contiene más ácidos grasos saturados','La grasa de pescado no contiene triglicéridos','La carne de vaca contiene ácidos grasos con dobles enlaces trans en todas sus cadenas'],
  ok:0,
  clave:'Saturados = cadenas rectas, se empaquetan (sólidos). Insaturados cis = cadenas dobladas, no se empaquetan (líquidos).',
  exp:'Los ácidos grasos saturados tienen cadenas rectas que se apilan de forma compacta y con muchas interacciones, y funden a temperaturas más altas: las grasas animales terrestres son sólidas. Los ácidos grasos insaturados con dobles enlaces cis tienen un "codo" que impide el empaquetamiento ordenado, y por eso son líquidos a temperatura ambiente, como los aceites vegetales y los de pescado. Los omega-3 del pescado (EPA y DHA) tienen efectos beneficiosos cardiovasculares. Los enlaces trans, en cambio, dejan la cadena recta y se comportan casi como saturados.',
  no:{
    1:'Sería lo contrario: más saturados darían una grasa sólida.',
    2:'La grasa de pescado, como cualquier grasa, está formada sobre todo por triglicéridos.',
    3:'Los enlaces trans se encuentran sobre todo en grasas procesadas, y no son la norma de la carne de vaca.'
  },
  trampa:'Creer que las grasas "líquidas" tienen una estructura diferente de los triglicéridos. La diferencia está en el grado de insaturación de sus ácidos grasos.',
  obj:'Relacionar la insaturación de los ácidos grasos con el punto de fusión y la fluidez.',
  ref:'Lehninger, Principios de Bioquímica, cap. 10.',
  tags:['ácido graso','saturado','triglicérido','insaturado']
},
{
  id:'U7-B-Q39', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Lípidos: estructura y membranas', sub:'Surfactante pulmonar',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un prematuro de 30 semanas presenta, desde el nacimiento, quejido, retracciones costales y cianosis. La radiografía muestra un patrón reticulogranular difuso. Se diagnostica síndrome de dificultad respiratoria por déficit de surfactante.',
  enunciado:'¿Qué molécula es el componente principal del surfactante y cuál es su función?',
  ops:['Dipalmitoilfosfatidilcolina (un fosfolípido), que reduce la tensión superficial en los alvéolos e impide su colapso','Colesterol, que aumenta la rigidez del alvéolo','Triglicéridos, que almacenan energía en el pulmón','Glucógeno, que rellena el espacio alveolar'],
  ok:0,
  clave:'Surfactante = fosfolípido anfipático (DPPC) que reduce la tensión superficial alveolar. Lo producen los neumocitos II desde la semana 24-28.',
  exp:'El surfactante pulmonar está formado sobre todo por dipalmitoilfosfatidilcolina, un fosfolípido con dos cadenas saturadas de ácido palmítico y una cabeza polar. Se coloca en la interfaz aire-líquido del alvéolo con las colas hacia el aire y reduce la tensión superficial, que tiende a colapsar los alvéolos al espirar. Los neumocitos tipo II lo sintetizan desde la semana 24-28, y su producción madura hacia la 34-36; el prematuro puede no tener suficiente. Se trata con surfactante exógeno y, antes del parto, con corticoides que aceleran su maduración.',
  no:{
    1:'El colesterol es un componente minoritario del surfactante y no explica su acción.',
    2:'Los triglicéridos son moléculas de reserva y no reducen la tensión superficial.',
    3:'El glucógeno es una reserva de glucosa y no interviene en la mecánica alveolar.'
  },
  trampa:'Creer que el surfactante es una proteína. Su componente principal es un fosfolípido (con pequeñas cantidades de proteínas específicas).',
  obj:'Relacionar la estructura anfipática de los fosfolípidos con su función en el surfactante pulmonar.',
  ref:'Lehninger, Principios de Bioquímica, cap. 10 y 11.',
  tags:['fosfolípido','ácido graso','saturado','surfactante']
},
{
  id:'U7-B-Q40', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Lípidos: estructura y membranas', sub:'Triglicéridos y quilomicrones',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre con pancreatitis aguda tiene un plasma de aspecto lechoso, con triglicéridos de 2.500 mg/dL. Tras dejar el tubo en reposo en la nevera, se forma una capa cremosa en la superficie.',
  enunciado:'¿Qué lipoproteína forma esa capa, y qué transporta?',
  ops:['Quilomicrones, que transportan los triglicéridos de la dieta desde el intestino','LDL, que transportan colesterol hacia los tejidos','HDL, que transportan colesterol al hígado','Ácidos grasos libres unidos a la albúmina'],
  ok:0,
  clave:'Quilomicrones = mayor tamaño, menor densidad, triglicéridos de la dieta; flotan formando una capa cremosa. VLDL = triglicéridos endógenos.',
  exp:'Los quilomicrones se forman en los enterocitos a partir de los lípidos de la dieta y son las lipoproteínas más grandes y menos densas, con una gran proporción de triglicéridos. Al ser tan poco densos, flotan cuando se deja el plasma en reposo y forman una capa cremosa. La lipoproteína lipasa de los capilares hidroliza sus triglicéridos, y los restos son captados por el hígado. Cuando la lipoproteína lipasa falla o hay una ingesta enorme, se acumulan y pueden provocar pancreatitis.',
  no:{
    1:'Las LDL son pequeñas y densas, y no forman una capa cremosa.',
    2:'Las HDL son las más densas y transportan colesterol desde los tejidos hacia el hígado.',
    3:'Los ácidos grasos libres viajan con la albúmina, que es soluble y no flota.'
  },
  trampa:'Confundir el origen: los quilomicrones llevan la grasa de la dieta; las VLDL, la que produce el hígado.',
  obj:'Reconocer el papel de los quilomicrones en el transporte de los triglicéridos.',
  ref:'Lehninger, Principios de Bioquímica, cap. 10 y 21.',
  tags:['triglicérido','ácido graso','lipoproteína','colesterol']
},

/* ---------- Ácidos nucleicos ---------- */
{
  id:'U7-B-Q41', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Ácidos nucleicos: estructura del ADN y ARN', sub:'Reglas de Chargaff',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'En una muestra de ADN de doble cadena, el 30 % de las bases es adenina. ¿Qué porcentaje es guanina?',
  ops:['20 %','30 %','40 %','70 %'],
  ok:0,
  clave:'Chargaff: A = T y G = C. Si A = 30 %, T = 30 %, y G + C = 40 %, es decir, G = 20 %.',
  exp:'En el ADN de doble cadena, cada adenina se aparea con una timina (dos puentes de hidrógeno) y cada guanina con una citosina (tres puentes de hidrógeno), de modo que A = T y G = C. Si la adenina es el 30 %, la timina también lo es, y entre las dos suman el 60 %. El 40 % restante corresponde a guanina y citosina, a partes iguales: 20 % cada una. Las regiones ricas en G-C son más estables, por el tercer puente de hidrógeno, y requieren más temperatura para separarse.',
  no:{
    1:'El 30 % es la cantidad de timina, que se aparea con la adenina, no de guanina.',
    2:'El 40 % es la suma de guanina y citosina, y no la de cada una.',
    3:'El 70 % sería el complemento de la adenina, sin tener en cuenta el apareamiento de bases.'
  },
  trampa:'Restar 100 − 30 y dar 70. Hay que recordar que la timina (30 %) también aparece en la cuenta.',
  obj:'Aplicar las reglas de Chargaff para calcular la composición de bases del ADN.',
  ref:'Lehninger, Principios de Bioquímica, cap. 8.',
  tags:['doble hélice','base nitrogenada','nucleótido','ADN']
},
{
  id:'U7-B-Q42', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Ácidos nucleicos: estructura del ADN y ARN', sub:'Diferencias entre ADN y ARN',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el ADN es químicamente más estable que el ARN, y por eso adecuado para almacenar la información genética?',
  ops:['Porque su azúcar, la desoxirribosa, carece del grupo hidroxilo en el carbono 2, que en el ARN facilita la hidrólisis del enlace fosfodiéster','Porque contiene uracilo, que es más estable que la timina','Porque es una molécula monocatenaria','Porque sus bases no forman puentes de hidrógeno'],
  ok:0,
  clave:'ARN: ribosa (2′-OH), uracilo, monocatenario, lábil. ADN: desoxirribosa, timina, doble cadena, estable.',
  exp:'El grupo hidroxilo del carbono 2′ de la ribosa puede atacar al enlace fosfodiéster vecino y romper la cadena, sobre todo en medio alcalino, lo que hace que el ARN sea químicamente inestable. La desoxirribosa carece de ese hidroxilo y por eso el ADN es mucho más estable. Además, el ADN contiene timina (con un grupo metilo) en lugar de uracilo, lo que facilita reconocer y reparar la citosina que se ha desaminado, y es bicatenario, lo que protege sus bases dentro de la doble hélice.',
  no:{
    1:'El uracilo es propio del ARN, y no del ADN, que tiene timina.',
    2:'El ADN es bicatenario; el ARN suele ser monocatenario.',
    3:'Las bases del ADN forman puentes de hidrógeno, que mantienen unidas las dos cadenas.'
  },
  trampa:'Recordar solo "timina vs uracilo" y "ribosa vs desoxirribosa" sin asociar a cada diferencia su consecuencia.',
  obj:'Comparar la estructura química del ADN y del ARN y su relación con la función.',
  ref:'Lehninger, Principios de Bioquímica, cap. 8.',
  tags:['ARN mensajero','nucleótido','enlace fosfodiéster','base nitrogenada']
},
{
  id:'U7-B-Q43', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Ácidos nucleicos: estructura del ADN y ARN', sub:'Purinas y gota',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre de 50 años despierta de madrugada con dolor intensísimo, enrojecimiento e hinchazón de la articulación del dedo gordo del pie. El líquido articular muestra cristales en forma de aguja, birrefringentes negativos, de urato monosódico.',
  enunciado:'¿De qué proviene el ácido úrico y qué enzima se inhibe para tratar la enfermedad?',
  ops:['Es el producto final del catabolismo de las purinas (adenina y guanina); se trata con alopurinol, que inhibe la xantina oxidasa','Es el producto final del catabolismo de las pirimidinas; se trata con alopurinol','Proviene de la degradación de los ácidos grasos; se trata con aspirina','Proviene del ciclo de la urea; se trata con insulina'],
  ok:0,
  clave:'Purinas → hipoxantina → xantina → ácido úrico (xantina oxidasa). Gota: cristales de urato. Alopurinol/febuxostat inhiben la xantina oxidasa.',
  exp:'Los nucleótidos de purina (adenina y guanina) se degradan a hipoxantina y xantina, y la xantina oxidasa las convierte en ácido úrico, que se elimina sobre todo por el riñón. Cuando se produce en exceso, o se elimina poco, sube en sangre y puede cristalizar en las articulaciones como urato monosódico, lo que desencadena una inflamación aguda: la gota. El alopurinol y el febuxostat inhiben la xantina oxidasa, y reducen la producción de ácido úrico. Las pirimidinas, en cambio, se degradan a productos solubles.',
  no:{
    1:'Las pirimidinas no producen ácido úrico; su degradación da beta-alanina y otros compuestos solubles.',
    2:'Los ácidos grasos no dan ácido úrico, y la aspirina no es el tratamiento de la hiperuricemia.',
    3:'La urea proviene del catabolismo de los aminoácidos; el ácido úrico es distinto y no depende de la insulina.'
  },
  trampa:'Confundir urea (catabolismo de aminoácidos) con ácido úrico (catabolismo de purinas).',
  obj:'Relacionar el metabolismo de las purinas con la gota y su tratamiento.',
  ref:'Lehninger, Principios de Bioquímica, cap. 22.',
  tags:['nucleótido','base nitrogenada','purina','ácido úrico','doble hélice']
},

/* ---------- Termodinámica bioquímica y energía libre ---------- */
{
  id:'U7-B-Q44', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Termodinámica bioquímica y energía libre', sub:'Acoplamiento con ATP',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo logra la célula que se produzca una reacción endergónica (ΔG positivo), como la fosforilación de la glucosa?',
  ops:['Acoplándola a una reacción muy exergónica, como la hidrólisis del ATP, de modo que el ΔG global sea negativo','Elevando la temperatura hasta que la reacción se vuelva espontánea','Aumentando el ΔG de la reacción con un catalizador','Sin necesidad de energía, porque toda reacción en la célula es espontánea'],
  ok:0,
  clave:'ATP + H₂O → ADP + Pi: ΔG°′ ≈ −30,5 kJ/mol. Se suma al ΔG de la reacción desfavorable y da un ΔG global negativo.',
  exp:'Una reacción con ΔG positivo no ocurre por sí sola. La célula la impulsa mediante el acoplamiento con otra muy exergónica, y la más habitual es la hidrólisis del ATP (ΔG°′ ≈ −30,5 kJ/mol). Como los valores de ΔG son aditivos, si la suma es negativa, el proceso global es espontáneo. En la primera reacción de la glucólisis, la hexoquinasa transfiere el fosfato del ATP a la glucosa: la glucosa + Pi tiene un ΔG°′ de +13,8 kJ/mol, pero acoplada a la hidrólisis del ATP, el conjunto es de −16,7 kJ/mol.',
  no:{
    1:'Los organismos no elevan su temperatura para impulsar las reacciones; las enzimas y el acoplamiento hacen ese trabajo.',
    2:'Un catalizador acelera la reacción pero no modifica el ΔG ni convierte una reacción desfavorable en favorable.',
    3:'No toda reacción es espontánea; por eso la célula necesita un aporte continuo de energía.'
  },
  trampa:'Creer que las enzimas "dan energía" a las reacciones. Solo aceleran las reacciones que ya son termodinámicamente posibles.',
  obj:'Explicar el acoplamiento energético y el papel del ATP.',
  ref:'Lehninger, Principios de Bioquímica, cap. 13.',
  tags:['energía libre de Gibbs','reacción endergónica','reacción exergónica','ATP como moneda energética']
},
{
  id:'U7-B-Q45', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Termodinámica bioquímica y energía libre', sub:'ΔG y ΔG°′',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Una reacción tiene un ΔG°′ positivo, pero en la célula ocurre sin problema. ¿Cuál es la explicación más probable?',
  ops:['El ΔG real depende de las concentraciones de reactivos y productos; si el producto se consume rápido y su concentración es baja, el ΔG real puede ser negativo','El ΔG°′ no tiene ninguna relación con el sentido de la reacción','La reacción es exergónica porque el ΔG°′ positivo indica que libera energía','Las enzimas modifican el ΔG°′ de la reacción'],
  ok:0,
  clave:'ΔG = ΔG°′ + RT ln([productos]/[reactivos]). ΔG < 0: espontánea. ΔG = 0: equilibrio. Concentraciones celulares ≠ condiciones estándar.',
  exp:'El ΔG°′ describe la reacción en condiciones estándar, con 1 M de reactivos y productos. En la célula, las concentraciones son distintas, y el ΔG real incluye el término RT ln([productos]/[reactivos]). Si el producto se retira con rapidez, por ejemplo porque es sustrato de la reacción siguiente, ese cociente es pequeño y el ΔG real puede ser negativo, aunque el ΔG°′ sea positivo. Es lo que ocurre con varias reacciones de la glucólisis, que funcionan porque forman parte de una vía en la que los productos se consumen continuamente.',
  no:{
    1:'El ΔG°′ informa sobre la posición del equilibrio, y sí se relaciona con el sentido de la reacción, pero no es lo único que cuenta.',
    2:'Un ΔG positivo indica que la reacción requiere energía (endergónica), y no que la libera.',
    3:'Las enzimas no modifican el ΔG°′; solo la velocidad con la que se alcanza el equilibrio.'
  },
  trampa:'Confundir ΔG°′ (condiciones estándar) con ΔG (condiciones reales). Lo que decide el sentido es el ΔG.',
  obj:'Diferenciar el ΔG°′ del ΔG real y explicar el papel de las concentraciones.',
  ref:'Lehninger, Principios de Bioquímica, cap. 13.',
  tags:['energía libre de Gibbs','reacción exergónica','reacción endergónica','equilibrio']
},

/* ---------- Regulación alostérica y covalente de enzimas ---------- */
{
  id:'U7-B-Q46', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Regulación alostérica y covalente de enzimas', sub:'Enzimas alostéricas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica distingue a una enzima alostérica de una enzima que sigue la cinética clásica de Michaelis-Menten?',
  ops:['Tiene sitios reguladores distintos del sitio activo y una curva de velocidad sigmoidea frente a la concentración de sustrato','Solo tiene un sitio activo y una curva hiperbólica','No es una proteína','Actúa solo en presencia de un inhibidor competitivo'],
  ok:0,
  clave:'Alostérica: subunidades múltiples, cooperatividad (curva sigmoide) y moduladores (activadores/inhibidores) que se unen fuera del sitio activo.',
  exp:'Las enzimas alostéricas suelen constar de varias subunidades, con sitios reguladores separados del sitio activo. Los moduladores (activadores e inhibidores) que se unen a ellos modifican la conformación de la enzima y, con ella, su afinidad por el sustrato. Por la cooperatividad entre subunidades, su curva de velocidad frente al sustrato es sigmoidea, y no hiperbólica, lo que la hace muy sensible a pequeños cambios de concentración. Las enzimas clave de las vías (como la fosfofructoquinasa-1) son alostéricas.',
  no:{
    1:'Un solo sitio y una curva hiperbólica son propios de las enzimas michaelianas.',
    2:'Las enzimas alostéricas también son proteínas, con estructura cuaternaria.',
    3:'No dependen de un inhibidor competitivo, que actuaría sobre el sitio activo.'
  },
  trampa:'Creer que alostérico significa "inhibidor". Los moduladores pueden ser activadores o inhibidores.',
  obj:'Describir las propiedades de las enzimas alostéricas.',
  ref:'Lehninger, Principios de Bioquímica, cap. 6.',
  tags:['regulación alostérica','alostérico','enzima','retroalimentación negativa enzimática']
},
{
  id:'U7-B-Q47', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Regulación alostérica y covalente de enzimas', sub:'Fosforilación de enzimas',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Durante una carrera, la adrenalina se une a receptores del músculo y del hígado, y activa una cascada que fosforila enzimas del metabolismo del glucógeno.',
  enunciado:'¿Qué efecto tiene esa fosforilación sobre la glucógeno fosforilasa y la glucógeno sintasa?',
  ops:['Activa la glucógeno fosforilasa (degradación) e inactiva la glucógeno sintasa (síntesis)','Inactiva la fosforilasa y activa la sintasa','Activa las dos','Inactiva las dos'],
  ok:0,
  clave:'Adrenalina/glucagón → AMPc → PKA → fosforilasa activa (glucógeno se degrada) y sintasa inactiva. La insulina hace lo contrario.',
  exp:'La regulación covalente consiste en añadir o quitar un grupo fosfato a la enzima, lo que cambia su actividad. La adrenalina y el glucagón aumentan el AMP cíclico, activan la proteína cinasa A y esta activa, por una cascada de fosforilaciones, la glucógeno fosforilasa, y fosforila e inactiva la glucógeno sintasa: así, el glucógeno se degrada y no se sintetiza a la vez. La insulina activa fosfatasas que revierten las fosforilaciones y favorece la síntesis. Es un ejemplo de cómo una señal hormonal coordina las vías opuestas para evitar un ciclo inútil.',
  no:{
    1:'Sería lo contrario de lo que necesita un músculo que trabaja: síntesis de reservas en lugar de degradación.',
    2:'Activar las dos vías provocaría un ciclo fútil, con gasto de ATP sin beneficio.',
    3:'Inactivar ambas dejaría el glucógeno sin uso, sin poder aportar energía durante el esfuerzo.'
  },
  trampa:'Creer que la fosforilación siempre activa. Activa la fosforilasa, pero inactiva la sintasa.',
  obj:'Explicar la regulación covalente del metabolismo del glucógeno por hormonas.',
  ref:'Lehninger, Principios de Bioquímica, cap. 15.',
  tags:['fosforilación de enzimas','regulación alostérica','glucógeno','adrenalina']
},
{
  id:'U7-B-Q48', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Regulación alostérica y covalente de enzimas', sub:'Isoenzimas',
  dif:1, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre de 58 años acude con dolor torácico opresivo. Se solicita una analítica y se mide la creatina cinasa (CK) total y sus isoenzimas.',
  enunciado:'¿Qué isoenzima de la CK, propia sobre todo del músculo cardíaco, aumenta en el infarto de miocardio?',
  ops:['CK-MB','CK-MM','CK-BB','LDH-5'],
  ok:0,
  clave:'Isoenzimas = formas de una enzima con la misma función y distinta estructura y distribución. CK-MM: músculo; CK-MB: corazón; CK-BB: cerebro.',
  exp:'Las isoenzimas catalizan la misma reacción, pero son proteínas distintas, con diferente distribución en los tejidos. La CK es un dímero de las subunidades M y B: la CK-MM predomina en el músculo esquelético, la CK-MB en el músculo cardíaco y la CK-BB en el cerebro. Tras un infarto, la CK-MB aumenta a las 4-6 horas y alcanza un máximo a las 24 horas. Hoy se prefiere la troponina como marcador, más sensible y específico, pero la CK-MB sigue siendo útil para detectar un reinfarto.',
  no:{
    1:'La CK-MM es la forma del músculo esquelético, y aumenta en la rabdomiólisis y las lesiones musculares.',
    2:'La CK-BB es la forma cerebral, y su aumento en sangre es infrecuente.',
    3:'La LDH-5 predomina en el hígado y en el músculo esquelético; es la LDH-1 la que se asocia al corazón.'
  },
  trampa:'Asociar cualquier aumento de CK total con el corazón. Lo específico es la fracción MB.',
  obj:'Explicar el concepto de isoenzima y su utilidad diagnóstica.',
  ref:'Lehninger, Principios de Bioquímica, cap. 6. Harper, Bioquímica Ilustrada.',
  tags:['isoenzima','enzima','regulación alostérica','creatina cinasa']
},

/* ---------- Técnicas bioquímicas básicas ---------- */
{
  id:'U7-B-Q49', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Técnicas bioquímicas básicas', sub:'Electroforesis de hemoglobina',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un lactante con anemia hemolítica y crisis dolorosas recibe una electroforesis de hemoglobina a pH alcalino. La banda de su hemoglobina anómala migra más lentamente hacia el ánodo que la de la hemoglobina normal.',
  enunciado:'¿Por qué la HbS migra de forma distinta a la HbA?',
  ops:['Porque la sustitución de glutamato (cargado negativamente) por valina (neutra) reduce su carga negativa neta','Porque la HbS es más grande que la HbA','Porque la HbS contiene un grupo hemo adicional','Porque la HbS no tiene cadenas alfa'],
  ok:0,
  clave:'Electroforesis: separa por carga (y tamaño). HbS: Glu → Val, pierde una carga negativa, migra más lento hacia el ánodo.',
  exp:'En la electroforesis, las proteínas migran en un campo eléctrico según su carga neta. A pH alcalino, la hemoglobina tiene carga negativa y se dirige al ánodo. La hemoglobina S tiene una valina en lugar de un ácido glutámico, lo que elimina una carga negativa: su carga neta es menos negativa y migra más lentamente que la HbA. Así se diferencian HbA, HbS y HbC, que tiene lisina en lugar de glutamato y migra todavía más despacio. Es una técnica básica para el diagnóstico de hemoglobinopatías.',
  no:{
    1:'El cambio afecta a un solo aminoácido, y no altera de forma apreciable el tamaño de la molécula.',
    2:'La HbS tiene la misma cantidad de grupos hemo que la HbA: cuatro.',
    3:'La HbS tiene cadenas alfa normales, y la mutación afecta a las cadenas beta.'
  },
  trampa:'Atribuir la diferencia de migración al tamaño. En esta técnica, y con un cambio de un solo aminoácido, manda la carga.',
  obj:'Interpretar los resultados de una electroforesis de proteínas.',
  ref:'Lehninger, Principios de Bioquímica, cap. 3 y 5.',
  tags:['electroforesis','hemoglobina','carga','técnicas bioquímicas']
},
{
  id:'U7-B-Q50', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Técnicas bioquímicas básicas', sub:'Espectrofotometría',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Para medir la actividad de la lactato deshidrogenasa, se sigue en un espectrofotómetro la absorbancia a 340 nm de una mezcla que contiene lactato y NAD⁺. La absorbancia aumenta de forma lineal con el tiempo.',
  enunciado:'¿Qué indica ese aumento y en qué principio se basa la medida?',
  ops:['Se forma NADH, que absorbe a 340 nm; y según la ley de Beer-Lambert, la absorbancia es proporcional a su concentración','Se consume NAD⁺, que absorbe a 340 nm, y la absorbancia disminuye con su concentración','Se forma lactato, que absorbe a 340 nm','La enzima se desnaturaliza y absorbe más luz'],
  ok:0,
  clave:'Beer-Lambert: A = ε · c · l. NADH absorbe a 340 nm; el NAD⁺ no. Aumento de A₃₄₀ = producción de NADH.',
  exp:'La espectrofotometría mide cuánta luz de una longitud de onda absorbe una solución. La ley de Beer-Lambert establece que la absorbancia es proporcional a la concentración de la sustancia absorbente (A = ε · c · l, con ε el coeficiente de extinción y l la longitud del paso de luz). El NADH absorbe a 340 nm, mientras que el NAD⁺ no. Por eso, en las reacciones de las deshidrogenasas, el aumento de la absorbancia a 340 nm equivale a la formación de NADH, y su velocidad mide la actividad de la enzima. Es la base de muchas determinaciones de laboratorio.',
  no:{
    1:'El NAD⁺ no absorbe de forma relevante a 340 nm, y su consumo no es lo que se mide.',
    2:'El lactato no absorbe a esa longitud de onda.',
    3:'La absorbancia lineal con el tiempo refleja una reacción en curso, y no una desnaturalización.'
  },
  trampa:'Creer que la absorbancia aumenta si baja la concentración. Es directamente proporcional: más NADH, más absorbancia.',
  obj:'Aplicar la ley de Beer-Lambert al seguimiento de una reacción enzimática.',
  ref:'Lehninger, Principios de Bioquímica, cap. 3 y 6.',
  tags:['espectrofotometría','NADH','Beer-Lambert','técnicas bioquímicas']
}

]);
