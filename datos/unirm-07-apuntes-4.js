/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 4)
   Primer tema de cada una de las siete materias de 7mo que
   todavia no tenian ningun apunte de lectura, para que ninguna
   se quede sin punto de entrada. El resto de los temas de cada
   materia sigue pendiente (ver PENDIENTE en NUBE_SUPABASE... no,
   en la memoria del proyecto): esto es el primer lote de una
   serie larga.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== ANATOMIA I ==================== */
'terminos-anatomicos': {
  tema:'Generalidades y términos de posición',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'Antes de aprender un solo músculo hay que aprender el idioma con el que se describen todos. Sin este vocabulario, cualquier examen físico o cualquier reporte de imagen es incomprensible, aunque tú sepas perfectamente de qué están hablando.',
  claves:['plano sagital','plano frontal','proximal','distal','decúbito','posición anatómica'],
  sigue:'osteologia-general',
  secciones:[
    {
      t:'Un punto de partida fijo: la posición anatómica',
      p:[
        'Toda descripción anatómica parte de un mismo punto de referencia, la *posición anatómica*: de pie, mirando al frente, los brazos a los lados con las palmas hacia adelante, los pies juntos apuntando hacia adelante. No importa cómo esté realmente el paciente delante de ti —acostado, con el brazo rotado, boca abajo—: cuando describes algo como "medial" o "anterior", lo describes SIEMPRE como si estuviera en esa posición. Es la misma razón por la que un mapa siempre pone el norte arriba, aunque tú estés mirando hacia el sur: sin una referencia fija, "arriba" no significa nada.',
        'De ahí salen los tres planos que cortan el cuerpo. El *plano sagital* lo divide en una mitad derecha y una izquierda (el que pasa exactamente por el medio se llama sagital medio o mediano). El *plano frontal* o coronal lo divide en una mitad anterior y una posterior. Y el *plano transversal* lo divide en una mitad superior y una inferior, como una rodaja horizontal. Una tomografía "de corte axial" es, literalmente, una serie de planos transversales apilados.'
      ],
      foco:[
        'Cuando alguien dice "corte sagital" en una resonancia, imagina que está viendo al paciente de perfil, como si lo partieran de la cabeza a los pies en dos mitades laterales.'
      ]
    },
    {
      t:'Los pares de términos que describen cualquier estructura',
      p:[
        'El resto del vocabulario son pares de opuestos, y conviene aprenderlos en pareja porque uno explica al otro. *Proximal* y *distal* miden la distancia respecto al tronco a lo largo de un miembro: el codo es proximal a la muñeca, la muñeca es distal al codo. *Medial* y *lateral* miden la distancia respecto al plano sagital medio: el dedo meñique es medial al pulgar en posición anatómica. *Superior* e *inferior* (o craneal y caudal) miden altura. *Anterior* (o ventral) y *posterior* (o dorsal) miden profundidad hacia adelante o hacia atrás. Y *superficial* y *profundo* miden distancia respecto a la piel.',
        'Ejemplo trabajado: "una herida superficial en la cara medial del tercio distal de la pierna" describe, sin necesitar ninguna foto, una herida cerca de la piel, del lado interno de la pierna (el lado de la tibia, no del peroné), en el tercio más cercano al tobillo. Esa sola frase le dice a cualquier colega exactamente dónde mirar.'
      ],
      foco:[
        '*Decúbito supino* es acostado boca arriba; *decúbito prono* es boca abajo; *decúbito lateral* es de lado. Son los términos que vas a leer en cada nota de ingreso.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 1. Rouvière, Anatomía Humana Descriptiva, Topográfica y Funcional.'
},

/* ==================== FISIOLOGIA I ==================== */
'homeostasis-medio-interno': {
  tema:'Homeostasis y medio interno',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:7,
  idea:'La idea que sostiene toda la fisiología, desde la primera clase hasta la última: el cuerpo no busca estar "bien" en abstracto, busca mantener constante un puñado de variables muy concretas —temperatura, pH, glucosa, concentración de sodio— dentro de un rango estrecho, pase lo que pase afuera.',
  claves:['homeostasis','medio interno','retroalimentación negativa','compartimento'],
  sigue:'membrana-transporte',
  secciones:[
    {
      t:'Medio interno: el ambiente que las células realmente viven',
      p:[
        'Las células de tu cuerpo no tocan el mundo exterior directamente: viven bañadas en líquido extracelular, y ese líquido es su ambiente inmediato, su "medio interno" en el sentido en que lo definió Claude Bernard. Todo lo que hace el cuerpo —respirar, comer, orinar, sudar— tiene como propósito último mantener ese medio interno estable, para que las células que dependen de él no tengan que adaptarse a cada cambio del exterior.',
        'Ese medio interno tiene composición muy vigilada: una concentración de glucosa entre aproximadamente 70 y 100 mg/dL en ayunas, un pH entre 7.35 y 7.45, una temperatura alrededor de 37°C, una concentración de sodio entre 135 y 145 mEq/L. Estos números no son arbitrarios: son el rango en el que las proteínas del cuerpo —enzimas, canales, receptores— funcionan de forma óptima. Salirse de ese rango no es solo "estar mal", es que la maquinaria molecular empieza a fallar.'
      ]
    },
    {
      t:'Cómo se mantiene: el bucle de retroalimentación negativa',
      p:[
        'El mecanismo que usa el cuerpo para mantener cualquiera de esas variables estables es casi siempre el mismo: la *retroalimentación negativa*. Un sensor detecta que una variable se aleja de su punto de ajuste, manda esa información a un centro de control, y el centro de control activa una respuesta que EMPUJA la variable de vuelta hacia el punto de ajuste, apagándose a sí misma en el proceso.',
        'Ejemplo trabajado, el termostato del cuerpo: si la temperatura sube por encima de 37°C, los termorreceptores de la piel y del hipotálamo lo detectan, el hipotálamo activa la sudoración y la vasodilatación cutánea, el cuerpo pierde calor, la temperatura baja, y cuando vuelve a 37°C la respuesta se apaga. Es exactamente igual a como un aire acondicionado con termostato enfría hasta la temperatura marcada y luego se detiene, no antes ni después.'
      ],
      foco:[
        'La retroalimentación negativa siempre se OPONE al cambio inicial: sube algo, el sistema lo baja; baja algo, el sistema lo sube. Es la razón de que sea "negativa": no por ser mala, sino por invertir el sentido del cambio.',
        'La retroalimentación POSITIVA (que amplifica el cambio en vez de revertirlo) es rara a propósito, porque un sistema que se amplifica solo no se detiene: los dos ejemplos clásicos son el parto (la oxitocina aumenta las contracciones, que a su vez estimulan más oxitocina, hasta que nace el bebé) y la cascada de coagulación.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 1.'
},

/* ==================== HISTOLOGIA ==================== */
'tecnica-histologica-tinciones': {
  tema:'Técnica histológica y tinciones',
  bloque:'Histología', programa:'unirm', cuatri:7, min:6,
  idea:'Antes de reconocer un tejido en el microscopio hay que entender cómo llegó ahí: un pedazo de tejido vivo no se ve de ningún color hasta que se procesa y se tiñe, y el color que toma cada estructura depende de su química, no de un capricho del laboratorio.',
  claves:['hematoxilina','eosina','fijación','inclusión','PAS','basófilo','acidófilo'],
  sigue:'epitelios',
  secciones:[
    {
      t:'De la biopsia a la lámina: cuatro pasos',
      p:[
        'Un tejido recién extraído se degrada en minutos si no se detiene ese proceso. Por eso el primer paso es la *fijación* (casi siempre con formalina), que detiene la actividad enzimática y estabiliza las proteínas en su posición. Después viene la *inclusión*: el tejido se deshidrata y se embebe en parafina, un material rígido que permite cortarlo en láminas extremadamente delgadas —de 4 a 6 micras— sin que se desmorone. El microtomo hace esos cortes, que se montan sobre un portaobjetos.',
        'El problema es que, hasta este punto, el corte es prácticamente transparente: casi todos los componentes celulares tienen un índice de refracción muy parecido y no se distinguen entre sí. Ahí es donde entra la tinción: colorantes que se unen selectivamente a distintas moléculas según su carga eléctrica, revelando estructuras que a simple vista eran invisibles.'
      ]
    },
    {
      t:'Hematoxilina y eosina: la pareja que se usa en casi todo',
      p:[
        'La tinción de rutina en casi cualquier biopsia es la *hematoxilina y eosina* (H&E), y entenderla bien te resuelve la lectura del 90% de las láminas. La *hematoxilina* es básica y se une a estructuras ácidas —el ADN del núcleo, el ARN ribosómico— tiñéndolas de azul o morado: se dice que esas estructuras son *basófilas*. La *eosina* es ácida y se une a estructuras básicas —la mayoría de las proteínas del citoplasma, el colágeno— tiñéndolas de rosado: son *acidófilas* o *eosinófilas*.',
        'Ejemplo trabajado: en una lámina de H&E, el núcleo de cualquier célula se ve morado oscuro (por su ADN, basófilo) y el citoplasma se ve rosado (por sus proteínas, acidófilo). Cuando ves una célula con MUCHO citoplasma morado en vez de rosado —como el plasmocito o algunas células muy activas en síntesis de proteínas— es porque tiene abundante retículo endoplásmico rugoso, cargado de ARN, que también es basófilo.'
      ],
      foco:[
        'El *PAS* (ácido peryódico de Schiff) tiñe de magenta los carbohidratos: glucógeno, moco, membranas basales. Es la tinción que se pide cuando se sospecha algo relacionado con azúcares complejos, como el glucógeno hepático o el hongo de una micosis (su pared tiene polisacáridos).'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 1.'
},

/* ==================== BIOQUIMICA I ==================== */
'agua-ph-amortiguadores': {
  tema:'Agua, pH y amortiguadores',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:8,
  idea:'Parece el tema más aburrido del cuatrimestre y es, sin exagerar, la base de por qué un paciente con diarrea severa o con insuficiencia respiratoria puede morir: el cuerpo entero depende de mantener el pH de la sangre dentro de un rango de cuatro décimas.',
  claves:['pH','pKa','amortiguador','Henderson-Hasselbalch','bicarbonato'],
  sigue:'aminoacidos-peptidos',
  secciones:[
    {
      t:'Qué mide el pH y por qué el cuerpo lo cuida tanto',
      p:[
        'El pH mide la concentración de iones hidrógeno (H+) libres en una solución, en escala logarítmica: cada unidad de pH representa un cambio de diez veces en esa concentración. El pH normal de la sangre arterial se mantiene entre 7.35 y 7.45, un rango extremadamente estrecho. La razón es que las proteínas del cuerpo —enzimas, sobre todo— tienen una estructura tridimensional que depende de las cargas eléctricas de sus aminoácidos, y esas cargas cambian con el pH. Un pH fuera de rango deforma las enzimas y estas dejan de funcionar bien, en todo el cuerpo a la vez.'
      ]
    },
    {
      t:'Cómo funciona un amortiguador (buffer)',
      p:[
        'Un *amortiguador* es un par ácido débil / base conjugada que resiste cambios de pH cuando se le agrega ácido o base: el ácido débil absorbe el exceso de base agregada, y la base conjugada absorbe el exceso de ácido agregado. El más importante del cuerpo es el par ácido carbónico (H2CO3) / bicarbonato (HCO3-), que amortigua la sangre.',
        'La relación entre estos tres elementos —pH, pKa del amortiguador y la proporción entre las dos formas— la describe la ecuación de *Henderson-Hasselbalch*: pH = pKa + log([base]/[ácido]). Ejemplo trabajado: si el pKa del bicarbonato es 6.1, y en una persona sana la proporción bicarbonato/ácido carbónico es 20:1, entonces pH = 6.1 + log(20) = 6.1 + 1.3 = 7.4, exactamente el pH normal de la sangre. Fíjate en algo importante: lo que mantiene el pH normal no es la cantidad absoluta de bicarbonato o de ácido carbónico, sino la PROPORCIÓN entre los dos.'
      ],
      foco:[
        'Un amortiguador funciona mejor cuando el pH de trabajo está cerca de su pKa (± 1 unidad). El bicarbonato tiene un pKa de 6.1, lejos de 7.4, y aun así es el amortiguador principal de la sangre porque el cuerpo puede regular sus dos componentes por separado: el pulmón ajusta el CO2 (y por tanto el ácido carbónico) en minutos, y el riñón ajusta el bicarbonato en horas o días. Esa doble regulación compensa el pKa poco favorable.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 2.'
},

/* ==================== EMBRIOLOGIA ==================== */
'gametogenesis': {
  tema:'Gametogénesis',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:7,
  idea:'La formación del óvulo y del espermatozoide no son procesos simétricos, y esa asimetría es la razón real por la que el riesgo de un bebé con síndrome de Down sube con la edad materna, no con la paterna.',
  claves:['espermatogénesis','ovogénesis','meiosis','haploide','folículo'],
  sigue:'fecundacion-primera-semana',
  secciones:[
    {
      t:'El objetivo compartido: llegar a haploide',
      p:[
        'Toda célula del cuerpo tiene 46 cromosomas (23 pares), un número llamado *diploide*. Pero un óvulo y un espermatozoide tienen solo 23, un número llamado *haploide*, precisamente para que al unirse en la fecundación se restaure el número diploide. Ese proceso de reducción a la mitad se logra con la *meiosis*, una división celular especial que en dos rondas sucesivas (meiosis I y meiosis II) reparte el material genético duplicado en cuatro células con la mitad de cromosomas cada una.'
      ]
    },
    {
      t:'Espermatogénesis y ovogénesis: el mismo objetivo, ritmos opuestos',
      p:[
        'La *espermatogénesis* empieza en la pubertad y es un proceso continuo: los testículos producen espermatozoides nuevos todos los días, durante toda la vida adulta del hombre. Cada célula madre produce, al final, cuatro espermatozoides funcionales.',
        'La *ovogénesis* es completamente distinta en su ritmo, y esta diferencia es la que hay que entender bien. Todos los óvulos potenciales de una mujer se forman ANTES de que ella nazca, durante la vida fetal, y quedan detenidos en una fase temprana de la meiosis I —la llamada profase I— hasta el momento en que, décadas después, ese óvulo en particular se libere en una ovulación. Solo entonces termina la meiosis I, y la meiosis II se completa apenas si hay fecundación.'
      ],
      foco:[
        '*Consideración clínica*: un óvulo que se libera cuando la mujer tiene 40 años lleva literalmente 40 años detenido en profase I, con su material genético "en pausa" y expuesto a décadas de desgaste. Ese tiempo prolongado aumenta el riesgo de que los cromosomas no se separen bien al completar la meiosis (no disyunción), lo que explica por qué el riesgo de trisomías como el síndrome de Down aumenta claramente con la edad materna. El espermatozoide, al producirse de forma continua y reciente, no acarrea ese mismo riesgo acumulado.'
      ]
    }
  ],
  ref:'Langman, Embriología Médica, cap. 1. Moore, Embriología Clínica, cap. 1.'
},

/* ==================== MICROBIOLOGIA MEDICA ==================== */
'estructura-bacteriana-tincion-gram': {
  tema:'Estructura bacteriana y tinción de Gram',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:7,
  idea:'Antes de saber el nombre de una sola bacteria, la pregunta más útil que se puede hacer en la práctica es mucho más simple: ¿es grampositiva o gramnegativa? Esa sola respuesta, disponible en minutos, ya orienta el tratamiento antibiótico inicial mientras se espera el cultivo.',
  claves:['gram','peptidoglicano','cápsula','flagelo','pared celular','endospora'],
  sigue:'crecimiento-bacteriano-medios-cultivo',
  secciones:[
    {
      t:'Dos arquitecturas de pared celular',
      p:[
        'Todas las bacterias tienen una pared celular hecha en gran parte de *peptidoglicano*, una malla rígida que le da forma a la célula y la protege de estallar por la presión osmótica interna. Pero la cantidad y disposición de ese peptidoglicano divide a las bacterias en dos grandes grupos con implicaciones clínicas muy distintas.',
        'Las *grampositivas* tienen una pared gruesa de peptidoglicano (múltiples capas) por fuera de la membrana plasmática, sin ninguna otra membrana adicional. Las *gramnegativas* tienen una capa de peptidoglicano mucho más delgada, pero además tienen una segunda membrana externa por fuera de esa pared, y en esa membrana externa está el lipopolisacárido (LPS), también llamado endotoxina, responsable de buena parte de la gravedad del shock séptico por gramnegativos.'
      ]
    },
    {
      t:'Cómo funciona la tinción y qué te dice el color',
      p:[
        'La tinción de Gram aprovecha esa diferencia estructural. Se tiñe primero con cristal violeta (que entra en todas las células), luego se fija con lugol, y después viene el paso decisivo: un lavado con alcohol-acetona. En las grampositivas, la pared gruesa de peptidoglicano atrapa el complejo cristal violeta-lugol y no lo deja salir, así que la célula queda morada. En las gramnegativas, esa misma pared es delgada y además el alcohol daña la membrana externa, así que el complejo sale y la célula se decolora; para poder verla se aplica un segundo colorante, la safranina, que la tiñe de rosado o rojo.',
        'Ejemplo trabajado: si en el microscopio ves cocos morados agrupados en racimos, piensas en *Staphylococcus* (grampositivo); si ves bacilos rosados/rojos, piensas en una enterobacteria como *E. coli* (gramnegativo). Esa distinción, disponible en menos de 20 minutos desde que llega la muestra, ya reduce muchísimo el abanico de antibióticos razonables antes de tener el cultivo completo, que tarda días.'
      ],
      foco:[
        'Algunas bacterias no se tiñen bien con Gram porque su pared tiene una composición distinta: las micobacterias (con una pared rica en ácidos micólicos) necesitan la tinción de Ziehl-Neelsen, no la de Gram.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica, cap. 3. Jawetz, Microbiología Médica.'
},

/* ==================== ESTADISTICA I ==================== */
'medidas-tendencia-central': {
  tema:'Medidas de tendencia central',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:6,
  idea:'"El paciente promedio estuvo hospitalizado 4 días" puede ser verdad y a la vez ser un dato engañoso, si la mayoría estuvo 2 días y un solo caso complicado estuvo 40. Saber cuál medida usar —y cuándo desconfiar de ella— es la diferencia entre leer un estudio bien o mal.',
  claves:['media','mediana','moda','asimetría'],
  sigue:'medidas-dispersion',
  secciones:[
    {
      t:'Tres formas de resumir un conjunto de datos en un solo número',
      p:[
        'La *media* (o promedio) es la suma de todos los valores dividida entre el número de datos. La *mediana* es el valor que queda exactamente en el medio cuando todos los datos se ordenan de menor a mayor: la mitad de los valores está por debajo y la mitad por encima. La *moda* es el valor que se repite con más frecuencia. Las tres responden a la misma pregunta —"¿cuál es el valor típico?"— pero no siempre coinciden, y cuando no coinciden, esa diferencia es información valiosa por sí misma.'
      ]
    },
    {
      t:'Por qué la media puede engañar y la mediana no',
      p:[
        'Ejemplo trabajado: en una sala con seis pacientes, los días de hospitalización fueron 2, 2, 3, 3, 4 y 40 (este último, un caso complicado). La media es (2+2+3+3+4+40)/6 = 9 días. Pero la mediana —el valor entre el tercero y el cuarto dato ordenados, (3+3)/2— es 3 días. La media se dejó "arrastrar" por el valor extremo (40); la mediana, no. Cinco de los seis pacientes estuvieron 4 días o menos: decir que "el paciente promedio estuvo 9 días" describe muy mal a esa sala.',
        'Esto no es un defecto de la media en general: cuando los datos son simétricos (como la estatura en una población grande), media y mediana casi coinciden y la media es perfectamente representativa. El problema aparece con datos *asimétricos*, que en salud son muy comunes: costos hospitalarios, días de estancia, tiempos de espera. Ahí, la mediana suele ser la medida más honesta.'
      ],
      foco:[
        'Regla práctica: si un estudio reporta la media SIN reportar también la dispersión (o sin mostrar que los datos son razonablemente simétricos), conviene sospechar que un valor extremo pudo estar distorsionando el número.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 3.'
}

});
