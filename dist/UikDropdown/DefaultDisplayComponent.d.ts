/// <reference types="react" />
interface DefaultDisplayComponentProps {
    className?: string;
    title?: string;
    onClick: () => void;
}
declare const DefaultDisplayComponent: ({ className, title, ...rest }: DefaultDisplayComponentProps) => JSX.Element;
export default DefaultDisplayComponent;
