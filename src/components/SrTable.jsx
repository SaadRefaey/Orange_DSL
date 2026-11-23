import { useMemo, useState } from 'react';
import { srOf } from '../data/flows.js';

export default function SrTable({ cat, onOpen }) {
  const all = useMemo(() => srOf(cat), [cat]);
  const [q, setQ] = useState('');
  const rows = useMemo(() => {
    const k = q.trim().toLowerCase();
    return all.filter((r) => !k || Object.values(r).join(' ').toLowerCase().includes(k));
  }, [q, all]);

  return (
    <div>
      <h2 className="page-title">Siebel SR codes</h2>
      <input className="search" placeholder="Filter by code, area, product…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Filter SR codes" />
      <div className="scroll">
        <table>
          <thead><tr><th>Code</th><th>Type</th><th>Area</th><th>Sub Area</th><th>SLA</th><th /></tr></thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.node + r.code + i}>
                <td><span className="code">{r.code}</span></td><td>{r.type}</td><td>{r.area}</td><td>{r.sub || '—'}</td><td>{r.sla}</td>
                <td><button className="btn ghost" type="button" onClick={() => onOpen(r.node)}>Open step</button></td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={6}>No SR matches.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
