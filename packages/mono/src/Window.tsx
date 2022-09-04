import React from 'react'

export default function Window({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm16 2v4H4V5h16zM4 11h16v8H4v-8zm6-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0zM6 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"/></g></svg>
  )
}