import React from 'react'

export default function Boombox({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M2.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zm7.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zm-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm5.5 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0z"/><path d="M11.5 13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5zm0-1a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zM5 10.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0z"/><path d="M7 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0zm-1 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0z"/><path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0zM1 3v3h14V3H1zm14 4H1v7h14V7z"/></g></svg>
  )
}