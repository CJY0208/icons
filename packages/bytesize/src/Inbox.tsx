import React from 'react'

export default function Inbox({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 15v10h28V15l-4-8H6zm0 0h8s1 5 6 5s6-5 6-5h8"/></g></svg>
  )
}