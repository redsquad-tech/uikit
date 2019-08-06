import * as React from 'react';
import classnames from 'classnames';

import cls from './nav-panel.module.scss';

type UikNavPanelProps = {
  children?: React.ReactNode,
  className?: string,
  positionRight?: boolean,
};

const UikNavPanel = ({
  children,
  className,
  positionRight,
  ...rest
}: UikNavPanelProps) => (
  <div
    className={ classnames(cls.wrapper, className, {
      [cls.positionRight]: positionRight,
    }) }
    { ...rest }
  >
    {children}
  </div>
);

UikNavPanel.defaultProps = {
  className: null,
  positionRight: false,
  children: null,
};

export default UikNavPanel;
