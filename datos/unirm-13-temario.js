/* ============================================================
   UNIRMIA — TEMARIO DEL CUATRIMESTRE 13 (Bloque VII)
   Continua el ciclo clinico del pensum de Medicina de UCATECI.
   23 creditos en ocho asignaturas (fuente de nombres y
   creditos: pensumvirtual.tech, ver nota en asignaturas-unirm.js).
   En la interfaz este cuatrimestre se muestra como "Bloque VII"
   (ver Almacen.nombreBloque) porque el orden cuatrimestral es
   especifico del pensum de UCATECI; el campo interno `cuatri:13`
   no cambia.

   Igual que en cuatrimestres 10, 11 y 12, no existe un temario
   oficial de topicos publicado para este cuatrimestre -solo el
   nombre de cada materia-, asi que los temas de cada bloque son
   de elaboracion propia, con el mismo criterio clinico ya usado
   en el resto de UNIRMIA: lo que realmente se examina y se
   necesita saber en esa rotacion.

   Verificado antes de escribir (chequeo de dos capas, titulo Y
   clave, contra las TRES fuentes: ENURM `apuntes-*.js`, UNIRM
   `unirm-0[7-9]-apuntes*.js`, UNIRM `unirm-1[0-2]-apuntes*.js`):
   0 colisiones. Siete titulos se renombraron preventivamente
   antes de escribir contenido, por colisionar exacto con temas ya
   existentes en ENURM (todos con el sufijo "manejo especializado"
   o similar, para distinguir el enfoque de medicina interna de
   tercer nivel de este bloque del enfoque general ya cubierto en
   ENURM): Enfermedad renal cronica, Lesion renal aguda, Neumonia
   adquirida en la comunidad, Derrame pleural, Artritis reumatoide,
   Lupus eritematoso sistemico, Osteoartritis.

   El orden de los bloques sigue el peso en creditos.
   ============================================================ */
