import React from 'react';
import classnames from 'classnames';
import UikOutsideClickHandler from '../UikOutsideClickHandler';

import cls from './menuDrop.module.scss';
import DefaultDisplayComponent from './DefaultDisplayComponent';

interface DisplayComponentProps {
  onClick?: () => void;
  [key: string]: any;
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
  static defaultProps = {
    position: 'bottomLeft',
    displayComponentProps: { onClick: undefined },
    listProps: {},
  };

  state: State = {
    focused: false,
  };

  handleToggleFocus = () => {
    const { focused } = this.state;

    this.props.displayComponentProps.onClick && this.props.displayComponentProps.onClick();

    this.setState({ focused: !focused });
  }

  render() {
    const {
      children,
      className,
      position,
      displayComponentProps: {
        onClick,
        ...otherDisplayComponentProps
      },
      listProps: { listClassName, ...otherListProps },
      ...rest
    } = this.props;

    const { focused } = this.state;

    return (
      <div style={ { position: 'relative', display: 'inline-block' } }>
      <UikOutsideClickHandler
        className={ className }
        onOutsideClick={(e: Event) => focused ? this.handleToggleFocus() : null }
        onOutsideScroll={ false }
        { ...rest }
      >
        <DefaultDisplayComponent
          onClick={ this.handleToggleFocus }
          { ...otherDisplayComponentProps }
        />
      </UikOutsideClickHandler>
      {
        focused && (
          <div
            className={ classnames(cls.list, listClassName, {
              [cls[position]]: position,
            }) }
            { ...otherListProps }
          >
            {children}
          </div>
      )}
      </div>
    );
  }
}
