import React from 'react';
import classnames from 'classnames';

import s from './btn.module.scss';

import UikLoaderDots from '../UikLoaderDots';

interface UikButtonProps {
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  href?: string;

  // appearence

  xs?: boolean;
  lg?: boolean;

  primary?: boolean;
  error?: boolean;
  success?: boolean;
  transparent?: boolean;

  clear?: boolean;
  isLoading?: boolean;
  // icon properties
  icon?: React.ReactNode;
  iconRight?: boolean;
  iconOnly?: boolean;
  noBorder?: boolean;
  dark?: boolean;
  isExpanded?: boolean;

  disabled?: boolean;

  to?: string;

  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default (props: UikButtonProps) => {
  const {
    primary,
    error,
    success,
    dark,
    transparent,
    children,
    className,
    contentClassName,
    xs,
    lg,
    clear,
    isLoading,
    icon,
    iconRight,
    iconOnly,
    noBorder,
    isExpanded,
    onClick,
    ...rest
  } = props;

  const classes = classnames(
    s.base,
    {
      [s.primary]: primary,
      [s.error]: error,
      [s.success]: success,
      [s.dark]: dark,
      [s.xs]: xs,
      [s.lg]: lg,
      [s.clear]: clear,
      [s.isLoading]: isLoading,
      [s.hasIcon]: icon,
      [s.iconRight]: iconRight,
      [s.iconOnly]: iconOnly,
      [s.transparent]: transparent,
      [s.noBorder]: noBorder,
      [s.isExpanded]: isExpanded,
    },
    className,
  );

  // put props together so we don't have to repeat it
  const btnProps = {
    className: classes,
    ...rest,
  };

  return (
    <button
      onClick={e => onClick && onClick(e)}
      {...btnProps}
    >
      {
        icon && (
          <span className={s.iconWrapper}>
            {icon}
          </span>
        )
      }
      {
        isLoading && <UikLoaderDots className={s.loader} />
      }
      <span className={classnames(s.content, contentClassName)}>
        {children}
      </span>

    </button>
  );
};
