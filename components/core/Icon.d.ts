import * as React from 'react';
/** Lucide glyph wrapper. Requires the Lucide CDN script on the host page. */
export interface IconProps {
  /** Lucide icon name, kebab-case, e.g. 'leaf', 'truck', 'calendar-days' */
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
