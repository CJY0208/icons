import React from 'react'

export default function Minimize({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M21.707 3.707a1 1 0 0 0-1.414-1.414L16 6.586V5a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-1.586l4.293-4.293zm-19.414 18a1 1 0 0 1 0-1.414L6.586 16H5a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.586l-4.293 4.293a1 1 0 0 1-1.414 0z" fill="currentColor"/></g></svg>
  )
}