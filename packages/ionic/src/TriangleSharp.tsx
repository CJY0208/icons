import React from 'react'

export default function TriangleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 32L20 464h472L256 32z" fill="currentColor"/></svg>
  )
}