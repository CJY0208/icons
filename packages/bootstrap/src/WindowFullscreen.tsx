import React from 'react'

export default function WindowFullscreen({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M3 3.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm1.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1z"/><path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5zM1 5V2h14v3H1zm0 1h14v8H1V6z"/></g></svg>
  )
}