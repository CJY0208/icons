import React from 'react'

export default function Feed({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="26" r="2" fill="currentColor"/><path d="M4 15c7 0 13 6 13 13M4 6c13 0 22 9 22 22"/></g></svg>
  )
}