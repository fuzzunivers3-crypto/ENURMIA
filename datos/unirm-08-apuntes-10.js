/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 10)
   Termina de cubrir PARASITOLOGIA MEDICA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'protozoos-intestinales-parasito': {
  tema:'Protozoos intestinales',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:7,
  idea:'Dos protozoos intestinales dominan la práctica clínica, y comparten un mismo ciclo de vida directo (quiste que se ingiere, trofozoíto que causa el daño), pero con mecanismos de enfermedad completamente distintos.',
  claves:['Entamoeba histolytica','Giardia','quiste','trofozoíto','disentería'],
  sigue:'protozoos-tisulares-hematicos',
  secciones:[
    {
      t:'Dos formas, un ciclo directo',
      p:[
        'Los protozoos intestinales suelen tener dos formas en su ciclo de vida: el *quiste*, la forma resistente e infectante, capaz de sobrevivir en el ambiente (agua, alimentos contaminados) y de atravesar la acidez del estómago; y el *trofozoíto*, la forma activa y móvil, que se alimenta y se reproduce dentro del huésped, pero que fuera del cuerpo muere rápidamente. Este ciclo es directo (monoxeno, ya visto en el tema de generalidades): el quiste eliminado en las heces contamina agua o alimentos, y otra persona se infecta al ingerirlo, sin necesitar un hospedero intermediario.'
      ]
    },
    {
      t:'Entamoeba histolytica y Giardia: mecanismos de enfermedad distintos',
      p:[
        '*Entamoeba histolytica* invade activamente la pared del colon, causando ulceraciones y, como su nombre indica, destrucción tisular (histolytica = que disuelve tejido): produce *disentería* (diarrea con sangre y moco), y en casos más graves puede diseminarse por vía sanguínea hasta el hígado, formando un absceso hepático amebiano.',
        '*Giardia* (lamblia o intestinalis) no invade la pared intestinal: se adhiere a la superficie del intestino delgado mediante un disco succionador, interfiriendo mecánicamente con la absorción de nutrientes y grasas. Por eso produce típicamente diarrea acuosa, crónica y con mala absorción de grasas (esteatorrea), pero sin sangre —un cuadro clínicamente distinto al de la amebiasis, aunque ambos sean protozoos intestinales.'
      ],
      foco:[
        'Diferencia clave: Entamoeba invade y puede diseminarse (disentería, absceso hepático); Giardia se adhiere sin invadir y produce malabsorción, sin sangre en las heces.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 3-4.'
},

'protozoos-tisulares-hematicos': {
  tema:'Protozoos tisulares y hemáticos',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:7,
  idea:'A diferencia de los protozoos intestinales, estos viven dentro de los tejidos o de la propia sangre del huésped, y casi todos necesitan un vector (insecto) para completar su ciclo de vida, no solo la vía fecal-oral.',
  claves:['Toxoplasma','Trypanosoma','Leishmania','Chagas','taquizoíto'],
  sigue:'malaria-parasito',
  secciones:[
    {
      t:'Toxoplasma: la zoonosis del gato',
      p:[
        '*Toxoplasma gondii* tiene como hospedero definitivo al gato (donde completa su reproducción sexual), pero puede infectar a casi cualquier mamífero, incluido el humano, como hospedero intermediario —una zoonosis, retomando el concepto ya visto en generalidades. La forma activa e invasiva se llama *taquizoíto*, que se multiplica rápido dentro de las células del huésped durante la infección aguda. En una persona con el sistema inmunitario normal, la infección suele ser leve o asintomática; el riesgo real es en el embarazo (transmisión al feto, con posible daño grave) y en personas inmunocomprometidas, donde la infección puede reactivarse de forma severa.'
      ]
    },
    {
      t:'Trypanosoma y Leishmania: transmitidos por vectores',
      p:[
        '*Trypanosoma cruzi*, transmitido por la picadura (en realidad por las heces) de un insecto llamado triatomino ("chinche besucona"), causa la enfermedad de *Chagas*, con una fase aguda a menudo leve seguida, años o décadas después, de una fase crónica que puede dañar gravemente el corazón (miocardiopatía chagásica) y el tracto digestivo (megacolon, megaesófago). *Leishmania*, transmitida por la picadura de un mosquito flebótomo, produce distintas formas clínicas según la especie: cutánea (úlceras en la piel), mucocutánea, o visceral (afectando hígado, bazo y médula ósea, potencialmente grave si no se trata).'
      ],
      foco:[
        'Consideración clínica: la enfermedad de Chagas es un buen ejemplo de por qué "sin síntomas ahora" no significa "sin riesgo después": buena parte del daño cardíaco grave aparece recién décadas después de la infección inicial, muchas veces ya asintomática en el intervalo.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 5-7.'
},

'malaria-parasito': {
  tema:'Malaria',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:8,
  idea:'La malaria es, probablemente, la enfermedad parasitaria más estudiada del mundo, y su ciclo de vida —que alterna obligatoriamente entre el mosquito y el humano— explica directamente por qué la fiebre aparece en ciclos regulares, no de forma continua.',
  claves:['Plasmodium','Anopheles','falciparum','gota gruesa','esquizonte','fiebre terciana'],
  sigue:'nematodos-intestinales',
  secciones:[
    {
      t:'Un ciclo obligatoriamente indirecto',
      p:[
        'La malaria la causan varias especies de *Plasmodium*, transmitidas exclusivamente por la picadura del mosquito hembra *Anopheles*, que actúa como hospedero definitivo (donde ocurre la reproducción sexual del parásito) mientras que el humano es el hospedero intermediario —un ciclo de vida indirecto obligatorio, ya visto en el tema de generalidades, sin transmisión persona a persona directa.',
        'Dentro del humano, el parásito invade primero el hígado y después los glóbulos rojos, donde se multiplica dentro de un *esquizonte* que, al madurar, rompe el glóbulo rojo liberando nuevos parásitos que invaden más eritrocitos —ese momento de ruptura sincronizada de muchos glóbulos rojos a la vez es lo que dispara los episodios de fiebre característicos de la enfermedad.'
      ]
    },
    {
      t:'Por qué *falciparum* es la especie que más preocupa',
      p:[
        'De las especies de Plasmodium que infectan al humano, *Plasmodium falciparum* es la más peligrosa: puede infectar glóbulos rojos de cualquier edad (no solo los jóvenes o los viejos, como otras especies), alcanzando niveles de parasitemia mucho más altos, y sus glóbulos rojos infectados se adhieren a las paredes de los vasos sanguíneos pequeños, pudiendo obstruir la circulación en órganos vitales como el cerebro (malaria cerebral), una complicación potencialmente mortal que otras especies de Plasmodium casi nunca producen.',
        'El diagnóstico de referencia sigue siendo la *gota gruesa* (una muestra de sangre concentrada, examinada al microscopio para detectar al parásito directamente dentro de los glóbulos rojos), complementada con el frotis fino para identificar la especie con más precisión.'
      ],
      foco:[
        'La *fiebre terciana* (picos de fiebre cada 48 horas, es decir, cada tercer día contando el día del pico) es el patrón clásico asociado a ciertas especies de Plasmodium, aunque en la práctica clínica moderna ese patrón regular no siempre se ve con claridad, sobre todo al inicio de la infección.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 8.'
},

'nematodos-intestinales': {
  tema:'Nematodos intestinales',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:7,
  idea:'Los nematodos (gusanos redondos) intestinales son, en conjunto, de las infecciones parasitarias más frecuentes del mundo, y la mayoría se transmite por dos vías muy simples de recordar: ingerir huevos, o que una larva atraviese la piel directamente.',
  claves:['Ascaris','uncinaria','Trichuris','Enterobius','larva'],
  sigue:'nematodos-tisulares',
  secciones:[
    {
      t:'Transmisión por ingesta de huevos',
      p:[
        '*Ascaris lumbricoides*, el nematodo intestinal más grande y frecuente, y *Trichuris trichiura* (el "gusano látigo", por su forma) se transmiten cuando una persona ingiere sus huevos, presentes en tierra o alimentos contaminados con materia fecal —un ciclo directo, similar en lógica al de los protozoos intestinales ya vistos, aunque con un gusano en vez de un protozoo. *Enterobius vermicularis* (la "lombriz" u oxiuro) tiene, además, un mecanismo particular: la hembra migra de noche hacia el ano para poner sus huevos ahí, causando picazón intensa, y el rascado facilita que los huevos lleguen a las manos y se reingieran o se transmitan a otra persona (autoinfección o transmisión directa entre personas, muy frecuente en niños en convivencia cercana).'
      ]
    },
    {
      t:'Transmisión por penetración directa de la piel',
      p:[
        'Las *uncinarias* (Ancylostoma y Necator) usan una vía distinta: su *larva* infectante, presente en suelo contaminado, penetra ACTIVAMENTE a través de la piel intacta (típicamente de los pies descalzos), migra por el cuerpo hasta llegar al intestino, y ahí el gusano adulto se fija a la pared intestinal y se alimenta de sangre, pudiendo causar anemia por pérdida crónica de sangre si la infección es intensa y prolongada.'
      ],
      foco:[
        'Consideración de salud pública: el uso de calzado y el saneamiento adecuado de excretas son, respectivamente, las medidas preventivas más efectivas contra las uncinarias (que penetran la piel) y contra Ascaris/Trichuris (que se ingieren desde tierra contaminada) — la misma lógica de prevención según la vía de transmisión ya vista en el tema de generalidades.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 10-12.'
},

'nematodos-tisulares': {
  tema:'Nematodos tisulares',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:6,
  idea:'Algunos nematodos no se quedan en el intestino: migran e invaden tejidos, y uno de ellos tiene la particularidad de poder reinfectar al mismo huésped sin necesitar salir del cuerpo, algo excepcional entre los parásitos.',
  claves:['Strongyloides','filaria','larva migrans','autoinfección'],
  sigue:'cestodos',
  secciones:[
    {
      t:'Strongyloides y su capacidad única de autoinfección',
      p:[
        '*Strongyloides stercoralis* tiene un ciclo de vida particular: sus larvas pueden, dentro del propio intestino del huésped, transformarse directamente en la forma infectante y penetrar la pared intestinal o la piel perianal, reiniciando el ciclo SIN salir del cuerpo —un fenómeno llamado *autoinfección*, que le permite a esta infección persistir durante años o décadas en una persona, mucho después de la exposición inicial. En una persona inmunocomprometida, esta autoinfección puede acelerarse de forma masiva y descontrolada (síndrome de hiperinfección), una complicación grave y potencialmente mortal.'
      ]
    },
    {
      t:'Filarias y larva migrans',
      p:[
        'Las *filarias* son nematodos transmitidos por la picadura de insectos vectores, que viven como adultos en tejidos o vasos linfáticos, y cuyas larvas (microfilarias) circulan en sangre o piel, según la especie; la obstrucción crónica de vasos linfáticos por filarias adultas puede producir una inflamación y engrosamiento masivo de una extremidad, conocida como elefantiasis.',
        'La *larva migrans* cutánea es un cuadro distinto: ocurre cuando una larva de un nematodo que normalmente infecta a otros animales (como perros o gatos) penetra la piel humana por error, pero no puede completar su ciclo de vida en un huésped equivocado, así que simplemente migra bajo la piel, dejando un trayecto serpiginoso visible e intensamente pruriginoso, sin poder progresar más allá de ese punto.'
      ],
      foco:[
        'Strongyloides es el ejemplo clásico de examen para explicar por qué, en un paciente que va a recibir tratamiento inmunosupresor, conviene investigar y tratar esta infección ANTES de empezar el inmunosupresor, precisamente por el riesgo de hiperinfección.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 13-14.'
},

'cestodos': {
  tema:'Cestodos',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:7,
  idea:'Comer carne de cerdo mal cocida puede transmitir el mismo parásito de dos formas completamente distintas en gravedad, según si se ingiere la larva (en la carne) o el huevo (por contaminación fecal-oral) — la diferencia es, literalmente, de vida o muerte.',
  claves:['Taenia','cisticercosis','Hymenolepis','proglótide','escólex'],
  sigue:'trematodos',
  secciones:[
    {
      t:'La anatomía básica de una tenia',
      p:[
        'Los *cestodos* (o tenias, gusanos planos y segmentados) tienen un *escólex* (la "cabeza", con ganchos o ventosas que se fija a la pared intestinal) del cual se desprenden segmentos repetidos llamados *proglótides*, cada uno capaz de producir huevos: la tenia crece agregando proglótides nuevos continuamente, pudiendo alcanzar varios metros de longitud como gusano adulto en el intestino.'
      ]
    },
    {
      t:'Taenia solium: dos enfermedades según qué se ingiere',
      p:[
        'Si una persona ingiere carne de cerdo mal cocida que contiene la larva de *Taenia solium* (cisticerco), desarrolla la teniasis: el gusano adulto se establece en el intestino, una infección generalmente leve. Pero si, en cambio, una persona ingiere directamente los HUEVOS de Taenia solium (por contaminación fecal-oral, por ejemplo por un portador de teniasis con mala higiene), esos huevos eclosionan y las larvas migran a través de los tejidos, incluido potencialmente el sistema nervioso central, causando *cisticercosis*: quistes larvarios alojados en el cerebro, el músculo u otros tejidos, que en el cerebro pueden causar convulsiones y son una de las causas más frecuentes de epilepsia adquirida en zonas donde esta parasitosis es común.'
      ],
      foco:[
        'Consideración clínica clave: la persona con teniasis intestinal (el gusano adulto) puede, sin saberlo, ser la fuente de cisticercosis grave en OTRA persona (o en sí misma, por autoinfección con sus propios huevos), lo cual explica por qué tratar la teniasis intestinal es, en parte, una medida de salud pública, no solo un tratamiento individual.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 16.'
},

'trematodos': {
  tema:'Trematodos',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:6,
  idea:'Los trematodos (gusanos planos no segmentados) comparten casi todos un mismo patrón de ciclo de vida indirecto: necesitan un caracol de agua dulce como hospedero intermediario obligatorio antes de poder infectar a un humano.',
  claves:['Schistosoma','Fasciola','caracol','cercaria'],
  sigue:'diagnostico-parasitologico',
  secciones:[
    {
      t:'El caracol como paso obligatorio',
      p:[
        'A diferencia de los cestodos ya vistos, los *trematodos* casi siempre necesitan un *caracol* de agua dulce como hospedero intermediario, dentro del cual el parásito se multiplica y se transforma hasta liberar la *cercaria*, la forma larvaria libre en el agua, capaz de infectar a un nuevo hospedero (definitivo o, en algunos casos, otro intermediario).'
      ]
    },
    {
      t:'Schistosoma y Fasciola: dos vías de entrada distintas',
      p:[
        '*Schistosoma* es peculiar entre los trematodos porque su cercaria PENETRA ACTIVAMENTE la piel intacta de una persona que está en contacto con agua dulce contaminada (nadando, lavando ropa, trabajando en arrozales), sin necesitar ser ingerida. Los gusanos adultos viven dentro de los vasos sanguíneos (no en el intestino), y sus huevos, al quedar atrapados en tejidos como el hígado o la vejiga, provocan una intensa reacción inflamatoria crónica que puede llevar a fibrosis del órgano afectado con el tiempo.',
        '*Fasciola hepatica*, en cambio, se adquiere por INGESTIÓN, al comer vegetales acuáticos (como berros) contaminados con la forma infectante que se desprendió del caracol; el gusano adulto migra hasta alojarse en las vías biliares del hígado, donde puede causar inflamación crónica de esa vía.'
      ],
      foco:[
        'Diferencia clave para recordar: Schistosoma entra por la PIEL (contacto con agua), Fasciola entra por la BOCA (ingestión de vegetales contaminados) — ambos necesitan un caracol antes, pero la vía final hacia el humano es opuesta.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 17-18.'
},

'diagnostico-parasitologico': {
  tema:'Diagnóstico parasitológico',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:6,
  idea:'El diagnóstico de una parasitosis depende, en gran medida, de saber DÓNDE buscar el parásito: no todas las técnicas sirven para todos los parásitos, porque cada uno se elimina o se concentra en un sitio distinto del cuerpo.',
  claves:['coprológico','concentración','gota gruesa','serología','técnica de Graham'],
  sigue:'ectoparasitos',
  secciones:[
    {
      t:'El examen de heces: la base del diagnóstico intestinal',
      p:[
        'El examen *coprológico* (de heces) directo es la primera herramienta para buscar huevos, larvas o quistes de parásitos intestinales, pero tiene una sensibilidad limitada si el número de parásitos es bajo; las técnicas de *concentración* (que procesan una muestra más grande y la concentran antes de examinarla al microscopio) aumentan considerablemente la probabilidad de detectar una infección leve que un examen directo simple podría pasar por alto.',
        'La *técnica de Graham* (de la cinta adhesiva) es un método específico para el diagnóstico de Enterobius vermicularis (ya visto en nematodos intestinales): se aplica cinta adhesiva en la región perianal, típicamente a primera hora de la mañana, para recoger los huevos que la hembra depositó ahí durante la noche —un examen de heces convencional casi nunca detecta esta infección, precisamente porque los huevos no se depositan dentro del intestino.'
      ]
    },
    {
      t:'Cuando el parásito no está en las heces',
      p:[
        'Para parásitos que no viven en el intestino, hace falta buscar en otro sitio: la *gota gruesa*, ya vista en malaria, examina directamente la sangre. La *serología* (detección de anticuerpos contra el parásito en sangre) es útil cuando el parásito es difícil de encontrar directamente (por ejemplo, en la enfermedad de Chagas crónica, o en la toxoplasmosis), aportando evidencia indirecta de la infección, presente o pasada.'
      ],
      foco:[
        'Regla práctica: antes de pedir un examen parasitológico, pensar primero en el ciclo de vida del parásito sospechado —dónde vive, qué elimina y por dónde— porque eso determina cuál muestra (heces, sangre, cinta adhesiva) y qué técnica tiene sentido pedir.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 2.'
},

'ectoparasitos': {
  tema:'Ectoparásitos',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:5,
  idea:'A diferencia de todos los parásitos anteriores, que viven DENTRO del cuerpo, estos dos viven directamente SOBRE la piel, y ambos comparten un síntoma central —el picor— aunque por mecanismos distintos.',
  claves:['Pediculus','Sarcoptes scabiei','sarna','piojo','prurito nocturno'],
  sigue:'artropodos-importancia-medica',
  secciones:[
    {
      t:'Pediculus: el piojo, sobre la superficie',
      p:[
        '*Pediculus* (el piojo, con variantes que afectan el cuero cabelludo, el cuerpo o la zona púbica) vive sobre la superficie de la piel o el cabello, alimentándose de sangre mediante picaduras repetidas, lo que produce picazón por reacción alérgica a la saliva del insecto. Se transmite por contacto directo cercano, o al compartir objetos personales (peines, gorras).'
      ]
    },
    {
      t:'Sarcoptes scabiei: excava dentro de la piel',
      p:[
        '*Sarcoptes scabiei*, el ácaro causante de la *sarna* (escabiosis), a diferencia del piojo, no se queda sobre la superficie: la hembra excava túneles diminutos dentro de la capa más superficial de la piel (el estrato córneo de la epidermis, ya vista en Histología), donde pone sus huevos. Esto produce un *prurito nocturno* característico y muy intenso (empeora notablemente de noche, posiblemente relacionado con el calor de la cama que activa al ácaro), con lesiones típicamente en los espacios entre los dedos, las muñecas y otras zonas de piel fina.'
      ],
      foco:[
        'El prurito nocturno intenso, junto con lesiones en espacios interdigitales, es un dato clínico que orienta fuertemente hacia sarna antes que hacia otras causas de picazón cutánea, y suele afectar también a convivientes cercanos por el contacto piel con piel prolongado que requiere el contagio.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 20.'
},

'artropodos-importancia-medica': {
  tema:'Artrópodos de importancia médica',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:5,
  idea:'Este tema conecta hacia atrás casi todo el bloque de Parasitología: repasa, agrupados por el tipo de artrópodo, todos los vectores ya mencionados a lo largo del bloque, mostrando que un puñado de familias de insectos es responsable de transmitir la mayoría de las parasitosis más graves.',
  claves:['vector','mosquito','garrapata','transmisión vectorial'],
  sigue:'control-prevencion-parasitosis',
  secciones:[
    {
      t:'Un repaso agrupado por vector',
      p:[
        'La *transmisión vectorial* (ya usada varias veces a lo largo del bloque) depende de un pequeño número de familias de artrópodos: el *mosquito* Anopheles transmite la malaria (ya visto); otros mosquitos transmiten filarias; el mosquito flebótomo transmite Leishmania; el triatomino transmite la enfermedad de Chagas; y la *garrapata*, aunque menos protagonista en este bloque de parasitología propiamente dicho, es un vector médicamente importante para otras enfermedades (como se vio con Borrelia, causante de la enfermedad de Lyme, en Microbiología).',
        'Lo que comparten todos estos *vectores* es que el parásito necesita, obligatoriamente, completar parte de su desarrollo DENTRO del insecto antes de poder infectar a un nuevo huésped humano (vector biológico, ya distinguido del vector mecánico en el tema de generalidades) —no son simples "taxis" que transportan al parásito sin cambiarlo.'
      ]
    },
    {
      t:'Por qué agrupar así ayuda a repasar',
      p:[
        'Ver el bloque completo desde el vector, en vez de desde el parásito, es una forma distinta y complementaria de repasar todo lo visto: mosquito Anopheles → malaria; mosquito flebótomo → Leishmania; triatomino → Chagas; caracol de agua dulce → Schistosoma y Fasciola (aunque el caracol no es un artrópodo, cumple el mismo papel de hospedero intermediario obligatorio). Cada vector, memorizado una sola vez, conecta con la enfermedad correspondiente sin necesitar volver a aprender el ciclo completo desde cero.'
      ],
      foco:[
        'Este repaso por vector es exactamente el tipo de organización alternativa que conviene hacer antes de un examen: agrupar la misma información de una segunda forma distinta a como se estudió la primera vez suele revelar huecos que memorizar en un solo orden no revela.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 19-21.'
},

'control-prevencion-parasitosis': {
  tema:'Control y prevención de parasitosis',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:6,
  idea:'Este tema cierra el bloque de Parasitología conectándolo directamente con Medicina Preventiva (que se verá en 9no): cada parasitosis se previene interrumpiendo su ciclo de vida en el punto más débil y más práctico de atacar, no necesariamente en el mismo punto para todas.',
  claves:['desparasitación masiva','saneamiento ambiental','prevención de zoonosis'],
  sigue:null,
  secciones:[
    {
      t:'Atacar el ciclo de vida en su punto más débil',
      p:[
        'Como se vio a lo largo de todo el bloque, cada parasitosis tiene un ciclo de vida distinto, y la estrategia de prevención más efectiva depende de dónde ese ciclo es más vulnerable a interrumpir. El *saneamiento ambiental* (agua potable, disposición adecuada de excretas) interrumpe el ciclo de los parásitos de transmisión fecal-oral (Ascaris, Trichuris, Giardia, Entamoeba). El control de vectores (fumigación, mosquiteros) interrumpe el ciclo de los parásitos transmitidos por insectos (malaria, Chagas, Leishmania). El uso de calzado interrumpe específicamente el ciclo de las uncinarias, que penetran por la piel de los pies.'
      ]
    },
    {
      t:'Desparasitación masiva y prevención de zoonosis',
      p:[
        'La *desparasitación masiva* (administrar tratamiento antiparasitario a poblaciones enteras en riesgo, sin necesidad de diagnosticar caso por caso primero) es una estrategia de salud pública usada en zonas de alta prevalencia de parasitosis intestinales, reduciendo la carga parasitaria de la comunidad de forma más eficiente que el diagnóstico y tratamiento individual, dado el costo y el tiempo que eso tomaría a gran escala.',
        'La *prevención de zoonosis* (como cocinar bien la carne para prevenir teniasis y triquinosis, o evitar el contacto con heces de gato durante el embarazo para prevenir toxoplasmosis) cierra el círculo con los temas ya vistos de protozoos y cestodos: interrumpir el contacto entre el reservorio animal y el humano en el punto de exposición.'
      ],
      foco:[
        'Este tema, el último de Parasitología, resume la lógica de todo el bloque: no hay una sola "vacuna contra los parásitos" en la mayoría de los casos vistos aquí, así que la prevención descansa, casi siempre, en conocer bien el ciclo de vida de cada parásito e interrumpirlo en el eslabón más práctico.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas, cap. 22.'
}

});
