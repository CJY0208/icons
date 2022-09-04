import React from 'react'

export default function Mobile({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5zm10 0H8v14h8V5z" fill="currentColor"/><path d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"/></g></svg>
  )
}