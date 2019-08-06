import React from 'react';

import UikContentTitle from '../UikContentTitle';

import s from './checkbox.module.scss';
import cn from 'classnames';

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

class UikCheckbox extends React.PureComponent<UikCheckboxProps, State> {

  constructor(props: UikCheckboxProps) {
    super(props);
    this.state = { value: Boolean(this.props.value) };
  }

  componentWillReceiveProps(nextProps: UikCheckboxProps) {
    nextProps.value && this.setState({ value: nextProps.value });
  }

  changeHandler = (e: React.SyntheticEvent) => {
    const { onInput } = this.props;
    this.setState({ value: !this.state.value });
    onInput(!this.state.value);
    e.preventDefault();
  }

  render() {
    const {
      className,
      name,
      label,
    } = this.props;

    return (
      <div
        className={cn(s.checkbox, className)}
        onClick={this.changeHandler}
      >
        <input
          name={ name }
          type="checkbox"
          checked={this.state.value}
          onChange={this.changeHandler}
        />
        { label && (
          <div className={s.header}>
            <UikContentTitle>
              {label}
            </UikContentTitle>
          </div>
        )}
      </div>
    );
  }
}

export default UikCheckbox;
