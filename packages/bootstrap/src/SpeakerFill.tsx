import React from 'react'

export default function SpeakerFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M9 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm-2.5 6.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z"/><path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm6 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0zM8 7a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7z"/></g></svg>
  )
}