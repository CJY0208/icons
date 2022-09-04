import React from 'react'

export default function Code({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 9l-7 8l7 8M22 9l7 8l-7 8M18 7l-4 20"/></g></svg>
  )
}