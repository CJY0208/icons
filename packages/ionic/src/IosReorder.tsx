import React from 'react'

export default function IosReorder({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M80 304h352v16H80z" fill="currentColor"/><path d="M80 248h352v16H80z" fill="currentColor"/><path d="M80 192h352v16H80z" fill="currentColor"/></svg>
  )
}