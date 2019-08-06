import React from 'react';
import { UikSelectOptionValueType, UikSelectOptionType } from './flowTypes';
interface OptionListProps {
    selected: UikSelectOptionType[];
    options: UikSelectOptionType[];
    excluded: UikSelectOptionValueType[];
    optionClick: (key: UikSelectOptionType) => void;
    onAllClick: () => void;
    position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    optionProps: React.HTMLAttributes<HTMLDivElement>;
}
declare class OptionList extends React.Component<OptionListProps> {
    static defaultProps: {
        excluded: never[];
        position: string;
        optionProps: {};
    };
    renderOptionWrapper: ({ label }: UikSelectOptionType) => JSX.Element;
    renderOptions(): JSX.Element[];
    render(): JSX.Element;
}
export default OptionList;
