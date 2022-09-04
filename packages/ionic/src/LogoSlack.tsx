import React from 'react'

export default function LogoSlack({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M126.12 315.1A47.06 47.06 0 1 1 79.06 268h47.06z" fill="currentColor"/><path d="M149.84 315.1a47.06 47.06 0 0 1 94.12 0v117.84a47.06 47.06 0 1 1-94.12 0z" fill="currentColor"/><path d="M196.9 126.12A47.06 47.06 0 1 1 244 79.06v47.06z" fill="currentColor"/><path d="M196.9 149.84a47.06 47.06 0 0 1 0 94.12H79.06a47.06 47.06 0 0 1 0-94.12z" fill="currentColor"/><path d="M385.88 196.9a47.06 47.06 0 1 1 47.06 47.1h-47.06z" fill="currentColor"/><path d="M362.16 196.9a47.06 47.06 0 0 1-94.12 0V79.06a47.06 47.06 0 1 1 94.12 0z" fill="currentColor"/><path d="M315.1 385.88a47.06 47.06 0 1 1-47.1 47.06v-47.06z" fill="currentColor"/><path d="M315.1 362.16a47.06 47.06 0 0 1 0-94.12h117.84a47.06 47.06 0 1 1 0 94.12z" fill="currentColor"/></svg>
  )
}