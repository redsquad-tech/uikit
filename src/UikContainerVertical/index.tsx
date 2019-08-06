import React from 'react';
import classnames from 'classnames';

import cls from './container-v.module.scss';

type UikContainerVerticalProps = {
  className?: string,
  children?: React.ReactNode,
};

const UikContainerVertical = ({
  className,
  children,
  ...rest
}: UikContainerVerticalProps) => (
  <div
    className={ classnames(cls.container, className) }
    { ...rest }
  >
    {children}
  </div>
);

UikContainerVertical.defaultProps = {
  className: null,
  children: null,
};

export default UikContainerVertical;
