(() => {
const { Card, Badge, Button, IconButton, Icon, Tabs, Tag, Switch } = window.DS;

const JOBS = [
  { id: 'JOB-4187', customer: 'Marla Tran', addr: '1420 Capitol Ave, Sacramento', service: 'Weekly mowing', window: '07:30 – 09:15', crew: 'Crew 2', state: ['success', 'Completed'], price: 52 },
  { id: 'JOB-4188', customer: 'Dev Patel', addr: '88 Folsom Blvd, Folsom', service: 'Mulch & beds', window: '09:30 – 12:00', crew: 'Crew 1', state: ['info', 'In route'], price: 476 },
  { id: 'JOB-4189', customer: 'Natomas HOA', addr: 'Common area, Natomas Blvd', service: 'Weekly mowing', window: '10:00 – 13:30', crew: 'Crew 3', state: ['info', 'Scheduled'], price: 340 },
  { id: 'JOB-4190', customer: 'Ana Solis', addr: '17 Rocklin Rd, Rocklin', service: 'Irrigation check', window: '13:00 – 14:00', crew: 'Crew 2', state: ['warning', 'Weather hold'], price: 95 },
  { id: 'JOB-4191', customer: 'Ben Ortiz', addr: '3 El Dorado Hills Blvd, El Dorado Hills', service: 'Seasonal cleanup', window: '14:00 – 17:00', crew: 'Crew 1', state: ['neutral', 'Unassigned'], price: 260 }
];

function Metric({ label, value, note, tone }) {
  return (
    <Card variant="flat" padding="sm">
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: tone || 'var(--text-strong)', marginTop: 8, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6 }}>{note}</div>
    </Card>
  );
}

function JobRow({ job, selected, onSelect }) {
  const [hover, setHover] = React.useState(false);
  return (
    <tr
      onClick={() => onSelect(job)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ cursor: 'pointer', borderTop: '1px solid var(--border-hairline)', background: selected ? 'var(--surface-brand-soft)' : hover ? 'var(--earth-100)' : 'transparent' }}
    >
      <td style={{ padding: '13px 18px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{job.id}</td>
      <td style={{ padding: '13px 18px' }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{job.customer}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{job.addr}</div>
      </td>
      <td style={{ padding: '13px 18px', fontSize: 14, color: 'var(--text-body)' }}>{job.service}</td>
      <td style={{ padding: '13px 18px', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-body)' }}>{job.window}</td>
      <td style={{ padding: '13px 18px', fontSize: 13, color: 'var(--text-body)' }}>{job.crew}</td>
      <td style={{ padding: '13px 18px' }}><Badge tone={job.state[0]} size="sm" dot>{job.state[1]}</Badge></td>
      <td style={{ padding: '13px 18px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-strong)' }}>${job.price}</td>
    </tr>
  );
}

function ScheduleView({ selected, onSelect, onDispatch }) {
  const [tab, setTab] = React.useState('today');
  return (
    <div style={{ padding: 'var(--space-7) var(--space-8)', display: 'grid', gap: 'var(--space-6)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-4)' }}>
        <Metric label="Jobs today" value="6" note="1 unassigned" />
        <Metric label="Crews out" value="3" note="6 of 6 on the clock" />
        <Metric label="Booked today" value="$1,223" note="+$260 vs last Tuesday" tone="var(--green-700)" />
        <Metric label="Weather" value="Rain 2pm" note="1 job on hold" tone="var(--clay-700)" />
      </div>
      <Tabs value={tab} onChange={setTab} items={[{ value: 'today', label: 'Today', count: 6 }, { value: 'week', label: 'This week', count: 31 }, { value: 'unassigned', label: 'Unassigned', count: 1 }]} />
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Tag selected onClick={() => {}}>All crews</Tag><Tag onClick={() => {}}>Crew 1</Tag><Tag onClick={() => {}}>Crew 2</Tag><Tag onClick={() => {}}>Crew 3</Tag>
        <span style={{ marginLeft: 'auto' }}><Switch label="Show completed" defaultChecked /></span>
      </div>
      <Card variant="flat" padding="none">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr style={{ background: 'var(--surface-sunken)' }}>
            {['Job', 'Customer', 'Service', 'Window', 'Crew', 'Status', 'Price'].map((h, i) => (
              <th key={h} style={{ textAlign: i === 6 ? 'right' : 'left', padding: '11px 18px', fontFamily: 'var(--font-ui)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>{h}</th>
            ))}
          </tr></thead>
          <tbody>{JOBS.map((j) => <JobRow key={j.id} job={j} selected={selected && selected.id === j.id} onSelect={onSelect} />)}</tbody>
        </table>
      </Card>
      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        <Button variant="primary" iconLeft={<Icon name="send" size={16} />} onClick={onDispatch}>Dispatch tomorrow's routes</Button>
        <Button variant="secondary" iconLeft={<Icon name="plus" size={16} />}>Add job</Button>
      </div>
    </div>
  );
}

Object.assign(window, { ScheduleView, JOBS, Metric });
})();
