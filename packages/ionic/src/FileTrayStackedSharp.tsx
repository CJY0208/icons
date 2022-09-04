import React from 'react'

export default function FileTrayStackedSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M448 16H64L32 176v144h448V176zm-12 160H320a64 64 0 0 1-128 0H76L98 58h316z" fill="currentColor"/><path d="M320 352a64 64 0 0 1-128 0H32v144h448V352z" fill="currentColor"/></svg>
  )
}