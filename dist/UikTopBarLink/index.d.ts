import React from 'react';
declare type UikTopBarLinkProps = {
    className?: string;
    children: React.ReactNode;
};
declare const UikTopBarLink: {
    ({ children, className, ...rest }: UikTopBarLinkProps): JSX.Element;
    defaultProps: {
        className: null;
    };
};
export default UikTopBarLink;
