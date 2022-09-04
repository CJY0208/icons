import React from 'react'

export default function ModemFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M7 0a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 1.404 1.497c-.35.305-.872.678-1.628 1.056A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .224-.947c-.756-.378-1.278-.75-1.628-1.056A1.5 1.5 0 0 0 10.5 12.5v-11A1.5 1.5 0 0 0 9 0H7zm1 3a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zM8 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1z"/></g></svg>
  )
}