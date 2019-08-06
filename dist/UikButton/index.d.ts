import React from 'react';
interface UikButtonProps {
    children?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    href?: string;
    xs?: boolean;
    lg?: boolean;
    primary?: boolean;
    error?: boolean;
    success?: boolean;
    transparent?: boolean;
    clear?: boolean;
    isLoading?: boolean;
    icon?: React.ReactNode;
    iconRight?: boolean;
    iconOnly?: boolean;
    noBorder?: boolean;
    dark?: boolean;
    isExpanded?: boolean;
    disabled?: boolean;
    to?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
declare const _default: (props: UikButtonProps) => JSX.Element;
export default _default;
