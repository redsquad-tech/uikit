/* eslint-disable max-len */
import * as React from 'react';
import classnames from 'classnames';

import UikButton from '../UikButton';
import cls from './select.module.scss';

import { UikSelectOptionType } from './interface';

interface OptionListProps {
  selected: UikSelectOptionType[];
  options: UikSelectOptionType[];
  optionClick: (key: UikSelectOptionType) => void;
  onAllClick: () => void;
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  optionProps: React.HTMLAttributes<HTMLDivElement>;
}

class OptionList extends React.Component<OptionListProps> {
  static defaultProps = {
    position: 'bottomLeft',
    optionProps: {},
  };

  renderOptionWrapper = ({ label }: UikSelectOptionType) => (
    <div className={ cls.label }>
      {label}
    </div>
  )

  renderOptions() {
    const {
      options, optionClick, selected,
      optionProps: {
        className: optionClassName,
        ...optionPropsRest
      },
    } = this.props;

    return options.map((i) => {
      const indexIsSelected = selected.find(k => i.value === k.value);
      const onClick = (key: UikSelectOptionType) => () => {
        optionClick(key);
      };

      return (
        <UikButton
          key={ i.value.toString() }
          className={ classnames(cls.option, optionClassName) }
          onClick={ onClick(i) }
          { ...optionPropsRest }
        >
          <div className={ cls.optionContent }>
            {this.renderOptionWrapper(i)}
            {indexIsSelected ? (
              <div className={ cls.check } />
            ) : null}
          </div>
        </UikButton>
      );
    });
  }

  render() {
    const { position } = this.props;
    return (
      <div className={ classnames(cls.optionListWrapper, {
        [cls[position]]: position,
      }) }
      >
        <div className={ cls.optionList }>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}

export default OptionList;
