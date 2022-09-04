import React from 'react'

export default function Drag({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M0 144h512v32H0z" fill="currentColor"/><path d="M0 240h512v32H0z" fill="currentColor"/><path d="M0 336h512v32H0z" fill="currentColor"/></svg>
  )
}