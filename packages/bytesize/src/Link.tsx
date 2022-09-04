import React from 'react'

export default function Link({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 8s6-6 9-3s2 7-3 11s-8 5-10 1m0 7s-6 6-9 3s-2-7 3-11s8-5 10-1"/></g></svg>
  )
}