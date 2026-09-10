/* ============================================================
   EXPLICACIONES — lote 12  (55 casos clínicos)
   Años 2014 a 2018. MIR 2017 de medicina excluido por cuarentena.
   Las 55 respuestas oficiales verificadas una a una y correctas.
   Igual que el lote 11, muchas entradas reasignan la especialidad
   y el tema que el clasificador automatico habia puesto mal.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ==================== EPIDEMIOLOGÍA Y BIOESTADÍSTICA ==================== */
'MIR-2018-M117': {
  esp:'Epidemiología', tema:'Ensayos clínicos', sub:'Componentes del efecto observado',
  clave:'No existe ningún "efecto Bradford-Hill": Bradford Hill son los CRITERIOS DE CAUSALIDAD, no un componente del efecto.',
  exp:'Lo que se mide en la rama experimental de un ensayo no es el efecto puro del fármaco, sino una suma de contribuciones que hay que saber descomponer. Está el *efecto específico* de la molécula; el *efecto inespecífico* de la acción terapéutica, es decir, todo lo que rodea al acto médico —atención, seguimiento, cuidados—; el *efecto placebo*, que es la respuesta a la expectativa del propio paciente; la *regresión a la media*, ese artefacto por el que quien entra en el estudio con un valor extremo tiende a acercarse al promedio en la siguiente medición aunque no se haga nada; y la *evolución natural* de la enfermedad. Precisamente porque todo eso se suma, el efecto real del fármaco solo puede estimarse *restando* lo que ocurre en el grupo control. Lo que no pinta nada en esta lista son los *criterios de Bradford Hill*, que son nueve criterios para juzgar si una asociación observada es causal —fuerza, consistencia, especificidad, temporalidad, gradiente biológico, plausibilidad, coherencia, evidencia experimental y analogía—, y no un componente del efecto.',
  no:{0:'El efecto inespecífico de la acción terapéutica sí forma parte de lo observado en la rama experimental.',1:'La regresión a la media contribuye siempre que se seleccione a los pacientes por un valor extremo.',2:'El efecto placebo es uno de los componentes clásicos y la razón de ser del grupo control enmascarado.'},
  trampa:'El nombre suena a concepto real y se descarta. Bradford Hill sirve para juzgar CAUSALIDAD, no para descomponer un efecto medido.',
  dx:[],
  obj:'Descomponer el efecto observado en un ensayo y situar los criterios de Bradford Hill donde corresponden.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Fletcher, Epidemiología Clínica, 5.ª ed.'
},
'MIR-2018-M118': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Interpretación del intervalo de confianza',
  clave:'RR 2,14 con intervalo de 0,98 a 4,56: el intervalo CRUZA el 1, así que no es significativo, pero tampoco descarta el riesgo.',
  exp:'La lectura correcta exige dos pasos. Primero, la *significación*: el intervalo de confianza va de 0,98 a 4,56 e *incluye el valor nulo*, que para un riesgo relativo es el 1, de modo que la asociación no alcanza significación estadística. Segundo, y aquí está la sutileza, *no significativo no equivale a ausencia de efecto*: el intervalo se extiende hasta 4,56, es decir, es compatible con un riesgo hasta cuatro veces y media mayor, así que lo que no puede hacerse es *descartar* el daño. Y la calidad del dato refuerza esa prudencia: son nueve estudios *observacionales, retrospectivos y pequeños*, con *heterogeneidad significativa* —I2 por encima del 50%—, lo que significa que los estudios no miden lo mismo y que el resultado combinado es poco fiable. La conclusión honesta es por tanto la más modesta: no puede descartarse un riesgo aumentado.',
  no:{0:'El límite superior del intervalo no es una cota máxima demostrada del riesgo, y además 4,56 es un riesgo RELATIVO, no un 456% de riesgo absoluto.',2:'No puede afirmarse que exista riesgo aumentado, porque el intervalo incluye el 1.',3:'Tampoco puede descartarse el riesgo, y hablar de reducción del riesgo absoluto del 2% mezcla escalas: el 0,98 es un cociente, no una diferencia.'},
  trampa:'Se traduce "no significativo" por "no hay efecto". Con un intervalo tan ancho, lo único demostrado es que el estudio no tiene potencia para decidir.',
  dx:[],
  obj:'Interpretar un intervalo de confianza que cruza el nulo y valorar la heterogeneidad de un metaanálisis.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con el manual Cochrane de revisiones sistemáticas.'
},
'MIR-2018-M119': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'NNT y medidas de efecto',
  clave:'Reducción absoluta del riesgo: 8 menos 4 son 4 por mil, es decir 0,4%. Su inverso, el NNT, es 250.',
  exp:'De la misma pareja de incidencias salen cuatro medidas distintas, y conviene calcularlas todas para ver cuál es la correcta. La *reducción absoluta del riesgo* es la resta: 8 por mil menos 4 por mil son *4 por mil*, o sea *0,4%*, no un 50%. El *riesgo relativo* del fármaco B frente al A es el cociente 4 entre 8, es decir *0,5*, no 0,25. La *reducción relativa del riesgo* es 1 menos el riesgo relativo, o sea *50%*, no 25%. Y el *número necesario a tratar* es el inverso de la reducción absoluta: 1 dividido entre 0,004 da *250*, que es exactamente lo que dice la opción correcta: por cada 250 pacientes tratados con B en lugar de A se evita una muerte. Este ejercicio muestra por qué conviene desconfiar de las cifras relativas: un 50% de reducción relativa suena espectacular, pero sobre un riesgo basal tan bajo se traduce en tener que tratar a 250 personas para evitar un solo evento.',
  no:{0:'El 50% es la reducción RELATIVA; la absoluta es 4 por mil, es decir 0,4%.',1:'El riesgo relativo es 4 entre 8, o sea 0,5, no 0,25.',3:'La reducción relativa es del 50%, no del 25%.'},
  trampa:'Se confunden sistemáticamente lo relativo y lo absoluto. La regla: lo relativo se divide, lo absoluto se resta, y el NNT es el inverso de lo absoluto.',
  dx:[],
  obj:'Calcular RAR, RR, RRR y NNT a partir de dos incidencias.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Sackett, Medicina Basada en la Evidencia.'
},
'MIR-2018-M121': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Cohorte prospectiva',
  clave:'Se recluta sanos, se mide la exposición al inicio y se sigue hacia delante esperando la enfermedad: cohorte prospectiva.',
  exp:'La secuencia temporal define el diseño. Los participantes se incorporan *sanos*, se les mide la exposición en ese momento —cuestionario de estilo de vida y muestra de sangre almacenada— y solo *después* se les sigue en el tiempo para ver quién desarrolla enfermedad de Parkinson. Como el seguimiento comienza en el presente y avanza hacia el futuro, la cohorte es *prospectiva*. La comparación entre activos y sedentarios es un análisis dentro de esa cohorte, no un diseño distinto. Merece la pena fijarse en la muestra de sangre congelada: es la infraestructura que permitirá más adelante montar un *caso-control anidado*, midiendo un biomarcador solo en los que enfermaron y en una muestra de los que no, sin tener que analizar miles de tubos. Pero eso será un estudio posterior; el que se describe aquí es la cohorte.',
  no:{0:'La cohorte histórica parte de registros ya existentes del pasado; aquí los datos se recogen en el momento del reclutamiento.',2:'El transversal se agotaría en la visita inicial, sin seguimiento; aquí lo esencial es esperar a que aparezca la enfermedad.',3:'El caso-control anidado sería el análisis posterior con las muestras almacenadas, no el diseño que se describe.'},
  trampa:'Almacenar sangre para analizarla después hace pensar en anidado. El diseño lo define la estructura de seguimiento, no cuándo se procesan las muestras.',
  dx:[],
  obj:'Identificar la cohorte prospectiva y su relación con el caso-control anidado.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Rothman, Modern Epidemiology.'
},
'MIR-2018-M129': {
  esp:'Epidemiología', tema:'Pruebas diagnósticas', sub:'Valor predictivo positivo',
  clave:'Los 1.000 son todos positivos en el ECG y 950 se confirman: VPP igual a 950 entre 1.000, o sea 0,95.',
  exp:'Hay que fijarse en a quién se ha estudiado. Los 1.000 pacientes entraron por tener un *infarto agudo diagnosticado en el electrocardiograma*, es decir, todos son *positivos en la prueba*; de ellos, la coronariografía —el patrón oro— confirmó cardiopatía isquémica en 950. Como la muestra está formada exclusivamente por positivos de la prueba, lo único que puede calcularse es la proporción de aciertos entre esos positivos, es decir el *valor predictivo positivo*: 950 entre 1.000, o sea *0,95*. Y también se ve por qué no puede calcularse nada más: para la sensibilidad harían falta los enfermos con ECG negativo, para la especificidad y el valor predictivo negativo harían falta los sanos y los negativos de la prueba, y ninguno de esos grupos ha sido estudiado. Es un buen recordatorio de que sin las cuatro casillas de la tabla no hay parámetros completos.',
  no:{0:'La sensibilidad no puede calcularse: faltan los enfermos con electrocardiograma negativo.',2:'El valor predictivo negativo exigiría conocer a los pacientes con ECG negativo, que no forman parte de la muestra.',3:'La especificidad requiere el grupo de sanos, y además ningún parámetro puede valer 1,05: todos van de 0 a 1.'},
  trampa:'Se intenta calcular sensibilidad porque es el parámetro más familiar. Si toda la muestra son positivos de la prueba, solo se puede obtener el VPP.',
  dx:[],
  obj:'Reconocer qué parámetros pueden calcularse según cómo se haya seleccionado la muestra.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Sackett, Medicina Basada en la Evidencia.'
},

