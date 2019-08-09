
import React, { createRef, RefObject } from 'react';
import classnames from 'classnames';

import OptionList from './OptionList';
import UikOutsideClickHandler from '../UikOutsideClickHandler';
import UikContentTitle from '../UikContentTitle';
import UikInput from '../UikInput';

// cls
import cls from './suggest.module.scss';

import { UikSelectOptionValueType, UikSelectOptionType } from './interface';

interface UikSelectProps {
  className?: string;
  placeholder?: React.ReactNode;
  name?: string;
  options: Array<UikSelectOptionType>;

  defaultValue?: UikSelectOptionValueType;
  value?: UikSelectOptionType;

  /* disables selection */
  disabled?: boolean;

  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  /* on change */
  onChange?: (selected: UikSelectOptionType) => void;
  activeValueProps: React.HTMLAttributes<HTMLDivElement>;
  optionProps: React.HTMLAttributes<HTMLDivElement>;
  label?: string;
}

interface State {
  selected: UikSelectOptionType | null;
  focused: boolean;
  currentSearch: string | number;
}

class LocalSuggest extends React.Component<UikSelectProps, State> {
  ref: RefObject<any> = createRef();
  static defaultProps = {
    onChange: (selected: UikSelectOptionType) => {},
    className: '',
    disabled: false,
    defaultValue: [],
    value: null,
    placeholder: null,
    name: null,
    position: 'bottomLeft',
    activeValueProps: {},
    optionProps: {},
    label: null,
  };

  constructor(props: UikSelectProps) {
    super(props);
    const defaultValue = props.defaultValue;
    let selected = null;

    props.options.forEach((item) => {
      if (defaultValue === item.value) {
        selected = item;
      }
    });

    this.state = {
      selected,
      focused: false,
      currentSearch: '',
    };
  }
  componentDidUpdate() {
    const { onChange } = this.props;
    const { selected } = this.state;
    if (this.callCallbackIfAvailable && onChange && selected) {
      this.callCallbackIfAvailable = false;
      onChange(selected);
    }
  }

  callCallbackIfAvailable = false;

  onChange = (option: UikSelectOptionType | null) => {
    this.callCallbackIfAvailable = true;
  }

  onToggleFocus: () => void = () => {
    const { focused } = this.state;
    this.setState({ focused: !focused });
  }

  onClickUnfocus = () => {
    this.setState({ focused: false });
  }

  getValue = () => {
    const { disabled, value } = this.props;
    const { selected: stateSelected } = this.state;
    const selected = value || stateSelected;
    if (disabled) {
      return [];
    }

    return selected;
  }

  setValue = (value: UikSelectOptionValueType) => {
    const { options } = this.props;
    let selected = null;
    if (value) {
      options.forEach((item) => {
        if (value === item.value) {
          selected = item;
        }
      });
    }

    this.onChange(selected);
    this.setState({ selected });
  }

  optionClick = (option: UikSelectOptionType) => {
    this.setState({
      selected: option,
      focused: false,
      currentSearch: option.label ? option.label as string : option.value,
    });
    this.onChange(option);
  }

  renderValue() {
    const {
      disabled,
      options,
      placeholder,
    } = this.props;
    const selected = this.props.value || this.state.selected;

    if (options.length < 1) {
      return (
        <span className={ cls.valueWrapper }>
          No options available
        </span>
      );
    }
    if (disabled) {
      return (
        <span className={ classnames(cls.valueWrapper, cls.placeholderEmpty) }>
          {placeholder}
        </span>
      );
    }
    if (selected && selected.value) {
      return (
        <div className={ cls.valueWrapper }>
          {selected.label}
        </div>
      );
    }
    return null;
  }

  search = (e: string) => {
    this.setState({ focused: true, currentSearch: e });
  }

  filterOptions = (checker: string) => {
    return (item: UikSelectOptionType) =>
    ((item.label && item.label.toString().toLowerCase().indexOf(checker.toLowerCase()) !== -1) ||
    item.value.toString().toLowerCase().indexOf(checker.toLowerCase()) !== -1) ;
  }

  render() {
    const {
      options,
      value,
      className,
      disabled,
      position,
      optionProps,
      label,
    } = this.props;

    const { selected, focused, currentSearch } = this.state;

    return (
      <UikOutsideClickHandler
        className={ classnames(cls.wrapper, className) }
        onOutsideClick={ () => focused ? this.onClickUnfocus : null }
        onOutsideScroll={ false }
      >
        {
          label ? <UikContentTitle>{label}</UikContentTitle> : null
        }
        <div className={cls.input} onClick={() => {
          this.setState({ focused: true, currentSearch: '' });
          this.ref.current.focusInput();
        }}>
          { false && <div className={ cls.valueRenderedWrapper }
           onClick={() => this.ref.current.focusInput()}
          >
            {this.renderValue()}
          </div> }
          <UikInput
           onInput={this.search}
           disabled={ disabled || options.length < 1 } ref={this.ref}
           value={this.state.currentSearch.toString()}
          />
        </div>
        {focused && !disabled && (
          <OptionList
            optionClick={ this.optionClick }
            optionProps={ optionProps }
            options={ options.filter(this.filterOptions(currentSearch.toString())) }
            position={ position }
            selected={ value || selected }
          />
        )}
      </UikOutsideClickHandler>
    );
  }
}

export default LocalSuggest;
