/* ============================================================
   APUNTES 03 — Electrolitos, ácido-base, reumatología y neurología
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================================================== */
'hiponatremia': {
  tema:'Hiponatremia',
  bloque:'Medicina Interna',
  min:6,
  idea:'Es un problema de agua, no de sal. Se clasifica por la volemia y se corrige despacio: la velocidad puede dejar secuelas irreversibles.',
  claves:['hiponatremia','sodio bajo','SIADH','osmolaridad plasmática'],
  sigue:'hipernatremia',
  secciones:[
    {
      t:'Primero la osmolalidad, después la volemia',
      p:[
        'El sodio plasmático mide la relación entre sodio y agua, no la cantidad de sodio del organismo. Por eso la hiponatremia casi siempre significa exceso relativo de agua.',
        'El estudio tiene dos pasos. Primero se comprueba la *osmolalidad plasmática*: si es normal o alta, se trata de una pseudohiponatremia —por hiperlipidemia o hiperproteinemia— o de una hiponatremia por otro osmol activo, como la hiperglucemia. Solo si la osmolalidad es baja hay una hiponatremia verdadera.',
        'El segundo paso es valorar la *volemia*. En la hipovolémica hay signos de depleción y el sodio urinario es bajo, porque el riñón retiene con avidez; se corrige con suero salino isotónico. En la hipervolémica hay edemas —insuficiencia cardíaca, cirrosis, síndrome nefrótico— y el tratamiento es restricción de agua y sal y tratar la enfermedad de base. Y en la euvolémica, con orina inapropiadamente concentrada y sodio urinario mayor de 30, la causa habitual es el *SIADH*, una vez descartados el hipotiroidismo y la insuficiencia suprarrenal.'
      ],
      foco:[
        'En el SIADH, el suero salino isotónico puede *empeorar* la hiponatremia: el riñón elimina el sodio y retiene el agua.',
        'La hiponatremia con hiperglucemia se corrige mentalmente: por cada 100 mg/dL de glucosa por encima de lo normal, el sodio real sube en torno a 1,6-2,4 mEq/L.'
      ]
    },
    {
      t:'Corregir sin causar daño',
      p:[
        'La velocidad importa tanto como la dirección. En la hiponatremia crónica el cerebro se ha adaptado expulsando osmoles, de modo que subir el sodio demasiado rápido provoca la *desmielinización osmótica*, con un cuadro neurológico devastador y frecuentemente irreversible que aparece días después de la corrección.',
        'La regla es no superar los 8 a 10 mEq/L en 24 horas, y ser aún más prudente en pacientes de riesgo: alcohólicos, desnutridos, hipopotasémicos y hepatópatas.',
        'La excepción es la hiponatremia *sintomática grave*, con convulsiones, coma o vómitos incoercibles: ahí sí se administra suero salino hipertónico en bolos, pero solo para subir el sodio unos pocos miliequivalentes y revertir los síntomas, no para normalizarlo.'
      ],
      alarma:[
        'Convulsión o coma con sodio muy bajo: hipertónico en bolo, pero con objetivo corto.',
        'Corrección demasiado rápida: desmielinización osmótica, días después y sin marcha atrás.'
      ]
    }
  ],
  recordar:[
    'Primero *osmolalidad*, después *volemia*.',
    'SIADH: euvolemia, orina concentrada, Na urinario > 30 → *restricción hídrica*.',
    'Corrección máxima: *8-10 mEq/L en 24 h*.',
    'Sintomática grave: hipertónico, pero solo hasta que cedan los síntomas.'
  ],
  ref:'Guía europea sobre diagnóstico y tratamiento de la hiponatremia; Harrison, 21.ª ed.'
},

/* ==================================================== */
'hipernatremia': {
  tema:'Hipernatremia',
  bloque:'Medicina Interna',
  min:4,
  idea:'Casi siempre es falta de agua en alguien que no puede beber. Y aquí el peligro de corregir rápido es el edema cerebral.',
  claves:['hipernatremia','sodio alto','diabetes insípida','déficit de agua'],
  sigue:'hipopotasemia',
  secciones:[
    {
      t:'Quién la desarrolla',
      p:[
        'La hipernatremia es prácticamente siempre un déficit de agua libre. Como la sed es un mecanismo muy eficaz, solo aparece en quien no puede beber por sí mismo: el anciano dependiente, el lactante, el paciente con alteración de la conciencia o con acceso restringido al agua.',
        'La orina orienta la causa. Si está *concentrada*, la hormona antidiurética funciona y el riñón está reteniendo agua correctamente: el problema es el aporte o hay pérdidas extrarrenales. Si está *diluida* pese a la hipernatremia, hay diabetes insípida —central si falta la hormona, nefrogénica si el riñón no responde—, y la prueba de desmopresina las separa.'
      ]
    },
    {
      t:'Corregir despacio',
      p:[
        'Ante la hipernatremia mantenida, las neuronas generan osmoles idiogénicos para no deshidratarse. Si el sodio baja demasiado deprisa, el agua entra en masa en esas células y produce *edema cerebral* y convulsiones.',
        'Por eso el descenso no debe superar los 10 a 12 mEq/L en 24 horas, con soluciones hipotónicas o suero glucosado al 5%, reponiendo además las pérdidas que siguen produciéndose y controlando el sodio cada pocas horas. En el paciente con inestabilidad hemodinámica, primero se restaura el volumen con isotónico y después se corrige el agua libre.'
      ],
      alarma:[
        'Corrección rápida: edema cerebral.',
        'Poliuria con orina diluida e hipernatremia: diabetes insípida, no simple deshidratación.'
      ]
    }
  ],
  recordar:[
    'Es *falta de agua*, no exceso de sal.',
    'Orina concentrada = falta aporte. Orina diluida = *diabetes insípida*.',
    'Bajar como máximo *10-12 mEq/L al día*.',
    'Peligro de la corrección rápida: *edema cerebral*.'
  ],
  ref:'Harrison, 21.ª ed., trastornos del sodio y del agua.'
},