/* ==================== HEMATOLOGÍA ==================== */
'MIR-2014-M78': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Anemia hemolítica',
  clave:'Reticulocitos altos, LDH alta, bilirrubina alta y haptoglobina INDETECTABLE: hemólisis. El primer paso es el test de Coombs.',
  exp:'El patrón analítico define hemólisis sin ambigüedad: *reticulocitosis*, que indica que la médula responde y por tanto el problema es periférico; *LDH elevada* y *bilirrubina indirecta alta*, que traducen la destrucción celular; y sobre todo *haptoglobina indetectable*, la prueba más específica, porque esa proteína se consume uniéndose a la hemoglobina libre. La esplenomegalia y el tinte ictérico completan el cuadro. Establecida la hemólisis, la pregunta siguiente es siempre la misma y solo tiene dos respuestas: *inmune o no inmune*. El *test de Coombs directo*, o prueba de la antiglobulina, es el que las separa detectando anticuerpos o complemento fijados sobre el hematíe. Si sale positivo se trata de una anemia hemolítica autoinmune y hay que buscar su causa —fármacos, linfoproliferativos, lupus, infecciones—; si sale negativo hay que pensar en microangiopatía con esquistocitos, membranopatías, enzimopatías o hemoglobinopatías. Es una prueba barata que bifurca todo el diagnóstico.',
  no:{0:'La sangre oculta en heces buscaría pérdidas digestivas, que darían anemia FERROPÉNICA microcítica sin reticulocitosis ni haptoglobina baja.',2:'Hierro, cobalamina y folato investigan anemias carenciales, en las que los reticulocitos están bajos, no altos.',3:'La ecografía valoraría el bazo, pero no dice nada del mecanismo de la hemólisis.',4:'El aspirado medular no es necesario cuando la médula ya está demostrando su respuesta con reticulocitosis.'},
  trampa:'Se pide un aspirado medular ante una anemia importante. Con reticulocitos altos la médula funciona: el problema está fuera, y Coombs es el siguiente paso.',
  dx:['Anemia hemolítica autoinmune','Microangiopatía trombótica','Esferocitosis hereditaria','Hemoglobinuria paroxística nocturna'],
  obj:'Reconocer el patrón de hemólisis y usar el test de Coombs para clasificarla.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2014-M79': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Púrpura trombótica trombocitopénica',
  clave:'Esquistocitos, plaquetas de 5.000, Coombs NEGATIVO, coagulación NORMAL y clínica neurológica: PTT. Plasmaféresis urgente.',
  exp:'El caso reúne la pentada clásica o casi toda ella: *anemia hemolítica microangiopática* con abundantes *esquistocitos* —hematíes fragmentados al chocar contra los microtrombos—, *trombopenia grave*, *síntomas neurológicos* fluctuantes, y en muchos casos fiebre y afectación renal. Dos datos negativos son decisivos: el *Coombs negativo* descarta el origen autoinmune del hemólisis, y las *pruebas de coagulación normales* descartan la coagulación intravascular diseminada, en la que el fibrinógeno cae y el tiempo de protrombina se alarga. El mecanismo es el déficit de la metaloproteasa *ADAMTS13*, habitualmente por autoanticuerpo, que deja circular multímeros ultragrandes de von Willebrand y provoca agregación plaquetaria difusa en la microcirculación. El tratamiento es la *plasmaféresis urgente*, que retira el anticuerpo y aporta la enzima, y sin ella la mortalidad supera el 90%. Y una regla que salva vidas: *no transfundir plaquetas* salvo hemorragia con riesgo vital, porque alimentan la trombosis.',
  no:{0:'La anemia hemolítica autoinmune tendría Coombs POSITIVO y no cursa con esquistocitos ni con trombopenia de 5.000.',1:'La enfermedad de von Willebrand es un trastorno hemorrágico: no produce hemólisis, esquistocitos ni clínica isquémica.',2:'En la púrpura trombocitopénica inmune no hay anemia hemolítica ni esquistocitos, y aquí transfundir plaquetas sería además peligroso.',3:'El síndrome de Evans combina anemia hemolítica autoinmune y trombopenia inmune, pero cursa con Coombs POSITIVO y sin esquistocitos.'},
  trampa:'Se transfunden plaquetas por la cifra de 5.000. En la PTT eso echa leña al fuego: lo urgente es la plasmaféresis.',
  dx:['Púrpura trombótica trombocitopénica','Síndrome hemolítico urémico','Coagulación intravascular diseminada','Síndrome de Evans'],
  obj:'Diagnosticar la PTT por la microangiopatía con Coombs negativo e indicar plasmaféresis urgente.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías ISTH sobre PTT.'
},
'MIR-2014-M81': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Enfermedad de von Willebrand',
  clave:'Sangrado mucocutáneo desde la adolescencia con TTPA alargado, plaquetas normales e historia familiar: von Willebrand.',
  exp:'Tres elementos apuntan al mismo sitio. El *patrón de sangrado* es mucocutáneo —menorragia desde la adolescencia y hemorragia tras extracción dental—, característico de los defectos de la hemostasia *primaria*, a diferencia de los hemartros y hematomas musculares de las hemofilias. La *historia familiar* con epistaxis en una tía materna sugiere una herencia *autosómica dominante*, que es la de los tipos 1 y 2. Y el *TTPA alargado* con actividad de protrombina normal se explica porque el factor de von Willebrand transporta y estabiliza al *factor VIII*: cuando falta, el VIII cae de forma secundaria y alarga la vía intrínseca. Las plaquetas son normales en número, porque el defecto es funcional. Es la coagulopatía hereditaria más frecuente. La confirmación es *cuantificar el factor de von Willebrand* —antígeno y actividad de cofactor de ristocetina— junto con el factor VIII, y el tratamiento del tipo 1 es la desmopresina, que libera los depósitos endoteliales.',
  no:{0:'La hemofilia A es recesiva LIGADA AL X, afecta a varones, y cursa con hemartros, no con menorragia. La prueba de mezclas se usa para detectar inhibidores.',1:'El anticoagulante lúpico alarga el TTPA pero produce TROMBOSIS, no hemorragia.',2:'La anemia sideroblástica no explica el sangrado ni el TTPA alargado.',3:'Una trombocitopatía congénita daría sangrado mucocutáneo, pero con TTPA NORMAL: aquí está alargado, lo que implica descenso del factor VIII.'},
  trampa:'Se atribuye la anemia a las reglas abundantes y se cierra el caso. La ferropenia es la consecuencia, no la causa: el TTPA alargado obliga a buscar la coagulopatía de fondo.',
  dx:['Enfermedad de von Willebrand','Hemofilia A leve','Trombocitopatía congénita','Anemia ferropénica'],
  obj:'Diagnosticar la enfermedad de von Willebrand por el patrón de sangrado y el TTPA alargado.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2014-M85': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Síndrome antifosfolípido',
  clave:'Trombosis, aborto, Raynaud, TTPA alargado y trombopenia leve: síndrome antifosfolípido. Se busca el anticoagulante lúpico.',
  exp:'La pista que resuelve el caso es una paradoja aparente: la paciente tiene una *trombosis* y sin embargo el *TTPA está alargado*. Eso solo lo explica bien el *anticoagulante lúpico*, un anticuerpo antifosfolípido que interfiere con los fosfolípidos del reactivo de laboratorio y alarga la prueba *in vitro*, mientras *in vivo* favorece la trombosis. El resto del cuadro encaja: *tromboembolismo sin factores desencadenantes* en una mujer joven, *aborto a las 12 semanas*, *fenómeno de Raynaud* y *trombopenia leve*, todos rasgos del síndrome antifosfolípido, que puede ser primario o asociarse a lupus. El diagnóstico exige un criterio clínico —trombosis o morbilidad obstétrica— más un criterio de laboratorio positivo en dos determinaciones separadas al menos doce semanas: anticoagulante lúpico, anticardiolipina o antibeta-2-glicoproteína I. El tratamiento es la anticoagulación indefinida.',
  no:{0:'El déficit de antitrombina III y las demás trombofilias hereditarias NO alargan el TTPA ni explican el aborto ni el Raynaud.',2:'El factor V Leiden es la trombofilia hereditaria más frecuente, pero no altera el TTPA ni asocia trombopenia.',3:'El déficit de proteína C no prolonga el TTPA y suele tener historia familiar, que aquí no existe.',4:'El déficit de proteína S comparte los mismos argumentos: no alarga el TTPA ni explica la clínica autoinmune.'},
  trampa:'Se busca una trombofilia hereditaria por la edad. La ausencia de historia familiar más el TTPA alargado y el aborto reorientan hacia lo adquirido y autoinmune.',
  dx:['Síndrome antifosfolípido','Trombofilia hereditaria','Lupus eritematoso sistémico'],
  obj:'Sospechar el síndrome antifosfolípido ante trombosis con TTPA paradójicamente alargado.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con los criterios de Sídney y Harrison, 21.ª ed.'
},
'MIR-2015-M176': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Linfoma folicular',
  clave:'Linfoma folicular de baja carga tumoral y asintomático: no tratar y vigilar. Tratar antes no alarga la vida.',
  exp:'El linfoma folicular es un linfoma *indolente*: incurable con las terapias convencionales pero de curso muy prolongado, con medianas de supervivencia de más de una década. Por eso la decisión no es si tratar sino *cuándo*, y los ensayos han demostrado que adelantar el tratamiento en el paciente asintomático y con poca masa tumoral *no mejora la supervivencia global*, mientras que sí expone a toxicidad. Los *criterios GELF*, que son los que marcan cuándo empezar, incluyen masa mayor de 7 cm, tres o más áreas ganglionares por encima de 3 cm, síntomas B, esplenomegalia sintomática, derrames, citopenias o leucemización. Esta paciente no cumple ninguno: adenopatías todas *menores de 3 cm*, sin síntomas B, hemograma conservado, LDH y beta-2-microglobulina normales, bazo e hígado normales y ECOG 0. La infiltración medular por sí sola no obliga a tratar si no produce citopenias. Procede por tanto *esperar y ver*, con controles periódicos.',
  no:{0:'El R-CHOP incluye adriamicina, cardiotóxica en una paciente con fracción de eyección del 48%, y se reserva para transformación a linfoma agresivo.',1:'El R-CVP es un esquema válido cuando hay indicación de tratar, pero aquí no la hay.',3:'La R-bendamustina es de primera línea en linfoma folicular con criterios de tratamiento, que esta paciente no cumple.'},
  trampa:'La infiltración de médula ósea parece obligar a tratar. En los linfomas indolentes lo que decide es la carga tumoral y los síntomas, no el estadio.',
  dx:['Linfoma folicular grado 2','Linfoma de células del manto','Linfoma difuso de células grandes B'],
  obj:'Aplicar los criterios de carga tumoral para decidir el inicio del tratamiento en un linfoma indolente.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con guías ESMO de linfoma folicular y criterios GELF.'
},

/* ==================== ENDOCRINOLOGÍA Y NUTRICIÓN ==================== */
'MIR-2014-M88': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Metformina: contraindicaciones',
  clave:'La metformina NO se suspende al añadir insulina basal: la combinación es la pauta estándar.',
  exp:'Todas las situaciones que obligan a retirar la metformina comparten un mismo mecanismo: aumentan el riesgo de *acidosis láctica*, ya sea porque se acumula el fármaco al caer el filtrado glomerular, ya sea porque hay hipoxia tisular que dispara la producción de lactato. Por eso se suspende ante *insuficiencia renal aguda* —el cuadro diarreico con creatinina de 2,5 es exactamente eso—, ante *contraste yodado intravenoso* por el riesgo de nefropatía, ante *consumo elevado de alcohol*, que bloquea el aclaramiento hepático del lactato, y ante cualquier situación de *hipoperfusión o hipoxia*, como la isquemia aguda de miembros, la sepsis, el shock o la insuficiencia respiratoria. En cambio, *añadir insulina basal* no tiene nada que ver con eso: la asociación de metformina con una insulina de acción prolongada es la pauta recomendada cuando fracasan los orales, porque permite usar menos insulina, limita la ganancia de peso y reduce las hipoglucemias. Mantenerla es lo correcto.',
  no:{1:'El alcoholismo aumenta el riesgo de acidosis láctica y es contraindicación clásica.',2:'El contraste yodado puede precipitar un fracaso renal y con él la acumulación del fármaco.',3:'Una creatinina de 2,5 con diarrea es un fracaso renal agudo: hay que suspenderla de inmediato.',4:'La isquemia aguda con hipoxia tisular multiplica la producción de lactato.'},
  trampa:'Se piensa que empezar insulina significa "abandonar los orales". La metformina se mantiene salvo contraindicación propia.',
  dx:[],
  obj:'Reconocer las situaciones que obligan a suspender la metformina por riesgo de acidosis láctica.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con los estándares de la ADA y la ficha técnica de metformina.'
},
'MIR-2014-M90': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Tratamiento sustitutivo con testosterona',
  clave:'La testosterona exógena SUPRIME la espermatogénesis: no mejora la fertilidad, la empeora.',
  exp:'La afirmación falsa es la que promete descendencia. La testosterona administrada desde fuera actúa por *retroalimentación negativa* sobre el hipotálamo y la hipófisis, frenando la secreción de GnRH y con ella la de FSH y LH; y como la espermatogénesis depende de la FSH y de la altísima concentración *intratesticular* de testosterona que mantiene la LH, el resultado es la *supresión de la producción de espermatozoides*, hasta la azoospermia en muchos pacientes. Es decir: el tratamiento sustitutivo restituye la virilización, la libido, la masa muscular y la masa ósea, pero *no la fertilidad*. En un hipogonadismo de origen *hipotalámico*, como el de este paciente tras el craneofaringioma, la fertilidad se busca con *gonadotropinas* —hCG, que sustituye a la LH, con FSH añadida si hace falta— o con GnRH pulsátil, no con testosterona. El resto de afirmaciones son correctas: el nivel se mide en valle, justo antes de la siguiente inyección, el objetivo es la mitad del rango normal, hay que vigilar el hematocrito por el riesgo de eritrocitosis, y la LH no sirve para monitorizar porque estará suprimida.',
  no:{0:'Medir la testosterona en valle, justo antes de la siguiente inyección, es la forma correcta de ajustar la dosis del undecanoato.',1:'Mantener la testosterona en la mitad del rango de normalidad es el objetivo terapéutico establecido.',2:'La eritrocitosis es un efecto adverso frecuente: el control anual del hematocrito es obligado.',4:'La LH no se usa para monitorizar el tratamiento, entre otras cosas porque queda suprimida por la propia testosterona.'},
  trampa:'Se asocia testosterona con fertilidad porque ambas son "cosas de hombre". El eje es el contrario: la testosterona exógena esteriliza mientras se toma.',
  dx:[],
  obj:'Explicar por qué la testosterona exógena suprime la espermatogénesis y cómo se monitoriza el tratamiento.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías de la Endocrine Society sobre hipogonadismo masculino.'
},
'MIR-2014-M91': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Diabetes insípida central',
  clave:'Poliuria hipotónica tras traumatismo craneal que NO concentra con la restricción pero SÍ responde a desmopresina: diabetes insípida central.',
  exp:'La prueba de restricción hídrica se lee en dos tiempos y aquí ambos son concluyentes. En el primero, el paciente *no concentra la orina* pese a la deshidratación: eso descarta una polidipsia primaria, en la que el riñón conserva intacta su capacidad de concentrar y respondería subiendo la osmolaridad urinaria. En el segundo se administra *desmopresina*, un análogo de la ADH, y la osmolaridad urinaria *sube de 190 a 410*, es decir, más de un 50%: el riñón sí sabe responder a la hormona, luego el problema no es renal sino de *producción*, y el diagnóstico es *diabetes insípida central*. Si fuera nefrogénica no habría respuesta alguna a la desmopresina. El contexto lo confirma: una *fractura craneal* con lesión del tallo hipofisario o de la neurohipófisis, con inicio brusco a los tres días. Los datos basales apoyan lo mismo: orina inapropiadamente diluida con osmolaridad plasmática y sodio en el límite alto. El tratamiento es desmopresina y agua accesible.',
  no:{0:'En la polidipsia primaria el riñón SÍ concentra con la restricción hídrica, y la osmolaridad plasmática suele estar baja, no en 292.',2:'La insuficiencia suprarrenal cursa con hiponatremia, hiperpotasemia e hipotensión, no con poliuria hipotónica.',3:'El SIADH es lo contrario: retiene agua, produce hiponatremia y orina concentrada.',4:'En la diabetes insípida nefrogénica el riñón NO responde a la desmopresina, y aquí la osmolaridad urinaria más que se duplica.'},
  trampa:'Se cierra el diagnóstico con la poliuria sin leer la respuesta a la desmopresina, que es justo el dato que separa la forma central de la nefrogénica.',
  dx:['Diabetes insípida central','Diabetes insípida nefrogénica','Polidipsia primaria','Diuresis osmótica'],
  obj:'Interpretar la prueba de restricción hídrica con desmopresina.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2015-M83': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Hipoglucemia por sulfonilureas',
  clave:'Hipoglucemias a media mañana y a media tarde con HbA1c de 5,9%: sobra la sulfonilurea. Se retira ella, no la metformina.',
  exp:'La clínica descrita —mareo, sudoración, temblor, visión borrosa y hambre que ceden al comer— es una *hipoglucemia* de libro, con sus síntomas adrenérgicos y neuroglucopénicos. Y el momento en que aparece es la firma del culpable: *al final de la mañana y al final de la tarde*, es decir, cuando el efecto de la sulfonilurea se acumula lejos de la ingesta. La *glimepirida* estimula la secreción de insulina *de forma independiente de la glucemia*, así que sigue empujando insulina aunque el azúcar ya haya bajado; por eso las sulfonilureas son, junto con la insulina, los antidiabéticos que producen hipoglucemia. La *metformina*, en cambio, actúa reduciendo la producción hepática de glucosa y *no causa hipoglucemia en monoterapia*, además de ser el fármaco con beneficio demostrado sobre el peso y el pronóstico. Con una HbA1c de 5,9%, mejor que el objetivo, y hipoglucemias sintomáticas, lo correcto es *retirar la sulfonilurea* y mantener la metformina.',
  no:{0:'Reajustar la dieta no corrige el problema de fondo, que es un secretagogo que sigue actuando sin necesidad.',1:'La metformina no produce hipoglucemia: retirarla sería quitar precisamente el fármaco seguro.',3:'Cambiar metformina por un inhibidor de la DPP4 mantiene la sulfonilurea, que es la causante, y retira el fármaco de elección.'},
  trampa:'Se baja la dosis de todo o se toca la dieta. Ante hipoglucemia con buen control, lo que se retira es el fármaco capaz de producirla.',
  dx:['Hipoglucemia por sulfonilurea','Insulinoma','Hipoglucemia reactiva'],
  obj:'Identificar la sulfonilurea como causa de hipoglucemia y ajustar el tratamiento en consecuencia.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con los estándares de la ADA.'
},
'MIR-2016-M86': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Bocio multinodular con compresión',
  clave:'Bocio grande, intratorácico, con disfagia y TSH suprimida: tiroidectomía total, aunque la citología sea benigna.',
  exp:'Aquí se acumulan tres indicaciones quirúrgicas y cualquiera de ellas bastaría. La primera son los *síntomas compresivos*: disfagia para sólidos por un bocio con *componente intratorácico*, que además puede comprimir tráquea y vasos y solo va a crecer. La segunda es la *hipertiroidismo subclínico*, con TSH de 0,001 y T4 libre normal, que en una mujer de 61 años con *fibrilación auricular* no es inocuo, porque la tirotoxicidad mantenida perpetúa la arritmia y acelera la pérdida de masa ósea. La tercera es el *crecimiento del nódulo* de 3 a 4,4 cm en un año. Que la citología sea benigna no cambia nada: una punción de un bocio coloide tiene un porcentaje real de falsos negativos, sobre todo en glándulas multinodulares y voluminosas donde no puede muestrearse todo. Por eso la conducta es la *tiroidectomía total*, que resuelve la compresión, el hipertiroidismo y la duda oncológica de una vez.',
  no:{0:'Seguir vigilando ignora la disfagia, la TSH suprimida y el crecimiento del nódulo.',1:'El yodo radiactivo reduce poco el volumen, tarda meses y puede producir tiroiditis con inflamación transitoria, peligrosa en un bocio que ya comprime.',2:'Los antitiroideos controlarían la función pero no el tamaño ni la compresión, y exigirían tratamiento indefinido.'},
  trampa:'La citología benigna tranquiliza y frena la cirugía. La indicación aquí no es oncológica sino compresiva y funcional.',
  dx:['Bocio multinodular tóxico con compresión','Carcinoma de tiroides','Adenoma tóxico'],
  obj:'Reconocer las indicaciones quirúrgicas del bocio multinodular.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con guías de la American Thyroid Association.'
},
'MIR-2015-M87': {
  esp:'Medicina Interna', tema:'Nutrición', sub:'Indicaciones de nutrición parenteral',
  clave:'Si el intestino funciona, se usa. La parenteral solo es obligada cuando el tubo digestivo NO es utilizable: el íleo paralítico prolongado.',
  exp:'La regla de oro de la nutrición artificial es breve: *si el intestino funciona, úsalo*. La nutrición enteral por sonda mantiene el trofismo de la mucosa, preserva la barrera intestinal frente a la traslocación bacteriana, tiene muchas menos complicaciones infecciosas y metabólicas y es más barata. Por eso la nutrición parenteral se reserva para cuando el tubo digestivo *no es utilizable o no es suficiente*: obstrucción intestinal, *íleo paralítico prolongado*, isquemia mesentérica, fístulas de alto débito, síndrome de intestino corto o vómitos incoercibles. De las opciones, solo el íleo cumple ese requisito. En los otros tres casos el intestino funciona perfectamente: tanto la disfagia neurológica del ictus como el riesgo de broncoaspiración de la demencia avanzada se resuelven con *sonda nasogástrica* o gastrostomía, y la caquexia del empiema crónico se trata igualmente por vía enteral, con suplementos y tratamiento de la infección.',
  no:{0:'La disfagia neurológica se resuelve con sonda nasogástrica o gastrostomía: el intestino está intacto.',1:'La caquexia por infección crónica no impide usar el tubo digestivo; se trata la causa y se nutre por vía enteral.',3:'El riesgo de broncoaspiración se maneja con gastrostomía y postura, no con parenteral; además, en la demencia muy avanzada hay que valorar si la nutrición artificial aporta algún beneficio.'},
  trampa:'Se elige la parenteral porque parece "más completa" en el paciente más grave. La gravedad no es la indicación: lo es que el intestino no sirva.',
  dx:[],
  obj:'Indicar la nutrición parenteral solo cuando el tubo digestivo no es utilizable.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías ESPEN de nutrición clínica.'
},

