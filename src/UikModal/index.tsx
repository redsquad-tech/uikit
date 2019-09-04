import React from 'react';
import cn from 'classnames';

import style from './modal.module.scss';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  close: () => void;
  className?: string;
  show: boolean;
}

const UikModal = ({ children, close, className, show }: Props) => {
  return show ? (
    <div className={cn(style.modal, { [className as string] : !!className })} onClick={close}>
      {children}
    </div>
  ) : null;
};

export default UikModal;
