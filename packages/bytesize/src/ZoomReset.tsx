import React from 'react'

export default function ZoomReset({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="14" cy="14" r="12"/><path d="M23 23l7 7"/><path d="M9 12V9h3m4 0h3v3M9 16v3h3m7-3v3h-3"/></g></svg>
  )
}