import React, { Component } from 'react';
interface State {
    currentValue: string | number;
}
interface Option {
    label: React.ReactNode;
    value: string | number;
}
interface Props {
    defaultValue: string | number;
    options: Option[];
    onChange: (value: string | number) => void;
    className?: string;
    label: React.ReactNode;
    disabled?: boolean;
}
export default class UikRadio extends Component<Props, State> {
    state: {
        currentValue: string | number;
    };
    render(): JSX.Element;
    renderSingleRadio: (option: Option, key: number) => JSX.Element;
    changeValue: (value: string | number) => () => void;
}
export {};
