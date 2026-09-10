/* ============================================================
   APUNTES 06 — Ginecología
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================================================== */
'infecciones-de-transmision-sexual': {
  tema:'Infecciones de transmisión sexual',
  bloque:'Ginecología y Obstetricia',
  min:6,
  idea:'Tratar a la paciente es media consulta: sin tratar a la pareja y sin cribar el resto, la infección vuelve.',
  claves:['infecciones de transmisión sexual','clamidia','gonococo','sífilis','vaginosis','tricomonas'],
  sigue:'enfermedad-inflamatoria-pelvica',
  secciones:[
    {
      t:'Flujo vaginal: tres cuadros y dos pruebas de mesa',
      p:[
        'El flujo se resuelve con dos datos sencillos: el pH vaginal y la prueba de aminas con hidróxido de potasio.',
        'La *vaginosis bacteriana* da flujo grisáceo, homogéneo, con olor a pescado que aumenta tras el coito, sin prurito ni inflamación, con pH mayor de 4,5 y prueba de aminas positiva; en el fresco se ven células clave. No es propiamente una infección de transmisión sexual sino un desequilibrio de la flora con pérdida de lactobacilos. Se trata con metronidazol.',
        'La *candidiasis* produce prurito intenso, flujo blanco grumoso y signos inflamatorios, con pH *normal*, por debajo de 4,5. La *tricomoniasis* da flujo amarillo-verdoso espumoso, prurito, pH alto y cérvix en fresa; esta sí es de transmisión sexual y exige tratar a la pareja.'
      ],
      foco:[
        'El pH separa la candidiasis (normal) de la vaginosis y la tricomoniasis (alto).',
        'Vaginosis y candidiasis no requieren tratar a la pareja; la tricomoniasis, sí.'
      ]
    },
    {
      t:'Úlceras genitales',
      p:[
        'El *chancro sifilítico* es una úlcera única, de bordes indurados, fondo limpio y característicamente *indolora*, con adenopatías regionales no dolorosas. Cura sola, y esa desaparición espontánea hace que muchos pacientes no consulten y la infección progrese.',
        'El *herpes genital* produce vesículas agrupadas que se ulceran, muy dolorosas y recurrentes. El *chancroide*, por Haemophilus ducreyi, da úlceras múltiples, dolorosas, de fondo sucio y con adenopatías dolorosas que pueden supurar.',
        'En la sífilis, la pauta depende del tiempo de evolución: una única dosis de penicilina benzatina de 2,4 millones en la sífilis precoz —menos de un año—, tres dosis semanales en la tardía o de duración desconocida, y penicilina intravenosa en la neurosífilis. En la *gestante* la penicilina es insustituible: si es alérgica, se desensibiliza, porque es lo único que previene la sífilis congénita.'
      ]
    },
    {
      t:'El manejo que no se puede olvidar',
      p:[
        'Cualquier infección de transmisión sexual obliga a lo mismo: *tratar a las parejas* sexuales de los últimos 60 días, indicar abstinencia hasta completar el tratamiento y la resolución de los síntomas, y *cribar las demás* —VIH, sífilis, hepatitis B, gonorrea y clamidia—, porque viajan juntas.',
        'En la clamidia se recomienda además repetir la prueba a los tres meses por la alta tasa de reinfección. No tratar a la pareja es la causa más frecuente de lo que parece un fracaso terapéutico y en realidad es una reinfección, y su precio son la enfermedad inflamatoria pélvica y la infertilidad tubárica.'
      ],
      alarma:[
        'Úlcera genital indolora: sospecha sífilis aunque el paciente no consulte por ella.',
        'Sífilis en el embarazo: penicilina, desensibilizando si hace falta.'
      ]
    }
  ],
  recordar:[
    'pH normal = candidiasis. pH alto + aminas = *vaginosis*. Espumoso verdoso = *tricomonas*.',
    'Chancro sifilítico: único, indurado e *indoloro*. Herpes: doloroso y recurrente.',
    'Sífilis precoz: *una* dosis de penicilina benzatina.',
    'Siempre: *tratar pareja* + cribar VIH, sífilis y hepatitis B.'
  ],
  ref:'Guías de los CDC sobre infecciones de transmisión sexual; Williams Ginecología, 4.ª ed.'
},

