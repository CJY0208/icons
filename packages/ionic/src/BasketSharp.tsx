import React from 'react'

export default function BasketSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M339.2 217.6L256 106.67L172.8 217.6l-25.6-19.2l96-128a16 16 0 0 1 25.6 0l96 128z" fill="currentColor"/><path d="M441.59 192H70.41a12 12 0 0 0-11.68 14.77L112.59 434h286.82l53.86-227.23A12 12 0 0 0 441.59 192zM256 351.66A37.71 37.71 0 1 1 293.89 314A37.88 37.88 0 0 1 256 351.66z" fill="currentColor"/></svg>
  )
}