/* ==================================================== */
'hipopotasemia': {
  tema:'Hipopotasemia',
  bloque:'Medicina Interna',
  min:4,
  idea:'Si no se corrige con potasio, casi siempre falta magnesio. Y en el paciente digitalizado, es una combinación peligrosa.',
  claves:['hipopotasemia','potasio bajo','onda U'],
  sigue:'hiperpotasemia',
  secciones:[
    {
      t:'De dónde se pierde',
      p:[
        'El potasio se pierde por tres caminos. Por el *riñón*: diuréticos de asa y tiazidas, hiperaldosteronismo, corticoides, hipomagnesemia. Por el *tubo digestivo*: diarreas, vómitos —aquí en parte por la alcalosis y la depleción de volumen que activan la aldosterona—, laxantes. Y por *redistribución* al interior de la célula: insulina, betaagonistas, alcalosis.',
        'Clínicamente da debilidad muscular, calambres, íleo y arritmias. En el electrocardiograma aplana la onda T y hace aparecer la *onda U*, y en casos graves alarga el QT.'
      ]
    },
    {
      t:'Las dos trampas',
      p:[
        'La primera: la *hipomagnesemia*. Sin magnesio, el potasio administrado se pierde por la orina, porque el magnesio inhibe los canales ROMK del túbulo. Ante una hipopotasemia que no se corrige por mucho que se reponga, la respuesta casi siempre está ahí. Además, el magnesio bajo impide la secreción y la acción de la paratohormona, de modo que la hipocalcemia asociada tampoco se corrige.',
        'La segunda: la *digoxina*. El potasio y la digoxina compiten por el mismo sitio en la bomba sodio-potasio ATPasa, de manera que cuando el potasio baja, la digoxina se une más y su toxicidad aparece incluso con niveles séricos aparentemente terapéuticos, con extrasistolia, bigeminismo y arritmias ventriculares.'
      ],
      alarma:[
        'Hipopotasemia refractaria: mide el *magnesio*.',
        'Diurético de asa + digoxina: vigilancia estrecha del potasio.'
      ]
    }
  ],
  recordar:[
    'ECG: T aplanada y *onda U*.',
    'Si no sube con potasio, repón *magnesio*.',
    'Hipopotasemia + *digoxina* = arritmias.',
    'La reposición intravenosa rápida se hace con vía adecuada y monitorización.'
  ],
  ref:'Harrison, 21.ª ed., trastornos del potasio.'
},

/* ==================================================== */
'hiperpotasemia': {
  tema:'Hiperpotasemia',
  bloque:'Medicina Interna',
  min:5,
  idea:'Con alteraciones en el ECG se trata antes de confirmar. Y el primer fármaco no baja el potasio: protege el corazón.',
  claves:['hiperpotasemia','potasio alto','ondas T picudas','gluconato de calcio'],
  sigue:'trastornos-acido-base',
  secciones:[
    {
      t:'Reconocerla en el electrocardiograma',
      p:[
        'La hiperpotasemia altera el potencial de membrana y produce cambios secuenciales que hay que reconocer sin esperar al laboratorio: primero *ondas T altas y picudas* de base estrecha; después alargamiento del PR y aplanamiento hasta la desaparición de la onda P; luego ensanchamiento progresivo del QRS; y finalmente la fusión con la onda T en el patrón sinusoidal, antesala de la fibrilación ventricular o la asistolia.',
        'Las causas más frecuentes son la insuficiencia renal, los fármacos —IECA, ARA II, espironolactona, antiinflamatorios, heparina, trimetoprima—, la acidosis, la destrucción celular masiva por rabdomiólisis o lisis tumoral, y la insuficiencia suprarrenal. Antes de tratar conviene descartar la *pseudohiperpotasemia* por hemólisis de la muestra o torniquete prolongado, pero si el ECG está alterado no se espera a repetir.'
      ]
    },
    {
      t:'Estabilizar, redistribuir, eliminar',
      p:[
        'El tratamiento tiene tres pasos en un orden fijo. Primero *estabilizar* la membrana miocárdica con gluconato o cloruro cálcico: actúa en minutos, no baja el potasio, pero es lo único que protege de la arritmia mientras el resto hace efecto.',
        'Segundo *redistribuir* el potasio al interior de la célula: insulina con glucosa, salbutamol nebulizado y bicarbonato si hay acidosis. Son medidas rápidas pero transitorias.',
        'Tercero *eliminarlo* del organismo: diuréticos de asa si hay función renal, resinas de intercambio o los nuevos quelantes, y hemodiálisis, que es la solución definitiva en la hiperpotasemia refractaria o en el paciente anúrico.'
      ],
      alarma:[
        'ECG alterado: gluconato cálcico *ya*, sin esperar confirmación.',
        'El paciente no muere por la cifra, muere por la arritmia.'
      ]
    }
  ],
  recordar:[
    'Secuencia ECG: T picuda → P desaparece → QRS ancho → *sinusoidal*.',
    'Orden: *estabilizar (calcio) → redistribuir (insulina, salbutamol) → eliminar*.',
    'El calcio no baja el potasio: protege el corazón.',
    'Revisa siempre los fármacos: IECA, ARA II, espironolactona, AINE.'
  ],
  ref:'Guías del European Resuscitation Council sobre emergencias metabólicas; Harrison, 21.ª ed.'
},

