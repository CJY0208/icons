import React from 'react'

export default function NavigateSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M480 32L32 240h240v240L480 32z" fill="currentColor"/></svg>
  )
}