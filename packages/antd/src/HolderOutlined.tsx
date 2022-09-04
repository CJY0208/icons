import React from 'react'

export default function HolderOutlined({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M300 276.497a56 56 0 1 0 56-96.994a56 56 0 0 0-56 96.994zm0 284a56 56 0 1 0 56-96.994a56 56 0 0 0-56 96.994zM640 228a56 56 0 1 0 112 0a56 56 0 0 0-112 0zm0 284a56 56 0 1 0 112 0a56 56 0 0 0-112 0zM300 844.497a56 56 0 1 0 56-96.994a56 56 0 0 0-56 96.994zM640 796a56 56 0 1 0 112 0a56 56 0 0 0-112 0z" fill="currentColor"/></svg>
  )
}