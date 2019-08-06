import React from 'react';
import DatePicker from 'react-date-picker';

import UikContentTitle from '../UikContentTitle';

import s from './input.module.scss';
import './ko.scss';

interface State {
  value: Date;
}

interface UikDatepickerProps {
  wrapperProps?: { className: string };
  label?: React.ReactNode;
  value?: Date;
  onInput?: (value: Date) => void;
}

class UikDatePicker extends React.PureComponent<UikDatepickerProps, State> {

  constructor(props: UikDatepickerProps) {
    super(props);
    this.state = { value: this.props.value ? this.props.value : new Date() };
  }

  componentWillReceiveProps(nextProps: UikDatepickerProps) {
    nextProps.value && this.setState({ value: nextProps.value });
  }

  render() {
    const {
      label,
      value,
      onInput,
    } = this.props;

    return (
      <div
      >
        { label && (
          <div className={s.header}>
            <UikContentTitle>
              {label}
            </UikContentTitle>
          </div>
        )}
          <DatePicker
            onChange={(d: Date | Date[]) => {
              if (d instanceof Array && d.length > 0) {
                this.setState({ value: d[0] });
                onInput && onInput(d[0]);
              } else {
                this.setState({ value: d as Date });
                onInput && onInput(d as Date);
              }
            }}
            value={value}
            minDetail="decade"
            className={s.calendar}
          />

        </div>
    );
  }
}

export default UikDatePicker;
