import React from 'react'

export default function DeviceSsd({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M4.75 4a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75h-6.5zM5 8V5h6v3H5zm0-5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm7 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zM4.5 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zm7 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1z"/><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm11 12V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 0 1-1zm-7.25 1v-2H5v2h.75zm1.75 0v-2h-.75v2h.75zm1.75 0v-2H8.5v2h.75zM11 13h-.75v2H11v-2z"/></g></svg>
  )
}