import cn from 'classnames';
import React, { Component } from 'react';
import UikContentTitle from '../UikContentTitle';

import s from './radio.module.scss';

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
  state = {
    currentValue: this.props.defaultValue,
  };

  render() {
    const {
      options,
      label,
      className,
    } = this.props;
    return (<div>
      { label && (
      <div className={s.header}>
        <UikContentTitle>
        {label}
        </UikContentTitle>
      </div>
    )}
      <div className={className ? className : ''}>
        {options.map(this.renderSingleRadio)}
      </div>
    </div>
    );
  }

  renderSingleRadio = (option: Option, key: number) => {
    const { currentValue } = this.state;
    const { disabled } = this.props;
    return (<div
      key={key}
      onClick={this.changeValue(option.value)}
      className={cn(s.input, disabled ? s.disabled : '')}
    >
      <input
        type="radio"
        disabled={disabled}
        onChange={this.changeValue(option.value)}
        checked={currentValue === option.value}
      />
      {option.label}
    </div>
    );
  }

  changeValue = (value: string | number) => () => {
    this.setState({ currentValue: value });
    this.props.onChange(value);
  }

}
