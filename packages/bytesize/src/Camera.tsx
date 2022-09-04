import React from 'react'

export default function Camera({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 8h7l3-4h8l3 4h7v18H2z"/><circle cx="16" cy="16" r="5"/></g></svg>
  )
}