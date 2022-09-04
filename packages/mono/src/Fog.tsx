import React from 'react'

export default function Fog({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M11 6a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1zm-9 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm3 3a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H5zm12 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4zm0-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2zM7 18a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm-4-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3zM5 5a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H5z" fill="currentColor"/></g></svg>
  )
}