import React from 'react'

export default function PentagonHalf({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M8 1.288l6.842 5.56L12.267 15H8V1.288zM16 6.5L8 0L0 6.5L3 16h10l3-9.5z"/></g></svg>
  )
}