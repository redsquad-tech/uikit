import React from 'react';
import classnames from 'classnames';

import UikButton from '../UikButton';

import cls from './menuDrop.module.scss';

interface DefaultDisplayComponentProps {
  className?: string;
  title?: string;
  onClick: () => void;
}

const DefaultDisplayComponent = ({ className, title, ...rest }: DefaultDisplayComponentProps) => (
  <UikButton
    className={ classnames(cls.defaultDisplayComponent, className) }
    contentClassName={ cls.btnContent }
    { ...rest }
  >
    {title ? title : <span>&middot;&middot;&middot;</span>}
  </UikButton>
);

export default DefaultDisplayComponent;
