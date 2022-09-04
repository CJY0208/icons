import React from 'react'

export default function AppsSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><rect x="48" y="48" width="112" height="112" rx="8" ry="8" fill="currentColor"/><rect x="200" y="48" width="112" height="112" rx="8" ry="8" fill="currentColor"/><rect x="352" y="48" width="112" height="112" rx="8" ry="8" fill="currentColor"/><rect x="48" y="200" width="112" height="112" rx="8" ry="8" fill="currentColor"/><rect x="200" y="200" width="112" height="112" rx="8" ry="8" fill="currentColor"/><rect x="352" y="200" width="112" height="112" rx="8" ry="8" fill="currentColor"/><rect x="48" y="352" width="112" height="112" rx="8" ry="8" fill="currentColor"/><rect x="200" y="352" width="112" height="112" rx="8" ry="8" fill="currentColor"/><rect x="352" y="352" width="112" height="112" rx="8" ry="8" fill="currentColor"/></svg>
  )
}