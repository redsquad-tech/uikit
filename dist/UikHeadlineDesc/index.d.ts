import React from 'react';
declare type UikHeadlineDescProps = {
    className?: string;
    children: React.ReactNode;
};
declare const UikHeadline: {
    ({ children, className, ...rest }: UikHeadlineDescProps): JSX.Element;
    defaultProps: {
        className: null;
    };
};
export default UikHeadline;
