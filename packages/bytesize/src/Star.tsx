import React from 'react'

export default function Star({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 2l4 10h10l-8 7l3 11l-9-7l-9 7l3-11l-8-7h10z"/></g></svg>
  )
}