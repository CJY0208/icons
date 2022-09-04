import React from 'react'

export default function DeviceSsdFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M5 8V4h6v4H5z"/><path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm9 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zM3.5 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zm9.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zM4.75 3h6.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-6.5A.75.75 0 0 1 4 8.25v-4.5A.75.75 0 0 1 4.75 3zM5 12h6a1 1 0 0 1 1 1v2h-1v-2h-.75v2h-1v-2H8.5v2h-1v-2h-.75v2h-1v-2H5v2H4v-2a1 1 0 0 1 1-1z"/></g></svg>
  )
}