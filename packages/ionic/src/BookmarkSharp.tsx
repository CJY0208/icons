import React from 'react'

export default function BookmarkSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M416 480L256 357.41L96 480V32h320z" fill="currentColor"/></svg>
  )
}