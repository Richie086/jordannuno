import React from 'react';
import { fieldShell, FieldLabel, FieldHint } from './field.js';

export function Input({ label, hint, error, required, prefix, suffix, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return (
    <div style={{ width: '100%' }}>
      {label && <FieldLabel htmlFor={fid} required={required}>{label}</FieldLabel>}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '9px', ...fieldShell, padding: prefix || suffix ? '0 13px' : fieldShell.padding,
        borderColor: error ? 'var(--rust-600)' : focus ? 'var(--border-focus)' : 'var(--border-default)',
        boxShadow: focus ? 'var(--shadow-focus)' : 'none', ...style
      }}>
        {prefix && <span style={{ color: 'var(--text-faint)', display: 'inline-flex' }}>{prefix}</span>}
        <input
          {...rest} id={fid}
          onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
          style={{
            flex: 1, border: 0, outline: 'none', background: 'transparent', font: 'inherit',
            color: 'inherit', minWidth: 0, padding: prefix || suffix ? '11px 0' : 0
          }}
        />
        {suffix && <span style={{ color: 'var(--text-faint)', display: 'inline-flex' }}>{suffix}</span>}
      </div>
      {(hint || error) && <FieldHint error={!!error}>{error || hint}</FieldHint>}
    </div>
  );
}
