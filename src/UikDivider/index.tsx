import * as React from 'react'
import classnames from 'classnames'

import  s from'./divider.module.scss'

// @flow
type UikDividerProps = {
  className?: string,
  direction?: 'vertical' | 'horizontal',
  margin?: boolean,
  vertical?: boolean,
}

const UikDivider = ({
  className,
  direction,
  vertical,
  margin,
  ...rest
}: UikDividerProps) => (
  <div
    className={ classnames({
      [s.vertical]: vertical || direction === 'vertical',
      [s.horizontal]: !(vertical || direction === 'vertical'),
      [s.margin]: margin,
    }, className) }
    { ...rest }
  />
)

UikDivider.defaultProps = {
  className: null,
  direction: 'horizontal',
  margin: false,
  vertical: false,
}

export default UikDivider
