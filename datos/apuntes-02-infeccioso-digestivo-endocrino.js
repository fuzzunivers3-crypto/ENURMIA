/* ============================================================
   APUNTES 02 — Infeccioso, digestivo y endocrino
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================================================== */
'tuberculosis': {
  tema:'Tuberculosis',
  bloque:'Medicina Interna',
  min:7,
  idea:'Dos enfermedades con el mismo bacilo: la infección latente, que no contagia y se previene, y la enfermedad activa, que contagia y se trata con cuatro fármacos.',
  claves:['tuberculosis','baciloscopia','BAAR','tuberculina','contactos','isoniacida'],
  sigue:'hepatitis-virales',
  secciones:[
    {
      t:'Infección latente y enfermedad activa no son lo mismo',
      p:[
        'Cuando alguien inhala el bacilo, la mayoría de las veces el sistema inmunitario lo contiene dentro de granulomas sin eliminarlo: eso es la *infección tuberculosa latente*. La persona está asintomática, la radiografía es normal y no contagia a nadie. En torno a un 5-10% de esas personas desarrollará la enfermedad a lo largo de la vida, y el riesgo se concentra en los dos primeros años y en quienes tienen VIH, desnutrición, diabetes, insuficiencia renal o tratamiento inmunosupresor.',
        'La *enfermedad activa* es otra cosa: hay multiplicación bacilar, síntomas y contagio. Se sospecha ante tos de más de dos o tres semanas, fiebre, sudoración nocturna, pérdida de peso y astenia. La distinción no es académica: confundirlas y tratar una enfermedad activa como si fuera latente equivale a dar monoterapia, y eso genera resistencia con seguridad.'
      ],
      foco:[
        'La tuberculina y los IGRA detectan *infección*, no enfermedad. Pueden ser negativos en la tuberculosis grave o en el inmunodeprimido.',
        'Antes de tratar una infección latente hay que descartar bien la enfermedad activa.'
      ]
    },
    {
      t:'Cómo se diagnostica hoy',
      p:[
        'La prueba inicial recomendada ante sospecha de enfermedad pulmonar es una *prueba molecular rápida* en muestra respiratoria, del tipo Xpert MTB/RIF: da resultado en horas y, además de detectar el bacilo, informa de la resistencia a rifampicina, lo que orienta el esquema desde el principio. La baciloscopia sigue siendo útil donde no hay acceso a molecular y, sobre todo, para el seguimiento. El cultivo es más lento pero permite el antibiograma completo.',
        'La radiografía apoya —infiltrados apicales, cavitación, patrón miliar— pero no confirma. Y conviene recordar que en el inmunodeprimido la imagen cambia: con CD4 bajos hay menos cavitación y más infiltrados difusos, adenopatías mediastínicas y formas extrapulmonares, porque sin respuesta inmunitaria no se forman granulomas. Esperar la imagen clásica en ese paciente retrasa el diagnóstico.'
      ]
    },
    {
      t:'Tratamiento y control del caso',
      p:[
        'El esquema estándar de la tuberculosis sensible es *2HRZE seguido de 4HR*: dos meses de isoniacida, rifampicina, pirazinamida y etambutol, y cuatro meses de isoniacida y rifampicina. La fase intensiva con cuatro fármacos baja rápido la carga bacilar y evita que emerjan resistencias; la de continuación elimina los bacilos persistentes y previene la recaída. Nunca se trata con un solo fármaco.',
        'Cada fármaco tiene su toxicidad y hay que saberlas para vigilarlas: la *isoniacida* produce neuropatía periférica —que se previene con piridoxina— y hepatotoxicidad; la *rifampicina* tiñe los fluidos de naranja, es hepatotóxica y sobre todo es un potente inductor enzimático que reduce el efecto de anticonceptivos, anticoagulantes, antirretrovirales y corticoides; la *pirazinamida* eleva el ácido úrico; y el *etambutol* produce neuritis óptica, con pérdida de agudeza visual y de la visión de colores.',
        'Tratar al paciente es solo la mitad del trabajo. La tuberculosis es de notificación obligatoria, el caso bacilífero requiere aislamiento respiratorio hasta que mejora con tratamiento, y el *estudio de contactos* convivientes y estrechos es lo que corta la cadena de transmisión y detecta infecciones latentes tratables.'
      ],
      alarma:[
        'Abandono del tratamiento al sentirse mejor: es la vía directa a la recaída y a la multirresistencia.',
        'Alteración visual en un paciente con etambutol: suspender y evaluar.'
      ]
    }
  ],
  recordar:[
    'Latente = asintomática, radiografía normal, *no contagia*. Activa = síntomas y contagio.',
    'Prueba inicial: *molecular rápida* (detecta bacilo y resistencia a rifampicina).',
    'Esquema: *2HRZE + 4HR*. Nunca monoterapia.',
    'Isoniacida → nervio *periférico* (dar piridoxina). Etambutol → nervio *óptico*.',
    'Notificar y *estudiar contactos*: sin eso, la cadena sigue.'
  ],
  ref:'OMS, directrices consolidadas sobre tuberculosis; programas nacionales de control.'
},

