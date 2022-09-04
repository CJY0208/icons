import React from 'react'

export default function GiftSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M346 110a34 34 0 0 0-68 0v34h34a34 34 0 0 0 34-34z" fill="none"/><path d="M234 110a34 34 0 1 0-34 34h34z" fill="none"/><path d="M234 144h44v112h164a22 22 0 0 0 22-22v-68a22 22 0 0 0-22-22h-59.82A77.95 77.95 0 0 0 256 55.79A78 78 0 0 0 129.81 144H70a22 22 0 0 0-22 22v68a22 22 0 0 0 22 22h164zm44-34a34 34 0 1 1 34 34h-34zm-112 0a34 34 0 1 1 68 0v34h-34a34 34 0 0 1-34-34z" fill="currentColor"/><path d="M278 480h132a22 22 0 0 0 22-22V288H278z" fill="currentColor"/><path d="M80 458a22 22 0 0 0 22 22h132V288H80z" fill="currentColor"/></svg>
  )
}