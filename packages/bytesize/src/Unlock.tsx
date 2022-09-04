import React from 'react'

export default function Unlock({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 15v15h22V15zm4 0C9 7 9 3 16 3s7 5 7 6m-7 11v3"/><circle cx="16" cy="24" r="1"/></g></svg>
  )
}