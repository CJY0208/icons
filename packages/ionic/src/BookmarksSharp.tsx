import React from 'react'

export default function BookmarksSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M112 0v48h304v368l48 32V0H112z" fill="currentColor"/><path d="M48 80v432l168-124l168 124V80H48z" fill="currentColor"/></svg>
  )
}