import React from 'react'

export default function VideocamOff({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M336 179.52A67.52 67.52 0 0 0 268.48 112h-79.2a4 4 0 0 0-2.82 6.83l142.71 142.71a4 4 0 0 0 6.83-2.82z" fill="currentColor"/><path d="M16 180v152a68 68 0 0 0 68 68h184a67.66 67.66 0 0 0 42.84-15.24a4 4 0 0 0 .33-6L54.41 122a4 4 0 0 0-4.87-.62A68 68 0 0 0 16 180z" fill="currentColor"/><path d="M464 384.39a32 32 0 0 1-13-2.77a15.77 15.77 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a15.77 15.77 0 0 1 2.71-1.54a32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32z" fill="currentColor"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M416 416L80 80"/></svg>
  )
}