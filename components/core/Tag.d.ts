import * as React from 'react';
/** Squared keyword tag for service categories and filters. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  selected?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
}
export declare function Tag(props: TagProps): JSX.Element;
