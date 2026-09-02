import * as React from 'react';
/** Radio option, plus a RadioGroup wrapper that supplies the legend and spacing. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
}
export declare function Radio(props: RadioProps): JSX.Element;
export interface RadioGroupProps {
  label?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
