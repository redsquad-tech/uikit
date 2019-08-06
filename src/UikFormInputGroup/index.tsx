import React from 'react';
import classnames from 'classnames';

import s from './form-input-group.module.scss';

interface UikFormInputGroupProps {
  className?: string;
  children: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  horizontal?: boolean;
}

const UikFormInputGroup = ({
  children,
  className,
  direction,
  horizontal,
  ...rest
}: UikFormInputGroupProps) => (
  <div
    className={ classnames(className, {
      [s.horizontal]: direction === 'horizontal' || horizontal,
      [s.vertical]: !(direction === 'horizontal' || horizontal),
    }) }
    { ...rest }
  >
    {children}
  </div>
);

export default UikFormInputGroup;
