import React from 'react'

export default function BanSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM432 256a175.09 175.09 0 0 1-35.8 106.26L149.74 115.8A175.09 175.09 0 0 1 256 80c97.05 0 176 79 176 176zm-352 0a175.09 175.09 0 0 1 35.8-106.26L362.26 396.2A175.09 175.09 0 0 1 256 432c-97 0-176-78.95-176-176z" fill="currentColor"/></svg>
  )
}