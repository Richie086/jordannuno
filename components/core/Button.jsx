import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  fontFamily: 'var(--font-ui)', fontWeight: 'var(--weight-semibold)', letterSpacing: '0.01em',
  border: 'var(--border-width-default) solid transparent', borderRadius: 'var(--radius-sm)',
  cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap',
  transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)'
};

const sizes = {
  sm: { padding: '7px 13px', fontSize: 'var(--size-caption)', minHeight: '34px' },
  md: { padding: '10px 18px', fontSize: 'var(--size-body-sm)', minHeight: '44px' },
  lg: { padding: '14px 26px', fontSize: 'var(--size-body)', minHeight: '52px' }
};

const variants = {
  primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)', borderColor: 'var(--action-primary-bg)' },
  accent: { background: 'var(--action-accent-bg)', color: 'var(--action-accent-fg)', borderColor: 'var(--action-accent-bg)' },
  secondary: { background: 'var(--surface-card)', color: 'var(--text-brand)', borderColor: 'var(--border-brand)' },
  ghost: { background: 'transparent', color: 'var(--text-brand)', borderColor: 'transparent' },
  inverse: { background: 'var(--earth-50)', color: 'var(--green-900)', borderColor: 'var(--earth-50)' }
};

const hovers = {
  primary: { background: 'var(--action-primary-bg-hover)', borderColor: 'var(--action-primary-bg-hover)' },
  accent: { background: 'var(--action-accent-bg-hover)', borderColor: 'var(--action-accent-bg-hover)' },
  secondary: { background: 'var(--surface-brand-soft)' },
  ghost: { background: 'var(--action-quiet-bg-hover)' },
  inverse: { background: 'var(--white)', borderColor: 'var(--white)' }
};

export function Button({
  children, variant = 'primary', size = 'md', disabled = false, fullWidth = false,
  href, iconLeft, iconRight, type = 'button', onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const composed = {
    ...base, ...sizes[size] || sizes.md, ...variants[variant] || variants.primary,
    ...(hover && !disabled ? hovers[variant] || {} : {}),
    ...(press && !disabled ? { transform: 'translateY(1px)' } : {}),
    ...(fullWidth ? { width: '100%' } : {}),
    ...(disabled ? { opacity: 0.45, cursor: 'not-allowed' } : {}),
    ...style
  };
  return (
    <Tag
      {...rest}
      href={href}
      type={href ? undefined : type}
      disabled={href ? undefined : disabled}
      onClick={disabled ? undefined : onClick}
      style={composed}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
    >
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
