import React from 'react';
import classnames from 'classnames';

import cls from './nav-divider.module.scss';

type UikTopBarMenuDividerProps = {
  className?: string,
};

const UikTopBarMenuDivider = ({
  className,
  ...rest
}: UikTopBarMenuDividerProps) => (
  <div
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  />
);

UikTopBarMenuDivider.defaultProps = {
  className: null,
};

export default UikTopBarMenuDivider;
