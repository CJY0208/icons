import React from 'react'

export default function CalendarClearSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V192H32z" fill="currentColor"/><path d="M480 87.77A23.8 23.8 0 0 0 456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448z" fill="currentColor"/></svg>
  )
}