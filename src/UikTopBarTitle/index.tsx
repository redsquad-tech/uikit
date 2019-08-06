
import React from 'react';
import classnames from 'classnames';

import cls from './top-bar-title.module.scss';

type UikTopBarTitleProps = {
  children?: React.ReactNode,
  className?: string,
  Component: React.ElementType,
  large?: Boolean,
};

const UikTopBarTitle = ({
  children,
  className,
  Component,
  large,
  ...rest
}: UikTopBarTitleProps) => (
  <Component
    className={ classnames(cls.wrapper, className, {
      [cls.large]: large,
    }) }
    { ...rest }
  >
    {children}
  </Component>
);

UikTopBarTitle.defaultProps = {
  className: null,
  children: null,
  large: false,
  Component: 'h2',
};

export default UikTopBarTitle;
