/* ============================================================
   EXPLICACIONES ENURM — lote 1  (20 preguntas)
   Primer lote sobre el banco de examenes REALES del ENURM
   dominicano (2021 y 2022). A diferencia del banco MIR, aqui la
   respuesta correcta y la bibliografia son OFICIALES: vienen
   resaltadas en el propio PDF de la UASD. Lo que se anade aqui
   es el razonamiento: por que esa es la correcta, por que falla
   cada una de las otras y donde esta la trampa.

   Cada entrada reescribe tambien `esp`, `tema` y `sub`, porque
   el clasificador automatico reparte por palabras clave y se
   equivoca a menudo.

   Criterio de seleccion del lote: las preguntas de arranque de
   2022-A, que cubren un abanico amplio de especialidades y
   sirven para fijar el estandar de los lotes siguientes.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ==================== ANATOMÍA / TRAUMA ==================== */
'ENURM-2022-A001': {
  esp:'Ciencias Básicas', tema:'Anatomía', sub:'Plexo braquial',
  clave:'Fractura de diáfisis humeral con imposibilidad de extender: nervio radial.',
  exp:'El *nervio radial* desciende en diagonal por la cara posterior del húmero alojado en el *canal de torsión* o surco radial, donde va prácticamente pegado al hueso. Esa relación tan íntima es la que lo convierte en el nervio que se lesiona cuando la diáfisis humeral se fractura en su *tercio medio*, exactamente el nivel que describe el caso. Como el radial inerva toda la musculatura *extensora* del antebrazo y la mano, al perderse su función quedan sin oposición los flexores: el paciente no puede extender la muñeca ni los dedos y la mano cae, lo que clásicamente se llama *mano péndula* o mano caída. La regla que ordena todo el tema es sencilla: lo que viene del fascículo posterior extiende, lo que viene de los fascículos anteriores flexiona.',
  no:{0:'El mediano va por la cara anterior del brazo, no en contacto con la diáfisis; su lesión da dificultad para la flexión y la pinza, no para extender.',1:'El cubital se vuelve vulnerable en el epicóndilo medial, en el extremo distal del húmero, no en el tercio medio; su lesión produce mano en garra.',2:'El musculocutáneo inerva el bíceps braquial: su lesión afectaría la flexión del codo y la supinación, no la extensión de los dedos.'},
  trampa:'Buscar el nervio solo por la función perdida sin mirar el NIVEL de la fractura. Las dos cosas tienen que encajar: la altura de la lesión y el territorio afectado.',
  dx:[],
  obj:'Relacionar cada segmento del húmero con el nervio que lo acompaña y con el déficit resultante.',
  ref:'ENURM 2022-A, pregunta 1. Bibliografía oficial: Schwartz, Principios de Cirugía, 10ma ed., capítulo 44.'
},

/* ==================== QUEMADOS ==================== */
'ENURM-2022-A002': {
  esp:'Cirugía', tema:'Quemaduras', sub:'Antimicrobiano tópico',
  clave:'Sulfadiazina argéntica: tópico de amplio espectro de elección en el quemado, con acción de 12 a 24 horas.',
  exp:'La superficie quemada pierde la barrera cutánea y se convierte en un medio ideal para la colonización bacteriana, así que el objetivo del tópico no es esterilizar sino *retrasar y controlar* esa colonización mientras la herida evoluciona. La *sulfadiazina argéntica* es el estándar porque reúne tres cosas a la vez: espectro amplio que cubre grampositivos, gramnegativos —incluida *Pseudomonas*— y *Candida*; buena tolerancia sobre tejido lesionado, ya que no duele al aplicarse como sí lo hace el acetato de mafenida; y una *duración de acción de 12 a 24 horas*, que es justo el dato que pide la pregunta y lo que permite curar una o dos veces al día. Su limitación conocida es que penetra mal la escara, por lo que no sustituye al desbridamiento, y que puede producir leucopenia transitoria.',
  no:{0:'La nitrofurazona tiene espectro más estrecho y hoy se usa poco en el quemado extenso; no es el tópico de elección.',1:'El ácido fusídico cubre sobre todo estafilococo y se emplea en infecciones cutáneas localizadas, no en superficie quemada amplia.',2:'La bacitracina cubre casi solo grampositivos y no alcanza Pseudomonas, que es precisamente el patógeno temido en el quemado.'},
  trampa:'Elegir por familiaridad con el fármaco en heridas comunes. La pregunta pide AMPLIO espectro y una duración concreta: eso deja fuera a bacitracina y ácido fusídico.',
  dx:[],
  obj:'Reconocer el antimicrobiano tópico de elección en el manejo inicial del paciente quemado.',
  ref:'ENURM 2022-A, pregunta 2. Bibliografía oficial: Sabiston, Tratado de Cirugía, 19ª ed., capítulo 21, pág. 553.'
},

