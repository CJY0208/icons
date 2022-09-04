import React from 'react'

export default function ToggleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288zm0 230a86 86 0 1 1 86-86a85.88 85.88 0 0 1-86 86z" fill="currentColor"/></svg>
  )
}