/* ==================================================== */
'hepatitis-virales': {
  tema:'Hepatitis virales',
  bloque:'Medicina Interna',
  min:6,
  idea:'Cinco letras, dos vías de transmisión y una serología que se lee con dos preguntas: ¿hay virus? y ¿hubo contacto real o solo vacuna?',
  claves:['hepatitis','HBsAg','anti-HBc','virus de la hepatitis','transaminasas','ictericia'],
  sigue:'cirrosis-y-sus-complicaciones',
  secciones:[
    {
      t:'Cómo se agrupan',
      p:[
        'Las hepatitis *A y E* se transmiten por vía fecal-oral, se asocian a agua y alimentos contaminados y no cronifican en el huésped inmunocompetente. La diferencia clínica que importa es que la hepatitis E puede provocar una hepatitis fulminante en la gestante, con mortalidad alta en el tercer trimestre.',
        'Las hepatitis *B, C y D* se transmiten por vía parenteral, sexual o vertical, y sí pueden cronificar. La B cronifica en un porcentaje bajo del adulto pero muy alto del recién nacido infectado, lo que explica por qué la vacunación al nacer y la profilaxis del hijo de madre positiva son tan importantes. La C cronifica en la mayoría de los casos.',
        'La *D* es un virus defectivo: necesita el antígeno de superficie del virus B para poder infectar, de modo que solo aparece en portadores de B. Puede llegar como coinfección o como sobreinfección de un portador crónico, y esta última es la que produce deterioros bruscos y progresión acelerada. La consecuencia práctica es elegante: vacunar contra la hepatitis B protege también de la D.'
      ]
    },
    {
      t:'Leer la serología de la hepatitis B',
      p:[
        'El panel se ordena con dos preguntas. La primera: ¿hay virus circulando? Lo dice el *HBsAg*, el antígeno de superficie. Si es positivo, hay infección; si persiste más de seis meses, es crónica.',
        'La segunda: ¿esta persona tuvo contacto con el virus real o solo con la vacuna? Lo dice el *anti-HBc*, el anticuerpo contra el antígeno del core. La vacuna contiene únicamente antígeno de superficie, de modo que genera anti-HBs pero nunca anti-HBc. Por tanto, anti-HBs positivo con anti-HBc negativo significa inmunidad *vacunal*; si el anti-HBc también es positivo, hubo infección pasada resuelta.',
        'El *HBeAg* y la carga viral informan de la replicación y de la infectividad, y guían la decisión de tratar y el seguimiento.'
      ],
      foco:[
        'El *anti-HBc* es el marcador que distingue vacunado de infectado. Sin él, el panel no se puede interpretar.',
        'La hepatitis C hoy se cura: pautas orales de 8 a 12 semanas con antivirales de acción directa logran curación en más del 95%. Por eso el cribado tiene sentido: identificar es poder curar.'
      ],
      alarma:[
        'Ictericia con encefalopatía y alargamiento del tiempo de protrombina: hepatitis fulminante, valorar trasplante.',
        'Deterioro brusco en un portador crónico de hepatitis B: descarta sobreinfección por virus delta o hepatocarcinoma.'
      ]
    }
  ],
  recordar:[
    'Fecal-oral: *A y E*. Parenteral/sexual/vertical: *B, C y D*.',
    'La *E* es la peligrosa en la embarazada.',
    'Anti-HBs positivo con anti-HBc *negativo* = vacunado.',
    'La *D* necesita a la B: la vacuna de B protege de ambas.',
    'La hepatitis C se *cura* con antivirales orales.'
  ],
  ref:'Harrison, 21.ª ed., hepatitis viral; guías AASLD y EASL; OMS.'
},

