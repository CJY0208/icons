import React from 'react'

export default function Fullscreen({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 12V4h8m8 0h8v8M4 20v8h8m16-8v8h-8"/></g></svg>
  )
}