/* ==================================================== */
'enfermedad-inflamatoria-pelvica': {
  tema:'Enfermedad inflamatoria pélvica',
  bloque:'Ginecología y Obstetricia',
  min:4,
  idea:'El umbral para tratar debe ser bajo: las secuelas dependen del retraso, no de la certeza diagnóstica.',
  claves:['enfermedad inflamatoria pélvica','EPI','dolor a la movilización cervical','absceso tuboovárico'],
  sigue:'ciclo-ovarico-y-menstrual',
  secciones:[
    {
      t:'Criterios mínimos y por qué son mínimos',
      p:[
        'El diagnóstico es clínico. Los *criterios mínimos* son el dolor a la movilización cervical, el dolor uterino o el dolor anexial en una mujer joven con riesgo sexual. Con eso basta para iniciar tratamiento.',
        'La razón de un umbral tan bajo es aritmética: la infertilidad tubárica, el embarazo ectópico y el dolor pélvico crónico dependen directamente del tiempo que la infección estuvo sin tratar. El coste de tratar de más es bajo; el de tratar tarde, permanente.',
        'El tratamiento empírico cubre gonococo, clamidia y anaerobios. Se ingresa ante embarazo, absceso tuboovárico, intolerancia oral, mala respuesta al tratamiento ambulatorio o duda diagnóstica con abdomen agudo.'
      ],
      foco:[
        'Si hay dolor en hipocondrio derecho, piensa en el *síndrome de Fitz-Hugh-Curtis*: perihepatitis por diseminación, con adherencias en cuerdas de violín.',
        'Toda mujer en edad fértil con dolor pélvico necesita prueba de embarazo antes de nada.'
      ],
      alarma:[
        'Masa anexial dolorosa con fiebre: absceso tuboovárico, requiere ingreso.',
        'No tratar a la pareja garantiza la reinfección.'
      ]
    }
  ],
  recordar:[
    'Criterios *mínimos*: dolor a la movilización cervical, uterino o anexial.',
    'Trata *precozmente*: las secuelas dependen del retraso.',
    'Cubre gonococo, clamidia y *anaerobios*.',
    'Fitz-Hugh-Curtis: dolor en hipocondrio derecho.'
  ],
  ref:'Guías de los CDC sobre enfermedad inflamatoria pélvica.'
},

/* ==================================================== */
'ciclo-ovarico-y-menstrual': {
  tema:'Ciclo ovárico y ciclo menstrual',
  bloque:'Ginecología y Obstetricia',
  min:5,
  idea:'La fase lútea es fija y la folicular variable. De ahí sale el cálculo de la ovulación y la interpretación de casi todo lo demás.',
  claves:['ciclo menstrual','fase lútea','ovulación','estradiol','progesterona','LH'],
  sigue:'amenorrea',
  secciones:[
    {
      t:'Las dos fases y el pico de LH',
      p:[
        'En la *fase folicular*, la FSH recluta folículos y el dominante produce cantidades crecientes de estradiol, que hace proliferar el endometrio. Cuando ese estradiol se mantiene elevado durante unas 48 horas, la retroalimentación sobre la hipófisis se invierte de negativa a *positiva* y desencadena el *pico de LH*, que provoca la ovulación unas 34 a 36 horas después. Es la excepción más conocida a la regla general de la retroalimentación negativa.',
        'En la *fase lútea*, el cuerpo lúteo produce progesterona, que transforma el endometrio en secretor y lo prepara para la implantación. Si no hay embarazo, el cuerpo lúteo se atrofia, la progesterona cae y sobreviene la menstruación.',
        'El dato práctico decisivo es que el cuerpo lúteo tiene una vida media *fija* de unos 14 días: la fase lútea es constante y toda la variabilidad de la duración del ciclo está en la folicular. Por eso la ovulación se calcula restando 14 a la duración del ciclo, y no cae el día 14 salvo en ciclos de 28 días.'
      ],
      foco:[
        'Ciclo de 35 días → ovulación hacia el día *21*, no el 14.',
        'La progesterona en fase lútea media confirma que hubo ovulación.'
      ]
    }
  ],
  recordar:[
    'Folicular *variable*; lútea *fija* (≈14 días).',
    'Ovulación = duración del ciclo *menos 14*.',
    'El pico de LH lo desencadena el estradiol alto y sostenido: retroalimentación *positiva*.',
    'La caída de progesterona produce la menstruación.'
  ],
  ref:'Speroff, Endocrinología Ginecológica; Williams Ginecología, 4.ª ed.'
},

