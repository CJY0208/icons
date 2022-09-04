import React from 'react'

export default function TvSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M488 384H24a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h464a8 8 0 0 1 8 8v288a8 8 0 0 1-8 8z" fill="currentColor"/><rect x="112" y="400" width="288" height="32" rx="4" ry="4" fill="currentColor"/></svg>
  )
}