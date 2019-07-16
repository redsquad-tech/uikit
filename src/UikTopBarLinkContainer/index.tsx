import * as React from 'react'
import classnames from 'classnames'

import cls from './top-bar-link-container.module.scss'

// @flow
type UikTopBarLinkContainerProps<T extends React.ElementType = 'div'> = {
  className?: string,
  children?: React.ReactNode,
  Component: React.ElementType,
}


const UikTopBarLinkContainer = ({
  children,
  className,
  Component,
  ...rest
}: UikTopBarLinkContainerProps) => (
  <Component
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </Component>
)

UikTopBarLinkContainer.defaultProps = {
  className: null,
  children: null,
}

export default UikTopBarLinkContainer
