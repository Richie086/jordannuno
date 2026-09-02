import * as React from 'react';
/** Native select with brand chrome. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  options?: Array<string | { value: string; label: string }>;
  placeholder?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
