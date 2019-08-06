import React from 'react';
import classnames from 'classnames';

import cls from './nav-user.module.scss';

type UikNavUserProps = {
  children?: React.ReactNode,
  className?: string,
  Component?: React.ElementType,
  name?: React.ReactNode,
  imgUrl?: string,
  textTop?: React.ReactNode,
};

const UikNavUser = ({
  children,
  className,
  name,
  imgUrl,
  textTop,
  ...rest
}: UikNavUserProps) => (
  <div
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {
      imgUrl && (
        <div className={ cls.avatarWrapper }>
          <img
            alt="bob"
            className={ cls.avatar }
            src={ imgUrl }
          />
        </div>
      )
    }
    {
      name && (
        <span className={ cls.name }>
          {name}
        </span>
      )
    }
    {
      textTop && (
        <span className={ cls.textTop }>
          {textTop}
        </span>
      )
    }
    {children}
  </div>
);

UikNavUser.defaultProps = {
  className: null,
  children: null,
  name: null,
  imgUrl: null,
  textTop: null,
};

export default UikNavUser;
