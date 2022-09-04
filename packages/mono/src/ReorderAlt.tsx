import React from 'react'

export default function ReorderAlt({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M8.5 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm0 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm5-12a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm-2 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" fill="currentColor"/></g></svg>
  )
}