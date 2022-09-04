import React from 'react'

export default function EllipsisHorizontalCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48zm-90 234a26 26 0 1 1 26-26a26 26 0 0 1-26 26zm90 0a26 26 0 1 1 26-26a26 26 0 0 1-26 26zm90 0a26 26 0 1 1 26-26a26 26 0 0 1-26 26z" fill="currentColor"/></svg>
  )
}