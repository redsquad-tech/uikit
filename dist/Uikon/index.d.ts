import React from 'react';
import './uikon.scss';
declare type UikonProps = {
    className?: string;
    children?: React.ReactNode;
    color?: 'green' | 'blue' | 'orange' | 'violet' | 'red';
};
declare const Uikon: {
    ({ children, className, color, ...rest }: UikonProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
        color: null;
    };
};
export default Uikon;
