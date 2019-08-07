import React from 'react';
declare type UikHeadlineProps = {
    className?: string;
    children: React.ReactNode;
};
declare const UikHeadline: {
    ({ children, className, ...rest }: UikHeadlineProps): JSX.Element;
    defaultProps: {
        className: null;
    };
};
export default UikHeadline;