/* ==================== CARDIOLOGÍA Y NEFROLOGÍA ==================== */
'MIR-2014-M75': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Hipotensión ortostática',
  clave:'Síncopes de pie y tras las comidas con dolor "en percha" en nuca y hombros: hipotensión ortostática. Se mide la tensión en decúbito y en bipedestación.',
  exp:'El caso tiene una pista casi patognomónica que suele pasar desapercibida: el *dolor en percha* o coat-hanger, ese dolor opresivo en nuca, cuello y cintura escapular que precede al síncope. Se debe a la *hipoperfusión de la musculatura posterior del cuello*, que trabaja contra la gravedad para sostener la cabeza y es la primera en quedarse sin flujo cuando cae la tensión al ponerse de pie. Alrededor de eso encaja todo lo demás: los síncopes ocurren *en bipedestación* y *tras las comidas* —la hipotensión posprandial, por redistribución esplácnica—, y el paciente tiene una *diabetes de veinte años* con la disautonomía correspondiente y fármacos que agravan la situación, los antihipertensivos y sobre todo los alfabloqueantes del prostatismo. La prueba imprescindible es también la más simple y barata: *medir la presión arterial en decúbito y después a los tres minutos de pie*, buscando una caída de al menos 20 mmHg de sistólica o 10 de diastólica. Confirmado eso, se retiran los fármacos culpables y se usan medidas posturales, sal y agua, y midodrina o fludrocortisona si hace falta.',
  no:{0:'La resonancia buscaría lesión estructural, pero no hay focalidad neurológica ni cefalea que la justifiquen.',1:'La angio-RM de troncos supraaórticos investigaría un robo de subclavia o estenosis carotídea, que no producen síncopes posprandiales ni dolor en percha.',2:'El SPECT con ioflupano se usa en el diagnóstico diferencial de los parkinsonismos, no del síncope.',4:'El Holter buscaría arritmia, pero la relación clara con la postura y las comidas apunta a un mecanismo ortostático.'},
  trampa:'Ante todo síncope se pide un Holter. La anamnesis ya ha dicho que es postural, y la prueba que lo confirma cuesta dos minutos junto a la cama.',
  dx:['Hipotensión ortostática por disautonomía diabética','Síncope cardiogénico','Síncope vasovagal','Robo de subclavia'],
  obj:'Reconocer el dolor en percha y diagnosticar la hipotensión ortostática con la medida de tensión postural.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías ESC de síncope.'
},
'MIR-2014-M80': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Anticoagulación perioperatoria',
  clave:'La cirugía de cataratas tiene riesgo hemorrágico despreciable: NO se suspende el anticoagulante.',
  exp:'La decisión perioperatoria se toma cruzando dos riesgos. Por un lado, el *riesgo trombótico* del paciente, que aquí es *alto*: una prótesis *mecánica mitral* es la situación de mayor riesgo embólico de todas, muy por encima de la aórtica, y suspender la anticoagulación puede costar un ictus o una trombosis protésica. Por otro, el *riesgo hemorrágico del procedimiento*, que en la *cirugía de catarata* es prácticamente nulo: se opera con anestesia tópica, en un espacio avascular y cerrado, sin necesidad de hemostasia quirúrgica. Cuando el riesgo hemorrágico es mínimo y el trombótico es alto, lo correcto es *no interrumpir el anticoagulante*, comprobando que el INR esté en rango terapéutico. La misma lógica se aplica a la mayoría de las extracciones dentales, a las endoscopias diagnósticas sin biopsia y a la cirugía cutánea menor. La terapia puente con heparina, que era la respuesta refleja durante años, ha demostrado aumentar el sangrado sin reducir los eventos embólicos, y hoy se reserva para casos seleccionados.',
  no:{1:'Suspender cinco días sin puente deja a un portador de prótesis mecánica mitral desprotegido, con riesgo de trombosis valvular.',2:'La terapia puente es innecesaria y añade riesgo hemorrágico en un procedimiento que no sangra.',3:'El plasma fresco revierte la anticoagulación y se reserva para hemorragia grave o cirugía urgente: aquí no hay ninguna urgencia ni sangrado.',4:'La vitamina K revertiría la anticoagulación y dificultaría luego volver a rango, todo ello sin ningún beneficio.'},
  trampa:'Se suspende el anticoagulante ante cualquier cirugía. La pregunta correcta es cuánto sangra ESE procedimiento, y la catarata no sangra.',
  dx:[],
  obj:'Decidir el manejo perioperatorio del anticoagulante según el riesgo hemorrágico del procedimiento.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías ESC sobre valvulopatías y manejo perioperatorio de la anticoagulación.'
},
'MIR-2015-M62': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Insuficiencia aórtica',
  clave:'Soplo DIASTÓLICO de alta frecuencia con pulso arterial saltón: insuficiencia aórtica.',
  exp:'Los soplos se clasifican primero por el *tiempo*. Un soplo *diastólico* solo puede tener cuatro orígenes: insuficiencia aórtica, insuficiencia pulmonar, estenosis mitral y estenosis tricúspide. La *frecuencia* del sonido resuelve el resto: los soplos de *alta frecuencia*, aspirativos y suaves, se producen cuando existe un gradiente de presión muy elevado a través del orificio, que es justo lo que ocurre en la *insuficiencia aórtica*, con la aorta a 120 mmHg vaciándose hacia un ventrículo a casi cero. La estenosis mitral, en cambio, tiene un gradiente pequeño y produce un retumbo *de baja frecuencia*. El *latido cervical prominente* completa el cuadro: la regurgitación produce un volumen sistólico enorme con caída brusca de la diastólica, es decir, una *presión diferencial muy amplia*, que se manifiesta en toda la constelación de signos periféricos —pulso saltón o de Corrigan, danza carotídea, signo de Musset con el cabeceo, pulso capilar de Quincke—.',
  no:{0:'El ductus persistente da un soplo CONTINUO, en maquinaria, que ocupa sístole y diástole sin interrupción.',1:'La disfunción de músculo papilar produce insuficiencia mitral, que es un soplo SISTÓLICO.',2:'La estenosis mitral da un retumbo diastólico de BAJA frecuencia con chasquido de apertura, y cursa con pulso pequeño, no saltón.'},
  trampa:'Se recuerdan los soplos por el foco y no por el tiempo. El primer filtro es sístole o diástole; el segundo, la frecuencia del sonido.',
  dx:['Insuficiencia aórtica','Estenosis mitral','Insuficiencia pulmonar'],
  obj:'Identificar la insuficiencia aórtica por el soplo diastólico y los signos de presión diferencial amplia.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2014-M99': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Nefropatía membranosa',
  clave:'Síndrome nefrótico en un adulto de mediana edad, con función renal casi normal: nefropatía membranosa, la causa más frecuente en el adulto.',
  exp:'El caso cumple los cuatro elementos del *síndrome nefrótico*: proteinuria por encima de 3,5 gramos al día, *hipoalbuminemia* de 2,4, *edemas* e *hipercolesterolemia* de 270. Sobre eso, la pregunta es epidemiológica y de matices. En el *adulto de mediana edad* de raza blanca y sin enfermedad sistémica conocida, la causa primaria más frecuente de síndrome nefrótico es la *nefropatía membranosa*, hoy explicada en la mayoría de los casos por autoanticuerpos contra el receptor de la fosfolipasa A2, cuya determinación en sangre permite diagnosticarla a menudo sin biopsia. Encajan además dos detalles: la *función renal casi conservada*, con creatinina de 1,3, y la *microhematuria* discreta, que es habitual en la membranosa. Importa reconocerla porque tiene dos consecuencias prácticas: es la glomerulopatía con mayor riesgo *trombótico*, incluida la trombosis de vena renal, y obliga a *descartar causas secundarias*, sobre todo neoplasias ocultas en mayores de 50 años, hepatitis B, lupus y fármacos.',
  no:{0:'La enfermedad de cambios mínimos es la causa típica en el NIÑO, se instaura de forma brusca y no suele dar hematuria.',1:'La glomeruloesclerosis focal y segmentaria es más frecuente en pacientes de raza negra, obesos o con VIH, y suele cursar con hipertensión y deterioro renal más marcado.',3:'La membranoproliferativa cursa con CONSUMO DE COMPLEMENTO y suele dar un cuadro mixto nefrótico-nefrítico.',4:'La proliferativa mesangial se manifiesta habitualmente como síndrome nefrítico o hematuria recurrente, no como nefrótico puro.'},
  trampa:'Se responde cambios mínimos por ser la más conocida. La edad es el filtro: en el niño cambios mínimos, en el adulto membranosa.',
  dx:['Nefropatía membranosa','Glomeruloesclerosis focal y segmentaria','Enfermedad de cambios mínimos','Amiloidosis renal'],
  obj:'Orientar la causa del síndrome nefrótico según la edad y buscar causas secundarias.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías KDIGO de glomerulonefritis.'
},
'MIR-2016-M140': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Nefropatía por analgésicos',
  clave:'Necrosis papilar bilateral con células descamativas en orina y CPK normal, en una paciente que toma naproxeno: nefropatía por AINE.',
  exp:'Varios datos convergen en el mismo fármaco. La ecografía informa de *necrosis papilar bilateral*, una lesión cuyo abanico de causas es corto y en el que los *analgésicos* ocupan el primer lugar, junto con la diabetes, la drepanocitosis, la obstrucción y la pielonefritis; la coincidencia de *dos* de esos factores, AINE y diabetes, la hace aún más probable. El *dolor lumbar bilateral* y la *orina oscura con microhematuria y abundantes células descamativas* corresponden al desprendimiento de las papilas necróticas hacia la vía urinaria. Y hay dos negativos que descartan alternativas: la *CPK de 45 es normal*, lo que excluye la rabdomiólisis por estatinas, y la *proteinuria es negativa*, lo que va en contra de una nefropatía diabética progresiva, además de que hace un mes toda la analítica era normal. El naproxeno actúa por dos vías: inhibe las prostaglandinas vasodilatadoras de la arteriola aferente, reduciendo el filtrado, y provoca isquemia medular con necrosis papilar. La hiperuricemia y la hiperpotasemia acompañan al fracaso renal.',
  no:{0:'El enalapril puede reducir el filtrado, pero no produce necrosis papilar ni explica la hematuria con células descamativas.',1:'La nefropatía diabética progresa con PROTEINURIA y de forma lenta, no en un mes con la analítica previa normal.',3:'La rabdomiólisis por estatinas exigiría una CPK muy elevada, y aquí es de 45.'},
  trampa:'Se culpa a la estatina o al IECA, que son los sospechosos habituales. La necrosis papilar y la CPK normal señalan directamente al antiinflamatorio.',
  dx:['Nefropatía por AINE con necrosis papilar','Nefropatía diabética','Rabdomiólisis','Nefritis intersticial aguda'],
  obj:'Relacionar la necrosis papilar con el consumo de AINE y descartar las alternativas por los datos de laboratorio.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2018-M133': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Alcalosis metabólica',
  clave:'pH 7,60 con bicarbonato de 38: alcalosis metabólica. Una pCO2 de 42 es NORMAL, así que la compensación no se ha producido.',
  exp:'El análisis va por pasos. El *pH de 7,60* es alcalémico y el *bicarbonato de 38* alto, de modo que el trastorno primario es una *alcalosis metabólica*. La compensación esperada sería *hipoventilar* para retener CO2, y la regla aproximada dice que la pCO2 sube alrededor de 0,7 mmHg por cada mEq de bicarbonato ganado: con un exceso de unos 14 mEq, la pCO2 debería rondar los *50 mmHg*. Está en *42*, que es un valor rigurosamente *normal*, y eso significa dos cosas: que la compensación *no se ha producido* y que, de hecho, hay un componente respiratorio alcalótico añadido. Por eso la afirmación falsa es la que habla de una acidosis respiratoria compensadora. El resto es cierto: el *anión gap* es 140 menos 85 menos 38, es decir *17*, algo elevado como suele ocurrir en la alcalosis por el aumento de la carga negativa de la albúmina; y la *hipocloremia con hipopotasemia* se explica por las pérdidas digestivas y la contracción de volumen, que perpetúan la alcalosis. El tratamiento es suero salino y reposición de potasio.',
  no:{0:'Es correcto: pH alto con bicarbonato alto define la alcalosis metabólica.',2:'Es correcto: 140 menos 85 menos 38 da 17.',3:'Es correcto: las pérdidas digestivas y la contracción de volumen explican la hipocloremia y la hipopotasemia.'},
  trampa:'Se llama "compensación" a cualquier valor de pCO2. Compensar exige que el valor se DESVÍE de lo normal en la dirección adecuada; una pCO2 normal en plena alcalosis es un hallazgo anormal.',
  dx:['Alcalosis metabólica hipoclorémica','Alcalosis respiratoria','Trastorno mixto'],
  obj:'Calcular la compensación esperada en la alcalosis metabólica y el anión gap.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2018-M197': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Acidosis hiperclorémica por suero salino',
  clave:'Seis litros de salino isotónico, cloro de 115 y anión gap NORMAL: acidosis metabólica hiperclorémica por dilución.',
  exp:'El paso decisivo es calcular el *anión gap*: 135 menos 115 menos 18 da *2*, es decir, un hueco aniónico *normal o incluso bajo*. Eso descarta de entrada la acidosis láctica, la cetoacidosis y los tóxicos, que son las causas de acidosis con anión gap *elevado*. Lo que queda es una *acidosis metabólica hiperclorémica*, y la explicación está en el tratamiento: el *suero salino al 0,9%* contiene 154 mEq/L de sodio y 154 de cloro, una concentración de cloro muy superior a la del plasma. Al infundir seis litros se produce una carga masiva de cloro que desplaza al bicarbonato para mantener la electroneutralidad —el fenómeno conocido como acidosis dilucional o hiperclorémica—. Es una complicación bien descrita de la resucitación con grandes volúmenes de salino, y es la razón por la que hoy se prefieren *cristaloides balanceados* tipo Ringer lactato cuando se prevé un aporte elevado. La pCO2 de 39 muestra una compensación respiratoria todavía incompleta.',
  no:{0:'La pCO2 de 39 es normal: no hay retención de CO2, de modo que no existe acidosis respiratoria.',2:'No hay alcalosis respiratoria: la pCO2 sigue en rango normal.',3:'El anión gap es de 2, es decir, normal; una acidosis láctica lo elevaría claramente.'},
  trampa:'Se responde acidosis láctica porque hubo hipotensión. El anión gap lo desmiente en un solo cálculo, y el cloro de 115 señala al suero.',
  dx:['Acidosis metabólica hiperclorémica','Acidosis láctica','Acidosis tubular renal'],
  obj:'Usar el anión gap para separar la acidosis hiperclorémica de la acidosis láctica.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},

