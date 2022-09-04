import React from 'react'

export default function ShapesOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M336 320H32L184 48l152 272z"/><path d="M265.32 194.51A144 144 0 1 1 192 320" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}