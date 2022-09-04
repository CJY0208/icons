import React from 'react'

export default function CheckmarkCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm-38 312.38l-80.6-89.57l23.79-21.41l56 62.22L350 153.46L374.54 174z" fill="currentColor"/></svg>
  )
}