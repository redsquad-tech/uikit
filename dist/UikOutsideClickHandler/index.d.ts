import * as React from 'react';
interface UikOutsideClickHandlerProps {
    children?: React.ReactNode;
    onOutsideClick: (e: Event) => void;
    onOutsideScroll?: boolean;
    onWindowResize?: boolean;
}
export default class UikOutsideClickHandler extends React.Component<UikOutsideClickHandlerProps & React.HTMLAttributes<HTMLDivElement>> {
    static defaultProps: {
        onOutsideScroll: boolean;
        onWindowResize: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private ref;
    handleOuterActions: (e: Event) => void;
    handleOutsideClick: (e: Event) => void;
    bindListeners: () => void;
    removeListeners: () => void;
    render(): JSX.Element;
}
export {};
