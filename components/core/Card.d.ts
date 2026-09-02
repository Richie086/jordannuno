import * as React from 'react';
/** Container surface for panels, service cards and dark feature blocks. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: 'flat' | 'raised' | 'sunken' | 'inverse';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** 3px clay rule across the top edge */
  accentTop?: boolean;
  /** Lift + shadow on hover */
  interactive?: boolean;
}
export declare function Card(props: CardProps): JSX.Element;
