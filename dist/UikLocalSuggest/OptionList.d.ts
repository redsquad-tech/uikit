import * as React from 'react';
import { UikSelectOptionType } from './interface';
interface OptionListProps {
    selected: UikSelectOptionType[];
    options: UikSelectOptionType[];
    optionClick: (key: UikSelectOptionType) => void;
    onAllClick: () => void;
    position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    optionProps: React.HTMLAttributes<HTMLDivElement>;
}
declare class OptionList extends React.Component<OptionListProps> {
    static defaultProps: {
        position: string;
        optionProps: {};
    };
    renderOptionWrapper: ({ label }: UikSelectOptionType) => JSX.Element;
    renderOptions(): JSX.Element[];
    render(): JSX.Element;
}
export default OptionList;
