import React from 'react'

export default function KeyFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8L14 9.5l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"/></g></svg>
  )
}