import React from 'react';
declare type UikNavUserProps = {
    children?: React.ReactNode;
    className?: string;
    Component?: React.ElementType;
    name?: React.ReactNode;
    imgUrl?: string;
    textTop?: React.ReactNode;
};
declare const UikNavUser: {
    ({ children, className, name, imgUrl, textTop, ...rest }: UikNavUserProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
        name: null;
        imgUrl: null;
        textTop: null;
    };
};
export default UikNavUser;
