/* ============================================================
   UNIRMIA — asignaturas de la universidad, cuatrimestres 7, 8 y 9
   ------------------------------------------------------------
   Fuente: pensum oficial de la carrera de Medicina (MED),
   version MED-R1-2014, resolucion 001-A 2014, publicado por la
   propia universidad. Los creditos estan copiados de ahi y los
   tres cuatrimestres cuadran con el total que declara el
   documento: 28, 29 y 26.

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
    nombre: 'Bloque I',
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
    nombre: 'Bloque II',
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
    nombre: 'Bloque III',
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
  },

  /* ============================================================
     CUATRIMESTRES 10 A 14 — CICLO CLINICO
     ------------------------------------------------------------
     Fuente: agregador de terceros pensumvirtual.tech (no el
     documento oficial de la resolucion 001-A 2014 usado para 7-9,
     que esa fuente no publica mas alla del cuatrimestre 9). Se
     verifico que los creditos totales por cuatrimestre que trae
     la pagina (20, 23, 21, 23, 21) cuadran exactamente con la
     suma de los creditos individuales listados, lo que da
     confianza en la extraccion, pero si shael consigue el
     documento oficial de la universidad, estos datos deberian
     contrastarse contra el.

     Del 10 en adelante ya es rotacion clinica real: semiologia
     quirurgica, ginecologia, pediatria, medicina interna por
     subespecialidad, cirugia. El contenido de apuntes y banco
     para estas materias es de redaccion propia (no hay temario
     oficial de topicos, solo el nombre de la materia), generado
     con el mismo criterio clinico que ya se uso en 9no.
     ============================================================ */

  10: {
    nombre: 'Bloque IV',
    ciclo: 'Ciclo Clínico',
    creditos: 20,
    asignaturas: [
      { cod:'MED-424', nombre:'Anatomía Patológica II',           cr:4 },
      { cod:'MED-331', nombre:'Farmacoterapéutica',                cr:3 },
      { cod:'MED-097', nombre:'Medicina Familiar',                 cr:3 },
      { cod:'MED-326', nombre:'Salud Mental y Sociedad',           cr:3 },
      { cod:'MED-322', nombre:'Semiología Quirúrgica',             cr:3 },
      { cod:'MED-327', nombre:'Gerencia en Salud',                 cr:2 },
      { cod:'MED-325', nombre:'Salud y Comunidad II',              cr:1 },
      { cod:'MED-332', nombre:'Servicio Hospitalario Pre Clínico', cr:1 }
    ]
  },

  11: {
    nombre: 'Bloque V',
    ciclo: 'Ciclo Clínico',
    creditos: 23,
    asignaturas: [
      { cod:'MED-429', nombre:'Pediatría I',                          cr:6 },
      { cod:'MED-428', nombre:'Obstetricia I',                        cr:5 },
      { cod:'MED-427', nombre:'Ginecología I',                        cr:4 },
      { cod:'MED-433', nombre:'Patología Infecciosa',                 cr:3 },
      { cod:'MED-438', nombre:'Imagenología y Medicina Nuclear',      cr:2 },
      { cod:'MED-426', nombre:'Nutrición',                            cr:2 },
      { cod:'MED-098', nombre:'Pre Internado de Gineco-Obstetricia',  cr:1 }
    ]
  },

  12: {
    nombre: 'Bloque VI',
    ciclo: 'Ciclo Clínico',
    creditos: 21,
    asignaturas: [
      { cod:'MED-436', nombre:'Obstetricia II',                cr:4 },
      { cod:'MED-444', nombre:'Pediatría II',                  cr:4 },
      { cod:'MED-435', nombre:'Ginecología II',                cr:3 },
      { cod:'MED-445', nombre:'Urología',                      cr:3 },
      { cod:'MED-432', nombre:'Dermatología',                  cr:2 },
      { cod:'MED-543', nombre:'Medicina Forense',              cr:2 },
      { cod:'MED-439', nombre:'Neonatología',                  cr:2 },
      { cod:'MED-099', nombre:'Pre-Internado de Pediatría',    cr:1 }
    ]
  },

  13: {
    nombre: 'Bloque VII',
    ciclo: 'Ciclo Clínico',
    creditos: 23,
    asignaturas: [
      { cod:'MED-539', nombre:'Cardiología',                            cr:5 },
      { cod:'MED-441', nombre:'Geriatría',                              cr:3 },
      { cod:'MED-541', nombre:'Nefrología',                             cr:3 },
      { cod:'MED-540', nombre:'Neumología',                             cr:3 },
      { cod:'MED-542', nombre:'Patología Quirúrgica I',                 cr:3 },
      { cod:'MED-552', nombre:'Anestesiología',                         cr:3 },
      { cod:'MED-538', nombre:'Reumatología',                           cr:2 },
      { cod:'MED-100', nombre:'Pre-Internado de Medicina Interna',      cr:1 }
    ]
  },

  14: {
    nombre: 'Bloque VIII',
    ciclo: 'Ciclo Clínico',
    creditos: 21,
    asignaturas: [
      { cod:'MED-546', nombre:'Gastroenterología',              cr:4 },
      { cod:'MED-551', nombre:'Traumatología y Ortopedia',      cr:4 },
      { cod:'MED-547', nombre:'Endocrinología',                 cr:3 },
      { cod:'MED-548', nombre:'Neurología',                     cr:3 },
      { cod:'MED-545', nombre:'Otorrinolaringología',           cr:3 },
      { cod:'MED-550', nombre:'Patología Quirúrgica II',        cr:3 },
      { cod:'MED-103', nombre:'Pre-Internado de Cirugía',       cr:1 }
    ]
  }

};
