import React from 'react';
declare type UikTopBarTitleProps = {
    children?: React.ReactNode;
    className?: string;
    Component: React.ElementType;
    large?: Boolean;
};
declare const UikTopBarTitle: {
    ({ children, className, Component, large, ...rest }: UikTopBarTitleProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
        large: boolean;
        Component: string;
    };
};
export default UikTopBarTitle;
