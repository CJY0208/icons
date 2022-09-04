import React from 'react'

export default function PlayBackSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M496 400L256 256l240-144v288z" fill="currentColor"/><path d="M256 400L16 256l240-144v288z" fill="currentColor"/></svg>
  )
}