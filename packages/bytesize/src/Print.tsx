import React from 'react'

export default function Print({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 25H2V9h28v16h-5M7 19v11h18V19zM25 9V2H7v7m15 5h3"/></g></svg>
  )
}