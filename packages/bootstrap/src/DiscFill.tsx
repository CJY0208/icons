import React from 'react'

export default function DiscFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0zM4 8a4 4 0 0 1 4-4a.5.5 0 0 0 0-1a5 5 0 0 0-5 5a.5.5 0 0 0 1 0zm9 0a.5.5 0 1 0-1 0a4 4 0 0 1-4 4a.5.5 0 0 0 0 1a5 5 0 0 0 5-5z"/></g></svg>
  )
}