/* ============================================================
   ANALITICAS, IMAGENES Y TRAZADOS (ENURMIA)
   Catalogo de pruebas: que mide, que diagnostica sola o en
   combinacion, cuando pedirla y en que fijarse. Y los patrones
   combinados que se reconocen a la cabecera.
   El texto es de redaccion propia; los valores son los de uso
   habitual en adultos y pueden variar segun el laboratorio.
   ============================================================ */
window.PRUEBAS_GRUPOS = ['Hematología y coagulación', 'Química y metabolismo', 'Corazón y pulmón', 'Hígado, páncreas y riñón', 'Endocrino', 'Orina y microbiología', 'Imagen y neuro'];

window.PRUEBAS = [

  /* ---------- Hematologia y coagulacion ---------- */
  { id: 'hemograma', grupo: 'Hematología y coagulación', nombre: 'Hemograma completo', em: '🩸',
    mide: 'Glóbulos rojos (hemoglobina, VCM), glóbulos blancos con su fórmula y plaquetas.',
    solo: 'Anemia (Hb < 13 g/dL en hombres, < 12 en mujeres), leucocitosis o leucopenia, trombocitopenia o trombocitosis.',
    combinada: 'El VCM clasifica la anemia (micro, normo o macrocítica) y orienta la causa. Leucocitosis con neutrofilia y bandas sugiere infección bacteriana; eosinofilia, parásitos o alergia; linfocitosis, infección viral o leucemia linfática.',
    cuando: 'Casi cualquier paciente hospitalizado; fiebre, sangrado, palidez, fatiga, infecciones, antes de cirugía.',
    ojo: 'Un hemograma normal no descarta infección. En hemorragia aguda la hemoglobina tarda horas en bajar: no te confíes de la primera cifra.' },

  { id: 'vsg_pcr', grupo: 'Hematología y coagulación', nombre: 'VSG y proteína C reactiva (PCR)', em: '🔥',
    mide: 'Marcadores de inflamación: la PCR sube y baja en horas; la VSG, en días.',
    solo: 'No diagnostican nada por sí solos: dicen que hay inflamación.',
    combinada: 'VSG muy elevada (> 100) con cefalea y dolor mandibular en mayor de 50: arteritis de células gigantes. PCR alta con leucocitosis en un abdomen agudo: sube la probabilidad de apendicitis o colecistitis. Seguimiento de infecciones y artritis.',
    cuando: 'Sospecha de arteritis, polimialgia, artritis inflamatoria, infección profunda; seguimiento de la respuesta al tratamiento.',
    ojo: 'Poco específicos. La VSG sube con anemia, edad y embarazo.' },

  { id: 'frotis', grupo: 'Hematología y coagulación', nombre: 'Frotis de sangre periférica', em: '🔬',
    mide: 'La forma de las células vistas al microscopio.',
    solo: 'Esquistocitos (anemia hemolítica microangiopática), blastos (leucemia), parásitos (malaria).',
    combinada: 'Esquistocitos + plaquetas bajas + falla renal o neurológica: púrpura trombocitopénica trombótica o síndrome hemolítico urémico. Células en lápiz y microcitosis: ferropenia. Hipersegmentados: déficit de B12 o folato.',
    cuando: 'Anemia sin causa clara, trombocitopenia, hemograma con alteraciones raras, fiebre tras viaje a zona de malaria.',
    ojo: 'Depende de quien lo lea: pide que lo revise un hematólogo si hay dudas.' },

  { id: 'ferritina', grupo: 'Hematología y coagulación', nombre: 'Ferritina y perfil de hierro', em: '🧲',
    mide: 'Las reservas de hierro (ferritina), el hierro circulante, la transferrina y su saturación.',
    solo: 'Ferritina < 30 ng/mL confirma ferropenia.',
    combinada: 'Anemia microcítica con ferritina baja: ferropenia. Ferritina normal o alta con hierro bajo: anemia de enfermedad crónica. Ferritina alta con saturación > 45 %: sobrecarga de hierro (hemocromatosis).',
    cuando: 'Anemia microcítica, fatiga con hemoglobina normal, caída de cabello, sospecha de sobrecarga de hierro.',
    ojo: 'La ferritina es un reactante de fase aguda: en inflamación sube y puede enmascarar una ferropenia (ahí se usa un corte de hasta 100).' },

  { id: 'retic', grupo: 'Hematología y coagulación', nombre: 'Reticulocitos', em: '🌱',
    mide: 'Glóbulos rojos jóvenes: la respuesta de la médula a la anemia.',
    solo: 'Alto: la médula responde (hemólisis o sangrado). Bajo: la médula no produce.',
    combinada: 'Anemia con reticulocitos altos + LDH alta + bilirrubina indirecta alta + haptoglobina baja: hemólisis. Anemia con reticulocitos bajos: déficit de hierro, B12, enfermedad crónica o falla medular.',
    cuando: 'Toda anemia nueva en la que se dude si es por producción baja o por pérdida/destrucción.',
    ojo: 'Se interpreta corregido por el hematocrito (índice reticulocitario).' },

  { id: 'tpinr', grupo: 'Hematología y coagulación', nombre: 'TP / INR', em: '⏱️',
    mide: 'La vía extrínseca y común de la coagulación (factores VII, X, V, II y fibrinógeno).',
    solo: 'INR alargado: déficit de factores dependientes de vitamina K, hepatopatía o warfarina.',
    combinada: 'TP alargado con TTPa normal: déficit de factor VII o warfarina (al inicio). Ambos alargados: hepatopatía grave, coagulación intravascular diseminada, déficit de vitamina K.',
    cuando: 'Control de warfarina, estudio de sangrado, hepatopatía, antes de cirugía o punción.',
    ojo: 'Se toma en tubo azul lleno hasta la marca; si no, sale falsamente largo.' },

  { id: 'ttpa', grupo: 'Hematología y coagulación', nombre: 'TTPa', em: '⏱️',
    mide: 'La vía intrínseca y común (factores VIII, IX, XI, XII).',
    solo: 'Alargado: hemofilia, heparina no fraccionada, anticoagulante lúpico.',
    combinada: 'TTPa alargado con TP normal: hemofilia A o B, enfermedad de von Willebrand o heparina. Si no corrige al mezclar con plasma normal, hay un inhibidor (anticoagulante lúpico, anticuerpo contra factor VIII).',
    cuando: 'Control de heparina no fraccionada, sangrado, trombosis recurrente, abortos de repetición.',
    ojo: 'Un TTPa alargado sin sangrado puede ser anticoagulante lúpico, que trombosa en vez de sangrar.' },

  { id: 'dimero', grupo: 'Hematología y coagulación', nombre: 'Dímero D', em: '🧩',
    mide: 'Un producto de la degradación del coágulo de fibrina.',
    solo: 'Normal descarta con seguridad la trombosis cuando la sospecha es baja o intermedia.',
    combinada: 'Se usa después de calcular la probabilidad clínica (escala de Wells): sospecha baja y dímero negativo, se descarta embolia o trombosis. Con probabilidad alta no sirve: se va directo a la imagen.',
    cuando: 'Sospecha baja o intermedia de embolia pulmonar o trombosis venosa profunda; coagulación intravascular diseminada.',
    ojo: 'Sube con cirugía, cáncer, embarazo, infección y edad: un resultado alto no confirma nada. En mayores de 50 se ajusta el corte (edad × 10 ng/mL).' },

  /* ---------- Quimica y metabolismo ---------- */
  { id: 'glucosa', grupo: 'Química y metabolismo', nombre: 'Glucosa', em: '🍬',
    mide: 'La concentración de glucosa en sangre.',
    solo: 'Ayunas ≥ 126 mg/dL en dos ocasiones, o ≥ 200 al azar con síntomas, es diabetes. Menos de 70 es hipoglucemia.',
    combinada: 'Glucosa muy alta con cetonas y acidosis: cetoacidosis diabética. Glucosa > 600 con osmolaridad > 320 sin cetosis: estado hiperosmolar. Glucemia baja con insulina alta y péptido C alto: insulinoma o sulfonilureas.',
    cuando: 'Toda alteración de conciencia, convulsión, poliuria, polidipsia, sepsis, embarazo.',
    ojo: 'Se consume en el tubo si tarda en llegar al laboratorio: tubo gris o procesamiento rápido.' },

  { id: 'hba1c', grupo: 'Química y metabolismo', nombre: 'Hemoglobina glicosilada (HbA1c)', em: '📅',
    mide: 'El promedio de la glucosa de los últimos 2 a 3 meses.',
    solo: '≥ 6,5 % diagnostica diabetes; 5,7 a 6,4 %, prediabetes.',
    combinada: 'Junto con la glucosa de ayunas confirma el diagnóstico. En el diabético es la medida de control: la meta suele ser < 7 %, individualizada.',
    cuando: 'Cribado y seguimiento de diabetes, cada 3 a 6 meses.',
    ojo: 'No es fiable con anemia hemolítica, hemorragia reciente, transfusión o hemoglobinopatías.' },

  { id: 'electrolitos', grupo: 'Química y metabolismo', nombre: 'Electrolitos (Na, K, Cl, HCO₃)', em: '🧂',
    mide: 'Sodio, potasio, cloro y bicarbonato séricos.',
    solo: 'Hiponatremia, hiperpotasemia, hipopotasemia y sus riesgos (arritmias, convulsiones).',
    combinada: 'Con ellos se calcula la brecha aniónica (Na − Cl − HCO₃): una acidosis con brecha alta sugiere cetoacidosis, lactato, uremia o tóxicos. Na bajo con osmolaridad baja y orina concentrada: SIADH.',
    cuando: 'Todo paciente hospitalizado, vómitos, diarrea, diuréticos, falla renal, alteración de conciencia, arritmia.',
    ojo: 'Potasio falsamente alto por hemólisis o EDTA en el tubo: repite antes de tratar si no cuadra con el ECG.' },

  { id: 'gaso', grupo: 'Química y metabolismo', nombre: 'Gasometría arterial', em: '💨',
    mide: 'pH, PaO₂, PaCO₂, bicarbonato y exceso de base.',
    solo: 'Define si hay acidosis o alcalosis, y si es respiratoria o metabólica; mide la gravedad de la hipoxemia.',
    combinada: 'pH bajo con HCO₃ bajo: acidosis metabólica (se calcula la brecha y la fórmula de Winter). pH bajo con PaCO₂ alta: acidosis respiratoria (EPOC, sedación). PaO₂/FiO₂ mide la gravedad de la falla respiratoria.',
    cuando: 'Disnea intensa, shock, sepsis, cetoacidosis, intoxicación, paciente ventilado.',
    ojo: 'Una saturación normal no excluye acidosis ni hipercapnia.' },

  { id: 'lactato', grupo: 'Química y metabolismo', nombre: 'Lactato', em: '⚡',
    mide: 'El producto del metabolismo sin oxígeno.',
    solo: '> 2 mmol/L indica hipoperfusión o metabolismo anaerobio; > 4 es grave.',
    combinada: 'En sepsis define el shock séptico junto a hipotensión que necesita vasopresor. Alto con isquemia mesentérica: dolor abdominal desproporcionado. También sube con metformina, convulsiones y ejercicio intenso.',
    cuando: 'Sospecha de sepsis, shock, dolor abdominal con mala apariencia, paciente grave.',
    ojo: 'Un lactato normal no descarta sepsis; uno elevado obliga a reanimar y repetir.' },

  { id: 'cetonas', grupo: 'Química y metabolismo', nombre: 'Cetonas (β-hidroxibutirato)', em: '🧪',
    mide: 'Los cuerpos cetónicos que produce el hígado cuando no hay insulina suficiente.',
    solo: '> 3 mmol/L con acidosis confirma cetoacidosis.',
    combinada: 'Glucosa alta + cetonas + pH bajo + HCO₃ bajo: cetoacidosis diabética. Cetonas altas con glucosa normal: cetoacidosis alcohólica o de ayuno, o por inhibidores de SGLT2 (cetoacidosis euglucémica).',
    cuando: 'Diabético con vómitos, dolor abdominal o malestar; paciente en tratamiento con inhibidor de SGLT2.',
    ojo: 'La cetonuria en tira reactiva subestima el β-hidroxibutirato, que es el que predomina.' },

  { id: 'lipidos', grupo: 'Química y metabolismo', nombre: 'Perfil lipídico', em: '🫀',
    mide: 'Colesterol total, LDL, HDL y triglicéridos.',
    solo: 'Dislipidemia: LDL elevado, triglicéridos altos, HDL bajo.',
    combinada: 'Se interpreta con el riesgo cardiovascular global. Triglicéridos > 500 mg/dL: riesgo de pancreatitis. Colesterol alto con TSH alta: hipotiroidismo; con proteinuria: síndrome nefrótico.',
    cuando: 'Cribado cardiovascular, diabetes, hipertensión, antecedente familiar, pancreatitis, hipotiroidismo.',
    ojo: 'Se pide en ayunas solo si hay hipertrigliceridemia; antes de tratar descarta causas secundarias (TSH, glucosa, proteinuria).' },

  /* ---------- Corazon y pulmon ---------- */
  { id: 'ecg', grupo: 'Corazón y pulmón', nombre: 'Electrocardiograma (ECG)', em: '📈',
    mide: 'La actividad eléctrica del corazón.',
    solo: 'Elevación del ST en dos derivaciones contiguas: infarto con elevación del ST. Ritmo irregular sin ondas P: fibrilación auricular.',
    combinada: 'Dolor torácico + ECG normal no excluye infarto: se repite y se mide troponina. T picudas: hiperpotasemia. QT largo: riesgo de torsades (fármacos, hipocalcemia). S1Q3T3 con taquicardia: sospecha de embolia pulmonar.',
    cuando: 'Dolor torácico, disnea, síncope, palpitaciones, alteraciones electrolíticas, antes de iniciar fármacos que alargan el QT. Dentro de los primeros 10 minutos en dolor torácico.',
    ojo: 'El ECG inicial normal no descarta síndrome coronario agudo; repite a los 15 a 30 minutos si persiste el dolor.' },

  { id: 'troponina', grupo: 'Corazón y pulmón', nombre: 'Troponina de alta sensibilidad', em: '❤️',
    mide: 'Una proteína que se libera cuando se daña el músculo cardíaco.',
    solo: 'Elevada con cambio entre dos tomas y cuadro clínico: infarto agudo de miocardio.',
    combinada: 'Troponina alta + elevación del ST: infarto con elevación del ST (no se espera el resultado para reperfundir). Troponina alta sin elevación del ST: infarto sin elevación (NSTEMI). Troponina alta con picos leves y sin dinámica: miocarditis, embolia, insuficiencia renal, sepsis.',
    cuando: 'Dolor torácico, equivalentes anginosos, disnea inexplicada, síncope.',
    ojo: 'Sube con muchas causas no coronarias; lo que importa es la dinámica (subida y bajada) y el contexto clínico.' },

  { id: 'bnp', grupo: 'Corazón y pulmón', nombre: 'BNP / NT-proBNP', em: '💗',
    mide: 'Una hormona que libera el corazón cuando sus paredes se estiran por sobrecarga.',
    solo: 'NT-proBNP < 300 pg/mL descarta casi con seguridad insuficiencia cardíaca aguda.',
    combinada: 'Disnea + BNP muy alto + cardiomegalia en la radiografía: insuficiencia cardíaca. Disnea + BNP bajo: piensa en EPOC, neumonía, embolia.',
    cuando: 'Disnea de causa dudosa, seguimiento de la insuficiencia cardíaca.',
    ojo: 'Sube con edad, falla renal y fibrilación auricular; baja en la obesidad (puede dar falsos negativos).' },

  { id: 'rxtorax', grupo: 'Corazón y pulmón', nombre: 'Radiografía de tórax', em: '🩻',
    mide: 'Los pulmones, la silueta cardíaca, el mediastino y la pleura.',
    solo: 'Neumonía (condensación), neumotórax, derrame pleural, cardiomegalia, mediastino ensanchado.',
    combinada: 'Cardiomegalia + líneas de Kerley + derrame: insuficiencia cardíaca. Mediastino ensanchado con dolor intenso: sospecha de disección aórtica. Aire bajo el diafragma con abdomen agudo: perforación.',
    cuando: 'Disnea, tos, fiebre, dolor torácico, trauma, antes de cirugía en pacientes de riesgo.',
    ojo: 'Una radiografía normal no descarta embolia pulmonar ni neumonía incipiente.' },

  { id: 'ecocardio', grupo: 'Corazón y pulmón', nombre: 'Ecocardiograma', em: '🫀',
    mide: 'La estructura y la función del corazón en tiempo real.',
    solo: 'Fracción de eyección, válvulas, derrame pericárdico, hipertrofia, hipertensión pulmonar.',
    combinada: 'Ventrículo izquierdo dilatado con FEVI baja: insuficiencia cardíaca sistólica. Zona que no se mueve: infarto reciente. VD dilatado con septo plano: sobrecarga por embolia pulmonar. Derrame con colapso de cavidades: taponamiento.',
    cuando: 'Insuficiencia cardíaca, soplo nuevo, dolor torácico con ECG poco claro, sospecha de endocarditis, shock sin causa evidente.',
    ojo: 'Es operador-dependiente. En urgencias una ecografía focalizada (POCUS) responde preguntas puntuales.' },

  { id: 'angiotc', grupo: 'Corazón y pulmón', nombre: 'Angio-TC de arterias pulmonares', em: '🖥️',
    mide: 'La luz de las arterias pulmonares con contraste yodado.',
    solo: 'Defecto de llenado en una arteria pulmonar: embolia pulmonar.',
    combinada: 'Se pide cuando la probabilidad clínica de embolia es alta, o con probabilidad baja y dímero D positivo. Además valora el cociente VD/VI como marcador de gravedad.',
    cuando: 'Sospecha de embolia pulmonar con probabilidad alta o dímero D positivo.',
    ojo: 'Contraste nefrotóxico: mide la función renal antes. En embarazadas se prefiere gammagrafía o dopplers de piernas primero.' },

  /* ---------- Higado, pancreas y rinon ---------- */
  { id: 'creatinina', grupo: 'Hígado, páncreas y riñón', nombre: 'Creatinina y urea (BUN)', em: '🚰',
    mide: 'Los productos de desecho que filtra el riñón.',
    solo: 'Creatinina que sube ≥ 0,3 mg/dL en 48 h o 1,5 veces la basal: lesión renal aguda.',
    combinada: 'BUN/creatinina > 20 con orina concentrada: prerrenal. Creatinina alta con hidronefrosis en la ecografía: obstructiva. Con proteinuria y hematuria: glomerulopatía.',
    cuando: 'Todo paciente hospitalizado, antes de contraste, ajuste de fármacos, hipertensión, diabetes.',
    ojo: 'Tarda 24 a 48 h en subir: una creatinina normal en el primer día no excluye una lesión renal en curso.' },

  { id: 'fena', grupo: 'Hígado, páncreas y riñón', nombre: 'Excreción fraccional de sodio (FeNa)', em: '🧮',
    mide: 'El porcentaje del sodio filtrado que el riñón elimina por la orina.',
    solo: '< 1 % sugiere lesión prerrenal; > 2 %, necrosis tubular aguda.',
    combinada: 'Con creatinina alta, BUN/Cr > 20 y sedimento urinario sin cilindros: lesión renal aguda prerrenal. Con cilindros granulosos «marrón fangoso»: necrosis tubular aguda.',
    cuando: 'Lesión renal aguda con duda entre origen prerrenal y tubular.',
    ojo: 'Con diuréticos el sodio sale aunque haya déficit de volumen: usa la FeUrea (< 35 % es prerrenal).' },

  { id: 'ast_alt', grupo: 'Hígado, páncreas y riñón', nombre: 'Transaminasas (AST, ALT)', em: '🟤',
    mide: 'Enzimas que salen del hepatocito cuando se daña.',
    solo: 'Elevación marcada: daño hepatocelular.',
    combinada: 'ALT/AST > 1000: hepatitis viral aguda, tóxica (paracetamol) o isquémica. AST/ALT > 2 con GGT alta: hepatopatía alcohólica. Elevación leve y persistente con obesidad: esteatosis metabólica.',
    cuando: 'Ictericia, dolor en hipocondrio derecho, fármacos hepatotóxicos, cribado de hepatitis, ingesta de alcohol.',
    ojo: 'AST también viene del músculo y del corazón: con CK alta piensa en rabdomiólisis.' },

  { id: 'bili_fa', grupo: 'Hígado, páncreas y riñón', nombre: 'Bilirrubina, fosfatasa alcalina y GGT', em: '🟡',
    mide: 'La excreción de bilis: bilirrubina (directa e indirecta), fosfatasa alcalina y GGT.',
    solo: 'FA y GGT altas: colestasis. Bilirrubina directa alta: obstrucción biliar o daño hepático.',
    combinada: 'Ictericia con FA y GGT muy altas y dolor: obstrucción biliar (cálculo, tumor); si hay fiebre, colangitis. Bilirrubina indirecta alta con reticulocitos altos y LDH alta: hemólisis. FA alta con GGT normal: origen óseo.',
    cuando: 'Ictericia, prurito, orina oscura, heces claras, dolor en hipocondrio derecho.',
    ojo: 'La GGT permite saber si la FA es del hígado o del hueso.' },

  { id: 'lipasa', grupo: 'Hígado, páncreas y riñón', nombre: 'Lipasa', em: '🥞',
    mide: 'Una enzima que libera el páncreas dañado.',
    solo: 'Más de 3 veces el límite superior, con dolor típico, confirma pancreatitis aguda.',
    combinada: 'Dolor epigástrico transfixiante + lipasa > 3× + ALT > 150 sugiere pancreatitis biliar. Triglicéridos > 1000: pancreatitis hipertrigliceridémica.',
    cuando: 'Dolor abdominal epigástrico intenso con vómitos.',
    ojo: 'Es más específica que la amilasa; no sirve para medir gravedad.' },

  { id: 'eco_abd', grupo: 'Hígado, páncreas y riñón', nombre: 'Ecografía abdominal', em: '📡',
    mide: 'Hígado, vesícula, vía biliar, riñones, páncreas, vasos y líquido libre.',
    solo: 'Litiasis vesicular, colédoco dilatado, hidronefrosis, apéndice no compresible, líquido libre.',
    combinada: 'Dolor en hipocondrio derecho + signo de Murphy ecográfico + litiasis: colecistitis aguda. Colédoco > 6 mm con ictericia: obstrucción biliar. Riñón dilatado con dolor cólico: obstrucción urinaria.',
    cuando: 'Primera imagen en dolor abdominal alto, ictericia, hematuria, sospecha de apendicitis en jóvenes y embarazadas, trauma abdominal (FAST).',
    ojo: 'No expone a radiación. Es operador-dependiente y el gas intestinal limita la vista del páncreas.' },

  { id: 'tc_abd', grupo: 'Hígado, páncreas y riñón', nombre: 'TC de abdomen y pelvis', em: '🖥️',
    mide: 'Todo el contenido abdominal con gran detalle, generalmente con contraste.',
    solo: 'Apendicitis, diverticulitis, abscesos, obstrucción intestinal, necrosis pancreática, aneurismas, trauma.',
    combinada: 'En dolor abdominal con diagnóstico dudoso, la TC cambia la conducta en más de la mitad de los pacientes. En pancreatitis no se pide en las primeras 72 h salvo duda diagnóstica.',
    cuando: 'Abdomen agudo con duda tras la clínica y la ecografía, trauma, sospecha de complicaciones.',
    ojo: 'Radiación y contraste nefrotóxico. No la pidas si la clínica y la ecografía ya explican el cuadro.' },

  { id: 'rx_abd', grupo: 'Hígado, páncreas y riñón', nombre: 'Radiografía de abdomen', em: '🩻',
    mide: 'El patrón de gas intestinal, el aire libre y las calcificaciones.',
    solo: 'Niveles hidroaéreos: obstrucción intestinal. Aire bajo el diafragma: perforación.',
    combinada: 'Vómitos, distensión y falta de gases con niveles hidroaéreos: obstrucción. Dilatación del colon: megacolon tóxico o vólvulo.',
    cuando: 'Sospecha de obstrucción o perforación cuando no hay TC al alcance.',
    ojo: 'Sensibilidad baja; para perforación es mejor una radiografía de tórax de pie.' },

  /* ---------- Endocrino ---------- */
  { id: 'tsh', grupo: 'Endocrino', nombre: 'TSH y T4 libre', em: '🦋',
    mide: 'La hormona estimulante del tiroides y la hormona tiroidea libre.',
    solo: 'TSH alta con T4 libre baja: hipotiroidismo primario. TSH baja con T4 libre alta: hipertiroidismo.',
    combinada: 'TSH alta con T4 normal: hipotiroidismo subclínico. TSH baja o normal con T4 libre baja: hipotiroidismo central (hipófisis). Con anticuerpos anti-TPO positivos: tiroiditis de Hashimoto.',
    cuando: 'Cansancio, cambios de peso, intolerancia al frío o al calor, palpitaciones, bocio, dislipidemia, fibrilación auricular, infertilidad.',
    ojo: 'En enfermedad aguda grave la TSH puede alterarse sin que haya enfermedad tiroidea: no la pidas en el paciente crítico sin sospecha.' },

  { id: 'antitpo', grupo: 'Endocrino', nombre: 'Anticuerpos anti-TPO', em: '🛡️',
    mide: 'Anticuerpos contra la peroxidasa del tiroides.',
    solo: 'Positivos indican enfermedad tiroidea autoinmune.',
    combinada: 'Con TSH alta: tiroiditis de Hashimoto como causa del hipotiroidismo. Con TSH baja: enfermedad de Graves (junto a anticuerpos contra el receptor de TSH).',
    cuando: 'Hipotiroidismo subclínico para estimar el riesgo de progresar, bocio, infertilidad.',
    ojo: 'No cambian el tratamiento del hipotiroidismo ya establecido.' },

  { id: 'cortisol', grupo: 'Endocrino', nombre: 'Cortisol sérico', em: '🌅',
    mide: 'La principal hormona suprarrenal.',
    solo: 'A las 8 de la mañana, < 3 µg/dL sugiere insuficiencia suprarrenal; > 15 prácticamente la descarta.',
    combinada: 'Hipotensión, hiponatremia, hiperpotasemia y fatiga con cortisol bajo: crisis suprarrenal. Cortisol alto sin supresión con dexametasona: síndrome de Cushing.',
    cuando: 'Hipotensión inexplicada, hiponatremia, uso crónico de corticoides, sospecha de Addison o Cushing.',
    ojo: 'Varía en el día: siempre se pide a las 8 de la mañana. En shock, un valor bajo para el estrés ya es diagnóstico.' },

  /* ---------- Orina y microbiologia ---------- */
  { id: 'ego', grupo: 'Orina y microbiología', nombre: 'Examen general de orina', em: '🧫',
    mide: 'Aspecto, densidad, pH, proteínas, glucosa, cetonas, sangre, leucocitos, nitritos y sedimento.',
    solo: 'Leucocituria + nitritos: infección urinaria. Hematuria: litiasis, glomerulopatía, tumor. Glucosuria: diabetes.',
    combinada: 'Cilindros hemáticos y proteinuria: glomerulonefritis. Cilindros granulosos: necrosis tubular aguda. Densidad alta con sedimento limpio y creatinina alta: prerrenal.',
    cuando: 'Disuria, fiebre sin foco, dolor lumbar, hematuria, diabetes, hipertensión, falla renal.',
    ojo: 'Muestra de chorro medio y orina fresca: una muestra contaminada da falsos positivos.' },

  { id: 'urocultivo', grupo: 'Orina y microbiología', nombre: 'Urocultivo', em: '🧫',
    mide: 'El crecimiento de bacterias de la orina y su sensibilidad a antibióticos.',
    solo: '≥ 100 000 UFC/mL de un germen: infección urinaria (en sintomáticos bastan 10³).',
    combinada: 'Fiebre, dolor lumbar y leucocituria: pielonefritis (se pide siempre). Cistitis no complicada: no hace falta cultivo.',
    cuando: 'Pielonefritis, infección urinaria complicada, embarazo, recurrencias, fallo del tratamiento.',
    ojo: 'Se toma antes del antibiótico. El resultado tarda 48 horas: se empieza tratamiento empírico y se ajusta.' },

  { id: 'hemocultivo', grupo: 'Orina y microbiología', nombre: 'Hemocultivo', em: '🧬',
    mide: 'El crecimiento de microorganismos de la sangre.',
    solo: 'Positivo: bacteriemia o fungemia.',
    combinada: 'Dos tomas positivas con el mismo germen: bacteriemia verdadera; Staphylococcus aureus nunca es contaminante. Con soplo y fiebre: endocarditis.',
    cuando: 'Fiebre con sospecha de sepsis, endocarditis, neumonía grave, colangitis, pielonefritis grave: antes del antibiótico, sin retrasar el tratamiento.',
    ojo: 'Dos pares en sitios distintos. Contamina la flora de la piel si no se desinfecta bien.' },

  { id: 'bhcg', grupo: 'Orina y microbiología', nombre: 'Prueba de embarazo (β-hCG)', em: '🤰',
    mide: 'La hormona gonadotropina coriónica humana.',
    solo: 'Positiva: embarazo (o enfermedad trofoblástica).',
    combinada: 'Dolor abdominal bajo con hCG positiva y útero vacío en la ecografía: embarazo ectópico hasta demostrar lo contrario.',
    cuando: 'Toda mujer en edad fértil con dolor abdominal, antes de radiación, medicamentos teratogénicos o cirugía.',
    ojo: 'Se pide antes de una TC o de fármacos teratogénicos: ahorra decisiones equivocadas.' },

  /* ---------- Imagen y neuro ---------- */
  { id: 'tc_craneo', grupo: 'Imagen y neuro', nombre: 'TC de cráneo sin contraste', em: '🧠',
    mide: 'Sangre, masas, edema y efecto de masa en el cerebro.',
    solo: 'Hiperdensidad en cisternas: hemorragia subaracnoidea. Hiperdensidad intraparenquimatosa: hemorragia. Lesión hipodensa tardía: infarto.',
    combinada: 'Déficit neurológico agudo + TC sin sangre: probable infarto isquémico (se puede trombolizar según ventana). Cefalea en trueno con TC normal en las primeras 6 h: se descarta hemorragia subaracnoidea.',
    cuando: 'Trauma craneal, cefalea súbita, déficit neurológico agudo, alteración de conciencia, convulsión nueva.',
    ojo: 'La TC pierde sensibilidad para hemorragia subaracnoidea después de 6 horas: si es normal y la sospecha persiste, punción lumbar o angiografía.' },

  { id: 'angiotc_cer', grupo: 'Imagen y neuro', nombre: 'Angio-TC cerebral', em: '🖥️',
    mide: 'Las arterias del cerebro con contraste.',
    solo: 'Aneurisma cerebral, malformación arteriovenosa, oclusión de gran vaso.',
    combinada: 'Hemorragia subaracnoidea en la TC + angio-TC con aneurisma: se planea clipaje o embolización. En ACV isquémico agudo localiza la oclusión para trombectomía.',
    cuando: 'Hemorragia subaracnoidea confirmada, sospecha de ACV de gran vaso, disección carotídea.',
    ojo: 'Contraste yodado: función renal y alergia.' },

  { id: 'pl', grupo: 'Imagen y neuro', nombre: 'Punción lumbar (líquido cefalorraquídeo)', em: '💉',
    mide: 'Células, glucosa, proteínas, presión y cultivo del LCR.',
    solo: 'Pleocitosis con neutrófilos, glucosa baja y proteínas altas: meningitis bacteriana.',
    combinada: 'Meningitis viral: linfocitos, glucosa normal, proteínas poco altas. Xantocromía en el sobrenadante a las 12 h: hemorragia subaracnoidea con TC negativa.',
    cuando: 'Sospecha de meningitis o encefalitis; cefalea súbita con TC negativa.',
    ojo: 'Antes, TC si hay papiledema, déficit focal, inmunosupresión o crisis: una masa cerebral con punción puede causar herniación. No retrases el antibiótico por esperarla.' }
];

