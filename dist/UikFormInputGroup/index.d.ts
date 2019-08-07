import React from 'react';
interface UikFormInputGroupProps {
    className?: string;
    children: React.ReactNode;
    direction?: 'vertical' | 'horizontal';
    horizontal?: boolean;
}
declare const UikFormInputGroup: ({ children, className, direction, horizontal, ...rest }: UikFormInputGroupProps) => JSX.Element;
export default UikFormInputGroup;