/* ==================================================== */
'cirrosis-y-sus-complicaciones': {
  tema:'Cirrosis y sus complicaciones',
  bloque:'Medicina Interna',
  min:8,
  idea:'El hígado cirrótico falla por dos vías: pierde función de síntesis y genera hipertensión portal. Cada complicación se deduce de una de las dos.',
  claves:['cirrosis','ascitis','várices','peritonitis bacteriana espontánea','encefalopatía hepática','hepatorrenal','Child'],
  sigue:'diabetes-mellitus',
  secciones:[
    {
      t:'Dos mecanismos explican todo',
      p:[
        'La cirrosis sustituye el parénquima por fibrosis y nódulos de regeneración, y de ahí salen dos problemas. El primero es la *insuficiencia de síntesis*: menos albúmina, de donde vienen los edemas y parte de la ascitis; menos factores de coagulación, de donde viene el alargamiento del tiempo de protrombina, que es el mejor marcador de función; y menos aclaramiento de sustancias, lo que contribuye a la encefalopatía.',
        'El segundo es la *hipertensión portal*: la sangre no atraviesa bien el hígado, busca caminos alternativos y produce várices esofágicas y gástricas, esplenomegalia con hiperesplenismo —de ahí la trombocitopenia— y circulación colateral. La ascitis nace de la combinación de ambos: hipertensión portal más hipoalbuminemia, con vasodilatación esplácnica que activa los sistemas retenedores de sodio.',
        'La gravedad se estima con la clasificación de *Child-Pugh* —bilirrubina, albúmina, INR, ascitis y encefalopatía— y con el *MELD*, que además ordena la prioridad en la lista de trasplante.'
      ]
    },
    {
      t:'Las cuatro complicaciones que hay que reconocer',
      p:[
        'La *hemorragia por várices* es la más aparatosa. Se trata con reposición prudente, vasoactivo esplácnico —terlipresina, somatostatina u octreótido—, antibiótico profiláctico, que reduce mortalidad, y endoscopia con ligadura en las primeras 12 horas. La transfusión debe ser restrictiva, con objetivo de hemoglobina en torno a 7-8 g/dL: transfundir de más eleva la presión portal y favorece el resangrado.',
        'La *peritonitis bacteriana espontánea* se diagnostica con un recuento de polimorfonucleares en líquido ascítico igual o mayor de 250 por mm³, sin esperar al cultivo. Se trata con cefalosporina de tercera generación y albúmina, que reduce el síndrome hepatorrenal y la mortalidad.',
        'La *encefalopatía hepática* casi siempre tiene un desencadenante corregible: estreñimiento, hemorragia digestiva, infección, diuréticos, deshidratación o sedantes. Se trata con lactulosa, con rifaximina como segundo escalón, y buscando siempre la causa. La antigua restricción proteica prolongada está desaconsejada porque genera sarcopenia, que a su vez empeora la encefalopatía.',
        'El *síndrome hepatorrenal* es una insuficiencia renal funcional por vasoconstricción renal extrema en respuesta a la vasodilatación esplácnica. Se diagnostica descartando otras causas y no responde a la simple expansión de volumen: se trata con terlipresina y albúmina, y el tratamiento definitivo es el trasplante.'
      ],
      foco:[
        'Toda ascitis que ingresa merece una *paracentesis diagnóstica*, aunque no parezca infectada.',
        'En la paracentesis evacuadora de más de 5 litros hay que reponer albúmina, 6-8 g por litro extraído.'
      ],
      alarma:[
        'Cirrótico con fiebre, dolor abdominal o deterioro sin causa clara: punciona la ascitis.',
        'Todo cirrótico necesita cribado periódico de *hepatocarcinoma* con ecografía semestral y de várices con endoscopia.'
      ]
    }
  ],
  recordar:[
    'Dos mecanismos: fallo de *síntesis* + *hipertensión portal*.',
    'Várices: vasoactivo + *antibiótico* + endoscopia en 12 h; transfusión *restrictiva*.',
    'Peritonitis bacteriana espontánea: *≥250 PMN/mm³* → tratar sin esperar cultivo, con albúmina.',
    'Encefalopatía: lactulosa *y* buscar el desencadenante. No restringir proteínas de forma prolongada.',
    'Cribado semestral de hepatocarcinoma.'
  ],
  ref:'Guías EASL sobre cirrosis descompensada; guías AASLD; consenso de Baveno VII.'
},

/* ==================================================== */
'diabetes-mellitus': {
  tema:'Diabetes mellitus: diagnóstico y tratamiento',
  bloque:'Medicina Interna',
  min:8,
  idea:'Diagnosticar es cuestión de umbrales; tratar es cuestión de elegir el fármaco según lo que amenaza a ese paciente, no solo según la glucemia.',
  claves:['diabetes','HbA1c','glucemia','metformina','insulina','SGLT2','GLP-1'],
  sigue:'cetoacidosis-diabetica',
  secciones:[
    {
      t:'Los criterios y la frontera con la prediabetes',
      p:[
        'El diagnóstico se establece con cualquiera de estos: glucemia en ayunas igual o mayor de 126 mg/dL, glucemia a las 2 horas de la sobrecarga oral igual o mayor de 200, hemoglobina glucosilada igual o mayor de 6,5%, o glucemia al azar igual o mayor de 200 con síntomas cardinales. Salvo este último caso, el resultado debe confirmarse en una segunda determinación.',
        'Entre 100 y 125 mg/dL en ayunas se habla de *glucemia alterada en ayunas*, y entre 140 y 199 a las 2 horas de *intolerancia a la glucosa*: son prediabetes, y etiquetar a esa persona como diabética le cambia la vida sin motivo. Al revés también importa: la prediabetes no es benigna, y la intervención sobre el estilo de vida en ese punto es de las medidas preventivas más eficaces que existen.',
        'La hemoglobina glucosilada refleja unos dos o tres meses, pero depende de la vida media del hematíe: es poco fiable en anemias hemolíticas, tras sangrado o transfusión, en hemoglobinopatías, en la insuficiencia renal avanzada y en el embarazo.'
      ]
    },
    {
      t:'Tipo 1 y tipo 2 no son la misma enfermedad',
      p:[
        'En la *tipo 1* hay destrucción autoinmune de las células beta y déficit absoluto de insulina: anticuerpos positivos, tendencia a la cetoacidosis y dependencia de insulina desde el diagnóstico. Suele debutar joven, aunque existe la forma del adulto, el LADA.',
        'En la *tipo 2* coexisten resistencia a la insulina y un declive progresivo de su secreción, se asocia a obesidad y sedentarismo, y sí puede prevenirse. La consecuencia práctica es que la tipo 2 se diagnostica años después de haber empezado: por eso una parte de los pacientes ya tiene complicaciones microvasculares el día del diagnóstico, y por eso el fondo de ojo se hace desde ese mismo momento.'
      ]
    },
    {
      t:'Cómo se trata hoy',
      p:[
        'Sobre la base de la alimentación, el ejercicio y la educación, el primer fármaco es la *metformina*, por eficacia, seguridad, ausencia de hipoglucemias y costo. Está contraindicada con filtrado glomerular por debajo de 30 y se suspende en situaciones de riesgo de acidosis láctica.',
        'Lo que ha cambiado la práctica es que ahora el segundo fármaco no se elige solo por cuánto baja la glucemia. En el paciente con enfermedad cardiovascular establecida, insuficiencia cardíaca o enfermedad renal crónica se añaden precozmente *inhibidores de SGLT2* o *agonistas del receptor de GLP-1*, porque reducen eventos cardiovasculares y progresión renal más allá del control glucémico. Los agonistas de GLP-1 además favorecen la pérdida de peso.',
        'Los objetivos se individualizan: una hemoglobina glucosilada por debajo del 7% es razonable en general, pero se relaja en el anciano frágil, en quien tiene hipoglucemias frecuentes o esperanza de vida limitada. Y el control de la presión arterial y del colesterol suele aportar más que apretar el último medio punto de glucosilada.'
      ],
      foco:[
        'El cribado de complicaciones empieza el día del diagnóstico en la tipo 2: fondo de ojo, albuminuria y exploración de los pies con monofilamento.',
        'En el paciente con enfermedad renal o cardíaca, el fármaco se elige por el órgano, no por la glucemia.'
      ],
      alarma:[
        'Pérdida de peso rápida con hiperglucemia y cetonuria: piensa en tipo 1 o en cetoacidosis, no en un mal control cualquiera.',
        'Úlcera en el pie de un diabético: es una urgencia de descarga y valoración vascular, no una cura más.'
      ]
    }
  ],
  recordar:[
    'Umbrales: ayunas *126*, sobrecarga *200*, HbA1c *6,5%*. Confirmar salvo síntomas cardinales.',
    'Prediabetes: ayunas 100-125. No es diabetes, pero se interviene.',
    'Primer fármaco: *metformina*.',
    'Con enfermedad cardiovascular, cardíaca o renal: *iSGLT2* o *GLP-1* precozmente.',
    'En la tipo 2, cribado de complicaciones *desde el diagnóstico*.'
  ],
  ref:'American Diabetes Association, Standards of Care; consenso ADA/EASD; guías KDIGO.'
},