/* ==================================================== */
'amenorrea': {
  tema:'Amenorrea primaria y secundaria',
  bloque:'Ginecología y Obstetricia',
  min:6,
  idea:'Antes de cualquier estudio, prueba de embarazo. Después, dos preguntas: ¿hay útero y vía de salida?, ¿y qué dicen las gonadotropinas?',
  claves:['amenorrea','Rokitansky','Turner','prolactina','prueba de progesterona','gonadotropinas'],
  sigue:'sindrome-de-ovario-poliquistico',
  secciones:[
    {
      t:'Secundaria: la más frecuente',
      p:[
        'En la mujer en edad fértil, la causa más frecuente de amenorrea secundaria es el *embarazo*, y descartarlo es el primer paso obligado: evita estudios y tratamientos innecesarios o peligrosos.',
        'Descartado, la secuencia continúa con *TSH y prolactina*, que resuelven un buen número de casos. Después se valora el estado estrogénico y la permeabilidad del tracto de salida con la prueba de progesterona: si hay sangrado por deprivación, existe endometrio proliferado y salida permeable, lo que orienta a anovulación —el ovario poliquístico es la causa típica—. Si no sangra, se pasa a la prueba combinada con estrógenos y progesterona: si entonces sangra, el problema es de estímulo hormonal; si sigue sin sangrar, es uterino o del tracto de salida, como el síndrome de Asherman.',
        'Cuando el problema es de estímulo, las *gonadotropinas* localizan el nivel: altas indican fallo ovárico —insuficiencia ovárica primaria si ocurre antes de los 40—, y bajas o inapropiadamente normales indican causa hipotálamo-hipofisaria, como la amenorrea hipotalámica por bajo peso, ejercicio intenso o estrés, o una lesión selar.'
      ]
    },
    {
      t:'Primaria: dos cuadros que se confunden',
      p:[
        'En la amenorrea primaria hay dos diagnósticos que se parecen y que conviene separar con precisión, porque es una distinción muy preguntada.',
        'El *síndrome de Rokitansky* es la agenesia de los conductos de Müller: no hay útero ni tercio superior de la vagina, pero los ovarios son normales y funcionan. Por eso el desarrollo puberal es completo, el vello púbico es *normal*, la testosterona está en rango femenino y el cariotipo es 46,XX. Se asocia con frecuencia a malformaciones renales, que son una pista diagnóstica útil.',
        'El *síndrome de Morris*, o insensibilidad androgénica completa, tiene cariotipo 46,XY con testículos funcionantes, pero el receptor de andrógenos no responde: los genitales externos son femeninos, el vello púbico y axilar es *escaso*, la testosterona está en rango masculino, la talla es alta y las gonadotropinas están elevadas. No hay útero porque los testículos produjeron hormona antimülleriana, y hay que localizar y vigilar las gónadas por el riesgo de tumor germinal.',
        'El tercer cuadro clásico es el *síndrome de Turner*, 45,X: talla baja, cuello alado, ausencia de desarrollo puberal por disgenesia gonadal, gonadotropinas elevadas y malformaciones cardíacas y renales. Ante una niña con talla baja y pubertad ausente, hay que pedir cariotipo.'
      ],
      foco:[
        'El *vello púbico* separa Rokitansky (normal) de Morris (escaso).',
        'Himen imperforado: desarrollo puberal normal con dolor cíclico y sin sangrado visible.'
      ]
    }
  ],
  recordar:[
    'Primero, *prueba de embarazo*. Después TSH y prolactina.',
    'Gonadotropinas *altas* = fallo ovárico; *bajas* = hipotálamo-hipófisis.',
    'Rokitansky: 46,XX, vello normal, malformación renal.',
    'Morris: 46,XY, vello *escaso*, talla alta, testosterona masculina.',
    'Turner: 45,X, talla baja, cuello alado, cardiopatía.'
  ],
  ref:'Williams Ginecología, 4.ª ed.; guías de la American Society for Reproductive Medicine.'
},

