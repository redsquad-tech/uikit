import React from 'react';
import { UikSelectOptionValueType, UikSelectOptionType } from './interface';
interface UikSelectProps {
    className?: string;
    placeholder?: React.ReactNode;
    name?: string;
    options: Array<UikSelectOptionType>;
    defaultValue?: Array<UikSelectOptionValueType> | UikSelectOptionValueType;
    value?: Array<UikSelectOptionType>;
    excluded?: Array<UikSelectOptionValueType>;
    multi?: boolean;
    disabled?: boolean;
    position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    onChange?: (selected: UikSelectOptionType[]) => void;
    activeValueProps: React.HTMLAttributes<HTMLDivElement>;
    optionProps: React.HTMLAttributes<HTMLDivElement>;
    label?: string;
}
interface State {
    selected: UikSelectOptionType[];
    focused: boolean;
}
declare class Select extends React.Component<UikSelectProps, State> {
    static defaultProps: {
        onChange: (selected: UikSelectOptionType[]) => void;
        multi: boolean;
        className: string;
        disabled: boolean;
        defaultValue: never[];
        excluded: never[];
        multiLimit: number;
        value: null;
        placeholder: null;
        name: null;
        position: string;
        activeValueProps: {};
        optionProps: {};
        label: null;
    };
    constructor(props: UikSelectProps);
    callCallbackIfAvailable: boolean;
    componentDidUpdate(): void;
    onAllClick: (clearOnly?: boolean) => void;
    onChange: (options: UikSelectOptionType[]) => void;
    onToggleFocus: () => void;
    onClickUnfocus: () => void;
    getValue: () => UikSelectOptionType[];
    setValue: (value: React.ReactText) => void;
    optionClick: (option: UikSelectOptionType) => void;
    renderHiddenInputs(): JSX.Element | JSX.Element[] | null;
    renderValue(): JSX.Element;
    render(): JSX.Element;
}
export default Select;
