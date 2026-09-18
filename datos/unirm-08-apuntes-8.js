/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 8)
   Los 4 temas de Genética Médica que se agregaron al ampliar el
   Temario y que el lote 6 no llego a cubrir. Con esto, Genetica
   Medica queda 14 de 14, completa de verdad.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'epigenetica-basica': {
  tema:'Epigenética básica',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:7,
  idea:'Dos gemelos idénticos, con exactamente la misma secuencia de ADN, pueden con el tiempo desarrollar enfermedades distintas o envejecer de forma distinta: la explicación no está en qué genes tienen, sino en cuáles de esos genes están "encendidos" o "apagados" en cada uno.',
  claves:['metilación del ADN','acetilación de histonas','herencia epigenética','expresión génica'],
  sigue:'enfermedades-expansion-repeticiones',
  secciones:[
    {
      t:'Cambios que no tocan la secuencia del ADN',
      p:[
        'La *epigenética* estudia los cambios en la actividad de los genes (si se expresan mucho, poco, o nada) que NO involucran ningún cambio en la secuencia de letras del ADN, sino modificaciones químicas adicionales sobre el ADN o sobre las proteínas que lo empaquetan. Dos mecanismos son los más estudiados: la *metilación del ADN* (agregar un grupo metilo directamente sobre ciertas bases del ADN, generalmente silenciando la expresión del gen cercano) y la *acetilación de histonas* (modificar químicamente las proteínas histonas alrededor de las cuales se enrolla el ADN, como se vio en Histología, cambiando qué tan compacta o abierta está esa región de cromatina, y con ello, qué tan accesible está para ser transcrita).'
      ]
    },
    {
      t:'Por qué esto importa: lo mismo puede expresarse distinto',
      p:[
        'Estos marcadores epigenéticos explican por qué distintas células del cuerpo, con exactamente el mismo ADN, se convierten en tipos celulares tan distintos entre sí (una neurona y una célula de la piel tienen el mismo genoma, pero patrones epigenéticos muy diferentes, que determinan qué genes usa cada una). También explican, en parte, por qué factores ambientales (dieta, exposiciones, estrés) pueden influir en la actividad de los genes sin cambiar la secuencia del ADN en sí.',
        'La *herencia epigenética* es un concepto más debatido y activo en investigación: la posibilidad de que algunos de estos patrones se transmitan, en cierta medida, de una generación a la siguiente, sin que eso implique un cambio en la secuencia genética heredada.'
      ],
      foco:[
        'A diferencia de una mutación (que cambia la secuencia de ADN de forma permanente), un cambio epigenético es, en principio, potencialmente reversible: la célula puede, bajo ciertas condiciones, volver a metilar o desmetilar una región, cambiando de nuevo la actividad de ese gen.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 5.'
},

'enfermedades-expansion-repeticiones': {
  tema:'Enfermedades por expansión de repeticiones',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:6,
  idea:'Algunas enfermedades genéticas no vienen de un solo nucleótido cambiado: vienen de una secuencia corta que se repite demasiadas veces seguidas dentro de un gen, y esa repetición tiende a crecer todavía más de una generación a la siguiente.',
  claves:['tripletes repetidos','Huntington','X frágil','anticipación génica'],
  sigue:'impronta-genomica',
  secciones:[
    {
      t:'Una secuencia que se repite más de la cuenta',
      p:[
        'Ciertas regiones del ADN contienen normalmente pequeñas repeticiones de una secuencia corta (frecuentemente *tripletes*, secuencias de tres nucleótidos), dentro de un rango normal de repeticiones. Un grupo de enfermedades genéticas ocurre cuando el número de esas repeticiones crece por encima de ese rango normal, interfiriendo con la función del gen. La enfermedad de *Huntington* (repetición del triplete CAG) y el síndrome del *X frágil* (repetición de otro triplete, en el cromosoma X) son dos de los ejemplos más citados de este mecanismo, cada uno con su propio patrón de herencia y su propio umbral de repeticiones asociado a la enfermedad.'
      ]
    },
    {
      t:'Anticipación génica: peor en cada generación',
      p:[
        'Un rasgo característico de muchas de estas enfermedades es la *anticipación génica*: el número de repeticiones tiende a aumentar aún más al transmitirse de una generación a la siguiente (el mecanismo exacto de la replicación del ADN es menos estable cuando hay tramos repetitivos largos), lo que puede traducirse clínicamente en que la enfermedad aparezca a una edad más temprana, o con mayor gravedad, en los hijos que en los padres que la portan.'
      ],
      foco:[
        'Consideración clínica: la anticipación génica es una de las pocas excepciones reales a la expectativa habitual de que una enfermedad genética afecta por igual, generación tras generación: aquí el propio mecanismo molecular predice que puede empeorar con el tiempo dentro de una misma familia.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 12.'
},

'impronta-genomica': {
  tema:'Impronta genómica',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:6,
  idea:'Normalmente da igual si un gen viene del padre o de la madre: funciona igual de las dos formas. Pero un pequeño grupo de genes es la excepción a esa regla, y de cuál de los dos progenitores venga la copia alterada puede cambiar por completo si un niño desarrolla o no una enfermedad.',
  claves:['impronta genómica','disomía uniparental','Prader-Willi','Angelman'],
  sigue:'genetica-cancer-hereditario',
  secciones:[
    {
      t:'Genes que "recuerdan" de qué progenitor vinieron',
      p:[
        'La *impronta genómica* es un mecanismo epigenético (relacionado con la metilación ya vista) por el cual un pequeño número de genes se expresa de forma distinta según de cuál progenitor se heredó: algunos genes con impronta solo se expresan si vienen del padre (la copia materna está silenciada), y otros solo si vienen de la madre (la copia paterna está silenciada). Para la mayoría de los genes del genoma esto no aplica —se expresan las dos copias, o al menos ambas están disponibles—, pero para este grupo específico, silenciar la copia "equivocada" deja al gen funcionalmente ausente, aunque la secuencia de ADN esté físicamente presente.'
      ]
    },
    {
      t:'Dos síndromes, la misma región del cromosoma 15, orígenes opuestos',
      p:[
        'El ejemplo más citado en medicina involucra a una misma región del cromosoma 15, con dos síndromes distintos según qué copia falta. El síndrome de *Prader-Willi* ocurre cuando falta la contribución PATERNA de esa región (por deleción del cromosoma 15 paterno, o por *disomía uniparental* materna, donde ambas copias del cromosoma 15 vienen de la madre y ninguna del padre), y se caracteriza por hipotonía, apetito excesivo y obesidad, entre otras características. El síndrome de *Angelman* ocurre cuando falta la contribución MATERNA de esa misma región, con un cuadro clínico completamente distinto: discapacidad intelectual severa, risa fácil e inapropiada, entre otras características.'
      ],
      foco:[
        'Este par de síndromes es el ejemplo clásico de examen para impronta genómica precisamente porque demuestra, de forma muy clara, que perder la copia paterna o la materna de la MISMA región produce enfermedades completamente distintas, algo que la herencia mendeliana simple no podría explicar.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 5.'
},

'genetica-cancer-hereditario': {
  tema:'Genética del cáncer hereditario',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:7,
  idea:'La inmensa mayoría de los cánceres no se heredan directamente: surgen de mutaciones adquiridas a lo largo de la vida. Pero un porcentaje identificable sí tiene una base hereditaria clara, y reconocerlo cambia por completo cómo se vigila a esa familia.',
  claves:['gen supresor tumoral','BRCA','oncogén hereditario','síndrome de cáncer familiar'],
  sigue:null,
  secciones:[
    {
      t:'Genes supresores tumorales: los frenos del ciclo celular',
      p:[
        'Un *gen supresor tumoral* normalmente frena la división celular descontrolada o repara el ADN dañado (recordando el tema del ciclo celular de Histología, y el de carcinogénesis de Anatomía Patológica que se verá en 9no): cuando ambas copias de un gen supresor tumoral se inactivan por mutación, ese freno desaparece, y la célula queda con más probabilidad de dividirse sin control. Los genes *BRCA1* y *BRCA2* son los ejemplos más conocidos: normalmente participan en la reparación del ADN, y sus mutaciones heredadas se asocian a un riesgo marcadamente aumentado de cáncer de mama y de ovario.'
      ]
    },
    {
      t:'Por qué hace falta "un segundo golpe"',
      p:[
        'Una persona con una mutación hereditaria en un gen supresor tumoral nace con UNA copia ya alterada en TODAS sus células, pero eso solo no basta para desarrollar cáncer: hace falta que, en alguna célula concreta de su cuerpo, la SEGUNDA copia (la que todavía era normal) también se dañe por una mutación adquirida a lo largo de la vida —el llamado modelo del "doble golpe". Esto explica por qué alguien puede heredar una mutación de BRCA1 y no necesariamente desarrollar cáncer, aunque su riesgo esté considerablemente elevado frente a la población general.',
        'Un *síndrome de cáncer familiar* se sospecha cuando aparecen patrones característicos en un árbol genealógico (ya visto en el tema correspondiente): varios familiares con el mismo tipo de cáncer, o con cánceres relacionados, edades de aparición más tempranas de lo habitual, o cáncer en órganos pares (como ambas mamas, o ambos riñones) en la misma persona.'
      ],
      foco:[
        'Consideración clínica: identificar una mutación hereditaria de este tipo no solo informa sobre el riesgo de la persona misma: abre la puerta a ofrecer pruebas genéticas y vigilancia más estrecha (o incluso medidas preventivas) a otros familiares que también podrían portar la misma mutación, cerrando el círculo con el consejo genético ya visto.'
      ]
    }
  ],
  ref:'Nussbaum, Thompson y Thompson, Genética en Medicina, cap. 16.'
}

});
