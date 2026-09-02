import React from 'react';

/** Hover/focus label. Wraps its child; `content` is the tip text. */
export function Tooltip({ content, placement = 'top', children, style }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' },
    left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' },
    right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' }
  }[placement];
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}
    >
      {children}
      {open && (
        <span role="tooltip" style={{
          position: 'absolute', ...pos, zIndex: 40, whiteSpace: 'nowrap',
          background: 'var(--earth-950)', color: 'var(--earth-50)',
          fontFamily: 'var(--font-ui)', fontSize: 'var(--size-micro)', fontWeight: 'var(--weight-medium)',
          padding: '6px 9px', borderRadius: 'var(--radius-xs)', boxShadow: 'var(--shadow-md)'
        }}>{content}</span>
      )}
    </span>
  );
}
