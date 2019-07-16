import * as React from 'react'
import classnames from 'classnames'

import cls from './nav-link-two-container.module.scss'

// @flow
type UikNavLinkTwoContainerProps = {
  children?: React.ReactNode,
  className?: string,
  positionRight?: boolean
}

const UikNavLinkTwoContainer = ({
  children,
  className,
  positionRight,
  ...rest
}: UikNavLinkTwoContainerProps) => (
  <div
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </div>
)

UikNavLinkTwoContainer.defaultProps = {
  className: null,
  positionRight: false,
  children: null,
}

export default UikNavLinkTwoContainer
