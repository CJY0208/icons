import React from 'react'

export default function Sad({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM184 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24zm-23.67 149.83c12-40.3 50.2-69.83 95.62-69.83s83.62 29.53 95.71 69.83a8 8 0 0 1-7.82 10.17H168.15a8 8 0 0 1-7.82-10.17zM328 256a24 24 0 1 1 24-24a23.94 23.94 0 0 1-24 24z" fill="currentColor"/></svg>
  )
}