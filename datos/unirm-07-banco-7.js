/* ============================================================
   UNIRMIA — BANCO 7, CUATRIMESTRE 7 — HISTOLOGÍA (ampliación)
   Primer lote de 20 preguntas (U7-H-Q10 a Q29). Con el banco 8
   llevan la materia de 9 a 50 preguntas y cubren los 13 temas del
   temario. Mismo estándar que el resto: dato clave, explicación de
   por qué falla cada opción, trampa y bibliografía. El orden de las
   opciones lo reparte datos/unirm-orden-opciones.js.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ---------- Técnica histológica y tinciones ---------- */
{
  id:'U7-H-Q10', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Técnica histológica y tinciones', sub:'Fijación',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la finalidad de la fijación, el primer paso del procesamiento de un tejido para el microscopio?',
  ops:['Detener la degradación del tejido y conservar su estructura lo más parecida posible a la del tejido vivo','Dar color a las estructuras para que se distingan entre sí','Endurecer el tejido con parafina para poder cortarlo en láminas finas','Eliminar el agua del tejido para que pueda teñirse'],
  ok:0,
  clave:'Fijación (formalina) = detiene la autolisis y estabiliza las proteínas. Después: inclusión, corte y tinción.',
  exp:'Un tejido extraído empieza a degradarse en minutos por sus propias enzimas (autolisis) y por las bacterias. La fijación, casi siempre con formalina, entrecruza las proteínas, inactiva las enzimas y mantiene las células en la posición y la forma que tenían en vida. Sin una buena fijación, todo lo que sigue —inclusión, corte, tinción— trabaja sobre un tejido ya dañado, y el diagnóstico se vuelve poco fiable.',
  no:{
    1:'Dar color es la función de la tinción, que ocurre al final del proceso.',
    2:'Endurecer con parafina es la inclusión, un paso posterior a la fijación.',
    3:'Quitar el agua es la deshidratación, que prepara el tejido para la inclusión.'
  },
  trampa:'Confundir el orden de los pasos: fijar, deshidratar, incluir, cortar y teñir. Cada paso tiene una función distinta.',
  obj:'Ordenar los pasos del procesamiento histológico y explicar la finalidad de la fijación.',
  ref:'Junqueira, Histología Básica, cap. 1.',
  tags:['fijación','inclusión','técnica histológica','formalina']
},
{
  id:'U7-H-Q11', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Técnica histológica y tinciones', sub:'Hematoxilina y eosina',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un corte teñido con hematoxilina y eosina de una glándula que sintetiza grandes cantidades de proteína para secretar, la base de las células se ve de color azul-violeta intenso, mientras que el resto del citoplasma es rosado.',
  enunciado:'¿A qué se debe la basofilia de la base de esas células?',
  ops:['A la abundancia de retículo endoplasmático rugoso y de ribosomas, ricos en ARN, que atraen a la hematoxilina','A los gránulos de secreción, que son ricos en proteínas básicas','A la presencia de glucógeno, que capta la hematoxilina','A los lípidos del citoplasma, que se tiñen con hematoxilina'],
  ok:0,
  clave:'Hematoxilina (básica) tiñe lo ácido = basófilo: ADN, ARN, ribosomas. Eosina (ácida) tiñe lo básico = acidófilo: proteínas citoplasmáticas.',
  exp:'La hematoxilina se comporta como un colorante básico y se une a las moléculas con carga negativa: el ADN del núcleo y el ARN de los ribosomas. Por eso los núcleos se ven azul-violeta, y también el citoplasma de las células con mucho retículo endoplasmático rugoso, como las que fabrican proteínas para exportar. La eosina, ácida, tiñe de rosa las proteínas del citoplasma. Una basofilia citoplasmática marcada es, por tanto, una señal de síntesis proteica activa.',
  no:{
    1:'Las proteínas básicas de los gránulos se tiñen con eosina, no con hematoxilina: serían acidófilas.',
    2:'El glucógeno se pierde en la técnica habitual de H&E o se ve como espacios claros; para verlo se usa PAS.',
    3:'Los lípidos se disuelven con los alcoholes y xilol del procesamiento, y dejan espacios vacíos, no un color azul.'
  },
  trampa:'Pensar que basófilo significa "que contiene bases". Basófilo es lo que atrae al colorante básico, o sea, lo que tiene carga negativa (ácidos nucleicos).',
  obj:'Relacionar la basofilia y la acidofilia con la composición química de las estructuras celulares.',
  ref:'Junqueira, Histología Básica, cap. 1.',
  tags:['hematoxilina','eosina','basófilo','acidófilo','retículo endoplasmático rugoso']
},
{
  id:'U7-H-Q12', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Técnica histológica y tinciones', sub:'Reacción de PAS',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'La técnica del ácido peryódico de Schiff (PAS) tiñe de color magenta las estructuras ricas en:',
  ops:['Carbohidratos, como el glucógeno, las mucinas y la membrana basal','ADN nuclear','Fosfolípidos de las membranas','Fibras elásticas'],
  ok:0,
  clave:'PAS = hidratos de carbono (glucógeno, mucinas, glucoproteínas, membrana basal) en magenta.',
  exp:'El ácido peryódico oxida los azúcares y forma grupos aldehído, que reaccionan con el reactivo de Schiff y dan un color magenta. Por eso el PAS resalta el glucógeno de los hepatocitos, el moco de las células caliciformes, el borde en cepillo del intestino y del túbulo proximal y las membranas basales. En clínica es muy útil para identificar hongos y para valorar la membrana basal del riñón.',
  no:{
    1:'El ADN se tiñe con la reacción de Feulgen o con hematoxilina; el PAS no lo colorea.',
    2:'Los fosfolípidos de membrana no se ven con esta técnica; los lípidos se estudian con Sudán o con osmio.',
    3:'Las fibras elásticas se tiñen con orceína o con resorcina-fucsina, no con PAS.'
  },
  trampa:'Confundir tinciones especiales entre sí: PAS = hidratos de carbono; orceína = elásticas; plata = reticulares; Sudán = lípidos.',
  obj:'Asociar cada tinción especial con la sustancia que resalta.',
  ref:'Junqueira, Histología Básica, cap. 1.',
  tags:['PAS','glucógeno','mucina','membrana basal','tinción especial']
},

