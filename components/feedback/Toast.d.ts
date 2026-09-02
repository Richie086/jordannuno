import * as React from 'react';
/** Inline confirmation strip. */
export interface ToastProps {
  message?: React.ReactNode;
  tone?: 'success' | 'warning' | 'danger' | 'neutral';
  icon?: React.ReactNode;
  action?: React.ReactNode;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
