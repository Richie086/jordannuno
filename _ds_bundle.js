/* @ds-bundle: {"format":4,"namespace":"JordonNunoLandscapingDesignSystem_ad8525","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"FieldLabel","sourcePath":"components/forms/field.js"},{"name":"FieldHint","sourcePath":"components/forms/field.js"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0a6ccedfe69e","components/core/Button.jsx":"5d4def30c262","components/core/Card.jsx":"8129ef1cd813","components/core/Icon.jsx":"be14e387e34b","components/core/IconButton.jsx":"f2f3375b9787","components/core/Tag.jsx":"25d4ecfa50cb","components/feedback/Dialog.jsx":"eb72364f3349","components/feedback/Toast.jsx":"65543a69d4b4","components/feedback/Tooltip.jsx":"f75a813a5d59","components/forms/Checkbox.jsx":"5a8ed8d2d3c0","components/forms/Input.jsx":"b4945c5f2818","components/forms/Radio.jsx":"ebc0f9d0f314","components/forms/Select.jsx":"c5c093310179","components/forms/Switch.jsx":"41524748c951","components/forms/Textarea.jsx":"4d1bfb80d6d0","components/forms/field.js":"9ae9f891b14e","components/navigation/Tabs.jsx":"5853f130b33e","ui_kits/ops/JobPanel.jsx":"ec2a7be8b834","ui_kits/ops/Schedule.jsx":"0ac14d3a1eff","ui_kits/ops/Shell.jsx":"7b8c362828ee","ui_kits/website/Chrome.jsx":"b40365d6f257","ui_kits/website/PayFlow.jsx":"0871d267d4e0","ui_kits/website/QuoteFlow.jsx":"400ba2ebd874","ui_kits/website/Sections.jsx":"89df317a7dbd"},"inlinedExternals":[],"unexposedExports":[{"name":"fieldShell","sourcePath":"components/forms/field.js"}]} */

