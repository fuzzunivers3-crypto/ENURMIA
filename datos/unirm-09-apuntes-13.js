/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 13)
   FISIOPATOLOGIA reescrita al estandar extenso. Mismas 13 claves
   de objeto que ya existian, repartidas entre unirm-09-apuntes.js
   (1) y unirm-09-apuntes-4.js (12). Object.assign las sobrescribe
   sin romper "Leer el tema".

   Igual que en Anatomia Patologica I, la cadena `sigue` de los 13
   temas YA estaba en el orden correcto de principio a fin -ningun
   hueco ni clave rota-. Solo se cierra el cabo suelto final:
   'sindrome-metabolico' (ultimo tema, sigue:null) ahora encadena
   hacia 'organizacion-general-sistema-nervioso', primer tema de
   Neuroanatomia, la materia siguiente de este cuatrimestre.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'fisiopatologia-equilibrio-acido-base': {
  tema:'Fisiopatología del equilibrio ácido-base',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:14,
  idea:'Leer un gas arterial da miedo la primera vez, pero en el fondo son solo cuatro escenarios posibles, y una vez que entiendes el mecanismo de cada uno, identificarlos deja de ser memorizar y pasa a ser deducir.',
  claves:['acidosis metabólica','alcalosis respiratoria','anion gap','compensación'],
  sigue:'fisiopatologia-liquidos-electrolitos',
  secciones:[
    {
      t:'Los cuatro trastornos primarios posibles',
      p:[
        'El equilibrio ácido-base depende de dos variables: el componente metabólico (el bicarbonato, regulado por el riñón) y el componente respiratorio (el CO2, regulado por la ventilación). Un trastorno PRIMARIO puede originarse en cualquiera de los dos, y en cualquiera de las dos direcciones: acidosis metabólica (bicarbonato bajo), alcalosis metabólica (bicarbonato alto), acidosis respiratoria (CO2 alto, por hipoventilación) o alcalosis respiratoria (CO2 bajo, por hiperventilación). Son solo cuatro combinaciones posibles, cada una con un mecanismo fisiológico identificable.'
      ],
      foco:[
        'Cuatro trastornos primarios posibles: acidosis/alcalosis metabólica (bicarbonato) y acidosis/alcalosis respiratoria (CO2) -cada trastorno se origina en uno de los dos componentes del equilibrio ácido-base.'
      ]
    },
    {
      t:'El anion gap: distinguir dos tipos de acidosis metabólica',
      p:[
        'El anion gap (la diferencia calculada entre los cationes y aniones medidos habitualmente en sangre) ayuda a distinguir el mecanismo específico de una acidosis metabólica: un anion gap elevado sugiere que se está acumulando un ácido no medido directamente (como en la cetoacidosis diabética o la acidosis láctica), mientras que un anion gap normal sugiere pérdida directa de bicarbonato (como en una diarrea severa) sin acumulación de un ácido nuevo no medido.'
      ],
      foco:[
        'Anion gap elevado: acumulación de un ácido no medido (cetoacidosis, acidosis láctica). Anion gap normal: pérdida directa de bicarbonato (como en diarrea severa), sin ácido nuevo acumulado.'
      ]
    },
    {
      t:'La compensación: el cuerpo intenta corregir el pH',
      p:[
        'Ante un trastorno primario, el sistema NO afectado directamente intenta compensar para devolver el pH hacia la normalidad: ante una acidosis metabólica, los pulmones hiperventilan para bajar el CO2 (compensación respiratoria); ante una acidosis respiratoria, el riñón retiene más bicarbonato (compensación metabólica, que tarda días en desarrollarse plenamente, a diferencia de la compensación respiratoria, que es casi inmediata). La compensación nunca sobrecorrige por completo el pH hasta la normalidad exacta; si el pH está completamente normal, generalmente no hay trastorno ácido-base activo, o hay dos trastornos opuestos coexistiendo.'
      ],
      foco:[
        '*Consideración clínica*: la compensación respiratoria es rápida (minutos-horas); la compensación renal/metabólica es lenta (días). Un pH exactamente normal en presencia de alteraciones de bicarbonato y CO2 sugiere trastornos mixtos, no una compensación perfecta.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 33.'
},

'fisiopatologia-liquidos-electrolitos': {
  tema:'Fisiopatología de líquidos y electrolitos',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:13,
  idea:'El sodio en sangre no mide, en el fondo, cuánto sodio tiene el cuerpo: mide la relación entre sodio y agua. Esa distinción, aunque contraintuitiva la primera vez que se explica, es la clave para entender casi todos los trastornos del sodio en la práctica clínica.',
  claves:['hiponatremia','hiperkalemia','deshidratación','tercer espacio'],
  sigue:'fisiopatologia-fiebre-sirs',
  secciones:[
    {
      t:'Por qué el sodio en sangre refleja agua, no solo sal',
      p:[
        'La hiponatremia (sodio bajo en sangre) casi nunca significa que el cuerpo tenga poco sodio total: la mayoría de las veces significa que el cuerpo tiene relativamente DEMASIADA AGUA respecto al sodio que tiene, diluyendo su concentración. Por eso, antes de tratar una hiponatremia, hay que preguntarse cómo está el volumen del paciente (deshidratado, normal, o con exceso de líquido), no simplemente "reponer sodio" sin pensar en el agua.'
      ],
      foco:[
        'La hiponatremia casi nunca refleja déficit de sodio total; refleja exceso relativo de agua respecto al sodio -tratarla exige primero evaluar el estado de volumen del paciente.'
      ]
    },
    {
      t:'Hiperkalemia: por qué es tan peligrosa',
      p:[
        'La hiperkalemia (potasio alto en sangre) es particularmente peligrosa porque el potasio es central para el potencial de membrana en reposo: un potasio muy elevado altera directamente la excitabilidad de las células cardíacas, pudiendo producir arritmias graves antes que cualquier otro síntoma visible -una de las pocas alteraciones electrolíticas que puede matar en minutos si no se reconoce a tiempo.'
      ],
      foco:[
        '*Consideración clínica*: la hiperkalemia altera directamente el potencial de membrana cardíaco, pudiendo producir arritmias graves como primera manifestación clínica -amerita reconocimiento y corrección urgente.'
      ]
    },
    {
      t:'El tercer espacio: deshidratado por fuera, con líquido atrapado por dentro',
      p:[
        'El tercer espacio es un concepto útil para entender por qué un paciente puede estar clínicamente deshidratado (con signos de bajo volumen circulante efectivo) mientras acumula líquido en algún lugar del cuerpo (como ascitis): ese líquido "atrapado" fuera del compartimento vascular normal no está disponible para la circulación, aunque el cuerpo, en total, no haya perdido agua. Nunca se corrige un trastorno de sodio o potasio solo mirando el número de laboratorio; siempre hay que interpretar ese número junto con el estado clínico de volumen del paciente.'
      ],
      foco:[
        'El tercer espacio explica la aparente contradicción de un paciente con bajo volumen circulante efectivo pero líquido acumulado (ascitis) en otro compartimento -el agua total no se perdió, pero no está disponible para la circulación.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 33.'
},

'fisiopatologia-fiebre-sirs': {
  tema:'Fisiopatología de la fiebre y la respuesta inflamatoria sistémica',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:13,
  idea:'Este tema conecta directamente dos bloques ya vistos: la regulación de la temperatura de Fisiología I, y la inflamación aguda de Anatomía Patológica -juntas explican por qué una infección local puede, si se descontrola, terminar afectando a todo el cuerpo a la vez.',
  claves:['pirógeno','fiebre','SIRS','citocina'],
  sigue:'fisiopatologia-insuficiencia-cardiaca',
  secciones:[
    {
      t:'Del pirógeno al nuevo punto de ajuste',
      p:[
        'Un pirógeno es cualquier sustancia capaz de producir fiebre, ya sea externa (como el lipopolisacárido de bacterias gramnegativas) o interna (citocinas inflamatorias que el propio cuerpo libera durante una infección o inflamación). Estas sustancias actúan sobre el hipotálamo, elevando el punto de ajuste de temperatura.'
      ],
      foco:[
        'Un pirógeno (externo, como LPS bacteriano, o interno, como citocinas) actúa sobre el hipotálamo elevando el punto de ajuste de temperatura -mecanismo directo de la fiebre.'
      ]
    },
    {
      t:'SIRS: cuando la inflamación se generaliza',
      p:[
        'El SIRS (síndrome de respuesta inflamatoria sistémica) es lo que ocurre cuando la liberación de citocinas inflamatorias, normalmente contenida en el sitio local de una infección o lesión, se vuelve tan intensa que se derrama hacia la circulación general y afecta a todo el cuerpo a la vez: fiebre (o hipotermia paradójica en casos severos), taquicardia, taquipnea y alteraciones en el conteo de glóbulos blancos son sus manifestaciones típicas.'
      ],
      foco:[
        'El SIRS ocurre cuando las citocinas inflamatorias se derraman de lo local a la circulación general, afectando todo el cuerpo -manifestaciones: fiebre/hipotermia, taquicardia, taquipnea, alteración de glóbulos blancos.'
      ]
    },
    {
      t:'De sepsis a shock séptico',
      p:[
        'Cuando el SIRS se debe específicamente a una infección, se habla de sepsis; y si progresa hasta comprometer la función de otros órganos por la caída de la presión arterial y la mala perfusión tisular generalizada, se llega al shock séptico ya visto en Anatomía Patológica. Este tema muestra un patrón que se repite en Fisiopatología: un mecanismo de defensa normal y útil (la inflamación local) se vuelve peligroso precisamente cuando pierde su contención y se generaliza a todo el cuerpo.'
      ],
      foco:[
        '*Consideración clínica*: SIRS + infección = sepsis. Sepsis + compromiso multiorgánico por hipoperfusión = shock séptico -una progresión de gravedad creciente por pérdida de contención de la inflamación.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 11.'
},

'fisiopatologia-insuficiencia-cardiaca': {
  tema:'Fisiopatología de la insuficiencia cardíaca',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:14,
  idea:'La insuficiencia cardíaca no es "el corazón que se detiene": es el corazón que ya no puede bombear lo suficiente para las necesidades del cuerpo, y buena parte de sus síntomas vienen, paradójicamente, de los propios mecanismos compensadores del cuerpo intentando corregir ese déficit.',
  claves:['insuficiencia cardíaca','precarga','fracción de eyección','remodelado cardíaco'],
  sigue:'fisiopatologia-hipertension-arterial',
  secciones:[
    {
      t:'Fracción de eyección reducida frente a conservada',
      p:[
        'La insuficiencia cardíaca ocurre cuando el corazón no logra bombear suficiente sangre para satisfacer las demandas metabólicas del cuerpo, o solo puede hacerlo a costa de presiones de llenado anormalmente altas. La fracción de eyección es la medida más usada para clasificarla: una fracción de eyección reducida refleja un problema de contractilidad; una fracción de eyección conservada, pero con síntomas de insuficiencia cardíaca de todos modos, sugiere un problema de RELAJACIÓN del ventrículo (que se llena mal, aunque se contraiga con normalidad).'
      ],
      foco:[
        'Fracción de eyección reducida = problema de contractilidad. Fracción de eyección conservada con síntomas = problema de relajación ventricular (llenado deficiente).'
      ]
    },
    {
      t:'Los mecanismos compensadores',
      p:[
        'Ante un gasto cardíaco insuficiente, el cuerpo activa varios mecanismos compensadores: el sistema renina-angiotensina-aldosterona retiene sodio y agua, aumentando la precarga; el sistema simpático aumenta la frecuencia cardíaca y la contractilidad; y el corazón sufre remodelado cardíaco (cambios estructurales, incluida cierta hipertrofia, como adaptación al esfuerzo sostenido).'
      ],
      foco:[
        'Mecanismos compensadores: sistema renina-angiotensina-aldosterona (retención de sodio/agua, aumenta precarga), sistema simpático (aumenta frecuencia/contractilidad), remodelado cardíaco.'
      ]
    },
    {
      t:'Por qué los mecanismos compensadores terminan siendo parte del problema',
      p:[
        'El problema es que estos mecanismos, útiles a corto plazo, se vuelven perjudiciales si se mantienen activados de forma crónica: la retención de agua y sodio termina produciendo la congestión (edema, congestión pulmonar) característica de la insuficiencia cardíaca descompensada, y la activación simpática y hormonal sostenida acelera el deterioro del propio músculo cardíaco con el tiempo. Esta es la lógica detrás de por qué muchos tratamientos de la insuficiencia cardíaca crónica (IECA, betabloqueantes) buscan precisamente BLOQUEAR estos mecanismos compensadores, en vez de estimularlos.'
      ],
      foco:[
        '*Consideración clínica*: los tratamientos de insuficiencia cardíaca crónica (IECA, betabloqueantes) bloquean deliberadamente los mecanismos compensadores, porque a largo plazo hacen más daño que beneficio.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 23.'
},

'fisiopatologia-hipertension-arterial': {
  tema:'Fisiopatología de la hipertensión arterial',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:13,
  idea:'La inmensa mayoría de los casos de hipertensión arterial no tienen una causa única identificable, y ese hecho, lejos de ser una limitación del conocimiento médico, refleja que la presión arterial depende de múltiples sistemas regulatorios trabajando (o fallando) juntos a la vez.',
  claves:['hipertensión arterial','sistema renina angiotensina','resistencia vascular'],
  sigue:'fisiopatologia-respiratoria-hipoxemia-hipercapnia',
  secciones:[
    {
      t:'Retomando la ecuación: gasto cardíaco por resistencia',
      p:[
        'La presión arterial depende del gasto cardíaco y de la resistencia vascular periférica. La hipertensión arterial esencial (sin una causa única identificable, la forma más frecuente con diferencia) resulta de la interacción de múltiples factores que, en conjunto, elevan alguno de estos dos componentes: predisposición genética, exceso de sodio en la dieta, activación crónica del sistema renina angiotensina, y activación simpática sostenida.'
      ],
      foco:[
        'Presión arterial = gasto cardíaco × resistencia vascular. La hipertensión esencial resulta de múltiples factores elevando uno u otro componente (genética, sodio, renina-angiotensina, simpático).'
      ]
    },
    {
      t:'El daño de órgano diana',
      p:[
        'Con el tiempo, la presión elevada sostenida daña progresivamente a los llamados "órganos diana": acelera la aterosclerosis (contribuyendo a enfermedad coronaria e ictus), sobrecarga al corazón (favoreciendo el remodelado cardíaco y, eventualmente, la insuficiencia cardíaca), daña las arteriolas pequeñas del riñón (contribuyendo a enfermedad renal crónica) y de la retina (retinopatía hipertensiva).'
      ],
      foco:[
        'Órganos diana de la hipertensión sostenida: corazón (remodelado, insuficiencia), riñón (arteriolas pequeñas), retina (retinopatía), vasos grandes (aterosclerosis acelerada).'
      ]
    },
    {
      t:'Por qué esos órganos específicos',
      p:[
        'Esta lista de órganos diana no es aleatoria: son, precisamente, los órganos con lechos vasculares particularmente sensibles a la presión sostenida, ya sea por su alto flujo (riñón), su fragilidad vascular (retina, cerebro) o su dependencia de una perfusión constante y eficiente (corazón). Entender la hipertensión como una falla del sistema de control de presión ya estudiado, no como una enfermedad aislada y nueva, es lo que permite predecir tanto sus causas como sus complicaciones.'
      ],
      foco:[
        '*Consideración clínica*: los órganos diana de la hipertensión comparten una característica común -lechos vasculares particularmente sensibles a la presión sostenida, ya sea por alto flujo, fragilidad vascular o dependencia de perfusión constante.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 24.'
},

'fisiopatologia-respiratoria-hipoxemia-hipercapnia': {
  tema:'Fisiopatología respiratoria: hipoxemia e hipercapnia',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:14,
  idea:'Que a un paciente le falte oxígeno y que le sobre CO2 no son, necesariamente, el mismo problema: pueden ocurrir juntos, o cada uno por separado, y distinguir el mecanismo exacto es lo que orienta el tratamiento correcto.',
  claves:['hipoxemia','hipercapnia','shunt','efecto espacio muerto'],
  sigue:'fisiopatologia-renal-nefrotico-nefritico',
  secciones:[
    {
      t:'Desajuste ventilación-perfusión y shunt',
      p:[
        'La hipoxemia puede deberse a varios mecanismos. El desajuste ventilación-perfusión (áreas del pulmón ventiladas pero mal perfundidas, o perfundidas pero mal ventiladas) es la causa más frecuente en la práctica clínica. El shunt es un caso extremo de ese desajuste: sangre que pasa por el pulmón SIN ventilación alguna en esa zona, de modo que ni siquiera aumentando el oxígeno inspirado se corrige del todo, porque esa sangre nunca tuvo contacto con aire.'
      ],
      foco:[
        'El shunt es un caso extremo del desajuste ventilación-perfusión: sangre sin ventilación en esa zona, que no mejora con oxígeno suplementario porque nunca tuvo contacto con aire.'
      ]
    },
    {
      t:'Hipoventilación y alteración de la difusión',
      p:[
        'La hipoventilación general (que reduce el oxígeno disponible en todos los alvéolos a la vez) y la alteración de la difusión (cuando la barrera alvéolo-capilar está engrosada o dañada, dificultando el paso del oxígeno) completan los mecanismos principales de hipoxemia.'
      ],
      foco:[
        'Cuatro mecanismos de hipoxemia: desajuste ventilación-perfusión, shunt, hipoventilación general, y alteración de la difusión alvéolo-capilar.'
      ]
    },
    {
      t:'Hipercapnia: casi siempre un problema de ventilación',
      p:[
        'La hipercapnia (CO2 elevado en sangre) refleja, casi siempre, que la ventilación alveolar total es insuficiente para eliminar el CO2 que el cuerpo produce -a diferencia de la hipoxemia, que tiene varios mecanismos posibles. El efecto espacio muerto agrava específicamente la hipercapnia: si una parte del aire que se mueve con cada respiración va a zonas sin buen riego sanguíneo, ese aire no participa realmente en eliminar CO2.'
      ],
      foco:[
        '*Consideración clínica*: un paciente puede tener hipoxemia SIN hipercapnia (desajuste V/Q o shunt), pero la hipercapnia casi siempre indica que la ventilación global ya es insuficiente -un dato más tardío y preocupante.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 21.'
},

'fisiopatologia-renal-nefrotico-nefritico': {
  tema:'Fisiopatología renal: síndrome nefrótico y nefrítico',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:14,
  idea:'Estos dos síndromes se confunden con frecuencia por sus nombres tan parecidos, pero reflejan daños distintos a la misma estructura -el filtro glomerular ya visto en Fisiología II- y por eso se manifiestan de forma casi opuesta en varios aspectos.',
  claves:['síndrome nefrótico','síndrome nefrítico','proteinuria','hematuria'],
  sigue:'fisiopatologia-insuficiencia-hepatica',
  secciones:[
    {
      t:'Síndrome nefrótico: la barrera de filtración pierde su selectividad',
      p:[
        'El síndrome nefrótico ocurre cuando la barrera de filtración glomerular se daña de una forma que compromete principalmente su capacidad de RETENER proteínas grandes, dejándolas escapar hacia la orina en cantidad masiva: proteinuria severa, que a su vez reduce la proteína (albúmina) en la sangre, bajando la presión oncótica del plasma y produciendo edema generalizado, a veces muy marcado. La hematuria, si aparece, es leve o está ausente en el síndrome nefrótico puro.'
      ],
      foco:[
        'Síndrome nefrótico: proteinuria masiva → hipoalbuminemia → edema generalizado marcado. Hematuria ausente o leve, porque el daño afecta el tamaño de lo filtrado, no rompe capilares.'
      ]
    },
    {
      t:'Síndrome nefrítico: inflamación con ruptura de capilares',
      p:[
        'El síndrome nefrítico, en cambio, es un proceso predominantemente inflamatorio del glomérulo, que daña físicamente los capilares glomerulares lo suficiente como para dejar escapar glóbulos rojos hacia la orina: hematuria, con frecuencia visible, acompañada de hipertensión arterial (por retención de sodio y agua, dado que la inflamación reduce la tasa de filtración glomerular) y proteinuria generalmente más modesta que en el síndrome nefrótico.'
      ],
      foco:[
        'Síndrome nefrítico: proceso inflamatorio que rompe capilares glomerulares → hematuria prominente + hipertensión + proteinuria más modesta.'
      ]
    },
    {
      t:'Regla de contraste para no confundirlos',
      p:[
        'Nefrótico → proteinuria masiva, edema marcado, poca sangre en orina (predomina la pérdida de proteínas). Nefrítico → hematuria prominente, hipertensión, proteinuria más leve (predomina la inflamación con ruptura capilar). Ambos síndromes afectan la misma estructura -el glomérulo- pero por mecanismos de daño distintos, con presentaciones clínicas casi opuestas en varios aspectos.'
      ],
      foco:[
        '*Consideración clínica*: nefrótico = proteinuria masiva + edema + poca hematuria. Nefrítico = hematuria prominente + hipertensión + proteinuria modesta -memorizar el contraste completo, no solo un síntoma aislado.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 26.'
},

'fisiopatologia-insuficiencia-hepatica': {
  tema:'Fisiopatología de la insuficiencia hepática',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:14,
  idea:'El hígado hace tantos trabajos distintos a la vez -metaboliza, fabrica proteínas, filtra la sangre que viene del intestino, produce bilis- que cuando falla, sus consecuencias se manifiestan en casi todos los sistemas del cuerpo a la vez, no en uno solo.',
  claves:['insuficiencia hepática','hipertensión portal','encefalopatía hepática','ascitis'],
  sigue:'fisiopatologia-endocrina-basica',
  secciones:[
    {
      t:'Consecuencias de perder las funciones metabólicas del hígado',
      p:[
        'La insuficiencia hepática compromete varias funciones a la vez: la producción de urea a partir del amoniaco (ciclo de la urea) se reduce, dejando que el amoniaco se acumule en sangre y llegue al cerebro, produciendo la encefalopatía hepática: confusión, alteración del nivel de conciencia, y en casos severos coma. La conjugación de bilirrubina también se compromete, contribuyendo a la ictericia. La síntesis de proteínas plasmáticas (incluidos los factores de coagulación) disminuye, aumentando el riesgo de sangrado.'
      ],
      foco:[
        'La insuficiencia hepática compromete simultáneamente: ciclo de la urea (→ encefalopatía por amoniaco), conjugación de bilirrubina (→ ictericia), síntesis de proteínas/factores de coagulación (→ riesgo de sangrado).'
      ]
    },
    {
      t:'Hipertensión portal',
      p:[
        'Cuando el daño hepático es crónico (como en la cirrosis), el tejido cicatricial (fibrosis) reemplaza progresivamente al tejido hepático funcional y distorsiona la arquitectura vascular del hígado, aumentando la resistencia al flujo de sangre que llega desde el intestino por la vena porta: hipertensión portal.'
      ],
      foco:[
        'La fibrosis hepática crónica distorsiona la arquitectura vascular, aumentando la resistencia al flujo portal -hipertensión portal, consecuencia directa de la cirrosis.'
      ]
    },
    {
      t:'Ascitis y várices: consecuencias de la hipertensión portal',
      p:[
        'Esa presión elevada empuja líquido hacia la cavidad peritoneal, contribuyendo a la ascitis, y además abre rutas venosas alternativas (várices, como las esofágicas) para desviar la sangre, evitando el hígado obstruido -rutas que, al estar bajo presión anormalmente alta, tienen riesgo de romperse y sangrar de forma grave. Este tema conecta directamente Bioquímica II, la Anatomía Patológica (fibrosis) y la semiología (ascitis, ictericia): la insuficiencia hepática es, en gran medida, la suma de perder todas esas funciones bioquímicas a la vez.'
      ],
      foco:[
        '*Consideración clínica*: la hipertensión portal produce ascitis (líquido empujado a peritoneo) y várices esofágicas (rutas venosas alternativas bajo presión anormal, con riesgo de ruptura y sangrado grave).'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 30.'
},

'fisiopatologia-endocrina-basica': {
  tema:'Fisiopatología endocrina básica',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:12,
  idea:'La mayoría de las enfermedades endocrinas se pueden clasificar respondiendo a una sola pregunta: ¿el problema es que hay demasiada hormona, muy poca, o hay hormona suficiente pero el tejido diana no responde a ella?',
  claves:['retroalimentación hormonal','hipotálamo hipófisis','resistencia a la insulina'],
  sigue:'fisiopatologia-dolor-cronico',
  secciones:[
    {
      t:'Tres categorías generales de disfunción endocrina',
      p:[
        'Retomando el eje hipotálamo-hipófisis y la retroalimentación hormonal, una enfermedad endocrina generalmente encaja en una de tres categorías: producción EXCESIVA de una hormona (por ejemplo, un tumor de una glándula que secreta sin responder a la retroalimentación normal), producción INSUFICIENTE (por destrucción de la glándula, o de la estructura que la controla), o RESISTENCIA del tejido diana a una hormona que sí está presente en cantidad normal o incluso elevada.'
      ],
      foco:[
        'Tres categorías de disfunción endocrina: exceso hormonal, déficit hormonal, o resistencia del tejido diana pese a hormona presente.'
      ]
    },
    {
      t:'Resistencia a la insulina como ejemplo central',
      p:[
        'La resistencia a la insulina es el ejemplo más citado de esta tercera categoría: las células del cuerpo responden menos de lo normal a la insulina circulante, así que necesitan concentraciones más altas de insulina para lograr el mismo efecto sobre la captación de glucosa. Inicialmente, el páncreas compensa produciendo más insulina (hiperinsulinemia compensatoria); con el tiempo, si esa compensación no basta, la glucemia empieza a subir.'
      ],
      foco:[
        'Resistencia a la insulina: las células responden menos a la insulina circulante; el páncreas compensa inicialmente con más producción, hasta que esa compensación ya no basta.'
      ]
    },
    {
      t:'Un marco práctico para razonar cualquier trastorno endocrino',
      p:[
        'Ante cualquier trastorno endocrino nuevo, preguntarse primero en cuál de las tres categorías encaja (exceso, déficit, o resistencia) ayuda a organizar el razonamiento antes de profundizar en la glándula específica involucrada -un marco que se aplicará directamente en el tema siguiente, la diabetes mellitus, más adelante en este mismo bloque.'
      ],
      foco:[
        '*Consideración práctica*: clasificar primero un trastorno endocrino en exceso/déficit/resistencia antes de profundizar en la glándula específica -un marco de razonamiento aplicable a cualquier enfermedad endocrina nueva.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 31.'
},

'fisiopatologia-dolor-cronico': {
  tema:'Fisiopatología del dolor crónico',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:13,
  idea:'El dolor crónico no es, simplemente, "el dolor agudo que no se ha curado todavía": en muchos casos, el propio sistema nervioso se reorganiza y empieza a generar o amplificar dolor por sí mismo, incluso cuando el daño tisular original ya sanó por completo.',
  claves:['dolor crónico','sensibilización central','dolor neuropático','hiperalgesia'],
  sigue:'fisiopatologia-anemia',
  secciones:[
    {
      t:'Sensibilización central',
      p:[
        'La sensibilización central es un cambio funcional (y a veces estructural) en las neuronas de la médula espinal y el cerebro que procesan el dolor, tras una exposición prolongada o intensa a señales dolorosas: esas neuronas se vuelven más excitables, amplificando la señal de dolor incluso ante estímulos que antes no dolían tanto. Este cambio explica por qué el dolor crónico puede persistir, e incluso empeorar, después de que el daño tisular original ya haya sanado por completo.'
      ],
      foco:[
        'La sensibilización central hace que las neuronas del dolor se vuelvan más excitables, explicando por qué el dolor crónico persiste incluso después de sanar el daño tisular original.'
      ]
    },
    {
      t:'Dolor neuropático: origen en el propio sistema nervioso',
      p:[
        'El dolor neuropático se origina por daño o disfunción directa del propio sistema nervioso (un nervio periférico dañado, una lesión de la médula espinal), a diferencia del dolor nociceptivo habitual, que se origina por la activación normal de nociceptores frente a un daño tisular real. Suele describirse con calidades distintas (quemante, como choques eléctricos, hormigueo) y responde de forma diferente a los analgésicos habituales.'
      ],
      foco:[
        'Dolor neuropático: se origina por daño del propio sistema nervioso (no por daño tisular real), con calidades distintas (quemante, choques eléctricos) y respuesta diferente a analgésicos habituales.'
      ]
    },
    {
      t:'Hiperalgesia y alodinia',
      p:[
        'La hiperalgesia es una respuesta de dolor exagerada frente a un estímulo que normalmente sí sería doloroso, pero de intensidad menor a la que se percibe; la alodinia es sentir dolor ante un estímulo que normalmente NO debería doler en absoluto (como el simple roce de la ropa). Ambas son manifestaciones típicas de la sensibilización central. Reconocer que el dolor crónico puede tener un componente de sensibilización central es importante porque cambia el enfoque terapéutico.'
      ],
      foco:[
        '*Consideración clínica*: hiperalgesia = dolor exagerado ante estímulo doloroso leve. Alodinia = dolor ante estímulo que normalmente no duele. Ambas reflejan sensibilización central, cambiando el enfoque terapéutico.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 35.'
},

'fisiopatologia-anemia': {
  tema:'Fisiopatología de la anemia',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:13,
  idea:'El cuerpo tiene solo tres formas posibles de terminar con anemia -producir menos glóbulos rojos, destruirlos más rápido de lo normal, o perderlos por sangrado- y clasificar cualquier anemia según cuál de estas tres vías aplica es el primer paso de cualquier estudio.',
  claves:['anemia','hipoxia tisular','eritropoyetina','mecanismo compensador cardiovascular'],
  sigue:'fisiopatologia-diabetes-mellitus',
  secciones:[
    {
      t:'Tres mecanismos posibles, un mismo resultado final',
      p:[
        'La anemia puede deberse a producción insuficiente en la médula ósea (por falta de hierro, vitamina B12, o por enfermedad de la propia médula), destrucción acelerada de glóbulos rojos ya formados (hemólisis), o pérdida de sangre (hemorragia aguda o crónica). Sin importar el mecanismo, el resultado final compartido es el mismo: menos capacidad de transportar oxígeno a los tejidos, hipoxia tisular.'
      ],
      foco:[
        'Tres mecanismos de anemia: producción insuficiente, destrucción acelerada (hemólisis), o pérdida de sangre -todos convergen en hipoxia tisular por menor capacidad de transporte de oxígeno.'
      ]
    },
    {
      t:'Eritropoyetina: la respuesta lenta',
      p:[
        'Ante la hipoxia tisular, el riñón detecta la falta de oxígeno y aumenta la producción de eritropoyetina, la hormona que estimula a la médula ósea a producir más glóbulos rojos. Esta respuesta, sin embargo, tarda días a semanas en aumentar significativamente el conteo de glóbulos rojos, así que no sirve como compensación inmediata.'
      ],
      foco:[
        'La eritropoyetina (producida por el riñón ante hipoxia) estimula la médula ósea, pero tarda días-semanas en aumentar significativamente el conteo de glóbulos rojos -no es una compensación inmediata.'
      ]
    },
    {
      t:'El mecanismo compensador cardiovascular: la respuesta rápida',
      p:[
        'Mientras tanto, el cuerpo activa un mecanismo compensador cardiovascular más rápido: aumenta el gasto cardíaco (mayor frecuencia y volumen sistólico) para hacer circular más rápido la sangre disponible. Una anemia de instauración GRADUAL suele tolerarse mejor, con menos síntomas, que una del mismo grado pero de instauración AGUDA, porque el cuerpo tiene tiempo de activar sus mecanismos compensadores de forma progresiva en el primer caso, no en el segundo.'
      ],
      foco:[
        '*Consideración clínica*: una anemia gradual se tolera mejor que una aguda del mismo grado, porque el cuerpo tiene tiempo de activar sus mecanismos compensadores progresivamente.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 15.'
},

'fisiopatologia-diabetes-mellitus': {
  tema:'Fisiopatología de la diabetes mellitus',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:14,
  idea:'Este tema reúne, en una sola enfermedad, casi todo lo visto en Bioquímica II sobre la regulación de la glucosa: entender bien la diabetes exige recordar exactamente qué hace la insulina, y qué pasa cuando falta o cuando el cuerpo deja de responderle.',
  claves:['resistencia a la insulina','hiperglucemia crónica','cetoacidosis diabética','glucotoxicidad'],
  sigue:'sindrome-metabolico',
  secciones:[
    {
      t:'Dos caminos distintos hacia la misma hiperglucemia',
      p:[
        'La diabetes mellitus tipo 1 resulta de una destrucción autoinmune de las células del páncreas que producen insulina, resultando en un déficit ABSOLUTO de esta hormona. La diabetes tipo 2 resulta, principalmente, de resistencia a la insulina combinada con una capacidad pancreática insuficiente para compensar esa resistencia con más producción de insulina a largo plazo. En ambos casos, el resultado es hiperglucemia crónica.'
      ],
      foco:[
        'Diabetes tipo 1: destrucción autoinmune → déficit ABSOLUTO de insulina. Diabetes tipo 2: resistencia a la insulina + capacidad pancreática compensatoria insuficiente. Ambas convergen en hiperglucemia crónica.'
      ]
    },
    {
      t:'Cetoacidosis diabética',
      p:[
        'La cetoacidosis diabética ocurre casi exclusivamente cuando falta insulina de forma casi absoluta (típico de la diabetes tipo 1 no tratada): las células, sin poder usar la glucosa disponible, activan una cetogénesis descontrolada, produciendo una acidosis metabólica grave.'
      ],
      foco:[
        'La cetoacidosis diabética ocurre por déficit casi absoluto de insulina (típico de tipo 1): cetogénesis descontrolada por falta de uso de glucosa, produciendo acidosis metabólica grave.'
      ]
    },
    {
      t:'Glucotoxicidad: el daño silencioso de la hiperglucemia crónica',
      p:[
        'La glucotoxicidad describe el daño acumulado que la hiperglucemia crónica y sostenida (no la aguda) va causando en distintos tejidos con el tiempo: los vasos sanguíneos pequeños (retinopatía, nefropatía), los nervios periféricos (neuropatía), y los vasos grandes (acelerando la aterosclerosis). Este daño progresivo y silencioso es, en gran medida, la razón por la que el control glucémico sostenido a largo plazo es el objetivo central del tratamiento de la diabetes.'
      ],
      foco:[
        '*Consideración clínica*: la glucotoxicidad (daño de la hiperglucemia CRÓNICA, no aguda) afecta vasos pequeños (retinopatía, nefropatía), nervios periféricos y vasos grandes -razón del énfasis en control glucémico sostenido.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 42.'
},

'sindrome-metabolico': {
  tema:'Síndrome metabólico',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:13,
  idea:'Este último tema del bloque de Fisiopatología cierra mostrando cómo varios factores de riesgo, que podrían parecer independientes entre sí, en realidad comparten un mismo mecanismo subyacente central: la resistencia a la insulina.',
  claves:['síndrome metabólico','obesidad central','dislipidemia','resistencia insulínica'],
  sigue:'organizacion-general-sistema-nervioso',
  secciones:[
    {
      t:'Un conjunto de factores que tienden a presentarse juntos',
      p:[
        'El síndrome metabólico se define por la presencia conjunta de varios factores de riesgo cardiovascular en la misma persona: obesidad central (grasa acumulada preferentemente en el abdomen), presión arterial elevada, glucosa elevada en ayunas (reflejando ya cierto grado de resistencia a la insulina), y dislipidemia característica: triglicéridos elevados y colesterol HDL bajo.'
      ],
      foco:[
        'El síndrome metabólico combina: obesidad central, presión arterial elevada, glucosa elevada en ayunas, y dislipidemia (triglicéridos altos, HDL bajo) -varios factores de riesgo cardiovascular presentándose juntos.'
      ]
    },
    {
      t:'La resistencia insulínica como hilo conductor',
      p:[
        'La resistencia insulínica es considerada el factor subyacente que conecta a la mayoría de estos componentes: la obesidad central (especialmente la grasa visceral) contribuye directamente a la resistencia a la insulina, que a su vez favorece tanto la elevación de la glucosa como alteraciones específicas en el metabolismo de los lípidos y, por mecanismos adicionales, contribuye también a la elevación de la presión arterial.'
      ],
      foco:[
        'La resistencia insulínica (potenciada por la obesidad visceral) es el hilo conductor que conecta glucosa elevada, dislipidemia y presión arterial elevada dentro del síndrome metabólico.'
      ]
    },
    {
      t:'Un único desequilibrio, múltiples manifestaciones',
      p:[
        'Tener síndrome metabólico no es tener varias enfermedades separadas por coincidencia: es tener un único desequilibrio metabólico central (la resistencia a la insulina, potenciada por la obesidad central) que se manifiesta simultáneamente en varios sistemas del cuerpo a la vez, y que aumenta de forma significativa el riesgo de desarrollar tanto diabetes tipo 2 franca como enfermedad cardiovascular. Muchas enfermedades que parecen distintas entre sí (hipertensión, diabetes, dislipidemia, insuficiencia cardíaca) comparten mecanismos fisiopatológicos comunes, y entender esos mecanismos compartidos es más útil que memorizar cada enfermedad como un compartimento aislado.'
      ],
      foco:[
        '*Consideración clínica*: el síndrome metabólico no es una coincidencia de enfermedades separadas, sino un único desequilibrio (resistencia insulínica) manifestándose en múltiples sistemas -principio que atraviesa todo el bloque de Fisiopatología.'
      ]
    }
  ],
  ref:'Porth, Fisiopatología, cap. 42.'
}

});
