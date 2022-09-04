import React from 'react'

export default function TrainSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M384 32h-64a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16h-64c-16 0-32 16-32 32v288c0 23.92 160 80 160 80s160-56.74 160-80V64c0-16-16-32-32-32zM256 352a48 48 0 1 1 48-48a48 48 0 0 1-48 48zm112-152a8 8 0 0 1-8 8H152a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8z" fill="currentColor"/><path d="M314 432l15.32 16H182.58L198 432l-32-13l-76.62 77h45.2l16-16h210.74l16 16h45.3l-76.36-77.75L314 432z" fill="currentColor"/></svg>
  )
}