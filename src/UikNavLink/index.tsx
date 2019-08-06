import React from 'react';
import classnames from 'classnames';

import cls from './nav-link.module.scss';

export interface UikNavLinkProps {
  className?: string;
  children?: React.ReactNode;
  rightEl?: React.ReactNode;
  highlighted?: boolean;
  icon?: React.ReactNode;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
  Component: React.ElementType;
}

const UikNavLink = ({
  rightEl,
  children,
  className,
  highlighted,
  icon,
  disabled,
  Component,
  ...rest
}: UikNavLinkProps) => (
  <Component
    className={ classnames(cls.wrapper, className, {
      [cls.highlighted]: highlighted,
      [cls.disabled]: disabled,
    }) }
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
  </Component>
);

UikNavLink.defaultProps = {
  className: null,
  rightEl: null,
  highlighted: false,
  icon: null,
  children: null,
};

export default UikNavLink;
