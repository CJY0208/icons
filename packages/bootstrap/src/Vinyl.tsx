import React from 'react'

export default function Vinyl({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0z"/><path d="M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></g></svg>
  )
}