import React from 'react'

export default function UserCheck({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M10 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM4 8a6 6 0 1 1 12 0A6 6 0 0 1 4 8zm17.664 3.253a1 1 0 0 1 .083 1.411l-2.666 3a1 1 0 0 1-1.495 0l-1.333-1.5a1 1 0 0 1 1.494-1.328l.586.659l1.92-2.16a1 1 0 0 1 1.411-.082zM6.5 18C5.24 18 4 19.213 4 21a1 1 0 1 1-2 0c0-2.632 1.893-5 4.5-5h7c2.607 0 4.5 2.368 4.5 5a1 1 0 1 1-2 0c0-1.787-1.24-3-2.5-3h-7z" fill="currentColor"/></g></svg>
  )
}