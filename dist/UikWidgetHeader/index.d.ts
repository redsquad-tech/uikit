import React from 'react';
interface UikWidgetHeaderProps {
    children: React.ReactNode;
    className?: string;
    noDivider?: boolean;
    rightEl?: React.ReactNode;
}
declare const UikWidgetHeader: ({ children, className, noDivider, rightEl, ...rest }: UikWidgetHeaderProps) => JSX.Element;
export default UikWidgetHeader;
