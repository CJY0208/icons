import React from 'react'

export default function CellularSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M496 432h-96V80h96z" fill="currentColor"/><path d="M368 432h-96V160h96z" fill="currentColor"/><path d="M240 432h-96V224h96z" fill="currentColor"/><path d="M112 432H16V288h96z" fill="currentColor"/></svg>
  )
}