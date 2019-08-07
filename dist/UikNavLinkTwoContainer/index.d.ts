import React from 'react';
declare type UikNavLinkTwoContainerProps = {
    children?: React.ReactNode;
    className?: string;
    positionRight?: boolean;
};
declare const UikNavLinkTwoContainer: {
    ({ children, className, positionRight, ...rest }: UikNavLinkTwoContainerProps): JSX.Element;
    defaultProps: {
        className: null;
        positionRight: boolean;
        children: null;
    };
};
export default UikNavLinkTwoContainer;
