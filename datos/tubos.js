/* ============================================================
   TUBOS DE LABORATORIO (ENURMIA)
   Colores segun el convenio mas extendido (BD Vacutainer / CLSI).
   Algunos fabricantes cambian tonos: lo que manda es el aditivo.
   orden = orden de extraccion recomendado por CLSI (GP41).
   ============================================================ */
window.TUBOS = [
  { id: 'hemo', orden: 1, nombre: 'Frascos de hemocultivo', color: '#C8873A', tapon: 'Aerobio y anaerobio (el color depende del fabricante)', frasco: true,
    aditivo: 'Caldo de cultivo con resinas que neutralizan antibióticos',
    muestra: 'Sangre total',
    mecanismo: 'El caldo permite que crezcan las bacterias o levaduras que haya en la sangre; las resinas absorben el antibiótico que ya recibió el paciente para no apagar el cultivo.',
    pruebas: ['Hemocultivo', 'Cultivo de sangre en sospecha de bacteriemia o sepsis'],
    inversiones: 'Mezclar suavemente 1 vez; no agitar',
    cuando: 'Fiebre con sospecha de sepsis, endocarditis, fiebre de origen desconocido, antes de iniciar el antibiótico.',
    errores: ['Tomarlo después de iniciar el antibiótico: baja mucho la sensibilidad.', 'Piel mal desinfectada: contamina con la flora de la piel (falsos positivos).', 'Menos de 8–10 mL por frasco en el adulto: baja el rendimiento.'],
    clave: 'Siempre primero, antes que cualquier otro tubo, para no contaminarlo con la tapa de otros tubos. Dos juegos de sitios distintos.' },

  { id: 'azul', orden: 2, nombre: 'Tapón azul claro', color: '#7FB6E6', tapon: 'Azul claro',
    aditivo: 'Citrato de sodio al 3,2 % (relación 1 de citrato por 9 de sangre)',
    muestra: 'Plasma (sangre anticoagulada, centrifugada)',
    mecanismo: 'El citrato fija el calcio de la sangre, y sin calcio no se activa la cascada de la coagulación. Es un bloqueo reversible: en el laboratorio se devuelve calcio y se mide cuánto tarda en coagular.',
    pruebas: ['TP / INR', 'TTPa', 'Fibrinógeno', 'Dímero D', 'Factores de la coagulación', 'Control de heparina o warfarina'],
    inversiones: '3 a 4 inversiones suaves',
    cuando: 'Estudio de coagulación, control del anticoagulante, sospecha de coagulación intravascular diseminada, antes de procedimientos.',
    errores: ['Llenado incompleto: la proporción 1:9 se rompe y el tiempo sale falsamente alargado.', 'Coágulos en el tubo por mezclar poco.', 'Tomarlo con mariposa como primer tubo sin un tubo de descarte: el aire del tubo roba volumen.'],
    clave: 'Tiene que llenarse hasta la marca. Es el primero de los tubos de sangre (después de los frascos de hemocultivo).' },

  { id: 'rojo', orden: 3, nombre: 'Tapón rojo', color: '#C0392B', tapon: 'Rojo',
    aditivo: 'Ninguno o activador del coágulo (sílice) en tubo de plástico',
    muestra: 'Suero (la sangre coagula y se centrifuga)',
    mecanismo: 'La sangre se deja coagular: el coágulo atrapa las células y las proteínas de la coagulación. Lo que queda líquido arriba es el suero.',
    pruebas: ['Serologías (VIH, hepatitis, sífilis)', 'Niveles de fármacos', 'Pruebas cruzadas y tipificación en banco de sangre', 'Alergia (IgE)', 'Pruebas de embarazo en suero'],
    inversiones: '5 inversiones si trae activador; esperar 30 a 60 minutos a que coagule',
    cuando: 'Cuando se necesita suero y no es necesario separarlo por gel.',
    errores: ['Centrifugar antes de que coagule por completo: aparecen fibrinas que obstruyen los analizadores.', 'Dejar el suero sobre el coágulo mucho tiempo: sube el potasio y baja la glucosa.'],
    clave: 'Sin anticoagulante: aquí lo que se busca es que la sangre sí coagule.' },

  { id: 'amarillo', orden: 3, nombre: 'Tapón amarillo / dorado (gel separador)', color: '#E3B93C', tapon: 'Amarillo o dorado',
    aditivo: 'Activador del coágulo y gel separador',
    muestra: 'Suero',
    mecanismo: 'Igual que el rojo, pero el gel forma una barrera entre el suero y el coágulo al centrifugar, así el suero queda limpio y estable varias horas.',
    pruebas: ['Química sanguínea: glucosa (si se procesa rápido), urea, creatinina, electrolitos', 'Perfil lipídico', 'Pruebas hepáticas', 'Hormonas (TSH, cortisol, etc.)', 'Marcadores tumorales', 'Troponina (según laboratorio)', 'Serologías'],
    inversiones: '5 inversiones; esperar la coagulación y centrifugar',
    cuando: 'Es el tubo de rutina para la mayoría de la química y las hormonas.',
    errores: ['Centrifugar antes de que coagule.', 'Sacar el tapón y volver a centrifugar: rompe la barrera de gel.'],
    clave: 'Es el «tubo de la química». Se toma después de los tubos de citrato y antes de los de heparina.' },

  { id: 'naranja', orden: 3, nombre: 'Tapón naranja (trombina)', color: '#E67E22', tapon: 'Naranja',
    aditivo: 'Trombina',
    muestra: 'Suero obtenido rápido (en unos 5 minutos)',
    mecanismo: 'La trombina convierte el fibrinógeno en fibrina de inmediato y la sangre coagula en minutos, aun en pacientes que toman anticoagulantes.',
    pruebas: ['Química urgente', 'Troponina y otros marcadores en urgencias', 'Química en pacientes anticoagulados'],
    inversiones: '8 inversiones',
    cuando: 'Urgencias, donde el resultado no puede esperar 30 minutos a que coagule.',
    errores: ['Mezclarlo mal: coágulos tardíos en el suero.'],
    clave: 'El «suero exprés»: sirve cuando no hay tiempo o el paciente está anticoagulado.' },

  { id: 'verde', orden: 4, nombre: 'Tapón verde', color: '#2E9E5B', tapon: 'Verde',
    aditivo: 'Heparina de litio o de sodio',
    muestra: 'Plasma',
    mecanismo: 'La heparina activa la antitrombina, que bloquea la trombina y el factor X: la sangre no coagula y se obtiene plasma sin esperar.',
    pruebas: ['Química en plasma (urgencias)', 'Amonio', 'Gasometría arterial (en jeringa heparinizada)', 'Cariotipo y cultivo de células (heparina de sodio)', 'Electrolitos en plasma'],
    inversiones: '8 a 10 inversiones',
    cuando: 'Cuando se necesita un resultado rápido en plasma, sin esperar la coagulación.',
    errores: ['Heparina de litio para medir litio: falsa elevación.', 'Heparina de sodio para medir sodio: contamina.', 'Mezclar poco: coágulos en el tubo.'],
    clave: 'Plasma, no suero. Ojo con el aditivo: la heparina de litio no sirve para medir litio, ni la de sodio para medir sodio.' },

  { id: 'lila', orden: 5, nombre: 'Tapón lila / morado', color: '#8E5BB5', tapon: 'Lila o morado',
    aditivo: 'EDTA (K₂ o K₃)',
    muestra: 'Sangre total',
    mecanismo: 'El EDTA atrapa el calcio con mucha fuerza: sin calcio no hay coagulación y, además, conserva intacta la forma de las células.',
    pruebas: ['Hemograma completo', 'Hemoglobina glicosilada (HbA1c)', 'Grupo sanguíneo y Coombs', 'Carga viral (tubo PPT)', 'Frotis de sangre periférica', 'Reticulocitos'],
    inversiones: '8 a 10 inversiones',
    cuando: 'Cuando hay que estudiar las células de la sangre.',
    errores: ['Poner el EDTA antes que los tubos de química: contamina con potasio (falsa hiperpotasemia) y baja calcio, hierro y fosfatasa alcalina.', 'Mezclar poco: coágulos y plaquetas agrupadas (pseudotrombocitopenia).'],
    clave: 'El tubo de las células. Va después de heparina porque su potasio y su quelación arruinan la química.' },

  { id: 'gris', orden: 6, nombre: 'Tapón gris', color: '#8E9AA3', tapon: 'Gris',
    aditivo: 'Fluoruro de sodio y oxalato de potasio',
    muestra: 'Plasma',
    mecanismo: 'El fluoruro frena la glucólisis: las células ya no consumen la glucosa del tubo. El oxalato fija el calcio y evita la coagulación.',
    pruebas: ['Glucosa (si el tubo tarda en llegar al laboratorio)', 'Lactato', 'Alcoholemia', 'Prueba de tolerancia a la glucosa'],
    inversiones: '8 a 10 inversiones',
    cuando: 'Cuando la glucosa no se puede procesar en menos de 30 a 60 minutos.',
    errores: ['Usarlo para otras pruebas de química: el fluoruro y el oxalato interfieren con muchas enzimas.', 'Sin fluoruro, la glucosa cae 5 a 7 % por hora y puede dar una falsa hipoglucemia.'],
    clave: 'El último de la lista. Su objetivo es conservar la glucosa y el lactato tal como estaban en el paciente.' },

  { id: 'negro', orden: 6, nombre: 'Tapón negro', color: '#2B2B2B', tapon: 'Negro',
    aditivo: 'Citrato de sodio al 3,8 % (1 de citrato por 4 de sangre)',
    muestra: 'Sangre total',
    mecanismo: 'Mismo principio que el citrato azul pero con una relación distinta (1:4), pensada para medir cuánto sedimentan los glóbulos rojos en una hora.',
    pruebas: ['Velocidad de sedimentación globular (VSG, método Westergren)'],
    inversiones: '8 a 10 inversiones',
    cuando: 'Estudio de inflamación: arteritis de células gigantes, polimialgia reumática, artritis.',
    errores: ['Usar el tubo con volumen incompleto: cambia la proporción y el resultado.'],
    clave: 'Casi exclusivo de la VSG; muchos laboratorios la hacen hoy con EDTA lila en equipos automáticos.' },

  { id: 'azulreal', orden: 6, nombre: 'Tapón azul rey', color: '#1F4E9E', tapon: 'Azul rey',
    aditivo: 'Sin metales (libre de trazas); puede llevar EDTA o heparina',
    muestra: 'Suero o sangre total',
    mecanismo: 'El vidrio y el caucho de otros tubos liberan trazas de metales que falsean la medición; este tubo está fabricado sin ellos.',
    pruebas: ['Plomo, mercurio, arsénico', 'Zinc, cobre, selenio', 'Elementos traza en general'],
    inversiones: '8 a 10 inversiones si lleva aditivo',
    cuando: 'Intoxicación por metales pesados, estudio de enfermedad de Wilson, nutrición parenteral prolongada.',
    errores: ['Usar un tubo común: contamina la muestra con zinc o aluminio del tapón.'],
    clave: 'Es el tubo para metales. Cualquier otro tubo puede aportar trazas y dar un resultado falso.' }
];