/* ==================================================== */
'trastornos-acido-base': {
  tema:'Trastornos ácido-base y gasometría',
  bloque:'Medicina Interna',
  min:6,
  idea:'Cuatro pasos siempre iguales, y un cálculo —el anión gap— que convierte un diagnóstico vago en una lista corta de causas.',
  claves:['acidosis','alcalosis','gasometría','brecha aniónica','anión gap','bicarbonato','pH'],
  sigue:'artritis-reumatoide',
  secciones:[
    {
      t:'Los cuatro pasos',
      p:[
        'Primero, mirar el *pH*: por debajo de 7,35 hay acidemia, por encima de 7,45 alcalemia. Segundo, identificar al responsable: si el bicarbonato acompaña la dirección del pH, el trastorno es metabólico; si lo hace la pCO2, es respiratorio.',
        'Tercero, comprobar si la *compensación* es la esperada. El organismo compensa pero nunca sobrecorrige: si la compensación no cuadra con lo previsto, hay un segundo trastorno oculto. En la acidosis metabólica, por ejemplo, la fórmula de Winter predice la pCO2 esperada; en la acidosis respiratoria aguda el bicarbonato sube alrededor de 1 mEq/L por cada 10 mmHg de CO2, y en la crónica sube 3 o 4, que es como se distingue lo agudo de lo crónico.',
        'Cuarto, si hay acidosis metabólica, calcular el *anión gap*: sodio menos la suma de cloro y bicarbonato, normal entre 8 y 12.'
      ]
    },
    {
      t:'Qué dice el anión gap',
      p:[
        'Un anión gap *elevado* indica acumulación de ácidos no medidos, y la lista es corta y muy examinable: cetoacidosis diabética, alcohólica o de ayuno; acidosis láctica por hipoperfusión, sepsis o isquemia; insuficiencia renal; e intoxicaciones por metanol, etilenglicol o salicilatos.',
        'Un anión gap *normal*, o hiperclorémico, indica pérdida de bicarbonato: diarrea, acidosis tubular renal, o la sobrecarga de suero salino al 0,9%, que aporta 154 mEq/L de cloro y acidifica cuando se administra en grandes volúmenes.',
        'Del lado alcalótico, la *alcalosis metabólica* más frecuente es la del vómito prolongado: se pierde ácido clorhídrico y, además, la depleción de volumen hace que el riñón retenga bicarbonato y elimine hidrogeniones, perpetuándola. Por eso responde al suero salino y al potasio, y se llama sensible al cloro.'
      ],
      foco:[
        'Compensación que no cuadra = *trastorno mixto*.',
        'Toda acidosis metabólica pide un anión gap; sin él, el diagnóstico se queda a medias.'
      ]
    }
  ],
  recordar:[
    'pH → responsable → *compensación* → anión gap.',
    'Anión gap = Na − (Cl + HCO3), normal *8-12*.',
    'Gap alto: cetoacidosis, lactato, uremia, tóxicos.',
    'Gap normal: diarrea, acidosis tubular, suero salino en exceso.',
    'Alcalosis por vómitos: se corrige con *volumen y cloro*.'
  ],
  ref:'Harrison, 21.ª ed., trastornos del equilibrio ácido-base.'
},

