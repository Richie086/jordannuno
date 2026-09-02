import * as React from 'react';
/** Multi-line field for job notes and quote requests. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  rows?: number;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