/* ==================== INFECTOLOGÍA Y DIGESTIVO ==================== */
'MIR-2015-M100': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Nocardiosis',
  clave:'Inmunodeprimido por corticoides con la tríada PULMÓN + PIEL con fístulas + CEREBRO: nocardiosis.',
  exp:'Lo que identifica a *Nocardia* es su tropismo por *tres órganos a la vez*. En el *pulmón* produce un cuadro subagudo con tos, expectoración purulenta o hemoptoica, fiebre y pérdida de peso, con infiltrados que suelen ser apicales y cavitados, imitando a la tuberculosis. En la *piel* da abscesos múltiples que *fistulizan*, un rasgo muy característico de este actinomiceto filamentoso, ácido-alcohol resistente parcial. Y desde el pulmón disemina al *sistema nervioso central*, donde forma abscesos: eso es lo que explica la cefalea intensa de dos días y la *parálisis facial central*. El terreno lo completa: *corticoterapia crónica* por artritis reumatoide, es decir, inmunidad celular deprimida, y el antecedente de *agricultor*, ya que Nocardia vive en el suelo y entra por vía inhalatoria o por inoculación. El tratamiento es *cotrimoxazol* prolongado, durante meses, y ante afectación cerebral se asocia un segundo fármaco.',
  no:{0:'Una neoplasia con metástasis cerebrales no explica la fiebre, la leucocitosis con neutrofilia ni los abscesos cutáneos fistulizados.',1:'La tuberculosis diseminada es el gran imitador aquí, pero rara vez produce abscesos cutáneos múltiples con trayectos fistulosos y un curso tan agudo.',3:'La aspergilosis invasiva afecta sobre todo a neutropénicos, produce lesiones angioinvasivas con signo del halo y no da este patrón cutáneo.'},
  trampa:'Se responde tuberculosis por los infiltrados apicales y el síndrome constitucional. Los abscesos cutáneos fistulizados más el foco cerebral son la firma de Nocardia.',
  dx:['Nocardiosis diseminada','Tuberculosis','Aspergilosis invasiva','Actinomicosis'],
  obj:'Reconocer la tríada pulmón-piel-cerebro de la nocardiosis en el paciente inmunodeprimido.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Mandell, Enfermedades Infecciosas.'
},
'MIR-2015-M77': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Gastroenteritis por Salmonella',
  clave:'Salmonelosis no tifoidea en paciente sano: solo hidratación. El antibiótico prolonga el estado de portador.',
  exp:'La gastroenteritis por *Salmonella* no tifoidea es una enfermedad *autolimitada* en el huésped inmunocompetente, y el pilar del tratamiento es la *reposición hidroelectrolítica*, oral siempre que se tolere y por vía intravenosa si la deshidratación es importante. El antibiótico no solo no acorta el cuadro, sino que resulta *contraproducente*: prolonga la excreción fecal del germen y el *estado de portador*, favorece la selección de resistencias y aumenta el riesgo de recaída. El tratamiento antibiótico se reserva para grupos concretos con riesgo de bacteriemia y de infección endovascular: *menores de un año y mayores de 50*, inmunodeprimidos —incluido VIH—, portadores de prótesis vasculares o articulares, valvulopatías, drepanocitosis y pacientes con sepsis o bacteriemia documentada. Este paciente no cumple ninguno, de modo que corresponde hidratar y observar.',
  no:{0:'La amoxicilina intravenosa no está indicada y además Salmonella presenta con frecuencia resistencia a las aminopenicilinas.',1:'El ciprofloxacino sería la elección SI hubiera indicación de tratar, pero en el paciente sano prolonga el estado de portador.',2:'La ceftriaxona se reserva para la salmonelosis invasiva o la fiebre tifoidea, no para una gastroenteritis banal.'},
  trampa:'Se trata todo lo que tiene un germen con nombre. En este caso el antibiótico empeora el resultado a medio plazo.',
  dx:['Gastroenteritis por Salmonella','Fiebre tifoidea','Gastroenteritis vírica','Colitis por Campylobacter'],
  obj:'Limitar el uso de antibióticos en la salmonelosis no tifoidea del paciente inmunocompetente.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Mandell, Enfermedades Infecciosas.'
},
'MIR-2016-M103': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Aspergilosis invasiva',
  clave:'Neutropénico febril con sospecha de aspergilosis: galactomanano en sangre más TC de tórax de alta resolución.',
  exp:'La aspergilosis invasiva es la gran amenaza del *neutropénico prolongado* y su diagnóstico se apoya en dos pilares que se complementan. El primero es el *antígeno galactomanano circulante*, un componente de la pared del hongo que se detecta en suero y en lavado broncoalveolar; su monitorización seriada en pacientes de riesgo permite detectar la infección *antes* de que aparezca la clínica florida. El segundo es la *tomografía de tórax*, que muestra signos precoces muy sugestivos: el *signo del halo*, un nódulo rodeado de vidrio deslustrado que corresponde a la hemorragia perilesional de una lesión angioinvasiva, y más tarde el *signo del aire creciente* cuando la lesión se cavita al recuperar los neutrófilos. La combinación de ambos tiene mucho mejor rendimiento que cualquier prueba aislada y permite tratar de forma precoz con voriconazol, que es lo que cambia el pronóstico. Conviene recordar que la radiografía simple es normal durante días y que la biopsia, aunque sea el patrón oro, suele ser inviable por la trombopenia.',
  no:{0:'El cultivo de esputo tiene sensibilidad muy baja y, además, un aislamiento aislado puede ser mera colonización.',1:'El fondo de ojo es útil en la candidiasis diseminada, no en la aspergilosis.',2:'La aspergilosis es primariamente pulmonar y sinusal: mirar abdomen y orina no aporta nada.'},
  trampa:'Se pide una radiografía de tórax y se da por negativa. En el neutropénico la radiografía simple es normal cuando la TC ya muestra el halo.',
  dx:['Aspergilosis pulmonar invasiva','Candidiasis diseminada','Mucormicosis','Neumonía bacteriana'],
  obj:'Elegir galactomanano y TC torácica como estrategia diagnóstica en la aspergilosis invasiva.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con los criterios EORTC/MSG y guías IDSA sobre aspergilosis.'
},
'MIR-2016-M54': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Litiasis infecciosa',
  clave:'Los cálculos de estruvita los produce un germen UREASA POSITIVO: Proteus mirabilis.',
  exp:'La estruvita es fosfato amónico magnésico, y su formación no es un fenómeno metabólico sino *infeccioso*. Ciertas bacterias producen *ureasa*, una enzima que desdobla la urea de la orina en amoniaco y dióxido de carbono; el amoniaco *alcaliniza* la orina por encima de un pH de 7,2 y en ese medio precipitan el magnesio, el amonio y el fosfato. El resultado son cálculos que crecen deprisa y adoptan la forma del sistema colector: los llamados cálculos *coraliformes* o en asta de ciervo. El germen paradigmático es *Proteus mirabilis*, y le acompañan otros ureasa positivos como Klebsiella, Providencia, Morganella, algunas Pseudomonas y Ureaplasma urealyticum; *Escherichia coli*, en cambio, no produce ureasa, y por eso no genera este tipo de litiasis pese a ser la causa más frecuente de infección urinaria. El tratamiento exige eliminar por completo el cálculo, porque las bacterias quedan protegidas en su interior y la infección recidiva mientras quede un fragmento.',
  no:{0:'Enterobacter aerogenes no es un productor característico de ureasa asociado a litiasis coraliforme.',1:'Staphylococcus aureus no es causa habitual de infección urinaria litogénica; el estafilococo ureasa positivo del tracto urinario es Staphylococcus saprophyticus.',2:'Yersinia enterocolitica produce infección intestinal y adenitis mesentérica, no litiasis urinaria.'},
  trampa:'Se responde Escherichia coli por ser la causa más común de infección urinaria. Pero E. coli no tiene ureasa: aquí el filtro no es la frecuencia sino la enzima.',
  dx:['Litiasis de estruvita','Litiasis de oxalato cálcico','Litiasis úrica'],
  obj:'Relacionar la litiasis de estruvita con los gérmenes productores de ureasa.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Campbell-Walsh, Urología.'
},
'MIR-2014-M93': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Dieta sin gluten',
  clave:'La leche y sus derivados naturales son intrínsecamente seguros; el resto de la lista son alimentos manufacturados con gluten oculto.',
  exp:'La clave de la pregunta es distinguir el alimento *natural* del *procesado*. La *leche y sus derivados* —yogur natural, queso, nata, cuajada— no contienen gluten en su composición y no requieren aditivos que lo lleven, de modo que constituyen un grupo seguro. En cambio, todos los demás grupos son productos manufacturados en los que el gluten aparece como *ingrediente oculto*: las conservas cárnicas, hamburguesas y albóndigas llevan pan rallado o harina como ligante; las salsas, condimentos y aditivos usan harina o almidón de trigo como espesante y soporte; los embutidos y patés emplean almidones y proteínas vegetales; y la pasta, aunque sea integral, está hecha directamente de trigo. Esto explica por qué el celíaco no solo debe evitar el pan y la pasta, sino *leer todas las etiquetas* y recurrir a los productos certificados sin gluten. Y conviene recordar el fondo del problema: la dieta debe ser estricta y de por vida, porque las transgresiones mantienen la atrofia vellositaria y aumentan el riesgo de linfoma intestinal.',
  no:{0:'Las hamburguesas y albóndigas industriales llevan pan rallado o harina como ligante.',2:'Las salsas y aditivos usan con frecuencia harina o almidón de trigo como espesante.',3:'La pasta, integral o no, está hecha de trigo: es la fuente más directa de gluten.',4:'Los embutidos y patés incorporan almidones y proteínas vegetales que pueden contener gluten.'},
  trampa:'Se descarta la leche por confundir la celiaquía con la intolerancia a la lactosa. Puede haber intolerancia secundaria transitoria, pero la leche no lleva gluten.',
  dx:[],
  obj:'Identificar el gluten oculto en alimentos manufacturados.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las recomendaciones de la FACE y guías ESPGHAN sobre enfermedad celíaca.'
},
'MIR-2016-M80': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Gradiente seroascítico de albúmina',
  clave:'El gradiente alto significa HIPERTENSIÓN PORTAL. La carcinomatosis peritoneal no la produce: gradiente bajo.',
  exp:'El gradiente seroascítico de albúmina se calcula restando la albúmina del líquido ascítico a la del suero, y es el mejor discriminador del origen de una ascitis, muy superior a la vieja clasificación en trasudado y exudado. Un gradiente *igual o superior a 1,1 g/dL* indica *hipertensión portal*, con una fiabilidad cercana al 97%, y agrupa la *cirrosis*, la insuficiencia cardiaca, el *síndrome de Budd-Chiari*, la trombosis portal, la *hepatitis fulminante* y las metástasis hepáticas masivas. Un gradiente *inferior a 1,1* indica que el problema está en el *peritoneo* y no en el sistema portal, e incluye la *carcinomatosis peritoneal*, la tuberculosis peritoneal, la ascitis pancreática, la nefrótica y la serositis. La razón fisiopatológica es sencilla: cuando la presión portal es alta, el líquido que trasuda es pobre en proteínas y el gradiente se abre; cuando el peritoneo está inflamado o infiltrado, el exudado es rico en albúmina y el gradiente se estrecha.',
  no:{0:'La cirrosis es el prototipo de gradiente alto por hipertensión portal.',2:'El Budd-Chiari obstruye el drenaje venoso hepático y genera hipertensión portal, con gradiente alto.',3:'La hepatitis fulminante también cursa con hipertensión portal y gradiente elevado.'},
  trampa:'Se piensa que la ascitis tumoral siempre da gradiente alto. La carcinomatosis actúa sobre el peritoneo, no sobre la porta; las metástasis hepáticas masivas sí lo elevan.',
  dx:['Carcinomatosis peritoneal','Ascitis cirrótica','Tuberculosis peritoneal','Síndrome de Budd-Chiari'],
  obj:'Interpretar el gradiente seroascítico de albúmina para localizar el origen de la ascitis.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías AASLD sobre ascitis.'
},
'MIR-2016-M72': {
  esp:'Cirugía', tema:'Cirugía digestiva', sub:'Vólvulo de sigma',
  clave:'Anciano institucionalizado con obstrucción y "grano de café" en la radiografía: vólvulo de sigma. Devolvulación endoscópica.',
  exp:'La imagen en *grano de café* es prácticamente diagnóstica: corresponde a un asa sigmoidea enormemente dilatada y doblada sobre sí misma, con las dos paredes internas enfrentadas dibujando la línea que separa los dos lóbulos. El *vólvulo de sigma* es una obstrucción de asa cerrada por torsión sobre su meso, y su terreno típico es el que describe el caso: *anciano institucionalizado*, encamado o con movilidad reducida, con estreñimiento crónico y un sigma alargado y redundante; la ausencia de cirugía previa hace además improbable la obstrucción por bridas. El tratamiento inicial, si *no hay signos de sufrimiento intestinal* —y aquí no los hay: no hay peritonismo, no hay fiebre y la analítica es normal—, es la *devolvulación endoscópica* mediante rectosigmoidoscopia, que destuerce el asa, permite descomprimir y valorar directamente la mucosa, y deja una sonda rectal. Como la recidiva es muy frecuente, después se programa una sigmoidectomía electiva. Si hubiera peritonitis o mucosa isquémica, la cirugía sería urgente.',
  no:{0:'La diverticulitis cursa con dolor localizado en fosa ilíaca izquierda, fiebre y leucocitosis, no con esta distensión timpánica sin peritonismo ni analítica normal.',1:'La isquemia mesentérica produce dolor desproporcionado a la exploración, acidosis y deterioro rápido; la analítica normal la hace muy improbable.',3:'El síndrome de Ogilvie es una pseudoobstrucción sin torsión, con dilatación difusa de todo el colon, no la imagen en grano de café.'},
  trampa:'Se lleva al quirófano directamente. Sin signos de sufrimiento intestinal, la endoscopia resuelve el cuadro sin cirugía urgente.',
  dx:['Vólvulo de sigma','Síndrome de Ogilvie','Neoplasia obstructiva de colon','Diverticulitis'],
  obj:'Reconocer el vólvulo de sigma y tratarlo con devolvulación endoscópica si no hay sufrimiento intestinal.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Schwartz, Principios de Cirugía.'
},

