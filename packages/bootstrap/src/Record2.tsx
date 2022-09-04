import React from 'react'

export default function Record2({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/><path d="M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"/></g></svg>
  )
}