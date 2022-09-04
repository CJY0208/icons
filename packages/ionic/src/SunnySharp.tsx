import React from 'react'

export default function SunnySharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M234 26h44v92h-44z" fill="currentColor"/><path d="M234 394h44v92h-44z" fill="currentColor"/><path d="M338.025 142.857l65.054-65.054l31.113 31.113l-65.054 65.054z" fill="currentColor"/><path d="M77.815 403.074l65.054-65.054l31.113 31.113l-65.054 65.054z" fill="currentColor"/><path d="M394 234h92v44h-92z" fill="currentColor"/><path d="M26 234h92v44H26z" fill="currentColor"/><path d="M338.029 369.14l31.112-31.113l65.054 65.054l-31.112 31.112z" fill="currentColor"/><path d="M77.802 108.92l31.113-31.113l65.054 65.054l-31.113 31.112z" fill="currentColor"/><path d="M256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102z" fill="currentColor"/></svg>
  )
}