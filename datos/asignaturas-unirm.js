/* ============================================================
   UNIRMIA — asignaturas de UCATECI, cuatrimestres 7, 8 y 9
   ------------------------------------------------------------
   Fuente: pensum oficial de la carrera de Medicina (MED) de la
   Universidad Catolica Tecnologica del Cibao, version
   MED-R1-2014, resolucion 001-A 2014, publicado por la propia
   universidad en ucateci.edu.do (Escuela de Medicina > Ver
   Pensum). Los creditos estan copiados de ahi y los tres
   cuatrimestres cuadran con el total que declara el documento:
   28, 29 y 26.

   DATO IMPORTANTE PARA EL CONTENIDO: los cuatrimestres 7 y 8 son
   CICLO DE CIENCIAS BASICAS, no clinica. Anatomia, fisiologia,
   bioquimica, histologia, embriologia, microbiologia. El 9 es el
   puente: ahi entran semiologia, fisiopatologia, farmacologia y
   anatomia patologica, que ya piden razonamiento clinico.

   Por eso UNIRMIA no puede ser ENURMIA con otro logo. El caso
   clinico con paciente, conducta y bibliografia funciona en el
   9; en el 7 y el 8 lo que hay que preguntar son mecanismos,
   estructuras y rutas. El formato de la explicacion (dato clave,
   por que no las otras, fuente) se mantiene: eso si sirve igual.
   ============================================================ */
window.UNIRM_CUATRIMESTRES = {

  7: {
    nombre: 'Cuatrimestre 7',
    ciclo: 'Ciencias Básicas',
    creditos: 28,
    asignaturas: [
      { cod:'MED 201', nombre:'Anatomía I',            cr:6 },
      { cod:'MED 207', nombre:'Fisiología I',          cr:5 },
      { cod:'MED 204', nombre:'Histología',            cr:4 },
      { cod:'CIQ 204', nombre:'Bioquímica I',          cr:4 },
      { cod:'MED 094', nombre:'Embriología',           cr:3 },
      { cod:'BIA 207', nombre:'Microbiología Médica',  cr:3 },
      { cod:'CIM 207', nombre:'Estadística I',         cr:3 }
    ]
  },

  8: {
    nombre: 'Cuatrimestre 8',
    ciclo: 'Ciencias Básicas',
    creditos: 29,
    asignaturas: [
      { cod:'MED 209', nombre:'Anatomía II',           cr:6 },
      { cod:'MED 211', nombre:'Fisiología II',         cr:5 },
      { cod:'CIQ 305', nombre:'Bioquímica II',         cr:4 },
      { cod:'MED 212', nombre:'Genética Médica',       cr:4 },
      { cod:'CIM 209', nombre:'Bioestadística',        cr:3 },
      { cod:'BIA 202', nombre:'Parasitología Médica',  cr:3 },
      { cod:'MED 317', nombre:'Epidemiología',         cr:3 },
      { cod:'MED 423', nombre:'Inmunología',           cr:1 }
    ]
  },

  9: {
    nombre: 'Cuatrimestre 9',
    ciclo: 'Ciencias Básicas (puente a clínica)',
    creditos: 26,
    asignaturas: [
      { cod:'MED 316', nombre:'Semiología Clínica',            cr:6 },
      { cod:'MED 105', nombre:'Anatomía Patológica I',         cr:4 },
      { cod:'MED 318', nombre:'Fisiopatología',                cr:3 },
      { cod:'MED 314', nombre:'Neuroanatomía',                 cr:3 },
      { cod:'MED 330', nombre:'Farmacología',                  cr:3 },
      { cod:'MED 321', nombre:'Medicina Preventiva',           cr:2 },
      { cod:'MED 095', nombre:'Soporte Vital Básico y Avanzado', cr:2 },
      { cod:'MED 093', nombre:'Relación Médico-Paciente',      cr:2 },
      { cod:'MED 324', nombre:'Salud y Comunidad I',           cr:1 }
    ]
  }

};
