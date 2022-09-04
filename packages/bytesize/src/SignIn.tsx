import React from 'react'

export default function SignIn({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 16h20m-8-8l8 8l-8 8m6-20h8v24h-8"/></g></svg>
  )
}