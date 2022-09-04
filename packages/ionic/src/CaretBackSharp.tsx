import React from 'react'

export default function CaretBackSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M368 64L144 256l224 192V64z" fill="currentColor"/></svg>
  )
}