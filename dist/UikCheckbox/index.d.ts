import React from 'react';
interface State {
    value: boolean;
}
interface UikCheckboxProps {
    label: React.ReactNode;
    name?: string;
    className?: string;
    value?: boolean;
    onInput: (value: boolean) => void;
}
declare class UikCheckbox extends React.PureComponent<UikCheckboxProps, State> {
    constructor(props: UikCheckboxProps);
    componentWillReceiveProps(nextProps: UikCheckboxProps): void;
    changeHandler: (e: React.SyntheticEvent<Element, Event>) => void;
    render(): JSX.Element;
}
export default UikCheckbox;