/* ==================================================== */
'artritis-reumatoide': {
  tema:'Artritis reumatoide',
  bloque:'Medicina Interna',
  min:5,
  idea:'Poliartritis simétrica de pequeñas articulaciones que respeta las interfalángicas distales. El daño es precoz: la ventana para evitarlo son los primeros meses.',
  claves:['artritis reumatoide','factor reumatoide','anti-CCP','metotrexato','sinovitis'],
  sigue:'lupus-eritematoso-sistemico',
  secciones:[
    {
      t:'El patrón articular',
      p:[
        'Es una poliartritis inflamatoria crónica, simétrica, que afecta a metacarpofalángicas, interfalángicas proximales y muñecas, y que respeta de forma característica las *interfalángicas distales* —territorio de la artrosis y de la artritis psoriásica—. Ese detalle separa los dos diagnósticos más confundidos de la mano.',
        'La *rigidez matutina de más de una hora* es el otro rasgo inflamatorio clave: el dolor mejora con el movimiento y empeora con el reposo, al contrario que en la artrosis. Con el tiempo aparecen las deformidades —desviación cubital, dedos en cuello de cisne y en ojal—, que hoy se ven menos porque se trata antes.',
        'El estudio incluye factor reumatoide y anticuerpos *anti-péptido citrulinado*, más específicos y de valor pronóstico, junto con reactantes de fase aguda y radiografías, que muestran osteopenia yuxtaarticular, erosiones marginales y estrechamiento simétrico del espacio, sin osteofitos.'
      ]
    },
    {
      t:'Tratar pronto',
      p:[
        'El daño estructural se produce en los primeros meses, y una vez producido no se revierte: por eso existe el concepto de *ventana de oportunidad*. El fármaco de fondo de primera elección es el *metotrexato*, en dosis *semanal* —prescribirlo a diario es un error de dosificación que ha causado muertes— y siempre acompañado de ácido fólico, que reduce la toxicidad sin restar eficacia. Requiere control de hemograma, transaminasas y función renal, y está contraindicado en el embarazo.',
        'Los corticoides sirven de puente mientras el fármaco de fondo hace efecto, a la mínima dosis y el menor tiempo posible. Si no se alcanza la remisión se añaden terapias biológicas o inhibidores de JAK. Y no hay que olvidar el riesgo cardiovascular, que en esta enfermedad está aumentado por la propia inflamación.'
      ],
      alarma:[
        'Metotrexato: *semanal*, nunca diario.',
        'Una monoartritis aguda en un paciente con artritis reumatoide puede ser una artritis séptica: se punciona.'
      ]
    }
  ],
  recordar:[
    'Simétrica, pequeñas articulaciones, *respeta las interfalángicas distales*.',
    'Rigidez matutina *> 1 hora*, mejora con el movimiento.',
    'Anti-CCP: más específico y con valor pronóstico.',
    '*Metotrexato semanal + ácido fólico*, iniciado precozmente.'
  ],
  ref:'Criterios ACR/EULAR 2010; guías ACR y EULAR sobre artritis reumatoide.'
},

/* ==================================================== */
'lupus-eritematoso-sistemico': {
  tema:'Lupus eritematoso sistémico',
  bloque:'Medicina Interna',
  min:5,
  idea:'Una enfermedad que puede afectar a cualquier órgano. Los ANA sirven para descartar; los anti-DNA, para confirmar y para seguir la actividad.',
  claves:['lupus','antinuclear','anti-DNA','complemento','nefritis lúpica','hidroxicloroquina'],
  sigue:'gota',
  secciones:[
    {
      t:'Sospecharlo y confirmarlo',
      p:[
        'Se sospecha en una mujer joven con afectación multisistémica: eritema malar que respeta los surcos nasogenianos, fotosensibilidad, úlceras orales indoloras, artritis no erosiva, serositis, citopenias, afectación renal o neurológica.',
        'Los *anticuerpos antinucleares* están presentes en casi todos los pacientes, lo que los hace excelentes para descartar —un ANA negativo prácticamente excluye el diagnóstico— pero malos para confirmar, porque aparecen también en otras enfermedades y en personas sanas. Los específicos son los *anti-DNA de doble cadena* y los *anti-Sm*. Además, el título de anti-DNA sube con la actividad y se relaciona con la nefritis, junto con el descenso del complemento C3 y C4.',
        'La *nefritis lúpica* merece atención aparte: es silenciosa hasta fases avanzadas, de modo que en todo paciente hay que vigilar la tira de orina, el sedimento y la proteinuria de forma periódica, y biopsiar cuando aparecen alteraciones, porque la clase histológica determina el tratamiento.'
      ]
    },
    {
      t:'Tratamiento de base',
      p:[
        'La *hidroxicloroquina* se recomienda para prácticamente todos los pacientes salvo contraindicación: reduce los brotes, disminuye el daño acumulado y el riesgo trombótico, mejora la supervivencia y es segura en el embarazo. Su toxicidad relevante es la retinopatía, dependiente de la dosis acumulada, por lo que exige control oftalmológico periódico. Suspenderla cuando el paciente está bien es un error frecuente: es justo lo que mantiene la remisión.',
        'Los corticoides se usan en los brotes y se reducen a la mínima dosis posible, porque en el lupus el daño acumulado depende tanto de la enfermedad como del propio tratamiento esteroideo. Según la gravedad y el órgano afectado se añaden inmunosupresores o biológicos. Y hay que buscar el *síndrome antifosfolípido* asociado, que cambia el manejo por su riesgo trombótico y obstétrico.'
      ],
      alarma:[
        'Proteinuria de nueva aparición: nefritis lúpica hasta que se demuestre lo contrario.',
        'No suspender la hidroxicloroquina por sentirse bien.'
      ]
    }
  ],
  recordar:[
    'ANA: sensibles, sirven para *descartar*. Anti-DNA y anti-Sm: *específicos*.',
    'Anti-DNA alto y complemento bajo = *actividad*, sobre todo renal.',
    '*Hidroxicloroquina* para todos, con control oftalmológico.',
    'Vigilar la orina de forma periódica: la nefritis es silenciosa.'
  ],
  ref:'Criterios EULAR/ACR 2019; recomendaciones EULAR sobre lupus.'
},

