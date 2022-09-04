import React from 'react'

export default function BoomboxFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M14.5.5a.5.5 0 0 0-1 0V2H1a1 1 0 0 0-1 1v2h16V3a1 1 0 0 0-1-1h-.5V.5zM2.5 4a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm7.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm1.5.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm-7-1h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm-2 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zm.5-1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm6.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zm0-1a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1z"/><path d="M16 6H0v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6zM4.5 13a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5zm7 0a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5z"/></g></svg>
  )
}