import React from 'react';
declare type UikWidgetContentProps = {
    children?: React.ReactNode;
    className?: string;
    grey?: boolean;
};
declare const UikWidgetContent: ({ children, className, grey, ...rest }: UikWidgetContentProps) => JSX.Element;
export default UikWidgetContent;