/* ==================================================== */
'gota': {
  tema:'Gota',
  bloque:'Medicina Interna',
  min:5,
  idea:'Se confirma con cristales, no con el ácido úrico. Y el hipouricemiante trata la enfermedad, no el ataque.',
  claves:['gota','ácido úrico','urato','colchicina','alopurinol','podagra'],
  sigue:'osteoartritis',
  secciones:[
    {
      t:'El ataque',
      p:[
        'La presentación típica es la *podagra*: monoartritis de la primera metatarsofalángica, de inicio nocturno, con dolor intensísimo, eritema y calor. El diagnóstico de certeza es la identificación de cristales de urato monosódico —en forma de aguja y con birrefringencia negativa— en el líquido sinovial.',
        'Aquí está la trampa más repetida: durante el ataque el *ácido úrico sérico puede ser normal o incluso bajo*, porque el urato se está depositando en la articulación. Descartar la gota por una uricemia normal es un error clásico. Y hay una razón más para puncionar: la artritis séptica se parece mucho, y la presencia de cristales no la descarta, porque pueden coexistir.',
        'El ataque se trata con antiinflamatorios no esteroideos, colchicina o corticoides, sistémicos o infiltrados. Cualquiera de los tres es válido; se elige según las comorbilidades.'
      ],
      foco:[
        'Ácido úrico normal *no* descarta gota.',
        'Monoartritis aguda febril: puncionar siempre para descartar infección.'
      ]
    },
    {
      t:'El tratamiento de fondo',
      p:[
        'El hipouricemiante —alopurinol de primera elección, febuxostat como alternativa— se indica cuando hay ataques recurrentes, tofos, artropatía gotosa, litiasis úrica o enfermedad renal crónica asociada. El objetivo es mantener el ácido úrico por debajo de 6 mg/dL, o de 5 si hay tofos, subiendo la dosis de forma progresiva.',
        'La hiperuricemia *asintomática* no se trata de forma sistemática. Y hay dos reglas prácticas que evitan abandonos: durante los primeros meses se asocia profilaxis con colchicina, porque los cambios bruscos de uricemia movilizan cristales y desencadenan brotes que el paciente interpreta como que el tratamiento le sienta mal; y si el paciente ya tomaba alopurinol cuando le dio la crisis, *no se suspende*: se trata la crisis y se mantiene.'
      ],
      alarma:[
        'No suspender el alopurinol durante un ataque si ya lo tomaba.',
        'Iniciar hipouricemiante sin profilaxis provoca brotes y abandono.'
      ]
    }
  ],
  recordar:[
    'Diagnóstico: *cristales* con birrefringencia negativa, no la uricemia.',
    'Durante la crisis el ácido úrico puede ser *normal*.',
    'Hiperuricemia asintomática: *no* se trata.',
    'Objetivo con hipouricemiante: *< 6 mg/dL*, con profilaxis con colchicina al inicio.'
  ],
  ref:'Guías ACR y EULAR sobre gota.'
},

/* ==================================================== */
'osteoartritis': {
  tema:'Osteoartritis',
  bloque:'Medicina Interna',
  min:4,
  idea:'Dolor mecánico que mejora con el reposo. Lo que más funciona no es un fármaco: es el ejercicio y el peso.',
  claves:['artrosis','osteoartritis','coxartrosis','gonartrosis','osteofito'],
  sigue:'accidente-cerebrovascular',
  secciones:[
    {
      t:'Reconocerla',
      p:[
        'La artrosis es una enfermedad de toda la articulación, con pérdida de cartílago y respuesta ósea reactiva. Su dolor es *mecánico*: aparece con el uso y mejora con el reposo, al contrario que el inflamatorio. La rigidez matutina existe pero es breve, de menos de treinta minutos.',
        'Afecta sobre todo a rodillas, caderas, columna y manos, y en las manos toma las *interfalángicas distales* —nódulos de Heberden— y proximales —Bouchard—, además de la trapeciometacarpiana. En la radiografía se ve estrechamiento asimétrico del espacio articular, osteofitos, esclerosis subcondral y quistes. Conviene recordar que la correlación entre imagen y síntomas es pobre: hay radiografías muy alteradas con poco dolor y al revés.'
      ]
    },
    {
      t:'Qué funciona de verdad',
      p:[
        'El tratamiento con mayor respaldo y efecto sostenido es el *ejercicio terapéutico* —fortalecimiento y ejercicio aeróbico de bajo impacto— junto con la *pérdida de peso* en la artrosis de rodilla y cadera. No son consejos de acompañamiento: son el tratamiento.',
        'La analgesia se usa de forma puntual, empezando por medidas tópicas y paracetamol, con antiinflamatorios en ciclos cortos vigilando el riesgo digestivo, renal y cardiovascular. Las infiltraciones de corticoide alivian a corto plazo pero no deben repetirse con frecuencia. La prótesis se reserva para la enfermedad avanzada con dolor y limitación que no responden, y la indica la clínica, no el grado radiológico.'
      ],
      foco:[
        'Recomendar reposo empeora la artrosis: el músculo débil hace que la articulación duela más.',
        'La prótesis se decide por dolor y función, no por la radiografía.'
      ]
    }
  ],
  recordar:[
    'Dolor *mecánico*, rigidez matutina *< 30 minutos*.',
    'Manos: *interfalángicas distales* (Heberden), al revés que la artritis reumatoide.',
    'Radiología: osteofitos, esclerosis, estrechamiento *asimétrico*.',
    'Lo que más funciona: *ejercicio y peso*.'
  ],
  ref:'Guías OARSI y ACR sobre manejo de la artrosis.'
},

