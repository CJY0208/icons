import React from 'react'

export default function Ban({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M5.68 7.094A8 8 0 0 0 16.905 18.32L5.68 7.094zM7.094 5.68L18.32 16.906A8 8 0 0 0 7.094 5.68zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"/></g></svg>
  )
}