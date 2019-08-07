import React from 'react';
declare type UikAvatarPlaceholderProps = {
    content?: React.ReactNode;
    color?: 'green' | 'blue' | 'orange' | 'violet' | 'red';
};
export declare type UikAvatarProps = {
    className?: string;
    name?: React.ReactNode;
    status?: React.ReactNode;
    imgUrl?: string | Array<string>;
    textTop?: string;
    avatarPlaceholder?: UikAvatarPlaceholderProps;
    highlighted?: Boolean;
    textBottom?: React.ReactNode;
    actionIcon?: React.ReactNode;
    size?: 'small' | 'large' | 'larger' | 'extraLarge' | 'jumbo';
};
declare const UikAvatar: {
    ({ name, imgUrl, avatarPlaceholder, textTop, className, highlighted, actionIcon, status, size, textBottom, ...rest }: UikAvatarProps): JSX.Element;
    defaultProps: {
        className: null;
        name: null;
        textTop: null;
        actionIcon: null;
        highlighted: boolean;
        avatarPlaceholder: {};
        status: null;
        imgUrl: null;
        size: null;
        textBottom: null;
    };
};
export default UikAvatar;
