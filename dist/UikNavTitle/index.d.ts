import React from 'react';
declare type UikNavTitleProps = {
    children?: React.ReactNode;
    className?: string;
};
declare const UikNavTitle: {
    ({ children, className, ...rest }: UikNavTitleProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
    };
};
export default UikNavTitle;
