import React from 'react'

export default function CardSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M32 416a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V222H32zm66-138a8 8 0 0 1 8-8h92a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8h-92a8 8 0 0 1-8-8z" fill="currentColor"/><path d="M464 80H48a16 16 0 0 0-16 16v66h448V96a16 16 0 0 0-16-16z" fill="currentColor"/></svg>
  )
}