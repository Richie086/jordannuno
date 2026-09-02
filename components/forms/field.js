import React from 'react';

export const fieldShell = {
  width: '100%', fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body-sm)',
  color: 'var(--text-strong)', background: 'var(--surface-card)',
  border: 'var(--border-width-hairline) solid var(--border-default)',
  borderRadius: 'var(--radius-sm)', padding: '11px 13px', minHeight: '44px', outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
};

export function FieldLabel({ children, required, htmlFor }) {
  return (
    <label htmlFor={htmlFor} style={{
      fontFamily: 'var(--font-ui)', fontSize: 'var(--size-caption)', fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)', display: 'block', marginBottom: '6px'
    }}>
      {children}{required && <span style={{ color: 'var(--rust-600)' }}> *</span>}
    </label>
  );
}

export function FieldHint({ children, error }) {
  return <p style={{
    fontSize: 'var(--size-caption)', marginTop: '6px',
    color: error ? 'var(--status-danger-fg)' : 'var(--text-muted)'
  }}>{children}</p>;
}
