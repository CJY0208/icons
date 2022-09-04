import React from 'react'

export default function ToggleOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><circle cx="368" cy="256" r="128" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="16" y="128" width="480" height="256" rx="128" ry="128" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}