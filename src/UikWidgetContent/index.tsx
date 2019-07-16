import * as React from 'react'
import classnames from 'classnames'

import s from './widget-content.module.scss'

// @flow
type UikWidgetContentProps = {
  children?: React.ReactNode,
  className?: string,
  grey?: boolean
}


const UikWidgetContent = ({
  children,
  className,
  grey,
  ...rest
}: UikWidgetContentProps) => (
  <div
    className={ classnames(s.wrapper, className, {
      [s.grey]: grey,
    }) }
    { ...rest }
  >
    {children}
  </div>
)

export default UikWidgetContent
