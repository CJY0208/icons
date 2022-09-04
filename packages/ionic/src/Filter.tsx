import React from 'react'

export default function Filter({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48z" fill="currentColor"/><path d="M392 280H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48z" fill="currentColor"/><path d="M296 392h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48z" fill="currentColor"/></svg>
  )
}