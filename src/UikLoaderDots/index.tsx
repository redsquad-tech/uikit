import * as React from 'react'
import classnames from 'classnames'
import s from './loader-dots.module.scss'

// @flow
type UikLoaderDots = {
  className?: String
}

const LoaderDots = ({
  className,
}: UikLoaderDots) => (
  <div className={ classnames(s.dotloader, className, 'btn-loader') }>
    <div className={ s.dotloader1 } />
    <div className={ s.dotloader2 } />
    <div className={ s.dotloader3 } />
  </div>
)


LoaderDots.defaultProps = {
  className: null,
}

export default LoaderDots