/* ==================================================== */
'sindrome-de-ovario-poliquistico': {
  tema:'Síndrome de ovario poliquístico',
  bloque:'Ginecología y Obstetricia',
  min:5,
  idea:'Dos de tres criterios y siempre tras excluir otras causas. Y el tratamiento depende por completo de si la paciente busca embarazo o no.',
  claves:['SOP','ovario poliquístico','Rotterdam','hiperandrogenismo','anovulación','letrozol'],
  sigue:'endometriosis',
  secciones:[
    {
      t:'Los criterios de Rotterdam',
      p:[
        'Se requieren *dos de tres*: oligoovulación o anovulación, hiperandrogenismo clínico —hirsutismo, acné, alopecia— o bioquímico, y morfología ovárica poliquística en la ecografía. Y siempre después de excluir otras causas: hiperplasia suprarrenal congénita no clásica, hiperprolactinemia, disfunción tiroidea y tumores productores de andrógenos.',
        'El error más común es diagnosticarlo por la ecografía. La imagen es un criterio entre tres y por sí sola no define nada: hay mujeres sanas con ovarios de aspecto poliquístico.',
        'Detrás del síndrome hay resistencia a la insulina, lo que explica su asociación con obesidad, acantosis nigricans, dislipidemia y riesgo aumentado de diabetes tipo 2 y de enfermedad cardiovascular. El abordaje, por tanto, va más allá de la fertilidad e incluye el cribado metabólico.'
      ]
    },
    {
      t:'Tratar según el objetivo',
      p:[
        'Si la paciente *no busca embarazo*, el tratamiento se dirige a regularizar el ciclo, controlar el hiperandrogenismo y proteger el endometrio: anticonceptivos combinados, con antiandrógenos si el hirsutismo lo requiere. La protección endometrial no es un detalle: la anovulación crónica expone al endometrio a estrógenos sin oposición de progesterona, y eso aumenta el riesgo de hiperplasia y de carcinoma.',
        'Si *busca embarazo*, el primer paso es la pérdida de peso y el cambio de estilo de vida, que por sí solos pueden restablecer la ovulación. Cuando no basta, la inducción de la ovulación con *letrozol* se ha mostrado superior al citrato de clomifeno en tasas de nacido vivo. La metformina es coadyuvante, sobre todo si hay alteración del metabolismo de la glucosa.',
        'Preguntar por el deseo gestacional antes de prescribir parece obvio, pero es justo lo que se olvida: prescribir anticonceptivos a una mujer que busca embarazo es el error clásico de esta consulta.'
      ],
      alarma:[
        'Anovulación crónica sin protección endometrial: riesgo de hiperplasia y carcinoma.',
        'Hirsutismo de instauración rápida con virilización: sospecha tumor productor de andrógenos, no ovario poliquístico.'
      ]
    }
  ],
  recordar:[
    'Rotterdam: *dos de tres*, tras excluir otras causas.',
    'La ecografía sola *no* diagnostica.',
    'Sin deseo gestacional: anticonceptivos + protección endometrial.',
    'Con deseo gestacional: peso y estilo de vida, después *letrozol*.',
    'Cribar riesgo metabólico.'
  ],
  ref:'Guía internacional basada en la evidencia sobre SOP; consenso de Rotterdam.'
},

