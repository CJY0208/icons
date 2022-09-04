import React from 'react'

export default function Filter({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 5s4-2 14-2s14 2 14 2L19 18v9l-6 3V18L2 5z"/></g></svg>
  )
}