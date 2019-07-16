import * as React from 'react'
import classnames from 'classnames'
// @flow

import cls from './widget-title.module.scss'

interface UikWidgetHeaderProps {
  children: React.ReactNode,
  className?: string,
  noDivider?: boolean,
  rightEl?: React.ReactNode,
}

const UikWidgetHeader = ({
  children,
  className,
  noDivider,
  rightEl,
  ...rest
}: UikWidgetHeaderProps) => (
  <div
    className={ classnames(cls.wrapper, className, {
      [cls.noDivider]: noDivider,
    }) }
    { ...rest }
  >
    <h3>
      {children}
    </h3>
    {rightEl}
  </div>
)

export default UikWidgetHeader