/* ==================================================== */
'endometriosis': {
  tema:'Endometriosis',
  bloque:'Ginecología y Obstetricia',
  min:5,
  idea:'Dolor cíclico que empeora con los años en una mujer joven, más infertilidad. El retraso diagnóstico se mide en años, y cuesta fertilidad.',
  claves:['endometriosis','dismenorrea','dispareunia','endometrioma','ESHRE'],
  sigue:'papanicolaou-y-tamizaje',
  secciones:[
    {
      t:'El patrón clínico',
      p:[
        'La endometriosis es la presencia de tejido endometrial fuera de la cavidad uterina, y su clínica se organiza en torno al dolor *cíclico*: dismenorrea que empeora con los años y deja de responder a los antiinflamatorios, dispareunia profunda, disquecia y disuria cíclicas, y con frecuencia infertilidad.',
        'Esa tétrada —dismenorrea progresiva, dispareunia, disquecia, infertilidad— debería bastar para sospecharla. El problema es que el dolor menstrual se normaliza socialmente, y el retraso diagnóstico medio se cuenta en años.',
        'La ecografía transvaginal es la primera prueba de imagen y detecta bien los endometriomas ováricos y la enfermedad profunda; la resonancia amplía el mapeo prequirúrgico. La laparoscopia ya no se exige para iniciar tratamiento médico empírico.'
      ]
    },
    {
      t:'Tratar el dolor sin quemar la fertilidad',
      p:[
        'El tejido endometriósico responde a los estrógenos, de modo que el tratamiento médico busca suprimir el estímulo cíclico: anticonceptivos combinados en pauta continua o progestágenos como el dienogest, junto con antiinflamatorios. Los análogos de la GnRH se reservan para el fracaso de la primera línea y requieren terapia añadida por la pérdida de masa ósea.',
        'La cirugía se plantea ante fracaso del tratamiento médico, endometriomas grandes o afectación de otros órganos, y siempre conservando lo posible: la endometriosis recidiva, y cada intervención sobre el ovario reduce la reserva ovárica. En la paciente con deseo gestacional, la decisión se toma junto con reproducción asistida.'
      ],
      alarma:[
        'No normalizar el dolor menstrual incapacitante: es motivo de estudio.',
        'Cirugía repetida sobre el ovario: cada una cuesta reserva ovárica.'
      ]
    }
  ],
  recordar:[
    'Tétrada: *dismenorrea progresiva, dispareunia, disquecia, infertilidad*.',
    'Primera imagen: *ecografía transvaginal*.',
    'Primera línea médica: anticonceptivos continuos o *progestágenos*.',
    'La cirugía recidiva y cuesta reserva ovárica.'
  ],
  ref:'Guía ESHRE sobre endometriosis; Williams Ginecología, 4.ª ed.'
},

/* ==================================================== */
'papanicolaou-y-tamizaje': {
  tema:'Papanicolaou y tamizaje cervical',
  bloque:'Ginecología y Obstetricia',
  min:5,
  idea:'La citología criba, la colposcopia con biopsia diagnostica. Y el VPH persistente de alto riesgo es causa necesaria: sin él no hay cáncer de cuello.',
  claves:['Papanicolaou','citología','VPH','colposcopia','lesión intraepitelial','conización'],
  sigue:'cancer-de-mama',
  secciones:[
    {
      t:'El VPH es la causa, no un factor más',
      p:[
        'La infección persistente por genotipos oncogénicos del virus del papiloma humano, sobre todo el 16 y el 18, es *causa necesaria* del cáncer cervicouterino: sin ella no se produce. El tabaquismo, la multiparidad, el uso prolongado de anticonceptivos orales, la inmunodepresión y otras infecciones de transmisión sexual son cofactores que aumentan la probabilidad de persistencia y progresión, pero ninguno produce el cáncer por sí solo.',
        'Entender esa jerarquía explica por qué la vacunación y el cribado con prueba de VPH son tan eficaces, y por qué esta es de las pocas neoplasias que puede eliminarse como problema de salud pública.',
        'La *prueba de VPH* está desplazando a la citología como cribado primario porque es más sensible para las lesiones de alto grado y su valor predictivo negativo es muy alto, lo que permite espaciar el cribado a cinco años con seguridad. Su menor especificidad se compensa con estrategias de triaje. Un VPH positivo no significa cáncer: la mayoría de las infecciones se resuelven solas, y lo relevante es la persistencia.'
      ]
    },
    {
      t:'Qué hacer con un resultado alterado',
      p:[
        'La citología es una prueba de *cribado* y nunca establece el diagnóstico. Ante una lesión intraepitelial de alto grado hay que pasar a la *colposcopia con biopsia dirigida*, que confirma la histología y delimita la lesión; según el resultado se indica tratamiento escisional, habitualmente conización con asa.',
        'Repetir la citología en una lesión de alto grado permitiría la progresión a carcinoma invasor, y la histerectomía no es el tratamiento de una lesión preinvasora. En las lesiones de bajo grado y en las alteraciones menores, el manejo se basa en el riesgo estimado y puede incluir seguimiento.'
      ],
      alarma:[
        'Alto grado en citología: colposcopia, no repetición.',
        'Sangrado poscoital o cérvix con lesión visible: se biopsia, aunque la citología sea normal.'
      ]
    }
  ],
  recordar:[
    'VPH persistente de alto riesgo = *causa necesaria*.',
    'Citología = cribado. *Colposcopia con biopsia* = diagnóstico.',
    'La prueba de VPH es más *sensible* y permite intervalos más largos.',
    'VPH positivo no es cáncer: importa la *persistencia*.'
  ],
  ref:'OMS, estrategia para eliminar el cáncer cervicouterino; guías de la ASCCP.'
},

