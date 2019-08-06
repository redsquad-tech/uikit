import React from 'react';
import classnames from 'classnames';
import './uikon.scss';

type UikonProps = {
  className?: string,
  children?: React.ReactNode,
  color?: 'green' | 'blue' | 'orange' | 'violet' | 'red',
};

const Uikon = ({
  children,
  className,
  color,
  ...rest
}: UikonProps) => (
  <i
    className={ classnames('uikon', className, color) }
    { ...rest }
  >
    {children}
  </i>
);

Uikon.defaultProps = {
  className: null,
  children: null,
  color: null,
};

export default Uikon;
