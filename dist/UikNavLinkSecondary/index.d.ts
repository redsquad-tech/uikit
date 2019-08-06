import React from 'react';
declare type UikNavLinkProps = {
    className?: string;
    children?: React.ReactNode;
    rightEl?: React.ReactNode;
    highlighted?: boolean;
    disabled?: boolean;
    onClick?: () => void;
};
declare const UikNavLink: {
    ({ rightEl, children, className, highlighted, ...rest }: UikNavLinkProps): JSX.Element;
    defaultProps: {
        className: null;
        rightEl: null;
        highlighted: boolean;
        children: null;
    };
};
export default UikNavLink;
