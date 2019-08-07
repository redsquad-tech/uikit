/// <reference types="react" />
declare type UikDividerProps = {
    className?: string;
    direction?: 'vertical' | 'horizontal';
    margin?: boolean;
    vertical?: boolean;
};
declare const UikDivider: {
    ({ className, direction, vertical, margin, ...rest }: UikDividerProps): JSX.Element;
    defaultProps: {
        className: null;
        direction: string;
        margin: boolean;
        vertical: boolean;
    };
};
export default UikDivider;
