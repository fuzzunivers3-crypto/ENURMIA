/* ============================================================
   CALCULOS MEDICOS (ENURMIA)
   Cada calculo: que es, formula, para que sirve, por que se hace,
   como cambia la conducta, y una funcion calcular(v) que devuelve
   { valor, unidad, nivel, lectura, pasos[], extra[] }.
   v trae numeros (selects y casillas = numero; fechas = 'AAAA-MM-DD').
   El ejemplo resuelto y la practica salen de calcular(), asi que
   nunca pueden contradecir a la calculadora.
   ============================================================ */
(function () {

  const fx = (x, n) => (n === undefined ? String(x) : Number(x).toFixed(n)).replace('.', ',');
  const R = (valor, unidad, nivel, lectura, pasos, extra) =>
    ({ valor, unidad, nivel, lectura, pasos: pasos || [], extra: extra || [] });
  const num = (id, etq, u, min, max, paso, def) => ({ id, etq, tipo: 'num', u, min, max, paso, def });
  const sel = (id, etq, opciones, def) => ({ id, etq, tipo: 'sel', opciones, def });
  const chk = (id, etq) => ({ id, etq, tipo: 'chk', def: 0 });
  const SEXO = [[1, 'Hombre'], [0, 'Mujer']];

  const G_REN = 'Renal y metabolismo';
  const G_LIQ = 'Líquidos y electrolitos';
  const G_AB = 'Ácido-base y respiratorio';
  const G_ESC = 'Escalas de riesgo y gravedad';
  const G_PED = 'Pediatría, obstetricia y dosis';

  const dias = (a, b) => Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 86400000);
  const sumaDias = (f, n) => {
    const d = new Date(f + 'T00:00:00'); d.setDate(d.getDate() + n);
    return d.toLocaleDateString('es-DO', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  window.CALCULOS = [

  /* ---------------- RENAL Y METABOLISMO ---------------- */
  { id: 'imc', grupo: G_REN, nombre: 'Índice de masa corporal (IMC)', em: '⚖️',
    que: 'Relación entre el peso y la talla al cuadrado. Es el cribado más simple del estado nutricional del adulto.',
    formula: 'IMC = peso (kg) ÷ talla (m)²',
    sirve: 'Clasificar bajo peso, normopeso, sobrepeso y obesidad, y estimar el riesgo cardiometabólico.',
    porque: 'El exceso de grasa se asocia a diabetes, hipertensión, apnea del sueño y cardiopatía; el bajo peso, a desnutrición e inmunodepresión. Un número permite comparar y dar seguimiento.',
    conducta: 'IMC ≥ 30 abre la evaluación de comorbilidades y el plan de pérdida de peso; ≥ 40 (o ≥ 35 con comorbilidad) hace considerar farmacoterapia o cirugía bariátrica. No distingue músculo de grasa: en atletas o con edema puede engañar.',
    campos: [num('peso', 'Peso', 'kg', 20, 250, 0.1, 70), num('talla', 'Talla', 'cm', 100, 220, 1, 170)],
    ej: { peso: 92, talla: 170 }, ejTxt: 'Hombre de 92 kg y 170 cm que consulta por cansancio al subir escaleras.',
    calcular(v) {
      const m = v.talla / 100, imc = v.peso / (m * m);
      const [n, t] = imc < 18.5 ? ['alerta', 'Bajo peso'] : imc < 25 ? ['ok', 'Normopeso'] : imc < 30 ? ['alerta', 'Sobrepeso']
        : imc < 35 ? ['peligro', 'Obesidad grado I'] : imc < 40 ? ['peligro', 'Obesidad grado II'] : ['peligro', 'Obesidad grado III (mórbida)'];
      return R(imc, 'kg/m²', n, t + '. Rango normal: 18,5 a 24,9.',
        ['Talla en metros: ' + fx(v.talla, 0) + ' cm = ' + fx(m, 2) + ' m', 'Talla² = ' + fx(m * m, 3),
         'IMC = ' + fx(v.peso, 1) + ' ÷ ' + fx(m * m, 3) + ' = ' + fx(imc, 1)]);
    } },

  { id: 'sc', grupo: G_REN, nombre: 'Superficie corporal (Mosteller)', em: '📐',
    que: 'Estimación del área de la piel a partir de peso y talla.',
    formula: 'SC (m²) = √[ talla (cm) × peso (kg) ÷ 3600 ]',
    sirve: 'Dosificar quimioterapia y otros fármacos, indexar el gasto cardíaco (índice cardíaco) y la filtración glomerular.',
    porque: 'El metabolismo y el volumen de distribución se parecen más a la superficie que al peso en bruto: dos personas del mismo peso pero distinta talla no manejan igual un fármaco.',
    conducta: 'En oncología la dosis se prescribe en mg/m²; un error de superficie es un error de dosis. También se usa para pasar la TFG a mL/min/1,73 m².',
    campos: [num('peso', 'Peso', 'kg', 3, 250, 0.1, 70), num('talla', 'Talla', 'cm', 50, 220, 1, 170)],
    ej: { peso: 70, talla: 175 }, ejTxt: 'Paciente de 70 kg y 175 cm al que se le calcula una dosis de quimioterapia.',
    calcular(v) {
      const p = v.talla * v.peso, sc = Math.sqrt(p / 3600);
      return R(sc, 'm²', 'info', 'Adulto promedio: alrededor de 1,7 m².',
        ['Talla × peso = ' + fx(v.talla, 0) + ' × ' + fx(v.peso, 1) + ' = ' + fx(p, 0), 'Dividido entre 3600 = ' + fx(p / 3600, 3),
         'Raíz cuadrada = ' + fx(sc, 2) + ' m²']);
    } },

  { id: 'tfg', grupo: G_REN, nombre: 'Filtración glomerular (CKD-EPI 2021)', em: '🧪',
    que: 'Estimación de cuánta sangre filtran los riñones por minuto, a partir de la creatinina, la edad y el sexo.',
    formula: 'TFGe = 142 × mín(Cr/κ, 1)^α × máx(Cr/κ, 1)^−1,200 × 0,9938^edad × 1,012 (si mujer). κ = 0,7 mujer / 0,9 hombre; α = −0,241 mujer / −0,302 hombre',
    sirve: 'Estadificar la enfermedad renal crónica (G1 a G5) y ajustar dosis de fármacos.',
    porque: 'La creatinina sola engaña: una persona mayor y delgada puede tener creatinina «normal» con un riñón que ya filtra poco. Corregir por edad y sexo acerca el número a la realidad.',
    conducta: 'TFGe < 60 durante más de 3 meses es enfermedad renal crónica: se pide albuminuria, se evitan nefrotóxicos (AINE, contraste sin necesidad), se ajustan fármacos y se controla presión y glucemia. TFGe < 30 obliga a referir a nefrología.',
    campos: [num('cr', 'Creatinina sérica', 'mg/dL', 0.2, 15, 0.01, 1), num('edad', 'Edad', 'años', 18, 110, 1, 50), sel('sexo', 'Sexo', SEXO, 1)],
    ej: { cr: 1.4, edad: 62, sexo: 1 }, ejTxt: 'Hombre de 62 años, diabético, con creatinina de 1,4 mg/dL.',
    calcular(v) {
      const h = v.sexo === 1, k = h ? 0.9 : 0.7, a = h ? -0.302 : -0.241, c = v.cr / k;
      const t = 142 * Math.pow(Math.min(c, 1), a) * Math.pow(Math.max(c, 1), -1.2) * Math.pow(0.9938, v.edad) * (h ? 1 : 1.012);
      const [n, e] = t >= 90 ? ['ok', 'G1 (normal o alta)'] : t >= 60 ? ['ok', 'G2 (levemente disminuida)'] : t >= 45 ? ['alerta', 'G3a (leve a moderada)']
        : t >= 30 ? ['alerta', 'G3b (moderada a grave)'] : t >= 15 ? ['peligro', 'G4 (grave)'] : ['peligro', 'G5 (falla renal)'];
      return R(t, 'mL/min/1,73 m²', n, 'Estadio ' + e + '. Solo es enfermedad renal crónica si persiste más de 3 meses o hay daño (albuminuria).',
        ['κ = ' + k + ' y α = ' + a + ' (' + (h ? 'hombre' : 'mujer') + ')', 'Cr/κ = ' + fx(c, 2),
         'TFGe = 142 × ' + fx(Math.pow(Math.min(c, 1), a), 3) + ' × ' + fx(Math.pow(Math.max(c, 1), -1.2), 3) + ' × ' + fx(Math.pow(0.9938, v.edad), 3) + (h ? '' : ' × 1,012') + ' = ' + fx(t, 0)]);
    } },

  { id: 'cg', grupo: G_REN, nombre: 'Aclaramiento de creatinina (Cockcroft-Gault)', em: '💊',
    que: 'Estimación del aclaramiento de creatinina en mL/min usando edad, peso, sexo y creatinina.',
    formula: 'ClCr = (140 − edad) × peso (kg) ÷ (72 × Cr)  × 0,85 si mujer',
    sirve: 'Ajustar la dosis de fármacos de eliminación renal (antibióticos, anticoagulantes orales, digoxina, metformina).',
    porque: 'Las fichas técnicas de la mayoría de los fármacos se validaron con esta fórmula. La dosis estándar en un riñón que filtra poco acumula el fármaco y causa toxicidad.',
    conducta: 'Si ClCr < 30 mL/min se reduce o espacia la dosis, o se cambia de fármaco. Usa el peso real solo con peso normal; en obesidad conviene peso ajustado.',
    campos: [num('edad', 'Edad', 'años', 18, 110, 1, 70), num('peso', 'Peso', 'kg', 30, 200, 0.1, 70), num('cr', 'Creatinina sérica', 'mg/dL', 0.2, 15, 0.01, 1.2), sel('sexo', 'Sexo', SEXO, 1)],
    ej: { edad: 78, peso: 60, cr: 1.4, sexo: 0 }, ejTxt: 'Mujer de 78 años, 60 kg, creatinina de 1,4 mg/dL, a la que se le va a indicar un antibiótico de eliminación renal.',
    calcular(v) {
      const b = (140 - v.edad) * v.peso / (72 * v.cr), cl = v.sexo === 1 ? b : b * 0.85;
      const [n, t] = cl >= 60 ? ['ok', 'Dosis habituales en general'] : cl >= 30 ? ['alerta', 'Revisar dosis de fármacos renales'] : ['peligro', 'Ajustar o evitar fármacos de eliminación renal'];
      return R(cl, 'mL/min', n, t + '.',
        ['(140 − ' + v.edad + ') × ' + fx(v.peso, 1) + ' = ' + fx((140 - v.edad) * v.peso, 0), '72 × ' + fx(v.cr, 2) + ' = ' + fx(72 * v.cr, 1),
         'Cociente = ' + fx(b, 1) + (v.sexo === 1 ? '' : '; × 0,85 (mujer) = ' + fx(cl, 1))]);
    } },

  { id: 'fena', grupo: G_REN, nombre: 'Excreción fraccional de sodio (FeNa)', em: '🚰',
    que: 'Porcentaje del sodio filtrado que termina en la orina.',
    formula: 'FeNa (%) = (Na urinario × Cr plasmática) ÷ (Na plasmático × Cr urinaria) × 100',
    sirve: 'Diferenciar la lesión renal aguda prerrenal (riñón sano que ahorra sodio) de la necrosis tubular aguda (túbulo dañado que lo pierde).',
    porque: 'Un riñón que recibe poca sangre retiene sodio y agua; uno con el túbulo destruido no puede retenerlo. El sodio urinario revela cuál de los dos es.',
    conducta: 'FeNa < 1 %: prerrenal, se repone volumen o se corrige la perfusión. FeNa > 2 %: necrosis tubular, se suspenden nefrotóxicos y se maneja soporte. Con diuréticos se pierde sodio aunque haya déficit de volumen: ahí se usa la FeUrea.',
    campos: [num('una', 'Sodio en orina', 'mEq/L', 1, 300, 1, 20), num('pna', 'Sodio en plasma', 'mEq/L', 110, 170, 1, 140), num('ucr', 'Creatinina en orina', 'mg/dL', 5, 400, 1, 100), num('pcr', 'Creatinina en plasma', 'mg/dL', 0.3, 15, 0.1, 2)],
    ej: { una: 12, pna: 138, ucr: 120, pcr: 2.4 }, ejTxt: 'Paciente con diarrea de 3 días y creatinina que subió de 0,9 a 2,4 mg/dL.',
    calcular(v) {
      const f = (v.una * v.pcr) / (v.pna * v.ucr) * 100;
      const [n, t] = f < 1 ? ['ok', 'Patrón prerrenal: el riñón está reteniendo sodio'] : f <= 2 ? ['alerta', 'Zona gris: interpretar con el cuadro clínico'] : ['peligro', 'Patrón de necrosis tubular aguda'];
      return R(f, '%', n, t + '.',
        ['Numerador: ' + fx(v.una, 0) + ' × ' + fx(v.pcr, 1) + ' = ' + fx(v.una * v.pcr, 1), 'Denominador: ' + fx(v.pna, 0) + ' × ' + fx(v.ucr, 0) + ' = ' + fx(v.pna * v.ucr, 0),
         'Cociente × 100 = ' + fx(f, 2) + ' %']);
    } },

  { id: 'ldl', grupo: G_REN, nombre: 'LDL calculado (Friedewald)', em: '🫀',
    que: 'Estimación del colesterol LDL a partir del perfil lipídico habitual, sin medirlo directamente.',
    formula: 'LDL = colesterol total − HDL − (triglicéridos ÷ 5)   [mg/dL; válido si TG < 400]',
    sirve: 'Estratificar el riesgo cardiovascular y decidir la intensidad de la estatina.',
    porque: 'El LDL es la partícula que más se deposita en la pared arterial: bajarlo reduce infartos y ACV de forma proporcional. Medirlo directo es caro; la fórmula lo da con tres datos que ya vienen en el perfil.',
    conducta: 'LDL ≥ 190: probable hipercolesterolemia familiar, estatina de alta intensidad sin calcular riesgo. Con diabetes o enfermedad aterosclerótica la meta es mucho más baja (< 70 mg/dL o menos). Con TG ≥ 400 la fórmula falla: se pide LDL directo.',
    campos: [num('ct', 'Colesterol total', 'mg/dL', 80, 500, 1, 220), num('hdl', 'HDL', 'mg/dL', 10, 120, 1, 40), num('tg', 'Triglicéridos', 'mg/dL', 30, 399, 1, 200)],
    ej: { ct: 240, hdl: 38, tg: 210 }, ejTxt: 'Hombre de 55 años, hipertenso, con colesterol total de 240, HDL de 38 y triglicéridos de 210.',
    calcular(v) {
      const l = v.ct - v.hdl - v.tg / 5;
      const [n, t] = l < 100 ? ['ok', 'Óptimo en población general'] : l < 130 ? ['ok', 'Casi óptimo'] : l < 160 ? ['alerta', 'Limítrofe alto'] : l < 190 ? ['peligro', 'Alto'] : ['peligro', 'Muy alto: pensar en hipercolesterolemia familiar'];
      return R(l, 'mg/dL', n, t + '. Las metas dependen del riesgo del paciente, no solo del número.',
        ['TG ÷ 5 = ' + fx(v.tg / 5, 0), 'LDL = ' + v.ct + ' − ' + v.hdl + ' − ' + fx(v.tg / 5, 0) + ' = ' + fx(l, 0)]);
    } },

  /* ---------------- LIQUIDOS Y ELECTROLITOS ---------------- */
  { id: 'cacorr', grupo: G_LIQ, nombre: 'Calcio corregido por albúmina', em: '🦴',
    que: 'Calcio total ajustado a una albúmina normal de 4 g/dL.',
    formula: 'Ca corregido = Ca total + 0,8 × (4 − albúmina)   [mg/dL y g/dL]',
    sirve: 'Saber si un calcio «bajo» o «alto» lo es de verdad.',
    porque: 'Casi la mitad del calcio circula pegado a la albúmina. Con albúmina baja el calcio total cae aunque el calcio libre (el que actúa) sea normal; si lo tratas, lo subes de más.',
    conducta: 'Un calcio total de 7,5 con albúmina de 2,0 corrige a 9,1: normal, no se suplementa. Ante duda o en paciente crítico se mide el calcio iónico directamente.',
    campos: [num('ca', 'Calcio total', 'mg/dL', 4, 18, 0.1, 8), num('alb', 'Albúmina', 'g/dL', 1, 6, 0.1, 4)],
    ej: { ca: 7.4, alb: 2.2 }, ejTxt: 'Paciente cirrótico con calcio total de 7,4 mg/dL y albúmina de 2,2 g/dL.',
    calcular(v) {
      const c = v.ca + 0.8 * (4 - v.alb);
      const [n, t] = c < 8.5 ? ['peligro', 'Hipocalcemia real'] : c <= 10.5 ? ['ok', 'Normal'] : ['peligro', 'Hipercalcemia real'];
      return R(c, 'mg/dL', n, t + '. Rango normal: 8,5 a 10,5.',
        ['4 − albúmina = ' + fx(4 - v.alb, 1), '0,8 × ' + fx(4 - v.alb, 1) + ' = ' + fx(0.8 * (4 - v.alb), 2), 'Ca corregido = ' + fx(v.ca, 1) + ' + ' + fx(0.8 * (4 - v.alb), 2) + ' = ' + fx(c, 1)]);
    } },

  { id: 'nacorr', grupo: G_LIQ, nombre: 'Sodio corregido por glucosa', em: '🍬',
    que: 'Sodio que tendría el paciente si su glucosa fuera normal.',
    formula: 'Na corregido = Na medido + 1,6 × (glucosa − 100) ÷ 100   [mg/dL]',
    sirve: 'Interpretar el sodio en la hiperglucemia (cetoacidosis, estado hiperosmolar).',
    porque: 'La glucosa alta arrastra agua desde las células al plasma y diluye el sodio. Un sodio «bajo» puede ser solo dilución: el sodio corregido muestra si hay déficit de agua real.',
    conducta: 'Si el Na corregido es normal o alto, la hiponatremia es por dilución y el paciente está deshidratado: se repone volumen y se corrige la glucosa. Según el autor el factor es 1,6 o 2,4 (este último con glucosa > 400).',
    campos: [num('na', 'Sodio medido', 'mEq/L', 100, 170, 1, 130), num('glu', 'Glucosa', 'mg/dL', 80, 1500, 1, 600)],
    ej: { na: 128, glu: 700 }, ejTxt: 'Paciente en cetoacidosis diabética con sodio de 128 y glucosa de 700 mg/dL.',
    calcular(v) {
      const c = v.na + 1.6 * (v.glu - 100) / 100;
      const [n, t] = c < 135 ? ['alerta', 'Sigue baja tras corregir: hay hiponatremia verdadera'] : c <= 145 ? ['ok', 'Normal: el sodio bajo era solo dilución'] : ['peligro', 'Alta: déficit importante de agua libre'];
      return R(c, 'mEq/L', n, t + '.',
        ['Exceso de glucosa = ' + (v.glu - 100) + ' mg/dL', '1,6 × ' + (v.glu - 100) + ' ÷ 100 = ' + fx(1.6 * (v.glu - 100) / 100, 1), 'Na corregido = ' + v.na + ' + ' + fx(1.6 * (v.glu - 100) / 100, 1) + ' = ' + fx(c, 1)]);
    } },

  { id: 'nadef', grupo: G_LIQ, nombre: 'Déficit de sodio (hiponatremia)', em: '🧂',
    que: 'Cantidad de sodio que hace falta para llevar el sodio sérico a una cifra segura.',
    formula: 'Déficit (mEq) = f × peso (kg) × (Na deseado − Na actual).  f = 0,6 hombre / 0,5 mujer',
    sirve: 'Planificar la reposición de sodio en hiponatremia sintomática o grave.',
    porque: 'El sodio se reparte por el agua corporal total; esa agua es una fracción del peso. La fórmula traduce «cuánto subir» en «cuántos mEq poner».',
    conducta: 'El peligro no es el cálculo, es la velocidad: no subir más de 8 mEq/L en 24 h (10 como máximo). Corregir rápido provoca mielinólisis osmótica. Con síntomas graves (convulsión, coma) se da un bolo de 100 a 150 mL de salino al 3 % y se revalora.',
    campos: [sel('sexo', 'Sexo', SEXO, 1), num('peso', 'Peso', 'kg', 20, 200, 0.1, 70), num('nac', 'Na actual', 'mEq/L', 100, 134, 1, 118), num('nad', 'Na deseado', 'mEq/L', 110, 140, 1, 126)],
    ej: { sexo: 0, peso: 60, nac: 116, nad: 124 }, ejTxt: 'Mujer de 60 kg con convulsión y sodio de 116 mEq/L; el objetivo inicial es 124.',
    calcular(v) {
      const f = v.sexo === 1 ? 0.6 : 0.5, d = f * v.peso * (v.nad - v.nac), sube = v.nad - v.nac;
      const h = sube / 8 * 24;
      return R(d, 'mEq de sodio', sube > 8 ? 'alerta' : 'info',
        sube > 8 ? 'Subes más de 8 mEq/L: hazlo en más de 24 h, no de golpe.' : 'Dentro del límite de 8 mEq/L en 24 h.',
        ['Agua corporal = ' + f + ' × ' + fx(v.peso, 1) + ' = ' + fx(f * v.peso, 1) + ' L', 'Subida = ' + v.nad + ' − ' + v.nac + ' = ' + sube + ' mEq/L',
         'Déficit = ' + fx(f * v.peso, 1) + ' × ' + sube + ' = ' + fx(d, 0) + ' mEq'],
        [{ etq: 'Tiempo mínimo a 8 mEq/L/día', val: fx(h, 0) + ' h' }, { etq: 'Equivale a salino 3 % (513 mEq/L)', val: fx(d / 0.513, 0) + ' mL' }]);
    } },

  { id: 'aguadef', grupo: G_LIQ, nombre: 'Déficit de agua libre (hipernatremia)', em: '💧',
    que: 'Litros de agua que faltan para devolver el sodio a 140 mEq/L.',
    formula: 'Déficit (L) = ACT × (Na actual ÷ 140 − 1).  ACT = 0,6 × peso (hombre) / 0,5 × peso (mujer)',
    sirve: 'Reponer el agua en la hipernatremia (deshidratación hipertónica, diabetes insípida).',
    porque: 'La hipernatremia es casi siempre falta de agua, no exceso de sal. Calcular el déficit dice cuánta agua dar en total.',
    conducta: 'Se corrige despacio: bajar el sodio no más de 10 mEq/L por día (0,5 mEq/L/h). Un descenso brusco mete agua en las neuronas y causa edema cerebral. Si hay shock se repone primero con salino isotónico.',
    campos: [sel('sexo', 'Sexo', SEXO, 1), num('peso', 'Peso', 'kg', 20, 200, 0.1, 70), num('na', 'Na actual', 'mEq/L', 146, 190, 1, 160)],
    ej: { sexo: 1, peso: 70, na: 162 }, ejTxt: 'Hombre de 70 kg, anciano, con infección urinaria y sodio de 162 mEq/L.',
    calcular(v) {
      const act = (v.sexo === 1 ? 0.6 : 0.5) * v.peso, d = act * (v.na / 140 - 1), h = (v.na - 140) / 10 * 24;
      return R(d, 'L de agua libre', 'info', 'Repón en 48 a 72 h; el sodio no debe bajar más de 10 mEq/L al día.',
        ['ACT = ' + (v.sexo === 1 ? 0.6 : 0.5) + ' × ' + fx(v.peso, 1) + ' = ' + fx(act, 1) + ' L', 'Na ÷ 140 − 1 = ' + fx(v.na / 140 - 1, 3), 'Déficit = ' + fx(act, 1) + ' × ' + fx(v.na / 140 - 1, 3) + ' = ' + fx(d, 1) + ' L'],
        [{ etq: 'Tiempo mínimo de corrección', val: fx(h, 0) + ' h' }]);
    } },

  { id: 'osm', grupo: G_LIQ, nombre: 'Osmolaridad sérica', em: '🔬',
    que: 'Concentración de partículas disueltas en el plasma, calculada con sodio, glucosa y urea.',
    formula: 'Osm = 2 × Na + glucosa ÷ 18 + BUN ÷ 2,8   [mEq/L y mg/dL]',
    sirve: 'Clasificar la hiponatremia, diagnosticar el estado hiperosmolar y buscar tóxicos (brecha osmolar).',
    porque: 'El agua se mueve hacia donde hay más partículas: lo que mantiene o rompe el volumen de las células es la osmolaridad, no el sodio aislado.',
    conducta: 'Osm > 320 con glucosa muy alta: estado hiperosmolar. Si la osmolaridad medida supera a la calculada en más de 10 (brecha osmolar), sospecha metanol, etilenglicol o isopropanol.',
    campos: [num('na', 'Sodio', 'mEq/L', 100, 180, 1, 140), num('glu', 'Glucosa', 'mg/dL', 40, 1500, 1, 90), num('bun', 'BUN', 'mg/dL', 2, 200, 1, 14)],
    ej: { na: 150, glu: 900, bun: 40 }, ejTxt: 'Adulto mayor diabético, confuso, con Na 150, glucosa 900 y BUN 40.',
    calcular(v) {
      const o = 2 * v.na + v.glu / 18 + v.bun / 2.8;
      const [n, t] = o < 275 ? ['alerta', 'Hipoosmolar'] : o <= 295 ? ['ok', 'Normal'] : o <= 320 ? ['alerta', 'Hiperosmolar'] : ['peligro', 'Hiperosmolaridad grave (riesgo de coma)'];
      return R(o, 'mOsm/kg', n, t + '. Rango normal: 275 a 295.',
        ['2 × ' + v.na + ' = ' + 2 * v.na, v.glu + ' ÷ 18 = ' + fx(v.glu / 18, 1), v.bun + ' ÷ 2,8 = ' + fx(v.bun / 2.8, 1), 'Suma = ' + fx(o, 0)]);
    } },

  { id: 'balance', grupo: G_LIQ, nombre: 'Balance hídrico', em: '📋',
    que: 'Diferencia entre lo que entra y lo que sale del cuerpo en un período, incluyendo las pérdidas insensibles.',
    formula: 'Balance = ingresos − egresos − pérdidas insensibles.  Insensibles ≈ 0,5 mL × kg × horas',
    sirve: 'Vigilar el estado de volumen en el hospitalizado: insuficiencia cardíaca, falla renal, sepsis, posoperatorio.',
    porque: 'El peso, la presión y el edema responden tarde; el balance acumulado detecta a tiempo que se está dando demasiado o demasiado poco.',
    conducta: 'Balance muy positivo con edema o disnea: restringir líquidos o usar diurético. Muy negativo con hipotensión y oliguria: reponer. Con fiebre las pérdidas insensibles suben cerca de 10 % por cada grado sobre 37 °C.',
    campos: [num('vo', 'Ingreso oral', 'mL', 0, 6000, 10, 1000), num('iv', 'Líquidos IV', 'mL', 0, 8000, 10, 1500), num('ori', 'Diuresis', 'mL', 0, 8000, 10, 1200), num('otr', 'Otras pérdidas (drenajes, vómitos, diarrea)', 'mL', 0, 6000, 10, 300), num('peso', 'Peso', 'kg', 3, 250, 0.1, 70), num('h', 'Horas del período', 'h', 1, 72, 1, 24)],
    ej: { vo: 800, iv: 2000, ori: 900, otr: 400, peso: 70, h: 24 }, ejTxt: 'Paciente con neumonía, 70 kg, balance de las últimas 24 horas.',
    calcular(v) {
      const ing = v.vo + v.iv, ins = 0.5 * v.peso * v.h, egr = v.ori + v.otr, b = ing - egr - ins;
      const [n, t] = Math.abs(b) < 500 ? ['ok', 'Cercano a cero'] : b > 0 ? ['alerta', 'Balance positivo: vigilar edema y disnea'] : ['alerta', 'Balance negativo: vigilar presión y diuresis'];
      return R(b, 'mL', n, t + '.',
        ['Ingresos = ' + v.vo + ' + ' + v.iv + ' = ' + ing + ' mL', 'Egresos = ' + v.ori + ' + ' + v.otr + ' = ' + egr + ' mL', 'Insensibles = 0,5 × ' + fx(v.peso, 1) + ' × ' + v.h + ' = ' + fx(ins, 0) + ' mL',
         'Balance = ' + ing + ' − ' + egr + ' − ' + fx(ins, 0) + ' = ' + fx(b, 0) + ' mL']);
    } },

  { id: 'diuresis', grupo: G_LIQ, nombre: 'Diuresis horaria', em: '🚽',
    que: 'Volumen de orina por kilo de peso y por hora.',
    formula: 'Diuresis (mL/kg/h) = orina (mL) ÷ peso (kg) ÷ horas',
    sirve: 'Medir la perfusión renal y la respuesta a la reanimación con líquidos.',
    porque: 'El riñón es un sensor de perfusión: si recibe sangre suficiente, produce orina. Es el signo más sencillo de que el tratamiento del shock funciona.',
    conducta: 'Meta en el paciente grave: ≥ 0,5 mL/kg/h en adultos (≥ 1 en niños y ≥ 2 en lactantes). Menos de eso es oliguria: primero asegura volumen y presión, luego busca obstrucción (sonda, globo vesical) y recién después el diurético.',
    campos: [num('ori', 'Orina recogida', 'mL', 0, 5000, 5, 180), num('peso', 'Peso', 'kg', 3, 250, 0.1, 70), num('h', 'Horas', 'h', 1, 24, 1, 6)],
    ej: { ori: 150, peso: 70, h: 6 }, ejTxt: 'Paciente séptico, 70 kg, que orinó 150 mL en 6 horas.',
    calcular(v) {
      const d = v.ori / v.peso / v.h;
      const [n, t] = d < 0.3 ? ['peligro', 'Oliguria marcada'] : d < 0.5 ? ['alerta', 'Oliguria'] : d <= 3 ? ['ok', 'Adecuada'] : ['alerta', 'Alta: buscar causa (diuréticos, glucosuria, diabetes insípida)'];
      return R(d, 'mL/kg/h', n, t + '. Meta adulto: ≥ 0,5.',
        [v.ori + ' mL ÷ ' + fx(v.peso, 1) + ' kg = ' + fx(v.ori / v.peso, 2) + ' mL/kg', fx(v.ori / v.peso, 2) + ' ÷ ' + v.h + ' h = ' + fx(d, 2) + ' mL/kg/h']);
    } },

  { id: 'parkland', grupo: G_LIQ, nombre: 'Reanimación del quemado (Parkland)', em: '🔥',
    que: 'Volumen de Ringer lactato para las primeras 24 horas de un gran quemado.',
    formula: 'Volumen 24 h (mL) = 4 × peso (kg) × % superficie quemada.  La mitad en las primeras 8 h, la otra mitad en las siguientes 16 h',
    sirve: 'Reponer el enorme líquido que se fuga al intersticio tras una quemadura extensa y evitar el shock.',
    porque: 'La quemadura daña los capilares: el plasma sale del vaso. Sin reposición agresiva el paciente cae en shock hipovolémico y pierde riñón e intestino.',
    conducta: 'Se cuenta desde la hora de la quemadura, no de la llegada. Solo cuenta 2.º y 3.er grado (regla de los nueve). Es un punto de partida: se ajusta a la diuresis (0,5 mL/kg/h en adultos). Pasarse (edema, síndrome compartimental) es tan malo como quedarse corto.',
    campos: [num('peso', 'Peso', 'kg', 10, 200, 0.1, 70), num('sc', 'Superficie quemada (2.º y 3.er grado)', '%', 10, 100, 1, 30)],
    ej: { peso: 80, sc: 30 }, ejTxt: 'Hombre de 80 kg con quemaduras de 2.º y 3.er grado en el 30 % de la superficie corporal.',
    calcular(v) {
      const t = 4 * v.peso * v.sc;
      return R(t, 'mL en 24 h', 'info', 'Ringer lactato. Ajusta cada hora según la diuresis.',
        ['4 × ' + fx(v.peso, 1) + ' × ' + v.sc + ' = ' + fx(t, 0) + ' mL', 'Primera mitad: ' + fx(t / 2, 0) + ' mL en 8 h = ' + fx(t / 2 / 8, 0) + ' mL/h', 'Segunda mitad: ' + fx(t / 2, 0) + ' mL en 16 h = ' + fx(t / 2 / 16, 0) + ' mL/h'],
        [{ etq: 'Primeras 8 h', val: fx(t / 2 / 8, 0) + ' mL/h' }, { etq: 'Siguientes 16 h', val: fx(t / 2 / 16, 0) + ' mL/h' }]);
    } },

  /* ---------------- ACIDO-BASE Y RESPIRATORIO ---------------- */
  { id: 'gap', grupo: G_AB, nombre: 'Brecha aniónica', em: '⚗️',
    que: 'Diferencia entre los cationes y los aniones medidos: refleja los aniones que no se miden (lactato, cetonas, tóxicos).',
    formula: 'Brecha = Na − (Cl + HCO₃).  Corregida = brecha + 2,5 × (4 − albúmina)',
    sirve: 'Clasificar la acidosis metabólica: con brecha alta o con brecha normal.',
    porque: 'Si el bicarbonato baja porque se acumula un ácido nuevo, aparece un anión extra que no se mide y la brecha sube. Si baja porque se pierde (diarrea) entra cloro y la brecha no cambia.',
    conducta: 'Brecha alta: busca lactato, cetonas, uremia o tóxicos (mnemotecnia MUDPILES). Brecha normal: busca diarrea, acidosis tubular renal o exceso de salino. La albúmina baja esconde brechas altas: por eso se corrige.',
    campos: [num('na', 'Sodio', 'mEq/L', 100, 180, 1, 140), num('cl', 'Cloro', 'mEq/L', 70, 130, 1, 104), num('hco3', 'Bicarbonato', 'mEq/L', 3, 40, 1, 24), num('alb', 'Albúmina', 'g/dL', 1, 6, 0.1, 4)],
    ej: { na: 138, cl: 98, hco3: 10, alb: 3.0 }, ejTxt: 'Paciente diabético con vómitos, respiración profunda, Na 138, Cl 98, HCO₃ 10 y albúmina de 3,0.',
    calcular(v) {
      const g = v.na - (v.cl + v.hco3), gc = g + 2.5 * (4 - v.alb);
      const [n, t] = gc > 12 ? ['peligro', 'Brecha alta: se acumula un ácido nuevo'] : gc < 8 ? ['alerta', 'Brecha baja: revisar albúmina y paraproteínas'] : ['ok', 'Brecha normal'];
      return R(gc, 'mEq/L', n, t + '. Normal corregida: 8 a 12.',
        ['Cl + HCO₃ = ' + v.cl + ' + ' + v.hco3 + ' = ' + (v.cl + v.hco3), 'Brecha = ' + v.na + ' − ' + (v.cl + v.hco3) + ' = ' + g, 'Corrección por albúmina = ' + g + ' + 2,5 × ' + fx(4 - v.alb, 1) + ' = ' + fx(gc, 1)],
        [{ etq: 'Brecha sin corregir', val: String(g) }]);
    } },

  { id: 'winter', grupo: G_AB, nombre: 'Fórmula de Winter', em: '🌬️',
    que: 'PCO₂ que se espera como compensación respiratoria de una acidosis metabólica.',
    formula: 'PCO₂ esperada = 1,5 × HCO₃ + 8  (± 2)',
    sirve: 'Saber si el pulmón está compensando bien o si hay un trastorno respiratorio agregado.',
    porque: 'Ante una acidosis metabólica el paciente hiperventila para botar CO₂. Si respira menos de lo esperado, se agota o hay otra causa respiratoria.',
    conducta: 'PCO₂ medida mayor que la esperada: acidosis respiratoria añadida (fatiga, sedación): prepara soporte ventilatorio. Menor: alcalosis respiratoria añadida (sepsis, dolor, salicilatos).',
    campos: [num('hco3', 'Bicarbonato', 'mEq/L', 3, 22, 1, 10), num('pco2', 'PCO₂ medida', 'mmHg', 10, 80, 1, 24)],
    ej: { hco3: 10, pco2: 35 }, ejTxt: 'Paciente con cetoacidosis, HCO₃ de 10 y PCO₂ de 35 mmHg.',
    calcular(v) {
      const e = 1.5 * v.hco3 + 8, lo = e - 2, hi = e + 2;
      const [n, t] = v.pco2 > hi ? ['peligro', 'PCO₂ más alta de lo esperado: acidosis respiratoria agregada (el pulmón no compensa)'] : v.pco2 < lo ? ['alerta', 'PCO₂ más baja de lo esperado: alcalosis respiratoria agregada'] : ['ok', 'Compensación adecuada'];
      return R(e, 'mmHg (esperada)', n, t + '.',
        ['1,5 × ' + v.hco3 + ' = ' + fx(1.5 * v.hco3, 1), '+ 8 = ' + fx(e, 1), 'Rango esperado: ' + fx(lo, 1) + ' a ' + fx(hi, 1) + '; medida: ' + v.pco2]);
    } },

  { id: 'pf', grupo: G_AB, nombre: 'Relación PaO₂/FiO₂', em: '🫁',
    que: 'Cociente entre la presión de oxígeno arterial y la fracción de oxígeno inspirado.',
    formula: 'PaO₂/FiO₂ = PaO₂ (mmHg) ÷ FiO₂ (en fracción: 40 % = 0,40)',
    sirve: 'Medir la gravedad de la falla respiratoria y clasificar el SDRA.',
    porque: 'Una PaO₂ de 80 es buena respirando aire pero es pésima con oxígeno al 100 %. El cociente corrige por cuánto oxígeno se está dando.',
    conducta: 'SDRA (criterios de Berlín, con PEEP ≥ 5): leve 200–300, moderado 100–200, grave ≤ 100. Grave indica ventilación protectora (6 mL/kg), PEEP alta y valorar decúbito prono.',
    campos: [num('pao2', 'PaO₂', 'mmHg', 30, 500, 1, 80), num('fio2', 'FiO₂', '%', 21, 100, 1, 50)],
    ej: { pao2: 70, fio2: 80 }, ejTxt: 'Paciente con neumonía grave, PaO₂ de 70 mmHg con FiO₂ al 80 %.',
    calcular(v) {
      const p = v.pao2 / (v.fio2 / 100);
      const [n, t] = p > 300 ? ['ok', 'Sin criterio de SDRA'] : p > 200 ? ['alerta', 'SDRA leve'] : p > 100 ? ['peligro', 'SDRA moderado'] : ['peligro', 'SDRA grave'];
      return R(p, 'mmHg', n, t + '. Normal: > 400.',
        ['FiO₂ en fracción = ' + v.fio2 + ' ÷ 100 = ' + fx(v.fio2 / 100, 2), 'PaO₂/FiO₂ = ' + v.pao2 + ' ÷ ' + fx(v.fio2 / 100, 2) + ' = ' + fx(p, 0)]);
    } },

  /* ---------------- ESCALAS DE RIESGO Y GRAVEDAD ---------------- */
  { id: 'pam', grupo: G_ESC, nombre: 'Presión arterial media (PAM)', em: '🩸',
    que: 'Presión promedio con la que la sangre perfunde los órganos durante todo el ciclo cardíaco.',
    formula: 'PAM = (PAS + 2 × PAD) ÷ 3',
    sirve: 'Saber si los órganos reciben presión suficiente; es la meta del paciente en shock.',
    porque: 'El corazón pasa más tiempo en diástole que en sístole, por eso la diastólica pesa el doble. Los órganos se perfunden con la media, no con la sistólica.',
    conducta: 'PAM < 65 mmHg se asocia a hipoperfusión: en shock séptico se reanima con líquidos y se agrega norepinefrina para mantener ≥ 65. En hipertensión intracraneal la PAM define la presión de perfusión cerebral.',
    campos: [num('pas', 'Presión sistólica', 'mmHg', 40, 260, 1, 120), num('pad', 'Presión diastólica', 'mmHg', 20, 160, 1, 80)],
    ej: { pas: 85, pad: 45 }, ejTxt: 'Paciente con sepsis y presión de 85/45 mmHg.',
    calcular(v) {
      const m = (v.pas + 2 * v.pad) / 3;
      const [n, t] = m < 65 ? ['peligro', 'Por debajo de 65: riesgo de hipoperfusión'] : m <= 100 ? ['ok', 'Normal'] : ['alerta', 'Elevada'];
      return R(m, 'mmHg', n, t + '. Normal: 70 a 100.',
        ['2 × ' + v.pad + ' = ' + 2 * v.pad, v.pas + ' + ' + 2 * v.pad + ' = ' + (v.pas + 2 * v.pad), '÷ 3 = ' + fx(m, 0)]);
    } },

  { id: 'chads', grupo: G_ESC, nombre: 'CHA₂DS₂-VASc (fibrilación auricular)', em: '🧠',
    que: 'Puntaje que estima el riesgo de ACV embólico en la fibrilación auricular no valvular.',
    formula: 'Insuficiencia cardíaca 1 · HTA 1 · Edad ≥ 75: 2 · Diabetes 1 · ACV/AIT previo 2 · Enfermedad vascular 1 · Edad 65–74: 1 · Sexo femenino 1',
    sirve: 'Decidir si se anticoagula a un paciente con fibrilación auricular.',
    porque: 'La fibrilación forma coágulos en la aurícula que viajan al cerebro. No todos tienen el mismo riesgo: la escala separa a quien se beneficia de anticoagular de quien solo recibiría el riesgo de sangrar.',
    conducta: 'Hombre ≥ 2 o mujer ≥ 3: anticoagular (de preferencia un anticoagulante oral directo; warfarina si estenosis mitral moderada-grave o válvula mecánica). Hombre 1 o mujer 2: considerar. Hombre 0 o mujer 1: sin antitrombótico. Se acompaña de HAS-BLED para corregir factores de sangrado.',
    campos: [chk('icc', 'Insuficiencia cardíaca o FEVI reducida'), chk('hta', 'Hipertensión arterial'), sel('edad', 'Edad', [[0, 'Menor de 65'], [1, '65 a 74'], [2, '75 o más']], 0), chk('dm', 'Diabetes mellitus'), chk('acv', 'ACV, AIT o embolia previa'), chk('vasc', 'Infarto previo, enfermedad arterial periférica o placa aórtica'), sel('muj', 'Sexo', [[0, 'Hombre'], [1, 'Mujer']], 0)],
    ej: { icc: 0, hta: 1, edad: 2, dm: 1, acv: 0, vasc: 0, muj: 0 }, ejTxt: 'Hombre de 78 años, hipertenso y diabético, con fibrilación auricular.',
    calcular(v) {
      const s = v.icc + v.hta + v.edad + v.dm + 2 * v.acv + v.vasc + v.muj, muj = v.muj === 1;
      const umbral = muj ? 3 : 2;
      const [n, t] = s >= umbral ? ['peligro', 'Indicación de anticoagular'] : s === umbral - 1 ? ['alerta', 'Considerar anticoagular, individualizar'] : ['ok', 'Sin tratamiento antitrombótico'];
      return R(s, 'puntos', n, t + '.',
        ['IC ' + v.icc + ' + HTA ' + v.hta + ' + edad ' + v.edad + ' + DM ' + v.dm + ' + ACV ' + 2 * v.acv + ' + vascular ' + v.vasc + ' + sexo ' + v.muj, 'Total = ' + s + ' (umbral para ' + (muj ? 'mujer' : 'hombre') + ': ' + umbral + ')']);
    } },

  { id: 'hasbled', grupo: G_ESC, nombre: 'HAS-BLED (riesgo de sangrado)', em: '🩹',
    que: 'Puntaje que estima el riesgo de sangrado mayor en un paciente que toma anticoagulante.',
    formula: '1 punto por cada uno: HTA no controlada (PAS > 160) · función renal alterada · función hepática alterada · ACV previo · sangrado previo · INR lábil · edad > 65 · fármacos (antiplaquetarios/AINE) · alcohol',
    sirve: 'Detectar qué factores de sangrado se pueden corregir antes y durante la anticoagulación.',
    porque: 'Anticoagular previene el ACV pero sangra. Muchos de los factores de sangrado son modificables: la presión alta, el alcohol, el AINE, el INR que baila.',
    conducta: 'HAS-BLED ≥ 3 es riesgo alto: no se niega el anticoagulante por eso, se corrige lo corregible y se controla más de cerca. Se usa para vigilar, no para prohibir.',
    campos: [chk('hta', 'Hipertensión no controlada (PAS > 160)'), chk('ren', 'Función renal anormal (diálisis, trasplante o Cr > 2,26)'), chk('hep', 'Función hepática anormal (cirrosis o bilirrubina > 2× normal)'), chk('acv', 'ACV previo'), chk('san', 'Sangrado previo o predisposición'), chk('inr', 'INR lábil (menos del 60 % en rango)'), chk('eda', 'Edad mayor de 65'), chk('far', 'Antiplaquetarios o AINE'), chk('alc', 'Alcohol (≥ 8 bebidas por semana)')],
    ej: { hta: 1, ren: 0, hep: 0, acv: 0, san: 0, inr: 0, eda: 1, far: 1, alc: 0 }, ejTxt: 'Paciente de 72 años con fibrilación auricular, hipertensión mal controlada y aspirina diaria.',
    calcular(v) {
      const s = v.hta + v.ren + v.hep + v.acv + v.san + v.inr + v.eda + v.far + v.alc;
      const [n, t] = s >= 3 ? ['peligro', 'Riesgo alto de sangrado: corregir factores y vigilar de cerca'] : s === 2 ? ['alerta', 'Riesgo moderado'] : ['ok', 'Riesgo bajo'];
      return R(s, 'puntos', n, t + '.', ['Suma de los factores marcados = ' + s]);
    } },

  { id: 'wells', grupo: G_ESC, nombre: 'Wells para embolia pulmonar', em: '🫁',
    que: 'Probabilidad clínica de embolia pulmonar antes de pedir pruebas.',
    formula: 'Signos de TVP 3 · EP más probable que otro diagnóstico 3 · FC > 100: 1,5 · Inmovilización o cirugía reciente 1,5 · TVP/EP previa 1,5 · Hemoptisis 1 · Cáncer activo 1',
    sirve: 'Elegir la prueba correcta: dímero D si la probabilidad es baja, angio-TC directa si es alta.',
    porque: 'El dímero D es muy sensible pero poco específico: solo sirve para descartar cuando la sospecha es baja. Pedirlo con sospecha alta pierde tiempo y confunde.',
    conducta: '≤ 4 (EP improbable): dímero D; si es negativo, se descarta. > 4 (EP probable): angio-TC pulmonar de inmediato, y se empieza anticoagulación si hay retraso. Con inestabilidad hemodinámica, el camino es otro: ecocardiograma y valorar trombólisis.',
    campos: [chk('tvp', 'Signos clínicos de TVP (pierna hinchada y dolorosa)'), chk('ep', 'EP es el diagnóstico más probable'), chk('fc', 'Frecuencia cardíaca > 100'), chk('inm', 'Inmovilización ≥ 3 días o cirugía en las últimas 4 semanas'), chk('prev', 'TVP o EP previas'), chk('hem', 'Hemoptisis'), chk('ca', 'Cáncer activo')],
    ej: { tvp: 1, ep: 1, fc: 1, inm: 0, prev: 0, hem: 0, ca: 0 }, ejTxt: 'Mujer con pierna derecha hinchada, disnea súbita y pulso de 108.',
    calcular(v) {
      const s = 3 * v.tvp + 3 * v.ep + 1.5 * v.fc + 1.5 * v.inm + 1.5 * v.prev + v.hem + v.ca;
      const [n, t] = s > 4 ? ['peligro', 'EP probable: ir directo a angio-TC'] : ['ok', 'EP improbable: pedir dímero D'];
      return R(s, 'puntos', n, t + '.', ['Suma de los criterios marcados = ' + fx(s, 1) + ' (el corte es 4)']);
    } },

  { id: 'curb', grupo: G_ESC, nombre: 'CURB-65 (neumonía)', em: '🫁',
    que: 'Puntaje de gravedad de la neumonía adquirida en la comunidad.',
    formula: '1 punto por cada uno: Confusión · Urea > 19 mg/dL (BUN) · Frecuencia respiratoria ≥ 30 · Presión (PAS < 90 o PAD ≤ 60) · edad ≥ 65',
    sirve: 'Decidir dónde se trata al paciente: casa, sala o cuidados intensivos.',
    porque: 'La mortalidad de la neumonía sube a medida que se suman fallas de órganos y edad. Con cinco datos de cabecera se separa al paciente seguro del que puede morir.',
    conducta: '0–1: ambulatorio, antibiótico oral. 2: ingreso en sala. 3–4: neumonía grave, considerar UCI. Es una ayuda, no sustituye el juicio: hipoxemia, derrame o incapacidad de tomar medicación también ingresan.',
    campos: [chk('conf', 'Confusión nueva'), chk('bun', 'BUN > 19 mg/dL (urea > 7 mmol/L)'), chk('fr', 'Frecuencia respiratoria ≥ 30'), chk('pa', 'PAS < 90 o PAD ≤ 60 mmHg'), chk('edad', 'Edad ≥ 65 años')],
    ej: { conf: 1, bun: 1, fr: 0, pa: 0, edad: 1 }, ejTxt: 'Hombre de 74 años, confuso, con tos, fiebre y BUN de 24 mg/dL.',
    calcular(v) {
      const s = v.conf + v.bun + v.fr + v.pa + v.edad;
      const [n, t] = s <= 1 ? ['ok', 'Bajo riesgo: manejo ambulatorio'] : s === 2 ? ['alerta', 'Riesgo intermedio: ingreso en sala'] : ['peligro', 'Neumonía grave: considerar UCI'];
      return R(s, 'puntos', n, t + '.', ['Suma de los criterios marcados = ' + s]);
    } },

  { id: 'glasgow', grupo: G_ESC, nombre: 'Escala de coma de Glasgow', em: '🧠',
    que: 'Medida del nivel de conciencia por tres respuestas: ocular, verbal y motora.',
    formula: 'Glasgow = ocular (1–4) + verbal (1–5) + motora (1–6).  Mínimo 3, máximo 15',
    sirve: 'Clasificar la gravedad del trauma craneal y vigilar la evolución del paciente con alteración de conciencia.',
    porque: 'Dos observadores distintos deben poder comparar el estado neurológico con el mismo lenguaje; un número permite ver que el paciente mejora o empeora.',
    conducta: '13–15 leve, 9–12 moderado, ≤ 8 grave: con Glasgow ≤ 8 se asegura la vía aérea (intubación). Un descenso de 2 o más puntos obliga a repetir la TC y llamar a neurocirugía. Siempre se anota el mejor y el peor valor.',
    campos: [sel('o', 'Apertura ocular', [[4, '4 · Espontánea'], [3, '3 · Al hablarle'], [2, '2 · Al dolor'], [1, '1 · Ninguna']], 4),
             sel('vb', 'Respuesta verbal', [[5, '5 · Orientado'], [4, '4 · Confuso'], [3, '3 · Palabras inapropiadas'], [2, '2 · Sonidos incomprensibles'], [1, '1 · Ninguna']], 5),
             sel('m', 'Respuesta motora', [[6, '6 · Obedece órdenes'], [5, '5 · Localiza el dolor'], [4, '4 · Retira'], [3, '3 · Flexión anormal'], [2, '2 · Extensión anormal'], [1, '1 · Ninguna']], 6)],
    ej: { o: 2, vb: 3, m: 4 }, ejTxt: 'Hombre con trauma craneal: abre los ojos solo al dolor, dice palabras sueltas y retira el brazo al dolor.',
    calcular(v) {
      const s = v.o + v.vb + v.m;
      const [n, t] = s >= 13 ? ['ok', 'Trauma craneal leve'] : s >= 9 ? ['alerta', 'Trauma craneal moderado'] : ['peligro', 'Trauma craneal grave: asegurar la vía aérea'];
      return R(s, 'de 15', n, t + '.', ['Ocular ' + v.o + ' + verbal ' + v.vb + ' + motora ' + v.m + ' = ' + s]);
    } },

  { id: 'meld', grupo: G_ESC, nombre: 'MELD-Na (hepatopatía terminal)', em: '🫀',
    que: 'Puntaje de gravedad de la cirrosis y prioridad en la lista de trasplante hepático.',
    formula: 'MELD = 10 × [0,957·ln(Cr) + 0,378·ln(bilirrubina) + 1,120·ln(INR) + 0,643].  MELD-Na = MELD + 1,32×(137−Na) − 0,033×MELD×(137−Na) si MELD > 11',
    sirve: 'Estimar la mortalidad a 3 meses y ordenar la lista de trasplante.',
    porque: 'Bilirrubina, INR y creatinina miden la falla de síntesis, de coagulación y del riñón (síndrome hepatorrenal): las tres cosas que hacen morir al cirrótico. El sodio bajo añade riesgo.',
    conducta: 'MELD ≥ 15: referir a un centro de trasplante. Valores por debajo de 1,0 se redondean a 1,0 y la creatinina se topa en 4,0; el sodio se limita entre 125 y 137.',
    campos: [num('bili', 'Bilirrubina total', 'mg/dL', 0.3, 40, 0.1, 1), num('inr', 'INR', '', 0.8, 8, 0.1, 1), num('cr', 'Creatinina', 'mg/dL', 0.3, 12, 0.1, 1), num('na', 'Sodio', 'mEq/L', 110, 150, 1, 137)],
    ej: { bili: 4.2, inr: 1.9, cr: 1.6, na: 129 }, ejTxt: 'Cirrótico con bilirrubina 4,2, INR 1,9, creatinina 1,6 y sodio 129.',
    calcular(v) {
      const b = Math.max(1, v.bili), i = Math.max(1, v.inr), c = Math.min(4, Math.max(1, v.cr)), na = Math.min(137, Math.max(125, v.na));
      const meld = Math.round(10 * (0.957 * Math.log(c) + 0.378 * Math.log(b) + 1.12 * Math.log(i) + 0.643));
      const mn = meld > 11 ? Math.round(meld + 1.32 * (137 - na) - 0.033 * meld * (137 - na)) : meld;
      const [n, t, mort] = mn < 10 ? ['ok', 'Bajo', '≈ 2 %'] : mn < 20 ? ['alerta', 'Moderado', '≈ 6 %'] : mn < 30 ? ['peligro', 'Alto', '≈ 20 %'] : mn < 40 ? ['peligro', 'Muy alto', '≈ 50 %'] : ['peligro', 'Crítico', '> 70 %'];
      return R(mn, 'puntos', n, t + '. Mortalidad aproximada a 3 meses: ' + mort + '.',
        ['Valores usados: bili ' + b + ', INR ' + i + ', Cr ' + c + ', Na ' + na, 'MELD = ' + meld, 'MELD-Na = ' + mn],
        [{ etq: 'MELD sin sodio', val: String(meld) }]);
    } },

  /* ---------------- PEDIATRIA, OBSTETRICIA Y DOSIS ---------------- */
  { id: 'apgar', grupo: G_PED, nombre: 'Puntaje de Apgar', em: '👶',
    que: 'Evaluación rápida del recién nacido al minuto y a los 5 minutos de vida.',
    formula: 'Apgar = color + frecuencia cardíaca + respuesta a estímulos + tono + respiración (0, 1 o 2 puntos cada uno)',
    sirve: 'Saber cuánto necesita el recién nacido de reanimación y cómo responde a ella.',
    porque: 'Cinco signos sencillos resumen si el bebé hizo la transición a la vida fuera del útero. Repetirlo a los 5 minutos mide si las maniobras funcionaron.',
    conducta: '7–10: normal. 4–6: depresión moderada, estimular y dar oxígeno. 0–3: depresión grave, reanimación inmediata. No se espera al Apgar para reanimar: si no respira o la frecuencia es < 100, se actúa en los primeros 30 segundos.',
    campos: [sel('fc', 'Frecuencia cardíaca', [[2, '2 · Más de 100'], [1, '1 · Menos de 100'], [0, '0 · Ausente']], 2), sel('res', 'Respiración', [[2, '2 · Llanto vigoroso'], [1, '1 · Lenta o irregular'], [0, '0 · Ausente']], 2),
             sel('ton', 'Tono muscular', [[2, '2 · Movimientos activos'], [1, '1 · Flexión leve'], [0, '0 · Flácido']], 2), sel('ref', 'Respuesta a estímulos', [[2, '2 · Llora o tose'], [1, '1 · Mueca'], [0, '0 · Ninguna']], 2),
             sel('col', 'Color', [[2, '2 · Rosado completo'], [1, '1 · Cuerpo rosado, extremidades azules'], [0, '0 · Azul o pálido']], 2)],
    ej: { fc: 1, res: 1, ton: 1, ref: 1, col: 0 }, ejTxt: 'Recién nacido al minuto: pulso de 90, llanto débil, flexión leve, mueca al estímulo y color azul.',
    calcular(v) {
      const s = v.fc + v.res + v.ton + v.ref + v.col;
      const [n, t] = s >= 7 ? ['ok', 'Normal'] : s >= 4 ? ['alerta', 'Depresión moderada'] : ['peligro', 'Depresión grave: reanimación inmediata'];
      return R(s, 'de 10', n, t + '.', ['FC ' + v.fc + ' + respiración ' + v.res + ' + tono ' + v.ton + ' + reflejos ' + v.ref + ' + color ' + v.col + ' = ' + s]);
    } },

  { id: 'dosisped', grupo: G_PED, nombre: 'Dosis pediátrica por peso', em: '🧴',
    que: 'Cálculo de la dosis de un fármaco para un niño según su peso, y su conversión a mililitros del jarabe.',
    formula: 'Dosis por toma (mg) = mg/kg/día × peso ÷ número de tomas.   Volumen (mL) = dosis por toma ÷ concentración (mg/mL)',
    sirve: 'Prescribir con seguridad antibióticos, antipiréticos y otros fármacos en niños.',
    porque: 'El niño no es un adulto pequeño: su dosis cambia con el peso y el margen de error es mínimo. Un error de coma decimal es un error de diez veces.',
    conducta: 'Verifica siempre la dosis máxima diaria y que no supere la dosis de adulto. Anota los mL que debe dar la madre, no solo los mg. Ejemplo típico: amoxicilina 90 mg/kg/día en 2 tomas para otitis media.',
    campos: [num('dkd', 'Dosis indicada', 'mg/kg/día', 1, 400, 1, 50), num('peso', 'Peso del niño', 'kg', 1, 60, 0.1, 12), num('tomas', 'Tomas al día', '', 1, 6, 1, 3), num('conc', 'Concentración del jarabe', 'mg/mL', 1, 200, 0.5, 50)],
    ej: { dkd: 90, peso: 14, tomas: 2, conc: 80 }, ejTxt: 'Niño de 14 kg con otitis media: amoxicilina a 90 mg/kg/día en 2 tomas; el jarabe trae 400 mg por 5 mL (80 mg/mL).',
    calcular(v) {
      const dia = v.dkd * v.peso, toma = dia / v.tomas, ml = toma / v.conc;
      return R(ml, 'mL por toma', 'info', 'Confirma que la dosis diaria no pase del máximo del fármaco.',
        ['Dosis diaria = ' + v.dkd + ' × ' + fx(v.peso, 1) + ' = ' + fx(dia, 0) + ' mg/día', 'Por toma = ' + fx(dia, 0) + ' ÷ ' + v.tomas + ' = ' + fx(toma, 0) + ' mg', 'Volumen = ' + fx(toma, 0) + ' ÷ ' + v.conc + ' = ' + fx(ml, 1) + ' mL'],
        [{ etq: 'Miligramos por toma', val: fx(toma, 0) + ' mg' }, { etq: 'Dosis diaria total', val: fx(dia, 0) + ' mg' }]);
    } },

  { id: 'mant', grupo: G_PED, nombre: 'Líquidos de mantenimiento (Holliday-Segar)', em: '🍼',
    que: 'Volumen de líquido que necesita un niño en 24 horas por sus pérdidas normales de orina y piel.',
    formula: '10 kg primeros: 100 mL/kg · 10 kg siguientes: 50 mL/kg · cada kg sobre 20: 20 mL/kg.   Regla 4-2-1 por hora: 4 mL/kg, 2 mL/kg, 1 mL/kg',
    sirve: 'Prescribir la hidratación intravenosa de mantenimiento en niños que no pueden beber.',
    porque: 'Cuanto más pequeño es el niño, más agua gasta por kilo. La fórmula parte del gasto calórico: 1 mL de agua por cada caloría gastada.',
    conducta: 'Es solo el mantenimiento: no incluye el déficit de una deshidratación ni las pérdidas en curso. Usa solución isotónica (salino con dextrosa y potasio) para evitar la hiponatremia hospitalaria. Máximo adulto: 2 400 mL/día.',
    campos: [num('peso', 'Peso', 'kg', 2, 80, 0.1, 15)],
    ej: { peso: 18 }, ejTxt: 'Niño de 18 kg con gastroenteritis que no tolera la vía oral.',
    calcular(v) {
      const p = v.peso, d = p <= 10 ? 100 * p : p <= 20 ? 1000 + 50 * (p - 10) : 1500 + 20 * (p - 20), h = d / 24;
      return R(d, 'mL/día', 'info', 'Equivale a ' + fx(h, 0) + ' mL/h. Añade el déficit y las pérdidas en curso si las hay.',
        [p <= 10 ? '100 × ' + fx(p, 1) + ' = ' + fx(d, 0) : p <= 20 ? '1000 + 50 × (' + fx(p, 1) + ' − 10) = ' + fx(d, 0) : '1500 + 20 × (' + fx(p, 1) + ' − 20) = ' + fx(d, 0), 'Por hora = ' + fx(d, 0) + ' ÷ 24 = ' + fx(h, 0) + ' mL/h'],
        [{ etq: 'Velocidad', val: fx(h, 0) + ' mL/h' }]);
    } },

  { id: 'goteo', grupo: G_PED, nombre: 'Goteo de una infusión', em: '💧',
    que: 'Gotas por minuto necesarias para pasar un volumen en un tiempo dado.',
    formula: 'Gotas/min = volumen (mL) × factor de goteo (gotas/mL) ÷ (horas × 60).   Macrogoteo: 20 gotas/mL (15 en algunos equipos) · Microgoteo: 60 gotas/mL',
    sirve: 'Regular una venoclisis a la velocidad prescrita cuando no hay bomba de infusión.',
    porque: 'Un líquido pasado demasiado rápido sobrecarga el corazón; demasiado lento no cumple el tratamiento. La enfermera necesita convertir «1 000 mL en 8 horas» en gotas que pueda contar.',
    conducta: 'Con microgoteo, las gotas por minuto son iguales a los mL por hora. Fármacos con margen estrecho (potasio, heparina, vasopresores) siempre en bomba, nunca a «ojo».',
    campos: [num('vol', 'Volumen', 'mL', 10, 5000, 10, 1000), num('h', 'Tiempo', 'horas', 0.25, 48, 0.25, 8), sel('f', 'Equipo', [[20, 'Macrogoteo (20 gotas/mL)'], [15, 'Macrogoteo (15 gotas/mL)'], [60, 'Microgoteo (60 gotas/mL)']], 20)],
    ej: { vol: 1000, h: 8, f: 20 }, ejTxt: 'Indicación: pasar 1 000 mL de solución salina en 8 horas con equipo de 20 gotas/mL.',
    calcular(v) {
      const g = v.vol * v.f / (v.h * 60), ml = v.vol / v.h;
      return R(g, 'gotas/min', 'info', 'Cuenta las gotas durante un minuto completo y ajusta la llave.',
        [v.vol + ' × ' + v.f + ' = ' + fx(v.vol * v.f, 0), v.h + ' h × 60 = ' + fx(v.h * 60, 0) + ' min', 'Gotas/min = ' + fx(v.vol * v.f, 0) + ' ÷ ' + fx(v.h * 60, 0) + ' = ' + fx(g, 0)],
        [{ etq: 'Velocidad', val: fx(ml, 0) + ' mL/h' }]);
    } },

  { id: 'fpp', grupo: G_PED, nombre: 'Edad gestacional y fecha probable de parto', em: '🤰',
    que: 'Semanas de embarazo y fecha estimada del parto a partir de la fecha de la última regla (FUM).',
    formula: 'Edad gestacional = días desde la FUM ÷ 7.   FPP = FUM + 280 días (regla de Naegele: + 7 días y − 3 meses)',
    sirve: 'Seguir el embarazo, programar los controles y estudios, y decidir cuándo un parto es pretérmino o postérmino.',
    porque: 'Casi todas las decisiones obstétricas dependen de la edad gestacional: cuándo hacer la morfológica, cuándo dar corticoides, cuándo inducir. Un cálculo errado cambia la conducta.',
    conducta: 'La regla de Naegele supone ciclos de 28 días: con ciclos irregulares o FUM dudosa se corrige con la ecografía del primer trimestre (longitud cráneo-caudal). Embarazo a término: 37 a 41 semanas; pretérmino: antes de 37.',
    campos: [{ id: 'fum', etq: 'Fecha de la última regla', tipo: 'fecha', rand: [60, 260] }, { id: 'hoy', etq: 'Fecha de hoy', tipo: 'fecha', rand: [0, 0] }],
    ej: { fum: '2026-01-10', hoy: '2026-10-08' }, ejTxt: 'Mujer con última regla el 10 de enero de 2026, que consulta el 8 de octubre de 2026.',
    calcular(v) {
      const d = dias(v.fum, v.hoy);
      if (!(d >= 0)) return R(null, '', 'alerta', 'La fecha de hoy debe ser posterior a la FUM.', []);
      const sem = Math.floor(d / 7), r = d % 7;
      const [n, t] = sem < 37 ? ['alerta', sem < 28 ? 'Embarazo pretérmino (antes de la semana 37)' : 'Embarazo pretérmino tardío'] : sem <= 41 ? ['ok', 'A término'] : ['peligro', 'Postérmino (más de 41 semanas)'];
      const tri = sem < 14 ? 'primer' : sem < 28 ? 'segundo' : 'tercer';
      return R(sem, 'semanas', n, t + '. Cursa el ' + tri + ' trimestre.',
        ['Días desde la FUM = ' + d, d + ' ÷ 7 = ' + sem + ' semanas y ' + r + ' días', 'FPP = FUM + 280 días = ' + sumaDias(v.fum, 280)],
        [{ etq: 'Edad gestacional', val: sem + ' sem ' + r + ' d' }, { etq: 'Fecha probable de parto', val: sumaDias(v.fum, 280) }]);
    } }
  ];

  window.CALCULOS_GRUPOS = [G_REN, G_LIQ, G_AB, G_ESC, G_PED];
})();
