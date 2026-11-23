import { useMemo, useState } from 'react';
import { CATEGORIES, NODES, HOW_TO_OPEN, nodeIdsOf } from './data/flows.js';
import NodeCard from './components/NodeCard.jsx';
import SrTable from './components/SrTable.jsx';

export default function App() {
  const [catId, setCatId] = useState(null);
  const [tab, setTab] = useState('flows');
  const [flow, setFlow] = useState(null);
  const [path, setPath] = useState([]);
  const [q, setQ] = useState('');

  const cat = CATEGORIES.find((c) => c.id === catId) || null;

  const go = (id) => {
    if (!NODES[id]) return;
    setPath((p) => [...p, id]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const openCat = (id) => { setCatId(id); setTab('flows'); setFlow(null); setPath([]); setQ(''); };
  const startFlow = (f) => { setFlow(f); setPath([f.start]); setQ(''); };
  const openNode = (id) => { setFlow(null); setPath([id]); setTab('flows'); setQ(''); };
  const back = () => setPath((p) => (p.length > 1 ? p.slice(0, -1) : p));
  const restart = () => setPath(flow ? [flow.start] : path.slice(0, 1));
  const allProblems = () => { setFlow(null); setPath([]); };
  const home = () => { setCatId(null); setFlow(null); setPath([]); setTab('flows'); setQ(''); };

  const results = useMemo(() => {
    const k = q.trim().toLowerCase();
    if (!cat || k.length < 2) return [];
    const ids = nodeIdsOf(cat);
    return Object.entries(NODES)
      .filter(([id, n]) => ids.has(id) && [n.t, n.d, n.sr?.code, n.sr?.area, ...(n.s || [])].join(' ').toLowerCase().includes(k))
      .slice(0, 12);
  }, [q, cat]);

  const current = path.length ? NODES[path[path.length - 1]] : null;

  return (
    <div className="app">
      <header className="top">
        <button className="brand" type="button" onClick={home}>
          <span className="logo" aria-hidden="true" />
          <span><strong>Orange DSL</strong> Study Guide</span>
        </button>
        {cat && (
          <nav aria-label="Sections">
            <button type="button" className={tab === 'flows' ? 'on' : ''} onClick={() => setTab('flows')}>Workflows</button>
            <button type="button" className={tab === 'sr' ? 'on' : ''} onClick={() => setTab('sr')}>SR codes</button>
            {cat.tools.length > 0 && <button type="button" className={tab === 'tools' ? 'on' : ''} onClick={() => setTab('tools')}>Tools</button>}
          </nav>
        )}
      </header>

      <main>
        {!cat && (
          <>
            <h1 className="page-title">Choose a section</h1>
            <div className="grid">
              {CATEGORIES.map((c) => (
                <button key={c.id} type="button" className={`tile${c.soon ? ' soon' : ''}`} disabled={c.soon} onClick={() => openCat(c.id)}>
                  <span className="ico" aria-hidden="true">{c.icon}</span>
                  <strong>{c.title}</strong>
                  <small>{c.about}</small>
                </button>
              ))}
            </div>
          </>
        )}

        {cat && tab === 'flows' && (
          <>
            <div className="crumb-top"><button type="button" className="link" onClick={home}>All sections</button> › <strong>{cat.title}</strong></div>
            <input className="search" placeholder="Search a problem, SR code or script…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search" />
            {results.length > 0 && (
              <ul className="results">
                {results.map(([id, n]) => (
                  <li key={id}><button type="button" onClick={() => openNode(id)}><strong>{n.t}</strong>{n.sr && <span className="code">{n.sr.code}</span>}</button></li>
                ))}
              </ul>
            )}

            {!current && (
              <>
                <h1 className="page-title">Choose the problem</h1>
                <div className="grid">
                  {cat.flows.map((f) => (
                    <button key={f.id} type="button" className="tile" onClick={() => startFlow(f)}>
                      <span className="ico" aria-hidden="true">{f.icon}</span>
                      <strong>{f.title}</strong>
                      <small>{f.about}</small>
                      {HOW_TO_OPEN[f.title] && <small className="path">{HOW_TO_OPEN[f.title]}</small>}
                    </button>
                  ))}
                </div>
              </>
            )}

            {current && (
              <>
                <div className="bar">
                  <button type="button" className="btn ghost" onClick={back} disabled={path.length < 2}>← Back</button>
                  <button type="button" className="btn ghost" onClick={restart}>↺ Restart</button>
                  <button type="button" className="btn ghost" onClick={allProblems}>All problems</button>
                </div>
                <ol className="crumbs">
                  {path.map((id, i) => <li key={id + i} className={i === path.length - 1 ? 'now' : ''}>{NODES[id].t}</li>)}
                </ol>
                <NodeCard key={path.length + path[path.length - 1]} node={current} onChoose={go} />
              </>
            )}
          </>
        )}

        {cat && tab === 'sr' && <SrTable cat={cat} onOpen={openNode} />}

        {cat && tab === 'tools' && (
          <div>
            <h2 className="page-title">Tools used in {cat.title}</h2>
            <div className="grid">
              {cat.tools.map(([n, d]) => (<div className="tile static" key={n}><strong>{n}</strong><small>{d}</small></div>))}
            </div>
          </div>
        )}
      </main>
      <footer>Built from the training decks. For study use. Always follow the latest Orange Pedia.</footer>
    </div>
  );
}
