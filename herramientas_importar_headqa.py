# -*- coding: utf-8 -*-
"""
Importa HEAD-QA v2 (licencia MIT) al formato del banco de ENURM Intelligence.
Fuente: examenes MIR/FIR publicados por el Ministerio de Sanidad de Espana,
2013-2022, recopilados en el dataset HEAD-QA v2 (alesi12/head_qa_v2).

Solo se importan las categorias utiles para el ENURM: medicine y pharmacology.
Se excluyen las preguntas que dependen de una imagen que no tenemos.
"""
import io, json, re, os, collections
import pyarrow.parquet as pq

ORIGEN   = 'headqa_es.parquet'
DESTINO  = r'C:\Users\shael\OneDrive\Desktop\ENURM\datos'
POR_ARCHIVO = 1100

# ---------------------------------------------------------------- clasificador
ESPECIALIDAD = [
 ('Pediatría', r'\blactante|recién nacid|recien nacid|neonat|prematur|\bniñ[oa] de \d|\bniñ[oa] de un|\bmeses de edad|escolar de \d|adolescente de 1\d años|pediátric|pediatric|lactancia materna|calendario vacunal'),
 ('Ginecología y Obstetricia', r'\bgestante|embaraz|\bparto\b|puerper|obstétric|obstetric|preeclampsia|eclampsia|cesárea|cesarea|amenorrea|menstrua|endometri|ovári|ovaric|\bovario|cérvix|cervix uterin|útero|utero|vagin|anticoncep|climaterio|menopaus|mama\b.*(?:lactan|puerper)'),
 ('Psiquiatría', r'\bdepresi[óo]n|esquizofren|psicótic|psicotic|trastorno bipolar|trastorno de ansiedad|trastorno de personalidad|anorexia nerviosa|bulimia|suicid|antipsicótic|antipsicotic|antidepresiv|delirium tremens|abstinencia alcohólica|trastorno obsesiv|crisis de pánico|psicoterap'),
 ('Cirugía', r'\bquirúrgic|quirurgic|laparotom|laparoscóp|laparoscop|apendicitis|colecistectom|herniorraf|hernia inguinal|resecci[óo]n|anastomosis|postoperatori|posoperatori|injerto|amputaci|trasplante|colostom|toracotom|intervención quirúrgica'),
 ('Emergencias', r'parada cardiorrespiratoria|reanimaci[óo]n cardiopulmonar|soporte vital|politraumatiz|\bshock\b|intoxicaci[óo]n aguda|servicio de urgencias|triaje|paro card'),
 ('Epidemiología', r'sensibilidad y especificidad|valor predictiv|\bincidencia\b|\bprevalencia\b|ensayo cl[íi]nico|estudio de cohorte|casos y controles|riesgo relativo|odds ratio|razón de momios|intervalo de confianza|metaanálisis|metaanalisis|sesgo de|número necesario a tratar|cribado poblacional|tamizaje|curva ROC'),
 ('Salud Pública', r'salud p[úu]blica|vigilancia epidemiol|declaración obligatoria|cobertura vacunal|educación para la salud|promoción de la salud|atención primaria|indicador de salud|mortalidad infantil|esperanza de vida'),
 ('Bioética', r'consentimiento informado|autonom[íi]a del paciente|confidencialidad|secreto profesional|voluntades anticipadas|comité de ética|principio de beneficencia|encarnizamiento|eutanasia|objeción de conciencia'),
]

