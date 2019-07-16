import * as React from 'react'
import classnames from 'classnames'

import cls from './nav-section.module.scss'

// @flow
type UikNavSectionProps = {
  children?: React.ReactNode,
  className?: string
}

const UikNavSection = ({
  children,
  className,
  ...rest
}: UikNavSectionProps) => (
  <section
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </section>
)

UikNavSection.defaultProps = {
  className: null,
  children: null,
}

export default UikNavSection