(() => {

const __ds_ns = (window.JordonNunoLandscapingDesignSystem_ad8525 = window.JordonNunoLandscapingDesignSystem_ad8525 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Status chip. Pill-shaped — the one place the system allows full rounding. */
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: ['var(--status-neutral-bg)', 'var(--status-neutral-fg)'],
    success: ['var(--status-success-bg)', 'var(--status-success-fg)'],
    warning: ['var(--status-warning-bg)', 'var(--status-warning-fg)'],
    danger: ['var(--status-danger-bg)', 'var(--status-danger-fg)'],
    info: ['var(--status-info-bg)', 'var(--status-info-fg)'],
    brand: ['var(--surface-brand-soft)', 'var(--text-brand)']
  };
  const [bg, fg] = tones[tone] || tones.neutral;
  const s = size === 'sm' ? {
    fontSize: 'var(--size-micro)',
    padding: '2px 8px'
  } : {
    fontSize: 'var(--size-caption)',
    padding: '4px 11px'
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      ...s,
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '999px',
      background: fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontFamily: 'var(--font-ui)',
  fontWeight: 'var(--weight-semibold)',
  letterSpacing: '0.01em',
  border: 'var(--border-width-default) solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)'
};
const sizes = {
  sm: {
    padding: '7px 13px',
    fontSize: 'var(--size-caption)',
    minHeight: '34px'
  },
  md: {
    padding: '10px 18px',
    fontSize: 'var(--size-body-sm)',
    minHeight: '44px'
  },
  lg: {
    padding: '14px 26px',
    fontSize: 'var(--size-body)',
    minHeight: '52px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    borderColor: 'var(--action-primary-bg)'
  },
  accent: {
    background: 'var(--action-accent-bg)',
    color: 'var(--action-accent-fg)',
    borderColor: 'var(--action-accent-bg)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-brand)',
    borderColor: 'var(--border-brand)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    borderColor: 'transparent'
  },
  inverse: {
    background: 'var(--earth-50)',
    color: 'var(--green-900)',
    borderColor: 'var(--earth-50)'
  }
};
const hovers = {
  primary: {
    background: 'var(--action-primary-bg-hover)',
    borderColor: 'var(--action-primary-bg-hover)'
  },
  accent: {
    background: 'var(--action-accent-bg-hover)',
    borderColor: 'var(--action-accent-bg-hover)'
  },
  secondary: {
    background: 'var(--surface-brand-soft)'
  },
  ghost: {
    background: 'var(--action-quiet-bg-hover)'
  },
  inverse: {
    background: 'var(--white)',
    borderColor: 'var(--white)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  href,
  iconLeft,
  iconRight,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const composed = {
    ...base,
    ...(sizes[size] || sizes.md),
    ...(variants[variant] || variants.primary),
    ...(hover && !disabled ? hovers[variant] || {} : {}),
    ...(press && !disabled ? {
      transform: 'translateY(1px)'
    } : {}),
    ...(fullWidth ? {
      width: '100%'
    } : {}),
    ...(disabled ? {
      opacity: 0.45,
      cursor: 'not-allowed'
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Container surface. `flat` for in-app panels, `raised` for marketing, `inverse` for dark sections. */
function Card({
  children,
  variant = 'flat',
  padding = 'md',
  accentTop = false,
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-5)',
    md: 'var(--space-7)',
    lg: 'var(--space-9)'
  };
  const skins = {
    flat: {
      background: 'var(--surface-card)',
      border: 'var(--border-width-hairline) solid var(--border-hairline)',
      boxShadow: 'var(--shadow-xs)'
    },
    raised: {
      background: 'var(--surface-card)',
      border: 'var(--border-width-hairline) solid var(--border-hairline)',
      boxShadow: 'var(--shadow-md)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: 'var(--border-width-hairline) solid var(--border-hairline)',
      boxShadow: 'none'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: 'var(--border-width-hairline) solid rgba(240,245,232,.14)',
      color: 'var(--text-on-dark)',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-md)',
      padding: pads[padding] ?? pads.md,
      overflow: 'hidden',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...skins[variant],
      ...(accentTop ? {
        borderTop: 'var(--border-width-heavy) solid var(--surface-accent)'
      } : {}),
      ...(interactive ? {
        cursor: 'pointer'
      } : {}),
      ...(interactive && hover ? {
        boxShadow: 'var(--shadow-lg)',
        transform: 'translateY(-2px)'
      } : {}),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thin wrapper over the Lucide CDN sprite. Renders an <i data-lucide> and asks
 *  Lucide to swap in the SVG. Load Lucide from CDN on the host page. */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
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
          attrs: {
            width: size,
            height: size,
            'stroke-width': strokeWidth,
            stroke: color
          },
          root: el
        });
      }
    };
    draw();
    if (!window.lucide) {
      const t = setInterval(() => {
        if (window.lucide) {
          clearInterval(t);
          draw();
        }
      }, 60);
      return () => clearInterval(t);
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square-ish icon-only control. Always pass `label` for accessibility. */
function IconButton({
  children,
  label,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = {
    sm: 34,
    md: 44,
    lg: 52
  }[size] || 44;
  const skins = {
    primary: {
      background: 'var(--action-primary-bg)',
      color: 'var(--action-primary-fg)',
      borderColor: 'var(--action-primary-bg)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-brand)',
      borderColor: 'var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      borderColor: 'transparent'
    },
    inverse: {
      background: 'rgba(240,245,232,.12)',
      color: 'var(--text-on-dark)',
      borderColor: 'rgba(240,245,232,.24)'
    }
  };
  const hoverSkins = {
    primary: {
      background: 'var(--action-primary-bg-hover)'
    },
    secondary: {
      background: 'var(--surface-brand-soft)',
      borderColor: 'var(--border-brand)'
    },
    ghost: {
      background: 'var(--action-quiet-bg-hover)',
      color: 'var(--text-brand)'
    },
    inverse: {
      background: 'rgba(240,245,232,.22)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      border: 'var(--border-width-default) solid transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...skins[variant],
      ...(hover && !disabled ? hoverSkins[variant] : {}),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Squared keyword tag — service categories, filters. Optionally removable/selectable. */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-medium)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-xs)',
      border: 'var(--border-width-hairline) solid ' + (selected ? 'var(--border-brand)' : 'var(--border-default)'),
      background: selected ? 'var(--surface-brand-soft)' : hover && onClick ? 'var(--earth-100)' : 'var(--surface-card)',
      color: selected ? 'var(--text-brand)' : 'var(--text-body)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--text-faint)',
      cursor: 'pointer',
      padding: 0,
      lineHeight: 1,
      fontSize: '14px'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal sheet with scrim. Renders nothing when `open` is false. */
function Dialog({
  open,
  title,
  description,
  children,
  footer,
  onClose,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'var(--scrim-flat)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      borderTop: 'var(--border-width-heavy) solid var(--surface-accent)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-8) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      color: 'var(--text-muted)',
      fontSize: 'var(--size-body-sm)'
    }
  }, description)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-8) var(--space-7)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) var(--space-8)',
      background: 'var(--surface-sunken)',
      borderTop: 'var(--border-width-hairline) solid var(--border-hairline)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** Inline confirmation strip. Use for save/dispatch confirmations, not for errors that need a decision. */
function Toast({
  message,
  tone = 'success',
  icon,
  action,
  onDismiss,
  style
}) {
  const tones = {
    success: ['var(--green-800)', 'var(--earth-50)'],
    warning: ['var(--clay-600)', 'var(--earth-950)'],
    danger: ['var(--rust-600)', 'var(--earth-50)'],
    neutral: ['var(--earth-900)', 'var(--earth-50)']
  };
  const [bg, fg] = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      background: bg,
      color: fg,
      padding: '13px 16px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-lg)',
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-medium)',
      ...style
    }
  }, icon, /*#__PURE__*/React.createElement("span", null, message), action, onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: 0,
      background: 'transparent',
      color: 'inherit',
      opacity: 0.7,
      cursor: 'pointer',
      fontSize: '15px',
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hover/focus label. Wraps its child; `content` is the tip text. */
function Tooltip({
  content,
  placement = 'top',
  children,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      whiteSpace: 'nowrap',
      background: 'var(--earth-950)',
      color: 'var(--earth-50)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-micro)',
      fontWeight: 'var(--weight-medium)',
      padding: '6px 9px',
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--shadow-md)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled,
  onChange,
  id,
  style,
  ...rest
}) {
  const fid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      gap: '11px',
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    id: fid,
    checked: isOn,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: description ? '2px' : 0,
      borderRadius: 'var(--radius-xs)',
      border: 'var(--border-width-default) solid ' + (isOn ? 'var(--action-primary-bg)' : 'var(--border-default)'),
      background: isOn ? 'var(--action-primary-bg)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--action-primary-fg)',
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: 1,
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, isOn ? '✓' : ''), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  disabled,
  onChange,
  id,
  style,
  ...rest
}) {
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      gap: '11px',
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "radio",
    id: fid,
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: description ? '2px' : 0,
      borderRadius: '999px',
      border: 'var(--border-width-default) solid ' + (checked ? 'var(--action-primary-bg)' : 'var(--border-default)'),
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '999px',
      background: 'var(--action-primary-bg)'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, description)));
}
function RadioGroup({
  label,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 0,
      padding: 0,
      margin: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("legend", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)',
      padding: 0,
      marginBottom: '10px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, children));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '11px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: "button",
    role: "switch",
    "aria-checked": isOn,
    "aria-label": label,
    onClick: toggle,
    style: {
      width: 44,
      height: 26,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      padding: '3px',
      border: 'var(--border-width-hairline) solid ' + (isOn ? 'var(--action-primary-bg)' : 'var(--border-default)'),
      background: isOn ? 'var(--action-primary-bg)' : 'var(--earth-200)',
      display: 'inline-flex',
      justifyContent: isOn ? 'flex-end' : 'flex-start',
      alignItems: 'center',
      cursor: 'inherit',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '999px',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/field.js
try { (() => {
const fieldShell = {
  width: '100%',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--size-body-sm)',
  color: 'var(--text-strong)',
  background: 'var(--surface-card)',
  border: 'var(--border-width-hairline) solid var(--border-default)',
  borderRadius: 'var(--radius-sm)',
  padding: '11px 13px',
  minHeight: '44px',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
};
function FieldLabel({
  children,
  required,
  htmlFor
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)',
      display: 'block',
      marginBottom: '6px'
    }
  }, children, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rust-600)'
    }
  }, " *"));
}
function FieldHint({
  children,
  error
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-caption)',
      marginTop: '6px',
      color: error ? 'var(--status-danger-fg)' : 'var(--text-muted)'
    }
  }, children);
}
Object.assign(__ds_scope, { fieldShell, FieldLabel, FieldHint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/field.js", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  required,
  prefix,
  suffix,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement(__ds_scope.FieldLabel, {
    htmlFor: fid,
    required: required
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      ...__ds_scope.fieldShell,
      padding: prefix || suffix ? '0 13px' : __ds_scope.fieldShell.padding,
      borderColor: error ? 'var(--rust-600)' : focus ? 'var(--border-focus)' : 'var(--border-default)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      ...style
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'inline-flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: fid,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      color: 'inherit',
      minWidth: 0,
      padding: prefix || suffix ? '11px 0' : 0
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'inline-flex'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement(__ds_scope.FieldHint, {
    error: !!error
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  placeholder,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement(__ds_scope.FieldLabel, {
    htmlFor: fid,
    required: required
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.fieldShell,
      appearance: 'none',
      paddingRight: '38px',
      cursor: 'pointer',
      borderColor: error ? 'var(--rust-600)' : focus ? 'var(--border-focus)' : 'var(--border-default)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      ...style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '13px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: '11px'
    }
  }, "\u25BC")), (hint || error) && /*#__PURE__*/React.createElement(__ds_scope.FieldHint, {
    error: !!error
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  required,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement(__ds_scope.FieldLabel, {
    htmlFor: fid,
    required: required
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({}, rest, {
    id: fid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.fieldShell,
      resize: 'vertical',
      lineHeight: 'var(--lh-normal)',
      borderColor: error ? 'var(--rust-600)' : focus ? 'var(--border-focus)' : 'var(--border-default)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      ...style
    }
  })), (hint || error) && /*#__PURE__*/React.createElement(__ds_scope.FieldHint, {
    error: !!error
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tab bar. Controlled via `value`/`onChange`, or uncontrolled with `defaultValue`. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const active = value !== undefined ? value : internal;
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)',
      ...style
    }
  }, items.map(it => {
    const v = it.value ?? it;
    const l = it.label ?? it;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        padding: '0 0 11px',
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--size-body-sm)',
        fontWeight: on ? 'var(--weight-bold)' : 'var(--weight-medium)',
        color: on ? 'var(--text-brand)' : 'var(--text-muted)',
        boxShadow: on ? 'inset 0 -3px 0 var(--surface-accent)' : 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, l, it.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--size-micro)',
        fontWeight: 'var(--weight-semibold)',
        padding: '1px 6px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--earth-200)',
        color: 'var(--text-muted)'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/JobPanel.jsx
try { (() => {
(() => {
  const {
    Card,
    Badge,
    Button,
    IconButton,
    Icon,
    Input,
    Textarea,
    Select,
    Checkbox,
    Tooltip
  } = window.DS;
  function JobPanel({
    job,
    onClose,
    onSave
  }) {
    if (!job) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 'var(--space-8)',
          color: 'var(--text-muted)',
          fontSize: 14,
          borderLeft: '1px solid var(--border-hairline)',
          width: 340,
          flex: '0 0 340px',
          background: 'var(--surface-card)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "clipboard-list",
        size: 22,
        color: "var(--earth-400)"
      }), /*#__PURE__*/React.createElement("p", {
        style: {
          marginTop: 12
        }
      }, "Pick a job to see the details, crew notes and gate codes."));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 340,
        flex: '0 0 340px',
        borderLeft: '1px solid var(--border-hairline)',
        background: 'var(--surface-card)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-6)',
        borderBottom: '1px solid var(--border-hairline)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, job.id), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--size-h3)',
        marginTop: 4
      }
    }, job.customer), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, job.addr)), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Close panel",
      variant: "ghost",
      size: "sm",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-6)',
        display: 'grid',
        gap: 'var(--space-5)',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: job.state[0],
      dot: true
    }, job.state[1]), /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, job.service)), /*#__PURE__*/React.createElement(Card, {
      variant: "sunken",
      padding: "sm"
    }, [['Window', job.window], ['Crew', job.crew], ['Price', '$' + job.price], ['Lot', '0.42 ac']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px 0',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-strong)'
      }
    }, v)))), /*#__PURE__*/React.createElement(Select, {
      label: "Assign crew",
      defaultValue: job.crew,
      options: ['Crew 1', 'Crew 2', 'Crew 3', 'Unassigned']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Gate code",
      defaultValue: "4412#",
      prefix: /*#__PURE__*/React.createElement(Icon, {
        name: "key-round",
        size: 15
      })
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "Crew notes",
      rows: 3,
      defaultValue: "Dog in the back until 8. Bag clippings, do not blow into the beds."
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Send customer a text when done",
      defaultChecked: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        padding: 'var(--space-5) var(--space-6)',
        borderTop: '1px solid var(--border-hairline)',
        background: 'var(--surface-sunken)',
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: onSave
    }, "Save job"), /*#__PURE__*/React.createElement(Tooltip, {
      content: "Call customer"
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Call customer"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone"
    })))));
  }
  Object.assign(window, {
    JobPanel
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/JobPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/Schedule.jsx
try { (() => {
(() => {
  const {
    Card,
    Badge,
    Button,
    IconButton,
    Icon,
    Tabs,
    Tag,
    Switch
  } = window.DS;
  const JOBS = [{
    id: 'JOB-4187',
    customer: 'Marla Tran',
    addr: '1420 Fair Oaks Blvd, Fair Oaks',
    service: 'Weekly mowing',
    window: '07:30 – 09:15',
    crew: 'Crew 2',
    state: ['success', 'Completed'],
    price: 52
  }, {
    id: 'JOB-4188',
    customer: 'Dev Patel',
    addr: '88 Folsom Blvd, Folsom',
    service: 'Mulch & beds',
    window: '09:30 – 12:00',
    crew: 'Crew 1',
    state: ['info', 'In route'],
    price: 476
  }, {
    id: 'JOB-4189',
    customer: 'Sunrise HOA',
    addr: 'Common area, Folsom Blvd, Rancho Cordova',
    service: 'Weekly mowing',
    window: '10:00 – 13:30',
    crew: 'Crew 3',
    state: ['info', 'Scheduled'],
    price: 340
  }, {
    id: 'JOB-4190',
    customer: 'Ana Solis',
    addr: '17 Greenback Ln, Orangevale',
    service: 'Irrigation check',
    window: '13:00 – 14:00',
    crew: 'Crew 2',
    state: ['warning', 'Weather hold'],
    price: 95
  }, {
    id: 'JOB-4191',
    customer: 'Ben Ortiz',
    addr: '3 Fair Oaks Blvd, Carmichael',
    service: 'Seasonal cleanup',
    window: '14:00 – 17:00',
    crew: 'Crew 1',
    state: ['neutral', 'Unassigned'],
    price: 260
  }];
  function Metric({
    label,
    value,
    note,
    tone
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      variant: "flat",
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 30,
        color: tone || 'var(--text-strong)',
        marginTop: 8,
        lineHeight: 1
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, note));
  }
  function JobRow({
    job,
    selected,
    onSelect
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("tr", {
      onClick: () => onSelect(job),
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        cursor: 'pointer',
        borderTop: '1px solid var(--border-hairline)',
        background: selected ? 'var(--surface-brand-soft)' : hover ? 'var(--earth-100)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 18px',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, job.id), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, job.customer), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, job.addr)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 18px',
        fontSize: 14,
        color: 'var(--text-body)'
      }
    }, job.service), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 18px',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-body)'
      }
    }, job.window), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 18px',
        fontSize: 13,
        color: 'var(--text-body)'
      }
    }, job.crew), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 18px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: job.state[0],
      size: "sm",
      dot: true
    }, job.state[1])), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 18px',
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-strong)'
      }
    }, "$", job.price));
  }
  function ScheduleView({
    selected,
    onSelect,
    onDispatch
  }) {
    const [tab, setTab] = React.useState('today');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-7) var(--space-8)',
        display: 'grid',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Metric, {
      label: "Jobs today",
      value: "6",
      note: "1 unassigned"
    }), /*#__PURE__*/React.createElement(Metric, {
      label: "Crews out",
      value: "3",
      note: "6 of 6 on the clock"
    }), /*#__PURE__*/React.createElement(Metric, {
      label: "Booked today",
      value: "$1,223",
      note: "+$260 vs last Tuesday",
      tone: "var(--green-700)"
    }), /*#__PURE__*/React.createElement(Metric, {
      label: "Weather",
      value: "Rain 2pm",
      note: "1 job on hold",
      tone: "var(--clay-700)"
    })), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: 'today',
        label: 'Today',
        count: 6
      }, {
        value: 'week',
        label: 'This week',
        count: 31
      }, {
        value: 'unassigned',
        label: 'Unassigned',
        count: 1
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      selected: true,
      onClick: () => {}
    }, "All crews"), /*#__PURE__*/React.createElement(Tag, {
      onClick: () => {}
    }, "Crew 1"), /*#__PURE__*/React.createElement(Tag, {
      onClick: () => {}
    }, "Crew 2"), /*#__PURE__*/React.createElement(Tag, {
      onClick: () => {}
    }, "Crew 3"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      label: "Show completed",
      defaultChecked: true
    }))), /*#__PURE__*/React.createElement(Card, {
      variant: "flat",
      padding: "none"
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        background: 'var(--surface-sunken)'
      }
    }, ['Job', 'Customer', 'Service', 'Window', 'Crew', 'Status', 'Price'].map((h, i) => /*#__PURE__*/React.createElement("th", {
      key: h,
      style: {
        textAlign: i === 6 ? 'right' : 'left',
        padding: '11px 18px',
        fontFamily: 'var(--font-ui)',
        fontSize: 10,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        fontWeight: 700
      }
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, JOBS.map(j => /*#__PURE__*/React.createElement(JobRow, {
      key: j.id,
      job: j,
      selected: selected && selected.id === j.id,
      onSelect: onSelect
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "send",
        size: 16
      }),
      onClick: onDispatch
    }, "Dispatch tomorrow's routes"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      })
    }, "Add job")));
  }
  Object.assign(window, {
    ScheduleView,
    JOBS,
    Metric
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/Schedule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/Shell.jsx
try { (() => {
(() => {
  const {
    Icon,
    IconButton,
    Badge,
    Button,
    Tooltip
  } = window.DS;
  const NAV = [['schedule', 'Schedule', 'calendar-days'], ['jobs', 'Jobs', 'clipboard-list'], ['quotes', 'Quotes', 'file-text'], ['crews', 'Crews', 'users'], ['customers', 'Customers', 'contact'], ['invoices', 'Invoices', 'receipt']];
  function OpsSidebar({
    view,
    setView
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 232,
        flex: '0 0 232px',
        background: 'var(--surface-inverse)',
        color: 'var(--text-on-dark)',
        display: 'flex',
        flexDirection: 'column',
        padding: 'var(--space-6) var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--space-3) var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 15,
        letterSpacing: '-.01em',
        color: 'var(--earth-50)'
      }
    }, "JORDON NUNO"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '.18em',
        color: 'var(--clay-400)',
        marginTop: 3
      }
    }, "CREW DISPATCH")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, NAV.map(([k, l, ic]) => {
      const on = k === view;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        onClick: () => setView(k),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          padding: '10px 12px',
          border: 0,
          cursor: 'pointer',
          borderRadius: 'var(--radius-sm)',
          textAlign: 'left',
          background: on ? 'rgba(240,245,232,.12)' : 'transparent',
          color: on ? 'var(--earth-50)' : 'rgba(240,245,232,.72)',
          fontFamily: 'var(--font-ui)',
          fontSize: 14,
          fontWeight: on ? 700 : 500,
          boxShadow: on ? 'inset 2px 0 0 var(--clay-500)' : 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: ic,
        size: 17
      }), l);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        padding: 'var(--space-5) var(--space-3)',
        borderTop: '1px solid rgba(240,245,232,.16)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--clay-600)',
        color: 'var(--earth-950)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 12
      }
    }, "JN"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--earth-50)'
      }
    }, "Jordon Nuno"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-on-dark-muted)'
      }
    }, "Owner")))));
  }
  function OpsTopbar({
    title,
    subtitle,
    actions
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        padding: 'var(--space-6) var(--space-8)',
        borderBottom: '1px solid var(--border-hairline)',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--size-h2)'
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, subtitle)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Tooltip, {
      content: "Search jobs"
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Search",
      variant: "ghost"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search"
    }))), /*#__PURE__*/React.createElement(Tooltip, {
      content: "Weather"
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Weather",
      variant: "ghost"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cloud-sun"
    }))), actions));
  }
  Object.assign(window, {
    OpsSidebar,
    OpsTopbar,
    NAV
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
(() => {
  const {
    Button,
    IconButton,
    Icon
  } = window.DS;
  function Wordmark({
    dark
  }) {
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        textDecoration: 'none',
        display: 'block',
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 19,
        letterSpacing: '-.02em',
        color: dark ? 'var(--earth-50)' : 'var(--text-strong)'
      }
    }, "JORDON NUNO"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '.2em',
        color: dark ? 'var(--clay-400)' : 'var(--text-muted)',
        marginTop: 3
      }
    }, "LANDSCAPING & LAWNCARE"));
  }
  function SiteHeader({
    onQuote,
    onPay,
    page,
    setPage
  }) {
    const links = [['services', 'Services'], ['work', 'Our work'], ['pricing', 'Pricing'], ['about', 'About']];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'rgba(248,246,239,.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--gutter-page-lg)',
        height: 76,
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-9)'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 'var(--space-7)',
        marginLeft: 'auto'
      }
    }, links.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
      key: k,
      href: "#",
      onClick: e => {
        e.preventDefault();
        setPage(k);
      },
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
        color: page === k ? 'var(--text-brand)' : 'var(--text-body)'
      }
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "tel:5550142",
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 14,
        color: 'var(--text-body)',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15
    }), "(555) 014-2200"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onPay
    }, "Pay a bill"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: onQuote
    }, "Get a free quote"))));
  }
  function SiteFooter() {
    const cols = [['Services', ['Weekly mowing', 'Seasonal cleanup', 'Mulch install', 'Irrigation checks']], ['Company', ['About the crew', 'Service area', 'Careers', 'Contact']], ['Details', ['Licensed & insured', 'Pricing', 'Pay a bill', 'Privacy']]];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--surface-inverse)',
        color: 'var(--text-on-dark)',
        padding: 'var(--space-12) 0 var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--gutter-page-lg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 'var(--space-9)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
      dark: true
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-5)',
        fontSize: 14,
        color: 'var(--text-on-dark-muted)',
        maxWidth: 260
      }
    }, "Family-run since 2011. Serving Roseville, Folsom and the Greater Sacramento area.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
      key: h
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--clay-400)'
      }
    }, h), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        marginTop: 'var(--space-5)'
      }
    }, items.map(i => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      style: {
        fontSize: 14,
        color: 'var(--text-on-dark)',
        textDecoration: 'none',
        opacity: .85
      }
    }, i)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-11)',
        paddingTop: 'var(--space-6)',
        borderTop: '1px solid rgba(240,245,232,.16)',
        display: 'flex',
        gap: 'var(--space-5)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-on-dark-muted)'
      }
    }, "\xA9 2026 Jordon Nuno Landscaping & Lawncare, LLC"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Facebook",
      variant: "inverse",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "facebook",
      size: 16
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Instagram",
      variant: "inverse",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "instagram",
      size: 16
    }))))));
  }
  Object.assign(window, {
    Wordmark,
    SiteHeader,
    SiteFooter
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PayFlow.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Input,
    Icon,
    Badge,
    Dialog,
    Tag
  } = window.DS;
  const METHODS = [{
    id: 'paypal',
    name: 'PayPal',
    note: 'Card or PayPal balance',
    fg: '#ffffff',
    bg: '#003087',
    accent: '#009cde',
    handle: 'billing@jordonnuno.com',
    action: 'Continue to PayPal'
  }, {
    id: 'venmo',
    name: 'Venmo',
    note: 'Bank-linked, no fee',
    fg: '#ffffff',
    bg: '#008CFF',
    accent: '#008CFF',
    handle: '@jordon-nuno-landscaping',
    action: 'Open Venmo'
  }, {
    id: 'cashapp',
    name: 'Cash App',
    note: 'Instant to our account',
    fg: '#ffffff',
    bg: '#00D64F',
    accent: '#00D64F',
    handle: '$JordonNunoLawn',
    action: 'Open Cash App'
  }];
  function MethodMark({
    m,
    size = 40
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        borderRadius: 'var(--radius-md)',
        background: m.bg,
        color: m.fg,
        display: 'grid',
        placeItems: 'center',
        flex: 'none',
        fontFamily: 'var(--font-ui)',
        fontWeight: 800,
        fontSize: size * 0.42,
        letterSpacing: '-.02em'
      }
    }, m.id === 'cashapp' ? '$' : m.name[0]);
  }
  function MethodRow({
    m,
    selected,
    onSelect
  }) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onSelect(m.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        padding: 'var(--space-4)',
        borderRadius: 'var(--radius-md)',
        background: selected ? 'var(--surface-sunken)' : 'var(--surface-card)',
        border: selected ? '2px solid var(--text-brand)' : '1px solid var(--border-default)',
        font: 'inherit'
      }
    }, /*#__PURE__*/React.createElement(MethodMark, {
      m: m
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--text-strong)'
      }
    }, m.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, m.note)), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        color: selected ? 'var(--text-brand)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: selected ? 'check-circle-2' : 'circle',
      size: 20
    })));
  }
  function PayDialog({
    open,
    onClose,
    onPaid,
    invoice
  }) {
    const [step, setStep] = React.useState(1);
    const [method, setMethod] = React.useState('paypal');
    const [ref, setRef] = React.useState(invoice || '');
    const m = METHODS.find(x => x.id === method);
    const close = () => {
      onClose();
      setStep(1);
    };
    const amount = '$168.00';
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      width: 520,
      title: step === 1 ? 'Pay your invoice' : `Pay with ${m.name}`,
      description: step === 1 ? 'No account needed. Enter the invoice number from your emailed statement.' : 'Send the exact amount and include your invoice number in the note.',
      onClose: close,
      footer: step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: close
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => setStep(2),
        disabled: !ref
      }, "Continue")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setStep(1)
      }, "Back"), /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        onClick: () => {
          onPaid(m.name);
          close();
        }
      }, m.action))
    }, step === 1 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Invoice number",
      required: true,
      placeholder: "INV-4021",
      value: ref,
      onChange: e => setRef(e.target.value),
      prefix: /*#__PURE__*/React.createElement(Icon, {
        name: "hash",
        size: 16
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        padding: 'var(--space-4) var(--space-5)',
        background: 'var(--surface-sunken)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Balance due"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 24,
        color: 'var(--text-strong)'
      }
    }, amount)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-3)'
      }
    }, METHODS.map(x => /*#__PURE__*/React.createElement(MethodRow, {
      key: x.id,
      m: x,
      selected: method === x.id,
      onSelect: setMethod
    })))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(MethodMark, {
      m: m,
      size: 52
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 15,
        color: 'var(--text-strong)'
      }
    }, m.handle), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Verified business account")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 22,
        color: 'var(--text-strong)'
      }
    }, amount), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "Invoice ", ref))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-3)',
        padding: 'var(--space-5)',
        background: 'var(--surface-sunken)',
        borderRadius: 'var(--radius-md)'
      }
    }, [['1', `Tap "${m.action}" below — we hand you off to the ${m.name} app.`], ['2', `Confirm the amount reads ${amount}.`], ['3', `Put "${ref || 'INV-0000'}" in the note so we can match the payment.`]].map(([n, t]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: 999,
        background: 'var(--text-brand)',
        color: 'var(--text-on-dark)',
        display: 'grid',
        placeItems: 'center',
        flex: 'none',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        marginTop: 1
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--text-body)'
      }
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 16
    }), "We never see or store your card or bank details.")));
  }
  function PayBill({
    onPay
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 'var(--space-10)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Payments"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: 'var(--space-4)',
        marginBottom: 'var(--space-5)',
        fontSize: 'var(--size-h1)'
      }
    }, "Pay your invoice online"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--size-body-lg)',
        color: 'var(--text-body)',
        maxWidth: 460,
        marginBottom: 'var(--space-7)'
      }
    }, "Every statement goes out by email with an invoice number. Pay it with PayPal, Venmo or Cash App \u2014 whichever you already use. Checks and cash are still welcome at the door."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: onPay
    }, "Pay an invoice"), /*#__PURE__*/React.createElement(Tag, null, "Due on receipt"), /*#__PURE__*/React.createElement(Tag, null, "No processing fee"))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        display: 'grid',
        gap: 'var(--space-3)'
      }
    }, METHODS.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: 'var(--space-3) 0',
        borderTop: m.id === 'paypal' ? 'none' : '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(MethodMark, {
      m: m,
      size: 44
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--text-strong)'
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, m.handle)), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm",
      style: {
        marginLeft: 'auto'
      }
    }, m.id === 'paypal' ? 'Cards ok' : 'Instant')))));
  }
  Object.assign(window, {
    PayDialog,
    PayBill,
    PAY_METHODS: METHODS
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PayFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/QuoteFlow.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Input,
    Select,
    Textarea,
    Checkbox,
    Switch,
    Dialog,
    Toast,
    Icon,
    Badge
  } = window.DS;
  function QuoteDialog({
    open,
    onClose,
    onSent
  }) {
    const [step, setStep] = React.useState(1);
    const [service, setService] = React.useState('');
    const close = () => {
      onClose();
      setStep(1);
    };
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      width: 540,
      title: step === 1 ? 'Get a free quote' : 'Where and when',
      description: step === 1 ? 'Two minutes. We reply the same day with a written price.' : 'We walk the property before quoting anything over a quarter acre.',
      onClose: close,
      footer: step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: close
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => setStep(2),
        disabled: !service
      }, "Continue")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setStep(1)
      }, "Back"), /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        onClick: () => {
          onSent();
          close();
        }
      }, "Send request"))
    }, step === 1 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "What do you need?",
      required: true,
      placeholder: "Choose a service",
      value: service,
      onChange: e => setService(e.target.value),
      options: ['Weekly mowing', 'Seasonal cleanup', 'Mulch & beds', 'Irrigation check', 'Something else']
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "Anything we should know?",
      rows: 3,
      placeholder: "Quarter acre, back gate is unlocked, dog in the yard until 8."
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "This is a recurring visit",
      description: "April through October",
      defaultChecked: true
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      required: true,
      placeholder: "Marla Tran"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Property address",
      required: true,
      placeholder: "1420 Fair Oaks Blvd, Fair Oaks",
      prefix: /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin",
        size: 16
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      placeholder: "(555) 208-1140",
      prefix: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 16
      })
    })), /*#__PURE__*/React.createElement(Switch, {
      label: "Text me the day before each visit",
      defaultChecked: true
    })));
  }
  function PricingTable({
    onQuote
  }) {
    const rows = [['Standard lot', 'up to 1/4 acre', '$45', '$52'], ['Large lot', '1/4 – 1/2 acre', '$62', '$74'], ['Acre plus', 'over 1/2 acre', 'Quoted', 'Quoted']];
    return /*#__PURE__*/React.createElement(Card, {
      variant: "flat",
      padding: "none",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        background: 'var(--surface-sunken)'
      }
    }, ['Property', 'Size', 'Weekly', 'Every other week', ''].map(h => /*#__PURE__*/React.createElement("th", {
      key: h,
      style: {
        textAlign: 'left',
        padding: '13px 20px',
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        fontWeight: 700
      }
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(([p, s, w, b], i) => /*#__PURE__*/React.createElement("tr", {
      key: p,
      style: {
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px 20px',
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, p, i === 0 && /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      size: "sm",
      style: {
        marginLeft: 8
      }
    }, "Most common")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px 20px',
        color: 'var(--text-muted)'
      }
    }, s), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px 20px',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-strong)'
      }
    }, w), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px 20px',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-strong)'
      }
    }, b), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px 20px',
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: onQuote
    }, "Get quote")))))));
  }
  Object.assign(window, {
    QuoteDialog,
    PricingTable
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/QuoteFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Icon
  } = window.DS;

  /** Honest placeholder standing in for a real photo — no photography was supplied. */
  function PhotoSlot({
    label,
    height = '100%',
    radius = 'var(--radius-md)'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height,
        borderRadius: radius,
        overflow: 'hidden',
        background: 'linear-gradient(135deg,var(--green-500),var(--green-800))'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--scrim-image)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 14,
        bottom: 12,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--earth-50)',
        opacity: .8
      }
    }, label));
  }
  function Eyebrow({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, children);
  }
  function Section({
    children,
    tone = 'page',
    pad = 'var(--section-y)'
  }) {
    const bg = tone === 'inverse' ? 'var(--surface-inverse)' : tone === 'card' ? 'var(--surface-card)' : 'var(--surface-page)';
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: bg,
        padding: pad + ' 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--gutter-page-lg)'
      }
    }, children));
  }
  function Hero({
    onQuote
  }) {
    return /*#__PURE__*/React.createElement(Section, {
      pad: "var(--space-13)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.05fr .95fr',
        gap: 'var(--space-11)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Serving Greater Sacramento since 2011"), /*#__PURE__*/React.createElement("hr", {
      className: "jn-rule",
      style: {
        margin: '16px 0 20px'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'var(--size-display-2)',
        lineHeight: 'var(--lh-tight)',
        letterSpacing: 'var(--tracking-display)'
      }
    }, "A yard you don't have to think about."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-6)',
        fontSize: 'var(--size-body-lg)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-body)',
        maxWidth: 480
      }
    }, "Mowing, cleanups, mulch and irrigation. Same crew every visit, a text the day before, and a price we quote up front."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-4)',
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: onQuote,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      })
    }, "Get a free quote"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg"
    }, "See pricing")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-7)',
        marginTop: 'var(--space-9)'
      }
    }, [['Licensed & insured', 'shield-check'], ['Weekly routes', 'calendar-days'], ['Local crew of 6', 'users']].map(([t, ic]) => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 17,
      color: "var(--green-600)"
    }), t)))), /*#__PURE__*/React.createElement(PhotoSlot, {
      label: "photo: crew mowing a front lawn, morning light",
      height: 440
    })));
  }
  const SERVICES = [['Weekly mowing', 'scissors', 'Cut, trim, edge, and blow off the walks. Weekly or every other week.', 'From $45 / visit'], ['Seasonal cleanup', 'leaf', 'Spring and fall. Beds cleared, leaves hauled, gutters at the roofline.', 'From $220'], ['Mulch & beds', 'sprout', 'Hardwood or cedar, edged clean, three inches deep.', '$68 / yard installed'], ['Irrigation checks', 'droplets', 'Startup, shutdown, head adjustment and leak repair.', 'From $95']];
  function Services({
    onQuote
  }) {
    return /*#__PURE__*/React.createElement(Section, {
      tone: "card"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: 'var(--space-4)',
        fontSize: 'var(--size-h1)'
      }
    }, "Four services, done right")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      selected: true
    }, "Residential"), /*#__PURE__*/React.createElement(Tag, null, "Commercial"), /*#__PURE__*/React.createElement(Tag, null, "HOA"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 'var(--space-5)',
        marginTop: 'var(--space-8)'
      }
    }, SERVICES.map(([title, icon, body, price]) => /*#__PURE__*/React.createElement(Card, {
      key: title,
      variant: "raised",
      accentTop: true,
      interactive: true,
      onClick: onQuote
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 22,
      color: "var(--green-600)"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--size-h3)',
        marginTop: 'var(--space-5)'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 'var(--space-4)',
        lineHeight: 'var(--lh-normal)'
      }
    }, body), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-6)',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-strong)'
      }
    }, price)))));
  }
  function Process() {
    const steps = [['Walk the property', 'We measure, look at the beds, and note the gates.'], ['Get a written price', 'One page, no upsells, good for 30 days.'], ['We show up', 'Same crew, same day of the week, text the night before.']];
    return /*#__PURE__*/React.createElement(Section, {
      tone: "inverse",
      pad: "var(--space-12)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '.8fr 1.2fr',
        gap: 'var(--space-11)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--clay-400)'
      }
    }, "How it works")), /*#__PURE__*/React.createElement("h2", {
      style: {
        color: 'var(--text-on-dark)',
        marginTop: 'var(--space-4)',
        fontSize: 'var(--size-h1)'
      }
    }, "Three steps, no surprises")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-7)'
      }
    }, steps.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 'var(--space-6)',
        paddingBottom: 'var(--space-7)',
        borderBottom: i < 2 ? '1px solid rgba(240,245,232,.16)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--clay-400)',
        paddingTop: 4
      }
    }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        color: 'var(--text-on-dark)',
        fontSize: 'var(--size-h3)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-on-dark-muted)',
        fontSize: 15,
        marginTop: 6
      }
    }, b)))))));
  }
  function Work() {
    return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Recent work"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: 'var(--space-4)',
        fontSize: 'var(--size-h1)'
      }
    }, "Yards around Greater Sacramento"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: 'var(--space-5)',
        marginTop: 'var(--space-8)',
        height: 300
      }
    }, /*#__PURE__*/React.createElement(PhotoSlot, {
      label: "photo: fresh mulch bed, brick walk"
    }), /*#__PURE__*/React.createElement(PhotoSlot, {
      label: "photo: striped back lawn"
    }), /*#__PURE__*/React.createElement(PhotoSlot, {
      label: "photo: fall cleanup, leaf pile"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-5)',
        marginTop: 'var(--space-5)'
      }
    }, [['Marla T., Fair Oaks', 'They quoted $52 a week and it has been $52 a week for two years. Gate always latched.'], ['Dev P., Folsom', 'Fall cleanup took one morning. The beds looked better than when we moved in.']].map(([who, quote]) => /*#__PURE__*/React.createElement(Card, {
      key: who,
      variant: "flat",
      padding: "lg"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        lineHeight: 1.35,
        color: 'var(--text-strong)'
      }
    }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)',
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      size: "sm",
      dot: true
    }, "Verified customer"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, who))))));
  }
  function ServiceArea() {
    const towns = ['Rancho Cordova', 'Orangevale', 'Fair Oaks', 'Carmichael', 'Folsom'];
    return /*#__PURE__*/React.createElement(Section, {
      tone: "card",
      pad: "var(--section-y-sm)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-9)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 20,
      color: "var(--green-600)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--text-strong)'
      }
    }, "Service area")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, towns.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "Not listed? Call and ask.")));
  }
  Object.assign(window, {
    PhotoSlot,
    Eyebrow,
    Section,
    Hero,
    Services,
    Process,
    Work,
    ServiceArea
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.FieldLabel = __ds_scope.FieldLabel;

__ds_ns.FieldHint = __ds_scope.FieldHint;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
