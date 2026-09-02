import React from 'react';

/** Underline tab bar. Controlled via `value`/`onChange`, or uncontrolled with `defaultValue`. */
export function Tabs({ items = [], value, defaultValue, onChange, style }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const active = value !== undefined ? value : internal;
  const pick = (v) => { if (value === undefined) setInternal(v); onChange && onChange(v); };
  return (
    <div role="tablist" style={{
      display: 'flex', gap: 'var(--space-7)', borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)', ...style
    }}>
      {items.map((it) => {
        const v = it.value ?? it;
        const l = it.label ?? it;
        const on = v === active;
        return (
          <button key={v} role="tab" aria-selected={on} onClick={() => pick(v)} style={{
            border: 0, background: 'transparent', cursor: 'pointer', padding: '0 0 11px',
            fontFamily: 'var(--font-ui)', fontSize: 'var(--size-body-sm)',
            fontWeight: on ? 'var(--weight-bold)' : 'var(--weight-medium)',
            color: on ? 'var(--text-brand)' : 'var(--text-muted)',
            boxShadow: on ? 'inset 0 -3px 0 var(--surface-accent)' : 'none',
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            transition: 'color var(--dur-fast) var(--ease-out)'
          }}>
            {l}
            {it.count !== undefined && <span style={{
              fontSize: 'var(--size-micro)', fontWeight: 'var(--weight-semibold)', padding: '1px 6px',
              borderRadius: 'var(--radius-pill)', background: 'var(--earth-200)', color: 'var(--text-muted)'
            }}>{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
