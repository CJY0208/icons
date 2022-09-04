import React from 'react'

export default function Tablet({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm14 0H6v16h12V4z" fill="currentColor"/><path d="M13 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"/></g></svg>
  )
}