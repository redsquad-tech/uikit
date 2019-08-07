import React from 'react';
interface State {
    value: Date;
}
interface UikDatepickerProps {
    wrapperProps?: {
        className: string;
    };
    label?: React.ReactNode;
    value?: Date;
    onInput?: (value: Date) => void;
}
declare class UikDatePicker extends React.PureComponent<UikDatepickerProps, State> {
    constructor(props: UikDatepickerProps);
    componentWillReceiveProps(nextProps: UikDatepickerProps): void;
    render(): JSX.Element;
}
export default UikDatePicker;
