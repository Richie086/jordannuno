import React from 'react';

/** Squared keyword tag — service categories, filters. Optionally removable/selectable. */
export function Tag({ children, selected = false, onRemove, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      {...rest}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        fontFamily: 'var(--font-ui)', fontSize: 'var(--size-caption)', fontWeight: 'var(--weight-medium)',
        padding: '5px 10px', borderRadius: 'var(--radius-xs)',
        border: 'var(--border-width-hairline) solid ' + (selected ? 'var(--border-brand)' : 'var(--border-default)'),
        background: selected ? 'var(--surface-brand-soft)' : (hover && onClick ? 'var(--earth-100)' : 'var(--surface-card)'),
        color: selected ? 'var(--text-brand)' : 'var(--text-body)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        ...style
      }}
    >
      {children}
      {onRemove && (
        <button onClick={(e) => { e.stopPropagation(); onRemove(e); }} aria-label="Remove"
          style={{ border: 0, background: 'transparent', color: 'var(--text-faint)', cursor: 'pointer', padding: 0, lineHeight: 1, fontSize: '14px' }}>×</button>
      )}
    </span>
  );
}
