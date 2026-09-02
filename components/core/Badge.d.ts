import * as React from 'react';
/** Status chip — the only pill-shaped element in the system. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'brand';
  size?: 'sm' | 'md';
  /** Leading status dot */
  dot?: boolean;
}
export declare function Badge(props: BadgeProps): JSX.Element;
