import React from 'react';
import classnames from 'classnames';

import cls from './nav-link.module.scss';

import UikNavLink, { UikNavLinkProps } from '../UikNavLink';

const UikNavLinkDark = ({
  children,
  className,
  ...rest
}: UikNavLinkProps) => (
  <UikNavLink
    className={ classnames(cls.wrapperDark, className) }
    { ...rest }
  >
    {children}
  </UikNavLink>
);

UikNavLinkDark.defaultProps = {
  Component: 'a',
};

export default UikNavLinkDark;
