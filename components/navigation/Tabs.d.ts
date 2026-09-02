import * as React from 'react';
/** Underline tab bar with a clay active rule. */
export interface TabItem { value: string; label: string; count?: number }
export interface TabsProps {
  items?: Array<string | TabItem>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
