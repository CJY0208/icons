import React from 'react'

export default function Underline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M18 4a1 1 0 1 0-2 0v7a4 4 0 0 1-8 0V4a1 1 0 1 0-2 0v7a6 6 0 0 0 12 0V4zM7 19a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7z" fill="currentColor"/></g></svg>
  )
}