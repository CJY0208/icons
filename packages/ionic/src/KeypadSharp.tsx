import React from 'react'

export default function KeypadSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><rect x="80" y="16" width="96" height="96" rx="8" ry="8" fill="currentColor"/><rect x="208" y="16" width="96" height="96" rx="8" ry="8" fill="currentColor"/><rect x="336" y="16" width="96" height="96" rx="8" ry="8" fill="currentColor"/><rect x="80" y="144" width="96" height="96" rx="8" ry="8" fill="currentColor"/><rect x="208" y="144" width="96" height="96" rx="8" ry="8" fill="currentColor"/><rect x="336" y="144" width="96" height="96" rx="8" ry="8" fill="currentColor"/><rect x="80" y="272" width="96" height="96" rx="8" ry="8" fill="currentColor"/><rect x="208" y="272" width="96" height="96" rx="8" ry="8" fill="currentColor"/><rect x="208" y="400" width="96" height="96" rx="8" ry="8" fill="currentColor"/><rect x="336" y="272" width="96" height="96" rx="8" ry="8" fill="currentColor"/></svg>
  )
}