import React from 'react'

export default function PauseSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M224 432h-80V80h80z" fill="currentColor"/><path d="M368 432h-80V80h80z" fill="currentColor"/></svg>
  )
}