import * as React from 'react';
/** Icon-only square control; `label` is required for accessibility. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
