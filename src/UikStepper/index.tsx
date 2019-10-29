import React, { Component, Fragment } from 'react';
import cn from 'classnames';
import style from './stepper.module.scss';
import UikTopBar from '../UikTopBar';
import UikTopBarSection from '../UikTopBarSection';

interface Element {
  title: string;
  filled: boolean;
  error: boolean;
}

interface Props {
  elements: Element[];
  active: string;
  children?: any;
  className?: string;
  onPrevLinkClick: (link: string) => void;
  childrenClassName?: string;
}

interface State {
  pagesVisited: string[];
}

export default class UikStepper extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { pagesVisited: [props.active] };
  }

  componentDidUpdate () {
    const { active } = this.props;
    const { pagesVisited } = this.state;
    if (!(pagesVisited.indexOf(active) + 1)) {
      pagesVisited.push(active);
      this.setState({ pagesVisited: [...pagesVisited] });
    }
  }

  renderElement = (item: Element, i: number) => {
    const { active, elements, onPrevLinkClick } = this.props;
    const { pagesVisited } = this.state;

    const currentActiveIndex = elements.findIndex(value => value.title === active);

    return (
      <Fragment key={i}>
        <div className={cn(style.element, {
          [style.active]: item.title === active,
          [style.filled]: item.filled,
          [style.error]: item.error,
          [style.visited]: i < currentActiveIndex || pagesVisited.includes(item.title),
        })}
        onClick={() => {
          (i < currentActiveIndex || pagesVisited.includes(item.title)) && onPrevLinkClick(item.title); 
        }}
        >
          {item.title}
        </div>
        { i !== elements.length - 1 && <div className={style.line}/>}
      </Fragment>
    );
  }

  render() {
    const { elements, children, childrenClassName, className } = this.props;
    if (!elements || elements.length === 0) {
      console.error('You pass no elements into UikStepper');
      return null;
    }
    return (
      <UikTopBar className={style.container}>
        <UikTopBarSection className={cn(style.elements, { [className!]: !!className })}>
          {elements.map(this.renderElement)}
        </UikTopBarSection>
        {children && (
          <UikTopBarSection className={childrenClassName}>
            {children}
          </UikTopBarSection>
        )}
      </UikTopBar>
    );
  }
}