/* ==================== FISIOLOGÍA: ERITROPOYESIS ==================== */
'ENURM-2022-A003': {
  esp:'Ciencias Básicas', tema:'Fisiología', sub:'Eritropoyesis',
  clave:'El estímulo primario de la eritropoyesis es la HIPOXIA tisular; la eritropoyetina es el mensajero, no el estímulo inicial.',
  exp:'Esta pregunta separa el *estímulo* del *mediador*, que es donde casi todo el mundo tropieza. El organismo no mide directamente cuántos glóbulos rojos tiene: lo que detecta es la *oxigenación de los tejidos*. Cuando la entrega de oxígeno cae —por altitud, por anemia, por enfermedad pulmonar crónica o por cualquier causa de hipoxia— unas células intersticiales peritubulares del riñón lo perciben y responden *sintetizando eritropoyetina*. La eritropoyetina viaja entonces a la médula ósea y estimula la proliferación y diferenciación de los precursores eritroides. Es decir, la secuencia es: *baja concentración de oxígeno → eritropoyetina → más eritrocitos*. Por eso, si la pregunta pide el *principal factor que estimula la producción*, la respuesta es el primer eslabón, la hipoxia, y no el eslabón intermedio. La lógica se confirma clínicamente: el paciente con insuficiencia renal crónica se vuelve anémico precisamente porque, aunque la hipoxia exista, el riñón dañado ya no puede fabricar la eritropoyetina que la traduce en respuesta.',
  no:{1:'La eritropoyetina es el mediador hormonal que transmite la señal, pero se libera EN RESPUESTA a la hipoxia: es el paso intermedio, no el estímulo inicial.',2:'El aumento de la división celular es el resultado final del proceso, no su causa.',3:'La exposición a altas concentraciones de oxígeno produce el efecto contrario: frena la eritropoyesis porque desaparece la señal de hipoxia.'},
  trampa:'La opción "eritropoyetina" es la que suena más técnica y por eso atrae, pero la pregunta busca el gatillo, no el mensajero. Estímulo e intermediario no son lo mismo.',
  dx:[],
  obj:'Ordenar la cascada hipoxia - eritropoyetina - eritropoyesis y distinguir estímulo de mediador.',
  ref:'ENURM 2022-A, pregunta 3. Bibliografía oficial: Guyton y Hall, Tratado de Fisiología Médica, 13ª ed., capítulo 33, pág. 453.'
},

/* ==================== INMUNOLOGÍA ==================== */
'ENURM-2022-A004': {
  esp:'Ciencias Básicas', tema:'Inmunología', sub:'Inmunidad innata',
  clave:'La fagocitosis es inmunidad INNATA: inespecífica, inmediata y sin memoria.',
  exp:'La inmunidad se divide en dos brazos que se distinguen por tres rasgos: *especificidad*, *rapidez* y *memoria*. La *inmunidad innata o natural* actúa en minutos, no distingue un patógeno concreto de otro y no deja memoria; sus herramientas son las barreras físicas, el complemento, las células NK y, sobre todo, la *fagocitosis* llevada a cabo por neutrófilos y macrófagos. La *inmunidad adaptativa o adquirida* tarda días en montarse, reconoce antígenos específicos y sí deja memoria; sus herramientas son los linfocitos T y B y los *anticuerpos* que estos últimos producen. Con ese esquema, la única opción que pertenece al brazo innato es la fagocitosis: es la respuesta inmediata e inespecífica que engulle y destruye al microorganismo sin necesidad de haberlo visto antes.',
  no:{0:'La formación de inmunoglobulinas depende de los linfocitos B: es la rama adaptativa, no la natural.',1:'Los anticuerpos son el producto de la respuesta adaptativa humoral, con especificidad y memoria.',3:'La vacunación es inmunidad adaptativa inducida artificialmente: su fundamento es precisamente generar memoria específica.'},
  trampa:'Las tres opciones incorrectas giran alrededor de anticuerpos, que es lo primero que viene a la cabeza al pensar en "inmunidad". El filtro que ordena es: ¿hay especificidad y memoria? Si la hay, es adaptativa.',
  dx:[],
  obj:'Clasificar los mecanismos efectores en inmunidad innata frente a adaptativa.',
  ref:'ENURM 2022-A, pregunta 4. Bibliografía oficial: Guyton y Hall, Tratado de Fisiología Médica, 13ª ed., capítulo 34, pág. 457.'
},

/* ==================== EMBRIOLOGÍA ==================== */
'ENURM-2022-A005': {
  esp:'Ciencias Básicas', tema:'Embriología', sub:'Defectos del tubo neural',
  clave:'Anencefalia: fallo de cierre del neuroporo ANTERIOR. Es defecto del tubo neural; el onfalocele y la gastrosquisis son de pared abdominal.',
  exp:'El tubo neural se cierra durante la *cuarta semana* del desarrollo, y lo hace como una cremallera que avanza desde el centro hacia los dos extremos. Si falla el cierre del *neuroporo anterior* (craneal) se produce la *anencefalia*, con ausencia de bóveda craneal y de gran parte del encéfalo; si falla el *neuroporo posterior* (caudal) se produce la *espina bífida*. Ambas son, por definición, defectos del tubo neural. Las otras tres opciones pertenecen a categorías distintas: la *hidrocefalia* es una alteración de la circulación o reabsorción del líquido cefalorraquídeo, que en la mayoría de los casos aparece sobre un tubo neural que sí cerró; y el *onfalocele* y la *gastrosquisis* son defectos del cierre de la *pared abdominal*, no del sistema nervioso. La consecuencia práctica de todo esto es la que aparece en la pregunta 20 de este mismo examen: como el cierre ocurre en la cuarta semana, la suplementación con ácido fólico solo protege si se inicia *antes* del embarazo o en sus primerísimas semanas.',
  no:{1:'La hidrocefalia es un trastorno de la dinámica del líquido cefalorraquídeo, no un fallo de cierre del tubo neural.',2:'La gastrosquisis es un defecto de la pared abdominal, lateral al cordón y sin saco que lo cubra.',3:'El onfalocele también es un defecto de pared abdominal, con las vísceras herniadas dentro de un saco en la base del cordón.'},
  trampa:'Agrupar como "malformaciones congénitas" cosas de origen embriológico muy distinto. Aquí hay que preguntar qué ESTRUCTURA falló al cerrarse: tubo neural o pared abdominal.',
  dx:[],
  obj:'Identificar los defectos del tubo neural y separarlos de los defectos de pared abdominal.',
  ref:'ENURM 2022-A, pregunta 5. Bibliografía oficial: Carey J, White B, Genética Médica, 4ª ed., Elsevier, cap. 12, págs. 233-234.'
},

