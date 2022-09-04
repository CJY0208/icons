import React from 'react'

export default function QrCodeOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><rect x="336" y="336" width="80" height="80" rx="8" ry="8" fill="currentColor"/><rect x="272" y="272" width="64" height="64" rx="8" ry="8" fill="currentColor"/><rect x="416" y="416" width="64" height="64" rx="8" ry="8" fill="currentColor"/><rect x="432" y="272" width="48" height="48" rx="8" ry="8" fill="currentColor"/><rect x="272" y="432" width="48" height="48" rx="8" ry="8" fill="currentColor"/><rect x="336" y="96" width="80" height="80" rx="8" ry="8" fill="currentColor"/><rect x="288" y="48" width="176" height="176" rx="16" ry="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><rect x="96" y="96" width="80" height="80" rx="8" ry="8" fill="currentColor"/><rect x="48" y="48" width="176" height="176" rx="16" ry="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><rect x="96" y="336" width="80" height="80" rx="8" ry="8" fill="currentColor"/><rect x="48" y="288" width="176" height="176" rx="16" ry="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}