/* ==================================================== */
'cancer-de-mama': {
  tema:'Cáncer de mama',
  bloque:'Ginecología y Obstetricia',
  min:6,
  idea:'La clínica sospechosa manda sobre la imagen normal. Y la biología del tumor decide el tratamiento tanto como su extensión.',
  claves:['cáncer de mama','mamografía','BI-RADS','receptores hormonales','HER2','biopsia'],
  sigue:'anatomia-del-aparato-reproductor-femenino',
  secciones:[
    {
      t:'La triple evaluación',
      p:[
        'El nódulo mamario se estudia con tres herramientas: *clínica, imagen e histología*. Basta con que una sea sospechosa para seguir adelante. Un nódulo duro, de bordes irregulares y fijo a planos exige biopsia aunque la mamografía se informe como benigna, porque la mamografía pasa por alto un porcentaje de cánceres palpables, sobre todo en mamas densas.',
        'La imagen se elige según la edad: en la mujer joven, con mama densa, la prueba inicial es la *ecografía*; en la mayor, la mamografía. Y las características clínicas orientan: el fibroadenoma de la mujer joven es móvil, elástico y bien delimitado, mientras que las señales de alarma son la fijación, la retracción de la piel o el pezón, la piel de naranja, la telorrea sanguinolenta unilateral y las adenopatías axilares duras.'
      ],
      foco:[
        'Un BI-RADS benigno no cierra el caso si la clínica es sospechosa.',
        'Cribado poblacional: *mamografía* periódica. La autoexploración no ha demostrado reducir la mortalidad, aunque conocer el propio cuerpo ayuda a consultar antes.'
      ]
    },
    {
      t:'La biopsia decide el tratamiento',
      p:[
        'El perfil inmunohistoquímico define el subtipo biológico y con él la estrategia. Los tumores con *receptores hormonales* positivos se benefician de hormonoterapia —tamoxifeno en la premenopáusica, inhibidores de aromatasa en la posmenopáusica—. Los *HER2 positivos*, de terapia dirigida con trastuzumab. Los *triple negativos* dependen fundamentalmente de la quimioterapia. El *Ki-67* estima la proliferación y ayuda a decidir la quimioterapia en los hormonosensibles.',
        'Por eso decidir solo por el estadio es insuficiente: dos tumores del mismo tamaño pueden requerir tratamientos completamente distintos según su biología.'
      ],
      alarma:[
        'Mama roja, caliente y con piel de naranja que no responde a antibiótico: descarta carcinoma inflamatorio.',
        'Telorrea sanguinolenta unilateral: se estudia.'
      ]
    }
  ],
  recordar:[
    'Triple evaluación: *clínica + imagen + histología*; una sospechosa basta.',
    'Mujer joven: *ecografía* primero.',
    'Perfil: *receptores hormonales, HER2 y Ki-67* deciden el tratamiento.',
    'La clínica sospechosa manda sobre una imagen normal.'
  ],
  ref:'Guías NCCN y ESMO sobre cáncer de mama; Williams Ginecología, 4.ª ed.'
},

