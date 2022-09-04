import React from 'react'

export default function UiRadiosGrid({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M3.5 15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5zm9-9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5zm0 9a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5zM16 3.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0zm-9 9a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0zm5.5 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7zm-9-11a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm0 2a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7z"/></g></svg>
  )
}