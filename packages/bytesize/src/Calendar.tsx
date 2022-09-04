import React from 'react'

export default function Calendar({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 6v24h28V6zm0 9h28M7 3v6m6-6v6m6-6v6m6-6v6"/></g></svg>
  )
}