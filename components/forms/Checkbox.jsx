import React from 'react';

export function Checkbox({ label, description, checked, defaultChecked, disabled, onChange, id, style, ...rest }) {
  const fid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  return (
    <label htmlFor={fid} style={{
      display: 'flex', gap: '11px', alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style
    }}>
      <input
        {...rest} type="checkbox" id={fid} checked={isOn} disabled={disabled}
        onChange={(e) => { if (checked === undefined) setInternal(e.target.checked); onChange && onChange(e); }}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span aria-hidden="true" style={{
        width: 20, height: 20, flex: '0 0 auto', marginTop: description ? '2px' : 0,
        borderRadius: 'var(--radius-xs)',
        border: 'var(--border-width-default) solid ' + (isOn ? 'var(--action-primary-bg)' : 'var(--border-default)'),
        background: isOn ? 'var(--action-primary-bg)' : 'var(--surface-card)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--action-primary-fg)', fontSize: '12px', fontWeight: 700, lineHeight: 1,
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
      }}>{isOn ? '✓' : ''}</span>
      <span>
        <span style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' }}>{label}</span>
        {description && <span style={{ display: 'block', fontSize: 'var(--size-caption)', color: 'var(--text-muted)', marginTop: '2px' }}>{description}</span>}
      </span>
    </label>
  );
}
