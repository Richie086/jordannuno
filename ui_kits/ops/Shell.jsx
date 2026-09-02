(() => {
const { Icon, IconButton, Badge, Button, Tooltip } = window.DS;

const NAV = [
  ['schedule', 'Schedule', 'calendar-days'],
  ['jobs', 'Jobs', 'clipboard-list'],
  ['quotes', 'Quotes', 'file-text'],
  ['crews', 'Crews', 'users'],
  ['customers', 'Customers', 'contact'],
  ['invoices', 'Invoices', 'receipt']
];

function OpsSidebar({ view, setView }) {
  return (
    <aside style={{ width: 232, flex: '0 0 232px', background: 'var(--surface-inverse)', color: 'var(--text-on-dark)', display: 'flex', flexDirection: 'column', padding: 'var(--space-6) var(--space-4)' }}>
      <div style={{ padding: '0 var(--space-3) var(--space-7)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, letterSpacing: '-.01em', color: 'var(--earth-50)' }}>JORDON NUNO</div>
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700, letterSpacing: '.18em', color: 'var(--clay-400)', marginTop: 3 }}>CREW DISPATCH</div>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV.map(([k, l, ic]) => {
          const on = k === view;
          return (
            <button key={k} onClick={() => setView(k)} style={{
              display: 'flex', alignItems: 'center', gap: 11, padding: '10px 12px', border: 0, cursor: 'pointer',
              borderRadius: 'var(--radius-sm)', textAlign: 'left',
              background: on ? 'rgba(240,245,232,.12)' : 'transparent',
              color: on ? 'var(--earth-50)' : 'rgba(240,245,232,.72)',
              fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: on ? 700 : 500,
              boxShadow: on ? 'inset 2px 0 0 var(--clay-500)' : 'none'
            }}>
              <Icon name={ic} size={17} />{l}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto', padding: 'var(--space-5) var(--space-3)', borderTop: '1px solid rgba(240,245,232,.16)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 30, height: 30, borderRadius: 'var(--radius-sm)', background: 'var(--clay-600)', color: 'var(--earth-950)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12 }}>JN</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--earth-50)' }}>Jordon Nuno</div>
            <div style={{ fontSize: 11, color: 'var(--text-on-dark-muted)' }}>Owner</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function OpsTopbar({ title, subtitle, actions }) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', padding: 'var(--space-6) var(--space-8)', borderBottom: '1px solid var(--border-hairline)', background: 'var(--surface-card)' }}>
      <div>
        <h1 style={{ fontSize: 'var(--size-h2)' }}>{title}</h1>
        {subtitle && <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{subtitle}</p>}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Tooltip content="Search jobs"><IconButton label="Search" variant="ghost"><Icon name="search" /></IconButton></Tooltip>
        <Tooltip content="Weather"><IconButton label="Weather" variant="ghost"><Icon name="cloud-sun" /></IconButton></Tooltip>
        {actions}
      </div>
    </header>
  );
}

Object.assign(window, { OpsSidebar, OpsTopbar, NAV });
})();