TEMA_MI = [
 ('Cardiología',      r'infarto|coronari|angina|insuficiencia card[íi]aca|fibrilación auricular|arritmi|valvulopat|estenosis a[óo]rtica|hipertensi[óo]n arterial|pericardi|endocarditis|electrocardiogram|\bECG\b|miocardiopat'),
 ('Neumología',       r'\bEPOC\b|\basma\b|neumon[íi]a|derrame pleural|neumot[óo]rax|tromboembolia pulmonar|tuberculosis pulmonar|espirometr|fibrosis pulmonar|apnea del sueño|insuficiencia respiratoria'),
 ('Infectología',     r'\bVIH\b|sida\b|antibi[óo]tic|sepsis|infecci[óo]n|bacteri|vir[au]s|meningitis|malaria|paludismo|hepatitis [ABC]|micosis|hongo|parasit|vacuna'),
 ('Gastroenterología',r'cirrosis|hepát|hepatic|pancreatitis|colon|colitis|enfermedad de Crohn|úlcera p[ée]ptica|ulcera peptica|esófag|esofag|ascitis|várices esofágicas|diarrea crónica|celíac|reflujo gastro'),
 ('Nefrología',       r'renal|riñ[óo]n|glomerul|nefr[íoóa]|diálisis|dialisis|creatinina|proteinuria|hematuria|síndrome nefr[óo]tico|hiperpotasemia|hiponatremia|acidosis metabólica'),
 ('Endocrinología',   r'diabet|tiroid|insulina|hipófis|hipofis|suprarrenal|Cushing|Addison|osteoporosis|obesidad|dislipemia|dislipidemia|hipoglucem|hipercalcemia'),
 ('Neurología',       r'ictus|accidente cerebrovascular|epileps|convulsi|cefalea|migraña|Parkinson|Alzheimer|demencia|esclerosis múltiple|neuropat|mieloma?patía|hemorragia subaracnoidea|coma\b|meningitis'),
 ('Hematología',      r'anemia|leucemia|linfoma|mieloma|trombocitopenia|coagul|anticoagul|hemofilia|neutropenia|transfusi[óo]n|ferritina|hemoglobin'),
 ('Reumatología',     r'artritis|lupus|artros|gota\b|vasculitis|espondil|fibromialgia|esclerodermia|Sjögren|polimialgia|factor reumatoide'),
 ('Oncología',        r'carcinoma|neoplasi|tumor|metástasis|metastasis|quimioterap|radioterap|cáncer|cancer\b|oncológ'),
 ('Dermatología',     r'derm[ai]t|psoriasis|melanoma|urticaria|eccema|acné|prurito|lesión cutánea|exantema'),
]

HABILIDAD = [
 ('Diagnóstico',        r'diagn[óo]stico m[áa]s probable|cu[áa]l es el diagn[óo]stico|sospecha diagn[óo]stica|orienta el diagn'),
 ('Toma de decisiones', r'actitud|conducta|qu[ée] har[íi]a|tratamiento de elecci[óo]n|manejo m[áa]s adecuado|primera medida|siguiente paso|indicad[oa] en este paciente|c[óo]mo procede'),
 ('Análisis',           r'cu[áa]l de las siguientes.*(?:correct|cert|falsa|incorrect)|se[ñn]ale la (?:respuesta|afirmaci[óo]n)'),
]

# El examen FIR (Farmacia) aporta muchas preguntas inútiles para el ENURM:
# tecnologia farmaceutica, quimica analitica, legislacion espanola.
FARMACIA_NO_CLINICA = re.compile(
 r'cromatograf|tecnolog[íi]a farmac[ée]utica|excipiente|galénic|galenic|forma farmac[ée]utica|'
 r'comprimido recubiert|liofilizaci|espectrofotometr|espectroscop|valoraci[óo]n volum[ée]trica|'
 r'síntesis (?:de|del|química)|grupo (?:funcional|ftalilo)|estructura química|'
 r'oficina de farmacia|receta electrónica|legislaci[óo]n|Real Decreto|Ley \d+/\d+|'
 r'ensayo de disoluci|biofarmac|reolog|tensioactiv|emulsi[óo]n far|supositori|'
 r'estabilidad del medicamento|envase|acondicionamiento|buenas prácticas de fabricaci|'
 # quimica medicinal y biologia molecular: correctas, pero no es lo que
 # se evalua en el ENURM
 r'cremallera de leucinas|dominio proteic|anillo (?:aromátic|bencénic)|sistema aromátic|'
 r'estructura (?:químic|molecular|del?\s+\w+ico)|enlace pept[íi]dic|radical libre en la molécula|'
 r'grupo (?:metilo|hidroxilo|amino|carboxilo)|conformaci[óo]n espacial|isomer[íi]a|'
 r'\bplásmido|transcripci[óo]n g[ée]nica|ARN mensajero|secuencia de nucle[óo]tidos', re.I)

# Para conservar una pregunta de farmacologia tiene que oler a clinica.
FARMACO_CLINICA = re.compile(
 r'\bpaciente|tratamiento|indicad|contraindicad|efecto[s]? (?:adverso|secundario)|reacción adversa|'
 r'interacci[óo]n|mecanismo de acci[óo]n|dosis|posolog|intoxicaci|antídoto|antidoto|'
 r'farmacocin[ée]tic|farmacodin|vida media|biodisponibilidad|aclaramiento|'
 r'de elecci[óo]n|primera l[íi]nea|toxicidad|sobredosis|embarazo|insuficiencia (?:renal|hepática)', re.I)

