import * as React from 'react'
import classnames from 'classnames'

import cls from './nav-section-title.module.scss'


// @flow
type UikNavSectionTitleProps = {
  children?: React.ReactNode,
  className?: string
}

const UikSectionName = ({
  children,
  className,
  ...rest
}: UikNavSectionTitleProps) => (
  <span
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </span>
)

UikSectionName.defaultProps = {
  className: null,
  children: null,
}

export default UikSectionName
