
import React from 'react';
import classnames from 'classnames';

import OptionList from './OptionList';
import UikButton from '../UikButton';
import UikOutsideClickHandler from '../UikOutsideClickHandler';
import UikContentTitle from '../UikContentTitle';

// cls
import cls from './select.module.scss';

import { UikSelectOptionValueType, UikSelectOptionType } from './flowTypes';

interface UikSelectProps {
  className?: string;
  placeholder?: React.ReactNode;
  name?: string;
  options: Array<UikSelectOptionType>;

  defaultValue?: Array<UikSelectOptionValueType> | UikSelectOptionValueType;
  value?: Array<UikSelectOptionType>;
  excluded?: Array<UikSelectOptionValueType>;

  /* Allows multiple selection */
  multi?: boolean;
  /* disables selection */
  disabled?: boolean;

  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  /* on change */
  onChange?: (selected: UikSelectOptionType[]) => void;
  activeValueProps: React.HTMLAttributes<HTMLDivElement>;
  optionProps: React.HTMLAttributes<HTMLDivElement>;
  label?: string;
}

interface State {
  selected: UikSelectOptionType[];
  focused: boolean;
}

class Select extends React.Component<UikSelectProps, State> {
  static defaultProps = {
    onChange: (selected: UikSelectOptionType[]) => {}, // eslint-disable-line
    multi: false,
    className: '',
    disabled: false,
    defaultValue: [],
    excluded: [],
    multiLimit: 0,
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
    const defaultValue = Array.isArray(props.defaultValue)
      ? props.defaultValue
      : [
        props.defaultValue,
      ];
    const selected: UikSelectOptionType[] = [];

    props.options.forEach((item) => {
      if (defaultValue.indexOf(item.value) !== -1) {
        selected.push(item);
      }
    });

    this.state = {
      selected,
      focused: false,
    };
  }

  callCallbackIfAvailable = false;

  componentDidUpdate() {
    const { onChange, multi } = this.props;
    if (this.callCallbackIfAvailable && onChange) {
      this.callCallbackIfAvailable = false;
      // check if i should call onChange
      const { selected } = this.state;
      if (multi) {
        onChange(selected);
      } else {
        onChange([selected[0]]);
      }
    }
  }

  onAllClick = (clearOnly = false) => {
    const { selected } = this.state;
    const { options } = this.props;
    if (selected.length >= options.length || clearOnly) {
      this.callCallbackIfAvailable = true;
      this.setState({
        selected: [
        ],
      });
    } else {
      this.onChange(options);
      this.setState({ selected: options.map(i => i) }); // depp copy
    }
  }

  onChange = (options: UikSelectOptionType[]) => {
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
    const selected: UikSelectOptionType[] = [];
    const { options } = this.props;
    const values = [value];

    if (values.length > 0) {
      options.forEach((item) => {
        if (values.indexOf(item.value) !== -1) {
          selected.push(item);
        }
      });
    }

    this.onChange(selected);
    this.setState({ selected });
  }

  optionClick = (option: UikSelectOptionType) => {
    const {
      multi,
    } = this.props;
    // single item
    if (!multi) {
      this.setState({
        selected: [
          option,
        ],
        focused: false,
      });
      this.onChange([
        option,
      ]);
      return;
    }

    // multiple allowed
    const { selected } = this.state;
    const index = selected.map(item => item.value).indexOf(option.value);
    if (index !== -1) {
      selected.splice(index, 1);
    } else {
      selected.push(option);
    }
    this.onChange(selected);
    this.setState({ selected });
  }

  renderHiddenInputs() {
    const {
      name,
      multi,
      disabled,
      value,
    } = this.props;

    // do not render hidden inputs if no name
    if (!name) {
      return null;
    }
    const { selected: stateSelected } = this.state;
    const selected = value || stateSelected;
    if (disabled) {
      return null;
    }
    const inputName = multi ? `${name}[]` : name;

    // render selected
    return selected && selected.length > 0 ? (
      selected.map(item => (
        <input
          key={ item.value.toString() }
          name={ inputName }
          type="hidden"
          value={ item.value.toString() }
        />
      ))
    ) : (
      // or render one empty
      <input
        name={ name }
        type="hidden"
      />
    );
  }

  renderValue() {
    const {
      disabled,
      options,
      placeholder,
    } = this.props;
    const selected = this.props.value || this.state.selected; // eslint-disable-line
    const firstRender = selected[0];
    if (typeof firstRender !== 'undefined') {
      if (!firstRender.label) {
        const full = options.find(item => firstRender.value === item.value);
        if (full) {
          firstRender.label = full.label;
        }
      }
    }

    if (options.length < 1) {
      return (
        <span className={ cls.valueWrapper }>
          No options available
        </span>
      );
    }
    if (disabled || selected.length < 1) {
      return (
        <span className={ classnames(cls.valueWrapper, cls.placeholderEmpty) }>
          {placeholder}
        </span>
      );
    }
    if (selected.length === 1) {
      return (
        <div className={ cls.valueWrapper }>
          {firstRender.label}
        </div>
      );
    }
    return (
      <div className={ cls.placeholderAndOther }>
        <div>
          {firstRender.label}
        </div>
        <div className={ cls.plusValue }>
          +
          {selected.length - 1}
        </div>
      </div>
    );
  }

  render() {
    const {
      options,
      value,
      className,
      excluded,
      disabled,
      position,
      activeValueProps,
      optionProps,
      label,
    } = this.props;

    const { selected, focused } = this.state;

    const {
      className: activeValueClassName,
      ...activeValuePropsRest
    } = activeValueProps;

    return (
      <UikOutsideClickHandler
        className={ classnames(cls.wrapper, className) }
        onOutsideClick={ () => focused ? this.onClickUnfocus : null }
        onOutsideScroll={ false }
      >
        {
          label ? <UikContentTitle>{label}</UikContentTitle> : null
        }
        <UikButton
          className={ classnames(cls.valueRendered, activeValueClassName) }
          disabled={ disabled || options.length < 1 }
          onClick={ () => this.onToggleFocus() }
          { ...activeValuePropsRest }
        >
          <div className={ cls.valueRenderedWrapper }>
            {this.renderValue()}
            <div className={ cls.arrowWrapper } />
          </div>
        </UikButton>
        {focused && !disabled && (
          <OptionList
            excluded={ excluded }
            onAllClick={ this.onAllClick }
            optionClick={ this.optionClick }
            optionProps={ optionProps }
            options={ options }
            position={ position }
            selected={ value || selected }
          />
        )}
        {this.renderHiddenInputs()}
      </UikOutsideClickHandler>
    );
  }
}

export default Select;
