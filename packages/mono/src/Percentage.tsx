import React from 'react'

export default function Percentage({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0zM17 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4zM7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" fill="currentColor"/></g></svg>
  )
}