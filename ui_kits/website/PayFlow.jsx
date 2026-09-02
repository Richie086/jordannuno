(() => {
const { Button, Card, Input, Icon, Badge, Dialog, Tag } = window.DS;

const METHODS = [
  { id: 'paypal',  name: 'PayPal',   note: 'Card or PayPal balance',   fg: '#ffffff', bg: '#003087', accent: '#009cde', handle: 'billing@jordonnuno.com',  action: 'Continue to PayPal' },
  { id: 'venmo',   name: 'Venmo',    note: 'Bank-linked, no fee',      fg: '#ffffff', bg: '#008CFF', accent: '#008CFF', handle: '@jordon-nuno-landscaping', action: 'Open Venmo' },
  { id: 'cashapp', name: 'Cash App', note: 'Instant to our account',   fg: '#ffffff', bg: '#00D64F', accent: '#00D64F', handle: '$JordonNunoLawn',          action: 'Open Cash App' }
];

function MethodMark({ m, size = 40 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 'var(--radius-md)', background: m.bg, color: m.fg, display: 'grid', placeItems: 'center', flex: 'none', fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: size * 0.42, letterSpacing: '-.02em' }}>
      {m.id === 'cashapp' ? '$' : m.name[0]}
    </div>
  );
}

function MethodRow({ m, selected, onSelect }) {
  return (
    <button type="button" onClick={() => onSelect(m.id)} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-4)', width: '100%', textAlign: 'left', cursor: 'pointer',
      padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', background: selected ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: selected ? '2px solid var(--text-brand)' : '1px solid var(--border-default)', font: 'inherit'
    }}>
      <MethodMark m={m} />
      <span style={{ display: 'grid', gap: 2 }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>{m.name}</span>
        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{m.note}</span>
      </span>
      <span style={{ marginLeft: 'auto', color: selected ? 'var(--text-brand)' : 'var(--text-muted)' }}>
        <Icon name={selected ? 'check-circle-2' : 'circle'} size={20} />
      </span>
    </button>
  );
}

function PayDialog({ open, onClose, onPaid, invoice }) {
  const [step, setStep] = React.useState(1);
  const [method, setMethod] = React.useState('paypal');
  const [ref, setRef] = React.useState(invoice || '');
  const m = METHODS.find((x) => x.id === method);
  const close = () => { onClose(); setStep(1); };
  const amount = '$168.00';

  return (
    <Dialog
      open={open}
      width={520}
      title={step === 1 ? 'Pay your invoice' : `Pay with ${m.name}`}
      description={step === 1 ? 'No account needed. Enter the invoice number from your emailed statement.' : 'Send the exact amount and include your invoice number in the note.'}
      onClose={close}
      footer={step === 1
        ? <><Button variant="ghost" onClick={close}>Cancel</Button><Button onClick={() => setStep(2)} disabled={!ref}>Continue</Button></>
        : <><Button variant="ghost" onClick={() => setStep(1)}>Back</Button><Button variant="accent" onClick={() => { onPaid(m.name); close(); }}>{m.action}</Button></>}
    >
      {step === 1 ? (
        <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
          <Input label="Invoice number" required placeholder="INV-4021" value={ref} onChange={(e) => setRef(e.target.value)} prefix={<Icon name="hash" size={16} />} />
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: 'var(--space-4) var(--space-5)', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Balance due</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 24, color: 'var(--text-strong)' }}>{amount}</span>
          </div>
          <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
            {METHODS.map((x) => <MethodRow key={x.id} m={x} selected={method === x.id} onSelect={setMethod} />)}
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <MethodMark m={m} size={52} />
            <div style={{ display: 'grid', gap: 3 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--text-strong)' }}>{m.handle}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Verified business account</div>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, color: 'var(--text-strong)' }}>{amount}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Invoice {ref}</div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--space-3)', padding: 'var(--space-5)', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)' }}>
            {[['1', `Tap "${m.action}" below — we hand you off to the ${m.name} app.`], ['2', `Confirm the amount reads ${amount}.`], ['3', `Put "${ref || 'INV-0000'}" in the note so we can match the payment.`]].map(([n, t]) => (
              <div key={n} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                <span style={{ width: 20, height: 20, borderRadius: 999, background: 'var(--text-brand)', color: 'var(--text-on-dark)', display: 'grid', placeItems: 'center', flex: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, marginTop: 1 }}>{n}</span>
                <span style={{ fontSize: 14, color: 'var(--text-body)' }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--text-muted)' }}>
            <Icon name="shield-check" size={16} />We never see or store your card or bank details.
          </div>
        </div>
      )}
    </Dialog>
  );
}

function PayBill({ onPay }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--space-10)', alignItems: 'center' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Payments</div>
        <h2 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-5)', fontSize: 'var(--size-h1)' }}>Pay your invoice online</h2>
        <p style={{ fontSize: 'var(--size-body-lg)', color: 'var(--text-body)', maxWidth: 460, marginBottom: 'var(--space-7)' }}>
          Every statement goes out by email with an invoice number. Pay it with PayPal, Venmo or Cash App — whichever you already use. Checks and cash are still welcome at the door.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="accent" size="lg" onClick={onPay}>Pay an invoice</Button>
          <Tag>Due on receipt</Tag>
          <Tag>No processing fee</Tag>
        </div>
      </div>
      <Card padding="lg" style={{ display: 'grid', gap: 'var(--space-3)' }}>
        {METHODS.map((m) => (
          <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3) 0', borderTop: m.id === 'paypal' ? 'none' : '1px solid var(--border-hairline)' }}>
            <MethodMark m={m} size={44} />
            <div style={{ display: 'grid', gap: 2 }}>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>{m.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>{m.handle}</div>
            </div>
            <Badge tone="neutral" size="sm" style={{ marginLeft: 'auto' }}>{m.id === 'paypal' ? 'Cards ok' : 'Instant'}</Badge>
          </div>
        ))}
      </Card>
    </div>
  );
}

Object.assign(window, { PayDialog, PayBill, PAY_METHODS: METHODS });
})();
