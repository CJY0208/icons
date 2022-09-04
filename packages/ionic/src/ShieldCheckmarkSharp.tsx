import React from 'react'

export default function ShieldCheckmarkSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M479.07 111.36l-.79-12.53l-12.36-2.21c-86.5-15.52-122.61-26.74-203.33-63.2l-6.59-3l-6.59 3C168.69 69.88 132.58 81.1 46.08 96.62l-12.36 2.21l-.79 12.53c-3.85 61.11 4.36 118.05 24.43 169.24A349.47 349.47 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73l6 2.41l6-2.41c10.83-4.36 67.6-29 121.07-85.73a349.47 349.47 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24zm-252.91 216L153.37 256l22.4-22.86l48.47 47.49l110.13-127.2l24.2 20.94z" fill="currentColor"/></svg>
  )
}