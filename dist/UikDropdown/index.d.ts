import React from 'react';
interface DisplayComponentProps {
    onClick?: () => void;
}
interface UikDropdownProps {
    className?: string;
    children: React.ReactNode;
    position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    listProps?: any;
    displayComponentProps: DisplayComponentProps;
}
interface State {
    focused: boolean;
}
export default class UikDropdown extends React.PureComponent<UikDropdownProps, State> {
    static defaultProps: {
        position: string;
        displayComponentProps: {
            onClick: undefined;
        };
        listProps: {};
    };
    state: State;
    handleToggleFocus: () => void;
    render(): JSX.Element;
}
export {};
