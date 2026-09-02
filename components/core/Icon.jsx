import React from 'react';

/** Thin wrapper over the Lucide CDN sprite. Renders an <i data-lucide> and asks
 *  Lucide to swap in the SVG. Load Lucide from CDN on the host page. */
export function Icon({ name, size = 18, strokeWidth = 1.75, color = 'currentColor', style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const draw = () => {
      if (window.lucide && el.isConnected) {
        el.innerHTML = '';
        const i = document.createElement('i');
        i.setAttribute('data-lucide', name);
        el.appendChild(i);
        window.lucide.createIcons({
          nameAttr: 'data-lucide',
          attrs: { width: size, height: size, 'stroke-width': strokeWidth, stroke: color },
          root: el
        });
      }
    };
    draw();
    if (!window.lucide) {
      const t = setInterval(() => { if (window.lucide) { clearInterval(t); draw(); } }, 60);
      return () => clearInterval(t);
    }
  }, [name, size, strokeWidth, color]);
  return <span ref={ref} aria-hidden="true" style={{ display: 'inline-flex', width: size, height: size, flex: '0 0 auto', ...style }} {...rest} />;
}
