import React from 'react'

export default function Calendar3WeekFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 14V3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-8a1 1 0 1 0 2 0a1 1 0 0 0-2 0zM5 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0zm5-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2zM2 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0z"/></g></svg>
  )
}