/* ==================== NEUROLOGÍA Y NEUMOLOGÍA ==================== */
'MIR-2015-M123': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Interpretación de la gasometría',
  clave:'Hipoxemia con pCO2 BAJA es hiperventilación. Las benzodiacepinas hacen lo contrario: hipoventilan y RETIENEN CO2.',
  exp:'La gasometría muestra *hipoxemia* con pO2 de 55 y, sobre todo, una *pCO2 de 33*, es decir, *baja*, con pH ligeramente alcalino. Ese patrón significa que el paciente está *hiperventilando*: tiene un problema pulmonar que le impide oxigenar y responde aumentando la ventilación, lo que lava CO2. Encaja con la insuficiencia cardiaca, con el neumotórax y con cualquier causa de alteración de la relación ventilación/perfusión o de la difusión. La *sobredosis de benzodiacepinas* produce justo lo contrario: deprime el centro respiratorio, la ventilación cae y el CO2 *se retiene*, dando una insuficiencia respiratoria *hipercápnica* con pCO2 elevada y acidosis respiratoria. Por eso es la menos probable. El caso de la intoxicación por monóxido merece un comentario: la pO2 disuelta puede ser normal porque el problema es que el CO ocupa la hemoglobina, y la pulsioximetría engaña; se diagnostica midiendo *carboxihemoglobina* mediante cooximetría.',
  no:{0:'La insuficiencia cardiaca produce hipoxemia con hiperventilación y pCO2 baja: encaja perfectamente.',1:'El neumotórax da hipoxemia por alteración V/Q y taquipnea con hipocapnia.',3:'La intoxicación por CO puede acompañarse de taquipnea e hipocapnia y no contradice esta gasometría.'},
  trampa:'Se mira solo la pO2 baja y se dan por posibles todas las opciones. El dato que discrimina es la pCO2: los depresores del centro respiratorio la SUBEN.',
  dx:[],
  obj:'Diferenciar insuficiencia respiratoria hipoxémica de hipercápnica por la pCO2.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con West, Fisiopatología Pulmonar.'
},
'MIR-2016-M196': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Estadios radiológicos de la sarcoidosis',
  clave:'Estadio III de sarcoidosis: infiltrados pulmonares SIN adenopatías hiliares. Las adenopatías ya han desaparecido.',
  exp:'La estadificación radiológica de la sarcoidosis, la clasificación de Scadding, tiene cinco escalones que hay que memorizar en bloque porque marcan el pronóstico. El *estadio 0* es la radiografía normal. El *estadio I*, adenopatías hiliares bilaterales *sin* afectación del parénquima, y es el más frecuente y el de mejor pronóstico, con remisión espontánea en la mayoría. El *estadio II* combina adenopatías *con* infiltrados. El *estadio III* es el que pregunta el caso: *infiltrados parenquimatosos sin adenopatías*, porque estas ya han regresado mientras la enfermedad avanzaba hacia el pulmón; su remisión espontánea es mucho menos probable. Y el *estadio IV* es la fibrosis establecida con retracción, bronquiectasias de tracción y panalización, ya irreversible. En esta paciente, la disnea progresiva de tres meses y el antecedente de *uveítis anterior* —una de las manifestaciones extrapulmonares clásicas junto al eritema nudoso y la parálisis facial— completan un cuadro que, por ser estadio III sintomático, sí es tributario de corticoides.',
  no:{1:'Adenopatías sin afectación parenquimatosa corresponden al estadio I.',2:'Las adenopatías paratraqueales pueden acompañar, pero no definen el estadio III ni son su rasgo distintivo.',3:'Adenopatías con alteraciones parenquimatosas corresponden al estadio II.'},
  trampa:'Se asume que la sarcoidosis siempre tiene adenopatías hiliares. En el estadio III ya no están: precisamente eso es lo que lo define.',
  dx:['Sarcoidosis estadio III','Fibrosis pulmonar idiopática','Neumonitis por hipersensibilidad','Linfangitis carcinomatosa'],
  obj:'Memorizar los estadios radiológicos de la sarcoidosis y su pronóstico.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con guías ATS/ERS sobre sarcoidosis.'
},
'MIR-2015-M132': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Evaluación del deterioro cognitivo',
  clave:'Para CARACTERIZAR el tipo de déficit cognitivo, la herramienta es la evaluación neuropsicológica, no la imagen.',
  exp:'Hay que leer con cuidado qué se pregunta: no se pide confirmar una causa ni descartar una lesión, sino *caracterizar el tipo de déficit*, es decir, saber qué dominios cognitivos están afectados y en qué grado. Para eso la herramienta es la *evaluación neuropsicológica formal*, que explora por separado memoria episódica y de trabajo, lenguaje, funciones ejecutivas, atención, praxias, gnosias y capacidad visuoespacial, y compara los resultados con los valores normativos ajustados por edad y escolaridad. Ese *perfil* es el que orienta el diagnóstico: el predominio amnésico apunta al Alzheimer, el disejecutivo y conductual a la demencia frontotemporal, el patrón del lenguaje a las afasias progresivas primarias, y las fluctuaciones con alteración visuoespacial a los cuerpos de Lewy. La neuroimagen es complementaria y necesaria, pero su papel es *descartar causas estructurales* y valorar atrofia, no describir el perfil cognitivo.',
  no:{1:'La resonancia descarta lesiones estructurales y valora la atrofia, pero no caracteriza qué dominios cognitivos fallan.',2:'El PET aporta datos metabólicos o de amiloide y se reserva para casos dudosos; no sustituye a la exploración cognitiva.',3:'El electroencefalograma solo es útil ante sospecha de crisis, encefalopatía o enfermedad priónica.'},
  trampa:'Se pide una prueba de imagen ante cualquier problema neurológico. Aquí la pregunta es funcional, y a eso responde la neuropsicología.',
  dx:['Enfermedad de Alzheimer','Demencia frontotemporal','Deterioro cognitivo leve','Pseudodemencia depresiva'],
  obj:'Elegir la evaluación neuropsicológica para caracterizar el perfil del deterioro cognitivo.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con guías NICE y criterios NIA-AA sobre demencia.'
},
'MIR-2016-M213': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Síndrome de Eaton-Lambert',
  clave:'Debilidad que MEJORA con el ejercicio y respuesta INCREMENTAL en el electromiograma, con nódulo pulmonar: Eaton-Lambert.',
  exp:'Dos datos separan este cuadro de la miastenia gravis y ambos apuntan al mismo mecanismo. Clínicamente, la debilidad *mejora transitoriamente con el ejercicio sostenido*, al revés que en la miastenia, donde empeora con la actividad. Y en el electromiograma, la estimulación repetitiva produce un *aumento incremental* del potencial de acción muscular compuesto, mientras que en la miastenia se observa un decremento. La explicación es que en el Eaton-Lambert los autoanticuerpos van dirigidos contra los *canales de calcio dependientes de voltaje tipo P/Q* de la terminal *presináptica*: al bloquearlos entra menos calcio y se libera poca acetilcolina, pero la contracción repetida hace que el calcio se acumule en la terminal y la liberación mejore, de ahí la facilitación. El contexto es decisivo: en la mayoría de los casos es un *síndrome paraneoplásico* asociado al *carcinoma microcítico de pulmón*, y aquí hay un varón fumador con nódulo y adenopatía subcarinal. Predomina la debilidad *proximal* de miembros inferiores, con disautonomía —sequedad de boca, impotencia— y reflejos disminuidos que reaparecen tras el ejercicio.',
  no:{0:'Una polineuropatía paraneoplásica daría déficit sensitivo distal en guante y calcetín, no facilitación en el electromiograma.',1:'La polimiositis produce debilidad proximal con CK elevada y patrón miopático en el EMG, sin respuesta incremental.',2:'La miopatía alcohólica no cursa con diplopía ni con facilitación electromiográfica.'},
  trampa:'Se responde miastenia gravis por la diplopía y la debilidad fluctuante. La mejoría con el ejercicio y el patrón incremental invierten el diagnóstico.',
  dx:['Síndrome de Eaton-Lambert','Miastenia gravis','Polimiositis','Botulismo'],
  obj:'Diferenciar Eaton-Lambert de miastenia gravis por la clínica y el patrón electromiográfico.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2018-M160': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Electromiografía',
  clave:'En la miastenia el potencial inicial es normal o poco reducido; lo que aparece con la estimulación repetitiva es el DECREMENTO.',
  exp:'La afirmación correcta describe bien el punto de partida de la miastenia gravis: el *primer* potencial de acción muscular compuesto es *normal o solo ligeramente reducido*, porque en reposo hay suficiente reserva de receptores; lo característico aparece *después*, con la estimulación repetitiva a baja frecuencia, que produce una *respuesta decremental* superior al 10% al agotarse el factor de seguridad de la unión neuromuscular. Repasando los otros enunciados se cubre casi toda la electromiografía de examen. En las *miopatías* —polimiositis, distrofias— los potenciales de unidad motora son de amplitud *baja* y duración *corta*, con reclutamiento precoz, porque se pierden fibras dentro de cada unidad motora; los potenciales grandes y largos son propios de la reinervación *neurógena*, como en la esclerosis lateral amiotrófica. En el *Eaton-Lambert*, la estimulación a *alta frecuencia* produce un *incremento*, no una disminución. Y la *miotonía* se caracteriza por descargas repetitivas de *alta frecuencia* con amplitud y frecuencia decrecientes, el clásico sonido de bombardero en picado.',
  no:{1:'En las miopatías los potenciales son de BAJA amplitud y CORTA duración; lo contrario define el patrón neurógeno.',2:'En el Eaton-Lambert la estimulación a alta frecuencia produce INCREMENTO, no disminución.',3:'La miotonía consiste en descargas de ALTA frecuencia con amplitud decreciente, no de baja frecuencia.'},
  trampa:'Se confunden los patrones miopático y neurógeno. Regla: menos fibras por unidad motora dan potenciales pequeños y cortos; menos unidades pero más grandes dan potenciales altos y largos.',
  dx:[],
  obj:'Distinguir los patrones electromiográficos de miopatía, neuropatía, miastenia y Eaton-Lambert.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Preston y Shapiro, Electromyography and Neuromuscular Disorders.'
},
'MIR-2016-M192': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Enfermedad de Behçet',
  clave:'Aftas orales recurrentes MÁS úlceras genitales MÁS eritema nudoso: enfermedad de Behçet.',
  exp:'El diagnóstico es puramente clínico y descansa en una tríada muy reconocible. La *aftosis oral recurrente* es el criterio obligatorio, definida como al menos tres brotes al año, y suele ser la primera manifestación. A ella se suman las *úlceras genitales*, que en el varón asientan en escroto y curan dejando cicatriz, y las *lesiones cutáneas*, entre las que destacan el *eritema nudoso* —los nódulos rojos, dolorosos y pretibiales del enunciado— y las lesiones pseudofoliculares. La enfermedad de Behçet es una *vasculitis de vaso variable* que puede afectar a arterias y venas de cualquier calibre, y lo que hay que vigilar es lo grave: la *uveítis posterior con hipopión*, que amenaza la visión, la afectación neurológica y las trombosis venosas, incluidos los aneurismas de arteria pulmonar. Es más frecuente a lo largo de la antigua ruta de la seda y se asocia al HLA-B51; la patergia, una pápula tras el pinchazo cutáneo, apoya el diagnóstico aunque es poco sensible en occidente.',
  no:{0:'La sarcoidosis puede dar eritema nudoso —el síndrome de Löfgren—, pero no úlceras genitales ni aftosis oral recurrente.',1:'La dermatomiositis cursa con eritema en heliotropo, pápulas de Gottron y debilidad proximal, no con esta tríada mucocutánea.',3:'El lupus puede producir úlceras orales, típicamente indoloras y palatinas, pero las úlceras genitales dolorosas no son propias de él.'},
  trampa:'Se ve el eritema nudoso y se piensa en sarcoidosis. Lo que decide es la combinación con úlceras en las DOS mucosas, oral y genital.',
  dx:['Enfermedad de Behçet','Sarcoidosis','Lupus eritematoso sistémico','Herpes recurrente'],
  obj:'Diagnosticar el Behçet por su tríada mucocutánea y conocer sus complicaciones graves.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con los criterios ISG y Harrison, 21.ª ed.'
},
'MIR-2015-M33': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Cáncer de mama: factores predictivos',
  clave:'En todo carcinoma de mama hay que determinar receptores hormonales y HER2: deciden el tratamiento.',
  exp:'La caracterización molecular del tumor no es un lujo académico sino lo que *elige el tratamiento*. Los *receptores de estrógeno y progesterona* indican si el tumor responderá a la *hormonoterapia* —tamoxifeno o inhibidores de la aromatasa según el estado menopáusico—, un tratamiento eficaz y bien tolerado que se administra durante años. El *HER2*, determinado por inmunohistoquímica y confirmado por hibridación in situ cuando el resultado es dudoso, indica si el tumor se beneficia del *trastuzumab* y demás anti-HER2, que transformaron el pronóstico de un subtipo que antes era de los peores. La combinación de ambos, junto al índice de proliferación Ki-67, define los *subtipos* luminal A, luminal B, HER2 positivo y triple negativo, que difieren en pronóstico y en esquema terapéutico. El estudio de *BRCA*, en cambio, está indicado ante criterios de sospecha hereditaria —edad joven, bilateralidad, historia familiar, triple negativo—, y esta paciente de 67 años sin antecedentes familiares no los reúne.',
  no:{0:'La citometría de flujo se emplea en hemopatías, no en los tumores sólidos epiteliales.',2:'La E-cadherina sirve para distinguir el carcinoma lobulillar del ductal, pero no cambia el tratamiento, y no hay criterios para estudiar a los familiares.',3:'El estudio de BRCA se indica ante sospecha de cáncer hereditario, que esta paciente no tiene: 67 años y sin historia familiar.'},
  trampa:'Se pide el estudio genético por reflejo. El estudio germinal responde a criterios concretos; lo que se determina SIEMPRE en el tumor son receptores y HER2.',
  dx:[],
  obj:'Conocer los factores predictivos que se determinan sistemáticamente en el cáncer de mama.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con guías ESMO de cáncer de mama precoz.'
},

