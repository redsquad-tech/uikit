import React from 'react';
export interface UikNavLinkProps {
    className?: string;
    children?: React.ReactNode;
    rightEl?: React.ReactNode;
    highlighted?: boolean;
    icon?: React.ReactNode;
    to?: string;
    disabled?: boolean;
    onClick?: () => void;
    Component: React.ElementType;
}
declare const UikNavLink: {
    ({ rightEl, children, className, highlighted, icon, disabled, Component, ...rest }: UikNavLinkProps): JSX.Element;
    defaultProps: {
        className: null;
        rightEl: null;
        highlighted: boolean;
        icon: null;
        children: null;
    };
};
export default UikNavLink;
