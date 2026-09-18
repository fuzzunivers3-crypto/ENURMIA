/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 6)
   Termina de cubrir GENETICA MEDICA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'replicacion-transcripcion-traduccion': {
  tema:'Replicación, transcripción y traducción',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:8,
  idea:'Estos tres procesos son, en esencia, el flujo de información de la célula: copiar el manual completo (replicación), sacar una fotocopia de una sola página cuando hace falta (transcripción), y traducir esa fotocopia a un idioma distinto para construir algo con ella (traducción).',
  claves:['replicación','transcripción','traducción','ARN mensajero','codón','splicing'],
  sigue:'tipos-mutacion-consecuencias',
  secciones:[
    {
      t:'Replicación: copiar todo el ADN antes de dividirse',
      p:[
        'La *replicación* del ADN ocurre en la fase S del ciclo celular (ya visto en Histología), copiando toda la molécula de ADN antes de que la célula se divida, para que cada célula hija reciba una copia completa e idéntica. Aprovecha directamente la complementariedad de bases ya vista en Bioquímica I: cada cadena original sirve de molde para construir su pareja complementaria, así que el resultado son dos moléculas de doble hélice, cada una con una cadena original y una recién sintetizada.'
      ]
    },
    {
      t:'Transcripción y traducción: del ADN a una proteína funcional',
      p:[
        'La *transcripción* copia un segmento específico de ADN (un gen) a una molécula de *ARN mensajero* (ARNm), usando el mismo principio de complementariedad de bases (pero con uracilo en vez de timina, como se vio en Bioquímica I). Antes de salir del núcleo, ese ARNm sufre un procesamiento llamado *splicing*: se eliminan segmentos no codificantes (intrones) y se unen entre sí los segmentos codificantes (exones), dejando un ARNm maduro listo para usarse.',
        'La *traducción* ocurre en el citoplasma, en los ribosomas: el ARNm se lee en grupos de tres bases llamados *codones*, cada uno de los cuales especifica un aminoácido concreto (o una señal de inicio o fin), y los ribosomas van ensamblando la cadena de aminoácidos correspondiente, siguiendo el orden de los codones, hasta formar la proteína.'
      ],
      foco:[
        'Consideración clínica: un splicing defectuoso (por una mutación que afecte los sitios donde se corta el ARN) puede producir una proteína anormal aunque la secuencia de ADN original del gen esté, en gran parte, intacta: el error está en el procesamiento, no en el gen mismo.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 3.'
},

'tipos-mutacion-consecuencias': {
  tema:'Tipos de mutación y sus consecuencias',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:7,
  idea:'No todas las mutaciones son iguales de graves: un solo cambio de letra en el ADN puede no tener ningún efecto, cambiar un aminoácido sin consecuencia real, o desbaratar por completo la lectura de todo el gen, según qué tipo de cambio sea exactamente.',
  claves:['mutación','sin sentido','de cambio de sentido','corrimiento del marco','silenciosa'],
  sigue:'herencia-mendeliana-autosomica',
  secciones:[
    {
      t:'Mutaciones puntuales: cambiar una sola letra',
      p:[
        'Una *mutación* puntual cambia un solo nucleótido en la secuencia de ADN, y su efecto depende de qué codón resulte de ese cambio. Una mutación *silenciosa* cambia el codón, pero el nuevo codón sigue codificando el MISMO aminoácido (porque el código genético tiene cierta redundancia: varios codones distintos pueden especificar el mismo aminoácido), así que la proteína final no cambia en absoluto.',
        'Una mutación *de cambio de sentido* (missense) cambia el codón de forma que ahora especifica un aminoácido DISTINTO: el efecto sobre la proteína varía mucho, desde insignificante (si el nuevo aminoácido es químicamente parecido y no está en una zona crítica) hasta grave (si cambia un aminoácido esencial para la función o la estructura de la proteína, como en la anemia falciforme ya mencionada). Una mutación *sin sentido* (nonsense) cambia el codón a una señal de "parar" (codón de terminación) antes de tiempo, produciendo una proteína truncada, generalmente no funcional.'
      ]
    },
    {
      t:'Mutaciones que desplazan el marco de lectura',
      p:[
        'Una mutación por *corrimiento del marco de lectura* (frameshift) ocurre cuando se inserta o se elimina un número de nucleótidos que NO es múltiplo de tres (recordando que los codones se leen de tres en tres): a partir de ese punto, todos los codones siguientes se leen corridos, desbaratando por completo la secuencia de aminoácidos desde ahí hasta el final del gen, casi siempre produciendo una proteína completamente no funcional. Es, en general, de las mutaciones más graves que puede sufrir un gen, comparada con un simple cambio de sentido.'
      ],
      foco:[
        'Consideración clínica: por eso, al evaluar la gravedad probable de una variante genética encontrada en un paciente, no basta con saber "hay una mutación": importa muchísimo el TIPO de mutación —silenciosa, de cambio de sentido, sin sentido o de corrimiento del marco— para estimar su impacto probable sobre la proteína.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 3.'
},

'herencia-mendeliana-autosomica': {
  tema:'Herencia mendeliana: autosómica',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:7,
  idea:'Este tema ya se puso en práctica en el primer caso de casos prácticos de UNIRMIA (el del albinismo): aquí se formaliza la teoría completa detrás de esa herencia autosómica recesiva, y se agrega su contraparte, la dominante.',
  claves:['autosómico dominante','autosómico recesivo','penetrancia','expresividad','portador'],
  sigue:'herencia-x-mitocondrial',
  secciones:[
    {
      t:'Dominante frente a recesiva: cuántas copias hacen falta',
      p:[
        'Un rasgo *autosómico dominante* se manifiesta con una sola copia del alelo alterado (basta con ser heterocigoto): típicamente, cada persona afectada tiene un padre afectado (salvo mutaciones nuevas), y la enfermedad no "salta generaciones". Un rasgo *autosómico recesivo* necesita las DOS copias alteradas (ser homocigoto) para manifestarse: una persona con una sola copia alterada es *portadora*, fenotípicamente sana, pero puede transmitir esa copia a su descendencia —el patrón ya visto en el caso trabajado del albinismo, donde dos padres sanos portadores tuvieron una hija afectada.'
      ]
    },
    {
      t:'Dos matices que complican la simplicidad del patrón',
      p:[
        'La *penetrancia* es la proporción de personas con el genotipo (la mutación) que efectivamente MUESTRAN el fenotipo (la enfermedad): una penetrancia incompleta significa que alguien puede tener el gen alterado y no desarrollar la enfermedad, lo que puede hacer que un patrón dominante "salte" una generación en apariencia, aunque en realidad no lo haya hecho genéticamente. La *expresividad* variable es distinta: se refiere a que, entre las personas que SÍ muestran el fenotipo, la gravedad o las características exactas de la enfermedad pueden variar bastante de una persona a otra, aunque compartan la misma mutación.'
      ],
      foco:[
        'Consideración clínica: la penetrancia incompleta es una de las razones por las que un árbol genealógico "limpio", sin la enfermedad en generaciones anteriores, no descarta por completo una herencia dominante: alguien pudo tener el gen sin desarrollar el fenotipo.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 7.'
},

'herencia-x-mitocondrial': {
  tema:'Herencia ligada al X y mitocondrial',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:7,
  idea:'Estos dos patrones de herencia rompen la simetría entre hombre y mujer que tiene la herencia autosómica: uno porque el hombre solo tiene un cromosoma X, y el otro porque las mitocondrias solo se heredan de la madre.',
  claves:['ligado al X','herencia mitocondrial','heteroplasmia','portadora','Lyon'],
  sigue:'lectura-arboles-genealogicos',
  secciones:[
    {
      t:'Herencia ligada al X recesiva: por qué afecta mucho más a los hombres',
      p:[
        'Un gen en el cromosoma X sigue un patrón distinto al autosómico, porque el hombre (XY) solo tiene UNA copia del cromosoma X (es hemicigoto para esos genes), mientras que la mujer (XX) tiene dos. Para una enfermedad ligada al X *recesiva*, un hombre con el alelo alterado en su único X la manifiesta siempre (no tiene una segunda copia que lo compense); una mujer necesita las dos copias alteradas para manifestarla, algo mucho menos frecuente, así que la mayoría de las mujeres con una sola copia alterada son *portadoras* asintomáticas —exactamente la razón, ya vista en el caso trabajado de genética, de por qué un padre sano no puede transmitir una enfermedad ligada al X recesiva a una hija que resulte afectada: tendría que ser él mismo quien la porte y esté afectado.',
        'El fenómeno de *lyonización* (inactivación aleatoria de uno de los dos cromosomas X en cada célula de la mujer, descrito por Mary Lyon) explica, en parte, por qué algunas mujeres portadoras de una enfermedad ligada al X recesiva pueden mostrar síntomas leves: en algunas de sus células se inactivó por azar el X normal, dejando activo el X con la mutación.'
      ]
    },
    {
      t:'Herencia mitocondrial: solo por línea materna',
      p:[
        'El ADN mitocondrial se hereda casi exclusivamente por vía materna: el óvulo aporta todas las mitocondrias del cigoto, mientras que las del espermatozoide, en la práctica, no se transmiten. Por eso, en una enfermedad de *herencia mitocondrial*, una madre afectada transmite la enfermedad a TODOS sus hijos (de ambos sexos), pero un padre afectado no la transmite a ninguno.',
        'La *heteroplasmia* es otro rasgo particular de este tipo de herencia: cada célula tiene muchas mitocondrias, y no todas tienen por qué llevar la misma proporción de ADN mitocondrial mutado frente a normal, lo que hace que la gravedad de una enfermedad mitocondrial pueda variar mucho entre distintos tejidos de la misma persona, e incluso entre hermanos con la misma madre.'
      ],
      foco:[
        'Regla clave para diferenciar rápido: en la herencia ligada al X, un padre afectado NO transmite la enfermedad a sus hijos varones (les da su Y, no su X); en la herencia mitocondrial, un padre afectado NO transmite la enfermedad a NINGÚN hijo, sea del sexo que sea.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 7.'
},

'lectura-arboles-genealogicos': {
  tema:'Lectura de árboles genealógicos',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:7,
  idea:'Un árbol genealógico bien leído es, muchas veces, suficiente para deducir el patrón de herencia de una enfermedad familiar sin necesitar ninguna prueba de laboratorio: solo hace falta saber qué preguntas hacerle al dibujo.',
  claves:['árbol genealógico','pedigrí','consanguinidad','probando','riesgo de recurrencia'],
  sigue:'alteraciones-cromosomicas-numericas',
  secciones:[
    {
      t:'El vocabulario y la lógica de un pedigrí',
      p:[
        'Un *árbol genealógico* (o pedigrí) representa, con símbolos estandarizados (cuadrados para hombres, círculos para mujeres, rellenos si están afectados), las relaciones familiares y quién tiene o no una enfermedad determinada. El *probando* es la persona que motivó el estudio —el primer caso identificado, a partir del cual se reconstruye el árbol hacia el resto de la familia.',
        'Leer un árbol para deducir el patrón de herencia sigue una secuencia de preguntas: ¿la enfermedad aparece en todas las generaciones, o salta alguna (sugiriendo recesiva)? ¿Afecta por igual a hombres y mujeres, o predomina en uno de los sexos (sugiriendo ligada al X)? ¿Todos los hijos de una madre afectada la tienen, sin importar el sexo (sugiriendo mitocondrial)? Estas preguntas, aplicadas con método, son exactamente lo que ya se practicó en el caso trabajado de la herencia autosómica recesiva de la sección de Casos.'
      ]
    },
    {
      t:'Consanguinidad y riesgo de recurrencia',
      p:[
        'La *consanguinidad* (unión entre parientes cercanos) aumenta la probabilidad de que ambos miembros de la pareja porten, por herencia de un ancestro común, el mismo alelo recesivo raro, lo que aumenta el riesgo de enfermedades autosómicas recesivas en su descendencia: es una de las señales que, al verse en un árbol genealógico, orienta fuertemente hacia sospechar un patrón recesivo.',
        'El *riesgo de recurrencia* es la probabilidad de que un futuro embarazo de una pareja determinada resulte en un hijo afectado, y se calcula directamente a partir del patrón de herencia deducido (por ejemplo, el 25% ya calculado en el caso trabajado para una pareja de portadores de una enfermedad autosómica recesiva). Es, en la práctica, el dato final que un consejo genético le ofrece a una familia para tomar decisiones informadas.'
      ],
      foco:[
        'Este tema es, en esencia, la aplicación práctica de los dos temas anteriores (herencia autosómica y ligada al X/mitocondrial): sin conocerlos bien, un árbol genealógico es solo un dibujo con símbolos.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 7.'
},

'alteraciones-cromosomicas-numericas': {
  tema:'Alteraciones cromosómicas numéricas',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:7,
  idea:'Un error en un solo paso de la meiosis —los cromosomas no se separan bien— puede resultar en un óvulo o espermatozoide con un cromosoma de más o de menos, y ese único error explica la mayoría de los síndromes cromosómicos más frecuentes en la práctica clínica.',
  claves:['trisomía','monosomía','no disyunción','Down','Turner','Klinefelter'],
  sigue:'alteraciones-estructurales-mosaicismo',
  secciones:[
    {
      t:'La no disyunción: el origen del problema',
      p:[
        'Durante la meiosis, los cromosomas (o las cromátidas hermanas) deben separarse correctamente para que cada gameto reciba exactamente la mitad del material genético. La *no disyunción* es el fallo de esa separación: ambos miembros de un par terminan yendo al mismo gameto, dejando a ese gameto con un cromosoma de más, y al otro gameto (de la misma división) con uno de menos. Si ese gameto anormal participa en la fecundación, el embrión resultante tendrá un número anormal de cromosomas.',
        'Una *trisomía* es la presencia de un cromosoma de más (tres copias en vez de dos); una *monosomía* es la ausencia de una copia (solo una en vez de dos). Como ya se vio en el caso trabajado de embriología sobre gametogénesis, el riesgo de no disyunción en el óvulo aumenta claramente con la edad materna, por el tiempo prolongado que el óvulo pasa detenido en profase I.'
      ]
    },
    {
      t:'Tres síndromes clásicos, tres cromosomas distintos',
      p:[
        'El síndrome de *Down* (trisomía 21) es la trisomía autosómica más frecuente compatible con la vida, con discapacidad intelectual variable y rasgos físicos característicos. El síndrome de *Turner* (monosomía del cromosoma X, genotipo 45,X) afecta solo a mujeres, con talla baja e infertilidad, entre otras características —es, de hecho, la única monosomía autosómica o sexual compatible con la vida de forma relativamente frecuente; la mayoría de las demás monosomías no son viables. El síndrome de *Klinefelter* (47,XXY) afecta a hombres con un cromosoma X de más, típicamente con infertilidad y otras características asociadas al exceso de material genético del X.'
      ],
      foco:[
        'Consideración clínica: la mayoría de las trisomías y monosomías autosómicas distintas a la del 21 no son compatibles con la vida más allá de las primeras etapas del embarazo, y son una causa muy frecuente de aborto espontáneo temprano, muchas veces sin que se llegue a identificar la causa exacta.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 6.'
},

'alteraciones-estructurales-mosaicismo': {
  tema:'Alteraciones estructurales y mosaicismo',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:6,
  idea:'No todas las alteraciones cromosómicas cambian el NÚMERO de cromosomas: algunas reorganizan su estructura interna, y otras hacen que una misma persona tenga, literalmente, dos o más líneas celulares genéticamente distintas conviviendo en su propio cuerpo.',
  claves:['translocación','deleción','inversión','mosaicismo','Robertsoniana'],
  sigue:'herencia-multifactorial-farmacogenetica',
  secciones:[
    {
      t:'Reorganizaciones del material genético, sin cambiar el número total',
      p:[
        'Una *deleción* es la pérdida de un segmento de un cromosoma. Una *inversión* es un segmento que se rompe y se reinserta al revés, en el mismo lugar. Una *translocación* es el intercambio de segmentos entre dos cromosomas distintos: una translocación *Robertsoniana* (un tipo específico y relativamente frecuente) une dos cromosomas acrocéntricos (con el centrómero muy cerca de un extremo) casi por completo, fusionándolos en uno solo.',
        'Una persona con una translocación EQUILIBRADA (todo el material genético presente, solo reorganizado) suele ser fenotípicamente normal, porque no le falta ni le sobra información genética, solo está reordenada. El problema aparece en su descendencia: al formar gametos, esa reorganización puede segregar de forma desequilibrada, produciendo óvulos o espermatozoides con material genético de más o de menos, aumentando el riesgo de aborto espontáneo o de un hijo con una alteración cromosómica desequilibrada.'
      ]
    },
    {
      t:'Mosaicismo: dos líneas celulares en una sola persona',
      p:[
        'El *mosaicismo* ocurre cuando un error de división celular (no disyunción, pero ocurrido DESPUÉS de la fecundación, durante las divisiones mitóticas tempranas del embrión, no durante la meiosis) produce dos o más líneas celulares con distinta composición cromosómica dentro de la misma persona. El fenotipo resultante depende de qué proporción del cuerpo tiene cada línea celular, y en qué tejidos predomina cada una.',
        'Ejemplo trabajado: una persona con mosaicismo para el síndrome de Down (algunas células con trisomía 21, otras con cariotipo normal) puede tener características más leves que alguien con trisomía 21 completa en todas sus células, precisamente porque una parte de sus tejidos funciona con un cariotipo normal.'
      ],
      foco:[
        'Consideración clínica: el mosaicismo también puede pasar desapercibido en un cariotipo estándar si la muestra analizada, por azar, contiene predominantemente células de la línea "normal": es una de las razones por las que un resultado genético negativo no siempre descarta con certeza absoluta una condición sospechada clínicamente.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 6.'
},

'herencia-multifactorial-farmacogenetica': {
  tema:'Herencia multifactorial y farmacogenética',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:6,
  idea:'La mayoría de las enfermedades comunes —hipertensión, diabetes tipo 2, muchas malformaciones congénitas— no siguen un patrón mendeliano simple de un solo gen: resultan de la suma de muchos genes de efecto pequeño, combinados con el ambiente, y no hay una sola mutación "culpable" que buscar.',
  claves:['multifactorial','umbral','heredabilidad','farmacogenética'],
  sigue:'diagnostico-genetico-consejo',
  secciones:[
    {
      t:'Herencia multifactorial: muchos genes pequeños, más el ambiente',
      p:[
        'La *herencia multifactorial* combina el efecto de múltiples genes (cada uno con una contribución pequeña e individual) con factores ambientales (dieta, exposiciones, estilo de vida), y por eso no sigue las proporciones exactas y predecibles de una herencia mendeliana de un solo gen. Muchas de las malformaciones congénitas más frecuentes (como algunos defectos cardíacos, o los defectos del tubo neural ya vistos en Embriología) y la mayoría de las enfermedades crónicas comunes del adulto siguen este patrón.',
        'El modelo de *umbral* propone que la susceptibilidad a una enfermedad multifactorial se distribuye de forma continua en la población (como una curva normal, ya vista en Estadística), y que la enfermedad se manifiesta solo quienes superan cierto umbral de susceptibilidad combinada (genética más ambiental). La *heredabilidad* es una estimación de qué proporción de la variación de un rasgo en una población se explica por diferencias genéticas, frente a diferencias ambientales —un concepto poblacional, no algo que se pueda aplicar directamente para predecir el riesgo de un individuo concreto.'
      ]
    },
    {
      t:'Farmacogenética: cuando el genotipo cambia la respuesta a un fármaco',
      p:[
        'La *farmacogenética* estudia cómo las variaciones genéticas de una persona influyen en su respuesta a los fármacos —tanto en la eficacia como en el riesgo de efectos adversos—, y conecta directamente con lo que se estudiará en Farmacología en 9no cuatrimestre (concretamente, con las variaciones en las enzimas del citocromo P450 que metabolizan muchos fármacos).',
        'Ejemplo trabajado: una persona con una variante genética que hace que metabolice un fármaco mucho más lento de lo habitual puede acumular concentraciones tóxicas con una dosis considerada "normal" para la mayoría de la población; una persona con una variante que lo metaboliza mucho más rápido puede no alcanzar concentraciones terapéuticas con esa misma dosis estándar.'
      ],
      foco:[
        'Este tema es el puente conceptual entre la genética pura y la práctica clínica cotidiana: explica por qué "la misma dosis para todos" no siempre funciona igual de bien en todos los pacientes.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 8 y 15.'
},

'diagnostico-genetico-consejo': {
  tema:'Diagnóstico genético y consejo',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:6,
  idea:'Este tema cierra el bloque conectando toda la teoría anterior con su aplicación práctica real: qué prueba pedir según lo que se sospecha, y cómo se comunica esa información a una familia de forma que les sirva para decidir, sin imponerles una decisión.',
  claves:['diagnóstico prenatal','cariotipo','FISH','consejo genético','cribado'],
  sigue:null,
  secciones:[
    {
      t:'Herramientas de diagnóstico, según qué se busca',
      p:[
        'El *cariotipo*, ya visto, detecta alteraciones cromosómicas numéricas y estructurales grandes, visibles al microscopio. El *FISH* (hibridación fluorescente in situ) usa sondas moleculares específicas que se pegan a una región concreta del ADN y emiten fluorescencia, permitiendo detectar alteraciones más pequeñas o confirmar rápidamente una sospecha concreta (por ejemplo, contar cuántas copias hay de una región específica) sin esperar el cultivo celular completo que requiere un cariotipo convencional.',
        'El *diagnóstico prenatal* busca estas alteraciones antes del nacimiento, mediante técnicas de *cribado* (pruebas no invasivas o de bajo riesgo, que estiman una probabilidad, como ciertos marcadores en sangre materna o el ultrasonido) y técnicas diagnósticas definitivas (invasivas, como la amniocentesis, que sí confirman con certeza un diagnóstico sospechado por el cribado).'
      ]
    },
    {
      t:'El consejo genético: información, no una decisión impuesta',
      p:[
        'El *consejo genético* es el proceso de comunicar a una familia el diagnóstico, el patrón de herencia, el riesgo de recurrencia (ya visto en el tema de árboles genealógicos) y las opciones disponibles, de una forma comprensible y sin dirigir la decisión de la familia hacia un curso de acción específico —un principio ético central de esta práctica, coherente con el respeto a la autonomía ya visto (y que se verá con más profundidad en la Relación Médico-Paciente de 9no cuatrimestre).'
      ],
      foco:[
        'Este tema cierra Genética Médica devolviendo todo el bloque a su propósito real: no es solo clasificar mutaciones y patrones de herencia por clasificarlos, es poder darle a una familia información clara y útil sobre su propio riesgo.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 17.'
}

});
