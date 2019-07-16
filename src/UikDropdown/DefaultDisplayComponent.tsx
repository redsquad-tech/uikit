import React from 'react'
import classnames from 'classnames'
// @flow

import UikButton from '../UikButton'

import cls from './menuDrop.module.scss'

interface DefaultDisplayComponentProps {
  className?: string
  onClick: () => void
}

const DefaultDisplayComponent = ({ className, ...rest }: DefaultDisplayComponentProps) => (
  <UikButton
    className={ classnames(cls.defaultDisplayComponent, className) }
    contentClassName={ cls.btnContent }
    { ...rest }
  >
    &middot;&middot;&middot;
  </UikButton>
)

export default DefaultDisplayComponent
