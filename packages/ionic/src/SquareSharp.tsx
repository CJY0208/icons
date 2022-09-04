import React from 'react'

export default function SquareSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M48 48h416v416H48z" fill="currentColor"/></svg>
  )
}