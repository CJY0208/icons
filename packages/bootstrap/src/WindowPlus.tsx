import React from 'react'

export default function WindowPlus({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M2.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zM4 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0z"/><path d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2z"/><path d="M16 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5z"/></g></svg>
  )
}