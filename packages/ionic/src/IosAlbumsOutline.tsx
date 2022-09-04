import React from 'react'

export default function IosAlbumsOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M464 144v288H48V144h416m16-16H32v320h448V128z" fill="currentColor"/><path d="M72 96h368v16H72z" fill="currentColor"/><path d="M104 64h304v16H104z" fill="currentColor"/></svg>
  )
}