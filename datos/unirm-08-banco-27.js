/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE PARASITOLOGIA (1/2)
   Amplia Parasitologia Medica de 3 a 50 preguntas junto con
   banco-28.js. Esta parte cubre generalidades/clasificacion,
   protozoos intestinales, protozoos tisulares/hematicos, malaria,
   nematodos intestinales y nematodos tisulares (temas 1-6).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== PARASITOLOGIA MEDICA ===================== */
{
  id:'U8-P-Q04', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Hospedero y vector', sub:'Definiciones básicas',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el hospedero definitivo y el hospedero intermediario de un parásito?',
  ops:[
    'El hospedero definitivo es donde el parásito alcanza su forma adulta o reproducción sexual; el intermediario es donde pasa una fase larvaria o reproducción asexual',
    'Ambos términos significan exactamente lo mismo',
    'El hospedero intermediario siempre es un artrópodo',
    'El hospedero definitivo nunca puede ser el humano'
  ],
  ok:0,
  clave:'El hospedero definitivo alberga la forma adulta/reproducción sexual; el intermediario, una fase larvaria/reproducción asexual.',
  exp:'El hospedero definitivo es el organismo en el que el parásito alcanza su forma adulta o realiza su reproducción sexual (cuando la tiene). El hospedero intermediario es el organismo en el que el parásito pasa una fase larvaria o realiza reproducción asexual, necesario para completar el ciclo antes de llegar al hospedero definitivo. Son dos papeles biológicos distintos dentro del ciclo de vida de un parásito heteroxeno.',
  no:{
    1:'Son conceptos claramente distintos, referidos a etapas y funciones diferentes dentro del ciclo de vida del parásito.',
    2:'El hospedero intermediario no siempre es un artrópodo; puede ser cualquier organismo (como el cerdo para Taenia solium, o el caracol para los trematodos).',
    3:'El humano puede ser hospedero definitivo de muchos parásitos (como Taenia solium en la teniasis, o Entamoeba histolytica), no está excluido de ese papel.'
  },
  trampa:'Confundir hospedero definitivo con hospedero intermediario, o asumir que el hospedero intermediario siempre es un artrópodo.',
  obj:'Distinguir el hospedero definitivo del hospedero intermediario en el ciclo de vida de un parásito.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['hospedero definitivo','hospedero intermediario','ciclo de vida','parásito']
},
{
  id:'U8-P-Q05', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Vector biológico', sub:'Vs. vector mecánico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre un vector biológico y un vector mecánico?',
  ops:[
    'El vector biológico solo transporta al parásito sin que se desarrolle dentro de él; el mecánico permite su desarrollo',
    'El vector biológico permite que el parásito se desarrolle o se multiplique dentro de él; el mecánico solo lo transporta sin que se desarrolle',
    'Ambos términos son sinónimos exactos',
    'Un vector mecánico siempre es más peligroso que uno biológico'
  ],
  ok:1,
  clave:'El vector biológico permite el desarrollo del parásito dentro de él; el mecánico solo lo transporta sin desarrollo.',
  exp:'Un vector biológico es aquel dentro del cual el parásito se desarrolla o se multiplica como parte necesaria de su ciclo de vida (como el mosquito Anopheles con Plasmodium, donde ocurre parte del ciclo sexual del parásito). Un vector mecánico solo transporta físicamente al parásito de un lugar a otro, sin que este se desarrolle ni se multiplique dentro de él -simplemente lo lleva pegado o en su tracto digestivo de forma pasiva.',
  no:{
    0:'Está invertido: es el vector biológico el que permite el desarrollo del parásito dentro de él, y el mecánico el que solo lo transporta sin desarrollo.',
    2:'Son conceptos distintos, referidos a si el parásito se desarrolla o no dentro del vector durante el transporte.',
    3:'La peligrosidad no depende del tipo de vector en sí, sino del parásito o patógeno específico transmitido y de otros factores epidemiológicos.'
  },
  trampa:'Invertir cuál tipo de vector (biológico o mecánico) permite el desarrollo del parásito dentro de él.',
  obj:'Distinguir el vector biológico del vector mecánico según si el parásito se desarrolla dentro de él.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['vector biológico','vector mecánico','transmisión vectorial','desarrollo del parásito']
},
{
  id:'U8-P-Q06', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Zoonosis', sub:'Control del reservorio',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué tratar solo a los humanos infectados no es suficiente para controlar una parasitosis zoonótica?',
  ops:[
    'Porque el reservorio natural principal es un animal, y ese reservorio sigue manteniendo el ciclo de transmisión aunque se traten los casos humanos',
    'Porque las zoonosis nunca pueden tratarse en humanos',
    'Porque el tratamiento en humanos siempre elimina también al reservorio animal automáticamente',
    'Las zoonosis no requieren ninguna estrategia especial de control'
  ],
  ok:0,
  clave:'El reservorio animal sigue manteniendo el ciclo de transmisión, así que tratar solo a los humanos no controla la zoonosis de fondo.',
  exp:'En una zoonosis, el reservorio natural principal es un animal, y el humano es un hospedero accidental que se infecta al entrar en contacto con ese ciclo natural. Tratar solo a los humanos infectados no elimina el reservorio animal, que sigue manteniendo el ciclo de transmisión activo -las estrategias de control efectivas deben dirigirse también hacia ese reservorio (por ejemplo, desparasitación de perros para controlar el riesgo de cisticercosis o larva migrans).',
  no:{
    1:'Las zoonosis sí pueden y deben tratarse en humanos cuando se diagnostican; el punto es que ese tratamiento por sí solo no controla la transmisión de fondo.',
    2:'El tratamiento en humanos no tiene ningún efecto sobre el reservorio animal, que permanece infectado independientemente de lo que se haga con los casos humanos.',
    3:'Las zoonosis sí requieren una estrategia especial de control, dirigida también hacia el reservorio animal, no solo hacia los casos humanos.'
  },
  trampa:'No reconocer que el reservorio animal es independiente del tratamiento de los casos humanos y sigue sosteniendo la transmisión.',
  obj:'Explicar por qué el control de una zoonosis requiere intervenir sobre el reservorio animal.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['zoonosis','reservorio animal','control de transmisión','estrategia de control']
},
{
  id:'U8-P-Q07', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Ciclo directo vs. indirecto', sub:'Implicación para la prevención',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué implica, para las estrategias de prevención, que un parásito tenga un ciclo de vida indirecto (heteroxeno) con vector?',
  ops:[
    'Que el control del vector se vuelve una estrategia adicional de prevención relevante, más allá del saneamiento básico',
    'Que la prevención es exactamente igual a la de un parásito de ciclo directo',
    'Que ya no es necesario ningún saneamiento ambiental',
    'Que el parásito no puede prevenirse de ninguna forma'
  ],
  ok:0,
  clave:'Con ciclo indirecto y vector, el control del vector se suma como estrategia de prevención adicional relevante.',
  exp:'Un parásito de ciclo indirecto (heteroxeno) con vector necesita a ese vector para completar su ciclo de transmisión, así que el control del vector (por ejemplo, control de mosquitos para malaria o dengue) se convierte en una estrategia de prevención adicional relevante, más allá del saneamiento básico que sí sería suficiente para un parásito de ciclo directo transmitido solo por contaminación fecal-oral.',
  no:{
    1:'La prevención no es igual: en un ciclo directo, basta con saneamiento e higiene; en uno indirecto con vector, se suma el control vectorial como estrategia adicional.',
    2:'El saneamiento ambiental sigue siendo relevante incluso con un ciclo indirecto; el control del vector se AÑADE, no lo reemplaza.',
    3:'Los parásitos de ciclo indirecto sí pueden prevenirse, precisamente combinando saneamiento con control del vector correspondiente.'
  },
  trampa:'No reconocer que el ciclo indirecto con vector añade una estrategia de prevención adicional (control vectorial), sin eliminar la relevancia del saneamiento básico.',
  obj:'Explicar la implicación del ciclo indirecto con vector para las estrategias de prevención.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['ciclo indirecto','heteroxeno','control vectorial','prevención']
},
{
  id:'U8-P-Q08', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Entamoeba histolytica', sub:'Absceso hepático amebiano',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con antecedente de diarrea semanas atrás desarrolla dolor en hipocondrio derecho y fiebre. Una tomografía muestra una colección hepática con contenido descrito como "en pasta de anchoas".',
  enunciado:'¿Por qué vía llegó el parásito al hígado para producir este absceso?',
  ops:[
    'Por vía biliar ascendente, desde el intestino',
    'Por vía portal, desde el colon infectado',
    'Por vía linfática directa desde la piel',
    'El absceso hepático amebiano no tiene relación con ninguna infección intestinal previa'
  ],
  ok:1,
  clave:'El absceso hepático amebiano se produce por diseminación vía PORTAL desde el colon infectado.',
  exp:'Entamoeba histolytica puede diseminarse desde el colon infectado hacia el hígado por vía PORTAL, produciendo el absceso hepático amebiano -una colección de material necrótico descrito clásicamente como en "pasta de anchoas". El antecedente de diarrea (disentería amebiana) semanas antes, seguido de dolor en hipocondrio derecho y fiebre, es un patrón clínico clásico de esta complicación extraintestinal de la amebiasis.',
  no:{
    0:'La vía biliar ascendente no es el mecanismo de diseminación de Entamoeba histolytica hacia el hígado; el parásito llega por vía portal desde el colon.',
    2:'No hay una vía linfática directa desde la piel involucrada en este mecanismo; la diseminación es hematógena, vía portal, desde el intestino infectado.',
    3:'El absceso hepático amebiano SÍ tiene una relación directa con la infección intestinal previa por Entamoeba histolytica, de la cual deriva por diseminación portal.'
  },
  trampa:'Confundir la vía de diseminación hepática de la amebiasis (portal) con otras vías posibles de infección hepática, como la biliar.',
  obj:'Explicar la vía de diseminación del absceso hepático amebiano desde el colon infectado.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['absceso hepático amebiano','Entamoeba histolytica','vía portal','disentería amebiana']
},
{
  id:'U8-P-Q09', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Giardia lamblia', sub:'Mecanismo de malabsorción',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la infección por Giardia lamblia produce diarrea con malabsorción, pero típicamente SIN sangre en las heces, a diferencia de la amebiasis?',
  ops:[
    'Porque Giardia invade profundamente la mucosa intestinal, igual que Entamoeba histolytica',
    'Porque Giardia coloniza el intestino delgado sin invadir la mucosa, cubriendo mecánicamente la superficie de absorción, sin el daño tisular invasivo que sí produce Entamoeba histolytica',
    'Porque Giardia nunca causa ningún síntoma digestivo',
    'Porque Giardia solo afecta al colon, no al intestino delgado'
  ],
  ok:1,
  clave:'Giardia coloniza sin invadir la mucosa, cubriendo la superficie de absorción; por eso no hay sangrado como en la amebiasis invasiva.',
  exp:'Giardia lamblia coloniza el intestino delgado proximal SIN invadir la mucosa intestinal (a diferencia de Entamoeba histolytica), cubriendo mecánicamente la superficie de absorción y alterando la función de las vellosidades, lo que produce malabsorción sin el daño tisular invasivo (ulceraciones, sangrado) que sí caracteriza a la disentería amebiana. Esta diferencia en el mecanismo patogénico (invasión contra colonización superficial) explica la ausencia de sangre en las heces en la giardiasis.',
  no:{
    0:'Es precisamente lo contrario: Giardia NO invade la mucosa, a diferencia de Entamoeba histolytica, que sí lo hace y por eso produce sangrado.',
    2:'Giardia sí produce síntomas digestivos característicos: diarrea crónica con malabsorción, distensión abdominal y pérdida de peso.',
    3:'Giardia coloniza el intestino delgado (duodeno y yeyuno), no el colon, a diferencia de Entamoeba histolytica, que afecta principalmente el colon.'
  },
  trampa:'No distinguir el mecanismo patogénico de colonización superficial de Giardia (sin invasión) del mecanismo invasivo de Entamoeba histolytica, que es lo que explica la diferencia clínica de sangrado.',
  obj:'Explicar el mecanismo de malabsorción sin sangrado de la giardiasis, en contraste con la amebiasis invasiva.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Giardia lamblia','malabsorción','colonización sin invasión','diarrea sin sangre']
},
{
  id:'U8-P-Q10', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Toxoplasmosis congénita', sub:'Condición para la transmisión fetal',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer embarazada tiene serología que muestra IgG positiva para Toxoplasma, adquirida documentadamente varios años antes del embarazo actual, sin cambios en los títulos durante el embarazo.',
  enunciado:'¿Cuál es el riesgo de toxoplasmosis congénita en este embarazo específico?',
  ops:[
    'Riesgo alto, porque cualquier IgG positiva implica riesgo de transmisión fetal',
    'Riesgo mínimo o nulo, porque la toxoplasmosis congénita requiere primoinfección MATERNA durante el embarazo, y esta mujer ya tenía inmunidad previa antes de embarazarse',
    'Riesgo del 100%, porque toda mujer con Toxoplasma transmite la infección a todos sus embarazos',
    'El momento de adquisición de la infección materna no tiene ninguna relevancia para el riesgo fetal'
  ],
  ok:1,
  clave:'La toxoplasmosis congénita requiere primoinfección materna DURANTE el embarazo; una infección previa ya resuelta no transmite el riesgo.',
  exp:'La toxoplasmosis congénita solo ocurre si la infección materna es una PRIMOINFECCIÓN durante el embarazo (el taquizoíto, en la fase aguda de la infección, cruza la placenta). Una mujer ya inmune antes del embarazo (como en este caso, con infección documentada años antes) no transmite la infección al feto por esa vía, porque ya no tiene parasitemia activa relevante ni riesgo de nueva diseminación transplacentaria -el riesgo en este embarazo específico es mínimo o nulo.',
  no:{
    0:'No cualquier IgG positiva implica riesgo; lo relevante es si la infección es reciente (primoinfección durante el embarazo actual) o antigua (ya resuelta antes del embarazo).',
    2:'No toda mujer con Toxoplasma transmite la infección a todos sus embarazos; solo hay riesgo real cuando la primoinfección ocurre durante el embarazo en curso.',
    3:'El momento de adquisición de la infección materna es precisamente el factor más relevante para determinar el riesgo de transmisión fetal en este contexto.'
  },
  trampa:'Interpretar cualquier serología IgG positiva para Toxoplasma como riesgo automático de transmisión fetal, sin considerar si la infección es reciente o antigua respecto al embarazo actual.',
  obj:'Explicar que el riesgo de toxoplasmosis congénita depende de que la primoinfección materna ocurra durante el embarazo, no de la sola presencia de anticuerpos.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['toxoplasmosis congénita','primoinfección materna','taquizoíto','serología IgG']
},
{
  id:'U8-P-Q11', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Enfermedad de Chagas', sub:'Fase crónica',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son las dos principales manifestaciones de la fase crónica de la enfermedad de Chagas?',
  ops:[
    'Signo de Romaña y fiebre aguda', 'Cardiomiopatía chagásica y megasíndromes digestivos (megaesófago, megacolon)', 'Úlcera cutánea y linfadenopatía', 'Encefalitis y hepatoesplenomegalia'],
  ok:1,
  clave:'La fase crónica de Chagas se caracteriza por cardiomiopatía chagásica y megasíndromes digestivos.',
  exp:'La fase crónica de la enfermedad de Chagas, que puede desarrollarse años o décadas después de la infección aguda, es la de mayor relevancia clínica: cardiomiopatía chagásica (con arritmias, insuficiencia cardíaca, y riesgo de muerte súbita) y megasíndromes digestivos (megaesófago, megacolon), por destrucción progresiva de los plexos nerviosos autónomos de esos órganos. El signo de Romaña es un hallazgo de la fase AGUDA, no de la crónica.',
  no:{
    0:'El signo de Romaña y la fiebre aguda son manifestaciones de la fase AGUDA de Chagas, no de la fase crónica que pregunta el enunciado.',
    2:'La úlcera cutánea y la linfadenopatía no son las manifestaciones características de la fase crónica de Chagas; se asocian más bien a otras parasitosis, como la leishmaniasis cutánea.',
    3:'La encefalitis y la hepatoesplenomegalia no son las manifestaciones típicas de la fase crónica de Chagas; se asocian más bien a otras infecciones, como la toxoplasmosis reactivada o la leishmaniasis visceral.'
  },
  trampa:'Confundir las manifestaciones de la fase aguda (signo de Romaña) con las de la fase crónica de la enfermedad de Chagas.',
  obj:'Identificar las manifestaciones características de la fase crónica de la enfermedad de Chagas.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['enfermedad de Chagas','fase crónica','cardiomiopatía chagásica','megacolon']
},
{
  id:'U8-P-Q12', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Leishmaniasis', sub:'Formas clínicas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente de una zona endémica presenta fiebre prolongada, hepatoesplenomegalia marcada y pancitopenia en el hemograma.',
  enunciado:'¿Qué forma clínica de leishmaniasis es más consistente con este cuadro?',
  ops:['Leishmaniasis cutánea', 'Leishmaniasis mucocutánea', 'Leishmaniasis visceral (kala-azar)', 'Ninguna forma de leishmaniasis produce pancitopenia'],
  ok:2,
  clave:'Fiebre prolongada, hepatoesplenomegalia y pancitopenia son característicos de la leishmaniasis visceral (kala-azar).',
  exp:'La leishmaniasis visceral (kala-azar), la forma más grave de leishmaniasis, afecta órganos del sistema reticuloendotelial (hígado, bazo, médula ósea), con fiebre prolongada, hepatoesplenomegalia marcada y pancitopenia (por infiltración de la médula ósea), y es potencialmente mortal sin tratamiento. Es distinta de la forma cutánea (úlcera localizada indolora) y de la mucocutánea (destrucción progresiva de estructuras nasofaríngeas).',
  no:{
    0:'La leishmaniasis cutánea produce una úlcera localizada en la piel, sin el cuadro sistémico de fiebre, hepatoesplenomegalia y pancitopenia descrito en el caso.',
    1:'La leishmaniasis mucocutánea afecta estructuras de la nariz y nasofaringe, sin el cuadro hematológico y sistémico descrito en este caso.',
    3:'La leishmaniasis visceral sí produce pancitopenia, por infiltración de la médula ósea, siendo uno de sus hallazgos característicos.'
  },
  trampa:'Confundir las tres formas clínicas de leishmaniasis entre sí, sin reconocer el patrón sistémico específico (fiebre + hepatoesplenomegalia + pancitopenia) de la forma visceral.',
  obj:'Identificar la leishmaniasis visceral por su cuadro clínico característico.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['leishmaniasis visceral','kala-azar','pancitopenia','hepatoesplenomegalia']
},
{
  id:'U8-P-Q13', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Malaria', sub:'Hipnozoítos y recaídas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente tratado exitosamente por malaria por Plasmodium vivax presenta un nuevo episodio febril seis meses después, sin haber viajado de nuevo a zona endémica ni haber sido picado por un mosquito recientemente.',
  enunciado:'¿Qué mecanismo explica esta recaída, y qué especies de Plasmodium lo presentan?',
  ops:[
    'Reactivación de hipnozoítos hepáticos latentes, exclusiva de Plasmodium vivax y Plasmodium ovale',
    'Es imposible que ocurra una recaída sin una nueva picadura de mosquito',
    'Todas las especies de Plasmodium tienen hipnozoítos hepáticos',
    'La recaída siempre indica que el tratamiento inicial fue completamente ineficaz'
  ],
  ok:0,
  clave:'Solo P. vivax y P. ovale tienen hipnozoítos hepáticos latentes, capaces de reactivarse meses/años después sin nueva picadura.',
  exp:'Plasmodium vivax y Plasmodium ovale tienen una forma latente en el hígado llamada hipnozoíto, que puede reactivarse meses o incluso años después de la infección inicial, causando recaídas clínicas sin una nueva picadura -una característica exclusiva de estas dos especies. Esto exige un tratamiento adicional específico (dirigido a eliminar los hipnozoítos) para prevenir estas recaídas, distinto del tratamiento de la fase eritrocítica aguda inicial.',
  no:{
    1:'Sí es posible una recaída sin nueva picadura, precisamente por la reactivación de hipnozoítos hepáticos latentes en P. vivax y P. ovale.',
    2:'No todas las especies tienen hipnozoítos; es una característica exclusiva de P. vivax y P. ovale, no compartida por P. falciparum ni P. malariae.',
    3:'La recaída no indica necesariamente que el tratamiento inicial fuera ineficaz contra la fase eritrocítica; puede deberse a que ese tratamiento no incluyó el fármaco adicional específico para eliminar los hipnozoítos hepáticos.'
  },
  trampa:'No reconocer el mecanismo específico de los hipnozoítos como causa de recaída sin nueva exposición, o asumir que todas las especies de Plasmodium comparten esta característica.',
  obj:'Explicar el mecanismo de recaída por hipnozoítos hepáticos en Plasmodium vivax y Plasmodium ovale.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['hipnozoítos','Plasmodium vivax','recaída malárica','Plasmodium ovale']
},
{
  id:'U8-P-Q14', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Malaria', sub:'Plasmodium falciparum',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mecanismo específico explica que Plasmodium falciparum produzca complicaciones graves como la malaria cerebral?',
  ops:[
    'Solo infecta eritrocitos muy jóvenes, limitando la parasitemia',
    'Produce citoadherencia: alteraciones en la superficie del eritrocito infectado que causan su adhesión al endotelio de capilares de órganos profundos, obstruyendo el flujo microvascular',
    'No tiene ningún mecanismo distinto de las demás especies de Plasmodium',
    'Solo afecta la piel, sin comprometer órganos internos'
  ],
  ok:1,
  clave:'La citoadherencia al endotelio microvascular, obstruyendo capilares de órganos profundos, es el mecanismo de las complicaciones graves de P. falciparum.',
  exp:'Plasmodium falciparum produce alteraciones en la superficie del eritrocito infectado que causan que estos se adhieran al endotelio de capilares de órganos profundos (citoadherencia), obstruyendo el flujo microvascular. Este mecanismo es la base de las complicaciones más graves de la malaria por falciparum: malaria cerebral (por obstrucción de capilares cerebrales), insuficiencia renal aguda, y síndrome de dificultad respiratoria, todas potencialmente mortales sin tratamiento urgente.',
  no:{
    0:'Es al revés: P. falciparum infecta eritrocitos de CUALQUIER edad (no solo jóvenes), lo que le permite alcanzar niveles de parasitemia mucho más altos que otras especies.',
    2:'P. falciparum sí tiene un mecanismo patogénico distintivo (la citoadherencia), que no comparten de la misma forma las demás especies de Plasmodium, y que explica su mayor gravedad.',
    3:'P. falciparum puede comprometer múltiples órganos internos profundos (cerebro, riñón, pulmón), no se limita a la piel.'
  },
  trampa:'No reconocer el mecanismo específico de citoadherencia al endotelio microvascular como la causa de las complicaciones graves de P. falciparum.',
  obj:'Explicar el mecanismo de citoadherencia responsable de las complicaciones graves de la malaria por Plasmodium falciparum.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Plasmodium falciparum','citoadherencia','malaria cerebral','complicaciones graves']
},
{
  id:'U8-P-Q15', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Ascaris lumbricoides', sub:'Síndrome de Loeffler',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta tos, disnea y sibilancias, con infiltrados pulmonares transitorios y eosinofilia marcada, semanas después de haber ingerido alimentos posiblemente contaminados con tierra.',
  enunciado:'¿Qué mecanismo del ciclo de vida de Ascaris lumbricoides explica este cuadro pulmonar?',
  ops:[
    'Ascaris infecta directamente el pulmón desde la ingestión, sin pasar por el intestino',
    'Las larvas de Ascaris, tras eclosionar en el intestino, atraviesan la pared intestinal y migran por vía sanguínea hacia los pulmones, antes de ascender y ser degluttidas de nuevo hacia el intestino',
    'Ascaris nunca causa síntomas respiratorios',
    'El cuadro pulmonar no tiene relación con ninguna infección parasitaria'
  ],
  ok:1,
  clave:'Las larvas de Ascaris migran por vía sanguínea hacia los pulmones como parte de su ciclo, antes de volver al intestino tras ser deglutidas.',
  exp:'Ascaris lumbricoides tiene un ciclo migratorio pulmonar peculiar: las larvas eclosionan en el intestino, atraviesan la pared intestinal, y migran por vía sanguínea hacia los pulmones, donde ascienden por el árbol bronquial hasta la faringe y son deglutidas de nuevo, retornando al intestino delgado para madurar. Durante el paso pulmonar de las larvas, puede producirse el síndrome de Loeffler: tos, disnea y sibilancias, con infiltrados pulmonares transitorios y eosinofilia marcada, exactamente el cuadro descrito en el caso.',
  no:{
    0:'Ascaris no infecta directamente el pulmón desde la ingestión; primero pasa por el intestino, donde eclosionan las larvas, antes de migrar hacia el pulmón.',
    2:'Ascaris sí puede causar síntomas respiratorios característicos, precisamente durante la fase pulmonar de su ciclo migratorio (síndrome de Loeffler).',
    3:'El cuadro pulmonar descrito tiene una relación directa con el ciclo migratorio de Ascaris lumbricoides, un mecanismo bien caracterizado.'
  },
  trampa:'No reconocer el ciclo migratorio pulmonar de Ascaris como la explicación de un cuadro respiratorio aparentemente desconectado de una exposición digestiva.',
  obj:'Explicar el mecanismo del síndrome de Loeffler en la infección por Ascaris lumbricoides.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Ascaris lumbricoides','síndrome de Loeffler','ciclo migratorio pulmonar','eosinofilia']
},
{
  id:'U8-P-Q16', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Uncinarias', sub:'Anemia ferropénica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente de zona rural, que camina habitualmente descalzo, presenta anemia ferropénica crónica sin otra causa evidente de pérdida sanguínea.',
  enunciado:'¿Qué mecanismo relaciona la infección por uncinarias con esta anemia?',
  ops:[
    'Las uncinarias no tienen ninguna relación con la anemia',
    'Los gusanos adultos se fijan a la mucosa intestinal y se alimentan de sangre, produciendo una pérdida crónica que puede causar anemia ferropénica significativa',
    'Las uncinarias destruyen directamente la médula ósea',
    'La anemia se debe exclusivamente a la dermatitis que producen al penetrar la piel'
  ],
  ok:1,
  clave:'Los gusanos adultos de uncinarias se alimentan de sangre intestinal, causando pérdida crónica y anemia ferropénica.',
  exp:'Las uncinarias, tras penetrar activamente la piel y completar su ciclo migratorio, llegan al intestino delgado, donde los gusanos adultos se fijan a la mucosa y se alimentan de sangre, produciendo una pérdida crónica que puede causar anemia ferropénica significativa, especialmente relevante en poblaciones con alta carga parasitaria y dieta pobre en hierro -el mecanismo clínico más relevante de esta parasitosis, más que el cuadro digestivo agudo.',
  no:{
    0:'Las uncinarias sí tienen una relación directa y bien establecida con la anemia ferropénica, por su mecanismo de alimentación sanguínea intestinal.',
    2:'Las uncinarias no destruyen la médula ósea directamente; producen anemia por pérdida crónica de sangre a nivel intestinal, no por un mecanismo central en la médula.',
    3:'La dermatitis por penetración cutánea es un hallazgo local transitorio, no la causa de la anemia crónica, que se debe a la alimentación sanguínea de los gusanos adultos en el intestino.'
  },
  trampa:'No conectar el mecanismo de alimentación sanguínea de los gusanos adultos con la anemia ferropénica crónica, buscando explicaciones alternativas menos precisas.',
  obj:'Explicar el mecanismo de anemia ferropénica por infección crónica con uncinarias.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['uncinarias','anemia ferropénica','pérdida sanguínea crónica','penetración cutánea']
},
{
  id:'U8-P-Q17', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Enterobius vermicularis', sub:'Técnica de Graham',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño en edad escolar presenta prurito anal intenso, característicamente peor durante la noche, y se sospecha oxiuriasis.',
  enunciado:'¿Qué técnica diagnóstica es la más apropiada, y en qué momento del día debe realizarse?',
  ops:[
    'Coprológico convencional, en cualquier momento del día',
    'Técnica de Graham (cinta adhesiva perianal), realizada a primera hora de la mañana, ANTES del baño',
    'Serología, en ayunas',
    'Gota gruesa, por la noche'
  ],
  ok:1,
  clave:'La técnica de Graham, aplicada a primera hora de la mañana antes del baño, es la apropiada para diagnosticar oxiuriasis.',
  exp:'El diagnóstico de Enterobius vermicularis se realiza con la técnica de Graham (cinta adhesiva transparente aplicada sobre la región perianal), a primera hora de la mañana, ANTES del baño, porque los huevos se depositan durante la noche (cuando la hembra migra hacia la región perianal) y se perderían con el aseo matutino. El coprológico convencional tiene poco rendimiento diagnóstico para esta parasitosis, porque los huevos rara vez se encuentran en las heces mismas.',
  no:{
    0:'El coprológico convencional tiene poco rendimiento para esta parasitosis específica; la técnica de Graham es la apropiada, no un coprológico en cualquier momento.',
    2:'La serología no es la técnica diagnóstica estándar para Enterobius; el diagnóstico se basa en la visualización directa de los huevos mediante la técnica de Graham.',
    3:'La gota gruesa es la técnica diagnóstica para malaria, no para oxiuriasis, y no tiene relación con este caso.'
  },
  trampa:'Usar el coprológico convencional (de bajo rendimiento para esta parasitosis) o no especificar el momento correcto del día para aplicar la técnica de Graham.',
  obj:'Elegir la técnica de Graham y el momento correcto del día para diagnosticar la oxiuriasis.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Enterobius vermicularis','técnica de Graham','prurito nocturno','diagnóstico parasitológico']
},
{
  id:'U8-P-Q18', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Strongyloides stercoralis', sub:'Ciclo de autoinfección',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica distingue a Strongyloides stercoralis de la mayoría de los demás nematodos intestinales, permitiéndole persistir en un hospedero durante décadas sin nueva exposición?',
  ops:[
    'La capacidad de completar un ciclo de autoinfección, reinvadiendo al mismo hospedero internamente sin necesidad de salir al ambiente',
    'Strongyloides nunca puede persistir más de unos días en el cuerpo humano',
    'Todos los nematodos intestinales tienen esta misma capacidad de autoinfección',
    'Strongyloides solo se transmite por vía oral, nunca por penetración cutánea'
  ],
  ok:0,
  clave:'La capacidad de autoinfección (reinvadir internamente al mismo hospedero) permite que Strongyloides persista décadas sin nueva exposición.',
  exp:'Strongyloides stercoralis tiene la capacidad, excepcional entre los nematodos intestinales de relevancia médica, de completar un ciclo de AUTOINFECCIÓN: algunas de sus larvas pueden transformarse dentro del propio intestino en la forma infectante y reinvadir al mismo hospedero, sin necesidad de salir al ambiente externo. Esto explica por qué la infección puede persistir durante décadas en una persona, sin nueva exposición, algo excepcional entre los nematodos intestinales, que en general requieren reinfección externa repetida.',
  no:{
    1:'Es precisamente lo contrario: Strongyloides puede persistir décadas, gracias a su capacidad de autoinfección, no solo unos días.',
    2:'La autoinfección NO es compartida por la mayoría de los nematodos intestinales; es una característica excepcional de Strongyloides, que la distingue de los demás.',
    3:'Strongyloides sí penetra activamente la piel, como las uncinarias, no se transmite exclusivamente por vía oral.'
  },
  trampa:'No reconocer la autoinfección como la característica excepcional y específica de Strongyloides que explica su persistencia prolongada.',
  obj:'Explicar la capacidad de autoinfección de Strongyloides stercoralis y su relevancia para la persistencia de la infección.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Strongyloides stercoralis','autoinfección','persistencia de la infección','ciclo de vida']
},
{
  id:'U8-P-Q19', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Hiperinfección por Strongyloides', sub:'Riesgo con corticoides',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente proveniente de una zona endémica para Strongyloides, asintomático, va a iniciar tratamiento con corticoides sistémicos prolongados por una enfermedad autoinmune.',
  enunciado:'¿Qué conducta es la más apropiada antes de iniciar el tratamiento inmunosupresor, dado el antecedente epidemiológico?',
  ops:[
    'Ninguna medida especial, ya que el paciente está asintomático',
    'Descartar (y tratar si es positiva) la infección por Strongyloides antes de iniciar los corticoides, por el riesgo de síndrome de hiperinfección diseminada, potencialmente mortal',
    'Iniciar los corticoides sin demora, ya que Strongyloides nunca se relaciona con la inmunosupresión',
    'Solicitar únicamente una gota gruesa antes de iniciar el tratamiento'
  ],
  ok:1,
  clave:'Antes de corticoides sistémicos prolongados, se recomienda descartar y tratar Strongyloides en pacientes con posible exposición, por el riesgo de hiperinfección diseminada.',
  exp:'En un paciente inmunosuprimido -particularmente con uso de corticoides sistémicos, que alteran específicamente la respuesta inmune que controla a Strongyloides- el ciclo de autoinfección puede acelerarse de forma descontrolada, produciendo el síndrome de hiperinfección diseminada, con mortalidad muy elevada. Por eso se recomienda descartar (y tratar si es positiva) la infección por Strongyloides ANTES de iniciar corticoides sistémicos prolongados en pacientes con antecedente de exposición en zona endémica, incluso si están asintomáticos.',
  no:{
    0:'Precisamente por estar asintomático pero tener antecedente epidemiológico de riesgo, se recomienda la evaluación activa antes de iniciar la inmunosupresión, no omitir cualquier medida.',
    2:'Strongyloides tiene una relación bien documentada y grave con la inmunosupresión, específicamente con los corticoides sistémicos, que pueden desencadenar hiperinfección diseminada.',
    3:'La gota gruesa es la técnica diagnóstica para malaria, no para Strongyloides; el estudio apropiado sería un coprológico con técnicas específicas o serología, según el caso.'
  },
  trampa:'Asumir que un paciente asintomático no requiere evaluación antes de la inmunosupresión, sin considerar el riesgo específico de reactivación de Strongyloides.',
  obj:'Explicar la recomendación de descartar Strongyloides antes de iniciar corticoides sistémicos en pacientes con posible exposición previa.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['hiperinfección por Strongyloides','corticoides sistémicos','inmunosupresión','síndrome de hiperinfección diseminada']
},
{
  id:'U8-P-Q20', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Larva migrans', sub:'Cutánea vs. visceral',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño presenta un trayecto serpiginoso, eritematoso y muy pruriginoso en la piel del pie, que avanza lentamente día a día, tras haber caminado descalzo en una playa frecuentada por perros.',
  enunciado:'¿Qué síndrome parasitario corresponde a este cuadro?',
  ops:['Larva migrans visceral', 'Larva migrans cutánea', 'Neurocisticercosis', 'Esquistosomiasis'],
  ok:1,
  clave:'Un trayecto serpiginoso pruriginoso en la piel, tras contacto con suelo/arena contaminada por heces de animales, corresponde a larva migrans cutánea.',
  exp:'El síndrome de larva migrans cutánea ocurre cuando larvas de nematodos que normalmente parasitan a otros animales (típicamente Ancylostoma de perros o gatos) penetran accidentalmente la piel humana, pero como el humano no es su hospedero natural, la larva no puede completar su ciclo y migra sin rumbo por la piel, produciendo un trayecto serpiginoso, eritematoso y muy pruriginoso que avanza lentamente día a día -exactamente el cuadro descrito, consistente con la exposición a arena de playa contaminada por heces de perros.',
  no:{
    0:'La larva migrans visceral afecta órganos internos (hígado, pulmón, ojo), no produce un trayecto cutáneo serpiginoso como el descrito en este caso.',
    2:'La neurocisticercosis afecta el sistema nervioso central, sin relación con una lesión cutánea serpiginosa en el pie.',
    3:'La esquistosomiasis se adquiere por contacto con agua dulce contaminada, no arena, y no produce un trayecto serpiginoso cutáneo migratorio como el descrito.'
  },
  trampa:'Confundir larva migrans cutánea con larva migrans visceral, o con otras parasitosis de mecanismo distinto.',
  obj:'Reconocer el cuadro clínico característico de la larva migrans cutánea.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['larva migrans cutánea','Ancylostoma','trayecto serpiginoso','exposición a arena contaminada']
},
{
  id:'U8-P-Q21', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Larva migrans visceral', sub:'Compromiso ocular',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño presenta una lesión ocular que, en un primer momento, se confunde con un retinoblastoma, hasta que se identifica el antecedente de contacto frecuente con cachorros de perro y se documenta eosinofilia marcada en sangre.',
  enunciado:'¿Qué parásito debe sospecharse como causa de este cuadro ocular?',
  ops:['Toxoplasma gondii', 'Toxocara canis (larva migrans visceral)', 'Entamoeba histolytica', 'Enterobius vermicularis'],
  ok:1,
  clave:'Toxocara canis, causante de larva migrans visceral, puede afectar el ojo y simular un retinoblastoma en un niño.',
  exp:'El síndrome de larva migrans visceral, causado típicamente por Toxocara canis (un nematodo de perros), ocurre cuando larvas migran por órganos internos, con relevancia particular en el ojo, donde puede simular un retinoblastoma en un niño -un dato clásico y clínicamente importante, porque distinguir ambas entidades evita procedimientos oftalmológicos innecesariamente agresivos. La eosinofilia marcada y el antecedente de contacto con perros (el hospedero definitivo de Toxocara) apoyan esta sospecha diagnóstica.',
  no:{
    0:'Toxoplasma sí puede afectar el ojo (coriorretinitis), pero el cuadro que clásicamente simula un retinoblastoma en un niño, asociado a contacto con cachorros y eosinofilia, es característico de Toxocara.',
    2:'Entamoeba histolytica no tiene relevancia oftalmológica ni se asocia a este tipo de cuadro ocular.',
    3:'Enterobius vermicularis no tiene relevancia oftalmológica ni se asocia a larva migrans visceral.'
  },
  trampa:'No reconocer la asociación específica de Toxocara canis con el compromiso ocular que puede simular retinoblastoma, un dato clásico de este tema.',
  obj:'Reconocer la larva migrans visceral por Toxocara canis como causa de un cuadro ocular que simula retinoblastoma.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['larva migrans visceral','Toxocara canis','retinoblastoma','eosinofilia']
},
{
  id:'U8-P-Q22', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Nematodos', sub:'Vía de infección: ingestión vs. penetración',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de los siguientes nematodos se adquiere por INGESTIÓN de huevos, a diferencia de las uncinarias y Strongyloides, que penetran activamente la piel?',
  ops:['Ascaris lumbricoides', 'Ancylostoma duodenale', 'Necator americanus', 'Strongyloides stercoralis'],
  ok:0,
  clave:'Ascaris lumbricoides se adquiere por ingestión de huevos, a diferencia de las uncinarias y Strongyloides, que penetran la piel.',
  exp:'Ascaris lumbricoides se adquiere por ingestión de huevos embrionados presentes en tierra o alimentos contaminados, a diferencia de las uncinarias (Ancylostoma duodenale y Necator americanus) y de Strongyloides stercoralis, cuyas larvas penetran activamente la piel intacta sin necesidad de ser ingeridas. Esta diferencia en la vía de entrada es un dato clave para distinguir el mecanismo de infección de cada nematodo.',
  no:{
    1:'Ancylostoma duodenale (una de las dos uncinarias) penetra activamente la piel, no se adquiere por ingestión de huevos.',
    2:'Necator americanus (la otra uncinaria) también penetra activamente la piel, no se adquiere por ingestión.',
    3:'Strongyloides stercoralis, como las uncinarias, penetra activamente la piel, no se adquiere por ingestión de huevos.'
  },
  trampa:'Confundir la vía de infección de Ascaris (ingestión) con la de las uncinarias y Strongyloides (penetración cutánea activa).',
  obj:'Identificar a Ascaris lumbricoides como el nematodo que se adquiere por ingestión, a diferencia de las uncinarias y Strongyloides.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Ascaris lumbricoides','vía de infección','ingestión de huevos','penetración cutánea']
},
{
  id:'U8-P-Q23', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Protozoos intestinales', sub:'Forma infectante',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la forma INFECTANTE de los protozoos intestinales como Entamoeba histolytica y Giardia lamblia?',
  ops:['El trofozoíto', 'El quiste', 'El esquizonte', 'La cercaria'],
  ok:1,
  clave:'El quiste es la forma de resistencia e infectante de los protozoos intestinales, capaz de sobrevivir fuera del cuerpo.',
  exp:'El quiste es la forma de resistencia de estos protozoos: sobrevive en el ambiente externo y resiste el paso por el ácido gástrico al ser ingerida, siendo la forma INFECTANTE que causa el contagio. El trofozoíto es la forma activa que causa la enfermedad dentro del hospedero, pero muere rápidamente fuera del cuerpo y no es la forma que transmite la infección de forma habitual.',
  no:{
    0:'El trofozoíto es la forma ACTIVA que causa la enfermedad dentro del hospedero, pero no es la forma infectante que transmite la enfermedad de persona a persona en condiciones habituales.',
    2:'El esquizonte es una forma del ciclo de Plasmodium (malaria), no de los protozoos intestinales como Entamoeba o Giardia.',
    3:'La cercaria es la forma infectante de los trematodos (como Schistosoma), no de los protozoos intestinales.'
  },
  trampa:'Confundir el quiste (forma infectante y de resistencia) con el trofozoíto (forma activa), o con formas de otros grupos de parásitos.',
  obj:'Identificar el quiste como la forma infectante de los protozoos intestinales.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['quiste','forma infectante','protozoos intestinales','trofozoíto']
},
{
  id:'U8-P-Q24', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Gota gruesa', sub:'Sensibilidad para malaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se prefiere la gota gruesa sobre el frotis fino para DETECTAR la presencia de Plasmodium, aunque ambas técnicas se usen de forma complementaria?',
  ops:[
    'La gota gruesa concentra una mayor cantidad de sangre en un área pequeña, maximizando la sensibilidad de detección, incluso con baja parasitemia',
    'La gota gruesa identifica con mayor precisión la especie de Plasmodium que el frotis fino',
    'Ambas técnicas son exactamente idénticas en su preparación y utilidad',
    'La gota gruesa nunca se usa en el diagnóstico de malaria'
  ],
  ok:0,
  clave:'La gota gruesa concentra más sangre, maximizando la sensibilidad de detección incluso con baja parasitemia.',
  exp:'La gota gruesa concentra una mayor cantidad de sangre en un área pequeña (al lisar los eritrocitos durante la tinción), maximizando la sensibilidad para DETECTAR la presencia del parásito, incluso con baja parasitemia. El frotis fino, en cambio, preserva la morfología de los eritrocitos infectados, permitiendo IDENTIFICAR con precisión la especie de Plasmodium involucrada -por eso ambas técnicas se usan de forma complementaria, cada una con una función distinta.',
  no:{
    1:'Es al revés: el FROTIS FINO es el que permite identificar con mayor precisión la especie, gracias a la preservación de la morfología eritrocitaria; la gota gruesa está optimizada para sensibilidad de detección.',
    2:'Son técnicas de preparación distinta (la gota gruesa lisa los eritrocitos para concentrar sangre; el frotis fino preserva su morfología), con utilidades complementarias distintas.',
    3:'La gota gruesa es, de hecho, una de las técnicas estándar y más usadas en el diagnóstico de malaria, precisamente por su alta sensibilidad.'
  },
  trampa:'Confundir la función específica de la gota gruesa (sensibilidad de detección) con la del frotis fino (identificación de especie), que son complementarias pero distintas.',
  obj:'Explicar por qué la gota gruesa maximiza la sensibilidad de detección de Plasmodium.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['gota gruesa','frotis fino','sensibilidad diagnóstica','diagnóstico de malaria']
},
{
  id:'U8-P-Q25', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Protozoos', sub:'Diferencia amebiasis y giardiasis',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Dos pacientes presentan diarrea. Uno tiene deposiciones con sangre y moco visibles; el otro tiene deposiciones voluminosas, grasosas y sin sangre, con distensión abdominal y pérdida de peso.',
  enunciado:'¿Qué protozoo es más probable en cada caso, respectivamente?',
  ops:[
    'Ambos casos corresponden a Giardia lamblia',
    'El primero (sangre y moco) es más consistente con Entamoeba histolytica; el segundo (esteatorrea, sin sangre) es más consistente con Giardia lamblia',
    'Ambos casos corresponden a Entamoeba histolytica',
    'Ninguno de los dos protozoos produce estos patrones clínicos distintos'
  ],
  ok:1,
  clave:'Sangre y moco sugieren Entamoeba histolytica (invasiva); esteatorrea sin sangre sugiere Giardia lamblia (malabsorción sin invasión).',
  exp:'El primer caso (sangre y moco) es más consistente con Entamoeba histolytica, cuya invasión de la mucosa colónica produce disentería con sangrado. El segundo caso (deposiciones grasosas/esteatorrea, sin sangre, con distensión y pérdida de peso) es más consistente con Giardia lamblia, que produce malabsorción por colonización superficial del intestino delgado, sin invadir la mucosa y, por tanto, sin producir sangrado.',
  no:{
    0:'Giardia no produce típicamente sangre y moco en las heces (caso 1); ese patrón es más característico de Entamoeba histolytica invasiva.',
    2:'Entamoeba histolytica no produce típicamente esteatorrea y malabsorción sin sangre (caso 2); ese patrón es más característico de Giardia lamblia.',
    3:'Cada protozoo sí tiene un patrón clínico característico bien diferenciado, precisamente el que permite distinguir ambos casos.'
  },
  trampa:'No aplicar la diferencia clínica clave entre amebiasis invasiva (sangre) y giardiasis (malabsorción sin sangre) para distinguir dos presentaciones clínicas distintas.',
  obj:'Distinguir clínicamente la amebiasis invasiva de la giardiasis según la presencia o ausencia de sangre en las heces.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['Entamoeba histolytica','Giardia lamblia','diagnóstico diferencial','disentería vs. malabsorción']
},
{
  id:'U8-P-Q26', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Malaria', sub:'Fiebre terciana y cuartana',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué especie de Plasmodium se asocia característicamente a la fiebre CUARTANA (episodios cada 72 horas)?',
  ops:['Plasmodium vivax', 'Plasmodium falciparum', 'Plasmodium malariae', 'Plasmodium ovale'],
  ok:2,
  clave:'Plasmodium malariae se asocia a la fiebre cuartana, con episodios cada 72 horas.',
  exp:'La fiebre cuartana (episodios cada 72 horas, en los días 1 y 4) es característica de Plasmodium malariae. La fiebre terciana (episodios cada 48 horas) es, en cambio, característica de Plasmodium vivax, Plasmodium ovale y Plasmodium falciparum. Este patrón periódico refleja la duración del ciclo eritrocítico de cada especie, aunque en la práctica clínica real el patrón "de libro" no siempre es tan claro.',
  no:{
    0:'Plasmodium vivax se asocia a la fiebre TERCIANA (cada 48 horas), no a la cuartana.',
    1:'Plasmodium falciparum también se asocia a la fiebre terciana (cuando sigue un patrón periódico), no a la cuartana, aunque con frecuencia no sigue un patrón tan definido.',
    3:'Plasmodium ovale se asocia a la fiebre terciana, no a la cuartana.'
  },
  trampa:'Confundir qué especie de Plasmodium se asocia a cada patrón de fiebre periódica (terciana vs. cuartana).',
  obj:'Identificar Plasmodium malariae como la especie asociada a la fiebre cuartana.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.',
  tags:['fiebre cuartana','Plasmodium malariae','patrón periódico de fiebre','ciclo eritrocítico']
}

]);
