/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 10 (lote 1)
   Cubre ANATOMIA PATOLOGICA II al estandar extenso (3 secciones,
   ~200-300 palabras por seccion, min 13-14). Primera materia del
   ciclo clinico, primera de cuatrimestre 10.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== ANATOMIA PATOLOGICA II ==================== */
'patologia-cardiovascular': {
  tema:'Patología cardiovascular',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'Casi toda la patología cardiovascular grave comparte una raíz común: la aterosclerosis, un proceso que empieza décadas antes de que produzca su primer síntoma. Entender esa raíz explica por qué el infarto, el ictus y la enfermedad arterial periférica suelen aparecer juntos en el mismo paciente.',
  claves:['aterosclerosis','infarto de miocardio','miocardiopatía','endocarditis'],
  sigue:'patologia-respiratoria',
  secciones:[
    {
      t:'La aterosclerosis: el proceso de fondo',
      p:[
        'La *aterosclerosis* es un proceso inflamatorio crónico de la pared arterial, iniciado por el depósito de lípidos (sobre todo LDL oxidada) en la íntima, que atrae macrófagos y forma células espumosas, el núcleo de la placa ateromatosa. Con el tiempo, la placa desarrolla una cápsula fibrosa; si esa cápsula se rompe, el contenido lipídico trombogénico queda expuesto a la sangre, formando un trombo que puede ocluir la luz del vaso de forma súbita -el mecanismo detrás de la mayoría de los infartos agudos, no un estrechamiento gradual y silencioso como suele imaginarse.',
        'Los factores de riesgo ya vistos en Medicina Preventiva (tabaquismo, hipertensión, diabetes, dislipidemia) actúan precisamente acelerando este proceso: dañan el endotelio, favorecen la oxidación lipídica o mantienen un estado inflamatorio sostenido que alimenta el crecimiento de la placa.'
      ]
    },
    {
      t:'Infarto de miocardio: de la oclusión al tejido muerto',
      p:[
        'El *infarto de miocardio* ocurre cuando la oclusión de una arteria coronaria interrumpe el flujo sanguíneo a un territorio del músculo cardíaco el tiempo suficiente para causar muerte celular irreversible -retomando la necrosis ya vista en Anatomía Patológica I, aquí específicamente necrosis de coagulación por isquemia. La extensión del daño depende de qué arteria se ocluyó, en qué punto de su trayecto, y de cuánto tiempo pasó antes de restablecer el flujo: cada minuto de isquemia sostenida mata más miocardio.',
        'Con el tiempo, el tejido necrótico es reemplazado por una cicatriz fibrosa, incapaz de contraerse: un infarto extenso deja al corazón con menos masa muscular funcional, lo que puede progresar hacia insuficiencia cardíaca, incluso meses después del evento agudo.'
      ]
    },
    {
      t:'Miocardiopatías y endocarditis: cuando el problema no es la coronaria',
      p:[
        'Las *miocardiopatías* son enfermedades del músculo cardíaco en sí, no de sus arterias: la dilatada (el corazón se agranda y bombea débilmente), la hipertrófica (el músculo se engrosa de forma anormal, a veces obstruyendo el flujo de salida) y la restrictiva (el músculo se vuelve rígido, dificultando el llenado) tienen mecanismos y pronósticos distintos, aunque las tres puedan terminar en insuficiencia cardíaca.',
        'La *endocarditis* es la infección del endocardio, típicamente sobre una válvula cardíaca, formando vegetaciones (masas de fibrina, plaquetas y microorganismos) que pueden destruir la válvula o desprenderse como émbolos sépticos hacia otros órganos -un mecanismo que conecta directamente con la fiebre de origen desconocido y los soplos cardíacos nuevos en un paciente con factores de riesgo como válvulas protésicas o uso de drogas intravenosas.'
      ],
      foco:[
        '*Consideración clínica*: la aterosclerosis rara vez afecta un solo territorio vascular; un paciente con enfermedad coronaria significativa tiene, con alta probabilidad, el mismo proceso avanzando en sus arterias cerebrales y periféricas, aunque todavía no haya dado síntomas ahí.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 11-12.'
},

'patologia-respiratoria': {
  tema:'Patología respiratoria',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'El pulmón tiene un repertorio limitado de respuestas frente a agresiones muy distintas: se inflama, se llena de líquido, se fibrosa o forma tumores. Reconocer cuál de estos patrones está ocurriendo, más que memorizar cada enfermedad por separado, es lo que permite razonar la patología respiratoria.',
  claves:['neumonía','enfisema','carcinoma pulmonar','fibrosis pulmonar'],
  sigue:'patologia-tracto-gastrointestinal',
  secciones:[
    {
      t:'Neumonía: la respuesta inflamatoria aguda',
      p:[
        'La *neumonía* es la inflamación aguda del parénquima pulmonar, típicamente infecciosa, que llena los espacios alveolares de exudado inflamatorio -líquido, neutrófilos, fibrina- en vez de aire. Este proceso puede seguir un patrón lobar (consolidación de un lóbulo entero, clásicamente por neumococo) o bronconeumónico (parches dispersos alrededor de los bronquios), una distinción que retoma directamente la clasificación de neumonía ya vista en Microbiología Médica.',
        'La consecuencia funcional es directa: el alvéolo lleno de exudado no puede intercambiar gases con normalidad, lo que explica la hipoxemia clínica del paciente con neumonía, incluso antes de que la infección se resuelva del todo.'
      ]
    },
    {
      t:'Enfisema: destrucción del parénquima, no inflamación aguda',
      p:[
        'El *enfisema* es la destrucción permanente de las paredes alveolares, con agrandamiento anormal de los espacios aéreos distales al bronquiolo terminal, típicamente causado por la exposición crónica al humo del tabaco: las enzimas proteolíticas liberadas por la inflamación crónica degradan la elastina del tejido pulmonar más rápido de lo que el cuerpo puede repararla.',
        'Esta destrucción reduce la superficie total disponible para el intercambio gaseoso y, al perderse el soporte elástico que mantiene abiertas las vías aéreas pequeñas durante la espiración, atrapa aire -el mecanismo detrás de la hiperinsuflación característica del enfisema, distinto del mecanismo puramente inflamatorio de la neumonía.'
      ]
    },
    {
      t:'Carcinoma pulmonar y fibrosis: dos desenlaces crónicos distintos',
      p:[
        'El *carcinoma pulmonar* se clasifica principalmente en dos grandes grupos con comportamiento e implicaciones terapéuticas distintas: el carcinoma de células no pequeñas (adenocarcinoma, epidermoide, de células grandes), de crecimiento relativamente más lento, y el carcinoma de células pequeñas, de crecimiento agresivo y con frecuencia ya diseminado al momento del diagnóstico. El tabaquismo es, por mucho, el factor de riesgo más determinante para ambos grupos.',
        'La *fibrosis pulmonar* es el reemplazo progresivo del tejido pulmonar normal por tejido cicatricial rígido, que reduce la distensibilidad del pulmón y dificulta tanto la ventilación como el intercambio gaseoso -a diferencia del enfisema, donde el problema es la pérdida de tejido, en la fibrosis el problema es un exceso de tejido, pero igualmente disfuncional.'
      ],
      foco:[
        '*Consideración clínica*: distinguir un patrón obstructivo (enfisema, donde el aire entra pero cuesta salir) de uno restrictivo (fibrosis, donde el pulmón simplemente no se expande bien) es la primera pregunta ante cualquier prueba de función pulmonar anormal, antes de buscar la causa específica.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 15.'
},

'patologia-tracto-gastrointestinal': {
  tema:'Patología del tracto gastrointestinal',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'El tracto gastrointestinal es un tubo largo con funciones muy distintas en cada segmento, y su patología cambia de la misma forma: lo que amenaza al estómago (ácido) no es lo que amenaza al colon (inflamación crónica y neoplasia).',
  claves:['gastritis','enfermedad inflamatoria intestinal','pólipo colónico','carcinoma colorrectal'],
  sigue:'patologia-hepatica-vias-biliares',
  secciones:[
    {
      t:'Gastritis: cuando la mucosa pierde su protección',
      p:[
        'La *gastritis* es la inflamación de la mucosa gástrica, que ocurre cuando se rompe el equilibrio entre los factores agresivos (ácido, pepsina, Helicobacter pylori, antiinflamatorios no esteroideos) y los factores protectores (moco, bicarbonato, flujo sanguíneo de la mucosa) ya introducido conceptualmente en Farmacología al hablar del riesgo gástrico de los AINE.',
        'La infección por *Helicobacter pylori* es la causa más frecuente de gastritis crónica a nivel mundial, y su persistencia a largo plazo se asocia con un riesgo aumentado de úlcera péptica y, en un subgrupo de pacientes, de carcinoma gástrico -una progresión que hace de la erradicación de esta bacteria una intervención con impacto real sobre el riesgo oncológico, no solo sintomático.'
      ]
    },
    {
      t:'Enfermedad inflamatoria intestinal: dos patrones distintos',
      p:[
        'La *enfermedad inflamatoria intestinal* agrupa dos condiciones con patrones anatómicos distintos: la enfermedad de Crohn, que puede afectar cualquier segmento del tracto digestivo (de la boca al ano) de forma discontinua ("en parches", con zonas sanas entre zonas afectadas) y con inflamación transmural (que atraviesa todo el espesor de la pared), y la colitis ulcerosa, que se limita al colon y afecta la mucosa de forma continua, empezando siempre en el recto y extendiéndose proximalmente sin zonas sanas intermedias.',
        'Esta diferencia de patrón no es un detalle académico: explica por qué el Crohn puede formar fístulas y estenosis (por la inflamación transmural que compromete todo el espesor de la pared) mientras que la colitis ulcerosa, limitada a la mucosa, tiene un riesgo distinto de complicaciones y responde de forma diferente a la cirugía.'
      ]
    },
    {
      t:'De pólipo a carcinoma: una secuencia conocida',
      p:[
        'Un *pólipo colónico* es un crecimiento anormal que protruye hacia la luz del colon; no todos los pólipos tienen el mismo riesgo -los pólipos hiperplásicos son generalmente benignos sin potencial maligno relevante, mientras que los pólipos adenomatosos sí tienen potencial de progresar hacia cáncer, especialmente si son grandes o tienen ciertas características histológicas.',
        'El *carcinoma colorrectal* se desarrolla, en la gran mayoría de los casos, siguiendo esta secuencia adenoma-carcinoma: mutaciones acumuladas transforman progresivamente un pólipo adenomatoso benigno en un carcinoma invasivo a lo largo de años -el fundamento biológico que justifica los programas de tamizaje colonoscópico ya vistos en Medicina Preventiva, que buscan y extirpan pólipos adenomatosos antes de que completen esa transformación.'
      ],
      foco:[
        '*Consideración clínica*: reconocer que el cáncer colorrectal casi siempre pasa primero por una fase de pólipo detectable y extirpable es lo que justifica todo el programa de tamizaje colonoscópico como intervención de prevención secundaria de alto impacto real.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 17.'
},

'patologia-hepatica-vias-biliares': {
  tema:'Patología hepática y de vías biliares',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'El hígado tiene una capacidad de regeneración notable, pero cuando el daño es repetido y sostenido, esa misma capacidad de reparación termina produciendo cicatrices que reemplazan al tejido funcional -la lógica detrás de la cirrosis, el desenlace final de casi cualquier enfermedad hepática crónica.',
  claves:['cirrosis hepática','hepatitis','colelitiasis','carcinoma hepatocelular'],
  sigue:'patologia-renal-vias-urinarias',
  secciones:[
    {
      t:'Hepatitis: la inflamación que puede volverse crónica',
      p:[
        'La *hepatitis* es la inflamación del hígado, con causas muy diversas: viral (los virus de hepatitis A a E, cada uno con un mecanismo de transmisión y un potencial de cronicidad distinto), por alcohol, por fármacos, o autoinmune. Las hepatitis A y E son típicamente autolimitadas, mientras que las hepatitis B y C tienen un riesgo relevante de volverse crónicas, manteniendo la inflamación activa durante años sin que el paciente lo perciba con claridad.',
        'Este carácter silencioso de la hepatitis crónica es clínicamente importante: un paciente puede tener años de daño hepático progresivo con síntomas mínimos o inespecíficos, hasta que la enfermedad ya está avanzada -razón por la cual el tamizaje de hepatitis B y C en poblaciones de riesgo tiene valor real.'
      ]
    },
    {
      t:'Cirrosis: el desenlace común de la lesión crónica sostenida',
      p:[
        'La *cirrosis hepática* es el reemplazo difuso del tejido hepático normal por nódulos de regeneración rodeados de fibrosis, el resultado final de una lesión hepática crónica sostenida, sin importar cuál fue la causa original (hepatitis viral crónica, alcohol, hígado graso no alcohólico). Esta arquitectura distorsionada tiene dos consecuencias principales: pérdida de la función hepática normal (síntesis de proteínas, metabolismo de fármacos, eliminación de toxinas) e hipertensión portal, por la resistencia que los nódulos fibrosos oponen al flujo sanguíneo a través del hígado.',
        'La hipertensión portal resultante explica muchas de las complicaciones clásicas de la cirrosis avanzada: várices esofágicas (por la sangre buscando rutas alternativas para evitar el hígado), ascitis, y esplenomegalia -todas consecuencias mecánicas de esa resistencia al flujo, no de la pérdida de función hepática en sí.'
      ]
    },
    {
      t:'Colelitiasis y carcinoma hepatocelular',
      p:[
        'La *colelitiasis* (cálculos biliares) se forma típicamente por un desequilibrio en la composición de la bilis, con exceso de colesterol relativo a las sales biliares y la lecitina que normalmente lo mantienen en solución; estos cálculos pueden permanecer asintomáticos, causar cólico biliar al obstruir transitoriamente el conducto cístico, o migrar hacia el colédoco causando ictericia obstructiva -retomando la ictericia quirúrgica que se ve en Semiología Quirúrgica.',
        'El *carcinoma hepatocelular* es el tumor primario más frecuente del hígado, y se desarrolla predominantemente sobre un hígado ya dañado por cirrosis, sin importar la causa original de esa cirrosis: la regeneración celular constante y sostenida en un hígado cirrótico aumenta la probabilidad acumulada de mutaciones que eventualmente originan un tumor maligno.'
      ],
      foco:[
        '*Consideración clínica*: en un paciente con cirrosis conocida, cualquier deterioro clínico nuevo o hallazgo hepático nuevo en imagen debe hacer pensar en carcinoma hepatocelular, no asumirse automáticamente como progresión de la enfermedad de base.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 18.'
},

'patologia-renal-vias-urinarias': {
  tema:'Patología renal y de vías urinarias',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'El riñón puede lesionarse en tres compartimentos distintos -el glomérulo, el túbulo/intersticio, o el sistema colector- y el compartimento afectado determina casi por completo cómo se presenta clínicamente la enfermedad.',
  claves:['glomerulonefritis','pielonefritis','carcinoma renal','nefropatía diabética'],
  sigue:'patologia-sistema-endocrino',
  secciones:[
    {
      t:'Glomerulonefritis: cuando el filtro se inflama',
      p:[
        'La *glomerulonefritis* es la inflamación del glomérulo, la unidad de filtración del riñón ya estudiada en Fisiología II, y puede tener mecanismos muy distintos -desde depósito de inmunocomplejos hasta ataque autoinmune directo contra estructuras del glomérulo. El resultado funcional común es un filtro dañado que deja pasar lo que no debería (proteínas, glóbulos rojos hacia la orina) y, según la severidad, reduce la capacidad de filtración en su conjunto.',
        'Clínicamente, esto se traduce en dos grandes síndromes: el síndrome nefrítico (hematuria, hipertensión, cierto grado de disminución de la filtración) cuando predomina la inflamación aguda, y el síndrome nefrótico (proteinuria masiva, edema, hipoalbuminemia) cuando predomina el daño a la barrera de filtración de proteínas -distinguir cuál síndrome predomina orienta directamente hacia el tipo de glomerulonefritis subyacente.'
      ]
    },
    {
      t:'Pielonefritis: la infección que sube desde la vía urinaria',
      p:[
        'La *pielonefritis* es la infección del parénquima renal y del sistema colector, típicamente por bacterias que ascienden desde la vejiga a través del uréter -un mecanismo ascendente, a diferencia de la glomerulonefritis, que casi nunca es infecciosa directa. Esto explica por qué la pielonefritis se presenta con fiebre, dolor en el flanco y síntomas urinarios bajos previos, un cuadro clínico distinto al de la glomerulonefritis.',
        'Episodios repetidos de pielonefritis, especialmente si hay una anomalía anatómica subyacente que facilita el reflujo o la obstrucción del flujo urinario, pueden causar cicatrización renal progresiva y, con el tiempo, comprometer la función renal de forma permanente.'
      ]
    },
    {
      t:'Carcinoma renal y nefropatía diabética',
      p:[
        'El *carcinoma renal* con frecuencia se descubre de forma incidental en un estudio de imagen realizado por otra razón, precisamente porque puede crecer de forma silenciosa durante mucho tiempo antes de dar la tríada clásica (pero poco frecuente en la práctica) de dolor en el flanco, masa palpable y hematuria -un recordatorio de que la presentación "de libro" de una enfermedad no siempre es la más común en la práctica real.',
        'La *nefropatía diabética* es la complicación renal crónica de la diabetes mellitus, ya introducida conceptualmente en Fisiopatología y en el manejo de la diabetes visto en Farmacoterapéutica: el daño microvascular sostenido por la hiperglucemia crónica afecta progresivamente al glomérulo, siendo una de las causas más frecuentes de enfermedad renal crónica terminal a nivel mundial, lo que justifica la vigilancia renal sistemática en todo paciente diabético.'
      ],
      foco:[
        '*Consideración clínica*: distinguir si el problema renal es glomerular (proteinuria, hematuria, sin fiebre) o infeccioso-obstructivo (fiebre, dolor en flanco, síntomas urinarios) cambia por completo el estudio diagnóstico inicial y la urgencia del manejo.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 14.'
},

'patologia-sistema-endocrino': {
  tema:'Patología del sistema endocrino',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'La mayoría de las lesiones endocrinas comparten una pregunta central independientemente del órgano: ¿esta lesión produce hormona en exceso, en defecto, o es funcionalmente silenciosa? Esa pregunta importa tanto como si la lesión es benigna o maligna.',
  claves:['bocio','adenoma tiroideo','carcinoma tiroideo','tumor hipofisario'],
  sigue:'patologia-mama',
  secciones:[
    {
      t:'Bocio: el crecimiento de la glándula, no necesariamente su función',
      p:[
        'El *bocio* es el agrandamiento de la glándula tiroides, que puede ocurrir con función tiroidea normal, aumentada o disminuida -el tamaño de la glándula y su función son dos preguntas distintas que hay que responder por separado. Un bocio puede ser difuso (toda la glándula agrandada de forma uniforme, típico de la deficiencia de yodo o la enfermedad de Graves) o multinodular (múltiples nódulos independientes dentro de una glándula agrandada).',
        'La deficiencia de yodo, causa clásica de bocio a nivel mundial, actúa reduciendo la síntesis de hormona tiroidea, lo que eleva la TSH por retroalimentación negativa (ya vista en Fisiología II) y esa TSH elevada estimula el crecimiento glandular como intento compensatorio -el bocio, en este caso, es la consecuencia visible de un intento fallido de mantener niveles hormonales normales.'
      ]
    },
    {
      t:'Adenoma vs. carcinoma tiroideo: benigno no siempre significa inocuo',
      p:[
        'El *adenoma tiroideo* es un tumor benigno bien encapsulado, generalmente único, que puede ser funcionalmente silencioso o, con menor frecuencia, producir hormona tiroidea en exceso de forma autónoma (un "nódulo caliente" independiente del control hipofisario), causando hipertiroidismo pese a ser histológicamente benigno.',
        'El *carcinoma tiroideo* tiene varios subtipos con comportamiento muy distinto: el papilar, el más frecuente, tiene generalmente un pronóstico excelente pese a diseminarse con frecuencia a ganglios linfáticos cercanos; el folicular y el medular tienen comportamientos intermedios; el anaplásico, poco frecuente pero extremadamente agresivo, contrasta radicalmente con el buen pronóstico del papilar -un ejemplo claro de que "cáncer de tiroides" no es una sola entidad con un solo pronóstico.'
      ]
    },
    {
      t:'Tumores hipofisarios: pequeños pero con efecto a distancia',
      p:[
        'Un *tumor hipofisario* (con mayor frecuencia un adenoma benigno) puede causar dos tipos de problemas completamente distintos: efectos por compresión local (dolor de cabeza, alteración del campo visual por comprimir el quiasma óptico adyacente, ya relevante desde la anatomía de la región selar) y efectos hormonales sistémicos a distancia, si el tumor secreta una hormona hipofisaria en exceso (prolactina, hormona de crecimiento, ACTH, entre otras).',
        'Esto explica por qué un tumor hipofisario relativamente pequeño puede producir manifestaciones clínicas muy alejadas de la cabeza: un exceso de hormona de crecimiento produce acromegalia (crecimiento óseo y de tejidos blandos en todo el cuerpo), y un exceso de ACTH produce enfermedad de Cushing (con sus manifestaciones metabólicas sistémicas) -el tumor está en la hipófisis, pero sus efectos se manifiestan en órganos distantes que responden a esa hormona.'
      ],
      foco:[
        '*Consideración clínica*: ante cualquier lesión endocrina, preguntar primero si produce exceso, defecto o ninguna alteración hormonal medible orienta el estudio clínico tanto como la biopsia para determinar si es benigna o maligna.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 20.'
},

'patologia-mama': {
  tema:'Patología de mama',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'La gran mayoría de las masas mamarias que se palpan en la práctica clínica son benignas, pero distinguir con criterio cuáles características hacen sospechar malignidad es lo que evita tanto la angustia innecesaria como el retraso diagnóstico peligroso.',
  claves:['fibroadenoma','carcinoma de mama','mastopatía fibroquística','biopsia de mama'],
  sigue:'patologia-ginecologica',
  secciones:[
    {
      t:'Fibroadenoma y mastopatía fibroquística: las masas benignas más frecuentes',
      p:[
        'El *fibroadenoma* es el tumor benigno más frecuente de la mama, especialmente en mujeres jóvenes: se presenta como una masa firme, móvil, de bordes bien definidos, que no se adhiere a los tejidos circundantes -características semiológicas que, en conjunto, sugieren fuertemente benignidad, aunque la confirmación definitiva siempre requiere estudio histológico si hay cualquier duda clínica.',
        'La *mastopatía fibroquística* no es una enfermedad única, sino un conjunto de cambios benignos del tejido mamario (formación de quistes, fibrosis, hiperplasia del epitelio ductal) muy frecuente, relacionado con las fluctuaciones hormonales del ciclo menstrual: produce con frecuencia dolor y nodularidad que varía con el ciclo, un patrón temporal que ayuda a distinguirla clínicamente de una masa más preocupante que no cambia con el ciclo.'
      ]
    },
    {
      t:'Carcinoma de mama: el tumor maligno más frecuente en mujeres',
      p:[
        'El *carcinoma de mama* se origina, en la gran mayoría de los casos, del epitelio de los conductos o los lobulillos mamarios, y se clasifica en dos grandes categorías según si ha atravesado la membrana basal: el carcinoma in situ (confinado dentro del conducto o lobulillo, sin capacidad de dar metástasis mientras permanezca así) y el carcinoma invasivo (que ya atravesó esa membrana y tiene acceso a vasos linfáticos y sanguíneos, con capacidad real de diseminarse).',
        'Esta distinción entre in situ e invasivo no es solo académica: tiene una implicación pronóstica y terapéutica directa, porque un carcinoma detectado todavía in situ (con frecuencia gracias al tamizaje mamográfico ya visto en Medicina Preventiva) tiene un pronóstico considerablemente mejor que uno ya invasivo al momento del diagnóstico.'
      ]
    },
    {
      t:'La biopsia: el paso que confirma el diagnóstico',
      p:[
        'La *biopsia de mama* es el estudio que confirma histológicamente la naturaleza de una masa mamaria, y es indispensable antes de cualquier decisión terapéutica definitiva: ni la palpación ni la imagen, por sí solas, permiten distinguir con certeza absoluta entre una masa benigna y una maligna, sin importar qué tan típica parezca su apariencia clínica o radiológica.',
        'Además de confirmar malignidad o benignidad, la biopsia permite caracterizar el tumor a nivel molecular (receptores hormonales, sobreexpresión de ciertos genes), información que en la práctica clínica real determina qué tratamiento específico recibirá la paciente -la biopsia no es solo un paso diagnóstico, es el punto de partida de todo el plan terapéutico posterior.'
      ],
      foco:[
        '*Consideración clínica*: características como una masa dura, de bordes irregulares, fija a planos profundos, o acompañada de retracción de la piel o el pezón, aumentan la sospecha de malignidad y ameritan biopsia sin demora, a diferencia de una masa móvil y de bordes definidos.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 23.'
},

'patologia-ginecologica': {
  tema:'Patología ginecológica',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'El aparato reproductor femenino tiene lesiones muy frecuentes y en su mayoría benignas (leiomiomas, quistes funcionales), pero el cérvix es la excepción notable: ahí un virus específico y bien identificado explica la inmensa mayoría de los casos de cáncer.',
  claves:['leiomioma uterino','carcinoma de cérvix','endometriosis','quiste ovárico'],
  sigue:'patologia-testicular-prostatica',
  secciones:[
    {
      t:'Leiomioma uterino: el tumor benigno más frecuente del útero',
      p:[
        'El *leiomioma uterino* (fibroma) es un tumor benigno del músculo liso del útero, extremadamente frecuente en mujeres en edad reproductiva, y su crecimiento es sensible a las hormonas: tiende a crecer durante el embarazo (con niveles hormonales elevados) y a reducirse tras la menopausia, cuando esos niveles caen.',
        'Según su ubicación dentro de la pared uterina (submucoso, intramural o subseroso), un leiomioma puede ser completamente asintomático o causar sangrado uterino anormal, dolor pélvico, o problemas de fertilidad -la ubicación, más que el tamaño en sí, suele determinar si genera síntomas relevantes.'
      ]
    },
    {
      t:'Carcinoma de cérvix: casi siempre viral en su origen',
      p:[
        'El *carcinoma de cérvix* se origina, en la inmensa mayoría de los casos, por infección persistente con ciertos tipos de alto riesgo del virus del papiloma humano (VPH), ya introducido en el esquema de vacunación en Medicina Preventiva: la infección persistente induce cambios progresivos en el epitelio cervical (displasia leve, moderada, severa) que, sin tratamiento, pueden progresar a lo largo de años hacia un carcinoma invasivo.',
        'Esta progresión lenta y conocida es precisamente lo que hace tan efectivo el tamizaje con citología cervical (Papanicolaou): detecta las lesiones precancerosas mucho antes de que se conviertan en cáncer invasivo, dando tiempo de sobra para tratarlas de forma mínimamente invasiva -uno de los ejemplos más exitosos de prevención secundaria en toda la oncología.'
      ]
    },
    {
      t:'Endometriosis y quiste ovárico',
      p:[
        'La *endometriosis* es la presencia de tejido endometrial funcional fuera de la cavidad uterina (con frecuencia en los ovarios, el peritoneo pélvico, o entre ambos), tejido que responde a los mismos ciclos hormonales que el endometrio normal, sangrando cíclicamente en una ubicación donde ese sangrado no tiene salida -el mecanismo detrás del dolor pélvico crónico, la dismenorrea severa y, en algunos casos, la infertilidad asociada a esta condición.',
        'Un *quiste ovárico* puede ser funcional (relacionado con el ciclo ovulatorio normal, generalmente autolimitado y sin necesidad de intervención) o neoplásico (un tumor real, benigno o maligno, que no se resuelve espontáneamente) -distinguir entre ambos tipos mediante seguimiento clínico y ecográfico evita tanto intervenciones innecesarias en quistes funcionales como el retraso diagnóstico de una neoplasia real.'
      ],
      foco:[
        '*Consideración clínica*: la vacunación contra el VPH y el tamizaje citológico cervical son, juntos, las dos intervenciones de mayor impacto poblacional contra el cáncer de cérvix, actuando en momentos distintos de su historia natural (prevención primaria y secundaria, respectivamente).'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 22.'
},

'patologia-testicular-prostatica': {
  tema:'Patología testicular y prostática',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'La próstata y el testículo comparten vecindad anatómica, pero su patología oncológica no podría ser más distinta: el cáncer de próstata es predominantemente una enfermedad del hombre mayor de crecimiento lento, mientras que el cáncer testicular afecta característicamente a hombres jóvenes y, a diferencia de la mayoría de los cánceres, es altamente curable incluso en etapas avanzadas.',
  claves:['hiperplasia prostática benigna','carcinoma de próstata','tumor testicular','criptorquidia'],
  sigue:'patologia-sistema-nervioso-central',
  secciones:[
    {
      t:'Hiperplasia prostática benigna: crecimiento, no cáncer',
      p:[
        'La *hiperplasia prostática benigna* es el crecimiento no canceroso del tejido prostático, extremadamente frecuente con el avance de la edad, que ocurre predominantemente en la zona de transición de la glándula, cerca de la uretra -su ubicación, más que su tamaño absoluto, explica por qué comprime la uretra y produce los síntomas urinarios obstructivos típicos (dificultad para iniciar la micción, chorro urinario débil, sensación de vaciado incompleto).',
        'Es importante distinguirla conceptualmente del carcinoma de próstata: son dos procesos biológicos distintos, que pueden coexistir en el mismo paciente sin que uno cause al otro -tener hiperplasia benigna no aumenta directamente el riesgo de tener cáncer prostático.'
      ]
    },
    {
      t:'Carcinoma de próstata: frecuente, pero de comportamiento variable',
      p:[
        'El *carcinoma de próstata* se origina característicamente en la zona periférica de la glándula (a diferencia de la hiperplasia benigna, que afecta la zona de transición), lo que explica por qué puede crecer considerablemente antes de comprimir la uretra y dar síntomas urinarios -muchos casos se detectan por tamizaje (antígeno prostático específico, tacto rectal) antes de que produzcan cualquier síntoma.',
        'El comportamiento de este cáncer es notablemente variable: algunos tumores son de crecimiento tan lento que nunca llegarán a poner en riesgo la vida del paciente, mientras que otros son agresivos y potencialmente letales -esta variabilidad es la razón por la que las decisiones de tamizaje y tratamiento en cáncer de próstata son más matizadas que en la mayoría de los otros cánceres, sopesando cuidadosamente el riesgo de sobrediagnóstico ya visto en el concepto de prevención cuaternaria.'
      ]
    },
    {
      t:'Tumor testicular y criptorquidia',
      p:[
        'Un *tumor testicular*, a diferencia de la mayoría de los cánceres, afecta predominantemente a hombres jóvenes (entre los 15 y los 35 años) y se presenta típicamente como una masa testicular indolora -un hallazgo que, precisamente por no doler, con frecuencia se ignora o se retrasa en consultar, pese a que la mayoría de estos tumores son altamente curables si se detectan y tratan a tiempo.',
        'La *criptorquidia* (testículo que no descendió completamente al escroto durante el desarrollo) es un factor de riesgo bien establecido para el desarrollo posterior de un tumor testicular, incluso años después de la corrección quirúrgica -esta asociación es la razón por la que se recomienda la corrección temprana de la criptorquidia y el seguimiento a largo plazo de estos pacientes.'
      ],
      foco:[
        '*Consideración clínica*: una masa testicular indolora en un hombre joven debe estudiarse sin demora como posible tumor testicular, precisamente porque la ausencia de dolor no descarta -y de hecho es característica de- esta neoplasia altamente curable si se trata a tiempo.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 21.'
},

'patologia-sistema-nervioso-central': {
  tema:'Patología del sistema nervioso central',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'El sistema nervioso central tiene una particularidad que lo distingue de casi cualquier otro órgano: su tejido tiene una capacidad de regeneración prácticamente nula, así que el daño -sea por un tumor, un ictus o una enfermedad neurodegenerativa- tiende a ser permanente.',
  claves:['tumor cerebral','enfermedad de Alzheimer','ictus isquémico','hemorragia cerebral'],
  sigue:'patologia-osteoarticular',
  secciones:[
    {
      t:'Tumor cerebral: benigno no siempre significa inofensivo',
      p:[
        'Un *tumor cerebral* puede ser primario (originado en el propio tejido cerebral o sus cubiertas, como el glioma o el meningioma) o metastásico (proveniente de un cáncer en otro órgano, con frecuencia pulmón o mama). A diferencia de otros órganos, en el cerebro incluso un tumor histológicamente benigno puede ser clínicamente grave: el espacio dentro del cráneo es fijo, así que cualquier masa que crezca eleva la presión intracraneal y puede comprimir estructuras vitales adyacentes.',
        'Esta particularidad -"benigno" en histología no equivale a "inofensivo" en ubicación craneal- es una de las razones por las que la localización de un tumor cerebral importa tanto como su tipo histológico para predecir su impacto clínico real.'
      ]
    },
    {
      t:'Ictus isquémico y hemorragia cerebral: dos mecanismos, un mismo órgano vulnerable',
      p:[
        'El *ictus isquémico* ocurre cuando se interrumpe el flujo sanguíneo a una región del cerebro, con frecuencia por un trombo o un émbolo que ocluye una arteria cerebral -retomando directamente la aterosclerosis ya vista en patología cardiovascular, que puede afectar tanto a las arterias coronarias como a las cerebrales-. Las neuronas son extremadamente sensibles a la falta de oxígeno, y el daño isquémico se vuelve irreversible en minutos, mucho más rápido que en la mayoría de los demás tejidos del cuerpo.',
        'La *hemorragia cerebral* ocurre cuando un vaso sanguíneo se rompe dentro del cráneo, ya sea dentro del propio tejido cerebral (hemorragia intraparenquimatosa, con frecuencia por hipertensión arterial crónica que debilita las paredes de pequeñas arterias) o en los espacios que rodean al cerebro (hemorragia subaracnoidea, con frecuencia por la ruptura de un aneurisma). A diferencia del ictus isquémico, aquí el daño no es solo por falta de flujo, sino también por el efecto de masa y la presión que ejerce la sangre extravasada sobre el tejido cerebral circundante.'
      ]
    },
    {
      t:'Enfermedad de Alzheimer: la neurodegeneración más frecuente',
      p:[
        'La *enfermedad de Alzheimer* es la causa más frecuente de demencia, caracterizada histológicamente por el depósito de placas de proteína beta-amiloide fuera de las neuronas y ovillos neurofibrilares de proteína tau dentro de ellas, ambos asociados con la muerte neuronal progresiva, sobre todo en regiones cerebrales relacionadas con la memoria y las funciones cognitivas superiores.',
        'A diferencia del daño súbito de un ictus, el Alzheimer es un proceso lento y progresivo, que se desarrolla a lo largo de años antes de manifestarse clínicamente con deterioro de la memoria -esta diferencia en el curso temporal (agudo vs. crónico progresivo) es, en la práctica clínica, una de las primeras claves para distinguir un evento vascular de un proceso neurodegenerativo.'
      ],
      foco:[
        '*Consideración clínica*: la escasa capacidad de regeneración del tejido nervioso central explica por qué, en cualquier patología del sistema nervioso central, el tiempo hasta la intervención (ya sea revertir una isquemia o controlar la presión intracraneal) es determinante para el pronóstico funcional del paciente.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 28.'
},

'patologia-osteoarticular': {
  tema:'Patología osteoarticular',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'El hueso y las articulaciones envejecen y se dañan de formas muy distintas: el desgaste mecánico acumulado (osteoartritis), la pérdida silenciosa de masa ósea (osteoporosis), el ataque autoinmune (artritis reumatoide) y el crecimiento tumoral (osteosarcoma) comparten el sistema esquelético, pero casi nada más.',
  claves:['osteoartritis','osteoporosis','osteosarcoma','artritis reumatoide'],
  sigue:'patologia-hematologica-ganglionar',
  secciones:[
    {
      t:'Osteoartritis: el desgaste mecánico del cartílago',
      p:[
        'La *osteoartritis* es la enfermedad articular degenerativa más frecuente, causada por el desgaste progresivo del cartílago articular que normalmente amortigua y permite el deslizamiento suave entre los extremos óseos de una articulación; con el tiempo, la pérdida de ese cartílago expone el hueso subyacente, que responde formando espolones óseos (osteofitos) y engrosándose de forma anormal.',
        'A diferencia de un proceso inflamatorio sistémico, la osteoartritis es fundamentalmente un problema mecánico y localizado, relacionado con la edad, el uso repetido de la articulación, la obesidad (que aumenta la carga mecánica sobre articulaciones de carga como la rodilla) y lesiones articulares previas -por eso afecta característicamente a articulaciones específicas de carga, de forma asimétrica, sin el patrón simétrico y sistémico de un proceso autoinmune.'
      ]
    },
    {
      t:'Osteoporosis: la pérdida silenciosa de masa ósea',
      p:[
        'La *osteoporosis* es la reducción de la densidad y la calidad del hueso, que lo vuelve frágil y propenso a fracturas incluso ante traumas mínimos; ocurre cuando la resorción ósea supera de forma sostenida a la formación de hueso nuevo, un equilibrio que se ve particularmente afectado por la caída de estrógenos tras la menopausia, retomando directamente el papel protector de esta hormona sobre el hueso ya introducido en Fisiología II y Ginecología.',
        'Su carácter silencioso -sin dolor ni síntomas hasta que ocurre una fractura- es lo que justifica el tamizaje con densitometría ósea en poblaciones de riesgo, un ejemplo más de prevención secundaria aplicada a una enfermedad que, de otra forma, se detectaría solo tras su primera complicación grave.'
      ]
    },
    {
      t:'Artritis reumatoide y osteosarcoma: dos procesos muy distintos',
      p:[
        'La *artritis reumatoide* es una enfermedad autoinmune sistémica que ataca la membrana sinovial de las articulaciones, produciendo una inflamación crónica que, con el tiempo, destruye el cartílago y el hueso subyacente; a diferencia de la osteoartritis, afecta típicamente de forma simétrica (las mismas articulaciones en ambos lados del cuerpo) y se acompaña de manifestaciones sistémicas (fatiga, fiebre baja) que reflejan su naturaleza autoinmune, no puramente mecánica.',
        'El *osteosarcoma* es el tumor óseo maligno primario más frecuente, con un pico de incidencia característico en adolescentes durante el período de crecimiento óseo rápido -una coincidencia que sugiere una relación entre la actividad proliferativa intensa del hueso en crecimiento y el riesgo de transformación maligna en ese mismo tejido.'
      ],
      foco:[
        '*Consideración clínica*: un patrón simétrico de afectación articular con signos sistémicos sugiere un proceso autoinmune como la artritis reumatoide; un patrón asimétrico, localizado y relacionado con el uso mecánico sugiere osteoartritis -esta distinción clínica inicial orienta todo el estudio posterior.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 26.'
},

'patologia-hematologica-ganglionar': {
  tema:'Patología hematológica y ganglionar',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:14,
  idea:'La sangre y el sistema linfático comparten un origen celular común en la médula ósea, así que sus enfermedades -desde la simple anemia hasta la leucemia- comparten también una lógica de fondo: algo salió mal en la producción, maduración o supervivencia de una línea celular concreta.',
  claves:['linfoma','leucemia','anemia','adenopatía'],
  sigue:'patologia-cutanea',
  secciones:[
    {
      t:'Anemia: un signo con muchas causas posibles',
      p:[
        'La *anemia* es la reducción de la masa de glóbulos rojos o de hemoglobina por debajo de lo normal, y no es una enfermedad única sino un signo con múltiples causas posibles, clasificables en tres grandes mecanismos: producción insuficiente (por deficiencia de hierro, vitamina B12 o ácido fólico, o por daño de la médula ósea), pérdida excesiva (sangrado agudo o crónico), o destrucción acelerada (hemólisis, sea por un defecto intrínseco del glóbulo rojo o por un ataque externo, como el autoinmune).',
        'Identificar cuál de estos tres mecanismos explica la anemia de un paciente concreto -algo que se apoya en el tamaño de los glóbulos rojos, el conteo de reticulocitos y otros datos del hemograma- es lo que orienta el estudio hacia la causa real, en vez de tratar la anemia como un diagnóstico final en sí mismo.'
      ]
    },
    {
      t:'Adenopatía: cuándo un ganglio agrandado preocupa',
      p:[
        'Una *adenopatía* (ganglio linfático agrandado) puede ser reactiva -una respuesta normal y benigna del sistema inmunitario ante una infección o inflamación cercana, ya vista en Inmunología- o puede reflejar una infiltración maligna, ya sea de un linfoma originado en el propio tejido linfático o de metástasis de un cáncer originado en otro órgano.',
        'Ciertas características clínicas ayudan a distinguir una adenopatía reactiva de una preocupante: un ganglio reactivo suele ser blando, móvil y doloroso a la palpación, mientras que uno de origen maligno tiende a ser duro, fijo a planos profundos, indoloro y de crecimiento progresivo -un patrón semiológico análogo al ya visto para distinguir masas mamarias benignas de malignas.'
      ]
    },
    {
      t:'Linfoma y leucemia: neoplasias del tejido hematopoyético',
      p:[
        'El *linfoma* es una neoplasia maligna originada en el tejido linfático, que se divide en dos grandes categorías: el linfoma de Hodgkin, caracterizado por la presencia de una célula tumoral distintiva (la célula de Reed-Sternberg) y un patrón de diseminación relativamente predecible de un grupo ganglionar al siguiente, y el linfoma no Hodgkin, un grupo mucho más heterogéneo de neoplasias con comportamientos muy variables entre sí.',
        'La *leucemia* es una neoplasia maligna que se origina en la médula ósea y típicamente circula por la sangre periférica, a diferencia del linfoma, que forma masas sólidas predominantemente en tejido linfático; se clasifica según la línea celular afectada (mieloide o linfoide) y según su velocidad de progresión (aguda, de curso rápido y agresivo, o crónica, de curso más lento) -cuatro combinaciones básicas que determinan presentaciones clínicas y pronósticos muy distintos entre sí.'
      ],
      foco:[
        '*Consideración clínica*: la fatiga, las infecciones recurrentes y el sangrado fácil en un paciente con leucemia se explican por un mecanismo común -la médula ósea infiltrada por células leucémicas ya no produce suficientes glóbulos rojos, glóbulos blancos normales ni plaquetas funcionales.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 13.'
},

'patologia-cutanea': {
  tema:'Patología cutánea',
  bloque:'Anatomía Patológica II', programa:'unirm', cuatri:10, min:13,
  idea:'Cierra el bloque de Anatomía Patológica II con el órgano más visible y más accesible a la exploración directa del cuerpo: la piel, donde una lesión pigmentada que cambia con el tiempo puede ser la diferencia entre un melanoma curable y uno letal.',
  claves:['melanoma','carcinoma basocelular','psoriasis','dermatitis'],
  sigue:'principios-farmacoterapia-racional',
  secciones:[
    {
      t:'Melanoma: el cáncer de piel más letal, pero curable si se detecta a tiempo',
      p:[
        'El *melanoma* se origina en los melanocitos, las células productoras de pigmento de la piel, y es el cáncer cutáneo con mayor capacidad de dar metástasis, pese a representar una minoría de todos los cánceres de piel. La exposición a radiación ultravioleta, sobre todo intermitente e intensa (quemaduras solares repetidas), es el factor de riesgo modificable más importante.',
        'El sistema ABCDE (Asimetría, Bordes irregulares, Color no uniforme, Diámetro mayor a 6 milímetros, Evolución o cambio en el tiempo) es la herramienta clínica de tamizaje visual más usada para distinguir un melanoma de un lunar benigno; el criterio de Evolución es, en la práctica, frecuentemente el más sensible, porque un lunar que cambia -de tamaño, forma o color- es la señal de alarma que con más frecuencia lleva al diagnóstico temprano.'
      ]
    },
    {
      t:'Carcinoma basocelular: el cáncer de piel más frecuente',
      p:[
        'El *carcinoma basocelular* es el cáncer cutáneo más frecuente en general, originado en las células basales de la epidermis, y a diferencia del melanoma, tiene una capacidad de metástasis extremadamente baja, aunque puede causar daño local considerable si no se trata, al crecer de forma invasiva sobre estructuras adyacentes (por eso se le describe a veces como "localmente agresivo pero raramente letal").',
        'También se relaciona con la exposición acumulada a radiación ultravioleta, pero a diferencia del melanoma (más asociado a exposición intermitente e intensa), el carcinoma basocelular se relaciona más con la exposición solar acumulada a lo largo de toda la vida, lo que explica por qué predomina en zonas de exposición crónica como la cara.'
      ]
    },
    {
      t:'Psoriasis y dermatitis: procesos inflamatorios, no neoplásicos',
      p:[
        'La *psoriasis* es una enfermedad inflamatoria crónica de base inmunológica, caracterizada por una proliferación excesivamente acelerada de las células epidérmicas -mucho más rápida que el recambio normal de la piel-, lo que produce las placas eritematosas con escama característica que definen clínicamente a esta condición, con tendencia a las recaídas y remisiones a lo largo de la vida del paciente.',
        'La *dermatitis* es un término general para la inflamación de la piel, con múltiples causas posibles: de contacto (por exposición directa a un irritante o alérgeno), atópica (relacionada con una predisposición alérgica de base, con frecuencia asociada a asma o rinitis alérgica en el mismo paciente o su familia), o seborreica (relacionada con las glándulas productoras de grasa de la piel) -distinguir el tipo específico de dermatitis, más que solo reconocer que hay inflamación cutánea, es lo que orienta el tratamiento correcto.'
      ],
      foco:[
        '*Consideración clínica*: este tema cierra el bloque de Anatomía Patológica II retomando el mismo principio que atraviesa toda la materia: la piel, igual que cualquier otro órgano, tiene un repertorio limitado de respuestas (inflamación, proliferación excesiva, transformación maligna), y reconocer cuál de ellas está ocurriendo es más útil que memorizar cada enfermedad como un caso aislado.'
      ]
    }
  ],
  ref:'Kumar, Abbas y Aster, Robbins y Cotran, Patología Estructural y Funcional, cap. 25.'
}

});
