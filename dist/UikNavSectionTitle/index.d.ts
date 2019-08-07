import React from 'react';
declare type UikNavSectionTitleProps = {
    children?: React.ReactNode;
    className?: string;
};
declare const UikSectionName: {
    ({ children, className, ...rest }: UikNavSectionTitleProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
    };
};
export default UikSectionName;
