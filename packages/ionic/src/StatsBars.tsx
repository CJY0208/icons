import React from 'react'

export default function StatsBars({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M176 96h64v320h-64z" fill="currentColor"/><path d="M80 320h64v96H80z" fill="currentColor"/><path d="M272 256h64v160h-64z" fill="currentColor"/><path d="M368 192h64v224h-64z" fill="currentColor"/></svg>
  )
}