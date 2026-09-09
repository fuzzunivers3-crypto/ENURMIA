# -*- coding: utf-8 -*-
"""Selecciona casos clinicos MIR sin explicacion para el siguiente lote.

Uso:  python herramientas_seleccionar_lote.py [salida.txt]

Filtra automaticamente lo ya explicado en cualquier lote previo y lo que
esta en cuarentena (individual y la cohorte del MIR 2017 de medicina).
"""
import io, os, re, json, sys
from collections import Counter

D = 'C:/Users/shael/OneDrive/Desktop/ENURM/datos/'
SALIDA = sys.argv[1] if len(sys.argv) > 1 else 'lote_casos.txt'

# --- cargar los bancos MIR ---
preguntas = []
for fn in sorted(os.listdir(D)):
    if fn.startswith('banco-mir-'):
        s = io.open(D + fn, encoding='utf-8').read()
        i = s.index('concat(') + len('concat(')
        j = s.rindex(']') + 1
        preguntas += json.loads(s[i:j])

# --- IDs ya explicados en cualquier lote ---
explicados = set()
for fn in sorted(os.listdir(D)):
    if fn.startswith('explicaciones-mir-'):
        s = io.open(D + fn, encoding='utf-8').read()
        explicados |= set(re.findall(r"^'(MIR-[^']+)':", s, re.M))

# --- cuarentena ---
rev = io.open(D + 'revision-mir.js', encoding='utf-8').read()
cuarentena = set(re.findall(r"'(MIR-[^']+)'\s*:\s*\{", rev))

def en_cuarentena(q):
    if q['id'] in cuarentena:
        return True
    return bool(re.match(r'^MIR-2017-M', q['id'])) and q['id'] not in explicados

casos = [q for q in preguntas
         if q['id'] not in explicados
         and not en_cuarentena(q)
         and q.get('caso') and len(q['caso']) > 80]

print('preguntas MIR cargadas:', len(preguntas))
print('ya explicadas:', len(explicados))
print('casos clinicos pendientes (fuera de cuarentena):', len(casos))
print('por especialidad:', dict(Counter(q['esp'] for q in casos)))

# --- cuota por especialidad, priorizando lo que menos cobertura tiene ---
cuota = {'Pediatría': 6, 'Ginecología y Obstetricia': 6, 'Cirugía': 5,
         'Emergencias': 5, 'Farmacología': 4, 'Psiquiatría': 4,
         'Epidemiología': 4, 'Salud Pública': 3, 'Bioética': 1,
         'Medicina Interna': 34}
cont = Counter()
sel = []
for q in casos:
    e = q['esp']
    if e in cuota and cont[e] < cuota[e]:
        cont[e] += 1
        sel.append(q)

print('seleccionadas para este lote:', len(sel), dict(cont))

with io.open(SALIDA, 'w', encoding='utf-8') as f:
    for q in sel:
        f.write('=== %s | %s | %s ===\n' % (q['id'], q['esp'], q.get('tema', '')))
        f.write('CASO: %s\n' % q['caso'])
        f.write('PREGUNTA: %s\n' % q['enunciado'])
        for i, o in enumerate(q['ops']):
            f.write('  [%d] %s%s\n' % (i, o, '  <-- OFICIAL' if i == q['ok'] else ''))
        f.write('\n')
print('escrito en', SALIDA)