/* ---------- Epitelios de revestimiento ---------- */
{
  id:'U7-H-Q13', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Epitelios de revestimiento', sub:'Epitelio simple plano',
  dif:1, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Al examinar la pared de un capilar sanguíneo, se ve que su revestimiento interno está formado por una sola capa de células muy aplanadas, con el núcleo abultado en el centro.',
  enunciado:'¿Qué tipo de epitelio corresponde a esta descripción?',
  ops:['Epitelio simple plano','Epitelio simple cúbico','Epitelio estratificado plano','Epitelio seudoestratificado cilíndrico'],
  ok:0,
  clave:'Simple plano = una capa de células planas: endotelio, mesotelio, alvéolos, cápsula de Bowman.',
  exp:'El revestimiento de los vasos, o endotelio, es un epitelio simple plano: una sola capa de células delgadas que facilita el intercambio de gases y nutrientes con los tejidos. Este mismo epitelio reviste las cavidades corporales (mesotelio), los alvéolos pulmonares y el asa delgada de la nefrona. Su delgadez es una ventaja funcional: cuanto menor es la distancia, más rápida es la difusión.',
  no:{
    1:'El epitelio simple cúbico tiene células tan altas como anchas, y se ve en túbulos renales y conductos de glándulas.',
    2:'El estratificado plano tiene varias capas y cumple una función de protección, como en la piel o el esófago.',
    3:'El seudoestratificado tiene una sola capa, pero con núcleos a distintas alturas, como en la tráquea.'
  },
  trampa:'Nombrar el epitelio por el aspecto del núcleo y no por la forma de la célula. El nombre se decide por el número de capas y la forma de las células de la superficie.',
  obj:'Clasificar un epitelio según el número de capas y la forma celular.',
  ref:'Junqueira, Histología Básica, cap. 4.',
  tags:['epitelio simple','plano','endotelio','clasificación de epitelios']
},
{
  id:'U7-H-Q14', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Epitelios de revestimiento', sub:'Epitelio de transición',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En la biopsia de la vejiga de un paciente se observa un epitelio con varias capas. Las células superficiales son grandes, de aspecto abovedado, y en la vejiga vacía se ven redondeadas; cuando la vejiga se llena, se aplanan.',
  enunciado:'¿Qué epitelio es y cuál es su ventaja funcional?',
  ops:['Un epitelio de transición (urotelio), capaz de adaptarse a la distensión y de proteger de la orina','Un epitelio simple cúbico, adaptado a la absorción','Un epitelio estratificado plano queratinizado, que protege contra la abrasión','Un epitelio simple cilíndrico, adaptado a la secreción'],
  ok:0,
  clave:'Urotelio: células en paraguas (o en cúpula) superficiales; se estira sin romperse y sella la pared frente a la orina.',
  exp:'El epitelio de transición reviste la mayor parte de las vías urinarias: pelvis renal, uréteres, vejiga y parte de la uretra. Sus células superficiales, en paraguas, tienen placas de membrana rígidas que forman una barrera casi impermeable a la orina hipertónica, y se aplanan o se pliegan cuando el órgano se distiende, así que el epitelio parece cambiar de espesor. Las neoplasias más frecuentes de la vejiga se originan en este epitelio (carcinoma urotelial).',
  no:{
    1:'El epitelio simple cúbico tiene una sola capa y no tolera la distensión ni la orina como barrera.',
    2:'El plano estratificado queratinizado es propio de la piel; no tendría cómo distenderse en la vejiga.',
    3:'El cilíndrico simple secreta o absorbe (estómago, intestino), pero no aguanta el estiramiento repetido.'
  },
  trampa:'Creer que las células cambian de forma por sí solas. Lo que cambia es la disposición de las células y de sus membranas: los pliegues y las vesículas de reserva.',
  obj:'Reconocer el urotelio y relacionar su estructura con su función.',
  ref:'Junqueira, Histología Básica, cap. 4.',
  tags:['epitelio de transición','urotelio','estratificado','vejiga']
},
{
  id:'U7-H-Q15', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Epitelios de revestimiento', sub:'Epitelio estratificado plano',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué epitelio de revestimiento se encuentra en la mucosa del esófago, la cavidad oral y la vagina?',
  ops:['Estratificado plano no queratinizado','Estratificado plano queratinizado','Simple cilíndrico con microvellosidades','Seudoestratificado cilíndrico ciliado'],
  ok:0,
  clave:'Estratificado plano no queratinizado = mucosas húmedas sometidas a fricción. Queratinizado = piel.',
  exp:'Las mucosas húmedas que soportan fricción y desgaste —esófago, boca, vagina, ano— están revestidas por un epitelio estratificado plano no queratinizado: varias capas de células que se descaman y se renuevan desde la capa basal, pero que conservan su núcleo en la superficie y no forman una capa de queratina. La versión queratinizada, con una capa superficial de células muertas llenas de queratina, se encuentra en la epidermis de la piel, y sirve además como barrera al agua.',
  no:{
    1:'El queratinizado corresponde a la piel, una superficie seca; en las mucosas húmedas no forma capa córnea.',
    2:'El simple cilíndrico con microvellosidades es el del intestino, especializado en absorción.',
    3:'El seudoestratificado ciliado reviste la tráquea y los bronquios y arrastra el moco con los cilios.'
  },
  trampa:'Memorizar "estratificado plano" sin distinguir si tiene queratina. La presencia o ausencia de la capa córnea depende de si la superficie es seca o húmeda.',
  obj:'Ubicar cada tipo de epitelio de revestimiento en sus localizaciones principales.',
  ref:'Junqueira, Histología Básica, cap. 4.',
  tags:['estratificado','plano','epitelio','esófago','queratinizado']
},
{
  id:'U7-H-Q16', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Epitelios de revestimiento', sub:'Cilios y microvellosidades',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un varón de 30 años tiene sinusitis y bronquitis de repetición, bronquiectasias e infertilidad por espermatozoides inmóviles. Una radiografía muestra el corazón a la derecha (situs inversus). Se sospecha discinesia ciliar primaria (síndrome de Kartagener).',
  enunciado:'¿Qué alteración estructural explica la falla de los cilios?',
  ops:['Un defecto de la dineína, la proteína motora de los brazos de los microtúbulos del axonema','Ausencia de microvellosidades en el epitelio respiratorio','Un exceso de moco producido por las células caliciformes','Una alteración de las uniones estrechas entre las células epiteliales'],
  ok:0,
  clave:'Axonema 9+2 con brazos de dineína. Sin dineína, los cilios no baten: moco retenido, infecciones, infertilidad y situs inversus.',
  exp:'Los cilios contienen un axonema formado por nueve pares de microtúbulos periféricos y un par central; los brazos de dineína permiten que los pares se deslicen y que el cilio bata. Si falta la dineína, los cilios de las vías respiratorias no depuran el moco (infecciones y bronquiectasias), el flagelo del espermatozoide no se mueve (infertilidad) y los cilios del embrión no establecen bien la lateralidad, lo que produce situs inversus en la mitad de los casos.',
  no:{
    1:'Las microvellosidades son proyecciones de absorción, distintas de los cilios, y no explican este cuadro.',
    2:'El exceso de moco es un problema de las glándulas, y no explica la infertilidad ni el situs inversus.',
    3:'Las uniones estrechas sellan el epitelio, pero su alteración no afecta a la motilidad ciliar.'
  },
  trampa:'Confundir cilios (móviles, con microtúbulos y dineína) con microvellosidades (inmóviles, con filamentos de actina).',
  obj:'Diferenciar la estructura de los cilios y de las microvellosidades y relacionarla con enfermedades.',
  ref:'Junqueira, Histología Básica, cap. 4 y 3.',
  tags:['cilio','epitelio','cilíndrico','microvellosidad','Kartagener']
},

