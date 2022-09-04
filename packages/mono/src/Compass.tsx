import React from 'react'

export default function Compass({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm1.414 11.414l2.122-4.95l-4.95 2.122l-2.122 4.95l4.95-2.122z" fill="currentColor"/></g></svg>
  )
}