/* ==================================================== */
'accidente-cerebrovascular': {
  tema:'Accidente cerebrovascular isquémico y hemorrágico',
  bloque:'Medicina Interna',
  min:8,
  idea:'La tomografía sin contraste no se pide para diagnosticar el ictus: se pide para saber si hay sangre, porque de eso depende todo lo demás.',
  claves:['ictus','cerebrovascular','trombólisis','hemiparesia','afasia','hemorragia intracerebral','NIHSS'],
  sigue:'crisis-convulsivas',
  secciones:[
    {
      t:'Tiempo y tomografía',
      p:[
        'El ictus es una urgencia dependiente del tiempo: cada minuto de oclusión destruye tejido, y la ventana terapéutica es estrecha. Lo primero es establecer la *hora de inicio* —o la última hora en que el paciente fue visto bien—, porque de ella depende todo.',
        'La tomografía craneal sin contraste es la primera prueba y su objetivo principal es *descartar hemorragia*, no confirmar el infarto, que en las primeras horas puede no verse. Esa distinción decide el camino: en el isquémico se abre la arteria; en el hemorrágico, la trombólisis y la antiagregación están absolutamente contraindicadas y el manejo es otro.',
        'Antes de nada hay que descartar los imitadores tratables, sobre todo la *hipoglucemia*, que puede producir focalidad indistinguible, y considerar la crisis con parálisis de Todd.'
      ]
    },
    {
      t:'Isquémico: reperfundir',
      p:[
        'Si no hay hemorragia y el paciente está dentro de las *4,5 horas* desde el inicio, sin criterios de exclusión, la trombólisis intravenosa mejora el pronóstico funcional, y cuanto antes se administre mayor es el beneficio. En las oclusiones de gran vaso, la *trombectomía mecánica* amplía la ventana de forma considerable en pacientes seleccionados por imagen.',
        'La presión arterial se maneja con una lógica contraintuitiva: en el ictus isquémico agudo *no* se baja, porque la hipertensión mantiene perfundida la zona de penumbra; solo se trata si supera 185/110 y se va a trombolizar, o cifras muy altas en otros contextos. La aspirina se inicia después, no antes, porque interfiere con la fibrinólisis.',
        'Después viene la prevención secundaria, que es donde se evita el siguiente: antiagregación o anticoagulación según el mecanismo —la fibrilación auricular exige anticoagular—, estatina, control de la presión y de la diabetes, y valoración de la estenosis carotídea.'
      ],
      foco:[
        'La hora de inicio es el dato más importante de la anamnesis.',
        'El ataque isquémico transitorio no es un susto: el riesgo de ictus es máximo en las primeras 48 horas. Se estudia con urgencia.'
      ]
    },
    {
      t:'Hemorrágico',
      p:[
        'La hemorragia intracerebral espontánea más frecuente es la *hipertensiva*, localizada en estructuras profundas —putamen, tálamo, cerebelo, protuberancia— por rotura de las arterias perforantes. En el anciano normotenso, la hemorragia *lobar* orienta a angiopatía amiloide.',
        'El manejo consiste en control cuidadoso de la presión arterial, reversión urgente de la anticoagulación si la hubiera, control de la presión intracraneal y valoración neuroquirúrgica según la localización y el volumen; la hemorragia cerebelosa con deterioro es la que más se beneficia de cirugía.',
        'Caso aparte es la *hemorragia subaracnoidea*: cefalea en trueno, la peor de la vida, de máxima intensidad en segundos, con rigidez de nuca. Si la tomografía es normal y la sospecha persiste, hay que hacer punción lumbar buscando xantocromía, porque la sensibilidad de la imagen cae con las horas.'
      ],
      alarma:[
        'Cefalea en trueno: no basta con una tomografía normal.',
        'En el hemorrágico, la trombólisis y la antiagregación están contraindicadas: por eso la imagen va primero.'
      ]
    }
  ],
  recordar:[
    'La tomografía inicial busca *sangre*, no el infarto.',
    'Trombólisis dentro de *4,5 h*; trombectomía en gran vaso, ventana mayor.',
    'No bajar la presión en el isquémico salvo *>185/110* para trombolizar.',
    'Hemorragia profunda = *hipertensiva*; lobar en el anciano = angiopatía amiloide.',
    'Cefalea en trueno con TC normal → *punción lumbar*.'
  ],
  ref:'Guías AHA/ASA sobre ictus isquémico agudo, hemorragia intracerebral y hemorragia subaracnoidea.'
},

