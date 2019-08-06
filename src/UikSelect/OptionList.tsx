/* eslint-disable max-len */
import React from 'react';
import classnames from 'classnames';

import UikButton from '../UikButton';
// cls
import cls from './select.module.scss';

import { UikSelectOptionValueType, UikSelectOptionType } from './interface';

interface OptionListProps {
  selected: UikSelectOptionType[];
  options: UikSelectOptionType[];
  excluded: UikSelectOptionValueType[];
  optionClick: (key: UikSelectOptionType) => void;
  onAllClick: () => void;
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  optionProps: React.HTMLAttributes<HTMLDivElement>;
}

class OptionList extends React.Component<OptionListProps> {
  static defaultProps = {
    excluded: [],
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
      options, optionClick, selected, excluded,
      optionProps: {
        className: optionClassName,
        ...optionPropsRest
      },
    } = this.props;

    const filteredOptions = options.filter((option) => {
      if (excluded.indexOf(option.value) > -1) {
        return false;
      }
      return true;
    });

    return filteredOptions.map((i) => {
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
