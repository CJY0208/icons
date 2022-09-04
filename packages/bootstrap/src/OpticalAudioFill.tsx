import React from 'react'

export default function OpticalAudioFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M8 6a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm1 3a1 1 0 1 0-2 0a1 1 0 0 0 2 0z"/><path d="M2.5 15a.5.5 0 0 1-.5-.5v-3.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 1 .146-.354l2-2A.5.5 0 0 1 4.5 2h7a.5.5 0 0 1 .354.146l2 2A.5.5 0 0 1 14 4.5v2.05a2.5 2.5 0 0 1 0 4.9v3.05a.5.5 0 0 1-.5.5h-11zM8 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8z"/></g></svg>
  )
}