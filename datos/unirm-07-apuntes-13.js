/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 13)
   AMPLIACIÓN de Fisiología I, primera parte: homeostasis, membrana,
   potencial de acción, sinapsis y contracción esquelética.
   Mismas claves de objeto que los apuntes originales: Object.assign
   las sobrescribe con la versión extensa sin romper el enlace
   "Leer el tema", porque el campo `tema` no cambia. La cadena de
   `sigue` de toda la materia queda ordenada en los lotes 13 a 15.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'homeostasis-medio-interno': {
  tema:'Homeostasis y medio interno',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:13,
  idea:'La idea que sostiene toda la fisiología: el cuerpo no busca estar "bien" en abstracto, busca mantener constante un puñado de variables muy concretas —temperatura, pH, glucosa, sodio, volumen— dentro de un rango estrecho, pase lo que pase afuera. Casi toda enfermedad se puede leer como una de esas variables que se salió de su rango.',
  claves:['homeostasis','medio interno','retroalimentación negativa','compartimento'],
  sigue:'membrana-transporte',
  secciones:[
    {
      t:'El medio interno: el ambiente real de las células',
      p:[
        'Las células de tu cuerpo no tocan el mundo exterior: viven bañadas en líquido extracelular, y ese líquido es su ambiente inmediato, lo que el fisiólogo Claude Bernard llamó *medio interno*. Todo lo que hace el organismo —respirar, comer, sudar, orinar— tiene un solo fin: mantener ese líquido en condiciones aptas para que las células funcionen. Walter Cannon, décadas después, dio nombre a ese esfuerzo: *homeostasis*, la constancia relativa del medio interno.',
        'Esa constancia es sorprendentemente estricta. El pH de la sangre se mantiene entre 7,35 y 7,45; una variación de solo 0,3 unidades, en cualquier sentido, ya es incompatible con la vida. La glucosa en ayunas ronda los 70-100 mg/dL, el sodio plasmático los 135-145 mEq/L, el potasio 3,5-5,0 mEq/L y la temperatura central 37 °C. Estos rangos no son caprichos de laboratorio: son las condiciones en las que las proteínas conservan su forma, los canales iónicos abren y cierran a tiempo y las enzimas trabajan a la velocidad correcta.',
        'Un detalle importante: homeostasis no significa que las variables estén fijas, sino que oscilan alrededor de un valor de referencia. La glucosa sube después de comer y baja entre comidas; la temperatura es un grado menor de madrugada que por la tarde. Lo que importa es que el sistema de control corrija las desviaciones antes de que se salgan del rango seguro.'
      ],
      foco:[
        'Cuando leas un valor de laboratorio anormal, hazte siempre la misma pregunta: ¿qué mecanismo homeostático debería estar corrigiendo esto, y por qué no lo logró? Es el atajo mental que conecta la fisiología con la clínica.'
      ]
    },
    {
      t:'Los compartimentos líquidos del cuerpo',
      p:[
        'El agua es el componente más abundante del cuerpo: en un adulto joven representa cerca del 60 % del peso (algo menos en mujeres y en personas con más grasa, que retiene poca agua; algo más en niños). En una persona de 70 kg, eso son unos 42 litros. De ellos, dos tercios —unos 28 L— están dentro de las células, en el *líquido intracelular* (LIC), y un tercio —unos 14 L— está fuera de ellas, en el *líquido extracelular* (LEC).',
        'El LEC, a su vez, se divide en dos: el *plasma*, que circula por los vasos y suma unos 3 L, y el *líquido intersticial*, que baña a las células y suma unos 11 L. Entre ambos hay una barrera, la pared capilar, que deja pasar agua y solutos pequeños pero retiene casi todas las proteínas plasmáticas. Esa diferencia de proteínas es la que mantiene el agua dentro de los vasos y, cuando falla, aparece el edema.',
        'Los dos grandes compartimentos tienen composiciones opuestas. El LEC es rico en sodio (unos 142 mEq/L), cloruro y bicarbonato, y pobre en potasio (unos 4 mEq/L). El LIC es al revés: mucho potasio (unos 140 mEq/L), proteínas y fosfatos, y muy poco sodio (unos 14 mEq/L). Esa asimetría no ocurre sola: la mantiene la bomba sodio-potasio gastando energía sin parar, y de ella dependen el potencial de reposo, la excitabilidad de nervios y músculos y el volumen celular.',
        'Ejemplo trabajado: un paciente de 70 kg pierde 3 L de líquido por diarrea intensa. Como el líquido perdido viene del LEC, el volumen que se reduce primero es el plasma y el intersticial, y el paciente presenta taquicardia, sed y presión baja. Si se le da solución salina isotónica por vena, ese suero se queda casi entero en el LEC, porque el sodio no atraviesa libremente la membrana celular; una solución de dextrosa al 5 %, en cambio, una vez que las células consumen la glucosa, aporta agua libre que se reparte entre todos los compartimentos, y por eso repone mal el volumen intravascular.'
      ],
      foco:[
        'Reglas de bolsillo para 70 kg: agua total = 60 % del peso (42 L). De esa agua, dos tercios son intracelulares (28 L) y un tercio extracelular (14 L). Y dentro del LEC: 3 L de plasma y 11 L de líquido intersticial. Repítelo hasta que salga sin pensar.'
      ]
    },
    {
      t:'Retroalimentación negativa: cómo se corrige una desviación',
      p:[
        'El mecanismo que usa el cuerpo para mantener cualquier variable estable es casi siempre el mismo: un circuito con tres piezas. Un *sensor* detecta que la variable se aleja de su valor de referencia; un *centro integrador* compara lo medido con el valor deseado (el *punto de ajuste*); y un *efector* actúa para devolver la variable a su rango. Al volver la variable al valor de referencia, el sensor deja de mandar la señal y el circuito se apaga solo. Como la respuesta se OPONE al cambio inicial, se llama retroalimentación *negativa*.',
        'Ejemplos que repetirás en todo el curso: la presión arterial (los barorreceptores del seno carotídeo detectan una caída, y el centro vasomotor del bulbo acelera el corazón y contrae los vasos); la glucemia (las células beta del páncreas detectan glucosa alta y liberan insulina, que la baja); la osmolaridad (los osmorreceptores del hipotálamo detectan que sube, liberan ADH y estimulan la sed); y la temperatura (el hipotálamo activa la sudoración si sube y el escalofrío si baja).',
        'La eficacia de un sistema de control se mide con su *ganancia*: cuánto corrige el sistema en comparación con cuánto queda sin corregir. Los sistemas más importantes tienen ganancias altas: por ejemplo, el control nervioso de la presión arterial corrige alrededor de dos tercios de una desviación aguda. Ningún sistema corrige el 100 %: siempre queda un pequeño error residual, y por eso se habla de estados *estacionarios* y no de constancia absoluta.'
      ],
      foco:[
        'Antes de un examen, escribe de memoria el circuito completo (sensor, integrador, efector) de tres variables: presión arterial, glucosa y temperatura. Si puedes nombrar las tres piezas de cada una, entiendes homeostasis.'
      ]
    },
    {
      t:'Retroalimentación positiva y cuando falla la homeostasis',
      p:[
        'En la retroalimentación *positiva*, la respuesta refuerza el cambio inicial en lugar de oponerse a él. Es rara y peligrosa, porque un sistema que se amplifica a sí mismo no se detiene por sí solo. El cuerpo la usa solo en procesos que necesitan llegar a un desenlace rápido y definitivo: la contracción uterina del parto (más contracción, más oxitocina, más contracción, hasta que nace el bebé), la cascada de la coagulación (la trombina activa más factores, que producen más trombina, hasta sellar la herida), y la fase ascendente del potencial de acción (la entrada de sodio despolariza la membrana y abre más canales de sodio).',
        '*Consideración clínica*: casi todos los círculos viciosos de la enfermedad son retroalimentaciones positivas descontroladas. Un ejemplo clásico es el choque hemorrágico: si se pierde demasiada sangre, el corazón bombea menos, baja la presión que irriga el propio músculo cardíaco, el corazón se debilita aún más y bombea todavía menos. Dentro de ciertos límites los mecanismos negativos compensan, pero pasado cierto punto la pérdida se vuelve irreversible. Por eso en clínica se actúa rápido: reponer volumen a tiempo corta el círculo vicioso antes de que sea imparable.',
        'Otra idea útil: el organismo no solo reacciona, también *anticipa*. El control por anticipación, o *feedforward*, prepara al cuerpo antes de que la variable cambie: ver la comida activa la salivación y la secreción gástrica antes de comer; el ejercicio dispara un aumento de la frecuencia cardíaca antes de que baje el oxígeno. Esa anticipación reduce las desviaciones y explica por qué el cuerpo responde de forma tan suave en la vida diaria.'
      ],
      foco:[
        'Distinción clave para examen: negativa = corrige y estabiliza (la inmensa mayoría de los casos); positiva = amplifica hasta un desenlace (parto, coagulación, potencial de acción). "Positiva" no significa "buena".'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 1 y 25.'
},

'membrana-transporte': {
  tema:'Membrana celular y transporte',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:14,
  idea:'La membrana es la frontera que decide qué entra y qué sale de la célula. Entender los cuatro modos de cruzarla —difusión simple, difusión facilitada, ósmosis y transporte activo— explica desde por qué un suero se elige con cuidado hasta cómo actúan los diuréticos y la digoxina.',
  claves:['difusión','osmosis','transporte activo','bomba sodio potasio','gradiente'],
  sigue:'potencial-de-accion',
  secciones:[
    {
      t:'Una barrera con puertas: la estructura de la membrana',
      p:[
        'La membrana plasmática es una bicapa de fosfolípidos: cada molécula tiene una cabeza hidrofílica que mira hacia el agua (fuera y dentro de la célula) y dos colas hidrofóbicas que se esconden en el interior de la bicapa. El resultado es un medio graso, casi impermeable a los iones y a las moléculas polares, pero que deja pasar sin dificultad a las moléculas liposolubles. El colesterol intercalado regula su fluidez, y las proteínas incrustadas cumplen funciones de canal, transportador, receptor y enzima.',
        'Esa doble naturaleza es la clave de todo lo que sigue: como la bicapa por sí sola frena a los iones, la célula puede mantener adentro una composición muy distinta a la de afuera. Y como las proteínas de membrana son específicas, la célula puede decidir qué pasa y a qué velocidad. La permeabilidad de una membrana no es una propiedad fija: cambia con el voltaje, con los ligandos y con el estado de la célula.'
      ],
      foco:[
        'Para juzgar si una sustancia cruza la membrana sola, pregúntate dos cosas: ¿es pequeña?, ¿es apolar? Solo si ambas respuestas son sí puede atravesar la bicapa sin ayuda (oxígeno, CO2, esteroides, alcohol).'
      ]
    },
    {
      t:'Transporte pasivo: sin gastar energía',
      p:[
        'La *difusión simple* mueve una sustancia a favor de su gradiente de concentración, sin proteínas ni gasto de energía. Su velocidad la describe la ley de Fick: aumenta con el gradiente, con la superficie de intercambio y con la liposolubilidad, y disminuye con el grosor de la barrera. Por eso los alvéolos son tan delgados y tan extensos, y por eso el edema pulmonar, al engrosar la barrera, dificulta el paso del oxígeno.',
        'La *difusión facilitada* también va a favor de gradiente y no gasta energía, pero necesita una proteína (canal o transportador). Se distingue de la simple porque es *específica* y *saturable*: si se aumenta la concentración de la sustancia, la velocidad sube hasta un máximo (Vmax) y ya no pasa de ahí, porque todos los transportadores están ocupados. El ejemplo clásico son los transportadores GLUT, que introducen glucosa en las células; el GLUT4 del músculo y de la grasa depende de la insulina.',
        'La *ósmosis* es la difusión del agua a través de una membrana semipermeable, desde el lado con menos solutos hacia el lado con más solutos. El agua atraviesa la membrana por la bicapa y, sobre todo, por canales llamados acuaporinas. La fuerza que la mueve se mide como presión osmótica, y depende del número de partículas disueltas, no de su tamaño. La osmolaridad normal del plasma es de unos 290 mOsm/L.',
        'Ejemplo trabajado: se colocan glóbulos rojos en tres soluciones. En suero salino al 0,9 % (isotónico, misma osmolaridad que el plasma) no cambian de volumen. En una solución al 0,45 % (hipotónica) el agua entra, las células se hinchan y pueden romperse (hemólisis). En una solución al 3 % (hipertónica) el agua sale y las células se encogen y toman forma de erizo (crenación). Por eso los líquidos intravenosos se preparan con tanto cuidado.'
      ],
      foco:[
        'Regla infalible para ósmosis: el agua siempre viaja hacia donde hay MÁS solutos. Si una célula está en una solución con menos solutos que ella (hipotónica), el agua entra y la célula se hincha.',
        'Tonicidad no es lo mismo que osmolaridad: una solución de urea puede tener la misma osmolaridad que el plasma y aun así ser hipotónica, porque la urea atraviesa la membrana y no arrastra agua de forma sostenida. Lo que cuenta para el volumen celular son los solutos que NO cruzan la membrana.'
      ]
    },
    {
      t:'Transporte activo: contra el gradiente, con energía',
      p:[
        'El *transporte activo primario* mueve sustancias en contra de su gradiente usando directamente ATP. El ejemplo central es la *bomba sodio-potasio* (Na⁺/K⁺-ATPasa): en cada ciclo saca 3 iones sodio de la célula y mete 2 de potasio, gastando una molécula de ATP. Es electrogénica —deja la célula algo más negativa por dentro— y consume una parte enorme de la energía celular: hasta una tercera parte del ATP en reposo, y cerca de dos terceras partes en las neuronas.',
        'Otras bombas importantes son la Ca²⁺-ATPasa (SERCA), que recapta calcio hacia el retículo sarcoplásmico y permite que el músculo se relaje, y la H⁺/K⁺-ATPasa de las células parietales del estómago, que secreta ácido y es la diana de los inhibidores de la bomba de protones, como el omeprazol.',
        'El *transporte activo secundario* no gasta ATP directamente: aprovecha el gradiente de sodio que creó la bomba para arrastrar otra sustancia. Si ambas van en el mismo sentido es *cotransporte* (por ejemplo, el transportador sodio-glucosa SGLT en el intestino y en el túbulo renal); si van en sentidos contrarios, *contratransporte* o intercambio (por ejemplo, el intercambiador sodio-calcio). Si la bomba se detiene, ese gradiente desaparece y todos estos transportadores dejan de funcionar.'
      ],
      foco:[
        'Primario = usa ATP directamente (bombas). Secundario = usa el gradiente de sodio que generó la bomba. Aunque el secundario "no gasta ATP", depende de que la bomba siga trabajando.'
      ]
    },
    {
      t:'Lo que esto significa en la clínica',
      p:[
        '*Consideración clínica*: la terapia de rehidratación oral funciona gracias al cotransporte sodio-glucosa. En una diarrea grave, el agua y el sodio se pierden, pero el transportador SGLT1 del intestino sigue funcionando: cuando la solución contiene glucosa y sodio juntos, la glucosa arrastra al sodio, y el agua sigue por ósmosis. Es el fundamento de las sales de rehidratación oral, que han salvado millones de vidas.',
        'Muchos fármacos de uso diario actúan sobre estos transportadores. La digoxina inhibe la bomba sodio-potasio del miocardio y, al elevar el sodio intracelular, aumenta el calcio disponible y la fuerza del latido. Los diuréticos de asa, como la furosemida, bloquean el cotransportador Na-K-2Cl del asa de Henle. Los inhibidores de SGLT2, usados en la diabetes, impiden que el riñón reabsorba glucosa y la eliminan por la orina. Y en la fibrosis quística falla el canal de cloruro CFTR, lo que espesa las secreciones del pulmón y del páncreas.',
        'Un último detalle que aparece en exámenes: cuando una célula se queda sin ATP (por isquemia, por ejemplo), la bomba sodio-potasio se detiene, el sodio y el agua entran, y la célula se hincha. Ese edema celular es una de las primeras señales de la lesión isquémica.'
      ],
      foco:[
        'Cada vez que estudies un fármaco nuevo en cursos posteriores, pregunta: ¿qué proteína de membrana bloquea o activa? Casi siempre la respuesta es un canal, un transportador o una bomba.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 2 y 4.'
},

'potencial-de-accion': {
  tema:'Potencial de membrana y potencial de acción',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:15,
  idea:'La neurona y el músculo se comunican con un lenguaje eléctrico. Entender cómo se establece el potencial de reposo, cómo se dispara un potencial de acción y por qué viaja en una sola dirección es la base de la neurología, la cardiología y la anestesia.',
  claves:['potencial de reposo','despolarización','repolarización','periodo refractario','umbral'],
  sigue:'sinapsis-transmision-neuromuscular',
  secciones:[
    {
      t:'El potencial de reposo: una batería en cada célula',
      p:[
        'Toda célula excitable mantiene una diferencia de voltaje entre el interior y el exterior de la membrana: el *potencial de reposo*, que en una neurona ronda los −70 mV y en una fibra muscular esquelética los −90 mV (el interior es negativo respecto al exterior). Esa diferencia es la que se libera cuando se dispara un potencial de acción, igual que la energía almacenada en una batería.',
        'Tiene dos ingredientes. Primero, un gradiente de concentración: mucho potasio dentro, mucho sodio fuera, creado por la bomba sodio-potasio. Segundo, una permeabilidad selectiva: en reposo, la membrana tiene muchos canales de "fuga" de potasio abiertos y muy pocos canales de sodio, de modo que el potasio tiende a salir a favor de su gradiente, llevándose cargas positivas y dejando el interior negativo. La salida de potasio se frena cuando la atracción eléctrica hacia el interior negativo iguala a la fuerza química que lo empuja hacia afuera.',
        'El voltaje al que ese equilibrio se alcanza para un ion concreto se llama *potencial de equilibrio* y se calcula con la ecuación de Nernst. Para el potasio es de unos −90 mV; para el sodio, de unos +60 mV. El potencial de reposo real (−70 a −90 mV) queda muy cerca del potencial del potasio, precisamente porque la membrana en reposo es mucho más permeable al potasio que al sodio.'
      ],
      foco:[
        'Idea clave: el potencial de reposo depende sobre todo del cociente de potasio dentro y fuera. Por eso las alteraciones del potasio sérico (hiper e hipopotasemia) afectan tanto a la excitabilidad del corazón y del músculo.'
      ]
    },
    {
      t:'Las fases de un potencial de acción',
      p:[
        'Un potencial de acción es un cambio rápido, breve y autopropagado del voltaje de la membrana. Empieza cuando un estímulo despolariza la membrana hasta el *umbral* (unos −55 mV en una neurona). Al llegar al umbral se abren los canales de sodio dependientes de voltaje: el sodio entra a favor de su gradiente, despolariza aún más la membrana, y eso abre más canales de sodio. Es un círculo de retroalimentación positiva que lanza el voltaje hacia los +30 mV: la fase de *despolarización*.',
        'El potencial no sigue subiendo indefinidamente porque los canales de sodio tienen dos compuertas: una de activación, que se abre con la despolarización, y una de inactivación, que se cierra unos milisegundos después. Al mismo tiempo se abren, con un pequeño retraso, los canales de potasio dependientes de voltaje: el potasio sale, y el voltaje regresa hacia el reposo. Es la *repolarización*.',
        'Como los canales de potasio se cierran lentamente, el voltaje baja brevemente por debajo del reposo, acercándose al potencial de equilibrio del potasio: es la *hiperpolarización* posterior. Cuando esos canales se cierran, la membrana vuelve a su valor de reposo. La bomba sodio-potasio no participa en las fases rápidas; actúa después, a lo largo de muchos potenciales, restaurando las concentraciones iónicas.',
        'Dos propiedades definen al potencial de acción. Es *todo o nada*: si el estímulo alcanza el umbral, el potencial se dispara con la misma amplitud siempre; si no lo alcanza, no ocurre nada. Y no pierde amplitud al propagarse, porque se regenera en cada punto. La intensidad del estímulo no cambia el tamaño del potencial, sino la *frecuencia* con que se dispara.'
      ],
      foco:[
        'Sodio entra = sube el voltaje. Potasio sale = baja el voltaje. Si te quedas con solo esta frase, puedes reconstruir la curva completa de un potencial de acción.'
      ]
    },
    {
      t:'Periodos refractarios y propagación',
      p:[
        'Justo después de un potencial de acción hay un lapso durante el cual la membrana no responde, o responde solo a estímulos muy fuertes. Durante el *periodo refractario absoluto*, los canales de sodio están inactivados y ningún estímulo, por intenso que sea, puede disparar otro potencial. Durante el *periodo refractario relativo*, algunos canales ya se recuperaron, pero como el potasio sigue saliendo, hace falta un estímulo mayor de lo normal.',
        'El refractario cumple dos funciones vitales: limita la frecuencia máxima de disparo y, sobre todo, garantiza que el potencial viaje en un solo sentido. Cuando la señal se propaga a lo largo del axón, la zona que acaba de dispararse queda refractaria y no puede reactivarse, de modo que la señal solo puede avanzar hacia la zona virgen que tiene delante.',
        'La velocidad de conducción depende del diámetro del axón (más grueso, menos resistencia interna, más rápido) y de la *mielina*. En los axones mielinizados, los canales de sodio se agrupan en los *nódulos de Ranvier*, y el potencial "salta" de nódulo en nódulo: es la *conducción saltatoria*. Ahorra energía y multiplica la velocidad; un axón mielinizado grueso llega a conducir a más de 100 m/s, mientras que uno amielínico fino lo hace a poco más de 1 m/s.'
      ],
      foco:[
        'Un truco para no confundirte: el periodo refractario absoluto lo causa la INACTIVACIÓN de los canales de sodio; el relativo lo prolonga la salida de potasio. Es la respuesta de examen más repetida sobre este tema.'
      ]
    },
    {
      t:'Alteraciones y fármacos que actúan aquí',
      p:[
        '*Consideración clínica*: los anestésicos locales, como la lidocaína, bloquean los canales de sodio dependientes de voltaje. Al impedir que las fibras sensitivas alcancen el umbral, evitan que la señal de dolor llegue al sistema nervioso central. Los antiarrítmicos de clase I actúan de la misma forma sobre el sodio del corazón. La tetrodotoxina del pez globo también bloquea estos canales, y por eso provoca parálisis y puede causar la muerte.',
        'Los cambios en el potasio sérico alteran el potencial de reposo. En la *hiperpotasemia* el potencial de equilibrio del potasio se vuelve menos negativo, la membrana se despolariza, los canales de sodio se inactivan y la célula se hace menos excitable: aparecen arritmias graves. En la *hipopotasemia* ocurre lo contrario: la membrana se hiperpolariza, cuesta más llegar al umbral y aparecen debilidad muscular y calambres.',
        'En las enfermedades desmielinizantes, como la esclerosis múltiple y el síndrome de Guillain-Barré, la pérdida de mielina impide la conducción saltatoria: la señal se enlentece o se bloquea, y el paciente pierde fuerza o sensibilidad. Es un ejemplo perfecto de cómo un detalle de la fisiología básica se convierte en una enfermedad neurológica.'
      ],
      foco:[
        'Repasa la relación entre potasio sérico y excitabilidad con un ejemplo concreto: un paciente con potasio de 7 mEq/L. ¿Qué pasa con su potencial de reposo, con sus canales de sodio y con su ECG?'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 5.'
},

'sinapsis-transmision-neuromuscular': {
  tema:'Sinapsis y transmisión neuromuscular',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:14,
  idea:'La sinapsis es el punto donde una neurona se comunica con otra célula. La unión neuromuscular, la sinapsis mejor conocida, es también la diana de fármacos, toxinas y enfermedades muy frecuentes en clínica: miastenia gravis, botulismo, relajantes musculares y organofosforados.',
  claves:['sinapsis','acetilcolina','placa motora','neurotransmisor','vesícula'],
  sigue:'contraccion-muscular',
  secciones:[
    {
      t:'Cómo funciona una sinapsis química',
      p:[
        'La mayoría de las sinapsis del cuerpo son químicas. Una neurona presináptica libera un neurotransmisor en una hendidura muy estrecha (unos 20-30 nm), el neurotransmisor difunde y se une a receptores de la célula postsináptica, y eso cambia su actividad eléctrica. Existen también sinapsis eléctricas, con uniones en hendidura que pasan la corriente directamente de una célula a otra; son rápidas y bidireccionales, y se encuentran, por ejemplo, en el corazón y en algunos circuitos del cerebro.',
        'La secuencia de la transmisión química siempre es la misma. Primero, el potencial de acción llega al terminal presináptico y abre canales de calcio dependientes de voltaje. Segundo, el calcio entra y provoca que las vesículas cargadas de neurotransmisor se fusionen con la membrana gracias a las proteínas SNARE: es la *exocitosis*. Tercero, el neurotransmisor cruza la hendidura y se une a su receptor. Cuarto, el receptor produce una respuesta en la célula postsináptica. Y quinto, la señal se termina rápidamente: el neurotransmisor es degradado por una enzima, recapturado por el terminal o difunde y se aleja.',
        'La entrada de calcio es el paso regulador: cuanto más calcio entra, más vesículas se liberan. Por eso el magnesio, que compite con el calcio, reduce la liberación de neurotransmisor, y por eso los pacientes con hipermagnesemia (por ejemplo, tras tratamiento con sulfato de magnesio en preeclampsia) pueden desarrollar debilidad muscular.'
      ],
      foco:[
        'Si tienes que memorizar solo una cosa: sin calcio no hay liberación de neurotransmisor. Todo lo que afecte la entrada de calcio o las proteínas SNARE bloquea la sinapsis.'
      ]
    },
    {
      t:'La unión neuromuscular paso a paso',
      p:[
        'La unión neuromuscular, o placa motora, es la sinapsis entre una motoneurona alfa y una fibra muscular esquelética. El neurotransmisor es la *acetilcolina* (ACh), que se sintetiza en el terminal a partir de colina y acetil-CoA por la enzima colina acetiltransferasa, y se almacena en vesículas.',
        'Cuando el potencial de acción llega al terminal, el calcio entra y se liberan unas 125 vesículas, con miles de moléculas de acetilcolina cada una. La acetilcolina se une a los *receptores nicotínicos* de la membrana muscular, que son canales ionotrópicos: al abrirse, dejan entrar sodio, despolarizan la membrana y generan el *potencial de placa terminal*. Ese potencial es mucho mayor de lo necesario para llegar al umbral, y por eso se dice que la unión neuromuscular tiene un gran *factor de seguridad*: cada potencial de acción de la neurona produce, casi siempre, un potencial de acción muscular.',
        'La señal termina de inmediato porque la enzima *acetilcolinesterasa*, anclada en la hendidura, degrada la acetilcolina en colina y acetato; la colina se recapta hacia el terminal para fabricar más transmisor. Sin esa rápida degradación, la acetilcolina se acumularía y la fibra se mantendría despolarizada e inexcitable.'
      ],
      foco:[
        'Receptor nicotínico = canal iónico (ionotrópico), en la placa motora y en los ganglios autónomos. Receptor muscarínico = acoplado a proteína G (metabotrópico), en los órganos que inerva el parasimpático. No los confundas.'
      ]
    },
    {
      t:'Neurotransmisores y receptores: el panorama general',
      p:[
        'Los receptores se dividen en dos grandes familias. Los *ionotrópicos* son canales que se abren al unirse el neurotransmisor: la respuesta es muy rápida (milisegundos). Los *metabotrópicos* están acoplados a proteínas G y activan cascadas de segundos mensajeros: la respuesta es más lenta, más prolongada y más modulable.',
        'Entre los transmisores más importantes están la *acetilcolina* (unión neuromuscular, ganglios, parasimpático); el *glutamato* (principal excitador del sistema nervioso central); el *GABA* y la *glicina* (principales inhibidores, que abren canales de cloruro); la *noradrenalina* (simpático); la *dopamina*, la *serotonina* y las *endorfinas*. Un mismo neurotransmisor puede excitar o inhibir según el receptor que encuentre.',
        'Las sinapsis también son plásticas: se refuerzan con el uso y se debilitan con el desuso. Esa plasticidad es el sustrato del aprendizaje y la memoria, y explica por qué muchos fármacos que alteran la neurotransmisión tienen efectos que tardan semanas en aparecer.'
      ],
      foco:[
        'Excitadores: glutamato (abre canales de sodio y calcio). Inhibidores: GABA y glicina (abren canales de cloruro). Con esa regla puedes deducir el efecto de muchos fármacos sedantes y anticonvulsivantes.'
      ]
    },
    {
      t:'Enfermedades y fármacos de la unión neuromuscular',
      p:[
        '*Consideración clínica*: la miastenia gravis es una enfermedad autoinmune en la que los anticuerpos destruyen o bloquean los receptores nicotínicos. Con menos receptores, el potencial de placa no alcanza el umbral y aparece debilidad que empeora con el esfuerzo y mejora con el reposo (ptosis, diplopía, fatiga de las extremidades). Se trata con inhibidores de la acetilcolinesterasa, como la piridostigmina, que prolongan la acción de la acetilcolina. En el síndrome de Lambert-Eaton, en cambio, los anticuerpos atacan los canales de calcio presinápticos: la liberación de acetilcolina falla, y la fuerza mejora, paradójicamente, tras un esfuerzo breve.',
        'Las toxinas ilustran los tres puntos donde se puede bloquear la placa. La *toxina botulínica* corta las proteínas SNARE e impide la liberación: parálisis flácida. El *curare* y los bloqueadores neuromusculares que se usan en anestesia (como el rocuronio) compiten con la acetilcolina por el receptor. Los *organofosforados* de los insecticidas inhiben la acetilcolinesterasa, y la acetilcolina se acumula: aparecen miosis, salivación, broncorrea, fasciculaciones y, en los casos graves, parálisis por despolarización persistente.',
        'Ejemplo trabajado: un agricultor que fumiga sin protección llega con miosis, sialorrea, secreciones bronquiales abundantes y fasciculaciones. Es una intoxicación colinérgica por organofosforados. El tratamiento incluye atropina, que bloquea los receptores muscarínicos y controla las secreciones, y pralidoxima, que reactiva la acetilcolinesterasa antes de que el complejo se "envejezca". Comprender la placa motora te permite razonar el tratamiento sin memorizarlo.'
      ],
      foco:[
        'Tres sitios, tres causas: liberación (botulínica, Lambert-Eaton, magnesio), receptor (miastenia, curare) y degradación (organofosforados, neostigmina). Si ubicas el sitio, adivinas el cuadro.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 7.'
},

'contraccion-muscular': {
  tema:'Contracción del músculo esquelético',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:15,
  idea:'El músculo esquelético convierte energía química en movimiento mediante el deslizamiento de dos filamentos proteicos. Entender el sarcómero, el papel del calcio y la relación entre longitud y fuerza te da la base para comprender desde el rigor mortis hasta la hipertermia maligna.',
  claves:['actina','miosina','puente cruzado','retículo sarcoplásmico','troponina','calcio'],
  sigue:'musculo-liso-cardiaco',
  secciones:[
    {
      t:'De la fibra al sarcómero: la anatomía de la contracción',
      p:[
        'Un músculo esquelético está formado por fascículos de fibras musculares, células multinucleadas largas y cilíndricas. Cada fibra contiene cientos de *miofibrillas*, que corren a lo largo de toda su longitud, y cada miofibrilla es una cadena de unidades repetidas llamadas *sarcómeros*. El sarcómero, delimitado por dos líneas Z, es la unidad funcional de la contracción.',
        'Dentro de cada sarcómero hay dos tipos de filamentos. Los *filamentos delgados*, de actina, están anclados en la línea Z; alrededor de la actina se enrollan la tropomiosina, que tapa los sitios de unión, y la troponina, que es sensible al calcio. Los *filamentos gruesos*, de miosina, ocupan el centro del sarcómero; cada molécula de miosina tiene una cabeza con actividad ATPasa que puede unirse a la actina.',
        'Al microscopio, esa disposición explica las bandas. La *banda A* corresponde a la longitud de los filamentos gruesos y no cambia durante la contracción. La *banda I* es la región donde solo hay filamento delgado, y se acorta. La *zona H*, en el centro de la banda A, donde solo hay filamento grueso, también se acorta. La *línea M* fija los filamentos gruesos en el centro. Cuando el músculo se contrae, los filamentos no se acortan: se deslizan, y las líneas Z se acercan entre sí. Es la teoría del *deslizamiento de los filamentos*.'
      ],
      foco:[
        'Al contraerse: la banda A NO cambia; la banda I y la zona H se acortan. Es la pregunta de examen clásica sobre el sarcómero.'
      ]
    },
    {
      t:'Del potencial de acción a la contracción',
      p:[
        'Este proceso se llama *acoplamiento excitación-contracción*. El potencial de acción muscular viaja por la superficie de la fibra y se introduce en profundidad por los *túbulos T*, invaginaciones de la membrana que rodean las miofibrillas. Allí, receptores sensibles a dihidropiridina, que funcionan como sensores de voltaje, activan los canales de rianodina del *retículo sarcoplásmico*, el gran almacén de calcio de la fibra, y este libera calcio en el citoplasma.',
        'El calcio se une a la *troponina C*. Ese cambio desplaza la tropomiosina y deja al descubierto los sitios de unión de la actina. Entonces se repite el *ciclo de los puentes cruzados*: la cabeza de la miosina, cargada con ADP y fosfato, se une a la actina; libera el fosfato y el ADP y realiza el "golpe de fuerza", tirando del filamento delgado hacia el centro; una nueva molécula de ATP se une a la cabeza y la desprende de la actina; y el ATP se hidroliza y "recarga" la cabeza, que queda lista para otro ciclo.',
        'La contracción cesa cuando la fibra deja de recibir estímulos: la bomba SERCA recapta el calcio hacia el retículo sarcoplásmico, la troponina libera el calcio y la tropomiosina vuelve a tapar los sitios de la actina. Fíjate en un detalle importante: el ATP interviene tanto en la contracción (energía para el golpe de fuerza) como en la relajación (desprender la miosina y recaptar el calcio). Sin ATP, la miosina no puede soltarse de la actina, y el músculo queda rígido: es el *rigor mortis* que aparece tras la muerte.'
      ],
      foco:[
        'Recuerda la cadena completa: potencial de acción → túbulos T → receptor de dihidropiridina → canal de rianodina → calcio → troponina C → puentes cruzados. Sin cualquiera de esos eslabones no hay contracción.'
      ]
    },
    {
      t:'La mecánica del músculo: fuerza, longitud y frecuencia',
      p:[
        'La fuerza que genera un músculo depende de su longitud inicial. La *relación longitud-tensión* muestra que la fuerza es máxima cuando el sarcómero mide unos 2,0-2,2 µm, porque es la longitud con mayor solapamiento entre filamentos y por lo tanto el mayor número de puentes cruzados posibles. Si el sarcómero está demasiado estirado, los filamentos casi no se superponen y la fuerza cae; si está demasiado acortado, los filamentos delgados chocan entre sí y también cae. Esta relación es la base del mecanismo de Frank-Starling en el corazón.',
        'Se distinguen dos tipos de contracción. En la *isométrica* el músculo genera fuerza sin cambiar de longitud (por ejemplo, empujar una pared). En la *isotónica* el músculo se acorta mientras genera una fuerza constante (por ejemplo, levantar una pesa). Además, cuanto mayor es la carga, más lenta es la velocidad de acortamiento: es la relación fuerza-velocidad.',
        'Un único potencial de acción produce una contracción breve, la *sacudida* (twitch). Si los estímulos llegan cada vez más seguidos, las contracciones se suman: es la *sumación de frecuencia*. A frecuencias altas, las sacudidas se fusionan en una contracción sostenida y máxima, la *tetania*. A diferencia del miocardio, el músculo esquelético puede tetanizarse, porque su periodo refractario es mucho más corto que la duración de la contracción.'
      ],
      foco:[
        'Fuerza máxima = solapamiento óptimo de filamentos, no máximo estiramiento ni máximo acortamiento. Y el corazón NO puede tetanizarse; el esquelético sí.'
      ]
    },
    {
      t:'Energía, fatiga y enfermedades del músculo',
      p:[
        'El músculo almacena muy poco ATP: solo alcanza para unos segundos de contracción. Lo repone con tres sistemas. La *fosfocreatina* regenera ATP de inmediato y sostiene el esfuerzo máximo durante unos 10 segundos. La *glucólisis anaerobia* produce ATP rápido, pero genera lactato, y sostiene esfuerzos intensos de uno o dos minutos. Y el *metabolismo oxidativo* produce mucho más ATP, más lentamente, y sostiene el esfuerzo prolongado. La fatiga muscular es multifactorial: depleción de fosfocreatina y glucógeno, acumulación de fosfato inorgánico y protones y alteraciones del calcio.',
        '*Consideración clínica*: la hipertermia maligna es una reacción rara y grave en personas con una mutación del canal de rianodina; algunos anestésicos inhalados y la succinilcolina desencadenan una liberación masiva de calcio, con contracción sostenida, rigidez, producción enorme de calor y acidosis. Se trata con dantroleno, que bloquea el canal de rianodina. En las distrofias musculares falta la distrofina, una proteína que ancla el citoesqueleto a la membrana, y las fibras se rompen con cada contracción. En la rabdomiólisis, la destrucción masiva de fibras libera mioglobina y potasio, y puede dañar el riñón.',
        'Ejemplo trabajado: tras una maratón, un corredor tiene la orina de color oscuro y dolor muscular intenso. Los análisis muestran creatina cinasa muy elevada. Es una rabdomiólisis: las fibras dañadas liberan mioglobina, que colorea la orina y puede obstruir los túbulos renales. El tratamiento es la hidratación intensiva. Un cuadro que parecía "solo cansancio" se explica con la biología de la fibra muscular.'
      ],
      foco:[
        'Sistemas de energía por duración: fosfocreatina (segundos), glucólisis (uno o dos minutos), oxidativo (minutos a horas). Es el orden en que se usan y el fundamento del entrenamiento deportivo.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 6 y 84.'
}

});