/* ==================== HEMATOLOGÍA ==================== */
'ENURM-2022-A006': {
  esp:'Ciencias Básicas', tema:'Histología', sub:'Serie blanca',
  clave:'Núcleo bilobulado y elevación en parasitosis: eosinófilo.',
  exp:'La pregunta da dos pistas y ambas apuntan al mismo lugar. La primera es *morfológica*: el *eosinófilo* tiene un núcleo característicamente *bilobulado*, en forma de alforja o de anteojos, con gránulos citoplasmáticos grandes que se tiñen intensamente de rojo-anaranjado con la eosina. La segunda es *funcional*: el eosinófilo se eleva en las *parasitosis*, sobre todo en las que tienen fase de migración tisular —como ascaris, strongyloides, toxocara o las uncinarias— y también en procesos alérgicos. La razón de esa especialización es que sus gránulos contienen proteína básica mayor y proteína catiónica, capaces de dañar la cutícula de helmintos que son demasiado grandes para ser fagocitados. Conviene recordar, además, que en la parasitosis *estrictamente intraluminal*, como una oxiuriasis sin invasión tisular, la eosinofilia puede ser escasa o nula: lo que la dispara es el contacto del parásito con el tejido.',
  no:{0:'Las plaquetas no tienen núcleo: son fragmentos citoplasmáticos de los megacariocitos.',2:'El neutrófilo tiene núcleo polilobulado, de tres a cinco lóbulos, y se eleva sobre todo en infecciones bacterianas agudas.',3:'El reticulocito es un eritrocito joven, anucleado, con restos de ARN ribosómico; se eleva en respuesta a hemólisis o hemorragia.'},
  trampa:'Fijarse solo en la parasitosis y no en la morfología, o al revés. La pregunta da las dos claves justamente para que se confirmen entre sí: bilobulado más parásitos igual eosinófilo.',
  dx:[],
  obj:'Asociar la morfología nuclear de cada leucocito con la situación clínica en que se eleva.',
  ref:'ENURM 2022-A, pregunta 6. Bibliografía oficial: Ross, Histología: Texto y Atlas, 7ª ed., pág. 307.'
},

/* ==================== DERMATOLOGÍA ==================== */
'ENURM-2022-A007': {
  esp:'Medicina Interna', tema:'Dermatología', sub:'Psoriasis',
  clave:'Inflamatoria crónica, inmunológica, con afectación de piel, articulaciones y otros órganos: psoriasis.',
  exp:'De las cuatro opciones, la *psoriasis* es la única que cumple simultáneamente los tres elementos del enunciado. Es *crónica*, con un curso de brotes y remisiones a lo largo de la vida. Es de *origen inmunológico*, mediada por el eje de linfocitos Th17 y el factor de necrosis tumoral, que es exactamente la razón por la que responde a los fármacos biológicos dirigidos contra esas dianas. Y, sobre todo, es *sistémica*: además de las placas eritematosas con escama nacarada en superficies extensoras, cuero cabelludo y región sacra, hasta un tercio de los pacientes desarrolla *artritis psoriásica*, y la enfermedad se asocia de forma independiente con síndrome metabólico, riesgo cardiovascular aumentado y enfermedad inflamatoria intestinal. Esa dimensión extracutánea es lo que la pregunta subraya al decir "y otros órganos", y lo que la separa de las demás opciones, que son procesos limitados esencialmente a la piel.',
  no:{1:'El liquen plano es inflamatorio y de mecanismo inmunológico, pero afecta piel y mucosas; no produce la afectación articular ni sistémica que describe el enunciado.',2:'La pitiriasis rosada es autolimitada, dura de seis a ocho semanas y se resuelve sola: no es crónica.',3:'El eccema es una reacción inflamatoria cutánea, habitualmente por contacto o atopia, sin compromiso articular ni multiorgánico.'},
  trampa:'Quedarse en "enfermedad de la piel" y no atender a la palabra articulaciones, que es la que descarta de golpe a las otras tres.',
  dx:[],
  obj:'Reconocer la psoriasis como enfermedad inflamatoria sistémica y no como un proceso solo cutáneo.',
  ref:'ENURM 2022-A, pregunta 7. Bibliografía oficial: Farreras-Rozman, Medicina Interna, 19ª ed., sección XI, cap. 163, pág. 1269.'
},

