import React, { Component, ReactElement } from 'react';
import cn from 'classnames';
import style from './stepper.module.scss';
import { UikTopBar, UikTopBarSection } from '../';

interface Element {
  title: string;
  filled: boolean;
}

interface Props {
  elements: Element[];
  active: string;
  children?: ReactElement | ReactElement[];
  onLinkClick: (link: string) => void;
  childrenClassName?: string;
}

export default class UikStepper extends Component<Props> {

  renderElement = (item: Element, i: number) => {
    const { active, elements, onLinkClick } = this.props;

    const currentActiveIndex = elements.findIndex(value => value.title === active);

    return (
      <>
        <div key={i} className={cn(style.element, {
          [style.active]: item.title === active,
          [style.filled]: item.filled,
          [style.visited]: i < currentActiveIndex,
        })}
        onClick={() => onLinkClick(item.title)} 
        >
          {item.title}
        </div>
        { i !== elements.length - 1 && <div className={style.line}/>}
      </>
    );
  }

  render() {
    const { elements, children, childrenClassName } = this.props;
    if (!elements || elements.length === 0) {
      console.error('You pass no elements into UikStepper');
      return null;
    }
    return (
      <UikTopBar className={style.container}>
        <UikTopBarSection>
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
