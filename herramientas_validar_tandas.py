# -*- coding: utf-8 -*-
import io, re, os
D = 'C:/Users/shael/OneDrive/Desktop/ENURM/datos/'
files = sorted(f for f in os.listdir(D) if f.startswith('banco-') and 'temario' in f)
allids = {}
for fn in files:
    s = io.open(D + fn, encoding='utf-8').read()
    blocks = re.split(r"\n\{\n  id:'", s)[1:]
    print(fn, len(blocks))
    for b in blocks:
        qid = b[:b.index("'")]
        if qid in allids:
            print('  DUP', qid)
        allids[qid] = fn
        for campo in ['clave', 'exp', 'trampa', 'ref', 'obj', 'tags']:
            if (campo + ':') not in b:
                print('  falta ' + campo, qid)
        m = re.search(r"ops:\[(.*?)\],\s*\n?\s*ok:(\d+)", b, re.S)
        if not m:
            print('  ops/ok no parseado', qid); continue
        nops = m.group(1).count("','") + 1
        ok = int(m.group(2))
        g = re.search(r"no:\{(.*?)\},\s*\n\s*trampa:", b, re.S)
        if not g:
            print('  no no parseado', qid); continue
        keys = [int(x) for x in re.findall(r"(?:^|,)(\d+):'", ',' + g.group(1))]
        if len(keys) != nops - 1:
            print('  distractores %d de %d' % (len(keys), nops - 1), qid)
        if ok in keys:
            print('  el bloque no: explica la correcta', qid)
        if ok >= nops:
            print('  ok fuera de rango', qid)
print('total preguntas nuevas:', len(allids))
