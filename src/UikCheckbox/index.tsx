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
  value: boolean;
  onInput: (value: boolean) => void;
}

class UikCheckbox extends React.Component<UikCheckboxProps, State> {

  changeHandler = () => {
    const { onInput, value } = this.props;
    onInput(!value);
  }

  render() {
    const {
      className,
      name,
      label,
      value,
    } = this.props;

    return (
      <div className={cn(s.checkbox, className)}>
        <input
          name={ name }
          type="checkbox"
          checked={ value }
          onChange={this.changeHandler}
        />
        { label && (
          <div className={s.header} onClick={this.changeHandler}>
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