/* ==================== ANEMIAS ==================== */
'ENURM-2022-A008': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Anemia megaloblástica',
  clave:'Déficit de B12, folato o factor intrínseco: anemia MEGALOBLÁSTICA, con eritrocitos de gran tamaño.',
  exp:'La vitamina B12 y el ácido fólico son cofactores necesarios para la *síntesis de ADN*. Cuando faltan, el núcleo de la célula precursora no puede replicarse al ritmo que le corresponde, pero el citoplasma sigue madurando con normalidad: se produce una *asincronía núcleo-citoplasma* y la célula sigue creciendo mientras espera poder dividirse. El resultado es un eritrocito *grande*, macrocítico, con volumen corpuscular medio por encima de 100 fL. El *factor intrínseco* entra en la misma categoría porque es la proteína que secretan las células parietales gástricas y sin la cual la B12 no puede absorberse en el íleon terminal; su ausencia —por gastritis atrófica autoinmune— produce la *anemia perniciosa*, que es una anemia megaloblástica por déficit funcional de B12. Un detalle que conviene tener presente: el déficit de B12 añade además manifestaciones *neurológicas* por desmielinización, mientras que el de folato no lo hace, y esa diferencia es la que obliga a no tratar a ciegas con folato sin haber descartado antes el déficit de B12.',
  no:{0:'Eritrocito pequeño con hemoglobina corpuscular baja describe la anemia MICROcítica hipocrómica, típica del déficit de hierro o de las talasemias.',1:'La forma de media luna es el drepanocito de la anemia falciforme, un trastorno estructural de la hemoglobina.',3:'Los glóbulos rojos fraccionados son esquistocitos y aparecen en las anemias hemolíticas microangiopáticas.'},
  trampa:'Confundir los dos grandes patrones morfológicos. Regla corta: hierro achica, B12 y folato agrandan.',
  dx:['Anemia ferropénica','Anemia falciforme','Anemia hemolítica microangiopática'],
  obj:'Relacionar el déficit de B12, folato o factor intrínseco con la macrocitosis.',
  ref:'ENURM 2022-A, pregunta 8. Bibliografía oficial: Guyton, 13ª ed., unidad VI, pág. 452.'
},

/* ==================== H. PYLORI ==================== */
'ENURM-2022-A009': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Erradicación de H. pylori',
  clave:'Úlcera duodenal con ureasa positiva: triple terapia con IBP + claritromicina + amoxicilina.',
  exp:'El test de ureasa positivo confirma la presencia de *Helicobacter pylori*, y en una úlcera duodenal asociada a esta bacteria el tratamiento no consiste solo en suprimir el ácido, sino en *erradicar el microorganismo*: si no se erradica, la úlcera recidiva en un porcentaje muy alto de casos en el plazo de un año. El esquema clásico de primera línea es la *triple terapia*: un *inhibidor de la bomba de protones* dos veces al día, *claritromicina* y *amoxicilina*, durante *14 días*. Cada componente cumple un papel: el inhibidor eleva el pH gástrico, lo que además de favorecer la cicatrización mejora la estabilidad y la eficacia de los antibióticos, y los dos antibióticos actúan de forma combinada para reducir la aparición de resistencias. La duración de 14 días frente a 7 se asocia a tasas de erradicación mayores. En áreas donde la resistencia a claritromicina supera el 15% se prefiere una terapia cuádruple con bismuto, pero el esquema que la pregunta busca como primera línea es el triple.',
  no:{0:'El omeprazol en monoterapia cicatriza la úlcera pero no elimina la bacteria: la recidiva es la norma.',2:'Los anti-H2 con antiácidos tienen menor potencia antisecretora y tampoco erradican H. pylori.',3:'Retirar los AINEs con un inhibidor de la bomba es el manejo de la úlcera POR AINEs, no de la asociada a H. pylori, que es el escenario del caso.'},
  trampa:'Tratar el síntoma en vez de la causa. Ante ureasa positiva, la pregunta que hay que hacerse no es cómo cicatrizo, sino cómo erradico.',
  dx:[],
  obj:'Indicar el esquema de erradicación de primera línea en la úlcera péptica por H. pylori.',
  ref:'ENURM 2022-A, pregunta 9. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., pág. 1922.'
},

'ENURM-2022-A010': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Neoplasia asociada a H. pylori',
  clave:'H. pylori se asocia a adenocarcinoma gástrico (y a linfoma MALT): es carcinógeno tipo I.',
  exp:'*Helicobacter pylori* está clasificado por la Agencia Internacional para la Investigación del Cáncer como *carcinógeno de tipo I*, es decir, carcinógeno probado en humanos, y la neoplasia con la que se relaciona es el *adenocarcinoma gástrico*, sobre todo el de tipo intestinal y de localización distal. El mecanismo es una secuencia larga y bien descrita: la infección crónica produce *gastritis crónica*, que evoluciona a *atrofia gástrica*, luego a *metaplasia intestinal*, después a *displasia* y finalmente a carcinoma. Es decir, el daño no es directo sobre el ADN sino a través de décadas de inflamación sostenida y recambio celular acelerado. La otra neoplasia clásicamente asociada, que conviene tener en la cabeza porque aparece mucho en examen, es el *linfoma MALT* gástrico, con la particularidad notable de que en sus estadios iniciales puede remitir solo con erradicar la bacteria, sin quimioterapia.',
  no:{1:'El leiomioma es un tumor benigno de músculo liso, sin relación con la infección por H. pylori.',2:'El tumor del estroma gastrointestinal se asocia a mutaciones de KIT o PDGFRA, no a esta bacteria.',3:'El condroma es un tumor cartilaginoso y no guarda ninguna relación con el estómago.'},
  trampa:'Recordar solo el linfoma MALT y olvidar que la asociación más frecuente y de mayor peso poblacional es con el adenocarcinoma.',
  dx:[],
  obj:'Conocer la asociación entre H. pylori y el adenocarcinoma gástrico y su secuencia patogénica.',
  ref:'ENURM 2022-A, pregunta 10. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., pág. 1915.'
},

