import React from 'react';
declare type UikWidgetProps = {
    className?: string;
    children?: React.ReactNode;
    padding?: boolean;
    margin?: boolean;
    disabled?: boolean;
};
declare const UikWidget: {
    ({ children, className, padding, margin, disabled, ...rest }: UikWidgetProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
        padding: boolean;
        margin: boolean;
    };
};
export default UikWidget;
