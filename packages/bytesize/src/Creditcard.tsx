import React from 'react'

export default function Creditcard({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 7v18h28V7zm3 11h4m-4 3h6"/><path d="M2 11v2h28v-2z" fill="currentColor"/></g></svg>
  )
}