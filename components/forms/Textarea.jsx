import React from 'react';
import { fieldShell, FieldLabel, FieldHint } from './field.js';

export function Textarea({ label, hint, error, required, rows = 4, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return (
    <div style={{ width: '100%' }}>
      {label && <FieldLabel htmlFor={fid} required={required}>{label}</FieldLabel>}
      <textarea
        {...rest} id={fid} rows={rows}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          ...fieldShell, resize: 'vertical', lineHeight: 'var(--lh-normal)',
          borderColor: error ? 'var(--rust-600)' : focus ? 'var(--border-focus)' : 'var(--border-default)',
          boxShadow: focus ? 'var(--shadow-focus)' : 'none', ...style
        }}
      />
      {(hint || error) && <FieldHint error={!!error}>{error || hint}</FieldHint>}
    </div>
  );
}
