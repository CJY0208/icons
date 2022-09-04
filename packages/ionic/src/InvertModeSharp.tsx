import React from 'react'

export default function InvertModeSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM256 432v-96a80 80 0 0 1 0-160V80c97.05 0 176 79 176 176s-78.95 176-176 176z" fill="currentColor"/><path d="M336 256a80 80 0 0 0-80-80v160a80 80 0 0 0 80-80z" fill="currentColor"/></svg>
  )
}