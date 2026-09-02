import React from 'react';

/** Container surface. `flat` for in-app panels, `raised` for marketing, `inverse` for dark sections. */
export function Card({ children, variant = 'flat', padding = 'md', accentTop = false, interactive = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const pads = { none: 0, sm: 'var(--space-5)', md: 'var(--space-7)', lg: 'var(--space-9)' };
  const skins = {
    flat: { background: 'var(--surface-card)', border: 'var(--border-width-hairline) solid var(--border-hairline)', boxShadow: 'var(--shadow-xs)' },
    raised: { background: 'var(--surface-card)', border: 'var(--border-width-hairline) solid var(--border-hairline)', boxShadow: 'var(--shadow-md)' },
    sunken: { background: 'var(--surface-sunken)', border: 'var(--border-width-hairline) solid var(--border-hairline)', boxShadow: 'none' },
    inverse: { background: 'var(--surface-inverse)', border: 'var(--border-width-hairline) solid rgba(240,245,232,.14)', color: 'var(--text-on-dark)', boxShadow: 'none' }
  };
  return (
    <div
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-md)', padding: pads[padding] ?? pads.md, overflow: 'hidden',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        ...skins[variant],
        ...(accentTop ? { borderTop: 'var(--border-width-heavy) solid var(--surface-accent)' } : {}),
        ...(interactive ? { cursor: 'pointer' } : {}),
        ...(interactive && hover ? { boxShadow: 'var(--shadow-lg)', transform: 'translateY(-2px)' } : {}),
        ...style
      }}
    >
      {children}
    </div>
  );
}
