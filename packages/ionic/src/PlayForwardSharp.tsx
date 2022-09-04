import React from 'react'

export default function PlayForwardSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M16 400l240-144L16 112v288z" fill="currentColor"/><path d="M256 400l240-144l-240-144v288z" fill="currentColor"/></svg>
  )
}