import React from 'react'

export default function ChatLeftDotsFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0a1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"/></g></svg>
  )
}