/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 7, TANDA DE EMBRIOLOGIA (1/2)
   Amplia Embriologia de 9 a 50 preguntas junto con banco-12.js.
   Esta parte cubre gametogenesis, primera y segunda semana,
   gastrulacion, organogenesis, sistema nervioso y anexos/placenta
   (los temas 1-7 del Temario de Embriologia).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== EMBRIOLOGIA ===================== */
{
  id:'U7-E-Q10', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Gametogénesis', sub:'Ovogénesis detenida',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué fase de la meiosis queda detenido el ovocito primario desde antes del nacimiento hasta que ese folículo es reclutado en un ciclo futuro?',
  ops:[
    'En metafase de la meiosis II',
    'En profase de la meiosis I (diplotene)',
    'En anafase de la meiosis I',
    'No se detiene: la meiosis I se completa en la vida fetal'
  ],
  ok:1,
  clave:'El ovocito primario queda detenido en diplotene de la profase I, a veces durante décadas.',
  exp:'Los ovocitos primarios entran en meiosis I durante la vida fetal, pero esa división se detiene en la fase de diplotene de la profase I y permanece así, dentro de folículos primordiales, hasta que ese folículo en particular sea reclutado en un ciclo menstrual, ya en la vida adulta. Solo entonces, justo antes de la ovulación, se completa la meiosis I. Este detenimiento tan prolongado es la base biológica del aumento de aneuploidías con la edad materna.',
  no:{
    0:'La detención en metafase II ocurre después, tras completar la meiosis I y justo antes de la fecundación, no desde el nacimiento.',
    2:'No hay detención en anafase I: el punto de parada es la profase I, en diplotene.',
    3:'Al contrario: la meiosis I se inicia en la vida fetal pero queda inconclusa hasta décadas después.'
  },
  trampa:'Confundir el punto de detención de la meiosis I (profase, en diplotene) con el de la meiosis II (metafase, tras la ovulación).',
  obj:'Precisar en qué fase queda detenida la meiosis del ovocito y por qué.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['ovogénesis','meiosis','diplotene','folículo primordial','edad materna']
},
{
  id:'U7-E-Q11', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Gametogénesis', sub:'Espermatogénesis',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuántos espermatozoides funcionales produce, en condiciones normales, cada espermatocito primario que entra en meiosis?',
  ops:['Uno', 'Dos', 'Cuatro', 'Ocho'],
  ok:2,
  clave:'La meiosis I y la meiosis II duplican dos veces: 1 → 2 → 4.',
  exp:'Cada espermatocito primario, al completar la meiosis I, produce dos espermatocitos secundarios; cada uno de estos, al completar la meiosis II, produce dos espermátidas. El resultado neto es que un solo espermatocito primario origina cuatro espermátidas, que maduran por espermiogénesis hasta convertirse en cuatro espermatozoides funcionales. Es la diferencia clave frente a la ovogénesis, donde de cada ovocito primario se obtiene un solo óvulo funcional porque la mayor parte del citoplasma se concentra en una sola célula y el resto se pierde como cuerpos polares.',
  no:{
    0:'Uno es lo que produce la ovogénesis, no la espermatogénesis.',
    1:'Dos sería el resultado de contar solo la meiosis I; falta la segunda división.',
    3:'Ocho excede lo que producen dos divisiones meióticas sucesivas a partir de una célula.'
  },
  trampa:'Olvidar que son DOS divisiones meióticas seguidas y detenerse a contar solo después de la primera.',
  obj:'Cuantificar el rendimiento de la espermatogénesis y contrastarlo con la ovogénesis.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['espermatogénesis','meiosis','espermátida','ovogénesis']
},
{
  id:'U7-E-Q12', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Gametogénesis', sub:'Cromosomas sexuales',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué determina el sexo cromosómico del futuro embrión en el momento de la fecundación?',
  ops:[
    'El cromosoma sexual que aporta el óvulo, que siempre es X',
    'El cromosoma sexual que aporta el espermatozoide, que puede ser X o Y',
    'La combinación hormonal materna durante la ovulación',
    'El momento del ciclo en que ocurre la fecundación'
  ],
  ok:1,
  clave:'El ovocito siempre aporta X; el espermatozoide decide entre X y Y.',
  exp:'Por la meiosis, el ovocito es siempre haploide con un cromosoma X, porque la mujer es 46,XX. El espermatozoide, en cambio, puede llevar un cromosoma X o un cromosoma Y, porque el hombre es 46,XY y ambos cromosomas se separan en gametos distintos durante la meiosis. El sexo cromosómico del cigoto queda determinado, por tanto, exclusivamente por cuál de los dos tipos de espermatozoide fecunda al óvulo: XX si es un espermatozoide con X, XY si es con Y.',
  no:{
    0:'El óvulo sí es siempre X, pero eso no determina el sexo: lo que varía y decide es el aporte paterno.',
    2:'El entorno hormonal materno no determina el sexo cromosómico, que queda fijado desde la fecundación.',
    3:'El momento de la fecundación dentro del ciclo no influye en qué cromosoma sexual porta el espermatozoide fecundante.'
  },
  trampa:'Atribuir a la madre la determinación del sexo. Es el gameto paterno el que aporta la variable.',
  obj:'Explicar el mecanismo cromosómico de determinación del sexo.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['determinación del sexo','cromosoma Y','gametogénesis','meiosis']
},
{
  id:'U7-E-Q13', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Fecundación y primera semana', sub:'Sitio y momento',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer con ciclos regulares de 28 días tiene relaciones sexuales el día 14 de su ciclo, coincidiendo con la ovulación.',
  enunciado:'¿En qué estructura anatómica es más probable que ocurra la fecundación?',
  ops:[
    'En el útero, poco después de la implantación',
    'En la ampolla de la trompa uterina',
    'En el ovario, antes de la ovulación',
    'En el istmo de la trompa uterina, tras varios días de espera del óvulo'
  ],
  ok:1,
  clave:'La ampolla tubárica, el segmento más ancho y cercano al ovario, es el sitio habitual.',
  exp:'La fecundación ocurre normalmente en la ampolla de la trompa uterina, el segmento más ancho de la trompa, cercano al infundíbulo que capta el ovocito tras la ovulación. El ovocito conserva capacidad de ser fecundado solo durante unas 24 horas, y los espermatozoides sobreviven en el tracto genital femenino hasta unos 5 días, así que el encuentro debe darse pronto en ese segmento. El cigoto resultante avanza después hacia el útero, donde llega ya como blastocisto, alrededor del quinto o sexto día.',
  no:{
    0:'El útero no es el sitio de fecundación: recibe al embrión ya formado, cerca del quinto día.',
    2:'La fecundación no ocurre dentro del ovario: el óvulo debe ser captado por la trompa primero.',
    3:'El istmo es el segmento más estrecho, más cercano al útero, y no es el sitio habitual de encuentro de los gametos.'
  },
  trampa:'Confundir el lugar de la fecundación con el lugar de la implantación. Son dos estructuras y dos momentos distintos.',
  obj:'Ubicar el sitio anatómico habitual de la fecundación.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['fecundación','ampolla tubárica','trompa uterina','cigoto']
},
{
  id:'U7-E-Q14', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Fecundación y primera semana', sub:'Mórula y blastocisto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia estructural distingue a la mórula del blastocisto?',
  ops:[
    'La mórula ya tiene trofoblasto y embrioblasto diferenciados, el blastocisto no',
    'El blastocisto presenta una cavidad llena de líquido y dos poblaciones celulares distintas; la mórula es una masa celular compacta sin cavidad',
    'La mórula ya está implantada; el blastocisto es previo a la implantación',
    'No hay diferencia: son sinónimos de la misma etapa'
  ],
  ok:1,
  clave:'La cavidad (blastocele) marca la transición de mórula a blastocisto.',
  exp:'La mórula es una masa compacta de 12 a 16 células (blastómeras) sin cavidad interna, resultado de las primeras divisiones del cigoto. Al entrar líquido a través de la zona pelúcida se forma una cavidad, el blastocele, y la mórula se transforma en blastocisto: una estructura con una masa celular interna (embrioblasto, que dará el embrión) desplazada a un polo, y una capa externa de células (trofoblasto, que dará la placenta) que rodea la cavidad. Esta transición ocurre alrededor del cuarto día, mientras la estructura todavía viaja por la trompa o acaba de llegar al útero.',
  no:{
    0:'Es al revés: la mórula es previa y no tiene aún esas dos poblaciones diferenciadas; eso aparece con el blastocisto.',
    2:'Ninguna de las dos está implantada todavía; la implantación ocurre después, ya en fase de blastocisto, hacia el sexto día.',
    3:'Son etapas sucesivas y morfológicamente distintas, no sinónimos.'
  },
  trampa:'Tratar mórula y blastocisto como si fueran nombres intercambiables de la misma etapa.',
  obj:'Distinguir mórula de blastocisto por su estructura y por la aparición del blastocele.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['mórula','blastocisto','blastocele','embrioblasto','trofoblasto']
},
{
  id:'U7-E-Q15', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Segunda semana: implantación', sub:'Disco bilaminar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Durante la segunda semana, el embrioblasto se organiza en dos capas. ¿Cómo se llama esta etapa y cuáles son sus dos capas?',
  ops:[
    'Disco trilaminar, con ectodermo, mesodermo y endodermo',
    'Disco bilaminar, con epiblasto e hipoblasto',
    'Disco bilaminar, con trofoblasto y embrioblasto',
    'Mórula bilaminar, con blastómeras internas y externas'
  ],
  ok:1,
  clave:'Epiblasto (hacia la cavidad amniótica) e hipoblasto (hacia el saco vitelino).',
  exp:'En la segunda semana, el embrioblasto se aplana y se organiza en dos capas adosadas: el epiblasto, una capa cilíndrica alta orientada hacia la cavidad amniótica que se está formando, y el hipoblasto, una capa cúbica orientada hacia la cavidad del blastocisto, que dará origen al saco vitelino primitivo. Esta estructura de dos capas se llama disco bilaminar y es la que, en la tercera semana, se convertirá en disco trilaminar mediante la gastrulación.',
  no:{
    0:'El disco trilaminar con las tres hojas germinativas aparece en la tercera semana, con la gastrulación, no en la segunda.',
    2:'Trofoblasto y embrioblasto son las dos poblaciones del blastocisto completo, no las dos capas del disco embrionario.',
    3:'La estructura de la segunda semana ya no se llama mórula; ese término corresponde a una fase anterior, antes de que exista cavidad.'
  },
  trampa:'Adelantar el vocabulario de la tercera semana (ectodermo, mesodermo, endodermo) a la segunda, cuando todavía solo hay dos capas.',
  obj:'Nombrar correctamente las dos capas del disco embrionario de la segunda semana.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['disco bilaminar', 'epiblasto', 'hipoblasto', 'implantación']
},
{
  id:'U7-E-Q16', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Segunda semana: implantación', sub:'Sitio ectópico',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer con prueba de embarazo positiva presenta dolor pélvico agudo unilateral y sangrado escaso. La ecografía no muestra saco gestacional dentro del útero.',
  enunciado:'¿Cuál es la localización más frecuente de un embarazo ectópico como el que se sospecha en este caso?',
  ops:['El ovario', 'La ampolla de la trompa uterina', 'El cuello uterino', 'La cavidad abdominal'],
  ok:1,
  clave:'La trompa uterina, y dentro de ella la ampolla, concentra la mayoría de los embarazos ectópicos.',
  exp:'Un embarazo ectópico ocurre cuando el blastocisto se implanta fuera de la cavidad uterina, casi siempre por un retraso en su tránsito tubárico que hace que llegue a implantarse antes de alcanzar el útero. Más del 90% de los casos ocurren en la trompa uterina, y dentro de ella el sitio más frecuente es precisamente la ampolla, el mismo lugar donde suele ocurrir la fecundación. La implantación tubárica es clínicamente grave porque la trompa no tiene la capacidad de distensión del útero y puede romperse, causando hemorragia intraabdominal.',
  no:{
    0:'El embarazo ovárico existe pero es muy poco frecuente comparado con el tubárico.',
    2:'El embarazo cervical es una forma rara de ectópico, no la localización más común.',
    3:'El embarazo abdominal es la forma más infrecuente, casi siempre secundaria a un embarazo tubárico que se resolvió hacia la cavidad.'
  },
  trampa:'Pensar que "ectópico" es sinónimo de abdominal. El sitio típico y por mucho el más frecuente es la trompa.',
  obj:'Reconocer el sitio más frecuente de implantación ectópica y su relevancia clínica.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['embarazo ectópico', 'implantación', 'trompa uterina', 'ampolla']
},
{
  id:'U7-E-Q17', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Tercera semana: gastrulación', sub:'Línea primitiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué establece por primera vez la aparición de la línea primitiva en el disco embrionario?',
  ops:[
    'El eje craneocaudal y la simetría bilateral del embrión',
    'La separación entre trofoblasto y embrioblasto',
    'La formación de la cavidad amniótica',
    'La diferenciación entre epiblasto e hipoblasto'
  ],
  ok:0,
  clave:'La línea primitiva marca el extremo caudal y define el eje del cuerpo.',
  exp:'La línea primitiva aparece hacia el día 15 como un engrosamiento lineal del epiblasto, en el extremo que se convertirá en caudal. Su sola aparición ya establece el eje craneocaudal del embrión y su plano de simetría bilateral, antes incluso de que existan las tres hojas germinativas. Es también el sitio por donde las células del epiblasto migran hacia dentro (invaginación) para formar el mesodermo y el endodermo definitivo, el proceso que se conoce como gastrulación propiamente dicha.',
  no:{
    1:'La separación entre trofoblasto y embrioblasto ya existe desde la etapa de blastocisto, antes de la tercera semana.',
    2:'La cavidad amniótica se forma durante la segunda semana, junto con la diferenciación del disco bilaminar.',
    3:'Epiblasto e hipoblasto ya están diferenciados desde la segunda semana; la línea primitiva aparece sobre el epiblasto ya formado.'
  },
  trampa:'Situar la línea primitiva demasiado tarde en la cronología, confundiéndola con un evento posterior a la diferenciación de las hojas.',
  obj:'Explicar el significado y el momento de aparición de la línea primitiva.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['línea primitiva','gastrulación','eje craneocaudal','tercera semana']
},
{
  id:'U7-E-Q18', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Tercera semana: gastrulación', sub:'Notocorda',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple la notocorda durante el desarrollo temprano, además de servir de esbozo axial transitorio?',
  ops:[
    'Induce la formación del tubo neural a partir del ectodermo suprayacente',
    'Da origen directamente a las vértebras',
    'Forma el sistema nervioso periférico',
    'Se convierte en el músculo cardíaco primitivo'
  ],
  ok:0,
  clave:'La notocorda es la señal inductora que convierte el ectodermo suprayacente en placa neural.',
  exp:'La notocorda, un cordón celular derivado del proceso notocordal en la línea media, cumple una función inductora fundamental: la señal que emite hace que el ectodermo situado justo encima se engrose y se diferencie en la placa neural, el primer paso hacia la formación del tubo neural. Con el tiempo, la notocorda misma regresa en gran parte, pero deja como remanente el núcleo pulposo de los discos intervertebrales. No forma vértebras directamente (eso corresponde a las células esclerotómicas de los somitas) ni tejido nervioso periférico ni miocardio.',
  no:{
    1:'Las vértebras se forman a partir del esclerotomo de los somitas, que rodean a la notocorda pero no derivan de ella.',
    2:'El sistema nervioso periférico deriva principalmente de la cresta neural, no de la notocorda.',
    3:'El miocardio se origina del mesodermo esplácnico de la región cardiogénica, sin relación con la notocorda.'
  },
  trampa:'Atribuirle a la notocorda un destino estructural definitivo, cuando su papel principal es de señal inductora transitoria.',
  obj:'Explicar el papel inductor de la notocorda en la neurulación.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['notocorda','inducción neural','placa neural','núcleo pulposo']
},
{
  id:'U7-E-Q19', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Cuarta a octava semana: organogénesis', sub:'Somitas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué tres derivados se diferencia cada somita durante la organogénesis?',
  ops:[
    'Esclerotomo, miotomo y dermatomo',
    'Ectodermo, mesodermo y endodermo',
    'Epiblasto, hipoblasto y notocorda',
    'Trofoblasto, embrioblasto y amnios'
  ],
  ok:0,
  clave:'Cada somita se divide en esclerotomo (hueso), miotomo (músculo) y dermatomo (dermis).',
  exp:'Los somitas son bloques de mesodermo paraxial que se segmentan a ambos lados del tubo neural, aproximadamente uno por día durante la cuarta y quinta semana, y que dan a la superficie del embrión su aspecto segmentado característico de esta etapa. Cada somita se diferencia en tres derivados: el esclerotomo, que migra hacia la notocorda y forma las vértebras y las costillas; el miotomo, que forma la musculatura esquelética asociada a ese segmento; y el dermatomo, que forma la dermis de la piel de esa región. El número de pares de somitas formados es, de hecho, uno de los criterios usados para estimar la edad del embrión en esta etapa.',
  no:{
    1:'Ectodermo, mesodermo y endodermo son las tres hojas germinativas de la gastrulación, no los tres derivados de un somita.',
    2:'Epiblasto, hipoblasto y notocorda pertenecen a etapas y estructuras previas a la formación de los somitas.',
    3:'Trofoblasto, embrioblasto y amnios corresponden a las primeras dos semanas del desarrollo, no a la organogénesis.'
  },
  trampa:'Mezclar los derivados del somita con las hojas germinativas de la gastrulación: son clasificaciones de dos niveles distintos.',
  obj:'Enumerar los tres derivados de cada somita y su destino.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['somitas','esclerotomo','miotomo','dermatomo','organogénesis']
},
{
  id:'U7-E-Q20', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Cuarta a octava semana: organogénesis', sub:'Plegamiento embrionario',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'El plegamiento del embrión en sentido cefalocaudal y lateral durante la cuarta semana tiene, entre otras, ¿cuál consecuencia estructural directa?',
  ops:[
    'El disco embrionario plano se convierte en un cilindro y el intestino primitivo queda incorporado dentro del cuerpo',
    'Se forma la línea primitiva por primera vez',
    'El embrioblasto se separa definitivamente del trofoblasto',
    'Se completa la fusión del tubo neural'
  ],
  ok:0,
  clave:'El plegamiento transforma el disco plano en un embrión tubular con el intestino ya dentro.',
  exp:'Hasta la tercera semana el embrión es un disco relativamente plano. Durante la cuarta semana, el crecimiento más rápido del tubo neural y de los somitas respecto al disco produce un plegamiento tanto en el eje cefalocaudal (formando los pliegues cefálico y caudal) como en el plano lateral (formando los pliegues laterales), que convierte al embrión en una estructura cilíndrica. Este plegamiento incorpora parte del saco vitelino al interior del cuerpo como intestino primitivo, y aproxima la región cardiogénica, que antes estaba en posición craneal externa, hacia su posición torácica definitiva.',
  no:{
    1:'La línea primitiva es un evento de la tercera semana, previo al plegamiento.',
    2:'Trofoblasto y embrioblasto ya son poblaciones distintas desde la primera semana, sin relación directa con el plegamiento.',
    3:'El cierre del tubo neural es un proceso paralelo, pero distinto del plegamiento del disco embrionario en su conjunto.'
  },
  trampa:'Confundir el plegamiento embrionario, que da forma tridimensional a todo el cuerpo, con el cierre del tubo neural, que es un evento más localizado.',
  obj:'Describir la consecuencia estructural del plegamiento embrionario de la cuarta semana.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['plegamiento embrionario','intestino primitivo','organogénesis','cuarta semana']
},
{
  id:'U7-E-Q21', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del sistema nervioso', sub:'Cierre del tubo neural',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un recién nacido presenta un defecto en la porción lumbar de la columna con protrusión de las meninges y tejido neural, cubierto por una membrana fina sin piel suprayacente.',
  enunciado:'¿Qué defecto del cierre del tubo neural corresponde mejor a esta descripción y en qué extremo del neuroporo se originó?',
  ops:[
    'Anencefalia, por fallo del neuroporo craneal',
    'Mielomeningocele, por fallo del neuroporo caudal',
    'Espina bífida oculta, por fallo del neuroporo caudal',
    'Encefalocele, por fallo del neuroporo craneal'
  ],
  ok:1,
  clave:'Mielomeningocele: protrusión de meninges Y tejido neural, con defecto óseo lumbar, por cierre incompleto del neuroporo posterior.',
  exp:'El neuroporo posterior (caudal) se cierra hacia el día 27. Su fallo produce defectos del tubo neural en la región lumbosacra, con un espectro de gravedad: la espina bífida oculta es la forma más leve, sin protrusión visible, solo un defecto óseo cubierto por piel; el meningocele protruye solo meninges con líquido cefalorraquídeo; y el mielomeningocele, el más grave, protruye meninges Y tejido neural expuesto o cubierto por una membrana fina, con déficit neurológico asociado. El caso descrito, con protrusión de tejido neural, corresponde a mielomeningocele.',
  no:{
    0:'La anencefalia es un defecto craneal, no lumbar, y resulta del fallo del neuroporo anterior, no del caudal.',
    2:'La espina bífida oculta no tiene protrusión visible de meninges ni de tejido neural; el caso describe justamente lo contrario.',
    3:'El encefalocele es craneal, por fallo del neuroporo anterior; el caso describe un defecto lumbar.'
  },
  trampa:'Etiquetar cualquier defecto del tubo neural con el nombre genérico "espina bífida" sin precisar la gravedad ni el contenido de la protrusión, que es justo lo que distingue unas formas de otras.',
  obj:'Diferenciar los defectos del cierre del neuroporo caudal por su gravedad y contenido.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['tubo neural','mielomeningocele','neuroporo','espina bífida','defecto del cierre']
},
{
  id:'U7-E-Q22', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del sistema nervioso', sub:'Vesículas encefálicas',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'El extremo craneal del tubo neural se dilata tempranamente en tres vesículas primarias. ¿Cuáles son, de craneal a caudal?',
  ops:[
    'Prosencéfalo, mesencéfalo y rombencéfalo',
    'Telencéfalo, diencéfalo y mesencéfalo',
    'Cerebro, cerebelo y bulbo raquídeo',
    'Metencéfalo, mielencéfalo y médula espinal'
  ],
  ok:0,
  clave:'Las tres vesículas primarias son prosencéfalo, mesencéfalo y rombencéfalo; luego cada una se subdivide.',
  exp:'El extremo craneal del tubo neural forma primero tres vesículas encefálicas primarias: el prosencéfalo (encéfalo anterior), el mesencéfalo (encéfalo medio) y el rombencéfalo (encéfalo posterior). Más adelante, el prosencéfalo se subdivide en telencéfalo y diencéfalo, y el rombencéfalo en metencéfalo (que dará el puente y el cerebelo) y mielencéfalo (que dará el bulbo raquídeo), mientras el mesencéfalo permanece sin subdividirse. Las opciones que mencionan telencéfalo/diencéfalo o metencéfalo/mielencéfalo describen ya el estadio de cinco vesículas, posterior a este.',
  no:{
    1:'Telencéfalo y diencéfalo son subdivisiones posteriores del prosencéfalo, correspondientes ya al estadio de cinco vesículas.',
    2:'Cerebro, cerebelo y bulbo son estructuras adultas ya diferenciadas, no las vesículas primarias tempranas.',
    3:'Metencéfalo y mielencéfalo son subdivisiones del rombencéfalo, del estadio de cinco vesículas, no de las tres primarias.'
  },
  trampa:'Saltar directamente al estadio de cinco vesículas sin pasar primero por las tres primarias, que es lo que pregunta el enunciado.',
  obj:'Ordenar las tres vesículas encefálicas primarias y su secuencia craneocaudal.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['vesículas encefálicas','prosencéfalo','rombencéfalo','sistema nervioso','tubo neural']
},
{
  id:'U7-E-Q23', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Anexos embrionarios y placenta', sub:'Saco vitelino',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Aunque en el ser humano el saco vitelino no almacena una reserva nutritiva significativa, cumple una función hematopoyética e inmunológica temprana relevante. ¿Cuál es?',
  ops:[
    'Es el sitio de origen de las primeras células sanguíneas y de las células germinales primordiales',
    'Produce la gonadotropina coriónica humana',
    'Forma la porción fetal definitiva de la placenta',
    'Da origen al cordón umbilical en su totalidad'
  ],
  ok:0,
  clave:'En su pared aparecen las primeras células sanguíneas y ahí se originan las células germinales primordiales, que después migran a las gónadas.',
  exp:'El saco vitelino, aunque reducido y sin función nutritiva relevante en la especie humana, conserva dos papeles biológicos importantes: en su pared, hacia la tercera semana, aparecen los primeros islotes sanguíneos donde se forman las células sanguíneas y los vasos primitivos (hematopoyesis extraembrionaria temprana), y en su endodermo se originan las células germinales primordiales, que más adelante migran a lo largo del mesenterio dorsal hasta las crestas gonadales, donde formarán los futuros gametos.',
  no:{
    1:'La gonadotropina coriónica la produce el sincitiotrofoblasto, no el saco vitelino.',
    2:'La porción fetal de la placenta deriva del corion, no del saco vitelino.',
    3:'El cordón umbilical se forma sobre todo a partir del pedículo de fijación (alantoides incluida), aunque el saco vitelino queda incluido como un remanente dentro de él, no lo origina en su totalidad.'
  },
  trampa:'Asumir que, al no tener función nutritiva relevante en humanos, el saco vitelino no cumple ninguna función. Sí la cumple, y es hematopoyética y germinal.',
  obj:'Reconocer las funciones hematopoyética y germinal tempranas del saco vitelino humano.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['saco vitelino','hematopoyesis','células germinales primordiales','anexos embrionarios']
},
{
  id:'U7-E-Q24', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Anexos embrionarios y placenta', sub:'Vellosidades coriónicas',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿En qué se basa la utilidad diagnóstica de la biopsia de vellosidades coriónicas durante el primer trimestre del embarazo?',
  ops:[
    'Las vellosidades contienen líquido amniótico con células fetales descamadas',
    'Las vellosidades coriónicas derivan del trofoblasto, con el mismo origen genético que el embrión',
    'Las vellosidades son tejido materno que refleja el estado nutricional de la madre',
    'Las vellosidades solo se forman después de la semana 20'
  ],
  ok:1,
  clave:'Al derivar del trofoblasto, las vellosidades comparten el genoma del embrión y permiten un diagnóstico genético temprano.',
  exp:'Las vellosidades coriónicas son proyecciones del corion (derivado del trofoblasto) que se ramifican dentro del espacio intervelloso materno para el intercambio de nutrientes y gases. Como el trofoblasto proviene del mismo cigoto que el embrioblasto, las células de las vellosidades comparten el genoma fetal, lo que permite obtener una muestra para estudio cromosómico o genético sin necesidad de puncionar la cavidad amniótica. Esto es lo que distingue a la biopsia de vellosidades coriónicas (realizable ya en el primer trimestre) de la amniocentesis, que obtiene células fetales descamadas suspendidas en el líquido amniótico y suele hacerse más adelante.',
  no:{
    0:'Eso describe el fundamento de la amniocentesis, no de la biopsia de vellosidades coriónicas.',
    2:'Las vellosidades son tejido de origen fetal (trofoblástico), no materno.',
    3:'Las vellosidades coriónicas se desarrollan desde etapas tempranas, mucho antes de la semana 20; por eso el procedimiento puede hacerse en el primer trimestre.'
  },
  trampa:'Confundir el fundamento genético de la biopsia de vellosidades con el de la amniocentesis. Ambas dan información fetal, pero por vías tisulares distintas.',
  obj:'Explicar por qué las vellosidades coriónicas permiten diagnóstico genético prenatal temprano.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['vellosidades coriónicas','corion','diagnóstico prenatal','trofoblasto','placenta']
}

]);