/* ==================== PBE ==================== */
'ENURM-2022-A011': {
  esp:'Medicina Interna', tema:'Hepatología', sub:'Peritonitis bacteriana espontánea',
  clave:'PBE: 250 o más polimorfonucleares por microlitro en el líquido ascítico. Ese es el umbral que obliga a tratar.',
  exp:'La *peritonitis bacteriana espontánea* es la infección del líquido ascítico sin un foco intraabdominal quirúrgico que la explique, y su diagnóstico es *citológico, no microbiológico*. El criterio es un recuento de *polimorfonucleares igual o superior a 250 células por microlitro* en el líquido obtenido por paracentesis. Es importante entender por qué no se espera al cultivo: los cultivos son negativos en un porcentaje alto de casos aun habiendo infección real, y la mortalidad de la PBE no tratada es muy elevada, así que el recuento celular es lo que dispara el tratamiento antibiótico empírico —cefalosporina de tercera generación— de forma inmediata. Dos matices que suelen preguntarse: si la paracentesis es traumática y el líquido tiene sangre, se resta un polimorfonuclear por cada 250 hematíes para corregir el recuento; y en los pacientes con riesgo de síndrome hepatorrenal se asocia *albúmina* al antibiótico porque reduce la mortalidad.',
  no:{1:'200 células por microlitro no es el umbral aceptado y dejaría el diagnóstico por debajo del criterio establecido.',2:'150 células por microlitro tampoco corresponde a ningún criterio validado para PBE.',3:'50 células por microlitro está dentro de lo que puede verse en una ascitis no infectada.'},
  trampa:'Esperar el cultivo antes de tratar. El número que decide es el recuento de polimorfonucleares, y 250 es la cifra que hay que tener memorizada.',
  dx:[],
  obj:'Fijar el criterio diagnóstico citológico de la peritonitis bacteriana espontánea.',
  ref:'ENURM 2022-A, pregunta 11. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., pág. 1931.'
},

/* ==================== CÁNCER GÁSTRICO ==================== */
'ENURM-2022-A012': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Cáncer gástrico',
  clave:'Los nitratos de la dieta, convertidos en nitrosaminas, aumentan el riesgo de adenocarcinoma gástrico.',
  exp:'El *alto consumo de nitratos* es un factor de riesgo dietético clásico para el adenocarcinoma gástrico. El mecanismo pasa por su conversión: los nitratos presentes en alimentos *ahumados, salados y conservados* son transformados por bacterias en *nitritos* y de ahí en *nitrosaminas*, que son compuestos con capacidad mutagénica directa sobre el epitelio gástrico. Ese efecto se potencia cuando existe además *hipoclorhidria*, porque el ambiente menos ácido favorece el sobrecrecimiento bacteriano que realiza la conversión, lo que enlaza este factor con la gastritis atrófica crónica por *H. pylori* de las preguntas anteriores. El patrón epidemiológico lo confirma: las regiones con mayor consumo de conservas saladas y ahumadas tienen tasas más altas de cáncer gástrico, y esas tasas descienden en las poblaciones que migran a zonas con dieta rica en frutas y vegetales frescos, cuyos antioxidantes tienen efecto protector.',
  no:{0:'Los pólipos sigmoideos se relacionan con el cáncer colorrectal, no con el gástrico.',2:'La parasitosis a repetición no figura entre los factores de riesgo establecidos de adenocarcinoma gástrico.',3:'El síndrome de Behçet es una vasculitis sistémica; puede dar úlceras orales y genitales, pero no predispone a cáncer gástrico.'},
  trampa:'Confundir factores de riesgo de cáncer colorrectal con los del gástrico. Los pólipos apuntan al colon; los nitratos y el ahumado, al estómago.',
  dx:[],
  obj:'Identificar los factores dietéticos de riesgo del adenocarcinoma gástrico y su mecanismo.',
  ref:'ENURM 2022-A, pregunta 12. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., cap. 109, pág. 534.'
},

/* ==================== MALABSORCIÓN Y B12 ==================== */
'ENURM-2022-A013': {
  esp:'Pediatría', tema:'Nutrición', sub:'Déficit de vitamina B12',
  clave:'Malabsorción con neuropatía periférica: déficit de vitamina B12.',
  exp:'La clave del caso está en la combinación de *malabsorción* y *neuropatía periférica*. De las cuatro carencias propuestas, la única que produce daño neurológico característico es la de *vitamina B12*. La B12 es cofactor de la metionina sintasa, y su déficit interrumpe la síntesis de *mielina*: aparece entonces una neuropatía periférica con parestesias y pérdida de sensibilidad vibratoria y posicional, que si progresa afecta los cordones posteriores y laterales de la médula en lo que se conoce como *degeneración combinada subaguda*. Un síndrome de malabsorción explica bien el déficit porque la B12 se absorbe en un punto muy concreto, el *íleon terminal*, y unida al factor intrínseco: cualquier proceso que dañe ese segmento o reduzca la superficie absortiva la compromete. El detalle clínico que no conviene olvidar es que el daño neurológico puede aparecer *antes* que la anemia y que, si se instaura durante mucho tiempo, puede no revertir por completo con el tratamiento.',
  no:{0:'El déficit de calcio produce tetania, espasmo carpopedal y alteraciones óseas, no neuropatía periférica.',2:'El déficit de ácido fólico causa anemia megaloblástica pero, a diferencia del de B12, no produce afectación neurológica.',3:'El déficit de hierro produce anemia microcítica; puede dar pica o glositis, pero no neuropatía.'},
  trampa:'Confundir B12 con folato porque ambas dan anemia megaloblástica. El dato que las separa es justamente el neurológico: la neuropatía es de la B12.',
  dx:['Déficit de ácido fólico','Déficit de hierro'],
  obj:'Usar la afectación neurológica para distinguir el déficit de B12 del de folato.',
  ref:'ENURM 2022-A, pregunta 13. Bibliografía oficial: Nelson, Tratado de Pediatría, 20ª ed., cap. 454, págs. 2427-2428.'
},

