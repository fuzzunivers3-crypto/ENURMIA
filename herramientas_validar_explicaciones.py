# -*- coding: utf-8 -*-
"""Valida los overlays de explicaciones MIR contra el banco."""
import io, os, re, json, sys

D = 'C:/Users/shael/OneDrive/Desktop/ENURM/datos/'

banco = {}
for fn in ['banco-mir-01.js', 'banco-mir-02.js', 'banco-mir-03.js']:
    s = io.open(D + fn, encoding='utf-8').read()
    i = s.index('concat(') + len('concat(')
    j = s.rindex(']') + 1
    for q in json.loads(s[i:j]):
        banco[q['id']] = q

target = sys.argv[1] if len(sys.argv) > 1 else 'explicaciones-mir-08.js'
s = io.open(D + target, encoding='utf-8').read()

# cada entrada empieza en columna 0 con 'MIR-...':
bloques = re.split(r"\n'(MIR-[^']+)':\s*\{", s)
ids = bloques[1::2]
cuerpos = bloques[2::2]
print(target, '->', len(ids), 'entradas')

vistos = set()
for qid, cuerpo in zip(ids, cuerpos):
    if qid in vistos:
        print('  DUP en el propio lote', qid)
    vistos.add(qid)
    if qid not in banco:
        print('  ID inexistente en el banco:', qid); continue
    q = banco[qid]
    for campo in ['clave', 'exp', 'trampa', 'ref', 'obj', 'dx']:
        if (campo + ':') not in cuerpo:
            print('  falta', campo, qid)
    g = re.search(r"no:\{(.*?)\},\s*\n\s*trampa:", cuerpo, re.S)
    if not g:
        print('  no:{} no parseado', qid); continue
    keys = [int(x) for x in re.findall(r"(?:^|,)(\d+):'", ',' + g.group(1))]
    nops = len(q['ops'])
    if len(keys) != nops - 1:
        print('  distractores %d de %d en %s' % (len(keys), nops - 1, qid))
    if q['ok'] in keys:
        print('  explica la respuesta CORRECTA:', qid)
    if sorted(keys) != sorted(set(keys)):
        print('  claves repetidas en no:{}', qid)

# solapamiento con lotes anteriores
otros = set()
for fn in sorted(os.listdir(D)):
    if fn.startswith('explicaciones-mir-') and fn != target:
        t = io.open(D + fn, encoding='utf-8').read()
        otros |= set(re.findall(r"^'(MIR-[^']+)':", t, re.M))
solapan = vistos & otros
if solapan:
    print('  YA EXPLICADAS EN OTRO LOTE:', solapan)

print('total de este lote:', len(vistos), '| sin solapamiento:', not solapan)
