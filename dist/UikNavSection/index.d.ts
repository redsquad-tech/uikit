import * as React from 'react';
declare type UikNavSectionProps = {
    children?: React.ReactNode;
    className?: string;
};
declare const UikNavSection: {
    ({ children, className, ...rest }: UikNavSectionProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
    };
};
export default UikNavSection;
