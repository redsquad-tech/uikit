import React from 'react';
import classnames from 'classnames';

import s from './headline.module.scss';

type UikHeadlineProps = {
  className?: string,
  children: React.ReactNode,
};

const UikHeadline = ({
  children,
  className,
  ...rest
}: UikHeadlineProps) => (
  <h2
    className={ classnames(s.wrapper, className) }
    { ...rest }
  >
    {children}
  </h2>
);

UikHeadline.defaultProps = {
  className: null,
};

export default UikHeadline;