/* ---------- Patrones combinados ---------- */
window.PATRONES = [
  { titulo: 'Patrón hepatocelular', pistas: ['ALT y AST muy altas (a veces > 1000)', 'FA y GGT poco elevadas', 'Cociente R = (ALT/LSN) ÷ (FA/LSN) > 5'], dx: 'Hepatitis viral aguda, tóxica (paracetamol), isquémica o autoinmune.', nota: 'AST/ALT > 2 con GGT alta y macrocitosis: pensar en alcohol.' },
  { titulo: 'Patrón colestásico', pistas: ['FA y GGT muy altas', 'Bilirrubina directa alta', 'ALT y AST poco elevadas (R < 2)'], dx: 'Obstrucción biliar (cálculo, tumor), colangitis, cirrosis biliar primaria, fármacos.', nota: 'Con fiebre y dolor en hipocondrio derecho: colangitis, urgencia. Ecografía como primer paso.' },
  { titulo: 'Anemia microcítica', pistas: ['VCM < 80 fL', 'Ferritina baja', 'RDW alto, plaquetas altas'], dx: 'Anemia ferropénica. Busca la causa de la pérdida: menstruación, tubo digestivo.', nota: 'Ferritina normal con VCM muy bajo y RDW normal: talasemia. Ferritina alta con hierro bajo: enfermedad crónica.' },
  { titulo: 'Anemia macrocítica', pistas: ['VCM > 100 fL', 'B12 o folato bajos, neutrófilos hipersegmentados', 'Reticulocitos bajos'], dx: 'Anemia megaloblástica (B12, folato). También alcohol, hipotiroidismo, fármacos y mielodisplasia.', nota: 'Con reticulocitos altos, el VCM sube por hemólisis o sangrado.' },
  { titulo: 'Hemólisis', pistas: ['Reticulocitos altos', 'LDH alta y bilirrubina indirecta alta', 'Haptoglobina baja'], dx: 'Anemia hemolítica. Coombs directo: autoinmune; frotis: esquistocitos si microangiopática.', nota: 'Esquistocitos + plaquetas bajas + falla renal o neurológica: púrpura trombocitopénica trombótica, emergencia.' },
  { titulo: 'Acidosis metabólica con brecha alta', pistas: ['pH < 7,35 y HCO₃ bajo', 'Brecha aniónica > 12', 'PCO₂ baja compensadora'], dx: 'Cetoacidosis, acidosis láctica, uremia, intoxicación (metanol, etilenglicol, salicilatos).', nota: 'Mnemotecnia MUDPILES. Con brecha normal: diarrea, acidosis tubular renal, exceso de salino.' },
  { titulo: 'Lesión renal aguda prerrenal', pistas: ['Creatinina sube, BUN/Cr > 20', 'Orina concentrada, sedimento sin cilindros', 'FeNa < 1 %'], dx: 'Hipoperfusión renal por deshidratación, hemorragia, insuficiencia cardíaca o fármacos (IECA, AINE, diuréticos).', nota: 'Se corrige reponiendo volumen y suspendiendo lo que reduce la perfusión. Si no revierte en 48 h, piensa en necrosis tubular.' },
  { titulo: 'Síndrome nefrótico', pistas: ['Proteinuria > 3,5 g/día', 'Albúmina < 3 g/dL', 'Edema y dislipidemia'], dx: 'Glomerulopatía (cambios mínimos, membranosa, GEFS) o diabetes con nefropatía.', nota: 'Riesgo de trombosis venosa por pérdida de antitrombina. Se completa con biopsia.' },
  { titulo: 'Síndrome coronario agudo', pistas: ['Dolor opresivo o equivalente', 'Elevación del ST o cambios en el ECG', 'Troponina alta con subida y bajada'], dx: 'Infarto con elevación del ST (reperfusión inmediata) o sin elevación (estratificación y antitrombóticos).', nota: 'No esperes la troponina si el ECG muestra elevación del ST.' },
  { titulo: 'Insuficiencia cardíaca', pistas: ['Disnea, ortopnea, edema', 'NT-proBNP alto', 'Cardiomegalia y líneas de Kerley en la radiografía'], dx: 'Insuficiencia cardíaca descompensada; el ecocardiograma separa FEVI baja de conservada.', nota: 'Busca el desencadenante: isquemia, arritmia, infección, falta de adherencia.' },
  { titulo: 'Embolia pulmonar', pistas: ['Disnea súbita, dolor pleurítico', 'Wells alto o dímero D positivo', 'Defecto de llenado en la angio-TC'], dx: 'Embolia pulmonar: anticoagulación; reperfusión si hay inestabilidad.', nota: 'Con probabilidad alta, no pidas dímero D: ve directo a la imagen.' },
  { titulo: 'Tiroides', pistas: ['TSH alta + T4 libre baja', 'TSH baja + T4 libre alta', 'TSH alta + T4 libre normal'], dx: 'Hipotiroidismo primario; hipertiroidismo; hipotiroidismo subclínico, respectivamente.', nota: 'TSH baja con T4 libre baja: piensa en el hipotálamo y la hipófisis.' },
  { titulo: 'Pancreatitis aguda', pistas: ['Dolor epigástrico transfixiante', 'Lipasa > 3 veces lo normal', 'Imagen compatible (solo si hay duda)'], dx: 'Pancreatitis: se necesitan 2 de 3. Busca la causa: cálculo, alcohol, triglicéridos.', nota: 'ALT > 150 sugiere origen biliar. TC en las primeras 72 h solo si hay dudas diagnósticas.' },
  { titulo: 'Diabetes mellitus', pistas: ['Glucemia en ayunas ≥ 126 mg/dL', 'HbA1c ≥ 6,5 %', 'Glucemia a las 2 h de la carga ≥ 200, o al azar ≥ 200 con síntomas'], dx: 'Diabetes: se confirma con dos pruebas anormales, o una con síntomas claros.', nota: 'Con cetonas y acidosis: cetoacidosis diabética.' },
  { titulo: 'Coagulopatía según TP y TTPa', pistas: ['TP alargado, TTPa normal', 'TTPa alargado, TP normal', 'Ambos alargados'], dx: 'Déficit de factor VII o warfarina; hemofilia, von Willebrand o heparina; hepatopatía, CID o déficit de vitamina K.', nota: 'Plaquetas bajas con ambos alargados y fibrinógeno bajo: coagulación intravascular diseminada.' },
  { titulo: 'LCR en meningitis', pistas: ['Bacteriana: neutrófilos, glucosa baja, proteínas altas', 'Viral: linfocitos, glucosa normal, proteínas poco altas', 'Tuberculosa o fúngica: linfocitos, glucosa muy baja, proteínas muy altas'], dx: 'Orienta la causa antes del cultivo.', nota: 'Con sospecha de meningitis bacteriana, da antibiótico (y dexametasona) sin esperar la punción lumbar si esta se retrasa.' }
];
