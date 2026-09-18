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
  }

];
