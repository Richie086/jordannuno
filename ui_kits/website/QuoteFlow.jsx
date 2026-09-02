(() => {
const { Button, Card, Input, Select, Textarea, Checkbox, Switch, Dialog, Toast, Icon, Badge } = window.DS;

function QuoteDialog({ open, onClose, onSent }) {
  const [step, setStep] = React.useState(1);
  const [service, setService] = React.useState('');
  const close = () => { onClose(); setStep(1); };
  return (
    <Dialog
      open={open}
      width={540}
      title={step === 1 ? 'Get a free quote' : 'Where and when'}
      description={step === 1 ? 'Two minutes. We reply the same day with a written price.' : 'We walk the property before quoting anything over a quarter acre.'}
      onClose={close}
      footer={step === 1
        ? <><Button variant="ghost" onClick={close}>Cancel</Button><Button onClick={() => setStep(2)} disabled={!service}>Continue</Button></>
        : <><Button variant="ghost" onClick={() => setStep(1)}>Back</Button><Button variant="accent" onClick={() => { onSent(); close(); }}>Send request</Button></>}
    >
      {step === 1 ? (
        <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
          <Select label="What do you need?" required placeholder="Choose a service" value={service} onChange={(e) => setService(e.target.value)}
            options={['Weekly mowing', 'Seasonal cleanup', 'Mulch & beds', 'Irrigation check', 'Something else']} />
          <Textarea label="Anything we should know?" rows={3} placeholder="Quarter acre, back gate is unlocked, dog in the yard until 8." />
          <Checkbox label="This is a recurring visit" description="April through October" defaultChecked />
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
          <Input label="Name" required placeholder="Marla Tran" />
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--space-5)' }}>
            <Input label="Property address" required placeholder="1420 Fair Oaks Blvd, Fair Oaks" prefix={<Icon name="map-pin" size={16} />} />
            <Input label="Phone" placeholder="(555) 208-1140" prefix={<Icon name="phone" size={16} />} />
          </div>
          <Switch label="Text me the day before each visit" defaultChecked />
        </div>
      )}
    </Dialog>
  );
}

function PricingTable({ onQuote }) {
  const rows = [
    ['Standard lot', 'up to 1/4 acre', '$45', '$52'],
    ['Large lot', '1/4 – 1/2 acre', '$62', '$74'],
    ['Acre plus', 'over 1/2 acre', 'Quoted', 'Quoted']
  ];
  return (
    <Card variant="flat" padding="none" style={{ overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ background: 'var(--surface-sunken)' }}>
            {['Property', 'Size', 'Weekly', 'Every other week', ''].map((h) => (
              <th key={h} style={{ textAlign: 'left', padding: '13px 20px', fontFamily: 'var(--font-ui)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([p, s, w, b], i) => (
            <tr key={p} style={{ borderTop: '1px solid var(--border-hairline)' }}>
              <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-strong)' }}>{p}{i === 0 && <Badge tone="brand" size="sm" style={{ marginLeft: 8 }}>Most common</Badge>}</td>
              <td style={{ padding: '16px 20px', color: 'var(--text-muted)' }}>{s}</td>
              <td style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', color: 'var(--text-strong)' }}>{w}</td>
              <td style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', color: 'var(--text-strong)' }}>{b}</td>
              <td style={{ padding: '16px 20px', textAlign: 'right' }}><Button size="sm" variant="secondary" onClick={onQuote}>Get quote</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

Object.assign(window, { QuoteDialog, PricingTable });
})();
