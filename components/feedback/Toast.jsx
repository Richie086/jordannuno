import React from 'react';

/** Inline confirmation strip. Use for save/dispatch confirmations, not for errors that need a decision. */
export function Toast({ message, tone = 'success', icon, action, onDismiss, style }) {
  const tones = {
    success: ['var(--green-800)', 'var(--earth-50)'],
    warning: ['var(--clay-600)', 'var(--earth-950)'],
    danger: ['var(--rust-600)', 'var(--earth-50)'],
    neutral: ['var(--earth-900)', 'var(--earth-50)']
  };
  const [bg, fg] = tones[tone] || tones.success;
  return (
    <div role="status" style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-4)',
      background: bg, color: fg, padding: '13px 16px', borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-lg)', fontSize: 'var(--size-body-sm)', fontWeight: 'var(--weight-medium)', ...style
    }}>
      {icon}
      <span>{message}</span>
      {action}
      {onDismiss && <button onClick={onDismiss} aria-label="Dismiss" style={{
        border: 0, background: 'transparent', color: 'inherit', opacity: 0.7, cursor: 'pointer', fontSize: '15px', lineHeight: 1, padding: 0
      }}>×</button>}
    </div>
  );
}
