import * as React from 'react'

import s from './content-title.module.scss'

interface UikContentTitleProps {
  children: React.ReactNode,
}

const UikContentTitle = ({ children, ...rest }: UikContentTitleProps) =>
  <span
    className={s.wrapper}
    {...rest}
  >
    {children}
  </span>


export default UikContentTitle