import React from 'react'

export default function WebcamFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M6.644 11.094a.5.5 0 0 1 .356-.15h2a.5.5 0 0 1 .356.15c.175.177.39.347.603.496a7.166 7.166 0 0 0 .752.456l.01.006h.003A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.002-.001l.01-.006a3.517 3.517 0 0 0 .214-.116a7.5 7.5 0 0 0 .539-.34c.214-.15.428-.319.603-.496zM7 6.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0z"/><path d="M2 3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H2zm6 1.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4zM12.5 7a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1z"/></g></svg>
  )
}