/* ---------- Epitelios glandulares ---------- */
{
  id:'U7-H-Q17', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Epitelios glandulares', sub:'Glándulas exocrinas y endocrinas',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia fundamental existe entre una glándula exocrina y una endocrina?',
  ops:['La exocrina vierte su secreción a una superficie mediante un conducto; la endocrina la libera al torrente sanguíneo','La exocrina secreta hormonas y la endocrina, enzimas','La exocrina es unicelular y la endocrina siempre es pluricelular','La exocrina no se origina de un epitelio, y la endocrina sí'],
  ok:0,
  clave:'Exocrina = con conducto, secreta a una superficie. Endocrina = sin conducto, secreta a la sangre (hormonas).',
  exp:'Ambos tipos de glándula derivan de un epitelio que se invagina en el tejido conectivo durante el desarrollo. Las exocrinas mantienen un conducto que las conecta con la superficie (sudor, saliva, jugo pancreático). Las endocrinas pierden ese conducto y quedan rodeadas de capilares, hacia los que liberan sus hormonas, que actúan a distancia. Algunas glándulas, como el páncreas, tienen una porción exocrina y otra endocrina.',
  no:{
    1:'Está invertido: las endocrinas producen hormonas, y las exocrinas producen enzimas, moco, sudor, entre otras.',
    2:'Ambos tipos pueden ser unicelulares o pluricelulares; la célula caliciforme es una glándula exocrina unicelular.',
    3:'Las dos derivan de epitelio; es el origen común de todo el tejido glandular.'
  },
  trampa:'Creer que la distinción está en la sustancia que se secreta, cuando lo que las diferencia es el destino: superficie o sangre.',
  obj:'Diferenciar glándulas exocrinas y endocrinas por su vía de secreción.',
  ref:'Junqueira, Histología Básica, cap. 4.',
  tags:['glándula exocrina','endocrina','conducto','acino']
},
{
  id:'U7-H-Q18', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Epitelios glandulares', sub:'Modos de secreción',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un adolescente con acné presenta glándulas sebáceas dilatadas y obstruidas en la cara. Al microscopio, las células de estas glándulas se llenan de lípidos, degeneran y se rompen para liberar su contenido junto con sus restos.',
  enunciado:'¿Qué tipo de secreción es esta?',
  ops:['Holocrina','Merocrina','Apocrina','Endocrina'],
  ok:0,
  clave:'Holocrina = la célula entera se convierte en secreción (glándula sebácea). Merocrina = exocitosis (la mayoría). Apocrina = se pierde parte del citoplasma.',
  exp:'En la secreción holocrina, la célula acumula su producto, muere y se desintegra, y todo su contenido forma parte de la secreción. La glándula sebácea es el ejemplo típico: el sebo, mezcla de lípidos y restos celulares, se vierte al folículo piloso, y debe renovarse constantemente desde la capa basal. La secreción merocrina, la más frecuente (glándulas salivales, páncreas), libera el producto por exocitosis sin dañar la célula.',
  no:{
    1:'En la merocrina la célula permanece intacta, y libera sus productos por exocitosis.',
    2:'En la apocrina se pierde una porción del citoplasma apical junto con el producto, pero no toda la célula.',
    3:'Endocrina se refiere al destino de la secreción (la sangre) y no al mecanismo con que la célula la libera.'
  },
  trampa:'Confundir la clasificación por el destino (exo/endocrina) con la clasificación por el mecanismo (mero/apo/holocrina).',
  obj:'Reconocer los tres modos de secreción y un ejemplo de cada uno.',
  ref:'Junqueira, Histología Básica, cap. 4.',
  tags:['holocrina','merocrina','glándula sebácea','glándula exocrina']
},
{
  id:'U7-H-Q19', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Epitelios glandulares', sub:'Acinos serosos y mucosos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un corte de glándula salival se observa un acino formado por células de citoplasma pálido y espumoso, con el núcleo aplanado y desplazado hacia la base.',
  enunciado:'¿Qué tipo de acino es?',
  ops:['Un acino mucoso, con células que acumulan moco','Un acino seroso, con abundante retículo endoplasmático rugoso y gránulos de cimógeno','Un acino endocrino','Un acino sebáceo'],
  ok:0,
  clave:'Mucoso: citoplasma claro, núcleo aplanado basal. Seroso: citoplasma basófilo, núcleo redondo, gránulos de cimógeno.',
  exp:'Las células mucosas acumulan mucinógeno, que en H&E se ve como un citoplasma pálido y espumoso porque el moco se pierde o se tiñe muy poco; el núcleo queda comprimido y aplanado contra la base. Las células serosas, en cambio, secretan enzimas (la amilasa de la parótida): tienen un núcleo redondo, la base basófila por el retículo rugoso y el ápice lleno de gránulos de cimógeno, acidófilos. La glándula sublingual es predominantemente mucosa; la parótida, serosa.',
  no:{
    1:'El acino seroso tendría el citoplasma basófilo, más oscuro, y el núcleo redondo.',
    2:'Las glándulas endocrinas no forman acinos con luz, porque no tienen conducto.',
    3:'La glándula sebácea tiene células que se llenan de lípidos y son de secreción holocrina; no se ubica en las glándulas salivales.'
  },
  trampa:'Interpretar el citoplasma claro como una célula vacía o degenerada. Es una célula cargada de moco, que se pierde durante el procesamiento.',
  obj:'Distinguir células mucosas y serosas por su aspecto en H&E.',
  ref:'Junqueira, Histología Básica, cap. 4 y 15.',
  tags:['acino','glándula exocrina','mucosa','serosa','glándula salival']
},

