import React from 'react'

export default function PersonAddSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54h36z" fill="currentColor"/><circle cx="288" cy="144" r="112" fill="currentColor"/><path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" fill="currentColor"/></svg>
  )
}