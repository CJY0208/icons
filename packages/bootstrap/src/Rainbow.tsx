import React from 'react'

export default function Rainbow({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M8 4.5a7 7 0 0 0-7 7a.5.5 0 0 1-1 0a8 8 0 1 1 16 0a.5.5 0 0 1-1 0a7 7 0 0 0-7-7zm0 2a5 5 0 0 0-5 5a.5.5 0 0 1-1 0a6 6 0 1 1 12 0a.5.5 0 0 1-1 0a5 5 0 0 0-5-5zm0 2a3 3 0 0 0-3 3a.5.5 0 0 1-1 0a4 4 0 1 1 8 0a.5.5 0 0 1-1 0a3 3 0 0 0-3-3zm0 2a1 1 0 0 0-1 1a.5.5 0 0 1-1 0a2 2 0 1 1 4 0a.5.5 0 0 1-1 0a1 1 0 0 0-1-1z"/></g></svg>
  )
}