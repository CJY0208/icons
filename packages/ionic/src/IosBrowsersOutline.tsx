import React from 'react'

export default function IosBrowsersOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 144v304h303.9V144H64zm287.9 288H80V160h271.9v272z" fill="currentColor"/><path d="M448 64H144v64h16V80h272v272h-48v16h64z" fill="currentColor"/></svg>
  )
}