/* ==================================================== */
'cetoacidosis-diabetica': {
  tema:'Cetoacidosis diabética',
  bloque:'Medicina Interna',
  min:6,
  idea:'El orden del tratamiento importa más que las dosis: líquidos, después potasio si está bajo, y solo entonces insulina.',
  claves:['cetoacidosis','cetonas','anión gap','potasio','insulina en infusión'],
  sigue:'estado-hiperosmolar',
  secciones:[
    {
      t:'Qué está pasando',
      p:[
        'Sin insulina, la glucosa no entra en la célula y el organismo se comporta como si estuviera en ayuno absoluto: aumenta la lipólisis, el hígado produce cuerpos cetónicos y aparece la acidosis metabólica con anión gap elevado. La hiperglucemia provoca diuresis osmótica, con pérdida de agua y de electrolitos, deshidratación y depleción de potasio corporal total.',
        'El diagnóstico exige tres cosas a la vez: hiperglucemia —habitualmente por encima de 250 mg/dL—, acidosis metabólica con pH menor de 7,30 y bicarbonato por debajo de 18, y presencia de cuerpos cetónicos. Conviene conocer la *cetoacidosis euglucémica*, con glucemias poco elevadas, que aparece en el ayuno, el embarazo y sobre todo con inhibidores de SGLT2: se pasa por alto con facilidad porque la glucemia no alarma.'
      ]
    },
    {
      t:'El orden del tratamiento',
      p:[
        'Primero, *líquidos*. La depleción de volumen es grande y la reposición con cristaloides por sí sola ya baja la glucemia y mejora la perfusión.',
        'Segundo, *el potasio*. Aunque el potasio sérico parezca normal o alto, el corporal total está muy disminuido: la acidosis y el déficit de insulina lo sacan de la célula. Al administrar insulina, el potasio vuelve al interior celular y el sérico se desploma. Por eso, si el potasio inicial es menor de 3,3 mEq/L, se repone antes y se retrasa la insulina; entre 3,3 y 5,2 se administran ambos a la vez; y por encima de 5,2 se inicia insulina y se vigila.',
        'Tercero, la *insulina* en infusión continua, ajustada para que la glucemia baje de forma gradual. Cuando la glucemia se acerca a 200 mg/dL se añade suero glucosado y se mantiene la insulina, porque lo que hay que corregir no es la glucemia sino la cetosis y el anión gap.',
        'El bicarbonato solo se plantea con pH menor de 6,9. Y siempre hay que buscar el desencadenante: infección, omisión de insulina, infarto, pancreatitis o debut de la enfermedad.'
      ],
      foco:[
        'La insulina se mantiene hasta que se cierra el *anión gap*, no hasta que baja la glucemia.',
        'Bajar la glucemia demasiado rápido, sobre todo en niños, se asocia a edema cerebral.'
      ],
      alarma:[
        'Potasio inicial < 3,3 mEq/L: reponer antes de la insulina, o se puede provocar una arritmia mortal.',
        'Cefalea y deterioro de la conciencia durante el tratamiento en un niño: sospecha edema cerebral.'
      ]
    }
  ],
  recordar:[
    'Tríada: hiperglucemia + acidosis + *cetonas*, con anión gap elevado.',
    'Orden: *líquidos → potasio (si <3,3) → insulina*.',
    'La insulina se mantiene hasta cerrar el *anión gap*.',
    'Bicarbonato solo si pH < 6,9.',
    'Existe la forma *euglucémica*, sobre todo con iSGLT2.'
  ],
  ref:'American Diabetes Association, crisis hiperglucémicas en el adulto; Harrison, 21.ª ed.'
},