def clasificar(texto, categoria):
    if categoria == 'pharmacology':
        return 'Farmacología', tema_farmaco((texto[0] + ' ' + texto[1]).lower()), 'Farmacología clínica'
    esp = mejor(ESPECIALIDAD, texto)
    if esp is None:
        return 'Medicina Interna', tema_mi(texto), 'Importado'
    if esp in ('Epidemiología', 'Salud Pública', 'Bioética'):
        return esp, esp, 'Importado'
    return esp, tema_de(esp, texto), 'Importado'

def mejor(tabla, texto):
    """Elige la categoria con mas coincidencias, no la primera que aparece.
       El enunciado y la respuesta correcta pesan el triple que el caso:
       ahi es donde esta el tema real, no en los antecedentes."""
    principal, fondo = texto
    puntajes = []
    for etiqueta, patron in tabla:
        n = len(re.findall(patron, principal, re.I)) * 3 + len(re.findall(patron, fondo, re.I))
        if n:
            puntajes.append((n, etiqueta))
    if not puntajes:
        return None
    puntajes.sort(reverse=True)
    return puntajes[0][1]

def tema_mi(texto):
    return mejor(TEMA_MI, texto) or 'Medicina general'

def tema_de(esp, texto):
    entero = texto[0] + ' ' + texto[1]
    if esp == 'Pediatría':   return mejor(TEMA_MI, texto) or 'Pediatría general'
    if esp == 'Cirugía':     return 'Cirugía general'
    if esp == 'Psiquiatría': return 'Psiquiatría general'
    if esp == 'Emergencias': return 'Urgencias'
    if esp == 'Ginecología y Obstetricia':
        return 'Obstetricia' if re.search(r'gestante|embaraz|parto|puerper|obstétric', entero, re.I) else 'Ginecología'
    return esp

def tema_farmaco(t):
    if re.search(r'antibi[óo]tic|antimicrobian|antivir|antifúngic', t): return 'Antimicrobianos'
    if re.search(r'anticoagul|antiagreg|heparina|warfarina', t):        return 'Anticoagulación'
    if re.search(r'antihipertens|betabloque|diurétic|digoxina|estatina',t):return 'Cardiovascular'
    if re.search(r'analg[ée]sic|aine|opioid|morfina|paracetamol', t):   return 'Analgesia'
    if re.search(r'farmacocin[ée]tic|biodisponibilidad|vida media|aclaramiento|metabolismo hep', t): return 'Principios generales'
    if re.search(r'antidepres|antipsic[óo]t|benzodiacep|litio', t):     return 'Psicofármacos'
    if re.search(r'insulina|antidiab[ée]tic|corticoid|hormona', t):     return 'Endocrino'
    return 'Farmacología clínica'

def habilidad(texto):
    for h, patron in HABILIDAD:
        if re.search(patron, texto, re.I):
            return h
    return 'Aplicación'

# ------------------------------------------------- separar caso de la pregunta
CORTE = re.compile(r'(¿[^¿?]{5,220}\?)\s*$')

def partir(qtext):
    """Separa el caso clinico del enunciado final cuando se puede."""
    t = ' '.join(qtext.split())
    m = CORTE.search(t)
    if m and m.start() > 90:
        return t[:m.start()].strip(), m.group(1).strip()
    # sin pregunta final explicita: si es largo, cortar por la ultima frase
    if len(t) > 300:
        partes = re.split(r'(?<=[.:])\s+', t)
        if len(partes) > 1 and len(partes[-1]) > 15:
            return ' '.join(partes[:-1]).strip(), partes[-1].strip()
    return None, t

# ---------------------------------------------------------------------- limpiar
def limpiar(s):
    s = ' '.join(str(s).split())
    s = s.replace('\u00a0', ' ')
    return s.strip()

DEPENDE_IMAGEN = re.compile(r'vinculada a la imagen|imagen n[ºo°]|se muestra en la imagen|la imagen adjunta|figura adjunta|siguiente imagen|imagen A|imagen B', re.I)

