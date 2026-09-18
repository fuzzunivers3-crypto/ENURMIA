/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 12)
   Termina de cubrir INMUNOLOGIA por completo. Con esto,
   CUATRIMESTRE 8 QUEDA COMPLETO: las 8 materias, los 107 temas.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'antigeno-anticuerpo-mhc': {
  tema:'Antígeno, anticuerpo y complejo mayor de histocompatibilidad',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:8,
  idea:'El sistema inmunitario no "ve" microbios directamente: ve fragmentos de proteínas presentados sobre una plataforma molecular específica de cada persona, y esa plataforma es, precisamente, la razón por la que un trasplante de órgano puede ser rechazado.',
  claves:['antígeno','anticuerpo','inmunoglobulina','MHC','presentación'],
  sigue:'complemento',
  secciones:[
    {
      t:'Antígeno y anticuerpo: la llave y la cerradura',
      p:[
        'Un *antígeno* es cualquier molécula capaz de ser reconocida específicamente por el sistema inmunitario adaptativo, disparando una respuesta contra ella. Un *anticuerpo* (o inmunoglobulina) es una proteína producida por los linfocitos B (que se verán con más detalle en el siguiente tema) capaz de unirse de forma muy específica a un antígeno concreto, como una llave que encaja en una sola cerradura, marcándolo para su destrucción o neutralizándolo directamente.',
        'La *inmunoglobulina* tiene una estructura característica en forma de Y, con una región que varía enormemente de un anticuerpo a otro (dándole su especificidad por un antígeno particular) y una región constante que determina su función efectora (cómo actúa una vez unida al antígeno).'
      ]
    },
    {
      t:'El MHC: la plataforma de presentación, única de cada persona',
      p:[
        'El *complejo mayor de histocompatibilidad* (MHC) es un conjunto de proteínas de superficie celular, extremadamente variable de una persona a otra, cuya función es exhibir fragmentos de proteínas (propias o extrañas) en la superficie de la célula, para que los linfocitos T puedan inspeccionarlos —este proceso se llama *presentación* de antígeno. El MHC clase I está presente en casi todas las células nucleadas del cuerpo y presenta fragmentos de proteínas producidas DENTRO de la propia célula (útil para detectar una célula infectada por un virus, por ejemplo). El MHC clase II está presente solo en células especializadas (las células presentadoras de antígeno ya mencionadas en el tema de células del sistema inmunitario) y presenta fragmentos de proteínas capturadas DESDE AFUERA de la célula.',
        'Como el MHC es tan variable entre personas (salvo entre gemelos idénticos), el sistema inmunitario de un receptor de trasplante reconoce el MHC del donante como "extraño", disparando una respuesta de rechazo —es la razón molecular directa detrás de la necesidad de compatibilidad de tejidos y de la inmunosupresión en los trasplantes, que se verá con más detalle más adelante en este mismo bloque.'
      ],
      foco:[
        'El MHC humano tiene otro nombre, muy usado en la práctica clínica: HLA (antígeno leucocitario humano). "MHC" y "HLA" se refieren, en el ser humano, al mismo sistema.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 3 y 6.'
},

'complemento': {
  tema:'Complemento',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:7,
  idea:'El sistema del complemento es, en esencia, una cascada de proteínas plasmáticas que se activan una tras otra, como fichas de dominó, y que termina —literalmente— perforando la membrana de un microorganismo hasta destruirlo.',
  claves:['complemento','vía clásica','vía alterna','C3','opsonización','MAC'],
  sigue:'respuesta-humoral-celular',
  secciones:[
    {
      t:'Dos vías de activación, un mismo punto de encuentro',
      p:[
        'El sistema del *complemento* es un conjunto de proteínas plasmáticas que circulan de forma inactiva y se activan en cascada, cada una activando a la siguiente. La *vía clásica* se activa cuando el complemento se une a un anticuerpo ya unido a su antígeno (conectando, así, el sistema inmunitario innato con el adaptativo). La *vía alterna* se activa directamente sobre la superficie de ciertos microorganismos, sin necesitar un anticuerpo previo, formando parte de la inmunidad innata más inmediata.',
        'Ambas vías convergen en la activación de *C3*, la proteína central de todo el sistema, que se divide en dos fragmentos con funciones distintas: uno queda pegado a la superficie del microorganismo, y el otro sigue la cascada hacia el paso final.'
      ]
    },
    {
      t:'Tres efectos, un mismo sistema activado',
      p:[
        'La activación del complemento produce tres efectos principales. La *opsonización*: el fragmento de C3 que queda pegado al microorganismo actúa como una "etiqueta" que los fagocitos (macrófagos, neutrófilos) reconocen fácilmente, facilitando mucho la fagocitosis —conectando este tema con lo ya visto sobre inmunidad innata. La liberación de fragmentos que atraen y activan células inflamatorias. Y, al final de la cascada, la formación del *MAC* (complejo de ataque a la membrana), un conjunto de proteínas del complemento que se ensamblan formando literalmente un poro en la membrana del microorganismo, causando su lisis (destrucción) directa.'
      ],
      foco:[
        'Consideración clínica: las bacterias con cápsula gruesa (como el neumococo, ya mencionado en el tema del bazo y las bacterias encapsuladas) son particularmente difíciles de destruir por el MAC solo, y dependen más de la opsonización y la fagocitosis para ser eliminadas —una de las razones por las que la esplenectomía, que compromete la respuesta contra bacterias encapsuladas, es tan riesgosa.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 5.'
},

'respuesta-humoral-celular': {
  tema:'Respuesta humoral y celular',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:8,
  idea:'El sistema inmunitario adaptativo se divide, en el fondo, en dos brazos con especialidades distintas: uno bueno contra lo que está FUERA de las células (bacterias en la sangre), el otro bueno contra lo que se esconde DENTRO de ellas (virus).',
  claves:['linfocito B','linfocito T','CD4','CD8','citocina','memoria inmunitaria'],
  sigue:'hipersensibilidad-autoinmunidad',
  secciones:[
    {
      t:'Respuesta humoral: linfocitos B y anticuerpos',
      p:[
        'La respuesta *humoral* está protagonizada por los *linfocitos B*, que al activarse (con ayuda de linfocitos T, en la mayoría de los casos) se transforman en células plasmáticas, fábricas especializadas de anticuerpos que se liberan a la sangre y otros fluidos corporales (de ahí el nombre "humoral", de los humores del cuerpo). Es la rama del sistema inmunitario más eficaz contra patógenos EXTRACELULARES: bacterias circulando libremente, toxinas, parásitos en la sangre —cualquier cosa que un anticuerpo pueda alcanzar directamente en el espacio extracelular.'
      ]
    },
    {
      t:'Respuesta celular: dos tipos de linfocito T, dos trabajos distintos',
      p:[
        'La respuesta *celular* está protagonizada por los *linfocitos T*, y se divide en dos poblaciones principales según una proteína de superficie que las distingue. Los linfocitos T *CD4* (colaboradores o helper) reconocen antígenos presentados por MHC clase II, y su trabajo principal es coordinar y potenciar al resto del sistema inmunitario, liberando *citocinas* (moléculas de señalización entre células inmunitarias) que activan a los linfocitos B, a los macrófagos y a los propios linfocitos T CD8. Los linfocitos T *CD8* (citotóxicos) reconocen antígenos presentados por MHC clase I, y su trabajo es destruir DIRECTAMENTE a las células infectadas que detectan —son la rama más eficaz contra patógenos INTRACELULARES, sobre todo virus, que se esconden dentro de las propias células del cuerpo y quedan fuera del alcance de un anticuerpo.',
        'Tras una infección, una parte de los linfocitos B y T activados no muere: persiste como células de *memoria inmunitaria*, capaces de reconocer al mismo antígeno mucho más rápido y con más fuerza si vuelve a aparecer —es el fundamento biológico tanto de la inmunidad natural tras una infección pasada como del principio de la vacunación.'
      ],
      foco:[
        'Consideración clínica: el virus de la inmunodeficiencia humana (VIH) infecta preferentemente a los linfocitos T CD4, y su destrucción progresiva es la razón central por la que, sin tratamiento, la infección avanza hacia un estado de inmunodeficiencia severa: se pierde precisamente la célula que coordina al resto del sistema.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1, 9 y 10.'
},

'hipersensibilidad-autoinmunidad': {
  tema:'Hipersensibilidad y autoinmunidad',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:7,
  idea:'El mismo sistema inmunitario que protege también puede dañar: una hipersensibilidad es una respuesta inmunitaria exagerada contra algo externo inofensivo, y una autoinmunidad es una respuesta dirigida, por error, contra el propio cuerpo.',
  claves:['hipersensibilidad','tipo I','anafilaxia','autoinmunidad','tolerancia'],
  sigue:'inmunizacion',
  secciones:[
    {
      t:'Hipersensibilidad: cuando la defensa se vuelve exagerada',
      p:[
        'Una *hipersensibilidad* es una respuesta inmunitaria excesiva o inapropiada frente a un antígeno que, por sí mismo, no representa un peligro real para el cuerpo. La hipersensibilidad *tipo I* (inmediata) es la más conocida en la práctica clínica cotidiana: ocurre cuando el sistema inmunitario produce un tipo específico de anticuerpo contra un alérgeno inofensivo (polen, ciertos alimentos, veneno de insecto), y una exposición posterior a ese mismo alérgeno dispara la liberación masiva de mediadores inflamatorios (como la histamina), produciendo síntomas que van desde una reacción alérgica leve hasta la *anafilaxia*: una reacción sistémica grave y potencialmente mortal, con caída de la presión arterial y compromiso de la vía aérea, que requiere tratamiento de emergencia inmediato.'
      ]
    },
    {
      t:'Autoinmunidad: cuando la defensa se dirige contra uno mismo',
      p:[
        'La *autoinmunidad* ocurre cuando el sistema inmunitario pierde la *tolerancia* hacia los propios tejidos del cuerpo (un concepto que se desarrollará con más detalle en el último tema de este bloque) y empieza a atacarlos como si fueran extraños, produciendo una enfermedad autoinmune. El daño puede ser dirigido a un solo órgano (como en algunas enfermedades tiroideas autoinmunes) o ser sistémico, afectando a múltiples tejidos a la vez.'
      ],
      foco:[
        'Consideración clínica: no toda reacción alérgica llega a ser anafilaxia, pero reconocer los signos de alarma (dificultad respiratoria, hinchazón de la vía aérea, caída de la presión) es fundamental, porque la anafilaxia progresa en minutos y el tratamiento (epinefrina) no admite demora.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 11 y 20.'
},

'inmunizacion': {
  tema:'Inmunización',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:7,
  idea:'Vacunar es, en esencia, engañar de forma segura al sistema inmunitario adaptativo para que genere memoria inmunitaria contra un patógeno, sin tener que pasar por la enfermedad real y sus riesgos.',
  claves:['vacuna','inmunidad pasiva','activa','toxoide','esquema'],
  sigue:null,
  secciones:[
    {
      t:'Inmunidad activa frente a pasiva',
      p:[
        'La inmunidad *activa* es la que el propio cuerpo genera, produciendo sus propios anticuerpos y células de memoria, ya sea por haber pasado la infección natural o por vacunación —es más lenta en establecerse (necesita días o semanas), pero duradera, gracias a la memoria inmunitaria ya vista. La inmunidad *pasiva* consiste en recibir anticuerpos YA HECHOS, producidos por otra persona o animal (como los anticuerpos maternos que cruzan la placenta hacia el feto, o una inyección de inmunoglobulina específica) —es inmediata en su efecto, pero temporal, porque esos anticuerpos prestados se degradan con el tiempo sin que el receptor haya generado su propia memoria inmunitaria.'
      ]
    },
    {
      t:'Una vacuna genera inmunidad activa, de forma segura',
      p:[
        'Una *vacuna* expone al sistema inmunitario a una versión seguridad-modificada del antígeno (el microorganismo debilitado o inactivado, solo un fragmento de él, o —en el caso de un *toxoide*— una toxina bacteriana modificada químicamente para conservar su capacidad de generar anticuerpos pero perder su capacidad de causar daño), disparando una respuesta activa y memoria inmunitaria, sin exponer a la persona a la enfermedad real ni a sus complicaciones.',
        'El *esquema* de vacunación (cuántas dosis, con qué espaciamiento) responde a la biología de cada vacuna en particular: algunas necesitan varias dosis iniciales para establecer una memoria inmunitaria robusta, y refuerzos periódicos después, porque el nivel de anticuerpos o de células de memoria puede ir disminuyendo con el tiempo si no se refuerza —el mismo esquema de vacunación ya mencionado en Medicina Preventiva.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Inmunología conectándolo directamente con la prevención primaria ya vista en Medicina Preventiva: la vacunación es, en esencia, inmunología aplicada a la salud pública.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 16.'
},

'inmunodeficiencias-primarias': {
  tema:'Inmunodeficiencias primarias',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:6,
  idea:'Cuando una pieza específica del sistema inmunitario falta desde el nacimiento —por un defecto genético—, el tipo de infecciones que sufre esa persona es, casi siempre, una pista directa de CUÁL pieza es la que falta.',
  claves:['inmunodeficiencia primaria','agammaglobulinemia','inmunodeficiencia combinada grave'],
  sigue:null,
  secciones:[
    {
      t:'Un defecto congénito en alguna parte del sistema',
      p:[
        'Una *inmunodeficiencia primaria* es un defecto genético, presente desde el nacimiento, que compromete a algún componente específico del sistema inmunitario (los linfocitos B, los T, el complemento, o las células fagocíticas), a diferencia de una inmunodeficiencia secundaria (adquirida después del nacimiento, por ejemplo por el VIH, ya mencionado, o por ciertos tratamientos médicos).',
        'La *agammaglobulinemia* es un ejemplo de defecto específico de los linfocitos B: estos no maduran correctamente, y la persona no puede producir anticuerpos de ningún tipo, quedando particularmente vulnerable a infecciones bacterianas recurrentes (precisamente el tipo de patógeno que la respuesta humoral, ya vista, combate mejor).'
      ]
    },
    {
      t:'Cuando falla más de una rama a la vez',
      p:[
        'La *inmunodeficiencia combinada grave* (SCID) es, como su nombre indica, mucho más severa: afecta tanto a los linfocitos T como a los B (o a los T de forma tan central que también compromete indirectamente a los B, que dependen de la ayuda de los T CD4 ya vista), dejando a la persona prácticamente sin defensa adaptativa alguna, vulnerable a prácticamente cualquier tipo de infección, incluidas las que normalmente no causarían enfermedad en una persona con inmunidad normal (infecciones oportunistas). Sin tratamiento (como un trasplante de médula ósea), es habitualmente mortal en la infancia temprana.'
      ],
      foco:[
        'Consideración clínica: el patrón de infecciones de un paciente es, en la práctica, la primera pista diagnóstica de una inmunodeficiencia primaria —infecciones bacterianas recurrentes sugieren un problema humoral (linfocitos B o complemento); infecciones virales, fúngicas o por microorganismos oportunistas sugieren un problema de la inmunidad celular (linfocitos T).'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 21.'
},

'trasplante-inmunologia-rechazo': {
  tema:'Trasplante e inmunología del rechazo',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:7,
  idea:'Este tema retoma directamente el MHC ya visto: el rechazo de un trasplante no es un fallo del sistema inmunitario, es el sistema inmunitario haciendo exactamente lo que está diseñado para hacer, reconocer y atacar tejido genéticamente distinto al propio.',
  claves:['rechazo de trasplante','histocompatibilidad','inmunosupresor','enfermedad de injerto contra hospedero'],
  sigue:null,
  secciones:[
    {
      t:'Por qué el cuerpo rechaza un órgano trasplantado',
      p:[
        'El *rechazo de trasplante* ocurre porque el sistema inmunitario del receptor reconoce las moléculas de MHC del órgano donado (distintas a las propias, salvo entre gemelos idénticos, como ya se vio) como extrañas, y monta una respuesta inmunitaria en su contra, con linfocitos T citotóxicos atacando directamente al tejido trasplantado. Por eso, antes de un trasplante, se evalúa la *histocompatibilidad* entre donante y receptor: cuanto más parecidos sean sus MHC, menor el riesgo de un rechazo agresivo (aunque nunca desaparece del todo, salvo entre gemelos idénticos).',
        'Para reducir ese riesgo, el receptor recibe tratamiento con fármacos *inmunosupresores*, que atenúan la respuesta inmunitaria en general —con el costo de que esa misma atenuación deja al paciente más vulnerable a infecciones y, a largo plazo, a ciertos tipos de cáncer que el sistema inmunitario normalmente ayuda a controlar.'
      ]
    },
    {
      t:'Cuando el ataque va en la dirección contraria',
      p:[
        'La *enfermedad de injerto contra hospedero* es la situación inversa y ocurre específicamente en trasplantes que incluyen células inmunitarias del donante (como un trasplante de médula ósea): en vez de que el receptor ataque al injerto, son las células inmunitarias TRASPLANTADAS (provenientes del donante) las que reconocen al cuerpo del receptor como extraño y lo atacan, pudiendo dañar la piel, el hígado y el tracto digestivo del receptor.'
      ],
      foco:[
        'Consideración clínica: esta es la razón exacta por la que un trasplante de médula ósea (que trae consigo células inmunitarias vivas del donante) tiene un riesgo particular —enfermedad de injerto contra hospedero— que un trasplante de un órgano sólido (como un riñón, sin ese componente inmunitario significativo) generalmente no tiene.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 17.'
},

'tolerancia-inmunologica': {
  tema:'Tolerancia inmunológica',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:7,
  idea:'Este tema cierra el bloque de Inmunología explicando el mecanismo que, en circunstancias normales, evita que el sistema inmunitario más poderoso del cuerpo —capaz de destruir bacterias, virus y órganos trasplantados enteros— ataque a los propios tejidos.',
  claves:['tolerancia central','tolerancia periférica','selección negativa','anergia'],
  sigue:null,
  secciones:[
    {
      t:'Tolerancia central: eliminar lo peligroso antes de que salga',
      p:[
        'La *tolerancia central* ocurre durante la maduración de los linfocitos, en los órganos linfoides primarios (el timo para los linfocitos T, la médula ósea para los B, ya vistos en el tema de células y órganos del sistema inmunitario). Ahí, mediante un proceso llamado *selección negativa*, los linfocitos inmaduros que reaccionan con demasiada fuerza contra antígenos propios son eliminados (o inactivados) ANTES de salir a circular por el cuerpo —es, en esencia, un control de calidad que descarta a las células potencialmente peligrosas antes de que puedan causar daño.'
      ]
    },
    {
      t:'Tolerancia periférica: la segunda línea de seguridad',
      p:[
        'Ningún sistema de selección es perfecto: algunos linfocitos autorreactivos escapan de la selección negativa central y sí llegan a circular por el cuerpo. La *tolerancia periférica* es el conjunto de mecanismos de respaldo que mantienen controlados a esos linfocitos escapados, ya fuera de los órganos linfoides primarios: uno de ellos es la *anergia*, un estado de inactivación funcional en el que el linfocito reconoce a su antígeno propio pero no logra activarse por completo (le falta una segunda señal necesaria para activarse plenamente), quedando efectivamente neutralizado sin necesitar ser eliminado.',
        'Cuando estos mecanismos de tolerancia (central y periférica) fallan de forma relevante, el resultado es precisamente la autoinmunidad ya vista antes en este bloque: linfocitos autorreactivos que escaparon del control y sí lograron activarse contra tejidos propios.'
      ],
      foco:[
        'Este tema conecta, en un solo concepto, casi todo lo visto en el bloque de Inmunología: cuando la tolerancia funciona bien, el sistema distingue lo propio de lo extraño; cuando falla, aparece la autoinmunidad; y cuando se induce deliberadamente con fármacos, se logra que un trasplante sobreviva.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular, cap. 15.'
}

});
