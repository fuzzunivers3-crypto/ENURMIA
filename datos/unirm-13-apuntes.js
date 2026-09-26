/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 13 (lote 1)
   Cubre CARDIOLOGÍA al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Primera materia del
   cuatrimestre 13 (5 creditos, 13 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== CARDIOLOGÍA ==================== */
'anatomia-fisiologia-cardiovascular-adulto': {
  tema:'Anatomía y fisiología cardiovascular del adulto',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema abre la materia de Cardiología estableciendo las bases anatómicas y fisiológicas sobre las que se construirán los 12 temas restantes: cada condición cardiovascular específica -isquémica, arrítmica, valvular, o estructural- se explicará en relación directa con estos principios normales.',
  claves:['ciclo cardíaco','gasto cardíaco','sistema de conducción cardíaco'],
  sigue:'angina-estable-cardiopatia-isquemica-cronica',
  secciones:[
    {
      t:'El ciclo cardíaco como secuencia coordinada de eventos',
      p:[
        'El *ciclo cardíaco* es la secuencia coordinada de contracción (sístole) y relajación (diástole) de las cuatro cámaras cardíacas, sincronizada de forma que la sangre fluya siempre en una dirección: de las aurículas a los ventrículos, y de los ventrículos hacia la circulación pulmonar y sistémica, un flujo unidireccional garantizado por las válvulas cardíacas que se abrirán en detalle en los temas de valvulopatías más adelante en este bloque.',
        'Comprender este ciclo como una secuencia de presiones y volúmenes cambiantes, no solo como una simple "contracción del corazón", retoma la importancia ya vista repetidamente en este pensum sobre entender el mecanismo fisiológico preciso antes de razonar sobre sus alteraciones: cada arritmia, cada valvulopatía, y cada forma de insuficiencia cardíaca que se desarrollará en este bloque representa, en última instancia, una alteración específica de este ciclo coordinado normal.'
      ]
    },
    {
      t:'El gasto cardíaco y sus determinantes',
      p:[
        'El *gasto cardíaco* -el volumen de sangre que el corazón bombea por minuto, resultado de multiplicar la frecuencia cardíaca por el volumen sistólico- es el parámetro fisiológico central que determina si el corazón está satisfaciendo las demandas metabólicas del organismo, y sus determinantes (precarga, poscarga, y contractilidad) son exactamente los mismos tres factores que se alterarán de formas específicas en la insuficiencia cardíaca, tema que se desarrollará más adelante en este bloque.',
        'Reconocer estos tres determinantes del gasto cardíaco retoma un principio general ya visto repetidamente en este pensum sobre descomponer un parámetro fisiológico complejo en sus componentes manejables: comprender por separado cómo la precarga, la poscarga, y la contractilidad contribuyen al gasto cardíaco total permite entender, en temas posteriores, por qué distintas intervenciones terapéuticas actúan sobre uno u otro de estos componentes específicos.'
      ]
    },
    {
      t:'El sistema de conducción cardíaco y su relevancia para las arritmias',
      p:[
        'El *sistema de conducción cardíaco* -desde el nódulo sinusal, pasando por el nódulo auriculoventricular, hasta el sistema de His-Purkinje- genera y conduce el impulso eléctrico que coordina la contracción cardíaca, estableciendo la base anatómica y fisiológica sobre la que se explicarán las arritmias y los bloqueos de la conducción que se desarrollarán en varios temas posteriores de este bloque.',
        'Este tema cierra estableciendo que comprender dónde se origina normalmente el impulso eléctrico (el nódulo sinusal) y por qué vía normal se conduce es indispensable para entender, más adelante, qué significa que un impulso se origine en un lugar anormal (como en las arritmias ventriculares) o que su conducción normal se interrumpa en algún punto específico (como en los bloqueos de la conducción), retomando la lógica ya vista repetidamente en este pensum sobre construir el razonamiento clínico sobre una base fisiológica sólida.'
      ],
      foco:[
        '*Consideración clínica*: los tres determinantes del gasto cardíaco -precarga, poscarga y contractilidad- son el marco conceptual que explica por qué distintos tratamientos de la insuficiencia cardíaca actúan sobre mecanismos fisiológicos diferentes entre sí.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 1.'
},

'angina-estable-cardiopatia-isquemica-cronica': {
  tema:'Angina estable y cardiopatía isquémica crónica',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la fisiología del gasto cardíaco ya vista, aplicándola ahora al desequilibrio específico entre el aporte y la demanda de oxígeno del músculo cardíaco que define la cardiopatía isquémica crónica.',
  claves:['angina de pecho estable','prueba de esfuerzo','cardiopatía isquémica crónica'],
  sigue:'sindrome-coronario-agudo-manejo-especializado',
  secciones:[
    {
      t:'La angina de pecho estable como manifestación de un desequilibrio predecible',
      p:[
        'La *angina de pecho estable* es el dolor torácico característico que ocurre cuando la demanda de oxígeno del músculo cardíaco supera el aporte disponible a través de arterias coronarias con estenosis fija, típicamente desencadenado por el esfuerzo físico o el estrés emocional, y aliviado de forma predecible con el reposo o con nitroglicerina -esta predictibilidad del patrón, tanto en su desencadenante como en su alivio, es precisamente lo que distingue a la angina estable del síndrome coronario agudo que se desarrollará en el siguiente tema.',
        'Reconocer este patrón predecible retoma un principio general ya visto repetidamente en este pensum sobre cómo la consistencia o inconsistencia de un síntoma orienta directamente hacia su gravedad relativa: un dolor torácico que sigue siempre el mismo patrón desencadenante-alivio, sin cambios en su intensidad o frecuencia, es clínicamente distinto -y generalmente menos urgente- de uno que cambia su patrón habitual, un concepto que se retomará explícitamente en el tema del síndrome coronario agudo.'
      ]
    },
    {
      t:'La prueba de esfuerzo como herramienta diagnóstica y pronóstica',
      p:[
        'La *prueba de esfuerzo* somete al paciente a un ejercicio programado y progresivo mientras se monitoriza el electrocardiograma, buscando cambios que sugieran isquemia miocárdica inducida por el esfuerzo -esta prueba retoma directamente el concepto ya establecido sobre el desequilibrio aporte-demanda: al aumentar artificialmente la demanda de oxígeno mediante el ejercicio, se expone una limitación del aporte que podría no ser evidente en reposo.',
        'Esta lógica de "provocar" el desequilibrio bajo condiciones controladas para revelar una limitación no evidente en reposo retoma un principio general ya visto en otros contextos de este pensum sobre pruebas diagnósticas que exponen deliberadamente al sistema evaluado a una condición de estrés controlada, en vez de limitarse a evaluar el estado basal en reposo.'
      ]
    },
    {
      t:'La cardiopatía isquémica crónica como condición de manejo a largo plazo',
      p:[
        'La *cardiopatía isquémica crónica* engloba el manejo a largo plazo del paciente con enfermedad coronaria establecida, combinando modificación de factores de riesgo cardiovascular, tratamiento farmacológico dirigido a reducir la demanda de oxígeno miocárdico o mejorar el aporte, y en casos seleccionados, revascularización coronaria mediante angioplastia o cirugía.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre el manejo escalonado de una condición crónica: no todo paciente con cardiopatía isquémica requiere revascularización inmediata, y la decisión entre manejo médico optimizado y revascularización depende de la severidad de los síntomas, la extensión de la enfermedad coronaria, y la respuesta al tratamiento médico inicial, un principio que se retomará con mayor urgencia en el contexto del síndrome coronario agudo del siguiente tema.'
      ],
      foco:[
        '*Consideración clínica*: un patrón de angina que cambia -se vuelve más frecuente, ocurre con menor esfuerzo, o ya no responde al reposo o la nitroglicerina- señala una posible transición hacia síndrome coronario agudo y exige evaluación urgente, no manejo ambulatorio de rutina.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 52.'
},

'sindrome-coronario-agudo-manejo-especializado': {
  tema:'Síndrome coronario agudo: manejo especializado',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:14,
  idea:'Este tema retoma directamente el patrón predecible de la angina estable ya visto, mostrando ahora qué ocurre cuando ese patrón se rompe: la ruptura de una placa aterosclerótica que transforma una estenosis estable en una oclusión aguda potencialmente catastrófica.',
  claves:['infarto agudo de miocardio','elevación del segmento ST','terapia de reperfusión'],
  sigue:'insuficiencia-cardiaca-cronica',
  secciones:[
    {
      t:'El infarto agudo de miocardio como necrosis por isquemia prolongada',
      p:[
        'El *infarto agudo de miocardio* es la necrosis (muerte del tejido) del músculo cardíaco causada por una interrupción súbita y significativa del flujo sanguíneo coronario, típicamente por la ruptura de una placa aterosclerótica que genera un trombo oclusivo -a diferencia de la angina estable ya vista, donde la estenosis es fija y el desequilibrio es predecible con el esfuerzo, aquí la oclusión es súbita e impredecible, y el tiempo de isquemia sin tratamiento determina directamente la cantidad de tejido cardíaco que se pierde de forma irreversible.',
        'Esta relación entre tiempo de isquemia y extensión del daño retoma directamente un principio general ya visto repetidamente en este pensum sobre ventanas críticas de intervención: de la misma forma que otras urgencias ya vistas en este pensum dependen del tiempo hasta el tratamiento, el infarto agudo de miocardio exige reconocimiento y manejo inmediato, resumido en la frase clínica "tiempo es músculo".'
      ]
    },
    {
      t:'La elevación del segmento ST como hallazgo que determina la urgencia del manejo',
      p:[
        'La *elevación del segmento ST* en el electrocardiograma indica una oclusión coronaria completa y transmural (que afecta todo el espesor de la pared cardíaca), distinguiendo esta presentación de otras formas de síndrome coronario agudo sin esta elevación, donde la oclusión es parcial o transitoria -esta distinción electrocardiográfica tiene una implicación clínica directa: el infarto con elevación del ST exige reperfusión urgente inmediata, mientras las otras formas permiten, en general, una evaluación de riesgo algo más estructurada antes de decidir el momento óptimo de intervención.',
        'Reconocer esta distinción retoma un principio general ya visto repetidamente en este pensum sobre cómo un hallazgo diagnóstico específico (en este caso, la elevación del segmento ST) puede determinar directamente la urgencia y la vía de manejo, no solo confirmar un diagnóstico general: el mismo síndrome coronario agudo tiene, según este hallazgo electrocardiográfico específico, dos vías de manejo con urgencias considerablemente distintas.'
      ]
    },
    {
      t:'La terapia de reperfusión y la ventana crítica de tiempo',
      p:[
        'La *terapia de reperfusión* -ya sea mediante angioplastia coronaria percutánea urgente o, cuando esta no está disponible a tiempo, mediante fármacos trombolíticos- busca restaurar el flujo sanguíneo coronario lo antes posible tras el diagnóstico de infarto con elevación del segmento ST, retomando directamente la importancia ya vista sobre la relación entre tiempo de isquemia y extensión del daño: cuanto más rápida la reperfusión, mayor la cantidad de músculo cardíaco que se salva.',
        'Este tema cierra retomando el principio general ya visto repetidamente en este pensum sobre reconocer y actuar ante urgencias con ventana de tiempo limitada, sin retrasos diagnósticos innecesarios: el síndrome coronario agudo con elevación del segmento ST es uno de los ejemplos más claros de este principio en toda la medicina clínica, donde cada minuto de retraso en la reperfusión se traduce directamente en más tejido cardíaco perdido de forma irreversible.'
      ],
      foco:[
        '*Consideración clínica*: "tiempo es músculo" resume por qué el infarto con elevación del segmento ST exige reperfusión urgente sin demoras diagnósticas innecesarias -cada minuto de retraso se traduce en más tejido cardíaco perdido de forma irreversible.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 59.'
},

'insuficiencia-cardiaca-cronica': {
  tema:'Insuficiencia cardíaca crónica',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'La insuficiencia cardíaca crónica retoma directamente el gasto cardíaco y sus determinantes ya vistos al inicio de este bloque, mostrando qué ocurre cuando el corazón, por causas muy diversas -incluido el infarto ya visto en el tema anterior-, ya no logra satisfacer las demandas del organismo.',
  claves:['fracción de eyección reducida','fracción de eyección preservada','clasificación funcional NYHA'],
  sigue:'fibrilacion-auricular',
  secciones:[
    {
      t:'La fracción de eyección reducida como forma clásica de insuficiencia cardíaca',
      p:[
        'La *fracción de eyección reducida* describe la insuficiencia cardíaca donde el ventrículo izquierdo pierde su capacidad contráctil normal, bombeando una proporción menor de la sangre que contiene con cada latido -esta forma retoma directamente el concepto de contractilidad ya visto como uno de los tres determinantes del gasto cardíaco al inicio de este bloque, siendo precisamente la contractilidad reducida el mecanismo central de esta forma de insuficiencia.',
        'Un antecedente de infarto agudo de miocardio, ya visto en el tema anterior, es una de las causas más frecuentes de fracción de eyección reducida, ya que el tejido cardíaco necrótico e irreversiblemente dañado deja de contribuir a la contracción efectiva del ventrículo -esta conexión retoma directamente la importancia ya vista sobre cómo el tiempo de isquemia en el infarto determina la cantidad de tejido perdido, y ese tejido perdido es, en muchos casos, precisamente lo que después se manifiesta clínicamente como insuficiencia cardíaca crónica.'
      ]
    },
    {
      t:'La fracción de eyección preservada como forma distinta con igual relevancia clínica',
      p:[
        'La *fracción de eyección preservada* describe la insuficiencia cardíaca donde la capacidad contráctil del ventrículo se mantiene relativamente normal, pero el ventrículo se vuelve rígido y no se relaja ni se llena apropiadamente durante la diástole -esta distinción retoma directamente el ciclo cardíaco ya visto al inicio de este bloque, donde la sístole (contracción) y la diástole (relajación y llenado) son fases igualmente importantes del ciclo, y esta forma de insuficiencia representa una falla específica de la fase diastólica, no de la sistólica.',
        'Reconocer que existen dos mecanismos fisiopatológicos distintos capaces de generar el mismo síndrome clínico de insuficiencia cardíaca retoma un principio general ya visto repetidamente en este pensum: presentaciones clínicas superficialmente similares (ambas se manifiestan con síntomas de congestión y baja tolerancia al ejercicio) pueden tener mecanismos subyacentes completamente distintos, con implicaciones directas sobre el tratamiento específico más apropiado para cada una.'
      ]
    },
    {
      t:'La clasificación funcional NYHA y su utilidad práctica',
      p:[
        'La *clasificación funcional NYHA* gradúa la severidad de la insuficiencia cardíaca según el grado de limitación que genera en la actividad física habitual del paciente, desde ausencia de limitación hasta síntomas presentes incluso en reposo, retomando un principio general ya visto repetidamente en este pensum sobre gradar la severidad de una condición mediante su impacto funcional real sobre el paciente, no solo mediante parámetros de laboratorio o de imagen aislados.',
        'Este tema cierra retomando la importancia ya vista sobre cómo una clasificación funcional práctica, aunque menos precisa técnicamente que una medición objetiva de la fracción de eyección, tiene un valor clínico directo: orienta el pronóstico, guía decisiones terapéuticas, y permite comunicar de forma estandarizada y comprensible la severidad funcional de un paciente entre distintos miembros del equipo de salud, sin necesidad de repetir estudios de imagen en cada consulta de seguimiento.'
      ],
      foco:[
        '*Consideración clínica*: la fracción de eyección reducida y la preservada son mecanismos fisiopatológicos distintos (falla sistólica versus diastólica) que generan el mismo síndrome clínico, con implicaciones directas sobre el tratamiento específico más apropiado para cada una.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 25.'
},

'fibrilacion-auricular': {
  tema:'Fibrilación auricular',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente el sistema de conducción cardíaco ya visto al inicio de este bloque, mostrando la arritmia más frecuente en la práctica clínica: una actividad eléctrica auricular caótica que reemplaza el impulso normal originado en el nódulo sinusal.',
  claves:['fibrilación auricular','anticoagulación en fibrilación auricular','control de frecuencia versus ritmo'],
  sigue:'arritmias-ventriculares',
  secciones:[
    {
      t:'La fibrilación auricular como pérdida de la actividad eléctrica organizada',
      p:[
        'La *fibrilación auricular* es una arritmia donde las aurículas, en vez de contraerse de forma organizada bajo el impulso normal del nódulo sinusal ya visto al inicio de este bloque, generan múltiples impulsos eléctricos caóticos y desorganizados, resultando en una contracción auricular ineficaz y una frecuencia ventricular irregular -esta pérdida de organización eléctrica retoma directamente la importancia ya vista sobre el sistema de conducción cardíaco normal como base para comprender sus alteraciones.',
        'Reconocer el pulso irregularmente irregular, característico de la fibrilación auricular, como un hallazgo que orienta directamente hacia esta arritmia específica retoma la importancia ya vista repetidamente en este pensum sobre reconocer patrones clínicos característicos: este patrón de irregularidad sin ningún patrón repetitivo reconocible, a diferencia de otras arritmias que sí tienen patrones más regulares aunque anormales, es suficientemente distintivo como para orientar la sospecha clínica incluso antes de confirmar con electrocardiograma.'
      ]
    },
    {
      t:'La anticoagulación en fibrilación auricular como prevención del evento más temido',
      p:[
        'La *anticoagulación en fibrilación auricular* es clínicamente relevante porque la contracción auricular ineficaz favorece la formación de trombos dentro de la aurícula, particularmente en una estructura llamada orejuela auricular, con el riesgo de que estos trombos se desprendan y generen un evento embólico, más temido cuando ocurre hacia la circulación cerebral, causando un accidente cerebrovascular isquémico.',
        'La decisión de anticoagular a un paciente con fibrilación auricular se basa en escalas de riesgo que ponderan factores como la edad, la hipertensión, la diabetes, y antecedentes de eventos embólicos previos, retomando un principio general ya visto repetidamente en este pensum sobre individualizar una intervención con riesgos propios (en este caso, el riesgo de sangrado asociado a la anticoagulación) según el balance de riesgo-beneficio específico de cada paciente, en vez de aplicar la misma conducta de forma universal.'
      ]
    },
    {
      t:'El control de frecuencia versus ritmo como dos estrategias de manejo',
      p:[
        'El *control de frecuencia versus ritmo* representa dos estrategias distintas de manejo de la fibrilación auricular: el control de frecuencia acepta que la aurícula permanezca fibrilando, pero controla la velocidad con la que los impulsos caóticos llegan al ventrículo, mientras el control de ritmo busca activamente restaurar y mantener el ritmo sinusal normal, ya sea con medicamentos o mediante cardioversión.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum sobre reconocer que, ante una misma condición, pueden existir múltiples estrategias terapéuticas razonables con objetivos distintos, cuya elección depende de las características específicas del paciente (duración de la fibrilación, síntomas, condiciones asociadas) más que de una única conducta correcta aplicable universalmente a todo caso de fibrilación auricular.'
      ],
      foco:[
        '*Consideración clínica*: la decisión de anticoagular a un paciente con fibrilación auricular se individualiza mediante escalas de riesgo que ponderan el riesgo de evento embólico contra el riesgo de sangrado, no se aplica de forma universal a todo paciente con esta arritmia.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 38.'
},

'arritmias-ventriculares': {
  tema:'Arritmias ventriculares',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la fibrilación auricular ya vista, contrastando ahora una arritmia auricular generalmente no inmediatamente letal con arritmias que se originan en el ventrículo y que sí representan, con frecuencia, una urgencia vital inmediata.',
  claves:['taquicardia ventricular','fibrilación ventricular','muerte súbita cardíaca'],
  sigue:'bloqueos-conduccion-cardiaca',
  secciones:[
    {
      t:'La taquicardia ventricular como ritmo originado en el ventrículo',
      p:[
        'La *taquicardia ventricular* es un ritmo rápido que se origina en el tejido ventricular en vez de originarse normalmente en el nódulo sinusal o conducirse apropiadamente a través del sistema de conducción ya visto al inicio de este bloque, y su relevancia clínica depende críticamente de si el paciente permanece hemodinámicamente estable (con presión arterial y perfusión adecuadas) o inestable, una distinción que determina directamente la urgencia y el tipo de manejo inmediato.',
        'Reconocer esta distinción entre taquicardia ventricular estable e inestable retoma un principio general ya visto repetidamente en este pensum sobre reconocer el impacto funcional real de un hallazgo, no solo su presencia aislada: la misma arritmia electrocardiográfica puede representar una urgencia relativa (con tiempo para una evaluación más estructurada) o una emergencia inmediata (que exige cardioversión eléctrica urgente), según el estado hemodinámico del paciente que la presenta.'
      ]
    },
    {
      t:'La fibrilación ventricular como causa directa de paro cardíaco',
      p:[
        'La *fibrilación ventricular* es una actividad eléctrica ventricular caótica y desorganizada, similar en concepto a la fibrilación auricular ya vista pero ocurriendo en el ventrículo, con una consecuencia radicalmente distinta: mientras la aurícula puede fibrilar durante años sin poner en riesgo inmediato la vida, la fibrilación ventricular genera paro cardíaco inmediato, ya que el ventrículo fibrilando no puede generar ningún gasto cardíaco efectivo.',
        'Esta comparación retoma directamente la importancia ya vista sobre el gasto cardíaco al inicio de este bloque: mientras la aurícula contribuye de forma relativamente menor al llenado ventricular total, el ventrículo es la cámara que genera el gasto cardíaco efectivo hacia la circulación, por lo que su pérdida completa de actividad contráctil organizada (como ocurre en la fibrilación ventricular) es incompatible con la vida sin reanimación inmediata.'
      ]
    },
    {
      t:'La muerte súbita cardíaca y su relación con las arritmias ventriculares',
      p:[
        'La *muerte súbita cardíaca* es, en una proporción considerable de los casos, la consecuencia directa de una arritmia ventricular maligna (taquicardia ventricular que degenera en fibrilación ventricular, o fibrilación ventricular primaria) en un paciente con enfermedad cardíaca estructural subyacente, con frecuencia relacionada con la cardiopatía isquémica ya vista en temas anteriores de este bloque.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre reconocimiento temprano de urgencias con ventana de tiempo limitada: la fibrilación ventricular exige reanimación cardiopulmonar inmediata y desfibrilación tan pronto como sea posible, ya que la probabilidad de recuperación disminuye considerablemente con cada minuto de retraso, el mismo principio de "tiempo crítico" ya visto en el infarto agudo de miocardio, ahora aplicado a la arritmia que con frecuencia lo complica de forma fatal.'
      ],
      foco:[
        '*Consideración clínica*: la misma arritmia ventricular puede representar una urgencia relativa o una emergencia inmediata según el estado hemodinámico del paciente; la fibrilación ventricular, en particular, exige desfibrilación inmediata sin ninguna demora diagnóstica adicional.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 39.'
},

'bloqueos-conduccion-cardiaca': {
  tema:'Bloqueos de la conducción cardíaca',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente el sistema de conducción cardíaco ya visto al inicio de este bloque, ahora explorando qué ocurre cuando ese sistema no genera arritmias por actividad eléctrica caótica, sino por una interrupción de la conducción normal del impulso.',
  claves:['bloqueo auriculoventricular','bloqueo de rama','marcapasos definitivo'],
  sigue:'valvulopatias-estenosis',
  secciones:[
    {
      t:'El bloqueo auriculoventricular como interrupción entre aurículas y ventrículos',
      p:[
        'El *bloqueo auriculoventricular* es una interrupción, parcial o completa, de la conducción del impulso eléctrico desde las aurículas hacia los ventrículos a través del nódulo auriculoventricular ya visto al inicio de este bloque, clasificado en grados progresivos de severidad: desde un retraso leve de la conducción hasta una interrupción completa donde ningún impulso auricular llega a los ventrículos.',
        'Reconocer este espectro de severidad, desde formas leves que pueden no requerir ninguna intervención hasta formas completas que exigen un marcapasos definitivo, retoma un principio general ya visto repetidamente en este pensum sobre gradar la severidad de una condición para determinar el manejo apropiado: no todo bloqueo auriculoventricular representa la misma urgencia clínica, y el grado específico determina directamente si el paciente requiere solo observación o intervención inmediata.'
      ]
    },
    {
      t:'El bloqueo de rama como interrupción en el sistema de conducción intraventricular',
      p:[
        'El *bloqueo de rama* es una interrupción de la conducción en una de las dos ramas del sistema de His-Purkinje que llevan el impulso eléctrico hacia cada ventrículo, generando un patrón electrocardiográfico característico donde ese ventrículo específico se activa con retraso respecto al otro -a diferencia del bloqueo auriculoventricular, que interrumpe la conducción entre aurículas y ventrículos, el bloqueo de rama ocurre en un punto más distal del sistema de conducción.',
        'Distinguir el nivel anatómico específico donde ocurre una interrupción de la conducción -auriculoventricular versus de rama- retoma directamente la importancia ya vista sobre comprender la anatomía del sistema de conducción como base para localizar con precisión dónde falla ese sistema en cada caso específico, un principio de localización anatómica ya visto en otros contextos de este pensum aplicado ahora al sistema eléctrico cardíaco.'
      ]
    },
    {
      t:'El marcapasos definitivo como solución para los bloqueos más severos',
      p:[
        'El *marcapasos definitivo* es un dispositivo implantado que genera artificialmente el impulso eléctrico necesario para mantener una frecuencia cardíaca apropiada cuando el sistema de conducción natural del paciente ya no puede hacerlo de forma confiable, indicado típicamente en bloqueos auriculoventriculares completos o de alto grado, particularmente cuando generan síntomas.',
        'Este tema cierra retomando el hilo conductor de todo este bloque de arritmias y trastornos de conducción: mientras la fibrilación auricular y las arritmias ventriculares ya vistas representan un exceso o desorganización de la actividad eléctrica, los bloqueos de la conducción representan el problema opuesto -una insuficiencia de esa actividad eléctrica para llegar a donde debe llegar- y el marcapasos definitivo resuelve precisamente ese problema opuesto, suministrando artificialmente el impulso que el sistema natural ya no genera o conduce de forma confiable.'
      ],
      foco:[
        '*Consideración clínica*: el grado específico de bloqueo auriculoventricular determina directamente el manejo apropiado -desde la observación en formas leves hasta la indicación de marcapasos definitivo en formas completas o sintomáticas.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 40.'
},

'valvulopatias-estenosis': {
  tema:'Valvulopatías: estenosis',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente el ciclo cardíaco y las válvulas cardíacas ya mencionadas al inicio de este bloque, desarrollando ahora en detalle qué ocurre cuando una válvula se estrecha y ya no permite el flujo de sangre de forma apropiada.',
  claves:['estenosis aórtica','estenosis mitral','soplo de estenosis valvular'],
  sigue:'valvulopatias-insuficiencia',
  secciones:[
    {
      t:'La estenosis aórtica como obstrucción a la salida del ventrículo izquierdo',
      p:[
        'La *estenosis aórtica* es el estrechamiento de la válvula aórtica que obstruye el flujo de salida del ventrículo izquierdo hacia la circulación sistémica, obligando al ventrículo a generar presiones considerablemente más altas para mantener el gasto cardíaco a través de esa obstrucción -esta sobrecarga de presión crónica retoma directamente la importancia ya vista sobre la poscarga como uno de los determinantes del gasto cardíaco al inicio de este bloque, ya que la estenosis aórtica representa, en esencia, un aumento fijo y progresivo de la poscarga ventricular izquierda.',
        'La tríada clásica de síntomas de la estenosis aórtica severa -angina, síncope, e insuficiencia cardíaca- retoma la importancia ya vista repetidamente en este pensum sobre reconocer patrones sintomáticos característicos: la aparición de cualquiera de estos síntomas en un paciente con estenosis aórtica conocida marca un punto de inflexión pronóstico relevante que orienta directamente hacia la necesidad de reemplazo valvular.'
      ]
    },
    {
      t:'La estenosis mitral como obstrucción al llenado del ventrículo izquierdo',
      p:[
        'La *estenosis mitral* es el estrechamiento de la válvula mitral que obstruye el flujo de sangre desde la aurícula izquierda hacia el ventrículo izquierdo durante la diástole, generando congestión retrógrada hacia la circulación pulmonar -a diferencia de la estenosis aórtica, que sobrecarga al ventrículo izquierdo con un aumento de poscarga durante la sístole, la estenosis mitral obstruye específicamente el llenado ventricular durante la diástole, retomando la distinción entre sístole y diástole ya vista en el ciclo cardíaco del primer tema de este bloque.',
        'Esta distinción entre una obstrucción sistólica (estenosis aórtica) y una diastólica (estenosis mitral) retoma un principio general ya visto repetidamente en este pensum sobre localizar con precisión en qué fase específica del ciclo fisiológico ocurre una alteración, ya que esa localización determina directamente tanto las manifestaciones clínicas esperadas como el manejo apropiado de cada valvulopatía específica.'
      ]
    },
    {
      t:'El soplo de estenosis valvular como signo característico',
      p:[
        'El *soplo de estenosis valvular* es el sonido anormal generado por el flujo turbulento de sangre al pasar a través de una válvula estrechada, con características de intensidad, momento del ciclo cardíaco, y localización que varían según la válvula específica afectada, permitiendo con frecuencia una sospecha diagnóstica inicial orientada mediante la auscultación cardíaca antes de la confirmación con ecocardiograma.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre el examen físico sistemático como herramienta diagnóstica de primera línea: reconocer las características específicas de un soplo -su localización, su momento en el ciclo cardíaco, hacia dónde se irradia- orienta directamente hacia la valvulopatía específica probable, un ejercicio de razonamiento clínico que retoma la lógica de reconocimiento de patrones ya aplicada repetidamente a lo largo de todo este pensum.'
      ],
      foco:[
        '*Consideración clínica*: la aparición de angina, síncope, o insuficiencia cardíaca en un paciente con estenosis aórtica conocida marca un punto de inflexión pronóstico que orienta directamente hacia la necesidad de reemplazo valvular.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 63.'
},

'valvulopatias-insuficiencia': {
  tema:'Valvulopatías: insuficiencia',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente las valvulopatías estenóticas ya vistas, mostrando ahora el mecanismo opuesto: en vez de una válvula que no se abre apropiadamente, una válvula que no cierra apropiadamente, permitiendo un flujo retrógrado anormal de sangre.',
  claves:['insuficiencia mitral','insuficiencia aórtica','soplo de insuficiencia valvular'],
  sigue:'hipertension-arterial-sistemica-manejo-especializado',
  secciones:[
    {
      t:'La insuficiencia mitral como flujo retrógrado hacia la aurícula izquierda',
      p:[
        'La *insuficiencia mitral* es el cierre inapropiado de la válvula mitral durante la sístole ventricular, permitiendo que una porción de la sangre regrese hacia la aurícula izquierda en vez de dirigirse completamente hacia la circulación sistémica -este mecanismo opuesto al de la estenosis mitral ya vista en el tema anterior (que obstruye el flujo anterógrado) retoma directamente la importancia ya vista sobre las válvulas como estructuras que garantizan el flujo unidireccional normal del ciclo cardíaco.',
        'Reconocer que la insuficiencia mitral genera una sobrecarga de volumen sobre la aurícula y el ventrículo izquierdos, a diferencia de la sobrecarga de presión característica de la estenosis aórtica ya vista, retoma un principio general ya visto repetidamente en este pensum sobre distinguir mecanismos de sobrecarga cardíaca distintos (de presión versus de volumen) que, aunque ambos eventualmente pueden llevar a insuficiencia cardíaca, tienen manifestaciones y velocidades de progresión clínica diferentes.'
      ]
    },
    {
      t:'La insuficiencia aórtica como flujo retrógrado hacia el ventrículo izquierdo',
      p:[
        'La *insuficiencia aórtica* es el cierre inapropiado de la válvula aórtica durante la diástole, permitiendo que sangre ya eyectada hacia la aorta regrese hacia el ventrículo izquierdo -esta regurgitación diastólica genera una sobrecarga de volumen adicional sobre el ventrículo izquierdo en cada ciclo cardíaco, que con el tiempo puede generar una dilatación ventricular progresiva.',
        'Comparar la insuficiencia aórtica con la estenosis aórtica ya vista en el tema anterior -ambas afectan la misma válvula, pero mediante mecanismos y en fases del ciclo cardíaco opuestos- retoma directamente la importancia ya vista sobre reconocer que una misma estructura anatómica puede fallar de dos formas mecánicamente opuestas, cada una con consecuencias hemodinámicas y manifestaciones clínicas distintas que exigen un razonamiento diferenciado.'
      ]
    },
    {
      t:'El soplo de insuficiencia valvular y su distinción del soplo estenótico',
      p:[
        'El *soplo de insuficiencia valvular* -generado por el flujo turbulento retrógrado a través de una válvula que no cierra apropiadamente- tiene características de timing dentro del ciclo cardíaco distintas de las del soplo estenótico ya visto en el tema anterior, ya que ocurre durante la fase del ciclo donde esa válvula específica debería estar cerrada, no abierta.',
        'Este tema cierra el bloque de valvulopatías retomando el hilo conductor completo de ambos temas: comprender el ciclo cardíaco normal, ya establecido en el primer tema de este bloque, es lo que permite entender tanto por qué una válvula estenótica genera un soplo durante su fase de apertura normal como por qué una válvula insuficiente genera un soplo durante su fase de cierre normal -dos mecanismos opuestos que, sin esa base fisiológica normal, serían difíciles de distinguir y comprender por separado.'
      ],
      foco:[
        '*Consideración clínica*: distinguir si un soplo ocurre durante la fase de apertura normal de una válvula (sugiriendo estenosis) o durante su fase de cierre normal (sugiriendo insuficiencia) es la base del razonamiento auscultatorio en valvulopatías.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 63.'
},

'hipertension-arterial-sistemica-manejo-especializado': {
  tema:'Hipertensión arterial sistémica: manejo especializado',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma la hipertensión arterial ya conocida en principio, profundizando ahora en su manejo especializado dentro de la práctica de medicina interna: las formas resistentes al tratamiento, las crisis hipertensivas, y el daño acumulado a órganos blanco.',
  claves:['hipertensión resistente','crisis hipertensiva','daño a órgano blanco por hipertensión'],
  sigue:'miocardiopatias',
  secciones:[
    {
      t:'La hipertensión resistente como reto terapéutico específico',
      p:[
        'La *hipertensión resistente* es la presión arterial que permanece por encima de la meta a pesar de recibir tres o más medicamentos antihipertensivos de clases distintas, incluyendo idealmente un diurético, a las dosis apropiadas -esta definición retoma la importancia ya vista repetidamente en este pensum sobre no asumir automáticamente que un tratamiento está fallando por elección farmacológica incorrecta antes de investigar sistemáticamente otras explicaciones posibles, como la adherencia real al tratamiento o una causa secundaria de hipertensión no identificada.',
        'Investigar sistemáticamente la adherencia real al tratamiento antes de escalar el manejo farmacológico retoma un principio general ya visto en otros contextos de este pensum sobre polifarmacia y adherencia terapéutica: un paciente que en apariencia "no responde" a tres medicamentos puede, en realidad, no estarlos tomando de forma consistente, una posibilidad que debe descartarse activamente antes de asumir resistencia farmacológica verdadera.'
      ]
    },
    {
      t:'La crisis hipertensiva y la distinción entre urgencia y emergencia',
      p:[
        'La *crisis hipertensiva* es una elevación severa y aguda de la presión arterial, que se clasifica en dos categorías con implicaciones de manejo radicalmente distintas: la urgencia hipertensiva, donde la presión está muy elevada pero sin evidencia de daño agudo a órgano blanco, y la emergencia hipertensiva, donde sí existe ese daño agudo (a nivel cerebral, cardíaco, renal, u otro), exigiendo reducción tensional inmediata y hospitalaria.',
        'Esta distinción entre urgencia y emergencia según la presencia o ausencia de daño agudo a órgano blanco, más que según el valor numérico de presión arterial aislado, retoma un principio general ya visto repetidamente en este pensum sobre no basar la urgencia clínica de una condición únicamente en un valor numérico, sino en su impacto funcional real: dos pacientes con la misma presión arterial extremadamente elevada pueden tener urgencias clínicas completamente distintas según si ya presentan o no daño de órgano agudo.'
      ]
    },
    {
      t:'El daño a órgano blanco por hipertensión como consecuencia acumulada',
      p:[
        'El *daño a órgano blanco por hipertensión* -a nivel cardíaco (hipertrofia ventricular izquierda, retomando directamente la sobrecarga de presión ya vista en valvulopatías), renal (nefroesclerosis hipertensiva, tema que se retomará en la materia de Nefrología de este mismo cuatrimestre), cerebral, y retiniano- refleja el efecto acumulativo de años de presión arterial mal controlada sobre estructuras vasculares vulnerables.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre las consecuencias de una sobrecarga hemodinámica crónica: de la misma forma que la estenosis aórtica genera hipertrofia ventricular por sobrecarga de presión sostenida, la hipertensión arterial sistémica no controlada genera ese mismo tipo de daño estructural progresivo, reforzando la importancia del control tensional sostenido, no solo del alivio sintomático puntual, para prevenir estas consecuencias acumuladas a largo plazo.'
      ],
      foco:[
        '*Consideración clínica*: la distinción entre urgencia y emergencia hipertensiva depende de la presencia de daño agudo a órgano blanco, no únicamente del valor numérico de presión arterial, y determina directamente si el manejo puede ser ambulatorio y gradual o exige reducción tensional inmediata y hospitalaria.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 44.'
},

'miocardiopatias': {
  tema:'Miocardiopatías',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente la insuficiencia cardíaca ya vista, profundizando ahora en un grupo de enfermedades del músculo cardíaco mismo, no secundarias a enfermedad coronaria, valvular, o hipertensiva, sino primariamente estructurales del propio miocardio.',
  claves:['miocardiopatía dilatada','miocardiopatía hipertrófica','miocardiopatía restrictiva'],
  sigue:'endocarditis-infecciosa',
  secciones:[
    {
      t:'La miocardiopatía dilatada como forma más frecuente',
      p:[
        'La *miocardiopatía dilatada* es la forma más frecuente de miocardiopatía, caracterizada por dilatación y disfunción contráctil del ventrículo, generando un cuadro clínico de insuficiencia cardíaca con fracción de eyección reducida, ya vista en el tema correspondiente de este bloque, pero con un origen primariamente muscular en vez de isquémico, valvular, o hipertensivo.',
        'Reconocer que la insuficiencia cardíaca con fracción de eyección reducida puede tener múltiples causas subyacentes distintas -isquémica, hipertensiva, o miocardiopática primaria como esta- retoma un principio general ya visto repetidamente en este pensum sobre no confundir la manifestación clínica final común (en este caso, el síndrome de insuficiencia cardíaca) con su causa subyacente específica, que determina consideraciones pronósticas y de manejo distintas según cada caso.'
      ]
    },
    {
      t:'La miocardiopatía hipertrófica y su relevancia en la muerte súbita del joven',
      p:[
        'La *miocardiopatía hipertrófica* es una condición genética que genera engrosamiento anormal del músculo ventricular, con frecuencia asimétrico, que puede generar obstrucción al flujo de salida ventricular y predisponer a arritmias ventriculares malignas, ya vistas en otro tema de este bloque, siendo una de las causas reconocidas de muerte súbita cardíaca en personas jóvenes y deportistas aparentemente sanos.',
        'Esta conexión con la muerte súbita cardíaca retoma directamente la importancia ya vista sobre esa condición en el tema de arritmias ventriculares: mientras la muerte súbita en el adulto mayor con frecuencia se relaciona con cardiopatía isquémica, en el paciente joven la miocardiopatía hipertrófica es una de las causas estructurales subyacentes más reconocidas, reforzando la importancia de la evaluación cardiovascular apropiada antes de la actividad deportiva competitiva en poblaciones de riesgo.'
      ]
    },
    {
      t:'La miocardiopatía restrictiva como forma menos frecuente pero clínicamente relevante',
      p:[
        'La *miocardiopatía restrictiva* es la forma menos frecuente de las tres, caracterizada por un ventrículo con paredes rígidas que no se distienden apropiadamente durante la diástole, generando un cuadro clínico que retoma directamente la fisiopatología ya vista en la insuficiencia cardíaca con fracción de eyección preservada de otro tema de este bloque, aunque con causas subyacentes distintas (como enfermedades infiltrativas del miocardio).',
        'Este tema cierra el bloque de miocardiopatías retomando el hilo conductor de todo este bloque de Cardiología: las tres formas de miocardiopatía -dilatada, hipertrófica, y restrictiva- ilustran cómo una misma categoría general de enfermedad (enfermedad primaria del músculo cardíaco) puede generar mecanismos fisiopatológicos y presentaciones clínicas completamente distintos entre sí, cada uno retomando y aplicando conceptos ya establecidos en temas previos de este mismo bloque sobre el ciclo cardíaco, la contractilidad, y la relajación ventricular.'
      ],
      foco:[
        '*Consideración clínica*: la miocardiopatía hipertrófica es una causa reconocida de muerte súbita cardíaca en personas jóvenes y deportistas aparentemente sanos, reforzando la importancia de la evaluación cardiovascular apropiada antes de la actividad deportiva competitiva en poblaciones de riesgo.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 54.'
},

'endocarditis-infecciosa': {
  tema:'Endocarditis infecciosa',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este tema retoma directamente las valvulopatías ya vistas en este bloque, mostrando cómo las válvulas cardíacas, además de fallar por estenosis o insuficiencia estructural, pueden ser el sitio de una infección grave con consecuencias tanto locales como sistémicas.',
  claves:['endocarditis infecciosa','vegetación valvular','profilaxis de endocarditis'],
  sigue:'enfermedad-arterial-periferica',
  secciones:[
    {
      t:'La endocarditis infecciosa como infección del endocardio valvular',
      p:[
        'La *endocarditis infecciosa* es la infección del endocardio, con mayor frecuencia afectando las válvulas cardíacas, particularmente aquellas ya dañadas previamente por una valvulopatía estructural ya vista en otros temas de este bloque, o por la presencia de material protésico -este antecedente de daño valvular previo retoma directamente la importancia ya vista sobre reconocer factores predisponentes que aumentan el riesgo de una complicación posterior.',
        'Reconocer la fiebre persistente en un paciente con un soplo cardíaco nuevo o cambiante, o con antecedente de valvulopatía conocida, como un patrón que debe elevar la sospecha de endocarditis infecciosa retoma un principio general ya visto repetidamente en este pensum sobre combinar hallazgos aparentemente independientes (fiebre y un hallazgo cardíaco) para reconocer un patrón clínico específico que orienta hacia un diagnóstico concreto.'
      ]
    },
    {
      t:'La vegetación valvular como hallazgo característico',
      p:[
        'La *vegetación valvular* es una masa formada por microorganismos, plaquetas, y fibrina que se adhiere a la válvula infectada, visible mediante ecocardiograma, y que retoma directamente la importancia ya vista sobre confirmar mediante un hallazgo de imagen específico una sospecha clínica inicial: de la misma forma que otros hallazgos de imagen ya vistos en este pensum confirman diagnósticos sospechados clínicamente, la vegetación valvular confirma la sospecha de endocarditis infecciosa generada por el cuadro clínico.',
        'Las vegetaciones no solo confirman el diagnóstico, sino que representan un riesgo adicional relevante: fragmentos de estas vegetaciones pueden desprenderse y generar eventos embólicos a distancia, un mecanismo que retoma directamente la importancia ya vista sobre el riesgo embólico en la fibrilación auricular de otro tema de este bloque, aunque aquí el material embólico es infeccioso en vez de trombótico puro, con el riesgo adicional de generar infecciones metastásicas en el sitio del embolismo.'
      ]
    },
    {
      t:'La profilaxis de endocarditis en pacientes de alto riesgo',
      p:[
        'La *profilaxis de endocarditis* -el uso de antibióticos antes de ciertos procedimientos dentales o invasivos en pacientes con condiciones cardíacas específicas de alto riesgo, como válvulas protésicas o antecedente de endocarditis previa- retoma un principio general ya visto repetidamente en este pensum sobre prevención dirigida específicamente a poblaciones de mayor riesgo, en vez de aplicarse de forma universal a toda la población.',
        'Este tema cierra el bloque de Cardiología retomando el hilo conductor completo de esta materia: desde la anatomía y fisiología normal del primer tema hasta la endocarditis infecciosa de este último, cada condición cardíaca específica desarrollada -isquémica, arrítmica, de conducción, valvular estructural, hipertensiva, miocardiopática, e infecciosa- se explicó en relación directa con los principios fisiológicos normales establecidos desde el inicio, reforzando que comprender el corazón normal es indispensable para entender cualquiera de sus alteraciones específicas, principio que se retomará ahora al pasar al siguiente y último tema de vasos periféricos.'
      ],
      foco:[
        '*Consideración clínica*: la profilaxis antibiótica de endocarditis se reserva específicamente para pacientes de alto riesgo (válvulas protésicas, endocarditis previa) antes de ciertos procedimientos invasivos, no se aplica de forma universal a toda la población.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 67.'
},

'enfermedad-arterial-periferica': {
  tema:'Enfermedad arterial periférica',
  bloque:'Cardiología', programa:'unirm', cuatri:13, min:13,
  idea:'Este último tema cierra el bloque de Cardiología retomando directamente el concepto de aterosclerosis ya visto como causa de cardiopatía isquémica, mostrando ahora cómo ese mismo proceso patológico puede afectar arterias fuera del territorio coronario, particularmente las de los miembros inferiores.',
  claves:['claudicación intermitente','índice tobillo-brazo','isquemia arterial de miembros'],
  sigue:'anatomia-fisiologia-renal',
  secciones:[
    {
      t:'La claudicación intermitente como síntoma característico',
      p:[
        'La *claudicación intermitente* es el dolor muscular, típicamente en la pantorrilla, que aparece de forma predecible con la marcha y se alivia con el reposo, reflejando el mismo desequilibrio entre aporte y demanda de oxígeno ya visto en la angina estable al inicio de este bloque, pero ahora aplicado al músculo esquelético de los miembros inferiores en vez de al músculo cardíaco.',
        'Reconocer este paralelismo entre la claudicación intermitente y la angina estable -ambas representan un desequilibrio aporte-demanda predecible con el esfuerzo y aliviado con el reposo, solo que en territorios vasculares distintos- retoma directamente un principio general ya visto repetidamente en este pensum sobre reconocer un mismo mecanismo fisiopatológico general (aterosclerosis que genera estenosis arterial fija) manifestándose en órganos y territorios vasculares diferentes según cuál arteria específica esté afectada.'
      ]
    },
    {
      t:'El índice tobillo-brazo como herramienta diagnóstica objetiva',
      p:[
        'El *índice tobillo-brazo* es una medición no invasiva que compara la presión arterial sistólica medida en el tobillo con la medida en el brazo, un valor anormalmente bajo indicando una reducción del flujo arterial hacia el miembro inferior -esta herramienta retoma la importancia ya vista repetidamente en este pensum sobre confirmar objetivamente una sospecha clínica generada por el síntoma característico, en este caso la claudicación intermitente, mediante una medición cuantificable y reproducible.',
        'Esta medición relativamente simple y no invasiva, en comparación con estudios de imagen más complejos, retoma un principio general ya visto en otros contextos de este pensum sobre priorizar herramientas diagnósticas menos invasivas y más accesibles cuando ofrecen suficiente valor diagnóstico, reservando estudios más complejos para casos donde esta evaluación inicial no es suficiente o donde se planea una intervención específica.'
      ]
    },
    {
      t:'La isquemia arterial de miembros: desde la forma crónica hasta la urgencia aguda',
      p:[
        'La *isquemia arterial de miembros* puede presentarse como una condición crónica y progresiva (la claudicación intermitente ya vista, que puede progresar hasta dolor en reposo o pérdida tisular en casos avanzados) o como una urgencia vascular aguda, cuando una oclusión arterial súbita, con frecuencia embólica, compromete de forma crítica y repentina la perfusión de un miembro, exigiendo reconocimiento y manejo urgente para evitar la pérdida del miembro.',
        'Este tema, y con él todo el bloque de Cardiología, cierra retomando el hilo conductor completo de toda esta materia: desde la fisiología cardiovascular normal del primer tema hasta esta enfermedad arterial periférica final, cada condición desarrollada -coronaria, de insuficiencia cardíaca, arrítmica, valvular, hipertensiva, miocardiopática, infecciosa, y ahora periférica- comparte el mismo sistema circulatorio interconectado, reforzando que comprender la circulación como un sistema único, no como órganos aislados, es indispensable para el razonamiento cardiovascular completo que esta materia buscó establecer.'
      ],
      foco:[
        '*Consideración clínica*: una oclusión arterial aguda de un miembro, a diferencia de la claudicación intermitente crónica, es una urgencia vascular que exige reconocimiento y manejo inmediato para evitar la pérdida del miembro afectado.'
      ]
    }
  ],
  ref:'Braunwald, Tratado de Cardiología, cap. 65.'
}

});
