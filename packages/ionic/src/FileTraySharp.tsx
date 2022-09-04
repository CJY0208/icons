import React from 'react'

export default function FileTraySharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316z" fill="currentColor"/></svg>
  )
}