/* ==================== MIASTENIA ==================== */
'ENURM-2022-A014': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Unión neuromuscular',
  clave:'Ptosis, diplopía, disfagia y debilidad proximal que EMPEORA con el ejercicio: unión neuromuscular.',
  exp:'El rasgo que localiza la lesión es la *fatigabilidad*: la debilidad que empeora con el uso repetido y mejora con el reposo es prácticamente exclusiva de la *unión neuromuscular*, y el cuadro descrito —*ptosis*, *diplopía*, *disfagia* y debilidad de predominio *proximal*— es el de la *miastenia gravis*. El mecanismo lo explica: hay anticuerpos contra el *receptor de acetilcolina* de la membrana postsináptica, de modo que el número de receptores disponibles está reducido. Con cada estímulo sucesivo la cantidad de acetilcolina liberada disminuye fisiológicamente, y como el margen de seguridad de la transmisión ya está mermado, llega un punto en que la contracción falla: de ahí que el paciente empeore a lo largo del día y con el esfuerzo sostenido. La musculatura *ocular y bulbar* se afecta de forma precoz y preferente porque tiene un margen de seguridad sináptico menor. Conviene asociar también que la miastenia se acompaña con frecuencia de patología tímica, timoma o hiperplasia, dato que aparece en otras preguntas del propio banco.',
  no:{0:'Una lesión encefálica daría déficit focal, alteración del nivel de conciencia o signos de vía larga, no fatigabilidad fluctuante.',1:'La lesión medular produce un nivel sensitivo y afectación de vía larga por debajo de la lesión, no ptosis ni diplopía.',2:'La neuropatía periférica da debilidad de predominio distal con arreflexia y alteración sensitiva, y no empeora característicamente con el ejercicio repetido.'},
  trampa:'Ver debilidad y pensar directamente en nervio o músculo. La palabra que decide es "empeora con el ejercicio": eso es la unión neuromuscular.',
  dx:['Neuropatía periférica','Miopatía inflamatoria'],
  obj:'Localizar la lesión a partir del patrón de fatigabilidad y de la afectación oculobulbar.',
  ref:'ENURM 2022-A, pregunta 14. Bibliografía oficial: Harrison, Medicina Interna, 19ª ed., cap. 437, pág. 2540.'
},

/* ==================== QUISTE TIROGLOSO ==================== */
'ENURM-2022-A015': {
  esp:'Cirugía', tema:'Cabeza y cuello', sub:'Quiste del conducto tirogloso',
  clave:'Masa en LÍNEA MEDIA del cuello que asciende con la deglución: quiste del conducto tirogloso.',
  exp:'Dos datos del caso bastan para el diagnóstico. El primero es la *localización en la línea media*, sobre el hioides y el cartílago tiroides. El segundo, y el más específico, es que la masa *se moviliza con la deglución*: eso ocurre porque el quiste es un resto del *conducto tirogloso*, el trayecto por el que la glándula tiroides desciende durante el desarrollo desde el foramen ciego de la lengua hasta su posición cervical definitiva, y ese trayecto mantiene una adherencia al *hueso hioides*, que sube al tragar y con la protrusión lingual. La consecuencia quirúrgica de ese detalle anatómico es la *técnica de Sistrunk*: no basta con extirpar el quiste, hay que resecar también el *cuerpo del hioides* y el trayecto hasta la base de la lengua, porque de lo contrario la recidiva es la regla. Antes de operar conviene confirmar que existe tiroides normalmente situada, ya que en un pequeño porcentaje de casos el quiste contiene el único tejido tiroideo funcionante del paciente.',
  no:{1:'El quiste branquial es LATERAL, por delante del esternocleidomastoideo, y no asciende con la deglución.',2:'El higroma quístico es una malformación linfática, blanda, habitualmente en el triángulo posterior del cuello y presente desde el nacimiento.',3:'El quiste dermoide puede ser medial pero no mantiene adherencia al hioides, así que no se moviliza con la deglución.'},
  trampa:'Quedarse en "masa cervical" sin usar los dos discriminadores que la pregunta regala: línea media y movimiento con la deglución.',
  dx:['Quiste branquial','Higroma quístico','Quiste dermoide'],
  obj:'Diagnosticar el quiste tirogloso por su localización y su movilidad con la deglución.',
  ref:'ENURM 2022-A, pregunta 15. Bibliografía oficial: Brunicardi, Schwartz, 10ª ed., pág. 598.'
},