/* ==================================================== */
'anatomia-del-aparato-reproductor-femenino': {
  tema:'Anatomía del aparato reproductor femenino',
  bloque:'Ginecología y Obstetricia',
  min:4,
  idea:'La anatomía se estudia aquí por sus consecuencias: dónde se lesiona el uréter, por dónde se disemina un tumor y por qué duele el hombro en un hemoperitoneo.',
  claves:['anatomía','útero','uréter','ligamento','fondo de saco de Douglas','irrigación'],
  sigue:'metodos-anticonceptivos',
  secciones:[
    {
      t:'Las relaciones que importan en el quirófano',
      p:[
        'La relación más citada, y la que más consecuencias tiene, es la del *uréter con la arteria uterina*: el uréter pasa por *debajo* de la arteria, a aproximadamente 1,5 a 2 centímetros del cuello uterino, en el parametrio. Se recuerda con la frase "el agua pasa por debajo del puente", y explica que la lesión ureteral sea una de las complicaciones más temidas de la histerectomía. Identificar el trayecto antes de ligar los pedículos es un paso obligado de la técnica.',
        'El *fondo de saco de Douglas*, entre el útero y el recto, es el punto más declive de la cavidad peritoneal en bipedestación: allí se acumulan sangre y pus, y por eso es accesible a la punción y relevante en la endometriosis profunda.',
        'La irrigación llega por la arteria uterina, rama de la ilíaca interna, y por la arteria ovárica, que nace directamente de la aorta; el drenaje venoso ovárico derecho va a la cava y el izquierdo a la vena renal izquierda, un detalle que explica algunas trombosis y varicoceles del lado izquierdo.'
      ],
      foco:[
        'Uréter *por debajo* de la arteria uterina: la lesión puede pasar inadvertida en el acto quirúrgico y manifestarse días después.',
        'La sangre en el peritoneo irrita el diafragma y produce dolor referido al *hombro*: útil en el ectópico roto.'
      ]
    },
    {
      t:'Sostén pélvico y drenaje linfático',
      p:[
        'El útero se sostiene por los ligamentos uterosacros y cardinales, y el suelo pélvico por el elevador del ano y la fascia endopélvica. El debilitamiento de ese sostén, favorecido por los partos vaginales, la edad, la menopausia, la obesidad y el aumento crónico de la presión abdominal, produce el *prolapso* y la incontinencia de esfuerzo. Entenderlo explica por qué la rehabilitación del suelo pélvico funciona.',
        'El drenaje linfático orienta la diseminación tumoral: el cuello y el cuerpo uterino drenan principalmente a los ganglios pélvicos, el ovario sigue su pedículo hacia los paraaórticos, y la vulva drena a los inguinales superficiales, lo que determina la cirugía ganglionar en cada caso.'
      ]
    }
  ],
  recordar:[
    '*El agua pasa por debajo del puente*: uréter bajo la arteria uterina.',
    'Douglas: punto más declive, acumula sangre y pus.',
    'Hemoperitoneo → dolor referido al *hombro*.',
    'Ovario drena a *paraaórticos*; vulva a *inguinales*.'
  ],
  ref:'Netter, Atlas de Anatomía Humana; Williams Ginecología, 4.ª ed., anatomía quirúrgica pélvica.'
},

/* ==================================================== */
'metodos-anticonceptivos': {
  tema:'Métodos anticonceptivos',
  bloque:'Ginecología y Obstetricia',
  min:6,
  idea:'Lo que importa en la consulta no es la eficacia teórica sino la real, y esa depende de que el método no dependa de la memoria de nadie.',
  claves:['anticoncepción','anticonceptivo','DIU','implante','levonorgestrel','criterios de elegibilidad'],
  sigue:'trastornos-hipotensivos-del-embarazo',
  secciones:[
    {
      t:'Eficacia teórica y eficacia real',
      p:[
        'Los métodos reversibles de acción prolongada —el *dispositivo intrauterino* de cobre o con levonorgestrel y el *implante subdérmico*— tienen las tasas de fallo más bajas de todos los reversibles, comparables a la esterilización. La razón no es que sean más potentes, sino que su eficacia no depende del uso correcto y sistemático por parte de la usuaria.',
        'La píldora combinada es muy eficaz si se toma perfectamente todos los días, pero en la práctica el olvido eleva bastante su tasa de fallo. Esa diferencia entre eficacia teórica y eficacia en uso real es lo que hay que explicar en la consulta.',
        'Y el preservativo cumple una función que ningún otro método tiene: es el único que protege frente a infecciones de transmisión sexual, de modo que su indicación es independiente del método anticonceptivo elegido.'
      ]
    },
    {
      t:'Elegir con seguridad',
      p:[
        'Los *criterios médicos de elegibilidad* de la OMS clasifican cada método frente a cada condición en cuatro categorías, de uso sin restricción a riesgo inaceptable. La combinación que más se pregunta y más se olvida en la práctica es la mujer de *35 años o más que fuma 15 o más cigarrillos al día*: es categoría 4 para los anticonceptivos combinados, por el riesgo trombótico, de infarto y de ictus que suma el estrógeno al tabaco. Preguntar por el tabaco antes de prescribir cuesta un segundo.',
        'Otras situaciones que contraindican los combinados son el antecedente de tromboembolismo, la migraña con aura, la hipertensión no controlada, el cáncer de mama y la hepatopatía grave. En esos casos las alternativas son los métodos con progestágeno solo, el dispositivo intrauterino y los de barrera.',
        'La *anticoncepción de emergencia* con levonorgestrel actúa retrasando o inhibiendo la ovulación, de modo que su eficacia depende del momento del ciclo y del tiempo transcurrido: cuanto antes, mejor. No es abortiva y no interrumpe un embarazo implantado. Cuando han pasado más días o se busca mayor eficacia, el dispositivo intrauterino de cobre es la opción más eficaz, hasta cinco días después.'
      ],
      alarma:[
        'Mayor de 35 años y fumadora: nada de estrógenos.',
        'Migraña con aura: contraindica los combinados.'
      ]
    }
  ],
  recordar:[
    'LARC (*DIU e implante*): la eficacia no depende del cumplimiento.',
    'Preservativo: el único que protege de *infecciones*.',
    '≥35 años + ≥15 cigarrillos = *categoría 4* para combinados.',
    'Levonorgestrel de emergencia: retrasa la *ovulación*, no es abortivo.'
  ],
  ref:'OMS, Criterios médicos de elegibilidad para el uso de anticonceptivos, 5.ª ed.'
},

