import React from 'react';

/** Status chip. Pill-shaped — the one place the system allows full rounding. */
export function Badge({ children, tone = 'neutral', size = 'md', dot = false, style, ...rest }) {
  const tones = {
    neutral: ['var(--status-neutral-bg)', 'var(--status-neutral-fg)'],
    success: ['var(--status-success-bg)', 'var(--status-success-fg)'],
    warning: ['var(--status-warning-bg)', 'var(--status-warning-fg)'],
    danger: ['var(--status-danger-bg)', 'var(--status-danger-fg)'],
    info: ['var(--status-info-bg)', 'var(--status-info-fg)'],
    brand: ['var(--surface-brand-soft)', 'var(--text-brand)']
  };
  const [bg, fg] = tones[tone] || tones.neutral;
  const s = size === 'sm'
    ? { fontSize: 'var(--size-micro)', padding: '2px 8px' }
    : { fontSize: 'var(--size-caption)', padding: '4px 11px' };
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px', background: bg, color: fg,
      fontFamily: 'var(--font-ui)', fontWeight: 'var(--weight-semibold)', letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)', ...s, ...style
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '999px', background: fg }} />}
      {children}
    </span>
  );
}
