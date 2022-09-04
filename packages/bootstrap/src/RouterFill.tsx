import React from 'react'

export default function RouterFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0a.5.5 0 1 0 .707-.707a4.5 4.5 0 0 0-6.364 0a.5.5 0 0 0 .707.707z"/><path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0a.5.5 0 0 0 .708-.708a2.5 2.5 0 0 0-3.536 0a.5.5 0 0 0 .707.707z"/><path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86L2.974 2.342zM2.5 11a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm4.5-.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0zm2.5.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm1.5-.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0zm2 0a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0z"/><path d="M8.5 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0z"/></g></svg>
  )
}