/* ==================================================== */
'crisis-convulsivas': {
  tema:'Crisis convulsivas',
  bloque:'Medicina Interna',
  min:5,
  idea:'Una crisis no es epilepsia. Y en el estado epiléptico, el fallo más común no es elegir mal el fármaco sino darlo a dosis corta.',
  claves:['crisis','convulsi','epileps','estado epiléptico','benzodiacepina','levetiracetam'],
  sigue:'meningitis',
  secciones:[
    {
      t:'Crisis, epilepsia y lo que la imita',
      p:[
        'Una crisis es una descarga neuronal anómala; la *epilepsia* es la tendencia duradera a repetirlas. Muchas crisis son sintomáticas agudas y no son epilepsia: hipoglucemia, hiponatremia, hipocalcemia, abstinencia alcohólica, intoxicaciones, infecciones del sistema nervioso, ictus, traumatismo. Buscar y corregir esas causas es la primera tarea, porque el anticonvulsivante no resuelve una hipoglucemia.',
        'El diagnóstico diferencial más frecuente es el *síncope*, y se resuelve con la clínica: la mordedura *lateral* de la lengua es muy específica de crisis, igual que el estado postcrítico con confusión que dura minutos u horas. En el síncope hay pródromo vegetativo y la recuperación es rápida y completa; las sacudidas breves que a veces se observan confunden a los testigos.'
      ]
    },
    {
      t:'Estado epiléptico',
      p:[
        'Se define por una crisis de más de 5 minutos, o por crisis repetidas sin recuperación de la conciencia entre ellas. Es una urgencia con daño neuronal progresivo.',
        'La primera línea es una *benzodiacepina* —diazepam o lorazepam intravenosos, midazolam intramuscular si no hay vía—, y la causa más frecuente de fracaso es administrar una dosis insuficiente. Si la crisis persiste se pasa a la segunda línea: fenitoína, valproato o levetiracetam intravenosos. Si tampoco cede, estado refractario, con anestesia general y monitorización.',
        'En paralelo: vía aérea, oxígeno, glucemia capilar, electrolitos, tóxicos, y considerar tiamina antes de la glucosa en el alcohólico.'
      ],
      alarma:[
        'Más de 5 minutos convulsionando: es estado epiléptico, se trata ya.',
        'Antes de etiquetar de epilepsia, mide glucemia y sodio.'
      ]
    }
  ],
  recordar:[
    'Crisis ≠ epilepsia: busca causas *sintomáticas agudas*.',
    'Mordedura *lateral* de lengua y postcrítico prolongado = crisis, no síncope.',
    'Estado epiléptico: *> 5 minutos*.',
    'Primera línea: *benzodiacepina a dosis adecuada*.'
  ],
  ref:'Guías de la American Epilepsy Society sobre estado epiléptico; clasificación ILAE.'
},

/* ==================================================== */
'meningitis': {
  tema:'Meningitis',
  bloque:'Medicina Interna',
  min:6,
  idea:'El antibiótico nunca espera. La tomografía previa a la punción solo se indica en casos concretos, y pedirla por rutina cuesta vidas.',
  claves:['meningitis','rigidez de nuca','punción lumbar','dexametasona','líquido cefalorraquídeo'],
  sigue:'encefalitis',
  secciones:[
    {
      t:'La secuencia correcta',
      p:[
        'Ante fiebre, cefalea y rigidez de nuca, el orden importa. La tomografía *antes* de la punción lumbar solo se indica si hay focalidad neurológica, crisis de reciente comienzo, papiledema, inmunodepresión o alteración importante de la conciencia, porque en esos casos existe riesgo de herniación. Sin esos datos, se punciona directamente.',
        'Inmediatamente después de la punción se administra el *antibiótico empírico* junto con *dexametasona*, que reduce las secuelas neurológicas —sobre todo la hipoacusia— en la meningitis neumocócica. Y si por cualquier motivo la punción se retrasa, el antibiótico va primero: nunca se espera. Cada hora de retraso se paga en mortalidad y secuelas.'
      ],
      foco:[
        'La regla: si hay que hacer tomografía, se saca hemocultivo, se da el antibiótico y después se punciona.'
      ]
    },
    {
      t:'Leer el líquido',
      p:[
        'El perfil del líquido cefalorraquídeo orienta la etiología. La *bacteriana* muestra pleocitosis a expensas de polimorfonucleares, glucosa *baja* y proteínas elevadas, con aspecto turbio. La *viral* cursa con predominio linfocitario, glucosa normal y proteínas ligeramente altas. La *tuberculosa y la fúngica* combinan predominio linfocitario con glucosa baja y proteínas muy elevadas, en un curso más subagudo.',
        'La glucosa es el dato que más discrimina: mirar solo el recuento celular deja fuera la información más útil.',
        'En el caso del meningococo, el trabajo no acaba con el paciente: es de declaración urgente y los contactos estrechos necesitan *quimioprofilaxis* cuanto antes, con rifampicina, ciprofloxacino o ceftriaxona.'
      ],
      alarma:[
        'Petequias o púrpura con fiebre: meningococemia, antibiótico inmediato.',
        'No olvidar la quimioprofilaxis de los contactos.'
      ]
    }
  ],
  recordar:[
    'Antibiótico + *dexametasona* sin demora; la punción no puede retrasarlo.',
    'TC previa solo con focalidad, crisis, papiledema, inmunodepresión o bajo nivel de conciencia.',
    'Bacteriana: *PMN, glucosa baja*, proteínas altas.',
    'Meningococo: notificar y dar *quimioprofilaxis a contactos*.'
  ],
  ref:'Guías IDSA sobre meningitis bacteriana; guías de los CDC.'
},

