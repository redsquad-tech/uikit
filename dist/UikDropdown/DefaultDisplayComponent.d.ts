/// <reference types="react" />
interface DefaultDisplayComponentProps {
    className?: string;
    onClick: () => void;
}
declare const DefaultDisplayComponent: ({ className, ...rest }: DefaultDisplayComponentProps) => JSX.Element;
export default DefaultDisplayComponent;