/* ==================================================== */
'estado-hiperosmolar': {
  tema:'Estado hiperosmolar',
  bloque:'Medicina Interna',
  min:5,
  idea:'Queda insulina suficiente para frenar la cetosis pero no para controlar la glucemia. El déficit de agua es enorme, y ahí está la prioridad.',
  claves:['hiperosmolar','osmolaridad','hiperglucemia grave','deshidratación'],
  sigue:'hipoglucemia',
  secciones:[
    {
      t:'En qué se diferencia de la cetoacidosis',
      p:[
        'En el estado hiperosmolar persiste una cantidad residual de insulina, suficiente para inhibir la lipólisis: por eso no hay cuerpos cetónicos ni acidosis significativa. Pero no basta para controlar la glucemia, que asciende de forma extrema, con frecuencia por encima de 600 mg/dL.',
        'Esa hiperglucemia mantenida durante días provoca una diuresis osmótica prolongada, y el déficit de agua acumulado puede superar los 8 a 10 litros, mucho más que en la cetoacidosis. La hiperosmolalidad explica el deterioro neurológico, que va desde la confusión hasta el coma y puede simular un ictus. Afecta sobre todo al anciano con diabetes tipo 2 y acceso limitado al agua, y la mortalidad es más alta que en la cetoacidosis, en buena parte por la edad y las comorbilidades.'
      ]
    },
    {
      t:'Tratamiento',
      p:[
        'La prioridad absoluta es la *reposición de volumen*, que por sí sola ya reduce la glucemia de forma sustancial. La insulina viene después y a dosis más bajas, y la corrección de la osmolalidad debe ser lenta para evitar el edema cerebral.',
        'Se vigilan el potasio y el sodio con la misma lógica que en la cetoacidosis, y se busca siempre el desencadenante, que en este cuadro es casi siempre una infección, un infarto o un fármaco.'
      ],
      alarma:[
        'Deterioro neurológico durante la corrección: sospecha edema cerebral por descenso demasiado rápido de la osmolalidad.',
        'Todo estado hiperosmolar tiene un desencadenante: búscalo, no basta con corregir la glucemia.'
      ]
    }
  ],
  recordar:[
    'Sin cetosis y sin acidosis, con glucemias *muy* altas y osmolalidad elevada.',
    'El déficit de agua es *enorme*: líquidos primero.',
    'Insulina después y con corrección *lenta* de la osmolalidad.',
    'Afecta al anciano dependiente: busca infección o infarto detrás.'
  ],
  ref:'American Diabetes Association, crisis hiperglucémicas; Harrison, 21.ª ed.'
},

/* ==================================================== */
'hipoglucemia': {
  tema:'Hipoglucemia',
  bloque:'Medicina Interna',
  min:4,
  idea:'Se diagnostica con la tríada de Whipple y se trata según una regla muy simple: si el paciente no está consciente, nada por la boca.',
  claves:['hipoglucemia','Whipple','glucagón','sulfonilurea'],
  sigue:'hipotiroidismo-e-hipertiroidismo',
  secciones:[
    {
      t:'Confirmarla antes de etiquetarla',
      p:[
        'Los síntomas de hipoglucemia son muy inespecíficos: temblor, sudoración, palpitaciones y ansiedad por la descarga adrenérgica; y confusión, alteración de la conducta, focalidad o coma cuando el cerebro se queda sin sustrato. Muchos mareos se etiquetan de hipoglucemia sin que lo sean.',
        'La *tríada de Whipple* pone orden: síntomas compatibles, glucemia baja documentada en el momento de esos síntomas, y desaparición de los síntomas al corregirla. Solo cuando se cumplen las tres tiene sentido buscar la causa: fármacos —insulina y sulfonilureas a la cabeza—, alcohol, insuficiencia suprarrenal, insuficiencia hepática o renal, insulinoma o hipoglucemia facticia.'
      ]
    },
    {
      t:'Tratamiento según el nivel de conciencia',
      p:[
        'Si el paciente está *consciente* y puede tragar, se administran hidratos de absorción rápida por vía oral y después hidratos de absorción lenta para evitar la recaída.',
        'Si está *inconsciente*, no se le da nada por la boca: el riesgo de broncoaspiración es real. Se administra glucosa hipertónica intravenosa; si no hay acceso venoso, glucagón por vía intramuscular o subcutánea, que moviliza el glucógeno hepático en minutos, teniendo en cuenta que no funciona bien si los depósitos están agotados, como en el alcoholismo o el ayuno prolongado.',
        'Un detalle que cambia decisiones: la hipoglucemia por *sulfonilureas* es prolongada y recurrente, porque el fármaco sigue estimulando la secreción de insulina durante horas. Ese paciente necesita observación y perfusión de glucosa, no una corrección puntual y el alta.'
      ],
      alarma:[
        'Paciente inconsciente: *nada por la boca*.',
        'Hipoglucemia por sulfonilurea o insulina de acción prolongada: observación prolongada, no alta precoz.'
      ]
    }
  ],
  recordar:[
    'Tríada de *Whipple*: síntomas + glucemia baja documentada + alivio al corregir.',
    'Consciente → vía oral. Inconsciente → glucosa intravenosa o *glucagón*.',
    'El glucagón falla si no hay glucógeno (alcohólico, ayuno).',
    'Sulfonilureas: hipoglucemia *prolongada*, requiere vigilancia.'
  ],
  ref:'Guías de la Endocrine Society sobre hipoglucemia; American Diabetes Association.'
},

