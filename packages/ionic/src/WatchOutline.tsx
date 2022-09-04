import React from 'react'

export default function WatchOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><rect x="112" y="112" width="288" height="288" rx="64" ry="64" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M336 400v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}