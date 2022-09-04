import React from 'react'

export default function Eye({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="17" cy="15" r="1"/><circle cx="16" cy="16" r="6"/><path d="M2 16S7 6 16 6s14 10 14 10s-5 10-14 10S2 16 2 16z"/></g></svg>
  )
}