import React from 'react'

export default function FullscreenExit({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 12h8V4m8 0v8h8M4 20h8v8m16-8h-8v8"/></g></svg>
  )
}