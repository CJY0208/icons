import React from 'react'

export default function WindowSplit({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M2.5 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1z"/><path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h6.5v8H2a1 1 0 0 1-1-1zm7.5 1V6H15v7a1 1 0 0 1-1 1H8.5z"/></g></svg>
  )
}