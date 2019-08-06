import React from 'react';
declare type UikAvatarImageProps = {
    className?: string;
    name?: React.ReactNode;
    imgUrl: string | Array<string>;
};
declare const UikAvatarImage: {
    ({ imgUrl, name }: UikAvatarImageProps): JSX.Element;
    defaultProps: {
        name: null;
    };
};
export default UikAvatarImage;