window.TEMARIO = (window.TEMARIO || []).concat([

{
  bloque:'Cardiología', em:'❤️', color:'sangre', programa:'unirm', cuatri:13,
  nota:'Cinco créditos, el mayor peso del cuatrimestre. El corazón del adulto en la práctica de medicina interna: desde la cardiopatía isquémica y la insuficiencia cardíaca hasta las arritmias y las valvulopatías.',
  temas:[
    {t:'Anatomía y fisiología cardiovascular del adulto', claves:['ciclo cardíaco','gasto cardíaco','sistema de conducción cardíaco']},
    {t:'Angina estable y cardiopatía isquémica crónica', claves:['angina de pecho estable','prueba de esfuerzo','cardiopatía isquémica crónica']},
    {t:'Síndrome coronario agudo: manejo especializado', claves:['infarto agudo de miocardio','elevación del segmento ST','terapia de reperfusión']},
    {t:'Insuficiencia cardíaca crónica', claves:['fracción de eyección reducida','fracción de eyección preservada','clasificación funcional NYHA']},
    {t:'Fibrilación auricular', claves:['fibrilación auricular','anticoagulación en fibrilación auricular','control de frecuencia versus ritmo']},
    {t:'Arritmias ventriculares', claves:['taquicardia ventricular','fibrilación ventricular','muerte súbita cardíaca']},
    {t:'Bloqueos de la conducción cardíaca', claves:['bloqueo auriculoventricular','bloqueo de rama','marcapasos definitivo']},
    {t:'Valvulopatías: estenosis', claves:['estenosis aórtica','estenosis mitral','soplo de estenosis valvular']},
    {t:'Valvulopatías: insuficiencia', claves:['insuficiencia mitral','insuficiencia aórtica','soplo de insuficiencia valvular']},
    {t:'Hipertensión arterial sistémica: manejo especializado', claves:['hipertensión resistente','crisis hipertensiva','daño a órgano blanco por hipertensión']},
    {t:'Miocardiopatías', claves:['miocardiopatía dilatada','miocardiopatía hipertrófica','miocardiopatía restrictiva']},
    {t:'Endocarditis infecciosa', claves:['endocarditis infecciosa','vegetación valvular','profilaxis de endocarditis']},
    {t:'Enfermedad arterial periférica', claves:['claudicación intermitente','índice tobillo-brazo','isquemia arterial de miembros']}
  ]
},

{
  bloque:'Nefrología', em:'🫘', color:'ambar', programa:'unirm', cuatri:13,
  nota:'Tres créditos. El riñón en la práctica de medicina interna: desde la fisiología renal básica hasta la enfermedad renal crónica, los trastornos electrolíticos, y las terapias de reemplazo renal.',
  temas:[
    {t:'Anatomía y fisiología renal', claves:['nefrona','filtración glomerular','tasa de filtración glomerular estimada']},
    {t:'Enfermedad renal crónica: manejo especializado', claves:['estadificación de la enfermedad renal crónica','progresión de la enfermedad renal crónica','manejo nefroprotector']},
    {t:'Lesión renal aguda: manejo especializado', claves:['lesión renal aguda prerrenal','lesión renal aguda intrínseca','lesión renal aguda posrenal']},
    {t:'Síndrome nefrótico del adulto', claves:['proteinuria en rango nefrótico','edema nefrótico','hipoalbuminemia por síndrome nefrótico']},
    {t:'Síndrome nefrítico del adulto', claves:['hematuria glomerular','hipertensión por síndrome nefrítico','glomerulonefritis aguda']},
    {t:'Trastornos electrolíticos: sodio y potasio', claves:['hiponatremia','hiperpotasemia','hipopotasemia']},
    {t:'Trastornos del equilibrio ácido-base', claves:['acidosis metabólica','alcalosis metabólica','brecha aniónica']},
    {t:'Glomerulonefritis', claves:['glomerulonefritis membranosa','glomerulonefritis por IgA','glomerulonefritis rápidamente progresiva']},
    {t:'Nefropatía diabética', claves:['nefropatía diabética','microalbuminuria','control glucémico y función renal']},
    {t:'Terapia de reemplazo renal: diálisis', claves:['hemodiálisis','diálisis peritoneal','indicaciones de diálisis urgente']},
    {t:'Trasplante renal: conceptos básicos', claves:['trasplante renal','rechazo del injerto renal','inmunosupresión postrasplante']},
    {t:'Nefrolitiasis: manejo nefrológico', claves:['prevención metabólica de litiasis renal','estudio metabólico del litiásico recurrente','nefrolitiasis complicada']}
  ]
},

{
  bloque:'Neumología', em:'🫁', color:'cielo', programa:'unirm', cuatri:13,
  nota:'Tres créditos. El sistema respiratorio del adulto: desde el asma y la EPOC hasta la neumonía, el tromboembolismo pulmonar, y las urgencias respiratorias.',
  temas:[
    {t:'Anatomía y fisiología respiratoria', claves:['mecánica ventilatoria','intercambio gaseoso pulmonar','espirometría básica']},
    {t:'Asma del adulto', claves:['asma bronquial del adulto','clasificación de severidad del asma','broncodilatadores en el asma']},
    {t:'Enfermedad pulmonar obstructiva crónica', claves:['enfermedad pulmonar obstructiva crónica','enfisema pulmonar','bronquitis crónica']},
    {t:'Neumonía adquirida en la comunidad: manejo especializado', claves:['neumonía adquirida en la comunidad','escala de severidad de neumonía','neumonía grave']},
    {t:'Tuberculosis pulmonar del adulto', claves:['tuberculosis pulmonar activa','esquema de tratamiento antituberculoso','tuberculosis multirresistente']},
    {t:'Derrame pleural: enfoque diagnóstico', claves:['toracocentesis diagnóstica','criterios de Light','derrame pleural exudativo']},
    {t:'Neumotórax', claves:['neumotórax espontáneo','neumotórax a tensión','manejo del neumotórax']},
    {t:'Tromboembolismo pulmonar', claves:['embolia pulmonar aguda','trombosis venosa profunda','anticoagulación en tromboembolismo pulmonar']},
    {t:'Enfermedad pulmonar intersticial', claves:['fibrosis pulmonar','neumopatía intersticial difusa','patrón en vidrio esmerilado']},
    {t:'Insuficiencia respiratoria aguda', claves:['insuficiencia respiratoria hipoxémica','insuficiencia respiratoria hipercápnica','ventilación mecánica no invasiva']},
    {t:'Síndrome de apnea obstructiva del sueño', claves:['apnea obstructiva del sueño','polisomnografía','presión positiva continua en la vía aérea']},
    {t:'Cáncer de pulmón', claves:['cáncer de pulmón de células no pequeñas','cáncer de pulmón de células pequeñas','nódulo pulmonar solitario']}
  ]
},

{
  bloque:'Patología Quirúrgica I', em:'🔪', color:'carbon', programa:'unirm', cuatri:13,
  nota:'Tres créditos. Las causas quirúrgicas más frecuentes de consulta abdominal aguda y crónica: desde el abdomen agudo y la apendicitis hasta el cáncer digestivo.',
  temas:[
    {t:'Abdomen agudo quirúrgico', claves:['abdomen agudo quirúrgico','signos de irritación peritoneal en el abdomen agudo','diagnóstico diferencial del abdomen agudo']},
    {t:'Apendicitis aguda', claves:['apendicitis aguda','signo de McBurney','apendicectomía']},
    {t:'Colecistitis y colelitiasis', claves:['colelitiasis sintomática','colecistitis aguda','signo de Murphy']},
    {t:'Hernias de la pared abdominal', claves:['hernia inguinal','hernia umbilical','hernia estrangulada']},
    {t:'Obstrucción intestinal', claves:['obstrucción intestinal mecánica','íleo paralítico','bridas y adherencias']},
    {t:'Enfermedad diverticular', claves:['diverticulosis del colon','diverticulitis aguda','complicaciones de la diverticulitis']},
    {t:'Patología quirúrgica del esófago', claves:['acalasia esofágica','divertículo esofágico','perforación esofágica']},
    {t:'Patología quirúrgica gástrica benigna', claves:['úlcera péptica perforada','úlcera péptica hemorrágica','estenosis pilórica del adulto']},
    {t:'Cáncer gástrico', claves:['cáncer gástrico','gastrectomía oncológica','signos de alarma de cáncer gástrico']},
    {t:'Cáncer colorrectal', claves:['cáncer colorrectal','tamizaje de cáncer colorrectal','colectomía oncológica']},
    {t:'Pancreatitis aguda quirúrgica', claves:['pancreatitis aguda grave','necrosis pancreática infectada','complicaciones quirúrgicas de la pancreatitis']},
    {t:'Trauma abdominal', claves:['trauma abdominal cerrado','trauma abdominal penetrante','laparotomía exploradora']}
  ]
},

{
  bloque:'Anestesiología', em:'💉', color:'lavanda', programa:'unirm', cuatri:13,
  nota:'Tres créditos. Los principios de la anestesia y el manejo perioperatorio que todo médico general debe reconocer, aunque no vaya a ejercer esta especialidad.',
  temas:[
    {t:'Principios de anestesia general', claves:['anestesia general balanceada','fases de la anestesia general','inducción anestésica']},
    {t:'Anestesia regional y neuroaxial', claves:['anestesia epidural','anestesia espinal','bloqueo de nervio periférico']},
    {t:'Evaluación preanestésica', claves:['clasificación ASA','ayuno preanestésico','riesgo anestésico']},
    {t:'Manejo de la vía aérea', claves:['vía aérea difícil','intubación endotraqueal','máscara laríngea']},
    {t:'Anestésicos locales: farmacología', claves:['toxicidad sistémica por anestésicos locales','lidocaína y bupivacaína','mecanismo de acción de anestésicos locales']},
    {t:'Complicaciones de la anestesia', claves:['hipertermia maligna','náusea y vómito postoperatorio','despertar intraoperatorio']},
    {t:'Sedación y analgesia en procedimientos', claves:['sedación consciente','escala de sedación','analgesia procedimental']},
    {t:'Anestesia en el paciente de alto riesgo', claves:['anestesia en cardiopatía','anestesia en el paciente obeso','anestesia en el adulto mayor']},
    {t:'Monitoreo intraoperatorio', claves:['monitoreo de signos vitales intraoperatorio','capnografía','oximetría de pulso intraoperatoria']},
    {t:'Manejo del dolor postoperatorio', claves:['analgesia postoperatoria multimodal','escala de dolor postoperatorio','analgesia controlada por el paciente']},
    {t:'Anestesia ambulatoria', claves:['cirugía ambulatoria','criterios de alta tras anestesia ambulatoria','anestesia de corta estancia']},
    {t:'Reanimación cardiopulmonar en el quirófano', claves:['paro cardíaco intraoperatorio','carro de paro en quirófano','reanimación avanzada perioperatoria']}
  ]
},

{
  bloque:'Geriatría', em:'👴', color:'musgo', programa:'unirm', cuatri:13,
  nota:'Tres créditos. El adulto mayor exige un enfoque propio: la valoración geriátrica integral, los síndromes geriátricos, y las consideraciones específicas de esta etapa de la vida.',
  temas:[
    {t:'Principios de la valoración geriátrica integral', claves:['valoración geriátrica integral','evaluación funcional del adulto mayor','escalas de independencia funcional']},
    {t:'Síndromes geriátricos: fragilidad', claves:['fragilidad en el adulto mayor','fenotipo de fragilidad','sarcopenia']},
    {t:'Caídas en el adulto mayor', claves:['evaluación del riesgo de caídas','caídas recurrentes','prevención de caídas en el adulto mayor']},
    {t:'Deterioro cognitivo y demencia', claves:['deterioro cognitivo leve','enfermedad de Alzheimer','evaluación cognitiva breve']},
    {t:'Delirium en el adulto mayor', claves:['delirium hipoactivo','delirium hiperactivo','factores precipitantes de delirium']},
    {t:'Polifarmacia en el adulto mayor', claves:['polifarmacia','prescripción inapropiada en el adulto mayor','deprescripción']},
    {t:'Incontinencia urinaria en el adulto mayor', claves:['incontinencia urinaria geriátrica','evaluación de la incontinencia en el adulto mayor','causas reversibles de incontinencia']},
    {t:'Malnutrición en el adulto mayor', claves:['desnutrición del adulto mayor','tamizaje nutricional geriátrico','pérdida de peso no intencional']},
    {t:'Úlceras por presión', claves:['úlcera por presión','estadificación de úlceras por presión','prevención de úlceras por presión']},
    {t:'Cuidados paliativos: conceptos básicos', claves:['cuidados paliativos','control de síntomas al final de la vida','voluntades anticipadas']},
    {t:'Maltrato al adulto mayor', claves:['maltrato al adulto mayor','negligencia hacia el adulto mayor','tamizaje de maltrato geriátrico']},
    {t:'Envejecimiento saludable y prevención', claves:['envejecimiento saludable','prevención en el adulto mayor','vacunación del adulto mayor']}
  ]
},

{
  bloque:'Reumatología', em:'🦴', color:'coral', programa:'unirm', cuatri:13,
  nota:'Dos créditos. Las enfermedades reumatológicas del adulto: artritis reumatoide, lupus, espondiloartritis, y otras condiciones autoinmunes y degenerativas del sistema musculoesquelético.',
  temas:[
    {t:'Artritis reumatoide: manejo especializado', claves:['artritis reumatoide del adulto','factor reumatoide','fármacos antirreumáticos modificadores de la enfermedad']},
    {t:'Lupus eritematoso sistémico: manejo especializado', claves:['lupus eritematoso sistémico','anticuerpos antinucleares','nefritis lúpica']},
    {t:'Espondiloartritis', claves:['espondilitis anquilosante','sacroilitis','espondiloartritis periférica']},
    {t:'Gota y enfermedad por depósito de cristales', claves:['gota aguda','hiperuricemia','pseudogota']},
    {t:'Osteoartritis: manejo especializado', claves:['osteoartritis de rodilla','osteoartritis de cadera','manejo no farmacológico de la osteoartritis']},
    {t:'Vasculitis sistémicas', claves:['vasculitis de grandes vasos','vasculitis ANCA asociada','arteritis de células gigantes']},
    {t:'Fibromialgia', claves:['fibromialgia','puntos dolorosos de fibromialgia','dolor crónico generalizado']}
  ]
},

{
  bloque:'Pre-Internado de Medicina Interna', em:'🩺', color:'grafito', programa:'unirm', cuatri:13,
  nota:'Un crédito, cierra el cuatrimestre. El rol del estudiante en el servicio de medicina interna, previo al internado.',
  temas:[
    {t:'Rol del estudiante en medicina interna', claves:['rol del estudiante en medicina interna','participación supervisada en medicina interna']},
    {t:'Historia clínica del adulto: enfoque por sistemas', claves:['historia clínica por sistemas','revisión por sistemas del adulto','anamnesis del paciente adulto']},
    {t:'Presentación de casos en medicina interna', claves:['presentación de casos clínicos','razonamiento clínico en rondas','comunicación del caso al equipo tratante']},
    {t:'Documentación clínica en medicina interna', claves:['nota de evolución del adulto hospitalizado','epicrisis','documentación del plan terapéutico']}
  ]
}

]);