/* ---------- Tejido conectivo ---------- */
{
  id:'U7-H-Q20', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido conectivo', sub:'Síntesis de colágeno',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un marinero de un viaje largo, sin fruta ni verdura fresca, llega con encías sangrantes, dientes flojos, heridas que no cicatrizan y hematomas por todo el cuerpo. Se diagnostica escorbuto.',
  enunciado:'¿Qué paso de la síntesis del colágeno falla y por qué?',
  ops:['La hidroxilación de prolina y lisina, que requiere vitamina C, y sin la cual el colágeno no forma su triple hélice estable','La transcripción del gen del colágeno, porque falta vitamina C','La secreción del procolágeno, que se bloquea sin vitamina C','La formación de enlaces entre fibras por el ion calcio'],
  ok:0,
  clave:'Vitamina C = cofactor de la hidroxilación de prolina y lisina. Sin ella, colágeno inestable: escorbuto.',
  exp:'Los fibroblastos sintetizan procolágeno en el retículo rugoso, y allí las enzimas prolil y lisil hidroxilasa modifican los aminoácidos prolina y lisina. Estas enzimas necesitan vitamina C como cofactor. Sin hidroxilación, las cadenas no forman una triple hélice estable a temperatura corporal, y el colágeno es defectuoso: los vasos se vuelven frágiles, las encías sangran y las heridas no cicatrizan. El cuadro se corrige al restituir la vitamina C.',
  no:{
    1:'El gen se transcribe con normalidad; el defecto es posterior, en la modificación de la proteína.',
    2:'La secreción se realiza, pero de un colágeno defectuoso que se degrada.',
    3:'Los enlaces entre fibras dependen de la lisil oxidasa, que necesita cobre, y no explican el escorbuto.'
  },
  trampa:'Atribuir el escorbuto a una falta de colágeno. Hay colágeno, pero es de mala calidad, porque no se hidroxiló correctamente.',
  obj:'Relacionar la vitamina C con la síntesis de colágeno y sus consecuencias clínicas.',
  ref:'Junqueira, Histología Básica, cap. 5.',
  tags:['colágeno','fibroblasto','vitamina C','escorbuto','matriz extracelular']
},
{
  id:'U7-H-Q21', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido conectivo', sub:'Tipos de colágeno',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de colágeno forma las fibras reticulares que sostienen el estroma del hígado, el bazo y los ganglios linfáticos?',
  ops:['Colágeno tipo III','Colágeno tipo I','Colágeno tipo II','Colágeno tipo IV'],
  ok:0,
  clave:'I = piel, tendón, hueso. II = cartílago hialino. III = reticulares (estroma). IV = lámina basal.',
  exp:'Las fibras reticulares son fibras finas y ramificadas de colágeno tipo III que forman una red de sostén (estroma) en los órganos hematopoyéticos y linfoides y en glándulas como el hígado. No se ven con hematoxilina y eosina; se identifican con impregnación argéntica (tinción de plata), que las tiñe de negro, y con PAS, porque llevan glucoproteínas asociadas.',
  no:{
    1:'El tipo I es el más abundante y forma fibras gruesas en la dermis, los tendones y el hueso.',
    2:'El tipo II forma fibrillas finas del cartílago hialino, sin agruparse en fibras gruesas.',
    3:'El tipo IV no forma fibras sino una malla laminar en la lámina basal.'
  },
  trampa:'Confundir las fibras reticulares con las elásticas. Las reticulares son colágeno tipo III y se tiñen con plata; las elásticas están hechas de elastina y se tiñen con orceína.',
  obj:'Asociar cada tipo de colágeno con su localización y función.',
  ref:'Junqueira, Histología Básica, cap. 5.',
  tags:['colágeno','fibras reticulares','matriz extracelular','tipo III']
},
{
  id:'U7-H-Q22', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido conectivo', sub:'Mastocitos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Tras la picadura de una abeja, una mujer presenta enrojecimiento, hinchazón y picor de la piel en cuestión de minutos. Ya había sido picada antes por el mismo insecto.',
  enunciado:'¿Qué célula del tejido conectivo participa de forma central en esta reacción inmediata?',
  ops:['El mastocito, cuyos gránulos liberan histamina al unirse el antígeno a la IgE de su superficie','El fibroblasto, que libera colágeno','El adipocito, que libera lípidos','La célula plasmática, que fabrica anticuerpos en unos segundos'],
  ok:0,
  clave:'Mastocito: gránulos con histamina y heparina; receptores para IgE; degranulación = hipersensibilidad inmediata.',
  exp:'Los mastocitos abundan en el tejido conectivo de la piel y las mucosas, cerca de los vasos. Tras una primera exposición, se recubren de IgE específica; en la segunda exposición, el antígeno une las IgE de la superficie, y la célula libera de golpe el contenido de sus gránulos: histamina (vasodilatación, aumento de permeabilidad, picor), heparina y otros mediadores. Es el mecanismo de la urticaria y de la anafilaxia.',
  no:{
    1:'El fibroblasto sintetiza la matriz extracelular; no participa en las reacciones de hipersensibilidad inmediata.',
    2:'El adipocito almacena grasa y no libera mediadores inflamatorios en esta reacción.',
    3:'La célula plasmática produce anticuerpos, pero en horas o días; no es la responsable de una reacción de minutos.'
  },
  trampa:'Atribuir la reacción a los anticuerpos circulantes en general. El actor es el mastocito, que ya tiene la IgE pegada a su membrana.',
  obj:'Reconocer los mastocitos y su papel en la hipersensibilidad inmediata.',
  ref:'Junqueira, Histología Básica, cap. 5.',
  tags:['mastocito','histamina','tejido conectivo','fibroblasto','sustancia fundamental']
},

