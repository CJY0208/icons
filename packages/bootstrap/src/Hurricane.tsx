import React from 'react'

export default function Hurricane({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M6.999 2.6A5.5 5.5 0 0 1 15 7.5a.5.5 0 0 0 1 0a6.5 6.5 0 1 0-13 0a5 5 0 0 0 6.001 4.9A5.5 5.5 0 0 1 1 7.5a.5.5 0 0 0-1 0a6.5 6.5 0 1 0 13 0a5 5 0 0 0-6.001-4.9zM10 7.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"/></g></svg>
  )
}