import React, { Component } from 'react';
interface State {
    value: string;
    errorMessage?: string;
}
interface DataCheck {
    pattern: RegExp;
    test: (v: string) => boolean;
}
export interface Check {
    pattern: RegExp | DataCheck;
    noMatchMessage: string;
}
interface UikInputProps {
    wrapperProps?: {
        className: string;
    };
    label?: React.ReactNode;
    name?: string;
    className?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    clear?: boolean;
    errorMessage?: string;
    focus?: boolean;
    placeholder?: string;
    type?: string;
    value?: string;
    valueCheck?: Check;
    onInput?: (value: string) => void;
    disabled?: boolean;
}
declare class Input extends Component<UikInputProps, State> {
    constructor(props: UikInputProps);
    componentWillReceiveProps(nextProps: UikInputProps): void;
    render(): JSX.Element;
}
export default Input;
