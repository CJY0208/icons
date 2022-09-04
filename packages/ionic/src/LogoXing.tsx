import React from 'react'

export default function LogoXing({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M313.8 303.9L469 32H365L209.4 303.8a1.35 1.35 0 0 0 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7a1.74 1.74 0 0 1 .1-1.4z" fill="currentColor"/><path d="M221.9 216.2L163 113a2 2 0 0 0-2-1H65l58.9 104.4a1.13 1.13 0 0 1 .1.8L43 352h96.8a1.54 1.54 0 0 0 1.6-.9l80.5-133.7a2.44 2.44 0 0 0 0-1.2z" fill="currentColor"/></svg>
  )
}