/* ==================================================== */
'hipotiroidismo-e-hipertiroidismo': {
  tema:'Hipotiroidismo e hipertiroidismo',
  bloque:'Medicina Interna',
  min:7,
  idea:'La TSH localiza el problema y la T4 confirma la dirección. Después, los anticuerpos y la gammagrafía dicen la causa, que es lo que decide el tratamiento.',
  claves:['tiroid','TSH','T4','Graves','Hashimoto','tirotoxicosis','bocio'],
  sigue:'lesion-renal-aguda',
  secciones:[
    {
      t:'Localizar con la TSH',
      p:[
        'La hipófisis regula la tiroides por retroalimentación negativa, y esa lógica permite localizar el fallo con dos determinaciones. TSH *alta* con T4 libre *baja* significa que el eje funciona y pide más hormona pero la glándula no responde: hipotiroidismo primario. TSH *baja* con T4 baja indica que el fallo está por encima, en la hipófisis o el hipotálamo: hipotiroidismo central. TSH *suprimida* con T4 alta es hipertiroidismo primario.',
        'Existe además el *hipotiroidismo subclínico*, con TSH elevada y T4 normal, cuya decisión de tratar depende de la cifra de TSH, la edad, los síntomas, la presencia de anticuerpos y, muy especialmente, del embarazo o su búsqueda.'
      ]
    },
    {
      t:'Hipotiroidismo',
      p:[
        'La causa más frecuente en zonas sin déficit de yodo es la *tiroiditis de Hashimoto*, autoinmune, con anticuerpos antiperoxidasa positivos. La clínica es la de un metabolismo enlentecido: cansancio, aumento de peso, intolerancia al frío, estreñimiento, piel seca, bradicardia, caída del cabello y enlentecimiento cognitivo.',
        'El tratamiento es levotiroxina, en ayunas y separada de calcio, hierro e inhibidores de la bomba de protones, que reducen su absorción. En el anciano y en el cardiópata se empieza con dosis bajas y se sube despacio, porque acelerar el metabolismo de golpe puede desencadenar isquemia. Y en el embarazo los requerimientos *aumentan* desde el primer trimestre: hay que subir la dosis pronto y controlar la TSH con más frecuencia, porque el feto depende de la hormona materna en las primeras semanas.'
      ]
    },
    {
      t:'Hipertiroidismo',
      p:[
        'La causa más frecuente en el adulto joven es la *enfermedad de Graves*, por anticuerpos que estimulan el receptor de TSH. Se reconoce por el bocio difuso y por las manifestaciones extratiroideas —oftalmopatía con exoftalmos, y más raramente mixedema pretibial—, que son prácticamente exclusivas de ella. La gammagrafía muestra captación difusa aumentada.',
        'Conviene contrastarla con otras causas, porque el tratamiento cambia: el *bocio multinodular tóxico* y el *adenoma tóxico* dan captación nodular y aparecen en pacientes mayores; las *tiroiditis* cursan con captación baja, porque no hay síntesis sino liberación de hormona preformada, y son autolimitadas.',
        'El tratamiento combina betabloqueante para los síntomas adrenérgicos y antitiroideos —metimazol, o propiltiouracilo en el primer trimestre del embarazo y en la crisis tirotóxica—, con el yodo radiactivo o la cirugía como opciones definitivas. En la *crisis tirotóxica*, si se usa yodo, debe administrarse al menos una hora después del antitiroideo: darlo antes aportaría sustrato para sintetizar más hormona.'
      ],
      alarma:[
        'Fiebre alta, taquiarritmia, agitación e insuficiencia cardíaca en un hipertiroideo: crisis tirotóxica.',
        'Hipotiroidismo grave con hipotermia, bradicardia y estupor: coma mixedematoso.'
      ]
    }
  ],
  recordar:[
    'TSH *localiza*; T4 confirma. Primario: TSH alta con T4 baja.',
    'Hipotiroidismo: Hashimoto y *anti-TPO*. En el embarazo, *subir* la dosis pronto.',
    'Graves: bocio *difuso* + oftalmopatía + captación difusa.',
    'Tiroiditis: captación *baja*, cuadro autolimitado.',
    'Crisis tirotóxica: el yodo va *después* del antitiroideo.'
  ],
  ref:'Guías de la American Thyroid Association; Harrison, 21.ª ed.'
},

