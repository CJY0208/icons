import React from 'react'

export default function ConnectionBars({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M80 352h64v64H80z" fill="currentColor"/><path d="M176 288h64v128h-64z" fill="currentColor"/><path d="M272 192h64v224h-64z" fill="currentColor"/><path d="M368 96h64v320h-64z" fill="currentColor"/></svg>
  )
}