/* ==================================================== */
'trastornos-hipotensivos-del-embarazo': {
  tema:'Trastornos hipotensivos del embarazo',
  bloque:'Ginecología y Obstetricia',
  min:5,
  idea:'La gestante compensa muy bien y se desploma tarde. Cuando la presión cae, la pérdida ya es grande.',
  claves:['hipotensión','shock','hemorragia obstétrica','compresión aortocava','sepsis'],
  sigue:'atencion-al-recien-nacido',
  secciones:[
    {
      t:'La hipotensión fisiológica y la postural',
      p:[
        'Durante la gestación la presión arterial *baja* de forma fisiológica por la caída de las resistencias periféricas, con el mínimo hacia la mitad del segundo trimestre. Es normal y no requiere tratamiento; lo que exige es no confundirla con patología ni, al revés, dejar de reconocer una hipertensión enmascarada por ella.',
        'El *síndrome de hipotensión supina* aparece en el tercer trimestre cuando la gestante se coloca boca arriba: el útero comprime la vena cava inferior, cae el retorno venoso y aparecen mareo, palidez, sudoración e hipotensión, con posible sufrimiento fetal. Se corrige lateralizando a la paciente hacia la izquierda. De ahí que toda gestante se explore, se traslade y se reanime en *decúbito lateral izquierdo*, o desplazando manualmente el útero.'
      ],
      foco:[
        'Antes de buscar causas complicadas de hipotensión en el tercer trimestre, cambia a la paciente de posición.'
      ]
    },
    {
      t:'Cuando la hipotensión es shock',
      p:[
        'La gestante tiene un volumen plasmático aumentado y compensa la hemorragia mucho mejor que una mujer no embarazada: puede perder una parte importante de su volemia manteniendo la presión arterial. Por eso la hipotensión es un signo *tardío*, y hay que actuar antes, con la taquicardia, el estrechamiento de la presión de pulso, la palidez y la alteración del estado mental.',
        'Las causas obstétricas de shock hipovolémico son la hemorragia posparto —con la atonía uterina a la cabeza—, el desprendimiento de placenta con hemorragia oculta, la placenta previa, la rotura uterina y el embarazo ectópico roto. En la hemorragia posparto, la palpación del útero es el gesto que orienta en segundos: si está blando y elevado, es atonía, y se responde con masaje y uterotónicos.',
        'También hay que considerar el *shock séptico* de origen obstétrico —corioamnionitis, endometritis, aborto séptico— y, aunque es raro, la embolia de líquido amniótico, con colapso brusco, hipoxemia y coagulopatía.'
      ],
      alarma:[
        'Hipotensión en la gestante: la pérdida ya es importante. No esperes más.',
        'Reanimación de la embarazada: desplazar el útero a la izquierda mejora el retorno venoso y la eficacia de las compresiones.'
      ]
    }
  ],
  recordar:[
    'La presión baja de forma *fisiológica* en el segundo trimestre.',
    'Hipotensión supina: compresión de la cava → *decúbito lateral izquierdo*.',
    'La gestante compensa: la hipotensión es signo *tardío* de hemorragia.',
    'Ante hemorragia posparto, *palpa el útero*: blando = atonía.'
  ],
  ref:'Williams Obstetricia, 26.ª ed.; OMS, hemorragia posparto; guías de reanimación de la gestante.'
}

});
