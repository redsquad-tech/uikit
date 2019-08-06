import React from 'react';
import classnames from 'classnames';

import cls from './nav-link-2.module.scss';

type UikNavLinkTwoProps = {
  className?: string,
  children?: React.ReactNode,
  rightEl?: React.ReactNode,
  highlighted?: boolean,
  icon?: React.ReactNode,
  disabled?: boolean,
  onClick?: () => void,
  Component?: React.ElementType,
};

const UikNavLinkTwo = ({
  rightEl,
  children,
  className,
  highlighted,
  icon,
  onClick,
  ...rest
}: UikNavLinkTwoProps) => (
  <a
    className={ classnames(cls.wrapper, className, {
      [cls.highlighted]: highlighted,
    }) }
    onClick={onClick}
    { ...rest }
  >
    <span className={ cls.text }>
      {
        icon && (
        <span className={ cls.icon }>
          {icon}
        </span>
        )
      }
      {children}
    </span>
    {rightEl && (
    <span className={ cls.rightEl }>
      {rightEl}
    </span>
    )}
  </a>
);

UikNavLinkTwo.defaultProps = {
  className: null,
  rightEl: null,
  highlighted: false,
  icon: null,
  children: null,
};

export default UikNavLinkTwo;