/* ==================================================== */
'encefalitis': {
  tema:'Encefalitis',
  bloque:'Medicina Interna',
  min:4,
  idea:'Lo que la separa de la meningitis es la alteración de la función cerebral. Y ante la duda, aciclovir empírico: el herpes no espera.',
  claves:['encefalitis','herpes','aciclovir','lóbulo temporal'],
  sigue:'escala-de-glasgow',
  secciones:[
    {
      t:'Meninges o parénquima',
      p:[
        'La meningitis inflama las meninges y produce fiebre, cefalea y signos meníngeos con el estado mental esencialmente conservado. La *encefalitis* afecta al parénquima cerebral, y por eso aparecen confusión, alteraciones de la conducta o del lenguaje, convulsiones y signos focales. Con frecuencia coexisten como meningoencefalitis.',
        'La causa tratable que no se puede pasar por alto es la *encefalitis herpética*, que afecta característicamente a los lóbulos temporales —de ahí las alteraciones de conducta, la afasia y las crisis— y se confirma con PCR en líquido cefalorraquídeo. La resonancia es más sensible que la tomografía para ver esa afectación temporal.',
        'La regla práctica es simple: ante la sospecha se inicia *aciclovir empírico* sin esperar el resultado de la PCR, porque el retraso se traduce en secuelas graves y en mortalidad.'
      ],
      alarma:[
        'Fiebre con cambio de conducta o crisis: piensa en herpes y empieza aciclovir.',
        'Una PCR precoz negativa no descarta: puede repetirse.'
      ]
    }
  ],
  recordar:[
    'Encefalitis = alteración de la *función cerebral*; meningitis = meninges.',
    'Herpes: lóbulos *temporales*, PCR en líquido.',
    '*Aciclovir empírico* ante la sospecha, sin esperar confirmación.'
  ],
  ref:'Guías IDSA sobre encefalitis; Harrison, 21.ª ed.'
},

/* ==================================================== */
'escala-de-glasgow': {
  tema:'Escala de Glasgow',
  bloque:'Medicina Interna',
  min:3,
  idea:'Tres componentes, un total de 3 a 15, y un umbral que decide la vía aérea. Su valor real está en la tendencia, no en el número aislado.',
  claves:['Glasgow','nivel de conciencia','apertura ocular','respuesta motora'],
  sigue:'shock',
  secciones:[
    {
      t:'Cómo se puntúa',
      p:[
        'La escala valora tres respuestas. La *apertura ocular* de 1 a 4: espontánea 4, a la orden 3, al dolor 2, ninguna 1. La *respuesta verbal* de 1 a 5: orientada 5, confusa 4, palabras inapropiadas 3, sonidos incomprensibles 2, ninguna 1. Y la *respuesta motora* de 1 a 6: obedece órdenes 6, localiza el dolor 5, retira al dolor 4, flexión anormal o decorticación 3, extensión o descerebración 2, ninguna 1.',
        'El total va de 3 a 15. La confusión más frecuente está entre localizar el dolor —5— y retirar al dolor —4—, y esa diferencia puede cambiar la decisión sobre la vía aérea.'
      ]
    },
    {
      t:'Para qué sirve',
      p:[
        'Clasifica la gravedad del traumatismo craneoencefálico: leve con 14 a 15, moderado con 9 a 13, grave con 8 o menos. Una puntuación *igual o menor de 8* define coma e indica aislar la vía aérea, porque el paciente no la protege.',
        'Al comunicarla conviene desglosar los tres componentes, porque el motor es el que más peso pronóstico tiene. Y debe valorarse tras estabilizar y sin factores que la distorsionen —sedación, alcohol, hipoglucemia, hipoxia—, repitiéndola de forma seriada: un descenso de dos o más puntos es una señal de alarma que obliga a repetir la imagen.'
      ],
      alarma:[
        'Glasgow ≤ 8: intubar.',
        'Caída de 2 puntos o más: reevaluar con imagen.'
      ]
    }
  ],
  recordar:[
    'Ocular *4*, verbal *5*, motora *6*. Total 3-15.',
    '≤ 8 = coma → *vía aérea*.',
    'Localiza el dolor = 5; retira = 4.',
    'Lo que informa es la *tendencia*, no un valor aislado.'
  ],
  ref:'ATLS, 10.ª ed.; escala de coma de Glasgow, Teasdale y Jennett.'
}

});
