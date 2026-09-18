/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 2)
   Primer tema de cada una de las ocho materias de 8vo que
   todavia no tenian ningun apunte de lectura. Primer lote de
   una serie larga; el resto de los temas de cada materia sigue
   pendiente.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== ANATOMIA II ==================== */
'generalidades-torax-mediastino': {
  tema:'Generalidades del tórax y mediastino',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:7,
  idea:'Antes de aprender qué hay dentro del tórax, hay que saber cómo se organiza el espacio: el tórax no es una sola cavidad, sino tres compartimentos separados por membranas, y esa separación es la razón por la que un neumotórax en un pulmón no colapsa el otro.',
  claves:['mediastino','cavidad torácica','pleura','hilio pulmonar'],
  sigue:'corazon-pericardio',
  secciones:[
    {
      t:'Tres cavidades, no una',
      p:[
        'La cavidad torácica está dividida en tres espacios independientes: las dos *cavidades pleurales* (una para cada pulmón) y, entre ellas, el *mediastino*. Cada cavidad pleural está forrada por dos capas de pleura —la visceral, pegada al pulmón, y la parietal, pegada a la pared torácica— con una fina película de líquido entre ambas que permite que el pulmón se deslice al respirar sin fricción.',
        'Esta separación en tres compartimentos independientes tiene una consecuencia práctica enorme: si entra aire a una cavidad pleural (un neumotórax), ESE pulmón se colapsa, pero el mediastino actúa como una pared que impide que el aire pase al lado contrario, y el otro pulmón sigue funcionando con normalidad. Es la razón por la que un neumotórax unilateral, aunque grave, no es automáticamente mortal: hay tiempo para tratarlo antes de que comprometa el lado sano.'
      ]
    },
    {
      t:'El mediastino: lo que queda en el medio',
      p:[
        'El *mediastino* es el espacio central entre las dos cavidades pleurales, y contiene casi todo lo importante del tórax que no es pulmón: el corazón, los grandes vasos, la tráquea, el esófago, el timo y numerosos ganglios linfáticos. Se subdivide, por convención práctica, en mediastino superior e inferior, y este último en anterior, medio y posterior —el medio contiene el corazón y el pericardio, el anterior queda por delante del corazón (ahí está el timo), y el posterior por detrás (ahí van el esófago y la aorta descendente).',
        'Esta subdivisión no es solo anatómica: es la forma en que se razona clínicamente una masa mediastínica. Una masa en el compartimento anterior sugiere timoma, teratoma o linfoma ("las cuatro T": timoma, teratoma, tiroides retroesternal, terrible linfoma); una masa en el posterior sugiere un tumor de origen neurogénico. Saber en qué compartimento está una masa, antes de cualquier biopsia, ya reduce mucho la lista de diagnósticos posibles.'
      ],
      foco:[
        'El *hilio pulmonar* es la puerta de entrada y salida de cada pulmón: por ahí pasan el bronquio principal, la arteria pulmonar, las venas pulmonares y los nervios. Es el punto donde la pleura visceral se continúa con la parietal.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 4.'
},

/* ==================== FISIOLOGIA II ==================== */
'electrofisiologia-cardiaca-ecg': {
  tema:'Electrofisiología cardíaca y ECG',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:8,
  idea:'El electrocardiograma no mide "cómo late el corazón": mide, desde la piel, la suma de la actividad eléctrica de millones de células cardíacas despolarizándose y repolarizándose en un orden preciso. Entender ese orden es entender el ECG.',
  claves:['nodo sinusal','automatismo','ECG','onda P','QRS','conducción'],
  sigue:'hemodinamica-regulacion-presion',
  secciones:[
    {
      t:'El corazón tiene su propio marcapasos',
      p:[
        'A diferencia del músculo esquelético, que solo se contrae si un nervio se lo ordena, el músculo cardíaco tiene *automatismo*: ciertas células son capaces de generar su propio impulso eléctrico de forma espontánea y rítmica, sin necesidad de un estímulo externo. El grupo de células que lo hace más rápido, y que por eso manda sobre todo el corazón, es el *nodo sinusal* (o sinoauricular), ubicado en la aurícula derecha: es el marcapasos natural del corazón.',
        'Desde el nodo sinusal, el impulso se propaga por las aurículas, llega al *nodo auriculoventricular* (donde se retrasa deliberadamente, dando tiempo a que las aurículas terminen de contraerse antes de que lo hagan los ventrículos), y de ahí baja por el haz de His y sus ramas hasta las fibras de Purkinje, que distribuyen el impulso por todo el miocardio ventricular casi simultáneamente.'
      ]
    },
    {
      t:'Cómo ese recorrido se convierte en las ondas del ECG',
      p:[
        'Cada onda del electrocardiograma corresponde a un momento concreto de ese recorrido eléctrico. La *onda P* representa la despolarización (activación eléctrica) de las aurículas. El complejo *QRS* representa la despolarización de los ventrículos, y es mucho más grande porque el ventrículo tiene mucha más masa muscular. La *onda T* representa la repolarización (la recuperación eléctrica) de los ventrículos.',
        'Ejemplo trabajado: el segmento entre el final de la onda P y el inicio del QRS —el intervalo PR— mide precisamente ese retraso fisiológico en el nodo AV. Si ese intervalo se alarga más de lo normal, significa que el impulso está tardando más de lo debido en cruzar el nodo AV: es la base de lo que en clínica se llama bloqueo AV de primer grado. El ECG, entendido así, no es una curva misteriosa: es un mapa temporal de por dónde va pasando el impulso eléctrico en cada instante.'
      ],
      foco:[
        'Si el nodo sinusal fallara por completo, el corazón no se detiene: el nodo AV o incluso las fibras de Purkinje pueden asumir el papel de marcapasos, aunque a un ritmo mucho más lento. Es lo que en clínica se llama un ritmo de escape.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 10-11.'
},

/* ==================== BIOQUIMICA II ==================== */
'metabolismo-glucogeno': {
  tema:'Metabolismo del glucógeno',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:7,
  idea:'Entre comidas, el cuerpo no se queda sin glucosa de un momento a otro: tiene una reserva de emergencia guardada en el hígado, lista para liberarse en minutos. Entender esa reserva es entender por qué un ayuno corto no es peligroso y uno prolongado sí lo es.',
  claves:['glucógeno','glucogenólisis','glucogenogénesis','glucógeno fosforilasa','glucosa-6-fosfato'],
  sigue:'gluconeogenesis-regulacion-glucemia',
  secciones:[
    {
      t:'Guardar y liberar: dos vías, dos órganos con distinto propósito',
      p:[
        'El *glucógeno* es la forma en que el cuerpo almacena glucosa: miles de unidades de glucosa unidas en una molécula ramificada, compacta y fácil de movilizar rápido. Se construye por la *glucogenogénesis* (o glucogénesis) cuando hay exceso de glucosa disponible —después de comer—, y se degrada por la *glucogenólisis* cuando el cuerpo necesita liberar esa glucosa de vuelta, un proceso que depende sobre todo de la enzima *glucógeno fosforilasa*.',
        'Dos órganos guardan glucógeno, pero con propósitos completamente distintos. El *hígado* guarda glucógeno para MANTENER la glucosa en la sangre disponible para todo el cuerpo, incluido el cerebro: puede liberar glucosa libre hacia la circulación. El *músculo* guarda glucógeno solo para SU PROPIO uso durante el ejercicio: le falta la enzima (glucosa-6-fosfatasa) necesaria para liberar glucosa libre hacia la sangre, así que su reserva es egoísta, no la comparte con el resto del cuerpo.'
      ]
    },
    {
      t:'Por qué esto importa en un ayuno',
      p:[
        'Ejemplo trabajado: una persona sana que duerme 8 horas sin comer mantiene su glucosa sanguínea estable casi por completo gracias a la glucogenólisis hepática, liberando glucosa poco a poco durante la noche. Las reservas de glucógeno hepático duran aproximadamente entre 12 y 24 horas de ayuno. Pasado ese tiempo, el hígado se queda sin glucógeno que liberar, y el cuerpo tiene que cambiar de estrategia: empieza a fabricar glucosa nueva a partir de otras fuentes (aminoácidos, glicerol) mediante la gluconeogénesis, y a usar más grasa como combustible alternativo.'
      ],
      foco:[
        'Consideración clínica: esto explica por qué un recién nacido o un lactante, que tiene reservas de glucógeno hepático mucho más pequeñas que un adulto, puede desarrollar hipoglucemia con ayunos relativamente cortos, y por qué se insiste tanto en la alimentación frecuente en los primeros días de vida.'
      ]
    }
  ],
  ref:'Harper, Bioquímica Ilustrada, cap. 18.'
},

/* ==================== GENETICA MEDICA ==================== */
'estructura-adn-cromosomas': {
  tema:'Estructura del ADN y cromosomas',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:7,
  idea:'El cariotipo (la foto de los 46 cromosomas de una persona) sigue siendo, hoy en día, la primera prueba que se pide ante la sospecha de un síndrome genético, y para leerlo bien primero hay que entender cómo se empaqueta el ADN dentro de un cromosoma.',
  claves:['ADN','cromosoma','cromatina','telómero','centrómero','cariotipo'],
  sigue:'replicacion-transcripcion-traduccion',
  secciones:[
    {
      t:'De la doble hélice al cromosoma visible',
      p:[
        'El ADN es una doble hélice de nucleótidos, pero esa hélice, estirada, mediría casi dos metros por célula: tiene que empaquetarse de forma extraordinariamente compacta para caber en un núcleo microscópico. El primer nivel de empaquetamiento son los *nucleosomas*: el ADN se enrolla alrededor de proteínas llamadas histonas, como un hilo alrededor de un carrete. Ese conjunto de ADN más histonas, en su forma habitual y relajada, se llama *cromatina*.',
        'Solo cuando la célula se va a dividir, la cromatina se condensa mucho más y se vuelve visible al microscopio óptico como una estructura compacta: el *cromosoma*. Cada cromosoma tiene un *centrómero* (el punto de constricción donde se unen las dos mitades o cromátidas, y donde se ancla el huso mitótico durante la división) y dos *telómeros* (los extremos, que protegen al cromosoma de degradarse o de fusionarse con otro).'
      ]
    },
    {
      t:'El cariotipo: contar y ordenar los cromosomas',
      p:[
        'Un *cariotipo* es la fotografía ordenada de los 46 cromosomas de una persona (23 pares), organizados por tamaño y forma. Una persona sana tiene la fórmula 46,XX (mujer) o 46,XY (hombre). El cariotipo es la herramienta que detecta alteraciones en el NÚMERO de cromosomas (como el 47,XX,+21 del síndrome de Down, con un cromosoma 21 de más) o en su ESTRUCTURA visible (una translocación grande, una deleción grande).',
        'Ejemplo trabajado: ante un recién nacido con rasgos dismórficos sugestivos de un síndrome cromosómico, la primera prueba que se pide sigue siendo el cariotipo, porque en minutos-horas confirma o descarta el número y la estructura general de los cromosomas, antes de pasar a pruebas más finas (como la secuenciación) que buscan cambios demasiado pequeños para verse al microscopio.'
      ],
      foco:[
        'El cariotipo NO detecta mutaciones de un solo gen (como la fibrosis quística) ni cambios microscópicamente invisibles: para eso hacen falta otras técnicas, como el FISH o la secuenciación.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 2 y 5.'
},

/* ==================== BIOESTADISTICA ==================== */
'muestra-poblacion-inferencia': {
  tema:'De la muestra a la población: inferencia',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:7,
  idea:'Ningún estudio mide a TODOS los pacientes del mundo con una enfermedad: mide a una muestra y, con reglas matemáticas precisas, infiere qué es probable que sea cierto para toda la población. Toda la bioestadística que viene después es, en el fondo, aprender esas reglas.',
  claves:['inferencia','parámetro','estimador','error estándar','población'],
  sigue:'intervalos-confianza',
  secciones:[
    {
      t:'Población, muestra, y por qué no se estudia a todos',
      p:[
        'La *población* es el conjunto completo que interesa estudiar (por ejemplo, todos los pacientes hipertensos de un país). Casi nunca es posible medir a toda la población: es caro, lento, y en la práctica imposible. Por eso se estudia una *muestra*, un subconjunto más pequeño y manejable, con la esperanza de que lo que se observe en la muestra sea representativo de lo que ocurre en la población entera.',
        'Un *parámetro* es el valor verdadero en la población (por ejemplo, la presión arterial promedio de TODOS los hipertensos del país), que casi nunca se conoce con exactitud. Un *estimador* (como la media de la muestra) es el valor que sí se puede calcular, y que se usa para aproximar el parámetro desconocido.'
      ]
    },
    {
      t:'El error estándar: cuánto se puede confiar en la muestra',
      p:[
        'Ejemplo trabajado: si se toma la presión arterial a 100 pacientes de una clínica y la media es 138 mmHg, ese número no es exactamente la media de TODOS los hipertensos del país: es una estimación, con cierto margen de error. Ese margen depende del *error estándar*, que mide cuánto varían, de muestra en muestra, los promedios que se obtendrían si se repitiera el estudio muchas veces con muestras distintas del mismo tamaño.',
        'Una regla intuitiva y muy útil: mientras más grande sea la muestra, menor es el error estándar, y más se puede confiar en que el estimador se acerca al parámetro real. Es la razón estadística —no solo de sentido común— de por qué un estudio con 5.000 pacientes pesa más que uno con 20: no es solo "más datos", es literalmente una estimación más precisa del valor verdadero en la población.'
      ],
      foco:[
        'No confundir la desviación estándar (que describe cuánto varían los pacientes INDIVIDUALES entre sí) con el error estándar (que describe cuánto varía el PROMEDIO de una muestra a otra). Son primos, no la misma cosa.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 5.'
},

/* ==================== PARASITOLOGIA MEDICA ==================== */
'generalidades-clasificacion-parasitos': {
  tema:'Generalidades y clasificación de los parásitos',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:6,
  idea:'Toda la parasitología se ordena mucho mejor si primero se fija el vocabulario básico: quién es el hospedero, quién es el vector, y qué significa que un parásito tenga un ciclo directo o uno indirecto. Ese esqueleto conceptual es el que vas a reutilizar en cada parásito nuevo que estudies.',
  claves:['parásito','hospedero','vector','ciclo de vida','zoonosis'],
  sigue:'protozoos-intestinales',
  secciones:[
    {
      t:'Los papeles del reparto: hospedero, vector, reservorio',
      p:[
        'Un *parásito* es un organismo que vive a expensas de otro (el *hospedero*), obteniendo beneficio y causándole algún daño. El *hospedero definitivo* es aquel en el que el parásito alcanza su forma adulta o se reproduce sexualmente; el *hospedero intermediario* es aquel en el que el parásito pasa una fase larvaria o se reproduce asexualmente, sin llegar a la madurez sexual. Un *vector* es un organismo (casi siempre un artrópodo) que transmite el parásito de un hospedero a otro, y puede ser biológico (el parásito se desarrolla dentro del vector, como el mosquito Anopheles con el paludismo) o mecánico (solo lo transporta, sin que se desarrolle dentro).',
        'Un *reservorio* es cualquier hospedero —humano o animal— que mantiene al parásito en la naturaleza y sirve como fuente de infección para otros. Cuando ese reservorio es un animal y la enfermedad se transmite a humanos, se llama *zoonosis*: la toxoplasmosis (reservorio en el gato) y la rabia son ejemplos clásicos.'
      ]
    },
    {
      t:'Ciclos directos e indirectos',
      p:[
        'Un *ciclo de vida directo* (o monoxeno) es aquel en el que el parásito pasa de un hospedero a otro sin necesitar un hospedero intermediario: por ejemplo, los huevos de Ascaris se eliminan en las heces, contaminan el suelo o el agua, y otra persona se infecta al ingerirlos directamente. Un *ciclo de vida indirecto* (o heteroxeno) necesita obligatoriamente pasar por uno o más hospederos intermediarios antes de volver al hospedero definitivo: el paludismo necesita al mosquito Anopheles como hospedero intermediario obligatorio, no hay forma de transmitirlo persona a persona directamente.',
        'Esta distinción no es solo académica: tiene consecuencias directas en salud pública. Una enfermedad de ciclo directo se controla mejorando el saneamiento (agua, disposición de excretas); una de ciclo indirecto necesita además controlar al vector (fumigación, mosquiteros), porque interrumpir solo la transmisión persona a persona no basta.'
      ],
      foco:[
        'Consideración clínica: la eosinofilia (elevación de eosinófilos en sangre) es un dato de laboratorio que orienta fuertemente hacia una infección parasitaria, sobre todo cuando el parásito invade tejidos (no cuando se queda solo en la luz intestinal). Es uno de los pocos hallazgos de laboratorio de rutina que apunta directamente a "piensa en parásitos".'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 1.'
},

/* ==================== EPIDEMIOLOGIA ==================== */
'conceptos-usos-epidemiologia': {
  tema:'Conceptos y usos de la epidemiología',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:6,
  idea:'La epidemiología no es "estadística aplicada a enfermedades": es la disciplina que estudia CÓMO y POR QUÉ se distribuyen las enfermedades en una población, y ese conocimiento es lo que permite anticiparse a un brote en vez de solo reaccionar a él.',
  claves:['epidemiología','determinante','vigilancia','endemia','epidemia','brote'],
  sigue:'medidas-frecuencia',
  secciones:[
    {
      t:'Qué estudia y para qué sirve',
      p:[
        'La *epidemiología* estudia la distribución (quién, dónde, cuándo) y los *determinantes* (por qué) de los estados de salud en poblaciones, con el objetivo final de controlar los problemas de salud. Se divide clásicamente en *epidemiología descriptiva*, que documenta cómo se distribuye una enfermedad (por persona, lugar y tiempo), y *epidemiología analítica*, que pone a prueba hipótesis sobre sus causas comparando grupos.',
        'Un ejemplo del valor práctico: describir que los casos de dengue aumentan cada año entre mayo y noviembre (descripción por tiempo) permite anticipar campañas de fumigación ANTES de la temporada alta, en vez de reaccionar cuando ya hay una epidemia en curso.'
      ]
    },
    {
      t:'El vocabulario de la frecuencia inusual',
      p:[
        'Estos términos se confunden mucho y conviene fijarlos con precisión. *Endemia* es la presencia habitual y esperada de una enfermedad en una población o región, a un nivel más o menos constante (el paludismo es endémico en ciertas zonas de África). *Brote* (o *epidemia*) es un aumento del número de casos por ENCIMA de lo esperado para ese lugar y esa época del año: no depende de un número absoluto fijo, sino de la comparación con la línea base habitual. *Pandemia* es una epidemia que se extiende por varios países o continentes, afectando a un gran número de personas.',
        'Ejemplo trabajado: si una ciudad tiene habitualmente 5 casos de gastroenteritis por semana y de pronto aparecen 40 casos en una semana, eso es un brote, aunque 40 sea un número absoluto pequeño. La *vigilancia epidemiológica* es precisamente el sistema que recoge datos de forma continua para poder detectar ese tipo de desviaciones lo antes posible.'
      ],
      foco:[
        'No confundir "endemia" con "enfermedad rara": una enfermedad endémica puede ser muy frecuente (como la malaria en zonas tropicales); lo que la define es que su nivel es estable y esperado, no su rareza.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 1.'
},

/* ==================== INMUNOLOGIA ==================== */
'celulas-organos-sistema-inmunitario': {
  tema:'Células y órganos del sistema inmunitario',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:7,
  idea:'Un paciente al que le quitaron el bazo tiene un riesgo real y bien documentado de infecciones graves por ciertas bacterias, y entender por qué exige saber qué hace exactamente el bazo dentro del sistema inmunitario, no solo dónde está.',
  claves:['linfocito','macrófago','timo','ganglio','célula presentadora'],
  sigue:'antigeno-anticuerpo-mhc',
  secciones:[
    {
      t:'Órganos linfoides primarios y secundarios',
      p:[
        'Los *órganos linfoides primarios* son donde las células inmunitarias se GENERAN y MADURAN: la médula ósea (donde nacen todas las células sanguíneas, incluidos los linfocitos B, que maduran ahí mismo) y el *timo* (donde maduran específicamente los linfocitos T, que nacen en la médula ósea pero viajan al timo para completar su entrenamiento).',
        'Los *órganos linfoides secundarios* son donde esas células YA maduras se ENCUENTRAN con el antígeno y montan la respuesta inmunitaria: los ganglios linfáticos (que filtran la linfa de una región del cuerpo), el bazo (que filtra la sangre, no la linfa) y el tejido linfoide asociado a mucosas (en el intestino, las vías respiratorias).'
      ]
    },
    {
      t:'Por qué el bazo importa tanto contra ciertas bacterias',
      p:[
        'El bazo tiene una función que ningún otro órgano reemplaza del todo: filtra la sangre y es el sitio principal donde el sistema inmunitario reconoce y responde a bacterias que tienen una cápsula polisacárida gruesa —como el neumococo, el meningococo y Haemophilus influenzae tipo B—, produciendo anticuerpos contra esa cápsula, sobre todo en las primeras exposiciones.',
        'Ejemplo trabajado: un paciente esplenectomizado (sin bazo, por trauma o por cirugía) pierde buena parte de esa capacidad, y queda con un riesgo aumentado y bien documentado de infecciones fulminantes por bacterias encapsuladas, un cuadro que se conoce como sepsis post-esplenectomía. Por eso, a estos pacientes se les vacuna específicamente contra neumococo, meningococo y Haemophilus antes (o después, si fue urgente) de la cirugía.'
      ],
      foco:[
        'Las *células presentadoras de antígeno* (macrófagos, células dendríticas, linfocitos B) son el puente entre la inmunidad innata y la adaptativa: capturan el antígeno, lo procesan y lo "muestran" a los linfocitos T para activar una respuesta específica.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1-2.'
}

});
