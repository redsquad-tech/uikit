import React from 'react'
import classnames from 'classnames'

import cls from './nav-icon.module.scss'

import LineLong from './assets/LineLong'
import LineShort from './assets/LineShort'

// @flow
type UikNavBurgerType = {
  className?: String,
  isOpen?: Boolean,
  [key: string]: any,
}

const UikNavBurger = ({
  className,
  isOpen,
  ...rest
}: UikNavBurgerType) => (
  <div
    className={ classnames(cls.wrapper, className, {
      [cls.isOpen]: isOpen,
    }) }
    { ...rest }
  >
    <LineShort className={ cls.a } />
    <LineLong className={ cls.b } />
    <LineShort className={ cls.c } />
  </div>
)

UikNavBurger.defaultProps = {
  className: null,
  isOpen: false,
}

export default UikNavBurger
