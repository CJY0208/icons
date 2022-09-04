import React from 'react'

export default function Compose({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M27 15v15H2V5h15m13 1l-4-4L9 19l-2 6l6-2zm-8 0l4 4zM9 19l4 4z"/></g></svg>
  )
}