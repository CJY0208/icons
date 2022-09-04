import React from 'react'

export default function TodaySharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32zm80-238.86a9.14 9.14 0 0 1 9.14-9.14h109.72a9.14 9.14 0 0 1 9.14 9.14v109.72a9.14 9.14 0 0 1-9.14 9.14H121.14a9.14 9.14 0 0 1-9.14-9.14z" fill="currentColor"/><path d="M456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64z" fill="currentColor"/></svg>
  )
}