import React from 'react'

export default function GripHorizontal({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M2 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/></g></svg>
  )
}