/* ==================== PSIQUIATRÍA, BIOÉTICA Y SALUD PÚBLICA ==================== */
'MIR-2016-M189': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Síndrome de Gilles de la Tourette',
  clave:'Tics MOTORES y VOCALES múltiples en un adolescente, con síntomas obsesivos asociados: síndrome de Tourette.',
  exp:'El diagnóstico exige tres condiciones y el enunciado las cumple todas: *tics motores múltiples*, *al menos un tic vocal* —aquí también múltiples—, e inicio antes de los 18 años con duración superior al año. Los tics son movimientos o vocalizaciones súbitos, rápidos y estereotipados, precedidos de una *sensación premonitoria* incómoda que se alivia al ejecutarlos, y que el paciente puede suprimir de forma voluntaria pero solo durante un rato y a costa de un aumento posterior. La coprolalia, que es lo que popularmente se asocia al síndrome, aparece en realidad en una minoría. Lo importante en la práctica es que el Tourette *casi nunca viene solo*: hasta la mitad de los pacientes asocian *trastorno obsesivo-compulsivo*, como en este caso, y una proporción parecida presenta trastorno por déficit de atención e hiperactividad. Con frecuencia son las comorbilidades, y no los tics, lo que más deteriora la vida del paciente, de modo que el tratamiento se dirige a lo que más incapacita.',
  no:{0:'El trastorno obsesivo-compulsivo aislado no incluye tics motores ni vocales; aquí los síntomas obsesivos son la comorbilidad, no el diagnóstico principal.',1:'La corea de Huntington comienza en la edad adulta, es una enfermedad hereditaria dominante con demencia asociada, y sus movimientos son coreicos y no suprimibles.',3:'La esquizofrenia hebefrénica cursa con desorganización del pensamiento y afecto inapropiado, no con tics.'},
  trampa:'Se responde trastorno obsesivo por los síntomas compulsivos. Cuando coexisten tics motores y vocales, el diagnóstico que los engloba es el Tourette.',
  dx:['Síndrome de Gilles de la Tourette','Trastorno obsesivo-compulsivo','Trastorno de tics transitorio','Corea'],
  obj:'Diagnosticar el síndrome de Tourette y reconocer sus comorbilidades habituales.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con los criterios DSM-5-TR.'
},
'MIR-2016-M209': {
  esp:'Medicina Familiar', tema:'Geriatría', sub:'Sueño en el anciano',
  clave:'Latencia alargada, despertares y siesta diurna con función y cognición normales: cambio FISIOLÓGICO del sueño con la edad.',
  exp:'El sueño cambia con la edad de una forma predecible y benigna: la *latencia* para dormirse se alarga, aumentan los *despertares nocturnos* y el sueño se fragmenta, disminuyen las fases profundas de ondas lentas, el ritmo circadiano se *adelanta* —el anciano se duerme y se despierta antes— y aparece la tendencia a la *siesta diurna*, que redistribuye el tiempo total de sueño a lo largo de las 24 horas. Nada de eso es patológico por sí solo. Lo que obligaría a buscar enfermedad son las *consecuencias diurnas*: somnolencia incapacitante, deterioro funcional, caídas o alteración del ánimo. Esta paciente *mantiene una actividad normal durante el día*, no tiene antecedentes, la exploración es normal y el Mini-Mental es de 31 sobre 35, dentro de lo esperable. Por tanto lo correcto es informar, revisar la higiene del sueño —horarios regulares, limitar la siesta, evitar cafeína y pantallas, exposición a luz por la mañana— y *no medicar*: las benzodiacepinas en el anciano aumentan caídas, fracturas y confusión.',
  no:{1:'El hipotiroidismo del anciano cursa con astenia, bradipsiquia, estreñimiento y bradicardia, y aquí la exploración es normal.',2:'Faltan los síntomas nucleares de la depresión mayor: no hay anhedonia, ni ánimo bajo, ni pérdida de interés; la actividad diurna es normal.',3:'La hipersomnia idiopática es justo lo contrario: sueño nocturno prolongado con somnolencia diurna excesiva.'},
  trampa:'Se etiqueta de insomnio y se receta un hipnótico. Sin repercusión diurna no hay trastorno, y en el anciano el hipnótico hace más daño que el sueño fragmentado.',
  dx:[],
  obj:'Distinguir el cambio fisiológico del sueño en el anciano de un trastorno que requiere tratamiento.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con los criterios de la American Academy of Sleep Medicine y los criterios de Beers.'
},
'MIR-2015-M183': {
  esp:'Bioética', tema:'Relación médico-paciente', sub:'Límites profesionales',
  clave:'La relación médico-paciente no se traslada a las redes sociales. Se explica el límite con claridad y respeto, sin engañar.',
  exp:'La respuesta correcta lo es por dos motivos, uno de fondo y otro de forma. El de fondo es que aceptar a una paciente como contacto personal en una red social *difumina el límite profesional*: da acceso a la vida privada del médico, genera una relación dual que interfiere con la objetividad clínica, y en una menor en situación de vulnerabilidad —posible acoso escolar, sospecha de trastorno alimentario— puede fomentar una dependencia inadecuada. Además compromete la confidencialidad en ambas direcciones. El de forma es que la negativa debe darse *de frente y con honestidad*: explicar que existen límites profesionales y anticiparle que no podrá aceptar la solicitud, de modo que la paciente no llegue a exponerse a un rechazo. Las opciones que consisten en aceptar a medias, o en dejar que envíe la petición sabiendo que no se aceptará, son formas de *engaño* que dañan más la confianza que una negativa clara y amable.',
  no:{0:'Aceptar la solicitud rompe el límite profesional; que el contenido sea apropiado no es el problema.',1:'Aceptar con acceso restringido sigue creando una relación dual y solo enmascara el problema.',3:'Dejar que haga la petición sin intención de aceptarla es engañarla, y el rechazo posterior será peor que una explicación honesta.'},
  trampa:'Se busca la opción más amable para no herir a una paciente vulnerable. Lo amable de verdad es explicar el límite antes de que se exponga.',
  dx:[],
  obj:'Mantener los límites profesionales en la relación médico-paciente, también en redes sociales.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con el Código de Deontología Médica de la OMC.'
},
'MIR-2015-M188': {
  esp:'Bioética', tema:'Autonomía del paciente', sub:'Evaluación de la capacidad',
  clave:'Antes de decidir si puede irse a casa hay que evaluar formalmente su CAPACIDAD para tomar decisiones sobre su salud.',
  exp:'El paciente *quiere* irse a su domicilio, y hay motivos serios para dudar de que pueda hacerlo con seguridad: desorientación en la calle, tres urgencias en tres meses, un INR de 5 seguido de un INR de 0,9 —lo que indica que toma la medicación de forma errática—, hemoglobina glicosilada del 11%, índice de masa corporal de 16 con sarcopenia, higiene deteriorada, rechazo sistemático de ayudas, ausencia de red social e incapacidad para administrarse la insulina. La cuestión ética central es que la *autonomía solo se respeta cuando el paciente es capaz*: si lo es, tiene derecho a decidir aunque su decisión sea arriesgada; si no lo es, deben activarse medidas de protección. Por eso el paso obligado y *previo* es una *evaluación formal de la capacidad* para esta decisión concreta, valorando si comprende su situación, aprecia sus consecuencias, razona entre alternativas y expresa una elección. Todo lo demás —descartar demencia, descartar depresión, coordinar con trabajo social— viene *después* y depende del resultado.',
  no:{0:'Derivar a primaria y trabajo social es necesario, pero solo tiene sentido una vez establecido si el paciente puede decidir por sí mismo.',2:'Estudiar la demencia es parte de la evaluación posterior; el diagnóstico por sí solo no determina la capacidad, que se evalúa para cada decisión concreta.',3:'Descartar depresión es igualmente un paso ulterior y tampoco sustituye a la valoración de capacidad.'},
  trampa:'Se confunde diagnóstico con capacidad. Tener demencia no incapacita automáticamente, y no tenerla no garantiza que se pueda decidir: la capacidad se evalúa, no se deduce.',
  dx:[],
  obj:'Situar la evaluación de la capacidad como paso previo a cualquier decisión sobre el alta.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la Ley 41/2002 de autonomía del paciente y el modelo de Appelbaum.'
},
'MIR-2015-M197': {
  esp:'Salud Pública', tema:'Calidad asistencial', sub:'Dimensiones de la calidad',
  clave:'Las reclamaciones miden la calidad PERCIBIDA por el usuario, es decir, la calidad extrínseca.',
  exp:'La calidad asistencial se evalúa en dos planos distintos y complementarios. La *calidad intrínseca o científico-técnica* mide si se hace lo correcto y bien: adherencia a las guías, indicadores de proceso y de resultado, tasas de complicaciones, mortalidad ajustada. Se evalúa con auditorías de historia clínica y con indicadores clínicos. La *calidad extrínseca o percibida* mide la experiencia del usuario: trato, información recibida, tiempos de espera, confort, accesibilidad y respeto. Se evalúa con encuestas de satisfacción, grupos focales y, precisamente, con el análisis de *reclamaciones y sugerencias*. Una reclamación informa de cómo ha vivido el paciente la atención, no de si el diagnóstico fue acertado, y ambas cosas pueden ir por separado: se puede recibir un tratamiento impecable y reclamar por el trato, o quedar muy satisfecho con una asistencia técnicamente deficiente. Por eso las reclamaciones son un indicador valioso, pero solo de esta dimensión.',
  no:{0:'Las reclamaciones se recogen en esa unidad, pero informan sobre el conjunto de la asistencia, no sobre la propia unidad.',2:'La adherencia a las guías es calidad científico-técnica y se mide con auditorías clínicas, no con reclamaciones.',3:'La calidad intrínseca es justamente la que las reclamaciones NO miden.'},
  trampa:'Se supone que quien reclama es porque le trataron mal técnicamente. Lo que expresa una reclamación es la experiencia vivida, que es otra dimensión.',
  dx:[],
  obj:'Distinguir calidad científico-técnica de calidad percibida y sus instrumentos de medida.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Donabedian y con manuales de gestión de calidad asistencial.'
},
'MIR-2015-M198': {
  esp:'Salud Pública', tema:'Vacunas', sub:'Vacunas vivas atenuadas',
  clave:'La rubeola se previene con vacuna VIVA atenuada (la triple vírica). Tos ferina, encefalitis japonesa y hepatitis B son inactivadas.',
  exp:'Conviene tener las dos listas separadas porque de ahí salen las contraindicaciones. Son *vivas atenuadas* la triple vírica —sarampión, *rubeola* y parotiditis—, la varicela, el herpes zóster de virus vivo, la fiebre amarilla, la fiebre tifoidea oral, la polio oral, el rotavirus, el BCG y la gripe intranasal. Son *inactivadas* o de subunidades la *tos ferina* acelular, la *hepatitis B* recombinante, la *encefalitis japonesa* actual, la gripe inyectable, la polio inyectable, el tétanos, la difteria, el neumococo, el meningococo, el Haemophilus y el papilomavirus. La distinción tiene tres consecuencias prácticas: las vivas están *contraindicadas en el embarazo y en la inmunodepresión grave*, generan inmunidad más duradera con menos dosis, y si se administran dos vivas parenterales distintas deben ponerse el mismo día o separadas al menos cuatro semanas.',
  no:{1:'La vacuna de la tos ferina en uso es acelular, es decir, de componentes purificados: inactivada.',2:'La vacuna actual de la encefalitis japonesa es inactivada.',3:'La de la hepatitis B es recombinante, obtenida por ingeniería genética: no contiene virus vivos.'},
  trampa:'Se memoriza la lista sin ver para qué sirve. La razón de separarlas es saber a quién NO se le puede poner una vacuna viva.',
  dx:[],
  obj:'Clasificar las vacunas en vivas atenuadas e inactivadas y deducir sus contraindicaciones.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con el Red Book y las recomendaciones del CDC.'
},
'MIR-2018-M127': {
  esp:'Salud Pública', tema:'Vacunas', sub:'Calendario vacunal',
  clave:'Pauta de 4 meses, 12 meses y 12 años: vacuna frente al meningococo C.',
  exp:'La pregunta se resuelve reconociendo el *patrón temporal* de cada vacuna del calendario. La del *meningococo C* es la única con esa pauta característica de tres dosis muy separadas: una en la lactancia a los *4 meses*, un refuerzo a los *12 meses* y una dosis en la *adolescencia, a los 12 años*, esta última porque la protección conferida en la infancia decae y porque el adolescente es el principal portador nasofaríngeo y transmisor de la enfermedad meningocócica. Las demás siguen esquemas distintos: la *hepatitis B* y el *Haemophilus influenzae b* van integradas en la hexavalente a los 2, 4 y 11 meses; el *neumococo conjugado* sigue la pauta 2+1, a los 2, 4 y 11 meses; y a los 12 años se administran además la vacuna del papilomavirus y la de varicela en quienes no la hayan pasado. Es un calendario de referencia española, pero el concepto que se practica —refuerzo adolescente por decaimiento de la inmunidad y por control del estado de portador— es universal.',
  no:{0:'La hepatitis B se administra dentro de la hexavalente a los 2, 4 y 11 meses, no a los 12 años.',1:'El neumococo conjugado sigue la pauta 2+1 en el primer año y no tiene dosis en la adolescencia.',2:'El Haemophilus influenzae b va en la hexavalente y no requiere refuerzo adolescente.'},
  trampa:'Se intenta recordar el calendario entero. Basta con quedarse con la vacuna que tiene dosis en la adolescencia: la meningocócica.',
  dx:[],
  obj:'Identificar la pauta vacunal del meningococo C y el sentido del refuerzo adolescente.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con el calendario común del Consejo Interterritorial del SNS.'
},

