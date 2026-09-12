/* ============================================================
   CASOS CLINICOS INTERACTIVOS — tanda 2
   Diez casos nuevos, repartidos por el peso real del ENURM.

   Reglas de escritura, por si se anaden mas:
   - Cada opcion mala tiene que ENSENAR en su `retro`, no solo
     restar puntos. El estudiante que se equivoca es el que mas
     necesita el texto.
   - Toda rama equivocada vuelve al camino por un embudo o llega
     a un final: nadie se queda encerrado.
   - Nada entra sin bibliografia.
   ============================================================ */
window.CASOS = (window.CASOS || []).concat([

{
  id:'CL-04',
  titulo:'La mujer que no podía respirar tras el viaje',
  esp:'Medicina Interna', dif:4,
  ref:'ESC, guía de tromboembolia pulmonar aguda; escala de Wells y algoritmo del dímero D ajustado a edad.',
  resumen:'Mujer de 38 años, disnea súbita el día después de un viaje largo en autobús.',
  paciente:{ edad:38, sexo:'Femenino', motivo:'"Me falta el aire desde anoche y me duele al respirar"' },
  vitales:{ TA:'118/74', FC:'112', FR:'26', T:'37.2 °C', Sat:'91%' },
  nodos:{
    inicio:{
      texto:'Llegó ayer de un viaje de catorce horas. Toma anticonceptivos orales. Está taquipneica, con dolor pleurítico derecho. Los pulmones auscultan limpios. ¿Por dónde empiezas?',
      opciones:[
        { txt:'Calcular la probabilidad clínica con la escala de Wells', sig:'wells', pts:25, retro:'Correcto. En tromboembolia la probabilidad previa decide qué prueba pedir; sin ella, cualquier resultado se interpreta mal.' },
        { txt:'Pedir dímero D de entrada', sig:'dimero_solo', pts:5, retro:'No es un error grave, pero el dímero D solo sirve para descartar cuando la probabilidad es baja o intermedia. Pedirlo a ciegas te deja sin saber qué hacer con el resultado.' },
        { txt:'Radiografía de tórax y esperar', sig:'rx', pts:-10, retro:'La radiografía suele ser normal en la tromboembolia. Esperar su resultado como paso único retrasa el diagnóstico.' },
        { txt:'Tratar como neumonía con amoxicilina', sig:'antibiotico', pts:-25, retro:'Sin fiebre alta, sin foco auscultatorio y con esta historia, la neumonía no explica el cuadro. Tratarla retrasa un diagnóstico que mata en horas.' }
      ]
    },
    wells:{
      texto:'Wells da 6 puntos: probabilidad alta (taquicardia, inmovilización reciente, dolor pleurítico, sin diagnóstico alternativo). ¿Qué pides ahora?',
      opciones:[
        { txt:'Angiotomografía de arterias pulmonares', sig:'angio', pts:30, retro:'Exacto. Con probabilidad alta se va directo a la imagen: el dímero D ya no aporta porque un resultado negativo no descartaría nada.' },
        { txt:'Dímero D para decidir si hago la angiotomografía', sig:'dimero_alto', pts:-20, retro:'Error frecuente. Con probabilidad alta, un dímero D negativo NO descarta tromboembolia, así que la prueba no cambia tu conducta y solo pierde tiempo.' },
        { txt:'Ecografía doppler de miembros inferiores primero', sig:'doppler', pts:10, retro:'Útil si encuentra trombosis, porque ahorra la tomografía. Pero si sale negativa no descarta nada y habrás perdido tiempo.' }
      ]
    },
    angio:{
      texto:'La angiotomografía confirma trombos en ambas arterias pulmonares lobares. La paciente mantiene tensión de 116/72 y no tiene signos de sobrecarga derecha. ¿Cuál es el tratamiento?',
      opciones:[
        { txt:'Anticoagulación plena', sig:'final_bueno', pts:30, retro:'Correcto. Sin inestabilidad hemodinámica ni disfunción del ventrículo derecho, la anticoagulación es el tratamiento.' },
        { txt:'Trombólisis sistémica inmediata', sig:'final_regular', pts:-20, retro:'La trombólisis se reserva para la tromboembolia de alto riesgo, con hipotensión o shock. Aquí el sangrado que puede causar supera el beneficio.' },
        { txt:'Filtro de vena cava', sig:'final_regular', pts:-15, retro:'El filtro es para quien no puede anticoagularse o vuelve a embolizar pese al tratamiento. No es primera línea.' }
      ]
    },
    dimero_alto:{
      texto:'El dímero D vuelve en 900 ng/mL, elevado. Han pasado 50 minutos y la saturación bajó a 89%.',
      opciones:[
        { txt:'Angiotomografía ahora', sig:'angio', pts:10, retro:'Llegaste al paso correcto. Recuerda que con probabilidad alta ese dímero nunca iba a cambiar tu decisión.' }
      ]
    },
    dimero_solo:{
      texto:'El dímero D está elevado. Sigues sin haber estratificado el riesgo.',
      opciones:[
        { txt:'Calcular Wells ahora y seguir el algoritmo', sig:'wells', pts:10, retro:'Bien. El orden correcto es probabilidad primero, prueba después.' },
        { txt:'Angiotomografía directamente', sig:'angio', pts:15, retro:'Llegas al sitio correcto. Con este cuadro la imagen estaba indicada de todas formas.' }
      ]
    },
    doppler:{
      texto:'El doppler muestra trombosis venosa profunda femoral derecha. La paciente sigue con saturación de 91%.',
      opciones:[
        { txt:'Anticoagular: con trombosis confirmada y clínica respiratoria, el tratamiento es el mismo', sig:'final_bueno', pts:25, retro:'Razonamiento correcto. Una trombosis confirmada en un paciente con clínica respiratoria permite tratar sin la tomografía.' },
        { txt:'Angiotomografía igualmente para confirmar', sig:'angio', pts:15, retro:'No es incorrecto, pero el tratamiento no cambiaría. En una embarazada o con falla renal, evitar la tomografía sí importaría.' }
      ]
    },
    rx:{
      texto:'La radiografía es normal. Han pasado 35 minutos y la paciente sigue taquipneica.',
      opciones:[
        { txt:'Estratificar con Wells y seguir el algoritmo', sig:'wells', pts:10, retro:'Correcto, con retraso. Una radiografía normal no descarta tromboembolia: sirve sobre todo para buscar otras causas.' }
      ]
    },
    antibiotico:{
      texto:'Seis horas después la paciente está con saturación de 84%, taquicárdica e hipotensa.',
      opciones:[
        { txt:'Reconsiderar el diagnóstico y pedir angiotomografía urgente', sig:'angio_tarde', pts:5, retro:'Bien rectificado, pero el retraso ya causó daño. Revisar el diagnóstico cuando el paciente empeora es obligatorio.' }
      ]
    },
    angio_tarde:{
      texto:'La angiotomografía muestra tromboembolia bilateral masiva con dilatación del ventrículo derecho. La tensión es de 82/50 mmHg.',
      opciones:[
        { txt:'Trombólisis sistémica', sig:'final_recuperado', pts:20, retro:'Ahora sí. Con hipotensión y disfunción del ventrículo derecho estamos ante alto riesgo, y la trombólisis está indicada.' },
        { txt:'Solo anticoagulación', sig:'final_malo', pts:-25, retro:'Con inestabilidad hemodinámica la anticoagulación sola no basta: esta paciente necesita reperfusión.' }
      ]
    },
    final_bueno:{
      final:true, nivel:'excelente',
      texto:'La paciente se anticoagula, mejora la saturación en las primeras horas y se va de alta al cuarto día con anticoagulante oral y plan de seguimiento.',
      dx:'Tromboembolia pulmonar de riesgo intermedio-bajo',
      analisis:'Estratificaste antes de pedir pruebas, elegiste la imagen correcta y no sobretrataste. Ese es el camino.'
    },
    final_regular:{
      final:true, nivel:'aceptable',
      texto:'La paciente sobrevive, pero recibió un tratamiento más agresivo del que su riesgo justificaba.',
      dx:'Tromboembolia pulmonar de riesgo intermedio-bajo',
      analisis:'El diagnóstico fue correcto. Lo que falló fue graduar el tratamiento al riesgo: no toda tromboembolia se trombolisa.'
    },
    final_recuperado:{
      final:true, nivel:'aceptable',
      texto:'La paciente se recupera tras la trombólisis, pero pasó horas hipoxémica por un diagnóstico inicial equivocado.',
      dx:'Tromboembolia pulmonar de alto riesgo',
      analisis:'Rectificaste cuando empeoró, que es lo que hay que hacer. El aprendizaje está en la primera decisión: una disnea súbita con factores de riesgo no es neumonía.'
    },
    final_malo:{
      final:true, nivel:'peligroso',
      texto:'La paciente entra en shock obstructivo y fallece en el intento de reanimación.',
      dx:'Tromboembolia pulmonar de alto riesgo',
      analisis:'Dos errores encadenados: tratar como neumonía un cuadro que no lo era, y luego no reperfundir a una paciente hipotensa. La tromboembolia de alto riesgo se define por la hemodinamia, no por la imagen.'
    }
  }
},

{
  id:'CL-05',
  titulo:'Vómitos y respiración profunda en una joven de 19 años',
  esp:'Medicina Interna', dif:3,
  ref:'ADA, estándares de atención en diabetes, capítulo de crisis hiperglucémicas; Harrison, Principios de Medicina Interna, 21.ª ed.',
  resumen:'Mujer de 19 años con vómitos, dolor abdominal y respiración profunda desde hace dos días.',
  paciente:{ edad:19, sexo:'Femenino', motivo:'"Llevo dos días vomitando y me duele el estómago"' },
  vitales:{ TA:'104/62', FC:'124', FR:'28', T:'36.9 °C', Sat:'99%' },
  nodos:{
    inicio:{
      texto:'Respiración profunda y regular. Mucosas secas, aliento afrutado. Refiere que lleva semanas orinando mucho y bajando de peso. ¿Qué pides primero?',
      opciones:[
        { txt:'Glucemia capilar, gasometría y cetonas', sig:'labs', pts:30, retro:'Correcto. Esos tres datos confirman o descartan la cetoacidosis en minutos y a la cabecera.' },
        { txt:'Tomografía de abdomen por el dolor', sig:'tac', pts:-20, retro:'El dolor abdominal de la cetoacidosis es metabólico y cede al corregirla. Una tomografía retrasa el tratamiento de lo que está matando a la paciente.' },
        { txt:'Antiemético y observar la evolución', sig:'antiemetico', pts:-25, retro:'Tratar el síntoma sin buscar la causa en una paciente con respiración de Kussmaul y poliuria es peligroso.' }
      ]
    },
    labs:{
      texto:'Glucemia 486 mg/dL, pH 7.12, bicarbonato 8 mEq/L, cetonas en sangre positivas, potasio 5.4 mEq/L, sodio 131 mEq/L. ¿Qué haces primero?',
      opciones:[
        { txt:'Solución salina isotónica a buen ritmo', sig:'volumen', pts:30, retro:'Exacto. La cetoacidosis se trata primero con volumen: estos pacientes llegan con varios litros de déficit y la hidratación ya baja la glucemia.' },
        { txt:'Insulina en infusión de inmediato', sig:'insulina_pronto', pts:5, retro:'La insulina es necesaria, pero antes va el volumen. Empezar por insulina con el paciente deplecionado agrava la hipoperfusión y desploma el potasio.' },
        { txt:'Bicarbonato por el pH de 7.12', sig:'bicarbonato', pts:-20, retro:'El bicarbonato no se usa por encima de pH 6.9: no mejora el desenlace y empeora la acidosis intracelular y la hipopotasemia.' }
      ]
    },
    volumen:{
      texto:'Tras un litro de salina la paciente mejora la perfusión. Nuevo potasio: 4.1 mEq/L. ¿Cuál es el siguiente paso?',
      opciones:[
        { txt:'Iniciar insulina en infusión y añadir potasio al suero', sig:'final_bueno', pts:30, retro:'Correcto. Con potasio entre 3.3 y 5.3 se inicia insulina y se repone potasio a la vez, porque la insulina lo mete en la célula y lo desploma.' },
        { txt:'Insulina en infusión sin potasio', sig:'hipokalemia', pts:-20, retro:'Peligroso. La insulina va a bajar ese potasio de 4.1 rápidamente, y una hipopotasemia grave causa arritmia y paro.' },
        { txt:'Esperar a que la glucemia baje sola con el suero', sig:'espera', pts:-10, retro:'El volumen baja la glucemia, pero no corta la cetogénesis. Sin insulina la acidosis no se resuelve.' }
      ]
    },
    insulina_pronto:{
      texto:'A los 40 minutos la paciente está más hipotensa (88/54) y el potasio bajó a 3.1 mEq/L.',
      opciones:[
        { txt:'Suspender la insulina, cargar volumen y reponer potasio', sig:'volumen', pts:10, retro:'Buena rectificación. Con potasio por debajo de 3.3 la insulina se detiene hasta reponerlo.' }
      ]
    },
    hipokalemia:{
      texto:'Dos horas después el potasio es de 2.7 mEq/L y el monitor muestra extrasístoles ventriculares frecuentes.',
      opciones:[
        { txt:'Detener la insulina y reponer potasio de inmediato', sig:'final_recuperado', pts:15, retro:'Correcto. La regla es no dar insulina con potasio por debajo de 3.3 sin reponerlo primero.' },
        { txt:'Continuar la insulina y vigilar', sig:'final_malo', pts:-30, retro:'La arritmia ya está avisando. Seguir bajando el potasio en este punto puede acabar en paro.' }
      ]
    },
    bicarbonato:{
      texto:'Tras el bicarbonato el pH sube a 7.20 pero el potasio cae a 3.0 y la paciente refiere más náuseas.',
      opciones:[
        { txt:'Volver al protocolo: volumen, potasio e insulina', sig:'volumen', pts:10, retro:'Bien. El bicarbonato en la cetoacidosis es casi siempre un desvío que crea problemas nuevos.' }
      ]
    },
    espera:{
      texto:'Cuatro horas después la glucemia bajó a 310 mg/dL, pero el pH sigue en 7.14 y la paciente continúa con Kussmaul.',
      opciones:[
        { txt:'Iniciar insulina en infusión con potasio', sig:'final_bueno', pts:15, retro:'Correcto. Ahí está la lección: lo que cierra la cetoacidosis es la insulina, no solo la glucemia bajando.' }
      ]
    },
    tac:{
      texto:'La tomografía es normal. Han pasado 90 minutos y la paciente está más somnolienta.',
      opciones:[
        { txt:'Glucemia, gasometría y cetonas ahora', sig:'labs', pts:5, retro:'Llegaste al diagnóstico, con un retraso que costó caro. El dolor abdominal con Kussmaul y poliuria es cetoacidosis hasta demostrar lo contrario.' }
      ]
    },
    antiemetico:{
      texto:'Tres horas después la paciente está obnubilada, con respiración profunda y tensión de 86/50.',
      opciones:[
        { txt:'Glucemia, gasometría y cetonas urgentes', sig:'labs', pts:5, retro:'Rectificaste. La respiración de Kussmaul nunca es un síntoma para tratar sin explicar.' }
      ]
    },
    final_bueno:{
      final:true, nivel:'excelente',
      texto:'La acidosis se corrige en doce horas. La paciente pasa a insulina subcutánea, recibe educación diabetológica y se va de alta con diagnóstico nuevo de diabetes tipo 1.',
      dx:'Cetoacidosis diabética como debut de diabetes tipo 1',
      analisis:'Seguiste el orden que importa: volumen, potasio, insulina. Y no te dejaste arrastrar por el dolor abdominal, que era metabólico.'
    },
    final_recuperado:{
      final:true, nivel:'aceptable',
      texto:'La paciente se recupera tras corregir el potasio, pero pasó por una hipopotasemia grave con arritmia evitable.',
      dx:'Cetoacidosis diabética como debut de diabetes tipo 1',
      analisis:'El diagnóstico fue correcto y rápido. Lo que falló fue el potasio: en la cetoacidosis el potasio total del cuerpo está bajo aunque el del laboratorio parezca normal o alto.'
    },
    final_malo:{
      final:true, nivel:'peligroso',
      texto:'La paciente presenta fibrilación ventricular por hipopotasemia grave y requiere reanimación prolongada.',
      dx:'Cetoacidosis diabética complicada con hipopotasemia iatrogénica',
      analisis:'La insulina es el tratamiento y también el riesgo: mete el potasio en la célula. Un potasio de 4.1 al inicio de la cetoacidosis significa depleción, no normalidad.'
    }
  }
},

{
  id:'CL-06',
  titulo:'El lactante que dejó de comer',
  esp:'Pediatría', dif:4,
  ref:'AIEPI clínico, evaluación del lactante menor de 2 meses; OMS, manejo de la sepsis neonatal; Nelson, Tratado de Pediatría, 22.ª ed.',
  resumen:'Lactante de 21 días traído por la madre porque "no quiere pecho y está flojito".',
  paciente:{ edad:0, sexo:'Masculino', motivo:'"Desde ayer no quiere pecho y lo veo caidito"' },
  vitales:{ TA:'—', FC:'178', FR:'62', T:'35.4 °C', Sat:'94%' },
  nodos:{
    inicio:{
      texto:'Veintiún días de vida, parto en casa, sin controles. Está hipoactivo, con llanto débil y frío al tacto. El llenado capilar es de 4 segundos. ¿Qué haces?',
      opciones:[
        { txt:'Tratarlo como sepsis neonatal: accesos, cultivos y antibióticos ya', sig:'sepsis', pts:30, retro:'Correcto. Un neonato hipoactivo, con hipotermia y mala perfusión es sepsis hasta demostrar lo contrario, y el tiempo hasta el antibiótico decide el pronóstico.' },
        { txt:'Pedir hemograma y esperar el resultado para decidir', sig:'espera_labs', pts:-25, retro:'El hemograma en un neonato séptico puede ser normal. Esperarlo para empezar antibióticos pierde las horas que más pesan.' },
        { txt:'Indicar a la madre técnicas de lactancia y citar en 24 horas', sig:'alta', pts:-35, retro:'El rechazo del alimento en un neonato es un signo de alarma, no un problema de técnica. Esta decisión puede costar la vida.' },
        { txt:'Abrigarlo y reevaluar la temperatura en una hora', sig:'abrigo', pts:-20, retro:'La hipotermia en el neonato no es frío ambiental: es un signo de infección grave tan serio como la fiebre.' }
      ]
    },
    sepsis:{
      texto:'Canalizas, tomas hemocultivo y das el primer bolo de suero. ¿Qué antibióticos eliges?',
      opciones:[
        { txt:'Ampicilina más gentamicina', sig:'puncion', pts:30, retro:'Correcto. Cubre estreptococo del grupo B, Listeria y gramnegativos entéricos, que son los patógenos del neonato.' },
        { txt:'Ceftriaxona sola', sig:'ceftriaxona', pts:-20, retro:'Dos problemas: no cubre Listeria, y la ceftriaxona desplaza la bilirrubina en el neonato y puede provocar kernícterus.' },
        { txt:'Vancomicina sola', sig:'vanco', pts:-15, retro:'Deja sin cubrir los gramnegativos, que son causa frecuente de sepsis neonatal tardía.' }
      ]
    },
    puncion:{
      texto:'El niño mejora la perfusión tras dos bolos. ¿Haces punción lumbar?',
      opciones:[
        { txt:'Sí, forma parte del estudio completo de sepsis neonatal', sig:'final_bueno', pts:25, retro:'Correcto. Hasta un tercio de las sepsis neonatales cursan con meningitis, y eso cambia la dosis y la duración del tratamiento.' },
        { txt:'No, ya está con antibióticos y eso basta', sig:'final_regular', pts:-15, retro:'Sin punción no sabes si hay meningitis, y el tratamiento de la meningitis neonatal es más largo y a dosis más altas.' }
      ]
    },
    ceftriaxona:{
      texto:'A las 12 horas el niño sigue hipoactivo y aparece ictericia progresiva.',
      opciones:[
        { txt:'Cambiar a ampicilina más gentamicina', sig:'puncion', pts:10, retro:'Bien corregido. En el neonato, cefotaxima si hace falta cefalosporina, nunca ceftriaxona.' }
      ]
    },
    vanco:{
      texto:'A las 18 horas el hemocultivo informa bacilos gramnegativos y el niño está peor.',
      opciones:[
        { txt:'Añadir cobertura para gramnegativos', sig:'puncion', pts:10, retro:'Correcto. La cobertura empírica del neonato tiene que incluir gramnegativos desde el primer momento.' }
      ]
    },
    espera_labs:{
      texto:'El hemograma vuelve en dos horas: leucocitos 4.200, con 18% de bandas. El niño está más hipotenso.',
      opciones:[
        { txt:'Antibióticos y volumen ahora', sig:'sepsis', pts:5, retro:'Llegaste. Fíjate en que los leucocitos estaban casi normales: en el neonato la leucopenia es peor señal que la leucocitosis.' }
      ]
    },
    abrigo:{
      texto:'Una hora después la temperatura sigue en 35.6 °C y el niño responde menos a estímulos.',
      opciones:[
        { txt:'Tratar como sepsis: accesos, cultivos y antibióticos', sig:'sepsis', pts:5, retro:'Correcto, con retraso. La hipotermia que no corrige con abrigo en un neonato es infección.' }
      ]
    },
    alta:{
      texto:'La madre regresa ocho horas después con el niño en shock, sin respuesta a estímulos.',
      opciones:[
        { txt:'Reanimación completa y antibióticos inmediatos', sig:'final_malo', pts:0, retro:'El rechazo del pecho, la hipotermia y el llanto débil eran tres signos de alarma juntos. En el menor de dos meses no existe el alta sin descartar infección grave.' }
      ]
    },
    final_bueno:{
      final:true, nivel:'excelente',
      texto:'El hemocultivo aísla estreptococo del grupo B. El líquido cefalorraquídeo es normal. El niño completa diez días de tratamiento y se va de alta sin secuelas.',
      dx:'Sepsis neonatal tardía por estreptococo del grupo B',
      analisis:'Reconociste la sepsis por signos inespecíficos, tratabas antes de tener resultados y completaste el estudio. En el neonato, esperar confirmación es perder.'
    },
    final_regular:{
      final:true, nivel:'aceptable',
      texto:'El niño mejora, pero a los cuatro días reaparece la irritabilidad y una punción lumbar tardía muestra meningitis, obligando a reiniciar el conteo del tratamiento.',
      dx:'Sepsis neonatal con meningitis no diagnosticada inicialmente',
      analisis:'El tratamiento empírico fue correcto. Lo que faltó fue completar el estudio: sin punción lumbar no sabes cuántos días tratar.'
    },
    final_malo:{
      final:true, nivel:'peligroso',
      texto:'El niño llega en shock séptico refractario y no responde a la reanimación.',
      dx:'Sepsis neonatal tardía con shock séptico',
      analisis:'Ningún examen habría cambiado tanto el desenlace como no haber dado el alta. En el neonato, los signos son inespecíficos y por eso el umbral para tratar es bajísimo.'
    }
  }
},

{
  id:'CL-07',
  titulo:'Sangrado después del parto',
  esp:'Ginecología y Obstetricia', dif:4,
  ref:'OMS, recomendaciones para la prevención y el tratamiento de la hemorragia posparto; FIGO, guía de hemorragia posparto. Williams Obstetricia, 26.ª ed.',
  resumen:'Puérpera inmediata con sangrado abundante tras parto vaginal de un recién nacido de 4.100 g.',
  paciente:{ edad:31, sexo:'Femenino', motivo:'Sangrado vaginal abundante diez minutos después del alumbramiento' },
  vitales:{ TA:'96/58', FC:'118', FR:'22', T:'36.7 °C', Sat:'98%' },
  nodos:{
    inicio:{
      texto:'Parto vaginal hace quince minutos, recién nacido de 4.100 g, trabajo de parto prolongado. Sangrado rojo continuo. ¿Qué haces primero?',
      opciones:[
        { txt:'Masaje uterino bimanual y comprobar el tono', sig:'tono', pts:30, retro:'Correcto. La atonía causa la mayoría de las hemorragias posparto, y el tono se evalúa y se trata con las manos antes que con nada.' },
        { txt:'Pedir cruce de sangre y esperar', sig:'espera', pts:-20, retro:'Pedir sangre está bien, pero como única acción deja a la paciente sangrando mientras llega. La hemorragia posparto se trata mientras se pide ayuda.' },
        { txt:'Llevar a quirófano para histerectomía', sig:'quirofano_pronto', pts:-25, retro:'La histerectomía es el último recurso, no el primero. Hay varios pasos reversibles antes que preservan la fertilidad.' },
        { txt:'Revisar el canal del parto buscando desgarros', sig:'canal', pts:10, retro:'Es una de las cuatro causas y hay que revisarlo, pero el útero se palpa primero: la atonía es la causa más frecuente y la más rápida de corregir.' }
      ]
    },
    tono:{
      texto:'El útero está blando y por encima del ombligo: es atonía. El masaje lo contrae parcialmente pero vuelve a relajarse. ¿Qué usas?',
      opciones:[
        { txt:'Oxitocina en infusión', sig:'oxitocina', pts:30, retro:'Correcto. La oxitocina es el uterotónico de primera línea.' },
        { txt:'Ergonovina de entrada', sig:'ergonovina', pts:5, retro:'Es un uterotónico válido, pero va en segunda línea y está contraindicado si hay hipertensión. La oxitocina es el primer escalón.' },
        { txt:'Misoprostol como único fármaco', sig:'miso', pts:0, retro:'El misoprostol es la alternativa cuando no hay oxitocina disponible. Teniéndola, es el segundo recurso, no el primero.' }
      ]
    },
    oxitocina:{
      texto:'El sangrado disminuye pero no cesa. La tensión es de 92/54 y la frecuencia de 122. ¿Cuál es tu siguiente paso?',
      opciones:[
        { txt:'Segundo uterotónico, ácido tranexámico y reponer volumen', sig:'escalar', pts:30, retro:'Exacto. Se escalan uterotónicos, se añade tranexámico dentro de las tres primeras horas y se repone en paralelo. Todo a la vez, no en fila.' },
        { txt:'Repetir la misma dosis de oxitocina y esperar', sig:'repetir', pts:-15, retro:'Repetir lo que no funcionó pierde tiempo. Cuando un escalón falla, se sube al siguiente.' },
        { txt:'Histerectomía ahora', sig:'quirofano_pronto', pts:-20, retro:'Quedan pasos por delante: balón de taponamiento, suturas compresivas, ligadura de arterias. La histerectomía cierra la fertilidad para siempre.' }
      ]
    },
    escalar:{
      texto:'Con el segundo uterotónico y el tranexámico el sangrado baja mucho, pero el útero sigue sin contraerse del todo. ¿Qué haces?',
      opciones:[
        { txt:'Balón de taponamiento intrauterino', sig:'final_bueno', pts:30, retro:'Correcto. El taponamiento con balón controla la mayoría de las atonías que no responden a fármacos y evita el quirófano.' },
        { txt:'Esperar otros treinta minutos', sig:'final_regular', pts:-20, retro:'En una hemorragia que no cede, esperar es la decisión que más pacientes cuesta.' },
        { txt:'Pasar directo a histerectomía', sig:'final_regular', pts:-10, retro:'Te saltaste el balón y las suturas compresivas, que son reversibles y funcionan en la mayoría de los casos.' }
      ]
    },
    repetir:{
      texto:'Quince minutos después el sangrado persiste y la tensión baja a 84/50.',
      opciones:[
        { txt:'Escalar: segundo uterotónico, tranexámico y volumen', sig:'escalar', pts:10, retro:'Correcto. La hemorragia posparto se maneja subiendo escalones sin pausas.' }
      ]
    },
    ergonovina:{
      texto:'La paciente no era hipertensa y el útero responde parcialmente. El sangrado continúa.',
      opciones:[
        { txt:'Añadir oxitocina, tranexámico y reponer volumen', sig:'escalar', pts:15, retro:'Bien. El orden importa menos que no detenerse, pero conviene conocer los escalones.' }
      ]
    },
    miso:{
      texto:'El misoprostol tarda en actuar y el sangrado sigue. La paciente está pálida y ansiosa.',
      opciones:[
        { txt:'Oxitocina en infusión y escalar', sig:'escalar', pts:10, retro:'Correcto. Con oxitocina disponible, el misoprostol no debe ser el primer recurso.' }
      ]
    },
    canal:{
      texto:'No encuentras desgarros significativos. El útero se palpa blando y grande.',
      opciones:[
        { txt:'Masaje uterino y oxitocina: es atonía', sig:'oxitocina', pts:20, retro:'Correcto. Descartar el canal está bien; ahora trata la causa más frecuente.' }
      ]
    },
    espera:{
      texto:'Cinco minutos después la paciente ha perdido otros 400 mL y está más taquicárdica.',
      opciones:[
        { txt:'Masaje uterino y uterotónicos ahora', sig:'tono', pts:5, retro:'Correcto. En la hemorragia posparto se actúa y se pide ayuda a la vez, nunca en secuencia.' }
      ]
    },
    quirofano_pronto:{
      texto:'En quirófano, antes de la incisión, el anestesiólogo pregunta si se intentaron el balón y las suturas compresivas.',
      opciones:[
        { txt:'Intentar balón y suturas compresivas primero', sig:'final_bueno', pts:15, retro:'Buena rectificación. La histerectomía obstétrica es definitiva e irreversible: antes se agotan los pasos conservadores.' },
        { txt:'Continuar con la histerectomía', sig:'final_regular', pts:-20, retro:'Se controló el sangrado, pero a costa de la fertilidad de una mujer de 31 años cuando quedaban opciones.' }
      ]
    },
    final_bueno:{
      final:true, nivel:'excelente',
      texto:'El balón controla el sangrado. La paciente recibe dos unidades de concentrado de hematíes, se estabiliza y conserva el útero.',
      dx:'Hemorragia posparto por atonía uterina',
      analisis:'Palpaste el útero primero, escalaste sin pausas y usaste el recurso conservador antes del definitivo. Así se trata una atonía.'
    },
    final_regular:{
      final:true, nivel:'aceptable',
      texto:'El sangrado se controla, pero la paciente pierde el útero o requiere una transfusión masiva que se podría haber evitado.',
      dx:'Hemorragia posparto por atonía uterina',
      analisis:'La paciente vive, que es lo primero. Lo que se perdió por el camino fue tiempo o fertilidad, y ambos eran recuperables con los escalones intermedios.'
    }
  }
},

{
  id:'CL-08',
  titulo:'Dolor abdominal que cambió de sitio',
  esp:'Cirugía', dif:3,
  ref:'Escala de Alvarado; Sabiston, Tratado de Cirugía, 21.ª ed.; guías de la World Society of Emergency Surgery sobre apendicitis aguda.',
  resumen:'Varón de 24 años con dolor periumbilical que migró a la fosa ilíaca derecha.',
  paciente:{ edad:24, sexo:'Masculino', motivo:'"Me empezó a doler arriba del ombligo y ahora es aquí abajo"' },
  vitales:{ TA:'124/76', FC:'96', FR:'18', T:'37.8 °C', Sat:'99%' },
  nodos:{
    inicio:{
      texto:'Dolor de 14 horas de evolución, que empezó periumbilical y migró a la fosa ilíaca derecha. Náuseas, sin apetito. ¿Qué haces primero?',
      opciones:[
        { txt:'Exploración abdominal completa y escala de Alvarado', sig:'alvarado', pts:30, retro:'Correcto. La apendicitis es un diagnóstico clínico, y la migración del dolor es su dato más característico.' },
        { txt:'Tomografía de abdomen directamente', sig:'tac', pts:5, retro:'La tomografía ayuda en casos dudosos, pero con esta historia tan típica en un varón joven no debería ser el primer paso ni retrasar la cirugía.' },
        { txt:'Analgesia potente y reevaluar en seis horas', sig:'analgesia', pts:-10, retro:'La analgesia no está prohibida y no borra los signos, pero diferir la evaluación seis horas en una apendicitis de 14 horas acerca la perforación.' },
        { txt:'Antibióticos y alta con control ambulatorio', sig:'alta', pts:-30, retro:'Mandar a casa una apendicitis con antibióticos sin evaluación quirúrgica es exponer al paciente a una perforación fuera del hospital.' }
      ]
    },
    alvarado:{
      texto:'Blumberg positivo, dolor a la palpación en el punto de McBurney, leucocitos 14.800 con neutrofilia. Alvarado de 8. ¿Qué haces?',
      opciones:[
        { txt:'Interconsulta a cirugía para apendicectomía', sig:'cirugia', pts:30, retro:'Correcto. Con Alvarado de 8 en un varón joven, la probabilidad es tan alta que la imagen no cambia la conducta.' },
        { txt:'Tomografía para confirmar antes de operar', sig:'tac_tarde', pts:10, retro:'No es un error, pero en un varón joven con Alvarado alto la tomografía añade radiación y demora sin cambiar la decisión.' },
        { txt:'Repetir el hemograma en seis horas', sig:'analgesia', pts:-20, retro:'La observación seriada es para casos dudosos, no para un Alvarado de 8.' }
      ]
    },
    cirugia:{
      texto:'Cirugía acepta al paciente. ¿Indicas antibióticos antes de la operación?',
      opciones:[
        { txt:'Sí, profilaxis dentro de la hora previa a la incisión', sig:'final_bueno', pts:25, retro:'Correcto. La profilaxis antibiótica preoperatoria reduce la infección del sitio quirúrgico.' },
        { txt:'No, para no enmascarar el cuadro', sig:'final_regular', pts:-10, retro:'Mito frecuente. Con la decisión quirúrgica ya tomada, el antibiótico no enmascara nada y sí previene infecciones.' }
      ]
    },
    tac:{
      texto:'La tomografía muestra apéndice de 11 mm con cambios inflamatorios periapendiculares. Han pasado tres horas.',
      opciones:[
        { txt:'Interconsulta a cirugía ahora', sig:'cirugia', pts:15, retro:'Correcto. El diagnóstico se confirmó, aunque la clínica ya lo decía.' }
      ]
    },
    tac_tarde:{
      texto:'La tomografía confirma apendicitis aguda no complicada.',
      opciones:[
        { txt:'A quirófano con profilaxis antibiótica', sig:'final_bueno', pts:20, retro:'Bien. La confirmación no cambió la conducta, que es exactamente lo que se preveía.' }
      ]
    },
    analgesia:{
      texto:'Seis horas después el dolor se generalizó, hay defensa abdominal difusa y la temperatura es de 38.9 °C.',
      opciones:[
        { txt:'Cirugía urgente por sospecha de perforación', sig:'final_recuperado', pts:10, retro:'Correcto. El dolor que se generaliza con defensa difusa habla de peritonitis.' }
      ]
    },
    alta:{
      texto:'El paciente regresa a las 30 horas con abdomen en tabla, fiebre de 39.2 °C e hipotensión.',
      opciones:[
        { txt:'Reanimación, antibióticos de amplio espectro y cirugía urgente', sig:'final_malo', pts:0, retro:'Una apendicitis perforada con peritonitis difusa. La migración del dolor era el dato que obligaba a evaluación quirúrgica desde el principio.' }
      ]
    },
    final_bueno:{
      final:true, nivel:'excelente',
      texto:'Apendicectomía laparoscópica de una apendicitis flemonosa no perforada. Alta al día siguiente sin complicaciones.',
      dx:'Apendicitis aguda no complicada',
      analisis:'Diagnosticaste por la clínica, no pediste imágenes que no cambiaban nada y operaste dentro de la ventana. Así de simple debe ser.'
    },
    final_regular:{
      final:true, nivel:'aceptable',
      texto:'La cirugía es exitosa, pero el paciente desarrolla una infección superficial de la herida que prolonga su estancia.',
      dx:'Apendicitis aguda no complicada',
      analisis:'El diagnóstico y el tiempo fueron correctos. La profilaxis antibiótica es barata y evita justo esto.'
    },
    final_recuperado:{
      final:true, nivel:'aceptable',
      texto:'Se opera una apendicitis perforada. El paciente requiere cinco días de antibióticos y una estancia más larga, pero evoluciona bien.',
      dx:'Apendicitis aguda perforada',
      analisis:'La demora convirtió una cirugía sencilla en una complicada. En la apendicitis, el reloj es parte del diagnóstico.'
    },
    final_malo:{
      final:true, nivel:'peligroso',
      texto:'Peritonitis difusa con sepsis abdominal. El paciente necesita cuidados intensivos y varias semanas de recuperación.',
      dx:'Apendicitis aguda perforada con peritonitis y sepsis',
      analisis:'El cuadro clínico era de libro. Un dolor que migra al cuadrante inferior derecho con fiebre y anorexia no se va a casa sin que lo vea un cirujano.'
    }
  }
},

{
  id:'CL-09',
  titulo:'La receta que no cuadraba',
  esp:'Farmacología', dif:3,
  ref:'Guías de anticoagulación de la ACC/AHA; ficha técnica de warfarina e interacciones del citocromo CYP2C9. Goodman & Gilman, 14.ª ed.',
  resumen:'Mujer de 68 años anticoagulada con warfarina que acude por hematomas y gingivorragia.',
  paciente:{ edad:68, sexo:'Femenino', motivo:'"Me salen moretones sin golpearme y me sangran las encías"' },
  vitales:{ TA:'132/78', FC:'82', FR:'16', T:'36.6 °C', Sat:'98%' },
  nodos:{
    inicio:{
      texto:'Fibrilación auricular, con warfarina estable desde hace dos años. Hematomas en brazos y sangrado gingival desde hace cuatro días. ¿Qué haces primero?',
      opciones:[
        { txt:'Pedir INR y repasar toda su medicación reciente', sig:'inr', pts:30, retro:'Correcto. En un paciente anticoagulado estable que empieza a sangrar, la causa casi siempre es una interacción nueva.' },
        { txt:'Suspender la warfarina y citar en una semana', sig:'suspender', pts:-15, retro:'Suspender sin saber el INR ni la causa deja a la paciente sin protección frente al ictus y sin resolver el problema.' },
        { txt:'Dar vitamina K de inmediato', sig:'vitk', pts:-20, retro:'Sin conocer el INR ni la magnitud del sangrado, la vitamina K puede llevarla al extremo contrario y dificultar reanticoagularla.' },
        { txt:'Transfundir plasma fresco congelado', sig:'plasma', pts:-25, retro:'El plasma se reserva para sangrado grave. Aquí no hay inestabilidad ni sangrado mayor, y expones a la paciente a riesgos sin necesidad.' }
      ]
    },
    inr:{
      texto:'INR de 7.8. Sin sangrado mayor, hemodinámicamente estable. Al repasar la medicación, la paciente recibió hace ocho días un antibiótico por una infección urinaria. ¿Cuál sospechas?',
      opciones:[
        { txt:'Trimetoprim-sulfametoxazol', sig:'tmp', pts:30, retro:'Exacto. Inhibe el CYP2C9 y desplaza la warfarina de la albúmina: es de las interacciones más potentes y frecuentes.' },
        { txt:'Nitrofurantoína', sig:'otro_ab', pts:5, retro:'Es un antibiótico urinario común, pero su interacción con la warfarina es mucho menos relevante.' },
        { txt:'Fosfomicina', sig:'otro_ab', pts:5, retro:'Apenas interactúa con la warfarina. Conviene buscar el fármaco con interacción conocida.' }
      ]
    },
    tmp:{
      texto:'Confirmado: recibió trimetoprim-sulfametoxazol. INR 7.8, sin sangrado mayor. ¿Cuál es tu conducta?',
      opciones:[
        { txt:'Suspender warfarina, dar vitamina K oral en dosis baja y controlar el INR', sig:'final_bueno', pts:30, retro:'Correcto. Con INR superior a 4.5 sin sangrado mayor, se suspende y se usa vitamina K oral a dosis baja, no intravenosa ni plasma.' },
        { txt:'Solo suspender la warfarina y controlar', sig:'final_regular', pts:10, retro:'Es aceptable en INR algo elevados, pero con 7.8 la vitamina K oral acorta mucho el tiempo en rango peligroso.' },
        { txt:'Vitamina K intravenosa en dosis alta', sig:'final_regular', pts:-15, retro:'Sobrecorrige. Dejará a la paciente resistente a la warfarina durante días y sin anticoagulación frente a su fibrilación auricular.' },
        { txt:'Concentrado de complejo protrombínico', sig:'final_regular', pts:-20, retro:'Está indicado en sangrado que amenaza la vida. Aquí es desproporcionado y añade riesgo trombótico.' }
      ]
    },
    otro_ab:{
      texto:'Revisas de nuevo la receta: el antibiótico prescrito fue trimetoprim-sulfametoxazol.',
      opciones:[
        { txt:'Es la interacción responsable: actuar en consecuencia', sig:'tmp', pts:10, retro:'Bien. Ante un INR descontrolado en paciente estable, el primer sospechoso es siempre un fármaco nuevo.' }
      ]
    },
    suspender:{
      texto:'A los cinco días la paciente acude de nuevo: los hematomas siguen y ahora refiere debilidad en el brazo derecho de una hora de evolución.',
      opciones:[
        { txt:'Evaluar como ictus agudo y revisar el INR', sig:'final_malo', pts:0, retro:'Suspender un anticoagulante sin control ni plan deja al paciente expuesto al evento que el fármaco prevenía.' }
      ]
    },
    vitk:{
      texto:'Al día siguiente el INR es de 1.1. La paciente está sin anticoagulación efectiva y con fibrilación auricular.',
      opciones:[
        { txt:'Reiniciar anticoagulación con control estrecho', sig:'final_regular', pts:5, retro:'Recuperable. La lección es que la vitamina K se dosifica según el INR y el sangrado, no a ojo.' }
      ]
    },
    plasma:{
      texto:'La paciente recibe plasma y presenta disnea y sobrecarga de volumen durante la transfusión.',
      opciones:[
        { txt:'Detener la transfusión, tratar la sobrecarga y reevaluar', sig:'final_regular', pts:5, retro:'El plasma no es inocuo: sobrecarga de volumen y reacciones transfusionales. Se reserva para sangrado grave.' }
      ]
    },
    final_bueno:{
      final:true, nivel:'excelente',
      texto:'El INR baja a 2.4 en 48 horas sin sangrado adicional. Se reinicia la warfarina con ajuste de dosis y se anota la interacción en su historia.',
      dx:'Sobreanticoagulación por interacción entre warfarina y trimetoprim-sulfametoxazol',
      analisis:'Buscaste la causa antes de corregir el número, y corregiste con la intensidad que el caso pedía, ni más ni menos.'
    },
    final_regular:{
      final:true, nivel:'aceptable',
      texto:'La paciente no sufre sangrado grave, pero pasa varios días fuera de rango terapéutico.',
      dx:'Sobreanticoagulación por interacción farmacológica',
      analisis:'El problema se resolvió. Lo que faltó fue calibrar: en anticoagulación, corregir de más es tan problemático como corregir de menos.'
    },
    final_malo:{
      final:true, nivel:'peligroso',
      texto:'La paciente presenta un ictus isquémico cardioembólico con secuela motora.',
      dx:'Ictus cardioembólico tras suspensión no controlada de la anticoagulación',
      analisis:'Suspender un anticoagulante es una decisión activa con riesgo propio. Hay que saber por qué se suspende, por cuánto tiempo y qué protege al paciente mientras tanto.'
    }
  }
},

{
  id:'CL-10',
  titulo:'El paciente que no quiere la transfusión',
  esp:'Bioética', dif:4,
  ref:'Ley General de Salud de la República Dominicana, capítulo de derechos del paciente; Declaración de la AMM sobre consentimiento informado. Beauchamp y Childress, Principios de ética biomédica.',
  resumen:'Varón de 42 años, consciente y orientado, rechaza una transfusión por motivos religiosos.',
  paciente:{ edad:42, sexo:'Masculino', motivo:'Hemorragia digestiva alta, rechaza hemoderivados' },
  vitales:{ TA:'102/64', FC:'104', FR:'18', T:'36.5 °C', Sat:'97%' },
  nodos:{
    inicio:{
      texto:'Hemoglobina de 6.8 g/dL por hemorragia digestiva alta ya controlada endoscópicamente. Está consciente, orientado y lúcido. Rechaza la transfusión por su fe. ¿Qué haces?',
      opciones:[
        { txt:'Evaluar su capacidad de decisión y documentar el rechazo informado', sig:'capacidad', pts:30, retro:'Correcto. Lo primero es verificar que comprende su situación y las consecuencias; un adulto capaz puede rechazar cualquier tratamiento.' },
        { txt:'Transfundir de todas formas: su vida está en riesgo', sig:'transfundir', pts:-35, retro:'Transfundir a un adulto capaz que rechaza es una agresión, por bienintencionada que sea. La autonomía no se suspende porque el médico discrepe.' },
        { txt:'Pedir a la familia que decida por él', sig:'familia', pts:-25, retro:'La familia no sustituye a un paciente capaz. Solo decide cuando el paciente no puede hacerlo y no dejó voluntades expresas.' },
        { txt:'Darle el alta voluntaria por rechazar el tratamiento', sig:'alta', pts:-30, retro:'Rechazar una intervención no es rechazar toda la atención. Abandonarlo es incumplir el deber de cuidado.' }
      ]
    },
    capacidad:{
      texto:'Comprende su diagnóstico, el riesgo de muerte y las alternativas. Mantiene su decisión con calma y coherencia. ¿Cuál es tu siguiente paso?',
      opciones:[
        { txt:'Ofrecer todas las alternativas sin hemoderivados y seguir tratándolo', sig:'alternativas', pts:30, retro:'Exacto. Respetar el rechazo no significa dejar de tratar: hierro intravenoso, eritropoyetina, ahorro de sangre y vigilancia estrecha.' },
        { txt:'Insistir repetidamente hasta que cambie de opinión', sig:'insistir', pts:-20, retro:'Informar es obligatorio; presionar es coacción. La diferencia está en si buscas que entienda o que ceda.' },
        { txt:'Consultar al comité de ética antes de hacer nada más', sig:'comite', pts:5, retro:'El comité es un apoyo legítimo, pero no debe paralizar el tratamiento activo que el paciente sí acepta.' }
      ]
    },
    alternativas:{
      texto:'Acepta hierro intravenoso, eritropoyetina y medidas de ahorro de sangre. A las 36 horas la hemoglobina baja a 5.4 g/dL y comienza a estar somnoliento y confuso. ¿Qué haces?',
      opciones:[
        { txt:'Respetar el rechazo previo documentado y seguir con las alternativas', sig:'final_bueno', pts:30, retro:'Correcto. Su rechazo fue hecho con capacidad plena y quedó documentado: la pérdida de conciencia posterior no lo anula, lo confirma como voluntad anticipada.' },
        { txt:'Transfundir ahora que no puede oponerse', sig:'final_malo', pts:-35, retro:'Aprovechar la pérdida de capacidad para hacer lo que rechazó estando lúcido es una violación grave de su autonomía.' },
        { txt:'Preguntar a la familia ahora que él no puede decidir', sig:'final_regular', pts:-10, retro:'Cuando existe una voluntad previa clara y documentada del propio paciente, esa voluntad manda sobre la opinión familiar.' }
      ]
    },
    insistir:{
      texto:'El paciente se muestra incómodo y pide que no se le insista más. Mantiene su decisión.',
      opciones:[
        { txt:'Aceptar la decisión y ofrecer las alternativas disponibles', sig:'alternativas', pts:15, retro:'Correcto. El límite entre informar y presionar se cruza cuando el paciente ya ha entendido y decidido.' }
      ]
    },
    comite:{
      texto:'El comité confirma que el paciente es capaz y que su rechazo debe respetarse, y recomienda agotar las alternativas.',
      opciones:[
        { txt:'Iniciar las alternativas sin hemoderivados', sig:'alternativas', pts:20, retro:'Bien. El comité ayuda a sostener decisiones difíciles, pero la conducta clínica no se detiene mientras tanto.' }
      ]
    },
    transfundir:{
      texto:'El paciente descubre la transfusión, presenta gran angustia moral y presenta una queja formal contra el hospital.',
      opciones:[
        { txt:'Reconocer el error, documentarlo y remitir el caso al comité de ética', sig:'final_malo', pts:0, retro:'La transfusión forzada a un adulto capaz constituye una vulneración de su autonomía, con consecuencias legales y morales.' }
      ]
    },
    familia:{
      texto:'La familia pide que se transfunda. El paciente, presente y lúcido, reitera su rechazo.',
      opciones:[
        { txt:'Respetar al paciente y explicar a la familia el marco de la decisión', sig:'alternativas', pts:15, retro:'Correcto. Mientras el paciente sea capaz, su voluntad es la que vale.' }
      ]
    },
    alta:{
      texto:'El paciente se va a casa y regresa a las 20 horas con hemoglobina de 4.9 g/dL y alteración de la conciencia.',
      opciones:[
        { txt:'Ingresar y tratar con todas las alternativas sin hemoderivados', sig:'final_regular', pts:5, retro:'Rectificaste. Rechazar un tratamiento concreto nunca justifica retirar el resto de la atención.' }
      ]
    },
    final_bueno:{
      final:true, nivel:'excelente',
      texto:'Con hierro intravenoso, eritropoyetina y medidas de soporte, la hemoglobina se recupera lentamente. El paciente se va de alta a los nueve días.',
      dx:'Anemia grave por hemorragia digestiva en paciente que rechaza hemoderivados',
      analisis:'Verificaste la capacidad, documentaste, ofreciste todo lo demás y sostuviste la decisión cuando se volvió incómoda. Respetar la autonomía no es abandonar: es tratar dentro de los límites que el paciente pone.'
    },
    final_regular:{
      final:true, nivel:'aceptable',
      texto:'El paciente sobrevive, pero el proceso incluyó decisiones que no respetaron plenamente su voluntad o retrasaron su atención.',
      dx:'Anemia grave en paciente que rechaza hemoderivados',
      analisis:'El desenlace fue aceptable. Lo que quedó flojo fue el procedimiento: la ética clínica se juega en cómo se decide, no solo en cómo termina.'
    },
    final_malo:{
      final:true, nivel:'peligroso',
      texto:'El caso deriva en un conflicto ético y legal, con daño moral al paciente y pérdida de confianza en el equipo.',
      dx:'Vulneración del derecho al rechazo informado',
      analisis:'Un adulto capaz puede rechazar un tratamiento aunque su decisión nos parezca equivocada. La alternativa a respetarlo no es salvarlo: es decidir por él, que es exactamente lo que la medicina moderna dejó atrás.'
    }
  }
}

]);
