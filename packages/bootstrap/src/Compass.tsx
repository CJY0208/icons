import React from 'react'

export default function Compass({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0z"/><path d="M6.94 7.44l4.95-2.83l-2.83 4.95l-4.949 2.83l2.828-4.95z"/></g></svg>
  )
}