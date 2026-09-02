(() => {
const { Button, IconButton, Icon } = window.DS;

function Wordmark({ dark }) {
  return (
    <a href="#" style={{ textDecoration: 'none', display: 'block', lineHeight: 1 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, letterSpacing: '-.02em', color: dark ? 'var(--earth-50)' : 'var(--text-strong)' }}>JORDON NUNO</div>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700, letterSpacing: '.2em', color: dark ? 'var(--clay-400)' : 'var(--text-muted)', marginTop: 3 }}>LANDSCAPING &amp; LAWNCARE</div>
    </a>
  );
}

function SiteHeader({ onQuote, onPay, page, setPage }) {
  const links = [['services','Services'],['work','Our work'],['pricing','Pricing'],['about','About']];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(248,246,239,.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter-page-lg)', height: 76, display: 'flex', alignItems: 'center', gap: 'var(--space-9)' }}>
        <Wordmark />
        <nav style={{ display: 'flex', gap: 'var(--space-7)', marginLeft: 'auto' }}>
          {links.map(([k, l]) => (
            <a key={k} href="#" onClick={(e) => { e.preventDefault(); setPage(k); }} style={{
              fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, textDecoration: 'none',
              color: page === k ? 'var(--text-brand)' : 'var(--text-body)'
            }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <a href="tel:5550142" style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-body)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Icon name="phone" size={15} />(555) 014-2200
          </a>
          <Button variant="secondary" onClick={onPay}>Pay a bill</Button>
          <Button variant="accent" onClick={onQuote}>Get a free quote</Button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  const cols = [
    ['Services', ['Weekly mowing', 'Seasonal cleanup', 'Mulch install', 'Irrigation checks']],
    ['Company', ['About the crew', 'Service area', 'Careers', 'Contact']],
    ['Details', ['Licensed & insured', 'Pricing', 'Pay a bill', 'Privacy']]
  ];
  return (
    <footer style={{ background: 'var(--surface-inverse)', color: 'var(--text-on-dark)', padding: 'var(--space-12) 0 var(--space-8)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 'var(--space-9)' }}>
          <div>
            <Wordmark dark />
            <p style={{ marginTop: 'var(--space-5)', fontSize: 14, color: 'var(--text-on-dark-muted)', maxWidth: 260 }}>
              Family-run since 2011. Serving Rancho Cordova, Orangevale, Fair Oaks, Carmichael, and Folsom.
            </p>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--clay-400)' }}>{h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
                {items.map((i) => <a key={i} href="#" style={{ fontSize: 14, color: 'var(--text-on-dark)', textDecoration: 'none', opacity: .85 }}>{i}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-11)', paddingTop: 'var(--space-6)', borderTop: '1px solid rgba(240,245,232,.16)', display: 'flex', gap: 'var(--space-5)', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: 'var(--text-on-dark-muted)' }}>© 2026 Jordon Nuno Landscaping &amp; Lawncare, LLC</span>
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <IconButton label="Facebook" variant="inverse" size="sm"><Icon name="facebook" size={16} /></IconButton>
            <IconButton label="Instagram" variant="inverse" size="sm"><Icon name="instagram" size={16} /></IconButton>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Wordmark, SiteHeader, SiteFooter });
})();
