import React from 'react'

export default function BrowsersOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><rect x="48" y="64" width="416" height="384" rx="48" ry="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M397.82 64H114.18C77.69 64 48 94.15 48 131.2V176h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-44.8c0-37.05-29.69-67.2-66.18-67.2z" fill="currentColor"/></svg>
  )
}