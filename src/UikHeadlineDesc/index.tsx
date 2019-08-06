import React from 'react';
import classnames from 'classnames';

import s from './headline-desc.module.scss';

type UikHeadlineDescProps = {
  className?: string,
  children: React.ReactNode,
};

const UikHeadline = ({
  children,
  className,
  ...rest
}: UikHeadlineDescProps) => (
  <p
    className={ classnames(s.wrapper, className) }
    { ...rest }
  >
    {children}
  </p>
);

UikHeadline.defaultProps = {
  className: null,
};

export default UikHeadline;
