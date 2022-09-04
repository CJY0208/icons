import React from 'react'

export default function GitCommit({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M448 224h-68a128 128 0 0 0-247.9 0H64a32 32 0 0 0 0 64h68.05A128 128 0 0 0 380 288h68a32 32 0 0 0 0-64zm-192 96a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64z" fill="currentColor"/></svg>
  )
}