# ------------------------------------------------------------------------ main
def main():
    filas = pq.read_table(ORIGEN).to_pylist()
    salida, descartes = [], collections.Counter()

    for r in filas:
        cat = r['category']
        if cat not in ('medicine', 'pharmacology'):
            descartes['categoría no útil'] += 1; continue
        qtext = limpiar(r['qtext'])
        if r.get('image') is not None or DEPENDE_IMAGEN.search(qtext):
            descartes['depende de una imagen'] += 1; continue
        opciones = [limpiar(a['atext']) for a in r['answers'] if limpiar(a.get('atext',''))]
        if len(opciones) < 3:
            descartes['opciones insuficientes'] += 1; continue
        try:
            ok = int(r['ra']) - 1      # el dataset numera desde 1
        except (TypeError, ValueError):
            descartes['sin respuesta'] += 1; continue
        if not (0 <= ok < len(opciones)):
            descartes['respuesta fuera de rango'] += 1; continue
        if len(qtext) < 25:
            descartes['enunciado demasiado corto'] += 1; continue

        if cat == 'pharmacology':
            if FARMACIA_NO_CLINICA.search(qtext):
                descartes['farmacia no clínica (FIR)'] += 1; continue
            if not FARMACO_CLINICA.search(qtext + ' ' + ' '.join(opciones)):
                descartes['farmacología sin ángulo clínico'] += 1; continue

        caso, enunciado = partir(qtext)
        # El tema real vive en la pregunta y en la respuesta correcta,
        # no en los antecedentes del caso.
        contexto = (enunciado + ' ' + opciones[ok], caso or '')
        esp, tema, sub = clasificar(contexto, cat)
        es_caso = bool(caso) and len(caso) > 120

        salida.append({
            # el dataset repite la numeracion entre el examen de Medicina y
            # el de Farmacia del mismo ano: la inicial de la categoria evita
            # los ids duplicados, que romperian la repeticion espaciada
            'id': 'MIR-%s-%s%s' % (r['year'], cat[0].upper(), r['qid']),
            'esp': esp, 'tema': tema,
            'sub': sub if sub != 'Importado' else tema,
            'dif': 4 if es_caso and len(qtext) > 420 else (3 if es_caso else 2),
            'hab': habilidad(qtext),
            'tipo': 'caso' if es_caso else 'directa',
            'caso': caso or '',
            'enunciado': enunciado,
            'ops': opciones,
            'ok': ok,
            'clave': '',
            'exp': '',
            'no': {},
            'trampa': '',
            'dx': [],
            'obj': '',
            'ref': 'Examen MIR %s, Ministerio de Sanidad de España. Recopilado en HEAD-QA v2 (licencia MIT).' % r['year'],
            'tags': ['MIR', str(r['year'])],
            'fuente': 'MIR',
            'verificado': False
        })

    # ------------------------------------------------------------ escribir
    salida.sort(key=lambda q: (q['esp'], q['id']))
    trozos = [salida[i:i+POR_ARCHIVO] for i in range(0, len(salida), POR_ARCHIVO)]
    for n, trozo in enumerate(trozos, 1):
        ruta = os.path.join(DESTINO, 'banco-mir-%02d.js' % n)
        with io.open(ruta, 'w', encoding='utf-8') as f:
            f.write('/* ============================================================\n')
            f.write('   BANCO EXTENDIDO MIR — parte %d de %d\n' % (n, len(trozos)))
            f.write('   Fuente: exámenes MIR/FIR del Ministerio de Sanidad de España\n')
            f.write('   (2013-2022), vía el dataset HEAD-QA v2, licencia MIT.\n')
            f.write('   Preguntas reales de examen. NO llevan explicación propia\n')
            f.write('   todavía: van marcadas con verificado:false y la app lo\n')
            f.write('   indica al estudiante. Se enriquecen por lotes.\n')
            f.write('   Generado automáticamente: no editar a mano.\n')
            f.write('   ============================================================ */\n')
            f.write('window.BANCO = (window.BANCO || []).concat(\n')
            f.write(json.dumps(trozo, ensure_ascii=False, separators=(',', ':')))
            f.write('\n);\n')
        print('escrito %s  (%d preguntas, %.1f KB)' % (
            os.path.basename(ruta), len(trozo), os.path.getsize(ruta)/1024))

    print()
    print('IMPORTADAS: %d' % len(salida))
    print('DESCARTADAS:')
    for k, v in descartes.most_common():
        print('   %-28s %d' % (k, v))
    print()
    print('POR ESPECIALIDAD:')
    for k, v in collections.Counter(q['esp'] for q in salida).most_common():
        print('   %-28s %d' % (k, v))
    print()
    print('CASOS CLÍNICOS (enunciado con caso): %d' % sum(1 for q in salida if q['tipo'] == 'caso'))
    print('ARCHIVOS A ENLAZAR EN app.html: %d' % len(trozos))

main()