/* ==================================================== */
'lesion-renal-aguda': {
  tema:'Lesión renal aguda',
  bloque:'Medicina Interna',
  min:6,
  idea:'Tres preguntas en orden: ¿le falta volumen?, ¿hay obstrucción?, ¿está dañado el parénquima? Las dos primeras se corrigen y la tercera se sostiene.',
  claves:['lesión renal aguda','fracaso renal','prerrenal','necrosis tubular','FeNa','creatinina'],
  sigue:'enfermedad-renal-cronica',
  secciones:[
    {
      t:'Prerrenal, renal y posrenal',
      p:[
        'La causa *prerrenal* es hipoperfusión con parénquima sano: deshidratación, hemorragia, insuficiencia cardíaca, cirrosis, sepsis o fármacos que reducen la perfusión glomerular, como los antiinflamatorios y, en ciertos contextos, los IECA. El riñón responde reteniendo sodio y agua con avidez, y eso se refleja en los índices: sodio urinario bajo, excreción fraccionada de sodio menor del 1%, orina concentrada y cociente urea/creatinina elevado. Se corrige reponiendo volumen.',
        'La causa *posrenal* es obstructiva y se descarta con una ecografía, que además es rápida y barata: hiperplasia prostática, litiasis bilateral, tumores. Se corrige desobstruyendo.',
        'La causa *renal* implica daño del parénquima. La más frecuente es la *necrosis tubular aguda*, por isquemia prolongada o por tóxicos —contrastes, aminoglucósidos, rabdomiólisis—. Aquí el túbulo ya no reabsorbe: el sodio urinario supera los 40 mEq/L, la excreción fraccionada pasa del 2% y aparecen cilindros granulosos pardos. Otras causas renales son las glomerulonefritis y las nefritis intersticiales.'
      ],
      foco:[
        'Distinguir prerrenal de necrosis tubular cambia el tratamiento: la primera mejora con volumen, la segunda no.',
        'El sedimento urinario orienta gratis: cilindros hemáticos apuntan a glomerulonefritis; leucocitarios y eosinófilos, a nefritis intersticial; granulosos pardos, a necrosis tubular.'
      ]
    },
    {
      t:'Qué hacer',
      p:[
        'El manejo se apoya en corregir la causa, ajustar el volumen, revisar y suspender los nefrotóxicos, y ajustar todos los fármacos al filtrado real. Conviene desconfiar de la creatinina aislada en el anciano con poca masa muscular: puede parecer normal con un filtrado muy reducido.',
        'La diálisis urgente tiene indicaciones concretas, y se recuerdan en cinco grupos: hiperpotasemia refractaria, acidosis metabólica grave que no responde, sobrecarga de volumen refractaria como el edema agudo de pulmón, manifestaciones urémicas —pericarditis, encefalopatía— e intoxicaciones por tóxicos dializables. Fuera de esas situaciones, iniciar muy precozmente no ha demostrado beneficio.'
      ],
      alarma:[
        'Anuria brusca: descarta obstrucción con ecografía antes que nada.',
        'Hiperpotasemia con cambios en el ECG: trata sin esperar confirmación analítica.'
      ]
    }
  ],
  recordar:[
    'Orden: *volumen → obstrucción → parénquima*.',
    'Prerrenal: Na urinario bajo, *FeNa < 1%*, orina concentrada.',
    'Necrosis tubular: Na urinario alto, *FeNa > 2%*, cilindros granulosos.',
    'Ecografía precoz para descartar obstrucción.',
    'Diálisis urgente: potasio, acidosis, volumen, uremia, tóxicos.'
  ],
  ref:'Guías KDIGO sobre lesión renal aguda; Harrison, 21.ª ed.'
},

/* ==================================================== */
'enfermedad-renal-cronica': {
  tema:'Enfermedad renal crónica',
  bloque:'Medicina Interna',
  min:6,
  idea:'Se clasifica por filtrado y albuminuria a la vez, y el objetivo del tratamiento no es normalizar la creatinina sino frenar la pendiente de caída.',
  claves:['enfermedad renal crónica','filtrado glomerular','diálisis','KDIGO','nefropatía'],
  sigue:'sindrome-nefrotico-y-nefritico',
  secciones:[
    {
      t:'Clasificar bien',
      p:[
        'Se define por alteraciones de la estructura o la función renal durante más de tres meses. La clasificación KDIGO combina dos ejes, y usar solo uno subestima el riesgo. El filtrado glomerular ordena los estadios: G1 igual o mayor de 90, G2 de 60 a 89, G3a de 45 a 59, G3b de 30 a 44, G4 de 15 a 29 y G5 por debajo de 15 o en diálisis. La albuminuria añade el otro eje: A1, A2 y A3.',
        'Las dos causas más frecuentes son la *diabetes* y la *hipertensión*, y de ahí que el control de ambas sea a la vez tratamiento y prevención.'
      ]
    },
    {
      t:'Frenar la progresión y tratar las consecuencias',
      p:[
        'Lo que enlentece la caída del filtrado es un paquete de medidas: control de la presión arterial, bloqueo del sistema renina-angiotensina con IECA o ARA II —nunca los dos juntos—, *inhibidores de SGLT2*, que han demostrado beneficio renal incluso sin diabetes, control glucémico, reducción de la albuminuria como objetivo en sí misma, restricción moderada de sal y proteínas, y evitar nefrotóxicos, muy especialmente los antiinflamatorios y los contrastes innecesarios.',
        'En paralelo hay que tratar las consecuencias. La *anemia* por déficit de eritropoyetina se corrige asegurando primero los depósitos de hierro. El *trastorno mineral y óseo* aparece porque el riñón deja de eliminar fósforo y de activar la vitamina D: sube el fósforo, baja el calcio y la paratiroides se dispara, con hiperparatiroidismo secundario, enfermedad ósea y calcificación vascular. Se maneja con restricción y quelantes del fósforo, vitamina D activa y, en casos avanzados, calcimiméticos. También hay que corregir la acidosis metabólica y ajustar todos los fármacos.'
      ],
      foco:[
        'Un ascenso de la creatinina de hasta un 30% al iniciar un IECA es esperable: no se suspende.',
        'Dar calcio y vitamina D sin controlar el fósforo favorece la calcificación vascular, que es lo que mata a estos pacientes.'
      ],
      alarma:[
        'Derivar tarde a nefrología empeora el pronóstico: la preparación del acceso vascular y del trasplante lleva meses.',
        'El paciente renal muere sobre todo de causa *cardiovascular*, no de uremia: trata el riesgo global.'
      ]
    }
  ],
  recordar:[
    'Clasifica por *filtrado + albuminuria*, no por uno solo.',
    'Nefroprotección: presión, *bloqueo del SRAA*, *iSGLT2*, evitar AINE y contrastes.',
    'El estadio 3 se subdivide en *3a y 3b*.',
    'Trastorno mineral: fósforo *alto*, calcio bajo, PTH *alta*.',
    'La mortalidad es cardiovascular: trátalo como paciente de alto riesgo.'
  ],
  ref:'Guías KDIGO sobre enfermedad renal crónica y sobre trastorno mineral y óseo.'
},

