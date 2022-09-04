import React from 'react'

export default function UserAdd({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M10 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM4 8a6 6 0 1 1 12 0A6 6 0 0 1 4 8zm15 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1zM6.5 18C5.24 18 4 19.213 4 21a1 1 0 1 1-2 0c0-2.632 1.893-5 4.5-5h7c2.607 0 4.5 2.368 4.5 5a1 1 0 1 1-2 0c0-1.787-1.24-3-2.5-3h-7z" fill="currentColor"/></g></svg>
  )
}