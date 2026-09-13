export const ReconcileWalkthrough = ({ copy }) => (
  <div
    data-testid="reckonflow-walkthrough"
    className="border border-ink/15 bg-bone p-4 md:p-5"
  >
    <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-mute mb-3">
      {copy.kicker}
    </p>
    <ol className="space-y-3 text-[0.95rem] leading-relaxed text-ink">
      {copy.steps.map((step, i) => (
        <li key={step} className="grid grid-cols-[2rem_1fr] gap-3">
          <span className="font-mono text-xs text-burgundy pt-1">{i + 1}</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
    <p className="mt-4 font-mono text-xs text-ink-mute leading-relaxed">
      {copy.footnote}
    </p>
  </div>
);

export const ValidataWalkthrough = ({ copy }) => (
  <div
    data-testid="validata-walkthrough"
    className="border border-ink/15 bg-bone overflow-x-auto"
  >
    <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-mute px-4 pt-4">
      {copy.kicker}
    </p>
    <table className="mt-3 w-full min-w-[20rem] text-left text-sm">
      <thead>
        <tr className="border-b border-ink/10 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-mute">
          {copy.headers.map((h) => (
            <th key={h} className="px-4 py-2 font-normal">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {copy.rows.map((row) => (
          <tr key={row.id} className="border-b border-ink/10 last:border-0">
            <td className="px-4 py-2 font-mono text-xs">{row.id}</td>
            <td className="px-4 py-2">{row.name}</td>
            <td className="px-4 py-2 text-burgundy">{row.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="px-4 py-3 font-mono text-xs text-ink-mute leading-relaxed">
      {copy.footnote}
    </p>
  </div>
);