/* ==================================================== */
'sindrome-nefrotico-y-nefritico': {
  tema:'Síndrome nefrótico y nefrítico',
  bloque:'Medicina Interna',
  min:6,
  idea:'Dos nombres parecidos y dos enfermedades distintas: uno inflama y sangra, el otro filtra proteínas. El sedimento urinario los separa en un minuto.',
  claves:['nefrótico','nefrítico','proteinuria','glomerulonefritis','membranosa','cilindros hemáticos'],
  sigue:'hiponatremia',
  secciones:[
    {
      t:'Nefrítico: inflamación',
      p:[
        'El síndrome nefrítico refleja inflamación del glomérulo. Su marca es la *hematuria con hematíes dismórficos y cilindros hemáticos*, acompañada de hipertensión, oliguria, retención de volumen y proteinuria por debajo del rango nefrótico.',
        'El ejemplo clásico es la *glomerulonefritis postinfecciosa*, que aparece entre una y tres semanas después de una faringitis estreptocócica —o tres a seis tras una infección cutánea—, con complemento C3 bajo y antiestreptolisinas elevadas. En el niño el pronóstico es excelente: tratamiento de soporte, y el C3 se normaliza en seis a ocho semanas; si no lo hace, hay que replantear el diagnóstico. El diferencial principal es la *nefropatía IgA*, que sangra de forma simultánea a la infección, sin latencia, y con complemento normal.'
      ],
      foco:[
        'La clave para separar postestreptocócica de nefropatía IgA es el *intervalo*: semanas después frente a durante la infección.'
      ]
    },
    {
      t:'Nefrótico: pérdida de proteínas',
      p:[
        'El síndrome nefrótico se define por proteinuria mayor de 3,5 g al día, hipoalbuminemia, edema e hiperlipidemia. Cada una de sus complicaciones se deduce de lo que se pierde por la orina.',
        'Se pierde albúmina, y de ahí el edema. Se pierden inmunoglobulinas, y de ahí las *infecciones*, con la peritonitis neumocócica como cuadro temido en el niño. Y se pierde antitrombina III mientras el hígado aumenta la síntesis de procoagulantes, lo que crea un estado de *hipercoagulabilidad*: trombosis venosa profunda, embolia pulmonar y, de forma característica, trombosis de la vena renal, que se manifiesta con dolor lumbar, hematuria y deterioro de la función renal.',
        'La causa cambia con la edad. En el niño pequeño es la *enfermedad de cambios mínimos*, que responde muy bien a corticoides y permite tratar sin biopsia si la presentación es típica. En el adulto, en países con alta prevalencia de diabetes, la primera causa es la *nefropatía diabética*; entre las glomerulopatías primarias destacan la glomeruloesclerosis focal y segmentaria y la nefropatía membranosa.'
      ],
      alarma:[
        'Dolor lumbar brusco con hematuria en un paciente nefrótico: trombosis de la vena renal.',
        'Fiebre y dolor abdominal en un niño nefrótico: descarta peritonitis.'
      ]
    }
  ],
  recordar:[
    'NefrÍtico = *Inflamación*: hematuria, cilindros hemáticos, hipertensión, oliguria.',
    'NefrÓtico = *prOteinuria* > 3,5 g, hipoalbuminemia, edema, hiperlipidemia.',
    'Nefrótico: riesgo de *trombosis* (pierde antitrombina III) e *infección* (pierde inmunoglobulinas).',
    'Niño con nefrótico típico: cambios mínimos → corticoides *sin biopsia*.',
    'Postestreptocócica: latencia de 1-3 semanas y *C3 bajo* que se normaliza.'
  ],
  ref:'Guías KDIGO sobre glomerulonefritis; Harrison, 21.ª ed.; Nelson, 22.ª ed.'
}

});
