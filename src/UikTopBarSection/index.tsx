/* tslint:disable */
import * as React from 'react'
import classnames from 'classnames'

import cls from './top-bar-section.module.scss'

type Com = React.ElementType | 'div'

interface UikTopBarSectionProps {
  children?: React.ReactNode,
  className?: string,
  Component?: React.ElementType,
  [key: string]: any,
}


const UikTopBarSection = ({
  children,
  className,
  Component,
  ...rest }: UikTopBarSectionProps) => 
  {
    if (Component) {
      return (
        <Component
          className={ classnames(cls.wrapper, className) }
          { ...rest }
        >
          {children && children}
        </Component>
      )
    } else {
      return null;
    }
}


UikTopBarSection.defaultProps = {
  className: null,
  children: null,
  Component: 'div'
}

export default UikTopBarSection
