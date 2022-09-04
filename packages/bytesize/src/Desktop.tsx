import React from 'react'

export default function Desktop({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 29s0-5 6-5s6 5 6 5H10zM2 6v17h28V6H2z"/></g></svg>
  )
}