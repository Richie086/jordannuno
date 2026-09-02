import React from 'react';

/** Square-ish icon-only control. Always pass `label` for accessibility. */
export function IconButton({ children, label, variant = 'secondary', size = 'md', disabled = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dim = { sm: 34, md: 44, lg: 52 }[size] || 44;
  const skins = {
    primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)', borderColor: 'var(--action-primary-bg)' },
    secondary: { background: 'var(--surface-card)', color: 'var(--text-brand)', borderColor: 'var(--border-default)' },
    ghost: { background: 'transparent', color: 'var(--text-muted)', borderColor: 'transparent' },
    inverse: { background: 'rgba(240,245,232,.12)', color: 'var(--text-on-dark)', borderColor: 'rgba(240,245,232,.24)' }
  };
  const hoverSkins = {
    primary: { background: 'var(--action-primary-bg-hover)' },
    secondary: { background: 'var(--surface-brand-soft)', borderColor: 'var(--border-brand)' },
    ghost: { background: 'var(--action-quiet-bg-hover)', color: 'var(--text-brand)' },
    inverse: { background: 'rgba(240,245,232,.22)' }
  };
  return (
    <button
      {...rest}
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dim, height: dim, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-sm)', border: 'var(--border-width-default) solid transparent',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        ...skins[variant], ...(hover && !disabled ? hoverSkins[variant] : {}), ...style
      }}
    >
      {children}
    </button>
  );
}