/* ==================== FARMACOLOGÍA Y CIENCIAS BÁSICAS ==================== */
'MIR-2016-M204': {
  esp:'Farmacología', tema:'Toxicología', sub:'Toxicidad sistémica por anestésicos locales',
  clave:'Acúfenos, mareo, midriasis e incoordinación tras infiltrar mepivacaína: toxicidad sistémica del anestésico local. Parar, oxígeno y benzodiacepina.',
  exp:'La secuencia de síntomas es la firma de la *toxicidad sistémica por anestésicos locales*, y sigue un orden característico: primero *síntomas neurológicos* de la fase excitatoria —sabor metálico, entumecimiento perioral, *acúfenos y alteración de la audición*, *mareo*, agitación, alteraciones visuales y *movimientos incoordinados* que pueden progresar a convulsiones—, y solo después *cardiotoxicidad*, con arritmias e incluso parada. El anestésico ha alcanzado el torrente sanguíneo, y en este caso se entiende bien por qué: dos punciones fallidas en una zona muy vascularizada, con posible inyección intravascular directa. La conducta es inmediata: *detener el procedimiento*, administrar *oxígeno*, controlar las convulsiones con *benzodiacepina* y dar soporte cardiovascular; en la toxicidad grave se emplea *emulsión lipídica al 20%* intravenosa, que actúa como sumidero del fármaco. Es importante no confundirlo con ansiedad: la paciente parecía nerviosa, pero los acúfenos, la midriasis y la incoordinación no son ansiedad.',
  no:{0:'La anafilaxia cursaría con broncoespasmo, urticaria, angioedema e HIPOtensión, no con acúfenos, midriasis e incoordinación.',1:'Un ictus daría focalidad neurológica establecida, no este cuadro simétrico y progresivo tras la infiltración.',2:'El neumotórax produciría dolor torácico, disnea e hipoxemia, y no explica los síntomas neurológicos ni la midriasis.'},
  trampa:'Se atribuye todo a la ansiedad porque la paciente estaba nerviosa y taquicárdica. La ansiedad no produce acúfenos ni movimientos incoordinados.',
  dx:['Toxicidad sistémica por anestésicos locales','Anafilaxia','Neumotórax iatrogénico','Crisis de ansiedad'],
  obj:'Reconocer la toxicidad sistémica por anestésicos locales y su manejo inicial.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las recomendaciones ASRA sobre toxicidad de anestésicos locales.'
},
'MIR-2016-M205': {
  esp:'Farmacología', tema:'Toxicología', sub:'Intoxicación digitálica',
  clave:'Anorexia, náuseas, malestar y BRADICARDIA con bigeminismo en una anciana digitalizada: intoxicación por digoxina.',
  exp:'La digoxina tiene un *margen terapéutico estrechísimo* y la anciana reúne todos los factores que lo estrechan aún más: 90 años, insuficiencia renal probable por la edad, y tratamiento con *furosemida a dosis altas*, que provoca hipopotasemia —el gran facilitador de la toxicidad digitálica, porque la digoxina y el potasio compiten por la bomba sodio-potasio— y con *bisoprolol*, que suma efecto bradicardizante. La intoxicación se presenta de forma engañosamente inespecífica, con *síntomas digestivos* —anorexia, náuseas, molestias abdominales— y *generales* —malestar, astenia, confusión—, a los que se añaden las alteraciones visuales clásicas: visión borrosa y *xantopsia*, ver los objetos amarillos. Y sobre todo con *arritmias*: bradicardia, bloqueos y *extrasistolia ventricular en bigeminismo*, exactamente lo que se palpa aquí. La conducta es suspender la digoxina, medir niveles, potasio y función renal, corregir la hipopotasemia y, en la intoxicación grave con arritmias malignas o hiperpotasemia, administrar anticuerpos antidigoxina.',
  no:{0:'La insuficiencia cardiaca descompensada cursaría con disnea y congestión; la paciente está eupneica, con saturación del 95% y auscultación pulmonar normal.',2:'Atribuirlo a una dispepsia funcional y tapar los síntomas con un inhibidor de la bomba dejaría avanzar una intoxicación potencialmente mortal.',3:'La ansiedad no explica la bradicardia de 48 con bigeminismo.'},
  trampa:'Los síntomas digestivos hacen pensar en el estómago. En un paciente digitalizado, náuseas más bradicardia son intoxicación hasta que se demuestre lo contrario.',
  dx:['Intoxicación digitálica','Insuficiencia cardiaca descompensada','Bloqueo auriculoventricular','Dispepsia'],
  obj:'Reconocer la intoxicación por digoxina y los factores que la precipitan.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman, Bases Farmacológicas de la Terapéutica.'
},
'MIR-2016-M37': {
  esp:'Farmacología', tema:'Farmacogenética', sub:'Tiopurina metiltransferasa',
  clave:'La TPMT metaboliza las TIOPURINAS: azatioprina y mercaptopurina. El homocigoto deficiente sufre mielotoxicidad grave.',
  exp:'La *tiopurina metiltransferasa* inactiva por metilación los fármacos tiopurínicos —*azatioprina*, su metabolito 6-mercaptopurina y la tioguanina—. Cuando la enzima está ausente por ser el paciente *homocigoto* para alelos deficientes, situación que afecta a alrededor de una de cada 300 personas, el fármaco no se inactiva y se desvía hacia la formación de nucleótidos de tioguanina que se incorporan al ADN de la médula ósea: el resultado es una *mielosupresión grave y potencialmente mortal* a dosis convencionales. Los *heterocigotos*, en torno al 10% de la población, tienen actividad intermedia y requieren dosis reducidas. Por eso se recomienda determinar la actividad de TPMT —y hoy también el genotipo NUDT15— *antes* de iniciar el tratamiento, y de todos modos vigilar el hemograma. Es uno de los ejemplos más consolidados de farmacogenética aplicada a la clínica, junto al de la *pseudocolinesterasa* y la succinilcolina y al de los acetiladores lentos y la isoniazida.',
  no:{0:'La warfarina depende del CYP2C9 y del VKORC1, no de la TPMT, y su toxicidad es hemorrágica.',2:'La isoniazida se metaboliza por la N-acetiltransferasa: los acetiladores lentos sufren más neuropatía y hepatotoxicidad.',3:'La succinilcolina depende de la pseudocolinesterasa; su déficit produce apnea prolongada, no toxicidad hematológica.'},
  trampa:'Se confunden los polimorfismos entre sí. Conviene fijar los tres pares clásicos: TPMT con azatioprina, pseudocolinesterasa con succinilcolina y NAT con isoniazida.',
  dx:[],
  obj:'Relacionar el déficit de TPMT con la toxicidad hematológica de las tiopurinas.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman y las guías CPIC de farmacogenética.'
},
'MIR-2015-M45': {
  esp:'Ciencias Básicas', tema:'Genética', sub:'Herencia autosómica recesiva',
  clave:'Autosómica recesiva con ambos padres portadores: 25% de riesgo en cada embarazo, igual para niños que para niñas.',
  exp:'La fenilcetonuria es *autosómica recesiva*, de modo que el niño afecto es homocigoto y, necesariamente, *ambos padres son portadores heterocigotos*, aunque estén sanos. Cruzando dos heterocigotos, cada gestación da cuatro combinaciones igualmente probables: un homocigoto sano, dos portadores sanos y un homocigoto afecto. Es decir, *25% de hijos afectos*, 50% portadores y 25% completamente sanos; entre los hijos sanos, dos de cada tres serán portadores. Y como el gen está en un *autosoma* y no en un cromosoma sexual, la probabilidad es *idéntica para niños y niñas*. Dos precisiones que caen a menudo: el riesgo se aplica *en cada embarazo por separado*, sin que los hijos previos lo modifiquen —tener ya un hijo afecto no "gasta" la probabilidad—, y en la fenilcetonuria concreta el diagnóstico precoz mediante el cribado neonatal permite instaurar la dieta pobre en fenilalanina y evitar por completo la discapacidad intelectual.',
  no:{0:'El 50% correspondería a una herencia autosómica dominante con un progenitor afecto.',2:'Las diferencias entre sexos aparecen en la herencia ligada al X, no en la autosómica.',3:'Tampoco existe diferencia por sexo, y el 50% no corresponde a este cruce.'},
  trampa:'Se responde 50% por confundir la probabilidad de ser AFECTO con la de ser PORTADOR, que sí es del 50%.',
  dx:[],
  obj:'Calcular el riesgo de recurrencia en una enfermedad autosómica recesiva.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Thompson y Thompson, Genética en Medicina.'
},
'MIR-2016-M47': {
  esp:'Ciencias Básicas', tema:'Genética', sub:'Translocación robertsoniana 21;21',
  clave:'Translocación 21/21 en la madre: TODOS los fetos viables tendrán síndrome de Down. Riesgo del 100%.',
  exp:'Las translocaciones robertsonianas 21;21 son un caso único dentro del asesoramiento genético. La portadora tiene un cromosoma formado por *dos cromosomas 21 fusionados*, y en la meiosis solo puede generar dos tipos de gameto: uno que lleva *ese cromosoma doble*, y otro que *no lleva ningún 21*. En el primer caso, al unirse con el gameto normal del padre se obtiene una *trisomía 21* por translocación; en el segundo se obtiene una *monosomía 21*, que es incompatible con la vida y aborta muy precozmente. No existe la posibilidad de un gameto con un solo 21 normal, de modo que *el 100% de los fetos viables tendrán síndrome de Down*. Esto contrasta con las demás translocaciones robertsonianas, como la 14;21, donde el riesgo empírico es de alrededor del 10-15% si la portadora es la madre y del 3-5% si es el padre, y con la trisomía 21 libre por no disyunción, que es la forma más frecuente y tiene un riesgo de recurrencia en torno al 1%. La opción reproductiva pasa por donación de gametos o diagnóstico genético preimplantacional.',
  no:{0:'Ese 10-15% es el riesgo de las OTRAS translocaciones robertsonianas maternas, no de la 21;21.',2:'Un riesgo bajo correspondería a la trisomía 21 libre por no disyunción, en torno al 1%.',3:'El 50% no corresponde a ningún escenario aquí: no hay gametos con un solo 21 normal.'},
  trampa:'Se aplica el riesgo genérico de las robertsonianas. La 21;21 es la excepción absoluta, y por eso se pregunta.',
  dx:[],
  obj:'Calcular el riesgo de recurrencia según el mecanismo citogenético del síndrome de Down.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Thompson y Thompson, Genética en Medicina.'
},

