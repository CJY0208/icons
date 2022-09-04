import React from 'react'

export default function IosPlayOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M144 124.9L353.8 256 144 387.1V124.9M128 96v320l256-160L128 96z" fill="currentColor"/></svg>
  )
}