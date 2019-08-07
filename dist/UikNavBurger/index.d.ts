/// <reference types="react" />
declare type UikNavBurgerType = {
    className?: String;
    isOpen?: Boolean;
    [key: string]: any;
};
declare const UikNavBurger: {
    ({ className, isOpen, ...rest }: UikNavBurgerType): JSX.Element;
    defaultProps: {
        className: null;
        isOpen: boolean;
    };
};
export default UikNavBurger;
