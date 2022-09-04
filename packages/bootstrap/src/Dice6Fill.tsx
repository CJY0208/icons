import React from 'react'

export default function Dice6Fill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zM12 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zM4 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"/></g></svg>
  )
}