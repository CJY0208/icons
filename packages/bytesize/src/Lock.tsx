import React from 'react'

export default function Lock({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 15v15h22V15zm4 0C9 9 9 5 16 5s7 4 7 10m-7 5v3"/><circle cx="16" cy="24" r="1"/></g></svg>
  )
}