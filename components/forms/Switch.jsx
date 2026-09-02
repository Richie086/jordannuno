import React from 'react';

export function Switch({ label, checked, defaultChecked, disabled, onChange, style, ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!isOn);
    onChange && onChange(!isOn);
  };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <button
        {...rest} type="button" role="switch" aria-checked={isOn} aria-label={label} onClick={toggle}
        style={{
          width: 44, height: 26, flex: '0 0 auto', borderRadius: 'var(--radius-pill)', padding: '3px',
          border: 'var(--border-width-hairline) solid ' + (isOn ? 'var(--action-primary-bg)' : 'var(--border-default)'),
          background: isOn ? 'var(--action-primary-bg)' : 'var(--earth-200)',
          display: 'inline-flex', justifyContent: isOn ? 'flex-end' : 'flex-start', alignItems: 'center',
          cursor: 'inherit', transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
        }}
      >
        <span style={{ width: 18, height: 18, borderRadius: '999px', background: 'var(--white)', boxShadow: 'var(--shadow-sm)' }} />
      </button>
      {label && <span style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' }}>{label}</span>}
    </label>
  );
}
