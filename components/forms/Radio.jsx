import React from 'react';

export function Radio({ label, description, name, value, checked, disabled, onChange, id, style, ...rest }) {
  const fid = id || React.useId();
  return (
    <label htmlFor={fid} style={{
      display: 'flex', gap: '11px', alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style
    }}>
      <input
        {...rest} type="radio" id={fid} name={name} value={value} checked={checked} disabled={disabled}
        onChange={onChange} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span aria-hidden="true" style={{
        width: 20, height: 20, flex: '0 0 auto', marginTop: description ? '2px' : 0, borderRadius: '999px',
        border: 'var(--border-width-default) solid ' + (checked ? 'var(--action-primary-bg)' : 'var(--border-default)'),
        background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'border-color var(--dur-fast) var(--ease-out)'
      }}>
        {checked && <span style={{ width: 9, height: 9, borderRadius: '999px', background: 'var(--action-primary-bg)' }} />}
      </span>
      <span>
        <span style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' }}>{label}</span>
        {description && <span style={{ display: 'block', fontSize: 'var(--size-caption)', color: 'var(--text-muted)', marginTop: '2px' }}>{description}</span>}
      </span>
    </label>
  );
}

export function RadioGroup({ label, children, style }) {
  return (
    <fieldset style={{ border: 0, padding: 0, margin: 0, ...style }}>
      {label && <legend style={{
        fontFamily: 'var(--font-ui)', fontSize: 'var(--size-caption)', fontWeight: 'var(--weight-semibold)',
        color: 'var(--text-body)', padding: 0, marginBottom: '10px'
      }}>{label}</legend>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>{children}</div>
    </fieldset>
  );
}
