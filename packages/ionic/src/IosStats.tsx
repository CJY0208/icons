import React from 'react'

export default function IosStats({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M184 448h48c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8z" fill="currentColor"/><path d="M88 448h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8z" fill="currentColor"/><path d="M280.1 448h47.8c4.5 0 8.1-3.6 8.1-8.1V232.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1v207.8c0 4.5 3.6 8.1 8.1 8.1z" fill="currentColor"/><path d="M368 136.1v303.8c0 4.5 3.6 8.1 8.1 8.1h47.8c4.5 0 8.1-3.6 8.1-8.1V136.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1z" fill="currentColor"/></svg>
  )
}