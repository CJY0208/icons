import React from 'react'

export default function DeviceHdd({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M12 2.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm-7.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zM5 2.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zM8 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"/><path d="M12 7a4 4 0 0 1-3.937 4c-.537.813-1.02 1.515-1.181 1.677a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588A4 4 0 0 1 8 3a4 4 0 0 1 4 4zm-1 0a3 3 0 1 0-3.891 2.865c.667-.44 1.396-.91 1.955-1.268c.224-.144.483.115.34.34l-.62.96A3.001 3.001 0 0 0 11 7z"/><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/></g></svg>
  )
}