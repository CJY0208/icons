import React from 'react'

export default function YinYang({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0a1.167 1.167 0 0 1 2.334 0z"/><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1 8a7 7 0 0 1 7-7a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 0 0 7a7 7 0 0 1-7-7zm7 4.667a1.167 1.167 0 1 1 0-2.334a1.167 1.167 0 0 1 0 2.334z"/></g></svg>
  )
}