import * as React from 'react';
declare type UikNavPanelProps = {
    children?: React.ReactNode;
    className?: string;
    positionRight?: boolean;
};
declare const UikNavPanel: {
    ({ children, className, positionRight, ...rest }: UikNavPanelProps): JSX.Element;
    defaultProps: {
        className: null;
        positionRight: boolean;
        children: null;
    };
};
export default UikNavPanel;
