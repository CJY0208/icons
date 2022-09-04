import React from 'react'

export default function AlignTop({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"/><path d="M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z"/></g></svg>
  )
}