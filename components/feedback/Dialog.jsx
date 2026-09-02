import React from 'react';

/** Modal sheet with scrim. Renders nothing when `open` is false. */
export function Dialog({ open, title, description, children, footer, onClose, width = 480 }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 60, background: 'var(--scrim-flat)',
        backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-7)'
      }}
    >
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} style={{
        width: '100%', maxWidth: width, background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)', borderTop: 'var(--border-width-heavy) solid var(--surface-accent)',
        boxShadow: 'var(--shadow-lg)', overflow: 'hidden'
      }}>
        <div style={{ padding: 'var(--space-8) var(--space-8) var(--space-5)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h3)', color: 'var(--text-strong)', margin: 0 }}>{title}</h3>
          {description && <p style={{ marginTop: 'var(--space-4)', color: 'var(--text-muted)', fontSize: 'var(--size-body-sm)' }}>{description}</p>}
        </div>
        {children && <div style={{ padding: '0 var(--space-8) var(--space-7)' }}>{children}</div>}
        {footer && <div style={{
          display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-4)',
          padding: 'var(--space-5) var(--space-8)', background: 'var(--surface-sunken)',
          borderTop: 'var(--border-width-hairline) solid var(--border-hairline)'
        }}>{footer}</div>}
      </div>
    </div>
  );
}
