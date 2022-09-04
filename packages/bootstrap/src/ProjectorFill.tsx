import React from 'react'

export default function ProjectorFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M2 4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zM14 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm-12 1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/></g></svg>
  )
}