/* ==================== ANTIDIABÉTICOS ==================== */
'ENURM-2022-A016': {
  esp:'Farmacología', tema:'Antidiabéticos', sub:'Inhibidores de SGLT2',
  clave:'Bajar el umbral renal de glucosa para provocar glucosuria: inhibidor de SGLT2, empagliflozina.',
  exp:'El enunciado describe con precisión el mecanismo de los *inhibidores del cotransportador sodio-glucosa tipo 2 (SGLT2)*, y la *empagliflozina* es el representante de esa familia entre las opciones. En condiciones normales, el túbulo contorneado proximal reabsorbe prácticamente toda la glucosa filtrada, y solo cuando la glucemia supera un *umbral renal* de unos 180 mg/dL aparece glucosuria. Al bloquear SGLT2 ese umbral cae a alrededor de *50 mg/dL*, de modo que el riñón empieza a eliminar glucosa por orina con glucemias mucho menores: se pierden del orden de 60 a 80 gramos de glucosa al día, lo que baja la glucemia y, de paso, produce pérdida de peso y reducción de la presión arterial. Una ventaja del mecanismo es que es *independiente de la insulina*, por lo que no causa hipoglucemia por sí mismo. Su relevancia actual va más allá del control glucémico: estos fármacos han demostrado reducir hospitalización por insuficiencia cardíaca y progresión de la enfermedad renal crónica. Sus efectos adversos derivan lógicamente de la glucosuria: infecciones genitourinarias micóticas y, con menor frecuencia, cetoacidosis euglucémica.',
  no:{0:'La glibenclamida es una sulfonilurea: estimula la secreción de insulina por la célula beta y sí puede causar hipoglucemia.',1:'La metformina actúa sobre todo reduciendo la producción hepática de glucosa y mejorando la sensibilidad a la insulina; no toca el umbral renal.',2:'La sitagliptina es un inhibidor de DPP-4, que prolonga la acción de las incretinas: mecanismo incretínico, no renal.'},
  trampa:'La pregunta describe el mecanismo sin nombrar la familia. La palabra que la resuelve es "umbral renal de excreción de glucosa": eso solo lo mueve un inhibidor de SGLT2.',
  dx:[],
  obj:'Relacionar el mecanismo renal de los inhibidores de SGLT2 con su representante farmacológico.',
  ref:'ENURM 2022-A, pregunta 16. Bibliografía oficial: Goodman y Gilman, Las Bases Farmacológicas de la Terapéutica, 13ª ed., cap. 47.'
},

/* ==================== ENDOCARDITIS ==================== */
'ENURM-2022-A017': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Endocarditis infecciosa',
  clave:'La lesión prototípica de la endocarditis infecciosa es la VEGETACIÓN.',
  exp:'La *vegetación* es la lesión característica de la endocarditis infecciosa, y su composición explica por qué la enfermedad se comporta como lo hace. Está formada por *plaquetas, fibrina, microcolonias de microorganismos y escasas células inflamatorias*, y ese último detalle es el determinante: al haber pocas células de defensa y estar los gérmenes embebidos en una matriz de fibrina, quedan *protegidos de los fagocitos y del antibiótico*, motivo por el cual la endocarditis exige tratamiento *bactericida, intravenoso y prolongado*, de cuatro a seis semanas, y no responde a pautas cortas. La vegetación se forma sobre endotelio previamente dañado, donde primero se deposita un trombo estéril de plaquetas y fibrina que después es colonizado durante una bacteriemia. De su estructura friable derivan además las dos grandes complicaciones: la *embolización* séptica a distancia y la *destrucción valvular* con insuficiencia aguda. Las otras tres opciones son lesiones elementales *dermatológicas*, que no corresponden a este contexto.',
  no:{1:'La pústula es una lesión cutánea elevada con contenido purulento.',2:'La vesícula es una lesión cutánea elevada con contenido líquido claro y menor de 5 mm.',3:'La pápula es una lesión cutánea sólida y elevada, menor de 1 cm.'},
  trampa:'Las tres opciones incorrectas son lesiones de piel: si se reconoce que pertenecen a otro registro, la pregunta se resuelve sola aunque no se recuerde la definición exacta de vegetación.',
  dx:[],
  obj:'Describir la composición de la vegetación y deducir de ella las características del tratamiento.',
  ref:'ENURM 2022-A, pregunta 17. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., cap. 155.'
},

/* ==================== EPIDEMIOLOGÍA ==================== */
'ENURM-2022-A018': {
  esp:'Epidemiología', tema:'Vigilancia epidemiológica', sub:'Brote',
  clave:'Aumento súbito de casos relacionados entre sí y limitado a un espacio concreto: BROTE.',
  exp:'La diferencia entre estos términos es de *escala* y de *vínculo entre los casos*, y el enunciado da las tres pistas que definen al *brote*: aparición *súbita*, casos *relacionados epidemiológicamente* entre sí, y diseminación *localizada en un espacio específico*. Un brote es, por tanto, el aumento inusual de casos circunscrito a un ámbito acotado —una comunidad, una escuela, un hospital, los asistentes a un mismo evento— y con un nexo común identificable, que es justamente lo que permite investigarlo y cortar la transmisión. La *epidemia* designa el mismo fenómeno de exceso de casos pero con una extensión geográfica y poblacional mayor, sin esa delimitación estrecha. El *conglomerado* o clúster es una agregación de casos en tiempo y lugar cuyo número puede o no superar lo esperado y en el que todavía no se ha establecido el nexo causal: es un hallazgo que obliga a investigar, no una categoría confirmada. Y la *epidemiología* no es un evento sino la disciplina que estudia todos ellos.',
  no:{0:'La epidemiología es la ciencia que estudia la distribución y los determinantes de la enfermedad: no designa un evento.',1:'La epidemia implica una extensión mayor, no limitada a un espacio específico como precisa el enunciado.',2:'El conglomerado es una agrupación de casos en tiempo y espacio sin nexo epidemiológico establecido aún.'},
  trampa:'Usar brote y epidemia como sinónimos. Lo que los separa es la delimitación del espacio y el vínculo demostrado entre los casos.',
  dx:[],
  obj:'Distinguir brote, epidemia y conglomerado por su extensión y por el nexo entre los casos.',
  ref:'ENURM 2022-A, pregunta 18. Bibliografía oficial: MOPECE, Módulo de Principios de Epidemiología para el Control de Enfermedades, módulo 5 (OPS).'
},

