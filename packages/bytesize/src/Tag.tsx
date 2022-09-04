import React from 'react'

export default function Tag({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="24" cy="8" r="2"/><path d="M2 18L18 2h12v12L14 30z"/></g></svg>
  )
}