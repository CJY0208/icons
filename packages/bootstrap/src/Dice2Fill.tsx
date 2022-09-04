import React from 'react'

export default function Dice2Fill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z"/></g></svg>
  )
}