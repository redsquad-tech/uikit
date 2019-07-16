import * as React from 'react'
import classnames from 'classnames'

import cls from './scroll.module.scss'

// @flow
type UikScrollAreaProps = {
  children?: React.ReactNode,
  className?: string,
}


class UikScrollArea extends React.PureComponent<UikScrollAreaProps> {
  render() {
    const {
      children,
      className,
      ...rest
    } = this.props
    return (
      <div
        className={ classnames(cls.wrapper, className) }
        { ...rest }
      >
        {children}
      </div>)
  }
}

export default UikScrollArea