/* ==================== EMERGENCIAS, TRAUMATOLOGÍA Y PEDIATRÍA ==================== */
'MIR-2018-M148': {
  esp:'Emergencias', tema:'Traumatismo torácico', sub:'Volet costal',
  clave:'Volet costal con hipoxemia grave: intubación y ventilación mecánica. La presión positiva estabiliza la pared desde dentro.',
  exp:'El *volet costal* o tórax inestable aparece cuando varias costillas contiguas se fracturan en dos puntos y ese segmento queda desconectado del resto de la pared, moviéndose de forma *paradójica*: se hunde en inspiración y se abomba en espiración. El manejo inicial es conservador —analgesia potente, idealmente epidural o bloqueo, oxígeno y fisioterapia respiratoria—, y este paciente lo había recibido con buena respuesta. Cuando pese a ello aparece *hipoxemia grave*, la indicación es la *intubación con ventilación mecánica*, que actúa como una *estabilización neumática interna*: la presión positiva mantiene expandido el segmento inestable, elimina el movimiento paradójico y, sobre todo, trata la contusión pulmonar subyacente, que es en realidad la principal responsable de la hipoxemia. Conviene tener claro ese matiz: en el volet lo que mata no suele ser la mecánica de la pared sino el pulmón contundido que hay debajo.',
  no:{1:'La traqueostomía no es la vía inicial: se plantea si la ventilación se prolonga muchos días.',2:'El decúbito prono es una medida del síndrome de distrés respiratorio ya ventilado, no una alternativa para evitar la intubación.',3:'La fijación costal quirúrgica se plantea de forma programada en casos seleccionados, no como respuesta urgente a la hipoxemia.'},
  trampa:'Se busca estabilizar la pared con una operación. La presión positiva ya la estabiliza desde dentro, y además trata la contusión pulmonar.',
  dx:['Volet costal con contusión pulmonar','Neumotórax','Hemotórax','Síndrome de distrés respiratorio agudo'],
  obj:'Indicar la ventilación mecánica como estabilización neumática interna en el volet costal.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con el manual ATLS.'
},
'MIR-2016-M198': {
  esp:'Cirugía', tema:'Traumatología', sub:'Luxación posterior de cadera',
  clave:'Cadera acortada, en ROTACIÓN INTERNA y aducción: luxación posterior. Reducción urgente bajo anestesia, en menos de 6 horas.',
  exp:'La posición del miembro da el diagnóstico sin necesidad de nada más: *acortamiento con rotación interna y aducción* es la actitud típica de la *luxación posterior* de cadera, que representa alrededor del 90% de las luxaciones de esta articulación y se produce por un impacto sobre la rodilla flexionada, el clásico mecanismo del salpicadero en un accidente de tráfico. La luxación anterior, mucho más rara, daría rotación *externa* y abducción. Y lo esencial es que se trata de una *urgencia*: la cabeza femoral se irriga sobre todo por las arterias circunflejas a través del retináculo, y mientras esté luxada ese aporte está comprometido, de modo que cada hora de retraso aumenta el riesgo de *necrosis avascular*; por debajo de las *seis horas* ese riesgo cae de forma marcada. Por eso lo correcto es avisar a anestesia y *reducir de forma cerrada bajo relajación muscular*, con la maniobra de tracción al cénit con cadera y rodilla flexionadas mientras un ayudante estabiliza la pelvis. Después se comprueba con radiografía y TC, buscando fragmentos intraarticulares o fracturas asociadas, y se explora el nervio ciático, lesionado en un porcentaje apreciable de casos.',
  no:{0:'Demorar la reducción condena la cabeza femoral a la necrosis avascular: no es un problema electivo.',1:'La tracción continua no reduce la luxación y solo retrasa el tratamiento definitivo.',3:'La reducción abierta se reserva para cuando fracasa la cerrada o hay fragmentos interpuestos; primero se intenta cerrada bajo anestesia.'},
  trampa:'Que sea de madrugada invita a esperar al día siguiente. Es de las pocas urgencias traumatológicas verdaderas: el reloj cuenta desde la luxación.',
  dx:['Luxación posterior de cadera','Luxación anterior de cadera','Fractura de cuello femoral','Fractura acetabular'],
  obj:'Reconocer la luxación posterior de cadera y su carácter de urgencia por riesgo de necrosis avascular.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Campbell, Cirugía Ortopédica.'
},
'MIR-2018-M198': {
  esp:'Cirugía', tema:'Traumatología', sub:'Tendinitis calcificante del hombro',
  clave:'Dolor nocturno intenso con movilidad PASIVA COMPLETA: no es capsulitis. Tendinitis calcificante del supraespinoso.',
  exp:'La exploración es la que ordena el diagnóstico diferencial del hombro doloroso. El dato decisivo aquí es que el *rango de movilidad pasiva es completo*: eso descarta la *capsulitis adhesiva u hombro congelado*, cuya definición exige una limitación *pasiva* marcada, sobre todo de la rotación externa, por retracción de la cápsula. Tampoco encaja una *rotura del manguito*, que produciría debilidad manifiesta a la abducción y rotación externa, con maniobras específicas positivas, no una simple pérdida de los últimos grados. Lo que queda es una *tendinitis calcificante del supraespinoso*, y sus rasgos están en el enunciado: *dolor nocturno intenso*, que es su característica más típica y responde a la fase reabsortiva del depósito de hidroxiapatita, curso de meses con *empeoramiento reciente*, ausencia de traumatismo y limitación funcional leve por el propio dolor. Se confirma con una radiografía simple, donde se ve el depósito cálcico, y se trata con antiinflamatorios, fisioterapia y, si persiste, punción-lavado ecoguiada u ondas de choque.',
  no:{0:'La inestabilidad por laxitud aparece en pacientes jóvenes con episodios de subluxación y sensación de fallo, no con dolor nocturno progresivo.',1:'La rotura del manguito cursaría con DEBILIDAD para la abducción y la rotación externa, con maniobras específicas positivas.',2:'La capsulitis adhesiva exige limitación de la movilidad PASIVA, y aquí la pasiva es completa.'},
  trampa:'Se responde capsulitis por la pérdida de los últimos grados de movimiento. Esa pérdida es activa y por dolor; la capsulidad congela también el movimiento pasivo.',
  dx:['Tendinitis calcificante del supraespinoso','Capsulitis adhesiva','Rotura del manguito rotador','Artrosis glenohumeral'],
  obj:'Usar la movilidad pasiva para separar las causas de hombro doloroso.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Campbell, Cirugía Ortopédica.'
},
'MIR-2018-M201': {
  esp:'Cirugía', tema:'Traumatología', sub:'Osteocondritis disecante',
  clave:'A un chico de 16 años no se le pone una prótesis: en el cartílago joven se REPARA, no se sustituye.',
  exp:'La osteocondritis disecante es la separación progresiva de un fragmento osteocondral del hueso subcondral, casi siempre en el *cóndilo femoral interno*, y aparece típicamente en el adolescente deportista con dolor y episodios de *bloqueo* cuando el fragmento se desprende y se convierte en cuerpo libre. Todo el arsenal terapéutico está orientado a *restaurar la superficie articular*: las *microfracturas o perforaciones* estimulan la médula subcondral para que forme fibrocartílago reparativo; el *injerto osteocondral autólogo* o mosaicoplastia traslada cilindros de cartílago sano desde zonas de no carga; y el *trasplante de condrocitos autólogos* cultiva las propias células del paciente para repoblar el defecto. En el paciente esqueléticamente inmaduro y con lesión estable, incluso el tratamiento conservador con descarga puede bastar, porque la placa de crecimiento aún abierta favorece la curación. Lo que no tiene ningún sentido es una *prótesis unicompartimental*: es un tratamiento de la artrosis del anciano, tiene una duración limitada y en un chico de 16 años condenaría a múltiples recambios a lo largo de la vida.',
  no:{0:'Las microfracturas son un tratamiento reparativo válido en lesiones pequeñas.',1:'La mosaicoplastia es una opción establecida para defectos osteocondrales de tamaño medio.',3:'El trasplante de condrocitos autólogos está indicado en defectos mayores y en pacientes jóvenes.'},
  trampa:'Se elige la prótesis por ser la solución "definitiva". En el paciente joven la prótesis no es definitiva: es el principio de una cadena de recambios.',
  dx:['Osteocondritis disecante','Lesión meniscal','Condromalacia rotuliana','Cuerpo libre articular'],
  obj:'Elegir técnicas de reparación cartilaginosa en el paciente joven y descartar la artroplastia.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Campbell, Cirugía Ortopédica.'
},
'MIR-2018-M200': {
  esp:'Medicina Familiar', tema:'Aparato locomotor', sub:'Lumbalgia inespecífica',
  clave:'Lumbalgia mecánica sin banderas rojas: NINGUNA prueba de imagen. La radiografía no cambia el manejo y sí irradia.',
  exp:'Toda la pregunta se juega en la búsqueda de *banderas rojas*, y no hay ninguna. El dolor es *mecánico*, es decir, *mejora con el reposo nocturno*, lo que descarta el patrón inflamatorio de las espondiloartropatías y el de origen tumoral o infeccioso, que despiertan al paciente por la noche. No hay *déficit motor ni sensitivo*, el *Lasègue es negativo* y por tanto no hay radiculopatía. No hay fiebre, ni síndrome constitucional, ni antecedente de cáncer, ni traumatismo, ni corticoterapia, ni edad de riesgo —ni menor de 20 ni mayor de 50—, ni afectación de esfínteres. En ese escenario, que corresponde a más del 90% de las lumbalgias, el diagnóstico es *lumbalgia inespecífica* y la evidencia es rotunda: la imagen precoz *no mejora los resultados*, sí expone a radiación —una radiografía lumbar equivale a decenas de radiografías de tórax— y suele encontrar hallazgos degenerativos casuales que generan ansiedad, más pruebas y más intervenciones. El tratamiento es analgesia, *mantener la actividad* evitando el reposo en cama, y reevaluar si el dolor persiste más de cuatro a seis semanas o aparece alguna bandera roja.',
  no:{1:'La radiografía lumbar no cambia el manejo en la lumbalgia inespecífica y expone a una dosis de radiación nada despreciable.',2:'El HLA-B27 se plantearía ante dolor INFLAMATORIO, que empeora con el reposo y mejora con el movimiento, justo lo contrario de este caso.',3:'La resonancia se reserva para el déficit neurológico progresivo, la sospecha de cauda equina, la infección o el tumor.'},
  trampa:'Se pide una radiografía "para tranquilizar". Suele conseguir lo contrario: encuentra artrosis banal y convierte a un paciente sano en un enfermo de columna.',
  dx:['Lumbalgia inespecífica','Hernia discal','Espondiloartritis','Metástasis vertebral'],
  obj:'Aplicar el criterio de banderas rojas para no solicitar imagen en la lumbalgia inespecífica.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con guías NICE y del American College of Physicians sobre lumbalgia.'
},
'MIR-2018-M175': {
  esp:'Pediatría', tema:'Cardiología pediátrica', sub:'Comunicación interauricular',
  clave:'Desdoblamiento AMPLIO y FIJO del segundo ruido con soplo sistólico pulmonar: comunicación interauricular.',
  exp:'La auscultación de la comunicación interauricular tiene dos componentes y ninguno de ellos procede del propio defecto. El *soplo sistólico de eyección pulmonar* se debe a la *hiperaflujo*: el cortocircuito de izquierda a derecha hace pasar por la válvula pulmonar mucha más sangre de la normal, generando una estenosis relativa; el paso a través del defecto interauricular es silencioso, porque el gradiente entre aurículas es mínimo. Y el *desdoblamiento amplio y fijo del segundo ruido* es el signo característico: el cierre pulmonar se retrasa por el volumen extra del ventrículo derecho —de ahí lo *amplio*—, y no varía con la respiración —de ahí lo *fijo*— porque el defecto iguala continuamente las presiones auriculares y neutraliza el efecto respiratorio sobre el retorno venoso. Un cortocircuito hemodinámicamente significativo se corrige, hoy habitualmente por vía percutánea si el defecto es de tipo ostium secundum con bordes adecuados, antes de que aparezca hipertensión pulmonar.',
  no:{0:'No hay cianosis: el cortocircuito es de izquierda a derecha. La cianosis aparecería solo si se invirtiera, es decir, en el síndrome de Eisenmenger.',2:'La diastólica cercana a cero es propia de la insuficiencia aórtica o del ductus persistente, que roban flujo durante la diástole.',3:'La ausencia de pulsos en extremidades inferiores corresponde a la coartación de aorta.'},
  trampa:'Se busca el soplo del propio defecto. En la comunicación interauricular el defecto no suena: lo que se oye es el exceso de flujo por la pulmonar.',
  dx:['Comunicación interauricular ostium secundum','Comunicación interventricular','Estenosis pulmonar','Ductus arterioso persistente'],
  obj:'Reconocer el desdoblamiento fijo del segundo ruido como signo de comunicación interauricular.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Nelson, Tratado de Pediatría.'
}

});
