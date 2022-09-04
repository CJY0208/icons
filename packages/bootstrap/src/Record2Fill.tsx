import React from 'react'

export default function Record2Fill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"/><path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"/></g></svg>
  )
}