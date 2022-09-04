import React from 'react'

export default function WindowStack({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M4.5 6a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zM6 6a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0z"/><path d="M12 1a2 2 0 0 1 2 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12z"/></g></svg>
  )
}