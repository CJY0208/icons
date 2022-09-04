import React from 'react'

export default function FlashSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M432 208H288l32-192L80 304h144l-32 192z" fill="currentColor"/></svg>
  )
}