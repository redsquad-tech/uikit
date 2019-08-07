import * as React from 'react';
declare type UikTopBarProps = {
    center?: Boolean;
    className?: string;
    children?: React.ReactNode;
};
declare const UikTopBar: {
    ({ children, className, center, ...rest }: UikTopBarProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
        center: boolean;
    };
};
export default UikTopBar;
