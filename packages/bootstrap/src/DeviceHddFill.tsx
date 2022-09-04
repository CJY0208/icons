import React from 'react'

export default function DeviceHddFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M8.785 9.896A3.001 3.001 0 0 0 8 4a3 3 0 0 0-.891 5.865c.667-.44 1.396-.91 1.955-1.268c.224-.144.483.115.34.34l-.62.96zM9 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/><path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm9 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm0 13a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm-9.5.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zM4 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm2.882 11.177a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588a4 4 0 1 1 1.946.47c-.537.813-1.02 1.515-1.181 1.677z"/></g></svg>
  )
}