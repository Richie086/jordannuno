import React from 'react';
import { fieldShell, FieldLabel, FieldHint } from './field.js';

export function Select({ label, hint, error, required, options = [], placeholder, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return (
    <div style={{ width: '100%' }}>
      {label && <FieldLabel htmlFor={fid} required={required}>{label}</FieldLabel>}
      <div style={{ position: 'relative' }}>
        <select
          {...rest} id={fid}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            ...fieldShell, appearance: 'none', paddingRight: '38px', cursor: 'pointer',
            borderColor: error ? 'var(--rust-600)' : focus ? 'var(--border-focus)' : 'var(--border-default)',
            boxShadow: focus ? 'var(--shadow-focus)' : 'none', ...style
          }}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => {
            const v = typeof o === 'string' ? o : o.value;
            const l = typeof o === 'string' ? o : o.label;
            return <option key={v} value={v}>{l}</option>;
          })}
        </select>
        <span aria-hidden="true" style={{
          position: 'absolute', right: '13px', top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none', color: 'var(--text-muted)', fontSize: '11px'
        }}>▼</span>
      </div>
      {(hint || error) && <FieldHint error={!!error}>{error || hint}</FieldHint>}
    </div>
  );
}
