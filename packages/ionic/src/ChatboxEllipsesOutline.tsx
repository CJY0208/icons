import React from 'react'

export default function ChatboxEllipsesOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="160" cy="216" r="32" fill="currentColor"/><circle cx="256" cy="216" r="32" fill="currentColor"/><circle cx="352" cy="216" r="32" fill="currentColor"/></svg>
  )
}