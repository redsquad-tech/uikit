import React from 'react';
import classnames from 'classnames';

import cls from './nav-link-secondary.module.scss';

type UikNavLinkProps = {
  className?: string,
  children?: React.ReactNode,
  rightEl?: React.ReactNode,
  highlighted?: boolean,
  disabled?: boolean,
  onClick?: () => void,
};

const UikNavLink = ({
  rightEl,
  children,
  className,
  highlighted,
  ...rest
}: UikNavLinkProps) => (
  <a
    className={ classnames(cls.wrapper, className, {
      [cls.highlighted]: highlighted,
    }) }
    { ...rest }
  >
    <span className={ cls.text }>
      {children}
    </span>
    {rightEl && (
    <span className={ cls.rightEl }>
      {rightEl}
    </span>
    )}
  </a>
);

UikNavLink.defaultProps = {
  className: null,
  rightEl: null,
  highlighted: false,
  children: null,
};

export default UikNavLink;
