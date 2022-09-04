import React from 'react'

export default function User({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 11c0 5-3 9-6 9s-6-4-6-9s2-8 6-8s6 3 6 8zM4 30h24c0-9-6-10-12-10S4 21 4 30z"/></g></svg>
  )
}