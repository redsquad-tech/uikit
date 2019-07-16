import * as React from 'react'
import classnames from 'classnames'

import cls from './container-h.module.scss'

// @flow
type UikContainerHorizontalProps = {
  className?: string,
  children?: React.ReactNode,
}

const UikContainerHorizontal = ({
  className,
  children,
  ...rest
}: UikContainerHorizontalProps) => (
  <div
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </div>
)

UikContainerHorizontal.defaultProps = {
  className: null,
  children: null,
}

export default UikContainerHorizontal