/* ---------- Tejido adiposo, cartílago y hueso ---------- */
{
  id:'U7-H-Q23', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido adiposo, cartílago y hueso', sub:'Tejido adiposo pardo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica distingue al tejido adiposo pardo del blanco?',
  ops:['Sus adipocitos tienen muchas gotas de lípido y abundantes mitocondrias con termogenina (UCP1), y producen calor','Sus adipocitos tienen una sola gran gota de lípido y almacenan energía','No tiene irrigación','Solo aparece en el adulto'],
  ok:0,
  clave:'Blanco = unilocular, reserva de energía. Pardo = multilocular, mitocondrias con UCP1, termogénesis (recién nacido).',
  exp:'Los adipocitos del tejido pardo son multiloculares: contienen numerosas gotas pequeñas de lípido y muchísimas mitocondrias, cuyo color proviene de los citocromos y del hierro. Estas mitocondrias tienen termogenina (UCP1), una proteína que desacopla la cadena respiratoria de la síntesis de ATP, de modo que la energía se disipa en forma de calor. Es muy abundante en el recién nacido, que no puede tiritar de forma eficaz, y su cantidad disminuye en el adulto.',
  no:{
    1:'Una única gran gota de lípido y almacén de energía describen al adipocito blanco (unilocular).',
    2:'Está muy irrigado; su color oscuro se debe en parte a la abundancia de capilares.',
    3:'Es más abundante en el recién nacido, aunque persiste una pequeña cantidad en el adulto.'
  },
  trampa:'Creer que el pardo almacena más grasa. Su función no es almacenar, sino quemar grasa para generar calor.',
  obj:'Diferenciar el tejido adiposo blanco del pardo en estructura y función.',
  ref:'Junqueira, Histología Básica, cap. 6.',
  tags:['adipocito','tejido adiposo','termogenina','mitocondrias']
},
{
  id:'U7-H-Q24', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido adiposo, cartílago y hueso', sub:'Tipos de cartílago',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un futbolista sufre una rotura del menisco de la rodilla. El cirujano advierte que, una vez lesionado, este tejido se repara muy mal y que a menudo hay que extirpar la parte dañada.',
  enunciado:'¿Qué tipo de cartílago forma el menisco y por qué es tan resistente?',
  ops:['Fibrocartílago, rico en haces de colágeno tipo I que resisten la tracción y la compresión','Cartílago hialino, con colágeno tipo II únicamente','Cartílago elástico, con abundantes fibras de elastina','Tejido óseo compacto, con osteones'],
  ok:0,
  clave:'Hialino (tráquea, articulaciones): colágeno II. Elástico (oreja, epiglotis): elastina. Fibrocartílago (menisco, discos, sínfisis): colágeno I.',
  exp:'El fibrocartílago combina cartílago con haces gruesos de colágeno tipo I, entre los cuales se disponen filas de condrocitos. Es el tejido de los meniscos, de los discos intervertebrales y de la sínfisis del pubis, estructuras que soportan cargas fuertes y de dirección cambiante. Como todo cartílago, no tiene vasos: recibe nutrientes por difusión desde tejidos vecinos, y su capacidad de regeneración es limitada; por eso las lesiones cicatrizan mal.',
  no:{
    1:'El hialino recubre las superficies articulares y forma el esqueleto de la tráquea, pero no es el de los meniscos.',
    2:'El elástico forma el pabellón de la oreja y la epiglotis, estructuras que necesitan flexibilidad y recuperar su forma.',
    3:'El hueso es un tejido vascularizado y rígido; un menisco necesita cierta elasticidad para amortiguar.'
  },
  trampa:'Creer que todo el cartílago del cuerpo es igual. Se distinguen tres tipos, según el colágeno o las fibras que predominan y la función que cumplen.',
  obj:'Reconocer los tres tipos de cartílago y sus localizaciones.',
  ref:'Junqueira, Histología Básica, cap. 7.',
  tags:['condrocito','cartílago','fibrocartílago','menisco','laguna']
},
{
  id:'U7-H-Q25', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido adiposo, cartílago y hueso', sub:'Osteoclasto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De qué células derivan los osteoclastos y cómo es su aspecto característico?',
  ops:['Derivan de precursores de la serie monocito-macrófago y son células grandes y multinucleadas','Derivan de las células osteoprogenitoras y son células cúbicas con un solo núcleo','Derivan de los osteocitos, y son células con prolongaciones largas dentro de canalículos','Derivan de los condrocitos y se ubican en lagunas'],
  ok:0,
  clave:'Osteoclasto = macrófago multinucleado que reabsorbe hueso; borde rugoso y laguna de Howship. Osteoblasto/osteocito = línea mesenquimal.',
  exp:'Los osteoclastos se forman por la fusión de precursores de la línea monocito-macrófago de la médula ósea, y por eso son células gigantes con varios núcleos. Se adhieren a la superficie ósea y, mediante un borde rugoso, secretan protones y enzimas ácidas que disuelven la matriz mineral y orgánica; la depresión que excavan se llama laguna de Howship. Su actividad se controla por señales del osteoblasto, lo que mantiene el equilibrio del remodelado.',
  no:{
    1:'Las células osteoprogenitoras dan lugar a los osteoblastos, no a los osteoclastos.',
    2:'Los osteocitos son osteoblastos atrapados en la matriz; no se transforman en osteoclastos.',
    3:'Los condrocitos son las células del cartílago, y no dan origen a osteoclastos.'
  },
  trampa:'Agrupar las tres células del hueso como si tuvieran el mismo origen. Osteoblasto y osteocito vienen del mesénquima; el osteoclasto, de la línea de los monocitos.',
  obj:'Diferenciar el origen y la función de osteoblastos, osteocitos y osteoclastos.',
  ref:'Junqueira, Histología Básica, cap. 8.',
  tags:['osteoclasto','osteoblasto','osteocito','tejido óseo','laguna']
},
{
  id:'U7-H-Q26', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido adiposo, cartílago y hueso', sub:'Osteón',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En el hueso compacto, ¿qué estructura forman las laminillas concéntricas de matriz alrededor de un conducto que contiene vasos y nervios?',
  ops:['Un osteón (sistema de Havers)','Una trabécula','Un canal de Volkmann','Una placa epifisaria'],
  ok:0,
  clave:'Osteón = conducto de Havers + laminillas concéntricas con osteocitos en lagunas unidas por canalículos. Volkmann comunica transversalmente.',
  exp:'La unidad estructural del hueso compacto es el osteón, o sistema de Havers: un conducto central que aloja vasos y nervios, rodeado de laminillas concéntricas de matriz mineralizada. Entre las laminillas, los osteocitos ocupan lagunas y se comunican mediante prolongaciones dentro de canalículos, lo que permite que los nutrientes lleguen hasta las células más lejanas del vaso. Los canales de Volkmann, perpendiculares, conectan los conductos de Havers entre sí y con la superficie.',
  no:{
    1:'Las trabéculas forman el hueso esponjoso, sin osteones ni conductos centrales.',
    2:'El canal de Volkmann es un conducto transversal y no tiene laminillas concéntricas propias.',
    3:'La placa epifisaria es la zona de cartílago de crecimiento del hueso en desarrollo.'
  },
  trampa:'Confundir los conductos de Havers (longitudinales) con los de Volkmann (transversales u oblicuos).',
  obj:'Describir la organización microscópica del hueso compacto.',
  ref:'Junqueira, Histología Básica, cap. 8.',
  tags:['osteocito','laguna','hueso compacto','osteón','osteoblasto']
},

