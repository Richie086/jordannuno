import * as React from 'react';
/**
 * Primary call-to-action control. Square-ish (5px radius), never pill-shaped.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** primary = green fill (default action), accent = clay fill (booking/urgent), secondary = outlined, ghost = text only, inverse = on dark sections */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  /** Renders an <a> instead of a <button> */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
export declare function Button(props: ButtonProps): JSX.Element;