/* ==================== NÓDULO TIROIDEO ==================== */
'ENURM-2022-A019': {
  esp:'Cirugía', tema:'Endocrinología quirúrgica', sub:'Nódulo tiroideo folicular',
  clave:'PAAF con lesión folicular: la citología no distingue adenoma de carcinoma. Se opera.',
  exp:'La *lesión folicular* es el punto ciego de la punción con aguja fina, y entender por qué resuelve la pregunta. El criterio que separa un *adenoma folicular* benigno de un *carcinoma folicular* maligno no es citológico sino *arquitectural*: la malignidad se define por la *invasión capsular o vascular*, y eso solo puede verse examinando la cápsula del nódulo en la pieza completa, algo que una muestra de células aspiradas nunca puede mostrar. Por eso una PAAF informada como lesión folicular obliga a una *resección quirúrgica* con intención diagnóstica y terapéutica a la vez. Con un nódulo de *6 cm*, tamaño que por sí solo aumenta el riesgo de malignidad y además genera síntomas compresivos, la conducta indicada en este caso es la *tiroidectomía total*. El tamaño es aquí un dato que inclina la decisión: en nódulos foliculares pequeños puede plantearse una hemitiroidectomía diagnóstica, pero 6 cm y la necesidad de un manejo definitivo justifican la resección completa.',
  no:{0:'El yodo radiactivo se emplea tras la cirugía en el carcinoma diferenciado o para tratar el hipertiroidismo; no sirve para diagnosticar ni tratar de entrada una lesión folicular.',2:'La vigilancia cada 6 meses deja sin resolver un nódulo de 6 cm cuya naturaleza la citología no puede aclarar.',3:'El PET scan no discrimina adenoma de carcinoma folicular y no cambia la indicación quirúrgica.'},
  trampa:'Esperar que la PAAF dé el diagnóstico definitivo. En la lesión folicular no puede darlo por definición, y ese es justamente el motivo por el que se opera.',
  dx:[],
  obj:'Justificar la indicación quirúrgica ante una PAAF informada como lesión folicular.',
  ref:'ENURM 2022-A, pregunta 19. Bibliografía oficial: Sabiston, Tratado de Cirugía, 19ª ed., cap. 38.'
},

/* ==================== ÁCIDO FÓLICO ==================== */
'ENURM-2022-A020': {
  esp:'Ginecología y Obstetricia', tema:'Control prenatal', sub:'Prevención de defectos del tubo neural',
  clave:'Ácido fólico. Y hay que empezarlo ANTES de concebir: el tubo neural cierra en la cuarta semana.',
  exp:'La suplementación con *ácido fólico* reduce de forma demostrada la incidencia de defectos del tubo neural, y el punto que convierte esta pregunta en algo más que un dato memorizado es *cuándo* hay que darlo. El tubo neural termina de cerrarse alrededor de la *cuarta semana* de desarrollo embrionario, es decir, cuando muchas mujeres todavía no saben que están embarazadas. Por eso la recomendación es iniciar la suplementación al menos *un mes antes de la concepción* y mantenerla durante el primer trimestre: empezarla cuando se confirma el embarazo suele llegar tarde para este fin concreto. La dosis habitual es de *0,4 mg diarios* en la población general, y asciende a *4 mg* en mujeres con antecedente de gestación previa afectada, que es el grupo de mayor riesgo. El mecanismo encaja con lo visto en la pregunta 5 de este mismo examen: el folato es cofactor en el metabolismo de un carbono y en la síntesis de ADN, procesos de los que depende la proliferación celular intensa que exige el cierre del tubo.',
  no:{0:'La tiamina es la vitamina B1; su déficit produce beriberi y encefalopatía de Wernicke, sin relación con el tubo neural.',2:'La riboflavina es la B2; su déficit da queilitis y glositis.',3:'La piridoxina es la B6; se usa en la hiperemesis gravídica y en la profilaxis de la neuropatía por isoniazida, no para prevenir defectos del tubo neural.'},
  trampa:'Saber que es el ácido fólico pero no cuándo darlo. Iniciarlo al confirmar el embarazo ya no previene el defecto, porque el tubo neural cierra en la semana 4.',
  dx:[],
  obj:'Indicar el ácido fólico periconcepcional y justificar por qué debe iniciarse antes de la concepción.',
  ref:'ENURM 2022-A, pregunta 20. Bibliografía oficial: Embriología Médica con Orientación Clínica, 9ª ed., pág. 478, Panamericana.'
}

});