/* ---------- Tejido muscular ---------- */
{
  id:'U7-H-Q27', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido muscular', sub:'Tipos de músculo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En una lámina se observan células con estriaciones transversales, ramificadas, con un solo núcleo central, unidas por líneas oscuras que las cruzan de forma escalonada.',
  enunciado:'¿A qué tipo de tejido muscular corresponde esta imagen?',
  ops:['Músculo cardíaco','Músculo esquelético','Músculo liso','Tejido conectivo denso'],
  ok:0,
  clave:'Cardíaco: estriado, ramificado, núcleo central, discos intercalares. Esquelético: multinucleado, núcleos periféricos. Liso: sin estrías.',
  exp:'Las líneas oscuras y escalonadas son los discos intercalares, las uniones entre células cardíacas, que contienen desmosomas y uniones en hendidura. Junto con las estriaciones, el núcleo central único y la ramificación, definen al músculo cardíaco. El esquelético tiene fibras largas y multinucleadas, con los núcleos a la periferia, y el liso está formado por células fusiformes sin estriaciones.',
  no:{
    1:'El esquelético no se ramifica y tiene muchos núcleos periféricos, sin discos intercalares.',
    2:'El liso no presenta estriaciones y sus células son fusiformes.',
    3:'Un conectivo denso no tiene células estriadas; predominan fibras de colágeno.'
  },
  trampa:'Identificar solo por las estrías. Tanto el esquelético como el cardíaco son estriados; el detalle que decide es la ubicación de los núcleos y la presencia de discos intercalares.',
  obj:'Diferenciar los tres tipos de músculo al microscopio.',
  ref:'Junqueira, Histología Básica, cap. 10.',
  tags:['disco intercalar','estriado','músculo cardíaco','sarcómero']
},
{
  id:'U7-H-Q28', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido muscular', sub:'Tríadas y sistema de túbulos T',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En el músculo esquelético de mamíferos, ¿dónde se ubican las tríadas, formadas por un túbulo T y dos cisternas terminales del retículo sarcoplásmico?',
  ops:['En la unión entre la banda A y la banda I de cada sarcómero','A nivel de la línea Z','En el centro de la banda A, a nivel de la línea M','En la zona H'],
  ok:0,
  clave:'Esquelético: tríada en la unión A-I (dos por sarcómero). Cardíaco: diada a nivel de la línea Z.',
  exp:'En las fibras esqueléticas de los mamíferos, el túbulo T penetra desde el sarcolema y se sitúa entre dos cisternas terminales del retículo sarcoplásmico, justo en la unión de la banda A con la banda I: hay dos tríadas por sarcómero. Esa disposición permite que el potencial de acción, que viaja por el túbulo T, llegue al retículo y libere calcio en todo el sarcómero a la vez. En el músculo cardíaco, los túbulos T son más anchos, se ubican a nivel de la línea Z y forman diadas, con una sola cisterna.',
  no:{
    1:'La línea Z es donde se sitúan los túbulos T en el músculo cardíaco, no en el esquelético.',
    2:'La línea M ancla los filamentos gruesos y no se asocia con los túbulos T.',
    3:'La zona H es la región central de la banda A sin filamentos delgados, sin relación con los túbulos T.'
  },
  trampa:'Confundir la localización en el esquelético (A-I) con la del cardíaco (línea Z).',
  obj:'Ubicar las tríadas y las diadas dentro del sarcómero.',
  ref:'Junqueira, Histología Básica, cap. 10.',
  tags:['sarcómero','banda A','banda I','estriado','retículo sarcoplásmico']
},
{
  id:'U7-H-Q29', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido muscular', sub:'Regeneración muscular',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre de 60 años sufre un infarto de miocardio extenso. Semanas después, el examen de la zona afectada revela que el músculo cardíaco muerto ha sido sustituido por una cicatriz de tejido conectivo denso.',
  enunciado:'¿Por qué el miocardio no se regenera y se forma una cicatriz?',
  ops:['Porque los miocitos cardíacos adultos casi no se dividen y no cuentan con una reserva de células satélite; el tejido conectivo rellena el defecto','Porque el músculo cardíaco no tiene irrigación','Porque los fibroblastos destruyen a las células musculares','Porque los miocitos cardíacos carecen de núcleo'],
  ok:0,
  clave:'Esquelético: células satélite (regeneración limitada). Cardíaco: sin regeneración efectiva, cicatriz fibrosa. Liso: puede proliferar.',
  exp:'Los cardiomiocitos adultos son células diferenciadas con muy escasa capacidad de dividirse, y el corazón no tiene un equivalente de las células satélite del músculo esquelético. Cuando mueren tras un infarto, los fibroblastos las sustituyen con tejido conectivo denso: una cicatriz que no se contrae, con la consiguiente pérdida de fuerza del ventrículo. El músculo esquelético, en cambio, puede reparar lesiones limitadas gracias a las células satélite, y el músculo liso conserva la capacidad de dividirse (como el útero durante el embarazo).',
  no:{
    1:'El miocardio está muy irrigado; es la falta de flujo, precisamente, la causa del infarto.',
    2:'Los fibroblastos no destruyen las células; solo rellenan el vacío que dejan las células muertas.',
    3:'Los cardiomiocitos tienen núcleo (generalmente uno, central); no es la razón de la falta de regeneración.'
  },
  trampa:'Culpar al fibroblasto de la falta de regeneración. La cicatriz es la consecuencia de que las células musculares no se regeneren, y no la causa.',
  obj:'Comparar la capacidad de regeneración de los tres tipos de músculo.',
  ref:'Junqueira, Histología Básica, cap. 10.',
  tags:['disco intercalar','estriado','músculo cardíaco','regeneración','sarcómero']
}

]);
