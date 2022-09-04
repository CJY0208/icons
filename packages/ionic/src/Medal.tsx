import React from 'react'

export default function Medal({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><circle cx="256" cy="352" r="32" fill="currentColor"/><path d="M99.78 32a48 48 0 0 0-42.94 26.53l-31 62A48.26 48.26 0 0 0 24.28 160h278.2a4 4 0 0 0 3.39-1.87l75.5-120A4 4 0 0 0 378 32z" fill="currentColor"/><path d="M486.17 120.56l-31-62a47.7 47.7 0 0 0-32.79-25.46L342.5 160L298 231.08a128 128 0 0 0-84 0l-23.32-37.2a4 4 0 0 0-3.39-1.88H51.14a4 4 0 0 0-3.36 6.16l82.7 128.73a128 128 0 1 0 251 0L483.62 168a48.22 48.22 0 0 0 2.55-47.44zm-226 295.31a64 64 0 1 1 59.69-59.69a64.08 64.08 0 0 1-59.68 59.69z" fill="currentColor"/></svg>
  )
}