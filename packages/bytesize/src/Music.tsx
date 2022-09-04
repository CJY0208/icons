import React from 'react'

export default function Music({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 25V6l13-3v20M11 13l13-3"/><ellipse cx="7" cy="25" rx="4" ry="5"/><ellipse cx="20" cy="23" rx="4" ry="5"/></g></svg>
  )
}