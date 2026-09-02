(() => {
const { Card, Badge, Button, IconButton, Icon, Input, Textarea, Select, Checkbox, Tooltip } = window.DS;

function JobPanel({ job, onClose, onSave }) {
  if (!job) {
    return (
      <div style={{ padding: 'var(--space-8)', color: 'var(--text-muted)', fontSize: 14, borderLeft: '1px solid var(--border-hairline)', width: 340, flex: '0 0 340px', background: 'var(--surface-card)' }}>
        <Icon name="clipboard-list" size={22} color="var(--earth-400)" />
        <p style={{ marginTop: 12 }}>Pick a job to see the details, crew notes and gate codes.</p>
      </div>
    );
  }
  return (
    <div style={{ width: 340, flex: '0 0 340px', borderLeft: '1px solid var(--border-hairline)', background: 'var(--surface-card)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: 'var(--space-6)', borderBottom: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{job.id}</div>
          <h3 style={{ fontSize: 'var(--size-h3)', marginTop: 4 }}>{job.customer}</h3>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{job.addr}</div>
        </div>
        <span style={{ marginLeft: 'auto' }}><IconButton label="Close panel" variant="ghost" size="sm" onClick={onClose}><Icon name="x" /></IconButton></span>
      </div>
      <div style={{ padding: 'var(--space-6)', display: 'grid', gap: 'var(--space-5)', overflow: 'auto' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Badge tone={job.state[0]} dot>{job.state[1]}</Badge>
          <Badge tone="brand">{job.service}</Badge>
        </div>
        <Card variant="sunken" padding="sm">
          {[['Window', job.window], ['Crew', job.crew], ['Price', '$' + job.price], ['Lot', '0.42 ac']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 13 }}>
              <span style={{ color: 'var(--text-muted)' }}>{k}</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-strong)' }}>{v}</span>
            </div>
          ))}
        </Card>
        <Select label="Assign crew" defaultValue={job.crew} options={['Crew 1', 'Crew 2', 'Crew 3', 'Unassigned']} />
        <Input label="Gate code" defaultValue="4412#" prefix={<Icon name="key-round" size={15} />} />
        <Textarea label="Crew notes" rows={3} defaultValue="Dog in the back until 8. Bag clippings, do not blow into the beds." />
        <Checkbox label="Send customer a text when done" defaultChecked />
      </div>
      <div style={{ marginTop: 'auto', padding: 'var(--space-5) var(--space-6)', borderTop: '1px solid var(--border-hairline)', background: 'var(--surface-sunken)', display: 'flex', gap: 10 }}>
        <Button fullWidth onClick={onSave}>Save job</Button>
        <Tooltip content="Call customer"><IconButton label="Call customer"><Icon name="phone" /></IconButton></Tooltip>
      </div>
    </div>
  );
}

Object.assign(window, { JobPanel });
})();
