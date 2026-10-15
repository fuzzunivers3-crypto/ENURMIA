/* ============================================================
   UNIRMIA — CASOS PRÁCTICOS PASO A PASO
   ------------------------------------------------------------
   Ver datos/asignaturas-unirm.js: en 7mo y 8vo el programa es
   ciencias basicas (mecanismos, estructuras, rutas), NO clinica
   con paciente. En 9no ya entra semiologia y ahi si aplica el
   formato clinico. Por eso cada caso trae `tipo`:

     'mecanismo' -> `escena` describe el contexto/proceso (no un
                    paciente) y `panel` son variables del sistema
                    (no signos vitales). Motor: mismo arbol de
                    decisiones que 'clinico', otra piel.
     'clinico'   -> igual que los casos de ENURMIA/Clinica.js:
                    `escena` es el paciente, `panel` son vitales.

   Cada nodo: { texto, opciones:[{txt, pts, retro, sig}] }
   Nodo final: { final:true, nivel, texto, dx, ensena }
   `dx` se rotula "Concepto clave" en mecanismo y "Diagnóstico" en
   clinico (lo decide el motor, ver casos-unirm.js de vistas/).
   ============================================================ */
window.CASOS_UNIRM = [

  {
    id: 'UP-701-glucolisis',
    esp: 'Bioquímica I',
    cuatrimestre: 7,
    tipo: 'mecanismo',
    titulo: 'Glucólisis en el músculo durante el esfuerzo máximo',
    resumen: 'Sigue el destino del piruvato cuando el músculo no tiene suficiente oxígeno.',
    dif: 2,
    escena: { rotulo: 'Fibra muscular esquelética',
      detalle: 'Sprint de 30 segundos a máxima intensidad. El aporte de oxígeno no alcanza a cubrir la demanda energética.' },
    panel: { 'ATP muscular':'Cayendo', 'O2 disponible':'Insuficiente', 'NADH citosólico':'Acumulándose' },
    nodos: {
      inicio: {
        texto: 'La glucólisis acaba de producir 2 piruvatos y 2 NADH por cada glucosa. El NAD+ citosólico se está agotando y la glucólisis necesita NAD+ para seguir funcionando. ¿Qué pasa con el piruvato en esta condición?',
        opciones: [
          { txt:'Entra a la mitocondria y sigue el ciclo de Krebs', pts:-10,
            retro:'Ese es el destino aeróbico: necesita O2 como aceptor final de electrones en la cadena respiratoria. Aquí el O2 no alcanza.', sig:'aerobico_mal' },
          { txt:'Se reduce a lactato por la lactato deshidrogenasa (LDH)', pts:15,
            retro:'Correcto: reducir piruvato a lactato regenera el NAD+ que la glucólisis necesita para seguir produciendo ATP sin oxígeno.', sig:'lactato_bien' },
          { txt:'Se convierte en acetil-CoA y sale de la célula', pts:-10,
            retro:'La piruvato deshidrogenasa es un paso mitocondrial que tampoco resuelve el problema de regenerar NAD+ en el citosol.', sig:'acetil_mal' }
        ]
      },
      aerobico_mal: {
        texto: 'Mandas el piruvato al ciclo de Krebs, pero sin suficiente O2 la cadena respiratoria se frena y el NADH mitocondrial no se reoxida. La glucólisis se detiene por falta de NAD+ citosólico.',
        opciones: [ { txt:'Reconsiderar: reducir el piruvato a lactato', pts:5,
          retro:'Así se regenera el NAD+ y el músculo puede seguir produciendo ATP anaeróbicamente.', sig:'lactato_bien' } ]
      },
      acetil_mal: {
        texto: 'La piruvato deshidrogenasa sí convierte piruvato en acetil-CoA, pero esa reacción también depende de una mitocondria bien oxigenada, y sigue sin resolver la falta de NAD+ en el citosol.',
        opciones: [ { txt:'Reconsiderar: reducir el piruvato a lactato', pts:5,
          retro:'Correcto: es la salida que no depende de oxígeno.', sig:'lactato_bien' } ]
      },
      lactato_bien: {
        texto: 'El lactato se acumula y empieza a salir de la fibra muscular hacia la sangre. ¿Qué pasa con ese lactato una vez que termina el esfuerzo?',
        opciones: [
          { txt:'Se desecha como producto de deshecho, no sirve para nada más', pts:-10,
            retro:'El lactato no es un desecho metabólico: es un sustrato energético que otros tejidos, y el hígado, pueden reutilizar.', sig:'final_incompleto' },
          { txt:'El hígado lo puede usar para regenerar glucosa (ciclo de Cori)', pts:15,
            retro:'Exacto: el lactato viaja al hígado, se reoxida a piruvato y entra en gluconeogénesis, devolviendo glucosa a la sangre.', sig:'final_completo' }
        ]
      },
      final_incompleto: { final:true, nivel:'mejorable',
        texto:'Entendiste por qué se produce lactato, pero no completaste el circuito: el lactato no termina en la basura metabólica.',
        dx:'Fermentación láctica y ciclo de Cori',
        ensena:'La glucólisis anaeróbica no es un callejón sin salida: el lactato es la forma en que el músculo "presta" energía que el hígado le devuelve después, vía gluconeogénesis.' },
      final_completo: { final:true, nivel:'excelente',
        texto:'Seguiste el camino completo: de la glucólisis sin oxígeno, a la regeneración de NAD+ vía LDH, hasta el reciclaje del lactato en el hígado.',
        dx:'Fermentación láctica y ciclo de Cori',
        ensena:'Cuando el O2 no alcanza, la prioridad de la célula no es "producir energía sin límite" sino mantener el NAD+ disponible para que la glucólisis no se detenga. El lactato es la solución temporal, no el final de la historia.' }
    }
  },

  {
    id: 'UP-802-herencia-ar',
    esp: 'Genética Médica',
    cuatrimestre: 8,
    tipo: 'mecanismo',
    titulo: 'Un patrón de herencia en tres generaciones',
    resumen: 'Dos padres sanos tienen una hija con albinismo. Razona el árbol genealógico.',
    dif: 2,
    escena: { rotulo: 'Árbol genealógico',
      detalle: 'Dos padres fenotípicamente sanos, sin antecedentes familiares conocidos, tienen una hija con albinismo oculocutáneo.' },
    panel: { 'Padre':'Fenotipo normal', 'Madre':'Fenotipo normal', 'Hija afectada':'Albinismo' },
    nodos: {
      inicio: {
        texto: 'Los dos padres tienen fenotipo normal y la hija está afectada. ¿Qué tipo de herencia es compatible con este patrón?',
        opciones: [
          { txt:'Autosómica dominante', pts:-10,
            retro:'Si fuera dominante, al menos uno de los padres tendría que mostrar el fenotipo: un solo alelo ya alcanza para expresarlo.', sig:'dominante_mal' },
          { txt:'Autosómica recesiva', pts:15,
            retro:'Correcto: dos padres sanos pueden tener un hijo afectado si ambos son portadores heterocigotos (Aa x Aa), sin mostrar el fenotipo ellos mismos.', sig:'recesiva_bien' },
          { txt:'Ligada al X', pts:-5,
            retro:'Para que una HIJA se vea afectada con herencia ligada al X recesiva, el padre tendría que estar afectado (hemicigoto) — y aquí el padre es sano.', sig:'ligada_mal' }
        ]
      },
      dominante_mal: {
        texto: 'En una herencia dominante, un solo alelo alterado ya produce el fenotipo. Si ninguno de los padres lo muestra, ninguno lleva el alelo dominante.',
        opciones: [ { txt:'Reconsiderar: herencia autosómica recesiva', pts:5,
          retro:'Así ambos padres pueden ser portadores sin estar afectados.', sig:'recesiva_bien' } ]
      },
      ligada_mal: {
        texto: 'Para que una hija sea homocigota en un gen ligado al X, tendría que recibir un alelo recesivo de cada padre — pero el padre solo tiene un X, así que si se lo transmite, él mismo estaría afectado. Como el padre es sano, esta vía no cuadra.',
        opciones: [ { txt:'Reconsiderar: herencia autosómica recesiva', pts:5,
          retro:'Correcto, ese es el patrón que sí explica el caso.', sig:'recesiva_bien' } ]
      },
      recesiva_bien: {
        texto: 'Ambos padres son heterocigotos portadores (Aa). ¿Qué probabilidad tiene cada embarazo futuro de esta pareja de nacer con el mismo fenotipo que la hija afectada?',
        opciones: [
          { txt:'25% (1 en 4)', pts:15,
            retro:'Correcto: Aa x Aa da 1 AA : 2 Aa : 1 aa — un 25% de probabilidad de ser homocigoto recesivo (afectado) en cada embarazo, independiente de los anteriores.', sig:'final_completo' },
          { txt:'50%, porque ya tuvieron una hija afectada', pts:-10,
            retro:'Cada embarazo es un evento independiente: la probabilidad no cambia porque ya haya nacido un hijo afectado.', sig:'final_incompleto' },
          { txt:'0%, porque es muy raro que se repita', pts:-10,
            retro:'El riesgo del 25% se mantiene igual en cada embarazo: no baja por "ya haber pasado".', sig:'final_incompleto' }
        ]
      },
      final_incompleto: { final:true, nivel:'mejorable',
        texto:'Identificaste bien el patrón de herencia, pero el cálculo de riesgo para el próximo embarazo no fue el correcto.',
        dx:'Herencia autosómica recesiva',
        ensena:'Cada embarazo de una pareja Aa x Aa es un evento independiente con 25% de riesgo, sin memoria de los embarazos anteriores.' },
      final_completo: { final:true, nivel:'excelente',
        texto:'Reconociste el patrón autosómico recesivo desde el primer dato (padres sanos, hija afectada) y calculaste correctamente el riesgo de recurrencia.',
        dx:'Herencia autosómica recesiva',
        ensena:'Dos progenitores sin el fenotipo pueden ser portadores silenciosos. El cociente 1:2:1 de un cruce Aa x Aa es la base de todo el consejo genético en enfermedades recesivas.' }
    }
  },

  {
    id: 'UP-903-dolor-toracico',
    esp: 'Semiología Clínica',
    cuatrimestre: 9,
    tipo: 'clinico',
    titulo: 'Un dolor de pecho que hay que caracterizar bien',
    resumen: 'Antes de pensar en causas, aprende a hacerle las preguntas correctas a un dolor torácico.',
    dif: 2,
    escena: { rotulo: '52 años, masculino', detalle: 'Llega por dolor en el pecho que comenzó hace 40 minutos.' },
    panel: { 'FC':'92 lpm', 'TA':'138/86 mmHg', 'FR':'18 rpm', 'SatO2':'97%' },
    nodos: {
      inicio: {
        texto: 'El paciente dice "me duele el pecho". Antes de examinar nada más, ¿cuál es el primer paso semiológico correcto?',
        opciones: [
          { txt:'Preguntar directamente si es un infarto', pts:-10,
            retro:'Eso es pedirle un diagnóstico, no un síntoma. El primer paso es caracterizar el dolor con sus propias palabras, no inducir una respuesta.', sig:'induce_mal' },
          { txt:'Caracterizar el dolor: localización, tipo, irradiación, intensidad, factores que lo alivian o agravan', pts:15,
            retro:'Correcto: es el abordaje semiológico clásico de cualquier dolor, y es lo que orienta el resto de la historia.', sig:'caracteriza_bien' },
          { txt:'Pedir un electrocardiograma de una vez', pts:-5,
            retro:'Un estudio complementario no sustituye la semiología: primero se caracteriza el síntoma con la entrevista, después se decide qué estudios pedir.', sig:'estudio_mal' }
        ]
      },
      induce_mal: {
        texto: 'Preguntar "¿es un infarto?" no aporta información: el paciente no puede responder eso, solo puede describir lo que siente.',
        opciones: [ { txt:'Reconsiderar: caracterizar el dolor con sus propias palabras', pts:5,
          retro:'Así se obtiene información real, no una opinión del paciente sobre su propio diagnóstico.', sig:'caracteriza_bien' } ]
      },
      estudio_mal: {
        texto: 'El electrocardiograma es útil, pero pedirlo antes de tener una historia clínica orientadora hace que no sepas qué buscar ni cómo interpretar lo que salga.',
        opciones: [ { txt:'Reconsiderar: caracterizar el dolor primero', pts:5,
          retro:'Correcto, la semiología ordena el resto del proceso.', sig:'caracteriza_bien' } ]
      },
      caracteriza_bien: {
        texto: 'El paciente describe: dolor opresivo, retroesternal, que se irradia al brazo izquierdo, apareció con el esfuerzo y disminuye en reposo. ¿Qué característica de esta descripción es la más orientadora hacia un origen cardíaco (isquémico) y no otro?',
        opciones: [
          { txt:'Que el dolor sea "opresivo" y se relacione con el esfuerzo', pts:15,
            retro:'Correcto: el carácter opresivo (no punzante ni urente) y la relación con el esfuerzo que cede con el reposo son los rasgos semiológicos más orientadores hacia origen isquémico.', sig:'final_completo' },
          { txt:'Que el dolor esté en el pecho', pts:-10,
            retro:'La localización sola no orienta nada: dolores de origen digestivo, muscular o pulmonar también se sienten "en el pecho".', sig:'final_incompleto' },
          { txt:'Que el paciente tenga 52 años', pts:-5,
            retro:'La edad es un dato de riesgo, no una característica semiológica del dolor en sí.', sig:'final_incompleto' }
        ]
      },
      final_incompleto: { final:true, nivel:'mejorable',
        texto:'Hiciste bien la entrevista, pero no identificaste con precisión qué parte de la descripción es la que realmente orienta el razonamiento clínico.',
        dx:'Semiología del dolor torácico',
        ensena:'No toda descripción de un síntoma pesa igual: el carácter del dolor y su relación con el esfuerzo son mucho más específicos que su sola localización o los datos del paciente.' },
      final_completo: { final:true, nivel:'excelente',
        texto:'Hiciste la entrevista en el orden correcto y reconociste cuáles características del dolor orientan realmente el razonamiento clínico, antes de pedir ningún estudio.',
        dx:'Semiología del dolor torácico de características isquémicas',
        ensena:'La semiología no es una lista de preguntas por cumplir: cada característica del síntoma suma o resta probabilidad a una hipótesis. Ese razonamiento va ANTES que cualquier estudio complementario.' }
    }
  },

  {
    id: 'UP-1001-abdomen-agudo',
    esp: 'Semiología Quirúrgica',
    cuatrimestre: 10,
    tipo: 'clinico',
    titulo: 'Abdomen agudo: reconocer cuándo hay que operar',
    resumen: 'Un dolor que empezó difuso y ahora se localiza. Aprende a leer los signos que separan observar de operar.',
    dif: 3,
    escena: { rotulo: '24 años, masculino',
      detalle: 'Dolor abdominal de 18 horas: empezó difuso alrededor del ombligo y en las últimas horas se localizó en la fosa ilíaca derecha.' },
    panel: { 'FC':'98 lpm', 'Temp':'38.2°C', 'TA':'126/80 mmHg', 'Apetito':'Anorexia' },
    nodos: {
      inicio: {
        texto: 'El paciente refiere que el dolor migró de periumbilical a fosa ilíaca derecha, con fiebre y anorexia. Antes de decidir nada, ¿cómo debe continuar el examen físico?',
        opciones: [
          { txt:'Auscultar primero, y palpar de superficial a profundo empezando lejos del punto doloroso', pts:15,
            retro:'Correcto: el orden semiológico del abdomen es inspección, auscultación, y palpación de superficial a profundo, dejando el área dolorosa para el final, para no provocar defensa muscular que enmascare el resto del examen.', sig:'orden_bien' },
          { txt:'Palpar profundo directamente sobre el punto de mayor dolor', pts:-10,
            retro:'Palpar profundo y de entrada sobre el punto más doloroso provoca defensa muscular voluntaria por el dolor mismo, y eso puede simular o enmascarar los verdaderos signos de irritación peritoneal.', sig:'palpa_mal' },
          { txt:'Indicar cirugía de una vez, sin terminar el examen físico', pts:-10,
            retro:'Ninguna decisión quirúrgica se toma sin completar primero la evaluación semiológica: el examen físico es el que aporta los signos que sustentan esa decisión.', sig:'salta_mal' }
        ]
      },
      palpa_mal: {
        texto: 'La defensa muscular provocada por palpar directo y profundo sobre el punto doloroso no es lo mismo que la defensa involuntaria de una irritación peritoneal real: se necesita un examen ordenado para distinguirlas.',
        opciones: [ { txt:'Reconsiderar: examinar de superficial a profundo, dejando el punto doloroso para el final', pts:5,
          retro:'Así se puede diferenciar la defensa voluntaria por dolor de la involuntaria por irritación peritoneal real.', sig:'orden_bien' } ]
      },
      salta_mal: {
        texto: 'Decidir sin completar el examen deja fuera la información que justamente sustenta o descarta una indicación quirúrgica.',
        opciones: [ { txt:'Reconsiderar: completar el examen físico ordenado primero', pts:5,
          retro:'Correcto, la decisión debe apoyarse en los hallazgos del examen completo.', sig:'orden_bien' } ]
      },
      orden_bien: {
        texto: 'Al llegar a la fosa ilíaca derecha, el paciente presenta dolor a la descompresión súbita (signo de Blumberg positivo) y contractura muscular involuntaria de esa zona. ¿Qué significan estos hallazgos?',
        opciones: [
          { txt:'Son signos de irritación peritoneal: indican un abdomen quirúrgico', pts:15,
            retro:'Correcto: el Blumberg positivo y la defensa muscular involuntaria son los signos clásicos de irritación peritoneal localizada, compatibles con un proceso inflamatorio que requiere manejo quirúrgico.', sig:'final_completo' },
          { txt:'Son hallazgos inespecíficos: hay que esperar y reevaluar en 24 horas', pts:-10,
            retro:'Esperar con signos de irritación peritoneal ya establecidos retrasa una intervención necesaria y aumenta el riesgo de perforación, lo que empeora el pronóstico considerablemente.', sig:'espera_mal' }
        ]
      },
      espera_mal: { final:true, nivel:'mejorable',
        texto:'Identificaste correctamente los signos de irritación peritoneal, pero elegiste esperar en vez de actuar sobre ellos, lo que en la práctica retrasa una intervención necesaria.',
        dx:'Apendicitis aguda con signos de irritación peritoneal',
        ensena:'Cuando el examen físico ya muestra signos de irritación peritoneal localizada, esperar no es una conducta segura: el riesgo de perforación aumenta con el tiempo, y esos signos son suficientes para decidir manejo quirúrgico sin necesidad de "confirmar" con más tiempo de observación.' },
      final_completo: { final:true, nivel:'excelente',
        texto:'Examinaste en el orden correcto, identificaste los signos de irritación peritoneal, y los interpretaste correctamente como indicación de manejo quirúrgico.',
        dx:'Apendicitis aguda con signos de irritación peritoneal',
        ensena:'La migración del dolor de periumbilical a fosa ilíaca derecha, junto con Blumberg positivo y defensa muscular involuntaria, es el patrón semiológico clásico que orienta a un abdomen quirúrgico: el examen físico ordenado es lo que permite reconocerlo con confianza.' }
    }
  },

  {
    id: 'UP-1101-fiebre-deshidratacion',
    esp: 'Pediatría I',
    cuatrimestre: 11,
    tipo: 'clinico',
    titulo: 'Fiebre y diarrea en un lactante: medir la deshidratación',
    resumen: 'Una madre preocupada porque su hijo orina poco. Aprende a clasificar la deshidratación antes de elegir cómo tratarla.',
    dif: 3,
    escena: { rotulo: '8 meses, lactante',
      detalle: 'Tres días de diarrea acuosa y fiebre. La madre refiere que orina poco y lo nota "decaído".' },
    panel: { 'FC':'150 lpm', 'Mucosas':'Secas', 'Llanto':'Sin lágrimas', 'Estado':'Letárgico' },
    nodos: {
      inicio: {
        texto: 'El lactante tiene mucosas secas, llanto sin lágrimas y está algo letárgico. Antes de decidir el tratamiento, ¿cuál es el primer paso correcto?',
        opciones: [
          { txt:'Clasificar el grado de deshidratación con los signos clínicos disponibles', pts:15,
            retro:'Correcto: la clasificación clínica (estado de conciencia, ojos, mucosas, llanto, signo del pliegue) es lo que decide si la rehidratación puede ser oral o necesita ser intravenosa.', sig:'clasifica_bien' },
          { txt:'Pedir electrolitos séricos antes de examinar al niño', pts:-5,
            retro:'Un estudio de laboratorio no sustituye la clasificación clínica inicial, que es rápida y es la que orienta la urgencia del caso mientras se esperan resultados.', sig:'lab_mal' },
          { txt:'Iniciar rehidratación oral de inmediato, sin clasificar la gravedad', pts:-10,
            retro:'La vía de rehidratación depende del grado de deshidratación: elegirla sin clasificar primero puede significar tratar por vía oral a un niño que en realidad necesita manejo intravenoso urgente.', sig:'sin_clasificar_mal' }
        ]
      },
      lab_mal: {
        texto: 'Los electrolitos son útiles pero tardan, y este niño necesita una decisión de manejo basada en lo que se observa ahora mismo.',
        opciones: [ { txt:'Reconsiderar: clasificar el grado de deshidratación con signos clínicos', pts:5,
          retro:'Así se decide la urgencia real del caso sin depender del tiempo que tarde un laboratorio.', sig:'clasifica_bien' } ]
      },
      sin_clasificar_mal: {
        texto: 'Elegir la vía de tratamiento sin clasificar primero deja fuera justo la información que decide si es segura la vía oral.',
        opciones: [ { txt:'Reconsiderar: clasificar el grado de deshidratación primero', pts:5,
          retro:'Correcto, la clasificación es el paso que no se puede saltar.', sig:'clasifica_bien' } ]
      },
      clasifica_bien: {
        texto: 'La combinación de letargia, mucosas secas y llanto sin lágrimas corresponde a deshidratación grave, no solo "algo de deshidratación". Dado esto, ¿qué vía de rehidratación es la apropiada?',
        opciones: [
          { txt:'Rehidratación intravenosa urgente, por el compromiso del estado de conciencia', pts:15,
            retro:'Correcto: la letargia es un signo de deshidratación grave; en ese escenario la vía oral no es segura ni suficientemente rápida, y se necesita reposición intravenosa urgente.', sig:'final_completo' },
          { txt:'Sales de rehidratación oral fraccionadas cada pocos minutos', pts:-10,
            retro:'La rehidratación oral es apropiada en deshidratación leve a moderada con buen estado de alerta, pero no en un niño letárgico, donde el riesgo de aspiración y la lentitud de la vía oral la hacen insegura.', sig:'oral_mal' }
        ]
      },
      oral_mal: { final:true, nivel:'mejorable',
        texto:'Clasificaste bien la deshidratación como grave, pero elegiste una vía de tratamiento que no es segura para ese grado de compromiso.',
        dx:'Deshidratación grave secundaria a gastroenteritis aguda',
        ensena:'La letargia es una señal de alarma que cambia la conducta: cuando aparece, la prioridad es la vía intravenosa urgente, no la vía oral, aunque esta última sea la preferida en cuadros más leves.' },
      final_completo: { final:true, nivel:'excelente',
        texto:'Clasificaste correctamente la deshidratación como grave a partir de los signos clínicos, y elegiste la vía de tratamiento apropiada para ese nivel de gravedad.',
        dx:'Deshidratación grave secundaria a gastroenteritis aguda',
        ensena:'La deshidratación se clasifica con signos clínicos, no con instinto: el estado de conciencia es el signo más importante de todos, y su presencia obliga a actuar con la vía más rápida disponible, sin perder tiempo con la oral.' }
    }
  },

  {
    id: 'UP-1102-preeclampsia',
    esp: 'Obstetricia I',
    cuatrimestre: 11,
    tipo: 'clinico',
    titulo: 'Preeclampsia: la urgencia detrás de una presión elevada',
    resumen: 'Una embarazada llega a control prenatal con cefalea y la presión alta. Reconoce cuándo esto deja de ser "solo hipertensión".',
    dif: 3,
    escena: { rotulo: '28 años, embarazo de 32 semanas',
      detalle: 'Acude a control prenatal con cefalea de varias horas. Nunca antes había tenido la presión elevada en este embarazo.' },
    panel: { 'TA':'158/102 mmHg', 'Proteinuria':'+2 en cinta reactiva', 'Reflejos':'Exaltados', 'Edema':'En manos y cara' },
    nodos: {
      inicio: {
        texto: 'La presión está elevada por primera vez después de las 20 semanas, con proteinuria positiva. ¿Qué diagnóstico es compatible con este cuadro?',
        opciones: [
          { txt:'Preeclampsia', pts:15,
            retro:'Correcto: hipertensión de nueva aparición después de las 20 semanas, junto con proteinuria, es el criterio diagnóstico clásico de preeclampsia.', sig:'diagnostica_bien' },
          { txt:'Hipertensión crónica, porque toda hipertensión en el embarazo es igual', pts:-10,
            retro:'La hipertensión crónica se define por estar presente ANTES del embarazo o antes de las 20 semanas. Esta paciente nunca había tenido la presión elevada en este embarazo, lo que orienta a un cuadro de aparición nueva, no crónico.', sig:'cronica_mal' },
          { txt:'Nada preocupante: es normal que la presión suba un poco al final del embarazo', pts:-10,
            retro:'Una presión de 158/102 con proteinuria no es una variación normal del embarazo: cumple criterios diagnósticos de una complicación específica que requiere evaluación urgente.', sig:'normaliza_mal' }
        ]
      },
      cronica_mal: {
        texto: 'El dato clave es que esta paciente nunca había tenido la presión elevada antes en este embarazo: eso descarta que sea un cuadro crónico previo.',
        opciones: [ { txt:'Reconsiderar: preeclampsia, por ser de aparición nueva después de las 20 semanas', pts:5,
          retro:'Correcto, ese es el patrón temporal que define preeclampsia.', sig:'diagnostica_bien' } ]
      },
      normaliza_mal: {
        texto: 'La cifra de presión y la proteinuria positiva superan lo que se considera una variación normal del embarazo: cumplen criterios diagnósticos específicos.',
        opciones: [ { txt:'Reconsiderar: esto es preeclampsia', pts:5,
          retro:'Correcto, y hay que seguir evaluando la gravedad del cuadro.', sig:'diagnostica_bien' } ]
      },
      diagnostica_bien: {
        texto: 'Además de la presión elevada, la paciente tiene cefalea y reflejos exaltados. Estos son signos de gravedad. ¿Qué implica esto para el manejo?',
        opciones: [
          { txt:'Es preeclampsia con datos de severidad: requiere manejo urgente, no ambulatorio', pts:15,
            retro:'Correcto: la cefalea y la hiperreflexia son signos de afectación del sistema nervioso central, criterios de severidad que obligan a manejo intrahospitalario urgente, incluyendo prevención de eclampsia y evaluación para la finalización del embarazo según la edad gestacional.', sig:'final_completo' },
          { txt:'Es preeclampsia leve: se puede manejar ambulatoriamente con control en una semana', pts:-10,
            retro:'Los signos de severidad (cefalea, hiperreflexia) descartan que este sea un cuadro leve manejable de forma ambulatoria: el riesgo de progresión a eclampsia exige manejo urgente e intrahospitalario.', sig:'ambulatorio_mal' }
        ]
      },
      ambulatorio_mal: { final:true, nivel:'mejorable',
        texto:'Diagnosticaste bien la preeclampsia, pero no reconociste los signos que indican que este es un cuadro grave, no uno manejable de forma ambulatoria.',
        dx:'Preeclampsia con datos de severidad',
        ensena:'No toda preeclampsia se maneja igual: los signos de afectación de órgano blanco, como la cefalea y la hiperreflexia, cambian por completo la urgencia del caso y exigen manejo intrahospitalario inmediato, no una cita de control en días.' },
      final_completo: { final:true, nivel:'excelente',
        texto:'Diagnosticaste correctamente la preeclampsia y reconociste los signos de severidad que obligan a un manejo urgente e intrahospitalario.',
        dx:'Preeclampsia con datos de severidad',
        ensena:'La preeclampsia no es solo "presión alta en el embarazo": es un síndrome que puede progresar rápidamente a eclampsia. Reconocer los signos de severidad -cefalea, hiperreflexia, entre otros- es lo que separa un seguimiento de rutina de una urgencia obstétrica real.' }
    }
  },

  {
    id: 'UP-1201-dificultad-respiratoria-rn',
    esp: 'Neonatología',
    cuatrimestre: 12,
    tipo: 'clinico',
    titulo: 'Dificultad respiratoria en las primeras horas de vida',
    resumen: 'Un recién nacido por cesárea que respira rápido y con quejido. Aprende a no asumir "es normal" demasiado pronto.',
    dif: 3,
    escena: { rotulo: 'Recién nacido, 39 semanas, 2 horas de vida',
      detalle: 'Nacido por cesárea electiva, sin trabajo de parto previo. Presenta taquipnea y quejido espiratorio.' },
    panel: { 'FR':'70 rpm', 'SatO2':'89%', 'Retracciones':'Subcostales', 'Color':'Cianosis perioral leve' },
    nodos: {
      inicio: {
        texto: 'El recién nacido tiene taquipnea, retracciones, quejido y saturación baja. ¿Cuál es el primer paso correcto ante estos signos?',
        opciones: [
          { txt:'Colocar en monitor, dar oxígeno suplementario titulado a la saturación, y evaluar la causa', pts:15,
            retro:'Correcto: ante signos claros de dificultad respiratoria neonatal, el primer paso es estabilizar la oxigenación mientras se investiga la causa, no esperar a ver si mejora solo.', sig:'estabiliza_bien' },
          { txt:'Esperar, porque es normal que un recién nacido respire rápido al inicio', pts:-10,
            retro:'Una frecuencia respiratoria de 70 con retracciones, quejido y saturación de 89% supera lo esperado en una transición normal: son signos que requieren evaluación activa, no solo observación pasiva.', sig:'espera_mal' },
          { txt:'Intentar alimentarlo primero para calmarlo', pts:-10,
            retro:'Alimentar a un recién nacido con dificultad respiratoria activa aumenta el riesgo de aspiración, y no resuelve la causa de la dificultad respiratoria.', sig:'alimenta_mal' }
        ]
      },
      espera_mal: {
        texto: 'Los signos que presenta este recién nacido van más allá de una transición respiratoria normal y requieren evaluación activa.',
        opciones: [ { txt:'Reconsiderar: estabilizar la oxigenación y evaluar la causa', pts:5,
          retro:'Correcto, no se debe esperar pasivamente ante estos signos.', sig:'estabiliza_bien' } ]
      },
      alimenta_mal: {
        texto: 'Con dificultad respiratoria activa, alimentar aumenta el riesgo de aspiración y retrasa la atención de la causa real.',
        opciones: [ { txt:'Reconsiderar: estabilizar primero la oxigenación', pts:5,
          retro:'Correcto, la prioridad es la vía respiratoria, no la alimentación.', sig:'estabiliza_bien' } ]
      },
      estabiliza_bien: {
        texto: 'El contexto (cesárea electiva, sin trabajo de parto, a término) hace pensar en taquipnea transitoria del recién nacido, por retención de líquido pulmonar. ¿Cómo se debe manejar este diagnóstico?',
        opciones: [
          { txt:'Como diagnóstico de exclusión: descartar antes causas más graves como sepsis neonatal o cardiopatía congénita', pts:15,
            retro:'Correcto: la taquipnea transitoria es un diagnóstico de exclusión. Antes de asumirlo, hay que descartar causas más graves con estudios básicos como radiografía de tórax y marcadores de infección, porque el cuadro clínico inicial puede parecerse.', sig:'final_completo' },
          { txt:'Como un diagnóstico seguro desde el inicio, sin necesidad de más estudios', pts:-10,
            retro:'Asumir taquipnea transitoria sin descartar otras causas puede retrasar el diagnóstico de cuadros más graves, como sepsis neonatal o una cardiopatía congénita, que pueden presentarse de forma muy similar al inicio.', sig:'asume_mal' }
        ]
      },
      asume_mal: { final:true, nivel:'mejorable',
        texto:'Estabilizaste correctamente al recién nacido, pero asumiste el diagnóstico más benigno sin descartar antes las causas más graves que pueden presentarse igual al inicio.',
        dx:'Dificultad respiratoria neonatal: diferencial con taquipnea transitoria',
        ensena:'En el recién nacido, varias causas de dificultad respiratoria se ven igual en las primeras horas. Asumir la causa más benigna sin descartar las más graves es un error que puede costar tiempo valioso si en realidad hay sepsis neonatal o una cardiopatía congénita.' },
      final_completo: { final:true, nivel:'excelente',
        texto:'Estabilizaste al recién nacido de inmediato y manejaste correctamente la taquipnea transitoria como un diagnóstico de exclusión, descartando primero causas más graves.',
        dx:'Taquipnea transitoria del recién nacido (diagnóstico de exclusión)',
        ensena:'La dificultad respiratoria neonatal exige dos pasos en orden: estabilizar la oxigenación de inmediato, y después investigar la causa sin asumir la más benigna, porque sepsis neonatal y cardiopatía congénita pueden presentarse de forma casi idéntica al inicio.' }
    }
  },

  {
    id: 'UP-1202-colico-renal',
    esp: 'Urología',
    cuatrimestre: 12,
    tipo: 'clinico',
    titulo: 'Cólico renal: del dolor a la decisión',
    resumen: 'Un paciente que no puede quedarse quieto por el dolor. Reconoce el patrón y decide si es manejo ambulatorio o urgencia.',
    dif: 2,
    escena: { rotulo: '35 años, masculino',
      detalle: 'Dolor lumbar tipo cólico, irradiado a la ingle, de inicio súbito hace dos horas. Náuseas asociadas.' },
    panel: { 'FC':'102 lpm', 'TA':'138/88 mmHg', 'Temp':'36.8°C (afebril)', 'Orina':'Microhematuria' },
    nodos: {
      inicio: {
        texto: 'El paciente está inquieto en la camilla, cambiando de posición constantemente sin encontrar alivio, con dolor lumbar irradiado a la ingle. ¿Qué patrón clínico sugiere este comportamiento?',
        opciones: [
          { txt:'Litiasis renoureteral: el paciente inquieto que no encuentra posición antiálgica es típico del cólico renal', pts:15,
            retro:'Correcto: a diferencia del dolor peritoneal (donde el paciente prefiere quedarse quieto), el cólico renal se caracteriza por un paciente inquieto que se mueve constantemente buscando alivio, sin lograrlo.', sig:'reconoce_bien' },
          { txt:'Apendicitis, porque cualquier dolor en el costado derecho es apendicular', pts:-10,
            retro:'El comportamiento del paciente (inquieto, sin poder quedarse quieto) es opuesto al de un cuadro con irritación peritoneal, donde el paciente evita moverse porque el movimiento empeora el dolor.', sig:'apendice_mal' },
          { txt:'Dolor muscular, así que no requiere ninguna evaluación adicional', pts:-10,
            retro:'Un dolor cólico irradiado a la ingle con microhematuria no es un patrón de dolor muscular: tiene un patrón y hallazgos específicos que orientan a otra causa.', sig:'muscular_mal' }
        ]
      },
      apendice_mal: {
        texto: 'El comportamiento del paciente -inquieto, sin poder quedarse quieto- es justamente lo opuesto a lo que se espera en un cuadro con irritación peritoneal como la apendicitis.',
        opciones: [ { txt:'Reconsiderar: el patrón corresponde a cólico renal', pts:5,
          retro:'Correcto, ese comportamiento es característico del dolor cólico ureteral.', sig:'reconoce_bien' } ]
      },
      muscular_mal: {
        texto: 'El dolor cólico irradiado a la ingle junto con la microhematuria son datos específicos que no encajan con un simple dolor muscular.',
        opciones: [ { txt:'Reconsiderar: el patrón corresponde a cólico renal', pts:5,
          retro:'Correcto, la microhematuria apoya directamente esta sospecha.', sig:'reconoce_bien' } ]
      },
      reconoce_bien: {
        texto: 'El paciente está afebril, sin signos de obstrucción severa ni de infección. ¿Cuál es la conducta apropiada dado este contexto?',
        opciones: [
          { txt:'Manejo expulsivo ambulatorio: hidratación, analgesia, y un alfa-bloqueante para facilitar el paso del cálculo', pts:15,
            retro:'Correcto: en un paciente afebril, sin datos de obstrucción severa ni infección, el manejo expulsivo ambulatorio es apropiado para cálculos pequeños, reservando la intervención urgente para cuando aparezcan señales de alarma.', sig:'final_completo' },
          { txt:'Cirugía de urgencia inmediata, sin importar que esté afebril y estable', pts:-10,
            retro:'La cirugía de urgencia se reserva para señales de alarma como fiebre con obstrucción (riesgo de pielonefritis obstructiva), anuria, dolor incontrolable, o riñón único: este paciente afebril y estable no las tiene por ahora.', sig:'cirugia_mal' }
        ]
      },
      cirugia_mal: { final:true, nivel:'mejorable',
        texto:'Reconociste bien el cólico renal, pero elegiste una conducta más agresiva de la que corresponde a este paciente afebril y sin señales de alarma.',
        dx:'Litiasis renoureteral no complicada',
        ensena:'No todo cólico renal necesita cirugía urgente: las señales de alarma (fiebre con obstrucción, anuria, riñón único, dolor incontrolable) son las que cambian la conducta hacia una intervención urgente. Sin ellas, el manejo expulsivo ambulatorio es lo apropiado.' },
      final_completo: { final:true, nivel:'excelente',
        texto:'Reconociste el patrón clínico del cólico renal y elegiste la conducta apropiada para un paciente estable, sin señales de alarma.',
        dx:'Litiasis renoureteral no complicada',
        ensena:'El comportamiento del paciente ante el dolor -inquieto en el cólico renal, quieto en la irritación peritoneal- es un dato semiológico valioso. Y la decisión de manejo depende de buscar activamente señales de alarma, no de tratar cada cólico renal como una urgencia quirúrgica.' }
    }
  },

  {
    id: 'UP-1301-sindrome-coronario-agudo',
    esp: 'Cardiología',
    cuatrimestre: 13,
    tipo: 'clinico',
    titulo: 'Los primeros minutos de un síndrome coronario agudo',
    resumen: '"Tiempo es músculo": aprende a decidir la reperfusión sin esperar lo que no hace falta esperar.',
    dif: 3,
    escena: { rotulo: '58 años, masculino',
      detalle: 'Dolor torácico opresivo irradiado al brazo izquierdo, con diaforesis, que comenzó hace 45 minutos.' },
    panel: { 'FC':'96 lpm', 'TA':'148/92 mmHg', 'SatO2':'95%', 'ECG':'Elevación del ST en II, III y aVF' },
    nodos: {
      inicio: {
        texto: 'El paciente llega con dolor torácico de características isquémicas. ¿Cuál es el primer paso ante esta sospecha?',
        opciones: [
          { txt:'Electrocardiograma de 12 derivaciones dentro de los primeros minutos, junto con aspirina masticada', pts:15,
            retro:'Correcto: ante sospecha de síndrome coronario agudo, el ECG de 12 derivaciones en los primeros minutos es lo que define el tipo de síndrome coronario y la urgencia de la reperfusión, junto con la aspirina como antiagregante inicial.', sig:'ecg_bien' },
          { txt:'Esperar el resultado de la troponina antes de hacer cualquier otra cosa', pts:-10,
            retro:'La troponina tarda en elevarse y en procesarse: esperarla antes de actuar retrasa innecesariamente el diagnóstico, cuando el ECG ya puede orientar la conducta de inmediato.', sig:'troponina_mal' },
          { txt:'Dar solo analgesia y reevaluar en una hora', pts:-10,
            retro:'Reevaluar en una hora sin obtener un ECG inmediato retrasa el reconocimiento de un posible infarto con elevación del ST, donde cada minuto de retraso en la reperfusión cuenta.', sig:'reevalua_mal' }
        ]
      },
      troponina_mal: {
        texto: 'El ECG se obtiene y se interpreta mucho más rápido que la troponina, y ya aporta la información que decide la urgencia de la reperfusión.',
        opciones: [ { txt:'Reconsiderar: obtener el ECG de 12 derivaciones de inmediato', pts:5,
          retro:'Correcto, no hay que esperar la troponina para actuar sobre un ECG que ya orienta la conducta.', sig:'ecg_bien' } ]
      },
      reevalua_mal: {
        texto: 'Retrasar la evaluación una hora completa, sin un ECG inmediato, pierde tiempo valioso si se trata de un infarto con elevación del ST.',
        opciones: [ { txt:'Reconsiderar: obtener el ECG de inmediato', pts:5,
          retro:'Correcto, el ECG inmediato es lo que evita ese retraso.', sig:'ecg_bien' } ]
      },
      ecg_bien: {
        texto: 'El ECG muestra elevación del ST en derivaciones inferiores (II, III, aVF): un infarto con elevación del ST de localización inferior. ¿Qué decisión sigue?',
        opciones: [
          { txt:'Activar reperfusión urgente (angioplastia primaria, o fibrinolisis si no hay acceso rápido a ella)', pts:15,
            retro:'Correcto: un infarto con elevación del ST se diagnostica y se actúa con el ECG, no con la troponina. La reperfusión urgente -angioplastia primaria idealmente, fibrinolisis si no está disponible a tiempo- es la conducta que salva músculo cardíaco.', sig:'final_completo' },
          { txt:'Esperar el resultado de la troponina antes de activar cualquier protocolo de reperfusión', pts:-10,
            retro:'Un infarto con elevación del ST se diagnostica por el ECG, no por la troponina: esperarla antes de activar la reperfusión pierde minutos de músculo cardíaco que ya no se recuperan.', sig:'espera_troponina_mal' }
        ]
      },
      espera_troponina_mal: { final:true, nivel:'mejorable',
        texto:'Reconociste correctamente el infarto en el ECG, pero condicionaste la reperfusión urgente a un resultado que no hace falta esperar.',
        dx:'Síndrome coronario agudo con elevación del ST, de localización inferior',
        ensena:'"Tiempo es músculo": en el infarto con elevación del ST, la decisión de reperfundir se toma con el ECG, en minutos. Esperar la troponina para decidir es un error que cuesta directamente tejido cardíaco que ya no se recupera después.' },
      final_completo: { final:true, nivel:'excelente',
        texto:'Actuaste con la secuencia correcta: ECG inmediato, reconocimiento del infarto con elevación del ST, y activación urgente de la reperfusión sin esperar la troponina.',
        dx:'Síndrome coronario agudo con elevación del ST, de localización inferior',
        ensena:'El manejo del infarto con elevación del ST se decide con el ECG, en los primeros minutos, no con estudios que tardan más. Cada minuto de retraso en la reperfusión es músculo cardíaco que no vuelve, y esa es la razón detrás de cada paso de este protocolo.' }
    }
  }

];
