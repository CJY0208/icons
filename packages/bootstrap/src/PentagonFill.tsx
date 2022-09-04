import React from 'react'

export default function PentagonFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M8 0l8 6.5l-3 9.5H3L0 6.5L8 0z"/></g></svg>
  )
}