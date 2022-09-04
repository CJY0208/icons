import React from 'react'

export default function PintSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M399 99.29L394 16H118.45L113 99.26c-1.29 19.24-2.23 33.14 3.73 65.66c1.67 9.11 5.22 22.66 9.73 39.82c12.61 48 33.71 128.36 33.71 195.63V496h191.68v-95.62c0-77.09 21.31-153.29 34-198.81c4.38-15.63 7.83-28 9.41-36.62c6.01-32.51 5.07-46.42 3.74-65.66zM146.23 80l2-32h215.52l2 32z" fill="currentColor"/></svg>
  )
}