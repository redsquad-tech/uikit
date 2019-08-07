import React from 'react';
declare type UikTopBarLinkContainerProps = {
    className?: string;
    children?: React.ReactNode;
    Component: React.ElementType;
};
declare const UikTopBarLinkContainer: {
    ({ children, className, Component, ...rest }: UikTopBarLinkContainerProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
    };
};
export default UikTopBarLinkContainer;
