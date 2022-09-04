import React from 'react'

export default function Comment({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm14 8.586L11.586 19H5V5h14v6.586zM14.414 19L19 14.414V19h-4.586z" fill="currentColor"/></g></svg>
  )
}