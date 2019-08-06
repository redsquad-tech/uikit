import React from 'react';
import classnames from 'classnames';

import cls from './top-bar-link.module.scss';

type UikTopBarLinkProps = {
  className?: string,
  children: React.ReactNode,
};

const UikTopBarLink = ({
  children,
  className,
  ...rest
}: UikTopBarLinkProps) => (
  <a
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </a>
);

UikTopBarLink.defaultProps = {
  className: null,
};

export default UikTopBarLink;
