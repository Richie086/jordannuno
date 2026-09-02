import * as React from 'react';
/** Hover/focus label wrapping a single child. */
export interface TooltipProps {
  content?: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
