import * as React from 'react'
import classnames from 'classnames'
// @flow

import UikAvatarStatus from './UikAvatarStatus'
import UikAvatarImage from './UikAvatarImage'

import style from './avatar.module.scss'

type UikAvatarPlaceholderProps = {
  content?: React.ReactNode,
  color?: 'green' | 'blue' | 'orange' | 'violet' | 'red',
}

export type UikAvatarProps = {
  className?: string,
  name?: React.ReactNode,
  status?: React.ReactNode,
  imgUrl?: string | Array<string>,
  textTop?: string,
  avatarPlaceholder?: UikAvatarPlaceholderProps,
  highlighted?: Boolean,
  textBottom?: React.ReactNode,
  actionIcon?: React.ReactNode,
  size?: 'small' | 'large' | 'larger' | 'extraLarge' | 'jumbo',
}

const UikAvatar = ({
  name,
  imgUrl,
  avatarPlaceholder,
  textTop,
  className,
  highlighted,
  actionIcon,
  status,
  size,
  textBottom,
  ...rest
}: UikAvatarProps) => (
  <div
    className={ classnames(style.wrapper, className, {
      ['highlighted']: highlighted,
      ['size']: size,
    }) }
    { ...rest }
  >
    <div className={ classnames(style.avatarWrapper) }>
      {
      imgUrl ? (
        <UikAvatarImage
          className={ style.avatar }
          imgUrl={ imgUrl }
        />
      ) : (

        <div className={ classnames(style.avatarPlaceholder) }
        >
          { avatarPlaceholder && avatarPlaceholder.content}
        </div>
      )
    }
      {
      actionIcon && (
        <div className={ style.avatarAction }>
          {actionIcon}
        </div>
      )
    }
    </div>
    {
      (name || textTop || textBottom) && (
        <div className={ style.info }>
          {textTop && (
            <div className={ style.textTop }>
              {textTop}
            </div>
          )}
          {name && (
          <div className={ style.name }>
            {name}
          </div>
          )}
          {textBottom && (
            <div className={ style.textBottom }>
              {textBottom}
            </div>
          )}
        </div>
      )
    }
    {
      status && (
        <UikAvatarStatus status={ status } />
      )
    }
  </div>
)

UikAvatar.defaultProps = {
  className: null,
  name: null,
  textTop: null,
  actionIcon: null,
  highlighted: false,
  avatarPlaceholder: {},
  status: null,
  imgUrl: null,
  size: null,
  textBottom: null,
}

export default UikAvatar