window.TUBOS_ORDEN = 'Hemocultivo → azul (citrato) → rojo, amarillo o naranja (suero) → verde (heparina) → lila (EDTA) → gris (fluoruro)';
window.TUBOS_ORDEN_PORQUE = 'Cada aditivo puede pasar de un tubo al siguiente por la aguja. Si el EDTA va antes que el tubo de química, arrastra potasio y baja el calcio; si el suero va después de la heparina, la heparina puede alterar la coagulación. Por eso el orden: lo estéril primero, lo que solo tiene citrato después, luego el suero, y los aditivos que más interfieren (EDTA y fluoruro) al final.';
window.TUBOS_REGLA = 'Hoy Atiendo, Resuelvo, Verifico, Llamo, Gracias  =  Hemocultivo, Azul, Rojo/amarillo, Verde, Lila, Gris';

window.TUBOS_QUIZ = [
  ['Hemograma completo', 'lila'], ['Hemoglobina glicosilada (HbA1c)', 'lila'], ['Frotis de sangre periférica', 'lila'], ['Reticulocitos', 'lila'],
  ['TP / INR', 'azul'], ['TTPa', 'azul'], ['Dímero D', 'azul'], ['Fibrinógeno', 'azul'],
  ['Perfil lipídico', 'amarillo'], ['TSH y otras hormonas', 'amarillo'], ['Creatinina y urea', 'amarillo'], ['Pruebas hepáticas', 'amarillo'],
  ['Serología de VIH o hepatitis', 'rojo'], ['Nivel de un fármaco (por ejemplo digoxina)', 'rojo'],
  ['Troponina urgente en un paciente anticoagulado', 'naranja'],
  ['Amonio', 'verde'], ['Cariotipo', 'verde'],
  ['Glucosa en una muestra que tardará horas en llegar al laboratorio', 'gris'], ['Lactato', 'gris'], ['Alcoholemia', 'gris'],
  ['Velocidad de sedimentación globular (Westergren)', 'negro'],
  ['Plomo en sangre', 'azulreal'], ['Zinc y cobre', 'azulreal'],
  ['Hemocultivo', 'hemo']
];
