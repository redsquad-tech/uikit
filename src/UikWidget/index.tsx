import * as React from 'react'
import classnames from 'classnames'

import s from './widget.module.scss'

// @flow

type UikWidgetProps = {
  className?: string,
  children?: React.ReactNode,
  padding?: boolean,
  margin?: boolean,
  disabled?: boolean,
}

const UikWidget = ({
  children,
  className,
  padding,
  margin,
  disabled,
  ...rest
}: UikWidgetProps) => (
  <div
    className={ classnames(s.wrapper, className, {
      [s.padding]: padding,
      [s.margin]: margin,
      [s.disabled]: disabled,
    }) }
    { ...rest }
  >
    {children}
  </div>
)

UikWidget.defaultProps = {
  className: null,
  children: null,
  padding: false,
  margin: false,
}

export default UikWidget
