import React from 'react'

export default function Edit({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M30 7l-5-5L5 22l-2 7l7-2zm-9-1l5 5zM5 22l5 5z"/></g></svg>
  )
}