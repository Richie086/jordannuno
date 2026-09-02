(() => {
const { Button, Card, Badge, Tag, Icon } = window.DS;

/** Honest placeholder standing in for a real photo — no photography was supplied. */
function PhotoSlot({ label, height = '100%', radius = 'var(--radius-md)' }) {
  return (
    <div style={{ position: 'relative', height, borderRadius: radius, overflow: 'hidden', background: 'linear-gradient(135deg,var(--green-500),var(--green-800))' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-image)' }} />
      <div style={{ position: 'absolute', left: 14, bottom: 12, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--earth-50)', opacity: .8 }}>{label}</div>
    </div>
  );
}

function Eyebrow({ children }) {
  return <div style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{children}</div>;
}

function Section({ children, tone = 'page', pad = 'var(--section-y)' }) {
  const bg = tone === 'inverse' ? 'var(--surface-inverse)' : tone === 'card' ? 'var(--surface-card)' : 'var(--surface-page)';
  return (
    <section style={{ background: bg, padding: pad + ' 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>{children}</div>
    </section>
  );
}

function Hero({ onQuote }) {
  return (
    <Section pad="var(--space-13)">
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 'var(--space-11)', alignItems: 'center' }}>
        <div>
          <Eyebrow>Serving Greater Sacramento since 2011</Eyebrow>
          <hr className="jn-rule" style={{ margin: '16px 0 20px' }} />
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--size-display-2)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--tracking-display)' }}>
            A yard you don't have to think about.
          </h1>
          <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--size-body-lg)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-body)', maxWidth: 480 }}>
            Mowing, cleanups, mulch and irrigation. Same crew every visit, a text the day before, and a price we quote up front.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
            <Button variant="accent" size="lg" onClick={onQuote} iconRight={<Icon name="arrow-right" size={17} />}>Get a free quote</Button>
            <Button variant="secondary" size="lg">See pricing</Button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-7)', marginTop: 'var(--space-9)' }}>
            {[['Licensed & insured', 'shield-check'], ['Weekly routes', 'calendar-days'], ['Local crew of 6', 'users']].map(([t, ic]) => (
              <span key={t} style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontSize: 14, color: 'var(--text-muted)' }}>
                <Icon name={ic} size={17} color="var(--green-600)" />{t}
              </span>
            ))}
          </div>
        </div>
        <PhotoSlot label="photo: crew mowing a front lawn, morning light" height={440} />
      </div>
    </Section>
  );
}

const SERVICES = [
  ['Weekly mowing', 'scissors', 'Cut, trim, edge, and blow off the walks. Weekly or every other week.', 'From $45 / visit'],
  ['Seasonal cleanup', 'leaf', 'Spring and fall. Beds cleared, leaves hauled, gutters at the roofline.', 'From $220'],
  ['Mulch & beds', 'sprout', 'Hardwood or cedar, edged clean, three inches deep.', '$68 / yard installed'],
  ['Irrigation checks', 'droplets', 'Startup, shutdown, head adjustment and leak repair.', 'From $95']
];

function Services({ onQuote }) {
  return (
    <Section tone="card">
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-8)' }}>
        <div>
          <Eyebrow>What we do</Eyebrow>
          <h2 style={{ marginTop: 'var(--space-4)', fontSize: 'var(--size-h1)' }}>Four services, done right</h2>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <Tag selected>Residential</Tag><Tag>Commercial</Tag><Tag>HOA</Tag>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-5)', marginTop: 'var(--space-8)' }}>
        {SERVICES.map(([title, icon, body, price]) => (
          <Card key={title} variant="raised" accentTop interactive onClick={onQuote}>
            <Icon name={icon} size={22} color="var(--green-600)" />
            <h3 style={{ fontSize: 'var(--size-h3)', marginTop: 'var(--space-5)' }}>{title}</h3>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 'var(--space-4)', lineHeight: 'var(--lh-normal)' }}>{body}</p>
            <div style={{ marginTop: 'var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-strong)' }}>{price}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  const steps = [['Walk the property', 'We measure, look at the beds, and note the gates.'], ['Get a written price', 'One page, no upsells, good for 30 days.'], ['We show up', 'Same crew, same day of the week, text the night before.']];
  return (
    <Section tone="inverse" pad="var(--space-12)">
      <div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 'var(--space-11)' }}>
        <div>
          <Eyebrow><span style={{ color: 'var(--clay-400)' }}>How it works</span></Eyebrow>
          <h2 style={{ color: 'var(--text-on-dark)', marginTop: 'var(--space-4)', fontSize: 'var(--size-h1)' }}>Three steps, no surprises</h2>
        </div>
        <div style={{ display: 'grid', gap: 'var(--space-7)' }}>
          {steps.map(([t, b], i) => (
            <div key={t} style={{ display: 'flex', gap: 'var(--space-6)', paddingBottom: 'var(--space-7)', borderBottom: i < 2 ? '1px solid rgba(240,245,232,.16)' : 'none' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--clay-400)', paddingTop: 4 }}>0{i + 1}</span>
              <div>
                <h3 style={{ color: 'var(--text-on-dark)', fontSize: 'var(--size-h3)' }}>{t}</h3>
                <p style={{ color: 'var(--text-on-dark-muted)', fontSize: 15, marginTop: 6 }}>{b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Work() {
  return (
    <Section>
      <Eyebrow>Recent work</Eyebrow>
      <h2 style={{ marginTop: 'var(--space-4)', fontSize: 'var(--size-h1)' }}>Yards around Greater Sacramento</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 'var(--space-5)', marginTop: 'var(--space-8)', height: 300 }}>
        <PhotoSlot label="photo: fresh mulch bed, brick walk" />
        <PhotoSlot label="photo: striped back lawn" />
        <PhotoSlot label="photo: fall cleanup, leaf pile" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', marginTop: 'var(--space-5)' }}>
        {[['Marla T., East Sacramento', 'They quoted $52 a week and it has been $52 a week for two years. Gate always latched.'], ['Dev P., Folsom', 'Fall cleanup took one morning. The beds looked better than when we moved in.']].map(([who, quote]) => (
          <Card key={who} variant="flat" padding="lg">
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 1.35, color: 'var(--text-strong)' }}>“{quote}”</p>
            <div style={{ marginTop: 'var(--space-5)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Badge tone="success" size="sm" dot>Verified customer</Badge>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{who}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function ServiceArea() {
  const towns = ['Sacramento', 'Roseville', 'Folsom', 'Elk Grove', 'Rocklin', 'Davis', 'Granite Bay', 'El Dorado Hills'];
  return (
    <Section tone="card" pad="var(--section-y-sm)">
      <div style={{ display: 'flex', gap: 'var(--space-9)', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'inline-flex', gap: 10, alignItems: 'center' }}>
          <Icon name="map-pin" size={20} color="var(--green-600)" />
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>Service area</span>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{towns.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>Not listed? Call and ask.</span>
      </div>
    </Section>
  );
}

Object.assign(window, { PhotoSlot, Eyebrow, Section, Hero, Services, Process, Work, ServiceArea });
})();
