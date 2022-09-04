import React from 'react'

export default function SignOut({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M28 16H8m12-8l8 8l-8 8m-9 4H3V4h8"/></g></svg>
  )
}