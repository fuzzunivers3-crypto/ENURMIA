/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 29)
   PARASITOLOGIA MEDICA reescrita al estandar extenso. Mismas 12
   claves de objeto que ya existian (en apuntes-2.js y -10.js,
   incluidas las dos con sufijo "-parasito" ya establecidas:
   'protozoos-intestinales-parasito' y 'malaria-parasito', que se
   conservan tal cual para que Object.assign siga sobrescribiendo
   la misma entrada), asi que "Leer el tema" no se rompe.

   Se repara un bug real de la cadena `sigue`: el tema 1
   ('generalidades-clasificacion-parasitos') apuntaba a
   'protozoos-intestinales' (SIN el sufijo "-parasito"), una
   clave que no existe -deberia apuntar a 'protozoos-intestinales-
   parasito', la clave real del tema 2. El resto de la cadena
   (temas 2 a 12) ya estaba en el orden correcto. Se cierra ademas
   el cabo suelto final: 'control-prevencion-parasitosis' (ultimo
   tema, sigue:null) ahora encadena hacia 'conceptos-usos-
   epidemiologia', primer tema de Epidemiologia (la materia
   siguiente del cuatrimestre).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'generalidades-clasificacion-parasitos': {
  tema:'Generalidades y clasificación de los parásitos',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:13,
  idea:'Toda la parasitología se ordena mucho mejor si primero se fija el vocabulario básico -quién es el hospedero, quién es el vector, qué significa un ciclo directo frente a uno indirecto-, porque ese esqueleto conceptual se reutiliza en cada parásito nuevo que se estudie después.',
  claves:['parásito','hospedero','vector','ciclo de vida','zoonosis'],
  sigue:'protozoos-intestinales-parasito',
  secciones:[
    {
      t:'Hospedero definitivo, intermediario y vector: tres papeles distintos',
      p:[
        'El hospedero definitivo es el organismo en el que el parásito alcanza su forma adulta o realiza su reproducción sexual (cuando la tiene). El hospedero intermediario es el organismo en el que el parásito pasa una fase larvaria o realiza reproducción asexual, necesario para completar el ciclo antes de llegar al hospedero definitivo. El vector es un organismo (casi siempre un artrópodo) que transporta activamente al parásito de un hospedero a otro, con frecuencia mediante una picadura -y puede ser un vector biológico, dentro del cual el parásito se desarrolla o se multiplica (como el mosquito Anopheles con Plasmodium), o un vector mecánico, que solo transporta al parásito sin que este se desarrolle dentro de él. Confundir hospedero intermediario con vector es un error frecuente: no todo hospedero intermediario transmite activamente al parásito picando a otro organismo, y no todo vector aloja una fase de desarrollo real del parásito.'
      ],
      foco:[
        'Hospedero definitivo = forma adulta/reproducción sexual. Hospedero intermediario = fase larvaria/reproducción asexual. Vector = transporta activamente (biológico si el parásito se desarrolla dentro, mecánico si solo lo transporta).'
      ]
    },
    {
      t:'Ciclo directo contra ciclo indirecto',
      p:[
        'Un parásito de ciclo directo (monoxeno) completa todo su desarrollo en un único hospedero, sin necesidad de un hospedero intermediario ni de un vector -se transmite directamente de una persona a otra o del ambiente a la persona (por ejemplo, Ascaris lumbricoides, transmitido por huevos del ambiente). Un parásito de ciclo indirecto (heteroxeno) necesita a más de un hospedero para completar su ciclo de vida -típicamente un hospedero definitivo y uno o más hospederos intermediarios, con o sin vector (por ejemplo, Plasmodium necesita al humano y al mosquito Anopheles; Taenia solium necesita al humano y al cerdo). Reconocer si un ciclo es directo o indirecto orienta de inmediato las medidas de prevención posibles: en un ciclo directo, la prevención se enfoca en el saneamiento y la higiene; en un ciclo indirecto con vector, el control del vector se vuelve una estrategia adicional relevante.'
      ],
      foco:[
        'Ciclo directo (monoxeno) = un solo hospedero, transmisión persona-persona o ambiente-persona. Ciclo indirecto (heteroxeno) = requiere hospedero(s) intermediario(s) y/o vector -el control del vector se vuelve una estrategia de prevención adicional relevante.'
      ]
    },
    {
      t:'Zoonosis: cuando el reservorio natural es un animal',
      p:[
        'Una zoonosis es una enfermedad parasitaria (o, en un sentido más amplio, cualquier enfermedad infecciosa) cuyo reservorio natural principal es un animal, y que se transmite al humano de forma accidental u ocasional -el humano no es el hospedero natural principal del parásito, sino un hospedero "accidental" que se infecta al entrar en contacto con el ciclo natural del parásito entre animales. Reconocer que una parasitosis es zoonótica tiene implicaciones directas para el control: eliminar la infección en humanos no elimina el reservorio animal, así que las estrategias de control efectivas deben dirigirse también hacia ese reservorio (por ejemplo, desparasitación de perros para controlar el riesgo de hidatidosis o de larva migrans, no solo tratar a las personas ya infectadas).'
      ],
      foco:[
        '*Consideración clínica*: en una zoonosis, tratar solo a los humanos infectados no controla la transmisión -el reservorio animal sigue manteniendo el ciclo, así que el control efectivo requiere intervenir también sobre ese reservorio.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'protozoos-intestinales-parasito': {
  tema:'Protozoos intestinales',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:13,
  idea:'Los protozoos intestinales alternan entre dos formas -el quiste resistente que sobrevive fuera del cuerpo, y el trofozoíto activo que causa la enfermedad dentro de él-, y entender esa alternancia es la clave para interpretar cualquier hallazgo en un coprológico.',
  claves:['Entamoeba histolytica','Giardia','quiste','trofozoíto','disentería'],
  sigue:'protozoos-tisulares-hematicos',
  secciones:[
    {
      t:'Quiste contra trofozoíto: forma de resistencia y forma activa',
      p:[
        'El quiste es la forma de resistencia de estos protozoos: una estructura con pared gruesa, metabólicamente poco activa, capaz de sobrevivir en el ambiente externo (agua, alimentos contaminados) y de resistir el paso por el ácido gástrico al ser ingerida -es la forma INFECTANTE, la que causa el contagio al ser ingerida por un nuevo hospedero. El trofozoíto es la forma activa, móvil, metabólicamente activa, que se desarrolla a partir del quiste ya dentro del intestino del nuevo hospedero, se alimenta y se multiplica, y es la forma responsable de los síntomas de la enfermedad, pero que muere rápidamente fuera del cuerpo y no es la forma que transmite la infección de persona a persona (salvo excepciones puntuales de transmisión muy directa).'
      ],
      foco:[
        'Quiste = forma de RESISTENCIA e INFECTANTE (sobrevive fuera del cuerpo, causa el contagio). Trofozoíto = forma ACTIVA que causa la ENFERMEDAD dentro del hospedero, pero no sobrevive fuera de él.'
      ]
    },
    {
      t:'Entamoeba histolytica: de la disentería amebiana al absceso hepático',
      p:[
        'Entamoeba histolytica causa la amebiasis, con un espectro clínico que va desde la colonización asintomática hasta la disentería amebiana (diarrea con sangre y moco, por invasión de la mucosa del colon por los trofozoítos, que producen ulceraciones características "en botón de camisa"). Una complicación grave y relativamente frecuente es la diseminación extraintestinal, más comúnmente hacia el hígado, donde produce el absceso hepático amebiano -una colección de material necrótico (descrito clásicamente como en "pasta de anchoas"), que llega ahí por vía portal desde el colon infectado. El diagnóstico coprológico puede identificar quistes o trofozoítos (los trofozoítos con eritrocitos fagocitados en su interior son un hallazgo característico y específico de infección invasiva, no solo colonización).'
      ],
      foco:[
        '*Consideración clínica*: un absceso hepático con contenido "en pasta de anchoas", en un paciente con antecedente de diarrea o proveniente de zona endémica, sugiere absceso hepático amebiano -llega al hígado por vía PORTAL desde el colon, no por vía biliar.'
      ]
    },
    {
      t:'Giardia lamblia: malabsorción sin invasión tisular',
      p:[
        'Giardia lamblia (o Giardia intestinalis) es un protozoo flagelado que coloniza el intestino delgado proximal (duodeno y yeyuno), sin invadir la mucosa intestinal (a diferencia de Entamoeba histolytica) -su mecanismo patogénico principal es cubrir mecánicamente la superficie de absorción intestinal y alterar la función de las vellosidades, produciendo un cuadro de diarrea crónica con malabsorción (esteatorrea, distensión abdominal, pérdida de peso), sin sangre en las heces (a diferencia de la disentería amebiana, un dato que ayuda a diferenciarlas clínicamente). El trofozoíto tiene una morfología característica descrita como "cara de payaso" o "cara sonriente", con dos núcleos simétricos, útil para su identificación microscópica directa.'
      ],
      foco:[
        'Giardia = diarrea crónica CON malabsorción, SIN sangre (no invade la mucosa). Entamoeba histolytica = disentería CON sangre y moco (sí invade la mucosa). El dato de sangre en las heces ayuda a distinguir clínicamente entre ambos protozoos intestinales.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'protozoos-tisulares-hematicos': {
  tema:'Protozoos tisulares y hemáticos',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:14,
  idea:'Toxoplasma, Trypanosoma y Leishmania comparten la capacidad de invadir tejidos más allá del intestino, pero cada uno tiene una vía de transmisión y un órgano diana tan distintos entre sí que conviene estudiarlos como historias separadas, no como una categoría uniforme.',
  claves:['Toxoplasma','Trypanosoma','Leishmania','Chagas','taquizoíto'],
  sigue:'malaria-parasito',
  secciones:[
    {
      t:'Toxoplasma gondii: inofensivo casi siempre, devastador en dos contextos específicos',
      p:[
        'Toxoplasma gondii se transmite al humano principalmente por ingestión de quistes en carne mal cocida o de ooquistes en heces de gato (su hospedero definitivo, donde ocurre la reproducción sexual del parásito) presentes en tierra o agua contaminada. La infección en una persona inmunocompetente suele ser asintomática o con síntomas leves e inespecíficos, y el parásito persiste de forma latente (como quistes tisulares, sobre todo en el sistema nervioso central y el músculo) de por vida. Su relevancia clínica se concentra en dos contextos específicos: la toxoplasmosis congénita, cuando una mujer se infecta por PRIMERA vez durante el embarazo (el taquizoíto, la forma de multiplicación rápida y activa, cruza la placenta), con riesgo de daño fetal grave (la tríada clásica de coriorretinitis, hidrocefalia y calcificaciones intracraneales); y la reactivación en el paciente inmunosuprimido (especialmente VIH avanzado), donde los quistes latentes se reactivan y causan encefalitis toxoplásmica, una de las causas más frecuentes de lesión cerebral con efecto de masa en este grupo de pacientes.'
      ],
      foco:[
        '*Consideración clínica*: toxoplasmosis congénita solo ocurre si la infección MATERNA es PRIMOINFECCIÓN durante el embarazo (no reactivación de una infección previa) -una mujer ya inmune antes del embarazo no transmite la infección al feto por esa vía.'
      ]
    },
    {
      t:'Trypanosoma cruzi: la enfermedad de Chagas y sus dos fases',
      p:[
        'Trypanosoma cruzi causa la enfermedad de Chagas, transmitida por la picadura (en realidad, por la contaminación de la herida de la picadura con las heces) de un insecto triatomino (el "chinche besucón" o "vinchuca"), que defeca cerca del sitio de la picadura mientras se alimenta, y el parásito entra al cuerpo a través de esa lesión o de mucosas al rascarse. La fase aguda, con frecuencia asintomática o con síntomas leves e inespecíficos, puede mostrar el signo de Romaña (edema palpebral unilateral, cuando el sitio de entrada fue cerca del ojo) como hallazgo clásico pero poco frecuente. La fase crónica, que puede desarrollarse años o décadas después, es la de mayor relevancia clínica: cardiomiopatía chagásica (con arritmias, insuficiencia cardíaca, y riesgo de muerte súbita) y megasíndromes digestivos (megaesófago, megacolon), por destrucción progresiva de los plexos nerviosos autónomos de esos órganos.'
      ],
      foco:[
        'Chagas: fase aguda con frecuencia asintomática (signo de Romaña, cuando aparece, es un dato clásico pero infrecuente). Fase crónica (años/décadas después) = cardiomiopatía chagásica y megasíndromes digestivos, por destrucción de plexos autónomos.'
      ]
    },
    {
      t:'Leishmania: tres formas clínicas según la especie y la respuesta inmune',
      p:[
        'Leishmania se transmite por la picadura de un mosquito flebótomo (género Lutzomyia o Phlebotomus, según la región), y produce un espectro de enfermedad que depende de la especie infectante y de la respuesta inmune del huésped. La leishmaniasis cutánea (la forma más frecuente) produce una úlcera cutánea característicamente indolora, de bordes elevados, en el sitio de la picadura. La leishmaniasis mucocutánea (más frecuente en ciertas regiones de América) puede destruir progresivamente el tabique nasal y estructuras de la nasofaringe, con desfiguración importante, meses o años después de la lesión cutánea inicial. La leishmaniasis visceral (kala-azar), la forma más grave, afecta órganos del sistema reticuloendotelial (hígado, bazo, médula ósea), con fiebre prolongada, hepatoesplenomegalia marcada y pancitopenia, y es potencialmente mortal sin tratamiento.'
      ],
      foco:[
        'Leishmaniasis cutánea = úlcera indolora localizada. Mucocutánea = destrucción progresiva de nariz/nasofaringe, meses después de la cutánea. Visceral (kala-azar) = fiebre + hepatoesplenomegalia + pancitopenia, la forma más grave y potencialmente mortal.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'malaria-parasito': {
  tema:'Malaria',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:14,
  idea:'La malaria es, ante todo, una historia sobre ciclos: el ciclo del parásito dentro del hígado y luego dentro del eritrocito, y el patrón de fiebre que resulta directamente de la sincronización de ese ciclo, un dato clínico clásico que sigue siendo útil pese a toda la tecnología diagnóstica moderna.',
  claves:['Plasmodium','Anopheles','falciparum','gota gruesa','esquizonte','fiebre terciana'],
  sigue:'nematodos-intestinales',
  secciones:[
    {
      t:'El ciclo del parásito: hepático primero, eritrocítico después',
      p:[
        'La malaria es transmitida por la picadura del mosquito hembra Anopheles, que inocula esporozoítos que viajan directamente al hígado, donde se multiplican de forma asintomática (fase exoeritrocítica o hepática, que no produce síntomas). Al romperse las células hepáticas infectadas, se liberan merozoítos que invaden a los eritrocitos, iniciando la fase eritrocítica: dentro del glóbulo rojo, el parásito se desarrolla progresivamente (trofozoíto joven, trofozoíto maduro, esquizonte -la forma con múltiples núcleos, resultado de la división múltiple del parásito dentro del eritrocito), hasta que el eritrocito se rompe, liberando nuevos merozoítos que invaden más eritrocitos, repitiendo el ciclo. Es precisamente esta ruptura sincronizada de eritrocitos, liberando toxinas parasitarias a la sangre, la que produce los episodios característicos de fiebre.',
        'Plasmodium vivax y Plasmodium ovale tienen, además, una forma latente en el hígado llamada hipnozoíto, que puede reactivarse meses o incluso años después de la infección inicial, causando recaídas clínicas sin una nueva picadura -una característica exclusiva de estas dos especies, que exige un tratamiento adicional específico (dirigido a eliminar los hipnozoítos) para prevenir esas recaídas, distinto del tratamiento de la fase eritrocítica aguda.'
      ],
      foco:[
        'Solo P. vivax y P. ovale tienen hipnozoítos hepáticos latentes, causa de recaídas meses/años después sin nueva picadura -requieren tratamiento adicional específico para eliminarlos, no solo tratar la fase eritrocítica aguda.'
      ]
    },
    {
      t:'El patrón de fiebre según la especie',
      p:[
        'El patrón clásico de fiebre periódica en la malaria refleja directamente la duración del ciclo eritrocítico de cada especie de Plasmodium: la fiebre terciana (episodios cada 48 horas, es decir, en los días 1 y 3) es característica de Plasmodium vivax, Plasmodium ovale y Plasmodium falciparum; la fiebre cuartana (episodios cada 72 horas, en los días 1 y 4) es característica de Plasmodium malariae. En la práctica clínica real, sobre todo en la infección temprana o con infecciones mixtas, este patrón periódico "de libro" no siempre es tan claro, y no debe usarse como criterio único para descartar malaria ante fiebre irregular -especialmente porque Plasmodium falciparum, la especie más peligrosa, con frecuencia no sigue un patrón periódico tan definido.'
      ],
      foco:[
        'Fiebre terciana (cada 48h) = P. vivax, P. ovale, P. falciparum. Fiebre cuartana (cada 72h) = P. malariae. P. falciparum, la especie más peligrosa, con frecuencia NO sigue un patrón periódico tan claro -no descartar malaria por fiebre irregular.'
      ]
    },
    {
      t:'Por qué Plasmodium falciparum es la especie más peligrosa',
      p:[
        'Plasmodium falciparum es la especie responsable de la gran mayoría de las muertes por malaria, por dos razones principales: puede infectar eritrocitos de CUALQUIER edad (a diferencia de otras especies, más selectivas por eritrocitos jóvenes o viejos), lo que le permite alcanzar niveles de parasitemia mucho más altos; y produce alteraciones en la superficie del eritrocito infectado que causan que estos se adhieran al endotelio de capilares de órganos profundos (citoadherencia), obstruyendo el flujo microvascular -este mecanismo es la base de las complicaciones más graves de la malaria por falciparum: malaria cerebral (por obstrucción de capilares cerebrales, con alteración de conciencia y convulsiones), insuficiencia renal aguda, y síndrome de dificultad respiratoria, todas potencialmente mortales sin tratamiento urgente.'
      ],
      foco:[
        '*Consideración clínica*: P. falciparum infecta eritrocitos de cualquier edad (mayor parasitemia posible) y causa citoadherencia al endotelio microvascular (obstrucción capilar) -el mecanismo detrás de la malaria cerebral y las demás complicaciones graves, potencialmente mortales.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'nematodos-intestinales': {
  tema:'Nematodos intestinales',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:13,
  idea:'Los nematodos (gusanos redondos) intestinales se distinguen entre sí por su vía de entrada al cuerpo -algunos se ingieren directamente, otros penetran activamente por la piel- y esa diferencia es lo que explica sus manifestaciones clínicas iniciales tan distintas.',
  claves:['Ascaris','uncinaria','Trichuris','Enterobius','larva'],
  sigue:'nematodos-tisulares',
  secciones:[
    {
      t:'Ascaris lumbricoides: el ciclo pulmonar de Loeffler',
      p:[
        'Ascaris lumbricoides se adquiere por ingestión de huevos embrionados presentes en tierra o alimentos contaminados. Las larvas eclosionan en el intestino, atraviesan la pared intestinal, y migran por vía sanguínea hacia los pulmones, donde ascienden por el árbol bronquial hasta la faringe y son DEGLUTIDAS de nuevo, retornando al intestino delgado, donde maduran hasta la forma adulta -un ciclo migratorio pulmonar peculiar, no una simple infección intestinal directa. Durante el paso pulmonar de las larvas, puede producirse el síndrome de Loeffler: tos, disnea y sibilancias, con infiltrados pulmonares transitorios y eosinofilia marcada en sangre, un cuadro autolimitado pero que puede confundirse con otras causas de neumonitis si no se conoce este ciclo migratorio particular.'
      ],
      foco:[
        'Ascaris tiene un ciclo migratorio: intestino → sangre → pulmón (síndrome de Loeffler: tos, disnea, eosinofilia) → deglución → intestino de nuevo, donde madura. No es una simple infección intestinal directa desde la ingestión.'
      ]
    },
    {
      t:'Uncinarias: penetración activa por la piel',
      p:[
        'Las uncinarias (Ancylostoma duodenale y Necator americanus) tienen una vía de entrada distinta a la de Ascaris: sus larvas filariformes, presentes en suelo contaminado con heces (típicamente en zonas rurales con saneamiento deficiente, caminando descalzo), PENETRAN ACTIVAMENTE la piel intacta, sin necesidad de ser ingeridas. Tras la penetración cutánea (que puede producir una dermatitis pruriginosa local, "prurito del suelo"), las larvas siguen un ciclo migratorio pulmonar similar al de Ascaris antes de llegar al intestino delgado, donde los gusanos adultos se fijan a la mucosa y se alimentan de sangre, produciendo una pérdida crónica de sangre que puede causar anemia ferropénica significativa, especialmente relevante en poblaciones con alta carga parasitaria y dieta pobre en hierro.'
      ],
      foco:[
        '*Consideración clínica*: las uncinarias entran por PENETRACIÓN CUTÁNEA ACTIVA, no por ingestión -y su principal consecuencia clínica es la anemia ferropénica crónica por pérdida sanguínea intestinal, no un cuadro digestivo agudo.'
      ]
    },
    {
      t:'Enterobius vermicularis: la técnica de Graham y el prurito nocturno',
      p:[
        'Enterobius vermicularis (oxiuro) tiene un ciclo directo simple: la hembra adulta migra durante la noche desde el intestino hacia la región perianal para depositar sus huevos, un proceso que produce prurito anal intenso característicamente NOCTURNO -el síntoma clínico más distintivo de esta infección, frecuente en niños en edad escolar, y que favorece la autoinfección por rascado y posterior contaminación de las manos y de objetos compartidos. El diagnóstico se realiza con la técnica de Graham (o de la cinta adhesiva): aplicar cinta adhesiva transparente sobre la región perianal a primera hora de la mañana, ANTES del baño (porque los huevos se depositan durante la noche y se perderían con el aseo matutino), y examinarla al microscopio -el coprológico convencional tiene poco rendimiento diagnóstico para esta parasitosis, porque los huevos rara vez se encuentran en las heces mismas.'
      ],
      foco:[
        'Enterobius: prurito anal NOCTURNO característico. Diagnóstico = técnica de Graham (cinta adhesiva perianal por la MAÑANA, antes del baño), NO el coprológico convencional, que tiene poco rendimiento para esta parasitosis específica.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'nematodos-tisulares': {
  tema:'Nematodos tisulares',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:13,
  idea:'Strongyloides stercoralis tiene una capacidad única entre los parásitos intestinales humanos: puede completar su ciclo de vida completo dentro del propio hospedero sin necesidad de salir al ambiente, una característica que explica por qué esta infección puede persistir -y volverse potencialmente mortal- durante décadas.',
  claves:['Strongyloides','filaria','larva migrans','autoinfección'],
  sigue:'cestodos',
  secciones:[
    {
      t:'Strongyloides stercoralis y el ciclo de autoinfección',
      p:[
        'Strongyloides stercoralis, como las uncinarias, penetra activamente la piel. Lo que lo distingue de forma crucial es su capacidad de completar un ciclo de AUTOINFECCIÓN: algunas de sus larvas, en vez de ser eliminadas con las heces, pueden transformarse dentro del propio intestino en la forma infectante y reinvadir al mismo hospedero (a través de la mucosa intestinal o de la piel perianal), sin necesidad de salir al ambiente externo ni de un nuevo contacto con suelo contaminado. Esta capacidad de autoinfección explica por qué la infección por Strongyloides puede persistir durante DÉCADAS en una persona, sin nueva exposición, algo excepcional entre los nematodos intestinales, que en general requieren reinfección externa repetida para mantenerse.'
      ],
      foco:[
        'La autoinfección es la característica que distingue a Strongyloides de otros nematodos: el parásito puede reinvadir al mismo hospedero internamente, manteniendo la infección DÉCADAS sin ninguna nueva exposición externa.'
      ]
    },
    {
      t:'Hiperinfección diseminada: el riesgo mortal en el inmunosuprimido',
      p:[
        'En una persona inmunocompetente, el ciclo de autoinfección de Strongyloides se mantiene generalmente en equilibrio con el sistema inmune, con baja carga parasitaria y síntomas leves o ausentes. Pero en un paciente inmunosuprimido -particularmente con uso de corticoides sistémicos, que alteran específicamente la respuesta inmune que controla a este parásito- ese equilibrio se rompe, y el ciclo de autoinfección se acelera de forma descontrolada, produciendo el síndrome de hiperinfección diseminada: una carga masiva de larvas que invaden múltiples órganos, con frecuencia arrastrando bacterias intestinales hacia la circulación sanguínea (sepsis polimicrobiana secundaria) y meningitis, un cuadro con mortalidad muy elevada si no se reconoce y trata a tiempo. Por esta razón, se recomienda descartar (y tratar si es positiva) la infección por Strongyloides ANTES de iniciar corticoides sistémicos prolongados o cualquier otra inmunosupresión significativa en pacientes con antecedente de exposición en zona endémica, incluso si nunca han tenido síntomas.'
      ],
      foco:[
        '*Consideración clínica*: antes de iniciar corticoides sistémicos prolongados u otra inmunosupresión en un paciente con posible exposición previa a Strongyloides (zona endémica, aunque sea asintomático), se recomienda descartar y tratar la infección, por el riesgo de hiperinfección diseminada potencialmente mortal.'
      ]
    },
    {
      t:'Larva migrans: cutánea contra visceral',
      p:[
        'El síndrome de larva migrans cutánea ocurre cuando larvas de nematodos que normalmente parasitan a otros animales (típicamente Ancylostoma de perros o gatos) penetran accidentalmente la piel humana, pero como el humano no es su hospedero natural, la larva no puede completar su ciclo y migra sin rumbo por la piel, produciendo un trayecto serpiginoso, eritematoso y muy pruriginoso que avanza lentamente día a día -un cuadro benigno y autolimitado, aunque muy molesto. El síndrome de larva migrans visceral (por ejemplo, por Toxocara canis, otro nematodo de perros) ocurre cuando larvas similares migran, en cambio, por órganos internos (hígado, pulmón, y con relevancia particular, el ojo -donde puede simular un retinoblastoma en un niño-), con eosinofilia marcada, un cuadro potencialmente más grave que la forma cutánea, según el órgano afectado.'
      ],
      foco:[
        'Larva migrans CUTÁNEA = trayecto serpiginoso pruriginoso en la piel, benigno. Larva migrans VISCERAL (Toxocara) = migración por órganos internos, incluido el ojo (puede simular retinoblastoma en un niño), con eosinofilia -un cuadro potencialmente más grave.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'cestodos': {
  tema:'Cestodos',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:13,
  idea:'Con Taenia solium, el mismo parásito puede causar dos enfermedades completamente distintas en el mismo humano, según si se ingiere la forma larvaria o los huevos -una distinción que resulta, sin exagerar, una de las más importantes de toda la parasitología médica.',
  claves:['Taenia','cisticercosis','Hymenolepis','proglótide','escólex'],
  sigue:'trematodos',
  secciones:[
    {
      t:'Anatomía básica de un cestodo: escólex y proglótides',
      p:[
        'Los cestodos (gusanos planos segmentados, o "solitarias") tienen una estructura corporal característica: el escólex, la región anterior con ventosas (y, en algunas especies, ganchos) que se fija a la pared intestinal del hospedero definitivo; y el estróbilo, el cuerpo formado por una cadena de segmentos llamados proglótides, cada uno con su propio aparato reproductor (los cestodos son hermafroditas), que se van formando continuamente cerca del escólex y maduran progresivamente a medida que se alejan de él, hasta desprenderse los más distales (grávidos, cargados de huevos) y salir con las heces, completando así la eliminación de huevos al ambiente sin necesidad de que el gusano entero se desprenda.'
      ],
      foco:[
        'Escólex = fijación a la mucosa intestinal (ventosas/ganchos). Proglótides = segmentos reproductivos que maduran alejándose del escólex; los grávidos (distales) se desprenden y salen con las heces, cargados de huevos.'
      ]
    },
    {
      t:'Taenia solium: teniasis contra cisticercosis, la distinción más importante del tema',
      p:[
        'Si un humano ingiere carne de CERDO mal cocida que contiene la forma larvaria (cisticerco) de Taenia solium, el cisticerco se desarrolla en el intestino humano hasta convertirse en el gusano adulto -esto es la teniasis, una infección intestinal generalmente leve o asintomática, con el humano actuando como hospedero definitivo. Pero si, en cambio, un humano ingiere directamente HUEVOS de Taenia solium (por contaminación fecal-oral, incluso por autoinfección de una persona que ya tiene teniasis y no tiene buena higiene, o de otra persona infectada), esos huevos eclosionan en el intestino y las larvas atraviesan la pared intestinal, migrando por vía sanguínea hacia distintos tejidos -el humano actúa entonces como hospedero INTERMEDIARIO accidental, desarrollando cisticercosis: cisticercos alojados en músculo, tejido subcutáneo, y de forma más grave, en el sistema nervioso central (neurocisticercosis), una de las causas más frecuentes de epilepsia de inicio en la edad adulta en regiones endémicas.'
      ],
      foco:[
        '*Consideración clínica*: ingerir CARNE con cisticercos → teniasis (intestinal, leve). Ingerir HUEVOS → cisticercosis (tisular, puede ser grave: neurocisticercosis, causa frecuente de epilepsia de inicio adulto en zonas endémicas). Es la misma especie, dos enfermedades completamente distintas según qué forma se ingiere.'
      ]
    },
    {
      t:'Hymenolepis nana: el único cestodo con ciclo directo relevante',
      p:[
        'Hymenolepis nana es peculiar entre los cestodos de relevancia médica porque puede completar su ciclo de vida COMPLETO dentro de un único hospedero humano, sin necesidad de un hospedero intermediario -a diferencia de Taenia, que requiere al cerdo (o a la res, en el caso de Taenia saginata) como hospedero intermediario. Esto le permite tener también un mecanismo de autoinfección (similar en espíritu al de Strongyloides, aunque por un mecanismo distinto), lo que explica por qué es el cestodo intestinal más frecuente en niños en muchas regiones, con transmisión fácil por vía fecal-oral directa entre personas, sin necesidad de pasar por un animal intermediario.'
      ],
      foco:[
        'Hymenolepis nana es el cestodo excepcional con ciclo DIRECTO (no necesita hospedero intermediario animal), lo que facilita su transmisión persona-persona y explica su alta frecuencia en niños.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'trematodos': {
  tema:'Trematodos',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:12,
  idea:'Todos los trematodos de relevancia médica comparten un requisito biológico obligado: necesitan un caracol de agua dulce como hospedero intermediario en algún punto de su ciclo, un dato que conecta directamente su epidemiología con la disponibilidad de agua dulce contaminada en una región.',
  claves:['Schistosoma','Fasciola','caracol','cercaria'],
  sigue:'diagnostico-parasitologico',
  secciones:[
    {
      t:'El caracol de agua dulce: el hospedero intermediario obligado',
      p:[
        'Todos los trematodos (gusanos planos no segmentados, "duelas") de relevancia médica humana requieren un caracol de agua dulce específico como hospedero intermediario, dentro del cual el parásito se multiplica asexualmente y produce la forma infectante llamada cercaria, que sale del caracol hacia el agua. Esta dependencia estricta del ciclo de vida de un caracol de agua dulce explica por qué estas parasitosis se concentran geográficamente en regiones con cuerpos de agua dulce estancada o de flujo lento, con la especie de caracol adecuada presente, y por qué el control del caracol (mediante saneamiento ambiental o control biológico) es una estrategia de prevención poblacional relevante para estas infecciones.'
      ],
      foco:[
        'Todo trematodo de relevancia médica necesita OBLIGATORIAMENTE un caracol de agua dulce como hospedero intermediario -sin ese caracol específico presente en la región, el ciclo de vida del parásito no puede completarse.'
      ]
    },
    {
      t:'Schistosoma: penetración cutánea directa desde el agua',
      p:[
        'Schistosoma (varias especies, según la región geográfica) tiene una vía de infección particular entre los trematodos: la cercaria liberada por el caracol PENETRA ACTIVAMENTE la piel humana intacta al contacto con agua dulce contaminada (al bañarse, nadar o trabajar en el agua), sin necesidad de ser ingerida. Tras la penetración cutánea, los parásitos migran hasta alojarse en las venas del plexo venoso mesentérico o vesical (según la especie), donde las hembras adultas depositan huevos que deben atravesar la pared del intestino o de la vejiga para salir con las heces o la orina, completando el ciclo -ese paso de los huevos a través de la pared del órgano es precisamente lo que produce buena parte del daño tisular crónico (fibrosis, hematuria en la forma urinaria, hipertensión portal en la forma intestinal/hepática por reacción inflamatoria granulomatosa alrededor de los huevos atrapados).'
      ],
      foco:[
        '*Consideración clínica*: la esquistosomiasis se adquiere por PENETRACIÓN CUTÁNEA al contacto con agua dulce contaminada, no por ingestión -preguntar por exposición a agua dulce (baño, natación, trabajo agrícola) en zona endémica ante hematuria o hepatoesplenomegalia inexplicada.'
      ]
    },
    {
      t:'Fasciola hepatica: por vía digestiva, desde vegetales acuáticos',
      p:[
        'Fasciola hepatica, a diferencia de Schistosoma, se adquiere por vía DIGESTIVA: el humano se infecta al ingerir metacercarias (la forma enquistada e infectante) adheridas a vegetales acuáticos crudos, típicamente berros silvestres crecidos en agua dulce contaminada por heces de ganado (su hospedero definitivo natural más frecuente, con el humano como hospedero accidental). Tras la ingestión, las larvas atraviesan la pared intestinal, migran a través del peritoneo, y penetran la cápsula hepática para finalmente alojarse en los conductos biliares, donde los gusanos adultos maduros pueden producir obstrucción biliar, colangitis y daño hepático crónico. La fase aguda de migración a través del parénquima hepático puede producir dolor en hipocondrio derecho, fiebre y eosinofilia marcada, antes de que el parásito llegue a su localización final en la vía biliar.'
      ],
      foco:[
        'Fasciola hepatica = vía DIGESTIVA (berros u otros vegetales acuáticos crudos contaminados), a diferencia de Schistosoma (vía cutánea). Termina alojándose en los conductos BILIARES, con obstrucción biliar y colangitis como complicaciones tardías.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'diagnostico-parasitologico': {
  tema:'Diagnóstico parasitológico',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:12,
  idea:'Elegir la técnica diagnóstica correcta en parasitología depende de saber, de antemano, qué tipo de parásito se sospecha y en qué momento de su ciclo de vida se está buscando -pedir un coprológico convencional para un parásito que no se elimina en las heces es una causa frecuente de "falso negativo" evitable.',
  claves:['coprológico','concentración','gota gruesa','serología','técnica de Graham'],
  sigue:'ectoparasitos',
  secciones:[
    {
      t:'El examen coprológico y sus técnicas de concentración',
      p:[
        'El examen coprológico directo (examen microscópico simple de una muestra de heces) es la técnica básica para identificar huevos, quistes o larvas de parásitos intestinales, pero tiene una sensibilidad limitada, especialmente con baja carga parasitaria. Las técnicas de concentración (como la técnica de Ritchie o de flotación) aumentan considerablemente la sensibilidad al concentrar los elementos parasitarios de una mayor cantidad de muestra, y se recomiendan de rutina cuando el examen directo simple es negativo pero la sospecha clínica persiste. Como la eliminación de huevos o quistes en las heces puede ser intermitente (no constante día a día), se recomienda examinar varias muestras seriadas (típicamente tres, en días distintos) antes de descartar una parasitosis intestinal basándose en un coprológico negativo único.'
      ],
      foco:[
        'Un coprológico directo único negativo NO descarta una parasitosis intestinal, por la eliminación intermitente de huevos/quistes -se recomiendan muestras seriadas (típicamente tres) y, si persiste la sospecha, técnicas de concentración.'
      ]
    },
    {
      t:'Gota gruesa y frotis fino: el diagnóstico de la malaria',
      p:[
        'El diagnóstico de la malaria se basa clásicamente en el examen microscópico de sangre periférica mediante dos preparaciones complementarias: la gota gruesa, que concentra una mayor cantidad de sangre en un área pequeña (al lisar los eritrocitos durante la tinción), maximizando la sensibilidad para DETECTAR la presencia del parásito, incluso con baja parasitemia; y el frotis fino, una capa delgada de sangre que preserva la morfología de los eritrocitos infectados, permitiendo IDENTIFICAR con precisión la especie de Plasmodium involucrada (dato relevante para el tratamiento, dado que P. falciparum se trata de forma distinta y más urgente que las demás especies). Ambas técnicas se complementan: una maximiza la sensibilidad de detección, la otra aporta la especificidad de identificación de especie.'
      ],
      foco:[
        'Gota gruesa = maximiza SENSIBILIDAD (detectar si hay parásito). Frotis fino = permite IDENTIFICAR la ESPECIE (morfología preservada). Se usan de forma complementaria, no una en lugar de la otra.'
      ]
    },
    {
      t:'Serología: útil cuando el parásito no es fácilmente visible directamente',
      p:[
        'La serología (detección de anticuerpos contra el parásito) es especialmente útil en parasitosis donde el parásito es difícil de visualizar directamente en una muestra accesible, o cuando la infección es tisular profunda sin salida fácil de formas parasitarias hacia una muestra examinable de rutina -por ejemplo, la toxoplasmosis (donde interesa especialmente distinguir infección aguda reciente de infección antigua ya resuelta, mediante el patrón de anticuerpos IgM/IgG y su avidez), la cisticercosis (donde el diagnóstico definitivo por biopsia no siempre es factible ni deseable) o la enfermedad de Chagas crónica (donde la parasitemia circulante ya es muy baja o indetectable directamente en esa fase). Su limitación general es que no siempre distingue con precisión entre infección activa y una infección pasada ya resuelta, salvo con estudios adicionales de la cinética de anticuerpos.'
      ],
      foco:[
        '*Consideración clínica*: la serología es la herramienta de elección cuando el parásito es tisular profundo o de difícil visualización directa (toxoplasmosis, cisticercosis, Chagas crónico) -su limitación es distinguir con precisión infección activa de pasada, sin estudios adicionales.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'ectoparasitos': {
  tema:'Ectoparásitos',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:12,
  idea:'Piojos y ácaros de la sarna comparten el hecho de vivir sobre o dentro de la piel humana, pero producen su síntoma característico -el prurito- por mecanismos y con patrones temporales distintos, un detalle útil para distinguirlos clínicamente sin necesidad siempre de visualizar al parásito.',
  claves:['Pediculus','Sarcoptes scabiei','sarna','piojo','prurito nocturno'],
  sigue:'artropodos-importancia-medica',
  secciones:[
    {
      t:'Pediculosis: los piojos y sus tres localizaciones',
      p:[
        'Pediculus humanus tiene dos variedades relevantes según su localización: la variedad capitis (piojo de la cabeza), muy frecuente en niños en edad escolar, transmitida por contacto cabeza-cabeza directo o por compartir objetos personales (peines, gorras); y la variedad corporis (piojo del cuerpo), que vive en la ropa (no directamente sobre la piel, a diferencia del piojo de la cabeza) y se asocia a condiciones de hacinamiento y falta de higiene, siendo además el único de los piojos capaz de transmitir enfermedades infecciosas graves (como el tifus epidémico). Pthirus pubis (piojo púbico o "ladilla") afecta principalmente el vello púbico, con transmisión típicamente por contacto sexual directo, aunque también puede afectar otras áreas de vello corporal grueso (cejas, pestañas). El diagnóstico de cualquier pediculosis se basa en la identificación visual directa del piojo adulto o de las liendres (huevos) adheridas firmemente al pelo, muy cerca de la base.'
      ],
      foco:[
        'Pediculus capitis = cabeza, niños. Pediculus corporis = vive en la ROPA (no en la piel), asociado a hacinamiento, único capaz de transmitir tifus epidémico. Pthirus pubis = vello púbico, transmisión sexual.'
      ]
    },
    {
      t:'Sarna: el ácaro que excava y el prurito característicamente nocturno',
      p:[
        'Sarcoptes scabiei, el ácaro causante de la sarna (escabiosis), excava túneles (surcos) dentro de la capa córnea de la epidermis, donde la hembra deposita sus huevos -estos surcos, cuando son visibles, son un hallazgo diagnóstico característico, aunque con frecuencia están ocultos por el rascado y las lesiones secundarias. El síntoma más distintivo de la sarna es el prurito intenso, característicamente PEOR POR LA NOCHE (por el aumento de la temperatura corporal bajo las sábanas, que estimula la actividad del ácaro), que además, a diferencia de muchas otras dermatosis, puede afectar a VARIOS miembros de la misma familia o convivientes al mismo tiempo, por su alta transmisibilidad mediante contacto piel con piel prolongado. Las localizaciones típicas incluyen los espacios interdigitales de las manos, las muñecas, los pliegues axilares, y en lactantes, también palmas, plantas y cara (localizaciones atípicas en el adulto).'
      ],
      foco:[
        '*Consideración clínica*: prurito intenso, PEOR POR LA NOCHE, que afecta a VARIOS convivientes de la misma casa al mismo tiempo, es muy sugestivo de sarna -buscar los surcos característicos en espacios interdigitales y muñecas, y tratar a todos los convivientes, no solo al caso índice.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'artropodos-importancia-medica': {
  tema:'Artrópodos de importancia médica',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:12,
  idea:'Un mismo artrópodo puede dañar de dos formas completamente distintas -directamente, por su propia picadura o veneno, o indirectamente, como vector de otro patógeno-, y esa distinción organiza gran parte de lo que hay que saber sobre los artrópodos de relevancia médica.',
  claves:['vector','mosquito','garrapata','transmisión vectorial'],
  sigue:'control-prevencion-parasitosis',
  secciones:[
    {
      t:'Daño directo contra transmisión vectorial: dos mecanismos distintos',
      p:[
        'Un artrópodo puede causar enfermedad de dos formas conceptualmente distintas, que conviene no mezclar. El daño DIRECTO es el producido por la propia picadura, mordedura o veneno del artrópodo (reacciones locales de hipersensibilidad, envenenamiento por araña o escorpión, miasis por larvas de moscas) sin que medie ningún otro patógeno. La transmisión VECTORIAL es cuando el artrópodo actúa como vehículo de transmisión de OTRO organismo patógeno distinto de sí mismo (un virus, una bacteria, un protozoo u otro parásito), como ya se vio con el mosquito Anopheles y Plasmodium (malaria), o el triatomino y Trypanosoma cruzi (Chagas). Un mismo artrópodo puede, en distintos contextos, producir ambos tipos de daño: la picadura del mosquito en sí ya produce una reacción local (daño directo), independientemente de si además transmitió o no un patógeno en ese episodio particular.'
      ],
      foco:[
        'Daño directo = producido por el propio artrópodo (picadura, veneno, mordedura). Transmisión vectorial = el artrópodo transporta a OTRO patógeno distinto de sí mismo. Ambos mecanismos pueden coexistir en el mismo episodio de picadura.'
      ]
    },
    {
      t:'Mosquitos: distintos géneros, distintas enfermedades transmitidas',
      p:[
        'Distintos géneros de mosquito se asocian, de forma bastante específica, a la transmisión de distintos patógenos, un dato útil para orientar la sospecha epidemiológica según el vector predominante de una región: Anopheles transmite malaria (Plasmodium); Aedes aegypti (y Aedes albopictus) transmite dengue, zika, chikungunya y fiebre amarilla urbana (todos arbovirus, transmitidos por el mismo género de mosquito, con hábitos de picadura predominantemente diurnos, a diferencia de Anopheles, más nocturno); Culex se asocia a la transmisión de encefalitis virales como la del Nilo Occidental en ciertas regiones. Reconocer qué género predomina en una región y su horario de actividad orienta tanto la sospecha diagnóstica ante un síndrome febril como las medidas de protección personal más efectivas (por ejemplo, protección reforzada diurna en zonas de transmisión de dengue, frente a protección nocturna en zonas de malaria).'
      ],
      foco:[
        '*Consideración clínica*: Aedes aegypti (dengue, zika, chikungunya, fiebre amarilla urbana) pica predominantemente de DÍA; Anopheles (malaria) predominantemente de NOCHE -el horario de exposición orienta la sospecha diagnóstica ante fiebre tras viaje a zona endémica.'
      ]
    },
    {
      t:'Garrapatas: vectores de enfermedades bacterianas y otras',
      p:[
        'Las garrapatas son vectores de diversas enfermedades, muchas de origen bacteriano, no parasitario en sentido estricto, pero relevantes dentro del espectro de enfermedades transmitidas por artrópodos: la enfermedad de Lyme (Borrelia burgdorferi, ya vista en Microbiología), la fiebre manchada de las Montañas Rocosas (Rickettsia rickettsii), y la ehrlichiosis, entre otras. A diferencia de los mosquitos, que transmiten el patógeno en segundos durante la picadura, las garrapatas típicamente requieren un tiempo de adherencia prolongado (con frecuencia muchas horas) antes de transmitir eficazmente al patógeno que portan -un dato relevante para la prevención: la remoción pronta de una garrapata adherida, antes de que transcurra ese tiempo, puede reducir significativamente el riesgo de transmisión efectiva.'
      ],
      foco:[
        'Las garrapatas requieren un tiempo de adherencia prolongado (horas) para transmitir eficazmente al patógeno -por eso la remoción pronta de una garrapata adherida es una medida de prevención real, a diferencia de la picadura de mosquito, que transmite en segundos.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
},

'control-prevencion-parasitosis': {
  tema:'Control y prevención de parasitosis',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:12,
  idea:'Las estrategias de control de las parasitosis se dividen naturalmente según el punto del ciclo de vida del parásito que interrumpen, y entender esa lógica -en vez de memorizar una lista de medidas sueltas- permite predecir qué intervención tiene sentido para cada tipo de parásito.',
  claves:['desparasitación masiva','saneamiento ambiental','prevención de zoonosis'],
  sigue:'conceptos-usos-epidemiologia',
  secciones:[
    {
      t:'Desparasitación masiva: tratar a la población, no solo al caso índice',
      p:[
        'La desparasitación masiva (o quimioterapia preventiva a gran escala) consiste en administrar antiparasitarios a poblaciones enteras en riesgo (típicamente niños en edad escolar en zonas endémicas), de forma periódica y sin necesidad de un diagnóstico individual previo, para reducir la carga parasitaria comunitaria de geohelmintos (parásitos transmitidos por el suelo, como Ascaris, Trichuris y uncinarias) y de esquistosomiasis en las regiones donde son endémicos. Esta estrategia poblacional se justifica porque, en estas parasitosis de transmisión fecal-oral o por penetración cutánea desde suelo contaminado, el diagnóstico y tratamiento individual caso por caso es poco costo-efectivo cuando la prevalencia comunitaria es alta, y porque reducir la carga parasitaria general de la comunidad reduce también la contaminación ambiental (menos huevos eliminados al suelo), beneficiando indirectamente incluso a quienes no participaron directamente en la desparasitación.'
      ],
      foco:[
        'La desparasitación masiva trata a la POBLACIÓN completa en riesgo, sin diagnóstico individual previo -se justifica en geohelmintiasis y esquistosomiasis de alta prevalencia comunitaria, donde reduce también la contaminación ambiental general.'
      ]
    },
    {
      t:'Saneamiento ambiental: la intervención de mayor impacto a largo plazo',
      p:[
        'El saneamiento ambiental -acceso a agua potable segura, disposición adecuada de excretas (letrinas, alcantarillado), control de vectores- es, a largo plazo, la intervención de mayor impacto para reducir la transmisión de la mayoría de las parasitosis, porque interrumpe el ciclo de vida del parásito en el punto de contacto con el ambiente contaminado (el paso de huevos o quistes de las heces al suelo o al agua, o el contacto con el vector), en vez de solo tratar a las personas ya infectadas después de que la transmisión ya ocurrió. La desparasitación masiva, sin mejoras simultáneas en el saneamiento, tiende a producir reinfecciones repetidas relativamente rápidas, porque el ambiente contaminado que originó la infección sigue intacto -por eso las estrategias más efectivas combinan ambas intervenciones (tratamiento y saneamiento) en vez de depender de una sola.'
      ],
      foco:[
        '*Consideración clínica*: la desparasitación masiva sin mejora del saneamiento ambiental produce reinfecciones repetidas, porque el ambiente contaminado que originó la infección sigue intacto -las estrategias más efectivas combinan tratamiento Y saneamiento, no solo una de las dos.'
      ]
    },
    {
      t:'Prevención de zoonosis: intervenir sobre el reservorio animal',
      p:[
        'Como ya se vio en el primer tema de esta materia, en una parasitosis zoonótica el reservorio natural es un animal, así que tratar solo a los humanos infectados no controla la transmisión de fondo. Las estrategias de prevención de zoonosis parasitarias incluyen, según el caso: desparasitación regular de mascotas y ganado (reduciendo la eliminación de huevos infectantes al ambiente, relevante para prevenir cisticercosis, hidatidosis y larva migrans), control veterinario de la cadena alimentaria (inspección de carne para detectar cisticercos, cocción adecuada), y control del vector cuando la zoonosis es transmitida por un artrópodo (como en la leishmaniasis o el Chagas). Ninguna de estas intervenciones actúa aisladamente sobre el humano; todas requieren intervenir, en algún grado, sobre el ciclo del parásito en el animal reservorio o en el ambiente que lo conecta con el humano.'
      ],
      foco:[
        'La prevención de una zoonosis parasitaria requiere intervenir sobre el reservorio ANIMAL (desparasitación de mascotas/ganado, control de la cadena alimentaria, control del vector), no solo tratar a los humanos ya infectados.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Atias, Parasitología Médica.'
}

});
