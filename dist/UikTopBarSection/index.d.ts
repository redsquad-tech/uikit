import * as React from 'react';
interface UikTopBarSectionProps {
    children?: React.ReactNode;
    className?: string;
    Component?: React.ElementType;
    [key: string]: any;
}
declare const UikTopBarSection: {
    ({ children, className, Component, ...rest }: UikTopBarSectionProps): JSX.Element | null;
    defaultProps: {
        className: null;
        children: null;
        Component: string;
    };
};
export default UikTopBarSection;
