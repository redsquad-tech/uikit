import React from 'react';
import classnames from 'classnames';

import cls from './widget-table.module.scss';

interface UikWidgetTableProps {
  children?: React.ReactNode;
  className?: string;
}

const UikWidgetTable = ({
  children,
  className,
  ...rest
}: UikWidgetTableProps) => (
  <table
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </table>
);

export default UikWidgetTable;
