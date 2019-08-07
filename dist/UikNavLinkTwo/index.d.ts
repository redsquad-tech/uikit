import React from 'react';
declare type UikNavLinkTwoProps = {
    className?: string;
    children?: React.ReactNode;
    rightEl?: React.ReactNode;
    highlighted?: boolean;
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    Component?: React.ElementType;
};
declare const UikNavLinkTwo: {
    ({ rightEl, children, className, highlighted, icon, onClick, ...rest }: UikNavLinkTwoProps): JSX.Element;
    defaultProps: {
        className: null;
        rightEl: null;
        highlighted: boolean;
        icon: null;
        children: null;
    };
};
export default UikNavLinkTwo;
